import * as functions from 'firebase-functions';
import {Request} from "firebase-functions/lib/providers/https";
import * as admin from "firebase-admin";

admin.initializeApp();

type webmentionRequest = Request & {
  body: {
    secret: string,
    source: string,
    target: string,
    post: {
      type: string,
      author: {
        name: string,
        photo: string,
        url: string,
      },
      url: string,
      published: string,
      name: string,
      "wm-property": 'in-reply-to' | 'like-of' | 'repost-of' | string,
      "wm-id"?: string,
      content?: {
        text: string,
      }
    }
  }
}

function getType(type: string) {
  switch (type) {
    case 'in-reply-to':
      return 'reply';
    case 'like-of':
    case 'bookmark-of':
      return 'like';
    case 'repost-of':
    case 'mention-of':
      return 'retweet';
    default:
      return undefined;
  }
}

const secret = functions.config().webmention.secret;

export const webmentions = functions.https.onRequest((request: webmentionRequest, response) => {
  if (request.method !== 'POST') {
    return response.status(500).send('Not Allowed');
  }

  if (secret !== request.body.secret) {
    return response.status(400).send("Invalid secret");
  }

  if (request.body.post === undefined) {
    console.warn("No post content:", JSON.stringify(request.body));
    return response.status(400).send("Needs post content");
  }

  const type = getType(request.body.post['wm-property']);

  if (type === undefined) {
    return response.send('ok');
  }

  return admin.firestore()
      .collection('webmentions')
      .where('webmention_id', '==', request.body.post['wm-id'])
      .get()
      .then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          return response.send('Already added');
        }

        let target = request.body.target;
        target += target.endsWith('/') ? '' : '/';

        return admin.firestore().collection('webmentions').add({
          type: type,
          webmention_id: request.body.post['wm-id'] || '',
          author_name: request.body.post.author.name,
          author_photo_url: request.body.post.author.photo,
          author_url: request.body.post.author.url,
          post_url: target,
          interaction_url: request.body.source,
          text: request.body.post.content ? request.body.post.content.text : '',
          created_at: request.body.post.published ? new Date(request.body.post.published) : new Date(),
        }).then(result => {
          return response.send('Webmention added');
        }).catch(error => {
          return response.status(500).send(error);
        });
      });
});
