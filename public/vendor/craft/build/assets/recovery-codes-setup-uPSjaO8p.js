import{c as e,n as t,t as n}from"./lit-DNaDb1T7.js";import"./dist-hw24LBHM.js";import{n as r}from"./decorators-D0-gbKXH.js";import{o as i}from"./nav-item-DEjaz-rb-B-cPuDFl.js";import{t as a}from"./decorate-B3KLIx2E.js";var o=class extends n{constructor(...t){super(...t),this.form=null,this.submitButton=null,this.codes=[],this.handleSubmit=async e=>{e.preventDefault(),this.submitButton?.setAttribute(`loading`,`true`),Craft.cp.announce(i(`Loading`));let t=e.target;try{let e=await(await fetch(t.getAttribute(`action`),{method:`POST`,body:JSON.stringify(new FormData(t)),headers:{Accept:`application/json`,"Content-Type":`application/json`}})).json();this.handleSuccess(e)}catch(e){console.error({error:e})}finally{this.submitButton?.removeAttribute(`loading`),Craft.cp.announce(Craft.t(`app`,`Loading complete`))}},this.successTemplate=({codes:t,message:n})=>e`
      <div class="grid gap-6 justify-items-center flex-1">
        <div class="grid justify-items-center gap-2">
          <craft-icon
            name="circle-check"
            data-color="success"
            style="font-size: 36px"
          ></craft-icon>
          <h1 class="auth-method-setup-success-message" tabindex="-1">
            ${n}
          </h1>
        </div>
        <craft-pane class="w-3/4">
          <div class="grid gap-4">
            <ul class="text-center font-mono">
              ${t.map(t=>e`<li>${t}</li>`)}
            </ul>

            <hr />
            <div class="flex justify-center">
              <craft-button
                type="button"
                icon="download"
                .action="${{type:`download`,method:`POST`,url:`auth/download-recovery-codes`}}"
              >
                ${i(`Download Codes`)}
              </craft-button>
            </div>
          </div>
        </craft-pane>
      </div>
    `}connectedCallback(){if(super.connectedCallback(),this.form=this.querySelector(`form`),!this.form){console.warn(`<craft-recovery-codes-setup/> must wrap a <form/> element.`);return}this.form.addEventListener(`submit`,this.handleSubmit),this.submitButton=this.form.querySelector(`[type="submit"]`)}handleSuccess(e){this.form?.remove(),t(this.successTemplate(e),this)}createRenderRoot(){return this}};a([r({attribute:`container-id`})],o.prototype,`containerId`,void 0),customElements.get(`craft-recovery-codes-setup`)||customElements.define(`craft-recovery-codes-setup`,o);export{o as t};