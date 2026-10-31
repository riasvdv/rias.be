import{a as e,f as t,n,r,u as i}from"./decorators-lVTfPMaS.js";import{t as a}from"./custom-element-Bov83m9_.js";import{t as o}from"./query-Df4-SAIv.js";import"./cp-Ast2Gc3-.js";import{n as s}from"./translate.ts-C8WHLkly.js";import{t as c}from"./decorate-B3KLIx2E.js";import"./popover.ts-CGAekTEh.js";import"./button.ts-CGAekTEh.js";import{a as l,i as u,n as d,t as f}from"./cp-notification-list-D_ChHJg2.js";var p=class extends r{static{this.styles=t`
    :host {
      display: contents;
    }

    .notification-trigger {
      --c-icon-size: 1em;
      position: relative;
    }

    .notification-trigger__badge {
      --badge-border-width: 2px;
      display: inline-flex;
      position: absolute;
      inset-block-start: 0;
      inset-inline-end: 0;
    }

    .notification-trigger__badge::part(badge) {
      background-color: var(--c-color-danger-fill-loud);
    }

    craft-popover::part(popup) {
      width: min(26rem, calc(100vw - 2rem));
      max-width: none;
      max-height: none;
      overflow: hidden;
    }

    .notification-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-block: 0.75rem;
      padding-inline: 1rem;
    }

    .notification-heading {
      margin: 0;
      font-size: var(--c-text-lg);
      font-weight: var(--font-weight-semibold);
    }

    cp-notification-list {
      max-height: min(34rem, calc(100vh - 8rem));
      overflow-y: auto;
      border-block-start: 1px solid var(--c-color-neutral-border-quiet);
    }
  `}set notifications(e){l(e)}get notifications(){return f()}#e;connectedCallback(){super.connectedCallback(),this.#e=u(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.#e?.()}get#t(){return this.notifications.filter(e=>e.unread)}get#n(){return this.#t.length?s(`Notifications, {count} unread`,{count:this.#t.length}):s(`Notifications`)}async#r(){let e=d(this.#t.map(e=>e.id));await this.updateComplete,this.headingElement?.focus(),await e}render(){return this.notifications.length?i`
      <craft-popover placement="bottom-end" .distance=${8}>
        <craft-button
          slot="invoker"
          class="notification-trigger"
          type="button"
          size="small"
          variant="plain"
          icon
          aria-label=${this.#n}
        >
          <span slot="prefix">
            <craft-icon
              class="notification-trigger__icon"
              name="bell"
            ></craft-icon>
            ${this.#t.length?i`
                  <craft-badge-indicator
                    class="notification-trigger__badge"
                  ></craft-badge-indicator>
                `:e}
          </span>
        </craft-button>

        <div slot="content">
          <header class="notification-header">
            <h2 class="notification-heading" tabindex="-1">
              ${s(`Notifications`)}
            </h2>
            ${this.#t.length?i`
                  <craft-button
                    type="button"
                    size="small"
                    variant="plain"
                    @click=${()=>this.#r()}
                  >
                    ${s(`Mark all as read`)}
                  </craft-button>
                `:e}
          </header>
          <cp-notification-list
            @cp-notification-navigate=${()=>void this.popoverElement?.hide()}
          ></cp-notification-list>
        </div>
      </craft-popover>
    `:e}};c([n({type:Array,attribute:!1})],p.prototype,`notifications`,null),c([o(`craft-popover`)],p.prototype,`popoverElement`,void 0),c([o(`.notification-heading`)],p.prototype,`headingElement`,void 0),p=c([a(`cp-notification-center`)],p);var m=p;export{m as t};