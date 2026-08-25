/*! For license information please see legacy-html-control.js.LICENSE.txt */
!function(){var e,t={5209:function(e){var t;Object("undefined"!=typeof self?self:this),t=function(){return function(){"use strict";var e=[,function(){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(e){return e.__proto__}:function(e){return e.constructor.prototype})},function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');const i=Object(this),s=i.length>>>0;if(0===s)return!1;let n=0|t,o=Math.max(n>=0?n:s-Math.abs(n),0);for(;o<s;){if(i[o]===e)return!0;o++}return!1}})},function(){const e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),i=Function.bind.call(Function.call,Array.prototype.concat),s=Object.keys;Object.entries||(Object.entries=function(n){return e(s(n),(e,s)=>i(e,"string"==typeof s&&t(n,s)?[[s,n[s]]]:[]),[])})},function(){String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)})},function(){if(void 0===FormData.Inputmask){class e extends FormData{constructor(e,t){super(e,t);const i=this.entries();let s;for(;!1===(s=i.next()).done;){const t=s.value[0],i=s.value[1],n=e[t];!n||void 0===n.inputmask||i instanceof File||this.set(t,n.value)}return this}}e.Inputmask=!0,FormData=e}},function(e,t,i){var s,n=(s=i(7))&&s.__esModule?s:{default:s},o=i(20),r=i(22);n.default.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});const a=/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;function l(e,t,i,s,n){if(i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,n.greedy&&parseInt(e)>255&&a.test("00"+e.charAt(2))){const s=[...t.buffer.slice(0,i),".",e.charAt(2)];if(s.join("").match(/\./g).length<4)return{refreshFromBuffer:!0,buffer:s,caret:i+2}}return a.test(e)}n.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i{1,3}.j{1,3}.k{1,3}.l{1,3}",definitions:{i:{validator:l},j:{validator:l},k:{validator:l},l:{validator:l}},onUnMask:function(e,t,i){return e},inputmode:"decimal",substitutes:{",":"."}},email:{mask:function({separator:e,quantifier:t}){let i="*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",s=i;if(e)for(let n=0;n<t;n++)s+=`[${e}${i}]`;return s},greedy:!1,casing:"lower",separator:null,quantifier:5,skipOptionalPartCharacter:"",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function(e,t,i,s,n,a,l){const c=r.getMaskTemplate.call(this,!0,o.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""))}}})},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=m(i(8)),n=m(i(9)),o=m(i(10)),r=i(15),a=m(i(11)),l=i(16),c=i(23),d=i(24),h=i(20),u=i(21),p=i(22);function m(e){return e&&e.__esModule?e:{default:e}}const f=a.default.document,g="_inputmask_opts";function v(e,t,i){if(!(this instanceof v))return new v(e,t,i);this.dependencyLib=o.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==i&&("[object Object]"===Object.prototype.toString.call(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=o.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&void 0!==t.definitions,this.userOptions=t||{},b(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.lastInputEvent=null,this.hasAlternator=!1}function b(e,t,i){const s=v.prototype.aliases[e];return s?(s.alias&&b(s.alias,void 0,i),o.default.extend(!0,i,s),o.default.extend(!0,i,t),!0):(null===i.mask&&(i.mask=e),!1)}v.prototype={dataAttribute:"data-inputmask",defaults:s.default,definitions:n.default,aliases:{},masksCache:{},i18n:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){const t=this;return"string"==typeof e&&(e=f.getElementById(e)||f.querySelectorAll(e)),(e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e)).forEach(function(e,i){const s=o.default.extend(!0,{},t.opts);if(function(e,t,i,s){function n(t,n){const o=""===s?t:s+"-"+t;null!==(n=void 0!==n?n:e.getAttribute(o))&&("string"==typeof n&&(t.startsWith("on")?n=a.default[n]:"false"===n?n=!1:"true"===n?n=!0:"mask"===t&&(n=n.replace(/\\\\/g,"\\"))),i[t]=n)}if(!0===t.importDataAttributes){let o,r,a,l,c=e.getAttribute(s);if(c&&""!==c&&(c=c.replace(/'/g,'"'),r=JSON.parse("{"+c+"}")),r)for(l in a=void 0,r)if("alias"===l.toLowerCase()){a=r[l];break}for(o in n("alias",a),i.alias&&b(i.alias,i,t),t){if(r)for(l in a=void 0,r)if(l.toLowerCase()===o.toLowerCase()){a=r[l];break}n(o,a)}}return o.default.extend(!0,t,i),("rtl"===e.dir||t.rightAlign)&&(e.style.textAlign="right"),("rtl"===e.dir||t.numericInput)&&(e.dir="ltr",e.removeAttribute("dir"),t.isRTL=!0),Object.keys(i).length}(e,s,o.default.extend(!0,{},t.userOptions),t.dataAttribute)){const i=(0,d.generateMaskSet)(s,t.noMasksCache);void 0!==i&&(void 0!==e.inputmask&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new v(void 0,void 0,!0),e.inputmask.opts=s,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=o.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,o.default)(e),e.inputmask.maskset=i,o.default.data(e,g,t.userOptions),c.mask.call(e.inputmask))}}),e&&e[0]&&e[0].inputmask||this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"==typeof e?(o.default.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,d.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==e){const t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");l.checkVal.call(this,void 0,!1,!1,t),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,h.getBuffer.call(this),0,this.opts)}return l.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){o.default.data(this.el,g,null);const e=this.opts.autoUnmask?(0,l.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);let t;e!==h.getBufferTemplate.call(this).join("")?this._valueSet(e,this.opts.autoUnmask):this._valueSet(""),r.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value"),t&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):f.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,d.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?h.getBufferTemplate.call(this).reverse():h.getBufferTemplate.call(this)).join("")},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,d.generateMaskSet)(this.opts,this.noMasksCache),u.isComplete.call(this,h.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,d.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){let e=p.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach(function(t){return t.mask!==e||(e=t,!1)}),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,d.generateMaskSet)(this.opts,this.noMasksCache),e){const t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");l.checkVal.call(this,void 0,!0,!1,t)}const t=l.clearOptionalTail.call(this,[]),i=u.isComplete.call(this,t),s=e===(this.isRTL?t.reverse().join(""):t.join(""));return i&&(void 0===e||s)},format:function(e,t){this.maskset=this.maskset||(0,d.generateMaskSet)(this.opts,this.noMasksCache);const i=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");l.checkVal.call(this,void 0,!0,!1,i);const s=this.isRTL?h.getBuffer.call(this).slice().reverse().join(""):h.getBuffer.call(this).join("");return t?{value:s,metadata:this.getmetadata()}:s},setValue:function(e){this.el&&(0,o.default)(this.el).trigger("setvalue",[e])},analyseMask:d.analyseMask},v.extendDefaults=function(e){o.default.extend(!0,v.prototype.defaults,e)},v.extendDefinitions=function(e){o.default.extend(!0,v.prototype.definitions,e)},v.extendAliases=function(e){o.default.extend(!0,v.prototype.aliases,e)},v.format=function(e,t,i){return v(t).format(e,i)},v.unmask=function(e,t){return v(t).unmaskedvalue(e)},v.isValid=function(e,t){return v(t).isValid(e)},v.remove=function(e){"string"==typeof e&&(e=f.getElementById(e)||f.querySelectorAll(e)),e=e.nodeName?[e]:e;for(let t=0;t<e.length;t++)e[t].inputmask&&e[t].inputmask.remove()},v.setValue=function(e,t){"string"==typeof e&&(e=f.getElementById(e)||f.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach(function(e){e.inputmask?e.inputmask.setValue(t):(0,o.default)(e).trigger("setvalue",[t])})},v.dependencyLib=o.default,a.default.Inputmask=v,t.default=v},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:()=>{},onincomplete:()=>{},oncleared:()=>{},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:()=>{},onBeforeMask:null,onBeforePaste:function(e,t){return"function"==typeof t.onBeforeMask?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,outputMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:()=>{},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={9:{validator:"\\p{N}",definitionSymbol:"*"},a:{validator:"\\p{L}",definitionSymbol:"*"},"*":{validator:"[\\p{L}\\p{N}]"}}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(i(11)),n=a(i(12)),o=i(13),r=a(i(14));function a(e){return e&&e.__esModule?e:{default:e}}const l=s.default.document;function c(e){return e instanceof c?e:this instanceof c?void(null!=e&&e!==s.default&&(this[0]=e.nodeName?e:void 0!==e[0]&&e[0].nodeName?e[0]:l.querySelector(e),void 0!==this[0]&&null!==this[0]&&(0,n.default)(this[0],"events",(0,n.default)(this[0],"events")||{}))):new c(e)}c.prototype={on:o.on,off:o.off,trigger:o.trigger},c.extend=r.default,c.data=n.default,c.Event=o.Event,t.default=c},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const i=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=i?window:{}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){if(void 0===i)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=i}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0,t.off=function(e,t){let i,s;return c(this[0])&&(i=(0,n.default)(this[0],"events"),s=this[0],""!==(e=e||Object.keys(i).join(" "))&&e.split(" ").forEach(e=>{const[n,o]=e.split(".");(function(e,s){const n=[];let o,r;if(e.length>0){const a=s?[s]:Object.keys(i[e]);for(let l=0;l<a.length;l++)if(s=a[l],void 0===t)for(o=0,r=i[e][s]?.length||0;o<r;o++)n.push({ev:e,namespace:s,handler:i[e][s][o]});else n.push({ev:e,namespace:s,handler:t})}else if(s.length>0)for(const e in i)if(i[e][s])if(void 0===t)for(o=0,r=i[e][s].length;o<r;o++)n.push({ev:e,namespace:s,handler:i[e][s][o]});else n.push({ev:e,namespace:s,handler:t});return n})(n,o).forEach(({ev:e,handler:t,namespace:n})=>{!function(e,t,n){if(e in i==1)if(s.removeEventListener?s.removeEventListener(e,n,!1):s.detachEvent&&s.detachEvent(`on${e}`,n),"global"===t)for(const t in i[e])i[e][t].splice(i[e][t].indexOf(n),1);else i[e][t].splice(i[e][t].indexOf(n),1)}(e,n,t)})})),this},t.on=function(e,t){if(!this[0]||!c(this[0]))return this;const i=this[0],s=(0,n.default)(i,"events");return e.split(" ").forEach(e=>{const[n,o="global"]=e.split(".");((e,n)=>{i.addEventListener?i.addEventListener(e,t,!1):i.attachEvent&&i.attachEvent(`on${e}`,t),s[e]=s[e]||{},s[e][n]=s[e][n]||[],s[e][n].push(t)})(n,o)}),this},t.trigger=function(e){if(c(this[0])){const t=(0,n.default)(this[0],"events"),i=this[0],s="string"==typeof e?e.split(" "):[e.type];for(let n=0;n<s.length;n++){const a=s[n].split("."),c=a[0],d=a[1]||"global";if(void 0!==l){let t;const s={bubbles:!0,cancelable:!0,composed:!0,detail:arguments[1]};if(l.createEvent){try{"input"===c?(s.inputType="insertText",t=new InputEvent(c,s)):t=new CustomEvent(c,s)}catch(e){t=l.createEvent("CustomEvent"),t.initCustomEvent(c,s.bubbles,s.cancelable,s.detail)}e.type&&(0,o.default)(t,e),i.dispatchEvent(t)}else t=l.createEventObject(),t.eventType=c,t.detail=arguments[1],e.type&&(0,o.default)(t,e),i.fireEvent("on"+t.eventType,t)}else if(void 0!==t[c]){arguments[0]=arguments[0].type?arguments[0]:r.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1);const e=t[c];("global"===d?Object.values(e).flat():e[d]).forEach(e=>e.apply(i,arguments))}}}return this};var s=a(i(11)),n=a(i(12)),o=a(i(14)),r=a(i(10));function a(e){return e&&e.__esModule?e:{default:e}}const l=s.default.document;function c(e){return e instanceof Element&&(0,n.default)(e,"events")}let d=t.Event=void 0;"function"==typeof s.default.CustomEvent?t.Event=d=s.default.CustomEvent:s.default.Event&&l&&l.createEvent?(t.Event=d=function(e,t){t=t||{bubbles:!1,cancelable:!1,composed:!0,detail:void 0};const i=l.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i},d.prototype=s.default.Event.prototype):"undefined"!=typeof Event&&(t.Event=d=Event)},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(){let t,i,s,n,o,r,a=arguments[0]||{},l=1,c=arguments.length,d=!1;for("boolean"==typeof a&&(d=a,a=arguments[l]||{},l++),"object"!=typeof a&&"function"!=typeof a&&(a={});l<c;l++)if(null!=(t=arguments[l]))for(i in t)s=a[i],n=t[i],a!==n&&(d&&n&&("[object Object]"===Object.prototype.toString.call(n)||(o=Array.isArray(n)))?(o?(o=!1,r=s&&Array.isArray(s)?s:[]):r=s&&"[object Object]"===Object.prototype.toString.call(s)?s:{},a[i]=e(d,r,n)):void 0!==n&&(a[i]=n));return a}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var s,n=i(16),o=(s=i(7))&&s.__esModule?s:{default:s},r=i(19),a=i(20);t.EventRuler={on:function(e,t,i){const s=e.inputmask.dependencyLib;let l=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);const l=this,c=l.inputmask,d=c?c.opts:void 0;let h;if(void 0===c&&"FORM"!==this.nodeName){const e=s.data(l,"_inputmask_opts");s(l).off(),e&&new o.default(e).mask(l)}else{if(["submit","reset","setvalue"].includes(t.type)||"FORM"===this.nodeName||!(l.disabled||l.readOnly&&!("keydown"===t.type&&t.ctrlKey&&t.key===r.keys.c||!1===d.tabThrough&&t.key===r.keys.Tab))){switch(t.type){case"input":if(!0===c.skipInputEvent)return c.skipInputEvent=!1,t.preventDefault();c.lastInputEvent={time:Date.now(),data:t.data};break;case"keydown":if(c.lastInputEvent&&Date.now()-c.lastInputEvent.time<10&&c.lastInputEvent.data===t.key)return!1;break;case"click":case"focus":return c.validationEvent?(c.validationEvent=!1,e.blur(),(0,n.HandleNativePlaceholder)(e,(c.isRTL?a.getBufferTemplate.call(c).slice().reverse():a.getBufferTemplate.call(c)).join("")),setTimeout(function(){e.focus()},d.validationEventTimeOut),!1):(h=arguments,void setTimeout(function(){e.inputmask&&i.apply(l,h)},0))}const s=i.apply(l,arguments);return!1===s&&(t.preventDefault(),t.stopPropagation()),s}t.preventDefault()}};["submit.inputmask","reset.inputmask"].includes(t=`${t}.inputmask`)?(l=l.bind(e),null!==e.form&&s(e.form).on(t,l)):s(e).on(t,l)},off:function(e,t){e.inputmask&&(0,e.inputmask.dependencyLib)(e).off(t||".inputmask")}}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=function(e,t){const i=e?e.inputmask:this;if(n.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||""===e.placeholder)){let s=l.getBuffer.call(i).slice(),n=e.inputmask._valueGet();if(n!==t){const t=l.getLastValidPosition.call(i);-1===t&&n===l.getBufferTemplate.call(i).join("")?s=[]:-1!==t&&u.call(i,s),m(e,s)}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))},t.applyInputValue=h,t.checkVal=p,t.clearOptionalTail=u,t.unmaskedvalue=function(e){const t=e?e.inputmask:this,i=t.opts,s=t.maskset;if(e){if(void 0===e.inputmask)return e.value;e.inputmask&&e.inputmask.refreshValue&&h(e,e.inputmask._valueGet(!0))}const n=[],o=s.validPositions;for(let e=0,t=o.length;e<t;e++)o[e]&&o[e].match&&(1!=o[e].match.static||!0!==i.keepStatic&&Array.isArray(s.metadata)&&!0!==o[e].generatedInput)&&n.push(o[e].input);let a=0===n.length?"":(t.isRTL?n.reverse():n).join("");if("function"==typeof i.onUnMask){const e=(t.isRTL?l.getBuffer.call(t).slice().reverse():l.getBuffer.call(t)).join("");a=i.onUnMask.call(t,e,a,i)}return i.outputMask&&a.length>0?r.default.format(a,{...i,mask:i.outputMask,alias:null}):a},t.writeBuffer=m;var s,n=i(17),o=i(18),r=(s=i(7))&&s.__esModule?s:{default:s},a=i(19),l=i(20),c=i(21),d=i(22);function h(e,t,i,s){const n=e?e.inputmask:this,o=n.opts;e.inputmask.refreshValue=!1,!0!==s&&"function"==typeof o.onBeforeMask&&(t=o.onBeforeMask.call(n,t,o)||t),p(e,!0,!1,t=(t||"").toString().split(""),i),n.undoValue=n._valueGet(!0),(o.clearMaskOnLostFocus||o.clearIncomplete)&&e.inputmask._valueGet()===l.getBufferTemplate.call(n).join("")&&-1===l.getLastValidPosition.call(n)&&e.inputmask._valueSet("")}function u(e){e.length=0;let t,i=d.getMaskTemplate.call(this,!0,0,!0,void 0,!0);for(;void 0!==(t=i.shift());)e.push(t);return e}function p(e,t,i,s,n){const r=e?e.inputmask:this,a=r.maskset,h=r.opts,u=r.dependencyLib;let p,f=s.slice(),g="",v=-1,b=h.skipOptionalPartCharacter;h.skipOptionalPartCharacter="",l.resetMaskSet.call(r,!1),r.clicked=0,v=h.radixPoint?l.determineNewCaretPosition.call(r,{begin:0,end:0},!1,!1===h.__financeInput?"radixFocus":void 0).begin:0,a.p=v,r.caretPos={begin:v};let _=[],y=r.caretPos;if(f.forEach(function(e,t){if(void 0!==e){const s=new u.Event("_checkval");s.key=e,g+=e;const n=l.getLastValidPosition.call(r,void 0,!0);!function(e,t){let i=d.getMaskTemplate.call(r,!0,0).slice(e,l.seekNext.call(r,e,!1,!1)).join("").replace(/'/g,""),s=i.indexOf(t);for(;s>0&&" "===i[s-1];)s--;const n=0===s&&!l.isMask.call(r,e)&&(d.getTest.call(r,e).match.nativeDef===t.charAt(0)||!0===d.getTest.call(r,e).match.static&&d.getTest.call(r,e).match.nativeDef==="'"+t.charAt(0)||" "===d.getTest.call(r,e).match.nativeDef&&(d.getTest.call(r,e+1).match.nativeDef===t.charAt(0)||!0===d.getTest.call(r,e+1).match.static&&d.getTest.call(r,e+1).match.nativeDef==="'"+t.charAt(0)));if(!n&&s>0&&!l.isMask.call(r,e,!1,!0)){const t=l.seekNext.call(r,e);r.caretPos.begin<t&&(r.caretPos={begin:t})}return n}(v,g)?(p=o.EventHandlers.keypressEvent.call(r,s,!0,!1,i,r.caretPos.begin),p&&(v=r.caretPos.begin+1,g="")):p=!0===d.getTest.call(r,t).match.static&&o.EventHandlers.keypressEvent.call(r,s,!0,!1,i,n+1),p?(void 0!==p.pos&&a.validPositions[p.pos]&&!0===a.validPositions[p.pos].match.static&&void 0===a.validPositions[p.pos].alternation&&(_.push(p.pos),r.isRTL||(p.forwardPosition=p.pos+1)),m.call(r,void 0,l.getBuffer.call(r),p.forwardPosition,s,!1),r.caretPos={begin:p.forwardPosition,end:p.forwardPosition},y=r.caretPos):void 0===a.validPositions[t]&&f[t]===d.getPlaceholder.call(r,t)&&l.isMask.call(r,t,!0)?r.caretPos.begin++:r.caretPos=y}}),_.length>0){let e,t,s=l.seekNext.call(r,-1,void 0,!1);if(!c.isComplete.call(r,l.getBuffer.call(r))&&_.length<=s||c.isComplete.call(r,l.getBuffer.call(r))&&_.length>0&&_.length!==s&&0===_[0]){let n=s;for(;void 0!==(e=_.shift());)if(e<n){const s=new u.Event("_checkval");if(t=a.validPositions[e],t.generatedInput=!0,s.key=t.input,p=o.EventHandlers.keypressEvent.call(r,s,!0,!1,i,n),p&&void 0!==p.pos&&p.pos!==e&&a.validPositions[p.pos]&&!0===a.validPositions[p.pos].match.static)_.push(p.pos);else if(!p)break;n++}}else for(;e=_.pop();)t=a.validPositions[e],t&&void 0===a.validPositions[e+1]&&delete a.validPositions[e]}t&&m.call(r,e,l.getBuffer.call(r),p?p.forwardPosition:r.caretPos.begin,n||new u.Event("checkval"),n&&("input"===n.type&&r.undoValue!==l.getBuffer.call(r).join("")||"paste"===n.type)),h.skipOptionalPartCharacter=b}function m(e,t,i,s,n){const o=e?e.inputmask:this,r=o.opts,d=o.dependencyLib;if(s&&"function"==typeof r.onBeforeWrite){const e=r.onBeforeWrite.call(o,s,t,i,r);if(e){if(e.refreshFromBuffer){const i=e.refreshFromBuffer;c.refreshFromBuffer.call(o,!0===i?i:i.start,i.end,e.buffer||t),t=l.getBuffer.call(o,!0)}void 0!==i&&(i=void 0!==e.caret?e.caret:i)}}if(void 0!==e&&(e.inputmask._valueSet(t.join("")),void 0===i||void 0!==s&&"blur"===s.type||l.caret.call(o,e,i,void 0,void 0,void 0!==s&&"keydown"===s.type&&(s.key===a.keys.Delete||s.key===a.keys.Backspace)),void 0===e.inputmask.writeBufferHook||e.inputmask.writeBufferHook(i),!0===n)){const i=d(e),s=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,i.trigger("input"),setTimeout(function(){s===l.getBufferTemplate.call(o).join("")?i.trigger("cleared"):!0===c.isComplete.call(o,t)&&i.trigger("complete")},0)}}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var s,n=(s=i(11))&&s.__esModule?s:{default:s};const o=n.default.navigator&&n.default.navigator.userAgent||"";t.ie=o.indexOf("MSIE ")>0||o.indexOf("Trident/")>0,t.mobile=!!(navigator.userAgentData?.mobile??((matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints)&&innerWidth<=1024||/Mobi|Android|iPhone/i.test(o))),t.iphone=/iphone/i.test(o)},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var s,n=i(17),o=(s=i(11))&&s.__esModule?s:{default:s},r=i(16),a=i(19),l=i(20),c=i(21),d=i(22);const h=t.EventHandlers={keyEvent:function(e,t,i,s,o){const u=this.inputmask,p=u.opts,m=u.dependencyLib,f=u.maskset,g=this,v=m(g),b=e.key,_=l.caret.call(u,g),y=p.onKeyDown.call(this,e,l.getBuffer.call(u),_,p);if(void 0!==y)return y;if(b===a.keys.Backspace||b===a.keys.Delete||n.iphone&&b===a.keys.BACKSPACE_SAFARI||e.ctrlKey&&b===a.keys.x&&!("oncut"in g))e.preventDefault(),c.handleRemove.call(u,g,b,_),(0,r.writeBuffer)(g,l.getBuffer.call(u,!0),f.p,e,g.inputmask._valueGet()!==l.getBuffer.call(u).join(""));else if(b===a.keys.End||b===a.keys.PageDown){e.preventDefault();const t=l.seekNext.call(u,l.getLastValidPosition.call(u));l.caret.call(u,g,e.shiftKey?_.begin:t,t,!0)}else b===a.keys.Home&&!e.shiftKey||b===a.keys.PageUp?(e.preventDefault(),l.caret.call(u,g,0,e.shiftKey?_.begin:0,!0)):p.undoOnEscape&&b===a.keys.Escape&&!0!==e.altKey?((0,r.checkVal)(g,!0,!1,u.undoValue.split("")),v.trigger("click")):b!==a.keys.Insert||e.shiftKey||e.ctrlKey||void 0!==u.userOptions.insertMode?!0===p.tabThrough&&b===a.keys.Tab?!0===e.shiftKey?(_.end=l.seekPrevious.call(u,_.end,!0),!0===d.getTest.call(u,_.end-1).match.static&&_.end--,_.begin=l.seekPrevious.call(u,_.end,!0),_.begin>=0&&_.end>0&&(e.preventDefault(),l.caret.call(u,g,_.begin,_.end))):(_.begin=l.seekNext.call(u,_.begin,!0),_.end=l.seekNext.call(u,_.begin,!0),_.end<f.maskLength&&_.end--,_.begin<=f.maskLength&&(e.preventDefault(),l.caret.call(u,g,_.begin,_.end))):e.shiftKey||(p.insertModeVisual&&!1===p.insertMode?b===a.keys.ArrowRight?setTimeout(function(){const e=l.caret.call(u,g);l.caret.call(u,g,e.begin)},0):b===a.keys.ArrowLeft&&setTimeout(function(){const e=l.translatePosition.call(u,g.inputmask.caretPos.begin);l.translatePosition.call(u,g.inputmask.caretPos.end),u.isRTL?l.caret.call(u,g,e+(e===f.maskLength?0:1)):l.caret.call(u,g,e-(0===e?0:1))},0):void 0===u.keyEventHook||u.keyEventHook(e)):c.isSelection.call(u,_)?p.insertMode=!p.insertMode:(p.insertMode=!p.insertMode,l.caret.call(u,g,_.begin,_.begin));return u.isComposing=b===a.keys.Process||b===a.keys.Unidentified,u.ignorable=void 0===b||b.length>1,h.keypressEvent.call(u,e,t,i,s,o)},keypressEvent:function(e,t,i,s,n){const o=this.inputmask||this,d=o.opts,h=o.dependencyLib,u=o.maskset,p=o.el,m=h(p);let f=e.key;if(!0===t||e.ctrlKey&&e.altKey&&!o.ignorable||!(e.ctrlKey||e.metaKey||o.ignorable)){if(f){let a,h=t?{begin:n,end:n}:l.caret.call(o,p);t||(f=d.substitutes[f]||f),u.writeOutBuffer=!0;const m=c.isValid.call(o,h,f,s,void 0,void 0,void 0,t);if(!1!==m&&(l.resetMaskSet.call(o,!0),a=void 0!==m.caret?m.caret:l.seekNext.call(o,m.pos.begin?m.pos.begin:m.pos),u.p=a),a=d.numericInput&&void 0===m.caret?l.seekPrevious.call(o,a):a,!1!==i&&(setTimeout(function(){d.onKeyValidation.call(p,f,m)},0),u.writeOutBuffer&&!1!==m)){const i=l.getBuffer.call(o);(0,r.writeBuffer)(p,i,a,e,!0!==t)}if(e.preventDefault(),t)return!1!==m&&(m.forwardPosition=a),m}}else f===a.keys.Enter&&o.undoValue!==o._valueGet(!0)&&(o.undoValue=o._valueGet(!0),setTimeout(function(){m.trigger("change")},0))},pasteEvent:async function(e){const t=this.inputmask,i=t.opts;let s,n=t._valueGet(!0);t.skipInputEvent=!0,e.clipboardData&&e.clipboardData.getData?s=e.clipboardData.getData("text/plain"):o.default.clipboardData&&o.default.clipboardData.getData&&(s=o.default.clipboardData.getData("Text")),function(t,s,n,o,a){let c=l.caret.call(t,s,void 0,void 0,!0),d=n.substr(0,c.begin),h=n.substr(c.end,n.length);if(d==(t.isRTL?l.getBufferTemplate.call(t).slice().reverse():l.getBufferTemplate.call(t)).slice(0,c.begin).join("")&&(d=""),h==(t.isRTL?l.getBufferTemplate.call(t).slice().reverse():l.getBufferTemplate.call(t)).slice(c.end).join("")&&(h=""),o=d+o+h,t.isRTL&&!0!==i.numericInput){o=o.split("");for(const e of l.getBufferTemplate.call(t))o[0]===e&&o.shift();o=o.reverse().join("")}let u=o;if("function"==typeof a){if(u=a.call(t,u,i),!1===u)return!1;u||(u=n)}(0,r.checkVal)(s,!0,!1,u.toString().split(""),e)}(t,this,n,s,i.onBeforePaste),e.preventDefault()},inputFallBackEvent:function(e){const t=this.inputmask,i=t.opts,s=t.dependencyLib;let o,c=this,u=c.inputmask._valueGet(!0),p=(t.isRTL?l.getBuffer.call(t).slice().reverse():l.getBuffer.call(t)).join(""),m=l.caret.call(t,c,void 0,void 0,!0);if(p!==u){if(o=function(e,s,n){let o,r,a,c=e.substr(0,n.begin).split(""),h=e.substr(n.begin).split(""),u=s.substr(0,n.begin).split(""),p=s.substr(n.begin).split(""),m=c.length>=u.length?c.length:u.length,f=h.length>=p.length?h.length:p.length,g="",v=[],b="~";for(;c.length<m;)c.push(b);for(;u.length<m;)u.push(b);for(;h.length<f;)h.unshift(b);for(;p.length<f;)p.unshift(b);const _=c.concat(h),y=u.concat(p);for(r=0,o=_.length;r<o;r++)switch(a=d.getPlaceholder.call(t,l.translatePosition.call(t,r)),g){case"insertText":y[r-1]===_[r]&&n.begin==_.length-1&&v.push(_[r]),r=o;break;case"insertReplacementText":case"deleteContentBackward":_[r]===b?n.end++:r=o;break;default:_[r]!==y[r]&&(_[r+1]!==b&&_[r+1]!==a&&void 0!==_[r+1]||(y[r]!==a||y[r+1]!==b)&&y[r]!==b?y[r+1]===b&&y[r]===_[r+1]?(g="insertText",v.push(_[r]),n.begin--,n.end--):_[r]!==a&&_[r]!==b&&(_[r+1]===b||y[r]!==_[r]&&y[r+1]===_[r+1])?(g="insertReplacementText",v.push(_[r]),n.begin--):_[r]===b?(g="deleteContentBackward",(l.isMask.call(t,l.translatePosition.call(t,r),!0)||y[r]===i.radixPoint)&&n.end++):r=o:(g="insertText",v.push(_[r]),n.begin--,n.end--))}return{action:g,data:v,caret:n}}(u,p,m),c.getRootNode().activeElement!==c&&c.focus(),(0,r.writeBuffer)(c,l.getBuffer.call(t)),l.caret.call(t,c,m.begin,m.end,!0),!n.mobile&&t.skipNextInsert&&"insertText"===e.inputType&&"insertText"===o.action&&t.isComposing)return!1;switch("insertCompositionText"===e.inputType&&"insertText"===o.action&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,o.action){case"insertText":case"insertReplacementText":o.data.forEach(function(e,i){const n=new s.Event("keypress");n.key=e,t.ignorable=!1,h.keypressEvent.call(c,n)}),setTimeout(function(){t.$el.trigger("keyup")},0);break;case"deleteContentBackward":var f=new s.Event("keydown");f.key=a.keys.Backspace,h.keyEvent.call(c,f);break;default:(0,r.applyInputValue)(c,u,e),l.caret.call(t,c,m.begin,m.end,!0)}e.preventDefault()}},setValueEvent:function(e){const t=this.inputmask,i=t.dependencyLib;let s=this,n=e&&e.detail?e.detail[0]:arguments[1];void 0===n&&(n=s.inputmask._valueGet(!0)),(0,r.applyInputValue)(s,n,new i.Event("input"),void 0!==(e&&e.detail?e.detail[0]:arguments[1])),(e.detail&&void 0!==e.detail[1]||void 0!==arguments[2])&&l.caret.call(t,s,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){const t=this.inputmask,i=t.opts,s=t&&t._valueGet();i.showMaskOnFocus&&s!==l.getBuffer.call(t).join("")&&(0,r.writeBuffer)(this,l.getBuffer.call(t),l.seekNext.call(t,l.getLastValidPosition.call(t))),!0!==i.positionCaretOnTab||!1!==t.mouseEnter||c.isComplete.call(t,l.getBuffer.call(t))&&-1!==l.getLastValidPosition.call(t)||h.clickEvent.apply(this,[e,!0]),t.undoValue=t&&t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){const e=this.inputmask,t=e.opts,i=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&i.getRootNode().activeElement!==i&&(0,r.HandleNativePlaceholder)(i,e.originalPlaceholder)},clickEvent:function(e,t){const i=this.inputmask;i.clicked++;const s=this;if(s.getRootNode().activeElement===s){const e=l.determineNewCaretPosition.call(i,l.caret.call(i,s),t);void 0!==e&&l.caret.call(i,s,e)}},cutEvent:function(e){const t=this.inputmask,i=t.maskset,s=this,n=l.caret.call(t,s),d=t.isRTL?l.getBuffer.call(t).slice(n.end,n.begin):l.getBuffer.call(t).slice(n.begin,n.end),h=t.isRTL?d.reverse().join(""):d.join("");o.default.navigator&&o.default.navigator.clipboard?o.default.navigator.clipboard.writeText(h):o.default.clipboardData&&o.default.clipboardData.getData&&o.default.clipboardData.setData("Text",h),c.handleRemove.call(t,s,a.keys.Delete,n),(0,r.writeBuffer)(s,l.getBuffer.call(t),i.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){const t=this.inputmask,i=t.opts,s=t.dependencyLib;t.clicked=0;const n=s(this),o=this;if(o.inputmask){(0,r.HandleNativePlaceholder)(o,t.originalPlaceholder);let s=o.inputmask._valueGet(),a=l.getBuffer.call(t).slice();if(""!==s&&(i.clearMaskOnLostFocus&&(-1===l.getLastValidPosition.call(t)&&s===l.getBufferTemplate.call(t).join("")?a=[]:r.clearOptionalTail.call(t,a)),!1===c.isComplete.call(t,a)&&(setTimeout(function(){n.trigger("incomplete")},0),i.clearIncomplete&&(l.resetMaskSet.call(t,!1),a=i.clearMaskOnLostFocus?[]:l.getBufferTemplate.call(t).slice())),(0,r.writeBuffer)(o,a,void 0,e)),s=t._valueGet(!0),t.undoValue!==s){const e=(t.isRTL?l.getBufferTemplate.call(t).slice().reverse():l.getBufferTemplate.call(t)).join("");(""!==s||t.undoValue!==e||t.undoValue===e&&t.maskset.validPositions.length>0)&&(t.undoValue=s,n.trigger("change"))}}},mouseenterEvent:function(){const e=this.inputmask,{showMaskOnHover:t}=e.opts,i=this;if(e.mouseEnter=!0,i.getRootNode().activeElement!==i){const s=(e.isRTL?l.getBufferTemplate.call(e).slice().reverse():l.getBufferTemplate.call(e)).join("");t&&(0,r.HandleNativePlaceholder)(i,s)}},submitEvent:function(){const e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger("change"),-1===l.getLastValidPosition.call(e)&&e._valueGet&&e._valueGet()===l.getBufferTemplate.call(e).join("")&&e._valueSet(""),t.clearIncomplete&&!1===c.isComplete.call(e,l.getBuffer.call(e))&&e._valueSet(""),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout(function(){(0,r.writeBuffer)(e.el,l.getBuffer.call(e))},0))},resetEvent:function(){const e=this.inputmask;e.refreshValue=!0,setTimeout(function(){(0,r.applyInputValue)(e.el,e._valueGet(!0))},0)}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=void 0,t.toKey=function(e,t){return s[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase())},t.toKeyCode=function(e){return i[e]};const i=t.keyCode={c:67,x:88,z:90,BACKSPACE_SAFARI:127,Enter:13,Meta_LEFT:91,Meta_RIGHT:92,Space:32,Alt:18,AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,CapsLock:20,Control:17,ContextMenu:93,Dead:221,Delete:46,End:35,Escape:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Home:36,Insert:45,NumLock:144,PageDown:34,PageUp:33,Pause:19,PrintScreen:44,Process:229,Shift:16,ScrollLock:145,Tab:9,Unidentified:229},s=Object.entries(i).reduce((e,[t,i])=>(e[i]=void 0===e[i]?t:e[i],e),{});t.keys=Object.entries(i).reduce((e,[t,i])=>(e[t]="Space"===t?" ":t,e),{})},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=function(e,t,i,s,o){const r=this,a=this.opts;let l;if(void 0===t)return"selectionStart"in e&&"selectionEnd"in e?(t=e.selectionStart,i=e.selectionEnd):n.default.getSelection?(l=n.default.getSelection().getRangeAt(0),l.commonAncestorContainer.parentNode!==e&&l.commonAncestorContainer!==e||(t=l.startOffset,i=l.endOffset)):document.selection&&document.selection.createRange&&(l=document.selection.createRange(),i=(t=0-l.duplicate().moveStart("character",-e.inputmask._valueGet().length))+l.text.length),{begin:s?t:h.call(r,t),end:s?i:h.call(r,i)};if(Array.isArray(t)&&(i=r.isRTL?t[0]:t[1],t=r.isRTL?t[1]:t[0]),void 0!==t.begin&&(i=r.isRTL?t.begin:t.end,t=r.isRTL?t.end:t.begin),"number"==typeof t){t=s?t:h.call(r,t),i="number"==typeof(i=s?i:h.call(r,i))?i:t;const c=parseInt(((e.ownerDocument.defaultView||n.default).getComputedStyle?(e.ownerDocument.defaultView||n.default).getComputedStyle(e,null):e.currentStyle).fontSize)*i;if(e.scrollLeft=c>e.scrollWidth?c:0,e.inputmask.caretPos={begin:t,end:i},a.insertModeVisual&&!1===a.insertMode&&t===i&&(o||i++),e===e.getRootNode().activeElement){if("setSelectionRange"in e)e.setSelectionRange(t,i);else if(n.default.getSelection){if(l=document.createRange(),void 0===e.firstChild||null===e.firstChild){const t=document.createTextNode("");e.appendChild(t)}l.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),l.setEnd(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),l.collapse(!0);const s=n.default.getSelection();s.removeAllRanges(),s.addRange(l)}else e.createTextRange&&(l=e.createTextRange(),l.collapse(!0),l.moveEnd("character",i),l.moveStart("character",t),l.select());void 0===e.inputmask.caretHook||e.inputmask.caretHook.call(r,{begin:t,end:i})}}},t.determineLastRequiredPosition=function(e){const t=this,{maskset:i,dependencyLib:s}=t,n=l.call(t),a={},c=i.validPositions[n],d=r.getMaskTemplate.call(t,!0,l.call(t),!0,!0);let h,u,p=d.length,m=void 0!==c?c.locator.slice():void 0;for(h=n+1;h<d.length;h++)u=r.getTestTemplate.call(t,h,m,h-1),m=u.locator.slice(),a[h]=s.extend(!0,{},u);const f=c&&void 0!==c.alternation?c.locator[c.alternation]:void 0;for(h=p-1;h>n&&(u=a[h],(u.match.optionality||u.match.optionalQuantifier&&u.match.newBlockMarker||f&&(f!==a[h].locator[c.alternation]&&!0!==u.match.static||!0===u.match.static&&u.locator[c.alternation]&&o.checkAlternationMatch.call(t,u.locator[c.alternation].toString().split(","),f.toString().split(","))&&""!==r.getTests.call(t,h)[0].def))&&d[h]===r.getPlaceholder.call(t,h,u.match));h--)if(p--,u.match.optionality){let e=h;for(;e>0;){const i=r.getTest.call(t,e);if("master"===i.match.newBlockMarker||!0===i.match.newBlockMarker)break;e--}if(void 0!==i.validPositions[e])break}return h===n&&(p=h),e?{l:p,def:a[p]?a[p].match:void 0}:p},t.determineNewCaretPosition=function(e,t,i){const s=this,{maskset:n,opts:o}=s;let h,u,p;if(t&&(s.isRTL?e.end=e.begin:e.begin=e.end),e.begin===e.end){switch(i=i||o.positionCaretOnClick){case"none":break;case"select":e={begin:0,end:a.call(s).length};break;case"ignore":e.end=e.begin=d.call(s,l.call(s));break;case"radixFocus":if(s.clicked>1&&0===n.validPositions.length)break;if(function(e){if(""!==o.radixPoint&&0!==o.digits){const t=n.validPositions;if(void 0===t[e]||void 0===t[e].input){if(e<d.call(s,-1))return!0;const i=a.call(s).indexOf(o.radixPoint);if(-1!==i){for(const e in t){const n=Number(e);if(i<n&&t[e].input!==r.getPlaceholder.call(s,n))return!1}return!0}}}return!1}(e.begin)){const t=a.call(s).join("").indexOf(o.radixPoint);e.end=e.begin=o.numericInput?d.call(s,t):t;break}default:if(h=e.begin,u=l.call(s,h,!0),p=d.call(s,-1!==u||c.call(s,0)?u:-1),h<=p)e.end=e.begin=c.call(s,h,!1,!0)?h:d.call(s,h);else{const t=n.validPositions[u],i=r.getTestTemplate.call(s,p,t?t.match.locator:void 0,t),l=r.getPlaceholder.call(s,p,i.match);if(""!==l&&a.call(s)[p]!==l&&!0!==i.match.optionalQuantifier&&!0!==i.match.newBlockMarker||!c.call(s,p,o.keepStatic,!0)&&i.match.def===l){const e=d.call(s,p);(h>=e||h===p)&&(p=e)}e.end=e.begin=p}}return e}},t.getBuffer=a,t.getBufferTemplate=function(){const e=this.maskset;return void 0===e._buffer&&(e._buffer=r.getMaskTemplate.call(this,!1,1),void 0===e.buffer&&(e.buffer=e._buffer.slice())),e._buffer},t.getLastValidPosition=l,t.isMask=c,t.resetMaskSet=function(e){const t=this.maskset;t.buffer=void 0,!0!==e&&(t.validPositions=[],t.p=0),!1===e&&(t.tests={},t.jitOffset={})},t.seekNext=d,t.seekPrevious=function(e,t){const i=this;let s=e-1;if(e<=0)return 0;for(;s>0&&(!0===t&&(!0!==r.getTest.call(i,s).match.newBlockMarker||!c.call(i,s,void 0,!0))||!0!==t&&!c.call(i,s,void 0,!0));)s--;return s},t.translatePosition=h;var s,n=(s=i(11))&&s.__esModule?s:{default:s},o=i(21),r=i(22);function a(e){const t=this,{maskset:i}=t;return void 0!==i.buffer&&!0!==e||(i.buffer=r.getMaskTemplate.call(t,!0,l.call(t),!0),void 0===i._buffer&&(i._buffer=i.buffer.slice())),i.buffer}function l(e,t,i){const s=this.maskset;let n=-1,o=-1;const r=i||s.validPositions;void 0===e&&(e=-1);for(let i=0,s=r.length;i<s;i++)r[i]&&(t||!0!==r[i].generatedInput)&&(i<=e&&(n=i),i>=e&&(o=i));return-1===n||n===e?o:-1===o||e-n<o-e?n:o}function c(e,t,i){const s=this,n=this.maskset;let o=r.getTestTemplate.call(s,e).match;if(""===o.def&&(o=r.getTest.call(s,e).match),!0!==o.static)return o.fn;if(!0===i&&void 0!==n.validPositions[e]&&!0!==n.validPositions[e].generatedInput)return!0;if(!0!==t&&e>-1){if(i){const t=r.getTests.call(s,e);return t.length>1+(""===t[t.length-1].match.def?1:0)}const t=r.determineTestTemplate.call(s,e,r.getTests.call(s,e)),n=r.getPlaceholder.call(s,e,t.match);return t.match.def!==n}return!1}function d(e,t,i){const s=this;void 0===i&&(i=!0);let n=e+1;for(;""!==r.getTest.call(s,n).match.def&&(!0===t&&(!0!==r.getTest.call(s,n).match.newBlockMarker||!c.call(s,n,void 0,!0))||!0!==t&&!c.call(s,n,void 0,i));)n++;return n}function h(e){const t=this.opts,i=this.el;return!this.isRTL||"number"!=typeof e||t.greedy&&""===t.placeholder||!i||(e=this._valueGet().length-e)<0&&(e=0),e}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=a,t.casing=l,t.checkAlternationMatch=function(e,t,i){let s,n=this.opts.greedy?t:t.slice(0,1),o=!1,r=void 0!==i?i.split(","):[];for(let t=0;t<r.length;t++)-1!==(s=e.indexOf(r[t]))&&e.splice(s,1);for(let t=0;t<e.length;t++)if(n.includes(e[t])){o=!0;break}return o},t.handleRemove=function(e,t,i,s,l){const c=this,d=this.maskset,h=this.opts;if((h.numericInput||c.isRTL)&&(t===n.keys.Backspace?t=n.keys.Delete:t===n.keys.Delete&&(t=n.keys.Backspace),c.isRTL)){const e=i.end;i.end=i.begin,i.begin=e}const u=o.getLastValidPosition.call(c,void 0,!0);let p;i.end>=o.getBuffer.call(c).length&&u>=i.end&&(i.end=u+1),t===n.keys.Backspace?i.end-i.begin<1&&(i.begin=o.seekPrevious.call(c,i.begin)):t===n.keys.Delete&&i.begin===i.end&&(i.end=o.isMask.call(c,i.end,!0,!0)?i.end+1:o.seekNext.call(c,i.end)+1),!1!==(p=m.call(c,i))&&((!0!==s&&!1!==h.keepStatic||null!==h.regex&&-1!==r.getTest.call(c,i.begin).match.def.indexOf("|"))&&a.call(c,!0),!0!==s&&(d.p=t===n.keys.Delete?i.begin+p:i.begin,d.p=o.determineNewCaretPosition.call(c,{begin:d.p,end:d.p},!1,!1===h.insertMode&&t===n.keys.Backspace?"none":void 0).begin))},t.isComplete=function(e){const t=this,i=this.opts,s=this.maskset;if("function"==typeof i.isComplete)return i.isComplete(e,i);if("*"===i.repeat)return;let n=!1,a=o.determineLastRequiredPosition.call(t,!0),l=a.l;if(void 0===a.def||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){n=!0;for(let i=0;i<=l;i++){const o=r.getTestTemplate.call(t,i).match;if(!0!==o.static&&void 0===s.validPositions[i]&&(!1===o.optionality||void 0===o.optionality||o.optionality&&0==o.newBlockMarker)&&(!1===o.optionalQuantifier||void 0===o.optionalQuantifier)||!0===o.static&&""!=o.def&&e[i]!==r.getPlaceholder.call(t,i,o)){n=!1;break}}}return n},t.isSelection=c,t.isValid=d,t.refreshFromBuffer=u,t.revalidateMask=m;var s=i(18),n=i(19),o=i(20),r=i(22);function a(e,t,i,s,n,l){const c=this,h=this.dependencyLib,u=this.opts,p=c.maskset;if(!c.hasAlternator)return!1;const m=h.extend(!0,[],p.validPositions),f=h.extend(!0,{},p.tests);let g,v,b,_,y,k,w,x,E,C,S,A=!1,N=!1,T=void 0!==n?n:o.getLastValidPosition.call(c);if(l&&(C=l.begin,S=l.end,l.begin>l.end&&(C=l.end,S=l.begin)),-1===T&&void 0===n)g=0,_=r.getTest.call(c,g),v=_.alternation;else for(;T>=0;T--)if(b=0===T?r.getTest.call(c,0):p.validPositions[T],b&&void 0!==b.alternation){if(T<=(e||0)&&_&&_.locator[b.alternation]!==b.locator[b.alternation])break;g=T,v=b.alternation,_=b}if(void 0!==v){w=parseInt(g),p.excludes[w]=p.excludes[w]||[],!0!==e&&p.excludes[w].push((0,r.getDecisionTaker)(_)+":"+_.alternation);const n=[];let v=-1;for(y=w;w<o.getLastValidPosition.call(c,void 0,!0)+1;y++)-1===v&&e<=y&&void 0!==t&&(n.push(t),v=n.length-1),k=p.validPositions[w],k&&!0!==k.generatedInput&&(0!==w||k.input!==u.skipOptionalPartCharacter)&&(void 0===l||y<C||y>=S)&&n.push(k.input),p.validPositions.splice(w,1);for(-1===v&&void 0!==t&&(n.push(t),v=n.length-1);void 0!==p.excludes[w]&&p.excludes[w].length<10;){p.tests={},o.resetMaskSet.call(c,!0),A=!0,x=w-1;const g=r.getMaskTemplate.call(c,!0,0);for(y=0;y<n.length&&(E=n[y],g[x+1]===E&&!0!==u.numericInput?x++:x=0===y||void 0!==N.caretPos||!1===u.insertMode?o.seekNext.call(c,x):o.getLastValidPosition.call(c,x,!0)+1,A=d.call(c,x,E,!1,s,!0));y++)y===v&&(N=A),!0===e&&A&&(N={caretPos:y});if(A)break;if(o.resetMaskSet.call(c),_=r.getTest.call(c,w),p.validPositions=h.extend(!0,[],m),p.tests=h.extend(!0,{},f),N=!1,!p.excludes[w]){N=a.call(c,e,t,i,s,w-1,l);break}if(null!=_.alternation){const n=(0,r.getDecisionTaker)(_);if(-1!==p.excludes[w].indexOf(n+":"+_.alternation)){N=a.call(c,e,t,i,s,w-1,l);break}for(p.excludes[w].push(n+":"+_.alternation),y=w;y<o.getLastValidPosition.call(c,void 0,!0)+1;y++)p.validPositions.splice(w)}else delete p.excludes[w]}}return N&&!1===u.keepStatic||delete p.excludes[w],N||(p.validPositions=h.extend(!0,[],m),p.tests=h.extend(!0,{},f)),N}function l(e,t,i){const s=this.opts,o=this.maskset;switch(s.casing||t.casing){case"upper":e=e.toLocaleUpperCase();break;case"lower":e=e.toLocaleLowerCase();break;case"title":var r=o.validPositions[i-1];e=0===i||r&&r.input===String.fromCharCode(n.keyCode.Space)?e.toLocaleUpperCase():e.toLocaleLowerCase();break;case"follow":t.def&&t.def!==t.def.toLocaleLowerCase()?e=e.toLocaleUpperCase():t.def&&t.def!==t.def.toLocaleUpperCase()&&(e=e.toLocaleLowerCase());break;default:if("function"==typeof s.casing){const t=Array.prototype.slice.call(arguments);t.push(o.validPositions),e=s.casing.apply(this,t)}}return e}function c(e){const t=this.opts.insertMode?0:1;return this.isRTL?e.begin-e.end>t:e.end-e.begin>t}function d(e,t,i,s,n,h,f){const g=this,v=this.dependencyLib,b=this.opts,_=g.maskset;i=!0===i;let y=e;function k(e){if(void 0!==e){if(void 0!==e.remove&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort(function(e,t){return g.isRTL?e.pos-t.pos:t.pos-e.pos}).forEach(function(e){m.call(g,{begin:e,end:e+1})}),e.remove=void 0),void 0!==e.insert&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort(function(e,t){return g.isRTL?t.pos-e.pos:e.pos-t.pos}).forEach(function(e){""!==e.c&&d.call(g,e.pos,e.c,void 0===e.strict||e.strict,void 0!==e.fromIsValid?e.fromIsValid:s)}),e.insert=void 0),e.refreshFromBuffer&&e.buffer){const t=e.refreshFromBuffer;u.call(g,!0===t?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}void 0!==e.rewritePosition&&(y=e.rewritePosition,e=!0)}return e}function w(t,i,n){let a=!1;return r.getTests.call(g,t).every(function(d,h){const u=d.match;if(o.getBuffer.call(g,!0),a=(!u.jit||void 0!==_.validPositions[o.seekPrevious.call(g,t)])&&(null!=u.fn?u.fn.test(i,_,t,n,b,c.call(g,e)):(i===u.def||i===b.skipOptionalPartCharacter)&&""!==u.def&&{c:r.getPlaceholder.call(g,t,u,!0)||u.def,pos:t}),!1!==a){let n=void 0!==a.c?a.c:i,o=t;return n=n===b.skipOptionalPartCharacter&&!0===u.static?r.getPlaceholder.call(g,t,u,!0)||u.def:n,a=k(a),!0!==a&&void 0!==a.pos&&a.pos!==t&&(o=a.pos),!0!==a&&void 0===a.pos&&void 0===a.c||!1===m.call(g,e,v.extend({},d,{input:l.call(g,n,u,o)}),s,o)&&(a=!1),!1}return!0}),a}void 0!==e.begin&&(y=g.isRTL?e.end:e.begin);let x=!0,E=v.extend(!0,[],_.validPositions);if(!1===b.keepStatic&&void 0!==_.excludes[y]&&!0!==n&&!0!==s)for(let t=y;t<(g.isRTL?e.begin:e.end);t++)void 0!==_.excludes[t]&&(_.excludes[t]=void 0,delete _.tests[t]);if("function"==typeof b.preValidation&&!0!==s&&!0!==h&&(x=b.preValidation.call(g,o.getBuffer.call(g),y,t,c.call(g,e),b,_,e,i||n),x=k(x)),!0===x){if(x=w(y,t,i),(!i||!0===s)&&!1===x&&!0!==h){const s=_.validPositions[y];if(!s||!0!==s.match.static||s.match.def!==t&&t!==b.skipOptionalPartCharacter){if(b.insertMode||void 0===_.validPositions[o.seekNext.call(g,y)]||e.end>y){let s=!1;if(_.jitOffset[y]&&void 0===_.validPositions[o.seekNext.call(g,y)]&&(x=d.call(g,y+_.jitOffset[y],t,!0,!0),!1!==x&&(!0!==n&&(x.caret=y),s=!0)),e.end>y&&(_.validPositions[y]=void 0),!s&&!o.isMask.call(g,y,b.keepStatic&&0===y))for(let e=y+1,s=o.seekNext.call(g,y,!1,0!==y);e<=s;e++)if(x=w(e,t,i),!1!==x){x=p.call(g,y,void 0!==x.pos?x.pos:e)||x,y=e;break}}}else x={caret:o.seekNext.call(g,y)}}if(g.hasAlternator&&!0!==n&&!i&&(n=!0,!1===x?(!0===b.keepStatic||isFinite(parseInt(b.keepStatic))&&y>=b.keepStatic)&&(x=a.call(g,y,t,i,s,void 0,e)):!0===x&&(c.call(g,e)&&_.tests[y]&&_.tests[y].length>1&&b.keepStatic||!0!==b.numericInput&&_.tests[y]&&_.tests[y].length>1&&o.getLastValidPosition.call(g,void 0,!0)>y)&&(x=a.call(g,!0)||x)),!0===x&&(x={pos:y}),"function"==typeof b.postValidation&&!0!==s&&!0!==h){const s=b.postValidation.call(g,o.getBuffer.call(g,!0),void 0!==e.begin?g.isRTL?e.end:e.begin:e,t,x,b,_,i,f,n);void 0!==s&&(x=!0===s?x:s)}}x&&void 0===x.pos&&(x.pos=y),!1===x||!0===h?(o.resetMaskSet.call(g,!0),_.validPositions=v.extend(!0,[],E)):p.call(g,void 0,y,!0);let C=k(x);return void 0!==g.maxLength&&o.getBuffer.call(g).length>g.maxLength&&!s&&(o.resetMaskSet.call(g,!0),_.validPositions=v.extend(!0,[],E),C=!1),C}function h(e,t,i){const s=this.maskset;let n=!1,o=r.getTests.call(this,e);for(let r=0;r<o.length;r++){if(o[r].match&&(o[r].match.nativeDef===t.match[i.shiftPositions?"def":"nativeDef"]&&(!i.shiftPositions||!t.match.static)||o[r].match.nativeDef===t.match.nativeDef||i.regex&&!o[r].match.static&&o[r].match.fn.test(t.input,s,e,!1,i))){n=!0;break}if(o[r].match&&o[r].match.def===t.match.nativeDef){n=void 0;break}}return!1===n&&void 0!==s.jitOffset[e]&&(n=h.call(this,e+s.jitOffset[e],t,i)),n}function u(e,t,i){const n=this,r=this.maskset,a=this.opts,l=this.dependencyLib;let c,d,h=a.skipOptionalPartCharacter,u=n.isRTL?i.slice().reverse():i;if(a.skipOptionalPartCharacter="",!0===e)o.resetMaskSet.call(n,!1),e=0,t=i.length,d=o.determineNewCaretPosition.call(n,{begin:0,end:0},!1).begin;else{for(c=e;c<t;c++)delete r.validPositions[c];d=e}const p=new l.Event("keypress");for(c=e;c<t;c++){p.key=u[c].toString(),n.ignorable=!1;const e=s.EventHandlers.keypressEvent.call(n,p,!0,!1,!1,d);!1!==e&&void 0!==e&&(d=e.forwardPosition)}a.skipOptionalPartCharacter=h}function p(e,t,i){const s=this,n=this.maskset,a=this.dependencyLib;if(void 0===e)for(e=t-1;e>0&&!n.validPositions[e];e--);for(let h=e;h<t;h++)if(void 0===n.validPositions[h]&&!o.isMask.call(s,h,!1)&&(0==h?r.getTest.call(s,h):n.validPositions[h-1])){const e=r.getTests.call(s,h).slice();""===e[e.length-1].match.def&&e.pop();var l,c=r.determineTestTemplate.call(s,h,e);if(c&&(!0!==c.match.jit||"master"===c.match.newBlockMarker&&(l=n.validPositions[h+1])&&!0===l.match.optionalQuantifier)&&((c=a.extend({},c,{input:r.getPlaceholder.call(s,h,c.match,!0)||c.match.def})).generatedInput=!0,m.call(s,h,c,!0),!0!==i)){const e=n.validPositions[t].input;return n.validPositions[t]=void 0,d.call(s,t,e,!0,!0)}}}function m(e,t,i,s){const n=this,a=this.maskset,l=this.opts,u=this.dependencyLib;function p(e,t,i){const s=t[e];if(void 0!==s&&!0===s.match.static&&!0!==s.match.optionality&&(void 0===t[0]||void 0===t[0].alternation)){const s=i.begin<=e-1?t[e-1]&&!0===t[e-1].match.static&&t[e-1]:t[e-1],n=i.end>e+1?t[e+1]&&!0===t[e+1].match.static&&t[e+1]:t[e+1];return s&&n}return!1}let m=0,f=void 0!==e.begin?e.begin:e,g=void 0!==e.end?e.end:e,v=!0;if(e.begin>e.end&&(f=e.end,g=e.begin),s=void 0!==s?s:f,void 0===i&&(f!==g||l.insertMode&&void 0!==a.validPositions[s]||void 0===t||t.match.optionalQuantifier||t.match.optionality)){let i,b=u.extend(!0,[],a.validPositions),_=o.getLastValidPosition.call(n,void 0,!0);a.p=f;const y=c.call(n,e)?f:s;for(i=_;i>=y;i--)a.validPositions.splice(i,1),void 0===t&&delete a.tests[i+1];let k,w,x,E=s,C=E;for(t&&(a.validPositions[s]=u.extend(!0,{},t),C++,E++),null==b[g]&&a.jitOffset[g]&&(g+=a.jitOffset[g]+(t?1:0)),i=t?g:g-1;i<=_;i++){if(void 0!==(k=b[i])&&(!0!==l.shiftPositions||!0!==k.generatedInput)&&(i>=g||i>=f&&p(i,b,{begin:f,end:g}))){for(;x=r.getTest.call(n,C),""!==x.match.def;){if(!1!==(w=h.call(n,C,k,l))||"+"===k.match.def){"+"===k.match.def&&o.getBuffer.call(n,!0);const e=d.call(n,C,k.input,"+"!==k.match.def,!0);if(v=!1!==e,E=(e.pos||C)+1,!v&&w)break}else v=!1;if(v){void 0===t&&k.match.static&&i===e.begin&&m++;break}if(!v&&o.getBuffer.call(n),C>a.maskLength)break;C++}""==r.getTest.call(n,C).match.def&&(v=!1),C=E}if(!v)break}if(!v)return a.validPositions=u.extend(!0,[],b),o.resetMaskSet.call(n,!0),!1}else t&&r.getTest.call(n,s).match.cd===t.match.cd&&(a.validPositions[s]=u.extend(!0,{},t));return o.resetMaskSet.call(n,!0),m}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=h,t.getDecisionTaker=l,t.getMaskTemplate=function(e,t,i,s,n){const o=this,r=this.opts,a=this.maskset,l=r.greedy,u=[];n&&r.greedy&&(r.greedy=!1,o.maskset.tests={}),t=t||0;let p,f,g,v,b=0;do{if(!0===e&&a.validPositions[b])g=n&&a.validPositions[b].match.optionality&&void 0===a.validPositions[b+1]&&(!0===a.validPositions[b].generatedInput||a.validPositions[b].input==r.skipOptionalPartCharacter&&b>0)?h.call(o,b,m.call(o,b,p,b-1)):a.validPositions[b],f=g.match,p=g.locator.slice(),u.push(!0===i?g.input:!1===i?f.nativeDef:c.call(o,b,f));else{g=d.call(o,b,p,b-1),f=g.match,p=g.locator.slice();const e=!0!==s&&(!1!==r.jitMasking?r.jitMasking:f.jit);v=(v||a.validPositions[b-1])&&f.static&&f.def!==r.groupSeparator&&null===f.fn,v||!1===e||void 0===e||"number"==typeof e&&isFinite(e)&&e>b?u.push(!1===i?f.nativeDef:c.call(o,u.length,f)):v=!1}b++}while(!0!==f.static||""!==f.def||t>b);return""===u[u.length-1]&&u.pop(),!1===i&&void 0!==a.maskLength||(a.maskLength=b-1),r.greedy=l,u},t.getPlaceholder=c,t.getTest=u,t.getTestTemplate=d,t.getTests=m,t.isSubsetOf=p;var s,n=(s=i(7))&&s.__esModule?s:{default:s},o=i(20),r=i(21);function a(e,t){let i=(null!=e.alternation&&e.mloc[`${l(e)}:${e.alternation}`]||e.locator).join("");if(""!==i)for(i=i.split(":")[0];i.length<t;)i+="0";return i}function l(e){let t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",").sort((e,t)=>e-t)[0]),void 0!==t?t.toString():""}function c(e,t,i){const s=this,n=this.opts,a=this.maskset;if(void 0!==(t=t||u.call(s,e).match).placeholder||!0===i){if(""!==t.placeholder&&!0===t.static&&!0!==t.generated){const a=o.getLastValidPosition.call(s,e),l=o.seekNext.call(s,a);return(i?e<=l:e<l)?r.casing.call(s,n.staticDefinitionSymbol&&t.static?t.nativeDef:t.def,t,e):"function"==typeof t.placeholder?t.placeholder(n):t.placeholder}return"function"==typeof t.placeholder?t.placeholder(n):t.placeholder}if(!0===t.static){if(e>-1&&void 0===a.validPositions[e]){let t,i=m.call(s,e),o=[];if("string"==typeof n.placeholder&&i.length>1+(""===i[i.length-1].match.def?1:0))for(let s=0;s<i.length;s++)if(""!==i[s].match.def&&!0!==i[s].match.optionality&&!0!==i[s].match.optionalQuantifier&&(!0===i[s].match.static||void 0===t||!1!==i[s].match.fn.test(t.match.def,a,e,!0,n))&&(o.push(i[s]),!0===i[s].match.static&&(t=i[s]),o.length>1&&/[0-9a-zA-Z]/.test(o[0].match.def)))return n.placeholder.charAt(e%n.placeholder.length)}return t.def}return"object"==typeof n.placeholder?t.def:n.placeholder.charAt(e%n.placeholder.length)}function d(e,t,i){return this.maskset.validPositions[e]||h.call(this,e,m.call(this,e,t?t.slice():t,i))}function h(e,t){const i=this.opts,s=function(e,t){let i=0,s=!1;return t.forEach(e=>{e.match.optionality&&(0!==i&&i!==e.match.optionality&&(s=!0),(0===i||i>e.match.optionality)&&(i=e.match.optionality))}),i&&(0==e||1==t.length?i=0:s||(i=0)),i}(e,t);e=e>0?e-1:0;const n=Math.max(...t.map(e=>void 0===e.locator?0:e.locator.length)),o=a(u.call(this,e),n);let r,l,c,d=0;i.greedy&&t.length>1&&""===t[t.length-1].match.def&&(d=1);for(let e=0;e<t.length-d;e++){const d=t[e];r=a(d,n);const h=Number(r)-Number(o);(!0!==d.unMatchedAlternationStopped||t.filter(e=>!0!==e.unMatchedAlternationStopped).length<=1)&&(void 0===l||""!==r&&h<l||c&&!i.greedy&&c.match.optionality&&c.match.optionality-s>0&&"master"===c.match.newBlockMarker&&(!d.match.optionality||d.match.optionality-s<1||!d.match.newBlockMarker)||c&&!i.greedy&&c.match.optionalQuantifier&&!d.match.optionalQuantifier)&&(l=h,c=d)}return c}function u(e,t){const i=this.maskset;return i.validPositions[e]?i.validPositions[e]:(t||m.call(this,e))[0]}function p(e,t,i){function s(e){let t,i=[],s=-1;for(let n=0,o=e.length;n<o;n++)if("-"===e.charAt(n))for(t=e.charCodeAt(n+1);++s<t;)i.push(String.fromCharCode(s));else s=e.charCodeAt(n),i.push(e.charAt(n));return i.join("")}return e.match.def===t.match.nativeDef||!(!(i.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)||!0===e.match.static||!0===t.match.static)&&("."===t.match.fn.source||-1!==s(t.match.fn.source.replace(/[[\]/]/g,"")).indexOf(s(e.match.fn.source.replace(/[[\]/]/g,""))))}function m(e,t,i){let s,o,r=this,a=this.dependencyLib,l=this.maskset,c=this.opts,d=this.el,u=l.maskToken,m=t?i:0,f=t?t.slice():[0],g=[],v=!1,b=!1,_=t?t.join(""):"",y=!1;function k(t,i,o,a){function h(o,a,u){function f(e,t){let i=0===t.matches.indexOf(e);return i||t.matches.every(function(s,n){return!0===s.isQuantifier?i=f(e,t.matches[n-1]):Object.prototype.hasOwnProperty.call(s,"matches")&&(i=f(e,s)),!i||(t.matches[n+1]&&t.matches[n+1].isQuantifier&&(i=0===n),!1)}),i}function E(e,t,i){let s,n,o,r,a=`${t}:${i}`;if((l.tests[e]||l.validPositions[e])&&(l.validPositions[e]?[l.validPositions[e]]:l.tests[e]).every(function(e,l){return e.mloc[a]?(s=e,!1):(Object.values(e.mloc).filter(e=>e[i]==t).every(t=>{let i=t.join("").split(":")[0];for(o=o||i;i.length<o.length;)i+="0";const a=Number(i);return(void 0===s||a<n)&&(n=a,s=e,r=Object.entries(e.mloc).find(e=>e[1].toString()===t.toString())[0]),!0}),!0)}),s){void 0===i&&(a=`${t}:${s.alternation}`);const e=`${s.locator[s.alternation]}:${s.alternation}`,n=s.mloc[r||a]||s.mloc[e]||s.locator;-1!==n[n.length-1].toString().indexOf(":")&&n.pop();const o=parseInt(s.alternation)+1;return n.slice(o)}return void 0!==i?E(e,t):void 0}function C(t,i){return!0===t.match.static&&!0!==i.match.static&&i.match.fn.test(t.match.def,l,e,!1,c,!1)}function S(e,t){let i=e.alternation,s=void 0===t||i<=t.alternation&&-1===e.locator[i].toString().indexOf(t.locator[i]);if(!s&&i>t.alternation)for(let n=0;n<i;n++)if(e.locator[n]!==t.locator[n]){i=n,s=!0;break}return!!s&&function(i){e.mloc=e.mloc||{};let s=e.locator[i];if(void 0!==s){if(void 0===t)"string"==typeof s&&(s=s.split(",")[0]),s=`${s}:${i}`,void 0===e.mloc[s]&&(e.mloc[s]=e.locator.slice(),e.mloc[s].push(`:${i}`));else{let i=0;for(const s in t.mloc)if(void 0===e.mloc[s])e.mloc[s]=t.mloc[s];else do{if(void 0===e.mloc[s+i]){e.mloc[s+i]=t.mloc[s];break}}while(void 0!==e.mloc[s+i++]);e.locator=x(m,[e,t])}return e.alternation>i&&(e.alternation=i),!0}return e.alternation=void 0,!1}(i)}if(m>e+c._maxTestPos)throw new Error(`Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${l.mask}`);if(m===e&&void 0===o.matches){if(g.push({match:o,locator:a.reverse(),cd:_,mloc:{}}),!o.optionality||void 0!==u||!(c.definitions&&c.definitions[o.nativeDef]&&c.definitions[o.nativeDef].optional||n.default.prototype.definitions[o.nativeDef]&&n.default.prototype.definitions[o.nativeDef].optional))return!0;v=!0,m=e}else if(void 0!==o.matches){if(o.isGroup&&u!==o)return function(){if(o=h(t.matches[t.matches.indexOf(o)+1],a,u))return!0}();if(o.isOptional)return function(){const t=o,n=g.length;if(o=k(o,i,a,u),g.length>0){if(g.forEach(function(e,t){t>=n&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)}),s=g[g.length-1].match,void 0!==u||!f(s,t))return o;v=!0,m=e}}();if(o.isAlternator)return function(){function s(e){let t=0;for(let i=0;i<e.length;i++){const s=e[i];s.isQuantifier&&!isNaN(s.quantifier.max)?t+=s.quantifier.max:t++}return t}function n(e){const t=e.matches[0].matches?s(e.matches[0].matches):1;let i;for(let n=0;n<e.matches.length&&(i=e.matches[n].matches?s(e.matches[n].matches):1,t===i);n++);return t!==i}r.hasAlternator=!0;const f=o,_=[],k=g.slice(),w=a.length,x=i.length>0?i.shift():-1;let A;if(-1===x||"string"==typeof x){const t=m,s=i.slice();let r,N=[];if("string"==typeof x)N=x.split(",");else for(r=0;r<f.matches.length;r++)N.push(r.toString());if(void 0!==l.excludes[e]){const t=N.slice();for(let t=0,i=l.excludes[e].length;t<i;t++){const i=l.excludes[e][t].toString().split(":");a.length==i[1]&&N.splice(N.indexOf(i[0]),1)}0===N.length&&(delete l.excludes[e],N=t)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&t>=c.keepStatic)&&(N=N.slice(0,1));for(let e=0;e<N.length;e++){r=parseInt(N[e]),g=[],i="string"==typeof x&&E(m,r,w)||s.slice();const l=f.matches[r];if(l&&h(l,[r].concat(a),u))o=!0;else if(y=n(f),l&&l.matches&&l.matches.length>f.matches[0].matches.length)break;A=g.slice(),m=t,g=[];for(let e=0;e<A.length;e++){let i=A[e],s=!1;i.alternation=i.alternation||w,S(i);for(let e=0;e<_.length;e++){const n=_[e];if("string"!=typeof x||void 0!==i.alternation&&-1!==x.indexOf(i.locator[i.alternation].toString())){if(i.match.nativeDef===n.match.nativeDef){s=!0,S(n,i);break}if(p(i,n,c)){S(i,n)&&(s=!0,_.splice(_.indexOf(n),0,i));break}if(p(n,i,c)){S(n,i);break}if(C(i,n)){S(i,n)&&(s=!0,_.splice(_.indexOf(n),0,i));break}if(C(n,i)){S(n,i),n.match.optionality&&void 0===d.inputmask.userOptions.keepStatic&&(c.keepStatic=t);break}}}s||_.push(i)}}g=k.concat(_),m=e,v=v||g.length>0&&y,!y&&v&&(b=!0),o=_.length>0&&!y,y&&v&&!o&&g.forEach(function(e,t){e.unMatchedAlternationStopped=!0}),i=s.slice()}else o=h(f.matches[x]||t.matches[x],[x].concat(a),u);if(o)return!0}();if(o.isQuantifier&&u!==t.matches[t.matches.indexOf(o)-1])return function(){const n=o;let r=!1;for(let d=i.length>0?i.shift():0;d<(isNaN(n.quantifier.max)?d+1:n.quantifier.max)&&m<=e;d++){const i=t.matches[t.matches.indexOf(n)-1];if(o=h(i,[d].concat(a),i)){if(g.forEach(function(t,a){s=w(i,t.match)?t.match:g[g.length-1].match,s.optionalQuantifier=d>=n.quantifier.min,s.jit=(d+1)*(i.matches.indexOf(s)+1)>n.quantifier.jit,(s.optionalQuantifier||s.optionality)&&f(s,i)&&(v=!0,m=e,c.greedy&&null==l.validPositions[e-1]&&d>n.quantifier.min&&-1!=["*","+"].indexOf(n.quantifier.max)&&(g.pop(),_=void 0),r=!0,o=!1),!r&&s.jit&&(l.jitOffset[e]=i.matches.length-i.matches.indexOf(s))}),r)break;return!0}}}();if(o=k(o,i,a,u))return!0}else m++}for(let s=i.length>0?i.shift():0;s<t.matches.length;s++)if(!0!==t.matches[s].isQuantifier){const i=h(t.matches[s],[s].concat(o),a);if(i&&m===e)return i;if(m>e)break}}function w(e,t){let i=-1!=e.matches.indexOf(t);return i||e.matches.forEach((e,s)=>{void 0===e.matches||i||(i=w(e,t))}),i}function x(e,t){let i=[];return Array.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation||!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&e>=c.keepStatic?(i=h.call(r,e,t.slice()).locator.slice(),0===i.length&&(i=t[0].locator.slice())):t.forEach(e=>{Object.values(e.mloc).forEach(e=>{e.forEach((e,t)=>{const s=i[t];e.toString().includes(":")||s&&s.toString().includes(":")||(void 0===s?i[t]=e:s.toString().includes(e)||(i[t]=i[t]+","+e))})})})),i}if(e>-1){if(void 0===t){let t,i=e-1;for(;void 0===(t=l.validPositions[i]||l.tests[i])&&i>-1;)i--;void 0!==t&&i>-1&&(f=x(i,t),_=f.join(""),m=i)}if(l.tests[e]&&l.tests[e][0].cd===_)return l.tests[e];for(let t=f.shift();t<u.length&&!(k(u[t],f,[t])&&m===e||m>e);t++);}return(0===g.length||v)&&g.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:y&&0===g.filter(e=>!0!==e.unMatchedAlternationStopped).length||b&&g.length>0&&g.filter(e=>!e.match.static).every(e=>e.match.optionalQuantifier)?[0]:[],mloc:{},cd:_}),void 0!==t&&l.tests[e]?o=a.extend(!0,[],g):(l.tests[e]=a.extend(!0,[],g),o=l.tests[e]),g.forEach(e=>{e.match.optionality=e.match.defOptionality||!1}),o}},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(){const e=this,t=this.opts,i=this.el,c=this.dependencyLib;o.EventRuler.off(i);const d=function(t,i){const s=t.getAttribute("type");let n="input"===t.tagName.toLowerCase()&&i.supportsInputType.includes(s)||t.isContentEditable||"textarea"===t.tagName.toLowerCase();if(!n)if("input"===t.tagName.toLowerCase()){let e=document.createElement("input");e.setAttribute("type",s),n="text"===e.type,e=null}else n="partial";return!1!==n?function(t){let s,n;function l(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==a.getLastValidPosition.call(e)||!0!==i.nullable?this.getRootNode().activeElement===this&&i.clearMaskOnLostFocus?(e.isRTL?r.clearOptionalTail.call(e,a.getBuffer.call(e).slice()).reverse():r.clearOptionalTail.call(e,a.getBuffer.call(e).slice())).join(""):s.call(this):"":s.call(this)}function d(e){n.call(this,e),this.inputmask&&(0,r.applyInputValue)(this,e)}if(!t.inputmask.__valueGet){if(!0!==i.noValuePatching){if(Object.getOwnPropertyDescriptor){const e=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;e&&e.get&&e.set?(s=e.get,n=e.set,Object.defineProperty(t,"value",{get:l,set:d,configurable:!0})):"input"!==t.tagName.toLowerCase()&&(s=function(){return this.textContent},n=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:l,set:d,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(s=t.__lookupGetter__("value"),n=t.__lookupSetter__("value"),t.__defineGetter__("value",l),t.__defineSetter__("value",d));t.inputmask.__valueGet=s,t.inputmask.__valueSet=n}t.inputmask._valueGet=function(t){return e.isRTL&&!0!==t?s.call(this.el).split("").reverse().join(""):s.call(this.el)},t.inputmask._valueSet=function(t,i){n.call(this.el,null==t?"":!0!==i&&e.isRTL?t.split("").reverse().join(""):t)},void 0===s&&(s=function(){return this.value},n=function(e){this.value=e},function(t){if(c.valHooks&&(void 0===c.valHooks[t]||!0!==c.valHooks[t].inputmaskpatch)){const s=c.valHooks[t]&&c.valHooks[t].get?c.valHooks[t].get:function(e){return e.value},n=c.valHooks[t]&&c.valHooks[t].set?c.valHooks[t].set:function(e,t){return e.value=t,e};c.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();{const n=s(t);return-1!==a.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)||!0!==i.nullable?n:""}}return s(t)},set:function(e,t){const i=n(e,t);return e.inputmask&&(0,r.applyInputValue)(e,t),i},inputmaskpatch:!0}}}(t.type),function(e){o.EventRuler.on(e,"mouseenter",function(){const e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?a.getBuffer.call(e.inputmask).slice().reverse():a.getBuffer.call(e.inputmask)).join("")&&(0,r.applyInputValue)(e,t)})}(t))}}(t):t.inputmask=void 0,n}(i,t);if(!1!==d){e.originalPlaceholder=i.placeholder,e.maxLength=void 0!==i?i.maxLength:void 0,-1===e.maxLength&&(e.maxLength=void 0),"inputMode"in i&&null===i.getAttribute("inputmode")&&(i.inputMode=t.inputmode,i.setAttribute("inputmode",t.inputmode)),!0===d&&(t.showMaskOnFocus=t.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(i.autocomplete),s.iphone&&(t.insertModeVisual=!1,i.setAttribute("autocorrect","off")),o.EventRuler.on(i,"submit",n.EventHandlers.submitEvent),o.EventRuler.on(i,"reset",n.EventHandlers.resetEvent),o.EventRuler.on(i,"blur",n.EventHandlers.blurEvent),o.EventRuler.on(i,"focus",n.EventHandlers.focusEvent),o.EventRuler.on(i,"invalid",n.EventHandlers.invalidEvent),o.EventRuler.on(i,"click",n.EventHandlers.clickEvent),o.EventRuler.on(i,"mouseleave",n.EventHandlers.mouseleaveEvent),o.EventRuler.on(i,"mouseenter",n.EventHandlers.mouseenterEvent),o.EventRuler.on(i,"paste",n.EventHandlers.pasteEvent),o.EventRuler.on(i,"cut",n.EventHandlers.cutEvent),o.EventRuler.on(i,"complete",t.oncomplete),o.EventRuler.on(i,"incomplete",t.onincomplete),o.EventRuler.on(i,"cleared",t.oncleared),!0!==t.inputEventOnly&&o.EventRuler.on(i,"keydown",n.EventHandlers.keyEvent),(s.mobile||t.inputEventOnly)&&i.removeAttribute("maxLength"),o.EventRuler.on(i,"input",n.EventHandlers.inputFallBackEvent)),o.EventRuler.on(i,"setvalue",n.EventHandlers.setValueEvent),void 0===e.applyMaskHook||e.applyMaskHook(),a.getBufferTemplate.call(e).join(""),e.undoValue=e._valueGet(!0);const c=i.getRootNode().activeElement;if(""!==i.inputmask._valueGet(!0)||!1===t.clearMaskOnLostFocus||c===i){(0,r.applyInputValue)(i,i.inputmask._valueGet(!0));let s=a.getBuffer.call(e).slice();!1===l.isComplete.call(e,s)&&t.clearIncomplete&&a.resetMaskSet.call(e,!1),t.clearMaskOnLostFocus&&c!==i&&(-1===a.getLastValidPosition.call(e)?s=[]:r.clearOptionalTail.call(e,s)),(!1===t.clearMaskOnLostFocus||t.showMaskOnFocus&&c===i||""!==i.inputmask._valueGet(!0))&&(0,r.writeBuffer)(i,s),c===i?a.caret.call(e,i,a.seekNext.call(e,a.getLastValidPosition.call(e))):a.caret.call(e,i,0)}}};var s=i(17),n=i(18),o=i(15),r=i(16),a=i(20),l=i(21)},function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=function(e,t,i){const s=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,n=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,a=new r.default,l=[],c=[];let d,h,u,p,m,f,g=!1,v=!1;function b(e,s,n){n=void 0!==n?n:e.matches.length;let r=e.matches[n-1],l=i.casing?"i":"";if(t)0===s.indexOf("[")||g&&/\\d|\\s|\\w|\\p/i.test(s)||"."===s?(/\\p\{.*}/i.test(s)&&(l+="u"),e.matches.splice(n++,0,{fn:new RegExp(s,l),static:!1,optionality:!1,newBlockMarker:void 0===r?"master":r.def!==s,casing:null,def:s,placeholder:"object"==typeof i.placeholder?i.placeholder[a.matches.length]:void 0,nativeDef:s})):(g&&(s=s[s.length-1]),s.split("").forEach(function(t,s){r=e.matches[n-1],e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||t)?new RegExp("["+(i.staticDefinitionSymbol||t)+"]",l):null,static:!0,optionality:!1,newBlockMarker:void 0===r?"master":r.def!==t&&!0!==r.static,casing:null,def:i.staticDefinitionSymbol||t,placeholder:void 0!==i.staticDefinitionSymbol?t:"object"==typeof i.placeholder?i.placeholder[a.matches.length]:void 0,nativeDef:(g?"'":"")+t})})),g=!1;else{const t=i.definitions&&i.definitions[s]||i.usePrototypeDefinitions&&o.default.prototype.definitions[s];t&&!g?("string"==typeof t.validator&&/\\p\{.*}/i.test(t.validator)&&(l+="u"),e.matches.splice(n++,0,{fn:t.validator?"string"==typeof t.validator?new RegExp(t.validator,l):new function(){this.test=t.validator}:/./,static:t.static||!1,optionality:t.optional||!1,defOptionality:t.optional||!1,newBlockMarker:void 0===r||t.optional?"master":r.def!==(t.definitionSymbol||s),casing:t.casing,def:t.definitionSymbol||s,placeholder:t.placeholder,nativeDef:s,generated:t.generated})):(e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||s)?new RegExp("["+(i.staticDefinitionSymbol||s)+"]",l):null,static:!0,optionality:!1,newBlockMarker:void 0===r?"master":r.def!==s&&!0!==r.static,casing:null,def:i.staticDefinitionSymbol||s,placeholder:void 0!==i.staticDefinitionSymbol?s:void 0,nativeDef:(g?"'":"")+s}),g=!1)}}function _(){if(l.length>0){if(p=l[l.length-1],b(p,h),p.isAlternator){m=l.pop();for(let e=0;e<m.matches.length;e++)m.matches[e].isGroup&&(m.matches[e].isGroup=!1);l.length>0?(p=l[l.length-1],p.matches.push(m)):a.matches.push(m)}}else b(a,h)}function y(e){const t=new r.default(!0);return t.openGroup=!1,t.matches=e,t}function k(){if(u=l.pop(),u.openGroup=!1,void 0!==u)if(l.length>0){if(p=l[l.length-1],p.matches.push(u),p.isAlternator){m=l.pop();for(let e=0;e<m.matches.length;e++)m.matches[e].isGroup=!1,m.matches[e].alternatorGroup=!1;l.length>0?(p=l[l.length-1],p.matches.push(m)):a.matches.push(m)}}else a.matches.push(u);else _()}function w(e){let t=e.pop();return t.isQuantifier&&(t=y([e.pop(),t])),t}for(t&&(i.optionalmarker[0]=void 0,i.optionalmarker[1]=void 0);d=t?n.exec(e):s.exec(e);){if(h=d[0],t){switch(h.charAt(0)){case"?":h="{0,1}";break;case"+":case"*":h="{"+h+"}";break;case"|":if(0===l.length){const e=y(a.matches);e.openGroup=!0,l.push(e),a.matches=[],v=!0}}switch(h){case"\\d":h="[0-9]";break;case"\\p":h+=n.exec(e)[0],h+=n.exec(e)[0]}}if(g)_();else switch(h.charAt(0)){case"$":case"^":t||_();break;case i.escapeChar:g=!0,t&&_();break;case i.optionalmarker[1]:case i.groupmarker[1]:k();break;case i.optionalmarker[0]:l.push(new r.default(!1,!0));break;case i.groupmarker[0]:l.push(new r.default(!0));break;case i.quantifiermarker[0]:{const e=new r.default(!1,!1,!0);h=h.replace(/[{}?]/g,"");const t=h.split("|"),i=t[0].split(",");let s=isNaN(i[0])?i[0]:parseInt(i[0]);const n=1===i.length?s:isNaN(i[1])?i[1]:parseInt(i[1]),o=isNaN(t[1])?t[1]:parseInt(t[1]);"*"!==s&&"+"!==s||(s="*"===n?0:1),e.quantifier={min:s,max:n,jit:o};const c=l.length>0?l[l.length-1].matches:a.matches;d=c.pop(),d.isGroup||(d=y([d])),c.push(d),c.push(e)}break;case i.alternatormarker:if(l.length>0){p=l[l.length-1];const e=p.matches[p.matches.length-1];f=p.openGroup&&(void 0===e.matches||!1===e.isGroup&&!1===e.isAlternator)?l.pop():w(p.matches)}else f=w(a.matches);if(f.isAlternator)l.push(f);else if(f.alternatorGroup?(m=l.pop(),f.alternatorGroup=!1):m=new r.default(!1,!1,!1,!0),m.matches.push(f),l.push(m),f.openGroup){f.openGroup=!1;const e=new r.default(!0);e.alternatorGroup=!0,l.push(e)}break;default:_()}}for(v&&k();l.length>0;)u=l.pop(),a.matches.push(u);return a.matches.length>0&&(function e(s){s&&s.matches&&s.matches.forEach(function(n,o){const r=s.matches[o+1];(void 0===r||void 0===r.matches||!1===r.isQuantifier)&&n&&n.isGroup&&(n.isGroup=!1,t||(b(n,i.groupmarker[0],0),!0!==n.openGroup&&b(n,i.groupmarker[1]))),e(n)})}(a),c.push(a)),(i.numericInput||i.isRTL)&&function e(t){function s(e){return e===i.optionalmarker[0]?e=i.optionalmarker[1]:e===i.optionalmarker[1]?e=i.optionalmarker[0]:e===i.groupmarker[0]?e=i.groupmarker[1]:e===i.groupmarker[1]&&(e=i.groupmarker[0]),e}t.matches=t.matches.reverse();for(const i in t.matches)if(Object.prototype.hasOwnProperty.call(t.matches,i)){const n=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[n+1]&&t.matches[n+1].isGroup){const e=t.matches[i];t.matches.splice(i,1),t.matches.splice(n+1,0,e)}void 0!==t.matches[i].matches?t.matches[i]=e(t.matches[i]):t.matches[i]=s(t.matches[i])}return t}(c[0]),c},t.generateMaskSet=function(e,t){let i;function r(e,i,r){let a,l,c=!1;return null!==e&&""!==e||(c=null!==r.regex,c?e=(e=r.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(c=!0,e=".*")),1===e.length&&!1===r.greedy&&0!==r.repeat&&(r.placeholder=""),e=function(e,{repeat:t,groupmarker:i,quantifiermarker:s,keepStatic:o}){if(t>0||"*"===t||"+"===t){const n="*"===t?0:"+"===t?1:t;if(n!==t)e=i[0]+e+i[1]+s[0]+n+","+t+s[1];else{const t=e;for(let i=1;i<n;i++)e+=t}}if(!0===o){const t="(.)\\[([^\\]]*)\\]",i=e.match(new RegExp(t,"g"));i&&i.forEach((t,i)=>{let[s,o]=t.split("[");o=o.replace("]",""),e=e.replace(new RegExp(`${(0,n.escapeRegex)(s)}\\[${(0,n.escapeRegex)(o)}\\]`),s.charAt(0)===o.charAt(0)?`(${s}|${s}${o})`:`${s}[${o}]`)})}return e}(e,r),l=c?"regex_"+r.regex:r.numericInput?e.split("").reverse().join(""):e,null!==r.keepStatic&&(l="ks_"+r.keepStatic+l),"object"==typeof r.placeholder&&(l="ph_"+JSON.stringify(r.placeholder)+l),void 0===o.default.prototype.masksCache[l]||!0===t?(a={mask:e,maskToken:o.default.prototype.analyseMask(e,c,r),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:i,maskLength:void 0,jitOffset:{}},!0!==t&&(o.default.prototype.masksCache[l]=a,a=s.default.extend(!0,{},o.default.prototype.masksCache[l]))):a=s.default.extend(!0,{},o.default.prototype.masksCache[l]),a}if("function"==typeof e.mask&&(e.mask=e.mask(e)),Array.isArray(e.mask)){if(e.mask.length>1){null===e.keepStatic&&(e.keepStatic=!0);let t=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach(function(i){t.length>1&&(t+=e.alternatormarker),void 0!==i.mask&&"function"!=typeof i.mask?t+=i.mask:t+=i}),t+=e.groupmarker[1],r(t,e.mask,e)}e.mask=e.mask.pop()}return i=e.mask&&void 0!==e.mask.mask&&"function"!=typeof e.mask.mask?r(e.mask.mask,e.mask,e):r(e.mask,e.mask,e),null===e.keepStatic&&(e.keepStatic=!1),i};var s=a(i(10)),n=i(25),o=a(i(7)),r=a(i(26));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.escapeRegex=function(e){return e.replace(i,"\\$1")};const i=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim")},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,s){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=s||!1,this.quantifier={min:1,max:1}}},function(e,t,i){var s,n=i(25),o=(s=i(7))&&s.__esModule?s:{default:s},r=i(19),a=i(20),l=i(22);i(28);const c=o.default.dependencyLib;class d{constructor(e,t,i,s){this.mask=e,this.format=t,this.opts=i,this.inputmask=s,this._date=new Date(1,0,1),this.initDateObject(e,this.opts,this.inputmask)}get date(){return void 0===this._date&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts,this.inputmask)),this._date}initDateObject(e,t,i){let s,n=-1;for(y(t).lastIndex=0;s=y(t).exec(this.format);)if(s.index>=n){let o,r=/\d+$/.exec(s[0]),a=r?s[0][0]+"x":s[0];if(void 0!==e){if(r){const n=y(t).lastIndex,r=S.call(i,s.index,t,i&&i.maskset);y(t).lastIndex=n,o=e.slice(0,e.indexOf(r.nextMatch[0]))}else{let r=s[0][0],c=s.index;for(;i&&(t.placeholder[`${s.index}'${l.getTest.call(i,c).match.placeholder}`]||l.getTest.call(i,c).match.placeholder)===r;)c++;n=c;const d=c-s.index;o=e.slice(0,d||_(a)&&_(a)[4]||a.length)}e=e.slice(o.length)}Object.prototype.hasOwnProperty.call(m,a)&&this.setValue(this,o,a,_(a)[2],_(a)[1])}}setValue(e,t,i,s,n){if(void 0!==t)switch(s){case"ampm":e[s]=t,e["raw"+s]=t.replace(/\s/g,"_");break;case"month":if("MMM"===i||"MMMM"===i){e[s]=x("MMM"===i?p.monthNames.slice(0,12).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1:p.monthNames.slice(12,24).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2),e[s]="00"===e[s]?"":e[s].toString(),e["raw"+s]=e[s];break}default:e[s]=t.replace(/[^0-9]/g,"0"),e["raw"+s]=t.replace(/\s/g,"_")}if(void 0!==n){let t=e[s];("day"===s&&29===parseInt(t)||"month"===s&&2===parseInt(t))&&(29!==parseInt(e.day)||2!==parseInt(e.month)||""!==e.year&&void 0!==e.year||e._date.setFullYear(2012,1,29)),"day"===s&&(h=!0,0===parseInt(t)&&(t=1)),"month"===s&&(h=!0),"year"===s&&(h=!0,t.length<_(i)[4]&&(t=x(t,_(i)[4],!0))),(""!==t&&!isNaN(t)||"ampm"===s)&&n.call(e._date,t)}}reset(){this._date=new Date(1,0,1)}reInit(){this._date=void 0,this.date}}let h=!1;const u=(new Date).getFullYear(),p=o.default.prototype.i18n,m={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return x(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],M:["[1-9]|1[012]",function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return Date.prototype.getMonth.call(this)+1}],MM:["0[1-9]|1[012]",function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return x(Date.prototype.getMonth.call(this)+1,2)}],MMM:[p.monthNames.slice(0,12).join("|"),function(e){const t=p.monthNames.slice(0,12).findIndex(t=>e.toLowerCase()===t.toLowerCase());return-1!==t&&Date.prototype.setMonth.call(this,t)},"month",function(){return p.monthNames.slice(0,12)[Date.prototype.getMonth.call(this)]}],MMMM:[p.monthNames.slice(12,24).join("|"),function(e){const t=p.monthNames.slice(12,24).findIndex(t=>e.toLowerCase()===t.toLowerCase());return-1!==t&&Date.prototype.setMonth.call(this,t)},"month",function(){return p.monthNames.slice(12,24)[Date.prototype.getMonth.call(this)]}],yy:["[0-9]{2}",function(e){const t=(new Date).getFullYear().toString().slice(0,2);Date.prototype.setFullYear.call(this,`${t}${e}`)},"year",function(){return x(Date.prototype.getFullYear.call(this),2)},2],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return x(Date.prototype.getFullYear.call(this),4)},4],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return x(Date.prototype.getHours.call(this),2)}],hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,"hours",function(e){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return x(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,"hours",function(e){return function(){return x(Date.prototype.getHours.call(this),e)}}],m:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],mm:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return x(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return x(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return x(Date.prototype.getMilliseconds.call(this),3)},3],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return x(Date.prototype.getMilliseconds.call(this),2)},2],t:["[ap]",v,"ampm",b,1],tt:["[ap]m",v,"ampm",b,2],T:["[AP]",v,"ampm",b,1],TT:["[AP]M",v,"ampm",b,2],Z:[".*",void 0,"Z",function(){let{1:e}=this.toString().match(/\((.+)\)/);return e.includes(" ")&&(e=e.replace("-"," ").toUpperCase(),e=e.split(" ").map(([e])=>e).join("")),e}],o:[""],S:[""]},f={D:"d",DD:"dd",DDD:"ddd",DDDD:"dddd",mmm:"MMM",mmmm:"MMMM",YY:"yy",YYYY:"yyyy",sss:"L"},g={isoDate:"yyyy-MM-dd",isoTime:"HH:mm:ss",isoDateTime:"yyyy-MM-dd\\THH:mm:ss",isoUtcDateTime:"UTC:yyyy-MM-dd\\THH:mm:ss\\Z"};function v(e){const t=this.getHours();e.toLowerCase().includes("p")?this.setHours(t+12):e.toLowerCase().includes("a")&&t>=12&&this.setHours(t-12)}function b(){let e=this.getHours();return e=e||12,e>=12?"PM":"AM"}function _(e){const t=f[e]||e,i=/\d+$/.exec(t);if(i&&void 0!==i[0]){const e=m[t[0]+"x"].slice("");return e[0]=e[0](i[0]),e[3]=e[3](i[0]),e}if(m[t])return m[t]}function y(e){if(!e.tokenizer){const t=[],i=[],s=Object.keys(m).concat(Object.keys(f));for(const e of s)if(/\.*x$/.test(e)){const t=e[0]+"\\d+";-1===i.indexOf(t)&&i.push(t)}else-1===t.indexOf(e[0])&&t.push(e[0]);e.tokenizer="("+(i.length>0?i.join("|")+"|":"")+t.join("+|")+"+)+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function k(e,t,i){const s=this;if(!h)return!0;if(void 0===e.rawday||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||"29"==e.day&&(!isFinite(e.rawyear)||void 0===e.rawyear||""===e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if("29"==e.day){const e=S.call(s,t.pos,i,s.maskset);if(e.targetMatch&&["yyyy","YYYY"].includes(e.targetMatch[0])&&t.pos-e.targetMatchIndex===2)return t.remove=t.pos+1,t}else if(2==e.date.getMonth()&&"30"==e.day&&void 0!==t.c)return e.day="03",e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:"0"},{pos:t.pos+1,c:t.c}],t.caret=a.seekNext.call(this,t.pos+1),t;return!1}function w(e,t,i){let s,o,r="",a=0,l=!1;const c={};for(y(i).lastIndex=0;s=y(i).exec(e);)if(s[0]===i.escapeChar)l=!0;else{if(void 0===t)if(!l&&(o=_(s[0])))r+="("+o[0]+")",i.placeholder&&""!==i.placeholder?(c[a]=i.placeholder[s.index%i.placeholder.length],c[`${s.index}'${i.placeholder[s.index%i.placeholder.length]}`]=s[0].charAt(0)):c[a]=s[0].charAt(0);else switch(s[0]){case"[":r+="(";break;case"]":r+=")?";break;default:r+=(0,n.escapeRegex)(s[0]),c[a]=s[0].charAt(0)}else!l&&(o=_(s[0]))?o[3]?r+=o[3].call(t.date):o[2]&&void 0!==t["raw"+o[2]]?r+=t["raw"+o[2]]:r+=s[0]:r+=s[0];a++,l=!1}return void 0===t&&(i.placeholder=c),r}function x(e,t,i){for(e=String(e),t=t||2;e.length<t;)e=i?e+"0":"0"+e;return e}function E(e,t,i){return"string"==typeof e?new d(e,t,i,this):e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"date")?e:void 0}function C(e,t){return w(t.inputFormat,{date:e},t)}function S(e,t,i){let s,n,o=this,r=0,a=0;for(y(t).lastIndex=0;n=y(t).exec(t.inputFormat);){const c=/\d+$/.exec(n[0]);if(c)a=parseInt(c[0]);else{let e=n[0][0],i=r;for(;o&&(t.placeholder[`${n.index}'${l.getTest.call(o,i).match.placeholder}`]||l.getTest.call(o,i).match.placeholder)===e;)i++;a=i-r,0===a&&(a=n[0].length)}if(r+=a,r>=e+1){let o="";if(i&&i.tests[e]){const s=Object.keys(t.placeholder).filter(t=>{for(let s=n.index-1;s<r;s++)if(t===`${s}'${i.tests[e][0].match.placeholder}`)return!0;return!1});o=s.length>0?t.placeholder[s[0]]:i.tests[e][0].match.placeholder}if(-1!==n[0].indexOf(o)){s=n,n=y(t).exec(t.inputFormat);break}}}return{targetMatchIndex:r-a,nextMatch:n,targetMatch:s}}o.default.extendAliases({datetime:{mask:function(e){if(e.numericInput=!1,m.S=p.ordinalSuffix.join("|"),e.inputFormat=g[e.inputFormat]||e.inputFormat,e.repeat&&(e.repeat=parseInt(e.repeat.toString()),e.repeat>0)){let t="";for(let i=0;i<e.repeat;i++)t+=e.inputFormat;e.inputFormat=t,e.repeat=0}return e.displayFormat=g[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=g[e.outputFormat]||e.outputFormat||e.inputFormat,e.regex=w(e.inputFormat,void 0,e),e.min=E(e.min,e.inputFormat,e),e.max=E(e.max,e.inputFormat,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:"",preValidation:function(e,t,i,s,n,o,r,a){const l=this;if(a)return!0;if(isNaN(i)&&e[t]!==i){const s=S.call(l,t,n,o);if(s.nextMatch&&s.nextMatch[0]===i&&s.targetMatch[0].length>1){const i=_(s.targetMatch[0])[0];if(new RegExp(i).test("0"+e[t-1]))return e[t]=e[t-1],e[t-1]="0",{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,i,s,n,o,r,a){const c=this;if(r)return!0;let d,h;if(!1===s&&(d=S.call(c,t+1,n,o),d.targetMatch&&d.targetMatchIndex===t&&d.targetMatch[0].length>1&&void 0!==_(d.targetMatch[0])?h=_(d.targetMatch[0])[0]:(d=S.call(c,t+2,n,o),d.targetMatch&&d.targetMatchIndex===t+1&&d.targetMatch[0].length>1&&void 0!==_(d.targetMatch[0])&&(h=_(d.targetMatch[0]))),void 0!==h&&(t=d.targetMatchIndex,void 0!==o.validPositions[t+1]&&new RegExp(h).test(i+"0")?(e[t]=i,e[t+1]="0",s={pos:t+2,caret:t+1}):new RegExp(h).test("0"+i)&&(e[t]="0",e[t+1]=i,s={pos:t+2})),!1===s))return s;if(s.fuzzy&&(e=s.buffer,t=s.pos),d=S.call(c,t,n,o),d.targetMatch&&d.targetMatch[0]&&void 0!==_(d.targetMatch[0])){const i=_(d.targetMatch[0]);h=i[0];const s=e.slice(d.targetMatchIndex,d.targetMatchIndex+d.targetMatch[0].length);if(!1===new RegExp(h).test(s.join(""))&&2===d.targetMatch[0].length&&o.validPositions[d.targetMatchIndex]&&o.validPositions[d.targetMatchIndex+1]&&(o.validPositions[d.targetMatchIndex+1].input="0"),"year"==i[2]){const i=l.getMaskTemplate.call(c,!1,1,void 0,!0);for(let s=t+1;s<e.length;s++)e[s]=i[s],o.validPositions.splice(t+1,1)}}let p=s,m=E.call(c,e.join(""),n.inputFormat,n);return p&&!isNaN(m.date.getTime())&&(n.prefillYear&&(p=function(e,t,i){if(e.year!==e.rawyear){const s=u.toString(),n=e.rawyear.replace(/[^0-9]/g,""),o=s.slice(0,n.length),r=s.slice(n.length);if(2===n.length&&n===o){const n=new Date(u,e.month-1,e.day);e.day==n.getDate()&&(!i.max||i.max.date.getTime()>=n.getTime())&&(e.date.setFullYear(u),e.year=s,t.insert=[{pos:t.pos+1,c:r[0]},{pos:t.pos+2,c:r[1]}])}}return t}(m,p,n)),p=k.call(c,m,p,n),p=function(e,t,i,s){if(!t)return t;if(t&&i.min&&!isNaN(i.min.date.getTime())){let o;for(e.reset(),y(i).lastIndex=0;o=y(i).exec(i.inputFormat);){var n;if((n=_(o[0]))&&n[3]){let t=n[1],r=e[n[2]],a=i.min[n[2]],l=i.max?i.max[n[2]]:a+1,c=[],d=!1;for(let t=0;t<a.length;t++)void 0!==s.validPositions[t+o.index]||d?(c[t]=r[t],d=d||r[t]>a[t]):(t+o.index==0&&r[t]<a[t]?(c[t]=r[t],d=!0):c[t]=a[t],"year"===n[2]&&r.length-1==t&&a!=l&&(c=(parseInt(c.join(""))+1).toString().split("")),"ampm"===n[2]&&a!=l&&i.min.date.getTime()>e.date.getTime()&&(c[t]=l[t]));t.call(e._date,c.join(""))}}t=i.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&i.max&&(isNaN(i.max.date.getTime())||(t=i.max.date.getTime()>=e.date.getTime())),t}(m,p,n,o)),void 0!==t&&p&&s.pos!==t?{buffer:w(n.inputFormat,m,n).split(""),refreshFromBuffer:{start:t,end:s.pos},pos:void 0!==s.caret?s.caret:s.pos}:p},onKeyDown:function(e,t,i,s){e.ctrlKey&&e.key===r.keys.ArrowRight&&(this.inputmask._valueSet(C(new Date,s)),c(this).trigger("setvalue"))},onUnMask:function(e,t,i){return t?w(i.outputFormat,E.call(this,e,i.inputFormat,i),i):t},casing:"follow",onBeforeMask:function(e,t){return"[object Date]"===Object.prototype.toString.call(e)&&(e=C(e,t)),e},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric",prefillYear:!0}})},function(e,t,i){var s,n=(s=i(7))&&s.__esModule?s:{default:s};n.default.dependencyLib.extend(!0,n.default.prototype.i18n,{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]})},function(e,t,i){var s,n=i(25),o=(s=i(7))&&s.__esModule?s:{default:s},r=i(19),a=i(20);const l=o.default.dependencyLib;function c(e,t){let i="";for(let s=0;s<e.length;s++)o.default.prototype.definitions[e.charAt(s)]||t.definitions[e.charAt(s)]||t.optionalmarker[0]===e.charAt(s)||t.optionalmarker[1]===e.charAt(s)||t.quantifiermarker[0]===e.charAt(s)||t.quantifiermarker[1]===e.charAt(s)||t.groupmarker[0]===e.charAt(s)||t.groupmarker[1]===e.charAt(s)||t.alternatormarker===e.charAt(s)?i+="\\"+e.charAt(s):i+=e.charAt(s);return i}function d(e,t,i,s){if(e.length>0&&t>0&&(!i.digitsOptional||s)){var n=e.indexOf(i.radixPoint),o=!1;i.negationSymbol.back===e[e.length-1]&&(o=!0,e.length--),-1===n&&(e.push(i.radixPoint),n=e.length-1);for(let i=1;i<=t;i++)isFinite(e[n+i])||(e[n+i]="0")}return o&&e.push(i.negationSymbol.back),e}function h(e,t){let i=0;"+"===e&&(i=a.seekNext.call(this,t.validPositions.length-1));for(let s in t.tests)if(s=parseInt(s),s>=i)for(let i=0,n=t.tests[s].length;i<n;i++)if((void 0===t.validPositions[s]||"-"===e)&&t.tests[s][i].match.def===e)return s+(void 0!==t.validPositions[s]&&"-"!==e?1:0);return i}function u(e,t){let i=-1;for(let s=0,n=t.validPositions.length;s<n;s++){const n=t.validPositions[s];if(n&&n.match.def===e){i=s;break}}return i}function p(e,t,i,s,n){const o=t.buffer?t.buffer.indexOf(n.radixPoint):-1,r=(-1!==o||s&&n.jitMasking)&&new RegExp(n.definitions[9].validator).test(e);return!s&&n._radixDance&&-1!==o&&r&&null==t.validPositions[o]?{insert:{pos:o===i?o+1:o,c:n.radixPoint},pos:i}:r}o.default.extendAliases({numeric:{mask:function(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&(e.positionCaretOnClick="lvp");let t="0",i=e.radixPoint;!0===e.numericInput&&void 0===e.__financeInput?(t="1",e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=-1!==e.digits.indexOf(",")?e.digits.split(",")[0]:2),e._radixDance=!1,i=","===e.radixPoint?"?":"!",""!==e.radixPoint&&void 0===e.definitions[i]&&(e.definitions[i]={},e.definitions[i].validator="["+e.radixPoint+"]",e.definitions[i].placeholder=e.radixPoint,e.definitions[i].static=!0,e.definitions[i].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);let s,o="[+]";if(o+=c(e.prefix,e),""!==e.groupSeparator?(void 0===e.definitions[e.groupSeparator]&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator="["+e.groupSeparator+"]",e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),o+=e._mask(e)):o+="9{+}",void 0!==e.digits&&0!==e.digits){const n=e.digits.toString().split(",");isFinite(n[0])&&n[1]&&isFinite(n[1])?o+=i+t+"{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(s=o+i+t+"{0,"+e.digits+"}",e.keepStatic=!0):o+=i+t+"{"+e.digits+"}")}else e.inputmode="numeric";return o+=c(e.suffix,e),o+="[-]",s&&(o=[s+c(e.suffix,e)+"[-]",o]),e.greedy=!1,function(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp((0,n.escapeRegex)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp((0,n.escapeRegex)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(e),""!==e.radixPoint&&e.substituteRadixPoint&&(e.substitutes["."==e.radixPoint?",":"."]=e.radixPoint),o},_mask:function(e){return"("+e.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"decimal",shortcuts:{k:"1000",m:"1000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:p},1:{validator:p,definitionSymbol:"9"},9:{validator:"[0-9０-９٠-٩۰-۹]",definitionSymbol:"*"},"+":{validator:function(e,t,i,s,n){return n.allowMinus&&("-"===e||e===n.negationSymbol.front)}},"-":{validator:function(e,t,i,s,n){return n.allowMinus&&e===n.negationSymbol.back}}},preValidation:function(e,t,i,s,n,o,r,a){const l=this;if(!1!==n.__financeInput&&i===n.radixPoint)return!1;const c=e.indexOf(n.radixPoint),d=t;if(t=function(e,t,i,s,n){return n._radixDance&&n.numericInput&&t!==n.negationSymbol.back&&e<=i&&(i>0||t==n.radixPoint)&&(void 0===s.validPositions[e-1]||s.validPositions[e-1].input!==n.negationSymbol.back)&&(e-=1),e}(t,i,c,o,n),"-"===i||i===n.negationSymbol.front){if(!0!==n.allowMinus)return!1;let e=!1,t=u("+",o),i=u("-",o);return-1!==t&&(e=[t],-1!==i&&e.push(i)),!1!==e?{remove:e,caret:d-n.negationSymbol.back.length}:{insert:[{pos:h.call(l,"+",o),c:n.negationSymbol.front,fromIsValid:!0},{pos:h.call(l,"-",o),c:n.negationSymbol.back,fromIsValid:void 0}],caret:d+n.negationSymbol.back.length}}if(i===n.groupSeparator)return{caret:d};if(a)return!0;if(-1!==c&&!0===n._radixDance&&!1===s&&i===n.radixPoint&&void 0!==n.digits&&(isNaN(n.digits)||parseInt(n.digits)>0)&&c!==t){const e=h.call(l,n.radixPoint,o);return o.validPositions[e]&&(o.validPositions[e].generatedInput=o.validPositions[e].generated||!1),{caret:n._radixDance&&t===c-1?c+1:c}}if(!1===n.__financeInput)if(s){if(n.digitsOptional)return{rewritePosition:r.end};if(!n.digitsOptional){if(r.begin>c&&r.end<=c)return i===n.radixPoint?{insert:{pos:c+1,c:"0",fromIsValid:!0},rewritePosition:c}:{rewritePosition:c+1};if(r.begin<c)return{rewritePosition:r.begin-1}}}else{if(!n.showMaskOnHover&&!n.showMaskOnFocus&&!n.digitsOptional&&n.digits>0&&""===this.__valueGet.call(this.el))return{rewritePosition:c};if(t>=e.length-n.prefix.length&&""!==n.radixPoint){const e=new RegExp(n.definitions[9].validator);if(!o.validPositions.some(t=>t&&!t.generatedInput&&e.test(t.input)))return{rewritePosition:-1!==c?c:0}}}return{rewritePosition:t}},postValidation:function(e,t,i,s,n,o,r,a,c){if(!1===s)return s;if(r)return!0;if(null!==n.min||null!==n.max){const t=n.onUnMask(e.slice().reverse().join(""),void 0,l.extend({},n,{unmaskAsNumber:!0}));if(null!==n.min&&t<n.min&&!0!==c&&(t.toString().length>n.min.toString().length||e[0]===n.radixPoint||t<0))return!1;if(null!==n.max&&n.max>=0&&t>n.max)return!!n.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:d(n.max.toString().replace(".",n.radixPoint).split(""),n.digits,n).reverse()}}return s},onUnMask:function(e,t,i){if(""===t&&!0===i.nullable)return t;let s=e.replace(i.prefix,"");return s=s.replace(i.suffix,""),s=s.replace(new RegExp((0,n.escapeRegex)(i.groupSeparator),"g"),""),""!==i.placeholder.charAt(0)&&(s=s.replace(new RegExp(i.placeholder.charAt(0),"g"),"0")),i.unmaskAsNumber?(""!==i.radixPoint&&-1!==s.indexOf(i.radixPoint)&&(s=s.replace(n.escapeRegex.call(this,i.radixPoint),".")),s=s.replace(new RegExp("^"+(0,n.escapeRegex)(i.negationSymbol.front)),"-"),s=s.replace(new RegExp((0,n.escapeRegex)(i.negationSymbol.back)+"$"),""),Number(s)):s},isComplete:function(e,t){let i=(t.numericInput?e.slice().reverse():e).join("");return i=i.replace(new RegExp("^"+(0,n.escapeRegex)(t.negationSymbol.front)),"-"),i=i.replace(new RegExp((0,n.escapeRegex)(t.negationSymbol.back)+"$"),""),i=i.replace(t.prefix,""),i=i.replace(t.suffix,""),i=i.replace(new RegExp((0,n.escapeRegex)(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(i=i.replace((0,n.escapeRegex)(t.radixPoint),".")),isFinite(i)},onBeforeMask:function(e,t){e=e??"";const i=t.radixPoint||",";isFinite(t.digits)&&(t.digits=parseInt(t.digits)),"number"!=typeof e&&"number"!==t.inputType||""===i||(e=e.toString().replace(".",i));const s="-"===e.charAt(0)||e.charAt(0)===t.negationSymbol.front,o=e.split(i),r=o[0].replace(/[^\-0-9]/g,""),a=o.length>1?o[1].replace(/[^0-9]/g,""):"",l=o.length>1;e=r+(""!==a?i+a:a);let c=0;if(""!==i&&(c=t.digitsOptional?t.digits<a.length?t.digits:a.length:t.digits,""!==a||!t.digitsOptional)){const s=Math.pow(10,c||1);e=e.replace((0,n.escapeRegex)(i),"."),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*s)/s).toFixed(c)),e=e.toString().replace(".",i)}if(0===t.digits&&-1!==e.indexOf(i)&&(e=e.substring(0,e.indexOf(i))),""!==e&&(null!==t.min||null!==t.max)){const s=e.toString().replace(i,".");null!==t.min&&s<t.min?e=t.min.toString().replace(".",i):null!==t.max&&s>t.max&&(e=t.max.toString().replace(".",i))}return s&&"-"!==e.charAt(0)&&(e="-"+e),d(e.toString().split(""),c,t,l).join("")},onBeforeWrite:function(e,t,i,s){function o(e,t){if(!1!==s.__financeInput||t){var i=e.indexOf(s.radixPoint);-1!==i&&e.splice(i,1)}if(""!==s.groupSeparator)for(;-1!==(i=e.indexOf(s.groupSeparator));)e.splice(i,1);return e}let r,a;if(s.stripLeadingZeroes&&(a=function(e,t){let i=new RegExp("(^"+(""!==t.negationSymbol.front?(0,n.escapeRegex)(t.negationSymbol.front)+"?":"")+(0,n.escapeRegex)(t.prefix)+")(.*)("+(0,n.escapeRegex)(t.suffix)+(""!=t.negationSymbol.back?(0,n.escapeRegex)(t.negationSymbol.back)+"?":"")+"$)").exec(e.slice().reverse().join("")),s=i?i[2]:"",o=!1;return s&&(s=s.split(t.radixPoint.charAt(0))[0],o=new RegExp("^[0"+t.groupSeparator+"]*").exec(s)),!(!o||!(o[0].length>1||o[0].length>0&&o[0].length<s.length))&&o}(t,s))){const e=t.join("").lastIndexOf(a[0].split("").reverse().join(""))-(a[0]==a.input?0:1),i=a[0]==a.input?1:0;for(let s=a[0].length-i;s>0;s--)this.maskset.validPositions.splice(e+s,1),delete t[e+s]}if(e)switch(e.type){case"blur":case"checkval":if(null!==s.min||null!==s.max){const e=s.onUnMask(t.slice().reverse().join(""),void 0,l.extend({},s,{unmaskAsNumber:!0}));if(null!==s.min&&e<s.min&&""!==t.join())return{refreshFromBuffer:!0,buffer:d(s.min.toString().replace(".",s.radixPoint).split(""),s.digits,s).reverse()};if(null!==s.max&&e>s.max)return{refreshFromBuffer:!0,buffer:d(s.max.toString().replace(".",s.radixPoint).split(""),s.digits,s).reverse()}}if(t[t.length-1]===s.negationSymbol.front){const e=new RegExp("(^"+(""!=s.negationSymbol.front?(0,n.escapeRegex)(s.negationSymbol.front)+"?":"")+(0,n.escapeRegex)(s.prefix)+")(.*)("+(0,n.escapeRegex)(s.suffix)+(""!=s.negationSymbol.back?(0,n.escapeRegex)(s.negationSymbol.back)+"?":"")+"$)").exec(o(t.slice(),!0).reverse().join(""));0==(e?e[2]:"")&&(r={refreshFromBuffer:!0,buffer:[0]})}else""!==s.radixPoint&&t.indexOf(s.radixPoint)===s.suffix.length&&(r&&r.buffer?r.buffer.splice(0,1+s.suffix.length):(t.splice(0,1+s.suffix.length),r={refreshFromBuffer:!0,buffer:o(t)}));if(s.enforceDigitsOnBlur){r=r||{};const e=(r&&r.buffer||t).slice().reverse();r.refreshFromBuffer=!0,r.buffer=d(e,s.digits,s,!0).reverse()}}return r},onKeyDown:function(e,t,i,s){let n,o=l(this);if(3!=e.location){let t,i=e.key;if((t=s.shortcuts&&s.shortcuts[i])&&t.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(t)),o.trigger("setvalue"),!1}if(e.ctrlKey)switch(e.key){case r.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(s.step)),o.trigger("setvalue"),!1;case r.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(s.step)),o.trigger("setvalue"),!1}if(!e.shiftKey&&(e.key===r.keys.Delete||e.key===r.keys.Backspace||e.key===r.keys.BACKSPACE_SAFARI)&&i.begin!==t.length){if(t[e.key===r.keys.Delete?i.begin-1:i.end]===s.negationSymbol.front)return n=t.slice().reverse(),""!==s.negationSymbol.front&&n.shift(),""!==s.negationSymbol.back&&n.pop(),o.trigger("setvalue",[n.join(""),i.begin]),!1;if(!0===s._radixDance){const a=t.indexOf(s.radixPoint);if(s.digitsOptional){if(0===a)return n=t.slice().reverse(),n.pop(),o.trigger("setvalue",[n.join(""),i.begin>=n.length?n.length:i.begin]),!1}else if(-1!==a&&(i.begin<a||i.end<a||e.key===r.keys.Delete&&(i.begin===a||i.begin-1===a))){let c;return i.begin===i.end&&(e.key===r.keys.Backspace||e.key===r.keys.BACKSPACE_SAFARI?i.begin++:e.key===r.keys.Delete&&i.begin-1===a&&(c=l.extend({},i),i.begin--,i.end--)),n=t.slice().reverse(),n.splice(n.length-i.begin,i.begin-i.end||1),e.key!==r.keys.Backspace&&e.key!==r.keys.BACKSPACE_SAFARI||n.splice(n.length-i.end+1,0,"0"),n=d(n,s.digits,s).join(""),c&&(i=c),o.trigger("setvalue",[n,i.begin>=n.length?a+1:i.begin]),!1}}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",inputmode:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function(e){return"("+e.groupSeparator+"99){*|1}("+e.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},function(e,t,i){var s=o(i(11)),n=o(i(7));function o(e){return e&&e.__esModule?e:{default:e}}const r=s.default.document;if(r&&r.head&&r.head.attachShadow&&s.default.customElements&&void 0===s.default.customElements.get("input-mask")){class e extends HTMLElement{constructor(){super();const e=this.getAttributeNames(),t=this.attachShadow({mode:"closed"});this.input=r.createElement("input"),this.input.type="text",t.appendChild(this.input);for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.input.setAttribute(e[t],this.getAttribute(e[t]));const i=new n.default;i.dataAttribute="",i.mask(this.input)}attributeChangedCallback(e,t,i){this.input.setAttribute(e,i)}get value(){return this.input.value}set value(e){this.input.value=e}}s.default.customElements.define("input-mask",e)}}],t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}var s={};return function(){var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i(1),i(2),i(3),i(4),i(5),i(6),i(27),i(29),i(30);var t,n=(t=i(7))&&t.__esModule?t:{default:t};e.default=n.default}(),s}()},e.exports=t()}},i={};function s(e){var n=i[e];if(void 0!==n)return n.exports;var o=i[e]={exports:{}};return t[e].call(o.exports,o,o.exports,s),o.exports}s.m=t,s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce(function(t,i){return s.f[i](e,t),t},[]))},s.u=function(e){return e+".js"},s.miniCssF=function(e){},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},s.l=function(t,i,n,o){if(e[t])e[t].push(i);else{var r,a;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t){r=d;break}}r||(a=!0,(r=document.createElement("script")).charset="utf-8",s.nc&&r.setAttribute("nonce",s.nc),r.src=t),e[t]=[i];var h=function(i,s){r.onerror=r.onload=null,clearTimeout(u);var n=e[t];if(delete e[t],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach(function(e){return e(s)}),i)return i(s)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),a&&document.head.appendChild(r)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}(),function(){var e={9996:0};s.f.j=function(t,i){var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise(function(i,s){n=e[t]=[i,s]});i.push(n[2]=o);var r=s.p+s.u(t),a=new Error;s.l(r,function(i){if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",a.name="ChunkLoadError",a.type=o,a.request=r,n[1](a)}},"chunk-"+t,t)}};var t=function(t,i){var n,o,r=i[0],a=i[1],l=i[2],c=0;if(r.some(function(t){return 0!==e[t]})){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);l&&l(s)}for(t&&t(i);c<r.length;c++)o=r[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}(),function(){"use strict";const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class o{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new o(s,e,i)},a=(i,s)=>{if(t)i.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,f=globalThis,g=f.trustedTypes,v=g?g.emptyScript:"",b=f.reactiveElementPolyfillSupport,_=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},k=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&d(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const o=s?.call(this);n?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=s;const o=n.fromAttribute(t,e.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const s=this.constructor,n=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??k)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,b?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.1");const E=globalThis,C=E.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+N,O=`<${T}>`,L=document,M=()=>L.createComment(""),$=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,F=e=>I(e)||"function"==typeof e?.[Symbol.iterator],P="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,R=/>/g,B=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,j=/"/g,U=/^(?:script|style|textarea|title)$/i,q=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),H=q(1),W=q(2),G=q(3),K=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Z=new WeakMap,J=L.createTreeWalker(L,129);function Q(e,t){if(!I(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const X=(e,t)=>{const i=e.length-1,s=[];let n,o=2===t?"<svg>":3===t?"<math>":"",r=D;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===D?"!--"===l[1]?r=V:void 0!==l[1]?r=R:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=B):void 0!==l[3]&&(r=B):r===B?">"===l[0]?(r=n??D,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?B:'"'===l[3]?j:z):r===j||r===z?r=B:r===V||r===R?r=D:(r=B,n=void 0);const h=r===B&&e[t+1].startsWith("/>")?" ":"";o+=r===D?i+O:c>=0?(s.push(a),i.slice(0,c)+A+i.slice(c)+N+h):i+N+(-2===c?t:h)}return[Q(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class ee{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const r=e.length-1,a=this.parts,[l,c]=X(e,t);if(this.el=ee.createElement(l,i),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=J.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(A)){const t=c[o++],i=s.getAttribute(e).split(N),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?oe:"?"===r[1]?re:"@"===r[1]?ae:ne}),s.removeAttribute(e)}else e.startsWith(N)&&(a.push({type:6,index:n}),s.removeAttribute(e));if(U.test(s.tagName)){const e=s.textContent.split(N),t=e.length-1;if(t>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],M()),J.nextNode(),a.push({type:2,index:++n});s.append(e[t],M())}}}else if(8===s.nodeType)if(s.data===T)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(N,e+1));)a.push({type:7,index:n}),e+=N.length-1}n++}}static createElement(e,t){const i=L.createElement("template");return i.innerHTML=e,i}}function te(e,t,i=e,s){if(t===K)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=$(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=te(e,n._$AS(e,t.values),n,s)),t}class ie{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??L).importNode(t,!0);J.currentNode=s;let n=J.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new se(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new le(n,this,e)),this._$AV.push(t),a=i[++r]}o!==a?.index&&(n=J.nextNode(),o++)}return J.currentNode=L,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),$(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):F(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&$(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ee.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new ie(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new ee(e)),t}k(e){I(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new se(this.O(M()),this.O(M()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ne{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(void 0===n)e=te(this,e,t,0),o=!$(e)||e!==this._$AH&&e!==K,o&&(this._$AH=e);else{const s=e;let r,a;for(e=n[0],r=0;r<n.length-1;r++)a=te(this,s[i+r],t,r),a===K&&(a=this._$AH[r]),o||=!$(a)||a!==this._$AH[r],a===Y?e=Y:e!==Y&&(e+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class re extends ne{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class ae extends ne{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=te(this,e,t,0)??Y)===K)return;const i=this._$AH,s=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Y&&(i===Y||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class le{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}}const ce={M:A,P:N,A:T,C:1,L:X,R:ie,D:F,V:te,I:se,H:ne,N:re,U:ae,B:oe,F:le},de=E.litHtmlPolyfillSupport;de?.(ee,se),(E.litHtmlVersions??=[]).push("3.3.1");const he=(e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new se(t.insertBefore(M(),e),e,void 0,i??{})}return n._$AI(e),n},ue=globalThis;class pe extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=he(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}pe._$litElement$=!0,pe.finalized=!0,ue.litElementHydrateSupport?.({LitElement:pe});const me=ue.litElementPolyfillSupport;me?.({LitElement:pe}),(ue.litElementVersions??=[]).push("4.2.1");var fe=r`
  :host([variant~='accent']) {
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

  :host([variant='neutral']) {
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

  :host([variant~='accent']) {
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

  :host([variant~='info']) {
    --c-color-fill-loud: var(--c-color-info-fill-loud);
    --c-color-fill-normal: var(--c-color-info-fill-normal);
    --c-color-fill-quiet: var(--c-color-info-fill-quiet);
    --c-color-border-loud: var(--c-color-info-border-loud);
    --c-color-border-normal: var(--c-color-info-border-normal);
    --c-color-border-quiet: var(--c-color-info-border-quiet);
    --c-color-on-loud: var(--c-color-info-on-loud);
    --c-color-on-normal: var(--c-color-info-on-normal);
    --c-color-on-quiet: var(--c-color-info-on-quiet);
  }

  :host([variant~='warning']) {
    --c-color-fill-loud: var(--c-color-warning-fill-loud);
    --c-color-fill-normal: var(--c-color-warning-fill-normal);
    --c-color-fill-quiet: var(--c-color-warning-fill-quiet);
    --c-color-border-loud: var(--c-color-warning-border-loud);
    --c-color-border-normal: var(--c-color-warning-border-normal);
    --c-color-border-quiet: var(--c-color-warning-border-quiet);
    --c-color-on-loud: var(--c-color-warning-on-loud);
    --c-color-on-normal: var(--c-color-warning-on-normal);
    --c-color-on-quiet: var(--c-color-warning-on-quiet);
  }

  :host([variant~='success']) {
    --c-color-fill-loud: var(--c-color-success-fill-loud);
    --c-color-fill-normal: var(--c-color-success-fill-normal);
    --c-color-fill-quiet: var(--c-color-success-fill-quiet);
    --c-color-border-loud: var(--c-color-success-border-loud);
    --c-color-border-normal: var(--c-color-success-border-normal);
    --c-color-border-quiet: var(--c-color-success-border-quiet);
    --c-color-on-loud: var(--c-color-success-on-loud);
    --c-color-on-normal: var(--c-color-success-on-normal);
    --c-color-on-quiet: var(--c-color-success-on-quiet);
  }
`;function ge(e,t,i,s){var n,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}const ve={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:k},be=(e=ve,t,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e)}}throw Error("Unsupported decorator location: "+s)};function _e(e){return(t,i)=>"object"==typeof i?be(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ye(e){return _e({...e,state:!0,attribute:!1})}const ke=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function we(e,t){return(i,s,n)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ke(i,s,{get(){let i=e.call(this);return void 0===i&&(i=o(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return ke(i,s,{get(){return o(this)}})}}function xe(e){return(t,i)=>{const{slot:s,selector:n}=e??{},o="slot"+(s?`[name=${s}]`:":not([name])");return ke(t,i,{get(){const t=this.renderRoot?.querySelector(o),i=t?.assignedElements(e)??[];return void 0===n?i:i.filter(e=>e.matches(n))}})}}var Ee=class extends pe{constructor(){super(),this.alt=!1,this.shift=!1,this.os="Unknown",this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),"Unknown"===this.os&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes("mac")||/iphone|ipad|ipod/.test(e)?"Mac":e.includes("win")?"Windows":e.includes("linux")?"Linux":"Unknown"}renderShortcutPrefix(){switch(this.os){case"Mac":return`${this.alt?"⌥":""}${this.shift?"⇧":""}⌘`;case"Linux":return`Super+${this.alt?"Alt+":""}${this.shift?"Shift+":""}`;default:return`Ctrl+${this.alt?"Alt+":""}${this.shift?"Shift+":""}`}}render(){return H`<span class="shortcut"
      >${this.renderShortcutPrefix()}<slot></slot
    ></span>`}};function Ce(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function Se(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i;throw TypeError("Private element is not present on this object")}function Ae(e,t){Ce(e,t),t.add(e)}function Ne(e,t,i){Ce(e,t),t.set(e,i)}function Te(e,t){return e.get(Se(e,t))}function Oe(e,t,i){return e.set(Se(e,t),i),i}Ee.styles=r`
    :host {
      display: inline-flex;
    }

    .shortcut {
      font-size: 0.9em;
      padding: 0 var(--c-spacing-sm);
      background-color: var(--c-color-neutral-fill-quiet);
      border: 1px solid var(--c-color-neutral-border-quiet);
      border-radius: var(--c-radius-sm);
      box-shadow: var(--c-shadow-sm);
    }
  `,ge([_e({type:Boolean})],Ee.prototype,"alt",void 0),ge([_e({type:Boolean})],Ee.prototype,"shift",void 0),ge([_e()],Ee.prototype,"os",void 0),customElements.get("craft-shortcut")||customElements.define("craft-shortcut",Ee);var Le=new WeakMap,Me=new WeakSet,$e=class e{constructor(){Ae(this,Me),Ne(this,Le,new Map)}static getInstance(){return Pe._||(Pe._=new e),Pe._}static resetInstance(){Pe._&&(Pe._=null)}initialize(e={}){Oe(Le,this,new Map(Object.entries(e)))}getCpUrl(e){return Se(Me,this,Ie).call(this,Se(Me,this,Fe).call(this,"baseCpUrl"),e)}getActionUrl(e){return Se(Me,this,Ie).call(this,Se(Me,this,Fe).call(this,"actionUrl"),e)}all(){return Te(Le,this)}set(e,t){Te(Le,this).set(e,t)}get(e,t=null){return Te(Le,this).has(e)?Te(Le,this).get(e):t}};function Ie(e,t){let i=new URL(e),s=t.startsWith("/")?t.slice(1):t;return i.pathname=`${i.pathname}/${s}`,i.toString()}function Fe(e){let t=Te(Le,this).get(e);if(!t)throw Error(`ConfigService: "${e}" is not configured. The page bootstrap must call ConfigService.initialize() with the CP config payload before URL helpers can be used.`);return t}var Pe={_:null},De=axios;function Ve(e=""){return $e.getInstance().getActionUrl(e)}const Re=De.create(),Be=new class{constructor(){this.refreshPromise=null,this.tokenName=null,this.tokenValue=null,this.refreshPromise=null}async getToken(){return this.tokenValue||await this.refreshToken(),this.tokenValue}async refreshToken(){return this.refreshPromise||(this.refreshPromise=Re.get("users/session-info").then(({data:e})=>{let{csrfTokenName:t,csrfTokenValue:i}=e;return this.tokenName=t??null,this.tokenValue=i??null,this.tokenValue}).finally(()=>{this.refreshPromise=null})),this.refreshPromise}clearToken(){this.tokenValue=null}};function ze(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch{return null}}async function je(e,t={}){switch(e.type){case"clipboard":await navigator.clipboard.writeText(e.value);break;case"http":{if(e.confirm&&!confirm(e.confirm))return;let t=await fetch(e.url,{method:e.method||"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:e.body?JSON.stringify(e.body):void 0}),i=await t.json().catch(()=>({}));if(!t.ok)throw Error(i.message??"Request failed");"string"==typeof i.redirect&&i.redirect&&function(e){window.dispatchEvent(new CustomEvent("action:redirect",{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}(i.redirect);break}case"event":if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:{...e.detail??{},...t.trigger?{trigger:t.trigger}:{},...t.sourceEvent?{sourceEvent:t.sourceEvent}:{}}}));break;case"download":{if(e.confirm&&!confirm(e.confirm))return;if(e.method&&"GET"!==e.method){let t=await Re.request({url:e.url,method:e.method,data:e.body,responseType:"blob"}),i=String(t.headers["content-disposition"]??""),s=/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(i),n=e.filename??(s?.[1]?decodeURIComponent(s[1]):"download"),o=URL.createObjectURL(t.data),r=document.createElement("a");r.href=o,r.download=n,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(o);break}let t=document.createElement("a");t.href=e.url,t.download=e.filename??"",t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}Re.interceptors.request.use(async e=>{!e.url||e.url.startsWith("/")||/^[a-z][a-z\d+.-]*:/i.test(e.url)?e.url?.startsWith("/")&&(e.baseURL=new URL(Ve()).origin):e.url=Ve(e.url),e.headers.set("X-Requested-With","XMLHttpRequest");let t=function(){let e=window.Craft,t=e?.registeredAssetBundles??Cp.registeredAssetBundles,i=e?.registeredJsFiles??Cp.registeredJsFiles;return{"X-Registered-Asset-Bundles":[...new Set(t)].join(","),"X-Registered-Js-Files":[...new Set(i)].join(",")}}();return Object.entries(t).forEach(([t,i])=>{e.headers.set(t,i)}),e}),Re.interceptors.response.use(e=>e,async e=>{let t=e.config;if(419===e.response?.status||403===e.response?.status&&!t._retry){t._retry=!0;try{return Be.clearToken(),t.headers["X-CSRF-Token"]=await Be.refreshToken(),De(t)}catch(e){return console.error("Failed to refresh CSRF token:",e),Promise.reject(e)}}return Promise.reject(e)});const Ue={Neutral:"neutral",Success:"success",Warning:"warning",Danger:"danger",Info:"info"},qe=Object.values(Ue),He=e=>(...t)=>({_$litDirective$:e,values:t});class We{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Ge=He(class extends We{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const s=!!t[e];s===this.st.has(e)||this.nt?.has(e)||(s?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return K}}),Ke="idle",Ye="loading",Ze="success",Je="error";var Qe=r`
  :host {
    display: contents;
  }

  :host([hidden]) {
    display: none;
  }

  .action-item {
    border-color: var(--c-color-border-quiet, transparent);
    color: var(--c-color-on-quiet, inherit);
    background-color: transparent;

    font: inherit;
    text-align: left;
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    padding-inline: var(--c-spacing-sm);
    padding-block: var(--c-spacing-sm);
    border-radius: var(--c-radius-md);
    position: relative;
    border-width: 0;
    border-style: solid;
  }

  @media (hover: hover) {
    :host(:hover) .action-item:not(:disabled) {
      background-color: var(
        --c-color-fill-quiet,
        var(--c-color-neutral-fill-quiet)
      );
      color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    }
  }

  :host([active]) .action-item {
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
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
    :host(:hover[variant='danger']) .action-item:not(:disabled) {
      background-color: var(--c-color-fill-quiet);
      color: var(--c-color-on-quiet);
    }
  }
`,Xe=class extends pe{constructor(...e){super(...e),this.icon=null,this.iconColor=null,this.href=null,this.disabled=!1,this.variant=Ue.Neutral,this.checked=!1,this.active=!1,this.type="button",this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.confirm=null,this.state=Ke,this.feedbackMessage=null,this.shortcut=null}renderShortcut(){return"string"==typeof this.shortcut?H`<craft-shortcut>${this.shortcut}</craft-shortcut>`:null===this.shortcut?Y:H`<craft-shortcut
        ?alt="${this.shortcut.alt??!1}"
        ?shift="${this.shortcut.shift??!1}"
        >${this.shortcut.key}</craft-shortcut
      >`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent("action:change-state",{bubbles:!0,composed:!0,detail:{state:e,actionType:ze(this.action)?.type,...t}}))}async handleEvent(e){if(this.disabled)return void e.preventDefault();let t=ze(this.action);if("click"===e.type&&t){"http"===t.type&&this.setState(Ye);try{await je(t,{trigger:this,sourceEvent:e}),this.setState(Ze,this.feedback?.success)}catch(e){this.setState(Je,{message:e.message,...this.feedback?.error||{}})}finally{setTimeout(()=>{this.setState(Ke)},this.feedbackDuration)}}}renderCheckbox(){return H`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?H`<craft-icon name="check"></craft-icon>`:Y}
      </slot>
    </span>`}renderIcon(){switch(this.state){case Ye:return H`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case Ze:return H`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case Je:return H`<craft-icon
          name="xmark"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return H`
          <slot name="icon">
            ${this.icon?H`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: var(--c-color-${this.iconColor}-on-normal, currentColor)`:Y}"
                ></craft-icon>`:Y}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector('[slot="icon"]')||!!this.icon;return H`
      ${"checkbox"===this.type?this.renderCheckbox():Y}
      ${e?H`<div class="action-item__icon">${this.renderIcon()}</div>`:Y}
    `}renderBody(){return H`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:H`<slot></slot>`}
      </span>

      <span class="action-item__suffix">
        <slot name="suffix"></slot>
        ${this.shortcut?this.renderShortcut():Y}
      </span>
    `}render(){return this.href?H`
          <a
            class="${Ge({"action-item":!0,"action-item--checkbox":"checkbox"===this.type})}"
            href="${this.href}"
          >
            ${this.renderBody()}
          </a>
        `:H`
          <button
            type="button"
            class="${Ge({"action-item":!0,"action-item--checkbox":"checkbox"===this.type})}"
            ?disabled="${this.disabled}"
          >
            ${this.renderBody()}
          </button>
        `}};Xe.styles=[fe,Qe],Xe.shadowRootOptions={...pe.shadowRootOptions,delegatesFocus:!0},ge([_e()],Xe.prototype,"icon",void 0),ge([_e({attribute:"icon-color"})],Xe.prototype,"iconColor",void 0),ge([_e()],Xe.prototype,"href",void 0),ge([_e({type:Boolean})],Xe.prototype,"disabled",void 0),ge([_e({reflect:!0})],Xe.prototype,"variant",void 0),ge([_e({type:Boolean})],Xe.prototype,"checked",void 0),ge([_e({type:Boolean})],Xe.prototype,"active",void 0),ge([_e()],Xe.prototype,"type",void 0),ge([_e({type:Object})],Xe.prototype,"action",void 0),ge([_e({type:Object})],Xe.prototype,"feedback",void 0),ge([_e({type:Number,attribute:"feedback-duration"})],Xe.prototype,"feedbackDuration",void 0),ge([_e()],Xe.prototype,"confirm",void 0),ge([ye()],Xe.prototype,"state",void 0),ge([ye()],Xe.prototype,"feedbackMessage",void 0),ge([_e({converter:{fromAttribute(e){if(null===e)return null;try{let t=JSON.parse(e);if("object"==typeof t&&t)return t}catch{}return e},toAttribute(e){return null===e?null:"string"==typeof e?e:JSON.stringify(e)}}})],Xe.prototype,"shortcut",void 0),customElements.get("craft-action-item")||customElements.define("craft-action-item",Xe);var et,tt,it,st,nt=Object.create,ot=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,at=Object.getOwnPropertyNames,lt=Object.getPrototypeOf,ct=Object.prototype.hasOwnProperty,dt=(et=(it=(e,t)=>{!function(){var e=Object.assign||function(e){for(var t,i=1;i<arguments.length;i++)for(var s in t=arguments[i])g(t,s)&&(e[s]=t[s]);return e},i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=a(["χρόνος","χρόνια"],["μήνας","μήνες"],["εβδομάδα","εβδομάδες"],["μέρα","μέρες"],["ώρα","ώρες"],["λεπτό","λεπτά"],["δευτερόλεπτο","δευτερόλεπτα"],["χιλιοστό του δευτερολέπτου","χιλιοστά του δευτερολέπτου"],","),n={af:a(["jaar","jaar"],["maand","maande"],["week","weke"],["dag","dae"],["uur","ure"],["minuut","minute"],["sekonde","sekondes"],["millisekonde","millisekondes"],","),am:o("ዓመት","ወር","ሳምንት","ቀን","ሰዓት","ደቂቃ","ሰከንድ","ሚሊሰከንድ"),ar:e(o(function(e){return["سنة","سنتان","سنوات"][h(e)]},function(e){return["شهر","شهران","أشهر"][h(e)]},function(e){return["أسبوع","أسبوعين","أسابيع"][h(e)]},function(e){return["يوم","يومين","أيام"][h(e)]},function(e){return["ساعة","ساعتين","ساعات"][h(e)]},function(e){return["دقيقة","دقيقتان","دقائق"][h(e)]},function(e){return["ثانية","ثانيتان","ثواني"][h(e)]},function(e){return["جزء من الثانية","جزآن من الثانية","أجزاء من الثانية"][h(e)]},","),{delimiter:" ﻭ ",_hideCountIf2:!0,_digitReplacements:["۰","١","٢","٣","٤","٥","٦","٧","٨","٩"]}),bg:d(["години","година","години"],["месеца","месец","месеца"],["седмици","седмица","седмици"],["дни","ден","дни"],["часа","час","часа"],["минути","минута","минути"],["секунди","секунда","секунди"],["милисекунди","милисекунда","милисекунди"]),bn:o("বছর","মাস","সপ্তাহ","দিন","ঘন্টা","মিনিট","সেকেন্ড","মিলিসেকেন্ড"),ca:a(["any","anys"],["mes","mesos"],["setmana","setmanes"],["dia","dies"],["hora","hores"],["minut","minuts"],["segon","segons"],["milisegon","milisegons"],","),ckb:o("ساڵ","مانگ","هەفتە","ڕۆژ","کاژێر","خولەک","چرکە","میلی چرکە","."),cs:o(function(e){return["rok","roku","roky","let"][p(e)]},function(e){return["měsíc","měsíce","měsíce","měsíců"][p(e)]},function(e){return["týden","týdne","týdny","týdnů"][p(e)]},function(e){return["den","dne","dny","dní"][p(e)]},function(e){return["hodina","hodiny","hodiny","hodin"][p(e)]},function(e){return["minuta","minuty","minuty","minut"][p(e)]},function(e){return["sekunda","sekundy","sekundy","sekund"][p(e)]},function(e){return["milisekunda","milisekundy","milisekundy","milisekund"][p(e)]},","),cy:o("flwyddyn","mis","wythnos","diwrnod","awr","munud","eiliad","milieiliad"),da:a(["år","år"],["måned","måneder"],["uge","uger"],["dag","dage"],["time","timer"],["minut","minutter"],["sekund","sekunder"],["millisekund","millisekunder"],","),de:a(["Jahr","Jahre"],["Monat","Monate"],["Woche","Wochen"],["Tag","Tage"],["Stunde","Stunden"],["Minute","Minuten"],["Sekunde","Sekunden"],["Millisekunde","Millisekunden"],","),el:s,en:a(["year","years"],["month","months"],["week","weeks"],["day","days"],["hour","hours"],["minute","minutes"],["second","seconds"],["millisecond","milliseconds"]),eo:a(["jaro","jaroj"],["monato","monatoj"],["semajno","semajnoj"],["tago","tagoj"],["horo","horoj"],["minuto","minutoj"],["sekundo","sekundoj"],["milisekundo","milisekundoj"],","),es:a(["año","años"],["mes","meses"],["semana","semanas"],["día","días"],["hora","horas"],["minuto","minutos"],["segundo","segundos"],["milisegundo","milisegundos"],","),et:a(["aasta","aastat"],["kuu","kuud"],["nädal","nädalat"],["päev","päeva"],["tund","tundi"],["minut","minutit"],["sekund","sekundit"],["millisekund","millisekundit"],","),eu:o("urte","hilabete","aste","egun","ordu","minutu","segundo","milisegundo",","),fa:o("سال","ماه","هفته","روز","ساعت","دقیقه","ثانیه","میلی ثانیه"),fi:a(["vuosi","vuotta"],["kuukausi","kuukautta"],["viikko","viikkoa"],["päivä","päivää"],["tunti","tuntia"],["minuutti","minuuttia"],["sekunti","sekuntia"],["millisekunti","millisekuntia"],","),fo:a(["ár","ár"],["mánaður","mánaðir"],["vika","vikur"],["dagur","dagar"],["tími","tímar"],["minuttur","minuttir"],["sekund","sekund"],["millisekund","millisekund"],","),fr:o(function(e){return"an"+(e>=2?"s":"")},"mois",function(e){return"semaine"+(e>=2?"s":"")},function(e){return"jour"+(e>=2?"s":"")},function(e){return"heure"+(e>=2?"s":"")},function(e){return"minute"+(e>=2?"s":"")},function(e){return"seconde"+(e>=2?"s":"")},function(e){return"milliseconde"+(e>=2?"s":"")},","),gr:s,he:a(["שנה","שנים"],["חודש","חודשים"],["שבוע","שבועות"],["יום","ימים"],["שעה","שעות"],["דקה","דקות"],["שניה","שניות"],["מילישנייה","מילישניות"]),hr:o(function(e){return e%10==2||e%10==3||e%10==4?"godine":"godina"},function(e){return 1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci"},function(e){return e%10==1&&11!==e?"tjedan":"tjedna"},r(["dan","dana"]),function(e){return 1===e?"sat":2===e||3===e||4===e?"sata":"sati"},function(e){var t=e%10;return 2!==t&&3!==t&&4!==t||!(e<10||e>14)?"minuta":"minute"},function(e){var t=e%10;return 5===t||Math.floor(e)===e&&e>=10&&e<=19?"sekundi":1===t?"sekunda":2===t||3===t||4===t?"sekunde":"sekundi"},function(e){return 1===e?"milisekunda":e%10==2||e%10==3||e%10==4?"milisekunde":"milisekundi"},","),hi:o("साल",r(["महीना","महीने"]),r(["हफ़्ता","हफ्ते"]),"दिन",r(["घंटा","घंटे"]),"मिनट","सेकंड","मिलीसेकंड"),hu:o("év","hónap","hét","nap","óra","perc","másodperc","ezredmásodperc",","),id:o("tahun","bulan","minggu","hari","jam","menit","detik","milidetik"),is:a(["ár","ár"],["mánuður","mánuðir"],["vika","vikur"],["dagur","dagar"],["klukkutími","klukkutímar"],["mínúta","mínútur"],["sekúnda","sekúndur"],["millisekúnda","millisekúndur"]),it:a(["anno","anni"],["mese","mesi"],["settimana","settimane"],["giorno","giorni"],["ora","ore"],["minuto","minuti"],["secondo","secondi"],["millisecondo","millisecondi"],","),ja:o("年","ヶ月","週間","日","時間","分","秒","ミリ秒"),km:o("ឆ្នាំ","ខែ","សប្តាហ៍","ថ្ងៃ","ម៉ោង","នាទី","វិនាទី","មិល្លីវិនាទី"),kn:a(["ವರ್ಷ","ವರ್ಷಗಳು"],["ತಿಂಗಳು","ತಿಂಗಳುಗಳು"],["ವಾರ","ವಾರಗಳು"],["ದಿನ","ದಿನಗಳು"],["ಗಂಟೆ","ಗಂಟೆಗಳು"],["ನಿಮಿಷ","ನಿಮಿಷಗಳು"],["ಸೆಕೆಂಡ್","ಸೆಕೆಂಡುಗಳು"],["ಮಿಲಿಸೆಕೆಂಡ್","ಮಿಲಿಸೆಕೆಂಡುಗಳು"]),ko:o("년","개월","주일","일","시간","분","초","밀리 초"),ku:o("sal","meh","hefte","roj","seet","deqe","saniye","mîlîçirk",","),lo:o("ປີ","ເດືອນ","ອາທິດ","ມື້","ຊົ່ວໂມງ","ນາທີ","ວິນາທີ","ມິນລິວິນາທີ",","),lt:o(function(e){return e%10==0||e%100>=10&&e%100<=20?"metų":"metai"},function(e){return["mėnuo","mėnesiai","mėnesių"][m(e)]},function(e){return["savaitė","savaitės","savaičių"][m(e)]},function(e){return["diena","dienos","dienų"][m(e)]},function(e){return["valanda","valandos","valandų"][m(e)]},function(e){return["minutė","minutės","minučių"][m(e)]},function(e){return["sekundė","sekundės","sekundžių"][m(e)]},function(e){return["milisekundė","milisekundės","milisekundžių"][m(e)]},","),lv:o(function(e){return f(e)?"gads":"gadi"},function(e){return f(e)?"mēnesis":"mēneši"},function(e){return f(e)?"nedēļa":"nedēļas"},function(e){return f(e)?"diena":"dienas"},function(e){return f(e)?"stunda":"stundas"},function(e){return f(e)?"minūte":"minūtes"},function(e){return f(e)?"sekunde":"sekundes"},function(e){return f(e)?"milisekunde":"milisekundes"},","),mk:a(["година","години"],["месец","месеци"],["недела","недели"],["ден","дена"],["час","часа"],["минута","минути"],["секунда","секунди"],["милисекунда","милисекунди"],","),mn:o("жил","сар","долоо хоног","өдөр","цаг","минут","секунд","миллисекунд"),mr:o(r(["वर्ष","वर्षे"]),r(["महिना","महिने"]),r(["आठवडा","आठवडे"]),"दिवस","तास",r(["मिनिट","मिनिटे"]),"सेकंद","मिलिसेकंद"),ms:o("tahun","bulan","minggu","hari","jam","minit","saat","milisaat"),nl:a(["jaar","jaar"],["maand","maanden"],["week","weken"],["dag","dagen"],["uur","uur"],["minuut","minuten"],["seconde","seconden"],["milliseconde","milliseconden"],","),no:a(["år","år"],["måned","måneder"],["uke","uker"],["dag","dager"],["time","timer"],["minutt","minutter"],["sekund","sekunder"],["millisekund","millisekunder"],","),pl:o(function(e){return["rok","roku","lata","lat"][u(e)]},function(e){return["miesiąc","miesiąca","miesiące","miesięcy"][u(e)]},function(e){return["tydzień","tygodnia","tygodnie","tygodni"][u(e)]},function(e){return["dzień","dnia","dni","dni"][u(e)]},function(e){return["godzina","godziny","godziny","godzin"][u(e)]},function(e){return["minuta","minuty","minuty","minut"][u(e)]},function(e){return["sekunda","sekundy","sekundy","sekund"][u(e)]},function(e){return["milisekunda","milisekundy","milisekundy","milisekund"][u(e)]},","),pt:a(["ano","anos"],["mês","meses"],["semana","semanas"],["dia","dias"],["hora","horas"],["minuto","minutos"],["segundo","segundos"],["milissegundo","milissegundos"],","),ro:o(l("an","ani","de ani"),l("lună","luni","de luni"),l("săptămână","săptămâni","de săptămâni"),l("zi","zile","de zile"),l("oră","ore","de ore"),l("minut","minute","de minute"),l("secundă","secunde","de secunde"),l("milisecundă","milisecunde","de milisecunde"),","),ru:d(["лет","год","года"],["месяцев","месяц","месяца"],["недель","неделя","недели"],["дней","день","дня"],["часов","час","часа"],["минут","минута","минуты"],["секунд","секунда","секунды"],["миллисекунд","миллисекунда","миллисекунды"]),sq:o(r(["vit","vjet"]),"muaj","javë","ditë","orë",function(e){return"minut"+(1===e?"ë":"a")},function(e){return"sekond"+(1===e?"ë":"a")},function(e){return"milisekond"+(1===e?"ë":"a")},","),sr:d(["години","година","године"],["месеци","месец","месеца"],["недељи","недеља","недеље"],["дани","дан","дана"],["сати","сат","сата"],["минута","минут","минута"],["секунди","секунда","секунде"],["милисекунди","милисекунда","милисекунде"]),sr_Latn:d(["godini","godina","godine"],["meseci","mesec","meseca"],["nedelji","nedelja","nedelje"],["dani","dan","dana"],["sati","sat","sata"],["minuta","minut","minuta"],["sekundi","sekunda","sekunde"],["milisekundi","milisekunda","milisekunde"]),ta:a(["வருடம்","ஆண்டுகள்"],["மாதம்","மாதங்கள்"],["வாரம்","வாரங்கள்"],["நாள்","நாட்கள்"],["மணி","மணிநேரம்"],["நிமிடம்","நிமிடங்கள்"],["வினாடி","வினாடிகள்"],["மில்லி விநாடி","மில்லி விநாடிகள்"]),te:a(["సంవత్సరం","సంవత్సరాల"],["నెల","నెలల"],["వారం","వారాలు"],["రోజు","రోజులు"],["గంట","గంటలు"],["నిమిషం","నిమిషాలు"],["సెకను","సెకన్లు"],["మిల్లీసెకన్","మిల్లీసెకన్లు"]),uk:d(["років","рік","роки"],["місяців","місяць","місяці"],["тижнів","тиждень","тижні"],["днів","день","дні"],["годин","година","години"],["хвилин","хвилина","хвилини"],["секунд","секунда","секунди"],["мілісекунд","мілісекунда","мілісекунди"]),ur:o("سال",r(["مہینہ","مہینے"]),r(["ہفتہ","ہفتے"]),"دن",r(["گھنٹہ","گھنٹے"]),"منٹ","سیکنڈ","ملی سیکنڈ"),sk:o(function(e){return["rok","roky","roky","rokov"][p(e)]},function(e){return["mesiac","mesiace","mesiace","mesiacov"][p(e)]},function(e){return["týždeň","týždne","týždne","týždňov"][p(e)]},function(e){return["deň","dni","dni","dní"][p(e)]},function(e){return["hodina","hodiny","hodiny","hodín"][p(e)]},function(e){return["minúta","minúty","minúty","minút"][p(e)]},function(e){return["sekunda","sekundy","sekundy","sekúnd"][p(e)]},function(e){return["milisekunda","milisekundy","milisekundy","milisekúnd"][p(e)]},","),sl:o(function(e){return e%10==1?"leto":e%100==2?"leti":e%100==3||e%100==4||Math.floor(e)!==e&&e%100<=5?"leta":"let"},function(e){return e%10==1?"mesec":e%100==2||Math.floor(e)!==e&&e%100<=5?"meseca":e%10==3||e%10==4?"mesece":"mesecev"},function(e){return e%10==1?"teden":e%10==2||Math.floor(e)!==e&&e%100<=4?"tedna":e%10==3||e%10==4?"tedne":"tednov"},function(e){return e%100==1?"dan":"dni"},function(e){return e%10==1?"ura":e%100==2?"uri":e%10==3||e%10==4||Math.floor(e)!==e?"ure":"ur"},function(e){return e%10==1?"minuta":e%10==2?"minuti":e%10==3||e%10==4||Math.floor(e)!==e&&e%100<=4?"minute":"minut"},function(e){return e%10==1?"sekunda":e%100==2?"sekundi":e%100==3||e%100==4||Math.floor(e)!==e?"sekunde":"sekund"},function(e){return e%10==1?"milisekunda":e%100==2?"milisekundi":e%100==3||e%100==4||Math.floor(e)!==e?"milisekunde":"milisekund"},","),sv:a(["år","år"],["månad","månader"],["vecka","veckor"],["dag","dagar"],["timme","timmar"],["minut","minuter"],["sekund","sekunder"],["millisekund","millisekunder"],","),sw:e(a(["mwaka","miaka"],["mwezi","miezi"],["wiki","wiki"],["siku","masiku"],["saa","masaa"],["dakika","dakika"],["sekunde","sekunde"],["milisekunde","milisekunde"]),{_numberFirst:!0}),tr:o("yıl","ay","hafta","gün","saat","dakika","saniye","milisaniye",","),th:o("ปี","เดือน","สัปดาห์","วัน","ชั่วโมง","นาที","วินาที","มิลลิวินาที"),uz:o("yil","oy","hafta","kun","soat","minut","sekund","millisekund"),uz_CYR:o("йил","ой","ҳафта","кун","соат","минут","секунд","миллисекунд"),vi:o("năm","tháng","tuần","ngày","giờ","phút","giây","mili giây",","),zh_CN:o("年","个月","周","天","小时","分钟","秒","毫秒"),zh_TW:o("年","個月","周","天","小時","分鐘","秒","毫秒")};function o(e,t,i,s,n,o,r,a,l){var c={y:e,mo:t,w:i,d:s,h:n,m:o,s:r,ms:a};return l&&(c.decimal=l),c}function r(e){return function(t){return 1===t?e[0]:e[1]}}function a(e,t,i,s,n,a,l,c,d){return o(r(e),r(t),r(i),r(s),r(n),r(a),r(l),r(c),d)}function l(e,t,i){return function(s){if(1===s)return e;if(Math.floor(s)!==s||0===s)return t;var n=s%100;return n>=1&&n<=19?t:i}}function c(e){return function(t){return Math.floor(t)===t?t%100>=5&&t%100<=20||t%10>=5&&t%10<=9||t%10==0?e[0]:t%10==1?e[1]:t>1?e[2]:e[1]:e[2]}}function d(e,t,i,s,n,r,a,l){return o(c(e),c(t),c(i),c(s),c(n),c(r),c(a),c(l),",")}function h(e){return 2===e?1:e>2&&e<11?2:0}function u(e){return 1===e?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&!(e%100>10&&e%100<20)?2:3:1}function p(e){return 1===e?0:Math.floor(e)===e?e%10>=2&&e%10<=4&&e%100<10?2:3:1}function m(e){return 1===e||e%10==1&&e%100>20?0:Math.floor(e)!==e||e%10>=2&&e%100>20||e%10>=2&&e%100<10?1:2}function f(e){return e%10==1&&e%100!=11}function g(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function v(e){var t=[e.language];if(g(e,"fallbacks")){if(!i(e.fallbacks)||!e.fallbacks.length)throw Error("fallbacks must be an array with at least one element");t=t.concat(e.fallbacks)}for(var s=0;s<t.length;s++){var o=t[s];if(g(e.languages,o))return e.languages[o];if(g(n,o))return n[o]}throw Error("No language found.")}function b(e,t,i){var s,n=e.unitName,o=e.unitCount,r=i.spacer,a=i.maxDecimalPoints,l=g(i,"decimal")?i.decimal:g(t,"decimal")?t.decimal:".";"digitReplacements"in i?s=i.digitReplacements:"_digitReplacements"in t&&(s=t._digitReplacements);var c,d=(void 0===a?o:Math.floor(o*10**a)/10**a).toString();if(t._hideCountIf2&&2===o)c="",r="";else if(s){c="";for(var h=0;h<d.length;h++){var u=d[h];c+="."===u?l:s[u]}}else c=d.replace(".",l);var p=t[n],m="function"==typeof p?p(o):p;return t._numberFirst?m+r+c:c+r+m}function _(t){var i=function(t,s){t=Math.abs(t);var n=e({},i,s||{});return function(e,t){var i=v(t);if(!e.length){var s=t.units;return b({unitName:s[s.length-1],unitCount:0},i,t)}for(var n=t.conjunction,o=t.serialComma,r=g(t,"delimiter")?t.delimiter:g(i,"delimiter")?i.delimiter:", ",a=[],l=0;l<e.length;l++)a.push(b(e[l],i,t));return n&&1!==e.length?2===e.length?a.join(n):a.slice(0,-1).join(r)+(o?",":"")+n+a.slice(-1):a.join(r)}(function(e,t){var i,s,n,o,r=t.units,a=t.unitMeasures,l="largest"in t?t.largest:1/0;if(!r.length)return[];var c={};for(o=e,s=0;s<r.length;s++){var d=a[i=r[s]];n=s===r.length-1?o/d:Math.floor(o/d),c[i]=n,o-=n*d}if(t.round){var h=l;for(s=0;s<r.length;s++)if(0!==(n=c[i=r[s]])&&0===--h){for(var u=s+1;u<r.length;u++){var p=r[u],m=c[p];c[i]+=m*a[p]/a[i],c[p]=0}break}for(s=r.length-1;s>=0;s--)if(0!==(n=c[i=r[s]])){var f=Math.round(n);if(c[i]=f,0===s)break;var g=r[s-1],v=a[g],b=Math.floor(f*a[i]/v);if(!b)break;c[g]+=b,c[i]=0}}var _=[];for(s=0;s<r.length&&_.length<l;s++)(n=c[i=r[s]])&&_.push({unitName:i,unitCount:n});return _}(t,n),n)};return e(i,{language:"en",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},t)}var y=e(_({}),{getSupportedLanguages:function(){var e=[];for(var t in n)g(n,t)&&"gr"!==t&&e.push(t);return e},humanizer:_});"function"==typeof define&&define.amd?define(function(){return y}):void 0!==t&&t.exports?t.exports=y:this.humanizeDuration=y}()},()=>(st||(it((st={exports:{}}).exports,st),it=null),st.exports))(),tt=null==et?{}:nt(lt(et)),((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(var n,o=at(t),r=0,a=o.length;r<a;r++)n=o[r],!ct.call(e,n)&&void 0!==n&&ot(e,n,{get:(e=>t[e]).bind(null,n),enumerable:!(s=rt(t,n))||s.enumerable});return e})(ot(tt,"default",{value:et,enumerable:!0}),et));dt.default.humanizer({language:"en",fallbacks:["en"],largest:2,round:!0});let ht={};function ut(e){let t,i,s=1,n=[...e];if(-1===(t=i=n.indexOf("{")))return[e];let o=[n.slice(0,i).join("")];for(;;){let e=n.indexOf("{",i+1),r=n.indexOf("}",i+1);if(-1===e&&-1===r||(-1===e&&(e=n.length),-1!==r&&r>e?(s++,i=e):-1!==r&&(s--,i=r),0===s&&(o.push(n.slice(t+1,i).join("").split(",",3)),t=i+1,o.push(n.slice(t,-1===e?n.length:e).join("")),t=-1===e?n.length:e),0!==s&&(-1===e||-1===r)))break}return 0===s&&o}function pt(e,t={}){let i=e[0]?.trim();if(!i||void 0===t[i])return`{${e.join(",")}}`;let s=t[i],n=void 0===e[1]?"none":e[1].trim();switch(n){case"number":return(()=>{let t=void 0===e[2]?null:e[2].trim();if(null!==t&&"integer"!==t)throw"Message format 'number' is only supported for integer values.";let i,n=function(e,t){if(typeof d3<"u"&&typeof d3FormatLocaleDefinition<"u")return void 0===t&&(t=",.0f"),d3.formatLocale(d3FormatLocaleDefinition).format(t)(e);let i="string"==typeof e?parseFloat(e):e;if(isNaN(i))return String(e);if(t){let e=t.includes(","),s=t.match(/\.(\d+)/),n=s?parseInt(s[1],10):0;return new Intl.NumberFormat("en",{useGrouping:e,minimumFractionDigits:n,maximumFractionDigits:n}).format(i)}return new Intl.NumberFormat("en",{useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0}).format(i)}(s);return null===t&&-1!==(i=`${s}`.indexOf("."))&&(n+=`.${s.substring(i+1)}`),n})();case"none":return s;case"select":return(()=>{if(void 0===e[2])return!1;let i=ut(e[2]);if(!1===i)return!1;let n=i.length,o=!1;for(let e=0;e+1<n;e++){if(Array.isArray(i[e])||!Array.isArray(i[e+1]))return!1;let t=i[e++].trim();(!1===o&&"other"===t||t==s)&&(o=i[e].join(","))}return!1!==o&&mt(o,t)})();case"plural":return(()=>{if(void 0===e[2])return!1;let i=ut(e[2]);if(!1===i)return!1;let n=i.length,o=!1,r=0;for(let e=0;e+1<n;e++){if("object"==typeof i[e]||"object"!=typeof i[e+1])return!1;let t=i[e++].trim(),n=[...t];if(1===e&&"offset:"===t.substring(0,7)){let e=[...t.replace(/[\n\r\t]/g," ")].indexOf(" ",7);if(-1===e)throw Error("Message pattern is invalid.");r=parseInt(n.slice(7,e).join("").trim()),t=n.slice(e+1,e+1+n.length).join("").trim()}if(!1===o&&"other"===t||"="===t[0]&&parseInt(n.slice(1,1+n.length).join(""))===s||"one"===t&&s-r===1){let t=i[e];o=("string"==typeof t?[t]:t).map(e=>e.replace("#",String(s-r))).join(",")}}return!1!==o&&mt(o,t)})();default:throw Error(`Message format '${n}' is not supported.`)}}function mt(e,t){let i;if(!1===(i=ut(e)))throw Error("Message pattern is invalid.");for(let e=0;e<i.length;e++){let s=i[e];if("object"==typeof s){let n=pt(s,t);if(!1===n)throw Error("Message pattern is invalid.");i[e]=String(n)}}return i.join("")}function ft(e,t,i="app",s=ht){if(s&&void 0!==s[i]&&void 0!==s[i][e]){let t=s?.[i]?.[e];void 0!==t&&(e=t)}return t?mt(e,t):e}function gt(e){let t=!!e.opened;e.addEventListener("opened-changed",()=>{let i=!!e.opened;if(i===t)return;t=i,e.dispatchEvent(new CustomEvent(i?"craft-show":"craft-hide",{bubbles:!0,composed:!0}));let s=i;e.updateComplete.then(()=>{!!e.opened===s&&e.dispatchEvent(new CustomEvent(s?"craft-after-show":"craft-after-hide",{bubbles:!0,composed:!0}))})})}const vt=new WeakMap;function bt(e){return t=>{if(function(e,t){let i=t;for(;i;){if(vt.get(i)===e)return!0;i=Object.getPrototypeOf(i)}return!1}(e,t))return t;const i=e(t);return vt.set(i,e),i}}const _t=Symbol.for("lion::SingletonManagerClassStorage"),yt=globalThis||window,kt=e=>{let t=null;const i=()=>(null===t&&(t=e()),t);return new Proxy({},{get(e,t){const s=i();return"addEventListener"===t||"removeEventListener"===t?Reflect.get(s,t).bind(s):"__instance_for_testing"===t?s:Reflect.get(s,t,s)},set(e,t,s){return Reflect.set(i(),t,s)},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(i(),t)},getPrototypeOf(){return Reflect.getPrototypeOf(i())}})},wt=new class{constructor(){this._map=yt[_t]?yt[_t]:yt[_t]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}};function xt(e="google-chrome"){const t=globalThis.navigator,i=!!t.userAgentData&&t.userAgentData.brands.some(e=>"Chromium"===e.brand);if("chromium"===e)return i;const s=globalThis.navigator,n=s?.vendor,o=void 0!==globalThis.opr,r=globalThis.userAgent?.indexOf("Edge")>-1,a=globalThis.userAgent?.match("CriOS");return"ios"===e?a:"google-chrome"===e?null!=i&&"Google Inc."===n&&!1===o&&!1===r:void 0}const Et={isIE11:/Trident/.test(globalThis.navigator?.userAgent),isChrome:xt(),isIOSChrome:xt("ios"),isChromium:xt("chromium"),isFirefox:globalThis.navigator?.userAgent.toLowerCase().indexOf("firefox")>-1,isMac:-1!==globalThis.navigator?.appVersion?.indexOf("Mac"),isIOS:/iPhone|iPad|iPod/i.test(globalThis.navigator?.userAgent),isMacSafari:globalThis.navigator?.vendor&&globalThis.navigator?.vendor.indexOf("Apple")>-1&&globalThis.navigator?.userAgent&&-1===globalThis.navigator?.userAgent.indexOf("CriOS")&&-1===globalThis.navigator?.userAgent.indexOf("FxiOS")&&-1!==globalThis.navigator?.appVersion.indexOf("Mac")},Ct=r`
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
`;class St{static __createGlobalStyleNode(){const e=document.createElement("style");return e.setAttribute("data-overlays",""),e.textContent=Ct.cssText,document.head.appendChild(e),e}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this._siblingsInert=!1,this.__blockingMap=new WeakMap,St.__globalStyleNode||(St.__globalStyleNode=St.__createGlobalStyleNode())}add(e){if(this.list.find(t=>e===t))throw new Error("controller instance is already added");return this.list.push(e),e}remove(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to remove");this.__list=this.list.filter(t=>t!==e),this.__shownList=this.shownList.filter(t=>t!==e)}show(e){this.list.find(t=>e===t)&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach((e,t)=>{e.elevation=t+1})}hide(e){if(!this.list.find(t=>e===t))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter(t=>t!==e)}teardown(){this.list.forEach(e=>{e.teardown()}),this.__list=[],this.__shownList=[],this._siblingsInert=!1,St.__globalStyleNode&&(document.head.removeChild(St.__globalStyleNode),St.__globalStyleNode=void 0)}get siblingsInert(){return this._siblingsInert}requestToPreventScroll(){const{isIOS:e,isMacSafari:t}=Et;document.body.classList.add("overlays-scroll-lock"),(e||t)&&document.body.classList.add("overlays-scroll-lock-ios-fix"),e&&document.documentElement.classList.add("overlays-scroll-lock-ios-fix")}requestToEnableScroll(e){if((e?this.shownList.filter(t=>t!==e):this.shownList).some(e=>!0===e.preventsScroll))return;const{isIOS:t,isMacSafari:i}=Et;document.body.classList.remove("overlays-scroll-lock"),(t||i)&&document.body.classList.remove("overlays-scroll-lock-ios-fix"),t&&document.documentElement.classList.remove("overlays-scroll-lock-ios-fix")}requestToShowOnly(e){const t=this.shownList.filter(t=>t!==e);t.forEach(e=>e.hide()),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){this.__blockingMap.has(e)&&this.__blockingMap.get(e).forEach(e=>e.show())}}St.__globalStyleNode=void 0;const At=kt(function(){if(!wt.has("@lion/ui::overlays::0.x")){const e=new St;wt.set("@lion/ui::overlays::0.x",e)}return wt.get("@lion/ui::overlays::0.x")});function Nt(e,t,i={}){function s(e){return"getAttribute"in e}function n(e){if(!s(e))return null;const t=e.getAttribute("slot");let n=null;if(t){const s=i[t];s&&(n=s.filter(t=>t?.element===e)[0]||null)}return n}const o=n(e);if(o)return o.deepContains;function r(t){if(!s(e))return;const n=e.getAttribute("slot");n&&(i[n]=i[n]||[],i[n].push({element:e,deepContains:t}))}let a=e.contains(t);if(a)return r(!0),!0;function l(e){return function(e){return"SLOT"===e.tagName}(e)?e.assignedElements():[]}function c(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function d(e){let n=!1;for(let o=0;o<e.length;o+=1){const r=e[o];if(r&&(s(r)||c(r))&&Nt(r,t,i)){n=!0;break}}return n}return e instanceof HTMLElement&&e.shadowRoot&&(a=Nt(e.shadowRoot,t,i),a)?(r(!0),!0):(function e(t){for(let i=0;i<t.children.length;i+=1){const s=t.children[i],o=n(s);if(o){a=o.deepContains||a;break}const r=l(s);if(d([s.shadowRoot,...r])){a=!0;break}s.children.length>0&&e(s)}}(e),r(a),a)}const Tt=r`
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
`,Ot={supportsAdoptingStyleSheets:window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,adoptStyle:void 0,adoptStyles:void 0},Lt=new WeakMap;Ot.adoptStyle=function(e,t,{teardown:i=!1}={}){const{haltFurtherExecution:s}=function(e,t,{teardown:i=!1}={}){let s=!1;e&&!Lt.has(e)&&Lt.set(e,[]);const n=Lt.get(e)??[],o=n.find(e=>t===e);return o&&i?n.splice(n.indexOf(t),1):o||i?(o&&!i||!o&&i)&&(s=!0):n.push(t),{haltFurtherExecution:s}}(e,t,{teardown:i});if(s)return;if(!Ot.supportsAdoptingStyleSheets||Et.isIOS)return void function(e,t,{teardown:i=!1}={}){const s=e===document?document.body:e,n=t.cssText||(o=t,Array.from(o.cssRules).map(e=>e.cssText).join(""));var o;if(i){const e=Array.from(s.querySelectorAll("style"));for(const t of e)if(t.textContent===n){t.remove();break}}else{const e=document.createElement("style"),t=window.litNonce;void 0!==t&&e.setAttribute("nonce",t),e.textContent=n,s.appendChild(e)}}(e,t,{teardown:i});const n=t instanceof CSSStyleSheet?t:t.styleSheet;if(!n)throw new Error("Please provide a CSSResultOrNative style");i?e.adoptedStyleSheets.includes(n)&&e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(n),1):e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]},Ot.adoptStyles=function(e,t,{teardown:i=!1}={}){for(const s of t)Ot.adoptStyle(e,s,{teardown:i})};const Mt=({visibility:e,display:t})=>"hidden"!==e&&"none"!==t;function $t(e,t){const i=Math.max(e.tabIndex,0),s=Math.max(t.tabIndex,0);return 0===i||0===s?s>i:i>s}function It(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2);return function(e,t){const i=[];for(;e.length>0&&t.length>0;)$t(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return[...i,...e,...t]}(It(e.slice(0,i)),It(e.slice(i)))}const Ft="matches"in Element.prototype?"matches":"msMatchesSelector";function Pt(e,t){if(!function(e){return e.nodeType===Node.ELEMENT_NODE&&("slot"===e.localName||function(e){if(!e)return!1;if(!e.isConnected)return!1;if(!Mt(e.style))return!1;const t=window.getComputedStyle(e);return!(!Mt(t)||!(({display:e})=>"contents"===e)(t)&&!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))}(e))}(e))return!1;const i=e,s=function(e){return function(e){return e[Ft]("input, select, textarea, button, object")?e[Ft](":not([disabled])"):e[Ft]("a[href], area[href], iframe, [tabindex], [contentEditable]")}(e)?Number(e.getAttribute("tabindex")||0):-1}(i);let n=s>0;s>=0&&t.push(i);const o=function(e){if("slot"===e.localName)return e.assignedNodes({flatten:!0});const{children:t}=e.shadowRoot||e;return t||[]}(i);for(let e=0;e<o.length;e+=1)n=Pt(o[e],t)||n;return n}function Dt(e){const t=[];return Pt(e,t)?It(t):t}const Vt=new WeakMap;class Rt extends EventTarget{#e=!1;constructor(e={},t=At){super(),this.manager=t,this.__sharedConfig=e,this.__activeElementRightBeforeHide=null,this.config={},this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,isAlertDialog:!1,invokerRelation:"description",visibilityTriggerFunction:void 0,handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"fixed",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"},zIndex:9999},this._contentId=`overlay-content--${Math.random().toString(36).slice(2,10)}`,this.__originalAttrs=new Map,this.__escKeyHandler=this.__escKeyHandler.bind(this),this.updateConfig(e),this.__hasActiveBackdrop=!0,this.__cancelHandler=this.__cancelHandler.bind(this),this.__escKeyHandlerCalled=!1}get invoker(){return this.invokerNode}get content(){return this.__wrappingDialogNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get isAlertDialog(){return this.config?.isAlertDialog}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get visibilityTriggerFunction(){return this.config?.visibilityTriggerFunction}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.__wrappingDialogNode.style.zIndex=`${this.config.zIndex+e}`}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config,this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig?.modifiers||[],...this.__sharedConfig.popperConfig?.modifiers||[],...e.popperConfig?.modifiers||[]]}},this.__validateConfiguration(this.config),this._init(),this.__elementToFocusAfterHide=void 0,this.#t()||this.manager.add(this)}#t(){return Boolean(this.manager.list.find(e=>this===e))}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init(){this.__contentHasBeenInitialized||(this.__initContentDomStructure(),this.__contentHasBeenInitialized=!0),this.contentWrapperNode.removeAttribute("style"),this.contentWrapperNode.removeAttribute("class"),"local"===this.placementMode&&(Rt.popperModule||(Rt.popperModule=async function(){return s.e(2277).then(s.bind(s,2277))}())),this.__handleOverlayStyles({phase:"init"}),this._handleFeatures({phase:"init"})}__handleOverlayStyles({phase:e}){const t=this.contentWrapperNode?.getRootNode();"init"===e?Ot.adoptStyle(t,Tt):"teardown"===e&&Ot.adoptStyle(t,Tt,{teardown:!0})}__initContentDomStructure(){const e=document.createElement("dialog");e.setAttribute("role","none"),e.setAttribute("data-overlay-outer-wrapper",""),e.style.cssText=`display:none; z-index: ${this.config.zIndex}; padding: 0;`,this.__wrappingDialogNode=e,this.config?.contentWrapperNode||(this.__contentWrapperNode=document.createElement("div")),this.contentWrapperNode.setAttribute("data-id","content-wrapper"),function({wrappingDialogNodeL1:e,contentWrapperNodeL2:t,contentNodeL3:i}){if(!t.isConnected&&!i.isConnected)throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');let s;const n=document.createComment("tempMarker");t.isConnected?(s=t.parentElement||t.getRootNode(),s.insertBefore(n,t),e.appendChild(t)):i.assignedSlot?(s=i.assignedSlot.parentElement||i.assignedSlot.getRootNode(),s.insertBefore(n,i.assignedSlot),e.appendChild(t),t.appendChild(i.assignedSlot)):(s=i.parentElement||i.getRootNode(),s.insertBefore(n,i),e.appendChild(t),t.appendChild(i)),s.insertBefore(e,n),s?.removeChild(n)}({wrappingDialogNodeL1:e,contentWrapperNodeL2:this.contentWrapperNode,contentNodeL3:this.contentNode}),e.open=!0,this.isTooltip&&e.setAttribute("tabindex","-1"),this.__wrappingDialogNode.style.display="none",this.contentWrapperNode.style.zIndex="1","absolute"===getComputedStyle(this.contentNode).position&&(this.contentNode.style.position="static"),HTMLDialogElement&&"closedBy"in HTMLDialogElement.prototype?e.closedBy="none":(e.addEventListener("keydown",e=>{"Escape"===e.key&&e.preventDefault()}),e.addEventListener("keyup",e=>{"Escape"===e.key&&e.preventDefault()}),e.addEventListener("cancel",e=>{e.stopPropagation()}),e.addEventListener("close",e=>{e.stopPropagation()}))}_handleZIndex({phase:e}){if("local"===this.placementMode&&"setup"===e){const e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){if("init"===e){this.__storeOriginalAttrs(this.contentNode,["role","id"]);const e=this.trapsKeyboardFocus;if(this.invokerNode){const t=["aria-labelledby","aria-describedby"];e||t.push("aria-expanded"),this.__storeOriginalAttrs(this.invokerNode,t)}this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute("label"===this.invokerRelation?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&!e&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.isAlertDialog?this.contentNode.setAttribute("role","alertdialog"):this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))}else"teardown"===e&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){const i={};t.forEach(t=>{i[t]=e.getAttribute(t)}),this.__originalAttrs.set(e,i)}__restoreOriginalAttrs(){for(const[e,t]of this.__originalAttrs)Object.entries(t).forEach(([t,i])=>{null!==i?e.setAttribute(t,i):e.removeAttribute(t)});this.__originalAttrs.clear()}get isShown(){return Boolean("none"!==this.__wrappingDialogNode?.style.display)}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise(e=>{this._showResolve=e}),this.manager&&this.manager.show(this),this.isShown)return void this._showResolve();const t=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||("HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&(this.__wrappingDialogNode.open=!0),this.__wrappingDialogNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if("global"===this.placementMode){const t=`overlays__overlay-container--${this.viewportConfig.placement}`;"show"===e?(this.contentWrapperNode.classList.add("overlays__overlay-container"),this.contentWrapperNode.classList.add(t),this.contentNode.classList.add("overlays__overlay")):"hide"===e&&(this.contentWrapperNode.classList.remove("overlays__overlay-container"),this.contentWrapperNode.classList.remove(t),this.contentNode.classList.remove("overlays__overlay"))}else"local"===this.placementMode&&"show"===e&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){if(this.preventsScroll)switch(e){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRightInline=document.body.style.marginRight,this.__bodyMarginBottomInline=document.body.style.marginBottom;break;case"show":{if(window.getComputedStyle){const e=window.getComputedStyle(document.body);this.__bodyMarginRight=parseInt(e.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue("margin-bottom"),10)}else this.__bodyMarginRight=0,this.__bodyMarginBottom=0;const e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,i=this.__bodyMarginRight+e,s=this.__bodyMarginBottom+t;window.CSS?.number&&document.body.attributeStyleMap?.set?(document.body.attributeStyleMap.set("margin-right",CSS.px(i)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(s))):(document.body.style.marginRight=`${i}px`,document.body.style.marginBottom=`${s}px`);break}case"hide":document.body.style.marginRight=this.__bodyMarginRightInline||"",document.body.style.marginBottom=this.__bodyMarginBottomInline||""}}async hide(){if(this._hideComplete=new Promise(e=>{this._hideResolve=e}),this.__activeElementRightBeforeHide=this.contentNode.getRootNode().activeElement,this.manager&&this.#t()&&this.manager.hide(this),!this.isShown)return void this._hideResolve();const e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),"HTMLDialogElement"in window&&this.__wrappingDialogNode instanceof HTMLDialogElement&&this.__wrappingDialogNode.close(),this.__wrappingDialogNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide({backdropNode:e,contentNode:t}){await this.transitionHide({backdropNode:e,contentNode:t}),this._handlePosition({phase:"hide"}),e&&e.classList.remove("overlays__backdrop--animation-in")}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add("overlays__backdrop--animation-in")}_restoreFocus(){this.__activeElementRightBeforeHide instanceof HTMLElement&&this.contentNode.contains(this.__activeElementRightBeforeHide)&&(this.elementToFocusAfterHide instanceof HTMLElement?(this.elementToFocusAfterHide.focus(),this.elementToFocusAfterHide.scrollIntoView({block:"nearest"})):this.__activeElementRightBeforeHide.blur())}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth(),this.visibilityTriggerFunction&&this._handleVisibilityTriggers({phase:e})}_handleVisibilityTriggers({phase:e}){"function"==typeof this.visibilityTriggerFunction&&("init"===e&&(this.__visibilityTriggerHandler=this.visibilityTriggerFunction({phase:e,controller:this})),this.__visibilityTriggerHandler[e]&&this.__visibilityTriggerHandler[e]())}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll();break;case"teardown":this.manager.requestToEnableScroll(this)}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this)}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case"init":this.__backdropInitialized||(this.config?.backdropNode||(this.__backdropNode=document.createElement("div"),this.__backdropNode.classList.add("overlays__backdrop")),this.__wrappingDialogNode.prepend(this.backdropNode),this.__backdropInitialized=!0);break;case"show":this.config.hasBackdrop&&this.backdropNode.classList.add("overlays__backdrop--visible"),this.__hasActiveBackdrop=!0;break;case"hide":case"teardown":this.backdropNode.classList.remove("overlays__backdrop--visible"),this.__hasActiveBackdrop=!1}}#i=e=>{"Shift"===e.key&&(this.#e=!0)};#s=e=>{"Shift"===e.key&&(this.#e=!1)};#n=()=>{window.addEventListener("keydown",this.#i),window.addEventListener("keyup",this.#s)};#o=()=>{window.removeEventListener("keydown",this.#i),window.removeEventListener("keyup",this.#s)};#r=()=>Dt(this.contentNode).find(e=>e.hasAttribute("autofocus"))||this.contentNode;#a=()=>{this.__wrappingDialogNode?.addEventListener("focus",()=>{this.#e||this.#r().focus()})};_handleTrapsKeyboardFocus({phase:e}){"init"===e&&(this.contentNode.style.outline="none",this.contentNode.tabIndex=-1,Boolean(this.contentNode.shadowRoot)&&console.warn("[overlays]: For best accessibility (compatibility with Safari + VoiceOver), provide a contentNode that is not a host for a shadow root")),"show"===e&&(this.#n(),this.#a(),this.__wrappingDialogNode?.close(),this.__wrappingDialogNode?.showModal(),this.#r().focus()),"hide"===e&&this.#o()}__cancelHandler(e){e.preventDefault()}__escKeyHandler(e){"Escape"!==e.key||Vt.has(e)||!this.isShown&&this.__escKeyHandlerCalled||this.#l(e)&&(this.__escKeyHandlerCalled=!0,this.hide(),Vt.set(e,this))}#l=e=>e.composedPath().includes(this.__wrappingDialogNode)||this.invokerNode&&e.composedPath().includes(this.invokerNode)||Nt(this.contentNode,e.target);#c=e=>{"Escape"===e.key&&(this.#l(e)||this.hide())};_handleHidesOnEsc({phase:e}){"init"===e&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)),"show"===e&&(this.__escKeyHandlerCalled=!1),"teardown"===e&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){"init"===e?(document.removeEventListener("keyup",this.#c),document.addEventListener("keyup",this.#c)):"teardown"===e&&document.removeEventListener("keyup",this.#c)}_handleInheritsReferenceWidth(){if(!this._referenceNode||"global"===this.placementMode)return;const e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto"}}_handleHidesOnOutsideClick({phase:e}){const t="show"===e?"addEventListener":"removeEventListener";if("show"===e){let e=!1,t=!1;this.__onInsideMouseDown=()=>{e=!0},this.__onInsideMouseUp=()=>{t=!0},this.__onDocumentMouseUp=()=>{setTimeout(()=>{e||t||this.hide(),e=!1,t=!1})},this.__onWindowBlur=()=>{setTimeout(()=>{this.hide()})}}this.contentWrapperNode[t]("mousedown",this.__onInsideMouseDown,!0),this.contentWrapperNode[t]("mouseup",this.__onInsideMouseUp,!0),this.invokerNode&&(this.invokerNode[t]("mousedown",this.__onInsideMouseDown,!0),this.invokerNode[t]("mouseup",this.__onInsideMouseUp,!0)),document.documentElement[t]("mouseup",this.__onDocumentMouseUp,!0),window[t]("blur",this.__onWindowBlur)}_handleAccessibility({phase:e}){"init"!==e&&"teardown"!==e||this.__setupTeardownAccessibility({phase:e});const t=this.trapsKeyboardFocus;!this.invokerNode||this.isTooltip||t||this.invokerNode.setAttribute("aria-expanded",`${"show"===e}`)}teardown(){this.__handleOverlayStyles({phase:"teardown"}),this._handleFeatures({phase:"teardown"}),this.#t()&&this.manager.remove(this)}async __createPopperInstance(){if(this._popper&&(this._popper.destroy(),this._popper=void 0),void 0!==Rt.popperModule){const{createPopper:e}=await Rt.popperModule;this._popper=e(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}_hasDisabledInvoker(){return!!this.invokerNode&&(this.invokerNode.disabled||"true"===this.invokerNode.getAttribute("aria-disabled"))}}function Bt(e,t){if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return e===t;const i=Object.keys(e),s=Object.keys(t);return i.length===s.length&&i.every(i=>Bt(e[i],t[i]))}Rt.popperModule=void 0;const zt=bt(e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}#d=!1;constructor(){super(),this.opened=!1,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){const t=!Bt(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"opened"===e&&this.opened!==t&&this.dispatchEvent(new CustomEvent("opened-changed",{detail:{opened:this.opened}}))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:i,backdropNode:s,contentWrapperNode:n}){const o=this._defineOverlayConfig()||{};return new Rt({contentNode:e,invokerNode:t,referenceNode:i,backdropNode:s,contentWrapperNode:n,...o,...this.config,popperConfig:{...o.popperConfig||{},...this.config?.popperConfig||{},modifiers:[...o.popperConfig?.modifiers||[],...this.config?.popperConfig?.modifiers||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(e){super.updated(e),e.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&(this.#d||(this._setupOverlayCtrl(),this.#d=!0))})}async disconnectedCallback(){super.disconnectedCallback(),await this._isPermanentlyDisconnected()&&(this._teardownOverlayCtrl(),this.#d=!1)}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];get _overlayInvokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _overlayReferenceNode(){}get _overlayBackdropNode(){return this.__cachedOverlayBackdropNode||(this.__cachedOverlayBackdropNode=Array.from(this.children).find(e=>"backdrop"===e.slot)),this.__cachedOverlayBackdropNode}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find(e=>"content"===e.slot)||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot?.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){if(this.#d)return;const e={contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode};this._overlayCtrl?this._overlayCtrl.updateConfig(e):this._overlayCtrl=this._defineOverlay(e),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._overlayCtrl&&(this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown())}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{const t=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{const t=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}repositionOverlay(){const e=this._overlayCtrl;"local"===e.placementMode&&e._popper&&e._popper.update()}async _isPermanentlyDisconnected(){return await this.updateComplete,!this.isConnected}}),jt=bt(e=>class extends(zt(e)){static get properties(){return{hasArrow:{type:Boolean,reflect:!0,attribute:"has-arrow"}}}static get styles(){return[...super.styles||[],r`
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
        `]}constructor(){super(),this.hasArrow=!0,this.__setupRepositionCompletePromise()}render(){return H`
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="content"></slot>
          ${this._arrowNodeTemplate()}
        </div>
      `}_arrowNodeTemplate(){return H`
        <div class="arrow" aria-hidden="true" data-popper-arrow>${this._arrowTemplate()}</div>
      `}_arrowTemplate(){return H`
        <svg viewBox="0 0 12 8" class="arrow__graphic">
          <path d="M 0,0 h 12 L 6,8 z"></path>
        </svg>
      `}_defineOverlayConfig(){const e=super._defineOverlayConfig()||{};return this.hasArrow?{...e,popperConfig:{...this._getPopperArrowConfig(e.popperConfig)}}:e}_getPopperArrowConfig(e){return{...e||{},placement:"top",modifiers:[{name:"arrow",enabled:!0,options:{padding:8}},{name:"offset",enabled:!0,options:{offset:[0,8]}},...e&&e.modifiers||[]],onFirstUpdate:e=>{this.__syncFromPopperState(e)},afterWrite:e=>{this.__syncFromPopperState(e)}}}__setupRepositionCompletePromise(){this.repositionComplete=new Promise(e=>{this.__repositionCompleteResolver=e})}get _arrowNode(){return this.shadowRoot.querySelector("[data-popper-arrow]")}__syncFromPopperState(e){e&&this._arrowNode&&e.placement!==this._arrowNode.placement&&(this.__repositionCompleteResolver(e.placement),this.__setupRepositionCompletePromise())}});function Ut({delayIn:e=0,delayOut:t=300}){return{visibilityTriggerFunction:({controller:i})=>{let s,n=!1,o=!1;function r(){n=!1,o=!1}function a(r){const{type:a}=r;clearTimeout(s),n="focusout"!==a&&(n||"focusin"===a),o="mouseleave"!==a&&(o||"mouseenter"===a),s=!n&&!o||i._hasDisabledInvoker()?setTimeout(()=>{i.hide()},t):setTimeout(()=>{i.show()},e)}return{init:()=>{i.addEventListener("hide",r),i.contentNode?.addEventListener("mouseenter",a),i.contentNode?.addEventListener("mouseleave",a),i.invokerNode?.addEventListener("mouseenter",a),i.invokerNode?.addEventListener("mouseleave",a),i.invokerNode?.addEventListener("focusin",a),i.invokerNode?.addEventListener("focusout",a)},teardown:()=>{i.removeEventListener("hide",r),i.contentNode?.removeEventListener("mouseenter",a),i.contentNode?.removeEventListener("mouseleave",a),i.invokerNode?.removeEventListener("mouseenter",a),i.invokerNode?.removeEventListener("mouseleave",a),i.invokerNode?.removeEventListener("focusin",a),i.invokerNode?.removeEventListener("focusout",a)}}}}}const qt=({invokerRelation:e="description",delayIn:t=300,delayOut:i=300}={})=>({placementMode:"local",elementToFocusAfterHide:void 0,hidesOnEsc:!0,handlesAccessibility:!0,isTooltip:!0,invokerRelation:e,popperConfig:{strategy:"absolute"},...Ut({delayIn:t,delayOut:i})});var Ht=r`
  :host {
    display: contents;
    position: relative;
  }

  .popover-pane {
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    min-width: calc(180rem / 16);
    max-width: calc(320rem / 16);
    overflow: auto;
    max-height: 40vh;
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
`,Wt=new WeakMap,Gt=new WeakSet,Kt=class extends(zt(pe)){constructor(){super(),Ae(this,Gt),this.placement="bottom-start",this.distance=4,this.matchInvokerWidth=!1,this.withoutArrow=!1,Ne(this,Wt,null),gt(this)}_defineOverlayConfig(){return{placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},inheritsReferenceWidth:this.matchInvokerWidth?"min":"none",popperConfig:{strategy:"fixed",placement:this.placement,modifiers:[{name:"offset",options:{offset:[0,this.distance]}},{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"containingBlockCorrection",enabled:!0,phase:"afterWrite",fn:({state:e})=>{let t=e.elements.popper,i=parseFloat(t.style.left),s=parseFloat(t.style.top);if(Number.isNaN(i)||Number.isNaN(s))return;let n=t.getBoundingClientRect(),o=n.x-i,r=n.y-s;(0!==o||0!==r)&&(t.style.left=i-o+"px",t.style.top=s-r+"px")}}]}}}get _overlayContentNode(){return this.shadowRoot?.querySelector(".popover-pane")}get _overlayInvokerNode(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return"function"==typeof e.getElementById?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}get _overlayReferenceNode(){return this.anchor}render(){return H`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <div class="popover-pane" part="popup">
          <slot name="content">
            <slot name="content-body"></slot>
            <slot name="content-footer"></slot>
          </slot>
        </div>
      </div>
    `}connectedCallback(){Se(Gt,this,Yt).call(this),super.connectedCallback()}updated(e){super.updated(e),(e.has("for")||e.has("anchor"))&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode})}async show(){this.opened=!0,await this.updateComplete,await this.open()}async hide(){this.opened=!1,await this.updateComplete,await this.close()}};function Yt(){if(Te(Wt,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?""===e.slot:""!==(e.textContent??"").trim());if(!e.length)return;let t=document.createElement("div");t.slot="content",t.append(...e),this.append(t),Oe(Wt,this,t)}function Zt(e=""){return`${e.length>0?`${e}-`:""}${Math.random().toString(36).substr(2,10)}`}Kt.styles=[Ht],ge([_e({reflect:!0})],Kt.prototype,"for",void 0),ge([_e({attribute:!1})],Kt.prototype,"anchor",void 0),ge([_e({reflect:!0})],Kt.prototype,"placement",void 0),ge([_e({type:Number})],Kt.prototype,"distance",void 0),ge([_e({attribute:"match-invoker-width",type:Boolean})],Kt.prototype,"matchInvokerWidth",void 0),ge([_e({type:Boolean,attribute:"without-arrow"})],Kt.prototype,"withoutArrow",void 0),customElements.get("craft-popover")||customElements.define("craft-popover",Kt);var Jt=class e extends Kt{constructor(...e){super(...e),this.label=ft("Actions"),this.icon="ellipsis",this.disabled=!1,this.searchable=!1,this.uid=Zt(),this._generatedInvoker=null,this._generatedContent=null,this._searchContainer=null,this._searchInput=null,this._swallowNextEscUp=!1,this._onSearchKeydown=e=>{if("ArrowDown"===e.key||"ArrowUp"===e.key){let t=this._getNavigableItems();return void(t.length&&(e.preventDefault(),("ArrowDown"===e.key?t[0]:t[t.length-1])?.focus()))}"Escape"===e.key&&this._searchInput?.value?(e.stopPropagation(),this._swallowNextEscUp=!0,this._searchInput.value="",this._applySearchFilter("")):"Enter"===e.key&&e.preventDefault()},this._onSearchKeyup=e=>{"Escape"===e.key&&this._swallowNextEscUp&&(e.stopPropagation(),this._swallowNextEscUp=!1)},this._onOverlayShow=()=>{this.opened&&(this.searchable?this._searchInput?.focus():this._getNavigableItems()[0]?.focus())},this._onContentKeydown=e=>{if(this._searchContainer?.contains(e.target))return;let t=this._getNavigableItems(),i=e.target?.closest?.("craft-action-item")??null,s=i?t.indexOf(i):-1;if("ArrowDown"===e.key||"ArrowUp"===e.key){if(!t.length)return;let i;return e.preventDefault(),i="ArrowDown"===e.key?-1===s?0:(s+1)%t.length:-1===s?t.length-1:(s-1+t.length)%t.length,void t[i]?.focus()}if("Home"===e.key||"End"===e.key){if(!t.length)return;return e.preventDefault(),void("Home"===e.key?t[0]:t[t.length-1])?.focus()}if(" "===e.key&&!this.searchable&&i?.href)return e.preventDefault(),void i.click();i&&this._redirectTypingToSearch(e)},this._onContentSlotChange=()=>{this._syncSearchInput()},this._onInvokerSlotChange=()=>{if(void 0===this.actions)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&this._overlayCtrl&&(this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode}),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&e.querySelectorAll("craft-action-item").forEach(e=>{e.addEventListener("click",()=>{this.opened=!1,void 0===this.actions&&this._dispatchChange(e)})})}_dispatchChange(e){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute("id",`invoker-${this.uid}`),e.setAttribute("aria-controls",`content-${this.uid}`),e.setAttribute("aria-haspopup","true")),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];e&&(this.disabled?e.setAttribute("aria-disabled","true"):e.removeAttribute("aria-disabled"))}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute("id",`content-${this.uid}`),e.setAttribute("role","none")),this._wireContentKeydown()}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._overlayCtrl.addEventListener("show",this._onOverlayShow),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_teardownOverlayCtrl(){this._overlayCtrl?.removeEventListener("show",this._onOverlayShow),super._teardownOverlayCtrl()}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector('slot[name="invoker"]')?.addEventListener("slotchange",this._onInvokerSlotChange),this.shadowRoot?.querySelector('slot[name="content"]')?.addEventListener("slotchange",this._onContentSlotChange),this._syncSearchInput()}willUpdate(e){if(super.willUpdate(e),e.has("opened")&&this.opened&&this.disabled)return void(this.opened=!1);if(void 0===this.actions)return void this._removeGeneratedNodes();let t=e.has("opened")&&this.opened&&this._hasActionsProvider();(e.has("actions")||e.has("label")||e.has("icon")||e.has("disabled")||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has("disabled")&&this._syncInvokerDisabled(),e.has("opened")&&!this.opened&&e.get("opened")&&this._resetSearchFilter(),e.has("searchable")&&this._syncSearchInput(),void 0!==this.actions&&(e.has("opened")&&this.opened&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has("actions")||e.has("label")||e.has("icon"))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._overlayCtrl&&this._overlayCtrl.updateConfig({contentNode:this._overlayContentNode,invokerNode:this._overlayInvokerNode}),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>"invoker"===e.slot&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>"hr"===e.type||"display"===e.type?e:"href"in e&&e.href?{...e,type:"link",label:e.label??""}:{...e,type:e.type??"button",label:e.label??""})}_sortActions(e){return[...e].sort((e,t)=>("variant"in e&&e.variant===Ue.Danger)-+("variant"in t&&t.variant===Ue.Danger))}_applyItemProps(e,t){let i=new Set(["type","label","onClick","href","keywords"]);for(let[s,n]of Object.entries(t))i.has(s)||void 0===n||(e[s]=n)}_renderItem(e){if("hr"===e.type){let e=document.createElement("hr");return e.className="action-menu__separator",Object.assign(e.style,{margin:"0",border:"0",borderBlockStart:"1px solid var(--c-color-neutral-border-quiet)"}),e}if("display"===e.type)return"function"==typeof e.node?e.node():e.node;let t=document.createElement("craft-action-item");if("link"===e.type&&(t.href=e.href),this._applyItemProps(t,e),e.keywords&&t.setAttribute("data-keywords",e.keywords),e.label&&(t.textContent=e.label),"function"==typeof e.onClick){let i=e.onClick;t.addEventListener("click",e=>i(e))}return t.addEventListener("click",()=>this._dispatchChange(e)),t}_resolveActions(){return"function"==typeof this.actions?this.actions():this.actions??[]}_hasActionsProvider(){return"function"==typeof this.actions}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement("craft-button");e.setAttribute("slot","invoker"),e.setAttribute("type","button"),e.setAttribute("icon",""),e.setAttribute("size","small"),e.setAttribute("inherit","true"),e.setAttribute("variant","plain"),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute("disabled",this.disabled),he(H`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement("div");e.setAttribute("slot","content"),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let i of e){let e=this._renderItem(i);e&&t.appendChild(e)}this._syncSearchInput()}_getContentNode(){return this._generatedContent?this._generatedContent:this._cachedOverlayContentNode?this._cachedOverlayContentNode:Array.from(this.children).find(e=>"content"===e.slot)??null}_syncSearchInput(){let e=this._getContentNode();if(this._wireContentKeydown(),!this.searchable||!e)return this._searchContainer?.isConnected&&this._searchContainer.remove(),void(e&&this._clearFilterAttributes(e));this._searchContainer||(this._searchContainer=this._buildSearchContainer()),e.firstElementChild!==this._searchContainer&&e.prepend(this._searchContainer)}_buildSearchContainer(){let e=document.createElement("div");e.className="action-menu__search";let t=document.createElement("style");t.textContent="\n      craft-action-menu [data-search-hidden] {\n        display: none !important;\n      }\n      craft-action-menu .action-menu__search input {\n        box-sizing: border-box;\n        width: 100%;\n        padding: var(--c-spacing-xs);\n        border: 1px solid var(--c-border-form);\n        border-radius: var(--c-radius-sm);\n        background-color: var(--c-surface-form);\n        font: inherit;\n      }\n    ",e.appendChild(t);let i=document.createElement("input");return i.type="text",i.setAttribute("inputmode","search"),i.autocomplete="off",i.placeholder=ft("Search"),i.setAttribute("aria-label",ft("Search")),i.addEventListener("input",()=>{this._applySearchFilter(i.value)}),i.addEventListener("keydown",this._onSearchKeydown),i.addEventListener("keyup",this._onSearchKeyup),e.appendChild(i),this._searchInput=i,e}_getFilterableItems(t){return Array.from(t.querySelectorAll(e._filterableItemsSelector)).filter(i=>{if(this._searchContainer?.contains(i))return!1;let s=i.parentElement?.closest(e._filterableItemsSelector);return!s||!t.contains(s)})}_itemMatchesSearch(e,t){return`${e.textContent??""} ${e.getAttribute("data-keywords")??""}`.toLowerCase().includes(t)}_applySearchFilter(e){let t=this._getContentNode();if(!t)return;let i=e.trim().toLowerCase();for(let e of this._getFilterableItems(t))!i||this._itemMatchesSearch(e,i)?e.removeAttribute("data-search-hidden"):e.setAttribute("data-search-hidden","")}_clearFilterAttributes(e){e.querySelectorAll("[data-search-hidden]").forEach(e=>e.removeAttribute("data-search-hidden"))}_resetSearchFilter(){this._searchInput&&(this._searchInput.value="");let e=this._getContentNode();e&&this._clearFilterAttributes(e)}_getNavigableItems(){let e=this._getContentNode();return e?Array.from(e.querySelectorAll("craft-action-item")).filter(e=>!e.hasAttribute("hidden")&&!e.hasAttribute("data-search-hidden")&&!(e.disabled||e.hasAttribute("disabled"))):[]}_wireContentKeydown(){this._getContentNode()?.addEventListener("keydown",this._onContentKeydown)}_redirectTypingToSearch(e){if(!this.searchable||!this._searchInput||(1!==e.key.length||e.ctrlKey||e.metaKey||e.altKey)&&"Backspace"!==e.key)return;e.preventDefault();let t=this._searchInput;t.focus(),t.value="Backspace"===e.key?t.value.slice(0,-1):t.value+e.key,this._applySearchFilter(t.value)}};Jt.styles=[...Kt.styles,r`
      ::slotted([slot='content']) {
        display: grid;
        gap: var(--c-spacing-xs);
        padding: var(--c-spacing-sm);
        font-size: var(--c-text-base);
        font-weight: 400;
      }

      ::slotted([slot='content']) hr {
        margin: 0;
      }

      :host([disabled]) ::slotted([slot='invoker']) {
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
      }
    `],Jt._filterableItemsSelector="craft-action-item, li, button",ge([_e({attribute:!1})],Jt.prototype,"actions",void 0),ge([_e()],Jt.prototype,"label",void 0),ge([_e()],Jt.prototype,"icon",void 0),ge([_e({type:Boolean,reflect:!0})],Jt.prototype,"disabled",void 0),ge([_e({type:Boolean,reflect:!0})],Jt.prototype,"searchable",void 0),ge([xe({slot:"invoker"})],Jt.prototype,"invokerNodes",void 0),ge([xe({slot:"content"})],Jt.prototype,"contentNodes",void 0),customElements.get("craft-action-menu")||customElements.define("craft-action-menu",Jt);var Qt=r`
  :host {
    --color-start: red;
    --color-end: blue;
    --color-text: inherit;

    --size: calc(30rem / 16);
    display: contents;
  }

  .avatar {
    display: inline-flex;
    width: var(--size);
    aspect-ratio: 1;
    background-color: white;
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
`,Xt=class extends pe{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(" ").map(e=>e.charAt(0).toUpperCase()).join(""):"?"}render(){return H`
      <span class="avatar">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          ${this.label?H`<title>${this.label}</title>`:""}
          <defs>
            <linearGradient
              id="${this._gradientId}"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop offset="0%" style="stop-color:var(--color-start)"></stop>
              <stop offset="100%" style="stop-color:var(--color-end)"></stop>
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
    `}};Xt.styles=[Qt],ge([_e()],Xt.prototype,"label",void 0),ge([ye()],Xt.prototype,"_gradientId",void 0),customElements.get("craft-avatar")||customElements.define("craft-avatar",Xt);const ei=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","white","gray","black","slate"],ti=e=>e.charAt(0).toUpperCase()+e.slice(1),ii={...Object.fromEntries(ei.map(e=>[ti(e),e])),...Object.fromEntries(Object.entries({neutral:"slate",accent:"blue",info:"sky",success:"emerald",warning:"yellow",danger:"red"}).map(([e,t])=>[ti(e),t])),...Object.fromEntries(Object.entries({pending:"orange",off:"red",suspended:"red",expired:"red",disabled:"gray",inactive:"gray",on:"emerald"}).map(([e,t])=>[ti(e),t]))},si=[...ei],ni={Solid:"solid",OutlineFill:"outline-fill",Fill:"fill",Outline:"outline",Plain:"plain"};Object.values(ni);var oi=class extends pe{constructor(...e){super(...e),this.size="md",this.fill="var(--c-color-fill-loud)",this.label=null,this.appearance=ni.OutlineFill}getFill(){return si.includes(this.fill)||qe.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case"md":return"0.6em";case"lg":return"1em";default:return this.size}}render(){return H`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??Y}"
      role="${this.label?"img":Y}"
      class="${Ge({indicator:!0,"indicator--outline":this.appearance===ni.Outline})}"
    ></span>`}};oi.styles=[fe,r`
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
        border: 1px solid var(--_fill);
      }

      /* Appearances */
      :host([appearance~='outline-fill']) .indicator {
        background: var(--_fill);
        border: 1px solid rgba(0, 0, 0, 0.5);
      }

      :host([appearance~='solid']) .indicator {
        background: var(--_fill);
        border-color: transparent;
      }

      :host([appearance~='outline']) .indicator {
        background: transparent;
        border: 2px solid var(--_fill);
      }
    `],ge([_e()],oi.prototype,"size",void 0),ge([_e({reflect:!0})],oi.prototype,"fill",void 0),ge([_e()],oi.prototype,"label",void 0),ge([_e({reflect:!0})],oi.prototype,"appearance",void 0),customElements.get("craft-indicator")||customElements.define("craft-indicator",oi);var ri=r`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    background-color: var(--c-color-fill-quiet);
    border: 1px solid var(--c-color-border-quiet);
    color: var(--c-color-on-quiet);
    border-radius: var(--c-radius-full);
    font-size: 0.9em;
  }

  .badge__prefix {
    padding-inline: calc(var(--c-spacing-md) / 2);
  }

  .badge__suffix {
    padding-inline: calc(var(--c-spacing-md) / 2);
  }
`,ai=class extends pe{constructor(...e){super(...e),this.fill=ii.Gray}getFill(){return this.fill}willUpdate(e){e.has("fill")&&(this.dataset.color=this.getFill())}render(){return H`
      <span
        part="badge"
        class="${Ge({badge:!0})}"
      >
        <span class="badge__prefix">
          <slot name="prefix" part="prefix">
            <craft-indicator
              part="indicator"
              fill=${this.getFill()}
            ></craft-indicator>
          </slot>
        </span>
        <slot></slot>
        <span class="badge__suffix">
          <slot name="suffix" part="suffix"></slot>
        </span>
      </span>
    `}};ai.styles=[ri],ge([_e({reflect:!0})],ai.prototype,"fill",void 0),customElements.get("craft-badge")||customElements.define("craft-badge",ai);var li=class extends pe{constructor(...e){super(...e),this.rel="noreferrer noopener"}render(){return H`
      <slot name="prefix" part="prefix"></slot>
      ${this.href?H`<a
          part="label"
          class="label"
          href=${this.href}
          target=${this.target??Y}
          rel=${this.target?this.rel:Y}
          ><slot></slot
        ></a>`:H`<span part="label" class="label"><slot></slot></span>`}
      <slot name="suffix" part="suffix"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};li.styles=r`
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
      font-weight: 400;
      color: inherit;
      text-decoration: none;
    }

    a.label:hover {
      text-decoration: underline;
    }

    slot[name='prefix']::slotted(*) {
      margin-inline-end: var(--c-spacing-sm);
    }

    slot[name='suffix']::slotted(*) {
      margin-inline-start: var(--c-spacing-sm);
    }

    slot[name='separator']::slotted(*) {
      color: var(--c-text-quiet);
      margin: 0 var(--c-spacing-md);
    }
  `,ge([_e({reflect:!0})],li.prototype,"href",void 0),ge([_e()],li.prototype,"target",void 0),ge([_e()],li.prototype,"rel",void 0),customElements.get("craft-breadcrumb-item")||customElements.define("craft-breadcrumb-item",li);class ci{constructor(){this.__iconResolvers=new Map}addIconResolver(e,t){if(this.__iconResolvers.has(e))throw new Error(`An icon resolver has already been registered for namespace: ${e}`);this.__iconResolvers.set(e,t)}removeIconResolver(e){this.__iconResolvers.delete(e)}resolveIcon(e,t,i){const s=this.__iconResolvers.get(e);if(s)return s(t,i);throw new Error(`Could not find any icon resolver for namespace ${e}.`)}resolveIconForId(e){const t=e.split(":");if(3!==t.length)throw new Error(`Incorrect iconId: ${e}. Format: <namespace>:<iconset>:<icon>`);return this.resolveIcon(t[0],t[1],t[2])}}const di=kt(function(){if(!wt.has("@lion/ui::icons::0.x")){const e=new ci;wt.set("@lion/ui::icons::0.x",e)}return wt.get("@lion/ui::icons::0.x")});class hi extends We{constructor(e){if(super(e),this.it=Y,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Y||null==e)return this._t=void 0,this.it=e;if(e===K)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}hi.directiveName="unsafeHTML",hi.resultType=1,He(hi);class ui extends hi{}ui.directiveName="unsafeSVG",ui.resultType=2;const pi=He(ui),mi="craft",fi=new Map,gi=(e,t,i)=>{let s=function(e,t="classic",i="regular",s="/vendor/craft/icons"){let n="solid",o=i,r=e.endsWith(".svg")?e.split(".svg")[0]:e;if(e.includes("/")){let[t,...i]=e.split("/");o=t??o,r=i.join("/")}return"thin"===o?n="thin":"light"===o?n="light":"regular"===o?n="regular":"solid"===o&&(n="solid"),"brands"===t&&(n="brands"),("custom-icons"===t||"custom-icons"===o)&&(n="custom-icons"),`${s}/${n}/${r}.svg`}(e,t,i);if(null===s)return Y;let n=fi.get(s);return n||(n=async function(e){try{let t=await fetch(e,{mode:"cors"});if(!t.ok)return Y;let i=document.createElement("div");i.innerHTML=await t.text();let s=i.firstElementChild;return"svg"===s?.tagName?.toLowerCase()?(s.setAttribute("fill","currentColor"),s.setAttribute("part","svg"),H`${pi(s.outerHTML)}`):Y}catch{return Y}}(s),fi.set(s,n)),n.then(e=>(e===Y&&fi.delete(s),e))};!function(e){di.removeIconResolver(mi),di.addIconResolver(mi,(t,i)=>{let{family:s,variant:n}=function(e){let[t="classic",i="regular"]=e.split("/");return{family:t,variant:i}}(t);return e(i,s,n)})}(gi);var vi=new WeakSet,bi=class extends pe{constructor(...e){super(...e),Ae(this,vi),this.appearance="plain",this._svg=Y,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),"badge"===this.appearance&&!this.getAttribute("data-color")&&this.setAttribute("data-color","warning"),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){Se(vi,this,ki).call(this)}updated(e){super.updated(e),(e.has("name")||e.has("family")||e.has("variant"))&&Se(vi,this,yi).call(this),e.has("label")&&this.hasUpdated&&Se(vi,this,ki).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return H`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?Y:this._svg}
    `}static get styles(){return[r`
        :host {
          box-sizing: content-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: -0.125em;
          width: 1.25em;
          height: 1em;
          font-size: 0.8em;
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
      `]}};function _i(){return this.name?{name:this.name,family:this.family??"classic",variant:this.variant??"solid"}:null}async function yi(){let e,t=Se(vi,this,_i).call(this);if(null===t)return void(this._svg=Y);try{e=await function(e,t="classic",i="regular"){return Promise.resolve(di.resolveIcon(mi,function(e,t){return`${e}/${t}`}(t,i),e))}(t.name,t.family,t.variant)}catch(t){console.error(t),e=Y}let i=Se(vi,this,_i).call(this);null!==i&&t.name===i.name&&t.family===i.family&&t.variant===i.variant&&(this._svg=e)}function ki(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}ge([_e({reflect:!0})],bi.prototype,"name",void 0),ge([_e({reflect:!0})],bi.prototype,"family",void 0),ge([_e({reflect:!0})],bi.prototype,"variant",void 0),ge([_e()],bi.prototype,"label",void 0),ge([_e({reflect:!0})],bi.prototype,"appearance",void 0),ge([ye()],bi.prototype,"_svg",void 0),ge([ye()],bi.prototype,"_hasSlottedContent",void 0),customElements.get("craft-icon")||customElements.define("craft-icon",bi);var wi=r`
  .breadcrumbs {
    display: flex;
    align-items: center;
  }
`,xi=class extends pe{constructor(...e){super(...e),this.label=ft("Breadcrumbs"),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let i=e.offsetWidth;return e.hasAttribute("hidden")&&(e.removeAttribute("hidden"),i=e.offsetWidth,e.setAttribute("hidden","")),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:i,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>"craft-breadcrumb-item"===e.tagName.toLowerCase());if(e.forEach((t,i)=>{let s=t.querySelector('[slot="separator"]');null===s?t.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}),0===this.breadcrumbsElements.length)return this.items=[],void(this.visibleItems=0);await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.firstRender?this.firstRender=!1:this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){let e=this.getBoundingClientRect().width;console.log({availableSpace:e})}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return H`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};xi.styles=[wi],ge([we("slot")],xi.prototype,"defaultSlot",void 0),ge([we('slot[name="separator"]')],xi.prototype,"separatorSlot",void 0),ge([xe({selector:"craft-breadcrumb-item"})],xi.prototype,"breadcrumbsElements",void 0),ge([_e()],xi.prototype,"label",void 0),ge([ye()],xi.prototype,"items",void 0),ge([ye()],xi.prototype,"visibleItems",void 0),customElements.get("craft-breadcrumbs")||customElements.define("craft-breadcrumbs",xi);var Ei=r`
  :host {
    --_button-radius: var(--c-button-radius, var(--c-form-control-radius));
    display: flex;
    gap: var(--c-spacing-1px);
  }

  ::slotted(craft-button),
  ::slotted(craft-action-menu) {
    --c-button-radius-start-start: 0;
    --c-button-radius-start-end: 0;
    --c-button-radius-end-start: 0;
    --c-button-radius-end-end: 0;
  }

  ::slotted(craft-button:first-child),
  ::slotted(craft-action-menu:first-child) {
    --c-button-radius-start-start: var(--_button-radius);
    --c-button-radius-end-start: var(--_button-radius);
  }

  ::slotted(craft-button:last-child),
  ::slotted(craft-action-menu:last-child) {
    --c-button-radius-start-end: var(--_button-radius);
    --c-button-radius-end-end: var(--_button-radius);
  }
`,Ci=class extends pe{constructor(){super(),this.multiple=!1,this._handleClick=e=>{let t=e.composedPath().find(e=>e instanceof Element&&e.hasAttribute("value")&&e!==this);if(!t)return;if(this.multiple)return t.toggleAttribute("active"),this._syncChildren(),void this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{values:this._selectedValues()}}));let i=t.getAttribute("value")??"";i!==this.value&&(this.value=i,this._syncChildren(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:i}})))},this._internals=this.attachInternals()}firstUpdated(e){super.firstUpdated(e),this.name&&this._setupRadioMode()}updated(e){(e.has("name")||e.has("multiple"))&&(this.name?this._setupRadioMode():this._teardownRadioMode()),(e.has("value")||e.has("multiple"))&&this.name&&this._syncChildren()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}_setupRadioMode(){this.setAttribute("role",this.multiple?"group":"radiogroup"),this.removeEventListener("click",this._handleClick),this.addEventListener("click",this._handleClick),this._syncChildren()}_teardownRadioMode(){this.removeAttribute("role"),this.removeEventListener("click",this._handleClick)}_syncChildren(){if(this.querySelectorAll("craft-button").forEach(e=>{"button"!==e.getAttribute("type")&&e.setAttribute("type","button");let t=this.multiple?e.hasAttribute("active"):e.getAttribute("value")===this.value;this.multiple||e.toggleAttribute("active",t),e.setAttribute("aria-pressed",String(t))}),!this.multiple)return void this._internals.setFormValue(this.value??null);let e=new FormData;e.append(this.name,""),this._selectedValues().forEach(t=>{e.append(`${this.name}[]`,t)}),this._internals.setFormValue(e)}_selectedValues(){return Array.from(this.querySelectorAll("craft-button[active]"),e=>e.getAttribute("value")??"")}render(){return H`<slot @slotchange=${this._onSlotChange}></slot>`}_onSlotChange(){this.name&&this._syncChildren()}};Ci.styles=[Ei],Ci.formAssociated=!0,ge([_e({reflect:!0})],Ci.prototype,"name",void 0),ge([_e({reflect:!0})],Ci.prototype,"value",void 0),ge([_e({reflect:!0,type:Boolean})],Ci.prototype,"multiple",void 0),customElements.get("craft-button-group")||customElements.define("craft-button-group",Ci);var Si=r`
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
`;class Ai extends(jt(zt(pe))){static get properties(){return{invokerRelation:{type:String,attribute:"invoker-relation"}}}static get styles(){return[...super.styles,r`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted([slot='content']) {
          width: max-content;
        }
      `]}constructor(){super(),this.hasArrow=!1,this.invokerRelation="description"}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];_defineOverlayConfig(){const e=super._defineOverlayConfig(),t=qt({invokerRelation:this.invokerRelation});return{...e,...t,popperConfig:{...e.popperConfig||{},...t.popperConfig||{},modifiers:[...e.popperConfig?.modifiers||[],...t.popperConfig?.modifiers||[]]}}}}var Ni=new WeakMap,Ti=new WeakMap,Oi=new WeakSet,Li=class extends Ai{constructor(){super(),Ae(this,Oi),this.placement="top",this.trigger="hover focus",Ne(this,Ni,null),Ne(this,Ti,()=>{this.opened=!this.opened}),gt(this)}static get styles(){return[...super.styles,r`
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
        }
      `]}connectedCallback(){Se(Oi,this,Mi).call(this),super.connectedCallback()}get _overlayInvokerNode(){if(this.for){let e=this.getRootNode();return"function"==typeof e.getElementById?e.getElementById(this.for)??void 0:void 0}return super._overlayInvokerNode}_defineOverlayConfig(){let e={...super._defineOverlayConfig()};if($i.call(Se(Oi,this))||Ii.call(Se(Oi,this)))delete e.visibilityTriggerFunction;else{let{visibilityTriggerFunction:t}=qt({invokerRelation:this.invokerRelation,delayIn:0,delayOut:300});e.visibilityTriggerFunction=t}return{...e,popperConfig:{...e.popperConfig,placement:this.placement}}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),$i.call(Se(Oi,this))&&this._overlayInvokerNode?.addEventListener("click",Te(Ti,this))}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._overlayInvokerNode?.removeEventListener("click",Te(Ti,this))}updated(e){super.updated(e),e.has("for")&&void 0!==e.get("for")&&this._overlayCtrl&&this._overlayCtrl.updateConfig({invokerNode:this._overlayInvokerNode})}async show(){this.opened=!0,await this.updateComplete}async hide(){this.opened=!1,await this.updateComplete}};function Mi(){if(Te(Ni,this)?.isConnected)return;let e=document.createElement("div");e.slot="content",e.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||""===e.slot)),this.append(e),Oe(Ni,this,e)}function $i(){return this.trigger.split(" ").includes("click")}function Ii(){return this.trigger.split(" ").includes("manual")}ge([_e({reflect:!0})],Li.prototype,"for",void 0),ge([_e({reflect:!0})],Li.prototype,"placement",void 0),ge([_e({reflect:!0})],Li.prototype,"trigger",void 0),customElements.get("craft-tooltip")||customElements.define("craft-tooltip",Li);const Fi=bt(e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){!1===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){!0===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"disabled"===e&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),!1===this.disabled&&!0===this._requestedToBeDisabled&&this.__internalSetDisabled(!0))}click(){this.disabled||super.click()}}),Pi=bt(e=>class extends(Fi(e)){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),!1===this._requestedToBeDisabled&&null!=this.tabIndex&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),!0===this._requestedToBeDisabled&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"disabled"===e&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),"tabIndex"===e&&(this.__isUserSettingTabIndex&&null!=this.tabIndex&&(this.__restoreTabIndexTo=this.tabIndex),-1!==this.tabIndex&&!0===this._requestedToBeDisabled&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}}),Di=e=>" "===e.key||"Enter"===e.key,Vi=e=>" "===e.key;class Ri extends(Pi(pe)){static get properties(){return{active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return H` <div class="button-content"><slot></slot></div> `}static get styles(){return[r`
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
      `]}constructor(){super(),this.type="button",this.active=!1,this.__setupEvents()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","button")}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):null!==this.getAttribute("aria-disabled")&&this.removeAttribute("aria-disabled"))}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const e=()=>{this.active=!1,document.removeEventListener("mouseup",e),this.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e),this.addEventListener("mouseup",e)}__keydownHandler(e){if(this.active||!Di(e))return void(Vi(e)&&e.preventDefault());Vi(e)&&e.preventDefault(),this.active=!0;const t=e=>{Di(e)&&(this.active=!1,document.removeEventListener("keyup",t,!0))};document.addEventListener("keyup",t,!0)}__keyupHandler(e){if(Di(e)){if(e.target&&e.target!==this)return;this.click()}}}class Bi extends Ri{constructor(){super(),this.type="reset",this.__setupDelegationInConstructor(),this.__submitAndResetHelperButton=document.createElement("button"),this.__preventEventLeakage=this.__preventEventLeakage.bind(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setupSubmitAndResetHelperOnConnected()})}disconnectedCallback(){super.disconnectedCallback(),this._teardownSubmitAndResetHelperOnDisconnected()}__preventEventLeakage(e){e.target===this.__submitAndResetHelperButton&&e.stopImmediatePropagation()}_setupSubmitAndResetHelperOnConnected(){this.appendChild(this.__submitAndResetHelperButton),this._form=this.__submitAndResetHelperButton.form,this.removeChild(this.__submitAndResetHelperButton),this._form&&this._form.addEventListener("click",this.__preventEventLeakage)}_teardownSubmitAndResetHelperOnDisconnected(){this._form&&this._form.removeEventListener("click",this.__preventEventLeakage)}async __clickDelegationHandler(e){this._form||await this.updateComplete,"submit"!==this.type&&"reset"!==this.type||e.target!==this||!this._form||(this.__submitAndResetHelperButton.type=this.type,this._form.appendChild(this.__submitAndResetHelperButton),this.__submitAndResetHelperButton.click(),this._form.removeChild(this.__submitAndResetHelperButton))}__setupDelegationInConstructor(){this.addEventListener("click",this.__clickDelegationHandler,!0)}}const zi=new WeakMap;class ji extends Bi{get _nativeButtonNode(){return zi.get(this._form)?.helper||null}constructor(){super(),this.type="submit",this.__implicitSubmitHelperButton=null}_setupSubmitAndResetHelperOnConnected(){if(super._setupSubmitAndResetHelperOnConnected(),!this._form||"submit"!==this.type)return;const e=this._form;if(!zi.get(this._form)){const t=function(){const e=document.createElement("button");return e.tabIndex=-1,e.type="submit",e.setAttribute("aria-hidden","true"),e.style.cssText="\n    position: absolute;\n    top: 0;\n    left: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    overflow: hidden;\n    white-space: nowrap;\n    height: 1px;\n    width: 1px;\n    padding: 0; /* reset default agent styles */\n    border: 0; /* reset default agent styles */\n  ",e}(),i=document.createElement("div");i.appendChild(t),zi.set(this._form,{lionButtons:new Set,helper:t,observer:new MutationObserver(()=>{e.appendChild(i)})}),e.appendChild(i),zi.get(e)?.observer.observe(i,{childList:!0})}zi.get(e)?.lionButtons.add(this)}_teardownSubmitAndResetHelperOnDisconnected(){if(super._teardownSubmitAndResetHelperOnDisconnected(),this._form){const e=zi.get(this._form);e&&(e.lionButtons.delete(this),e.lionButtons.size||(this._form.contains(e.helper)&&e.helper.remove(),zi.get(this._form)?.observer.disconnect(),zi.delete(this._form)))}}}var Ui=r`
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
    padding-inline: var(
      --c-button-spacing-inline,
      var(--c-form-control-spacing-inline)
    );
    padding-block: 0;
    width: auto;
    min-height: var(--c-button-height, var(--c-size-control-md));
    min-width: var(--c-button-width, var(--c-size-control-md));
    white-space: nowrap;
    border-width: var(--c-button-border-width, 1px);
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

  :host(:focus:not([disabled])),
  :host(:focus-visible) {
    outline: var(--c-focus-outline-width) solid var(--_focus-outline-color);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host(:focus-visible) {
    --_focus-outline-color: var(--c-color-focus-outline);
  }

  :host(:not(:disabled):not(.loading):active),
  :host(.is-active:not(:disabled):not(.loading)) {
    color: var(--_active-color);
    background-color: var(--_active-background-color);
    box-shadow: inset 0 1px 3px var(--c-color-mix-active);
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
    min-width: 0;
    min-height: 0;
    padding-inline: 0;
  }

  :host([size~='small']) {
    padding-inline: var(--c-spacing-sm);
    min-width: var(--c-size-control-sm);
    min-height: var(--c-size-control-sm);
    font-size: 0.9em;
  }

  :host([size~='large']) {
    padding-inline: var(--c-spacing-lg);
    min-height: var(--c-size-control-lg);
    min-width: var(--c-size-control-lg);
  }

  :host([loading]),
  :host([action-state='loading']) {
    position: relative;

    .prefix,
    .label,
    .suffix {
      visibility: hidden;
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
    aspect-ratio: 1;
    padding-inline: 0;
    padding-block: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  :host([icon][size~='small']) {
    font-size: 0.8em;
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
  :host([variant~='danger']:active),
  :host([variant~='solid']:active) {
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

  .button-content {
    display: flex;
    align-items: center;
    gap: 0.25em;
    width: 100%;
  }

  .prefix,
  .suffix {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-content--start {
    justify-content: start;
  }

  .button-content--end {
    justify-content: end;
  }

  .a11y-error {
    position: relative;
    outline: 2px solid var(--c-color-danger-border-normal) !important;
    background-color: rgba(255, 0, 0, 0.1) !important;

    &:after {
      content: '!';
      position: absolute;
      display: inline-flex;
      font-size: calc(11rem / 16);
      padding: 0.125em 0.5em 0.25em;
      inset-block-start: -2px;
      inset-inline-start: 0;
      background: var(--c-color-danger-bg-emphasis);
      color: white;
      transform: translateX(-100%);
    }
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

    /* Same minimum click area as Lion's :host::before (WCAG 2.5.5), but as
       part of the anchor so clicks on it follow the link. */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-height: 44px;
      min-width: 44px;
      width: 100%;
      height: 100%;
    }
  }

  :host([href][size~='small']:not([disabled])) .link {
    padding-inline: var(--c-spacing-sm);
  }

  :host([href][size~='large']:not([disabled])) .link {
    padding-inline: var(--c-spacing-lg);
  }

  :host([href][size~='zero']:not([disabled])) .link,
  :host([href][icon]:not([disabled])) .link {
    padding-inline: 0;
  }
`,qi=r`
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
`,Hi=new WeakMap,Wi=class extends pe{constructor(...e){super(...e),this.label=ft("More Info"),this.icon="circle-info",this.disabled=!1,this.status="",Ne(this,Hi,new AbortController)}connectedCallback(){super.connectedCallback(),Te(Hi,this).signal.aborted&&Oe(Hi,this,new AbortController),this.id||(this.id=`info-icon-${Math.random().toString(36).slice(2,8)}`);let{signal:e}=Te(Hi,this);this.addEventListener("craft-show",()=>{Gi._&&Gi._!==this&&Gi._.renderRoot.querySelector("craft-tooltip")?.hide(),Gi._=this},{signal:e}),this.addEventListener("craft-after-show",()=>{this.status="",setTimeout(()=>{this.status="Some new status"},200)},{signal:e}),this.addEventListener("craft-after-hide",()=>{Gi._===this&&(Gi._=null),this.status=""},{signal:e})}disconnectedCallback(){Gi._===this&&(Gi._=null),Te(Hi,this).abort(),super.disconnectedCallback()}render(){return H`
      <div class="cp-info-icon">
        <craft-visually-hidden role="status">
          ${this.status}
        </craft-visually-hidden>

        <craft-button
          type="button"
          icon
          size="zero"
          variant="plain"
          id="${this.id}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${this.id}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};Wi.styles=r`
    :host {
      display: inline-flex;
    }
  `;var Gi={_:null};ge([_e()],Wi.prototype,"label",void 0),ge([_e()],Wi.prototype,"icon",void 0),ge([_e({type:Boolean,reflect:!0})],Wi.prototype,"disabled",void 0),ge([_e()],Wi.prototype,"id",void 0),ge([ye()],Wi.prototype,"status",void 0),ge([we("craft-tooltip")],Wi.prototype,"tooltip",void 0),customElements.get("craft-info-icon")||customElements.define("craft-info-icon",Wi);var Ki=class extends pe{constructor(...e){super(...e),this.debug=!1}render(){return H`<slot></slot>`}};Ki.styles=r`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,ge([_e({type:Boolean,reflect:!0})],Ki.prototype,"debug",void 0),customElements.get("craft-visually-hidden")||customElements.define("craft-visually-hidden",Ki);var Yi=class extends pe{constructor(...e){super(...e),this.visible=!0}show(){this.visible=!0,this.dispatchEvent(new CustomEvent("show"))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent("hide"))}focus(){this.wrapper?.focus()}render(){return H`
      <div
        tabindex="-1"
        class="${Ge({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot /></span>
      </div>
    `}};Yi.styles=[Si,qi],ge([_e({reflect:!0,type:Boolean})],Yi.prototype,"visible",void 0),ge([we(".wrapper")],Yi.prototype,"wrapper",void 0),customElements.get("craft-spinner")||customElements.define("craft-spinner",Yi);var Zi=Object.prototype.toString;function Ji(e){return"function"==typeof e||"[object Function]"===Zi.call(e)}var Qi=2**53-1;function Xi(e,t){var i=Array,s=Object(e);if(null==e)throw TypeError("Array.from requires an array-like object - not null or undefined");if(void 0!==t&&!Ji(t))throw TypeError("Array.from: when provided, the second argument must be a function");for(var n,o=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),Qi)}(s.length),r=Ji(i)?Object(new i(o)):Array(o),a=0;a<o;)n=s[a],r[a]=t?t(n,a):n,a+=1;return r.length=o,r}function es(e){return es="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},es(e)}function ts(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,is(s.key),s)}}function is(e){var t=function(e){if("object"!=es(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=es(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==es(t)?t:t+""}var ss=typeof Set>"u"?Set:function(e,t){return t&&ts(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),function(e,t,i){(t=is(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}(this,"items",void 0),this.items=t},[{key:"add",value:function(e){return!1===this.has(e)&&this.items.push(e),this}},{key:"clear",value:function(){this.items=[]}},{key:"delete",value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:"forEach",value:function(e){var t=this;this.items.forEach(function(i){e(i,i,t)})}},{key:"has",value:function(e){return-1!==this.items.indexOf(e)}},{key:"size",get:function(){return this.items.length}}]);function ns(e){return e.localName??e.tagName.toLowerCase()}var os={article:"article",aside:"complementary",button:"button",datalist:"listbox",dd:"definition",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",form:"form",footer:"contentinfo",h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:"banner",hr:"separator",html:"document",legend:"legend",li:"listitem",math:"math",main:"main",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:"region",summary:"button",table:"table",tbody:"rowgroup",textarea:"textbox",tfoot:"rowgroup",td:"cell",th:"columnheader",thead:"rowgroup",tr:"row",ul:"list"},rs={caption:new Set(["aria-label","aria-labelledby"]),code:new Set(["aria-label","aria-labelledby"]),deletion:new Set(["aria-label","aria-labelledby"]),emphasis:new Set(["aria-label","aria-labelledby"]),generic:new Set(["aria-label","aria-labelledby","aria-roledescription"]),insertion:new Set(["aria-label","aria-labelledby"]),none:new Set(["aria-label","aria-labelledby"]),paragraph:new Set(["aria-label","aria-labelledby"]),presentation:new Set(["aria-label","aria-labelledby"]),strong:new Set(["aria-label","aria-labelledby"]),subscript:new Set(["aria-label","aria-labelledby"]),superscript:new Set(["aria-label","aria-labelledby"])};function as(e,t){return function(e,t){return["aria-atomic","aria-busy","aria-controls","aria-current","aria-description","aria-describedby","aria-details","aria-dropeffect","aria-flowto","aria-grabbed","aria-hidden","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"].some(function(i){var s;return e.hasAttribute(i)&&!(null!=(s=rs[t])&&s.has(i))})}(e,t)}var ls=["presentation","none"];function cs(e){return null!==e&&e.nodeType===e.ELEMENT_NODE}function ds(e){return cs(e)&&"caption"===ns(e)}function hs(e){return cs(e)&&"input"===ns(e)}function us(e){return cs(e)&&"legend"===ns(e)}function ps(e){return function(e){return cs(e)&&void 0!==e.ownerSVGElement}(e)&&"title"===ns(e)}function ms(e,t){if(cs(e)&&e.hasAttribute(t)){var i=e.getAttribute(t).split(" "),s=e.getRootNode?e.getRootNode():e.ownerDocument;return i.map(function(e){return s.getElementById(e)}).filter(function(e){return null!==e})}return[]}function fs(e,t){return!!cs(e)&&-1!==t.indexOf(function(e){var t=function(e){var t=e.getAttribute("role");if(null!==t){var i=t.trim().split(" ")[0];if(i.length>0)return i}return null}(e);if(null===t||-1!==ls.indexOf(t)){var i=function(e){var t=os[ns(e)];if(void 0!==t)return t;switch(ns(e)){case"a":case"area":case"link":if(e.hasAttribute("href"))return"link";break;case"img":return""!==e.getAttribute("alt")||as(e,"img")?"img":"presentation";case"input":var i=e.type;switch(i){case"button":case"image":case"reset":case"submit":return"button";case"checkbox":case"radio":return i;case"range":return"slider";case"email":case"tel":case"text":case"url":return e.hasAttribute("list")?"combobox":"textbox";case"search":return e.hasAttribute("list")?"combobox":"searchbox";case"number":return"spinbutton";default:return null}case"select":return e.hasAttribute("multiple")||e.size>1?"listbox":"combobox"}return null}(e);if(-1===ls.indexOf(t||"")||as(e,i||""))return i}return t}(e))}function gs(e,t){if(!cs(e))return!1;if("range"===t)return fs(e,["meter","progressbar","scrollbar","slider","spinbutton"]);throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}function vs(e,t){var i=Xi(e.querySelectorAll(t));return ms(e,"aria-owns").forEach(function(e){i.push.apply(i,Xi(e.querySelectorAll(t)))}),i}function bs(e){var t=e.getPropertyValue("content");return/^["'].*["']$/.test(t)?t.slice(1,-1):""}function _s(e){var t=ns(e);return"button"===t||"input"===t&&"hidden"!==e.getAttribute("type")||"meter"===t||"output"===t||"progress"===t||"select"===t||"textarea"===t}function ys(e){if(_s(e))return e;var t=null;return e.childNodes.forEach(function(e){if(null===t&&cs(e)){var i=ys(e);null!==i&&(t=i)}}),t}function ks(e){if(void 0!==e.control)return e.control;var t=e.getAttribute("for");return null===t?ys(e):e.ownerDocument.getElementById(t)}function ws(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new ss,s=typeof Map>"u"?void 0:new Map,n=function(e){var t=(null===e.ownerDocument?e:e.ownerDocument).defaultView;if(null===t)throw TypeError("no window available");return t}(e),o=t.compute,r=void 0===o?"name":o,a=t.computedStyleSupportsPseudoElements,l=void 0===a?void 0!==t.getComputedStyle:a,c=t.getComputedStyle,d=void 0===c?n.getComputedStyle.bind(n):c,h=t.hidden,u=void 0!==h&&h,p=function(e,t){if(void 0!==t)throw Error("use uncachedGetComputedStyle directly for pseudo elements");if(void 0===s)return d(e);var i=s.get(e);if(i)return i;var n=d(e,t);return s.set(e,n),n};function m(e,t){var i="";if(cs(e)&&l&&(i=`${bs(d(e,"::before"))} ${i}`),(function(e){return cs(e)&&"slot"===ns(e)}(e)?function(e){var t=e.assignedNodes();return 0===t.length?Xi(e.childNodes):t}(e):Xi(e.childNodes).concat(ms(e,"aria-owns"))).forEach(function(e){var s=g(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),n="inline"===(cs(e)?p(e).getPropertyValue("display"):"inline")?"":" ";i+=`${n}${s}${n}`}),cs(e)&&l){var s=bs(d(e,"::after"));i=`${i} ${s}`}return i.trim()}function f(e,t){var s=e.getAttributeNode(t);return null===s||i.has(s)||""===s.value.trim()?null:(i.add(s),s.value)}function g(e,t){if(i.has(e))return"";if(!u&&function(e,t){if(!cs(e))return!1;if(e.hasAttribute("hidden")||"true"===e.getAttribute("aria-hidden"))return!0;var i=t(e);return"none"===i.getPropertyValue("display")||"hidden"===i.getPropertyValue("visibility")}(e,p)&&!t.isReferenced)return i.add(e),"";var s=cs(e)?e.getAttributeNode("aria-labelledby"):null,n=null===s||i.has(s)?[]:ms(e,"aria-labelledby");if("name"===r&&!t.isReferenced&&n.length>0)return i.add(s),n.map(function(e){return g(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(" ");var o=t.recursion&&function(e){return fs(e,["button","combobox","listbox","textbox"])||gs(e,"range")}(e)&&"name"===r;if(!o){var a=(cs(e)&&e.getAttribute("aria-label")||"").trim();if(""!==a&&"name"===r)return i.add(e),a;if(!function(e){return fs(e,ls)}(e)){var l=function(e){if(!cs(e))return null;if(function(e){return cs(e)&&"fieldset"===ns(e)}(e)){i.add(e);for(var t=Xi(e.childNodes),s=0;s<t.length;s+=1){var n=t[s];if(us(n))return g(n,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(function(e){return cs(e)&&"table"===ns(e)}(e)){i.add(e);for(var o=Xi(e.childNodes),r=0;r<o.length;r+=1){var a=o[r];if(ds(a))return g(a,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else{if(function(e){return cs(e)&&"svg"===ns(e)}(e)){i.add(e);for(var l=Xi(e.childNodes),c=0;c<l.length;c+=1){var d=l[c];if(ps(d))return d.textContent}return null}if("img"===ns(e)||"area"===ns(e)){var h=f(e,"alt");if(null!==h)return h}else if(function(e){return cs(e)&&"optgroup"===ns(e)}(e)){var u=f(e,"label");if(null!==u)return u}}if(hs(e)&&("button"===e.type||"submit"===e.type||"reset"===e.type)){var p=f(e,"value");if(null!==p)return p;if("submit"===e.type)return"Submit";if("reset"===e.type)return"Reset"}var v=function(e){var t=e.labels;return null===t?t:void 0!==t?Xi(t):_s(e)?Xi(e.ownerDocument.querySelectorAll("label")).filter(function(t){return ks(t)===e}):null}(e);if(null!==v&&0!==v.length)return i.add(e),Xi(v).map(function(e){return g(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(" ");if(hs(e)&&"image"===e.type){var b=f(e,"alt");if(null!==b)return b;var _=f(e,"title");return null===_?"Submit Query":_}if(fs(e,["button"])){var y=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(""!==y)return y}return null}(e);if(null!==l)return i.add(e),l}}if(fs(e,["menu"]))return i.add(e),"";if(o||t.isEmbeddedInLabel||t.isReferenced){if(fs(e,["combobox","listbox"])){i.add(e);var c=function(e){return function(e){return cs(e)&&"select"===ns(e)}(e)?e.selectedOptions||vs(e,"[selected]"):vs(e,'[aria-selected="true"]')}(e);return 0===c.length?hs(e)?e.value:"":Xi(c).map(function(e){return g(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(" ")}if(gs(e,"range"))return i.add(e),e.hasAttribute("aria-valuetext")?e.getAttribute("aria-valuetext"):e.hasAttribute("aria-valuenow")?e.getAttribute("aria-valuenow"):e.getAttribute("value")||"";if(fs(e,["textbox"]))return i.add(e),function(e){return hs(e)||function(e){return cs(e)&&"textarea"===ns(e)}(e)?e.value:e.textContent||""}(e)}if(function(e){return fs(e,["button","cell","checkbox","columnheader","gridcell","heading","label","legend","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowheader","switch","tab","tooltip","treeitem"])}(e)||cs(e)&&t.isReferenced||function(e){return ds(e)}(e)){var d=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(""!==d)return i.add(e),d}if(e.nodeType===e.TEXT_NODE)return i.add(e),e.textContent||"";if(t.recursion)return i.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var h=function(e){return cs(e)?f(e,"title"):null}(e);return null===h?(i.add(e),""):(i.add(e),h)}return function(e){return e.trim().replace(/\s\s+/g," ")}(g(e,{isEmbeddedInLabel:!1,isReferenced:"description"===r,recursion:!1}))}const xs="fill";var Es=new WeakMap,Cs=class extends ji{static get styles(){return[...super.styles,Si,Ui]}constructor(){super(),Ne(this,Es,async e=>{let t=ze(this.action);if(t&&!this.disabled){e.preventDefault(),"http"===t.type&&(this.loading=!0);try{await je(t,{trigger:this,sourceEvent:e})}finally{this.loading=!1}}}),this.variant=xs,this.inherit=!1,this.size="medium",this.active=!1,this.loading=!1,this.align="center",this.icon=null,this.action=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition="prefix",this._hasAccessibilityError=!1,this.linkHostStateApplied=!1,this.originalType=null,this.announcementTimer=null,this.type="button"}connectedCallback(){this.href&&!this.disabled&&(this.originalType=this.type,this.type="button",this.setAttribute("role","presentation"),this.linkHostStateApplied=!0),super.connectedCallback(),this.syncLinkHostState(),this.addEventListener("click",Te(Es,this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",Te(Es,this)),this.announcementTimer&&(clearTimeout(this.announcementTimer),this.announcementTimer=null)}updated(e){super.updated(e),(e.has("href")||e.has("disabled"))&&this.syncLinkHostState(),e.has("loading")&&this.loading&&this.announceLoading()}announceLoading(){this.liveRegion.textContent=ft("Loading"),this.announcementTimer&&clearTimeout(this.announcementTimer),this.announcementTimer=setTimeout(()=>{this.liveRegion.textContent=""},5e3)}syncLinkHostState(){this.isLink?(this.linkHostStateApplied||(this.originalType=this.type),this.setAttribute("role","presentation"),this.tabIndex=-1,this.type="button",this.linkHostStateApplied=!0):this.linkHostStateApplied&&(this.setAttribute("role","button"),this.type=this.originalType??"button",this.disabled||(this.tabIndex=0),this.linkHostStateApplied=!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll("craft-icon, craft-spinner");if(await Promise.all(Array.from(t).map(e=>e.updateComplete)),!this.accessibleName){let e=this.isLink?this.shadowRoot?.querySelector("a.link")??this:this;this.accessibleName=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(e){return fs(e,["caption","code","deletion","emphasis","generic","insertion","none","paragraph","presentation","strong","subscript","superscript"])}(e)?"":ws(e,t)}(e)}this._hasAccessibilityError=!this.accessibleName||""===this.accessibleName.trim()}get isLink(){return!!this.href&&!this.disabled}get computedRel(){if("_blank"===this.target){let e=new Set((this.rel??"").split(/\s+/).filter(Boolean));return e.add("noopener"),Array.from(e).join(" ")}return this.rel}render(){let e=H`
      <div
        class="${Ge({"button-content":!0,"button-content--start":"start"===this.align,"button-content--end":"end"===this.align,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&"prefix"===this.iconPosition?H`<craft-icon name="${this.icon}"></craft-icon>`:Y}
        </slot>
        <slot class="label" part="label"></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&"suffix"===this.iconPosition?H`<craft-icon name="${this.icon}"></craft-icon>`:Y}
        </slot>
      </div>
      ${this.loading?H`<craft-spinner part="spinner"></craft-spinner>`:Y}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;return this.isLink?H`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${this.target??Y}"
          rel="${this.computedRel??Y}"
          download="${this.download??Y}"
          >${e}</a
        >
      `:e}};ge([_e({attribute:"accessible-name"})],Cs.prototype,"accessibleName",void 0),ge([_e({reflect:!0})],Cs.prototype,"variant",void 0),ge([_e({reflect:!0,type:Boolean})],Cs.prototype,"inherit",void 0),ge([_e({reflect:!0})],Cs.prototype,"size",void 0),ge([_e({reflect:!0})],Cs.prototype,"value",void 0),ge([_e({reflect:!0,type:Boolean})],Cs.prototype,"active",void 0),ge([_e({reflect:!0,type:Boolean})],Cs.prototype,"loading",void 0),ge([_e()],Cs.prototype,"align",void 0),ge([_e()],Cs.prototype,"icon",void 0),ge([_e({type:Object})],Cs.prototype,"action",void 0),ge([_e({reflect:!0})],Cs.prototype,"href",void 0),ge([_e()],Cs.prototype,"target",void 0),ge([_e()],Cs.prototype,"rel",void 0),ge([_e()],Cs.prototype,"download",void 0),ge([_e({attribute:"icon-position"})],Cs.prototype,"iconPosition",void 0),ge([we("[data-live-region]")],Cs.prototype,"liveRegion",void 0),ge([ye()],Cs.prototype,"_hasAccessibilityError",void 0),customElements.get("craft-button")||customElements.define("craft-button",Cs);var Ss=r`
  :host {
    --c-color-fill-loud: var(--c-color-neutral-fill-loud);
    --c-color-fill-normal: var(--c-color-neutral-fill-normal);
    --c-color-fill-quiet: var(--c-color-neutral-fill-quiet);
    --c-color-border-loud: var(--c-color-neutral-border-loud);
    --c-color-border-normal: var(--c-color-neutral-border-normal);
    --c-color-border-quiet: var(--c-color-neutral-border-quiet);
    --c-color-on-loud: var(--c-color-neutral-on-loud);
    --c-color-on-normal: var(--c-color-neutral-on-normal);
    --c-color-on-quiet: var(--c-color-neutral-on-quiet);
    --_radius: var(--c-callout-radius, var(--c-radius-md));
    display: flex;
    gap: var(--c-spacing-sm);
    align-items: start;
    padding: var(--c-spacing-sm) var(--c-spacing-md);
    border: 1px solid transparent;
  }

  .callout__body {
    display: grid;
    gap: var(--c-spacing-sm);
  }

  .callout__title {
    font-weight: bold;
  }

  .callout__icon {
    width: auto;
    height: 1lh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ::slotted(code) {
    font-size: 0.9em;
    display: inline-flex;
    padding: 0 var(--c-spacing-sm);
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

  :host([rounded~='all']) {
    border-radius: var(--_radius);
  }

  :host([rounded~='none']) {
    border-radius: 0;
  }

  :host([rounded~='start']) {
    border-start-start-radius: var(--_radius);
    border-start-end-radius: var(--_radius);
  }

  :host([rounded~='end']) {
    border-end-start-radius: var(--_radius);
    border-end-end-radius: var(--_radius);
  }

  :host([appearance~='solid']) {
    --c-text-link: var(--c-color-on-loud);
    background-color: var(--c-color-fill-loud);
    color: var(--c-color-on-loud);
    border-color: var(--c-color-border-loud);
  }

  :host([appearance~='fill']) {
    --c-text-link: var(--c-color-on-normal);
    border-color: transparent;
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline-fill']) {
    --c-text-link: var(--c-color-on-normal);
    border-color: var(--c-color-border-normal);
    background-color: var(--c-color-fill-normal);
    color: var(--c-color-on-normal);
  }

  :host([appearance~='outline']) {
    --c-text-link: var(--c-color-on-quiet);
    border-color: var(--c-color-border-quiet);
    background-color: transparent;
    color: var(--c-color-on-quiet);
  }

  :host([appearance~='plain']) {
    --c-text-link: var(--c-color-on-quiet);
    background-color: transparent;
    border-color: transparent;
    color: var(--c-color-on-quiet);
  }
`,As=class extends pe{constructor(...e){super(...e),this.variant=Ue.Neutral,this.appearance=ni.OutlineFill,this.title="",this.icon=null,this.hideIcon=!1,this.rounded="all",this.inline=!1}getDefaultIcon(){switch(this.variant){case Ue.Info:return"lightbulb";case Ue.Success:return"circle-check";case Ue.Warning:return"circle-exclamation";case Ue.Danger:return"triangle-exclamation";default:return null}}render(){return H`
      ${this.hideIcon?Y:H`<slot name="icon" class="callout__icon">
            <craft-icon
              name="${this.icon??this.getDefaultIcon()}"
              style="font-size: 0.9em"
            ></craft-icon>
          </slot>`}
      <div class="callout__body">
        <slot name="title" class="callout__title">${this.title}</slot>
        <div class="callout__description">
          <slot></slot>
        </div>
      </div>
    `}};As.styles=[fe,Ss],ge([_e({reflect:!0})],As.prototype,"variant",void 0),ge([_e({reflect:!0})],As.prototype,"appearance",void 0),ge([_e()],As.prototype,"title",void 0),ge([_e()],As.prototype,"icon",void 0),ge([_e({type:Boolean,attribute:"hide-icon"})],As.prototype,"hideIcon",void 0),ge([_e({reflect:!0})],As.prototype,"rounded",void 0),ge([_e({reflect:!0,type:Boolean})],As.prototype,"inline",void 0),customElements.get("craft-callout")||customElements.define("craft-callout",As);var Ns=r`
  :host {
    display: block;
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
    }
  }

  .card {
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    background-color: color-mix(
      var(--c-color-fill-quiet, var(--c-color-neutral-fill-quiet)),
      transparent 70%
    );
    border: 1px solid
      var(--c-color-border-quiet, var(--c-color-neutral-border-quiet));
    border-radius: var(--c-card-radius, var(--c-radius-md));
    box-shadow: var(--c-card-shadow, var(--c-shadow-sm));
    position: relative;
    height: 100%;
  }

  .card__header,
  .card__footer {
    font-size: 0.875em;
    padding-block: var(--c-card-padding-block, var(--c-spacing-sm));
    padding-inline-start: var(--c-card-padding-inline, var(--c-spacing-md));
    padding-inline-end: var(--c-card-padding-inline, var(--c-spacing-sm));
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

  .card__header {
    min-height: 1lh;
    border-start-start-radius: var(--c-card-radius, var(--c-radius-md));
    border-start-end-radius: var(--c-card-radius, var(--c-radius-md));
    border-block-end-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card__actions {
    display: flex;
    gap: var(--c-spacing-sm);
    align-self: end;
  }

  .card-body {
    gap: var(--c-spacing-md);
    padding-inline: var(--c-card-padding-inline, var(--c-spacing-md));
    padding-block: var(--c-card-padding-block, var(--c-spacing-md));
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

  .card-body__main {
    grid-area: main;
  }

  .card-body__thumbnail {
    grid-area: thumbnail;
  }
`,Ts=class extends pe{constructor(...e){super(...e),this.label="",this.active=!1,this.showThumb=!0,this.thumbAlignment="start",this._hasThumbnail=!1,this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence())}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["slot"]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect()}_syncSlotPresence(){this._hasSlottedHeader=!!this.querySelector('[slot="header"]')||!!this.querySelector('[slot="label"]')||!!this.querySelector('[slot="actions"]'),this._hasSlottedFooter=!!this.querySelector('[slot="footer"]'),this._hasThumbnail=!!this.querySelector('[slot="thumbnail"]')}_handleThumbnailSlotChange(e){let t=e.target;this._hasThumbnail=t.assignedElements({flatten:!0}).length>0}render(){let e=!!this.label||this._hasSlottedHeader,t=this._hasSlottedFooter,i=this.showThumb&&this._hasThumbnail;return H`
      <div
        class="${Ge({card:!0,"card--has-thumbnail":i})}"
      >
        ${e?H`<div class="card__header">
              <slot name="header">
                <slot name="label" class="card__label" part="label"
                  >${this.label}</slot
                >
                <slot name="actions" class="card__actions"></slot>
              </slot>
            </div>`:Y}

        <div
          class="${Ge({"card-body":!0,"card-body--thumb-start":i&&"start"===this.thumbAlignment,"card-body--thumb-end":i&&"end"===this.thumbAlignment})}"
        >
          <div class="card-body__thumb" ?hidden="${!i}">
            <slot
              name="thumbnail"
              @slotchange="${this._handleThumbnailSlotChange}"
            ></slot>
          </div>

          <div class="card-body__main">
            <slot></slot>
          </div>
        </div>

        ${t?H`<div class="card__footer"><slot name="footer"></slot></div>`:Y}
      </div>
    `}};Ts.styles=[Ns],ge([_e()],Ts.prototype,"label",void 0),ge([_e({type:Boolean,reflect:!0})],Ts.prototype,"active",void 0),ge([_e({attribute:"show-thumb",type:Boolean})],Ts.prototype,"showThumb",void 0),ge([_e({attribute:"thumb-alignment"})],Ts.prototype,"thumbAlignment",void 0),ge([ye()],Ts.prototype,"_hasThumbnail",void 0),ge([ye()],Ts.prototype,"_hasSlottedHeader",void 0),ge([ye()],Ts.prototype,"_hasSlottedFooter",void 0),customElements.get("craft-card")||customElements.define("craft-card",Ts);const Os=r`
  --_border-width: var(
    --c-input-border-width,
    var(--c-form-control-border-width)
  );
  font: inherit;
  color: var(--c-input-text, var(--c-text-default));
  position: relative;
  min-height: calc(
    var(--c-input-height, var(--c-size-control-md)) - 2 * var(--_border-width)
  );
  border-width: var(--_border-width);
  border-style: var(--c-input-border-style, var(--c-form-control-border-style));
  border-color: var(--c-input-border-color, var(--c-form-control-border-color));
  border-radius: var(--c-input-radius, var(--c-radius-sm));
  padding-block: 0;
  width: 100%;
  flex: 1 1 auto;
  background-color: var(--c-input-fill, var(--c-form-control-fill));
  box-shadow: var(--c-input-shadow);
  overflow: clip;

  /* Detect mobile devices and up the font size of inputs to avoid zoom on focus */
  @media (pointer: none), (pointer: coarse) {
    font-size: 1rem;
  }
`,Ls=r`
  :host(:not([label-sr-only]))
    .form-field__group-one
    .form-field__label
    slot:not(:empty) {
    margin-block-end: var(--c-spacing-sm);
  }

  :host([has-feedback-for='error']) {
    color: var(--c-color-danger-on-normal);

    ::slotted([slot='input']) {
      border-color: var(--c-color-danger-border-loud);
    }
  }

  ::slotted(label) {
    line-height: 1;
    font-weight: bold;
    font-size: var(--text-sm);
  }

  .form-field__help-text {
    font-size: 1em;
    color: var(--c-text-quiet);
  }

  ::slotted([slot='after']) {
    margin-block-start: var(--c-spacing-sm);
  }
`,Ms=r`
  ${Ls}

  :host([monospace]) .input-group__container {
    font-family: var(--c-font-mono);
    font-size: 0.9em;
  }

  ::slotted([slot='input']) {
    font: inherit;
    padding-block: 0;
    border: none;
    appearance: none;
    padding-inline: var(--c-input-spacing-inline);
    background-color: transparent;
    width: 100%;
  }

  .input-group__container {
    ${Os}
  }

  .input-group__prefix,
  .input-group__suffix {
    padding-inline: var(--c-input-spacing-inline);
    display: grid;
    place-items: center;
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
`,{I:$s}=ce,Is=()=>document.createComment(""),Fs=(e,t,i)=>{const s=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=s.insertBefore(Is(),n),o=s.insertBefore(Is(),n);i=new $s(t,o,e,e.options)}else{const t=i._$AB.nextSibling,o=i._$AM,r=o!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==o._$AU&&i._$AP(t)}if(t!==n||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,n),e=t}}}return i},Ps=(e,t,i=e)=>(e._$AI(t,i),e),Ds={},Vs=e=>{e._$AR(),e._$AA.remove()};function Rs(e,t){let i=!1;Array.from(e.childNodes).forEach(e=>{const s=e.hasAttribute&&e.hasAttribute("slot");e.nodeType===Node.COMMENT_NODE&&!i&&(i=e.textContent.includes("_start_slot_")),i?e.textContent.includes("_end_slot_")&&(i=!1):s||t.appendChild(e)})}function Bs(e){return e instanceof Node?"node":(e=>void 0!==e?._$litType$)(e)?"template-result":!Array.isArray(e)&&"object"==typeof e&&"template"in e?"slot-rerender-object":null}const zs=bt(e=>class extends e{get slots(){return{}}constructor(){super(),this.__renderMetaPerSlot=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(e){const t=this.slots[e]();this.__renderTemplateInScopedContext({renderAsDirectHostChild:t.renderAsDirectHostChild,template:t.template,slotName:e}),t.afterRender?.()}update(e){super.update(e);for(const e of this.__slotsThatNeedRerender)this.__rerenderSlot(e)}__renderTemplateInScopedContext({template:e,slotName:t,renderAsDirectHostChild:i}){if(!this.__renderMetaPerSlot.has(t)){const s=!!ShadowRoot.prototype.createElement;Boolean(this.shadowRoot)||console.error("[SlotMixin] No shadowRoot was found");const n=(s?this.shadowRoot:document).createElement("div"),o=document.createComment(`_start_slot_${t}_`),r=document.createComment(`_end_slot_${t}_`);n.appendChild(o),n.appendChild(r);const{creationScope:a,host:l}=this.renderOptions;if(he(e,n,{renderBefore:r,creationScope:a,host:l}),i){const e=Array.from(n.childNodes);this.__appendNodes({nodes:e,renderParent:this,slotName:t})}else n.slot=t,this.appendChild(n);return void this.__renderMetaPerSlot.set(t,{renderTargetThatRespectsShadowRootScoping:n,renderBefore:r})}const{renderBefore:s,renderTargetThatRespectsShadowRootScoping:n}=this.__renderMetaPerSlot.get(t),o=i?this:n,{creationScope:r,host:a}=this.renderOptions;he(e,o,{creationScope:r,host:a,renderBefore:s}),i&&s.previousElementSibling&&!s.previousElementSibling.slot&&(s.previousElementSibling.slot=t)}__appendNodes({nodes:e,renderParent:t=this,slotName:i}){for(const s of e)s instanceof Element&&i&&""!==i&&s.setAttribute("slot",i),t.appendChild(s)}__initSlots(e){for(const t of e){if(this.__slotsProvidedByUserOnFirstConnected.has(t))continue;const e=this.slots[t]();if(void 0!==e)switch(this.__isConnectedSlotMixin||this.__privateSlots.add(t),Bs(e)){case"template-result":this.__renderTemplateInScopedContext({template:e,renderAsDirectHostChild:!0,slotName:t});break;case"node":this.__appendNodes({nodes:[e],renderParent:this,slotName:t});break;case"slot-rerender-object":this.__slotsThatNeedRerender.add(t),e.firstRenderOnConnected&&this.__rerenderSlot(t);break;default:throw new Error(`Slot "${t}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.\n              You provided: ${e}`)}}}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;const e=Object.keys(this.slots);for(const t of e)(""===t?Array.from(this.children).find(e=>!e.hasAttribute("slot")):Array.from(this.children).find(e=>e.slot===t))&&this.__slotsProvidedByUserOnFirstConnected.add(t);this.__initSlots(e),this.__isConnectedSlotMixin=!0}_isPrivateSlot(e){return this.__privateSlots.has(e)}}),js=[Node.DOCUMENT_POSITION_PRECEDING,Node.DOCUMENT_POSITION_CONTAINS,Node.DOCUMENT_POSITION_CONTAINS|Node.DOCUMENT_POSITION_PRECEDING];function Us(e,{reverse:t}={}){const i=e.filter(e=>e);return i.sort((e,t)=>{const i=e.compareDocumentPosition(t);return js.includes(i)?1:-1}),t&&i.reverse(),i}class qs{constructor(e){this.type="unparseable",this.viewValue=e}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}const Hs=bt(e=>class extends e{constructor(){super(),this.name="",this._parentFormGroup=void 0,this.allowCrossRootRegistration=!1}get name(){return this.__name||""}set name(e){const t=this.name;this.__name=e.toString(),this.requestUpdate("name",t)}static get properties(){return{name:{type:String,reflect:!0},allowCrossRootRegistration:{type:Boolean,attribute:"allow-cross-root-registration"}}}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0,composed:Boolean(this.allowCrossRootRegistration)}))}disconnectedCallback(){super.disconnectedCallback(),this.__unregisterFormElement()}__unregisterFormElement(){this._parentFormGroup&&this._parentFormGroup.removeFormElement(this)}}),Ws=bt(e=>class extends(Hs(Fi(zs(e)))){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},label:String,labelSrOnly:{type:Boolean,attribute:"label-sr-only",reflect:!0},helpText:{type:String,attribute:"help-text"},modelValue:{attribute:!1},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){return this.__label??(this._labelNode?.textContent||"")}set label(e){const t=this.label;this.__label=e,this.requestUpdate("label",t)}get helpText(){return this.__helpText??(this._helpTextNode?.textContent||"")}set helpText(e){const t=this.helpText;this.__helpText=e,this.requestUpdate("helpText",t)}get fieldName(){return this.__fieldName||this.label||this.name||""}set fieldName(e){this.__fieldName=e}get slots(){return{...super.slots,label:()=>{const e=document.createElement("label");return e.textContent=this.label,e},"help-text":()=>{const e=document.createElement("div");return e.textContent=this.helpText,e}}}get _inputNode(){return this.__getDirectSlotChild("input")}get _labelNode(){return this.__getDirectSlotChild("label")}get _helpTextNode(){return this.__getDirectSlotChild("help-text")}get _feedbackNode(){return this.__getDirectSlotChild("feedback")}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];constructor(){super(),this.readOnly=!1,this.labelSrOnly=!1,this._inputId=Zt(this.localName),this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole="child",this._isRepropagationEndpoint=!1,this.addEventListener("model-value-changed",this.__repropagateChildrenValues),this._onLabelClick=this._onLabelClick.bind(this)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent(),this._labelNode&&this._labelNode.addEventListener("click",this._onLabelClick)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._onLabelClick)}updated(e){super.updated(e),e.has("disabled")&&this._inputNode?.setAttribute("aria-disabled",`${Boolean(this.disabled)}`),e.has("_ariaLabelledNodes")&&this.__reflectAriaAttr("aria-labelledby",this._ariaLabelledNodes,this.__reorderAriaLabelledNodes),e.has("_ariaDescribedNodes")&&this.__reflectAriaAttr("aria-describedby",this._ariaDescribedNodes,this.__reorderAriaDescribedNodes),e.has("label")&&void 0!==this.__label&&this._labelNode&&(this._labelNode.textContent=this.label),e.has("helpText")&&void 0!==this.__helpText&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),e.has("name")&&this.dispatchEvent(new CustomEvent("form-element-name-changed",{detail:{oldName:e.get("name"),newName:this.name},bubbles:!0}))}_triggerInitialModelValueChangedEvent(){this._dispatchInitialModelValueChangedEvent()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:e,_labelNode:t,_helpTextNode:i,_feedbackNode:s}=this;e&&(e.id=e.id||this._inputId),t&&(t.setAttribute("for",this._inputId),this.addToAriaLabelledBy(t,{idPrefix:"label"})),i&&this.addToAriaDescribedBy(i,{idPrefix:"help-text"}),s&&(this.addEventListener("focusin",()=>{s.setAttribute("aria-live","polite")}),this.addEventListener("focusout",()=>{s.setAttribute("aria-live","assertive")}),this.addToAriaDescribedBy(s,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(e=["prefix","suffix","before","after"]){e.forEach(e=>{const t=this.__getDirectSlotChild(e);t&&(t.hasAttribute("data-label")&&this.addToAriaLabelledBy(t,{idPrefix:e}),t.hasAttribute("data-description")&&this.addToAriaDescribedBy(t,{idPrefix:e}))})}__reflectAriaAttr(e,t,i){if(this._inputNode){if(i){const e=t.filter(e=>this.contains(e)),i=t.filter(e=>!this.contains(e)),s=[...Us(e.map(e=>e.assignedSlot||e))],n=[];s.forEach(t=>{e.forEach(e=>{t.name===e.slot&&n.push(e)})}),t=[...n,...i]}const s=t.map(e=>e.id).join(" ");this._inputNode.setAttribute(e,s)}}render(){return H`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return H` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return H` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return H`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return H`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return H`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return H`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(e=>"prefix"===e.slot)?H`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:Y}_inputGroupInputTemplate(){return H`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(e=>"suffix"===e.slot)?H`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:Y}_inputGroupAfterTemplate(){return H`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return H`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(e=this.modelValue){let t=e;if(this.modelValue instanceof qs&&(t=this.modelValue.viewValue),"object"==typeof t&&null!==t&&!(t instanceof Date))return!Object.keys(t).length;const i="number"==typeof t&&(0===t||Number.isNaN(t));return!(t||i||"boolean"==typeof t&&!1===t)}static get styles(){return[r`
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
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(e,{idPrefix:t="",reorder:i=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaLabelledNodes.includes(e)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,e],this.__reorderAriaLabelledNodes=Boolean(i))}removeFromAriaLabelledBy(e){this._ariaLabelledNodes.includes(e)&&(this._ariaLabelledNodes.splice(this._ariaLabelledNodes.indexOf(e),1),this._ariaLabelledNodes=[...this._ariaLabelledNodes],this.__reorderAriaLabelledNodes=!1)}addToAriaDescribedBy(e,{idPrefix:t="",reorder:i=!0}={}){e.id=e.id||`${t}-${this._inputId}`,this._ariaDescribedNodes.includes(e)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,e],this.__reorderAriaDescribedNodes=Boolean(i))}removeFromAriaDescribedBy(e){this._ariaDescribedNodes.includes(e)&&(this._ariaDescribedNodes.splice(this._ariaDescribedNodes.indexOf(e),1),this._ariaDescribedNodes=[...this._ariaDescribedNodes],this.__reorderAriaLabelledNodes=!1)}__getDirectSlotChild(e){return Array.from(this.children).find(t=>t.slot===e)}_dispatchInitialModelValueChangedEvent(){"child"!==this._repropagationRole&&(this.__repropagateChildrenInitialized=!0,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],initialize:!0,isTriggeredByUser:!1}})))}_onBeforeRepropagateChildrenValues(e){}__repropagateChildrenValues(e){this._onBeforeRepropagateChildrenValues(e);const t=e.detail&&e.detail.element||e.target,i=this._isRepropagationEndpoint||"choice-group"===this._repropagationRole;if(t===this)return;e.stopImmediatePropagation();const s="child"!==this._repropagationRole&&!this.__repropagateChildrenInitialized,n=e.detail&&e.detail.initialize;if(s||n)return;if(!this._repropagationCondition(t))return;let o=[];i||(o=e.detail&&e.detail.formPath||[t]);const r=[...o,this];this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:r,isTriggeredByUser:Boolean(e.detail?.isTriggeredByUser)}}))}_repropagationCondition(e){return Boolean(e)}_onLabelClick(){}}),Gs=bt(e=>class extends(Ws(e)){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"touched"===e&&this.touched!==t&&this._onTouchedChanged(),"modelValue"===e&&(this.filled=!this._isEmpty()),"dirty"===e&&this.dirty!==t&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new Event("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new Event("dirty-changed",{bubbles:!0,composed:!0}))}_showFeedbackConditionFor(e,t){return t.touched&&t.dirty||t.prefilled||t.submitted}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,submitted:this.submitted,touched:this.touched,dirty:this.dirty,filled:this.filled,prefilled:this.prefilled}}});class Ks extends Array{_keys(){return Object.keys(this).filter(e=>Number.isNaN(Number(e)))}}const Ys=bt(e=>class extends(Hs(e)){static get properties(){return{_isFormOrFieldset:{type:Boolean}}}constructor(){super(),this.formElements=new Ks,this._isFormOrFieldset=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this._onRequestToChangeFormElementName=this._onRequestToChangeFormElementName.bind(this),this.addEventListener("form-element-register",this._onRequestToAddFormElement),this.addEventListener("form-element-name-changed",this._onRequestToChangeFormElementName),this.initComplete=new Promise((e,t)=>{this.__resolveInitComplete=e,this.__rejectInitComplete=t}),this.registrationComplete=new Promise((e,t)=>{this.__resolveRegistrationComplete=e,this.__rejectRegistrationComplete=t}),this.registrationComplete.done=!1,this.registrationComplete.then(()=>{this.registrationComplete.done=!0,this.__resolveInitComplete(void 0)},()=>{throw this.registrationComplete.done=!0,this.__rejectInitComplete(void 0),new Error("Registration could not finish. Please use await el.registrationComplete;")})}connectedCallback(){super.connectedCallback(),this._completeRegistration()}_completeRegistration(){Promise.resolve().then(()=>this.__resolveRegistrationComplete(void 0))}disconnectedCallback(){super.disconnectedCallback(),!1===this.registrationComplete.done&&Promise.resolve().then(()=>{Promise.resolve().then(()=>{this.__rejectRegistrationComplete()})})}isRegisteredFormElement(e){return this.formElements.some(t=>t===e)}addFormElement(e,t){if(e._parentFormGroup=this,t>=0?this.formElements.splice(t,0,e):this.formElements.push(e),this._isFormOrFieldset){const{name:i}=e;if(i===this.name)throw console.info("Error Node:",e),new TypeError(`You can not have the same name "${i}" as your parent`);if("[]"===i.substr(-2))Array.isArray(this.formElements[i])||(this.formElements[i]=new Ks),t>0?this.formElements[i].splice(t,0,e):this.formElements[i].push(e);else{if(this.formElements[i])throw console.info("Error Node:",e),new TypeError(`Name "${i}" is already registered - if you want an array add [] to the end`);this.formElements[i]=e}}}removeFormElement(e){const t=this.formElements.indexOf(e);if(t>-1&&this.formElements.splice(t,1),this._isFormOrFieldset){const{name:t}=e;if("[]"===t.substr(-2)&&this.formElements[t]){const i=this.formElements[t].indexOf(e);i>-1&&this.formElements[t].splice(i,1)}else this.formElements[t]&&delete this.formElements[t]}}_onRequestToAddFormElement(e){const t=e.detail.element;if(t===this)return;if(this.isRegisteredFormElement(t))return;e.stopPropagation();let i=-1;if(this.formElements&&Array.isArray(this.formElements))for(const[e,s]of this.formElements.entries())if(!(s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)){i=e;break}this.addFormElement(t,i)}_onRequestToChangeFormElementName(e){const t=this.formElements[e.detail.oldName];t&&(this.formElements[e.detail.newName]=t,delete this.formElements[e.detail.oldName])}_onRequestToRemoveFormElement(e){const t=e.detail.element;t!==this&&this.isRegisteredFormElement(t)&&(e.stopPropagation(),this.removeFormElement(t))}});function Zs(e,t){return e(t={exports:{}},t.exports),t.exports}var Js="long",Qs="short",Xs="narrow",en="numeric",tn="2-digit",sn={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:en,day:en,year:tn},medium:{month:Qs,day:en,year:en},long:{month:Js,day:en,year:en},full:{month:Js,day:en,year:en,weekday:Js},default:{month:Qs,day:en,year:en}},time:{short:{hour:en,minute:en},medium:{hour:en,minute:en,second:en},long:{hour:en,minute:en,second:en,timeZoneName:Qs},full:{hour:en,minute:en,second:en,timeZoneName:Qs},default:{hour:en,minute:en,second:en}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(e){if(e){var t={},i=e.match(/\b[A-Z]{3}\b/i),s=e.replace(/[^¤]/g,"").length;if(!s&&i&&(s=1),s?(t.style="currency",t.currencyDisplay=1===s?"symbol":2===s?"code":"name",t.currency=i?i[0].toUpperCase():"USD"):e.indexOf("%")>=0&&(t.style="percent"),!/[@#0]/.test(e))return t.style?t:void 0;if(t.useGrouping=e.indexOf(",")>=0,/E\+?[@#0]+/i.test(e)||e.indexOf("@")>=0){var n=e.replace(/E\+?[@#0]+|[^@#0]/gi,"");t.minimumSignificantDigits=Math.min(Math.max(n.replace(/[^@0]/g,"").length,1),21),t.maximumSignificantDigits=Math.min(Math.max(n.length,1),21)}else{for(var o=e.replace(/[^#0.]/g,"").split("."),r=o[0],a=r.length-1;"0"===r[a];)--a;t.minimumIntegerDigits=Math.min(Math.max(r.length-1-a,1),21);var l=o[1]||"";for(a=0;"0"===l[a];)++a;for(t.minimumFractionDigits=Math.min(Math.max(a,0),20);"#"===l[a];)++a;t.maximumFractionDigits=Math.min(Math.max(a,0),20)}return t}},parseDatePattern:function(e){if(e){for(var t={},i=0;i<e.length;){for(var s=e[i],n=1;e[++i]===s;)++n;switch(s){case"G":t.era=5===n?Xs:4===n?Js:Qs;break;case"y":case"Y":t.year=2===n?tn:en;break;case"M":case"L":n=Math.min(Math.max(n-1,0),4),t.month=[en,tn,Qs,Js,Xs][n];break;case"E":case"e":case"c":t.weekday=5===n?Xs:4===n?Js:Qs;break;case"d":case"D":t.day=2===n?tn:en;break;case"h":case"K":t.hour12=!0,t.hour=2===n?tn:en;break;case"H":case"k":t.hour12=!1,t.hour=2===n?tn:en;break;case"m":t.minute=2===n?tn:en;break;case"s":case"S":t.second=2===n?tn:en;break;case"z":case"Z":case"v":case"V":t.timeZoneName=1===n?Qs:Js}}return Object.keys(t).length?t:void 0}}},nn="zero",on="one",rn="two",an="few",ln="many",cn="other",dn=[function(e){return 1===+e?on:cn},function(e){var t=+e;return 0<=t&&t<=1?on:cn},function(e){return 0===Math.floor(Math.abs(+e))||1===+e?on:cn},function(e){var t=+e;return 0===t?nn:1===t?on:2===t?rn:3<=t%100&&t%100<=10?an:11<=t%100&&t%100<=99?ln:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 1===t&&0===i?on:cn},function(e){var t=+e;return t%10==1&&t%100!=11?on:2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?an:t%10==0||5<=t%10&&t%10<=9||11<=t%100&&t%100<=14?ln:cn},function(e){var t=+e;return t%10==1&&t%100!=11&&t%100!=71&&t%100!=91?on:t%10==2&&t%100!=12&&t%100!=72&&t%100!=92?rn:(3<=t%10&&t%10<=4||t%10==9)&&(t%100<10||19<t%100)&&(t%100<70||79<t%100)&&(t%100<90||99<t%100)?an:0!==t&&t%1e6==0?ln:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&t%10==1&&t%100!=11||s%10==1&&s%100!=11?on:0===i&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)||2<=s%10&&s%10<=4&&(s%100<12||14<s%100)?an:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 1===t&&0===i?on:2<=t&&t<=4&&0===i?an:0!==i?ln:cn},function(e){var t=+e;return 0===t?nn:1===t?on:2===t?rn:3===t?an:6===t?ln:cn},function(e){var t=Math.floor(Math.abs(+e)),i=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 1===+e||0!==i&&(0===t||1===t)?on:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&t%100==1||s%100==1?on:0===i&&t%100==2||s%100==2?rn:0===i&&3<=t%100&&t%100<=4||3<=s%100&&s%100<=4?an:cn},function(e){var t=Math.floor(Math.abs(+e));return 0===t||1===t?on:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&(1===t||2===t||3===t)||0===i&&t%10!=4&&t%10!=6&&t%10!=9||0!==i&&s%10!=4&&s%10!=6&&s%10!=9?on:cn},function(e){var t=+e;return 1===t?on:2===t?rn:3<=t&&t<=6?an:7<=t&&t<=10?ln:cn},function(e){var t=+e;return 1===t||11===t?on:2===t||12===t?rn:3<=t&&t<=10||13<=t&&t<=19?an:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 0===i&&t%10==1?on:0===i&&t%10==2?rn:0!==i||t%100!=0&&t%100!=20&&t%100!=40&&t%100!=60&&t%100!=80?0!==i?ln:cn:an},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+e;return 1===t&&0===i?on:2===t&&0===i?rn:0===i&&(s<0||10<s)&&s%10==0?ln:cn},function(e){var t=Math.floor(Math.abs(+e)),i=+(""+e).replace(/^[^.]*.?|0+$/g,"");return 0===i&&t%10==1&&t%100!=11||0!==i?on:cn},function(e){var t=+e;return 1===t?on:2===t?rn:cn},function(e){var t=+e;return 0===t?nn:1===t?on:cn},function(e){var t=Math.floor(Math.abs(+e)),i=+e;return 0===i?nn:0!==t&&1!==t||0===i?cn:on},function(e){var t=+(e+".").split(".")[1],i=+e;return i%10==1&&(i%100<11||19<i%100)?on:2<=i%10&&i%10<=9&&(i%100<11||19<i%100)?an:0!==t?ln:cn},function(e){var t=(e+".").split(".")[1].length,i=+(e+".").split(".")[1],s=+e;return s%10==0||11<=s%100&&s%100<=19||2===t&&11<=i%100&&i%100<=19?nn:s%10==1&&s%100!=11||2===t&&i%10==1&&i%100!=11||2!==t&&i%10==1?on:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+(e+".").split(".")[1];return 0===i&&t%10==1&&t%100!=11||s%10==1&&s%100!=11?on:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length,s=+e;return 1===t&&0===i?on:0!==i||0===s||1!==s&&1<=s%100&&s%100<=19?an:cn},function(e){var t=+e;return 1===t?on:0===t||2<=t%100&&t%100<=10?an:11<=t%100&&t%100<=19?ln:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 1===t&&0===i?on:0===i&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?an:0===i&&1!==t&&0<=t%10&&t%10<=1||0===i&&5<=t%10&&t%10<=9||0===i&&12<=t%100&&t%100<=14?ln:cn},function(e){var t=Math.floor(Math.abs(+e));return 0<=t&&t<=1?on:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 0===i&&t%10==1&&t%100!=11?on:0===i&&2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?an:0===i&&t%10==0||0===i&&5<=t%10&&t%10<=9||0===i&&11<=t%100&&t%100<=14?ln:cn},function(e){var t=+e;return 0===Math.floor(Math.abs(+e))||1===t?on:2<=t&&t<=10?an:cn},function(e){var t=Math.floor(Math.abs(+e)),i=+(e+".").split(".")[1],s=+e;return 0===s||1===s||0===t&&1===i?on:cn},function(e){var t=Math.floor(Math.abs(+e)),i=(e+".").split(".")[1].length;return 0===i&&t%100==1?on:0===i&&t%100==2?rn:0===i&&3<=t%100&&t%100<=4||0!==i?an:cn},function(e){var t=+e;return 0<=t&&t<=1||11<=t&&t<=99?on:cn},function(e){var t=+e;return 1===t||5===t||7===t||8===t||9===t||10===t?on:2===t||3===t?rn:4===t?an:6===t?ln:cn},function(e){var t=Math.floor(Math.abs(+e));return t%10==1||t%10==2||t%10==5||t%10==7||t%10==8||t%100==20||t%100==50||t%100==70||t%100==80?on:t%10==3||t%10==4||t%1e3==100||t%1e3==200||t%1e3==300||t%1e3==400||t%1e3==500||t%1e3==600||t%1e3==700||t%1e3==800||t%1e3==900?an:0===t||t%10==6||t%100==40||t%100==60||t%100==90?ln:cn},function(e){var t=+e;return t%10!=2&&t%10!=3||t%100==12||t%100==13?cn:an},function(e){var t=+e;return 1===t||3===t?on:2===t?rn:4===t?an:cn},function(e){var t=+e;return 0===t||7===t||8===t||9===t?nn:1===t?on:2===t?rn:3===t||4===t?an:5===t||6===t?ln:cn},function(e){var t=+e;return t%10==1&&t%100!=11?on:t%10==2&&t%100!=12?rn:t%10==3&&t%100!=13?an:cn},function(e){var t=+e;return 1===t||11===t?on:2===t||12===t?rn:3===t||13===t?an:cn},function(e){var t=+e;return 1===t?on:2===t||3===t?rn:4===t?an:6===t?ln:cn},function(e){var t=+e;return 1===t||5===t?on:cn},function(e){var t=+e;return 11===t||8===t||80===t||800===t?ln:cn},function(e){var t=Math.floor(Math.abs(+e));return 1===t?on:0===t||2<=t%100&&t%100<=20||t%100==40||t%100==60||t%100==80?ln:cn},function(e){var t=+e;return t%10==6||t%10==9||t%10==0&&0!==t?ln:cn},function(e){var t=Math.floor(Math.abs(+e));return t%10==1&&t%100!=11?on:t%10==2&&t%100!=12?rn:t%10!=7&&t%10!=8||t%100==17||t%100==18?cn:ln},function(e){var t=+e;return 1===t?on:2===t||3===t?rn:4===t?an:cn},function(e){var t=+e;return 1<=t&&t<=4?on:cn},function(e){var t=+e;return 1===t||5===t||7<=t&&t<=9?on:2===t||3===t?rn:4===t?an:6===t?ln:cn},function(e){var t=+e;return 1===t?on:t%10==4&&t%100!=14?ln:cn},function(e){var t=+e;return t%10!=1&&t%10!=2||t%100==11||t%100==12?cn:on},function(e){var t=+e;return t%10==6||t%10==9||10===t?an:cn},function(e){var t=+e;return t%10==3&&t%100!=13?an:cn}],hn={af:{cardinal:dn[0]},ak:{cardinal:dn[1]},am:{cardinal:dn[2]},ar:{cardinal:dn[3]},ars:{cardinal:dn[3]},as:{cardinal:dn[2],ordinal:dn[34]},asa:{cardinal:dn[0]},ast:{cardinal:dn[4]},az:{cardinal:dn[0],ordinal:dn[35]},be:{cardinal:dn[5],ordinal:dn[36]},bem:{cardinal:dn[0]},bez:{cardinal:dn[0]},bg:{cardinal:dn[0]},bh:{cardinal:dn[1]},bn:{cardinal:dn[2],ordinal:dn[34]},br:{cardinal:dn[6]},brx:{cardinal:dn[0]},bs:{cardinal:dn[7]},ca:{cardinal:dn[4],ordinal:dn[37]},ce:{cardinal:dn[0]},cgg:{cardinal:dn[0]},chr:{cardinal:dn[0]},ckb:{cardinal:dn[0]},cs:{cardinal:dn[8]},cy:{cardinal:dn[9],ordinal:dn[38]},da:{cardinal:dn[10]},de:{cardinal:dn[4]},dsb:{cardinal:dn[11]},dv:{cardinal:dn[0]},ee:{cardinal:dn[0]},el:{cardinal:dn[0]},en:{cardinal:dn[4],ordinal:dn[39]},eo:{cardinal:dn[0]},es:{cardinal:dn[0]},et:{cardinal:dn[4]},eu:{cardinal:dn[0]},fa:{cardinal:dn[2]},ff:{cardinal:dn[12]},fi:{cardinal:dn[4]},fil:{cardinal:dn[13],ordinal:dn[0]},fo:{cardinal:dn[0]},fr:{cardinal:dn[12],ordinal:dn[0]},fur:{cardinal:dn[0]},fy:{cardinal:dn[4]},ga:{cardinal:dn[14],ordinal:dn[0]},gd:{cardinal:dn[15],ordinal:dn[40]},gl:{cardinal:dn[4]},gsw:{cardinal:dn[0]},gu:{cardinal:dn[2],ordinal:dn[41]},guw:{cardinal:dn[1]},gv:{cardinal:dn[16]},ha:{cardinal:dn[0]},haw:{cardinal:dn[0]},he:{cardinal:dn[17]},hi:{cardinal:dn[2],ordinal:dn[41]},hr:{cardinal:dn[7]},hsb:{cardinal:dn[11]},hu:{cardinal:dn[0],ordinal:dn[42]},hy:{cardinal:dn[12],ordinal:dn[0]},ia:{cardinal:dn[4]},io:{cardinal:dn[4]},is:{cardinal:dn[18]},it:{cardinal:dn[4],ordinal:dn[43]},iu:{cardinal:dn[19]},iw:{cardinal:dn[17]},jgo:{cardinal:dn[0]},ji:{cardinal:dn[4]},jmc:{cardinal:dn[0]},ka:{cardinal:dn[0],ordinal:dn[44]},kab:{cardinal:dn[12]},kaj:{cardinal:dn[0]},kcg:{cardinal:dn[0]},kk:{cardinal:dn[0],ordinal:dn[45]},kkj:{cardinal:dn[0]},kl:{cardinal:dn[0]},kn:{cardinal:dn[2]},ks:{cardinal:dn[0]},ksb:{cardinal:dn[0]},ksh:{cardinal:dn[20]},ku:{cardinal:dn[0]},kw:{cardinal:dn[19]},ky:{cardinal:dn[0]},lag:{cardinal:dn[21]},lb:{cardinal:dn[0]},lg:{cardinal:dn[0]},ln:{cardinal:dn[1]},lt:{cardinal:dn[22]},lv:{cardinal:dn[23]},mas:{cardinal:dn[0]},mg:{cardinal:dn[1]},mgo:{cardinal:dn[0]},mk:{cardinal:dn[24],ordinal:dn[46]},ml:{cardinal:dn[0]},mn:{cardinal:dn[0]},mo:{cardinal:dn[25],ordinal:dn[0]},mr:{cardinal:dn[2],ordinal:dn[47]},mt:{cardinal:dn[26]},nah:{cardinal:dn[0]},naq:{cardinal:dn[19]},nb:{cardinal:dn[0]},nd:{cardinal:dn[0]},ne:{cardinal:dn[0],ordinal:dn[48]},nl:{cardinal:dn[4]},nn:{cardinal:dn[0]},nnh:{cardinal:dn[0]},no:{cardinal:dn[0]},nr:{cardinal:dn[0]},nso:{cardinal:dn[1]},ny:{cardinal:dn[0]},nyn:{cardinal:dn[0]},om:{cardinal:dn[0]},or:{cardinal:dn[0],ordinal:dn[49]},os:{cardinal:dn[0]},pa:{cardinal:dn[1]},pap:{cardinal:dn[0]},pl:{cardinal:dn[27]},prg:{cardinal:dn[23]},ps:{cardinal:dn[0]},pt:{cardinal:dn[28]},"pt-PT":{cardinal:dn[4]},rm:{cardinal:dn[0]},ro:{cardinal:dn[25],ordinal:dn[0]},rof:{cardinal:dn[0]},ru:{cardinal:dn[29]},rwk:{cardinal:dn[0]},saq:{cardinal:dn[0]},sc:{cardinal:dn[4],ordinal:dn[43]},scn:{cardinal:dn[4],ordinal:dn[43]},sd:{cardinal:dn[0]},sdh:{cardinal:dn[0]},se:{cardinal:dn[19]},seh:{cardinal:dn[0]},sh:{cardinal:dn[7]},shi:{cardinal:dn[30]},si:{cardinal:dn[31]},sk:{cardinal:dn[8]},sl:{cardinal:dn[32]},sma:{cardinal:dn[19]},smi:{cardinal:dn[19]},smj:{cardinal:dn[19]},smn:{cardinal:dn[19]},sms:{cardinal:dn[19]},sn:{cardinal:dn[0]},so:{cardinal:dn[0]},sq:{cardinal:dn[0],ordinal:dn[50]},sr:{cardinal:dn[7]},ss:{cardinal:dn[0]},ssy:{cardinal:dn[0]},st:{cardinal:dn[0]},sv:{cardinal:dn[4],ordinal:dn[51]},sw:{cardinal:dn[4]},syr:{cardinal:dn[0]},ta:{cardinal:dn[0]},te:{cardinal:dn[0]},teo:{cardinal:dn[0]},ti:{cardinal:dn[1]},tig:{cardinal:dn[0]},tk:{cardinal:dn[0],ordinal:dn[52]},tl:{cardinal:dn[13],ordinal:dn[0]},tn:{cardinal:dn[0]},tr:{cardinal:dn[0]},ts:{cardinal:dn[0]},tzm:{cardinal:dn[33]},ug:{cardinal:dn[0]},uk:{cardinal:dn[29],ordinal:dn[53]},ur:{cardinal:dn[4]},uz:{cardinal:dn[0]},ve:{cardinal:dn[0]},vo:{cardinal:dn[0]},vun:{cardinal:dn[0]},wa:{cardinal:dn[1]},wae:{cardinal:dn[0]},xh:{cardinal:dn[0]},xog:{cardinal:dn[0]},yi:{cardinal:dn[4]},zu:{cardinal:dn[2]},lo:{ordinal:dn[0]},ms:{ordinal:dn[0]},vi:{ordinal:dn[0]}},un=Zs(function(e,t){function i(e,t,n,o,r){var a=e.map(function(e){return function(e,t,n,o,r){if("string"==typeof e){var a=e;return function(){return a}}var c,d=e[0],h=e[1];if(t&&"#"===e[0]){d=t[0];var u=t[2],p=(o.number||l.number)([d,"number"],n);return function(e){return p(s(d,e)-u,e)}}"plural"===h||"selectordinal"===h?(c={},Object.keys(e[3]).forEach(function(t){c[t]=i(e[3][t],e,n,o,r)}),e=[e[0],e[1],e[2],c]):e[2]&&"object"==typeof e[2]&&(c={},Object.keys(e[2]).forEach(function(t){c[t]=i(e[2][t],e,n,o,r)}),e=[e[0],e[1],c]);var m=h&&(o[h]||l[h]);if(m){var f=m(e,n);return function(e){return f(s(d,e),e)}}return r?function(e){return String(s(d,e))}:function(e){return s(d,e)}}(e,t,n,o,r)});return r?1===a.length?a[0]:function(e){for(var t="",i=0;i<a.length;++i)t+=a[i](e);return t}:function(e){return a.reduce(function(t,i){return t.concat(i(e))},[])}}function s(e,t){if(t&&e in t)return t[e];for(var i=e.split("."),s=t,n=0,o=i.length;s&&n<o;++n)s=s[i[n]];return s}function n(e,t){var i=e[2],s=sn.number[i]||sn.parseNumberPattern(i)||sn.number.default;return new Intl.NumberFormat(t,s).format}function o(e,t){var i=e[1],s=e[2],n=sn[i][s]||sn.parseDatePattern(s)||sn[i].default;return new Intl.DateTimeFormat(t,n).format}function r(e,t){var i,s="selectordinal"===e[1]?"ordinal":"cardinal",n=e[2],o=e[3];if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(t).length>0)i=new Intl.PluralRules(t,{type:s});else{var r=function(e,t){if("string"==typeof e&&t[e])return e;for(var i=[].concat(e||[]),s=0,n=i.length;s<n;++s)for(var o=i[s].split("-");o.length;){var r=o.join("-");if(t[r])return r;o.pop()}}(t,hn),l=r&&hn[r][s]||a;i={select:l}}return function(e,t){return(o["="+ +e]||o[i.select(e-n)]||o.other)(t)}}function a(){return"other"}(t=e.exports=function(e,t,s){return i(e,null,t||"en",s||{},!0)}).toParts=function(e,t,s){return i(e,null,t||"en",s||{},!1)};var l={number:n,ordinal:n,spellout:n,duration:function(e,t){var i=e[2],s=sn.duration[i]||sn.duration.default,n=new Intl.NumberFormat(t,s.seconds).format,o=new Intl.NumberFormat(t,s.minutes).format,r=new Intl.NumberFormat(t,s.hours).format,a=/^fi$|^fi-|^da/.test(String(t))?".":":";return function(e,t){if(e=+e,!isFinite(e))return n(e);var i=~~(e/60/60),s=~~(e/60%60),l=(i?r(Math.abs(i))+a:"")+o(Math.abs(s))+a+n(Math.abs(e%60));return e<0?r(-1).replace(r(1),l):l}},date:o,time:o,plural:r,selectordinal:r,select:function(e,t){var i=e[2];return function(e,t){return(i[e]||i.other)(t)}}};t.types=l}),pn=(un.toParts,un.types,Zs(function(e,t){var i="{",s="}",n=",",o="#",r="<",a=">",l="</",c="'",d=["number","date","time","ordinal","duration","spellout"],h=["plural","select","selectordinal"];function u(e,t){var i=e.pattern,n=i.length,o=[],r=e.index,a=p(e,t);for(a&&o.push(a),a&&e.tokens&&e.tokens.push(["text",i.slice(r,e.index)]);e.index<n;){if(i[e.index]===s){if(!t)throw w(e);break}if(t&&e.tagsType&&i.slice(e.index,e.index+2)===l)break;o.push(g(e)),r=e.index,(a=p(e,t))&&o.push(a),a&&e.tokens&&e.tokens.push(["text",i.slice(r,e.index)])}return o}function p(e,t){for(var n=e.pattern,a=n.length,l="plural"===t||"selectordinal"===t,d=!!e.tagsType,h="{style}"===t,u="";e.index<a;){var p=n[e.index];if(p===i||p===s||l&&p===o||d&&p===r||h&&m(p.charCodeAt(0)))break;if(p===c)if((p=n[++e.index])===c)u+=p,++e.index;else if(p===i||p===s||l&&p===o||d&&p===r||h)for(u+=p;++e.index<a;)if((p=n[e.index])===c&&n[e.index+1]===c)u+=c,++e.index;else{if(p===c){++e.index;break}u+=p}else u+=c;else u+=p,++e.index}return u}function m(e){return e>=9&&e<=13||32===e||133===e||160===e||6158===e||e>=8192&&e<=8205||8232===e||8233===e||8239===e||8287===e||8288===e||12288===e||65279===e}function f(e){for(var t=e.pattern,i=t.length,s=e.index;e.index<i&&m(t.charCodeAt(e.index));)++e.index;s<e.index&&e.tokens&&e.tokens.push(["space",e.pattern.slice(s,e.index)])}function g(e){var t=e.pattern;if(t[e.index]===o)return e.tokens&&e.tokens.push(["syntax",o]),++e.index,[o];var c=function(e){var t=e.tagsType;if(t&&e.pattern[e.index]===r){if(e.pattern.slice(e.index,e.index+2)===l)throw w(e,null,"closing tag without matching opening tag");e.tokens&&e.tokens.push(["syntax",r]),++e.index;var i=v(e,!0);if(!i)throw w(e,"placeholder id");if(e.tokens&&e.tokens.push(["id",i]),f(e),"/>"===e.pattern.slice(e.index,e.index+2))return e.tokens&&e.tokens.push(["syntax","/>"]),e.index+=2,[i,t];if(e.pattern[e.index]!==a)throw w(e,a);e.tokens&&e.tokens.push(["syntax",a]),++e.index;var s=u(e,t),n=e.index;if(e.pattern.slice(e.index,e.index+2)!==l)throw w(e,l+i+a);e.tokens&&e.tokens.push(["syntax",l]),e.index+=2;var o=v(e,!0);if(o&&e.tokens&&e.tokens.push(["id",o]),i!==o)throw e.index=n,w(e,l+i+a,l+o+a);if(f(e),e.pattern[e.index]!==a)throw w(e,a);return e.tokens&&e.tokens.push(["syntax",a]),++e.index,[i,t,{children:s}]}}(e);if(c)return c;if(t[e.index]!==i)throw w(e,i);e.tokens&&e.tokens.push(["syntax",i]),++e.index,f(e);var h=v(e);if(!h)throw w(e,"placeholder id");e.tokens&&e.tokens.push(["id",h]),f(e);var p=t[e.index];if(p===s)return e.tokens&&e.tokens.push(["syntax",s]),++e.index,[h];if(p!==n)throw w(e,", or }");e.tokens&&e.tokens.push(["syntax",n]),++e.index,f(e);var m,g=v(e);if(!g)throw w(e,"placeholder type");if(e.tokens&&e.tokens.push(["type",g]),f(e),(p=t[e.index])===s){if(e.tokens&&e.tokens.push(["syntax",s]),"plural"===g||"selectordinal"===g||"select"===g)throw w(e,g+" sub-messages");return++e.index,[h,g]}if(p!==n)throw w(e,", or }");if(e.tokens&&e.tokens.push(["syntax",n]),++e.index,f(e),"plural"===g||"selectordinal"===g){var k=function(e){var t=e.pattern,i=t.length,s=0;if("offset:"===t.slice(e.index,e.index+7)){e.tokens&&e.tokens.push(["offset","offset"],["syntax",":"]),e.index+=7,f(e);for(var n=e.index;e.index<i&&_(t.charCodeAt(e.index));)++e.index;if(n===e.index)throw w(e,"offset number");e.tokens&&e.tokens.push(["number",t.slice(n,e.index)]),s=+t.slice(n,e.index)}return s}(e);f(e),m=[h,g,k,y(e,g)]}else if("select"===g)m=[h,g,y(e,g)];else if(d.indexOf(g)>=0)m=[h,g,b(e)];else{var x=e.index,E=b(e);f(e),t[e.index]===i&&(e.index=x,E=y(e,g)),m=[h,g,E]}if(f(e),t[e.index]!==s)throw w(e,s);return e.tokens&&e.tokens.push(["syntax",s]),++e.index,m}function v(e,t){for(var l=e.pattern,d=l.length,h="";e.index<d;){var u=l[e.index];if(u===i||u===s||u===n||u===o||u===c||m(u.charCodeAt(0))||t&&(u===r||u===a||"/"===u))break;h+=u,++e.index}return h}function b(e){var t=e.index,i=p(e,"{style}");if(!i)throw w(e,"placeholder style name");return e.tokens&&e.tokens.push(["style",e.pattern.slice(t,e.index)]),i}function _(e){return e>=48&&e<=57}function y(e,t){for(var i=e.pattern,n=i.length,o={};e.index<n&&i[e.index]!==s;){var r=v(e);if(!r)throw w(e,"sub-message selector");e.tokens&&e.tokens.push(["selector",r]),f(e),o[r]=k(e,t),f(e)}if(!o.other&&h.indexOf(t)>=0)throw w(e,null,null,'"other" sub-message must be specified in '+t);return o}function k(e,t){if(e.pattern[e.index]!==i)throw w(e,"{ to start sub-message");e.tokens&&e.tokens.push(["syntax",i]),++e.index;var n=u(e,t);if(e.pattern[e.index]!==s)throw w(e,"} to end sub-message");return e.tokens&&e.tokens.push(["syntax",s]),++e.index,n}function w(e,t,i,s){var n=e.pattern,o=n.slice(0,e.index).split(/\r?\n/),r=e.index,a=o.length,l=o.slice(-1)[0].length;return i=i||(e.index>=n.length?"end of message pattern":v(e)||n[e.index]),s||(s=function(e,t){return e?"Expected "+e+" but found "+t:"Unexpected "+t+" found"}(t,i)),new x(s+=" in "+n.replace(/\r?\n/g,"\n"),t,i,r,a,l)}function x(e,t,i,s,n,o){Error.call(this,e),this.name="SyntaxError",this.message=e,this.expected=t,this.found=i,this.offset=s,this.line=n,this.column=o}t=e.exports=function(e,t){return u({pattern:String(e),index:0,tagsType:t&&t.tagsType||null,tokens:t&&t.tokens||null},"")},x.prototype=Object.create(Error.prototype),t.SyntaxError=x})),mn=(pn.SyntaxError,new RegExp("^("+Object.keys(hn).join("|")+")\\b")),fn=new WeakMap;function gn(e,t,i){if(!(this instanceof gn)||fn.has(this))throw new TypeError("calling MessageFormat constructor without new is invalid");var s=pn(e);fn.set(this,{ast:s,format:un(s,t,i&&i.types),locale:gn.supportedLocalesOf(t)[0]||"en",locales:t,options:i})}var vn=gn;Object.defineProperties(gn.prototype,{format:{configurable:!0,get:function(){var e=fn.get(this);if(!e)throw new TypeError("MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat");return e.format}},formatToParts:{configurable:!0,writable:!0,value:function(e){var t=fn.get(this);if(!t)throw new TypeError("MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat");return(t.toParts||(t.toParts=un.toParts(t.ast,t.locales,t.options&&t.options.types)))(e)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var e=fn.get(this);if(!e)throw new TypeError("MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat");return{locale:e.locale}}}}),"undefined"!=typeof Symbol&&Object.defineProperty(gn.prototype,Symbol.toStringTag,{value:"Object"}),Object.defineProperties(gn,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(e){return[].concat(Intl.NumberFormat.supportedLocalesOf(e),Intl.DateTimeFormat.supportedLocalesOf(e),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(e):[],[].concat(e||[]).filter(function(e){return mn.test(e)})).filter(function(e,t,i){return i.indexOf(e)===t})}}});var bn=vn;const _n=globalThis.document?.documentElement;class yn extends EventTarget{formatNumberOptions={returnIfNaN:"",postProcessors:new Map};formatDateOptions={postProcessors:new Map};#h=!1;#u="";#p=null;__storage={};__namespacePatternsMap=new Map;__namespaceLoadersCache={};__namespaceLoaderPromisesCache={};get locale(){return this.#h?this.#u||"":_n.lang||""}set locale(e){if(this.#m(e),!this.#h){const t=_n.lang;return this._setHtmlLangAttribute(e),void this._onLocaleChanged(e,t)}const t=this.#u;this.#u=e,null===this.#p&&this._setHtmlLangAttribute(e),this._onLocaleChanged(e,t)}get loadingComplete(){return"object"==typeof this.__namespaceLoaderPromisesCache[this.locale]?Promise.all(Object.values(this.__namespaceLoaderPromisesCache[this.locale])):Promise.resolve()}constructor({allowOverridesForExistingNamespaces:e=!1,autoLoadOnLocaleChange:t=!1,showKeyAsFallback:i=!1,fallbackLocale:s=""}={}){super(),this.__allowOverridesForExistingNamespaces=e,this._autoLoadOnLocaleChange=!!t,this._showKeyAsFallback=i,this._fallbackLocale=s;const n=_n.getAttribute("data-localize-lang");this.#h=Boolean(n),this.#h&&(this.locale=n,this._setupTranslationToolSupport()),_n.lang||(_n.lang=this.locale||"en-GB"),this._setupHtmlLangAttributeObserver()}addData(e,t,i){if(!this.__allowOverridesForExistingNamespaces&&this._isNamespaceInCache(e,t))throw new Error(`Namespace "${t}" has been already added for the locale "${e}".`);this.__storage[e]=this.__storage[e]||{},this.__allowOverridesForExistingNamespaces?this.__storage[e][t]={...this.__storage[e][t],...i}:this.__storage[e][t]=i}setupNamespaceLoader(e,t){this.__namespacePatternsMap.set(e,t)}loadNamespaces(e,{locale:t}={}){return Promise.all(e.map(e=>this.loadNamespace(e,{locale:t})))}loadNamespace(e,{locale:t=this.locale}={locale:this.locale}){const i="object"==typeof e,s=i?Object.keys(e)[0]:e;if(this._isNamespaceInCache(t,s))return Promise.resolve();return this._getCachedNamespaceLoaderPromise(t,s)||this._loadNamespaceData(t,e,i,s)}msg(e,t,i={}){const s=i.locale?i.locale:this.locale,n=this._getMessageForKeys(e,s);return n?new bn(n,s).format(t):""}teardown(){this._teardownHtmlLangAttributeObserver()}reset(){this.__storage={},this.__namespacePatternsMap=new Map,this.__namespaceLoadersCache={},this.__namespaceLoaderPromisesCache={}}setDatePostProcessorForLocale({locale:e,postProcessor:t}){this.formatDateOptions?.postProcessors.set(e,t)}setNumberPostProcessorForLocale({locale:e,postProcessor:t}){this.formatNumberOptions?.postProcessors.set(e,t)}_setupTranslationToolSupport(){this.#p=_n.lang||null}_setHtmlLangAttribute(e){this._teardownHtmlLangAttributeObserver(),_n.lang=e,this._setupHtmlLangAttributeObserver()}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(e=>{e.forEach(e=>{this.#h?"auto"===_n.lang?(this.#p=null,this._setHtmlLangAttribute(this.locale)):this.#p=document.documentElement.lang:this._onLocaleChanged(document.documentElement.lang,e.oldValue||"")})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(e,t){return!(!this.__storage[e]||!this.__storage[e][t])}_getCachedNamespaceLoaderPromise(e,t){return this.__namespaceLoaderPromisesCache[e]?this.__namespaceLoaderPromisesCache[e][t]:null}_loadNamespaceData(e,t,i,s){const n=this._getNamespaceLoader(t,i,s),o=this._getNamespaceLoaderPromise(n,e,s);return this._cacheNamespaceLoaderPromise(e,s,o),o.then(t=>{if(this.__namespaceLoaderPromisesCache[e]&&this.__namespaceLoaderPromisesCache[e][s]===o){const i=function(e){return!(!e||!e.default||"object"!=typeof e.default||1!==Object.keys(e).length)}(t)?t.default:t;this.addData(e,s,i)}})}_getNamespaceLoader(e,t,i){let s=this.__namespaceLoadersCache[i];if(s||(t?(s=e[i],this.__namespaceLoadersCache[i]=s):(s=this._lookupNamespaceLoader(i),this.__namespaceLoadersCache[i]=s)),!s)throw new Error(`Namespace "${i}" was not properly setup.`);return this.__namespaceLoadersCache[i]=s,s}_getNamespaceLoaderPromise(e,t,i,s=this._fallbackLocale){return e(t,i).catch(()=>{const n=this._getLangFromLocale(t);return e(n,i).catch(()=>{if(s)return this._getNamespaceLoaderPromise(e,s,i,"").catch(()=>{const e=this._getLangFromLocale(s);throw new Error(`Data for namespace "${i}" and current locale "${t}" or fallback locale "${s}" could not be loaded. Make sure you have data either for locale "${t}" (and/or generic language "${n}") or for fallback "${s}" (and/or "${e}").`)});throw new Error(`Data for namespace "${i}" and locale "${t}" could not be loaded. Make sure you have data for locale "${t}" (and/or generic language "${n}").`)})})}_cacheNamespaceLoaderPromise(e,t,i){this.__namespaceLoaderPromisesCache[e]||(this.__namespaceLoaderPromisesCache[e]={}),this.__namespaceLoaderPromisesCache[e][t]=i}_lookupNamespaceLoader(e){for(const[t,i]of this.__namespacePatternsMap){const s="string"==typeof t&&t===e,n="object"==typeof t&&"RegExp"===t.constructor.name&&t.test(e);if(s||n)return i}return null}_getLangFromLocale(e){return e.substring(0,2)}_onLocaleChanged(e,t){this.dispatchEvent(new CustomEvent("__localeChanging")),e!==t&&(this._autoLoadOnLocaleChange?(this._loadAllMissing(e,t),this.loadingComplete.then(()=>{this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:e,oldLocale:t}}))})):this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:e,oldLocale:t}})))}_loadAllMissing(e,t){const i=this.__storage[t]||{},s=this.__storage[e]||{};Object.keys(i).forEach(t=>{s[t]||this.loadNamespace(t,{locale:e})})}_getMessageForKeys(e,t){if("string"==typeof e)return this._getMessageForKey(e,t);const i=Array.from(e).reverse();let s,n;for(;i.length;)if(s=i.pop(),n=this._getMessageForKey(s,t),n)return n}_getMessageForKey(e,t){if(!e||-1===e.indexOf(":"))throw new Error(`Namespace is missing in the key "${e}". The format for keys is "namespace:name".`);const[i,s]=e.split(":"),n=this.__storage[t],o=n?n[i]:{},r=s.split(".").reduce((e,t)=>"object"==typeof e?e[t]:e,o);return String(r||(this._showKeyAsFallback?e:""))}#m(e){if(!e.includes("-"))throw new Error(`\n      Locale was set to ${e}.\n      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.\n      See https://github.com/ing-bank/lion/issues/187 for more information.\n    `)}get _supportExternalTranslationTools(){return this.#h}set _supportExternalTranslationTools(e){this.#h=e}get _langAttrSetByTranslationTool(){return this.#u}set _langAttrSetByTranslationTool(e){this.#u=e}}function kn(){if(!wt.has("@lion/ui::localize::0.x")){const e=new yn({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});wt.set("@lion/ui::localize::0.x",e)}return wt.get("@lion/ui::localize::0.x")}function wn(){return kt(kn)}const xn="3.0.0",En=window.scopedElementsVersions||(window.scopedElementsVersions=[]);En.includes(xn)||En.push(xn);const Cn=bt(e=>class extends e{static scopedElements;static get scopedElementsVersion(){return xn}static __registry;get registry(){return this.constructor.__registry}set registry(e){this.constructor.__registry=e}attachShadow(e){const{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=new CustomElementRegistry;for(const[e,i]of Object.entries(t??{}))this.registry.define(e,i)}return super.attachShadow({...e,customElements:this.registry,registry:this.registry})}}),Sn=bt(e=>class extends(Cn(e)){createRenderRoot(){const{shadowRootOptions:e,elementStyles:t}=this.constructor,i=this.attachShadow(e);return this.renderOptions.creationScope=i,a(i,t),this.renderOptions.renderBefore??=i.firstChild,i}});function An(){return Boolean(globalThis.ShadowRoot?.prototype.createElement&&globalThis.ShadowRoot?.prototype.importNode)}const Nn=bt(e=>class extends(Sn(e)){constructor(){super()}createScopedElement(e){return(An()?this.shadowRoot:document).createElement(e)}defineScopedElement(e,t){const i=this.registry.get(e),s=i&&i!==t;return!An()&&s&&console.error([`You are trying to re-register the "${e}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join("\n")),i?this.registry.get(e):this.registry.define(e,t)}attachShadow(e){const{scopedElements:t}=this.constructor;if(!this.registry||this.registry===this.constructor.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=An()?new CustomElementRegistry:customElements;for(const[e,i]of Object.entries(t??{}))this.defineScopedElement(e,i)}return Element.prototype.attachShadow.call(this,{...e,customElements:this.registry,registry:this.registry})}createRenderRoot(){const{shadowRootOptions:e,elementStyles:t}=this.constructor,i=this.attachShadow(e);return An()&&(this.renderOptions.creationScope=i),i instanceof ShadowRoot&&(a(i,t),this.renderOptions.renderBefore=this.renderOptions.renderBefore||i.firstChild),i}});class Tn{constructor(){this.__running=!1,this.__queue=[]}add(e){this.__queue.push(e),this.__running||(this.complete=new Promise(e=>{this.__callComplete=e}),this.__run())}async __run(){this.__running=!0,await this.__queue[0](),this.__queue.shift(),this.__queue.length>0?this.__run():(this.__running=!1,this.__callComplete&&this.__callComplete())}}const On=bt(e=>class extends e{constructor(){super(),this.__SyncUpdatableNamespace={}}firstUpdated(e){super.firstUpdated(e),this.__syncUpdatableInitialize()}connectedCallback(){super.connectedCallback(),this.__SyncUpdatableNamespace.connected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__SyncUpdatableNamespace.connected=!1}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];static __syncUpdatableHasChanged(e,t,i){const s=this.elementProperties;return s.get(e)&&s.get(e).hasChanged?s.get(e).hasChanged(t,i):t!==i}__syncUpdatableInitialize(){const e=this.__SyncUpdatableNamespace,t=this.constructor;e.initialized=!0,e.queue&&Array.from(e.queue).forEach(e=>{t.__syncUpdatableHasChanged(e,this[e],void 0)&&this.updateSync(e,void 0)})}requestUpdate(e,t,i){if(super.requestUpdate(e,t,i),void 0===e)return;this.__SyncUpdatableNamespace=this.__SyncUpdatableNamespace||{};const s=this.__SyncUpdatableNamespace,n=this.constructor;s.initialized?n.__syncUpdatableHasChanged(e,this[e],t)&&this.updateSync(e,t):(s.queue=s.queue||new Set,s.queue.add(e))}updateSync(e,t){}}),Ln=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),Ln(e,t);return!0},Mn=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},$n=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Pn(t)}};function In(e){void 0!==this._$AN?(Mn(this),this._$AM=e,$n(this)):this._$AM=e}function Fn(e,t=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(s))for(let e=i;e<s.length;e++)Ln(s[e],!1),Mn(s[e]);else null!=s&&(Ln(s,!1),Mn(s));else Ln(this,e)}const Pn=e=>{2==e.type&&(e._$AP??=Fn,e._$AQ??=In)};class Dn extends We{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),$n(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ln(this,e),Mn(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Vn{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Rn{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Bn=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,zn=1073741823,jn=He(class extends Dn{constructor(){super(...arguments),this._$Cwt=zn,this._$Cbt=[],this._$CK=new Vn(this),this._$CX=new Rn}render(...e){return e.find(e=>!Bn(e))??K}update(e,t){const i=this._$Cbt;let s=i.length;this._$Cbt=t;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const r=t[e];if(!Bn(r))return this._$Cwt=e,r;e<s&&r===i[e]||(this._$Cwt=zn,s=0,Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();const t=n.deref();if(void 0!==t){const i=t._$Cbt.indexOf(r);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return K}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),Un=bt(e=>class extends e{static get localizeNamespaces(){return[]}static get waitForLocalizeNamespaces(){return!0}constructor(){super(),this._localizeManager=wn(),this.__boundLocalizeOnLocaleChanged=(...e)=>{const t=Array.from(e)[0];this.__localizeOnLocaleChanged(t)},this.__boundLocalizeOnLocaleChanging=()=>{this.__localizeOnLocaleChanging()},this.__localizeStartLoadingNamespaces(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>{this.__localizeMessageSync=!0})}async scheduleUpdate(){Object.getPrototypeOf(this).constructor.waitForLocalizeNamespaces&&await this.localizeNamespacesLoaded,super.scheduleUpdate()}connectedCallback(){super.connectedCallback(),this.localizeNamespacesLoaded&&this.localizeNamespacesLoaded.then(()=>this.onLocaleReady()),this._localizeManager.addEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.addEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}disconnectedCallback(){super.disconnectedCallback(),this._localizeManager.removeEventListener("__localeChanging",this.__boundLocalizeOnLocaleChanging),this._localizeManager.removeEventListener("localeChanged",this.__boundLocalizeOnLocaleChanged)}msgLit(e,t,i){return this.__localizeMessageSync?this._localizeManager.msg(e,t,i):this.localizeNamespacesLoaded?jn(this.localizeNamespacesLoaded.then(()=>this._localizeManager.msg(e,t,i)),Y):""}__getUniqueNamespaces(){const e=[],t=new Set;return Object.getPrototypeOf(this).constructor.localizeNamespaces.forEach(t.add.bind(t)),t.forEach(t=>{e.push(t)}),e}__localizeStartLoadingNamespaces(){this.localizeNamespacesLoaded=this._localizeManager.loadNamespaces(this.__getUniqueNamespaces())}__localizeOnLocaleChanging(){this.__localizeStartLoadingNamespaces()}__localizeOnLocaleChanged(e){this.onLocaleChanged(e.detail.newLocale,e.detail.oldLocale)}onLocaleReady(){this.onLocaleUpdated()}onLocaleChanged(e,t){this.onLocaleUpdated(),this.requestUpdate()}onLocaleUpdated(){}}),qn=e=>{switch(e){case"bg-BG":return s.e(6952).then(s.bind(s,6952));case"bg":return s.e(2038).then(s.bind(s,2038));case"cs-CZ":return s.e(1645).then(s.bind(s,1645));case"cs":return s.e(167).then(s.bind(s,167));case"de-DE":return s.e(7472).then(s.bind(s,7472));case"de":return s.e(3902).then(s.bind(s,3902));case"en-AU":return s.e(6617).then(s.bind(s,6617));case"en-GB":return s.e(2922).then(s.bind(s,2922));case"en-US":return s.e(3055).then(s.bind(s,3055));case"en-PH":case"en":default:return s.e(3474).then(s.bind(s,3474));case"es-ES":return s.e(8722).then(s.bind(s,8722));case"es":return s.e(2437).then(s.bind(s,2437));case"fr-FR":return s.e(7426).then(s.bind(s,7426));case"fr-BE":return s.e(4487).then(s.bind(s,4487));case"fr":return s.e(2637).then(s.bind(s,2637));case"hu-HU":return s.e(8160).then(s.bind(s,8160));case"hu":return s.e(9770).then(s.bind(s,9770));case"it-IT":return s.e(1144).then(s.bind(s,1144));case"it":return s.e(4332).then(s.bind(s,4332));case"nl-BE":return s.e(3585).then(s.bind(s,3585));case"nl-NL":return s.e(6102).then(s.bind(s,6102));case"nl":return s.e(6559).then(s.bind(s,6559));case"pl-PL":return s.e(5598).then(s.bind(s,5598));case"pl":return s.e(1593).then(s.bind(s,1593));case"ro-RO":return s.e(4504).then(s.bind(s,4504));case"ro":return s.e(3566).then(s.bind(s,3566));case"ru-RU":return s.e(9944).then(s.bind(s,9944));case"ru":return s.e(2028).then(s.bind(s,2028));case"sk-SK":return s.e(8742).then(s.bind(s,8742));case"sk":return s.e(1967).then(s.bind(s,1967));case"tr-TR":return s.e(2722).then(s.bind(s,2722));case"tr":return s.e(767).then(s.bind(s,767));case"uk-UA":return s.e(5600).then(s.bind(s,5600));case"uk":return s.e(7229).then(s.bind(s,7229));case"zh-CN":case"zh":return s.e(7831).then(s.bind(s,7831))}};class Hn extends(Un(pe)){static get properties(){return{feedbackData:{attribute:!1}}}static localizeNamespaces=[{"lion-form-core":qn},...super.localizeNamespaces];static get styles(){return[r`
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
      `]}constructor(){super(),this.feedbackData=void 0}_messageTemplate({message:e}){return e}updated(e){super.updated(e),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type):"success"!==this.currentType&&this.removeAttribute("type")}render(){return H`
      ${this.feedbackData&&this.feedbackData.map(({message:e,type:t,validator:i})=>{return H`
          <span class="validation-feedback__type">
            ${e&&t?this._localizeManager.msg("lion-form-core:validation"+(s=t,`${s[0].toUpperCase()}${s.slice(1)}`)):Y}
          </span>
          ${this._messageTemplate({message:e,type:t,validator:i})}
        `;var s})}
    `}}function Wn(e=[],t=[]){return e.filter(e=>!t.includes(e)).concat(t.filter(t=>!e.includes(t)))}const Gn=bt(e=>class extends(Ws(On(Fi(zs(Nn(e)))))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Hn}}static get properties(){return{validators:{attribute:!1},hasFeedbackFor:{attribute:!1},shouldShowFeedbackFor:{attribute:!1},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:e=>e.split(","),toAttribute:e=>e.join(",")}},validationStates:{attribute:!1},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},defaultValidators:{attribute:!1},_visibleMessagesAmount:{attribute:!1},__childModelValueChanged:{attribute:!1}}}static get validationTypes(){return["error"]}get operationMode(){return"enter"}get slots(){return{...super.slots,feedback:()=>{const e=this.createScopedElement("lion-validation-feedback");return e.setAttribute("data-tag-name","lion-validation-feedback"),e}}}get _allValidators(){return[...this.validators,...this.defaultValidators]}constructor(){super(),this.hasFeedbackFor=[],this.showsFeedbackFor=[],this.shouldShowFeedbackFor=[],this.validationStates={},this.isPending=!1,this.validators=[],this.defaultValidators=[],this._visibleMessagesAmount=1,this.__syncValidationResult=[],this.__asyncValidationResult=[],this.__validationResult=[],this.__prevValidationResult=[],this.__prevShownValidationResult=[],this.__childModelValueChanged=!1,this._onValidatorUpdated=this._onValidatorUpdated.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}connectedCallback(){super.connectedCallback(),wn().addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),wn().removeEventListener("localeChanged",this._updateFeedbackComponent)}firstUpdated(e){super.firstUpdated(e),this.__isValidateInitialized=!0,this.validate(),"child"!==this._repropagationRole&&this.addEventListener("model-value-changed",()=>{this.__childModelValueChanged=!0})}updateSync(e,t){if(super.updateSync(e,t),"validators"===e?(this.__setupValidators(),this.validate({clearCurrentResult:!0})):"modelValue"===e&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","focused","submitted","hasFeedbackFor","filled"].includes(e)&&this._updateShouldShowFeedbackFor(),"showsFeedbackFor"===e){this._inputNode&&this._inputNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`);const e=Wn(this.showsFeedbackFor,t);e.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),e.forEach(e=>{var t;this.dispatchEvent(new Event(`showsFeedbackFor${t=e,t.charAt(0).toUpperCase()+t.slice(1)}Changed`,{bubbles:!0}))})}"shouldShowFeedbackFor"===e&&Wn(this.shouldShowFeedbackFor,t).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}async validate({clearCurrentResult:e=!1}={}){if(this.validateComplete=new Promise(e=>{this.__validateCompleteResolve=e}),this.disabled||this.readOnly)return this.__clearValidationResults(),this.__finishValidationPass(),void this._updateFeedbackComponent();this.__isValidateInitialized&&(this.__prevValidationResult=this.__validationResult,e&&this.__clearValidationResults(),await this.__executeValidators())}#f(e){let t=e;for(;t;){if("Required"===t.constructor.validatorName)return!0;t=Object.getPrototypeOf(t)}return!1}async __executeValidators(){const e=(t=this.modelValue)instanceof qs?t.viewValue:t;var t;const i=this.__isEmpty(e);if(this.__syncValidationResult=[],i){const e=!this._isFormOrFieldset,t=this._allValidators.find(e=>"Required"===e.constructor?.validatorName);if(t&&(this.__syncValidationResult=[{validator:t,outcome:!0}]),e)return void this.__finishValidationPass({syncValidationResult:this.__syncValidationResult})}const s=[],n=[],o=[];for(const e of this._allValidators)e?.executeOnResults?s.push(e):this.#f(e)||(e.constructor.async?o.push(e):n.push(e));const r=Boolean(o.length);this.__syncValidationResult=[...this.__syncValidationResult,...this.__executeSyncValidators(n,e)],this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,metaValidators:s}),r?(this.isPending=!0,this.__asyncValidationResult=await this.__executeAsyncValidators(o,e),this.isPending=!1,this.__finishValidationPass({syncValidationResult:this.__syncValidationResult,asyncValidationResult:this.__asyncValidationResult,metaValidators:s}),this.__validateCompleteResolve?.(!0)):this.__validateCompleteResolve?.(!0)}__executeSyncValidators(e,t){return e.map(e=>({validator:e,outcome:e.execute(t,e.param,{node:this})})).filter(e=>Boolean(e.outcome))}async __executeAsyncValidators(e,t){const i=e.map(e=>e.execute(t,e.param,{node:this})),s=await Promise.all(i);return s.map((t,i)=>({validator:e[i],outcome:s[i]})).filter(e=>Boolean(e.outcome))}__executeMetaValidators(e,t){return t.length?this._isEmpty(this.modelValue)?(this.__prevShownValidationResult=[],[]):t.map(t=>({validator:t,outcome:t.executeOnResults({regularValidationResult:e.map(e=>e.validator),prevValidationResult:this.__prevValidationResult.map(e=>e.validator),prevShownValidationResult:this.__prevShownValidationResult.map(e=>e.validator)})})).filter(e=>Boolean(e.outcome)):[]}__finishValidationPass({syncValidationResult:e=[],asyncValidationResult:t=[],metaValidators:i=[]}={}){const s=[...e,...t],n=this.__executeMetaValidators(s,i);this.__validationResult=[...n,...s];const o=this.constructor.validationTypes.reduce((e,t)=>({...e,[t]:{}}),{});for(const{validator:e,outcome:t}of this.__validationResult){o[e.type]||(o[e.type]={});const i=e.constructor;o[e.type][i.validatorName]=t}this.validationStates=o,this.hasFeedbackFor=[...new Set(this.__validationResult.map(({validator:e})=>e.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0}))}__clearValidationResults(){this.__syncValidationResult=[],this.__asyncValidationResult=[]}_onValidatorUpdated(e){"param-changed"!==e.type&&"config-changed"!==e.type||this.validate()}__setupValidators(){const e=["param-changed","config-changed"];for(const t of this.__prevValidators||[]){for(const i of e)t.removeEventListener?.(i,this._onValidatorUpdated);t.onFormControlDisconnect(this)}for(const t of this._allValidators){if(void 0===t.constructor._$isValidator$){const e=`Validators array only accepts class instances of Validator. Type "${Array.isArray(t)?"array":typeof t}" found. This may be caused by having multiple installations of "@lion/ui/form-core.js".`;throw console.error(e,this),new Error(e)}const i=this.constructor,s=t.constructor;if(-1===i.validationTypes.indexOf(t.type)){const e=`This component does not support the validator type "${t.type}" used in "${s.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(e,this),new Error(e)}for(const i of e)t.addEventListener?.(i,e=>{this._onValidatorUpdated(e,{validator:t})});t.onFormControlConnect(this)}this.__prevValidators=this._allValidators}__isEmpty(e){return"function"==typeof this._isEmpty?this._isEmpty(e):null===this.modelValue||void 0===this.modelValue||""===this.modelValue}async __getFeedbackMessages(e){let t=await this.fieldName;return Promise.all(e.map(async({validator:e,outcome:i})=>(e.config.fieldName&&(t=await e.config.fieldName),{message:await e._getMessage({modelValue:this.modelValue,formControl:this,fieldName:t,outcome:i}),type:e.type,validator:e,visibilityDuration:e.config?.visibilityDuration||3e3})))}_updateFeedbackComponent(){window.clearTimeout(this.removeMessage);const{_feedbackNode:e}=this;e&&(this.__feedbackQueue||(this.__feedbackQueue=new Tn),this.showsFeedbackFor.length>0?this.__feedbackQueue.add(async()=>{const t=this._prioritizeAndFilterFeedback({validationResult:this.__validationResult.map(e=>e.validator)});this.__prioritizedResult=t.map(e=>this.__validationResult.find(t=>e===t.validator)).filter(Boolean),this.__prioritizedResult.length>0&&(this.__prevShownValidationResult=this.__prioritizedResult);const i=await this.__getFeedbackMessages(this.__prioritizedResult);e.feedbackData=i||[],i?.[0]&&"success"===i[0].type&&i[0].visibilityDuration!==1/0&&(this.removeMessage=window.setTimeout(()=>{e.removeAttribute("type"),e.feedbackData=[]},i[0].visibilityDuration))}):this.__feedbackQueue.add(async()=>{e.feedbackData=[]}),this.feedbackComplete=this.__feedbackQueue.complete)}_showFeedbackConditionFor(e,t){return!0}get _feedbackConditionMeta(){return{modelValue:this.modelValue,el:this}}feedbackCondition(e,t=this._feedbackConditionMeta,i=this._showFeedbackConditionFor.bind(this)){return i(e,t)}_hasFeedbackVisibleFor(e){return this.hasFeedbackFor?.includes(e)&&this.shouldShowFeedbackFor?.includes(e)}updated(e){if(super.updated(e),e.has("shouldShowFeedbackFor")||e.has("hasFeedbackFor")){const e=this.constructor;this.showsFeedbackFor=e.validationTypes.map(e=>this._hasFeedbackVisibleFor(e)?e:void 0).filter(Boolean),this._updateFeedbackComponent()}if(e.has("__childModelValueChanged")&&this.__childModelValueChanged&&(this.validate({clearCurrentResult:!0}),this.__childModelValueChanged=!1),e.has("validationStates")){const t=e.get("validationStates");t&&Object.entries(this.validationStates).forEach(([e,i])=>{t[e]&&JSON.stringify(i)!==JSON.stringify(t[e])&&this.dispatchEvent(new CustomEvent(`${e}StateChanged`,{detail:i}))})}}_updateShouldShowFeedbackFor(){const e=this.constructor.validationTypes.map(e=>this.feedbackCondition(e,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))?e:void 0).filter(Boolean);JSON.stringify(this.shouldShowFeedbackFor)!==JSON.stringify(e)&&(this.shouldShowFeedbackFor=e)}_prioritizeAndFilterFeedback({validationResult:e}){const t=this.constructor.validationTypes,i=e.filter(e=>this.feedbackCondition(e.type,this._feedbackConditionMeta,this._showFeedbackConditionFor.bind(this))).sort((e,i)=>t.indexOf(e.type)-t.indexOf(i.type));return i.slice(0,this._visibleMessagesAmount)}}),Kn=bt(e=>class extends(Ys(Gn(Gs(e)))){static get properties(){return{multipleChoice:{type:Boolean,attribute:"multiple-choice"}}}get modelValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.choiceValue):e[0]?e[0].choiceValue:""}set modelValue(e){const t=(t,i)=>"object"==typeof t.choiceValue?JSON.stringify(t.choiceValue)===JSON.stringify(e):t.choiceValue===i;this.__isInitialModelValue?this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this._setCheckedElements(e,t),this.requestUpdate("modelValue",this._oldModelValue)}):(this._setCheckedElements(e,t),this.requestUpdate("modelValue",this._oldModelValue)),this._oldModelValue=this.modelValue}get serializedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.serializedValue.value):e[0]?e[0].serializedValue.value:""}set serializedValue(e){const t=(e,t)=>e.serializedValue.value===t;this.__isInitialSerializedValue?this.registrationComplete.then(()=>{this.__isInitialSerializedValue=!1,this._setCheckedElements(e,t),this.requestUpdate("serializedValue")}):(this._setCheckedElements(e,t),this.requestUpdate("serializedValue"))}get formattedValue(){const e=this._getCheckedElements();return this.multipleChoice?e.map(e=>e.formattedValue):e[0]?e[0].formattedValue:""}set formattedValue(e){const t=(e,t)=>e.formattedValue===t;this.__isInitialFormattedValue?this.registrationComplete.then(()=>{this.__isInitialFormattedValue=!1,this._setCheckedElements(e,t)}):this._setCheckedElements(e,t)}get operationMode(){return"choice-group"===this._repropagationRole?"select":"enter"}constructor(){super(),this.multipleChoice=!1,this._repropagationRole="choice-group",this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this.__isInitialFormattedValue=!0}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__isInitialFormattedValue=!1})}_completeRegistration(){Promise.resolve().then(()=>super._completeRegistration())}updated(e){super.updated(e),e.has("name")&&this.name!==e.get("name")&&this.formElements.forEach(e=>{e.name=this.name})}addFormElement(e,t){this._throwWhenInvalidChildModelValue(e),e.name=this.name,super.addFormElement(e,t)}clear(){this.multipleChoice?this.modelValue=[]:this.modelValue=""}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}_getFromAllFormElementsFilter(e,t){return!0}_getFromAllFormElements(e,t){const i=t||this._getFromAllFormElementsFilter;if("modelValue"===e||"serializedValue"===e||"formattedValue"===e)return this[e];const s=this.formElements.filter(t=>i(t,e));return"_initialModelValue"===e?this.multipleChoice?s.filter(t=>t[e].checked).map(t=>t[e].value):s.find(t=>t[e].checked)?.value:s.map(t=>t[e])}_throwWhenInvalidChildModelValue(e){if("boolean"!=typeof e.modelValue.checked||!Object.prototype.hasOwnProperty.call(e.modelValue,"value"))throw new Error(`The ${this.tagName.toLowerCase()} name="${this.name}" does not allow to register ${e.tagName.toLowerCase()} with .modelValue="${e.modelValue}" - The modelValue should represent an Object { value: "foo", checked: false }`)}_isEmpty(){return this.multipleChoice?0===this.modelValue.length:"string"==typeof this.modelValue&&""===this.modelValue||void 0===this.modelValue||null===this.modelValue}_checkSingleChoiceElements(e){const{target:t}=e;if(!1===t.checked)return;const i=t.name;this.formElements.filter(e=>e.name===i).forEach(e=>{e!==t&&(e.checked=!1)})}_getCheckedElements(){return this.formElements.filter(e=>e.checked&&!e.disabled)}_setCheckedElements(e,t){if(null!=e)for(let i=0;i<this.formElements.length;i+=1)if(this.multipleChoice){let t=e.includes(this.formElements[i].modelValue.value);"object"==typeof this.formElements[i].modelValue.value&&(t=e.map(e=>JSON.stringify(e)).includes(JSON.stringify(this.formElements[i].modelValue.value))),this.formElements[i].checked=t}else t(this.formElements[i],e)?this.formElements[i].checked=!0:this.formElements[i].checked=!1;else this.formElements.forEach(e=>e.checked=!1)}__setChoiceGroupTouched(){const e=this.modelValue;null!=e&&e!==this.__previousCheckedValue&&(this.touched=!0,this.__previousCheckedValue=e)}_onBeforeRepropagateChildrenValues(e){const t=e.detail&&e.detail.element||e.target;!this.multipleChoice&&t.checked&&(this.formElements.forEach(e=>{t.choiceValue!==e.choiceValue&&(e.checked=!1)}),this.__setChoiceGroupTouched(),this.requestUpdate("modelValue",this._oldModelValue),this._oldModelValue=this.modelValue)}_repropagationCondition(e){return!("choice-group"===this._repropagationRole&&!this.multipleChoice&&!e.checked)}});class Yn extends EventTarget{constructor(e,t){super(),this.__param=e,this.__config=t||{},this.type=t?.type||"error"}static _$isValidator$=!0;static validatorName="";static async=!1;execute(e,t,i){if(!this.constructor.validatorName)throw new Error("A validator needs to have a name! Please set it via \"static get validatorName() { return 'IsCat'; }\"");return!0}set param(e){this.__param=e,this.dispatchEvent(new Event("param-changed"))}get param(){return this.__param}set config(e){this.__config=e,this.dispatchEvent(new Event("config-changed"))}get config(){return this.__config}async _getMessage(e){const t=this.constructor,i={name:t.validatorName,type:this.type,params:this.param,config:this.config,...e};if(this.config.getMessage){if("function"==typeof this.config.getMessage)return this.config.getMessage(i);throw new Error("You must provide a value for getMessage of type 'function', you provided a value of type: "+typeof this.config.getMessage)}return t.getMessage(i)}static async getMessage(e){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(e){}onFormControlDisconnect(e){}abortExecution(){}}class Zn extends Yn{static get validatorName(){return"FormElementsHaveNoError"}execute(e,t,i){const s=i?.node._anyFormElementHasFeedbackFor("error");return s}static async getMessage(){return""}}const Jn=bt(e=>class extends(Ys(Ws(Gn(Fi(zs(e)))))){static get properties(){return{submitted:{type:Boolean,reflect:!0},focused:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},touched:{type:Boolean,reflect:!0},prefilled:{type:Boolean,reflect:!0}}}get _inputNode(){return this}get modelValue(){return this._getFromAllFormElements("modelValue")}set modelValue(e){this.__isInitialModelValue?(this.__isInitialModelValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("modelValue",e)})):this._setValueMapForAllFormElements("modelValue",e)}get serializedValue(){return this._getFromAllFormElements("serializedValue")}set serializedValue(e){this.__isInitialSerializedValue?(this.__isInitialSerializedValue=!1,this.registrationComplete.then(()=>{this._setValueMapForAllFormElements("serializedValue",e)})):this._setValueMapForAllFormElements("serializedValue",e)}get formattedValue(){return this._getFromAllFormElements("formattedValue")}set formattedValue(e){this._setValueMapForAllFormElements("formattedValue",e)}get prefilled(){return this._everyFormElementHas("prefilled")}constructor(){super(),this.value="",this.disabled=!1,this.submitted=!1,this.dirty=!1,this.touched=!1,this.focused=!1,this.__addedSubValidators=!1,this.__isInitialModelValue=!0,this.__isInitialSerializedValue=!0,this._checkForOutsideClick=this._checkForOutsideClick.bind(this),this.addEventListener("focusin",this._syncFocused),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("dirty-changed",this._syncDirty),this.addEventListener("validate-performed",this.__onChildValidatePerformed),this.defaultValidators=[new Zn],this.__descriptionElementsInParentChain=new Set,this.__pendingValues={modelValue:{},serializedValue:{}}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.initComplete.then(()=>{this.__isInitialModelValue=!1,this.__isInitialSerializedValue=!1,this.__initInteractionStates()})}disconnectedCallback(){super.disconnectedCallback(),this.__hasActiveOutsideClickHandling&&(document.removeEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!1),this.__descriptionElementsInParentChain.clear()}__initInteractionStates(){this.formElements.forEach(e=>{"function"==typeof e.initInteractionState&&e.initInteractionState()})}_triggerInitialModelValueChangedEvent(){this.registrationComplete.then(()=>{this._dispatchInitialModelValueChangedEvent()})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestChildrenToBeDisabled():this.__retractRequestChildrenToBeDisabled()),e.has("focused")&&!0===this.focused&&this.__setupOutsideClickHandling()}__setupOutsideClickHandling(){this.__hasActiveOutsideClickHandling||(document.addEventListener("click",this._checkForOutsideClick),this.__hasActiveOutsideClickHandling=!0)}_checkForOutsideClick(e){!this.contains(e.target)&&(this.touched=!0)}__requestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestChildrenToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}_inputGroupTemplate(){return H`
        <div class="input-group">
          <slot></slot>
        </div>
      `}submitGroup(){this.submitted=!0,this.formElements.forEach(e=>{"function"==typeof e.submitGroup?e.submitGroup():e.submitted=!0})}resetGroup(){this.formElements.forEach(e=>{"function"==typeof e.resetGroup?e.resetGroup():"function"==typeof e.reset&&e.reset()}),this.resetInteractionState()}clearGroup(){this.formElements.forEach(e=>{"function"==typeof e.clearGroup?e.clearGroup():"function"==typeof e.clear&&e.clear()}),this.resetInteractionState()}resetInteractionState(){this.submitted=!1,this.touched=!1,this.dirty=!1,this.formElements.forEach(e=>{"function"==typeof e.resetInteractionState&&e.resetInteractionState()})}_getFromAllFormElementsFilter(e,t){return!e.disabled}_getFromAllFormElements(e,t){const i={},s=t||this._getFromAllFormElementsFilter;return this.formElements._keys().forEach(t=>{const n=this.formElements[t];n instanceof Ks?i[t]=n.filter(t=>s(t,e)).map(t=>t[e]):s(n,e)&&("function"==typeof n._getFromAllFormElements?i[t]=n._getFromAllFormElements(e):i[t]=n[e])}),i}_setValueForAllFormElements(e,t){this.formElements.forEach(i=>{i[e]=t})}_setValueMapForAllFormElements(e,t){t&&"object"==typeof t&&Object.keys(t).forEach(i=>{Array.isArray(this.formElements[i])&&this.formElements[i].forEach((s,n)=>{s[e]=t[i][n]}),this.formElements[i]?this.formElements[i][e]=t[i]:this.__pendingValues[e][i]=t[i]})}_anyFormElementHas(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>!!t[e]):!!this.formElements[t][e])}_anyFormElementHasFeedbackFor(e){return Object.keys(this.formElements).some(t=>Array.isArray(this.formElements[t])?this.formElements[t].some(t=>Boolean(t.hasFeedbackFor&&t.hasFeedbackFor.includes(e))):Boolean(this.formElements[t].hasFeedbackFor&&this.formElements[t].hasFeedbackFor.includes(e)))}_everyFormElementHas(e){return Object.keys(this.formElements).every(t=>Array.isArray(this.formElements[t])?this.formElements[t].every(t=>!!t[e]):!!this.formElements[t][e])}__onChildValidatePerformed(e){e&&this.isRegisteredFormElement(e.target)&&this.validate()}_syncFocused(){this.focused=this._anyFormElementHas("focused")}_onFocusOut(e){const t=this.formElements[this.formElements.length-1];e.target===t&&(this.touched=!0),this.focused=!1}_syncDirty(){this.dirty=this._anyFormElementHas("dirty")}__storeAllDescriptionElementsInParentChain(){let e=this;for(;e;)Us(e._getAriaDescriptionElements(),{reverse:!0}).forEach(e=>{"feedback"===e.getAttribute("slot")&&this.__descriptionElementsInParentChain.add(e)}),e=e._parentFormGroup}__linkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{"function"==typeof e.addToAriaDescribedBy&&e.addToAriaDescribedBy(t,{reorder:!1})})}__unlinkParentMessages(e){this.__descriptionElementsInParentChain.forEach(t=>{"function"==typeof e.removeFromAriaDescribedBy&&e.removeFromAriaDescribedBy(t)})}addFormElement(e,t){if(super.addFormElement(e,t),this.disabled&&e.makeRequestToBeDisabled(),this.__descriptionElementsInParentChain.size||this.__storeAllDescriptionElementsInParentChain(),this.__linkParentMessages(e),this.validate({clearCurrentResult:!0}),!e.modelValue){const t=this.__pendingValues;t.modelValue&&t.modelValue[e.name]?e.modelValue=t.modelValue[e.name]:t.serializedValue&&t.serializedValue[e.name]&&(e.serializedValue=t.serializedValue[e.name])}}get _initialModelValue(){return this._getFromAllFormElements("_initialModelValue")}removeFormElement(e){super.removeFormElement(e),this.validate({clearCurrentResult:!0}),"function"==typeof e.removeFromAriaLabelledBy&&this._labelNode&&e.removeFromAriaLabelledBy(this._labelNode,{reorder:!1}),this.__unlinkParentMessages(e)}_isEmpty(){return this.formElements.every(e=>e._isEmpty?.())}});class Qn extends(Kn(Jn(pe))){constructor(){super(),this.multipleChoice=!0}}customElements.get("craft-checkbox-group")||customElements.define("craft-checkbox-group",class extends Qn{constructor(...e){super(...e),this.__ssrNameAdopted=!1}connectedCallback(){this.__adoptSlottedName(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedName(),super.willUpdate(e)}__adoptSlottedName(){if(this.__ssrNameAdopted||this.name)return;let e=this.querySelector('input[type="checkbox"][name]');e&&(this.__ssrNameAdopted=!0,this.name=e.name)}static get styles(){return[...Qn.styles,r`
        ${Ls}

        .input-group {
          display: grid;
          gap: var(--c-spacing-sm);
        }

        .form-field__group-two {
          margin-top: var(--c-spacing-sm);
        }

        ::slotted(label) {
          font-weight: bold;
        }
      `]}});const Xn=window,eo=new WeakMap,to=bt(e=>class extends e{static get properties(){return{focused:{type:Boolean,reflect:!0},focusedVisible:{type:Boolean,reflect:!0,attribute:"focused-visible"},autofocus:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1,this.focusedVisible=!1,this.autofocus=!1}firstUpdated(e){super.firstUpdated(e),this.__registerEventsForFocusMixin(),this.__syncAutofocusToFocusableElement()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEventsForFocusMixin()}updated(e){super.updated(e),e.has("autofocus")&&this.__syncAutofocusToFocusableElement()}__syncAutofocusToFocusableElement(){this._focusableNode&&(this.hasAttribute("autofocus")?this._focusableNode.setAttribute("autofocus",""):this._focusableNode.removeAttribute("autofocus"))}focus(){this._focusableNode?.focus()}blur(){this._focusableNode?.blur()}get _focusableNode(){return this._inputNode||document.createElement("input")}__onFocus(){if(this.focused=!0,"function"==typeof Xn.applyFocusVisiblePolyfill)this.focusedVisible=this._focusableNode.hasAttribute("data-focus-visible-added");else try{this.focusedVisible=this._focusableNode.matches(":focus-visible")}catch(e){this.focusedVisible=!1}}__onBlur(){this.focused=!1,this.focusedVisible=!1}__registerEventsForFocusMixin(){var e;e=this.getRootNode(),Xn.applyFocusVisiblePolyfill&&!eo.has(e)&&(Xn.applyFocusVisiblePolyfill(e),eo.set(e,void 0)),this.__redispatchFocus=e=>{e.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._focusableNode.addEventListener("focus",this.__redispatchFocus),this.__redispatchBlur=e=>{e.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._focusableNode.addEventListener("blur",this.__redispatchBlur),this.__redispatchFocusin=e=>{e.stopPropagation(),this.__onFocus(),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusin",this.__redispatchFocusin),this.__redispatchFocusout=e=>{e.stopPropagation(),this.__onBlur(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._focusableNode.addEventListener("focusout",this.__redispatchFocusout)}__teardownEventsForFocusMixin(){this._focusableNode&&(this._focusableNode?.removeEventListener("focus",this.__redispatchFocus),this._focusableNode?.removeEventListener("blur",this.__redispatchBlur),this._focusableNode?.removeEventListener("focusin",this.__redispatchFocusin),this._focusableNode?.removeEventListener("focusout",this.__redispatchFocusout))}}),io=bt(e=>class extends(Gn(Ws(e))){static get properties(){return{formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOptions:{attribute:!1}}}#g={didFormatterOutputSyncToView:!1,didFormatterRun:!1};requestUpdate(e,t,i){super.requestUpdate(e,t,i),"modelValue"===e&&this.modelValue!==t&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:t}),"serializedValue"===e&&this.serializedValue!==t&&this._calculateValues({source:"serialized"}),"formattedValue"===e&&this.formattedValue!==t&&this._calculateValues({source:"formatted"})}get value(){return this._inputNode?.value||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}preprocessor(e,t){}parser(e,t){return e}formatter(e,t){return e}serializer(e){return void 0!==e?e:""}deserializer(e){return void 0===e?"":e}_calculateValues({source:e}={source:null}){this.__preventRecursiveTrigger||(this.__preventRecursiveTrigger=!0,"model"!==e&&("serialized"===e?this.modelValue=this.deserializer(this.serializedValue):"formatted"===e&&(this.modelValue=this._callParser())),"formatted"!==e&&(this.formattedValue=this._callFormatter()),"serialized"!==e&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.__preventRecursiveTrigger=!1,this.__prevViewValue=this.value)}_callParser(e=this.formattedValue){if(""===e)return"";if("string"!=typeof e)return;const t=this.parser(e,{...this.formatOptions,mode:this.#v(),viewValueStates:this.#b()});return void 0!==t?t:new qs(e)}_callFormatter(){return this.#g.didFormatterRun=!1,this._isHandlingUserInput&&this.hasFeedbackFor?.includes("error")&&this._inputNode?this.value:this.modelValue instanceof qs?this.modelValue.viewValue:(this.#g.didFormatterRun=!0,this.formatter(this.modelValue,{...this.formatOptions,mode:this.#v(),viewValueStates:this.#b()}))}_onModelValueChanged(...e){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...e)}_dispatchModelValueChangedEvent(...e){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:Boolean(this._isHandlingUserInput)}}))}_syncValueUpwards(){this.__isHandlingComposition||this.__handlePreprocessor();const e=this.formattedValue;this.modelValue=this._callParser(this.value),e===this.formattedValue&&this.__prevViewValue!==this.value&&this._calculateValues()}__handlePreprocessor(){let e=this.value.length;this._inputNode&&"selectionStart"in this._inputNode&&"range"!==this._inputNode?.type&&(e=this._inputNode.selectionStart);const t=this.preprocessor(this.value,{...this.formatOptions,currentCaretIndex:e,prevViewValue:this.__prevViewValue});if(void 0!==t)if("string"==typeof t)this.value=t;else if("object"==typeof t){const{viewValue:e,caretIndex:i}=t;this.value=e,i&&this._inputNode&&"selectionStart"in this._inputNode&&(this._inputNode.selectionStart=i,this._inputNode.selectionEnd=i)}}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=void 0!==this.formattedValue?this.formattedValue:"",this.#g.didFormatterOutputSyncToView=Boolean(this.formattedValue)&&this.#g.didFormatterRun)}_reflectBackOn(){return!this._isHandlingUserInput}_proxyInputEvent(){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}_onUserInputChanged(){this._isHandlingUserInput=!0,this._syncValueUpwards(),this._isHandlingUserInput=!1}__onCompositionEvent({type:e}){"compositionstart"===e?this.__isHandlingComposition=!0:"compositionend"===e&&(this.__isHandlingComposition=!1,this._syncValueUpwards())}constructor(){super(),this.formatOn="change",this.formatOptions={mode:"auto"},this.formattedValue=void 0,this.serializedValue=void 0,this._isPasting=!1,this._isHandlingUserInput=!1,this.__prevViewValue="",this.__onCompositionEvent=this.__onCompositionEvent.bind(this),this.addEventListener("user-input-changed",this._onUserInputChanged),this.addEventListener("paste",this.__onPaste),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)}}__onPaste(){this._isPasting=!0,setTimeout(()=>{this._isPasting=!1})}connectedCallback(){super.connectedCallback(),void 0===this.modelValue&&this._syncValueUpwards(),this.__prevViewValue=this.value,this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent),this._inputNode.addEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.addEventListener("compositionend",this.__onCompositionEvent))}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.removeEventListener("compositionstart",this.__onCompositionEvent),this._inputNode.removeEventListener("compositionend",this.__onCompositionEvent))}#v(){return this._isPasting?"pasted":this._isHandlingUserInput&&this.__prevViewValue?"user-edited":"auto"}#b(){const e=[];return this.#g.didFormatterOutputSyncToView&&e.push("formatted"),e}}),so=bt(e=>class extends(io(to(Ws(e)))){static get properties(){return{autocomplete:{type:String,reflect:!0}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return super._inputNode}get selectionStart(){const e=this._inputNode;return e&&e.selectionStart?e.selectionStart:0}set selectionStart(e){const t=this._inputNode;t&&t.selectionStart&&(t.selectionStart=e)}get selectionEnd(){const e=this._inputNode;return e&&e.selectionEnd?e.selectionEnd:0}set selectionEnd(e){const t=this._inputNode;t&&t.selectionEnd&&(t.selectionEnd=e)}get value(){return this._inputNode&&this._inputNode.value||this.__value||""}set value(e){this._inputNode?(this._inputNode.value!==e&&this._setValueAndPreserveCaret(e),this.__value=void 0):this.__value=e}_setValueAndPreserveCaret(e){if(this.focused)try{if(!(this._inputNode instanceof HTMLSelectElement)){const t=this._inputNode.selectionStart;this._inputNode.value=e,this._inputNode.selectionStart=t,this._inputNode.selectionEnd=t}}catch(t){this._inputNode.value=e}else this._inputNode.value=e}_reflectBackFormattedValueToUser(){if(super._reflectBackFormattedValueToUser(),this._reflectBackOn()&&this.focused)try{this._inputNode.selectionStart=this._inputNode.value.length}catch(e){}}get _focusableNode(){return this._inputNode}});class no extends(Ws(Gs(to(io(Gn(zs(pe))))))){firstUpdated(e){super.firstUpdated(e),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener("change",this._onChange),this.classList.add("form-field")}disconnectedCallback(){super.disconnectedCallback(),this._inputNode?.removeEventListener("change",this._onChange)}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){this.modelValue=""}_onChange(e){this.dispatchEvent(new Event("user-input-changed",{bubbles:!0}))}get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}class oo extends(so(no)){static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("input"),t=this.getAttribute("value");return t&&e.setAttribute("value",t),e}}}get _inputNode(){return super._inputNode}constructor(){super(),this.readOnly=!1,this.type="text",this.placeholder=""}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"readOnly"===e&&this.__delegateReadOnly()}firstUpdated(e){super.firstUpdated(e),this.__delegateReadOnly()}updated(e){super.updated(e),e.has("type")&&(this._inputNode.type=this.type),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}__delegateReadOnly(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}}const ro=(e,t={})=>e.value!==t.value||e.checked!==t.checked,ao=bt(e=>class extends(io(e)){static get properties(){return{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},modelValue:{type:Object,hasChanged:ro},choiceValue:{type:Object}}}get choiceValue(){return this.modelValue.value}set choiceValue(e){this.requestUpdate("choiceValue",this.choiceValue),this.modelValue.value!==e&&(this.modelValue={value:e,checked:this.modelValue.checked})}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"modelValue"===e?this.modelValue.checked!==this.checked&&this.__syncModelCheckedToChecked(this.modelValue.checked):"checked"===e&&this.modelValue.checked!==this.checked&&this.__syncCheckedToModel(this.checked)}firstUpdated(e){super.firstUpdated(e),e.has("checked")&&this.__syncCheckedToInputElement()}updated(e){super.updated(e),e.has("modelValue")&&this.__syncCheckedToInputElement(),e.has("name")&&this._parentFormGroup&&this._parentFormGroup.name!==this.name&&this._syncNameToParentFormGroup()}constructor(){super(),this.modelValue={value:"",checked:!1},this.disabled=!1,this._preventDuplicateLabelClick=this._preventDuplicateLabelClick.bind(this),this._toggleChecked=this._toggleChecked.bind(this)}static get styles(){return[...super.styles||[],r`
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
        `]}render(){return H`
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
      `}_choiceGraphicTemplate(){return Y}_afterTemplate(){return Y}connectedCallback(){super.connectedCallback(),this._labelNode&&this._labelNode.addEventListener("click",this._preventDuplicateLabelClick),this.addEventListener("user-input-changed",this._toggleChecked)}disconnectedCallback(){super.disconnectedCallback(),this._labelNode&&this._labelNode.removeEventListener("click",this._preventDuplicateLabelClick),this.removeEventListener("user-input-changed",this._toggleChecked)}_preventDuplicateLabelClick(e){const t=e=>{e.stopImmediatePropagation(),this._inputNode.removeEventListener("click",t)};this._inputNode.addEventListener("click",t)}_toggleChecked(e){this.disabled||(this._isHandlingUserInput=!0,this.checked=!this.checked,this._isHandlingUserInput=!1)}_syncNameToParentFormGroup(){this._parentFormGroup.tagName.includes(this.tagName)&&(this.name=this._parentFormGroup?.name||"")}__syncModelCheckedToChecked(e){this.checked=e}__syncCheckedToModel(e){this.modelValue={value:this.choiceValue,checked:e}}__syncCheckedToInputElement(){this._inputNode&&(this._inputNode.checked=this.checked)}_proxyInputEvent(){}_onModelValueChanged({modelValue:e},t){let i;t&&t.modelValue&&(i=t.modelValue),this.constructor.elementProperties.get("modelValue").hasChanged(e,i)&&super._onModelValueChanged({modelValue:e})}parser(){return this.modelValue}formatter(e){return e&&void 0!==e.value?e.value:e}clear(){this.checked=!1}_isEmpty(){return!this.checked}_syncValueUpwards(){}});class lo extends(ao(oo)){connectedCallback(){super.connectedCallback(),this.type="checkbox"}}class co extends lo{static get styles(){return[...super.styles||[],r`
        :host .choice-field__nested-checkboxes {
          display: block;
        }
        ::slotted(*) {
          padding-left: 8px;
        }
      `]}static get properties(){return{indeterminate:{type:Boolean,reflect:!0},mixedState:{type:Boolean,reflect:!0,attribute:"mixed-state"}}}get _checkboxGroupNode(){return this._parentFormGroup}get _subCheckboxes(){return this.__subCheckboxes}_storeIndeterminateState(){this._indeterminateSubStates=this._subCheckboxes.map(e=>e.checked)}_setOldState(){this.indeterminate?this._oldState="indeterminate":this._oldState=this.checked?"checked":"unchecked"}_setOwnCheckedState(){const e=this._subCheckboxes;if(!e.length)return;this.__settingOwnChecked=!0;const t=e.filter(e=>e.checked);switch(e.length-t.length){case 0:this.indeterminate=!1,this.checked=!0;break;case e.length:this.indeterminate=!1,this.checked=!1;break;default:{this.indeterminate=!0;const i=e.filter(e=>e.disabled&&!1===e.checked);this.checked=e.length-t.length-i.length===0}}this.updateComplete.then(()=>{this.__settingOwnChecked=!1})}_setBasedOnMixedState(){switch(this._oldState){case"checked":this.checked=!1,this.indeterminate=!1;break;case"unchecked":this.checked=!1,this.indeterminate=!0;break;case"indeterminate":this.checked=!0,this.indeterminate=!1}}__onModelValueChanged(e){if(!this.disabled){if(e.detail.formPath[0]!==this||this.__settingOwnChecked)this._setOwnCheckedState(),this.updateComplete.then(()=>{this.__settingOwnSubs||this.__settingOwnChecked||!this.mixedState||this._storeIndeterminateState()});else{const e=e=>e.every(t=>t===e[0]);this.mixedState&&!e(this._indeterminateSubStates)&&this._setBasedOnMixedState(),this.__settingOwnSubs=!0;const t=this._subCheckboxes,i=t.filter(e=>e.checked),s=t.filter(e=>e.disabled),n=t.length>0&&t.length===i.length;t.length>0&&t.length===s.length&&(this.checked=n),this.indeterminate&&this.mixedState?this._subCheckboxes.forEach((e,t)=>{e.checked=this._indeterminateSubStates[t]}):this._subCheckboxes.filter(e=>!e.disabled).forEach(e=>{e.checked=this._inputNode.checked}),this.updateComplete.then(()=>{this.__settingOwnSubs=!1})}this.mixedState&&this._setOldState()}}_afterTemplate(){return H`
      <div class="choice-field__nested-checkboxes" role="list">
        <slot></slot>
      </div>
    `}_onRequestToAddFormElement(e){e.target.hasAttribute("role")||e.target?.setAttribute("role","listitem"),this.__addToSubCheckboxes(e.detail.element),this._setOwnCheckedState()}_onRequestToRemoveFormElement(e){"listitem"===e.target.getAttribute("role")&&e.target?.removeAttribute("role"),this.__removeFromSubCheckboxes(e.detail.element)}__addToSubCheckboxes(e){e!==this&&this.contains(e)&&this.__subCheckboxes.push(e)}__removeFromSubCheckboxes(e){const t=this.__subCheckboxes.indexOf(e);-1!==t&&this.__subCheckboxes.splice(t,1)}constructor(){super(),this.indeterminate=!1,this._onRequestToAddFormElement=this._onRequestToAddFormElement.bind(this),this.__onModelValueChanged=this.__onModelValueChanged.bind(this),this.__subCheckboxes=[],this._indeterminateSubStates=[],this.mixedState=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",this.__onModelValueChanged),this.addEventListener("form-element-register",this._onRequestToAddFormElement)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("model-value-changed",this.__onModelValueChanged),this.removeEventListener("form-element-register",this._onRequestToAddFormElement)}firstUpdated(e){super.firstUpdated(e),this._setOldState(),this.indeterminate&&this._storeIndeterminateState()}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&(this._inputNode.indeterminate=this.indeterminate)}}customElements.get("craft-checkbox-indeterminate")||customElements.define("craft-checkbox-indeterminate",class extends co{static get styles(){return[...co.styles,r`
        :host {
          display: flex;
          align-items: center;
          gap: 0 var(--c-spacing-md);
        }

        ::slotted(label) {
          font-weight: bold;
        }

        ::slotted(*) {
          padding-left: 0;
        }
      `]}});const ho=e=>class extends e{constructor(...e){super(...e),this.__ssrStateAdopted=!1}set value(e){""===e&&!this.__ssrStateAdopted&&this.__slottedInput()?.hasAttribute("value")||(super.value=e)}get value(){return super.value}connectedCallback(){this.__adoptSlottedInputState(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedInputState(),super.willUpdate(e)}updated(e){super.updated(e);let{_inputNode:t}=this,i=this.choiceValue;"string"==typeof i&&""!==i&&t instanceof HTMLInputElement&&t.value!==i&&(t.value=i)}__slottedInput(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&"input"===e.slot)}__adoptSlottedInputState(){if(this.__ssrStateAdopted)return;let e=this.__slottedInput();if(!e)return;this.__ssrStateAdopted=!0,e.id&&(this._inputId=e.id),!this.name&&e.name&&(this.name=e.name);let t=e.getAttribute("value")??e.value;t&&(this.choiceValue=t,e.value=t),e.checked&&(this.checked=!0),e.disabled&&(this.disabled=!0)}};var uo=class extends(ho(lo)){constructor(...e){super(...e),this.__inputPatched=!1,this.indeterminate=!1}connectedCallback(){super.connectedCallback(),this.__patchSlottedInputProps()}updated(e){super.updated(e),this.__patchSlottedInputProps();let t=this._inputNode;t&&(t.indeterminate=this.indeterminate)}__patchSlottedInputProps(){if(this.__inputPatched)return;let e=this.__slottedInputElement();if(!e)return;this.__inputPatched=!0;let t=this;for(let i of["checked","disabled"]){let s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,i);if(!s?.get||!s.set)continue;let{get:n,set:o}=s;Object.defineProperty(e,i,{configurable:!0,enumerable:s.enumerable,get(){return n.call(this)},set(e){o.call(this,e),t[i]!==e&&(t[i]=e)}})}}__slottedInputElement(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&"input"===e.slot)}static get styles(){return[...lo.styles,r`
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

        ::slotted([slot='input']) {
          background-color: var(--c-input-fill, var(--c-form-control-fill));
          border-width: var(
            --c-input-border-width,
            var(--c-form-control-border-width)
          );
          border-style: var(
            --c-input-border-style,
            var(--c-form-control-border-style)
          );
          border-color: var(
            --c-input-border-color,
            var(--c-form-control-border-color)
          );
          border-radius: var(--c-input-radius, var(--c-radius-sm));
          width: var(--c-checkbox-size);
          height: var(--c-checkbox-size);
        }

        .choice-field__help-text {
          font-size: 1em;
          color: var(--c-text-quiet);
          grid-area: help-text;
        }
      `]}};ge([_e({type:Boolean,reflect:!0})],uo.prototype,"indeterminate",void 0),customElements.get("craft-checkbox")||customElements.define("craft-checkbox",uo);const po=new Map;function mo(e){if(!(e instanceof HTMLScriptElement))return e.cloneNode(!0);let t=document.createElement("script");for(let i of e.attributes)t.setAttribute(i.name,i.value);return t.textContent=e.textContent,t.async=!1,t}function fo(e){return e instanceof HTMLLinkElement&&e.href?{key:`link:${e.href}`,selector:"link[href]",value:e.href}:e instanceof HTMLScriptElement&&e.src?{key:`script:${e.src}`,selector:"script[src]",value:e.src}:null}function go(e){return Array.from(document.querySelectorAll(e.selector)).some(t=>(t instanceof HTMLLinkElement?t.href:t.src)===e.value)}function vo(e,t){return new Promise((i,s)=>{e.addEventListener("load",()=>i(),{once:!0}),e.addEventListener("error",()=>s(Error(`Failed to load asset [${t}].`)),{once:!0})})}async function bo(e,t){try{await e}catch(e){if(t)throw e}}function _o(e,t){t.references--,!(t.references>0)&&(t.node.remove(),po.delete(e))}function yo(e){return"function"==typeof e.checkVisibility?e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}):e.offsetWidth>0||e.offsetHeight>0}function ko(e){return"object"==typeof e&&!!e&&"checked"in e&&"boolean"==typeof e.checked}var wo=new WeakMap,xo=class e{constructor(){this.queue=[],this.workers=[],Ne(this,wo,null),Oe(wo,this,new AbortController);for(let e=0;e<3;e++)this.workers.push(new Ao(this))}load(t=document,i="[data-sizes]"){t.querySelectorAll(i).forEach(t=>{if(yo(t))this.addToQueue(t);else{let i=`thumb${Math.floor(1e6*Math.random())}`;e.invisibleThumbs[i]=[this,t];let s=()=>{e.invisibleThumbs[i]&&yo(t)&&(delete e.invisibleThumbs[i],this.addToQueue(t))};document.addEventListener("scroll",s,{signal:Te(wo,this)?.signal}),window.addEventListener("resize",s,{signal:Te(wo,this)?.signal})}})}addToQueue(e){this.queue.push(e),this.workers.forEach(e=>{e.active||e.loadNext()})}static retryAll(){for(let t in e.invisibleThumbs){let i=e.invisibleThumbs[t];if(!i)continue;let[s,n]=i;delete e.invisibleThumbs[t],s.load(n.parentElement??document)}}destroy(){this.workers.forEach(e=>e.deactivate()),Te(wo,this)?.abort()}};xo.invisibleThumbs={};var Eo=new WeakMap,Co=new WeakMap,So=new WeakMap,Ao=class{constructor(e){this.active=!1,this.container=void 0,Ne(this,Eo,null),Ne(this,Co,null),Ne(this,So,null),Oe(Eo,this,e)}activate(){this.active||(this.active=!0,this.clearInterval(),Oe(Co,this,setInterval(()=>{this.loadNextIfRemoved()},500)))}deactivate(){this.active&&(this.active=!1,this.clearInterval(),this.clearTimeout())}clearInterval(){Te(Co,this)&&(clearInterval(Te(Co,this)),Oe(Co,this,null))}clearTimeout(){Te(So,this)&&(clearTimeout(Te(So,this)),Oe(So,this,null))}loadNext(){if(this.clearTimeout(),this.container=Te(Eo,this)?.queue.shift(),void 0===this.container)return void this.deactivate();if(this.loadNextIfRemoved())return;if(this.container.querySelectorAll("img").length>0)return void this.loadNext();this.activate(),Oe(So,this,setTimeout(()=>{this.loadNext()},3e4));let e=document.createElement("img");e.sizes=this.container.getAttribute("data-sizes")??"",e.srcset=this.container.getAttribute("data-srcset")??"",e.alt=this.container.getAttribute("data-alt")??"",e.setAttribute("data-animated",this.container.getAttribute("data-animated")??""),e.src=this.container.getAttribute("data-src")??"",e.onload=()=>this.loadNext(),e.onabort=()=>this.loadNext(),e.onerror=()=>this.loadNext(),this.container.appendChild(e)}loadNextIfRemoved(){return!(!this.container||document.body.contains(this.container)||(this.loadNext(),0))}},No=r`
  :host {
    display: contents;
  }

  ::slotted([slot='status']) {
    display: inline-flex;
  }

  .cp-chip {
    --_min-height: var(--c-chip-height, none);
    --_thumb-size: calc(24rem / 16);
    --_radius: var(--c-chip-radius, var(--c-radius-md));
    --_fill: var(--c-color-fill-quiet, var(--c-surface-raised));
    padding: 0;
    display: inline-flex;
    min-width: auto;
    border-radius: var(--_radius);
    align-items: center;
    box-shadow: var(--c-chip-shadow, var(--c-shadow-sm));

    /* colorable styles */
    color: var(--c-color-on-quiet, var(--c-color-neutral-on-quiet));
    border-width: var(--c-chip-border-width, 1px);
    border-style: var(--c-chip-border-style, solid);
    border-color: var(
      --c-color-border-quiet,
      var(--c-color-neutral-border-quiet)
    );
    background-color: var(--c-color-fill-quiet, var(--c-surface-raised));
    overflow: clip;
  }

  .cp-chip__body ::slotted(a) {
    text-decoration: none;
    font-weight: bold;
    display: flex;
  }

  .cp-chip[appearance='plain'],
  .cp-chip--plain {
    --_min-height: none;
    padding-block: 0;
    padding-inline: 0;
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }

  .cp-chip[size='small'],
  .cp-chip--small {
    padding-block: calc(var(--c-spacing-xs) / 2);
  }

  .cp-chip[size='medium'],
  .cp-chip--medium {
    padding-block: 0;
    min-height: var(--c-size-control-md);
  }

  .cp-chip__prefix,
  .cp-chip__body,
  .cp-chip__suffix {
    display: inline-flex;
    flex-direction: column;
    min-height: var(--_min-height);
  }

  .cp-chip__body {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cp-chip__prefix {
    position: relative;
    padding-inline-end: var(--c-spacing-sm);
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .cp-chip__suffix {
    padding-inline-start: var(--c-spacing-md);
  }

  .cp-chip__status {
    display: inline-flex;
    padding-inline: var(--c-spacing-xs);
  }

  .cp-chip__thumbnail {
    position: relative;
    padding: var(--c-spacing-sm);
    /*border-radius: calc(var(--_radius) - var(--c-spacing-xs));*/
  }
`,To=new WeakMap,Oo=class extends pe{constructor(...e){super(...e),this.size="",this.variant=Ue.Neutral,this.appearance=ni.OutlineFill,this.icon=null,this.showIndicators=!1,this.showStatus=!1,this.showThumb=!1,this.selectable=!1,Ne(this,To,new xo)}renderPrefix(){return H`<div class="cp-chip__prefix" part="prefix">
      <slot name="prefix">
        ${this.showThumb?H`<slot class="cp-chip__thumbnail" name="thumbnail"></slot>`:Y}
        ${this.icon?H`<slot class="cp-chip__icon" name="icon"
              ><craft-icon name="${this.icon}"></craft-icon
            ></slot>`:Y}
        ${this.showStatus?H`<slot class="cp-chip__status" name="status"></slot>`:Y}
      </slot>
    </div>`}firstUpdated(e){super.firstUpdated(e),Te(To,this).load(this)}render(){let e=!!this.querySelector('[slot="prefix"]')||!!this.querySelector('[slot="icon"]')||!!this.querySelector('[slot="thumbnail"]')||!!this.querySelector('[slot="indicator"]')||this.icon,t=!!this.querySelector('[slot="suffix"]');return H`
      <div
        part="chip"
        class="${Ge({"cp-chip":!0,"cp-chip--small":"small"===this.size,"cp-chip--medium":"medium"===this.size,"cp-chip--large":"large"===this.size,"cp-chip--plain":this.appearance===ni.Plain,"cp-chip--selectable":this.selectable,"cp-chip--show-thumb":this.showThumb,"cp-chip--show-indicators":this.showIndicators,"cp-chip--show-status":this.showStatus})}"
      >
        ${this.selectable?H` <input type="checkbox" />`:Y}
        ${e?this.renderPrefix():Y}
        <div class="cp-chip__body">
          <slot></slot>
        </div>
        ${t?H` <div class="cp-chip__suffix" part="suffix">
              <slot name="suffix"></slot>
            </div>`:Y}
      </div>
    `}};Oo.styles=[No],ge([_e()],Oo.prototype,"size",void 0),ge([_e({reflect:!0})],Oo.prototype,"variant",void 0),ge([_e({reflect:!0})],Oo.prototype,"appearance",void 0),ge([_e()],Oo.prototype,"icon",void 0),ge([_e({attribute:"show-indicators",type:Boolean})],Oo.prototype,"showIndicators",void 0),ge([_e({attribute:"show-status",type:Boolean})],Oo.prototype,"showStatus",void 0),ge([_e({attribute:"show-thumb",type:Boolean})],Oo.prototype,"showThumb",void 0),ge([_e({type:Boolean})],Oo.prototype,"selectable",void 0),customElements.get("craft-chip")||customElements.define("craft-chip",Oo);class Lo extends(Fi(ao(Hs(zs(pe))))){static get properties(){return{active:{type:Boolean,reflect:!0}}}static get styles(){return[r`
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
      `]}get slots(){return{}}constructor(){super(),this.active=!1,this.__onClick=this.__onClick.bind(this),this.__registerEventListeners()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"active"===e&&this.active!==t&&this.dispatchEvent(new Event("active-changed",{bubbles:!0}))}updated(e){super.updated(e),e.has("checked")&&this.setAttribute("aria-selected",`${this.checked}`),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}render(){return H`
      <div class="choice-field__label">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}__registerEventListeners(){this.addEventListener("click",this.__onClick)}__unRegisterEventListeners(){this.removeEventListener("click",this.__onClick)}__onClick(){if(this.disabled)return;const e=this._parentFormGroup;this._isHandlingUserInput=!0,e&&e.multipleChoice?(this.checked=!this.checked,this.active=!this.active):(this.checked=!0,this.active=!0),this._isHandlingUserInput=!1}}var Mo=r`
  :host([checked]),
  :host([aria-selected='true']) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
  }

  :host {
    --c-option-wide-threshold: 640;
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
`,$o=new WeakMap,Io=new WeakSet,Fo=class extends Lo{constructor(...e){super(...e),Ae(this,Io),this.hint=null,Ne(this,$o,void 0)}static get styles(){return[...Lo.styles,Mo]}connectedCallback(){super.connectedCallback(),Do._.observe(this)}disconnectedCallback(){super.disconnectedCallback(),Do._.unobserve(this)}render(){return H`
      <div class="choice-field__label">
        <slot></slot>
        ${this.hint?H`<span class="hint">${this.hint}</span>`:Y}
        <slot name="suffix"></slot>
      </div>
    `}};function Po(){return Te($o,this)??Oe($o,this,parseInt(getComputedStyle(this).getPropertyValue("--c-option-wide-threshold")||"640",10)),Te($o,this)}var Do={_:new ResizeObserver(e=>{for(let t of e){let e=t.target,i=t.borderBoxSize?.[0]?.inlineSize??t.contentRect.width;e.toggleAttribute("wide",i>=Se(Io,e,Po).call(e))}})};ge([_e()],Fo.prototype,"hint",void 0),customElements.get("craft-option")||customElements.define("craft-option",Fo);const Vo=bt(e=>class extends e{constructor(){super(),this.registrationTarget=void 0,this.__redispatchEventForFormRegistrarPortalMixin=this.__redispatchEventForFormRegistrarPortalMixin.bind(this),this.addEventListener("form-element-register",this.__redispatchEventForFormRegistrarPortalMixin)}__redispatchEventForFormRegistrarPortalMixin(e){if(e.stopPropagation(),!this.registrationTarget)throw new Error("A FormRegistrarPortal element requires a .registrationTarget");this.registrationTarget.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:e.detail.element},bubbles:!0}))}});class Ro extends(Vo(pe)){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox")}createRenderRoot(){return this}}const Bo=bt(e=>class extends(Ws(Nn(Kn(zs(Ys(e)))))){static get properties(){return{orientation:String,selectionFollowsFocus:{type:Boolean,attribute:"selection-follows-focus"},rotateKeyboardNavigation:{type:Boolean,attribute:"rotate-keyboard-navigation"},hasNoDefaultSelected:{type:Boolean,reflect:!0,attribute:"has-no-default-selected"},_noTypeAhead:{type:Boolean}}}static get styles(){return[...super.styles||[],r`
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
        `]}_inputGroupInputTemplate(){return H`
        <div class="input-group__input">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      `}static get scopedElements(){return{...super.scopedElements,"lion-options":Ro}}get slots(){return{...super.slots,input:()=>{const e=this.createScopedElement("lion-options");return e.setAttribute("data-tag-name","lion-options"),e.registrationTarget=this,e}}}get _inputNode(){return this.querySelector('[slot="input"]')}get _listboxNode(){return this._inputNode}get _listboxActiveDescendantNode(){return this._listboxNode.querySelector(`#${this._listboxActiveDescendant}`)}get _listboxSlot(){return this.shadowRoot.querySelector("slot[name=input]")}get _scrollTargetNode(){return this._listboxNode}get _activeDescendantOwnerNode(){return this._listboxNode}get activeIndex(){return this.formElements.findIndex(e=>!0===e.active)}set activeIndex(e){if(this.formElements[e]){const t=this.formElements[e];this.__setChildActive(t)}else this.__setChildActive(null)}get checkedIndex(){const e=this.formElements;return this.multipleChoice?e.filter(e=>e.checked).map(t=>e.indexOf(t)):e.indexOf(e.find(e=>e.checked))}set checkedIndex(e){this.setCheckedIndex(e)}constructor(){super(),this.hasNoDefaultSelected=!1,this.orientation="vertical",this.rotateKeyboardNavigation=!1,this.selectionFollowsFocus=!1,this._noTypeAhead=!1,this._typeAheadTimeout=1e3,this._listboxActiveDescendant=null,this.__hasInitialSelectedFormElement=!1,this._repropagationRole="choice-group",this._listboxReceivesNoFocus=!1,this._oldModelValue=void 0,this._listboxOnKeyDown=this._listboxOnKeyDown.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this),this._listboxOnKeyUp=this._listboxOnKeyUp.bind(this),this._onChildActiveChanged=this._onChildActiveChanged.bind(this),this.__proxyChildModelValueChanged=this.__proxyChildModelValueChanged.bind(this),this.__preventScrollingWithArrowKeys=this.__preventScrollingWithArrowKeys.bind(this),this.__typedChars=[]}connectedCallback(){this._listboxNode&&(this._listboxNode.registrationTarget=this),super.connectedCallback(),this._setupListboxNode(),this.__setupEventListeners(),this.registrationComplete.then(()=>{this.__initInteractionStates()})}firstUpdated(e){super.firstUpdated(e),this.__moveOptionsToListboxNode(),this.registrationComplete.then(()=>{this._initialModelValue=this.modelValue}),new MutationObserver(()=>{this._onListboxContentChanged()}).observe(this._listboxNode,{childList:!0})}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.__requestOptionsToBeDisabled():this.__retractRequestOptionsToBeDisabled())}disconnectedCallback(){super.disconnectedCallback(),this._teardownListboxNode(),this.__teardownEventListeners()}setCheckedIndex(e){if(this.multipleChoice&&Array.isArray(e))return this._uncheckChildren(this.formElements.filter(t=>t===e)),void e.forEach(e=>{this.formElements[e]&&(this.formElements[e].checked=!this.formElements[e].checked)});"number"==typeof e&&(-1===e&&this._uncheckChildren(),this.formElements[e]&&(this.formElements[e].disabled?this._uncheckChildren():this.multipleChoice?this.formElements[e].checked=!this.formElements[e].checked:this.formElements[e].checked=!0))}addFormElement(e,t){super.addFormElement(e,t),e.id=e.id||`${this.localName}-option-${Zt()}`,this.disabled&&e.makeRequestToBeDisabled(),this.__setAttributeForAllFormElements("aria-setsize",this.formElements.length),this.formElements.forEach((e,t)=>{e.setAttribute("aria-posinset",t+1)}),this.__proxyChildModelValueChanged({target:e}),this.resetInteractionState()}resetInteractionState(){super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.activeIndex=-1,this.resetInteractionState()}clear(){super.clear(),this.setCheckedIndex(-1)}_handleTypeAhead(e,{setAsChecked:t}){const{key:i,code:s}=e;if(s.startsWith("Key")||s.startsWith("Digit")||s.startsWith("Numpad")){e.preventDefault(),this.__typedChars.push(i);const s=this.__typedChars.join(""),n=this.formElements.findIndex(e=>e.modelValue.value.toLowerCase().startsWith(s));n>=0&&(t&&this.setCheckedIndex(n),this.activeIndex=n),this.__pendingTypeAheadTimeout&&window.clearTimeout(this.__pendingTypeAheadTimeout),this.__pendingTypeAheadTimeout=setTimeout(()=>{this.__typedChars=[]},this._typeAheadTimeout)}}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_setupListboxNode(){this._listboxNode?this.__setupListboxNodeInteractions():this._listboxSlot&&this._listboxSlot.addEventListener("slotchange",()=>{this.__setupListboxNodeInteractions()})}_onListboxContentChanged(){}_teardownListboxNode(){this._listboxNode&&(this._listboxNode.removeEventListener("keydown",this._listboxOnKeyDown),this._listboxNode.removeEventListener("click",this._listboxOnClick),this._listboxNode.removeEventListener("keyup",this._listboxOnKeyUp))}_getNextEnabledOption(e,t=1){return this.__getEnabledOption(e,t)}_getPreviousEnabledOption(e,t=-1){return this.__getEnabledOption(e,t)}_onChildActiveChanged({target:e}){!0===e.active&&this.__setChildActive(e)}_listboxOnKeyDown(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case" ":case"Enter":if(" "===t&&this._listboxReceivesNoFocus)return;if(" "===t&&e.preventDefault(),!this.formElements[this.activeIndex])return;if(this.formElements[this.activeIndex].disabled)return;this.formElements[this.activeIndex].href&&this.formElements[this.activeIndex].click(),this.setCheckedIndex(this.activeIndex);break;case"ArrowUp":e.preventDefault(),"vertical"===this.orientation&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowLeft":if(this._listboxReceivesNoFocus)return;e.preventDefault(),"horizontal"===this.orientation&&(this.activeIndex=this._getPreviousEnabledOption(this.activeIndex));break;case"ArrowDown":e.preventDefault(),"vertical"===this.orientation&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"ArrowRight":if(this._listboxReceivesNoFocus)return;e.preventDefault(),"horizontal"===this.orientation&&(this.activeIndex=this._getNextEnabledOption(this.activeIndex));break;case"Home":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getNextEnabledOption(0,0);break;case"End":if(this._listboxReceivesNoFocus)return;e.preventDefault(),this.activeIndex=this._getPreviousEnabledOption(this.formElements.length-1,0);break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:this.selectionFollowsFocus&&!this.multipleChoice})}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(t)&&this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex)}_listboxOnClick(e){}_listboxOnKeyUp(e){if(this.disabled)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case"ArrowUp":case"ArrowDown":case"Home":case"End":case"Enter":e.preventDefault()}}_onLabelClick(){this._listboxNode.focus()}_scrollIntoView(e,t){e.scrollIntoView({behavior:"smooth",block:"nearest"})}__setupEventListeners(){this._listboxNode.addEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.addEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__teardownEventListeners(){this._listboxNode.removeEventListener("active-changed",this._onChildActiveChanged),this._listboxNode.removeEventListener("model-value-changed",this.__proxyChildModelValueChanged)}__setChildActive(e){this.formElements.forEach(t=>{t.active=e===t}),e?(this._activeDescendantOwnerNode.setAttribute("aria-activedescendant",e.id),this._scrollIntoView(e,this._scrollTargetNode)):this._activeDescendantOwnerNode.removeAttribute("aria-activedescendant")}_uncheckChildren(e=[]){const t=Array.isArray(e)?e:[e];this.formElements.forEach(e=>{t.includes(e)||(e.checked=!1)})}__onChildCheckedChanged(e){const{target:t}=e;e.stopPropagation&&e.stopPropagation(),t.checked&&!this.multipleChoice&&this._uncheckChildren(t)}__setAttributeForAllFormElements(e,t){this.formElements.forEach(i=>{i.setAttribute(e,t)})}__proxyChildModelValueChanged(e){e.stopPropagation&&e.stopPropagation(),this.__onChildCheckedChanged(e),this.requestUpdate("modelValue",this._oldModelValue),e.detail&&e.detail.formPath&&this.dispatchEvent(new CustomEvent("model-value-changed",{detail:{formPath:e.detail.formPath,isTriggeredByUser:e.detail.isTriggeredByUser||this._isHandlingUserInput,element:e.target}})),this._oldModelValue=this.modelValue}__getEnabledOption(e,t){const i=e=>1===t?e<this.formElements.length:e>=0;for(let s=e+t;i(s);s+=t)if(this.formElements[s]&&!this.formElements[s].hasAttribute("aria-hidden"))return s;if(this.rotateKeyboardNavigation)for(let e=-1===t?this.formElements.length-1:0;i(e);e+=t)if(this.formElements[e]&&!this.formElements[e].hasAttribute("aria-hidden"))return e;return e}__moveOptionsToListboxNode(){const e=this.shadowRoot.getElementById("options-outlet");e&&(Rs(this,this._listboxNode),e.addEventListener("slotchange",()=>{Rs(this,this._listboxNode)}))}__preventScrollingWithArrowKeys(e){if(this.disabled)return;const{key:t}=e;switch(t){case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault()}}__setupListboxNodeInteractions(){this._listboxNode.setAttribute("role","listbox"),this._listboxNode.setAttribute("aria-orientation",this.orientation),this._listboxNode.setAttribute("aria-multiselectable",`${this.multipleChoice}`),this._listboxNode.setAttribute("tabindex","0"),this._listboxNode.addEventListener("click",this._listboxOnClick),this._listboxNode.addEventListener("keyup",this._listboxOnKeyUp),this._listboxNode.addEventListener("keydown",this._listboxOnKeyDown),this._scrollTargetNode.addEventListener("keydown",this.__preventScrollingWithArrowKeys)}__requestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.makeRequestToBeDisabled&&e.makeRequestToBeDisabled()})}__retractRequestOptionsToBeDisabled(){this.formElements.forEach(e=>{e.retractRequestToBeDisabled&&e.retractRequestToBeDisabled()})}__initInteractionStates(){this.initInteractionState()}});class zo extends(Bo(to(Gs(Gn(pe))))){get _feedbackConditionMeta(){return{...super._feedbackConditionMeta,focused:this.focused}}get _focusableNode(){return this._inputNode}}const jo=new WeakMap;function Uo(e,t){Array.from(e.childNodes).forEach(i=>{if("#text"===i.nodeName){const s=new RegExp(`^(.*?)(${t})(.*)$`,"i"),n=i.nodeValue.match(s);if(n){const t=document.createTextNode(n[1]);e.appendChild(t);const s=document.createElement("b");s.textContent=n[2],e.appendChild(s);const o=document.createTextNode(n[3]);e.appendChild(o),e.removeChild(i),jo.set(e,()=>{e.appendChild(i),e.contains(t)&&null!==t.parentNode&&t.parentNode.removeChild(t),e.contains(s)&&null!==s.parentNode&&s.parentNode.removeChild(s),e.contains(o)&&null!==o.parentNode&&o.parentNode.removeChild(o)})}}else Uo(i,t)})}function qo(e){jo.has(e)&&jo.get(e)(),Array.from(e.childNodes).forEach(e=>{"#text"===e.nodeName?jo.has(e)&&jo.get(e)():qo(e)})}class Ho extends Yn{static get validatorName(){return"MatchesOption"}execute(e,t,i){return i?.node.modelValue instanceof qs}}function Wo(e){return Array.isArray(e)?e:[e]}const Go=bt(e=>class extends(Kn(e)){static get properties(){return{allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},modelValue:{type:Object}}}get modelValue(){return this.__getChoicesFrom(super.modelValue)}set modelValue(e){if(super.modelValue=e,null==e||""===e)this._customChoices=new Set;else if(this.allowCustomChoice){const t=this.modelValue;this._customChoices=new Set(Wo(e)),this.requestUpdate("modelValue",t)}}get formattedValue(){return this.__getChoicesFrom(super.formattedValue)}set formattedValue(e){if(super.formattedValue=e,null==e)this._customChoices=new Set;else if(this.allowCustomChoice){const t=this.modelValue;this._customChoices=new Set(Wo(e).map(e=>this.formElements.find(t=>t.formattedValue===e)?.modelValue||e)),this.requestUpdate("modelValue",t)}}get serializedValue(){return this.__getChoicesFrom(super.serializedValue)}set serializedValue(e){if(super.serializedValue=e,null==e)this._customChoices=new Set;else if(this.allowCustomChoice){const t=this.modelValue;this._customChoices=new Set(Wo(e).map(e=>this.formElements.find(t=>t.serializedValue===e)?.modelValue||e)),this.requestUpdate("modelValue",t)}}get customChoices(){if(!this.allowCustomChoice)return[];const e=this._getCheckedElements();return Array.from(this._customChoices).filter(t=>!e.some(e=>e.choiceValue===t))}constructor(){super(),this.allowCustomChoice=!1,this._customChoices=new Set}__getChoicesFrom(e){const t=e;return this.allowCustomChoice?this.multipleChoice?[...Wo(t),...this.customChoices]:""===t?this._customChoices.values().next().value||"":t:t}_isEmpty(){return super._isEmpty()&&0===this._customChoices.size}clear(){this._customChoices=new Set,super.clear()}parser(e){return this.allowCustomChoice&&Array.isArray(e)?e.filter(e=>""!==e.trim()):e}}),Ko=new WeakMap;class Yo extends(Un(zt(Go(zo)))){static get properties(){return{autocomplete:{type:String,reflect:!0},matchMode:{type:String,attribute:"match-mode"},showAllOnEmpty:{type:Boolean,attribute:"show-all-on-empty"},requireOptionMatch:{type:Boolean},allowCustomChoice:{type:Boolean,attribute:"allow-custom-choice"},__shouldAutocompleteNextUpdate:Boolean}}static get styles(){return[...super.styles,r`
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
      `]}static get localizeNamespaces(){return[{"lion-combobox":e=>{switch(e){case"bg-BG":case"bg":return s.e(3759).then(s.bind(s,3759));case"cs-CZ":case"cs":return s.e(2350).then(s.bind(s,2350));case"de-AT":case"de-DE":case"de":return s.e(9627).then(s.bind(s,9627));case"en-AU":case"en-GB":case"en-PH":case"en-US":case"en":default:return s.e(6359).then(s.bind(s,6359));case"es-ES":case"es":return s.e(4356).then(s.bind(s,4356));case"fr-FR":case"fr-BE":case"fr":return s.e(4272).then(s.bind(s,4272));case"hu-HU":case"hu":return s.e(5503).then(s.bind(s,5503));case"it-IT":case"it":return s.e(133).then(s.bind(s,133));case"nl-BE":case"nl-NL":case"nl":return s.e(310).then(s.bind(s,310));case"pl-PL":case"pl":return s.e(1496).then(s.bind(s,1496));case"ro-RO":case"ro":return s.e(2548).then(s.bind(s,2548));case"ru-RU":case"ru":return s.e(8657).then(s.bind(s,8657));case"sk-SK":case"sk":return s.e(3830).then(s.bind(s,3830));case"uk-UA":case"uk":return s.e(3804).then(s.bind(s,3804));case"zh-CN":case"zh":return s.e(2801).then(s.bind(s,5182))}}},...super.localizeNamespaces]}get modelValue(){const e=super.modelValue;return""!==e?e:this.parser(this.value)}set modelValue(e){super.modelValue=e}get value(){return this._inputNode?.value||this.__value||""}set value(e){this._inputNode?(this._inputNode.value=e,this.__value=void 0):this.__value=e}reset(){super.reset(),this.multipleChoice||(this.value=this._initialModelValue),this._resetListboxOptions()}_resetListboxOptions(){this.formElements.forEach((e,t)=>{this._unhighlightMatchedOption(e),this.showAllOnEmpty&&this.opened?(e.style.display="",e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${this.formElements.length}`),e.removeAttribute("aria-hidden")):e.style.display="none"})}_inputGroupInputTemplate(){return H`
      <div class="input-group__input">
        <slot name="selection-display"></slot>
        <slot name="input"></slot>
      </div>
    `}_overlayListboxTemplate(){return H`
      <div
        id="overlay-content-node-wrapper"
        role="dialog"
        aria-label="${this.msgLit("lion-combobox:optionsPopup")}"
      >
        <slot name="listbox"></slot>
      </div>
      <slot id="options-outlet"></slot>
    `}_groupTwoTemplate(){return H` ${super._groupTwoTemplate()} ${this._overlayListboxTemplate()}`}get slots(){return{...super.slots,input:()=>{if("1.1"===this._ariaVersion){const e=document.createElement("div"),t=document.createElement("input");return t.style.cssText="\n          border: none;\n          outline: none;\n          width: 100%;\n          height: 100%;\n          font: inherit;\n          background: inherit;\n          color: inherit;\n          border-radius: inherit;\n          box-sizing: border-box;\n          padding: 0;",e.appendChild(t),e}return document.createElement("input")},listbox:super.slots.input}}get _comboboxNode(){return this.querySelector('[slot="input"]')}get _selectionDisplayNode(){return this.querySelector('[slot="selection-display"]')}get _inputNode(){return"1.1"===this._ariaVersion&&this._comboboxNode&&this._comboboxNode.querySelector("input")||this._comboboxNode}get _overlayContentNode(){return this._listboxNode}get _overlayReferenceNode(){return this.shadowRoot.querySelector(".input-group__container")}get _overlayInvokerNode(){return this._inputNode}get _listboxNode(){return this._overlayCtrl&&this._overlayCtrl.contentNode||Array.from(this.children).find(e=>"listbox"===e.slot)}get _activeDescendantOwnerNode(){return this._inputNode}get requireOptionMatch(){return!this.allowCustomChoice}set requireOptionMatch(e){this.allowCustomChoice=!e}constructor(){super(),this.autocomplete="both",this.matchMode="all",this.showAllOnEmpty=!1,this.requireOptionMatch=!0,this.rotateKeyboardNavigation=!0,this.selectionFollowsFocus=!0,this.defaultValidators.push(new Ho),this._ariaVersion=Et.isChromium?"1.1":"1.0",this._listboxReceivesNoFocus=!0,this._noTypeAhead=!0,this.__prevCboxValueNonSelected="",this.__prevCboxValue="",this.__hadUserIntendsInlineAutoFill=!1,this.__listboxContentChanged=!1,this._onKeyUp=this._onKeyUp.bind(this),this._textboxOnClick=this._textboxOnClick.bind(this),this._textboxOnInput=this._textboxOnInput.bind(this),this._textboxOnKeydown=this._textboxOnKeydown.bind(this)}connectedCallback(){super.connectedCallback(),this._selectionDisplayNode&&(this._selectionDisplayNode.comboboxElement=this),(this.disabled||this.readOnly)&&this.__setComboboxDisabledAndReadOnly()}requestUpdate(e,t,i){if(super.requestUpdate(e,t,i),"disabled"!==e&&"readOnly"!==e||this.__setComboboxDisabledAndReadOnly(),"modelValue"===e&&this.modelValue&&this.modelValue!==t&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue))if(this.multipleChoice)this._syncToTextboxMultiple(this.modelValue,this._oldModelValue);else{const e=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]);this._setTextboxValue(e)}}parser(e){return this.requireOptionMatch&&-1===this.checkedIndex&&""!==e&&!Array.isArray(e)?new qs(e):super.parser(e)}__unsyncCheckedIndexOnInputChange(){const e=this._autoSelectCondition(),t=this.formElements[this.checkedIndex];if(!this.multipleChoice&&!e&&t){const e=this._getTextboxValueFromOption(t);this._inputNode.value.startsWith(e)||this.setCheckedIndex(-1)}}updated(e){super.updated(e),e.has("__shouldAutocompleteNextUpdate")&&this.__unsyncCheckedIndexOnInputChange(),e.has("opened")&&(this.opened&&(this.activeIndex=-1),this.opened||void 0===e.get("opened")||(this.__onOverlayClose(),this.activeIndex=-1)),e.has("autocomplete")&&this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`),e.has("__shouldAutocompleteNextUpdate")&&this.__shouldAutocompleteNextUpdate&&(this._handleAutocompletion(),this.__shouldAutocompleteNextUpdate=!1,this.__listboxContentChanged=!1),"function"==typeof this._selectionDisplayNode?.onComboboxElementUpdated&&this._selectionDisplayNode.onComboboxElementUpdated(e)}matchCondition(e,t){let i=-1;const s=this._getTextboxValueFromOption(e);return"string"==typeof s&&"string"==typeof t&&(i=s.toLowerCase().indexOf(t.toLowerCase())),"all"===this.matchMode?i>-1:0===i}_showOverlayCondition({lastKey:e}){return!(this.disabled||this.readOnly||e&&(["Tab","Escape"].includes(e)||!this.multipleChoice&&["Enter"].includes(e)))&&(!!(this.filled||this.showAllOnEmpty||!this.filled&&this.multipleChoice&&this.__prevCboxValueNonSelected)||this.opened)}_getTextboxValueFromOption(e){return e?e.choiceValue:this.modelValue instanceof qs?this.modelValue.viewValue:this.modelValue}_onListboxContentChanged(){super._onListboxContentChanged(),this.__shouldAutocompleteNextUpdate=!0,this.__listboxContentChanged=!0}_textboxOnInput(e){this.__shouldAutocompleteNextUpdate=!0,this.opened=this._showOverlayCondition({})}_textboxOnKeydown(e){"Tab"===e.key&&(this.opened=!1)}_listboxOnClick(e){super._listboxOnClick(e),this._inputNode.focus(),this.multipleChoice?(this._inputNode.value="",this._resetListboxOptions()):(this.activeIndex=-1,this.opened=!1)}_setTextboxValue(e){this._inputNode&&this._inputNode.value!==e&&(this._inputNode.value=e)}__onOverlayClose(){this.multipleChoice?this._syncToTextboxMultiple(this.modelValue,this._oldModelValue):-1!==this.checkedIndex&&this._syncToTextboxCondition(this.modelValue,this._oldModelValue,{phase:"overlay-close"})&&(this._inputNode.value=this._getTextboxValueFromOption(this.formElements[this.checkedIndex]))}_repropagationCondition(e){return super._repropagationCondition(e)||this.formElements.every(e=>!e.checked)}_onFilterMatch(e,t){this._highlightMatchedOption(e,t),e.style.display=""}_highlightMatchedOption(e,t){if(Uo(e,t),e.textContent){const t=document.createElement("span");t.setAttribute("aria-label",e.textContent.replace(/\s+/g," ")),Array.from(e.childNodes).forEach(e=>{t.appendChild(e)}),e.appendChild(t),Ko.set(e,()=>{Array.from(t.childNodes).forEach(t=>{e.appendChild(t)}),e.contains(t)&&e.removeChild(t)})}}_onFilterUnmatch(e,t,i){this._unhighlightMatchedOption(e),e.style.display="none"}_unhighlightMatchedOption(e){qo(e),Ko.has(e)&&Ko.get(e)()}__computeUserIntendsAutoFill({prevValue:e,curValue:t}){const i=e.length<t.length,s=e.length&&t.length&&e[0].toLowerCase()!==t[0].toLowerCase();return i||s||this.__listboxContentChanged&&this.__hadUserIntendsInlineAutoFill}_handleAutocompletion(){const e=!(this._inputNode.selectionStart===this._inputNode.selectionEnd)&&this._inputNode.value.length!==this._inputNode.selectionStart,t=this._inputNode.value,i=this._inputNode.selectionStart,s=e&&i?t.slice(0,i):t,n=e||this.__hadSelectionLastAutofill?this.__prevCboxValueNonSelected:this.__prevCboxValue,o=!s,r=[];let a=!1;const l=this.__computeUserIntendsAutoFill({prevValue:n,curValue:s}),c="both"===this.autocomplete||"inline"===this.autocomplete,d=this._autoSelectCondition(),h="inline"===this.autocomplete||"none"===this.autocomplete;this.formElements.forEach((e,t)=>{const i=this.matchCondition(e,s);let u=!1;if(u=o?this.showAllOnEmpty:h||i,d&&!a&&i&&!e.disabled){const i=()=>{this.activeIndex=t,this.selectionFollowsFocus&&!this.multipleChoice&&this.setCheckedIndex(this.activeIndex),a=!0};if(l)if(c){const t=this._getTextboxValueFromOption(e);"string"==typeof t&&""!==t&&"string"==typeof s&&""!==s&&0===t.toLowerCase().indexOf(s.toLowerCase())&&(this.__textboxInlineComplete(e),i())}else i()}e.onFilterUnmatch?e.onFilterUnmatch(s,n):this._onFilterUnmatch(e,s,n),e.setAttribute("aria-hidden","true"),e.removeAttribute("aria-posinset"),e.removeAttribute("aria-setsize"),u&&(r.push(e),e.onFilterMatch?e.onFilterMatch(s):this._onFilterMatch(e,s))});const u=r.length;r.forEach((e,t)=>{e.setAttribute("aria-posinset",`${t+1}`),e.setAttribute("aria-setsize",`${u}`),e.removeAttribute("aria-hidden")}),!d||a||this.multipleChoice||(this.setCheckedIndex(-1),n!==s&&(this.activeIndex=-1),this.modelValue=this.parser(t)),this.__prevCboxValueNonSelected=s,this.__prevCboxValue=this._inputNode.value,this.__hadSelectionLastAutofill=this._inputNode.value.length!==this._inputNode.selectionStart,this.__hadUserIntendsInlineAutoFill=l,this._overlayCtrl&&this._overlayCtrl._popper&&this._overlayCtrl._popper.update()}__textboxInlineComplete(e=this.formElements[this.activeIndex]){const t=this._getTextboxValueFromOption(e);if(this._inputNode.value!==t){const e=this._inputNode.value.length;this._inputNode.value=t,this._inputNode.selectionStart=e,this._inputNode.selectionEnd=this._inputNode.value.length}}_autoSelectCondition(){return"both"===this.autocomplete||"inline"===this.autocomplete}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.removeAttribute("tabindex")}_defineOverlayConfig(){return{placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},elementToFocusAfterHide:void 0,invokerNode:this._comboboxNode,visibilityTriggerFunction:void 0}}_setupOverlayCtrl(){super._setupOverlayCtrl(),this.__shouldAutocompleteNextUpdate=!0,this.__setupCombobox()}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this.__teardownCombobox()}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._inputNode.addEventListener("keyup",this._onKeyUp),this._inputNode.addEventListener("click",this._textboxOnClick)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._inputNode.removeEventListener("keyup",this._onKeyUp),this._inputNode.removeEventListener("click",this._textboxOnClick)}_listboxOnKeyDown(e){const{key:t}=e;switch(t){case"Escape":this.opened=!1,super._listboxOnKeyDown(e),this._setTextboxValue("");break;case"Backspace":case"Delete":this.requireOptionMatch?super._listboxOnKeyDown(e):this.opened=!1;break;case"Enter":this.opened&&e.preventDefault(),this.requireOptionMatch||!this.multipleChoice||this.formElements[this.activeIndex]&&!this.formElements[this.activeIndex].hasAttribute("aria-hidden")&&this.opened?(super._listboxOnKeyDown(e),this._resetListboxOptions()):(this.modelValue=this.parser([...this.modelValue,this._inputNode.value]),this._inputNode.value="",this.opened=!1),this.multipleChoice?this._inputNode.value="":this.opened=!1;break;default:super._listboxOnKeyDown(e)}}_syncToTextboxCondition(e,t,{phase:i}={}){return"both"===this.autocomplete||"inline"===this.autocomplete||!this.focused}_syncToTextboxMultiple(e,t=[]){if(this.requireOptionMatch){const i=e.filter(e=>!t.includes(e)),s=this.formElements.filter(e=>i.includes(e.choiceValue)).map(e=>this._getTextboxValueFromOption(e)).join(" ");this._setTextboxValue(s)}}_enhanceLightDomClasses(){const e=this.querySelector("[slot=input]");e&&e.classList.add("form-control")}__setComboboxDisabledAndReadOnly(){this._comboboxNode&&(this._comboboxNode.toggleAttribute("disabled",this.disabled),this._comboboxNode.setAttribute("aria-disabled",`${this.disabled}`),this._comboboxNode.toggleAttribute("readonly",this.readOnly),this._comboboxNode.setAttribute("aria-readonly",`${this.readOnly}`)),this._inputNode&&(this._inputNode.toggleAttribute("disabled",this.disabled),this._inputNode.toggleAttribute("readOnly",this.readOnly),this._inputNode.setAttribute("aria-readonly",`${this.readOnly}`),this._inputNode.tabIndex=this.disabled?-1:0)}__setupCombobox(){this._comboboxNode.setAttribute("role","combobox"),this._comboboxNode.setAttribute("aria-haspopup","listbox"),this._inputNode.setAttribute("aria-autocomplete",this.autocomplete),this._comboboxNode.setAttribute("aria-controls",this._listboxNode.id),"1.1"===this._ariaVersion?this._comboboxNode.setAttribute("aria-owns",this._listboxNode.id):this._inputNode.setAttribute("aria-owns",this._listboxNode.id),this._listboxNode.setAttribute("aria-labelledby",this._labelNode.id),this._inputNode.addEventListener("keydown",this._listboxOnKeyDown),this._inputNode.addEventListener("input",this._textboxOnInput),this._inputNode.addEventListener("keydown",this._textboxOnKeydown)}__teardownCombobox(){this._inputNode.removeEventListener("keydown",this._listboxOnKeyDown),this._inputNode.removeEventListener("input",this._textboxOnInput),this._inputNode.removeEventListener("keydown",this._textboxOnKeydown)}_onKeyUp(e){const t=e&&e.key;this.opened=this._showOverlayCondition({lastKey:t,currentValue:this._inputNode.value})}_textboxOnClick(e){this.opened=this._showOverlayCondition({})}clear(){this.value="",super.clear(),this.__shouldAutocompleteNextUpdate=!0}}var Zo=r`
  ${Ls}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    min-height: none;
    padding-inline: var(--c-input-spacing-inline)
      calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    border-radius: var(--c-input-radius);
  }

  ::slotted([slot='listbox']) {
    display: grid;
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
  }

  .input-group__input {
    ${Os}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
  }

  .input-group__container {
    border: 0;
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }

  .clear {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    transform: translateY(-50%);
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
`,Jo=new WeakMap,Qo=new WeakMap,Xo=new WeakSet,er=new WeakMap,tr=class extends Yo{static get styles(){return[...super.styles,Zo]}get modelValue(){return super.modelValue}set modelValue(e){this.pendingModelValue=e,super.modelValue=e}constructor(){super(),Ae(this,Xo),this.options=[],this.limit=150,this.clearable=!1,this.placeholder="",Ne(this,Jo,void 0),Ne(this,Qo,()=>{Se(Xo,this,rr).call(this),Se(Xo,this,ir).call(this)}),Ne(this,er,()=>{this.modelValue="",this._inputNode&&(this._inputNode.value=""),Se(Xo,this,rr).call(this),this._inputNode?.focus()}),this.defaultValidators=[],this.autocomplete="list"}firstUpdated(e){super.firstUpdated(e),this._inputNode?.addEventListener("input",Te(Qo,this)),this.addEventListener("model-value-changed",()=>{Oe(Jo,this,this.modelValue)}),Oe(Jo,this,this.modelValue),Se(Xo,this,rr).call(this)}updated(e){super.updated(e),e.has("placeholder")&&(this._inputNode.placeholder=this.placeholder),(e.has("options")||e.has("limit")||e.has("opened")||e.has("modelValue"))&&Se(Xo,this,rr).call(this)}addFormElement(e,t){super.addFormElement(e,t),e.updateComplete.then(()=>{String(e.choiceValue)===String(this.pendingModelValue)&&(super.modelValue=this.pendingModelValue,this._setTextboxValue(this._getTextboxValueFromOption(e)))})}matchCondition(){return!0}_highlightMatchedOption(){}_unhighlightMatchedOption(){}_showOverlayCondition(e){return!this.disabled&&!this.readOnly&&("ArrowDown"===e.lastKey||"ArrowUp"===e.lastKey)||super._showOverlayCondition(e)}_inputGroupInputTemplate(){return H`
      <div class="input-group__input">
        <slot name="input"></slot>
        ${this.clearable&&Se(Xo,this,lr).call(this)?H`<craft-button
              class="clear"
              type="button"
              appearance="plain"
              size="small"
              icon
              aria-label=${ft("Clear")}
              @mousedown=${e=>e.preventDefault()}
              @click=${Te(er,this)}
            >
              <craft-icon name="xmark" style="font-size: 0.8em"></craft-icon>
            </craft-button>`:Y}
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}parser(e){if("string"==typeof e&&""!==e){let t=Se(Xo,this,cr).call(this,e);return t?t.value:e}return super.parser(e)}_syncToTextboxCondition(e,t,i={}){return"overlay-close"===i.phase||super._syncToTextboxCondition(e,t,i)}_getTextboxValueFromOption(e){return e?e.textContent?.trim()||"":super._getTextboxValueFromOption(e)}};function ir(){let e=this.parser(this._inputNode?.value??"");e!==this.modelValue&&(this.modelValue=e),this.modelValue!==Te(Jo,this)&&(Oe(Jo,this,this.modelValue),this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],isTriggeredByUser:!0}})))}function sr(e){let t=e.trim().toLowerCase(),i=[];for(let e of this.options)if(Se(Xo,this,nr).call(this,e))for(let s of e.options)(""===t||Se(Xo,this,or).call(this,t,s))&&i.push({groupLabel:e.label,option:s});else(""===t||Se(Xo,this,or).call(this,t,e))&&i.push({option:e});return i}function nr(e){return"optgroup"===e.type}function or(e,t){return t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e)||(t.data?.keywords?.toLowerCase().includes(e)??!1)}function rr(){let e=this._listboxNode;if(!e)return;let t,i=this._inputNode?.value??"",s=Se(Xo,this,sr).call(this,i),n=s.slice(0,this.limit);he(H`${n.map(e=>{let i=e.groupLabel&&e.groupLabel!==t?H`<div class="combobox__optgroup" aria-hidden="true">
              ${e.groupLabel}
            </div>`:Y;return t=e.groupLabel,H`${i}${Se(Xo,this,ar).call(this,e.option)}`})}${s.length>this.limit?H`<div class="combobox__footer" aria-hidden="true">
            ${ft("Showing {shown} of {total} — keep typing to narrow results.",{shown:this.limit,total:s.length})}
          </div>`:Y}`,e)}function ar(e){let t=e.data??{},i=e.label,s=i.startsWith("$")||i.startsWith("@");return H`
      <craft-option
        .choiceValue=${String(e.value)}
        .hint=${t.hint??null}
      >
        <span class="combobox__option">
          ${t.indicator?H`<craft-indicator
                variant=${t.indicator.variant??"neutral"}
              ></craft-indicator>`:Y}
          ${s?H`<code>${i}</code>`:i}
        </span>
      </craft-option>
    `}function lr(){return""!==this.modelValue&&null!=this.modelValue}function cr(e){let t=e.trim();for(let e of this.options)if(Se(Xo,this,nr).call(this,e)){let i=e.options.find(e=>e.label===t);if(i)return i}else if(e.label===t)return e}ge([_e({type:Array})],tr.prototype,"options",void 0),ge([_e({type:Number})],tr.prototype,"limit",void 0),ge([_e({type:Boolean,reflect:!0})],tr.prototype,"clearable",void 0),ge([_e({type:String,reflect:!0})],tr.prototype,"placeholder",void 0),customElements.get("craft-combobox")||customElements.define("craft-combobox",tr);var dr=r`
  :host {
    display: inline-block;
  }

  .copy-button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: transparent;
    appearance: none;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
  }

  .icon {
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
  }

  svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
`;const hr={keyframes:[{scale:.25,opacity:.25},{scale:1,opacity:1}],options:{duration:100}},ur={keyframes:[{scale:1,opacity:1},{scale:.25,opacity:.25}],options:{duration:100}};var pr=class extends pe{constructor(...e){super(...e),this.isCopying=!1,this.status="rest",this.value="",this.disabled=!1,this.feedbackDuration=1e3,this.tooltipLabel=null}async copyValue(){if("copying"!==this.status&&!this.disabled){this.status="copying";try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent("craft-copy",{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent("craft-error",{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){let t="success"===e?this.successIconEl:this.errorIconEl;this.tooltipLabel="success"===e?"Copied":"Copy failed",await this.updateComplete,this.tooltipEl?.repositionOverlay(),await t.animate(ur.keyframes,ur.options),this.copyIconEl.hidden=!0,t.hidden=!1,await t.animate(hr.keyframes,hr.options),this.status=e,setTimeout(async()=>{await t.animate(ur.keyframes,ur.options),t.hidden=!0,this.copyIconEl.hidden=!1,await this.copyIconEl.animate(hr.keyframes,hr.options),this.status="rest",this.tooltipLabel="Copy",this.tooltipEl?.hide()},this.feedbackDuration)}connectedCallback(){super.connectedCallback(),this.tooltipLabel=this.getAttribute("tooltip-label")||ft("Copy"),this.id||(this.id=`copy-${Math.floor(1e8*Math.random())}`),this.addEventListener("craft-copy",()=>{this.showStatus("success")}),this.addEventListener("craft-error",()=>{this.showStatus("error")})}render(){return H`
      <craft-tooltip for="${this.id}">${this.tooltipLabel}</craft-tooltip>
      <button
        type="button"
        id="${this.id}"
        @click="${this.copyValue}"
        ?disabled=${this.disabled}
        class="copy-button"
        part="button"
      >
        <slot></slot>
        <slot name="copy-icon">
          <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M288 448H64V224h64v-64H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-64h-64v64zM160 130h64v92h-64v-92zm288 0h64v92h-64v-92zM290 352v-64h92v64h-92zm0-288V0h92v64h-92zM224 98V64h34V0h-34c-35.3 0-64 28.7-64 64v34M414 64h34v34h64V64c0-35.3-28.7-64-64-64h-34m34 254v34h-34v64h34c35.3 0 64-28.7 64-64v-34M258 288h-34v-34h-64v34c0 35.3 28.7 64 64 64h34"
              />
            </svg>
          </span>
        </slot>

        <slot name="success-icon" part="success-icon" hidden>
          <craft-icon name="check"></craft-icon>
        </slot>

        <slot name="error-icon" part="error-icon" hidden>
          <craft-icon name="x"></craft-icon>
        </slot>

        <craft-visually-hidden>Copy to clipboard</craft-visually-hidden>
      </button>
    `}};pr.styles=[dr],ge([ye()],pr.prototype,"isCopying",void 0),ge([ye()],pr.prototype,"status",void 0),ge([we('slot[name="copy-icon"]')],pr.prototype,"copyIconEl",void 0),ge([we('slot[name="success-icon"]')],pr.prototype,"successIconEl",void 0),ge([we('slot[name="error-icon"]')],pr.prototype,"errorIconEl",void 0),ge([we("craft-tooltip")],pr.prototype,"tooltipEl",void 0),ge([_e({type:String})],pr.prototype,"value",void 0),ge([_e({type:Boolean})],pr.prototype,"disabled",void 0),ge([_e({attribute:"feedback-duration",type:Number})],pr.prototype,"feedbackDuration",void 0),ge([_e({attribute:"tooltip-label"})],pr.prototype,"tooltipLabel",void 0),customElements.get("craft-copy-button")||customElements.define("craft-copy-button",pr);var mr,fr=r`
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
`,gr=r`
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
`,vr=r`
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
`,br=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,yr=Object.getOwnPropertySymbols,kr=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable,xr=e=>{throw TypeError(e)},Er=(e,t,i)=>t in e?br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Cr=(e,t,i,s)=>{for(var n,o=s>1?void 0:s?_r(t,i):t,r=e.length-1;r>=0;r--)(n=e[r])&&(o=(s?n(t,i,o):n(o))||o);return s&&o&&br(t,i,o),o},Sr=(e,t,i)=>t.has(e)||xr("Cannot "+i),Ar=class extends pe{constructor(){super(),((e,t)=>{t.has(e)?xr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,!1)})(this,mr),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,((e,t)=>{for(var i in t||(t={}))kr.call(t,i)&&Er(e,i,t[i]);if(yr)for(var i of yr(t))wr.call(t,i)&&Er(e,i,t[i]);return e})({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let s=customElements.get(e);if(!s){try{customElements.define(e,t,i)}catch{customElements.define(e,class extends t{},i)}return}let n=" (unknown version)",o=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in s&&s.version&&(o=" v"+s.version),(!n||!o||n!==o)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,i){((e,t)=>(Sr(e,t,"read from private field"),t.get(e)))(this,mr)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),((e,t,i)=>{Sr(e,t,"write to private field"),t.set(e,i)})(this,mr,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};mr=new WeakMap,Ar.version="2.20.1",Ar.dependencies={},Cr([_e()],Ar.prototype,"dir",2),Cr([_e()],Ar.prototype,"lang",2);var Nr=class extends Ar{render(){return H` <slot></slot> `}};Nr.styles=[vr,gr],Nr.define("sl-visually-hidden");var Tr=r`
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
`,Or=class extends pe{constructor(...e){super(...e),this.value="",this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}`}render(){return H`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${Ge({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};Or.styles=[fr,Tr],ge([we("craft-copy-button")],Or.prototype,"copyButtonEl",void 0),ge([_e({type:String})],Or.prototype,"value",void 0),ge([_e({type:Boolean,reflect:!0})],Or.prototype,"disabled",void 0),customElements.get("craft-copy-attribute")||customElements.define("craft-copy-attribute",Or);class Lr extends(zt(pe)){static get properties(){return{isAlertDialog:{type:Boolean,attribute:"is-alert-dialog"}}}constructor(){super(),this.isAlertDialog=!1}_defineOverlayConfig(){return{placementMode:"global",viewportConfig:{placement:"center"},hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},isAlertDialog:this.isAlertDialog}}render(){return H`
      <slot name="invoker"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `}}const Mr=typeof CSSStyleSheet<"u"?new CSSStyleSheet:null;Mr?.replaceSync("\n  .craft-dialog {\n    background-color: var(--c-surface-raised);\n    border-radius: var(--c-radius-md);\n    box-shadow: var(--c-shadow-lg);\n    min-width: min(90vw, 24rem);\n    max-width: min(90vw, 40rem);\n  }\n\n  .craft-dialog__header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: var(--c-spacing-md);\n    padding-inline: var(--c-spacing-lg);\n    padding-block-start: var(--c-spacing-lg);\n    padding-block-end: var(--c-spacing-md);\n  }\n\n  .craft-dialog__title {\n    font-size: 1.25em;\n    margin: 0;\n  }\n\n  .craft-dialog__close {\n    background: none;\n    border: none;\n    cursor: pointer;\n    color: inherit;\n    padding: var(--c-spacing-xs);\n    line-height: 1;\n  }\n\n  .craft-dialog__body {\n    padding-inline: var(--c-spacing-lg);\n    padding-block-end: var(--c-spacing-lg);\n  }\n\n  .craft-dialog__footer {\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--c-spacing-sm);\n    padding-inline: var(--c-spacing-lg);\n    padding-block-end: var(--c-spacing-lg);\n  }\n");var $r=new WeakMap,Ir=new WeakMap,Fr=new WeakSet,Pr=class extends Lr{constructor(){super(),Ae(this,Fr),this.openAttribute=!1,this.label="",Ne(this,$r,null),Ne(this,Ir,null),gt(this),this.addEventListener("opened-changed",()=>{let e=!!this.opened;this.openAttribute!==e&&(this.openAttribute=e)})}static get styles(){return[r`
        :host {
          display: contents;
        }

        dialog::backdrop {
          background-color: rgb(0 0 0 / 0.25);
        }
      `]}connectedCallback(){Se(Fr,this,Dr).call(this),Se(Fr,this,Vr).call(this),super.connectedCallback()}updated(e){super.updated(e),e.has("openAttribute")&&this.openAttribute!==this.opened&&(this.opened=this.openAttribute),e.has("label")&&Te(Ir,this)&&(Te(Ir,this).textContent=this.label)}};function Dr(){let e=this.getRootNode();Mr&&(e instanceof Document||e instanceof ShadowRoot)&&!e.adoptedStyleSheets.includes(Mr)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Mr])}function Vr(){if(Te($r,this)?.isConnected)return;let e=document.createElement("div");e.slot="content",e.classList.add("craft-dialog");let t=document.createElement("div");t.classList.add("craft-dialog__body"),t.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||""===e.slot));let i=Array.from(this.children).filter(e=>"footer"===e.slot);if(e.append(Se(Fr,this,Rr).call(this),t),i.length>0){let t=document.createElement("footer");t.classList.add("craft-dialog__footer"),t.append(...i),e.append(t)}e.addEventListener("click",e=>{e.target.closest?.('[data-dialog="close"]')&&(this.opened=!1)}),this.append(e),Oe($r,this,e)}function Rr(){let e=document.createElement("header");e.classList.add("craft-dialog__header");let t=document.createElement("h2");t.classList.add("craft-dialog__title"),t.textContent=this.label,Oe(Ir,this,t);let i=document.createElement("button");i.type="button",i.classList.add("craft-dialog__close"),i.setAttribute("aria-label",ft("Close")),i.setAttribute("data-dialog","close");let s=document.createElement("craft-icon");return s.setAttribute("name","xmark"),i.append(s),e.append(t,i),e}ge([_e({type:Boolean,attribute:"open",reflect:!0})],Pr.prototype,"openAttribute",void 0),ge([_e()],Pr.prototype,"label",void 0),customElements.get("craft-dialog")||customElements.define("craft-dialog",Pr);class Br extends pe{static get styles(){return[r`
        :host {
          display: block;
        }

        :host ::slotted([slot='content']) {
          overflow: hidden;
        }
      `]}static get properties(){return{opened:{type:Boolean,reflect:!0}}}render(){return H`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
    `}constructor(){super(),this.opened=!1,this.toggle=this.toggle.bind(this)}connectedCallback(){super.connectedCallback();const e=Zt();this._invokerNode&&(this._invokerNode.addEventListener("click",this.toggle),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this._invokerNode.setAttribute("aria-controls",`collapsible-content-${e}`)),this._contentNode&&this._contentNode.setAttribute("id",`collapsible-content-${e}`),this.__setDefaultState()}updated(e){super.updated(e),e.has("opened")&&this.__openedChanged()}disconnectedCallback(){super.disconnectedCallback(),this._invokerNode&&this._invokerNode.removeEventListener("click",this.toggle)}show(){this.opened||(this.opened=!0)}hide(){this.opened&&(this.opened=!1)}toggle(){this.opened=!this.opened,this.requestUpdate()}async _showAnimation(e){}async _hideAnimation(e){}get _invokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _contentNode(){return Array.from(this.children).find(e=>"content"===e.slot)}get _contentHeight(){return`${this._contentNode?.getBoundingClientRect().height||0}px`}__openedChanged(){this.__updateContentSize(),this._invokerNode&&this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this.dispatchEvent(new CustomEvent("opened-changed"))}async __updateContentSize(){this._contentNode&&(this.opened?(this._contentNode.style.setProperty("display",""),await this._showAnimation({contentNode:this._contentNode})):(await this._hideAnimation({contentNode:this._contentNode}),this._contentNode.style.setProperty("display","none")))}__setDefaultState(){!this.opened&&this._contentNode&&this._contentNode.style.setProperty("display","none")}}var zr=class extends Br{constructor(...e){super(...e),this.label="",this.state=null,this.cookieName=null,this.__defaultInvoker=null,this.__externalTrigger=null,this.__externalExpanded=!1,this.__toggleExternal=()=>{this.state=this.__externalExpanded?"collapsed":"expanded"}}static get styles(){return[...super.styles,r`
        ::slotted([slot='content']) {
          margin-block-start: var(--c-spacing-lg);
        }
      `]}get __externalTarget(){let e=this.__externalTrigger?.getAttribute("aria-controls");return e?document.getElementById(e):null}render(){return H`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
      <slot></slot>
    `}connectedCallback(){this.__externalTrigger=this.querySelector(':scope > button[type="button"][aria-controls]:not([slot])'),this.__externalTrigger||this.__ensureDefaultInvoker(),super.connectedCallback(),this.__externalTrigger&&this.__setupExternalMode()}disconnectedCallback(){super.disconnectedCallback(),this.__externalTrigger&&(this.__handleExternalOpen(),this.__externalTrigger.removeEventListener("click",this.__toggleExternal))}updated(e){super.updated(e),e.has("label")&&this.__defaultInvoker&&(this.__defaultInvoker.textContent=this.label),e.has("state")&&this.__externalTrigger&&("expanded"===this.state?this.__handleExternalOpen():"collapsed"===this.state&&this.__handleExternalClose())}__ensureDefaultInvoker(){if(this._invokerNode)return;let e=document.createElement("craft-button");e.slot="invoker",e.setAttribute("type","button"),e.setAttribute("appearance","plain"),e.setAttribute("icon","chevron-down"),e.textContent=this.label,this.__defaultInvoker=e,this.prepend(e)}__setupExternalMode(){let e=this.__externalTrigger;this.__externalTarget?(e.addEventListener("click",this.__toggleExternal),"expanded"!==this.state&&"collapsed"!==this.state&&(this.state="expanded")):console.error(`No target with id ${e.getAttribute("aria-controls")} found for disclosure.`,e)}__handleExternalOpen(){this.__externalExpanded=!0,this.__externalTrigger?.setAttribute("aria-expanded","true"),this.dispatchEvent(new CustomEvent("open"));let e=this.__externalTarget;e&&(e.dataset.state="expanded"),this.__persistExternalState("expanded")}__handleExternalClose(){this.__externalExpanded=!1,this.__externalTrigger?.setAttribute("aria-expanded","false"),this.dispatchEvent(new CustomEvent("close"));let e=this.__externalTarget;e&&(e.dataset.state="collapsed"),this.__persistExternalState("collapsed")}__persistExternalState(e){this.cookieName&&window.Craft?.setCookie(this.cookieName,e)}};ge([_e()],zr.prototype,"label",void 0),ge([_e({reflect:!0})],zr.prototype,"state",void 0),ge([_e({attribute:"cookie-name"})],zr.prototype,"cookieName",void 0),customElements.get("craft-disclosure")||customElements.define("craft-disclosure",zr);var jr=class extends pe{constructor(...e){super(...e),this.label="",this.icon=""}render(){return H`
      <div class="cp-empty">
        <div class="cp-empty__content">
          <slot name="graphic">
            ${this.icon?H`
                  <craft-icon
                    class="cp-empty__icon"
                    name="${this.icon}"
                    style="font-size: calc(48rem / 16)"
                  ></craft-icon>
                `:Y}
          </slot>
          <slot name="content">
            <p class="label">${this.label}</p>
          </slot>

          <slot></slot>
        </div>
      </div>
    `}};jr.styles=[r`
      .cp-empty {
        min-height: calc(120rem / 16);
        display: grid;
        place-items: center;
        border-radius: var(--c-radius-md);
        background-color: var(--c-color-neutral-fill-quiet);
        color: var(--c-color-neutral-on-quiet);
        padding-block: var(--c-spacing-lg);
      }

      .cp-empty__content {
        display: grid;
        gap: var(--c-spacing-md);
        justify-items: center;
        max-width: 60ch;
        text-align: center;
      }

      .label {
        margin: 0;
        font-size: 1.25em;
      }
    `],ge([_e()],jr.prototype,"label",void 0),ge([_e()],jr.prototype,"icon",void 0),customElements.get("craft-empty")||customElements.define("craft-empty",jr);const Ur=e=>e??Y;var qr=r`
  :host {
    position: relative;
    display: block;
  }

  /* A slotted control with a maxlength (reflected as has-maxlength) shrinks
     the field to the control's width instead of spanning the column.
     width="full" spans despite a maxlength; width="auto" shrinks without
     one. */
  :host([has-maxlength]:not([width='full'])),
  :host([width='auto']) {
    width: fit-content;
  }

  /* Stop the input chrome from flexing back out to the available space. */
  :host([has-maxlength]:not([width='full'])) .input-group__input,
  :host([width='auto']) .input-group__input {
    flex: 0 0 auto;
  }

  :host([hidden]) {
    display: none;
  }

  /* Status badge (.field > .status-badge in the CP) */
  .status-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 2px;
    height: 100%;
    cursor: help;
    z-index: 1;
    border-radius: 1px;
  }

  .status-badge.modified {
    background-color: var(--blue-600, #2563eb);
    box-shadow: 0 0 5px hsl(221deg 83% 53% / 15%);
  }

  .status-badge.outdated {
    background-color: var(--bg-pending, #c96a11);
    box-shadow: 0 0 5px hsl(27deg 96% 61% / 15%);
  }

  /* Heading (.field > .heading in the CP) */
  .heading {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    font-weight: bold;
    margin-block-end: var(--c-spacing-xs, 0.25rem);
  }

  .heading .flex-grow {
    flex: 1 0 0;
  }

  .field-actions {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--c-spacing-2xs, 0.125rem);
    align-items: center;
  }

  ::slotted([slot='label']) {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
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

  /* Instructions (.field > .instructions in the CP) */
  .form-field__help-text {
    display: block;
    margin-block-end: var(--c-spacing-xs, 0.3125rem);
  }

  .form-field__group-two .form-field__help-text {
    margin-block: var(--c-spacing-xs, 0.3125rem) 0;
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
    margin: 0;
    font-size: 100%;
  }

  /* Tip/warning notices (field-notice.blade.php renders these with p-0 mt-1) */
  .field-notice {
    padding: 0;
    margin-block-start: var(--c-spacing-xs, 0.25rem);
  }

  /* Error styling hook, mirroring .field.has-errors / .input.errors */
  :host([has-errors]) ::slotted([slot='input']) {
    border-color: var(--c-color-danger-border-loud);
  }

  :host([has-errors]) .form-field__feedback {
    color: var(--c-color-danger-on-normal);
  }
`,Hr=class extends(Ws(pe)){constructor(...e){super(...e),this.required=!1,this.translatable=!1,this.translationDescription=ft("This field is translatable."),this.fieldset=!1,this.hasErrors=!1,this.instructionsPosition="before",this.__lightDomObserver=new MutationObserver(()=>this.__onLightDomChanged())}static get styles(){return[Si,Ls,qr]}connectedCallback(){super.connectedCallback(),this.__lightDomObserver.observe(this,{childList:!0}),this.__syncHasErrors(),this.__syncHasMaxlength(),this.__syncControlWidth()}__syncHasMaxlength(){this.toggleAttribute("has-maxlength",this.querySelector(':scope > [slot="input"]')?.hasAttribute("maxlength")??!1)}__syncControlWidth(){if(void 0!==this.width)return;let e=this.querySelector(':scope > [slot="input"]')?.getAttribute("width");("full"===e||"auto"===e)&&(this.width=e)}disconnectedCallback(){super.disconnectedCallback(),this.__lightDomObserver.disconnect()}updated(e){super.updated(e),e.has("disabled")&&this._inputNode?.removeAttribute("aria-disabled"),e.has("fieldset")&&this.__syncFieldsetSemantics(),(e.has("label")||e.has("required")||e.has("translatable")||e.has("translationDescription"))&&this.__syncLabelDecorations()}get control(){return this._inputNode??void 0}get _resolvedOrientation(){return this.orientation?this.orientation:"rtl"===(this.closest("[dir]")?.getAttribute("dir")??document.documentElement.getAttribute("dir"))?.toLowerCase()?"rtl":"ltr"}_enhanceLightDomA11y(){super._enhanceLightDomA11y(),this.__wireDescribedBy(),this.__syncFieldsetSemantics()}_onLabelClick(){this.__formControlTarget()?.focus()}addToAriaLabelledBy(e,t={}){let i=this.__formControlTarget();i?i.addToAriaLabelledBy(e,{...t,idPrefix:`field-${t.idPrefix??"label"}`}):!this.fieldset&&this.__hasNativeLabelTarget()?super.addToAriaLabelledBy(e,{...t,reorder:!1}):this.__addGroupAriaReference("aria-labelledby",e,"label")}addToAriaDescribedBy(e,t={}){let i=this.__formControlTarget();i?i.addToAriaDescribedBy(e,{...t,idPrefix:`field-${t.idPrefix??"description"}`}):!this.fieldset&&this.__hasNativeLabelTarget()?super.addToAriaDescribedBy(e,{...t,reorder:!1}):this.__addGroupAriaReference("aria-describedby",e,t.idPrefix??"description")}render(){return H`
      ${this._statusBadgeTemplate()}
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
    `}_groupOneTemplate(){return H`
      ${this._labelTemplate()}
      ${"before"===this.instructionsPosition?this._helpTextTemplate():Y}
    `}_groupTwoTemplate(){return H`
      ${this._inputGroupTemplate()}
      ${"after"===this.instructionsPosition?this._helpTextTemplate():Y}
      ${this._noticeTemplate("tip")} ${this._noticeTemplate("warning")}
      ${this._feedbackTemplate()}
    `}_labelTemplate(){let e=this.__hasLightChild("actions");return H`
      <div class="heading form-field__label">
        <slot name="heading-prefix"></slot>
        <slot name="label"></slot>
        ${this.readOnly?H`<span class="read-only-badge">${ft("Read Only")}</span>`:Y}
        ${this.__hasLightChild("label-extra")||e?H`<div class="flex-grow"></div>`:Y}
        <slot name="label-extra"></slot>
        ${e?H`
              <div
                class="field-actions"
                part="actions"
                role="group"
                aria-label=${ft("Field actions")}
              >
                <slot name="actions"></slot>
              </div>
            `:H`<slot name="actions"></slot>`}
        <slot name="heading-suffix"></slot>
      </div>
    `}_inputGroupTemplate(){return H`
      <div class=${Ge({"input-group":!0,input:!0,[this._resolvedOrientation]:!0,errors:this.hasErrors,disabled:this.disabled})}>
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_statusBadgeTemplate(){return this.status?H`
      <div
        class="status-badge ${this.status}"
        title=${Ur(this.statusLabel)}
        aria-hidden="true"
      >
        <span class="cp-visually-hidden">${this.statusLabel}</span>
      </div>
    `:Y}_noticeTemplate(e){if(!this.__hasLightChild(e))return Y;let t="tip"===e;return H`
      <craft-callout
        class="field-notice"
        variant=${t?"info":"warning"}
        appearance="plain"
      >
        <craft-visually-hidden>
          ${ft(t?"Tip:":"Warning:")}
        </craft-visually-hidden>
        <slot name=${e}></slot>
      </craft-callout>
    `}__hasLightChild(e){return void 0!==this.__lightChild(e)}__lightChild(e){return Array.from(this.children).find(t=>t.slot===e)}__onLightDomChanged(){this.__wireDescribedBy(),this.__syncFieldsetSemantics(),this.__syncHasErrors(),this.__syncLabelDecorations(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.requestUpdate()}__wireDescribedBy(){for(let e of["help-text","feedback","tip","warning"]){let t=this.__lightChild(e);t&&this.addToAriaDescribedBy(t,{idPrefix:e})}}__formControlTarget(){let e=this._inputNode;return e&&"addToAriaLabelledBy"in e&&"addToAriaDescribedBy"in e?e:void 0}__hasNativeLabelTarget(){return!!this._inputNode?.matches("button, input, meter, output, progress, select, textarea")}__addGroupAriaReference(e,t,i){t.id||(t.id=`${i}-${this._inputId}`);let s=new Set((this.getAttribute(e)??"").split(/\s+/).filter(Boolean));s.add(t.id),this.setAttribute(e,[...s].join(" "))}__syncHasErrors(){let e=this.__lightChild("feedback");e&&(this.hasErrors=!(!e.childElementCount&&!e.textContent?.trim()))}__syncFieldsetSemantics(){let e=this._labelNode,t=this.__formControlTarget();this.fieldset||!t&&!this.__hasNativeLabelTarget()?(this.setAttribute("role","group"),e&&(e.id||(e.id=`label-${this._inputId}`),this.setAttribute("aria-labelledby",e.id),e.removeAttribute("for"))):("group"===this.getAttribute("role")&&this.removeAttribute("role"),this.removeAttribute("aria-labelledby"),e&&t?e.removeAttribute("for"):e&&this._inputNode&&e.setAttribute("for",this._inputNode.id||this._inputId))}__syncLabelDecorations(){let e=this._labelNode;if(e){for(let t of e.querySelectorAll("[data-craft-field-decoration]"))t.remove();if(this.label){if(this.required){let t=document.createElement("span");t.className="visually-hidden",t.textContent=ft("Required"),t.setAttribute("data-craft-field-decoration","");let i=document.createElement("span");i.className="required",i.setAttribute("aria-hidden","true"),i.setAttribute("data-craft-field-decoration",""),e.append(t,i)}if(this.translatable){let t=document.createElement("craft-tooltip");t.setAttribute("placement","bottom"),t.setAttribute("max-width","200px"),t.setAttribute("text",this.translationDescription),t.setAttribute("delay","1000"),t.setAttribute("data-craft-field-decoration","");let i=document.createElement("button");i.type="button",i.className="t9n-indicator prevent-autofocus",i.setAttribute("data-icon","language"),i.setAttribute("aria-label",this.translationDescription),t.append(i),e.append(t)}}}}};ge([_e({type:Boolean,reflect:!0})],Hr.prototype,"required",void 0),ge([_e({type:Boolean,reflect:!0})],Hr.prototype,"translatable",void 0),ge([_e({attribute:"translation-description"})],Hr.prototype,"translationDescription",void 0),ge([_e({type:Boolean,reflect:!0})],Hr.prototype,"fieldset",void 0),ge([_e({reflect:!0})],Hr.prototype,"status",void 0),ge([_e({attribute:"status-label"})],Hr.prototype,"statusLabel",void 0),ge([_e({reflect:!0})],Hr.prototype,"orientation",void 0),ge([_e({type:Boolean,reflect:!0,attribute:"has-errors"})],Hr.prototype,"hasErrors",void 0),ge([_e({attribute:"instructions-position"})],Hr.prototype,"instructionsPosition",void 0),ge([_e({type:String,reflect:!0})],Hr.prototype,"width",void 0),customElements.get("craft-field")||customElements.define("craft-field",Hr),customElements.get("craft-field-group")||customElements.define("craft-field-group",class extends pe{render(){return H`
      <style>
        craft-field-group {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: var(--gap, var(--c-spacing-lg));
          container-type: inline-size;
        }

        craft-field-group > * {
          grid-column: 1 / -1;
          min-width: 0;
        }

        @container (min-width: 50rem) {
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
    `}createRenderRoot(){return this}});var Wr=r`
  ${Ls}

  :host {
    display: block;
  }

  .input-color {
    display: grid;
    gap: var(--c-spacing-sm);
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
    box-shadow: var(
      --focus-ring,
      0 0 0 2px var(--c-color-accent-border-normal)
    );
  }

  .input-color__preview {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%);
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
  }

  .input-group__container {
    ${Os}
    flex: 0 0 7.25rem;
    inline-size: 7.25rem;
    max-inline-size: 100%;
  }

  .input-group__input {
    display: flex;
    flex: 1 1 auto;
  }

  .input-group__prefix {
    color: var(--c-text-quiet);
    user-select: none;
    font-family: var(--c-font-mono);
    padding-inline: var(--c-input-spacing-inline) 0;
    display: grid;
    place-items: center;
  }

  ::slotted([slot='input']) {
    width: 100%;
    min-inline-size: 0;
    font: inherit;
    font-family: var(--c-font-mono);
    padding-block: 0;
    padding-inline: var(--c-spacing-xs) var(--c-input-spacing-inline);
    border: 0;
    appearance: none;
    background-color: transparent;
  }
`;const Gr=/^[0-9a-f]{6}$/i,Kr=/^[0-9a-f]{3}$/i,Yr={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function Zr(e){return String(e??"").trim().replace(/^#/,"")}function Jr(e){let t=Zr(e);return Kr.test(t)?t.split("").map(e=>e+e).join(""):Gr.test(t)?t:null}var Qr=class e extends oo{static get styles(){return[...super.styles,Ms,Wr]}constructor(){super(),this.presets=[],this._pickerListId=`${this._inputId}-presets`,this.type="text"}static doesBrowserSupportColorInputs(){if(null===e._browserSupportsColorInputs){let t=document.createElement("input");t.setAttribute("type","color"),e._browserSupportsColorInputs="color"===t.type}return e._browserSupportsColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement("input"),t=this.getAttribute("value");return e.type="text",e.inputMode="text",e.spellcheck=!1,e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),t&&e.setAttribute("value",Zr(t)),e}}}parser(e){return Zr(e)}formatter(e){return Zr(e)}serializer(e){return Zr(e)}deserializer(e){return Zr(e)}preprocessor(e){let t=Zr(e);if(t!==e)return t}get _expandedHexValue(){return Jr(this.modelValue)}get _pickerValue(){return this._expandedHexValue?`#${this._expandedHexValue}`:"#ffffff"}get _validPresets(){return this.presets.map(e=>Jr(e)).filter(e=>null!==e).map(e=>`#${e}`)}_handlePickerInput(e){let t=Zr(e.target.value),i=this._isHandlingUserInput;this._isHandlingUserInput=!0,this.modelValue=t,this.value=t,this._isHandlingUserInput=i}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return Y;let t=this._validPresets;return H`
      <input
        class="input-color__picker"
        type="color"
        aria-label="${ft("Color picker")}"
        .value="${this._pickerValue}"
        ?disabled="${this.disabled}"
        list=${t.length?this._pickerListId:Y}
        @input="${this._handlePickerInput}"
      />
      ${t.length?H`
            <datalist id="${this._pickerListId}">
              ${t.map(e=>H`<option value="${e}"></option>`)}
            </datalist>
          `:Y}
    `}_swatchTemplate(){return H`
      <label class="input-color__swatch">
        <span class="input-color__preview" style="${this._expandedHexValue?`background-color: #${this._expandedHexValue}`:""}"></span>
        ${this._pickerTemplate()}
      </label>
    `}_inputGroupTemplate(){return H`
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
    `}};Qr._browserSupportsColorInputs=null,ge([_e({converter:Yr})],Qr.prototype,"presets",void 0),customElements.get("craft-input-color")||customElements.define("craft-input-color",Qr);var Xr=r`
  craft-input input[type='checkbox'],
  craft-input input[type='radio'] {
    background-color: var(--c-input-fill, var(--c-form-control-fill));
    border-width: var(
      --c-input-border-width,
      var(--c-form-control-border-width)
    );
    border-style: var(
      --c-input-border-style,
      var(--c-form-control-border-style)
    );
    border-color: var(
      --c-input-border-color,
      var(--c-form-control-border-color)
    );
    border-radius: var(--c-input-radius, var(--c-radius-sm));
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
  }

  :host([maxlength]:not([width='full'])) ::slotted([slot='input']),
  :host([width='auto']) ::slotted([slot='input']) {
    width: auto;
  }

  /* Stop the input chrome from flexing back out to the available space. */
  :host([maxlength]:not([width='full'])) .input-group__container,
  :host([width='auto']) .input-group__container {
    flex: 0 0 auto;
  }
`,ea=class extends oo{constructor(...e){super(...e),this.size="medium",this.inputMode="",this.autoCorrect=!0,this.autoCapitalize=!0,this.small=!1,this.center=!1,this.monospace=!1,this.hiddenInput=!1}static get styles(){return[...super.styles,Ms,Xr]}connectedCallback(){super.connectedCallback(),this._inputNode&&this.maxlength&&this.maxlength>0&&(this._inputNode.maxLength=this.maxlength,"full"!==this.width&&(this._inputNode.size=this.maxlength)),this.syncNativeAttributes(),this.syncAriaInvalid()}updated(e){super.updated(e),(e.has("inputSize")||e.has("min")||e.has("max")||e.has("step")||e.has("inputMode")||e.has("autoCorrect")||e.has("autoCapitalize"))&&this.syncNativeAttributes(),this.syncAriaInvalid()}syncAriaInvalid(){let e=this.getAttribute("aria-invalid");null!==e&&this._inputNode?.setAttribute("aria-invalid",e)}syncNativeAttributes(){let e={size:this.inputSize,min:this.min,max:this.max,step:this.step,inputmode:this.inputMode,autocorrect:this.autoCorrect?void 0:"off",autocapitalize:this.autoCapitalize?void 0:"none"};for(let[t,i]of Object.entries(e))void 0!==i?this._inputNode?.setAttribute(t,String(i)):this._inputNode?.removeAttribute(t)}};ge([_e({type:Number,reflect:!0})],ea.prototype,"maxlength",void 0),ge([_e({type:String,reflect:!0})],ea.prototype,"size",void 0),ge([_e({type:Number,attribute:!1})],ea.prototype,"inputSize",void 0),ge([_e({attribute:!1})],ea.prototype,"min",void 0),ge([_e({attribute:!1})],ea.prototype,"max",void 0),ge([_e({attribute:!1})],ea.prototype,"step",void 0),ge([_e({attribute:!1})],ea.prototype,"inputMode",void 0),ge([_e({attribute:!1})],ea.prototype,"autoCorrect",void 0),ge([_e({attribute:!1})],ea.prototype,"autoCapitalize",void 0),ge([_e({reflect:!0,type:Boolean})],ea.prototype,"small",void 0),ge([_e({type:String,reflect:!0})],ea.prototype,"width",void 0),ge([_e({reflect:!0,type:Boolean})],ea.prototype,"center",void 0),ge([_e({reflect:!0,type:Boolean})],ea.prototype,"monospace",void 0),ge([_e({reflect:!0,type:Boolean,attribute:"hidden-input"})],ea.prototype,"hiddenInput",void 0),customElements.get("craft-input")||customElements.define("craft-input",ea);var ta=r`
  /*
   * The container's overflow: clip exists to keep prefix/suffix backgrounds
   * from bleeding past the rounded border. By mirroring the container's radius
   * on the suffix end-corners directly, we can drop the clip and let the
   * tooltip escape the container bounds.
   */
  .input-group__container {
    overflow: visible;
  }

  .input-group__suffix {
    border-start-end-radius: var(--c-input-radius, var(--c-radius-sm));
    border-end-end-radius: var(--c-input-radius, var(--c-radius-sm));
  }
`,ia=class extends ea{static get styles(){return[...super.styles,ta]}_renderSuffix(){return H`<craft-copy-button
      tooltip-label="${ft("Copy")}"
    ></craft-copy-button>`}get slots(){return{...super.slots,suffix:()=>({template:this._renderSuffix(),renderAsDirectHostChild:!0})}}connectedCallback(){super.connectedCallback(),this.readOnly=!0}_copyButton(){return this.querySelector("craft-copy-button")}_syncCopyButton(){let e=this._copyButton();e&&(e.value=this.copyValue??String(this.modelValue??""))}updated(e){super.updated(e),this.readOnly=!0,this._syncCopyButton()}};ge([_e({type:String,attribute:"copy-value"})],ia.prototype,"copyValue",void 0),customElements.get("craft-input-copy")||customElements.define("craft-input-copy",ia);var sa=class extends ea{constructor(){super(),this.type="date"}};customElements.get("craft-input-date")||customElements.define("craft-input-date",sa);var na=new WeakSet,oa=class extends ea{constructor(){super(),Ae(this,na),this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.type="time"}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Se(na,this,ra))}disconnectedCallback(){this.removeEventListener("change",Se(na,this,ra)),super.disconnectedCallback()}updated(e){e.has("minuteIncrement")&&(this.step=60*this.minuteIncrement),super.updated(e),Se(na,this,aa).call(this)}};function ra(e){if(e.target!==this&&e.target instanceof HTMLInputElement){if(this.forceRoundTime){let t=Se(na,this,la).call(this,e.target.value);e.target.value=t,this.modelValue=t,this.value=t}Se(na,this,aa).call(this)}}function aa(){let e=this._inputNode;if(!e)return;let t=Se(na,this,ca).call(this,e.value),i=null!==t&&this.disabledTimeRanges.some(([e,i])=>{let s=Se(na,this,ca).call(this,e),n=Se(na,this,ca).call(this,i);return null!==s&&null!==n&&t>=s&&t<n});e.setCustomValidity(i?"This time is unavailable.":"")}function la(e){let t=Se(na,this,ca).call(this,e);if(null===t)return e;let i=60*Math.max(1,this.minuteIncrement),s=Math.min(86399,Math.round(t/i)*i),n=Math.floor(s/3600),o=Math.floor(s%3600/60);return`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function ca(e){let t=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(e);return t?3600*Number(t[1])+60*Number(t[2])+Number(t[3]??0):null}ge([_e({type:Number,attribute:"minute-increment"})],oa.prototype,"minuteIncrement",void 0),ge([_e({attribute:"disabled-time-ranges",converter:{fromAttribute:e=>JSON.parse(e??"[]"),toAttribute:e=>JSON.stringify(e)}})],oa.prototype,"disabledTimeRanges",void 0),ge([_e({type:Boolean,attribute:"force-round-time"})],oa.prototype,"forceRoundTime",void 0),customElements.get("craft-input-time")||customElements.define("craft-input-time",oa);const da={fromAttribute:e=>"false"!==e,toAttribute:e=>String(e)};var ha=new WeakSet,ua=new WeakMap,pa=class extends pe{constructor(...e){super(...e),Ae(this,ha),this.dateValue="",this.timeValue="",this.showDate=!0,this.showTime=!0,this.showTimezone=!1,this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.disabled=!1,this.readonly=!1,this.required=!1,Ne(this,ua,e=>{let t=e.target;if(e.detail?.initialize||!(t instanceof ea))return;let i=String(t.modelValue??"");switch(t.dataset.dateTimePart){case"date":this.dateValue=i;break;case"time":this.timeValue=i;break;case"timezone":this.timezone=i}})}render(){return H`<slot></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("model-value-changed",Te(ua,this))}disconnectedCallback(){this.removeEventListener("model-value-changed",Te(ua,this)),super.disconnectedCallback()}updated(e){super.updated(e),Se(ha,this,ma).call(this),Se(ha,this,fa).call(this),Se(ha,this,ga).call(this),Se(ha,this,ya).call(this,"locale",this.locale,!0),Se(ha,this,ya).call(this,"timezone",this.timezone,!this.showTimezone)}};function ma(){let e=Se(ha,this,va).call(this,"craft-input-date","date",this.showDate);e instanceof sa&&(Se(ha,this,_a).call(this,e,"date",this.dateValue,this.required),e.min=this.min,e.max=this.max,Se(ha,this,ba).call(this,e))}function fa(){let e=Se(ha,this,va).call(this,"craft-input-time","time",this.showTime);e instanceof oa&&(Se(ha,this,_a).call(this,e,"time",this.timeValue,this.required),e.min=this.minTime,e.max=this.maxTime,e.minuteIncrement=this.minuteIncrement,e.disabledTimeRanges=this.disabledTimeRanges,e.forceRoundTime=this.forceRoundTime,Se(ha,this,ba).call(this,e))}function ga(){let e=Se(ha,this,va).call(this,"craft-input","timezone",this.showTimezone);e&&(Se(ha,this,_a).call(this,e,"timezone",this.timezone??"",!1),Se(ha,this,ba).call(this,e))}function va(e,t,i){let s=[...this.children].find(t=>t.tagName.toLowerCase()===e&&t instanceof ea);if(!i)return s?.remove(),null;let n=s??document.createElement(e);return n.dataset.dateTimePart=t,n}function ba(e){e.parentElement!==this&&this.append(e)}function _a(e,t,i,s){e.name=this.name?`${this.name}[${t}]`:"",e.disabled=this.disabled,e.readOnly=this.readonly,e.required=s,e.modelValue!==i&&(e.modelValue=i),this.describedBy?e.setAttribute("aria-describedby",this.describedBy):e.removeAttribute("aria-describedby")}function ya(e,t,i){let s=this.name?`${this.name}[${e}]`:void 0,n=[...this.children].find(t=>t instanceof HTMLInputElement&&"hidden"===t.type&&t.dataset.dateTimeMetadata===e);if(!s||!i)return void n?.remove();let o=n??document.createElement("input");o.type="hidden",o.dataset.dateTimeMetadata=e,o.name=s,o.value=t??"",n||this.append(o)}pa.styles=r`
    :host {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: var(--c-spacing-xs);
    }
  `,ge([_e()],pa.prototype,"name",void 0),ge([_e({attribute:"date-value"})],pa.prototype,"dateValue",void 0),ge([_e({attribute:"time-value"})],pa.prototype,"timeValue",void 0),ge([_e()],pa.prototype,"locale",void 0),ge([_e()],pa.prototype,"timezone",void 0),ge([_e({attribute:"show-date",converter:da})],pa.prototype,"showDate",void 0),ge([_e({attribute:"show-time",converter:da})],pa.prototype,"showTime",void 0),ge([_e({type:Boolean,attribute:"show-timezone"})],pa.prototype,"showTimezone",void 0),ge([_e()],pa.prototype,"min",void 0),ge([_e()],pa.prototype,"max",void 0),ge([_e({attribute:"min-time"})],pa.prototype,"minTime",void 0),ge([_e({attribute:"max-time"})],pa.prototype,"maxTime",void 0),ge([_e({type:Number,attribute:"minute-increment"})],pa.prototype,"minuteIncrement",void 0),ge([_e({attribute:"disabled-time-ranges",converter:{fromAttribute:e=>JSON.parse(e??"[]"),toAttribute:e=>JSON.stringify(e)}})],pa.prototype,"disabledTimeRanges",void 0),ge([_e({type:Boolean,attribute:"force-round-time"})],pa.prototype,"forceRoundTime",void 0),ge([_e({type:Boolean})],pa.prototype,"disabled",void 0),ge([_e({type:Boolean})],pa.prototype,"readonly",void 0),ge([_e({type:Boolean})],pa.prototype,"required",void 0),ge([_e({attribute:"described-by"})],pa.prototype,"describedBy",void 0),customElements.get("craft-input-date-time")||customElements.define("craft-input-date-time",pa);const ka=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},wa=He(class extends We{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const n=[],o=[];let r=0;for(const t of e)n[r]=s?s(t,r):r,o[r]=i(t,r),r++;return{values:o,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const n=(e=>e._$AH)(e),{values:o,keys:r}=this.dt(t,i,s);if(!Array.isArray(n))return this.ut=r,o;const a=this.ut??=[],l=[];let c,d,h=0,u=n.length-1,p=0,m=o.length-1;for(;h<=u&&p<=m;)if(null===n[h])h++;else if(null===n[u])u--;else if(a[h]===r[p])l[p]=Ps(n[h],o[p]),h++,p++;else if(a[u]===r[m])l[m]=Ps(n[u],o[m]),u--,m--;else if(a[h]===r[m])l[m]=Ps(n[h],o[m]),Fs(e,l[m+1],n[h]),h++,m--;else if(a[u]===r[p])l[p]=Ps(n[u],o[p]),Fs(e,n[h],n[u]),u--,p++;else if(void 0===c&&(c=ka(r,p,m),d=ka(a,h,u)),c.has(a[h]))if(c.has(a[u])){const t=d.get(r[p]),i=void 0!==t?n[t]:null;if(null===i){const t=Fs(e,n[h]);Ps(t,o[p]),l[p]=t}else l[p]=Ps(i,o[p]),Fs(e,n[h],i),n[t]=null;p++}else Vs(n[u]),u--;else Vs(n[h]),h++;for(;p<=m;){const t=Fs(e,l[m+1]);Ps(t,o[p]),l[p++]=t}for(;h<=u;){const e=n[h++];null!==e&&Vs(e)}return this.ut=r,((e,t=Ds)=>{e._$AH=t})(e,l),K}}),xa=e=>{switch(e){case"bg-BG":return s.e(7089).then(s.bind(s,7089));case"bg":return s.e(7893).then(s.bind(s,7893));case"cs-CZ":return s.e(9884).then(s.bind(s,9884));case"cs":return s.e(8988).then(s.bind(s,8988));case"de-DE":return s.e(7233).then(s.bind(s,7233));case"de":return s.e(9433).then(s.bind(s,9433));case"en-AU":return s.e(7012).then(s.bind(s,7012));case"en-GB":return s.e(5767).then(s.bind(s,5767));case"en-US":return s.e(5862).then(s.bind(s,5862));case"en-PH":case"en":default:return s.e(6993).then(s.bind(s,6993));case"es-ES":return s.e(9755).then(s.bind(s,9755));case"es":return s.e(7702).then(s.bind(s,7702));case"fr-FR":return s.e(6183).then(s.bind(s,6183));case"fr-BE":return s.e(5930).then(s.bind(s,5930));case"fr":return s.e(5182).then(s.bind(s,2801));case"hu-HU":return s.e(7857).then(s.bind(s,7857));case"hu":return s.e(6549).then(s.bind(s,6549));case"id-ID":return s.e(2977).then(s.bind(s,2977));case"id":return s.e(5011).then(s.bind(s,5011));case"it-IT":return s.e(897).then(s.bind(s,897));case"it":return s.e(8723).then(s.bind(s,8723));case"nl-BE":return s.e(5996).then(s.bind(s,5996));case"nl-NL":return s.e(4863).then(s.bind(s,4863));case"nl":return s.e(7960).then(s.bind(s,7960));case"pl-PL":return s.e(8187).then(s.bind(s,8187));case"pl":return s.e(2438).then(s.bind(s,2438));case"ro-RO":return s.e(4017).then(s.bind(s,4017));case"ro":return s.e(8045).then(s.bind(s,8045));case"ru-RU":return s.e(1325).then(s.bind(s,1325));case"ru":return s.e(2419).then(s.bind(s,2419));case"sk-SK":return s.e(2811).then(s.bind(s,2811));case"sk":return s.e(9156).then(s.bind(s,9156));case"uk-UA":return s.e(8309).then(s.bind(s,8309));case"uk":return s.e(174).then(s.bind(s,174));case"zh-CN":case"zh":return s.e(640).then(s.bind(s,640))}};class Ea extends(Un(Nn(pe))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Hn}}static get properties(){return{fileList:{type:Array},multiple:{type:Boolean}}}static localizeNamespaces=[{"lion-input-file":xa},...super.localizeNamespaces];constructor(){super(),this.fileList=[],this.multiple=!1}updated(e){super.updated(e),e.has("fileList")&&this._enhanceLightDomA11y()}_enhanceLightDomA11y(){const e=this.shadowRoot?.querySelectorAll('[id^="file-feedback"]'),t=this.parentNode?.parentNode;e?.forEach(e=>{t?.addEventListener("focusin",()=>{e.setAttribute("aria-live","polite")}),t?.addEventListener("focusout",()=>{e.setAttribute("aria-live","assertive")})})}_removeFile(e){this.dispatchEvent(new CustomEvent("file-remove-requested",{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_validationFeedbackTemplate(e,t){return H`
      <lion-validation-feedback
        id="file-feedback-${t}"
        .feedbackData="${e}"
        aria-live="assertive"
      ></lion-validation-feedback>
    `}_listItemBeforeTemplate(e){return Y}_listItemAfterTemplate(e,t){return H`
      <button
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit("lion-input-file:removeButtonLabel",{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </button>
    `}_removeButtonContentTemplate(){return H`✖️`}_selectedListItemTemplate(e){const t=Zt();return H`
      <div class="selected__list__item" status="${e.status?e.status.toLowerCase():""}">
        <div class="selected__list__item__label">
          ${this._listItemBeforeTemplate(e)}
          <span id="selected-list-item-label-${t}" class="selected__list__item__label__text">
            <span class="sr-only">${this.msgLit("lion-input-file:fileNameDescriptionLabel")}</span>
            ${e.downloadUrl&&"LOADING"!==e.status?H`
                  <a
                    class="selected__list__item__label__link"
                    href="${e.downloadUrl}"
                    target="${e.downloadUrl.startsWith("blob")?"_blank":""}"
                    rel="${Ur(e.downloadUrl.startsWith("blob")?"noopener noreferrer":void 0)}"
                    >${e.systemFile?.name}</a
                  >
                `:e.systemFile?.name}
          </span>
          ${this._listItemAfterTemplate(e,t)}
        </div>
        ${"FAIL"===e.status&&e.validationFeedback?H`
              ${wa(e.validationFeedback,e=>H`
                  ${this._validationFeedbackTemplate([e],t)}
                `)}
            `:Y}
      </div>
    `}render(){return this.fileList?.length?H`
          ${this.multiple?H`
                <ul class="selected__list">
                  ${this.fileList.map(e=>H` <li>${this._selectedListItemTemplate(e)}</li> `)}
                </ul>
              `:H` ${this._selectedListItemTemplate(this.fileList[0])} `}
        `:Y}static get styles(){return[r`
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
      `]}}var Ca=class extends Ea{static get styles(){return[...super.styles,r`
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
      `]}_listItemAfterTemplate(e,t){return H`
      <craft-button
        icon
        size="small"
        variant="plain"
        class="selected__list__item__remove-button"
        aria-label="${this.msgLit("lion-input-file:removeButtonLabel",{fileName:e.systemFile.name})}"
        @click=${()=>this._removeFile(e)}
      >
        ${this._removeButtonContentTemplate()}
      </craft-button>
    `}_removeButtonContentTemplate(){return H`<craft-icon name="x"></craft-icon>`}_listItemBeforeTemplate(e){return H`<img src="${e.downloadUrl}" alt="" class="preview-thumb" />`}};class Sa extends Yn{static validatorName="IsAcceptedFile";static checkFileSize(e,t){return e<=t}static getExtension(e){return e?.slice(e.lastIndexOf("."))}static isExtensionAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}static isFileTypeAllowed(e,t){return t?.find(t=>t.toUpperCase()===e.toUpperCase())}execute(e,t=this.param){let i,s;const n=this.constructor,{allowedFileTypes:o,allowedFileExtensions:r,maxFileSize:a}=t;return o?.length?(i=e.some(e=>!n.isFileTypeAllowed(e.type,o)),i):r?.length?(s=e.some(e=>!n.isExtensionAllowed(n.getExtension(e.name),r)),s):e.findIndex(e=>!n.checkFileSize(e.size,a))>-1}static async getMessage(){return""}}class Aa extends Yn{static validatorName="DuplicateFileNames";constructor(e,t){super(e,t),this.type="info"}execute(e,t=this.param){return t.show}static async getMessage(){return wn().msg("lion-input-file:uploadTextDuplicateFileName")}}const Na="FILE_TYPE",Ta="FAIL";class Oa{constructor(e,t){this.failedProp=[],this.systemFile=e,this._acceptCriteria=t,this.uploadFileStatus(),0===this.failedProp.length&&this.createDownloadUrl(e)}_getFileNameExtension(e){return e.slice(e.lastIndexOf("."))}uploadFileStatus(){if(this._acceptCriteria.allowedFileExtensions.length){const e=this._getFileNameExtension(this.systemFile.name);Sa.isExtensionAllowed(e,this._acceptCriteria.allowedFileExtensions)||(this.status=Ta,this.failedProp.push(Na))}else if(this._acceptCriteria.allowedFileTypes.length){const e=this.systemFile.type;Sa.isFileTypeAllowed(e,this._acceptCriteria.allowedFileTypes)||(this.status=Ta,this.failedProp.push(Na))}Sa.checkFileSize(this.systemFile.size,this._acceptCriteria.maxFileSize)?this.status!==Ta&&(this.status="SUCCESS"):(this.status=Ta,this.failedProp.push("FILE_SIZE"))}createDownloadUrl(e){this.downloadUrl=window.URL.createObjectURL(e)}}function La(e,t=2){if(!+e)return"0 Bytes";const i=t<0?0:t,s=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/1024**s).toFixed(i))}${[" bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]}`}class Ma extends(Nn(Un(no))){static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":Ea}}static get properties(){return{accept:{type:String},multiple:{type:Boolean,reflect:!0},buttonLabel:{type:String,attribute:"button-label"},maxFileSize:{type:Number,attribute:"max-file-size"},enableDropZone:{type:Boolean,attribute:"enable-drop-zone"},uploadOnSelect:{type:Boolean,attribute:"upload-on-select"},isDragging:{type:Boolean,attribute:"is-dragging",reflect:!0},uploadResponse:{type:Array,state:!1},_selectedFilesMetaData:{type:Array,state:!0}}}static localizeNamespaces=[{"lion-input-file":xa},...super.localizeNamespaces];static get validationTypes(){return["error","info"]}get slots(){return{...super.slots,input:()=>H`<input .value="${Ur(this.getAttribute("value"))}" />`,"file-select-button":()=>H`<button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </button>`,after:()=>H`<div data-description></div>`,"selected-file-list":()=>({template:H`
          <lion-selected-file-list
            .fileList=${this._selectedFilesMetaData}
            .multiple=${this.multiple}
          ></lion-selected-file-list>
        `,renderAsDirectHostChild:!0})}}get _inputNode(){return super._inputNode}get _buttonNode(){return this.querySelector(`#select-button-${this._inputId}`)}get buttonLabel(){return this.__buttonLabel||this._buttonNode?.textContent?.trim()||""}set buttonLabel(e){const t=this.buttonLabel;this.__buttonLabel=e,this.requestUpdate("buttonLabel",t)}get _focusableNode(){return this._buttonNode}get _isDragAndDropSupported(){return"draggable"in document.createElement("div")}constructor(){super(),this.type="file",this._selectedFilesMetaData=[],this.uploadResponse=[],this.__initialUploadResponse=this.uploadResponse,this.uploadOnSelect=!1,this.multiple=!1,this.enableDropZone=!1,this.maxFileSize=524288e3,this.accept="",this.buttonLabel="",this._initialButtonLabel="",this.modelValue=[],this._onRemoveFile=this._onRemoveFile.bind(this),this.__duplicateFileNamesValidator=new Aa({show:!1}),this.__previouslyParsedFiles=null}get _fileListNode(){return Array.from(this.children).find(e=>"selected-file-list"===e.slot)}connectedCallback(){super.connectedCallback(),this.__initialUploadResponse=this.uploadResponse,this._initialButtonLabel=this.buttonLabel,this._inputNode.addEventListener("change",this._onChange),this._inputNode.addEventListener("click",this._onClick)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener("change",this._onChange),this._inputNode.removeEventListener("click",this._onClick)}onLocaleUpdated(){super.onLocaleUpdated(),this.multiple?this.buttonLabel=this._initialButtonLabel||this.msgLit("lion-input-file:selectTextMultipleFile"):this.buttonLabel=this._initialButtonLabel||this.msgLit("lion-input-file:selectTextSingleFile")}get operationMode(){return"upload"}get _acceptCriteria(){let e=[],t=[];if(this.accept){const i=this.accept.replace(/\s+/g,"").split(",");e=i.filter(e=>e.includes("/")),t=i.filter(e=>!e.includes("/"))}return{allowedFileTypes:e,allowedFileExtensions:t,maxFileSize:this.maxFileSize}}reset(){super.reset(),this._selectedFilesMetaData=[],this.uploadResponse=this.__initialUploadResponse,this.modelValue=[],this.dirty=!1}clear(){this._selectedFilesMetaData=[],this.uploadResponse=[],this.modelValue=[]}_showFeedbackConditionFor(e,t){return super._showFeedbackConditionFor(e,t)&&!(this.validationStates.error?.FileTypeAllowed||this.validationStates.error?.FileSizeAllowed)}parser(){if(this.__previouslyParsedFiles===this._inputNode.files)return this.modelValue;this.__previouslyParsedFiles=this._inputNode.files;const e=this._inputNode.files?Array.from(this._inputNode.files):[];return this.multiple?[...this.modelValue??[],...e]:e}formatter(e){return this._inputNode?.value||""}__setupDragDropEventListeners(){const e=this.shadowRoot?.querySelector(".input-file__drop-zone");["dragenter","dragover","dragleave"].forEach(t=>{e?.addEventListener(t,e=>{e.preventDefault(),e.stopPropagation(),this.isDragging="dragleave"!==t},!1)}),window.addEventListener("drop",e=>{e.target===this._inputNode&&e.preventDefault(),this.isDragging=!1},!1)}firstUpdated(e){super.firstUpdated(e),this.__setupFileValidators(),this._inputNode&&(this._inputNode.type=this.type,this._inputNode.setAttribute("tabindex","-1"),this._inputNode.multiple=this.multiple,this.accept.length&&(this._inputNode.accept=this.accept)),this.enableDropZone&&this._isDragAndDropSupported&&(this.__setupDragDropEventListeners(),this.setAttribute("drop-zone","")),this._fileListNode.addEventListener("file-remove-requested",this._onRemoveFile)}updated(e){super.updated(e),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("buttonLabel")&&this._buttonNode&&(this._buttonNode.textContent=this.buttonLabel),e.has("name")&&(this._inputNode.name=this.name),e.has("_ariaLabelledNodes")&&this.__syncAriaLabelledByAttributesToButton(),e.has("_ariaDescribedNodes")&&this.__syncAriaDescribedByAttributesToButton(),e.has("uploadResponse")&&(0===this._selectedFilesMetaData.length&&this.uploadResponse.forEach(e=>{const t={systemFile:{name:e.name},response:e,status:e.status,validationFeedback:[{message:e.errorMessage}]};this._selectedFilesMetaData=[...this._selectedFilesMetaData,t]}),this._selectedFilesMetaData.forEach(e=>{!this.uploadResponse.some(t=>t.name===e.systemFile.name)&&this.uploadOnSelect?this.__removeFileFromList(e):(this.uploadResponse.forEach(t=>{t.name===e.systemFile.name&&(e.response=t,e.downloadUrl=t.downloadUrl?t.downloadUrl:e.downloadUrl,e.status=t.status,e.validationFeedback=[{type:"string"==typeof t.errorMessage&&t.errorMessage?.length>0?"error":"success",message:t.errorMessage??""}])}),this._selectedFilesMetaData=[...this._selectedFilesMetaData])}),this._updateUploadButtonDescription())}__computeNewAddedFiles(e){const t=e.filter(e=>-1===this._selectedFilesMetaData.findIndex(t=>t.systemFile.name===e.name));return this.__duplicateFileNamesValidator.param={show:e.length!==t.length},this.validate(),t}_processDroppedFiles(e){if(e.preventDefault(),this.isDragging=!1,(!(e.dataTransfer&&e.dataTransfer.items.length>1)||this.multiple)&&e.dataTransfer?.files){if(this._inputNode.files=e.dataTransfer.files,this.multiple){const t=this.__computeNewAddedFiles(Array.from(e.dataTransfer.files));this.modelValue=[...this.modelValue??[],...t]}else this.modelValue=Array.from(e.dataTransfer.files);this._processFiles(Array.from(e.dataTransfer.files))}}_onChange(e){this.touched=!0,this._onUserInputChanged(),this._processFiles((e?.target)?.files)}_onClick(e){e.target.value=""}__syncAriaLabelledByAttributesToButton(){if(this._inputNode.hasAttribute("aria-labelledby")){const e=this._inputNode.getAttribute("aria-labelledby");this._buttonNode?.setAttribute("aria-labelledby",`select-button-${this._inputId} ${e}`)}}__syncAriaDescribedByAttributesToButton(){if(this._inputNode.hasAttribute("aria-describedby")){const e=this._inputNode.getAttribute("aria-describedby")||"";this._buttonNode?.setAttribute("aria-describedby",e)}}__setupFileValidators(){this.defaultValidators=[new Sa(this._acceptCriteria),this.__duplicateFileNamesValidator]}_processFiles(e){const t=this.__computeNewAddedFiles(Array.from(e));let i;!this.multiple&&t.length>0&&(this._selectedFilesMetaData=[],this.uploadResponse=[]);for(const e of t.values())i=new Oa(e,this._acceptCriteria),i.failedProp?.length?(this._handleErroredFiles(i),this.uploadResponse=[...this.uploadResponse,{name:i.systemFile.name,status:"FAIL",errorMessage:i.validationFeedback[0].message}]):this.uploadResponse=[...this.uploadResponse,{name:i.systemFile.name,status:"SUCCESS"}],this._selectedFilesMetaData=[...this._selectedFilesMetaData,i],this._handleErrors();const s=this._selectedFilesMetaData.filter(({systemFile:e,status:i})=>t.includes(e)&&"SUCCESS"===i).map(({systemFile:e})=>e);s.length>0&&this._dispatchFileListChangeEvent(s)}_dispatchFileListChangeEvent(e){this.dispatchEvent(new CustomEvent("file-list-changed",{detail:{newFiles:e}}))}_handleErrors(){let e=!1;if(this._selectedFilesMetaData.forEach(t=>{t.failedProp&&t.failedProp.length>0&&(e=!0)}),e)this.hasFeedbackFor?.push("error"),this.shouldShowFeedbackFor.push("error");else if(this._prevHasErrors&&this.hasFeedbackFor.includes("error")){const e=this.hasFeedbackFor.indexOf("error");this.hasFeedbackFor.slice(e,e+1);const t=this.shouldShowFeedbackFor.indexOf("error");this.shouldShowFeedbackFor.slice(t,t+1)}this._prevHasErrors=e}_handleErroredFiles(e){e.validationFeedback=[];const{allowedFileExtensions:t,allowedFileTypes:i}=this._acceptCriteria;let s,n=[],o=0;t.length?(n=t,s=n.pop(),o=n.length):i.length&&(i.forEach(e=>{if(e.endsWith("/*"))n.push(e.slice(0,-2));else if("text/plain"===e)n.push("text");else{const t=e.indexOf("/"),i=e.slice(t+1);if(i.includes("+")){const e=i.split("+");n.push(`.${e[0]}`)}else n.push(`.${i}`)}}),s=n.pop(),o=n.length);let r="";r=s?o?`${this.msgLit("lion-input-file:allowedFileValidatorComplex",{allowedTypesArray:n.join(", "),allowedTypesLastItem:s,maxSize:La(this.maxFileSize)})}`:`${this.msgLit("lion-input-file:allowedFileValidatorSimple",{allowedType:s,maxSize:La(this.maxFileSize)})}`:`${this.msgLit("lion-input-file:allowedFileSize",{maxSize:La(this.maxFileSize)})}`;const a={message:r,type:"error"};e.validationFeedback?.push(a)}_updateUploadButtonDescription(){const e=[];let t;this._selectedFilesMetaData.forEach(i=>{"FAIL"===i.status&&(t=i.validationFeedback?i.validationFeedback[0].message.toString():"",e.push(i.systemFile.name))});const i=this.querySelector('[slot="after"]');if(i)if(this._selectedFilesMetaData&&0!==this._selectedFilesMetaData.length)if(1===this._selectedFilesMetaData.length){const{name:e}=this._selectedFilesMetaData[0].systemFile;this.uploadOnSelect?i.textContent=t||this.msgLit("lion-input-file:fileUploaded")+(e??""):i.textContent=t||this.msgLit("lion-input-file:fileSelected")+(e??"")}else this.uploadOnSelect?i.textContent=`${this.msgLit("lion-input-file:filesUploaded",{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit("lion-input-file:generalValidatorMessage",{validatorMessage:t,listOfErroneousFiles:e.join(", ")}):""}`:i.textContent=`${this.msgLit("lion-input-file:filesSelected",{numberOfFiles:this._selectedFilesMetaData.length})} ${t?this.msgLit("lion-input-file:generalValidatorMessage",{validatorMessage:t,listOfErroneousFiles:e.join(", ")}):""}`;else this.uploadOnSelect?i.textContent=this.msgLit("lion-input-file:noFilesUploaded"):i.textContent=this.msgLit("lion-input-file:noFilesSelected")}__removeFileFromList(e){this._selectedFilesMetaData=this._selectedFilesMetaData.filter(t=>t.systemFile.name!==e.systemFile.name),this.modelValue&&(this.modelValue=this.modelValue.filter(t=>t.name!==e.systemFile.name)),this._inputNode.value="",this._handleErrors(),this._updateUploadButtonDescription()}_onRemoveFile(e){if(this.disabled)return;const{removedFile:t}=e.detail;!this.uploadOnSelect&&t&&this.__removeFileFromList(t),this._removeFile(t)}_removeFile(e){this.dispatchEvent(new CustomEvent("file-removed",{detail:{removedFile:e,status:e.status,uploadResponse:e.response}}))}_reflectBackOn(){return!1}_isEmpty(){return 0===this.modelValue?.length}_dropZoneTemplate(){return H`
      <div @drop="${this._processDroppedFiles}" class="input-file__drop-zone">
        <div class="input-file__drop-zone__text">
          ${this.msgLit("lion-input-file:dragAndDropText")}
        </div>
        <slot name="file-select-button"></slot>
      </div>
    `}_inputGroupAfterTemplate(){return H` <slot name="selected-file-list"></slot> `}_inputGroupInputTemplate(){return H`
      <slot name="input"> </slot>
      <slot name="after"> </slot>
      ${this.enableDropZone&&this._isDragAndDropSupported?this._dropZoneTemplate():H`
            <div class="input-group__file-select-button">
              <slot name="file-select-button"></slot>
            </div>
          `}
    `}static get styles(){return[super.styles,r`
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
      `]}__openDialogOnBtnClick(e){e.preventDefault(),e.stopPropagation(),this._inputNode.click()}}var $a=r`
  /* Add any craft-specific styles for input-file here */
  ::slotted([slot='selected-file-list']) {
    margin-block-start: var(--c-spacing-lg);
  }
`;customElements.get("craft-input-file")||customElements.define("craft-input-file",class extends Ma{static get styles(){return[...super.styles,Ms,$a]}get slots(){return{...super.slots,"file-select-button":()=>H`<craft-button
          type="button"
          id="select-button-${this._inputId}"
          @click="${this.__openDialogOnBtnClick}"
        >
          ${this.buttonLabel}
        </craft-button>`}}static get scopedElements(){return{...super.scopedElements,"lion-selected-file-list":Ca}}});var Ia=class extends ea{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize="off"}static get styles(){return[...super.styles,r`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}updated(e){super.updated(e),this._inputNode?.setAttribute("autocorrect",this.autocorrect?"on":"off"),this._inputNode?.setAttribute("autocapitalize",this.autocapitalize)}};ge([_e({reflect:!0,converter:{fromAttribute:e=>"off"!==e,toAttribute:e=>e?"on":"off"}})],Ia.prototype,"autocorrect",void 0),ge([_e({reflect:!0,type:String})],Ia.prototype,"autocapitalize",void 0),customElements.get("craft-input-handle")||customElements.define("craft-input-handle",Ia);var Fa=s(5209),Pa=Fa.default||Fa;const Da={fromAttribute(e){return"false"!==e},toAttribute(e){return String(e)}};var Va=new WeakSet,Ra=new WeakMap,Ba=class extends ea{static get styles(){return[...super.styles,r`
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
      `]}constructor(){super(),Ae(this,Va),this.currency="USD",this.locale="en-US",this.showCurrency=!0,this.clearable=!0,Ne(this,Ra,()=>{this.modelValue="",this.value="",Se(Va,this,za).call(this)?.inputmask?.setValue(""),Se(Va,this,za).call(this)?.focus()}),this.type="text",this.inputMode="decimal"}updated(e){super.updated(e),(e.has("currency")||e.has("locale")||e.has("decimals")||e.has("decimalSeparator")||e.has("groupSeparator")||e.has("placeholder"))&&Se(Va,this,Ua).call(this),Se(Va,this,za).call(this)?.classList.toggle("money-placeholder",!Se(Va,this,qa).call(this))}disconnectedCallback(){Se(Va,this,za).call(this)?.inputmask?.remove(),super.disconnectedCallback()}_inputGroupPrefixTemplate(){return this.showCurrency?H`<div class="input-group__prefix">
      <span class="currency"
        >${`(${this.currency}) ${Se(Va,this,ja).call(this).currency}`}</span
      >
    </div>`:Y}_inputGroupInputTemplate(){return H`<div class="input-group__input">
      <slot name="input"></slot>
      <craft-button
        class="clear"
        type="button"
        variant="plain"
        size="small"
        icon
        aria-label=${ft("Clear")}
        ?hidden=${!this.clearable||this.disabled||!Se(Va,this,qa).call(this)}
        @mousedown=${e=>e.preventDefault()}
        @click=${Te(Ra,this)}
      >
        <craft-icon name="xmark" style="font-size: 0.8em"></craft-icon>
      </craft-button>
    </div>`}};function za(){return this._inputNode}function ja(){let e=new Intl.NumberFormat(this.locale.replaceAll("_","-"),{style:"currency",currency:this.currency}),t=e.formatToParts(12345.6);return{currency:t.find(({type:e})=>"currency"===e)?.value??"",decimal:t.find(({type:e})=>"decimal"===e)?.value??".",group:t.find(({type:e})=>"group"===e)?.value??",",decimals:e.resolvedOptions().maximumFractionDigits}}function Ua(){let e=Se(Va,this,za).call(this);if(!e)return;let t=String(this.modelValue??""),i=Se(Va,this,ja).call(this);e.inputmask?.remove(),e.value=t,new Pa({alias:"currency",autoGroup:!1,clearMaskOnLostFocus:!0,digits:this.decimals??i.decimals,digitsOptional:!1,groupSeparator:this.groupSeparator??i.group,placeholder:this.placeholder||"0",prefix:"",radixPoint:this.decimalSeparator??i.decimal}).mask(e)}function qa(){return""!==this.modelValue&&null!=this.modelValue}ge([_e()],Ba.prototype,"currency",void 0),ge([_e()],Ba.prototype,"locale",void 0),ge([_e({type:Number})],Ba.prototype,"decimals",void 0),ge([_e({attribute:"decimal-separator"})],Ba.prototype,"decimalSeparator",void 0),ge([_e({attribute:"group-separator"})],Ba.prototype,"groupSeparator",void 0),ge([_e({converter:Da,attribute:"show-currency"})],Ba.prototype,"showCurrency",void 0),ge([_e({converter:Da})],Ba.prototype,"clearable",void 0),customElements.get("craft-input-money")||customElements.define("craft-input-money",Ba);var Ha=class extends oo{static get styles(){return[...super.styles,Ms,r`
        .input-group__container {
          position: relative;
        }

        .input-group__suffix {
          position: absolute;
          inset-inline-end: var(--c-input-spacing-inline);
          inset-block-start: 50%;
          transform: translateY(calc(-50%));
        }
      `]}constructor(){super(),this._visible=!1,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?"text":"password"},this.renderSuffix=()=>H`<craft-button
      type="button"
      icon
      size="small"
      variant="plain"
      @click="${this.reveal}"
    >
      <span class="icon"
        >${this._visible?H`<craft-icon
              name="eye-slash"
              label="${ft("Hide")}"
            ></craft-icon>`:H`<craft-icon name="eye" label="${ft("Show")}"></craft-icon>`}
      </span>
    </craft-button>`,this.type="password"}get slots(){return{...super.slots,suffix:()=>({template:this.renderSuffix(),renderAsDirectHostChild:!0})}}};ge([ye()],Ha.prototype,"_visible",void 0),customElements.get("craft-input-password")||customElements.define("craft-input-password",Ha);var Wa=class extends pe{constructor(...e){super(...e),this.error="",this.pluginName=""}render(){return H`
      <p class="error" role="alert">${this.error}</p>
      ${this.pluginName?H`<div class="install-plugin">
            <div class="icon" aria-hidden="true"><slot name="icon"></slot></div>
            <div class="plugin">
              <h3>${this.pluginName}</h3>
              <slot name="action"></slot>
            </div>
          </div>`:Y}
    `}};Wa.styles=r`
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
  `,ge([_e()],Wa.prototype,"error",void 0),ge([_e({attribute:"plugin-name"})],Wa.prototype,"pluginName",void 0),customElements.get("craft-missing-component")||customElements.define("craft-missing-component",Wa);var Ga=r`
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
    border: 2px solid Canvas;
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
    padding: calc(2rem / 16);
  }

  .number {
    display: inline-flex;
    font-size: var(--c-text-xs);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
  }
`,Ka=class extends pe{constructor(){super(),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.variant="primary",this.id=this.id||`badge-${Math.floor(1e9*Math.random()).toString()}`}showCount(){return null!==this.badgeCount&&this.badgeCount>0}truncatedNumber(){if(this.showCount)return this.badgeCount>99?"99+":this.badgeCount.toString()}getBadgeRole(){return this.altText?"img":Y}getLabelId(){return`${this.id}-label`}renderBadgeContents(){return H`
      ${this.showCount()?H`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:Y}
      ${this.altText?H`
            <sl-visually-hidden id=${this.getLabelId()}
              >${this.altText}</sl-visually-hidden
            >
          `:Y}
    `}render(){return H`
      <div
        part="badge"
        id=${this.id}
        class="${Ge({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":"secondary"===this.variant,"badge-indicator--inverse":"inverse"===this.variant})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?this.getLabelId():Y}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};Ka.styles=[Ga],ge([_e({attribute:"alt-text"})],Ka.prototype,"altText",void 0),ge([_e({attribute:"badge-count"})],Ka.prototype,"badgeCount",void 0),ge([_e({attribute:"badge-count-suffix"})],Ka.prototype,"badgeCountSuffix",void 0),ge([_e()],Ka.prototype,"variant",void 0),ge([_e()],Ka.prototype,"id",void 0),customElements.get("craft-badge-indicator")||customElements.define("craft-badge-indicator",Ka);const Ya=Symbol.for(""),Za=e=>{if(e?.r===Ya)return e?._$litStatic$},Ja=(e,...t)=>({_$litStatic$:t.reduce((t,i,s)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]),r:Ya}),Qa=new Map,Xa=e=>(t,...i)=>{const s=i.length;let n,o;const r=[],a=[];let l,c=0,d=!1;for(;c<s;){for(l=t[c];c<s&&void 0!==(o=i[c],n=Za(o));)l+=n+t[++c],d=!0;c!==s&&a.push(o),r.push(l),c++}if(c===s&&r.push(t[s]),d){const e=r.join("$$lit$$");void 0===(t=Qa.get(e))&&(r.raw=r,Qa.set(e,t=r)),i=a}return e(t,...i)},el=Xa(H),tl=(Xa(W),Xa(G),"important"),il=" !"+tl,sl=He(class extends We{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const s=t[e];if(null!=s){this.ft.add(e);const t="string"==typeof s&&s.endsWith(il);e.includes("-")||t?i.setProperty(e,t?s.slice(0,-11):s,t?tl:""):i[e]=s}}return K}});var nl=r`
  :host {
    --_padding-inline: var(--c-spacing-md);
    --_padding-block: var(--c-spacing-sm);
  }

  .nav-item {
    display: grid;
    gap: var(--c-spacing-md);
    grid-template-columns: auto 1fr auto;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding-inline: var(--_padding-inline);
    padding-block: var(--_padding-block);
    border-radius: var(--c-radius-md);
    position: relative;
  }

  craft-badge-indicator {
      position: absolute;
      inset-inline-end: 0;
      inset-block-end: 0;
    }
  }

  .nav-item--prefixed {
    padding-inline: var(--c-spacing-sm);
    grid-template-columns: calc(24rem / 16) 1fr auto;
  }

  .nav-item--flush {
    margin-inline-start: calc(var(--_padding-inline) * -1);
  }

  :host([group]) {
    margin-block-start: var(--c-spacing-sm);
  }

  :host([active]) .nav-item {
    &:before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block-start: 12%;
      width: calc(3rem / 16);
      height: 76%;
      border-radius: calc(2rem / 16);
      background-color: currentColor;
      transform: translateX(-150%);
    }
  }

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

  :host(:not([group])) .subnav {
    margin-block-start: var(--c-spacing-sm);
    margin-inline-start: calc(
      (var(--c-size-icon-md) / 2) + var(--c-spacing-sm) + 1px
    );
    padding-inline: var(--c-spacing-sm);
    border-left: 2px solid color-mix(in srgb, currentColor, transparent 90%);
  }

  :host([icon-only]) {
    .nav-item {
      gap: 0;
      grid-template-columns: calc(24rem / 16);
    }

    .nav-item__suffix {
      display: grid;
      justify-content: center;
      align-items: center;
    }

    .subnav {
      margin: 0;
      border-left: none;
      padding-inline: 0;
    }
  }
`,ol=class extends pe{get hasLabel(){return Array.from(this.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute("slot"))}constructor(){super(),this.active=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState="closed",this.group=!1,this.togglePosition="suffix",this.subnavState="closed",this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.subnavState=this.active||"open"===this.initialState?"open":"closed"}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState="open"===this.subnavState?"closed":"open"}renderIconItem(e){let t=`item-${this.id}`,i=this.href?Ja`a`:Ja`span`;return el`
      <${i}
        class="${Ge({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":!this.href})}"
        id="${t}"
        href="${Ur(this.href||void 0)}"
        aria-current="${this.href?this.active?"page":"false":Y}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(e)}
      </${i}>
      <craft-tooltip for="${t}" placement="right-start"
        ><slot></slot
      ></craft-tooltip>
    `}renderSubnavToggle(){return H`
      <craft-button
        @click="${this.toggleSubnav}"
        variant="${ni.Plain}"
        icon
        size="small"
        aria-controls="${this.id}-subnav"
        aria-expanded="${"open"===this.subnavState?"true":"false"}"
        aria-labelledby="${this.id}-toggle-icon ${this.id}-label"
      >
        <craft-icon
          id="${this.id}-toggle-icon"
          name="${"closed"===this.subnavState?"chevron-down":"chevron-up"}"
          style="font-size: calc(10rem / 16)"
          label="${ft("Toggle subnavigation")}"
        ></craft-icon>
      </craft-button>
    `}renderPrefix(e=!1){return e&&"prefix"===this.togglePosition?H`
        <span class="nav-item__prefix">${this.renderSubnavToggle()}</span>
      `:H`
      <span class="nav-item__prefix">
        <slot name="prefix">
          <slot name="icon">
            ${this.icon?H` <craft-icon
                  name="${this.icon}"
                  class="nav-icon"
                ></craft-icon>`:Y}
          </slot>
          ${this.indicator?H`<craft-badge-indicator
                altText="${ft("Has Notifications")}"
              />`:Y}
        </slot>
      </span>
    `}renderSuffix(e=!1){return H`
      <div class="nav-item__suffix">
        <slot name="suffix">
          ${e&&"suffix"===this.togglePosition?this.renderSubnavToggle():Y}
        </slot>
      </div>
    `}renderItem(e,t=!1){let i=this.href?Ja`a`:Ja`span`;return el`
      <${i}
        class="${Ge({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":!this.href})}"
        href="${Ur(this.href||void 0)}"
        aria-current="${this.href?this.active?"page":"false":Y}"
      >
        ${t?this.renderPrefix(e):Y}
        <slot
          id="${this.id}-label"
          @slotchange="${()=>this.requestUpdate()}"
        ></slot>
        ${this.renderSuffix(e)}
      </${i}>
    `}render(){let e=!!this.querySelector('[slot="subnav"]'),t=e&&this.hasLabel&&!this.group,i=t&&"prefix"===this.togglePosition||!!this.icon||!!this.querySelector('[slot="prefix"]')||!!this.querySelector('[slot="icon"]'),s=!t||"open"===this.subnavState;return H`
      <li>
        ${this.iconOnly?this.renderIconItem(t):this.renderItem(t,i)}
        ${e?H`
              <div
                class="subnav"
                id="${this.id}-subnav"
                style="${sl({display:s?"block":"none"})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:Y}
      </li>
    `}};ol.styles=nl,ge([_e()],ol.prototype,"icon",void 0),ge([_e()],ol.prototype,"href",void 0),ge([_e({type:Boolean,reflect:!0})],ol.prototype,"active",void 0),ge([_e({type:Boolean})],ol.prototype,"external",void 0),ge([_e({type:Boolean})],ol.prototype,"indicator",void 0),ge([_e()],ol.prototype,"id",void 0),ge([_e({reflect:!0,type:Boolean,attribute:"icon-only"})],ol.prototype,"iconOnly",void 0),ge([_e()],ol.prototype,"flush",void 0),ge([_e({reflect:!0,attribute:"initial-state"})],ol.prototype,"initialState",void 0),ge([_e({type:Boolean,reflect:!0})],ol.prototype,"group",void 0),ge([_e({attribute:"toggle-position"})],ol.prototype,"togglePosition",void 0),ge([ye()],ol.prototype,"subnavState",void 0),customElements.get("craft-nav-item")||customElements.define("craft-nav-item",ol);var rl=class extends pe{render(){return H`
      <ul class="nav-list">
        <slot></slot>
      </ul>
    `}};rl.styles=r`
    :host {
      display: block;
    }

    .nav-list {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  `,customElements.get("craft-nav-list")||customElements.define("craft-nav-list",rl);var al=r`
  :host {
    display: block;

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

  :host([appearance='raised']) {
    --_pane-border-color: var(--c-color-neutral-border-quiet);
    --_pane-shadow: var(--c-shadow-raised);
  }

  :host([appearance='outline']) {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: var(--_pane-spacing);
    padding-block: var(--_pane-spacing) 0;
    position: sticky;
    inset-block-start: 0;
    z-index: 10;
    background-color: var(--_pane-background);
  }

  .cp-pane__title {
    font-size: var(--c-pane-title-font-size, calc(18rem / 16));
    line-height: var(--c-pane-title-line-height, calc(28 / 18));
    font-weight: var(--c-pane-title-font-weight, 700);
    margin: 0;
  }

  .cp-pane__header-actions {
    display: flex;
    align-items: center;
    gap: var(--c-spacing-sm);
  }

  .cp-pane__body {
    padding-inline: var(--_pane-spacing);
    padding-block: var(--_pane-spacing) calc(var(--_pane-spacing) * 1.5);
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
    z-index: 10;
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
`;const ll={Raised:"raised",Outline:"outline",Plain:"plain",Sunken:"sunken"},cl=(Object.values(ll),{Plain:"plain",Error:"error",Code:"code"}),dl=(Object.values(cl),["sm","md","lg","xl"]),hl=new Set(["clip","hidden"]);var ul=class extends pe{constructor(...e){super(...e),this.appearance=ll.Raised,this.variant=cl.Plain,this.padding="lg",this.label="",this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._scrollable=!1,this._hostLabel="",this._lightDomObserver=new MutationObserver(()=>this._syncLightDom()),this._observedBoxes=new Set}connectedCallback(){super.connectedCallback(),this._syncLightDom(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["slot","aria-label"]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect(),this._resizeObserver?.disconnect(),this._observedBoxes.clear()}get _scroller(){return this.renderRoot?.querySelector(".cp-pane")??null}_hasSlot(...e){return Array.from(this.children).some(t=>e.includes(t.slot))}_syncSlotPresence(){this._hasSlottedHeader=this._hasSlot("header","title","header-actions"),this._hasSlottedFooter=this._hasSlot("footer","footer-content","feedback","actions","primary-action","secondary-action")}_syncLightDom(){this._syncSlotPresence(),this._hostLabel=this.getAttribute("aria-label")??"",this._syncScrollable(),this._observeScrollable()}_syncScrollable(){let e=this._scroller;if(!e?.isConnected)return void(this._scrollable=!1);let{overflowX:t,overflowY:i}=getComputedStyle(e);this._scrollable=!hl.has(i)&&e.scrollHeight-e.clientHeight>1||!hl.has(t)&&e.scrollWidth-e.clientWidth>1}_observeScrollable(){if(typeof ResizeObserver>"u")return;let e=this._resizeObserver??(this._resizeObserver=new ResizeObserver(()=>this._syncScrollable())),t=this._scroller,i=new Set(t?[t,...t.querySelectorAll(".cp-pane__header, .cp-pane__body, .cp-pane__footer"),...this.children]:[]);for(let t of this._observedBoxes)i.has(t)||(e.unobserve(t),this._observedBoxes.delete(t));for(let t of i)this._observedBoxes.has(t)||(e.observe(t),this._observedBoxes.add(t))}get _scrollRegionLabel(){return this.label||this._hostLabel||ft("Scrollable region")}focus(e){this._scrollable&&this._scroller?this._scroller.focus(e):super.focus(e)}updated(e){super.updated(e),this._observeScrollable()}get _computedPadding(){let e=this.padding;return 0===e||"0"===e?"0":function(e){return!isNaN(parseFloat(String(e)))&&isFinite(Number(e))}(e)?`calc(${e}rem / 16)`:dl.includes(e)?`var(--c-spacing-${e})`:String(e)}render(){let e=!!this.label||this._hasSlottedHeader;return H`
      <div
        class="cp-pane"
        part="base"
        style="${sl({"--_pane-spacing":this._computedPadding})}"
        tabindex="${this._scrollable?"0":Y}"
        role="${this._scrollable?"region":Y}"
        aria-label="${this._scrollable?this._scrollRegionLabel:Y}"
      >
        ${e?H`<slot name="header">
              <div class="cp-pane__header" part="header">
                <slot name="title" part="title">
                  ${this.label?H`<h1 class="cp-pane__title">${this.label}</h1>`:Y}
                </slot>
                <div class="cp-pane__header-actions" part="header-actions">
                  <slot name="header-actions"></slot>
                </div>
              </div>
            </slot>`:Y}

        <slot name="body">
          <div class="cp-pane__body" part="body">
            <slot></slot>
          </div>
        </slot>

        ${this._hasSlottedFooter?H`<slot name="footer">
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
            </slot>`:Y}
      </div>
    `}};ul.styles=[fr,al],ge([_e({reflect:!0})],ul.prototype,"appearance",void 0),ge([_e({reflect:!0})],ul.prototype,"variant",void 0),ge([_e()],ul.prototype,"padding",void 0),ge([_e()],ul.prototype,"label",void 0),ge([ye()],ul.prototype,"_hasSlottedHeader",void 0),ge([ye()],ul.prototype,"_hasSlottedFooter",void 0),ge([ye()],ul.prototype,"_scrollable",void 0),ge([ye()],ul.prototype,"_hostLabel",void 0),customElements.get("craft-pane")||customElements.define("craft-pane",ul);let pl=0;var ml=new WeakMap,fl=new WeakSet,gl=class extends pe{constructor(...e){super(...e),Ae(this,fl),this.groups=[],this.modelValue=[],this.lockedPermissions=[],this.name="",this.disabled=!1,Ne(this,ml,++pl)}updated(e){super.updated(e),(e.has("modelValue")||e.has("groups")||e.has("name")||e.has("disabled"))&&Se(fl,this,Al).call(this)}render(){let e=Se(fl,this,_l).call(this);return wa(this.groups,e=>e.handle,(t,i)=>Se(fl,this,vl).call(this,t,i,e))}};function vl(e,t,i){let s=`permission-tree-heading-${Te(ml,this)}-${t}`;return H`
      <section class="group">
        ${e.heading?H`
              <div class="heading">
                <h3 id=${s}>${e.heading}</h3>
                <craft-button
                  type="button"
                  size="small"
                  variant="plain"
                  aria-describedby=${s}
                  ?disabled=${this.disabled}
                  @click=${()=>Se(fl,this,xl).call(this,e.keys,i)}
                >
                  ${Se(fl,this,wl).call(this,e.keys,i)?ft("Deselect all"):ft("Select all")}
                </craft-button>
              </div>
            `:Y}
        ${Se(fl,this,bl).call(this,e.permissions,0,this.disabled,i)}
      </section>
    `}function bl(e,t,i,s){return wa(Object.entries(e),([e])=>e,([e,n])=>{let o=n.key||e,r=Se(fl,this,kl).call(this,o,s),a=n.nested??{};return H`
          <ul>
            <li>
              <craft-checkbox
                class=${t>0?"indented":""}
                style=${`--permission-level: ${t}`}
                .label=${n.label}
                .choiceValue=${o}
                .checked=${r}
                .disabled=${i||Se(fl,this,yl).call(this,o,s)}
                @model-value-changed=${e=>Se(fl,this,El).call(this,e,o,a,s)}
              >
                ${n.info||n.warning?H`
                      <div slot="help-text">
                        ${n.info??Y}
                        ${n.warning?H`
                              <craft-callout
                                variant="warning"
                                appearance="plain"
                                inline
                              >
                                ${n.warning}
                              </craft-callout>
                            `:Y}
                      </div>
                    `:Y}
              </craft-checkbox>

              ${Object.keys(a).length?Se(fl,this,bl).call(this,a,t+1,i||!r,s):Y}
            </li>
          </ul>
        `})}function _l(){return new Set(this.lockedPermissions.map(e=>e.toLowerCase()))}function yl(e,t){return t.has(e.toLowerCase())}function kl(e,t){return this.modelValue.includes(e)||Se(fl,this,yl).call(this,e,t)}function wl(e,t){let i=e.filter(e=>!Se(fl,this,yl).call(this,e,t));return i.length>0&&i.every(e=>this.modelValue.includes(e))}function xl(e,t){let i=e.filter(e=>!Se(fl,this,yl).call(this,e,t));if(Se(fl,this,wl).call(this,e,t)){let e=new Set(i);return void Se(fl,this,Sl).call(this,this.modelValue.filter(t=>!e.has(t)))}Se(fl,this,Sl).call(this,[...new Set([...this.modelValue,...i])])}function El(e,t,i,s){if(e.stopPropagation(),this.disabled||Se(fl,this,yl).call(this,t,s))return;let n=e.currentTarget.checked,o=this.modelValue.indexOf(t);if(n&&-1===o)return void Se(fl,this,Sl).call(this,[...this.modelValue,t]);if(n||-1===o)return;let r=new Set([t,...Se(fl,this,Cl).call(this,i)]);Se(fl,this,Sl).call(this,this.modelValue.filter(e=>!r.has(e)))}function Cl(e){return Object.values(e).flatMap(e=>[e.key,...Se(fl,this,Cl).call(this,e.nested??{})])}function Sl(e){this.modelValue=e,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,composed:!0,detail:{isTriggeredByUser:!0}}))}function Al(){if(this.querySelectorAll("[data-permission-tree-input]").forEach(e=>e.remove()),!this.name||this.disabled)return;Se(fl,this,Nl).call(this,this.name,"");let e=new Set(this.groups.flatMap(e=>e.keys));for(let t of this.modelValue)e.has(t)&&Se(fl,this,Nl).call(this,`${this.name}[]`,t)}function Nl(e,t){let i=document.createElement("input");i.type="hidden",i.name=e,i.value=t,i.dataset.permissionTreeInput="",this.append(i)}gl.styles=r`
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
  `,ge([_e({type:Array})],gl.prototype,"groups",void 0),ge([_e({type:Array,attribute:"model-value"})],gl.prototype,"modelValue",void 0),ge([_e({type:Array,attribute:"locked-permissions"})],gl.prototype,"lockedPermissions",void 0),ge([_e()],gl.prototype,"name",void 0),ge([_e({type:Boolean,reflect:!0})],gl.prototype,"disabled",void 0),customElements.get("craft-permission-tree")||customElements.define("craft-permission-tree",gl);var Tl=r`
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
    width: 100%;
    background: repeating-linear-gradient(
      -45deg,
      var(--_fill-color),
      var(--_fill-color) 10px,
      var(--_track-color) 10px,
      var(--_track-color) 20px
    );
    background-size: 300% 100%;
    background-position: 0 0;
    animation: progress-bar-pending 1s linear infinite;
  }

  @keyframes progress-bar-pending {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 28.28px 0; /* sqrt(2) * 20px for 45deg stripes */
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
    fon
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
`,Ol=new WeakMap,Ll=class extends pe{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label="Progress",Ne(this,Ol,0)}updated(e){if((e.has("total")||e.has("processed"))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&Te(Ol,this)<100&&this.dispatchEvent(new CustomEvent("complete",{bubbles:!0,composed:!0})),this.progress=e}e.has("progress")&&(this.progress>0&&this.pending&&(this.pending=!1),Oe(Ol,this,this.progress))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,Oe(Ol,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?"100%":`${this.progressPercent}%`};return H`
      <div
        class=${Ge({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?Y:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${Ge({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${sl(e)}
        ></div>
      </div>
      ${this.showStatus?H`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:Y}
      <span class="visually-hidden">
        ${this.pending?"Loading":`${this.progressPercent}%`}
      </span>
    `}};Ll.styles=[Tl],ge([_e({type:Number})],Ll.prototype,"progress",void 0),ge([_e({type:Number})],Ll.prototype,"total",void 0),ge([_e({type:Number})],Ll.prototype,"processed",void 0),ge([_e({type:Boolean,attribute:"show-status"})],Ll.prototype,"showStatus",void 0),ge([_e({type:Boolean,reflect:!0})],Ll.prototype,"pending",void 0),ge([_e({type:Boolean})],Ll.prototype,"smooth",void 0),ge([_e({type:String})],Ll.prototype,"label",void 0),customElements.get("craft-progress-bar")||customElements.define("craft-progress-bar",Ll);var Ml=new WeakMap,$l=new WeakMap,Il=new WeakMap,Fl=new WeakMap,Pl=new WeakMap,Dl=new WeakMap,Vl=new WeakMap,Rl=new WeakMap,Bl=new WeakMap,zl=new WeakMap,jl=new WeakMap,Ul=new WeakSet,ql=class extends pe{constructor(...e){super(...e),Ae(this,Ul),this.progress=0,this.failed=!1,this.color="currentColor",this.bgColor="#a3afbb",this.failColor="#da5a47",this.label="Progress",this.autoComplete=!1,Ne(this,Ml,null),Ne(this,$l,0),Ne(this,Il,0),Ne(this,Fl,0),Ne(this,Pl,0),Ne(this,Dl,0),Ne(this,Vl,null),Ne(this,Rl,0),Ne(this,Bl,null),Ne(this,zl,0),Ne(this,jl,!1)}connectedCallback(){super.connectedCallback(),Oe(jl,this,window.matchMedia("(prefers-reduced-motion: reduce)").matches)}disconnectedCallback(){super.disconnectedCallback(),Se(Ul,this,Jl).call(this)}firstUpdated(){Oe(Ml,this,this.renderRoot.querySelector("canvas")),Se(Ul,this,Hl).call(this),Se(Ul,this,Wl).call(this)}updated(e){e.has("progress")?Se(Ul,this,Wl).call(this):(e.has("color")||e.has("bgColor")||e.has("failColor")||e.has("failed"))&&Se(Ul,this,Kl).call(this)}get canvas(){return Te(Ml,this)}get prefersReducedMotion(){return Te(jl,this)}runCompleteAnimation(){return new Promise(e=>{if(Te(jl,this))return Oe(Dl,this,1),Te(Ml,this)&&(Te(Ml,this).style.opacity="0"),Se(Ul,this,Kl).call(this),void e();Se(Ul,this,Zl).call(this,1,()=>{Te(Ml,this)&&(Te(Ml,this).style.transition="opacity 0.4s",Te(Ml,this).style.opacity="0"),setTimeout(e,400)})})}async complete(){await this.runCompleteAnimation(),this.dispatchEvent(new CustomEvent("complete",{bubbles:!0,composed:!0}))}render(){return H`
      <canvas
        part="canvas"
        role="progressbar"
        aria-valuenow=${(this.progress>=0?this.progress:void 0)??""}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      ></canvas>
      <span class="visually-hidden">
        ${this.failed?"Failed":this.progress<0?"Loading":`${this.progress}%`}
      </span>
    `}};function Hl(){let e=getComputedStyle(this),t=parseFloat(e.getPropertyValue("--_size")),i=parseFloat(e.getPropertyValue("--_stroke-width")),s=window.devicePixelRatio>1?2:1;Oe($l,this,t*s),Oe(Il,this,Te($l,this)/2),Oe(Pl,this,i*s),Oe(Fl,this,(t/2-i/2)*s),Te(Ml,this)&&(Te(Ml,this).width=Te($l,this),Te(Ml,this).height=Te($l,this))}function Wl(){if(this.progress>=0&&null!==Te(Bl,this)&&(cancelAnimationFrame(Te(Bl,this)),Oe(Bl,this,null),Oe(Rl,this,0)),this.progress<0)return void(null===Te(Bl,this)&&Se(Ul,this,Gl).call(this));let e=this.progress/100;if(this.autoComplete&&this.progress>=100&&Te(zl,this)<100)return Oe(zl,this,this.progress),void this.complete();Te(zl,this)>0&&this.progress>Te(zl,this)&&!Te(jl,this)?Se(Ul,this,Zl).call(this,e):(Oe(Dl,this,e),Se(Ul,this,Kl).call(this)),Oe(zl,this,this.progress)}function Gl(){if(Te(jl,this))return Oe(Dl,this,.25),void Se(Ul,this,Kl).call(this);let e=()=>{Oe(Rl,this,Te(Rl,this)+.05),Oe(Dl,this,.15+.1*Math.sin(3*Te(Rl,this))),Se(Ul,this,Kl).call(this),Oe(Bl,this,requestAnimationFrame(e))};Oe(Bl,this,requestAnimationFrame(e))}function Kl(){let e=Te(Ml,this)?.getContext("2d");if(e){if(e.clearRect(0,0,Te($l,this),Te($l,this)),this.failed)return void Se(Ul,this,Yl).call(this,e,this.failColor,1,0);if(Se(Ul,this,Yl).call(this,e,this.bgColor,1,0),Te(Dl,this)>0){let t=this.progress<0?Te(Rl,this):-Math.PI/2;Se(Ul,this,Yl).call(this,e,this.color,Te(Dl,this),t)}}}function Yl(e,t,i,s){e.strokeStyle=t,e.lineWidth=Te(Pl,this),e.lineCap="round",e.beginPath(),e.arc(Te(Il,this),Te(Il,this),Te(Fl,this),s,s+2*i*Math.PI),e.stroke()}function Zl(e,t){Se(Ul,this,Jl).call(this);let i=performance.now(),s=Te(Dl,this),n=o=>{let r=o-i,a=Math.min(r/500,1);Oe(Dl,this,s+(e-s)*(1-(1-a)**3)),Se(Ul,this,Kl).call(this),a<1?Oe(Vl,this,requestAnimationFrame(n)):(Oe(Vl,this,null),t?.())};Oe(Vl,this,requestAnimationFrame(n))}function Jl(){null!==Te(Vl,this)&&(cancelAnimationFrame(Te(Vl,this)),Oe(Vl,this,null)),null!==Te(Bl,this)&&(cancelAnimationFrame(Te(Bl,this)),Oe(Bl,this,null))}ql.styles=r`
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
      top: 0;
      left: 0;
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
  `,ge([_e({type:Number})],ql.prototype,"progress",void 0),ge([_e({type:Boolean})],ql.prototype,"failed",void 0),ge([_e({type:String})],ql.prototype,"color",void 0),ge([_e({type:String,attribute:"bg-color"})],ql.prototype,"bgColor",void 0),ge([_e({type:String,attribute:"fail-color"})],ql.prototype,"failColor",void 0),ge([_e({type:String})],ql.prototype,"label",void 0),ge([_e({type:Boolean,attribute:"auto-complete"})],ql.prototype,"autoComplete",void 0),customElements.get("craft-progress")||customElements.define("craft-progress",ql);class Ql extends(Kn(Jn(pe))){connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup")}resetGroup(){let e;this.formElements.forEach(t=>{"function"==typeof t.resetGroup?t.resetGroup():"function"==typeof t.reset&&(t.reset(),t.checked&&(e=t.choiceValue))}),this.modelValue=e,this.resetInteractionState()}}customElements.get("craft-radio-group")||customElements.define("craft-radio-group",class extends Ql{constructor(...e){super(...e),this.__ssrNameAdopted=!1}connectedCallback(){this.__adoptSlottedName(),super.connectedCallback()}willUpdate(e){this.__adoptSlottedName(),super.willUpdate(e)}__adoptSlottedName(){if(this.__ssrNameAdopted||this.name)return;let e=this.querySelector('input[type="radio"][name]');e&&(this.__ssrNameAdopted=!0,this.name=e.name)}static get styles(){return[...super.styles,Ms,r`
        .input-group {
          display: grid;
          gap: var(--c-spacing-xs);
        }
      `]}});class Xl extends(ao(oo)){connectedCallback(){super.connectedCallback(),this.type="radio"}}var ec=class extends(ho(Xl)){static get styles(){return[...super.styles,r`
        /* same as checkbox, potentially consolidate */
        :host {
          gap: var(--c-spacing-sm);
        }
      `]}};customElements.get("craft-radio")||customElements.define("craft-radio",ec);var tc=r`
  craft-button {
    cursor: move;
  }

  :host([disabled]) {
    cursor: default;
    opacity: 0.25;
    pointer-events: none;
  }
`,ic=class extends pe{constructor(...e){super(...e),this.label=null,this.position="middle",this.orientation="vertical",this.variant="plain",this.disabled=!1}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}_reorder(e){this.disabled||"up"===e&&"first"===this.position||"down"===e&&"last"===this.position||this.dispatchEvent(new CustomEvent("reorder",{detail:{direction:e},bubbles:!0,composed:!0}))}_isRtl(){return"rtl"===(this.closest("[dir]")?.getAttribute("dir")??document.documentElement.getAttribute("dir"))?.toLowerCase()}render(){let e=this.label??ft("Reorder"),t="horizontal"===this.orientation,i=t&&this._isRtl(),s=t?i?"arrow-right":"arrow-left":"arrow-up",n=t?i?"arrow-left":"arrow-right":"arrow-down",o=ft(t?"Move forward":"Move up"),r=ft(t?"Move backward":"Move down");return H`
      <craft-action-menu ?disabled="${this.disabled}">
        <craft-button
          slot="invoker"
          type="button"
          icon
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
            icon="${s}"
            ?disabled="${"first"===this.position}"
            @click="${()=>this._reorder("up")}"
            data-action="moveUp"
            command="--move-up"
            >${o}</craft-action-item
          >
          <craft-action-item
            icon="${n}"
            ?disabled="${"last"===this.position}"
            @click="${()=>this._reorder("down")}"
            data-action="moveDown"
            command="--move-down"
            >${r}</craft-action-item
          >
        </div>
      </craft-action-menu>
    `}};ic.styles=[tc],ge([_e()],ic.prototype,"label",void 0),ge([_e({reflect:!0})],ic.prototype,"position",void 0),ge([_e({reflect:!0})],ic.prototype,"orientation",void 0),ge([_e({reflect:!0})],ic.prototype,"variant",void 0),ge([_e({reflect:!0,type:Boolean})],ic.prototype,"disabled",void 0),customElements.get("craft-reorder-button")||customElements.define("craft-reorder-button",ic);class sc extends(zs(Ri)){static get styles(){return[...super.styles,r`
        :host {
          justify-content: space-between;
          align-items: center;
        }

        #content-wrapper {
          position: relative;
          pointer-events: none;
        }
      `]}static get properties(){return{selectedElement:{type:Object},hostElement:{type:Object},readOnly:{type:Boolean,reflect:!0,attribute:"readonly"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}get slots(){return{...super.slots,after:()=>{const e=document.createElement("span");return e.textContent="▼",e.setAttribute("role","img"),e.setAttribute("aria-hidden","true"),e}}}get _contentWrapperNode(){return this.shadowRoot.getElementById("content-wrapper")}constructor(){super(),this.readOnly=!1,this.selectedElement=null,this.hostElement=null,this.singleOption=!1,this.type="button"}__handleKeydown(e){switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault()}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.__handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.__handleKeydown)}_contentTemplate(){if(this.selectedElement){const e=Array.from(this.selectedElement.childNodes);return e.length>0?e.map(e=>e.cloneNode(!0)):this.selectedElement.textContent}return this._noSelectionTemplate()}render(){return H` ${this._beforeTemplate()} ${super.render()} ${this._afterTemplate()} `}_noSelectionTemplate(){return H``}_beforeTemplate(){return H` <div id="content-wrapper">${this._contentTemplate()}</div> `}_afterTemplate(){return H`${this.singleOption?"":H`<slot name="after"></slot>`}`}}var nc=r`
  :host {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-sm);
    width: 100%;
    cursor: pointer;
    padding-block: 0;
    padding-inline: var(--c-input-spacing-inline);
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
    font: inherit;
    overflow: clip;
  }

  :host([disabled]) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  #content-wrapper {
    position: relative;
    pointer-events: none;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .indicator {
    flex: 0 0 auto;
    font-size: 0.8em;
  }
`,oc=class extends sc{static get styles(){return[...super.styles,nc]}_afterTemplate(){return H`${this.singleOption?"":H`<craft-icon class="indicator" name="chevron-down"></craft-icon>`}`}};class rc extends(zs(Nn(zt(zo)))){static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":sc}}static get properties(){return{navigateWithinInvoker:{type:Boolean,attribute:"navigate-within-invoker"},interactionMode:{type:String,attribute:"interaction-mode"},singleOption:{type:Boolean,reflect:!0,attribute:"single-option"}}}_inputGroupInputTemplate(){return H`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,invoker:()=>H`<lion-select-invoker></lion-select-invoker>`}}get _invokerNode(){return Array.from(this.children).find(e=>"invoker"===e.slot)}get _focusableNode(){return this._invokerNode}get _scrollTargetNode(){return this._overlayContentNode._scrollTargetNode||this._overlayContentNode}constructor(){super(),this.navigateWithinInvoker=!1,this.interactionMode="auto",this.singleOption=!1,this._arrowWidth=28,this.__onKeyUp=this.__onKeyUp.bind(this),this.__invokerOnBlur=this.__invokerOnBlur.bind(this),this.__overlayOnHide=this.__overlayOnHide.bind(this),this.__overlayOnShow=this.__overlayOnShow.bind(this),this.__invokerOnClick=this.__invokerOnClick.bind(this),this.__overlayBeforeShow=this.__overlayBeforeShow.bind(this),this._listboxOnClick=this._listboxOnClick.bind(this)}connectedCallback(){super.connectedCallback(),this.registrationComplete.then(()=>{this._invokerNode.selectedElement=this.formElements[this.checkedIndex]}),this._invokerNode.hostElement=this,this.__setupInvokerNode(),this.__toggleInvokerDisabled(),this.addEventListener("keyup",this.__onKeyUp)}disconnectedCallback(){super.disconnectedCallback(),this.__teardownInvokerNode(),this.removeEventListener("keyup",this.__onKeyUp)}requestUpdate(e,t,i){super.requestUpdate(e,t,i),"interactionMode"===e&&("auto"===this.interactionMode?this.interactionMode=Et.isMac?"mac":"windows/linux":(this.selectionFollowsFocus=Boolean("windows/linux"===this.interactionMode),this.navigateWithinInvoker=Boolean("windows/linux"===this.interactionMode))),"disabled"!==e&&"readOnly"!==e||this.__toggleInvokerDisabled()}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this._invokerNode.makeRequestToBeDisabled():this._invokerNode.retractRequestToBeDisabled()),e.has("singleOption")&&(this.singleOption?(this._invokerNode.removeAttribute("role"),this._invokerNode.removeAttribute("aria-haspopup"),this._invokerNode.removeAttribute("aria-expanded")):(this._invokerNode.setAttribute("role","button"),this._invokerNode.setAttribute("aria-haspopup","listbox"),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`))),this._inputNode&&this._invokerNode&&(e.has("_ariaLabelledNodes")&&this._invokerNode.setAttribute("aria-labelledby",`${this._inputNode.getAttribute("aria-labelledby")} ${this._invokerNode.id}`),e.has("_ariaDescribedNodes")&&this._invokerNode.setAttribute("aria-describedby",this._inputNode.getAttribute("aria-describedby")),e.has("showsFeedbackFor")&&this._invokerNode.setAttribute("aria-invalid",`${this._hasFeedbackVisibleFor("error")}`)),e.has("modelValue")&&this.__syncInvokerElement()}addFormElement(e,t){super.addFormElement(e,t),this.hasNoDefaultSelected||this.__hasInitialSelectedFormElement||e.disabled&&!this.disabled||(e.active=!0,e.checked=!0,this.__hasInitialSelectedFormElement=!0),this._alignInvokerWidth(),this._onFormElementsChanged()}removeFormElement(e){super.removeFormElement(e),this._alignInvokerWidth(),this._onFormElementsChanged()}_getCheckedElements(){return this.formElements.filter(e=>e.checked)}_onFormElementsChanged(){this.singleOption=1===this.formElements.length&&!this.hasNoDefaultSelected,this._invokerNode.singleOption=this.singleOption}__initInteractionStates(){this.initInteractionState()}__toggleInvokerDisabled(){this._invokerNode&&(this._invokerNode.disabled=this.disabled,this._invokerNode.readOnly=this.readOnly)}__syncInvokerElement(){this._invokerNode&&(this._invokerNode.selectedElement=this.formElements[this.checkedIndex],this._invokerNode.requestUpdate("selectedElement"))}__setupInvokerNode(){this._invokerNode.id=`invoker-${this._inputId}`,this._invokerNode.setAttribute("aria-haspopup","listbox"),this.__setupInvokerNodeEventListener()}__invokerOnClick(){this.disabled||this.readOnly||this.singleOption||this.__blockListShow||this._overlayCtrl.toggle()}__invokerOnBlur(){this.dispatchEvent(new Event("blur"))}__setupInvokerNodeEventListener(){this._invokerNode.addEventListener("click",this.__invokerOnClick),this._invokerNode.addEventListener("blur",this.__invokerOnBlur)}__teardownInvokerNode(){this._invokerNode.removeEventListener("click",this.__invokerOnClick),this._invokerNode.removeEventListener("blur",this.__invokerOnBlur)}_defineOverlayConfig(){return{placementMode:"local",inheritsReferenceWidth:"min",hidesOnOutsideClick:!0,hidesOnEsc:!0,popperConfig:{placement:"bottom-start",modifiers:[{name:"offset",enabled:!1}]},handlesAccessibility:!0,visibilityTriggerFunction:({controller:e})=>{function t(){e._hasDisabledInvoker()||e.toggle()}return{init:()=>{e.invokerNode?.addEventListener("click",t)},teardown:()=>{e.invokerNode?.removeEventListener("click",t)}}},visibilityTriggerFunction:void 0}}_noDefaultSelectedInheritsWidth(){-1===this.checkedIndex?this._overlayCtrl.updateConfig({inheritsReferenceWidth:"min"}):this._overlayCtrl.updateConfig({inheritsReferenceWidth:this._initialInheritsReferenceWidth})}__overlayBeforeShow(){this.hasNoDefaultSelected&&this._noDefaultSelectedInheritsWidth(),this._listboxNode.setAttribute("autofocus","")}__overlayOnShow(){null!=this.checkedIndex&&(this.activeIndex=this.checkedIndex),this._listboxNode.focus()}__overlayOnHide(){this._invokerNode.focus(),this._listboxNode.removeAttribute("autofocus")}_setupOverlayCtrl(){super._setupOverlayCtrl(),this._initialInheritsReferenceWidth=this._overlayCtrl.inheritsReferenceWidth,this._alignInvokerWidth(),this._overlayCtrl.addEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.addEventListener("show",this.__overlayOnShow),this._overlayCtrl.addEventListener("hide",this.__overlayOnHide)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.removeEventListener("show",this.__overlayOnShow),this._overlayCtrl.removeEventListener("before-show",this.__overlayBeforeShow),this._overlayCtrl.removeEventListener("hide",this.__overlayOnHide)}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;const e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,i=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display="",this._overlayCtrl.contentWrapperNode.style.minWidth="auto",this._overlayCtrl.contentWrapperNode.style.width="auto";const s=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;s>0&&(this._invokerNode.style.width=`${s+this._arrowWidth}px`),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=i}_onLabelClick(){this._invokerNode.focus()}get _overlayInvokerNode(){return this._invokerNode}get _overlayContentNode(){return this._listboxNode}__onKeyUp(e){if(this.disabled||this.readOnly||this.singleOption)return;if(this.opened)return;this._isHandlingUserInput=!0,setTimeout(()=>{this._isHandlingUserInput=!1});const{key:t}=e;switch(t){case"ArrowUp":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowDown":e.preventDefault(),this.navigateWithinInvoker?this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex)):this.opened=!0;break;case"ArrowLeft":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getPreviousEnabledOption(this.checkedIndex));break;case"ArrowRight":e.preventDefault(),this.navigateWithinInvoker&&this.setCheckedIndex(this._getNextEnabledOption(this.checkedIndex));break;default:this._noTypeAhead||this._handleTypeAhead(e,{setAsChecked:!0})}}_listboxOnKeyDown(e){if(super._listboxOnKeyDown(e),this.disabled)return;const{key:t}=e;switch(t){case"Tab":if(!0===this._overlayCtrl.config.trapsKeyboardFocus)return;this.opened=!1;break;case"Escape":case"Enter":case" ":this.opened=!1,this.__blockListShowDuringTransition()}}_listboxOnClick(){this.opened=!1}_setupListboxNode(){super._setupListboxNode(),this._listboxNode.addEventListener("click",this._listboxOnClick)}_teardownListboxNode(){super._teardownListboxNode(),this._listboxNode&&this._listboxNode.removeEventListener("click",this._listboxOnClick)}__blockListShowDuringTransition(){this.__blockListShow=!0,setTimeout(()=>{this.__blockListShow=!1},200)}}var ac=r`
  ${Ls}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: calc(var(--c-size-control-sm) - 2px);
  }

  .input-group__input {
    ${Os}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
    background-color: transparent;
  }

  #overlay-content-node-wrapper {
    position: absolute;
    width: 100%;
  }

  ::slotted([slot='input']) {
    display: grid;
    gap: var(--c-spacing-xs);
    border: 1px solid var(--c-color-neutral-border-quiet);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-sm);
    padding: var(--c-spacing-sm);
    max-height: calc(var(--c-spacing) * 60);
    overflow: auto;
  }
`,lc=class extends rc{constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,ac]}static get scopedElements(){return{...super.scopedElements,"lion-select-invoker":oc}}async _alignInvokerWidth(){if(await this.updateComplete,!this._overlayCtrl?.content)return;let e=this._overlayCtrl.content.style.display,t=this._overlayCtrl.contentWrapperNode.style.minWidth,i=this._overlayCtrl.contentWrapperNode.style.width;this._overlayCtrl.content.style.display="",this._overlayCtrl.contentWrapperNode.style.minWidth="auto",this._overlayCtrl.contentWrapperNode.style.width="auto";let s=this._overlayCtrl.contentWrapperNode.getBoundingClientRect().width;s>0&&(this._invokerNode.style.minWidth=`${s}px`,this._invokerNode.style.width=""),this._overlayCtrl.content.style.display=e,this._overlayCtrl.contentWrapperNode.style.minWidth=t,this._overlayCtrl.contentWrapperNode.style.width=i}_inputGroupInputTemplate(){return H`
      <div class="input-group__input">
        <slot name="invoker"></slot>
        <div id="overlay-content-node-wrapper">
          <slot name="input"></slot>
          <slot id="options-outlet"></slot>
        </div>
      </div>
    `}};ge([_e({reflect:!0,type:Boolean})],lc.prototype,"small",void 0),customElements.get("craft-select-rich")||customElements.define("craft-select-rich",lc);var cc=r`
  :host {
    display: block;
  }
`,dc=class extends pe{constructor(...e){super(...e),this.label="",this.name="",this.modelValue=null,this.allowTransparent=!1}_swatchTemplate(e){return H`<span
      class="select-color__swatch"
      style="${"__blank__"===e?"flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%);background:linear-gradient(45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(-45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%),linear-gradient(-45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;":`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%);background-color:var(--c-color-${e}-fill-loud);`}"
      aria-hidden="true"
    ></span>`}_optionTemplate(e,t){return H`<craft-option .choiceValue=${e}>
      <span
        class="select-color__option"
        style="display:flex;align-items:center;gap:var(--c-spacing-sm);"
      >
        ${this._swatchTemplate(e)}
        <span class="select-color__label" style="white-space:nowrap;"
          >${t}</span
        >
      </span>
    </craft-option>`}_handleModelValueChanged(e){e.stopPropagation();let t=e.target;this.modelValue=t?.modelValue??null,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,composed:!0}))}render(){return H`
      <craft-select-rich
        label=${this.label}
        name=${this.name}
        .modelValue=${this.modelValue}
        @model-value-changed=${this._handleModelValueChanged}
      >
        ${this.allowTransparent?this._optionTemplate("__blank__",ft("Transparent")):""}
        ${si.map(e=>this._optionTemplate(e,ft(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(e))))}
      </craft-select-rich>
    `}};dc.styles=[cc],ge([_e()],dc.prototype,"label",void 0),ge([_e()],dc.prototype,"name",void 0),ge([_e({attribute:"model-value"})],dc.prototype,"modelValue",void 0),ge([_e({type:Boolean,reflect:!0,attribute:"allow-transparent"})],dc.prototype,"allowTransparent",void 0),customElements.get("craft-select-color")||customElements.define("craft-select-color",dc);class hc extends no{static get properties(){return{autocomplete:{type:String}}}constructor(){super(),this.autocomplete=void 0}get _inputNode(){return Array.from(this.children).find(e=>"input"===e.slot)}}class uc extends hc{get operationMode(){return"select"}connectedCallback(){super.connectedCallback(),this._inputNode.addEventListener("change",this._proxyChangeEvent),this.__selectObserver=new MutationObserver(()=>{this._syncValueUpwards(),this._calculateValues({source:"model"})}),this.__selectObserver.observe(this._inputNode,{attributes:!0,childList:!0,subtree:!0})}updated(e){super.updated(e),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener("change",this._proxyChangeEvent),this.__selectObserver?.disconnect()}formatter(e){const t=Array.from(this._inputNode.options).find(t=>t.value===e);return t?t.text:""}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=void 0!==this.modelValue?this.modelValue:"")}_proxyChangeEvent(){this.dispatchEvent(new CustomEvent("user-input-changed",{bubbles:!0,composed:!0}))}}var pc=r`
  ${Ls}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: calc(var(--c-size-control-sm) - 2px);
  }

  ::slotted(.form-control) {
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    min-height: none;
    padding-inline: var(--c-input-spacing-inline)
      calc(var(--c-input-spacing-inline) * 1.5 + 1em);
    border-radius: var(--c-input-radius);
  }

  .input-group__input {
    ${Os}
    padding-inline: 0;
    position: relative;
    min-height: calc(var(--c-input-height, var(--c-size-control-md)) - 2px);
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,mc=class extends uc{constructor(...e){super(...e),this.small=!1}static get styles(){return[...super.styles,pc]}_inputGroupInputTemplate(){return H`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}};ge([_e({reflect:!0,type:Boolean})],mc.prototype,"small",void 0),customElements.get("craft-select")||customElements.define("craft-select",mc);var fc=r`
  :host {
    display: inline-block;
  }

  .slide-picker {
    --_segment-height: 1rem;
    --_segment-width: calc(8rem / 16);
    --_segment-border: var(--c-color-neutral-border-normal);
    --_segment-active-border: var(--c-color-neutral-border-loud);
    --_segment-fill: var(--c-color-neutral-fill-quiet);
    --_segment-active-fill: var(--c-color-neutral-fill-normal);
    display: inline-flex;
    align-items: stretch;
    min-height: max(var(--_segment-height), var(--touch-target-size));
    outline: none;
  }

  .slide-picker__segment {
    inline-size: var(--_segment-width);
    block-size: calc(var(--_segment-height) * 0.75);

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
    border-block-color: var(--_segment-active-border);
    block-size: var(--_segment-height);
  }

  .slide-picker__segment.is-last-active {
    border-inline-end-color: var(--_segment-active-border);
  }

  .slide-picker:focus-visible .slide-picker__segment.is-last-active {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
    position: relative;
    z-index: 1;
  }

  :host([read-only]) .slide-picker__segment {
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
`,gc=new WeakSet,vc=class extends pe{constructor(...e){super(...e),Ae(this,gc),this.min=0,this.max=100,this.step=10,this.value=0,this.label=ft("Number of columns"),this.valueUnit="",this.readOnly=!1}willUpdate(e){if(super.willUpdate(e),e.has("min")||e.has("max")||e.has("step")||e.has("value")){let e=Se(gc,this,_c).call(this,this.value);e!==this.value&&(this.value=e)}}render(){let e=Se(gc,this,bc).call(this);return H`
      <div
        class="slide-picker"
        role="slider"
        tabindex=${this.readOnly?-1:0}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${Se(gc,this,kc).call(this,this.value)}
        aria-readonly=${this.readOnly?"true":"false"}
        aria-describedby=${Ur(this.describedBy)}
        @keydown=${Se(gc,this,Ec)}
      >
        ${e.map(e=>H`
            <span
              class=${Ge({"slide-picker__segment":!0,"is-active":e<=this.value,"is-last-active":e===this.value})}
              role="presentation"
              aria-hidden="true"
              @click=${()=>Se(gc,this,xc).call(this,e)}
              title=${Se(gc,this,kc).call(this,e)}
              >${Y}</span
            >
          `)}
      </div>
    `}};function bc(){let{min:e,max:t,step:i}=this;if(i<=0||t<e)throw Error("Invalid craft-slide-picker range configuration.");let s=(t-e)/i;if(!Number.isInteger(s))throw Error("Invalid craft-slide-picker step configuration for the provided range.");return Array.from({length:s+1},(t,s)=>e+s*i)}function _c(e){Se(gc,this,bc).call(this);let{min:t,max:i,step:s}=this,n=t+Math.round((Math.min(Math.max(e,t),i)-t)/s)*s;return Math.min(Math.max(n,t),i)}function yc(){return"rtl"===(this.closest("[dir]")?.getAttribute("dir")??document.documentElement.getAttribute("dir"))?.toLowerCase()}function kc(e){return this.valueLabel?this.valueLabel(e):this.valueUnit?`${e}${this.valueUnit}`:`${e}`}function wc(e,t){let i=Se(gc,this,_c).call(this,e);i!==this.value&&(this.value=i,t&&this.dispatchEvent(new CustomEvent("value-change",{detail:{value:i},bubbles:!0,composed:!0})))}function xc(e){this.readOnly||Se(gc,this,wc).call(this,e,!0)}function Ec(e){if(this.readOnly)return;let t=Se(gc,this,yc).call(this);switch(e.key){case"ArrowUp":Se(gc,this,wc).call(this,this.value+this.step,!0),e.preventDefault();break;case"ArrowDown":Se(gc,this,wc).call(this,this.value-this.step,!0),e.preventDefault();break;case"ArrowRight":Se(gc,this,wc).call(this,this.value+(t?-this.step:this.step),!0),e.preventDefault();break;case"ArrowLeft":Se(gc,this,wc).call(this,this.value+(t?this.step:-this.step),!0),e.preventDefault();break;case"Home":Se(gc,this,wc).call(this,this.min,!0),e.preventDefault();break;case"End":Se(gc,this,wc).call(this,this.max,!0),e.preventDefault()}}vc.styles=[fc],ge([_e({type:Number})],vc.prototype,"min",void 0),ge([_e({type:Number})],vc.prototype,"max",void 0),ge([_e({type:Number})],vc.prototype,"step",void 0),ge([_e({type:Number})],vc.prototype,"value",void 0),ge([_e()],vc.prototype,"label",void 0),ge([_e({attribute:"described-by"})],vc.prototype,"describedBy",void 0),ge([_e({attribute:"value-unit"})],vc.prototype,"valueUnit",void 0),ge([_e({attribute:!1})],vc.prototype,"valueLabel",void 0),ge([_e({type:Boolean,reflect:!0,attribute:"read-only"})],vc.prototype,"readOnly",void 0),customElements.get("craft-slide-picker")||customElements.define("craft-slide-picker",vc);var Cc=r`
  :host {
    display: block;
  }

  .slide-rule {
    position: relative;
    padding-block: 10px;
    padding-inline: 0;
    outline: none;
  }

  .slide-rule:focus-visible .cursor::after {
    box-shadow: var(--focus-ring);
  }

  .cursor {
    position: absolute;
    margin-inline-start: calc(-4 / 16 * 1rem);
    margin-block-start: 4px;
    inset-inline-start: 50%;
    z-index: 1;
    width: 0;
    height: 0;
    border-inline-start: calc(5 / 16 * 1rem) solid transparent;
    border-inline-end: calc(5 / 16 * 1rem) solid transparent;
    border-block-start: calc(5 / 16 * 1rem) solid #63a6e1;
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

  .overlay {
    z-index: 2;
    position: absolute;
    inset-block: 0 1px;
    inset-inline: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to right,
      var(--gray-900) 0%,
      transparent 15%,
      transparent 85%,
      var(--gray-900) 100%
    );
  }

  .graduations {
    white-space: nowrap;
    height: 40px;
    position: relative;
  }

  .graduations ul {
    position: relative;
    float: inline-start;
    height: 40px;
    margin: 0;
    padding: 0;
    list-style: none;

    /* "left" (not a logical property) because that's what the JS sets. */
    transition: 200ms left linear; /* stylelint-disable-line */
  }

  .slide-rule.dragging .graduations ul {
    transition: none;
  }

  .graduations ul li {
    display: inline-block;
    font-size: 8px;
    position: relative;
    width: 10px;
  }

  .graduations ul li:hover {
    cursor: pointer;
  }

  .graduations ul li:hover::before {
    border-inline-start-color: #63a6e1;
  }

  .graduations ul li:not(.main-graduation) {
    inset-inline-start: 1px;
  }

  .graduations ul li.main-graduation::before {
    border-inline-start-width: 4px;
    height: 10px;
  }

  .graduations ul li .label {
    width: 20px;
    position: absolute;
    inset-block-start: 10px;
    inset-inline-start: -9px;
    display: none;
    text-align: center;
  }

  .graduations ul li.main-graduation .label {
    display: block;
    cursor: default;
  }

  .graduations ul li.selected::before {
    border-inline-start-color: #63a6e1;
  }

  .graduations ul li::before {
    content: '';
    position: absolute;
    border-inline-start: 2px solid var(--white);
    height: 6px;
    inset-block-start: 0;
    inset-inline-start: 0;
  }
`,Sc=new WeakMap,Ac=new WeakMap,Nc=new WeakMap,Tc=new WeakMap,Oc=new WeakMap,Lc=new WeakMap,Mc=new WeakSet,$c=class extends pe{constructor(...e){super(...e),Ae(this,Mc),this.min=-45,this.max=45,this.value=0,this.graduationMin=-70,this.graduationMax=70,this.label=ft("Rotate"),Ne(this,Sc,!1),Ne(this,Ac,!1),Ne(this,Nc,0),Ne(this,Tc,0),Ne(this,Oc,0),Ne(this,Lc,null)}connectedCallback(){super.connectedCallback(),Oe(Lc,this,new ResizeObserver(()=>Se(Mc,this,Fc).call(this))),Te(Lc,this).observe(this)}disconnectedCallback(){super.disconnectedCallback(),Te(Lc,this)?.disconnect(),Oe(Lc,this,null)}firstUpdated(){Oe(Oc,this,10*(Se(Mc,this,Ic).call(this).length-1)),Se(Mc,this,Fc).call(this)}updated(e){(e.has("value")||e.has("min")||e.has("max")||e.has("graduationMin")||e.has("graduationMax"))&&Se(Mc,this,Fc).call(this)}render(){return H`
      <div
        class="slide-rule"
        role="slider"
        tabindex="0"
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${Se(Mc,this,Pc).call(this,this.value)}
        @keydown=${Se(Mc,this,Hc)}
        @pointerdown=${Se(Mc,this,zc)}
        @pointermove=${Se(Mc,this,jc)}
        @pointerup=${Se(Mc,this,Uc)}
      >
        <div class="overlay"></div>
        <div class="cursor"></div>
        <div class="graduations">
          <ul aria-hidden="true">
            ${Se(Mc,this,Ic).call(this).map(e=>H`
                <li
                  class=${Ge({graduation:!0,"main-graduation":e%5==0,selected:Se(Mc,this,Wc).call(this,e)})}
                  data-graduation=${e}
                >
                  <div class="label">${e}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}};function Ic(){let e=[];for(let t=this.graduationMin;t<=this.graduationMax;t++)e.push(t);return e}function Fc(){this._list&&(this._list.style.left=`${Se(Mc,this,Vc).call(this,this.value)}px`)}function Pc(e){return ft("{num, number} {num, plural, =1{degree} other{degrees}}",{num:Math.round(e)})}function Dc(e){let t=-1*this.graduationMin,i=-1*(this.graduationMin-this.graduationMax);return(this._graduations.offsetWidth/2+-1*e)/Te(Oc,this)*i-t}function Vc(e){let t=-1*this.graduationMin,i=-1*(this.graduationMin-this.graduationMax);return-((e+t)*Te(Oc,this)/i-this._graduations.offsetWidth/2)}function Rc(e,t=!0){let i=Math.min(Math.max(e,this.min),this.max);this.value=i,t&&Se(Mc,this,Bc).call(this,"change")}function Bc(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}function zc(e){Oe(Ac,this,this._graduations.contains(e.target)&&e.target!==this._graduations),Te(Ac,this)&&(e.preventDefault(),Oe(Nc,this,e.clientX),Oe(Tc,this,this._list.offsetLeft),this._root.setPointerCapture(e.pointerId),Se(Mc,this,Bc).call(this,"start"))}function jc(e){Te(Ac,this)&&Math.abs(e.clientX-Te(Nc,this))>3&&(Oe(Sc,this,!0),this._root.classList.add("dragging"),e.preventDefault(),Se(Mc,this,qc).call(this,e))}function Uc(e){Te(Ac,this)&&(Te(Sc,this)?(e.preventDefault(),Oe(Sc,this,!1),this._root.classList.remove("dragging")):Se(Mc,this,qc).call(this,e),Se(Mc,this,Bc).call(this,"end"),this._root.releasePointerCapture(e.pointerId),Oe(Nc,this,0),Oe(Ac,this,!1))}function qc(e){let t=Te(Sc,this)?Te(Nc,this):this._cursor.getBoundingClientRect().left+this._cursor.offsetWidth/2,i=Te(Sc,this)?t-e.clientX:e.clientX-t,s=Te(Tc,this)-i;Se(Mc,this,Rc).call(this,Se(Mc,this,Dc).call(this,s))}function Hc(e){let t=this.value;switch(e.key){case"ArrowUp":case"ArrowRight":Se(Mc,this,Rc).call(this,t+1);break;case"ArrowDown":case"ArrowLeft":Se(Mc,this,Rc).call(this,t-1);break;case"PageUp":Se(Mc,this,Rc).call(this,t+10);break;case"PageDown":Se(Mc,this,Rc).call(this,t-10);break;case"Home":Se(Mc,this,Rc).call(this,this.min);break;case"End":Se(Mc,this,Rc).call(this,this.max);break;default:return}e.preventDefault()}function Wc(e){return e>=Math.min(0,this.value)&&e<=Math.max(0,this.value)}$c.styles=[Cc],ge([_e({type:Number})],$c.prototype,"min",void 0),ge([_e({type:Number})],$c.prototype,"max",void 0),ge([_e({type:Number})],$c.prototype,"value",void 0),ge([_e({type:Number,attribute:"graduation-min"})],$c.prototype,"graduationMin",void 0),ge([_e({type:Number,attribute:"graduation-max"})],$c.prototype,"graduationMax",void 0),ge([_e()],$c.prototype,"label",void 0),ge([we(".slide-rule")],$c.prototype,"_root",void 0),ge([we(".graduations")],$c.prototype,"_graduations",void 0),ge([we(".graduations ul")],$c.prototype,"_list",void 0),ge([we(".cursor")],$c.prototype,"_cursor",void 0),customElements.get("craft-slide-rule")||customElements.define("craft-slide-rule",$c);var Gc=r`
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
`,Kc=class extends pe{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?`Status: ${this.status}`:this.label}render(){return H`
      <span
        class="${Ge({status:!0,"status--live":"live"===this.status,"status--enabled":"enabled"===this.status,"status--pending":"pending"===this.status,"status--expired":"expired"===this.status,"status--disabled":"disabled"===this.status})}"
        role="img"
        aria-label="${this.getLabel()}"
      ></span>
    `}};Kc.styles=[Gc],ge([_e()],Kc.prototype,"label",void 0),ge([_e()],Kc.prototype,"status",void 0),customElements.get("craft-status")||customElements.define("craft-status",Kc);class Yc extends(Pi(pe)){static get properties(){return{checked:{type:Boolean,reflect:!0}}}static get styles(){return[r`
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
      `]}render(){return H`
      <div class="btn">
        <div class="switch-button__track"></div>
        <div class="switch-button__thumb"></div>
      </div>
    `}constructor(){super(),this.value="",this.checked=!1,this.__initialized=!1,this._toggleChecked=this._toggleChecked.bind(this),this.__handleKeydown=this._handleKeydown.bind(this),this.__handleKeyup=this._handleKeyup.bind(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-checked",`${this.checked}`),this.addEventListener("click",this._toggleChecked),this.addEventListener("keydown",this.__handleKeydown),this.addEventListener("keyup",this.__handleKeyup)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._toggleChecked),this.removeEventListener("keydown",this.__handleKeydown),this.removeEventListener("keyup",this.__handleKeyup)}_toggleChecked(){this.disabled||(this.focus(),this.checked=!this.checked)}__checkedStateChange(){this.dispatchEvent(new Event("checked-changed",{bubbles:!0})),this.setAttribute("aria-checked",`${this.checked}`)}_handleKeydown(e){" "===e.key&&e.preventDefault()}_handleKeyup(e){[" ","Enter"].includes(e.key)&&this._toggleChecked()}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",`${this.disabled}`)}requestUpdate(e,t,i){super.requestUpdate(e,t,i),this.__initialized&&this.isConnected&&"checked"===e&&this.checked!==t&&!this.disabled&&this.__checkedStateChange()}firstUpdated(e){super.firstUpdated(e),this.__initialized=!0}}var Zc=class extends Yc{constructor(...e){super(...e),this.indeterminate=!1}updated(e){super.updated(e),(e.has("indeterminate")||e.has("checked"))&&this.setAttribute("aria-checked",this.checked?"true":this.indeterminate?"mixed":"false")}static get styles(){return[...super.styles,r`
        :host {
          --c-switch-height: var(--c-size-control-sm);
          --c-switch-thumb-offset: 6px;
          --c-switch-thumb-height: calc(
            var(--c-switch-height) - var(--c-switch-thumb-offset)
          );
          display: flex;
          height: var(--c-switch-height);
          width: calc(var(--c-switch-height) * 2);
          margin: -1px;
        }

        :host([size='small']) {
          --c-switch-height: var(--c-size-control-xs);
          --c-switch-thumb-offset: 4px;
        }

        .btn {
          width: 100%;
        }

        .switch-button__track {
          --tw-inset-shadow-color: var(--color-slate-300);
          margin-inline: -1px;
          background-color: var(--c-color-neutral-fill-quiet);
          border-radius: var(--c-radius-full);
          border: 1px solid var(--c-form-control-border-color);
          box-shadow: var(--c-input-shadow);
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
        }

        :host([indeterminate]:not([checked])) .switch-button__thumb {
          inset-inline-start: calc(50% - (var(--c-switch-thumb-height) / 2));
          inset-inline-end: auto;
        }

        :host([checked]) .switch-button__track {
          background-color: var(--c-color-static-success-fill);
        }

        :host([checked]) .switch-button__thumb {
          border: 1px solid var(--c-color-success-border-loud);
          inset-inline-start: auto;
          inset-inline-end: calc(
            (var(--c-switch-height) - var(--c-switch-thumb-height)) / 2
          );
        }

        :host([checked]) .switch-button__thumb:after {
          content: '';
          position: absolute;
          inset-block-start: 3px;
          inset-inline-start: 4px;
          mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--%3E%3Cpath d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z'/%3E%3C/svg%3E");
          mask-repeat: no-repeat;
          width: calc(var(--c-switch-thumb-height) - 6px);
          aspect-ratio: 1;
          background-color: var(--c-color-success-on-normal);
        }
      `]}};ge([_e({type:Boolean,reflect:!0})],Zc.prototype,"indeterminate",void 0),customElements.get("craft-switch-button")||customElements.define("craft-switch-button",Zc);class Jc extends(Nn(ao(no))){static get styles(){return[...super.styles,r`
        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          color: #adadad;
        }
      `]}static get scopedElements(){return{...super.scopedElements,"lion-switch-button":Yc}}get _inputNode(){return Array.from(this.children).find(e=>"input"===e.slot)}get slots(){return{...super.slots,input:()=>{const e=this.createScopedElement("lion-switch-button");return e.setAttribute("data-tag-name","lion-switch-button"),e}}}render(){return H`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
    `}_groupOneTemplate(){return H`${this._labelTemplate()} ${this._helpTextTemplate()} ${this._feedbackTemplate()}`}_groupTwoTemplate(){return H`${this._inputGroupTemplate()}`}constructor(){super(),this.checked=!1,this.__handleButtonSwitchCheckedChanged=this.__handleButtonSwitchCheckedChanged.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("checked-changed",this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.addEventListener("click",this._toggleChecked),this._syncButtonSwitch()}disconnectedCallback(){super.disconnectedCallback(),this._inputNode&&this.removeEventListener("checked-changed",this.__handleButtonSwitchCheckedChanged),this._labelNode&&this._labelNode.removeEventListener("click",this._toggleChecked)}updated(e){super.updated(e),e.has("disabled")&&this._syncButtonSwitch()}_toggleChecked(e){e.preventDefault(),super._toggleChecked(e)}_isEmpty(){return!1}__handleButtonSwitchCheckedChanged(e){e.stopPropagation(),this._isHandlingUserInput=!0,this.checked=this._inputNode.checked,this._isHandlingUserInput=!1}_syncButtonSwitch(){this._inputNode.disabled=this.disabled}_onLabelClick(){this.disabled||this._inputNode.focus()}}var Qc=r`
  :host {
    display: grid;
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
`;function Xc(e){return(e??"").split(/\s+/).filter(Boolean)}const ed=Symbol.for("craft-switch-synthetic-change");var td=new WeakMap,id=new WeakSet,sd=class extends Jc{constructor(...e){super(...e),Ae(this,id),this.size="medium",this.onLabel="",this.offLabel="",this.checkedValue="1",this.indeterminateValue="-",this.indeterminate=!1,this.__externalLabelledByNodes=[],this.__externalDescribedByNodes=[],this.__clickableExternalLabels=new Set,Ne(this,td,!1),this.__onKeydown=e=>{if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.disabled||e.target!==this._inputNode)return;e.preventDefault();let t="rtl"===getComputedStyle(this).direction;this._setCheckedState(e.key===(t?"ArrowLeft":"ArrowRight"))},this.__forwardNativeChange=e=>{e.target===this._inputNode&&this.__dispatchNativeChange()},this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._inputNode?.click()}}static get styles(){return[...super.styles,Ls,Qc]}get slots(){return{...super.slots,input:()=>{let e=this.createScopedElement("craft-switch-button");return e.setAttribute("size",this.size),e.setAttribute("data-tag-name","craft-switch-button"),e},"state-description":()=>{let e=document.createElement("div");return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement("input");return e.type="hidden",e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}static get scopedElements(){return{...super.scopedElements,"craft-switch-button":Zc}}connectedCallback(){super.connectedCallback(),this.__adoptExternalAria(),this.addEventListener("checked-changed",this.__forwardNativeChange),this.addEventListener("keydown",this.__onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("checked-changed",this.__forwardNativeChange),this.removeEventListener("keydown",this.__onKeydown),this.__teardownExternalLabelClicks()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&"hidden-input"===e.slot)}get _postedValue(){return this.checked?this.checkedValue:this.indeterminate?this.indeterminateValue:""}get _stateDescriptionNode(){return Array.from(this.children).find(e=>"state-description"===e.slot)}get _stateDescriptionText(){return[this.onLabel?ft("Check for {onLabel}.",{onLabel:this.onLabel}):"",this.offLabel?ft("Uncheck for {offLabel}.",{offLabel:this.offLabel}):""].filter(Boolean).join(" ")}updated(e){super.updated(e),e.has("checked")&&this.checked&&this.indeterminate&&(this.indeterminate=!1),(e.has("onLabel")||e.has("offLabel"))&&this.__syncStateDescription(),["checked","indeterminate","checkedValue","indeterminateValue","disabled","size"].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has("checked")||e.has("indeterminate"))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._inputNode;if(!e)return;let t=e.getAttribute("data-target"),i=e.getAttribute("data-reverse-target");if(!t&&!i)return;let s=window.jQuery;s&&s(e).data?.("fieldtoggle")||(this.__toggleTargets(t,this.checked),this.__toggleTargets(i,!this.checked))}__toggleTargets(e,t){if(!e)return;let i=/^[#.]/.test(e)?e:`#${e}`,s=this.getRootNode(),n=!1;for(let e of s.querySelectorAll(i))e.classList.contains("hidden")===t&&(e.classList.toggle("hidden",!t),n=!0);n&&t&&window.dispatchEvent(new Event("resize"))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked===e?t&&this.__dispatchNativeChange():this.checked=e)}get on(){return this.checked}get postedValue(){return this._postedValue}turnOn(e=!1){Se(id,this,nd).call(this,()=>this._setCheckedState(!0),e)}turnOff(e=!1){Se(id,this,nd).call(this,()=>this._setCheckedState(!1),e)}turnIndeterminate(e=!1){Se(id,this,nd).call(this,()=>{if(this.indeterminate&&!this.checked)return;let e=this.checked;this.checked=!1,this.indeterminate=!0,e||this.__dispatchNativeChange()},e)}__dispatchNativeChange(){if(Te(td,this))return;let e=new Event("change",{bubbles:!0});e[ed]=!0,this._inputNode?.dispatchEvent(e)}_onChange(e){e&&ed in e||super._onChange(e)}__adoptExternalAria(){let e=this._inputNode;if(!e)return;let t=this.getRootNode();for(let i of Xc(e.getAttribute("aria-labelledby"))){let e=t.getElementById(i);e&&!this.__externalLabelledByNodes.includes(e)&&(this.addToAriaLabelledBy(e,{reorder:!1}),this.__externalLabelledByNodes.push(e))}for(let i of Xc(e.getAttribute("aria-describedby"))){let e=t.getElementById(i);e&&!this.__externalDescribedByNodes.includes(e)&&(this.addToAriaDescribedBy(e,{reorder:!1}),this.__externalDescribedByNodes.push(e))}this.__setupExternalLabelClicks()}__setupExternalLabelClicks(){let e=this._inputNode;if(!e)return;let t=this.getRootNode(),i=new Set(this.__externalLabelledByNodes.filter(e=>e instanceof HTMLLabelElement));if(e.id)for(let s of t.querySelectorAll(`label[for="${function(e){return typeof CSS<"u"&&"function"==typeof CSS.escape?CSS.escape(e):e}(e.id)}"]`))i.add(s);for(let e of i)this.__clickableExternalLabels.has(e)||(e.addEventListener("click",this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener("click",this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._inputNode;if(!e)return;e.getAttribute("size")!==this.size&&e.setAttribute("size",this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:"state-description",reorder:!1}):this.removeFromAriaDescribedBy(e)}_groupOneTemplate(){return H`${super._groupOneTemplate()} ${this._stateDescriptionTemplate()}`}_stateDescriptionTemplate(){return H`<slot name="state-description"></slot>`}_stateLabelTemplate(e){let t="on"===e?this.onLabel:this.offLabel;return t?H`<span
      class="state-label"
      data-state=${e}
      aria-hidden="true"
      @click=${()=>this._setCheckedState("on"===e)}
      >${t}</span
    >`:Y}_inputGroupBeforeTemplate(){return H`
      <div class="input-group__before">
        <slot name="before"></slot>
        ${this._stateLabelTemplate("off")}
      </div>
    `}_inputGroupAfterTemplate(){return H`
      <div class="input-group__after">
        ${this._stateLabelTemplate("on")}
        <slot name="after"></slot>
      </div>
    `}};function nd(e,t){if(!this.disabled){if(!t)return void e();Oe(td,this,!0),e(),this.updateComplete.then(()=>{Oe(td,this,!1)})}}function od(e){e.removeAttribute("selected")}function rd(e){e.removeAttribute("selected"),e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1")}function ad(e){const t=e;switch(t.key){case"ArrowDown":case"ArrowRight":case"ArrowUp":case"ArrowLeft":case"Home":case"End":t.preventDefault()}}ge([_e({type:String,reflect:!0})],sd.prototype,"size",void 0),ge([_e({type:String,attribute:"on-label"})],sd.prototype,"onLabel",void 0),ge([_e({type:String,attribute:"off-label"})],sd.prototype,"offLabel",void 0),ge([_e({attribute:"value"})],sd.prototype,"checkedValue",void 0),ge([_e({attribute:"indeterminate-value"})],sd.prototype,"indeterminateValue",void 0),ge([_e({type:Boolean,reflect:!0})],sd.prototype,"indeterminate",void 0),customElements.get("craft-switch")||customElements.define("craft-switch",sd);class ld extends pe{static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",reflect:!0}}}static get styles(){return[r`
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
      `]}render(){return H`
      <div class="tabs__tab-group" role="tablist">
        <slot name="tab"></slot>
      </div>
      <div class="tabs__panels">
        <slot name="panel"></slot>
      </div>
    `}constructor(){super(),this.selectedIndex=0}firstUpdated(e){super.firstUpdated(e),this.__setupSlots(),this.tabs[0]?.disabled&&(this.selectedIndex=this.tabs.findIndex(e=>!e.disabled))}get tabs(){return Array.from(this.children).filter(e=>"tab"===e.slot)}get panels(){return Array.from(this.children).filter(e=>"panel"===e.slot)}static enabledWarnings=super.enabledWarnings?.filter(e=>"change-in-update"!==e)||[];__setupSlots(){if(this.shadowRoot){const e=this.shadowRoot.querySelector("slot[name=tab]"),t=()=>{this.__cleanStore(),this.__setupStore(),this.__updateSelected(!1)};e&&e.addEventListener("slotchange",t)}}__setupStore(){this.__store=[],this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),this.tabs.forEach((e,t)=>{const i={uid:Zt(),el:e,button:e,panel:this.panels[t],clickHandler:this.__createButtonClickHandler(t),keydownHandler:ad.bind(this),keyupHandler:this.__handleButtonKeyup.bind(this)};!function({el:e,uid:t}){e.setAttribute("id",`panel-${t}`),e.setAttribute("role","tabpanel"),e.setAttribute("aria-labelledby",`button-${t}`),e.hasAttribute("tabindex")||e.setAttribute("tabindex","0")}({...i,el:i.panel}),function({el:e,uid:t,clickHandler:i,keydownHandler:s,keyupHandler:n}){e.setAttribute("id",`button-${t}`),e.setAttribute("role","tab"),e.setAttribute("aria-controls",`panel-${t}`),e.addEventListener("click",i),e.addEventListener("keyup",n),e.addEventListener("keydown",s)}(i),od(i.panel),rd(i.button),this.__store&&this.__store.push(i)})}__cleanStore(){this.__store&&(this.__store.forEach(e=>{!function({el:e,clickHandler:t,keydownHandler:i,keyupHandler:s}){e.removeAttribute("id"),e.removeAttribute("role"),e.removeAttribute("aria-controls"),e.removeEventListener("click",t),e.removeEventListener("keyup",s),e.removeEventListener("keydown",i)}(e)}),this.__store=[])}__getNextNotDisabledTab(e,t,i){let s=[];const n=e.filter((e,t)=>!e.disabled&&t>this.selectedIndex),o=e.filter((e,t)=>!e.disabled&&t<this.selectedIndex);return s="right"===i?[...n,...o]:[...o.reverse(),...n.reverse()],s[0]}__getNextAvailableIndex(e,t){const i=this.tabs[this.selectedIndex];if(this.tabs.every(e=>!e.disabled))return e;if("ArrowRight"===t||"ArrowDown"===t){const e=this.__getNextNotDisabledTab(this.tabs,i,"right");return this.tabs.findIndex(t=>e===t)}if("ArrowLeft"===t||"ArrowUp"===t){const e=this.__getNextNotDisabledTab(this.tabs,i,"left");return this.tabs.findIndex(t=>e===t)}if("Home"===t)return this.tabs.findIndex(e=>!e.disabled);if("End"===t){const e=this.tabs.map((e,t)=>({disabled:e.disabled,index:t})).filter(e=>!e.disabled);return e[e.length-1].index}return-1}__createButtonClickHandler(e){return()=>{this._setSelectedIndexWithFocus(e)}}__handleButtonKeyup(e){const t=e;if("number"==typeof this.selectedIndex)switch(t.key){case"ArrowDown":case"ArrowRight":this.selectedIndex+1>=this._pairCount?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex+1,t.key));break;case"ArrowUp":case"ArrowLeft":this.selectedIndex<=0?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex-1,t.key));break;case"Home":this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,t.key));break;case"End":this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,t.key))}}get selectedIndex(){return this.__selectedIndex||0}set selectedIndex(e){if(e===this.__selectedIndex)return;const t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!1),this.dispatchEvent(new Event("selected-changed")),this.requestUpdate("selectedIndex",t)}_setSelectedIndexWithFocus(e){if(-1===e)return;const t=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!0),this.dispatchEvent(new Event("selected-changed")),this.requestUpdate("selectedIndex",t)}get _pairCount(){return this.__store&&this.__store.length||0}__updateSelected(e=!1){if(!this.__store||"number"!=typeof this.selectedIndex||!this.__store[this.selectedIndex])return;const t=this.tabs.find(e=>e.hasAttribute("selected")),i=this.panels.find(e=>e.hasAttribute("selected"));t&&rd(t),i&&od(i);const{button:s,panel:n}=this.__store[this.selectedIndex];s&&function(e,t=!1){t&&e.focus(),e.setAttribute("selected","true"),e.setAttribute("aria-selected","true"),e.setAttribute("tabindex","0")}(s,e),n&&n.setAttribute("selected","true")}}var cd=r`
  :host {
    display: block;
  }

  .tabs {
    display: flex;
    flex-direction: column;
    gap: var(--c-tabs-gap, var(--c-spacing-lg));
  }

  /*
   * The rule lives on the strip rather than the tablist so it runs under the
   * overflow menu too, which sits beside the tablist rather than inside it.
   */
  .tabs__strip {
    display: flex;
    align-items: center;
    min-width: 0;
    border-block-end: 1px solid
      var(--c-tabs-border, var(--c-color-neutral-border-quiet));
  }

  .tabs__tab-group {
    flex: 1;
    min-width: 0;
    gap: var(--c-tabs-tab-gap, var(--c-spacing-md));
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

  .tabs__panels {
    min-width: 0;
  }

  /*
   * Custom properties set here inherit into the slotted <craft-tab>s (they're
   * light-DOM children), which is how the tabs move their selected indicator
   * from the block end to the inline end without reading the layout
   * themselves.
   */
  :host([layout='vertical']) {
    --c-tab-indicator-inset-block-start: 0;
    --c-tab-indicator-inset-block-end: 0;
    --c-tab-indicator-inset-inline-start: auto;
    --c-tab-indicator-inset-inline-end: -1px;
    --c-tab-indicator-block-size: auto;
    --c-tab-indicator-inline-size: calc(2rem / 16);
  }

  :host([layout='vertical']) .tabs {
    flex-direction: row;
  }

  :host([layout='vertical']) .tabs__strip {
    align-items: stretch;
    border-block-end: none;
    border-inline-end: 1px solid
      var(--c-tabs-border, var(--c-color-neutral-border-quiet));
  }

  :host([layout='vertical']) .tabs__tab-group {
    flex-direction: column;
  }

  :host([layout='vertical']) .tabs__panels {
    flex: 1;
  }
`;const dd={Horizontal:"horizontal",Vertical:"vertical"},hd=(Object.values(dd),new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"]));var ud=new WeakMap,pd=new WeakMap,md=new WeakMap,fd=new WeakMap,gd=new WeakMap,vd=new WeakSet,bd=new WeakMap,_d=new WeakMap,yd=class extends ld{constructor(...e){super(...e),Ae(this,vd),this.layout=dd.Horizontal,Ne(this,ud,[]),Ne(this,pd,!1),Ne(this,md,[]),Ne(this,fd,void 0),Ne(this,gd,!1),Ne(this,bd,()=>{if(Se(vd,this,Ed).call(this),kd.call(Se(vd,this)).forEach((e,t)=>{let i=()=>Se(vd,this,Md).call(this,t,!0),s=e=>{hd.has(e.key)&&e.preventDefault()},n=e=>Se(vd,this,$d).call(this,e);e.addEventListener("click",i),e.addEventListener("keydown",s),e.addEventListener("keyup",n),Te(ud,this).push(()=>{e.removeEventListener("click",i),e.removeEventListener("keydown",s),e.removeEventListener("keyup",n)})}),kd.call(Se(vd,this))[this.selectedIndex]?.disabled){let e=kd.call(Se(vd,this)).findIndex(e=>!e.disabled);-1!==e&&(this.selectedIndex=e)}Se(vd,this,Cd).call(this)}),Ne(this,_d,()=>{Te(gd,this)||(Oe(gd,this,!0),requestAnimationFrame(()=>{Oe(gd,this,!1),Se(vd,this,Ad).call(this)}))})}static get styles(){return[...super.styles,fr,cd]}refresh(){Te(pd,this)&&Se(vd,this,Cd).call(this),Se(vd,this,Ad).call(this)}firstUpdated(e){Oe(pd,this,kd.call(Se(vd,this)).some(e=>e.controls));let t=this.shadowRoot?.querySelector('slot[name="tab"]');Te(pd,this)?(t?.addEventListener("slotchange",Te(bd,this)),Te(bd,this).call(this)):super.firstUpdated(e),t?.addEventListener("slotchange",Te(_d,this)),Oe(fd,this,new ResizeObserver(Te(_d,this))),Te(fd,this).observe(this),Se(vd,this,Ad).call(this)}disconnectedCallback(){super.disconnectedCallback(),Se(vd,this,Ed).call(this),Te(fd,this)?.disconnect(),Oe(fd,this,void 0)}updated(e){super.updated(e),Te(pd,this)&&e.has("selectedIndex")&&Se(vd,this,Cd).call(this),(e.has("selectedIndex")||e.has("layout"))&&Se(vd,this,Ad).call(this)}render(){return H`
      <div class="tabs" part="base">
        <div class="tabs__strip" part="strip">
          <div
            class="tabs__tab-group"
            part="tab-group"
            role="tablist"
            aria-orientation="${this.layout}"
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
            >
              <!--
                The name has to come from the icon: craft-button's
                \`accessible-name\` only records the name it computed, it doesn't
                put one in the DOM, so an icon-only button with nothing else to
                read is nameless.
              -->
              <craft-icon
                name="ellipsis"
                label="${ft("More tabs")}"
              ></craft-icon>
            </craft-button>
          </craft-action-menu>
        </div>
        <div class="tabs__panels" part="panels">
          <slot name="panel"></slot>
        </div>
      </div>
    `}};function kd(){return this.tabs}function wd(){return this.shadowRoot?.querySelector(".tabs__tab-group")??null}function xd(){return this.shadowRoot?.querySelector(".tabs__overflow")??null}function Ed(){for(;Te(ud,this).length;)Te(ud,this).pop()?.()}function Cd(){let e=kd.call(Se(vd,this)).map(e=>Se(vd,this,Sd).call(this,e)),t=e.some(Boolean);kd.call(Se(vd,this)).forEach((i,s)=>{let n=s===this.selectedIndex,o=e[s];i.id||(i.id=`tab-${Zt()}`),i.setAttribute("role","tab"),i.toggleAttribute("selected",n),i.setAttribute("aria-selected",String(n)),i.setAttribute("tabindex",n?"0":"-1"),o?(i.setAttribute("aria-controls",o.id),o.setAttribute("role","tabpanel"),o.setAttribute("aria-labelledby",i.id),o.hasAttribute("tabindex")||o.setAttribute("tabindex","0"),o.classList.toggle("hidden",!n),o.toggleAttribute("selected",n)):t&&console.error(`<craft-tabs> found no panel with id "${i.controls}".`,i)})}function Sd(e){return e.controls?document.getElementById(e.controls):null}function Ad(){let e=wd.call(Se(vd,this)),t=xd.call(Se(vd,this)),i=kd.call(Se(vd,this));if(!e||!t)return;if(this.layout===dd.Vertical||0===i.length)return void Se(vd,this,Td).call(this,[]);i.forEach(e=>e.removeAttribute("hidden")),t.hidden=!0;let s=Se(vd,this,Nd).call(this,e),n=i.map(e=>e.offsetWidth);if(n.reduce((e,t,i)=>e+t+(i?s:0),0)<=e.clientWidth+1)return void Se(vd,this,Td).call(this,[]);t.hidden=!1;let o=e.clientWidth,r=[],a=0;for(let e=0;e<i.length;e++){let t=n[e]+(r.length?s:0);if(a+t>o+1)break;a+=t,r.push(e)}let l=this.selectedIndex;if(l>=0&&l<i.length&&!r.includes(l)){let e=n[l];for(;r.length&&a+e+s>o;)a-=n[r.pop()]+(r.length?s:0);r.push(l)}let c=new Set(r);Se(vd,this,Td).call(this,i.map((e,t)=>t).filter(e=>!c.has(e)))}function Nd(e){let t=parseFloat(getComputedStyle(e).columnGap);return Number.isFinite(t)?t:0}function Td(e){let t=xd.call(Se(vd,this)),i=new Set(e);kd.call(Se(vd,this)).forEach((e,t)=>{e.toggleAttribute("hidden",i.has(t))}),Oe(md,this,e),t&&(t.hidden=0===e.length,t.actions=Se(vd,this,Od).call(this))}function Od(){return Te(md,this).map(e=>{let t=kd.call(Se(vd,this))[e];return{label:t.textContent?.trim()??"",disabled:t.disabled,onClick:()=>Se(vd,this,Ld).call(this,e)}})}function Ld(e){let t=kd.call(Se(vd,this))[e];if(!t||t.disabled)return;let i=xd.call(Se(vd,this));i&&(i.opened=!1),this.selectedIndex=e,Se(vd,this,Ad).call(this),t.focus()}function Md(e,t){let i=kd.call(Se(vd,this))[e];!i||i.disabled||(this.selectedIndex=e,t&&i.focus())}function $d(e){if(!hd.has(e.key))return;let t=Se(vd,this,Id).call(this,e.key);-1!==t&&Se(vd,this,Md).call(this,t,!0)}function Id(e){let t=kd.call(Se(vd,this)),i=e=>t[e]&&!t[e].disabled&&!t[e].hidden;if("Home"===e)return t.findIndex((e,t)=>i(t));if("End"===e){for(let e=t.length-1;e>=0;e--)if(i(e))return e;return-1}let s="ArrowRight"===e||"ArrowDown"===e?1:-1;for(let e=1;e<=t.length;e++){let n=((this.selectedIndex+s*e)%t.length+t.length)%t.length;if(i(n))return n}return-1}ge([_e({reflect:!0})],yd.prototype,"layout",void 0),customElements.get("craft-tabs")||customElements.define("craft-tabs",yd);var Fd=r`
  :host {
    display: inline-flex;
    padding-inline: var(--c-tab-spacing-inline, 1em);
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
   * strip can move it without knowing anything about this shadow root:
   * horizontal tabs get a rule underneath (pulled 1px down to sit on top of
   * the strip's border), vertical tabs get one along the inline end.
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
      var(--c-color-accent-border-loud)
    );
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
`,Pd=class extends pe{constructor(...e){super(...e),this.disabled=!1,this.controls=null}get selected(){return this.hasAttribute("selected")}render(){return H`<slot></slot>`}};Pd.styles=[fr,Fd],ge([_e({type:Boolean,reflect:!0})],Pd.prototype,"disabled",void 0),ge([_e({reflect:!0})],Pd.prototype,"controls",void 0),customElements.get("craft-tab")||customElements.define("craft-tab",Pd);var Dd=new Map;function Vd(e){var t=Dd.get(e);t&&t.destroy()}function Rd(e){var t=Dd.get(e);t&&t.update()}var Bd=null;"undefined"==typeof window?((Bd=function(e){return e}).destroy=function(e){return e},Bd.update=function(e){return e}):((Bd=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!Dd.has(e)){var t,i=null,s=window.getComputedStyle(e),n=(t=e.value,function(){r({testForHeightReduction:""===t||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),o=function(t){e.removeEventListener("autosize:destroy",o),e.removeEventListener("autosize:update",a),e.removeEventListener("input",n),window.removeEventListener("resize",a),Object.keys(t).forEach(function(i){return e.style[i]=t[i]}),Dd.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",o),e.addEventListener("autosize:update",a),e.addEventListener("input",n),window.addEventListener("resize",a),e.style.overflowX="hidden",e.style.wordWrap="break-word",Dd.set(e,{destroy:o,update:a}),a()}function r(t){var n,o,a=t.restoreTextAlign,l=void 0===a?null:a,c=t.testForHeightReduction,d=void 0===c||c,h=s.overflowY;if(0!==e.scrollHeight&&("vertical"===s.resize?e.style.resize="none":"both"===s.resize&&(e.style.resize="horizontal"),d&&(n=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],i=e[1];t.style.scrollBehavior="auto",t.scrollTop=i,t.style.scrollBehavior=null})}}(e),e.style.height=""),o="content-box"===s.boxSizing?e.scrollHeight-(parseFloat(s.paddingTop)+parseFloat(s.paddingBottom)):e.scrollHeight+parseFloat(s.borderTopWidth)+parseFloat(s.borderBottomWidth),"none"!==s.maxHeight&&o>parseFloat(s.maxHeight)?("hidden"===s.overflowY&&(e.style.overflow="scroll"),o=parseFloat(s.maxHeight)):"hidden"!==s.overflowY&&(e.style.overflow="hidden"),e.style.height=o+"px",l&&(e.style.textAlign=l),n&&n(),i!==o&&(e.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),i=o),h!==s.overflow&&!l)){var u=s.textAlign;"hidden"===s.overflow&&(e.style.textAlign="start"===u?"end":"start"),r({restoreTextAlign:u,testForHeightReduction:!0})}}function a(){r({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Vd),e},Bd.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Rd),e});var zd=Bd;class jd extends no{get _inputNode(){return Array.from(this.children).find(e=>"input"===e.slot)}}class Ud extends(so(jd)){static get properties(){return{maxRows:{type:Number,attribute:"max-rows"},rows:{type:Number,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const e=document.createElement("textarea");return void 0!==e.style.resize&&(e.style.resize="none"),e}}}constructor(){super(),this.rows=2,this.maxRows=6,this.readOnly=!1,this.placeholder=""}connectedCallback(){super.connectedCallback(),this.__initializeAutoresize(),this.__intersectionObserver=new IntersectionObserver(()=>this.resizeTextarea()),this.__intersectionObserver.observe(this)}updated(e){if(super.updated(e),e.has("name")&&(this._inputNode.name=this.name),e.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete),e.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),e.has("rows")){const e=this._inputNode;e&&(e.rows=this.rows)}if(e.has("readOnly")){const e=this._inputNode;e&&(e.readOnly=this.readOnly)}if(e.has("placeholder")){const e=this._inputNode;e&&(e.placeholder=this.placeholder)}e.has("modelValue")&&this.resizeTextarea(),(e.has("maxRows")||e.has("rows"))&&this.setTextareaMaxHeight()}disconnectedCallback(){super.disconnectedCallback(),zd.destroy(this._inputNode)}setTextareaMaxHeight(){const{value:e}=this._inputNode;this._inputNode.value="",this.resizeTextarea();const t=window.getComputedStyle(this._inputNode,null),i=parseFloat(t.lineHeight)||parseFloat(t.height)/this.rows,s=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o="border-box"===t.boxSizing?s+n:0;this._inputNode.style.maxHeight=`${i*this.maxRows+o}px`,this._inputNode.value=e,this.resizeTextarea()}static get styles(){return[...super.styles,r`
        .input-group__container > .input-group__input ::slotted(.form-control) {
          box-sizing: content-box;
          overflow-x: hidden; /* for FF adds height to the TextArea to reserve place for scroll-bars */
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }
      `]}get updateComplete(){return this.__textareaUpdateComplete?Promise.all([this.__textareaUpdateComplete,super.updateComplete]):super.updateComplete}resizeTextarea(){zd.update(this._inputNode)}__initializeAutoresize(){this.__shady_native_contains?this.__textareaUpdateComplete=this.__waitForTextareaRenderedInRealDOM().then(()=>{this.__startAutoresize(),this.__textareaUpdateComplete=null}):this.__startAutoresize()}async __waitForTextareaRenderedInRealDOM(){let e=3;for(;0!==e&&!this.__shady_native_contains(this._inputNode);)await new Promise(e=>setTimeout(e)),e-=1}__startAutoresize(){zd(this._inputNode),this.setTextareaMaxHeight()}}var qd=r`
  :host(:not([label-sr-only])) .form-field__group-one {
    margin-bottom: var(--c-spacing-sm);
  }

  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    padding-block: var(--c-spacing-md);
    line-height: var(--leading-normal);
  }
`,Hd=class extends Ud{constructor(...e){super(...e),this.monospace=!1}static get styles(){return[...super.styles,Ms,qd]}};ge([_e({type:Boolean,reflect:!0})],Hd.prototype,"monospace",void 0),customElements.get("craft-textarea")||customElements.define("craft-textarea",Hd);class Wd{constructor(e,t,{tabInsertsSuggestions:i,firstOptionSelectionMode:s,scrollIntoViewOptions:n}={}){this.input=e,this.list=t,this.tabInsertsSuggestions=null==i||i,this.firstOptionSelectionMode=null!=s?s:"none",this.scrollIntoViewOptions=null!=n?n:{block:"nearest",inline:"nearest"},this.isComposing=!1,this.didAutoAssignLastSelectedId=!1,t.id||(t.id=`combobox-${Math.random().toString().slice(2,6)}`),this.ctrlBindings=!!navigator.userAgent.match(/Macintosh/),this.keyboardEventHandler=e=>function(e,t){if(!(e.shiftKey||e.metaKey||e.altKey)&&(t.ctrlBindings||!e.ctrlKey)&&!t.isComposing)switch(e.key){case"Enter":Kd(t.input,t.list)&&e.preventDefault();break;case"Tab":t.tabInsertsSuggestions&&Kd(t.input,t.list)&&e.preventDefault();break;case"Escape":t.clearSelection();break;case"ArrowDown":t.navigate(1),e.preventDefault();break;case"ArrowUp":t.navigate(-1),e.preventDefault();break;case"n":t.ctrlBindings&&e.ctrlKey&&(t.navigate(1),e.preventDefault());break;case"p":t.ctrlBindings&&e.ctrlKey&&(t.navigate(-1),e.preventDefault());break;default:if(e.ctrlKey)break;t.resetSelection()}}(e,this),this.compositionEventHandler=e=>function(e,t){t.isComposing="compositionstart"===e.type;document.getElementById(t.input.getAttribute("aria-controls")||"")&&t.clearSelection()}(e,this),this.inputHandler=this.clearSelection.bind(this),e.setAttribute("role","combobox"),e.setAttribute("aria-controls",t.id),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-haspopup","listbox")}destroy(){this.clearSelection(),this.stop(),this.input.removeAttribute("role"),this.input.removeAttribute("aria-controls"),this.input.removeAttribute("aria-expanded"),this.input.removeAttribute("aria-autocomplete"),this.input.removeAttribute("aria-haspopup")}start(){this.input.setAttribute("aria-expanded","true"),this.input.addEventListener("compositionstart",this.compositionEventHandler),this.input.addEventListener("compositionend",this.compositionEventHandler),this.input.addEventListener("input",this.inputHandler),this.input.addEventListener("keydown",this.keyboardEventHandler),this.list.addEventListener("click",Gd),this.resetSelection()}stop(){this.clearSelection(),this.input.setAttribute("aria-expanded","false"),this.input.removeEventListener("compositionstart",this.compositionEventHandler),this.input.removeEventListener("compositionend",this.compositionEventHandler),this.input.removeEventListener("input",this.inputHandler),this.input.removeEventListener("keydown",this.keyboardEventHandler),this.list.removeEventListener("click",Gd)}indicateDefaultOption(){var e;"active"===this.firstOptionSelectionMode?null===(e=Array.from(this.list.querySelectorAll('[role="option"]:not([aria-disabled="true"])')).filter(Zd)[0])||void 0===e||e.setAttribute("data-combobox-option-default","true"):"selected"===this.firstOptionSelectionMode&&this.navigate(1)}navigate(e=1){const t=Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(Zd)[0],i=Array.from(this.list.querySelectorAll('[role="option"]')).filter(Zd),s=i.indexOf(t);if(s===i.length-1&&1===e||0===s&&-1===e)return this.clearSelection(),void this.input.focus();let n=1===e?0:i.length-1;if(t&&s>=0){const t=s+e;t>=0&&t<i.length&&(n=t)}const o=i[n];if(o)for(const e of i)e.removeAttribute("data-combobox-option-default"),o===e?(o.id||document.getElementById(`${this.list.id}-selected`)||(o.id=`${this.list.id}-selected`,this.didAutoAssignLastSelectedId=!0),o.id&&this.input.setAttribute("aria-activedescendant",o.id),o.setAttribute("aria-selected","true"),Yd(o),o.scrollIntoView(this.scrollIntoViewOptions)):(e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute("id"),this.didAutoAssignLastSelectedId=!1),e.removeAttribute("aria-selected"))}clearSelection(){this.input.removeAttribute("aria-activedescendant");for(const e of this.list.querySelectorAll('[aria-selected="true"], [data-combobox-option-default="true"]'))e.removeAttribute("aria-selected"),e.removeAttribute("data-combobox-option-default"),e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute("id"),this.didAutoAssignLastSelectedId=!1)}resetSelection(){this.clearSelection(),this.indicateDefaultOption()}}function Gd(e){if(!(e.target instanceof Element))return;const t=e.target.closest('[role="option"]');t&&"true"!==t.getAttribute("aria-disabled")&&function(e,t){e.dispatchEvent(new CustomEvent("combobox-commit",{bubbles:!0,detail:t}))}(t,{event:e})}function Kd(e,t){const i=t.querySelector('[aria-selected="true"], [data-combobox-option-default="true"]');return!!i&&("true"===i.getAttribute("aria-disabled")||i.click(),!0)}function Yd(e){e.dispatchEvent(new Event("combobox-select",{bubbles:!0}))}function Zd(e){return!e.hidden&&!(e instanceof HTMLInputElement&&"hidden"===e.type)&&(e.offsetWidth>0||e.offsetHeight>0)}class Jd extends Event{constructor(){super("update")}}const Qd=new WeakMap;class Xd extends EventTarget{#_=new MutationObserver(()=>this.#y());#k=new ResizeObserver(()=>this.#w());#x;#E=document.createElement("div");#C=document.createElement("div");static for(e){let t=Qd.get(e);return t||(t=new Xd(e),Qd.set(e,t)),t}constructor(e){super(),this.#x=new WeakRef(e),this.#E.style.position="absolute",this.#E.style.pointerEvents="none",this.#E.setAttribute("aria-hidden","true"),this.#E.appendChild(this.#C),this.#C.style.pointerEvents="none",this.#C.style.userSelect="none",this.#C.style.overflow="hidden",this.#C.style.display="block",this.#C.style.visibility="hidden",e instanceof HTMLTextAreaElement?(this.#C.style.whiteSpace="pre-wrap",this.#C.style.wordWrap="break-word"):(this.#C.style.whiteSpace="nowrap",this.#C.style.display="table-cell",this.#C.style.verticalAlign="middle"),e.after(this.#E),this.#y(),this.#S(),this.#_.observe(e,{attributeFilter:["style","dir"]}),this.#k.observe(e),document.addEventListener("scroll",this.#A,{capture:!0}),window.addEventListener("resize",this.#A,{capture:!0}),e.addEventListener("input",this.#N,{capture:!0})}get element(){return this.#C}forceUpdate(){this.#y(),this.#S()}disconnect(){this.#E?.remove(),this.#_.disconnect(),this.#k.disconnect(),document.removeEventListener("scroll",this.#A,{capture:!0}),window.removeEventListener("resize",this.#A,{capture:!0});const e=this.#T;e&&(e.removeEventListener("input",this.#N,{capture:!0}),Qd.delete(e))}get#T(){return this.#x?.deref()}#O(e){const t=this.#T;return t?e(t):this.disconnect()}#L=0;#M=0;#$(){this.#O(e=>{const t=window.getComputedStyle(e);this.#C.style.height=t.height,this.#C.style.width=t.width,e.clientHeight!==this.#C.clientHeight&&(this.#C.style.height=`calc(${t.height} + ${e.clientHeight-this.#C.clientHeight}px)`),e.clientWidth!==this.#C.clientWidth&&(this.#C.style.width=`calc(${t.width} + ${e.clientWidth-this.#C.clientWidth}px)`);const i=e.getBoundingClientRect(),s=this.#C.getBoundingClientRect();this.#L=this.#L+i.left-s.left,this.#M=this.#M+i.top-s.top,this.#C.style.transform=`translate(${this.#L}px, ${this.#M}px)`,this.#C.scrollTop=e.scrollTop,this.#C.scrollLeft=e.scrollLeft,this.dispatchEvent(new Jd)})}#I=!1;#w(){this.#I||(this.#I=!0,requestAnimationFrame(()=>{this.#$(),this.#I=!1}))}#y(){this.#O(e=>{const t=window.getComputedStyle(e);for(const e of eh)this.#C.style[e]=t[e];this.#w()})}#S(){this.#O(e=>{this.#C.textContent=e.value,this.#$()})}#N=()=>this.#S();#A=e=>{this.#O(t=>{(e.target===document||e.target===window||e.target instanceof Node&&e.target.contains(t))&&this.#w()})}}const eh=["direction","writingMode","unicodeBidi","textOrientation","boxSizing","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"];class th{#F;#P;#D;constructor(e,t=0,i=t){this.#F=e,this.#P=t,this.#D=i}static fromSelection(e){const{selectionStart:t,selectionEnd:i}=e;return new th(e,t??void 0,i??void 0)}get collapsed(){return this.startOffset===this.endOffset}get commonAncestorContainer(){return this.#F}get endContainer(){return this.#F}get startContainer(){return this.#F}get startOffset(){return this.#P}get endOffset(){return this.#D}setStartOffset(e){this.#P=this.#V(e)}setEndOffset(e){this.#D=this.#V(e)}collapse(e=!1){e?this.setEndOffset(this.startOffset):this.setStartOffset(this.endOffset)}cloneContents(){return this.#R().cloneContents()}cloneRange(){return new th(this.#F,this.startOffset,this.endOffset)}getBoundingClientRect(){return this.#R().getBoundingClientRect()}getClientRects(){return this.#R().getClientRects()}toString(){return this.#R().toString()}getStyleClone(){return this.#B}get#B(){return Xd.for(this.#F)}get#C(){return this.#B}#V(e){return Math.max(0,Math.min(e,this.#F.value.length))}#R(){const e=document.createRange(),t=this.#C.element.childNodes[0];return t&&(e.setStart(t,this.startOffset),e.setEnd(t,this.endOffset)),e}}var ih=r`
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
    outline: none;
  }

  .text-expander__loading {
    padding: var(--c-spacing-sm) var(--c-spacing-md);
    color: var(--c-text-quiet);
  }
`;const sh=/^[\p{L}\p{N}_-]*$/u,nh=ft("Suggestions"),oh=["role","aria-autocomplete","aria-haspopup","aria-expanded","aria-controls","aria-activedescendant","aria-busy"],rh={handlesAccessibility:!1,visibilityTriggerFunction:void 0};let ah=0;var lh=new WeakMap,ch=new WeakMap,dh=new WeakMap,hh=new WeakMap,uh=new WeakMap,ph=new WeakMap,mh=new WeakMap,fh=new WeakMap,gh=new WeakMap,vh=new WeakMap,bh=new WeakMap,_h=new WeakMap,yh=new WeakMap,kh=new WeakMap,wh=new WeakSet,xh=new WeakMap,Eh=new WeakMap,Ch=new WeakMap,Sh=new WeakMap,Ah=new WeakMap,Nh=new WeakMap,Th=new WeakMap,Oh=new WeakMap,Lh=new WeakMap,Mh=new WeakMap,$h=new WeakMap,Ih=class extends pe{constructor(...e){super(...e),Ae(this,wh),this.for="",this.triggers={},this.loading=!1,this.announcement="",Ne(this,lh,void 0),Ne(this,ch,null),Ne(this,dh,null),Ne(this,hh,new Map),Ne(this,uh,null),Ne(this,ph,[]),Ne(this,mh,0),Ne(this,fh,null),Ne(this,gh,null),Ne(this,vh,null),Ne(this,bh,!1),Ne(this,_h,null),Ne(this,yh,new DOMRect),Ne(this,kh,new MutationObserver(()=>{let e=Se(wh,this,Ph).call(this);(su(e)&&e!==Te(ch,this)||Te(ch,this)&&!Te(ch,this).isConnected)&&Se(wh,this,Dh).call(this)})),Ne(this,xh,()=>{Te(bh,this)||Se(wh,this,qh).call(this)}),Ne(this,Eh,()=>{Oe(bh,this,!0),Se(wh,this,Qh).call(this)}),Ne(this,Ch,()=>{Oe(bh,this,!1),Se(wh,this,qh).call(this)}),Ne(this,Sh,()=>{queueMicrotask(()=>Se(wh,this,Qh).call(this))}),Ne(this,Ah,()=>{let e=Te(ch,this);!e||!Te(uh,this)||!nu(e)||queueMicrotask(()=>{Te(uh,this)&&(e.selectionStart!==Te(uh,this).end||e.selectionEnd!==Te(uh,this).end)&&Se(wh,this,qh).call(this)})}),Ne(this,Nh,()=>{Te(uh,this)&&Se(wh,this,Jh).call(this)}),Ne(this,Th,e=>{let t=e;Te(uh,this)&&Te(lh,this).querySelector('[aria-selected="true"]')&&["ArrowDown","ArrowUp","Enter"].includes(t.key)&&t.stopPropagation()}),Ne(this,Oh,e=>{e.target instanceof Element&&e.target.closest('[role="option"]')&&e.preventDefault()}),Ne(this,Lh,e=>{"touch"===e.pointerType&&e.target instanceof Element&&e.target.closest('[role="option"]')?.click()}),Ne(this,Mh,e=>{Se(wh,this,Kh).call(this,Number(e.target.dataset.index))}),Ne(this,$h,e=>{if(e.target!==this.popoverElement)return;let t=Te(lh,this).getAttribute("aria-label")??nh;Se(wh,this,tu).call(this),Oe(uh,this,null),Se(wh,this,eu).call(this),Se(wh,this,iu).call(this,t===nh?ft("Suggestions collapsed"):ft("{name} suggestions collapsed",{name:t}))})}connectedCallback(){super.connectedCallback(),Se(wh,this,Fh).call(this),this.hasUpdated&&Se(wh,this,Dh).call(this)}disconnectedCallback(){Se(wh,this,Rh).call(this),Te(lh,this)?.remove(),null!==Te(vh,this)&&(clearTimeout(Te(vh,this)),Oe(vh,this,null)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),Se(wh,this,Dh).call(this)}updated(e){super.updated(e),e.has("for")&&Te(ch,this)!==Se(wh,this,Ph).call(this)&&Se(wh,this,Dh).call(this),e.has("triggers")&&e.get("triggers")&&Se(wh,this,Qh).call(this)}render(){return H`
      <craft-popover
        exportparts="popup"
        .config=${rh}
        @craft-hide=${Te($h,this)}
      >
        <div class="text-expander__popup" slot="content">
          ${this.loading?H`<div class="text-expander__loading" part="loading">
                <slot name="loading">${ft("Loading")}</slot>
              </div>`:Y}
          <slot name="listbox"></slot>
        </div>
      </craft-popover>
      <div class="cp-visually-hidden" aria-live="polite" aria-atomic="true">
        ${this.announcement}
      </div>
    `}};function Fh(){Oe(lh,this,document.createElement("div")),Te(lh,this).id="craft-text-expander-listbox-"+ ++ah,Te(lh,this).slot="listbox",Te(lh,this).setAttribute("part","listbox"),Te(lh,this).role="listbox",Te(lh,this).setAttribute("aria-label",nh),Te(lh,this).addEventListener("pointerdown",Te(Oh,this)),Te(lh,this).addEventListener("pointerup",Te(Lh,this)),Te(lh,this).addEventListener("combobox-commit",Te(Mh,this)),this.append(Te(lh,this))}function Ph(){return this.getRootNode().getElementById(this.for)}function Dh(){let e=Se(wh,this,Ph).call(this);Se(wh,this,Rh).call(this),su(e)?(Oe(ch,this,e),Se(wh,this,Bh).call(this,e),Oe(dh,this,new Wd(e,Te(lh,this),{tabInsertsSuggestions:!1,firstOptionSelectionMode:"selected",scrollIntoViewOptions:{block:"nearest"}})),Se(wh,this,zh).call(this,e),e.addEventListener("input",Te(xh,this)),e.addEventListener("keydown",Te(Th,this)),e.addEventListener("blur",Te(Sh,this)),e.addEventListener("compositionstart",Te(Eh,this)),e.addEventListener("compositionend",Te(Ch,this)),e.ownerDocument.addEventListener("selectionchange",Te(Ah,this)),this.popoverElement.anchor={contextElement:e,getBoundingClientRect:()=>Te(yh,this)},Se(wh,this,Vh).call(this)):Se(wh,this,Vh).call(this)}function Vh(){Te(kh,this).observe(this.getRootNode(),{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0})}function Rh(){Te(kh,this).disconnect(),Se(wh,this,Qh).call(this);let e=Te(ch,this);e&&(e.removeEventListener("input",Te(xh,this)),e.removeEventListener("keydown",Te(Th,this)),e.removeEventListener("blur",Te(Sh,this)),e.removeEventListener("compositionstart",Te(Eh,this)),e.removeEventListener("compositionend",Te(Ch,this)),e.ownerDocument.removeEventListener("selectionchange",Te(Ah,this)),Te(_h,this)?.getStyleClone().disconnect(),Oe(_h,this,null),Te(dh,this)?.destroy(),Oe(dh,this,null),Se(wh,this,jh).call(this,e),Oe(ch,this,null))}function Bh(e){Te(hh,this).clear();for(let t of oh)Te(hh,this).set(t,e.getAttribute(t))}function zh(e){let t=[Te(hh,this).get("aria-controls"),Te(lh,this).id].filter(Boolean).join(" ");e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-controls",t),e.setAttribute("data-text-expander-input",""),"combobox"===e.getAttribute("role")&&e.removeAttribute("role"),e instanceof HTMLInputElement?e.setAttribute("aria-haspopup","listbox"):Se(wh,this,Uh).call(this,e,"aria-haspopup"),Se(wh,this,Uh).call(this,e,"aria-expanded")}function jh(e){for(let t of oh)Se(wh,this,Uh).call(this,e,t);Te(hh,this).clear()}function Uh(e,t){let i=Te(hh,this).get(t);null==i?e.removeAttribute(t):e.setAttribute(t,i)}function qh(){Se(wh,this,tu).call(this);let e=Se(wh,this,Wh).call(this);if(!e)return Oe(uh,this,null),void Se(wh,this,Xh).call(this);Oe(uh,this,e);let t=e.trigger.limit??8;if(e.trigger.options){this.loading=!1;let i=e.query.toLowerCase(),s=e.trigger.options.filter(e=>[e.label,...e.keywords??[]].some(e=>e.toLowerCase().includes(i))).slice(0,t);return void Se(wh,this,Gh).call(this,s)}this.loading=!0,Se(wh,this,Gh).call(this,[]),Se(wh,this,iu).call(this,ft("Loading"));let i=Te(mh,this);Oe(gh,this,setTimeout(()=>{Se(wh,this,Hh).call(this,e,t,i)},150))}async function Hh(e,t,i){let s;Oe(fh,this,new AbortController);try{let i=await Re.get(e.trigger.source,{params:{query:`${e.character}${e.query}`,limit:t},signal:Te(fh,this).signal});if(!Array.isArray(i.data))throw TypeError("Text expander sources must return an array.");s=i.data}catch(t){if(i!==Te(mh,this)||function(e){return e instanceof DOMException&&"AbortError"===e.name}(t))return;return Se(wh,this,Qh).call(this),void this.dispatchEvent(new CustomEvent("craft-text-expander-error",{bubbles:!0,composed:!0,detail:{character:e.character,query:e.query,error:t}}))}i===Te(mh,this)&&(this.loading=!1,Se(wh,this,Gh).call(this,s.slice(0,t)))}function Wh(){let e=Te(ch,this);if(!e||!e.isConnected||e.disabled||e.readOnly||!nu(e)||null===e.selectionStart||null===e.selectionEnd||e.selectionStart!==e.selectionEnd)return null;let t=e.selectionStart,i=e.value.slice(0,t),s=null;for(let[e,n]of Object.entries(this.triggers)){let o=i.lastIndexOf(e);if(-1===o||s&&o<=s.start)continue;let r=Array.from(i.slice(0,o)).at(-1),a=i.slice(o+e.length);(!r||/\s/u.test(r))&&sh.test(a)&&(s={character:e,query:a,start:o,end:t,trigger:n})}return s}function Gh(e){if(Se(wh,this,Zh).call(this),Oe(ph,this,e),Te(lh,this).replaceChildren(),Te(lh,this).hidden=this.loading,Te(lh,this).setAttribute("aria-label",Te(uh,this)?.trigger.label??nh),e.forEach((e,t)=>{let i=document.createElement("craft-option");i.id=`${Te(lh,this).id}-option-${t}`,i.setAttribute("part","option"),i.dataset.index=String(t),i.setAttribute("aria-label",e.label),i.append(Te(uh,this)?.trigger.renderOption?.(e)??document.createTextNode(e.label)),Te(lh,this).append(i)}),!this.loading&&!e.length)return Oe(uh,this,null),Se(wh,this,Xh).call(this),void Se(wh,this,iu).call(this,ft("No suggestions"));this.updateComplete.then(()=>{Te(uh,this)&&Se(wh,this,Yh).call(this)})}function Kh(e){let t=Te(ch,this),i=Te(ph,this)[e],s=Se(wh,this,Wh).call(this),n=Te(uh,this);if(!(t&&i&&n&&s&&s.start===n.start&&s.end===n.end&&s.character===n.character&&s.query===n.query))return void Se(wh,this,Qh).call(this);!function(e,t,i,s){e.maxLength>=0&&(s=s.slice(0,Math.max(0,e.maxLength-(e.value.length-(i-t)))));let n=`${e.value.slice(0,t)}${s}${e.value.slice(i)}`,o=!1,r=()=>{o=!0};e.focus({preventScroll:!0}),e.setSelectionRange(t,i),e.addEventListener("input",r,{once:!0});try{e.ownerDocument.execCommand?.("insertText",!1,s)}catch{}e.removeEventListener("input",r),e.value!==n&&(e.setRangeText(s,t,i,"end"),o=!1),o||e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,data:s,inputType:"insertReplacementText"}))}(t,n.start,n.end,i.value);let o={character:n.character,query:n.query,option:i};Se(wh,this,Qh).call(this),this.dispatchEvent(new CustomEvent("craft-text-expander-select",{bubbles:!0,composed:!0,detail:o}))}async function Yh(){await this.popoverElement.updateComplete;let e=Te(ch,this);e&&Se(wh,this,Jh).call(this)?(e.setAttribute("aria-busy",String(this.loading)),await this.popoverElement.show(),Te(uh,this)&&e===Te(ch,this)&&Te(ph,this).length&&(Te(dh,this)?.start(),Se(wh,this,Uh).call(this,e,"aria-expanded"),e.removeEventListener("input",Te(xh,this)),e.addEventListener("input",Te(xh,this)))):Se(wh,this,Qh).call(this)}function Zh(){Te(dh,this)?.stop(),Te(ch,this)&&Se(wh,this,Uh).call(this,Te(ch,this),"aria-expanded")}function Jh(){let e=Te(ch,this),t=e?.selectionStart;if(!e?.isConnected||null==t)return!1;if(!Te(_h,this)){Oe(_h,this,new th(e));let t=Te(_h,this).getStyleClone();t.element.parentElement.slot=e.slot,t.forceUpdate(),t.addEventListener("update",Te(Nh,this))}return Te(_h,this).setStartOffset(t),Te(_h,this).setEndOffset(t),Oe(yh,this,Te(_h,this).getBoundingClientRect()),this.popoverElement.repositionOverlay(),!0}function Qh(){Se(wh,this,tu).call(this),Oe(uh,this,null),Se(wh,this,Xh).call(this)}function Xh(){Se(wh,this,eu).call(this),this.popoverElement.hide()}function eu(){this.loading=!1,Se(wh,this,Zh).call(this),Oe(ph,this,[]),Te(lh,this)?.replaceChildren(),Te(lh,this)&&(Te(lh,this).hidden=!1);let e=Te(ch,this);e&&(Se(wh,this,Uh).call(this,e,"aria-activedescendant"),Se(wh,this,Uh).call(this,e,"aria-busy"))}function tu(){var e;Oe(mh,this,(e=Te(mh,this),++e)),Te(gh,this)&&(clearTimeout(Te(gh,this)),Oe(gh,this,null)),Te(fh,this)?.abort(),Oe(fh,this,null)}function iu(e){null!==Te(vh,this)&&(clearTimeout(Te(vh,this)),Oe(vh,this,null)),this.announcement="",queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),Oe(vh,this,setTimeout(()=>{Oe(vh,this,null),this.announcement=""},5e3))}function su(e){return e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&"text"===e.type}function nu(e){return e.getRootNode().activeElement===e}Ih.styles=[Si,ih],ge([_e({reflect:!0})],Ih.prototype,"for",void 0),ge([_e({type:Object})],Ih.prototype,"triggers",void 0),ge([ye()],Ih.prototype,"loading",void 0),ge([ye()],Ih.prototype,"announcement",void 0),ge([we("craft-popover")],Ih.prototype,"popoverElement",void 0),customElements.get("craft-text-expander")||customElements.define("craft-text-expander",Ih);var ou=r`
  :host {
    display: inline-flex;
    /* Allow the element to shrink below its content size in flex/grid layouts
       so the text actually truncates instead of forcing the container wider. */
    min-width: 0;
  }

  .truncate {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,ru=new WeakMap,au=new WeakSet,lu=class extends pe{constructor(...e){super(...e),Ae(this,au),this.placement="top",this.disabled=!1,this.overflowing=!1,this.text="",Ne(this,ru,typeof ResizeObserver<"u"?new ResizeObserver(()=>Se(au,this,cu).call(this)):null)}connectedCallback(){super.connectedCallback(),Te(ru,this)?.observe(this)}disconnectedCallback(){Te(ru,this)?.disconnect(),super.disconnectedCallback()}firstUpdated(){Se(au,this,cu).call(this)}render(){let e=this.overflowing&&!this.disabled;return H`
      <span class="truncate" id="content">
        <slot @slotchange=${Se(au,this,du)}></slot>
      </span>
      ${e?H`<craft-tooltip for="content" placement=${this.placement}
            >${this.text}</craft-tooltip
          >`:""}
    `}};function cu(){this.text=(this.textContent??"").replace(/\s+/g," ").trim();let e=this.content;this.overflowing=!!e&&e.scrollWidth>e.clientWidth}function du(){Se(au,this,cu).call(this)}lu.styles=ou,ge([_e({reflect:!0})],lu.prototype,"placement",void 0),ge([_e({type:Boolean,reflect:!0})],lu.prototype,"disabled",void 0),ge([ye()],lu.prototype,"overflowing",void 0),ge([ye()],lu.prototype,"text",void 0),ge([we(".truncate")],lu.prototype,"content",void 0),customElements.get("craft-truncate")||customElements.define("craft-truncate",lu);var hu=r`
  :host {
    /* Overall size of the thumbnail box. */
    --c-thumbnail-size: calc(34rem / 16);
    /* Corner radius applied when [rounded] is set. Defaults to a full circle. */
    --c-thumbnail-radius: var(--c-radius-full);
    /* Size of a single checker square. */
    --c-thumbnail-checker-size: 8px;
    /* Color of the checker squares. Matches the Craft 5 \`.thumb.checkered\` pattern. */
    --c-thumbnail-checker-color: hsl(211 13% 65% / 0.25);

    --_checker-half: calc(var(--c-thumbnail-checker-size) / 2);

    display: inline-flex;
  }

  .thumbnail {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--c-thumbnail-size);
    height: var(--c-thumbnail-size);
    overflow: clip;
    max-width: 100%;
    max-height: 100%;
  }

  .thumbnail__image,
  ::slotted(img),
  ::slotted(svg) {
    display: block;
    flex-shrink: 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  /* h/t https://gist.github.com/dfrankland/f6fed3e3ccc42e3de482b324126f9542 */
  .thumbnail--checkered .thumbnail__image,
  .thumbnail--checkered ::slotted(img) {
    background-image:
      linear-gradient(
        45deg,
        var(--c-thumbnail-checker-color) 25%,
        transparent 25%
      ),
      linear-gradient(
        135deg,
        var(--c-thumbnail-checker-color) 25%,
        transparent 25%
      ),
      linear-gradient(
        45deg,
        transparent 75%,
        var(--c-thumbnail-checker-color) 75%
      ),
      linear-gradient(
        135deg,
        transparent 75%,
        var(--c-thumbnail-checker-color) 75%
      );
    background-size: var(--c-thumbnail-checker-size)
      var(--c-thumbnail-checker-size);
    background-position:
      0 0,
      var(--_checker-half) 0,
      var(--_checker-half) calc(-1 * var(--_checker-half)),
      0 var(--_checker-half);
  }

  .thumbnail--rounded .thumbnail__image,
  .thumbnail--rounded ::slotted(img),
  .thumbnail--rounded ::slotted(svg) {
    border-radius: var(--c-thumbnail-radius);
  }
`,uu=class extends pe{constructor(...e){super(...e),this.src=null,this.srcset=null,this.sizes=null,this.alt="",this.width=null,this.height=null,this.loading="lazy",this.checkered=!0,this.rounded=!1}render(){return H`
      <div class="${Ge({thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded})}" part="thumbnail">
        ${this.src?H`<img
              class="thumbnail__image"
              part="image"
              src="${this.src}"
              srcset="${Ur(this.srcset??void 0)}"
              sizes="${Ur(this.sizes??void 0)}"
              width="${Ur(this.width??void 0)}"
              height="${Ur(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
            />`:Y}
        <slot></slot>
      </div>
    `}};uu.styles=[hu],ge([_e()],uu.prototype,"src",void 0),ge([_e()],uu.prototype,"srcset",void 0),ge([_e()],uu.prototype,"sizes",void 0),ge([_e()],uu.prototype,"alt",void 0),ge([_e({type:Number})],uu.prototype,"width",void 0),ge([_e({type:Number})],uu.prototype,"height",void 0),ge([_e()],uu.prototype,"loading",void 0),ge([_e({reflect:!0,converter:{fromAttribute:e=>null!==e&&"false"!==e,toAttribute:e=>e?"":null}})],uu.prototype,"checkered",void 0),ge([_e({type:Boolean,reflect:!0})],uu.prototype,"rounded",void 0),customElements.get("craft-thumbnail")||customElements.define("craft-thumbnail",uu);var pu=new WeakMap,mu=new WeakSet,fu=class extends HTMLElement{constructor(...e){super(...e),Ae(this,mu),Ne(this,pu,null)}connectedCallback(){Se(mu,this,gu).call(this)}disconnectedCallback(){Te(pu,this)?.destroy(),Oe(pu,this,null)}};function gu(){if(!Te(pu,this)&&this.isConnected){if(!this.querySelector("[data-sizes]"))return void requestAnimationFrame(()=>Se(mu,this,gu).call(this));Oe(pu,this,new xo),Te(pu,this).load(this)}}customElements.get("craft-thumbnail-loader")||customElements.define("craft-thumbnail-loader",fu);let vu=!1,bu=null;const _u=De.create({baseURL:"https://api.craftcms.com/v1/"});_u.interceptors.request.use(async e=>{let{cancelToken:t}=e,i=await async function(e){if(!vu){if(bu)return bu;vu=!0;try{return(await Re.post("app/api-headers",void 0,{cancelToken:e})).data}catch{}finally{vu=!1}}}(t);i&&Object.entries(i).forEach(([t,i])=>{e.headers.set(t,i)});let s={...e,params:{...Cp.apiParams||{},...e.params,v:(new Date).getTime()}};return i||(s.params.processCraftHeaders=1),Cp.httpProxy&&(s.proxy=Cp.httpProxy),s}),_u.interceptors.request.use(async function(e){return bu?Object.entries(bu).forEach(([t,i])=>{e.headers.set(t,i)}):(e.params=e.params||{},e.params.processCraftHeaders=1),e}),_u.interceptors.response.use(async function(e){return await async function(e,t){if(bu)return;let{data:i}=await Re.post("app/process-api-response-headers",{headers:e},{cancelToken:t});return bu=i,vu=!1,bu}(e.headers,e.config.cancelToken),e}),new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;var yu,ku=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)};const wu="undefined"!=typeof Intl&&Intl.ListFormat||class{formatToParts(e){const t=[];for(const i of e)t.push({type:"element",value:i}),t.push({type:"literal",value:", "});return t.slice(0,-1)}},xu=[["years","year"],["months","month"],["weeks","week"],["days","day"],["hours","hour"],["minutes","minute"],["seconds","second"],["milliseconds","millisecond"]],Eu={minimumIntegerDigits:2};class Cu{constructor(e,t={}){yu.set(this,void 0);let i=String(t.style||"short");"long"!==i&&"short"!==i&&"narrow"!==i&&"digital"!==i&&(i="short");let s="digital"===i?"numeric":i;const n=t.hours||s;s="2-digit"===n?"numeric":n;const o=t.minutes||s;s="2-digit"===o?"numeric":o;const r=t.seconds||s;s="2-digit"===r?"numeric":r;const a=t.milliseconds||s;!function(e,t,i,s,n){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===s?n.call(e,i):n?n.value=i:t.set(e,i)}(this,yu,{locale:e,style:i,years:t.years||"digital"===i?"short":i,yearsDisplay:"always"===t.yearsDisplay?"always":"auto",months:t.months||"digital"===i?"short":i,monthsDisplay:"always"===t.monthsDisplay?"always":"auto",weeks:t.weeks||"digital"===i?"short":i,weeksDisplay:"always"===t.weeksDisplay?"always":"auto",days:t.days||"digital"===i?"short":i,daysDisplay:"always"===t.daysDisplay?"always":"auto",hours:n,hoursDisplay:"always"===t.hoursDisplay||"digital"===i?"always":"auto",minutes:o,minutesDisplay:"always"===t.minutesDisplay||"digital"===i?"always":"auto",seconds:r,secondsDisplay:"always"===t.secondsDisplay||"digital"===i?"always":"auto",milliseconds:a,millisecondsDisplay:"always"===t.millisecondsDisplay?"always":"auto"},"f")}resolvedOptions(){return ku(this,yu,"f")}formatToParts(e){const t=[],i=ku(this,yu,"f"),s=i.style,n=i.locale;for(const[o,r]of xu){const a=e[o];if("auto"===i[`${o}Display`]&&!a)continue;const l=i[o],c="2-digit"===l?Eu:"numeric"===l?{}:{style:"unit",unit:r,unitDisplay:l};let d=new Intl.NumberFormat(n,c).format(a);"months"===o&&("narrow"===l||"narrow"===s&&d.endsWith("m"))&&(d=d.replace(/(\d+)m$/,"$1mo")),t.push(d)}return new wu(n,{type:"unit",style:"digital"===s?"short":s}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join("")}}yu=new WeakMap;const Su=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,Au=["year","month","week","day","hour","minute","second","millisecond"];class Nu{constructor(e=0,t=0,i=0,s=0,n=0,o=0,r=0,a=0){this.years=e,this.months=t,this.weeks=i,this.days=s,this.hours=n,this.minutes=o,this.seconds=r,this.milliseconds=a,this.years||(this.years=0),this.sign||(this.sign=Math.sign(this.years)),this.months||(this.months=0),this.sign||(this.sign=Math.sign(this.months)),this.weeks||(this.weeks=0),this.sign||(this.sign=Math.sign(this.weeks)),this.days||(this.days=0),this.sign||(this.sign=Math.sign(this.days)),this.hours||(this.hours=0),this.sign||(this.sign=Math.sign(this.hours)),this.minutes||(this.minutes=0),this.sign||(this.sign=Math.sign(this.minutes)),this.seconds||(this.seconds=0),this.sign||(this.sign=Math.sign(this.seconds)),this.milliseconds||(this.milliseconds=0),this.sign||(this.sign=Math.sign(this.milliseconds)),this.blank=0===this.sign}abs(){return new Nu(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(e){var t;if("string"==typeof e){const i=String(e).trim(),s=i.startsWith("-")?-1:1,n=null===(t=i.match(Su))||void 0===t?void 0:t.slice(1).map(e=>(Number(e)||0)*s);return n?new Nu(...n):new Nu}if("object"==typeof e){const{years:t,months:i,weeks:s,days:n,hours:o,minutes:r,seconds:a,milliseconds:l}=e;return new Nu(t,i,s,n,o,r,a,l)}throw new RangeError("invalid duration")}static compare(e,t){const i=Date.now(),s=Math.abs(Tu(i,Nu.from(e)).getTime()-i),n=Math.abs(Tu(i,Nu.from(t)).getTime()-i);return s>n?-1:s<n?1:0}toLocaleString(e,t){return new Cu(e,t).format(this)}}function Tu(e,t){const i=new Date(e);return t.sign<0?(i.setUTCSeconds(i.getUTCSeconds()+t.seconds),i.setUTCMinutes(i.getUTCMinutes()+t.minutes),i.setUTCHours(i.getUTCHours()+t.hours),i.setUTCDate(i.getUTCDate()+7*t.weeks+t.days),i.setUTCMonth(i.getUTCMonth()+t.months),i.setUTCFullYear(i.getUTCFullYear()+t.years)):(i.setUTCFullYear(i.getUTCFullYear()+t.years),i.setUTCMonth(i.getUTCMonth()+t.months),i.setUTCDate(i.getUTCDate()+7*t.weeks+t.days),i.setUTCHours(i.getUTCHours()+t.hours),i.setUTCMinutes(i.getUTCMinutes()+t.minutes),i.setUTCSeconds(i.getUTCSeconds()+t.seconds)),i}function Ou(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;const i=e.sign;let s=Math.abs(e.years),n=Math.abs(e.months),o=Math.abs(e.weeks),r=Math.abs(e.days),a=Math.abs(e.hours),l=Math.abs(e.minutes),c=Math.abs(e.seconds),d=Math.abs(e.milliseconds);d>=900&&(c+=Math.round(d/1e3)),(c||l||a||r||o||n||s)&&(d=0),c>=55&&(l+=Math.round(c/60)),(l||a||r||o||n||s)&&(c=0),l>=55&&(a+=Math.round(l/60)),(a||r||o||n||s)&&(l=0),r&&a>=12&&(r+=Math.round(a/24)),!r&&a>=21&&(r+=Math.round(a/24)),(r||o||n||s)&&(a=0);const h=t.getFullYear(),u=t.getMonth(),p=t.getDate();if(r>=27||s+n+r){const e=new Date(t);e.setDate(1),e.setMonth(u+n*i+1),e.setDate(0);const a=Math.max(0,p-e.getDate()),l=new Date(t);l.setFullYear(h+s*i),l.setDate(p-a),l.setMonth(u+n*i),l.setDate(p-a+r*i);const c=l.getFullYear()-t.getFullYear(),d=l.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(l)-Number(t))/864e5))+a,f=Math.abs(12*c+d);m<27?(r>=6?(o+=Math.round(r/7),r=0):r=m,n=s=0):f<=11?(n=f,s=0):(n=0,s=c*i),(n||s)&&(r=0)}return s&&(n=0),o>=4&&(n+=Math.round(o/4)),(n||s)&&(o=0),r&&o&&!n&&!s&&(o+=Math.round(r/7),r=0),new Nu(s*i,n*i,o*i,r*i,a*i,l*i,c*i,d*i)}var Lu,Mu,$u,Iu,Fu,Pu,Du,Vu,Ru,Bu,zu,ju,Uu,qu,Hu,Wu,Gu=function(e,t,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(e):s?s.value:t.get(e)},Ku=function(e,t,i,s,n){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!n)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?n.call(e,i):n?n.value=i:t.set(e,i),i};const Yu=globalThis.HTMLElement||null,Zu=new Nu,Ju=new Nu(0,0,0,0,0,1);class Qu extends Event{constructor(e,t,i,s){super("relative-time-updated",{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=i,this.newTitle=s}}function Xu(e){if(!e.date)return 1/0;if("duration"===e.format||"elapsed"===e.format){const t=e.precision;if("second"===t)return 1e3;if("minute"===t)return 6e4}const t=Math.abs(Date.now()-e.date.getTime());return t<6e4?1e3:t<36e5?6e4:36e5}const ep=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);const t=e.date;if(t&&t.getTime()){const t=Xu(e),i=Date.now()+t;i<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=i)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(const t of this.elements)e=Math.min(e,Xu(t)),t.update();this.time=Math.min(36e5,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}};class tp extends Yu{constructor(){super(...arguments),Lu.add(this),Mu.set(this,!1),$u.set(this,!1),Fu.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:"open"}):this),Wu.set(this,null)}static define(e="relative-time",t=customElements){return t.define(e,this),this}get timeZone(){var e;return(null===(e=this.closest("[time-zone]"))||void 0===e?void 0:e.getAttribute("time-zone"))||this.ownerDocument.documentElement.getAttribute("time-zone")||void 0}static get observedAttributes(){return["second","minute","hour","weekday","day","month","year","time-zone-name","prefix","threshold","tense","precision","format","format-style","no-title","datetime","lang","title","aria-hidden","time-zone"]}get onRelativeTimeUpdated(){return Gu(this,Wu,"f")}set onRelativeTimeUpdated(e){Gu(this,Wu,"f")&&this.removeEventListener("relative-time-updated",Gu(this,Wu,"f")),Ku(this,Wu,"object"==typeof e||"function"==typeof e?e:null,"f"),"function"==typeof e&&this.addEventListener("relative-time-updated",e)}get second(){const e=this.getAttribute("second");if("numeric"===e||"2-digit"===e)return e}set second(e){this.setAttribute("second",e||"")}get minute(){const e=this.getAttribute("minute");if("numeric"===e||"2-digit"===e)return e}set minute(e){this.setAttribute("minute",e||"")}get hour(){const e=this.getAttribute("hour");if("numeric"===e||"2-digit"===e)return e}set hour(e){this.setAttribute("hour",e||"")}get weekday(){const e=this.getAttribute("weekday");return"long"===e||"short"===e||"narrow"===e?e:"datetime"===this.format&&""!==e?this.formatStyle:void 0}set weekday(e){this.setAttribute("weekday",e||"")}get day(){var e;const t=null!==(e=this.getAttribute("day"))&&void 0!==e?e:"numeric";if("numeric"===t||"2-digit"===t)return t}set day(e){this.setAttribute("day",e||"")}get month(){const e=this.format;let t=this.getAttribute("month");if(""!==t)return null!=t||(t="datetime"===e?this.formatStyle:"short"),"numeric"===t||"2-digit"===t||"short"===t||"long"===t||"narrow"===t?t:void 0}set month(e){this.setAttribute("month",e||"")}get year(){var e;const t=this.getAttribute("year");return"numeric"===t||"2-digit"===t?t:this.hasAttribute("year")||(new Date).getUTCFullYear()===(null===(e=this.date)||void 0===e?void 0:e.getUTCFullYear())?void 0:"numeric"}set year(e){this.setAttribute("year",e||"")}get timeZoneName(){const e=this.getAttribute("time-zone-name");if("long"===e||"short"===e||"shortOffset"===e||"longOffset"===e||"shortGeneric"===e||"longGeneric"===e)return e}set timeZoneName(e){this.setAttribute("time-zone-name",e||"")}get prefix(){var e;return null!==(e=this.getAttribute("prefix"))&&void 0!==e?e:"datetime"===this.format?"":"on"}set prefix(e){this.setAttribute("prefix",e)}get threshold(){const e=this.getAttribute("threshold");return e&&(t=e,Su.test(t))?e:"P30D";var t}set threshold(e){this.setAttribute("threshold",e)}get tense(){const e=this.getAttribute("tense");return"past"===e?"past":"future"===e?"future":"auto"}set tense(e){this.setAttribute("tense",e)}get precision(){const e=this.getAttribute("precision");return Au.includes(e)?e:"micro"===this.format?"minute":"second"}set precision(e){this.setAttribute("precision",e)}get format(){const e=this.getAttribute("format");return"datetime"===e?"datetime":"relative"===e?"relative":"duration"===e?"duration":"micro"===e?"micro":"elapsed"===e?"elapsed":"auto"}set format(e){this.setAttribute("format",e)}get formatStyle(){const e=this.getAttribute("format-style");if("long"===e)return"long";if("short"===e)return"short";if("narrow"===e)return"narrow";const t=this.format;return"elapsed"===t||"micro"===t?"narrow":"datetime"===t?"short":"long"}set formatStyle(e){this.setAttribute("format-style",e)}get noTitle(){return this.hasAttribute("no-title")}set noTitle(e){this.toggleAttribute("no-title",e)}get datetime(){return this.getAttribute("datetime")||""}set datetime(e){this.setAttribute("datetime",e)}get date(){const e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=(null==e?void 0:e.toISOString())||""}connectedCallback(){this.update()}disconnectedCallback(){ep.unobserve(this)}attributeChangedCallback(e,t,i){t!==i&&("title"===e&&Ku(this,Mu,null!==i&&(this.date&&Gu(this,Lu,"m",Pu).call(this,this.date))!==i,"f"),Gu(this,$u,"f")||"title"===e&&Gu(this,Mu,"f")||Ku(this,$u,(async()=>{await Promise.resolve(),this.update(),Ku(this,$u,!1,"f")})(),"f"))}update(){const e=Gu(this,Fu,"f").textContent||this.textContent||"",t=this.getAttribute("title")||"";let i=t;const s=this.date;if("undefined"==typeof Intl||!Intl.DateTimeFormat||!s)return void(Gu(this,Fu,"f").textContent=e);const n=Date.now();Gu(this,Mu,"f")||(i=Gu(this,Lu,"m",Pu).call(this,s)||"",i&&!this.noTitle&&this.setAttribute("title",i));const o=function(e,t="second",i=Date.now()){const s=e.getTime()-i;if(0===s)return new Nu;const n=Math.sign(s),o=Math.abs(s),r=Math.floor(o/1e3),a=Math.floor(r/60),l=Math.floor(a/60),c=Math.floor(l/24),d=Math.floor(c/30),h=Math.floor(d/12),u=Au.indexOf(t)||Au.length;return new Nu(u>=0?h*n:0,u>=1?(d-12*h)*n:0,0,u>=3?(c-30*d)*n:0,u>=4?(l-24*c)*n:0,u>=5?(a-60*l)*n:0,u>=6?(r-60*a)*n:0,u>=7?(o-1e3*r)*n:0)}(s,this.precision,n),r=Gu(this,Lu,"m",Du).call(this,o);let a=e;const l=Gu(this,Lu,"m",Hu).call(this,r);a=l?Gu(this,Lu,"m",Uu).call(this,s):"duration"===r?Gu(this,Lu,"m",Vu).call(this,o):"relative"===r?Gu(this,Lu,"m",Ru).call(this,o):Gu(this,Lu,"m",Bu).call(this,s),a?Gu(this,Lu,"m",qu).call(this,a):this.shadowRoot===Gu(this,Fu,"f")&&this.textContent&&Gu(this,Lu,"m",qu).call(this,this.textContent),a===e&&i===t||this.dispatchEvent(new Qu(e,a,t,i)),"relative"===r||"duration"===r||l&&(Gu(this,Lu,"m",zu).call(this,s)||Gu(this,Lu,"m",ju).call(this,s))?ep.observe(this):ep.unobserve(this)}}Mu=new WeakMap,$u=new WeakMap,Fu=new WeakMap,Wu=new WeakMap,Lu=new WeakSet,Iu=function(){var e;const t=(null===(e=this.closest("[lang]"))||void 0===e?void 0:e.getAttribute("lang"))||this.ownerDocument.documentElement.getAttribute("lang");try{return new Intl.Locale(null!=t?t:"").toString()}catch(e){return"default"}},Pu=function(e){return new Intl.DateTimeFormat(Gu(this,Lu,"a",Iu),{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short",timeZone:this.timeZone}).format(e)},Du=function(e){const t=this.format;if("datetime"===t)return"datetime";if("duration"===t)return"duration";if("elapsed"===t)return"duration";if("micro"===t)return"duration";if(("auto"===t||"relative"===t)&&"undefined"!=typeof Intl&&Intl.RelativeTimeFormat){const t=this.tense;if("past"===t||"future"===t)return"relative";if(1===Nu.compare(e,this.threshold))return"relative"}return"datetime"},Vu=function(e){const t=Gu(this,Lu,"a",Iu),i=this.format,s=this.formatStyle,n=this.tense;let o=Zu;"micro"===i?(e=Ou(e),o=Ju,0===e.months&&("past"===this.tense&&-1!==e.sign||"future"===this.tense&&1!==e.sign)&&(e=Ju)):("past"===n&&-1!==e.sign||"future"===n&&1!==e.sign)&&(e=o);const r=`${this.precision}sDisplay`;return e.blank?o.toLocaleString(t,{style:s,[r]:"always"}):e.abs().toLocaleString(t,{style:s})},Ru=function(e){const t=new Intl.RelativeTimeFormat(Gu(this,Lu,"a",Iu),{numeric:"auto",style:this.formatStyle}),i=this.tense;"future"===i&&1!==e.sign&&(e=Zu),"past"===i&&-1!==e.sign&&(e=Zu);const[s,n]=function(e){const t=Ou(e,void 0);if(t.blank)return[0,"second"];for(const e of Au){if("millisecond"===e)continue;const i=t[`${e}s`];if(i)return[i,e]}return[0,"second"]}(e);return"second"===n&&s<10?t.format(0,"millisecond"===this.precision?"second":this.precision):t.format(s,n)},Bu=function(e){const t=new Intl.DateTimeFormat(Gu(this,Lu,"a",Iu),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},zu=function(e){const t=new Date,i=new Intl.DateTimeFormat(Gu(this,Lu,"a",Iu),{timeZone:this.timeZone,year:"numeric",month:"2-digit",day:"2-digit"});return i.format(t)===i.format(e)},ju=function(e){const t=new Date,i=new Intl.DateTimeFormat(Gu(this,Lu,"a",Iu),{timeZone:this.timeZone,year:"numeric"});return i.format(t)===i.format(e)},Uu=function(e){const t={hour:"numeric",minute:"2-digit",timeZoneName:"short",timeZone:this.timeZone};if(Gu(this,Lu,"m",zu).call(this,e)){let i=new Intl.RelativeTimeFormat(Gu(this,Lu,"a",Iu),{numeric:"auto"}).format(0,"day");return i=i.charAt(0).toLocaleUpperCase(Gu(this,Lu,"a",Iu))+i.slice(1),`${i} ${new Intl.DateTimeFormat(Gu(this,Lu,"a",Iu),t).format(e)}`}const i=Object.assign(Object.assign({},t),{day:"numeric",month:"short"});return Gu(this,Lu,"m",ju).call(this,e)?new Intl.DateTimeFormat(Gu(this,Lu,"a",Iu),i).format(e):new Intl.DateTimeFormat(Gu(this,Lu,"a",Iu),Object.assign(Object.assign({},i),{year:"numeric"})).format(e)},qu=function(e){if(this.hasAttribute("aria-hidden")&&"true"===this.getAttribute("aria-hidden")){const t=document.createElement("span");t.setAttribute("aria-hidden","true"),t.textContent=e,Gu(this,Fu,"f").replaceChildren(t)}else Gu(this,Fu,"f").textContent=e},Hu=function(e){var t;return"duration"!==e&&("true"===this.ownerDocument.documentElement.getAttribute("data-prefers-absolute-time")||"true"===(null===(t=this.ownerDocument.body)||void 0===t?void 0:t.getAttribute("data-prefers-absolute-time")))};const ip="undefined"!=typeof globalThis?globalThis:window;try{ip.RelativeTimeElement=tp.define()}catch(it){if(!(ip.DOMException&&it instanceof DOMException&&"NotSupportedError"===it.name||it instanceof ReferenceError))throw it}(()=>{const e="craft-legacy-html-control",t=["craft-legacy:html-field","craft-legacy:html"];class i extends HTMLElement{_control=null;_values=null;_scope=[];_refreshable=!1;_fragmentKey="";_disposers=[];_runId=0;_form=null;_error=null;_errors=[];set node(e){this.control=e?.control??null}set control(e){const t=e?.props?.fragment,i=t?`${t.headHtml??""}\0${t.html??""}\0${t.bodyHtml??""}`:"";if(i===this._fragmentKey)return this._control=e,s(this,e?.mode),void this.renderErrors();const o=n(this);o?this.invalidate(`Legacy HTML Control cannot replace a selected file [${o.name}].`):(this._control=e,this._fragmentKey=i,this.isConnected&&this.mount())}set values(e){this._values=e}set errors(e){this._errors=Array.isArray(e)?e:[],this.renderErrors()}set value(e){this._value=e}set scope(e){this._scope=e}set formScope(e){this._scope=e}set refreshable(e){this._refreshable=e}set formRefreshable(e){this._refreshable=e}connectedCallback(){this._form=this.closest("form"),this._form?.addEventListener("submit",this.handleSubmit,!0),this.addEventListener("input",this.handleInput),this.addEventListener("change",this.handleInput),this.mount()}disconnectedCallback(){this._form?.removeEventListener("submit",this.handleSubmit,!0),this.removeEventListener("input",this.handleInput),this.removeEventListener("change",this.handleInput),this._form=null,this._runId++,this.dispose()}handleInput=e=>{if(!(e instanceof CustomEvent))try{this.publish(function(e){const t=e.target;return t instanceof HTMLTextAreaElement?"input"===e.type:"input"===e.type&&t instanceof HTMLInputElement&&["text","email","url","tel","password","search"].includes(t.type)}(e)?"typing":"discrete")}catch(e){this.invalidate(e)}};handleSubmit=e=>{if(this._error)e.preventDefault();else try{this.publish("discrete")}catch(t){e.preventDefault(),this.invalidate(t)}};async mount(){const e=this._control?.props?.fragment,t=++this._runId;if(this.dispose(),this.clearError(),e)if("string"==typeof e.html&&"string"==typeof e.headHtml&&"string"==typeof e.bodyHtml)try{if(!await this.append(e.headHtml,document.head,t))return;if(!await this.append(e.html,this,t))return;if(!await this.append(e.bodyHtml,document.body,t))return;s(this,this._control?.mode),function(e,t){if(!t||"object"!=typeof t)return;const i=new Map;for(const s of function(e){return e.querySelectorAll("input[name], select[name], textarea[name]")}(e)){if(s.disabled)continue;const e=t[s.name],n=Array.isArray(e)?e.map(String):[String(e??"")];if(s instanceof HTMLInputElement&&["checkbox","radio"].includes(s.type)){s.checked=n.includes(s.value);continue}if(s instanceof HTMLSelectElement&&s.multiple){for(const e of s.options)e.selected=n.includes(e.value);continue}const o=i.get(s.name)??0;s.value=n[o]??n.at(-1)??"",i.set(s.name,o+1)}}(this,this.currentValue()),this.renderErrors(),window.Craft?.initUiElements?.(this)}catch(e){t===this._runId&&this.invalidate(e)}else this.invalidate("Legacy HTML Control received an invalid captured fragment.");else this.invalidate("Legacy HTML Control is missing its captured fragment.")}async append(e,t,i){if(!e)return!0;const s=await async function(e,t,i=!1){let s=[],n=[],o=()=>{for(let e of s)e.remove();n.forEach(e=>e())};if(!e)return o;let r=document.createElement("template");r.innerHTML=e.trim();try{for(let e of r.content.childNodes){let o=fo(e);if(o){let e=po.get(o.key);if(e){e.references++,n.push(()=>_o(o.key,e)),e.loaded&&await bo(e.loaded,i);continue}if(go(o))continue}let r=mo(e),a=o&&r instanceof HTMLScriptElement?vo(r,o.value):null;if(t.appendChild(r),o&&(r instanceof HTMLLinkElement||r instanceof HTMLScriptElement)){let e={node:r,loaded:a,references:1};po.set(o.key,e),n.push(()=>_o(o.key,e))}else s.push(r);a&&await bo(a,i)}return o}catch(e){throw o(),e}}(e,t,!0);return i!==this._runId?(s(),!1):(this._disposers.push(s),!0)}currentValue(){return this._value&&"object"==typeof this._value?this._value:(e=this._values,(this._control?.path??[]).reduce((e,t)=>e?.[t],e));var e}publish(e){const t=n(this);if(t)throw new Error(`Legacy HTML Control cannot submit selected file [${t.name}].`);const i=function(e){let t={};for(let[i,s]of function(e){let t=new URLSearchParams,i=e.querySelectorAll("input[name], select[name], textarea[name]");for(let e of i)if(!e.disabled&&(!(e instanceof HTMLInputElement)||!["file","submit","button","reset","image"].includes(e.type)&&("checkbox"!==e.type&&"radio"!==e.type||e.checked))){if(e instanceof HTMLSelectElement&&e.multiple){for(let i of e.selectedOptions)t.append(e.name,i.value);continue}t.append(e.name,e.value)}for(let i of e.querySelectorAll("*")){if(!i.tagName.includes("-"))continue;let e=i.name;if("string"!=typeof e||""===e||!0===i.disabled||i.querySelector("input[name], select[name], textarea[name]"))continue;if(ko(i.modelValue)){i.modelValue.checked&&t.append(e,String(i.modelValue.value??""));continue}let s=i.serializedValue??i.value;if(null!=s)if(Array.isArray(s))for(let i of s)t.append(e,String(i));else t.append(e,String(s))}return t}(e)){let e=t[i];void 0===e?t[i]=s:Array.isArray(e)?e.push(s):t[i]=[e,s]}return t}(this);this._values&&this._control?.path&&(this._control.props?.expandValues?(function(e,t){const i=[e],s=t.slice(0,-1).reduce((e,t)=>{const s=e?.[t];return i.push(s),s},e);s&&t.length&&delete s[t.at(-1)];for(let e=t.length-2;e>=0;e--){const s=i[e+1];if(!s||Object.keys(s).length)break;delete i[e][t[e]]}}(this._values,this._control.path),l(this._values,function(e){const t=Object.create(null);for(const[i,s]of Object.entries(e)){const e=o(i);for(const i of Array.isArray(s)?s:[s])r(t,e,i)}return a(t)}(i))):function(e,t,i){let s=e;t.forEach((e,n)=>{n!==t.length-1?(s[e]??={},s=s[e]):s[e]=i})}(this._values,this._control.path,i)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{kind:e,path:this._control?.path??[],scope:this._scope,refreshable:this._refreshable}}))}invalidate(e){this._error=e instanceof Error?e.message:String(e);let t=this.querySelector("[data-legacy-html-error]");t||(t=document.createElement("p"),t.dataset.legacyHtmlError="",t.setAttribute("role","alert"),this.appendChild(t)),t.textContent=this._error}clearError(){this._error=null,this.querySelector("[data-legacy-html-error]")?.remove()}renderErrors(){this.querySelector("[data-legacy-form-errors]")?.remove(),this.removeAttribute("aria-invalid");const e=this._control?.path??[],t=this._errors.flatMap(t=>{return i=t?.path,s=e,Array.isArray(i)&&i.length===s.length&&i.every((e,t)=>e===s[t])?t.messages??[]:[];var i,s});if(!t.length)return;const i=document.createElement("ul");i.dataset.legacyFormErrors="",i.className="error-list",i.setAttribute("role","alert"),t.forEach(e=>{const t=document.createElement("li");t.textContent=String(e),i.appendChild(t)}),this.setAttribute("aria-invalid","true"),this.appendChild(i)}dispose(){for(;this._disposers.length;)this._disposers.pop()?.()}}function s(e,t){"disabled"===t&&e.querySelectorAll("input, select, textarea, button").forEach(e=>e.disabled=!0)}function n(e){return Array.from(e.querySelectorAll('input[type="file"]')).map(e=>e.files?.[0]).find(Boolean)}function o(e){const t=[],i=/(^[^[]+)|\[([^\]]*)\]/g;let s,n=0;for(;s=i.exec(e);){const i=s[1]??s[2];if(["__proto__","constructor","prototype"].includes(i))throw new Error(`Legacy input [${e}] contains an unsafe path.`);t.push(t.length?i:i.replace(/[ .]/g,"_")),n+=s[0].length}if(!t.length||n!==e.length)throw new Error(`Legacy input [${e}] has an invalid name.`);return t}function r(e,t,i){let s=e;t.forEach((e,n)=>{const o=""===e?function(e){return Math.max(-1,...Object.keys(e).filter(e=>/^(0|[1-9]\d*)$/.test(e)).map(Number))+1}(s):e;n!==t.length-1?(s[o]&&"object"==typeof s[o]||(s[o]=Object.create(null)),s=s[o]):s[o]=i})}function a(e){if(!e||"object"!=typeof e)return e;const t=Object.entries(e).map(([e,t])=>[e,a(t)]),i=t.every(([e])=>/^(0|[1-9]\d*)$/.test(e));return t.length&&i&&t.every(([e],t)=>Number(e)===t)?t.map(([,e])=>e):Object.fromEntries(t)}function l(e,t){for(const[i,s]of Object.entries(t))s&&"object"==typeof s&&!Array.isArray(s)&&e[i]&&"object"==typeof e[i]&&!Array.isArray(e[i])?l(e[i],s):e[i]=s}function c(){return!!window.Cp?.$components&&(t.forEach(t=>window.Cp.$components.register(t,e)),!0)}customElements.get(e)||customElements.define(e,i),function(){if(c())return;let e=window.Cp;Object.defineProperty(window,"Cp",{configurable:!0,get(){return e},set(t){e=t,c()&&Object.defineProperty(window,"Cp",{configurable:!0,enumerable:!0,value:t,writable:!0})}})}()})()}()}();
//# sourceMappingURL=legacy-html-control.js.map