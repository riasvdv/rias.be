import{a as e,f as t,r as n,u as r}from"./decorators-lVTfPMaS.js";import{t as i}from"./custom-element-Bov83m9_.js";import{q as a}from"./cp-Ast2Gc3-.js";import{r as o}from"./apiClient.ts-Dq8Yqgjg.js";import{n as s}from"./translate.ts-C8WHLkly.js";import{i as c,n as l,t as u}from"./wayfinder-Byp9MxZi.js";import"./actionClient.ts-PGxpJYQl.js";import{t as d}from"./decorate-B3KLIx2E.js";import"./button.ts-CGAekTEh.js";var f=(e,t)=>({url:f.url(e,t),method:`post`});f.definition={methods:[`post`],url:`/{cpTrigger?}/notifications/mark-read`},f.url=(e,t)=>{(typeof e==`string`||typeof e==`number`)&&(e={cpTrigger:e}),Array.isArray(e)&&(e={cpTrigger:e[0]}),e=u(e),c(e,[`cpTrigger`]);let n={cpTrigger:e?.cpTrigger??`admin`};return f.definition.url.replace(`{cpTrigger?}`,n.cpTrigger?.toString()??``).replace(/\/+$/,``)+l(t)},f.post=(e,t)=>({url:f.url(e,t),method:`post`});var p=null,m=new Set;function h(){return p??window.Craft?.notifications??[]}function g(e){e!==p&&(p=e,m.forEach(e=>e()))}function _(e){return m.add(e),()=>m.delete(e)}function v(e,t){g(h().map(n=>e.includes(n.id)?{...n,unread:t}:n))}async function y(e){let t=h().filter(t=>t.unread&&e.includes(t.id)).map(e=>e.id);if(t.length){v(t,!1);try{await o.post(f().url,{ids:t})}catch{v(t,!0),Craft.cp?.displayError?.(s(`Couldn’t mark notifications as read.`))}}}function b(e){if(new URL(e).origin!==window.location.origin){window.location.assign(e);return}window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var x=class extends n{static{this.styles=t`
    :host {
      display: block;
    }

    .notification-item {
      position: relative;
      display: flex;
      gap: 0.75rem;
      padding: 1rem;
      border-block-end: 1px solid var(--c-color-neutral-border-quiet);
    }

    .notification-item--read {
      opacity: 0.7;
    }

    .notification-card-link {
      position: absolute;
      z-index: 1;
      inset: 0;
    }

    .notification-visual {
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      overflow: hidden;
      border-radius: var(--c-radius-md);
    }

    .notification-visual--icon {
      color: var(--c-text-default);
      background-color: var(--c-color-neutral-fill-quiet);
    }

    .notification-visual--icon craft-icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
    }

    .notification-visual--icon svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    .notification-visual craft-thumbnail {
      --c-thumbnail-size: 100%;
    }

    .notification-visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .notification-content {
      min-width: 0;
      flex-grow: 1;
    }

    .notification-title-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .notification-title {
      min-width: 0;
      margin: 0;
      font-size: var(--c-text-lg);
      font-weight: var(--font-weight-semibold);
      line-height: 1.25;
    }

    .notification-message {
      position: relative;
      margin-block-start: 0.25rem;
      font-size: var(--c-text-base);
    }

    .notification-message a {
      position: relative;
      z-index: 2;
    }

    .notification-message p {
      margin: 0;
    }

    .notification-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25rem;
      margin-block-start: 0.5rem;
      color: var(--c-text-quiet);
      font-size: var(--c-text-sm);
    }

    .notification-mark-read {
      position: relative;
      z-index: 2;
      font-size: inherit;
    }

    .notification-actions {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-block-start: 0.75rem;
    }
  `}#e;connectedCallback(){super.connectedCallback(),this.#e=_(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.#e?.()}async#t(e,t){let n=y(e);await this.updateComplete,t()?.focus(),await n}#n(e,t){return e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t.target!==``&&t.target!==`_self`}async#r(e,t){let n=t.composedPath().find(e=>e instanceof HTMLAnchorElement);if(n){if(this.#n(t,n)){e.unread&&y([e.id]);return}t.preventDefault();try{await y([e.id])}finally{this.dispatchEvent(new CustomEvent(`cp-notification-navigate`,{bubbles:!0,composed:!0,cancelable:!0,detail:{url:n.href}}))&&b(n.href)}}}#i(t){return r`
      <div
        class="notification-visual ${t.image?``:`notification-visual--icon`}"
      >
        ${t.image?r`
              <craft-thumbnail>
                <img
                  src=${t.image}
                  alt=${t.imageAlt??``}
                />
              </craft-thumbnail>
            `:t.icon?r`
                <craft-icon
                  name=${t.icon}
                  appearance="plain"
                  aria-hidden="true"
                ></craft-icon>
              `:e}
      </div>
    `}#a(t,n){return r`
      <article
        part=${n?`item first-item`:`item`}
        class="notification-item ${t.unread?``:`notification-item--read`}"
        role="listitem"
        @click=${e=>this.#r(t,e)}
      >
        ${t.url?r`
              <a
                class="notification-card-link"
                href=${t.url}
                aria-label=${t.title??s(`Open notification`)}
              ></a>
            `:e}
        ${this.#i(t)}

        <div class="notification-content">
          <div class="notification-title-row">
            ${t.title?r`<h3 class="notification-title">${t.title}</h3>`:e}
            ${t.unread?r`
                  <craft-badge-indicator
                    alt-text=${s(`Unread`)}
                  ></craft-badge-indicator>
                `:e}
          </div>

          <div class="notification-message">
            ${a(t.messageHtml)}
          </div>

          <div class="notification-meta">
            ${t.byline?r`
                  <span>${t.byline}</span>
                  <span aria-hidden="true">·</span>
                `:e}
            <time datetime=${t.createdAt}
              >${t.createdAtLabel}</time
            >
            ${t.unread?r`
                  <span aria-hidden="true">·</span>
                  <craft-button
                    class="notification-mark-read"
                    type="button"
                    size="small"
                    variant="plain"
                    flush
                    @click=${e=>{e.stopPropagation();let n=e.currentTarget.closest(`article`);this.#t([t.id],()=>n?.querySelector(`.notification-card-link`))}}
                  >
                    ${s(`Mark as read`)}
                  </craft-button>
                `:e}
          </div>

          ${t.buttons.length?r`
                <div class="notification-actions">
                  ${t.buttons.map(e=>r`
                      <craft-button
                        .href=${e.url}
                        .target=${e.target}
                        .icon=${e.icon}
                        variant=${e.variant}
                        size="small"
                      >
                        ${e.label}
                      </craft-button>
                    `)}
                </div>
              `:e}
        </div>
      </article>
    `}render(){return r`
      <div role="list">
        ${h().map((e,t)=>this.#a(e,t===0))}
      </div>
    `}};x=d([i(`cp-notification-list`)],x);export{g as a,_ as i,y as n,b as r,h as t};