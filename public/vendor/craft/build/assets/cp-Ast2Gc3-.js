const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bg-BG-BSOJu8wp.js","./bg-CyDc90Cg.js","./bg-tT2-9j0y.js","./cs-CZ-BXYisR25.js","./cs-BWxTtRvu.js","./cs-BWWtw9FR.js","./de-DE-CqA9yOdY.js","./de-B-RsGPDH.js","./de-D2KzmuNN.js","./en-AU-ClGzkm9N.js","./en-BAp3CEXj.js","./en-GB-ClGzkm9N.js","./en-US-ClGzkm9N.js","./en-Bn2liEJW.js","./es-ES-lc8truAL.js","./es-AljmSQ24.js","./es-BHRFfW-v.js","./fr-FR-BFPCNFnr.js","./fr-B_xQUJzD.js","./fr-BE-BFPCNFnr.js","./fr-BatdFrY1.js","./hu-HU-CgHBHfiG.js","./hu-BXZRjXNL.js","./hu-BGJUkRn0.js","./it-IT-DXWt8Y3M.js","./it-YWOHXwO3.js","./it-BbZB0zCO.js","./nl-BE-CN9u7Cp2.js","./nl-NcaH_H47.js","./nl-NL-CN9u7Cp2.js","./nl-CubSULoy.js","./pl-PL-D0K_dWml.js","./pl-B3WIPjRj.js","./pl-BhJlmndU.js","./ro-RO-BXVNXH1J.js","./ro-BH8II-L7.js","./ro-75jeTe0N.js","./ru-RU-BpGy32BK.js","./ru-BfJB39nV.js","./ru-DU7uFj2i.js","./sk-SK-wewEOZGv.js","./sk-ByGJf4W9.js","./sk-cN9_UHno.js","./tr-TR-D1nJ_iYG.js","./tr-BoMERIKA.js","./tr-DuiqIpvR.js","./uk-UA-DHqiIGvL.js","./uk-MX8iTJHI.js","./uk-Cm-Wcqws.js","./bg-BG-BztIKams.js","./bg-BPUqFt1H.js","./bg-CLv3tqUg.js","./cs-CZ-VPjqqYsZ.js","./cs-AO9lYsOu.js","./cs-B7yAvqdQ.js","./de-DE-CsSmh1gZ.js","./de-Pg_tsxAM.js","./de-kP5ksqlV.js","./en-AU-3urcHPzk.js","./en-fMoNIH2J.js","./en-GB-3urcHPzk.js","./en-US-3urcHPzk.js","./en-CqZ6PnT7.js","./es-ES-BbUihx_Q.js","./es-DKHVE_l0.js","./es-CqwOJyIS.js","./fr-FR-CuiHGLXU.js","./fr-DUdkdF0c.js","./fr-BE-CuiHGLXU.js","./fr-DDoohrFe.js","./hu-HU-CsgTXklM.js","./hu-Bgbro8Lj.js","./hu-mlQa-ass.js","./id-ID-DmQHtDR1.js","./id-u5HD4jpB.js","./id-wVaUF8IY.js","./it-IT-UwtN86gq.js","./it-ByY8kQ-u.js","./it-Cau1XULR.js","./nl-BE-BWsuTFhd.js","./nl-CvaqzqpV.js","./nl-NL-BWsuTFhd.js","./nl-AKV00b4f.js","./pl-PL-DNBiW1Dr.js","./pl-DNBZxExJ.js","./pl-BYkVljz3.js","./ro-RO-f1xYkV2I.js","./ro-DGtcO-ss.js","./ro-ocFYhLc_.js","./ru-RU-CR2XPZpu.js","./ru-BJo0ABxJ.js","./ru-DZLJ_F1W.js","./sk-SK-zTlM1iZC.js","./sk-ro0cjqj8.js","./sk-DV9gBcF9.js","./uk-UA-Db28XQdn.js","./uk-CTKb9UGx.js","./uk-b3alyY__.js"])))=>i.map(i=>d[i]);
import{a as e,t}from"./rolldown-runtime-CNC7AqOf.js";import{t as n}from"./progress.ts-CiI8l7BH.js";import{a as r,d as i,f as a,i as o,n as s,o as c,p as l,r as u,s as d,t as f,u as p}from"./decorators-lVTfPMaS.js";import{n as m,t as h}from"./query-Df4-SAIv.js";import{c as g,l as _,o as v,s as y,u as b}from"./http.ts-w7TDbLb6.js";import{r as x}from"./apiClient.ts-Dq8Yqgjg.js";import{n as S}from"./translate.ts-C8WHLkly.js";function C(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return m(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter((e=>e.matches(i)))}})}}var w={Idle:`idle`,Loading:`loading`,Success:`success`,Error:`error`},ee=a`
  .a11y-error {
    position: relative;
    outline: 2px solid var(--c-color-danger-border-normal) !important;
    background-color: rgba(255, 0, 0, 0.1) !important;

    &:after {
      content: '!';
      position: absolute;
      display: inline-flex;
      font-size: calc(11rem / 16);
      padding-block: 0.125em 0.25em;
      padding-inline: 0.5em;
      inset-block-start: -2px;
      inset-inline-start: 0;
      background: var(--c-color-danger-bg-emphasis);
      color: white;
      transform: translateX(-100%);
    }
  }
`,T=e=>{class t extends e{constructor(...e){super(...e),this.shortcut=null}get shortcutKeys(){let e=this.shortcut;if(typeof e==`string`&&e.trim().startsWith(`{`))try{e=JSON.parse(e)}catch{}return e?typeof e==`string`?{key:e,alt:!1,shift:!1}:{key:e.key,alt:e.alt??!1,shift:e.shift??!1}:null}get shortcutAriaKeys(){let e=this.shortcutKeys;return e?[/mac|iphone|ipad|ipod/i.test(navigator.platform)?`Meta`:`Control`,...e.alt?[`Alt`]:[],...e.shift?[`Shift`]:[],e.key.length===1?e.key.toUpperCase():e.key].join(`+`):null}}return n([s()],t.prototype,`shortcut`,void 0),t},te=a`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;a`
  :host([data-color='red']),
  [data-color='red'] {
    --c-color-fill-quiet: var(--c-color-red-fill-quiet);
    --c-color-border-quiet: var(--c-color-red-border-quiet);
    --c-color-on-quiet: var(--c-color-red-on-quiet);
    --c-color-fill-normal: var(--c-color-red-fill-normal);
    --c-color-border-normal: var(--c-color-red-border-normal);
    --c-color-on-normal: var(--c-color-red-on-normal);
    --c-color-fill-loud: var(--c-color-red-fill-loud);
    --c-color-border-loud: var(--c-color-red-border-loud);
    --c-color-on-loud: var(--c-color-red-on-loud);
  }

  :host([data-color='orange']),
  [data-color='orange'] {
    --c-color-fill-quiet: var(--c-color-orange-fill-quiet);
    --c-color-border-quiet: var(--c-color-orange-border-quiet);
    --c-color-on-quiet: var(--c-color-orange-on-quiet);
    --c-color-fill-normal: var(--c-color-orange-fill-normal);
    --c-color-border-normal: var(--c-color-orange-border-normal);
    --c-color-on-normal: var(--c-color-orange-on-normal);
    --c-color-fill-loud: var(--c-color-orange-fill-loud);
    --c-color-border-loud: var(--c-color-orange-border-loud);
    --c-color-on-loud: var(--c-color-orange-on-loud);
  }

  :host([data-color='amber']),
  [data-color='amber'] {
    --c-color-fill-quiet: var(--c-color-amber-fill-quiet);
    --c-color-border-quiet: var(--c-color-amber-border-quiet);
    --c-color-on-quiet: var(--c-color-amber-on-quiet);
    --c-color-fill-normal: var(--c-color-amber-fill-normal);
    --c-color-border-normal: var(--c-color-amber-border-normal);
    --c-color-on-normal: var(--c-color-amber-on-normal);
    --c-color-fill-loud: var(--c-color-amber-fill-loud);
    --c-color-border-loud: var(--c-color-amber-border-loud);
    --c-color-on-loud: var(--c-color-amber-on-loud);
  }

  :host([data-color='yellow']),
  [data-color='yellow'] {
    --c-color-fill-quiet: var(--c-color-yellow-fill-quiet);
    --c-color-border-quiet: var(--c-color-yellow-border-quiet);
    --c-color-on-quiet: var(--c-color-yellow-on-quiet);
    --c-color-fill-normal: var(--c-color-yellow-fill-normal);
    --c-color-border-normal: var(--c-color-yellow-border-normal);
    --c-color-on-normal: var(--c-color-yellow-on-normal);
    --c-color-fill-loud: var(--c-color-yellow-fill-loud);
    --c-color-border-loud: var(--c-color-yellow-border-loud);
    --c-color-on-loud: var(--c-color-yellow-on-loud);
  }

  :host([data-color='lime']),
  [data-color='lime'] {
    --c-color-fill-quiet: var(--c-color-lime-fill-quiet);
    --c-color-border-quiet: var(--c-color-lime-border-quiet);
    --c-color-on-quiet: var(--c-color-lime-on-quiet);
    --c-color-fill-normal: var(--c-color-lime-fill-normal);
    --c-color-border-normal: var(--c-color-lime-border-normal);
    --c-color-on-normal: var(--c-color-lime-on-normal);
    --c-color-fill-loud: var(--c-color-lime-fill-loud);
    --c-color-border-loud: var(--c-color-lime-border-loud);
    --c-color-on-loud: var(--c-color-lime-on-loud);
  }

  :host([data-color='green']),
  [data-color='green'] {
    --c-color-fill-quiet: var(--c-color-green-fill-quiet);
    --c-color-border-quiet: var(--c-color-green-border-quiet);
    --c-color-on-quiet: var(--c-color-green-on-quiet);
    --c-color-fill-normal: var(--c-color-green-fill-normal);
    --c-color-border-normal: var(--c-color-green-border-normal);
    --c-color-on-normal: var(--c-color-green-on-normal);
    --c-color-fill-loud: var(--c-color-green-fill-loud);
    --c-color-border-loud: var(--c-color-green-border-loud);
    --c-color-on-loud: var(--c-color-green-on-loud);
  }

  :host([data-color='emerald']),
  [data-color='emerald'] {
    --c-color-fill-quiet: var(--c-color-emerald-fill-quiet);
    --c-color-border-quiet: var(--c-color-emerald-border-quiet);
    --c-color-on-quiet: var(--c-color-emerald-on-quiet);
    --c-color-fill-normal: var(--c-color-emerald-fill-normal);
    --c-color-border-normal: var(--c-color-emerald-border-normal);
    --c-color-on-normal: var(--c-color-emerald-on-normal);
    --c-color-fill-loud: var(--c-color-emerald-fill-loud);
    --c-color-border-loud: var(--c-color-emerald-border-loud);
    --c-color-on-loud: var(--c-color-emerald-on-loud);
  }

  :host([data-color='teal']),
  [data-color='teal'] {
    --c-color-fill-quiet: var(--c-color-teal-fill-quiet);
    --c-color-border-quiet: var(--c-color-teal-border-quiet);
    --c-color-on-quiet: var(--c-color-teal-on-quiet);
    --c-color-fill-normal: var(--c-color-teal-fill-normal);
    --c-color-border-normal: var(--c-color-teal-border-normal);
    --c-color-on-normal: var(--c-color-teal-on-normal);
    --c-color-fill-loud: var(--c-color-teal-fill-loud);
    --c-color-border-loud: var(--c-color-teal-border-loud);
    --c-color-on-loud: var(--c-color-teal-on-loud);
  }

  :host([data-color='cyan']),
  [data-color='cyan'] {
    --c-color-fill-quiet: var(--c-color-cyan-fill-quiet);
    --c-color-border-quiet: var(--c-color-cyan-border-quiet);
    --c-color-on-quiet: var(--c-color-cyan-on-quiet);
    --c-color-fill-normal: var(--c-color-cyan-fill-normal);
    --c-color-border-normal: var(--c-color-cyan-border-normal);
    --c-color-on-normal: var(--c-color-cyan-on-normal);
    --c-color-fill-loud: var(--c-color-cyan-fill-loud);
    --c-color-border-loud: var(--c-color-cyan-border-loud);
    --c-color-on-loud: var(--c-color-cyan-on-loud);
  }

  :host([data-color='sky']),
  [data-color='sky'] {
    --c-color-fill-quiet: var(--c-color-sky-fill-quiet);
    --c-color-border-quiet: var(--c-color-sky-border-quiet);
    --c-color-on-quiet: var(--c-color-sky-on-quiet);
    --c-color-fill-normal: var(--c-color-sky-fill-normal);
    --c-color-border-normal: var(--c-color-sky-border-normal);
    --c-color-on-normal: var(--c-color-sky-on-normal);
    --c-color-fill-loud: var(--c-color-sky-fill-loud);
    --c-color-border-loud: var(--c-color-sky-border-loud);
    --c-color-on-loud: var(--c-color-sky-on-loud);
  }

  :host([data-color='blue']),
  [data-color='blue'] {
    --c-color-fill-quiet: var(--c-color-blue-fill-quiet);
    --c-color-border-quiet: var(--c-color-blue-border-quiet);
    --c-color-on-quiet: var(--c-color-blue-on-quiet);
    --c-color-fill-normal: var(--c-color-blue-fill-normal);
    --c-color-border-normal: var(--c-color-blue-border-normal);
    --c-color-on-normal: var(--c-color-blue-on-normal);
    --c-color-fill-loud: var(--c-color-blue-fill-loud);
    --c-color-border-loud: var(--c-color-blue-border-loud);
    --c-color-on-loud: var(--c-color-blue-on-loud);
  }

  :host([data-color='indigo']),
  [data-color='indigo'] {
    --c-color-fill-quiet: var(--c-color-indigo-fill-quiet);
    --c-color-border-quiet: var(--c-color-indigo-border-quiet);
    --c-color-on-quiet: var(--c-color-indigo-on-quiet);
    --c-color-fill-normal: var(--c-color-indigo-fill-normal);
    --c-color-border-normal: var(--c-color-indigo-border-normal);
    --c-color-on-normal: var(--c-color-indigo-on-normal);
    --c-color-fill-loud: var(--c-color-indigo-fill-loud);
    --c-color-border-loud: var(--c-color-indigo-border-loud);
    --c-color-on-loud: var(--c-color-indigo-on-loud);
  }

  :host([data-color='violet']),
  [data-color='violet'] {
    --c-color-fill-quiet: var(--c-color-violet-fill-quiet);
    --c-color-border-quiet: var(--c-color-violet-border-quiet);
    --c-color-on-quiet: var(--c-color-violet-on-quiet);
    --c-color-fill-normal: var(--c-color-violet-fill-normal);
    --c-color-border-normal: var(--c-color-violet-border-normal);
    --c-color-on-normal: var(--c-color-violet-on-normal);
    --c-color-fill-loud: var(--c-color-violet-fill-loud);
    --c-color-border-loud: var(--c-color-violet-border-loud);
    --c-color-on-loud: var(--c-color-violet-on-loud);
  }

  :host([data-color='purple']),
  [data-color='purple'] {
    --c-color-fill-quiet: var(--c-color-purple-fill-quiet);
    --c-color-border-quiet: var(--c-color-purple-border-quiet);
    --c-color-on-quiet: var(--c-color-purple-on-quiet);
    --c-color-fill-normal: var(--c-color-purple-fill-normal);
    --c-color-border-normal: var(--c-color-purple-border-normal);
    --c-color-on-normal: var(--c-color-purple-on-normal);
    --c-color-fill-loud: var(--c-color-purple-fill-loud);
    --c-color-border-loud: var(--c-color-purple-border-loud);
    --c-color-on-loud: var(--c-color-purple-on-loud);
  }

  :host([data-color='fuchsia']),
  [data-color='fuchsia'] {
    --c-color-fill-quiet: var(--c-color-fuchsia-fill-quiet);
    --c-color-border-quiet: var(--c-color-fuchsia-border-quiet);
    --c-color-on-quiet: var(--c-color-fuchsia-on-quiet);
    --c-color-fill-normal: var(--c-color-fuchsia-fill-normal);
    --c-color-border-normal: var(--c-color-fuchsia-border-normal);
    --c-color-on-normal: var(--c-color-fuchsia-on-normal);
    --c-color-fill-loud: var(--c-color-fuchsia-fill-loud);
    --c-color-border-loud: var(--c-color-fuchsia-border-loud);
    --c-color-on-loud: var(--c-color-fuchsia-on-loud);
  }

  :host([data-color='pink']),
  [data-color='pink'] {
    --c-color-fill-quiet: var(--c-color-pink-fill-quiet);
    --c-color-border-quiet: var(--c-color-pink-border-quiet);
    --c-color-on-quiet: var(--c-color-pink-on-quiet);
    --c-color-fill-normal: var(--c-color-pink-fill-normal);
    --c-color-border-normal: var(--c-color-pink-border-normal);
    --c-color-on-normal: var(--c-color-pink-on-normal);
    --c-color-fill-loud: var(--c-color-pink-fill-loud);
    --c-color-border-loud: var(--c-color-pink-border-loud);
    --c-color-on-loud: var(--c-color-pink-on-loud);
  }

  :host([data-color='rose']),
  [data-color='rose'] {
    --c-color-fill-quiet: var(--c-color-rose-fill-quiet);
    --c-color-border-quiet: var(--c-color-rose-border-quiet);
    --c-color-on-quiet: var(--c-color-rose-on-quiet);
    --c-color-fill-normal: var(--c-color-rose-fill-normal);
    --c-color-border-normal: var(--c-color-rose-border-normal);
    --c-color-on-normal: var(--c-color-rose-on-normal);
    --c-color-fill-loud: var(--c-color-rose-fill-loud);
    --c-color-border-loud: var(--c-color-rose-border-loud);
    --c-color-on-loud: var(--c-color-rose-on-loud);
  }

  :host([data-color='white']),
  [data-color='white'] {
    --c-color-fill-quiet: var(--c-color-white-fill-quiet);
    --c-color-border-quiet: var(--c-color-white-border-quiet);
    --c-color-on-quiet: var(--c-color-white-on-quiet);
    --c-color-fill-normal: var(--c-color-white-fill-normal);
    --c-color-border-normal: var(--c-color-white-border-normal);
    --c-color-on-normal: var(--c-color-white-on-normal);
    --c-color-fill-loud: var(--c-color-white-fill-loud);
    --c-color-border-loud: var(--c-color-white-border-loud);
    --c-color-on-loud: var(--c-color-white-on-loud);
  }

  :host([data-color='gray']),
  [data-color='gray'] {
    --c-color-fill-quiet: var(--c-color-gray-fill-quiet);
    --c-color-border-quiet: var(--c-color-gray-border-quiet);
    --c-color-on-quiet: var(--c-color-gray-on-quiet);
    --c-color-fill-normal: var(--c-color-gray-fill-normal);
    --c-color-border-normal: var(--c-color-gray-border-normal);
    --c-color-on-normal: var(--c-color-gray-on-normal);
    --c-color-fill-loud: var(--c-color-gray-fill-loud);
    --c-color-border-loud: var(--c-color-gray-border-loud);
    --c-color-on-loud: var(--c-color-gray-on-loud);
  }

  :host([data-color='black']),
  [data-color='black'] {
    --c-color-fill-quiet: var(--c-color-black-fill-quiet);
    --c-color-border-quiet: var(--c-color-black-border-quiet);
    --c-color-on-quiet: var(--c-color-black-on-quiet);
    --c-color-fill-normal: var(--c-color-black-fill-normal);
    --c-color-border-normal: var(--c-color-black-border-normal);
    --c-color-on-normal: var(--c-color-black-on-normal);
    --c-color-fill-loud: var(--c-color-black-fill-loud);
    --c-color-border-loud: var(--c-color-black-border-loud);
    --c-color-on-loud: var(--c-color-black-on-loud);
  }

  :host([data-color='slate']),
  [data-color='slate'] {
    --c-color-fill-quiet: var(--c-color-slate-fill-quiet);
    --c-color-border-quiet: var(--c-color-slate-border-quiet);
    --c-color-on-quiet: var(--c-color-slate-on-quiet);
    --c-color-fill-normal: var(--c-color-slate-fill-normal);
    --c-color-border-normal: var(--c-color-slate-border-normal);
    --c-color-on-normal: var(--c-color-slate-on-normal);
    --c-color-fill-loud: var(--c-color-slate-fill-loud);
    --c-color-border-loud: var(--c-color-slate-border-loud);
    --c-color-on-loud: var(--c-color-slate-on-loud);
  }

  :host([data-color='neutral']),
  [data-color='neutral'] {
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
  }

  :host([data-color='accent']),
  [data-color='accent'] {
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    --c-color-border-quiet: var(--c-color-accent-border-quiet);
    --c-color-on-quiet: var(--c-color-accent-on-quiet);
    --c-color-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-border-normal: var(--c-color-accent-border-normal);
    --c-color-on-normal: var(--c-color-accent-on-normal);
    --c-color-fill-loud: var(--c-color-accent-fill-loud);
    --c-color-border-loud: var(--c-color-accent-border-loud);
    --c-color-on-loud: var(--c-color-accent-on-loud);
  }

  :host([data-color='info']),
  [data-color='info'] {
    --c-color-fill-quiet: var(--c-color-info-fill-quiet);
    --c-color-border-quiet: var(--c-color-info-border-quiet);
    --c-color-on-quiet: var(--c-color-info-on-quiet);
    --c-color-fill-normal: var(--c-color-info-fill-normal);
    --c-color-border-normal: var(--c-color-info-border-normal);
    --c-color-on-normal: var(--c-color-info-on-normal);
    --c-color-fill-loud: var(--c-color-info-fill-loud);
    --c-color-border-loud: var(--c-color-info-border-loud);
    --c-color-on-loud: var(--c-color-info-on-loud);
  }

  :host([data-color='success']),
  [data-color='success'] {
    --c-color-fill-quiet: var(--c-color-success-fill-quiet);
    --c-color-border-quiet: var(--c-color-success-border-quiet);
    --c-color-on-quiet: var(--c-color-success-on-quiet);
    --c-color-fill-normal: var(--c-color-success-fill-normal);
    --c-color-border-normal: var(--c-color-success-border-normal);
    --c-color-on-normal: var(--c-color-success-on-normal);
    --c-color-fill-loud: var(--c-color-success-fill-loud);
    --c-color-border-loud: var(--c-color-success-border-loud);
    --c-color-on-loud: var(--c-color-success-on-loud);
  }

  :host([data-color='warning']),
  [data-color='warning'] {
    --c-color-fill-quiet: var(--c-color-warning-fill-quiet);
    --c-color-border-quiet: var(--c-color-warning-border-quiet);
    --c-color-on-quiet: var(--c-color-warning-on-quiet);
    --c-color-fill-normal: var(--c-color-warning-fill-normal);
    --c-color-border-normal: var(--c-color-warning-border-normal);
    --c-color-on-normal: var(--c-color-warning-on-normal);
    --c-color-fill-loud: var(--c-color-warning-fill-loud);
    --c-color-border-loud: var(--c-color-warning-border-loud);
    --c-color-on-loud: var(--c-color-warning-on-loud);
  }

  :host([data-color='danger']),
  [data-color='danger'] {
    --c-color-fill-quiet: var(--c-color-danger-fill-quiet);
    --c-color-border-quiet: var(--c-color-danger-border-quiet);
    --c-color-on-quiet: var(--c-color-danger-on-quiet);
    --c-color-fill-normal: var(--c-color-danger-fill-normal);
    --c-color-border-normal: var(--c-color-danger-border-normal);
    --c-color-on-normal: var(--c-color-danger-on-normal);
    --c-color-fill-loud: var(--c-color-danger-fill-loud);
    --c-color-border-loud: var(--c-color-danger-border-loud);
    --c-color-on-loud: var(--c-color-danger-on-loud);
  }
`;var ne=a`
  :host([variant~='neutral']),
  [data-variant~='neutral'] {
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
  }

  :host([variant~='accent']),
  [data-variant~='accent'] {
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    --c-color-border-quiet: var(--c-color-accent-border-quiet);
    --c-color-on-quiet: var(--c-color-accent-on-quiet);
    --c-color-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-border-normal: var(--c-color-accent-border-normal);
    --c-color-on-normal: var(--c-color-accent-on-normal);
    --c-color-fill-loud: var(--c-color-accent-fill-loud);
    --c-color-border-loud: var(--c-color-accent-border-loud);
    --c-color-on-loud: var(--c-color-accent-on-loud);
  }

  :host([variant~='info']),
  [data-variant~='info'] {
    --c-color-fill-quiet: var(--c-color-info-fill-quiet);
    --c-color-border-quiet: var(--c-color-info-border-quiet);
    --c-color-on-quiet: var(--c-color-info-on-quiet);
    --c-color-fill-normal: var(--c-color-info-fill-normal);
    --c-color-border-normal: var(--c-color-info-border-normal);
    --c-color-on-normal: var(--c-color-info-on-normal);
    --c-color-fill-loud: var(--c-color-info-fill-loud);
    --c-color-border-loud: var(--c-color-info-border-loud);
    --c-color-on-loud: var(--c-color-info-on-loud);
  }

  :host([variant~='success']),
  [data-variant~='success'] {
    --c-color-fill-quiet: var(--c-color-success-fill-quiet);
    --c-color-border-quiet: var(--c-color-success-border-quiet);
    --c-color-on-quiet: var(--c-color-success-on-quiet);
    --c-color-fill-normal: var(--c-color-success-fill-normal);
    --c-color-border-normal: var(--c-color-success-border-normal);
    --c-color-on-normal: var(--c-color-success-on-normal);
    --c-color-fill-loud: var(--c-color-success-fill-loud);
    --c-color-border-loud: var(--c-color-success-border-loud);
    --c-color-on-loud: var(--c-color-success-on-loud);
  }

  :host([variant~='warning']),
  [data-variant~='warning'] {
    --c-color-fill-quiet: var(--c-color-warning-fill-quiet);
    --c-color-border-quiet: var(--c-color-warning-border-quiet);
    --c-color-on-quiet: var(--c-color-warning-on-quiet);
    --c-color-fill-normal: var(--c-color-warning-fill-normal);
    --c-color-border-normal: var(--c-color-warning-border-normal);
    --c-color-on-normal: var(--c-color-warning-on-normal);
    --c-color-fill-loud: var(--c-color-warning-fill-loud);
    --c-color-border-loud: var(--c-color-warning-border-loud);
    --c-color-on-loud: var(--c-color-warning-on-loud);
  }

  :host([variant~='danger']),
  [data-variant~='danger'] {
    --c-color-fill-quiet: var(--c-color-danger-fill-quiet);
    --c-color-border-quiet: var(--c-color-danger-border-quiet);
    --c-color-on-quiet: var(--c-color-danger-on-quiet);
    --c-color-fill-normal: var(--c-color-danger-fill-normal);
    --c-color-border-normal: var(--c-color-danger-border-normal);
    --c-color-on-normal: var(--c-color-danger-on-normal);
    --c-color-fill-loud: var(--c-color-danger-fill-loud);
    --c-color-border-loud: var(--c-color-danger-border-loud);
    --c-color-on-loud: var(--c-color-danger-on-loud);
  }
`,re={Neutral:`neutral`,Success:`success`,Warning:`warning`,Danger:`danger`,Info:`info`},ie=Object.values(re),ae=class{constructor(e,t={}){this.host=e,this.options=t,this.observer=new MutationObserver(()=>{this.options.onChange?.(),this.host.requestUpdate()}),e.addController(this)}hostConnected(){this.options.onChange?.(),this.observer.observe(this.host,{childList:!0,subtree:!0,characterData:this.options.characterData??!1,attributes:!0,attributeFilter:[`slot`,...this.options.attributeFilter??[]]})}hostDisconnected(){this.observer.disconnect()}};function oe(e,...t){return Array.from(e.children).some(e=>t.includes(e.slot))}var se=a`
  .cp-visually-hidden:not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,ce=class extends u{constructor(){super(),this.alt=!1,this.shift=!1,this.os=`Unknown`,this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),this.os===`Unknown`&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes(`mac`)||/iphone|ipad|ipod/.test(e)?`Mac`:e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Unknown`}modifierKeys(){return this.os===`Mac`?[...this.alt?[{label:`⌥`,name:`Option`}]:[],...this.shift?[{label:`⇧`,name:`Shift`}]:[],{label:`⌘`,name:`Command`}]:[this.os===`Linux`?`Super`:`Ctrl`,...this.alt?[`Alt`]:[],...this.shift?[`Shift`]:[]].map(e=>({label:e,name:e}))}render(){return p`<span class="shortcut"
      >${this.modifierKeys().map(e=>e.label===e.name?p`<kbd class="shortcut__key">${e.label}</kbd>`:p`<kbd class="shortcut__key"
              ><span aria-hidden="true">${e.label}</span
              ><span class="cp-visually-hidden">${e.name}</span></kbd
            >`)}<kbd class="shortcut__key"><slot></slot></kbd
    ></span>`}};ce.styles=[se,a`
      :host {
        display: inline-flex;
      }

      .shortcut {
        display: inline-flex;
        gap: 0.25em;
        font-size: 0.9em;
      }

      .shortcut__key {
        padding-block: 0;
        padding-inline: var(--c-spacing-sm);
        font: inherit;
        background-color: var(--c-color-neutral-fill-quiet);
        border: 1px solid var(--c-color-neutral-border-quiet);
        border-radius: var(--c-radius-sm);
        box-shadow: var(--c-shortcut-shadow, var(--c-shadow-sm));
      }
    `],n([s({type:Boolean})],ce.prototype,`alt`,void 0),n([s({type:Boolean})],ce.prototype,`shift`,void 0),n([s()],ce.prototype,`os`,void 0),customElements.get(`craft-shortcut`)||customElements.define(`craft-shortcut`,ce);var{I:le}=d,ue=e=>e===null||typeof e!=`object`&&typeof e!=`function`,de=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,fe=e=>e.strings===void 0,pe=()=>document.createComment(``),me=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new le(r.insertBefore(pe(),i),r.insertBefore(pe(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return n},he=(e,t,n=e)=>(e._$AI(t,n),e),ge={},_e=(e,t=ge)=>e._$AH=t,ve=e=>e._$AH,ye=e=>{e._$AR(),e._$AA.remove()},be=Symbol.for(`lion::SingletonManagerClassStorage`),xe=globalThis||window,Se=class{constructor(){this._map=xe[be]?xe[be]:xe[be]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}},Ce=e=>{let t=null,n=()=>(t===null&&(t=e()),t);return new Proxy({},{get(e,t){let r=n();return t===`addEventListener`||t===`removeEventListener`?Reflect.get(r,t).bind(r):t===`__instance_for_testing`?r:Reflect.get(r,t,r)},set(e,t,r){return Reflect.set(n(),t,r)},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(n(),t)},getPrototypeOf(){return Reflect.getPrototypeOf(n())}})},we=new Se,Te=class{constructor(){this.__iconResolvers=new Map}addIconResolver(e,t){if(this.__iconResolvers.has(e))throw Error(`An icon resolver has already been registered for namespace: ${e}`);this.__iconResolvers.set(e,t)}removeIconResolver(e){this.__iconResolvers.delete(e)}resolveIcon(e,t,n){let r=this.__iconResolvers.get(e);if(r)return r(t,n);throw Error(`Could not find any icon resolver for namespace ${e}.`)}resolveIconForId(e){let t=e.split(`:`);if(t.length!==3)throw Error(`Incorrect iconId: ${e}. Format: <namespace>:<iconset>:<icon>`);return this.resolveIcon(t[0],t[1],t[2])}};function Ee(){if(!we.has(`@lion/ui::icons::0.x`)){let e=new Te;we.set(`@lion/ui::icons::0.x`,e)}return we.get(`@lion/ui::icons::0.x`)}var De=Ce(Ee),Oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ke=e=>(...t)=>({_$litDirective$:e,values:t}),Ae=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},je=class extends Ae{constructor(e){if(super(e),this.it=r,e.type!==Oe.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===r||e==null)return this._t=void 0,this.it=e;if(e===c)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};je.directiveName=`unsafeHTML`,je.resultType=1;var Me=ke(je),Ne=class extends je{};Ne.directiveName=`unsafeSVG`,Ne.resultType=2;var Pe=ke(Ne),Fe=`craft`,Ie=new Map;function Le(e,t){return`${e}/${t}`}function Re(e){let[t=`classic`,n=`regular`]=e.split(`/`);return{family:t,variant:n}}async function ze(e){try{let t=await fetch(e,{mode:`cors`});if(!t.ok)return r;let n=document.createElement(`div`);n.innerHTML=await t.text();let i=n.firstElementChild;return i?.tagName?.toLowerCase()===`svg`?(i.setAttribute(`fill`,`currentColor`),i.setAttribute(`part`,`svg`),p`${Pe(i.outerHTML)}`):r}catch{return r}}function Be(e,t=`classic`,n=`regular`,r=`/vendor/craft/icons`){let i=`solid`,a=n,o=e.endsWith(`.svg`)?e.split(`.svg`)[0]:e;if(e.includes(`/`)){let[t,...n]=e.split(`/`);a=t??a,o=n.join(`/`)}return a===`thin`?i=`thin`:a===`light`?i=`light`:a===`regular`?i=`regular`:a===`solid`&&(i=`solid`),(t===`brands`||a===`brands`)&&(i=`brands`),(t===`custom-icons`||a===`custom-icons`)&&(i=`custom-icons`),`${r}/${i}/${o}.svg`}function Ve(e){return(t,n,i)=>{let a=e(t,n,i);if(a===null)return r;let o=Ie.get(a);return o||(o=ze(a),Ie.set(a,o)),o.then(e=>(e===r&&Ie.delete(a),e))}}var He=Ve(Be);function Ue(e){De.removeIconResolver(Fe),De.addIconResolver(Fe,(t,n)=>{let{family:r,variant:i}=Re(t);return e(n,r,i)})}function We(e,t=`classic`,n=`regular`){return Promise.resolve(De.resolveIcon(Fe,Le(t,n),e))}Ue(He);var Ge=new WeakSet,Ke=class extends u{constructor(...e){super(...e),_(this,Ge),this.appearance=`plain`,this._svg=r,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),this.appearance===`badge`&&!this.getAttribute(`data-color`)&&this.setAttribute(`data-color`,`warning`),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){b(Ge,this,Ye).call(this)}updated(e){super.updated(e),(e.has(`name`)||e.has(`family`)||e.has(`variant`))&&b(Ge,this,Je).call(this),e.has(`label`)&&this.hasUpdated&&b(Ge,this,Ye).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return p`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?r:this._svg}
    `}static get styles(){return[a`
        :host {
          box-sizing: content-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: -0.125em;
          width: 1.25em;
          height: 1em;
          font-size: var(--c-icon-size, 0.8em);
        }

        :host([data-color]) {
          color: var(--c-color-fill-loud);
        }

        svg,
        ::slotted(svg) {
          height: 1em;
          width: auto;
          overflow: visible;
        }

        :host([appearance~='badge']) {
          border: 1px solid var(--c-color-border-quiet);
          color: var(--c-color-on-quiet);
          background-color: var(--c-color-fill-quiet);
          border-radius: var(--c-radius-sm);
          width: 1.6em;
          height: 1.6em;

          svg {
            width: 0.9em;
          }
        }

        :host([appearance~='badge']) ::slotted(svg) {
          width: 0.9em;
        }
      `]}};function qe(){return this.name?{name:this.name,family:this.family??`classic`,variant:this.variant??`solid`}:null}async function Je(){let e=b(Ge,this,qe).call(this);if(e===null){this._svg=r;return}let t;try{t=await We(e.name,e.family,e.variant)}catch(e){console.error(e),t=r}let n=b(Ge,this,qe).call(this);n!==null&&e.name===n.name&&e.family===n.family&&e.variant===n.variant&&(this._svg=t)}function Ye(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}n([s({reflect:!0})],Ke.prototype,`name`,void 0),n([s({reflect:!0})],Ke.prototype,`family`,void 0),n([s({reflect:!0})],Ke.prototype,`variant`,void 0),n([s()],Ke.prototype,`label`,void 0),n([s({reflect:!0})],Ke.prototype,`appearance`,void 0),n([f()],Ke.prototype,`_svg`,void 0),n([f()],Ke.prototype,`_hasSlottedContent`,void 0),customElements.get(`craft-icon`)||customElements.define(`craft-icon`,Ke);var Xe=class extends u{constructor(...e){super(...e),this.debug=!1}render(){return p`<slot></slot>`}};Xe.styles=a`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,n([s({type:Boolean,reflect:!0})],Xe.prototype,`debug`,void 0),customElements.get(`craft-visually-hidden`)||customElements.define(`craft-visually-hidden`,Xe);var E=ke(class extends Ae{constructor(e){if(super(e),e.type!==Oe.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return c}}),Ze=a`
  :host {
    --_size: var(--size, 24px);
  }

  .wrapper {
    display: inline-flex;
    justify-content: center;
  }

  .hidden {
    display: none;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(1turn);
    }
  }

  .spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_size);
  }

  .spinner:before {
    display: block;
    content: '';
    font-size: 0;
    animation: rotator 0.7s linear infinite;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid transparent;
    border-inline-end-color: currentcolor;
    border-block-end-color: currentcolor;
    opacity: 0.8;
  }
`,Qe=class extends u{constructor(...e){super(...e),this.visible=!0,this.label=``}show(){this.visible=!0,this.dispatchEvent(new CustomEvent(`craft-show`))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent(`craft-hide`))}focus(){this.wrapper?.focus()}render(){return p`
      <div
        tabindex="-1"
        class="${E({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot>${this.label}</slot></span>
      </div>
    `}};Qe.styles=[se,Ze],n([s({reflect:!0,type:Boolean})],Qe.prototype,`visible`,void 0),n([s()],Qe.prototype,`label`,void 0),n([h(`.wrapper`)],Qe.prototype,`wrapper`,void 0),customElements.get(`craft-spinner`)||customElements.define(`craft-spinner`,Qe);var $e=`craft-action-menu, craft-popover`,et=`data-focus-key`;function tt(e){return!(e instanceof HTMLElement)||!e.isConnected||e===document.body||nt(e,`[inert]`)||e.matches(`:disabled`)?!1:typeof e.checkVisibility==`function`?e.checkVisibility({visibilityProperty:!0}):!nt(e,`[hidden]`)}function nt(e,t){let n=e;for(;n;){let e=n.closest(t);if(e)return e;let r=n.getRootNode();n=r instanceof ShadowRoot?r.host:null}return null}function rt(e){return e.querySelector(`:scope > [slot="invoker"]`)}function it(e){let t=[],n=e,r=nt(n,$e);for(;r;)rt(r)?.contains(n)||t.push(r),n=r,r=r.parentElement?nt(r.parentElement,$e):null;return t}function at(e){return nt(e,`[data-focus-scope]`)?.getAttribute(`data-focus-scope`)??null}function ot(e,t){let n=$e.split(`, `).map(e=>`${e}[${et}]`).join(`, `);return[...document.querySelectorAll(n)].filter(n=>n.getAttribute(`data-focus-key`)===e&&at(n)===t)}function st(e){if(!e)return()=>null;let t=it(e).map(e=>({menu:e,key:e.getAttribute(`data-focus-key`)||null,scopeKey:at(e)}));return()=>{if(tt(e))return e;for(let{menu:e}of t){let t=e.isConnected?rt(e):null;if(tt(t))return t}for(let{key:e,scopeKey:n}of t)if(e!==null)for(let t of ot(e,n)){let e=rt(t);if(tt(e))return e}return null}}function ct(e){if(typeof e!=`string`)return e;try{return JSON.parse(e)}catch{return null}}function lt(e,{trigger:t,sourceEvent:n}){let r={...e??{},...n?{sourceEvent:n}:{}};if(t){r.trigger=t;let e;Object.defineProperty(r,"returnFocus",{enumerable:!0,get:()=>e??=st(t)})}return r}async function ut(e,t={}){switch(e.type){case`clipboard`:await navigator.clipboard.writeText(e.value);break;case`http`:{if(e.confirm&&!confirm(e.confirm))return;let t=await fetch(e.url,{method:e.method||`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:e.body?JSON.stringify(e.body):void 0}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message??`Request failed`);for(let e of Array.isArray(n.messages)?n.messages:[])window.dispatchEvent(new CustomEvent(`craft-message`,{detail:e}));typeof n.redirect==`string`&&n.redirect&&dt(n.redirect);break}case`event`:if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:lt(e.detail,t)}));break;case`download`:{if(e.confirm&&!confirm(e.confirm))return;if(e.method&&e.method!==`GET`){let t=await x.request({url:e.url,method:e.method,data:e.body,responseType:`blob`}),n=String(t.headers[`content-disposition`]??``),r=/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(n),i=e.filename??(r?.[1]?decodeURIComponent(r[1]):`download`),a=URL.createObjectURL(t.data),o=document.createElement(`a`);o.href=a,o.download=i,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a);break}let t=document.createElement(`a`);t.href=e.url,t.download=e.filename??``,t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}function dt(e){window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var ft=e=>e??r,pt=a`
  :host {
    display: contents;
  }

  :host([hidden]) {
    display: none;
  }

  .action-item {
    color: var(--c-color-on-quiet, inherit);
    background-color: transparent;

    font: inherit;
    text-align: start;
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    padding-inline: var(--c-spacing-sm);
    padding-block: var(--c-spacing-sm);
    border-radius: var(--c-radius-md);
    position: relative;
    border: 1px solid transparent;
  }

  @media (hover: hover) {
    :host(:hover:not([active])) .action-item:not(:disabled) {
      background-color: var(
        --c-color-fill-quiet,
        var(--c-color-neutral-fill-quiet)
      );
      color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    }
  }

  /* Matches the main navigation's current item. */
  :host([active]) .action-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-loud);
    color: var(--c-color-accent-on-quiet);
  }

  .action-item:disabled {
    opacity: 0.5;
  }

  .action-item:not(:disabled) {
    cursor: pointer;
  }

  .action-item__check,
  .action-item__icon,
  .action-item__suffix {
    min-height: 1lh;
  }

  .action-item__check,
  .action-item__icon {
    min-width: 1lh;
    display: inline-grid;
    place-items: center;
    align-self: start;
  }

  .action-item__check {
    aspect-ratio: 1;
  }

  .action-item__suffix {
    align-self: center;
  }

  craft-shortcut {
    margin-inline-start: var(--c-spacing-sm);
  }

  .action-item__label {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-inline: var(--c-spacing-sm);
  }

  :host([variant='danger']) .action-item {
    color: var(--c-color-on-quiet);
  }

  @media (hover: hover) {
    :host(:hover[variant='danger']:not([active])) .action-item:not(:disabled) {
      background-color: var(--c-color-fill-quiet);
      color: var(--c-color-on-quiet);
    }
  }
`,mt=[`a[href]`,`button`,`input`,`select`,`textarea`,`[tabindex]:not([tabindex="-1"])`,`craft-button`,`craft-action-item`,`craft-checkbox`,`craft-switch`].join(`, `),ht=new WeakSet,gt=class extends T(u){constructor(...e){super(...e),_(this,ht),this.icon=null,this.iconColor=null,this.href=null,this.target=null,this.rel=null,this.disabled=!1,this.variant=re.Neutral,this.checked=!1,this.active=!1,this.current=!1,this.type=`button`,this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.state=w.Idle,this.feedbackMessage=null,this._resetStateTimeout=null,this._hasNestedControl=!1,this._lightDom=new ae(this,{onChange:()=>this._checkSuffixForControls()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this),this._clearResetStateTimeout()}_clearResetStateTimeout(){this._resetStateTimeout!==null&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=null)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:ct(this.action)?.type,...t}}))}async handleEvent(e){if(this.disabled){e.preventDefault();return}let t=ct(this.action);if(e.type===`click`&&t){t.type===`http`&&this.setState(w.Loading);try{await ut(t,{trigger:this,sourceEvent:e}),this.setState(w.Success,this.feedback?.success)}catch(e){this.setState(w.Error,{message:e.message,...this.feedback?.error||{}})}finally{this._clearResetStateTimeout(),this._resetStateTimeout=setTimeout(()=>{this._resetStateTimeout=null,this.setState(w.Idle)},this.feedbackDuration)}}}renderCheckbox(){return p`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?p`<craft-icon name="check"></craft-icon>`:r}
      </slot>
    </span>`}renderIcon(){switch(this.state){case w.Loading:return p`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case w.Success:return p`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case w.Error:return p`<craft-icon
          name="xmark-large"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return p`
          <slot name="icon">
            ${this.icon?p`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: ${b(ht,this,_t).call(this,this.iconColor)}`:r}"
                ></craft-icon>`:r}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector(`[slot="icon"]`)||!!this.icon,t=!!this.querySelector(`[slot="prefix"]`);return p`
      ${this.type===`checkbox`?this.renderCheckbox():r}
      ${t?p`<slot name="prefix" part="prefix"></slot>`:r}
      ${e?p`<div class="action-item__icon">${this.renderIcon()}</div>`:r}
    `}_checkSuffixForControls(){this._hasNestedControl=Array.from(this.children).some(e=>e.slot===`suffix`&&e.matches(mt))}renderBody(){return p`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:p`<slot></slot>`}
      </span>

      <span
        class="${E({"action-item__suffix":!0,"a11y-error":this._hasNestedControl})}"
      >
        <slot name="suffix"></slot>
        ${this.shortcutKeys?p`<craft-shortcut
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:r}
      </span>
    `}render(){return this.href?p`
          <a
            part="control"
            class="${E({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            href="${this.href}"
            aria-current="${this.current?`true`:r}"
            aria-keyshortcuts="${this.shortcutAriaKeys??r}"
            target="${ft(this.target??void 0)}"
            rel="${ft(this.rel??(this.target===`_blank`?`noopener`:null)??void 0)}"
          >
            ${this.renderBody()}
          </a>
        `:p`
          <button
            type="button"
            part="control"
            class="${E({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            aria-current="${this.current?`true`:r}"
            aria-keyshortcuts="${this.shortcutAriaKeys??r}"
            ?disabled="${this.disabled}"
          >
            ${this.renderBody()}
          </button>
        `}};function _t(e){return e===`black`||e===`white`?`var(--c-text-default)`:`var(--c-color-${e}-fill-loud, currentColor)`}gt.styles=[te,ne,ee,pt],gt.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0},n([s()],gt.prototype,`icon`,void 0),n([s({attribute:`icon-color`})],gt.prototype,`iconColor`,void 0),n([s()],gt.prototype,`href`,void 0),n([s()],gt.prototype,`target`,void 0),n([s()],gt.prototype,`rel`,void 0),n([s({type:Boolean})],gt.prototype,`disabled`,void 0),n([s({reflect:!0})],gt.prototype,`variant`,void 0),n([s({type:Boolean})],gt.prototype,`checked`,void 0),n([s({type:Boolean,reflect:!0})],gt.prototype,`active`,void 0),n([s({type:Boolean})],gt.prototype,`current`,void 0),n([s()],gt.prototype,`type`,void 0),n([s({type:Object})],gt.prototype,`action`,void 0),n([s({type:Object})],gt.prototype,`feedback`,void 0),n([s({type:Number,attribute:`feedback-duration`})],gt.prototype,`feedbackDuration`,void 0),n([f()],gt.prototype,`state`,void 0),n([f()],gt.prototype,`feedbackMessage`,void 0),n([f()],gt.prototype,`_hasNestedControl`,void 0),customElements.get(`craft-action-item`)||customElements.define(`craft-action-item`,gt);var vt=!1,yt=!1;window.addEventListener(`keydown`,e=>{e.key===`Enter`&&(vt=!0)},!0),window.addEventListener(`keyup`,e=>{e.key===`Enter`&&(vt=!1)},!0),window.addEventListener(`blur`,()=>{vt=!1});function bt(){if(!vt||yt)return;yt=!0;let e=()=>{yt=!1,window.removeEventListener(`keyup`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e)},t=t=>{t.key===`Enter`&&(t.preventDefault(),t.stopImmediatePropagation(),e())},n=t=>{t.key===`Enter`&&!t.repeat&&e()};window.addEventListener(`keyup`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e)}function xt(e){let t=!!e.opened;e.addEventListener(`opened-changed`,()=>{let n=!!e.opened;if(n===t)return;t=n,e.dispatchEvent(new CustomEvent(n?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0}));let r=n;e.updateComplete.then(()=>{!!e.opened===r&&e.dispatchEvent(new CustomEvent(r?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))})})}function St(){return[{name:`computeStyles`,options:{gpuAcceleration:!1}},{name:`containingBlockCorrection`,enabled:!0,phase:`afterWrite`,fn:({state:e})=>{let t=e.elements.popper,n=parseFloat(t.style.left),r=parseFloat(t.style.top);if(Number.isNaN(n)||Number.isNaN(r))return;let i=t.getBoundingClientRect(),a=i.x-n,o=i.y-r;(a!==0||o!==0)&&(t.style.left=`${n-a}px`,t.style.top=`${r-o}px`)}}]}function Ct(e){return e.shadowRoot?.querySelector(`dialog[data-overlay-outer-wrapper]`)??null}function wt(e){let t=Ct(e);!t||typeof t.showPopover!=`function`||(t.setAttribute(`popover`,`manual`),t.matches(`:popover-open`)||t.showPopover())}function Tt(e){let t=Ct(e);t?.matches?.(`:popover-open`)&&t.hidePopover()}var Et=a`
  dialog[data-overlay-outer-wrapper][popover] {
    inset: auto;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    overflow: visible;
    width: auto;
    height: auto;
  }
`,Dt=new WeakMap;function Ot(e,t){let n=t;for(;n;){if(Dt.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function D(e){return t=>{if(Ot(e,t))return t;let n=e(t);return Dt.set(n,e),n}}var kt=D(e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){this._requestedToBeDisabled===!1&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){this._requestedToBeDisabled===!0&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),this.disabled===!1&&this._requestedToBeDisabled===!0&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}}),At=D(e=>class extends kt(e){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:`tabindex`}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),this._requestedToBeDisabled===!1&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`disabled`&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),e===`tabIndex`&&(this.__isUserSettingTabIndex&&this.tabIndex!=null&&(this.__restoreTabIndexTo=this.tabIndex),this.tabIndex!==-1&&this._requestedToBeDisabled===!0&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}});function jt(e,t){let n=!1;Array.from(e.childNodes).forEach(e=>{let r=e.hasAttribute&&e.hasAttribute(`slot`);if(e.nodeType===Node.COMMENT_NODE&&!n&&(n=e.textContent.includes(`_start_slot_`)),n){e.textContent.includes(`_end_slot_`)&&(n=!1);return}r||t.appendChild(e)})}function Mt(e){return e instanceof Node?`node`:de(e)?`template-result`:!Array.isArray(e)&&typeof e==`object`&&`template`in e?`slot-rerender-object`:null}var Nt=D(e=>class extends e{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(e){let t=this.slots[e]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:t.renderAsDirectHostChild,template:t.template,slotName:e}),t.afterRender?.()}update(e){super.update(e);for(let e of this.__slotsThatNeedRerender)this.__rerenderSlot(e)}__renderTemplateInScopedContext({template:e,slotName:t,renderAsDirectHostChild:n}){if(!this.__renderMetaPerSlot.has(t)){let r=!!ShadowRoot.prototype.createElement;this.shadowRoot||console.error(`[SlotMixin] No shadowRoot was found`);let i=(r?this.shadowRoot:document).createElement(`div`),a=document.createComment(`_start_slot_${t}_`),s=document.createComment(`_end_slot_${t}_`);i.appendChild(a),i.appendChild(s);let{creationScope:c,host:l}=this.renderOptions;if(o(e,i,{renderBefore:s,creationScope:c,host:l}),n){let e=Array.from(i.childNodes);this.__appendNodes({nodes:e,renderParent:this,slotName:t})}else i.slot=t,this.appendChild(i);this.__renderMetaPerSlot.set(t,{renderTargetThatRespectsShadowRootScoping:i,renderBefore:s});return}let{renderBefore:r,renderTargetThatRespectsShadowRootScoping:i}=this.__renderMetaPerSlot.get(t),a=n?this:i,{creationScope:s,host:c}=this.renderOptions;o(e,a,{creationScope:s,host:c,renderBefore:r}),n&&r.previousElementSibling&&!r.previousElementSibling.slot&&(r.previousElementSibling.slot=t)}__appendNodes({nodes:e,renderParent:t=this,slotName:n}){for(let r of e)r instanceof Element&&n&&n!==``&&r.setAttribute(`slot`,n),t.appendChild(r)}__initSlots(e){for(let t of e){if(this.__slotsProvidedByUserOnFirstConnected.has(t))continue;let e=this.slots[t]();if(e!==void 0)switch(this.__isConnectedSlotMixin||this.__privateSlots.add(t),Mt(e)){case`template-result`:this.__renderTemplateInScopedContext({template:e,renderAsDirectHostChild:!0,slotName:t});break;case`node`:this.__appendNodes({nodes:[e],renderParent:this,slotName:t});break;case`slot-rerender-object`:this.__slotsThatNeedRerender.add(t),e.firstRenderOnConnected&&this.__rerenderSlot(t);break;default:throw Error(`Slot "${t}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.
              You provided: ${e}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;let e=Object.keys(this.slots);for(let t of e)(t===``?Array.from(this.children).find(e=>!e.hasAttribute(`slot`)):Array.from(this.children).find(e=>e.slot===t))&&this.__slotsProvidedByUserOnFirstConnected.add(t);this.__initSlots(e),this.__isConnectedSlotMixin=!0}_isPrivateSlot(e){return this.__privateSlots.has(e)}});function Pt(e=`google-chrome`){let t=globalThis.navigator,n=!!t.userAgentData&&t.userAgentData.brands.some(e=>e.brand===`Chromium`);if(e===`chromium`)return n;let r=globalThis.navigator?.vendor,i=globalThis.opr!==void 0,a=globalThis.userAgent?.indexOf(`Edge`)>-1,o=globalThis.userAgent?.match(`CriOS`);if(e===`ios`)return o;if(e===`google-chrome`)return n!=null&&r===`Google Inc.`&&i===!1&&a===!1}var Ft={isIE11:/Trident/.test(globalThis.navigator?.userAgent),isChrome:Pt(),isIOSChrome:Pt(`ios`),isChromium:Pt(`chromium`),isFirefox:globalThis.navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1,isMac:globalThis.navigator?.appVersion?.indexOf(`Mac`)!==-1,isIOS:/iPhone|iPad|iPod/i.test(globalThis.navigator?.userAgent),isMacSafari:globalThis.navigator?.vendor&&globalThis.navigator?.vendor.indexOf(`Apple`)>-1&&globalThis.navigator?.userAgent&&globalThis.navigator?.userAgent.indexOf(`CriOS`)===-1&&globalThis.navigator?.userAgent.indexOf(`FxiOS`)===-1&&globalThis.navigator?.appVersion.indexOf(`Mac`)!==-1};function It(e=``){return`${e.length>0?`${e}-`:``}${Math.random().toString(36).substr(2,10)}`}var Lt=a`
  body > *[inert] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body.overlays-scroll-lock {
    overflow: hidden;
  }

  body.overlays-scroll-lock-ios-fix {
    position: fixed;
    width: 100%;
  }

  html.overlays-scroll-lock-ios-fix {
    height: 100vh;
  }
`,Rt=class e{static __createGlobalStyleNode(){let e=document.createElement(`style`);return e.setAttribute(`data-overlays`,``),e.textContent=Lt.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this._siblingsInert=!1,this.__blockingMap=new WeakMap,e.__globalStyleNode||=e.__createGlobalStyleNode()}add(e){if(this.list.find(t=>e===t))throw Error(`controller instance is already added`);return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to remove`);this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw Error(`could not find controller to hide`);this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this._siblingsInert=!1,e.__globalStyleNode&&=(document.head.removeChild(e.__globalStyleNode),void 0)}get siblingsInert(){return this._siblingsInert}requestToPreventScroll(){let{isIOS:e,isMacSafari:t}=Ft;document.body.classList.add(`overlays-scroll-lock`),(e||t)&&document.body.classList.add(`overlays-scroll-lock-ios-fix`),e&&document.documentElement.classList.add(`overlays-scroll-lock-ios-fix`)}requestToEnableScroll(e){if((e?this.shownList.filter(t=>t!==e):this.shownList).some(e=>e.preventsScroll===!0))return;let{isIOS:t,isMacSafari:n}=Ft;document.body.classList.remove(`overlays-scroll-lock`),(t||n)&&document.body.classList.remove(`overlays-scroll-lock-ios-fix`),t&&document.documentElement.classList.remove(`overlays-scroll-lock-ios-fix`)}requestToShowOnly(e){let t=this.shownList.filter(t=>t!==e);t.forEach(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(e=>e.show())}};Rt.__globalStyleNode=void 0;function zt(){if(!we.has(`@lion/ui::overlays::0.x`)){let e=new Rt;we.set(`@lion/ui::overlays::0.x`,e)}return we.get(`@lion/ui::overlays::0.x`)}var Bt=Ce(zt);function Vt(e,t,n={}){function r(e){return`getAttribute`in e}function i(e){if(!r(e))return null;let t=e.getAttribute(`slot`),i=null;if(t){let r=n[t];r&&(i=r.filter(t=>t?.element===e)[0]||null)}return i}let a=i(e);if(a)return a.deepContains;function o(t){if(!r(e))return;let i=e.getAttribute(`slot`);i&&(n[i]=n[i]||[],n[i].push({element:e,deepContains:t}))}let s=e.contains(t);if(s)return o(!0),!0;function c(e){return e.tagName===`SLOT`}function l(e){return c(e)?e.assignedElements():[]}function u(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function d(e){let i=!1;for(let a=0;a<e.length;a+=1){let o=e[a];if(o&&(r(o)||u(o))&&Vt(o,t,n)){i=!0;break}}return i}function f(e){for(let t=0;t<e.children.length;t+=1){let n=e.children[t],r=i(n);if(r){s=r.deepContains||s;break}let a=l(n);if(d([n.shadowRoot,...a])){s=!0;break}n.children.length>0&&f(n)}}return e instanceof HTMLElement&&e.shadowRoot&&(s=Vt(e.shadowRoot,t,n),s)?(o(!0),!0):(f(e),o(s),s)}var Ht=a`
  .overlays {
    position: fixed;
    z-index: 200;
  }

  .overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .overlays__overlay-container::backdrop {
    display: none;
  }

  .overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }

  .overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .overlays__overlay--bottom-sheet {
    width: 100%;
  }

  ::slotted(.overlays__overlay),
  .overlays__overlay {
    pointer-events: auto;
  }

  .overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    display: none;
  }

  .overlays__backdrop--visible {
    display: block;
  }

  .overlays__backdrop--animation-in {
    animation: overlays-backdrop-fade-in 300ms;
    opacity: 0.3;
  }

  .overlays__backdrop--animation-out {
    animation: overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .overlays .overlays__backdrop--animation-in {
      animation: overlays-backdrop-fade-in 1ms;
    }

    .overlays .overlays__backdrop--animation-out {
      animation: overlays-backdrop-fade-out 1ms;
    }
  }

  dialog[data-overlay-outer-wrapper] {
    background-image: none;
    border-style: none;
    padding: 0px;
  }

  /** 
   * We don't want to use pseudo el ::backdrop.  
   * We have our own, that creates more flexibility wrt scrolling etc.
   */
  dialog[data-overlay-outer-wrapper]::backdrop {
    display: none;
  }
`,Ut={supportsAdoptingStyleSheets:window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},Wt=new WeakMap;function Gt(e){return Array.from(e.cssRules).map(e=>e.cssText).join(``)}function Kt(e,t,{teardown:n=!1}={}){let r=e===document?document.body:e,i=t.cssText||Gt(t);if(n){let e=Array.from(r.querySelectorAll(`style`));for(let t of e)if(t.textContent===i){t.remove();break}}else{let e=document.createElement(`style`),t=window.litNonce;t!==void 0&&e.setAttribute(`nonce`,t),e.textContent=i,r.appendChild(e)}}function qt(e,t,{teardown:n=!1}={}){let r=!1;e&&!Wt.has(e)&&Wt.set(e,[]);let i=Wt.get(e)??[],a=i.find(e=>t===e);return a&&n?i.splice(i.indexOf(t),1):!a&&!n?i.push(t):(a&&!n||!a&&n)&&(r=!0),{haltFurtherExecution:r}}function Jt(e,t,{teardown:n=!1}={}){let{haltFurtherExecution:r}=qt(e,t,{teardown:n});if(r)return;if(!Ut.supportsAdoptingStyleSheets||Ft.isIOS){Kt(e,t,{teardown:n});return}let i=t instanceof CSSStyleSheet?t:t.styleSheet;if(!i)throw Error(`Please provide a CSSResultOrNative style`);n?e.adoptedStyleSheets.includes(i)&&e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(i),1):e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]}function Yt(e,t,{teardown:n=!1}={}){for(let r of t)Ut.adoptStyle(e,r,{teardown:n})}Ut.adoptStyle=Jt,Ut.adoptStyles=Yt;var Xt=({visibility:e,display:t})=>e!==`hidden`&&t!==`none`,Zt=({display:e})=>e===`contents`;function Qt(e){if(!e||!e.isConnected||!Xt(e.style))return!1;let t=window.getComputedStyle(e);return Xt(t)?Zt(t)?!0:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length):!1}function $t(e,t){let n=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return n===0||r===0?r>n:n>r}function en(e,t){let n=[];for(;e.length>0&&t.length>0;)$t(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return[...n,...e,...t]}function tn(e){let t=e.length;if(t<2)return e;let n=Math.ceil(t/2);return en(tn(e.slice(0,n)),tn(e.slice(n)))}var nn=`matches`in Element.prototype?`matches`:`msMatchesSelector`;function rn(e){return e[nn](`input, select, textarea, button, object`)?e[nn](`:not([disabled])`):e[nn](`a[href], area[href], iframe, [tabindex], [contentEditable]`)}function an(e){return rn(e)?Number(e.getAttribute(`tabindex`)||0):-1}function on(e){if(e.localName===`slot`)return e.assignedNodes({flatten:!0});let{children:t}=e.shadowRoot||e;return t||[]}function sn(e){return e.nodeType===Node.ELEMENT_NODE?e.localName===`slot`||Qt(e):!1}function cn(e,t){if(!sn(e))return!1;let n=e,r=an(n),i=r>0;r>=0&&t.push(n);let a=on(n);for(let e=0;e<a.length;e+=1)i=cn(a[e],t)||i;return i}function ln(e){let t=[];return cn(e,t)?tn(t):t}var un=`modulepreload`,dn=function(e,t){return new URL(e,t).href},fn={},O=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=dn(t,n),t=s(t),t in fn)return;fn[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:un,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function pn({wrappingDialogNodeL1:e,contentWrapperNodeL2:t,contentNodeL3:n}){if(!(t.isConnected||n.isConnected))throw Error(`[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.`);let r,i=document.createComment(`tempMarker`);t.isConnected?(r=t.parentElement||t.getRootNode(),r.insertBefore(i,t),e.appendChild(t)):n.assignedSlot?(r=n.assignedSlot.parentElement||n.assignedSlot.getRootNode(),r.insertBefore(i,n.assignedSlot),e.appendChild(t),t.appendChild(n.assignedSlot)):(r=n.parentElement||n.getRootNode(),r.insertBefore(i,n),e.appendChild(t),t.appendChild(n)),r.insertBefore(e,i),r?.removeChild(i)}async function mn(){return O(()=>import(`./popper--LklqrOK.js`),[],import.meta.url)}var hn=new WeakMap,gn=class e extends EventTarget{#e=!1;constructor(e={},t=Bt){super(),this.manager=t,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:`none`,hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:`description`,visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:`top`,strategy:`fixed`,modifiers:[{name:`preventOverflow`,enabled:!0,options:{boundariesElement:`viewport`,padding:8}},{name:`flip`,options:{boundariesElement:`viewport`,padding:16}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},{name:`arrow`,enabled:!1}]},viewportConfig:{placement:`center`},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return!!this.manager.list.find(e=>this===e)}__validateConfiguration(e){if(!e.placementMode)throw Error(`[OverlayController] You need to provide a .placementMode ("global"|"local")`);if(![`global`,`local`].includes(e.placementMode))throw Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw Error(`[OverlayController] You need to provide a .contentNode`);if(e.isTooltip&&!e.handlesAccessibility)throw Error(`[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled`)}_init(){this.__contentHasBeenInitialized||=(this.__initContentDomStructure(),!0),this.contentWrapperNode.removeAttribute(`style`),this.contentWrapperNode.removeAttribute(`class`),this.placementMode===`local`&&(e.popperModule||=mn()),this.__handleOverlayStyles({phase:`init`}),this._handleFeatures({phase:`init`})}__handleOverlayStyles({phase:e}){let t=this.contentWrapperNode?.getRootNode();e===`init`?Ut.adoptStyle(t,Ht):e===`teardown`&&Ut.adoptStyle(t,Ht,{teardown:!0})}__initContentDomStructure(){let e=document.createElement(`dialog`);e.setAttribute(`role`,`none`),e.setAttribute(`data-overlay-outer-wrapper`,``),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement(`div`)),this.contentWrapperNode.setAttribute(`data-id`,`content-wrapper`),pn({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute(`tabindex`,`-1`),this.__wrappingDialogNode.style.display=`none`,this.contentWrapperNode.style.zIndex=`1`,getComputedStyle(this.contentNode).position===`absolute`&&(this.contentNode.style.position=`static`),HTMLDialogElement&&`closedBy`in HTMLDialogElement.prototype?e.closedBy=`none`:(e.addEventListener(`keydown`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`keyup`,e=>{e.key===`Escape`&&e.preventDefault()}),e.addEventListener(`cancel`,e=>{e.stopPropagation()}),e.addEventListener(`close`,e=>{e.stopPropagation()}))}_handleZIndex({phase:e}){if(this.placementMode===`local`&&e===`setup`){let e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentNode.style.zIndex=`1`)}}__setupTeardownAccessibility({phase:e}){if(e===`init`){this.__storeOriginalAttrs(this.contentNode,[`role`,`id`]);let e=this.trapsKeyboardFocus;if(this.invokerNode){let t=[`aria-labelledby`,`aria-describedby`];e||t.push(`aria-expanded`),this.__storeOriginalAttrs(this.invokerNode,t)}this.contentNode.id||this.contentNode.setAttribute(`id`,this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute(this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`,this._contentId),this.contentNode.setAttribute(`role`,`tooltip`)):(this.invokerNode&&!e&&this.invokerNode.setAttribute(`aria-expanded`,`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute(`role`,`alertdialog`):this.contentNode.getAttribute(`role`)||this.contentNode.setAttribute(`role`,`dialog`))}else e===`teardown`&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){let n={};t.forEach(t=>{n[t]=e.getAttribute(t)}),this.__originalAttrs.set(e,n)}__restoreOriginalAttrs(){for(let[e,t]of this.__originalAttrs)Object.entries(t).forEach(([t,n])=>{n===null?e.removeAttribute(t):e.setAttribute(t,n)});this.__originalAttrs.clear()}get isShown(){return this.__wrappingDialogNode?.style.display!==`none`}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(e=>{this._showResolve=e}),this.manager&&this.manager.show(this),this.isShown){this._showResolve();return}let t=new CustomEvent(`before-show`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display=``,this._keepBodySize({phase:`before-show`}),await this._handleFeatures({phase:`show`}),this._keepBodySize({phase:`show`}),await this._handlePosition({phase:`show`}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event(`show`)),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if(this.placementMode===`global`){let t=`overlays__overlay-container--${this.viewportConfig.placement}`;e===`show`?(this.contentWrapperNode.classList.add(`overlays__overlay-container`),this.contentWrapperNode.classList.add(t),this.contentNode.classList.add(`overlays__overlay`)):e===`hide`&&(this.contentWrapperNode.classList.remove(`overlays__overlay-container`),this.contentWrapperNode.classList.remove(t),this.contentNode.classList.remove(`overlays__overlay`))}else this.placementMode===`local`&&e===`show`&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){if(this.preventsScroll)switch(e){case`before-show`:this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case`show`:{if(window.getComputedStyle){let e=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(e.getPropertyValue(`margin-right`),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue(`margin-bottom`),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;let e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,n=this.__bodyMarginRight+e,r=this.__bodyMarginBottom+t;window.CSS?.number&&document.body.attributeStyleMap?.set?(document.body.attributeStyleMap.set(`margin-right`,CSS.px(n)),document.body.attributeStyleMap.set(`margin-bottom`,CSS.px(r))):(document.body.style.marginRight=`${n}px`,document.body.style.marginBottom=`${r}px`);break}case`hide`:document.body.style.marginRight=this.__bodyMarginRightInline||``,document.body.style.marginBottom=this.__bodyMarginBottomInline||``;break}}async hide(){if(this._hideComplete=new Promise(e=>{this._hideResolve=e}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown){this._hideResolve();return}let e=new CustomEvent(`before-hide`,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),`HTMLDialogElement`in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display=`none`,this._handleFeatures({phase:`hide`}),this._keepBodySize({phase:`hide`}),this.dispatchEvent(new Event(`hide`)),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:t}){await this.transitionHide({backdropNode:e,contentNode:t}),this._handlePosition({phase:`hide`}),e&&e.classList.remove(`overlays__backdrop--animation-in`)}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add(`overlays__backdrop--animation-in`)}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:`nearest`})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){typeof this.visibilityTriggerFunction==`function`&&(e===`init`&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case`show`:this.manager.requestToPreventScroll();break;case`hide`:this.manager.requestToEnableScroll();break;case`teardown`:this.manager.requestToEnableScroll(this);break}}_handleBlocking({phase:e}){switch(e){case`show`:this.manager.requestToShowOnly(this);break;case`hide`:this.manager.retractRequestToShowOnly(this);break}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case`init`:this.__backdropInitialized||=(this.config?.backdropNode||(this.__backdropNode=document.createElement(`div`),this.__backdropNode.classList.add(`overlays__backdrop`)),this.__wrappingDialogNode.prepend(this.backdropNode),!0);break;case`show`:this.config.hasBackdrop&&this.backdropNode.classList.add(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!0;break;case`hide`:case`teardown`:this.backdropNode.classList.remove(`overlays__backdrop--visible`),this.__hasActiveBackdrop=!1;break}}#n=e=>{e.key===`Shift`&&(this.#e=!0)};#r=e=>{e.key===`Shift`&&(this.#e=!1)};#i=()=>{window.addEventListener(`keydown`,this.#n),window.addEventListener(`keyup`,this.#r)};#a=()=>{window.removeEventListener(`keydown`,this.#n),window.removeEventListener(`keyup`,this.#r)};#o=()=>ln(this.contentNode).find(e=>e.hasAttribute(`autofocus`))||this.contentNode;#s=()=>{this.__wrappingDialogNode?.addEventListener(`focus`,()=>{this.#e||this.#o().focus()})};_handleTrapsKeyboardFocus({phase:e}){e===`init`&&(this.contentNode.style.outline=`none`,this.contentNode.tabIndex=-1,this.contentNode.shadowRoot&&console.warn(`[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root`)),e===`show`&&(this.#i(),this.#s(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#o().focus()),e===`hide`&&this.#a()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){e.key!==`Escape`||hn.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#c(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),hn.set(e,this))}#c=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||Vt(this.contentNode,e.target);#l=e=>{e.key===`Escape`&&(this.#c(e)||this.hide())};_handleHidesOnEsc({phase:e}){e===`init`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.contentNode.addEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener(`keyup`,this.__escKeyHandler)),e===`show`&&(this.__escKeyHandlerCalled=!1),e===`teardown`&&(this.contentNode.removeEventListener(`keyup`,this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener(`keyup`,this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){e===`init`?(document.removeEventListener(`keyup`,this.#l),document.addEventListener(`keyup`,this.#l)):e===`teardown`&&document.removeEventListener(`keyup`,this.#l)}_handleInheritsReferenceWidth(){if(!this._referenceNode||this.placementMode===`global`)return;let e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case`max`:this.contentWrapperNode.style.maxWidth=e;break;case`full`:this.contentWrapperNode.style.width=e;break;case`min`:this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width=`auto`;break}}_handleHidesOnOutsideClick({phase:e}){let t=e===`show`?`addEventListener`:`removeEventListener`;if(e===`show`){let e=!1,t=!1;this.__onInsideMouseDown=()=>{e=!0},this.__onInsideMouseUp=()=>{t=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{!e&&!t&&this.hide(),e=!1,t=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.contentWrapperNode[t](`mouseup`,this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[t](`mousedown`,this.__onInsideMouseDown,!0),this.invokerNode[t](`mouseup`,this.__onInsideMouseUp,!0)),document.documentElement[t](`mouseup`,this.__onDocumentMouseUp,!0),window[t](`blur`,this.__onWindowBlur)}_handleAccessibility({phase:e}){(e===`init`||e===`teardown`)&&this.__setupTeardownAccessibility({phase:e});let t=this.trapsKeyboardFocus;this.invokerNode&&!this.isTooltip&&!t&&this.invokerNode.setAttribute(`aria-expanded`,`${e===`show`}`)}teardown(){this.__handleOverlayStyles({phase:`teardown`}),this._handleFeatures({phase:`teardown`}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&=(this._popper.destroy(),void 0),e.popperModule!==void 0){let{createPopper:t}=await e.popperModule;this._popper=t(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return this.invokerNode?this.invokerNode.disabled||this.invokerNode.getAttribute(`aria-disabled`)===`true`:!1}};gn.popperModule=void 0;function _n(e,t){if(typeof e!=`object`||typeof t!=`object`||e===null||t===null)return e===t;let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(n=>_n(e[n],t[n]))}var vn=D(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#e=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){let t=!_n(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`opened`&&this.opened!==t&&this.dispatchEvent(new CustomEvent(`opened-changed`,{detail:{opened:this.opened}}))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i}){let a=this._defineOverlayConfig()||{};return new gn({contentNode:e,invokerNode:t,referenceNode:n,backdropNode:r,contentWrapperNode:i,...a,...this.config,popperConfig:{...a.popperConfig||{},...this.config?.popperConfig||{},modifiers:[...a.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:`local`}}updated(e){super.updated(e),e.has(`opened`)&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener(`close-overlay`,this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#e||=(this._setupOverlayCtrl(),!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#e=!1)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];get _overlayInvokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||=Array.from(this.children).find(e=>e.slot===`backdrop`),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||=Array.from(this.children).find(e=>e.slot===`content`)||this.config.contentNode,this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector(`#overlay-content-node-wrapper`)}_setupOverlayCtrl(){if(this.#e)return;let e={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(e):this._overlayCtrl=this._defineOverlay(e),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{let t=new CustomEvent(`before-opened`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{let t=new CustomEvent(`before-closed`,{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.addEventListener(`before-hide`,this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener(`show`,this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener(`hide`,this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener(`before-show`,this.__onBeforeShow),this._overlayCtrl.removeEventListener(`before-hide`,this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){let e=this._overlayCtrl;e.placementMode===`local`&&e._popper&&e._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}),yn=D(e=>class extends vn(e){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:`has-arrow`}}}static get styles(){return[...super.styles||[],a`
          :host {
            --tooltip-arrow-width: 12px;
            --tooltip-arrow-height: 8px;
          }

          .arrow svg {
            display: block;
          }

          .arrow {
            position: absolute;
            width: var(--tooltip-arrow-width);
            height: var(--tooltip-arrow-height);
          }

          .arrow__graphic {
            display: block;
          }

          [data-popper-placement^='top'] .arrow {
            bottom: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow {
            top: calc(-1 * var(--tooltip-arrow-height));
          }

          [data-popper-placement^='bottom'] .arrow__graphic {
            transform: rotate(180deg);
          }

          [data-popper-placement^='left'] .arrow {
            right: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='left'] .arrow__graphic {
            transform: rotate(270deg);
          }

          [data-popper-placement^='right'] .arrow {
            left: calc(
              -1 *
                (
                  var(--tooltip-arrow-height) +
                    (var(--tooltip-arrow-width) - var(--tooltip-arrow-height)) / 2
                )
            );
          }

          [data-popper-placement^='right'] .arrow__graphic {
            transform: rotate(90deg);
          }

          :host(:not([has-arrow])) .arrow {
            display: none;
          }
        `]}constructor(){super(),this.hasArrow=!0,this.__setupRepositionCompletePromise()}render(){return p`
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="content"></slot>
          ${this._arrowNodeTemplate()}
        </div>
      `}_arrowNodeTemplate(){return p`
        <div class="arrow" aria-hidden="true" data-popper-arrow>${this._arrowTemplate()}</div>
      `}_arrowTemplate(){return p`
        <svg viewBox="0 0 12 8" class="arrow__graphic">
          <path d="M 0,0 h 12 L 6,8 z"></path>
        </svg>
      `}_defineOverlayConfig(){let e=super._defineOverlayConfig()||{};return this.hasArrow?{...e,popperConfig:{...this._getPopperArrowConfig(e.popperConfig)}}:e}_getPopperArrowConfig(e){return{...e||{},placement:`top`,modifiers:[{name:`arrow`,enabled:!0,options:{padding:8}},{name:`offset`,enabled:!0,options:{offset:[0,8]}},...e&&e.modifiers||[]],onFirstUpdate:e=>{this.__syncFromPopperState(e)},afterWrite:e=>{this.__syncFromPopperState(e)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(e=>{this.__repositionCompleteResolver=e})}get _arrowNode(){return this.shadowRoot.querySelector(`[data-popper-arrow]`)}__syncFromPopperState(e){e&&this._arrowNode&&e.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(e.placement),this.__setupRepositionCompletePromise())}});function bn(){return{visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener(`click`,t)},teardown:()=>{e.invokerNode?.removeEventListener(`click`,t)}}}}}var xn=()=>({placementMode:`local`,inheritsReferenceWidth:`min`,hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:`bottom-start`,modifiers:[{name:`offset`,enabled:!1}]},handlesAccessibility:!0,...bn()});function Sn({delayIn:e=0,delayOut:t=300}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,i=!1,a;function o(){r=!1,i=!1}function s(o){let{type:s}=o;clearTimeout(a),r=s===`focusout`?!1:r||s===`focusin`,i=s===`mouseleave`?!1:i||s===`mouseenter`,a=(r||i)&&!n._hasDisabledInvoker()?setTimeout(()=>{n.show()},e):setTimeout(()=>{n.hide()},t)}return{init:()=>{n.addEventListener(`hide`,o),n.contentNode?.addEventListener(`mouseenter`,s),n.contentNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`mouseenter`,s),n.invokerNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`focusin`,s),n.invokerNode?.addEventListener(`focusout`,s)},teardown:()=>{n.removeEventListener(`hide`,o),n.contentNode?.removeEventListener(`mouseenter`,s),n.contentNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`mouseenter`,s),n.invokerNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`focusin`,s),n.invokerNode?.removeEventListener(`focusout`,s)}}}}}var Cn=({invokerRelation:e=`description`,delayIn:t=300,delayOut:n=300}={})=>({placementMode:`local`,elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:e,popperConfig:{strategy:`absolute`},...Sn({delayIn:t,delayOut:n})}),wn=a`
  :host {
    display: contents;
    position: relative;
  }

  /* With no box of its own, the popover can't take a button group's overlap,
     so its invoker does. A craft-button invoker takes it itself, along with
     its own flush margin, which a margin set here would replace. */
  ::slotted([slot='invoker']:not(craft-button)) {
    margin-inline-start: var(--c-button-group-overlap);
  }

  ::slotted(:not([slot='invoker'])) {
    --c-button-group-overlap: initial;
  }

  .popover-pane {
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    color: var(--c-text-default);
    box-shadow: var(--c-shadow-sm);
    min-width: calc(180rem / 16);
    max-width: calc(320rem / 16);
    overflow: auto;
    overscroll-behavior: contain;
    --_fitted-block-size: var(--_popover-available-block-size, 40vh);
    max-height: var(--popover-max-block-size, var(--_fitted-block-size));
  }

  /* The overlay wrapper is the one given the invoker's width, so the pane has
     to stop sizing itself or it stays at its own 320px cap and the match does
     nothing visible. */
  :host([match-invoker-width]) .popover-pane {
    min-width: 0;
    max-width: none;
    width: 100%;
  }

  ::slotted([slot='content-body']) {
    padding: var(--c-spacing-md);
    display: grid;
    font-size: var(--c-text-base);
    font-weight: 400;
  }

  ::slotted([slot='content-footer']) {
    background-color: var(--c-color-neutral-fill-quiet);
    padding: var(--c-spacing-md);
    position: sticky;
    inset-block-end: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
  }
`,Tn={name:`fitAvailableBlockSize`,enabled:!0,phase:`main`,requiresIfExists:[`offset`,`preventOverflow`,`flip`],fn:({state:e,instance:t})=>{let n=e.modifiersData.popperOffsets?.y??0,r=document.documentElement.clientHeight,i=e.placement.split(`-`)[0],a=Math.floor(i===`top`?n+e.rects.popper.height-16:i===`bottom`?r-16-n:r-32),o=e.elements.popper.style,s=`--_popover-available-block-size`,c=o.getPropertyValue(s);!r||a<=0?o.removeProperty(s):o.setProperty(s,`${a}px`),o.getPropertyValue(s)!==c&&t.update()}};function En(){let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--c-layer-popover`),10);return Number.isNaN(e)?9999:e}var Dn=new WeakMap,On=new WeakMap,kn=new WeakMap,An=new WeakMap,jn=new WeakSet,Mn=new WeakMap,Nn=new WeakMap,Pn=new WeakMap,Fn=new WeakMap,In=new WeakMap,Ln=class extends vn(u){constructor(){super(),_(this,jn),this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutArrow=!1,this.withoutInvokerAria=!1,y(this,Dn,null),y(this,On,null),y(this,kn,!1),y(this,An,e=>{e.key===`Escape`&&this.opened&&e.preventDefault()}),y(this,Mn,()=>{v(kn,this,b(jn,this,Rn).call(this))}),y(this,Nn,()=>{g(kn,this)&&(v(kn,this,!1),!(tt(document.activeElement)&&!b(jn,this,Rn).call(this))&&this._overlayCtrl.elementToFocusAfterHide?.focus())}),y(this,Pn,()=>{this._overlayCtrl.__escKeyHandlerCalled=!0}),y(this,Fn,()=>wt(this)),y(this,In,()=>Tt(this)),xt(this),this.addEventListener(`keydown`,g(An,this))}_setupOverlayCtrl(){super._setupOverlayCtrl(),v(On,this,this._overlayCtrl),g(On,this).addEventListener(`before-show`,g(Fn,this)),g(On,this).addEventListener(`before-hide`,bt),g(On,this).addEventListener(`before-hide`,g(Mn,this)),g(On,this).addEventListener(`hide`,g(In,this)),g(On,this).addEventListener(`hide`,g(Nn,this)),g(On,this).addEventListener(`hide`,g(Pn,this))}_teardownOverlayCtrl(){this._overlayCtrl?.isShown&&bt(),g(In,this).call(this),g(On,this)?.removeEventListener(`before-show`,g(Fn,this)),g(On,this)?.removeEventListener(`before-hide`,bt),g(On,this)?.removeEventListener(`before-hide`,g(Mn,this)),g(On,this)?.removeEventListener(`hide`,g(In,this)),g(On,this)?.removeEventListener(`hide`,g(Nn,this)),g(On,this)?.removeEventListener(`hide`,g(Pn,this)),v(On,this,null),super._teardownOverlayCtrl()}_defineOverlayConfig(){return{...xn(),zIndex:En(),handlesAccessibility:!this.withoutInvokerAria,inheritsReferenceWidth:this.matchInvokerWidth?`min`:`none`,popperConfig:{strategy:`fixed`,placement:this.placement,modifiers:[{name:`offset`,options:{offset:[0,this.distance]}},...St(),Tn]}}}get _overlayContentNode(){return this.shadowRoot?.querySelector(`.popover-pane`)}get _overlayInvokerNode(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}get _overlayReferenceNode(){return this.anchor}render(){return p`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <div
          class="popover-pane"
          part="popup"
          aria-label="${this.label??r}"
        >
          <slot name="content">
            <slot name="content-body"></slot>
            <slot name="content-footer"></slot>
          </slot>
        </div>
      </div>
    `}connectedCallback(){b(jn,this,zn).call(this),super.connectedCallback()}updated(e){super.updated(e),this._overlayCtrl&&((e.has(`for`)||e.has(`anchor`))&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode}),(e.has(`placement`)||e.has(`distance`)||e.has(`matchInvokerWidth`)||e.has(`withoutInvokerAria`))&&this._overlayCtrl.updateConfig(this._defineOverlayConfig()))}async show(){this.opened=!0,await this.updateComplete,await this.open()}async hide(){this.opened=!1,await this.updateComplete,await this.close()}};function Rn(){let e=this.getRootNode().activeElement;if(!e)return!1;let t=this._overlayInvokerNode;return t&&(t===e||t.contains(e))?!1:e===this||this.contains(e)}function zn(){if(g(Dn,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:e instanceof Text&&e.data.trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),v(Dn,this,t)}Ln.styles=[te,Et,wn],n([s()],Ln.prototype,`label`,void 0),n([s({reflect:!0})],Ln.prototype,`for`,void 0),n([s({attribute:!1})],Ln.prototype,`anchor`,void 0),n([s({reflect:!0})],Ln.prototype,`placement`,void 0),n([s({type:Number})],Ln.prototype,`distance`,void 0),n([s({attribute:`match-invoker-width`,type:Boolean,reflect:!0})],Ln.prototype,`matchInvokerWidth`,void 0),n([s({type:Boolean,attribute:`without-arrow`})],Ln.prototype,`withoutArrow`,void 0),n([s({type:Boolean,attribute:`without-invoker-aria`,reflect:!0})],Ln.prototype,`withoutInvokerAria`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,Ln);var Bn=a`
  --_input-border-width: var(
    --c-input-border-width,
    var(--c-form-control-border-width)
  );
  --_input-start-start-radius: var(--c-input-radius, var(--c-radius-sm));
  --_input-start-end-radius: var(--c-input-radius, var(--c-radius-sm));
  --_input-end-start-radius: var(--c-input-radius, var(--c-radius-sm));
  --_input-end-end-radius: var(--c-input-radius, var(--c-radius-sm));
  border-width: var(--_input-border-width);
  border-style: var(--c-input-border-style, var(--c-form-control-border-style));
  border-color: var(--c-input-border-color, var(--c-form-control-border-color));
  border-radius: var(--_input-start-start-radius) var(--_input-start-end-radius)
    var(--_input-end-end-radius) var(--_input-end-start-radius);
  background-color: var(--c-input-fill, var(--c-form-control-fill));
  box-shadow: var(--c-input-shadow);
  box-sizing: border-box;
  min-height: var(--c-input-height, var(--c-size-control-md));
`,Vn=a`
  font: inherit;
  color: var(--c-input-text, var(--c-text-default));
  position: relative;
  padding-block: 0;
  width: 100%;
  flex: 1 1 auto;

  /* Detect mobile devices and up the font size of inputs to avoid zoom on focus */
  @media (pointer: none), (pointer: coarse) {
    font-size: 1rem;
  }
`;a`
  ${Bn}
  ${Vn}
`;var Hn=a`
  ${Bn}
  width: 100%;
  height: 100%;
  appearance: none;
  padding-inline: var(--c-input-spacing-inline)
    calc(var(--c-input-spacing-inline) * 1.5 + 1em);
`,Un=a`
  :host([has-feedback-for='error']) {
    color: var(--c-color-danger-on-normal);

    ::slotted([slot='input']) {
      border-color: var(--c-color-danger-border-loud);
    }
  }

  ::slotted(label) {
    line-height: 1;
    font-weight: var(--c-field-label-font-weight, bold);
    font-size: var(--c-field-label-font-size, var(--text-sm));
  }

  /* The label and help text only render when there's something to show
     (see HasLabel and craft-field), so the spacing can be unconditional. */
  .form-field__label {
    margin-block-end: var(
      --c-field-label-margin-block-end,
      var(--c-spacing-sm)
    );

    &:has(+ .form-field__help-text) {
      margin-block-end: 0;
    }
  }

  .form-field__help-text {
    display: block;
    margin-block-end: var(--c-spacing-sm);
    font-size: 1em;
    color: var(--c-text-quiet);
  }

  .form-field__group-two .form-field__help-text {
    margin-block: var(--c-spacing-xs, 0.3125rem) 0;
  }

  /* Tip/warning notices (see FieldNotices) */
  .field-notice {
    --c-callout-icon-padding-inline: 0;
    --c-callout-text-padding-inline: var(--c-spacing-sm) 0;
    padding: 0;
    margin-block-start: var(--c-spacing-xs, 0.25rem);
  }

  ::slotted([slot='after']) {
    margin-block-start: var(--c-spacing-sm);
  }
`,Wn=a`
  ${Un}

  :host {
    --_control-height: var(--c-input-height, var(--c-size-control-md));
  }

  :host([size~='small']) {
    --_control-height: var(--c-input-height, var(--c-size-control-sm));
  }

  :host([monospace]) .input-group__container {
    font-family: var(--c-font-mono);
    font-size: 0.9em;
  }

  ::slotted([slot='input']) {
    font: inherit;
    padding-block: 0;
    border: none;
    border-radius: var(--c-input-radius, var(--c-radius-sm));
    appearance: none;
    padding-inline: var(--c-input-spacing-inline);
    background-color: transparent;
    width: 100%;
  }

  .input-group__container {
    ${Vn}
  }

  .input-group__prefix,
  .input-group__suffix {
    padding-inline: var(--c-input-spacing-inline);
    display: grid;
    place-items: center;
    border: var(--c-input-border-width) var(--c-input-border-style)
      var(--c-input-border-color, var(--c-form-control-border-color));
    border-radius: var(--c-input-radius, var(--c-radius-sm));
  }

  .input-group__prefix {
    border-inline-end: 0;
    border-end-end-radius: 0;
    border-start-end-radius: 0;
  }

  .input-group__suffix {
    border-inline-start: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /*
    A button suffix fills its segment, as craft-input-date-time's clear button
    does, with its focus ring inside it. The segment clips the button's fill
    to its rounded corners.
  */
  .input-group__suffix {
    overflow: clip;
  }

  :host(:not([inline-suffix])) ::slotted(craft-button[slot='suffix']) {
    --c-focus-outline-offset: -2px;
    align-self: stretch;
    box-sizing: border-box;
    width: max(
      var(--c-size-control-sm),
      var(--_control-height) - var(--c-input-border-width) * 2
    );
    height: auto;
    min-height: 0;
    margin-inline: calc(var(--c-input-spacing-inline) * -1);
    border-radius: 0;
  }

  :host([inline-suffix]) .input-group__suffix {
    overflow: visible;
    padding-inline: 0
      calc((var(--_control-height) - var(--c-size-control-sm)) / 2);
  }

  :host([inline-suffix]) .input-group__container:has(.input-group__suffix) {
    border-radius: var(--c-input-radius, var(--c-radius-sm));
    box-shadow: var(--c-input-shadow);
  }

  :host([inline-suffix])
    .input-group__input:has(+ .input-group__suffix)
    ::slotted([slot='input']) {
    --c-focus-outline-width: 0px;
    border-inline-end: 0;
    box-shadow: none;
  }

  :host([inline-suffix][focused-visible])
    .input-group__container:has(.input-group__suffix) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  .input-group__prefix + .input-group__input ::slotted([slot='input']) {
    --_input-start-start-radius: 0;
    --_input-end-start-radius: 0;
  }

  .input-group__prefix + .input-group__input ::slotted([slot='input']),
  .input-group__input:has(+ .input-group__suffix) ::slotted([slot='input']) {
    --c-focus-outline-style: inset;
    --c-focus-outline-offset: -2px;
  }

  .input-group__input:has(+ .input-group__suffix) ::slotted([slot='input']) {
    --_input-end-end-radius: 0;
    --_input-start-end-radius: 0;
  }

  .input-group__prefix + .input-group__input {
    border-radius-start-start: 0;
    border-radius-start-end: 0;
  }

  :host([size~='small']) ::slotted([slot='input']) {
    --c-input-height: var(--c-size-control-sm);
    --c-input-spacing-inline: var(--c-spacing-sm);
  }

  :host([center]) ::slotted([slot='input']) {
    text-align: center;
  }

  ::slotted([slot='input']) {
    width: 100%;
  }
`,Gn={Solid:`solid`,OutlineFill:`outline-fill`,Fill:`fill`,Outline:`outline`,Plain:`plain`};Object.values(Gn);var Kn=[`sm`,`md`,`lg`,`xl`];function qn(e){if(e!=null&&e!==``){if(e===0||e===`0`||e===`none`)return`0`;if(Kn.includes(e))return`var(--c-spacing-${e})`}}var Jn=(e,{customProperty:t,defaultValue:r})=>{let i=Array.isArray(t)?t:[t];class a extends e{constructor(...e){super(...e),this.padding=r}get resolvedPadding(){return qn(this.padding)}get paddingStyles(){let e=this.resolvedPadding;return e===void 0?{}:Object.fromEntries(i.map(t=>[t,e]))}}return n([s()],a.prototype,`padding`,void 0),a},Yn=`important`,Xn=` !important`,Zn=ke(class extends Ae{constructor(e){if(super(e),e.type!==Oe.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Xn);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Yn:``):n[e]=r}}return c}}),Qn=a`
  :host {
    display: contents;
  }

  .callout {
    --_radius: var(--c-callout-radius, var(--c-radius-md));
    --_callout-padding-block: var(
      --c-callout-padding-block,
      var(--c-spacing-sm)
    );
    --_callout-padding-inline: var(
      --c-callout-padding-inline,
      var(--c-spacing-sm)
    );
    display: grid;
    grid-template-areas: 'icon description action';
    grid-template-columns: auto 1fr minmax(0, max-content);
    align-items: start;
    padding-block: var(--_callout-padding-block);
    padding-inline: var(--_callout-padding-inline);
    border: 1px solid transparent;
    /* The display: contents host cannot take a grid span, so its rendered box does. */
    grid-column: 1 / -1;
  }

  .callout--title {
    grid-template-areas: 'icon title action' 'icon description action';
  }

  .callout--hide-icon {
    grid-template-areas: 'description action';
    grid-template-columns: 1fr minmax(0, max-content);

    .callout__icon {
      display: none;
    }
  }

  .callout--hide-icon.callout--title {
    grid-template-areas: 'title action' 'description action';
  }

  .callout--small {
    font-size: var(--c-text-sm);
    gap: 0 var(--c-spacing-xs);
  }

  .callout__title,
  .callout__description {
    padding-inline: var(--c-callout-text-padding-inline, var(--c-spacing-sm));
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  .callout__title {
    display: flex;
    font-weight: bold;
    grid-area: title;
  }

  .callout__description {
    grid-area: description;
    align-self: center;
  }

  .callout__action {
    grid-area: action;
    margin-inline-start: auto;
  }

  .callout__icon {
    width: auto;
    height: 1lh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: icon;
    padding-inline: var(--c-callout-icon-padding-inline, var(--c-spacing-sm));
  }

  ::slotted(code) {
    font-size: 0.9em;
    display: inline-flex;
    padding-block: 0;
    padding-inline: var(--c-spacing-sm);
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: var(--c-radius-sm);
  }

  :host([inline]) {
    display: inline-flex;
    padding-inline: var(--c-spacing-sm);
    padding-block: 0;
    line-height: 1.25rem;
    font-size: 0.9em;
  }

  :host([rounded~='all']) .callout {
    border-radius: var(--_radius);
  }

  :host([rounded~='none']) .callout {
    border-radius: 0;
  }

  :host([rounded~='start']) .callout {
    border-start-start-radius: var(--_radius);
    border-start-end-radius: var(--_radius);
  }

  :host([rounded~='end']) .callout {
    border-end-start-radius: var(--_radius);
    border-end-end-radius: var(--_radius);
  }

  :host([appearance~='solid']) .callout {
    --c-text-link: var(--c-color-on-loud);
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  :host([appearance~='fill']) .callout {
    --c-text-link: var(--c-color-on-normal);
    border-color: transparent;
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline-fill']) .callout {
    --c-text-link: var(--c-color-on-normal);
    border-color: var(--c-color-border-normal);
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline']) .callout {
    --c-text-link: var(--c-color-on-quiet);
    border-color: var(--c-color-border-quiet);
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([appearance~='plain']) .callout {
    --c-text-link: var(--c-color-on-quiet);
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-on-quiet);
  }
`,$n=class extends Jn(u,{customProperty:[`--_callout-padding-block`,`--_callout-padding-inline`]}){constructor(...e){super(...e),this.variant=re.Neutral,this.appearance=Gn.OutlineFill,this.title=``,this.icon=null,this.hideIcon=!1,this.rounded=`all`,this.inline=!1,this.size=`auto`,this.resolvedIcon=null,this._lightDom=new ae(this)}willUpdate(){this.resolvedIcon=this.icon??this.getDefaultIcon()}getDefaultIcon(){switch(this.variant){case re.Info:return`lightbulb`;case re.Success:return`circle-check`;case re.Warning:return`circle-exclamation`;case re.Danger:return`triangle-exclamation`;default:return null}}render(){let e=this.title||oe(this,`title`),t=!this.hideIcon&&(!!this.resolvedIcon||oe(this,`icon`));return p`
      <div
        data-variant="${this.variant}"
        style="${Zn(this.paddingStyles)}"
        class="${E({callout:!0,"callout--hide-icon":!t,"callout--title":e,"callout--small":this.size===`small`})}"
      >
        ${t?p`<slot name="icon" class="callout__icon">
              ${this.resolvedIcon?p`<craft-icon
                    name="${this.resolvedIcon}"
                    style="font-size: 0.9em"
                  ></craft-icon>`:r}
            </slot>`:r}
        ${e?p`<div class="callout__title">
              <slot name="title">${this.title}</slot>
            </div>`:r}

        <div class="callout__description">
          <slot></slot>
        </div>

        <div class="callout__action"><slot name="action"></slot></div>
      </div>
    `}};$n.styles=[ne,Qn],n([s({reflect:!0})],$n.prototype,`variant`,void 0),n([s({reflect:!0})],$n.prototype,`appearance`,void 0),n([s()],$n.prototype,`title`,void 0),n([s()],$n.prototype,`icon`,void 0),n([s({type:Boolean,attribute:`hide-icon`})],$n.prototype,`hideIcon`,void 0),n([s({reflect:!0})],$n.prototype,`rounded`,void 0),n([s({reflect:!0,type:Boolean})],$n.prototype,`inline`,void 0),n([s()],$n.prototype,`size`,void 0),n([f()],$n.prototype,`resolvedIcon`,void 0),customElements.get(`craft-callout`)||customElements.define(`craft-callout`,$n);var er=class e{constructor(e,...t){this.host=e,this.presence=[],this.handleMutations=()=>{let e=this.snapshot();e.some((e,t)=>e!==this.presence[t])&&(this.presence=e,this.host.requestUpdate())},this.slotNames=t,e.addController(this)}test(t){return t===e.DEFAULT_SLOT?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.presence=this.snapshot(),this.observer??=new MutationObserver(this.handleMutations),this.observer.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`],characterData:this.slotNames.includes(e.DEFAULT_SLOT)})}hostDisconnected(){this.observer?.disconnect()}hasDefaultSlot(){return Array.from(this.host.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent.trim()!==``:e.nodeType===Node.ELEMENT_NODE&&!e.slot)}hasNamedSlot(e){return Array.from(this.host.children).some(t=>t.slot===e)}snapshot(){return this.slotNames.map(e=>this.test(e))}};er.DEFAULT_SLOT=`[default]`;var tr=e=>{var t=new WeakMap;class n extends e{constructor(...e){super(...e),y(this,t,new er(this,`tip`,`warning`))}updated(e){super.updated(e);for(let e of[`tip`,`warning`]){let t=this.querySelector(`:scope > [slot="${e}"]`);t&&this.addToAriaDescribedBy(t,{idPrefix:e,reorder:!1})}}_feedbackTemplate(){return p`${this._noticeTemplate(`tip`)}${this._noticeTemplate(`warning`)}${super._feedbackTemplate()}`}_noticeTemplate(e){if(!g(t,this).test(e))return r;let n=e===`tip`;return p`
        <craft-callout
          class="field-notice"
          variant=${n?`info`:`warning`}
          appearance="plain"
          padding="none"
        >
          <craft-visually-hidden>
            ${S(n?`Tip:`:`Warning:`)}
          </craft-visually-hidden>
          <slot name=${e}></slot>
        </craft-callout>
      `}}return n},nr=e=>{var t=new WeakMap,n=new WeakMap,r=new WeakMap,i=new WeakSet;class a extends tr(e){constructor(...e){super(...e),_(this,i),y(this,t,new MutationObserver(()=>b(i,this,s).call(this))),y(this,n,!1),y(this,r,!1)}connectedCallback(){super.connectedCallback(),g(t,this).observe(this,{childList:!0,subtree:!0,characterData:!0}),b(i,this,s).call(this)}disconnectedCallback(){g(t,this).disconnect(),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),v(n,this,b(i,this,o).call(this,this.label,`label`)),v(r,this,b(i,this,o).call(this,this.helpText,`help-text`))}updated(e){super.updated(e),b(i,this,s).call(this)}_labelTemplate(){return g(n,this)?super._labelTemplate():p``}_helpTextTemplate(){return g(r,this)?super._helpTextTemplate():p``}}function o(e,t){let n=this.querySelector(`:scope > [slot="${t}"]`);return e.trim()!==``||(n?.childElementCount??0)>0}function s(){let e=b(i,this,o).call(this,this.label,`label`),t=b(i,this,o).call(this,this.helpText,`help-text`);this.toggleAttribute(`has-label`,e),(e!==g(n,this)||t!==g(r,this))&&this.requestUpdate()}return a},rr=window,ir=new WeakMap;function ar(e){rr.applyFocusVisiblePolyfill&&!ir.has(e)&&(rr.applyFocusVisiblePolyfill(e),ir.set(e,void 0))}var or=D(e=>class extends e{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:`focused-visible`},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(e){super.firstUpdated(e),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(e){super.updated(e),e.has(`autofocus`)&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute(`autofocus`)?this._focusableNode.setAttribute(`autofocus`,``):this._focusableNode.removeAttribute(`autofocus`))}focus(){this._focusableNode?.focus()}blur(){this._focusableNode?.blur()}get _focusableNode(){return this._inputNode||document.createElement(`input`)}__onFocus(){if(this.focused=!0,typeof rr.applyFocusVisiblePolyfill==`function`)this.focusedVisible=this._focusableNode.hasAttribute(`data-focus-visible-added`);else try{this.focusedVisible=this._focusableNode.matches(`:focus-visible`)}catch{this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){ar(this.getRootNode()),this.__redispatchFocus=e=>{e.stopPropagation(),this.dispatchEvent(new Event(`focus`))},this._focusableNode.addEventListener(`focus`,this.__redispatchFocus),this.__redispatchBlur=e=>{e.stopPropagation(),this.dispatchEvent(new Event(`blur`))},this._focusableNode.addEventListener(`blur`,this.__redispatchBlur),this.__redispatchFocusin=e=>{e.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event(`focusin`,{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener(`focusin`,this.__redispatchFocusin),this.__redispatchFocusout=e=>{e.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event(`focusout`,{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener(`focusout`,this.__redispatchFocusout)}__teardownEventsForFocusMixin(){this._focusableNode&&(this._focusableNode?.removeEventListener(`focus`,this.__redispatchFocus),this._focusableNode?.removeEventListener(`blur`,this.__redispatchBlur),this._focusableNode?.removeEventListener(`focusin`,this.__redispatchFocusin),this._focusableNode?.removeEventListener(`focusout`,this.__redispatchFocusout))}});function sr(e,t){return t={exports:{}},e(t,t.exports),t.exports}var cr=`long`,lr=`short`,ur=`narrow`,k=`numeric`,dr=`2-digit`,fr={number:{decimal:{style:`decimal`},integer:{style:`decimal`,maximumFractionDigits:0},currency:{style:`currency`,currency:`USD`},percent:{style:`percent`},default:{style:`decimal`}},date:{short:{month:k,day:k,year:dr},medium:{month:lr,day:k,year:k},long:{month:cr,day:k,year:k},full:{month:cr,day:k,year:k,weekday:cr},default:{month:lr,day:k,year:k}},time:{short:{hour:k,minute:k},medium:{hour:k,minute:k,second:k},long:{hour:k,minute:k,second:k,timeZoneName:lr},full:{hour:k,minute:k,second:k,timeZoneName:lr},default:{hour:k,minute:k,second:k}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(e){if(e){var t={},n=e.match(/\b[A-Z]{3}\b/i),r=e.replace(/[^¤]/g,``).length;if(!r&&n&&(r=1),r?(t.style=`currency`,t.currencyDisplay=r===1?`symbol`:r===2?`code`:`name`,t.currency=n?n[0].toUpperCase():`USD`):e.indexOf(`%`)>=0&&(t.style=`percent`),!/[@#0]/.test(e))return t.style?t:void 0;if(t.useGrouping=e.indexOf(`,`)>=0,/E\+?[@#0]+/i.test(e)||e.indexOf(`@`)>=0){var i=e.replace(/E\+?[@#0]+|[^@#0]/gi,``);t.minimumSignificantDigits=Math.min(Math.max(i.replace(/[^@0]/g,``).length,1),21),t.maximumSignificantDigits=Math.min(Math.max(i.length,1),21)}else{for(var a=e.replace(/[^#0.]/g,``).split(`.`),o=a[0],s=o.length-1;o[s]===`0`;)--s;t.minimumIntegerDigits=Math.min(Math.max(o.length-1-s,1),21);var c=a[1]||``;for(s=0;c[s]===`0`;)++s;for(t.minimumFractionDigits=Math.min(Math.max(s,0),20);c[s]===`#`;)++s;t.maximumFractionDigits=Math.min(Math.max(s,0),20)}return t}},parseDatePattern:function(e){if(e){for(var t={},n=0;n<e.length;){for(var r=e[n],i=1;e[++n]===r;)++i;switch(r){case`G`:t.era=i===5?ur:i===4?cr:lr;break;case`y`:case`Y`:t.year=i===2?dr:k;break;case`M`:case`L`:i=Math.min(Math.max(i-1,0),4),t.month=[k,dr,lr,cr,ur][i];break;case`E`:case`e`:case`c`:t.weekday=i===5?ur:i===4?cr:lr;break;case`d`:case`D`:t.day=i===2?dr:k;break;case`h`:case`K`:t.hour12=!0,t.hour=i===2?dr:k;break;case`H`:case`k`:t.hour12=!1,t.hour=i===2?dr:k;break;case`m`:t.minute=i===2?dr:k;break;case`s`:case`S`:t.second=i===2?dr:k;break;case`z`:case`Z`:case`v`:case`V`:t.timeZoneName=i===1?lr:cr;break}}return Object.keys(t).length?t:void 0}}},pr=function(e,t){if(typeof e==`string`&&t[e])return e;for(var n=[].concat(e||[]),r=0,i=n.length;r<i;++r)for(var a=n[r].split(`-`);a.length;){var o=a.join(`-`);if(t[o])return o;a.pop()}},mr=`zero`,A=`one`,hr=`two`,j=`few`,M=`many`,N=`other`,P=[function(e){return+e==1?A:N},function(e){var t=+e;return 0<=t&&t<=1?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return t===0||n===1?A:N},function(e){var t=+e;return t===0?mr:t===1?A:t===2?hr:3<=t%100&&t%100<=10?j:11<=t%100&&t%100<=99?M:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?A:N},function(e){var t=+e;return t%10==1&&t%100!=11?A:2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?j:t%10==0||5<=t%10&&t%10<=9||11<=t%100&&t%100<=14?M:N},function(e){var t=+e;return t%10==1&&t%100!=11&&t%100!=71&&t%100!=91?A:t%10==2&&t%100!=12&&t%100!=72&&t%100!=92?hr:(3<=t%10&&t%10<=4||t%10==9)&&(t%100<10||19<t%100)&&(t%100<70||79<t%100)&&(t%100<90||99<t%100)?j:t!==0&&t%1e6==0?M:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%10==1&&t%100!=11||r%10==1&&r%100!=11?A:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)||2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?j:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?A:2<=t&&t<=4&&n===0?j:n===0?N:M},function(e){var t=+e;return t===0?mr:t===1?A:t===2?hr:t===3?j:t===6?M:N},function(e){var t=Math.floor(Math.abs(+e)),n=+(``+e).replace(/^[^.]*.?|0+$/g,``);return+e==1||n!==0&&(t===0||t===1)?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%100==1||r%100==1?A:n===0&&t%100==2||r%100==2?hr:n===0&&3<=t%100&&t%100<=4||3<=r%100&&r%100<=4?j:N},function(e){var t=Math.floor(Math.abs(+e));return t===0||t===1?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&(t===1||t===2||t===3)||n===0&&t%10!=4&&t%10!=6&&t%10!=9||n!==0&&r%10!=4&&r%10!=6&&r%10!=9?A:N},function(e){var t=+e;return t===1?A:t===2?hr:3<=t&&t<=6?j:7<=t&&t<=10?M:N},function(e){var t=+e;return t===1||t===11?A:t===2||t===12?hr:3<=t&&t<=10||13<=t&&t<=19?j:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%10==1?A:n===0&&t%10==2?hr:n===0&&(t%100==0||t%100==20||t%100==40||t%100==60||t%100==80)?j:n===0?N:M},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+e;return t===1&&n===0?A:t===2&&n===0?hr:n===0&&(r<0||10<r)&&r%10==0?M:N},function(e){var t=Math.floor(Math.abs(+e)),n=+(``+e).replace(/^[^.]*.?|0+$/g,``);return n===0&&t%10==1&&t%100!=11||n!==0?A:N},function(e){var t=+e;return t===1?A:t===2?hr:N},function(e){var t=+e;return t===0?mr:t===1?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return n===0?mr:(t===0||t===1)&&n!==0?A:N},function(e){var t=+(e+`.`).split(`.`)[1],n=+e;return n%10==1&&(n%100<11||19<n%100)?A:2<=n%10&&n%10<=9&&(n%100<11||19<n%100)?j:t===0?N:M},function(e){var t=(e+`.`).split(`.`)[1].length,n=+(e+`.`).split(`.`)[1],r=+e;return r%10==0||11<=r%100&&r%100<=19||t===2&&11<=n%100&&n%100<=19?mr:r%10==1&&r%100!=11||t===2&&n%10==1&&n%100!=11||t!==2&&n%10==1?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+(e+`.`).split(`.`)[1];return n===0&&t%10==1&&t%100!=11||r%10==1&&r%100!=11?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length,r=+e;return t===1&&n===0?A:n!==0||r===0||r!==1&&1<=r%100&&r%100<=19?j:N},function(e){var t=+e;return t===1?A:t===0||2<=t%100&&t%100<=10?j:11<=t%100&&t%100<=19?M:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return t===1&&n===0?A:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?j:n===0&&t!==1&&0<=t%10&&t%10<=1||n===0&&5<=t%10&&t%10<=9||n===0&&12<=t%100&&t%100<=14?M:N},function(e){var t=Math.floor(Math.abs(+e));return 0<=t&&t<=1?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%10==1&&t%100!=11?A:n===0&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?j:n===0&&t%10==0||n===0&&5<=t%10&&t%10<=9||n===0&&11<=t%100&&t%100<=14?M:N},function(e){var t=Math.floor(Math.abs(+e)),n=+e;return t===0||n===1?A:2<=n&&n<=10?j:N},function(e){var t=Math.floor(Math.abs(+e)),n=+(e+`.`).split(`.`)[1],r=+e;return r===0||r===1||t===0&&n===1?A:N},function(e){var t=Math.floor(Math.abs(+e)),n=(e+`.`).split(`.`)[1].length;return n===0&&t%100==1?A:n===0&&t%100==2?hr:n===0&&3<=t%100&&t%100<=4||n!==0?j:N},function(e){var t=+e;return 0<=t&&t<=1||11<=t&&t<=99?A:N},function(e){var t=+e;return t===1||t===5||t===7||t===8||t===9||t===10?A:t===2||t===3?hr:t===4?j:t===6?M:N},function(e){var t=Math.floor(Math.abs(+e));return t%10==1||t%10==2||t%10==5||t%10==7||t%10==8||t%100==20||t%100==50||t%100==70||t%100==80?A:t%10==3||t%10==4||t%1e3==100||t%1e3==200||t%1e3==300||t%1e3==400||t%1e3==500||t%1e3==600||t%1e3==700||t%1e3==800||t%1e3==900?j:t===0||t%10==6||t%100==40||t%100==60||t%100==90?M:N},function(e){var t=+e;return(t%10==2||t%10==3)&&t%100!=12&&t%100!=13?j:N},function(e){var t=+e;return t===1||t===3?A:t===2?hr:t===4?j:N},function(e){var t=+e;return t===0||t===7||t===8||t===9?mr:t===1?A:t===2?hr:t===3||t===4?j:t===5||t===6?M:N},function(e){var t=+e;return t%10==1&&t%100!=11?A:t%10==2&&t%100!=12?hr:t%10==3&&t%100!=13?j:N},function(e){var t=+e;return t===1||t===11?A:t===2||t===12?hr:t===3||t===13?j:N},function(e){var t=+e;return t===1?A:t===2||t===3?hr:t===4?j:t===6?M:N},function(e){var t=+e;return t===1||t===5?A:N},function(e){var t=+e;return t===11||t===8||t===80||t===800?M:N},function(e){var t=Math.floor(Math.abs(+e));return t===1?A:t===0||2<=t%100&&t%100<=20||t%100==40||t%100==60||t%100==80?M:N},function(e){var t=+e;return t%10==6||t%10==9||t%10==0&&t!==0?M:N},function(e){var t=Math.floor(Math.abs(+e));return t%10==1&&t%100!=11?A:t%10==2&&t%100!=12?hr:(t%10==7||t%10==8)&&t%100!=17&&t%100!=18?M:N},function(e){var t=+e;return t===1?A:t===2||t===3?hr:t===4?j:N},function(e){var t=+e;return 1<=t&&t<=4?A:N},function(e){var t=+e;return t===1||t===5||7<=t&&t<=9?A:t===2||t===3?hr:t===4?j:t===6?M:N},function(e){var t=+e;return t===1?A:t%10==4&&t%100!=14?M:N},function(e){var t=+e;return(t%10==1||t%10==2)&&t%100!=11&&t%100!=12?A:N},function(e){var t=+e;return t%10==6||t%10==9||t===10?j:N},function(e){var t=+e;return t%10==3&&t%100!=13?j:N}],gr={af:{cardinal:P[0]},ak:{cardinal:P[1]},am:{cardinal:P[2]},ar:{cardinal:P[3]},ars:{cardinal:P[3]},as:{cardinal:P[2],ordinal:P[34]},asa:{cardinal:P[0]},ast:{cardinal:P[4]},az:{cardinal:P[0],ordinal:P[35]},be:{cardinal:P[5],ordinal:P[36]},bem:{cardinal:P[0]},bez:{cardinal:P[0]},bg:{cardinal:P[0]},bh:{cardinal:P[1]},bn:{cardinal:P[2],ordinal:P[34]},br:{cardinal:P[6]},brx:{cardinal:P[0]},bs:{cardinal:P[7]},ca:{cardinal:P[4],ordinal:P[37]},ce:{cardinal:P[0]},cgg:{cardinal:P[0]},chr:{cardinal:P[0]},ckb:{cardinal:P[0]},cs:{cardinal:P[8]},cy:{cardinal:P[9],ordinal:P[38]},da:{cardinal:P[10]},de:{cardinal:P[4]},dsb:{cardinal:P[11]},dv:{cardinal:P[0]},ee:{cardinal:P[0]},el:{cardinal:P[0]},en:{cardinal:P[4],ordinal:P[39]},eo:{cardinal:P[0]},es:{cardinal:P[0]},et:{cardinal:P[4]},eu:{cardinal:P[0]},fa:{cardinal:P[2]},ff:{cardinal:P[12]},fi:{cardinal:P[4]},fil:{cardinal:P[13],ordinal:P[0]},fo:{cardinal:P[0]},fr:{cardinal:P[12],ordinal:P[0]},fur:{cardinal:P[0]},fy:{cardinal:P[4]},ga:{cardinal:P[14],ordinal:P[0]},gd:{cardinal:P[15],ordinal:P[40]},gl:{cardinal:P[4]},gsw:{cardinal:P[0]},gu:{cardinal:P[2],ordinal:P[41]},guw:{cardinal:P[1]},gv:{cardinal:P[16]},ha:{cardinal:P[0]},haw:{cardinal:P[0]},he:{cardinal:P[17]},hi:{cardinal:P[2],ordinal:P[41]},hr:{cardinal:P[7]},hsb:{cardinal:P[11]},hu:{cardinal:P[0],ordinal:P[42]},hy:{cardinal:P[12],ordinal:P[0]},ia:{cardinal:P[4]},io:{cardinal:P[4]},is:{cardinal:P[18]},it:{cardinal:P[4],ordinal:P[43]},iu:{cardinal:P[19]},iw:{cardinal:P[17]},jgo:{cardinal:P[0]},ji:{cardinal:P[4]},jmc:{cardinal:P[0]},ka:{cardinal:P[0],ordinal:P[44]},kab:{cardinal:P[12]},kaj:{cardinal:P[0]},kcg:{cardinal:P[0]},kk:{cardinal:P[0],ordinal:P[45]},kkj:{cardinal:P[0]},kl:{cardinal:P[0]},kn:{cardinal:P[2]},ks:{cardinal:P[0]},ksb:{cardinal:P[0]},ksh:{cardinal:P[20]},ku:{cardinal:P[0]},kw:{cardinal:P[19]},ky:{cardinal:P[0]},lag:{cardinal:P[21]},lb:{cardinal:P[0]},lg:{cardinal:P[0]},ln:{cardinal:P[1]},lt:{cardinal:P[22]},lv:{cardinal:P[23]},mas:{cardinal:P[0]},mg:{cardinal:P[1]},mgo:{cardinal:P[0]},mk:{cardinal:P[24],ordinal:P[46]},ml:{cardinal:P[0]},mn:{cardinal:P[0]},mo:{cardinal:P[25],ordinal:P[0]},mr:{cardinal:P[2],ordinal:P[47]},mt:{cardinal:P[26]},nah:{cardinal:P[0]},naq:{cardinal:P[19]},nb:{cardinal:P[0]},nd:{cardinal:P[0]},ne:{cardinal:P[0],ordinal:P[48]},nl:{cardinal:P[4]},nn:{cardinal:P[0]},nnh:{cardinal:P[0]},no:{cardinal:P[0]},nr:{cardinal:P[0]},nso:{cardinal:P[1]},ny:{cardinal:P[0]},nyn:{cardinal:P[0]},om:{cardinal:P[0]},or:{cardinal:P[0],ordinal:P[49]},os:{cardinal:P[0]},pa:{cardinal:P[1]},pap:{cardinal:P[0]},pl:{cardinal:P[27]},prg:{cardinal:P[23]},ps:{cardinal:P[0]},pt:{cardinal:P[28]},"pt-PT":{cardinal:P[4]},rm:{cardinal:P[0]},ro:{cardinal:P[25],ordinal:P[0]},rof:{cardinal:P[0]},ru:{cardinal:P[29]},rwk:{cardinal:P[0]},saq:{cardinal:P[0]},sc:{cardinal:P[4],ordinal:P[43]},scn:{cardinal:P[4],ordinal:P[43]},sd:{cardinal:P[0]},sdh:{cardinal:P[0]},se:{cardinal:P[19]},seh:{cardinal:P[0]},sh:{cardinal:P[7]},shi:{cardinal:P[30]},si:{cardinal:P[31]},sk:{cardinal:P[8]},sl:{cardinal:P[32]},sma:{cardinal:P[19]},smi:{cardinal:P[19]},smj:{cardinal:P[19]},smn:{cardinal:P[19]},sms:{cardinal:P[19]},sn:{cardinal:P[0]},so:{cardinal:P[0]},sq:{cardinal:P[0],ordinal:P[50]},sr:{cardinal:P[7]},ss:{cardinal:P[0]},ssy:{cardinal:P[0]},st:{cardinal:P[0]},sv:{cardinal:P[4],ordinal:P[51]},sw:{cardinal:P[4]},syr:{cardinal:P[0]},ta:{cardinal:P[0]},te:{cardinal:P[0]},teo:{cardinal:P[0]},ti:{cardinal:P[1]},tig:{cardinal:P[0]},tk:{cardinal:P[0],ordinal:P[52]},tl:{cardinal:P[13],ordinal:P[0]},tn:{cardinal:P[0]},tr:{cardinal:P[0]},ts:{cardinal:P[0]},tzm:{cardinal:P[33]},ug:{cardinal:P[0]},uk:{cardinal:P[29],ordinal:P[53]},ur:{cardinal:P[4]},uz:{cardinal:P[0]},ve:{cardinal:P[0]},vo:{cardinal:P[0]},vun:{cardinal:P[0]},wa:{cardinal:P[1]},wae:{cardinal:P[0]},xh:{cardinal:P[0]},xog:{cardinal:P[0]},yi:{cardinal:P[4]},zu:{cardinal:P[2]},lo:{ordinal:P[0]},ms:{ordinal:P[0]},vi:{ordinal:P[0]}},_r=sr(function(e,t){t=e.exports=function(e,t,r){return n(e,null,t||`en`,r||{},!0)},t.toParts=function(e,t,r){return n(e,null,t||`en`,r||{},!1)};function n(e,t,n,i,a){var o=e.map(function(e){return r(e,t,n,i,a)});return a?o.length===1?o[0]:function(e){for(var t=``,n=0;n<o.length;++n)t+=o[n](e);return t}:function(e){return o.reduce(function(t,n){return t.concat(n(e))},[])}}function r(e,t,r,a,o){if(typeof e==`string`){var s=e;return function(){return s}}var c=e[0],l=e[1];if(t&&e[0]===`#`){c=t[0];var u=t[2],f=(a.number||d.number)([c,`number`],r);return function(e){return f(i(c,e)-u,e)}}var p;l===`plural`||l===`selectordinal`?(p={},Object.keys(e[3]).forEach(function(t){p[t]=n(e[3][t],e,r,a,o)}),e=[e[0],e[1],e[2],p]):e[2]&&typeof e[2]==`object`&&(p={},Object.keys(e[2]).forEach(function(t){p[t]=n(e[2][t],e,r,a,o)}),e=[e[0],e[1],p]);var m=l&&(a[l]||d[l]);if(m){var h=m(e,r);return function(e){return h(i(c,e),e)}}return o?function(e){return String(i(c,e))}:function(e){return i(c,e)}}function i(e,t){if(t&&e in t)return t[e];for(var n=e.split(`.`),r=t,i=0,a=n.length;r&&i<a;++i)r=r[n[i]];return r}function a(e,t){var n=e[2],r=fr.number[n]||fr.parseNumberPattern(n)||fr.number.default;return new Intl.NumberFormat(t,r).format}function o(e,t){var n=e[2],r=fr.duration[n]||fr.duration.default,i=new Intl.NumberFormat(t,r.seconds).format,a=new Intl.NumberFormat(t,r.minutes).format,o=new Intl.NumberFormat(t,r.hours).format,s=/^fi$|^fi-|^da/.test(String(t))?`.`:`:`;return function(e,t){if(e=+e,!isFinite(e))return i(e);var n=~~(e/60/60),r=~~(e/60%60),c=(n?o(Math.abs(n))+s:``)+a(Math.abs(r))+s+i(Math.abs(e%60));return e<0?o(-1).replace(o(1),c):c}}function s(e,t){var n=e[1],r=e[2],i=fr[n][r]||fr.parseDatePattern(r)||fr[n].default;return new Intl.DateTimeFormat(t,i).format}function c(e,t){var n=e[1]===`selectordinal`?`ordinal`:`cardinal`,r=e[2],i=e[3],a;if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(t).length>0)a=new Intl.PluralRules(t,{type:n});else{var o=pr(t,gr);a={select:o&&gr[o][n]||l}}return function(e,t){return(i[`=`+ +e]||i[a.select(e-r)]||i.other)(t)}}function l(){return`other`}function u(e,t){var n=e[2];return function(e,t){return(n[e]||n.other)(t)}}var d={number:a,ordinal:a,spellout:a,duration:o,date:s,time:s,plural:c,selectordinal:c,select:u};t.types=d});_r.toParts,_r.types;var vr=sr(function(e,t){var n=[`number`,`date`,`time`,`ordinal`,`duration`,`spellout`],r=[`plural`,`select`,`selectordinal`];t=e.exports=function(e,t){return i({pattern:String(e),index:0,tagsType:t&&t.tagsType||null,tokens:t&&t.tokens||null},``)};function i(e,t){var n=e.pattern,r=n.length,i=[],o=e.index,s=a(e,t);for(s&&i.push(s),s&&e.tokens&&e.tokens.push([`text`,n.slice(o,e.index)]);e.index<r;){if(n[e.index]===`}`){if(!t)throw g(e);break}if(t&&e.tagsType&&n.slice(e.index,e.index+2)===`</`)break;i.push(c(e)),o=e.index,s=a(e,t),s&&i.push(s),s&&e.tokens&&e.tokens.push([`text`,n.slice(o,e.index)])}return i}function a(e,t){for(var n=e.pattern,r=n.length,i=t===`plural`||t===`selectordinal`,a=!!e.tagsType,s=t===`{style}`,c=``;e.index<r;){var l=n[e.index];if(l===`{`||l===`}`||i&&l===`#`||a&&l===`<`||s&&o(l.charCodeAt(0)))break;if(l===`'`)if(l=n[++e.index],l===`'`)c+=l,++e.index;else if(l===`{`||l===`}`||i&&l===`#`||a&&l===`<`||s)for(c+=l;++e.index<r;)if(l=n[e.index],l===`'`&&n[e.index+1]===`'`)c+=`'`,++e.index;else if(l===`'`){++e.index;break}else c+=l;else c+=`'`;else c+=l,++e.index}return c}function o(e){return e>=9&&e<=13||e===32||e===133||e===160||e===6158||e>=8192&&e<=8205||e===8232||e===8233||e===8239||e===8287||e===8288||e===12288||e===65279}function s(e){for(var t=e.pattern,n=t.length,r=e.index;e.index<n&&o(t.charCodeAt(e.index));)++e.index;r<e.index&&e.tokens&&e.tokens.push([`space`,e.pattern.slice(r,e.index)])}function c(e){var t=e.pattern;if(t[e.index]===`#`)return e.tokens&&e.tokens.push([`syntax`,`#`]),++e.index,[`#`];var r=l(e);if(r)return r;if(t[e.index]!==`{`)throw g(e,`{`);e.tokens&&e.tokens.push([`syntax`,`{`]),++e.index,s(e);var i=u(e);if(!i)throw g(e,`placeholder id`);e.tokens&&e.tokens.push([`id`,i]),s(e);var a=t[e.index];if(a===`}`)return e.tokens&&e.tokens.push([`syntax`,`}`]),++e.index,[i];if(a!==`,`)throw g(e,`, or }`);e.tokens&&e.tokens.push([`syntax`,`,`]),++e.index,s(e);var o=u(e);if(!o)throw g(e,`placeholder type`);if(e.tokens&&e.tokens.push([`type`,o]),s(e),a=t[e.index],a===`}`){if(e.tokens&&e.tokens.push([`syntax`,`}`]),o===`plural`||o===`selectordinal`||o===`select`)throw g(e,o+` sub-messages`);return++e.index,[i,o]}if(a!==`,`)throw g(e,`, or }`);e.tokens&&e.tokens.push([`syntax`,`,`]),++e.index,s(e);var c;if(o===`plural`||o===`selectordinal`){var p=f(e);s(e),c=[i,o,p,m(e,o)]}else if(o===`select`)c=[i,o,m(e,o)];else if(n.indexOf(o)>=0)c=[i,o,d(e)];else{var h=e.index,_=d(e);s(e),t[e.index]===`{`&&(e.index=h,_=m(e,o)),c=[i,o,_]}if(s(e),t[e.index]!==`}`)throw g(e,`}`);return e.tokens&&e.tokens.push([`syntax`,`}`]),++e.index,c}function l(e){var t=e.tagsType;if(!(!t||e.pattern[e.index]!==`<`)){if(e.pattern.slice(e.index,e.index+2)===`</`)throw g(e,null,`closing tag without matching opening tag`);e.tokens&&e.tokens.push([`syntax`,`<`]),++e.index;var n=u(e,!0);if(!n)throw g(e,`placeholder id`);if(e.tokens&&e.tokens.push([`id`,n]),s(e),e.pattern.slice(e.index,e.index+2)===`/>`)return e.tokens&&e.tokens.push([`syntax`,`/>`]),e.index+=2,[n,t];if(e.pattern[e.index]!==`>`)throw g(e,`>`);e.tokens&&e.tokens.push([`syntax`,`>`]),++e.index;var r=i(e,t),a=e.index;if(e.pattern.slice(e.index,e.index+2)!==`</`)throw g(e,`</`+n+`>`);e.tokens&&e.tokens.push([`syntax`,`</`]),e.index+=2;var o=u(e,!0);if(o&&e.tokens&&e.tokens.push([`id`,o]),n!==o)throw e.index=a,g(e,`</`+n+`>`,`</`+o+`>`);if(s(e),e.pattern[e.index]!==`>`)throw g(e,`>`);return e.tokens&&e.tokens.push([`syntax`,`>`]),++e.index,[n,t,{children:r}]}}function u(e,t){for(var n=e.pattern,r=n.length,i=``;e.index<r;){var a=n[e.index];if(a===`{`||a===`}`||a===`,`||a===`#`||a===`'`||o(a.charCodeAt(0))||t&&(a===`<`||a===`>`||a===`/`))break;i+=a,++e.index}return i}function d(e){var t=e.index,n=a(e,`{style}`);if(!n)throw g(e,`placeholder style name`);return e.tokens&&e.tokens.push([`style`,e.pattern.slice(t,e.index)]),n}function f(e){var t=e.pattern,n=t.length,r=0;if(t.slice(e.index,e.index+7)===`offset:`){e.tokens&&e.tokens.push([`offset`,`offset`],[`syntax`,`:`]),e.index+=7,s(e);for(var i=e.index;e.index<n&&p(t.charCodeAt(e.index));)++e.index;if(i===e.index)throw g(e,`offset number`);e.tokens&&e.tokens.push([`number`,t.slice(i,e.index)]),r=+t.slice(i,e.index)}return r}function p(e){return e>=48&&e<=57}function m(e,t){for(var n=e.pattern,i=n.length,a={};e.index<i&&n[e.index]!==`}`;){var o=u(e);if(!o)throw g(e,`sub-message selector`);e.tokens&&e.tokens.push([`selector`,o]),s(e),a[o]=h(e,t),s(e)}if(!a.other&&r.indexOf(t)>=0)throw g(e,null,null,`"other" sub-message must be specified in `+t);return a}function h(e,t){if(e.pattern[e.index]!==`{`)throw g(e,`{ to start sub-message`);e.tokens&&e.tokens.push([`syntax`,`{`]),++e.index;var n=i(e,t);if(e.pattern[e.index]!==`}`)throw g(e,`} to end sub-message`);return e.tokens&&e.tokens.push([`syntax`,`}`]),++e.index,n}function g(e,t,n,r){var i=e.pattern,a=i.slice(0,e.index).split(/\r?\n/),o=e.index,s=a.length,c=a.slice(-1)[0].length;return n||=e.index>=i.length?`end of message pattern`:u(e)||i[e.index],r||=_(t,n),r+=` in `+i.replace(/\r?\n/g,`
`),new v(r,t,n,o,s,c)}function _(e,t){return e?`Expected `+e+` but found `+t:`Unexpected `+t+` found`}function v(e,t,n,r,i,a){Error.call(this,e),this.name=`SyntaxError`,this.message=e,this.expected=t,this.found=n,this.offset=r,this.line=i,this.column=a}v.prototype=Object.create(Error.prototype),t.SyntaxError=v});vr.SyntaxError;var yr=RegExp(`^(`+Object.keys(gr).join(`|`)+`)\\b`),br=new WeakMap;function xr(e,t,n){if(!(this instanceof xr)||br.has(this))throw TypeError(`calling MessageFormat constructor without new is invalid`);var r=vr(e);br.set(this,{ast:r,format:_r(r,t,n&&n.types),locale:xr.supportedLocalesOf(t)[0]||`en`,locales:t,options:n})}var Sr=xr;Object.defineProperties(xr.prototype,{format:{configurable:!0,get:function(){var e=br.get(this);if(!e)throw TypeError(`MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat`);return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=br.get(this);if(!t)throw TypeError(`MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat`);return(t.toParts||=_r.toParts(t.ast,t.locales,t.options&&t.options.types))(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=br.get(this);if(!e)throw TypeError(`MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat`);return{locale:e.locale}}}}),typeof Symbol<`u`&&Object.defineProperty(xr.prototype,Symbol.toStringTag,{value:`Object`}),Object.defineProperties(xr,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(e){return yr.test(e)})).filter(function(e,t,n){return n.indexOf(e)===t})}}});function Cr(e){return!!(e&&e.default&&typeof e.default==`object`&&Object.keys(e).length===1)}var wr=globalThis.document?.documentElement,Tr=class extends EventTarget{formatNumberOptions={returnIfNaN:``,postProcessors:new Map};formatDateOptions={postProcessors:new Map};#e=!1;#t=``;#n=null;__storage={};__namespacePatternsMap=new Map;__namespaceLoadersCache={};__namespaceLoaderPromisesCache={};get locale(){return this.#e?this.#t||``:wr.lang||``}set locale(e){if(this.#r(e),!this.#e){let t=wr.lang;this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t);return}let t=this.#t;this.#t=e,this.#n===null&&this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t)}get loadingComplete(){return typeof this.__namespaceLoaderPromisesCache[this.locale]==`object`?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}constructor({allowOverridesForExistingNamespaces:e=!1,autoLoadOnLocaleChange:t=!1,showKeyAsFallback:n=!1,fallbackLocale:r=``}={}){super(),this.__allowOverridesForExistingNamespaces=e,this._autoLoadOnLocaleChange=!!t,this._showKeyAsFallback=n,this._fallbackLocale=r;let i=wr.getAttribute(`data-localize-lang`);this.#e=!!i,this.#e&&(this.locale=i,this._setupTranslationToolSupport()),wr.lang||=this.locale||`en-GB`,this._setupHtmlLangAttributeObserver()}addData(e,t,n){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(e,t))throw Error(`Namespace "${t}" has been already added for the locale "${e}".`);this.__storage[e]=this.__storage[e]||{},this.__allowOverridesForExistingNamespaces?this.__storage[e][t]={...this.__storage[e][t],...n}:this.__storage[e][t]=n}setupNamespaceLoader(e,t){this.__namespacePatternsMap.set(e,t)}loadNamespaces(e,{locale:t}={}){return Promise.all(e.map(e=>this.loadNamespace(e,{locale:t})))}loadNamespace(e,{locale:t=this.locale}={locale:this.locale}){let n=typeof e==`object`,r=n?Object.keys(e)[0]:e;return this._isNamespaceInCache(t,r)?Promise.resolve():this._getCachedNamespaceLoaderPromise(t,r)||this._loadNamespaceData(t,e,n,r)}msg(e,t,n={}){let r=n.locale?n.locale:this.locale,i=this._getMessageForKeys(e,r);return i?new Sr(i,r).format(t):``}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:e,postProcessor:t}){this.formatDateOptions?.postProcessors.set(e,t)}setNumberPostProcessorForLocale({locale:e,postProcessor:t}){this.formatNumberOptions?.postProcessors.set(e,t)}_setupTranslationToolSupport(){this.#n=wr.lang||null}_setHtmlLangAttribute(e){this._teardownHtmlLangAttributeObserver(),wr.lang=e,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||=new MutationObserver(e=>{e.forEach(e=>{this.#e?wr.lang===`auto`?(this.#n=null,this._setHtmlLangAttribute(this.locale)):this.#n=document.documentElement.lang:this._onLocaleChanged(document.documentElement.lang,e.oldValue||``)})}),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:[`lang`],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(e,t){return!!(this.__storage[e]&&this.__storage[e][t])}_getCachedNamespaceLoaderPromise(e,t){return this.__namespaceLoaderPromisesCache[e]?this.__namespaceLoaderPromisesCache[e][t]:null}_loadNamespaceData(e,t,n,r){let i=this._getNamespaceLoader(t,n,r),a=this._getNamespaceLoaderPromise(i,e,r);return this._cacheNamespaceLoaderPromise(e,r,a),a.then(t=>{if(this.__namespaceLoaderPromisesCache[e]&&this.__namespaceLoaderPromisesCache[e][r]===a){let n=Cr(t)?t.default:t;this.addData(e,r,n)}})}_getNamespaceLoader(e,t,n){let r=this.__namespaceLoadersCache[n];if(r||(t?(r=e[n],this.__namespaceLoadersCache[n]=r):(r=this._lookupNamespaceLoader(n),this.__namespaceLoadersCache[n]=r)),!r)throw Error(`Namespace "${n}" was not properly setup.`);return this.__namespaceLoadersCache[n]=r,r}_getNamespaceLoaderPromise(e,t,n,r=this._fallbackLocale){return e(t,n).catch(()=>{let i=this._getLangFromLocale(t);return e(i,n).catch(()=>{if(r)return this._getNamespaceLoaderPromise(e,r,n,``).catch(()=>{let e=this._getLangFromLocale(r);throw Error(`Data for namespace "${n}" and current locale "${t}" or fallback locale "${r}" could not be loaded. Make sure you have data either for locale "${t}" (and/or generic language "${i}") or for fallback "${r}" (and/or "${e}").`)});throw Error(`Data for namespace "${n}" and locale "${t}" could not be loaded. Make sure you have data for locale "${t}" (and/or generic language "${i}").`)})})}_cacheNamespaceLoaderPromise(e,t,n){this.__namespaceLoaderPromisesCache[e]||(this.__namespaceLoaderPromisesCache[e]={}),this.__namespaceLoaderPromisesCache[e][t]=n}_lookupNamespaceLoader(e){for(let[t,n]of this.__namespacePatternsMap){let r=typeof t==`string`&&t===e,i=typeof t==`object`&&t.constructor.name===`RegExp`&&t.test(e);if(r||i)return n}return null}_getLangFromLocale(e){return e.substring(0,2)}_onLocaleChanged(e,t){this.dispatchEvent(new CustomEvent(`__localeChanging`)),e!==t&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(e,t),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent(`localeChanged`,{detail:{newLocale:e,oldLocale:t}}))})):this.dispatchEvent(new CustomEvent(`localeChanged`,{detail:{newLocale:e,oldLocale:t}})))}_loadAllMissing(e,t){let n=this.__storage[t]||{},r=this.__storage[e]||{};Object.keys(n).forEach(t=>{r[t]||this.loadNamespace(t,{locale:e})})}_getMessageForKeys(e,t){if(typeof e==`string`)return this._getMessageForKey(e,t);let n=Array.from(e).reverse(),r,i;for(;n.length;)if(r=n.pop(),i=this._getMessageForKey(r,t),i)return i}_getMessageForKey(e,t){if(!e||e.indexOf(`:`)===-1)throw Error(`Namespace is missing in the key "${e}". The format for keys is "namespace:name".`);let[n,r]=e.split(`:`),i=this.__storage[t],a=i?i[n]:{},o=r.split(`.`).reduce((e,t)=>typeof e==`object`?e[t]:e,a);return String(o||(this._showKeyAsFallback?e:``))}#r(e){if(!e.includes(`-`))throw Error(`
      Locale was set to ${e}.
      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.
      See https://github.com/ing-bank/lion/issues/187 for more information.
    `)}get _supportExternalTranslationTools(){return this.#e}set _supportExternalTranslationTools(e){this.#e=e}get _langAttrSetByTranslationTool(){return this.#t}set _langAttrSetByTranslationTool(e){this.#t=e}};function Er(){if(!we.has(`@lion/ui::localize::0.x`)){let e=new Tr({autoLoadOnLocaleChange:!0,fallbackLocale:`en-GB`});we.set(`@lion/ui::localize::0.x`,e)}return we.get(`@lion/ui::localize::0.x`)}function Dr(){return Ce(Er)}var Or=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Or(e,t);return!0},kr=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ar=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Nr(t)}};function jr(e){this._$AN===void 0?this._$AM=e:(kr(this),this._$AM=e,Ar(this))}function Mr(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Or(r[e],!1),kr(r[e]);else r!=null&&(Or(r,!1),kr(r));else Or(this,e)}var Nr=e=>{e.type==Oe.CHILD&&(e._$AP??=Mr,e._$AQ??=jr)},Pr=class extends Ae{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ar(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Or(this,e),kr(this))}setValue(e){if(fe(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Fr=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},Ir=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((e=>this.Z=e))}resume(){this.Z?.(),this.Y=this.Z=void 0}},Lr=e=>!ue(e)&&typeof e.then==`function`,Rr=1073741823,zr=ke(class extends Pr{constructor(){super(...arguments),this._$Cwt=Rr,this._$Cbt=[],this._$CK=new Fr(this),this._$CX=new Ir}render(...e){return e.find((e=>!Lr(e)))??c}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!Lr(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=Rr,r=0,Promise.resolve(o).then((async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}})))}return c}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Br=D(e=>class extends e{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=Dr(),this.__boundLocalizeOnLocaleChanged=(...e)=>{let t=Array.from(e)[0];this.__localizeOnLocaleChanged(t)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener(`__localeChanging`,this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener(`localeChanged`,this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener(`__localeChanging`,this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener(`localeChanged`,this.__boundLocalizeOnLocaleChanged)}msgLit(e,t,n){return this.__localizeMessageSync?this._localizeManager.msg(e,t,n):this.localizeNamespacesLoaded?zr(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(e,t,n)),r):``}__getUniqueNamespaces(){let e=[],t=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(t.add.bind(t)),t.forEach(t=>{e.push(t)}),e}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(e){this.onLocaleChanged(e.detail.newLocale,e.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(e,t){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}}),Vr=`3.0.0`,Hr=window.scopedElementsVersions||(window.scopedElementsVersions=[]);Hr.includes(Vr)||Hr.push(Vr);var Ur=D(e=>class extends e{static scopedElements;static get scopedElementsVersion(){return Vr}static __registry;get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}attachShadow(e){let{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,`__registry`)){this.registry=new CustomElementRegistry;for(let[e,n]of Object.entries(t??{}))this.registry.define(e,n)}return super.attachShadow({...e,customElements:this.registry,registry:this.registry})}}),Wr=D(e=>class extends Ur(e){createRenderRoot(){let{shadowRootOptions:e,elementStyles:t}=this.constructor,n=this.attachShadow(e);return this.renderOptions.creationScope=n,i(n,t),this.renderOptions.renderBefore??=n.firstChild,n}});function Gr(){return!!(globalThis.ShadowRoot?.prototype.createElement&&globalThis.ShadowRoot?.prototype.importNode)}var Kr=D(e=>class extends Wr(e){constructor(){super()}createScopedElement(e){return(Gr()?this.shadowRoot:document).createElement(e)}defineScopedElement(e,t){let n=this.registry.get(e),r=n&&n!==t;return!Gr()&&r&&console.error([`You are trying to re-register the "${e}" custom element with a different class via ScopedElementsMixin.`,`This is only possible with a CustomElementRegistry.`,`Your browser does not support this feature so you will need to load a polyfill for it.`,`Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.`,`e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.`,`For more details you can visit https://open-wc.org/docs/development/scoped-elements/`].join(`
`)),n?this.registry.get(e):this.registry.define(e,t)}attachShadow(e){let{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,`__registry`)){this.registry=Gr()?new CustomElementRegistry:customElements;for(let[e,n]of Object.entries(t??{}))this.defineScopedElement(e,n)}return Element.prototype.attachShadow.call(this,{...e,customElements:this.registry,registry:this.registry})}createRenderRoot(){let{shadowRootOptions:e,elementStyles:t}=this.constructor,n=this.attachShadow(e);return Gr()&&(this.renderOptions.creationScope=n),n instanceof ShadowRoot&&(i(n,t),this.renderOptions.renderBefore=this.renderOptions.renderBefore||n.firstChild),n}}),qr=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function Jr(e,{reverse:t}={}){let n=(e,t)=>{let n=e.compareDocumentPosition(t);return qr.includes(n)?1:-1},r=e.filter(e=>e);return r.sort(n),t&&r.reverse(),r}var Yr=class{constructor(e){this.type=`unparseable`,this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}},Xr=D(e=>class extends e{constructor(){super(),this.name=``,this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||``}set name(e){let t=this.name;this.__name=e.toString(),this.requestUpdate(`name`,t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:`allow-cross-root-registration`}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent(`form-element-register`,{detail:{element:this},bubbles:!0,composed:!!this.allowCrossRootRegistration}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}}),Zr=D(e=>class extends Xr(kt(Nt(e))){static get properties(){return{readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:`label-sr-only`,reflect:!0},helpText:{type:String,attribute:`help-text`},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){return this.__label??(this._labelNode?.textContent||``)}set label(e){let t=this.label;this.__label=e,this.requestUpdate(`label`,t)}get helpText(){return this.__helpText??(this._helpTextNode?.textContent||``)}set helpText(e){let t=this.helpText;this.__helpText=e,this.requestUpdate(`helpText`,t)}get fieldName(){return this.__fieldName||this.label||this.name||``}set fieldName(e){this.__fieldName=e}get slots(){return{...super.slots,label:()=>{let e=document.createElement(`label`);return e.textContent=this.label,e},"help-text":()=>{let e=document.createElement(`div`);return e.textContent=this.helpText,e}}}get _inputNode(){return this.__getDirectSlotChild(`input`)}get _labelNode(){return this.__getDirectSlotChild(`label`)}get _helpTextNode(){return this.__getDirectSlotChild(`help-text`)}get _feedbackNode(){return this.__getDirectSlotChild(`feedback`)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=It(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole=`child`,this._isRepropagationEndpoint=!1,this.addEventListener(`model-value-changed`,this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener(`click`,this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener(`click`,this._onLabelClick)}updated(e){super.updated(e),e.has(`disabled`)&&this._inputNode?.setAttribute(`aria-disabled`,`${!!this.disabled}`),e.has(`_ariaLabelledNodes`)&&this.__reflectAriaAttr(`aria-labelledby`,this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),e.has(`_ariaDescribedNodes`)&&this.__reflectAriaAttr(`aria-describedby`,this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),e.has(`label`)&&this.__label!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),e.has(`helpText`)&&this.__helpText!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),e.has(`name`)&&this.dispatchEvent(new CustomEvent(`form-element-name-changed`,{detail:{oldName:e.get(`name`),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add(`form-control`)}_enhanceLightDomA11y(){let{_inputNode:e,_labelNode:t,_helpTextNode:n,_feedbackNode:r}=this;e&&(e.id=e.id||this._inputId),t&&(t.setAttribute(`for`,this._inputId),this.addToAriaLabelledBy(t,{idPrefix:`label`})),n&&this.addToAriaDescribedBy(n,{idPrefix:`help-text`}),r&&(this.addEventListener(`focusin`,()=>{r.setAttribute(`aria-live`,`polite`)}),this.addEventListener(`focusout`,()=>{r.setAttribute(`aria-live`,`assertive`)}),this.addToAriaDescribedBy(r,{idPrefix:`feedback`})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(e=[`prefix`,`suffix`,`before`,`after`]){e.forEach(e=>{let t=this.__getDirectSlotChild(e);t&&(t.hasAttribute(`data-label`)&&this.addToAriaLabelledBy(t,{idPrefix:e}),t.hasAttribute(`data-description`)&&this.addToAriaDescribedBy(t,{idPrefix:e}))})}__reflectAriaAttr(e,t,n){if(this._inputNode){if(n){let e=t.filter(e=>this.contains(e)),n=t.filter(e=>!this.contains(e)),r=[...Jr(e.map(e=>e.assignedSlot||e))],i=[];r.forEach(t=>{e.forEach(e=>{t.name===e.slot&&i.push(e)})}),t=[...i,...n]}let r=t.map(e=>e.id).join(` `);this._inputNode.setAttribute(e,r)}}render(){return p`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return p` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return p` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return p`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return p`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return p`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return p`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>e.slot===`prefix`)?p`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:r}_inputGroupInputTemplate(){return p`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>e.slot===`suffix`)?p`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:r}_inputGroupAfterTemplate(){return p`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return p`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(e=this.modelValue){let t=e;return this.modelValue instanceof Yr&&(t=this.modelValue.viewValue),typeof t==`object`&&t&&!(t instanceof Date)?!Object.keys(t).length:!t&&!(typeof t==`number`&&(t===0||Number.isNaN(t)))&&(typeof t!=`boolean`||t!==!1)}static get styles(){return[a`
          /**********************
            {block} .form-field
           ********************/

          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            pointer-events: none;
          }

          :host([disabled]) .form-field__label ::slotted(*),
          :host([disabled]) .form-field__help-text ::slotted(*) {
            color: var(--disabled-text-color, #767676);
          }

          :host([label-sr-only]) .form-field__label {
            position: absolute;
            top: 0;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip-path: inset(100%);
            clip: rect(1px, 1px, 1px, 1px);
            white-space: nowrap;
            border: 0;
            margin: 0;
            padding: 0;
          }

          /***********************
            {block} .input-group
           *********************/

          .input-group__container {
            display: flex;
          }

          .input-group__input {
            flex: 1;
            display: flex;
          }

          /***** {state} :disabled *****/
          :host([disabled]) .input-group ::slotted([slot='input']) {
            color: var(--disabled-text-color, #767676);
          }

          /***********************
            {block} .form-control
           **********************/

          .input-group__container > .input-group__input ::slotted(.form-control) {
            flex: 1 1 auto;
            margin: 0; /* remove input margin in Safari */
            font-size: 100%; /* normalize default input font-size */
          }
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(e,{idPrefix:t=``,reorder:n=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaLabelledNodes.includes(e)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,e],this.__reorderAriaLabelledNodes=!!n)}removeFromAriaLabelledBy(e){this._ariaLabelledNodes.includes(e)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(e),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(e,{idPrefix:t=``,reorder:n=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaDescribedNodes.includes(e)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,e],this.__reorderAriaDescribedNodes=!!n)}removeFromAriaDescribedBy(e){this._ariaDescribedNodes.includes(e)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(e),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(e){return Array.from(this.children).find(t=>t.slot===e)}_dispatchInitialModelValueChangedEvent(){this._repropagationRole!==`child`&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(e){}__repropagateChildrenValues(e){this._onBeforeRepropagateChildrenValues(e);let t=e.detail&&e.detail.element||e.target,n=this._isRepropagationEndpoint||this._repropagationRole===`choice-group`;if(t===this)return;e.stopImmediatePropagation();let r=this._repropagationRole!==`child`&&!this.__repropagateChildrenInitialized,i=e.detail&&e.detail.initialize;if(r||i||!this._repropagationCondition(t))return;let a=[];n||(a=e.detail&&e.detail.formPath||[t]);let o=[...a,this];this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:o,isTriggeredByUser:!!e.detail?.isTriggeredByUser}}))}_repropagationCondition(e){return!!e}_onLabelClick(){}}),Qr=class{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(e=>{this.__callComplete=e}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}};function $r(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ei=D(e=>class extends e{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(e){super.firstUpdated(e),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];static __syncUpdatableHasChanged(e,t,n){let r=this.elementProperties;return r.get(e)&&r.get(e).hasChanged?r.get(e).hasChanged(t,n):t!==n}__syncUpdatableInitialize(){let e=this.__SyncUpdatableNamespace,t=this.constructor;e.initialized=!0,e.queue&&Array.from(e.queue).forEach(e=>{t.__syncUpdatableHasChanged(e,this[e],void 0)&&this.updateSync(e,void 0)})}requestUpdate(e,t,n){if(super.requestUpdate(e,t,n),e===void 0)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};let r=this.__SyncUpdatableNamespace,i=this.constructor;r.initialized?i.__syncUpdatableHasChanged(e,this[e],t)&&this.updateSync(e,t):(r.queue=r.queue||new Set,r.queue.add(e))}updateSync(e,t){}}),ti=e=>{switch(e){case`bg-BG`:return O(()=>import(`./bg-BG-BSOJu8wp.js`),__vite__mapDeps([0,1]),import.meta.url);case`bg`:return O(()=>import(`./bg-tT2-9j0y.js`),__vite__mapDeps([2,1]),import.meta.url);case`cs-CZ`:return O(()=>import(`./cs-CZ-BXYisR25.js`),__vite__mapDeps([3,4]),import.meta.url);case`cs`:return O(()=>import(`./cs-BWWtw9FR.js`),__vite__mapDeps([5,4]),import.meta.url);case`de-DE`:return O(()=>import(`./de-DE-CqA9yOdY.js`),__vite__mapDeps([6,7]),import.meta.url);case`de`:return O(()=>import(`./de-D2KzmuNN.js`),__vite__mapDeps([8,7]),import.meta.url);case`en-AU`:return O(()=>import(`./en-AU-ClGzkm9N.js`),__vite__mapDeps([9,10]),import.meta.url);case`en-GB`:return O(()=>import(`./en-GB-ClGzkm9N.js`),__vite__mapDeps([11,10]),import.meta.url);case`en-US`:return O(()=>import(`./en-US-ClGzkm9N.js`),__vite__mapDeps([12,10]),import.meta.url);case`en-PH`:case`en`:return O(()=>import(`./en-Bn2liEJW.js`),__vite__mapDeps([13,10]),import.meta.url);case`es-ES`:return O(()=>import(`./es-ES-lc8truAL.js`),__vite__mapDeps([14,15]),import.meta.url);case`es`:return O(()=>import(`./es-BHRFfW-v.js`),__vite__mapDeps([16,15]),import.meta.url);case`fr-FR`:return O(()=>import(`./fr-FR-BFPCNFnr.js`),__vite__mapDeps([17,18]),import.meta.url);case`fr-BE`:return O(()=>import(`./fr-BE-BFPCNFnr.js`),__vite__mapDeps([19,18]),import.meta.url);case`fr`:return O(()=>import(`./fr-BatdFrY1.js`),__vite__mapDeps([20,18]),import.meta.url);case`hu-HU`:return O(()=>import(`./hu-HU-CgHBHfiG.js`),__vite__mapDeps([21,22]),import.meta.url);case`hu`:return O(()=>import(`./hu-BGJUkRn0.js`),__vite__mapDeps([23,22]),import.meta.url);case`it-IT`:return O(()=>import(`./it-IT-DXWt8Y3M.js`),__vite__mapDeps([24,25]),import.meta.url);case`it`:return O(()=>import(`./it-BbZB0zCO.js`),__vite__mapDeps([26,25]),import.meta.url);case`nl-BE`:return O(()=>import(`./nl-BE-CN9u7Cp2.js`),__vite__mapDeps([27,28]),import.meta.url);case`nl-NL`:return O(()=>import(`./nl-NL-CN9u7Cp2.js`),__vite__mapDeps([29,28]),import.meta.url);case`nl`:return O(()=>import(`./nl-CubSULoy.js`),__vite__mapDeps([30,28]),import.meta.url);case`pl-PL`:return O(()=>import(`./pl-PL-D0K_dWml.js`),__vite__mapDeps([31,32]),import.meta.url);case`pl`:return O(()=>import(`./pl-BhJlmndU.js`),__vite__mapDeps([33,32]),import.meta.url);case`ro-RO`:return O(()=>import(`./ro-RO-BXVNXH1J.js`),__vite__mapDeps([34,35]),import.meta.url);case`ro`:return O(()=>import(`./ro-75jeTe0N.js`),__vite__mapDeps([36,35]),import.meta.url);case`ru-RU`:return O(()=>import(`./ru-RU-BpGy32BK.js`),__vite__mapDeps([37,38]),import.meta.url);case`ru`:return O(()=>import(`./ru-DU7uFj2i.js`),__vite__mapDeps([39,38]),import.meta.url);case`sk-SK`:return O(()=>import(`./sk-SK-wewEOZGv.js`),__vite__mapDeps([40,41]),import.meta.url);case`sk`:return O(()=>import(`./sk-cN9_UHno.js`),__vite__mapDeps([42,41]),import.meta.url);case`tr-TR`:return O(()=>import(`./tr-TR-D1nJ_iYG.js`),__vite__mapDeps([43,44]),import.meta.url);case`tr`:return O(()=>import(`./tr-DuiqIpvR.js`),__vite__mapDeps([45,44]),import.meta.url);case`uk-UA`:return O(()=>import(`./uk-UA-DHqiIGvL.js`),__vite__mapDeps([46,47]),import.meta.url);case`uk`:return O(()=>import(`./uk-Cm-Wcqws.js`),__vite__mapDeps([48,47]),import.meta.url);case`zh-CN`:case`zh`:return O(()=>import(`./zh-DMe6SF13.js`),[],import.meta.url);default:return O(()=>import(`./en-Bn2liEJW.js`),__vite__mapDeps([13,10]),import.meta.url)}},ni=e=>`${e[0].toUpperCase()}${e.slice(1)}`,ri=class extends Br(u){static get properties(){return{feedbackData:{attribute:!1}}}static localizeNamespaces=[{"lion-form-core":ti},...super.localizeNamespaces];static get styles(){return[a`
        .validation-feedback__type {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:e}){return e}updated(e){super.updated(e),this.feedbackData&&this.feedbackData[0]?(this.setAttribute(`type`,this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):this.currentType!==`success`&&this.removeAttribute(`type`)}render(){return p`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:n})=>p`
          <span class="validation-feedback__type">
            ${e&&t?this._localizeManager.msg(`lion-form-core:validation${ni(t)}`):r}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:n})}
        `)}
    `}},ii=class extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=t?.type||`error`}static _$isValidator$=!0;static validatorName=``;static async=!1;execute(e,t,n){if(!this.constructor.validatorName)throw Error(`A validator needs to have a name! Please set it via "static get validatorName() { return 'IsCat'; }"`);return!0}set param(e){this.__param=e,this.dispatchEvent(new Event(`param-changed`))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event(`config-changed`))}get config(){return this.__config}async _getMessage(e){let t=this.constructor,n={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if(typeof this.config.getMessage==`function`)return this.config.getMessage(n);throw Error(`You must provide a value for getMessage of type 'function', you provided a value of type: ${typeof this.config.getMessage}`)}return t.getMessage(n)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}};function ai(e=[],t=[]){return e.filter(e=>!t.includes(e)).concat(t.filter(t=>!e.includes(t)))}function oi(e){return e instanceof Yr?e.viewValue:e}var si=D(e=>class extends Zr(ei(kt(Nt(Kr(e))))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":ri}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:`shows-feedback-for`,reflect:!0,converter:{fromAttribute:e=>e.split(`,`),toAttribute:e=>e.join(`,`)}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:`is-pending`,reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return[`error`]}get operationMode(){return`enter`}get slots(){return{...super.slots,feedback:()=>{let e=this.createScopedElement(`lion-validation-feedback`);return e.setAttribute(`data-tag-name`,`lion-validation-feedback`),e}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}constructor(){super(),this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}connectedCallback(){super.connectedCallback(),Dr().addEventListener(`localeChanged`,this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),Dr().removeEventListener(`localeChanged`,this._updateFeedbackComponent)}firstUpdated(e){super.firstUpdated(e),this.__isValidateInitialized=!0,this.validate(),this._repropagationRole!==`child`&&this.addEventListener(`model-value-changed`,()=>{this.__childModelValueChanged=!0})}updateSync(e,t){if(super.updateSync(e,t),e===`validators`?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):e===`modelValue`&&this.validate({clearCurrentResult:!0}),[`touched`,`dirty`,`prefilled`,`focused`,`submitted`,`hasFeedbackFor`,`filled`].includes(e)&&this._updateShouldShowFeedbackFor(),e===`showsFeedbackFor`){this._inputNode&&this._inputNode.setAttribute(`aria-invalid`,`${this._hasFeedbackVisibleFor(`error`)}`);let e=ai(this.showsFeedbackFor,t);e.length>0&&this.dispatchEvent(new Event(`showsFeedbackForChanged`,{bubbles:!0})),e.forEach(e=>{this.dispatchEvent(new Event(`showsFeedbackFor${$r(e)}Changed`,{bubbles:!0}))})}e===`shouldShowFeedbackFor`&&ai(this.shouldShowFeedbackFor,t).length>0&&this.dispatchEvent(new Event(`shouldShowFeedbackForChanged`,{bubbles:!0}))}async validate({clearCurrentResult:e=!1}={}){if(this.validateComplete=new Promise(e=>{this.__validateCompleteResolve=e}),this.disabled||this.readOnly){this.__clearValidationResults(),this.__finishValidationPass(),this._updateFeedbackComponent();return}this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,e&&this.__clearValidationResults(),await this.__executeValidators())}#e(e){let t=e;for(;t;){if(t.constructor.validatorName===`Required`)return!0;t=Object.getPrototypeOf(t)}return!1}async __executeValidators(){let e=oi(this.modelValue),t=this.__isEmpty(e);if(this.__syncValidationResult=[],t){let e=!this._isFormOrFieldset,t=this._allValidators.find(e=>e.constructor?.validatorName===`Required`);if(t&&(this.__syncValidationResult=[{validator:t,outcome:!0}]),e){this.__finishValidationPass({syncValidationResult:this.__syncValidationResult});return}}let n=[],r=[],i=[];for(let e of this._allValidators)e?.executeOnResults?n.push(e):this.#e(e)||(e.constructor.async?i.push(e):r.push(e));let a=!!i.length;this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(r,e)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:n}),a?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(i,e),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:n}),this.__validateCompleteResolve?.(!0)):this.__validateCompleteResolve?.(!0)}__executeSyncValidators(e,t){return e.map(e=>({validator:e,outcome:e.execute(t,e.param,{node:this})})).filter(e=>!!e.outcome)}async __executeAsyncValidators(e,t){let n=e.map(e=>e.execute(t,e.param,{node:this})),r=await Promise.all(n);return r.map((t,n)=>({validator:e[n],outcome:r[n]})).filter(e=>!!e.outcome)}__executeMetaValidators(e,t){return t.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):t.map(t=>({validator:t,outcome:t.executeOnResults({regularValidationResult:e.map(e=>e.validator),prevValidationResult:this.__prevValidationResult.map(e=>e.validator),prevShownValidationResult:this.__prevShownValidationResult.map(e=>e.validator)})})).filter(e=>!!e.outcome):[]}__finishValidationPass({syncValidationResult:e=[],asyncValidationResult:t=[],metaValidators:n=[]}={}){let r=[...e,...t],i=this.__executeMetaValidators(r,n);this.__validationResult=[...i,...r];let a=this.constructor.validationTypes.reduce((e,t)=>({...e,[t]:{}}),{});for(let{validator:e,outcome:t}of this.__validationResult){a[e.type]||(a[e.type]={});let n=e.constructor;a[e.type][n.validatorName]=t}this.validationStates=a,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:e})=>e.type))],this.dispatchEvent(new Event(`validate-performed`,{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(e){(e.type===`param-changed`||e.type===`config-changed`)&&this.validate()}__setupValidators(){let e=[`param-changed`,`config-changed`];for(let t of this.__prevValidators||[]){for(let n of e)t.removeEventListener?.(n,this._onValidatorUpdated);t.onFormControlDisconnect(this)}for(let t of this._allValidators){if(t.constructor._$isValidator$===void 0){let e=`Validators array only accepts class instances of Validator. Type "${Array.isArray(t)?`array`:typeof t}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(e,this),Error(e)}let n=this.constructor,r=t.constructor;if(n.validationTypes.indexOf(t.type)===-1){let e=`This component does not support the validator type "${t.type}" used in "${r.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(e,this),Error(e)}for(let n of e)t.addEventListener?.(n,e=>{this._onValidatorUpdated(e,{validator:t})});t.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(e){return typeof this._isEmpty==`function`?this._isEmpty(e):this.modelValue===null||this.modelValue===void 0||this.modelValue===``}async __getFeedbackMessages(e){let t=await this.fieldName;return Promise.all(e.map(async({validator:e,outcome:n})=>(e.config.fieldName&&(t=await e.config.fieldName),{message:await e._getMessage({modelValue:this.modelValue,formControl:this,fieldName:t,outcome:n}),type:e.type,validator:e,visibilityDuration:e.config?.visibilityDuration||3e3})))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);let{_feedbackNode:e}=this;e&&(this.__feedbackQueue||=new Qr,this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{let t=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(e=>e.validator)});this.__prioritizedResult=t.map(e=>this.__validationResult.find(t=>e===t.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);let n=await this.__getFeedbackMessages(this.__prioritizedResult);e.feedbackData=n||[],n?.[0]&&n[0].type===`success`&&n[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{e.removeAttribute(`type`),e.feedbackData=[]},n[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{e.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(e,t){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(e,t=this._feedbackConditionMeta,n=this._showFeedbackConditionFor.bind(this)){return n(e,t)}_hasFeedbackVisibleFor(e){return this.hasFeedbackFor?.includes(e)&&this.shouldShowFeedbackFor?.includes(e)}updated(e){if(super.updated(e),e.has(`shouldShowFeedbackFor`)||e.has(`hasFeedbackFor`)){let e=this.constructor;this.showsFeedbackFor=e.validationTypes.map(e=>this._hasFeedbackVisibleFor(e)?e:void 0).filter(Boolean),this._updateFeedbackComponent()}if(e.has(`__childModelValueChanged`)&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),e.has(`validationStates`)){let t=e.get(`validationStates`);t&&Object.entries(this.validationStates).forEach(([e,n])=>{t[e]&&JSON.stringify(n)!==JSON.stringify(t[e])&&this.dispatchEvent(new CustomEvent(`${e}StateChanged`,{detail:n}))})}}_updateShouldShowFeedbackFor(){let e=this.constructor.validationTypes.map(e=>this.feedbackCondition(e,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?e:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(e)&&(this.shouldShowFeedbackFor=e)}_prioritizeAndFilterFeedback({validationResult:e}){let t=this.constructor.validationTypes;return e.filter(e=>this.feedbackCondition(e.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((e,n)=>t.indexOf(e.type)-t.indexOf(n.type)).slice(0,this._visibleMessagesAmount)}}),ci=D(e=>class extends si(Zr(e)){static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}#e={didFormatterOutputSyncToView:!1,didFormatterRun:!1};requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`modelValue`&&this.modelValue!==t&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:t}),e===`serializedValue`&&this.serializedValue!==t&&this._calculateValues({source:`serialized`}),e===`formattedValue`&&this.formattedValue!==t&&this._calculateValues({source:`formatted`})}get value(){return this._inputNode?.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}preprocessor(e,t){}parser(e,t){return e}formatter(e,t){return e}serializer(e){return e===void 0?``:e}deserializer(e){return e===void 0?``:e}_calculateValues({source:e}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,e!==`model`&&(e===`serialized`?this.modelValue=this.deserializer(this.serializedValue):e===`formatted`&&(this.modelValue=this._callParser())),e!==`formatted`&&(this.formattedValue=this._callFormatter()),e!==`serialized`&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(e=this.formattedValue){if(e===``)return``;if(typeof e!=`string`)return;let t=this.parser(e,{...this.formatOptions,mode:this.#t(),viewValueStates:this.#n()});return t===void 0?new Yr(e):t}_callFormatter(){return this.#e.didFormatterRun=!1,this._isHandlingUserInput&&this.hasFeedbackFor?.includes(`error`)&&this._inputNode?this.value:this.modelValue instanceof Yr?this.modelValue.viewValue:(this.#e.didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:this.#t(),viewValueStates:this.#n()}))}_onModelValueChanged(...e){this._calculateValues({source:`model`}),this._dispatchModelValueChangedEvent(...e)}_dispatchModelValueChangedEvent(...e){this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!!this._isHandlingUserInput}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();let e=this.formattedValue;this.modelValue=this._callParser(this.value),e===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){let e=this.value.length;this._inputNode&&`selectionStart`in this._inputNode&&this._inputNode?.type!==`range`&&(e=this._inputNode.selectionStart);let t=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:e,prevViewValue:this.__prevViewValue});if(t!==void 0){if(typeof t==`string`)this.value=t;else if(typeof t==`object`){let{viewValue:e,caretIndex:n}=t;this.value=e,n&&this._inputNode&&`selectionStart`in this._inputNode&&(this._inputNode.selectionStart=n,this._inputNode.selectionEnd=n)}}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=this.formattedValue===void 0?``:this.formattedValue,this.#e.didFormatterOutputSyncToView=!!this.formattedValue&&this.#e.didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event(`user-input-changed`,{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:e}){e===`compositionstart`?this.__isHandlingComposition=!0:e===`compositionend`&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}constructor(){super(),this.formatOn=`change`,this.formatOptions={mode:`auto`},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue=``,this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener(`user-input-changed`,this._onUserInputChanged),this.addEventListener(`paste`,this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),this.modelValue===void 0&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener(`input`,this._proxyInputEvent),this._inputNode.addEventListener(`compositionstart`,this.__onCompositionEvent),this._inputNode.addEventListener(`compositionend`,this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener(`input`,this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener(`compositionstart`,this.__onCompositionEvent),this._inputNode.removeEventListener(`compositionend`,this.__onCompositionEvent))}#t(){return this._isPasting?`pasted`:this._isHandlingUserInput&&this.__prevViewValue?`user-edited`:`auto`}#n(){let e=[];return this.#e.didFormatterOutputSyncToView&&e.push(`formatted`),e}}),li=D(e=>class extends Zr(e){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`touched`&&this.touched!==t&&this._onTouchedChanged(),e===`modelValue`&&(this.filled=!this._isEmpty()),e===`dirty`&&this.dirty!==t&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent=`blur`,this._valueChangedEvent=`model-value-changed`,this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event(`touched-changed`,{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event(`dirty-changed`,{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(e,t){return t.touched&&t.dirty||t.prefilled||t.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}}),ui=class extends Zr(li(or(ci(si(Nt(u)))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener(`change`,this._onChange),this.classList.add(`form-field`)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode?.removeEventListener(`change`,this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=``}_onChange(e){this.dispatchEvent(new Event(`user-input-changed`,{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}},di=class extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}},fi=D(e=>class extends Xr(e){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new di,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener(`form-element-register`,this._onRequestToAddFormElement),this.addEventListener(`form-element-name-changed`,this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),Error(`Registration could not finish. Please use await el.registrationComplete;`)})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),this.registrationComplete.done===!1&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){let{name:n}=e;if(n===this.name)throw console.info(`Error Node:`,e),TypeError(`You can not have the same name "${n}" as your parent`);if(n.substr(-2)===`[]`)Array.isArray(this.formElements[n])||(this.formElements[n]=new di),t>0?this.formElements[n].splice(t,0,e):this.formElements[n].push(e);else if(!this.formElements[n])this.formElements[n]=e;else throw console.info(`Error Node:`,e),TypeError(`Name "${n}" is already registered - if you want an array add [] to the end`)}}removeFormElement(e){let t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){let{name:t}=e;if(t.substr(-2)===`[]`&&this.formElements[t]){let n=this.formElements[t].indexOf(e);n>-1&&this.formElements[t].splice(n,1)}else this.formElements[t]&&delete this.formElements[t]}}_onRequestToAddFormElement(e){let t=e.detail.element;if(t===this||this.isRegisteredFormElement(t))return;e.stopPropagation();let n=-1;if(this.formElements&&Array.isArray(this.formElements)){for(let[e,r]of this.formElements.entries())if(!(r.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){n=e;break}}this.addFormElement(t,n)}_onRequestToChangeFormElementName(e){let t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){let t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}}),pi=D(e=>class extends e{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener(`form-element-register`,this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw Error(`A FormRegistrarPortal element requires a .registrationTarget`);this.registrationTarget.dispatchEvent(new CustomEvent(`form-element-register`,{detail:{element:e.detail.element},bubbles:!0}))}}),mi=D(e=>class extends ci(or(Zr(e))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){let e=this._inputNode;return e&&e.selectionStart?e.selectionStart:0}set selectionStart(e){let t=this._inputNode;t&&t.selectionStart&&(t.selectionStart=e)}get selectionEnd(){let e=this._inputNode;return e&&e.selectionEnd?e.selectionEnd:0}set selectionEnd(e){let t=this._inputNode;t&&t.selectionEnd&&(t.selectionEnd=e)}get value(){return this._inputNode&&this._inputNode.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value!==e&&this._setValueAndPreserveCaret(e),this.__value=void 0):this.__value=e}_setValueAndPreserveCaret(e){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){let t=this._inputNode.selectionStart;this._inputNode.value=e,this._inputNode.selectionStart=t,this._inputNode.selectionEnd=t}}catch{this._inputNode.value=e}else this._inputNode.value=e}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch{}}get _focusableNode(){return this._inputNode}}),hi=D(e=>class extends fi(si(li(e))){static get properties(){return{multipleChoice:{type:Boolean,attribute:`multiple-choice`}}}get modelValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.choiceValue):e[0]?e[0].choiceValue:``}set modelValue(e){let t=(t,n)=>typeof t.choiceValue==`object`?JSON.stringify(t.choiceValue)===JSON.stringify(e):t.choiceValue===n;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(e,t),this.requestUpdate(`modelValue`,this._oldModelValue)}):(this._setCheckedElements(e,t),this.requestUpdate(`modelValue`,this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.serializedValue.value):e[0]?e[0].serializedValue.value:``}set serializedValue(e){let t=(e,t)=>e.serializedValue.value===t;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(e,t),this.requestUpdate(`serializedValue`)}):(this._setCheckedElements(e,t),this.requestUpdate(`serializedValue`))}get formattedValue(){let e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.formattedValue):e[0]?e[0].formattedValue:``}set formattedValue(e){let t=(e,t)=>e.formattedValue===t;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(e,t)}):this._setCheckedElements(e,t)}get operationMode(){return this._repropagationRole===`choice-group`?`select`:`enter`}constructor(){super(),this.multipleChoice=!1,this._repropagationRole=`choice-group`,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(e){super.updated(e),e.has(`name`)&&this.name!==e.get(`name`)&&this.formElements.forEach(e=>{e.name=this.name})}addFormElement(e,t){this._throwWhenInvalidChildModelValue(e),e.name=this.name,super.addFormElement(e,t)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=``}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(e,t){return!0}_getFromAllFormElements(e,t){let n=t||this._getFromAllFormElementsFilter;if(e===`modelValue`||e===`serializedValue`||e===`formattedValue`)return this[e];let r=this.formElements.filter(t=>n(t,e));return e===`_initialModelValue`?this.multipleChoice?r.filter(t=>t[e].checked).map(t=>t[e].value):r.find(t=>t[e].checked)?.value:r.map(t=>t[e])}_throwWhenInvalidChildModelValue(e){if(typeof e.modelValue.checked!=`boolean`||!Object.prototype.hasOwnProperty.call(e.modelValue,`value`))throw Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?this.modelValue.length===0:typeof this.modelValue==`string`&&this.modelValue===``||this.modelValue===void 0||this.modelValue===null}_checkSingleChoiceElements(e){let{target:t}=e;if(t.checked===!1)return;let n=t.name;this.formElements.filter(e=>e.name===n).forEach(e=>{e!==t&&(e.checked=!1)})}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}_setCheckedElements(e,t){if(e==null){this.formElements.forEach(e=>e.checked=!1);return}for(let n=0;n<this.formElements.length;n+=1)if(this.multipleChoice){let t=e.includes(this.formElements[n].modelValue.value);typeof this.formElements[n].modelValue.value==`object`&&(t=e.map(e=>JSON.stringify(e)).includes(JSON.stringify(this.formElements[n].modelValue.value))),this.formElements[n].checked=t}else t(this.formElements[n],e)?this.formElements[n].checked=!0:this.formElements[n].checked=!1}__setChoiceGroupTouched(){let e=this.modelValue;e!=null&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}_onBeforeRepropagateChildrenValues(e){let t=e.detail&&e.detail.element||e.target;this.multipleChoice||!t.checked||(this.formElements.forEach(e=>{t.choiceValue!==e.choiceValue&&(e.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate(`modelValue`,this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(e){return!(this._repropagationRole===`choice-group`&&!this.multipleChoice&&!e.checked)}}),gi=(e,t={})=>e.value!==t.value||e.checked!==t.checked,_i=D(e=>class extends ci(e){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:gi},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(e){this.requestUpdate(`choiceValue`,this.choiceValue),this.modelValue.value!==e&&(this.modelValue={value:e,checked:this.modelValue.checked})}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`modelValue`?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):e===`checked`&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(e){super.firstUpdated(e),e.has(`checked`)&&this.__syncCheckedToInputElement()}updated(e){super.updated(e),e.has(`modelValue`)&&this.__syncCheckedToInputElement(),e.has(`name`)&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:``,checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],a`
          :host {
            display: flex;
            flex-wrap: wrap;
          }

          :host([hidden]) {
            display: none;
          }

          .choice-field__graphic-container {
            display: none;
          }
          .choice-field__help-text {
            display: block;
            flex-basis: 100%;
          }
        `]}render(){return p`
        <slot name="input"></slot>
        <div class="choice-field__graphic-container" aria-hidden="true">
          ${this._choiceGraphicTemplate()}
        </div>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>
        ${this._afterTemplate()}
      `}_choiceGraphicTemplate(){return r}_afterTemplate(){return r}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener(`click`,this._preventDuplicateLabelClick),this.addEventListener(`user-input-changed`,this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener(`click`,this._preventDuplicateLabelClick),this.removeEventListener(`user-input-changed`,this._toggleChecked)}_preventDuplicateLabelClick(e){let t=e=>{e.stopImmediatePropagation(),this._inputNode.removeEventListener(`click`,t)};this._inputNode.addEventListener(`click`,t)}_toggleChecked(e){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=this._parentFormGroup?.name||``)}__syncModelCheckedToChecked(e){this.checked=e}__syncCheckedToModel(e){this.modelValue={value:this.choiceValue,checked:e}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:e},t){let n;t&&t.modelValue&&(n=t.modelValue),this.constructor.elementProperties.get(`modelValue`).hasChanged(e,n)&&super._onModelValueChanged({modelValue:e})}parser(){return this.modelValue}formatter(e){return e&&e.value!==void 0?e.value:e}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}}),vi=class extends ii{static get validatorName(){return`FormElementsHaveNoError`}execute(e,t,n){return n?.node._anyFormElementHasFeedbackFor(`error`)}static async getMessage(){return``}},yi=D(e=>class extends fi(Zr(si(kt(Nt(e))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements(`modelValue`)}set modelValue(e){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements(`modelValue`,e)})):this._setValueMapForAllFormElements(`modelValue`,e)}get serializedValue(){return this._getFromAllFormElements(`serializedValue`)}set serializedValue(e){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements(`serializedValue`,e)})):this._setValueMapForAllFormElements(`serializedValue`,e)}get formattedValue(){return this._getFromAllFormElements(`formattedValue`)}set formattedValue(e){this._setValueMapForAllFormElements(`formattedValue`,e)}get prefilled(){return this._everyFormElementHas(`prefilled`)}constructor(){super(),this.value=``,this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener(`focusin`,this._syncFocused),this.addEventListener(`focusout`,this._onFocusOut),this.addEventListener(`dirty-changed`,this._syncDirty),this.addEventListener(`validate-performed`,this.__onChildValidatePerformed),this.defaultValidators=[new vi],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&=(document.removeEventListener(`click`,this._checkForOutsideClick),!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(e=>{typeof e.initInteractionState==`function`&&e.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),e.has(`focused`)&&this.focused===!0&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||=(document.addEventListener(`click`,this._checkForOutsideClick),!0)}_checkForOutsideClick(e){this.contains(e.target)||(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}_inputGroupTemplate(){return p`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(e=>{typeof e.submitGroup==`function`?e.submitGroup():e.submitted=!0})}resetGroup(){this.formElements.forEach(e=>{typeof e.resetGroup==`function`?e.resetGroup():typeof e.reset==`function`&&e.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(e=>{typeof e.clearGroup==`function`?e.clearGroup():typeof e.clear==`function`&&e.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(e=>{typeof e.resetInteractionState==`function`&&e.resetInteractionState()})}_getFromAllFormElementsFilter(e,t){return!e.disabled}_getFromAllFormElements(e,t){let n={},r=t||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(t=>{let i=this.formElements[t];i instanceof di?n[t]=i.filter(t=>r(t,e)).map(t=>t[e]):r(i,e)&&(typeof i._getFromAllFormElements==`function`?n[t]=i._getFromAllFormElements(e):n[t]=i[e])}),n}_setValueForAllFormElements(e,t){this.formElements.forEach(n=>{n[e]=t})}_setValueMapForAllFormElements(e,t){t&&typeof t==`object`&&Object.keys(t).forEach(n=>{Array.isArray(this.formElements[n])&&this.formElements[n].forEach((r,i)=>{r[e]=t[n][i]}),this.formElements[n]?this.formElements[n][e]=t[n]:this.__pendingValues[e][n]=t[n]})}_anyFormElementHas(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!t[e]):!!this.formElements[t][e])}_anyFormElementHasFeedbackFor(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!(t.hasFeedbackFor&&t.hasFeedbackFor.includes(e))):!!(this.formElements[t].hasFeedbackFor&&this.formElements[t].hasFeedbackFor.includes(e)))}_everyFormElementHas(e){return Object.keys(this.formElements).every(t=>Array.isArray(this.formElements[t])?this.formElements[t].every(t=>!!t[e]):!!this.formElements[t][e])}__onChildValidatePerformed(e){e&&this.isRegisteredFormElement(e.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas(`focused`)}_onFocusOut(e){let t=this.formElements[this.formElements.length-1];e.target===t&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas(`dirty`)}__storeAllDescriptionElementsInParentChain(){let e=this;for(;e;)Jr(e._getAriaDescriptionElements(),{reverse:!0}).forEach(e=>{e.getAttribute(`slot`)===`feedback`&&this.__descriptionElementsInParentChain.add(e)}),e=e._parentFormGroup}__linkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{typeof e.addToAriaDescribedBy==`function`&&e.addToAriaDescribedBy(t,{reorder:!1})})}__unlinkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{typeof e.removeFromAriaDescribedBy==`function`&&e.removeFromAriaDescribedBy(t)})}addFormElement(e,t){if(super.addFormElement(e,t),this.disabled&&e.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(e),this.validate({clearCurrentResult:!0}),!e.modelValue){let t=this.__pendingValues;t.modelValue&&t.modelValue[e.name]?e.modelValue=t.modelValue[e.name]:t.serializedValue&&t.serializedValue[e.name]&&(e.serializedValue=t.serializedValue[e.name])}}get _initialModelValue(){return this._getFromAllFormElements(`_initialModelValue`)}removeFormElement(e){super.removeFormElement(e),this.validate({clearCurrentResult:!0}),typeof e.removeFromAriaLabelledBy==`function`&&this._labelNode&&e.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(e)}_isEmpty(){return this.formElements.every(e=>e._isEmpty?.())}}),bi=class extends mi(ui){static get properties(){return{readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return t&&e.setAttribute(`value`,t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type=`text`,this.placeholder=``}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`readOnly`&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has(`type`)&&(this._inputNode.type=this.type),e.has(`placeholder`)&&(this._inputNode.placeholder=this.placeholder),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}},xi=a`
  ::slotted(.form-control) {
    ${Bn}
  }

  [slot='help-text'] {
    font-size: var(--c-text-base);
    color: var(--c-text-quiet);
  }

  :host([hidden-input]) .input-group__container {
    display: none;
  }

  /* A maxlength shrinks the control to the expected character width instead
     of spanning the column. The width attribute decouples the behaviors:
     width="full" spans despite a maxlength; width="auto" shrinks without
     one. */
  :host([maxlength]:not([width='full'])),
  :host([width='auto']) {
    width: fit-content;
    max-width: 100%;
  }

  :host([maxlength]:not([width='full'])) ::slotted([slot='input']),
  :host([width='auto']) ::slotted([slot='input']) {
    width: auto;
    min-width: 0;
    max-width: 100%;
  }

  /* Stop the input chrome from flexing back out to the available space. */
  :host([maxlength]:not([width='full'])) .input-group__container,
  :host([width='auto']) .input-group__container {
    flex: 0 1 auto;
    min-width: 0;
    max-width: 100%;
  }

  :host([maxlength]:not([width='full'])) .input-group__input,
  :host([width='auto']) .input-group__input {
    min-width: 0;
  }
`,F=class extends nr(bi){constructor(...e){super(...e),this.size=`medium`,this.inputMode=``,this.ariaInvalid=null,this.autoCorrect=!0,this.autoCapitalize=!0,this.small=!1,this.center=!1,this.monospace=!1,this.inlineSuffix=!1,this.hiddenInput=!1}static get styles(){return[...super.styles,Wn,xi]}connectedCallback(){super.connectedCallback(),this.syncNativeAttributes(),this.syncAriaInvalid()}updated(e){super.updated(e),(e.has(`inputSize`)||e.has(`maxlength`)||e.has(`width`)||e.has(`min`)||e.has(`max`)||e.has(`step`)||e.has(`inputMode`)||e.has(`autoCorrect`)||e.has(`autoCapitalize`))&&this.syncNativeAttributes(),this.syncAriaInvalid()}syncAriaInvalid(){this._inputNode?.setAttribute(`aria-invalid`,this.ariaInvalid??String(this._hasFeedbackVisibleFor(`error`)))}get maxlengthSize(){return this.maxlength&&this.maxlength>0&&this.width!==`full`?this.maxlength:void 0}syncNativeAttributes(){let e={size:this.inputSize??this.maxlengthSize,maxlength:this.maxlength&&this.maxlength>0?this.maxlength:void 0,min:this.min,max:this.max,step:this.step,inputmode:this.inputMode,autocorrect:this.autoCorrect?void 0:`off`,autocapitalize:this.autoCapitalize?void 0:`none`};for(let[t,n]of Object.entries(e)){if(n===void 0){this._inputNode?.removeAttribute(t);continue}this._inputNode?.setAttribute(t,String(n))}}};n([s({type:Number,reflect:!0})],F.prototype,`maxlength`,void 0),n([s({type:String,reflect:!0})],F.prototype,`size`,void 0),n([s({type:Number,attribute:!1})],F.prototype,`inputSize`,void 0),n([s({attribute:!1})],F.prototype,`min`,void 0),n([s({attribute:!1})],F.prototype,`max`,void 0),n([s({attribute:!1})],F.prototype,`step`,void 0),n([s({attribute:!1})],F.prototype,`inputMode`,void 0),n([s({attribute:`aria-invalid`,reflect:!0})],F.prototype,`ariaInvalid`,void 0),n([s({attribute:!1})],F.prototype,`autoCorrect`,void 0),n([s({attribute:!1})],F.prototype,`autoCapitalize`,void 0),n([s({reflect:!0,type:Boolean})],F.prototype,`small`,void 0),n([s({type:String,reflect:!0})],F.prototype,`width`,void 0),n([s({reflect:!0,type:Boolean})],F.prototype,`center`,void 0),n([s({reflect:!0,type:Boolean})],F.prototype,`monospace`,void 0),n([s({reflect:!0,type:Boolean,attribute:`inline-suffix`})],F.prototype,`inlineSuffix`,void 0),n([s({reflect:!0,type:Boolean,attribute:`hidden-input`})],F.prototype,`hiddenInput`,void 0),customElements.get(`craft-input`)||customElements.define(`craft-input`,F);var Si=a`
  @supports (text-box: trim-both cap alphabetic) {
    text-box: trim-both cap alphabetic;
    padding-block: calc((1lh - 1cap) / 2);
  }
`,Ci=e=>e.key===` `||e.key===`Enter`,wi=e=>e.key===` `,Ti=class extends At(u){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return p` <div class="button-content"><slot></slot></div> `}static get styles(){return[a`
        :host {
          position: relative;
          display: inline-flex;
          box-sizing: border-box;
          vertical-align: middle;
          line-height: 24px;
          background-color: #eee; /* minimal styling to make it recognizable as btn */
          padding: 8px; /* padding to fix with min-height */
          outline: none; /* focus style handled below */
          cursor: default; /* we should always see the default arrow, never a caret */
          /* TODO: remove, native button also allows selection. Could be usability concern... */
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        :host::before {
          content: '';

          /* center vertically and horizontally */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          /* Minimum click area to meet [WCAG Success Criterion 2.5.5 Target Size (Enhanced)](https://www.w3.org/TR/WCAG22/#target-size-enhanced) */
          min-height: 44px;
          min-width: 44px;
          width: 100%;
          height: 100%;
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Show focus styles on keyboard focus. */
        :host(:focus:not([disabled])),
        :host(:focus-visible) {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        /* Hide focus styles if they're not needed, for example,
        when an element receives focus via the mouse. */
        :host(:focus:not(:focus-visible)) {
          outline: 0;
        }

        :host(:hover) {
          /* if you extend, please overwrite */
          background: #f4f6f7;
        }

        :host(:active), /* keep native :active to render quickly where possible */
        :host([active]) /* use custom [active] to fix IE11 */ {
          /* if you extend, please overwrite */
          background: gray;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          pointer-events: none;
          /* if you extend, please overwrite */
          background: lightgray;
          color: #adadad;
          fill: #adadad;
        }
      `]}constructor(){super(),this.type=`button`,this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`)}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.getAttribute(`aria-disabled`)!==null&&this.removeAttribute(`aria-disabled`))}__setupEvents(){this.addEventListener(`mousedown`,this.__mousedownHandler),this.addEventListener(`keydown`,this.__keydownHandler),this.addEventListener(`keyup`,this.__keyupHandler)}__mousedownHandler(){this.active=!0;let e=()=>{this.active=!1,document.removeEventListener(`mouseup`,e),this.removeEventListener(`mouseup`,e)};document.addEventListener(`mouseup`,e),this.addEventListener(`mouseup`,e)}__keydownHandler(e){if(this.active||!Ci(e)){wi(e)&&e.preventDefault();return}wi(e)&&e.preventDefault(),this.active=!0;let t=e=>{Ci(e)&&(this.active=!1,document.removeEventListener(`keyup`,t,!0))};document.addEventListener(`keyup`,t,!0)}__keyupHandler(e){if(Ci(e)){if(e.target&&e.target!==this)return;this.click()}}},Ei=class extends Ti{constructor(){super(),this.type=`reset`,this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement(`button`),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener(`click`,this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener(`click`,this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,(this.type===`submit`||this.type===`reset`)&&e.target===this&&this._form&&(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener(`click`,this.__clickDelegationHandler,!0)}},Di=new WeakMap;function Oi(){let e=document.createElement(`button`);return e.tabIndex=-1,e.type=`submit`,e.setAttribute(`aria-hidden`,`true`),e.style.cssText=`
    position: absolute;
    top: 0;
    left: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    height: 1px;
    width: 1px;
    padding: 0; /* reset default agent styles */
    border: 0; /* reset default agent styles */
  `,e}var ki=class extends Ei{get _nativeButtonNode(){return Di.get(this._form)?.helper||null}constructor(){super(),this.type=`submit`,this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){if(super._setupSubmitAndResetHelperOnConnected(),!this._form||this.type!==`submit`)return;let e=this._form;if(!Di.get(this._form)){let t=Oi(),n=document.createElement(`div`);n.appendChild(t),Di.set(this._form,{lionButtons:new Set,helper:t,observer:new MutationObserver(()=>{e.appendChild(n)})}),e.appendChild(n),Di.get(e)?.observer.observe(n,{childList:!0})}Di.get(e)?.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){let e=Di.get(this._form);e&&(e.lionButtons.delete(this),e.lionButtons.size||(this._form.contains(e.helper)&&e.helper.remove(),Di.get(this._form)?.observer.disconnect(),Di.delete(this._form)))}}},Ai=a`
  :host {
    /* Necessary to use variables here to override the default active style specificity */
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud);
    --_active-border-color: var(--c-color-border-loud);
    --_button-radius: var(--c-button-radius, var(--c-form-control-radius));
    --_focus-outline-color: transparent;
    --_padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );
    --_height: var(--c-button-height, var(--c-size-control-md));
    --_border-width: var(--c-button-border-width, 1px);
    /* How far the content sits from the button's edge, which is what flush
       takes back. */
    --_flush-inline: calc(var(--_padding-inline) + var(--_border-width));
    --_flush-block: max(0px, calc((var(--_height) - 1lh) / 2));
    cursor: pointer;
    font: inherit;
    display: inline-flex;
    justify-content: center;
    gap: var(--c-spacing-sm);
    align-items: center;
    /* Per-corner radius so a parent (e.g. craft-button-group) can square off
       individual corners via inherited custom properties — including on a
       button nested inside a slotted craft-action-menu, which ::slotted()
       cannot reach. Each corner falls back to the single --_button-radius. */
    border-start-start-radius: var(
      --c-button-radius-start-start,
      var(--_button-radius)
    );
    border-start-end-radius: var(
      --c-button-radius-start-end,
      var(--_button-radius)
    );
    border-end-start-radius: var(
      --c-button-radius-end-start,
      var(--_button-radius)
    );
    border-end-end-radius: var(
      --c-button-radius-end-end,
      var(--_button-radius)
    );
    padding-inline: var(--_padding-inline);
    padding-block: 0;
    width: auto;
    min-height: var(--_height);
    min-width: var(--c-button-width, var(--c-size-control-md));
    white-space: nowrap;
    border-width: var(--_border-width);
    border-style: var(--c-button-border-style, solid);

    /* Colorable styles */
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
    border-color: var(
      --c-color-border-loud,
      var(--c-color-neutral-border-loud)
    );
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
  }

  /*
  Color palette per variant.
  The single 'variant' axis picks both a palette and an appearance. Here we map
  the generic --c-color-* props to a palette; 'primary' uses accent, 'danger'
  uses danger, everything else uses neutral, and 'inherit' sets nothing so it
  adopts the parent's theme.
  */
  /*
    Neutral variants use the neutral palette by default. With [inherit] we skip
    this override so the ambient --c-color-* (set by a colorable ancestor) flows
    through instead. primary/danger set their palettes unconditionally below, so
    they are unaffected by [inherit].
  */
  :host([variant~='solid']:not([inherit])),
  :host([variant~='fill']:not([inherit])),
  :host([variant~='outline']:not([inherit])),
  :host([variant~='dashed']:not([inherit])),
  :host([variant~='plain']:not([inherit])),
  :host([variant~='link']:not([inherit])),
  :host([variant~='none']:not([inherit])) {
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
  }

  :host([variant~='primary']) {
    --c-color-fill-loud: var(--c-color-accent-fill-loud);
    --c-color-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    --c-color-border-loud: var(--c-color-accent-border-loud);
    --c-color-border-normal: var(--c-color-accent-border-normal);
    --c-color-border-quiet: var(--c-color-accent-border-quiet);
    --c-color-on-loud: var(--c-color-accent-on-loud);
    --c-color-on-normal: var(--c-color-accent-on-normal);
    --c-color-on-quiet: var(--c-color-accent-on-quiet);
  }

  :host([variant~='danger-plain']),
  :host([variant~='danger']) {
    --c-color-fill-loud: var(--c-color-danger-fill-loud);
    --c-color-fill-normal: var(--c-color-danger-fill-normal);
    --c-color-fill-quiet: var(--c-color-danger-fill-quiet);
    --c-color-border-loud: var(--c-color-danger-border-loud);
    --c-color-border-normal: var(--c-color-danger-border-normal);
    --c-color-border-quiet: var(--c-color-danger-border-quiet);
    --c-color-on-loud: var(--c-color-danger-on-loud);
    --c-color-on-normal: var(--c-color-danger-on-normal);
    --c-color-on-quiet: var(--c-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host(:hover) {
      background-color: hsl(
        from var(--c-color-fill-loud, var(--c-button-default-fill)) h s
          calc(l - 5)
      );
      color: var(--c-color-on-loud);
    }
  }

  :host([disabled][focusable-when-disabled]) {
    pointer-events: auto;
    cursor: default;
  }

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    outline: var(--c-focus-outline-width) solid var(--_focus-outline-color);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host(:focus-visible) {
    --_focus-outline-color: var(--c-color-focus-outline);
  }

  :host([variant~='plain']),
  :host([variant~='danger-plain']) {
    --c-focus-outline-offset: calc(var(--c-focus-outline-width) * -1);
  }

  :host(:not(:disabled):not(.loading):active),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--_active-color);
    background-color: var(--_active-background-color);
    box-shadow: inset 0 1px 3px
      color-mix(in oklab, var(--c-color-mix-active), transparent);
  }

  /* Selected state (e.g. inside a radio button-group): show the loud fill. */
  :host(:not(:disabled):not(.loading)[active]),
  :host(.is-active:not(:disabled):not(.loading)) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  /*
  Sizes
   */
  :host([size~='zero']) {
    --_padding-inline: 0px;
    --_height: 0px;
    min-width: 0;
  }

  :host([size~='xsmall']) {
    --_padding-inline: var(--c-spacing-xs);
    --_height: var(--c-size-control-xs);
    min-width: var(--c-size-control-xs);
    font-size: 0.8em;
  }

  :host([size~='small']) {
    --_padding-inline: var(--c-spacing-sm);
    --_height: var(--c-size-control-sm);
    min-width: var(--c-size-control-sm);
    font-size: 0.9em;
  }

  :host([size~='large']) {
    --_padding-inline: var(--c-spacing-lg);
    --_height: var(--c-size-control-lg);
    min-width: var(--c-size-control-lg);
  }

  /*
  Flush
   */
  /*
  A popover has no box of its own, so as its invoker, the button takes the
  button group's overlap the popover would have had, on top of any flush
  margin.
  */
  :host {
    --_group-overlap: 0px;
  }

  :host([slot='invoker']) {
    --_group-overlap: var(--c-button-group-overlap, 0px);
    margin-inline-start: var(--_group-overlap);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='inline']),
  :host([variant~='danger-plain'][flush~='inline']),
  :host([variant~='plain'][flush~='inline-start']),
  :host([variant~='danger-plain'][flush~='inline-start']) {
    margin-inline-start: calc(
      var(--_flush-inline) * -1 + var(--_group-overlap)
    );
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='inline']),
  :host([variant~='danger-plain'][flush~='inline']),
  :host([variant~='plain'][flush~='inline-end']),
  :host([variant~='danger-plain'][flush~='inline-end']) {
    margin-inline-end: calc(var(--_flush-inline) * -1);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='block']),
  :host([variant~='danger-plain'][flush~='block']),
  :host([variant~='plain'][flush~='block-start']),
  :host([variant~='danger-plain'][flush~='block-start']) {
    margin-block-start: calc(var(--_flush-block) * -1);
  }

  :host([variant~='plain'][flush='']),
  :host([variant~='danger-plain'][flush='']),
  :host([variant~='plain'][flush~='block']),
  :host([variant~='danger-plain'][flush~='block']),
  :host([variant~='plain'][flush~='block-end']),
  :host([variant~='danger-plain'][flush~='block-end']) {
    margin-block-end: calc(var(--_flush-block) * -1);
  }

  :host([loading]),
  :host([action-state='loading']) {
    position: relative;

    /* Hidden with opacity, not visibility, so the label stays in the button's
       accessible name. The live region adds "Loading" to it. */
    .button-content {
      opacity: 0;
    }

    craft-spinner {
      --size: 1.25em;
      position: absolute;
      inset-block-start: calc(50% - var(--size) / 2);
      inset-inline-start: calc(50% - var(--size) / 2);
    }
  }

  /*
  Icon
   */
  :host([icon]:empty) {
    /* A square around a 1em × 0.8em icon (see craft-icon). */
    --_padding-inline: 0px;
    --_flush-inline: max(0px, calc((var(--_height) - 1em) / 2));
    --_flush-block: max(0px, calc((var(--_height) - 0.8em) / 2));
    aspect-ratio: 1;
    padding-block: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  /*
  Variants (appearance × palette)
   */

  /* Solid — primary, danger, and solid are filled with the loud color. */
  :host([variant~='primary']),
  :host([variant~='danger']),
  :host([variant~='solid']) {
    background-color: var(
      --c-color-fill-loud,
      var(--c-color-neutral-fill-loud)
    );
    border-color: transparent;
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([variant~='primary']:hover),
  :host([variant~='danger']:hover),
  :host([variant~='solid']:hover) {
    background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  :host([variant~='primary']:active),
  :host([variant~='primary'][aria-pressed='true']),
  :host([variant~='danger']:active),
  :host([variant~='danger'][aria-pressed='true']),
  :host([variant~='solid']:active),
  :host([variant~='solid'][aria-pressed='true']) {
    --_active-background-color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-loud, var(--c-color-neutral-on-loud));
  }

  /* Fill (default) — neutral normal fill. */
  :host([variant~='fill']) {
    border-color: transparent;
    background-color: var(
      --c-color-fill-normal,
      var(--c-color-neutral-fill-normal)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([variant~='fill']:hover) {
    background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 5)
    );
    color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  :host([variant~='fill']:active) {
    --_active-background-color: hsl(
      from var(--c-color-fill-normal, var(--c-color-neutral-fill-normal)) h s
        calc(l - 10)
    );
    --_active-color: var(--c-color-on-normal, var(--c-color-neutral-on-normal));
  }

  /* Outline, Dashed & Plain — transparent fill. */
  :host([variant~='outline']),
  :host([variant~='dashed']),
  :host([variant~='danger-plain']),
  :host([variant~='plain']) {
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([variant~='outline']:not(:disabled):not(.loading):hover),
  :host([variant~='dashed']:not(:disabled):not(.loading):hover),
  :host([variant~='danger-plain']:not(:disabled):not(.loading):hover),
  :host([variant~='plain']:not(:disabled):not(.loading):hover) {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-hover)
    );
    color: var(--c-color-on-quiet);
  }

  :host([variant~='outline']:not(:disabled):not(.loading):active),
  :host([variant~='dashed']:not(:disabled):not(.loading):active),
  :host([variant~='danger-plain']:not(:disabled):not(.loading):active),
  :host([variant~='plain']:not(:disabled):not(.loading):active) {
    --_active-background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-active)
    );
    --_active-color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
  }

  /* Outline & Dashed — visible border. */
  :host([variant~='outline']),
  :host([variant~='dashed']) {
    border-color: var(--c-color-border-loud);
  }

  :host(
    [variant~='outline']:not([variant~='primary']):not([variant~='danger']):not(
      [inherit]
    ):not([active]):not(.is-active)
  ),
  :host(
    [variant~='dashed']:not([variant~='primary']):not([variant~='danger']):not(
      [inherit]
    ):not([active]):not(.is-active)
  ) {
    border-color: var(--c-form-control-border-color);
    border-inline-start-color: var(
      --c-button-group-border-start-color,
      var(--c-form-control-border-color)
    );
    border-inline-end-color: var(
      --c-button-group-border-end-color,
      var(--c-form-control-border-color)
    );
  }

  :host([variant~='dashed']) {
    --c-button-border-style: dashed;
  }

  /* Plain — no border. */
  :host([variant~='danger-plain']),
  :host([variant~='plain']) {
    border-color: transparent;

    &::before {
      display: none;
    }
  }

  /* Link — renders as a text hyperlink: no fill or border, underlined. */
  :host([variant~='link']) {
    display: inline-flex;
    appearance: none;
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-fill-loud, var(--c-color-neutral-fill-loud));
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;
    text-decoration: underline;

    &::before {
      /* remove the sizer added by lion */
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([variant~='link']:not(:disabled):not(.loading):hover) {
    background-color: transparent;
    color: hsl(
      from var(--c-color-fill-loud, var(--c-color-neutral-fill-loud)) h s
        calc(l - 10)
    );
    text-decoration: none;
  }

  :host([variant~='link']:not(:disabled):not(.loading):active) {
    background-color: transparent;
  }

  /* Skipping the palette block isn't enough on a surface that sets only its
     text color; plain has no fill of its own, so it can follow that text. */
  :host([variant~='plain'][inherit]) {
    color: inherit;
  }

  @media (hover: hover) {
    :host([variant~='plain'][inherit]:not(:disabled):not(.loading):hover) {
      color: inherit;
    }
  }

  :host([variant~='plain'][inherit]:not(:disabled):not(.loading):active),
  :host([variant~='plain'][inherit].is-active:not(:disabled):not(.loading)) {
    color: inherit;
  }

  /* After the variants, which switch the sizer off: xsmall draws under
     the minimum target size, so the hit area has to come from the sizer. */
  :host([size~='xsmall'])::before {
    content: '';
    display: block;
    position: absolute;
    /* Physical on purpose: paired with the translate below to center the
       sizer, which the logical properties would push off-center in RTL. */
    /* stylelint-disable liberty/use-logical-spec */
    top: 50%;
    left: 50%;
    /* stylelint-enable liberty/use-logical-spec */
    transform: translate(-50%, -50%);
    min-height: var(--c-size-touch-target-sm);
    min-width: var(--c-size-touch-target-sm);
    width: 100%;
    height: 100%;
  }

  /* None — completely unstyled; provides behavior only. */
  :host([variant~='none']) {
    appearance: none;
    background-color: transparent;
    border-color: transparent;
    border-width: 0;
    color: inherit;
    font: inherit;
    padding: 0;
    min-height: auto;
    min-width: auto;

    &::before {
      display: none;
    }

    .button-content {
      padding: 0;
    }
  }

  :host([variant~='none']:hover),
  :host([variant~='none']:active) {
    background-color: transparent;
    color: inherit;
  }

  /* A selected button keeps its selected look while hovered. After the
     variants' hover rules, which would otherwise paint over it. */
  :host([variant][active]:not(:disabled):not(.loading):hover),
  :host([variant].is-active:not(:disabled):not(.loading):hover) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  /* After the variants, whose colors would otherwise paint over Lion's own
     disabled rule and leave a disabled button looking enabled. */
  :host([disabled]) {
    opacity: 0.5;
    user-select: none;
  }

  .button-content {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .prefix,
  .suffix {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-content--spaced-prefix .prefix {
    margin-inline-end: var(--c-spacing-sm);
  }

  .button-content--spaced-suffix .suffix {
    margin-inline-start: var(--c-spacing-sm);
  }

  .shortcut {
    --c-shortcut-shadow: none;
    margin-inline-start: var(--c-spacing-md);
    margin-inline-end: calc(var(--c-spacing) / -2);
  }

  .button-content--start {
    justify-content: start;
  }

  .button-content--end {
    justify-content: end;
  }

  /*
  Link mode: the inner <a> is the full interactive surface.
  Move inline padding from :host to the anchor so the whole button is clickable.
   */
  :host([href]:not([disabled])) {
    padding-inline: 0;

    /* Lion's minimum-click-target overlay is positioned, so it paints above
       the (non-positioned) anchor and swallows every pointer click before it
       can activate the link. Recreate the overlay on the anchor instead, so
       the full target navigates. */

    &::before {
      display: none;
    }
  }

  .link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: inherit;
    gap: inherit;
    inline-size: 100%;
    /* Stretch to the host's full cross size so the whole button (including
       block padding) is the clickable link. The host's height is indefinite
       (min-height), so a percentage min-block-size would not resolve. */
    align-self: stretch;
    color: inherit;
    font: inherit;
    text-decoration: none;
    padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );
    border-radius: inherit;
    outline: none;

    /* Same minimum click area as Lion's :host::before (WCAG 2.5.5), but as
       part of the anchor so clicks on it follow the link. */

    &::before {
      content: '';
      position: absolute;
      /* Physical on purpose: translate(-50%, -50%) centers against the
         physical left edge in both directions. */
      /* stylelint-disable liberty/use-logical-spec */
      top: 50%;
      left: 50%;
      /* stylelint-enable liberty/use-logical-spec */
      transform: translate(-50%, -50%);
      min-height: var(--_link-min-height, 44px);
      min-width: var(--_link-min-width, 44px);
      width: 100%;
      height: 100%;
    }
  }

  /* The anchor takes focus instead of the host, so it draws the host's ring.
     The browser's own ring would also wrap the click-area overlay above. */
  .link:focus-visible {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: calc(var(--c-focus-outline-offset) + var(--_border-width));
  }

  :host([href][size~='xsmall']:not([disabled])) .link {
    --_link-min-height: var(--c-size-touch-target-sm);
    --_link-min-width: var(--c-size-touch-target-sm);
    padding-inline: var(--c-spacing-xs);
  }

  :host([href][size~='small']:not([disabled])) .link {
    padding-inline: var(--c-spacing-sm);
  }

  :host([href][size~='large']:not([disabled])) .link {
    padding-inline: var(--c-spacing-lg);
  }

  /* Only an icon-only link sits flush in its square; one with a label keeps
     its padding. */
  :host([href][size~='zero']:not([disabled])) .link,
  :host([href][icon]:empty:not([disabled])) .link {
    padding-inline: 0;
  }

  .label--text {
    display: block;
    ${Si}
  }

  :host([flush]) .label--text {
    text-box: normal;
    padding-block: 0;
  }

  :host(
    :is(
      [variant~='fill'],
      [variant~='solid'],
      [variant~='primary'],
      [variant~='danger'],
      [variant~='plain'],
      [variant~='danger-plain']
    )
  ) {
    --_divider-left: var(--c-button-divider-start-color, transparent);
    --_divider-right: var(--c-button-divider-end-color, transparent);
    background-image:
      linear-gradient(to right, var(--_divider-left) 1px, transparent 1px),
      linear-gradient(to left, var(--_divider-right) 1px, transparent 1px);
    background-origin: border-box;
  }

  :host(:dir(rtl)) {
    --_divider-left: var(--c-button-divider-end-color, transparent);
    --_divider-right: var(--c-button-divider-start-color, transparent);
  }

  /* Ellipsis (action menu) icons read small at craft-icon's 0.8em */
  craft-icon[name='ellipsis'],
  ::slotted(craft-icon[name='ellipsis']) {
    --c-icon-size: 1em;
  }
`,ji=Object.prototype.toString;function Mi(e){return typeof e==`function`||ji.call(e)===`[object Function]`}function Ni(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var Pi=2**53-1;function Fi(e){var t=Ni(e);return Math.min(Math.max(t,0),Pi)}function Ii(e,t){var n=Array,r=Object(e);if(e==null)throw TypeError(`Array.from requires an array-like object - not null or undefined`);if(t!==void 0&&!Mi(t))throw TypeError(`Array.from: when provided, the second argument must be a function`);for(var i=Fi(r.length),a=Mi(n)?Object(new n(i)):Array(i),o=0,s;o<i;)s=r[o],t?a[o]=t(s,o):a[o]=s,o+=1;return a.length=i,a}function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Li(e)}function Ri(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function zi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Hi(r.key),r)}}function Bi(e,t,n){return t&&zi(e.prototype,t),n&&zi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vi(e,t,n){return t=Hi(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hi(e){var t=Ui(e,`string`);return Li(t)==`symbol`?t:t+``}function Ui(e,t){if(Li(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Li(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Wi=typeof Set>`u`?Set:function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Ri(this,e),Vi(this,`items`,void 0),this.items=t}return Bi(e,[{key:`add`,value:function(e){return this.has(e)===!1&&this.items.push(e),this}},{key:`clear`,value:function(){this.items=[]}},{key:`delete`,value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:`forEach`,value:function(e){var t=this;this.items.forEach(function(n){e(n,n,t)})}},{key:`has`,value:function(e){return this.items.indexOf(e)!==-1}},{key:`size`,get:function(){return this.items.length}}])}();function Gi(e){return e.localName??e.tagName.toLowerCase()}var Ki={article:`article`,aside:`complementary`,button:`button`,datalist:`listbox`,dd:`definition`,details:`group`,dialog:`dialog`,dt:`term`,fieldset:`group`,figure:`figure`,form:`form`,footer:`contentinfo`,h1:`heading`,h2:`heading`,h3:`heading`,h4:`heading`,h5:`heading`,h6:`heading`,header:`banner`,hr:`separator`,html:`document`,legend:`legend`,li:`listitem`,math:`math`,main:`main`,menu:`list`,nav:`navigation`,ol:`list`,optgroup:`group`,option:`option`,output:`status`,progress:`progressbar`,section:`region`,summary:`button`,table:`table`,tbody:`rowgroup`,textarea:`textbox`,tfoot:`rowgroup`,td:`cell`,th:`columnheader`,thead:`rowgroup`,tr:`row`,ul:`list`},qi={caption:new Set([`aria-label`,`aria-labelledby`]),code:new Set([`aria-label`,`aria-labelledby`]),deletion:new Set([`aria-label`,`aria-labelledby`]),emphasis:new Set([`aria-label`,`aria-labelledby`]),generic:new Set([`aria-label`,`aria-labelledby`,`aria-roledescription`]),insertion:new Set([`aria-label`,`aria-labelledby`]),none:new Set([`aria-label`,`aria-labelledby`]),paragraph:new Set([`aria-label`,`aria-labelledby`]),presentation:new Set([`aria-label`,`aria-labelledby`]),strong:new Set([`aria-label`,`aria-labelledby`]),subscript:new Set([`aria-label`,`aria-labelledby`]),superscript:new Set([`aria-label`,`aria-labelledby`])};function Ji(e,t){return[`aria-atomic`,`aria-busy`,`aria-controls`,`aria-current`,`aria-description`,`aria-describedby`,`aria-details`,`aria-dropeffect`,`aria-flowto`,`aria-grabbed`,`aria-hidden`,`aria-keyshortcuts`,`aria-label`,`aria-labelledby`,`aria-live`,`aria-owns`,`aria-relevant`,`aria-roledescription`].some(function(n){var r;return e.hasAttribute(n)&&!((r=qi[t])!=null&&r.has(n))})}function Yi(e,t){return Ji(e,t)}function Xi(e){var t=Qi(e);if(t===null||$i.indexOf(t)!==-1){var n=Zi(e);if($i.indexOf(t||``)===-1||Yi(e,n||``))return n}return t}function Zi(e){var t=Ki[Gi(e)];if(t!==void 0)return t;switch(Gi(e)){case`a`:case`area`:case`link`:if(e.hasAttribute(`href`))return`link`;break;case`img`:return e.getAttribute(`alt`)===``&&!Yi(e,`img`)?`presentation`:`img`;case`input`:var n=e.type;switch(n){case`button`:case`image`:case`reset`:case`submit`:return`button`;case`checkbox`:case`radio`:return n;case`range`:return`slider`;case`email`:case`tel`:case`text`:case`url`:return e.hasAttribute(`list`)?`combobox`:`textbox`;case`search`:return e.hasAttribute(`list`)?`combobox`:`searchbox`;case`number`:return`spinbutton`;default:return null}case`select`:return e.hasAttribute(`multiple`)||e.size>1?`listbox`:`combobox`}return null}function Qi(e){var t=e.getAttribute(`role`);if(t!==null){var n=t.trim().split(` `)[0];if(n.length>0)return n}return null}var $i=[`presentation`,`none`];function I(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function ea(e){return I(e)&&Gi(e)===`caption`}function ta(e){return I(e)&&Gi(e)===`input`}function na(e){return I(e)&&Gi(e)===`optgroup`}function ra(e){return I(e)&&Gi(e)===`select`}function ia(e){return I(e)&&Gi(e)===`table`}function aa(e){return I(e)&&Gi(e)===`textarea`}function oa(e){var t=(e.ownerDocument===null?e:e.ownerDocument).defaultView;if(t===null)throw TypeError(`no window available`);return t}function sa(e){return I(e)&&Gi(e)===`fieldset`}function ca(e){return I(e)&&Gi(e)===`legend`}function la(e){return I(e)&&Gi(e)===`slot`}function ua(e){return I(e)&&e.ownerSVGElement!==void 0}function da(e){return I(e)&&Gi(e)===`svg`}function fa(e){return ua(e)&&Gi(e)===`title`}function pa(e,t){if(I(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(` `),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(e){return r.getElementById(e)}).filter(function(e){return e!==null})}return[]}function ma(e,t){return I(e)?t.indexOf(Xi(e))!==-1:!1}function ha(e){return e.trim().replace(/\s\s+/g,` `)}function ga(e,t){if(!I(e))return!1;if(e.hasAttribute(`hidden`)||e.getAttribute(`aria-hidden`)===`true`)return!0;var n=t(e);return n.getPropertyValue(`display`)===`none`||n.getPropertyValue(`visibility`)===`hidden`}function _a(e){return ma(e,[`button`,`combobox`,`listbox`,`textbox`])||va(e,`range`)}function va(e,t){if(!I(e))return!1;switch(t){case`range`:return ma(e,[`meter`,`progressbar`,`scrollbar`,`slider`,`spinbutton`]);default:throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}}function ya(e,t){var n=Ii(e.querySelectorAll(t));return pa(e,`aria-owns`).forEach(function(e){n.push.apply(n,Ii(e.querySelectorAll(t)))}),n}function ba(e){return ra(e)?e.selectedOptions||ya(e,`[selected]`):ya(e,`[aria-selected="true"]`)}function xa(e){return ma(e,$i)}function Sa(e){return ea(e)}function Ca(e){return ma(e,[`button`,`cell`,`checkbox`,`columnheader`,`gridcell`,`heading`,`label`,`legend`,`link`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`row`,`rowheader`,`switch`,`tab`,`tooltip`,`treeitem`])}function wa(e){return!1}function Ta(e){return ta(e)||aa(e)?e.value:e.textContent||``}function Ea(e){var t=e.getPropertyValue(`content`);return/^["'].*["']$/.test(t)?t.slice(1,-1):``}function Da(e){var t=Gi(e);return t===`button`||t===`input`&&e.getAttribute(`type`)!==`hidden`||t===`meter`||t===`output`||t===`progress`||t===`select`||t===`textarea`}function Oa(e){if(Da(e))return e;var t=null;return e.childNodes.forEach(function(e){if(t===null&&I(e)){var n=Oa(e);n!==null&&(t=n)}}),t}function ka(e){if(e.control!==void 0)return e.control;var t=e.getAttribute(`for`);return t===null?Oa(e):e.ownerDocument.getElementById(t)}function Aa(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return Ii(t);if(!Da(e))return null;var n=e.ownerDocument;return Ii(n.querySelectorAll(`label`)).filter(function(t){return ka(t)===e})}function ja(e){var t=e.assignedNodes();return t.length===0?Ii(e.childNodes):t}function Ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new Wi,r=typeof Map>`u`?void 0:new Map,i=oa(e),a=t.compute,o=a===void 0?`name`:a,s=t.computedStyleSupportsPseudoElements,c=s===void 0?t.getComputedStyle!==void 0:s,l=t.getComputedStyle,u=l===void 0?i.getComputedStyle.bind(i):l,d=t.hidden,f=d!==void 0&&d,p=function(e,t){if(t!==void 0)throw Error(`use uncachedGetComputedStyle directly for pseudo elements`);if(r===void 0)return u(e);var n=r.get(e);if(n)return n;var i=u(e,t);return r.set(e,i),i};function m(e,t){var n=``;if(I(e)&&c&&(n=`${Ea(u(e,`::before`))} ${n}`),(la(e)?ja(e):Ii(e.childNodes).concat(pa(e,`aria-owns`))).forEach(function(e){var r=v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),i=(I(e)?p(e).getPropertyValue(`display`):`inline`)===`inline`?``:` `;n+=`${i}${r}${i}`}),I(e)&&c){var r=Ea(u(e,`::after`));n=`${n} ${r}`}return n.trim()}function h(e,t){var r=e.getAttributeNode(t);return r!==null&&!n.has(r)&&r.value.trim()!==``?(n.add(r),r.value):null}function g(e){return I(e)?h(e,`title`):null}function _(e){if(!I(e))return null;if(sa(e)){n.add(e);for(var t=Ii(e.childNodes),r=0;r<t.length;r+=1){var i=t[r];if(ca(i))return v(i,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(ia(e)){n.add(e);for(var a=Ii(e.childNodes),o=0;o<a.length;o+=1){var s=a[o];if(ea(s))return v(s,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(da(e)){n.add(e);for(var c=Ii(e.childNodes),l=0;l<c.length;l+=1){var u=c[l];if(fa(u))return u.textContent}return null}else if(Gi(e)===`img`||Gi(e)===`area`){var d=h(e,`alt`);if(d!==null)return d}else if(na(e)){var f=h(e,`label`);if(f!==null)return f}if(ta(e)&&(e.type===`button`||e.type===`submit`||e.type===`reset`)){var p=h(e,`value`);if(p!==null)return p;if(e.type===`submit`)return`Submit`;if(e.type===`reset`)return`Reset`}var g=Aa(e);if(g!==null&&g.length!==0)return n.add(e),Ii(g).map(function(e){return v(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(` `);if(ta(e)&&e.type===`image`){var _=h(e,`alt`);if(_!==null)return _;var y=h(e,`title`);return y===null?`Submit Query`:y}if(ma(e,[`button`])){var b=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(b!==``)return b}return null}function v(e,t){if(n.has(e))return``;if(!f&&ga(e,p)&&!t.isReferenced)return n.add(e),``;var r=I(e)?e.getAttributeNode(`aria-labelledby`):null,i=r!==null&&!n.has(r)?pa(e,`aria-labelledby`):[];if(o===`name`&&!t.isReferenced&&i.length>0)return n.add(r),i.map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(` `);var a=t.recursion&&_a(e)&&o===`name`;if(!a){var s=(I(e)&&e.getAttribute(`aria-label`)||``).trim();if(s!==``&&o===`name`)return n.add(e),s;if(!xa(e)){var c=_(e);if(c!==null)return n.add(e),c}}if(ma(e,[`menu`]))return n.add(e),``;if(a||t.isEmbeddedInLabel||t.isReferenced){if(ma(e,[`combobox`,`listbox`])){n.add(e);var l=ba(e);return l.length===0?ta(e)?e.value:``:Ii(l).map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(` `)}if(va(e,`range`))return n.add(e),e.hasAttribute(`aria-valuetext`)?e.getAttribute(`aria-valuetext`):e.hasAttribute(`aria-valuenow`)?e.getAttribute(`aria-valuenow`):e.getAttribute(`value`)||``;if(ma(e,[`textbox`]))return n.add(e),Ta(e)}if(Ca(e)||I(e)&&t.isReferenced||Sa(e)||wa(e)){var u=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(u!==``)return n.add(e),u}if(e.nodeType===e.TEXT_NODE)return n.add(e),e.textContent||``;if(t.recursion)return n.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var d=g(e);return d===null?(n.add(e),``):(n.add(e),d)}return ha(v(e,{isEmbeddedInLabel:!1,isReferenced:o===`description`,recursion:!1}))}function Na(e){return ma(e,[`caption`,`code`,`deletion`,`emphasis`,`generic`,`insertion`,`none`,`paragraph`,`presentation`,`strong`,`subscript`,`superscript`])}function Pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Na(e)?``:Ma(e,t)}var Fa=e=>{var t=new WeakMap,r=new WeakSet,i=new WeakMap;class a extends e{constructor(...e){super(...e),_(this,r),this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.actionState=w.Idle,this.feedbackMessage=null,y(this,t,null),y(this,i,e=>{if(this.disabled){e.preventDefault();return}ct(this.action)&&(e.preventDefault(),this.triggerAction(e))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,g(i,this))}disconnectedCallback(){this.removeEventListener(`click`,g(i,this)),b(r,this,o).call(this),super.disconnectedCallback()}setActionState(e,t={}){this.actionState=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:ct(this.action)?.type,...t}}))}async triggerAction(e){let n=ct(this.action);if(n){b(r,this,o).call(this),n.type===`http`&&this.setActionState(w.Loading,this.feedback?.loading);try{await ut(n,{trigger:this,sourceEvent:e}),this.setActionState(w.Success,this.feedback?.success)}catch(e){this.setActionState(w.Error,{message:e instanceof Error?e.message:void 0,...this.feedback?.error??{}})}finally{b(r,this,o).call(this),this.isConnected?v(t,this,setTimeout(()=>{v(t,this,null),this.setActionState(w.Idle)},this.feedbackDuration)):(this.actionState=w.Idle,this.feedbackMessage=null)}}}}function o(){g(t,this)!==null&&(clearTimeout(g(t,this)),v(t,this,null))}return n([s({type:Object})],a.prototype,`action`,void 0),n([s({type:Object})],a.prototype,`feedback`,void 0),n([s({type:Number,attribute:`feedback-duration`})],a.prototype,`feedbackDuration`,void 0),n([s({reflect:!0,attribute:`action-state`})],a.prototype,`actionState`,void 0),n([f()],a.prototype,`feedbackMessage`,void 0),a},Ia={Primary:`primary`,Danger:`danger`,DangerPlain:`danger-plain`,Solid:`solid`,Fill:`fill`,Outline:`outline`,Dashed:`dashed`,Plain:`plain`,Link:`link`,None:`none`},La=new WeakMap,Ra=new WeakMap,za=new WeakMap,Ba=new WeakSet,Va=new WeakMap,Ha=new WeakMap,Ua=new WeakMap,L=class extends T(Fa(ki)){static get styles(){return[...super.styles,se,ee,Ai]}constructor(){super(),_(this,Ba),this.type=`button`,y(this,La,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),y(this,Ra,()=>{let e=()=>{this.active=!1,t()},t=()=>{document.removeEventListener(`dragend`,e,!0),document.removeEventListener(`mouseup`,t,!0)};document.addEventListener(`dragend`,e,!0),document.addEventListener(`mouseup`,t,!0)}),y(this,za,e=>{!this.toggle||this.disabled||this.loading||this.dispatchEvent(new CustomEvent(`craft-toggle`,{bubbles:!0,composed:!0,cancelable:!0,detail:{active:!this.active,sourceEvent:e}}))}),this.variant=Ia.Fill,this.inherit=!1,this.size=`medium`,this.active=!1,this.toggle=!1,this.loading=!1,this.focusableWhenDisabled=!1,this.align=`center`,this.icon=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition=`prefix`,this._accessibleName=``,this._hasAccessibilityError=!1,this._content={label:!1,textLabel:!1,prefix:!1,suffix:!1},y(this,Va,null),y(this,Ha,null),y(this,Ua,null),this.linkHostStateApplied=!1,this.originalType=null,this.type=`button`,this.addEventListener(`mousedown`,g(Ra,this)),this.addEventListener(`click`,g(La,this),{capture:!0})}connectedCallback(){this.href&&!this.disabled&&(this.originalType=this.type,this.type=`button`,this.setAttribute(`role`,`presentation`),this.linkHostStateApplied=!0),super.connectedCallback(),this.syncLinkHostState(),this.addEventListener(`click`,g(za,this)),b(Ba,this,Wa).call(this),v(Ha,this,new MutationObserver(()=>b(Ba,this,Wa).call(this))),g(Ha,this).observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`]}),this.hasUpdated&&!this._accessibleName.trim()&&b(Ba,this,Ga).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,g(za,this)),g(Ha,this)?.disconnect(),v(Ha,this,null),b(Ba,this,Ja).call(this)}willUpdate(e){super.willUpdate(e),e.has(`actionState`)&&e.get(`actionState`)!==void 0&&(this.loading=this.actionState===w.Loading)}updated(e){if(super.updated(e),(e.has(`href`)||e.has(`disabled`))&&this.syncLinkHostState(),(e.has(`disabled`)||e.has(`focusableWhenDisabled`))&&(this.disabled?this.tabIndex=this.focusableWhenDisabled?0:-1:this.isLink||(this.tabIndex=0)),e.has(`shortcut`)){let e=this.getAttribute(`aria-keyshortcuts`),t=this.shortcutAriaKeys;(e===null||e===g(Va,this))&&(t?this.setAttribute(`aria-keyshortcuts`,t):this.removeAttribute(`aria-keyshortcuts`),v(Va,this,t))}this.toggle&&(e.has(`active`)||e.has(`toggle`))&&this.setAttribute(`aria-pressed`,String(this.active)),e.has(`loading`)&&(this.loading?this.announceLoading():e.get(`loading`)&&this.clearLoadingAnnouncement())}announceLoading(){this.liveRegion.textContent=S(`Loading`)}clearLoadingAnnouncement(){this.liveRegion.textContent=``}syncLinkHostState(){this.isLink?(this.linkHostStateApplied||(this.originalType=this.type),this.setAttribute(`role`,`presentation`),this.tabIndex=null,this.removeAttribute(`tabindex`),this.type=`button`,this.linkHostStateApplied=!0):this.linkHostStateApplied&&=(this.setAttribute(`role`,`button`),this.type=this.originalType??`button`,this.disabled||(this.tabIndex=0),!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll(`craft-icon, craft-spinner`);await Promise.all(Array.from(t).map(e=>e.updateComplete)),b(Ba,this,Ga).call(this)}get isLink(){return!!this.href&&!this.disabled}get computedRel(){if(this.target===`_blank`){let e=new Set((this.rel??``).split(/\s+/).filter(Boolean));return e.add(`noopener`),Array.from(e).join(` `)}return this.rel}render(){let e=this._content.prefix||!!this.icon&&this.iconPosition===`prefix`,t=this._content.suffix||!!this.icon&&this.iconPosition===`suffix`,n=p`
      <div
        class="${E({"button-content":!0,"button-content--spaced-prefix":e&&this._content.label,"button-content--spaced-suffix":t&&this._content.label,"button-content--start":this.align===`start`,"button-content--end":this.align===`end`,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&this.iconPosition===`prefix`?p`<craft-icon name="${this.icon}"></craft-icon>`:r}
        </slot>
        <slot
          class="${E({label:!0,"label--text":this._content.textLabel})}"
          part="label"
        ></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&this.iconPosition===`suffix`?p`<craft-icon name="${this.icon}"></craft-icon>`:r}
        </slot>
        ${this.shortcutKeys?p`<craft-shortcut
              class="shortcut"
              aria-hidden="true"
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:r}
      </div>
      ${this.loading?p`<craft-spinner part="spinner"></craft-spinner>`:r}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;return this.isLink?p`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${this.target??r}"
          rel="${this.computedRel??r}"
          download="${this.download??r}"
          >${n}</a
        >
      `:n}};function Wa(){let e=e=>Array.from(this.childNodes).some(t=>t instanceof Element?(t.getAttribute(`slot`)||null)===e:e===null&&t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim()),t=e(null)&&!Array.from(this.children).some(e=>!e.slot&&!e.classList.contains(`sr-only`)),n={label:e(null),textLabel:t,prefix:e(`prefix`),suffix:e(`suffix`)};(n.label!==this._content.label||n.textLabel!==this._content.textLabel||n.prefix!==this._content.prefix||n.suffix!==this._content.suffix)&&(this._content=n)}function Ga(){if(!this.isConnected)return;let e=this.isLink?this.shadowRoot?.querySelector(`a.link`)??this:this;this._accessibleName=Pa(e);let t=this._accessibleName.trim()===``;if(t&&!b(Ba,this,Ka).call(this)){b(Ba,this,qa).call(this);return}this._hasAccessibilityError=t}function Ka(){return typeof this.checkVisibility==`function`?this.checkVisibility({visibilityProperty:!0}):this.getClientRects().length>0}function qa(){g(Ua,this)||typeof ResizeObserver>`u`||(v(Ua,this,new ResizeObserver(()=>{b(Ba,this,Ka).call(this)&&(b(Ba,this,Ja).call(this),b(Ba,this,Ga).call(this))})),g(Ua,this).observe(this))}function Ja(){g(Ua,this)?.disconnect(),v(Ua,this,null)}n([s({reflect:!0})],L.prototype,`variant`,void 0),n([s({reflect:!0,type:Boolean})],L.prototype,`inherit`,void 0),n([s({reflect:!0})],L.prototype,`size`,void 0),n([s({reflect:!0})],L.prototype,`value`,void 0),n([s({reflect:!0,type:Boolean})],L.prototype,`active`,void 0),n([s({type:Boolean,reflect:!0})],L.prototype,`toggle`,void 0),n([s({reflect:!0,type:Boolean})],L.prototype,`loading`,void 0),n([s({attribute:`focusable-when-disabled`,type:Boolean,reflect:!0})],L.prototype,`focusableWhenDisabled`,void 0),n([s({reflect:!0})],L.prototype,`flush`,void 0),n([s()],L.prototype,`align`,void 0),n([s()],L.prototype,`icon`,void 0),n([s({reflect:!0})],L.prototype,`href`,void 0),n([s()],L.prototype,`target`,void 0),n([s()],L.prototype,`rel`,void 0),n([s()],L.prototype,`download`,void 0),n([s({attribute:`icon-position`})],L.prototype,`iconPosition`,void 0),n([h(`[data-live-region]`)],L.prototype,`liveRegion`,void 0),n([f()],L.prototype,`_accessibleName`,void 0),n([f()],L.prototype,`_hasAccessibilityError`,void 0),n([f()],L.prototype,`_content`,void 0),customElements.get(`craft-button`)||customElements.define(`craft-button`,L);var Ya=new WeakMap,Xa=new WeakMap,Za=new WeakSet,Qa=new WeakMap,$a=new WeakMap,eo=class extends F{static get styles(){return[...super.styles,a`
        .input-group__container {
          position: relative;
        }

        .input-group__prefix {
          position: absolute;
          inset-block: 0;
          inset-inline-start: 0;
          z-index: 1;
          border: none;
          background: none;
          pointer-events: none;
        }

        .input-group__prefix + .input-group__input ::slotted([slot='input']) {
          --_input-start-start-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          );
          --_input-end-start-radius: var(--c-input-radius, var(--c-radius-sm));
          padding-inline-start: calc(var(--c-input-spacing-inline) * 2 + 1em);
        }

        .input-group__prefix
          + .input-group__input:not(:has(+ .input-group__suffix))
          ::slotted([slot='input']) {
          --c-focus-outline-style: inherit;
          --c-focus-outline-offset: inherit;
        }

        .input-group__input {
          position: relative;
        }

        .input-search__clear {
          position: absolute;
          z-index: 1;
          inset-block: 0;
          inset-inline-end: var(--_clear-inset);
          display: flex;
          align-items: center;
        }

        :host {
          --_clear-inset: calc(
            (var(--_control-height) - var(--c-size-control-sm)) / 2
          );
        }

        :host([clearable]) .input-group__input ::slotted([slot='input']) {
          padding-inline-end: calc(
            var(--c-size-control-sm) + var(--_clear-inset) * 2
          );
        }

        .input-group__suffix {
          grid-auto-flow: column;
          padding-inline: 0;
        }

        ::slotted([slot='suffix']:not(craft-button)) {
          padding-inline: var(--c-input-spacing-inline);
        }

        :host(:not([inline-suffix])) ::slotted(craft-button[slot='suffix']) {
          margin-inline: 0;
        }
      `]}constructor(){super(),_(this,Za),y(this,Ya,null),y(this,Xa,!1),y(this,Qa,e=>{e.key!==`Escape`||e.target!==this._inputNode||!b(Za,this,to).call(this)||(e.preventDefault(),e.stopPropagation(),v(Xa,this,!0),this.clear())}),y(this,$a,e=>{e.key===`Escape`&&g(Xa,this)&&(e.stopPropagation(),v(Xa,this,!1))}),this.inputMode=`search`,this.addEventListener(`keydown`,g(Qa,this),{capture:!0}),this.addEventListener(`keyup`,g($a,this),{capture:!0})}connectedCallback(){!this.label&&!this.querySelector(`:scope > [slot="label"]`)&&(this.label=S(`Search`)),this.hasAttribute(`label-sr-only`)||(this.labelSrOnly=!0),this.placeholder||=S(`Search`),super.connectedCallback(),this._inputNode?.setAttribute(`enterkeyhint`,`search`),this._inputNode?.hasAttribute(`autocomplete`)||this._inputNode?.setAttribute(`autocomplete`,`off`),b(Za,this,no).call(this)}updated(e){super.updated(e),(e.has(`modelValue`)||e.has(`disabled`)||e.has(`readOnly`))&&b(Za,this,no).call(this)}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="input-search__clear">
          <slot name="search-clear"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,prefix:()=>({template:p`<craft-icon name="search"></craft-icon>`,renderAsDirectHostChild:!0})}}clear(){this.disabled||this.readOnly||(this.modelValue=``,this._inputNode?.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this._inputNode?.focus(),this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})))}};function to(){return String(this.modelValue??``)!==``}function no(){let e=b(Za,this,to).call(this)&&!this.disabled&&!this.readOnly;e&&!g(Ya,this)?(v(Ya,this,b(Za,this,ro).call(this)),this.append(g(Ya,this)),this.toggleAttribute(`clearable`,!0),this.requestUpdate()):!e&&g(Ya,this)&&(g(Ya,this).contains(document.activeElement)&&this._inputNode?.focus(),g(Ya,this).remove(),v(Ya,this,null),this.toggleAttribute(`clearable`,!1),this.requestUpdate())}function ro(){let e=document.createElement(`craft-button`);e.slot=`search-clear`,e.setAttribute(`data-search-clear`,``),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`variant`,`plain`),e.addEventListener(`click`,()=>this.clear());let t=document.createElement(`craft-icon`);return t.setAttribute(`name`,`xmark-large`),t.setAttribute(`label`,S(`Clear search`)),e.append(t),e.updateComplete.then(()=>{e.tabIndex=-1}),e}customElements.get(`craft-input-search`)||customElements.define(`craft-input-search`,eo);function io(e){Object.assign(e.style,{marginBlock:`calc(var(--c-spacing-sm) - var(--c-spacing-xs))`,marginInline:`0`,border:`0`,borderBlockStart:`1px solid var(--c-color-neutral-border-quiet)`})}var ao=class e extends Ln{constructor(...e){super(...e),this.label=S(`Actions`),this.icon=`ellipsis`,this.disabled=!1,this.searchable=!1,this.uid=It(),this._generatedInvoker=null,this._generatedContent=null,this._searchContainer=null,this._searchInput=null,this._searchField=null,this._onItemClick=e=>{let t=e.currentTarget;this.opened=!1,this.actions===void 0&&this._dispatchChange(t)},this._onSearchKeydown=e=>{if(e.key===`ArrowDown`||e.key===`ArrowUp`){let t=this._getNavigableItems();t.length&&(e.preventDefault(),(e.key===`ArrowDown`?t[0]:t[t.length-1])?.focus());return}e.key===`Enter`&&e.preventDefault()},this._onOverlayShow=()=>{this.opened&&(this.searchable?this._searchInput?.focus():this._getNavigableItems()[0]?.focus())},this._onContentKeydown=e=>{if(this._searchContainer?.contains(e.target))return;let t=this._getNavigableItems(),n=e.target?.closest?.(`craft-action-item`)??null,r=n?t.indexOf(n):-1;if(e.key===`ArrowDown`||e.key===`ArrowUp`){if(!t.length)return;e.preventDefault();let n;n=e.key===`ArrowDown`?r===-1?0:(r+1)%t.length:r===-1?t.length-1:(r-1+t.length)%t.length,t[n]?.focus();return}if(e.key===`Home`||e.key===`End`){if(!t.length)return;e.preventDefault(),(e.key===`Home`?t[0]:t[t.length-1])?.focus();return}if(e.key===` `&&!this.searchable&&n?.href){e.preventDefault(),n.click();return}n&&this._redirectTypingToSearch(e)},this._onContentSlotChange=()=>{this._syncSearchInput(),this._addEventListeners()},this._onInvokerSlotChange=()=>{if(this.actions===void 0)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&this._overlayCtrl&&(this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode}),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&(this._bindContent(e),this._observeContent(e))}_observeContent(e){this._contentObserver?.disconnect(),this._contentObserver=new MutationObserver(()=>this._bindContent(e)),this._contentObserver.observe(e,{childList:!0,subtree:!0})}_bindContent(e){e.querySelectorAll(`craft-action-item`).forEach(e=>e.addEventListener(`click`,this._onItemClick)),e.querySelectorAll(`hr`).forEach(io)}_dispatchChange(e){this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute(`id`,`invoker-${this.uid}`),e.setAttribute(`aria-controls`,`content-${this.uid}`),e.setAttribute(`aria-haspopup`,`true`)),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];e&&(this.disabled?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`))}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute(`id`,`content-${this.uid}`),e.setAttribute(`role`,`none`)),this._wireContentKeydown()}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._overlayCtrl.addEventListener(`show`,this._onOverlayShow),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_teardownOverlayCtrl(){this._contentObserver?.disconnect(),this._contentObserver=void 0,this._overlayCtrl?.removeEventListener(`show`,this._onOverlayShow),super._teardownOverlayCtrl()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="invoker"]`)?.addEventListener(`slotchange`,this._onInvokerSlotChange),this.shadowRoot?.querySelector(`slot[name="content"]`)?.addEventListener(`slotchange`,this._onContentSlotChange),this._syncSearchInput()}willUpdate(e){if(super.willUpdate(e),e.has(`opened`)&&this.opened&&this.disabled){this.opened=!1;return}if(this.actions===void 0){this._removeGeneratedNodes();return}let t=e.has(`opened`)&&this.opened&&this._hasActionsProvider();(e.has(`actions`)||e.has(`label`)||e.has(`icon`)||e.has(`disabled`)||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has(`disabled`)&&this._syncInvokerDisabled(),e.has(`opened`)&&!this.opened&&e.get(`opened`)&&this._resetSearchFilter(),e.has(`searchable`)&&this._syncSearchInput(),this.actions!==void 0&&(e.has(`opened`)&&this.opened&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has(`actions`)||e.has(`label`)||e.has(`icon`))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._overlayCtrl&&this._overlayCtrl.updateConfig({contentNode:this._overlayContentNode,invokerNode:this._overlayInvokerNode}),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>e.slot===`invoker`&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>e.type===`hr`||e.type===`display`?e:e.type===`group`?{...e,items:this._normalizeActions(e.items)}:`href`in e&&e.href?{...e,type:`link`,label:e.label??``}:{...e,type:e.type??`button`,label:e.label??``})}_sortActions(e){return e.map(e=>e.type===`group`?{...e,items:this._sortActions(e.items)}:e).sort((e,t)=>(`variant`in e&&e.variant===re.Danger)-+(`variant`in t&&t.variant===re.Danger))}_applyItemProps(e,t){let n=new Set([`type`,`label`,`onClick`,`href`,`keywords`,`attributes`]);for(let[r,i]of Object.entries(t))if(!(n.has(r)||i===void 0))try{e[r]=i}catch{}}_renderItem(e){if(e.type===`group`){let t=document.createDocumentFragment();if(e.heading){let n=document.createElement(`div`);n.className=`action-menu__heading`,n.textContent=e.heading,n.setAttribute(`role`,`presentation`),Object.assign(n.style,{paddingBlock:`var(--c-spacing-xs)`,paddingInline:`calc(var(--c-spacing-sm) * 2 + 1px) var(--c-spacing-md)`,fontSize:`var(--c-text-sm)`,fontWeight:`bold`}),t.appendChild(n)}for(let n of e.items){let e=this._renderItem(n);e&&t.appendChild(e)}return t}if(e.type===`hr`){let e=document.createElement(`hr`);return e.className=`action-menu__separator`,io(e),e}if(e.type===`display`)return typeof e.node==`function`?e.node():e.node;let t=document.createElement(`craft-action-item`);if(e.type===`link`&&(t.href=e.href),this._applyItemProps(t,e),e.keywords&&t.setAttribute(`data-keywords`,e.keywords),e.label&&(t.textContent=e.label),typeof e.onClick==`function`){let n=e.onClick;t.addEventListener(`click`,e=>n(e))}return t.addEventListener(`click`,()=>this._dispatchChange(e)),t}_resolveActions(){return typeof this.actions==`function`?this.actions():this.actions??[]}_hasActionsProvider(){return typeof this.actions==`function`}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement(`craft-button`);e.setAttribute(`slot`,`invoker`),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`inherit`,`true`),e.setAttribute(`variant`,`plain`),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute(`disabled`,this.disabled),o(p`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement(`div`);e.setAttribute(`slot`,`content`),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let n of e){let e=this._renderItem(n);e&&t.appendChild(e)}let n=!1;for(let e of t.children)e.classList.contains(`action-menu__heading`)?e.style.marginBlockStart=n?`var(--c-spacing-md)`:``:e.tagName===`CRAFT-ACTION-ITEM`&&(n=!0);this._syncSearchInput()}_getContentNode(){return this._generatedContent?this._generatedContent:this._cachedOverlayContentNode?this._cachedOverlayContentNode:Array.from(this.children).find(e=>e.slot===`content`)??null}_syncSearchInput(){let e=this._getContentNode();if(this._wireContentKeydown(),!this.searchable||!e){this._searchContainer?.isConnected&&this._searchContainer.remove(),e&&this._clearFilterAttributes(e);return}this._searchContainer||=this._buildSearchContainer(),e.firstElementChild!==this._searchContainer&&e.prepend(this._searchContainer)}_buildSearchContainer(){let e=document.createElement(`div`);e.className=`action-menu__search`;let t=document.createElement(`style`);t.textContent=`
      craft-action-menu [data-search-hidden] {
        display: none !important;
      }
      craft-action-menu .action-menu__search {
        padding: var(--c-spacing-sm);
      }
      craft-action-menu .action-menu__search input::placeholder {
        color: var(--c-form-control-placeholder);
        opacity: 1;
      }
    `,e.appendChild(t);let n=document.createElement(`input`);n.setAttribute(`aria-label`,S(`Search`)),n.addEventListener(`input`,()=>{this._applySearchFilter(n.value)}),n.addEventListener(`keydown`,this._onSearchKeydown);let r=document.createElement(`craft-input-search`);return r.setAttribute(`size`,`small`),n.slot=`input`,r.append(n),e.appendChild(r),this._searchInput=n,this._searchField=r,e}_getFilterableItems(t){return Array.from(t.querySelectorAll(e._filterableItemsSelector)).filter(n=>{if(this._searchContainer?.contains(n))return!1;let r=n.parentElement?.closest(e._filterableItemsSelector);return!r||!t.contains(r)})}_itemMatchesSearch(e,t){return`${e.textContent??``} ${e.getAttribute(`data-keywords`)??``}`.toLowerCase().includes(t)}_applySearchFilter(e){let t=this._getContentNode();if(!t)return;let n=e.trim().toLowerCase();for(let e of this._getFilterableItems(t))!n||this._itemMatchesSearch(e,n)?e.removeAttribute(`data-search-hidden`):e.setAttribute(`data-search-hidden`,``)}_clearFilterAttributes(e){e.querySelectorAll(`[data-search-hidden]`).forEach(e=>e.removeAttribute(`data-search-hidden`))}_resetSearchFilter(){this._searchField&&(this._searchField.modelValue=``);let e=this._getContentNode();e&&this._clearFilterAttributes(e)}_getNavigableItems(){let e=this._getContentNode();return e?Array.from(e.querySelectorAll(`craft-action-item`)).filter(e=>!e.hasAttribute(`hidden`)&&!e.hasAttribute(`data-search-hidden`)&&!(e.disabled||e.hasAttribute(`disabled`))):[]}_wireContentKeydown(){this._getContentNode()?.addEventListener(`keydown`,this._onContentKeydown)}_redirectTypingToSearch(e){if(!this.searchable||!this._searchInput||!(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.key!==`Backspace`)return;e.preventDefault();let t=this._searchInput;t.focus(),t.value=e.key===`Backspace`?t.value.slice(0,-1):t.value+e.key,this._applySearchFilter(t.value)}};ao.styles=[...Ln.styles,a`
      ::slotted([slot='content']) {
        display: grid;
        /* Keep items within the popover, however wide their content. */
        grid-template-columns: minmax(0, 1fr);
        gap: var(--c-spacing-xs);
        padding: var(--c-spacing-sm);
        font-size: var(--c-text-base);
        font-weight: 400;
      }

      :host([disabled]) ::slotted([slot='invoker']) {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
      }
    `],ao._filterableItemsSelector=`craft-action-item, li, button`,n([s({attribute:!1})],ao.prototype,`actions`,void 0),n([s()],ao.prototype,`label`,void 0),n([s()],ao.prototype,`icon`,void 0),n([s({type:Boolean,reflect:!0})],ao.prototype,`disabled`,void 0),n([s({type:Boolean,reflect:!0})],ao.prototype,`searchable`,void 0),n([C({slot:`invoker`})],ao.prototype,`invokerNodes`,void 0),n([C({slot:`content`})],ao.prototype,`contentNodes`,void 0),customElements.get(`craft-action-menu`)||customElements.define(`craft-action-menu`,ao);var oo=a`
  :host {
    --c-avatar-color-start: red;
    --c-avatar-color-end: blue;

    --size: calc(30rem / 16);
    display: contents;
  }

  .avatar {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    color: var(--c-avatar-color-text, var(--c-text-default));
    background-color: var(--c-surface-raised);
    border-radius: var(--c-radius-full);
  }

  .avatar__text {
    line-height: 1;
    font-weight: 500;
    font-family: var(--c-font-body, sans-serif);
    text-anchor: middle;
    fill: currentColor;
    user-select: none;
    pointer-events: none;
  }
`,so=class extends u{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(` `).map(e=>e.charAt(0).toUpperCase()).join(``):`?`}render(){return p`
      <span class="avatar">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="${this.label?`img`:r}"
          aria-hidden="${this.label?r:`true`}"
        >
          ${this.label?p`<title>${this.label}</title>`:r}
          <defs>
            <linearGradient
              id="${this._gradientId}"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop
                offset="0%"
                style="stop-color:var(--c-avatar-color-start)"
              ></stop>
              <stop
                offset="100%"
                style="stop-color:var(--c-avatar-color-end)"
              ></stop>
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="url(#${this._gradientId})"
            opacity="0.25"
          ></circle>
          <text class="avatar__text" x="50" y="64" font-size="44">
            ${this.text()}
          </text>
        </svg>
      </span>
    `}};so.styles=[oo],n([s()],so.prototype,`label`,void 0),n([f()],so.prototype,`_gradientId`,void 0),customElements.get(`craft-avatar`)||customElements.define(`craft-avatar`,so);var co=[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`white`,`gray`,`black`,`slate`],lo=[`white`,`gray`,`slate`,`black`],uo={neutral:`slate`,accent:`blue`,info:`sky`,success:`emerald`,warning:`yellow`,danger:`red`},fo={pending:`orange`,off:`red`,suspended:`red`,expired:`red`,disabled:`gray`,inactive:`gray`,on:`emerald`},po=lo.map(e=>`[data-color='${e}']`).join(`, `);function mo(e=``){return l(`:host([data-color]:not(${po})${e})`)}var ho=e=>e.charAt(0).toUpperCase()+e.slice(1),go={...Object.fromEntries(co.map(e=>[ho(e),e])),...Object.fromEntries(Object.entries(uo).map(([e,t])=>[ho(e),t])),...Object.fromEntries(Object.entries(fo).map(([e,t])=>[ho(e),t]))},_o=[...co],vo=class extends u{constructor(...e){super(...e),this.size=`md`,this.fill=`var(--c-color-fill-loud)`,this.label=null}get effectiveAppearance(){return this.appearance?this.appearance:this.fill===go.White||this.fill===go.Black?Gn.OutlineFill:Gn.Solid}getFill(){return _o.includes(this.fill)||ie.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case`md`:return`0.6em`;case`lg`:return`1em`;default:return this.size}}render(){return p`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??r}"
      role="${this.label?`img`:r}"
      class="${E({indicator:!0,[`indicator--${this.effectiveAppearance}`]:!0,"indicator--white":this.fill===go.White,"indicator--black":this.fill===go.Black})}"
    ></span>`}};vo.styles=[ne,a`
      :host {
        display: contents;
      }

      .indicator {
        --_fill: var(--fill, var(--c-color-fill-loud));
        --_size: var(--size, 0.5em);
        display: inline-flex;
        aspect-ratio: 1;
        width: var(--_size);
        border-radius: var(--c-radius-full);
        background: var(--_fill);
        /* Longhands, so a fill that isn't a color (a gradient, say) only
           drops the border's color rather than the whole border, and the dot
           keeps its size. */
        border-width: 1px;
        border-style: solid;
        border-color: var(--_fill);
      }

      /*
       * Appearances. Classes rather than :host([appearance]) selectors, because
       * the default depends on the fill (see effectiveAppearance), and an
       * unset appearance isn't reflected to the attribute.
       */
      .indicator--outline-fill {
        border-color: rgba(0, 0, 0, 0.5);
      }

      .indicator--outline-fill.indicator--white {
        border-color: var(--c-indicator-white-ring);
      }

      /* A dark outline would vanish against a black dot. */
      .indicator--outline-fill.indicator--black {
        border-color: var(--color-white);
      }

      .indicator--solid {
        border-color: transparent;
      }

      .indicator--outline {
        background: transparent;
        border-color: var(--_fill);
      }
    `],n([s()],vo.prototype,`size`,void 0),n([s({reflect:!0})],vo.prototype,`fill`,void 0),n([s()],vo.prototype,`label`,void 0),n([s({reflect:!0})],vo.prototype,`appearance`,void 0),customElements.get(`craft-indicator`)||customElements.define(`craft-indicator`,vo);var yo={Small:`small`,Medium:`medium`,Large:`large`};Object.values(yo);var bo=a`
  :host {
    display: inline-flex;
  }

  /*
   * As with chips, a blue link would clash with the fill, so links take the
   * badge's text color, and are underlined so they still stand apart from it.
   * Neutral badges keep the default link styling (a black badge's contents
   * take the dark theme's).
   */
  ${mo()} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  .badge {
    display: inline-flex;
    gap: 0.3em;
    align-items: center;
    background-color: var(--c-color-fill-quiet);
    border: 1px solid var(--c-color-border-quiet);
    color: var(--c-color-on-quiet);
    border-radius: var(--c-radius-full);
    font-size: var(--c-text-sm);
  }

  .badge--small {
    font-size: var(--c-text-xs);
  }

  /*
   * Flex boxes that center what they hold, rather than blocks a line tall: in
   * a line box the indicator sits on the text baseline, which lands it a
   * fraction of a pixel above the badge's middle.
   */
  .badge__prefix,
  .badge__suffix {
    display: inline-flex;
    align-items: center;
  }

  /* A badge with a label is as tall as a small control, so it lines up with
     the buttons and inputs beside it. */
  .badge--labeled {
    /* Border included, as a control's is; the preflight's border-box doesn't
       reach into the shadow root. */
    box-sizing: border-box;
    block-size: var(--c-size-control-sm);
    padding-inline: calc(0.5em + 1px);
  }

  .badge--small.badge--labeled {
    block-size: var(--c-size-control-xs);
  }

  .badge__label--text {
    display: block;
    text-box: trim-both cap alphabetic;
  }
`,xo=class extends u{constructor(...e){super(...e),this.fill=go.Gray,this.noPrefix=!1,this.size=yo.Medium,this.hasLabel=!1,this.hasTextLabel=!1,this.hasSuffix=!1,this.contentObserver=new MutationObserver(()=>this.readContent())}connectedCallback(){super.connectedCallback(),this.readContent(),this.contentObserver.observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this.contentObserver.disconnect()}readContent(){let e=[...this.childNodes];this.hasLabel=e.some(e=>e instanceof Element&&!e.hasAttribute(`slot`)||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``),this.hasTextLabel=this.hasLabel&&!e.some(e=>e instanceof Element&&!e.slot),this.hasSuffix=e.some(e=>e instanceof Element&&e.slot===`suffix`)}getFill(){return this.fill}willUpdate(e){e.has(`fill`)&&(this.dataset.color=this.getFill())}render(){return p`
      <span
        part="badge"
        class="${E({badge:!0,"badge--small":this.size===yo.Small,"badge--large":this.size===yo.Large,"badge--labeled":this.hasLabel})}"
      >
        ${this.noPrefix?r:p`<span class="badge__prefix">
              <slot name="prefix" part="prefix">
                <craft-indicator
                  part="indicator"
                  fill="${this.getFill()}"
                ></craft-indicator>
              </slot>
            </span>`}
        ${this.hasLabel?p`<slot
              class="${E({"badge__label--text":this.hasTextLabel})}"
            ></slot>`:r}
        ${this.hasSuffix?p`<span class="badge__suffix">
              <slot name="suffix" part="suffix"></slot>
            </span>`:r}
      </span>
    `}};xo.styles=[bo],n([s({reflect:!0})],xo.prototype,`fill`,void 0),n([s({attribute:`no-prefix`,type:Boolean})],xo.prototype,`noPrefix`,void 0),n([s()],xo.prototype,`size`,void 0),n([f()],xo.prototype,`hasLabel`,void 0),n([f()],xo.prototype,`hasTextLabel`,void 0),n([f()],xo.prototype,`hasSuffix`,void 0),customElements.get(`craft-badge`)||customElements.define(`craft-badge`,xo);var So=class extends u{constructor(...e){super(...e),this.rel=`noreferrer noopener`}render(){return p`
      <slot name="prefix" part="prefix"></slot>
      ${this.href?p`<a
          part="label"
          class="label"
          href=${this.href}
          target=${this.target??r}
          rel=${this.target?this.rel:r}
          ><slot></slot
        ></a>`:p`<span part="label" class="label"><slot></slot></span>`}
      <slot name="suffix" part="suffix"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};So.styles=a`
    :host {
      white-space: nowrap;
      display: inline-flex;
      gap: var(--c-spacing-sm);
      align-items: center;
      color: inherit;
    }

    .label {
      display: inline-flex;
      align-items: center;
      font-weight: var(--font-weight-medium);
      color: inherit;
      text-decoration: none;
    }

    /* The current page, which <craft-breadcrumbs> marks on the last crumb. */
    :host([aria-current='page']) .label {
      font-weight: var(--font-weight-light);
    }

    a.label:hover {
      text-decoration: underline;
    }

    slot[name='suffix']::slotted(*) {
      margin-inline-start: var(--c-spacing-sm);
    }

    slot[name='separator']::slotted(*) {
      color: var(--c-text-quiet);
      margin-block: 0;
      margin-inline: var(--c-spacing-sm);
    }
  `,n([s({reflect:!0})],So.prototype,`href`,void 0),n([s()],So.prototype,`target`,void 0),n([s()],So.prototype,`rel`,void 0),customElements.get(`craft-breadcrumb-item`)||customElements.define(`craft-breadcrumb-item`,So);var Co=a`
  .breadcrumbs {
    display: flex;
    align-items: center;
    /* The host isn't the flex container, so a gap set on it (e.g. a utility
       class) is handed down to the one that is. */
    gap: inherit;
  }
`,wo=class extends u{constructor(...e){super(...e),this.label=S(`Breadcrumbs`),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let n=e.offsetWidth;return e.hasAttribute(`hidden`)&&(e.removeAttribute(`hidden`),n=e.offsetWidth,e.setAttribute(`hidden`,``)),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:n,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`craft-breadcrumb-item`);if(e.forEach((t,n)=>{let r=n===e.length-1,i=t.querySelector(`[slot="separator"]`);r?i?.hasAttribute(`data-default`)&&i.remove():i===null?t.append(this.getSeparator()):i.hasAttribute(`data-default`)&&i.replaceWith(this.getSeparator()),r?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)}),this.breadcrumbsElements.length===0){this.items=[],this.visibleItems=0;return}await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{if(this.firstRender){this.firstRender=!1;return}this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return p`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};wo.styles=[Co],n([h(`slot`)],wo.prototype,`defaultSlot`,void 0),n([h(`slot[name="separator"]`)],wo.prototype,`separatorSlot`,void 0),n([C({selector:`craft-breadcrumb-item`})],wo.prototype,`breadcrumbsElements`,void 0),n([s()],wo.prototype,`label`,void 0),n([f()],wo.prototype,`items`,void 0),n([f()],wo.prototype,`visibleItems`,void 0),customElements.get(`craft-breadcrumbs`)||customElements.define(`craft-breadcrumbs`,wo);var To=a`
  :host {
    --_button-radius: var(--c-button-radius, var(--c-form-control-radius));
    display: flex;
  }

  ::slotted(*) {
    --c-button-radius-start-start: 0;
    --c-button-radius-start-end: 0;
    --c-button-radius-end-start: 0;
    --c-button-radius-end-end: 0;
  }

  ::slotted(:not([data-button-group-start])) {
    --c-button-group-border-start-color: var(--c-color-neutral-border-quiet);
    --c-button-group-overlap: calc(var(--c-button-border-width, 1px) * -1);
    margin-inline-start: var(--c-button-group-overlap);
  }

  ::slotted(:not([data-button-group-end])) {
    --c-button-group-border-end-color: var(--c-color-neutral-border-quiet);
  }

  ::slotted([data-button-group-divider]) {
    --c-button-divider-start-color: color-mix(
      in srgb,
      currentColor 25%,
      transparent
    );
  }

  ::slotted([data-button-group-divider-end]) {
    --c-button-divider-end-color: color-mix(
      in srgb,
      currentColor 25%,
      transparent
    );
  }

  ::slotted(:hover),
  ::slotted([active]),
  ::slotted([aria-pressed='true']) {
    z-index: 1;
  }

  ::slotted(:focus-visible) {
    z-index: 2;
  }

  ::slotted([data-button-group-start]) {
    --c-button-radius-start-start: var(--_button-radius);
    --c-button-radius-end-start: var(--_button-radius);
  }

  ::slotted([data-button-group-end]) {
    --c-button-radius-start-end: var(--_button-radius);
    --c-button-radius-end-end: var(--_button-radius);
  }

  /* Picking the selected option again does nothing. An owner may manage the
     selection itself, so that's any pressed button but an independent toggle. */
  :host(:not([multiple])) ::slotted([aria-pressed='true']:not([toggle])) {
    cursor: default;
  }

  :host([name]:not([multiple])) ::slotted([aria-pressed='true']) {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
    box-shadow: none;
  }
`,Eo=class extends u{constructor(){super(),this.multiple=!1,this._childObserver=new MutationObserver(()=>this._markEnds()),this._selectionObserver=new MutationObserver(e=>{if(!(!this.name||this.multiple))for(let{target:t}of e)t instanceof Element&&t.localName===`craft-button`&&!t.hasAttribute(`active`)&&t.getAttribute(`value`)===this.value&&t.setAttribute(`active`,``)}),this._ownsRole=!1,this._formDisabledButtons=new Set,this._formDisabled=!1,this._handleClick=e=>{let t=e.composedPath().find(e=>e instanceof Element&&e.hasAttribute(`value`)&&e!==this);if(!t)return;if(this.multiple){t.toggleAttribute(`active`),this._syncChildren(),this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{values:this._selectedValues()}}));return}let n=t.getAttribute(`value`)??``;n!==this.value&&(this.value=n,this._syncChildren(),this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{value:n}})))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._childObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`hidden`,`style`,`class`,`active`,`aria-pressed`],subtree:!0}),this._selectionObserver.observe(this,{attributes:!0,attributeFilter:[`active`],subtree:!0})}firstUpdated(e){super.firstUpdated(e),this.name&&this._setupSelectionMode(),this._markEnds()}updated(e){(e.has(`name`)||e.has(`multiple`))&&(this.name?this._setupSelectionMode():this._teardownSelectionMode()),(e.has(`value`)||e.has(`multiple`))&&this.name&&this._syncChildren()}disconnectedCallback(){super.disconnectedCallback(),this._childObserver.disconnect(),this._selectionObserver.disconnect()}_markEnds(){let e=Array.from(this.children).filter(e=>this._isVisible(e)),t=e[0],n=e[e.length-1];for(let r of Array.from(this.children)){let i=e.indexOf(r),a=i>0?e[i-1]:void 0,o=i>=0?e[i+1]:void 0;r.toggleAttribute(`data-button-group-start`,r===t),r.toggleAttribute(`data-button-group-end`,r===n),r.toggleAttribute(`data-button-group-divider`,a!==void 0&&!this._isSelected(r)&&!this._isSelected(a)),r.toggleAttribute(`data-button-group-divider-end`,o!==void 0&&!this._isSelected(r)&&!this._isSelected(o))}}_isSelected(e){return e.hasAttribute(`active`)||e.getAttribute(`aria-pressed`)===`true`}_isVisible(e){if(e instanceof HTMLTemplateElement||e instanceof HTMLScriptElement||e instanceof HTMLStyleElement||e instanceof HTMLInputElement&&e.type===`hidden`||e instanceof HTMLElement&&e.hidden)return!1;let t=getComputedStyle(e).display;return t===`none`?!1:t!==`contents`||Array.from(e.children).some(e=>this._isVisible(e))}_setupSelectionMode(){this.hasAttribute(`role`)||(this.setAttribute(`role`,`group`),this._ownsRole=!0),this.removeEventListener(`click`,this._handleClick),this.addEventListener(`click`,this._handleClick),this._syncChildren(),this._defaultSelection??={value:this.value,active:this._selectedValues()}}formResetCallback(){if(!this.name||!this._defaultSelection)return;let{value:e,active:t}=this._defaultSelection;this.querySelectorAll(`craft-button`).forEach(e=>{e.toggleAttribute(`active`,this.multiple&&t.includes(e.getAttribute(`value`)??``))}),this.multiple||(this.value=e),this._syncChildren()}formDisabledCallback(e){this._formDisabled=e,this._applyFormDisabled()}_applyFormDisabled(){if(!this._formDisabled){this._formDisabledButtons.forEach(e=>e.removeAttribute(`disabled`)),this._formDisabledButtons.clear();return}this.querySelectorAll(`craft-button:not([disabled])`).forEach(e=>{e.setAttribute(`disabled`,``),this._formDisabledButtons.add(e)})}_teardownSelectionMode(){this._ownsRole&&=(this.removeAttribute(`role`),!1),this.removeEventListener(`click`,this._handleClick)}_adoptSlottedValue(){if(this.multiple||this.value!==void 0)return;let e=this.querySelector(`craft-button[active]`)?.getAttribute(`value`);e!=null&&(this.value=e,this._defaultSelection?.value===void 0&&(this._defaultSelection={value:e,active:[e]}))}_syncChildren(){if(this._adoptSlottedValue(),this.querySelectorAll(`craft-button`).forEach(e=>{e.getAttribute(`type`)!==`button`&&e.setAttribute(`type`,`button`);let t=this.multiple?e.hasAttribute(`active`):e.getAttribute(`value`)===this.value;this.multiple||e.toggleAttribute(`active`,t),e.setAttribute(`aria-pressed`,String(t))}),!this.multiple){this._internals.setFormValue(this.value??null);return}let e=new FormData;e.append(this.name,``),this._selectedValues().forEach(t=>{e.append(`${this.name}[]`,t)}),this._internals.setFormValue(e)}_selectedValues(){return Array.from(this.querySelectorAll(`craft-button[active]`),e=>e.getAttribute(`value`)??``)}render(){return p`<slot @slotchange=${this._onSlotChange}></slot>`}_onSlotChange(){this.name&&this._syncChildren(),this._applyFormDisabled(),this._markEnds()}};Eo.styles=[To],Eo.formAssociated=!0,n([s({reflect:!0})],Eo.prototype,`name`,void 0),n([s({reflect:!0})],Eo.prototype,`value`,void 0),n([s({reflect:!0,type:Boolean})],Eo.prototype,`multiple`,void 0),customElements.get(`craft-button-group`)||customElements.define(`craft-button-group`,Eo);var Do={dark:.9,light:.85},Oo={dark:.6,light:.52},ko=.65,Ao=.8;function jo(e){let t=e.flat().filter(e=>e!==null);return t.length?Math.min(...t.map(([e])=>e))>=.25?`light`:`dark`:null}function Mo(e,t){let n=Array.isArray(e)?e:[],r=n.length&&jo(n.slice(0,1))||`dark`,i=n.length&&jo(n.slice(-1))||`dark`;return{header:t?{theme:r,treatment:`bar`,opacity:Oo[r]}:{theme:r,treatment:`backed`,opacity:ko},body:{theme:i,opacity:Oo[i]}}}var No=a`
  :host {
    display: block;
  }

  /* On a tinted card links take the card's text color, and are underlined so
     they still stand apart from it. Neutral cards keep the default link
     styling (black's contents take the dark theme's). */
  ${mo()} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  /* What's in a tinted card takes the card's color rather than gray, as its
     body does: neutral controls and hairlines, the selected tab's indicator,
     form control and checkbox borders, and UI text. */
  ${mo()} ::slotted(*) {
    --c-color-neutral-fill-quiet: var(--_colorable-fill-quiet);
    --c-color-neutral-fill-normal: var(--_colorable-fill-normal);
    --c-color-neutral-fill-loud: var(--_colorable-fill-loud);
    --c-color-neutral-border-quiet: var(--_colorable-border-quiet);
    --c-color-neutral-border-normal: var(--_colorable-border-normal);
    --c-color-neutral-border-loud: var(--_colorable-border-loud);
    --c-color-neutral-on-quiet: var(--_colorable-on-quiet);
    --c-color-neutral-on-normal: var(--_colorable-on-normal);
    --c-color-neutral-on-loud: var(--_colorable-on-loud);
    --c-tab-border-active: var(--_colorable-on-quiet);
    --c-form-control-border-color: var(--_colorable-border-normal);
    --c-text-default: var(--_colorable-on-quiet);
    --c-text-quiet: color-mix(
      in oklab,
      var(--_colorable-on-quiet) 75%,
      var(--_colorable-fill-quiet)
    );
  }

  /* A neutral card re-resolves the tokens a tinted card recolors (see
     tokens.css). The selected tab's indicator has no token of its own to go
     back to, so it's cleared, leaving tabs their default. */
  :host(:is([data-color='white'], [data-color='gray'], [data-color='slate'])) {
    --c-tab-border-active: initial;
  }

  :host([active]) .card {
    color: var(--c-color-on-quiet);
    background-color: color-mix(var(--c-color-fill-quiet), transparent 40%);
    border-color: var(--c-color-border-loud);

    .card__header,
    .card__footer {
      background-color: var(--c-color-fill-loud);
      border-color: var(--c-color-border-loud);
      color: var(--c-color-on-loud);
      --c-checkbox-border-color: var(--c-color-on-loud);
      /* Plain controls here hover over the quiet fill, which would be a light
         patch under the header's light text. */
      --c-color-fill-quiet: var(--c-color-fill-loud);
      --c-color-border-quiet: var(--c-color-border-loud);
      --c-color-on-quiet: var(--c-color-on-loud);
    }
  }

  /* A checked header checkbox is filled with the header's text color, with
     the mark cut out in its fill, rather than the accent color, which can
     clash with the card's color or blend into it. */
  :host([data-color]:not([data-color='white'])) .card {
    .card__header,
    .card__footer {
      --c-checkbox-checked-fill: var(--c-color-on-quiet);
      --c-checkbox-checked-mark: var(--c-color-fill-quiet);
    }
  }

  :host([data-color]:not([data-color='white'])[active]) .card,
  :host(:not([data-color])[active]) .card {
    .card__header,
    .card__footer {
      --c-checkbox-checked-fill: var(--c-color-on-loud);
      --c-checkbox-checked-mark: var(--c-color-fill-loud);
    }
  }

  .card {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      transparent 70%
    );
    border: var(--c-card-border-width, 1px) solid
      var(--c-color-border-quiet, var(--c-color-neutral-border-quiet));
    border-radius: var(--c-card-radius, var(--c-radius-md));
    box-shadow: var(--c-card-shadow, var(--c-shadow-sm));
    position: relative;
    box-sizing: border-box;
    height: 100%;
    overflow: clip;
  }

  /* Without a color, a card has no fill of its own: its border and text come
     from the colors around it, so in a colored card or block it takes that
     color, as what's in it does, and elsewhere the neutral ones. */
  :host(:not([data-color]):not([active])) .card {
    color: var(--c-text-default);
    background-color: transparent;
  }

  :host(:not([data-color]):not([active])) .card__header,
  :host(:not([data-color]):not([active])) .card__footer {
    background-color: transparent;
  }

  :host(:not([data-color])[active]) .card {
    --c-color-fill-loud: var(--c-card-fill-selected);
    --c-color-border-loud: var(--c-card-border-selected);
    --c-color-on-loud: var(--c-card-text-selected);
  }

  :host([data-color='white']) .card {
    --c-color-fill-quiet: var(--c-surface-white);
    --c-color-fill-loud: var(--c-surface-white);
    --c-color-border-quiet: var(--c-border-raised);
    --c-color-border-loud: var(--c-border-raised-selected);
    --c-color-on-quiet: var(--c-text-default);
    --c-color-on-loud: var(--c-text-default);
    box-shadow: var(--c-card-shadow, var(--c-shadow-xs));
  }

  /* Black's quiet fill is dark under light text, so the translucent body would
     let a light page through and wash the text out. It fills the whole card
     instead, selected or not. */
  :host([data-color='black']) .card {
    /* Light lines against the dark fill, in either theme. Black's own quiet
       border is barely lighter than the fill, so it all but disappears. */
    --c-color-border-quiet: color-mix(
      in srgb,
      var(--c-color-black-on-quiet),
      transparent 80%
    );
    background-color: var(--c-color-fill-quiet);
  }

  /* Black's loud fill is the same as its quiet one, so with the body filled
     too, selection shows in the border, as a white card's does. */
  :host([data-color='black'][active]) .card {
    border-color: var(--c-color-accent-border-normal);
  }

  /* White fills the whole card, not just the header over a translucent body. */
  :host([data-color='white']:not([active])) .card {
    background-color: var(--c-color-fill-quiet);
  }

  :host([data-color='white']:not([active])) .card__header,
  :host([data-color='white']:not([active])) .card__footer {
    background-color: transparent;
  }

  :host([data-color='white']) .card .card__header,
  :host([data-color='white']) .card .card__footer {
    border-color: var(--c-table-border-color);
  }

  :host([data-color='white'][active]) .card {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
  }

  :host([data-color='white'][active]) .card .card__header,
  :host([data-color='white'][active]) .card .card__footer {
    background-color: transparent;
    border-color: var(--c-color-accent-border-quiet);
  }

  /* Checkboxes match the header's other controls, which take its text color. */
  .card__header,
  .card__footer {
    --c-checkbox-border-color: var(
      --c-color-on-quiet,
      var(--c-color-neutral-on-quiet)
    );
  }

  .card__header,
  .card__footer {
    font-size: 0.875em;
    padding-block: var(--c-card-padding-block, var(--c-spacing-sm));
    padding-inline: var(--c-card-padding-inline, var(--c-spacing-md));
    background-color: var(--c-color-fill-quiet);
    border-width: 0;
    border-color: var(--c-color-border-quiet);
    border-style: solid;
  }

  .card__footer {
    border-block-start-width: 1px;
    border-end-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-end-end-radius: var(--c-card-radius, var(--c-radius-md));
  }

  /* Collapsed: only the header is left, so it takes the whole card's shape —
     otherwise its bottom border hangs under nothing and its corners stay square. */
  :host([collapsed]) .card-body,
  :host([collapsed]) .card__footer {
    display: none;
  }

  /* With the card's own top and bottom borders, a header bar's height. */
  :host([collapsed]) .card__header {
    min-height: var(
      --c-card-header-min-height,
      calc(var(--c-size-header) - var(--c-card-border-width, 1px) * 2)
    );
    border-block-end-width: 0;
  }

  .card__header {
    /* Room for a small button, like other header bars, so a header is the
       same height with or without actions. With the card's top border and the
       header's own bottom border, it's a header bar's height. */
    --_header-height: calc(
      var(--c-size-header) - var(--c-card-border-width, 1px)
    );
    min-height: var(--c-card-header-min-height, var(--_header-height));
    padding-block: calc(
      (var(--_header-height) - 1px - var(--c-size-control-sm)) / 2
    );
    border-block-end-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  /* Without a label, a header is just its controls, floating over the card, as
     a cover card's are. Its border stays, transparent, so nothing moves. In a
     selected card its controls match the body, rather than a selected bar. */
  :host .card.card--bare-header .card__header.card__header {
    background-color: transparent;
    border-color: transparent;
  }

  :host([active]) .card.card--bare-header .card__header.card__header {
    color: inherit;
    --c-color-fill-quiet: inherit;
    --c-color-border-quiet: inherit;
    --c-color-on-quiet: inherit;
    --c-checkbox-border-color: var(
      --c-color-on-quiet,
      var(--c-color-neutral-on-quiet)
    );
    --c-checkbox-checked-fill: initial;
    --c-checkbox-checked-mark: initial;
  }

  :host([data-color]:not([data-color='white'])[active])
    .card.card--bare-header
    .card__header.card__header {
    --c-checkbox-checked-fill: var(--c-color-on-quiet);
    --c-checkbox-checked-mark: var(--c-color-fill-quiet);
  }

  .card__label-text,
  .card__label::slotted(:is(h1, h2, h3, h4, h5, h6, label)) {
    text-box: trim-both cap alphabetic;
  }

  .card__header__suffix {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-md);
  }

  .card__actions {
    display: flex;
    gap: var(--c-spacing-sm);
  }

  /* The body matches the CP's container padding, and falls back to the same
     value outside the CP, where nothing defines it. */
  .card-body {
    --_body-padding-inline: var(
      --c-card-padding-inline,
      var(--cp-container-padding, var(--c-spacing-lg))
    );
    --_body-padding-block: var(
      --c-card-padding-block,
      var(--cp-container-padding, var(--c-spacing-lg))
    );
    gap: var(--c-spacing-md);
    padding-inline: var(--_body-padding-inline);
    padding-block: var(--_body-padding-block);
  }

  .card-body--thumb-start {
    display: grid;
    grid-template-areas: 'thumbnail main';
    grid-template-columns: calc(120rem / 16) minmax(0, 1fr);
  }

  .card-body--thumb-end {
    display: grid;
    grid-template-areas: 'main thumbnail';
    grid-template-columns: minmax(0, 1fr) calc(120rem / 16);
  }

  /* The thumbnail sits closer to the card's edges than the text does. It's
     shifted rather than given inline margins, so it keeps its column's width. */
  .card-body__thumb {
    --_thumb-inset: var(--c-spacing-md);
    --_thumb-shift: calc(var(--_body-padding-inline) - var(--_thumb-inset));
    /* Fit within the thumbnail column, at the image's own proportions. */
    --c-thumbnail-size: calc(120rem / 16);
    --c-thumbnail-height: auto;
    --c-thumbnail-image-radius: var(--c-radius-md);
    position: relative;
    margin-block: calc(var(--_thumb-inset) - var(--_body-padding-block));
  }

  .card-body--thumb-start .card-body__thumb {
    inset-inline-start: calc(var(--_thumb-shift) * -1);
  }

  .card-body--thumb-end .card-body__thumb {
    inset-inline-start: var(--_thumb-shift);
  }

  /* Capped, as a transformed image can round a pixel past the column. */
  slot[name='thumbnail']::slotted(*) {
    max-block-size: calc(120rem / 16);
    border-radius: var(--c-radius-md);
    overflow: clip;
  }

  .card-body__main {
    grid-area: main;
  }

  /* Classes are repeated to outrank the color and selection rules above. */
  :host .card.card--cover.card--cover {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr auto;
    color: var(--_body-ink);
    background-color: var(--c-color-neutral-fill-quiet);
    border: 0;
    isolation: isolate;
  }

  /* The header, body and footer reach the card's edges, under its border, so
     their fills follow its rounded corners. Their content keeps a normal
     card's distance from the edge. */
  .card--cover {
    --_cover-edge: var(--c-card-border-width, 1px);
  }

  /* Makes the card at least 4:3, and lets it grow taller when there's more
     content than that fits. An aspect ratio on the card itself wouldn't, as
     the card clips its overflow. It spans the whole card, under the border. */
  .card--cover::before {
    content: '';
    grid-area: 1 / 1 / -1 / -1;
    aspect-ratio: 4 / 3;
    pointer-events: none;
  }

  /* Rounded themselves, rather than left to the card's clip, which browsers
     don't always apply to a layer with a backdrop filter, such as a header
     bar, or to what's under it. */
  .card--cover .card__header {
    grid-area: 1 / 1;
    border-start-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-start-end-radius: var(--c-card-radius, var(--c-radius-md));
    min-height: calc(
      var(--c-card-header-min-height, var(--_header-height)) +
        var(--_cover-edge)
    );
    padding-block-start: calc(
      (var(--_header-height) - 1px - var(--c-size-control-sm)) / 2 +
        var(--_cover-edge)
    );
    padding-inline: calc(
      var(--c-card-padding-inline, var(--c-spacing-md)) + var(--_cover-edge)
    );
  }

  .card--cover .card-body {
    grid-area: 2 / 1;
    align-self: end;
  }

  .card--cover .card__footer {
    grid-area: 3 / 1;
    padding-inline: calc(
      var(--c-card-padding-inline, var(--c-spacing-md)) + var(--_cover-edge)
    );
    padding-block-end: calc(
      var(--c-card-padding-block, var(--c-spacing-sm)) + var(--_cover-edge)
    );
  }

  .card__cover {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  /* In the card's color, as the page's theme has it, like a normal card's
     border. That's the only place the color shows: what's laid over the image
     takes the image's theme. */
  .card--cover::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: inherit;
    box-shadow: inset 0 0 0 var(--c-card-border-width, 1px)
      var(--c-color-border-quiet, var(--c-color-neutral-border-quiet));
    pointer-events: none;
  }

  :host([active]) .card.card--cover.card--cover {
    box-shadow: 0 0 0 2px var(--c-color-accent-border-normal);
  }

  :host([active]) .card--cover::after {
    box-shadow: inset 0 0 0 var(--c-card-border-width, 1px)
      var(--c-color-accent-border-normal);
  }

  :host .card.card--cover .card__header.card__header {
    --_cover-ink: var(--_header-ink);
    --_cover-solid: var(--_header-solid);
    --_cover-backing: var(--_header-backing);
    --_cover-backing-hover: var(--_header-backing-hover);
    --_cover-ink-solid: var(--_header-ink-solid);
    color: var(--_header-ink);
    background-color: transparent;
    border-color: transparent;
  }

  :host .card.card--cover-bar .card__header.card__header {
    background-color: var(--_header-fill);
    backdrop-filter: blur(var(--blur-md, 12px));
    border-color: var(--_header-rule);
  }

  :host .card--cover .card-body.card-body {
    --_cover-ink: var(--_body-ink);
    --_cover-solid: var(--_body-solid);
    --_cover-ink-solid: var(--_body-ink-solid);
    --_fade: 4.5rem;
    /* Positioned, without a z-index, so its blur layer sits between the image
       and its scrim, in the card's stacking context. */
    position: relative;
    display: block;
    color: var(--_body-ink);
    padding-inline: calc(var(--_body-padding-inline) + var(--_cover-edge));
    padding-block-start: calc(var(--_body-padding-block) + var(--_fade));
    background: linear-gradient(
      to top,
      rgb(from var(--_body-solid) r g b / var(--_body-scrim))
        calc(100% - var(--_fade)),
      rgb(from var(--_body-solid) r g b / calc(var(--_body-scrim) * 0.7))
        calc(100% - var(--_fade) * 0.7),
      rgb(from var(--_body-solid) r g b / calc(var(--_body-scrim) * 0.4))
        calc(100% - var(--_fade) * 0.45),
      rgb(from var(--_body-solid) r g b / calc(var(--_body-scrim) * 0.15))
        calc(100% - var(--_fade) * 0.2),
      transparent
    );
  }

  /*
  The image blurs in very slightly under the scrim, from halfway down its fade, so
  it's crisp until just above the content, and busy detail doesn't show
  through behind it. A blurred copy faded in with a mask, rather than a blur
  that grows, but it reads the same.
  */
  :host .card--cover .card-body.card-body::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    backdrop-filter: blur(1px);
    mask-image: linear-gradient(
      to top,
      #000 calc(100% - var(--_fade)),
      transparent calc(100% - var(--_fade) * 0.5)
    );
    pointer-events: none;
  }

  :host .card--cover .card-body.card-body:last-child {
    padding-block-end: calc(var(--_body-padding-block) + var(--_cover-edge));
  }

  :host .card--cover .card-body.card-body:last-child::before {
    border-end-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-end-end-radius: var(--c-card-radius, var(--c-radius-md));
  }

  :host .card.card--cover .card__footer.card__footer {
    --_cover-ink: var(--_body-ink);
    --_cover-solid: var(--_body-solid);
    --_cover-ink-solid: var(--_body-ink-solid);
    color: var(--_body-ink);
    background-color: rgb(from var(--_body-solid) r g b / var(--_body-scrim));
    border-color: var(--_body-rule);
  }

  @media (forced-colors: active) {
    :host .card.card--cover.card--cover {
      border: var(--c-card-border-width, 1px) solid CanvasText;
      --_cover-edge: 0px;
    }

    :host([active]) .card.card--cover.card--cover {
      border-color: Highlight;
    }

    :host .card.card--cover .card__header.card__header,
    :host .card--cover .card-body.card-body,
    :host .card.card--cover .card__footer.card__footer {
      background: Canvas;
    }

    :host .card--cover .card-body.card-body::before {
      display: none;
    }
  }
`,Po=e=>{if(typeof e!=`string`)return e;try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}},Fo=e=>e===`dark`?`rgb(255 255 255 / ${Do.dark})`:`rgb(0 0 0 / ${Do.light})`,Io=e=>e===`dark`?`#000`:`#fff`,Lo=e=>e===`dark`?`#fff`:`#000`,Ro=(e,t)=>e===`dark`?`rgb(0 0 0 / ${t})`:`rgb(255 255 255 / ${t})`,zo=e=>e===`dark`?`rgb(255 255 255 / 20%)`:`rgb(0 0 0 / 15%)`,Bo=class extends Jn(u,{customProperty:[`--c-card-padding-block`,`--c-card-padding-inline`]}){constructor(...e){super(...e),this.label=``,this.active=!1,this.collapsed=!1,this.showThumb=!0,this.thumbAlignment=`start`,this.coverSrc=``,this._coverFailed=!1,this.luminance=null,this._luminance=null,this._themed=new Set,this._lightDom=new ae(this,{characterData:!0}),this._onCoverError=()=>{this._coverFailed=!0}}_hasLabel(){return!!this.label||oe(this,`label`)||Array.from(this.children).some(e=>e.slot===`header`&&!!e.querySelector(`[data-card-label]`))}_hasHeaderText(){return this._hasLabel()||oe(this,`badge`)}_hasHeaderContent(){let e=e=>e.tagName===`DIV`||e.tagName===`SPAN`;return!!this.label||Array.from(this.children).some(t=>[`header`,`label`,`badge`,`actions`].includes(t.slot)&&(!!t.textContent?.trim()||!e(t)||Array.from(t.querySelectorAll(`*`)).some(t=>!e(t))))}_cover(){return this.coverSrc&&!this._coverFailed?Mo(this._luminance,this._hasHeaderText()):null}willUpdate(e){super.willUpdate(e),e.has(`luminance`)&&(this._luminance=Po(this.luminance)),e.has(`coverSrc`)&&(this._coverFailed=!1)}_coverStyles(e){if(!e)return{};let{header:t,body:n}=e;return{"--_header-ink":Fo(t.theme),"--_header-ink-solid":Lo(t.theme),"--_header-solid":Io(t.theme),"--_header-fill":Ro(t.theme,t.opacity),"--_header-backing":t.treatment===`backed`?Ro(t.theme,t.opacity):void 0,"--_header-backing-hover":t.treatment===`backed`?Ro(t.theme,Ao):void 0,"--_header-rule":zo(t.theme),"--_body-ink":Fo(n.theme),"--_body-ink-solid":Lo(n.theme),"--_body-solid":Io(n.theme),"--_body-scrim":String(n.opacity),"--_body-rule":zo(n.theme)}}updated(){let e=this._cover(),t=new Set;if(e)for(let n of Array.from(this.children)){if(n.slot===`thumbnail`)continue;let r=n.slot===``||n.slot===`footer`;n.setAttribute(`data-theme`,r?e.body.theme:e.header.theme),n.setAttribute(`data-cover`,r?`body`:e.header.treatment),t.add(n)}for(let e of this._themed)t.has(e)||(e.removeAttribute(`data-theme`),e.removeAttribute(`data-cover`));this._themed=t}render(){let e=this._hasHeaderContent(),t=oe(this,`footer`),n=this._cover(),i=!n&&this.showThumb&&oe(this,`thumbnail`),a=!n&&e&&!this._hasLabel();return p`
      <div
        part="base"
        class="${E({card:!0,"card--has-thumbnail":i,"card--cover":!!n,"card--cover-bar":n?.header.treatment===`bar`,"card--bare-header":a})}"
        style="${Zn({...this.paddingStyles,...this._coverStyles(n)})}"
      >
        ${n?p`<img
              class="card__cover"
              part="cover"
              src="${this.coverSrc}"
              alt=""
              loading="lazy"
              decoding="async"
              @error="${this._onCoverError}"
            />`:r}
        ${e?p`<div class="card__header" part="header">
              <slot name="header">
                <slot name="label" class="card__label" part="label"
                  >${this.label?p`<span class="card__label-text">${this.label}</span>`:r}</slot
                >
                <div class="card__header__suffix">
                  <slot name="badge" class="card__badge" part="badge"></slot>
                  <slot
                    name="actions"
                    class="card__actions"
                    part="actions"
                  ></slot>
                </div>
              </slot>
            </div>`:r}

        <div
          part="body"
          class="${E({"card-body":!0,"card-body--thumb-start":i&&this.thumbAlignment===`start`,"card-body--thumb-end":i&&this.thumbAlignment===`end`})}"
        >
          <div
            class="card-body__thumb"
            part="thumbnail"
            ?hidden="${!i}"
          >
            <slot name="thumbnail"></slot>
          </div>

          <div class="card-body__main">
            <slot></slot>
          </div>
        </div>

        ${t?p`<div class="card__footer" part="footer">
              <slot name="footer"></slot>
            </div>`:r}
      </div>
    `}};Bo.styles=[No],n([s()],Bo.prototype,`label`,void 0),n([s({type:Boolean,reflect:!0})],Bo.prototype,`active`,void 0),n([s({type:Boolean,reflect:!0})],Bo.prototype,`collapsed`,void 0),n([s({attribute:`show-thumb`,type:Boolean})],Bo.prototype,`showThumb`,void 0),n([s({attribute:`thumb-alignment`})],Bo.prototype,`thumbAlignment`,void 0),n([s({attribute:`cover-src`})],Bo.prototype,`coverSrc`,void 0),n([f()],Bo.prototype,`_coverFailed`,void 0),n([s({type:Array})],Bo.prototype,`luminance`,void 0),customElements.get(`craft-card`)||customElements.define(`craft-card`,Bo);var Vo=(e,t)=>{class n extends e{constructor(...e){super(...e),this.__ssrNameAdopted=!1}connectedCallback(){this.__adoptSlottedName(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedName(),super.willUpdate(e)}__adoptSlottedName(){if(this.__ssrNameAdopted||this.name)return;let e=this.querySelector(`input[type="${t}"][name]`);e&&(this.__ssrNameAdopted=!0,this.name=e.name)}}return n},Ho=class extends hi(yi(u)){constructor(){super(),this.multipleChoice=!0}},Uo=class extends _i(bi){connectedCallback(){super.connectedCallback(),this.type=`checkbox`}},Wo=class extends Uo{static get styles(){return[...super.styles||[],a`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:`mixed-state`}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState=`indeterminate`:this._oldState=this.checked?`checked`:`unchecked`}_setOwnCheckedState(){let e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;let t=e.filter(e=>e.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;let n=e.filter(e=>e.disabled&&e.checked===!1);this.checked=e.length-t.length-n.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case`checked`:this.checked=!1,this.indeterminate=!1;break;case`unchecked`:this.checked=!1,this.indeterminate=!0;break;case`indeterminate`:this.checked=!0,this.indeterminate=!1;break}}__onModelValueChanged(e){if(!this.disabled){if(e.detail.formPath[0]===this&&!this.__settingOwnChecked){this.mixedState&&!(e=>e.every(t=>t===e[0]))(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;let e=this._subCheckboxes,t=e.filter(e=>e.checked),n=e.filter(e=>e.disabled),r=e.length>0&&e.length===t.length;e.length>0&&e.length===n.length&&(this.checked=r),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((e,t)=>{e.checked=this._indeterminateSubStates[t]}):this._subCheckboxes.filter(e=>!e.disabled).forEach(e=>{e.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}else this._setOwnCheckedState(),this.updateComplete.then(()=>{!this.__settingOwnSubs&&!this.__settingOwnChecked&&this.mixedState&&this._storeIndeterminateState()});this.mixedState&&this._setOldState()}}_afterTemplate(){return p`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){e.target.hasAttribute(`role`)||e.target?.setAttribute(`role`,`listitem`),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){e.target.getAttribute(`role`)===`listitem`&&e.target?.removeAttribute(`role`),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){let t=this.__subCheckboxes.indexOf(e);t!==-1&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener(`model-value-changed`,this.__onModelValueChanged),this.addEventListener(`form-element-register`,this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`model-value-changed`,this.__onModelValueChanged),this.removeEventListener(`form-element-register`,this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has(`indeterminate`)||e.has(`checked`))&&(this._inputNode.indeterminate=this.indeterminate)}},Go=class extends nr(Vo(Ho,`checkbox`)){static get styles(){return[...Ho.styles,a`
        ${Un}

        .input-group {
          display: grid;
          gap: var(--c-spacing-sm);
        }

        ::slotted(label) {
          font-weight: bold;
        }
      `]}};customElements.get(`craft-checkbox-group`)||customElements.define(`craft-checkbox-group`,Go);var Ko=e=>{class t extends e{constructor(...e){super(...e),this.__ssrStateAdopted=!1}set value(e){e===``&&!this.__ssrStateAdopted&&this.__slottedInput()?.hasAttribute(`value`)||(super.value=e)}get value(){return super.value}connectedCallback(){this.__adoptSlottedInputState(),super.connectedCallback()}_toggleChecked(e){let n=this,r=n._inputNode;if(!this.disabled){if(!(r instanceof HTMLInputElement)){Object.getPrototypeOf(t.prototype)._toggleChecked?.call(this,e);return}n._isHandlingUserInput=!0,this.checked=r.checked,n._isHandlingUserInput=!1}}willUpdate(e){this.__adoptSlottedInputState(),super.willUpdate(e)}updated(e){super.updated(e);let{_inputNode:t}=this,n=this.choiceValue;typeof n==`string`&&n!==``&&t instanceof HTMLInputElement&&t.value!==n&&(t.value=n)}__slottedInput(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`input`)}__adoptSlottedInputState(){if(this.__ssrStateAdopted)return;let e=this.__slottedInput();if(!e)return;this.__ssrStateAdopted=!0,e.id&&(this._inputId=e.id),!this.name&&e.name&&(this.name=e.name);let t=e.getAttribute(`value`)??e.value;t&&(this.choiceValue=t,e.value=t),e.checked&&(this.checked=!0),e.disabled&&(this.disabled=!0)}}return t},qo=new WeakSet,Jo=class extends Ko(Wo){constructor(...e){super(...e),_(this,qo),this.allMode=`single-value`}updated(e){super.updated(e),(e.has(`checked`)||e.has(`allMode`))&&b(qo,this,Yo).call(this)}static get styles(){return[...Wo.styles,a`
        :host {
          display: flex;
          align-items: center;
          gap: 0 var(--c-spacing-md);
        }

        ::slotted(label) {
          font-weight: bold;
        }

        ::slotted(*) {
          padding-inline-start: 0;
        }
      `]}};function Yo(){let e=this.allMode===`single-value`&&this.checked;for(let t of this._subCheckboxes??[]){let n=t.querySelector(`:scope > input[slot="input"]`);n&&(e?n.name&&(n.dataset.governedName=n.name,n.removeAttribute(`name`)):n.dataset.governedName&&(n.name=n.dataset.governedName,delete n.dataset.governedName))}}n([s({reflect:!0,attribute:`all-mode`})],Jo.prototype,`allMode`,void 0),customElements.get(`craft-checkbox-indeterminate`)||customElements.define(`craft-checkbox-indeterminate`,Jo);var Xo=class extends Ko(Uo){constructor(...e){super(...e),this.__inputPatched=!1,this.indeterminate=!1}connectedCallback(){super.connectedCallback(),this.__patchSlottedInputProps()}updated(e){super.updated(e),this.__patchSlottedInputProps();let t=this._inputNode;t&&(t.indeterminate=this.indeterminate)}__patchSlottedInputProps(){if(this.__inputPatched)return;let e=this.__slottedInputElement();if(!e)return;this.__inputPatched=!0;let t=this;for(let n of[`checked`,`disabled`]){let r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,n);if(!r?.get||!r.set)continue;let{get:i,set:a}=r;Object.defineProperty(e,n,{configurable:!0,enumerable:r.enumerable,get(){return i.call(this)},set(e){a.call(this,e),t[n]!==e&&(t[n]=e)}})}}__slottedInputElement(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`input`)}static get styles(){return[...Uo.styles,a`
        /* same as radio, potentially consolidate */
        :host(:not([label-sr-only])) {
          --_gap-x: var(--gap-x, var(--c-spacing-md));
          display: grid;
          align-items: center;
          gap: 0 var(--_gap-x);
          grid-template-areas: 'input label' '. help-text';
          grid-template-columns: auto 1fr;
          grid-template-rows: repeat(2, auto);
        }

        /*
         * Choice inputs render their label/help-text in \`.choice-field__*\`, so
         * Lion's built-in \`label-sr-only\` rule (which targets
         * \`.form-field__label\`) never matches. When the label is hidden we also
         * hide the help text, but both stay available to screen readers: Lion
         * associates the help text with the input via \`aria-describedby\`, and we
         * clip rather than use \`display:none\`/\`visibility:hidden\` so the content
         * remains in the accessibility tree (WCAG 1.3.1 / 4.1.2). \`white-space:
         * nowrap\` avoids clipped multi-line text being announced oddly, and the
         * \`:not(:focus-within)\` guard reveals any focusable help-text content
         * (e.g. links) when focused (WCAG 2.4.7).
         */
        :host([label-sr-only]) .choice-field__label,
        :host([label-sr-only]) .choice-field__help-text:not(:focus-within) {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }

        ::slotted(label) {
          font: inherit;
          grid-area: label;
        }

        .choice-field__help-text {
          font-size: 1em;
          color: var(--c-text-quiet);
          grid-area: help-text;
        }
      `]}};n([s({type:Boolean,reflect:!0})],Xo.prototype,`indeterminate`,void 0),customElements.get(`craft-checkbox`)||customElements.define(`craft-checkbox`,Xo);var Zo=a`
  /* Square, so it sits close to neighboring icon buttons */
  craft-button {
    cursor: move;
    padding-inline: 0;
  }

  /* The move icon reads small next to other icons at craft-icon's 0.8em */
  craft-icon {
    font-size: 1.2em;
  }

  /* Between the reorder actions and the moves. */
  .separator {
    margin: 0;
    border: 0;
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
  }

  :host([disabled]) {
    cursor: default;
    opacity: 0.25;
    pointer-events: none;
  }
`,Qo=class extends u{constructor(){super(),this.label=null,this.position=`middle`,this.orientation=`vertical`,this.moves=[],this.variant=`plain`,this.disabled=!1,this.nested=!1,this.canIndent=!1,this.canOutdent=!1,this._hasFocus=!1,this._movedWhileFocused=!1,this._stopMenuEvent=e=>{e.target===e.currentTarget&&e.stopPropagation()},this.addEventListener(`focusin`,()=>{this._hasFocus=!0}),this.addEventListener(`focusout`,e=>{let t=e.relatedTarget;t instanceof Node&&!this.contains(t)?this._hasFocus=!1:t||setTimeout(()=>{this.isConnected&&!this.matches(`:focus-within`)&&(this._hasFocus=!1)})})}connectedCallback(){if(super.connectedCallback(),!this._movedWhileFocused)return;this._movedWhileFocused=!1;let e=document.activeElement;(!e||e===document.body)&&this._focusInvoker()}disconnectedCallback(){super.disconnectedCallback(),this._hasFocus&&(this._movedWhileFocused=!0,setTimeout(()=>{this._movedWhileFocused=!1,this.isConnected||(this._hasFocus=!1)}))}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`))}_focusInvoker(){this.shadowRoot?.querySelector(`craft-button`)?.focus()}_canMove(e){switch(e){case`up`:return this.position!==`first`&&this.position!==`only`;case`down`:return this.position!==`last`&&this.position!==`only`;case`indent`:return this.nested&&this.canIndent;case`outdent`:return this.nested&&this.canOutdent}}_reorder(e){this.disabled||!this._canMove(e)||(this.matches(`:focus-within`)&&this._focusInvoker(),this.dispatchEvent(new CustomEvent(`craft-reorder`,{detail:{direction:e},bubbles:!0,composed:!0})))}_move(e){this.disabled||this.dispatchEvent(new CustomEvent(`craft-move`,{detail:{value:e},bubbles:!0,composed:!0}))}_isRtl(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}render(){let e=this.label??S(`Reorder`),t=this.orientation===`horizontal`,n=t&&this._isRtl(),i=t?n?`arrow-right`:`arrow-left`:`arrow-up`,a=t?n?`arrow-left`:`arrow-right`:`arrow-down`,o=S(t?`Move forward`:`Move up`),s=S(t?`Move backward`:`Move down`);return p`
      <craft-action-menu
        ?disabled="${this.disabled}"
        @craft-show=${this._stopMenuEvent}
        @craft-hide=${this._stopMenuEvent}
        @craft-after-show=${this._stopMenuEvent}
        @craft-after-hide=${this._stopMenuEvent}
        @craft-select=${this._stopMenuEvent}
      >
        <craft-button
          slot="invoker"
          type="button"
          icon
          inherit
          size="small"
          variant="${this.variant}"
          ?disabled="${this.disabled}"
        >
          <craft-icon label="${e}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M71.3 295.6c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2-57.4 21.9-79.2 0Zm113.1-113.1c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.8-79.2 0Zm0 147c21.9-21.9 57.3-21.9 79.2 0 21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.9-21.8-21.9-57.3 0-79.2Zm113.1-113.1c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2-57.3 21.9-79.2 0c-21.8-21.9-21.8-57.3 0-79.2Z"
              />
            </svg>
          </craft-icon>
        </craft-button>

        <div slot="content">
          <craft-action-item
            icon="${i}"
            ?disabled="${!this._canMove(`up`)}"
            @click="${()=>this._reorder(`up`)}"
            data-action="moveUp"
            command="--move-up"
            >${o}</craft-action-item
          >
          <craft-action-item
            icon="${a}"
            ?disabled="${!this._canMove(`down`)}"
            @click="${()=>this._reorder(`down`)}"
            data-action="moveDown"
            command="--move-down"
            >${s}</craft-action-item
          >
          ${this.nested?p`
                <craft-action-item
                  icon="${this._isRtl()?`arrow-left`:`arrow-right`}"
                  ?disabled="${!this._canMove(`indent`)}"
                  @click="${()=>this._reorder(`indent`)}"
                  data-action="indent"
                  >${S(`Indent`)}</craft-action-item
                >
                <craft-action-item
                  icon="${this._isRtl()?`arrow-right`:`arrow-left`}"
                  ?disabled="${!this._canMove(`outdent`)}"
                  @click="${()=>this._reorder(`outdent`)}"
                  data-action="outdent"
                  >${S(`Outdent`)}</craft-action-item
                >
              `:r}
          ${this.moves.length>0?p`
                <hr class="separator" />
                ${this.moves.map(e=>p`
                    <craft-action-item
                      icon="${ft(e.icon??void 0)}"
                      @click="${()=>this._move(e.value)}"
                      >${e.label}</craft-action-item
                    >
                  `)}
              `:r}
        </div>
      </craft-action-menu>
    `}};Qo.styles=[Zo],n([s()],Qo.prototype,`label`,void 0),n([s({reflect:!0})],Qo.prototype,`position`,void 0),n([s({reflect:!0})],Qo.prototype,`orientation`,void 0),n([s({attribute:!1})],Qo.prototype,`moves`,void 0),n([s({reflect:!0})],Qo.prototype,`variant`,void 0),n([s({reflect:!0,type:Boolean})],Qo.prototype,`disabled`,void 0),n([s({reflect:!0,type:Boolean})],Qo.prototype,`nested`,void 0),n([s({attribute:`can-indent`,type:Boolean})],Qo.prototype,`canIndent`,void 0),n([s({attribute:`can-outdent`,type:Boolean})],Qo.prototype,`canOutdent`,void 0),customElements.get(`craft-reorder-button`)||customElements.define(`craft-reorder-button`,Qo);var $o=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},es=ke(class extends Ae{constructor(e){if(super(e),e.type!==Oe.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=ve(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],l=[],u,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])l[m]=he(i[f],a[m]),f++,m++;else if(s[p]===o[h])l[h]=he(i[p],a[h]),p--,h--;else if(s[f]===o[h])l[h]=he(i[f],a[h]),me(e,l[h+1],i[f]),f++,h--;else if(s[p]===o[m])l[m]=he(i[p],a[m]),me(e,i[f],i[p]),p--,m++;else if(u===void 0&&(u=$o(o,m,h),d=$o(s,f,p)),u.has(s[f]))if(u.has(s[p])){let t=d.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=me(e,i[f]);he(t,a[m]),l[m]=t}else l[m]=he(n,a[m]),me(e,i[f],n),i[t]=null;m++}else ye(i[p]),p--;else ye(i[f]),f++;for(;m<=h;){let t=me(e,l[h+1]);he(t,a[m]),l[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&ye(e)}return this.ut=o,_e(e,l),c}}),ts=new WeakMap,ns=new WeakMap,rs=new WeakMap,is=new WeakMap,as=new WeakMap,os=new WeakSet,ss=new WeakMap,cs=new WeakMap,ls=new WeakMap,us=new WeakMap,ds=class{constructor(e,t){_(this,os),this.draggingIndex=null,this.dropIndex=null,y(this,ts,void 0),y(this,ns,void 0),y(this,rs,[]),y(this,is,[]),y(this,as,null),y(this,ss,e=>{let t=g(as,this);if(!(!t||e.pointerId!==t.pointerId)){if(this.draggingIndex===null){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<4)return;b(os,this,hs).call(this,t.index,null)}e.preventDefault(),b(os,this,hs).call(this,this.draggingIndex,b(os,this,ms).call(this,e))}}),y(this,cs,e=>{let t=g(as,this);if(!t||e.pointerId!==t.pointerId)return;let n=this.draggingIndex,r=this.dropIndex,i=n!==null;if(b(os,this,ps).call(this),!i)return;let a=e=>{e.preventDefault(),e.stopImmediatePropagation()};if(t.handle.addEventListener(`click`,a,{capture:!0,once:!0}),setTimeout(()=>t.handle.removeEventListener(`click`,a,!0)),r!==null){let e=r>n?r-1:r;e!==n&&g(ns,this).onReorder(n,e)}}),y(this,ls,e=>{e.pointerId===g(as,this)?.pointerId&&b(os,this,ps).call(this)}),y(this,us,e=>{e.key===`Escape`&&this.draggingIndex!==null&&(e.preventDefault(),e.stopPropagation(),b(os,this,ps).call(this))}),v(ts,this,e),v(ns,this,t),e.addController(this)}hostDisconnected(){b(os,this,ps).call(this),this.setItems([])}setItems(e){for(let e of g(is,this))e();v(rs,this,e),v(is,this,e.map(({element:e,handle:t},n)=>{let r=t??e,i=e=>b(os,this,fs).call(this,e,n,r);return r.addEventListener(`pointerdown`,i),()=>r.removeEventListener(`pointerdown`,i)}))}};function fs(e,t,n){e.button!==0||e.pointerType===`touch`||g(as,this)||n.matches(`[disabled]`)||(v(as,this,{index:t,pointerId:e.pointerId,handle:n,x:e.clientX,y:e.clientY}),window.addEventListener(`pointermove`,g(ss,this)),window.addEventListener(`pointerup`,g(cs,this)),window.addEventListener(`pointercancel`,g(ls,this)),window.addEventListener(`keydown`,g(us,this),!0))}function ps(){v(as,this,null),window.removeEventListener(`pointermove`,g(ss,this)),window.removeEventListener(`pointerup`,g(cs,this)),window.removeEventListener(`pointercancel`,g(ls,this)),window.removeEventListener(`keydown`,g(us,this),!0),b(os,this,hs).call(this,null,null)}function ms(e){let t=g(rs,this).length;for(let[n,{element:r}]of g(rs,this).entries()){let i=r.getBoundingClientRect();if(e.clientY<i.top+i.height/2){t=n;break}}let n=this.draggingIndex;return n!==null&&(t===n||t===n+1)?null:t}function hs(e,t){(e!==this.draggingIndex||t!==this.dropIndex)&&(this.draggingIndex=e,this.dropIndex=t,g(ts,this).requestUpdate())}var gs=a`
  ${se}

  :host {
    display: block;
  }

  :host([hidden]) {
    display: none;
  }

  .label {
    margin-block-end: var(--c-spacing-sm);
    font-weight: bold;
  }

  .group {
    display: grid;
    justify-items: start;
    gap: var(--c-checkbox-group-spacing, var(--c-spacing-sm));
  }

  ::slotted(.all) {
    font-weight: bold;
  }

  .items {
    display: grid;
    gap: var(--c-checkbox-group-spacing, var(--c-spacing-sm));
    justify-self: stretch;
  }

  :host([presentation='add-menu']) .items {
    gap: var(--c-spacing-xs);
  }

  .row {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: var(--c-spacing-sm);
  }

  .row ::slotted(*) {
    flex: 1;
    min-width: 0;
  }

  .row--dragging {
    opacity: 0.4;
  }

  .row[data-drop]::before {
    content: '';
    position: absolute;
    inset-inline: 0;
    border-block-start: calc(2rem / 16) solid
      var(--c-color-accent-fill-loud, #2563eb);
    pointer-events: none;
  }

  .row[data-drop='before']::before {
    inset-block-start: calc(var(--c-spacing-xs) * -1);
  }

  .row[data-drop='after']::before {
    inset-block-end: calc(var(--c-spacing-xs) * -1);
  }

  .handle {
    flex: none;
    color: var(--c-text-quiet);
  }

  .row__label {
    display: grid;
    min-width: 0;
  }

  .row__info {
    color: var(--c-text-quiet);
    font-size: var(--c-text-sm);
  }

  .remove {
    flex: none;
  }
`,_s=`governedName`,vs=`disabledByGroup`,ys=0,bs=new WeakMap,xs=new WeakMap,Ss=new WeakMap,Cs=new WeakMap,R=new WeakSet,ws=new WeakMap,Ts=new WeakMap,Es=class extends u{get options(){return b(R,this,Js).call(this).map(e=>b(R,this,qs).call(this,e))}set options(e){let t=b(R,this,Js).call(this),n=new Set(e.map(e=>String(e.value)));for(let e of t)n.has(b(R,this,nc).call(this,e))||e.remove();let r=[],i=b(R,this,Xs).call(this)??b(R,this,$s).call(this);for(let t of e){let e=b(R,this,Ys).call(this,String(t.value));e||(e=b(R,this,Gs).call(this,t),r.push(e)),b(R,this,Ks).call(this,e,t),i?i.after(e):this.prepend(e),i=e}if(b(R,this,Qs).call(this)&&b(R,this,Zs).call(this)?.checked){for(let e of r)b(R,this,Ls).call(this,e,!0);b(R,this,zs).call(this)}this.requestUpdate(`options`)}get modelValue(){return b(R,this,Qs).call(this)&&b(R,this,Zs).call(this)?.checked?[this.allValue]:b(R,this,Js).call(this).filter(e=>b(R,this,tc).call(this,e)?.checked).map(e=>b(R,this,nc).call(this,e))}set modelValue(e){this.allLabel&&!b(R,this,Xs).call(this)&&(b(R,this,Us).call(this),b(R,this,Ws).call(this));let t=new Set((e??[]).map(String)),n=b(R,this,Qs).call(this)&&t.has(this.allValue);for(let e of b(R,this,Js).call(this)){let r=b(R,this,tc).call(this,e);r&&!r.disabled&&(r.checked=n||t.has(b(R,this,nc).call(this,e)))}let r=b(R,this,Zs).call(this);r&&b(R,this,Qs).call(this)&&(r.checked=n),b(R,this,zs).call(this),this.requestUpdate(`modelValue`)}addOption(e,t){let n=b(R,this,Ys).call(this,String(e.value))??b(R,this,Gs).call(this,e);b(R,this,Ks).call(this,n,e);let r=b(R,this,Js).call(this).filter(e=>e!==n),i=t===void 0?null:r[t]??null,a=r.at(-1)??b(R,this,Xs).call(this)??b(R,this,$s).call(this);i?i.before(n):a?a.after(n):this.prepend(n),b(R,this,Qs).call(this)&&b(R,this,Zs).call(this)?.checked&&(b(R,this,Ls).call(this,n,!0),b(R,this,zs).call(this)),this.requestUpdate()}removeOption(e){b(R,this,Ys).call(this,String(e))?.remove(),this.requestUpdate()}updateOption(e,t){let n=b(R,this,Ys).call(this,String(e));n&&(b(R,this,Ks).call(this,n,{...b(R,this,qs).call(this,n),...t}),b(R,this,Bs).call(this),b(R,this,zs).call(this),this.requestUpdate())}constructor(){super(),_(this,R),this.name=null,this.label=null,this.disabled=!1,this.sortable=!1,this.presentation=`checkboxes`,this.allLabel=null,this.allValue=`*`,this.allMode=`single-value`,this._revision=0,this._status=``,y(this,bs,new WeakMap),y(this,xs,new ds(this,{onReorder:(e,t)=>b(R,this,Is).call(this,e,t)})),y(this,Ss,null),y(this,Cs,null),y(this,ws,e=>{let t=e.target;!(t instanceof HTMLInputElement)||t.type!==`checkbox`||(t===b(R,this,Zs).call(this)?b(R,this,Rs).call(this,t.checked):b(R,this,zs).call(this),this.requestUpdate(),b(R,this,Vs).call(this))}),y(this,Ts,e=>{e.target!==this&&e.stopImmediatePropagation()}),this.addEventListener(`model-value-changed`,g(Ts,this));for(let e of[`options`,`modelValue`])if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],queueMicrotask(()=>{this[e]=t})}}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,g(ws,this)),v(Ss,this,new MutationObserver(()=>b(R,this,Hs).call(this))),g(Ss,this).observe(this,{childList:!0,subtree:!0,characterData:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`change`,g(ws,this)),g(Ss,this)?.disconnect(),v(Ss,this,null)}willUpdate(e){(e.has(`name`)||e.has(`allLabel`)||e.has(`allMode`))&&(b(R,this,Us).call(this),b(R,this,Ws).call(this)),e.has(`disabled`)&&b(R,this,Bs).call(this),(e.has(`allMode`)||e.has(`allLabel`))&&b(R,this,zs).call(this);for(let e of b(R,this,Js).call(this))g(bs,this).has(e)||g(bs,this).set(e,`item-${ys++}`),e.slot=g(bs,this).get(e);b(R,this,Xs).call(this)?.setAttribute(`slot`,`all`)}updated(){g(xs,this).setItems(b(R,this,js).call(this).flatMap(e=>{let t=b(R,this,ec).call(this,e);return t?[{element:t,handle:t.querySelector(`craft-reorder-button`)}]:[]}));let e=g(Cs,this);v(Cs,this,null),e&&b(R,this,Ds).call(this,e)}render(){this._revision;let e=b(R,this,As).call(this),t=b(R,this,Ms).call(this),n=b(R,this,js).call(this);return p`
      ${this.label?p`<div id="label" class="label" part="label">${this.label}</div>`:r}
      <div
        class="group"
        part="group"
        role=${this.label?`group`:r}
        aria-labelledby=${this.label?`label`:r}
      >
        <slot name="all"></slot>
        ${e.length?p`<div class="items" part="items">
              ${es(e,e=>g(bs,this).get(e),e=>b(R,this,Os).call(this,e,n))}
            </div>`:r}
        ${this.presentation===`add-menu`&&t.length&&!this.disabled?p`<craft-action-menu
              class="add"
              part="add-menu"
              ?searchable=${t.length>10}
              .actions=${()=>b(R,this,Ns).call(this)}
            >
              <craft-button
                slot="invoker"
                type="button"
                size="small"
                variant="dashed"
              >
                <craft-icon name="plus" slot="prefix"></craft-icon>
                ${S(`Add item`)}
              </craft-button>
            </craft-action-menu>`:r}
      </div>
      <span class="cp-visually-hidden" role="status">${this._status}</span>
      <slot hidden></slot>
    `}};async function Ds(e){let t=e();await t?.updateComplete,t?.localName===`craft-reorder-button`&&(t=t.shadowRoot?.querySelector(`craft-button`)??t,await t.updateComplete),t?.focus()}function Os(e,t){let n=g(bs,this).get(e),i=t.indexOf(e),a=i!==-1,o=a&&g(xs,this).draggingIndex===i,s=g(xs,this).dropIndex,c=b(R,this,qs).call(this,e),l=this.presentation===`add-menu`;return p`<div
      class="row ${o?`row--dragging`:``}"
      part="row"
      data-key=${n}
      data-drop=${s===i?`before`:s===i+1&&i===t.length-1?`after`:r}
    >
      ${this.sortable?p`<craft-reorder-button
            class="handle"
            position=${b(R,this,ks).call(this,i,t.length)}
            ?disabled=${!a||t.length<2}
            @craft-reorder=${e=>b(R,this,Is).call(this,i,i+(e.detail.direction===`up`?-1:1),!0)}
          ></craft-reorder-button>`:r}
      ${l?p`<span class="row__label">
              ${c.labelHtml===void 0?c.label:Me(c.labelHtml)}
              ${c.info?p`<span class="row__info"
                    >${Me(c.info)}</span
                  >`:r}
            </span>
            ${!c.disabled&&!this.disabled?p`<craft-button
                  class="remove"
                  type="button"
                  icon="xmark"
                  size="small"
                  variant="plain"
                  aria-label=${S(`Remove {name}`,{name:c.label})}
                  @click=${()=>b(R,this,Fs).call(this,e)}
                ></craft-button>`:r}`:p`<slot name=${n}></slot>`}
    </div>`}function ks(e,t){return t<2?`only`:e<=0?`first`:e===t-1?`last`:`middle`}function As(){let e=b(R,this,Js).call(this);return this.presentation===`add-menu`?b(R,this,Zs).call(this)?.checked?[]:e.filter(e=>b(R,this,tc).call(this,e)?.checked):e}function js(){return!this.sortable||this.disabled?[]:b(R,this,As).call(this).filter(e=>!b(R,this,tc).call(this,e)?.disabled)}function Ms(){return b(R,this,Zs).call(this)?.checked?[]:b(R,this,Js).call(this).filter(e=>{let t=b(R,this,tc).call(this,e);return t&&!t.checked&&!t.disabled})}function Ns(){return b(R,this,Ms).call(this).map(e=>({label:b(R,this,rc).call(this,e),onClick:()=>b(R,this,Ps).call(this,e)}))}function Ps(e){let t=b(R,this,As).call(this).at(-1);t&&t!==e&&t.after(e),b(R,this,Ls).call(this,e,!0,!0),this._status=S(`Added {name}`,{name:b(R,this,rc).call(this,e)}),b(R,this,Ms).call(this).length||v(Cs,this,()=>b(R,this,ec).call(this,e)?.querySelector(`.remove`))}function Fs(e){let t=b(R,this,As).call(this),n=t.indexOf(e),r=[...t.slice(n+1),...t.slice(0,n).reverse()].find(e=>!b(R,this,tc).call(this,e)?.disabled);b(R,this,Ls).call(this,e,!1,!0),this._status=S(`Removed {name}`,{name:b(R,this,rc).call(this,e)}),v(Cs,this,()=>(r&&b(R,this,ec).call(this,r)?.querySelector(`.remove`))??this.renderRoot.querySelector(`.add craft-button[slot="invoker"]`))}function Is(e,t,n=!1){let r=b(R,this,js).call(this),i=r[e],a=r[t];!i||!a||i===a||(t>e?a.after(i):a.before(i),this._status=S(`Moved {name} to position {position}`,{name:b(R,this,rc).call(this,i),position:t+1}),n&&v(Cs,this,()=>b(R,this,ec).call(this,i)?.querySelector(`craft-reorder-button`)),this.requestUpdate(),this.dispatchEvent(new CustomEvent(`craft-order-change`,{bubbles:!0,composed:!0,detail:{value:b(R,this,nc).call(this,i),index:t}})),b(R,this,Vs).call(this))}function Ls(e,t,n=!1){let r=b(R,this,tc).call(this,e);!r||r.checked===t||(r.checked=t,n&&r.dispatchEvent(new Event(`change`,{bubbles:!0})))}function Rs(e){for(let t of b(R,this,Js).call(this))b(R,this,tc).call(this,t)?.disabled||b(R,this,Ls).call(this,t,e);b(R,this,zs).call(this)}function zs(){let e=b(R,this,Xs).call(this),t=b(R,this,Zs).call(this),n=b(R,this,Js).call(this).filter(e=>!b(R,this,tc).call(this,e)?.disabled),r=n.filter(e=>b(R,this,tc).call(this,e)?.checked).length,i=b(R,this,Qs).call(this)&&n.length===0;if(e&&t&&!i){let i=n.length>0&&r===n.length;t.checked=i;let a=e.querySelector(`craft-checkbox`);a&&(a.indeterminate=r>0&&!i)}let a=b(R,this,Qs).call(this)&&!!t?.checked;for(let e of b(R,this,Js).call(this)){let t=b(R,this,tc).call(this,e);t&&(a?t.name&&(t.dataset[_s]=t.name,t.removeAttribute(`name`)):t.dataset[_s]!==void 0&&(t.name=t.dataset[_s],delete t.dataset[_s]))}}function Bs(){for(let e of this.querySelectorAll(`:scope > .cp-checkbox-select__item input[type="checkbox"]`))this.disabled&&!e.disabled?(e.disabled=!0,e.dataset[vs]=``):!this.disabled&&e.dataset[vs]!==void 0&&(e.disabled=!1,delete e.dataset[vs])}function Vs(){this.dispatchEvent(new Event(`model-value-changed`,{bubbles:!0,composed:!0}))}function Hs(){this._revision++}function Us(){let e=b(R,this,$s).call(this);if(!this.name){e?.remove();return}if(e){e.name=this.name;return}let t=document.createElement(`input`);t.type=`hidden`,t.name=this.name,t.value=``,t.dataset.empty=``,this.prepend(t)}function Ws(){let e=b(R,this,Xs).call(this);if(!this.allLabel){e?.remove();return}let t=e??b(R,this,Gs).call(this,{value:this.allValue,label:this.allLabel});t.classList.add(`all`);let n=b(R,this,tc).call(this,t);n.value=this.allValue,e||(t.dataset.generated=``),t.dataset.generated!==void 0&&(this.allMode===`single-value`&&this.name?n.name=`${this.name}[]`:n.removeAttribute(`name`));let r=t.querySelector(`label`);if(r&&r.textContent!==this.allLabel&&(r.textContent=this.allLabel),!e){let e=b(R,this,$s).call(this);e?e.after(t):this.prepend(t)}}function Gs(e){let t=`${this.id||`checkbox-select`}-${ys++}`,n=document.createElement(`div`);n.className=`cp-checkbox-select__item`;let r=document.createElement(`craft-checkbox`),i=document.createElement(`input`);i.type=`checkbox`,i.className=`checkbox`,i.slot=`input`,i.id=t,i.value=String(e.value),this.name&&(i.name=`${this.name}[]`);let a=document.createElement(`label`);return a.slot=`label`,a.htmlFor=t,a.id=`${t}-label`,r.append(i,a),n.append(r),n}function Ks(e,t){let n=b(R,this,tc).call(this,e),r=e.querySelector(`craft-checkbox > label`);n&&(t.checked!==void 0&&(n.checked=t.checked),t.disabled!==void 0&&(n.disabled=t.disabled,delete n.dataset[vs])),r&&(t.labelHtml===void 0?r.textContent!==t.label&&(r.textContent=t.label):r.innerHTML!==t.labelHtml&&(r.innerHTML=t.labelHtml),r.dataset.label=t.label);let i=e.querySelector(`craft-checkbox`),a=i?.querySelector(`:scope > [slot="help-text"][data-info]`);t.info?(a||(a=document.createElement(`div`),a.slot=`help-text`,a.dataset.info=``,i?.append(a)),a.innerHTML!==t.info&&(a.innerHTML=t.info)):a?.remove()}function qs(e){let t=b(R,this,tc).call(this,e),n=e.querySelector(`craft-checkbox > label, :scope > label`),r=e.querySelector(`[slot="help-text"][data-info]`);return{value:b(R,this,nc).call(this,e),label:b(R,this,rc).call(this,e),...n?.children.length?{labelHtml:n.innerHTML}:{},...r?{info:r.innerHTML}:{},checked:!!t?.checked,disabled:!!t?.disabled&&t.dataset[vs]===void 0}}function Js(){return Array.from(this.querySelectorAll(`:scope > .cp-checkbox-select__item`)).filter(e=>!e.classList.contains(`all`))}function Ys(e){return b(R,this,Js).call(this).find(t=>b(R,this,nc).call(this,t)===e)}function Xs(){return this.querySelector(`:scope > .cp-checkbox-select__item.all`)}function Zs(){let e=b(R,this,Xs).call(this);return e?b(R,this,tc).call(this,e):null}function Qs(){return!!b(R,this,Xs).call(this)&&this.allMode===`single-value`}function $s(){return this.querySelector(`:scope > input[type="hidden"][data-empty]`)}function ec(e){let t=g(bs,this).get(e);return t?this.renderRoot.querySelector(`.row[data-key="${t}"]`):null}function tc(e){return e.querySelector(`input[type="checkbox"]`)}function nc(e){let t=b(R,this,tc).call(this,e);return t?.getAttribute(`value`)??t?.value??``}function rc(e){let t=e.querySelector(`craft-checkbox > label, :scope > label`);return t?.dataset.label??t?.textContent?.trim()??``}Es.styles=[gs],n([s()],Es.prototype,`name`,void 0),n([s()],Es.prototype,`label`,void 0),n([s({type:Boolean,reflect:!0})],Es.prototype,`disabled`,void 0),n([s({type:Boolean,reflect:!0})],Es.prototype,`sortable`,void 0),n([s({reflect:!0})],Es.prototype,`presentation`,void 0),n([s({attribute:`all-label`})],Es.prototype,`allLabel`,void 0),n([s({attribute:`all-value`})],Es.prototype,`allValue`,void 0),n([s({attribute:`all-mode`,reflect:!0})],Es.prototype,`allMode`,void 0),n([f()],Es.prototype,`_revision`,void 0),n([f()],Es.prototype,`_status`,void 0),customElements.get(`craft-checkbox-select`)||customElements.define(`craft-checkbox-select`,Es);var ic=new Map;async function ac(e,t,n=!1,r=null){let i=[],a=[],o=()=>{for(let e of i)e.remove();a.forEach(e=>e())};if(!e)return o;let s=document.createElement(`template`);s.innerHTML=e.trim();try{for(let e of s.content.childNodes){let o=sc(e);if(o){let e=ic.get(o.key);if(e){e.references++,a.push(()=>dc(o.key,e)),e.loaded&&await uc(e.loaded,n);continue}if(cc(o))continue}let s=oc(e),c=o&&s instanceof HTMLScriptElement?lc(s,o.value):null;if(r?t.insertBefore(s,r):t.appendChild(s),o&&(s instanceof HTMLLinkElement||s instanceof HTMLScriptElement)){let e={node:s,loaded:c,references:1};ic.set(o.key,e),a.push(()=>dc(o.key,e))}else i.push(s);c&&await uc(c,n)}return o}catch(e){throw o(),e}}function oc(e){if(!(e instanceof HTMLScriptElement))return e.cloneNode(!0);let t=document.createElement(`script`);for(let n of e.attributes)t.setAttribute(n.name,n.value);return t.textContent=e.textContent,t.async=!1,t}function sc(e){return e instanceof HTMLLinkElement&&e.href?{key:`link:${e.href}`,selector:`link[href]`,value:e.href}:e instanceof HTMLScriptElement&&e.src?{key:`script:${e.src}`,selector:`script[src]`,value:e.src}:null}function cc(e){return Array.from(document.querySelectorAll(e.selector)).some(t=>(t instanceof HTMLLinkElement?t.href:t.src)===e.value)}function lc(e,t){return new Promise((n,r)=>{e.addEventListener(`load`,()=>n(),{once:!0}),e.addEventListener(`error`,()=>r(Error(`Failed to load asset [${t}].`)),{once:!0})})}async function uc(e,t){try{await e}catch(e){if(t)throw e}}function dc(e,t){t.references--,!(t.references>0)&&(t.node.remove(),ic.delete(e))}async function fc(e){return ac(e,document.head,!1,document.head.querySelector(`meta[name="craft-head-anchor"]`))}async function pc(e){return ac(e,document.body)}function mc(e){return typeof e.checkVisibility==`function`?e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}):e.offsetWidth>0||e.offsetHeight>0}function hc(e){return typeof e==`object`&&!!e&&`checked`in e&&typeof e.checked==`boolean`}function gc(e){return vc(e).toString()}function _c(e,t){let n={};for(let[r,i]of vc(e,t)){let e=n[r];e===void 0?n[r]=i:Array.isArray(e)?e.push(i):n[r]=[e,i]}return n}function vc(e,t){let n=new URLSearchParams,r=e.querySelectorAll(`input[name], select[name], textarea[name]`);for(let e of r)if(!(e.disabled||!e.name||t?.contains(e))&&!(e instanceof HTMLInputElement&&([`file`,`submit`,`button`,`reset`,`image`].includes(e.type)||(e.type===`checkbox`||e.type===`radio`)&&!e.checked))){if(e instanceof HTMLSelectElement&&e.multiple){for(let t of e.selectedOptions)n.append(e.name,t.value);continue}n.append(e.name,e.value)}for(let r of e.querySelectorAll(`*`)){if(!r.tagName.includes(`-`)||t?.contains(r))continue;let e=r.name;if(typeof e!=`string`||e===``||r.disabled===!0||r.querySelector(`input[name], select[name], textarea[name]`))continue;if(hc(r.modelValue)){r.modelValue.checked&&n.append(e,String(r.modelValue.value??``));continue}let i=r.serializedValue??r.value;if(i!=null)if(Array.isArray(i))for(let t of i)n.append(e,String(t));else n.append(e,String(i))}return n}var yc={Á:`A`,á:`a`,Ä:`A`,ä:`a`,À:`A`,à:`a`,Â:`A`,â:`a`,É:`E`,é:`e`,Ë:`E`,ë:`e`,È:`E`,è:`e`,Ê:`E`,ê:`e`,Í:`I`,í:`i`,Ï:`I`,ï:`i`,Ì:`I`,ì:`i`,Î:`I`,î:`i`,Ó:`O`,ó:`o`,Ö:`O`,ö:`o`,Ò:`O`,ò:`o`,Ô:`O`,ô:`o`,Ú:`U`,ú:`u`,Ü:`U`,ü:`u`,Ù:`U`,ù:`u`,Û:`U`,û:`u`,Ý:`Y`,ý:`y`,Ÿ:`Y`,А:`A`,Б:`B`,В:`V`,Г:`G`,Д:`D`,Ѓ:`Gj`,Е:`E`,Ж:`Z`,З:`Z`,Ѕ:`Dz`,И:`I`,Ј:`j`,К:`K`,Л:`L`,Љ:`Lj`,М:`M`,Н:`N`,Њ:`Nj`,О:`O`,П:`P`,Р:`R`,С:`S`,Т:`T`,Ќ:`Kj`,У:`U`,Ф:`F`,Х:`X`,Ц:`C`,Ч:`C`,Џ:`Dz`,Ш:`S`,а:`a`,б:`b`,в:`v`,г:`g`,д:`d`,ѓ:`gj`,е:`e`,ж:`z`,з:`z`,ѕ:`dz`,и:`i`,ј:`j`,к:`k`,л:`l`,љ:`lj`,м:`m`,н:`n`,њ:`nj`,о:`o`,п:`p`,р:`r`,с:`s`,т:`t`,ќ:`kj`,у:`u`,ф:`f`,х:`x`,ц:`c`,ч:`c`,џ:`dz`,ш:`s`,æ:`ae`,ǽ:`ae`,Ã:`A`,Å:`A`,Ǻ:`A`,Ă:`A`,Ǎ:`A`,Æ:`AE`,Ǽ:`AE`,ã:`a`,å:`a`,ǻ:`a`,ă:`a`,ǎ:`a`,ª:`a`,Ĉ:`C`,Ċ:`C`,Ç:`C`,ç:`c`,ĉ:`c`,ċ:`c`,Ð:`D`,Đ:`D`,ð:`d`,đ:`d`,Ĕ:`E`,Ė:`E`,ĕ:`e`,ė:`e`,ƒ:`f`,Ĝ:`G`,Ġ:`G`,ĝ:`g`,ġ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ĭ:`I`,Ǐ:`I`,Į:`I`,Ĳ:`IJ`,ĩ:`i`,ĭ:`i`,ǐ:`i`,į:`i`,ĳ:`ij`,Ĵ:`J`,ĵ:`j`,Ĺ:`L`,Ľ:`L`,Ŀ:`L`,ĺ:`l`,ľ:`l`,ŀ:`l`,Ñ:`N`,ñ:`n`,ŉ:`n`,Õ:`O`,Ō:`O`,Ŏ:`O`,Ǒ:`O`,Ő:`O`,Ơ:`O`,Ø:`O`,Ǿ:`O`,Œ:`OE`,õ:`o`,ō:`o`,ŏ:`o`,ǒ:`o`,ő:`o`,ơ:`o`,ø:`o`,ǿ:`o`,º:`o`,œ:`oe`,Ŕ:`R`,Ŗ:`R`,ŕ:`r`,ŗ:`r`,Ŝ:`S`,Ș:`S`,ŝ:`s`,ș:`s`,ſ:`s`,Ţ:`T`,Ț:`T`,Ŧ:`T`,Þ:`TH`,ţ:`t`,ț:`t`,ŧ:`t`,þ:`th`,Ũ:`U`,Ŭ:`U`,Ű:`U`,Ų:`U`,Ư:`U`,Ǔ:`U`,Ǖ:`U`,Ǘ:`U`,Ǚ:`U`,Ǜ:`U`,ũ:`u`,ŭ:`u`,ű:`u`,ų:`u`,ư:`u`,ǔ:`u`,ǖ:`u`,ǘ:`u`,ǚ:`u`,ǜ:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ÿ:`y`,ŷ:`y`,ΑΥ:`AU`,ΑΎ:`AU`,Αυ:`Au`,Αύ:`Au`,ΕΊ:`I`,ΕΙ:`I`,Ει:`Ei`,ΕΥ:`EF`,ΕΎ:`EU`,Εί:`I`,Ευ:`Ef`,Εύ:`Eu`,ΟΙ:`I`,ΟΊ:`I`,ΟΥ:`U`,ΟΎ:`OU`,Οι:`Oi`,Οί:`I`,Ου:`Oy`,Ού:`Ou`,ΥΙ:`I`,ΎΙ:`I`,Υι:`Yi`,Ύι:`I`,ΥΊ:`I`,Υί:`I`,αυ:`au`,αύ:`au`,εί:`i`,ει:`ei`,ευ:`ef`,εύ:`eu`,οι:`oi`,οί:`i`,ου:`oy`,ού:`ou`,υι:`yi`,ύι:`i`,υί:`i`,Α:`A`,Ά:`A`,Β:`B`,Δ:`D`,Ε:`E`,Έ:`E`,Φ:`F`,Γ:`G`,Η:`H`,Ή:`I`,Ι:`I`,Ί:`I`,Ϊ:`I`,Κ:`K`,Ξ:`Ks`,Λ:`L`,Μ:`M`,Ν:`N`,Π:`P`,Ο:`O`,Ό:`O`,Ψ:`Ps`,Ρ:`R`,Σ:`S`,Τ:`T`,Θ:`Th`,Ω:`O`,Ώ:`W`,Χ:`X`,ϒ:`Y`,Υ:`Y`,Ύ:`Y`,Ϋ:`Y`,Ζ:`Z`,α:`a`,ά:`a`,β:`v`,δ:`d`,ε:`e`,έ:`e`,φ:`f`,γ:`gh`,η:`i`,ή:`i`,ι:`i`,ί:`i`,ϊ:`i`,ΐ:`i`,κ:`k`,ξ:`ks`,λ:`l`,μ:`m`,ν:`n`,ο:`o`,ό:`o`,π:`p`,ψ:`ps`,ρ:`r`,σ:`s`,ς:`s`,τ:`t`,ϑ:`th`,θ:`th`,ϐ:`v`,ω:`o`,ώ:`w`,χ:`kh`,υ:`i`,ύ:`y`,ΰ:`y`,ϋ:`y`,ζ:`z`,अ:`a`,आ:`aa`,ए:`e`,ई:`ii`,ऍ:`ei`,ऎ:`ae`,ऐ:`ai`,इ:`i`,ओ:`o`,ऑ:`oi`,ऒ:`oii`,ऊ:`uu`,औ:`ou`,उ:`u`,ब:`B`,भ:`Bha`,च:`Ca`,छ:`Chha`,ड:`Da`,ढ:`Dha`,फ:`Fa`,फ़:`Fi`,ग:`Ga`,घ:`Gha`,ग़:`Ghi`,ह:`Ha`,ज:`Ja`,झ:`Jha`,क:`Ka`,ख:`Kha`,ख़:`Khi`,ल:`L`,ळ:`Li`,ऌ:`Li`,ऴ:`Lii`,ॡ:`Lii`,म:`Ma`,न:`Na`,ङ:`Na`,ञ:`Nia`,ण:`Nae`,ऩ:`Ni`,ॐ:`oms`,प:`Pa`,क़:`Qi`,र:`Ra`,ऋ:`Ri`,ॠ:`Ri`,ऱ:`Ri`,स:`Sa`,श:`Sha`,ष:`Shha`,ट:`Ta`,त:`Ta`,ठ:`Tha`,द:`Tha`,थ:`Tha`,ध:`Thha`,ड़:`ugDha`,ढ़:`ugDhha`,व:`Va`,य:`Ya`,य़:`Yi`,ज़:`Za`,Ա:`A`,Բ:`B`,Գ:`G`,Դ:`D`,Ե:`E`,Զ:`Z`,Է:`E`,Ը:`Y`,Թ:`Th`,Ժ:`Zh`,Ի:`I`,Լ:`L`,Խ:`Kh`,Ծ:`Ts`,Կ:`K`,Հ:`H`,Ձ:`Dz`,Ղ:`Gh`,Ճ:`Tch`,Մ:`M`,Յ:`Y`,Ն:`N`,Շ:`Sh`,Ո:`Vo`,Չ:`Ch`,Պ:`P`,Ջ:`J`,Ռ:`R`,Ս:`S`,Վ:`V`,Տ:`T`,Ր:`R`,Ց:`C`,Ւ:`u`,Փ:`Ph`,Ք:`Q`,և:`ev`,Օ:`O`,Ֆ:`F`,ա:`a`,բ:`b`,գ:`g`,դ:`d`,ե:`e`,զ:`z`,է:`e`,ը:`y`,թ:`th`,ժ:`zh`,ի:`i`,լ:`l`,խ:`kh`,ծ:`ts`,կ:`k`,հ:`h`,ձ:`dz`,ղ:`gh`,ճ:`tch`,մ:`m`,յ:`y`,ն:`n`,շ:`sh`,ո:`vo`,չ:`ch`,պ:`p`,ջ:`j`,ռ:`r`,ս:`s`,վ:`v`,տ:`t`,ր:`r`,ց:`c`,ւ:`u`,փ:`ph`,ք:`q`,օ:`o`,ֆ:`f`,Ž:`Z`,Ň:`N`,Ş:`S`,ž:`z`,ň:`n`,ş:`s`,ı:`i`,İ:`I`,ğ:`g`,Ğ:`G`,ьо:`yo`,Й:`i`,Щ:`Shh`,Ъ:`Ie`,Ь:``,Ю:`Iu`,Я:`Ia`,й:`i`,щ:`shh`,ъ:`ie`,ь:``,ю:`iu`,я:`ia`,Ē:`E`,ē:`e`,န်ုပ်:`nub`,"ောင်":`aung`,"ိုက်":`aik`,"ိုဒ်":`ok`,"ိုင်":`aing`,"ိုလ်":`ol`,"ေါင်":`aung`,သြော:`aw`,"ောက်":`auk`,"ိတ်":`eik`,"ုတ်":`ok`,"ုန်":`on`,"ေတ်":`it`,"ုဒ်":`ait`,"ာန်":`an`,"ိန်":`ein`,"ွတ်":`ut`,"ေါ်":`aw`,"ွန်":`un`,"ိပ်":`eik`,"ုပ်":`ok`,"ွပ်":`ut`,"ိမ်":`ein`,"ုမ်":`on`,"ော်":`aw`,"ွမ်":`un`,က်:`et`,"ေါ":`aw`,"ော":`aw`,"ျွ":`ywa`,"ြွ":`yw`,"ို":`o`,"ုံ":`on`,တ်:`at`,င်:`in`,ည်:`i`,ဒ်:`d`,န်:`an`,ပ်:`at`,မ်:`an`,စျ:`za`,ယ်:`e`,ဉ်:`in`,စ်:`it`,"ိံ":`ein`,"ဲ":`e`,"း":``,"ာ":`a`,"ါ":`a`,"ေ":`e`,"ံ":`an`,"ိ":`i`,"ီ":`i`,"ု":`u`,"ူ":`u`,"်":`at`,"္":``,"့":``,က:`k`,"၉":`9`,တ:`t`,ရ:`ya`,ယ:`y`,မ:`m`,ဘ:`ba`,ဗ:`b`,ဖ:`pa`,ပ:`p`,န:`n`,ဓ:`da`,ဒ:`d`,ထ:`ta`,ဏ:`na`,ဝ:`w`,ဎ:`da`,ဍ:`d`,ဌ:`ta`,ဋ:`t`,ည:`ny`,ဇ:`z`,ဆ:`sa`,စ:`s`,င:`ng`,ဃ:`ga`,ဂ:`g`,လ:`l`,သ:`th`,"၈":`8`,ဩ:`aw`,ခ:`kh`,"၆":`6`,"၅":`5`,"၄":`4`,"၃":`3`,"၂":`2`,"၁":`1`,"၀":`0`,"၌":`hnaik`,"၍":`ywae`,ဪ:`aw`,ဦ:`-u`,ဟ:`h`,ဉ:`u`,ဤ:`-i`,ဣ:`i`,"၏":`-e`,ဧ:`e`,"ှ":`h`,"ွ":`w`,"ျ":`ya`,"ြ":`y`,အ:`a`,ဠ:`la`,"၇":`7`,DŽ:`DZ`,Dž:`Dz`,dž:`dz`,Ǳ:`DZ`,ǲ:`Dz`,ǳ:`dz`,Ǉ:`LJ`,ǈ:`Lj`,ǉ:`lj`,Ǌ:`NJ`,ǋ:`Nj`,ǌ:`nj`,č:`c`,Č:`C`,ć:`c`,Ć:`C`,š:`s`,Š:`S`,ა:`a`,ბ:`b`,გ:`g`,დ:`d`,ე:`e`,ვ:`v`,ზ:`z`,თ:`t`,ი:`i`,კ:`k`,ლ:`l`,მ:`m`,ნ:`n`,ო:`o`,პ:`p`,ჟ:`zh`,რ:`r`,ს:`s`,ტ:`t`,უ:`u`,ფ:`f`,ქ:`q`,ღ:`gh`,ყ:`y`,შ:`sh`,ჩ:`ch`,ც:`ts`,ძ:`dz`,წ:`ts`,ჭ:`ch`,ხ:`kh`,ჯ:`j`,ჰ:`h`,Ё:`E`,ё:`e`,Ы:`Y`,ы:`y`,Э:`E`,э:`e`,І:`I`,і:`i`,Ѳ:`F`,ѳ:`f`,Ѣ:`E`,ѣ:`e`,Ѵ:`I`,ѵ:`i`,Є:`Je`,є:`je`,Ѥ:`Je`,ѥ:`je`,Ꙋ:`U`,ꙋ:`u`,Ѡ:`O`,ѡ:`o`,Ѿ:`Ot`,ѿ:`ot`,Ѫ:`U`,ѫ:`u`,Ѧ:`Ja`,ѧ:`ja`,Ѭ:`Ju`,ѭ:`ju`,Ѩ:`Ja`,ѩ:`Ja`,Ѯ:`Ks`,ѯ:`ks`,Ѱ:`Ps`,ѱ:`ps`,Ґ:`G`,ґ:`g`,Ї:`Yi`,ї:`yi`,Ә:`A`,Ғ:`G`,Қ:`Q`,Ң:`N`,Ө:`O`,Ұ:`U`,Ү:`U`,Һ:`H`,ә:`a`,ғ:`g`,қ:`q`,ң:`n`,ө:`o`,ұ:`u`,ү:`u`,һ:`h`,ď:`d`,Ď:`D`,ě:`e`,Ě:`E`,ř:`r`,Ř:`R`,ť:`t`,Ť:`T`,ů:`u`,Ů:`U`,ą:`a`,ę:`e`,ł:`l`,ń:`n`,ś:`s`,ź:`z`,ż:`z`,Ą:`A`,Ę:`E`,Ł:`L`,Ń:`N`,Ś:`S`,Ź:`Z`,Ż:`Z`,ā:`a`,ģ:`g`,ī:`i`,ķ:`k`,ļ:`l`,ņ:`n`,ū:`u`,Ā:`A`,Ģ:`G`,Ī:`I`,Ķ:`k`,Ļ:`L`,Ņ:`N`,Ū:`U`,Ả:`A`,Ạ:`A`,Ắ:`A`,Ằ:`A`,Ẳ:`A`,Ẵ:`A`,Ặ:`A`,Ấ:`A`,Ầ:`A`,Ẩ:`A`,Ẫ:`A`,Ậ:`A`,ả:`a`,ạ:`a`,ắ:`a`,ằ:`a`,ẳ:`a`,ẵ:`a`,ặ:`a`,ấ:`a`,ầ:`a`,ẩ:`a`,ẫ:`a`,ậ:`a`,Ẻ:`E`,Ẽ:`E`,Ẹ:`E`,Ế:`E`,Ề:`E`,Ể:`E`,Ễ:`E`,Ệ:`E`,ẻ:`e`,ẽ:`e`,ẹ:`e`,ế:`e`,ề:`e`,ể:`e`,ễ:`e`,ệ:`e`,Ỉ:`I`,Ị:`I`,ỉ:`i`,ị:`i`,Ỏ:`O`,Ọ:`O`,Ố:`O`,Ồ:`O`,Ổ:`O`,Ỗ:`O`,Ộ:`O`,Ớ:`O`,Ờ:`O`,Ở:`O`,Ỡ:`O`,Ợ:`O`,ỏ:`o`,ọ:`o`,ố:`o`,ồ:`o`,ổ:`o`,ỗ:`o`,ộ:`o`,ớ:`o`,ờ:`o`,ở:`o`,ỡ:`o`,ợ:`o`,Ủ:`U`,Ụ:`U`,Ứ:`U`,Ừ:`U`,Ử:`U`,Ữ:`U`,Ự:`U`,ủ:`u`,ụ:`u`,ứ:`u`,ừ:`u`,ử:`u`,ữ:`u`,ự:`u`,Ỳ:`Y`,Ỷ:`Y`,Ỹ:`Y`,Ỵ:`Y`,ỳ:`y`,ỷ:`y`,ỹ:`y`,ỵ:`y`,ا:`a`,ب:`b`,پ:`p`,ت:`t`,ث:`th`,ج:`g`,چ:`ch`,ح:`h`,خ:`kh`,د:`d`,ذ:`th`,ر:`r`,ز:`z`,س:`s`,ش:`sh`,ص:`s`,ض:`d`,ط:`t`,ظ:`th`,ع:`aa`,غ:`gh`,ف:`f`,ق:`k`,ک:`k`,گ:`g`,ل:`l`,ژ:`zh`,ك:`k`,م:`m`,ن:`n`,ه:`h`,و:`o`,ی:`y`,آ:`a`,"٠":`0`,"١":`1`,"٢":`2`,"٣":`3`,"٤":`4`,"٥":`5`,"٦":`6`,"٧":`7`,"٨":`8`,"٩":`9`,أ:`a`,ي:`y`,إ:`a`,ؤ:`o`,ئ:`y`,ء:`aa`,ђ:`dj`,ћ:`c`,Ђ:`Dj`,Ћ:`C`,ə:`e`,Ə:`E`,ß:`ss`,ẞ:`SS`,ভ্ল:`vl`,পশ:`psh`,ব্ধ:`bdh`,ব্জ:`bj`,ব্দ:`bd`,ব্ব:`bb`,ব্ল:`bl`,ভ:`v`,ব:`b`,চ্ঞ:`cNG`,চ্ছ:`cch`,চ্চ:`cc`,ছ:`ch`,চ:`c`,ধ্ন:`dhn`,ধ্ম:`dhm`,দ্ঘ:`dgh`,দ্ধ:`ddh`,দ্ভ:`dv`,দ্ম:`dm`,ড্ড:`DD`,ঢ:`Dh`,ধ:`dh`,দ্গ:`dg`,দ্দ:`dd`,ড:`D`,দ:`d`,"।":`.`,ঘ্ন:`Ghn`,গ্ধ:`Gdh`,গ্ণ:`GN`,গ্ন:`Gn`,গ্ম:`Gm`,গ্ল:`Gl`,জ্ঞ:`jNG`,ঘ:`Gh`,গ:`g`,হ্ণ:`hN`,হ্ন:`hn`,হ্ম:`hm`,হ্ল:`hl`,হ:`h`,জ্ঝ:`jjh`,ঝ:`jh`,জ্জ:`jj`,জ:`j`,ক্ষ্ণ:`kxN`,ক্ষ্ম:`kxm`,ক্ষ:`ksh`,কশ:`ksh`,ক্ক:`kk`,ক্ট:`kT`,ক্ত:`kt`,ক্ল:`kl`,ক্স:`ks`,খ:`kh`,ক:`k`,ল্ভ:`lv`,ল্ধ:`ldh`,লখ:`lkh`,লঘ:`lgh`,লফ:`lph`,ল্ক:`lk`,ল্গ:`lg`,ল্ট:`lT`,ল্ড:`lD`,ল্প:`lp`,ল্ম:`lm`,ল্ল:`ll`,ল্ব:`lb`,ল:`l`,ম্থ:`mth`,ম্ফ:`mf`,ম্ভ:`mv`,মপ্ল:`mpl`,ম্ন:`mn`,ম্প:`mp`,ম্ম:`mm`,ম্ল:`ml`,ম্ব:`mb`,ম:`m`,"০":`0`,"১":`1`,"২":`2`,"৩":`3`,"৪":`4`,"৫":`5`,"৬":`6`,"৭":`7`,"৮":`8`,"৯":`9`,ঙ্ক্ষ:`Ngkx`,ঞ্ছ:`nch`,ঙ্ঘ:`ngh`,ঙ্খ:`nkh`,ঞ্ঝ:`njh`,ঙ্গৌ:`ngOU`,ঙ্গৈ:`ngOI`,ঞ্চ:`nc`,ঙ্ক:`nk`,ঙ্ষ:`Ngx`,ঙ্গ:`ngo`,ঙ্ম:`Ngm`,ঞ্জ:`nj`,ন্ধ:`ndh`,ন্ঠ:`nTh`,ণ্ঠ:`NTh`,ন্থ:`nth`,ঙ্গা:`nga`,ঙ্গি:`ngi`,ঙ্গী:`ngI`,ঙ্গু:`ngu`,ঙ্গূ:`ngU`,ঙ্গে:`nge`,ঙ্গো:`ngO`,ণ্ঢ:`NDh`,নশ:`nsh`,ঙর:`Ngr`,ঞর:`NGr`,"ংর":`ngr`,ঙ:`Ng`,ঞ:`NG`,"ং":`ng`,ন্ন:`nn`,ণ্ণ:`NN`,ণ্ন:`Nn`,ন্ম:`nm`,ণ্ম:`Nm`,ন্দ:`nd`,ন্ট:`nT`,ণ্ট:`NT`,ন্ড:`nD`,ণ্ড:`ND`,ন্ত:`nt`,ন্স:`ns`,ন:`n`,ণ:`N`,"ৈ":`OI`,"ৌ":`OU`,"ো":`O`,ঐ:`OI`,ঔ:`OU`,অ:`o`,ও:`oo`,ফ্ল:`fl`,প্ট:`pT`,প্ত:`pt`,প্ন:`pn`,প্প:`pp`,প্ল:`pl`,প্স:`ps`,ফ:`f`,প:`p`,"ৃ":`rri`,ঋ:`rri`,রর‍্য:`rry`,"্র্য":`ry`,"্রর":`rr`,ড়্গ:`Rg`,ঢ়:`Rh`,ড়:`R`,র:`r`,"্র":`r`,শ্ছ:`Sch`,ষ্ঠ:`ShTh`,ষ্ফ:`Shf`,স্ক্ল:`skl`,স্খ:`skh`,স্থ:`sth`,স্ফ:`sf`,শ্চ:`Sc`,শ্ত:`St`,শ্ন:`Sn`,শ্ম:`Sm`,শ্ল:`Sl`,ষ্ক:`Shk`,ষ্ট:`ShT`,ষ্ণ:`ShN`,ষ্প:`Shp`,ষ্ম:`Shm`,স্প্ল:`spl`,স্ক:`sk`,স্ট:`sT`,স্ত:`st`,স্ন:`sn`,স্প:`sp`,স্ম:`sm`,স্ল:`sl`,শ:`S`,ষ:`Sh`,স:`s`,"ু":`u`,উ:`u`,অ্য:`oZ`,ত্থ:`tth`,ৎ:`tt`,ট্ট:`TT`,ট্ম:`Tm`,ঠ:`Th`,ত্ন:`tn`,ত্ম:`tm`,থ:`th`,ত্ত:`tt`,ট:`T`,ত:`t`,অ্যা:`AZ`,"া":`a`,আ:`a`,য়া:`ya`,য়:`y`,"ি":`i`,ই:`i`,"ী":`ee`,ঈ:`ee`,"ূ":`uu`,ঊ:`uu`,"ে":`e`,এ:`e`,য:`z`,"্য":`Z`,ইয়:`y`,ওয়:`w`,"্ব":`w`,এক্স:`x`,"ঃ":`:`,"ঁ":`nn`,"্‌":``,"˚":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,"௦":`0`,"௧":`1`,"௨":`2`,"௩":`3`,"௪":`4`,"௫":`5`,"௬":`6`,"௭":`7`,"௮":`8`,"௯":`9`,"௰":`10`,"௱":`100`,"௲":`1000`,Ꜳ:`AA`,ꜳ:`aa`,Ꜵ:`AO`,ꜵ:`ao`,Ꜷ:`AU`,ꜷ:`au`,Ꜹ:`AV`,ꜹ:`av`,Ꜻ:`av`,ꜻ:`av`,Ꜽ:`AY`,ꜽ:`ay`,ȸ:`db`,ʣ:`dz`,ʥ:`dz`,ʤ:`dezh`,"🙰":`et`,ﬀ:`ff`,ﬃ:`ffi`,ﬄ:`ffl`,ﬁ:`fi`,ﬂ:`fl`,ʩ:`feng`,ʪ:`ls`,ʫ:`lz`,ɮ:`lezh`,ȹ:`qp`,ʨ:`tc`,ʦ:`ts`,ʧ:`tesh`,Ꝏ:`OO`,ꝏ:`oo`,ﬆ:`st`,ﬅ:`st`,Ꜩ:`TZ`,ꜩ:`tz`,ᵫ:`ue`,Aι:`Ai`,αι:`ai`,ἀ:`a`,ἁ:`a`,ἂ:`a`,ἃ:`a`,ἄ:`a`,ἅ:`a`,ἆ:`a`,ἇ:`a`,Ἀ:`A`,Ἁ:`A`,Ἂ:`A`,Ἃ:`A`,Ἄ:`A`,Ἅ:`A`,Ἆ:`A`,Ἇ:`A`,ᾰ:`a`,ᾱ:`a`,ᾲ:`a`,ᾳ:`a`,ᾴ:`a`,ᾶ:`a`,ᾷ:`a`,Ᾰ:`A`,Ᾱ:`A`,Ὰ:`A`,Ά:`A`,ᾼ:`A`,A̧:`A`,a̧:`a`,Ⱥ:`A`,ⱥ:`a`,Ȧ:`A`,ȧ:`a`,Ɓ:`B`,C̈:`C`,c̈:`c`,C̨:`C`,c̨:`c`,Ȼ:`C`,ȼ:`c`,C̀:`C`,c̀:`c`,C̣:`C`,c̣:`c`,C̄:`C`,c̄:`c`,C̃:`C`,c̃:`c`,Ȩ:`E`,ȩ:`e`,Ɇ:`E`,ɇ:`e`,I̧:`I`,i̧:`i`,Ɨ:`I`,ɨ:`i`,i:`i`,J́́:`J`,j́:`j`,J̀̀:`J`,j̀:`j`,J̈:`J`,j̈:`j`,J̧:`J`,j̧:`j`,J̨:`J`,j̨:`j`,Ɉ:`J`,ɉ:`j`,J̌:`J`,ǰ:`j`,J̇:`J`,j:`j`,J̣:`J`,j̣:`j`,J̄:`J`,j̄:`j`,J̃:`J`,j̃:`j`,ĸ:`k`,L̀:`L`,l̀:`l`,L̂:`L`,l̂:`l`,L̈:`L`,l̈:`l`,L̨:`L`,l̨:`l`,Ƚ:`L`,ƚ:`l`,L̇:`L`,l̇:`l`,Ḷ:`L`,ḷ:`l`,L̄:`L`,l̄:`l`,L̃:`L`,l̃:`l`,Ŋ:`N`,ŋ:`n`,Ǹ:`N`,ǹ:`n`,N̂:`N`,n̂:`n`,N̈:`N`,n̈:`n`,N̨:`N`,n̨:`n`,Ꞥ:`N`,ꞥ:`n`,Ṅ:`N`,ṅ:`n`,Ṇ:`N`,ṇ:`n`,N̄:`N`,n̄:`n`,O̧:`O`,o̧:`o`,Ǫ:`O`,ǫ:`o`,Ɵ:`O`,ɵ:`o`,Ȯ:`O`,ȯ:`o`,S̀:`S`,s̀:`s`,Ŝ̀:`S`,S̈:`S`,s̈:`s`,S̨:`S`,s̨:`s`,Ꞩ:`S`,ꞩ:`s`,Ṡ:`S`,ṡ:`s`,Ṣ:`S`,ṣ:`s`,S̄:`S`,s̄:`s`,S̃:`S`,s̃:`s`,T́:`T`,t́:`t`,T̀:`T`,t̀:`t`,T̂:`T`,t̂:`t`,T̈:`T`,ẗ:`t`,T̨:`T`,t̨:`t`,Ⱦ:`T`,ⱦ:`t`,Ṫ:`T`,ṫ:`t`,Ṭ:`T`,ṭ:`t`,T̄:`T`,t̄:`t`,T̃:`T`,t̃:`t`,U̧:`U`,u̧:`u`,Ʉ:`U`,ʉ:`u`,U̇:`U`,u̇:`u`,Ʊ:`U`,ʊ:`u`,Ẁ:`W`,ẁ:`w`,Ẃ:`W`,ẃ:`w`,Ẅ:`W`,ẅ:`w`,Ꙗ:`Ja`,ꙗ:`ja`,Y̧:`Y`,y̧:`y`,Y̨:`Y`,y̨:`y`,Ɏ:`Y`,ɏ:`y`,Y̌:`Y`,y̌:`y`,Ẏ:`Y`,ẏ:`y`,Ȳ:`Y`,ȳ:`y`,Z̀:`Z`,z̀:`z`,Ẑ:`Z`,ẑ:`z`,Z̈:`Z`,z̈:`z`,Z̧:`Z`,z̧:`z`,Z̨:`Z`,z̨:`z`,Ƶ:`Z`,ƶ:`z`,Ẓ:`Z`,ẓ:`z`,Z̄:`Z`,z̄:`z`,Z̃:`Z`,z̃:`z`,"\xA0":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `,"\u2028":` `,"\u2029":` `,"​":` `," ":` `," ":` `,"　":` `,ﾠ:` `,"«":`<<`,"»":`>>`,"‘":`'`,"’":`'`,"‚":`'`,"‛":`'`,"“":`"`,"”":`"`,"„":`"`,"‟":`"`,"‹":`'`,"›":`'`,"–":`-`,"—":`-`,"…":`...`,"€":`EUR`,$:`$`,"₢":`Cr`,"₣":`Fr.`,"£":`PS`,"₤":`L.`,ℳ:`M`,"₥":`mil`,"₦":`N`,"₧":`Pts`,"₨":`Rs`,රු:`LKR`,ரூ:`LKR`,"௹":`Rs`,रू:`NPR`,"₹":`Rs`,"૱":`Rs`,"₩":`W`,"₪":`NS`,"₸":`KZT`,"₫":`D`,"֏":`AMD`,"₭":`K`,"₺":`TL`,"₼":`AZN`,"₮":`T`,"₯":`Dr`,"₲":`PYG`,"₾":`GEL`,"₳":`ARA`,"₴":`UAH`,"₽":`RUB`,"₵":`GHS`,"₡":`CL`,"¢":`c`,"¥":`YEN`,円:`JPY`,"৳":`BDT`,元:`CNY`,"﷼":`SAR`,"៛":`KR`,"₠":`ECU`,"¤":`$?`,"฿":`THB`,"؋":`AFN`};function bc(e,t=yc){e=e.normalize(`NFC`);let n=``,r;for(let i=0;i<e.length;i++)r=e.charAt(i),n+=typeof t[r]==`string`?t[r]:r;return n}function xc(e,t={}){let n={allowNonAlphaStart:!1,handleCasing:`camel`,...t};var r=e.replace(/<(.*?)>/g,``);r=r.replace(/['"‘’“”ʻ\[\]\(\)\{\}:]/g,``),r=r.toLowerCase(),r=bc(r),n.allowNonAlphaStart||(r=r.replace(/^[^a-z]+/,``));let i=r.split(/[^a-z0-9]+/).filter(Boolean);if(r=``,n.handleCasing===`snake`)return i.join(`_`);for(let e=0;e<i.length;e++)n.handleCasing!==`pascal`&&e===0?r+=i[e]:r+=i[e].charAt(0).toUpperCase()+i[e].substring(1);return r}function Sc(e,t={}){let n={prefix:``,suffix:``,...t},r=xc(e,{handleCasing:`snake`}).toUpperCase();return r?`${n.prefix}${r}${n.suffix}`:``}function Cc(e){let t=e.replace(/<(.*?)>/g,``);return t=t.toLowerCase(),t=bc(t),t=t.replace(/^[^a-z]+/,``),t=t.replace(/[^a-z0-9]+$/,``),t.split(/[^a-z0-9]+/).filter(Boolean).join(`-`)}function wc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Tc(){return Math.floor(Math.random()*1e6)}var Ec=new WeakMap,Dc=class e{constructor(){this.queue=[],this.workers=[],y(this,Ec,null),v(Ec,this,new AbortController);for(let e=0;e<3;e++)this.workers.push(new jc(this))}load(t=document,n=`[data-sizes]`){t.querySelectorAll(n).forEach(t=>{if(mc(t))this.addToQueue(t);else{let n=`thumb${Tc()}`;e.invisibleThumbs[n]=[this,t];let r=()=>{e.invisibleThumbs[n]&&mc(t)&&(delete e.invisibleThumbs[n],this.addToQueue(t))};document.addEventListener(`scroll`,r,{signal:g(Ec,this)?.signal}),window.addEventListener(`resize`,r,{signal:g(Ec,this)?.signal})}})}addToQueue(e){this.queue.push(e),this.workers.forEach(e=>{e.active||e.loadNext()})}static retryAll(){for(let t in e.invisibleThumbs){let n=e.invisibleThumbs[t];if(!n)continue;let[r,i]=n;delete e.invisibleThumbs[t],r.load(i.parentElement??document)}}destroy(){this.workers.forEach(e=>e.deactivate()),g(Ec,this)?.abort();for(let t in e.invisibleThumbs)e.invisibleThumbs[t]?.[0]===this&&delete e.invisibleThumbs[t]}};Dc.invisibleThumbs={};var Oc=new WeakMap,kc=new WeakMap,Ac=new WeakMap,jc=class{constructor(e){this.active=!1,this.container=void 0,y(this,Oc,null),y(this,kc,null),y(this,Ac,null),v(Oc,this,e)}activate(){this.active||(this.active=!0,this.clearInterval(),v(kc,this,setInterval(()=>{this.loadNextIfRemoved()},500)))}deactivate(){this.active&&(this.active=!1,this.clearInterval(),this.clearTimeout())}clearInterval(){g(kc,this)&&(clearInterval(g(kc,this)),v(kc,this,null))}clearTimeout(){g(Ac,this)&&(clearTimeout(g(Ac,this)),v(Ac,this,null))}loadNext(){if(this.clearTimeout(),this.container=g(Oc,this)?.queue.shift(),this.container===void 0){this.deactivate();return}if(this.loadNextIfRemoved())return;if(this.container.querySelectorAll(`img`).length>0){this.loadNext();return}this.activate(),v(Ac,this,setTimeout(()=>{this.loadNext()},3e4));let e=document.createElement(`img`);e.sizes=this.container.getAttribute(`data-sizes`)??``,e.srcset=this.container.getAttribute(`data-srcset`)??``,e.alt=this.container.getAttribute(`data-alt`)??``,e.setAttribute(`data-animated`,this.container.getAttribute(`data-animated`)??``),e.src=this.container.getAttribute(`data-src`)??``,e.onload=()=>this.loadNext(),e.onabort=()=>this.loadNext(),e.onerror=()=>this.loadNext(),this.container.appendChild(e)}loadNextIfRemoved(){return this.container&&!document.body.contains(this.container)?(this.loadNext(),!0):!1}},Mc=a`
  /*
   * A label link is decorated like any other link. ::slotted() only reaches a
   * link slotted straight into the chip; one nested a level down (inside a
   * craft-truncate, as element chips render it) gets the same treatment
   * through the custom properties, which it inherits and craft-truncate
   * applies to its own slotted links.
   */
  :host {
    display: contents;
    --c-truncate-link-decoration: var(--c-link-decoration);
    --c-truncate-link-hover-decoration: var(--c-link-decoration-hover);
  }

  /*
   * On a colored chip a blue link would clash with the fill, so links take the
   * chip's text color, and are underlined so they still stand apart from it.
   * Neutral chips keep the default link styling (a black chip's contents take
   * the dark theme's). A plain chip has no fill to clash with, so it keeps the
   * default link styling too. Set on the host, so the truncate properties
   * above resolve to them too.
   */
  :host([variant]:not([appearance~='plain'])),
  ${mo(`:not([appearance~='plain'])`)} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  /* Base */

  /*
   * --_chip-gap separates the parts and insets the first one, and stays the
   * same at every size; --_chip-spacing insets the last part and the block
   * edges, and grows with the size. A status sits closer to its label.
   */
  .cp-chip {
    --_chip-spacing: 0.25em;
    --_chip-gap: var(--c-chip-gap, var(--c-spacing-md));
    --_chip-status-gap: calc(var(--_chip-gap) * 0.75);
    /* Whole pixels, so a chip is never a fraction of a pixel tall: the
       remainder would round onto one side, leaving uneven space above and
       below its parts, and shift everything after it off the pixel grid. */
    --_chip-block-padding: round(calc(var(--_chip-spacing) / 2), 1px);
    --_thumb-size: calc(30rem / 16);
    --_radius: var(--c-radius-md);
    --_border-width: var(--c-chip-border-width, 1px);
    /* Sized to its content, but never wider than its parent: the label
       truncates instead. */
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    /* Whatever leads the chip sits as far in as the parts are apart, at every
       size; a thumbnail is the exception, below. */
    padding-block: 0;
    padding-inline: var(--_chip-gap) var(--_chip-spacing);
    display: inline-flex;
    /* Centered on the line, rather than sitting on its baseline: an inline
       flex box's baseline comes from its first item, which for a thumbnail
       is the image's bottom edge, lifting the chip above the text's
       descenders. */
    vertical-align: middle;
    gap: var(--_chip-gap);
    border-radius: var(--_radius);
    align-items: center;
    box-shadow: var(--c-chip-shadow, var(--c-shadow-xs));
    background-color: var(--c-chip-fill, var(--c-surface-raised));

    border-width: var(--_border-width);
    border-style: var(--c-chip-border-style, solid);
    overflow: clip;
  }

  :host([full-width]) .cp-chip {
    display: flex;
    flex: 1 1 auto;
  }

  /* Sizes */

  .cp-chip--small {
    --_chip-spacing: 0.25em;
  }

  /* As tall as a small suffix button, so adding one doesn't change the
     chip's height. */
  .cp-chip--small .cp-chip__body {
    min-height: var(--c-size-control-sm);
  }

  /* Medium and large are as tall as a button of the same size, so the two
     line up side by side. */
  .cp-chip--medium {
    --_chip-spacing: 0.5em;
    --_thumb-size: var(--c-size-control-md);
    min-height: var(--c-size-control-md);
  }

  /* Outside the plain appearance, small chips are as tall as a medium
     button, thumbnail included: it's inset by the border and the padding it
     keeps from the chip's edges. */
  .cp-chip--small:not(.cp-chip--plain) {
    --_thumb-size: calc(
      var(--c-size-control-md) - var(--_border-width) * 2 -
        var(--_chip-block-padding) * 2
    );
    min-height: var(--c-size-control-md);
  }

  .cp-chip--large {
    --_chip-spacing: 1em;
    --_thumb-size: calc(40rem / 16);
    min-height: var(--c-size-control-lg);
  }

  /* Thumbnail sizes, overriding the one the chip's size gives it: two
     classes, so they win over the sizes' own. sm keeps the thumbnail a small
     chip gives it. From lg, the corners grow along with the thumbnail. */
  .cp-chip.cp-chip--thumb-md {
    --_thumb-size: calc(60rem / 16);
  }

  .cp-chip.cp-chip--thumb-lg {
    --_thumb-size: calc(120rem / 16);
  }

  .cp-chip.cp-chip--thumb-xl {
    --_thumb-size: calc(180rem / 16);
  }

  .cp-chip.cp-chip--thumb-2xl {
    --_thumb-size: calc(240rem / 16);
  }

  .cp-chip.cp-chip--thumb-lg,
  .cp-chip.cp-chip--thumb-xl,
  .cp-chip.cp-chip--thumb-2xl {
    --_radius: var(--c-radius-lg);
  }

  /* Alignment */

  .cp-chip--align-start {
    align-items: start;
  }

  .cp-chip--align-end {
    align-items: end;
  }

  .cp-chip--align-start .cp-chip__main {
    align-items: start;
  }

  .cp-chip--align-end .cp-chip__main {
    align-items: end;
  }

  /*
   * Off-center, the prefix and status are as tall as one line of the label
   * plus the label's block padding, so an icon or status centers against the
   * first (or last) line instead of sitting flush with the chip's edge.
   */
  .cp-chip--align-start :is(.cp-chip__prefix, .cp-chip__status),
  .cp-chip--align-end :is(.cp-chip__prefix, .cp-chip__status) {
    min-height: calc(1lh + var(--_chip-block-padding) * 2);
  }

  /* Prefix */

  /* Only the label gives way when the chip is too narrow. */
  .cp-chip__select,
  .cp-chip__prefix,
  .cp-chip__status,
  .cp-chip__suffix {
    flex: none;
  }

  .cp-chip__prefix {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: var(--_chip-gap);
  }

  /* Clicking a selectable chip selects it, so its label doesn't get a text
     cursor, as if it were text to select. Links within it keep theirs. */
  .cp-chip--selectable {
    cursor: default;
  }

  /* The gap spaces the checkbox, so the browser's default margins would
     double up with it. */
  .cp-chip__select {
    margin: 0;
  }

  /* The checkbox lives in the shadow root, out of reach of the global
     craft-checkbox styles, so it's drawn the same way here. On a colored chip
     it takes the chip's text color, like the chip's other controls, and once
     checked the mark is cut out of the fill, so the chip shows through. */
  .cp-chip__select {
    appearance: none;
    flex-shrink: 0;
    box-sizing: border-box;
    width: var(--c-chip-checkbox-size, calc(14rem / 16));
    height: var(--c-chip-checkbox-size, calc(14rem / 16));
    border: var(--c-form-control-border-width, 1px)
      var(--c-form-control-border-style, solid) currentColor;
    border-radius: var(--c-checkbox-radius, var(--c-radius-sm));
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  .cp-chip__select:checked {
    border-color: transparent;
    background-color: currentColor;
    mask:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E")
        center / 65% no-repeat exclude,
      linear-gradient(#000 0 0);
  }

  .cp-chip__select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host(:is([data-color='white'], :not([data-color]))) .cp-chip__select {
    border-color: var(--c-form-control-border-color);
    background-color: var(--c-input-fill);
  }

  :host(:is([data-color='white'], :not([data-color])))
    .cp-chip__select:checked {
    border-color: transparent;
    background-color: var(--c-color-accent-fill-loud);
  }

  @media (forced-colors: active) {
    .cp-chip__select,
    :host(:is([data-color='white'], :not([data-color]))) .cp-chip__select {
      appearance: auto;
      mask: none;
      border: revert;
      background: revert;
    }
  }

  .cp-chip__status,
  .cp-chip__icon {
    display: inline-flex;
    align-items: center;
  }

  /* An icon's box is wider than most glyphs so icons line up in a column; in
     a chip that would add to the gap, so the box hugs the glyph instead. */
  .cp-chip__icon craft-icon,
  .cp-chip__icon::slotted(craft-icon) {
    width: auto;
  }

  /* As wide as a status dot (craft-indicator's \`md\` size plus its border),
     so a wider status, like the draft icon, overflows evenly and lines up
     with the dots. */
  ::slotted([slot='status']) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    inline-size: calc(0.6em + 2px);
  }

  /* A status, such as the draft icon, isn't the chip's own: only its icon
     takes the chip's color. A solid fill keeps its contrasting text color. */
  :host(:not([appearance~='solid'])) ::slotted([slot='status']) {
    color: var(--c-text-default);
  }

  .cp-chip__thumbnail {
    --c-thumbnail-size: var(--_thumb-size);
    /* Concentric with the chip's corner: inset by the border and padding,
       the corner shrinks by as much, though never to a square. */
    --c-thumbnail-image-radius: max(
      2px,
      calc(var(--_radius) - var(--_border-width) - var(--_chip-block-padding))
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_thumb-size);
    aspect-ratio: 1;
    padding-block: var(--_chip-block-padding);
  }

  /* A thumbnail or custom prefix content fills more of the chip's height, so
     leading the chip it sits as far in as it does from the top and bottom. */
  .cp-chip--leads-with-thumbnail,
  .cp-chip--leads-with-prefix {
    padding-inline-start: var(--_chip-block-padding);
  }

  /*
   * An image slotted straight in has no craft-thumbnail around it to size it,
   * so it would render at its natural size and spill out of the prefix.
   */
  .cp-chip__thumbnail::slotted(img),
  .cp-chip__thumbnail::slotted(svg) {
    flex: none;
    inline-size: var(--c-thumbnail-size);
    block-size: var(--c-thumbnail-size);
    object-fit: cover;
    border-radius: var(--c-thumbnail-image-radius);
  }

  /* Body */

  .cp-chip__main {
    display: flex;
    align-items: center;
    gap: var(--_chip-status-gap);
    flex: 1 1 auto;
    min-width: 0;
  }

  .cp-chip__body {
    padding-block: var(--_chip-block-padding);
    display: flex;
    gap: var(--c-spacing-sm);
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Ending the chip, the label leaves as much room as a suffix button does. */
  .cp-chip__main:last-child {
    padding-inline-end: var(--_chip-spacing);
  }

  .cp-chip__body::slotted(a) {
    text-decoration-line: var(--c-link-decoration);
  }

  .cp-chip__body::slotted(a:hover) {
    text-decoration-line: var(--c-link-decoration-hover);
  }

  /* Suffix */

  .cp-chip__suffix {
    margin-inline-start: calc(var(--c-spacing-xs) - var(--_chip-gap));
    padding-block: var(--_chip-block-padding);
    display: flex;
    flex-direction: column;
  }

  /*
   * Stacked: the prefix sits above the label, both centered, for a tile in a
   * grid. The checkbox and suffix share a row along the top, so reaching for
   * one never lands on the thumbnail. Grid areas place each part, so a part
   * that isn't rendered leaves its cell empty rather than shifting the rest.
   */
  .cp-chip--stacked {
    display: inline-grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      'prefix prefix prefix'
      'main main main';
    justify-items: center;
    row-gap: var(--_chip-block-padding);
    padding: var(--_chip-spacing);
  }

  :host([full-width]) .cp-chip--stacked {
    display: grid;
  }

  .cp-chip--stacked.cp-chip--has-header {
    grid-template-areas:
      'select . suffix'
      'prefix prefix prefix'
      'main main main';
    padding-block-start: var(--_chip-block-padding);
  }

  .cp-chip--stacked .cp-chip__select {
    grid-area: select;
    justify-self: start;
  }

  .cp-chip--stacked .cp-chip__prefix {
    grid-area: prefix;
  }

  /* Clear of the chip's edges, the thumbnail's corners aren't concentric
     with the chip's, so they keep a radius of their own. */
  .cp-chip--stacked .cp-chip__thumbnail {
    --c-thumbnail-image-radius: var(--c-radius-md);
  }

  .cp-chip--stacked .cp-chip__main {
    grid-area: main;
    justify-self: stretch;
    justify-content: center;
    padding-inline-end: 0;
  }

  .cp-chip--stacked .cp-chip__body {
    flex-grow: 0;
  }

  .cp-chip--stacked .cp-chip__suffix {
    grid-area: suffix;
    justify-self: end;
    margin-inline-start: 0;
  }

  /*
   * Appearance tiers, mirroring craft-callout so the two read at the same
   * intensity for a given variant. The variant remaps the generic
   * --c-color-* tokens; each tier below picks which loudness of them to use.
   */
  :host([appearance~='solid']) .cp-chip {
    background-color: var(--c-color-fill-loud);
    border-color: var(--c-color-border-loud);
    color: var(--c-color-on-loud);
  }

  :host([appearance~='fill']) .cp-chip {
    background-color: var(--c-color-fill-normal);
    border-color: transparent;
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline-fill']) .cp-chip {
    background-color: var(--c-color-fill-normal);
    border-color: var(--c-color-border-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline']) .cp-chip {
    background-color: transparent;
    border-color: var(--c-color-border-quiet);
    color: var(--c-color-on-quiet);
  }

  /* A plain chip has no fill or border for its color to show on, so its
     label takes the default text color. Only its icon takes the chip's color
     (a status, such as the draft icon, isn't the chip's own; see above). */
  :host([appearance~='plain']) .cp-chip {
    background-color: transparent;
    border-color: transparent;
    color: var(--c-chip-text, var(--c-text-default));
  }

  :host([appearance~='plain']) .cp-chip__icon {
    color: var(--c-color-on-quiet);
  }

  /*
   * Without a color, a chip has no fill of its own: its border and text come
   * from the colors around it, so in a colored card it takes the card's
   * color, and elsewhere the neutral ones.
   */
  :host(:not([data-color]):not([selected])[appearance~='fill']) .cp-chip,
  :host(:not([data-color]):not([selected])[appearance~='outline-fill'])
    .cp-chip,
  :host(:not([data-color]):not([selected])[appearance~='outline']) .cp-chip {
    background-color: transparent;
    border-color: var(--c-color-border-quiet);
    color: var(--c-chip-text, var(--c-text-default));
  }

  /*
   * White chips take the theme-aware raised surface, its border, and the
   * default text color, rather than white's static colors, which stay light in
   * dark mode. Scoped to the two filled tiers so outline and plain stay
   * transparent.
   *
   * The palette is repointed too, for controls that inherit it, like the
   * action menu's button, whose hover tints from --c-color-fill-quiet.
   */
  :host([data-color='white'][appearance~='fill']:not([selected])) .cp-chip,
  :host([data-color='white'][appearance~='outline-fill']:not([selected]))
    .cp-chip {
    --c-color-fill-quiet: var(--c-chip-fill, var(--c-surface-white));
    --c-color-on-quiet: var(--c-chip-text, var(--c-text-default));
    background-color: var(--c-chip-fill, var(--c-surface-white));
    border-color: var(--c-chip-border-color, var(--c-border-raised));
    color: var(--c-chip-text, var(--c-text-default));
  }

  :host([data-color='white'][appearance~='outline']) .cp-chip,
  :host([data-color='white'][appearance~='plain']) .cp-chip {
    --c-color-fill-quiet: transparent;
    --c-color-on-quiet: var(--c-chip-text, var(--c-text-default));
    color: var(--c-chip-text, var(--c-text-default));
  }

  /* Plain: no chrome, so no padding, border, or shadow either. */
  .cp-chip--plain {
    padding-block: 0;
    padding-inline: 0;
    --_border-width: 0px;
    box-shadow: none;
    /* The border's stand-in, drawn inside the edge so it takes no space.
       Invisible, except in forced colors, where it gives the chip an edge. */
    outline: 1px solid transparent;
    outline-offset: -1px;
  }

  /* Over the inset a leading thumbnail would otherwise get, too. */
  .cp-chip--plain.cp-chip--leads-with-thumbnail,
  .cp-chip--plain.cp-chip--leads-with-prefix {
    padding-inline-start: 0;
  }

  .cp-chip--plain .cp-chip__main:last-child {
    padding-inline-end: 0;
  }

  .cp-chip--plain .cp-chip__thumbnail,
  .cp-chip--plain .cp-chip__body,
  .cp-chip--plain .cp-chip__suffix {
    padding-block: 0;
  }

  /* With no padding, the thumbnail's corner is the chip's. */
  .cp-chip--plain .cp-chip__thumbnail {
    --c-thumbnail-image-radius: var(--_radius);
  }

  /*
   * Selected state: the accent fill of a selected thumbnail tile in the
   * element index, with a stronger border, like a selected card's, so the
   * selection stands out from the chips around it.
   *
   * Last in the file so it wins over the appearance tiers of equal
   * specificity: a selected chip stays legible as selected even when it is plain.
   */
  :host([selected]) .cp-chip {
    --c-color-fill-quiet: var(--c-color-accent-fill-quiet);
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
  }

  /* A plain chip has no border to color, so its outline takes the color. */
  :host([selected]) .cp-chip--plain {
    outline-color: var(--c-color-accent-border-normal);
  }

  /*
   * A filled colored chip takes the subtler look of a card's body: a wash of
   * its color's quiet fill, and its quiet border and text. Selected, it takes
   * its color's normal fill, border, and text instead, rather than the accent
   * color. Black, like white, is the same in both themes, so a wash
   * of it would leave its light text unreadable; it keeps its own look.
   */
  :host(
      [data-color]:not([data-color='white'], [data-color='black']):not(
        [selected]
      )[appearance~='fill']
    )
    .cp-chip,
  :host(
      [data-color]:not([data-color='white'], [data-color='black']):not(
        [selected]
      )[appearance~='outline-fill']
    )
    .cp-chip {
    background-color: color-mix(var(--c-color-fill-quiet), transparent 70%);
    color: var(--c-color-on-quiet);
  }

  :host(
      [data-color]:not([data-color='white'], [data-color='black']):not(
        [selected]
      )[appearance~='outline-fill']
    )
    .cp-chip {
    border-color: var(--c-color-border-quiet);
  }

  :host(
      [data-color]:not(
        [data-color='white'],
        [data-color='black']
      )[selected][appearance~='fill']
    )
    .cp-chip,
  :host(
      [data-color]:not(
        [data-color='white']
      )[selected][appearance~='outline-fill']
    )
    .cp-chip {
    /* Controls that tint from these, like the move button, take the chip's
       own color rather than the accent repointing above, with a stronger
       hover and press so they stand out from the fill. */
    --c-color-fill-quiet: var(--c-color-fill-normal);
    --c-color-mix-hover: currentColor 20%;
    --c-color-mix-active: currentColor 30%;
    background-color: var(--c-color-fill-normal);
    border-color: var(--c-color-border-normal);
    color: var(--c-color-on-normal);
  }
`;Object.values({Sm:`sm`,Md:`md`,Lg:`lg`,Xl:`xl`,"2xl":`2xl`});var Nc={sm:yo.Small,md:yo.Medium,lg:yo.Large,xl:yo.Large,"2xl":yo.Large},Pc={InlineStart:`inline-start`,BlockStart:`block-start`},Fc=new WeakSet,Ic=new WeakMap,Lc=new WeakMap,Rc=new WeakMap,zc=class extends u{constructor(...e){super(...e),_(this,Fc),this.size=null,this.thumbSize=null,this.prefixPlacement=Pc.InlineStart,this.variant=null,this.appearance=Gn.OutlineFill,this.alignItems=`center`,this.icon=null,this.showStatus=!1,this.showThumb=!1,this.selectable=!1,this.fullWidth=!1,this.selected=!1,this.selectLabel=null,this.selectDisabled=!1,y(this,Ic,!1),y(this,Lc,new Dc),y(this,Rc,new ae(this,{characterData:!0,onChange:()=>b(Fc,this,Vc).call(this)}))}renderSelect(){return p`<input
      type="checkbox"
      class="cp-chip__select"
      part="select"
      .checked=${this.selected}
      ?disabled=${this.selectDisabled}
      aria-label=${this.selectLabel??S(`Select`)}
      @click=${b(Fc,this,Hc)}
      @mousedown=${b(Fc,this,Uc)}
      @mouseup=${b(Fc,this,Uc)}
      @change=${b(Fc,this,Wc)}
    />`}renderPrefix(e){return p`<div class="cp-chip__prefix">
      ${e.prefix?p`<slot name="prefix" part="prefix"></slot>`:r}
      ${e.thumbnail?p`<slot
            class="cp-chip__thumbnail"
            name="thumbnail"
            part="thumbnail"
          ></slot>`:r}
      ${e.icon?p`<slot class="cp-chip__icon" name="icon" part="icon"
            >${this.icon?p`<craft-icon name="${this.icon}"></craft-icon>`:r}</slot
          >`:r}
    </div>`}renderMain(e){return p`<div class="cp-chip__main">
      ${e.status?p`<slot
            class="cp-chip__status"
            name="status"
            part="status"
          ></slot>`:r}
      ${e.body?p`<slot class="cp-chip__body" part="body"></slot>`:r}
    </div>`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(v(Lc,this,new Dc),g(Lc,this).load(this))}disconnectedCallback(){g(Lc,this).destroy(),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),g(Lc,this).load(this)}render(){let e=b(Fc,this,Kc).call(this),t=e.prefix||e.thumbnail||e.icon;return p`
      <div
        part="chip"
        class="${E({"cp-chip":!0,"cp-chip--small":Bc.call(b(Fc,this))===`small`,"cp-chip--medium":Bc.call(b(Fc,this))===`medium`,"cp-chip--large":Bc.call(b(Fc,this))===`large`,[`cp-chip--thumb-${this.thumbSize}`]:this.thumbSize!==null,"cp-chip--stacked":this.prefixPlacement===Pc.BlockStart,"cp-chip--has-header":this.prefixPlacement===Pc.BlockStart&&(this.selectable||e.suffix),"cp-chip--align-start":this.alignItems===`start`,"cp-chip--align-end":this.alignItems===`end`,"cp-chip--plain":this.appearance===Gn.Plain,"cp-chip--selectable":this.selectable,"cp-chip--show-thumb":this.showThumb,"cp-chip--show-status":this.showStatus,[`cp-chip--leads-with-${b(Fc,this,qc).call(this,e)}`]:!0})}"
      >
        ${this.selectable?this.renderSelect():r}
        ${t?this.renderPrefix(e):r}
        ${e.status||e.body?this.renderMain(e):r}
        ${e.suffix?p`<slot
              name="suffix"
              class="cp-chip__suffix"
              part="suffix"
            ></slot>`:r}
      </div>
    `}};function Bc(){return this.size??(this.thumbSize?Nc[this.thumbSize]:null)??yo.Small}function Vc(){for(let e of this.querySelectorAll(`craft-button:not([inherit])`))e.closest(`craft-chip`)===this&&e.toggleAttribute(`inherit`,!0)}function Hc(e){v(Ic,this,e.shiftKey),e.stopPropagation()}function Uc(e){e.stopPropagation()}function Wc(e){let{checked:t}=e.target;this.selected=t,this.dispatchEvent(new CustomEvent(`craft-selection-change`,{detail:{selected:t,shiftKey:g(Ic,this)},bubbles:!0,composed:!0}))}function Gc(e){return Array.from(this.childNodes).some(t=>t instanceof Element?t.slot===e&&(t.localName!==`div`||t.childElementCount!==0||t.textContent.trim()!==``):e===``&&t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!==``)}function Kc(){return{prefix:b(Fc,this,Gc).call(this,`prefix`),thumbnail:this.showThumb&&b(Fc,this,Gc).call(this,`thumbnail`),icon:!!this.icon||b(Fc,this,Gc).call(this,`icon`),status:b(Fc,this,Gc).call(this,`status`),body:b(Fc,this,Gc).call(this,``),suffix:b(Fc,this,Gc).call(this,`suffix`)}}function qc(e){if(this.selectable)return`select`;for(let t of[`prefix`,`thumbnail`,`icon`,`status`])if(e[t])return t;return`body`}zc.styles=[ne,Mc],n([s()],zc.prototype,`size`,void 0),n([s({attribute:`thumb-size`,reflect:!0})],zc.prototype,`thumbSize`,void 0),n([s({attribute:`prefix-placement`,reflect:!0})],zc.prototype,`prefixPlacement`,void 0),n([s({reflect:!0})],zc.prototype,`variant`,void 0),n([s({reflect:!0})],zc.prototype,`appearance`,void 0),n([s({attribute:`align-items`})],zc.prototype,`alignItems`,void 0),n([s()],zc.prototype,`icon`,void 0),n([s({attribute:`show-status`,type:Boolean})],zc.prototype,`showStatus`,void 0),n([s({attribute:`show-thumb`,type:Boolean})],zc.prototype,`showThumb`,void 0),n([s({type:Boolean})],zc.prototype,`selectable`,void 0),n([s({type:Boolean,reflect:!0,attribute:`full-width`})],zc.prototype,`fullWidth`,void 0),n([s({type:Boolean,reflect:!0})],zc.prototype,`selected`,void 0),n([s({attribute:`select-label`})],zc.prototype,`selectLabel`,void 0),n([s({attribute:`select-disabled`,type:Boolean})],zc.prototype,`selectDisabled`,void 0),customElements.get(`craft-chip`)||customElements.define(`craft-chip`,zc);var Jc=e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))},Yc=e=>{e.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},Xc=class extends pi(u){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:`tabindex`}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`listbox`)}createRenderRoot(){return this}},Zc=D(e=>class extends Zr(Kr(hi(Nt(fi(e))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:`selection-follows-focus`},rotateKeyboardNavigation:{type:Boolean,attribute:`rotate-keyboard-navigation`},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:`has-no-default-selected`},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],a`
          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            color: #adadad;
          }

          :host([orientation='horizontal']) ::slotted([role='listbox']) {
            display: flex;
          }
        `]}_inputGroupInputTemplate(){return p`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":Xc}}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`lion-options`);return e.setAttribute(`data-tag-name`,`lion-options`),e.registrationTarget=this,e}}}get _inputNode(){return this.querySelector(`[slot="input"]`)}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector(`slot[name=input]`)}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(e=>e.active===!0)}set activeIndex(e){if(this.formElements[e]){let t=this.formElements[e];this.__setChildActive(t)}else this.__setChildActive(null)}get checkedIndex(){let e=this.formElements;return this.multipleChoice?e.filter(e=>e.checked).map(t=>e.indexOf(t)):e.indexOf(e.find(e=>e.checked))}set checkedIndex(e){this.setCheckedIndex(e)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation=`vertical`,this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole=`choice-group`,this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(e){super.firstUpdated(e),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(e){if(this.multipleChoice&&Array.isArray(e)){this._uncheckChildren(this.formElements.filter(t=>t===e)),e.forEach(e=>{this.formElements[e]&&(this.formElements[e].checked=!this.formElements[e].checked)});return}typeof e==`number`&&(e===-1&&this._uncheckChildren(),this.formElements[e]&&(this.formElements[e].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[e].checked=!this.formElements[e].checked:this.formElements[e].checked=!0))}addFormElement(e,t){super.addFormElement(e,t),e.id=e.id||`${this.localName}-option-${It()}`,this.disabled&&e.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements(`aria-setsize`,this.formElements.length),this.formElements.forEach((e,t)=>{e.setAttribute(`aria-posinset`,t+1)}),this.__proxyChildModelValueChanged({target:e}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(e,{setAsChecked:t}){let{key:n,code:r}=e;if(r.startsWith(`Key`)||r.startsWith(`Digit`)||r.startsWith(`Numpad`)){e.preventDefault(),this.__typedChars.push(n);let r=this.__typedChars.join(``),i=this.formElements.findIndex(e=>e.modelValue.value.toLowerCase().startsWith(r));i>=0&&(t&&this.setCheckedIndex(i),this.activeIndex=i),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener(`slotchange`,()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener(`keydown`,this._listboxOnKeyDown),this._listboxNode.removeEventListener(`click`,this._listboxOnClick),this._listboxNode.removeEventListener(`keyup`,this._listboxOnKeyUp))}_getNextEnabledOption(e,t=1){return this.__getEnabledOption(e,t)}_getPreviousEnabledOption(e,t=-1){return this.__getEnabledOption(e,t)}_onChildActiveChanged({target:e}){e.active===!0&&this.__setChildActive(e)}_listboxOnKeyDown(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case` `:case`Enter`:if(t===` `&&this._listboxReceivesNoFocus||(t===` `&&e.preventDefault(),!this.formElements[this.activeIndex])||this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break;case`ArrowUp`:e.preventDefault(),this.orientation===`vertical`&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case`ArrowLeft`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation===`horizontal`&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case`ArrowDown`:e.preventDefault(),this.orientation===`vertical`&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case`ArrowRight`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.orientation===`horizontal`&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case`Home`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case`End`:if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(t)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(e){}_listboxOnKeyUp(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case`ArrowUp`:case`ArrowDown`:case`Home`:case`End`:case`Enter`:e.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(e,t){e.scrollIntoView({behavior:`smooth`,block:`nearest`})}__setupEventListeners(){this._listboxNode.addEventListener(`active-changed`,this._onChildActiveChanged),this._listboxNode.addEventListener(`model-value-changed`,this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener(`active-changed`,this._onChildActiveChanged),this._listboxNode.removeEventListener(`model-value-changed`,this.__proxyChildModelValueChanged)}__setChildActive(e){if(this.formElements.forEach(t=>{t.active=e===t}),!e){this._activeDescendantOwnerNode.removeAttribute(`aria-activedescendant`);return}this._activeDescendantOwnerNode.setAttribute(`aria-activedescendant`,e.id),this._scrollIntoView(e,this._scrollTargetNode)}_uncheckChildren(e=[]){let t=Array.isArray(e)?e:[e];this.formElements.forEach(e=>{t.includes(e)||(e.checked=!1)})}__onChildCheckedChanged(e){let{target:t}=e;e.stopPropagation&&e.stopPropagation(),t.checked&&!this.multipleChoice&&this._uncheckChildren(t)}__setAttributeForAllFormElements(e,t){this.formElements.forEach(n=>{n.setAttribute(e,t)})}__proxyChildModelValueChanged(e){e.stopPropagation&&e.stopPropagation(),this.__onChildCheckedChanged(e),this.requestUpdate(`modelValue`,this._oldModelValue),e.detail&&e.detail.formPath&&this.dispatchEvent(new CustomEvent(`model-value-changed`,{detail:{formPath:e.detail.formPath,isTriggeredByUser:e.detail.isTriggeredByUser||this._isHandlingUserInput,element:e.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(e,t){let n=e=>t===1?e<this.formElements.length:e>=0;for(let r=e+t;n(r);r+=t)if(this.formElements[r]&&!this.formElements[r].hasAttribute(`aria-hidden`))return r;if(this.rotateKeyboardNavigation){let e=t===-1?this.formElements.length-1:0;for(let r=e;n(r);r+=t)if(this.formElements[r]&&!this.formElements[r].hasAttribute(`aria-hidden`))return r}return e}__moveOptionsToListboxNode(){let e=this.shadowRoot.getElementById(`options-outlet`);e&&(jt(this,this._listboxNode),e.addEventListener(`slotchange`,()=>{jt(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(e){if(this.disabled)return;let{key:t}=e;switch(t){case`ArrowUp`:case`ArrowDown`:case`Home`:case`End`:e.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute(`role`,`listbox`),this._listboxNode.setAttribute(`aria-orientation`,this.orientation),this._listboxNode.setAttribute(`aria-multiselectable`,`${this.multipleChoice}`),this._listboxNode.setAttribute(`tabindex`,`0`),this._listboxNode.addEventListener(`click`,this._listboxOnClick),this._listboxNode.addEventListener(`keyup`,this._listboxOnKeyUp),this._listboxNode.addEventListener(`keydown`,this._listboxOnKeyDown),this._scrollTargetNode.addEventListener(`keydown`,this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}}),Qc=class extends Zc(or(li(si(u)))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}},$c=class extends kt(_i(Xr(Nt(u)))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[a`
        :host {
          display: block;
          background-color: white;
          padding: 4px;
          cursor: default;
        }

        :host([hidden]) {
          display: none;
        }

        :host(:hover) {
          background-color: #eee;
        }
        :host([active]) {
          background-color: #ddd;
        }

        :host([checked]) {
          background-color: #bde4ff;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`active`&&this.active!==t&&this.dispatchEvent(new Event(`active-changed`,{bubbles:!0}))}updated(e){super.updated(e),e.has(`checked`)&&this.setAttribute(`aria-selected`,`${this.checked}`),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`)}render(){return p`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`)}__registerEventListeners(){this.addEventListener(`click`,this.__onClick)}__unRegisterEventListeners(){this.removeEventListener(`click`,this.__onClick)}__onClick(){if(this.disabled)return;let e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}},el=a`
  :host([checked]),
  :host([aria-selected='true']) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host {
    --c-option-wide-threshold: 640;
    /* LionOption hard-codes a white fill */
    background-color: transparent;
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font: inherit;
    border-radius: var(--c-radius-sm);
  }

  :host(:hover) {
    background-color: var(--c-color-neutral-fill-normal);
    color: var(--c-color-neutral-on-normal);
  }

  :host([active]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host([checked]),
  :host([aria-selected='true']) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host([disabled]) {
    color: var(--c-color-neutral-on-normal);
  }

  .hint {
    color: color-mix(in srgb, currentColor, transparent 25%);
    align-self: end;
    font-size: 0.8em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host([active]) .hint,
  :host([aria-selected='true']) .hint {
    color: var(--c-color-neutral-on-loud);
  }

  .choice-field__label {
    display: grid;
    max-width: 100%;
  }

  :host([wide]) .choice-field__label {
    align-items: baseline;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,tl=new WeakMap,nl=new WeakSet,rl=class extends $c{constructor(...e){super(...e),_(this,nl),this.hint=null,y(this,tl,void 0)}static get styles(){return[...$c.styles,el]}connectedCallback(){super.connectedCallback(),al._.observe(this)}disconnectedCallback(){super.disconnectedCallback(),al._.unobserve(this)}render(){return p`
      <div class="choice-field__label">
        <slot></slot>
        ${this.hint?p`<span class="hint">${this.hint}</span>`:r}
        <slot name="suffix"></slot>
      </div>
    `}};function il(){return g(tl,this)??v(tl,this,parseInt(getComputedStyle(this).getPropertyValue(`--c-option-wide-threshold`)||`640`,10)),g(tl,this)}var al={_:new ResizeObserver(e=>{for(let t of e){let e=t.target,n=t.borderBoxSize?.[0]?.inlineSize??t.contentRect.width;e.toggleAttribute(`wide`,n>=b(nl,e,il).call(e))}})};n([s()],rl.prototype,`hint`,void 0),customElements.get(`craft-option`)||customElements.define(`craft-option`,rl);var ol=new WeakMap;function sl(e,t){Array.from(e.childNodes).forEach(n=>{if(n.nodeName===`#text`){let r=RegExp(`^(.*?)(${t})(.*)$`,`i`),i=n.nodeValue.match(r);if(i){let t=document.createTextNode(i[1]);e.appendChild(t);let r=document.createElement(`b`);r.textContent=i[2],e.appendChild(r);let a=document.createTextNode(i[3]);e.appendChild(a),e.removeChild(n),ol.set(e,()=>{e.appendChild(n),e.contains(t)&&t.parentNode!==null&&t.parentNode.removeChild(t),e.contains(r)&&r.parentNode!==null&&r.parentNode.removeChild(r),e.contains(a)&&a.parentNode!==null&&a.parentNode.removeChild(a)})}}else sl(n,t)})}function cl(e){ol.has(e)&&ol.get(e)(),Array.from(e.childNodes).forEach(e=>{e.nodeName===`#text`?ol.has(e)&&ol.get(e)():cl(e)})}var ll=class extends ii{static get validatorName(){return`MatchesOption`}execute(e,t,n){return n?.node.modelValue instanceof Yr}};function ul(e){return Array.isArray(e)?e:[e]}var dl=D(e=>class extends hi(e){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:`allow-custom-choice`},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(e){if(super.modelValue=e,e==null||e===``)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(ul(e)),this.requestUpdate(`modelValue`,t)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(e){if(super.formattedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(ul(e).map(e=>this.formElements.find(t=>t.formattedValue===e)?.modelValue||e)),this.requestUpdate(`modelValue`,t)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(e){if(super.serializedValue=e,e==null)this._customChoices=new Set;else if(this.allowCustomChoice){let t=this.modelValue;this._customChoices=new Set(ul(e).map(e=>this.formElements.find(t=>t.serializedValue===e)?.modelValue||e)),this.requestUpdate(`modelValue`,t)}}get customChoices(){if(!this.allowCustomChoice)return[];let e=this._getCheckedElements();return Array.from(this._customChoices).filter(t=>!e.some(e=>e.choiceValue===t))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(e){let t=e;return this.allowCustomChoice?this.multipleChoice?[...ul(t),...this.customChoices]:t===``?this._customChoices.values().next().value||``:t:t}_isEmpty(){return super._isEmpty()&&this._customChoices.size===0}clear(){this._customChoices=new Set,super.clear()}parser(e){return this.allowCustomChoice&&Array.isArray(e)?e.filter(e=>e.trim()!==``):e}}),fl=new WeakMap,pl=class extends Br(vn(dl(Qc))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:`match-mode`},showAllOnEmpty:{type:Boolean,attribute:`show-all-on-empty`},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:`allow-custom-choice`},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,a`
        .input-group__input {
          display: flex;
          flex: 1;
        }

        .input-group__container {
          display: flex;
          border-bottom: 1px solid;
        }

        * > ::slotted([slot='input']) {
          outline: none;
          flex: 1;
          box-sizing: border-box;
          border: none;
          width: 100%;
          /* border-bottom: 1px solid; */
        }

        * > ::slotted([role='listbox']) {
          max-height: 200px;
          display: block;
          overflow: auto;
          z-index: 1;
          background: white;
        }
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case`bg-BG`:case`bg`:return O(()=>import(`./bg-Bs0XcBVB.js`),[],import.meta.url);case`cs-CZ`:case`cs`:return O(()=>import(`./cs-B8DQIi4_.js`),[],import.meta.url);case`de-AT`:case`de-DE`:case`de`:return O(()=>import(`./de-BGf3YhNb.js`),[],import.meta.url);case`en-AU`:case`en-GB`:case`en-PH`:case`en-US`:case`en`:return O(()=>import(`./en-D-xWIAUL.js`),[],import.meta.url);case`es-ES`:case`es`:return O(()=>import(`./es-BxznwUyK.js`),[],import.meta.url);case`fr-FR`:case`fr-BE`:case`fr`:return O(()=>import(`./fr-Cma_rLCi.js`),[],import.meta.url);case`hu-HU`:case`hu`:return O(()=>import(`./hu-oz_RH6aJ.js`),[],import.meta.url);case`it-IT`:case`it`:return O(()=>import(`./it-BUnCsVOb.js`),[],import.meta.url);case`nl-BE`:case`nl-NL`:case`nl`:return O(()=>import(`./nl-BgK25p-m.js`),[],import.meta.url);case`pl-PL`:case`pl`:return O(()=>import(`./pl-BFxKYQFW.js`),[],import.meta.url);case`ro-RO`:case`ro`:return O(()=>import(`./ro-DXnny9tt.js`),[],import.meta.url);case`ru-RU`:case`ru`:return O(()=>import(`./ru-DxR-HmN-.js`),[],import.meta.url);case`sk-SK`:case`sk`:return O(()=>import(`./sk-Hha-L2N4.js`),[],import.meta.url);case`uk-UA`:case`uk`:return O(()=>import(`./uk-CvmsXQbu.js`),[],import.meta.url);case`zh-CN`:case`zh`:return O(()=>import(`./zh-CgAr6HSc.js`),[],import.meta.url);default:return O(()=>import(`./en-D-xWIAUL.js`),[],import.meta.url)}}},...super.localizeNamespaces]}get modelValue(){let e=super.modelValue;return e===``?this.parser(this.value):e}set modelValue(e){super.modelValue=e}get value(){return this._inputNode?.value||this.__value||``}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),!this.showAllOnEmpty||!this.opened?e.style.display=`none`:(e.style.display=``,e.setAttribute(`aria-posinset`,`${t+1}`),e.setAttribute(`aria-setsize`,`${this.formElements.length}`),e.removeAttribute(`aria-hidden`))})}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return p`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit(`lion-combobox:optionsPopup`)}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return p` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if(this._ariaVersion===`1.1`){let e=document.createElement(`div`),t=document.createElement(`input`);return t.style.cssText=`
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font: inherit;
          background: inherit;
          color: inherit;
          border-radius: inherit;
          box-sizing: border-box;
          padding: 0;`,e.appendChild(t),e}return document.createElement(`input`)},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector(`[slot="input"]`)}get _selectionDisplayNode(){return this.querySelector(`[slot="selection-display"]`)}get _inputNode(){return this._ariaVersion===`1.1`&&this._comboboxNode&&this._comboboxNode.querySelector(`input`)||this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(`.input-group__container`)}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>e.slot===`listbox`)}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete=`both`,this.matchMode=`all`,this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new ll),this._ariaVersion=Ft.isChromium?`1.1`:`1.0`,this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected=``,this.__prevCboxValue=``,this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,n){if(super.requestUpdate(e,t,n),(e===`disabled`||e===`readOnly`)&&this.__setComboboxDisabledAndReadOnly(),e===`modelValue`&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{let e=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(e)}}parser(e){return this.requireOptionMatch&&this.checkedIndex===-1&&e!==``&&!Array.isArray(e)?new Yr(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){let e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){let e=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(e)||this.setCheckedIndex(-1)}}updated(e){super.updated(e),e.has(`__shouldAutocompleteNextUpdate`)&&this.__unsyncCheckedIndexOnInputChange(),e.has(`opened`)&&(this.opened&&(this.activeIndex=-1),!this.opened&&e.get(`opened`)!==void 0&&(this.__onOverlayClose(),this.activeIndex=-1)),e.has(`autocomplete`)&&this._inputNode.setAttribute(`aria-autocomplete`,this.autocomplete),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`),e.has(`__shouldAutocompleteNextUpdate`)&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),typeof this._selectionDisplayNode?.onComboboxElementUpdated==`function`&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let n=-1,r=this._getTextboxValueFromOption(e);return typeof r==`string`&&typeof t==`string`&&(n=r.toLowerCase().indexOf(t.toLowerCase())),this.matchMode===`all`?n>-1:n===0}_showOverlayCondition({lastKey:e}){return this.disabled||this.readOnly||e&&([`Tab`,`Escape`].includes(e)||!this.multipleChoice&&[`Enter`].includes(e))?!1:this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected?!0:this.opened}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof Yr?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){e.key===`Tab`&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value=``,this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):this.checkedIndex!==-1&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:`overlay-close`})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(e=>!e.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=``}_highlightMatchedOption(e,t){if(sl(e,t),e.textContent){let t=document.createElement(`span`);t.setAttribute(`aria-label`,e.textContent.replace(/\s+/g,` `)),Array.from(e.childNodes).forEach(e=>{t.appendChild(e)}),e.appendChild(t),fl.set(e,()=>{Array.from(t.childNodes).forEach(t=>{e.appendChild(t)}),e.contains(t)&&e.removeChild(t)})}}_onFilterUnmatch(e,t,n){this._unhighlightMatchedOption(e),e.style.display=`none`}_unhighlightMatchedOption(e){cl(e),fl.has(e)&&fl.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){let n=e.length<t.length,r=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return n||r||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){let e=this._inputNode.selectionStart!==this._inputNode.selectionEnd&&this._inputNode.value.length!==this._inputNode.selectionStart,t=this._inputNode.value,n=this._inputNode.selectionStart,r=e&&n?t.slice(0,n):t,i=e||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,a=!r,o=[],s=!1,c=this.__computeUserIntendsAutoFill({prevValue:i,curValue:r}),l=this.autocomplete===`both`||this.autocomplete===`inline`,u=this._autoSelectCondition(),d=this.autocomplete===`inline`||this.autocomplete===`none`;this.formElements.forEach((e,t)=>{let n=this.matchCondition(e,r),f=!1;if(f=a?this.showAllOnEmpty:d||n,u&&!s&&n&&!e.disabled){let n=()=>{this.activeIndex=t,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),s=!0};if(c)if(l){let t=this._getTextboxValueFromOption(e);typeof t==`string`&&t!==``&&typeof r==`string`&&r!==``&&t.toLowerCase().indexOf(r.toLowerCase())===0&&(this.__textboxInlineComplete(e),n())}else n()}e.onFilterUnmatch?e.onFilterUnmatch(r,i):this._onFilterUnmatch(e,r,i),e.setAttribute(`aria-hidden`,`true`),e.removeAttribute(`aria-posinset`),e.removeAttribute(`aria-setsize`),f&&(o.push(e),e.onFilterMatch?e.onFilterMatch(r):this._onFilterMatch(e,r))});let f=o.length;o.forEach((e,t)=>{e.setAttribute(`aria-posinset`,`${t+1}`),e.setAttribute(`aria-setsize`,`${f}`),e.removeAttribute(`aria-hidden`)}),u&&!s&&!this.multipleChoice&&(this.setCheckedIndex(-1),i!==r&&(this.activeIndex=-1),this.modelValue=this.parser(t)),this.__prevCboxValueNonSelected=r,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=c,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){let t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){let e=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=e,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return this.autocomplete===`both`||this.autocomplete===`inline`}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute(`tabindex`)}_defineOverlayConfig(){return{...xn(),elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener(`keyup`,this._onKeyUp),this._inputNode.addEventListener(`click`,this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener(`keyup`,this._onKeyUp),this._inputNode.removeEventListener(`click`,this._textboxOnClick)}_listboxOnKeyDown(e){let{key:t}=e;switch(t){case`Escape`:this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue(``);break;case`Backspace`:case`Delete`:this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case`Enter`:this.opened&&e.preventDefault(),!this.requireOptionMatch&&this.multipleChoice&&(!this.formElements[this.activeIndex]||this.formElements[this.activeIndex].hasAttribute(`aria-hidden`)||!this.opened)?(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value=``,this.opened=!1):(super._listboxOnKeyDown(e),this._resetListboxOptions()),this.multipleChoice?this._inputNode.value=``:this.opened=!1;break;default:super._listboxOnKeyDown(e);break}}_syncToTextboxCondition(e,t,{phase:n}={}){return this.autocomplete===`both`||this.autocomplete===`inline`||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){let n=e.filter(e=>!t.includes(e)),r=this.formElements.filter(e=>n.includes(e.choiceValue)).map(e=>this._getTextboxValueFromOption(e)).join(` `);this._setTextboxValue(r)}}_enhanceLightDomClasses(){let e=this.querySelector(`[slot=input]`);e&&e.classList.add(`form-control`)}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute(`disabled`,this.disabled),this._comboboxNode.setAttribute(`aria-disabled`,`${this.disabled}`),this._comboboxNode.toggleAttribute(`readonly`,this.readOnly),this._comboboxNode.setAttribute(`aria-readonly`,`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute(`disabled`,this.disabled),this._inputNode.toggleAttribute(`readOnly`,this.readOnly),this._inputNode.setAttribute(`aria-readonly`,`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute(`role`,`combobox`),this._comboboxNode.setAttribute(`aria-haspopup`,`listbox`),this._inputNode.setAttribute(`aria-autocomplete`,this.autocomplete),this._comboboxNode.setAttribute(`aria-controls`,this._listboxNode.id),this._ariaVersion===`1.1`?this._comboboxNode.setAttribute(`aria-owns`,this._listboxNode.id):this._inputNode.setAttribute(`aria-owns`,this._listboxNode.id),this._listboxNode.setAttribute(`aria-labelledby`,this._labelNode.id),this._inputNode.addEventListener(`keydown`,this._listboxOnKeyDown),this._inputNode.addEventListener(`input`,this._textboxOnInput),this._inputNode.addEventListener(`keydown`,this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener(`keydown`,this._listboxOnKeyDown),this._inputNode.removeEventListener(`input`,this._textboxOnInput),this._inputNode.removeEventListener(`keydown`,this._textboxOnKeydown)}_onKeyUp(e){let t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value=``,super.clear(),this.__shouldAutocompleteNextUpdate=!0}},ml=a`
  ${Un}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    ${Hn}
  }

  /* Lion sets the field's width as an inline min-width, which wins over this cap on wider fields */
  #overlay-content-node-wrapper {
    max-inline-size: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
  }

  ::slotted([slot='listbox']) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
  }

  .input-group__input {
    ${Vn}
  }

  .input-group__container {
    border: 0;
  }

  /*
    The chevron's padding fills the end of the field beside the clear button, so
    the whole area is a target for opening the list. It focuses the textbox, so
    it shows the textbox's cursor.
  */
  .indicator {
    position: absolute;
    inset-block: 0;
    inset-inline-end: 0;
    width: 1em;
    height: auto;
    padding-inline: calc(var(--c-input-spacing-inline) * 0.5)
      var(--c-input-spacing-inline);
  }

  :host(:not([disabled], [readonly])) .indicator {
    cursor: text;
  }

  .clear {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    transform: translateY(-50%);
  }

  .prefix {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    pointer-events: none;
  }

  .prefix--indicator {
    display: flex;
  }

  :host([has-prefix-icon]) ::slotted(.form-control) {
    padding-inline-start: calc(var(--c-input-spacing-inline) * 1.5 + 1em);
  }

  :host([multiple-choice]) .input-group__input {
    ${Bn}
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-xs);
  }

  :host([multiple-choice]) .input-group__input:focus-within {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  /* Lion turns off the textbox's own outline, so draw the ring on its wrapper */
  :host(:not([multiple-choice])) ::slotted(.form-control:focus-within) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host([multiple-choice][has-feedback-for='error']) .input-group__input {
    border-color: var(--c-color-danger-border-loud);
  }

  .combobox__textbox {
    position: relative;
    flex: 1;
    min-width: 0;
  }

  :host([multiple-choice]) .combobox__textbox {
    min-width: 8rem;
  }

  :host([multiple-choice]) ::slotted(.form-control) {
    height: calc(
      var(--c-input-height, var(--c-size-control-md)) - 2 *
        (var(--c-spacing-xs) + var(--_input-border-width))
    );
    min-height: 0;
    padding-inline-start: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    outline: none;
  }

  .token {
    box-sizing: border-box;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-xs);
    border-radius: var(--c-radius-sm);
    background: var(--c-color-neutral-fill-quiet);
    overflow-wrap: anywhere;
  }

  .token button {
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  .combobox__option {
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .combobox__optgroup {
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font-size: 0.8em;
    text-transform: uppercase;
    color: var(--c-color-neutral-on-normal);
    border-block-end: 1px solid var(--c-color-neutral-border-quiet);
  }

  .combobox__footer {
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font-size: 0.85em;
    color: var(--c-text-quiet);
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
  }
`;function hl(e){return _o.includes(e)||ie.includes(e)?`var(--c-color-${e}-fill-loud)`:e}var gl=new WeakMap,_l=new WeakMap,vl=new WeakMap,z=new WeakSet,yl=new WeakMap,bl=new WeakMap,xl=new WeakMap,Sl=new WeakMap,Cl=new WeakMap,wl=new WeakMap,Tl=class extends nr(pl){static get properties(){return{modelValue:{attribute:`model-value`}}}attributeChangedCallback(e,t,n){if(e===`model-value`){this.modelValue=this.hasAttribute(`multiple-choice`)?JSON.parse(n??`[]`):n??``;return}super.attributeChangedCallback(e,t,n)}static get styles(){return[...super.styles,ml]}get modelValue(){return super.modelValue}set modelValue(e){this.pendingModelValue=e,super.modelValue=e}constructor(){super(),_(this,z),this.multipleChoice=!1,this.required=!1,this.initialValues=[],this.fieldsetDisabled=!1,this.changingValues=!1,this.options=[],this.limit=150,this.clearable=!1,this.placeholder=``,this.showSelectedHint=!1,y(this,gl,void 0),y(this,_l,void 0),y(this,vl,!1),y(this,yl,!1),y(this,bl,e=>{e.stopPropagation(),v(yl,this,!0);try{v(vl,this,!0),b(z,this,Nl).call(this),!this.multipleChoice&&!this.requireOptionMatch&&b(z,this,Ol).call(this)}finally{v(yl,this,!1)}Jc(this)}),y(this,xl,()=>{if(this.multipleChoice){this.changeValues([]);return}this.modelValue=``,this._inputNode&&(this._inputNode.value=``),b(z,this,Nl).call(this),this._inputNode?.focus()}),y(this,Sl,!1),y(this,Cl,e=>{e.button!==0||this.inactive||(e.preventDefault(),v(Sl,this,!!this.opened),this._inputNode?.focus())}),y(this,wl,()=>{this.inactive||(this.opened=!g(Sl,this))}),this.defaultValidators=[],this.autocomplete=`list`,this.selectionFollowsFocus=!1,this.addEventListener(`model-value-changed`,e=>{if(this.changingValues){e.stopImmediatePropagation();return}if(e.target===this&&!e.detail?.isTriggeredByUser&&this.pendingModelValue!==void 0&&JSON.stringify(this.modelValue)!==JSON.stringify(this.pendingModelValue)){e.stopImmediatePropagation();return}e.target===this&&e.detail?.isTriggeredByUser&&(this.pendingModelValue=this.multipleChoice?[...this.selectedValues]:this.modelValue,this.multipleChoice&&(this.syncInputs(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))))}),this.addEventListener(`focusout`,e=>{this.multipleChoice&&!this.requireOptionMatch&&!(e.relatedTarget instanceof Node&&this.contains(e.relatedTarget))&&this.commitQuery()})}firstUpdated(e){super.firstUpdated(e),this._inputNode?.addEventListener(`input`,g(bl,this)),this._inputNode?.addEventListener(`change`,e=>e.stopPropagation()),this.addEventListener(`model-value-changed`,()=>{v(gl,this,this.modelValue),g(yl,this)||(Jc(this),b(z,this,Dl).call(this))}),this.addEventListener(`blur`,()=>b(z,this,Dl).call(this)),v(gl,this,this.modelValue),v(_l,this,this.modelValue),b(z,this,Nl).call(this),b(z,this,El).call(this),this.multipleChoice&&(this.initialValues=[...Array.isArray(this.pendingModelValue)?this.pendingModelValue:[]])}updated(e){super.updated(e),b(z,this,Rl).call(this);let t=this.getAttribute(`aria-labelledby`);if(t&&this._inputNode?.setAttribute(`aria-labelledby`,t),this._listboxNode?.setAttribute(`aria-labelledby`,this._inputNode.getAttribute(`aria-labelledby`)??``),this._comboboxNode?.setAttribute(`aria-labelledby`,this._inputNode.getAttribute(`aria-labelledby`)??``),this.multipleChoice){this.syncInputs(),this._inputNode.removeAttribute(`name`),this._inputNode.disabled=this.disabled||this.fieldsetDisabled;let e=this.required&&!this.inactive&&this.selectedValues.length===0;this.internals??=this.attachInternals(),this.internals.setValidity(e?{valueMissing:!0}:{},e?S(`This field is required.`):``,this._inputNode)}e.has(`opened`)&&!this.opened&&v(vl,this,!1),e.has(`placeholder`)&&(this._inputNode.placeholder=this.placeholder),(e.has(`options`)||e.has(`limit`)||e.has(`opened`)||e.has(`modelValue`)||e.has(`showSelectedHint`)||e.has(`multipleChoice`))&&b(z,this,Nl).call(this),(e.has(`options`)||e.has(`modelValue`))&&this.toggleAttribute(`has-prefix-icon`,b(z,this,Bl).call(this)?.data?.icon!=null||b(z,this,Bl).call(this)?.data?.indicator!=null)}addFormElement(e,t){super.addFormElement(e,t);let n=e;n.updateComplete.then(()=>{if(this.multipleChoice){n.checked=Array.isArray(this.pendingModelValue)&&this.pendingModelValue.includes(String(n.choiceValue));return}String(n.choiceValue)===String(this.pendingModelValue)&&(super.modelValue=this.pendingModelValue,this._setTextboxValue(this._getTextboxValueFromOption(n)))})}_notifyModelValueChanged(){JSON.stringify(this.modelValue)!==JSON.stringify(g(gl,this))&&(v(gl,this,this.modelValue),this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,composed:!0,detail:{formPath:[this],isTriggeredByUser:!0,changeSource:this.multipleChoice?`selection`:`input`}})))}matchCondition(e){return!this.multipleChoice||!e.hidden}_autoSelectCondition(){return!this.multipleChoice}_highlightMatchedOption(){}_unhighlightMatchedOption(){}_showOverlayCondition(e){return!this.disabled&&!this.readOnly&&(e.lastKey===`ArrowDown`||e.lastKey===`ArrowUp`)||super._showOverlayCondition(e)}_inputGroupInputTemplate(){let e=b(z,this,Bl).call(this)?.data,t=e?.icon,n=e?.indicator;return p`
      <div class="input-group__input">
        ${this.multipleChoice?es(this.selectedValues,e=>e,e=>p`
                <span class="token">
                  ${b(z,this,Fl).call(this,b(z,this,Ll).call(this,e)?.data??{})}
                  ${this.valueLabel(e)}
                  ${this.inactive?r:p`<button
                        type="button"
                        aria-label=${S(`Remove {label}`,{label:this.valueLabel(e)})}
                        @click=${()=>this.changeValues(this.selectedValues.filter(t=>t!==e))}
                      >
                        ×
                      </button>`}
                </span>
              `):r}
        <div class="combobox__textbox">
          ${t?p`<craft-icon class="prefix" name=${t}></craft-icon>`:n?p`<span class="prefix prefix--indicator">
                  <craft-indicator
                    fill=${n.fill??r}
                    appearance=${n.appearance??r}
                  ></craft-indicator>
                </span>`:r}
          <slot name="input"></slot>
          ${this.clearable&&b(z,this,Il).call(this)&&!this.inactive?p`<craft-button
                class="clear"
                type="button"
                variant="plain"
                size="small"
                icon
                aria-label=${S(`Clear`)}
                @mousedown=${e=>e.preventDefault()}
                @click=${g(xl,this)}
              >
                <craft-icon
                  name="xmark-large"
                  style="font-size: 0.8em"
                ></craft-icon>
              </craft-button>`:r}
          <craft-icon
            class="indicator"
            name="chevron-down"
            style="font-size: 0.8em"
            @mousedown=${g(Cl,this)}
            @click=${g(wl,this)}
          ></craft-icon>
        </div>
      </div>
    `}get selectedValues(){return Array.isArray(this.modelValue)?this.modelValue:[]}get inactive(){return this.disabled||this.readOnly||this.fieldsetDisabled}valueLabel(e){return b(z,this,Ll).call(this,e)?.label??e}syncInputs(){this.inputs||(this.inputs=document.createElement(`span`),this.inputs.hidden=!0,this.inputs.slot=`native-inputs`,this.inputs.setAttribute(`data-combobox-inputs`,``),this.append(this.inputs)),o(!this.name||this.disabled||this.fieldsetDisabled?r:p`
            <input type="hidden" name=${this.name} value="" />
            ${this.selectedValues.map(e=>p`<input
                  type="hidden"
                  name=${`${this.name}[]`}
                  .value=${e}
                />`)}
          `,this.inputs)}formResetCallback(){if(this.multipleChoice){this.modelValue=[...this.initialValues],this.value=``,this.syncInputs();return}b(z,this,Rl).call(this)}formDisabledCallback(e){this.fieldsetDisabled=e,this.requestUpdate(),this.multipleChoice&&this.syncInputs()}changeValues(e){if(!this.inactive){this.changingValues=!0;try{this.modelValue=e}finally{this.changingValues=!1}this.value=``,this.opened=!1,b(z,this,Nl).call(this),this.syncInputs(),this._notifyModelValueChanged(),this._inputNode.focus()}}commitQuery(){let e=this.value;if(this.inactive||e===``)return;let t=[...b(z,this,Vl).call(this)].find(t=>t.value===e);t?.disabled||this.requireOptionMatch&&!t||this.changeValues([...new Set([...this.selectedValues,e])])}_listboxOnKeyDown(e){if(!this.multipleChoice){super._listboxOnKeyDown(e);return}if(this.inactive||e.isComposing)return;if(e.key===`Backspace`&&this.value===``){e.preventDefault(),this.changeValues(this.selectedValues.slice(0,-1));return}let t=this.formElements[this.activeIndex];if(e.key===`Enter`&&(!this.opened||!t||t.hidden||t.hasAttribute(`aria-hidden`))){e.preventDefault(),this.commitQuery();return}super._listboxOnKeyDown(e)}_syncToTextboxMultiple(){}_resetListboxOptions(){super._resetListboxOptions(),this.hideSelectedOptions()}_handleAutocompletion(){super._handleAutocompletion(),this.hideSelectedOptions()}hideSelectedOptions(){if(!this.multipleChoice)return;for(let e of this.formElements)e.hidden&&(e.setAttribute(`aria-hidden`,`true`),e.removeAttribute(`aria-posinset`),e.removeAttribute(`aria-setsize`));let e=this.formElements.filter(e=>!e.hasAttribute(`aria-hidden`));e.forEach((t,n)=>{t.setAttribute(`aria-posinset`,String(n+1)),t.setAttribute(`aria-setsize`,String(e.length))})}parser(e){if(typeof e==`string`&&e!==``){let t=b(z,this,zl).call(this,e);return t?t.value:e}return super.parser(e)}_syncToTextboxCondition(e,t,n={}){return n.phase===`overlay-close`||super._syncToTextboxCondition(e,t,n)}_getTextboxValueFromOption(e){if(e){let t=e.textContent?.trim()||``;return this.showSelectedHint&&e.hint?`${t} – ${e.hint}`:t}return super._getTextboxValueFromOption(e)}};function El(){if(this.pendingModelValue===void 0||JSON.stringify(this.modelValue)===JSON.stringify(this.pendingModelValue))return;let e=this.pendingModelValue;this.changingValues=!0;try{this.modelValue=e}finally{this.changingValues=!1}v(gl,this,this.modelValue),v(_l,this,this.modelValue)}function Dl(){this.multipleChoice||this.modelValue!==g(_l,this)&&(v(_l,this,this.modelValue),Yc(this))}function Ol(){let e=this.parser(this._inputNode?.value??``);e!==this.modelValue&&(this.modelValue=e),this._notifyModelValueChanged()}function kl(e){let t=e.trim().toLowerCase(),n=[];for(let e of this.options)if(b(z,this,jl).call(this,e))for(let r of e.options)(t===``||b(z,this,Ml).call(this,t,r))&&n.push({groupLabel:e.label,option:r});else(t===``||b(z,this,Ml).call(this,t,e))&&n.push({option:e});return t===``?n:b(z,this,Al).call(this,t,n)}function Al(e,t){let n=({option:t})=>t.label.toLowerCase()===e||String(t.value).toLowerCase()===e,r=[];for(let e=0;e<t.length;){let i=e;for(;i<t.length&&t[i].groupLabel===t[e].groupLabel;)i++;let a=t.slice(e,i);r.push(...a.filter(n),...a.filter(e=>!n(e))),e=i}return r}function jl(e){return e.type===`optgroup`}function Ml(e,t){return t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e)||(t.data?.keywords?.toLowerCase().includes(e)??!1)}function Nl(){let e=this._listboxNode;if(!e)return;let t=g(vl,this)?this._inputNode?.value??``:``,n=this.multipleChoice?Array.isArray(this.pendingModelValue)?this.pendingModelValue:this.selectedValues:[],i=b(z,this,kl).call(this,t).filter(e=>!n.includes(e.option.value)),a=i.slice(0,this.limit),s=[...b(z,this,Vl).call(this)],c=[...n.map(e=>({option:s.find(t=>t.value===e)??{value:e,label:e}})),...a],l,u=c.map(e=>{let t=e.groupLabel&&e.groupLabel!==l?p`<div class="combobox__optgroup" aria-hidden="true">
              ${e.groupLabel}
            </div>`:r;return l=e.groupLabel,{value:e.option.value,template:p`${t}${b(z,this,Pl).call(this,e.option,n.includes(e.option.value))}`}}),d=i.length>this.limit?p`<div class="combobox__footer" aria-hidden="true">
            ${S(`Showing {shown} of {total} — keep typing to narrow results.`,{shown:this.limit,total:i.length})}
          </div>`:r;o(p`${es(u,e=>e.value,e=>e.template)}${d}`,e)}function Pl(e,t=!1){let n=e.data??{},i=e.label,a=i.startsWith(`$`)||i.startsWith(`@`);return p`
      <craft-option
        ?hidden=${t}
        aria-hidden=${t?`true`:r}
        .choiceValue=${String(e.value)}
        .hint=${n.hint??null}
        ?disabled=${e.disabled??!1}
      >
        <span class="combobox__option">
          ${b(z,this,Fl).call(this,n)}
          ${a?p`<code>${i}</code>`:i}
        </span>
      </craft-option>
    `}function Fl(e){return p`${e.indicator?p`<craft-indicator
          fill=${e.indicator.fill??r}
          appearance=${e.indicator.appearance??r}
        ></craft-indicator>`:r}${e.icon?p`<craft-icon
          name="${e.icon}"
          style=${e.color?`color: ${hl(e.color)}`:r}
        ></craft-icon>`:r}`}function Il(){return this.multipleChoice?this.selectedValues.length>0:this.modelValue!==``&&this.modelValue!=null}function Ll(e){return[...b(z,this,Vl).call(this)].find(t=>t.value===e)}function Rl(){if(this.multipleChoice||typeof this.attachInternals!=`function`)return;this.internals??=this.attachInternals();let e=!this.name||this.disabled||this.fieldsetDisabled,t=typeof this.modelValue==`string`?this.modelValue:``;this.internals.setFormValue(e?null:t)}function zl(e){let t=e.trim();for(let e of b(z,this,Vl).call(this))if(b(z,this,Hl).call(this,e)===t)return e}function Bl(){if(this.multipleChoice||!b(z,this,Il).call(this))return;let e=String(this.modelValue);for(let t of b(z,this,Vl).call(this))if(String(t.value)===e)return t}function*Vl(){for(let e of this.options)b(z,this,jl).call(this,e)?yield*e.options:yield e}function Hl(e){return this.showSelectedHint&&e.data?.hint?`${e.label} – ${e.data.hint}`:e.label}Tl.formAssociated=!0,n([s({type:Boolean,attribute:`multiple-choice`,reflect:!0})],Tl.prototype,`multipleChoice`,void 0),n([s({type:Boolean})],Tl.prototype,`required`,void 0),n([s({type:Array})],Tl.prototype,`options`,void 0),n([s({type:Number})],Tl.prototype,`limit`,void 0),n([s({type:Boolean,reflect:!0})],Tl.prototype,`clearable`,void 0),n([s({type:String,reflect:!0})],Tl.prototype,`placeholder`,void 0),n([s({type:Boolean,reflect:!0,attribute:`show-selected-hint`})],Tl.prototype,`showSelectedHint`,void 0),customElements.get(`craft-combobox`)||customElements.define(`craft-combobox`,Tl);function Ul(e){let[t]=e.composedPath();return t instanceof Element&&t.matches(`:focus-visible`)}function Wl(e){let t=e.invokerNode;return e._hasDisabledInvoker()&&!t?.focusableWhenDisabled}function Gl({delayIn:e=0,delayOut:t=300}={}){return{visibilityTriggerFunction:({controller:n})=>{let r=!1,i=!1,a,o=()=>{r=!1,i=!1},s=o=>{let{type:s}=o;clearTimeout(a),r=s===`focusout`?!1:r||s===`focusin`&&Ul(o),i=s===`mouseleave`?!1:i||s===`mouseenter`,a=(r||i)&&!Wl(n)?setTimeout(()=>n.show(),e):setTimeout(()=>n.hide(),t)};return{init:()=>{n.addEventListener(`hide`,o),n.contentNode?.addEventListener(`mouseenter`,s),n.contentNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`mouseenter`,s),n.invokerNode?.addEventListener(`mouseleave`,s),n.invokerNode?.addEventListener(`focusin`,s),n.invokerNode?.addEventListener(`focusout`,s)},teardown:()=>{clearTimeout(a),n.removeEventListener(`hide`,o),n.contentNode?.removeEventListener(`mouseenter`,s),n.contentNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`mouseenter`,s),n.invokerNode?.removeEventListener(`mouseleave`,s),n.invokerNode?.removeEventListener(`focusin`,s),n.invokerNode?.removeEventListener(`focusout`,s)}}}}}var Kl=class extends yn(vn(u)){static get properties(){return{invokerRelation:{type:String,attribute:`invoker-relation`}}}static get styles(){return[...super.styles,a`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted([slot='content']) {
          width: max-content;
        }
      `]}constructor(){super(),this.hasArrow=!1,this.invokerRelation=`description`}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];_defineOverlayConfig(){let e=super._defineOverlayConfig(),t=Cn({invokerRelation:this.invokerRelation});return{...e,...t,popperConfig:{...e.popperConfig||{},...t.popperConfig||{},modifiers:[...e.popperConfig?.modifiers||[],...t.popperConfig?.modifiers||[]]}}}},ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakSet,eu=class extends Kl{constructor(){super(),_(this,$l),this.placement=`top`,this.trigger=`hover focus`,y(this,ql,null),y(this,Jl,null),y(this,Yl,()=>wt(this)),y(this,Xl,()=>Tt(this)),y(this,Zl,()=>{this.opened=!this.opened}),y(this,Ql,null),xt(this)}static get styles(){return[...super.styles,Et,a`
        :host {
          display: contents;
        }

        ::slotted([slot='content']) {
          background-color: var(--c-color-black-fill-loud);
          border: 1px solid var(--c-color-black-border-loud);
          color: var(--c-color-black-on-loud);
          padding: var(--c-tooltip-padding, calc(4rem / 16) calc(8rem / 16));
          font-family: var(--c-font-body);
          font-size: var(--c-text-base);
          font-weight: 400;
          line-height: 1.3;
          border-radius: var(--c-radius-sm);
          box-shadow: var(--c-shadow-md);
          width: max-content;
          max-inline-size: var(--c-tooltip-max-width, min(45ch, 100vw - 2rem));
          overflow-wrap: break-word;
        }
      `]}connectedCallback(){b($l,this,tu).call(this),super.connectedCallback()}get _overlayInvokerNode(){if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}_defineOverlayConfig(){let e={...super._defineOverlayConfig()};if(nu.call(b($l,this))||ru.call(b($l,this)))delete e.visibilityTriggerFunction;else{let{visibilityTriggerFunction:t}=Gl({delayIn:200,delayOut:0});e.visibilityTriggerFunction=t}return{...e,popperConfig:{...e.popperConfig,strategy:`fixed`,placement:this.placement,modifiers:[...e.popperConfig?.modifiers??[],{name:`offset`,options:{offset:[0,4]}},...St()]}}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),b($l,this,iu).call(this)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),b($l,this,au).call(this)}_setupOverlayCtrl(){super._setupOverlayCtrl(),v(Jl,this,this._overlayCtrl),g(Jl,this).addEventListener(`before-show`,g(Yl,this)),g(Jl,this).addEventListener(`hide`,g(Xl,this))}_teardownOverlayCtrl(){g(Xl,this).call(this),g(Jl,this)?.removeEventListener(`before-show`,g(Yl,this)),g(Jl,this)?.removeEventListener(`hide`,g(Xl,this)),v(Jl,this,null),super._teardownOverlayCtrl()}updated(e){if(super.updated(e),!this._overlayCtrl||!this.isConnected||!(e.has(`for`)||e.has(`trigger`)))return;let{visibilityTriggerFunction:t}=this._defineOverlayConfig();b($l,this,au).call(this),this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode,visibilityTriggerFunction:t}),b($l,this,iu).call(this)}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function tu(){if(g(ql,this)?.isConnected)return;let e=document.createElement(`div`);e.slot=`content`,e.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``)),this.append(e),v(ql,this,e)}function nu(){return this.trigger.split(` `).includes(`click`)}function ru(){return this.trigger.split(` `).includes(`manual`)}function iu(){b($l,this,au).call(this),nu.call(b($l,this))&&(v(Ql,this,this._overlayInvokerNode??null),g(Ql,this)?.addEventListener(`click`,g(Zl,this)))}function au(){g(Ql,this)?.removeEventListener(`click`,g(Zl,this)),v(Ql,this,null)}n([s({reflect:!0})],eu.prototype,`for`,void 0),n([s({reflect:!0})],eu.prototype,`placement`,void 0),n([s({reflect:!0})],eu.prototype,`trigger`,void 0),customElements.get(`craft-tooltip`)||customElements.define(`craft-tooltip`,eu);var ou=a`
  :host {
    display: inline-flex;
  }
`,su={rest:`custom-icons/clone-dashed`,copying:`custom-icons/clone-dashed`,success:`check`,error:`xmark-large`},cu=new WeakMap,lu=new WeakSet,uu=class extends u{async copyValue(){if(!(this.status===`copying`||this.disabled)){this.status=`copying`;try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent(`craft-error`,{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){clearTimeout(g(cu,this)),this.status=e,await this.updateComplete,this.tooltipEl?.repositionOverlay(),v(cu,this,setTimeout(()=>{this.status=`rest`,this.tooltipEl?.hide()},this.feedbackDuration))}constructor(){super(),_(this,lu),this.isCopying=!1,this.status=`rest`,this.hasLabel=!1,this.value=``,this.disabled=!1,this.feedbackDuration=1e3,this.tooltipLabel=null,this.size=`small`,this.variant=Ia.Plain,y(this,cu,void 0),this.addEventListener(`craft-copy`,()=>{this.showStatus(`success`)}),this.addEventListener(`craft-error`,()=>{this.showStatus(`error`)})}connectedCallback(){super.connectedCallback(),this.id||=`copy-${Math.floor(Math.random()*1e8)}`}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(g(cu,this)),this.status=`rest`}render(){return p`
      <craft-tooltip for="${this.id}">${du.call(b(lu,this))}</craft-tooltip>
      <craft-button
        type="button"
        id="${this.id}"
        part="button"
        size="${this.size}"
        variant="${this.variant}"
        icon="${su[this.status]}"
        aria-label="${this.hasLabel?r:S(`Copy to clipboard`)}"
        ?disabled=${this.disabled}
        @click="${this.copyValue}"
        >${this.hasLabel?p`<slot @slotchange=${b(lu,this,fu)}></slot>`:r}</craft-button
      >
      ${this.hasLabel?r:p`<slot hidden @slotchange=${b(lu,this,fu)}></slot>`}
    `}};function du(){return this.status===`success`?S(`Copied`):this.status===`error`?S(`Copy failed`):this.tooltipLabel||S(`Copy`)}function fu(){this.hasLabel=[...this.childNodes].some(e=>e instanceof Element||!!e.textContent?.trim())}uu.styles=[ou],n([f()],uu.prototype,`isCopying`,void 0),n([f()],uu.prototype,`status`,void 0),n([f()],uu.prototype,`hasLabel`,void 0),n([h(`craft-tooltip`)],uu.prototype,`tooltipEl`,void 0),n([s({type:String})],uu.prototype,`value`,void 0),n([s({type:Boolean})],uu.prototype,`disabled`,void 0),n([s({attribute:`feedback-duration`,type:Number})],uu.prototype,`feedbackDuration`,void 0),n([s({attribute:`tooltip-label`})],uu.prototype,`tooltipLabel`,void 0),n([s({reflect:!0})],uu.prototype,`size`,void 0),n([s({reflect:!0})],uu.prototype,`variant`,void 0),customElements.get(`craft-copy-button`)||customElements.define(`craft-copy-button`,uu);var pu=a`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,mu=a`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,hu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,_u=Object.getOwnPropertySymbols,vu=Object.prototype.hasOwnProperty,yu=Object.prototype.propertyIsEnumerable,bu=e=>{throw TypeError(e)},xu=(e,t,n)=>t in e?hu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Su=(e,t)=>{for(var n in t||={})vu.call(t,n)&&xu(e,n,t[n]);if(_u)for(var n of _u(t))yu.call(t,n)&&xu(e,n,t[n]);return e},Cu=(e,t,n,r)=>{for(var i=r>1?void 0:r?gu(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&hu(t,n,i),i},wu=(e,t,n)=>t.has(e)||bu(`Cannot `+n),Tu=(e,t,n)=>(wu(e,t,`read from private field`),n?n.call(e):t.get(e)),Eu=(e,t,n)=>t.has(e)?bu(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Du=(e,t,n,r)=>(wu(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Ou,ku=class extends u{constructor(){super(),Eu(this,Ou,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,Su({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){Tu(this,Ou)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Du(this,Ou,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Ou=new WeakMap,ku.version=`2.20.1`,ku.dependencies={},Cu([s()],ku.prototype,`dir`,2),Cu([s()],ku.prototype,`lang`,2);var Au=class extends ku{render(){return p` <slot></slot> `}};Au.styles=[mu,pu],Au.define(`sl-visually-hidden`);var ju=a`
  :host {
    --craft-tooltip-font-size: calc(12rem / 16);
    display: inline-block;
  }

  slot {
    display: inline-flex;
  }

  .copy-attribute {
    font-family: var(--font-mono);
    font-size: var(--c-copy-attribute-font-size, var(--c-text-sm));
    flex-wrap: nowrap;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .copy-attribute::part(button) {
    --_border: var(
      --c-copy-attribute-border,
      1px solid hsla(209, 20%, 25%, 0.1)
    );
    border-radius: var(--c-copy-attribute-radius, 4px);
    background-color: var(--c-copy-attribute-fill, transparent);
    color: var(--c-copy-attribute-text, inherit);
    border: var(--_border);
    padding-inline: 5px;
    min-height: calc(20rem / 16);
  }

  .copy-attribute::part(button):not(.copy-attribute--success):not(
    .copy-attribute--error
  ):hover,
  .copy-attribute::part(button):not(.copy-attribute--success):not(
    .copy-attribute--error
  ):focus {
    border-color: var(--c-color-neutral-border-quiet);
    color: var(--c-text-default);
  }

  .copy-attribute--success::part(button) {
    background-color: var(
      --c-copy-attribute-success-fill,
      var(--c-copy-attribute-fill)
    );
    color: var(--c-copy-attribute-success-text, var(--c-copy-attribute-text));
    border: var(--c-copy-attribute-success-border, var(--_border));
  }

  .copy-attribute--error::part(button) {
    background-color: var(
      --c-copy-attribute-error-fill,
      var(--c-copy-attribute-fill)
    );
    color: var(--c-copy-attribute-error-text, var(--c-copy-attribute-text));
    border: var(--c-copy-attribute-error-border, var(--_border));
  }
`,Mu=class extends u{constructor(...e){super(...e),this.value=``,this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase()}`}render(){return p`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${E({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};Mu.styles=[te,ju],n([h(`craft-copy-button`)],Mu.prototype,`copyButtonEl`,void 0),n([s({type:String})],Mu.prototype,`value`,void 0),n([s({type:Boolean,reflect:!0})],Mu.prototype,`disabled`,void 0),customElements.get(`craft-copy-attribute`)||customElements.define(`craft-copy-attribute`,Mu);var Nu=[`a[href]`,`area[href]`,`button`,`input`,`select`,`textarea`,`details > summary`,`iframe`,`object`,`embed`,`audio[controls]`,`video[controls]`,`[contenteditable]`,`[tabindex]`].join(`,`);function Pu(e){return e.hasAttribute(`disabled`)||e.hasAttribute(`inert`)||e.getAttribute(`aria-hidden`)===`true`||e.hidden?!1:e.tabIndex>=0}function Fu(e){return(e.shadowRoot?[e.shadowRoot,e]:[e]).flatMap(e=>Array.from(e.querySelectorAll(Nu))).filter(Pu)}function Iu(e){let t=t=>{if(t.key!==`Tab`)return;let n=Fu(e);if(n.length===0)return;let r=n[0],i=n[n.length-1],a=t.composedPath()[0];t.shiftKey&&a===r?(t.preventDefault(),i.focus()):!t.shiftKey&&a===i&&(t.preventDefault(),r.focus())};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)}var Lu=a`
  :host {
    --_radius: var(--c-resize-grips-radius, var(--c-radius-lg));
    --_edge: calc(8rem / 16);
    --_corner: calc(16rem / 16);
    --_line: 2px;
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    border-radius: var(--_radius);
    pointer-events: none;
  }

  .grip {
    position: absolute;
    display: flex;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    pointer-events: auto;
    touch-action: none;
  }

  .grip::before {
    content: '';
    border-radius: 1px;
    background-color: transparent;
    transition:
      background-color 100ms ease-in-out,
      border-color 100ms ease-in-out;
  }

  .grip--inline {
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: var(--_edge);
    justify-content: flex-end;
    cursor: ew-resize;
  }

  .grip--inline::before {
    inline-size: var(--_line);
  }

  .grip--block {
    inset-inline: 0;
    inset-block-end: 0;
    block-size: var(--_edge);
    align-items: flex-end;
    cursor: ns-resize;
  }

  .grip--block::before {
    flex: 1;
    block-size: var(--_line);
  }

  .grip--corner {
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: var(--_corner);
    block-size: var(--_corner);
    cursor: nwse-resize;
  }

  :host(:dir(rtl)) .grip--corner {
    cursor: nesw-resize;
  }

  .grip--corner::before {
    position: absolute;
    inset: 0;
    border-style: solid;
    border-width: 0 var(--_line) var(--_line) 0;
    border-color: transparent;
    border-radius: 0 0 var(--_radius) 0;
    background-color: transparent;
  }

  :host(:dir(rtl)) .grip--corner::before {
    border-width: 0 0 var(--_line) var(--_line);
    border-radius: 0 0 0 var(--_radius);
  }

  .grip--corner:focus-visible {
    outline: var(--c-focus-outline-width, 2px) solid
      var(--c-color-focus-outline);
    outline-offset: calc(var(--c-focus-outline-width, 2px) * -1);
    border-radius: var(--c-radius-sm);
  }

  .grip--inline:hover::before,
  .grip--block:hover::before {
    background-color: var(--c-color-accent-border-normal);
  }

  .grip--corner:hover::before,
  .grip--corner:focus-visible::before {
    border-color: var(--c-color-accent-border-normal);
  }

  .grip--inline.grip--active::before,
  .grip--block.grip--active::before {
    background-color: var(--c-color-accent-border-loud);
  }

  .grip--corner.grip--active::before {
    border-color: var(--c-color-accent-border-loud);
  }

  @media (forced-colors: active) {
    .grip--inline:hover::before,
    .grip--block:hover::before,
    .grip--active::before {
      background-color: Highlight;
    }

    .grip--corner:hover::before,
    .grip--corner:focus-visible::before,
    .grip--corner.grip--active::before {
      border-color: Highlight;
      background-color: transparent;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .grip::before {
      transition: none;
    }
  }
`,Ru=new WeakMap,zu=new WeakMap,Bu=new WeakMap,B=new WeakSet,Vu=new WeakMap,Hu=class extends u{constructor(...e){super(...e),_(this,B),this.target=null,this.label=``,this.minSize=200,this.step=16,this.largeStep=64,this.dragging=null,y(this,Ru,null),y(this,zu,null),y(this,Bu,null),y(this,Vu,()=>{(g(Ru,this)!==null||g(zu,this)!==null)&&b(B,this,Ju).call(this,g(Ru,this),g(zu,this))})}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,g(Vu,this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,g(Vu,this))}reset(){v(Ru,this,null),v(zu,this,null),b(B,this,Yu).call(this)}render(){let e=b(B,this,ed).call(this,`x`),t=b(B,this,ed).call(this,`y`),n=b(B,this,ed).call(this,`both`);return p`
      <div
        class="grip grip--inline ${this.dragging===`x`?`grip--active`:``}"
        part="grip grip-inline"
        aria-hidden="true"
        @pointerdown=${e.down}
        @pointermove=${e.move}
        @pointerup=${e.up}
        @pointercancel=${e.up}
        @dblclick=${()=>this.reset()}
      ></div>
      <div
        class="grip grip--block ${this.dragging===`y`?`grip--active`:``}"
        part="grip grip-block"
        aria-hidden="true"
        @pointerdown=${t.down}
        @pointermove=${t.move}
        @pointerup=${t.up}
        @pointercancel=${t.up}
        @dblclick=${()=>this.reset()}
      ></div>
      <button
        type="button"
        class="grip grip--corner ${this.dragging===`both`?`grip--active`:``}"
        part="grip grip-corner"
        aria-label=${this.label||S(`Resize`)}
        @pointerdown=${n.down}
        @pointermove=${n.move}
        @pointerup=${n.up}
        @pointercancel=${n.up}
        @dblclick=${()=>this.reset()}
        @keydown=${b(B,this,$u)}
      ></button>
    `}};function Uu(){return this.target??this.parentElement}function Wu(){let e=Uu.call(b(B,this));return e?getComputedStyle(e).direction===`rtl`:!1}function Gu(){let e=Uu.call(b(B,this))?.getBoundingClientRect();return{width:Math.round(e?.width??0),height:Math.round(e?.height??0)}}function Ku(){let e=Uu.call(b(B,this)),t=e?getComputedStyle(e):null;return{width:parseFloat(t?.maxWidth??``)||window.innerWidth,height:parseFloat(t?.maxHeight??``)||window.innerHeight}}function qu(e,t){return Math.round(Math.min(Math.max(e,this.minSize),t))}function Ju(e,t){let n=b(B,this,Ku).call(this);v(Ru,this,e===null?null:b(B,this,qu).call(this,e,n.width)),v(zu,this,t===null?null:b(B,this,qu).call(this,t,n.height)),b(B,this,Yu).call(this)}function Yu(){this.dispatchEvent(new CustomEvent(`craft-resize`,{detail:{width:g(Ru,this),height:g(zu,this)},bubbles:!0,composed:!0}))}function Xu(e,t){if(e.button!==0)return;e.preventDefault();let n=e.currentTarget;try{n.setPointerCapture(e.pointerId)}catch{}let r=b(B,this,Gu).call(this);v(Bu,this,{axis:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,startWidth:g(Ru,this)??r.width,startHeight:g(zu,this)??r.height,sign:Wu.call(b(B,this))?-1:1}),this.dragging=t}function Zu(e){let t=g(Bu,this);if(!t||e.pointerId!==t.pointerId)return;let n=(e.clientX-t.startX)*t.sign,r=e.clientY-t.startY;b(B,this,Ju).call(this,t.axis===`y`?g(Ru,this):t.startWidth+n*2,t.axis===`x`?g(zu,this):t.startHeight+r*2)}function Qu(e){if(!g(Bu,this)||e.pointerId!==g(Bu,this).pointerId)return;let t=e.currentTarget;t.hasPointerCapture?.(e.pointerId)&&t.releasePointerCapture(e.pointerId),v(Bu,this,null),this.dragging=null}function $u(e){let t=e.shiftKey?this.largeStep:this.step,n=b(B,this,Gu).call(this),r=g(Ru,this)??n.width,i=g(zu,this)??n.height,a=Wu.call(b(B,this))?-t:t;switch(e.key){case`ArrowLeft`:b(B,this,Ju).call(this,r-a,i);break;case`ArrowRight`:b(B,this,Ju).call(this,r+a,i);break;case`ArrowUp`:b(B,this,Ju).call(this,r,i-t);break;case`ArrowDown`:b(B,this,Ju).call(this,r,i+t);break;case`Enter`:this.reset();break;default:return}e.preventDefault()}function ed(e){return{down:t=>b(B,this,Xu).call(this,t,e),move:e=>b(B,this,Zu).call(this,e),up:e=>b(B,this,Qu).call(this,e)}}Hu.styles=[Lu],n([s({attribute:!1})],Hu.prototype,`target`,void 0),n([s()],Hu.prototype,`label`,void 0),n([s({type:Number,attribute:`min-size`})],Hu.prototype,`minSize`,void 0),n([s({type:Number})],Hu.prototype,`step`,void 0),n([s({type:Number,attribute:`large-step`})],Hu.prototype,`largeStep`,void 0),n([f()],Hu.prototype,`dragging`,void 0),customElements.get(`craft-resize-grips`)||customElements.define(`craft-resize-grips`,Hu);var td=a`
  :host {
    display: contents;

    /*
      Sizing hooks. Declared on \`:host\` so an outer-tree rule or an inline
      style on the host still wins — shadow-tree \`:host\` rules always lose to
      the outer tree — and so a subclass can go near-fullscreen without
      reaching into this component's internals.
    */
    --_dialog-inline-size: var(--c-dialog-inline-size, auto);
    --_dialog-min-inline-size: var(
      --c-dialog-min-inline-size,
      min(90vw, 24rem)
    );
    --_dialog-max-inline-size: var(
      --c-dialog-max-inline-size,
      min(90vw, 40rem)
    );
    --_dialog-block-size: var(--c-dialog-block-size, auto);
    --_dialog-max-block-size: var(--c-dialog-max-block-size, 85dvh);
  }

  :host([fullscreen]) {
    --_dialog-inline-size: var(--c-dialog-inline-size, 100vw);
    --_dialog-min-inline-size: var(--c-dialog-min-inline-size, 100vw);
    --_dialog-max-inline-size: var(--c-dialog-max-inline-size, 100vw);
    --_dialog-block-size: var(--c-dialog-block-size, 100dvh);
    --_dialog-max-block-size: var(--c-dialog-max-block-size, 100dvh);
  }

  dialog {
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    max-width: none;
    max-height: none;
    overflow: visible;
    margin: auto;
  }

  dialog:focus-visible {
    outline: none;
  }

  dialog::backdrop {
    background-color: rgb(0 0 0 / 0.25);
  }

  /*
    Non-modal dialogs get no \`::backdrop\` — that pseudo only paints for the
    top layer — so one is rendered instead. \`show()\` also leaves the dialog in
    normal flow, hence the fixed positioning to center it.
  */
  .backdrop {
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.25);
  }

  :host([non-modal]) dialog {
    position: fixed;
    inset: 0;
    margin: auto;
    z-index: var(--c-layer-overlay, 100);
  }

  .frame {
    position: relative;
    display: grid;
  }

  .frame > .surface {
    isolation: isolate;
  }

  .surface {
    display: grid;
    /*
      header / body / footer — the body is the only row that flexes. Each part
      is pinned to its row, so a dialog without a header leaves the first row
      empty rather than sliding the body into it and stretching the footer.
    */
    grid-template-rows: auto 1fr auto;
    inline-size: var(--_dialog-inline-size);
    min-inline-size: var(--_dialog-min-inline-size);
    max-inline-size: var(--_dialog-max-inline-size);
    block-size: var(--_dialog-block-size);
    max-block-size: var(--_dialog-max-block-size);
    background-color: var(--c-surface-raised);
    box-sizing: border-box;
    border-radius: var(--c-radius-lg);
    box-shadow:
      var(--c-modal-ring, 0 0 0 1px rgb(0 0 0 / 18%)), var(--c-shadow-lg);
    outline: 1px solid transparent;
    overflow: hidden;
  }

  :host([fullscreen]) .surface {
    border-radius: 0;
  }

  .header {
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-md);
    padding: var(--c-spacing-md);
    border-block-end: 1px solid var(--c-color-neutral-border-quiet);
    position: relative;
    z-index: 2;
  }

  .title {
    font-size: var(--c-text-sm);
    font-weight: bold;
    margin: 0;
  }

  .body {
    grid-row: 2;
    /*
      Pairs with \`1fr\` above: without an explicit \`min-block-size: 0\` a grid
      item floors at its content height, so a long slotted index would grow the
      surface past \`--_dialog-max-block-size\` instead of scrolling inside it.
    */
    min-block-size: 0;
    overflow: auto;
    padding: var(--c-spacing-lg);
  }

  .footer {
    grid-row: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--c-spacing-sm);
    padding: var(--c-spacing-md);
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
    box-shadow: var(--c-shadow-sm);
    position: relative;
    z-index: 2;
  }
`,nd=0,rd=0;function id(){rd++===0&&document.body.classList.add(`no-scroll`)}function ad(){rd>0&&--rd===0&&document.body.classList.remove(`no-scroll`)}var od=new WeakMap,sd=new WeakMap,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,dd=new WeakMap,fd=new WeakSet,pd=new WeakMap,md=new WeakMap,hd=new WeakMap,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=class extends u{constructor(...e){super(...e),_(this,fd),this.opened=!1,this.label=``,this.nonModal=!1,this.fullscreen=!1,this.closeOnOutsideClick=!1,this.noClose=!1,this.noHeader=!1,y(this,od,null),y(this,sd,null),this.resizable=!1,this.resizedSize={width:null,height:null},this.titleId=`craft-dialog-title-${++nd}`,y(this,cd,!1),y(this,ld,null),y(this,ud,!1),y(this,dd,null),y(this,pd,e=>{e.stopPropagation(),this.resizedSize=e.detail}),y(this,md,e=>{e.preventDefault(),this.requestClose()}),y(this,hd,()=>{this.opened=!1}),y(this,gd,e=>{!this.opened||e.key!==`Escape`||e.defaultPrevented||e.isComposing||(e.preventDefault(),this.requestClose())}),y(this,_d,e=>{e.target?.closest?.(`[data-dialog="close"]`)&&this.requestClose()}),y(this,vd,e=>{this.closeOnOutsideClick&&e.target===this.dialogElement&&this.requestClose()}),y(this,yd,()=>{this.closeOnOutsideClick&&this.requestClose()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,g(_d,this)),this.addEventListener(`keydown`,g(gd,this)),v(dd,this,new MutationObserver(()=>this.requestUpdate())),g(dd,this).observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,g(_d,this)),this.removeEventListener(`keydown`,g(gd,this)),g(dd,this)?.disconnect(),v(dd,this,null),g(ld,this)?.call(this),v(ld,this,null),v(od,this,null),v(sd,this,null),b(fd,this,Td).call(this),bt()}get dialogElement(){return this.shadowRoot?.querySelector(`dialog`)??null}get hasFooter(){return this.querySelector(`:scope > [slot="footer"]`)!==null}render(){return p`
      ${this.nonModal&&this.opened?p`<div
            class="backdrop"
            part="backdrop"
            @click=${g(yd,this)}
          ></div>`:r}
      <dialog
        part="dialog"
        aria-labelledby=${this.label===``?r:this.titleId}
        @cancel=${g(md,this)}
        @close=${g(hd,this)}
        @click=${g(vd,this)}
      >
        ${this.resizable&&!this.fullscreen?p`<div class="frame">
              ${b(fd,this,xd).call(this)}
              <craft-resize-grips
                @craft-resize=${g(pd,this)}
              ></craft-resize-grips>
            </div>`:b(fd,this,xd).call(this)}
      </dialog>
    `}get hasHeader(){return!this.noHeader&&(this.label!==``||!this.noClose)}renderHiddenTitle(){return this.label===``?r:p`<h2 part="title" id=${this.titleId} hidden>${this.label}</h2>`}renderHeader(){return p`
      <header class="header" part="header">
        ${this.label===``?p`<div></div>`:p`<h2 class="title" part="title" id=${this.titleId}>
              ${this.label}
            </h2>`}
        ${this.noClose?r:p`<craft-button
              type="button"
              icon="xmark-large"
              size="small"
              variant="plain"
              flush="inline-end block"
              class="close"
              part="close"
              tabindex="0"
              aria-label=${S(`Close`)}
              @click=${()=>this.requestClose()}
            ></craft-button>`}
      </header>
    `}renderBody(){return p`<div class="body" part="body"><slot></slot></div>`}renderFooter(){return p`
      <footer class="footer" part="footer" ?hidden=${!this.hasFooter}>
        <slot name="footer"> </slot>
      </footer>
    `}updated(e){super.updated(e);let t=this.shadowRoot?.querySelector(`craft-resize-grips`),n=this.shadowRoot?.querySelector(`.surface`);t&&n&&t.target!==n&&(t.target=n),this.opened!==g(cd,this)&&(v(cd,this,this.opened),this.opened?b(fd,this,Sd).call(this):b(fd,this,Cd).call(this),b(fd,this,Ed).call(this,this.opened))}requestClose(){this.dispatchEvent(new CustomEvent(`craft-before-hide`,{bubbles:!0,composed:!0,cancelable:!0}))&&(this.opened=!1)}};function xd(){let{width:e,height:t}=this.resizedSize,n=this.resizable&&!this.fullscreen;return p`<div
      class="surface"
      part="surface"
      style=${Zn({"inline-size":n&&e!==null?`${e}px`:void 0,"block-size":n&&t!==null?`${t}px`:void 0})}
    >
      ${this.hasHeader?this.renderHeader():this.renderHiddenTitle()}
      ${this.renderBody()} ${this.renderFooter()}
    </div>`}function Sd(){let e=this.dialogElement,t=document.activeElement;v(od,this,t instanceof HTMLElement?t:null),v(sd,this,st(g(od,this))),e&&!e.open&&(this.nonModal?e.show():e.showModal()),this.nonModal&&(g(ld,this)?.call(this),v(ld,this,Iu(this))),g(ud,this)||(v(ud,this,!0),id())}function Cd(){let e=this.dialogElement,t=g(od,this),n=g(sd,this);v(od,this,null),v(sd,this,null);let r=!1;e?.open&&(r=this.matches(`:focus-within`),e.close()),g(ld,this)?.call(this),v(ld,this,null),b(fd,this,Td).call(this),bt();let i=document.activeElement,a=!tt(i)||this.contains(i);(!this.nonModal||r||a)&&b(fd,this,wd).call(this,t,n,a)}function wd(e,t,n){let r=this.returnFocus?.(e);if(tt(r)){r.focus();return}n&&t?.()?.focus()}function Td(){g(ud,this)&&(v(ud,this,!1),ad())}function Ed(e){b(fd,this,Dd).call(this,e?`craft-show`:`craft-hide`),this.updateComplete.then(()=>{this.opened===e&&b(fd,this,Dd).call(this,e?`craft-after-show`:`craft-after-hide`)})}function Dd(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}bd.styles=[te,td],n([s({type:Boolean,attribute:`open`,reflect:!0})],bd.prototype,`opened`,void 0),n([s()],bd.prototype,`label`,void 0),n([s({type:Boolean,attribute:`non-modal`,reflect:!0})],bd.prototype,`nonModal`,void 0),n([s({type:Boolean,reflect:!0})],bd.prototype,`fullscreen`,void 0),n([s({type:Boolean,attribute:`close-on-outside-click`})],bd.prototype,`closeOnOutsideClick`,void 0),n([s({type:Boolean,attribute:`no-close`,reflect:!0})],bd.prototype,`noClose`,void 0),n([s({type:Boolean,attribute:`no-header`,reflect:!0})],bd.prototype,`noHeader`,void 0),n([s({attribute:!1})],bd.prototype,`returnFocus`,void 0),n([s({type:Boolean,reflect:!0})],bd.prototype,`resizable`,void 0),n([f()],bd.prototype,`resizedSize`,void 0),customElements.get(`craft-dialog`)||customElements.define(`craft-dialog`,bd);var Od=new WeakMap,kd=new WeakSet,Ad=class{constructor(e,t){this.host=e,this.source=t,_(this,kd),y(this,Od,null),e.addController(this)}hostConnected(){b(kd,this,jd).call(this)}hostDisconnected(){b(kd,this,Md).call(this)}resubscribe(){b(kd,this,Md).call(this),b(kd,this,jd).call(this)}get state(){return this.source()?.state??null}};function jd(){v(Od,this,this.source()?.on(`change`,()=>this.host.requestUpdate())??null)}function Md(){g(Od,this)?.call(this),v(Od,this,null)}var Nd=a`
  :host {
    /*
      An element index needs room: a near-fullscreen surface rather than the
      confirmation-sized default craft-dialog ships with.
    */
    --_dialog-inline-size: var(--c-dialog-inline-size, min(96vw, 80rem));
    --_dialog-min-inline-size: var(
      --c-dialog-min-inline-size,
      min(96vw, 20rem)
    );
    --_dialog-max-inline-size: var(--c-dialog-max-inline-size, 96vw);
    --_dialog-max-block-size: var(--c-dialog-max-block-size, 90dvh);

    /*
      A floor, not a fixed height. The surface grows with the result list up to
      the max-block-size above and then scrolls inside; a short list gets a
      short dialog rather than a tall one full of empty space. The floor keeps
      a one-row result from collapsing into a sliver.
    */
    --_dialog-min-block-size: var(--c-dialog-min-block-size, 400px);
  }

  .surface {
    min-block-size: min(
      var(--_dialog-min-block-size),
      var(--_dialog-max-block-size)
    );
    border-radius: var(--c-modal-radius, var(--c-radius-lg));
    box-shadow:
      var(--c-modal-ring, 0 0 0 1px rgb(0 0 0 / 18%)), var(--c-shadow-2xl);
  }

  .header {
    box-sizing: border-box;
    min-block-size: var(--c-modal-header-height, calc(57rem / 16));
    padding-block: var(--c-spacing-sm);
  }

  :host([fullscreen]) {
    --_dialog-min-block-size: var(--c-dialog-min-block-size, 100dvh);
  }

  /* Held at the height it opened at (see #queueSizeLock), within the max. */
  :host([size-locked]:not([fullscreen])) .surface {
    block-size: min(var(--_locked-block-size), var(--_dialog-max-block-size));
  }

  /* The index supplies its own padding, and its sidebar runs edge to edge. */
  .body {
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-block-size: 0;
  }

  /*
    Kept in the accessibility tree when the title is hidden: the <dialog> is
    labeled by it, so removing it would leave the dialog unnamed.
  */
  .title--hidden {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  /*
    The footer holds two groups. The base dialog packs its footer to the end, so
    an auto margin on the first group is what splits them: it absorbs the free
    space, holding secondary actions at the start and leaving the primary
    buttons flush right. It works the same when the secondary group is empty,
    which is the common case.
  */
  .footer {
    box-sizing: border-box;
    min-block-size: var(--c-modal-footer-height, calc(54rem / 16));
    padding-block: var(--c-spacing-sm);
    padding-inline: var(--cp-container-padding, var(--c-spacing-lg));
  }

  .footer__group {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .footer__group--secondary {
    margin-inline-end: auto;
  }

  /*
    While a selection is being saved, the index and the secondary actions stop
    responding. The interaction block itself is the inert attribute set in
    renderBody/renderFooter, which reaches slotted content this component does
    not own; these rules only supply the matching visual state.
  */
  :host([busy]) .body,
  :host([busy]) .footer__group--secondary {
    opacity: 0.6;
  }
`,Pd=new WeakMap,Fd=new WeakMap,Id=new WeakMap,Ld=new WeakMap,Rd=new WeakMap,zd=new WeakSet,Bd=new WeakMap,Vd=new WeakMap,Hd=class extends bd{constructor(){super(),_(this,zd),this.controller=null,this.showTitle=!1,this.selectLabel=``,this.cancelLabel=``,this.busy=!1,this.loading=!1,this.canSubmit=!1,this.narrow=!1,this.hasIndex=!1,y(this,Pd,new Ad(this,()=>this.controller)),y(this,Fd,null),y(this,Id,void 0),y(this,Ld,void 0),y(this,Rd,()=>{b(zd,this,Wd).call(this),clearTimeout(g(Ld,this)),v(Ld,this,setTimeout(()=>b(zd,this,Ud).call(this),200))}),y(this,Bd,()=>{this.submit()}),y(this,Vd,()=>{this.busy||this.requestClose()}),this.resizable=!0}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,g(Rd,this)),typeof ResizeObserver<`u`&&(v(Fd,this,new ResizeObserver(([e])=>{e&&(this.narrow=e.contentRect.width<550)})),this.hasUpdated&&b(zd,this,Gd).call(this))}disconnectedCallback(){super.disconnectedCallback(),g(Fd,this)?.disconnect(),window.removeEventListener(`resize`,g(Rd,this)),clearTimeout(g(Ld,this)),b(zd,this,Wd).call(this)}updated(e){super.updated(e),!this.opened||!this.hasIndex?b(zd,this,Wd).call(this):(e.has(`hasIndex`)||e.has(`opened`))&&!this.hasAttribute(`size-locked`)&&b(zd,this,Ud).call(this)}willUpdate(e){e.has(`controller`)&&g(Pd,this).resubscribe();let t=g(Pd,this).state;t&&(this.opened=t.open,this.busy=t.busy,this.loading=t.loading,this.canSubmit=t.canSubmit,this.label=t.title,this.showTitle=t.showTitle,this.selectLabel=t.selectLabel,this.hasIndex=t.indexBody!==null),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),b(zd,this,Gd).call(this)}renderHeader(){if(this.label===``)return p``;let e=p`<h1
      class=${this.showTitle?`title`:`title title--hidden`}
      part="title"
      id=${this.titleId}
    >
      ${this.label}
    </h1>`;return this.showTitle?p`<header class="header" part="header">${e}</header>`:e}renderBody(){return p`
      <div class="body" part="body" ?inert=${this.busy}>
        ${this.loading&&!this.hasIndex?p`<slot name="loading"
              ><div class="loading"><craft-spinner></craft-spinner></div
            ></slot>`:r}
        <slot></slot>
      </div>
    `}renderFooter(){return p`
      <footer class="footer" part="footer">
        <div
          class="footer__group footer__group--secondary"
          part="secondary-actions"
          ?inert=${this.busy}
        >
          <slot name="secondary-actions"></slot>
        </div>
        <div class="footer__group" part="primary-actions">
          <slot name="primary-actions"></slot>
          <craft-button
            part="cancel"
            type="button"
            variant="fill"
            ?disabled=${this.busy}
            @click=${g(Vd,this)}
          >
            ${this.cancelLabel||S(`Cancel`)}
          </craft-button>
          <craft-button
            part="select"
            type="button"
            variant="primary"
            ?disabled=${!this.canSubmit}
            ?loading=${this.busy}
            @click=${g(Bd,this)}
          >
            ${this.selectLabel||S(`Select`)}
          </craft-button>
        </div>
      </footer>
    `}submit(){this.canSubmit&&(this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0})),this.controller?.submit())}requestClose(){if(this.dispatchEvent(new CustomEvent(`craft-cancel`,{bubbles:!0,composed:!0})),this.controller){this.controller.cancel();return}super.requestClose()}};function Ud(){g(Id,this)!==void 0&&cancelAnimationFrame(g(Id,this)),v(Id,this,requestAnimationFrame(()=>{v(Id,this,requestAnimationFrame(()=>{v(Id,this,void 0);let e=this.shadowRoot?.querySelector(`.surface`);if(!this.opened||!this.hasIndex||!e)return;let t=e.getBoundingClientRect().height;t>0&&(this.style.setProperty(`--_locked-block-size`,`${t}px`),this.setAttribute(`size-locked`,``))}))}))}function Wd(){g(Id,this)!==void 0&&(cancelAnimationFrame(g(Id,this)),v(Id,this,void 0)),this.removeAttribute(`size-locked`),this.style.removeProperty(`--_locked-block-size`)}function Gd(){let e=this.shadowRoot?.querySelector(`.surface`);e&&g(Fd,this)?.observe(e)}Hd.styles=[...bd.styles,Nd],n([s({attribute:!1})],Hd.prototype,`controller`,void 0),n([s({type:Boolean,attribute:`show-title`,reflect:!0})],Hd.prototype,`showTitle`,void 0),n([s({attribute:`select-label`})],Hd.prototype,`selectLabel`,void 0),n([s({attribute:`cancel-label`})],Hd.prototype,`cancelLabel`,void 0),n([s({type:Boolean,reflect:!0})],Hd.prototype,`busy`,void 0),n([s({type:Boolean,reflect:!0})],Hd.prototype,`loading`,void 0),n([s({type:Boolean,attribute:`can-submit`,reflect:!0})],Hd.prototype,`canSubmit`,void 0),n([s({type:Boolean,reflect:!0})],Hd.prototype,`narrow`,void 0),n([f()],Hd.prototype,`hasIndex`,void 0),customElements.get(`craft-element-selector-modal`)||customElements.define(`craft-element-selector-modal`,Hd);var Kd=class extends u{static get styles(){return[a`
        :host {
          display: block;
        }

        :host ::slotted([slot='content']) {
          overflow: hidden;
        }
      `]}static get properties(){return{opened:{type:Boolean,reflect:!0}}}render(){return p`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
    `}constructor(){super(),this.opened=!1,this.toggle=this.toggle.bind(this)}connectedCallback(){super.connectedCallback();let e=It();this._invokerNode&&(this._invokerNode.addEventListener(`click`,this.toggle),this._invokerNode.setAttribute(`aria-expanded`,`${this.opened}`),this._invokerNode.setAttribute(`aria-controls`,`collapsible-content-${e}`)),this._contentNode&&this._contentNode.setAttribute(`id`,`collapsible-content-${e}`),this.__setDefaultState()}updated(e){super.updated(e),e.has(`opened`)&&this.__openedChanged()}disconnectedCallback(){super.disconnectedCallback(),this._invokerNode&&this._invokerNode.removeEventListener(`click`,this.toggle)}show(){this.opened||=!0}hide(){this.opened&&=!1}toggle(){this.opened=!this.opened,this.requestUpdate()}async _showAnimation(e){}async _hideAnimation(e){}get _invokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _contentNode(){return Array.from(this.children).find(e=>e.slot===`content`)}get _contentHeight(){return`${this._contentNode?.getBoundingClientRect().height||0}px`}__openedChanged(){this.__updateContentSize(),this._invokerNode&&this._invokerNode.setAttribute(`aria-expanded`,`${this.opened}`),this.dispatchEvent(new CustomEvent(`opened-changed`))}async __updateContentSize(){this._contentNode&&(this.opened?(this._contentNode.style.setProperty(`display`,``),await this._showAnimation({contentNode:this._contentNode})):(await this._hideAnimation({contentNode:this._contentNode}),this._contentNode.style.setProperty(`display`,`none`)))}__setDefaultState(){!this.opened&&this._contentNode&&this._contentNode.style.setProperty(`display`,`none`)}},qd=[`chevron-down`,`chevron-up`,`chevron-right`,`chevron-left`],Jd=class extends Kd{static get styles(){return[...super.styles,a`
        ::slotted([slot='content']) {
          margin-block-start: var(--c-spacing-lg);
        }

        :host(:not([appearance='plain'])) ::slotted([slot='content']) {
          padding-inline-start: var(--c-spacing-lg);
          border-inline-start: 1px solid var(--c-color-neutral-border-quiet);
        }
      `]}constructor(){super(),this.label=``,this.appearance=`line`,this.size=`medium`,this.state=null,this.cookieName=null,this.__defaultInvoker=null,this.__externalTrigger=null,this.__externalExpanded=!1,this.__announcedOpened=null,this.__announceOpenedChange=()=>{if(this.__externalTrigger)return;let e=!!this.opened,t=this.__announcedOpened;this.__announcedOpened=e,t!==null&&t!==e&&this.dispatchEvent(new CustomEvent(e?`craft-show`:`craft-hide`))},this.__toggleExternal=()=>{this.state=this.__externalExpanded?`collapsed`:`expanded`},this.addEventListener(`opened-changed`,this.__announceOpenedChange)}get __externalTarget(){let e=this.__externalTrigger?.getAttribute(`aria-controls`);return e?document.getElementById(e):null}render(){return p`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
      <slot></slot>
    `}connectedCallback(){this.__externalTrigger=this.querySelector(`:scope > button[type="button"][aria-controls]:not([slot])`),this.__externalTrigger||this.__ensureDefaultInvoker(),super.connectedCallback(),this.__externalTrigger&&this.__setupExternalMode()}disconnectedCallback(){super.disconnectedCallback(),this.__externalTrigger&&(this.__handleExternalOpen(),this.__externalTrigger.removeEventListener(`click`,this.__toggleExternal))}updated(e){super.updated(e),e.has(`label`)&&this.__defaultInvoker&&(this.__defaultInvoker.textContent=this.label),e.has(`size`)&&this.__defaultInvoker&&this.__defaultInvoker.setAttribute(`size`,this.size),e.has(`opened`)&&this.__syncInvokerChevron(),e.has(`state`)&&this.__externalTrigger&&(this.state===`expanded`?this.__handleExternalOpen():this.state===`collapsed`&&this.__handleExternalClose())}__ensureDefaultInvoker(){if(this._invokerNode)return;let e=document.createElement(`craft-button`);e.slot=`invoker`,e.setAttribute(`type`,`button`),e.setAttribute(`variant`,`plain`),e.setAttribute(`flush`,``),e.setAttribute(`icon`,`chevron-right`),e.setAttribute(`icon-position`,`suffix`),e.textContent=this.label,this.__defaultInvoker=e,this.prepend(e)}__syncInvokerChevron(){let e=this._invokerNode;if(!(e instanceof L)||!e.icon||!qd.includes(e.icon))return;let t=getComputedStyle(this).direction===`rtl`;e.iconPosition=`suffix`,e.icon=this.opened?`chevron-down`:t?`chevron-left`:`chevron-right`}__setupExternalMode(){let e=this.__externalTrigger;if(!this.__externalTarget){console.error(`No target with id ${e.getAttribute(`aria-controls`)} found for disclosure.`,e);return}e.addEventListener(`click`,this.__toggleExternal),this.state!==`expanded`&&this.state!==`collapsed`&&(this.state=`expanded`)}__handleExternalOpen(){this.__externalExpanded=!0,this.__externalTrigger?.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new CustomEvent(`craft-show`));let e=this.__externalTarget;e&&(e.dataset.state=`expanded`),this.__persistExternalState(`expanded`)}__handleExternalClose(){this.__externalExpanded=!1,this.__externalTrigger?.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new CustomEvent(`craft-hide`));let e=this.__externalTarget;e&&(e.dataset.state=`collapsed`),this.__persistExternalState(`collapsed`)}__persistExternalState(e){this.cookieName&&window.Craft?.setCookie(this.cookieName,e)}};n([s()],Jd.prototype,`label`,void 0),n([s({reflect:!0})],Jd.prototype,`appearance`,void 0),n([s({reflect:!0})],Jd.prototype,`size`,void 0),n([s({reflect:!0})],Jd.prototype,`state`,void 0),n([s({attribute:`cookie-name`})],Jd.prototype,`cookieName`,void 0),customElements.get(`craft-disclosure`)||customElements.define(`craft-disclosure`,Jd);var Yd=class extends u{constructor(...e){super(...e),this.label=``,this.icon=``,this.appearance=`plain`}render(){return p`
      <div class="cp-empty">
        <div class="cp-empty__content">
          <slot name="graphic">
            ${this.icon?p`
                  <craft-icon
                    class="cp-empty__icon"
                    name="${this.icon}"
                    style="font-size: calc(48rem / 16)"
                  ></craft-icon>
                `:r}
          </slot>
          <slot name="content">
            <p class="label">${this.label}</p>
          </slot>

          <slot></slot>
        </div>
      </div>
    `}};Yd.styles=[a`
      .cp-empty {
        min-height: calc(120rem / 16);
        display: grid;
        place-items: center;
        border-radius: var(--c-radius-md);
        border: 1px solid transparent;
        padding-block: var(--c-spacing-lg);
      }

      .cp-empty__content {
        display: grid;
        gap: var(--c-spacing-md);
        justify-items: center;
        max-width: 60ch;
        text-align: center;
      }

      /* Decorative (the label says the same), so it needn't meet 3:1 */
      .cp-empty__icon {
        color: var(--color-slate-200);
      }

      .label {
        margin: 0;
        font-size: 1.25em;
        color: var(--c-text-quiet);
      }

      :host([appearance~='outline']) .cp-empty {
        border-color: var(--c-color-border-quiet);
      }
    `],n([s()],Yd.prototype,`label`,void 0),n([s()],Yd.prototype,`icon`,void 0),n([s({reflect:!0})],Yd.prototype,`appearance`,void 0),customElements.get(`craft-empty`)||customElements.define(`craft-empty`,Yd);var Xd=a`
  :host {
    position: relative;
    display: block;
  }

  /* A slotted control with a maxlength (reflected as has-maxlength) shrinks
     to its own width instead of spanning the column. width="full" spans
     despite a maxlength; width="auto" shrinks without one. Only the input
     shrinks: the heading (and its actions) and feedback still span the
     column, in line with other fields'. */
  :host([has-maxlength]:not([width='full'])) .input-group__container,
  :host([width='auto']) .input-group__container {
    width: fit-content;
    max-width: 100%;
  }

  /* Stop the input chrome from flexing back out to the available space, while
     still letting it shrink to the column: a long maxlength, such as a
     Title's 255 characters, sizes the input far wider than the column. */
  :host([has-maxlength]:not([width='full'])) .input-group__input,
  :host([width='auto']) .input-group__input {
    flex: 0 1 auto;
    min-width: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .form-field__status-indicator {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: calc(var(--c-spacing-lg) * -1);
    width: 2px;
    height: 100%;
    cursor: help;
    z-index: 1;
    border-radius: 1px;
  }

  .form-field--modified .form-field__status-indicator {
    background-color: var(--blue-600, #2563eb);
    box-shadow: 0 0 5px hsl(221deg 83% 53% / 15%);
  }

  .form-field--outdated .form-field__status-indicator {
    background-color: var(--bg-pending, #c96a11);
    box-shadow: 0 0 5px hsl(27deg 96% 61% / 15%);
  }

  /* Heading row (the CP's .field > .heading) */
  .form-field__label {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    font-size: var(--c-field-label-font-size, inherit);
    font-weight: var(--c-field-label-font-weight, bold);
    color: var(--c-field-label-color, inherit);
  }

  /* Pushes slotted label extras to the far end of the heading row. */
  .form-field__label .flex-grow {
    flex: 1 0 0;
  }

  .field-actions {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--c-spacing-2xs, 0.125rem);
    align-items: center;

    /* Absolutely position so the label doesn't take up the height of the button */
    position: absolute;
    inset-inline-end: 0;
  }

  ::slotted([slot='label']) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--c-spacing-xs);
    align-items: center;
    line-height: var(--c-field-label-line-height, inherit);
  }

  .read-only-badge {
    font-size: calc(11rem / 16);
    font-weight: normal;
    line-height: 1.45;
    padding-block: 0;
    padding-inline: 0.25em;
    background-color: var(--gray-100, #e9ebec);
    color: var(--gray-700, #3f4d5a);
    border: 1px solid var(--border-hairline, hsl(211deg 20% 44% / 25%));
    border-radius: var(--c-radius-sm, 3px);
  }

  /* Input container (.field > .input in the CP) */
  .input-group {
    position: relative;
  }

  .input-group.ltr {
    direction: ltr;
  }

  .input-group.rtl {
    direction: rtl;
  }

  .input-group.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input-group__container {
    display: flex;
  }

  .input-group__input {
    flex: 1;
    display: flex;
    /* Let the chrome shrink below its content's intrinsic width (e.g. a
       slotted input with a large size attribute), instead of blowing out
       of the column. */
    min-width: 0;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    flex: 1 1 auto;
    /* A flex item's automatic minimum size is its content, so a control wider
       than the column — a Matrix field's row of add buttons, say — would push
       out of the field instead of shrinking. The input-group__input wrapper
       needs the same escape hatch one level up. */
    min-width: 0;
    margin: 0;
    font-size: 100%;
  }

  /* Error styling hook, mirroring .field.has-errors / .input.errors */
  :host([has-errors='true']) {
    ::slotted([slot='label']) {
      color: var(--c-color-danger-on-quiet);
    }

    ::slotted([slot='input']) {
      border-color: var(--c-color-danger-border-loud);
    }

    .form-field__feedback {
      color: var(--c-color-danger-on-quiet);
    }
  }
`,Zd=class extends tr(Zr(u)){constructor(...e){super(...e),this.required=!1,this.translatable=!1,this.translationDescription=S(`This field is translatable.`),this.fieldset=!1,this.hasErrors=!1,this.instructionsPosition=`before`,this.instructionsSrOnly=!1,this.__hasSlot=new er(this,`heading-prefix`,`label-extra`,`actions`,`heading-suffix`),this.__lightDomObserver=new MutationObserver(()=>this.__onLightDomChanged())}static get styles(){return[se,Un,Xd]}connectedCallback(){super.connectedCallback(),this.__lightDomObserver.observe(this,{childList:!0}),this.__syncHasErrors(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.updateComplete.then(()=>{this.addToAriaLabelledBy(this._labelNode),this.__wireDescribedBy()})}__syncHasMaxlength(){let e=this.querySelector(`:scope > [slot="input"]`);this.toggleAttribute(`has-maxlength`,!!(e?.hasAttribute(`maxlength`)&&!e.matches(`textarea, craft-textarea`)))}__syncControlWidth(){if(this.width!==void 0)return;let e=this.querySelector(`:scope > [slot="input"]`)?.getAttribute(`width`);(e===`full`||e===`auto`)&&(this.width=e)}disconnectedCallback(){super.disconnectedCallback(),this.__lightDomObserver.disconnect()}updated(e){super.updated(e),e.has(`disabled`)&&this._inputNode?.removeAttribute(`aria-disabled`),e.has(`fieldset`)&&this.__syncFieldsetSemantics(),(e.has(`label`)||e.has(`required`)||e.has(`translatable`)||e.has(`translationDescription`))&&this.__syncLabelDecorations()}get control(){return this._inputNode??void 0}get _resolvedOrientation(){return this.orientation?this.orientation:(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`?`rtl`:`ltr`}_enhanceLightDomA11y(){super._enhanceLightDomA11y(),this.__wireDescribedBy(),this.__syncFieldsetSemantics()}_onLabelClick(){this.__formControlTarget()?.focus()}addToAriaLabelledBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaLabelledBy(e,{...t,idPrefix:`field-${t.idPrefix??`label`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-labelledby`,e,`label`);return}super.addToAriaLabelledBy(e,{...t,reorder:!1})}addToAriaDescribedBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaDescribedBy(e,{...t,idPrefix:`field-${t.idPrefix??`description`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-describedby`,e,t.idPrefix??`description`);return}super.addToAriaDescribedBy(e,{...t,reorder:!1})}render(){return p`
      <div
        class="${E({"form-field":!0,[`form-field--${this.status}`]:!!this.status})}"
      >
        ${this._statusBadgeTemplate()}
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      </div>
    `}_groupOneTemplate(){return p`
      ${this._labelTemplate()}
      ${this.instructionsPosition===`before`?this._helpTextTemplate():r}
    `}_groupTwoTemplate(){return p`
      ${this._inputGroupTemplate()}
      ${this.instructionsPosition===`after`?this._helpTextTemplate():r}
      ${this._feedbackTemplate()}
    `}_labelTemplate(){let e=this.__hasLabel,t=this.__hasSlot.test(`label-extra`),n=this.__hasSlot.test(`actions`),i=t||n||this.readOnly||this.__hasSlot.test(`heading-prefix`)||this.__hasSlot.test(`heading-suffix`);if(!e&&!i)return p``;let a=r;return e&&(a=this.labelSrOnly&&i?p`<span class="cp-visually-hidden"
              ><slot name="label"></slot
            ></span>`:p`<slot name="label"></slot>`),p`
      <div
        class=${E({"form-field__label":!0,"cp-visually-hidden":this.labelSrOnly&&!i})}
      >
        <slot name="heading-prefix"></slot>
        ${a}
        ${this.readOnly?p`<span class="read-only-badge">${S(`Read Only`)}</span>`:r}
        ${t||n?p`<div class="flex-grow"></div>`:r}
        <slot name="label-extra"></slot>
        ${n?p`
              <div
                class="field-actions"
                part="actions"
                role="group"
                aria-label=${S(`Field actions`)}
              >
                <slot name="actions"></slot>
              </div>
            `:p`<slot name="actions"></slot>`}
        <slot name="heading-suffix"></slot>
      </div>
    `}_helpTextTemplate(){return this.__hasHelpText?this.instructionsSrOnly?p`<div class="cp-visually-hidden">${super._helpTextTemplate()}</div>`:super._helpTextTemplate():p``}_inputGroupTemplate(){return p`
      <div class=${E({"input-group":!0,input:!0,[this._resolvedOrientation]:!0,errors:this.hasErrors,disabled:this.disabled})}>
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_statusBadgeTemplate(){return this.status?p`
      <div
        class="form-field__status-indicator"
        title=${ft(this.statusLabel)}
        aria-hidden="true"
      >
        <craft-visually-hidden>${this.statusLabel}</craft-visually-hidden>
      </div>
    `:r}get __hasLabel(){return this.label.trim()!==``}get __hasHelpText(){return this.helpText.trim()!==``}__lightChild(e){return Array.from(this.children).find(t=>t.slot===e)}__onLightDomChanged(){this.__wireDescribedBy(),this.__syncFieldsetSemantics(),this.__syncHasErrors(),this.__syncLabelDecorations(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.requestUpdate()}__wireDescribedBy(){for(let e of[`help-text`,`feedback`]){let t=this.__lightChild(e);t&&this.addToAriaDescribedBy(t,{idPrefix:e})}}__formControlTarget(){let e=this._inputNode;return e&&`addToAriaLabelledBy`in e&&`addToAriaDescribedBy`in e?e:void 0}__hasNativeLabelTarget(){return!!this._inputNode?.matches(`button, input, meter, output, progress, select, textarea`)}__addGroupAriaReference(e,t,n){t.id||=`${n}-${this._inputId}`;let r=new Set((this.getAttribute(e)??``).split(/\s+/).filter(Boolean));r.add(t.id),this.setAttribute(e,[...r].join(` `))}__syncHasErrors(){let e=this.__lightChild(`feedback`);e&&(this.hasErrors=!!(e.childElementCount||e.textContent?.trim()))}__syncFieldsetSemantics(){let e=this._labelNode,t=this.__formControlTarget();this.fieldset||!t&&!this.__hasNativeLabelTarget()?(this.setAttribute(`role`,`group`),e&&(e.id||=`label-${this._inputId}`,this.setAttribute(`aria-labelledby`,e.id),e.removeAttribute(`for`))):(this.getAttribute(`role`)===`group`&&this.removeAttribute(`role`),this.removeAttribute(`aria-labelledby`),e&&t?e.removeAttribute(`for`):e&&this._inputNode&&e.setAttribute(`for`,this._inputNode.id||this._inputId))}__syncLabelDecorations(){let e=this._labelNode;if(e){for(let t of e.querySelectorAll(`[data-craft-field-decoration]`))t.remove();if(this.label){if(this.required){let t=document.createElement(`craft-visually-hidden`);t.textContent=S(`Required`),t.setAttribute(`data-craft-field-decoration`,``);let n=document.createElement(`craft-icon`);n.setAttribute(`name`,`asterisk`),n.setAttribute(`data-craft-field-decoration`,``),n.setAttribute(`data-color`,`danger`),n.setAttribute(`aria-hidden`,`true`),e.append(t,n)}if(this.translatable){let t=document.createElement(`craft-tooltip`);t.setAttribute(`placement`,`bottom`),t.textContent=this.translationDescription,t.setAttribute(`data-craft-field-decoration`,``);let n=document.createElement(`craft-button`);n.type=`button`,n.slot=`invoker`,n.variant=`plain`,n.size=`small`,n.icon=`language`,n.className=`t9n-indicator prevent-autofocus`,n.setAttribute(`aria-label`,this.translationDescription),t.append(n),e.append(t)}}}}};n([s({type:Boolean,reflect:!0})],Zd.prototype,`required`,void 0),n([s({type:Boolean,reflect:!0})],Zd.prototype,`translatable`,void 0),n([s({attribute:`translation-description`})],Zd.prototype,`translationDescription`,void 0),n([s({type:Boolean,reflect:!0})],Zd.prototype,`fieldset`,void 0),n([s({reflect:!0})],Zd.prototype,`status`,void 0),n([s({attribute:`status-label`})],Zd.prototype,`statusLabel`,void 0),n([s({reflect:!0})],Zd.prototype,`orientation`,void 0),n([s({type:Boolean,reflect:!0,attribute:`has-errors`})],Zd.prototype,`hasErrors`,void 0),n([s({attribute:`instructions-position`})],Zd.prototype,`instructionsPosition`,void 0),n([s({type:Boolean,reflect:!0,attribute:`instructions-sr-only`})],Zd.prototype,`instructionsSrOnly`,void 0),n([s({type:String,reflect:!0})],Zd.prototype,`width`,void 0),customElements.get(`craft-field`)||customElements.define(`craft-field`,Zd);var Qd=class extends u{constructor(...e){super(...e),this.separated=!1,this.resizeObserver=new ResizeObserver(()=>this.scheduleColumnUpdate()),this.childObserver=new MutationObserver(()=>{this.observeChildren(),this.scheduleColumnUpdate()}),this.columnUpdateFrame=null}connectedCallback(){super.connectedCallback(),this.toggleColumnTracking()}disconnectedCallback(){super.disconnectedCallback(),this.stopColumnTracking()}updated(e){e.has(`separated`)&&this.toggleColumnTracking()}toggleColumnTracking(){this.stopColumnTracking(),!(!this.separated||!this.isConnected)&&(this.childObserver.observe(this,{childList:!0}),this.observeChildren(),this.scheduleColumnUpdate())}stopColumnTracking(){this.childObserver.disconnect(),this.resizeObserver.disconnect(),this.columnUpdateFrame!==null&&(cancelAnimationFrame(this.columnUpdateFrame),this.columnUpdateFrame=null);for(let e of this.children)e.removeAttribute(`data-follows-column`)}observeChildren(){this.resizeObserver.disconnect(),this.resizeObserver.observe(this);for(let e of this.children)this.resizeObserver.observe(e)}scheduleColumnUpdate(){this.columnUpdateFrame===null&&(this.columnUpdateFrame=requestAnimationFrame(()=>{this.columnUpdateFrame=null,this.updateColumns()}))}updateColumns(){let e=null;for(let t of this.children){if(!(t instanceof HTMLElement)||t.localName===`style`||t.localName===`slot`)continue;let n=t.getClientRects().length>0;t.toggleAttribute(`data-follows-column`,n&&e!==null&&e.offsetTop===t.offsetTop),n&&(e=t)}}render(){return p`
      <style>
        craft-field-group {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: var(--gap, calc(var(--c-spacing) * 6)) var(--c-spacing-md);
          container-type: inline-size;
        }

        craft-field-group > * {
          grid-column: 1 / -1;
          min-width: 0;
        }

        /* Capped so the eleven gaps never crowd out the columns in a narrow
           group, such as a details panel, where fields don't share rows. */
        craft-field-group[separated] {
          --_column-gap: min(
            calc(
              var(--c-field-group-separator-spacing, var(--c-spacing-lg)) * 2
            ),
            100% / 12
          );
          column-gap: var(--_column-gap);
        }

        craft-field-group[separated] > [data-follows-column] {
          position: relative;
        }

        /* Matches the column gap, but in cqi: a percentage here would resolve against the field, not the group. */
        craft-field-group[separated] > [data-follows-column]::before {
          content: '';
          position: absolute;
          inset-block: 0;
          inset-inline-start: calc(
            min(
                calc(
                  var(--c-field-group-separator-spacing, var(--c-spacing-lg)) *
                    2
                ),
                100cqi / 12
              ) /
              -2
          );
          border-inline-start: 1px solid var(--c-color-neutral-border-quiet);
          pointer-events: none;
        }

        craft-field-group.auto-widths > :not([class*='width-']) {
          width: fit-content;
        }

        craft-field-group.auto-widths > :not([class*='width-']) craft-select {
          width: max-content;
          max-width: 100%;
        }

        craft-field[fieldset]
          > craft-field-group.auto-widths:not(:has(> [class*='width-'])) {
          display: flex;
          flex-wrap: wrap;
          gap: var(--c-spacing-sm) var(--c-spacing-md);
        }

        /* Sub-labels of grouped inputs. --c-text-quiet is the lightest text
           color that still meets WCAG AA contrast at this size. */
        craft-field[fieldset] > craft-field-group.auto-widths {
          --c-field-label-font-size: var(--c-text-sm);
          --c-field-label-font-weight: var(--font-weight-semibold, 600);
          --c-field-label-color: var(--c-text-quiet);
          --c-field-label-line-height: 1;
          --c-field-label-margin-block-end: var(--c-spacing-sm);
          margin-block-start: var(--c-spacing-sm);
        }

        craft-field[fieldset][required]
          > craft-field-group
          craft-field[required]
          > [slot='label']
          > craft-icon[name='asterisk'][data-craft-field-decoration] {
          display: none;
        }

        @container (min-width: 30rem) {
          craft-field-group.auto-widths > :not([class*='width-']) {
            grid-column: span 2;
          }

          craft-field-group > .width-25 {
            grid-column: span 3;
          }

          craft-field-group > .width-33 {
            grid-column: span 4;
          }

          craft-field-group > .width-50 {
            grid-column: span 6;
          }

          craft-field-group > .width-66 {
            grid-column: span 6;
          }

          craft-field-group > .width-75 {
            grid-column: span 6;
          }
        }

        @container (min-width: 50rem) {
          craft-field-group.auto-widths > :not([class*='width-']) {
            grid-column: span 1;
          }

          craft-field-group.auto-widths
            > :not([class*='width-']):has(craft-select) {
            grid-column: span 2;
          }

          craft-field-group > .width-25 {
            grid-column: span 3;
          }

          craft-field-group > .width-33 {
            grid-column: span 4;
          }

          craft-field-group > .width-50 {
            grid-column: span 6;
          }

          craft-field-group > .width-66 {
            grid-column: span 8;
          }

          craft-field-group > .width-75 {
            grid-column: span 9;
          }
        }

        @container (min-width: 25rem) and (max-width: calc(50rem - 1px)) {
          craft-field-group > .width-25 {
            grid-column: span 6;
          }
        }
      </style>
      <slot></slot>
    `}createRenderRoot(){return this}};n([s({type:Boolean,reflect:!0})],Qd.prototype,`separated`,void 0),customElements.get(`craft-field-group`)||customElements.define(`craft-field-group`,Qd);var $d=new WeakMap,ef=new WeakMap,tf=new WeakMap,nf=new WeakSet,rf=class extends u{constructor(...e){super(...e),_(this,nf),this.label=S(`More Info`),this.icon=`circle-info`,this.disabled=!1,y(this,$d,new AbortController),y(this,ef,null),y(this,tf,`info-icon-${Math.random().toString(36).slice(2,8)}`)}connectedCallback(){super.connectedCallback(),g($d,this).signal.aborted&&v($d,this,new AbortController);let{signal:e}=g($d,this);this.addEventListener(`craft-show`,()=>{of._&&of._!==this&&of._.renderRoot.querySelector(`craft-tooltip`)?.hide(),of._=this,b(nf,this,af).call(this)},{signal:e}),this.addEventListener(`craft-after-hide`,()=>{of._===this&&(of._=null),g(ef,this)?.abort(),v(ef,this,null)},{signal:e})}disconnectedCallback(){of._===this&&(of._=null),g(ef,this)?.abort(),v(ef,this,null),g($d,this).abort(),super.disconnectedCallback()}render(){return p`
      <div class="cp-info-icon">
        <craft-button
          type="button"
          icon
          size="zero"
          variant="plain"
          id="${g(tf,this)}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${g(tf,this)}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};function af(){g(ef,this)?.abort(),v(ef,this,new AbortController),document.addEventListener(`pointerdown`,e=>{e.composedPath().includes(this)||this.renderRoot.querySelector(`craft-tooltip`)?.hide()},{capture:!0,signal:g(ef,this).signal})}rf.styles=a`
    :host {
      display: inline-flex;
    }
  `;var of={_:null};n([s()],rf.prototype,`label`,void 0),n([s()],rf.prototype,`icon`,void 0),n([s({type:Boolean,reflect:!0})],rf.prototype,`disabled`,void 0),n([h(`craft-tooltip`)],rf.prototype,`tooltip`,void 0),customElements.get(`craft-info-icon`)||customElements.define(`craft-info-icon`,rf);var sf=a`
  ${Un}

  :host {
    display: block;
  }

  .input-color {
    display: grid;
    gap: var(--c-spacing-sm);
  }

  .input-group__before,
  .input-group__after {
    display: contents;
  }

  .input-color__control {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .input-color__swatch {
    position: relative;
    display: block;
    flex: 0 0 auto;
    inline-size: var(--c-input-height, var(--c-size-control-md));
    block-size: var(--c-input-height, var(--c-size-control-md));
    border-radius: 50%;
    overflow: hidden;
    background:
      linear-gradient(
        45deg,
        var(--c-color-neutral-fill-quiet) 25%,
        transparent 25%
      ),
      linear-gradient(
        -45deg,
        var(--c-color-neutral-fill-quiet) 25%,
        transparent 25%
      ),
      linear-gradient(
        45deg,
        transparent 75%,
        var(--c-color-neutral-fill-quiet) 75%
      ),
      linear-gradient(
        -45deg,
        transparent 75%,
        var(--c-color-neutral-fill-quiet) 75%
      );
    background-position:
      0 0,
      0 0.375rem,
      0.375rem -0.375rem,
      -0.375rem 0;
    background-size: 0.75rem 0.75rem;
  }

  :host(:not([disabled])) .input-color__swatch {
    cursor: pointer;
  }

  .input-color__swatch:focus-within {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  .input-color__preview {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px var(--c-color-border-translucent);
  }

  .input-color__picker {
    position: absolute;
    inset: 0;
    inline-size: 100%;
    block-size: 100%;
    border: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: inherit;
  }

  .input-group__container {
    ${Vn}
    flex: 0 0 7.25rem;
    inline-size: 7.25rem;
    max-inline-size: 100%;
    /* The input inherits this through its slot; ::slotted() can't beat the page's input font reset */
    font-family: var(--c-font-mono);
  }

  .input-group__input {
    display: flex;
    flex: 1 1 auto;
  }

  /*
    The # sits inside the input, as its value's first character, like the
    search input's icon. Clicks pass through it to the input.
  */
  .input-group__prefix {
    position: absolute;
    inset-block: 0;
    inset-inline-start: 0;
    z-index: 1;
    padding-inline: calc(
        var(--c-input-spacing-inline) + var(--c-input-border-width)
      )
      0;
    border: none;
    background: none;
    pointer-events: none;
    color: var(--c-text-quiet);
    user-select: none;
    font-family: var(--c-font-mono);
    display: grid;
    place-items: center;
  }

  .input-group__prefix + .input-group__input ::slotted([slot='input']) {
    --_input-start-start-radius: var(--c-input-radius, var(--c-radius-sm));
    --_input-end-start-radius: var(--c-input-radius, var(--c-radius-sm));
    --c-focus-outline-style: inherit;
    --c-focus-outline-offset: inherit;
    padding-inline-start: calc(
      var(--c-input-spacing-inline) + 1ch + var(--c-spacing-xs)
    );
  }

  ::slotted([slot='input']) {
    width: 100%;
    min-inline-size: 0;
    font: inherit;
    font-family: var(--c-font-mono);
    padding-block: 0;

    border: 0;
    appearance: none;
    background-color: transparent;
  }

  ::slotted(.form-control) {
    ${Bn}
  }
`,cf=/^[0-9a-f]{6}$/i,lf=/^[0-9a-f]{3}$/i,uf={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function df(e){return String(e??``).trim().replace(/^#/,``)}function ff(e){let t=df(e);return lf.test(t)?t.split(``).map(e=>e+e).join(``):cf.test(t)?t:null}var pf=class e extends F{static get styles(){return[...super.styles,sf]}constructor(){super(),this.presets=[],this._pickerListId=`${this._inputId}-presets`,this.type=`text`}static doesBrowserSupportColorInputs(){if(e._browserSupportsColorInputs===null){let t=document.createElement(`input`);t.setAttribute(`type`,`color`),e._browserSupportsColorInputs=t.type===`color`}return e._browserSupportsColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=`text`,e.inputMode=`text`,e.spellcheck=!1,e.setAttribute(`autocorrect`,`off`),e.setAttribute(`autocapitalize`,`off`),t&&e.setAttribute(`value`,df(t)),e}}}parser(e){return df(e)}formatter(e){return df(e)}serializer(e){return df(e)}deserializer(e){return df(e)}preprocessor(e){let t=df(e);if(t!==e)return t}get _expandedHexValue(){return ff(this.modelValue)}get _pickerValue(){return this._expandedHexValue?`#${this._expandedHexValue}`:`#ffffff`}get _validPresets(){return this.presets.map(e=>ff(e)).filter(e=>e!==null).map(e=>`#${e}`)}_handlePickerInput(e){let t=e.target,n=df(t.value),r=this._isHandlingUserInput;this._isHandlingUserInput=!0,this.modelValue=n,this.value=n,this._isHandlingUserInput=r}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return r;let t=this._validPresets;return p`
      <input
        class="input-color__picker"
        type="color"
        aria-label="${S(`Color picker`)}"
        .value="${this._pickerValue}"
        ?disabled="${this.disabled}"
        list=${t.length?this._pickerListId:r}
        @input="${this._handlePickerInput}"
      />
      ${t.length?p`
            <datalist id="${this._pickerListId}">
              ${t.map(e=>p`<option value="${e}"></option>`)}
            </datalist>
          `:r}
    `}_swatchTemplate(){return p`
      <label class="input-color__swatch">
        <span class="input-color__preview" style="${this._expandedHexValue?`background-color: #${this._expandedHexValue}`:``}"></span>
        ${this._pickerTemplate()}
      </label>
    `}_inputGroupTemplate(){return p`
      <div class="input-color">
        ${this._inputGroupBeforeTemplate()}
        <div class="input-color__control">
          ${this._swatchTemplate()}
          <div class="input-group__container">
            <div class="input-group__prefix" aria-hidden="true">#</div>
            ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}};pf._browserSupportsColorInputs=null,n([s({converter:uf})],pf.prototype,`presets`,void 0),customElements.get(`craft-input-color`)||customElements.define(`craft-input-color`,pf);var mf=class extends F{constructor(...e){super(...e),this.inlineSuffix=!0}_renderSuffix(){return p`<craft-copy-button
      tooltip-label="${S(`Copy`)}"
    ></craft-copy-button>`}get slots(){return{...super.slots,suffix:()=>({template:this._renderSuffix(),renderAsDirectHostChild:!0})}}connectedCallback(){super.connectedCallback(),this.readOnly=!0}_copyButton(){return this.querySelector(`craft-copy-button`)}_syncCopyButton(){let e=this._copyButton();e&&(e.value=this.copyValue??String(this.modelValue??``))}updated(e){super.updated(e),this.readOnly=!0,this._syncCopyButton()}};n([s({type:String,attribute:`copy-value`})],mf.prototype,`copyValue`,void 0),customElements.get(`craft-input-copy`)||customElements.define(`craft-input-copy`,mf);var hf=class extends F{constructor(){super(),this.type=`date`}};customElements.get(`craft-input-date`)||customElements.define(`craft-input-date`,hf);var gf={fromAttribute:e=>e!==`false`,toAttribute:e=>String(e)},_f=e=>({fromAttribute:t=>t?JSON.parse(t):e(),toAttribute:e=>JSON.stringify(e)}),vf=new WeakSet,yf=class extends F{constructor(){super(),_(this,vf),this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.type=`time`}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,b(vf,this,bf))}disconnectedCallback(){this.removeEventListener(`change`,b(vf,this,bf)),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),e.has(`minuteIncrement`)&&(this.step=this.minuteIncrement*60)}updated(e){super.updated(e),b(vf,this,xf).call(this)}};function bf(e){if(!(e.target===this||!(e.target instanceof HTMLInputElement))){if(this.forceRoundTime){let t=b(vf,this,Sf).call(this,e.target.value);e.target.value=t,this.modelValue=t,this.value=t}b(vf,this,xf).call(this)}}function xf(){let e=this._inputNode;if(!e)return;let t=b(vf,this,Cf).call(this,e.value),n=t!==null&&this.disabledTimeRanges.some(([e,n])=>{let r=b(vf,this,Cf).call(this,e),i=b(vf,this,Cf).call(this,n);return r!==null&&i!==null&&t>=r&&t<i});e.setCustomValidity(n?`This time is unavailable.`:``)}function Sf(e){let t=b(vf,this,Cf).call(this,e);if(t===null)return e;let n=Math.max(1,this.minuteIncrement)*60,r=Math.min(86399,Math.round(t/n)*n),i=Math.floor(r/3600),a=Math.floor(r%3600/60);return`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}function Cf(e){let t=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(e);return t?Number(t[1])*3600+Number(t[2])*60+Number(t[3]??0):null}n([s({type:Number,attribute:`minute-increment`})],yf.prototype,`minuteIncrement`,void 0),n([s({attribute:`disabled-time-ranges`,converter:_f(()=>[])})],yf.prototype,`disabledTimeRanges`,void 0),n([s({type:Boolean,attribute:`force-round-time`})],yf.prototype,`forceRoundTime`,void 0),customElements.get(`craft-input-time`)||customElements.define(`craft-input-time`,yf);var wf={date:()=>S(`Date`),time:()=>S(`Time`),timezone:()=>S(`Time Zone`)},Tf=new WeakMap,Ef=new WeakMap,Df=new WeakMap,V=new WeakSet,Of=new WeakMap,H=class extends u{constructor(...e){super(...e),_(this,V),this.dateValue=``,this.timeValue=``,this.showDate=!0,this.showTime=!0,this.showTimezone=!1,this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.disabled=!1,this.readonly=!1,this.required=!1,y(this,Tf,void 0),y(this,Ef,void 0),y(this,Df,e=>{let t=e.type===`focusin`?e.target:e.relatedTarget;this.toggleAttribute(`input-focused`,t instanceof Element&&this.contains(t)&&t.closest(`[data-date-time-part]`)!==null)}),y(this,Of,e=>{let t=e.target;if(e.detail?.initialize||!(t instanceof F))return;let n=String(t.modelValue??``);switch(t.dataset.dateTimePart){case`date`:this.dateValue=n;break;case`time`:this.timeValue=n;break;case`timezone`:this.timezone=n}})}render(){return p`<div class="inputs" part="inputs">
        <slot name="inputs"></slot>
      </div>
      <slot @slotchange=${()=>b(V,this,Af).call(this)}></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener(`model-value-changed`,g(Of,this)),this.addEventListener(`focusin`,g(Df,this)),this.addEventListener(`focusout`,g(Df,this)),g(Tf,this)??v(Tf,this,new ResizeObserver(()=>b(V,this,Af).call(this))),g(Tf,this).observe(this)}disconnectedCallback(){this.removeEventListener(`model-value-changed`,g(Of,this)),this.removeEventListener(`focusin`,g(Df,this)),this.removeEventListener(`focusout`,g(Df,this)),g(Tf,this)?.disconnect(),g(Ef,this)!==void 0&&(cancelAnimationFrame(g(Ef,this)),v(Ef,this,void 0)),super.disconnectedCallback()}updated(e){super.updated(e),b(V,this,jf).call(this),b(V,this,Mf).call(this),b(V,this,Nf).call(this),b(V,this,Rf).call(this,`locale`,this.locale,!0),b(V,this,Rf).call(this,`timezone`,this.timezone,!this.showTimezone),this.toggleAttribute(`single`,[this.showDate,this.showTime,this.showTimezone].filter(Boolean).length===1),b(V,this,Af).call(this)}};function kf(){let e=this.shadowRoot?.querySelector(`.inputs`);if(!e)return;let t=this.getBoundingClientRect(),n=e.getBoundingClientRect(),r=getComputedStyle(this),i=r.direction===`rtl`?n.left-t.left-parseFloat(r.borderLeftWidth):t.right-parseFloat(r.borderRightWidth)-n.right;e.style.setProperty(`--_beside-size`,`${Math.max(0,i)}px`)}function Af(){g(Ef,this)===void 0&&v(Ef,this,requestAnimationFrame(()=>{v(Ef,this,void 0);let e=[...this.querySelectorAll(`:scope > [data-date-time-part]`)],t=e.map(e=>e.getBoundingClientRect().top);this.toggleAttribute(`stacked`,t.some(e=>e>(t[0]??e)+1)),e.forEach((e,n)=>{let r=t[n+1];e.toggleAttribute(`data-row-end`,r===void 0||r>t[n]+1)}),b(V,this,kf).call(this)}))}function jf(){let e=b(V,this,Pf).call(this,`craft-input-date`,`date`,this.showDate);e instanceof hf&&(b(V,this,Lf).call(this,e,`date`,this.dateValue,this.required),e.min=this.min,e.max=this.max,b(V,this,Ff).call(this,e))}function Mf(){let e=b(V,this,Pf).call(this,`craft-input-time`,`time`,this.showTime);e instanceof yf&&(b(V,this,Lf).call(this,e,`time`,this.timeValue,this.required),e.min=this.minTime,e.max=this.maxTime,e.minuteIncrement=this.minuteIncrement,e.disabledTimeRanges=this.disabledTimeRanges,e.forceRoundTime=this.forceRoundTime,b(V,this,Ff).call(this,e))}function Nf(){let e=b(V,this,Pf).call(this,`craft-input`,`timezone`,this.showTimezone);e&&(b(V,this,Lf).call(this,e,`timezone`,this.timezone??``,!1),b(V,this,Ff).call(this,e))}function Pf(e,t,n){let r=[...this.children].find(t=>t.tagName.toLowerCase()===e&&t instanceof F);if(!n)return r?.remove(),null;let i=r??document.createElement(e);return i.dataset.dateTimePart=t,i.slot=`inputs`,i}function Ff(e){e.parentElement!==this&&this.insertBefore(e,b(V,this,If).call(this))}function If(){return[...this.children].find(e=>!(e instanceof HTMLElement)||e.dataset.dateTimePart===void 0&&e.dataset.dateTimeMetadata===void 0)??null}function Lf(e,t,n,r){e.name=this.name?`${this.name}[${t}]`:``,e.disabled=this.disabled,e.readOnly=this.readonly,e.required=r,e.modelValue!==n&&(e.modelValue=n),this.describedBy?e.setAttribute(`aria-describedby`,this.describedBy):e.removeAttribute(`aria-describedby`),e.label=wf[t]?.()??t,e.labelSrOnly=!0}function Rf(e,t,n){let r=this.name?`${this.name}[${e}]`:void 0,i=[...this.children].find(t=>t instanceof HTMLInputElement&&t.type===`hidden`&&t.dataset.dateTimeMetadata===e);if(!r||!n){i?.remove();return}let a=i??document.createElement(`input`);a.type=`hidden`,a.dataset.dateTimeMetadata=e,a.name=r,a.value=t??``,i||this.append(a)}H.styles=a`
    :host {
      --_border-width: var(
        --c-input-border-width,
        var(--c-form-control-border-width, 1px)
      );
      --_border-color: var(
        --c-input-border-color,
        var(--c-form-control-border-color)
      );
      --_divider-color: var(--c-color-neutral-border-quiet);
      --_height: var(--c-input-height, var(--c-size-control-md));
      --_row-height: calc(var(--_height) - var(--_border-width) * 2);
      --_button-inset: calc(
        (var(--_height) - var(--_border-width) * 2 - var(--c-size-control-sm)) /
          2
      );
      display: inline-flex;
      align-items: stretch;
      max-width: 100%;
      box-sizing: border-box;
      min-height: var(--_height);
      border: var(--_border-width)
        var(--c-input-border-style, var(--c-form-control-border-style, solid))
        var(--_border-color);
      border-radius: var(--c-input-radius, var(--c-radius-md));
      background-color: var(--c-input-fill);
      box-shadow: var(--c-input-shadow);
      overflow: clip;
    }

    :host([width='full']) {
      display: flex;
    }

    /*
      The inputs share a row while they fit at their natural widths, and wrap
      onto rows of their own when they don't. A slotted button stays to their
      right, spanning every row.
    */
    .inputs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      min-width: 0;
    }

    ::slotted(:is(craft-input, craft-input-date, craft-input-time)) {
      --c-input-border-width: 0px;
      --c-input-radius: 0px;
      --c-input-shadow: none;
      --c-input-fill: transparent;
      --c-input-height: var(--_row-height);
      --c-focus-outline-offset: -2px;
    }

    /* Split the row evenly, but never narrower than an input's own width. */
    slot[name='inputs']::slotted([data-date-time-part]) {
      flex: 1 1 0;
      min-width: max-content;
    }

    slot[name='inputs']::slotted([data-date-time-part]:not(:first-child)) {
      border-inline-start: var(--_border-width) solid var(--_divider-color);
    }

    /*
      Stacked, the divider runs above the input instead, across the whole
      field, beside slotted content too, so the host draws it between rows.
      The input's borders stay as wide, just transparent, so the inputs need
      the same room either way and don't flip back and forth at the
      threshold.
    */
    :host([stacked])
      slot[name='inputs']::slotted([data-date-time-part]:not(:first-child)) {
      border-inline-start-color: transparent;
      border-block-start: var(--_border-width) solid transparent;
    }

    :host([stacked]) {
      --_focus-outline-width: var(--c-focus-outline-width);
      background-image: repeating-linear-gradient(
        to bottom,
        transparent 0 var(--_row-height),
        var(--_divider-color) 0 calc(var(--_row-height) + var(--_border-width))
      );
    }

    /*
      Stacked, a part that ends its row reaches across any slotted content
      beside the inputs, and draws the focus ring in place of its input, so the
      ring spans the whole field. The padding matches the margin, so the part
      takes up the same room and the inputs wrap the same way.
    */
    :host([stacked])
      slot[name='inputs']::slotted([data-date-time-part][data-row-end]) {
      --c-focus-outline-width: 0px;
      margin-inline-end: calc(var(--_beside-size, 0px) * -1);
      padding-inline-end: var(--_beside-size, 0px);
    }

    :host([stacked])
      slot[name='inputs']::slotted([data-date-time-part][data-row-end]:focus-within) {
      outline: var(--_focus-outline-width) solid var(--c-color-focus-outline);
      outline-offset: -2px;
    }

    /*
      Slotted controls, such as a clear button, sit inside the border too, at
      their own size, with no divider before them.
    */
    slot:not([name])::slotted(*) {
      flex: none;
      align-self: center;
      margin-inline-end: var(--_button-inset);
    }

    :host([stacked]) slot:not([name])::slotted(*) {
      align-self: end;
      margin-block-end: var(--_button-inset);
    }

    :host([width='full']) .inputs {
      flex: 1 1 auto;
    }

    /*
      A lone date or time input reads as an ordinary input: the whole field,
      clear button included, takes the usual focus ring, standing off its
      border, rather than one inset around the input.
    */
    :host([single]) slot[name='inputs']::slotted([data-date-time-part]) {
      --c-focus-outline-width: 0px;
    }

    :host([single][input-focused]) {
      outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
        var(--c-color-focus-outline);
      outline-offset: var(--c-focus-outline-offset);
    }
  `,n([s()],H.prototype,`name`,void 0),n([s({attribute:`date-value`})],H.prototype,`dateValue`,void 0),n([s({attribute:`time-value`})],H.prototype,`timeValue`,void 0),n([s()],H.prototype,`locale`,void 0),n([s()],H.prototype,`timezone`,void 0),n([s({attribute:`show-date`,converter:gf})],H.prototype,`showDate`,void 0),n([s({attribute:`show-time`,converter:gf})],H.prototype,`showTime`,void 0),n([s({type:Boolean,attribute:`show-timezone`})],H.prototype,`showTimezone`,void 0),n([s()],H.prototype,`min`,void 0),n([s()],H.prototype,`max`,void 0),n([s({attribute:`min-time`})],H.prototype,`minTime`,void 0),n([s({attribute:`max-time`})],H.prototype,`maxTime`,void 0),n([s({type:Number,attribute:`minute-increment`})],H.prototype,`minuteIncrement`,void 0),n([s({attribute:`disabled-time-ranges`,converter:_f(()=>[])})],H.prototype,`disabledTimeRanges`,void 0),n([s({type:Boolean,attribute:`force-round-time`})],H.prototype,`forceRoundTime`,void 0),n([s({reflect:!0})],H.prototype,`width`,void 0),n([s({type:Boolean})],H.prototype,`disabled`,void 0),n([s({type:Boolean})],H.prototype,`readonly`,void 0),n([s({type:Boolean})],H.prototype,`required`,void 0),n([s({attribute:`described-by`})],H.prototype,`describedBy`,void 0),customElements.get(`craft-input-date-time`)||customElements.define(`craft-input-date-time`,H);var zf=class extends ii{static validatorName=`IsAcceptedFile`;static checkFileSize(e,t){return e<=t}static getExtension(e){return e?.slice(e.lastIndexOf(`.`))}static isExtensionAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}static isFileTypeAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}execute(e,t=this.param){let n,r,i=this.constructor,{allowedFileTypes:a,allowedFileExtensions:o,maxFileSize:s}=t;return a?.length?(n=e.some(e=>!i.isFileTypeAllowed(e.type,a)),n):o?.length?(r=e.some(e=>!i.isExtensionAllowed(i.getExtension(e.name),o)),r):e.findIndex(e=>!i.checkFileSize(e.size,s))>-1}static async getMessage(){return``}},Bf=class extends ii{static validatorName=`DuplicateFileNames`;constructor(e,t){super(e,t),this.type=`info`}execute(e,t=this.param){return t.show}static async getMessage(){return Dr().msg(`lion-input-file:uploadTextDuplicateFileName`)}},Vf=524288e3,Hf={type:`FILE_TYPE`,size:`FILE_SIZE`},Uf={fail:`FAIL`,pass:`SUCCESS`},Wf=class{constructor(e,t){this.failedProp=[],this.systemFile=e,this._acceptCriteria=t,this.uploadFileStatus(),this.failedProp.length===0&&this.createDownloadUrl(e)}_getFileNameExtension(e){return e.slice(e.lastIndexOf(`.`))}uploadFileStatus(){if(this._acceptCriteria.allowedFileExtensions.length){let e=this._getFileNameExtension(this.systemFile.name);zf.isExtensionAllowed(e,this._acceptCriteria.allowedFileExtensions)||(this.status=Uf.fail,this.failedProp.push(Hf.type))}else if(this._acceptCriteria.allowedFileTypes.length){let e=this.systemFile.type;zf.isFileTypeAllowed(e,this._acceptCriteria.allowedFileTypes)||(this.status=Uf.fail,this.failedProp.push(Hf.type))}zf.checkFileSize(this.systemFile.size,this._acceptCriteria.maxFileSize)?this.status!==Uf.fail&&(this.status=Uf.pass):(this.status=Uf.fail,this.failedProp.push(Hf.size))}createDownloadUrl(e){this.downloadUrl=window.URL.createObjectURL(e)}},Gf=e=>{switch(e){case`bg-BG`:return O(()=>import(`./bg-BG-BztIKams.js`),__vite__mapDeps([49,50]),import.meta.url);case`bg`:return O(()=>import(`./bg-CLv3tqUg.js`),__vite__mapDeps([51,50]),import.meta.url);case`cs-CZ`:return O(()=>import(`./cs-CZ-VPjqqYsZ.js`),__vite__mapDeps([52,53]),import.meta.url);case`cs`:return O(()=>import(`./cs-B7yAvqdQ.js`),__vite__mapDeps([54,53]),import.meta.url);case`de-DE`:return O(()=>import(`./de-DE-CsSmh1gZ.js`),__vite__mapDeps([55,56]),import.meta.url);case`de`:return O(()=>import(`./de-kP5ksqlV.js`),__vite__mapDeps([57,56]),import.meta.url);case`en-AU`:return O(()=>import(`./en-AU-3urcHPzk.js`),__vite__mapDeps([58,59]),import.meta.url);case`en-GB`:return O(()=>import(`./en-GB-3urcHPzk.js`),__vite__mapDeps([60,59]),import.meta.url);case`en-US`:return O(()=>import(`./en-US-3urcHPzk.js`),__vite__mapDeps([61,59]),import.meta.url);case`en-PH`:case`en`:return O(()=>import(`./en-CqZ6PnT7.js`),__vite__mapDeps([62,59]),import.meta.url);case`es-ES`:return O(()=>import(`./es-ES-BbUihx_Q.js`),__vite__mapDeps([63,64]),import.meta.url);case`es`:return O(()=>import(`./es-CqwOJyIS.js`),__vite__mapDeps([65,64]),import.meta.url);case`fr-FR`:return O(()=>import(`./fr-FR-CuiHGLXU.js`),__vite__mapDeps([66,67]),import.meta.url);case`fr-BE`:return O(()=>import(`./fr-BE-CuiHGLXU.js`),__vite__mapDeps([68,67]),import.meta.url);case`fr`:return O(()=>import(`./fr-DDoohrFe.js`),__vite__mapDeps([69,67]),import.meta.url);case`hu-HU`:return O(()=>import(`./hu-HU-CsgTXklM.js`),__vite__mapDeps([70,71]),import.meta.url);case`hu`:return O(()=>import(`./hu-mlQa-ass.js`),__vite__mapDeps([72,71]),import.meta.url);case`id-ID`:return O(()=>import(`./id-ID-DmQHtDR1.js`),__vite__mapDeps([73,74]),import.meta.url);case`id`:return O(()=>import(`./id-wVaUF8IY.js`),__vite__mapDeps([75,74]),import.meta.url);case`it-IT`:return O(()=>import(`./it-IT-UwtN86gq.js`),__vite__mapDeps([76,77]),import.meta.url);case`it`:return O(()=>import(`./it-Cau1XULR.js`),__vite__mapDeps([78,77]),import.meta.url);case`nl-BE`:return O(()=>import(`./nl-BE-BWsuTFhd.js`),__vite__mapDeps([79,80]),import.meta.url);case`nl-NL`:return O(()=>import(`./nl-NL-BWsuTFhd.js`),__vite__mapDeps([81,80]),import.meta.url);case`nl`:return O(()=>import(`./nl-AKV00b4f.js`),__vite__mapDeps([82,80]),import.meta.url);case`pl-PL`:return O(()=>import(`./pl-PL-DNBiW1Dr.js`),__vite__mapDeps([83,84]),import.meta.url);case`pl`:return O(()=>import(`./pl-BYkVljz3.js`),__vite__mapDeps([85,84]),import.meta.url);case`ro-RO`:return O(()=>import(`./ro-RO-f1xYkV2I.js`),__vite__mapDeps([86,87]),import.meta.url);case`ro`:return O(()=>import(`./ro-ocFYhLc_.js`),__vite__mapDeps([88,87]),import.meta.url);case`ru-RU`:return O(()=>import(`./ru-RU-CR2XPZpu.js`),__vite__mapDeps([89,90]),import.meta.url);case`ru`:return O(()=>import(`./ru-DZLJ_F1W.js`),__vite__mapDeps([91,90]),import.meta.url);case`sk-SK`:return O(()=>import(`./sk-SK-zTlM1iZC.js`),__vite__mapDeps([92,93]),import.meta.url);case`sk`:return O(()=>import(`./sk-DV9gBcF9.js`),__vite__mapDeps([94,93]),import.meta.url);case`uk-UA`:return O(()=>import(`./uk-UA-Db28XQdn.js`),__vite__mapDeps([95,96]),import.meta.url);case`uk`:return O(()=>import(`./uk-b3alyY__.js`),__vite__mapDeps([97,96]),import.meta.url);case`zh-CN`:case`zh`:return O(()=>import(`./zh-HUllbHAl.js`),[],import.meta.url);default:return O(()=>import(`./en-CqZ6PnT7.js`),__vite__mapDeps([62,59]),import.meta.url)}},Kf=class extends Br(Kr(u)){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":ri}}static get properties(){return{fileList:{type:Array},multiple:{type:Boolean}}}static localizeNamespaces=[{"lion-input-file":Gf},...super.localizeNamespaces];constructor(){super(),this.fileList=[],this.multiple=!1}updated(e){super.updated(e),e.has(`fileList`)&&this._enhanceLightDomA11y()}_enhanceLightDomA11y(){let e=this.shadowRoot?.querySelectorAll(`[id^="file-feedback"]`),t=this.parentNode?.parentNode;e?.forEach(e=>{t?.addEventListener(`focusin`,()=>{e.setAttribute(`aria-live`,`polite`)}),t?.addEventListener(`focusout`,()=>{e.setAttribute(`aria-live`,`assertive`)})})}_removeFile(e){this.dispatchEvent(new CustomEvent(`file-remove-requested`,{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_validationFeedbackTemplate(e,t){return p`
      <lion-validation-feedback
        id="file-feedback-${t}"
        .feedbackData="${e}"
        aria-live="assertive"
      ></lion-validation-feedback>
    `}_listItemBeforeTemplate(e){return r}_listItemAfterTemplate(e,t){return p`
      <button
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit(`lion-input-file:removeButtonLabel`,{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </button>
    `}_removeButtonContentTemplate(){return p`✖️`}_selectedListItemTemplate(e){let t=It();return p`
      <div class="selected__list__item" status="${e.status?e.status.toLowerCase():``}">
        <div class="selected__list__item__label">
          ${this._listItemBeforeTemplate(e)}
          <span id="selected-list-item-label-${t}" class="selected__list__item__label__text">
            <span class="sr-only">${this.msgLit(`lion-input-file:fileNameDescriptionLabel`)}</span>
            ${e.downloadUrl&&e.status!==`LOADING`?p`
                  <a
                    class="selected__list__item__label__link"
                    href="${e.downloadUrl}"
                    target="${e.downloadUrl.startsWith(`blob`)?`_blank`:``}"
                    rel="${ft(e.downloadUrl.startsWith(`blob`)?`noopener noreferrer`:void 0)}"
                    >${e.systemFile?.name}</a
                  >
                `:e.systemFile?.name}
          </span>
          ${this._listItemAfterTemplate(e,t)}
        </div>
        ${e.status===`FAIL`&&e.validationFeedback?p`
              ${es(e.validationFeedback,e=>p`
                  ${this._validationFeedbackTemplate([e],t)}
                `)}
            `:r}
      </div>
    `}render(){return this.fileList?.length?p`
          ${this.multiple?p`
                <ul class="selected__list">
                  ${this.fileList.map(e=>p` <li>${this._selectedListItemTemplate(e)}</li> `)}
                </ul>
              `:p` ${this._selectedListItemTemplate(this.fileList[0])} `}
        `:r}static get styles(){return[a`
        .selected__list {
          list-style-type: none;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}};function qf(e,t=2){if(!+e)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[` bytes`,`KB`,`MB`,`GB`,`TB`,`PB`,`EB`,`ZB`,`YB`],a=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/n**a).toFixed(r))}${i[a]}`}var Jf=class extends Kr(Br(ui)){static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":Kf}}static get properties(){return{accept:{type:String},multiple:{type:Boolean,reflect:!0},buttonLabel:{type:String,attribute:`button-label`},maxFileSize:{type:Number,attribute:`max-file-size`},enableDropZone:{type:Boolean,attribute:`enable-drop-zone`},uploadOnSelect:{type:Boolean,attribute:`upload-on-select`},isDragging:{type:Boolean,attribute:`is-dragging`,reflect:!0},uploadResponse:{type:Array,state:!1},_selectedFilesMetaData:{type:Array,state:!0}}}static localizeNamespaces=[{"lion-input-file":Gf},...super.localizeNamespaces];static get validationTypes(){return[`error`,`info`]}get slots(){return{...super.slots,input:()=>p`<input .value="${ft(this.getAttribute(`value`))}" />`,"file-select-button":()=>p`<button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </button>`,after:()=>p`<div data-description></div>`,"selected-file-list":()=>({template:p`
          <lion-selected-file-list
            .fileList=${this._selectedFilesMetaData}
            .multiple=${this.multiple}
          ></lion-selected-file-list>
        `,renderAsDirectHostChild:!0})}}get _inputNode(){return super._inputNode}get _buttonNode(){return this.querySelector(`#select-button-${this._inputId}`)}get buttonLabel(){return this.__buttonLabel||this._buttonNode?.textContent?.trim()||``}set buttonLabel(e){let t=this.buttonLabel;this.__buttonLabel=e,this.requestUpdate(`buttonLabel`,t)}get _focusableNode(){return this._buttonNode}get _isDragAndDropSupported(){return`draggable`in document.createElement(`div`)}constructor(){super(),this.type=`file`,this._selectedFilesMetaData=[],this.uploadResponse=[],this.__initialUploadResponse=this.uploadResponse,this.uploadOnSelect=!1,this.multiple=!1,this.enableDropZone=!1,this.maxFileSize=Vf,this.accept=``,this.buttonLabel=``,this._initialButtonLabel=``,this.modelValue=[],this._onRemoveFile=this._onRemoveFile.bind(this),this.__duplicateFileNamesValidator=new Bf({show:!1}),this.__previouslyParsedFiles=null}get _fileListNode(){return Array.from(this.children).find(e=>e.slot===`selected-file-list`)}connectedCallback(){super.connectedCallback(),this.__initialUploadResponse=this.uploadResponse,this._initialButtonLabel=this.buttonLabel,this._inputNode.addEventListener(`change`,this._onChange),this._inputNode.addEventListener(`click`,this._onClick)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener(`change`,this._onChange),this._inputNode.removeEventListener(`click`,this._onClick)}onLocaleUpdated(){super.onLocaleUpdated(),this.multiple?this.buttonLabel=this._initialButtonLabel||this.msgLit(`lion-input-file:selectTextMultipleFile`):this.buttonLabel=this._initialButtonLabel||this.msgLit(`lion-input-file:selectTextSingleFile`)}get operationMode(){return`upload`}get _acceptCriteria(){let e=[],t=[];if(this.accept){let n=this.accept.replace(/\s+/g,``).split(`,`);e=n.filter(e=>e.includes(`/`)),t=n.filter(e=>!e.includes(`/`))}return{allowedFileTypes:e,allowedFileExtensions:t,maxFileSize:this.maxFileSize}}reset(){super.reset(),this._selectedFilesMetaData=[],this.uploadResponse=this.__initialUploadResponse,this.modelValue=[],this.dirty=!1}clear(){this._selectedFilesMetaData=[],this.uploadResponse=[],this.modelValue=[]}_showFeedbackConditionFor(e,t){return super._showFeedbackConditionFor(e,t)&&!(this.validationStates.error?.FileTypeAllowed||this.validationStates.error?.FileSizeAllowed)}parser(){if(this.__previouslyParsedFiles===this._inputNode.files)return this.modelValue;this.__previouslyParsedFiles=this._inputNode.files;let e=this._inputNode.files?Array.from(this._inputNode.files):[];return this.multiple?[...this.modelValue??[],...e]:e}formatter(e){return this._inputNode?.value||``}__setupDragDropEventListeners(){let e=this.shadowRoot?.querySelector(`.input-file__drop-zone`);[`dragenter`,`dragover`,`dragleave`].forEach(t=>{e?.addEventListener(t,e=>{e.preventDefault(),e.stopPropagation(),this.isDragging=t!==`dragleave`},!1)}),window.addEventListener(`drop`,e=>{e.target===this._inputNode&&e.preventDefault(),this.isDragging=!1},!1)}firstUpdated(e){super.firstUpdated(e),this.__setupFileValidators(),this._inputNode&&(this._inputNode.type=this.type,this._inputNode.setAttribute(`tabindex`,`-1`),this._inputNode.multiple=this.multiple,this.accept.length&&(this._inputNode.accept=this.accept)),this.enableDropZone&&this._isDragAndDropSupported&&(this.__setupDragDropEventListeners(),this.setAttribute(`drop-zone`,``)),this._fileListNode.addEventListener(`file-remove-requested`,this._onRemoveFile)}updated(e){super.updated(e),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`buttonLabel`)&&this._buttonNode&&(this._buttonNode.textContent=this.buttonLabel),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`_ariaLabelledNodes`)&&this.__syncAriaLabelledByAttributesToButton(),e.has(`_ariaDescribedNodes`)&&this.__syncAriaDescribedByAttributesToButton(),e.has(`uploadResponse`)&&(this._selectedFilesMetaData.length===0&&this.uploadResponse.forEach(e=>{let t={systemFile:{name:e.name},response:e,status:e.status,validationFeedback:[{message:e.errorMessage}]};this._selectedFilesMetaData=[...this._selectedFilesMetaData,t]}),this._selectedFilesMetaData.forEach(e=>{!this.uploadResponse.some(t=>t.name===e.systemFile.name)&&this.uploadOnSelect?this.__removeFileFromList(e):(this.uploadResponse.forEach(t=>{t.name===e.systemFile.name&&(e.response=t,e.downloadUrl=t.downloadUrl?t.downloadUrl:e.downloadUrl,e.status=t.status,e.validationFeedback=[{type:typeof t.errorMessage==`string`&&t.errorMessage?.length>0?`error`:`success`,message:t.errorMessage??``}])}),this._selectedFilesMetaData=[...this._selectedFilesMetaData])}),this._updateUploadButtonDescription())}__computeNewAddedFiles(e){let t=e.filter(e=>this._selectedFilesMetaData.findIndex(t=>t.systemFile.name===e.name)===-1);return this.__duplicateFileNamesValidator.param={show:e.length!==t.length},this.validate(),t}_processDroppedFiles(e){if(e.preventDefault(),this.isDragging=!1,!(e.dataTransfer&&e.dataTransfer.items.length>1&&!this.multiple||!e.dataTransfer?.files)){if(this._inputNode.files=e.dataTransfer.files,this.multiple){let t=this.__computeNewAddedFiles(Array.from(e.dataTransfer.files));this.modelValue=[...this.modelValue??[],...t]}else this.modelValue=Array.from(e.dataTransfer.files);this._processFiles(Array.from(e.dataTransfer.files))}}_onChange(e){this.touched=!0,this._onUserInputChanged(),this._processFiles(e?.target?.files)}_onClick(e){e.target.value=``}__syncAriaLabelledByAttributesToButton(){if(this._inputNode.hasAttribute(`aria-labelledby`)){let e=this._inputNode.getAttribute(`aria-labelledby`);this._buttonNode?.setAttribute(`aria-labelledby`,`select-button-${this._inputId} ${e}`)}}__syncAriaDescribedByAttributesToButton(){if(this._inputNode.hasAttribute(`aria-describedby`)){let e=this._inputNode.getAttribute(`aria-describedby`)||``;this._buttonNode?.setAttribute(`aria-describedby`,e)}}__setupFileValidators(){this.defaultValidators=[new zf(this._acceptCriteria),this.__duplicateFileNamesValidator]}_processFiles(e){let t=this.__computeNewAddedFiles(Array.from(e));!this.multiple&&t.length>0&&(this._selectedFilesMetaData=[],this.uploadResponse=[]);let n;for(let e of t.values())n=new Wf(e,this._acceptCriteria),n.failedProp?.length?(this._handleErroredFiles(n),this.uploadResponse=[...this.uploadResponse,{name:n.systemFile.name,status:`FAIL`,errorMessage:n.validationFeedback[0].message}]):this.uploadResponse=[...this.uploadResponse,{name:n.systemFile.name,status:`SUCCESS`}],this._selectedFilesMetaData=[...this._selectedFilesMetaData,n],this._handleErrors();let r=this._selectedFilesMetaData.filter(({systemFile:e,status:n})=>t.includes(e)&&n===`SUCCESS`).map(({systemFile:e})=>e);r.length>0&&this._dispatchFileListChangeEvent(r)}_dispatchFileListChangeEvent(e){this.dispatchEvent(new CustomEvent(`file-list-changed`,{detail:{newFiles:e}}))}_handleErrors(){let e=!1;if(this._selectedFilesMetaData.forEach(t=>{t.failedProp&&t.failedProp.length>0&&(e=!0)}),e)this.hasFeedbackFor?.push(`error`),this.shouldShowFeedbackFor.push(`error`);else if(this._prevHasErrors&&this.hasFeedbackFor.includes(`error`)){let e=this.hasFeedbackFor.indexOf(`error`);this.hasFeedbackFor.slice(e,e+1);let t=this.shouldShowFeedbackFor.indexOf(`error`);this.shouldShowFeedbackFor.slice(t,t+1)}this._prevHasErrors=e}_handleErroredFiles(e){e.validationFeedback=[];let{allowedFileExtensions:t,allowedFileTypes:n}=this._acceptCriteria,r=[],i=0,a;t.length?(r=t,a=r.pop(),i=r.length):n.length&&(n.forEach(e=>{if(e.endsWith(`/*`))r.push(e.slice(0,-2));else if(e===`text/plain`)r.push(`text`);else{let t=e.indexOf(`/`),n=e.slice(t+1);if(!n.includes(`+`))r.push(`.${n}`);else{let e=n.split(`+`);r.push(`.${e[0]}`)}}}),a=r.pop(),i=r.length);let o=``;o=a?i?`${this.msgLit(`lion-input-file:allowedFileValidatorComplex`,{allowedTypesArray:r.join(`, `),allowedTypesLastItem:a,maxSize:qf(this.maxFileSize)})}`:`${this.msgLit(`lion-input-file:allowedFileValidatorSimple`,{allowedType:a,maxSize:qf(this.maxFileSize)})}`:`${this.msgLit(`lion-input-file:allowedFileSize`,{maxSize:qf(this.maxFileSize)})}`;let s={message:o,type:`error`};e.validationFeedback?.push(s)}_updateUploadButtonDescription(){let e=[],t;this._selectedFilesMetaData.forEach(n=>{n.status===`FAIL`&&(t=n.validationFeedback?n.validationFeedback[0].message.toString():``,e.push(n.systemFile.name))});let n=this.querySelector(`[slot="after"]`);if(n)if(!this._selectedFilesMetaData||this._selectedFilesMetaData.length===0)this.uploadOnSelect?n.textContent=this.msgLit(`lion-input-file:noFilesUploaded`):n.textContent=this.msgLit(`lion-input-file:noFilesSelected`);else if(this._selectedFilesMetaData.length===1){let{name:e}=this._selectedFilesMetaData[0].systemFile;this.uploadOnSelect?n.textContent=t||this.msgLit(`lion-input-file:fileUploaded`)+(e??``):n.textContent=t||this.msgLit(`lion-input-file:fileSelected`)+(e??``)}else this.uploadOnSelect?n.textContent=`${this.msgLit(`lion-input-file:filesUploaded`,{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit(`lion-input-file:generalValidatorMessage`,{validatorMessage:t,listOfErroneousFiles:e.join(`, `)}):``}`:n.textContent=`${this.msgLit(`lion-input-file:filesSelected`,{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit(`lion-input-file:generalValidatorMessage`,{validatorMessage:t,listOfErroneousFiles:e.join(`, `)}):``}`}__removeFileFromList(e){this._selectedFilesMetaData=this._selectedFilesMetaData.filter(t=>t.systemFile.name!==e.systemFile.name),this.modelValue&&=this.modelValue.filter(t=>t.name!==e.systemFile.name),this._inputNode.value=``,this._handleErrors(),this._updateUploadButtonDescription()}_onRemoveFile(e){if(this.disabled)return;let{removedFile:t}=e.detail;!this.uploadOnSelect&&t&&this.__removeFileFromList(t),this._removeFile(t)}_removeFile(e){this.dispatchEvent(new CustomEvent(`file-removed`,{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_reflectBackOn(){return!1}_isEmpty(){return this.modelValue?.length===0}_dropZoneTemplate(){return p`
      <div @drop="${this._processDroppedFiles}" class="input-file__drop-zone">
        <div class="input-file__drop-zone__text">
          ${this.msgLit(`lion-input-file:dragAndDropText`)}
        </div>
        <slot name="file-select-button"></slot>
      </div>
    `}_inputGroupAfterTemplate(){return p` <slot name="selected-file-list"></slot> `}_inputGroupInputTemplate(){return p`
      <slot name="input"> </slot>
      <slot name="after"> </slot>
      ${this.enableDropZone&&this._isDragAndDropSupported?this._dropZoneTemplate():p`
            <div class="input-group__file-select-button">
              <slot name="file-select-button"></slot>
            </div>
          `}
    `}static get styles(){return[super.styles,a`
        .input-group__container {
          position: relative;
          display: flex;
          flex-direction: column;
          width: fit-content;
        }

        :host([drop-zone]) .input-group__container {
          width: auto;
        }

        .input-group__container ::slotted(input[type='file']) {
          /** Invisible, since means of interaction is button */
          position: absolute;
          opacity: 0;
          /** Full cover positioned, so it will be a drag and drop surface */
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .input-file__drop-zone {
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          border: dashed 2px black;
          padding: 24px 0;
        }

        .input-group__container ::slotted([slot='after']) {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}__openDialogOnBtnClick(e){e.preventDefault(),e.stopPropagation(),this._inputNode.click()}},Yf=class extends Kf{static get styles(){return[...super.styles,a`
        ul {
          display: flex;
          flex-direction: column;
          gap: var(--c-spacing-sm);
        }

        li {
          display: flex;
          align-items: center;
          gap: var(--c-spacing-sm);
          padding: var(--c-spacing-sm);
          border: 1px solid var(--c-color-neutral-border-quiet);
          border-radius: var(--c-radius-sm);
          background-color: var(--c-surface-default);
        }

        .file-name {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .remove-button {
          flex-shrink: 0;
        }

        .preview-thumb {
          width: var(--thumbnail-size, calc(120rem / 16));
          height: auto;
        }

        .selected__list__item__label {
          display: flex;
          align-items: center;
          gap: var(--c-spacing-sm);
        }

        .selected__list__item__remove-button {
          margin-inline-start: var(--c-spacing-md);
        }
      `]}_listItemAfterTemplate(e,t){return p`
      <craft-button
        icon
        size="small"
        variant="plain"
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit(`lion-input-file:removeButtonLabel`,{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </craft-button>
    `}_removeButtonContentTemplate(){return p`<craft-icon name="xmark-large"></craft-icon>`}_listItemBeforeTemplate(e){return p`<img src="${e.downloadUrl}" alt="" class="preview-thumb" />`}},Xf=a`
  /* Add any craft-specific styles for input-file here */
  ::slotted([slot='selected-file-list']) {
    margin-block-start: var(--c-spacing-lg);
  }
`,Zf=class extends nr(Jf){static get styles(){return[...super.styles,Wn,Xf]}get slots(){return{...super.slots,"file-select-button":()=>p`<craft-button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </craft-button>`}}static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":Yf}}};customElements.get(`craft-input-file`)||customElements.define(`craft-input-file`,Zf);var Qf=class extends F{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize=`off`}static get styles(){return[...super.styles,a`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}updated(e){super.updated(e),this._inputNode?.setAttribute(`autocorrect`,this.autocorrect?`on`:`off`),this._inputNode?.setAttribute(`autocapitalize`,this.autocapitalize)}};n([s({reflect:!0,converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],Qf.prototype,`autocorrect`,void 0),n([s({reflect:!0,type:String})],Qf.prototype,`autocapitalize`,void 0),customElements.get(`craft-input-handle`)||customElements.define(`craft-input-handle`,Qf);var $f=e(t(((e,t)=>{(function(n,r){if(typeof e==`object`&&typeof t==`object`)t.exports=r();else if(typeof define==`function`&&define.amd)define([],r);else{var i=r();for(var a in i)(typeof e==`object`?e:n)[a]=i[a]}})(Object(typeof self<`u`?self:e),function(){return(function(){var e=[,(function(){typeof Object.getPrototypeOf!=`function`&&(Object.getPrototypeOf=typeof`test`.__proto__==`object`?function(e){return e.__proto__}:function(e){return e.constructor.prototype})}),(function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw TypeError(`"this" is null or not defined`);let n=Object(this),r=n.length>>>0;if(r===0)return!1;let i=t|0,a=Math.max(i>=0?i:r-Math.abs(i),0);for(;a<r;){if(n[a]===e)return!0;a++}return!1}})}),(function(){let e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat),r=Object.keys;Object.entries||(Object.entries=function(i){return e(r(i),(e,r)=>n(e,typeof r==`string`&&t(i,r)?[[r,i[r]]]:[]),[])})}),(function(){String.prototype.includes||(String.prototype.includes=function(e,t){return typeof t!=`number`&&(t=0),t+e.length>this.length?!1:this.indexOf(e,t)!==-1})}),(function(){if(FormData.Inputmask===void 0){class e extends FormData{constructor(e,t){super(e,t);let n=this.entries(),r;for(;(r=n.next()).done===!1;){let t=r.value[0],n=r.value[1],i=e[t];i&&i.inputmask!==void 0&&!(n instanceof File)&&this.set(t,i.value)}return this}}e.Inputmask=!0,FormData=e}}),(function(e,t,n){var r=o(n(7)),i=n(20),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}r.default.extendDefinitions({A:{validator:`[A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"&":{validator:`[0-9A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"#":{validator:`[0-9A-Fa-f]`,casing:`upper`}});let s=/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;function c(e,t,n,r,i){if(n-1>-1&&t.buffer[n-1]!==`.`?(e=t.buffer[n-1]+e,e=n-2>-1&&t.buffer[n-2]!==`.`?t.buffer[n-2]+e:`0`+e):e=`00`+e,i.greedy&&parseInt(e)>255&&s.test(`00`+e.charAt(2))){let r=[...t.buffer.slice(0,n),`.`,e.charAt(2)];if(r.join(``).match(/\./g).length<4)return{refreshFromBuffer:!0,buffer:r,caret:n+2}}return s.test(e)}r.default.extendAliases({cssunit:{regex:`[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)`},url:{regex:`(https?|ftp)://.*`,autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:`i{1,3}.j{1,3}.k{1,3}.l{1,3}`,definitions:{i:{validator:c},j:{validator:c},k:{validator:c},l:{validator:c}},onUnMask:function(e,t,n){return e},inputmode:`decimal`,substitutes:{",":`.`}},email:{mask:function({separator:e,quantifier:t}){let n=`*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]`,r=n;if(e)for(let i=0;i<t;i++)r+=`[${e}${n}]`;return r},greedy:!1,casing:`lower`,separator:null,quantifier:5,skipOptionalPartCharacter:``,onBeforePaste:function(e,t){return e=e.toLowerCase(),e.replace(`mailto:`,``)},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:`[0-9A-Za-z-]`}},onUnMask:function(e,t,n){return e},inputmode:`email`},mac:{mask:`##:##:##:##:##:##`},vin:{mask:`V{13}9{4}`,definitions:{V:{validator:`[A-HJ-NPR-Za-hj-npr-z\\d]`,casing:`upper`}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:`999-99-9999`,postValidation:function(e,t,n,r,o,s,c){let l=a.getMaskTemplate.call(this,!0,i.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(l.join(``))}}})}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(8)),i=m(n(9)),a=m(n(10)),o=n(15),s=m(n(11)),c=n(16),l=n(23),u=n(24),d=n(20),f=n(21),p=n(22);function m(e){return e&&e.__esModule?e:{default:e}}let h=s.default.document,g=`_inputmask_opts`;function _(e,t,n){if(!(this instanceof _))return new _(e,t,n);this.dependencyLib=a.default,this.el=void 0,this.events={},this.maskset=void 0,n!==!0&&(Object.prototype.toString.call(e)===`[object Object]`?t=e:(t||={},e&&(t.alias=e)),this.opts=a.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==void 0,this.userOptions=t||{},v(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.lastInputEvent=null,this.hasAlternator=!1}_.prototype={dataAttribute:`data-inputmask`,defaults:r.default,definitions:i.default,aliases:{},masksCache:{},i18n:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){let t=this;return typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e),e.forEach(function(e,n){let r=a.default.extend(!0,{},t.opts);if(y(e,r,a.default.extend(!0,{},t.userOptions),t.dataAttribute)){let n=(0,u.generateMaskSet)(r,t.noMasksCache);n!==void 0&&(e.inputmask!==void 0&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new _(void 0,void 0,!0),e.inputmask.opts=r,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=a.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,a.default)(e),e.inputmask.maskset=n,a.default.data(e,g,t.userOptions),l.mask.call(e.inputmask))}}),e&&e[0]&&e[0].inputmask||this},option:function(e,t){if(typeof e==`string`)return this.opts[e];if(typeof e==`object`)return a.default.extend(this.userOptions,e),this.el&&t!==!0&&this.mask(this.el),this},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),this.el===void 0||e!==void 0){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!1,!1,t),typeof this.opts.onBeforeWrite==`function`&&this.opts.onBeforeWrite.call(this,void 0,d.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){a.default.data(this.el,g,null);let e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e===d.getBufferTemplate.call(this).join(``)?this._valueSet(``):this._valueSet(e,this.opts.autoUnmask),o.EventRuler.off(this.el);let t;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),`value`),t&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):h.__lookupGetter__&&this.el.__lookupGetter__(`value`)&&this.__valueGet&&(this.el.__defineGetter__(`value`,this.__valueGet),this.el.__defineSetter__(`value`,this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?d.getBufferTemplate.call(this).reverse():d.getBufferTemplate.call(this)).join(``)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),f.isComplete.call(this,d.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){let e=p.getMaskTemplate.call(this,!0,0,!1).join(``);return this.maskset.metadata.forEach(function(t){return t.mask===e?(e=t,!1):!0}),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),e){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,t)}let t=c.clearOptionalTail.call(this,[]),n=f.isComplete.call(this,t),r=e===(this.isRTL?t.reverse().join(``):t.join(``));return n&&(e===void 0||r)},format:function(e,t){this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache);let n=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,n);let r=this.isRTL?d.getBuffer.call(this).slice().reverse().join(``):d.getBuffer.call(this).join(``);return t?{value:r,metadata:this.getmetadata()}:r},setValue:function(e){this.el&&(0,a.default)(this.el).trigger(`setvalue`,[e])},analyseMask:u.analyseMask};function v(e,t,n){let r=_.prototype.aliases[e];return r?(r.alias&&v(r.alias,void 0,n),a.default.extend(!0,n,r),a.default.extend(!0,n,t),!0):(n.mask===null&&(n.mask=e),!1)}function y(e,t,n,r){function i(t,i){let a=r===``?t:r+`-`+t;i=i===void 0?e.getAttribute(a):i,i!==null&&(typeof i==`string`&&(t.startsWith(`on`)?i=s.default[i]:i===`false`?i=!1:i===`true`?i=!0:t===`mask`&&(i=i.replace(/\\\\/g,`\\`))),n[t]=i)}if(t.importDataAttributes===!0){let a=e.getAttribute(r),o,s,c,l;if(a&&a!==``&&(a=a.replace(/'/g,`"`),s=JSON.parse(`{`+a+`}`)),s){for(l in c=void 0,s)if(l.toLowerCase()===`alias`){c=s[l];break}}for(o in i(`alias`,c),n.alias&&v(n.alias,n,t),t){if(s){for(l in c=void 0,s)if(l.toLowerCase()===o.toLowerCase()){c=s[l];break}}i(o,c)}}return a.default.extend(!0,t,n),(e.dir===`rtl`||t.rightAlign)&&(e.style.textAlign=`right`),(e.dir===`rtl`||t.numericInput)&&(e.dir=`ltr`,e.removeAttribute(`dir`),t.isRTL=!0),Object.keys(n).length}_.extendDefaults=function(e){a.default.extend(!0,_.prototype.defaults,e)},_.extendDefinitions=function(e){a.default.extend(!0,_.prototype.definitions,e)},_.extendAliases=function(e){a.default.extend(!0,_.prototype.aliases,e)},_.format=function(e,t,n){return _(t).format(e,n)},_.unmask=function(e,t){return _(t).unmaskedvalue(e)},_.isValid=function(e,t){return _(t).isValid(e)},_.remove=function(e){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e;for(let t=0;t<e.length;t++)e[t].inputmask&&e[t].inputmask.remove()},_.setValue=function(e,t){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e,e.forEach(function(e){e.inputmask?e.inputmask.setValue(t):(0,a.default)(e).trigger(`setvalue`,[t])})},_.dependencyLib=a.default,s.default.Inputmask=_,t.default=_}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={_maxTestPos:500,placeholder:`_`,optionalmarker:[`[`,`]`],quantifiermarker:[`{`,`}`],groupmarker:[`(`,`)`],alternatormarker:`|`,escapeChar:`\\`,mask:null,regex:null,oncomplete:()=>{},onincomplete:()=>{},oncleared:()=>{},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:()=>{},onBeforeMask:null,onBeforePaste:function(e,t){return typeof t.onBeforeMask==`function`?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,outputMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:()=>{},skipOptionalPartCharacter:` `,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:``,_radixDance:!1,groupSeparator:``,keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:[`text`,`tel`,`url`,`password`,`search`],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:`lvp`,casing:null,inputmode:`text`,importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={9:{validator:`\\p{N}`,definitionSymbol:`*`},a:{validator:`\\p{L}`,definitionSymbol:`*`},"*":{validator:`[\\p{L}\\p{N}]`}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(11)),i=s(n(12)),a=n(13),o=s(n(14));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){if(e instanceof l)return e;if(!(this instanceof l))return new l(e);e!=null&&e!==r.default&&(this[0]=e.nodeName?e:e[0]!==void 0&&e[0].nodeName?e[0]:c.querySelector(e),this[0]!==void 0&&this[0]!==null&&(0,i.default)(this[0],`events`,(0,i.default)(this[0],`events`)||{}))}l.prototype={on:a.on,off:a.off,trigger:a.trigger},l.extend=o.default,l.data=i.default,l.Event=a.Event,t.default=l}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=typeof window<`u`&&window.document&&window.document.createElement?window:{}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n){if(n===void 0)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=n}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0,t.off=f,t.on=d,t.trigger=p;var r=s(n(11)),i=s(n(12)),a=s(n(14)),o=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){return e instanceof Element&&(0,i.default)(e,`events`)}let u=t.Event=void 0;typeof r.default.CustomEvent==`function`?t.Event=u=r.default.CustomEvent:r.default.Event&&c&&c.createEvent?(t.Event=u=function(e,t){t||={bubbles:!1,cancelable:!1,composed:!0,detail:void 0};let n=c.createEvent(`CustomEvent`);return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},u.prototype=r.default.Event.prototype):typeof Event<`u`&&(t.Event=u=Event);function d(e,t){if(!this[0]||!l(this[0]))return this;let n=this[0],r=(0,i.default)(n,`events`),a=(e,i)=>{n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent(`on${e}`,t),r[e]=r[e]||{},r[e][i]=r[e][i]||[],r[e][i].push(t)};return e.split(` `).forEach(e=>{let[t,n=`global`]=e.split(`.`);a(t,n)}),this}function f(e,t){let n,r;function a(e,t,i){if(e in n)if(r.removeEventListener?r.removeEventListener(e,i,!1):r.detachEvent&&r.detachEvent(`on${e}`,i),t===`global`)for(let t in n[e])n[e][t].splice(n[e][t].indexOf(i),1);else n[e][t].splice(n[e][t].indexOf(i),1)}function o(e,r){let i=[],a,o;if(e.length>0){let s=r?[r]:Object.keys(n[e]);for(let c=0;c<s.length;c++)if(r=s[c],t===void 0)for(a=0,o=n[e][r]?.length||0;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}else if(r.length>0){for(let e in n)if(n[e][r])if(t===void 0)for(a=0,o=n[e][r].length;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}return i}return l(this[0])&&(n=(0,i.default)(this[0],`events`),r=this[0],e||=Object.keys(n).join(` `),e!==``&&e.split(` `).forEach(e=>{let[t,n]=e.split(`.`);o(t,n).forEach(({ev:e,handler:t,namespace:n})=>{a(e,n,t)})})),this}function p(e){if(l(this[0])){let t=(0,i.default)(this[0],`events`),n=this[0],r=typeof e==`string`?e.split(` `):[e.type];for(let i=0;i<r.length;i++){let s=r[i].split(`.`),l=s[0],u=s[1]||`global`;if(c!==void 0){let t,r={bubbles:!0,cancelable:!0,composed:!0,detail:arguments[1]};if(c.createEvent){try{switch(l){case`input`:r.inputType=`insertText`,t=new InputEvent(l,r);break;default:t=new CustomEvent(l,r)}}catch{t=c.createEvent(`CustomEvent`),t.initCustomEvent(l,r.bubbles,r.cancelable,r.detail)}e.type&&(0,a.default)(t,e),n.dispatchEvent(t)}else t=c.createEventObject(),t.eventType=l,t.detail=arguments[1],e.type&&(0,a.default)(t,e),n.fireEvent(`on`+t.eventType,t)}else if(t[l]!==void 0){arguments[0]=arguments[0].type?arguments[0]:o.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1);let e=t[l];(u===`global`?Object.values(e).flat():e[u]).forEach(e=>e.apply(n,arguments))}}}return this}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){let e,t,r,i,a,o,s=arguments[0]||{},c=1,l=arguments.length,u=!1;for(typeof s==`boolean`&&(u=s,s=arguments[c]||{},c++),typeof s!=`object`&&typeof s!=`function`&&(s={});c<l;c++)if((e=arguments[c])!=null)for(t in e)r=s[t],i=e[t],s!==i&&(u&&i&&(Object.prototype.toString.call(i)===`[object Object]`||(a=Array.isArray(i)))?(a?(a=!1,o=r&&Array.isArray(r)?r:[]):o=r&&Object.prototype.toString.call(r)===`[object Object]`?r:{},s[t]=n(u,o,i)):i!==void 0&&(s[t]=i));return s}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var r=n(16),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}t.EventRuler={on:function(e,t,n){let s=e.inputmask.dependencyLib,c=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);let c=this,l=c.inputmask,u=l?l.opts:void 0,d;if(l===void 0&&this.nodeName!==`FORM`){let e=s.data(c,`_inputmask_opts`);s(c).off(),e&&new i.default(e).mask(c)}else if(![`submit`,`reset`,`setvalue`].includes(t.type)&&this.nodeName!==`FORM`&&(c.disabled||c.readOnly&&!(t.type===`keydown`&&t.ctrlKey&&t.key===a.keys.c||u.tabThrough===!1&&t.key===a.keys.Tab)))t.preventDefault();else{switch(t.type){case`input`:if(l.skipInputEvent===!0)return l.skipInputEvent=!1,t.preventDefault();l.lastInputEvent={time:Date.now(),data:t.data};break;case`keydown`:if(l.lastInputEvent&&Date.now()-l.lastInputEvent.time<10&&l.lastInputEvent.data===t.key)return!1;break;case`click`:case`focus`:if(l.validationEvent)return l.validationEvent=!1,e.blur(),(0,r.HandleNativePlaceholder)(e,(l.isRTL?o.getBufferTemplate.call(l).slice().reverse():o.getBufferTemplate.call(l)).join(``)),setTimeout(function(){e.focus()},u.validationEventTimeOut),!1;d=arguments,setTimeout(function(){e.inputmask&&n.apply(c,d)},0);return}let i=n.apply(c,arguments);return i===!1&&(t.preventDefault(),t.stopPropagation()),i}};t=`${t}.inputmask`,[`submit.inputmask`,`reset.inputmask`].includes(t)?(c=c.bind(e),e.form!==null&&s(e.form).on(t,c)):s(e).on(t,c)},off:function(e,t){if(e.inputmask){let n=e.inputmask.dependencyLib;n(e).off(t||`.inputmask`)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=m,t.applyInputValue=d,t.checkVal=p,t.clearOptionalTail=f,t.unmaskedvalue=h,t.writeBuffer=g;var r=n(17),i=n(18),a=u(n(7)),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n,r){let i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,r!==!0&&typeof a.onBeforeMask==`function`&&(t=a.onBeforeMask.call(i,t,a)||t),t=(t||``).toString().split(``),p(e,!0,!1,t,n),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===s.getBufferTemplate.call(i).join(``)&&s.getLastValidPosition.call(i)===-1&&e.inputmask._valueSet(``)}function f(e){let t=this;e.length=0;let n=l.getMaskTemplate.call(t,!0,0,!0,void 0,!0),r;for(;(r=n.shift())!==void 0;)e.push(r);return e}function p(e,t,n,r,a){let o=e?e.inputmask:this,u=o.maskset,d=o.opts,f=o.dependencyLib,p=r.slice(),m=``,h=-1,_,v=d.skipOptionalPartCharacter;d.skipOptionalPartCharacter=``;function y(e,t){let n=l.getMaskTemplate.call(o,!0,0).slice(e,s.seekNext.call(o,e,!1,!1)).join(``).replace(/'/g,``),r=n.indexOf(t);for(;r>0&&n[r-1]===` `;)r--;let i=r===0&&!s.isMask.call(o,e)&&(l.getTest.call(o,e).match.nativeDef===t.charAt(0)||l.getTest.call(o,e).match.static===!0&&l.getTest.call(o,e).match.nativeDef===`'`+t.charAt(0)||l.getTest.call(o,e).match.nativeDef===` `&&(l.getTest.call(o,e+1).match.nativeDef===t.charAt(0)||l.getTest.call(o,e+1).match.static===!0&&l.getTest.call(o,e+1).match.nativeDef===`'`+t.charAt(0)));if(!i&&r>0&&!s.isMask.call(o,e,!1,!0)){let t=s.seekNext.call(o,e);o.caretPos.begin<t&&(o.caretPos={begin:t})}return i}s.resetMaskSet.call(o,!1),o.clicked=0,h=d.radixPoint?s.determineNewCaretPosition.call(o,{begin:0,end:0},!1,d.__financeInput===!1?`radixFocus`:void 0).begin:0,u.p=h,o.caretPos={begin:h};let b=[],x=o.caretPos;if(p.forEach(function(e,t){if(e!==void 0){let r=new f.Event(`_checkval`);r.key=e,m+=e;let a=s.getLastValidPosition.call(o,void 0,!0);y(h,m)?_=l.getTest.call(o,t).match.static===!0&&i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a+1):(_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,o.caretPos.begin),_&&(h=o.caretPos.begin+1,m=``)),_?(_.pos!==void 0&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0&&u.validPositions[_.pos].alternation===void 0&&(b.push(_.pos),o.isRTL||(_.forwardPosition=_.pos+1)),g.call(o,void 0,s.getBuffer.call(o),_.forwardPosition,r,!1),o.caretPos={begin:_.forwardPosition,end:_.forwardPosition},x=o.caretPos):u.validPositions[t]===void 0&&p[t]===l.getPlaceholder.call(o,t)&&s.isMask.call(o,t,!0)?o.caretPos.begin++:o.caretPos=x}}),b.length>0){let e,t,r=s.seekNext.call(o,-1,void 0,!1);if(!c.isComplete.call(o,s.getBuffer.call(o))&&b.length<=r||c.isComplete.call(o,s.getBuffer.call(o))&&b.length>0&&b.length!==r&&b[0]===0){let a=r;for(;(e=b.shift())!==void 0;)if(e<a){let r=new f.Event(`_checkval`);if(t=u.validPositions[e],t.generatedInput=!0,r.key=t.input,_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a),_&&_.pos!==void 0&&_.pos!==e&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0)b.push(_.pos);else if(!_)break;a++}}else for(;e=b.pop();)t=u.validPositions[e],t&&u.validPositions[e+1]===void 0&&delete u.validPositions[e]}t&&g.call(o,e,s.getBuffer.call(o),_?_.forwardPosition:o.caretPos.begin,a||new f.Event(`checkval`),a&&(a.type===`input`&&o.undoValue!==s.getBuffer.call(o).join(``)||a.type===`paste`)),d.skipOptionalPartCharacter=v}function m(e,t){let n=e?e.inputmask:this;if(r.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||e.placeholder===``)){let r=s.getBuffer.call(n).slice(),i=e.inputmask._valueGet();if(i!==t){let t=s.getLastValidPosition.call(n);t===-1&&i===s.getBufferTemplate.call(n).join(``)?r=[]:t!==-1&&f.call(n,r),g(e,r)}}}else e.placeholder!==t&&(e.placeholder=t,e.placeholder===``&&e.removeAttribute(`placeholder`))}function h(e){let t=e?e.inputmask:this,n=t.opts,r=t.maskset;if(e){if(e.inputmask===void 0)return e.value;e.inputmask&&e.inputmask.refreshValue&&d(e,e.inputmask._valueGet(!0))}let i=[],o=r.validPositions;for(let e=0,t=o.length;e<t;e++)o[e]&&o[e].match&&(o[e].match.static!=1||n.keepStatic!==!0&&Array.isArray(r.metadata)&&o[e].generatedInput!==!0)&&i.push(o[e].input);let c=i.length===0?``:(t.isRTL?i.reverse():i).join(``);if(typeof n.onUnMask==`function`){let e=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``);c=n.onUnMask.call(t,e,c,n)}return n.outputMask&&c.length>0?a.default.format(c,{...n,mask:n.outputMask,alias:null}):c}function g(e,t,n,r,i){let a=e?e.inputmask:this,l=a.opts,u=a.dependencyLib;if(r&&typeof l.onBeforeWrite==`function`){let e=l.onBeforeWrite.call(a,r,t,n,l);if(e){if(e.refreshFromBuffer){let n=e.refreshFromBuffer;c.refreshFromBuffer.call(a,n===!0?n:n.start,n.end,e.buffer||t),t=s.getBuffer.call(a,!0)}n!==void 0&&(n=e.caret===void 0?n:e.caret)}}if(e!==void 0&&(e.inputmask._valueSet(t.join(``)),n!==void 0&&(r===void 0||r.type!==`blur`)&&s.caret.call(a,e,n,void 0,void 0,r!==void 0&&r.type===`keydown`&&(r.key===o.keys.Delete||r.key===o.keys.Backspace)),e.inputmask.writeBufferHook===void 0||e.inputmask.writeBufferHook(n),i===!0)){let n=u(e),r=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,n.trigger(`input`),setTimeout(function(){r===s.getBufferTemplate.call(a).join(``)?n.trigger(`cleared`):c.isComplete.call(a,t)===!0&&n.trigger(`complete`)},0)}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}let a=r.default.navigator&&r.default.navigator.userAgent||``;t.ie=a.indexOf(`MSIE `)>0||a.indexOf(`Trident/`)>0,t.mobile=!!(navigator.userAgentData?.mobile??((matchMedia(`(pointer:coarse)`).matches||navigator.maxTouchPoints)&&innerWidth<=1024||/Mobi|Android|iPhone/i.test(a))),t.iphone=/iphone/i.test(a)}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var r=n(17),i=u(n(11)),a=n(16),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}let d=t.EventHandlers={keyEvent:function(e,t,n,i,u){let f=this.inputmask,p=f.opts,m=f.dependencyLib,h=f.maskset,g=this,_=m(g),v=e.key,y=s.caret.call(f,g),b=p.onKeyDown.call(this,e,s.getBuffer.call(f),y,p);if(b!==void 0)return b;if(v===o.keys.Backspace||v===o.keys.Delete||r.iphone&&v===o.keys.BACKSPACE_SAFARI||e.ctrlKey&&v===o.keys.x&&!(`oncut`in g))e.preventDefault(),c.handleRemove.call(f,g,v,y),(0,a.writeBuffer)(g,s.getBuffer.call(f,!0),h.p,e,g.inputmask._valueGet()!==s.getBuffer.call(f).join(``));else if(v===o.keys.End||v===o.keys.PageDown){e.preventDefault();let t=s.seekNext.call(f,s.getLastValidPosition.call(f));s.caret.call(f,g,e.shiftKey?y.begin:t,t,!0)}else v===o.keys.Home&&!e.shiftKey||v===o.keys.PageUp?(e.preventDefault(),s.caret.call(f,g,0,e.shiftKey?y.begin:0,!0)):p.undoOnEscape&&v===o.keys.Escape&&e.altKey!==!0?((0,a.checkVal)(g,!0,!1,f.undoValue.split(``)),_.trigger(`click`)):v===o.keys.Insert&&!(e.shiftKey||e.ctrlKey)&&f.userOptions.insertMode===void 0?c.isSelection.call(f,y)?p.insertMode=!p.insertMode:(p.insertMode=!p.insertMode,s.caret.call(f,g,y.begin,y.begin)):p.tabThrough===!0&&v===o.keys.Tab?e.shiftKey===!0?(y.end=s.seekPrevious.call(f,y.end,!0),l.getTest.call(f,y.end-1).match.static===!0&&y.end--,y.begin=s.seekPrevious.call(f,y.end,!0),y.begin>=0&&y.end>0&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):(y.begin=s.seekNext.call(f,y.begin,!0),y.end=s.seekNext.call(f,y.begin,!0),y.end<h.maskLength&&y.end--,y.begin<=h.maskLength&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):e.shiftKey||(p.insertModeVisual&&p.insertMode===!1?v===o.keys.ArrowRight?setTimeout(function(){let e=s.caret.call(f,g);s.caret.call(f,g,e.begin)},0):v===o.keys.ArrowLeft&&setTimeout(function(){let e={begin:s.translatePosition.call(f,g.inputmask.caretPos.begin),end:s.translatePosition.call(f,g.inputmask.caretPos.end)};f.isRTL?s.caret.call(f,g,e.begin+(e.begin===h.maskLength?0:1)):s.caret.call(f,g,e.begin-(e.begin===0?0:1))},0):f.keyEventHook===void 0||f.keyEventHook(e));return f.isComposing=v===o.keys.Process||v===o.keys.Unidentified,f.ignorable=v===void 0||v.length>1,d.keypressEvent.call(f,e,t,n,i,u)},keypressEvent:function(e,t,n,r,i){let l=this.inputmask||this,u=l.opts,d=l.dependencyLib,f=l.maskset,p=l.el,m=d(p),h=e.key;if(t!==!0&&!(e.ctrlKey&&e.altKey&&!l.ignorable)&&(e.ctrlKey||e.metaKey||l.ignorable))h===o.keys.Enter&&l.undoValue!==l._valueGet(!0)&&(l.undoValue=l._valueGet(!0),setTimeout(function(){m.trigger(`change`)},0));else if(h){let o=t?{begin:i,end:i}:s.caret.call(l,p),d;t||(h=u.substitutes[h]||h),f.writeOutBuffer=!0;let m=c.isValid.call(l,o,h,r,void 0,void 0,void 0,t);if(m!==!1&&(s.resetMaskSet.call(l,!0),d=m.caret===void 0?s.seekNext.call(l,m.pos.begin?m.pos.begin:m.pos):m.caret,f.p=d),d=u.numericInput&&m.caret===void 0?s.seekPrevious.call(l,d):d,n!==!1&&(setTimeout(function(){u.onKeyValidation.call(p,h,m)},0),f.writeOutBuffer&&m!==!1)){let n=s.getBuffer.call(l);(0,a.writeBuffer)(p,n,d,e,t!==!0)}if(e.preventDefault(),t)return m!==!1&&(m.forwardPosition=d),m}},pasteEvent:async function(e){function t(t,n,r,i,c){let l=s.caret.call(t,n,void 0,void 0,!0),u=r.substr(0,l.begin),d=r.substr(l.end,r.length);if(u==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(0,l.begin).join(``)&&(u=``),d==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(l.end).join(``)&&(d=``),i=u+i+d,t.isRTL&&o.numericInput!==!0){i=i.split(``);for(let e of s.getBufferTemplate.call(t))i[0]===e&&i.shift();i=i.reverse().join(``)}let f=i;if(typeof c==`function`){if(f=c.call(t,f,o),f===!1)return!1;f||=r}(0,a.checkVal)(n,!0,!1,f.toString().split(``),e)}let n=this,r=this.inputmask,o=r.opts,c=r._valueGet(!0),l;r.skipInputEvent=!0,e.clipboardData&&e.clipboardData.getData?l=e.clipboardData.getData(`text/plain`):i.default.clipboardData&&i.default.clipboardData.getData&&(l=i.default.clipboardData.getData(`Text`)),t(r,n,c,l,o.onBeforePaste),e.preventDefault()},inputFallBackEvent:function(e){let t=this.inputmask,n=t.opts,i=t.dependencyLib;function c(e,r,i){let a=e.substr(0,i.begin).split(``),o=e.substr(i.begin).split(``),c=r.substr(0,i.begin).split(``),u=r.substr(i.begin).split(``),d=a.length>=c.length?a.length:c.length,f=o.length>=u.length?o.length:u.length,p,m,h=``,g=[],_;for(;a.length<d;)a.push(`~`);for(;c.length<d;)c.push(`~`);for(;o.length<f;)o.unshift(`~`);for(;u.length<f;)u.unshift(`~`);let v=a.concat(o),y=c.concat(u);for(m=0,p=v.length;m<p;m++)switch(_=l.getPlaceholder.call(t,s.translatePosition.call(t,m)),h){case`insertText`:y[m-1]===v[m]&&i.begin==v.length-1&&g.push(v[m]),m=p;break;case`insertReplacementText`:v[m]===`~`?i.end++:m=p;break;case`deleteContentBackward`:v[m]===`~`?i.end++:m=p;break;default:v[m]!==y[m]&&((v[m+1]===`~`||v[m+1]===_||v[m+1]===void 0)&&(y[m]===_&&y[m+1]===`~`||y[m]===`~`)||y[m+1]===`~`&&y[m]===v[m+1]?(h=`insertText`,g.push(v[m]),i.begin--,i.end--):v[m]!==_&&v[m]!==`~`&&(v[m+1]===`~`||y[m]!==v[m]&&y[m+1]===v[m+1])?(h=`insertReplacementText`,g.push(v[m]),i.begin--):v[m]===`~`?(h=`deleteContentBackward`,(s.isMask.call(t,s.translatePosition.call(t,m),!0)||y[m]===n.radixPoint)&&i.end++):m=p);break}return{action:h,data:g,caret:i}}let u=this,f=u.inputmask._valueGet(!0),p=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``),m=s.caret.call(t,u,void 0,void 0,!0),h;if(p!==f){if(h=c(f,p,m),u.getRootNode().activeElement!==u&&u.focus(),(0,a.writeBuffer)(u,s.getBuffer.call(t)),s.caret.call(t,u,m.begin,m.end,!0),!r.mobile&&t.skipNextInsert&&e.inputType===`insertText`&&h.action===`insertText`&&t.isComposing)return!1;switch(e.inputType===`insertCompositionText`&&h.action===`insertText`&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,h.action){case`insertText`:case`insertReplacementText`:h.data.forEach(function(e,n){let r=new i.Event(`keypress`);r.key=e,t.ignorable=!1,d.keypressEvent.call(u,r)}),setTimeout(function(){t.$el.trigger(`keyup`)},0);break;case`deleteContentBackward`:var g=new i.Event(`keydown`);g.key=o.keys.Backspace,d.keyEvent.call(u,g);break;default:(0,a.applyInputValue)(u,f,e),s.caret.call(t,u,m.begin,m.end,!0);break}e.preventDefault()}},setValueEvent:function(e){let t=this.inputmask,n=t.dependencyLib,r=this,i=e&&e.detail?e.detail[0]:arguments[1];i===void 0&&(i=r.inputmask._valueGet(!0)),(0,a.applyInputValue)(r,i,new n.Event(`input`),(e&&e.detail?e.detail[0]:arguments[1])!==void 0),(e.detail&&e.detail[1]!==void 0||arguments[2]!==void 0)&&s.caret.call(t,r,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){let t=this.inputmask,n=t.opts,r=this,i=t&&t._valueGet();n.showMaskOnFocus&&i!==s.getBuffer.call(t).join(``)&&(0,a.writeBuffer)(r,s.getBuffer.call(t),s.seekNext.call(t,s.getLastValidPosition.call(t))),n.positionCaretOnTab===!0&&t.mouseEnter===!1&&(!c.isComplete.call(t,s.getBuffer.call(t))||s.getLastValidPosition.call(t)===-1)&&d.clickEvent.apply(r,[e,!0]),t.undoValue=t&&t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){let e=this.inputmask,t=e.opts,n=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&n.getRootNode().activeElement!==n&&(0,a.HandleNativePlaceholder)(n,e.originalPlaceholder)},clickEvent:function(e,t){let n=this.inputmask;n.clicked++;let r=this;if(r.getRootNode().activeElement===r){let e=s.determineNewCaretPosition.call(n,s.caret.call(n,r),t);e!==void 0&&s.caret.call(n,r,e)}},cutEvent:function(e){let t=this.inputmask,n=t.maskset,r=this,l=s.caret.call(t,r),u=t.isRTL?s.getBuffer.call(t).slice(l.end,l.begin):s.getBuffer.call(t).slice(l.begin,l.end),d=t.isRTL?u.reverse().join(``):u.join(``);i.default.navigator&&i.default.navigator.clipboard?i.default.navigator.clipboard.writeText(d):i.default.clipboardData&&i.default.clipboardData.getData&&i.default.clipboardData.setData(`Text`,d),c.handleRemove.call(t,r,o.keys.Delete,l),(0,a.writeBuffer)(r,s.getBuffer.call(t),n.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){let t=this.inputmask,n=t.opts,r=t.dependencyLib;t.clicked=0;let i=r(this),o=this;if(o.inputmask){(0,a.HandleNativePlaceholder)(o,t.originalPlaceholder);let r=o.inputmask._valueGet(),l=s.getBuffer.call(t).slice();if(r!==``&&(n.clearMaskOnLostFocus&&(s.getLastValidPosition.call(t)===-1&&r===s.getBufferTemplate.call(t).join(``)?l=[]:a.clearOptionalTail.call(t,l)),c.isComplete.call(t,l)===!1&&(setTimeout(function(){i.trigger(`incomplete`)},0),n.clearIncomplete&&(s.resetMaskSet.call(t,!1),l=n.clearMaskOnLostFocus?[]:s.getBufferTemplate.call(t).slice())),(0,a.writeBuffer)(o,l,void 0,e)),r=t._valueGet(!0),t.undoValue!==r){let e=(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).join(``);(r!==``||t.undoValue!==e||t.undoValue===e&&t.maskset.validPositions.length>0)&&(t.undoValue=r,i.trigger(`change`))}}},mouseenterEvent:function(){let e=this.inputmask,{showMaskOnHover:t}=e.opts,n=this;if(e.mouseEnter=!0,n.getRootNode().activeElement!==n){let r=(e.isRTL?s.getBufferTemplate.call(e).slice().reverse():s.getBufferTemplate.call(e)).join(``);t&&(0,a.HandleNativePlaceholder)(n,r)}},submitEvent:function(){let e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger(`change`),s.getLastValidPosition.call(e)===-1&&e._valueGet&&e._valueGet()===s.getBufferTemplate.call(e).join(``)&&e._valueSet(``),t.clearIncomplete&&c.isComplete.call(e,s.getBuffer.call(e))===!1&&e._valueSet(``),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout(function(){(0,a.writeBuffer)(e.el,s.getBuffer.call(e))},0))},resetEvent:function(){let e=this.inputmask;e.refreshValue=!0,setTimeout(function(){(0,a.applyInputValue)(e.el,e._valueGet(!0))},0)}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=void 0,t.toKey=i,t.toKeyCode=a;let n=t.keyCode={c:67,x:88,z:90,BACKSPACE_SAFARI:127,Enter:13,Meta_LEFT:91,Meta_RIGHT:92,Space:32,Alt:18,AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,CapsLock:20,Control:17,ContextMenu:93,Dead:221,Delete:46,End:35,Escape:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Home:36,Insert:45,NumLock:144,PageDown:34,PageUp:33,Pause:19,PrintScreen:44,Process:229,Shift:16,ScrollLock:145,Tab:9,Unidentified:229},r=Object.entries(n).reduce((e,[t,n])=>(e[n]=e[n]===void 0?t:e[n],e),{});t.keys=Object.entries(n).reduce((e,[t,n])=>(e[t]=t===`Space`?` `:t,e),{});function i(e,t){return r[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase())}function a(e){return n[e]}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=s,t.determineLastRequiredPosition=c,t.determineNewCaretPosition=l,t.getBuffer=u,t.getBufferTemplate=d,t.getLastValidPosition=f,t.isMask=p,t.resetMaskSet=m,t.seekNext=h,t.seekPrevious=g,t.translatePosition=_;var r=o(n(11)),i=n(21),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a){let o=this,s=this.opts,c;if(t!==void 0){if(Array.isArray(t)&&(n=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),t.begin!==void 0&&(n=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),typeof t==`number`){t=i?t:_.call(o,t),n=i?n:_.call(o,n),n=typeof n==`number`?n:t;let l=parseInt(((e.ownerDocument.defaultView||r.default).getComputedStyle?(e.ownerDocument.defaultView||r.default).getComputedStyle(e,null):e.currentStyle).fontSize)*n;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:n},s.insertModeVisual&&s.insertMode===!1&&t===n&&(a||n++),e===e.getRootNode().activeElement){if(`setSelectionRange`in e)e.setSelectionRange(t,n);else if(r.default.getSelection){if(c=document.createRange(),e.firstChild===void 0||e.firstChild===null){let t=document.createTextNode(``);e.appendChild(t)}c.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),c.setEnd(e.firstChild,n<e.inputmask._valueGet().length?n:e.inputmask._valueGet().length),c.collapse(!0);let i=r.default.getSelection();i.removeAllRanges(),i.addRange(c)}else e.createTextRange&&(c=e.createTextRange(),c.collapse(!0),c.moveEnd(`character`,n),c.moveStart(`character`,t),c.select());e.inputmask.caretHook===void 0||e.inputmask.caretHook.call(o,{begin:t,end:n})}}}else return`selectionStart`in e&&`selectionEnd`in e?(t=e.selectionStart,n=e.selectionEnd):r.default.getSelection?(c=r.default.getSelection().getRangeAt(0),(c.commonAncestorContainer.parentNode===e||c.commonAncestorContainer===e)&&(t=c.startOffset,n=c.endOffset)):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),t=0-c.duplicate().moveStart(`character`,-e.inputmask._valueGet().length),n=t+c.text.length),{begin:i?t:_.call(o,t),end:i?n:_.call(o,n)}}function c(e){let t=this,{maskset:n,dependencyLib:r}=t,o=f.call(t),s={},c=n.validPositions[o],l=a.getMaskTemplate.call(t,!0,f.call(t),!0,!0),u=l.length,d,p=c===void 0?void 0:c.locator.slice(),m;for(d=o+1;d<l.length;d++)m=a.getTestTemplate.call(t,d,p,d-1),p=m.locator.slice(),s[d]=r.extend(!0,{},m);let h=c&&c.alternation!==void 0?c.locator[c.alternation]:void 0;for(d=u-1;d>o&&(m=s[d],(m.match.optionality||m.match.optionalQuantifier&&m.match.newBlockMarker||h&&(h!==s[d].locator[c.alternation]&&m.match.static!==!0||m.match.static===!0&&m.locator[c.alternation]&&i.checkAlternationMatch.call(t,m.locator[c.alternation].toString().split(`,`),h.toString().split(`,`))&&a.getTests.call(t,d)[0].def!==``))&&l[d]===a.getPlaceholder.call(t,d,m.match));d--)if(u--,m.match.optionality){let e=d;for(;e>0;){let n=a.getTest.call(t,e);if(n.match.newBlockMarker===`master`||n.match.newBlockMarker===!0)break;e--}if(n.validPositions[e]!==void 0)break}return d===o&&(u=d),e?{l:u,def:s[u]?s[u].match:void 0}:u}function l(e,t,n){let r=this,{maskset:i,opts:o}=r,s,c,l;function d(e){if(o.radixPoint!==``&&o.digits!==0){let t=i.validPositions;if(t[e]===void 0||t[e].input===void 0){if(e<h.call(r,-1))return!0;let n=u.call(r).indexOf(o.radixPoint);if(n!==-1){for(let e in t){let i=Number(e);if(n<i&&t[e].input!==a.getPlaceholder.call(r,i))return!1}return!0}}}return!1}if(t&&(r.isRTL?e.end=e.begin:e.begin=e.end),e.begin===e.end){switch(n||=o.positionCaretOnClick,n){case`none`:break;case`select`:e={begin:0,end:u.call(r).length};break;case`ignore`:e.end=e.begin=h.call(r,f.call(r));break;case`radixFocus`:if(r.clicked>1&&i.validPositions.length===0)break;if(d(e.begin)){let t=u.call(r).join(``).indexOf(o.radixPoint);e.end=e.begin=o.numericInput?h.call(r,t):t;break}default:if(s=e.begin,c=f.call(r,s,!0),l=h.call(r,c===-1&&!p.call(r,0)?-1:c),s<=l)e.end=e.begin=p.call(r,s,!1,!0)?s:h.call(r,s);else{let t=i.validPositions[c],n=a.getTestTemplate.call(r,l,t?t.match.locator:void 0,t),d=a.getPlaceholder.call(r,l,n.match);if(d!==``&&u.call(r)[l]!==d&&n.match.optionalQuantifier!==!0&&n.match.newBlockMarker!==!0||!p.call(r,l,o.keepStatic,!0)&&n.match.def===d){let e=h.call(r,l);(s>=e||s===l)&&(l=e)}e.end=e.begin=l}}return e}}function u(e){let t=this,{maskset:n}=t;return(n.buffer===void 0||e===!0)&&(n.buffer=a.getMaskTemplate.call(t,!0,f.call(t),!0),n._buffer===void 0&&(n._buffer=n.buffer.slice())),n.buffer}function d(){let e=this,t=this.maskset;return t._buffer===void 0&&(t._buffer=a.getMaskTemplate.call(e,!1,1),t.buffer===void 0&&(t.buffer=t._buffer.slice())),t._buffer}function f(e,t,n){let r=this.maskset,i=-1,a=-1,o=n||r.validPositions;e===void 0&&(e=-1);for(let n=0,r=o.length;n<r;n++)o[n]&&(t||o[n].generatedInput!==!0)&&(n<=e&&(i=n),n>=e&&(a=n));return i===-1||i===e?a:a===-1||e-i<a-e?i:a}function p(e,t,n){let r=this,i=this.maskset,o=a.getTestTemplate.call(r,e).match;if(o.def===``&&(o=a.getTest.call(r,e).match),o.static!==!0)return o.fn;if(n===!0&&i.validPositions[e]!==void 0&&i.validPositions[e].generatedInput!==!0)return!0;if(t!==!0&&e>-1){if(n){let t=a.getTests.call(r,e);return t.length>1+ +(t[t.length-1].match.def===``)}let t=a.determineTestTemplate.call(r,e,a.getTests.call(r,e)),i=a.getPlaceholder.call(r,e,t.match);return t.match.def!==i}return!1}function m(e){let t=this.maskset;t.buffer=void 0,e!==!0&&(t.validPositions=[],t.p=0),e===!1&&(t.tests={},t.jitOffset={})}function h(e,t,n){let r=this;n===void 0&&(n=!0);let i=e+1;for(;a.getTest.call(r,i).match.def!==``&&(t===!0&&(a.getTest.call(r,i).match.newBlockMarker!==!0||!p.call(r,i,void 0,!0))||t!==!0&&!p.call(r,i,void 0,n));)i++;return i}function g(e,t){let n=this,r=e-1;if(e<=0)return 0;for(;r>0&&(t===!0&&(a.getTest.call(n,r).match.newBlockMarker!==!0||!p.call(n,r,void 0,!0))||t!==!0&&!p.call(n,r,void 0,!0));)r--;return r}function _(e){let t=this,n=this.opts,r=this.el;return t.isRTL&&typeof e==`number`&&(!n.greedy||n.placeholder!==``)&&r&&(e=t._valueGet().length-e,e<0&&(e=0)),e}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.casing=c,t.checkAlternationMatch=l,t.handleRemove=u,t.isComplete=d,t.isSelection=f,t.isValid=p,t.refreshFromBuffer=h,t.revalidateMask=_;var r=n(18),i=n(19),a=n(20),o=n(22);function s(e,t,n,r,i,c){let l=this,u=this.dependencyLib,d=this.opts,f=l.maskset;if(!l.hasAlternator)return!1;let m=u.extend(!0,[],f.validPositions),h=u.extend(!0,{},f.tests),g,_,v=!1,y=!1,b,x,S,C,w,ee=i===void 0?a.getLastValidPosition.call(l):i,T,te,ne,re;if(c&&(ne=c.begin,re=c.end,c.begin>c.end&&(ne=c.end,re=c.begin)),ee===-1&&i===void 0)g=0,x=o.getTest.call(l,g),_=x.alternation;else for(;ee>=0;ee--)if(b=ee===0?o.getTest.call(l,0):f.validPositions[ee],b&&b.alternation!==void 0){if(ee<=(e||0)&&x&&x.locator[b.alternation]!==b.locator[b.alternation])break;g=ee,_=b.alternation,x=b}if(_!==void 0){w=parseInt(g),f.excludes[w]=f.excludes[w]||[],e!==!0&&f.excludes[w].push((0,o.getDecisionTaker)(x)+`:`+x.alternation);let i=[],_=-1;for(S=w;w<a.getLastValidPosition.call(l,void 0,!0)+1;S++)_===-1&&e<=S&&t!==void 0&&(i.push(t),_=i.length-1),C=f.validPositions[w],C&&C.generatedInput!==!0&&(w!==0||C.input!==d.skipOptionalPartCharacter)&&(c===void 0||S<ne||S>=re)&&i.push(C.input),f.validPositions.splice(w,1);for(_===-1&&t!==void 0&&(i.push(t),_=i.length-1);f.excludes[w]!==void 0&&f.excludes[w].length<10;){f.tests={},a.resetMaskSet.call(l,!0),v=!0,T=w-1;let g=o.getMaskTemplate.call(l,!0,0);for(S=0;S<i.length&&(te=i[S],g[T+1]===te&&d.numericInput!==!0?T++:T=S===0||y.caretPos!==void 0||d.insertMode===!1?a.seekNext.call(l,T):a.getLastValidPosition.call(l,T,!0)+1,v=p.call(l,T,te,!1,r,!0));S++)S===_&&(y=v),e===!0&&v&&(y={caretPos:S});if(v)break;if(a.resetMaskSet.call(l),x=o.getTest.call(l,w),f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h),y=!1,f.excludes[w])if(x.alternation!=null){let i=(0,o.getDecisionTaker)(x);if(f.excludes[w].indexOf(i+`:`+x.alternation)!==-1){y=s.call(l,e,t,n,r,w-1,c);break}for(f.excludes[w].push(i+`:`+x.alternation),S=w;S<a.getLastValidPosition.call(l,void 0,!0)+1;S++)f.validPositions.splice(w)}else delete f.excludes[w];else{y=s.call(l,e,t,n,r,w-1,c);break}}}return(!y||d.keepStatic!==!1)&&delete f.excludes[w],y||(f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h)),y}function c(e,t,n){let r=this.opts,a=this.maskset;switch(r.casing||t.casing){case`upper`:e=e.toLocaleUpperCase();break;case`lower`:e=e.toLocaleLowerCase();break;case`title`:var o=a.validPositions[n-1];e=n===0||o&&o.input===String.fromCharCode(i.keyCode.Space)?e.toLocaleUpperCase():e.toLocaleLowerCase();break;case`follow`:t.def&&t.def!==t.def.toLocaleLowerCase()?e=e.toLocaleUpperCase():t.def&&t.def!==t.def.toLocaleUpperCase()&&(e=e.toLocaleLowerCase());break;default:if(typeof r.casing==`function`){let t=Array.prototype.slice.call(arguments);t.push(a.validPositions),e=r.casing.apply(this,t)}}return e}function l(e,t,n){let r=this.opts.greedy?t:t.slice(0,1),i=!1,a=n===void 0?[]:n.split(`,`),o;for(let t=0;t<a.length;t++)(o=e.indexOf(a[t]))!==-1&&e.splice(o,1);for(let t=0;t<e.length;t++)if(r.includes(e[t])){i=!0;break}return i}function u(e,t,n,r,c){let l=this,u=this.maskset,d=this.opts;if((d.numericInput||l.isRTL)&&(t===i.keys.Backspace?t=i.keys.Delete:t===i.keys.Delete&&(t=i.keys.Backspace),l.isRTL)){let e=n.end;n.end=n.begin,n.begin=e}let f=a.getLastValidPosition.call(l,void 0,!0);n.end>=a.getBuffer.call(l).length&&f>=n.end&&(n.end=f+1),t===i.keys.Backspace?n.end-n.begin<1&&(n.begin=a.seekPrevious.call(l,n.begin)):t===i.keys.Delete&&n.begin===n.end&&(n.end=a.isMask.call(l,n.end,!0,!0)?n.end+1:a.seekNext.call(l,n.end)+1);let p;(p=_.call(l,n))!==!1&&((r!==!0&&d.keepStatic!==!1||d.regex!==null&&o.getTest.call(l,n.begin).match.def.indexOf(`|`)!==-1)&&s.call(l,!0),r!==!0&&(u.p=t===i.keys.Delete?n.begin+p:n.begin,u.p=a.determineNewCaretPosition.call(l,{begin:u.p,end:u.p},!1,d.insertMode===!1&&t===i.keys.Backspace?`none`:void 0).begin))}function d(e){let t=this,n=this.opts,r=this.maskset;if(typeof n.isComplete==`function`)return n.isComplete(e,n);if(n.repeat===`*`)return;let i=!1,s=a.determineLastRequiredPosition.call(t,!0),c=s.l;if(s.def===void 0||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){i=!0;for(let n=0;n<=c;n++){let a=o.getTestTemplate.call(t,n).match;if(a.static!==!0&&r.validPositions[n]===void 0&&(a.optionality===!1||a.optionality===void 0||a.optionality&&a.newBlockMarker==0)&&(a.optionalQuantifier===!1||a.optionalQuantifier===void 0)||a.static===!0&&a.def!=``&&e[n]!==o.getPlaceholder.call(t,n,a)){i=!1;break}}}return i}function f(e){let t=this,n=+!this.opts.insertMode;return t.isRTL?e.begin-e.end>n:e.end-e.begin>n}function p(e,t,n,r,i,l,u){let d=this,m=this.dependencyLib,v=this.opts,y=d.maskset;n=n===!0;let b=e;e.begin!==void 0&&(b=d.isRTL?e.end:e.begin);function x(e){if(e!==void 0){if(e.remove!==void 0&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort(function(e,t){return d.isRTL?e.pos-t.pos:t.pos-e.pos}).forEach(function(e){_.call(d,{begin:e,end:e+1})}),e.remove=void 0),e.insert!==void 0&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort(function(e,t){return d.isRTL?t.pos-e.pos:e.pos-t.pos}).forEach(function(e){e.c!==``&&p.call(d,e.pos,e.c,e.strict===void 0||e.strict,e.fromIsValid===void 0?r:e.fromIsValid)}),e.insert=void 0),e.refreshFromBuffer&&e.buffer){let t=e.refreshFromBuffer;h.call(d,t===!0?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}e.rewritePosition!==void 0&&(b=e.rewritePosition,e=!0)}return e}function S(t,n,i){let s=!1;return o.getTests.call(d,t).every(function(l,u){let p=l.match;if(a.getBuffer.call(d,!0),s=p.jit&&y.validPositions[a.seekPrevious.call(d,t)]===void 0?!1:p.fn==null?(n===p.def||n===v.skipOptionalPartCharacter)&&p.def!==``&&{c:o.getPlaceholder.call(d,t,p,!0)||p.def,pos:t}:p.fn.test(n,y,t,i,v,f.call(d,e)),s!==!1){let i=s.c===void 0?n:s.c,a=t;return i=i===v.skipOptionalPartCharacter&&p.static===!0?o.getPlaceholder.call(d,t,p,!0)||p.def:i,s=x(s),s!==!0&&s.pos!==void 0&&s.pos!==t&&(a=s.pos),s!==!0&&s.pos===void 0&&s.c===void 0||_.call(d,e,m.extend({},l,{input:c.call(d,i,p,a)}),r,a)===!1&&(s=!1),!1}return!0}),s}let C=!0,w=m.extend(!0,[],y.validPositions);if(v.keepStatic===!1&&y.excludes[b]!==void 0&&i!==!0&&r!==!0)for(let t=b;t<(d.isRTL?e.begin:e.end);t++)y.excludes[t]!==void 0&&(y.excludes[t]=void 0,delete y.tests[t]);if(typeof v.preValidation==`function`&&r!==!0&&l!==!0&&(C=v.preValidation.call(d,a.getBuffer.call(d),b,t,f.call(d,e),v,y,e,n||i),C=x(C)),C===!0){if(C=S(b,t,n),(!n||r===!0)&&C===!1&&l!==!0){let r=y.validPositions[b];if(r&&r.match.static===!0&&(r.match.def===t||t===v.skipOptionalPartCharacter))C={caret:a.seekNext.call(d,b)};else if(v.insertMode||y.validPositions[a.seekNext.call(d,b)]===void 0||e.end>b){let r=!1;if(y.jitOffset[b]&&y.validPositions[a.seekNext.call(d,b)]===void 0&&(C=p.call(d,b+y.jitOffset[b],t,!0,!0),C!==!1&&(i!==!0&&(C.caret=b),r=!0)),e.end>b&&(y.validPositions[b]=void 0),!r&&!a.isMask.call(d,b,v.keepStatic&&b===0)){for(let e=b+1,r=a.seekNext.call(d,b,!1,b!==0);e<=r;e++)if(C=S(e,t,n),C!==!1){C=g.call(d,b,C.pos===void 0?e:C.pos)||C,b=e;break}}}}if(d.hasAlternator&&i!==!0&&!n&&(i=!0,C===!1?(v.keepStatic===!0||isFinite(parseInt(v.keepStatic))&&b>=v.keepStatic)&&(C=s.call(d,b,t,n,r,void 0,e)):C===!0&&(f.call(d,e)&&y.tests[b]&&y.tests[b].length>1&&v.keepStatic||v.numericInput!==!0&&y.tests[b]&&y.tests[b].length>1&&a.getLastValidPosition.call(d,void 0,!0)>b)&&(C=s.call(d,!0)||C)),C===!0&&(C={pos:b}),typeof v.postValidation==`function`&&r!==!0&&l!==!0){let r=v.postValidation.call(d,a.getBuffer.call(d,!0),e.begin===void 0?e:d.isRTL?e.end:e.begin,t,C,v,y,n,u,i);r!==void 0&&(C=r===!0?C:r)}}C&&C.pos===void 0&&(C.pos=b),C===!1||l===!0?(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w)):g.call(d,void 0,b,!0);let ee=x(C);return d.maxLength!==void 0&&a.getBuffer.call(d).length>d.maxLength&&!r&&(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w),ee=!1),ee}function m(e,t,n){let r=this,i=this.maskset,a=!1,s=o.getTests.call(r,e);for(let r=0;r<s.length;r++)if(s[r].match&&(s[r].match.nativeDef===t.match[n.shiftPositions?`def`:`nativeDef`]&&(!n.shiftPositions||!t.match.static)||s[r].match.nativeDef===t.match.nativeDef||n.regex&&!s[r].match.static&&s[r].match.fn.test(t.input,i,e,!1,n))){a=!0;break}else if(s[r].match&&s[r].match.def===t.match.nativeDef){a=void 0;break}return a===!1&&i.jitOffset[e]!==void 0&&(a=m.call(r,e+i.jitOffset[e],t,n)),a}function h(e,t,n){let i=this,o=this.maskset,s=this.opts,c=this.dependencyLib,l,u,d=s.skipOptionalPartCharacter,f=i.isRTL?n.slice().reverse():n;if(s.skipOptionalPartCharacter=``,e===!0)a.resetMaskSet.call(i,!1),e=0,t=n.length,u=a.determineNewCaretPosition.call(i,{begin:0,end:0},!1).begin;else{for(l=e;l<t;l++)delete o.validPositions[l];u=e}let p=new c.Event(`keypress`);for(l=e;l<t;l++){p.key=f[l].toString(),i.ignorable=!1;let e=r.EventHandlers.keypressEvent.call(i,p,!0,!1,!1,u);e!==!1&&e!==void 0&&(u=e.forwardPosition)}s.skipOptionalPartCharacter=d}function g(e,t,n){let r=this,i=this.maskset,s=this.dependencyLib;if(e===void 0)for(e=t-1;e>0&&!i.validPositions[e];e--);for(let u=e;u<t;u++)if(i.validPositions[u]===void 0&&!a.isMask.call(r,u,!1)&&(u==0?o.getTest.call(r,u):i.validPositions[u-1])){let e=o.getTests.call(r,u).slice();e[e.length-1].match.def===``&&e.pop();var c=o.determineTestTemplate.call(r,u,e),l;if(c&&(c.match.jit!==!0||c.match.newBlockMarker===`master`&&(l=i.validPositions[u+1])&&l.match.optionalQuantifier===!0)&&(c=s.extend({},c,{input:o.getPlaceholder.call(r,u,c.match,!0)||c.match.def}),c.generatedInput=!0,_.call(r,u,c,!0),n!==!0)){let e=i.validPositions[t].input;return i.validPositions[t]=void 0,p.call(r,t,e,!0,!0)}}}function _(e,t,n,r){let i=this,s=this.maskset,c=this.opts,l=this.dependencyLib;function u(e,t,n){let r=t[e];if(r!==void 0&&r.match.static===!0&&r.match.optionality!==!0&&(t[0]===void 0||t[0].alternation===void 0)){let r=n.begin<=e-1?t[e-1]&&t[e-1].match.static===!0&&t[e-1]:t[e-1],i=n.end>e+1?t[e+1]&&t[e+1].match.static===!0&&t[e+1]:t[e+1];return r&&i}return!1}let d=0,h=e.begin===void 0?e:e.begin,g=e.end===void 0?e:e.end,_=!0;if(e.begin>e.end&&(h=e.end,g=e.begin),r=r===void 0?h:r,n===void 0&&(h!==g||c.insertMode&&s.validPositions[r]!==void 0||t===void 0||t.match.optionalQuantifier||t.match.optionality)){let n=l.extend(!0,[],s.validPositions),v=a.getLastValidPosition.call(i,void 0,!0),y;s.p=h;let b=f.call(i,e)?h:r;for(y=v;y>=b;y--)s.validPositions.splice(y,1),t===void 0&&delete s.tests[y+1];let x=r,S=x,C,w,ee;for(t&&(s.validPositions[r]=l.extend(!0,{},t),S++,x++),n[g]==null&&s.jitOffset[g]&&(g+=s.jitOffset[g]+ +!!t),y=t?g:g-1;y<=v;y++){if((C=n[y])!==void 0&&(c.shiftPositions!==!0||C.generatedInput!==!0)&&(y>=g||y>=h&&u(y,n,{begin:h,end:g}))){for(;ee=o.getTest.call(i,S),ee.match.def!==``;){if((w=m.call(i,S,C,c))!==!1||C.match.def===`+`){C.match.def===`+`&&a.getBuffer.call(i,!0);let e=p.call(i,S,C.input,C.match.def!==`+`,!0);if(_=e!==!1,x=(e.pos||S)+1,!_&&w)break}else _=!1;if(_){t===void 0&&C.match.static&&y===e.begin&&d++;break}if(!_&&a.getBuffer.call(i),S>s.maskLength)break;S++}o.getTest.call(i,S).match.def==``&&(_=!1),S=x}if(!_)break}if(!_)return s.validPositions=l.extend(!0,[],n),a.resetMaskSet.call(i,!0),!1}else t&&o.getTest.call(i,r).match.cd===t.match.cd&&(s.validPositions[r]=l.extend(!0,{},t));return a.resetMaskSet.call(i,!0),d}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=f,t.getDecisionTaker=c,t.getMaskTemplate=u,t.getPlaceholder=l,t.getTest=m,t.getTestTemplate=d,t.getTests=g,t.isSubsetOf=h;var r=o(n(7)),i=n(20),a=n(21);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){let n=(e.alternation==null?e.locator:e.mloc[`${c(e)}:${e.alternation}`]||e.locator).join(``);if(n!==``)for(n=n.split(`:`)[0];n.length<t;)n+=`0`;return n}function c(e){let t=e.locator[e.alternation];return typeof t==`string`&&t.length>0&&(t=t.split(`,`).sort((e,t)=>e-t)[0]),t===void 0?``:t.toString()}function l(e,t,n){let r=this,o=this.opts,s=this.maskset;if(t||=m.call(r,e).match,t.placeholder!==void 0||n===!0)if(t.placeholder!==``&&t.static===!0&&t.generated!==!0){let s=i.getLastValidPosition.call(r,e),c=i.seekNext.call(r,s);return(n?e<=c:e<c)?a.casing.call(r,o.staticDefinitionSymbol&&t.static?t.nativeDef:t.def,t,e):typeof t.placeholder==`function`?t.placeholder(o):t.placeholder}else return typeof t.placeholder==`function`?t.placeholder(o):t.placeholder;else if(t.static===!0){if(e>-1&&s.validPositions[e]===void 0){let t=g.call(r,e),n=[],i;if(typeof o.placeholder==`string`&&t.length>1+ +(t[t.length-1].match.def===``)){for(let r=0;r<t.length;r++)if(t[r].match.def!==``&&t[r].match.optionality!==!0&&t[r].match.optionalQuantifier!==!0&&(t[r].match.static===!0||i===void 0||t[r].match.fn.test(i.match.def,s,e,!0,o)!==!1)&&(n.push(t[r]),t[r].match.static===!0&&(i=t[r]),n.length>1&&/[0-9a-zA-Z]/.test(n[0].match.def)))return o.placeholder.charAt(e%o.placeholder.length)}}return t.def}return typeof o.placeholder==`object`?t.def:o.placeholder.charAt(e%o.placeholder.length)}function u(e,t,n,r,i){let a=this,o=this.opts,s=this.maskset,c=o.greedy,u=[];i&&o.greedy&&(o.greedy=!1,a.maskset.tests={}),t||=0;let p,m=0,h,_,v;do{if(e===!0&&s.validPositions[m])_=i&&s.validPositions[m].match.optionality&&s.validPositions[m+1]===void 0&&(s.validPositions[m].generatedInput===!0||s.validPositions[m].input==o.skipOptionalPartCharacter&&m>0)?f.call(a,m,g.call(a,m,p,m-1)):s.validPositions[m],h=_.match,p=_.locator.slice(),u.push(n===!0?_.input:n===!1?h.nativeDef:l.call(a,m,h));else{_=d.call(a,m,p,m-1),h=_.match,p=_.locator.slice();let e=r===!0?!1:o.jitMasking===!1?h.jit:o.jitMasking;v=(v||s.validPositions[m-1])&&h.static&&h.def!==o.groupSeparator&&h.fn===null,v||e===!1||e===void 0||typeof e==`number`&&isFinite(e)&&e>m?u.push(n===!1?h.nativeDef:l.call(a,u.length,h)):v=!1}m++}while(h.static!==!0||h.def!==``||t>m);return u[u.length-1]===``&&u.pop(),(n!==!1||s.maskLength===void 0)&&(s.maskLength=m-1),o.greedy=c,u}function d(e,t,n){let r=this;return this.maskset.validPositions[e]||f.call(r,e,g.call(r,e,t&&t.slice(),n))}function f(e,t){let n=this,r=n.opts,i=p(e,t);e=e>0?e-1:0;let a=Math.max(...t.map(e=>e.locator===void 0?0:e.locator.length)),o=s(m.call(n,e),a),c=0,l,u,d;r.greedy&&t.length>1&&t[t.length-1].match.def===``&&(c=1);for(let e=0;e<t.length-c;e++){let n=t[e];l=s(n,a);let c=Number(l)-Number(o);(n.unMatchedAlternationStopped!==!0||t.filter(e=>e.unMatchedAlternationStopped!==!0).length<=1)&&(u===void 0||l!==``&&c<u||d&&!r.greedy&&d.match.optionality&&d.match.optionality-i>0&&d.match.newBlockMarker===`master`&&(!n.match.optionality||n.match.optionality-i<1||!n.match.newBlockMarker)||d&&!r.greedy&&d.match.optionalQuantifier&&!n.match.optionalQuantifier)&&(u=c,d=n)}return d}function p(e,t){let n=0,r=!1;return t.forEach(e=>{e.match.optionality&&(n!==0&&n!==e.match.optionality&&(r=!0),(n===0||n>e.match.optionality)&&(n=e.match.optionality))}),n&&(e==0||t.length==1?n=0:r||(n=0)),n}function m(e,t){let n=this,r=this.maskset;return r.validPositions[e]?r.validPositions[e]:(t||g.call(n,e))[0]}function h(e,t,n){function r(e){let t=[],n=-1,r;for(let i=0,a=e.length;i<a;i++)if(e.charAt(i)===`-`)for(r=e.charCodeAt(i+1);++n<r;)t.push(String.fromCharCode(n));else n=e.charCodeAt(i),t.push(e.charAt(i));return t.join(``)}return e.match.def===t.match.nativeDef?!0:(n.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)&&e.match.static!==!0&&t.match.static!==!0?t.match.fn.source===`.`||r(t.match.fn.source.replace(/[[\]/]/g,``)).indexOf(r(e.match.fn.source.replace(/[[\]/]/g,``)))!==-1:!1}function g(e,t,n){let i=this,a=this.dependencyLib,o=this.maskset,s=this.opts,c=this.el,l=o.maskToken,u=t?n:0,d=t?t.slice():[0],p=[],m=!1,g=!1,_,v=t?t.join(``):``,y=!1;function b(t,n,a,l){function d(a,l,f){function C(e,t){let n=t.matches.indexOf(e)===0;return n||t.matches.every(function(r,i){return r.isQuantifier===!0?n=C(e,t.matches[i-1]):Object.prototype.hasOwnProperty.call(r,`matches`)&&(n=C(e,r)),n?(t.matches[i+1]&&t.matches[i+1].isQuantifier&&(n=i===0),!1):!0}),n}function w(e,t,n){let r,i,a,s,c=`${t}:${n}`;if((o.tests[e]||o.validPositions[e])&&(o.validPositions[e]?[o.validPositions[e]]:o.tests[e]).every(function(e,o){return e.mloc[c]?(r=e,!1):(Object.values(e.mloc).filter(e=>e[n]==t).every(t=>{let n=t.join(``).split(`:`)[0];for(a||=n;n.length<a.length;)n+=`0`;let o=Number(n);return(r===void 0||o<i)&&(i=o,r=e,s=Object.entries(e.mloc).find(e=>e[1].toString()===t.toString())[0]),!0}),!0)}),r){n===void 0&&(c=`${t}:${r.alternation}`);let e=`${r.locator[r.alternation]}:${r.alternation}`,i=r.mloc[s||c]||r.mloc[e]||r.locator;i[i.length-1].toString().indexOf(`:`)!==-1&&i.pop();let a=parseInt(r.alternation)+1;return i.slice(a)}else return n===void 0?void 0:w(e,t)}function ee(t,n){return t.match.static===!0&&n.match.static!==!0&&n.match.fn.test(t.match.def,o,e,!1,s,!1)}function T(e,t){function n(n){e.mloc=e.mloc||{};let r=e.locator[n];if(r===void 0)e.alternation=void 0;else{if(t===void 0)typeof r==`string`&&(r=r.split(`,`)[0]),r=`${r}:${n}`,e.mloc[r]===void 0&&(e.mloc[r]=e.locator.slice(),e.mloc[r].push(`:${n}`));else{let n=0;for(let r in t.mloc)if(e.mloc[r]===void 0)e.mloc[r]=t.mloc[r];else do if(e.mloc[r+n]===void 0){e.mloc[r+n]=t.mloc[r];break}while(e.mloc[r+n++]!==void 0);e.locator=S(u,[e,t])}return e.alternation>n&&(e.alternation=n),!0}return!1}let r=e.alternation,i=t===void 0||r<=t.alternation&&e.locator[r].toString().indexOf(t.locator[r])===-1;if(!i&&r>t.alternation){for(let n=0;n<r;n++)if(e.locator[n]!==t.locator[n]){r=n,i=!0;break}}return i?n(r):!1}function te(){if(a=d(t.matches[t.matches.indexOf(a)+1],l,f),a)return!0}function ne(){let t=a,r=p.length;if(a=b(a,n,l,f),p.length>0)if(p.forEach(function(e,t){t>=r&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)}),_=p[p.length-1].match,f===void 0&&C(_,t))m=!0,u=e;else return a}function re(){function r(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];r.isQuantifier&&!isNaN(r.quantifier.max)?t+=r.quantifier.max:t++}return t}function _(e){let t=e.matches[0].matches?r(e.matches[0].matches):1,n;for(let i=0;i<e.matches.length&&(n=e.matches[i].matches?r(e.matches[i].matches):1,t===n);i++);return t!==n}i.hasAlternator=!0;let v=a,b=[],x=p.slice(),S=l.length,C=n.length>0?n.shift():-1,te;if(C===-1||typeof C==`string`){let t=u,r=n.slice(),i=[],ne;if(typeof C==`string`)i=C.split(`,`);else for(ne=0;ne<v.matches.length;ne++)i.push(ne.toString());if(o.excludes[e]!==void 0){let t=i.slice();for(let t=0,n=o.excludes[e].length;t<n;t++){let n=o.excludes[e][t].toString().split(`:`);l.length==n[1]&&i.splice(i.indexOf(n[0]),1)}i.length===0&&(delete o.excludes[e],i=t)}(s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&t>=s.keepStatic)&&(i=i.slice(0,1));for(let e=0;e<i.length;e++){ne=parseInt(i[e]),p=[],n=typeof C==`string`&&w(u,ne,S)||r.slice();let o=v.matches[ne];if(o&&d(o,[ne].concat(l),f))a=!0;else if(y=_(v),o&&o.matches&&o.matches.length>v.matches[0].matches.length)break;te=p.slice(),u=t,p=[];for(let e=0;e<te.length;e++){let n=te[e],r=!1;n.alternation=n.alternation||S,T(n);for(let e=0;e<b.length;e++){let i=b[e];if(typeof C!=`string`||n.alternation!==void 0&&C.indexOf(n.locator[n.alternation].toString())!==-1){if(n.match.nativeDef===i.match.nativeDef){r=!0,T(i,n);break}else if(h(n,i,s)){T(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(h(i,n,s)){T(i,n);break}else if(ee(n,i)){T(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(ee(i,n)){T(i,n),i.match.optionality&&c.inputmask.userOptions.keepStatic===void 0&&(s.keepStatic=t);break}}}r||b.push(n)}}p=x.concat(b),u=e,m||=p.length>0&&y,!y&&m&&(g=!0),a=b.length>0&&!y,y&&m&&!a&&p.forEach(function(e,t){e.unMatchedAlternationStopped=!0}),n=r.slice()}else a=d(v.matches[C]||t.matches[C],[C].concat(l),f);if(a)return!0}function ie(){let r=a,i=!1;for(let c=n.length>0?n.shift():0;c<(isNaN(r.quantifier.max)?c+1:r.quantifier.max)&&u<=e;c++){let n=t.matches[t.matches.indexOf(r)-1];if(a=d(n,[c].concat(l),n),a){if(p.forEach(function(t,l){_=x(n,t.match)?t.match:p[p.length-1].match,_.optionalQuantifier=c>=r.quantifier.min,_.jit=(c+1)*(n.matches.indexOf(_)+1)>r.quantifier.jit,(_.optionalQuantifier||_.optionality)&&C(_,n)&&(m=!0,u=e,s.greedy&&o.validPositions[e-1]==null&&c>r.quantifier.min&&[`*`,`+`].indexOf(r.quantifier.max)!=-1&&(p.pop(),v=void 0),i=!0,a=!1),!i&&_.jit&&(o.jitOffset[e]=n.matches.length-n.matches.indexOf(_))}),i)break;return!0}}}if(u>e+s._maxTestPos)throw Error(`Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${o.mask}`);if(u===e&&a.matches===void 0)if(p.push({match:a,locator:l.reverse(),cd:v,mloc:{}}),a.optionality&&f===void 0&&(s.definitions&&s.definitions[a.nativeDef]&&s.definitions[a.nativeDef].optional||r.default.prototype.definitions[a.nativeDef]&&r.default.prototype.definitions[a.nativeDef].optional))m=!0,u=e;else return!0;else if(a.matches!==void 0){if(a.isGroup&&f!==a)return te();if(a.isOptional)return ne();if(a.isAlternator)return re();if(a.isQuantifier&&f!==t.matches[t.matches.indexOf(a)-1])return ie();if(a=b(a,n,l,f),a)return!0}else u++}for(let r=n.length>0?n.shift():0;r<t.matches.length;r++)if(t.matches[r].isQuantifier!==!0){let n=d(t.matches[r],[r].concat(a),l);if(n&&u===e)return n;if(u>e)break}}function x(e,t){let n=e.matches.indexOf(t)!=-1;return n||e.matches.forEach((e,r)=>{e.matches!==void 0&&!n&&(n=x(e,t))}),n}function S(e,t){let n=[];return Array.isArray(t)||(t=[t]),t.length>0&&(t[0].alternation===void 0||s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&e>=s.keepStatic?(n=f.call(i,e,t.slice()).locator.slice(),n.length===0&&(n=t[0].locator.slice())):t.forEach(e=>{Object.values(e.mloc).forEach(e=>{e.forEach((e,t)=>{let r=n[t];e.toString().includes(`:`)||r&&r.toString().includes(`:`)||(r===void 0?n[t]=e:r.toString().includes(e)||(n[t]=n[t]+`,`+e))})})})),n}if(e>-1){if(t===void 0){let t=e-1,n;for(;(n=o.validPositions[t]||o.tests[t])===void 0&&t>-1;)t--;n!==void 0&&t>-1&&(d=S(t,n),v=d.join(``),u=t)}if(o.tests[e]&&o.tests[e][0].cd===v)return o.tests[e];for(let t=d.shift();t<l.length&&!(b(l[t],d,[t])&&u===e||u>e);t++);}(p.length===0||m)&&p.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:``,placeholder:``},locator:y&&p.filter(e=>e.unMatchedAlternationStopped!==!0).length===0||g&&p.length>0&&p.filter(e=>!e.match.static).every(e=>e.match.optionalQuantifier)?[0]:[],mloc:{},cd:v});let C;return t!==void 0&&o.tests[e]?C=a.extend(!0,[],p):(o.tests[e]=a.extend(!0,[],p),C=o.tests[e]),p.forEach(e=>{e.match.optionality=e.match.defOptionality||!1}),C}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=l;var r=n(17),i=n(18),a=n(15),o=n(16),s=n(20),c=n(21);function l(){let e=this,t=this.opts,n=this.el,l=this.dependencyLib;function u(t,n){function r(t){let r,i;function c(t){if(l.valHooks&&(l.valHooks[t]===void 0||l.valHooks[t].inputmaskpatch!==!0)){let r=l.valHooks[t]&&l.valHooks[t].get?l.valHooks[t].get:function(e){return e.value},i=l.valHooks[t]&&l.valHooks[t].set?l.valHooks[t].set:function(e,t){return e.value=t,e};l.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();{let i=r(t);return s.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)!==-1||n.nullable!==!0?i:``}}else return r(t)},set:function(e,t){let n=i(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),n},inputmaskpatch:!0}}}function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():s.getLastValidPosition.call(e)!==-1||n.nullable!==!0?this.getRootNode().activeElement===this&&n.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,s.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,s.getBuffer.call(e).slice())).join(``):r.call(this):``:r.call(this)}function d(e){i.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}function f(e){a.EventRuler.on(e,`mouseenter`,function(){let e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?s.getBuffer.call(e.inputmask).slice().reverse():s.getBuffer.call(e.inputmask)).join(``)&&(0,o.applyInputValue)(e,t)})}if(!t.inputmask.__valueGet){if(n.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){let e=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),`value`):void 0;e&&e.get&&e.set?(r=e.get,i=e.set,Object.defineProperty(t,"value",{get:u,set:d,configurable:!0})):t.tagName.toLowerCase()!==`input`&&(r=function(){return this.textContent},i=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:d,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__(`value`)&&(r=t.__lookupGetter__(`value`),i=t.__lookupSetter__(`value`),t.__defineGetter__(`value`,u),t.__defineSetter__(`value`,d));t.inputmask.__valueGet=r,t.inputmask.__valueSet=i}t.inputmask._valueGet=function(t){return e.isRTL&&t!==!0?r.call(this.el).split(``).reverse().join(``):r.call(this.el)},t.inputmask._valueSet=function(t,n){i.call(this.el,t==null?``:n!==!0&&e.isRTL?t.split(``).reverse().join(``):t)},r===void 0&&(r=function(){return this.value},i=function(e){this.value=e},c(t.type),f(t))}}let i=t.getAttribute(`type`),c=t.tagName.toLowerCase()===`input`&&n.supportsInputType.includes(i)||t.isContentEditable||t.tagName.toLowerCase()===`textarea`;if(!c)if(t.tagName.toLowerCase()===`input`){let e=document.createElement(`input`);e.setAttribute(`type`,i),c=e.type===`text`,e=null}else c=`partial`;return c===!1?t.inputmask=void 0:r(t),c}a.EventRuler.off(n);let d=u(n,t);if(d!==!1){e.originalPlaceholder=n.placeholder,e.maxLength=n===void 0?void 0:n.maxLength,e.maxLength===-1&&(e.maxLength=void 0),`inputMode`in n&&n.getAttribute(`inputmode`)===null&&(n.inputMode=t.inputmode,n.setAttribute(`inputmode`,t.inputmode)),d===!0&&(t.showMaskOnFocus=t.showMaskOnFocus&&[`cc-number`,`cc-exp`].indexOf(n.autocomplete)===-1,r.iphone&&(t.insertModeVisual=!1,n.setAttribute(`autocorrect`,`off`)),a.EventRuler.on(n,`submit`,i.EventHandlers.submitEvent),a.EventRuler.on(n,`reset`,i.EventHandlers.resetEvent),a.EventRuler.on(n,`blur`,i.EventHandlers.blurEvent),a.EventRuler.on(n,`focus`,i.EventHandlers.focusEvent),a.EventRuler.on(n,`invalid`,i.EventHandlers.invalidEvent),a.EventRuler.on(n,`click`,i.EventHandlers.clickEvent),a.EventRuler.on(n,`mouseleave`,i.EventHandlers.mouseleaveEvent),a.EventRuler.on(n,`mouseenter`,i.EventHandlers.mouseenterEvent),a.EventRuler.on(n,`paste`,i.EventHandlers.pasteEvent),a.EventRuler.on(n,`cut`,i.EventHandlers.cutEvent),a.EventRuler.on(n,`complete`,t.oncomplete),a.EventRuler.on(n,`incomplete`,t.onincomplete),a.EventRuler.on(n,`cleared`,t.oncleared),t.inputEventOnly!==!0&&a.EventRuler.on(n,`keydown`,i.EventHandlers.keyEvent),(r.mobile||t.inputEventOnly)&&n.removeAttribute(`maxLength`),a.EventRuler.on(n,`input`,i.EventHandlers.inputFallBackEvent)),a.EventRuler.on(n,`setvalue`,i.EventHandlers.setValueEvent),e.applyMaskHook===void 0||e.applyMaskHook(),s.getBufferTemplate.call(e).join(``),e.undoValue=e._valueGet(!0);let l=n.getRootNode().activeElement;if(n.inputmask._valueGet(!0)!==``||t.clearMaskOnLostFocus===!1||l===n){(0,o.applyInputValue)(n,n.inputmask._valueGet(!0));let r=s.getBuffer.call(e).slice();c.isComplete.call(e,r)===!1&&t.clearIncomplete&&s.resetMaskSet.call(e,!1),t.clearMaskOnLostFocus&&l!==n&&(s.getLastValidPosition.call(e)===-1?r=[]:o.clearOptionalTail.call(e,r)),(t.clearMaskOnLostFocus===!1||t.showMaskOnFocus&&l===n||n.inputmask._valueGet(!0)!==``)&&(0,o.writeBuffer)(n,r),l===n?s.caret.call(e,n,s.seekNext.call(e,s.getLastValidPosition.call(e))):s.caret.call(e,n,0)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=l,t.generateMaskSet=c;var r=s(n(10)),i=n(25),a=s(n(7)),o=s(n(26));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){let n;function o(e,{repeat:t,groupmarker:n,quantifiermarker:r,keepStatic:a}){if(t>0||t===`*`||t===`+`){let i=t===`*`?0:t===`+`?1:t;if(i!==t)e=n[0]+e+n[1]+r[0]+i+`,`+t+r[1];else{let t=e;for(let n=1;n<i;n++)e+=t}}if(a===!0){let t=e.match(RegExp(`(.)\\[([^\\]]*)\\]`,`g`));t&&t.forEach((t,n)=>{let[r,a]=t.split(`[`);a=a.replace(`]`,``),e=e.replace(RegExp(`${(0,i.escapeRegex)(r)}\\[${(0,i.escapeRegex)(a)}\\]`),r.charAt(0)===a.charAt(0)?`(${r}|${r}${a})`:`${r}[${a}]`)})}return e}function s(e,n,i){let s=!1;(e===null||e===``)&&(s=i.regex!==null,s?(e=i.regex,e=e.replace(/^(\^)(.*)(\$)$/,`$2`)):(s=!0,e=`.*`)),e.length===1&&i.greedy===!1&&i.repeat!==0&&(i.placeholder=``),e=o(e,i);let c,l;return l=s?`regex_`+i.regex:i.numericInput?e.split(``).reverse().join(``):e,i.keepStatic!==null&&(l=`ks_`+i.keepStatic+l),typeof i.placeholder==`object`&&(l=`ph_`+JSON.stringify(i.placeholder)+l),a.default.prototype.masksCache[l]===void 0||t===!0?(c={mask:e,maskToken:a.default.prototype.analyseMask(e,s,i),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:n,maskLength:void 0,jitOffset:{}},t!==!0&&(a.default.prototype.masksCache[l]=c,c=r.default.extend(!0,{},a.default.prototype.masksCache[l]))):c=r.default.extend(!0,{},a.default.prototype.masksCache[l]),c}if(typeof e.mask==`function`&&(e.mask=e.mask(e)),Array.isArray(e.mask))if(e.mask.length>1){e.keepStatic===null&&(e.keepStatic=!0);let t=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach(function(n){t.length>1&&(t+=e.alternatormarker),n.mask!==void 0&&typeof n.mask!=`function`?t+=n.mask:t+=n}),t+=e.groupmarker[1],s(t,e.mask,e)}else e.mask=e.mask.pop();return n=e.mask&&e.mask.mask!==void 0&&typeof e.mask.mask!=`function`?s(e.mask.mask,e.mask,e):s(e.mask,e.mask,e),e.keepStatic===null&&(e.keepStatic=!1),n}function l(e,t,n){let r=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,i=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,s=new o.default,c=[],l=[],u=!1,d,f,p,m,h,g,_=!1;function v(e,r,i){i=i===void 0?e.matches.length:i;let o=e.matches[i-1],c=n.casing?`i`:``;if(t)r.indexOf(`[`)===0||u&&/\\d|\\s|\\w|\\p/i.test(r)||r===`.`?(/\\p\{.*}/i.test(r)&&(c+=`u`),e.matches.splice(i++,0,{fn:new RegExp(r,c),static:!1,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r,casing:null,def:r,placeholder:typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0,nativeDef:r})):(u&&(r=r[r.length-1]),r.split(``).forEach(function(t,r){o=e.matches[i-1],e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||t)?RegExp(`[`+(n.staticDefinitionSymbol||t)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==t&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||t,placeholder:n.staticDefinitionSymbol===void 0?typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0:t,nativeDef:(u?`'`:``)+t})})),u=!1;else{let t=n.definitions&&n.definitions[r]||n.usePrototypeDefinitions&&a.default.prototype.definitions[r];t&&!u?(typeof t.validator==`string`&&/\\p\{.*}/i.test(t.validator)&&(c+=`u`),e.matches.splice(i++,0,{fn:t.validator?typeof t.validator==`string`?new RegExp(t.validator,c):new function(){this.test=t.validator}:/./,static:t.static||!1,optionality:t.optional||!1,defOptionality:t.optional||!1,newBlockMarker:o===void 0||t.optional?`master`:o.def!==(t.definitionSymbol||r),casing:t.casing,def:t.definitionSymbol||r,placeholder:t.placeholder,nativeDef:r,generated:t.generated})):(e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||r)?RegExp(`[`+(n.staticDefinitionSymbol||r)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||r,placeholder:n.staticDefinitionSymbol===void 0?void 0:r,nativeDef:(u?`'`:``)+r}),u=!1)}}function y(e){e&&e.matches&&e.matches.forEach(function(r,i){let a=e.matches[i+1];(a===void 0||a.matches===void 0||a.isQuantifier===!1)&&r&&r.isGroup&&(r.isGroup=!1,t||(v(r,n.groupmarker[0],0),r.openGroup!==!0&&v(r,n.groupmarker[1]))),y(r)})}function b(){if(c.length>0){if(m=c[c.length-1],v(m,f),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup&&(h.matches[e].isGroup=!1);c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else v(s,f)}function x(e){function t(e){return e===n.optionalmarker[0]?e=n.optionalmarker[1]:e===n.optionalmarker[1]?e=n.optionalmarker[0]:e===n.groupmarker[0]?e=n.groupmarker[1]:e===n.groupmarker[1]&&(e=n.groupmarker[0]),e}e.matches=e.matches.reverse();for(let n in e.matches)if(Object.prototype.hasOwnProperty.call(e.matches,n)){let r=parseInt(n);if(e.matches[n].isQuantifier&&e.matches[r+1]&&e.matches[r+1].isGroup){let t=e.matches[n];e.matches.splice(n,1),e.matches.splice(r+1,0,t)}e.matches[n].matches===void 0?e.matches[n]=t(e.matches[n]):e.matches[n]=x(e.matches[n])}return e}function S(e){let t=new o.default(!0);return t.openGroup=!1,t.matches=e,t}function C(){if(p=c.pop(),p.openGroup=!1,p!==void 0)if(c.length>0){if(m=c[c.length-1],m.matches.push(p),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup=!1,h.matches[e].alternatorGroup=!1;c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else s.matches.push(p);else b()}function w(e){let t=e.pop();return t.isQuantifier&&(t=S([e.pop(),t])),t}for(t&&(n.optionalmarker[0]=void 0,n.optionalmarker[1]=void 0);d=t?i.exec(e):r.exec(e);){if(f=d[0],t){switch(f.charAt(0)){case`?`:f=`{0,1}`;break;case`+`:case`*`:f=`{`+f+`}`;break;case`|`:if(c.length===0){let e=S(s.matches);e.openGroup=!0,c.push(e),s.matches=[],_=!0}break}switch(f){case`\\d`:f=`[0-9]`;break;case`\\p`:f+=i.exec(e)[0],f+=i.exec(e)[0];break;case`(?:`:case`(?=`:case`(?!`:case`(?<=`:case`(?<!`:break}}if(u){b();continue}switch(f.charAt(0)){case`$`:case`^`:t||b();break;case n.escapeChar:u=!0,t&&b();break;case n.optionalmarker[1]:case n.groupmarker[1]:C();break;case n.optionalmarker[0]:c.push(new o.default(!1,!0));break;case n.groupmarker[0]:c.push(new o.default(!0));break;case n.quantifiermarker[0]:{let e=new o.default(!1,!1,!0);f=f.replace(/[{}?]/g,``);let t=f.split(`|`),n=t[0].split(`,`),r=isNaN(n[0])?n[0]:parseInt(n[0]),i=n.length===1?r:isNaN(n[1])?n[1]:parseInt(n[1]),a=isNaN(t[1])?t[1]:parseInt(t[1]);(r===`*`||r===`+`)&&(r=i===`*`?0:1),e.quantifier={min:r,max:i,jit:a};let l=c.length>0?c[c.length-1].matches:s.matches;d=l.pop(),d.isGroup||(d=S([d])),l.push(d),l.push(e)}break;case n.alternatormarker:if(c.length>0){m=c[c.length-1];let e=m.matches[m.matches.length-1];g=m.openGroup&&(e.matches===void 0||e.isGroup===!1&&e.isAlternator===!1)?c.pop():w(m.matches)}else g=w(s.matches);if(g.isAlternator)c.push(g);else if(g.alternatorGroup?(h=c.pop(),g.alternatorGroup=!1):h=new o.default(!1,!1,!1,!0),h.matches.push(g),c.push(h),g.openGroup){g.openGroup=!1;let e=new o.default(!0);e.alternatorGroup=!0,c.push(e)}break;default:b()}}for(_&&C();c.length>0;)p=c.pop(),s.matches.push(p);return s.matches.length>0&&(y(s),l.push(s)),(n.numericInput||n.isRTL)&&x(l[0]),l}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.escapeRegex=r;let n=RegExp(`(\\`+[`/`,`.`,`*`,`+`,`?`,`|`,`(`,`)`,`[`,`]`,`{`,`}`,`\\`,`$`,`^`].join(`|\\`)+`)`,`gim`);function r(e){return e.replace(n,`\\$1`)}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n,r){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=r||!1,this.quantifier={min:1,max:1}}}),(function(e,t,n){var r=n(25),i=c(n(7)),a=n(19),o=n(20),s=n(22);n(28);function c(e){return e&&e.__esModule?e:{default:e}}let l=i.default.dependencyLib;class u{constructor(e,t,n,r){this.mask=e,this.format=t,this.opts=n,this.inputmask=r,this._date=new Date(1,0,1),this.initDateObject(e,this.opts,this.inputmask)}get date(){return this._date===void 0&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts,this.inputmask)),this._date}initDateObject(e,t,n){let r,i=-1;for(x(t).lastIndex=0;r=x(t).exec(this.format);)if(r.index>=i){let a=/\d+$/.exec(r[0]),o=a?r[0][0]+`x`:r[0],c;if(e!==void 0){if(a){let i=x(t).lastIndex,a=re.call(n,r.index,t,n&&n.maskset);x(t).lastIndex=i,c=e.slice(0,e.indexOf(a.nextMatch[0]))}else{let a=r[0][0],l=r.index;for(;n&&(t.placeholder[`${r.index}'${s.getTest.call(n,l).match.placeholder}`]||s.getTest.call(n,l).match.placeholder)===a;)l++;i=l;let u=l-r.index;c=e.slice(0,u||b(o)&&b(o)[4]||o.length)}e=e.slice(c.length)}Object.prototype.hasOwnProperty.call(m,o)&&this.setValue(this,c,o,b(o)[2],b(o)[1])}}setValue(e,t,n,r,i){if(t!==void 0)switch(r){case`ampm`:e[r]=t,e[`raw`+r]=t.replace(/\s/g,`_`);break;case`month`:if(n===`MMM`||n===`MMMM`){n===`MMM`?e[r]=T(p.monthNames.slice(0,12).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2):e[r]=T(p.monthNames.slice(12,24).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2),e[r]=e[r]===`00`?``:e[r].toString(),e[`raw`+r]=e[r];break}default:e[r]=t.replace(/[^0-9]/g,`0`),e[`raw`+r]=t.replace(/\s/g,`_`)}if(i!==void 0){let t=e[r];(r===`day`&&parseInt(t)===29||r===`month`&&parseInt(t)===2)&&parseInt(e.day)===29&&parseInt(e.month)===2&&(e.year===``||e.year===void 0)&&e._date.setFullYear(2012,1,29),r===`day`&&(d=!0,parseInt(t)===0&&(t=1)),r===`month`&&(d=!0),r===`year`&&(d=!0,t.length<b(n)[4]&&(t=T(t,b(n)[4],!0))),(t!==``&&!isNaN(t)||r===`ampm`)&&i.call(e._date,t)}}reset(){this._date=new Date(1,0,1)}reInit(){this._date=void 0,this.date}}let d=!1,f=new Date().getFullYear(),p=i.default.prototype.i18n,m={d:[`[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,Date.prototype.getDate],dd:[`0[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,function(){return T(Date.prototype.getDate.call(this),2)}],ddd:[``],dddd:[``],M:[`[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return Date.prototype.getMonth.call(this)+1}],MM:[`0[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return T(Date.prototype.getMonth.call(this)+1,2)}],MMM:[p.monthNames.slice(0,12).join(`|`),function(e){let t=p.monthNames.slice(0,12).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(0,12)[Date.prototype.getMonth.call(this)]}],MMMM:[p.monthNames.slice(12,24).join(`|`),function(e){let t=p.monthNames.slice(12,24).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(12,24)[Date.prototype.getMonth.call(this)]}],yy:[`[0-9]{2}`,function(e){let t=new Date().getFullYear().toString().slice(0,2);Date.prototype.setFullYear.call(this,`${t}${e}`)},`year`,function(){return T(Date.prototype.getFullYear.call(this),2)},2],yyyy:[`[0-9]{4}`,Date.prototype.setFullYear,`year`,function(){return T(Date.prototype.getFullYear.call(this),4)},4],h:[`[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],hh:[`0[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,function(){return T(Date.prototype.getHours.call(this),2)}],hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return Date.prototype.getHours}],H:[`1?[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],HH:[`0[0-9]|1[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,function(){return T(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return function(){return T(Date.prototype.getHours.call(this),e)}}],m:[`[1-5]?[0-9]`,Date.prototype.setMinutes,`minutes`,Date.prototype.getMinutes],mm:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setMinutes,`minutes`,function(){return T(Date.prototype.getMinutes.call(this),2)}],s:[`[1-5]?[0-9]`,Date.prototype.setSeconds,`seconds`,Date.prototype.getSeconds],ss:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setSeconds,`seconds`,function(){return T(Date.prototype.getSeconds.call(this),2)}],l:[`[0-9]{3}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return T(Date.prototype.getMilliseconds.call(this),3)},3],L:[`[0-9]{2}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return T(Date.prototype.getMilliseconds.call(this),2)},2],t:[`[ap]`,_,`ampm`,v,1],tt:[`[ap]m`,_,`ampm`,v,2],T:[`[AP]`,_,`ampm`,v,1],TT:[`[AP]M`,_,`ampm`,v,2],Z:[`.*`,void 0,`Z`,y],o:[``],S:[``]},h={D:`d`,DD:`dd`,DDD:`ddd`,DDDD:`dddd`,mmm:`MMM`,mmmm:`MMMM`,YY:`yy`,YYYY:`yyyy`,sss:`L`},g={isoDate:`yyyy-MM-dd`,isoTime:`HH:mm:ss`,isoDateTime:`yyyy-MM-dd\\THH:mm:ss`,isoUtcDateTime:`UTC:yyyy-MM-dd\\THH:mm:ss\\Z`};function _(e){let t=this.getHours();e.toLowerCase().includes(`p`)?this.setHours(t+12):e.toLowerCase().includes(`a`)&&t>=12&&this.setHours(t-12)}function v(){let e=this.getHours();return e||=12,e>=12?`PM`:`AM`}function y(){let{1:e}=this.toString().match(/\((.+)\)/);return e.includes(` `)&&(e=e.replace(`-`,` `).toUpperCase(),e=e.split(` `).map(([e])=>e).join(``)),e}function b(e){let t=h[e]||e,n=/\d+$/.exec(t);if(n&&n[0]!==void 0){let e=m[t[0]+`x`].slice(``);return e[0]=e[0](n[0]),e[3]=e[3](n[0]),e}else if(m[t])return m[t]}function x(e){if(!e.tokenizer){let t=[],n=[],r=Object.keys(m).concat(Object.keys(h));for(let e of r)if(/\.*x$/.test(e)){let t=e[0]+`\\d+`;n.indexOf(t)===-1&&n.push(t)}else t.indexOf(e[0])===-1&&t.push(e[0]);e.tokenizer=`(`+(n.length>0?n.join(`|`)+`|`:``)+t.join(`+|`)+`+)+?|.`,e.tokenizer=new RegExp(e.tokenizer,`g`)}return e.tokenizer}function S(e,t,n){if(e.year!==e.rawyear){let r=f.toString(),i=e.rawyear.replace(/[^0-9]/g,``),a=r.slice(0,i.length),o=r.slice(i.length);if(i.length===2&&i===a){let i=new Date(f,e.month-1,e.day);e.day==i.getDate()&&(!n.max||n.max.date.getTime()>=i.getTime())&&(e.date.setFullYear(f),e.year=r,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}function C(e,t,n){let r=this;if(!d)return!0;if(e.rawday===void 0||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||e.day==`29`&&(!isFinite(e.rawyear)||e.rawyear===void 0||e.rawyear===``)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if(e.day==`29`){let e=re.call(r,t.pos,n,r.maskset);if(e.targetMatch&&[`yyyy`,`YYYY`].includes(e.targetMatch[0])&&t.pos-e.targetMatchIndex===2)return t.remove=t.pos+1,t}else if(e.date.getMonth()==2&&e.day==`30`&&t.c!==void 0)return e.day=`03`,e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:`0`},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function w(e,t,n,r,i){if(!t)return t;if(t&&n.min&&!isNaN(n.min.date.getTime())){let i;for(e.reset(),x(n).lastIndex=0;i=x(n).exec(n.inputFormat);){var a;if((a=b(i[0]))&&a[3]){let t=a[1],o=e[a[2]],s=n.min[a[2]],c=n.max?n.max[a[2]]:s+1,l=[],u=!1;for(let t=0;t<s.length;t++)r.validPositions[t+i.index]===void 0&&!u?(t+i.index==0&&o[t]<s[t]?(l[t]=o[t],u=!0):l[t]=s[t],a[2]===`year`&&o.length-1==t&&s!=c&&(l=(parseInt(l.join(``))+1).toString().split(``)),a[2]===`ampm`&&s!=c&&n.min.date.getTime()>e.date.getTime()&&(l[t]=c[t])):(l[t]=o[t],u||=o[t]>s[t]);t.call(e._date,l.join(``))}}t=n.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&n.max&&(isNaN(n.max.date.getTime())||(t=n.max.date.getTime()>=e.date.getTime())),t}function ee(e,t,n){let i=``,a,o,s=0,c=!1,l={};for(x(n).lastIndex=0;a=x(n).exec(e);)if(a[0]===n.escapeChar)c=!0;else{if(t===void 0)if(!c&&(o=b(a[0])))i+=`(`+o[0]+`)`,n.placeholder&&n.placeholder!==``?(l[s]=n.placeholder[a.index%n.placeholder.length],l[`${a.index}'${n.placeholder[a.index%n.placeholder.length]}`]=a[0].charAt(0)):l[s]=a[0].charAt(0);else switch(a[0]){case`[`:i+=`(`;break;case`]`:i+=`)?`;break;default:i+=(0,r.escapeRegex)(a[0]),l[s]=a[0].charAt(0)}else if(!c&&(o=b(a[0])))if(o[3]){let e=o[3];i+=e.call(t.date)}else o[2]&&t[`raw`+o[2]]!==void 0?i+=t[`raw`+o[2]]:i+=a[0];else i+=a[0];s++,c=!1}return t===void 0&&(n.placeholder=l),i}function T(e,t,n){for(e=String(e),t||=2;e.length<t;)e=n?e+`0`:`0`+e;return e}function te(e,t,n){let r=this;if(typeof e==`string`)return new u(e,t,n,r);if(e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`date`))return e}function ne(e,t){return ee(t.inputFormat,{date:e},t)}function re(e,t,n){let r=this,i=0,a,o,c=0;for(x(t).lastIndex=0;o=x(t).exec(t.inputFormat);){let l=/\d+$/.exec(o[0]);if(l)c=parseInt(l[0]);else{let e=o[0][0],n=i;for(;r&&(t.placeholder[`${o.index}'${s.getTest.call(r,n).match.placeholder}`]||s.getTest.call(r,n).match.placeholder)===e;)n++;c=n-i,c===0&&(c=o[0].length)}if(i+=c,i>=e+1){let r=``;if(n&&n.tests[e]){let a=Object.keys(t.placeholder).filter(t=>{for(let r=o.index-1;r<i;r++)if(t===`${r}'${n.tests[e][0].match.placeholder}`)return!0;return!1});r=a.length>0?t.placeholder[a[0]]:n.tests[e][0].match.placeholder}if(o[0].indexOf(r)!==-1){a=o,o=x(t).exec(t.inputFormat);break}}}return{targetMatchIndex:i-c,nextMatch:o,targetMatch:a}}i.default.extendAliases({datetime:{mask:function(e){if(e.numericInput=!1,m.S=p.ordinalSuffix.join(`|`),e.inputFormat=g[e.inputFormat]||e.inputFormat,e.repeat&&(e.repeat=parseInt(e.repeat.toString()),e.repeat>0)){let t=``;for(let n=0;n<e.repeat;n++)t+=e.inputFormat;e.inputFormat=t,e.repeat=0}return e.displayFormat=g[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=g[e.outputFormat]||e.outputFormat||e.inputFormat,e.regex=ee(e.inputFormat,void 0,e),e.min=te(e.min,e.inputFormat,e),e.max=te(e.max,e.inputFormat,e),null},placeholder:``,inputFormat:`isoDateTime`,displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:``,preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(s)return!0;if(isNaN(n)&&e[t]!==n){let r=re.call(c,t,i,a);if(r.nextMatch&&r.nextMatch[0]===n&&r.targetMatch[0].length>1){let n=b(r.targetMatch[0])[0];if(new RegExp(n).test(`0`+e[t-1]))return e[t]=e[t-1],e[t-1]=`0`,{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,n,r,i,a,o,c){let l=this;if(o)return!0;let u,d;if(r===!1&&(u=re.call(l,t+1,i,a),u.targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0?d=b(u.targetMatch[0])[0]:(u=re.call(l,t+2,i,a),u.targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0&&(d=b(u.targetMatch[0]))),d!==void 0&&(t=u.targetMatchIndex,a.validPositions[t+1]!==void 0&&new RegExp(d).test(n+`0`)?(e[t]=n,e[t+1]=`0`,r={pos:t+2,caret:t+1}):new RegExp(d).test(`0`+n)&&(e[t]=`0`,e[t+1]=n,r={pos:t+2})),r===!1))return r;if(r.fuzzy&&(e=r.buffer,t=r.pos),u=re.call(l,t,i,a),u.targetMatch&&u.targetMatch[0]&&b(u.targetMatch[0])!==void 0){let n=b(u.targetMatch[0]);d=n[0];let r=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(new RegExp(d).test(r.join(``))===!1&&u.targetMatch[0].length===2&&a.validPositions[u.targetMatchIndex]&&a.validPositions[u.targetMatchIndex+1]&&(a.validPositions[u.targetMatchIndex+1].input=`0`),n[2]==`year`){let n=s.getMaskTemplate.call(l,!1,1,void 0,!0);for(let r=t+1;r<e.length;r++)e[r]=n[r],a.validPositions.splice(t+1,1)}}let f=r,p=te.call(l,e.join(``),i.inputFormat,i);return f&&!isNaN(p.date.getTime())&&(i.prefillYear&&(f=S(p,f,i)),f=C.call(l,p,f,i),f=w(p,f,i,a,c)),t!==void 0&&f&&r.pos!==t?{buffer:ee(i.inputFormat,p,i).split(``),refreshFromBuffer:{start:t,end:r.pos},pos:r.caret===void 0?r.pos:r.caret}:f},onKeyDown:function(e,t,n,r){let i=this;e.ctrlKey&&e.key===a.keys.ArrowRight&&(i.inputmask._valueSet(ne(new Date,r)),l(i).trigger(`setvalue`))},onUnMask:function(e,t,n){let r=this;return t&&ee(n.outputFormat,te.call(r,e,n.inputFormat,n),n)},casing:`follow`,onBeforeMask:function(e,t){return Object.prototype.toString.call(e)===`[object Date]`&&(e=ne(e,t)),e},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:`numeric`,prefillYear:!0}})}),(function(e,t,n){var r=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}r.default.dependencyLib.extend(!0,r.default.prototype.i18n,{dayNames:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],monthNames:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],ordinalSuffix:[`st`,`nd`,`rd`,`th`]})}),(function(e,t,n){var r=n(25),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}let c=i.default.dependencyLib;function l(e,t){let n=``;for(let r=0;r<e.length;r++)i.default.prototype.definitions[e.charAt(r)]||t.definitions[e.charAt(r)]||t.optionalmarker[0]===e.charAt(r)||t.optionalmarker[1]===e.charAt(r)||t.quantifiermarker[0]===e.charAt(r)||t.quantifiermarker[1]===e.charAt(r)||t.groupmarker[0]===e.charAt(r)||t.groupmarker[1]===e.charAt(r)||t.alternatormarker===e.charAt(r)?n+=`\\`+e.charAt(r):n+=e.charAt(r);return n}function u(e,t,n,r){if(e.length>0&&t>0&&(!n.digitsOptional||r)){var i=e.indexOf(n.radixPoint),a=!1;n.negationSymbol.back===e[e.length-1]&&(a=!0,e.length--),i===-1&&(e.push(n.radixPoint),i=e.length-1);for(let n=1;n<=t;n++)isFinite(e[i+n])||(e[i+n]=`0`)}return a&&e.push(n.negationSymbol.back),e}function d(e,t){let n=0;e===`+`&&(n=o.seekNext.call(this,t.validPositions.length-1));for(let r in t.tests)if(r=parseInt(r),r>=n){for(let n=0,i=t.tests[r].length;n<i;n++)if((t.validPositions[r]===void 0||e===`-`)&&t.tests[r][n].match.def===e)return r+ +(t.validPositions[r]!==void 0&&e!==`-`)}return n}function f(e,t){let n=-1;for(let r=0,i=t.validPositions.length;r<i;r++){let i=t.validPositions[r];if(i&&i.match.def===e){n=r;break}}return n}function p(e){e.parseMinMaxOptions===void 0&&(e.min!==null&&(e.min=e.min.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.min=e.min.replace(e.radixPoint,`.`)),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),e.max!==null&&(e.max=e.max.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.max=e.max.replace(e.radixPoint,`.`)),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions=`done`)}function m(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&e.digits!==`0`&&(e.radixPoint===`.`?e.groupSeparator=`,`:e.radixPoint===`,`?e.groupSeparator=`.`:e.groupSeparator=``),e.groupSeparator===` `&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),e.positionCaretOnClick===`radixFocus`&&e.placeholder===``&&(e.positionCaretOnClick=`lvp`);let t=`0`,n=e.radixPoint;e.numericInput===!0&&e.__financeInput===void 0?(t=`1`,e.positionCaretOnClick=e.positionCaretOnClick===`radixFocus`?`lvp`:e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=e.digits.indexOf(`,`)===-1?2:e.digits.split(`,`)[0]),e._radixDance=!1,n=e.radixPoint===`,`?`?`:`!`,e.radixPoint!==``&&e.definitions[n]===void 0&&(e.definitions[n]={},e.definitions[n].validator=`[`+e.radixPoint+`]`,e.definitions[n].placeholder=e.radixPoint,e.definitions[n].static=!0,e.definitions[n].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);let r=`[+]`,i;if(r+=l(e.prefix,e),e.groupSeparator===``?r+=`9{+}`:(e.definitions[e.groupSeparator]===void 0&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator=`[`+e.groupSeparator+`]`,e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),r+=e._mask(e)),e.digits!==void 0&&e.digits!==0){let a=e.digits.toString().split(`,`);isFinite(a[0])&&a[1]&&isFinite(a[1])?r+=n+t+`{`+e.digits+`}`:(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(i=r+n+t+`{0,`+e.digits+`}`,e.keepStatic=!0):r+=n+t+`{`+e.digits+`}`)}else e.inputmode=`numeric`;return r+=l(e.suffix,e),r+=`[-]`,i&&(r=[i+l(e.suffix,e)+`[-]`,r]),e.greedy=!1,p(e),e.radixPoint!==``&&e.substituteRadixPoint&&(e.substitutes[e.radixPoint==`.`?`,`:`.`]=e.radixPoint),r}function h(e,t,n,r,i){return i._radixDance&&i.numericInput&&t!==i.negationSymbol.back&&e<=n&&(n>0||t==i.radixPoint)&&(r.validPositions[e-1]===void 0||r.validPositions[e-1].input!==i.negationSymbol.back)&&--e,e}function g(e,t,n,r,i){let a=t.buffer?t.buffer.indexOf(i.radixPoint):-1,o=(a!==-1||r&&i.jitMasking)&&new RegExp(i.definitions[9].validator).test(e);return!r&&i._radixDance&&a!==-1&&o&&t.validPositions[a]==null?{insert:{pos:a===n?a+1:a,c:i.radixPoint},pos:n}:o}function _(e,t){let n=RegExp(`(^`+(t.negationSymbol.front===``?``:(0,r.escapeRegex)(t.negationSymbol.front)+`?`)+(0,r.escapeRegex)(t.prefix)+`)(.*)(`+(0,r.escapeRegex)(t.suffix)+(t.negationSymbol.back==``?``:(0,r.escapeRegex)(t.negationSymbol.back)+`?`)+`$)`).exec(e.slice().reverse().join(``)),i=n?n[2]:``,a=!1;return i&&(i=i.split(t.radixPoint.charAt(0))[0],a=RegExp(`^[0`+t.groupSeparator+`]*`).exec(i)),a&&(a[0].length>1||a[0].length>0&&a[0].length<i.length)?a:!1}i.default.extendAliases({numeric:{mask:m,_mask:function(e){return`(`+e.groupSeparator+`999){+|1}`},digits:`*`,digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:`.`,positionCaretOnClick:`radixFocus`,_radixDance:!0,groupSeparator:``,allowMinus:!0,negationSymbol:{front:`-`,back:``},prefix:``,suffix:``,min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:`text`,unmaskAsNumber:!1,roundingFN:Math.round,inputmode:`decimal`,shortcuts:{k:`1000`,m:`1000000`},placeholder:`0`,greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:``,usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:g},1:{validator:g,definitionSymbol:`9`},9:{validator:`[0-9０-９٠-٩۰-۹]`,definitionSymbol:`*`},"+":{validator:function(e,t,n,r,i){return i.allowMinus&&(e===`-`||e===i.negationSymbol.front)}},"-":{validator:function(e,t,n,r,i){return i.allowMinus&&e===i.negationSymbol.back}}},preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(i.__financeInput!==!1&&n===i.radixPoint)return!1;let l=e.indexOf(i.radixPoint),u=t;if(t=h(t,n,l,a,i),n===`-`||n===i.negationSymbol.front){if(i.allowMinus!==!0)return!1;let e=!1,t=f(`+`,a),n=f(`-`,a);return t!==-1&&(e=[t],n!==-1&&e.push(n)),e===!1?{insert:[{pos:d.call(c,`+`,a),c:i.negationSymbol.front,fromIsValid:!0},{pos:d.call(c,`-`,a),c:i.negationSymbol.back,fromIsValid:void 0}],caret:u+i.negationSymbol.back.length}:{remove:e,caret:u-i.negationSymbol.back.length}}if(n===i.groupSeparator)return{caret:u};if(s)return!0;if(l!==-1&&i._radixDance===!0&&r===!1&&n===i.radixPoint&&i.digits!==void 0&&(isNaN(i.digits)||parseInt(i.digits)>0)&&l!==t){let e=d.call(c,i.radixPoint,a);return a.validPositions[e]&&(a.validPositions[e].generatedInput=a.validPositions[e].generated||!1),{caret:i._radixDance&&t===l-1?l+1:l}}if(i.__financeInput===!1)if(r){if(i.digitsOptional)return{rewritePosition:o.end};if(!i.digitsOptional){if(o.begin>l&&o.end<=l)return n===i.radixPoint?{insert:{pos:l+1,c:`0`,fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1}}}else{if(!i.showMaskOnHover&&!i.showMaskOnFocus&&!i.digitsOptional&&i.digits>0&&this.__valueGet.call(this.el)===``)return{rewritePosition:l};if(t>=e.length-i.prefix.length&&i.radixPoint!==``){let e=new RegExp(i.definitions[9].validator);if(!a.validPositions.some(t=>t&&!t.generatedInput&&e.test(t.input)))return{rewritePosition:l===-1?0:l}}}return{rewritePosition:t}},postValidation:function(e,t,n,r,i,a,o,s,l){if(r===!1)return r;if(o)return!0;if(i.min!==null||i.max!==null){let t=i.onUnMask(e.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&t<i.min&&l!==!0&&(t.toString().length>i.min.toString().length||e[0]===i.radixPoint||t<0))return!1;if(i.max!==null&&i.max>=0&&t>i.max)return i.SetMaxOnOverflow?{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}:!1}return r},onUnMask:function(e,t,n){if(t===``&&n.nullable===!0)return t;let i=e.replace(n.prefix,``);return i=i.replace(n.suffix,``),i=i.replace(new RegExp((0,r.escapeRegex)(n.groupSeparator),`g`),``),n.placeholder.charAt(0)!==``&&(i=i.replace(new RegExp(n.placeholder.charAt(0),`g`),`0`)),n.unmaskAsNumber?(n.radixPoint!==``&&i.indexOf(n.radixPoint)!==-1&&(i=i.replace(r.escapeRegex.call(this,n.radixPoint),`.`)),i=i.replace(RegExp(`^`+(0,r.escapeRegex)(n.negationSymbol.front)),`-`),i=i.replace(RegExp((0,r.escapeRegex)(n.negationSymbol.back)+`$`),``),Number(i)):i},isComplete:function(e,t){let n=(t.numericInput?e.slice().reverse():e).join(``);return n=n.replace(RegExp(`^`+(0,r.escapeRegex)(t.negationSymbol.front)),`-`),n=n.replace(RegExp((0,r.escapeRegex)(t.negationSymbol.back)+`$`),``),n=n.replace(t.prefix,``),n=n.replace(t.suffix,``),n=n.replace(RegExp((0,r.escapeRegex)(t.groupSeparator)+`([0-9]{3})`,`g`),`$1`),t.radixPoint===`,`&&(n=n.replace((0,r.escapeRegex)(t.radixPoint),`.`)),isFinite(n)},onBeforeMask:function(e,t){e??=``;let n=t.radixPoint||`,`;isFinite(t.digits)&&(t.digits=parseInt(t.digits)),(typeof e==`number`||t.inputType===`number`)&&n!==``&&(e=e.toString().replace(`.`,n));let i=e.charAt(0)===`-`||e.charAt(0)===t.negationSymbol.front,a=e.split(n),o=a[0].replace(/[^\-0-9]/g,``),s=a.length>1?a[1].replace(/[^0-9]/g,``):``,c=a.length>1;e=o+(s===``?s:n+s);let l=0;if(n!==``&&(l=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,s!==``||!t.digitsOptional)){let i=10**(l||1);e=e.replace((0,r.escapeRegex)(n),`.`),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*i)/i).toFixed(l)),e=e.toString().replace(`.`,n)}if(t.digits===0&&e.indexOf(n)!==-1&&(e=e.substring(0,e.indexOf(n))),e!==``&&(t.min!==null||t.max!==null)){let r=e.toString().replace(n,`.`);t.min!==null&&r<t.min?e=t.min.toString().replace(`.`,n):t.max!==null&&r>t.max&&(e=t.max.toString().replace(`.`,n))}return i&&e.charAt(0)!==`-`&&(e=`-`+e),u(e.toString().split(``),l,t,c).join(``)},onBeforeWrite:function(e,t,n,i){function a(e,t){if(i.__financeInput!==!1||t){var n=e.indexOf(i.radixPoint);n!==-1&&e.splice(n,1)}if(i.groupSeparator!==``)for(;(n=e.indexOf(i.groupSeparator))!==-1;)e.splice(n,1);return e}let o,s;if(i.stripLeadingZeroes&&(s=_(t,i))){let e=t.join(``).lastIndexOf(s[0].split(``).reverse().join(``))-(s[0]==s.input?0:1),n=+(s[0]==s.input);for(let r=s[0].length-n;r>0;r--)this.maskset.validPositions.splice(e+r,1),delete t[e+r]}if(e)switch(e.type){case`blur`:case`checkval`:if(i.min!==null||i.max!==null){let e=i.onUnMask(t.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&e<i.min&&t.join()!==``)return{refreshFromBuffer:!0,buffer:u(i.min.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()};if(i.max!==null&&e>i.max)return{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}}if(t[t.length-1]===i.negationSymbol.front){let e=RegExp(`(^`+(i.negationSymbol.front==``?``:(0,r.escapeRegex)(i.negationSymbol.front)+`?`)+(0,r.escapeRegex)(i.prefix)+`)(.*)(`+(0,r.escapeRegex)(i.suffix)+(i.negationSymbol.back==``?``:(0,r.escapeRegex)(i.negationSymbol.back)+`?`)+`$)`).exec(a(t.slice(),!0).reverse().join(``));(e?e[2]:``)==0&&(o={refreshFromBuffer:!0,buffer:[0]})}else i.radixPoint!==``&&t.indexOf(i.radixPoint)===i.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+i.suffix.length):(t.splice(0,1+i.suffix.length),o={refreshFromBuffer:!0,buffer:a(t)}));if(i.enforceDigitsOnBlur){o||={};let e=(o&&o.buffer||t).slice().reverse();o.refreshFromBuffer=!0,o.buffer=u(e,i.digits,i,!0).reverse()}}return o},onKeyDown:function(e,t,n,r){let i=c(this),o;if(e.location!=3){let t,n=e.key;if((t=r.shortcuts&&r.shortcuts[n])&&t.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(t)),i.trigger(`setvalue`),!1}if(e.ctrlKey)switch(e.key){case a.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),i.trigger(`setvalue`),!1;case a.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),i.trigger(`setvalue`),!1}if(!e.shiftKey&&(e.key===a.keys.Delete||e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&n.begin!==t.length){if(t[e.key===a.keys.Delete?n.begin-1:n.end]===r.negationSymbol.front)return o=t.slice().reverse(),r.negationSymbol.front!==``&&o.shift(),r.negationSymbol.back!==``&&o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin]),!1;if(r._radixDance===!0){let s=t.indexOf(r.radixPoint);if(!r.digitsOptional){if(s!==-1&&(n.begin<s||n.end<s||e.key===a.keys.Delete&&(n.begin===s||n.begin-1===s))){let l;return n.begin===n.end&&(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI?n.begin++:e.key===a.keys.Delete&&n.begin-1===s&&(l=c.extend({},n),n.begin--,n.end--)),o=t.slice().reverse(),o.splice(o.length-n.begin,n.begin-n.end||1),(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&o.splice(o.length-n.end+1,0,`0`),o=u(o,r.digits,r).join(``),l&&(n=l),i.trigger(`setvalue`,[o,n.begin>=o.length?s+1:n.begin]),!1}}else if(s===0)return o=t.slice().reverse(),o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin>=o.length?o.length:n.begin]),!1}}}},currency:{prefix:``,groupSeparator:`,`,alias:`numeric`,digits:2,digitsOptional:!1},decimal:{alias:`numeric`},integer:{alias:`numeric`,inputmode:`numeric`,digits:0},percentage:{alias:`numeric`,min:0,max:100,suffix:` %`,digits:0,allowMinus:!1},indianns:{alias:`numeric`,_mask:function(e){return`(`+e.groupSeparator+`99){*|1}(`+e.groupSeparator+`999){1|1}`},groupSeparator:`,`,radixPoint:`.`,placeholder:`0`,digits:2,digitsOptional:!1}})}),(function(e,t,n){var r=a(n(11)),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}let o=r.default.document;if(o&&o.head&&o.head.attachShadow&&r.default.customElements&&r.default.customElements.get(`input-mask`)===void 0){class e extends HTMLElement{constructor(){super();let e=this.getAttributeNames(),t=this.attachShadow({mode:`closed`});this.input=o.createElement(`input`),this.input.type=`text`,t.appendChild(this.input);for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.input.setAttribute(e[t],this.getAttribute(e[t]));let n=new i.default;n.dataAttribute=``,n.mask(this.input)}attributeChangedCallback(e,t,n){this.input.setAttribute(e,n)}get value(){return this.input.value}set value(e){this.input.value=e}}r.default.customElements.define(`input-mask`,e)}})],t={};function n(r){var i=t[r];if(i!==void 0)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}var r={};return(function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(1),n(2),n(3),n(4),n(5),n(6),n(27),n(29),n(30);var t=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}e.default=t.default})(),r})()})}))(),1),ep=$f.default.default||$f.default;function tp(e,t){let n={minimumFractionDigits:2,maximumFractionDigits:2},r=[[e,{style:`currency`,currency:t}],[e,n],[void 0,n]];for(let[e,t]of r){let n;try{n=new Intl.NumberFormat(e,t)}catch{continue}let r=n.formatToParts(12345.6);return{currency:r.find(({type:e})=>e===`currency`)?.value??``,decimal:r.find(({type:e})=>e===`decimal`)?.value??`.`,group:r.find(({type:e})=>e===`group`)?.value??`,`,decimals:n.resolvedOptions().maximumFractionDigits??2}}return{currency:``,decimal:`.`,group:`,`,decimals:2}}var np=new WeakMap,rp=new WeakSet,ip=new WeakMap,ap=class extends F{static get styles(){return[...super.styles,a`
        .currency {
          white-space: nowrap;
        }

        .input-group__input {
          display: flex;
          align-items: center;
        }

        .clear {
          flex: none;
          margin-inline-end: var(--c-spacing-xs);
        }

        ::slotted(.money-placeholder) {
          color: var(--c-text-quiet);
        }
      `]}constructor(){super(),_(this,rp),this.currency=`USD`,this.locale=`en-US`,this.showCurrency=!0,this.clearable=!0,this.type=`text`,y(this,np,void 0),y(this,ip,()=>{this.modelValue=``,this.value=``,b(rp,this,op).call(this)?.inputmask?.setValue(``),b(rp,this,op).call(this)?.focus()}),this.inputMode=`decimal`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&b(rp,this,sp).call(this)}willUpdate(e){super.willUpdate(e),(!this.hasUpdated||e.has(`locale`)||e.has(`currency`))&&v(np,this,tp(this.locale.replaceAll(`_`,`-`),this.currency))}updated(e){super.updated(e),(e.has(`currency`)||e.has(`locale`)||e.has(`decimals`)||e.has(`decimalSeparator`)||e.has(`groupSeparator`)||e.has(`placeholder`))&&b(rp,this,sp).call(this),b(rp,this,op).call(this)?.classList.toggle(`money-placeholder`,!b(rp,this,cp).call(this))}disconnectedCallback(){b(rp,this,op).call(this)?.inputmask?.remove(),super.disconnectedCallback()}_inputGroupPrefixTemplate(){return this.showCurrency?p`<div class="input-group__prefix">
      <span class="currency"
        >${`(${this.currency}) ${g(np,this).currency}`}</span
      >
    </div>`:r}_inputGroupInputTemplate(){return p`<div class="input-group__input">
      <slot name="input"></slot>
      <craft-button
        class="clear"
        type="button"
        variant="plain"
        size="small"
        icon
        aria-label=${S(`Clear`)}
        ?hidden=${!this.clearable||this.disabled||!b(rp,this,cp).call(this)}
        @mousedown=${e=>e.preventDefault()}
        @click=${g(ip,this)}
      >
        <craft-icon name="xmark-large" style="font-size: 0.8em"></craft-icon>
      </craft-button>
    </div>`}};function op(){return this._inputNode}function sp(){let e=b(rp,this,op).call(this);if(!e)return;let t=String(this.modelValue??``),n=g(np,this);e.inputmask?.remove(),e.value=t,new ep({alias:`currency`,autoGroup:!1,clearMaskOnLostFocus:!0,digits:this.decimals??n.decimals,digitsOptional:!1,groupSeparator:this.groupSeparator??n.group,placeholder:this.placeholder||`0`,prefix:``,radixPoint:this.decimalSeparator??n.decimal}).mask(e)}function cp(){return this.modelValue!==``&&this.modelValue!=null}n([s()],ap.prototype,`currency`,void 0),n([s()],ap.prototype,`locale`,void 0),n([s({type:Number})],ap.prototype,`decimals`,void 0),n([s({attribute:`decimal-separator`})],ap.prototype,`decimalSeparator`,void 0),n([s({attribute:`group-separator`})],ap.prototype,`groupSeparator`,void 0),n([s({converter:gf,attribute:`show-currency`})],ap.prototype,`showCurrency`,void 0),n([s({converter:gf})],ap.prototype,`clearable`,void 0),customElements.get(`craft-input-money`)||customElements.define(`craft-input-money`,ap);var lp=new WeakSet,up=class extends F{static get styles(){return[...super.styles,a`
        .input-group__container {
          position: relative;
        }

        .input-group__suffix {
          position: absolute;
          inset-inline-end: var(--c-input-spacing-inline);
          inset-block-start: 50%;
          transform: translateY(calc(-50%));
          border: none;
        }

        ::slotted(.form-control) {
          ${Bn}
          --_input-end-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
          --_input-start-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
        }
      `]}constructor(){super(),_(this,lp),this.passwordRules=``,this._visible=!1,this.type=`password`,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?`text`:`password`},this.renderSuffix=()=>p`<craft-button
      type="button"
      icon
      size="small"
      variant="plain"
      @click="${this.reveal}"
    >
      <span class="icon"
        >${this._visible?p`<craft-icon
              name="eye-slash"
              label="${S(`Hide`)}"
            ></craft-icon>`:p`<craft-icon name="eye" label="${S(`Show`)}"></craft-icon>`}
      </span>
    </craft-button>`,this.type=`password`}connectedCallback(){super.connectedCallback(),b(lp,this,dp).call(this)}updated(e){super.updated(e),e.has(`passwordRules`)&&b(lp,this,dp).call(this)}get slots(){return{...super.slots,suffix:()=>({template:this.renderSuffix(),renderAsDirectHostChild:!0})}}};function dp(){if(this.passwordRules){this._inputNode?.setAttribute(`passwordrules`,this.passwordRules);return}this._inputNode?.removeAttribute(`passwordrules`)}n([s({attribute:`passwordrules`})],up.prototype,`passwordRules`,void 0),n([f()],up.prototype,`_visible`,void 0),customElements.get(`craft-input-password`)||customElements.define(`craft-input-password`,up);function fp(e,t){let n=t.left>e.x?t.left:t.right<e.x?t.right:void 0;if(!(n===void 0||t.height<=0))return[e,{x:n,y:t.top},{x:n,y:t.bottom}]}function pp(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function mp([e,t,n],r){let i=pp(r,e,t),a=pp(r,t,n),o=pp(r,n,e);return!((i<0||a<0||o<0)&&(i>0||a>0||o>0))}var hp=new WeakMap,gp=new WeakMap,_p=new WeakMap,vp=new WeakMap,yp=new WeakMap,bp=new WeakMap,U=new WeakSet,xp=new WeakMap,Sp=class{constructor(e){_(this,U),y(this,hp,new Map),y(this,gp,!1),y(this,_p,void 0),y(this,vp,void 0),y(this,yp,void 0),y(this,bp,void 0),y(this,xp,e=>{v(vp,this,{x:e.clientX,y:e.clientY}),g(yp,this)&&b(U,this,Op).call(this)}),this.options=e}get warm(){return g(gp,this)}requestOpen(e,{immediate:t=!1}={}){let n=b(U,this,Cp).call(this,e);if(b(U,this,kp).call(this),clearTimeout(n.closeTimer),n.closeTimer=void 0,n.exit=void 0,g(yp,this)?.element.contains(e.element)&&v(yp,this,void 0),!t&&b(U,this,Ep).call(this,e)){v(yp,this,e);return}if(b(U,this,wp).call(this,e),!(n.open||n.openTimer!==void 0)){if(t||g(gp,this)){b(U,this,Ap).call(this,e,n);return}n.openTimer=setTimeout(()=>{n.openTimer=void 0,b(U,this,Ap).call(this,e,n)},this.options.warmUpDelay)}}requestClose(e){let t=b(U,this,Cp).call(this,e);clearTimeout(t.openTimer),t.openTimer=void 0,g(yp,this)===e&&v(yp,this,void 0),!(!t.open||t.closeTimer!==void 0)&&(t.exit=g(vp,this)&&{...g(vp,this),at:Date.now()},b(U,this,Dp).call(this,e,t))}notifyClosed(e){let t=b(U,this,Cp).call(this,e);clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.openTimer=void 0,t.closeTimer=void 0,t.open&&(t.open=!1,b(U,this,Mp).call(this))}remove(e){let t=g(hp,this).get(e);t&&(clearTimeout(t.openTimer),clearTimeout(t.closeTimer),g(hp,this).delete(e),g(yp,this)===e&&v(yp,this,void 0),b(U,this,Mp).call(this))}reset(){for(let[e,t]of g(hp,this))clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.open&&e.setOpen(!1);g(hp,this).clear(),clearTimeout(g(_p,this)),v(_p,this,void 0),v(gp,this,!1),v(yp,this,void 0),v(vp,this,void 0),g(bp,this)?.abort(),v(bp,this,void 0)}};function Cp(e){let t=g(hp,this).get(e);return t||(t={open:!1},g(hp,this).set(e,t)),t}function wp(e){for(let[t,n]of g(hp,this))t===e||!n.open||t.element.contains(e.element)||(clearTimeout(n.closeTimer),n.closeTimer=void 0,b(U,this,jp).call(this,t,n))}function Tp(e,t){let{exit:n}=t,r=g(vp,this);if(!n||!r||Date.now()-n.at>=this.options.graceDelay)return!1;let i=e.overlayRect?.(),a=i&&fp(n,i);return!!a&&mp(a,r)}function Ep(e){for(let[t,n]of g(hp,this))if(!(t===e||!n.open||t.element.contains(e.element))&&b(U,this,Tp).call(this,t,n))return!0;return!1}function Dp(e,t){t.closeTimer=setTimeout(()=>{if(t.closeTimer=void 0,b(U,this,Tp).call(this,e,t)){b(U,this,Dp).call(this,e,t);return}b(U,this,jp).call(this,e,t),b(U,this,Op).call(this)},this.options.closeDelay)}function Op(){let e=g(yp,this);v(yp,this,void 0),e&&this.requestOpen(e)}function kp(){g(bp,this)||(v(bp,this,new AbortController),document.addEventListener(`pointermove`,g(xp,this),{capture:!0,passive:!0,signal:g(bp,this).signal}))}function Ap(e,t){t.open=!0,clearTimeout(g(_p,this)),v(_p,this,void 0),v(gp,this,!0),e.setOpen(!0)}function jp(e,t){t.open=!1,t.exit=void 0,e.setOpen(!1),b(U,this,Mp).call(this)}function Mp(){if(!(!g(gp,this)||g(_p,this)!==void 0)){for(let e of g(hp,this).values())if(e.open||e.openTimer!==void 0)return;v(_p,this,setTimeout(()=>{v(_p,this,void 0),v(gp,this,!1)},this.options.coolDownDelay))}}var Np=new Sp({warmUpDelay:250,closeDelay:150,coolDownDelay:500,graceDelay:300}),Pp=new Sp({warmUpDelay:500,closeDelay:300,coolDownDelay:500,graceDelay:300}),Fp=a`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--c-spacing-xs);
    min-width: 0;
    max-width: var(--c-link-max-width, 100%);
    vertical-align: bottom;
  }

  .text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  craft-button[slot='invoker'] {
    flex: none;
    color: var(--c-text-link, LinkText);
  }

  craft-button[slot='invoker'][aria-expanded='true'] {
    background-color: color-mix(
      in oklab,
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      var(--c-color-mix-hover)
    );
  }

  .details {
    display: grid;
    white-space: normal;
    gap: var(--c-spacing-sm);
    padding: var(--c-spacing-md);
    font-size: var(--c-text-base);
    font-weight: 400;
  }

  .details__header {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .details__heading {
    flex: 1;
    font-weight: 600;
  }

  .details__actions {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .details__address {
    color: var(--c-text-link, LinkText);
    text-decoration: var(--c-link-decoration);
    overflow-wrap: anywhere;
  }

  .details__address:hover {
    text-decoration: var(--c-link-decoration-hover);
  }

  .details__status {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`,Ip=new WeakMap,Lp=new WeakMap,Rp=new WeakMap,zp=new WeakSet,Bp=new WeakMap,Vp=new WeakMap,Hp=new WeakMap,Up=new WeakMap,Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,qp=class extends u{constructor(){super(),_(this,zp),this.label=S(`Link details`),this.anchor=null,this.copyState=w.Idle,this.detailsOpen=!1,y(this,Ip,!1),y(this,Lp,{element:this,setOpen:e=>{e?b(zp,this,em).call(this):this.detailsPopover?.hide()}}),y(this,Rp,new MutationObserver(()=>b(zp,this,Jp).call(this))),y(this,Bp,e=>{this.copyState=e.detail.state,e.detail.state===w.Success?this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,composed:!0,detail:{value:Qp.call(b(zp,this))}})):e.detail.state===w.Error&&this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0}))}),y(this,Vp,e=>{e.target===e.currentTarget&&(this.detailsOpen=e.type===`craft-show`,this.detailsOpen||b(zp,this,tm).call(this))}),y(this,Hp,e=>{e.pointerType!==`touch`&&(g(Ip,this)||!this.detailsOpen&&this.anchor)&&Pp.requestOpen(g(Lp,this))}),y(this,Up,e=>{e.pointerType!==`touch`&&Pp.requestClose(g(Lp,this))}),y(this,Wp,()=>{g(Ip,this)||Pp.requestClose(g(Lp,this))}),y(this,Gp,e=>{if(!g(Ip,this))return;let t=this.detailsPopover?.querySelector(`[slot="invoker"]`),n=!!t&&e.composedPath().includes(t);e.type===`focusin`&&n||(b(zp,this,tm).call(this),e.type===`click`&&n&&e.stopPropagation())}),y(this,Kp,e=>{e.key===`Escape`&&g(Ip,this)&&(e.preventDefault(),e.stopPropagation(),this.detailsPopover?.hide())}),this.addEventListener(`pointerenter`,g(Hp,this)),this.addEventListener(`pointerleave`,g(Up,this)),this.addEventListener(`pointerdown`,g(Wp,this))}connectedCallback(){super.connectedCallback(),g(Rp,this).observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`href`,`target`,`rel`]}),b(zp,this,Jp).call(this)}disconnectedCallback(){g(Rp,this).disconnect(),b(zp,this,tm).call(this),Pp.remove(g(Lp,this)),super.disconnectedCallback()}render(){let e=Zp.call(b(zp,this)),t=$p.call(b(zp,this)),n=S(`Open in a new tab`);return p`
      ${this.anchor?p`<craft-popover
            label=${e.heading}
            placement="bottom-start"
            @craft-show=${g(Vp,this)}
            @craft-hide=${g(Vp,this)}
            @click=${{handleEvent:g(Gp,this),capture:!0}}
            @focusin=${g(Gp,this)}
          >
            <craft-button
              slot="invoker"
              type="button"
              variant="plain"
              size="xsmall"
              icon
              part="details-button"
            >
              <craft-icon
                name=${e.icon}
                label=${[this.label,Yp.call(b(zp,this))].filter(Boolean).join(` `)}
              ></craft-icon>
            </craft-button>
            <div slot="content" class="details">
              <div class="details__header">
                <span class="details__heading">${e.heading}</span>
                <span class="details__actions">
                  <craft-button
                    id="open-button"
                    class="details__open"
                    href=${this.anchor.href}
                    target="_blank"
                    rel=${this.anchor.rel||r}
                    variant="plain"
                    size="small"
                    icon
                  >
                    <craft-icon
                      name="arrow-up-right-from-square"
                      label=${n}
                    ></craft-icon>
                  </craft-button>
                  <craft-button
                    id="copy-button"
                    class="details__copy"
                    type="button"
                    variant="plain"
                    size="small"
                    icon
                    .action=${{type:`clipboard`,value:Qp.call(b(zp,this))}}
                    @craft-state-change=${g(Bp,this)}
                  >
                    <craft-icon
                      name=${t.icon}
                      label=${t.label}
                    ></craft-icon>
                  </craft-button>
                  <craft-tooltip for="open-button" invoker-relation="label"
                    >${n}</craft-tooltip
                  >
                  <craft-tooltip for="copy-button" invoker-relation="label"
                    >${t.label}</craft-tooltip
                  >
                </span>
              </div>
              <a
                class="details__address"
                href=${this.anchor.href}
                target=${this.anchor.target||r}
                rel=${this.anchor.rel||r}
                >${Qp.call(b(zp,this))}</a
              >
              <span class="details__status" role="status"
                >${this.copyState===w.Idle?``:t.label}</span
              >
            </div>
          </craft-popover>`:r}
      <span class="text" part="text"
        ><slot @slotchange=${()=>b(zp,this,Jp).call(this)}></slot
      ></span>
    `}};function Jp(){this.anchor=this.querySelector(`a[href]`),this.requestUpdate()}function Yp(){return(this.anchor?.textContent??``).replace(/\s+/g,` `).trim()}function Xp(){return this.anchor?.protocol??``}function Zp(){switch(Xp.call(b(zp,this))){case`mailto:`:return{icon:`envelope`,heading:S(`Email`)};case`tel:`:return{icon:`phone`,heading:S(`Phone`)};default:return{icon:`link`,heading:S(`Link`)}}}function Qp(){let e=this.anchor?.href??``;return Xp.call(b(zp,this))===`mailto:`||Xp.call(b(zp,this))===`tel:`?decodeURIComponent(e.slice(Xp.call(b(zp,this)).length).split(`?`)[0]??``):e}function $p(){switch(this.copyState){case w.Success:return{icon:`check`,label:S(`Copied`)};case w.Error:return{icon:`xmark-large`,label:S(`Copy failed`)};default:return{icon:`custom-icons/clone-dashed`,label:S(`Copy`)}}}function em(){v(Ip,this,!0),document.addEventListener(`keydown`,g(Kp,this),!0),this.detailsPopover?.show()}function tm(){v(Ip,this,!1),Pp.notifyClosed(g(Lp,this)),document.removeEventListener(`keydown`,g(Kp,this),!0)}qp.styles=[te,Fp],n([s()],qp.prototype,`label`,void 0),n([f()],qp.prototype,`anchor`,void 0),n([f()],qp.prototype,`copyState`,void 0),n([f()],qp.prototype,`detailsOpen`,void 0),n([h(`craft-popover`)],qp.prototype,`detailsPopover`,void 0),customElements.get(`craft-link`)||customElements.define(`craft-link`,qp);var nm=class extends u{constructor(...e){super(...e),this.error=``,this.pluginName=``}render(){return p`
      <p class="error" role="alert">${this.error}</p>
      ${this.pluginName?p`<div class="install-plugin">
            <div class="icon" aria-hidden="true"><slot name="icon"></slot></div>
            <div class="plugin">
              <h3>${this.pluginName}</h3>
              <slot name="action"></slot>
            </div>
          </div>`:r}
    `}};nm.styles=a`
    :host {
      display: block;
      margin-block: 14px;
      margin-inline: 0;
      padding-block: 7px;
      padding-inline: 10px;
      max-width: 400px;
      border: var(--pane-border);
      border-radius: var(--pane-border-radius);
      background: var(--gray-050, var(--c-color-neutral-fill-quiet));
      box-shadow: var(--pane-shadow, var(--c-shadow-sm));
      overflow-wrap: break-word;
      box-sizing: border-box;
    }

    .error {
      margin: 0;
      color: var(--error-color, var(--c-color-danger-on-quiet));
    }

    .install-plugin {
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr);
      gap: 8px;
      margin-block: 7px -7px;
      border-block-start: 1px solid
        var(--border-hairline, var(--c-color-border-quiet));
      padding-block: 10px;
    }

    .icon {
      width: 32px;
      height: 32px;
    }

    ::slotted([slot='icon']) {
      width: 100%;
      height: 100%;
    }

    .plugin {
      display: flex;
      align-items: center;
    }

    h3 {
      flex: 1;
      margin-block: 8px;
      margin-inline: 0;
    }

    ::slotted([slot='action']) {
      margin: 0;
    }
  `,n([s()],nm.prototype,`error`,void 0),n([s({attribute:`plugin-name`})],nm.prototype,`pluginName`,void 0),customElements.get(`craft-missing-component`)||customElements.define(`craft-missing-component`,nm);var rm=a`
  .badge-indicator {
    --_badge-color: var(--c-color-info-fill-loud);
    --_text-color: var(--c-color-info-on-loud);
    --badge-size: calc(8rem / 16);
    display: inline-flex;
    min-width: var(--badge-size);
    min-height: var(--badge-size);
    justify-content: center;
    align-items: center;
    background-color: var(--_badge-color);
    color: var(--_text-color);
    border-radius: var(--c-radius-full);
    /* No ring unless asked for, as where a marker overlaps something else. */
    border: var(--badge-border-width, 0) solid
      var(--badge-border-color, var(--c-surface-default));
  }

  .badge-indicator--secondary {
    --_badge-color: var(--c-color-warning-fill-loud);
  }

  .badge-indicator--inverse {
    --_badge-color: var(--c-color-neutral-fill-normal);
    --_text-color: var(--c-color-neutral-on-normal);
  }

  .badge-indicator--with-number {
    --badge-size: var(--c-size-icon-md);
    padding-block: calc(2rem / 16);
    /* Room either side of a longer count, so its digits don't touch the edge. */
    padding-inline: calc(4rem / 16);
  }

  .number {
    display: inline-flex;
    font-size: var(--c-text-xs);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
  }
`,im=new WeakMap,am=class extends u{constructor(...e){super(...e),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.max=99,this.variant=`primary`,y(this,im,`badge-label-${Math.floor(Math.random()*1e9).toString()}`)}connectedCallback(){super.connectedCallback(),this.id||=`badge-${Math.floor(Math.random()*1e9).toString()}`}showCount(){return this.badgeCount!==null&&this.badgeCount>0}truncatedNumber(){let e=this.badgeCount??0,t=e=>new Intl.NumberFormat(document.documentElement.lang||void 0).format(e);return e>this.max?`${t(this.max)}+`:t(e)}getBadgeRole(){return this.altText?`img`:r}renderBadgeContents(){return p`
      ${this.showCount()?p`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:r}
      ${this.altText?p`
            <sl-visually-hidden id=${g(im,this)}
              >${this.altText}</sl-visually-hidden
            >
          `:r}
    `}render(){return p`
      <div
        part="badge"
        class="${E({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":this.variant===`secondary`,"badge-indicator--inverse":this.variant===`inverse`})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?g(im,this):r}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};am.styles=[rm],n([s({attribute:`alt-text`})],am.prototype,`altText`,void 0),n([s({attribute:`badge-count`})],am.prototype,`badgeCount`,void 0),n([s({attribute:`badge-count-suffix`})],am.prototype,`badgeCountSuffix`,void 0),n([s({type:Number})],am.prototype,`max`,void 0),n([s()],am.prototype,`variant`,void 0),customElements.get(`craft-badge-indicator`)||customElements.define(`craft-badge-indicator`,am);var om=Symbol.for(``),sm=e=>{if(e?.r===om)return e?._$litStatic$},cm=e=>({_$litStatic$:e,r:om}),lm=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:om}),um=new Map,dm=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=sm(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=um.get(e))===void 0&&(o.raw=o,um.set(e,t=o)),n=s}return e(t,...n)})(p),fm=a`
  :host {
    --_padding-inline: var(--c-spacing-md);
    /* The icon column of a row with a prefix. */
    --_prefix-size: calc(24rem / 16);
    /* Enough to center the icon column in a touch target, border included. */
    --_padding-block: calc(
      (var(--c-size-touch-target) - var(--_prefix-size) - var(--_rail-border) *
          2) /
        2
    );
    /* The space between the icon column and the label (tighter than the row's gap). */
    --_prefix-gap: var(--c-spacing-sm);
    /* The rule down the side of an inline subnav. */
    --_subnav-rule: 2px;
    /* The square a collapsed row occupies, border included. The row draws a
       transparent border to keep room for its focus state. */
    --_rail-border: 1px;
    --_rail-size: var(--c-size-touch-target);

    border-radius: var(--c-radius-md);
  }

  .nav-item {
    display: grid;
    gap: var(--c-spacing-md);
    /* Two tracks: an item with no icon has no prefix to leave room for. */
    grid-template-columns: 1fr auto;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding-inline: var(--_padding-inline);
    padding-block: var(--_padding-block);
    border: 1px solid transparent;
    border-radius: var(--c-radius-md);
    position: relative;
    /* A full touch target whether or not there's an icon to fill one. */
    box-sizing: border-box;
    min-block-size: var(--c-size-touch-target);

    /*
     * Expanded, the focusable element is the label inside the row, so the ring
     * is drawn on the row around it. Collapsed, the row *is* the focusable
     * element — without this second selector it fell through to the browser's
     * default outline, which is a different width and offset from the one
     * craft-button draws, so the ring changed size as you tabbed onto the
     * chevron.
     */
    &:focus-visible,
    &:has(.nav-item__action-item:focus-visible) {
      outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
      outline-offset: var(--c-focus-outline-offset);
    }
  }

  .nav-item__action-item {
    text-decoration: none;
    color: inherit;
    ${Si}

    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }

    &:focus-visible {
      outline: none;
    }
  }

  /*
   * An item that only discloses its flyout is a button, so it can be focused.
   * Zero specificity, so the rules that shape the row still win.
   */
  :where(button.nav-item, button.nav-item__action-item) {
    appearance: none;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    padding: 0;
    text-align: start;
    cursor: pointer;
  }

  craft-badge-indicator {
    --badge-border-width: 2px;
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  .nav-item__prefix craft-button,
  /* Above the label's full-row click target, or a click meant for a control
     would follow the link instead. */
  .nav-item__suffix craft-button,
  ::slotted([slot='actions']) {
    position: relative;
    z-index: 1;
    font-size: 1em;
  }

  .nav-item--prefixed {
    padding-inline: var(--c-spacing-sm);
    grid-template-columns: var(--_prefix-size) 1fr auto;

    /* Pull the label back across the row's gap, to the tighter prefix gap. */
    > .nav-item__action-item {
      margin-inline-start: calc(var(--_prefix-gap) - var(--c-spacing-md));
    }
  }

  .nav-item--flush {
    margin-inline-start: calc(var(--_padding-inline) * -1);
  }

  /*
   * A heading names the rows under it rather than being one of them, so it's
   * smaller and heavier than they are. One rule for both kinds — a group
   * row in the list, and the label heading a collapsed item's flyout — so the
   * two can't drift apart again.
   *
   * The type goes on the row, not the host, or the subnav nested inside would
   * inherit it and every child would read as a heading too.
   */
  :host([group]) .nav-item,
  .flyout__label {
    font-size: var(--c-text-sm);
    font-weight: bold;
  }

  /*
   * A group heading sits with the rows it heads: the space above separates it
   * from whatever came before, the space below only sets it off from what it
   * heads. The flyout's label takes its spacing from the flyout grid.
   */
  :host([group]) {
    border-radius: 0;
    margin-block-start: var(--c-spacing-sm);
  }

  :host([group]) .nav-item {
    border-radius: 0;
    padding-block: var(--_padding-block) var(--c-spacing-xs);
    min-block-size: 0;
  }

  :host([active]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border: 1px solid var(--c-color-accent-border-normal);
  }

  /*
   * Selected parent: on the trail to the page you're on, but not the page
   * itself. Stub values — a quieter treatment than the child's.
   */
  :host([active]:not([current])) .nav-item {
    background-color: transparent;
    border-color: transparent;

    /* Starts at the row's outer edge, in line with its hover background. */
    &:before {
      content: '';
      position: absolute;
      inset-inline-start: calc(var(--_rail-border) * -1);
      inset-block-start: 12%;
      width: calc(3rem / 16);
      height: 76%;
      border-radius: calc(2rem / 16);
      background-color: var(--c-color-accent-fill-loud);
    }
  }

  /*
   * Selected child: the page you're on. Stub values.
   */
  :host([current]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
    color: var(--c-color-accent-on-quiet);
  }

  /* A badge on the current row takes the row's tint. */
  :host([current]) ::slotted(craft-badge-indicator) {
    --c-color-neutral-fill-normal: var(--c-color-accent-fill-normal);
    --c-color-neutral-on-normal: var(--c-color-accent-on-normal);
  }

  /* Not on the page you're on: its selected fill is the state to show. */
  :host(:not([current]))
    .nav-item:not(.nav-item--static):hover:not(:has(craft-button:hover)) {
    background-color: color-mix(in srgb, currentColor, transparent 95%);
  }

  /* No href: render as a plain label, not an interactive item. */
  .nav-item--static {
    cursor: default;
  }

  .nav-item__prefix {
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    width: 100%;
  }

  .nav-item__suffix {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: var(--c-spacing-xs);
  }

  .active-indicator {
    display: inline-block;
    aspect-ratio: 1;
    width: calc(4rem / 16);
    border-radius: var(--c-radius-full);
    background-color: currentColor;

    :host([active]) & {
      width: calc(6rem / 16);
    }
  }

  /*
   * A child's label lines up with its parent's. The parent's label sits past
   * its padding, its icon column and the gap after it; a child's sits past this
   * margin, the rule, this padding and the child's own padding. The margin is
   * whatever makes the two add up. Both rows carry the same border, so it
   * cancels out.
   */
  :host(:not([group])) .subnav {
    --_subnav-indent: calc(
      var(--c-spacing-sm) + var(--_prefix-size) + var(--_prefix-gap) -
        var(--_subnav-rule) - var(--c-spacing-sm) - var(--_padding-inline)
    );
    position: relative;
    margin-block-start: var(--c-spacing-sm);
    margin-inline-start: var(--_subnav-indent);
    padding-inline: var(--c-spacing-sm);
    border-inline-start: var(--_subnav-rule) solid transparent;
  }

  /*
   * A hairline down the subnav, centered on the selected parent's indicator:
   * back across the indent and rule to the parent row's inner edge (past its
   * border). The indicator's center is half a pixel past that edge, as is the
   * hairline's.
   */
  :host(:not([group]):not([icon-only])) .subnav::before {
    content: '';
    position: absolute;
    inset-block: 0;
    inset-inline-start: calc(
      var(--_rail-border) - var(--_subnav-indent) - var(--_subnav-rule)
    );
    width: 1px;
    background-color: var(--c-color-neutral-border-quiet);
  }

  /*
   * Collapsed to a rail there's nowhere to indent a subnav, so it moves into a
   * popover. The label leads it as the group's heading, standing in for the
   * tooltip a childless item would get.
   */
  .flyout {
    display: grid;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-sm);
  }

  /* Quieter than the label it trails, and sized to the toggle chevron it
     stands in for. */
  .flyout-indicator {
    font-size: calc(10rem / 16);
    color: var(--c-color-neutral-on-quiet, currentcolor);
  }

  .flyout__label {
    padding-inline: var(--c-spacing-sm);
  }

  /* Smaller than the row's own icons: it marks the item, it isn't one. */
  .subnav-toggle craft-icon {
    font-size: calc(10rem / 16);
  }

  /*
   * Collapsed to a rail
   *
   * The row is the icon and nothing else, so everything that would sit beside
   * a label has to find somewhere else to be: the subnav loses its indent, the
   * disclosure moves on top of the icon, and a heading gives way to a rule.
   */
  .nav-item--icon {
    box-sizing: border-box;
    width: var(--_rail-size);
    display: block;
    text-decoration: none;
    border: var(--_rail-border) solid transparent;
    aspect-ratio: 1;
    padding: 0;

    .nav-item__suffix {
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }

  :host([icon-only]) {
  }

  :host([icon-only]) li {
    position: relative;
  }

  /*
   * A rail shows one row per branch, so no child row is there to carry the
   * current page's fill. The branch carries it instead, whether the page is the
   * branch itself or somewhere inside it.
   */
  :host([icon-only][active]) .nav-item {
    background-color: var(--c-color-accent-fill-quiet);
    border-color: var(--c-color-accent-border-normal);
    color: var(--c-color-accent-on-quiet);

    &::before {
      content: none;
    }
  }

  /* No room to indent, so the stand-ins sit directly under their parent. */
  :host([icon-only]) .subnav {
    margin: 0;
    border-inline-start: none;
    padding-inline: 0;
  }

  /*
   * Without that indent nothing says the stand-ins belong to the icon above
   * them, so a rule runs down beside them: the width of the active indicator,
   * and pulled clear of the column the same way, so the icons stay centered on
   * the rail and the two line up when a child is the current page.
   *
   * Not on a group — its children are already inside the branch's own subnav,
   * and a second rule would land on top of the first.
   */
  :host([icon-only]:not([group])) .subnav {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;
      width: calc(3rem / 16);
      border-radius: calc(2rem / 16);
      background-color: color-mix(in srgb, currentcolor, transparent 90%);
      transform: translateX(-150%);
    }
  }

  /*
   * A row has space for one thing, so the disclosure sits over the icon rather
   * than beside or below it — invisible and click-through until it's tabbed
   * to, since a pointer has hover for the flyout and the icon itself to click.
   *
   * Opacity rather than visibility or display: those would take it out of the
   * tab order, and then nothing could ever focus it into view.
   *
   * The button stays 24px square for 2.5.8 Target Size even though the chevron
   * in it is much smaller.
   */
  .rail-toggle {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    z-index: 1;
    display: grid;
    place-items: center;
    /* The row's whole box, so the chevron lands dead on the icon it replaces
       — and the button fills it, so the focus ring appears exactly where the
       row's own would. Well past the 24px 2.5.8 floor either way. */
    width: var(--_rail-size);
    height: var(--_rail-size);
    /* The row's ring offset, which the plain button would otherwise inset. */
    --_row-focus-outline-offset: var(--c-focus-outline-offset);

    /* A plain button is transparent, which would leave only a bare chevron
       and its ring to show a keyboard user where they are. */
    craft-button {
      --c-focus-outline-offset: var(--_row-focus-outline-offset);
      width: 100%;
      height: 100%;
      background-color: var(--c-color-neutral-fill-quiet);
    }

    &:not(:focus-within) {
      opacity: 0;
      pointer-events: none;
    }

    /*
     * The chevron stands in for the icon in the same square, so it matches its
     * size. craft-button[icon][size=small] shrinks its contents to 0.8em and
     * craft-icon shrinks again by the same, which would leave the chevron a
     * fifth smaller than the icon it replaces — so cancel the button's share
     * and keep the icon's.
     */
    craft-button {
      font-size: 1em;
    }

    craft-icon {
      font-size: 0.8em;
    }
  }

  /* The chevron stands in for the icon while it's up, so there's nothing
     underneath for it to have to read against. */
  :host([icon-only]) li:has(.rail-toggle:focus-within) .nav-item__prefix {
    opacity: 0;
  }

  /* A heading's stand-in: the rule between one run of icons and the next. The
     space above belongs to the rule itself, not a margin carried over from the
     expanded heading. */
  :host([group][icon-only]) {
    margin-block-start: 0;
    padding-block-start: var(--c-spacing-sm);
  }

  .rail-separator {
    position: relative;
    border: 0;
    width: 60%;
    margin-block: 0;
    margin-inline: auto;
    inset-block-start: calc(var(--c-spacing-sm) * -1);
    border-block-start: 1px solid
      color-mix(transparent, var(--c-color-neutral-border-quiet));
  }

  /*
   * A letter standing in for an icon: a filled chip, so it reads as a mark
   * rather than as a word cut short, and sits quieter than the real icons it
   * shares a column with.
   *
   * The fill is mixed from currentcolor rather than a surface token — the nav
   * takes its background from whatever it's placed in, so there's nothing
   * fixed to match.
   */
  .nav-item__initial {
    display: grid;
    place-items: center;
    width: calc(14rem / 16);
    aspect-ratio: 1;
    border-radius: var(--c-radius-full);
    background-color: color-mix(in srgb, currentcolor, transparent 88%);
    font-size: var(--c-text-xs);
    font-weight: bold;
    line-height: 1;
  }
`,pm=new WeakMap,mm=new WeakMap,hm=new WeakMap,gm=new WeakSet,_m=new WeakMap,vm=new WeakMap,ym=new WeakMap,bm=new WeakMap,xm=new WeakMap,Sm=new WeakMap,Cm=class e extends u{get labelNodes(){return Array.from(this.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`))}get labelText(){return this.labelNodes.map(e=>e.textContent??``).join(` `).replace(/\s+/g,` `).trim()}get hasLabel(){return this.labelNodes.some(e=>e.nodeType!==Node.TEXT_NODE||!!e.textContent?.trim())}get itemId(){return`item-${this.id}`}get subnavId(){return`${this.id}-subnav`}get ariaCurrentState(){return this.current?this.href?`page`:`true`:this.active?`true`:`false`}constructor(){super(),_(this,gm),this.active=!1,this.current=!1,this.button=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState=`closed`,this.group=!1,this.togglePosition=`suffix`,this.subnavState=`closed`,this.flyoutOpen=!1,y(this,pm,{element:this,setOpen:e=>{this.flyoutOpen=e},overlayRect:()=>this.shadowRoot?.querySelector(`.flyout`)?.getBoundingClientRect()}),y(this,mm,void 0),this._lightDom=new ae(this,{characterData:!0}),y(this,hm,void 0),this.fitFlyout=()=>{let t=this.shadowRoot?.querySelector(`craft-popover`),n=this.shadowRoot?.querySelector(`.flyout`);if(!t||!n)return;let{top:r}=n.getBoundingClientRect(),i=window.innerHeight-r-e.flyoutViewportMargin;if(!window.innerHeight||i<=0){t.style.removeProperty(`--popover-max-block-size`);return}t.style.setProperty(`--popover-max-block-size`,`${i}px`)},y(this,_m,()=>{Np.requestOpen(g(pm,this))}),y(this,vm,e=>{let t=e.relatedTarget;t instanceof Node&&(t===this||this.contains(t))||Np.requestClose(g(pm,this))}),y(this,ym,e=>{let t=e.target.opened===!0;this.flyoutOpen=t,t||Np.notifyClosed(g(pm,this))}),y(this,bm,e=>{e.target===e.currentTarget&&e.stopPropagation()}),y(this,xm,e=>{e instanceof KeyboardEvent&&e.key!==`Enter`&&e.key!==` `||e.stopPropagation()}),y(this,Sm,e=>{e.preventDefault(),e.stopPropagation(),this.flyoutOpen?(this.flyoutOpen=!1,Np.notifyClosed(g(pm,this))):Np.requestOpen(g(pm,this),{immediate:!0})}),this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`),this.subnavState=this.active||this.initialState===`open`?`open`:`closed`;let{signal:e}=v(mm,this,new AbortController);this.addEventListener(`mouseenter`,g(_m,this),{signal:e}),this.addEventListener(`mouseleave`,g(vm,this),{signal:e}),this.addEventListener(`focusout`,g(vm,this),{signal:e})}updated(e){e.has(`flyoutOpen`)&&(this.flyoutOpen?b(gm,this,wm).call(this):b(gm,this,Tm).call(this))}willUpdate(e){(e.has(`active`)||e.has(`initialState`))&&(this.subnavState=this.active||this.initialState===`open`?`open`:`closed`)}disconnectedCallback(){g(mm,this)?.abort(),g(hm,this)?.abort(),Np.remove(g(pm,this)),super.disconnectedCallback()}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState=this.subnavState===`open`?`closed`:`open`}actionTag(e){return this.href?lm`a`:e||this.button?lm`button`:lm`span`}focus(e){let t=this.shadowRoot?.querySelector(`.nav-item__action-item:is(a, button), .nav-item:is(a, button)`);t?t.focus(e):super.focus(e)}buttonType(e){return!this.href&&(e||this.button)?`button`:r}isStatic(e){return!this.href&&!e&&!this.button}renderIconItem(e,t){let n=this.actionTag(t);return dm`
      <${n}
        class="${E({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":this.isStatic(t)})}"
        id="${this.itemId}"
        type="${this.buttonType(t)}"
        href="${ft(this.href||void 0)}"
        aria-current="${this.href||this.button?this.ariaCurrentState:r}"
        aria-expanded="${t?this.flyoutOpen?`true`:`false`:r}"
        aria-controls="${t?this.subnavId:r}"
        aria-label="${(this.href||e||this.button)&&this.labelText?this.labelText:r}"
        @click="${t&&!this.href?g(Sm,this):r}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(!1)}
      </${n}>
      ${t?p`<div class="rail-toggle">${this.renderFlyoutToggle()}</div>`:r}
      ${t?this.renderFlyout(!0):p`<craft-tooltip
              for="${this.itemId}"
              placement="right"
              @craft-show=${g(bm,this)}
              @craft-hide=${g(bm,this)}
              @craft-after-show=${g(bm,this)}
              @craft-after-hide=${g(bm,this)}
              ><slot></slot
            ></craft-tooltip>`}
    `}renderFlyout(e){return p`
      <craft-popover
        for="${this.itemId}"
        placement="right-start"
        without-invoker-aria
        .opened="${this.flyoutOpen}"
        @opened-changed="${g(ym,this)}"
        @craft-show=${g(bm,this)}
        @craft-hide=${g(bm,this)}
        @craft-after-show=${g(bm,this)}
        @craft-after-hide=${g(bm,this)}
      >
        <div class="flyout" id="${this.subnavId}">
          ${e?p`<div class="flyout__label"><slot></slot></div>`:r}
          <slot name="subnav"></slot>
        </div>
      </craft-popover>
    `}renderSubnavToggle(){return p`
      <craft-button
        @click="${this.toggleSubnav}"
        @mousedown="${g(xm,this)}"
        @mouseup="${g(xm,this)}"
        @keydown="${g(xm,this)}"
        @keyup="${g(xm,this)}"
        variant="${Gn.Plain}"
        icon
        size="small"
        aria-controls="${this.subnavId}"
        aria-expanded="${this.subnavState===`open`?`true`:`false`}"
        class="subnav-toggle"
        aria-labelledby="${this.iconOnly?`${this.id}-toggle-icon`:`${this.id}-toggle-icon ${this.id}-label`}"
      >
        <craft-icon
          id="${this.id}-toggle-icon"
          name="${this.subnavState===`closed`?`chevron-down`:`chevron-up`}"
          label="${S(`Toggle subnavigation`)}"
        ></craft-icon>
      </craft-button>
    `}renderPrefix(e=!1){return e&&this.togglePosition===`prefix`?p`
        <span class="nav-item__prefix">${this.renderSubnavToggle()}</span>
      `:p`
      <span class="nav-item__prefix">
        <slot name="prefix">
          <slot name="icon">
            ${this.icon?p` <craft-icon
                  name="${this.icon}"
                  class="nav-icon"
                ></craft-icon>`:this.renderInitial()}
          </slot>
          ${this.indicator?p`<craft-badge-indicator
                altText="${S(`Has Notifications`)}"
              />`:r}
        </slot>
      </span>
    `}renderFlyoutToggle(){return p`
      <craft-button
        class="flyout-toggle"
        @click="${g(Sm,this)}"
        @mousedown="${g(xm,this)}"
        @mouseup="${g(xm,this)}"
        @keydown="${g(xm,this)}"
        @keyup="${g(xm,this)}"
        variant="${Gn.Plain}"
        icon
        size="small"
        aria-controls="${this.subnavId}"
        aria-expanded="${this.flyoutOpen?`true`:`false`}"
        aria-label="${S(`Show submenu for “{item}”`,{item:this.labelText})}"
      >
        <craft-icon
          class="flyout-indicator"
          name="chevron-right"
          aria-hidden="true"
        ></craft-icon>
      </craft-button>
    `}renderInitial(){let e=this.iconOnly?this.labelText.at(0):null;return e?p`<span class="nav-item__initial" aria-hidden="true"
          >${e.toLocaleUpperCase()}</span
        >`:r}renderSuffix(e=!1,t=!1){return p`
      <div class="nav-item__suffix">
        ${this.iconOnly?r:p`<slot
              name="actions"
              @mousedown="${g(xm,this)}"
              @mouseup="${g(xm,this)}"
              @click="${g(xm,this)}"
              @keydown="${g(xm,this)}"
              @keyup="${g(xm,this)}"
            ></slot>`}
        <slot name="suffix">
          ${e&&this.togglePosition===`suffix`?this.renderSubnavToggle():r}
          ${t?this.renderFlyoutToggle():r}
        </slot>
      </div>
    `}renderItem(e,t,n){return dm`
      <div
        class="${E({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":this.isStatic(n)})}"
        id="${this.itemId}"
      >
        ${t?this.renderPrefix(e):r}
        ${this.renderInteractiveItem(n)}
        ${this.renderSuffix(e,n)}
      </div>
    `}renderInteractiveItem(e){let t=this.actionTag(e);return dm`
      <${t}
        class="nav-item__action-item"
        type="${this.buttonType(e)}"
        href="${ft(this.href||void 0)}"
        aria-current="${this.href||this.button?this.ariaCurrentState:r}"
        aria-expanded="${e?this.flyoutOpen?`true`:`false`:r}"
        aria-controls="${e?this.subnavId:r}"
        @click="${e&&!this.href?g(Sm,this):r}"
      >
        <slot id="${this.id}-label"></slot>
      </${t}>
    `}render(){let e=oe(this,`subnav`),t=this.subnavDisplay??(this.iconOnly?`flyout`:`inline`),n=e&&t===`flyout`,i=e&&!n&&!this.group&&(this.iconOnly||this.hasLabel),a=i&&this.togglePosition===`prefix`||!!this.icon||this.indicator||oe(this,`prefix`,`icon`),o=!i||this.subnavState===`open`;return this.group&&this.iconOnly?p`
        <li role="presentation">
          <hr
            class="rail-separator"
            aria-label="${this.labelText||r}"
          />
          ${e?p`<div class="subnav" id="${this.subnavId}">
                <slot name="subnav"></slot>
              </div>`:r}
        </li>
      `:p`
      <li role="presentation">
        ${this.iconOnly?this.renderIconItem(e,n):this.renderItem(i,a,n)}
        ${this.iconOnly&&i?p`<div class="rail-toggle">${this.renderSubnavToggle()}</div>`:r}
        ${!this.iconOnly&&n?this.renderFlyout(!1):r}
        ${e&&!n?p`
              <div
                class="subnav"
                id="${this.subnavId}"
                style="${Zn({display:o?`block`:`none`})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:r}
      </li>
    `}};function wm(){b(gm,this,Tm).call(this);let{signal:e}=v(hm,this,new AbortController);window.addEventListener(`resize`,this.fitFlyout,{signal:e}),requestAnimationFrame(this.fitFlyout)}function Tm(){g(hm,this)?.abort(),v(hm,this,void 0),this.shadowRoot?.querySelector(`craft-popover`)?.style.removeProperty(`--popover-max-block-size`)}Cm.styles=fm,Cm.flyoutViewportMargin=16,n([s()],Cm.prototype,`icon`,void 0),n([s()],Cm.prototype,`href`,void 0),n([s({type:Boolean,reflect:!0})],Cm.prototype,`active`,void 0),n([s({type:Boolean,reflect:!0})],Cm.prototype,`current`,void 0),n([s({type:Boolean,reflect:!0})],Cm.prototype,`button`,void 0),n([s({type:Boolean})],Cm.prototype,`external`,void 0),n([s({type:Boolean})],Cm.prototype,`indicator`,void 0),n([s()],Cm.prototype,`id`,void 0),n([s({reflect:!0,type:Boolean,attribute:`icon-only`})],Cm.prototype,`iconOnly`,void 0),n([s({type:Boolean})],Cm.prototype,`flush`,void 0),n([s({reflect:!0,attribute:`initial-state`})],Cm.prototype,`initialState`,void 0),n([s({type:Boolean,reflect:!0})],Cm.prototype,`group`,void 0),n([s({attribute:`toggle-position`})],Cm.prototype,`togglePosition`,void 0),n([s({attribute:`subnav-display`,reflect:!0})],Cm.prototype,`subnavDisplay`,void 0),n([f()],Cm.prototype,`subnavState`,void 0),n([f()],Cm.prototype,`flyoutOpen`,void 0),customElements.get(`craft-nav-item`)||customElements.define(`craft-nav-item`,Cm);var Em=class extends u{render(){return p`
      <ul class="nav-list">
        <slot></slot>
      </ul>
    `}};Em.styles=a`
    :host {
      display: block;
    }

    .nav-list {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
      gap: var(--c-spacing-xs);
    }
  `,customElements.get(`craft-nav-list`)||customElements.define(`craft-nav-list`,Em);var Dm=a`
  :host {
    display: block;
    /*
      Pairs with the clip overflow below: a pane clips its own content, so it
      should never widen past its container either. As a flex/grid item the
      default \`min-width: auto\` would let wide content (a many-columned
      table) push it out of the layout instead — and would stop the content's
      own scroll container from ever engaging.
    */
    min-width: 0;

    /*
      Private surface vars. Each appearance/variant re-declares only what it
      changes, and every declaration lives in a \`:host\` rule so an outer-tree
      rule or inline style on the host (e.g. \`--c-pane-background: …\`) still
      wins — shadow-tree \`:host\` rules always lose to the outer tree.
    */
    --_pane-background: var(--c-pane-background, var(--c-surface-raised));
    --_pane-color: var(--c-pane-text, inherit);
    --_pane-border-color: var(--c-pane-border-color, transparent);
    --_pane-border-width: var(--c-pane-border-width, 1px);
    --_pane-border-style: var(--c-pane-border-style, solid);
    --_pane-radius: var(--c-pane-radius, var(--c-radius-md));
    --_pane-shadow: var(--c-pane-shadow, none);
    --_pane-max-block-size: var(--c-pane-max-block-size, none);
    --_pane-overflow: clip;
    /*
      Fallback spacing. The \`padding\` property re-declares this on the base
      element on every render, so this only applies if that ever goes missing.
    */
    --_pane-spacing: var(--c-pane-padding, var(--c-spacing-lg));
    --_pane-divider-color: var(
      --c-pane-divider-color,
      var(--c-color-neutral-border-quiet)
    );
  }

  :host([hidden]) {
    display: none;
  }

  /* Appearances ------------------------------------------------------------ */

  :host([appearance='plain']) {
    --_pane-border-color: transparent;
    --_pane-shadow: none;
  }

  :host([appearance='raised']) {
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    --_pane-shadow: var(--c-shadow-raised);
  }

  :host([appearance='outline']) {
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    --_pane-shadow: none;
  }

  :host([appearance='outline-fill']) {
    --_pane-background: var(
      --c-pane-background,
      color-mix(var(--c-color-neutral-fill-quiet), transparent 70%)
    );
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    --_pane-shadow: none;
  }

  :host([appearance='sunken']) {
    --_pane-background: var(--c-pane-background, var(--c-surface-sunken));
    --_pane-border-color: transparent;
    --_pane-shadow: var(--c-shadow-sunken);
  }

  /* Variants --------------------------------------------------------------- */

  :host([variant='code']) {
    --_pane-background: var(
      --c-pane-background,
      var(--c-color-neutral-fill-quiet)
    );
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    /*
      Code panes are a flat inset well, not a floating surface, so the variant
      claims the shadow back from whatever \`appearance\` is in play — otherwise
      the \`raised\` default would leave a drop shadow under every code block.
      \`--c-pane-shadow\` still wins, so a consumer can opt one back in.
    */
    --_pane-shadow: var(--c-pane-shadow, none);
    --_pane-max-block-size: var(--c-pane-max-block-size, calc(500rem / 16));
    --_pane-overflow: auto;

    margin-block-end: var(--c-spacing-md);
  }

  :host([variant='error']) {
    --_pane-background: var(
      --c-pane-background,
      var(--c-color-danger-fill-quiet)
    );
    --_pane-color: var(--c-pane-text, var(--c-color-danger-on-quiet));
    --_pane-border-color: var(--c-color-danger-border-quiet);
    --_pane-divider-color: var(
      --c-pane-divider-color,
      var(--c-color-danger-border-quiet)
    );
  }

  /* Structure -------------------------------------------------------------- */

  .cp-pane {
    display: block;
    block-size: 100%;
    color: var(--_pane-color);
    background-color: var(--_pane-background);
    border-radius: var(--_pane-radius);
    border-width: var(--_pane-border-width);
    border-style: var(--_pane-border-style);
    border-color: var(--_pane-border-color);
    box-shadow: var(--_pane-shadow);
    max-block-size: var(--_pane-max-block-size);
    overflow: var(--_pane-overflow);
    -webkit-overflow-scrolling: touch;
  }

  /*
    The focus ring belongs to the scroll container, which is also the element
    carrying the border/radius — so it traces the pane's rounded corners instead
    of boxing the (unstyled, unrounded) host. It's drawn inside the border box:
    the scroller runs edge to edge, so an outset ring could be clipped by an
    ancestor, and an inset one stays legible against both the raised surface and
    the code variant's quiet fill.
  */
  .cp-pane:focus-visible {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: calc(-1 * var(--c-focus-outline-width));
  }

  /*
    The component makes its own scroll container focusable, so consumers don't
    need a host-level \`tabindex\`. If one sets it anyway, at least round the
    UA outline to the pane's shape.
  */
  :host(:focus-visible) {
    border-radius: var(--_pane-radius);
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  .cp-pane__header {
    /* Room for a small button, like other header bars, so a header is the
       same height with or without actions. With the pane's top border and the
       header's own bottom border, it's a header bar's height, as a card
       header is. */
    --_header-height: calc(var(--c-size-header) - var(--_pane-border-width));
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    min-block-size: var(--_header-height);
    padding-inline: var(--_pane-spacing);
    padding-block: max(
      0px,
      calc((var(--_header-height) - 1px - var(--c-size-control-sm)) / 2)
    );
    position: sticky;
    inset-block-start: 0;
    z-index: var(--c-layer-sticky, 10);
    background-color: var(--_pane-background);
    border-block-end: 1px solid var(--_pane-divider-color);
  }

  .cp-pane__title {
    font-size: var(--c-pane-title-font-size, calc(18rem / 16));
    line-height: var(--c-pane-title-line-height, calc(28 / 18));
    font-weight: var(--c-pane-title-font-weight, 700);
    margin: 0;
    ${Si}
  }

  .cp-pane__header-actions {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .cp-pane__body {
    padding: var(--_pane-spacing);
  }

  .cp-pane__footer {
    display: flex;
    align-items: center;
    background-color: var(--_pane-background);
    border-block-start: 1px solid var(--_pane-divider-color);
    padding-inline: var(--_pane-spacing);
    padding-block: calc(var(--_pane-spacing) / 2);
    position: sticky;
    inset-block-end: 0;
    z-index: var(--c-layer-sticky, 10);
  }

  .cp-pane__spacer {
    flex: 1 1 0%;
  }

  .cp-pane__footer-actions {
    display: flex;
    gap: var(--c-spacing-md);
    justify-content: end;
    align-items: center;
    align-self: end;
  }
`,Om={Raised:`raised`,Outline:`outline`,OutlineFill:`outline-fill`,Plain:`plain`,Sunken:`sunken`};Object.values(Om);var km={Plain:`plain`,Error:`error`,Code:`code`};Object.values(km);var Am=new Set([`clip`,`hidden`]),jm=class extends Jn(u,{customProperty:`--_pane-spacing`,defaultValue:`lg`}){constructor(...e){super(...e),this.appearance=Om.Raised,this.variant=km.Plain,this.label=``,this.headingLevel=2,this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._scrollable=!1,this._hostLabel=``,this._lightDom=new ae(this,{attributeFilter:[`aria-label`],characterData:!0,onChange:()=>this._syncLightDom()}),this._observedBoxes=new Set}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._observedBoxes.clear()}get _scroller(){return this.renderRoot?.querySelector(`.cp-pane`)??null}_syncSlotPresence(){this._hasSlottedHeader=oe(this,`header`,`title`,`header-actions`),this._hasSlottedFooter=oe(this,`footer`,`footer-content`,`feedback`,`actions`,`primary-action`,`secondary-action`)}_syncLightDom(){this._syncSlotPresence(),this._hostLabel=this.getAttribute(`aria-label`)??``,this._syncScrollable(),this._observeScrollable()}_syncScrollable(){let e=this._scroller;if(!e?.isConnected){this._scrollable=!1;return}let{overflowX:t,overflowY:n}=getComputedStyle(e);this._scrollable=!Am.has(n)&&e.scrollHeight-e.clientHeight>1||!Am.has(t)&&e.scrollWidth-e.clientWidth>1}_observeScrollable(){if(typeof ResizeObserver>`u`)return;let e=this._resizeObserver??=new ResizeObserver(()=>this._syncScrollable()),t=this._scroller,n=new Set(t?[t,...t.querySelectorAll(`.cp-pane__header, .cp-pane__body, .cp-pane__footer`),...this.children]:[]);for(let t of this._observedBoxes)n.has(t)||(e.unobserve(t),this._observedBoxes.delete(t));for(let t of n)this._observedBoxes.has(t)||(e.observe(t),this._observedBoxes.add(t))}get _scrollRegionLabel(){return this.label||this._hostLabel||S(`Scrollable region`)}focus(e){if(this._scrollable&&this._scroller){this._scroller.focus(e);return}super.focus(e)}updated(e){super.updated(e),this._observeScrollable()}_renderTitle(){let e=cm(`h${Math.min(6,Math.max(1,Number(this.headingLevel)||2))}`);return dm`<${e} class="cp-pane__title">${this.label}</${e}>`}render(){let e=!!this.label||this._hasSlottedHeader;return p`
      <div
        class="cp-pane"
        part="base"
        style="${Zn(this.paddingStyles)}"
        tabindex="${this._scrollable?`0`:r}"
        role="${this._scrollable?`region`:r}"
        aria-label="${this._scrollable?this._scrollRegionLabel:r}"
      >
        ${e?p`<slot name="header">
              <div class="cp-pane__header" part="header">
                <slot name="title" part="title">
                  ${this.label?this._renderTitle():r}
                </slot>
                <div class="cp-pane__header-actions" part="header-actions">
                  <slot name="header-actions"></slot>
                </div>
              </div>
            </slot>`:r}

        <slot name="body">
          <div class="cp-pane__body" part="body">
            <slot></slot>
          </div>
        </slot>

        ${this._hasSlottedFooter?p`<slot name="footer">
              <div class="cp-pane__footer" part="footer">
                <slot name="footer-content">
                  <slot name="feedback"></slot>
                  <div class="cp-pane__spacer"></div>
                  <slot name="actions">
                    <div class="cp-pane__footer-actions" part="footer-actions">
                      <slot name="secondary-action"></slot>
                      <slot name="primary-action"></slot>
                    </div>
                  </slot>
                </slot>
              </div>
            </slot>`:r}
      </div>
    `}};jm.styles=[te,Dm],n([s({reflect:!0})],jm.prototype,`appearance`,void 0),n([s({reflect:!0})],jm.prototype,`variant`,void 0),n([s()],jm.prototype,`label`,void 0),n([s({type:Number,attribute:`heading-level`})],jm.prototype,`headingLevel`,void 0),n([f()],jm.prototype,`_hasSlottedHeader`,void 0),n([f()],jm.prototype,`_hasSlottedFooter`,void 0),n([f()],jm.prototype,`_scrollable`,void 0),n([f()],jm.prototype,`_hostLabel`,void 0),customElements.get(`craft-pane`)||customElements.define(`craft-pane`,jm);var Mm=`:is(craft-checkbox, craft-checkbox-indeterminate) > input[type="checkbox"], input[type="checkbox"].cp-checkbox, craft-radio > input[type="radio"], input[type="radio"].cp-radio {
  appearance: none;
  line-height: inherit;
  margin-block: calc((1lh - var(--c-checkbox-size)) / 2);
  width: var(--c-checkbox-size);
  height: var(--c-checkbox-size);
  border: var(--c-form-control-border-width) var(--c-form-control-border-style)
    var(--c-checkbox-border-color, var(--c-form-control-border-color));
  border-radius: var(--c-checkbox-radius);
  background-color: var(--c-input-fill);
  color: var(--c-checkbox-checked-mark, var(--c-color-accent-on-loud));
  cursor: pointer;
  flex-shrink: 0;
  place-items: center;
  margin-inline: 0;
  display: inline-grid;

  &:before {
    content: "";
    aspect-ratio: 1;
    visibility: hidden;
    background-color: currentColor;
    width: 65%;
  }

  &:checked {
    background-color: var(--c-checkbox-checked-fill, var(--c-color-accent-fill-loud));
    border-color: #0000;

    &:before {
      visibility: visible;
    }
  }

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    &:checked {
      border-color: highlight;
    }

    &:before {
      forced-color-adjust: none;
      background-color: highlight;
    }
  }
}

:is(craft-checkbox, craft-checkbox-indeterminate) > input[type="checkbox"], input[type="checkbox"].cp-checkbox {
  &:before {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E");
    mask-position: center;
    mask-size: contain;
    mask-repeat: no-repeat;
  }

  &:indeterminate {
    background-color: var(--c-checkbox-checked-fill, var(--c-color-accent-fill-loud));
    border-color: #0000;

    &:before {
      visibility: visible;
      aspect-ratio: auto;
      border-radius: 1px;
      width: 55%;
      height: 2px;
      mask-image: none;
    }

    @media (forced-colors: active) {
      border-color: highlight;
    }
  }
}

craft-radio > input[type="radio"], input[type="radio"].cp-radio {
  border-radius: 50%;

  &:before {
    border-radius: 50%;
    width: 40%;
  }
}

craft-radio[data-button] > input[type="radio"] {
  border-radius: inherit;
  border: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  inset: 0;

  &, &:checked {
    background-color: #0000;
  }

  &:checked {
    cursor: default;
  }

  &:before {
    display: none;
  }

  &:disabled {
    opacity: 1;
  }
}

craft-radio[data-button][data-button-start] > input[type="radio"] {
  border-start-start-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
  border-end-start-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
}

craft-radio[data-button][data-button-end] > input[type="radio"] {
  border-start-end-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
  border-end-end-radius: calc(var(--c-button-radius, var(--c-form-control-radius)) - 1px);
}
`,Nm=0,Pm=new WeakMap,W=new WeakSet,Fm=class extends u{constructor(...e){super(...e),_(this,W),this.groups=[],this.modelValue=[],this.lockedPermissions=[],this.name=``,this.disabled=!1,y(this,Pm,++Nm)}updated(e){super.updated(e),(e.has(`modelValue`)||e.has(`groups`)||e.has(`name`)||e.has(`disabled`))&&b(W,this,Km).call(this)}render(){let e=b(W,this,Rm).call(this);return es(this.groups,e=>e.handle,(t,n)=>b(W,this,Im).call(this,t,n,e))}};function Im(e,t,n){let i=`permission-tree-heading-${g(Pm,this)}-${t}`;return p`
      <section class="group">
        ${e.heading?p`
              <div class="heading">
                <h3 id=${i}>${e.heading}</h3>
                <craft-button
                  type="button"
                  size="small"
                  variant="plain"
                  aria-describedby=${i}
                  ?disabled=${this.disabled}
                  @click=${()=>b(W,this,Hm).call(this,e.keys,n)}
                >
                  ${b(W,this,Vm).call(this,e.keys,n)?S(`Deselect all`):S(`Select all`)}
                </craft-button>
              </div>
            `:r}
        ${b(W,this,Lm).call(this,e.permissions,0,this.disabled,n)}
      </section>
    `}function Lm(e,t,n,i){return es(Object.entries(e),([e])=>e,([e,a])=>{let o=a.key||e,s=b(W,this,Bm).call(this,o,i),c=a.nested??{};return p`
          <ul>
            <li>
              <craft-checkbox
                class=${t>0?`indented`:``}
                style=${`--permission-level: ${t}`}
                .label=${a.label}
                .choiceValue=${o}
                .checked=${s}
                .disabled=${n||b(W,this,zm).call(this,o,i)}
                @model-value-changed=${e=>b(W,this,Um).call(this,e,o,c,i)}
              >
                ${a.info||a.warning?p`
                      <div slot="help-text">
                        ${a.info??r}
                        ${a.warning?p`
                              <craft-callout
                                variant="warning"
                                appearance="plain"
                                inline
                              >
                                ${a.warning}
                              </craft-callout>
                            `:r}
                      </div>
                    `:r}
              </craft-checkbox>

              ${Object.keys(c).length?b(W,this,Lm).call(this,c,t+1,n||!s,i):r}
            </li>
          </ul>
        `})}function Rm(){return new Set(this.lockedPermissions.map(e=>e.toLowerCase()))}function zm(e,t){return t.has(e.toLowerCase())}function Bm(e,t){return this.modelValue.includes(e)||b(W,this,zm).call(this,e,t)}function Vm(e,t){let n=e.filter(e=>!b(W,this,zm).call(this,e,t));return n.length>0&&n.every(e=>this.modelValue.includes(e))}function Hm(e,t){let n=e.filter(e=>!b(W,this,zm).call(this,e,t));if(b(W,this,Vm).call(this,e,t)){let e=new Set(n);b(W,this,Gm).call(this,this.modelValue.filter(t=>!e.has(t)));return}b(W,this,Gm).call(this,[...new Set([...this.modelValue,...n])])}function Um(e,t,n,r){if(e.stopPropagation(),this.disabled||b(W,this,zm).call(this,t,r))return;let i=e.currentTarget.checked,a=this.modelValue.indexOf(t);if(i&&a===-1){b(W,this,Gm).call(this,[...this.modelValue,t]);return}if(i||a===-1)return;let o=new Set([t,...b(W,this,Wm).call(this,n)]);b(W,this,Gm).call(this,this.modelValue.filter(e=>!o.has(e)))}function Wm(e){return Object.values(e).flatMap(e=>[e.key,...b(W,this,Wm).call(this,e.nested??{})])}function Gm(e){this.modelValue=e,this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,composed:!0,detail:{isTriggeredByUser:!0}})),Jc(this),Yc(this)}function Km(){if(this.querySelectorAll(`[data-permission-tree-input]`).forEach(e=>e.remove()),!this.name||this.disabled)return;b(W,this,qm).call(this,this.name,``);let e=new Set(this.groups.flatMap(e=>e.keys));for(let t of this.modelValue)e.has(t)&&b(W,this,qm).call(this,`${this.name}[]`,t)}function qm(e,t){let n=document.createElement(`input`);n.type=`hidden`,n.name=e,n.value=t,n.dataset.permissionTreeInput=``,this.append(n)}Fm.styles=[l(Mm),a`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      .group + .group {
        margin-block-start: var(--c-spacing-lg);
      }

      .heading {
        display: flex;
        align-items: center;
        gap: var(--c-spacing-sm);
      }

      h3 {
        margin: 0;
        font-size: var(--c-font-size-lg);
      }

      ul {
        margin-block: var(--c-spacing-sm);
        padding: 0;
        list-style: none;
      }

      craft-checkbox.indented {
        position: relative;
        --gap-x: calc((var(--permission-level) * 1lh) + var(--c-spacing-md));
      }

      craft-checkbox.indented::before {
        content: '';
        position: absolute;
        inset-block-start: calc(1lh / 2);
        inset-inline-start: calc(
          var(--c-size-control-2xs) + (var(--c-spacing) * 2)
        );
        width: calc(var(--gap-x) - (var(--c-spacing) * 3.5));
        height: 1px;
        background-color: var(--c-color-neutral-border-quiet);
      }
    `],n([s({type:Array})],Fm.prototype,`groups`,void 0),n([s({type:Array,attribute:`model-value`})],Fm.prototype,`modelValue`,void 0),n([s({type:Array,attribute:`locked-permissions`})],Fm.prototype,`lockedPermissions`,void 0),n([s()],Fm.prototype,`name`,void 0),n([s({type:Boolean,reflect:!0})],Fm.prototype,`disabled`,void 0),customElements.get(`craft-permission-tree`)||customElements.define(`craft-permission-tree`,Fm);var Jm=a`
  :host {
    --_height: var(--c-progress-bar-height, 0.375rem);
    --_radius: var(--c-progress-bar-radius, var(--c-radius-full));
    --_track-color: var(
      --c-progress-bar-track-color,
      var(--c-color-neutral-fill-quiet)
    );
    --_fill-color: var(
      --c-progress-bar-fill-color,
      var(--c-color-accent-border-normal)
    );

    display: block;
  }

  :host([show-status]) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5em;
  }

  :host([hidden]) {
    display: none;
  }

  .progress-bar {
    border-radius: var(--_radius);
    border: 2px solid var(--_fill-color);
    padding: 2px;
    max-width: 100%;
    height: var(--_height);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .progress-bar__fill {
    border-radius: calc(var(--_radius) - 4px);
    height: 100%;
    background-color: var(--_fill-color);
  }

  .progress-bar__fill--smooth {
    transition: width 0.2s ease-out;
  }

  .progress-bar--pending .progress-bar__fill {
    --_stripe-size: calc(var(--_height) * 2);
    width: 100%;
    background-color: var(--_track-color);
    background-image: linear-gradient(
      -45deg,
      var(--_fill-color) 25%,
      transparent 25%,
      transparent 50%,
      var(--_fill-color) 50%,
      var(--_fill-color) 75%,
      transparent 75%
    );
    background-size: var(--_stripe-size) var(--_stripe-size);
    animation: progress-bar-pending 1s linear infinite;
  }

  @keyframes progress-bar-pending {
    from {
      background-position: 0 0;
    }
    to {
      background-position: var(--_stripe-size) 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar--pending .progress-bar__fill {
      animation: none;
    }

    .progress-bar__fill--smooth {
      transition: none;
    }
  }

  .progress-bar__status {
    font-size: 0.9em;
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
`,Ym=new WeakMap,Xm=new WeakMap,Zm=class extends u{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label=`Progress`,y(this,Ym,0),y(this,Xm,!1)}willUpdate(e){if(super.willUpdate(e),(e.has(`total`)||e.has(`processed`))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&g(Ym,this)<100&&v(Xm,this,!0),this.progress=e}e.has(`progress`)&&(this.progress>0&&this.pending&&(this.pending=!1),v(Ym,this,this.progress))}updated(e){super.updated(e),g(Xm,this)&&(v(Xm,this,!1),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0})))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,v(Ym,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?`100%`:`${this.progressPercent}%`};return p`
      <div
        class=${E({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?r:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${E({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${Zn(e)}
        ></div>
      </div>
      ${this.showStatus?p`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:r}
      <span class="visually-hidden">
        ${this.pending?`Loading`:`${this.progressPercent}%`}
      </span>
    `}};Zm.styles=[Jm],n([s({type:Number})],Zm.prototype,`progress`,void 0),n([s({type:Number})],Zm.prototype,`total`,void 0),n([s({type:Number})],Zm.prototype,`processed`,void 0),n([s({type:Boolean,attribute:`show-status`})],Zm.prototype,`showStatus`,void 0),n([s({type:Boolean,reflect:!0})],Zm.prototype,`pending`,void 0),n([s({type:Boolean})],Zm.prototype,`smooth`,void 0),n([s({type:String})],Zm.prototype,`label`,void 0),customElements.get(`craft-progress-bar`)||customElements.define(`craft-progress-bar`,Zm);var Qm=class extends hi(yi(u)){connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`radiogroup`)}resetGroup(){let e;this.formElements.forEach(t=>{typeof t.resetGroup==`function`?t.resetGroup():typeof t.reset==`function`&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}},$m=class extends _i(bi){connectedCallback(){super.connectedCallback(),this.type=`radio`}},eh=class extends nr(Vo(Qm,`radio`)){constructor(...e){super(...e),this.thumbnails=!1,this.buttons=!1}addFormElement(e,t){super.addFormElement(e,t),this._syncButtons()}removeFormElement(e){super.removeFormElement(e),this._syncButtons()}updated(e){super.updated(e),e.has(`buttons`)&&this._syncButtons()}_syncButtons(){let e=Array.from(this.formElements);e.forEach((t,n)=>{t.toggleAttribute(`data-button`,this.buttons),t.toggleAttribute(`data-button-start`,this.buttons&&n===0),t.toggleAttribute(`data-button-end`,this.buttons&&n===e.length-1)})}static get styles(){return[...super.styles,Wn,a`
        .input-group {
          display: grid;
          gap: var(--c-spacing-xs);
        }

        /*
         * Options illustrated with a thumbnail read as a row of tiles rather
         * than a stacked list — the layout Craft 5 hand-rolled for View Mode.
         */
        :host([thumbnails]) .input-group {
          grid-auto-flow: column;
          justify-content: start;
          align-items: start;
          gap: var(--c-spacing-lg);
        }

        :host([buttons]) .input-group {
          display: flex;
          flex-wrap: wrap;
          width: fit-content;
          gap: 0;
        }

        :host([buttons]) ::slotted(:not(craft-radio)) {
          display: contents;
        }
      `]}};n([s({type:Boolean,reflect:!0})],eh.prototype,`thumbnails`,void 0),n([s({type:Boolean,reflect:!0})],eh.prototype,`buttons`,void 0),customElements.get(`craft-radio-group`)||customElements.define(`craft-radio-group`,eh);var th=class extends Ko($m){constructor(...e){super(...e),this._syncIconOnly=()=>{let e=this.querySelector(`:scope > [slot="label"]`);this.toggleAttribute(`data-icon-only`,!e?.textContent?.trim())}}static get styles(){return[...super.styles,a`
        /*
         * Match the checkbox's gaps: space between the input and its label, but
         * none between rows, since the (often empty) help text wraps onto its own
         */
        :host {
          gap: 0 var(--c-spacing-md);
        }

        :host([data-button]) {
          --_radius: var(--c-button-radius, var(--c-form-control-radius));
          position: relative;
          display: inline-flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: 0;
          box-sizing: border-box;
          min-height: var(--c-size-control-md);
          min-width: var(--c-size-control-md);
          padding-inline: var(--c-form-control-spacing-inline);
          border: 1px solid var(--c-form-control-border-color);
          border-radius: 0;
          background-color: transparent;
          color: var(--c-color-neutral-on-quiet);
          white-space: nowrap;
        }

        :host([data-button]:not([data-button-start])) {
          margin-inline-start: -1px;
          border-inline-start-color: var(--c-color-neutral-border-quiet);
        }

        :host([data-button]:not([data-button-end])) {
          border-inline-end-color: var(--c-color-neutral-border-quiet);
        }

        :host([data-button][data-button-start]) {
          border-start-start-radius: var(--_radius);
          border-end-start-radius: var(--_radius);
        }

        :host([data-button][data-button-end]) {
          border-start-end-radius: var(--_radius);
          border-end-end-radius: var(--_radius);
        }

        :host([data-button][data-icon-only]) {
          padding-inline: 0;
          aspect-ratio: 1;
        }

        :host([data-button]) .choice-field__help-text {
          display: none;
        }

        @media (hover: hover) {
          :host([data-button]:not([checked]):not([disabled]):hover) {
            z-index: 1;
            background-color: color-mix(
              in oklab,
              var(--c-color-neutral-fill-quiet),
              var(--c-color-mix-hover)
            );
          }
        }

        :host([data-button][checked]) {
          z-index: 1;
          background-color: var(--c-color-neutral-fill-loud);
          border-color: var(--c-color-neutral-border-loud);
          color: var(--c-color-neutral-on-loud);
        }

        :host([data-button][focused-visible]) {
          z-index: 2;
        }

        :host([data-button][disabled]) {
          opacity: 0.5;
        }

        @media (forced-colors: active) {
          :host([data-button]) {
            border-color: ButtonBorder;
          }

          :host([data-button][checked]) {
            background-color: Highlight;
            border-color: Highlight;
            color: HighlightText;
          }
        }
      `]}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="label"]`)?.addEventListener(`slotchange`,this._syncIconOnly),this._syncIconOnly()}};customElements.get(`craft-radio`)||customElements.define(`craft-radio`,th);var nh=class extends Nt(Ti){static get styles(){return[...super.styles,a`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:`readonly`},singleOption:{type:Boolean,reflect:!0,attribute:`single-option`}}}get slots(){return{...super.slots,after:()=>{let e=document.createElement(`span`);return e.textContent=`▼`,e.setAttribute(`role`,`img`),e.setAttribute(`aria-hidden`,`true`),e}}}get _contentWrapperNode(){return this.shadowRoot.getElementById(`content-wrapper`)}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type=`button`}__handleKeydown(e){switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){let e=Array.from(this.selectedElement.childNodes);return e.length>0?e.map(e=>e.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return p` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return p``}_beforeTemplate(){return p` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return p`${this.singleOption?``:p`<slot name="after"></slot>`}`}};function rh(){return Ft.isMac?`mac`:`windows/linux`}var ih=class extends Nt(Kr(vn(Qc))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":nh}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:`navigate-within-invoker`},interactionMode:{type:String,attribute:`interaction-mode`},singleOption:{type:Boolean,reflect:!0,attribute:`single-option`}}}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>p`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(e=>e.slot===`invoker`)}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode=`auto`,this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener(`keyup`,this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener(`keyup`,this.__onKeyUp)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`interactionMode`&&(this.interactionMode===`auto`?this.interactionMode=rh():(this.selectionFollowsFocus=this.interactionMode===`windows/linux`,this.navigateWithinInvoker=this.interactionMode===`windows/linux`)),(e===`disabled`||e===`readOnly`)&&this.__toggleInvokerDisabled()}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),e.has(`singleOption`)&&(this.singleOption?(this._invokerNode.removeAttribute(`role`),this._invokerNode.removeAttribute(`aria-haspopup`),this._invokerNode.removeAttribute(`aria-expanded`)):(this._invokerNode.setAttribute(`role`,`button`),this._invokerNode.setAttribute(`aria-haspopup`,`listbox`),this._invokerNode.setAttribute(`aria-expanded`,`${this.opened}`))),this._inputNode&&this._invokerNode&&(e.has(`_ariaLabelledNodes`)&&this._invokerNode.setAttribute(`aria-labelledby`,`${this._inputNode.getAttribute(`aria-labelledby`)} ${this._invokerNode.id}`),e.has(`_ariaDescribedNodes`)&&this._invokerNode.setAttribute(`aria-describedby`,this._inputNode.getAttribute(`aria-describedby`)),e.has(`showsFeedbackFor`)&&this._invokerNode.setAttribute(`aria-invalid`,`${this._hasFeedbackVisibleFor(`error`)}`)),e.has(`modelValue`)&&this.__syncInvokerElement()}addFormElement(e,t){super.addFormElement(e,t),!this.hasNoDefaultSelected&&!this.__hasInitialSelectedFormElement&&(!e.disabled||this.disabled)&&(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(e){super.removeFormElement(e),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_onFormElementsChanged(){this.singleOption=this.formElements.length===1&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate(`selectedElement`))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute(`aria-haspopup`,`listbox`),this.__setupInvokerNodeEventListener()}__invokerOnClick(){!this.disabled&&!this.readOnly&&!this.singleOption&&!this.__blockListShow&&this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event(`blur`))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener(`click`,this.__invokerOnClick),this._invokerNode.addEventListener(`blur`,this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener(`click`,this.__invokerOnClick),this._invokerNode.removeEventListener(`blur`,this.__invokerOnBlur)}_defineOverlayConfig(){return{...xn(),visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){this.checkedIndex===-1?this._overlayCtrl.updateConfig({inheritsReferenceWidth:`min`}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute(`autofocus`,``)}__overlayOnShow(){this.checkedIndex!=null&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute(`autofocus`)}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener(`before-show`,this.__overlayBeforeShow),this._overlayCtrl.addEventListener(`show`,this.__overlayOnShow),this._overlayCtrl.addEventListener(`hide`,this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener(`show`,this.__overlayOnShow),this._overlayCtrl.removeEventListener(`before-show`,this.__overlayBeforeShow),this._overlayCtrl.removeEventListener(`hide`,this.__overlayOnHide)}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,n=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display=``,this._overlayCtrl.contentWrapperNode.style.minWidth=`auto`,this._overlayCtrl.contentWrapperNode.style.width=`auto`;let r=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;r>0&&(this._invokerNode.style.width=`${r+this._arrowWidth}px`),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=n}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(e){if(this.disabled||this.readOnly||this.singleOption||this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});let{key:t}=e;switch(t){case`ArrowUp`:e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case`ArrowDown`:e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case`ArrowLeft`:e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case`ArrowRight`:e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:!0})}}_listboxOnKeyDown(e){if(super._listboxOnKeyDown(e),this.disabled)return;let{key:t}=e;switch(t){case`Tab`:if(this._overlayCtrl.config.trapsKeyboardFocus===!0)return;this.opened=!1;break;case`Escape`:this.opened=!1,this.__blockListShowDuringTransition();break;case`Enter`:case` `:this.opened=!1,this.__blockListShowDuringTransition();break}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener(`click`,this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener(`click`,this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}},ah=a`
  :host {
    ${Hn}
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-sm);
    cursor: pointer;
    padding-block: 0;
    padding-inline: var(--c-input-spacing-inline);
    font: inherit;
    overflow: clip;
  }

  /* The usual focus ring, standing off the control, in place of LionButton's
     hard-coded one (flush against its edge). As specific as LionButton's
     :focus:not([disabled]) rule, so it wins on order. Contexts that inset
     rings, such as table cells, do so through the same properties. */
  :host(:focus-visible:not([disabled])) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  /* Replace LionButton's hard-coded hover, press, and disabled fills */
  :host(:hover) {
    background-color: color-mix(
      in oklab,
      var(--c-input-fill, var(--c-form-control-fill)),
      var(--c-color-mix-hover)
    );
  }

  :host(:active),
  :host([active]) {
    background-color: color-mix(
      in oklab,
      var(--c-input-fill, var(--c-form-control-fill)),
      var(--c-color-mix-active)
    );
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--c-input-fill, var(--c-form-control-fill));
    color: inherit;
  }

  #content-wrapper {
    position: relative;
    pointer-events: none;
    flex: 1 1 auto;
    /* Clipped for the ellipsis, but with room for the ring and shadow of
       content at its edges, such as a selected color's swatch. */
    overflow: clip;
    overflow-clip-margin: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .indicator {
    flex: 0 0 auto;
    font-size: 0.8em;
  }
`,oh=class extends nh{static get styles(){return[...super.styles,ah]}_afterTemplate(){return p`${this.singleOption?``:p`<craft-icon class="indicator" name="chevron-down"></craft-icon>`}`}},sh=a`
  ${Un}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  .input-group__input {
    ${Vn}
  }

  /* Lion sets the field's width as an inline min-width, which wins over this cap on wider fields */
  #overlay-content-node-wrapper {
    position: absolute;
    width: 100%;
    max-inline-size: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
  }

  ::slotted([slot='input']) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
    max-height: calc(var(--c-spacing) * 60);
    overflow: auto;
  }
`,ch=class extends nr(ih){constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,sh]}static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":oh}}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,n=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display=``,this._overlayCtrl.contentWrapperNode.style.minWidth=`auto`,this._overlayCtrl.contentWrapperNode.style.width=`auto`;let r=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;r>0&&(this._invokerNode.style.minWidth=`min(${r}px, 100%)`,this._invokerNode.style.width=``),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=n}_handleTypeAhead(e,t){e.metaKey||e.ctrlKey||e.altKey||super._handleTypeAhead(e,t)}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}};n([s({reflect:!0,type:Boolean})],ch.prototype,`small`,void 0),customElements.get(`craft-select-rich`)||customElements.define(`craft-select-rich`,ch);var lh=a`
  :host {
    display: block;
  }
`;function uh(e){return e.charAt(0).toUpperCase()+e.slice(1)}var dh=class extends u{constructor(...e){super(...e),this.label=``,this.name=``,this.modelValue=null,this.allowTransparent=!1,this.blankLabel=null,this.colors=[..._o],this.disabled=!1,this.readOnly=!1,this.required=!1,this.validators=[]}_swatchTemplate(e){let t=e===`__blank__`,n=`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:${[`0 0 0 1px var(--c-select-color-swatch-ring, transparent)`,`0 1px 1px rgb(0 0 0 / 20%)`,`inset 0 0 0 1px ${this._swatchBorder(e)}`].join(`, `)};`,r=e===`white`?`var(--c-surface-white)`:`var(--c-color-${e}-fill-quiet)`;return p`<span
      class="select-color__swatch"
      style="${t?n+`background:linear-gradient(45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(-45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%),linear-gradient(-45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;`:n+`background-color:${r};`}"
      aria-hidden="true"
    ></span>`}_swatchBorder(e){switch(e){case`__blank__`:return`var(--c-select-color-swatch-edge, rgb(0 0 0 / 15%))`;case`black`:return`color-mix(in srgb, var(--c-color-black-on-quiet), transparent 80%)`;case`white`:return`var(--c-table-border-color)`;default:return`var(--c-color-${e}-border-quiet)`}}_optionTemplate(e,t){return p`<craft-option .choiceValue=${e}>
      <span
        class="select-color__option"
        style="display:flex;align-items:center;gap:var(--c-spacing-sm);"
      >
        ${this._swatchTemplate(e)}
        <span class="select-color__label" style="white-space:nowrap;"
          >${t}</span
        >
      </span>
    </craft-option>`}_handleModelValueChanged(e){e.stopPropagation();let t=e.target;this.modelValue=t?.modelValue??null,this.dispatchEvent(new CustomEvent(`model-value-changed`,{bubbles:!0,composed:!0})),Jc(this),Yc(this)}render(){return p`
      <craft-select-rich
        label=${this.label}
        name=${this.name}
        .modelValue=${this.modelValue}
        .disabled=${this.disabled}
        .readOnly=${this.readOnly}
        .required=${this.required}
        .validators=${this.validators}
        @model-value-changed=${this._handleModelValueChanged}
      >
        ${this.allowTransparent?this._optionTemplate(`__blank__`,this.blankLabel??S(`Transparent`)):``}
        ${this.colors.map(e=>this._optionTemplate(e,S(uh(e))))}
      </craft-select-rich>
    `}};dh.styles=[lh],n([s()],dh.prototype,`label`,void 0),n([s()],dh.prototype,`name`,void 0),n([s({attribute:`model-value`})],dh.prototype,`modelValue`,void 0),n([s({type:Boolean,reflect:!0,attribute:`allow-transparent`})],dh.prototype,`allowTransparent`,void 0),n([s({attribute:`blank-label`})],dh.prototype,`blankLabel`,void 0),n([s({type:Array})],dh.prototype,`colors`,void 0),n([s({type:Boolean,reflect:!0})],dh.prototype,`disabled`,void 0),n([s({type:Boolean,reflect:!0,attribute:`readonly`})],dh.prototype,`readOnly`,void 0),n([s({type:Boolean,reflect:!0})],dh.prototype,`required`,void 0),n([s({attribute:!1})],dh.prototype,`validators`,void 0),customElements.get(`craft-select-color`)||customElements.define(`craft-select-color`,dh);var fh=class extends ui{static get properties(){return{autocomplete:{type:String}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}},ph=class extends fh{get operationMode(){return`select`}connectedCallback(){super.connectedCallback(),this._inputNode.addEventListener(`change`,this._proxyChangeEvent),this.__selectObserver=new MutationObserver(()=>{this._syncValueUpwards(),this._calculateValues({source:`model`})}),this.__selectObserver.observe(this._inputNode,{attributes:!0,childList:!0,subtree:!0})}updated(e){super.updated(e),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener(`change`,this._proxyChangeEvent),this.__selectObserver?.disconnect()}formatter(e){let t=Array.from(this._inputNode.options).find(t=>t.value===e);return t?t.text:``}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=this.modelValue===void 0?``:this.modelValue)}_proxyChangeEvent(){this.dispatchEvent(new CustomEvent(`user-input-changed`,{bubbles:!0,composed:!0}))}},mh=a`
  ${Un}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  ::slotted(.form-control) {
    ${Hn}
  }

  .input-group__input {
    ${Vn}
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,hh=class extends nr(ph){constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,mh]}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}};n([s({reflect:!0,type:Boolean})],hh.prototype,`small`,void 0),customElements.get(`craft-select`)||customElements.define(`craft-select`,hh);var gh=e=>{var t=new WeakMap,r=new WeakMap,i=new WeakMap;class a extends e{constructor(...e){super(...e),y(this,t,this.attachInternals()),y(this,r,null),y(this,i,!1),this.name=``,this.disabled=!1}_formValue(){return null}_restoreFormValue(e){}get form(){return g(t,this).form}get validity(){return g(t,this).validity}get validationMessage(){return g(t,this).validationMessage}get willValidate(){return g(t,this).willValidate}checkValidity(){return g(t,this).checkValidity()}reportValidity(){return g(t,this).reportValidity()}connectedCallback(){super.connectedCallback(),g(i,this)||(v(i,this,!0),v(r,this,this._formValue())),g(t,this).setFormValue(this._formValue())}updated(e){super.updated(e),g(t,this).setFormValue(this._formValue())}formDisabledCallback(e){this.disabled=e}formResetCallback(){this._restoreFormValue(g(r,this))}formStateRestoreCallback(e){this._restoreFormValue(e)}}return a.formAssociated=!0,n([s({reflect:!0})],a.prototype,`name`,void 0),n([s({type:Boolean,reflect:!0})],a.prototype,`disabled`,void 0),a},_h=a`
  :host {
    display: inline-flex;
  }

  .slide-picker {
    --_segment-height: 1rem;
    --_segment-width: calc(8rem / 16);
    --_segment-border: var(--c-color-neutral-border-quiet);
    --_segment-active-border: var(--c-color-neutral-border-loud);
    --_segment-fill: var(
      --c-slide-picker-segment-fill,
      var(--c-color-neutral-fill-quiet)
    );
    /* Selected segments take a toned-down version of a selected button's
       fill. */
    --_segment-active-fill: var(
      --c-slide-picker-segment-active-fill,
      color-mix(
        in oklab,
        var(--c-color-neutral-fill-loud),
        var(--c-color-neutral-fill-normal) 70%
      )
    );
    --_segment-hover-fill: var(
      --c-slide-picker-segment-hover-fill,
      var(--c-color-neutral-fill-normal)
    );
    display: inline-flex;
    align-items: stretch;
    min-height: max(var(--_segment-height), var(--touch-target-size));
    outline: none;
  }

  .slide-picker__segment {
    inline-size: var(--_segment-width);
    block-size: var(--_segment-height);

    border: 1px solid var(--_segment-border);
    border-inline-start-width: 0;
    background-color: var(--_segment-fill);
    cursor: pointer;
    margin-block: auto;
  }

  .slide-picker__segment:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: var(--c-radius-sm);
    border-end-start-radius: var(--c-radius-sm);
  }

  .slide-picker__segment:last-child {
    border-start-end-radius: var(--c-radius-sm);
    border-end-end-radius: var(--c-radius-sm);
  }

  .slide-picker__segment.is-active {
    background-color: var(--_segment-active-fill);
    border-color: var(--_segment-active-border);
  }

  /* Selected segments are outlined as one; the dividers between them stay
     light. */
  .slide-picker__segment.is-active:not(.is-last-active) {
    border-inline-end-color: var(--_segment-border);
  }

  /* Hovering previews a value: the segments up to and including the hovered
     one fill in, and the rest clear. */
  :host(:not([readonly]):not([disabled]))
    .slide-picker:has(.slide-picker__segment:hover)
    .slide-picker__segment {
    background-color: transparent;
  }

  :host(:not([readonly]):not([disabled]))
    .slide-picker:has(.slide-picker__segment:hover)
    .slide-picker__segment:is(:hover, :has(~ .slide-picker__segment:hover)) {
    background-color: var(--_segment-hover-fill);
  }

  .slide-picker:focus-visible .slide-picker__segment.is-last-active {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
    position: relative;
    z-index: 1;
  }

  :host([readonly]) .slide-picker__segment {
    cursor: default;
    opacity: 0.7;
  }

  @media (forced-colors: active) {
    .slide-picker__segment {
      background: Canvas;
      border-color: ButtonBorder;
    }

    .slide-picker__segment.is-active {
      background: Highlight;
      border-color: Highlight;
    }
  }
`,G=new WeakSet,vh=class extends gh(u){constructor(...e){super(...e),_(this,G),this.min=0,this.max=100,this.step=10,this.value=0,this.label=S(`Number of Columns`),this.valueUnit=``,this.readonly=!1}_formValue(){return this.name?String(this.value):null}_restoreFormValue(e){this.value=b(G,this,xh).call(this,Number(e??this.min))}willUpdate(e){if(super.willUpdate(e),e.has(`min`)||e.has(`max`)||e.has(`step`)||e.has(`value`)){let e=b(G,this,xh).call(this,this.value);e!==this.value&&(this.value=e)}}render(){let e=b(G,this,bh).call(this);return p`
      <div
        class="slide-picker"
        role="slider"
        tabindex=${yh.call(b(G,this))?0:-1}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${b(G,this,Ch).call(this,this.value)}
        aria-readonly=${this.readonly?`true`:`false`}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-describedby=${ft(this.describedBy)}
        @keydown=${b(G,this,Eh)}
      >
        ${e.map(e=>p`
            <span
              class=${E({"slide-picker__segment":!0,"is-active":e<=this.value,"is-last-active":e===this.value})}
              role="presentation"
              aria-hidden="true"
              @click=${()=>b(G,this,Th).call(this,e)}
              title=${b(G,this,Ch).call(this,e)}
              >${r}</span
            >
          `)}
      </div>
    `}};function yh(){return!this.readonly&&!this.disabled}function bh(){let{min:e,max:t,step:n}=this;if(n<=0||t<e)throw Error(`Invalid craft-slide-picker range configuration.`);let r=(t-e)/n;if(!Number.isInteger(r))throw Error(`Invalid craft-slide-picker step configuration for the provided range.`);return Array.from({length:r+1},(t,r)=>e+r*n)}function xh(e){b(G,this,bh).call(this);let{min:t,max:n,step:r}=this,i=t+Math.round((Math.min(Math.max(e,t),n)-t)/r)*r;return Math.min(Math.max(i,t),n)}function Sh(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}function Ch(e){return this.valueLabel?this.valueLabel(e):this.valueUnit?`${e}${this.valueUnit}`:`${e}`}function wh(e,t){let n=b(G,this,xh).call(this,e);n!==this.value&&(this.value=n,t&&(this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))))}function Th(e){yh.call(b(G,this))&&b(G,this,wh).call(this,e,!0)}function Eh(e){if(!yh.call(b(G,this)))return;let t=b(G,this,Sh).call(this);switch(e.key){case`ArrowUp`:b(G,this,wh).call(this,this.value+this.step,!0),e.preventDefault();break;case`ArrowDown`:b(G,this,wh).call(this,this.value-this.step,!0),e.preventDefault();break;case`ArrowRight`:b(G,this,wh).call(this,this.value+(t?-this.step:this.step),!0),e.preventDefault();break;case`ArrowLeft`:b(G,this,wh).call(this,this.value+(t?this.step:-this.step),!0),e.preventDefault();break;case`Home`:b(G,this,wh).call(this,this.min,!0),e.preventDefault();break;case`End`:b(G,this,wh).call(this,this.max,!0),e.preventDefault();break}}vh.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0},vh.styles=[_h],n([s({type:Number})],vh.prototype,`min`,void 0),n([s({type:Number})],vh.prototype,`max`,void 0),n([s({type:Number})],vh.prototype,`step`,void 0),n([s({type:Number})],vh.prototype,`value`,void 0),n([s()],vh.prototype,`label`,void 0),n([s({attribute:`described-by`})],vh.prototype,`describedBy`,void 0),n([s({attribute:`value-unit`})],vh.prototype,`valueUnit`,void 0),n([s({attribute:!1})],vh.prototype,`valueLabel`,void 0),n([s({type:Boolean,reflect:!0})],vh.prototype,`readonly`,void 0),customElements.get(`craft-slide-picker`)||customElements.define(`craft-slide-picker`,vh);var Dh=a`
  :host {
    display: block;
  }

  .slide-rule {
    --_graduation-width: var(--c-slide-rule-graduation-width, 8px);
    --_graduation-height: var(--c-slide-rule-graduation-height, 10px);
    --_graduation-color: var(
      --c-slide-rule-graduation-color,
      var(--c-color-neutral-border-loud)
    );
    --_accent-color: var(--c-slide-rule-accent-color, currentColor);

    --_graduation-main-height: calc(var(--_graduation-height) * 1.5);
    --_graduation-thickness: 2px;
    --_graduation-main-thickness: calc(var(--_graduation-thickness) * 2);

    --_label-gap: var(--c-spacing-xs);
    --_label-space: calc(12rem / 16);

    display: flex;
    flex-direction: column;
    gap: var(--c-spacing-sm);
    outline: none;
    height: var(--c-slide-rule-height, 40px);

    /* Digits that don't change width as the strip slides past. */
    font-family: var(--c-font-mono);
  }

  .slide-rule:focus-visible .cursor::after {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
    border-radius: var(--c-radius-sm);
  }

  .cursor {
    align-self: center;
    position: relative;
    width: 0;
    height: 0;
    border-inline-start: calc(5 / 16 * 1rem) solid transparent;
    border-inline-end: calc(5 / 16 * 1rem) solid transparent;
    border-block-start: calc(5 / 16 * 1rem) solid var(--_accent-color);
  }

  .cursor::after {
    content: '';
    width: calc(20 / 16 * 1rem);
    height: calc(50 / 16 * 1rem);
    position: absolute;
    inset-block-start: -15px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }

  .graduations {
    flex: 1;
    min-block-size: calc(
      var(--_graduation-main-height) + var(--_label-gap) + var(--_label-space)
    );
    position: relative;
    touch-action: pan-y;
    /*
      The window the strip slides behind. Clipped so it stays the rule's width,
      which the positioning maths centers the strip against.
    */
    overflow: hidden;

    /* Fades the graduations' own alpha, so it works on any background. */
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      #000 15%,
      #000 85%,
      transparent 100%
    );
  }

  /*
    The band from zero to the value, in the selection accent. Hidden at zero,
    and behind the strip.
  */
  .indicator {
    position: absolute;
    /* The JS sets the width including borders. */
    box-sizing: border-box;
    inset-block: 0;
    inset-inline-start: 50%;
    inline-size: 0;
    background: var(--c-color-accent-fill-quiet);
    border-inline: 1px solid var(--c-color-accent-border-quiet);
    pointer-events: none;
    transition:
      200ms inline-size linear,
      200ms translate linear;
  }

  .slide-rule.dragging .indicator {
    transition: none;
  }

  .graduations ul {
    position: relative;
    /*
      One track per graduation. They must stay flush: any gap throws off the
      positioning maths.
    */
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: var(--_graduation-width);

    /* Shrink-to-fit: the JS measures this to get the graduation width. */
    width: max-content;

    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    /* Transformed, so dragging doesn't trigger layout. */
    transition: 200ms transform linear;

    /* On the strip, not the marks: a press anywhere in it drags, and the marks
       are only a couple of pixels wide to aim at. */
    cursor: pointer;
  }

  .slide-rule.dragging .graduations ul,
  .slide-rule.dragging .indicator {
    transition: none;
  }

  /* Until the first placement has been rendered -- see #markPlaced(). */
  .slide-rule:not(.placed) .graduations ul,
  .slide-rule:not(.placed) .indicator {
    transition: none;
  }

  .graduations ul li {
    /* The graduation element is the tick; the track supplies the spacing. */
    justify-self: start;
    /*
      Centered on its point at the start of the track, so the cursor lines up
      and marks of any thickness align.
    */
    translate: -50%;
    inline-size: var(--_graduation-thickness);
    block-size: var(--_graduation-height);
    background: var(--_graduation-color);

    font-size: 8px;
    /* The label is positioned against this. */
    position: relative;
  }

  .graduations ul li.main-graduation {
    inline-size: var(--_graduation-main-thickness);
    block-size: var(--_graduation-main-height);
  }

  .graduations ul li:hover {
    background: var(--_accent-color);
  }

  .graduations ul li .label {
    width: 20px;
    position: absolute;
    /* Clear of the tallest mark, so a taller graduation pushes the labels
       down with it rather than crowding them. */
    inset-block-start: calc(var(--_graduation-main-height) + var(--_label-gap));
    /* Centered on the mark. */
    inset-inline-start: 50%;
    transform: translateX(-50%);
    display: none;
    text-align: center;
    /* Narrower than some labels are long, and a leading minus is a break
       opportunity -- so they stay on one line explicitly. */
    white-space: nowrap;
  }

  .graduations ul li.main-graduation .label {
    display: block;
    cursor: default;
  }
`,K=new WeakSet,Oh=new WeakMap,kh=new WeakMap,Ah=new WeakMap,jh=new WeakMap,Mh=new WeakMap,Nh=new WeakMap,Ph=new WeakMap,Fh=new WeakMap,Ih=class extends gh(u){constructor(...e){super(...e),_(this,K),this.min=-45,this.max=45,this.value=0,this.graduationMin=-70,this.graduationMax=70,this.label=S(`Rotate`),y(this,Oh,!1),y(this,kh,!1),y(this,Ah,0),y(this,jh,0),y(this,Mh,0),y(this,Nh,0),y(this,Ph,!1),y(this,Fh,null)}_formValue(){return this.name?String(this.value):null}_restoreFormValue(e){this.value=Math.min(Math.max(Number(e??0),this.min),this.max)}connectedCallback(){super.connectedCallback(),v(Fh,this,new ResizeObserver(()=>b(K,this,zh).call(this))),g(Fh,this).observe(this)}disconnectedCallback(){super.disconnectedCallback(),g(Fh,this)?.disconnect(),v(Fh,this,null)}firstUpdated(){v(Nh,this,(b(K,this,Rh).call(this).length-1)*10),b(K,this,zh).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`min`)||e.has(`max`)||e.has(`graduationMin`)||e.has(`graduationMax`))&&b(K,this,zh).call(this)}render(){return p`
      <div
        class="slide-rule"
        role="slider"
        tabindex=${Lh.call(b(K,this))?0:-1}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${b(K,this,Wh).call(this,this.value)}
        aria-disabled=${this.disabled?`true`:`false`}
        @keydown=${b(K,this,ng)}
        @pointerdown=${b(K,this,Xh)}
        @pointermove=${b(K,this,Zh)}
        @pointerup=${b(K,this,Qh)}
        @pointercancel=${b(K,this,$h)}
      >
        <div class="cursor"></div>
        <div class="graduations">
          <div
            class="indicator"
            aria-hidden="true"
            ?hidden=${this.value===0}
          ></div>
          <ul aria-hidden="true">
            ${b(K,this,Rh).call(this).map(e=>p`
                <li
                  class=${E({graduation:!0,"main-graduation":e%5==0})}
                  data-graduation=${e}
                >
                  <div class="label">${e}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}};function Lh(){return!this.disabled}function Rh(){let e=[];for(let t=this.graduationMin;t<=this.graduationMax;t++)e.push(t);return e}function zh(){this._graduations?.offsetWidth&&b(K,this,Hh).call(this),b(K,this,Vh).call(this),!(!this._list||!this._graduations?.offsetWidth)&&(this._list.style.transform=`translateX(${b(K,this,Kh).call(this,this.value)}px)`,b(K,this,Bh).call(this))}function Bh(){g(Ph,this)||(v(Ph,this,!0),requestAnimationFrame(()=>this._root?.classList.add(`placed`)))}function Vh(){if(!this._indicator)return;let e=(this.graduationMin-this.graduationMax)*-1,t=g(Nh,this)/e;this._indicator.style.inlineSize=`${Math.abs(this.value)*t}px`,this._indicator.style.translate=this.value>0?`-100%`:`0`}function Hh(){let e=b(K,this,Rh).call(this).length,t=this._list.getBoundingClientRect().width/e;t>0&&v(Nh,this,(e-1)*t)}function Uh(){let{transform:e}=getComputedStyle(this._list);return!e||e===`none`?0:new DOMMatrixReadOnly(e).m41}function Wh(e){return S(`{num, number} {num, plural, =1{degree} other{degrees}}`,{num:Math.round(e)})}function Gh(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return(this._graduations.offsetWidth/2+e*-1)/g(Nh,this)*n-t}function Kh(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return-((e+t)*g(Nh,this)/n-this._graduations.offsetWidth/2)}function qh(e){let t=Math.min(Math.max(e,this.min),this.max);return t===this.value?!1:(this.value=t,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),!0)}function Jh(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}function Yh(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}function Xh(e){v(kh,this,Lh.call(b(K,this))&&this._graduations.contains(e.target)&&e.target!==this._graduations),g(kh,this)&&(e.preventDefault(),v(jh,this,e.clientX),v(Mh,this,b(K,this,Uh).call(this)),v(Ah,this,this.value),this._root.setPointerCapture(e.pointerId),b(K,this,Yh).call(this,`craft-drag-start`))}function Zh(e){g(kh,this)&&Math.abs(e.clientX-g(jh,this))>3&&(v(Oh,this,!0),this._root.classList.add(`dragging`),e.preventDefault(),b(K,this,tg).call(this,e))}function Qh(e){g(kh,this)&&(g(Oh,this)?e.preventDefault():b(K,this,tg).call(this,e),b(K,this,eg).call(this,e))}function $h(e){g(kh,this)&&b(K,this,eg).call(this,e)}function eg(e){v(Oh,this,!1),this._root.classList.remove(`dragging`),this.value!==g(Ah,this)&&b(K,this,Jh).call(this),b(K,this,Yh).call(this,`craft-drag-end`),this._root.hasPointerCapture(e.pointerId)&&this._root.releasePointerCapture(e.pointerId),v(jh,this,0),v(kh,this,!1)}function tg(e){let t=g(Oh,this)?g(jh,this):this._cursor.getBoundingClientRect().left+this._cursor.offsetWidth/2,n=g(Oh,this)?t-e.clientX:e.clientX-t,r=g(Mh,this)-n;b(K,this,qh).call(this,b(K,this,Gh).call(this,r))}function ng(e){if(!Lh.call(b(K,this)))return;let t=this.value,n;switch(e.key){case`ArrowUp`:case`ArrowRight`:n=b(K,this,qh).call(this,t+1);break;case`ArrowDown`:case`ArrowLeft`:n=b(K,this,qh).call(this,t-1);break;case`PageUp`:n=b(K,this,qh).call(this,t+10);break;case`PageDown`:n=b(K,this,qh).call(this,t-10);break;case`Home`:n=b(K,this,qh).call(this,this.min);break;case`End`:n=b(K,this,qh).call(this,this.max);break;default:return}n&&b(K,this,Jh).call(this),e.preventDefault()}Ih.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0},Ih.styles=[Dh],n([s({type:Number})],Ih.prototype,`min`,void 0),n([s({type:Number})],Ih.prototype,`max`,void 0),n([s({type:Number})],Ih.prototype,`value`,void 0),n([s({type:Number,attribute:`graduation-min`})],Ih.prototype,`graduationMin`,void 0),n([s({type:Number,attribute:`graduation-max`})],Ih.prototype,`graduationMax`,void 0),n([s()],Ih.prototype,`label`,void 0),n([h(`.slide-rule`)],Ih.prototype,`_root`,void 0),n([h(`.graduations`)],Ih.prototype,`_graduations`,void 0),n([h(`.graduations ul`)],Ih.prototype,`_list`,void 0),n([h(`.cursor`)],Ih.prototype,`_cursor`,void 0),n([h(`.indicator`)],Ih.prototype,`_indicator`,void 0),customElements.get(`craft-slide-rule`)||customElements.define(`craft-slide-rule`,Ih);var rg=a`
  :host {
    display: inline-flex;
    --size: var(--c-size-icon-xs);
  }

  .status {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    border-radius: var(--c-radius-full);
    border: 1px solid transparent;
  }

  .status--live {
    background-color: var(--c-status-live-fill);
    border-color: var(--c-status-live-border);
  }

  .status--enabled {
    background-color: var(--c-status-enabled-fill);
    border-color: var(--c-status-enabled-border);
  }

  .status--pending {
    background-color: var(--c-status-pending-fill);
    border-color: var(--c-status-pending-border);
  }

  .status--expired {
    background-color: var(--c-status-expired-fill);
    border-color: var(--c-status-expired-border);
  }

  .status--disabled {
    background-color: var(--c-status-disabled-fill);
    border: 1px solid var(--c-status-disabled-border);
  }
`,ig=class extends u{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?S(`Status: {status}`,{status:this.status}):this.label}render(){return p`
      <span
        class="${E({status:!0,"status--live":this.status===`live`,"status--enabled":this.status===`enabled`,"status--pending":this.status===`pending`,"status--expired":this.status===`expired`,"status--disabled":this.status===`disabled`})}"
        role="${this.getLabel()?`img`:r}"
        aria-label="${this.getLabel()??r}"
      ></span>
    `}};ig.styles=[rg],n([s()],ig.prototype,`label`,void 0),n([s()],ig.prototype,`status`,void 0),customElements.get(`craft-status`)||customElements.define(`craft-status`,ig);var ag=class extends At(u){static get properties(){return{checked:{type:Boolean,reflect:!0}}}static get styles(){return[a`
        :host {
          display: inline-block;
          position: relative;
          width: 36px;
          height: 16px;
          outline: 0;
        }

        :host([hidden]) {
          display: none;
        }

        .btn {
          position: relative;
          height: 100%;
          outline: 0;
        }

        :host(:focus:not([disabled])) .switch-button__thumb {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        .switch-button__track {
          background: #eee;
          width: 100%;
          height: 100%;
        }

        .switch-button__thumb {
          background: #ccc;
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
        }

        :host([checked]) .switch-button__thumb {
          right: 0;
        }
      `]}render(){return p`
      <div class="btn">
        <div class="switch-button__track"></div>
        <div class="switch-button__thumb"></div>
      </div>
    `}constructor(){super(),this.value=``,this.checked=!1,this.__initialized=!1,this._toggleChecked=this._toggleChecked.bind(this),this.__handleKeydown=this._handleKeydown.bind(this),this.__handleKeyup=this._handleKeyup.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`switch`),this.setAttribute(`aria-checked`,`${this.checked}`),this.addEventListener(`click`,this._toggleChecked),this.addEventListener(`keydown`,this.__handleKeydown),this.addEventListener(`keyup`,this.__handleKeyup)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._toggleChecked),this.removeEventListener(`keydown`,this.__handleKeydown),this.removeEventListener(`keyup`,this.__handleKeyup)}_toggleChecked(){this.disabled||(this.focus(),this.checked=!this.checked)}__checkedStateChange(){this.dispatchEvent(new Event(`checked-changed`,{bubbles:!0})),this.setAttribute(`aria-checked`,`${this.checked}`)}_handleKeydown(e){e.key===` `&&e.preventDefault()}_handleKeyup(e){[` `,`Enter`].includes(e.key)&&this._toggleChecked()}updated(e){super.updated(e),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,`${this.disabled}`)}requestUpdate(e,t,n){super.requestUpdate(e,t,n),this.__initialized&&this.isConnected&&e===`checked`&&this.checked!==t&&!this.disabled&&this.__checkedStateChange()}firstUpdated(e){super.firstUpdated(e),this.__initialized=!0}},og=class extends Kr(_i(ui)){static get styles(){return[...super.styles,a`
        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}static get scopedElements(){return{...super.scopedElements,"lion-switch-button":ag}}get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`lion-switch-button`);return e.setAttribute(`data-tag-name`,`lion-switch-button`),e}}}render(){return p`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
    `}_groupOneTemplate(){return p`${this._labelTemplate()} ${this._helpTextTemplate()} ${this._feedbackTemplate()}`}_groupTwoTemplate(){return p`${this._inputGroupTemplate()}`}constructor(){super(),this.checked=!1,this.__handleButtonSwitchCheckedChanged=this.__handleButtonSwitchCheckedChanged.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(`checked-changed`,this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.addEventListener(`click`,this._toggleChecked),this._syncButtonSwitch()}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&this.removeEventListener(`checked-changed`,this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.removeEventListener(`click`,this._toggleChecked)}updated(e){super.updated(e),e.has(`disabled`)&&this._syncButtonSwitch()}_toggleChecked(e){e.preventDefault(),super._toggleChecked(e)}_isEmpty(){return!1}__handleButtonSwitchCheckedChanged(e){e.stopPropagation(),this._isHandlingUserInput=!0,this.checked=this._inputNode.checked,this._isHandlingUserInput=!1}_syncButtonSwitch(){this._inputNode.disabled=this.disabled}_onLabelClick(){this.disabled||this._inputNode.focus()}},sg=class extends ag{constructor(...e){super(...e),this.indeterminate=!1}updated(e){super.updated(e),(e.has(`indeterminate`)||e.has(`checked`))&&this.setAttribute(`aria-checked`,this.checked?`true`:this.indeterminate?`mixed`:`false`)}static get styles(){return[...super.styles,a`
        :host {
          --c-switch-height: var(--c-size-control-sm);
          --c-switch-thumb-offset: 5px;
          --c-switch-thumb-height: calc(
            var(--c-switch-height) - var(--c-switch-thumb-offset)
          );
          display: flex;
          height: var(--c-switch-height);
          width: calc(var(--c-switch-height) * 1.75);
          margin: -1px;
          /* Round the focus ring to match the track */
          border-radius: var(--c-radius-full);
          cursor: pointer;
        }

        :host([disabled]) {
          cursor: not-allowed;
          opacity: 0.5;
        }

        :host([size='small']) {
          --c-switch-height: var(--c-size-control-xs);
          --c-switch-thumb-offset: 4px;
        }

        .btn {
          width: 100%;
        }

        /* The host's own focus ring covers this, so drop Lion's thumb outline */
        :host(:focus:not([disabled])) .switch-button__thumb {
          outline: none;
        }

        .switch-button__track {
          ${Bn}
          --tw-inset-shadow-color: var(--color-slate-300);
          background-color: var(--c-color-neutral-fill-quiet);
          border-radius: var(--c-radius-full);
          min-height: unset;
        }

        .switch-button__thumb {
          height: var(--c-switch-thumb-height);
          width: auto;
          aspect-ratio: 1;
          border-radius: var(--c-radius-full);
          border: 1px solid var(--c-form-control-border-color);
          background-color: var(--c-switch-thumb-fill, var(--c-surface-raised));
          inset-block-start: calc(var(--c-switch-thumb-offset) / 2);
          inset-inline-start: calc(var(--c-switch-thumb-offset) / 2);
          inset-inline-end: auto;
          box-sizing: border-box;
          background-clip: padding-box;
        }

        :host([indeterminate]:not([checked])) .switch-button__thumb {
          inset-inline-start: calc(50% - (var(--c-switch-thumb-height) / 2));
          inset-inline-end: auto;
        }

        :host([checked]) .switch-button__track {
          border-color: transparent;
          background-color: var(--c-color-accent-fill-loud);
        }

        :host([checked]) .switch-button__thumb {
          border-color: transparent;
          inset-inline-start: auto;
          inset-inline-end: calc(var(--c-switch-thumb-offset) / 2);
        }

        :host([checked]) .switch-button__thumb:after {
          --_checkmark-size: calc(var(--c-switch-thumb-height) / 2);
          --_checkmark-offset: calc(
            (var(--c-switch-thumb-height) - var(--_checkmark-size)) / 2 - 1px
          );
          content: '';
          position: absolute;
          inset-block-start: var(--_checkmark-offset);
          inset-inline-start: var(--_checkmark-offset);
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 255.8 234.9'%3E%3Cpath d='M245.9,4.6c-10.7-7.8-25.7-5.4-33.5,5.3l-119.4,164.2-52.1-52.1c-9.4-9.4-24.6-9.4-33.9,0-9.3,9.4-9.4,24.6,0,33.9l72,72c5,5,11.8,7.5,18.8,7s13.4-4.1,17.5-9.8L251.2,38.1c7.8-10.7,5.4-25.7-5.3-33.5Z'/%3E%3C/svg%3E");
          mask-repeat: no-repeat;
          mask-position: center;
          width: var(--_checkmark-size);
          aspect-ratio: 1;
          background-color: var(--c-color-accent-fill-loud);
        }
      `]}};n([s({type:Boolean,reflect:!0})],sg.prototype,`indeterminate`,void 0),customElements.get(`craft-switch-button`)||customElements.define(`craft-switch-button`,sg);var cg=a`
  :host {
    display: grid;
  }

  .form-field__group-two--switch {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .input-group {
    display: inline-flex;
    align-items: center;
  }

  ::slotted(label) {
    font-weight: bold;
  }

  .state-label {
    cursor: pointer;
    user-select: none;
  }

  .state-label[data-state='off'] {
    margin-inline-end: var(--c-spacing-sm);
  }

  .state-label[data-state='on'] {
    margin-inline-start: var(--c-spacing-sm);
  }

  ::slotted([slot='state-description']) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;function lg(e){return(e??``).split(/\s+/).filter(Boolean)}function ug(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e}var dg=Symbol.for(`craft-switch-synthetic-change`),fg=new WeakMap,pg=new WeakSet,mg=class extends nr(og){constructor(...e){super(...e),_(this,pg),this.size=`medium`,this.onLabel=``,this.offLabel=``,this.checkedValue=`1`,this.indeterminateValue=`-`,this.indeterminate=!1,this.__externalLabelledByNodes=[],this.__externalDescribedByNodes=[],this.__clickableExternalLabels=new Set,y(this,fg,!1),this.__onKeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||this.disabled||e.target!==this._inputNode)return;e.preventDefault();let t=getComputedStyle(this).direction===`rtl`;this._setCheckedState(e.key===(t?`ArrowLeft`:`ArrowRight`))},this.__forwardNativeChange=e=>{e.target===this._inputNode&&this.__dispatchNativeChange()},this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._inputNode?.click()}}static get styles(){return[...super.styles,Un,cg]}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement(`craft-switch-button`);return e.setAttribute(`size`,this.size),e.setAttribute(`data-tag-name`,`craft-switch-button`),e},"state-description":()=>{let e=document.createElement(`div`);return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement(`input`);return e.type=`hidden`,e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}static get scopedElements(){return{...super.scopedElements,"craft-switch-button":sg}}connectedCallback(){super.connectedCallback(),this.__adoptExternalAria(),this.addEventListener(`checked-changed`,this.__forwardNativeChange),this.addEventListener(`keydown`,this.__onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`checked-changed`,this.__forwardNativeChange),this.removeEventListener(`keydown`,this.__onKeydown),this.__teardownExternalLabelClicks()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`hidden-input`)}get _postedValue(){return this.checked?this.checkedValue:this.indeterminate?this.indeterminateValue:``}get _stateDescriptionNode(){return Array.from(this.children).find(e=>e.slot===`state-description`)}get _stateDescriptionText(){return[this.onLabel?S(`Check for {onLabel}.`,{onLabel:this.onLabel}):``,this.offLabel?S(`Uncheck for {offLabel}.`,{offLabel:this.offLabel}):``].filter(Boolean).join(` `)}willUpdate(e){super.willUpdate(e),e.has(`checked`)&&this.checked&&this.indeterminate&&(this.indeterminate=!1)}updated(e){super.updated(e),(e.has(`onLabel`)||e.has(`offLabel`))&&this.__syncStateDescription(),[`checked`,`indeterminate`,`checkedValue`,`indeterminateValue`,`disabled`,`size`].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has(`checked`)||e.has(`indeterminate`))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._inputNode;if(!e)return;let t=e.getAttribute(`data-target`),n=e.getAttribute(`data-reverse-target`);if(!t&&!n)return;let r=window.jQuery;r&&r(e).data?.(`fieldtoggle`)||(this.__toggleTargets(t,this.checked),this.__toggleTargets(n,!this.checked))}__toggleTargets(e,t){if(!e)return;let n=/^[#.]/.test(e)?e:`#${e}`,r=this.getRootNode(),i=!1;for(let e of r.querySelectorAll(n))e.classList.contains(`hidden`)===t&&(e.classList.toggle(`hidden`,!t),i=!0);i&&t&&window.dispatchEvent(new Event(`resize`))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked===e?t&&this.__dispatchNativeChange():this.checked=e)}get on(){return this.checked}get postedValue(){return this._postedValue}turnOn(e=!1){b(pg,this,hg).call(this,()=>this._setCheckedState(!0),e)}turnOff(e=!1){b(pg,this,hg).call(this,()=>this._setCheckedState(!1),e)}turnIndeterminate(e=!1){b(pg,this,hg).call(this,()=>{if(this.indeterminate&&!this.checked)return;let e=this.checked;this.checked=!1,this.indeterminate=!0,e||this.__dispatchNativeChange()},e)}__dispatchNativeChange(){if(g(fg,this))return;let e=new Event(`change`,{bubbles:!0});e[dg]=!0,this._inputNode?.dispatchEvent(e)}_onChange(e){e&&dg in e||super._onChange(e)}__adoptExternalAria(){let e=this._inputNode;if(!e)return;let t=this.getRootNode();for(let n of lg(e.getAttribute(`aria-labelledby`))){let e=t.getElementById(n);e&&!this.__externalLabelledByNodes.includes(e)&&(this.addToAriaLabelledBy(e,{reorder:!1}),this.__externalLabelledByNodes.push(e))}for(let n of lg(e.getAttribute(`aria-describedby`))){let e=t.getElementById(n);e&&!this.__externalDescribedByNodes.includes(e)&&(this.addToAriaDescribedBy(e,{reorder:!1}),this.__externalDescribedByNodes.push(e))}this.__setupExternalLabelClicks()}__setupExternalLabelClicks(){let e=this._inputNode;if(!e)return;let t=this.getRootNode(),n=new Set(this.__externalLabelledByNodes.filter(e=>e instanceof HTMLLabelElement));if(e.id)for(let r of t.querySelectorAll(`label[for="${ug(e.id)}"]`))n.add(r);for(let e of n)this.__clickableExternalLabels.has(e)||(e.addEventListener(`click`,this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener(`click`,this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._inputNode;if(!e)return;e.getAttribute(`size`)!==this.size&&e.setAttribute(`size`,this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:`state-description`,reorder:!1}):this.removeFromAriaDescribedBy(e)}render(){return p`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two form-field__group-two--switch">
        ${this._groupTwoTemplate()}
      </div>
    `}_groupOneTemplate(){return p`${super._groupOneTemplate()} ${this._stateDescriptionTemplate()}`}_stateDescriptionTemplate(){return p`<slot name="state-description"></slot>`}_stateLabelTemplate(e){let t=e===`on`?this.onLabel:this.offLabel;return t?p`<span
      class="state-label"
      data-state=${e}
      aria-hidden="true"
      @click=${()=>this._setCheckedState(e===`on`)}
      >${t}</span
    >`:r}_inputGroupBeforeTemplate(){return p`
      <div class="input-group__before">
        <slot name="before"></slot>
        ${this._stateLabelTemplate(`off`)}
      </div>
    `}_inputGroupAfterTemplate(){return p`
      <div class="input-group__after">
        ${this._stateLabelTemplate(`on`)}
        <slot name="after"></slot>
      </div>
    `}};function hg(e,t){if(!this.disabled){if(!t){e();return}v(fg,this,!0),e(),this.updateComplete.then(()=>{v(fg,this,!1)})}}n([s({type:String,reflect:!0})],mg.prototype,`size`,void 0),n([s({type:String,attribute:`on-label`})],mg.prototype,`onLabel`,void 0),n([s({type:String,attribute:`off-label`})],mg.prototype,`offLabel`,void 0),n([s({attribute:`value`})],mg.prototype,`checkedValue`,void 0),n([s({attribute:`indeterminate-value`})],mg.prototype,`indeterminateValue`,void 0),n([s({type:Boolean,reflect:!0})],mg.prototype,`indeterminate`,void 0),customElements.get(`craft-switch`)||customElements.define(`craft-switch`,mg);function gg({el:e,uid:t}){e.setAttribute(`id`,`panel-${t}`),e.setAttribute(`role`,`tabpanel`),e.setAttribute(`aria-labelledby`,`button-${t}`),e.hasAttribute(`tabindex`)||e.setAttribute(`tabindex`,`0`)}function _g(e){e.setAttribute(`selected`,`true`)}function vg(e){e.removeAttribute(`selected`)}function yg({el:e,uid:t,clickHandler:n,keydownHandler:r,keyupHandler:i}){e.setAttribute(`id`,`button-${t}`),e.setAttribute(`role`,`tab`),e.setAttribute(`aria-controls`,`panel-${t}`),e.addEventListener(`click`,n),e.addEventListener(`keyup`,i),e.addEventListener(`keydown`,r)}function bg({el:e,clickHandler:t,keydownHandler:n,keyupHandler:r}){e.removeAttribute(`id`),e.removeAttribute(`role`),e.removeAttribute(`aria-controls`),e.removeEventListener(`click`,t),e.removeEventListener(`keyup`,r),e.removeEventListener(`keydown`,n)}function xg(e,t=!1){t&&e.focus(),e.setAttribute(`selected`,`true`),e.setAttribute(`aria-selected`,`true`),e.setAttribute(`tabindex`,`0`)}function Sg(e){e.removeAttribute(`selected`),e.setAttribute(`aria-selected`,`false`),e.setAttribute(`tabindex`,`-1`)}function Cg(e){let t=e;switch(t.key){case`ArrowDown`:case`ArrowRight`:case`ArrowUp`:case`ArrowLeft`:case`Home`:case`End`:t.preventDefault()}}var wg=class extends u{static get properties(){return{selectedIndex:{type:Number,attribute:`selected-index`,reflect:!0}}}static get styles(){return[a`
        .tabs__tab-group {
          display: flex;
        }

        .tabs__tab-group ::slotted([slot='tab'][selected]) {
          font-weight: bold;
        }

        .tabs__panels ::slotted([slot='panel']) {
          visibility: hidden;
          display: none;
        }

        .tabs__panels ::slotted([slot='panel'][selected]) {
          visibility: visible;
          display: block;
        }

        .tabs__panels {
          display: block;
        }
      `]}render(){return p`
      <div class="tabs__tab-group" role="tablist">
        <slot name="tab"></slot>
      </div>
      <div class="tabs__panels">
        <slot name="panel"></slot>
      </div>
    `}constructor(){super(),this.selectedIndex=0}firstUpdated(e){super.firstUpdated(e),this.__setupSlots(),this.tabs[0]?.disabled&&(this.selectedIndex=this.tabs.findIndex(e=>!e.disabled))}get tabs(){return Array.from(this.children).filter(e=>e.slot===`tab`)}get panels(){return Array.from(this.children).filter(e=>e.slot===`panel`)}static enabledWarnings=super.enabledWarnings?.filter(e=>e!==`change-in-update`)||[];__setupSlots(){if(this.shadowRoot){let e=this.shadowRoot.querySelector(`slot[name=tab]`);e&&e.addEventListener(`slotchange`,()=>{this.__cleanStore(),this.__setupStore(),this.__updateSelected(!1)})}}__setupStore(){this.__store=[],this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),this.tabs.forEach((e,t)=>{let n={uid:It(),el:e,button:e,panel:this.panels[t],clickHandler:this.__createButtonClickHandler(t),keydownHandler:Cg.bind(this),keyupHandler:this.__handleButtonKeyup.bind(this)};gg({...n,el:n.panel}),yg(n),vg(n.panel),Sg(n.button),this.__store&&this.__store.push(n)})}__cleanStore(){this.__store&&=(this.__store.forEach(e=>{bg(e)}),[])}__getNextNotDisabledTab(e,t,n){let r=[],i=e.filter((e,t)=>!e.disabled&&t>this.selectedIndex),a=e.filter((e,t)=>!e.disabled&&t<this.selectedIndex);return r=n===`right`?[...i,...a]:[...a.reverse(),...i.reverse()],r[0]}__getNextAvailableIndex(e,t){let n=this.tabs[this.selectedIndex];if(this.tabs.every(e=>!e.disabled))return e;if(t===`ArrowRight`||t===`ArrowDown`){let e=this.__getNextNotDisabledTab(this.tabs,n,`right`);return this.tabs.findIndex(t=>e===t)}if(t===`ArrowLeft`||t===`ArrowUp`){let e=this.__getNextNotDisabledTab(this.tabs,n,`left`);return this.tabs.findIndex(t=>e===t)}if(t===`Home`)return this.tabs.findIndex(e=>!e.disabled);if(t===`End`){let e=this.tabs.map((e,t)=>({disabled:e.disabled,index:t})).filter(e=>!e.disabled);return e[e.length-1].index}return-1}__createButtonClickHandler(e){return()=>{this._setSelectedIndexWithFocus(e)}}__handleButtonKeyup(e){let t=e;if(typeof this.selectedIndex==`number`)switch(t.key){case`ArrowDown`:case`ArrowRight`:this.selectedIndex+1>=this._pairCount?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex+1,t.key));break;case`ArrowUp`:case`ArrowLeft`:this.selectedIndex<=0?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex-1,t.key));break;case`Home`:this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key));break;case`End`:this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key));break}}get selectedIndex(){return this.__selectedIndex||0}set selectedIndex(e){if(e===this.__selectedIndex)return;let t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!1),this.dispatchEvent(new Event(`selected-changed`)),this.requestUpdate(`selectedIndex`,t)}_setSelectedIndexWithFocus(e){if(e===-1)return;let t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!0),this.dispatchEvent(new Event(`selected-changed`)),this.requestUpdate(`selectedIndex`,t)}get _pairCount(){return this.__store&&this.__store.length||0}__updateSelected(e=!1){if(!(this.__store&&typeof this.selectedIndex==`number`&&this.__store[this.selectedIndex]))return;let t=this.tabs.find(e=>e.hasAttribute(`selected`)),n=this.panels.find(e=>e.hasAttribute(`selected`));t&&Sg(t),n&&vg(n);let{button:r,panel:i}=this.__store[this.selectedIndex];r&&xg(r,e),i&&_g(i)}},Tg=a`
  :host {
    display: block;
  }

  /*
   * The base layout is the block-start placement; each other placement below
   * flips the flex direction and moves the rule and the selected indicator to
   * match. Everything is written logically — row/column follow the writing
   * mode, and the borders and indicator insets are logical properties — so the
   * inline placements swap sides in RTL without a rule of their own.
   */
  .tabs {
    display: flex;
    flex-direction: column;
    gap: var(--c-tabs-gap, var(--c-spacing-lg));
    /* Fills a host that was given a height; against an auto height the
       percentage resolves to auto, leaving it content-sized. */
    block-size: 100%;
    min-block-size: 0;
  }

  /*
   * The rule lives on the strip rather than the tablist so it runs under the
   * overflow menu too, which sits beside the tablist rather than inside it.
   * It's declared as four zero-width edges so a placement only has to move the
   * width from one edge to another.
   *
   * The font size here is the whole of the size variant. Inheritance follows
   * the flattened tree, so the slotted <craft-tab>s take it from the slot's
   * ancestors rather than from where they're written — and since their padding
   * is em-based, and the overflow invoker's icon scales with its own text, one
   * declaration sizes everything in the strip. The panels sit outside it and
   * keep the document's text size.
   */
  .tabs__strip {
    display: flex;
    align-items: center;
    min-width: 0;
    font-size: var(--c-tabs-font-size, var(--c-text-base));
    border: 0 solid var(--c-tabs-border, var(--c-color-neutral-border-quiet));
    border-block-end-width: 1px;
  }

  :host([size='small']) {
    --c-tabs-font-size: var(--c-text-sm);
  }

  :host([size='large']) {
    --c-tabs-font-size: var(--c-text-lg);
  }

  .tabs__tab-group {
    flex: 1;
    min-width: 0;
    gap: var(--c-tabs-tab-gap, var(--c-spacing-lg));
  }

  /*
   * Tabs hold their natural width instead of shrinking to fit: overflow is
   * resolved by collapsing whole tabs into the menu, and a row of squeezed,
   * half-legible tabs would defeat the measurement that decides which.
   */
  ::slotted([slot='tab']) {
    flex: none;
  }

  /*
   * Except the selected tab, which is never collapsed: when it alone is wider
   * than the strip, it shrinks and truncates its label instead. Not while the
   * overflow is being measured, which needs every tab's natural width.
   */
  :host(
      :is([placement='block-start'], [placement='block-end']):not([equal-width])
    )
    .tabs__tab-group:not(.tabs__tab-group--measuring)
    ::slotted([slot='tab'][selected]) {
    flex: 0 1 auto;
    min-width: 0;
    --_tab-text-overflow: clip;
    --_tab-text-wrap: nowrap;
  }

  /* Overrides LionTabs' bold, which would otherwise beat the tab's own
     selected weight and its width-reserving label copy. */
  .tabs__tab-group ::slotted([slot='tab'][selected]) {
    font-weight: var(--c-tab-font-weight-active, var(--font-weight-semibold));
  }

  /*
   * Unless the strip is asked to divide its width evenly, which is the other
   * answer to the same problem: rather than collapsing the tabs that don't
   * fit, every tab takes the same share and shrinks with the container. The
   * component turns the overflow measurement off to match — see tabs.ts.
   *
   * A zero flex basis rather than auto: growing from zero is what makes the
   * shares equal, where auto would hand out only the *leftover* space and
   * leave a long label wider than a short one. The min-width override drops
   * the automatic minimum on a flex item, without which a long label would
   * refuse to shrink past its content and push the row wide anyway.
   *
   * Only the block placements: an inline strip runs down the block axis, where
   * its tabs already span the full width, so there is no share to divide.
   */
  :host([equal-width]:is([placement='block-start'], [placement='block-end']))
    ::slotted([slot='tab']) {
    flex: 1 1 0;
    min-width: 0;
    /* The label sits in the middle of the share it was given rather than
       against its leading edge, and wrapped lines center with it. */
    justify-content: center;
    text-align: center;
    /* Centered on the cross axis too. A label with no room left wraps, which
       makes that tab taller and stretches the rest of the row to match it;
       without this their single lines would sit against the top of the space
       they were stretched into while the wrapped one sat in the middle. */
    align-items: center;
  }

  /*
   * craft-popover gives itself display: contents, which would leave the menu
   * with no box to lay out or measure — and, being an author style, would also
   * beat the UA's [hidden] rule. Rules here are in the outer tree relative to
   * the menu's shadow root, so they win over its :host block.
   */
  .tabs__overflow {
    display: flex;
    align-items: center;
    flex: none;
    /* Above the tabs, so the invoker's own click-target pseudo-element can't
       be covered by the tab beside it. */
    position: relative;
    z-index: 1;
  }

  .tabs__overflow[hidden] {
    display: none;
  }

  ::slotted([slot='panel']) {
    --c-focus-outline-offset: calc(var(--c-focus-outline-width) * -1);
  }

  .tabs__panels {
    min-width: 0;
    background-color: var(--c-surface-default);
    /* The zero minimum undoes the automatic one, which would otherwise hold
       the flex item open at its content's height. */
    min-block-size: 0;
    overflow-y: auto;
  }

  /*
   * The strip below the panels. The indicator moves to the tab's block start,
   * pulled 1px up to sit on top of the strip's rule.
   *
   * Custom properties set on the host inherit into the slotted <craft-tab>s
   * (they're light-DOM children), which is how the tabs move their indicator
   * without reading the placement themselves.
   */
  :host([placement='block-end']) {
    --c-tab-indicator-inset-block-start: -1px;
    --c-tab-indicator-inset-block-end: auto;
  }

  :host([placement='block-end']) .tabs {
    flex-direction: column-reverse;
  }

  :host([placement='block-end']) .tabs__strip {
    border-block-end-width: 0;
    border-block-start-width: 1px;
  }

  /* The strip beside the panels, running down the block axis. */
  :host(:is([placement='inline-start'], [placement='inline-end'])) {
    --c-tab-indicator-inset-block-start: 0;
    --c-tab-indicator-inset-block-end: 0;
    --c-tab-indicator-block-size: auto;
    --c-tab-indicator-inline-size: calc(2rem / 16);
    /* Stacked tabs sit closer together than a row of them. */
    --c-tabs-tab-gap: var(--c-spacing-md);
  }

  :host(:is([placement='inline-start'], [placement='inline-end'])) .tabs {
    flex-direction: row;
  }

  :host(:is([placement='inline-start'], [placement='inline-end']))
    .tabs__strip {
    align-items: stretch;
    border-block-end-width: 0;
  }

  :host(:is([placement='inline-start'], [placement='inline-end']))
    .tabs__tab-group {
    flex-direction: column;
  }

  :host(:is([placement='inline-start'], [placement='inline-end']))
    .tabs__panels {
    flex: 1;
  }

  :host([placement='inline-start']) {
    --c-tab-indicator-inset-inline-start: auto;
    --c-tab-indicator-inset-inline-end: -1px;
  }

  :host([placement='inline-start']) .tabs__strip {
    border-inline-end-width: 1px;
  }

  /*
   * Reversed rather than reordered: the tabs stay first in the DOM, which is
   * the order the tab/tabpanel pattern wants them read in.
   */
  :host([placement='inline-end']) .tabs {
    flex-direction: row-reverse;
  }

  :host([placement='inline-end']) {
    --c-tab-indicator-inset-inline-start: -1px;
    --c-tab-indicator-inset-inline-end: auto;
  }

  :host([placement='inline-end']) .tabs__strip {
    border-inline-start-width: 1px;
  }
`,Eg={BlockStart:`block-start`,BlockEnd:`block-end`,InlineStart:`inline-start`,InlineEnd:`inline-end`};Object.values(Eg);var Dg={Horizontal:`horizontal`,Vertical:`vertical`};Object.values(Dg);var Og=[Eg.InlineStart,Eg.InlineEnd],kg=new Set([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`]),q=new WeakSet,Ag=new WeakMap,jg=new WeakMap,Mg=new WeakMap,Ng=new WeakMap,Pg=new WeakMap,Fg=new WeakMap,Ig=new WeakMap,Lg=new WeakMap,Rg=new WeakMap,zg=new WeakMap,Bg=new WeakMap,Vg=new WeakMap,Hg=class extends wg{constructor(...e){super(...e),_(this,q),this.placement=Eg.BlockStart,this.label=null,this.equalWidth=!1,this.syncLocationHash=!0,this.size=`medium`,y(this,Ag,[]),y(this,jg,!1),y(this,Mg,[]),y(this,Ng,null),y(this,Pg,null),y(this,Fg,void 0),y(this,Ig,!1),y(this,Lg,()=>{b(q,this,Jg).call(this)}),y(this,Rg,()=>{let e=decodeURIComponent(window.location.hash.slice(1));if(e===``)return;let t=Wg.call(b(q,this)).findIndex((t,n)=>b(q,this,Xg).call(this,n)===e);t>=0&&t!==this.selectedIndex&&(this.selectedIndex=t)}),y(this,zg,()=>{b(q,this,Qg).call(this),Wg.call(b(q,this)).forEach((e,t)=>{let n=()=>b(q,this,o_).call(this,t,!0),r=e=>{kg.has(e.key)&&e.preventDefault()},i=e=>b(q,this,s_).call(this,e);e.addEventListener(`click`,n),e.addEventListener(`keydown`,r),e.addEventListener(`keyup`,i),g(Ag,this).push(()=>{e.removeEventListener(`click`,n),e.removeEventListener(`keydown`,r),e.removeEventListener(`keyup`,i)})}),b(q,this,Jg).call(this),b(q,this,$g).call(this)}),y(this,Bg,()=>{g(Ig,this)||(v(Ig,this,!0),requestAnimationFrame(()=>{v(Ig,this,!1),b(q,this,t_).call(this)}))}),y(this,Vg,e=>{e.target===e.currentTarget&&e.stopPropagation()})}static get styles(){return[...super.styles,te,Tg]}get layout(){return Ug.call(b(q,this))?Dg.Vertical:Dg.Horizontal}set layout(e){this.placement=e===Dg.Vertical?Eg.InlineStart:Eg.BlockStart}refresh(){g(jg,this)&&b(q,this,$g).call(this),b(q,this,t_).call(this)}firstUpdated(e){v(jg,this,Wg.call(b(q,this)).some(e=>e.controls));let t=this.shadowRoot?.querySelector(`slot[name="tab"]`);g(jg,this)?(t?.addEventListener(`slotchange`,g(zg,this)),g(zg,this).call(this)):(super.firstUpdated(e),t?.addEventListener(`slotchange`,g(Lg,this))),b(q,this,Jg).call(this),v(Pg,this,this.selectedIndex),this.syncLocationHash&&g(Rg,this).call(this),t?.addEventListener(`slotchange`,g(Bg,this)),b(q,this,qg).call(this),b(q,this,t_).call(this),this.label||console.error("<craft-tabs> needs a `label` naming what its tabs switch between.",this)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(g(jg,this)&&g(zg,this).call(this),b(q,this,qg).call(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,g(Rg,this)),b(q,this,Qg).call(this),g(Fg,this)?.disconnect(),v(Fg,this,void 0)}updated(e){super.updated(e),!(e.has(`selectedIndex`)&&b(q,this,Jg).call(this))&&(e.has(`selectedIndex`)&&(g(jg,this)&&b(q,this,$g).call(this),g(Pg,this)!==null&&this.selectedIndex!==g(Pg,this)&&(b(q,this,Zg).call(this),this.dispatchEvent(new CustomEvent(`craft-tab-show`))),v(Pg,this,this.selectedIndex)),(e.has(`selectedIndex`)||e.has(`placement`)||e.has(`size`)||e.has(`equalWidth`))&&b(q,this,t_).call(this))}render(){return p`
      <div class="tabs" part="base">
        <div class="tabs__strip" part="strip">
          <div
            class="tabs__tab-group"
            part="tab-group"
            role="tablist"
            aria-label="${this.label||r}"
            aria-orientation="${Ug.call(b(q,this))?`vertical`:`horizontal`}"
          >
            <slot name="tab"></slot>
          </div>
          <!--
            The menu sits beside the tablist rather than inside it, so the
            tablist holds nothing but tabs. Its \`hidden\` state and \`actions\`
            are driven imperatively from the overflow measurement, not bound
            here — the measurement runs between renders and would otherwise
            fight Lit over the same attribute.
          -->
          <craft-action-menu
            class="tabs__overflow"
            part="overflow-menu"
            placement="bottom-end"
            hidden
            @craft-show=${g(Vg,this)}
            @craft-hide=${g(Vg,this)}
            @craft-after-show=${g(Vg,this)}
            @craft-after-hide=${g(Vg,this)}
            @craft-select=${g(Vg,this)}
          >
            <!--
              Slotted rather than left to the menu's generated default, which
              asks craft-button for a \`variant="inherit"\` that isn't one of its
              variants — so it falls back to the solid fill and lands a filled
              button in the middle of the tab strip.
            -->
            <craft-button
              slot="invoker"
              part="overflow-invoker"
              type="button"
              variant="plain"
              size="small"
              flush="inline-end"
            >
              <!--
                The name has to come from the icon: craft-button does not
                name itself, so an icon-only button with nothing else to read
                is nameless. A label on the icon (or aria-label on the host)
                is what supplies one.
              -->
              <craft-icon
                name="ellipsis"
                label="${S(`More tabs`)}"
              ></craft-icon>
            </craft-button>
          </craft-action-menu>
        </div>
        <div class="tabs__panels" part="panels">
          <slot name="panel"></slot>
        </div>
      </div>
    `}};function Ug(){return Og.includes(this.placement)}function Wg(){return this.tabs}function Gg(){return this.shadowRoot?.querySelector(`.tabs__tab-group`)??null}function Kg(){return this.shadowRoot?.querySelector(`.tabs__overflow`)??null}function qg(){this.syncLocationHash&&window.addEventListener(`hashchange`,g(Rg,this)),v(Fg,this,new ResizeObserver(g(Bg,this))),g(Fg,this).observe(this)}function Jg(){let e=Wg.call(b(q,this))[this.selectedIndex];if(this.selectedIndex>=0&&e&&!e.disabled)return!1;let t=Wg.call(b(q,this)).findIndex(e=>!e.disabled);return t<0||t===this.selectedIndex?!1:(this.selectedIndex=t,!0)}function Yg(){Wg.call(b(q,this)).forEach((e,t)=>{e.setAttribute(`tabindex`,t===this.selectedIndex?`0`:`-1`)})}function Xg(e){return Wg.call(b(q,this))[e]?.controls||null}function Zg(){let e=this.syncLocationHash?b(q,this,Xg).call(this,this.selectedIndex):null;if(e===null)return;let t=new URL(window.location.href);t.hash=e,window.history.replaceState(window.history.state,``,t)}function Qg(){for(;g(Ag,this).length;)g(Ag,this).pop()?.()}function $g(){let e=Wg.call(b(q,this)).map(e=>b(q,this,e_).call(this,e)),t=e.some(Boolean);Wg.call(b(q,this)).forEach((n,r)=>{let i=r===this.selectedIndex,a=e[r];if(n.id||=`tab-${It()}`,n.setAttribute(`role`,`tab`),n.toggleAttribute(`selected`,i),n.setAttribute(`aria-selected`,String(i)),!a){t&&console.error(`<craft-tabs> found no panel with id "${n.controls}".`,n);return}n.setAttribute(`aria-controls`,a.id),a.setAttribute(`role`,`tabpanel`),a.setAttribute(`aria-labelledby`,n.id),a.hasAttribute(`tabindex`)||a.setAttribute(`tabindex`,`0`),a.classList.toggle(`hidden`,!i),a.toggleAttribute(`selected`,i)}),b(q,this,Yg).call(this)}function e_(e){return e.controls?document.getElementById(e.controls):null}function t_(){let e=Gg.call(b(q,this)),t=Kg.call(b(q,this)),n=Wg.call(b(q,this));if(!e||!t)return;if(Ug.call(b(q,this))||this.equalWidth||n.length===0){b(q,this,r_).call(this,[]);return}n.forEach(e=>e.removeAttribute(`hidden`)),t.hidden=!0,e.classList.add(`tabs__tab-group--measuring`);let r=b(q,this,n_).call(this,e),i=n.map(e=>e.offsetWidth);if(e.classList.remove(`tabs__tab-group--measuring`),i.reduce((e,t,n)=>e+t+(n?r:0),0)<=e.clientWidth+1){b(q,this,r_).call(this,[]);return}t.hidden=!1;let a=e.clientWidth,o=[],s=0;for(let e=0;e<n.length;e++){let t=i[e]+(o.length?r:0);if(s+t>a+1)break;s+=t,o.push(e)}let c=this.selectedIndex;if(c>=0&&c<n.length&&!o.includes(c)){let e=i[c];for(;o.length&&s+e+r>a;){let e=o.pop();s-=i[e]+(o.length?r:0)}o.push(c)}let l=new Set(o);b(q,this,r_).call(this,n.map((e,t)=>t).filter(e=>!l.has(e)))}function n_(e){let t=parseFloat(getComputedStyle(e).columnGap);return Number.isFinite(t)?t:0}function r_(e){let t=Kg.call(b(q,this)),n=new Set(e);if(Wg.call(b(q,this)).forEach((e,t)=>{e.toggleAttribute(`hidden`,n.has(t))}),v(Mg,this,e),!t)return;t.hidden=e.length===0;let r=JSON.stringify(e.map(e=>{let t=Wg.call(b(q,this))[e];return[e,t.textContent?.trim()??``,t.disabled]}));r!==g(Ng,this)&&(v(Ng,this,r),t.actions=b(q,this,i_).call(this))}function i_(){return g(Mg,this).map(e=>{let t=Wg.call(b(q,this))[e];return{label:t.textContent?.trim()??``,disabled:t.disabled,onClick:()=>b(q,this,a_).call(this,e)}})}function a_(e){let t=Wg.call(b(q,this))[e];if(!t||t.disabled)return;let n=Kg.call(b(q,this));n&&(n.opened=!1),this.selectedIndex=e,b(q,this,t_).call(this),t.focus()}function o_(e,t){let n=Wg.call(b(q,this))[e];!n||n.disabled||(this.selectedIndex=e,t&&n.focus())}function s_(e){if(!kg.has(e.key))return;let t=b(q,this,c_).call(this,e.key);t!==-1&&b(q,this,o_).call(this,t,!0)}function c_(e){let t=Wg.call(b(q,this)),n=e=>t[e]&&!t[e].disabled&&!t[e].hidden;if(e===`Home`)return t.findIndex((e,t)=>n(t));if(e===`End`){for(let e=t.length-1;e>=0;e--)if(n(e))return e;return-1}let r=e===`ArrowRight`||e===`ArrowDown`?1:-1;for(let e=1;e<=t.length;e++){let i=((this.selectedIndex+r*e)%t.length+t.length)%t.length;if(n(i))return i}return-1}n([s({reflect:!0})],Hg.prototype,`placement`,void 0),n([s()],Hg.prototype,`label`,void 0),n([s({type:Boolean,reflect:!0,attribute:`equal-width`})],Hg.prototype,`equalWidth`,void 0),n([s({attribute:`sync-location-hash`,converter:{fromAttribute:e=>e!==`false`}})],Hg.prototype,`syncLocationHash`,void 0),n([s({reflect:!0})],Hg.prototype,`layout`,null),n([s({reflect:!0})],Hg.prototype,`size`,void 0),customElements.get(`craft-tabs`)||customElements.define(`craft-tabs`,Hg);var l_=a`
  :host {
    display: inline-flex;
    padding-inline: var(--c-tab-spacing-inline, 0);
    padding-block: var(--c-tab-spacing-block, 0.5em);
    position: relative;
    cursor: pointer;
  }

  /*
   * The display above is an author style, so it beats the UA's [hidden] rule —
   * without this a tab collapsed into <craft-tabs>' overflow menu would keep
   * its space in the strip.
   */
  :host([hidden]) {
    display: none;
  }

  /*
   * The selected indicator. Its geometry comes from custom properties so the
   * strip can move it without knowing anything about this shadow root: the
   * defaults below are the block-start placement (a rule underneath, pulled
   * 1px down to sit on top of the strip's border), and the other placements
   * publish the vars that move it to the edge facing the panels.
   */
  :host::after {
    content: '';
    position: absolute;
    display: block;
    background-color: transparent;
    inset-block-start: var(--c-tab-indicator-inset-block-start, auto);
    inset-block-end: var(--c-tab-indicator-inset-block-end, -1px);
    inset-inline-start: var(--c-tab-indicator-inset-inline-start, 0);
    inset-inline-end: var(--c-tab-indicator-inset-inline-end, 0);
    block-size: var(--c-tab-indicator-block-size, calc(2rem / 16));
    inline-size: var(--c-tab-indicator-inline-size, auto);
  }

  :host([selected])::after {
    background-color: var(
      --c-tab-border-active,
      var(--c-color-accent-fill-loud)
    );
  }

  @media (forced-colors: active) {
    :host([selected])::after {
      background-color: Highlight;
    }
  }

  :host([selected]) {
    cursor: default;
    font-weight: var(--c-tab-font-weight-active, var(--font-weight-semibold));
  }

  /* A hidden copy of the label in the selected weight reserves its width,
     so selecting a tab doesn't shift the strip. */
  .tab__label {
    display: inline-flex;
    flex-direction: column;
    min-width: 0;
  }

  ::slotted([slot='prefix']) {
    align-self: center;
    margin-inline-end: var(--c-spacing-sm);
  }

  ::slotted([slot='suffix']) {
    align-self: center;
    margin-inline-start: var(--c-spacing-sm);
  }

  /* Truncated only when <craft-tabs> asks, as it does for a selected tab that
     doesn't fit; otherwise a label wraps. */
  .tab__text {
    display: block;
    overflow: var(--_tab-text-overflow, visible);
    text-overflow: ellipsis;
    white-space: var(--_tab-text-wrap, normal);
    ${Si}
  }

  .tab__label::after {
    content: attr(data-text);
    block-size: 0;
    overflow: hidden;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: var(--c-tab-font-weight-active, var(--font-weight-semibold));
  }

  /*
   * Out of hit-testing, not just dimmed: <craft-tabs> binds its click handler
   * to every tab, so a disabled tab that still takes pointer events would
   * select itself.
   */
  :host([disabled]) {
    cursor: default;
    /* A token rather than opacity, which dims the label below the contrast
       floor and reads as a real violation to auditing tools. */
    color: var(--c-tab-text-disabled, var(--c-status-disabled-text));
    pointer-events: none;
  }
`,u_=class extends u{constructor(...e){super(...e),this.disabled=!1,this.controls=null,this._lightDom=new ae(this,{characterData:!0})}get selected(){return this.hasAttribute(`selected`)}render(){return p`<slot name="prefix" class="tab__prefix"></slot
      ><span class="tab__label" data-text="${this.textContent?.trim()??``}"
        ><span class="tab__text"><slot></slot></span></span
      ><slot name="suffix" class="tab__suffix"></slot>`}};u_.styles=[te,l_],n([s({type:Boolean,reflect:!0})],u_.prototype,`disabled`,void 0),n([s({reflect:!0})],u_.prototype,`controls`,void 0),customElements.get(`craft-tab`)||customElements.define(`craft-tab`,u_);var d_=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends d_{};function f_(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function p_(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function m_(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function h_(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function g_(e,t){return m_(e,t,``)}function __(e,t){return h_(e,t,``)}function v_(e,t){return t.slice(0,y_(e,t))}function y_(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function b_(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function x_(e,t){if(t)return C_(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function S_(e,t){if(t)return C_(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function C_(e,t){if(!t)return[S_(e),x_(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=b_(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var w_=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,T_=RegExp(`[${w_}]+|\\s+|[^${w_}]`,`ug`);new class extends d_{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=b_(e,r)}else n=e.match(T_)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&E_(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&E_(n,i,r,null,t.intlSegmenter),e}};function E_(e,t,n,r,i){if(t&&n){let[a,o]=C_(t.value,i),[s,c]=C_(n.value,i);if(e){let r=f_(a,s);e.value=h_(e.value,s,r),t.value=g_(t.value,r),n.value=g_(n.value,r)}if(r){let e=p_(o,c);r.value=m_(r.value,c,e),t.value=__(t.value,e),n.value=__(n.value,e)}}else if(n){if(e){let e=S_(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=S_(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=S_(r.value,i),[a,o]=C_(t.value,i),s=f_(n,a);t.value=g_(t.value,s);let c=p_(g_(n,s),o);t.value=__(t.value,c),r.value=m_(r.value,n,c),e.value=h_(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=S_(r.value,i),n=v_(x_(t.value,i),e);t.value=__(t.value,n)}else if(e){let n=v_(x_(e.value,i),S_(t.value,i));t.value=g_(t.value,n)}}var D_=new class extends d_{tokenize(e){let t=RegExp(`(\\r?\\n)|[${w_}]+|[^\\S\\n\\r]+|[^${w_}]`,`ug`);return e.match(t)||[]}};function O_(e,t,n){return D_.diff(e,t,n)}new class extends d_{constructor(){super(...arguments),this.tokenize=k_}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function k_(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function A_(e){return e==`.`||e==`!`||e==`?`}new class extends d_{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(A_(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends d_{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends d_{constructor(){super(...arguments),this.tokenize=k_}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(j_(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function j_(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=j_(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=j_(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends d_{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};var M_=e=>!e.added&&!e.removed;function N_(e,t){let n=O_(e,t,{timeout:100})??[{value:e,added:!1,removed:!0,count:1},{value:t,added:!0,removed:!1,count:1}],r=[],i=``,a=``,o=()=>{i&&r.push({value:i,added:!1,removed:!0,count:1}),a&&r.push({value:a,added:!0,removed:!1,count:1}),i=a=``};return n.forEach((e,t)=>{let s=n[t+1],c=M_(e)&&/^[^\S\r\n\u2028\u2029]+$/.test(e.value)&&!!(i||a)&&s!==void 0&&!M_(s);(e.removed||c)&&(i+=e.value),(e.added||c)&&(a+=e.value),M_(e)&&!c&&(o(),r.push(e))}),o(),r}function P_(e,t,n=[],r=!1){if(!e)return{pieces:[{kind:`equal`,parts:[{text:t.map(e=>e.value).join(``),marked:!1}]}],collapsible:!1};let i=n.flatMap(t=>{let n=e.indexOf(t);return n===-1?[]:[[n,n+t.length]]}),a=[],o=0,s=!1;return t.forEach((e,n)=>{let c=e.value;if(e.added){a.push({kind:`insert`,parts:[{text:c,marked:!1}]});return}let l=o;if(o+=c.length,e.removed||c.length<=200){a.push({kind:e.removed?`delete`:`equal`,parts:R_(c,l,i)});return}let u=[],d={kind:`gap`,parts:[{text:`…`,marked:!1}]},f=0;for(let[e,r]of F_(c,l,n>0,n<t.length-1,i))e>f&&u.push(d),u.push({kind:`equal`,parts:R_(c.slice(e,r),l+e,i)}),f=r;f<c.length&&u.push(d),s||=u.includes(d),a.push(...r?[{kind:`equal`,parts:R_(c,l,i)}]:u)}),{pieces:a,collapsible:s}}function F_(e,t,n,r,i){let a=[];n&&a.push([0,80]),r&&a.push([e.length-80,e.length]);for(let[n,r]of i)n<t+e.length&&r>t&&a.push([n-t-80/2,r-t+80/2]);if(!a.length)return[[0,e.length]];let o=[];for(let[t,n]of a.map(([t,n])=>[I_(e,Math.max(t,0)),L_(e,Math.min(n,e.length))]).sort((e,t)=>e[0]-t[0])){let e=o.at(-1);e&&t-e[1]<40?e[1]=Math.max(e[1],n):o.push([t,n])}return o[0][0]<40&&(o[0][0]=0),e.length-o.at(-1)[1]<40&&(o.at(-1)[1]=e.length),o}function I_(e,t){let n=e.slice(0,t).search(/\s\S*$/);return t===0||n===-1?0:n+1}function L_(e,t){let n=e.slice(t).search(/\s/);return n===-1?e.length:t+n}function R_(e,t,n){let r=(e,t)=>n.some(([n,r])=>n<t&&r>e),i=new Set([0,e.length]);for(let[r,a]of n)i.add(Math.min(Math.max(r-t,0),e.length)),i.add(Math.min(Math.max(a-t,0),e.length));let a=[...i].sort((e,t)=>e-t);return a.slice(1).flatMap((n,i)=>{let o=a[i];return n>o?[{text:e.slice(o,n),marked:r(t+o,t+n)}]:[]})}var z_=a`
  :host {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--c-spacing-md);
  }

  :host([hidden]) {
    display: none;
  }

  .text {
    margin: 0;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    line-height: 1.6;
  }

  del,
  ins {
    border-radius: var(--c-radius-sm);
    padding-inline: 0.125em;
  }

  del {
    background: var(--c-color-danger-fill-quiet);
    color: var(--c-color-danger-on-quiet);
    text-decoration: line-through;
  }

  ins {
    background: var(--c-color-success-fill-quiet);
    color: var(--c-color-success-on-quiet);
    text-decoration: underline;
  }

  del + ins {
    margin-inline-start: 0.25em;
  }

  mark {
    background: none;
    color: inherit;
    text-decoration: underline wavy var(--c-color-warning-border-normal);
    text-decoration-skip-ink: none;
    text-underline-offset: 0.25em;
  }

  .gap {
    padding-inline: 0.25em;
  }
`,B_=class extends u{constructor(...e){super(...e),this.current=``,this.proposed=``,this.highlights=[],this.collapse=!1,this.label=``,this.expanded=!1,this.changes=[]}willUpdate(e){(e.has(`current`)||e.has(`proposed`))&&(this.changes=N_(this.current,this.proposed),this.expanded=!1)}render(){let{pieces:e,collapsible:t}=P_(this.current,this.changes,this.highlights,!this.collapse||this.expanded);return p`
      <p id="text" class="text" part="text">${e.map(e=>this.renderPiece(e))}</p>
      ${this.collapse&&t?p`<craft-button
            part="toggle"
            type="button"
            variant="plain"
            size="small"
            flush="inline"
            aria-controls="text"
            aria-expanded=${this.expanded?`true`:`false`}
            @click=${()=>this.expanded=!this.expanded}
          >
            ${this.expanded?S(`Show changes only`):S(`Show full text`)}${this.label?p`<span class="cp-visually-hidden"> ${this.label}</span>`:r}
          </craft-button>`:r}
    `}renderPiece(e){let t=e.parts.map(e=>e.marked?p`<mark>${e.text}</mark>`:p`${e.text}`);switch(e.kind){case`gap`:return p`<span class="gap"
          ><span aria-hidden="true">${t}</span
          ><span class="cp-visually-hidden">${S(`Unchanged text`)}</span></span
        >`;case`delete`:return p`<del
          ><span class="cp-visually-hidden">${S(`Deleted:`)} </span>${t}</del
        >`;case`insert`:return p`<ins
          ><span class="cp-visually-hidden">${S(`Inserted:`)} </span
          >${t}</ins
        >`;default:return t}}};B_.styles=[se,z_],n([s()],B_.prototype,`current`,void 0),n([s()],B_.prototype,`proposed`,void 0),n([s({type:Array})],B_.prototype,`highlights`,void 0),n([s({type:Boolean,reflect:!0})],B_.prototype,`collapse`,void 0),n([s()],B_.prototype,`label`,void 0),n([f()],B_.prototype,`expanded`,void 0),customElements.get(`craft-text-diff`)||customElements.define(`craft-text-diff`,B_);var V_=new Map;function H_(e){var t=V_.get(e);t&&t.destroy()}function U_(e){var t=V_.get(e);t&&t.update()}var W_=null;typeof window>`u`?((W_=function(e){return e}).destroy=function(e){return e},W_.update=function(e){return e}):((W_=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&e.nodeName===`TEXTAREA`&&!V_.has(e)){var t,n=null,r=window.getComputedStyle(e),i=(t=e.value,function(){o({testForHeightReduction:t===``||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener(`autosize:destroy`,a),e.removeEventListener(`autosize:update`,s),e.removeEventListener(`input`,i),window.removeEventListener(`resize`,s),Object.keys(t).forEach(function(n){return e.style[n]=t[n]}),V_.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener(`autosize:destroy`,a),e.addEventListener(`autosize:update`,s),e.addEventListener(`input`,i),window.addEventListener(`resize`,s),e.style.overflowX=`hidden`,e.style.wordWrap=`break-word`,V_.set(e,{destroy:a,update:s}),s()}function o(t){var i,a,s=t.restoreTextAlign,c=s===void 0?null:s,l=t.testForHeightReduction,u=l===void 0||l,d=r.overflowY;if(e.scrollHeight!==0&&(r.resize===`vertical`?e.style.resize=`none`:r.resize===`both`&&(e.style.resize=`horizontal`),u&&(i=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],n=e[1];t.style.scrollBehavior=`auto`,t.scrollTop=n,t.style.scrollBehavior=null})}}(e),e.style.height=``),a=r.boxSizing===`content-box`?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!==`none`&&a>parseFloat(r.maxHeight)?(r.overflowY===`hidden`&&(e.style.overflow=`scroll`),a=parseFloat(r.maxHeight)):r.overflowY!==`hidden`&&(e.style.overflow=`hidden`),e.style.height=a+`px`,c&&(e.style.textAlign=c),i&&i(),n!==a&&(e.dispatchEvent(new Event(`autosize:resized`,{bubbles:!0})),n=a),d!==r.overflow&&!c)){var f=r.textAlign;r.overflow===`hidden`&&(e.style.textAlign=f===`start`?`end`:`start`),o({restoreTextAlign:f,testForHeightReduction:!0})}}function s(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],H_),e},W_.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],U_),e});var G_=W_,K_=class extends ui{get _inputNode(){return Array.from(this.children).find(e=>e.slot===`input`)}},q_=class extends mi(K_){static get properties(){return{maxRows:{type:Number,attribute:`max-rows`},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`textarea`);return e.style.resize!==void 0&&(e.style.resize=`none`),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=``}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has(`name`)&&(this._inputNode.name=this.name),e.has(`autocomplete`)&&(this._inputNode.autocomplete=this.autocomplete),e.has(`disabled`)&&(this._inputNode.disabled=this.disabled,this.validate()),e.has(`rows`)){let e=this._inputNode;e&&(e.rows=this.rows)}if(e.has(`readOnly`)){let e=this._inputNode;e&&(e.readOnly=this.readOnly)}if(e.has(`placeholder`)){let e=this._inputNode;e&&(e.placeholder=this.placeholder)}e.has(`modelValue`)&&this.resizeTextarea(),(e.has(`maxRows`)||e.has(`rows`))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),G_.destroy(this._inputNode)}setTextareaMaxHeight(){let{value:e}=this._inputNode;this._inputNode.value=``,this.resizeTextarea();let t=window.getComputedStyle(this._inputNode,null),n=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,r=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),i=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),a=t.boxSizing===`border-box`?r+i:0;this._inputNode.style.maxHeight=`${n*this.maxRows+a}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,a`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){G_.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;e!==0&&!this.__shady_native_contains(this._inputNode);)await new Promise(e=>setTimeout(e)),--e}__startAutoresize(){G_(this._inputNode),this.setTextareaMaxHeight()}},J_=a`
  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    ${Bn}
    padding-block: var(--c-spacing-md);
    line-height: var(--leading-normal);
    resize: vertical;
  }
`,Y_=new WeakMap,X_=new WeakMap,Z_=new WeakMap,Q_=new WeakMap,$_=new WeakSet,ev=class extends nr(q_){constructor(...e){super(...e),_(this,$_),this.monospace=!1,y(this,Y_,void 0),y(this,X_,void 0),y(this,Z_,null),y(this,Q_,e=>{v(Z_,this,e.target.style.height)})}static get styles(){return[...super.styles,Wn,J_]}connectedCallback(){super.connectedCallback(),b($_,this,tv).call(this)}disconnectedCallback(){super.disconnectedCallback(),g(Y_,this)?.disconnect(),v(Y_,this,void 0),g(X_,this)?.disconnect(),v(X_,this,void 0),this._inputNode?.removeEventListener(`autosize:resized`,g(Q_,this))}};function tv(){let e=this._inputNode;!e||typeof ResizeObserver>`u`||typeof MutationObserver>`u`||(v(Z_,this,e.style.height),e.style.removeProperty(`resize`),e.addEventListener(`autosize:resized`,g(Q_,this)),v(X_,this,new MutationObserver(()=>{e.style.resize!==``&&e.style.removeProperty(`resize`)})),g(X_,this).observe(e,{attributes:!0,attributeFilter:[`style`]}),v(Y_,this,new ResizeObserver(()=>{if(e.style.height===g(Z_,this))return;let t=e.style.height;G_.destroy(e),e.style.height=t,e.style.removeProperty(`overflow`),g(X_,this)?.disconnect(),v(X_,this,void 0),g(Y_,this)?.disconnect(),v(Y_,this,void 0)})),g(Y_,this).observe(e))}n([s({type:Boolean,reflect:!0})],ev.prototype,`monospace`,void 0),customElements.get(`craft-textarea`)||customElements.define(`craft-textarea`,ev);var nv=a`
  :host {
    display: block;
    min-width: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .timeline-item {
    position: relative;
    display: grid;
    grid-template-columns: 1.75rem minmax(0, 1fr);
    gap: var(--c-spacing-md);
    padding-block-end: var(--c-spacing-md);
  }

  :host([last]) .timeline-item {
    padding-block-end: 0;
  }

  .timeline-item::after {
    position: absolute;
    inset-block: calc(var(--c-spacing-md) + 0.875rem)
      calc(-1 * var(--c-spacing-md) - 0.875rem);
    inset-inline-start: 0.85rem;
    width: 1px;
    background: var(--c-color-neutral-border-quiet);
    content: '';
  }

  :host([last]) .timeline-item::after {
    display: none;
  }

  .timeline-item__marker {
    z-index: 1;
    display: grid;
    width: 1.75rem;
    height: 1.75rem;
    place-items: center;
    border: 1px solid var(--c-color-neutral-border-normal);
    border-radius: 50%;
    background: var(--c-color-neutral-fill-quiet);
  }

  .timeline-item__content,
  .timeline-item__header,
  .timeline-item__heading,
  .timeline-item__body {
    min-width: 0;
  }

  .timeline-item__content {
    display: flex;
    flex-direction: column;
    gap: var(--c-spacing-xs);
  }

  .timeline-item__header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    column-gap: var(--c-spacing-xs);
  }

  .timeline-item__meta {
    position: relative;
    inset-block-start: 1px;
    display: flex;
    flex: none;
    align-items: center;
    gap: var(--c-spacing-xs);
    color: var(--c-text-quiet);
    font-size: var(--c-text-xs);
    line-height: 1;
    white-space: nowrap;
  }

  .timeline-item__footer {
    color: var(--c-text-quiet);
    font-size: var(--c-text-xs);
  }
`,rv=class extends u{constructor(...e){super(...e),this.last=!1,this._hasHeading=!1,this._hasMeta=!1,this._hasBody=!1,this._hasFooter=!1,this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence())}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect()}_syncSlotPresence(){this._hasHeading=!!this.querySelector(`:scope > [slot="heading"]`),this._hasMeta=!!this.querySelector(`:scope > [slot="meta"]`),this._hasBody=[...this.childNodes].some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e instanceof HTMLElement&&!e.slot),this._hasFooter=!!this.querySelector(`:scope > [slot="footer"]`)}render(){return p`
      <div class="timeline-item" part="base">
        <span class="timeline-item__marker" part="marker" aria-hidden="true">
          <slot name="marker"></slot>
        </span>
        <div class="timeline-item__content" part="content">
          ${this._hasHeading||this._hasMeta?p`<div class="timeline-item__header" part="header">
                ${this._hasHeading?p`<div class="timeline-item__heading" part="heading">
                      <slot name="heading"></slot>
                    </div>`:r}
                ${this._hasMeta?p`<div class="timeline-item__meta" part="meta">
                      <slot name="meta"></slot>
                    </div>`:r}
              </div>`:r}
          ${this._hasBody?p`<div class="timeline-item__body" part="body">
                <slot></slot>
              </div>`:r}
          ${this._hasFooter?p`<div class="timeline-item__footer" part="footer">
                <slot name="footer"></slot>
              </div>`:r}
        </div>
      </div>
    `}};rv.styles=[nv],n([s({type:Boolean,reflect:!0})],rv.prototype,`last`,void 0),n([f()],rv.prototype,`_hasHeading`,void 0),n([f()],rv.prototype,`_hasMeta`,void 0),n([f()],rv.prototype,`_hasBody`,void 0),n([f()],rv.prototype,`_hasFooter`,void 0),customElements.get(`craft-timeline-item`)||customElements.define(`craft-timeline-item`,rv);var iv=class{constructor(e,t,{tabInsertsSuggestions:n,firstOptionSelectionMode:r,scrollIntoViewOptions:i}={}){this.input=e,this.list=t,this.tabInsertsSuggestions=n??!0,this.firstOptionSelectionMode=r??`none`,this.scrollIntoViewOptions=i??{block:`nearest`,inline:`nearest`},this.isComposing=!1,this.didAutoAssignLastSelectedId=!1,t.id||=`combobox-${Math.random().toString().slice(2,6)}`,this.ctrlBindings=!!navigator.userAgent.match(/Macintosh/),this.keyboardEventHandler=e=>av(e,this),this.compositionEventHandler=e=>dv(e,this),this.inputHandler=this.clearSelection.bind(this),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-haspopup`,`listbox`)}destroy(){this.clearSelection(),this.stop(),this.input.removeAttribute(`role`),this.input.removeAttribute(`aria-controls`),this.input.removeAttribute(`aria-expanded`),this.input.removeAttribute(`aria-autocomplete`),this.input.removeAttribute(`aria-haspopup`)}start(){this.input.setAttribute(`aria-expanded`,`true`),this.input.addEventListener(`compositionstart`,this.compositionEventHandler),this.input.addEventListener(`compositionend`,this.compositionEventHandler),this.input.addEventListener(`input`,this.inputHandler),this.input.addEventListener(`keydown`,this.keyboardEventHandler),this.list.addEventListener(`click`,ov),this.resetSelection()}stop(){this.clearSelection(),this.input.setAttribute(`aria-expanded`,`false`),this.input.removeEventListener(`compositionstart`,this.compositionEventHandler),this.input.removeEventListener(`compositionend`,this.compositionEventHandler),this.input.removeEventListener(`input`,this.inputHandler),this.input.removeEventListener(`keydown`,this.keyboardEventHandler),this.list.removeEventListener(`click`,ov)}indicateDefaultOption(){var e;this.firstOptionSelectionMode===`active`?(e=Array.from(this.list.querySelectorAll(`[role="option"]:not([aria-disabled="true"])`)).filter(uv)[0])==null||e.setAttribute(`data-combobox-option-default`,`true`):this.firstOptionSelectionMode===`selected`&&this.navigate(1)}navigate(e=1){let t=Array.from(this.list.querySelectorAll(`[aria-selected="true"]`)).filter(uv)[0],n=Array.from(this.list.querySelectorAll(`[role="option"]`)).filter(uv),r=n.indexOf(t);if(r===n.length-1&&e===1||r===0&&e===-1){this.clearSelection(),this.input.focus();return}let i=e===1?0:n.length-1;if(t&&r>=0){let t=r+e;t>=0&&t<n.length&&(i=t)}let a=n[i];if(a)for(let e of n)e.removeAttribute(`data-combobox-option-default`),a===e?(!a.id&&!document.getElementById(`${this.list.id}-selected`)&&(a.id=`${this.list.id}-selected`,this.didAutoAssignLastSelectedId=!0),a.id&&this.input.setAttribute(`aria-activedescendant`,a.id),a.setAttribute(`aria-selected`,`true`),lv(a),a.scrollIntoView(this.scrollIntoViewOptions)):(e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1),e.removeAttribute(`aria-selected`))}clearSelection(){this.input.removeAttribute(`aria-activedescendant`);for(let e of this.list.querySelectorAll(`[aria-selected="true"], [data-combobox-option-default="true"]`))e.removeAttribute(`aria-selected`),e.removeAttribute(`data-combobox-option-default`),e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1)}resetSelection(){this.clearSelection(),this.indicateDefaultOption()}};function av(e,t){if(!(e.shiftKey||e.metaKey||e.altKey)&&!(!t.ctrlBindings&&e.ctrlKey)&&!t.isComposing)switch(e.key){case`Enter`:sv(t.input,t.list)&&e.preventDefault();break;case`Tab`:t.tabInsertsSuggestions&&sv(t.input,t.list)&&e.preventDefault();break;case`Escape`:t.clearSelection();break;case`ArrowDown`:t.navigate(1),e.preventDefault();break;case`ArrowUp`:t.navigate(-1),e.preventDefault();break;case`n`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(1),e.preventDefault());break;case`p`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(-1),e.preventDefault());break;default:if(e.ctrlKey)break;t.resetSelection()}}function ov(e){if(!(e.target instanceof Element))return;let t=e.target.closest(`[role="option"]`);t&&t.getAttribute(`aria-disabled`)!==`true`&&cv(t,{event:e})}function sv(e,t){let n=t.querySelector(`[aria-selected="true"], [data-combobox-option-default="true"]`);return n?(n.getAttribute(`aria-disabled`)===`true`||n.click(),!0):!1}function cv(e,t){e.dispatchEvent(new CustomEvent(`combobox-commit`,{bubbles:!0,detail:t}))}function lv(e){e.dispatchEvent(new Event(`combobox-select`,{bubbles:!0}))}function uv(e){return!e.hidden&&!(e instanceof HTMLInputElement&&e.type===`hidden`)&&(e.offsetWidth>0||e.offsetHeight>0)}function dv(e,t){t.isComposing=e.type===`compositionstart`,document.getElementById(t.input.getAttribute(`aria-controls`)||``)&&t.clearSelection()}var fv=class extends Event{constructor(){super(`update`)}},pv=new WeakMap,mv=class e extends EventTarget{#e=new MutationObserver(()=>this.#f());#t=new ResizeObserver(()=>this.#d());#n;#r=document.createElement(`div`);#i=document.createElement(`div`);static for(t){let n=pv.get(t);return n||(n=new e(t),pv.set(t,n)),n}constructor(e){super(),this.#n=new WeakRef(e),this.#r.style.position=`absolute`,this.#r.style.pointerEvents=`none`,this.#r.setAttribute(`aria-hidden`,`true`),this.#r.appendChild(this.#i),this.#i.style.pointerEvents=`none`,this.#i.style.userSelect=`none`,this.#i.style.overflow=`hidden`,this.#i.style.display=`block`,this.#i.style.visibility=`hidden`,e instanceof HTMLTextAreaElement?(this.#i.style.whiteSpace=`pre-wrap`,this.#i.style.wordWrap=`break-word`):(this.#i.style.whiteSpace=`nowrap`,this.#i.style.display=`table-cell`,this.#i.style.verticalAlign=`middle`),e.after(this.#r),this.#f(),this.#p(),this.#e.observe(e,{attributeFilter:[`style`,`dir`]}),this.#t.observe(e),document.addEventListener(`scroll`,this.#h,{capture:!0}),window.addEventListener(`resize`,this.#h,{capture:!0}),e.addEventListener(`input`,this.#m,{capture:!0})}get element(){return this.#i}forceUpdate(){this.#f(),this.#p()}disconnect(){this.#r?.remove(),this.#e.disconnect(),this.#t.disconnect(),document.removeEventListener(`scroll`,this.#h,{capture:!0}),window.removeEventListener(`resize`,this.#h,{capture:!0});let e=this.#a;e&&(e.removeEventListener(`input`,this.#m,{capture:!0}),pv.delete(e))}get#a(){return this.#n?.deref()}#o(e){let t=this.#a;return t?e(t):this.disconnect()}#s=0;#c=0;#l(){this.#o(e=>{let t=window.getComputedStyle(e);this.#i.style.height=t.height,this.#i.style.width=t.width,e.clientHeight!==this.#i.clientHeight&&(this.#i.style.height=`calc(${t.height} + ${e.clientHeight-this.#i.clientHeight}px)`),e.clientWidth!==this.#i.clientWidth&&(this.#i.style.width=`calc(${t.width} + ${e.clientWidth-this.#i.clientWidth}px)`);let n=e.getBoundingClientRect(),r=this.#i.getBoundingClientRect();this.#s=this.#s+n.left-r.left,this.#c=this.#c+n.top-r.top,this.#i.style.transform=`translate(${this.#s}px, ${this.#c}px)`,this.#i.scrollTop=e.scrollTop,this.#i.scrollLeft=e.scrollLeft,this.dispatchEvent(new fv)})}#u=!1;#d(){this.#u||(this.#u=!0,requestAnimationFrame(()=>{this.#l(),this.#u=!1}))}#f(){this.#o(e=>{let t=window.getComputedStyle(e);for(let e of hv)this.#i.style[e]=t[e];this.#d()})}#p(){this.#o(e=>{this.#i.textContent=e.value,this.#l()})}#m=()=>this.#p();#h=e=>{this.#o(t=>{(e.target===document||e.target===window||e.target instanceof Node&&e.target.contains(t))&&this.#d()})}},hv=`direction.writingMode.unicodeBidi.textOrientation.boxSizing.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize`.split(`.`),gv=class e{#e;#t;#n;constructor(e,t=0,n=t){this.#e=e,this.#t=t,this.#n=n}static fromSelection(t){let{selectionStart:n,selectionEnd:r}=t;return new e(t,n??void 0,r??void 0)}get collapsed(){return this.startOffset===this.endOffset}get commonAncestorContainer(){return this.#e}get endContainer(){return this.#e}get startContainer(){return this.#e}get startOffset(){return this.#t}get endOffset(){return this.#n}setStartOffset(e){this.#t=this.#a(e)}setEndOffset(e){this.#n=this.#a(e)}collapse(e=!1){e?this.setEndOffset(this.startOffset):this.setStartOffset(this.endOffset)}cloneContents(){return this.#o().cloneContents()}cloneRange(){return new e(this.#e,this.startOffset,this.endOffset)}getBoundingClientRect(){return this.#o().getBoundingClientRect()}getClientRects(){return this.#o().getClientRects()}toString(){return this.#o().toString()}getStyleClone(){return this.#r}get#r(){return mv.for(this.#e)}get#i(){return this.#r}#a(e){return Math.max(0,Math.min(e,this.#e.value.length))}#o(){let e=document.createRange(),t=this.#i.element.childNodes[0];return t&&(e.setStart(t,this.startOffset),e.setEnd(t,this.endOffset)),e}},_v=a`
  :host {
    display: contents;
  }

  craft-popover::part(popup) {
    min-width: 0;
    max-width: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
  }

  .text-expander__popup {
    padding: var(--c-spacing-sm);
  }

  ::slotted([slot='listbox']) {
    display: grid;
    gap: var(--c-spacing-xs);
    max-height: calc(320rem / 16);
    overflow-y: auto;
    outline: none;
  }

  .text-expander__loading {
    padding-block: var(--c-spacing-sm);
    padding-inline: var(--c-spacing-md);
    color: var(--c-text-quiet);
  }
`,vv=/^[\p{L}\p{N}_.-]*$/u,yv=S(`Suggestions`),bv=[`role`,`aria-autocomplete`,`aria-haspopup`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-busy`],xv={handlesAccessibility:!1,visibilityTriggerFunction:void 0},Sv=0,J=new WeakMap,Cv=new WeakMap,wv=new WeakMap,Tv=new WeakMap,Ev=new WeakMap,Dv=new WeakMap,Ov=new WeakMap,kv=new WeakMap,Av=new WeakMap,jv=new WeakMap,Mv=new WeakMap,Nv=new WeakMap,Pv=new WeakMap,Fv=new WeakMap,Y=new WeakSet,Iv=new WeakMap,Lv=new WeakMap,Rv=new WeakMap,zv=new WeakMap,Bv=new WeakMap,Vv=new WeakMap,Hv=new WeakMap,Uv=new WeakMap,Wv=new WeakMap,Gv=new WeakMap,Kv=new WeakMap,qv=new WeakMap,Jv=class extends u{constructor(...e){super(...e),_(this,Y),this.for=``,this.triggers=[],this.loading=!1,this.announcement=``,y(this,J,void 0),y(this,Cv,null),y(this,wv,null),y(this,Tv,new Map),y(this,Ev,null),y(this,Dv,[]),y(this,Ov,0),y(this,kv,null),y(this,Av,null),y(this,jv,null),y(this,Mv,!1),y(this,Nv,null),y(this,Pv,new DOMRect),y(this,Fv,new MutationObserver(()=>{let e=b(Y,this,Xv).call(this);(vy(e)&&e!==g(Cv,this)||g(Cv,this)&&!g(Cv,this).isConnected)&&b(Y,this,Zv).call(this)})),y(this,Iv,()=>{g(Mv,this)||b(Y,this,iy).call(this)}),y(this,Lv,()=>{v(Mv,this,!0),b(Y,this,fy).call(this)}),y(this,Rv,()=>{v(Mv,this,!1),b(Y,this,iy).call(this)}),y(this,zv,()=>{queueMicrotask(()=>b(Y,this,fy).call(this))}),y(this,Bv,()=>{let e=g(Cv,this);!e||!g(Ev,this)||!yy(e)||queueMicrotask(()=>{g(Ev,this)&&(e.selectionStart!==g(Ev,this).end||e.selectionEnd!==g(Ev,this).end)&&b(Y,this,iy).call(this)})}),y(this,Vv,()=>{g(Ev,this)&&b(Y,this,dy).call(this)}),y(this,Hv,e=>{let t=e;g(Ev,this)&&g(J,this).querySelector(`[aria-selected="true"]`)&&[`ArrowDown`,`ArrowUp`,`Enter`].includes(t.key)&&t.stopPropagation()}),y(this,Uv,e=>{e.target instanceof Element&&e.target.closest(`[role="option"]`)&&e.preventDefault()}),y(this,Wv,e=>{e.pointerType===`touch`&&e.target instanceof Element&&e.target.closest(`[role="option"]`)?.click()}),y(this,Gv,e=>{b(Y,this,cy).call(this,Number(e.target.dataset.index))}),y(this,Kv,e=>{if(e.target!==this.popoverElement)return;let t=g(J,this).getAttribute(`aria-label`)??yv;b(Y,this,hy).call(this),v(Ev,this,null),b(Y,this,my).call(this),b(Y,this,gy).call(this,t===yv?S(`Suggestions collapsed`):S(`{name} suggestions collapsed`,{name:t})),g(qv,this).call(this,e)}),y(this,qv,e=>{e.target===this.popoverElement&&e.stopPropagation()})}connectedCallback(){super.connectedCallback(),b(Y,this,Yv).call(this),this.hasUpdated&&b(Y,this,Zv).call(this)}disconnectedCallback(){b(Y,this,$v).call(this),g(J,this)?.remove(),g(jv,this)!==null&&(clearTimeout(g(jv,this)),v(jv,this,null)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),b(Y,this,Zv).call(this)}updated(e){if(super.updated(e),e.has(`for`)&&g(Cv,this)!==b(Y,this,Xv).call(this)&&b(Y,this,Zv).call(this),e.has(`triggers`)&&e.get(`triggers`)&&g(Ev,this)){let e=g(J,this).querySelector(`[aria-selected="true"]`),t=e?g(Dv,this)[Number(e.dataset.index)]:void 0;b(Y,this,iy).call(this,t)}}render(){return p`
      <craft-popover
        exportparts="popup"
        .config=${xv}
        @craft-show=${g(qv,this)}
        @craft-hide=${g(Kv,this)}
        @craft-after-show=${g(qv,this)}
        @craft-after-hide=${g(qv,this)}
      >
        <div class="text-expander__popup" slot="content">
          ${this.loading?p`<div class="text-expander__loading" part="loading">
                <slot name="loading">${S(`Loading`)}</slot>
              </div>`:r}
          <slot name="listbox"></slot>
        </div>
      </craft-popover>
      <div class="cp-visually-hidden" aria-live="polite" aria-atomic="true">
        ${this.announcement}
      </div>
    `}};function Yv(){v(J,this,document.createElement(`div`)),g(J,this).id=`craft-text-expander-listbox-${++Sv}`,g(J,this).slot=`listbox`,g(J,this).setAttribute(`part`,`listbox`),g(J,this).role=`listbox`,g(J,this).setAttribute(`aria-label`,yv),g(J,this).addEventListener(`pointerdown`,g(Uv,this)),g(J,this).addEventListener(`pointerup`,g(Wv,this)),g(J,this).addEventListener(`combobox-commit`,g(Gv,this)),this.append(g(J,this))}function Xv(){return this.getRootNode().getElementById(this.for)}function Zv(){let e=b(Y,this,Xv).call(this);if(b(Y,this,$v).call(this),!vy(e)){b(Y,this,Qv).call(this);return}v(Cv,this,e),b(Y,this,ey).call(this,e),v(wv,this,new iv(e,g(J,this),{tabInsertsSuggestions:!1,firstOptionSelectionMode:`selected`,scrollIntoViewOptions:{block:`nearest`}})),b(Y,this,ty).call(this,e),e.addEventListener(`input`,g(Iv,this)),e.addEventListener(`keydown`,g(Hv,this)),e.addEventListener(`blur`,g(zv,this)),e.addEventListener(`compositionstart`,g(Lv,this)),e.addEventListener(`compositionend`,g(Rv,this)),e.ownerDocument.addEventListener(`selectionchange`,g(Bv,this)),this.popoverElement.anchor={contextElement:e,getBoundingClientRect:()=>g(Pv,this)},b(Y,this,Qv).call(this)}function Qv(){g(Fv,this).observe(this.getRootNode(),{attributes:!0,attributeFilter:[`id`],childList:!0,subtree:!0})}function $v(){g(Fv,this).disconnect(),b(Y,this,fy).call(this);let e=g(Cv,this);e&&(e.removeEventListener(`input`,g(Iv,this)),e.removeEventListener(`keydown`,g(Hv,this)),e.removeEventListener(`blur`,g(zv,this)),e.removeEventListener(`compositionstart`,g(Lv,this)),e.removeEventListener(`compositionend`,g(Rv,this)),e.ownerDocument.removeEventListener(`selectionchange`,g(Bv,this)),g(Nv,this)?.getStyleClone().disconnect(),v(Nv,this,null),g(wv,this)?.destroy(),v(wv,this,null),b(Y,this,ny).call(this,e),v(Cv,this,null))}function ey(e){g(Tv,this).clear();for(let t of bv)g(Tv,this).set(t,e.getAttribute(t))}function ty(e){let t=[g(Tv,this).get(`aria-controls`),g(J,this).id].filter(Boolean).join(` `);e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t),e.setAttribute(`data-text-expander-input`,``),e.getAttribute(`role`)===`combobox`&&e.removeAttribute(`role`),e instanceof HTMLInputElement?e.setAttribute(`aria-haspopup`,`listbox`):b(Y,this,ry).call(this,e,`aria-haspopup`),b(Y,this,ry).call(this,e,`aria-expanded`)}function ny(e){for(let t of bv)b(Y,this,ry).call(this,e,t);g(Tv,this).clear()}function ry(e,t){let n=g(Tv,this).get(t);n==null?e.removeAttribute(t):e.setAttribute(t,n)}function iy(e){b(Y,this,hy).call(this);let t=b(Y,this,oy).call(this);if(!t){v(Ev,this,null),b(Y,this,py).call(this);return}v(Ev,this,t);let n=t.trigger.limit;if(t.trigger.options){this.loading=!1;let r=t.query.toLowerCase(),i=t.trigger.options.filter(e=>[e.label,...e.keywords??[]].some(e=>e.toLowerCase().includes(r)));b(Y,this,sy).call(this,n===void 0?i:i.slice(0,n),e);return}this.loading=!0,b(Y,this,sy).call(this,[]),b(Y,this,gy).call(this,S(`Loading`));let r=g(Ov,this);v(Av,this,setTimeout(()=>{b(Y,this,ay).call(this,t,n,r,e)},150))}async function ay(e,t,n,r){v(kv,this,new AbortController);let i;try{let n=await x.get(e.trigger.source,{params:{query:`${e.character}${e.query}`,...t===void 0?{}:{limit:t}},signal:g(kv,this).signal});if(!Array.isArray(n.data))throw TypeError(`Text expander sources must return an array.`);i=n.data}catch(t){if(n!==g(Ov,this)||by(t))return;b(Y,this,fy).call(this),this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0,detail:{character:e.character,query:e.query,error:t}}));return}n===g(Ov,this)&&(this.loading=!1,b(Y,this,sy).call(this,t===void 0?i:i.slice(0,t),r))}function oy(){let e=g(Cv,this);if(!e||!e.isConnected||e.disabled||e.readOnly||!yy(e)||e.selectionStart===null||e.selectionEnd===null||e.selectionStart!==e.selectionEnd)return null;let t=e.selectionStart,n=e.value.slice(0,t),r=null;for(let e of this.triggers){let i=e.trigger,a=n.lastIndexOf(i);if(a===-1||r&&a<=r.start)continue;let o=Array.from(n.slice(0,a)).at(-1),s=n.slice(a+i.length);(e.boundary===`anywhere`||(e.boundary===`start`?a===0:!o||/\s/u.test(o)))&&vv.test(s)&&(r={character:i,query:s,start:a,end:t,trigger:e})}return r}function sy(e,t){if(b(Y,this,uy).call(this),v(Dv,this,e),g(J,this).replaceChildren(),g(J,this).hidden=this.loading,g(J,this).setAttribute(`aria-label`,g(Ev,this)?.trigger.label??yv),e.forEach((e,t)=>{let n=document.createElement(`craft-option`),r=_y(e);n.id=`${g(J,this).id}-option-${t}`,n.setAttribute(`part`,`option`),n.dataset.index=String(t),n.setAttribute(`aria-label`,r?`${e.label}, ${r}`:e.label),n.hint=r,n.append(g(Ev,this)?.trigger.renderOption?.(e)??document.createTextNode(e.label)),g(J,this).append(n)}),!this.loading&&!e.length){v(Ev,this,null),b(Y,this,py).call(this),b(Y,this,gy).call(this,S(`No suggestions`));return}this.updateComplete.then(()=>{g(Ev,this)&&b(Y,this,ly).call(this,t)})}function cy(e){let t=g(Cv,this),n=g(Dv,this)[e],r=b(Y,this,oy).call(this),i=g(Ev,this);if(!t||!n||!i||!r||r.start!==i.start||r.end!==i.end||r.character!==i.character||r.query!==i.query){b(Y,this,fy).call(this);return}xy(t,i.start,i.end,n.value);let a={character:i.character,query:i.query,option:n};b(Y,this,fy).call(this),this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:a}))}async function ly(e){await this.popoverElement.updateComplete;let t=g(Cv,this);if(!t||!b(Y,this,dy).call(this)){b(Y,this,fy).call(this);return}if(t.setAttribute(`aria-busy`,String(this.loading)),await this.popoverElement.show(),!(!g(Ev,this)||t!==g(Cv,this))&&g(Dv,this).length&&(g(wv,this)?.start(),b(Y,this,ry).call(this,t,`aria-expanded`),t.removeEventListener(`input`,g(Iv,this)),t.addEventListener(`input`,g(Iv,this)),e)){let t=g(Dv,this).findIndex(t=>t.label===e.label&&t.value===e.value);for(let e=0;e<t;e++)g(wv,this)?.navigate(1)}}function uy(){g(wv,this)?.stop(),g(Cv,this)&&b(Y,this,ry).call(this,g(Cv,this),`aria-expanded`)}function dy(){let e=g(Cv,this),t=e?.selectionStart;if(!e?.isConnected||t==null)return!1;if(!g(Nv,this)){v(Nv,this,new gv(e));let t=g(Nv,this).getStyleClone(),n=t.element.parentElement;n.slot=e.slot,n.style.visibility=`hidden`,t.forceUpdate(),t.addEventListener(`update`,g(Vv,this))}return g(Nv,this).setStartOffset(t),g(Nv,this).setEndOffset(t),v(Pv,this,g(Nv,this).getBoundingClientRect()),this.popoverElement.repositionOverlay(),!0}function fy(){b(Y,this,hy).call(this),v(Ev,this,null),b(Y,this,py).call(this)}function py(){b(Y,this,my).call(this),this.popoverElement.hide()}function my(){this.loading=!1,b(Y,this,uy).call(this),v(Dv,this,[]),g(J,this)?.replaceChildren(),g(J,this)&&(g(J,this).hidden=!1);let e=g(Cv,this);e&&(b(Y,this,ry).call(this,e,`aria-activedescendant`),b(Y,this,ry).call(this,e,`aria-busy`))}function hy(){var e;v(Ov,this,(e=g(Ov,this),e++,e)),g(Av,this)&&(clearTimeout(g(Av,this)),v(Av,this,null)),g(kv,this)?.abort(),v(kv,this,null)}function gy(e){g(jv,this)!==null&&(clearTimeout(g(jv,this)),v(jv,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),v(jv,this,setTimeout(()=>{v(jv,this,null),this.announcement=``},5e3))}Jv.styles=[se,_v],n([s({reflect:!0})],Jv.prototype,`for`,void 0),n([s({type:Array})],Jv.prototype,`triggers`,void 0),n([f()],Jv.prototype,`loading`,void 0),n([f()],Jv.prototype,`announcement`,void 0),n([h(`craft-popover`)],Jv.prototype,`popoverElement`,void 0);function _y(e){return typeof e.data!=`object`||e.data===null||!(`hint`in e.data)||typeof e.data.hint!=`string`?null:e.data.hint}function vy(e){return e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&e.type===`text`}function yy(e){return e.getRootNode().activeElement===e}function by(e){return e instanceof DOMException&&e.name===`AbortError`}function xy(e,t,n,r){e.maxLength>=0&&(r=r.slice(0,Math.max(0,e.maxLength-(e.value.length-(n-t)))));let i=`${e.value.slice(0,t)}${r}${e.value.slice(n)}`,a=!1,o=()=>{a=!0};e.focus({preventScroll:!0}),e.setSelectionRange(t,n),e.addEventListener(`input`,o,{once:!0});try{e.ownerDocument.execCommand?.(`insertText`,!1,r)}catch{}e.removeEventListener(`input`,o),e.value!==i&&(e.setRangeText(r,t,n,`end`),a=!1),a||e.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,data:r,inputType:`insertReplacementText`}))}customElements.get(`craft-text-expander`)||customElements.define(`craft-text-expander`,Jv);var Sy=a`
  :host {
    display: inline-flex;
    /* Allow the element to shrink below its content size in flex/grid layouts
       so the text actually truncates instead of forcing the container wider. */
    min-width: 0;
    max-width: 100%;
  }

  /* Unset, \`revert\` leaves a link's own decoration alone. */
  ::slotted(a) {
    text-decoration: var(--c-truncate-link-decoration, revert);
  }

  ::slotted(a:hover) {
    text-decoration: var(--c-truncate-link-hover-decoration, revert);
  }

  .truncate {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${Si}
  }
`,Cy=new WeakMap,wy=new WeakSet,Ty=class extends u{constructor(...e){super(...e),_(this,wy),this.placement=`top`,this.disabled=!1,this.overflowing=!1,this.text=``,y(this,Cy,typeof ResizeObserver<`u`?new ResizeObserver(()=>b(wy,this,Ey).call(this)):null)}connectedCallback(){super.connectedCallback(),g(Cy,this)?.observe(this)}disconnectedCallback(){g(Cy,this)?.disconnect(),super.disconnectedCallback()}firstUpdated(){g(Cy,this)||b(wy,this,Ey).call(this)}render(){let e=this.overflowing&&!this.disabled;return p`
      <span class="truncate" id="content">
        <slot @slotchange=${b(wy,this,Dy)}></slot>
      </span>
      ${e?p`<craft-tooltip for="content" placement=${this.placement}
            >${this.text}</craft-tooltip
          >`:``}
    `}};function Ey(){this.text=(this.textContent??``).replace(/\s+/g,` `).trim();let e=this.content;this.overflowing=!!e&&e.scrollWidth>e.clientWidth}function Dy(){b(wy,this,Ey).call(this)}Ty.styles=Sy,n([s({reflect:!0})],Ty.prototype,`placement`,void 0),n([s({type:Boolean,reflect:!0})],Ty.prototype,`disabled`,void 0),n([f()],Ty.prototype,`overflowing`,void 0),n([f()],Ty.prototype,`text`,void 0),n([h(`.truncate`)],Ty.prototype,`content`,void 0),customElements.get(`craft-truncate`)||customElements.define(`craft-truncate`,Ty);var Oy=a`
  /* Defaults are fallbacks rather than :host declarations, so ancestors' values inherit. */
  :host {
    --_size: var(--c-thumbnail-size, calc(30rem / 16));
    --_box-height: var(--c-thumbnail-height, var(--_size));
    --_checker-size: var(--c-thumbnail-checker-size, 8px);
    --_checker-color: var(--c-thumbnail-checker-color, hsl(211 13% 65% / 0.25));
    --_checker-half: calc(var(--_checker-size) / 2);
    --_image-radius: var(--c-thumbnail-image-radius, 0);

    display: contents;
  }

  .thumbnail {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--_size);
    height: var(--_box-height);
    overflow: clip;
    max-width: 100%;
    max-height: 100%;
  }

  /* Height capped at the box size rather than 100%, which doesn't resolve
     when the box's height is \`auto\` (see --c-thumbnail-height). */
  .thumbnail__image,
  ::slotted(img),
  ::slotted(svg) {
    display: block;
    flex-shrink: 0;
    max-width: 100%;
    max-height: var(--_size);
    object-fit: contain;
  }

  /*
   * A fit image with known dimensions: its box is sized up front, no larger
   * than those dimensions or the thumbnail box, so it's the same before and
   * after it loads. The other axis follows from the inline aspect-ratio.
   */
  .thumbnail__image--landscape {
    width: min(100%, var(--_width));
    height: auto;
  }

  .thumbnail__image--portrait {
    width: auto;
    height: min(var(--_size), var(--_height));
  }

  .thumbnail__image--placeholder {
    background: var(--_placeholder) center / 100% 100% no-repeat;
  }

  .thumbnail--crop .thumbnail__image,
  .thumbnail--stretch .thumbnail__image {
    width: 100%;
    height: 100%;
  }

  /* Shadow-important sizing takes precedence over light-DOM image resets. */
  .thumbnail--crop ::slotted(img),
  .thumbnail--crop ::slotted(svg),
  .thumbnail--stretch ::slotted(img),
  .thumbnail--stretch ::slotted(svg) {
    width: 100% !important;
    height: 100% !important;
  }

  .thumbnail--crop .thumbnail__image,
  .thumbnail--crop ::slotted(img) {
    object-fit: cover;
  }

  .thumbnail--stretch .thumbnail__image,
  .thumbnail--stretch ::slotted(img) {
    object-fit: fill;
  }

  /*
   * The real <img> is visually hidden (cp-visually-hidden) once its frame is
   * captured, so the cover canvas is the only visible child left — a normal,
   * in-flow flex item like .thumbnail__image used to be, not an overlay
   * positioned on top of a still-visible image. It's already pre-sized and
   * pre-cropped in JS to its exact pixel dimensions (see paintCover()), so
   * it just needs a sane cap for later container resizes, same as the image.
   */
  .thumbnail__cover {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  /* Not yet painted — stay out of flow so the empty canvas doesn't disturb
     the still-visible <img>'s layout. Exactly one of the two is ever
     in-flow at a time. */
  .thumbnail__cover--pending {
    position: absolute;
  }

  /* h/t https://gist.github.com/dfrankland/f6fed3e3ccc42e3de482b324126f9542 */
  .thumbnail--checkered {
    background-image:
      linear-gradient(45deg, var(--_checker-color) 25%, transparent 25%),
      linear-gradient(135deg, var(--_checker-color) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--_checker-color) 75%),
      linear-gradient(135deg, transparent 75%, var(--_checker-color) 75%);
    background-size: var(--_checker-size) var(--_checker-size);
    background-position:
      0 0,
      var(--_checker-half) 0,
      var(--_checker-half) calc(-1 * var(--_checker-half)),
      0 var(--_checker-half);
  }

  .thumbnail--placeholder {
    background: var(--_placeholder) center / cover no-repeat;
  }

  .thumbnail--placeholder.thumbnail--stretch {
    background-size: 100% 100%;
  }

  .thumbnail__image,
  .thumbnail__cover,
  ::slotted(img),
  ::slotted(svg),
  .thumbnail--placeholder {
    border-radius: var(--_image-radius);
  }

  .thumbnail--rounded .thumbnail__image,
  .thumbnail--rounded .thumbnail__cover,
  .thumbnail--rounded ::slotted(img),
  .thumbnail--rounded ::slotted(svg),
  .thumbnail--rounded.thumbnail--placeholder {
    border-radius: var(--c-thumbnail-radius, var(--c-radius-full));
  }
`,ky=class e extends u{constructor(...e){super(...e),this.src=null,this.mode=`fit`,this.svgAspectRatios=new Map,this.placeholder=null,this.loaded=!1,this.srcset=null,this.sizes=null,this.alt=``,this.width=null,this.height=null,this.loading=`lazy`,this.checkered=!1,this.rounded=!1,this.animated=!1,this.frozen=!1,this.capturedFrame=null,this.resizeObserver=null}get isAnimated(){return this.animated||e.animatedExtensionPattern.test(this.src??``)||e.animatedExtensionPattern.test(this.srcset??``)}restoreSlottedSvgs(){for(let[e,t]of this.svgAspectRatios)t===null?e.removeAttribute(`preserveAspectRatio`):e.setAttribute(`preserveAspectRatio`,t);this.svgAspectRatios.clear()}updateSlottedSvgs(){if(this.restoreSlottedSvgs(),this.mode!==`crop`&&this.mode!==`stretch`)return;let e=this.shadowRoot?.querySelector(`slot`);for(let t of e?.assignedElements()??[])t instanceof SVGSVGElement&&(this.svgAspectRatios.set(t,t.getAttribute(`preserveAspectRatio`)),t.setAttribute(`preserveAspectRatio`,this.mode===`crop`?`xMidYMid slice`:`none`))}willUpdate(e){let t=e.has(`src`)||e.has(`srcset`)||e.has(`animated`);if(e.has(`src`)&&(this.loaded=!1),t&&(this.frozen=!1,this.capturedFrame=null,this.resizeObserver?.disconnect(),this.resizeObserver=null,!e.has(`src`))){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}updated(){this.updateSlottedSvgs()}connectedCallback(){if(super.connectedCallback(),this.updateSlottedSvgs(),this.hasUpdated&&!this.frozen){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}disconnectedCallback(){this.restoreSlottedSvgs(),this.resizeObserver?.disconnect(),this.resizeObserver=null,super.disconnectedCallback()}render(){let e=this.sizedImage,t={thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded,"thumbnail--crop":this.mode===`crop`,"thumbnail--stretch":this.mode===`stretch`,"thumbnail--placeholder":this.showsPlaceholder&&!e},n=this.showsPlaceholder?{"--_placeholder":`url(${JSON.stringify(this.placeholder)})`}:{};return p`
      <div
        class="${E(t)}"
        style="${Zn(e?{}:n)}"
        part="thumbnail"
      >
        ${this.src?p`<img
              class="${E({thumbnail__image:!0,"thumbnail__image--landscape":e===`landscape`,"thumbnail__image--portrait":e===`portrait`,"thumbnail__image--placeholder":!!e&&this.showsPlaceholder,"cp-visually-hidden":this.frozen})}"
              style="${Zn(e?{...n,"--_width":`${this.width}px`,"--_height":`${this.height}px`,"aspect-ratio":`${this.width} / ${this.height}`}:{})}"
              part="image"
              src="${this.src}"
              srcset="${ft(this.srcset??void 0)}"
              sizes="${ft(this.sizes??void 0)}"
              width="${ft(this.width??void 0)}"
              height="${ft(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
              @load=${this.onImageLoad}
            />`:r}
        ${this.src&&this.isAnimated?p`<canvas
              class="${E({thumbnail__cover:!0,"thumbnail__cover--pending":!this.frozen})}"
              part="cover"
              aria-hidden="true"
              role="presentation"
            ></canvas>`:r}
        <slot @slotchange=${this.updateSlottedSvgs}></slot>
      </div>
    `}get sizedImage(){return this.mode!==`fit`||!this.width||!this.height?null:Number(this.width)>=Number(this.height)?`landscape`:`portrait`}get showsPlaceholder(){return!!(this.placeholder&&this.src&&!this.loaded)}onImageLoad(e){this.loaded=!0,this.attemptFreeze(e.target)}attemptFreeze(e){if(!this.isAnimated||!e.currentSrc)return;let t=new Image;t.onload=()=>{this.capturedFrame=t,this.resizeObserver?.disconnect(),this.resizeObserver=new ResizeObserver(()=>{this.capturedFrame&&this.paintCover(this.capturedFrame,e)}),this.resizeObserver.observe(e)},t.src=e.currentSrc}paintCover(e,t){if(!e.naturalWidth||!e.naturalHeight)return;let n=this.shadowRoot?.querySelector(`canvas.thumbnail__cover`),r=n?.getContext(`2d`);if(!n||!r)return;let i=t.clientWidth,a=t.clientHeight;if(!i||!a)return;let o=window.devicePixelRatio||1;if(n.width=i*o,n.height=a*o,n.style.width=`${i}px`,n.style.height=`${a}px`,r.scale(o,o),this.mode===`crop`){let t=Math.max(i/e.naturalWidth,a/e.naturalHeight),n=i/t,o=a/t;r.drawImage(e,(e.naturalWidth-n)/2,(e.naturalHeight-o)/2,n,o,0,0,i,a)}else r.drawImage(e,0,0,i,a);this.resizeObserver?.disconnect(),this.resizeObserver=null,this.frozen=!0}};ky.styles=[se,Oy],ky.animatedExtensionPattern=/\.(?:gif|webp)(?=[?#\s,]|$)/i,n([s()],ky.prototype,`src`,void 0),n([s({reflect:!0})],ky.prototype,`mode`,void 0),n([s()],ky.prototype,`placeholder`,void 0),n([f()],ky.prototype,`loaded`,void 0),n([s()],ky.prototype,`srcset`,void 0),n([s()],ky.prototype,`sizes`,void 0),n([s()],ky.prototype,`alt`,void 0),n([s({type:Number})],ky.prototype,`width`,void 0),n([s({type:Number})],ky.prototype,`height`,void 0),n([s()],ky.prototype,`loading`,void 0),n([s({type:Boolean,reflect:!0})],ky.prototype,`checkered`,void 0),n([s({type:Boolean,reflect:!0})],ky.prototype,`rounded`,void 0),n([s({type:Boolean,reflect:!0})],ky.prototype,`animated`,void 0),n([f()],ky.prototype,`frozen`,void 0),customElements.get(`craft-thumbnail`)||customElements.define(`craft-thumbnail`,ky);var Ay=new WeakMap,jy=new WeakSet,My=class extends HTMLElement{constructor(...e){super(...e),_(this,jy),y(this,Ay,null)}connectedCallback(){b(jy,this,Ny).call(this)}disconnectedCallback(){g(Ay,this)?.destroy(),v(Ay,this,null)}};function Ny(){if(!(g(Ay,this)||!this.isConnected)){if(!this.querySelector(`[data-sizes]`)){requestAnimationFrame(()=>b(jy,this,Ny).call(this));return}v(Ay,this,new Dc),g(Ay,this).load(this)}}customElements.get(`craft-thumbnail-loader`)||customElements.define(`craft-thumbnail-loader`,My);function Py(e={}){let t=document.createElement(`craft-button`);if(t.type=e.type??`button`,e.id&&(t.id=e.id),e.class)for(let n of e.class.split(/\s+/).filter(Boolean))t.classList.add(n);if(e.ariaLabel&&t.setAttribute(`aria-label`,e.ariaLabel),e.ariaDescribedBy&&t.setAttribute(`aria-describedby`,e.ariaDescribedBy),e.role&&t.setAttribute(`role`,e.role),e.toggle&&t.setAttribute(`aria-expanded`,`false`),e.controls&&t.setAttribute(`aria-controls`,e.controls),e.data)for(let[n,r]of Object.entries(e.data))t.setAttribute(`data-${n}`,String(r));if(e.icon&&(t.icon=e.icon),e.label||e.html){let n=document.createElement(`span`);n.className=`label`,e.label?n.textContent=e.label:n.innerHTML=e.html,t.append(n)}return e.disabled&&(t.disabled=!0),e.loading&&(t.loading=!0),e.variant&&(t.variant=e.variant),e.size&&(t.size=e.size),t}function Fy(e={}){let t=Py({...e,type:`submit`,label:e.label||S(`Submit`),variant:e.variant??`primary`});return t.classList.add(`submit`),t}function Iy(e={}){let t=Py({...e,icon:`duplicate`,label:e.label||wc(S(`Paste {type}`,{type:S(`elements`)}))});return t.classList.add(`paste-btn`),t}var Ly=async(e,t)=>{let{data:n}=await x.post(e,t);return n},Ry=new WeakMap,zy=new WeakMap,By=new WeakMap,Vy=new WeakMap,Hy=new WeakMap,Uy=new WeakMap,Wy=new WeakMap,Gy=new WeakMap,Ky=new WeakMap,qy=new WeakMap,X=new WeakSet,Jy=class e{constructor(t){_(this,X),y(this,Ry,null),y(this,zy,[]),y(this,By,[]),y(this,Vy,null),y(this,Hy,!1),y(this,Uy,!1),y(this,Wy,!1),y(this,Gy,null),y(this,Ky,void 0),y(this,qy,new Map),this.options={...e.defaults,modalTitle:S(`Select element`),selectBtnLabel:S(`Select`),...$y(t)},v(By,this,[...this.options.disabledElementIds??[]]),v(Ky,this,b(X,this,Yy).call(this))}get elementType(){return this.options.elementType}get state(){return g(Ky,this)}get index(){return g(Ry,this)}get hasSelection(){return g(zy,this).length>0}on(e,t){let n=g(qy,this).get(e);return n||(n=new Set,g(qy,this).set(e,n)),n.add(t),()=>{g(qy,this).get(e)?.delete(t)}}async open(){v(zy,this,[]),g(Ry,this)?.clearSelection(),g(Hy,this)||(v(Hy,this,!0),b(X,this,Qy).call(this,`open`,void 0)),b(X,this,Xy).call(this),g(Vy,this)||await this.reload()}close(){g(Hy,this)&&(v(Hy,this,!1),b(X,this,Qy).call(this,`close`,void 0),this.options.onClose?.(),b(X,this,Xy).call(this))}destroy(){g(Ry,this)?.destroy?.(),v(Ry,this,null),v(zy,this,[]),v(Vy,this,null),v(Hy,this,!1),v(Wy,this,!1),v(Uy,this,!1),v(Gy,this,null),b(X,this,Xy).call(this),g(qy,this).clear()}async reload(){let e=this.options.loadIndexBody??Ly;v(Uy,this,!0),v(Gy,this,null),b(X,this,Xy).call(this);try{v(Vy,this,await e(this.options.bodyAction,this.indexParams()))}catch(e){b(X,this,Zy).call(this,e)}finally{v(Uy,this,!1),b(X,this,Xy).call(this)}}async submit(){if(!g(Ky,this).canSubmit)return;let e=this.buildElementInfo(g(zy,this)),t=this.selectMeta();v(Wy,this,!0),b(X,this,Xy).call(this);try{b(X,this,Qy).call(this,`select`,{elements:e,meta:t}),await this.options.onSelect?.(e,t)}catch(e){b(X,this,Zy).call(this,e);return}finally{v(Wy,this,!1),b(X,this,Xy).call(this)}this.options.disableElementsOnSelect&&(this.setDisabledElementIds([...g(By,this),...e.map(e=>Number(e.id))]),g(Ry,this)?.clearSelection()),this.options.hideOnSelect&&this.close()}cancel(){g(Ky,this).canCancel&&(b(X,this,Qy).call(this,`cancel`,void 0),this.options.onCancel?.(),this.close())}attachIndex(e){v(Ry,this,e),b(X,this,Xy).call(this)}detachIndex(){v(Ry,this,null),b(X,this,Xy).call(this)}setSelection(e){v(zy,this,[...e]),b(X,this,Xy).call(this)}setDisabledElementIds(e){v(By,this,[...new Set(e.map(Number))]),b(X,this,Xy).call(this)}setBusy(e){v(Wy,this,e),b(X,this,Xy).call(this)}indexParams(){let{options:e}=this,t={context:e.context??`modal`,elementType:this.elementType,sources:e.sources,condition:e.condition,criteria:{...e.criteria}};return e.showSiteMenu!=null&&e.showSiteMenu!==`auto`&&(t.showSiteMenu=e.showSiteMenu?`1`:`0`),e.siteIds&&(t.siteIds=e.siteIds),e.criteria&&(t.criteria={...e.criteria}),typeof e.indexSettings.showFolders==`boolean`&&(t.showFolders=e.indexSettings.showFolders),t}indexSettings(){let{options:e}=this;return{context:e.context??`modal`,storageKey:e.storageKey,condition:e.condition,referenceElementId:e.referenceElementId,referenceElementOwnerId:e.referenceElementOwnerId,referenceElementSiteId:e.referenceElementSiteId,criteria:{...e.criteria},disabledElementIds:[...g(By,this)],selectable:!0,multiSelect:e.multiSelect,waitForDoubleClicks:!0,hideSidebar:e.hideSidebar,defaultSiteId:e.defaultSiteId,defaultSource:e.defaultSource,defaultSourcePath:e.defaultSourcePath,preferStoredSource:e.preferStoredSource,showSourcePath:e.showSourcePath,...e.indexSettings}}canSubmitSelection(){return g(zy,this).length>0}buildElementInfo(e){return e.map(e=>({...e}))}selectMeta(){return{}}notifyChange(){b(X,this,Xy).call(this)}get selection(){return g(zy,this)}get disabledElementIds(){return g(By,this)}};function Yy(){let e=g(Wy,this),t=g(Uy,this);return Object.freeze({open:g(Hy,this),loading:t,busy:e,selection:Object.freeze([...g(zy,this)]),disabledElementIds:Object.freeze([...g(By,this)]),indexBody:g(Vy,this),error:g(Gy,this),title:this.options.modalTitle,showTitle:this.options.showTitle,selectLabel:this.options.selectBtnLabel,canSubmit:!e&&!t&&this.canSubmitSelection(),canCancel:!e})}function Xy(){v(Ky,this,b(X,this,Yy).call(this)),b(X,this,Qy).call(this,`change`,g(Ky,this))}function Zy(e){v(Gy,this,e instanceof Error?e:Error(String(e??`Unknown`))),b(X,this,Qy).call(this,`error`,g(Gy,this))}function Qy(e,t){let n=g(qy,this).get(e);n&&[...n].forEach(e=>e(t))}Jy.defaults={multiSelect:!1,disabledElementIds:[],disableElementsOnSelect:!1,hideOnSelect:!0,showTitle:!1,fullscreen:!1,bodyAction:`element-selector-modals/body`,indexSettings:{},preferStoredSource:!1,showSourcePath:!0,hideSidebar:!1};function $y(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0))}var eb=async(e,t)=>{let{data:n}=await x.post(`assets/generate-transform`,{assetId:e,handle:t});return n?.url||!1},tb=new WeakMap,nb=class e extends Jy{constructor(e){super(e),y(this,tb,null)}get transforms(){return this.options.transforms??[]}get canApplyTransform(){return this.selection.length>0&&this.transforms.length>0}async selectWithTransform(t){var n;let r=(n=e.transformUrls)[t]??(n[t]={}),i=this.selection.map(e=>Number(e.id)).filter(e=>r[e]===void 0);if(i.length>0){let e=this.options.fetchTransformUrl??eb;this.setBusy(!0);try{for(let n of i)try{r[n]=await e(n,t)}catch{r[n]=!1}}finally{this.setBusy(!1)}}v(tb,this,t);try{await this.submit()}finally{v(tb,this,null)}}buildElementInfo(t){let n=super.buildElementInfo(t);if(!g(tb,this))return n;let r=e.transformUrls[g(tb,this)]??{};for(let e of n){let t=r[Number(e.id)];t!==void 0&&t!==!1&&(e.url=t)}return n}selectMeta(){return{transform:g(tb,this)}}};nb.transformUrls={};var rb=`CraftCms\\Cms\\Asset\\Elements\\Asset`,ib=new WeakSet,ab=class extends Jy{constructor(e={}){let{disabledFolderIds:t=[],...n}=e;super({...n,elementType:rb,showSiteMenu:!1}),_(this,ib),this.disabledFolderIds=[...t]}indexParams(){let e={...super.indexParams(),foldersOnly:!0,showFolders:!0},{indexSettings:t}=this.options,n=this.options.defaultSource??t.defaultSource,r=this.options.defaultSourcePath??t.defaultSourcePath??[];n&&(e.source=n);let i=Number(r[r.length-1]?.folderId);return Number.isFinite(i)&&(e.folderId=i),e}indexSettings(){return{...super.indexSettings(),foldersOnly:!0,disabledFolderIds:[...this.disabledFolderIds]}}currentFolderId(){let e=this.index?.sourcePath;if(!e?.length)return null;let t=e[e.length-1],n=Number(t.folderId);return Number.isFinite(n)?this.disabledFolderIds.includes(n)?null:n:null}canSubmitSelection(){return super.canSubmitSelection()||this.currentFolderId()!==null}buildElementInfo(e){if(e.length>0)return e.map(e=>({...e,folderId:Number(e.folderId??e.id)}));let t=this.currentFolderId();return t===null?[]:[{id:t,folderId:t,siteId:null,label:b(ib,this,ob).call(this),status:null,url:null,hasThumb:!1}]}};function ob(){let e=this.index?.sourcePath;return e?.[e.length-1]?.label??``}var sb=new Map;function cb(e,t){if(sb.has(e))throw Error(`An element selector controller has already been registered for the element type “${e}”.`);sb.set(e,t)}function lb(e){return sb.has(e)}function ub(e){return sb.get(e)??Jy}function db(e){return new(ub(e.elementType))(e)}function fb(){if(typeof window>`u`)return;let e=window.Craft?._elementSelectorModalClasses;if(e)for(let[t,n]of Object.entries(e))sb.has(t)||sb.set(t,n)}var pb={START:`asset-indexes/start-indexing`,STOP:`asset-indexes/stop-indexing-session`,PROCESS:`asset-indexes/process-indexing-session`,OVERVIEW:`asset-indexes/indexing-session-overview`,FINISH:`asset-indexes/finish-indexing-session`},mb=new WeakMap,hb=new WeakMap,gb=new WeakMap,_b=new WeakMap,vb=new WeakMap,yb=new WeakMap,bb=new WeakMap,Z=new WeakSet,xb=class{constructor(e={}){_(this,Z),y(this,mb,new Map),y(this,hb,null),y(this,gb,0),y(this,_b,[]),y(this,vb,[]),y(this,yb,new Set),y(this,bb,new Map);let{existingSessions:t=[],maxConcurrentConnections:n=3,autoResume:r=!0}=e;this.maxConcurrentConnections=n;for(let e of t)g(mb,this).set(e.id,e);r&&(b(Z,this,Tb).call(this),g(hb,this)!==null&&b(Z,this,Eb).call(this))}getSessions(){return Array.from(g(mb,this).values())}getCurrentSessionId(){return g(hb,this)}isProcessing(){return g(gb,this)>0}on(e,t){return g(bb,this).has(e)||g(bb,this).set(e,new Set),g(bb,this).get(e).add(t),()=>{g(bb,this).get(e)?.delete(t)}}async startIndexing(e){let t=await x.post(pb.START,e),{data:n}=t;return n.session&&(g(mb,this).set(n.session.id,n.session),v(hb,this,n.session.id),b(Z,this,Cb).call(this),n.stop||b(Z,this,Eb).call(this)),n.stop&&b(Z,this,wb).call(this,n.stop),t}stopSession(e){b(Z,this,Db).call(this,e),b(Z,this,Ob).call(this,{sessionId:e,action:pb.STOP,params:{sessionId:e},priority:!0})}getSessionOverview(e){b(Z,this,Ob).call(this,{sessionId:e,action:pb.OVERVIEW,params:{sessionId:e},priority:!0})}finishSession(e){b(Z,this,Ob).call(this,{sessionId:e.sessionId,action:pb.FINISH,params:e,priority:!0})}destroy(){g(mb,this).clear(),v(_b,this,[]),v(vb,this,[]),g(bb,this).clear(),v(hb,this,null),v(gb,this,0)}};function Sb(e,t){g(bb,this).get(e)?.forEach(e=>e(t))}function Cb(e){b(Z,this,Sb).call(this,`change`,{sessions:this.getSessions(),currentSessionId:g(hb,this),reviewSessionId:e})}function wb(e){g(mb,this).delete(e),g(hb,this)===e&&v(hb,this,null),b(Z,this,Cb).call(this)}function Tb(){for(let[e,t]of g(mb,this))if(!t.actionRequired&&!g(yb,this).has(e)){v(hb,this,e);return}v(hb,this,null)}function Eb(){if(g(hb,this)||b(Z,this,Tb).call(this),!g(hb,this))return;let e=g(mb,this).get(g(hb,this));if(!e)return;let t=e.totalEntries-e.processedEntries,n=this.maxConcurrentConnections-g(gb,this),r=Math.min(n,t);for(let t=0;t<r;t++)b(Z,this,Ob).call(this,{sessionId:e.id,action:pb.PROCESS,params:{sessionId:g(hb,this)},priority:!1});e.processIfRootEmpty&&b(Z,this,Ob).call(this,{sessionId:e.id,action:pb.PROCESS,params:{sessionId:g(hb,this)},priority:!1})}function Db(e){g(yb,this).add(e),v(_b,this,g(_b,this).filter(t=>t.sessionId!==e))}function Ob(e){e.priority?g(vb,this).push(e):g(_b,this).push(e),b(Z,this,kb).call(this)}function kb(){if(!(g(_b,this).length+g(vb,this).length===0||g(gb,this)>=this.maxConcurrentConnections))for(;g(_b,this).length+g(vb,this).length>0&&g(gb,this)<this.maxConcurrentConnections;){var e;v(gb,this,(e=g(gb,this),e++,e));let t=g(vb,this).length>0?g(vb,this).shift():g(_b,this).shift();b(Z,this,Ab).call(this,t)}}async function Ab(e){try{let t=await x.post(e.action,e.params);b(Z,this,jb).call(this,t.data)}catch(t){b(Z,this,Mb).call(this,t,e)}finally{var t;v(gb,this,(t=g(gb,this),t--,t)),b(Z,this,kb).call(this)}}function jb(e){let t;e.session&&(g(mb,this).set(e.session.id,e.session),b(Z,this,Tb).call(this),e.session.actionRequired&&!e.skipDialog?g(yb,this).has(e.session.id)||(t=e.session.id):g(yb,this).has(e.session.id)||b(Z,this,Eb).call(this)),b(Z,this,Tb).call(this),e.stop&&(g(mb,this).delete(e.stop),g(hb,this)===e.stop&&v(hb,this,null)),b(Z,this,Cb).call(this,t),g(mb,this).size===0&&b(Z,this,Sb).call(this,`complete`,{})}function Mb(e,t){b(Z,this,Tb).call(this);let n=e?.response?.data?.message||e.message||`An error occurred during indexing.`;b(Z,this,Sb).call(this,`error`,{message:n,sessionId:t.sessionId}),b(Z,this,kb).call(this)}var Nb=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},Pb=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Fb,Ib=class{formatToParts(e){let t=[];for(let n of e)t.push({type:`element`,value:n}),t.push({type:`literal`,value:`, `});return t.slice(0,-1)}},Lb=typeof Intl<`u`&&Intl.ListFormat||Ib,Rb=[[`years`,`year`],[`months`,`month`],[`weeks`,`week`],[`days`,`day`],[`hours`,`hour`],[`minutes`,`minute`],[`seconds`,`second`],[`milliseconds`,`millisecond`]],zb={minimumIntegerDigits:2},Bb=class{constructor(e,t={}){Fb.set(this,void 0);let n=String(t.style||`short`);n!==`long`&&n!==`short`&&n!==`narrow`&&n!==`digital`&&(n=`short`);let r=n===`digital`?`numeric`:n,i=t.hours||r;r=i===`2-digit`?`numeric`:i;let a=t.minutes||r;r=a===`2-digit`?`numeric`:a;let o=t.seconds||r;r=o===`2-digit`?`numeric`:o;let s=t.milliseconds||r;Nb(this,Fb,{locale:e,style:n,years:t.years||n===`digital`?`short`:n,yearsDisplay:t.yearsDisplay===`always`?`always`:`auto`,months:t.months||n===`digital`?`short`:n,monthsDisplay:t.monthsDisplay===`always`?`always`:`auto`,weeks:t.weeks||n===`digital`?`short`:n,weeksDisplay:t.weeksDisplay===`always`?`always`:`auto`,days:t.days||n===`digital`?`short`:n,daysDisplay:t.daysDisplay===`always`?`always`:`auto`,hours:i,hoursDisplay:t.hoursDisplay===`always`||n===`digital`?`always`:`auto`,minutes:a,minutesDisplay:t.minutesDisplay===`always`||n===`digital`?`always`:`auto`,seconds:o,secondsDisplay:t.secondsDisplay===`always`||n===`digital`?`always`:`auto`,milliseconds:s,millisecondsDisplay:t.millisecondsDisplay===`always`?`always`:`auto`},`f`)}resolvedOptions(){return Pb(this,Fb,`f`)}formatToParts(e){let t=[],n=Pb(this,Fb,`f`),r=n.style,i=n.locale;for(let[a,o]of Rb){let s=e[a];if(n[`${a}Display`]===`auto`&&!s)continue;let c=n[a],l=c===`2-digit`?zb:c===`numeric`?{}:{style:`unit`,unit:o,unitDisplay:c},u=new Intl.NumberFormat(i,l).format(s);a===`months`&&(c===`narrow`||r===`narrow`&&u.endsWith(`m`))&&(u=u.replace(/(\d+)m$/,`$1mo`)),t.push(u)}return new Lb(i,{type:`unit`,style:r===`digital`?`short`:r}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join(``)}};Fb=new WeakMap;var Vb=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,Hb=[`year`,`month`,`week`,`day`,`hour`,`minute`,`second`,`millisecond`],Ub=e=>Vb.test(e),Wb=class e{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0,s=0){this.years=e,this.months=t,this.weeks=n,this.days=r,this.hours=i,this.minutes=a,this.seconds=o,this.milliseconds=s,this.years||=0,this.sign||=Math.sign(this.years),this.months||=0,this.sign||=Math.sign(this.months),this.weeks||=0,this.sign||=Math.sign(this.weeks),this.days||=0,this.sign||=Math.sign(this.days),this.hours||=0,this.sign||=Math.sign(this.hours),this.minutes||=0,this.sign||=Math.sign(this.minutes),this.seconds||=0,this.sign||=Math.sign(this.seconds),this.milliseconds||=0,this.sign||=Math.sign(this.milliseconds),this.blank=this.sign===0}abs(){return new e(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(t){if(typeof t==`string`){let n=String(t).trim(),r=n.startsWith(`-`)?-1:1,i=n.match(Vb)?.slice(1).map(e=>(Number(e)||0)*r);return i?new e(...i):new e}else if(typeof t==`object`){let{years:n,months:r,weeks:i,days:a,hours:o,minutes:s,seconds:c,milliseconds:l}=t;return new e(n,r,i,a,o,s,c,l)}throw RangeError(`invalid duration`)}static compare(t,n){let r=Date.now(),i=Math.abs(Gb(r,e.from(t)).getTime()-r),a=Math.abs(Gb(r,e.from(n)).getTime()-r);return i>a?-1:+(i<a)}toLocaleString(e,t){return new Bb(e,t).format(this)}};function Gb(e,t){let n=new Date(e);return t.sign<0?(n.setUTCSeconds(n.getUTCSeconds()+t.seconds),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCFullYear(n.getUTCFullYear()+t.years)):(n.setUTCFullYear(n.getUTCFullYear()+t.years),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCSeconds(n.getUTCSeconds()+t.seconds)),n}function Kb(e,t=`second`,n=Date.now()){let r=e.getTime()-n;if(r===0)return new Wb;let i=Math.sign(r),a=Math.abs(r),o=Math.floor(a/1e3),s=Math.floor(o/60),c=Math.floor(s/60),l=Math.floor(c/24),u=Math.floor(l/30),d=Math.floor(u/12),f=Hb.indexOf(t)||Hb.length;return new Wb(f>=0?d*i:0,f>=1?(u-d*12)*i:0,0,f>=3?(l-u*30)*i:0,f>=4?(c-l*24)*i:0,f>=5?(s-c*60)*i:0,f>=6?(o-s*60)*i:0,f>=7?(a-o*1e3)*i:0)}function qb(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;let n=e.sign,r=Math.abs(e.years),i=Math.abs(e.months),a=Math.abs(e.weeks),o=Math.abs(e.days),s=Math.abs(e.hours),c=Math.abs(e.minutes),l=Math.abs(e.seconds),u=Math.abs(e.milliseconds);u>=900&&(l+=Math.round(u/1e3)),(l||c||s||o||a||i||r)&&(u=0),l>=55&&(c+=Math.round(l/60)),(c||s||o||a||i||r)&&(l=0),c>=55&&(s+=Math.round(c/60)),(s||o||a||i||r)&&(c=0),o&&s>=12&&(o+=Math.round(s/24)),!o&&s>=21&&(o+=Math.round(s/24)),(o||a||i||r)&&(s=0);let d=t.getFullYear(),f=t.getMonth(),p=t.getDate();if(o>=27||r+i+o){let e=new Date(t);e.setDate(1),e.setMonth(f+i*n+1),e.setDate(0);let s=Math.max(0,p-e.getDate()),c=new Date(t);c.setFullYear(d+r*n),c.setDate(p-s),c.setMonth(f+i*n),c.setDate(p-s+o*n);let l=c.getFullYear()-t.getFullYear(),u=c.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(c)-Number(t))/864e5))+s,h=Math.abs(l*12+u);m<27?(o>=6?(a+=Math.round(o/7),o=0):o=m,i=r=0):h<=11?(i=h,r=0):(i=0,r=l*n),(i||r)&&(o=0)}return r&&(i=0),a>=4&&(i+=Math.round(a/4)),(i||r)&&(a=0),o&&a&&!i&&!r&&(a+=Math.round(o/7),o=0),new Wb(r*n,i*n,a*n,o*n,s*n,c*n,l*n,u*n)}function Jb(e,t){let n=qb(e,t);if(n.blank)return[0,`second`];for(let e of Hb){if(e===`millisecond`)continue;let t=n[`${e}s`];if(t)return[t,e]}return[0,`second`]}var Q=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Yb=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},$,Xb,Zb,Qb,$b,ex,tx,nx,rx,ix,ax,ox,sx,cx,lx,ux,dx=globalThis.HTMLElement||null,fx=new Wb,px=new Wb(0,0,0,0,0,1),mx=class extends Event{constructor(e,t,n,r){super(`relative-time-updated`,{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=n,this.newTitle=r}};function hx(e){if(!e.date)return 1/0;if(e.format===`duration`||e.format===`elapsed`){let t=e.precision;if(t===`second`)return 1e3;if(t===`minute`)return 60*1e3}let t=Math.abs(Date.now()-e.date.getTime());return t<60*1e3?1e3:t<3600*1e3?60*1e3:3600*1e3}var gx=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);let t=e.date;if(t&&t.getTime()){let t=hx(e),n=Date.now()+t;n<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=n)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(let t of this.elements)e=Math.min(e,hx(t)),t.update();this.time=Math.min(3600*1e3,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}},_x=class extends dx{constructor(){super(...arguments),$.add(this),Xb.set(this,!1),Zb.set(this,!1),$b.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:`open`}):this),ux.set(this,null)}static define(e=`relative-time`,t=customElements){return t.define(e,this),this}get timeZone(){return this.closest(`[time-zone]`)?.getAttribute(`time-zone`)||this.ownerDocument.documentElement.getAttribute(`time-zone`)||void 0}static get observedAttributes(){return[`second`,`minute`,`hour`,`weekday`,`day`,`month`,`year`,`time-zone-name`,`prefix`,`threshold`,`tense`,`precision`,`format`,`format-style`,`no-title`,`datetime`,`lang`,`title`,`aria-hidden`,`time-zone`]}get onRelativeTimeUpdated(){return Q(this,ux,`f`)}set onRelativeTimeUpdated(e){Q(this,ux,`f`)&&this.removeEventListener(`relative-time-updated`,Q(this,ux,`f`)),Yb(this,ux,typeof e==`object`||typeof e==`function`?e:null,`f`),typeof e==`function`&&this.addEventListener(`relative-time-updated`,e)}get second(){let e=this.getAttribute(`second`);if(e===`numeric`||e===`2-digit`)return e}set second(e){this.setAttribute(`second`,e||``)}get minute(){let e=this.getAttribute(`minute`);if(e===`numeric`||e===`2-digit`)return e}set minute(e){this.setAttribute(`minute`,e||``)}get hour(){let e=this.getAttribute(`hour`);if(e===`numeric`||e===`2-digit`)return e}set hour(e){this.setAttribute(`hour`,e||``)}get weekday(){let e=this.getAttribute(`weekday`);if(e===`long`||e===`short`||e===`narrow`)return e;if(this.format===`datetime`&&e!==``)return this.formatStyle}set weekday(e){this.setAttribute(`weekday`,e||``)}get day(){let e=this.getAttribute(`day`)??`numeric`;if(e===`numeric`||e===`2-digit`)return e}set day(e){this.setAttribute(`day`,e||``)}get month(){let e=this.format,t=this.getAttribute(`month`);if(t!==``&&(t??=e===`datetime`?this.formatStyle:`short`,t===`numeric`||t===`2-digit`||t===`short`||t===`long`||t===`narrow`))return t}set month(e){this.setAttribute(`month`,e||``)}get year(){let e=this.getAttribute(`year`);if(e===`numeric`||e===`2-digit`)return e;if(!this.hasAttribute(`year`)&&new Date().getUTCFullYear()!==this.date?.getUTCFullYear())return`numeric`}set year(e){this.setAttribute(`year`,e||``)}get timeZoneName(){let e=this.getAttribute(`time-zone-name`);if(e===`long`||e===`short`||e===`shortOffset`||e===`longOffset`||e===`shortGeneric`||e===`longGeneric`)return e}set timeZoneName(e){this.setAttribute(`time-zone-name`,e||``)}get prefix(){return this.getAttribute(`prefix`)??(this.format===`datetime`?``:`on`)}set prefix(e){this.setAttribute(`prefix`,e)}get threshold(){let e=this.getAttribute(`threshold`);return e&&Ub(e)?e:`P30D`}set threshold(e){this.setAttribute(`threshold`,e)}get tense(){let e=this.getAttribute(`tense`);return e===`past`?`past`:e===`future`?`future`:`auto`}set tense(e){this.setAttribute(`tense`,e)}get precision(){let e=this.getAttribute(`precision`);return Hb.includes(e)?e:this.format===`micro`?`minute`:`second`}set precision(e){this.setAttribute(`precision`,e)}get format(){let e=this.getAttribute(`format`);return e===`datetime`?`datetime`:e===`relative`?`relative`:e===`duration`?`duration`:e===`micro`?`micro`:e===`elapsed`?`elapsed`:`auto`}set format(e){this.setAttribute(`format`,e)}get formatStyle(){let e=this.getAttribute(`format-style`);if(e===`long`)return`long`;if(e===`short`)return`short`;if(e===`narrow`)return`narrow`;let t=this.format;return t===`elapsed`||t===`micro`?`narrow`:t===`datetime`?`short`:`long`}set formatStyle(e){this.setAttribute(`format-style`,e)}get noTitle(){return this.hasAttribute(`no-title`)}set noTitle(e){this.toggleAttribute(`no-title`,e)}get datetime(){return this.getAttribute(`datetime`)||``}set datetime(e){this.setAttribute(`datetime`,e)}get date(){let e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=e?.toISOString()||``}connectedCallback(){this.update()}disconnectedCallback(){gx.unobserve(this)}attributeChangedCallback(e,t,n){t!==n&&(e===`title`&&Yb(this,Xb,n!==null&&(this.date&&Q(this,$,`m`,ex).call(this,this.date))!==n,`f`),!Q(this,Zb,`f`)&&!(e===`title`&&Q(this,Xb,`f`))&&Yb(this,Zb,(async()=>{await Promise.resolve(),this.update(),Yb(this,Zb,!1,`f`)})(),`f`))}update(){let e=Q(this,$b,`f`).textContent||this.textContent||``,t=this.getAttribute(`title`)||``,n=t,r=this.date;if(typeof Intl>`u`||!Intl.DateTimeFormat||!r){Q(this,$b,`f`).textContent=e;return}let i=Date.now();Q(this,Xb,`f`)||(n=Q(this,$,`m`,ex).call(this,r)||``,n&&!this.noTitle&&this.setAttribute(`title`,n));let a=Kb(r,this.precision,i),o=Q(this,$,`m`,tx).call(this,a),s=e,c=Q(this,$,`m`,lx).call(this,o);s=c?Q(this,$,`m`,sx).call(this,r):o===`duration`?Q(this,$,`m`,nx).call(this,a):o===`relative`?Q(this,$,`m`,rx).call(this,a):Q(this,$,`m`,ix).call(this,r),s?Q(this,$,`m`,cx).call(this,s):this.shadowRoot===Q(this,$b,`f`)&&this.textContent&&Q(this,$,`m`,cx).call(this,this.textContent),(s!==e||n!==t)&&this.dispatchEvent(new mx(e,s,t,n)),o===`relative`||o===`duration`||c&&(Q(this,$,`m`,ax).call(this,r)||Q(this,$,`m`,ox).call(this,r))?gx.observe(this):gx.unobserve(this)}};Xb=new WeakMap,Zb=new WeakMap,$b=new WeakMap,ux=new WeakMap,$=new WeakSet,Qb=function(){let e=this.closest(`[lang]`)?.getAttribute(`lang`)||this.ownerDocument.documentElement.getAttribute(`lang`);try{return new Intl.Locale(e??``).toString()}catch{return`default`}},ex=function(e){return new Intl.DateTimeFormat(Q(this,$,`a`,Qb),{day:`numeric`,month:`short`,year:`numeric`,hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone}).format(e)},tx=function(e){let t=this.format;if(t===`datetime`)return`datetime`;if(t===`duration`||t===`elapsed`||t===`micro`)return`duration`;if((t===`auto`||t===`relative`)&&typeof Intl<`u`&&Intl.RelativeTimeFormat){let t=this.tense;if(t===`past`||t===`future`||Wb.compare(e,this.threshold)===1)return`relative`}return`datetime`},nx=function(e){let t=Q(this,$,`a`,Qb),n=this.format,r=this.formatStyle,i=this.tense,a=fx;n===`micro`?(e=qb(e),a=px,e.months===0&&(this.tense===`past`&&e.sign!==-1||this.tense===`future`&&e.sign!==1)&&(e=px)):(i===`past`&&e.sign!==-1||i===`future`&&e.sign!==1)&&(e=a);let o=`${this.precision}sDisplay`;return e.blank?a.toLocaleString(t,{style:r,[o]:`always`}):e.abs().toLocaleString(t,{style:r})},rx=function(e){let t=new Intl.RelativeTimeFormat(Q(this,$,`a`,Qb),{numeric:`auto`,style:this.formatStyle}),n=this.tense;n===`future`&&e.sign!==1&&(e=fx),n===`past`&&e.sign!==-1&&(e=fx);let[r,i]=Jb(e);return i===`second`&&r<10?t.format(0,this.precision===`millisecond`?`second`:this.precision):t.format(r,i)},ix=function(e){let t=new Intl.DateTimeFormat(Q(this,$,`a`,Qb),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},ax=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,Qb),{timeZone:this.timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`});return n.format(t)===n.format(e)},ox=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,Qb),{timeZone:this.timeZone,year:`numeric`});return n.format(t)===n.format(e)},sx=function(e){let t={hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone};if(Q(this,$,`m`,ax).call(this,e)){let n=new Intl.RelativeTimeFormat(Q(this,$,`a`,Qb),{numeric:`auto`}).format(0,`day`);n=n.charAt(0).toLocaleUpperCase(Q(this,$,`a`,Qb))+n.slice(1);let r=new Intl.DateTimeFormat(Q(this,$,`a`,Qb),t).format(e);return`${n} ${r}`}let n=Object.assign(Object.assign({},t),{day:`numeric`,month:`short`});return Q(this,$,`m`,ox).call(this,e)?new Intl.DateTimeFormat(Q(this,$,`a`,Qb),n).format(e):new Intl.DateTimeFormat(Q(this,$,`a`,Qb),Object.assign(Object.assign({},n),{year:`numeric`})).format(e)},cx=function(e){if(this.hasAttribute(`aria-hidden`)&&this.getAttribute(`aria-hidden`)===`true`){let t=document.createElement(`span`);t.setAttribute(`aria-hidden`,`true`),t.textContent=e,Q(this,$b,`f`).replaceChildren(t)}else Q(this,$b,`f`).textContent=e},lx=function(e){return e===`duration`?!1:this.ownerDocument.documentElement.getAttribute(`data-prefers-absolute-time`)===`true`||this.ownerDocument.body?.getAttribute(`data-prefers-absolute-time`)===`true`};var vx=typeof globalThis<`u`?globalThis:window;try{vx.RelativeTimeElement=_x.define()}catch(e){if(!(vx.DOMException&&e instanceof DOMException&&e.name===`NotSupportedError`)&&!(e instanceof ReferenceError))throw e}export{_c as A,O as B,Cc as C,fc as D,bc as E,Ia as F,Be as G,st as H,F as I,se as J,Ve as K,ii as L,Xo as M,_o as N,gc as O,go as P,Zn as R,wc as S,Sc as T,tt as U,ut as V,Ue as W,Qf as _,lb as a,Fu as b,Jy as c,Fy as d,ev as f,ap as g,dh as h,fb as i,ac as j,pc as k,Iy as l,hh as m,db as n,ab as o,mg as p,Me as q,cb as r,nb as s,xb as t,Py as u,pf as v,xc as w,Dc as x,bd as y,Gn as z};