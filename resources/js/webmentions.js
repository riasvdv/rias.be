import firebase from './firebase';
import formatRelative from 'date-fns/formatRelative'

const container = document.querySelector("[data-webmentions]");

if (container) {
    fetch(`https://firestore.googleapis.com/v1/projects/${firebase.app().options.projectId}/databases/(default)/documents/webmentions`)
        .then(response => {
            response.json().then(data => {
                let webmentions = {
                    likes: [],
                    retweets: [],
                    comments: [],
                };

                data.documents.forEach(doc => {
                    const data = doc.fields;
                    switch (data.type.stringValue) {
                        case 'like':
                            return webmentions.likes.push(data);
                        case 'retweet':
                            return webmentions.retweets.push(data);
                        default:
                            return webmentions.comments.push(data)
                    }
                });

                renderWebmentions(container, webmentions);
            });
        });
}

function renderWebmentions(container, webmentions) {
    container.innerHTML = "";

    if (webmentions.likes.length === 0 && webmentions.retweets.length === 0 && webmentions.comments.length === 0) {
        return;
    }

    container.innerHTML = '<h3 class="mb-6 leading-tight">Reactions</h3>';

    const webmentionComments = document.createElement("ul");
    webmentionComments.className = "pb-12 sm:pb-24";

    webmentions.comments.forEach(comment => {
        webmentionComments.appendChild(renderWebmention(comment));
    });

    if (webmentions.likes.length > 0) {
        container.appendChild(renderAvatarList(webmentions.likes.length > 1 ? 'likes' : 'like', webmentions.likes));
    }

    if (webmentions.retweets.length > 0) {
        container.appendChild(renderAvatarList(webmentions.retweets.length > 1 ? 'retweets' : 'retweet', webmentions.retweets));
    }

    container.appendChild(webmentionComments);
}

function renderAvatarList(label, webmentions) {
    const list = document.createElement("ul");
    list.className = "pb-6 sm:pb-12 text-left flex";

    const count = document.createElement('div');
    count.innerHTML = webmentions.length + "&nbsp;" + label;
    count.className = 'flex-no-shrink mr-6';
    list.appendChild(count);

    const reactions = document.createElement('div');

    webmentions.forEach(like => {
        reactions.appendChild(renderLike(like));
    });

    list.appendChild(reactions);

    return list;
}

function renderLike(webmention) {
    const rendered = document.importNode(
        document.getElementById("webmention-like-template").content,
        true
    );

    function set(selector, attribute, value) {
        rendered.querySelector(selector)[attribute] = value;
    }

    set("[data-author]", "href", webmention.author_url.stringValue || '');
    set("[data-author-avatar]", "src", webmention.author_photo_url.stringValue);
    set("[data-author-avatar]", "alt", `Photo of ${webmention.author_name.stringValue}`);

    return rendered;
}

function renderWebmention(webmention) {
    const rendered = document.importNode(
        document.getElementById("webmention-template").content,
        true
    );

    function set(selector, attribute, value) {
        rendered.querySelector(selector)[attribute] = value;
    }

    function typeAction(type) {
        switch (type) {
            case 'like':
                return 'liked';
            case 'reply':
                return 'replied';
            case 'retweet':
                return 'retweeted';
        }
    }

    set("[data-author]", "href", webmention.author_url ? webmention.author_url.stringValue : '');
    set("[data-author-avatar]", "src", webmention.author_photo_url ? webmention.author_photo_url.stringValue : '');
    set("[data-author-avatar]", "alt", webmention.author_name ? `Photo of ${webmention.author_name.stringValue}` : '');
    set("[data-author-name]", "textContent", webmention.author_name ? webmention.author_name.stringValue : '');
    set("[data-type]", "textContent", typeAction(webmention.type.stringValue));
    set("[data-date]", "href", webmention.interaction_url ? webmention.interaction_url.stringValue : '');
    set("[data-date]", "textContent", webmention.created_at.seconds && webmention.created_at.seconds.timestampValue
        ? formatRelative(new Date(webmention.created_at.seconds.timestampValue * 1000), new Date)
        : ''
    );

    if (webmention.text.stringValue && webmention.type.stringValue === 'replied') {
        set(
            "[data-content]",
            "innerHTML",
            webmention.text
        );
    }

    return rendered;
}
