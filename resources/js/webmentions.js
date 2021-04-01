const container = document.querySelector("[data-webmentions]");

if (container) {
    const url = container.dataset.webmentions.replace(/\/$/, "");
    fetch(`https://webmention.io/api/mentions.jf2?target=${url}`)
        .then(response => {
            response.json().then(data => {
                let webmentions = {
                    likes: [],
                    retweets: [],
                };

                data.children.forEach(doc => {
                    switch (doc['wm-property']) {
                        case 'like-of':
                            return webmentions.likes.push(doc);
                        case 'repost-of':
                            return webmentions.retweets.push(doc);
                        default:
                            return;
                    }
                });

                renderWebmentions(container, webmentions);
            });
        });
}

function renderWebmentions(container, webmentions) {
    container.innerHTML = "";

    if (webmentions.likes.length === 0 && webmentions.retweets.length === 0) {
        return;
    }

    container.innerHTML = '<h3 class="mb-6 leading-tight">Reactions</h3>';

    if (webmentions.likes.length > 0) {
        container.appendChild(renderAvatarList(webmentions.likes.length > 1 ? 'likes' : 'like', webmentions.likes));
    }

    if (webmentions.retweets.length > 0) {
        container.appendChild(renderAvatarList(webmentions.retweets.length > 1 ? 'retweets' : 'retweet', webmentions.retweets));
    }
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

    set("[data-author]", "href", webmention.author.url);
    set("[data-author-avatar]", "src", webmention.author.photo);
    set("[data-author-avatar]", "alt", `Photo of ${webmention.author.name}`);

    return rendered;
}
