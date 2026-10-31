import{a as e,n as t,r as n,t as r,u as i}from"./decorators-lVTfPMaS.js";import"./cp-Ast2Gc3-.js";import{n as a}from"./translate.ts-C8WHLkly.js";import{t as o}from"./login-form.styles-B3nFU77s.js";import{t as s}from"./decorate-B3KLIx2E.js";var c=class extends n{constructor(...e){super(...e),this.action=``,this.uid=``,this.code=``,this.passwordRules=``,this.initialError=``,this.newUser=!1,this._busy=!1}static{this.styles=[o]}#e(){return this.newUser?a(`Choose a password`):a(`Choose a new password`)}#t(){this._busy=!0}render(){return i`
      <craft-pane>
        <form
          class="auth-form"
          method="post"
          action="${this.action}"
          accept-charset="UTF-8"
          @submit="${this.#t}"
        >
          <input type="hidden" name="uid" value="${this.uid}" />
          <input type="hidden" name="code" value="${this.code}" />

          <craft-field-group>
            <craft-input-password
              label="${this.#e()}"
              id="newPassword"
              name="newPassword"
              autocomplete="new-password"
              passwordrules="${this.passwordRules}"
              required
              autofocus
            ></craft-input-password>
          </craft-field-group>

          <div class="auth-form__actions">
            <craft-button
              type="submit"
              variant="accent"
              ?loading="${this._busy}"
              style="width: 100%"
            >
              ${a(`Set Password`)}
            </craft-button>
          </div>
        </form>

        ${this.initialError?i`<craft-callout class="auth-form__error" variant="danger"
              >${this.initialError}</craft-callout
            >`:e}
      </craft-pane>
    `}};s([t()],c.prototype,`action`,void 0),s([t()],c.prototype,`uid`,void 0),s([t()],c.prototype,`code`,void 0),s([t({attribute:`password-rules`})],c.prototype,`passwordRules`,void 0),s([t({attribute:`initial-error`})],c.prototype,`initialError`,void 0),s([t({type:Boolean,attribute:`new-user`})],c.prototype,`newUser`,void 0),s([r()],c.prototype,`_busy`,void 0),customElements.get(`craft-set-password-form`)||customElements.define(`craft-set-password-form`,c);