(this["webpackJsonptype-script-react-redux-tool-kitapp-api-css-flex-box-stretchy-image-grid-wcag"]=this["webpackJsonptype-script-react-redux-tool-kitapp-api-css-flex-box-stretchy-image-grid-wcag"]||[]).push([[3],{44:function(t,e,n){"use strict";n.r(e);var r=n(26);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,c,a,o=[],s=!0,l=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=c.call(n)).done)&&(o.push(r.value),o.length!==e);s=!0);}catch(u){l=!0,i=u}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw i}}return o}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(0),a=n(1),o=function(t){var e=new Date(t.toString()),n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return i<10&&(i="0"+i),r<10&&(r="0"+r),r+"/"+i+"/"+n},s=function(t){var e=t.theImage,n=t.unitName,r=t.unitStyleName,i=t.checkInDate,c=t.locationName;return Object(a.jsxs)("div",{className:"trip-item",tabIndex:0,children:[Object(a.jsx)("img",{width:"600",height:"300",className:"picture",alt:c,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/".concat(e)}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("h4",{"aria-label":"unit name ".concat(n),children:n}),Object(a.jsxs)("div",{children:["Style:",r," "]}),Object(a.jsxs)("time",{children:["Check In:",o(i)]})]})]})},l=n(22),u=n(27),d=function(){return Object(u.b)()},b=u.c,j=function(){var t=d(),e=b((function(t){return t.tripsList.filterOptions}));b((function(t){return t}));return Object(c.useEffect)((function(){t(Object(l.c)())}),[t]),Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("label",{children:"Filter"}),Object(a.jsxs)("select",{id:"year",onChange:function(e){return t(Object(l.b)(e.target.value))},"aria-label":"option list to filter the destination",children:[Object(a.jsx)("option",{disabled:!0,hidden:!0,children:"Select destinations"}),e&&e.length>0?e.map((function(t){return Object(a.jsx)("option",{tabIndex:0,children:t},t)})):null,Object(a.jsx)("option",{tabIndex:0,className:"redtext",children:"Clear Filter"})]})]})};e.default=function(){var t=i(Object(c.useState)(!1),2),e=t[0],n=t[1],r=d(),o=b((function(t){return t.tripsList.trips}));b((function(t){return t}));Object(c.useEffect)((function(){r(Object(l.e)())}),[r]);var u;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"button-holder",children:[Object(a.jsx)("button",{onClick:function(){return n(!e),void r(e?Object(l.d)():Object(l.f)())},children:e?"Sort from closest date":"Sort from furthest date"}),Object(a.jsx)(j,{})]}),Object(a.jsx)("div",{className:"trips",children:(u=o,u?u.map((function(t){return Object(a.jsx)(s,{theImage:t.theImage?t.theImage:"imageLoading",unitName:t.unitName,unitStyleName:t.unitStyleName,locationName:t.locationName,checkInDate:t.checkInDate},t.id)})):Object(a.jsx)("div",{children:"No Trip Items to show"}))})]})}}}]);
//# sourceMappingURL=3.b14e53ea.chunk.js.map