(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{304:function(e,a,t){"use strict";t.r(a);var n=t(7),o=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[e._v("#")]),e._v(" Cookies")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("document.cookie")]),e._v(" "),a("h3",{attrs:{id:"agregar-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agregar-cookie"}},[e._v("#")]),e._v(" Agregar cookie")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * key: LLave \n * value: Valor\n * exp: Tiempo expiración min|h|d\n*/\n\nfunction setCookie(key, value, exp = '/'){\n    let expiration = exp;\n    if(exp.includes('min')){\n        expiration = expiration.slice(0,-3) * 60;\n    }else if(exp.includes('h')){\n        expiration = expiration.slice(0,-1) * 3600;\n    }else if(exp.includes('d')){\n        expiration = expiration.slice(0,-1) * 86400;\n    }\n    document.cookie = `${key}=${JSON.stringify(value)}; max-age=${expiration}; path=/;`;\n}\n")])])]),a("h3",{attrs:{id:"obtener-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtener-cookie"}},[e._v("#")]),e._v(" Obtener cookie")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function getCookie(key) {\n    const match = document.cookie.match(RegExp('(?:^|;\\\\s*)' + key + '=([^;]*)'));\n    return match ? match[1] : null;\n}\n")])])]),a("h3",{attrs:{id:"remover-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remover-cookie"}},[e._v("#")]),e._v(" Remover cookie")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function removeCookie(key){\n    document.cookie = `${key}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;\n}\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);