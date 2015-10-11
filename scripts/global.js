/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery-1.11.2.min.map
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Show a message on the console so devs know we're active
if ( !jQuery.migrateMute && window.console && window.console.log ) {
	window.console.log("JQMIGRATE: Logging is active");
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			console.warn( "JQMIGRATE: " + msg );
			if ( jQuery.migrateTrace && console.trace ) {
				console.trace();
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') may use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldParseJSON = jQuery.parseJSON,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		if ( match[ 3 ] ) {
			migrateWarn("$(html) HTML text after last tag is ignored");
		}
		// Consistently reject any HTML-like string starting with a hash (#9521)
		// Note that this may break jQuery 1.6.x code that otherwise would work.
		if ( match[ 0 ].charAt( 0 ) === "#" ) {
			migrateWarn("HTML string cannot start with a '#' character");
			jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( match[ 2 ], context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json && json !== null ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}

	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}

	jQuery.browser = browser;
}

// Warn if the code tries to get jQuery.browser
migrateWarnProp( jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated" );

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );
(function($){
    $.tiny = $.tiny || { };
    
    $.tiny.scrollbar = {
        options: {  
            axis: 'y', // vertical or horizontal scrollbar? ( x || y ).
            wheel: 40,  //how many pixels must the mouswheel scroll at a time.
            scroll: true, //enable or disable the mousewheel;
            size: 'auto', //set the size of the scrollbar to auto or a fixed number.
            sizethumb: 'auto' //set the size of the thumb to auto or a fixed number.
        }
    };  
    
    $.fn.tinyscrollbar = function(options) { 
        var options = $.extend({}, $.tiny.scrollbar.options, options);      
        this.each(function(){ $(this).data('tsb', new Scrollbar($(this), options)); });
        return this;
    };
    $.fn.tinyscrollbar_update = function(sScroll) { return $(this).data('tsb').update(sScroll); };
    
    function Scrollbar(root, options){
        var oSelf = this;
        var oWrapper = root;
        var oViewport = { obj: $('.viewport', root) };
        var oContent = { obj: $('.overview', root) };
        var oScrollbar = { obj: $('.scrollbar', root) };
        var oTrack = { obj: $('.track', oScrollbar.obj) };
        var oThumb = { obj: $('.thumb', oScrollbar.obj) };
        var sAxis = options.axis == 'x', sDirection = sAxis ? 'left' : 'top', sSize = sAxis ? 'Width' : 'Height';
        var iScroll, iPosition = { start: 0, now: 0 }, iMouse = {};

        function initialize() { 
            oSelf.update();
            setEvents();
            return oSelf;
        }
        this.update = function(sScroll){
            oViewport[options.axis] = oViewport.obj[0]['offset'+ sSize];
            oContent[options.axis] = oContent.obj[0]['scroll'+ sSize];
            oContent.ratio = oViewport[options.axis] / oContent[options.axis];
            oScrollbar.obj.toggleClass('disable', oContent.ratio >= 1);
            oTrack[options.axis] = options.size == 'auto' ? oViewport[options.axis] : options.size;
            oThumb[options.axis] = Math.min(oTrack[options.axis], Math.max(0, ( options.sizethumb == 'auto' ? (oTrack[options.axis] * oContent.ratio) : options.sizethumb )));
            oScrollbar.ratio = options.sizethumb == 'auto' ? (oContent[options.axis] / oTrack[options.axis]) : (oContent[options.axis] - oViewport[options.axis]) / (oTrack[options.axis] - oThumb[options.axis]);
            iScroll = (sScroll == 'relative' && oContent.ratio <= 1) ? Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll)) : 0;
            iScroll = (sScroll == 'bottom' && oContent.ratio <= 1) ? (oContent[options.axis] - oViewport[options.axis]) : isNaN(parseInt(sScroll)) ? iScroll : parseInt(sScroll);
            setSize();
			//added for min-height(#454910)
            if(oThumb[options.axis] < 20){
                options.sizethumb = 20;
                this.update();
            }
        };
        function setSize(){
            oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
            oContent.obj.css(sDirection, -iScroll);
            iMouse['start'] = oThumb.obj.offset()[sDirection];
            var sCssSize = sSize.toLowerCase(); 
            oScrollbar.obj.css(sCssSize, oTrack[options.axis]);
            oTrack.obj.css(sCssSize, oTrack[options.axis]);            
            oThumb.obj.css(sCssSize, oThumb[options.axis]);     
        };      
        function setEvents(){
            oThumb.obj.bind('mousedown', start);
            oThumb.obj[0].ontouchstart = function(oEvent){
                oEvent.preventDefault();
                oThumb.obj.unbind('mousedown');
                start(oEvent.touches[0]);
                return false;
            };  
            oTrack.obj.bind('mouseup', drag);
            if(options.scroll && this.addEventListener){
                oWrapper[0].addEventListener('DOMMouseScroll', wheel, false);
                oWrapper[0].addEventListener('mousewheel', wheel, false );
            }
            else if(options.scroll){oWrapper[0].onmousewheel = wheel;}
        };
        function start(oEvent){
            iMouse.start = sAxis ? oEvent.pageX : oEvent.pageY;
            var oThumbDir = parseInt(oThumb.obj.css(sDirection));
            iPosition.start = oThumbDir == 'auto' ? 0 : oThumbDir;
            $(document).bind('mousemove', drag);
            document.ontouchmove = function(oEvent){
                $(document).unbind('mousemove');
                drag(oEvent.touches[0]);
            };
            $(document).bind('mouseup', end);
            oThumb.obj.bind('mouseup', end);
            oThumb.obj[0].ontouchend = document.ontouchend = function(oEvent){
                $(document).unbind('mouseup');
                oThumb.obj.unbind('mouseup');
                end(oEvent.touches[0]);
            };
            return false;
        };      
        function wheel(oEvent){
            if(!(oContent.ratio >= 1)){
                var oEvent = oEvent || window.event;
                var iDelta = oEvent.wheelDelta ? oEvent.wheelDelta/120 : -oEvent.detail/3;
                iScroll -= iDelta * options.wheel;
                iScroll = Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll));
                oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
                oContent.obj.css(sDirection, -iScroll);
                
                oEvent = $.event.fix(oEvent);
                oEvent.preventDefault();
            };
        };
        function end(oEvent){
            $(document).unbind('mousemove', drag);
            $(document).unbind('mouseup', end);
            oThumb.obj.unbind('mouseup', end);
            document.ontouchmove = oThumb.obj[0].ontouchend = document.ontouchend = null;
            return false;
        };
        function drag(oEvent){          
            if(!(oContent.ratio >= 1)){
                iPosition.now = Math.min((oTrack[options.axis] - oThumb[options.axis]), Math.max(0, (iPosition.start + ((sAxis ? oEvent.pageX : oEvent.pageY) - iMouse.start))));
                iScroll = iPosition.now * oScrollbar.ratio;
                oContent.obj.css(sDirection, -iScroll);
                oThumb.obj.css(sDirection, iPosition.now);
            }
            return false;
        };
        
        return initialize();
    };
})(jQuery);
/*
jQuery Clear-Input plugin
v1.0
Author: Aidan Feldman

USAGE
Add the class .clear-input to any text input element
whose value you want cleared when it gains focus.
The initial value will be replaced when the input
loses focus, and no new text has been entered.

If you prefer to not add classes to your elements,
you can alternatively call clearInput() on any jQuery
input object.
*/
(function( $ ){
  // define the initialValue() function
  $.fn.initialValue = function(value) {
    if (value) {
      return this.attr('initial-value', value);
    } else {
      return this.attr('initial-value');
    }
  };
  
  $.fn.initialValueTA = function(text) {
    if (text) {
      return this.attr('initial-value', text);
    } else {
      return this.attr('initial-value');
    }
  };
  
  $.fn.clearInput = function() {
    return this
      .focus(function(){
        if (this.value == $(this).initialValue()) {
          this.value = '';
          $(this).css('color','#3d3a36');
        }
      })
      .blur(function(){
        if (this.value == '') {
          this.value = $(this).initialValue();
          $(this).css('color','#a4a3a1');
        }
      })
      .each(function(index, elt) {
        $(this).initialValue(this.value);
      });
  };
  
  $.fn.clearInputTA = function() {
    return this
      .focus(function(){
        if ($(this).text() == $(this).initialValueTA()) {
          $(this).text('');
          $(this).css('color','#3d3a36');
        }
      })
      .blur(function(){
      	console.log( 'Text = '+$(this).text()+' and IV = '+ $(this).initialValueTA() );
        //if ($(this).text() == '') {
          //$(this).text( $(this).initialValueTA() );
         // $(this).css('color','#a4a3a1');
        //}
      })
      .each(function(index, elt) {
        $(this).initialValueTA( $(this).text() );
      });
  };

  // apply plugin to all inputs with class ".clear-input"
  $(function() {
    $('input.clear-input').clearInput();
    $('textarea').clearInputTA();
  });
})( jQuery );
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, J??????????rn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 4187 2007-12-16 17:15:27Z joern.zaefferer $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are three supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
    metadata : {
        defaults : {
            type: 'class',
            name: 'metadata',
            cre: /({.*})/,
            single: 'metadata'
        },
        setType: function( type, name ){
            this.defaults.type = type;
            this.defaults.name = name;
        },
        get: function( elem, opts ){
            var settings = $.extend({},this.defaults,opts);
            // check for empty string in single property
            if ( !settings.single.length ) settings.single = 'metadata';
            
            var data = $.data(elem, settings.single);
            // returned cached data if it already exists
            if ( data ) return data;
            
            data = "{}";
            
            if ( settings.type == "class" ) {
                var m = settings.cre.exec( elem.className );
                if ( m )
                    data = m[1];
            } else if ( settings.type == "elem" ) {
                if( !elem.getElementsByTagName )
                    return undefined;
                var e = elem.getElementsByTagName(settings.name);
                if ( e.length )
                    data = $.trim(e[0].innerHTML);
            } else if ( elem.getAttribute != undefined ) {
                var attr = elem.getAttribute( settings.name );
                if ( attr )
                    data = attr;
            }
            
            if ( data.indexOf( '{' ) <0 )
            data = "{" + data + "}";
            
            data = eval("(" + data + ")");
            
            $.data( elem, settings.single, data );
            return data;
        }
    }
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
    return $.metadata.get( this[0], opts );
};

})(jQuery);
/*
 * jQuery validation plug-in 1.5.5
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 J????rn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
    // http://docs.jquery.com/Plugins/Validation/validate
    validate: function( options ) {

        // if nothing is selected, return nothing; can't chain anyway
        if (!this.length) {
            options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
            return;
        }

        // check if a validator for this form was already created
        var validator = $.data(this[0], 'validator');
        if ( validator ) {
            return validator;
        }
        
        validator = new $.validator( options, this[0] );
        $.data(this[0], 'validator', validator); 
        
        if ( validator.settings.onsubmit ) {
        
            // allow suppresing validation by adding a cancel class to the submit button
            this.find("input, button").filter(".cancel").click(function() {
                validator.cancelSubmit = true;
            });
            
            // when a submitHandler is used, capture the submitting button
            if (validator.settings.submitHandler) {
                this.find("input, button").filter(":submit").click(function() {
                    validator.submitButton = this;
                });
            }
        
            // validate the form on submit
            this.submit( function( event ) {
                if ( validator.settings.debug )
                    // prevent form submit to be able to see console output
                    event.preventDefault();
                    
                function handle() {
                    if ( validator.settings.submitHandler ) {
                        if (validator.submitButton) {
                            // insert a hidden input as a replacement for the missing submit button
                            var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
                        }
                        validator.settings.submitHandler.call( validator, validator.currentForm );
                        if (validator.submitButton) {
                            // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                            hidden.remove();
                        }
                        return false;
                    }
                    return true;
                }
                    
                // prevent submit for invalid forms or custom submit handlers
                if ( validator.cancelSubmit ) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if ( validator.form() ) {
                    if ( validator.pendingRequest ) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }
        
        return validator;
    },
    // http://docs.jquery.com/Plugins/Validation/valid
    valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
                valid &= validator.element(this);
            });
            return valid;
        }
    },
    // attributes: space seperated list of attributes to retrieve and remove
    removeAttrs: function(attributes) {
        var result = {},
            $element = this;
        $.each(attributes.split(/\s/), function(index, value) {
            result[value] = $element.attr(value);
            $element.removeAttr(value);
        });
        return result;
    },
    // http://docs.jquery.com/Plugins/Validation/rules
    rules: function(command, argument) {
        var element = this[0];
        
        if (command) {
            var settings = $.data(element.form, 'validator').settings;
            var staticRules = settings.rules;
            var existingRules = $.validator.staticRules(element);
            switch(command) {
            case "add":
                $.extend(existingRules, $.validator.normalizeRule(argument));
                staticRules[element.name] = existingRules;
                if (argument.messages)
                    settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
                break;
            case "remove":
                if (!argument) {
                    delete staticRules[element.name];
                    return existingRules;
                }
                var filtered = {};
                $.each(argument.split(/\s/), function(index, method) {
                    filtered[method] = existingRules[method];
                    delete existingRules[method];
                });
                return filtered;
            }
        }
        
        var data = $.validator.normalizeRules(
        $.extend(
            {},
            $.validator.metadataRules(element),
            $.validator.classRules(element),
            $.validator.attributeRules(element),
            $.validator.staticRules(element)
        ), element);
        
        // make sure required is at front
        if (data.required) {
            var param = data.required;
            delete data.required;
            data = $.extend({required: param}, data);
        }
        
        return data;
    }
});

// Custom selectors
$.extend($.expr[":"], {
    // http://docs.jquery.com/Plugins/Validation/blank
    blank: function(a) {return !$.trim(a.value);},
    // http://docs.jquery.com/Plugins/Validation/filled
    filled: function(a) {return !!$.trim(a.value);},
    // http://docs.jquery.com/Plugins/Validation/unchecked
    unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
    this.settings = $.extend( {}, $.validator.defaults, options );
    this.currentForm = form;
    this.init();
};

$.validator.format = function(source, params) {
    if ( arguments.length == 1 ) 
        return function() {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.validator.format.apply( this, args );
        };
    if ( arguments.length > 2 && params.constructor != Array  ) {
        params = $.makeArray(arguments).slice(1);
    }
    if ( params.constructor != Array ) {
        params = [ params ];
    }
    $.each(params, function(i, n) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
    });
    return source;
};

$.extend($.validator, {
    
    defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: true,
        errorContainer: $( [] ),
        errorLabelContainer: $( [] ),
        onsubmit: true,
        ignore: [],
        ignoreTitle: false,
        onfocusin: function(element) {
            this.lastActive = element;
                
            // hide error label and remove error class on focus if enabled
            if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
                this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
                this.errorsFor(element).hide();
            }
        },
        onfocusout: function(element) {
            if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
                this.element(element);
            }
        },
        onkeyup: function(element) {
            if ( element.name in this.submitted || element == this.lastElement ) {
                this.element(element);
            }
        },
        onclick: function(element) {
            if ( element.name in this.submitted )
                this.element(element);
        },
        highlight: function( element, errorClass, validClass ) {
            $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function( element, errorClass, validClass ) {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
    setDefaults: function(settings) {
        $.extend( $.validator.defaults, settings );
    },

    messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        dateDE: "Bitte geben Sie ein g????ltiges Datum ein.",
        number: "Please enter a valid number.",
        numberDE: "Bitte geben Sie eine Nummer ein.",
        digits: "Please enter only digits",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },
    
    autoCreateRanges: false,
    
    prototype: {
        
        init: function() {
            this.labelContainer = $(this.settings.errorLabelContainer);
            this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
            this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
            this.submitted = {};
            this.valueCache = {};
            this.pendingRequest = 0;
            this.pending = {};
            this.invalid = {};
            this.reset();
            
            var groups = (this.groups = {});
            $.each(this.settings.groups, function(key, value) {
                $.each(value.split(/\s/), function(index, name) {
                    groups[name] = key;
                });
            });
            var rules = this.settings.rules;
            $.each(rules, function(key, value) {
                rules[key] = $.validator.normalizeRule(value);
            });
            
            function delegate(event) {
                var validator = $.data(this[0].form, "validator");
                validator.settings["on" + event.type] && validator.settings["on" + event.type].call(validator, this[0] );
            }
            $(this.currentForm)
                .delegate("focusin focusout keyup", ":text, :password, :file, select, textarea", delegate)
                .delegate("click", ":radio, :checkbox", delegate);

            if (this.settings.invalidHandler)
                $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
        },

        // http://docs.jquery.com/Plugins/Validation/Validator/form
        form: function() {
            this.checkForm();
            $.extend(this.submitted, this.errorMap);
            this.invalid = $.extend({}, this.errorMap);
            if (!this.valid())
                $(this.currentForm).triggerHandler("invalid-form", [this]);
            this.showErrors();
            return this.valid();
        },
        
        checkForm: function() {
            this.prepareForm();
            for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
                this.check( elements[i] );
            }
            return this.valid(); 
        },
        
        // http://docs.jquery.com/Plugins/Validation/Validator/element
        element: function( element ) {
            element = this.clean( element );
            this.lastElement = element;
            this.prepareElement( element );
            this.currentElements = $(element);
            var result = this.check( element );
            if ( result ) {
                delete this.invalid[element.name];
            } else {
                this.invalid[element.name] = true;
            }
            if ( !this.numberOfInvalids() ) {
                // Hide error containers on last error
                this.toHide = this.toHide.add( this.containers );
            }
            this.showErrors();
            return result;
        },

        // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
        showErrors: function(errors) {
            if(errors) {
                // add items to error list and map
                $.extend( this.errorMap, errors );
                this.errorList = [];
                for ( var name in errors ) {
                    this.errorList.push({
                        message: errors[name],
                        element: this.findByName(name)[0]
                    });
                }
                // remove items from success list
                this.successList = $.grep( this.successList, function(element) {
                    return !(element.name in errors);
                });
            }
            this.settings.showErrors
                ? this.settings.showErrors.call( this, this.errorMap, this.errorList )
                : this.defaultShowErrors();
        },
        
        // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
        resetForm: function() {
            if ( $.fn.resetForm )
                $( this.currentForm ).resetForm();
            this.submitted = {};
            this.prepareForm();
            this.hideErrors();
            this.elements().removeClass( this.settings.errorClass );
        },
        
        numberOfInvalids: function() {
            return this.objectLength(this.invalid);
        },
        
        objectLength: function( obj ) {
            var count = 0;
            for ( var i in obj )
                count++;
            return count;
        },
        
        hideErrors: function() {
            this.addWrapper( this.toHide ).hide();
        },
        
        valid: function() {
            return this.size() == 0;
        },
        
        size: function() {
            return this.errorList.length;
        },
        
        focusInvalid: function() {
            if( this.settings.focusInvalid ) {
                try {
                    $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus();
                } catch(e) {
                    // ignore IE throwing errors when focusing hidden elements
                }
            }
        },
        
        findLastActive: function() {
            var lastActive = this.lastActive;
            return lastActive && $.grep(this.errorList, function(n) {
                return n.element.name == lastActive.name;
            }).length == 1 && lastActive;
        },
        
        elements: function() {
            var validator = this,
                rulesCache = {};
            
            // select all valid inputs inside the form (no submit or reset buttons)
            // workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
            return $([]).add(this.currentForm.elements)
            .filter(":input")
            .not(":submit, :reset, :image, [disabled]")
            .not( this.settings.ignore )
            .filter(function() {
                !this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
            
                // select only the first element for each name, and only those with rules specified
                if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
                    return false;
                
                rulesCache[this.name] = true;
                return true;
            });
        },
        
        clean: function( selector ) {
            return $( selector )[0];
        },
        
        errors: function() {
            return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );            
        },
        
        reset: function() {
            this.successList = [];
            this.errorList = [];
            this.errorMap = {};
            this.toShow = $([]);
            this.toHide = $([]);
            this.formSubmitted = false;
            this.currentElements = $([]);
        },
        
        prepareForm: function() {
            this.reset();
            this.toHide = this.errors().add( this.containers );
        },
        
        prepareElement: function( element ) {
            this.reset();
            this.toHide = this.errorsFor(element);
        },
    
        check: function( element ) {
            element = this.clean( element );
            
            // if radio/checkbox, validate first element in group instead
            if (this.checkable(element)) {
                element = this.findByName( element.name )[0];
            }
            
            var rules = $(element).rules();
            var dependencyMismatch = false;
            for( method in rules ) {
                var rule = { method: method, parameters: rules[method] };
                try {
                    var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );
                    
                    // if a method indicates that the field is optional and therefore valid,
                    // don't mark it as valid when there are no other rules
                    if ( result == "dependency-mismatch" ) {
                        dependencyMismatch = true;
                        continue;
                    }
                    dependencyMismatch = false;
                    
                    if ( result == "pending" ) {
                        this.toHide = this.toHide.not( this.errorsFor(element) );
                        return;
                    }
                    
                    if( !result ) {
                        this.formatAndAdd( element, rule );
                        return false;
                    }
                } catch(e) {
                    this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
                         + ", check the '" + rule.method + "' method");
                    throw e;
                }
            }
            if (dependencyMismatch)
                return;
            if ( this.objectLength(rules) )
                this.successList.push(element);
            return true;
        },
        
        // return the custom message for the given element and validation method
        // specified in the element's "messages" metadata
        customMetaMessage: function(element, method) {
            if (!$.metadata)
                return;
            
            var meta = this.settings.meta
                ? $(element).metadata()[this.settings.meta]
                : $(element).metadata();
            
            return meta && meta.messages && meta.messages[method];
        },
        
        // return the custom message for the given element name and validation method
        customMessage: function( name, method ) {
            var m = this.settings.messages[name];
            return m && (m.constructor == String
                ? m
                : m[method]);
        },
        
        // return the first defined argument, allowing empty strings
        findDefined: function() {
            for(var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined)
                    return arguments[i];
            }
            return undefined;
        },
        
        defaultMessage: function( element, method) {
            return this.findDefined(
                this.customMessage( element.name, method ),
                this.customMetaMessage( element, method ),
                // title is never undefined, so handle empty string as undefined
                !this.settings.ignoreTitle && element.title || undefined,
                $.validator.messages[method],
                "<strong>Warning: No message defined for " + element.name + "</strong>"
            );
        },
        
        formatAndAdd: function( element, rule ) {
            var message = this.defaultMessage( element, rule.method );
            if ( typeof message == "function" ) 
                message = message.call(this, rule.parameters, element);
            this.errorList.push({
                message: message,
                element: element
            });
            this.errorMap[element.name] = message;
            this.submitted[element.name] = message;
        },
        
        addWrapper: function(toToggle) {
            if ( this.settings.wrapper )
                toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
            return toToggle;
        },
        
        defaultShowErrors: function() {
            for ( var i = 0; this.errorList[i]; i++ ) {
                var error = this.errorList[i];
                this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
                this.showLabel( error.element, error.message );
            }
            if( this.errorList.length ) {
                this.toShow = this.toShow.add( this.containers );
            }
            if (this.settings.success) {
                for ( var i = 0; this.successList[i]; i++ ) {
                    this.showLabel( this.successList[i] );
                }
            }
            if (this.settings.unhighlight) {
                for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
                    this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
                }
            }
            this.toHide = this.toHide.not( this.toShow );
            this.hideErrors();
            this.addWrapper( this.toShow ).show();
        },
        
        validElements: function() {
            return this.currentElements.not(this.invalidElements());
        },
        
        invalidElements: function() {
            return $(this.errorList).map(function() {
                return this.element;
            });
        },
        
        showLabel: function(element, message) {
            var label = this.errorsFor( element );
            if ( label.length ) {
                // refresh error/success class
                label.removeClass().addClass( this.settings.errorClass );
            
                // check if we have a generated label, replace the message then
                label.attr("generated") && label.html(message);
            } else {
                // create label
                label = $("<" + this.settings.errorElement + "/>")
                    .attr({"for":  this.idOrName(element), generated: true})
                    .addClass(this.settings.errorClass)
                    .html(message || "");
                if ( this.settings.wrapper ) {
                    // make sure the element is visible, even in IE
                    // actually showing the wrapped element is handled elsewhere
                    label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                }
                if ( !this.labelContainer.append(label).length )
                    this.settings.errorPlacement
                        ? this.settings.errorPlacement(label, $(element) )
                        : label.insertAfter(element);
            }
            if ( !message && this.settings.success ) {
                label.text("");
                typeof this.settings.success == "string"
                    ? label.addClass( this.settings.success )
                    : this.settings.success( label );
            }
            this.toShow = this.toShow.add(label);
        },
        
        errorsFor: function(element) {
            return this.errors().filter("[for='" + this.idOrName(element) + "']");
        },
        
        idOrName: function(element) {
            return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
        },

        checkable: function( element ) {
            return /radio|checkbox/i.test(element.type);
        },
        
        findByName: function( name ) {
            // select by name and filter by form for performance over form.find("[name=...]")
            var form = this.currentForm;
            return $(document.getElementsByName(name)).map(function(index, element) {
                return element.form == form && element.name == name && element  || null;
            });
        },
        
        getLength: function(value, element) {
            switch( element.nodeName.toLowerCase() ) {
            case 'select':
                return $("option:selected", element).length;
            case 'input':
                if( this.checkable( element) )
                    return this.findByName(element.name).filter(':checked').length;
            }
            return value.length;
        },
    
        depend: function(param, element) {
            return this.dependTypes[typeof param]
                ? this.dependTypes[typeof param](param, element)
                : true;
        },
    
        dependTypes: {
            "boolean": function(param, element) {
                return param;
            },
            "string": function(param, element) {
                return !!$(param, element.form).length;
            },
            "function": function(param, element) {
                return param(element);
            }
        },
        
        optional: function(element) {
            return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
        },
        
        startRequest: function(element) {
            if (!this.pending[element.name]) {
                this.pendingRequest++;
                this.pending[element.name] = true;
            }
        },
        
        stopRequest: function(element, valid) {
            this.pendingRequest--;
            // sometimes synchronization fails, make sure pendingRequest is never < 0
            if (this.pendingRequest < 0)
                this.pendingRequest = 0;
            delete this.pending[element.name];
            if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
                $(this.currentForm).submit();
            } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
                $(this.currentForm).triggerHandler("invalid-form", [this]);
            }
        },
        
        previousValue: function(element) {
            return $.data(element, "previousValue") || $.data(element, "previousValue", previous = {
                old: null,
                valid: true,
                message: this.defaultMessage( element, "remote" )
            });
        }
        
    },
    
    classRuleSettings: {
        required: {required: true},
        required_local: {required: true},
        email: {email: true},
        url: {url: true},
        date: {date: true},
        dateISO: {dateISO: true},
        dateDE: {dateDE: true},
        number: {number: true},
        numberDE: {numberDE: true},
        digits: {digits: true},
        creditcard: {creditcard: true}
    },
    
    addClassRules: function(className, rules) {
        className.constructor == String ?
            this.classRuleSettings[className] = rules :
            $.extend(this.classRuleSettings, className);
    },
    
    classRules: function(element) {
        var rules = {};
        var classes = $(element).attr('class');
        classes && $.each(classes.split(' '), function() {
            if (this in $.validator.classRuleSettings) {
                $.extend(rules, $.validator.classRuleSettings[this]);
            }
        });
        return rules;
    },
    
    attributeRules: function(element) {
        var rules = {};
        var $element = $(element);
        
        for (method in $.validator.methods) {
            var value = $element.attr(method);
            if (value) {
                rules[method] = value;
            }
        }
        
        // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
        if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
            delete rules.maxlength;
        }
        
        return rules;
    },
    
    metadataRules: function(element) {
        if (!$.metadata) return {};
        
        var meta = $.data(element.form, 'validator').settings.meta;
        return meta ?
            $(element).metadata()[meta] :
            $(element).metadata();
    },
    
    staticRules: function(element) {
        var rules = {};
        var validator = $.data(element.form, 'validator');
        if (validator.settings.rules) {
            rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
        }
        return rules;
    },
    
    normalizeRules: function(rules, element) {
        // handle dependency check
        $.each(rules, function(prop, val) {
            // ignore rule when param is explicitly false, eg. required:false
            if (val === false) {
                delete rules[prop];
                return;
            }
            if (val.param || val.depends) {
                var keepRule = true;
                switch (typeof val.depends) {
                    case "string":
                        keepRule = !!$(val.depends, element.form).length;
                        break;
                    case "function":
                        keepRule = val.depends.call(element, element);
                        break;
                }
                if (keepRule) {
                    rules[prop] = val.param !== undefined ? val.param : true;
                } else {
                    delete rules[prop];
                }
            }
        });
        
        // evaluate parameters
        $.each(rules, function(rule, parameter) {
            rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
        });
        
        // clean number parameters
        $.each(['minlength', 'maxlength', 'min', 'max'], function() {
            if (rules[this]) {
                rules[this] = Number(rules[this]);
            }
        });
        $.each(['rangelength', 'range'], function() {
            if (rules[this]) {
                rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
            }
        });
        
        if ($.validator.autoCreateRanges) {
            // auto-create ranges
            if (rules.min && rules.max) {
                rules.range = [rules.min, rules.max];
                delete rules.min;
                delete rules.max;
            }
            if (rules.minlength && rules.maxlength) {
                rules.rangelength = [rules.minlength, rules.maxlength];
                delete rules.minlength;
                delete rules.maxlength;
            }
        }
        
        // To support custom messages in metadata ignore rule methods titled "messages"
        if (rules.messages) {
            delete rules.messages
        }
        
        return rules;
    },
    
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function(data) {
        if( typeof data == "string" ) {
            var transformed = {};
            $.each(data.split(/\s/), function() {
                transformed[this] = true;
            });
            data = transformed;
        }
        return data;
    },
    
    // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
    addMethod: function(name, method, message) {
        $.validator.methods[name] = method;
        $.validator.messages[name] = message || $.validator.messages[name];
        if (method.length < 3) {
            $.validator.addClassRules(name, $.validator.normalizeRule(name));
        }
    },

    methods: {

        // http://docs.jquery.com/Plugins/Validation/Methods/required
        required: function(value, element, param) {
            // check if dependency is met
            if ( !this.depend(param, element) )
                return "dependency-mismatch";
            switch( element.nodeName.toLowerCase() ) {
            case 'select':
                var options = $("option:selected", element);
                return options.length > 0 && ( element.type == "select-multiple" || ($.browser.msie && !(options[0].attributes['value'].specified) ? options[0].text : options[0].value).length > 0);
            case 'input':
                if ( this.checkable(element) )
                    return this.getLength(value, element) > 0;
            default:
                return $.trim(value).length > 0;
            }
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/remote
        remote: function(value, element, param) {
            if ( this.optional(element) )
                return "dependency-mismatch";
            
            var previous = this.previousValue(element);
            
            if (!this.settings.messages[element.name] )
                this.settings.messages[element.name] = {};
            this.settings.messages[element.name].remote = typeof previous.message == "function" ? previous.message(value) : previous.message;
            
            param = typeof param == "string" && {url:param} || param; 
            
            if ( previous.old !== value ) {
                previous.old = value;
                var validator = this;
                this.startRequest(element);
                var data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    url: param,
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    success: function(response) {
                        var valid = response === true;
                        if ( valid ) {
                            var submitted = validator.formSubmitted;
                            validator.prepareElement(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.showErrors();
                        } else {
                            var errors = {};
                            errors[element.name] = previous.message = response || validator.defaultMessage( element, "remote" );
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            } else if( this.pending[element.name] ) {
                return "pending";
            }
            return previous.valid;
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/minlength
        minlength: function(value, element, param) {
            return this.optional(element) || this.getLength($.trim(value), element) >= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
        maxlength: function(value, element, param) {
            return this.optional(element) || this.getLength($.trim(value), element) <= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
        rangelength: function(value, element, param) {
            var length = this.getLength($.trim(value), element);
            return this.optional(element) || ( length >= param[0] && length <= param[1] );
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/min
        min: function( value, element, param ) {
            return this.optional(element) || value >= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/max
        max: function( value, element, param ) {
            return this.optional(element) || value <= param;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/range
        range: function( value, element, param ) {
            return this.optional(element) || ( value >= param[0] && value <= param[1] );
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/email
        email: function(value, element) {
            // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
            return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/url
        url: function(value, element) {
            // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
            return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/date
        date: function(value, element) {
            return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
        dateISO: function(value, element) {
            return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/dateDE
        dateDE: function(value, element) {
            return this.optional(element) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value);
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/number
        number: function(value, element) {
            return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
        },
    
        // http://docs.jquery.com/Plugins/Validation/Methods/numberDE
        numberDE: function(value, element) {
            return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/digits
        digits: function(value, element) {
            return this.optional(element) || /^\d+$/.test(value);
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
        // based on http://en.wikipedia.org/wiki/Luhn
        creditcard: function(value, element) {
            if ( this.optional(element) )
                return "dependency-mismatch";
            // accept only digits and dashes
            if (/[^0-9-]+/.test(value))
                return false;
            var nCheck = 0,
                nDigit = 0,
                bEven = false;

            value = value.replace(/\D/g, "");

            for (n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n);
                var nDigit = parseInt(cDigit, 10);
                if (bEven) {
                    if ((nDigit *= 2) > 9)
                        nDigit -= 9;
                }
                nCheck += nDigit;
                bEven = !bEven;
            }

            return (nCheck % 10) == 0;
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/accept
        accept: function(value, element, param) {
            param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
            return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
        },
        
        // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
        equalTo: function(value, element, param) {
            return value == $(param).val();
        }
        
    }
    
});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort() 
;(function($) {
    var ajax = $.ajax;
    var pendingRequests = {};
    $.ajax = function(settings) {
        // create settings for compatibility with ajaxSetup
        settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
        var port = settings.port;
        if (settings.mode == "abort") {
            if ( pendingRequests[port] ) {
                pendingRequests[port].abort();
            }
            return (pendingRequests[port] = ajax.apply(this, arguments));
        }
        return ajax.apply(this, arguments);
    };
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target 

// provides triggerEvent(type: String, target: Element) to trigger delegated events
;(function($) {
    $.each({
        focus: 'focusin',
        blur: 'focusout'    
    }, function( original, fix ){
        $.event.special[fix] = {
            setup:function() {
                if ( $.browser.msie ) return false;
                this.addEventListener( original, $.event.special[fix].handler, true );
            },
            teardown:function() {
                if ( $.browser.msie ) return false;
                this.removeEventListener( original,
                $.event.special[fix].handler, true );
            },
            handler: function(e) {
                arguments[0] = $.event.fix(e);
                arguments[0].type = fix;
                return $.event.handle.apply(this, arguments);
            }
        };
    });
    $.extend($.fn, {
        delegate: function(type, delegate, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments);
                }
            });
        },
        triggerEvent: function(type, target) {
            return this.triggerHandler(type, [$.event.fix({ type: type, target: target })]);
        }
    })
})(jQuery);
/*
 * Scroller JQ, by Ambrose Ferber, based on:
 *
 * simplyScroll 1.0.4 - a scroll-tastic jQuery plugin
 *
 * http://logicbox.net/jquery/simplyscroll
 * http://logicbox.net/blog/simplyscroll-jquery-plugin
 * http://plugins.jquery.com/project/simplyScroll
 *
 * Copyright (c) 2009 Will Kelly - http://logicbox.net
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Last revised: 03/07/2009 21:13
 *
 */

(function($) {

$.fn.simplyScroll = function(o) {
	return this.each(function() {
		new $.simplyScroll(this,o);
	});
};

var defaults = {
	className: 'simply-scroll',
	frameRate: 24, //No of movements per second
	speed: 1, //No of pixels per frame
	speedFast: 3,
	horizontal: true,
	autoMode: 'off', //disables buttons 'loop','bounce'
	pauseOnHover: true,
	startOnLoad: false, //use this if having rendering problems (safari 3 + Mac OSX?)
	localJsonSource: '', //format [{"src":"images/pic.jpg","title":"title","link":"http://"},{etc..}]
	flickrFeed: '',
	jsonImgWidth: 240,
	jsonImgHeight: 180
};
	
$.simplyScroll = function(el,o) {
	
	var self = this;
	
	this.o = $.extend({}, defaults, o || {});
	this.auto = this.o.autoMode!=="off" ? true : false;
	
	//called on ul/ol/div etc
	this.$list = $(el);
	
	//generate extra markup
	this.$list.addClass('simply-scroll-list')
		.wrap('<div class="simply-scroll-clip"></div>')
		.parent().wrap('<div class="' + this.o.className + ' simply-scroll-container"></div>');
	
	if (!this.o.auto) { //button placeholders
		this.$list.parent().parent()
		.prepend('<div class="simply-scroll-forward"></div>')
		.prepend('<div class="simply-scroll-back"></div>');
	}
	
	//load image data
	if (this.o.flickrFeed) {
		$.getJSON(this.o.flickrFeed + "&format=json&jsoncallback=?",
			function(data) {
				json = [];
				$.each(data.items, function(i,item) {
					json.push({
						"src": item.media.m,
						"title": item.title,
						"link": item.link
					});
				});
				self.renderData(json);
			}
		);
	} else if (this.o.localJsonSource) {
		$.getJSON(this.o.localJsonSource,
			function(json) {
				self.renderData(json);
			}
		);
	} else {
		
		if (!this.o.startOnLoad) {
			this.init();
		} else {
			//wait for load before completing setup
			$(window).load(function() { self.init();  });
		}
		
	}
		
};
	
$.simplyScroll.fn = $.simplyScroll.prototype = {};

$.simplyScroll.fn.extend = $.simplyScroll.extend = $.extend;

$.simplyScroll.fn.extend({
	init: function() {
		//shortcuts
		this.$items = this.$list.children();
		this.$clip = this.$list.parent();
		this.$container = this.$clip.parent();

		if (!this.o.horizontal) {
			this.itemMax = this.$items.eq(0).outerHeight(true); 
			this.clipMax = this.$clip.height();
			this.dimension = 'height';			
			this.moveBackClass = 'simply-scroll-btn-up';
			this.moveForwardClass = 'simply-scroll-btn-down';
		} else {
			this.itemMax = this.$items.eq(0).outerWidth(true);
			this.clipMax = this.$clip.width();			
			this.dimension = 'width';
			this.moveBackClass = 'simply-scroll-btn-left';
			this.moveForwardClass = 'simply-scroll-btn-right';
		}
		
		this.posMin = 0;
		
		/* 
		IMPORTANT: The script assumes multiple elements within a list are the same width or height 
		to work out how many extra elements to generate to simulate the loop. 
		
		If you want this script to work with unequal sized elements don't modify the next line 
		to do this:
		
		this.$items.each(function() {
			self.posMax += !this.o.horizontal ? $(this).outerHeight(true) : $(this).outerWidth(true);
		});
		
		as it will cause white-space and a jump to appear when elements have wildly different dimensions
		See: http://logicbox.net/jquery/simplyscroll/test_unequalelements.html
		
		Instead simply add an extra wrapper element around your list and init simplyScroll on that, 
		essentially scrolling just one element. Less efficient but it does the job!
		
		*/
		this.posMax = this.$items.length * this.itemMax;
		
		this.$list.css(this.dimension,this.posMax +'px');
		
		if (this.o.autoMode=='loop') {
			var addItems = Math.ceil(this.clipMax / this.itemMax);	
			this.$items.slice(0,addItems).clone(true).appendTo(this.$list);
			this.posMax += (this.clipMax - this.o.speed);
			this.$list.css(this.dimension,this.posMax+(this.itemMax*addItems) +'px');
		}
		
		this.interval = null;	
		this.intervalDelay = Math.floor(1000 / this.o.frameRate);
		
		//ensure that speed is divisible by item width
		while (this.itemMax % this.o.speed !== 0) {
			this.o.speed--;
			if (this.o.speed===0) {
				this.o.speed=1; break;	
			}
		}
		
		/*while (this.itemMax % this.o.speedFast !== 0) {
			this.o.speedFast--;
			if (this.o.speedFast===0) {
				this.o.speedFast=1; break;	
			}
		}*/
		
		var self = this;
		this.trigger = null;
		this.funcMoveBack = function() { self.trigger=this;self.moveBack(); };
		this.funcMoveForward = function() { self.trigger=this;self.moveForward(); };
		this.funcMoveStop = function() { self.moveStop(); };
		this.funcMoveResume = function() { self.moveResume(); };
		
		var speedOrig = self.o.speed;
		
		if (this.auto) {
			if (this.o.pauseOnHover) {
				this.$clip.hover(this.funcMoveStop,this.funcMoveResume);
			}
			this.moveForward();
		} else {
			this.$btnBack = $('.simply-scroll-back',this.$container)
				.addClass('simply-scroll-btn' + ' ' + this.moveBackClass + ' ' + 'disabled')
				.hover(this.funcMoveBack,this.funcMoveStop)
				.mousedown(function(){
					self.o.speed = self.o.speedFast;
				})
				.mouseup(function(){
					self.o.speed = speedOrig;
				});
			this.$btnForward = $('.simply-scroll-forward',this.$container)
				.addClass('simply-scroll-btn' + ' ' + this.moveForwardClass)
				.hover(this.funcMoveForward,this.funcMoveStop)
				.mousedown(function(){
					self.o.speed = self.o.speedFast;
				})
				.mouseup(function(){
					self.o.speed = speedOrig;
				});
		}
	},
	moveForward: function() {
		var self = this;
		this.movement = 'forward';
		if (this.trigger !== null) {
			this.$btnBack.removeClass('disabled');
		}
		self.interval = setInterval(function() {
			if (!self.o.horizontal && self.$clip[0].scrollTop < (self.posMax-self.clipMax)) {
				self.$clip[0].scrollTop += self.o.speed;
			} else if (self.o.horizontal && self.$clip[0].scrollLeft < (self.posMax-self.clipMax)) {
				self.$clip[0].scrollLeft += self.o.speed; 
			} else if (self.o.autoMode=='loop') {
				self.resetPos();
			} else {
				self.moveStop(self.movement);
			}
		},self.intervalDelay);
	},
	moveBack: function() {
		var self = this;
		this.movement = 'back';
		if (this.trigger !== null) {
			this.$btnForward.removeClass('disabled');
		}
		self.interval = setInterval(function() {
			if (!self.o.horizontal && self.$clip[0].scrollTop>0) {
				self.$clip[0].scrollTop -= self.o.speed;
			} else if (self.o.horizontal && self.$clip[0].scrollLeft>0) {
				self.$clip[0].scrollLeft -= self.o.speed;
			} else if (self.o.autoMode=='loop') {
				self.resetPos();
			} else {
				self.moveStop(self.movement);
			}
		},self.intervalDelay);
	},
	moveStop: function(moveDir) {
		clearInterval(this.interval);	
		if (this.trigger!==null) {
			if (typeof moveDir != "undefined") {
				$(this.trigger).addClass('disabled');
			}
			this.trigger = null;
		}
		if (this.auto) {
			if (this.o.autoMode=='bounce') {
				moveDir == 'forward' ? this.moveBack() : this.moveForward();
			}
		}
	},
	moveResume: function() {
		this.movement=='forward' ? this.moveForward() : this.moveBack();
	},
	resetPos: function() {
		if (!this.o.horizontal) {
			this.$clip[0].scrollTop = 0;
		} else {
			this.$clip[0].scrollLeft = 0;
		}
	},
	renderData: function(json) {
		if (json.length>0) { //render json data
			var self = this;
			$.each(json, function(i,item) {
				$("<img/>").attr({
					src: item.src,
					title: item.title,
					alt: item.title,
					width: self.o.jsonImgWidth,
					height: self.o.jsonImgHeight
				}).appendTo(self.$list);
			});
			this.init();
		}
	}
});
		  
})(jQuery);
(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.38 (29-MAR-2011)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2010 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function($) {

if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
	//alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
	return;
}

$.fn._fadeIn = $.fn.fadeIn;

var noOp = function() {};

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
var mode = document.documentMode || 0;
var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
$.blockUI   = function(opts) { install(window, opts); };
$.unblockUI = function(opts) { remove(window, opts); };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
$.growlUI = function(title, message, timeout, onClose) {
	var $m = $('<div class="growlUI"></div>');
	if (title) $m.append('<h1>'+title+'</h1>');
	if (message) $m.append('<h2>'+message+'</h2>');
	if (timeout == undefined) timeout = 3000;
	$.blockUI({
		message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
		timeout: timeout, showOverlay: false,
		onUnblock: onClose, 
		css: $.blockUI.defaults.growlCSS
	});
};

// plugin method for blocking element content
$.fn.block = function(opts) {
	return this.unblock({ fadeOut: 0 }).each(function() {
		if ($.css(this,'position') == 'static')
			this.style.position = 'relative';
		if ($.browser.msie)
			this.style.zoom = 1; // force 'hasLayout'
		install(this, opts);
	});
};

// plugin method for unblocking element content
$.fn.unblock = function(opts) {
	return this.each(function() {
		remove(this, opts);
	});
};

$.blockUI.version = 2.38; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
$.blockUI.defaults = {
	// message displayed when blocking (use null for no message)
	message:  '<h1>Please wait...</h1>',

	title: null,	  // title string; only used when theme == true
	draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)
	
	theme: false, // set to true to use with jQuery UI themes
	
	// styles for the message when blocking; if you wish to disable
	// these and use an external stylesheet then do this in your code:
	// $.blockUI.defaults.css = {};
	css: {
		padding:	0,
		margin:		0,
		width:		'30%',
		top:		'40%',
		left:		'35%',
		textAlign:	'center',
		color:		'#000',
		border:		'3px solid #aaa',
		backgroundColor:'#fff',
		cursor:		'wait'
	},
	
	// minimal style set used when themes are used
	themedCSS: {
		width:	'30%',
		top:	'40%',
		left:	'35%'
	},

	// styles for the overlay
	overlayCSS:  {
		backgroundColor: '#000',
		opacity:	  	 0.6,
		cursor:		  	 'wait'
	},

	// styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'5px',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		'-webkit-border-radius': '10px',
		'-moz-border-radius':	 '10px',
		'border-radius': 		 '10px'
	},
	
	// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
	// (hat tip to Jorge H. N. de Vasconcelos)
	iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

	// force usage of iframe in non-IE browsers (handy for blocking applets)
	forceIframe: false,

	// z-index for the blocking overlay
	baseZ: 1000,

	// set these to true to have the message automatically centered
	centerX: true, // <-- only effects element blocking (page block controlled via css above)
	centerY: true,

	// allow body element to be stetched in ie6; this makes blocking look better
	// on "short" pages.  disable if you wish to prevent changes to the body height
	allowBodyStretch: true,

	// enable if you want key and mouse events to be disabled for content that is blocked
	bindEvents: true,

	// be default blockUI will supress tab navigation from leaving blocking content
	// (if bindEvents is true)
	constrainTabKey: true,

	// fadeIn time in millis; set to 0 to disable fadeIn on block
	fadeIn:  200,

	// fadeOut time in millis; set to 0 to disable fadeOut on unblock
	fadeOut:  400,

	// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
	timeout: 0,

	// disable if you don't want to show the overlay
	showOverlay: true,

	// if true, focus will be placed in the first available input field when
	// page blocking
	focusInput: true,

	// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
	applyPlatformOpacityRules: true,
	
	// callback method invoked when fadeIn has completed and blocking message is visible
	onBlock: null,

	// callback method invoked when unblocking has completed; the callback is
	// passed the element that has been unblocked (which is the window object for page
	// blocks) and the options that were passed to the unblock call:
	//	 onUnblock(element, options)
	onUnblock: null,

	// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
	quirksmodeOffsetHack: 4,

	// class name of the message block
	blockMsgClass: 'blockMsg'
};

// private data and functions follow...

var pageBlock = null;
var pageBlockEls = [];

function install(el, opts) {
	var full = (el == window);
	var msg = opts && opts.message !== undefined ? opts.message : undefined;
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
	var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
	var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
	msg = msg === undefined ? opts.message : msg;

	// remove the current block (if there is one)
	if (full && pageBlock)
		remove(window, {fadeOut:0});

	// if an existing element is being used as the blocking content then we capture
	// its current place in the DOM (and current display style) so we can restore
	// it when we unblock
	if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
		var node = msg.jquery ? msg[0] : msg;
		var data = {};
		$(el).data('blockUI.history', data);
		data.el = node;
		data.parent = node.parentNode;
		data.display = node.style.display;
		data.position = node.style.position;
		if (data.parent)
			data.parent.removeChild(node);
	}

	var z = opts.baseZ;

	// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
	// layer1 is the iframe layer which is used to supress bleed through of underlying content
	// layer2 is the overlay layer which has opacity and a wait cursor (by default)
	// layer3 is the message content that is displayed while blocking

	var lyr1 = ($.browser.msie || opts.forceIframe) 
		? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
		: $('<div class="blockUI" style="display:none"></div>');
	
	var lyr2 = opts.theme 
	 	? $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>')
	 	: $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

	var lyr3, s;
	if (opts.theme && full) {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:fixed">' +
				'<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (opts.theme) {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:absolute">' +
				'<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (full) {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+z+';display:none;position:fixed"></div>';
	}			
	else {
		s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+z+';display:none;position:absolute"></div>';
	}
	lyr3 = $(s);

	// if we have a message, style it
	if (msg) {
		if (opts.theme) {
			lyr3.css(themedCSS);
			lyr3.addClass('ui-widget-content');
		}
		else 
			lyr3.css(css);
	}

	// style the overlay
	if (!opts.theme && (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform))))
		lyr2.css(opts.overlayCSS);
	lyr2.css('position', full ? 'fixed' : 'absolute');

	// make iframe layer transparent in IE
	if ($.browser.msie || opts.forceIframe)
		lyr1.css('opacity',0.0);

	//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
	var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
	$.each(layers, function() {
		this.appendTo($par);
	});
	
	if (opts.theme && opts.draggable && $.fn.draggable) {
		lyr3.draggable({
			handle: '.ui-dialog-titlebar',
			cancel: 'li'
		});
	}

	// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
	var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
	if (ie6 || expr) {
		// give body 100% height
		if (full && opts.allowBodyStretch && $.boxModel)
			$('html,body').css('height','100%');

		// fix ie6 issue when blocked element has a border width
		if ((ie6 || !$.boxModel) && !full) {
			var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
			var fixT = t ? '(0 - '+t+')' : 0;
			var fixL = l ? '(0 - '+l+')' : 0;
		}

		// simulate fixed position
		$.each([lyr1,lyr2,lyr3], function(i,o) {
			var s = o[0].style;
			s.position = 'absolute';
			if (i < 2) {
				full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
					 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
				full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
					 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
				if (fixL) s.setExpression('left', fixL);
				if (fixT) s.setExpression('top', fixT);
			}
			else if (opts.centerY) {
				if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
				s.marginTop = 0;
			}
			else if (!opts.centerY && full) {
				var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
				var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
				s.setExpression('top',expression);
			}
		});
	}

	// show the message
	if (msg) {
		if (opts.theme)
			lyr3.find('.ui-widget-content').append(msg);
		else
			lyr3.append(msg);
		if (msg.jquery || msg.nodeType)
			$(msg).show();
	}

	if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
		lyr1.show(); // opacity is zero
	if (opts.fadeIn) {
		var cb = opts.onBlock ? opts.onBlock : noOp;
		var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
		var cb2 = msg ? cb : noOp;
		if (opts.showOverlay)
			lyr2._fadeIn(opts.fadeIn, cb1);
		if (msg)
			lyr3._fadeIn(opts.fadeIn, cb2);
	}
	else {
		if (opts.showOverlay)
			lyr2.show();
		if (msg)
			lyr3.show();
		if (opts.onBlock)
			opts.onBlock();
	}

	// bind key and mouse events
	bind(1, el, opts);

	if (full) {
		pageBlock = lyr3[0];
		pageBlockEls = $(':input:enabled:visible',pageBlock);
		if (opts.focusInput)
			setTimeout(focus, 20);
	}
	else
		center(lyr3[0], opts.centerX, opts.centerY);

	if (opts.timeout) {
		// auto-unblock
		var to = setTimeout(function() {
			full ? $.unblockUI(opts) : $(el).unblock(opts);
		}, opts.timeout);
		$(el).data('blockUI.timeout', to);
	}
};

// remove the block
function remove(el, opts) {
	var full = (el == window);
	var $el = $(el);
	var data = $el.data('blockUI.history');
	var to = $el.data('blockUI.timeout');
	if (to) {
		clearTimeout(to);
		$el.removeData('blockUI.timeout');
	}
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	bind(0, el, opts); // unbind events
	
	var els;
	if (full) // crazy selector to handle odd field errors in ie6/7
		els = $('body').children().filter('.blockUI').add('body > .blockUI');
	else
		els = $('.blockUI', el);

	if (full)
		pageBlock = pageBlockEls = null;

	if (opts.fadeOut) {
		els.fadeOut(opts.fadeOut);
		setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
	}
	else
		reset(els, data, opts, el);
};

// move blocking element back into the DOM where it started
function reset(els,data,opts,el) {
	els.each(function(i,o) {
		// remove via DOM calls so we don't lose event handlers
		if (this.parentNode)
			this.parentNode.removeChild(this);
	});

	if (data && data.el) {
		data.el.style.display = data.display;
		data.el.style.position = data.position;
		if (data.parent)
			data.parent.appendChild(data.el);
		$(el).removeData('blockUI.history');
	}

	if (typeof opts.onUnblock == 'function')
		opts.onUnblock(el,opts);
};

// bind/unbind the handler
function bind(b, el, opts) {
	var full = el == window, $el = $(el);

	// don't bother unbinding if there is nothing to unbind
	if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
		return;
	if (!full)
		$el.data('blockUI.isBlocked', b);

	// don't bind events when overlay is not in use or if bindEvents is false
	if (!opts.bindEvents || (b && !opts.showOverlay)) 
		return;

	// bind anchors and inputs for mouse and key events
	var events = 'mousedown mouseup keydown keypress';
	b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
};

// event handler to suppress keyboard/mouse events when blocking
function handler(e) {
	// allow tab navigation (conditionally)
	if (e.keyCode && e.keyCode == 9) {
		if (pageBlock && e.data.constrainTabKey) {
			var els = pageBlockEls;
			var fwd = !e.shiftKey && e.target === els[els.length-1];
			var back = e.shiftKey && e.target === els[0];
			if (fwd || back) {
				setTimeout(function(){focus(back)},10);
				return false;
			}
		}
	}
	var opts = e.data;
	// allow events within the message content
	if ($(e.target).parents('div.' + opts.blockMsgClass).length > 0)
		return true;

	// allow events for content that is not being blocked
	return $(e.target).parents().children().filter('div.blockUI').length == 0;
};

function focus(back) {
	if (!pageBlockEls)
		return;
	var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
	if (e)
		e.focus();
};

function center(el, x, y) {
	var p = el.parentNode, s = el.style;
	var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
	var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
	if (x) s.left = l > 0 ? (l+'px') : '0';
	if (y) s.top  = t > 0 ? (t+'px') : '0';
};

function sz(el, p) {
	return parseInt($.css(el,p))||0;
};

})(jQuery);
/*
 * Facebox (for jQuery)
 * version: 1.3
 * @requires jQuery v1.2 or later
 * @homepage https://github.com/defunkt/facebox
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright Forever Chris Wanstrath, Kyle Neath
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=facebox]').facebox()
 *  })
 *
 *  <a href="#terms" rel="facebox">Terms</a>
 *    Loads the #terms div in the box
 *
 *  <a href="terms.html" rel="facebox">Terms</a>
 *    Loads the terms.html page in the box
 *
 *  <a href="terms.png" rel="facebox">Terms</a>
 *    Loads the terms.png image in the box
 *
 *
 *  You can also use it programmatically:
 *
 *    jQuery.facebox('some html')
 *    jQuery.facebox('some html', 'my-groovy-style')
 *
 *  The above will open a facebox with "some html" as the content.
 *
 *    jQuery.facebox(function($) {
 *      $.get('blah.html', function(data) { $.facebox(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The facebox function can also display an ajax page, an image, or the contents of a div:
 *
 *    jQuery.facebox({ ajax: 'remote.html' })
 *    jQuery.facebox({ ajax: 'remote.html' }, 'my-groovy-style')
 *    jQuery.facebox({ image: 'stairs.jpg' })
 *    jQuery.facebox({ image: 'stairs.jpg' }, 'my-groovy-style')
 *    jQuery.facebox({ div: '#box' })
 *    jQuery.facebox({ div: '#box' }, 'my-groovy-style')
 *
 *  Want to close the facebox?  Trigger the 'close.facebox' document event:
 *
 *    jQuery(document).trigger('close.facebox')
 *
 *  Facebox also has a bunch of other hooks:
 *
 *    loading.facebox
 *    beforeReveal.facebox
 *    reveal.facebox (aliased as 'afterReveal.facebox')
 *    init.facebox
 *    afterClose.facebox
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('reveal.facebox', function() { ...stuff to do after the facebox and contents are revealed... })
 *
 */
(function($) {
  $.facebox = function(data, klass) {
    $.facebox.loading(data.settings || [])

    if (data.ajax) fillFaceboxFromAjax(data.ajax, klass)
    else if (data.image) fillFaceboxFromImage(data.image, klass)
    else if (data.div) fillFaceboxFromHref(data.div, klass)
    else if ($.isFunction(data)) data.call($)
    else $.facebox.reveal(data, klass)
  }

  /*
   * Public, $.facebox methods
   */

  $.extend($.facebox, {
    settings: {
      opacity      : 0.2,
      overlay      : true,
      loadingImage : '/facebox/loading.gif',
      closeImage   : '/facebox/closelabel.png',
      imageTypes   : [ 'png', 'jpg', 'jpeg', 'gif' ],
      faceboxHtml  : '\
    <div id="facebox" style="display:none;"> \
      <div class="popup"> \
        <div class="content"> \
        </div> \
        <a href="#" class="close"></a> \
      </div> \
    </div>'
    },

    loading: function() {
      init()
      if ($('#facebox .loading').length == 1) return true
      showOverlay()

      $('#facebox .content').empty().
        append('<div class="loading"><img src="'+$.facebox.settings.loadingImage+'"/></div>')

      $('#facebox').show().css({
        top:	getPageScroll()[1] + (getPageHeight() / 10),
        left:	$(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2)
      })

      $(document).bind('keydown.facebox', function(e) {
        if (e.keyCode == 27) $.facebox.close()
        return true
      })
      $(document).trigger('loading.facebox')
    },

    reveal: function(data, klass) {
      $(document).trigger('beforeReveal.facebox')
      if (klass) $('#facebox .content').addClass(klass)
      $('#facebox .content').empty().append(data)
      $('#facebox .popup').children().fadeIn('normal')
      $('#facebox').css('left', $(window).width() / 2 - ($('#facebox .popup').outerWidth() / 2))
      $(document).trigger('reveal.facebox').trigger('afterReveal.facebox')
    },

    close: function() {
      $(document).trigger('close.facebox')
      return false
    }
  })

  /*
   * Public, $.fn methods
   */

  $.fn.facebox = function(settings) {
    if ($(this).length == 0) return

    init(settings)

    function clickHandler() {
      $.facebox.loading(true)

      // support for rel="facebox.inline_popup" syntax, to add a class
      // also supports deprecated "facebox[.inline_popup]" syntax
      var klass = this.rel.match(/facebox\[?\.(\w+)\]?/)
      if (klass) klass = klass[1]

      fillFaceboxFromHref(this.href, klass)
      return false
    }

    return this.bind('click.facebox', clickHandler)
  }

  /*
   * Private methods
   */

  // called one time to setup facebox on this page
  function init(settings) {
    if ($.facebox.settings.inited) return true
    else $.facebox.settings.inited = true

    $(document).trigger('init.facebox')
    makeCompatible()

    var imageTypes = $.facebox.settings.imageTypes.join('|')
    $.facebox.settings.imageTypesRegexp = new RegExp('\\.(' + imageTypes + ')(\\?.*)?$', 'i')

    if (settings) $.extend($.facebox.settings, settings)
    $('body').append($.facebox.settings.faceboxHtml)

    var preload = [ new Image(), new Image() ]
    preload[0].src = $.facebox.settings.closeImage
    preload[1].src = $.facebox.settings.loadingImage

    $('#facebox').find('.b:first, .bl').each(function() {
      preload.push(new Image())
      preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
    })

    $('#facebox .close')
      .click($.facebox.close)
      .append('<img src="'
              + $.facebox.settings.closeImage
              + '" class="close_image" title="close">')
  }

  // getPageScroll() by quirksmode.com
  function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
  }

  // Adapted from getPageSize() by quirksmode.com
  function getPageHeight() {
    var windowHeight
    if (self.innerHeight) {	// all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }
    return windowHeight
  }

  // Backwards compatibility
  function makeCompatible() {
    var $s = $.facebox.settings

    $s.loadingImage = $s.loading_image || $s.loadingImage
    $s.closeImage = $s.close_image || $s.closeImage
    $s.imageTypes = $s.image_types || $s.imageTypes
    $s.faceboxHtml = $s.facebox_html || $s.faceboxHtml
  }

  // Figures out what you want to display and displays it
  // formats are:
  //     div: #id
  //   image: blah.extension
  //    ajax: anything else
  function fillFaceboxFromHref(href, klass) {
    // div
    if (href.match(/#/)) {
      var url    = window.location.href.split('#')[0]
      var target = href.replace(url,'')
      if (target == '#') return
      $.facebox.reveal($(target).html(), klass)

    // image
    } else if (href.match($.facebox.settings.imageTypesRegexp)) {
      fillFaceboxFromImage(href, klass)
    // ajax
    } else {
      fillFaceboxFromAjax(href, klass)
    }
  }

  function fillFaceboxFromImage(href, klass) {
    var image = new Image()
    image.onload = function() {
      $.facebox.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
    }
    image.src = href
  }

  function fillFaceboxFromAjax(href, klass) {
    $.facebox.jqxhr = $.get(href, function(data) { $.facebox.reveal(data, klass) })
  }

  function skipOverlay() {
    return $.facebox.settings.overlay == false || $.facebox.settings.opacity === null
  }

  function showOverlay() {
    if (skipOverlay()) return

    if ($('#facebox_overlay').length == 0)
      $("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')

    $('#facebox_overlay').hide().addClass("facebox_overlayBG")
      .css('opacity', $.facebox.settings.opacity)
      .click(function() { $(document).trigger('close.facebox') })
      .fadeIn(200)
    return false
  }

  function hideOverlay() {
    if (skipOverlay()) return

    $('#facebox_overlay').fadeOut(200, function(){
      $("#facebox_overlay").removeClass("facebox_overlayBG")
      $("#facebox_overlay").addClass("facebox_hide")
      $("#facebox_overlay").remove()
    })

    return false
  }

  /*
   * Bindings
   */

  $(document).bind('close.facebox', function() {
    if ($.facebox.jqxhr) {
      $.facebox.jqxhr.abort()
      $.facebox.jqxhr = null
    }
    $(document).unbind('keydown.facebox')
    $('#facebox').fadeOut(function() {
      $('#facebox .content').removeClass().addClass('content')
      $('#facebox .loading').remove()
      $(document).trigger('afterClose.facebox')
    })
    hideOverlay()
  })

})(jQuery);
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
/* Copyright (c) 2006 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Thanks to Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 */
jQuery.extend({
/**
* Returns get parameters.
*
* If the desired param does not exist, null will be returned
*
* @example value = $.getURLParam("paramName");
*/ 
 getURLParam: function(strParamName){
	  var strReturn = "";
	  var strHref = window.location.href;
	  var bFound=false;
	  
	  var cmpstring = strParamName + "=";
	  var cmplen = cmpstring.length;

	  if ( strHref.indexOf("?") > -1 ){
	    var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	    var aQueryString = strQueryString.split("&");
	    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
	      if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
	        var aParam = aQueryString[iParam].split("=");
	        strReturn = aParam[1];
	        bFound=true;
	        break;
	      }
	      
	    }
	  }
	  if (bFound==false) return null;
	  return strReturn;
	}
});
/*

Popupwindow plugin for jQuery.
  
Takes a link and will create a popupwindow based on the href of the link. You can
over ride the default setting by passing your own settings using the REL attribute
of the link. You can have different setting for each link if you'd like.
   
To use just include the plugin in the HEAD section of the page AFTER calling jQuery.
After that, use jQuery to find the links you want and pass any parameters you want

2007.03.14 - matt@atre.net - edited to allow use of default values, make alias
  settings cleaner and "do the right thing" is a user wants the window open in
  a tab.
  
<html>
<head>
    <title>PopupWindow Example</title>
    <script type="text/javascript" src="jquery-latest.pack.js"></script>
    <script type="text/javascript" src="jquery.popupwindow.js"></script>
    <script type="text/javascript">
    $(function(){
        $(".popupwindow").popupwindow();
    });
    </script>
</head>
<body>
  
<p>Opens a popupwindow with default settings<br/>
<a href="http://www.jquery.com" class="popupwindow">jQuery Homepage</a></p>
  
<p>Open a popupwindow with each link having it's own settings<br/>
<a href="http://www.jquery.com" class="popupwindow" rel="height:400,width:400">jQuery Homepage</a><br/>
<a href="http://www.jquery.com" class="popupwindow" rel="height:550,width:750,toolbar:1,scrollbars:1,status:1,resize:0,left:50,top:100">jQuery Homepage</a></p>

</body>
</html>
  
*/

jQuery.fn.popupwindow = function(){
    return this.each(function(index){
        var settings, parameters=[], mysettings, b, aliasSettings;
        
        // for overriding the default settings
        mysettings = (jQuery(this).attr("rel") || "").split(",");
        
        defaultSettings = settings = {
            height:'default', // sets the height in pixels of the window, default means use default value (same as current window).
            width:'default', // sets the width in pixels of the window, default means use default value (same as current window).
            menubar:0, // determines whether the menubar (includes the File, Edit, etc menus) is displayed {1 (YES) or 0 (NO)}.
            toolbar:0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
            'location': 0,
            directories: 0,
            scrollbars:1, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
            status:1, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
            resize:1, // whether the window can be resized {1 (YES) or 0 (NO)}.
            left: 'default', // left position when the window appears.
            top: 'default', // top position when the window appears.
            inherit: 1 // inherit settings from the current browser window {1 (YES) or 0 (NO)}.
        };
        aliasSettings = {
          left:'screenX',
          top:'screenY',
          resize:'resizable'
        };
        
        // overrides the settings with parameter passed in using the rel tag.
        for(var i=0; i < mysettings.length; i++)
        {
            b = mysettings[i].split(":");
            if(typeof settings[b[0]] != "undefined" && b.length == 2)
                settings[b[0]] = b[1];
        }
        
        for (var k in settings)
        {
          if (settings[k] == 'default') continue;
          parameters[parameters.length] = [k,'=',settings[k]].join('');
          if (aliasSettings[k]) parameters[parameters.length] = [aliasSettings[k],'=', settings[k]].join('');
        }
        
        jQuery(this).bind("click", function(e){
          var event = (!e) ? window.event : e;
        if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) return true;
        else {
          this.blur();
            var name = "PopUpWindow" ; //edited by Priya to open the popup always in same window + index
            if (settings['inherit'])
            {
                window.open(this.href, name).focus();             
            }
            else
              window.open(this.href, name, parameters.join(',')).focus();
            return false;         
        }
        });
    });
};
// $('#content a').not($('.tabbedInterface ul.nav a'))
//                .not($('.expandingSpace a.trigger'))
//                .not($('.doNotPrint'))
//                .printPage();

(function($) {
  var links = {}, linkNum = 0, options = {};

  function urlExists(u) {
    if (links[u]) return true;
    return false;
  }
  function addUrl(u) {
    if (urlExists(u)) return;
    links[u] = ++linkNum;
  }
  function numForLink(u) {
    if (!urlExists(u)) addUrl(u);
    return links[u];
  }
  function fullyQualified(u,s) {
    s = s || window.location.href;
    
    // If u is fully qualified (http://, https://, ftp://, file://, etc) return it
    if (u.match(/^\w{3,5}:\/\//)) return u;
    
    // If u starts with / just prepend the site
    if (u.substr(0,1) == '/') return window.location.href.substr(0, window.location.href.indexOf('/', 9)) + u;
    
    // If u starts with ../ trim and try again
    if (u.substr(0,3) == '../')
    {
      var curr_dir = s;
      curr_dir = curr_dir.substr(0, curr_dir.lastIndexOf('/'));
      var parent_dir = curr_dir.substr(0, curr_dir.lastIndexOf('/'));
      if (parent_dir.substr(-1) != '/') parent_dir += '/';
      return fullyQualified(u.substr(3), parent_dir);
    }
    
    // If u starts with ./ it's in the curr directory
    if (u.substr(0,2) == './') u = u.substr(2);
    
    // If we're here, we have something in the current dir
    return s + u;
  }
  $.fn.printPage = function(o) {
    // setup configuration
        options = o = $.extend({}, arguments.callee.defaults, o);
        
    if (o.skipUrlCheck || $.getURLParam(o.urlParam) == o.urlParamValue)
    {
      var footnoteLinks = $('<ol id="footnoteLinks"></ol>');
      $('body').addClass(o.bodyClass);
      //      $('body').addClass("noSidebarSecondary");
      //      $('html').attr("style","background: #fff;");
     /* this.not('#'+o.printLinkId).each(function() {
        var u = fullyQualified($(this).attr('href'));
        if (! urlExists(u))
          $('<li>'+u+'</li>').appendTo(footnoteLinks);
        $('<sup>['+ numForLink(u) +']</sup>').insertAfter($(this));
      });
      if (linkNum > 0) {
        // Only add footnotes if we have links to footnote
        $('<h2 id="footnoteLinksTitle">Links</h2>').appendTo("#" + o.appendLinksToId);
        footnoteLinks.appendTo("#" + o.appendLinksToId);
      }*/
      if (o.postPrintHandler && typeof o.postPrintHandler == 'function')
        o.postPrintHandler();
    }
    return this;
  };
  function addArg(k,v) {
      var printPage = $('#' + options.printLinkId);
      if (! printPage) return; 
      printPage.attr('href', printPage.attr('href')+'&'+encodeURIComponent(k)+'='+encodeURIComponent(v));
  }
  function updateArg(k, v)
  {
    k = encodeURIComponent(k);
    v = encodeURIComponent(v);
    var printPage = $('#' + options.printLinkId);
    if (! printPage) return;
    var href = printPage.attr('href');
    var page = href.substr(0, href.indexOf('?'));
    var attrs = href.substr(href.indexOf('?') + 1).split('&');
    var found = false;
    for (var i =0; i < attrs.length; i++) {
      var bits = attrs[i].split('=');
      if (bits[0] == k) {
        found = true;
        attrs[i] = [ bits[0], v ].join('=');
        return;
      }
    }
    if (! found)
      attrs[attrs.length] = [k,v].join('=');
      
    printPage.attr('href', [page, attrs.join('&')].join('?'));
  }

  $.fn.printPage.defaults = {
    bodyClass: 'print', // class to add to body element when in "print" mode
    urlParam: 'print', // parameter to look for in the querystring as an indication we're in print mode
    urlParamValue: 1, // value to look for
    printLinkId: 'PrintLink', // id of the printPage element so that we don't footnote it
    printDialog: true, // popup the print page dialog
    skipUrlCheck: false, // skip any url checking and just go into print mode
    appendLinksToId: '', // ID of DOM object to append the footnote links to
    postPrintHandler: function() { } // Callback to run a function after the page has been "printed"
  };
  
})(jQuery);
/*
jQuery Clear-Input plugin
v1.0
Author: Aidan Feldman

USAGE
Add the class .clear-input to any text input element
whose value you want cleared when it gains focus.
The initial value will be replaced when the input
loses focus, and no new text has been entered.

If you prefer to not add classes to your elements,
you can alternatively call clearInput() on any jQuery
input object.
*/
(function( $ ){
  // define the initialValue() function
  $.fn.initialValue = function(value) {
    if (value) {
      return this.attr('initial-value', value);
    } else {
      return this.attr('initial-value');
    }
  };
  
  $.fn.initialValueTA = function(text) {
    if (text) {
      return this.attr('initial-value', text);
    } else {
      return this.attr('initial-value');
    }
  };
  
  $.fn.clearInput = function() {
    return this
      .focus(function(){
        if (this.value == $(this).initialValue()) {
          this.value = '';
          $(this).css('color','#3d3a36');
        }
      })
      .blur(function(){
        if (this.value == '') {
          this.value = $(this).initialValue();
          $(this).css('color','#a4a3a1');
        }
      })
      .each(function(index, elt) {
        $(this).initialValue(this.value);
      });
  };
  
  $.fn.clearInputTA = function() {
    return this
      .focus(function(){
        if ($(this).text() == $(this).initialValueTA()) {
          $(this).text('');
          $(this).css('color','#3d3a36');
        }
      })
      .blur(function(){
      	console.log( 'Text = '+$(this).text()+' and IV = '+ $(this).initialValueTA() );
        //if ($(this).text() == '') {
          //$(this).text( $(this).initialValueTA() );
         // $(this).css('color','#a4a3a1');
        //}
      })
      .each(function(index, elt) {
        $(this).initialValueTA( $(this).text() );
      });
  };

  // apply plugin to all inputs with class ".clear-input"
  $(function() {
    $('input.clear-input').clearInput();
    $('textarea').clearInputTA();
  });
})( jQuery );
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
(function($){$.fn.dcMegaMenu=function(options){var defaults={classParent:'dc-mega',classContainer:'sub-container',classSubParent:'mega-hdr',classSubLink:'mega-hdr',classWidget:'dc-extra',rowItems:3,speed:'fast',effect:'fade',event:'hover',fullWidth:false,onLoad:function(){},beforeOpen:function(){},beforeClose:function(){}};var options=$.extend(defaults,options);var $dcMegaMenuObj=this;return $dcMegaMenuObj.each(function(options){var clSubParent=defaults.classSubParent;var clSubLink=defaults.classSubLink;var clParent=defaults.classParent;var clContainer=defaults.classContainer;var clWidget=defaults.classWidget;megaSetup();function megaOver(){var subNav=$('.sub',this);$(this).addClass('mega-hover');if(defaults.effect=='fade'){$(subNav).fadeIn(defaults.speed)}if(defaults.effect=='slide'){$(subNav).show(defaults.speed)}defaults.beforeOpen.call(this)}function megaAction(obj){var subNav=$('.sub',obj);$(obj).addClass('mega-hover');if(defaults.effect=='fade'){$(subNav).fadeIn(defaults.speed)}if(defaults.effect=='slide'){$(subNav).show(defaults.speed)}defaults.beforeOpen.call(this)}function megaOut(){var subNav=$('.sub',this);$(this).removeClass('mega-hover');$(subNav).hide();defaults.beforeClose.call(this)}function megaActionClose(obj){var subNav=$('.sub',obj);$(obj).removeClass('mega-hover');$(subNav).hide();defaults.beforeClose.call(this)}function megaReset(){$('li',$dcMegaMenuObj).removeClass('mega-hover');$('.sub',$dcMegaMenuObj).hide()}function megaSetup(){$arrow='<span class="dc-mega-icon"></span>';var clParentLi=clParent+'-li';var menuWidth=$dcMegaMenuObj.outerWidth();$('> li',$dcMegaMenuObj).each(function(){var $mainSub=$('> ul',this);var $primaryLink=$('> a',this);if($mainSub.length){$primaryLink.addClass(clParent).append($arrow);$mainSub.addClass('sub').wrap('<div class="'+clContainer+'" />');var pos=$(this).position();pl=pos.left;if($('ul',$mainSub).length){$(this).addClass(clParentLi);$('.'+clContainer,this).addClass('mega');$('> li',$mainSub).each(function(){if(!$(this).hasClass(clWidget)){$(this).addClass('mega-unit');if($('> ul',this).length){$(this).addClass(clSubParent);$('> a',this).addClass(clSubParent+'-a')}else{$(this).addClass(clSubLink);$('> a',this).addClass(clSubLink+'-a')}}});var hdrs=$('.mega-unit',this);rowSize=parseInt(defaults.rowItems);for(var i=0;i<hdrs.length;i+=rowSize){hdrs.slice(i,i+rowSize).wrapAll('<div class="row" />')}$mainSub.show();var pw=$(this).width();var pr=pl+pw;var mr=menuWidth-pr;var subw=$mainSub.outerWidth();var totw=$mainSub.parent('.'+clContainer).outerWidth();var cpad=totw-subw;if(defaults.fullWidth==true){var fw=menuWidth-cpad;$mainSub.parent('.'+clContainer).css({width:fw+'px'});$dcMegaMenuObj.addClass('full-width')}var iw=$('.mega-unit',$mainSub).outerWidth(true);var rowItems=$('.row:eq(0) .mega-unit',$mainSub).length;var inneriw=iw*rowItems;var totiw=inneriw+cpad;$('.row',this).each(function(){$('.mega-unit:last',this).addClass('last');var maxValue=undefined;$('.mega-unit > a',this).each(function(){var val=parseInt($(this).height());if(maxValue===undefined||maxValue<val){maxValue=val}});$('.mega-unit > a',this).css('height',maxValue+'px');$(this).css('width',inneriw+'px')});if(defaults.fullWidth==true){params={left:0}}else{var ml=mr<ml?ml+ml-mr:(totiw-pw)/2;var subLeft=pl-ml;var params={left:pl+'px',marginLeft:-ml+'px'};if(subLeft<0){params={left:0}}else if(mr<ml){params={right:0}}}$('.'+clContainer,this).css(params);$('.row',$mainSub).each(function(){var rh=$(this).height();$('.mega-unit',this).css({height:rh+'px'});$(this).parent('.row').css({height:rh+'px'})});$mainSub.hide()}else{$('.'+clContainer,this).addClass('non-mega').css('left',pl+'px')}}});var menuHeight=$('> li > a',$dcMegaMenuObj).outerHeight(true);$('.'+clContainer,$dcMegaMenuObj).css({top:menuHeight+'px'}).css('z-index','1000');if(defaults.event=='hover'){var config={sensitivity:2,interval:100,over:megaOver,timeout:400,out:megaOut};$('li',$dcMegaMenuObj).hoverIntent(config)}if(defaults.event=='click'){$('body').mouseup(function(e){if(!$(e.target).parents('.mega-hover').length){megaReset()}});$('> li > a.'+clParent,$dcMegaMenuObj).click(function(e){var $parentLi=$(this).parent();if($parentLi.hasClass('mega-hover')){megaActionClose($parentLi)}else{megaAction($parentLi)}e.preventDefault()})}defaults.onLoad.call(this)}})}})(jQuery);
/*
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b, a, c) {
	b.fn.jScrollPane = function(e) {
		function d(D, O) {
			var az, Q = this, Y, ak, v, am, T, Z, y, q, aA, aF, av, i, I, h, j, aa, U, aq, X, t, A, ar, af, an, G, l, au, ay, x, aw, aI, f, L, aj = true, P = true, aH = false, k = false, ap = D
					.clone(false, false).empty(), ac = b.fn.mwheelIntent ? "mwheelIntent.jsp"
					: "mousewheel.jsp";
			aI = D.css("paddingTop") + " " + D.css("paddingRight") + " "
					+ D.css("paddingBottom") + " " + D.css("paddingLeft");
			f = (parseInt(D.css("paddingLeft"), 10) || 0)
					+ (parseInt(D.css("paddingRight"), 10) || 0);
			function at(aR) {
				var aM, aO, aN, aK, aJ, aQ, aP = false, aL = false;
				az = aR;
				if (Y === c) {
					aJ = D.scrollTop();
					aQ = D.scrollLeft();
					D.css( {
						overflow : "hidden",
						padding : 0
					});
					ak = D.innerWidth() + f;
					v = D.innerHeight();
					D.width(ak);
					Y = b('<div class="jspPane" />').css("padding", aI).append(
							D.children());
					am = b('<div class="jspContainer" />').css( {
						width : ak + "px",
						height : v + "px"
					}).append(Y).appendTo(D)
				} else {
					D.css("width", "");
					aP = az.stickToBottom && K();
					aL = az.stickToRight && B();
					aK = D.innerWidth() + f != ak || D.outerHeight() != v;
					if (aK) {
						ak = D.innerWidth() + f;
						v = D.innerHeight();
						am.css( {
							width : ak + "px",
							height : v + "px"
						})
					}
					if (!aK && L == T && Y.outerHeight() == Z) {
						D.width(ak);
						return
					}
					L = T;
					Y.css("width", "");
					D.width(ak);
					am.find(">.jspVerticalBar,>.jspHorizontalBar").remove()
							.end()
				}
				Y.css("overflow", "auto");
				if (aR.contentWidth) {
					T = aR.contentWidth
				} else {
					T = Y[0].scrollWidth
				}
				Z = Y[0].scrollHeight;
				Y.css("overflow", "");
				y = T / ak;
				q = Z / v;
				aA = q > 1;
				aF = y > 1;
				if (!(aF || aA)) {
					D.removeClass("jspScrollable");
					Y.css( {
						top : 0,
						width : am.width() - f
					});
					n();
					E();
					R();
					w();
					ai()
				} else {
					D.addClass("jspScrollable");
					aM = az.maintainPosition && (I || aa);
					if (aM) {
						aO = aD();
						aN = aB()
					}
					aG();
					z();
					F();
					if (aM) {
						N(aL ? (T - ak) : aO, false);
						M(aP ? (Z - v) : aN, false)
					}
					J();
					ag();
					ao();
					if (az.enableKeyboardNavigation) {
						S()
					}
					if (az.clickOnTrack) {
						p()
					}
					C();
					if (az.hijackInternalLinks) {
						m()
					}
				}
				if (az.autoReinitialise && !aw) {
					aw = setInterval(function() {
						at(az)
					}, az.autoReinitialiseDelay)
				} else {
					if (!az.autoReinitialise && aw) {
						clearInterval(aw)
					}
				}
				aJ && D.scrollTop(0) && M(aJ, false);
				aQ && D.scrollLeft(0) && N(aQ, false);
				D.trigger("jsp-initialised", [ aF || aA ])
			}
			function aG() {
				if (aA) {
					am
							.append(b('<div class="jspVerticalBar" />')
									.append(
											b('<div class="jspCap jspCapTop" />'),
											b('<div class="jspTrack" />')
													.append(
															b(
																	'<div class="jspDrag" />')
																	.append(
																			b('<div class="jspDragTop" />'),
																			b('<div class="jspDragBottom" />'))),
											b('<div class="jspCap jspCapBottom" />')));
					U = am.find(">.jspVerticalBar");
					aq = U.find(">.jspTrack");
					av = aq.find(">.jspDrag");
					if (az.showArrows) {
						ar = b('<a class="jspArrow jspArrowUp" />').bind(
								"mousedown.jsp", aE(0, -1)).bind("click.jsp",
								aC);
						af = b('<a class="jspArrow jspArrowDown" />').bind(
								"mousedown.jsp", aE(0, 1))
								.bind("click.jsp", aC);
						if (az.arrowScrollOnHover) {
							ar.bind("mouseover.jsp", aE(0, -1, ar));
							af.bind("mouseover.jsp", aE(0, 1, af))
						}
						al(aq, az.verticalArrowPositions, ar, af)
					}
					t = v;
					am
							.find(
									">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow")
							.each(function() {
								t -= b(this).outerHeight()
							});
					av.hover(function() {
						av.addClass("jspHover")
					}, function() {
						av.removeClass("jspHover")
					}).bind("mousedown.jsp", function(aJ) {
						b("html").bind("dragstart.jsp selectstart.jsp", aC);
						av.addClass("jspActive");
						var s = aJ.pageY - av.position().top;
						b("html").bind("mousemove.jsp", function(aK) {
							V(aK.pageY - s, false)
						}).bind("mouseup.jsp mouseleave.jsp", ax);
						return false
					});
					o()
				}
			}
			function o() {
				aq.height(t + "px");
				I = 0;
				X = az.verticalGutter + aq.outerWidth();
				Y.width(ak - X - f);
				try {
					if (U.position().left === 0) {
						Y.css("margin-left", X + "px")
					}
				} catch (s) {
				}
			}
			function z() {
				if (aF) {
					am
							.append(b('<div class="jspHorizontalBar" />')
									.append(
											b('<div class="jspCap jspCapLeft" />'),
											b('<div class="jspTrack" />')
													.append(
															b(
																	'<div class="jspDrag" />')
																	.append(
																			b('<div class="jspDragLeft" />'),
																			b('<div class="jspDragRight" />'))),
											b('<div class="jspCap jspCapRight" />')));
					an = am.find(">.jspHorizontalBar");
					G = an.find(">.jspTrack");
					h = G.find(">.jspDrag");
					if (az.showArrows) {
						ay = b('<a class="jspArrow jspArrowLeft" />').bind(
								"mousedown.jsp", aE(-1, 0)).bind("click.jsp",
								aC);
						x = b('<a class="jspArrow jspArrowRight" />').bind(
								"mousedown.jsp", aE(1, 0))
								.bind("click.jsp", aC);
						if (az.arrowScrollOnHover) {
							ay.bind("mouseover.jsp", aE(-1, 0, ay));
							x.bind("mouseover.jsp", aE(1, 0, x))
						}
						al(G, az.horizontalArrowPositions, ay, x)
					}
					h.hover(function() {
						h.addClass("jspHover")
					}, function() {
						h.removeClass("jspHover")
					}).bind("mousedown.jsp", function(aJ) {
						b("html").bind("dragstart.jsp selectstart.jsp", aC);
						h.addClass("jspActive");
						var s = aJ.pageX - h.position().left;
						b("html").bind("mousemove.jsp", function(aK) {
							W(aK.pageX - s, false)
						}).bind("mouseup.jsp mouseleave.jsp", ax);
						return false
					});
					l = am.innerWidth();
					ah()
				}
			}
			function ah() {
				am
						.find(
								">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow")
						.each(function() {
							l -= b(this).outerWidth()
						});
				G.width(l + "px");
				aa = 0
			}
			function F() {
				if (aF && aA) {
					var aJ = G.outerHeight(), s = aq.outerWidth();
					t -= aJ;
					b(an).find(">.jspCap:visible,>.jspArrow").each(function() {
						l += b(this).outerWidth()
					});
					l -= s;
					v -= s;
					ak -= aJ;
					G.parent().append(
							b('<div class="jspCorner" />').css("width",
									aJ + "px"));
					o();
					ah()
				}
				if (aF) {
					Y.width((am.outerWidth() - f) + "px")
				}
				Z = Y.outerHeight();
				q = Z / v;
				if (aF) {
					au = Math.ceil(1 / y * l);
					if (au > az.horizontalDragMaxWidth) {
						au = az.horizontalDragMaxWidth
					} else {
						if (au < az.horizontalDragMinWidth) {
							au = az.horizontalDragMinWidth
						}
					}
					h.width(au + "px");
					j = l - au;
					ae(aa)
				}
				if (aA) {
					A = Math.ceil(1 / q * t);
					if (A > az.verticalDragMaxHeight) {
						A = az.verticalDragMaxHeight
					} else {
						if (A < az.verticalDragMinHeight) {
							A = az.verticalDragMinHeight
						}
					}
					av.height(A + "px");
					i = t - A;
					ad(I)
				}
			}
			function al(aK, aM, aJ, s) {
				var aO = "before", aL = "after", aN;
				if (aM == "os") {
					aM = /Mac/.test(navigator.platform) ? "after" : "split"
				}
				if (aM == aO) {
					aL = aM
				} else {
					if (aM == aL) {
						aO = aM;
						aN = aJ;
						aJ = s;
						s = aN
					}
				}
				aK[aO](aJ)[aL](s)
			}
			function aE(aJ, s, aK) {
				return function() {
					H(aJ, s, this, aK);
					this.blur();
					return false
				}
			}
			function H(aM, aL, aP, aO) {
				aP = b(aP).addClass("jspActive");
				var aN, aK, aJ = true, s = function() {
					if (aM !== 0) {
						Q.scrollByX(aM * az.arrowButtonSpeed)
					}
					if (aL !== 0) {
						Q.scrollByY(aL * az.arrowButtonSpeed)
					}
					aK = setTimeout(s, aJ ? az.initialDelay
							: az.arrowRepeatFreq);
					aJ = false
				};
				s();
				aN = aO ? "mouseout.jsp" : "mouseup.jsp";
				aO = aO || b("html");
				aO.bind(aN, function() {
					aP.removeClass("jspActive");
					aK && clearTimeout(aK);
					aK = null;
					aO.unbind(aN)
				})
			}
			function p() {
				w();
				if (aA) {
					aq
							.bind(
									"mousedown.jsp",
									function(aO) {
										if (aO.originalTarget === c
												|| aO.originalTarget == aO.currentTarget) {
											var aM = b(this), aP = aM.offset(), aN = aO.pageY
													- aP.top - I, aK, aJ = true, s = function() {
												var aS = aM.offset(), aT = aO.pageY
														- aS.top - A / 2, aQ = v
														* az.scrollPagePercent, aR = i
														* aQ / (Z - v);
												if (aN < 0) {
													if (I - aR > aT) {
														Q.scrollByY(-aQ)
													} else {
														V(aT)
													}
												} else {
													if (aN > 0) {
														if (I + aR < aT) {
															Q.scrollByY(aQ)
														} else {
															V(aT)
														}
													} else {
														aL();
														return
													}
												}
												aK = setTimeout(
														s,
														aJ ? az.initialDelay
																: az.trackClickRepeatFreq);
												aJ = false
											}, aL = function() {
												aK && clearTimeout(aK);
												aK = null;
												b(document).unbind(
														"mouseup.jsp", aL)
											};
											s();
											b(document).bind("mouseup.jsp", aL);
											return false
										}
									})
				}
				if (aF) {
					G
							.bind(
									"mousedown.jsp",
									function(aO) {
										if (aO.originalTarget === c
												|| aO.originalTarget == aO.currentTarget) {
											var aM = b(this), aP = aM.offset(), aN = aO.pageX
													- aP.left - aa, aK, aJ = true, s = function() {
												var aS = aM.offset(), aT = aO.pageX
														- aS.left - au / 2, aQ = ak
														* az.scrollPagePercent, aR = j
														* aQ / (T - ak);
												if (aN < 0) {
													if (aa - aR > aT) {
														Q.scrollByX(-aQ)
													} else {
														W(aT)
													}
												} else {
													if (aN > 0) {
														if (aa + aR < aT) {
															Q.scrollByX(aQ)
														} else {
															W(aT)
														}
													} else {
														aL();
														return
													}
												}
												aK = setTimeout(
														s,
														aJ ? az.initialDelay
																: az.trackClickRepeatFreq);
												aJ = false
											}, aL = function() {
												aK && clearTimeout(aK);
												aK = null;
												b(document).unbind(
														"mouseup.jsp", aL)
											};
											s();
											b(document).bind("mouseup.jsp", aL);
											return false
										}
									})
				}
			}
			function w() {
				if (G) {
					G.unbind("mousedown.jsp")
				}
				if (aq) {
					aq.unbind("mousedown.jsp")
				}
			}
			function ax() {
				b("html")
						.unbind(
								"dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
				if (av) {
					av.removeClass("jspActive")
				}
				if (h) {
					h.removeClass("jspActive")
				}
			}
			function V(s, aJ) {
				if (!aA) {
					return
				}
				if (s < 0) {
					s = 0
				} else {
					if (s > i) {
						s = i
					}
				}
				if (aJ === c) {
					aJ = az.animateScroll
				}
				if (aJ) {
					Q.animate(av, "top", s, ad)
				} else {
					av.css("top", s);
					ad(s)
				}
			}
			function ad(aJ) {
				if (aJ === c) {
					aJ = av.position().top
				}
				am.scrollTop(0);
				I = aJ;
				var aM = I === 0, aK = I == i, aL = aJ / i, s = -aL * (Z - v);
				if (aj != aM || aH != aK) {
					aj = aM;
					aH = aK;
					D.trigger("jsp-arrow-change", [ aj, aH, P, k ])
				}
				u(aM, aK);
				Y.css("top", s);
				D.trigger("jsp-scroll-y", [ -s, aM, aK ]).trigger("scroll")
			}
			function W(aJ, s) {
				if (!aF) {
					return
				}
				if (aJ < 0) {
					aJ = 0
				} else {
					if (aJ > j) {
						aJ = j
					}
				}
				if (s === c) {
					s = az.animateScroll
				}
				if (s) {
					Q.animate(h, "left", aJ, ae)
				} else {
					h.css("left", aJ);
					ae(aJ)
				}
			}
			function ae(aJ) {
				if (aJ === c) {
					aJ = h.position().left
				}
				am.scrollTop(0);
				aa = aJ;
				var aM = aa === 0, aL = aa == j, aK = aJ / j, s = -aK
						* (T - ak);
				if (P != aM || k != aL) {
					P = aM;
					k = aL;
					D.trigger("jsp-arrow-change", [ aj, aH, P, k ])
				}
				r(aM, aL);
				Y.css("left", s);
				D.trigger("jsp-scroll-x", [ -s, aM, aL ]).trigger("scroll")
			}
			function u(aJ, s) {
				if (az.showArrows) {
					ar[aJ ? "addClass" : "removeClass"]("jspDisabled");
					af[s ? "addClass" : "removeClass"]("jspDisabled")
				}
			}
			function r(aJ, s) {
				if (az.showArrows) {
					ay[aJ ? "addClass" : "removeClass"]("jspDisabled");
					x[s ? "addClass" : "removeClass"]("jspDisabled")
				}
			}
			function M(s, aJ) {
				var aK = s / (Z - v);
				V(aK * i, aJ)
			}
			function N(aJ, s) {
				var aK = aJ / (T - ak);
				W(aK * j, s)
			}
			function ab(aW, aR, aK) {
				var aO, aL, aM, s = 0, aV = 0, aJ, aQ, aP, aT, aS, aU;
				try {
					aO = b(aW)
				} catch (aN) {
					return
				}
				aL = aO.outerHeight();
				aM = aO.outerWidth();
				am.scrollTop(0);
				am.scrollLeft(0);
				while (!aO.is(".jspPane")) {
					s += aO.position().top;
					aV += aO.position().left;
					aO = aO.offsetParent();
					if (/^body|html$/i.test(aO[0].nodeName)) {
						return
					}
				}
				aJ = aB();
				aP = aJ + v;
				if (s < aJ || aR) {
					aS = s - az.verticalGutter
				} else {
					if (s + aL > aP) {
						aS = s - v + aL + az.verticalGutter
					}
				}
				if (aS) {
					M(aS, aK)
				}
				aQ = aD();
				aT = aQ + ak;
				if (aV < aQ || aR) {
					aU = aV - az.horizontalGutter
				} else {
					if (aV + aM > aT) {
						aU = aV - ak + aM + az.horizontalGutter
					}
				}
				if (aU) {
					N(aU, aK)
				}
			}
			function aD() {
				return -Y.position().left
			}
			function aB() {
				return -Y.position().top
			}
			function K() {
				var s = Z - v;
				return (s > 20) && (s - aB() < 10)
			}
			function B() {
				var s = T - ak;
				return (s > 20) && (s - aD() < 10)
			}
			function ag() {
				am.unbind(ac).bind(
						ac,
						function(aM, aN, aL, aJ) {
							var aK = aa, s = I;
							Q.scrollBy(aL * az.mouseWheelSpeed, -aJ
									* az.mouseWheelSpeed, false);
							return aK == aa && s == I
						})
			}
			function n() {
				am.unbind(ac)
			}
			function aC() {
				return false
			}
			function J() {
				Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",
						function(s) {
							ab(s.target, false)
						})
			}
			function E() {
				Y.find(":input,a").unbind("focus.jsp")
			}
			function S() {
				var s, aJ, aL = [];
				aF && aL.push(an[0]);
				aA && aL.push(U[0]);
				Y.focus(function() {
					D.focus()
				});
				D
						.attr("tabindex", 0)
						.unbind("keydown.jsp keypress.jsp")
						.bind(
								"keydown.jsp",
								function(aO) {
									if (aO.target !== this
											&& !(aL.length && b(aO.target)
													.closest(aL).length)) {
										return
									}
									var aN = aa, aM = I;
									switch (aO.keyCode) {
									case 40:
									case 38:
									case 34:
									case 32:
									case 33:
									case 39:
									case 37:
										s = aO.keyCode;
										aK();
										break;
									case 35:
										M(Z - v);
										s = null;
										break;
									case 36:
										M(0);
										s = null;
										break
									}
									aJ = aO.keyCode == s && aN != aa || aM != I;
									return !aJ
								}).bind("keypress.jsp", function(aM) {
							if (aM.keyCode == s) {
								aK()
							}
							return !aJ
						});
				if (az.hideFocus) {
					D.css("outline", "none");
					if ("hideFocus" in am[0]) {
						D.attr("hideFocus", true)
					}
				} else {
					D.css("outline", "");
					if ("hideFocus" in am[0]) {
						D.attr("hideFocus", false)
					}
				}
				function aK() {
					var aN = aa, aM = I;
					switch (s) {
					case 40:
						Q.scrollByY(az.keyboardSpeed, false);
						break;
					case 38:
						Q.scrollByY(-az.keyboardSpeed, false);
						break;
					case 34:
					case 32:
						Q.scrollByY(v * az.scrollPagePercent, false);
						break;
					case 33:
						Q.scrollByY(-v * az.scrollPagePercent, false);
						break;
					case 39:
						Q.scrollByX(az.keyboardSpeed, false);
						break;
					case 37:
						Q.scrollByX(-az.keyboardSpeed, false);
						break
					}
					aJ = aN != aa || aM != I;
					return aJ
				}
			}
			function R() {
				D.attr("tabindex", "-1").removeAttr("tabindex").unbind(
						"keydown.jsp keypress.jsp")
			}
			function C() {
				if (location.hash && location.hash.length > 1) {
					var aL, aJ, aK = escape(location.hash);
					try {
						aL = b(aK)
					} catch (s) {
						return
					}
					if (aL.length && Y.find(aK)) {
						if (am.scrollTop() === 0) {
							aJ = setInterval(function() {
								if (am.scrollTop() > 0) {
									ab(aK, true);
									b(document).scrollTop(am.position().top);
									clearInterval(aJ)
								}
							}, 50)
						} else {
							ab(aK, true);
							b(document).scrollTop(am.position().top)
						}
					}
				}
			}
			function ai() {
				b("a.jspHijack").unbind("click.jsp-hijack").removeClass(
						"jspHijack")
			}
			function m() {
				ai();
				b("a[href^=#]").addClass("jspHijack").bind(
						"click.jsp-hijack",
						function() {
							var s = this.href.split("#"), aJ;
							if (s.length > 1) {
								aJ = s[1];
								if (aJ.length > 0
										&& Y.find("#" + aJ).length > 0) {
									ab("#" + aJ, true);
									return false
								}
							}
						})
			}
			function ao() {
				var aK, aJ, aM, aL, aN, s = false;
				am
						.unbind(
								"touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick")
						.bind("touchstart.jsp", function(aO) {
							var aP = aO.originalEvent.touches[0];
							aK = aD();
							aJ = aB();
							aM = aP.pageX;
							aL = aP.pageY;
							aN = false;
							s = true
						})
						.bind(
								"touchmove.jsp",
								function(aR) {
									if (!s) {
										return
									}
									var aQ = aR.originalEvent.touches[0], aP = aa, aO = I;
									Q.scrollTo(aK + aM - aQ.pageX, aJ + aL
											- aQ.pageY);
									aN = aN || Math.abs(aM - aQ.pageX) > 5
											|| Math.abs(aL - aQ.pageY) > 5;
									return aP == aa && aO == I
								}).bind("touchend.jsp", function(aO) {
							s = false
						}).bind("click.jsp-touchclick", function(aO) {
							if (aN) {
								aN = false;
								return false
							}
						})
			}
			function g() {
				var s = aB(), aJ = aD();
				D.removeClass("jspScrollable").unbind(".jsp");
				D.replaceWith(ap.append(Y.children()));
				ap.scrollTop(s);
				ap.scrollLeft(aJ)
			}
			b.extend(Q, {
				reinitialise : function(aJ) {
					aJ = b.extend( {}, az, aJ);
					at(aJ)
				},
				scrollToElement : function(aK, aJ, s) {
					ab(aK, aJ, s)
				},
				scrollTo : function(aK, s, aJ) {
					N(aK, aJ);
					M(s, aJ)
				},
				scrollToX : function(aJ, s) {
					N(aJ, s)
				},
				scrollToY : function(s, aJ) {
					M(s, aJ)
				},
				scrollToPercentX : function(aJ, s) {
					N(aJ * (T - ak), s)
				},
				scrollToPercentY : function(aJ, s) {
					M(aJ * (Z - v), s)
				},
				scrollBy : function(aJ, s, aK) {
					Q.scrollByX(aJ, aK);
					Q.scrollByY(s, aK)
				},
				scrollByX : function(s, aK) {
					var aJ = aD() + Math[s < 0 ? "floor" : "ceil"](s), aL = aJ
							/ (T - ak);
					W(aL * j, aK)
				},
				scrollByY : function(s, aK) {
					var aJ = aB() + Math[s < 0 ? "floor" : "ceil"](s), aL = aJ
							/ (Z - v);
					V(aL * i, aK)
				},
				positionDragX : function(s, aJ) {
					W(s, aJ)
				},
				positionDragY : function(aJ, s) {
					V(aJ, s)
				},
				animate : function(aJ, aM, s, aL) {
					var aK = {};
					aK[aM] = s;
					aJ.animate(aK, {
						duration : az.animateDuration,
						easing : az.animateEase,
						queue : false,
						step : aL
					})
				},
				getContentPositionX : function() {
					return aD()
				},
				getContentPositionY : function() {
					return aB()
				},
				getContentWidth : function() {
					return T
				},
				getContentHeight : function() {
					return Z
				},
				getPercentScrolledX : function() {
					return aD() / (T - ak)
				},
				getPercentScrolledY : function() {
					return aB() / (Z - v)
				},
				getIsScrollableH : function() {
					return aF
				},
				getIsScrollableV : function() {
					return aA
				},
				getContentPane : function() {
					return Y
				},
				scrollToBottom : function(s) {
					V(i, s)
				},
				hijackInternalLinks : function() {
					m()
				},
				destroy : function() {
					g()
				}
			});
			at(O)
		}
		e = b.extend( {}, b.fn.jScrollPane.defaults, e);
		b.each( [ "mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed",
				"keyboardSpeed" ], function() {
			e[this] = e[this] || e.speed
		});
		return this.each(function() {
			var f = b(this), g = f.data("jsp");
			if (g) {
				g.reinitialise(e)
			} else {
				g = new d(f, e);
				f.data("jsp", g)
			}
		})
	};
	b.fn.jScrollPane.defaults = {
		showArrows : false,
		maintainPosition : true,
		stickToBottom : false,
		stickToRight : false,
		clickOnTrack : true,
		autoReinitialise : false,
		autoReinitialiseDelay : 500,
		verticalDragMinHeight : 0,
		verticalDragMaxHeight : 99999,
		horizontalDragMinWidth : 0,
		horizontalDragMaxWidth : 99999,
		contentWidth : c,
		animateScroll : false,
		animateDuration : 300,
		animateEase : "linear",
		hijackInternalLinks : false,
		verticalGutter : 4,
		horizontalGutter : 4,
		mouseWheelSpeed : 0,
		arrowButtonSpeed : 0,
		arrowRepeatFreq : 50,
		arrowScrollOnHover : false,
		trackClickSpeed : 0,
		trackClickRepeatFreq : 70,
		verticalArrowPositions : "split",
		horizontalArrowPositions : "split",
		enableKeyboardNavigation : true,
		hideFocus : false,
		keyboardSpeed : 0,
		initialDelay : 300,
		speed : 30,
		scrollPagePercent : 0.8
	}
})(jQuery, this);
(function(a){a.fn.extend({infiniteCarousel:function(b){var c={transitionSpeed:800,displayTime:6000,displayProgressRing:true,progressRingColorOpacity:"0,0,0,.5",progressRingBackgroundOn:true,progressRingBackgroundColorOpacity:"255,255,255,.5",thumbnailType:"none",easeLeft:"linear",easeRight:"linear",imagePath:"/js/infinitecarousel/images/",inView:1,margin:0,advance:1,customClass:null,showControls:true,autoHideCaptions:false,autoPilot:false,prevNextInternal:true,internalThumbnails:false,enableKeyboardNav:true,onSlideStart:function(){},onSlideEnd:function(){},onPauseClick:function(){},onPlayClick:function(){}};var b=a.extend(c,b);return this.each(function(){var w=b;var r=a(this);var H=Math.round(Math.random()*100000000);var s=a("li",r).length;var e=[];var g=[];var D=[];var G=[];var v,F;var A,I;var h;var q,p=0;var k="HTMLCanvasElement" in window;a("li",r).each(function(i){e.push(a("p",this).html());g.push(a("a",this).attr("href"));G.push(a(this).find("iframe").attr("longdesc"));D.push(a(this).find("img, iframe").attr("src"))});if(w.inView>s){w.inView=s}if(w.advance>w.inView){w.advance=w.inView}v=a(this).find("img, iframe").width();F=a(this).find("img, iframe").height();a(r).replaceWith('<div class="infiniteCarousel" id="ic_'+H+'">');r=a("#ic_"+H);a(r).height(F).width(v*w.inView).css({overflow:"hidden",position:"relative"});a(r).append('<div class="ic_tray" style="position:relative;width:'+(s*2)*v+"px;left:-"+v+'px">');for(var C=0;C<s;C++){a("div.ic_tray",r).append('<div style="overflow:hidden;float:left;position:relative;width:'+v+"px;height:"+F+'px;" class="infiniteCarousel_item">')}a(".infiniteCarousel_item",r).each(function(i){if(D[i].indexOf("youtube.com")>0||D[i].indexOf("vimeo.com")>0||D[i].indexOf("funnyordie.com")>0){a(this).append('<iframe src="'+D[i]+'?wmode=opaque" frameborder="0" allowfullscreen="" style="width: 300px; height: 201px">" />');if(g[i]!=undefined){a("iframe",this).wrap('<a class="ic_link" href="'+g[i]+'"></a>')}}else{a(this).append('<img src="'+D[i]+'" />');if(g[i]!=undefined){a("img",this).wrap('<a class="ic_link" href="'+g[i]+'"></a>')}}if(e[i]!=undefined){a(this).append('<div class="ic_caption" style="position:absolute;bottom:0;">'+e[i]+"</div>")}});a(".infiniteCarousel_item",r).clone().appendTo(a("div.ic_tray",r));a(".infiniteCarousel_item",r).each(function(i){a(this).attr("id","ic_"+H+"_"+i)});a(".ic_tray",r).prepend(a(".infiniteCarousel_item:last").remove());if(w.margin!=0){a(r).width(a(r).width()+(w.inView+1)*w.margin).height(a(r).height()+2*w.margin);a(".infiniteCarousel_item",r).css("margin",w.margin+"px 0px "+w.margin+"px "+w.margin+"px");a(".ic_tray",r).css("left",parseInt(a(".ic_tray",r).css("left"))-w.margin+"px").width(a(".ic_tray",r).width()+w.margin*(s*2))}a(r).append('<div class="ic_left_nav" style="position:absolute;left:0;width:32px;height:100%;line-height:'+(2*w.margin+F+16)+'px">').append('<div class="ic_right_nav" style="position:absolute;width:32px;height:100%;right:0;line-height:'+(2*w.margin+F+16)+'px">');a(".ic_left_nav",r).append('<img style="cursor:pointer;" src="'+w.imagePath+'left.png" />');a(".ic_right_nav",r).append('<img style="cursor:pointer;" src="'+w.imagePath+'right.png" />');if(!w.prevNextInternal&&(parseInt(a(r).css("border-left-width"))+parseInt(a(r).css("border-right-width")))>0){a(".ic_right_nav",r).css("right","-"+(parseInt(a(r).css("border-left-width"))+parseInt(a(r).css("border-right-width")))+"px")}a(".ic_left_nav img",r).on("click",function(i){if(!a(".ic_tray",r).is(":animated")){y();j(w.advance)}});a(".ic_right_nav img",r).on("click",function(i){if(!a(".ic_tray",r).is(":animated")){y();d(w.advance)}});if(w.inView==s){w.displayProgressRing=false;w.thumbnailType="none";w.showControls=false;w.autoPilot=false;w.enableKeyboardNav=false;a(".ic_left_nav,.ic_right_nav",r).hide()}if(!w.prevNextInternal){a(r).wrap('<div id="ic_'+H+'_wrapper" class="ic_wrapper" style="padding:0 32px;position:relative;">');a("#ic_"+H+"_wrapper").width(a(r).width());a("#ic_"+H+"_wrapper").prepend(a(".ic_left_nav",r).detach());a("#ic_"+H+"_wrapper").prepend(a(".ic_right_nav",r).detach())}else{a(r).hover(function(){a(".ic_left_nav",r).stop().animate({opacity:1,left:"0px"},300);a(".ic_right_nav",r).stop().animate({opacity:1,right:"0px"},300)},function(){a(".ic_left_nav",r).stop().animate({opacity:0,left:"-32px"},500);a(".ic_right_nav",r).stop().animate({opacity:0,right:"-32px"},500)})}a("#ic_"+H).addClass("ic_peek_padding");a("#ic_"+H+"_wrapper").width(a(r).width()+parseInt(a("#ic_"+H).css("padding-left"))+parseInt(a("#ic_"+H).css("padding-right")));if(w.thumbnailType!="none"){a(r).append('<div id="ic_'+H+'_thumbnail_tray" class="ic_thumbnail_tray" style="position:absolute;bottom:0;padding:5px 0;width:100%;text-align:center;">');a("#ic_"+H+"_thumbnail_tray").append('<div class="ic_thumbnails">');for(var C=0;C<s;C++){a(".ic_thumbnails",r).append('<div class="ic_button" style="cursor:pointer">')}for(var C=0;C<w.inView;C++){a(".ic_button:eq("+C+")",r).addClass("ic_active")}a(".ic_button").hover(function(){if(!a(this).hasClass("ic_active")){a(this).css("background","#699")}},function(){a(this).css("background","")});if(w.thumbnailType=="images"){a(".ic_button",r).each(function(i){if(D[i]!=undefined){thumbImage=D[i]}if(G[i]!=undefined){thumbImage=G[i]}a(this).append('<img width="100%" height="100%" src="'+thumbImage+'" />')})}if(w.thumbnailType=="numbers"){a(".ic_button",r).each(function(i){a(this).html(i+1)})}if(w.thumbnailType=="count"){a(".ic_button",r).remove();a(".ic_thumbnails",r).html("<span>1</span> of "+s);B()}if(!w.internalThumbnails){if(!a("#ic_"+H+"_wrapper").length){a(r).wrap('<div id="ic_'+H+'_wrapper" class="ic_wrapper" style="position:relative;">');a("#ic_"+H+"_wrapper").width(a(r).width())}a("#ic_"+H+"_thumbnail_tray").css({bottom:"",position:"relative"}).appendTo(a("#ic_"+H+"_wrapper"))}var x=(a("#ic_"+H+"_wrapper").length)?a("#ic_"+H+"_wrapper"):r;a(".ic_button",x).on("click",function(){if(!a(".ic_tray",r).is(":animated")){y();var K=parseInt(a(".infiniteCarousel_item:eq(1)",r).attr("id").split("_").pop());var J=a(this).index();if(K>(s-1)){K-=s}var o=Math.abs(K-J);var i=s-o;var u=Math.min(o,i);if(K<J){if(o<i||o==i){d(u)}if(o>i){j(u)}}if(K>J){if(o<i){j(u)}if(o>i||o==i){d(u)}}}})}if((!w.prevNextInternal||!w.internalThumbnails)&&w.customClass!==null){a("#ic_"+H+"_wrapper").addClass("ic_"+w.customClass)}else{if(w.customClass!==null){a(r).addClass("ic_"+w.customClass)}}if(w.enableKeyboardNav){a(document).keydown(function(i){if(i.keyCode==39){if(!a(".ic_tray",r).is(":animated")){y();d(w.advance)}}if(i.keyCode==37){if(!a(".ic_tray",r).is(":animated")){y();j(w.advance)}}if(i.keyCode==80||i.keyCode==111){if(!a(".ic_tray",r).is(":animated")){if(w.autoPilot){l()}}}if(i.keyCode==83||i.keyCode==115){if(!a(".ic_tray",r).is(":animated")){E()}}})}if(w.showControls){a(r).append('<div id="ic_controls_'+H+'" class="ic_controls" style="background:url(images/controls.png) no-repeat -12px 0;opacity:.5;cursor:pointer;height:10px;position:absolute;right:9px;top:10px;width:10px;z-index:1">');if(!w.autoPilot){a("#ic_controls_"+H).css("background-position","1px 0")}a(".ic_controls",r).on("click",function(){if(!a(".ic_tray",r).is(":animated")){if(w.autoPilot){l()}else{E()}}})}if(k){a(r).append('<canvas id="ic_canvas_'+H+'" width="30" height="30" style="position:absolute;top:0;right:0;"></canvas>');var z=a("#ic_canvas_"+H)[0].getContext("2d");z.lineWidth=3;z.strokeStyle="rgba("+w.progressRingColorOpacity+")";z.shadowOffsetX=0;z.shadowOffsetY=0;z.shadowBlur=3;z.shadowColor="#fff";if(!w.displayProgressRing){a("#ic_canvas_"+H).hide()}}else{a(r).append('<div id="ic_ie_timer_'+H+'" style="width:100%;height:6px;position:absolute;bottom:0;left:0;background:#ccc"></div>');a("#ic_ie_timer_"+H).css("opacity",".25")}function t(){if(w.autoHideCaptions){a(".ic_caption",r).stop().animate({bottom:-F+"px"})}}function n(){if(w.autoHideCaptions){a(".ic_caption",r).stop().animate({bottom:"0px"})}}function B(){thumbButtonStart=parseInt(a(".infiniteCarousel_item",r).attr("id").split("_").pop())+1;if(thumbButtonStart>(s-1)){thumbButtonStart-=s}if(w.thumbnailType=="count"){var J=[];for(var u=thumbButtonStart;u<thumbButtonStart+w.inView;u++){J.push(((u+1)>s)?(u+1)-s:(u+1))}var K=J.pop();var o=(w.inView>1)?" & ":"";a(".ic_thumbnails span",x).text(J.join(", ")+o+K)}for(var u=thumbButtonStart;u<thumbButtonStart+w.inView;u++){(u>s-1)?a(".ic_button:eq("+Math.abs(s-u)+")",x).addClass("ic_active"):a(".ic_button:eq("+u+")",x).addClass("ic_active")}}function j(i){w.onSlideStart.call(this);a(".ic_button",x).removeClass("ic_active");a(".infiniteCarousel_item",r).slice(-i).prependTo("#ic_"+H+" .ic_tray",r);a(".ic_tray",r).css({left:"-="+(v*i)+"px"});a(".ic_tray",r).stop().animate({left:"+="+v*i+"px"},w.transitionSpeed,w.easeRight,function(){n();B();w.onSlideEnd.call(this)});t()}function d(i){w.onSlideStart.call(this);a(".ic_button",x).removeClass("ic_active");a(".ic_tray",r).stop().animate({left:"-="+(v+w.margin)*i+"px"},w.transitionSpeed,w.easeLeft,function(){a(".infiniteCarousel_item",r).slice(0,i).appendTo("#ic_"+H+" .ic_tray",r);a(".ic_tray",r).css({left:"-"+(v+w.margin)+"px"});n();B();w.onSlideEnd.call(this);if(w.autoPilot){m(w.displayTime)}});t()}function l(){w.onPauseClick.call(this);w.autoPilot=false;a("#ic_controls_"+H).css("background-position","1px 0");clearInterval(h);p=q}function E(){w.autoPilot=true;if(w.autoPilot&&!a(".ic_tray",r).is(":animated")){m(w.displayTime)}a("#ic_controls_"+H).css("background-position","-12px 0")}function y(){w.onPlayClick.call(this);w.autoPilot=false;f();a("#ic_controls_"+H).css("background-position","1px 0");clearInterval(h)}function m(i){var o=new Date().getTime(),u,J=0;h=setInterval(function(){if(J<359){u=new Date().getTime();q=(u-o)+p;J=Math.floor(q/i*360);if(J>359){J=359}if(k){z.clearRect(0,0,30,30);z.save();z.translate(15,15);z.rotate(-Math.PI/2);if(w.progressRingBackgroundOn){z.strokeStyle="rgba("+w.progressRingBackgroundColorOpacity+")";z.beginPath();z.arc(0,0,10,0,(360*(Math.PI/180)),true);z.stroke();z.strokeStyle="rgba("+w.progressRingColorOpacity+")"}z.beginPath();z.arc(0,0,10,0,(J*(Math.PI/180)),true);z.stroke();z.restore()}else{a("#ic_ie_timer_"+H,r).css("width",99-Math.floor((q/i)*100)+"%")}}else{p=0;clearInterval(h);d(w.advance)}},20)}function f(){p=0;if(k){z.clearRect(0,0,30,30);z.save();z.translate(15,15);z.rotate(-Math.PI/2);z.beginPath();z.arc(0,0,10,0,(360*(Math.PI/180)),true);z.stroke();z.restore()}}if(w.autoPilot&&!a(".ic_tray",r).is(":animated")){m(w.displayTime)}else{f()}})}})})(jQuery);
(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);
(function($) {
	$
			.extend({
				tablesorter : new function() {
					var parsers = [], widgets = [];
					this.defaults = {
						cssHeader : "header",
						cssAsc : "headerSortUp",
						cssDesc : "headerSortDown",
						cssChildRow : "expand-child",
						sortInitialOrder : "asc",
						sortMultiSortKey : "shiftKey",
						sortForce : null,
						sortAppend : null,
						sortLocaleCompare : true,
						textExtraction : "simple",
						parsers : {},
						widgets : [],
						widgetZebra : {
							css : [ "even", "odd" ]
						},
						headers : {},
						widthFixed : false,
						cancelSelection : true,
						sortList : [],
						headerList : [],
						dateFormat : "us",
						decimal : '/\.|\,/g',
						onRenderHeader : null,
						selectorHeaders : 'thead th',
						debug : false
					};
					function benchmark(s, d) {
						log(s + "," + (new Date().getTime() - d.getTime())
								+ "ms");
					}
					this.benchmark = benchmark;
					function log(s) {
						if (typeof console != "undefined"
								&& typeof console.debug != "undefined") {
							console.log(s);
						} else {
							alert(s);
						}
					}
					function buildParserCache(table, $headers) {
						if (table.config.debug) {
							var parsersDebug = "";
						}
						if (table.tBodies.length == 0)
							return;
						var rows = table.tBodies[0].rows;
						if (rows[0]) {
							var list = [], cells = rows[0].cells, l = cells.length;
							for ( var i = 0; i < l; i++) {
								var p = false;
								if ($.metadata
										&& ($($headers[i]).metadata() && $(
												$headers[i]).metadata().sorter)) {
									p = getParserById($($headers[i]).metadata().sorter);
								} else if ((table.config.headers[i] && table.config.headers[i].sorter)) {
									p = getParserById(table.config.headers[i].sorter);
								}
								if (!p) {
									p = detectParserForColumn(table, rows, -1,
											i);
								}
								if (table.config.debug) {
									parsersDebug += "column:" + i + " parser:"
											+ p.id + "\n";
								}
								list.push(p);
							}
						}
						if (table.config.debug) {
							log(parsersDebug);
						}
						return list;
					}
					;
					function detectParserForColumn(table, rows, rowIndex,
							cellIndex) {
						var l = parsers.length, node = false, nodeValue = false, keepLooking = true;
						while (nodeValue == '' && keepLooking) {
							rowIndex++;
							if (rows[rowIndex]) {
								node = getNodeFromRowAndCellIndex(rows,
										rowIndex, cellIndex);
								nodeValue = trimAndGetNodeText(table.config,
										node);
								if (table.config.debug) {
									log('Checking if value was empty on row:'
											+ rowIndex);
								}
							} else {
								keepLooking = false;
							}
						}
						for ( var i = 1; i < l; i++) {
							if (parsers[i].is(nodeValue, table, node)) {
								return parsers[i];
							}
						}
						return parsers[0];
					}
					function getNodeFromRowAndCellIndex(rows, rowIndex,
							cellIndex) {
						return rows[rowIndex].cells[cellIndex];
					}
					function trimAndGetNodeText(config, node) {
						return $.trim(getElementText(config, node));
					}
					function getParserById(name) {
						var l = parsers.length;
						for ( var i = 0; i < l; i++) {
							if (parsers[i].id.toLowerCase() == name
									.toLowerCase()) {
								return parsers[i];
							}
						}
						return false;
					}
					function buildCache(table) {
						if (table.config.debug) {
							var cacheTime = new Date();
						}
						var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0, totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0, parsers = table.config.parsers, cache = {
							row : [],
							normalized : []
						};
						for ( var i = 0; i < totalRows; ++i) {
							var c = $(table.tBodies[0].rows[i]), cols = [];
							if (c.hasClass(table.config.cssChildRow)) {
								cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1]
										.add(c);
								continue;
							}
							cache.row.push(c);
							for ( var j = 0; j < totalCells; ++j) {
								cols.push(parsers[j].format(getElementText(
										table.config, c[0].cells[j]), table,
										c[0].cells[j]));
							}
							cols.push(cache.normalized.length);
							cache.normalized.push(cols);
							cols = null;
						}
						;
						if (table.config.debug) {
							benchmark("Building cache for " + totalRows
									+ " rows:", cacheTime);
						}
						return cache;
					}
					;
					function getElementText(config, node) {
						var text = "";
						if (!node)
							return "";
						if (!config.supportsTextContent)
							config.supportsTextContent = node.textContent || false;
						if (config.textExtraction == "simple") {
							if (config.supportsTextContent) {
								text = node.textContent;
							} else {
								if (node.childNodes[0]
										&& node.childNodes[0].hasChildNodes()) {
									text = node.childNodes[0].innerHTML;
								} else {
									text = node.innerHTML;
								}
							}
						} else {
							if (typeof (config.textExtraction) == "function") {
								text = config.textExtraction(node);
							} else {
								text = $(node).text();
							}
						}
						return text;
					}
					function appendToTable(table, cache) {
						if (table.config.debug) {
							var appendTime = new Date()
						}
						var c = cache, r = c.row, n = c.normalized, totalRows = n.length, checkCell = (n[0].length - 1), tableBody = $(table.tBodies[0]), rows = [];
						for ( var i = 0; i < totalRows; i++) {
							var pos = n[i][checkCell];
							rows.push(r[pos]);
							if (!table.config.appender) {
								var l = r[pos].length;
								for ( var j = 0; j < l; j++) {
									tableBody[0].appendChild(r[pos][j]);
								}
							}
						}
						if (table.config.appender) {
							table.config.appender(table, rows);
						}
						rows = null;
						if (table.config.debug) {
							benchmark("Rebuilt table:", appendTime);
						}
						applyWidget(table);
						setTimeout(function() {
							$(table).trigger("sortEnd");
						}, 0);
					}
					;
					function buildHeaders(table) {
						if (table.config.debug) {
							var time = new Date();
						}
						var meta = ($.metadata) ? true : false;
						var header_index = computeTableHeaderCellIndexes(table);
						$tableHeaders = $(table.config.selectorHeaders, table)
								.each(
										function(index) {
											this.column = header_index[this.parentNode.rowIndex
													+ "-" + this.cellIndex];
											this.order = formatSortingOrder(table.config.sortInitialOrder);
											this.count = this.order;
											if (checkHeaderMetadata(this)
													|| checkHeaderOptions(
															table, index))
												this.sortDisabled = true;
											if (checkHeaderOptionsSortingLocked(
													table, index))
												this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(
														table, index);
											if (!this.sortDisabled) {
												var $th = $(this).addClass(
														table.config.cssHeader);
												if (table.config.onRenderHeader)
													table.config.onRenderHeader
															.apply($th);
											}
											table.config.headerList[index] = this;
										});
						if (table.config.debug) {
							benchmark("Built headers:", time);
							log($tableHeaders);
						}
						return $tableHeaders;
					}
					;
					function computeTableHeaderCellIndexes(t) {
						var matrix = [];
						var lookup = {};
						var thead = t.getElementsByTagName('THEAD')[0];
						var trs = thead.getElementsByTagName('TR');
						for ( var i = 0; i < trs.length; i++) {
							var cells = trs[i].cells;
							for ( var j = 0; j < cells.length; j++) {
								var c = cells[j];
								var rowIndex = c.parentNode.rowIndex;
								var cellId = rowIndex + "-" + c.cellIndex;
								var rowSpan = c.rowSpan || 1;
								var colSpan = c.colSpan || 1
								var firstAvailCol;
								if (typeof (matrix[rowIndex]) == "undefined") {
									matrix[rowIndex] = [];
								}
								for ( var k = 0; k < matrix[rowIndex].length + 1; k++) {
									if (typeof (matrix[rowIndex][k]) == "undefined") {
										firstAvailCol = k;
										break;
									}
								}
								lookup[cellId] = firstAvailCol;
								for ( var k = rowIndex; k < rowIndex + rowSpan; k++) {
									if (typeof (matrix[k]) == "undefined") {
										matrix[k] = [];
									}
									var matrixrow = matrix[k];
									for ( var l = firstAvailCol; l < firstAvailCol
											+ colSpan; l++) {
										matrixrow[l] = "x";
									}
								}
							}
						}
						return lookup;
					}
					function checkCellColSpan(table, rows, row) {
						var arr = [], r = table.tHead.rows, c = r[row].cells;
						for ( var i = 0; i < c.length; i++) {
							var cell = c[i];
							if (cell.colSpan > 1) {
								arr = arr.concat(checkCellColSpan(table,
										headerArr, row++));
							} else {
								if (table.tHead.length == 1
										|| (cell.rowSpan > 1 || !r[row + 1])) {
									arr.push(cell);
								}
							}
						}
						return arr;
					}
					;
					function checkHeaderMetadata(cell) {
						if (($.metadata)
								&& ($(cell).metadata().sorter === false)) {
							return true;
						}
						;
						return false;
					}
					function checkHeaderOptions(table, i) {
						if ((table.config.headers[i])
								&& (table.config.headers[i].sorter === false)) {
							return true;
						}
						;
						return false;
					}
					function checkHeaderOptionsSortingLocked(table, i) {
						if ((table.config.headers[i])
								&& (table.config.headers[i].lockedOrder))
							return table.config.headers[i].lockedOrder;
						return false;
					}
					function applyWidget(table) {
						var c = table.config.widgets;
						var l = c.length;
						for ( var i = 0; i < l; i++) {
							getWidgetById(c[i]).format(table);
						}
					}
					function getWidgetById(name) {
						var l = widgets.length;
						for ( var i = 0; i < l; i++) {
							if (widgets[i].id.toLowerCase() == name
									.toLowerCase()) {
								return widgets[i];
							}
						}
					}
					;
					function formatSortingOrder(v) {
						if (typeof (v) != "Number") {
							return (v.toLowerCase() == "desc") ? 1 : 0;
						} else {
							return (v == 1) ? 1 : 0;
						}
					}
					function isValueInArray(v, a) {
						var l = a.length;
						for ( var i = 0; i < l; i++) {
							if (a[i][0] == v) {
								return true;
							}
						}
						return false;
					}
					function setHeadersCss(table, $headers, list, css) {
						$headers.removeClass(css[0]).removeClass(css[1]);
						var h = [];
						$headers.each(function(offset) {
							if (!this.sortDisabled) {
								h[this.column] = $(this);
							}
						});
						var l = list.length;
						for ( var i = 0; i < l; i++) {
							h[list[i][0]].addClass(css[list[i][1]]);
						}
					}
					function fixColumnWidth(table, $headers) {
						var c = table.config;
						if (c.widthFixed) {
							var colgroup = $('<colgroup>');
							$("tr:first td", table.tBodies[0]).each(
									function() {
										colgroup.append($('<col>').css('width',
												$(this).width()));
									});
							$(table).prepend(colgroup);
						}
						;
					}
					function updateHeaderSortCount(table, sortList) {
						var c = table.config, l = sortList.length;
						for ( var i = 0; i < l; i++) {
							var s = sortList[i], o = c.headerList[s[0]];
							o.count = s[1];
							o.count++;
						}
					}
					function multisort(table, sortList, cache) {
						if (table.config.debug) {
							var sortTime = new Date();
						}
						var dynamicExp = "var sortWrapper = function(a,b) {", l = sortList.length;
						for ( var i = 0; i < l; i++) {
							var c = sortList[i][0];
							var order = sortList[i][1];
							var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction(
									"text", "asc", c)
									: makeSortFunction("text", "desc", c))
									: ((order == 0) ? makeSortFunction(
											"numeric", "asc", c)
											: makeSortFunction("numeric",
													"desc", c));
							var e = "e" + i;
							dynamicExp += "var " + e + " = " + s;
							dynamicExp += "if(" + e + ") { return " + e
									+ "; } ";
							dynamicExp += "else { ";
						}
						var orgOrderCol = cache.normalized[0].length - 1;
						dynamicExp += "return a[" + orgOrderCol + "]-b["
								+ orgOrderCol + "];";
						for ( var i = 0; i < l; i++) {
							dynamicExp += "}; ";
						}
						dynamicExp += "return 0; ";
						dynamicExp += "}; ";
						if (table.config.debug) {
							benchmark("Evaling expression:" + dynamicExp,
									new Date());
						}
						eval(dynamicExp);
						cache.normalized.sort(sortWrapper);
						if (table.config.debug) {
							benchmark("Sorting on " + sortList.toString()
									+ " and dir " + order + " time:", sortTime);
						}
						return cache;
					}
					;
					function makeSortFunction(type, direction, index) {
						var a = "a[" + index + "]", b = "b[" + index + "]";
						if (type == 'text' && direction == 'asc') {
							return "("
									+ a
									+ " == "
									+ b
									+ " ? 0 : ("
									+ a
									+ " === null ? Number.POSITIVE_INFINITY : ("
									+ b
									+ " === null ? Number.NEGATIVE_INFINITY : ("
									+ a + " < " + b + ") ? -1 : 1 )));";
						} else if (type == 'text' && direction == 'desc') {
							return "("
									+ a
									+ " == "
									+ b
									+ " ? 0 : ("
									+ a
									+ " === null ? Number.POSITIVE_INFINITY : ("
									+ b
									+ " === null ? Number.NEGATIVE_INFINITY : ("
									+ b + " < " + a + ") ? -1 : 1 )));";
						} else if (type == 'numeric' && direction == 'asc') {
							return "("
									+ a
									+ " === null && "
									+ b
									+ " === null) ? 0 :("
									+ a
									+ " === null ? Number.POSITIVE_INFINITY : ("
									+ b
									+ " === null ? Number.NEGATIVE_INFINITY : "
									+ a + " - " + b + "));";
						} else if (type == 'numeric' && direction == 'desc') {
							return "("
									+ a
									+ " === null && "
									+ b
									+ " === null) ? 0 :("
									+ a
									+ " === null ? Number.POSITIVE_INFINITY : ("
									+ b
									+ " === null ? Number.NEGATIVE_INFINITY : "
									+ b + " - " + a + "));";
						}
					}
					;
					function makeSortText(i) {
						return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i
								+ "] > b[" + i + "]) ? 1 : 0));";
					}
					;
					function makeSortTextDesc(i) {
						return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i
								+ "] > a[" + i + "]) ? 1 : 0));";
					}
					;
					function makeSortNumeric(i) {
						return "a[" + i + "]-b[" + i + "];";
					}
					;
					function makeSortNumericDesc(i) {
						return "b[" + i + "]-a[" + i + "];";
					}
					;
					function sortText(a, b) {
						if (table.config.sortLocaleCompare)
							return a.localeCompare(b);
						return ((a < b) ? -1 : ((a > b) ? 1 : 0));
					}
					;
					function sortTextDesc(a, b) {
						if (table.config.sortLocaleCompare)
							return b.localeCompare(a);
						return ((b < a) ? -1 : ((b > a) ? 1 : 0));
					}
					;
					function sortNumeric(a, b) {
						return a - b;
					}
					;
					function sortNumericDesc(a, b) {
						return b - a;
					}
					;
					function getCachedSortType(parsers, i) {
						return parsers[i].type;
					}
					;
					this.construct = function(settings) {
						return this
								.each(function() {
									if (!this.tHead || !this.tBodies)
										return;
									var $this, $document, $headers, cache, config, shiftDown = 0, sortOrder;
									this.config = {};
									config = $.extend(this.config,
											$.tablesorter.defaults, settings);
									$this = $(this);
									$.data(this, "tablesorter", config);
									$headers = buildHeaders(this);
									this.config.parsers = buildParserCache(
											this, $headers);
									cache = buildCache(this);
									var sortCSS = [ config.cssDesc,
											config.cssAsc ];
									fixColumnWidth(this);
									$headers
											.click(
													function(e) {
														var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
														if (!this.sortDisabled
																&& totalRows > 0) {
															$this
																	.trigger("sortStart");
															var $cell = $(this);
															var i = this.column;
															this.order = this.count++ % 2;
															if (this.lockedOrder)
																this.order = this.lockedOrder;
															if (!e[config.sortMultiSortKey]) {
																config.sortList = [];
																if (config.sortForce != null) {
																	var a = config.sortForce;
																	for ( var j = 0; j < a.length; j++) {
																		if (a[j][0] != i) {
																			config.sortList
																					.push(a[j]);
																		}
																	}
																}
																config.sortList
																		.push([
																				i,
																				this.order ]);
															} else {
																if (isValueInArray(
																		i,
																		config.sortList)) {
																	for ( var j = 0; j < config.sortList.length; j++) {
																		var s = config.sortList[j], o = config.headerList[s[0]];
																		if (s[0] == i) {
																			o.count = s[1];
																			o.count++;
																			s[1] = o.count % 2;
																		}
																	}
																} else {
																	config.sortList
																			.push([
																					i,
																					this.order ]);
																}
															}
															;
															setTimeout(
																	function() {
																		setHeadersCss(
																				$this[0],
																				$headers,
																				config.sortList,
																				sortCSS);
																		appendToTable(
																				$this[0],
																				multisort(
																						$this[0],
																						config.sortList,
																						cache));
																	}, 1);
															return false;
														}
													})
											.mousedown(
													function() {
														if (config.cancelSelection) {
															this.onselectstart = function() {
																return false
															};
															return false;
														}
													});
									$this
											.bind(
													"update",
													function() {
														var me = this;
														setTimeout(
																function() {
																	me.config.parsers = buildParserCache(
																			me,
																			$headers);
																	cache = buildCache(me);
																}, 1);
													})
											.bind(
													"updateCell",
													function(e, cell) {
														var config = this.config;
														var pos = [
																(cell.parentNode.rowIndex - 1),
																cell.cellIndex ];
														cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]]
																.format(
																		getElementText(
																				config,
																				cell),
																		cell);
													})
											.bind(
													"sorton",
													function(e, list) {
														$(this).trigger(
																"sortStart");
														config.sortList = list;
														var sortList = config.sortList;
														updateHeaderSortCount(
																this, sortList);
														setHeadersCss(this,
																$headers,
																sortList,
																sortCSS);
														appendToTable(
																this,
																multisort(
																		this,
																		sortList,
																		cache));
													}).bind(
													"appendCache",
													function() {
														appendToTable(this,
																cache);
													}).bind(
													"applyWidgetId",
													function(e, id) {
														getWidgetById(id)
																.format(this);
													}).bind("applyWidgets",
													function() {
														applyWidget(this);
													});
									if ($.metadata
											&& ($(this).metadata() && $(this)
													.metadata().sortlist)) {
										config.sortList = $(this).metadata().sortlist;
									}
									if (config.sortList.length > 0) {
										$this.trigger("sorton",
												[ config.sortList ]);
									}
									applyWidget(this);
								});
					};
					this.addParser = function(parser) {
						var l = parsers.length, a = true;
						for ( var i = 0; i < l; i++) {
							if (parsers[i].id.toLowerCase() == parser.id
									.toLowerCase()) {
								a = false;
							}
						}
						if (a) {
							parsers.push(parser);
						}
						;
					};
					this.addWidget = function(widget) {
						widgets.push(widget);
					};
					this.formatFloat = function(s) {
						var i = parseFloat(s);
						return (isNaN(i)) ? 0 : i;
					};
					this.formatInt = function(s) {
						var i = parseInt(s);
						return (isNaN(i)) ? 0 : i;
					};
					this.isDigit = function(s, config) {
						return /^[-+]?\d*$/.test($
								.trim(s.replace(/[,.']/g, '')));
					};
					this.clearTableBody = function(table) {
						if ($.browser.msie) {
							function empty() {
								while (this.firstChild)
									this.removeChild(this.firstChild);
							}
							empty.apply(table.tBodies[0]);
						} else {
							table.tBodies[0].innerHTML = "";
						}
					};
				}
			});
	$.fn.extend({
		tablesorter : $.tablesorter.construct
	});
	var ts = $.tablesorter;
	ts.addParser({
		id : "text",
		is : function(s) {
			return true;
		},
		format : function(s) {
			return $.trim(s.toLocaleLowerCase());
		},
		type : "text"
	});
	ts.addParser({
		id : "digit",
		is : function(s, table) {
			var c = table.config;
			return $.tablesorter.isDigit(s, c);
		},
		format : function(s) {
			return $.tablesorter.formatFloat(s);
		},
		type : "numeric"
	});
	ts.addParser({
		id : "currency",
		is : function(s) {
			return /^[????$????????.]/.test(s);
		},
		format : function(s) {
			return $.tablesorter.formatFloat(s.replace(new RegExp(/[????$???????]/g),
					""));
		},
		type : "numeric"
	});
	ts.addParser({
		id : "ipAddress",
		is : function(s) {
			return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
		},
		format : function(s) {
			var a = s.split("."), r = "", l = a.length;
			for ( var i = 0; i < l; i++) {
				var item = a[i];
				if (item.length == 2) {
					r += "0" + item;
				} else {
					r += item;
				}
			}
			return $.tablesorter.formatFloat(r);
		},
		type : "numeric"
	});
	ts.addParser({
		id : "url",
		is : function(s) {
			return /^(https?|ftp|file):\/\/$/.test(s);
		},
		format : function(s) {
			return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),
					''));
		},
		type : "text"
	});
	ts.addParser({
		id : "isoDate",
		is : function(s) {
			return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
		},
		format : function(s) {
			return $.tablesorter.formatFloat((s != "") ? new Date(s.replace(
					new RegExp(/-/g), "/")).getTime() : "0");
		},
		type : "numeric"
	});
	ts.addParser({
		id : "percent",
		is : function(s) {
			return /\%$/.test($.trim(s));
		},
		format : function(s) {
			return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
		},
		type : "numeric"
	});
	ts
			.addParser({
				id : "usLongDate",
				is : function(s) {
					return s
							.match(new RegExp(
									/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
				},
				format : function(s) {
					return $.tablesorter.formatFloat(new Date(s).getTime());
				},
				type : "numeric"
			});
	ts
			.addParser({
				id : "shortDate",
				is : function(s) {
					return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
				},
				format : function(s, table) {
					var c = table.config;
					s = s.replace(/\-/g, "/");
					if (c.dateFormat == "us") {
						s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,
								"$3/$1/$2");
					} else if (c.dateFormat == "uk") {
						s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,
								"$3/$2/$1");
					} else if (c.dateFormat == "dd/mm/yy"
							|| c.dateFormat == "dd-mm-yy") {
						s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,
								"$1/$2/$3");
					}
					return $.tablesorter.formatFloat(new Date(s).getTime());
				},
				type : "numeric"
			});
	ts
			.addParser({
				id : "time",
				is : function(s) {
					return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/
							.test(s);
				},
				format : function(s) {
					return $.tablesorter
							.formatFloat(new Date("2000/01/01 " + s).getTime());
				},
				type : "numeric"
			});
	ts.addParser({
		id : "metadata",
		is : function(s) {
			return false;
		},
		format : function(s, table, cell) {
			var c = table.config, p = (!c.parserMetadataName) ? 'sortValue'
					: c.parserMetadataName;
			return $(cell).metadata()[p];
		},
		type : "numeric"
	});
	ts.addWidget({
		id : "zebra",
		format : function(table) {
			if (table.config.debug) {
				var time = new Date();
			}
			var $tr, row = -1, odd;
			$("tr:visible", table.tBodies[0]).each(
					function(i) {
						$tr = $(this);
						if (!$tr.hasClass(table.config.cssChildRow))
							row++;
						odd = (row % 2 == 0);
						$tr.removeClass(
								table.config.widgetZebra.css[odd ? 0 : 1])
								.addClass(
										table.config.widgetZebra.css[odd ? 1
												: 0])
					});
			if (table.config.debug) {
				$.tablesorter.benchmark("Applying Zebra widget", time);
			}
		}
	});
})(jQuery);
(function($){

$.fn.pagination = function(opts){

    if(!opts) opts = {};

    var resultsPerPage = opts.perPage || 3;

    var ul = this;
    var li = ul.find('li');

    li.each(function(){
        // Calculating the height of each li element,
        // and storing it with the data method:

        var el = $(this);
        el.data('height',el.outerHeight(true));
    });

    // Calculating the total number of pages:
    var pagesNumber = Math.ceil(li.length/resultsPerPage);

    // If the pages are less than two, do nothing:
    if(pagesNumber<2) return this;

    // Creating the controls div:
    var swControls = $('<div class="swControls">');

    for(var i=0;i<pagesNumber;i++)
    {
        // Slice a portion of the li elements, and wrap it in a swPage div:
        li.slice(i*resultsPerPage,(i+1)*resultsPerPage).wrapAll('<div class="swPage" />');

        // Adding a link to the swControls div:
        swControls.append('<a href="" class="swShowPage">'+(i+1)+'</a>');
    }

    ul.append(swControls);
        
    var maxHeight = 0;
    var totalWidth = 0;

    var swPage = ul.find('.swPage');
    swPage.each(function(){

        // Looping through all the newly created pages:

        var elem = $(this);

        var tmpHeight = 0;
        elem.find('li').each(function(){tmpHeight+=$(this).data('height');});

        if(tmpHeight>maxHeight)
            maxHeight = tmpHeight;
        totalWidth+=elem.outerWidth();

        elem.css('float','left').width(ul.width());
    });

    swPage.wrapAll('<div class="swSlider" />');

    // Setting the height of the ul to the height of the tallest page (needs work):
    ul.height(maxHeight);

    var swSlider = ul.find('.swSlider');
    swSlider.append('<div class="clear" />').width(totalWidth);

    var hyperLinks = ul.find('a.swShowPage');

    hyperLinks.click(function(e){

        // If one of the control links is clicked, slide the swSlider div
        // (which contains all the pages) and mark it as active:

        $(this).addClass('active').siblings().removeClass('active');
        
        swSlider.stop().animate({'margin-left': -(parseInt($(this).text())-1)*(totalWidth/pagesNumber)},'slow');
        e.preventDefault();
    });

    // Mark the first link as active the first time the code runs:
    hyperLinks.eq(0).addClass('active');
    
    var controls = $('.swControls').detach();
    controls.appendTo('.pager');

    return this;

}})(jQuery);
/*
 * jqModal - Minimalist Modaling with jQuery
 *   (http://dev.iceburg.net/jquery/jqModal/)
 *
 * Copyright (c) 2007,2008 Brice Burgess <bhb@iceburg.net>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * $Version: 03/01/2009 +r14
 */
(function($) {
$.fn.jqm=function(o){
var p={
overlay: 50,
overlayClass: 'jqmOverlay',
closeClass: 'jqmClose',
trigger: '.jqModal',
ajax: F,
ajaxText: '',
target: F,
modal: F,
toTop: F,
onShow: F,
onHide: F,
onLoad: F
};
return this.each(function(){if(this._jqm)return H[this._jqm].c=$.extend({},H[this._jqm].c,o);s++;this._jqm=s;
H[s]={c:$.extend(p,$.jqm.params,o),a:F,w:$(this).addClass('jqmID'+s),s:s};
if(p.trigger)$(this).jqmAddTrigger(p.trigger);
});};

$.fn.jqmAddClose=function(e){return hs(this,e,'jqmHide');};
$.fn.jqmAddTrigger=function(e){return hs(this,e,'jqmShow');};
$.fn.jqmShow=function(t){return this.each(function(){t=t||window.event;$.jqm.open(this._jqm,t);});};
$.fn.jqmHide=function(t){return this.each(function(){t=t||window.event;$.jqm.close(this._jqm,t)});};

$.jqm = {
hash:{},
open:function(s,t){var h=H[s],c=h.c,cc='.'+c.closeClass,z=(parseInt(h.w.css('z-index'))),z=(z>0)?z:3000,o=$('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:c.overlay/100});if(h.a)return F;h.t=t;h.a=true;h.w.css('z-index',z);
 if(c.modal) {if(!A[0])L('bind');A.push(s);}
 else if(c.overlay > 0)h.w.jqmAddClose(o);
 else o=F;

 h.o=(o)?o.addClass(c.overlayClass).prependTo('body'):F;
 if(ie6){$('html,body').css({height:'100%',width:'100%'});if(o){o=o.css({position:'absolute'})[0];for(var y in {Top:1,Left:1})o.style.setExpression(y.toLowerCase(),"(_=(document.documentElement.scroll"+y+" || document.body.scroll"+y+"))+'px'");}}

 if(c.ajax) {var r=c.target||h.w,u=c.ajax,r=(typeof r == 'string')?$(r,h.w):$(r),u=(u.substr(0,1) == '@')?$(t).attr(u.substring(1)):u;
  r.html(c.ajaxText).load(u,function(){if(c.onLoad)c.onLoad.call(this,h);if(cc)h.w.jqmAddClose($(cc,h.w));e(h);});}
 else if(cc)h.w.jqmAddClose($(cc,h.w));

 if(c.toTop&&h.o)h.w.before('<span id="jqmP'+h.w[0]._jqm+'"></span>').insertAfter(h.o);	
 (c.onShow)?c.onShow(h):h.w.show();e(h);return F;
},
close:function(s){var h=H[s];if(!h.a)return F;h.a=F;
 if(A[0]){A.pop();if(!A[0])L('unbind');}
 if(h.c.toTop&&h.o)$('#jqmP'+h.w[0]._jqm).after(h.w).remove();
 if(h.c.onHide)h.c.onHide(h);else{h.w.hide();if(h.o)h.o.remove();} return F;
},
params:{}};
var s=0,H=$.jqm.hash,A=[],ie6=$.browser.msie&&($.browser.version == "6.0"),F=false,
i=$('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),
e=function(h){if(ie6)if(h.o)h.o.html('<p style="width:100%;height:100%"/>').prepend(i);else if(!$('iframe.jqm',h.w)[0])h.w.prepend(i); f(h);},
f=function(h){try{$(':input:visible',h.w)[0].focus();}catch(_){}},
L=function(t){$()[t]("keypress",m)[t]("keydown",m)[t]("mousedown",m);},
m=function(e){var h=H[A[A.length-1]],r=(!$(e.target).parents('.jqmID'+h.s)[0]);if(r)f(h);return !r;},
hs=function(w,t,c){return w.each(function(){var s=this._jqm;$(t).each(function() {
 if(!this[c]){this[c]=[];$(this).click(function(){for(var i in {jqmShow:1,jqmHide:1})for(var s in this[i])if(H[this[i][s]])H[this[i][s]].w[i](this);return F;});}this[c].push(s);});});};
})(jQuery);
/*
 * jQuery Media Plugin for converting elements into rich media content.
 *
 * Examples and documentation at: http://malsup.com/jquery/media/
 * Copyright (c) 2007-2010 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @author: M. Alsup
 * @version: 0.96 (23-MAR-2011)
 * @requires jQuery v1.1.2 or later
 * $Id: jquery.media.js 2460 2007-07-23 02:53:15Z malsup $
 *
 * Supported Media Players:
 *	- Flash
 *	- Quicktime
 *	- Real Player
 *	- Silverlight
 *	- Windows Media Player
 *	- iframe
 *
 * Supported Media Formats:
 *	 Any types supported by the above players, such as:
 *	 Video: asf, avi, flv, mov, mpg, mpeg, mp4, qt, smil, swf, wmv, 3g2, 3gp
 *	 Audio: aif, aac, au, gsm, mid, midi, mov, mp3, m4a, snd, rm, wav, wma
 *	 Other: bmp, html, pdf, psd, qif, qtif, qti, tif, tiff, xaml
 *
 * Thanks to Mark Hicken and Brent Pedersen for helping me debug this on the Mac!
 * Thanks to Dan Rossi for numerous bug reports and code bits!
 * Thanks to Skye Giordano for several great suggestions!
 * Thanks to Richard Connamacher for excellent improvements to the non-IE behavior!
 */
;(function($) {

var lameIE = $.browser.msie && $.browser.version < 9;

/**
 * Chainable method for converting elements into rich media.
 *
 * @param options
 * @param callback fn invoked for each matched element before conversion
 * @param callback fn invoked for each matched element after conversion
 */
$.fn.media = function(options, f1, f2) {
	if (options == 'undo') {
		return this.each(function() {
			var $this = $(this);
			var html = $this.data('media.origHTML');
			if (html)
				$this.replaceWith(html);
		});
	}
	
	return this.each(function() {
		if (typeof options == 'function') {
			f2 = f1;
			f1 = options;
			options = {};
		}
		var o = getSettings(this, options);
		// pre-conversion callback, passes original element and fully populated options
		if (typeof f1 == 'function') f1(this, o);

		var r = getTypesRegExp();
		var m = r.exec(o.src.toLowerCase()) || [''];

		o.type ? m[0] = o.type : m.shift();
		for (var i=0; i < m.length; i++) {
			fn = m[i].toLowerCase();
			if (isDigit(fn[0])) fn = 'fn' + fn; // fns can't begin with numbers
			if (!$.fn.media[fn])
				continue;  // unrecognized media type
			// normalize autoplay settings
			var player = $.fn.media[fn+'_player'];
			if (!o.params) o.params = {};
			if (player) {
				var num = player.autoplayAttr == 'autostart';
				o.params[player.autoplayAttr || 'autoplay'] = num ? (o.autoplay ? 1 : 0) : o.autoplay ? true : false;
			}
			var $div = $.fn.media[fn](this, o);

			$div.css('backgroundColor', o.bgColor).width(o.width);
			
			if (o.canUndo) {
				var $temp = $('<div></div>').append(this);
				$div.data('media.origHTML', $temp.html()); // store original markup
			}
			
			// post-conversion callback, passes original element, new div element and fully populated options
			if (typeof f2 == 'function') f2(this, $div[0], o, player.name);
			break;
		}
	});
};

/**
 * Non-chainable method for adding or changing file format / player mapping
 * @name mapFormat
 * @param String format File format extension (ie: mov, wav, mp3)
 * @param String player Player name to use for the format (one of: flash, quicktime, realplayer, winmedia, silverlight or iframe
 */
$.fn.media.mapFormat = function(format, player) {
	if (!format || !player || !$.fn.media.defaults.players[player]) return; // invalid
	format = format.toLowerCase();
	if (isDigit(format[0])) format = 'fn' + format;
	$.fn.media[format] = $.fn.media[player];
	$.fn.media[format+'_player'] = $.fn.media.defaults.players[player];
};

// global defautls; override as needed
$.fn.media.defaults = {
	standards:  true,       // use object tags only (no embeds for non-IE browsers)
	canUndo:    true,       // tells plugin to store the original markup so it can be reverted via: $(sel).mediaUndo()
	width:		400,
	height:		400,
	autoplay:	0,		   	// normalized cross-player setting
	bgColor:	'#ffffff', 	// background color
	params:		{ wmode: 'transparent'},	// added to object element as param elements; added to embed element as attrs
	attrs:		{},			// added to object and embed elements as attrs
	flvKeyName: 'file', 	// key used for object src param (thanks to Andrea Ercolino)
	flashvars:	{},			// added to flash content as flashvars param/attr
	flashVersion:	'7',	// required flash version
	expressInstaller: null,	// src for express installer

	// default flash video and mp3 player (@see: http://jeroenwijering.com/?item=Flash_Media_Player)
	flvPlayer:	 'mediaplayer.swf',
	mp3Player:	 'mediaplayer.swf',

	// @see http://msdn2.microsoft.com/en-us/library/bb412401.aspx
	silverlight: {
		inplaceInstallPrompt: 'true', // display in-place install prompt?
		isWindowless:		  'true', // windowless mode (false for wrapping markup)
		framerate:			  '24',	  // maximum framerate
		version:			  '0.9',  // Silverlight version
		onError:			  null,	  // onError callback
		onLoad:			      null,   // onLoad callback
		initParams:			  null,	  // object init params
		userContext:		  null	  // callback arg passed to the load callback
	}
};

// Media Players; think twice before overriding
$.fn.media.defaults.players = {
	flash: {
		name:		 'flash',
		title:		 'Flash',
		types:		 'flv,mp3,swf',
		mimetype:	 'application/x-shockwave-flash',
		pluginspage: 'http://www.adobe.com/go/getflashplayer',
		ieAttrs: {
			classid:  'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000',
			type:	  'application/x-oleobject',
			codebase: 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + $.fn.media.defaults.flashVersion
		}
	},
	quicktime: {
		name:		 'quicktime',
		title:		 'QuickTime',
		mimetype:	 'video/quicktime',
		pluginspage: 'http://www.apple.com/quicktime/download/',
		types:		 'aif,aiff,aac,au,bmp,gsm,mov,mid,midi,mpg,mpeg,mp4,m4a,psd,qt,qtif,qif,qti,snd,tif,tiff,wav,3g2,3gp',
		ieAttrs: {
			classid:  'clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B',
			codebase: 'http://www.apple.com/qtactivex/qtplugin.cab'
		}
	},
	realplayer: {
		name:		  'real',
		title:		  'RealPlayer',
		types:		  'ra,ram,rm,rpm,rv,smi,smil',
		mimetype:	  'audio/x-pn-realaudio-plugin',
		pluginspage:  'http://www.real.com/player/',
		autoplayAttr: 'autostart',
		ieAttrs: {
			classid: 'clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA'
		}
	},
	winmedia: {
		name:		  'winmedia',
		title:		  'Windows Media',
		types:		  'asx,asf,avi,wma,wmv',
		mimetype:	  $.browser.mozilla && isFirefoxWMPPluginInstalled() ? 'application/x-ms-wmp' : 'application/x-mplayer2',
		pluginspage:  'http://www.microsoft.com/Windows/MediaPlayer/',
		autoplayAttr: 'autostart',
		oUrl:		  'url',
		ieAttrs: {
			classid:  'clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6',
			type:	  'application/x-oleobject'
		}
	},
	// special cases
	img: {
		name:  'img',
		title: 'Image',
		types: 'gif,png,jpg'
	},
	iframe: {
		name:  'iframe',
		types: 'html,pdf'
	},
	silverlight: {
		name:  'silverlight',
		types: 'xaml'
	}
};

//
//	everything below here is private
//


// detection script for FF WMP plugin (http://www.therossman.org/experiments/wmp_play.html)
// (hat tip to Mark Ross for this script)
function isFirefoxWMPPluginInstalled() {
	var plugs = navigator.plugins;
	for (var i = 0; i < plugs.length; i++) {
		var plugin = plugs[i];
		if (plugin['filename'] == 'np-mswmp.dll')
			return true;
	}
	return false;
}

var counter = 1;

for (var player in $.fn.media.defaults.players) {
	var types = $.fn.media.defaults.players[player].types;
	$.each(types.split(','), function(i,o) {
		if (isDigit(o[0])) o = 'fn' + o;
		$.fn.media[o] = $.fn.media[player] = getGenerator(player);
		$.fn.media[o+'_player'] = $.fn.media.defaults.players[player];
	});
};

function getTypesRegExp() {
	var types = '';
	for (var player in $.fn.media.defaults.players) {
		if (types.length) types += ',';
		types += $.fn.media.defaults.players[player].types;
	};
	return new RegExp('\\.(' + types.replace(/,/ig,'|') + ')\\b');
};

function getGenerator(player) {
	return function(el, options) {
		return generate(el, options, player);
	};
};

function isDigit(c) {
	return '0123456789'.indexOf(c) > -1;
};

// flatten all possible options: global defaults, meta, option obj
function getSettings(el, options) {
	options = options || {};
	var $el = $(el);
	var cls = el.className || '';
	// support metadata plugin (v1.0 and v2.0)
	var meta = $.metadata ? $el.metadata() : $.meta ? $el.data() : {};
	meta = meta || {};
	var w = meta.width  || parseInt(((cls.match(/\bw:(\d+)/)||[])[1]||0)) || parseInt(((cls.match(/\bwidth:(\d+)/)||[])[1]||0));
	var h = meta.height || parseInt(((cls.match(/\bh:(\d+)/)||[])[1]||0)) || parseInt(((cls.match(/\bheight:(\d+)/)||[])[1]||0))

	if (w) meta.width	= w;
	if (h) meta.height = h;
	if (cls) meta.cls = cls;
	
	// crank html5 style data attributes
	var dataName = 'data-';
    for (var i=0; i < el.attributes.length; i++) {
        var a = el.attributes[i], n = $.trim(a.name);
        var index = n.indexOf(dataName);
        if (index === 0) {
        	n = n.substring(dataName.length);
        	meta[n] = a.value;
        }
    }

	var a = $.fn.media.defaults;
	var b = options;
	var c = meta;

	var p = { params: { bgColor: options.bgColor || $.fn.media.defaults.bgColor } };
	var opts = $.extend({}, a, b, c);
	$.each(['attrs','params','flashvars','silverlight'], function(i,o) {
		opts[o] = $.extend({}, p[o] || {}, a[o] || {}, b[o] || {}, c[o] || {});
	});

	if (typeof opts.caption == 'undefined') opts.caption = $el.text();

	// make sure we have a source!
	opts.src = opts.src || $el.attr('href') || $el.attr('src') || 'unknown';
	return opts;
};

//
//	Flash Player
//

// generate flash using SWFObject library if possible
$.fn.media.swf = function(el, opts) {
	if (!window.SWFObject && !window.swfobject) {
		// roll our own
		if (opts.flashvars) {
			var a = [];
			for (var f in opts.flashvars)
				a.push(f + '=' + opts.flashvars[f]);
			if (!opts.params) opts.params = {};
			opts.params.flashvars = a.join('&');
		}
		return generate(el, opts, 'flash');
	}

	var id = el.id ? (' id="'+el.id+'"') : '';
	var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
	var $div = $('<div' + id + cls + '>');

	// swfobject v2+
	if (window.swfobject) {
		$(el).after($div).appendTo($div);
		if (!el.id) el.id = 'movie_player_' + counter++;

		// replace el with swfobject content
		swfobject.embedSWF(opts.src, el.id, opts.width, opts.height, opts.flashVersion,
			opts.expressInstaller, opts.flashvars, opts.params, opts.attrs);
	}
	// swfobject < v2
	else {
		$(el).after($div).remove();
		var so = new SWFObject(opts.src, 'movie_player_' + counter++, opts.width, opts.height, opts.flashVersion, opts.bgColor);
		if (opts.expressInstaller) so.useExpressInstall(opts.expressInstaller);

		for (var p in opts.params)
			if (p != 'bgColor') so.addParam(p, opts.params[p]);
		for (var f in opts.flashvars)
			so.addVariable(f, opts.flashvars[f]);
		so.write($div[0]);
	}

	if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
	return $div;
};

// map flv and mp3 files to the swf player by default
$.fn.media.flv = $.fn.media.mp3 = function(el, opts) {
	var src = opts.src;
	var player = /\.mp3\b/i.test(src) ? $.fn.media.defaults.mp3Player : $.fn.media.defaults.flvPlayer;
	var key = opts.flvKeyName;
	src = encodeURIComponent(src);
	opts.src = player;
	opts.src = opts.src + '?'+key+'=' + (src);
	var srcObj = {};
	srcObj[key] = src;
	opts.flashvars = $.extend({}, srcObj, opts.flashvars );
	return $.fn.media.swf(el, opts);
};

//
//	Silverlight
//
$.fn.media.xaml = function(el, opts) {
	if (!window.Sys || !window.Sys.Silverlight) {
		if ($.fn.media.xaml.warning) return;
		$.fn.media.xaml.warning = 1;
		alert('You must include the Silverlight.js script.');
		return;
	}

	var props = {
		width: opts.width,
		height: opts.height,
		background: opts.bgColor,
		inplaceInstallPrompt: opts.silverlight.inplaceInstallPrompt,
		isWindowless: opts.silverlight.isWindowless,
		framerate: opts.silverlight.framerate,
		version: opts.silverlight.version
	};
	var events = {
		onError: opts.silverlight.onError,
		onLoad: opts.silverlight.onLoad
	};

	var id1 = el.id ? (' id="'+el.id+'"') : '';
	var id2 = opts.id || 'AG' + counter++;
	// convert element to div
	var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
	var $div = $('<div' + id1 + cls + '>');
	$(el).after($div).remove();

	Sys.Silverlight.createObjectEx({
		source: opts.src,
		initParams: opts.silverlight.initParams,
		userContext: opts.silverlight.userContext,
		id: id2,
		parentElement: $div[0],
		properties: props,
		events: events
	});

	if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
	return $div;
};

//
// generate object/embed markup
//
function generate(el, opts, player) {
	var $el = $(el);
	var o = $.fn.media.defaults.players[player];

	if (player == 'iframe') {
		o = $('<iframe' + ' width="' + opts.width + '" height="' + opts.height + '" >');
		o.attr('src', opts.src);
		o.css('backgroundColor', o.bgColor);
	}
	else if (player == 'img') {
		o = $('<img>');
		o.attr('src', opts.src);
		opts.width && o.attr('width', opts.width);
		opts.height && o.attr('height', opts.height);
		o.css('backgroundColor', o.bgColor);
	}
	else if (lameIE) {
		var a = ['<object width="' + opts.width + '" height="' + opts.height + '" '];
		for (var key in opts.attrs)
			a.push(key + '="'+opts.attrs[key]+'" ');
		for (var key in o.ieAttrs || {}) {
			var v = o.ieAttrs[key];
			if (key == 'codebase' && window.location.protocol == 'https:')
				v = v.replace('http','https');
			a.push(key + '="'+v+'" ');
		}
		a.push('></ob'+'ject'+'>');
		var p = ['<param name="' + (o.oUrl || 'src') +'" value="' + opts.src + '">'];
		for (var key in opts.params)
			p.push('<param name="'+ key +'" value="' + opts.params[key] + '">');
		var o = document.createElement(a.join(''));
		for (var i=0; i < p.length; i++)
			o.appendChild(document.createElement(p[i]));
	}
	else if (opts.standards) {
		// Rewritten to be standards compliant by Richard Connamacher
		var a = ['<object type="' + o.mimetype +'" width="' + opts.width + '" height="' + opts.height +'"'];
		if (opts.src) a.push(' data="' + opts.src + '" ');
		if ($.browser.msie) {
			for (var key in o.ieAttrs || {}) {
				var v = o.ieAttrs[key];
				if (key == 'codebase' && window.location.protocol == 'https:')
					v = v.replace('http','https');
				a.push(key + '="'+v+'" ');
			}
		}
		a.push('>');
		a.push('<param name="' + (o.oUrl || 'src') +'" value="' + opts.src + '">');
		for (var key in opts.params) {
			if (key == 'wmode' && player != 'flash') // FF3/Quicktime borks on wmode
				continue;
			a.push('<param name="'+ key +'" value="' + opts.params[key] + '">');
		}
		// Alternate HTML
		a.push('<div><p><strong>'+o.title+' Required</strong></p><p>'+o.title+' is required to view this media. <a href="'+o.pluginspage+'">Download Here</a>.</p></div>');
		a.push('</ob'+'ject'+'>');
	}
	 else {
	        var a = ['<embed width="' + opts.width + '" height="' + opts.height + '" style="display:block"'];
	        if (opts.src) a.push(' src="' + opts.src + '" ');
	        for (var key in opts.attrs)
	            a.push(key + '="'+opts.attrs[key]+'" ');
	        for (var key in o.eAttrs || {})
	            a.push(key + '="'+o.eAttrs[key]+'" ');
	        for (var key in opts.params) {
	            if (key == 'wmode' && player != 'flash') // FF3/Quicktime borks on wmode
	            	continue;
	            a.push(key + '="'+opts.params[key]+'" ');
	        }
	        a.push('></em'+'bed'+'>');
	    }	
	// convert element to div
	var id = el.id ? (' id="'+el.id+'"') : '';
	var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
	var $div = $('<div' + id + cls + '>');
	$el.after($div).remove();
	(lameIE || player == 'iframe' || player == 'img') ? $div.append(o) : $div.html(a.join(''));
	if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
	return $div;
};


})(jQuery);
/*! jQuery UI - v1.11.4 - 2015-04-07
* http://jqueryui.com
* Includes: position.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

(function() {

$.ui = $.ui || {};

var cachedScrollbarWidth, supportsOffsetFractions,
	max = Math.max,
	abs = Math.abs,
	round = Math.round,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[0];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[0];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[0].clientWidth;
		}

		div.remove();

		return (cachedScrollbarWidth = w1 - w2);
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[0].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[0] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: withinElement.offset() || { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),

			// support: jQuery 1.6.x
			// jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
			width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
			height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	dimensions = getDimensions( target );
	if ( target[0].preventDefault ) {
		// force left top to allow flipping
		options.at = "left top";
	}
	targetWidth = dimensions.width;
	targetHeight = dimensions.height;
	targetOffset = dimensions.offset;
	// clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	});

	// normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each(function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		// if the browser doesn't support fractions, then round for consistent results
		if ( !supportsOffsetFractions ) {
			position.left = round( position.left );
			position.top = round( position.top );
		}

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem: elem
				});
			}
		});

		if ( options.using ) {
			// adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	});
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// element is wider than within
			if ( data.collisionWidth > outerWidth ) {
				// element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
					position.left += overLeft - newOverRight;
				// element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;
				// element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}
			// too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;
			// too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;
			// adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// element is taller than within
			if ( data.collisionHeight > outerHeight ) {
				// element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
					position.top += overTop - newOverBottom;
				// element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;
				// element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}
			// too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;
			// too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;
			// adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			} else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
				if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
					position.top += myOffset + atOffset + offset;
				}
			} else if ( overBottom > 0 ) {
				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
				if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

// fraction support test
(function() {
	var testElement, testElementParent, testElementStyle, offsetLeft, i,
		body = document.getElementsByTagName( "body" )[ 0 ],
		div = document.createElement( "div" );

	//Create a "fake body" for testing based on method used in jQuery.support
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		$.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || document.documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	div.style.cssText = "position: absolute; left: 10.7432222px;";

	offsetLeft = $( div ).offset().left;
	supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );
})();

})();

var position = $.ui.position;



}));
/* HTML5 Placeholder jQuery Plugin - v2.1.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-03-11
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass(m.customClass))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass(m.customClass),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().attr({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass(m.customClass),f[0].value=f.attr("placeholder")}else f.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;if(i&&j)g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0;else{var m={};g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};m=a.extend({},e,b);var f=this;return f.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),f},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(m.customClass)?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass(m.customClass)?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+m.customClass,this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a("."+m.customClass).each(function(){this.value=""})})}});
/*!
 * jQuery Mobile Events
 * by Ben Major (www.ben-major.co.uk)
 *
 * Copyright 2011, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
(function ($) {
    $.attrFn = $.attrFn || {};

    // navigator.userAgent.toLowerCase() isn't reliable for Chrome installs
    // on mobile devices. As such, we will create a boolean isChromeDesktop
    // The reason that we need to do this is because Chrome annoyingly
    // purports support for touch events even if the underlying hardware
    // does not!
    var agent = navigator.userAgent.toLowerCase(),
        isChromeDesktop = (agent.indexOf('chrome') > -1 && ((agent.indexOf('windows') > -1) || (agent.indexOf('macintosh') > -1) || (agent.indexOf('linux') > -1)) && agent.indexOf('mobile') < 0 && agent.indexOf('android') < 0),

        settings = {
            tap_pixel_range: 5,
            swipe_h_threshold: 50,
            swipe_v_threshold: 50,
            taphold_threshold: 750,
            doubletap_int: 500,

            touch_capable: ('ontouchstart' in window && !isChromeDesktop),
            orientation_support: ('orientation' in window && 'onorientationchange' in window),

            startevent: ('ontouchstart' in window && !isChromeDesktop) ? 'touchstart' : 'mousedown',
            endevent: ('ontouchstart' in window && !isChromeDesktop) ? 'touchend' : 'mouseup',
            moveevent: ('ontouchstart' in window && !isChromeDesktop) ? 'touchmove' : 'mousemove',
            tapevent: ('ontouchstart' in window && !isChromeDesktop) ? 'tap' : 'click',
            scrollevent: ('ontouchstart' in window && !isChromeDesktop) ? 'touchmove' : 'scroll',

            hold_timer: null,
            tap_timer: null
        };
    
    // Convenience functions:
    $.isTouchCapable = function() { return settings.touch_capable; };
    $.getStartEvent = function() { return settings.startevent; };
    $.getEndEvent = function() { return settings.endevent; };
    $.getMoveEvent = function() { return settings.moveevent; };
    $.getTapEvent = function() { return settings.tapevent; };
    $.getScrollEvent = function() { return settings.scrollevent; };
    
    // Add Event shortcuts:
    $.each(['tapstart', 'tapend', 'tapmove', 'tap', 'tap2', 'tap3', 'tap4', 'singletap', 'doubletap', 'taphold', 'swipe', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'swipeend', 'scrollstart', 'scrollend', 'orientationchange'], function (i, name) {
        $.fn[name] = function (fn) {
            return fn ? this.on(name, fn) : this.trigger(name);
        };

        $.attrFn[name] = true;
    });

    // tapstart Event:
    $.event.special.tapstart = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject);

            $this.on(settings.startevent, function (e) {
                $this.data('callee', arguments.callee);
                if (e.which && e.which !== 1) {
                    return false;
                }

                var origEvent = e.originalEvent,
                    touchData = {
                        'position': {
                            'x': ((settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX),
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                        },
                        'time': Date.now(),
                        'target': e.target
                    };

                triggerCustomEvent(thisObject, 'tapstart', e, touchData);
                return true;
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee);
        }
    };
	
    // tapmove Event:
    $.event.special.tapmove = {
    	setup: function() {
            var thisObject = this,
            $this = $(thisObject);
    			
            $this.on(settings.moveevent, function(e) {
                $this.data('callee', arguments.callee);
    			
                var origEvent = e.originalEvent,
                    touchData = {
                        'position': {
                            'x': ((settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX),
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                        },
                        'time': Date.now(),
                        'target': e.target
                    };
    				
                triggerCustomEvent(thisObject, 'tapmove', e, touchData);
                return true;
            });
        },
        remove: function() {
            $(this).off(settings.moveevent, $(this).data.callee);
        }
    }

    // tapend Event:
    $.event.special.tapend = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject);

            $this.on(settings.endevent, function (e) {
                // Touch event data:
                $this.data('callee', arguments.callee);

                var origEvent = e.originalEvent;
                var touchData = {
                    'position': {
                        'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? origEvent.changedTouches[0].pageX - origEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                        'y': (settings.touch_capable) ? origEvent.changedTouches[0].pageY - origEvent.changedTouches[0].target.offsetTop : e.offsetY
                    },
                    'time': Date.now(),
                    'target': e.target
                };
                triggerCustomEvent(thisObject, 'tapend', e, touchData);
                return true;
            });
        },
        remove: function () {
            $(this).off(settings.endevent, $(this).data.callee);
        }
    };

    // taphold Event:
    $.event.special.taphold = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                origTarget,
                timer,
                start_pos = {
                    x: 0,
                    y: 0
                },
                end_x = 0,
                end_y = 0;

            $this.on(settings.startevent, function (e) {
                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    $this.data('tapheld', false);
                    origTarget = e.target;

                    var origEvent = e.originalEvent;
                    var start_time = Date.now(),
                        startPosition = {
                            'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        startOffset = {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                        };

                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;

                    end_x = start_pos.x;
                    end_y = start_pos.y;

                    settings.hold_timer = window.setTimeout(function () {

                        var diff_x = (start_pos.x - end_x),
                            diff_y = (start_pos.y - end_y);

                        if (e.target == origTarget && ((start_pos.x == end_x && start_pos.y == end_y) || (diff_x >= -(settings.tap_pixel_range) && diff_x <= settings.tap_pixel_range && diff_y >= -(settings.tap_pixel_range) && diff_y <= settings.tap_pixel_range))) {
                            $this.data('tapheld', true);

                            var end_time = Date.now(),
                                endPosition = {
                                    'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                                    'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                                },
                                endOffset = {
                                    'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                                    'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                                };
                            duration = end_time - start_time;

                            // Build the touch data:
                            var touchData = {
                                'startTime': start_time,
                                'endTime': end_time,
                                'startPosition': startPosition,
                                'startOffset': startOffset,
                                'endPosition': endPosition,
                                'endOffset': endOffset,
                                'duration': duration,
                                'target': e.target
                            }
                            $this.data('callee1', arguments.callee);
                            triggerCustomEvent(thisObject, 'taphold', e, touchData);
                        }
                    }, settings.taphold_threshold);

                    return true;
                }
            }).on(settings.endevent, function () {
                $this.data('callee2', arguments.callee);
                $this.data('tapheld', false);
                window.clearTimeout(settings.hold_timer);
            })
            .on(settings.moveevent, function (e) {
                $this.data('callee3', arguments.callee);
				
                end_x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                end_y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2).off(settings.moveevent, $(this).data.callee3);
        }
    };

    // doubletap Event:
    $.event.special.doubletap = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                origTarget,
                action,
                firstTap,
                origEvent,
				cooloff,
				cooling = false;

            $this.on(settings.startevent, function (e) {
                if (e.which && e.which !== 1) {
                    return false;
                }
                $this.data('doubletapped', false);
                origTarget = e.target;
                $this.data('callee1', arguments.callee);

                origEvent = e.originalEvent;
                firstTap = {
                    'position': {
                        'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                    },
                    'time': Date.now(),
                    'target': e.target
                };

                return true;
            }).on(settings.endevent, function (e) {
				
                var now = Date.now();
                var lastTouch = $this.data('lastTouch') || now + 1;
                var delta = now - lastTouch;
                window.clearTimeout(action);
                $this.data('callee2', arguments.callee);

                if (delta < settings.doubletap_int && (e.target == origTarget) && delta > 100) {
                    $this.data('doubletapped', true);
                    window.clearTimeout(settings.tap_timer);

                    // Now get the current event:
                    var lastTap = {
                        'position': {
                            'x': (settings.touch_capable) ? e.originalEvent.changedTouches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? e.originalEvent.changedTouches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? e.originalEvent.changedTouches[0].pageX - e.originalEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? e.originalEvent.changedTouches[0].pageY - e.originalEvent.changedTouches[0].target.offsetTop : e.offsetY
                        },
                        'time': Date.now(),
                        'target': e.target
                    }

                    var touchData = {
                        'firstTap': firstTap,
                        'secondTap': lastTap,
                        'interval': lastTap.time - firstTap.time
                    };

                    if (!cooling) {
                    	triggerCustomEvent(thisObject, 'doubletap', e, touchData);
                    }
                    
                    cooling = true;
                    
                    cooloff = window.setTimeout(function (e) {
                    	cooling = false;
                    }, settings.doubletap_int);
					
                } else {
                    $this.data('lastTouch', now);
                    action = window.setTimeout(function (e) {
                        window.clearTimeout(action);
                    }, settings.doubletap_int, [e]);
                }
                $this.data('lastTouch', now);
            });
        },
        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };

    // singletap Event:
    // This is used in conjuction with doubletap when both events are needed on the same element
    $.event.special.singletap = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                origTarget = null,
                startTime = null,
                start_pos = {
                    x: 0,
                    y: 0
                };

            $this.on(settings.startevent, function (e) {
                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    startTime = Date.now();
                    origTarget = e.target;
                    $this.data('callee1', arguments.callee);

                    // Get the start x and y position:
                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                    return true;
                }
            }).on(settings.endevent, function (e) {
                $this.data('callee2', arguments.callee);
                if (e.target == origTarget) {
                    // Get the end point:
                    end_pos_x = (e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0].pageX : e.pageX;
                    end_pos_y = (e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                    
                    // We need to check if it was a taphold:

                    settings.tap_timer = window.setTimeout(function () {
                        if (!$this.data('doubletapped') && !$this.data('tapheld') && (start_pos.x == end_pos_x) && (start_pos.y == end_pos_y)) {
                            var origEvent = e.originalEvent;
                            var touchData = {
                                'position': {
                                    'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                                    'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY
                                },
                                'offset': {
                                    'x': (settings.touch_capable) ? origEvent.changedTouches[0].pageX - origEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                                    'y': (settings.touch_capable) ? origEvent.changedTouches[0].pageY - origEvent.changedTouches[0].target.offsetTop : e.offsetY
                                },
                                'time': Date.now(),
                                'target': e.target
                            };
                            
                            // Was it a taphold?
                            if((touchData.time - startTime) < settings.taphold_threshold)
                            {
                                triggerCustomEvent(thisObject, 'singletap', e, touchData);
                            }
                        }
                    }, settings.doubletap_int);
                }
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };

    // tap Event:
    $.event.special.tap = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                started = false,
                origTarget = null,
                start_time,
                start_pos = {
                    x: 0,
                    y: 0
                },
                touches;

            $this.on(settings.startevent, function (e) {
                $this.data('callee1', arguments.callee);

                if (e.which && e.which !== 1) {
                    return false;
                } else {
                    started = true;
                    start_pos.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                    start_pos.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                    start_time = Date.now();
                    origTarget = e.target;
					
                    touches = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches : [ e ];
                    return true;
                }
            }).on(settings.endevent, function (e) {
                $this.data('callee2', arguments.callee);

                // Only trigger if they've started, and the target matches:
                var end_x = (e.originalEvent.targetTouches) ? e.originalEvent.changedTouches[0].pageX : e.pageX,
                    end_y = (e.originalEvent.targetTouches) ? e.originalEvent.changedTouches[0].pageY : e.pageY,
                    diff_x = (start_pos.x - end_x),
                    diff_y = (start_pos.y - end_y),
                    eventName;
					
                if (origTarget == e.target && started && ((Date.now() - start_time) < settings.taphold_threshold) && ((start_pos.x == end_x && start_pos.y == end_y) || (diff_x >= -(settings.tap_pixel_range) && diff_x <= settings.tap_pixel_range && diff_y >= -(settings.tap_pixel_range) && diff_y <= settings.tap_pixel_range))) {
                    var origEvent = e.originalEvent;
                    var touchData = [ ];
					
                    for( var i = 0; i < touches.length; i++)
                    {
                        var touch = {
                            'position': {
                                'x': (settings.touch_capable) ? origEvent.changedTouches[i].screenX : e.screenX,
                                'y': (settings.touch_capable) ? origEvent.changedTouches[i].screenY : e.screenY
                            },
                            'offset': {
                                'x': (settings.touch_capable) ? origEvent.changedTouches[i].pageX - origEvent.changedTouches[i].target.offsetLeft : e.offsetX,
                                'y': (settings.touch_capable) ? origEvent.changedTouches[i].pageY - origEvent.changedTouches[i].target.offsetTop : e.offsetY
                            },
                            'time': Date.now(),
                            'target': e.target
                        };
                    	
                        touchData.push( touch );
                    }
                    
                    switch( touches.length )
                    {
                        case 1:
                            eventName = 'tap';
                            break;
                    	
                        case 2:
                            eventName = 'tap2';
                            break;
                    	
                        case 3:
                            eventName = 'tap3';
                            break;
                    	
                        case 4:
                            eventName = 'tap4';
                            break;
                    }
					
                    triggerCustomEvent(thisObject, eventName, e, touchData);
                }
            });
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.endevent, $(this).data.callee2);
        }
    };

    // swipe Event (also handles swipeup, swiperight, swipedown and swipeleft):
    $.event.special.swipe = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                started = false,
                hasSwiped = false,
                originalCoord = {
                    x: 0,
                    y: 0
                },
                finalCoord = {
                    x: 0,
                    y: 0
                },
                startEvnt;

            // Screen touched, store the original coordinate

            function touchStart(e) {
                $this = $(e.target);
                $this.data('callee1', arguments.callee);
                originalCoord.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                originalCoord.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                finalCoord.x = originalCoord.x;
                finalCoord.y = originalCoord.y;
                started = true;
                var origEvent = e.originalEvent;
                // Read event data into our startEvt:
                startEvnt = {
                    'position': {
                        'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                    },
                    'offset': {
                        'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                        'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                    },
                    'time': Date.now(),
                    'target': e.target
                };
            }

            // Store coordinates as finger is swiping

            function touchMove(e) {
                $this = $(e.target);
                $this.data('callee2', arguments.callee);
                finalCoord.x = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageX : e.pageX;
                finalCoord.y = (e.originalEvent.targetTouches) ? e.originalEvent.targetTouches[0].pageY : e.pageY;

                var swipedir;

                // We need to check if the element to which the event was bound contains a data-xthreshold | data-vthreshold:
                var ele_x_threshold = $this.data('xthreshold'),
                    ele_y_threshold = $this.data('ythreshold'),
                    h_threshold = (typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && parseInt(ele_x_threshold)) ? parseInt(ele_x_threshold) : settings.swipe_h_threshold,
                    v_threshold = (typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && parseInt(ele_y_threshold)) ? parseInt(ele_y_threshold) : settings.swipe_v_threshold;

                if (originalCoord.y > finalCoord.y && (originalCoord.y - finalCoord.y > v_threshold)) {
                    swipedir = 'swipeup';
                }
                if (originalCoord.x < finalCoord.x && (finalCoord.x - originalCoord.x > h_threshold)) {
                    swipedir = 'swiperight';
                }
                if (originalCoord.y < finalCoord.y && (finalCoord.y - originalCoord.y > v_threshold)) {
                    swipedir = 'swipedown';
                }
                if (originalCoord.x > finalCoord.x && (originalCoord.x - finalCoord.x > h_threshold)) {
                    swipedir = 'swipeleft';
                }
                if (swipedir != undefined && started) {
                    originalCoord.x = 0;
                    originalCoord.y = 0;
                    finalCoord.x = 0;
                    finalCoord.y = 0;
                    started = false;

                    // Read event data into our endEvnt:
                    var origEvent = e.originalEvent;
                    endEvnt = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.touches[0].pageX - origEvent.touches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.touches[0].pageY - origEvent.touches[0].target.offsetTop : e.offsetY
                        },
                        'time': Date.now(),
                        'target': e.target
                    };

                    // Calculate the swipe amount (normalized):
                    var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x),
                        yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);

                    var touchData = {
                        'startEvnt': startEvnt,
                        'endEvnt': endEvnt,
                        'direction': swipedir.replace('swipe', ''),
                        'xAmount': xAmount,
                        'yAmount': yAmount,
                        'duration': endEvnt.time - startEvnt.time
                    }
                    hasSwiped = true;
                    $this.trigger('swipe', touchData).trigger(swipedir, touchData);
                }
            }

            function touchEnd(e) {
                $this = $(e.target);
                var swipedir = "";
                $this.data('callee3', arguments.callee);
                if (hasSwiped) {
                    // We need to check if the element to which the event was bound contains a data-xthreshold | data-vthreshold:
                    var ele_x_threshold = $this.data('xthreshold'),
                        ele_y_threshold = $this.data('ythreshold'),
                        h_threshold = (typeof ele_x_threshold !== 'undefined' && ele_x_threshold !== false && parseInt(ele_x_threshold)) ? parseInt(ele_x_threshold) : settings.swipe_h_threshold,
                        v_threshold = (typeof ele_y_threshold !== 'undefined' && ele_y_threshold !== false && parseInt(ele_y_threshold)) ? parseInt(ele_y_threshold) : settings.swipe_v_threshold;

                    var origEvent = e.originalEvent;
                    endEvnt = {
                        'position': {
                            'x': (settings.touch_capable) ? origEvent.changedTouches[0].screenX : e.screenX,
                            'y': (settings.touch_capable) ? origEvent.changedTouches[0].screenY : e.screenY
                        },
                        'offset': {
                            'x': (settings.touch_capable) ? origEvent.changedTouches[0].pageX - origEvent.changedTouches[0].target.offsetLeft : e.offsetX,
                            'y': (settings.touch_capable) ? origEvent.changedTouches[0].pageY - origEvent.changedTouches[0].target.offsetTop : e.offsetY
                        },
                        'time': Date.now(),
                        'target': e.target
                    };

                    // Read event data into our endEvnt:
                    if (startEvnt.position.y > endEvnt.position.y && (startEvnt.position.y - endEvnt.position.y > v_threshold)) {
                        swipedir = 'swipeup';
                    }
                    if (startEvnt.position.x < endEvnt.position.x && (endEvnt.position.x - startEvnt.position.x > h_threshold)) {
                        swipedir = 'swiperight';
                    }
                    if (startEvnt.position.y < endEvnt.position.y && (endEvnt.position.y - startEvnt.position.y > v_threshold)) {
                        swipedir = 'swipedown';
                    }
                    if (startEvnt.position.x > endEvnt.position.x && (startEvnt.position.x - endEvnt.position.x > h_threshold)) {
                        swipedir = 'swipeleft';
                    }

                    // Calculate the swipe amount (normalized):
                    var xAmount = Math.abs(startEvnt.position.x - endEvnt.position.x),
                        yAmount = Math.abs(startEvnt.position.y - endEvnt.position.y);

                    var touchData = {
                        'startEvnt': startEvnt,
                        'endEvnt': endEvnt,
                        'direction': swipedir.replace('swipe', ''),
                        'xAmount': xAmount,
                        'yAmount': yAmount,
                        'duration': endEvnt.time - startEvnt.time
                    }
                    $this.trigger('swipeend', touchData);
                }

                started = false;
                hasSwiped = false;
            }

            $this.on(settings.startevent, touchStart);
            $this.on(settings.moveevent, touchMove);
            $this.on(settings.endevent, touchEnd);
        },

        remove: function () {
            $(this).off(settings.startevent, $(this).data.callee1).off(settings.moveevent, $(this).data.callee2).off(settings.endevent, $(this).data.callee3);
        }
    };

    // scrollstart Event (also handles scrollend):
    $.event.special.scrollstart = {
        setup: function () {
            var thisObject = this,
                $this = $(thisObject),
                scrolling,
                timer;

            function trigger(event, state) {
                scrolling = state;
                triggerCustomEvent(thisObject, scrolling ? 'scrollstart' : 'scrollend', event);
            }

            // iPhone triggers scroll after a small delay; use touchmove instead
            $this.on(settings.scrollevent, function (event) {
                $this.data('callee', arguments.callee);

                if (!scrolling) {
                    trigger(event, true);
                }

                clearTimeout(timer);
                timer = setTimeout(function () {
                    trigger(event, false);
                }, 50);
            });
        },

        remove: function () {
            $(this).off(settings.scrollevent, $(this).data.callee);
        }
    };

    // This is the orientation change (largely borrowed from jQuery Mobile):
    var win = $(window),
        special_event,
        get_orientation,
        last_orientation,
        initial_orientation_is_landscape,
        initial_orientation_is_default,
        portrait_map = {
            '0': true,
            '180': true
        };

    if (settings.orientation_support) {
        var ww = window.innerWidth || win.width(),
            wh = window.innerHeight || win.height(),
            landscape_threshold = 50;

        initial_orientation_is_landscape = ww > wh && (ww - wh) > landscape_threshold;
        initial_orientation_is_default = portrait_map[window.orientation];

        if ((initial_orientation_is_landscape && initial_orientation_is_default) || (!initial_orientation_is_landscape && !initial_orientation_is_default)) {
            portrait_map = {
                '-90': true,
                '90': true
            };
        }
    }

    $.event.special.orientationchange = special_event = {
        setup: function () {
            // If the event is supported natively, return false so that jQuery
            // will on to the event using DOM methods.
            if (settings.orientation_support) {
                return false;
            }

            // Get the current orientation to avoid initial double-triggering.
            last_orientation = get_orientation();

            win.on('throttledresize', handler);
            return true;
        },
        teardown: function () {
            if (settings.orientation_support) {
                return false;
            }

            win.off('throttledresize', handler);
            return true;
        },
        add: function (handleObj) {
            // Save a reference to the bound event handler.
            var old_handler = handleObj.handler;

            handleObj.handler = function (event) {
                event.orientation = get_orientation();
                return old_handler.apply(this, arguments);
            };
        }
    };

    // If the event is not supported natively, this handler will be bound to
    // the window resize event to simulate the orientationchange event.

    function handler() {
        // Get the current orientation.
        var orientation = get_orientation();

        if (orientation !== last_orientation) {
            // The orientation has changed, so trigger the orientationchange event.
            last_orientation = orientation;
            win.trigger("orientationchange");
        }
    }

    $.event.special.orientationchange.orientation = get_orientation = function () {
        var isPortrait = true,
            elem = document.documentElement;

        if (settings.orientation_support) {
            isPortrait = portrait_map[window.orientation];
        } else {
            isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
        }

        return isPortrait ? 'portrait' : 'landscape';
    };

    // throttle Handler:
    $.event.special.throttledresize = {
        setup: function () {
            $(this).on('resize', throttle_handler);
        },
        teardown: function () {
            $(this).off('resize', throttle_handler);
        }
    };

    var throttle = 250,
        throttle_handler = function () {
            curr = Date.now();
            diff = curr - lastCall;

            if (diff >= throttle) {
                lastCall = curr;
                $(this).trigger('throttledresize');

            } else {
                if (heldCall) {
                    window.clearTimeout(heldCall);
                }

                // Promise a held call will still execute
                heldCall = window.setTimeout(handler, throttle - diff);
            }
        },
        lastCall = 0,
        heldCall,
        curr,
        diff;

    // Trigger a custom event:

    function triggerCustomEvent(obj, eventType, event, touchData) {
        var originalType = event.type;
        event.type = eventType;

        $.event.dispatch.call(obj, event, touchData);
        event.type = originalType;
    }

    // Correctly on anything we've overloaded:
    $.each({
        scrollend: 'scrollstart',
        swipeup: 'swipe',
        swiperight: 'swipe',
        swipedown: 'swipe',
        swipeleft: 'swipe',
        swipeend: 'swipe',
		tap2: 'tap'
    }, function (e, srcE, touchData) {
        $.event.special[e] = {
            setup: function () {
                $(this).on(srcE, $.noop);
            }
        };
    });

})(jQuery);
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.4
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);


var COOKIE_NAME = 'polycom_newsites';
var NEWCOOKIE_NAME = 'polycom_newsites_3';
var USURL = "www.polycom.com";
 var countryArray = new Array();
     
     countryArray['us_en'] = 'http://www.polycom.com/en.html?ss=false';
     countryArray['cala_es'] ='http://latinamerica.polycom.com/index.html';
     countryArray['ar_es'] = 'http://latinamerica.polycom.com/index.html';
     countryArray['au_en'] ='http://www.polycom.com.au';
     countryArray['br_pt'] ='http://www.polycom.com.br/index.html';
     countryArray['cala_en'] ='http://cala.polycom.com/index.html';
    
    
    countryArray['cl_es'] ='http://www.polycom.cl/index.html';
    
    countryArray['mx_es'] ='http://www.polycom.com.mx/index.html';
    countryArray['pe_es'] ='http://www.polycom.com.pe/index.html';
    countryArray['apac_en'] ='http://www.polycom.asia';

    countryArray['cn_zh'] ='http://www.polycom.com.cn/index.html';
    countryArray['in_en'] ='http://www.polycom.co.in';
    countryArray['jp_ja'] ='http://www.polycom.co.jp/';

    countryArray['dk_da'] ='http://www.polycom.dk/index.html';
    countryArray['de_de'] ='http://www.polycom.de/index.html';
    countryArray['emea_en'] ='http://www.polycom.co.uk';
    countryArray['fr_fr'] ='http://www.polycom.fr/index.html';
    countryArray['es_es'] ='http://www.polycom.es/index.html';

    countryArray['it_it'] ='http://www.polycom.co.it/index.html';
    countryArray['kr_kr'] ='http://www.polycom.co.kr/index.html'; 
    countryArray['pl_pl'] ='http://www.polycom.pl/index.html';
    countryArray['pt_pt'] ='http://www.polycom.pt/index.html';
    countryArray['ro_ro'] ='http://www.polycom.com.ro/index.html';

    
    countryArray['se_sv'] ='http://sweden.polycom.com/index.html';
    countryArray['uk_en'] ='http://www.polycom.co.uk/index.html';
    countryArray['ru_ru'] ='http://www.polycom.com.ru/index.html';
    countryArray['no_no'] ='http://www.polycom.no/index.html';
    countryArray['nl_nl'] ='http://www.polycomnederland.nl/index.html';
    countryArray['can_en'] = 'http://www.polycom.ca/ca_en/index.html';
    countryArray['ca_fr'] = 'http://www.polycom.ca/ca_fr/index.html';
    countryArray['cz_ce'] = 'http://czech.polycom.com/index.html';
    
    

    
    function RedirectUser(p_SelectedLocation)
    {
    
    var RedirectURL = countryArray[p_SelectedLocation];
    
    
    if(findQueryString('setcookie') == 'y')   //set the cookie if querystring says setCookie
        setCookie(p_SelectedLocation);
    if(RedirectURL != '')
        window.location = RedirectURL;
    else
        //window.location = 'http://www.polycom.com/index.html?showme=y';
        window.location = 'http://www.polycom.com/index.html?ss=false';
        }


    function setCookie(p_selectedLocation)
    {
        
        $.cookie(NEWCOOKIE_NAME, null);  //delete cookie
        $.cookie(NEWCOOKIE_NAME, p_selectedLocation , { path: '/', expires: 365 });
    }


        // To get query string 
    function findQueryString( name )
    {
      name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
      var regexS = "[\\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( window.location.href );
      if( results == null )
        return "";
      else
        return results[1];
    }

    function findQueryforRedirect( name )
    {
     
      name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
      var regexS = "[\\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( window.location.href );
    
      if( results == null )
        return "";
      else
        {
            
            var RedirectURL = countryArray[results[1]];
            
            if(findQueryString('remember_me') == 'on')   //set the cookie if querystring says setCookie
                setCookie(results[1]);
            if(RedirectURL != '')
                top.location.href = RedirectURL;
            else
                top.location.href = 'http://www.polycom.com/index.html?showme=y';
        }
        
    }
/**
 * core polycom js file
 * @krachamalla
 */

//catch all errors

function catchAllErrors(){
    return true;
}

window.onerror = catchAllErrors;

//Omniture Tracking code re-entered

var chatvars = [], hash;
    var q = document.URL.split('?')[1];
    if(q != undefined){
        q = q.split('&');
        for(var i = 0; i < q.length; i++){
            hash = q[i].split('=');
            chatvars.push(hash[1]);
            chatvars[hash[0]] = hash[1];
        }
}

function trackOmnitureLink(applicationName, linkEvent) {
    var accountName;
    if(window.location.hostname == 'www.polycom.ca') {
        if((window.location.pathname).indexOf('/ca_fr/') != -1) { 
            accountName = 'polycomwww.polycom.ca.fr,polycomglobal.public2,polycomglobal.onlinemarketing';
        } else {
            accountName = 'polycomwww.polycom.ca,polycomglobal.public2,polycomglobal.onlinemarketing';
        }
    } else {
        accountName = 'polycom' + window.location.hostname + ',polycomglobal.public2,polycomglobal.onlinemarketing';
    }
    
    var s=s_gi(accountName);
    s.linkTrackVars='eVar9,eVar10,events'; 
    s.linkTrackEvents='event10'; 
    s.eVar9=linkEvent;
    s.eVar10=applicationName;
    s.events='event10';
    s.tl(s,'o','appEvent'); 
}
function getCookie(c){var a=document.cookie;var d=a.indexOf(" "+c+"=");
if(d==-1){d=a.indexOf(c+"=")}if(d==-1){a=null}else{d=a.indexOf("=",d)+1;
var b=a.indexOf(";",d);if(b==-1){b=a.length}a=unescape(a.substring(d,b))
}return a}if(!getCookie("s_tagEnv")){var tagHost=document.location.hostname.toLowerCase();
var tagEnvMap={dev:["ppndev.polycom.com","ppndev", "ppnqa", "ppnqa.polycom.com","psassac7v1.polycom.com","pswssac4v1.polycom.com","pswssac5v1.polycom.com","pswssac6v1.polycom.com","pswssac6v2.polycom.com"],stage:[]};
for(var tagEnv in tagEnvMap){if(tagEnvMap.hasOwnProperty(tagEnv)){for(var i=0;
i<tagEnvMap[tagEnv].length;i++){if(tagHost.indexOf(tagEnvMap[tagEnv][i])>=0){document.cookie="s_tagEnv="+tagEnv+";%20path=/"
}}}}};

//live person link tracking
function track_clicktochat(mboxname,lpbuttonid,buttonstate)
{
    pageurl = window.location.pathname;
    var s=s_gi(s_account);   
s.linkTrackVars='prop46,eVar46,events'; 
s.linkTrackEvents='event26'; 
s.prop46=lpbuttonid;
s.eVar46=lpbuttonid; 
s.events='event26'; 
s.tl(this,'o','Live Chat Start Clicks');
    if(window.location.hostname == 'www.polycom.com') {
        mboxTrack(mboxname, 'lpchatbuttonId='+lpbuttonid+'&buttonstate='+buttonstate+'&pageurl='+pageurl);
    }           
    
}
//hero carousel
(function($) {
    $(function () {
        // Used to output caught errors
        function errorLog(error, message) {
            try {
                if ($.cq.isAuthor() || window.location.hash == '#debug') {
                    if (typeof console != 'undefined' && typeof console.log  != 'undefined') {
                        console.log(error);
                        console.log(message);
                    }
                    alert(error.name+':\n'+error.message+'.\n'+message+'.');
                }
            } catch (e) { }
        }

        try {
            // Opacity fading conflicts in IE8 with the PNG fix and text anti-aliasing
            var fadingSpeed = $.browser.msie ? 0 : 250;

            // Removes the URL hash if it corresponds to the id of an element in the given context
            function removeHash(context) {
                try {
                    if (window.location.hash.length > 0 && $(window.location.hash, context).length > 0) {
                        window.location = (window.location+'').replace(window.location.hash, '');
                    }
                } catch (e) {
                    errorLog(e, 'Could not remove hash');
                }
            }

            // carousel code
            try {
                $(".hero-slider").each(function () {
					if(!fadingSpeed){
                        $(this).find(".scrollTable").css("opacity","1");
                    }
                    var carousel = $(this);
                    var playDelay = +$("var[title='play-delay']", this).text();
                    if (!playDelay) {
                        playDelay = 7000;
                    }
                    var slidingSpeed = +$("var[title='transition-time']", this).text();
                    if (!slidingSpeed) {
                        slidingSpeed = 1150;
                    }
                    var banners = $('.hero-container', this);
                    //do not why, but
                    // var links = $('.cq-carousel-banner-switch a', this);
                    //returns more links than expected after component reload. Changed to "find" = works......
                    var switcher = $('#slidingbuttons', this);
                    var links = switcher.find('.herobtn');
                    var items = $('.scrollTable', this);
                    var width = items.outerWidth();
                    var itemActive = items.filter(':first');
                    var itemPrevious = null;
                    var interval = null;
                    var i = 0;
					var m = 0;
					
					/** touch events **/
					var startX, startY, $this = $(this), isTouched = false, swipeD = '';
      
                    $this.bind('touchstart', touchstart);
      
                    function touchstart(event) { 
                        var touches = event.originalEvent.touches;
                        if (touches && touches.length) {
                          startX = touches[0].pageX;
                          startY = touches[0].pageY;
                          $this.bind('touchmove', touchmove);
                        }
                        //event.preventDefault();
                    }
      
                    function touchmove(event) {
                        var touches = event.originalEvent.touches;
                        if (touches && touches.length) {
                          var deltaX = startX - touches[0].pageX;
                          var deltaY = startY - touches[0].pageY;
          
                          if (deltaX >= 50) {
                            $this.trigger("swipeLeft");
                          }
                          if (deltaX <= -50) {
                            $this.trigger("swipeRight");
                          }
                          if (deltaY >= 50) {
                            //$this.trigger("swipeUp");
                          }
                          if (deltaY <= -50) {
                            //$this.trigger("swipeDown");
                          }
                          if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
                            $this.unbind('touchmove', touchmove);
                          }
                       }
                       //event.preventDefault();
                    }
                  $(this).on("swipeLeft", function(){        
                      if(i == links.length -1){
                          i = 0;
                      }else{
                          i = i + 1;
                      }
                      isTouched = true;swipeD="left"
                      $(links[(i)%links.length]).click();
                      isTouched = false;swipeD="";
                  });
                  $(this).on("swipeRight",function(){ 
                      if(i == 0){
                          i = links.length - 1;
                      }else{
                          i = i - 1;
                      }
                      isTouched = true;swipeD = "right";
                      $(links[(i)%links.length]).click();
                      isTouched = false;swipeD="";
                  });
                    
                    function play() {
                        stop();
                        if( playDelay > 0) {
                            interval = setInterval(function () {
                                $(links[(i+1)%links.length]).click();
                            }, playDelay);
                        }
                    }
                    function stop() {
                        if (interval !== null) {
                            clearInterval(interval);
                            interval = null;
                        }
                    }

                    // Show first item (needed for browsers that don't support CSS3 selector :first-of-type)
                    if (fadingSpeed || $.browser.version > 6) {
                        itemActive.css('left', 0);
                    } else {
                        itemActive.show();
                    }

                    links.click(function (e) {
                            var link = $(this);
                            var itemNew = items.filter(link.attr('href'));
                            var j = itemNew.prevAll().length;
                            var direction = (j > i || interval !== null) ? 1 : -1;
							m = i;
							if(swipeD) swipeD == "left" ? direction = 1 : direction = -1;

                            if (!link.is('.cq-carousel-active')) {
                                links.removeClass('cq-carousel-active');
                                link.addClass('cq-carousel-active');

                                if (itemActive.is(':animated')) {
                                    itemActive.stop(true, true);
                                    itemPrevious.stop(true, true);
                                }

                                if (fadingSpeed) {
                                    itemNew.css({'left': direction*width,'visibility':'visible'}).animate({'left': 0, 'opacity': 1}, slidingSpeed);
                                    itemActive.css({'visibility':'visible'}).animate({'left': -direction*width, 'opacity': 0}, slidingSpeed, function(){itemPrevious.css({'visibility':'hidden'});});
                                } else if ($.browser.version > 6) {
                                    itemNew.css({'left': direction*width,'visibility':'visible'}).animate({'left': 0}, slidingSpeed);
                                    itemActive.css({'visibility':'visible'}).animate({'left': -direction*width}, slidingSpeed, function(){itemPrevious.css({'visibility':'hidden'});});
                                } else {
                                    itemNew.fadeIn();
                                    itemActive.fadeOut();
                                }

                                itemPrevious = itemActive;
                                itemActive = itemNew;
                                i = j;                                
                                
                                //btns
                                var a_id = itemActive.attr("id");
                                var btn_num = a_id.slice(5);
                                $(".herobtn img.on").css("display","none");
                                $(".herobtn img.off").css("display","inline-block");
                                var btn_id = "#hbtn_"+btn_num;
                                $(btn_id).find("img.on").css("display","inline-block");
                                $(btn_id).find("img.off").css("display","none");
								
								if(e.hasOwnProperty('originalEvent')){
									i = m;
									play();
								}
                            }
                            return false;
                        })
                        .filter(':first').addClass('cq-carousel-active');

                    play();
                    
                    // Accessing the page with the anchor of a banner in the URL can break the layout
                    removeHash(this);
                });
            } catch (e) {
                errorLog(e, 'Could not initialize the banners');
            }
        } catch (e) {
            errorLog(e, 'Init failed');
        }
    });
})($);

//Hero slider
var step = 0;
var mouseclick_check = "false";
var NO_OF_HEROS = 0;
var t_slider = null, t_counter = null;

function slideit() {    
    for ( var j = 0; j < NO_OF_HEROS ; j++) {
        var button = "#hbtn_" + j + " .on";
        var disable = "#hbtn_" + j + " .off";
        $(button).hide();
        $(disable).show();
    }
    for ( var i = 0; i < NO_OF_HEROS ; i++) {
        if (step == i) {
            var divId = "#slide" + (i);
            $(divId).show();
            var button = "#hbtn_" + i + " .on";
            var disable = "#hbtn_" + i + " .off";
            $(button).show();
            $(disable).hide();
        } else {
            var divId = "#slide" + (i);
            $(divId).hide();
        }
    }
    if (step == ( NO_OF_HEROS - 1)) {
        step = -1;
    }    
    step++;
    t_slider = setTimeout("slideit()", 5000);    
}

//hero counter
function startCounter(enddate){
    var end_date = enddate;
    var e = new Date(end_date);
    var date = new Date(); 
    var localtime = new Date().getTime();
    var timeoffset = date.getTimezoneOffset() * 60000;
    var basetime = localtime + timeoffset;
    var curtime = basetime + (3600000*-7);
    curtime = new Date(curtime).getTime(); 
    var oneday = (24*60*60*1000);
    var remtime = (e.getTime() - curtime);
    if(remtime < 0) return;
    var remdays = Math.floor(remtime/oneday);
    var remms = (remtime%oneday);
    var remmin=0,remsec=0;  
    remhours = Math.floor(remms/(60*60*1000));
    remms = remms%(60*60*1000);
    remmin = Math.floor(remms/(60*1000));
    remms = remms%(60*1000);
    remsec = Math.floor(remms/1000);
    var x = remdays;
    if(remdays > 7) return;
    var iImg = $("#days-left-img");
    var iImgSrc = iImg.attr("src");
    
    if(iImgSrc && iImgSrc.search("countdown-number-"+x) == -1){
        iImg.attr("src","/etc/polycom/www/global/images/counter/countdown-number-"+x+".jpg");
    }
    
    remhours = remhours < 10 ? "0"+remhours : remhours;
    remmin = remmin < 10 ? "0"+remmin : remmin;
    remsec = remsec < 10 ? "0"+remsec : remsec;
    var tlEl = document.getElementById("time-left");
    if(tlEl){
        tlEl.innerHTML = (remhours)+"<span>HRS</span>"+remmin+"<span>MINS</span>"+remsec+"<span>SECS</span>";
    }    
    
    t_counter= setTimeout(function(){startCounter(enddate)},500);
}

//News Ticker

var startNewsTicker = function(){
    var rows= $(".polycom-news-holder > div").size();
    var x= 0;
    var t = null;
    var resumeAnim = function(){
        t = window.setInterval(function() {                  
            $("#id"+x).fadeOut('slow', function() {  
                x=(x+1)%rows;                                       
                $("#id"+x).fadeIn();                      
            });                  
        }, 5000);
    };
    $(".polycom-news-holder a").hover(
            function(){
                window.clearInterval(t);
            },
            function(){
                resumeAnim();
            }
   );
   $("#id"+x).show();
   resumeAnim();
}

//print functionality
$(function(){
    if($("#PrintLink").length != 0){
        $("#PrintLink").popupwindow();
    }
    $("body").printPage();
});

//search functionality
var Search = {
    prompt : "Search", // default value - should get real value from markup
    init : function() {
        if(document.getElementById('searchInput')) {
            this.prompt = $('#searchInput').focus(this.focus).blur(this.blur).val();
        } else if(document.getElementById('qt')) {
            this.prompt = $('#qt').focus(this.focus).blur(this.blur).val();
        }
    },
    focus : function() {
        if(this.value == Search.prompt) {
            this.value = '';
        }
    },
    blur : function() {
        if(this.value.length == 0) {
            this.value = Search.prompt;
        }
    }
};

//product finder
function openProductfinderhref(url)
{
    var popupH = 800;
    var popupW = 950;
    if((url.indexOf("/product_finder/wireless/index.html") > -1))
    {
        popupH =525;
        popupW = 675;
    }
    window.open(url,'SelectProduct','height='+popupH+',width='+popupW+',menubar=0, toolbar = 0, resizable=1,location=1,scrollbars=1');
    return false;
}



$(document).ready(function(){
    
    //open external links and assets in new window
	if(location.host != "gsearch.polycom.com"){
		$('a[href*="://"], form[action*="://"], a[href*="/content/dam"]').not($('a[href*="://'+location.host+'"], form[action*="://search.polycom.com"], .lithium a')).attr('target','_blank');
	}    
    
    /*=====TOP NAV: style tab when hovering on its links menu=====*/
    $("ul.second-level-ul").hover(
        function () {
            $(this).prev().addClass("tabHovered");
        },
        function () {
            $(this).prev().removeClass("tabHovered");
        }
    );  
    /*============================================================*/
       // main hero slider banner clicks
    $('#hero_container').find('a[trkid].hero-intro-link').click(function(){
       try{trackAnalyticsEvent('hero:clickthrough',$(this));}catch(ex){}
    });

    // main hero slider scrolling button clicks
    $('div.hero-slider div#hero_container.hero-container div#slidingbuttons > div.herobtn').bind('click',function(){
        try{
			if ($(this).is(':hover')){
				trackAnalyticsEvent('hero:nav_button',$(this));
			}
		}catch(ex){}
    });

    //feature carousel arrow left/right button clicks
    $('div#homepage-carousel div.carousel-nav > a').bind('click', function(){
        if (!$(this).hasClass('disabled')){
            var label = ($(this).hasClass('prev')?'scroll_left_arrow':'scroll_right_arrow');
            try{trackAnalyticsEvent('feature_spot:'+label,$(this));}catch(ex){}
        }
    });
	
	
	// new ominture for  new homepage end ----------------------------
	
	
    //init search
    Search.init();
    
    //hero slider
    if($.browser.msie && $.browser.version < 8){
        $(".hero-intro-text-container").each(function(){
            var color = $(this).find(".head-title").css("color");
            $(this).find(".head-title p").css("color",color);
            $(this).find(".intro p").css("color",color);
        });
    }    
    
	if(window.location.href.search("/content/dam/polycom/www/home") != -1){
    NO_OF_HEROS = +$("var[title='no-of-heros']", ".hero-container").text();
    if(NO_OF_HEROS > 1){
        $('.herobtn img').click(function() {
            if(t_slider){
                clearTimeout(t_slider);
            }
            var current_id = $(this).parent().attr("id").split("_");
            var divid = "#slide" + current_id[1];
            var button = "#hbtn_" + current_id[1] + " .on";
            var disable = "#hbtn_" + current_id[1] + " .off";
            for ( var j = 0; j< NO_OF_HEROS ; j++) {
                var remaining = "#slide" + (j);
                var button1 = "#hbtn_" + j + " .on";
                var disable1 = "#hbtn_" + j + " .off";
                $(button1).hide();
                $(disable1).show();
                $(remaining).hide();
            }
            $(divid).show();
            $(button).show();
            $(disable).hide();
            t_slider = setTimeout("slideit()",5000);
        });           
        slideit();        
    }    
    }
	
    //hero counter & tracking
    var enddate = $("var[title='hero-counter-date']", ".hero-container").text();
    if(enddate){
        startCounter(enddate);
    }
    $("#hero_container a[tid='herolnk']").click(function(e){
        e.preventDefault();
        var a_id = $(this).attr("id"), a_target = $(this).attr("target"), a_href = $(this).attr("href"), a_trkid = $(this).attr("trkid");
        
          
        if(a_target == "_blank"){
            window.open(a_href);
        }else{
            window.location = a_href;
        }
        
    }); 


    //Spotlight Tracking
    $(".spotlight-wrapper a").click(function(e){
        e.preventDefault();
        var a_id = $(this).attr("id"), a_target = $(this).attr("target"), a_href = $(this).attr("href"), a_trkid = $(this).attr("trkid");
        
          
        if(a_target == "_blank"){
            window.open(a_href,"_blank");
        }else{
            window.location = a_href;
        }
        return false;
    }); 
    
    // header conatct us and site selector popups
    //Add hover styles for language list
    var prevHList = null, prevSList = null;
    $('.language-list').bind('mouseover', function(event) {
        var $listObj = $(event.target);     
        while(!$listObj.hasClass("language-list")){         
            if($listObj[0].tagName.toLowerCase() == "li"){              
                if(prevHList && prevHList[0] === $listObj[0]) return;               
                if(!($listObj.hasClass("selected"))){
                    $listObj.toggleClass("highlight");
                }
                prevHList = $listObj;
                break;
            }else{
                $listObj = $listObj.parent();
            }
        }               
    }).bind('mouseout', function(event) {
        var $listObj = $(event.target);
        if(prevHList){
            if(!prevHList.hasClass("selected")){
                    prevHList.toggleClass("highlight");
            }
            prevHList = null;
            return;
        }       
    }).bind('click', function(event) {
        var $listObj = $(event.target);     
        while(!$listObj.hasClass("language-list")){
            if($listObj[0].tagName.toLowerCase() == "li"){              
                if(prevSList && prevSList[0] === $listObj[0]) return;               
                $('.language-list li').removeClass("selected");
                $listObj.removeClass("highlight");
                $listObj.addClass("selected");
                var lng = $listObj.attr("lcode");
                $("#locationSelector").val(lng);
                prevSList = $listObj;
                break;
            }else{
                $listObj = $listObj.parent();
            }
        }               
    });
     
    

     $('.language #changeRegion').click( function() {
        var $$ = $('#LanguageChange');
        if ($$.is(':visible')){
            $$.hide(); // Let second click on link close interface
            $(this).toggleClass("selected");
        }           
        else{
            $(this).toggleClass("selected");
            //var tpos = $("#top-nav").position().left;         
            var languageLnk = $(".language #changeRegion"), languagePos = languageLnk.position();    
            //$('#LanguageChange').css({'top':languagePos.top + languageLnk.height(),'left':languagePos.left - $('#LanguageChange').width() + tpos});
            $('#LanguageChange').css({'top':languagePos.top + languageLnk.height(),'left':(languagePos.left - ($('#LanguageChange').width() * 0.6))});
            $$.show();
            $("#scrollbar").tinyscrollbar({"size" : "175"});
        }
     });
     $('#LanguageChange a.close').click( function() { $('#LanguageChange').hide(); $('#changeRegion').toggleClass("selected");} );

     /* Display JS alert when the 'Go' button is clicked in the language box and no language has been selected. */
     $('#LanguageChange input.languageSubmit').click( function() {
         var v = $("#locationSelector").val(), formObj = document.getElementById("Change");
         if(v == ""){
            alert("Please select a language.");
            return false;
         }
         else{           
             if($("#remember_me").attr("checked")){                 
                 formObj.action = "http://www.polycom.com/content/dam/polycom/www/includes/plantCookie.html?select="+ v +"&remember_me=on";                 
             }
             else{
                  formObj.action = v;
                  formObj.method = "post";                 
             }
         }
         formObj.submit();
         return false;
     });
        
    
     var contactUsTimer; 
     var mouse_enter = false;
        
    $('#Toolbar #contactUs').bind('mouseenter', function(event) {
        clearTimeout ( contactUsTimer );
        mouse_enter = false;
        //var tpos = $("#top-nav").position().left;     
        var contactUsLnk = $("#contactUs"), contactUsPos = contactUsLnk.position();
        //$('#homepageContactOptionsBox').css({'top':contactUsPos.top  + contactUsLnk.height(),'left':(contactUsPos.left - $('#homepageContactOptionsBox').width()) - 25 + tpos});
        $('#homepageContactOptionsBox').css({'top':contactUsPos.top  + contactUsLnk.height(),'left':(contactUsPos.left - ($('#homepageContactOptionsBox').width() * 0.66))});
        $('#homepageContactOptionsBox').fadeIn('fast');
        //ntptEventTag('contactUsBox=activated'); //unica
        //trackOmnitureLink('contactUsBox', window.location.pathname); //omniture - send through which page activiated it.
    });

    $('#Toolbar #contactUs').bind('mouseleave', function(event) {
         contactUsTimer = setTimeout(function(){
             if(mouse_enter != true)
             $('#homepageContactOptionsBox').fadeOut('fast');  } , 200); //wait 300ms before init
    });
    
    $('#homepageContactOptionsBox #homepageContactOptionsBoxClose').bind('click', function(event) {
        $('#homepageContactOptionsBox').fadeOut('fast');
    });

    $('#homepageContactOptionsBox').bind('mouseenter', function(event) {
            mouse_enter = true;
    });

    $('#homepageContactOptionsBox').bind('mouseleave', function(event) {
        mouse_enter = false;
        $('#homepageContactOptionsBox').fadeOut('fast');
    });
    
    //start newsticker
    if($(".polycom-news-holder").length){
        startNewsTicker();
    }   
    
    if($("#product-carousel").length){     
        $('#product-carousel').jcarousel({scroll:5});
        var prevProdItem = 1;
        $("ul#product-carousel li").on("click",function(e){
            var item = $(this).attr("item");
            if(!item || item == prevProdItem) return;
            var lImg = $("#pl_"+item);
            var lPrevImg = $("#pl_"+prevProdItem);
            var prevProdObj = $('ul#product-carousel li[item="'+prevProdItem+'"]');
            if(lImg.length != 0){
                if(lPrevImg) {
                    lPrevImg.hide();                
                    (prevProdObj.find('div.pointer')).hide();
                }
                $(this).addClass("sel-prod");
                prevProdObj.removeClass("sel-prod");
                lImg.show();            
                prevProdItem = item;
                ($(this).find('div.pointer')).show();               
            }
        });
    }
    
    //Tabs behavior
    if($(".ds-tabs").length){
        var designMode = $("var[title='design-mode']", ".ds-tabs").text();
        var editMode = $("var[title='edit-mode']", ".ds-tabs").text();
        
        var hsh, hshtab = "";        
        if($(".ds-tabs .tabnum").val()){
            hsh = window.location.hash;
            if(hsh){
                if(hsh.indexOf("_") != -1){
                    hshtab = hsh.substring(2,hsh.indexOf("_"));
                }else{
                    hshtab = hsh.substring(2);
                }                      
                if(hshtab){
                    $(".ds-tabs .tabnum").val(hshtab);
                }
            }            
        }
        var activeTab = $(".ds-tabs .tabnum").val() || $(".ds-tabs .btabnum").val();
        if(!($('#'+activeTab).length)){
            activeTab = "tab1";
        }
        
        var contenttab = '.content'+activeTab;
        
        if(editMode || designMode){
            $('.tab-content').css({"position":"absolute","left":"-10000em","top":"-10000em"}); 
            $(contenttab).css("position","static");
        }else{
            $('.tab-content').hide();
            $(contenttab).show();
        }
        
        $('.'+activeTab).addClass('active'); 
            
        $('ul#tabnav li').click(function(e){        
            //e.preventDefault();
            $(".ds-tabs .tabnum").val("");
            var currentTab = '.content' + $(this).find(".tab-a").attr('id');
               
            $('ul#tabnav li').removeClass('active');
            
            if(editMode || designMode){                    
                $('.tab-content').css({"position":"absolute","left":"-10000em","top":"-10000em"}); 
                $(currentTab).css("position","static");
            }else{
                $('.tab-content').hide(); 
                $(currentTab).show();
            }
            $(this).addClass('active');
            $(".ds-tabs .btabnum").val($(this).find(".tab-a").attr("id"));
            window.location.hash = "#s"+$(this).find(".tab-a").attr('id');
            var s = s_gi("polycomdev,polycompolycomcq.uat");
            s.trackExternalLinks=false;
            s.linkTrackVars='eVar20,events';
            s.linkTrackEvents=s.events='event1';
            s.eVar20 = $(this).find(".btn-tab-mdl").text();
            s.tl(this, 'o', 'Tab Click');
            return;
         });
         //hash changes
         $(window).bind("hashchange", function(e){
            if($(".ds-tabs").length){            
                var hsh = window.location.hash;
                if(hsh){
                    if(hsh.indexOf("_") != -1){
                        hsh = hsh.substring(2,hsh.indexOf("_"));
                    }else{
                        hsh = hsh.substring(2);
                    }               
                }else{
                    hsh = "tab1";
                }
                if(!$("#"+hsh).length) return;
                if($("."+hsh).hasClass("active")) return;
                $(".ds-tabs .tabnum").val("");
                var currentTab = '.content' + hsh;
               
                $('ul#tabnav li').removeClass('active');
            
                if(editMode || designMode){                    
                    $('.tab-content').css({"position":"absolute","left":"-10000em","top":"-10000em"}); 
                    $(currentTab).css("position","static");
                }else{
                    $('.tab-content').hide(); 
                    $(currentTab).show();
                }
                $("."+hsh).addClass('active');
                $(".ds-tabs .btabnum").val(hsh);
            }
        });
    }    
    
    //accordion-childlist
    if($(".accordion-childlist").length){
        $(".product-list-container").each(function(){
            var ppd = $(document.createElement("div"));
            ppd.attr("class","product-scrollbar");
            var pd = $(document.createElement("div"));
            pd.attr("class","viewport");
            var d = $(document.createElement("div"));
            d.html($(this).find(".overview").html());
            d.attr("class","overview");
            d.attr("id","test-overview");
            ppd.append(pd);
            pd.append(d);
            $('body').append(ppd);            
            var ht = $("#test-overview").height();
            ppd.remove();
            if(ht < 230){                                
                var minht = ht > 150 ? "250px" : "175px";
                $(this).find(".viewport").css({"height":"auto","min-height":minht});
                var bg = ht > 150 ? "url(/etc/polycom/www/global/images/child-prod-list-bg-250.png) no-repeat" : "url(/etc/polycom/www/global/images/child-prod-list-bg-175.png) no-repeat";
                $(this).css({"background":bg,"height":"auto"});
                $(this).find(".product-scrollbar").addClass("no-scrollbar");
            }
        });
        
        $(".accordion-childlist .onclick-area").toggle(
            function (){                
                var hideProdText = $($("var[title='hideproducts-text']", ".accordion-childlist")[0]).text();
                var prodnum = $(this).attr("prodnum");
                var plc = $(this).parent().parent().parent().find(".product-list-container");
                plc.css("display","block");
                $(this).addClass('clicked-button-bg');
                $(this).find('.childlist-button-text').html(hideProdText).addClass('button-clicked');             
                $(this).find('.eye-img-normal').attr("src", "/etc/polycom/www/global/images/eye-pressed.png");
                var scrollbar = plc.find(".product-scrollbar");
                if(!scrollbar.hasClass("no-scrollbar")){
                    scrollbar.tinyscrollbar({ size: 303 });
                }                
            },
            function (){
                var showProdText = $($("var[title='showproducts-text']", ".accordion-childlist")[0]).text();
                var prodNum =  $(this).attr('prodnum');
                var plc = $(this).parent().parent().parent().find(".product-list-container");
                plc.css("display","none");
                $(this).removeClass('clicked-button-bg');
                $(this).find('.childlist-button-text').html(showProdText).removeClass('button-clicked');              
                $(this).find('.eye-img-normal').attr("src", "/etc/polycom/www/global/images/eye-normal.png");
            }
        );
    }
    
    //Youtube iframe widget init
    $('.youtube .rss-feed-module').each(function () {
        var count = isNaN($(this).data('count')) ? 1 : parseInt($(this).data('count'));
        if ($(this).data('feed')) {
            $(this).find('.feed').getRssFeed({
                url: $(this).data('feed'),
                type: $(this).data('type'),
                method: $(this).data('method'),
                media: {
                   width:$(this).data('width'),
                   height:$(this).data('height')
                },
                num: count
            });
        }
     });
	 
	 $('div.env-icon-holder').hover(
        function(){
            $(this).find('img.env-icon').addClass('increase');
            $(this).find('img.env-icon-shadow').attr('src','/etc/polycom/www/global/images/shadow-hvr.png');
            $(this).find('span.env-icon-title').addClass('color-hvr');
        },
        function(){
            $(this).find('img.env-icon').removeClass('increase');
            $(this).find('img.env-icon-shadow').attr('src','/etc/polycom/www/global/images/shadow-normal.png');
            $(this).find('span.env-icon-title').removeClass('color-hvr');
    });
    
});
/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);
$(document).ready(function(){ 
/*_______Questions and Answers__ Accordian */

    var cur_stus;
        $('.accordionWrapper dd').hide();
        $('.accordionWrapper dt').attr('stus', '');

        var headings = $('.accordionWrapper dt');
       
        
        headings.click(function () {
            cur_stus = $(this).attr('stus');
            var $this = $(this);

            if (cur_stus != "active") {
            
                   $('.accordionWrapper dd').slideUp(600);
                   $('.accordionWrapper dt').attr('stus', '');
                
                //opens the clicked data and closes remain data
                
                $this.next().slideDown(600);
                $this.attr('stus', 'active');
                headings.attr("class","").addClass("close");
                $this.addClass("open");
                
                
            }
            //Remove else part if do not want to close the current opened data
            else {
            headings.attr("class","").addClass("close");
            
                $this.attr("class", "").addClass("close");
                $this.next().slideUp();
                $this.attr('stus', '');
             }
            return false;
        })
        
});
/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
(function($) {
    $(function () {
        // Used to output caught errors
        function errorLog(error, message) {
            try {
                if ($.cq.isAuthor() || window.location.hash == '#debug') {
                    if (typeof console != 'undefined' && typeof console.log  != 'undefined') {
                        console.log(error);
                        console.log(message);
                    }
                    alert(error.name+':\n'+error.message+'.\n'+message+'.');
                }
            } catch (e) { }
        }

        try {
            // Opacity fading conflicts in IE8 with the PNG fix and text anti-aliasing
            var fadingSpeed = $.browser.msie && $.browser.version < 9 ? 0 : 250;

            // Removes the URL hash if it corresponds to the id of an element in the given context
            function removeHash(context) {
                try {
                    if (window.location.hash.length > 0 && $(window.location.hash, context).length > 0) {
                        window.location = (window.location+'').replace(window.location.hash, '');
                    }
                } catch (e) {
                    errorLog(e, 'Could not remove hash');
                }
            }

            // carousel code
            try {
                $('.cq-carousel').each(function () {
                    var carousel = $(this);
                    var playDelay = +$("var[title='play-delay']", this).text();
                    if (!playDelay) {
                        playDelay = 6000;
                    }
                    var slidingSpeed = +$("var[title='transition-time']", this).text();
                    if (!slidingSpeed) {
                        slidingSpeed = 1000;
                    }
                    var banners = $('.cq-carousel-banners', this);
                    //do not why, but
                    // var links = $('.cq-carousel-banner-switch a', this);
                    //returns more links than expected after component reload. Changed to "find" = works......
                    var switcher = $('.cq-carousel-banner-switch', this);
                    var links = switcher.find('a');
                    var items = $('.cq-carousel-banner-item', this);
                    var width = items.outerWidth();
                    var itemActive = items.filter(':first');
                    var itemPrevious = null;
                    var interval = null;
                    var i = 0;

                    var ctlPrev = $('a.cq-carousel-control-prev', this);
                    ctlPrev.show();
                    
                    ctlPrev.click(function() {
                        if (ctlPrev.is('.cq-carousel-active')) {
                            $(links[(i+links.length-1)%links.length]).click();
                        }
                        return false;
                    });
                    var ctlNext = $('a.cq-carousel-control-next', this);
                    ctlNext.show();
                    ctlNext.click(function() {
                        if (ctlNext.is('.cq-carousel-active')) {
                            $(links[(i+1)%links.length]).click();
                        }
                        return false;
                    });
                    if (links.length > 1) {
                        ctlNext.addClass('cq-carousel-active');
                    }
                    function play() {
                        stop();
                        if( playDelay > 0) {
                            interval = setInterval(function () {
                                $(links[(i+1)%links.length]).click();
                            }, playDelay);
                        }
                    }
                    function stop() {
                        if (interval !== null) {
                            clearInterval(interval);
                            interval = null;
                        }
                    }

                    // Show first item (needed for browsers that don't support CSS3 selector :first-of-type)
                    if (fadingSpeed || $.browser.version > 6) {
                        itemActive.css('left', 0);
                    } else {
                        itemActive.show();
                    }

                    links
                        .click(function () {
                            var link = $(this);
                            var itemNew = items.filter(link.attr('href'));
                            var j = itemNew.prevAll().length;
                            var direction = (j > i || interval !== null) ? 1 : -1;

                            if (!link.is('.cq-carousel-active')) {
                                links.removeClass('cq-carousel-active');
                                link.addClass('cq-carousel-active');

                                if (itemActive.is(':animated')) {
                                    itemActive.stop(true, true);
                                    itemPrevious.stop(true, true);
                                }

                                if (fadingSpeed) {
                                    itemNew.css({'left': direction*width}).animate({'left': 0, 'opacity': 1}, slidingSpeed);
                                    itemActive.animate({'left': -direction*width, 'opacity': 0}, slidingSpeed);
                                } else if ($.browser.version > 6) {
                                    itemNew.css({'left': direction*width}).animate({'left': 0}, slidingSpeed);
                                    itemActive.animate({'left': -direction*width}, slidingSpeed);
                                } else {
                                    itemNew.fadeIn();
                                    itemActive.fadeOut();
                                }

                                itemPrevious = itemActive;
                                itemActive = itemNew;
                                i = j;
                                if (i > 0) {
                                    ctlPrev.addClass('cq-carousel-active');
                                } else {
                                    ctlPrev.removeClass('cq-carousel-active');
                                }
                                if (i < links.length-1) {
                                    ctlNext.addClass('cq-carousel-active');
                                } else {
                                    ctlNext.removeClass('cq-carousel-active');
                                }
                            }

                            return false;
                        })
                        .each(function () {
                            var link = $(this);

                            link.attr('title', link.text());
                        })
                        .filter(':first').addClass('cq-carousel-active');

                    //play();
                    /*carousel.hover(
                            function() {
                                stop();
                                ctlPrev.fadeIn();
                                ctlNext.fadeIn();
                            },
                            function() {
                                play();
                                ctlPrev.fadeOut();
                                ctlNext.fadeOut();
                            }
                    );*/
                    
                    //limit paragraph text to 160 chars
                    $('.cq-carousel-banner-item p span').each(function () {
                    	var title = $(this).text(), limit = 120;
                    	if (title.length > limit) {
                    		var tempTitle = title.substring(0, limit - 3); //-3 to account for '...'
                    		var tempIndex = tempTitle.length;
                    		if(tempTitle.charAt(tempIndex) == ' ') {
                    			$(this).text(tempTitle + '...');
                    		} else {
                    			tempIndex--;
                    			while(tempTitle.charAt(tempIndex) != ' ' && tempIndex != 0) {
                    				tempIndex--;
                    			}
                    			$(this).text(title.substring(0, tempIndex == 0 ? (limit/2 - 3) : tempIndex) + '...');
                    		}
                    	} else {}
                    });
                    

                    // Accessing the page with the anchor of a banner in the URL can break the layout
                    removeHash(this);
                });
            } catch (e) {
                errorLog(e, 'Could not initialize the banners');
            }
        } catch (e) {
            errorLog(e, 'Init failed');
        }
    });
})($);
/**
 * Polycom video js
 * 
 */
$(document).ready(function() {
    $(document).bind('afterClose.facebox', function() {
        $("#facebox .content object").remove();
        $("#facebox .content video").remove();
        $("#facebox .content .bc-cnt").remove();     
    });
    
    try{
        if(Polycom_Video && Polycom_Video.url) {
            play524BrandVideo(Polycom_Video.url,Polycom_Video.title,Polycom_Video.subject,Polycom_Video.emailbody,Polycom_Video.emaillink,Polycom_Video.videoId,Polycom_Video.downloadLink,Polycom_Video.width,Polycom_Video.height,Polycom_Video.iosUrl,'',Polycom_Video.duration,Polycom_Video.tagLine,Polycom_Video.bID,Polycom_Video.bpId,Polycom_Video.bpKey);
        }
    }
    catch(ex){}
    
    
    $('a[rel *= facebox]').click(function(e){
            e.preventDefault();            
            var vurl = $(this).attr('href');
            var vtitle = $(this).attr('title');
            if(!vurl || vurl.search("/content/dam") == -1) return;
            var compurl = "/content/www/global/videoproppage/jcr:content/textimagepar/videoprop.html?vurl="+vurl;
            var anch = $(this);
        
            $.ajax(
                {
                url:compurl,
                success:function(data){
                    if(data && data.video && data.video.url){
                        var videoObj = data.video;
                        play524BrandVideo(videoObj.url,videoObj.title,videoObj.subject,videoObj.emailbody,videoObj.emaillink,videoObj.videoId,videoObj.downloadLink,videoObj.width,videoObj.height,videoObj.iosUrl,'',videoObj.duration,videoObj.tagLine,videoObj.bID,videoObj.bpId,videoObj.bpKey);
                    }else{
                        play524BrandVideo(vurl, vtitle);
                    }                                  
                },
                error:function(){
                    play524BrandVideo(vurl, vtitle);
                }
            });
            
    });
    
    $("a[href *= '/content/dam/polycom/common/videos']").click(function(e){
        e.preventDefault();
        var vurl = $(this).attr('href');
        var vtitle = $(this).attr('title');
        playOnDemandBrightcove(vurl, vtitle);
    });

}); //end document.ready

function play524BrandVideo(url,title,subject,emailbody,emaillink,videoId,downloadLink,width,height,iosLink,trkid,videoDuration,tagLine,bID,playerId,playerKey) {     
    $.facebox.settings.closeImage = "/etc/polycom/www/global/images/closelabel.png";
    $.facebox.settings.loadingImage = "/etc/polycom/www/global/images/loading.gif";
    var headhtml = "", embedhtml="", emailhtml = "", downloadlinkhtml = "", ioshtml = "";
    width = width || 800;
    width = $(window).width() <= 768 ? $(window).width() - 20 : width;
    height = height || 450;
    title = (!title || title == "null") ? "" : title;
    downloadLink = (!downloadLink || downloadLink == "null") ? "" : downloadLink;
    subject = (!subject || subject == "null") ? "" : subject;
    emailbody = (!emailbody || emailbody == "null") ? "" : emailbody;
    emaillink = (!emaillink || emaillink == "null") ? "" : emaillink;
    videoId = (!videoId || videoId == "null") ? "" : videoId;
    iosLink = (!iosLink || iosLink == "null") ? "" : iosLink;
    videoDuration = (!videoDuration || videoDuration == "null") ? "" : parseInt(videoDuration);
    tagLine = (!tagLine || tagLine == "null") ? "" : tagLine;
    playerId = (!playerId || playerId == "null") ? "2165782624001" : playerId;
    playerKey = (!playerKey || playerKey == "null") ? "AQ~~,AAAB-EKwxDE~,eUqC9XUeBpgOVq7njdcf-el7SjDooRl_" : playerKey;
    var downloadFlag = downloadLink ? "true" : "false";

    //header thml
    if(emaillink){
        emailhtml = '<td style="padding-right:10px;"><a href="mailto:%20&amp;subject='+subject+'&amp;body='+emailbody+'%0A%0AWatch the video: '+emaillink+'%3FplayVideo='+videoId+'"><img border="0" id="sharelink" name="sharelink" alt="Share" src="/etc/polycom/www/global/images/sharelink.jpg"></a></td>'; 
    }
    if(downloadLink){
        downloadlinkhtml = '<td style="padding-right:10px;"><div id="downloadnow"><a href="'+downloadLink+'"><img border="0" id="downloadnowimg" name="downloadnowimg" alt="Download Now" src="/etc/polycom/www/global/images/downloadnow.gif"></a></div></td>';
    }
    if(iosLink){
        ioshtml = '<td style="padding-right:10px;"><a href="'+iosLink+'" target="_blank"><img border="0" alt="Apple iOS Users View Here" src="/etc/polycom/www/global/images/apple_ios.gif"</a></td>';
    }
    headhtml = '<div class="facebox-header" style="width:'+width+'px"><div class="title" style="font-weight: bold; font-size:12px;">'+title+'</div>'+
                    '<div class="c-content" style="padding:5px 10px;float:right">'+
                    '<table cellspacing="0" cellpadding="5" border="0"><tbody><tr>'+emailhtml+downloadlinkhtml+ioshtml+
                    '</tr></tbody></table></div></div>';
                    
    if(bID && bID != "null"){        
        var uniqid = "v_bc";       
        embedhtml = '<div class="bc-cnt" style="overflow-x: hidden;overflow-y: hidden;text-align: center;width:'+width+'px;">'+
                    '<div id="'+uniqid+'"></div>'+
                    '<script type="text/javascript" src="/etc/polycom/www/global/js/thirdparty/BrightcoveExperiences.js"></script>'+
                    '<script type="text/javascript">'+
                    'customBCL.createVideo("'+width+'","'+height+'","'+playerId+'","'+playerKey+'","'+bID+'","'+uniqid+'");</script>'+
                    '</div>';
        jQuery.facebox(headhtml + embedhtml);       
        return;
    }
    
    if(!url || url == "null"){
        embedhtml = '<div style="text-align:center;width:'+width+'px;height:'+height+'px"><div style="padding-top:25%">This video is not available now</div></div>';
        jQuery.facebox(embedhtml);
        return;
    }
    
    var swfurl = (location.protocol)+"//"+location.host+"/etc/clientlibs/foundation/video/swf/StrobeMediaPlayback.swf";
    
    //embed the player
    if(url.search(".wmv") != -1){
        embedhtml= '<object id="MediaPlayer" width="'+width+'" height="'+height+'" classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" standby="Loading Windows Media Player components..." type="application/x-oleobject" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#version=5,1,52,701" title="'+title+'" name="MediaPlayer"><param name="filename" value="'+url+'"><param name="animationatstart" value="true"><param name="transparentatstart" value="true"><param name="ShowControls" value="true"><param name="ShowStatusBar" value="false"><param name="autostart" value="true"><param name="windowlessvideo" value="true"><param name="loop" value="false"><embed type="application/x-mplayer2" src="'+url+'" name="MediaPlayer" id="MediaPlayer" width="'+width+'" height="'+height+'" showcontrols="0" showstatusbar="0" showdisplay="0" autostart="1" displaysize="4" autosize="-1" bgcolor="darkblue" showtracker="-1" videoborder3d="-1" designtimesp="5311" loop="false" title="'+title+'"></embed></object>';        
    }
    else{  
        if(url.search("http://") == -1)
            url = (location.protocol)+"//"+location.host+url;
        if(url.search(".flv") != -1 || (url.search(".mp4") != -1 && $.browser.mozilla)){       
            if($.browser.msie){
               embedhtml = '<object width="'+(parseInt(width)+20)+'" height="'+(parseInt(height)+50)+'" type="application/x-shockwave-flash" id="flvvideo-cnt" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="visibility: visible;"><param name="menu" value="false"><param name="wmode" value="transparent"><param value="path='+url+'&amp;title='+title+'&amp;downloadflag='+downloadFlag+'&amp;downloadlink='+downloadLink+'&amp;fduration='+videoDuration+'&amp;vidwidth='+width+'&amp;vidheight='+height+'&amp;tagline='+tagLine+'&amp;learn=&amp;learntarget=" name="flashvars"><param name="movie" value="/etc/polycom/www/global/js/polycom/video_container_505_315.swf"></object>';
               //embedhtml = '<object classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="/etc/clientlibs/foundation/video/swf/StrobeMediaPlayback.swf" width="'+width+'" height="'+height+'" id="flvvideo-cnt" style="visibility: visible; "><param name="movie" value="/etc/clientlibs/foundation/video/swf/StrobeMediaPlayback.swf" /><param name="flashvars" value="src='+url+'&amp;width='+width+'&amp;height='+height+'&amp;autoPlay=true&amp;loop=1"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"></object>';
            }else{
                //embedhtml = '<object type="application/x-shockwave-flash" data="'+swfurl+'" width="'+width+'" height="'+height+'" id="flvvideo-cnt" style="visibility: visible; "><param name="flashvars" value="src='+url+'&amp;autoPlay=true"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"></object>';
                embedhtml = '<object width="'+(parseInt(width)+20)+'" height="'+(parseInt(height)+50)+'" type="application/x-shockwave-flash" data="/etc/polycom/www/global/js/polycom/video_container_505_315.swf" id="flvvideo-cnt" style="visibility: visible;"><param name="menu" value="false"><param name="wmode" value="transparent"><param value="path='+url+'&amp;title='+title+'&amp;downloadflag='+downloadFlag+'&amp;downloadlink='+downloadLink+'&amp;fduration='+videoDuration+'&amp;vidwidth='+width+'&amp;vidheight='+height+'&amp;tagline='+tagLine+'&amp;learn=&amp;learntarget=" name="flashvars"></object>';
            }            
        }        
        else if(url.search("(.mp4|.webm|.ogg)") != -1){        
            embedhtml = '<video width="'+width+'" height="'+height+'" controls="controls" autoplay="true"><source src="'+url+'" type="video/mp4" /><source src="'+url+'" type="video/webm" /><source src="'+url+'" type="video/ogg" /><object type="application/x-shockwave-flash" data="/etc/clientlibs/foundation/swfobject/swf/expressInstall.swf" width="'+width+'" height="'+height+'" id="flvvideo-cnt" style="visibility: visible; "><param name="movie" value="/etc/clientlibs/foundation/video/swf/StrobeMediaPlayback.swf" /><param name="flashvars" value="src='+url+'&amp;width='+width+'&amp;height='+height+'&amp;autoPlay=true&amp;loop=1"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"></object></video>';            
        }else{
            embedhtml = '<iframe id="'+title+'" width="'+width+'" height="'+height+'" src="'+url+'&amp;enablejsapi=1" frameborder="0" allowfullscreen></iframe>';
        }
    }    
    
    jQuery.facebox(headhtml+embedhtml);
    if(trkid){
        trackOmnitureLink('hero', trkid);
    }
}


var playBrightcoveLightbox = function(videoId, width, height, title, playerId, playerKey){
    
    $.facebox.settings.closeImage = "/etc/polycom/www/global/images/closelabel.png";
    $.facebox.settings.loadingImage = "/etc/polycom/www/global/images/loading.gif";
    var width = width || 800, height = height || 450, title = (!title || title == "null") ? "" : title;
    width = $(window).width() <= 768 ? $(window).width() - 20 : width;
    var headhtml = '<div class="facebox-header" style="width:'+width+'px;padding-bottom:10px;"><div class="title" style="font-weight: bold; font-size:12px;">'+title+'</div></div>';
                    
    if(videoId && videoId != "null"){        
        var uniqid = "v_bc";       
        var embedhtml = '<div class="bc-cnt" style="overflow-x: hidden;overflow-y: hidden;text-align: center;width:'+width+'px;">'+
                    '<div id="'+uniqid+'"></div>'+
                    '<script type="text/javascript" src="/etc/polycom/www/global/js/thirdparty/BrightcoveExperiences.js"></script>'+
                    '<script type="text/javascript">'+
                    'customBCL.createVideo("'+width+'","'+height+'","'+playerId+'","'+playerKey+'","'+videoId+'","'+uniqid+'");</script>'+
                    '</div>'; 
        jQuery.facebox(headhtml + embedhtml);       
    }
};

var playOnDemandBrightcove = function(vurl, vtitle){
    var compurl = "/content/www/global/videoproppage/jcr:content/textimagepar/videoprop.html?vurl="+vurl;
    $.ajax({
        url:compurl,
        success:function(data){
            if(data && data.video && data.video.url){
                var videoObj = data.video;
                if(videoObj.bID){
                    playBrightcoveLightbox(videoObj.bID, videoObj.width, videoObj.height, videoObj.title, videoObj.bpId, videoObj.bpKey);                    
                }else{
                    play524BrandVideo(videoObj.url,videoObj.title,videoObj.subject,videoObj.emailbody,videoObj.emaillink,videoObj.videoId,videoObj.downloadLink,videoObj.width,videoObj.height,videoObj.iosUrl,'',videoObj.duration,videoObj.tagLine,videoObj.bID,videoObj.bpId,videoObj.bpKey);
                }
            }else{
                play524BrandVideo(vurl, vtitle);
            }                                  
        },
        error:function(){
            play524BrandVideo(vurl, vtitle);
        }
   });
};
(function ($) {

        // extend jquery with get rss feed function
        $.fn.getRssFeed = function (options) {
            var defaults = {
                'url': '',
                'type': 'youtube',
                'method': 'link',
                'num': 0,
                'media': {
                    'width': 230,
                    'height': 155
                }
            };
            var options = $.extend(defaults, options);
            var num = parseInt(options.num);
            var url = options.type == 'youtube' ? options.url + '?alt=json-in-script&format=5&callback=?' : options.url;
            var obj = '';
            return this.each(function () {
                obj = $(this);
                $.getJSON(url, function (data) {   
                    var entries = data.entry || data.feed.entry;                                       
                    var count;
                    var results = '';
                    
                    if(!(entries instanceof Array)){                                                
                        if (options.type == 'youtube') {
                            var player = entries.media$group.media$player[0].url;
                            var hero = '';
                            var title = entries.title.$t;
                            if (options.method == 'link') {
                                var img = entries.media$group.media$thumbnail[0];
                                hero = '<a id="'+title+'" href="' + player + '"><img src="' + img.url + '" width="' + options.media.width + '" /></a>';
                            }
                            if (options.method == 'embed') {
                                var vid_id = player.match(/[\\?\\&]v=([^\\?\\&]+)/);
                                hero = '<iframe id="'+title+'" width="' + options.media.width + '" height="' + options.media.height + '" src="http://www.youtube.com/embed/' + vid_id[1] + '?enablejsapi=1" frameborder="0" allowfullscreen></iframe>';
                            }
                            //var title = entries.title.$t;
                            var views = entries.yt$statistics.viewCount;
                            var date = formatFeedDate(entries.published.$t);
                            results += '<li><div class="hero">' + hero + '</div><div class="title"><a href="' + player + '">' + title + '</a></div><div class="meta group"><span class="date">' + date + '</span><span class="views">Views: ' + views + '</span></div></li>';
                        }
                    }
                    else{
                        count = entries.length < num ? entries.length : num;
                        entries = data.feed.entry;
                        for (var i = 0; i < count; i++) {
                            if (options.type == 'youtube') {
                                var player = entries[i].media$group.media$player[0].url;
                                var hero = '';
                                var title = entries[i].title.$t;
                                if (options.method == 'link') {
                                    var img = entries[i].media$group.media$thumbnail[0];
                                    hero = '<a id="'+title+'" href="' + player + '"><img src="' + img.url + '" width="' + options.media.width + '" /></a>';
                                }
                                if (options.method == 'embed') {
                                    var vid_id = player.match(/[\\?\\&]v=([^\\?\\&]+)/);
                                    hero = '<iframe id="'+title+'" width="' + options.media.width + '" height="' + options.media.height + '" src="http://www.youtube.com/embed/' + vid_id[1] + '?enablejsapi=1" frameborder="0" allowfullscreen></iframe>';
                                }
                                //var title = entries[i].title.$t;
                                var views = entries[i].yt$statistics.viewCount;
                                var date = formatFeedDate(entries[i].published.$t);
                                results += '<li><div class="hero">' + hero + '</div><div class="title"><a href="' + player + '">' + title + '</a></div><div class="meta group"><span class="date">' + date + '</span><span class="views">Views: ' + views + '</span></div></li>';
                            }
                        }
                    }
                    obj.html(results);
                });
            });
        };

        // format rss feed date
        function formatFeedDate(str) {
            var date = new Date(str);
            if (isNaN(date)) {
                date = dateFromISO(str);
            }
            if ($.datepicker) {
                date = $.datepicker.formatDate('M dd, yy', date);
            } else {
                date = date.toDateString();
            }
            return date;
        }

        // date fnc for when native date from iso is not supported
        function dateFromISO(str) {
            var parts = str.match(/\d+/g);

            var year = parseInt(parts[0]);
            var month = parseInt(parts[1]) - 1;
            var day = parseInt(parts[2]);

            var date = new Date();
            date.setFullYear(year, month, day);
            return date;
        }        

    })(jQuery);
/*
 * Brightcode Video Tracking
*/

(function($){
    var BCLcurrentVideo;
    var BCmediaOffset = 15;
    var BCsegmentNum = 0;
    var BCsegment = 0;
    var BCsegmentLength = 15;
    var BCmediaLength = 40; 
    var BCmediaPlayerName = 'Brightcove Video';
    var BCtempvar=0;
    
    //listener for player error
    onPlayerError = function(event) {
        /* */
    }
    
    //listener for when player is loaded
    onPlayerLoaded = function(id) {
      BCLplayer = brightcove.api.getExperience(id);
    }
    
    //listener for when player is ready
    onPlayerReady = function(event) {
      // get a reference to the video player module
      BCLvideoPlayer = BCLplayer.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
      // add a listener for media change events
      BCLvideoPlayer.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaBegin);
      BCLvideoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaBegin);
      BCLvideoPlayer.addEventListener(brightcove.api.events.MediaEvent.CHANGE, onMediaBegin);
      BCLvideoPlayer.addEventListener(brightcove.api.events.MediaEvent.ERROR, onMediaBegin);
      BCLvideoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, onMediaBegin);
      BCLvideoPlayer.addEventListener(brightcove.api.events.MediaEvent.STOP, onMediaBegin);
    } 
    
    /*Call on video load*/
    function BCstartMovie(){  
        BCLcurrentVideo = BCLvideoPlayer.getCurrentVideo(function(videoDTO){
            var vidTitle = videoDTO.displayName;
            BCmediaLength = videoDTO.length/1000;    
            s.Media.open(vidTitle,BCmediaLength,BCmediaPlayerName);
            BCplayMovie();
        });       
    }    
    
    /*Call on video resume from pause and slider release*/
    function BCplayMovie(){   
        BCLvideoPlayer.getCurrentVideo(function(videoDTO){
            BCmediaLength = videoDTO.length/1000;
            var vidTitle = videoDTO.displayName;
            if(!BCtempvar)
            {
                s.Media.open(vidTitle,BCmediaLength,BCmediaPlayerName);
                BCtempvar=1;
            }
            
            s.Media.play(vidTitle,BCmediaOffset);
        });    
    }
    
    /*Call on video pause and slider grab*/
    function BCstopMovie(){
        BCLvideoPlayer.getCurrentVideo(function(videoDTO){
            var vidTitle = videoDTO.displayName;     
            s.Media.stop(vidTitle,BCmediaOffset);
            BCtempvar=0;
        });
        
    }
    
    /*Call on video end*/
    function BCendMovie(){
        BCstopMovie();
        BCLvideoPlayer.getCurrentVideo(function(videoDTO){
            var vidTitle = videoDTO.displayName; 
            s.Media.close(vidTitle);
            BCtempvar=0;
        });        
    }
    
    function onMediaBegin(e){
        if(e.type == brightcove.api.events.MediaEvent.BEGIN){
            BCstartMovie();
        }
        if(e.type == brightcove.api.events.MediaEvent.PLAY){
            BCplayMovie();
        }
        if(e.type == brightcove.api.events.MediaEvent.COMPLETE){
            BCendMovie();
        }
        if(e.type == brightcove.api.events.MediaEvent.STOP){
            BCstopMovie();
        }
    }
})(jQuery);
  if(location.hostname == "gsearch.polycom.com"){
      var _gaq = _gaq || [];      
      var gsearch_reg = "/usa/en"; 
  
      switch(gsearch_reg) {
       case '/usa/en':
            _gaq.push(['_setAccount', 'UA-8640713-1']);
            _gaq.push(['_setDomainName', 'polycom.com']);
            break;
        case '/emea/en':
             _gaq.push(['_setAccount', 'UA-8640713-2']);
             _gaq.push(['_setDomainName', 'polycom.co.uk']);
            break;
        case '/apac/en':
             _gaq.push(['_setAccount', 'UA-8640713-14']);
             _gaq.push(['_setDomainName', 'polycom.asia']);
            break;
        case '/apac/en/in':
            _gaq.push(['_setAccount', 'UA-8640713-7']);
           _gaq.push(['_setDomainName', 'polycom.co.in']);
            break;
        case '/au/en':
            _gaq.push(['_setAccount', 'UA-8640713-12']);
            _gaq.push(['_setDomainName', 'polycom.com.au']);
            break;
        case '/cala/es':
            _gaq.push(['_setAccount', 'UA-8640713-13']);
            _gaq.push(['_setDomainName', 'latinamerica.polycom.com']);
            break;
        case 'www.polycom.co.jp':
            _gaq.push(['_setAccount', 'UA-8640713-9']);
            _gaq.push(['_setDomainName', 'polycom.co.jp']);
            break;
        case '/de/de':
            _gaq.push(['_setAccount', 'UA-8640713-11']);
            _gaq.push(['_setDomainName', 'polycom.de']);
            break;
        case '/fr/fr':
            _gaq.push(['_setAccount', 'UA-8640713-10']);
            _gaq.push(['_setDomainName', 'polycom.fr']);
            break;
        case '/es/es':
            _gaq.push(['_setAccount', 'UA-8640713-11']);
            _gaq.push(['_setDomainName', 'polycom.es']);
            break;
        case '/ru/ru':
            _gaq.push(['_setAccount', 'UA-8640713-15']);
            _gaq.push(['_setDomainName', 'polycom.com.ru']);
            break;         
        default:
           _gaq.push(['_setAccount', 'UA-8640713-1']);
           _gaq.push(['_setDomainName', 'polycom.com']);
      } 
      _gaq.push(['_setAllowLinker', true]);
      _gaq.push(['_trackPageview']);
    
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
  }
  
/**
    Flexible Video player
    Tracking and resizing player
    **/

var PLCM = PLCM || {};
(function($){
    var player,
      APIModules,
      videoPlayer,
      experienceModule,content,video, players= [];
    var BCLcurrentVideo, BCmediaOffset = 15, BCsegmentNum = 0,
        BCsegment = 0, BCsegmentLength = 15, BCmediaLength = 40, 
        BCmediaPlayerName = 'Brightcove Video', BCtempvar=0;
            
    // utility
    logit = function (context, message) {
      if (console) {
        console.log(context, message);
      }
    };   
         
    PLCM.onBCTemplateLoad = function(experienceID) {
      player = brightcove.api.getExperience(experienceID);
      APIModules = brightcove.api.modules.APIModules;
      players.push(experienceID);
    }   
         
    PLCM.onBCTemplateReady = function(evt) {
        videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);      
        experienceModule = player.getModule(APIModules.EXPERIENCE);
        var experienceId = evt.target.experience.id;
        var containerId =  experienceId.substr(experienceId.indexOf("myExperience")+12, experienceId.length);
        videoPlayer.getCurrentRendition(function(renditionDTO) {
            calculateNewPercentage(renditionDTO.frameWidth, renditionDTO.frameHeight, containerId);     
        });
        window.onresize = function(evt) {
            var resizeWidth = $(".video-player").width(),
              resizeHeight = $(".video-player").height();
            if (experienceModule.experience.type == "html"){
                experienceModule.setSize(resizeWidth, resizeHeight);
            }
        }
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaBegin);
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaBegin);
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.CHANGE, onMediaBegin);
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.ERROR, onMediaBegin);
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, onMediaBegin);
        videoPlayer.addEventListener(brightcove.api.events.MediaEvent.STOP, onMediaBegin); 
    };
            
    function calculateNewPercentage(width,height, containerId) {
      var newPercentage = ((height / width) * 100) + "%";
      $("#container1_"+containerId).css("padding-bottom", newPercentage+"%");
    }
    
    /*Call on video load*/
    function BCstartMovie(){  
        BCLcurrentVideo = videoPlayer.getCurrentVideo(function(videoDTO){
            var vidTitle = videoDTO.displayName;
            BCmediaLength = videoDTO.length/1000;    
            s.Media.open(vidTitle,BCmediaLength,BCmediaPlayerName);
            BCplayMovie();
        });       
    }    
    
    /*Call on video resume from pause and slider release*/
    function BCplayMovie(){   
        videoPlayer.getCurrentVideo(function(videoDTO){
            BCmediaLength = videoDTO.length/1000;
            var vidTitle = videoDTO.displayName;
            if(!BCtempvar)
            {
                s.Media.open(vidTitle,BCmediaLength,BCmediaPlayerName);
                BCtempvar=1;
            }
            
            s.Media.play(vidTitle,BCmediaOffset);
        });    
    }
    
    /*Call on video pause and slider grab*/
    function BCstopMovie(){
        videoPlayer.getCurrentVideo(function(videoDTO){
            var vidTitle = videoDTO.displayName;     
            s.Media.stop(vidTitle,BCmediaOffset);
            BCtempvar=0;
        });
        
    }
    
    /*Call on video end*/
    function BCendMovie(){
        BCstopMovie();
        videoPlayer.getCurrentVideo(function(videoDTO){
            var vidTitle = videoDTO.displayName; 
            s.Media.close(vidTitle);
            BCtempvar=0;
        });        
    }
    
    function onMediaBegin(e){
        if(e.type == brightcove.api.events.MediaEvent.BEGIN){
            BCstartMovie();
        }
        if(e.type == brightcove.api.events.MediaEvent.PLAY){
            BCplayMovie();
        }
        if(e.type == brightcove.api.events.MediaEvent.COMPLETE){
            BCendMovie();
        }
        if(e.type == brightcove.api.events.MediaEvent.STOP){
            BCstopMovie();
        }
    }
        
})(jQuery);
