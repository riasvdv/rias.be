import{a as e,n as t,r as n,t as r,u as i}from"./decorators-lVTfPMaS.js";import{t as a}from"./custom-element-Bov83m9_.js";import"./cp-Ast2Gc3-.js";import{n as o}from"./translate.ts-C8WHLkly.js";import{c as s}from"./dist-DLpH304J.js";import{i as c,n as l,t as u}from"./wayfinder-Byp9MxZi.js";import{t as d}from"./decorate-B3KLIx2E.js";import{n as f}from"./useMessages-DJsyswND.js";import{t as p}from"./create-element-selector-modal-BxtxBDaR.js";import"./popover.ts-CGAekTEh.js";import{n as m,t as h}from"./pasted-files-sXZiRi67.js";import{t as g}from"./upload-client-CuNDC9zW.js";var _=Object.defineProperty,v=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t)_(e,n,{get:t[n],enumerable:!0})},b=(e,t,n)=>(v(e,typeof t==`symbol`?t:t+``,n),n),x=class{static resetLinkIndex(){this.linkIndex=0}static setCodeHighlighter(e){this.codeHighlighter=e}static setCustomSyntax(e){this.customSyntax=e}static applyCustomSyntax(e){return this.customSyntax?this.customSyntax(e):e}static escapeHtml(e){let t={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};return e.replace(/[&<>"']/g,e=>t[e])}static preserveIndentation(e,t){let n=t.match(/^(\s*)/)[1].replace(/ /g,`&nbsp;`);return e.replace(/^\s*/,n)}static parseHeader(e){return e.replace(/^(#{1,3})\s(.+)$/,(e,t,n)=>{let r=t.length;return n=this.parseInlineElements(n),`<h${r}><span class="syntax-marker">${t} </span>${n}</h${r}>`})}static parseHorizontalRule(e){return e.match(/^(-{3,}|\*{3,}|_{3,})$/)?`<div><span class="hr-marker">${e}</span></div>`:null}static parseBlockquote(e){return e.replace(/^&gt; (.+)$/,(e,t)=>`<span class="blockquote"><span class="syntax-marker">&gt;</span> ${t}</span>`)}static parseBulletList(e){return e.replace(/^((?:&nbsp;)*)([-*+])\s(.+)$/,(e,t,n,r)=>(r=this.parseInlineElements(r),`${t}<li class="bullet-list"><span class="syntax-marker">${n} </span>${r}</li>`))}static parseTaskList(e,t=!1){return e.replace(/^((?:&nbsp;)*)-(\s+)\[([ xX])\](\s*)(.*)$/,(e,n,r,i,a,o)=>(o=this.parseInlineElements(o),t?`${n}<li class="task-list"><input type="checkbox" ${i.toLowerCase()===`x`?`checked`:``}> ${o}</li>`:`${n}<li class="task-list"><span class="syntax-marker">-${r}[${i}]${a}</span>${o}</li>`))}static parseNumberedList(e){return e.replace(/^((?:&nbsp;)*)(\d+\.)\s(.+)$/,(e,t,n,r)=>(r=this.parseInlineElements(r),`${t}<li class="ordered-list"><span class="syntax-marker">${n} </span>${r}</li>`))}static parseCodeBlock(e){return/^`{3}[^`]*$/.test(e)?`<div><span class="code-fence">${e}</span></div>`:null}static parseBold(e){return e=e.replace(/\*\*(.+?)\*\*/g,`<strong><span class="syntax-marker">**</span>$1<span class="syntax-marker">**</span></strong>`),e=e.replace(/__(.+?)__/g,`<strong><span class="syntax-marker">__</span>$1<span class="syntax-marker">__</span></strong>`),e}static parseItalic(e){return e=e.replace(RegExp(`(?<![\\*>])\\*(?!\\*)(.+?)(?<!\\*)\\*(?!\\*)`,`g`),`<em><span class="syntax-marker">*</span>$1<span class="syntax-marker">*</span></em>`),e=e.replace(RegExp(`(?<=^|\\s)_(?!_)(.+?)(?<!_)_(?!_)(?=\\s|$)`,`g`),`<em><span class="syntax-marker">_</span>$1<span class="syntax-marker">_</span></em>`),e}static parseStrikethrough(e){return e=e.replace(RegExp(`(?<!~)~~(?!~)(.+?)(?<!~)~~(?!~)`,`g`),`<del><span class="syntax-marker">~~</span>$1<span class="syntax-marker">~~</span></del>`),e=e.replace(RegExp(`(?<!~)~(?!~)(.+?)(?<!~)~(?!~)`,`g`),`<del><span class="syntax-marker">~</span>$1<span class="syntax-marker">~</span></del>`),e}static parseInlineCode(e){return e.replace(RegExp("(?<!`)(`+)(?!`)((?:(?!\\1).)+?)(\\1)(?!`)",`g`),`<code><span class="syntax-marker">$1</span>$2<span class="syntax-marker">$3</span></code>`)}static sanitizeUrl(e){let t=e.trim(),n=t.toLowerCase(),r=[`http://`,`https://`,`mailto:`,`ftp://`,`ftps://`].some(e=>n.startsWith(e)),i=t.startsWith(`/`)||t.startsWith(`#`)||t.startsWith(`?`)||t.startsWith(`.`)||!t.includes(`:`)&&!t.includes(`//`);return r||i?e:`#`}static parseLinks(e){return e.replace(/\[(.+?)\]\((.+?)\)/g,(e,t,n)=>{let r=`--link-${this.linkIndex++}`;return`<a href="${this.sanitizeUrl(n)}" style="anchor-name: ${r}"><span class="syntax-marker">[</span>${t}<span class="syntax-marker url-part">](${n})</span></a>`})}static identifyAndProtectSanctuaries(e){let t=new Map,n=0,r=e,i=[],a=/\[([^\]]+)\]\(([^)]+)\)/g,o;for(;(o=a.exec(e))!==null;){let e=o.index+o[0].indexOf(`](`)+2,t=e+o[2].length;i.push({start:e,end:t})}let s=RegExp("(?<!`)(`+)(?!`)((?:(?!\\1).)+?)(\\1)(?!`)",`g`),c,l=[];for(;(c=s.exec(e))!==null;){let e=c.index,t=c.index+c[0].length;i.some(n=>e>=n.start&&t<=n.end)||l.push({match:c[0],index:c.index,openTicks:c[1],content:c[2],closeTicks:c[3]})}return l.sort((e,t)=>t.index-e.index),l.forEach(e=>{let i=`\uE000${n++}\uE001`;t.set(i,{type:`code`,original:e.match,openTicks:e.openTicks,content:e.content,closeTicks:e.closeTicks}),r=r.substring(0,e.index)+i+r.substring(e.index+e.match.length)}),r=r.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(e,r,i)=>{let a=`\uE000${n++}\uE001`;return t.set(a,{type:`link`,original:e,linkText:r,url:i}),a}),{protectedText:r,sanctuaries:t}}static restoreAndTransformSanctuaries(e,t){return Array.from(t.keys()).sort((t,n)=>e.indexOf(t)-e.indexOf(n)).forEach(n=>{let r=t.get(n),i;if(r.type===`code`)i=`<code><span class="syntax-marker">${r.openTicks}</span>${r.content}<span class="syntax-marker">${r.closeTicks}</span></code>`;else if(r.type===`link`){let e=r.linkText;t.forEach((t,n)=>{if(e.includes(n)&&t.type===`code`){let r=`<code><span class="syntax-marker">${t.openTicks}</span>${t.content}<span class="syntax-marker">${t.closeTicks}</span></code>`;e=e.replace(n,r)}}),e=this.parseStrikethrough(e),e=this.parseBold(e),e=this.parseItalic(e);let n=`--link-${this.linkIndex++}`;i=`<a href="${this.sanitizeUrl(r.url)}" style="anchor-name: ${n}"><span class="syntax-marker">[</span>${e}<span class="syntax-marker url-part">](${r.url})</span></a>`}e=e.replace(n,i)}),e}static parseInlineElements(e){let{protectedText:t,sanctuaries:n}=this.identifyAndProtectSanctuaries(e),r=t;return r=this.parseStrikethrough(r),r=this.parseBold(r),r=this.parseItalic(r),r=this.restoreAndTransformSanctuaries(r,n),r}static parseLine(e,t=!1){let n=this.escapeHtml(e);return n=this.preserveIndentation(n,e),this.parseHorizontalRule(n)||this.parseCodeBlock(n)||(n=this.parseHeader(n),n=this.parseBlockquote(n),n=this.parseTaskList(n,t),n=this.parseBulletList(n),n=this.parseNumberedList(n),!n.includes(`<li`)&&!n.includes(`<h`)&&(n=this.parseInlineElements(n)),n.trim()===``?`<div>&nbsp;</div>`:`<div>${n}</div>`)}static parse(e,t=-1,n=!1,r,i=!1){this.resetLinkIndex();let a=e.split(`
`),o=!1,s=a.map((e,r)=>{if(n&&r===t)return`<div class="raw-line">${this.escapeHtml(e)||`&nbsp;`}</div>`;if(/^```[^`]*$/.test(e))return o=!o,this.applyCustomSyntax(this.parseLine(e,i));if(o){let t=this.escapeHtml(e);return`<div>${this.preserveIndentation(t,e)||`&nbsp;`}</div>`}return this.applyCustomSyntax(this.parseLine(e,i))}).join(``);return this.postProcessHTML(s,r)}static postProcessHTML(e,t){if(typeof document>`u`||!document)return this.postProcessHTMLManual(e,t);let n=document.createElement(`div`);n.innerHTML=e;let r=null,i=null,a=null,o=!1,s=Array.from(n.children);for(let e=0;e<s.length;e++){let c=s[e];if(!c.parentNode)continue;let l=c.querySelector(`.code-fence`);if(l){let e=l.textContent;if(e.startsWith("```"))if(o){let e=t||this.codeHighlighter;if(a&&e&&a._codeContent)try{let t=e(a._codeContent,a._language||``);t&&typeof t.then==`function`?console.warn(`Async highlighters are not supported in parse() because it returns an HTML string. The caller creates new DOM elements from that string, breaking references to the elements we would update. Use synchronous highlighters only.`):t&&typeof t==`string`&&t.trim()&&(a._codeElement.innerHTML=t)}catch(e){console.warn(`Code highlighting failed:`,e)}o=!1,a=null;continue}else{o=!0,a=document.createElement(`pre`);let t=document.createElement(`code`);a.appendChild(t),a.className=`code-block`;let r=e.slice(3).trim();r&&(t.className=`language-${r}`),n.insertBefore(a,c.nextSibling),a._codeElement=t,a._language=r,a._codeContent=``;continue}}if(o&&a&&c.tagName===`DIV`&&!c.querySelector(`.code-fence`)){let e=a._codeElement||a.querySelector(`code`);a._codeContent.length>0&&(a._codeContent+=`
`);let t=c.textContent.replace(/\u00A0/g,` `);a._codeContent+=t,e.textContent.length>0&&(e.textContent+=`
`),e.textContent+=t,c.remove();continue}let u=null;if(c.tagName===`DIV`&&(u=c.querySelector(`li`)),u){let e=u.classList.contains(`bullet-list`),t=u.classList.contains(`ordered-list`);if(!e&&!t){r=null,i=null;continue}let a=e?`ul`:`ol`;(!r||i!==a)&&(r=document.createElement(a),n.insertBefore(r,c),i=a);let o=[];for(let e of c.childNodes)if(e.nodeType===3&&e.textContent.match(/^\u00A0+$/))o.push(e.cloneNode(!0));else if(e===u)break;o.forEach(e=>{u.insertBefore(e,u.firstChild)}),r.appendChild(u),c.remove()}else r=null,i=null}return n.innerHTML}static postProcessHTMLManual(e,t){let n=e;return n=n.replace(/((?:<div>(?:&nbsp;)*<li class="bullet-list">.*?<\/li><\/div>\s*)+)/gs,e=>{let t=e.match(/<div>(?:&nbsp;)*<li class="bullet-list">.*?<\/li><\/div>/gs)||[];return t.length>0?`<ul>`+t.map(e=>{let t=e.match(/<div>((?:&nbsp;)*)<li/),n=e.match(/<li class="bullet-list">.*?<\/li>/);if(t&&n){let e=t[1];return n[0].replace(/<li class="bullet-list">/,`<li class="bullet-list">${e}`)}return n?n[0]:``}).filter(Boolean).join(``)+`</ul>`:e}),n=n.replace(/((?:<div>(?:&nbsp;)*<li class="ordered-list">.*?<\/li><\/div>\s*)+)/gs,e=>{let t=e.match(/<div>(?:&nbsp;)*<li class="ordered-list">.*?<\/li><\/div>/gs)||[];return t.length>0?`<ol>`+t.map(e=>{let t=e.match(/<div>((?:&nbsp;)*)<li/),n=e.match(/<li class="ordered-list">.*?<\/li>/);if(t&&n){let e=t[1];return n[0].replace(/<li class="ordered-list">/,`<li class="ordered-list">${e}`)}return n?n[0]:``}).filter(Boolean).join(``)+`</ol>`:e}),n=n.replace(/<div><span class="code-fence">(```[^<]*)<\/span><\/div>(.*?)<div><span class="code-fence">(```)<\/span><\/div>/gs,(e,n,r,i)=>{let a=(r.match(/<div>(.*?)<\/div>/gs)||[]).map(e=>e.replace(/<div>(.*?)<\/div>/s,`$1`).replace(/&nbsp;/g,` `)).join(`
`),o=n.slice(3).trim(),s=o?` class="language-${o}"`:``,c=a,l=t||this.codeHighlighter;if(l)try{let e=l(a.replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`),o);e&&typeof e.then==`function`?console.warn(`Async highlighters are not supported in Node.js (non-DOM) context. Use synchronous highlighters for server-side rendering.`):e&&typeof e==`string`&&e.trim()&&(c=e)}catch(e){console.warn(`Code highlighting failed:`,e)}let u=`<div><span class="code-fence">${n}</span></div>`;return u+=`<pre class="code-block"><code${s}>${c}</code></pre>`,u+=`<div><span class="code-fence">${i}</span></div>`,u}),n}static getListContext(e,t){let n=e.split(`
`),r=0,i=0,a=0;for(let e=0;e<n.length;e++){let o=n[e].length;if(r+o>=t){i=e,a=r;break}r+=o+1}let o=n[i],s=a+o.length,c=o.match(this.LIST_PATTERNS.checkbox);if(c)return{inList:!0,listType:`checkbox`,indent:c[1],marker:`-`,checked:c[2]===`x`,content:c[3],lineStart:a,lineEnd:s,markerEndPos:a+c[1].length+c[2].length+5};let l=o.match(this.LIST_PATTERNS.bullet);if(l)return{inList:!0,listType:`bullet`,indent:l[1],marker:l[2],content:l[3],lineStart:a,lineEnd:s,markerEndPos:a+l[1].length+l[2].length+1};let u=o.match(this.LIST_PATTERNS.numbered);return u?{inList:!0,listType:`numbered`,indent:u[1],marker:parseInt(u[2]),content:u[3],lineStart:a,lineEnd:s,markerEndPos:a+u[1].length+u[2].length+2}:{inList:!1,listType:null,indent:``,marker:null,content:o,lineStart:a,lineEnd:s,markerEndPos:a}}static createNewListItem(e){switch(e.listType){case`bullet`:return`${e.indent}${e.marker} `;case`numbered`:return`${e.indent}${e.marker+1}. `;case`checkbox`:return`${e.indent}- [ ] `;default:return``}}static renumberLists(e){let t=e.split(`
`),n=new Map,r=!1;return t.map(e=>{let t=e.match(this.LIST_PATTERNS.numbered);if(t){let e=t[1],i=e.length,a=t[3];r||n.clear();let o=(n.get(i)||0)+1;n.set(i,o);for(let[e]of n)e>i&&n.delete(e);return r=!0,`${e}${o}. ${a}`}else return(e.trim()===``||!e.match(/^\s/))&&(r=!1,n.clear()),e}).join(`
`)}};b(x,`linkIndex`,0),b(x,`codeHighlighter`,null),b(x,`customSyntax`,null),b(x,`LIST_PATTERNS`,{bullet:/^(\s*)([-*+])\s+(.*)$/,numbered:/^(\s*)(\d+)\.\s+(.*)$/,checkbox:/^(\s*)-\s+\[([ x])\]\s+(.*)$/});var ee=class{constructor(e){this.editor=e}handleKeydown(e){if(!(navigator.platform.toLowerCase().includes(`mac`)?e.metaKey:e.ctrlKey))return!1;if(e.key===`]`)return e.preventDefault(),this.editor.indentSelection(),!0;if(e.key===`[`)return e.preventDefault(),this.editor.outdentSelection(),!0;let t=null;switch(e.key.toLowerCase()){case`b`:e.shiftKey||(t=`toggleBold`);break;case`i`:e.shiftKey||(t=`toggleItalic`);break;case`k`:e.shiftKey||(t=`insertLink`);break;case`7`:e.shiftKey&&(t=`toggleNumberedList`);break;case`8`:e.shiftKey&&(t=`toggleBulletList`);break}return t?(e.preventDefault(),this.editor.performAction(t,e),!0):!1}destroy(){}},S={name:`solar`,colors:{bgPrimary:`#faf0ca`,bgSecondary:`#ffffff`,text:`#0d3b66`,textPrimary:`#0d3b66`,textSecondary:`#5a7a9b`,h1:`#f95738`,h2:`#ee964b`,h3:`#3d8a51`,strong:`#ee964b`,em:`#f95738`,del:`#ee964b`,link:`#0d3b66`,code:`#0d3b66`,codeBg:`rgba(244, 211, 94, 0.4)`,blockquote:`#5a7a9b`,hr:`#5a7a9b`,syntaxMarker:`rgba(13, 59, 102, 0.52)`,syntax:`#999999`,cursor:`#f95738`,selection:`rgba(244, 211, 94, 0.4)`,listMarker:`#ee964b`,rawLine:`#5a7a9b`,border:`#e0e0e0`,hoverBg:`#f0f0f0`,primary:`#0d3b66`,toolbarBg:`#ffffff`,toolbarIcon:`#0d3b66`,toolbarHover:`#f5f5f5`,toolbarActive:`#faf0ca`,placeholder:`#999999`},previewColors:{text:`#0d3b66`,h1:`inherit`,h2:`inherit`,h3:`inherit`,strong:`inherit`,em:`inherit`,link:`#0d3b66`,code:`#0d3b66`,codeBg:`rgba(244, 211, 94, 0.4)`,blockquote:`#5a7a9b`,hr:`#5a7a9b`,bg:`transparent`}},C={name:`cave`,colors:{bgPrimary:`#141E26`,bgSecondary:`#1D2D3E`,text:`#c5dde8`,textPrimary:`#c5dde8`,textSecondary:`#9fcfec`,h1:`#d4a5ff`,h2:`#f6ae2d`,h3:`#9fcfec`,strong:`#f6ae2d`,em:`#9fcfec`,del:`#f6ae2d`,link:`#9fcfec`,code:`#c5dde8`,codeBg:`#1a232b`,blockquote:`#9fcfec`,hr:`#c5dde8`,syntaxMarker:`rgba(159, 207, 236, 0.73)`,syntax:`#7a8c98`,cursor:`#f26419`,selection:`rgba(51, 101, 138, 0.4)`,listMarker:`#f6ae2d`,rawLine:`#9fcfec`,border:`#2a3f52`,hoverBg:`#243546`,primary:`#9fcfec`,toolbarBg:`#1D2D3E`,toolbarIcon:`#c5dde8`,toolbarHover:`#243546`,toolbarActive:`#2a3f52`,placeholder:`#6a7a88`},previewColors:{text:`#c5dde8`,h1:`inherit`,h2:`inherit`,h3:`inherit`,strong:`inherit`,em:`inherit`,link:`#9fcfec`,code:`#c5dde8`,codeBg:`#1a232b`,blockquote:`#9fcfec`,hr:`#c5dde8`,bg:`transparent`}},w={solar:S,cave:C,auto:S,light:S,dark:C};function T(e){return typeof e==`string`?{...w[e]||w.solar,name:e}:e}function te(e){return e===`auto`?(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`))?.matches?`cave`:`solar`:e}function ne(e,t){let n=[];for(let[t,r]of Object.entries(e)){let e=t.replace(/([A-Z])/g,`-$1`).toLowerCase();n.push(`--${e}: ${r};`)}if(t)for(let[e,r]of Object.entries(t)){let t=e.replace(/([A-Z])/g,`-$1`).toLowerCase();n.push(`--preview-${t}-default: ${r};`)}return n.join(`
`)}function re(e,t={},n={}){return{...e,colors:{...e.colors,...t},previewColors:{...e.previewColors,...n}}}function ie(e={}){let{fontSize:t=`14px`,lineHeight:n=1.6,fontFamily:r=`"SF Mono", SFMono-Regular, Menlo, Monaco, "Cascadia Code", Consolas, "Roboto Mono", "Noto Sans Mono", "Droid Sans Mono", "Ubuntu Mono", "DejaVu Sans Mono", "Liberation Mono", "Courier New", Courier, monospace`,padding:i=`20px`,theme:a=null,mobile:o={}}=e,s=Object.keys(o).length>0?`
    @media (max-width: 640px) {
      .overtype-wrapper .overtype-input,
      .overtype-wrapper .overtype-preview {
        ${Object.entries(o).map(([e,t])=>`${e.replace(/([A-Z])/g,`-$1`).toLowerCase()}: ${t} !important;`).join(`
        `)}
      }
    }
  `:``,c=a&&a.colors?ne(a.colors,a.previewColors):``;return`
    /* OverType Editor Styles */
    
    /* Middle-ground CSS Reset - Prevent parent styles from leaking in */
    .overtype-container * {
      /* Box model - these commonly leak */
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      
      /* Layout - these can break our layout */
      /* Don't reset position - it breaks dropdowns */
      float: none !important;
      clear: none !important;
      
      /* Typography - only reset decorative aspects */
      text-decoration: none !important;
      text-transform: none !important;
      letter-spacing: normal !important;
      
      /* Visual effects that can interfere */
      box-shadow: none !important;
      text-shadow: none !important;
      
      /* Ensure box-sizing is consistent */
      box-sizing: border-box !important;
      
      /* Keep inheritance for these */
      /* font-family, color, line-height, font-size - inherit */
    }
    
    /* Container base styles after reset */
    .overtype-container {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      height: 100% !important;
      position: relative !important; /* Override reset - needed for absolute children */
      overflow: visible !important; /* Allow dropdown to overflow container */
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      text-align: left !important;
      ${c?`
      /* Theme Variables */
      ${c}`:``}
    }
    
    /* Force left alignment for all elements in the editor */
    .overtype-container .overtype-wrapper * {
      text-align: left !important;
    }
    
    /* Auto-resize mode styles */
    .overtype-container.overtype-auto-resize {
      height: auto !important;
    }

    .overtype-container.overtype-auto-resize .overtype-wrapper {
      flex: 0 0 auto !important; /* Don't grow/shrink, use explicit height */
      height: auto !important;
      min-height: 60px !important;
      overflow: visible !important;
    }
    
    .overtype-wrapper {
      position: relative !important; /* Override reset - needed for absolute children */
      width: 100% !important;
      flex: 1 1 0 !important; /* Grow to fill remaining space, with flex-basis: 0 */
      min-height: 60px !important; /* Minimum usable height */
      overflow: hidden !important;
      background: var(--bg-secondary, #ffffff) !important;
      z-index: 1; /* Below toolbar and dropdown */
    }

    /* Critical alignment styles - must be identical for both layers */
    .overtype-wrapper .overtype-input,
    .overtype-wrapper .overtype-preview {
      /* Positioning - must be identical */
      position: absolute !important; /* Override reset - required for overlay */
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;

      /* Font properties - any difference breaks alignment */
      font-family: var(--instance-font-family, ${r}) !important;
      font-variant-ligatures: none !important; /* keep metrics stable for code */
      font-size: var(--instance-font-size, ${t}) !important;
      line-height: var(--instance-line-height, ${n}) !important;
      font-weight: normal !important;
      font-style: normal !important;
      font-variant: normal !important;
      font-stretch: normal !important;
      font-kerning: none !important;
      font-feature-settings: normal !important;
      
      /* Box model - must match exactly */
      padding: var(--instance-padding, ${i}) !important;
      margin: 0 !important;
      border: none !important;
      outline: none !important;
      box-sizing: border-box !important;
      
      /* Text layout - critical for character positioning */
      white-space: pre-wrap !important;
      word-wrap: break-word !important;
      word-break: normal !important;
      overflow-wrap: break-word !important;
      tab-size: 2 !important;
      -moz-tab-size: 2 !important;
      text-align: left !important;
      text-indent: 0 !important;
      letter-spacing: normal !important;
      word-spacing: normal !important;
      
      /* Text rendering */
      text-transform: none !important;
      text-rendering: auto !important;
      -webkit-font-smoothing: auto !important;
      -webkit-text-size-adjust: 100% !important;
      
      /* Direction and writing */
      direction: ltr !important;
      writing-mode: horizontal-tb !important;
      unicode-bidi: normal !important;
      text-orientation: mixed !important;
      
      /* Visual effects that could shift perception */
      text-shadow: none !important;
      filter: none !important;
      transform: none !important;
      zoom: 1 !important;
      
      /* Vertical alignment */
      vertical-align: baseline !important;
      
      /* Size constraints */
      min-width: 0 !important;
      min-height: 0 !important;
      max-width: none !important;
      max-height: none !important;
      
      /* Overflow */
      overflow-y: auto !important;
      overflow-x: auto !important;
      /* overscroll-behavior removed to allow scroll-through to parent */
      scrollbar-width: auto !important;
      scrollbar-gutter: auto !important;
      
      /* Animation/transition - disabled to prevent movement */
      animation: none !important;
      transition: none !important;
    }

    /* Input layer styles */
    .overtype-wrapper .overtype-input {
      /* Layer positioning */
      z-index: 1 !important;
      
      /* Text visibility */
      color: transparent !important;
      caret-color: var(--cursor, #f95738) !important;
      background-color: transparent !important;
      
      /* Textarea-specific */
      resize: none !important;
      appearance: none !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      
      /* Prevent mobile zoom on focus */
      touch-action: manipulation !important;
      
      /* Disable autofill */
      autocomplete: off !important;
      autocorrect: off !important;
      autocapitalize: off !important;
    }

    .overtype-wrapper .overtype-input::selection {
      background-color: var(--selection, rgba(244, 211, 94, 0.4));
    }

    /* Placeholder shim - visible when textarea is empty */
    .overtype-wrapper .overtype-placeholder {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      z-index: 0 !important;
      pointer-events: none !important;
      user-select: none !important;
      font-family: var(--instance-font-family, ${r}) !important;
      font-size: var(--instance-font-size, ${t}) !important;
      line-height: var(--instance-line-height, ${n}) !important;
      padding: var(--instance-padding, ${i}) !important;
      box-sizing: border-box !important;
      color: var(--placeholder, #999) !important;
    }

    /* Preview layer styles */
    .overtype-wrapper .overtype-preview {
      /* Layer positioning */
      z-index: 0 !important;
      pointer-events: none !important;
      color: var(--text, #0d3b66) !important;
      background-color: transparent !important;
      
      /* Prevent text selection */
      user-select: none !important;
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
    }

    /* Prevent external resets (Tailwind, Bootstrap, etc.) from breaking alignment.
       Any element whose font metrics differ from the textarea causes the CSS "strut"
       to inflate line boxes, drifting the overlay. Force inheritance so every element
       inside the preview matches the textarea exactly. */
    .overtype-wrapper .overtype-preview * {
      font-family: inherit !important;
      font-size: inherit !important;
      line-height: inherit !important;
    }

    /* Defensive styles for preview child divs */
    .overtype-wrapper .overtype-preview div {
      /* Reset any inherited styles */
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
      text-align: left !important;
      text-indent: 0 !important;
      display: block !important;
      position: static !important;
      transform: none !important;
      min-height: 0 !important;
      max-height: none !important;
      line-height: inherit !important;
      font-size: inherit !important;
      font-family: inherit !important;
    }

    /* Markdown element styling - NO SIZE CHANGES */
    .overtype-wrapper .overtype-preview .header {
      font-weight: bold !important;
    }

    /* Header colors */
    .overtype-wrapper .overtype-preview .h1 { 
      color: var(--h1, #f95738) !important; 
    }
    .overtype-wrapper .overtype-preview .h2 { 
      color: var(--h2, #ee964b) !important; 
    }
    .overtype-wrapper .overtype-preview .h3 { 
      color: var(--h3, #3d8a51) !important; 
    }

    /* Semantic headers - flatten in edit mode */
    .overtype-wrapper .overtype-preview h1,
    .overtype-wrapper .overtype-preview h2,
    .overtype-wrapper .overtype-preview h3 {
      font-size: inherit !important;
      font-weight: bold !important;
      margin: 0 !important;
      padding: 0 !important;
      display: inline !important;
      line-height: inherit !important;
    }

    /* Header colors for semantic headers */
    .overtype-wrapper .overtype-preview h1 { 
      color: var(--h1, #f95738) !important; 
    }
    .overtype-wrapper .overtype-preview h2 { 
      color: var(--h2, #ee964b) !important; 
    }
    .overtype-wrapper .overtype-preview h3 { 
      color: var(--h3, #3d8a51) !important; 
    }

    /* Lists - remove styling in edit mode */
    .overtype-wrapper .overtype-preview ul,
    .overtype-wrapper .overtype-preview ol {
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
      display: block !important; /* Lists need to be block for line breaks */
    }

    .overtype-wrapper .overtype-preview li {
      display: block !important; /* Each item on its own line */
      margin: 0 !important;
      padding: 0 !important;
      /* Don't set list-style here - let ul/ol control it */
    }

    /* Bold text */
    .overtype-wrapper .overtype-preview strong {
      color: var(--strong, #ee964b) !important;
      font-weight: bold !important;
    }

    /* Italic text */
    .overtype-wrapper .overtype-preview em {
      color: var(--em, #f95738) !important;
      text-decoration-color: var(--em, #f95738) !important;
      text-decoration-thickness: 1px !important;
      font-style: italic !important;
    }

    /* Strikethrough text */
    .overtype-wrapper .overtype-preview del {
      color: var(--del, #ee964b) !important;
      text-decoration: line-through !important;
      text-decoration-color: var(--del, #ee964b) !important;
      text-decoration-thickness: 1px !important;
    }

    /* Inline code */
    .overtype-wrapper .overtype-preview code {
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
      color: var(--code, #0d3b66) !important;
      padding: 0 !important;
      border-radius: 2px !important;
      font-family: inherit !important;
      font-size: inherit !important;
      line-height: inherit !important;
      font-weight: normal !important;
    }

    /* Code blocks - consolidated pre blocks */
    .overtype-wrapper .overtype-preview pre {
      padding: 0 !important;
      margin: 0 !important;
      border-radius: 4px !important;
      overflow-x: auto !important;
    }
    
    /* Code block styling in normal mode - yellow background */
    .overtype-wrapper .overtype-preview pre.code-block {
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
      white-space: break-spaces !important; /* Prevent horizontal scrollbar that breaks alignment */
    }

    /* Code inside pre blocks - remove background */
    .overtype-wrapper .overtype-preview pre code {
      background: transparent !important;
      color: var(--code, #0d3b66) !important;
      font-family: var(--instance-font-family, ${r}) !important; /* Match textarea font exactly for alignment */
    }

    /* Blockquotes */
    .overtype-wrapper .overtype-preview .blockquote {
      color: var(--blockquote, #5a7a9b) !important;
      padding: 0 !important;
      margin: 0 !important;
      border: none !important;
    }

    /* Links */
    .overtype-wrapper .overtype-preview a {
      color: var(--link, #0d3b66) !important;
      text-decoration: underline !important;
      font-weight: normal !important;
    }

    .overtype-wrapper .overtype-preview a:hover {
      text-decoration: underline !important;
      color: var(--link, #0d3b66) !important;
    }

    /* Lists - no list styling */
    .overtype-wrapper .overtype-preview ul,
    .overtype-wrapper .overtype-preview ol {
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }


    /* Horizontal rules */
    .overtype-wrapper .overtype-preview hr {
      border: none !important;
      color: var(--hr, #5a7a9b) !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .overtype-wrapper .overtype-preview .hr-marker {
      color: var(--hr, #5a7a9b) !important;
      opacity: 0.6 !important;
    }

    /* Code fence markers - with background when not in code block */
    .overtype-wrapper .overtype-preview .code-fence {
      color: var(--code, #0d3b66) !important;
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
    }
    
    /* Code block lines - background for entire code block */
    .overtype-wrapper .overtype-preview .code-block-line {
      background: var(--code-bg, rgba(244, 211, 94, 0.4)) !important;
    }
    
    /* Remove background from code fence when inside code block line */
    .overtype-wrapper .overtype-preview .code-block-line .code-fence {
      background: transparent !important;
    }

    /* Raw markdown line */
    .overtype-wrapper .overtype-preview .raw-line {
      color: var(--raw-line, #5a7a9b) !important;
      font-style: normal !important;
      font-weight: normal !important;
    }

    /* Syntax markers */
    .overtype-wrapper .overtype-preview .syntax-marker {
      color: var(--syntax-marker, rgba(13, 59, 102, 0.52)) !important;
      opacity: 0.7 !important;
    }

    /* List markers */
    .overtype-wrapper .overtype-preview .list-marker {
      color: var(--list-marker, #ee964b) !important;
    }

    /* Stats bar */
    
    /* Stats bar - positioned by flexbox */
    .overtype-stats {
      height: 40px !important;
      padding: 0 20px !important;
      background: var(--bg-secondary, #f8f9fa) !important;
      border-top: 1px solid var(--border, #e0e0e0) !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      font-size: 0.85rem !important;
      color: var(--text-secondary, #666) !important;
      flex-shrink: 0 !important; /* Don't shrink */
      z-index: 10001 !important; /* Above link tooltip */
      position: relative !important; /* Enable z-index */
    }


    .overtype-stats .overtype-stat {
      display: flex !important;
      align-items: center !important;
      gap: 5px !important;
      white-space: nowrap !important;
    }
    
    .overtype-stats .live-dot {
      width: 8px !important;
      height: 8px !important;
      background: #4caf50 !important;
      border-radius: 50% !important;
      animation: overtype-pulse 2s infinite !important;
    }
    
    @keyframes overtype-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.2); }
    }
    

    /* Toolbar Styles */
    .overtype-toolbar.overtype-toolbar-hidden {
      display: none !important;
    }

    .overtype-toolbar {
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
      padding: 8px !important; /* Override reset */
      background: var(--toolbar-bg, var(--bg-primary, #f8f9fa)) !important; /* Override reset */
      border-bottom: 1px solid var(--toolbar-border, transparent) !important; /* Override reset */
      overflow-x: auto !important; /* Allow horizontal scrolling */
      overflow-y: hidden !important; /* Hide vertical overflow */
      -webkit-overflow-scrolling: touch !important;
      flex-shrink: 0 !important;
      height: auto !important;
      position: relative !important; /* Override reset */
      z-index: 100 !important; /* Ensure toolbar is above wrapper */
      scrollbar-width: thin; /* Thin scrollbar on Firefox */
    }
    
    /* Thin scrollbar styling */
    .overtype-toolbar::-webkit-scrollbar {
      height: 4px;
    }
    
    .overtype-toolbar::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .overtype-toolbar::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 2px;
    }

    .overtype-toolbar-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: var(--toolbar-icon, var(--text-secondary, #666));
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    .overtype-toolbar-button svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .overtype-toolbar-button:hover {
      background: var(--toolbar-hover, var(--bg-secondary, #e9ecef));
      color: var(--toolbar-icon, var(--text-primary, #333));
    }

    .overtype-toolbar-button:active {
      transform: scale(0.95);
    }

    .overtype-toolbar-button.active {
      background: var(--toolbar-active, var(--primary, #007bff));
      color: var(--toolbar-icon, var(--text-primary, #333));
    }

    .overtype-toolbar-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .overtype-toolbar-separator {
      width: 1px;
      height: 24px;
      background: var(--border, #e0e0e0);
      margin: 0 4px;
      flex-shrink: 0;
    }

    /* Adjust wrapper when toolbar is present */
    /* Mobile toolbar adjustments */
    @media (max-width: 640px) {
      .overtype-toolbar {
        padding: 6px;
        gap: 2px;
      }

      .overtype-toolbar-button {
        width: 36px;
        height: 36px;
      }

      .overtype-toolbar-separator {
        margin: 0 2px;
      }
    }
    
    /* Plain mode - hide preview and show textarea text */
    .overtype-container[data-mode="plain"] .overtype-preview {
      display: none !important;
    }
    
    .overtype-container[data-mode="plain"] .overtype-input {
      color: var(--text, #0d3b66) !important;
      /* Use system font stack for better plain text readability */
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                   "Helvetica Neue", Arial, sans-serif !important;
    }
    
    /* Ensure textarea remains transparent in overlay mode */
    .overtype-container:not([data-mode="plain"]) .overtype-input {
      color: transparent !important;
    }

    /* Dropdown menu styles */
    .overtype-toolbar-button {
      position: relative !important; /* Override reset - needed for dropdown */
    }

    .overtype-toolbar-button.dropdown-active {
      background: var(--toolbar-active, var(--hover-bg, #f0f0f0));
    }

    .overtype-dropdown-menu {
      position: fixed !important; /* Fixed positioning relative to viewport */
      background: var(--bg-secondary, white) !important; /* Override reset */
      border: 1px solid var(--border, #e0e0e0) !important; /* Override reset */
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important; /* Override reset */
      z-index: 10000; /* Very high z-index to ensure visibility */
      min-width: 150px;
      padding: 4px 0 !important; /* Override reset */
      /* Position will be set via JavaScript based on button position */
    }

    .overtype-dropdown-item {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px 12px;
      border: none;
      background: none;
      text-align: left;
      cursor: pointer;
      font-size: 14px;
      color: var(--text, #333);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .overtype-dropdown-item:hover {
      background: var(--hover-bg, #f0f0f0);
    }

    .overtype-dropdown-item.active {
      font-weight: 600;
    }

    .overtype-dropdown-check {
      width: 16px;
      margin-right: 8px;
      color: var(--h1, #007bff);
    }

    .overtype-dropdown-icon {
      width: 20px;
      margin-right: 8px;
      text-align: center;
    }

    /* Preview mode styles */
    .overtype-container[data-mode="preview"] .overtype-input {
      display: none !important;
    }

    .overtype-container[data-mode="preview"] .overtype-preview {
      pointer-events: auto !important;
      user-select: text !important;
      cursor: text !important;
    }

    .overtype-container.overtype-auto-resize[data-mode="preview"] .overtype-preview {
      position: static !important;
      height: auto !important;
    }

    /* Hide syntax markers in preview mode */
    .overtype-container[data-mode="preview"] .syntax-marker {
      display: none !important;
    }
    
    /* Hide URL part of links in preview mode - extra specificity */
    .overtype-container[data-mode="preview"] .syntax-marker.url-part,
    .overtype-container[data-mode="preview"] .url-part {
      display: none !important;
    }
    
    /* Hide all syntax markers inside links too */
    .overtype-container[data-mode="preview"] a .syntax-marker {
      display: none !important;
    }

    /* Headers - restore proper sizing in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h1,
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h2,
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h3 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      font-weight: 600 !important;
      margin: 0 !important;
      display: block !important;
      line-height: 1 !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h1 {
      font-size: 2em !important;
      color: var(--preview-h1, var(--preview-h1-default)) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h2 {
      font-size: 1.5em !important;
      color: var(--preview-h2, var(--preview-h2-default)) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview h3 {
      font-size: 1.17em !important;
      color: var(--preview-h3, var(--preview-h3-default)) !important;
    }

    /* Lists - restore list styling in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview ul {
      display: block !important;
      list-style: disc !important;
      padding-left: 2em !important;
      margin: 1em 0 !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview ol {
      display: block !important;
      list-style: decimal !important;
      padding-left: 2em !important;
      margin: 1em 0 !important;
    }
    
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview li {
      display: list-item !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Task list checkboxes - only in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview li.task-list {
      list-style: none !important;
      position: relative !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview li.task-list input[type="checkbox"] {
      margin-right: 0.5em !important;
      cursor: default !important;
      vertical-align: middle !important;
    }

    /* Task list in normal mode - keep syntax visible */
    .overtype-container:not([data-mode="preview"]) .overtype-wrapper .overtype-preview li.task-list {
      list-style: none !important;
    }

    .overtype-container:not([data-mode="preview"]) .overtype-wrapper .overtype-preview li.task-list .syntax-marker {
      color: var(--syntax, #999999) !important;
      font-weight: normal !important;
    }

    /* Links - make clickable in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview a {
      pointer-events: auto !important;
      cursor: pointer !important;
      color: var(--preview-link, var(--preview-link-default)) !important;
      text-decoration: underline !important;
    }

    /* Code blocks - proper pre/code styling in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview pre.code-block {
      background: var(--preview-code-bg, var(--preview-code-bg-default)) !important;
      color: var(--preview-code, var(--preview-code-default)) !important;
      padding: 1.2em !important;
      border-radius: 3px !important;
      overflow-x: auto !important;
      margin: 0 !important;
      display: block !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview pre.code-block code {
      background: transparent !important;
      color: inherit !important;
      padding: 0 !important;
      font-family: ${r} !important;
      font-size: 0.9em !important;
      line-height: 1.4 !important;
    }

    /* Hide old code block lines and fences in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .code-block-line {
      display: none !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .code-fence {
      display: none !important;
    }

    /* Blockquotes - enhanced styling in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .blockquote {
      display: block !important;
      border-left: 4px solid var(--preview-blockquote, var(--preview-blockquote-default)) !important;
      color: var(--preview-blockquote, var(--preview-blockquote-default)) !important;
      padding-left: 1em !important;
      margin: 1em 0 !important;
      font-style: italic !important;
    }

    /* Typography improvements in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview {
      font-family: Georgia, 'Times New Roman', serif !important;
      font-size: 16px !important;
      line-height: 1.8 !important;
      color: var(--preview-text, var(--preview-text-default)) !important;
      background: var(--preview-bg, var(--preview-bg-default)) !important;
    }

    /* Inline code in preview mode - keep monospace */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview code {
      font-family: ${r} !important;
      font-size: 0.9em !important;
      background: var(--preview-code-bg, var(--preview-code-bg-default)) !important;
      color: var(--preview-code, var(--preview-code-default)) !important;
      padding: 0.2em 0.4em !important;
      border-radius: 3px !important;
    }

    /* Strong and em elements in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview strong {
      font-weight: 700 !important;
      color: var(--preview-strong, var(--preview-strong-default)) !important;
    }

    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview em {
      font-style: italic !important;
      color: var(--preview-em, var(--preview-em-default)) !important;
    }

    /* HR in preview mode */
    .overtype-container[data-mode="preview"] .overtype-wrapper .overtype-preview .hr-marker {
      display: block !important;
      border-top: 2px solid var(--preview-hr, var(--preview-hr-default)) !important;
      text-indent: -9999px !important;
      height: 2px !important;
    }

    /* Link Tooltip */
    .overtype-link-tooltip {
      background: #333 !important;
      color: white !important;
      padding: 6px 10px !important;
      border-radius: 16px !important;
      font-size: 12px !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
      display: flex !important;
      visibility: hidden !important;
      pointer-events: none !important;
      z-index: 10000 !important;
      cursor: pointer !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
      max-width: 300px !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      position: fixed;
      top: 0;
      left: 0;
    }

    .overtype-link-tooltip.visible {
      visibility: visible !important;
      pointer-events: auto !important;
    }

    ${s}
  `}var ae={};y(ae,{applyCustomFormat:()=>$e,default:()=>et,expandSelection:()=>Qe,getActiveFormats:()=>Xe,getDebugMode:()=>he,hasFormat:()=>Ze,insertHeader:()=>Ke,insertLink:()=>Ve,preserveSelection:()=>Te,setDebugMode:()=>me,setUndoMethod:()=>ve,toggleBold:()=>Re,toggleBulletList:()=>He,toggleCode:()=>Be,toggleH1:()=>qe,toggleH2:()=>Je,toggleH3:()=>Ye,toggleItalic:()=>ze,toggleNumberedList:()=>Ue,toggleQuote:()=>We,toggleTaskList:()=>Ge});var oe=Object.defineProperty,se=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ue=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,de=(e,t)=>{for(var n in t||={})ce.call(t,n)&&ue(e,n,t[n]);if(se)for(var n of se(t))le.call(t,n)&&ue(e,n,t[n]);return e},E={bold:{prefix:`**`,suffix:`**`,trimFirst:!0},italic:{prefix:`_`,suffix:`_`,trimFirst:!0},code:{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"},link:{prefix:`[`,suffix:`](url)`,replaceNext:`url`,scanFor:`https?://`},bulletList:{prefix:`- `,multiline:!0,unorderedList:!0},numberedList:{prefix:`1. `,multiline:!0,orderedList:!0},quote:{prefix:`> `,multiline:!0,surroundWithNewlines:!0},taskList:{prefix:`- [ ] `,multiline:!0,surroundWithNewlines:!0},header1:{prefix:`# `},header2:{prefix:`## `},header3:{prefix:`### `},header4:{prefix:`#### `},header5:{prefix:`##### `},header6:{prefix:`###### `}};function fe(){return{prefix:``,suffix:``,blockPrefix:``,blockSuffix:``,multiline:!1,replaceNext:``,prefixSpace:!1,scanFor:``,surroundWithNewlines:!1,orderedList:!1,unorderedList:!1,trimFirst:!1}}function D(e){return de(de({},fe()),e)}var pe=!1;function me(e){pe=e}function he(){return pe}function O(e,t,n){pe&&(console.group(`\u{1F50D} ${e}`),console.log(t),n&&console.log(`Data:`,n),console.groupEnd())}function ge(e,t){if(!pe)return;let n=e.value.slice(e.selectionStart,e.selectionEnd);console.group(`\u{1F4CD} Selection: ${t}`),console.log(`Position:`,`${e.selectionStart}-${e.selectionEnd}`),console.log(`Selected text:`,JSON.stringify(n)),console.log(`Length:`,n.length);let r=e.value.slice(Math.max(0,e.selectionStart-10),e.selectionStart),i=e.value.slice(e.selectionEnd,Math.min(e.value.length,e.selectionEnd+10));console.log(`Context:`,JSON.stringify(r)+`[SELECTION]`+JSON.stringify(i)),console.groupEnd()}function _e(e){pe&&(console.group(`📝 Result`),console.log(`Text to insert:`,JSON.stringify(e.text)),console.log(`New selection:`,`${e.selectionStart}-${e.selectionEnd}`),console.groupEnd())}var k=null;function A(e,{text:t,selectionStart:n,selectionEnd:r}){let i=he();i&&(console.group(`🔧 insertText`),console.log(`Current selection:`,`${e.selectionStart}-${e.selectionEnd}`),console.log(`Text to insert:`,JSON.stringify(t)),console.log(`New selection to set:`,n,`-`,r)),e.focus();let a=e.selectionStart,o=e.selectionEnd,s=e.value.slice(0,a),c=e.value.slice(o);i&&(console.log(`Before text (last 20):`,JSON.stringify(s.slice(-20))),console.log(`After text (first 20):`,JSON.stringify(c.slice(0,20))),console.log(`Selected text being replaced:`,JSON.stringify(e.value.slice(a,o))));let l=e.value;if(k===null||k===!0){e.contentEditable=`true`;try{k=document.execCommand(`insertText`,!1,t),i&&console.log(`execCommand returned:`,k,`for text with`,t.split(`
`).length,`lines`)}catch(e){k=!1,i&&console.log(`execCommand threw error:`,e)}e.contentEditable=`false`}if(i&&(console.log(`canInsertText before:`,k),console.log(`execCommand result:`,k)),k){let n=s+t+c,r=e.value;i&&(console.log(`Expected length:`,n.length),console.log(`Actual length:`,r.length)),r!==n&&i&&(console.log(`execCommand changed the value but not as expected`),console.log(`Expected:`,JSON.stringify(n.slice(0,100))),console.log(`Actual:`,JSON.stringify(r.slice(0,100))))}if(!k)if(i&&console.log(`Using manual insertion`),e.value===l){i&&console.log(`Value unchanged, doing manual replacement`);try{document.execCommand(`ms-beginUndoUnit`)}catch{}e.value=s+t+c;try{document.execCommand(`ms-endUndoUnit`)}catch{}e.dispatchEvent(new CustomEvent(`input`,{bubbles:!0,cancelable:!0}))}else i&&console.log(`Value was changed by execCommand, skipping manual insertion`);i&&console.log(`Setting selection range:`,n,r),n!=null&&r!=null?e.setSelectionRange(n,r):e.setSelectionRange(a,e.selectionEnd),i&&(console.log(`Final value length:`,e.value.length),console.groupEnd())}function ve(e){switch(e){case`native`:k=!0;break;case`manual`:k=!1;break;case`auto`:k=null;break}}function ye(e){return e.trim().split(`
`).length>1}function be(e,t){let n=t;for(;e[n]&&e[n-1]!=null&&!e[n-1].match(/\s/);)n--;return n}function xe(e,t,n){let r=t,i=n?/\n/:/\s/;for(;e[r]&&!e[r].match(i);)r++;return r}function Se(e){let t=e.value.split(`
`),n=0;for(let r=0;r<t.length;r++){let i=t[r].length+1;e.selectionStart>=n&&e.selectionStart<n+i&&(e.selectionStart=n),e.selectionEnd>=n&&e.selectionEnd<n+i&&(r===t.length-1?e.selectionEnd=Math.min(n+t[r].length,e.value.length):e.selectionEnd=n+i-1),n+=i}}function Ce(e,t,n,r=!1){if(e.selectionStart===e.selectionEnd)e.selectionStart=be(e.value,e.selectionStart),e.selectionEnd=xe(e.value,e.selectionEnd,r);else{let r=e.selectionStart-t.length,i=e.selectionEnd+n.length,a=e.value.slice(r,e.selectionStart)===t,o=e.value.slice(e.selectionEnd,i)===n;a&&o&&(e.selectionStart=r,e.selectionEnd=i)}return e.value.slice(e.selectionStart,e.selectionEnd)}function we(e){let t=e.value.slice(0,e.selectionStart),n=e.value.slice(e.selectionEnd),r=t.match(/\n*$/),i=n.match(/^\n*/),a=r?r[0].length:0,o=i?i[0].length:0,s=``,c=``;return t.match(/\S/)&&a<2&&(s=`
`.repeat(2-a)),n.match(/\S/)&&o<2&&(c=`
`.repeat(2-o)),{newlinesToAppend:s,newlinesToPrepend:c}}function Te(e,t){let n=e.selectionStart,r=e.selectionEnd,i=e.scrollTop;t(),e.selectionStart=n,e.selectionEnd=r,e.scrollTop=i}function Ee(e,t,n={}){let r=e.selectionStart,i=e.selectionEnd,a=r===i,o=e.value,s=r;for(;s>0&&o[s-1]!==`
`;)s--;if(a){let t=r;for(;t<o.length&&o[t]!==`
`;)t++;e.selectionStart=s,e.selectionEnd=t}else Se(e);let c=t(e);if(n.adjustSelection){let t=e.value.slice(e.selectionStart,e.selectionEnd).startsWith(n.prefix),a=n.adjustSelection(t,r,i,s);c.selectionStart=a.start,c.selectionEnd=a.end}else if(n.prefix){let t=e.value.slice(e.selectionStart,e.selectionEnd).startsWith(n.prefix);a?t?(c.selectionStart=Math.max(r-n.prefix.length,s),c.selectionEnd=c.selectionStart):(c.selectionStart=r+n.prefix.length,c.selectionEnd=c.selectionStart):t?(c.selectionStart=Math.max(r-n.prefix.length,s),c.selectionEnd=Math.max(i-n.prefix.length,s)):(c.selectionStart=r+n.prefix.length,c.selectionEnd=i+n.prefix.length)}return c}function De(e,t){let n,r,{prefix:i,suffix:a,blockPrefix:o,blockSuffix:s,replaceNext:c,prefixSpace:l,scanFor:u,surroundWithNewlines:d,trimFirst:f}=t,p=e.selectionStart,m=e.selectionEnd,h=e.value.slice(e.selectionStart,e.selectionEnd),g=ye(h)&&o&&o.length>0?`${o}
`:i,_=ye(h)&&s&&s.length>0?`
${s}`:a;if(l){let t=e.value[e.selectionStart-1];e.selectionStart!==0&&t!=null&&!t.match(/\s/)&&(g=` ${g}`)}h=Ce(e,g,_,t.multiline);let v=e.selectionStart,y=e.selectionEnd,b=c&&c.length>0&&_.indexOf(c)>-1&&h.length>0;if(d){let t=we(e);n=t.newlinesToAppend,r=t.newlinesToPrepend,g=n+i,_+=r}if(h.startsWith(g)&&h.endsWith(_)){let e=h.slice(g.length,h.length-_.length);if(p===m){let t=p-g.length;t=Math.max(t,v),t=Math.min(t,v+e.length),v=y=t}else y=v+e.length;return{text:e,selectionStart:v,selectionEnd:y}}else if(!b){let e=g+h+_;v=p+g.length,y=m+g.length;let t=h.match(/^\s*|\s*$/g);if(f&&t){let n=t[0]||``,r=t[1]||``;e=n+g+h.trim()+_+r,v+=n.length,y-=r.length}return{text:e,selectionStart:v,selectionEnd:y}}else if(u&&u.length>0&&h.match(u)){_=_.replace(c,h);let e=g+_;return v=y=v+g.length,{text:e,selectionStart:v,selectionEnd:y}}else{let e=g+h+_;return v=v+g.length+h.length+_.indexOf(c),y=v+c.length,{text:e,selectionStart:v,selectionEnd:y}}}function Oe(e,t){let{prefix:n,suffix:r,surroundWithNewlines:i}=t,a=e.value.slice(e.selectionStart,e.selectionEnd),o=e.selectionStart,s=e.selectionEnd,c=a.split(`
`);if(c.every(e=>e.startsWith(n)&&(!r||e.endsWith(r))))a=c.map(e=>{let t=e.slice(n.length);return r&&(t=t.slice(0,t.length-r.length)),t}).join(`
`),s=o+a.length;else if(a=c.map(e=>n+e+(r||``)).join(`
`),i){let{newlinesToAppend:t,newlinesToPrepend:n}=we(e);o+=t.length,s=o+a.length,a=t+a+n}return{text:a,selectionStart:o,selectionEnd:s}}function ke(e){let t=e.split(`
`),n=/^\d+\.\s+/,r=t.every(e=>n.test(e)),i=t;return r&&(i=t.map(e=>e.replace(n,``))),{text:i.join(`
`),processed:r}}function Ae(e){let t=e.split(`
`),n=t.every(e=>e.startsWith(`- `)),r=t;return n&&(r=t.map(e=>e.slice(2))),{text:r.join(`
`),processed:n}}function je(e,t){return t?`- `:`${e+1}. `}function Me(e,t){let n,r,i;return e.orderedList?(n=ke(t),r=Ae(n.text),i=r.text):(n=Ae(t),r=ke(n.text),i=r.text),[n,r,i]}function Ne(e,t){let n=e.selectionStart===e.selectionEnd,r=e.selectionStart,i=e.selectionEnd;Se(e);let[a,o,s]=Me(t,e.value.slice(e.selectionStart,e.selectionEnd)),c=s.split(`
`).map((e,n)=>`${je(n,t.unorderedList)}${e}`),l=c.reduce((e,n,r)=>e+je(r,t.unorderedList).length,0),u=c.reduce((e,n,r)=>e+je(r,!t.unorderedList).length,0);if(a.processed)return n?(r=Math.max(r-je(0,t.unorderedList).length,0),i=r):(r=e.selectionStart,i=e.selectionEnd-l),{text:s,selectionStart:r,selectionEnd:i};let{newlinesToAppend:d,newlinesToPrepend:f}=we(e),p=d+c.join(`
`)+f;return n?(r=Math.max(r+je(0,t.unorderedList).length+d.length,0),i=r):o.processed?(r=Math.max(e.selectionStart+d.length,0),i=e.selectionEnd+d.length+l-u):(r=Math.max(e.selectionStart+d.length,0),i=e.selectionEnd+d.length+l),{text:p,selectionStart:r,selectionEnd:i}}function Pe(e,t){A(e,Ee(e,e=>Ne(e,t),{adjustSelection:(n,r,i,a)=>{let o=e.value.slice(a,e.selectionEnd),s=/^\d+\.\s+/,c=/^- /,l=s.test(o),u=c.test(o),d=t.orderedList&&l||t.unorderedList&&u;if(r===i)if(d){let e=o.match(t.orderedList?s:c),n=e?e[0].length:0;return{start:Math.max(r-n,a),end:Math.max(r-n,a)}}else if(l||u){let e=o.match(l?s:c),n=e?e[0].length:0,i=(t.unorderedList?2:3)-n;return{start:r+i,end:r+i}}else{let e=t.unorderedList?2:3;return{start:r+e,end:r+e}}else if(d){let e=o.match(t.orderedList?s:c),n=e?e[0].length:0;return{start:Math.max(r-n,a),end:Math.max(i-n,a)}}else if(l||u){let e=o.match(l?s:c),n=e?e[0].length:0,a=(t.unorderedList?2:3)-n;return{start:r+a,end:i+a}}else{let e=t.unorderedList?2:3;return{start:r+e,end:i+e}}}}))}function Fe(e){if(!e)return[];let t=[],{selectionStart:n,selectionEnd:r,value:i}=e,a=i.split(`
`),o=0,s=``;for(let e of a){if(n>=o&&n<=o+e.length){s=e;break}o+=e.length+1}s.startsWith(`- `)&&(s.startsWith(`- [ ] `)||s.startsWith(`- [x] `)?t.push(`task-list`):t.push(`bullet-list`)),/^\d+\.\s/.test(s)&&t.push(`numbered-list`),s.startsWith(`> `)&&t.push(`quote`),s.startsWith(`# `)&&t.push(`header`),s.startsWith(`## `)&&t.push(`header-2`),s.startsWith(`### `)&&t.push(`header-3`);let c=Math.max(0,n-10),l=Math.min(i.length,r+10),u=i.slice(c,l);if(u.includes(`**`)){let e=i.slice(Math.max(0,n-100),n),a=i.slice(r,Math.min(i.length,r+100)),o=e.lastIndexOf(`**`),s=a.indexOf(`**`);o!==-1&&s!==-1&&t.push(`bold`)}if(u.includes(`_`)){let e=i.slice(Math.max(0,n-100),n),a=i.slice(r,Math.min(i.length,r+100)),o=e.lastIndexOf(`_`),s=a.indexOf(`_`);o!==-1&&s!==-1&&t.push(`italic`)}if(u.includes("`")){let e=i.slice(Math.max(0,n-100),n),a=i.slice(r,Math.min(i.length,r+100));e.includes("`")&&a.includes("`")&&t.push(`code`)}if(u.includes(`[`)&&u.includes(`]`)){let e=i.slice(Math.max(0,n-100),n),a=i.slice(r,Math.min(i.length,r+100)),o=e.lastIndexOf(`[`),s=a.indexOf(`]`);o!==-1&&s!==-1&&i.slice(r+s+1,r+s+10).startsWith(`(`)&&t.push(`link`)}return t}function Ie(e,t){return Fe(e).includes(t)}function Le(e,t={}){if(!e)return;let{toWord:n,toLine:r,toFormat:i}=t,{selectionStart:a,selectionEnd:o,value:s}=e;if(r){let t=s.split(`
`),n=0,r=0,i=0;for(let e of t){if(a>=i&&a<=i+e.length){n=i,r=i+e.length;break}i+=e.length+1}e.selectionStart=n,e.selectionEnd=r}else if(n&&a===o){let t=a,n=o;for(;t>0&&!/\s/.test(s[t-1]);)t--;for(;n<s.length&&!/\s/.test(s[n]);)n++;e.selectionStart=t,e.selectionEnd=n}}function Re(e){if(!e||e.disabled||e.readOnly)return;O(`toggleBold`,`Starting`),ge(e,`Before`);let t=De(e,D(E.bold));_e(t),A(e,t),ge(e,`After`)}function ze(e){!e||e.disabled||e.readOnly||A(e,De(e,D(E.italic)))}function Be(e){!e||e.disabled||e.readOnly||A(e,De(e,D(E.code)))}function Ve(e,t={}){if(!e||e.disabled||e.readOnly)return;let n=e.value.slice(e.selectionStart,e.selectionEnd),r=D(E.link);if(n&&n.match(/^https?:\/\//)&&!t.url?(r.suffix=`](${n})`,r.replaceNext=``):t.url&&(r.suffix=`](${t.url})`,r.replaceNext=``),t.text&&!n){let n=e.selectionStart;e.value=e.value.slice(0,n)+t.text+e.value.slice(n),e.selectionStart=n,e.selectionEnd=n+t.text.length}A(e,De(e,r))}function He(e){!e||e.disabled||e.readOnly||Pe(e,D(E.bulletList))}function Ue(e){!e||e.disabled||e.readOnly||Pe(e,D(E.numberedList))}function We(e){if(!e||e.disabled||e.readOnly)return;O(`toggleQuote`,`Starting`),ge(e,`Initial`);let t=D(E.quote),n=Ee(e,e=>Oe(e,t),{prefix:t.prefix});_e(n),A(e,n),ge(e,`Final`)}function Ge(e){if(!e||e.disabled||e.readOnly)return;let t=D(E.taskList);A(e,Ee(e,e=>Oe(e,t),{prefix:t.prefix}))}function Ke(e,t=1,n=!1){if(!e||e.disabled||e.readOnly)return;(t<1||t>6)&&(t=1),O(`insertHeader`,`============ START ============`),O(`insertHeader`,`Level: ${t}, Toggle: ${n}`),O(`insertHeader`,`Initial cursor: ${e.selectionStart}-${e.selectionEnd}`);let r=D(E[`header${t===1?`1`:t}`]||E.header1);O(`insertHeader`,`Style prefix: "${r.prefix}"`);let i=e.value,a=e.selectionStart,o=e.selectionEnd,s=a;for(;s>0&&i[s-1]!==`
`;)s--;let c=o;for(;c<i.length&&i[c]!==`
`;)c++;let l=i.slice(s,c);O(`insertHeader`,`Current line (before): "${l}"`);let u=l.match(/^(#{1,6})\s*/),d=u?u[1].length:0,f=u?u[0].length:0;O(`insertHeader`,`Existing header check:`),O(`insertHeader`,`  - Match: ${u?`"${u[0]}"`:`none`}`),O(`insertHeader`,`  - Existing level: ${d}`),O(`insertHeader`,`  - Existing prefix length: ${f}`),O(`insertHeader`,`  - Target level: ${t}`);let p=n&&d===t;O(`insertHeader`,`Should toggle OFF: ${p} (toggle=${n}, existingLevel=${d}, level=${t})`);let m=Ee(e,e=>{let n=e.value.slice(e.selectionStart,e.selectionEnd);O(`insertHeader`,`Line in operation: "${n}"`);let i=n.replace(/^#{1,6}\s*/,``);O(`insertHeader`,`Cleaned line: "${i}"`);let a;return p?(O(`insertHeader`,`ACTION: Toggling OFF - removing header`),a=i):d>0?(O(`insertHeader`,`ACTION: Replacing H${d} with H${t}`),a=r.prefix+i):(O(`insertHeader`,`ACTION: Adding new header`),a=r.prefix+i),O(`insertHeader`,`New line: "${a}"`),{text:a,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd}},{prefix:r.prefix,adjustSelection:(e,t,n,i)=>{if(O(`insertHeader`,`Adjusting selection:`),O(`insertHeader`,`  - isRemoving param: ${e}`),O(`insertHeader`,`  - shouldToggleOff: ${p}`),O(`insertHeader`,`  - selStart: ${t}, selEnd: ${n}`),O(`insertHeader`,`  - lineStartPos: ${i}`),p){let e=Math.max(t-f,i);return O(`insertHeader`,`  - Removing header, adjusting by -${f}`),{start:e,end:t===n?e:Math.max(n-f,i)}}else if(f>0){let e=r.prefix.length-f;return O(`insertHeader`,`  - Replacing header, adjusting by ${e}`),{start:t+e,end:n+e}}else return O(`insertHeader`,`  - Adding header, adjusting by +${r.prefix.length}`),{start:t+r.prefix.length,end:n+r.prefix.length}}});O(`insertHeader`,`Final result: text="${m.text}", cursor=${m.selectionStart}-${m.selectionEnd}`),O(`insertHeader`,`============ END ============`),A(e,m)}function qe(e){Ke(e,1,!0)}function Je(e){Ke(e,2,!0)}function Ye(e){Ke(e,3,!0)}function Xe(e){return Fe(e)}function Ze(e,t){return Ie(e,t)}function Qe(e,t={}){Le(e,t)}function $e(e,t){if(!e||e.disabled||e.readOnly)return;let n=D(t),r;r=n.multiline&&ye(e.value.slice(e.selectionStart,e.selectionEnd))?Oe(e,n):De(e,n),A(e,r)}var et={toggleBold:Re,toggleItalic:ze,toggleCode:Be,insertLink:Ve,toggleBulletList:He,toggleNumberedList:Ue,toggleQuote:We,toggleTaskList:Ge,insertHeader:Ke,toggleH1:qe,toggleH2:Je,toggleH3:Ye,getActiveFormats:Xe,hasFormat:Ze,expandSelection:Qe,applyCustomFormat:$e,preserveSelection:Te,setUndoMethod:ve,setDebugMode:me,getDebugMode:he},tt=class{constructor(e,t={}){this.editor=e,this.container=null,this.buttons={},this.currentItemIndex=0,this.handleDocumentClick=null,this.activeDropdown=null,this.activeDropdownButton=null,this.toolbarButtons=t.toolbarButtons||[]}create(){this.container=document.createElement(`div`),this.container.className=`overtype-toolbar`,this.container.id=this.getInstanceElementId(`toolbar`),this.container.setAttribute(`role`,`toolbar`),this.container.setAttribute(`aria-label`,`Formatting toolbar`),this.container.setAttribute(`aria-controls`,this.editor.textarea.id),this.toolbarButtons.forEach(e=>{if(e.name===`separator`){let e=this.createSeparator();this.container.appendChild(e)}else{let t=this.createButton(e);this.buttons[e.name]=t,this.container.appendChild(t)}}),this.setupRovingTabIndex(),this.updateButtonStates(),this.editor.container.insertBefore(this.container,this.editor.wrapper)}getInstanceElementId(e){return`overtype-${this.editor.instanceId}-${e}`}setupRovingTabIndex(){this.getToolbarItems().length!==0&&(this.currentItemIndex=this.getValidItemIndex(this.currentItemIndex),this.updateTabIndexes(),this.container.addEventListener(`keydown`,e=>{this.onToolbarKeydown(e)}),this.container.addEventListener(`focusin`,e=>{this.onToolbarFocusin(e)}))}getToolbarItems(){return this.container?Array.from(this.container.querySelectorAll(`.overtype-toolbar-button`)):[]}onToolbarKeydown(e){let t=this.getToolbarItems();if(t.includes(e.target))switch(e.key){case`ArrowRight`:e.preventDefault(),this.focusItem(this.currentItemIndex+1);break;case`ArrowLeft`:e.preventDefault(),this.focusItem(this.currentItemIndex-1);break;case`Home`:e.preventDefault(),this.focusItem(0);break;case`End`:e.preventDefault(),this.focusItem(t.length-1);break}}onToolbarFocusin(e){let t=this.getToolbarItems().indexOf(e.target);t!==-1&&(this.currentItemIndex=t,this.updateTabIndexes())}focusItem(e){let t=this.getToolbarItems();t.length!==0&&(this.currentItemIndex=this.getValidItemIndex(e,t),this.updateTabIndexes(),t[this.currentItemIndex].focus())}getValidItemIndex(e,t=this.getToolbarItems()){let n=t.length;return n===0?0:e<0?n-1:e>=n?0:e}updateTabIndexes(){this.getToolbarItems().forEach((e,t)=>{e.tabIndex=t===this.currentItemIndex?0:-1})}createSeparator(){let e=document.createElement(`div`);return e.className=`overtype-toolbar-separator`,e.setAttribute(`role`,`separator`),e}createButton(e){let t=document.createElement(`button`);return t.className=`overtype-toolbar-button`,t.type=`button`,t.setAttribute(`data-button`,e.name),t.title=e.title||``,t.setAttribute(`aria-label`,e.title||e.name),t.innerHTML=this.sanitizeSVG(e.icon||``),e.name===`viewMode`?(t.classList.add(`has-dropdown`),t.dataset.dropdown=`true`,t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,`false`),t._clickHandler=e=>{e.preventDefault(),this.toggleViewModeDropdown(t)},t._keydownHandler=e=>{if(![`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(e.key))return;e.preventDefault();let n=e.key===`ArrowUp`?`last`:`current`;this.openViewModeDropdown(t,n)},t.addEventListener(`click`,t._clickHandler),t.addEventListener(`keydown`,t._keydownHandler),t):(t._clickHandler=t=>{t.preventDefault();let n=e.actionId||e.name;this.editor.performAction(n,t)},t.addEventListener(`click`,t._clickHandler),t)}async handleAction(e){if(e&&typeof e==`object`&&typeof e.action==`function`){this.editor.textarea.focus();try{return await e.action({editor:this.editor,getValue:()=>this.editor.getValue(),setValue:e=>this.editor.setValue(e),event:null}),!0}catch(t){return console.error(`Action "${e.name}" error:`,t),this.editor.wrapper.dispatchEvent(new CustomEvent(`button-error`,{detail:{buttonName:e.name,error:t}})),!1}}return typeof e==`string`&&this.editor.performAction(e,null)}sanitizeSVG(e){return typeof e==`string`?e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,``).replace(/\son\w+\s*=\s*["'][^"']*["']/gi,``).replace(/\son\w+\s*=\s*[^\s>]*/gi,``):``}toggleViewModeDropdown(e){if(this.activeDropdown){this.closeViewModeDropdown(e);return}this.openViewModeDropdown(e)}openViewModeDropdown(e,t=null){this.closeViewModeDropdown(e),e.classList.add(`dropdown-active`);let n=this.createViewModeDropdown(e),r=e.getBoundingClientRect();n.style.position=`absolute`,n.style.top=`${r.bottom+5}px`,n.style.left=`${r.left}px`,document.body.appendChild(n),this.activeDropdown=n,this.activeDropdownButton=e,e.setAttribute(`aria-controls`,n.id),e.setAttribute(`aria-expanded`,`true`),this.handleDocumentClick=t=>{!n.contains(t.target)&&!e.contains(t.target)&&this.closeViewModeDropdown(e)},setTimeout(()=>{document.addEventListener(`click`,this.handleDocumentClick)},0),t&&this.focusViewModeMenuItem(n,t)}closeViewModeDropdown(e=this.activeDropdownButton,t=!1){this.activeDropdown&&=(this.activeDropdown.remove(),null),e&&(e.classList.remove(`dropdown-active`),e.setAttribute(`aria-expanded`,`false`)),this.handleDocumentClick&&=(document.removeEventListener(`click`,this.handleDocumentClick),null),this.activeDropdownButton=null,t&&e&&e.focus()}createViewModeDropdown(e){let t=document.createElement(`div`);t.className=`overtype-dropdown-menu`,t.id=this.getInstanceElementId(`toolbar-view-mode-menu`),t.setAttribute(`role`,`menu`),t.setAttribute(`aria-label`,`View mode`),t.addEventListener(`keydown`,t=>{this.onViewModeMenuKeydown(t,e)});let n=[{id:`normal`,label:`Normal Edit`,icon:`✓`},{id:`plain`,label:`Plain Textarea`,icon:`✓`},{id:`preview`,label:`Preview Mode`,icon:`✓`}],r=this.editor.container.dataset.mode||`normal`;return n.forEach(n=>{let i=document.createElement(`button`);if(i.className=`overtype-dropdown-item`,i.type=`button`,i.tabIndex=-1,i.setAttribute(`role`,`menuitemradio`),i.setAttribute(`aria-checked`,String(n.id===r)),i.textContent=n.label,n.id===r){i.classList.add(`active`);let e=document.createElement(`span`);e.className=`overtype-dropdown-icon`,e.setAttribute(`aria-hidden`,`true`),e.textContent=n.icon,i.prepend(e)}i.addEventListener(`click`,t=>{switch(t.preventDefault(),n.id){case`plain`:this.editor.showPlainTextarea();break;case`preview`:this.editor.showPreviewMode();break;default:this.editor.showNormalEditMode();break}this.closeViewModeDropdown(e,!0)}),t.appendChild(i)}),t}onViewModeMenuKeydown(e,t){let n=this.getViewModeMenuItems().indexOf(e.target);if(n!==-1)switch(e.key){case`ArrowDown`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,n+1);break;case`ArrowUp`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,n-1);break;case`Home`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,`first`);break;case`End`:e.preventDefault(),this.focusViewModeMenuItem(this.activeDropdown,`last`);break;case`Escape`:e.preventDefault(),this.closeViewModeDropdown(t,!0);break}}focusViewModeMenuItem(e,t){let n=this.getViewModeMenuItems(e);if(n.length===0)return;let r=t;t===`first`?r=0:t===`last`?r=n.length-1:t===`current`&&(r=n.findIndex(e=>e.getAttribute(`aria-checked`)===`true`)),r<0&&(r=n.length-1),r>=n.length&&(r=0),n[r].focus()}getViewModeMenuItems(e=this.activeDropdown){return e?Array.from(e.querySelectorAll(`[role="menuitemradio"]`)):[]}updateButtonStates(){try{let e=Xe?.(this.editor.textarea,this.editor.textarea.selectionStart)||[];Object.entries(this.buttons).forEach(([t,n])=>{if(t===`viewMode`)return;let r=this.toolbarButtons.find(e=>e.name===t);if(!r?.isActive)return;let i=!!r.isActive({editor:this.editor,activeFormats:e});n.classList.toggle(`active`,i),n.setAttribute(`aria-pressed`,i.toString())})}catch{}}show(){this.container&&this.container.classList.remove(`overtype-toolbar-hidden`)}hide(){this.container&&this.container.classList.add(`overtype-toolbar-hidden`)}destroy(){this.container&&(this.activeDropdown?this.closeViewModeDropdown():this.handleDocumentClick&&=(document.removeEventListener(`click`,this.handleDocumentClick),null),Object.values(this.buttons).forEach(e=>{e._clickHandler&&(e.removeEventListener(`click`,e._clickHandler),delete e._clickHandler),e._keydownHandler&&(e.removeEventListener(`keydown`,e._keydownHandler),delete e._keydownHandler)}),this.container.remove(),this.container=null,this.buttons={})}},nt=Math.min,j=Math.max,rt=Math.round,M=e=>({x:e,y:e}),it={left:`right`,right:`left`,bottom:`top`,top:`bottom`},at={start:`end`,end:`start`};function ot(e,t,n){return j(e,nt(t,n))}function st(e,t){return typeof e==`function`?e(t):e}function N(e){return e.split(`-`)[0]}function ct(e){return e.split(`-`)[1]}function lt(e){return e===`x`?`y`:`x`}function ut(e){return e===`y`?`height`:`width`}var dt=new Set([`top`,`bottom`]);function P(e){return dt.has(N(e))?`y`:`x`}function ft(e){return lt(P(e))}function pt(e,t,n){n===void 0&&(n=!1);let r=ct(e),i=ft(e),a=ut(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=St(o)),[o,St(o)]}function mt(e){let t=St(e);return[ht(e),t,ht(t)]}function ht(e){return e.replace(/start|end/g,e=>at[e])}var gt=[`left`,`right`],_t=[`right`,`left`],vt=[`top`,`bottom`],yt=[`bottom`,`top`];function bt(e,t,n){switch(e){case`top`:case`bottom`:return n?t?_t:gt:t?gt:_t;case`left`:case`right`:return t?vt:yt;default:return[]}}function xt(e,t,n,r){let i=ct(e),a=bt(N(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(ht)))),a}function St(e){return e.replace(/left|right|bottom|top/g,e=>it[e])}function Ct(e){return{top:0,right:0,bottom:0,left:0,...e}}function wt(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Ct(e)}function Tt(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Et(e,t,n){let{reference:r,floating:i}=e,a=P(t),o=ft(t),s=ut(o),c=N(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(ct(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function Dt(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=st(t,e),p=wt(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Tt(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Tt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Ot=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Et(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:{...o,detectOverflow:o.detectOverflow??Dt},elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=Et(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},kt=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=st(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=N(r),_=P(o),v=N(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[St(o)]:mt(o)),x=p!==`none`;!d&&x&&b.push(...xt(o,m,p,y));let ee=[o,...b],S=await s.detectOverflow(t,h),C=[],w=i.flip?.overflows||[];if(l&&C.push(S[g]),u){let e=pt(r,a,y);C.push(S[e[0]],S[e[1]])}if(w=[...w,{placement:r,overflows:C}],!C.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===P(t)||w.every(e=>P(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:w},reset:{placement:t}};let n=w.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=w.filter(e=>{if(x){let t=P(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},At=new Set([`left`,`top`]);async function jt(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=N(n),s=ct(n),c=P(n)===`y`,l=At.has(o)?-1:1,u=a&&c?-1:1,d=st(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Mt=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await jt(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Nt=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=st(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=P(N(i)),p=lt(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=ot(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=ot(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}};function Pt(){return typeof window<`u`}function F(e){return Ft(e)?(e.nodeName||``).toLowerCase():`#document`}function I(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function L(e){return((Ft(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Ft(e){return Pt()?e instanceof Node||e instanceof I(e).Node:!1}function R(e){return Pt()?e instanceof Element||e instanceof I(e).Element:!1}function z(e){return Pt()?e instanceof HTMLElement||e instanceof I(e).HTMLElement:!1}function It(e){return!Pt()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof I(e).ShadowRoot}var Lt=new Set([`inline`,`contents`]);function Rt(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=V(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Lt.has(i)}var zt=new Set([`table`,`td`,`th`]);function Bt(e){return zt.has(F(e))}var Vt=[`:popover-open`,`:modal`];function Ht(e){return Vt.some(t=>{try{return e.matches(t)}catch{return!1}})}var Ut=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Wt=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Gt=[`paint`,`layout`,`strict`,`content`];function Kt(e){let t=Jt(),n=R(e)?V(e):e;return Ut.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Wt.some(e=>(n.willChange||``).includes(e))||Gt.some(e=>(n.contain||``).includes(e))}function qt(e){let t=H(e);for(;z(t)&&!B(t);){if(Kt(t))return t;if(Ht(t))return null;t=H(t)}return null}function Jt(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}var Yt=new Set([`html`,`body`,`#document`]);function B(e){return Yt.has(F(e))}function V(e){return I(e).getComputedStyle(e)}function Xt(e){return R(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function H(e){if(F(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||It(e)&&e.host||L(e);return It(t)?t.host:t}function Zt(e){let t=H(e);return B(t)?e.ownerDocument?e.ownerDocument.body:e.body:z(t)&&Rt(t)?t:Zt(t)}function Qt(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Zt(e),i=r===e.ownerDocument?.body,a=I(r);if(i){let e=$t(a);return t.concat(a,a.visualViewport||[],Rt(r)?r:[],e&&n?Qt(e):[])}return t.concat(r,Qt(r,[],n))}function $t(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function en(e){let t=V(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=z(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=rt(n)!==a||rt(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function tn(e){return R(e)?e:e.contextElement}function U(e){let t=tn(e);if(!z(t))return M(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=en(t),o=(a?rt(n.width):n.width)/r,s=(a?rt(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var nn=M(0);function rn(e){let t=I(e);return!Jt()||!t.visualViewport?nn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function an(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==I(e)?!1:t}function on(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=tn(e),o=M(1);t&&(r?R(r)&&(o=U(r)):o=U(e));let s=an(a,n,r)?rn(a):M(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=I(a),t=r&&R(r)?I(r):r,n=e,i=$t(n);for(;i&&r&&t!==n;){let e=U(i),t=i.getBoundingClientRect(),r=V(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=I(i),i=$t(n)}}return Tt({width:u,height:d,x:c,y:l})}function sn(e,t){let n=Xt(e).scrollLeft;return t?t.left+n:on(L(e)).left+n}function cn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-sn(e,n),y:n.top+t.scrollTop}}function ln(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=L(r),s=t?Ht(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=M(1),u=M(0),d=z(r);if((d||!d&&!a)&&((F(r)!==`body`||Rt(o))&&(c=Xt(r)),z(r))){let e=on(r);l=U(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?cn(o,c):M(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function un(e){return Array.from(e.getClientRects())}function dn(e){let t=L(e),n=Xt(e),r=e.ownerDocument.body,i=j(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=j(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+sn(e),s=-n.scrollTop;return V(r).direction===`rtl`&&(o+=j(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var fn=25;function pn(e,t){let n=I(e),r=L(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Jt();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=sn(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=fn&&(a-=o)}else l<=fn&&(a+=l);return{width:a,height:o,x:s,y:c}}var mn=new Set([`absolute`,`fixed`]);function hn(e,t){let n=on(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=z(e)?U(e):M(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function gn(e,t,n){let r;if(t===`viewport`)r=pn(e,n);else if(t===`document`)r=dn(L(e));else if(R(t))r=hn(t,n);else{let n=rn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Tt(r)}function _n(e,t){let n=H(e);return n===t||!R(n)||B(n)?!1:V(n).position===`fixed`||_n(n,t)}function vn(e,t){let n=t.get(e);if(n)return n;let r=Qt(e,[],!1).filter(e=>R(e)&&F(e)!==`body`),i=null,a=V(e).position===`fixed`,o=a?H(e):e;for(;R(o)&&!B(o);){let t=V(o),n=Kt(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&mn.has(i.position)||Rt(o)&&!n&&_n(e,o))?r=r.filter(e=>e!==o):i=t,o=H(o)}return t.set(e,r),r}function yn(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ht(t)?[]:vn(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=gn(t,n,i);return e.top=j(r.top,e.top),e.right=nt(r.right,e.right),e.bottom=nt(r.bottom,e.bottom),e.left=j(r.left,e.left),e},gn(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function bn(e){let{width:t,height:n}=en(e);return{width:t,height:n}}function xn(e,t,n){let r=z(t),i=L(t),a=n===`fixed`,o=on(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=M(0);function l(){c.x=sn(i)}if(r||!r&&!a)if((F(t)!==`body`||Rt(i))&&(s=Xt(t)),r){let e=on(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?cn(i,s):M(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Sn(e){return V(e).position===`static`}function Cn(e,t){if(!z(e)||V(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return L(e)===n&&(n=n.ownerDocument.body),n}function wn(e,t){let n=I(e);if(Ht(e))return n;if(!z(e)){let t=H(e);for(;t&&!B(t);){if(R(t)&&!Sn(t))return t;t=H(t)}return n}let r=Cn(e,t);for(;r&&Bt(r)&&Sn(r);)r=Cn(r,t);return r&&B(r)&&Sn(r)&&!Kt(r)?n:r||qt(e)||n}var Tn=async function(e){let t=this.getOffsetParent||wn,n=this.getDimensions,r=await n(e.floating);return{reference:xn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function En(e){return V(e).direction===`rtl`}var Dn={convertOffsetParentRelativeRectToViewportRelativeRect:ln,getDocumentElement:L,getClippingRect:yn,getOffsetParent:wn,getElementRects:Tn,getClientRects:un,getDimensions:bn,getScale:U,isElement:R,isRTL:En},On=Mt,kn=Nt,An=kt,jn=(e,t,n)=>{let r=new Map,i={platform:Dn,...n},a={...i.platform,_c:r};return Ot(e,t,{...i,platform:a})},Mn=class{constructor(e){this.editor=e,this.tooltip=null,this.currentLink=null,this.hideTimeout=null,this.visibilityChangeHandler=null,this.isTooltipHovered=!1,this.init()}init(){this.createTooltip(),this.editor.textarea.addEventListener(`selectionchange`,()=>this.checkCursorPosition()),this.editor.textarea.addEventListener(`keyup`,e=>{(e.key.includes(`Arrow`)||e.key===`Home`||e.key===`End`)&&this.checkCursorPosition()}),this.editor.textarea.addEventListener(`input`,()=>this.hide()),this.editor.textarea.addEventListener(`scroll`,()=>{this.currentLink&&this.positionTooltip(this.currentLink)}),this.editor.textarea.addEventListener(`blur`,()=>{this.isTooltipHovered||this.hide()}),this.visibilityChangeHandler=()=>{document.hidden&&this.hide()},document.addEventListener(`visibilitychange`,this.visibilityChangeHandler),this.tooltip.addEventListener(`mouseenter`,()=>{this.isTooltipHovered=!0,this.cancelHide()}),this.tooltip.addEventListener(`mouseleave`,()=>{this.isTooltipHovered=!1,this.scheduleHide()})}createTooltip(){this.tooltip=document.createElement(`div`),this.tooltip.className=`overtype-link-tooltip`,this.tooltip.innerHTML=`
      <span style="display: flex; align-items: center; gap: 6px;">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" style="flex-shrink: 0;">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
        <span class="overtype-link-tooltip-url"></span>
      </span>
    `,this.tooltip.addEventListener(`click`,e=>{if(e.preventDefault(),e.stopPropagation(),this.currentLink){let e=x.sanitizeUrl(this.currentLink.url);e!==`#`&&window.open(e,`_blank`),this.hide()}}),this.editor.container.appendChild(this.tooltip)}checkCursorPosition(){let e=this.editor.textarea.selectionStart,t=this.editor.textarea.value,n=this.findLinkAtPosition(t,e);n?(!this.currentLink||this.currentLink.url!==n.url||this.currentLink.index!==n.index)&&this.show(n):this.scheduleHide()}findLinkAtPosition(e,t){let n=/\[([^\]]+)\]\(([^)]+)\)/g,r,i=0;for(;(r=n.exec(e))!==null;){let e=r.index,n=r.index+r[0].length;if(t>=e&&t<=n)return{text:r[1],url:this.transformUrl(r[2]),index:i,start:e,end:n};i++}return null}transformUrl(e){let t=this.editor.options.transformLinkUrl;if(typeof t!=`function`)return e;try{let n=t(e);return typeof n==`string`?n:e}catch(t){return console.warn(`transformLinkUrl threw:`,t),e}}async show(e){this.currentLink=e,this.cancelHide();let t=this.tooltip.querySelector(`.overtype-link-tooltip-url`);t.textContent=e.url,await this.positionTooltip(e),this.currentLink===e&&this.tooltip.classList.add(`visible`)}async positionTooltip(e){let t=this.findAnchorElement(e.index);if(!t)return;let n=t.getBoundingClientRect();if(n.width!==0&&n.height!==0)try{let{x:e,y:n}=await jn(t,this.tooltip,{strategy:`fixed`,placement:`bottom`,middleware:[On(8),kn({padding:8}),An()]});Object.assign(this.tooltip.style,{left:`${e}px`,top:`${n}px`,position:`fixed`})}catch(e){console.warn(`Floating UI positioning failed:`,e)}}findAnchorElement(e){return this.editor.preview.querySelector(`a[style*="--link-${e}"]`)}hide(){this.tooltip.classList.remove(`visible`),this.currentLink=null,this.isTooltipHovered=!1}scheduleHide(){this.cancelHide(),this.hideTimeout=setTimeout(()=>this.hide(),300)}cancelHide(){this.hideTimeout&&=(clearTimeout(this.hideTimeout),null)}destroy(){this.cancelHide(),this.visibilityChangeHandler&&=(document.removeEventListener(`visibilitychange`,this.visibilityChangeHandler),null),this.tooltip&&this.tooltip.parentNode&&this.tooltip.parentNode.removeChild(this.tooltip),this.tooltip=null,this.currentLink=null,this.isTooltipHovered=!1}},W={bold:{name:`bold`,actionId:`toggleBold`,icon:`<svg viewBox="0 0 18 18">
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path>
</svg>`,title:`Bold (Ctrl+B)`,isActive:({activeFormats:e})=>e.includes(`bold`),action:({editor:e})=>{Re(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},italic:{name:`italic`,actionId:`toggleItalic`,icon:`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="13" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="11" y1="14" y2="14"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="10" y1="14" y2="4"></line>
</svg>`,title:`Italic (Ctrl+I)`,isActive:({activeFormats:e})=>e.includes(`italic`),action:({editor:e})=>{ze(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},code:{name:`code`,actionId:`toggleCode`,icon:`<svg viewBox="0 0 18 18">
  <polyline stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="5 7 3 9 5 11"></polyline>
  <polyline stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="13 7 15 9 13 11"></polyline>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10" x2="8" y1="5" y2="13"></line>
</svg>`,title:`Inline Code`,isActive:()=>!1,action:({editor:e})=>{Be(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},separator:{name:`separator`},link:{name:`link`,actionId:`insertLink`,icon:`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="11" y1="7" y2="11"></line>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path>
</svg>`,title:`Insert Link`,action:({editor:e})=>{Ve(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h1:{name:`h1`,actionId:`toggleH1`,icon:`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"></path>
</svg>`,title:`Heading 1`,isActive:({activeFormats:e})=>e.includes(`header`),action:({editor:e})=>{qe(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h2:{name:`h2`,actionId:`toggleH2`,icon:`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"></path>
</svg>`,title:`Heading 2`,isActive:({activeFormats:e})=>e.includes(`header-2`),action:({editor:e})=>{Je(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},h3:{name:`h3`,actionId:`toggleH3`,icon:`<svg viewBox="0 0 18 18">
  <path fill="currentColor" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"></path>
</svg>`,title:`Heading 3`,isActive:({activeFormats:e})=>e.includes(`header-3`),action:({editor:e})=>{Ye(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},bulletList:{name:`bulletList`,actionId:`toggleBulletList`,icon:`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6" x2="15" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6" x2="15" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6" x2="15" y1="14" y2="14"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="3" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="3" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="3" y1="14" y2="14"></line>
</svg>`,title:`Bullet List`,isActive:({activeFormats:e})=>e.includes(`bullet-list`),action:({editor:e})=>{He(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},orderedList:{name:`orderedList`,actionId:`toggleNumberedList`,icon:`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="15" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="15" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="7" x2="15" y1="14" y2="14"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line>
  <path fill="currentColor" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>
</svg>`,title:`Numbered List`,isActive:({activeFormats:e})=>e.includes(`numbered-list`),action:({editor:e})=>{Ue(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},taskList:{name:`taskList`,actionId:`toggleTaskList`,icon:`<svg viewBox="0 0 18 18">
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="16" y1="4" y2="4"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="16" y1="9" y2="9"></line>
  <line stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8" x2="16" y1="14" y2="14"></line>
  <rect stroke="currentColor" fill="none" stroke-width="1.5" x="2" y="3" width="3" height="3" rx="0.5"></rect>
  <rect stroke="currentColor" fill="none" stroke-width="1.5" x="2" y="13" width="3" height="3" rx="0.5"></rect>
  <polyline stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="2.65 9.5 3.5 10.5 5 8.5"></polyline>
</svg>`,title:`Task List`,isActive:({activeFormats:e})=>e.includes(`task-list`),action:({editor:e})=>{Ge&&(Ge(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0})))}},quote:{name:`quote`,actionId:`toggleQuote`,icon:`<svg viewBox="2 2 20 20">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"></path>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"></path>
</svg>`,title:`Quote`,isActive:({activeFormats:e})=>e.includes(`quote`),action:({editor:e})=>{We(e.textarea),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}},upload:{name:`upload`,actionId:`uploadFile`,icon:`<svg viewBox="0 0 18 18">
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 12.375v1.688A1.688 1.688 0 0 0 3.938 15.75h10.124a1.688 1.688 0 0 0 1.688-1.688V12.375"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.063 6.188L9 2.25l3.938 3.938"></path>
  <path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 2.25v10.125"></path>
</svg>`,title:`Upload File`,action:({editor:e})=>{if(!e.options.fileUpload?.enabled)return;let t=document.createElement(`input`);t.type=`file`,t.multiple=!0,e.options.fileUpload.mimeTypes?.length>0&&(t.accept=e.options.fileUpload.mimeTypes.join(`,`)),t.onchange=()=>{if(!t.files?.length)return;let n=new DataTransfer;for(let e of t.files)n.items.add(e);e._handleDataTransfer(n)},t.click()}},viewMode:{name:`viewMode`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none"></path>
  <circle cx="12" cy="12" r="3" fill="none"></circle>
</svg>`,title:`View mode`}},Nn=[W.bold,W.italic,W.code,W.separator,W.link,W.separator,W.h1,W.h2,W.h3,W.separator,W.bulletList,W.orderedList,W.taskList,W.separator,W.quote,W.separator,W.viewMode],Pn;function Fn(){if(Pn!==void 0)return Pn;if(Pn=!1,typeof navigator<`u`){let e=navigator.userAgent||``;Pn=/^((?!chrome|android|crios|fxios|edg|opr).)*safari/i.test(e)||/iPad|iPhone|iPod/.test(e)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1&&/Safari/.test(e)}return Pn}function In(e){let t={};return(e||[]).forEach(e=>{if(!e||e.name===`separator`)return;let n=e.actionId||e.name;e.action&&(t[n]=e.action)}),t}function Ln(e){let t=e||Nn;return Array.isArray(t)?t.map(e=>({name:e?.name||null,actionId:e?.actionId||e?.name||null,icon:e?.icon||null,title:e?.title||null})):null}function Rn(e,t){let n=Ln(e),r=Ln(t);if(n===null||r===null)return n!==r;if(n.length!==r.length)return!0;for(let e=0;e<n.length;e++){let t=n[e],i=r[e];if(t.name!==i.name||t.actionId!==i.actionId||t.icon!==i.icon||t.title!==i.title)return!0}return!1}var G=class e{constructor(t,n={}){let r=e._resolveTargets(t);if(typeof t==`string`&&r.length===0)throw Error(`No elements found for selector: ${t}`);return r.map(t=>{if(t.overTypeInstance)return t.overTypeInstance.reinit(n),t.overTypeInstance;let r=Object.create(e.prototype);return r._init(t,n),t.overTypeInstance=r,e.instances.set(t,r),r})}_init(t,n={}){this.element=t,this.instanceTheme=n.theme||null,this.options=this._mergeOptions(n),this.instanceId=++e.instanceCount,this.initialized=!1,this._isSafari=Fn(),this._safariReflowRaf=null,e.injectStyles(),e.initGlobalListeners();let r=t.querySelector(`.overtype-container`),i=t.querySelector(`.overtype-wrapper`);r||i?this._recoverFromDOM(r,i):this._buildFromScratch(),this.instanceTheme===`auto`&&this.setTheme(`auto`),this.shortcuts=new ee(this),this._rebuildActionsMap(),this.linkTooltip=new Mn(this),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.textarea.scrollTop=this.preview.scrollTop,this.textarea.scrollLeft=this.preview.scrollLeft})}),this.initialized=!0,this.options.onChange&&this._notifyChange()}_mergeOptions(e){let t={fontSize:`14px`,lineHeight:1.6,fontFamily:`"SF Mono", SFMono-Regular, Menlo, Monaco, "Cascadia Code", Consolas, "Roboto Mono", "Noto Sans Mono", "Droid Sans Mono", "Ubuntu Mono", "DejaVu Sans Mono", "Liberation Mono", "Courier New", Courier, monospace`,padding:`16px`,mobile:{fontSize:`16px`,padding:`12px`,lineHeight:1.5},textareaProps:{},autofocus:!1,autoResize:!1,minHeight:`100px`,maxHeight:null,placeholder:`Start typing...`,value:``,onChange:null,onKeydown:null,onRender:null,onFocus:null,onBlur:null,showActiveLineRaw:!1,showStats:!1,toolbar:!1,toolbarButtons:null,statsFormatter:null,smartLists:!0,codeHighlighter:null,spellcheck:!1,transformLinkUrl:null},{theme:n,colors:r,...i}=e;return{...t,...i}}_recoverFromDOM(t,n){if(t&&t.classList.contains(`overtype-container`))this.container=t,this.wrapper=t.querySelector(`.overtype-wrapper`);else if(n){this.wrapper=n,this.container=document.createElement(`div`),this.container.className=`overtype-container`;let t=this.instanceTheme||e.currentTheme||S,r=typeof t==`string`?t:t.name;if(r&&this.container.setAttribute(`data-theme`,r),this.instanceTheme){let e=typeof this.instanceTheme==`string`?T(this.instanceTheme):this.instanceTheme;if(e&&e.colors){let t=ne(e.colors);this.container.style.cssText+=t}}n.parentNode.insertBefore(this.container,n),this.container.appendChild(n)}if(!this.wrapper){t&&t.remove(),n&&n.remove(),this._buildFromScratch();return}if(this.textarea=this.wrapper.querySelector(`.overtype-input`),this.preview=this.wrapper.querySelector(`.overtype-preview`),!this.textarea||!this.preview){this.container.remove(),this._buildFromScratch();return}this.wrapper._instance=this,this._applyInstanceCSSVars(),this._configureTextarea(),this._ensureTextareaId(),this._syncPreviewInteractivity(),this._applyOptions()}_buildFromScratch(){let e=this._extractContent();this.element.innerHTML=``,this._createDOM(),(e||this.options.value)&&this.setValue(e||this.options.value),this._applyOptions()}_extractContent(){let e=this.element.querySelector(`.overtype-input`);return e?e.value:this.element.textContent||``}_createDOM(){this.container=document.createElement(`div`),this.container.className=`overtype-container`;let t=this.instanceTheme||e.currentTheme||S,n=typeof t==`string`?t:t.name;if(n&&this.container.setAttribute(`data-theme`,n),this.instanceTheme){let e=typeof this.instanceTheme==`string`?T(this.instanceTheme):this.instanceTheme;if(e&&e.colors){let t=ne(e.colors);this.container.style.cssText+=t}}this.wrapper=document.createElement(`div`),this.wrapper.className=`overtype-wrapper`,this._applyInstanceCSSVars(),this.wrapper._instance=this,this.textarea=document.createElement(`textarea`),this.textarea.className=`overtype-input`,this.textarea.placeholder=this.options.placeholder,this._configureTextarea(),this.options.textareaProps&&Object.entries(this.options.textareaProps).forEach(([e,t])=>{e===`className`||e===`class`?this.textarea.className+=` `+t:e===`style`&&typeof t==`object`?Object.assign(this.textarea.style,t):this.textarea.setAttribute(e,t)}),this._ensureTextareaId(),this.preview=document.createElement(`div`),this.preview.className=`overtype-preview`,this.preview.setAttribute(`aria-hidden`,`true`),this.placeholderEl=document.createElement(`div`),this.placeholderEl.className=`overtype-placeholder`,this.placeholderEl.setAttribute(`aria-hidden`,`true`),this.placeholderEl.textContent=this.options.placeholder,this.wrapper.appendChild(this.textarea),this.wrapper.appendChild(this.preview),this.wrapper.appendChild(this.placeholderEl),this.container.appendChild(this.wrapper),this.options.showStats&&(this.statsBar=document.createElement(`div`),this.statsBar.className=`overtype-stats`,this.container.appendChild(this.statsBar),this._updateStats()),this.element.appendChild(this.container),this.options.autoResize?this._setupAutoResize():this.container.classList.remove(`overtype-auto-resize`),this._syncPreviewInteractivity()}_configureTextarea(){this.textarea.setAttribute(`autocomplete`,`off`),this.textarea.setAttribute(`autocorrect`,`off`),this.textarea.setAttribute(`autocapitalize`,`off`),this.textarea.setAttribute(`spellcheck`,String(this.options.spellcheck)),this.textarea.setAttribute(`data-gramm`,`false`),this.textarea.setAttribute(`data-gramm_editor`,`false`),this.textarea.setAttribute(`data-enable-grammarly`,`false`)}_ensureTextareaId(){this.textarea.id||(this.textarea.id=`overtype-${this.instanceId}-input`)}_syncPreviewInteractivity(){if(!this.preview||!this.container)return;let e=this.container.dataset.mode===`preview`;if(this.preview.inert=!e,this.preview.toggleAttribute(`inert`,!e),e){this.preview.removeAttribute(`aria-hidden`);return}this.preview.setAttribute(`aria-hidden`,`true`)}_createToolbar(){let e=this.options.toolbarButtons||Nn;if(this.options.fileUpload?.enabled&&!e.some(e=>e?.name===`upload`)){let t=e.findIndex(e=>e?.name===`viewMode`);t===-1?e=[...e,W.separator,W.upload]:(e=[...e],e.splice(t,0,W.separator,W.upload))}this.toolbar=new tt(this,{toolbarButtons:e}),this.toolbar.create(),this._toolbarSelectionListener=()=>{this.toolbar&&this.toolbar.updateButtonStates()},this._toolbarInputListener=()=>{this.toolbar&&this.toolbar.updateButtonStates()},this.textarea.addEventListener(`selectionchange`,this._toolbarSelectionListener),this.textarea.addEventListener(`input`,this._toolbarInputListener)}_cleanupToolbarListeners(){this._toolbarSelectionListener&&=(this.textarea.removeEventListener(`selectionchange`,this._toolbarSelectionListener),null),this._toolbarInputListener&&=(this.textarea.removeEventListener(`input`,this._toolbarInputListener),null)}_rebuildActionsMap(){this.actionsById=In(Nn),this.options.toolbarButtons&&Object.assign(this.actionsById,In(this.options.toolbarButtons)),this.options.fileUpload?.enabled&&Object.assign(this.actionsById,In([W.upload]))}_applyInstanceCSSVars(){this.wrapper&&(this.options.fontSize&&this.wrapper.style.setProperty(`--instance-font-size`,this.options.fontSize),this.options.lineHeight&&this.wrapper.style.setProperty(`--instance-line-height`,String(this.options.lineHeight)),this.options.padding&&this.wrapper.style.setProperty(`--instance-padding`,this.options.padding),this.options.fontFamily&&this.wrapper.style.setProperty(`--instance-font-family`,this.options.fontFamily))}_applyOptions(){this._applyInstanceCSSVars(),this.options.autofocus&&this.textarea.focus(),this.options.autoResize?this.container.classList.contains(`overtype-auto-resize`)?this._updateAutoHeight():this._setupAutoResize():this.container.classList.remove(`overtype-auto-resize`),this.options.toolbar&&!this.toolbar?this._createToolbar():!this.options.toolbar&&this.toolbar&&(this._cleanupToolbarListeners(),this.toolbar.destroy(),this.toolbar=null),this.placeholderEl&&(this.placeholderEl.textContent=this.options.placeholder),this.options.fileUpload&&!this.fileUploadInitialized?this._initFileUpload():!this.options.fileUpload&&this.fileUploadInitialized&&this._destroyFileUpload(),this.updatePreview()}_initFileUpload(){let e=this.options.fileUpload;if(!(!e||!e.enabled)){if(e.maxSize=e.maxSize||10*1024*1024,e.mimeTypes=e.mimeTypes||[],e.batch=e.batch||!1,!e.onInsertFile||typeof e.onInsertFile!=`function`){console.warn(`OverType: fileUpload.onInsertFile callback is required for file uploads.`);return}this._fileUploadCounter=0,this._uploadedFiles=new Map,this._boundHandleFilePaste=this._handleFilePaste.bind(this),this._boundHandleFileDrop=this._handleFileDrop.bind(this),this._boundHandleDragOver=this._handleDragOver.bind(this),this.textarea.addEventListener(`paste`,this._boundHandleFilePaste),this.textarea.addEventListener(`drop`,this._boundHandleFileDrop),this.textarea.addEventListener(`dragover`,this._boundHandleDragOver),this.fileUploadInitialized=!0}}_extractMarkdownUrls(e){let t=[],n=/!?\[[^\]]*\]\(([^)\s]+)/g,r;for(;(r=n.exec(e))!==null;)t.push(r[1]);return t}_trackInsertedUrls(e,t){if(!(!this._uploadedFiles||!t||!e))for(let n of this._extractMarkdownUrls(e))this._uploadedFiles.set(n,{filename:t.name,file:t})}_checkForRemovedUploads(){if(!this._uploadedFiles||this._uploadedFiles.size===0)return;let e=this.options.fileUpload?.onRemoveFile,t=this.textarea.value,n=[];for(let[e,r]of this._uploadedFiles)t.includes(e)||n.push({url:e,info:r});for(let{url:t,info:r}of n)this._uploadedFiles.delete(t),e&&e({url:t,filename:r.filename,file:r.file})}_handleFilePaste(e){e?.clipboardData?.files?.length&&(e.preventDefault(),this._handleDataTransfer(e.clipboardData))}_handleFileDrop(e){e?.dataTransfer?.files?.length&&(e.preventDefault(),this._handleDataTransfer(e.dataTransfer))}_handleDataTransfer(e){let t=[];for(let n of e.files){if(n.size>this.options.fileUpload.maxSize||this.options.fileUpload.mimeTypes.length>0&&!this.options.fileUpload.mimeTypes.includes(n.type))continue;let e=++this._fileUploadCounter,r=`${n.type.startsWith(`image/`)?`!`:``}[Uploading ${n.name} (#${e})...]()`;if(this.insertAtCursor(`${r}
`),this.options.fileUpload.batch){t.push({file:n,placeholder:r});continue}this.options.fileUpload.onInsertFile(n).then(e=>{this.textarea.value=this.textarea.value.replace(r,e),this._trackInsertedUrls(e,n),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))},e=>{console.error(`OverType: File upload failed`,e),this.textarea.value=this.textarea.value.replace(r,`[Upload failed]()`),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))})}this.options.fileUpload.batch&&t.length>0&&this.options.fileUpload.onInsertFile(t.map(e=>e.file)).then(e=>{(Array.isArray(e)?e:[e]).forEach((e,n)=>{this.textarea.value=this.textarea.value.replace(t[n].placeholder,e),this._trackInsertedUrls(e,t[n].file)}),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))},e=>{console.error(`OverType: File upload failed`,e),t.forEach(({placeholder:e})=>{this.textarea.value=this.textarea.value.replace(e,`[Upload failed]()`)}),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))})}_handleDragOver(e){e.preventDefault()}_destroyFileUpload(){this.textarea.removeEventListener(`paste`,this._boundHandleFilePaste),this.textarea.removeEventListener(`drop`,this._boundHandleFileDrop),this.textarea.removeEventListener(`dragover`,this._boundHandleDragOver),this._boundHandleFilePaste=null,this._boundHandleFileDrop=null,this._boundHandleDragOver=null,this._uploadedFiles=null,this.fileUploadInitialized=!1}insertAtCursor(e){let t=this.textarea.selectionStart,n=this.textarea.selectionEnd,r=!1;try{r=document.execCommand(`insertText`,!1,e)}catch{}if(!r){let r=this.textarea.value.slice(0,t),i=this.textarea.value.slice(n);this.textarea.value=r+e+i,this.textarea.setSelectionRange(t+e.length,t+e.length)}this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}updatePreview(){let e=this.textarea.value,t=this.textarea.selectionStart,n=this._getCurrentLine(e,t),r=this.container.dataset.mode===`preview`,i=x.parse(e,n,this.options.showActiveLineRaw,this.options.codeHighlighter,r);this.preview.innerHTML=i,this.placeholderEl&&(this.placeholderEl.style.display=e?`none`:``),this._applyCodeBlockBackgrounds(),this.options.showStats&&this.statsBar&&this._updateStats(),this.options.onRender&&this.options.onRender(this.preview,r?`preview`:`normal`,this)}_notifyChange(){this.initialized&&(this._checkForRemovedUploads(),this.options.onChange&&this.options.onChange(this.textarea.value,this))}_applyCodeBlockBackgrounds(){let e=this.preview.querySelectorAll(`.code-fence`);for(let t=0;t<e.length-1;t+=2){let n=e[t],r=e[t+1],i=n.parentElement,a=r.parentElement;!i||!a||(n.style.display=`block`,r.style.display=`block`,i.classList.add(`code-block-line`),a.classList.add(`code-block-line`))}}_getCurrentLine(e,t){return e.substring(0,t).split(`
`).length-1}handleInput(e){this.updatePreview(),this._notifyChange(),this._scheduleSafariReflow()}_scheduleSafariReflow(){!this._isSafari||this._safariReflowRaf||(this._safariReflowRaf=requestAnimationFrame(()=>{this._safariReflowRaf=null;let e=this.textarea;e&&(e.style.setProperty(`letter-spacing`,`-0.001px`,`important`),e.offsetHeight,e.style.removeProperty(`letter-spacing`))}))}handleFocus(e){this.options.onFocus&&this.options.onFocus(e,this)}handleBlur(e){this.options.onBlur&&this.options.onBlur(e,this)}handleKeydown(e){if(e.key===`Tab`&&this.textarea.selectionStart!==this.textarea.selectionEnd&&this._canEditTextarea()){e.preventDefault(),e.shiftKey?this.outdentSelection():this.indentSelection();return}if(e.key===`Enter`&&!e.shiftKey&&!e.metaKey&&!e.ctrlKey&&this.options.smartLists&&this.handleSmartListContinuation()){e.preventDefault();return}!this.shortcuts.handleKeydown(e)&&this.options.onKeydown&&this.options.onKeydown(e,this)}handleSmartListContinuation(){let e=this.textarea,t=e.selectionStart,n=x.getListContext(e.value,t);return!n||!n.inList?!1:n.content.trim()===``&&t>=n.markerEndPos?(this.deleteListMarker(n),!0):(t>n.markerEndPos&&t<n.lineEnd?this.splitListItem(n,t):this.insertNewListItem(n),n.listType===`numbered`&&this.scheduleNumberedListUpdate(),!0)}deleteListMarker(e){this.textarea.setSelectionRange(e.lineStart,e.markerEndPos),document.execCommand(`delete`),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}insertNewListItem(e){let t=x.createNewListItem(e);document.execCommand(`insertText`,!1,`
`+t),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}splitListItem(e,t){let n=e.content.substring(t-e.markerEndPos);this.textarea.setSelectionRange(t,e.lineEnd),document.execCommand(`delete`);let r=x.createNewListItem(e);document.execCommand(`insertText`,!1,`
`+r+n);let i=this.textarea.selectionStart-n.length;this.textarea.setSelectionRange(i,i),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}scheduleNumberedListUpdate(){this.numberUpdateTimeout&&clearTimeout(this.numberUpdateTimeout),this.numberUpdateTimeout=setTimeout(()=>{this.updateNumberedLists()},10)}updateNumberedLists(){let e=this.textarea.value,t=this.textarea.selectionStart,n=x.renumberLists(e);if(n!==e){let r=0,i=e.split(`
`),a=n.split(`
`),o=0;for(let e=0;e<i.length&&o<t;e++){if(i[e]!==a[e]){let n=a[e].length-i[e].length;o+i[e].length<t&&(r+=n)}o+=i[e].length+1}this.textarea.value=n;let s=t+r;this.textarea.setSelectionRange(s,s),this.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))}}handleScroll(e){this.preview.scrollTop=this.textarea.scrollTop,this.preview.scrollLeft=this.textarea.scrollLeft}getValue(){return this.textarea.value}setValue(e){let t=this.textarea.value!==e;this.textarea.value=e,this.updatePreview(),this.options.autoResize&&this._updateAutoHeight(),t&&(this._notifyChange(),this._scheduleSafariReflow())}async performAction(e,t=null){let n=this.textarea;if(!n)return!1;let r=this.actionsById?.[e];if(!r)return console.warn(`OverType: Unknown action "${e}"`),!1;n.focus();try{return await r({editor:this,getValue:()=>this.getValue(),setValue:e=>this.setValue(e),event:t}),!0}catch(t){return console.error(`OverType: Action "${e}" error:`,t),this.wrapper.dispatchEvent(new CustomEvent(`button-error`,{detail:{actionId:e,error:t}})),!1}}getRenderedHTML(e={}){let t=this.getValue(),n=x.parse(t,-1,!1,this.options.codeHighlighter);return e.cleanHTML&&(n=n.replace(/<span class="syntax-marker[^"]*">.*?<\/span>/g,``),n=n.replace(/\sclass="(bullet-list|ordered-list|code-fence|hr-marker|blockquote|url-part)"/g,``),n=n.replace(/\sclass=""/g,``)),n}getPreviewHTML(){return this.preview.innerHTML}indentSelection(){this._replaceSelectedLines(e=>`  ${e}`)}outdentSelection(){this._replaceSelectedLines(e=>e.replace(/^( {1,2}|\t)/,``))}_replaceSelectedLines(e){if(!this._canEditTextarea())return!1;let t=this.textarea,{selectionStart:n,selectionEnd:r,value:i}=t,a=i.lastIndexOf(`
`,n-1)+1,o=this._effectiveSelectionEnd(i,n,r),s=i.indexOf(`
`,o),c=s===-1?i.length:s,l=i.slice(a,c),u=l.split(`
`).map(e).join(`
`);if(u===l)return!1;t.setSelectionRange(a,c);let d=!1;try{d=document.execCommand(`insertText`,!1,u)}catch{}return d||t.setRangeText(u,a,c,`preserve`),t.setSelectionRange(a,a+u.length),t.dispatchEvent(new Event(`input`,{bubbles:!0})),!0}_effectiveSelectionEnd(e,t,n){return n>t&&e[n-1]===`
`?n-1:n}_canEditTextarea(){return this.textarea&&!this.textarea.disabled&&!this.textarea.readOnly}getCleanHTML(){return this.getRenderedHTML({cleanHTML:!0})}focus(){this.textarea.focus()}blur(){this.textarea.blur()}isInitialized(){return this.initialized}reinit(e={}){let t=this.options?.toolbarButtons;this.options=this._mergeOptions({...this.options,...e});let n=this.toolbar&&this.options.toolbar&&Rn(t,this.options.toolbarButtons);this._rebuildActionsMap(),n&&(this._cleanupToolbarListeners(),this.toolbar.destroy(),this.toolbar=null,this._createToolbar()),this.fileUploadInitialized&&this._destroyFileUpload(),this.options.fileUpload&&this._initFileUpload(),this._applyOptions(),this.updatePreview()}showToolbar(){this.toolbar?this.toolbar.show():this._createToolbar()}hideToolbar(){this.toolbar&&this.toolbar.hide()}setTheme(t){if(e._autoInstances.delete(this),this.instanceTheme=t,t===`auto`)e._autoInstances.add(this),e._startAutoListener(),this._applyResolvedTheme(te(`auto`));else{let e=typeof t==`string`?T(t):t,n=typeof e==`string`?e:e.name;if(n&&this.container.setAttribute(`data-theme`,n),e&&e.colors){let t=ne(e.colors,e.previewColors);this.container.style.cssText+=t}this.updatePreview()}return e._stopAutoListener(),this}_applyResolvedTheme(e){let t=T(e);this.container.setAttribute(`data-theme`,e),t&&t.colors&&(this.container.style.cssText=ne(t.colors,t.previewColors)),this.updatePreview()}setCodeHighlighter(e){this.options.codeHighlighter=e,this.updatePreview()}_updateStats(){if(!this.statsBar)return;let e=this.textarea.value,t=e.split(`
`),n=e.length,r=e.split(/\s+/).filter(e=>e.length>0).length,i=this.textarea.selectionStart,a=e.substring(0,i).split(`
`),o=a.length,s=a[a.length-1].length+1;this.options.statsFormatter?this.statsBar.innerHTML=this.options.statsFormatter({chars:n,words:r,lines:t.length,line:o,column:s}):this.statsBar.innerHTML=`
          <div class="overtype-stat">
            <span class="live-dot"></span>
            <span>${n} chars, ${r} words, ${t.length} lines</span>
          </div>
          <div class="overtype-stat">Line ${o}, Col ${s}</div>
        `}_setupAutoResize(){this.container.classList.add(`overtype-auto-resize`),this.previousHeight=null,this._updateAutoHeight(),this.textarea.addEventListener(`input`,()=>this._updateAutoHeight()),window.addEventListener(`resize`,()=>this._updateAutoHeight())}_updateAutoHeight(){if(!this.options.autoResize)return;let e=this.textarea,t=this.preview,n=this.wrapper;if(this.container.dataset.mode===`preview`){n.style.removeProperty(`height`),t.style.removeProperty(`height`),t.style.removeProperty(`overflow-y`),e.style.removeProperty(`height`),e.style.removeProperty(`overflow-y`);return}let r=e.scrollTop;n.style.setProperty(`height`,`auto`,`important`),e.style.setProperty(`height`,`auto`,`important`);let i=e.scrollHeight;if(this.options.minHeight){let e=parseInt(this.options.minHeight);i=Math.max(i,e)}let a=`hidden`;if(this.options.maxHeight){let e=parseInt(this.options.maxHeight);i>e&&(i=e,a=`auto`)}let o=i+`px`;e.style.setProperty(`height`,o,`important`),e.style.setProperty(`overflow-y`,a,`important`),t.style.setProperty(`height`,o,`important`),t.style.setProperty(`overflow-y`,a,`important`),n.style.setProperty(`height`,o,`important`),e.scrollTop=r,t.scrollTop=r,this.previousHeight!==i&&(this.previousHeight=i)}showStats(e){this.options.showStats=e,e&&!this.statsBar?(this.statsBar=document.createElement(`div`),this.statsBar.className=`overtype-stats`,this.container.appendChild(this.statsBar),this._updateStats()):e&&this.statsBar?this._updateStats():!e&&this.statsBar&&(this.statsBar.remove(),this.statsBar=null)}showNormalEditMode(){return this.container.dataset.mode=`normal`,this._syncPreviewInteractivity(),this.updatePreview(),this._updateAutoHeight(),requestAnimationFrame(()=>{this.textarea.scrollTop=this.preview.scrollTop,this.textarea.scrollLeft=this.preview.scrollLeft}),this}showPlainTextarea(){if(this.container.dataset.mode=`plain`,this._syncPreviewInteractivity(),this._updateAutoHeight(),this.toolbar){let e=this.container.querySelector(`[data-action="toggle-plain"]`);e&&(e.classList.remove(`active`),e.title=`Show markdown preview`)}return this}showPreviewMode(){return this.container.dataset.mode=`preview`,this._syncPreviewInteractivity(),this.updatePreview(),this._updateAutoHeight(),this}destroy(){if(e._autoInstances.delete(this),e._stopAutoListener(),this.fileUploadInitialized&&this._destroyFileUpload(),this.element.overTypeInstance=null,e.instances.delete(this.element),this.shortcuts&&this.shortcuts.destroy(),this._safariReflowRaf&&=(cancelAnimationFrame(this._safariReflowRaf),null),this.wrapper){let e=this.getValue();this.wrapper.remove(),this.element.textContent=e}this.initialized=!1}static init(t,n={}){return new e(t,n)}static initFromData(t,n={}){return e._resolveTargets(t).map(t=>{let r={...n};for(let n of t.attributes){if(!n.name.startsWith(`data-ot-`))continue;let t=n.name.slice(8);if(t.startsWith(`textarea-`)&&t!==`textarea-props`){let i=t.slice(9).replace(/-([a-z])/g,(e,t)=>t.toUpperCase());r.textareaProps={...r.textareaProps||{},[i]:e._parseDataValue(n.value)};continue}let i=t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());r[i]=e._parseDataValue(n.value)}return new e(t,r)[0]})}static _resolveTargets(e){if(e==null)throw Error(`Invalid target: must be selector string, Element, NodeList, or Array`);if(typeof e==`string`)return Array.from(document.querySelectorAll(e));if(e instanceof Element)return[e];if(e instanceof NodeList)return Array.from(e);if(Array.isArray(e))return e;if(typeof e.length==`number`)return Array.from(e);throw Error(`Invalid target: must be selector string, Element, NodeList, or Array`)}static _parseDataValue(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===`null`)return null;if(e!==``&&!isNaN(Number(e)))return Number(e);let t=e.trim();if(t[0]===`{`||t[0]===`[`)try{return JSON.parse(t)}catch{return e}return e}static getInstance(t){let n;return n=t instanceof Element?t:e._resolveTargets(t)[0],n&&(n.overTypeInstance||e.instances.get(n))||null}static destroyAll(){document.querySelectorAll(`[data-overtype-instance]`).forEach(t=>{let n=e.getInstance(t);n&&n.destroy()})}static injectStyles(t=!1){if(e.stylesInjected&&!t)return;let n=document.querySelector(`style.overtype-styles`);n&&n.remove();let r=ie({theme:e.currentTheme||S}),i=document.createElement(`style`);i.className=`overtype-styles`,i.textContent=r,document.head.appendChild(i),e.stylesInjected=!0}static setTheme(t,n=null){if(e._globalAutoTheme=!1,e._globalAutoCustomColors=null,t===`auto`){e._globalAutoTheme=!0,e._globalAutoCustomColors=n,e._startAutoListener(),e._applyGlobalTheme(te(`auto`),n);return}e._stopAutoListener(),e._applyGlobalTheme(t,n)}static _applyGlobalTheme(t,n=null){let r=typeof t==`string`?T(t):t;n&&(r=re(r,n)),e.currentTheme=r,e.injectStyles(!0);let i=typeof r==`string`?r:r.name;document.querySelectorAll(`.overtype-container`).forEach(e=>{i&&e.setAttribute(`data-theme`,i)}),document.querySelectorAll(`.overtype-wrapper`).forEach(e=>{e.closest(`.overtype-container`)||i&&e.setAttribute(`data-theme`,i);let t=e._instance;t&&t.updatePreview()}),document.querySelectorAll(`overtype-editor`).forEach(e=>{i&&typeof e.setAttribute==`function`&&e.setAttribute(`theme`,i),typeof e.refreshTheme==`function`&&e.refreshTheme()})}static _startAutoListener(){e._autoMediaQuery||window.matchMedia&&(e._autoMediaQuery=window.matchMedia(`(prefers-color-scheme: dark)`),e._autoMediaListener=t=>{let n=t.matches?`cave`:`solar`;e._globalAutoTheme&&e._applyGlobalTheme(n,e._globalAutoCustomColors),e._autoInstances.forEach(e=>e._applyResolvedTheme(n))},e._autoMediaQuery.addEventListener(`change`,e._autoMediaListener))}static _stopAutoListener(){e._autoInstances.size>0||e._globalAutoTheme||e._autoMediaQuery&&(e._autoMediaQuery.removeEventListener(`change`,e._autoMediaListener),e._autoMediaQuery=null,e._autoMediaListener=null)}static setCodeHighlighter(e){x.setCodeHighlighter(e),document.querySelectorAll(`.overtype-wrapper`).forEach(e=>{let t=e._instance;t&&t.updatePreview&&t.updatePreview()}),document.querySelectorAll(`overtype-editor`).forEach(e=>{if(typeof e.getEditor==`function`){let t=e.getEditor();t&&t.updatePreview&&t.updatePreview()}})}static setCustomSyntax(e){x.setCustomSyntax(e),document.querySelectorAll(`.overtype-wrapper`).forEach(e=>{let t=e._instance;t&&t.updatePreview&&t.updatePreview()}),document.querySelectorAll(`overtype-editor`).forEach(e=>{if(typeof e.getEditor==`function`){let t=e.getEditor();t&&t.updatePreview&&t.updatePreview()}})}static initGlobalListeners(){let t=typeof window<`u`?window:globalThis,n=`__overtypeGlobalListenersInitialized`;if(e.globalListenersInitialized||t[n]){e.globalListenersInitialized=!0;return}t[n]=!0,document.addEventListener(`input`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleInput(e)}}),document.addEventListener(`keydown`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleKeydown(e)}}),document.addEventListener(`focus`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleFocus(e)}},!0),document.addEventListener(`blur`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleBlur(e)}},!0),document.addEventListener(`scroll`,e=>{if(e.target&&e.target.classList&&e.target.classList.contains(`overtype-input`)){let t=e.target.closest(`.overtype-wrapper`)?._instance;t&&t.handleScroll(e)}},!0),document.addEventListener(`selectionchange`,e=>{let t=document.activeElement;if(t&&t.classList.contains(`overtype-input`)){let e=t.closest(`.overtype-wrapper`)?._instance;e&&(e.options.showStats&&e.statsBar&&e._updateStats(),clearTimeout(e._selectionTimeout),e._selectionTimeout=setTimeout(()=>{e.updatePreview()},50))}}),e.globalListenersInitialized=!0}};b(G,`instances`,new WeakMap),b(G,`stylesInjected`,!1),b(G,`globalListenersInitialized`,!1),b(G,`instanceCount`,0),b(G,`_autoMediaQuery`,null),b(G,`_autoMediaListener`,null),b(G,`_autoInstances`,new Set),b(G,`_globalAutoTheme`,!1),b(G,`_globalAutoCustomColors`,null);var K=G;K.MarkdownParser=x,K.ShortcutsManager=ee,K.themes={solar:S,cave:T(`cave`)},K.getTheme=T,K.currentTheme=S;var zn=K;function Bn(e){return e.replace(/([[\]\\])/g,`\\$1`)}function Vn(e){return navigator.platform.toLowerCase().includes(`mac`)?e.metaKey:e.ctrlKey}var Hn=`CraftCms\\Cms\\Asset\\Elements\\Asset`,Un=`asset`;function Wn(e,t,n,r,i){let a=null;async function s(){if(!a){a=await p(Hn,{closeOtherModals:!1,condition:n,criteria:t,hideOnSelect:!0,modalTitle:o(`Choose an asset`),multiSelect:!1,onSelect:e=>{let[t]=e;t&&c(t)},sources:r});return}a.show()}function c(t){let n=`{${Un}:${t.id}@${t.siteId}:url}`,r=Bn(String(t.alt||t.label||``)),a=t.kind===`image`?`![${r}](${n})`:`[${r||n}](${n})`;e.insertAtCursor(a),e.focus(),i.isActive()&&i.render(e.getValue())}return{open:s}}var Gn=[`http:`,`https:`,`mailto:`,`sms:`,`tel:`];function Kn(e,t){let n=!1,r=null;function i(){n=!1,r&&=(window.clearTimeout(r),null)}function a(){n=!0,r&&window.clearTimeout(r),r=window.setTimeout(()=>{n=!1,r=null},1e3)}function o(n){let{selectionEnd:r,selectionStart:i,value:a}=e.textarea,o=a.slice(i,r),s=`[${o}](${n})`;e.textarea.setRangeText(s,i,r,`end`),o||e.textarea.setSelectionRange(i+1,i+1),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0})),t.isActive()&&t.render(e.getValue())}function s(t){if(e.textarea.readOnly)return;if(n){i();return}let r=t.clipboardData?.getData(`text/plain`).trim();!r||!l(r)||(t.preventDefault(),o(r))}function c(e){Vn(e)&&e.key.toLowerCase()===`v`&&e.shiftKey&&a()}function l(e){try{let t=new URL(e);return Gn.includes(t.protocol)}catch{return!1}}return e.textarea.addEventListener(`keydown`,c),e.textarea.addEventListener(`paste`,s),()=>{i(),e.textarea.removeEventListener(`keydown`,c),e.textarea.removeEventListener(`paste`,s)}}var qn={urlSuffix:``,target:``,title:``,class:``,id:``,rel:``,ariaLabel:``,download:!1,filename:``},Jn=[`type`,`value`,`label`,...Object.keys(qn)],Yn=0,q=class extends n{constructor(...e){super(...e),this.advancedFields=[],this.showLabelField=!1,this.types=[],this.modelValue=null,this.name=``,this.disabled=!1,this.live=!1,this.defaultLabel=``,this.label=``,this.linkAttributes={...qn},this.typeId=``,this.value=``,this.valueError=``,this.advancedPanelId=`craft-link-field-advanced-${++Yn}`,this.valueErrorId=`${this.advancedPanelId}-value-errors`,this.emittedValue=null}connectedCallback(){super.connectedCallback(),this.typeId||=this.types[0]?.id??``}willUpdate(e){if(e.has(`modelValue`)&&!this.isEcho(this.modelValue)){let e=this.modelValue??{};this.defaultLabel=e.defaultLabel??``,this.label=e.label??``,this.linkAttributes={urlSuffix:e.urlSuffix??``,target:e.target??``,title:e.title??``,class:e.class??``,id:e.id??``,rel:e.rel??``,ariaLabel:e.ariaLabel??``,download:!!e.download,filename:e.filename??``},this.typeId=e.type??``,this.value=e.value??``}(!this.typeId||!this.types.some(e=>e.id===this.typeId))&&(this.typeId=this.types[0]?.id??``)}isEcho(e){let t=this.emittedValue;return!!(t&&e&&Object.keys(t).every(n=>n===`href`||e[n]===t[n]))}get selectedType(){return this.types.find(e=>e.id===this.typeId)}hasAdvancedField(e){return this.advancedFields.includes(e)}get showAdvancedFields(){return this.showLabelField||this.advancedFields.length>0}handleTypeChange(e){e.target instanceof HTMLSelectElement&&(this.typeId=e.target.value,this.value=``,this.defaultLabel=``,this.valueError=``,this.change(`discrete`))}handleValueChange(e){if(!(e.target instanceof HTMLElement)||this.isInitialization(e))return;let t=e.target;this.value=this.inputValue(t),this.valueError=``,this.defaultLabel=this.defaultLabelFor(this.normalizeTextValue(this.value)),this.change(`typing`)}inputValue(e){return String(e.modelValue??``)}handleLabelChange(e){!(e.target instanceof HTMLElement)||this.isInitialization(e)||(this.label=this.inputValue(e.target),this.change(`typing`))}handleAttributeInput(e){return t=>{!(t.target instanceof HTMLElement)||this.isInitialization(t)||(this.linkAttributes={...this.linkAttributes,[e]:this.inputValue(t.target)},this.change(`typing`))}}handleSwitch(e){return t=>{if(!(t.target instanceof HTMLElement)||this.isInitialization(t))return;let{checked:n}=t.target;this.linkAttributes={...this.linkAttributes,...e(!!n)},this.change(`discrete`)}}isInitialization(e){return e instanceof CustomEvent&&!!e.detail?.initialize}async chooseElement(e){let t=this.selectedType;if(!t?.elementType||!t.refHandle)return;let n={...t.elementSelectConfig};delete n.elementType,delete n.limit,delete n.single,await this.dispatchElementSelectStartEvent(e.currentTarget instanceof HTMLElement?e.currentTarget:null);let r=await p(t.elementType,{...n,hideOnSelect:!0,modalTitle:o(`Choose {type}`,{type:t.label}),multiSelect:!1,onSelect:e=>{let[n]=e;n&&(this.value=`{${t.refHandle}:${n.id}@${n.siteId}:url}`,this.defaultLabel=String(n.label||``),this.valueError=``,this.change(`discrete`))}});r.on(`close`,()=>{this.dispatchElementSelectEvent(`element-select-end`),r.destroy()})}async dispatchElementSelectStartEvent(e){let t=[];this.dispatchEvent(new CustomEvent(`element-select-start`,{bubbles:!0,detail:{restoreFocusTo:e??void 0,waitUntil:e=>t.push(e)}})),await Promise.all(t)}dispatchElementSelectEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0}))}normalizeTextValue(e){let t=this.selectedType;if(e=e.trim(),!e||t?.kind!==`text`||this.validateTextValue(e))return e;let n=`${t.prefixes?.[0]??``}${e}`;return this.validateTextValue(n)?n:e}normalizeUrlSuffix(e){return e=e.trim(),!e||e.startsWith(`#`)||e.startsWith(`?`)?e:`?${e}`}renderTextDestination(e,t){return e===`url`||e===`email`?t.replaceAll(` `,`+`):e===`sms`?this.renderSmsDestination(t):e===`tel`?t.replaceAll(` `,`-`):t}renderSmsDestination(e){let[,t=``,n=``]=e.match(/^([^?&]*)(?:[?&]+(.*))?$/)??[];return(n?`${t}&${n.replaceAll(` `,`%20`)}`:t).replaceAll(` `,`-`)}validateTextValue(e){let t=this.selectedType?.pattern;if(!t)return!0;try{return new RegExp(t,`i`).test(e)}catch{return!0}}defaultLabelFor(e){let t=this.selectedType;if(!e||t?.kind!==`text`)return this.defaultLabel;let n=e;for(let e of t.prefixes??[])n.toLowerCase().startsWith(e.toLowerCase())&&(n=n.slice(e.length));return/^[^/]+\/$/.test(n)?n.slice(0,-1):n}currentValue(){let e=this.selectedType;if(!e)return null;let t=e.kind===`text`?this.normalizeTextValue(this.value):this.value,n=this.normalizeUrlSuffix(this.linkAttributes.urlSuffix),r=e.kind===`text`?this.renderTextDestination(e.id,t):t;return{...this.linkAttributes,defaultLabel:this.defaultLabelFor(t),href:t?`${r}${n}`:``,label:this.label.trim(),title:this.linkAttributes.title.trim(),type:e.id,urlSuffix:n,value:t}}change(e){if(!this.live)return;let t=this.currentValue();t&&(this.emittedValue=t,this.modelValue=t,this.dispatchEvent(new CustomEvent(`link-change`,{bubbles:!0,detail:{kind:e,value:t}})))}apply(){let e=this.selectedType,t=this.currentValue();if(!(!e||!t)){if(!t.value){this.valueError=o(`{attribute} cannot be blank.`,{attribute:e.label});return}if(e.kind===`text`&&!this.validateTextValue(t.value)){this.valueError=o(`{attribute} is invalid.`,{attribute:e.label});return}this.valueError=``,this.modelValue=t,this.dispatchEvent(new CustomEvent(`apply`,{bubbles:!0,detail:t}))}}cancel(){this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0}))}renderLabel(e){return i`<span slot="label">${e}</span>`}renderTypeSelect(){return this.types.length<2?e:i`
      <craft-field>
        ${this.renderLabel(o(`Link Type`))}
        <craft-select
          slot="input"
          .modelValue=${this.typeId}
          .disabled=${this.disabled}
        >
          <select
            slot="input"
            .value=${this.typeId}
            @change=${this.handleTypeChange}
          >
            ${this.types.map(e=>i`<option value=${e.id}>${e.label}</option>`)}
          </select>
        </craft-select>
      </craft-field>
    `}renderTypeInput(){let t=this.selectedType;if(!t)return e;if(t.kind===`element`)return i`
        <craft-field>
          ${this.renderLabel(t.label)}
          <div slot="input" class="craft-link-field__element">
            <craft-button
              type="button"
              variant="dashed"
              icon=${this.value?e:`plus`}
              ?disabled=${this.disabled}
              aria-describedby=${this.valueError?this.valueErrorId:e}
              aria-invalid=${this.valueError?`true`:e}
              @click=${this.chooseElement}
            >
              ${this.value?o(`Change`):o(`Choose`)}
            </craft-button>
            ${this.value&&this.defaultLabel?i`<span class="craft-link-selected-label"
                  >${this.defaultLabel}</span
                >`:e}
          </div>
          ${this.renderValueError(`feedback`)}
        </craft-field>
      `;let n=t.inputAttributes?.type??`text`,r=t.inputAttributes?.inputmode??void 0;return i`
      <craft-field>
        ${this.renderLabel(t.label)}
        <craft-input
          slot="input"
          data-link-value
          type=${n}
          inputmode=${r??e}
          aria-invalid=${this.valueError?`true`:e}
          .modelValue=${this.value}
          .disabled=${this.disabled}
          @model-value-changed=${this.handleValueChange}
        ></craft-input>
        ${this.renderValueError(`feedback`)}
      </craft-field>
    `}renderValueError(t){return this.valueError?i`
      <ul id=${this.valueErrorId} class="errors" slot=${t??e}>
        <li>
          <span class="sr-only">${o(`Error:`)}</span>
          ${this.valueError}
        </li>
      </ul>
    `:e}renderTextAttribute(t,n,r={}){return i`
      <craft-input
        label=${n}
        help-text=${r.helpText??e}
        placeholder=${r.placeholder??e}
        type="text"
        ?monospace=${r.code}
        .modelValue=${this.linkAttributes[t]}
        .disabled=${this.disabled}
        @model-value-changed=${this.handleAttributeInput(t)}
      ></craft-input>
    `}renderAdvancedField(t){let n=o(`Separate multiple values with spaces.`);switch(t){case`urlSuffix`:return this.renderTextAttribute(`urlSuffix`,o(`URL Suffix`),{helpText:o(`Query params (e.g. {ex1}) or a URI fragment (e.g. {ex2}) that should be appended to the URL.`,{ex1:`?p1=foo&p2=bar`,ex2:`#anchor`})});case`target`:return i`
          <craft-switch
            label=${o(`Open in a new tab`)}
            .checked=${this.linkAttributes.target===`_blank`}
            .disabled=${this.disabled}
            @model-value-changed=${this.handleSwitch(e=>({target:e?`_blank`:``}))}
          ></craft-switch>
        `;case`title`:return this.renderTextAttribute(`title`,o(`Title Text`));case`class`:return this.renderTextAttribute(`class`,o(`Class Name`),{helpText:n,code:!0});case`id`:return this.renderTextAttribute(`id`,o(`ID`),{code:!0});case`rel`:return this.renderTextAttribute(`rel`,o(`Relation ({ex})`,{ex:`rel`}),{helpText:n,code:!0});case`ariaLabel`:return this.renderTextAttribute(`ariaLabel`,o(`ARIA Label`));case`download`:return i`
          <craft-switch
            label=${o(`Download`)}
            .checked=${this.linkAttributes.download}
            .disabled=${this.disabled}
            @model-value-changed=${this.handleSwitch(e=>({download:e}))}
          ></craft-switch>
          ${this.linkAttributes.download?this.renderTextAttribute(`filename`,o(`Filename`)):e}
        `}}renderAdvancedFields(){if(!this.showAdvancedFields)return e;let t=[`urlSuffix`,`target`,`title`,`class`,`id`,`rel`,`ariaLabel`,`download`].filter(e=>this.hasAdvancedField(e));return i`
      <craft-disclosure id=${this.advancedPanelId} size="small">
        <craft-button
          slot="invoker"
          type="button"
          variant="plain"
          size="small"
          flush
          icon="chevron-right"
          icon-position="suffix"
        >
          ${o(`Advanced`)}
        </craft-button>
        <craft-field-group slot="content">
          ${this.showLabelField?i`
                <craft-input
                  label=${o(`Label`)}
                  type="text"
                  placeholder=${this.defaultLabel||e}
                  .modelValue=${this.label}
                  .disabled=${this.disabled}
                  @model-value-changed=${this.handleLabelChange}
                ></craft-input>
              `:e}
          ${t.map(e=>this.renderAdvancedField(e))}
        </craft-field-group>
      </craft-disclosure>
    `}renderButtons(){return this.live?e:i`
      <div class="buttons right">
        <craft-button
          type="button"
          variant="plain"
          size="small"
          ?disabled=${this.disabled}
          @click=${this.cancel}
        >
          ${o(`Cancel`)}
        </craft-button>
        <craft-button
          type="button"
          size="small"
          ?disabled=${this.disabled}
          @click=${this.apply}
        >
          ${o(`Apply`)}
        </craft-button>
      </div>
    `}renderHiddenInputs(){return this.name?Jn.map(e=>{let t=this.modelValue?.[e];return i`
        <input
          type="hidden"
          name=${`${this.name}[${e}]`}
          .value=${typeof t==`boolean`?t?`1`:``:t??``}
          ?disabled=${this.disabled}
        />
      `}):e}render(){let e=i`
      <div class="craft-link-field">
        <div class="craft-link-field__destination">
          ${this.renderTypeSelect()} ${this.renderTypeInput()}
        </div>
        ${this.renderAdvancedFields()} ${this.renderButtons()}
      </div>
    `;return i`
      ${this.live&&this.showAdvancedFields?i`<craft-pane
            class="craft-link-field__pane"
            appearance="outline"
            padding="lg"
            >${e}</craft-pane
          >`:e}
      ${this.renderHiddenInputs()}
    `}createRenderRoot(){return this}};d([t({attribute:`advanced-fields`,type:Array})],q.prototype,`advancedFields`,void 0),d([t({attribute:`show-label-field`,type:Boolean})],q.prototype,`showLabelField`,void 0),d([t({type:Array})],q.prototype,`types`,void 0),d([t({attribute:`model-value`,type:Object})],q.prototype,`modelValue`,void 0),d([t()],q.prototype,`name`,void 0),d([t({reflect:!0,type:Boolean})],q.prototype,`disabled`,void 0),d([t({reflect:!0,type:Boolean})],q.prototype,`live`,void 0),d([r()],q.prototype,`defaultLabel`,void 0),d([r()],q.prototype,`label`,void 0),d([r()],q.prototype,`linkAttributes`,void 0),d([r()],q.prototype,`typeId`,void 0),d([r()],q.prototype,`value`,void 0),d([r()],q.prototype,`valueError`,void 0),q=d([a(`craft-link-field`)],q);var Xn=0;function Zn(e,t,n){let r=null,i=u(),a=0,o=0,s=null,c=!1;i&&C(i,!1);function l(t){t?.preventDefault(),t?.stopPropagation(),S(),o=e.textarea.selectionStart,a=e.textarea.selectionEnd;let s=document.createElement(`div`);s.slot=`content`,s.classList.add(`p-2`);let c=document.createElement(`craft-link-field`);c.advancedFields=n.advancedFields,c.showLabelField=n.showLabelField,c.types=n.types,s.appendChild(c),i=d(t);let l=f(i);r=document.createElement(`craft-popover`),r.className=`craft-link-popover`,r.id=w(l),r.placement=`bottom-start`,r.config={referenceNode:i},r.appendChild(s),document.body.appendChild(r),c.addEventListener(`apply`,p),c.addEventListener(`cancel`,m),c.addEventListener(`element-select-start`,h),c.addEventListener(`element-select-end`,g),r.addEventListener(`opened-changed`,_),C(i,!1),ee(r)}function u(){return e.toolbar?.buttons?.link??e.container.querySelector(`[data-button="link"]`)}function d(t){return t?.currentTarget instanceof HTMLElement?t.currentTarget:e.toolbar?.buttons?.link??e.container.querySelector(`[data-button="link"]`)??e.wrapper}function f(e){return e.id||=(Xn+=1,`markdown-link-popover-anchor-${Xn}`),e.id}function p(n){let r=n.detail,i=e.textarea.value.slice(o,a),s=r.label||i||r.defaultLabel||r.value,c=y(r.href),l=r.title?`[${Bn(s)}](${c} "${v(r.title)}")`:`[${Bn(s)}](${c})`;e.textarea.focus(),e.textarea.setSelectionRange(o,a),e.textarea.setRangeText(l,o,a,`end`),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0})),t.isActive()&&t.render(e.getValue()),S()}function m(){S({restoreFocus:!0})}function h(e){r&&(c=!0,s=e.detail.restoreFocusTo??null,C(i,!1),e.detail.waitUntil(r.close()))}function g(){let e=r;e&&(c=!1,ee(e,s),s=null)}function _(e){e.target===r&&(e instanceof CustomEvent&&e.detail?.opened||c||S())}function v(e){return e.replace(/(["\\])/g,`\\$1`)}function y(e){return b(e)?e:`<${e.replace(/([\\<>])/g,`\\$1`)}>`}function b(e){return/^\{[\w\\]+:[^}\s]+\}$/.test(e)}function x(){r?.querySelector(`craft-input, craft-select, craft-button, input, select, button`)?.focus()}async function ee(e,t=null){if(await e.updateComplete,r===e){if(await e.open(),C(i,!0),t?.isConnected){t.focus();return}x()}}function S({restoreFocus:e=!1}={}){let t=r,n=i;r=null,s=null,c=!1,n&&C(n,!1),t?.removeEventListener(`opened-changed`,_),t?.remove(),e&&n?.focus()}function C(e,t){e&&(e.setAttribute(`aria-controls`,w(f(e))),e.setAttribute(`aria-expanded`,t.toString()),e.removeAttribute(`aria-pressed`))}function w(e){return`${e}-popover`}return{destroy:S,open:l}}var J=(e,t)=>({url:J.url(e,t),method:`post`});J.definition={methods:[`post`],url:`/{cpTrigger?}/{actionTrigger?}/app/render-elements`},J.url=(e,t)=>{Array.isArray(e)&&(e={cpTrigger:e[0],actionTrigger:e[1]}),e=u(e),c(e,[`cpTrigger`,`actionTrigger`]);let n={cpTrigger:e?.cpTrigger??`admin`,actionTrigger:e?.actionTrigger??`actions`};return J.definition.url.replace(`{cpTrigger?}`,n.cpTrigger?.toString()??``).replace(`{actionTrigger?}`,n.actionTrigger?.toString()??``).replace(/\/+$/,``)+l(t)},J.post=(e,t)=>({url:J.url(e,t),method:`post`});var Y=(e,t)=>({url:Y.url(e,t),method:`post`});Y.definition={methods:[`post`],url:`/{cpTrigger?}/{actionTrigger?}/app/render-components`},Y.url=(e,t)=>{Array.isArray(e)&&(e={cpTrigger:e[0],actionTrigger:e[1]}),e=u(e),c(e,[`cpTrigger`,`actionTrigger`]);let n={cpTrigger:e?.cpTrigger??`admin`,actionTrigger:e?.actionTrigger??`actions`};return Y.definition.url.replace(`{cpTrigger?}`,n.cpTrigger?.toString()??``).replace(`{actionTrigger?}`,n.actionTrigger?.toString()??``).replace(/\/+$/,``)+l(t)},Y.post=(e,t)=>({url:Y.url(e,t),method:`post`});var X=(e,t)=>({url:X.url(e,t),method:`post`});X.definition={methods:[`post`],url:`/{cpTrigger?}/{actionTrigger?}/app/render-markdown`},X.url=(e,t)=>{Array.isArray(e)&&(e={cpTrigger:e[0],actionTrigger:e[1]}),e=u(e),c(e,[`cpTrigger`,`actionTrigger`]);let n={cpTrigger:e?.cpTrigger??`admin`,actionTrigger:e?.actionTrigger??`actions`};return X.definition.url.replace(`{cpTrigger?}`,n.cpTrigger?.toString()??``).replace(`{actionTrigger?}`,n.actionTrigger?.toString()??``).replace(/\/+$/,``)+l(t)},X.post=(e,t)=>({url:X.url(e,t),method:`post`});function Qn(e,t,n,r,i,a,c){let l=!1,u=0,d=null,f=s({encode:n,flavor:t,htmlSanitizer:a,inlineOnly:r,markdown:``,sanitizeHtml:i});function p(){let t=e.container.querySelector(`[data-button="preview"]`);t&&(t.classList.toggle(`active`,l),t.setAttribute(`aria-pressed`,l.toString()))}function m(){if(e.preview.toggleAttribute(`inert`,!l),l){e.preview.removeAttribute(`aria-hidden`);return}e.preview.setAttribute(`aria-hidden`,`true`)}async function h(s){let p=++u;d&&window.clearTimeout(d),d=window.setTimeout(async()=>{try{f.encode=n,f.flavor=t,f.htmlSanitizer=a,f.inlineOnly=r,f.markdown=s,f.sanitizeHtml=i;let o=await f.post(X().url);l&&p===u&&(e.preview.innerHTML=o.html)}catch{l&&p===u&&(e.preview.textContent=o(`Couldn’t render Markdown preview.`))}},c)}async function g(){if(l=!l,p(),m(),!l){e.showNormalEditMode(),e.focus();return}e.showPreviewMode(),await h(e.getValue())}return m(),{destroy(){d&&=(window.clearTimeout(d),null)},isActive:()=>l,render:h,toggle:g}}function $n(e,t){async function n(n){if(n.defaultPrevented||!Vn(n))return;let r=er(n);if(r!==null){if(n.preventDefault(),r===`togglePreview`){await t.toggle();return}await e.performAction(r,n)}}let r=e=>void n(e);return e.textarea.addEventListener(`keydown`,r),()=>{e.textarea.removeEventListener(`keydown`,r)}}function er(e){let t=e.key.toLowerCase();return t===`e`&&!e.shiftKey?`toggleCode`:t===`.`&&e.shiftKey?`toggleQuote`:t===`p`&&e.shiftKey?`togglePreview`:null}function tr(){let e=`var(--c-input-fill, var(--c-form-control-fill, var(--c-surface-form)))`,t=`var(--c-input-border-color, var(--c-form-control-border-color, var(--c-color-neutral-border-quiet)))`,n=`var(--c-color-neutral-fill-quiet)`,r=`var(--c-color-neutral-on-quiet, var(--c-text-default))`,i=`var(--c-input-text, var(--c-text-default))`;return{name:`craft`,colors:{bgPrimary:e,bgSecondary:e,border:t,code:i,codeBg:n,cursor:i,del:i,h1:i,h2:i,h3:i,link:i,listMarker:i,placeholder:`var(--c-text-quiet)`,primary:r,rawLine:i,selection:`var(--markdown-field-selection-bg, var(--c-color-accent-fill-quiet))`,strong:i,syntax:i,syntaxMarker:i,text:i,textPrimary:i,textSecondary:i,toolbarActive:n,toolbarBg:e,toolbarBorder:t,toolbarHover:n,toolbarIcon:r,em:i,blockquote:i,hr:i},previewColors:{bg:`transparent`,blockquote:i,code:i,codeBg:n,em:i,h1:i,h2:i,h3:i,hr:i,link:i,strong:i,text:i}}}var nr=`https://www.markdownguide.org/basic-syntax/`;function rr(e){let t=e.toolbar?.buttons?.guide;if(!(t instanceof HTMLButtonElement))return()=>{};let n=o(`Markdown Guide (opens in a new tab)`),r=document.createElement(`a`);return r.className=t.className,r.href=nr,r.innerHTML=t.innerHTML,r.target=`_blank`,r.title=n,r.rel=`noopener`,r.setAttribute(`aria-label`,n),r.setAttribute(`data-button`,`guide`),t.replaceWith(r),delete e.toolbar.buttons.guide,()=>{r.replaceWith(t),e.toolbar.buttons.guide=t}}var ir={bold:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 46.3 14.3 32 32 32l48 0 16 0 128 0c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128L96 480l-16 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-160L48 96 32 96C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64L112 96l0 128 112 0zM112 288l0 128 144 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0-112 0z"/></svg>`),"circle-question":Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`),code:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`),eye:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>`),h1:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96zm448 0c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-64 32c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l17.7-8.8L448 384l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-288z"/></svg>`),h2:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96zm385.9 47.4c11.6-9.9 26.4-15.4 41.7-15.4l4.5 0c35.3 0 64 28.7 64 64l0 5.8c0 17.9-7.5 35.1-20.8 47.2L378.4 392.4c-9.7 8.9-13 22.9-8.2 35.2S386.8 448 400 448l208 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.7 0 100.2-91.9c26.4-24.2 41.5-58.5 41.5-94.4l0-5.8c0-70.7-57.3-128-128-128l-4.5 0c-30.6 0-60.1 10.9-83.3 30.8l-29 24.9c-13.4 11.5-15 31.7-3.5 45.1s31.7 15 45.1 3.5l29-24.9z"/></svg>`),h3:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96zM400 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l114.7 0-89.4 89.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l72 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-64.6 0c-11.7 0-21.7-8.5-23.7-20.1l-.2-1.2c-2.9-17.4-19.4-29.2-36.8-26.3s-29.2 19.4-26.3 36.8l.2 1.2c7.1 42.4 43.8 73.5 86.8 73.5l64.6 0c66.3 0 120-53.7 120-120c0-64.6-51-117.2-114.9-119.9l89.5-89.5c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L400 64z"/></svg>`),h4:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M479 103.8L441 256l135 0 0-160c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-176 0c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l48-192c4.3-17.1 21.7-27.6 38.8-23.3s27.6 21.7 23.3 38.8zM32 64c17.7 0 32 14.3 32 32l0 128 192 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128L64 288l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 256 0 96C0 78.3 14.3 64 32 64z"/></svg>`),h5:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96zM432 64c-15.1 0-28.2 10.6-31.3 25.4l-32 152c-2 9.4 .4 19.3 6.5 26.8s15.2 11.8 24.8 11.8l124 0c28.7 0 52 23.3 52 52s-23.3 52-52 52l-67.6 0c-10.3 0-19.5-6.6-22.8-16.4l-3.2-9.7c-5.6-16.8-23.7-25.8-40.5-20.2s-25.8 23.7-20.2 40.5l3.2 9.7c12 35.9 45.6 60.2 83.5 60.2l67.6 0c64.1 0 116-51.9 116-116s-51.9-116-116-116l-84.6 0L458 128l118 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L432 64z"/></svg>`),h6:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M537 116l-35.3 44.1C578.6 163.1 640 226.4 640 304c0 79.5-64.5 144-144 144s-144-64.5-144-144c0-38.3 13-75.5 37-105.5L487 76c11-13.8 31.2-16 45-5s16 31.2 5 45zM416 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM32 64c17.7 0 32 14.3 32 32l0 128 192 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128L64 288l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 256 0 96C0 78.3 14.3 64 32 64z"/></svg>`),italic:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0L160 416l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0L224 96l-64 0c-17.7 0-32-14.3-32-32z"/></svg>`),link:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>`),"list-check":Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`),"list-ol":Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M24 56c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 120 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-96-8 0C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432l33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`),"list-ul":Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>`),paperclip:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>`),"quotes-left":Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"/></svg>`),strikethrough:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-209.9 0-.4-.1-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c0 0 0 0 0 0s0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6c0 0 0 0 0 0l.2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1l-75.7 0c7 5.6 11.4 11.2 13.9 17.2z"/></svg>`),upload:Z(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>`)};function Z(e){return e.replace(`<svg `,`<svg aria-hidden="true" focusable="false" `)}var ar={prefix:`~~`,suffix:`~~`,trimFirst:!0};function or(e,t){let n=new Set(e.toolbarButtons),r=new Set(e.uploadFolderId?[`upload`]:[]);e.assetSources.length||n.delete(`asset`);let i=[];for(let e of sr(t)){let t=e.filter(e=>{let t=e.optionName??e.name;return n.has(t)||r.has(t)});t.length&&(i.length&&i.push(W.separator),i.push(...t))}return i}function sr(e){return[[Q(W.bold,o(`Bold`),`bold`),Q(W.italic,o(`Italic`),`italic`),lr(`strikethrough`,`strikethrough`,o(`Strikethrough`),({editor:e})=>{ae.applyCustomFormat(e.textarea,ar),e.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))},void 0,({editor:e})=>dr(e.textarea,`~~`)),Q(W.code,o(`Code`),`code`,void 0,({activeFormats:e})=>e.includes(`code`))],[Q(W.h1,o(`Heading 1`),`h1`),Q(W.h2,o(`Heading 2`),`h2`),Q(W.h3,o(`Heading 3`),`h3`),cr(4,o(`Heading 4`)),cr(5,o(`Heading 5`)),cr(6,o(`Heading 6`)),Q(W.quote,o(`Quote`),`quotes-left`)],[Q(W.bulletList,o(`Bulleted List`),`list-ul`,`unordered-list`),Q(W.orderedList,o(`Numbered List`),`list-ol`,`ordered-list`),Q(W.taskList,o(`Check List`),`list-check`,`check-list`)],[lr(`link`,`link`,o(`Link`),({event:t})=>e.openLinkPopover(t),`insertLink`),lr(`asset`,`paperclip`,o(`Asset`),e.openAssetSelector),Q(W.upload,o(`Upload File`),`upload`)],[lr(`preview`,`eye`,o(`Preview`),e.togglePreview),lr(`guide`,`circle-question`,o(`Markdown Guide`),()=>{})]]}function cr(e,t){return lr(`h${e}`,`h${e}`,t,({editor:t})=>{ae.insertHeader(t.textarea,e,!0),t.textarea.dispatchEvent(new Event(`input`,{bubbles:!0}))},void 0,({editor:t})=>ur(t.textarea)===e)}function Q(e,t,n,r=e.name,i){return{...e,icon:ir[n]??e.icon,isActive:i,optionName:r,title:t}}function lr(e,t,n,r,i,a){return{actionId:i,action:r,icon:ir[t]??``,isActive:a,name:e,title:n}}function ur(e){let{selectionStart:t,value:n}=e,r=n.lastIndexOf(`
`,Math.max(0,t-1))+1,i=n.indexOf(`
`,t),a=i===-1?n.length:i;return n.slice(r,a).match(/^(#{1,6})\s/)?.[1]?.length??0}function dr(e,t){let{selectionEnd:n,selectionStart:r,value:i}=e,a=i.slice(0,r),o=i.slice(n);return(a.split(t).length-1)%2==1&&o.includes(t)}var fr=`asset`,pr=f();function mr(e,t){if(e)return{batch:!1,enabled:!0,maxSize:2**53-1,onInsertFile:n=>{let r=Array.isArray(n)?n[0]:n;if(!r)throw Error(`No file was selected for upload.`);let[i]=h([r]);return hr(i,e,t)}}}async function hr(e,t,n){let r=new g(e,{url:m.url(),parameters:{folderId:t}});try{return gr(e,await r.upload(),n)}catch(e){throw pr.error(e instanceof Error?e.message:o(`Couldn’t upload file.`)),e}}function gr(e,t,n){if(!t.assetId)throw Error(t.message||o(`Couldn’t upload file.`));let r=Bn(t.filename||e.name),i=`{${fr}:${t.assetId}@${n}:url}`;return e.type.startsWith(`image/`)?`![${r}](${i})`:`[${r||i}](${i})`}var $=class extends n{constructor(...e){super(...e),this.assetController=null,this.cleanups=[],this.editor=null,this.linkPopoverController=null,this.previewController=null,this.resizeObserver=null,this.observedWidth=0,this.resolvedInputId=null,this.formValue=null,this.updateCharCounter=null,this.assetAnyUploader=!1,this.assetCondition=null,this.assetSources=[],this.label=null,this.describedBy=null,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.flavor=`gfm`,this.encode=!1,this.inlineOnly=!1,this.sanitizeHtml=!1,this.htmlSanitizer=null,this.linkAdvancedFields=[],this.linkTypes=[],this.maxHeight=null,this.maxLength=null,this.name=null,this.placeholder=null,this.previewDelay=250,this.rows=8,this.showStats=!1,this.showLinkLabelField=!1,this.toolbarButtons=[],this.showToolbar=!1,this.uploadFolderId=null,this.uploadSiteId=``,this.statsFormatter=e=>`
      <div class="overtype-stat">
        <span>${e.chars} ${o(`chars`)}, ${e.words} ${o(`words`)}, ${e.lines} ${o(`lines`)}</span>
      </div>
      <div class="overtype-stat">${o(`Line`)} ${e.line}, ${o(`Col`)} ${e.column}</div>
    `}get value(){return this.editor?.getValue()??this.formValue??this.textContent??``}set value(e){this.formValue=e,this.editor?.setValue(e),this.updateCharCounter?.()}connectedCallback(){super.connectedCallback(),this.initializeEditor()}disconnectedCallback(){super.disconnectedCallback(),this.destroy()}initializeEditor(){if(this.editor)return;let e=this.releaseInputIdToTextarea(),t=or({assetSources:this.assetSources,toolbarButtons:this.toolbarButtons,uploadFolderId:this.uploadFolderId},{openLinkPopover:e=>this.linkPopoverController?.open(e),openAssetSelector:()=>this.assetController?.open(),togglePreview:()=>this.previewController?.toggle()}),[n]=new zn(this,this.editorOptions(e,t));if(!n)return;this.editor=n,this.formValue=n.getValue(),this.editor.preview.classList.add(`markdown-field-preview`);let r=this.addCharCounter(n);this.addTypeIndicator(n);let i=Qn(n,this.flavor,this.encode,this.inlineOnly,this.sanitizeHtml,this.htmlSanitizer,this.previewDelay);this.previewController=i,this.linkPopoverController=Zn(n,i,{advancedFields:this.linkAdvancedFields,showLabelField:this.showLinkLabelField,types:this.linkTypes}),this.assetController=Wn(n,this.assetAnyUploader?{uploaderId:null}:{},this.assetCondition,this.assetSources,i),this.cleanups=[()=>i.destroy(),()=>this.linkPopoverController?.destroy(),...r?[r]:[],rr(n),Kn(n,i),$n(n,i)],this.syncEditorState(),this.observeWidth(n),requestAnimationFrame(()=>{this.editor===n&&n.setValue(n.getValue())}),this.syncInitialFormValue(n.textarea.name)}observeWidth(e){typeof ResizeObserver>`u`||(this.resizeObserver=new ResizeObserver(([t])=>{let n=t?.contentRect.width??0;n<=0||n===this.observedWidth||(this.observedWidth=n,this.editor===e&&e.setValue(e.getValue()))}),this.resizeObserver.observe(this))}releaseInputIdToTextarea(){return this.resolvedInputId===null?(this.resolvedInputId=this.id,this.resolvedInputId&&(this.id=`${this.resolvedInputId}-editor`),this.resolvedInputId):this.resolvedInputId}editorOptions(e,t){let n={autoResize:!0,fontFamily:`var(--c-font-mono)`,fontSize:`var(--markdown-field-font-size, var(--c-text-base))`,lineHeight:`var(--c-leading-normal)`,maxHeight:this.maxHeight?`${this.maxHeight}px`:null,minHeight:void 0,padding:`var(--c-spacing-md) var(--c-input-spacing-inline)`,placeholder:this.placeholder??``,showStats:this.showStats,statsFormatter:this.statsFormatter,smartLists:!0,spellcheck:!1,textareaProps:this.textareaProps(e),theme:tr(),toolbar:this.showToolbar&&(t?.length??0)>0,toolbarButtons:t,value:this.value},r=this.disabled||this.readonly?void 0:mr(this.uploadFolderId,this.uploadSiteId);return r&&(n.fileUpload=r),n}addTypeIndicator(e){if(this.showToolbar)return;let t=document.createElement(`div`);t.className=`markdown-field-type-indicator`,t.setAttribute(`aria-label`,o(`Markdown`)),t.setAttribute(`role`,`img`);let n=document.createElement(`craft-icon`);n.setAttribute(`name`,`markdown`),n.setAttribute(`family`,`brands`),n.setAttribute(`aria-hidden`,`true`),t.append(n),this.footerControls(e).appendChild(t)}addCharCounter(e){if(!this.maxLength)return null;let t=this.maxLength,n=document.createElement(`div`);n.className=`markdown-field-char-counter`,n.setAttribute(`aria-live`,`polite`);let r=()=>{let r=t-e.textarea.value.length;n.textContent=String(r),n.setAttribute(`aria-label`,o(`Characters left: {chars, number}`,{chars:r})),n.classList.toggle(`negative-chars-left`,r<0)};return r(),this.updateCharCounter=r,e.textarea.addEventListener(`input`,r),this.footerControls(e).appendChild(n),()=>{e.textarea.removeEventListener(`input`,r),this.updateCharCounter=null}}footerControls(e){let t=e.wrapper.querySelector(`.markdown-field-footer-controls`);return t||(t=document.createElement(`div`),t.className=`markdown-field-footer-controls`,e.wrapper.appendChild(t)),t}textareaProps(e){let t={class:`nicetext code`,rows:this.rows};return e&&(t.id=e),this.name&&(t.name=this.name),this.describedBy&&(t[`aria-describedby`]=this.describedBy),this.maxLength&&(t.maxlength=this.maxLength),this.disabled&&(t.disabled=`disabled`),this.readonly&&(t.readonly=`readonly`),this.required&&(t.required=`required`),this.invalid&&(t[`aria-invalid`]=`true`),t}syncInitialFormValue(e){if(!e)return;let t=this.closest(`form`),n=window.jQuery??window.$;if(!t||!n)return;let r=n(t),i=r.data(`initialSerializedValue`);if(Object(i).constructor!==String)return;let a=r.data(`serializer`),o=a instanceof Function?a():r.serialize();this.serializedWithoutInput(o,e)===i&&r.data(`initialSerializedValue`,o)}serializedWithoutInput(e,t){return e.split(`&`).filter(e=>this.serializedParamName(e)!==t).join(`&`)}serializedParamName(e){let[t=``]=e.split(`=`);return decodeURIComponent(t.replace(/\+/g,`%20`))}destroy(){this.formValue=this.editor?.getValue()??this.formValue,this.resizeObserver?.disconnect();for(let e of this.cleanups)e();this.editor?.destroy(),this.assetController=null,this.cleanups=[],this.editor=null,this.linkPopoverController=null,this.observedWidth=0,this.previewController=null,this.resizeObserver=null}syncEditorState(){this.editor&&(this.label?this.editor.textarea.setAttribute(`aria-label`,this.label):this.editor.textarea.removeAttribute(`aria-label`),this.editor.textarea.name=this.name??``,this.editor.textarea.disabled=this.disabled,this.editor.textarea.readOnly=this.readonly,this.editor.textarea.required=this.required,this.invalid?this.editor.textarea.setAttribute(`aria-invalid`,`true`):this.editor.textarea.removeAttribute(`aria-invalid`),this.editor.wrapper.querySelectorAll(`button`).forEach(e=>e.disabled=this.disabled||this.readonly),this.disabled||this.readonly||!this.showToolbar?this.editor.toolbar?.hide():this.editor.toolbar?.show())}createRenderRoot(){return this}shouldUpdate(){return this.toggleAttribute(`show-toolbar`,this.showToolbar),this.syncEditorState(),!1}};d([t({attribute:`asset-any-uploader`,type:Boolean})],$.prototype,`assetAnyUploader`,void 0),d([t({attribute:`asset-condition`,type:Object})],$.prototype,`assetCondition`,void 0),d([t({attribute:`asset-sources`,type:Array})],$.prototype,`assetSources`,void 0),d([t()],$.prototype,`label`,void 0),d([t({attribute:`described-by`})],$.prototype,`describedBy`,void 0),d([t({type:Boolean})],$.prototype,`disabled`,void 0),d([t({type:Boolean})],$.prototype,`readonly`,void 0),d([t({type:Boolean})],$.prototype,`required`,void 0),d([t({attribute:`aria-invalid`,type:Boolean})],$.prototype,`invalid`,void 0),d([t()],$.prototype,`flavor`,void 0),d([t({type:Boolean})],$.prototype,`encode`,void 0),d([t({attribute:`inline-only`,type:Boolean})],$.prototype,`inlineOnly`,void 0),d([t({attribute:`sanitize-html`,type:Boolean})],$.prototype,`sanitizeHtml`,void 0),d([t({attribute:`html-sanitizer`})],$.prototype,`htmlSanitizer`,void 0),d([t({attribute:`link-advanced-fields`,type:Array})],$.prototype,`linkAdvancedFields`,void 0),d([t({attribute:`link-types`,type:Array})],$.prototype,`linkTypes`,void 0),d([t({attribute:`max-height`,type:Number})],$.prototype,`maxHeight`,void 0),d([t({attribute:`max-length`,type:Number})],$.prototype,`maxLength`,void 0),d([t()],$.prototype,`name`,void 0),d([t()],$.prototype,`placeholder`,void 0),d([t({attribute:`preview-delay`,type:Number})],$.prototype,`previewDelay`,void 0),d([t({type:Number})],$.prototype,`rows`,void 0),d([t({attribute:`show-stats`,type:Boolean})],$.prototype,`showStats`,void 0),d([t({attribute:`show-link-label-field`,type:Boolean})],$.prototype,`showLinkLabelField`,void 0),d([t({attribute:`toolbar-buttons`,type:Array})],$.prototype,`toolbarButtons`,void 0),d([t({attribute:`show-toolbar`,type:Boolean})],$.prototype,`showToolbar`,void 0),d([t({attribute:`upload-folder-id`,type:Number})],$.prototype,`uploadFolderId`,void 0),d([t({attribute:`upload-site-id`})],$.prototype,`uploadSiteId`,void 0),$=d([a(`craft-markdown-field`)],$);var _r=$;export{Vn as n,_r as t};