import{c as e,r as t,t as n}from"./lit-DNaDb1T7.js";import"./dist-hw24LBHM.js";import{n as r,t as i}from"./decorators-D0-gbKXH.js";import{o as a}from"./nav-item-DEjaz-rb-B-cPuDFl.js";import{t as o}from"./login-form.styles-9UCN0x5D.js";import{t as s}from"./decorate-B3KLIx2E.js";var c=class extends n{constructor(...e){super(...e),this.action=``,this.uid=``,this.code=``,this.initialError=``,this.newUser=!1,this._busy=!1}static{this.styles=[o]}#e(){return this.newUser?a(`Choose a password`):a(`Choose a new password`)}#t(){this._busy=!0}render(){return e`
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

        ${this.initialError?e`<craft-callout class="auth-form__error" variant="danger"
              >${this.initialError}</craft-callout
            >`:t}
      </craft-pane>
    `}};s([r()],c.prototype,`action`,void 0),s([r()],c.prototype,`uid`,void 0),s([r()],c.prototype,`code`,void 0),s([r({attribute:`initial-error`})],c.prototype,`initialError`,void 0),s([r({type:Boolean,attribute:`new-user`})],c.prototype,`newUser`,void 0),s([i()],c.prototype,`_busy`,void 0),customElements.get(`craft-set-password-form`)||customElements.define(`craft-set-password-form`,c);