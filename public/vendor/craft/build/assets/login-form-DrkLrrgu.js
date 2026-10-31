import{a as e,f as t,n,p as r,r as i,t as a,u as o}from"./decorators-lVTfPMaS.js";import{t as s}from"./query-Df4-SAIv.js";import{J as c,q as l}from"./cp-Ast2Gc3-.js";import{a as u}from"./http.ts-w7TDbLb6.js";import{i as d,r as f}from"./apiClient.ts-Dq8Yqgjg.js";import{n as p}from"./translate.ts-C8WHLkly.js";import{t as m}from"./useAnnouncer-CCNEF9F8.js";import"./actionClient.ts-PGxpJYQl.js";import{t as h}from"./login-form.styles-B3nFU77s.js";import{t as g}from"./craft-global-DXgTl2Kg.js";import{t as _}from"./decorate-B3KLIx2E.js";function v(e){let t=new Uint8Array(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}function y(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=(4-t.length%4)%4,r=t.padEnd(t.length+n,`=`),i=atob(r),a=new ArrayBuffer(i.length),o=new Uint8Array(a);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);return a}function b(){return x.stubThis(globalThis?.PublicKeyCredential!==void 0&&typeof globalThis.PublicKeyCredential==`function`)}var x={stubThis:e=>e};function S(e){let{id:t}=e;return{...e,id:y(t),transports:e.transports}}function C(e){return e===`localhost`||/^((xn--[a-z0-9-]+|[a-z0-9]+(-[a-z0-9]+)*)\.)+([a-z]{2,}|xn--[a-z0-9-]+)$/i.test(e)}var w=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=r??n.name,this.code=t}};function T({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new w({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new w({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new w({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new w({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new w({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new w({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new w({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new w({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!C(t))return new w({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new w({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new w({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new w({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}var E=new class{constructor(){Object.defineProperty(this,"controller",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}},D=[`cross-platform`,`platform`];function O(e){if(e&&!(D.indexOf(e)<0))return e}async function k(e){!e.optionsJSON&&e.challenge&&(console.warn(`startRegistration() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useAutoRegister:n=!1}=e;if(!b())throw Error(`WebAuthn is not supported in this browser`);let r={...t,challenge:y(t.challenge),user:{...t.user,id:y(t.user.id)},excludeCredentials:t.excludeCredentials?.map(S)},i={};n&&(i.mediation=`conditional`),i.publicKey=r,i.signal=E.createNewAbortSignal();let a;try{a=await navigator.credentials.create(i)}catch(e){throw T({error:e,options:i})}if(!a)throw Error(`Registration was not completed`);let{id:o,rawId:s,response:c,type:l}=a,u;typeof c.getTransports==`function`&&(u=c.getTransports());let d;if(typeof c.getPublicKeyAlgorithm==`function`)try{d=c.getPublicKeyAlgorithm()}catch(e){A(`getPublicKeyAlgorithm()`,e)}let f;if(typeof c.getPublicKey==`function`)try{let e=c.getPublicKey();e!==null&&(f=v(e))}catch(e){A(`getPublicKey()`,e)}let p;if(typeof c.getAuthenticatorData==`function`)try{p=v(c.getAuthenticatorData())}catch(e){A(`getAuthenticatorData()`,e)}return{id:o,rawId:v(s),response:{attestationObject:v(c.attestationObject),clientDataJSON:v(c.clientDataJSON),transports:u,publicKeyAlgorithm:d,publicKey:f,authenticatorData:p},type:l,clientExtensionResults:a.getClientExtensionResults(),authenticatorAttachment:O(a.authenticatorAttachment)}}function A(e,t){console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.\n`,t)}function j(){if(!b())return M.stubThis(new Promise(e=>e(!1)));let e=globalThis.PublicKeyCredential;return e?.isConditionalMediationAvailable===void 0?M.stubThis(new Promise(e=>e(!1))):M.stubThis(e.isConditionalMediationAvailable())}var M={stubThis:e=>e};function N({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new w({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new w({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!C(t))return new w({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new w({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new w({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}async function P(e){!e.optionsJSON&&e.challenge&&(console.warn(`startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useBrowserAutofill:n=!1,verifyBrowserAutofillInput:r=!0}=e;if(!b())throw Error(`WebAuthn is not supported in this browser`);let i;t.allowCredentials?.length!==0&&(i=t.allowCredentials?.map(S));let a={...t,challenge:y(t.challenge),allowCredentials:i},o={};if(n){if(!await j())throw Error(`Browser does not support WebAuthn autofill`);if(document.querySelectorAll(`input[autocomplete$='webauthn']`).length<1&&r)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');o.mediation=`conditional`,a.allowCredentials=[]}o.publicKey=a,o.signal=E.createNewAbortSignal();let s;try{s=await navigator.credentials.get(o)}catch(e){throw N({error:e,options:o})}if(!s)throw Error(`Authentication was not completed`);let{id:c,rawId:l,response:u,type:d}=s,f;return u.userHandle&&(f=v(u.userHandle)),{id:c,rawId:v(l),response:{authenticatorData:v(u.authenticatorData),clientDataJSON:v(u.clientDataJSON),signature:v(u.signature),userHandle:f},type:d,clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:O(s.authenticatorAttachment)}}function F(){return b()?PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable():new Promise(e=>e(!1))}var I=`:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox,craft-radio>input[type=radio],input[type=radio].cp-radio{appearance:none;line-height:inherit;margin-block:calc((1lh - var(--c-checkbox-size)) / 2);width:var(--c-checkbox-size);height:var(--c-checkbox-size);border:var(--c-form-control-border-width) var(--c-form-control-border-style) var(--c-checkbox-border-color,var(--c-form-control-border-color));border-radius:var(--c-checkbox-radius);background-color:var(--c-input-fill);color:var(--c-checkbox-checked-mark,var(--c-color-accent-on-loud));cursor:pointer;flex-shrink:0;place-items:center;margin-inline:0;display:inline-grid}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox,craft-radio>input[type=radio],input[type=radio].cp-radio):before{content:"";aspect-ratio:1;visibility:hidden;background-color:currentColor;width:65%}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox,craft-radio>input[type=radio],input[type=radio].cp-radio):checked{background-color:var(--c-checkbox-checked-fill,var(--c-color-accent-fill-loud));border-color:#0000}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox,craft-radio>input[type=radio],input[type=radio].cp-radio):checked:before{visibility:visible}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox,craft-radio>input[type=radio],input[type=radio].cp-radio):disabled{opacity:.5;cursor:not-allowed}@media (forced-colors:active){:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox,craft-radio>input[type=radio],input[type=radio].cp-radio):checked{border-color:highlight}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox,craft-radio>input[type=radio],input[type=radio].cp-radio):before{forced-color-adjust:none;background-color:highlight}}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox):before{-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox):indeterminate{background-color:var(--c-checkbox-checked-fill,var(--c-color-accent-fill-loud));border-color:#0000}:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox):indeterminate:before{visibility:visible;aspect-ratio:auto;border-radius:1px;width:55%;height:2px;-webkit-mask-image:none;mask-image:none}@media (forced-colors:active){:is(:is(craft-checkbox,craft-checkbox-indeterminate)>input[type=checkbox],input[type=checkbox].cp-checkbox):indeterminate{border-color:highlight}}craft-radio>input[type=radio],input[type=radio].cp-radio{border-radius:50%}:is(craft-radio>input[type=radio],input[type=radio].cp-radio):before{border-radius:50%;width:40%}craft-radio[data-button]>input[type=radio]{border-radius:inherit;border:0;width:100%;height:100%;margin:0;position:absolute;inset:0}craft-radio[data-button]>input[type=radio],craft-radio[data-button]>input[type=radio]:checked{background-color:#0000}craft-radio[data-button]>input[type=radio]:checked{cursor:default}craft-radio[data-button]>input[type=radio]:before{display:none}craft-radio[data-button]>input[type=radio]:disabled{opacity:1}craft-radio[data-button][data-button-start]>input[type=radio]{border-start-start-radius:calc(var(--c-button-radius,var(--c-form-control-radius)) - 1px);border-end-start-radius:calc(var(--c-button-radius,var(--c-form-control-radius)) - 1px)}craft-radio[data-button][data-button-end]>input[type=radio]{border-start-end-radius:calc(var(--c-button-radius,var(--c-form-control-radius)) - 1px);border-end-end-radius:calc(var(--c-button-radius,var(--c-form-control-radius)) - 1px)}`,L=new Map,R=class extends i{constructor(...e){super(...e),this.returnUrl=``,this._state=`idle`}static{this.styles=[t`
      :host {
        display: block;
        width: 100%;
      }

      .spinner-overlay {
        display: grid;
        place-items: center;
      }

      .login-form__fields {
        display: flex;
        gap: var(--c-spacing-md);
        align-items: end;
      }

      .login-form__actions {
        margin-block-start: var(--c-spacing-lg);
      }

      .login-form__error {
        margin-block-start: var(--c-spacing-md);
      }

      .alternative-login-methods {
        margin-block-start: var(--c-spacing-lg);
      }

      hr {
        margin-block: var(--c-spacing-lg);
        border: none;
        border-block-end: 1px solid var(--c-color-border-quiet);
      }
    `]}firstUpdated(){this._input?.focus()}async _onSubmit(e){e.preventDefault(),await this._submit(this._input?.value??``)}async _submit(e){if(this._state!==`loading`){this._state=`loading`;try{await f.post(this.endpoint,{code:e}),this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.returnUrl}})),this._state=`success`,setTimeout(()=>{this._state=`idle`},2e3)}catch(e){this._state=`error`,this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:e?.response?.data?.message??p(`A server error occurred.`)}}))}}}renderInput(){return o`<slot name="input">
      <div>
        ${p(`Implement the renderInput() method or provide an input slot`)}
      </div>
    </slot>`}renderFields(){return o`
      <slot name="fields">
        ${this.renderInput()}
        <slot name="submit-button">
          <craft-button
            slot="after"
            type="submit"
            variant="primary"
            ?loading="${this._state===`loading`}"
          >
            ${p(`Verify`)}
          </craft-button>
        </slot>
      </slot>
    `}render(){return o`
      <form
        class="login-form"
        accept-charset="UTF-8"
        @submit="${this._onSubmit}"
      >
        <div class="login-form__fields">${this.renderFields()}</div>
      </form>
    `}static register(e,t){customElements.get(e)||customElements.define(e,t),L.set(t.METHOD,t)}static isNative(e){return L.has(e)}};_([n({attribute:`return-url`})],R.prototype,`returnUrl`,void 0),_([a()],R.prototype,`_state`,void 0),_([s(`craft-input`)],R.prototype,`_input`,void 0),g({AuthChallengeForm:R});var z=class extends R{static{this.METHOD=`totp`}get endpoint(){return`auth/verify-totp`}renderInput(){return o`
      <craft-input
        label="${p(`Verification Code`)}"
        id="totp-code"
        class="totp-code"
        name="code"
        .maxlength="${6}"
        autocomplete="one-time-code"
        inputmode="numeric"
        aria-required="true"
      ></craft-input>
    `}};_([s(`craft-input.totp-code`)],z.prototype,`_input`,void 0),R.register(`craft-totp-form`,z);var B=class extends R{static{this.METHOD=`recovery-codes`}get endpoint(){return`auth/verify-recovery-code`}renderInput(){return o`
      <craft-input
        label="${p(`Recovery Code`)}"
        id="recovery-code"
        class="recovery-code"
        name="code"
        autocomplete="off"
        aria-required="true"
      ></craft-input>
    `}};_([s(`craft-input.recovery-code`)],B.prototype,`_input`,void 0),R.register(`craft-recovery-code-form`,B);var V=class extends i{constructor(...e){super(...e),this._switching=!1,this.#e=!1,this.#t=null}static{this.styles=[h]}#e;#t;async updated(e){super.updated(e),!R.isNative(this.data?.authMethod)&&!this.#e&&!this._switching&&this._container&&(this.#e=!0,await this.#n())}async#n(){if(!this._container)return;let e=document.createElement(`template`);e.innerHTML=this.data.authForm.trim();let t=e.content.firstElementChild;t&&(this.#t!==this.data&&(this.#t=this.data,await Craft.appendHeadHtml(this.data.headHtml),await Craft.appendBodyHtml(this.data.bodyHtml)),Craft.initUiElements(t),Craft.createAuthFormHandler(this.data.authMethod,t,()=>{this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.data.returnUrl}}))},e=>this.#r(e)),this._container.append(t),this._container.querySelector(`:focus-visible, input, button`)?.focus())}#r(e){this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:e}}))}async#i(e){this._switching=!0,this.#e=!1;let t=null;try{let n=await fetch(e.url,{headers:{Accept:`application/json`,"Content-Type":`application/json`}}),r=await n.json().catch(()=>null);n.ok&&r?this.data=r:t=r?.message??p(`A server error occurred.`)}catch{t=p(`A server error occurred.`)}finally{this._switching=!1}t!==null&&this.#r(t)}render(){return this._switching?o`
        <craft-pane>
          <div class="spinner-overlay">
            <craft-spinner></craft-spinner>
          </div>
        </craft-pane>
      `:o`
      <craft-pane>
        <div class="auth-form-container">
          ${R.isNative(this.data?.authMethod)?l(this.data.authForm):e}
        </div>
        ${this.data.otherMethods.length?o`
              <hr />
              <craft-action-menu>
                <craft-button slot="invoker" variant="plain" size="zero">
                  <craft-icon slot="prefix" name="chevron-down"></craft-icon>
                  ${p(`Try another way`)}
                </craft-button>

                <div slot="content">
                  ${this.data.otherMethods.map(e=>o`
                      <craft-action-item
                        @click="${()=>this.#i(e)}"
                      >
                        ${e.name}
                      </craft-action-item>
                    `)}
                </div>
              </craft-action-menu>
            `:e}
      </craft-pane>
    `}};_([n({attribute:!1})],V.prototype,`data`,void 0),_([a()],V.prototype,`_switching`,void 0),_([s(`.auth-form-container`)],V.prototype,`_container`,void 0),customElements.get(`craft-login-challenge`)||customElements.define(`craft-login-challenge`,V);var H=class extends i{constructor(...e){super(...e),this.useEmailAsUsername=!1,this.username=``,this._busy=!1,this._error=``}static{this.styles=[h]}firstUpdated(){this.updateComplete.then(()=>{this._input?.focus()})}#e(){return this.useEmailAsUsername?p(`Email`):p(`Username or Email`)}#t(e){let t=e.trim();this._error=t,m().announce(t)}async#n(e){e.preventDefault(),this._error=``,this._busy=!0;try{await f.post(`users/send-password-reset-email`,{loginName:this._input.value});let e=document.createElement(`craft-dialog`);e.setAttribute(`label`,p(`Check your email`)),e.setAttribute(`open`,``);let t=document.createElement(`p`);t.textContent=p(`Check your email for instructions to reset your password.`),e.appendChild(t),document.body.appendChild(e)}catch(e){this.#t(e?.response?.data?.message??p(`A server error occurred.`))}finally{this._busy=!1}}#r(){this.dispatchEvent(new CustomEvent(`craft:login:reset-back`,{bubbles:!0,composed:!0,detail:{username:this._input?.value??``}}))}render(){return o`
      <craft-pane>
        <form
          class="auth-form auth-form--reset"
          method="post"
          accept-charset="UTF-8"
          @submit="${this.#n}"
        >
          <craft-field-group>
            <craft-input
              label="${this.#e()}"
              id="reset-username"
              type="${this.useEmailAsUsername?`email`:`text`}"
              class="reset-username"
              name="username"
              .value="${this.username}"
              autocomplete="username"
              autocapitalize="off"
              required
            >
            </craft-input>
          </craft-field-group>

          <div class="auth-form__actions">
            <craft-button
              type="submit"
              variant="accent"
              ?loading="${this._busy}"
            >
              ${p(`Reset password`)}
            </craft-button>
          </div>

          ${this._error?o`<craft-callout variant="danger" class="auth-form__error"
                >${this._error}</craft-callout
              >`:e}
        </form>

        <hr />

        <craft-button
          type="button"
          variant="link"
          size="small"
          @click="${this.#r}"
        >
          <craft-icon slot="prefix" name="arrow-left"></craft-icon>
          ${p(`Back to sign in`)}
        </craft-button>
      </craft-pane>
    `}};_([n({type:Boolean,attribute:`use-email-as-username`})],H.prototype,`useEmailAsUsername`,void 0),_([n()],H.prototype,`username`,void 0),_([a()],H.prototype,`_busy`,void 0),_([a()],H.prototype,`_error`,void 0),_([s(`.reset-username`)],H.prototype,`_input`,void 0),customElements.get(`craft-login-reset-password`)||customElements.define(`craft-login-reset-password`,H);var U=class extends i{constructor(...e){super(...e),this.showPasskeyBtn=!0,this.showResetPassword=!1,this.showRememberMe=!1,this.username=``,this.staticEmail=``,this.useEmailAsUsername=!1,this.rememberMeLabel=``,this.initialError=``,this.action=``,this._view=`login`,this._error=``,this._loginBusy=!1,this._passkeyBusy=!1,this._canUsePasskey=!1,this._twoFactorData=null,this._resetUsername=``}static{this.styles=[c,r(I),h]}async connectedCallback(){super.connectedCallback(),this.initialError&&(this._error=this.initialError),this.showPasskeyBtn&&b()&&(this._canUsePasskey=await F())}focus(e){this.updateComplete.then(()=>{(this.staticEmail?this._passwordInput:this._usernameInput??this._passwordInput)?.focus(e)})}#e(){return this.useEmailAsUsername?p(`Email`):p(`Username or Email`)}async#t(e){e.preventDefault(),this._error=``,this._loginBusy=!0;try{await d.refreshToken();let e=await fetch(this.action,{method:`post`,headers:{Accept:`application/json`,"Content-Type":`application/json`,"X-CSRF-TOKEN":u.getInstance().get(`csrfTokenValue`)},body:JSON.stringify({loginName:this._usernameInput.value,password:this._passwordInput.value,rememberMe:this._rememberMeInput?.checked?`1`:``})}),t=await e.json();if(!e.ok)throw Error(t.message||`A server error occurred.`);t.authMethod?(this._twoFactorData=t,this._view=`challenge`,this._loginBusy=!1):(await this.#c(t.returnUrl),this._loginBusy=!1)}catch(e){this._loginBusy=!1,this.#s(e.message)}}async#n(){if(!this._passkeyBusy){this._error=``,this._passkeyBusy=!0;try{let{data:e}=await f.post(`auth/passkey-request-options`),t=await P({optionsJSON:JSON.parse(e.options)}),{data:n}=await f.post(`users/login-with-passkey`,{requestOptions:e.options,authResponse:JSON.stringify(t)});await this.#c(n.returnUrl),this._passkeyBusy=!1}catch(e){this._passkeyBusy=!1;let t=e?.response?.data?.message;t?this.#s(t):console.warn(e)}}}#r(){this._error=``,this._resetUsername=this._usernameInput?.value??``,this._view=`reset-password`}#i(e){let t=e.detail?.username??``;this._view=`login`,this.updateComplete.then(()=>{t&&this._usernameInput&&(this._usernameInput.value=t),this._usernameInput?.focus()})}async#a(e){try{await this.#c(e.detail.returnUrl)}catch(e){this.#s(e.message)}}#o(e){let{message:t}=e.detail,n=new CustomEvent(`craft:login:error`,{bubbles:!0,composed:!0,cancelable:!0,detail:{message:t}});this.dispatchEvent(n),n.defaultPrevented||this.#s(t)}#s(e){let{announce:t}=m();this._error=e.trim(),t(this._error)}async#c(e){await d.refreshToken();let t=new CustomEvent(`craft:login:success`,{bubbles:!0,composed:!0,cancelable:!0,detail:{returnUrl:e}});this.dispatchEvent(t),t.defaultPrevented||(window.location.href=e)}render(){return o`
      <div>
        <span
          class="cp-visually-hidden"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        ></span>

        ${this._view===`login`?this.#l():this._view===`reset-password`?o`
                <craft-login-reset-password
                  ?use-email-as-username="${this.useEmailAsUsername}"
                  username="${this._resetUsername}"
                  @craft:login:reset-back="${this.#i}"
                ></craft-login-reset-password>
              `:o`
                <craft-login-challenge
                  .data="${this._twoFactorData}"
                  @login-verified="${this.#a}"
                  @login-failed="${this.#o}"
                ></craft-login-challenge>
              `}
      </div>
    `}#l(){let t=this._canUsePasskey||this.querySelector(`[slot="alternative-methods"]`);return o`
      <craft-pane>
        <form
          class="auth-form"
          method="post"
          accept-charset="UTF-8"
          @submit="${this.#t}"
        >
          <craft-field-group>
            ${this.staticEmail?o`<input
                  type="hidden"
                  class="login-username"
                  name="username"
                  .value="${this.staticEmail}"
                />`:o`
                  <div class="field">
                    <craft-input
                      label="${this.#e()}"
                      id="login-username"
                      type="${this.useEmailAsUsername?`email`:`text`}"
                      class="login-username"
                      name="username"
                      .value="${this.username}"
                      autocomplete="username"
                      autocapitalize="off"
                      required
                    />
                  </div>
                `}

            <div>
              <craft-input-password
                label="${p(`Password`)}"
                id="login-password"
                class="login-password"
                name="password"
                autocomplete="current-password"
                required
              ></craft-input-password>

              ${this.showResetPassword?o`
                    <craft-button
                      type="button"
                      size="small"
                      variant="link"
                      @click="${this.#r}"
                      style="margin-block-start: var(--c-spacing-sm)"
                    >
                      ${p(`Forgot password?`)}
                    </craft-button>
                  `:e}
            </div>

            ${this.showRememberMe?o`
                  <div class="remember-me-row">
                    <craft-checkbox
                      label="${this.rememberMeLabel||p(`Stay signed in`)}"
                      type="checkbox"
                      id="login-remember-me"
                      class="login-remember-me"
                    ></craft-checkbox>
                  </div>
                `:e}
          </craft-field-group>

          <div class="auth-form__actions">
            <craft-button
              type="submit"
              variant="primary"
              ?loading="${this._loginBusy}"
              style="width: 100%"
            >
              ${p(`Sign in`)}
            </craft-button>
          </div>
        </form>

        ${this._error?o`<craft-callout class="auth-form__error" variant="danger"
              >${this._error}</craft-callout
            >`:e}
      </craft-pane>

      ${t?o`
            <div class="alternative-login-methods">
              ${this._canUsePasskey?o`
                    <craft-button
                      type="button"
                      variant="fill"
                      ?loading="${this._passkeyBusy}"
                      @click="${this.#n}"
                      style="width: 100%"
                    >
                      ${p(`Sign in with a passkey`)}
                    </craft-button>
                  `:e}
              <slot name="alternative-methods"></slot>
            </div>
          `:e}
    `}};_([n({type:Boolean,attribute:`show-passkey-btn`})],U.prototype,`showPasskeyBtn`,void 0),_([n({type:Boolean,attribute:`show-reset-password`})],U.prototype,`showResetPassword`,void 0),_([n({type:Boolean,attribute:`show-remember-me`})],U.prototype,`showRememberMe`,void 0),_([n()],U.prototype,`username`,void 0),_([n({attribute:`static-email`})],U.prototype,`staticEmail`,void 0),_([n({type:Boolean,attribute:`use-email-as-username`})],U.prototype,`useEmailAsUsername`,void 0),_([n({attribute:`remember-me-label`})],U.prototype,`rememberMeLabel`,void 0),_([n({attribute:`initial-error`})],U.prototype,`initialError`,void 0),_([n()],U.prototype,`action`,void 0),_([a()],U.prototype,`_view`,void 0),_([a()],U.prototype,`_error`,void 0),_([a()],U.prototype,`_loginBusy`,void 0),_([a()],U.prototype,`_passkeyBusy`,void 0),_([a()],U.prototype,`_canUsePasskey`,void 0),_([a()],U.prototype,`_twoFactorData`,void 0),_([a()],U.prototype,`_resetUsername`,void 0),_([s(`.login-username`)],U.prototype,`_usernameInput`,void 0),_([s(`craft-input-password.login-password`)],U.prototype,`_passwordInput`,void 0),_([s(`.login-remember-me`)],U.prototype,`_rememberMeInput`,void 0),customElements.get(`craft-login-form`)||customElements.define(`craft-login-form`,U);export{k as n,b as r,F as t};