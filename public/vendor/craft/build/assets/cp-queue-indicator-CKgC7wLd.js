import{c as e,f as t,r as n,t as r}from"./lit-DNaDb1T7.js";import{t as i}from"./custom-element-Bov83m9_.js";import{n as a}from"./decorators-D0-gbKXH.js";import"./progress.ts-Cuortqxu.js";import{t as o}from"./decorate-B3KLIx2E.js";import{n as s,t as c}from"./queue-VxT4j09c.js";var l=class extends r{constructor(...e){super(...e),this.displayedJob=null,this.hasReservedJobs=!1,this.hasWaitingJobs=!1,this.#e=c.getInstance(),this.#t=e=>{this.displayedJob=e.detail.displayedJob}}static{this.styles=t`
    :host {
      display: contents;
    }

    :host(:not([visible])) {
      display: none;
    }

    .progress-label {
      font-size: 0.85em;
      opacity: 0.7;
    }
  `}#e;connectedCallback(){super.connectedCallback(),this.displayedJob||=this.#e.displayedJob,this.#e.addEventListener(`job-update`,this.#t),this.#r(),this.#n()}disconnectedCallback(){super.disconnectedCallback(),this.#e.removeEventListener(`job-update`,this.#t)}update(e){super.update(e),(e.has(`hasReservedJobs`)||e.has(`hasWaitingJobs`))&&this.#n(),e.has(`displayedJob`)&&this.#r()}#t;#n(){this.hasReservedJobs?this.#e.startTracking():this.hasWaitingJobs&&this.#e.runQueue()}#r(){this.displayedJob?this.setAttribute(`visible`,``):this.removeAttribute(`visible`)}get#i(){return this.displayedJob?this.displayedJob.status.value===s.Failed?100:this.displayedJob.progress??0:0}get#a(){return this.displayedJob?.status.value===s.Failed}get#o(){return this.#e.canAccessQueueManager?null:Craft.getCpUrl(`utilities/queue-manager`)}render(){return this.displayedJob?e`
      <craft-nav-item .href=${this.#o}>
        <craft-progress
          slot="prefix"
          progress=${this.#i}
          ?failed=${this.#a}
          label=${this.displayedJob.description||`Queue`}
        ></craft-progress>
        <div class="label">
          <span class="title">${this.displayedJob.description}</span>
          ${this.displayedJob.progressLabel?e`<span class="progress-label"
                >${this.displayedJob.progressLabel}</span
              >`:n}
        </div>
      </craft-nav-item>
    `:n}};o([a({type:Object,attribute:`displayed-job`})],l.prototype,`displayedJob`,void 0),o([a({type:Boolean,attribute:`has-reserved-jobs`})],l.prototype,`hasReservedJobs`,void 0),o([a({type:Boolean,attribute:`has-waiting-jobs`})],l.prototype,`hasWaitingJobs`,void 0),l=o([i(`cp-queue-indicator`)],l);var u=l;export{u as t};