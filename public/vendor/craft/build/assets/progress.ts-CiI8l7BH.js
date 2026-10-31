import{a as e,f as t,n,r,u as i}from"./decorators-lVTfPMaS.js";import{c as a,l as o,o as s,s as c,u as l}from"./http.ts-w7TDbLb6.js";function u(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakMap,_=new WeakMap,v=new WeakMap,y=new WeakMap,b=new WeakMap,x=new WeakMap,S=new WeakMap,C=new WeakSet,w=class extends r{constructor(...e){super(...e),o(this,C),this.progress=0,this.failed=!1,this.color=`currentColor`,this.bgColor=`#a3afbb`,this.failColor=`#da5a47`,this.label=`Progress`,this.autoComplete=!1,c(this,d,null),c(this,f,0),c(this,p,0),c(this,m,0),c(this,h,0),c(this,g,0),c(this,_,null),c(this,v,null),c(this,y,0),c(this,b,null),c(this,x,0),c(this,S,!1)}connectedCallback(){super.connectedCallback(),s(S,this,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),this.hasUpdated&&l(C,this,T).call(this)}disconnectedCallback(){l(C,this,M).call(this),super.disconnectedCallback()}firstUpdated(){s(d,this,this.renderRoot.querySelector(`canvas`)),l(C,this,E).call(this),l(C,this,D).call(this)}updated(e){e.has(`progress`)?l(C,this,D).call(this):(e.has(`color`)||e.has(`bgColor`)||e.has(`failColor`)||e.has(`failed`))&&l(C,this,k).call(this)}get canvas(){return a(d,this)}get prefersReducedMotion(){return a(S,this)}runCompleteAnimation(){return new Promise(e=>{if(a(S,this)){s(g,this,1),a(d,this)&&(a(d,this).style.opacity=`0`),l(C,this,k).call(this),e();return}l(C,this,j).call(this,1,()=>{a(d,this)&&(a(d,this).style.transition=`opacity 0.4s`,a(d,this).style.opacity=`0`),setTimeout(e,400)})})}async complete(){await this.runCompleteAnimation(),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0}))}render(){return i`
      <canvas
        part="canvas"
        role="progressbar"
        aria-valuenow=${(this.progress>=0?this.progress:void 0)??e}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      ></canvas>
      <span class="visually-hidden">
        ${this.failed?`Failed`:this.progress<0?`Loading`:`${this.progress}%`}
      </span>
    `}};function T(){if(this.progress<0)a(b,this)===null&&l(C,this,O).call(this);else if(a(v,this)){let{targetEndPos:e,callback:t}=a(v,this);l(C,this,j).call(this,e,t)}}function E(){let e=getComputedStyle(this),t=parseFloat(e.getPropertyValue(`--_size`)),n=parseFloat(e.getPropertyValue(`--_stroke-width`)),r=window.devicePixelRatio>1?2:1;s(f,this,t*r),s(p,this,a(f,this)/2),s(h,this,n*r),s(m,this,(t/2-n/2)*r),a(d,this)&&(a(d,this).width=a(f,this),a(d,this).height=a(f,this))}function D(){if(this.progress>=0&&a(b,this)!==null&&(cancelAnimationFrame(a(b,this)),s(b,this,null),s(y,this,0)),this.progress<0){a(b,this)===null&&l(C,this,O).call(this);return}let e=this.progress/100;if(this.autoComplete&&this.progress>=100&&a(x,this)<100){s(x,this,this.progress),this.complete();return}a(x,this)>0&&this.progress>a(x,this)&&!a(S,this)?l(C,this,j).call(this,e):(s(g,this,e),l(C,this,k).call(this)),s(x,this,this.progress)}function O(){if(a(S,this)){s(g,this,.25),l(C,this,k).call(this);return}let e=()=>{s(y,this,a(y,this)+.05),s(g,this,.15+.1*Math.sin(a(y,this)*3)),l(C,this,k).call(this),s(b,this,requestAnimationFrame(e))};s(b,this,requestAnimationFrame(e))}function k(){let e=a(d,this)?.getContext(`2d`);if(e){if(e.clearRect(0,0,a(f,this),a(f,this)),this.failed){l(C,this,A).call(this,e,this.failColor,1,0);return}if(l(C,this,A).call(this,e,this.bgColor,1,0),a(g,this)>0){let t=this.progress<0?a(y,this):-Math.PI/2;l(C,this,A).call(this,e,this.color,a(g,this),t)}}}function A(e,t,n,r){e.strokeStyle=t,e.lineWidth=a(h,this),e.lineCap=`round`,e.beginPath(),e.arc(a(p,this),a(p,this),a(m,this),r,r+n*2*Math.PI),e.stroke()}function j(e,t){l(C,this,M).call(this),s(v,this,{targetEndPos:e,callback:t});let n=performance.now(),r=a(g,this),i=a=>{let o=a-n,c=Math.min(o/500,1),u=1-(1-c)**3;s(g,this,r+(e-r)*u),l(C,this,k).call(this),c<1?s(_,this,requestAnimationFrame(i)):(s(_,this,null),s(v,this,null),t?.())};s(_,this,requestAnimationFrame(i))}function M(){a(_,this)!==null&&(cancelAnimationFrame(a(_,this)),s(_,this,null)),a(b,this)!==null&&(cancelAnimationFrame(a(b,this)),s(b,this,null))}w.styles=t`
    :host {
      --_size: var(--c-progress-size, 16px);
      --_stroke-width: var(--c-progress-stroke-width, 3px);

      display: inline-block;
      position: relative;
      width: var(--_size);
      height: var(--_size);
    }

    canvas {
      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;
      width: var(--_size);
      height: var(--_size);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,u([n({type:Number})],w.prototype,`progress`,void 0),u([n({type:Boolean})],w.prototype,`failed`,void 0),u([n({type:String})],w.prototype,`color`,void 0),u([n({type:String,attribute:`bg-color`})],w.prototype,`bgColor`,void 0),u([n({type:String,attribute:`fail-color`})],w.prototype,`failColor`,void 0),u([n({type:String})],w.prototype,`label`,void 0),u([n({type:Boolean,attribute:`auto-complete`})],w.prototype,`autoComplete`,void 0),customElements.get(`craft-progress`)||customElements.define(`craft-progress`,w);export{u as t};