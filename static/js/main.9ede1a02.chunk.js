(this["webpackJsonpecommerece-site"]=this["webpackJsonpecommerece-site"]||[]).push([[0],{14:function(e,t,c){e.exports={card:"ProductList_card__3gZLc",title:"ProductList_title__3z0qY"}},19:function(e,t,c){e.exports={form:"ProductData_form__3n_D2",field:"ProductData_field__2-U6_","product-input":"ProductData_product-input__1UJFe"}},35:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(8),r=c.n(n),i=c(27),a=c.n(i),o=(c(35),c(11)),s=c.n(o),d=c(24),u=c(16),l=c(17),p=c(18),j=c(25),b=c(4),f=function(e){return Object(b.jsx)("button",{onClick:e.onFetch,className:"custom-btn",children:e.children})},m=c(19),h=c.n(m),x=function(e){var t=e.onSubmit,c=e.updateProductField,n=e.currentProduct;return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t()},className:"d-flex flex-column align-items-center justify-content-center px-4",children:[Object(b.jsxs)("div",{className:"".concat(h.a.field,"  d-flex flex-column"),children:[Object(b.jsx)("label",{htmlFor:"name",children:"Product name"}),Object(b.jsx)("input",{id:"name",type:"text",className:"custom-input product-input",value:(null===n||void 0===n?void 0:n.name)||"",onChange:function(e){c("name",e.target.value)}})]}),Object(b.jsxs)("div",{className:"".concat(h.a.field," d-flex flex-column"),children:[Object(b.jsx)("label",{htmlFor:"price",children:"Product price"}),Object(b.jsx)("input",{id:"price",type:"text",className:"custom-input product-input",value:(null===n||void 0===n?void 0:n.price)||"",onChange:function(e){c("price",e.target.value)}})]}),Object(b.jsxs)("div",{className:"".concat(h.a.field,"  d-flex flex-column"),children:[Object(b.jsx)("label",{htmlFor:"description",children:"Product description"}),Object(b.jsx)("input",{id:"description",type:"text",className:"custom-input product-input",value:(null===n||void 0===n?void 0:n.description)||"",onChange:function(e){c("description",e.target.value)}})]}),Object(b.jsx)("div",{className:"my-4",children:Object(b.jsx)(f,{children:"Submit"})})]})},O=c(46),v=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.price}),Object(b.jsx)("td",{children:e.description}),Object(b.jsx)("td",{children:Object(b.jsx)(f,{onFetch:e.onDeleteHandler.bind(undefined,e.id),children:"delete"})})]})},g=function(e){var t=e.rows,c=e.columns,n=e.onDeleteHandler,r=e.editHandler;return Object(b.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(b.jsx)("th",{children:e},t)}))})}),Object(b.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)("tr",{children:Object(b.jsx)(v,{id:e.id,name:e.name,price:e.price,description:e.description,onDeleteHandler:n,onUpdateHandler:r})},e.id)}))})]})},P=c(14),y=c.n(P),_=c(20);var N=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)({}),o=Object(j.a)(a,2),f=o[0],m=o[1],h=Object(n.useCallback)((function(){var e=[];_.a.database().ref("products").get().then((function(t){if(t.exists()){var c=t.val();for(var n in c)e.push({id:n,name:c[n].name,price:c[n].price,description:c[n].description});i(e)}else i([])}))}),[]);function O(){return(O=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==(n=c.findIndex((function(e){return e.id===t})))){e.next=4;break}return alert("Invalid product."),e.abrupt("return");case 4:_.a.database().ref("products/"+t).remove().then((function(){var e=Object(d.a)(c);e.splice(n,1),i(Object(d.a)(e))})).catch((function(e){alert("Failed to delete ".concat(c[n].name," \n Error : ").concat(e.message,". Please retry!"))}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=c.find((function(e){return e.id===t})),console.log(n),m(n?Object(l.a)({},n):null);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(p.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.a.database().ref("products").push().set(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){h()}),[h]),Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsxs)("section",{className:"".concat(y.a.card),children:[Object(b.jsx)("p",{className:"".concat(y.a.title),children:"Add Product"}),Object(b.jsx)(x,{onSubmit:function(){f.name&&f.price&&f.description&&function(e){return P.apply(this,arguments)}(f).then((function(e){h(),m({})})).catch((function(e){console.log(e.message)}))},currentProduct:f,updateProductField:function(e,t){var c=Object(l.a)(Object(l.a)({},f),{},Object(u.a)({},e,t));m(c)}})]}),Object(b.jsxs)("section",{className:"".concat(y.a.card),children:[Object(b.jsx)("p",{className:"".concat(y.a.title," m-0"),children:"Products"}),Object(b.jsx)(g,{columns:["Product Name","Product price","Product Description","Action"],rows:c,onDeleteHandler:function(e){return O.apply(this,arguments)},editHandler:function(e){return v.apply(this,arguments)}})]})]})};c(30).a.initializeApp({apiKey:"AIzaSyAfyaUQiwK9ujxMEiRCPqqub-OwOZUQjR8",authDomain:"e-site-53120.firebaseapp.com",databaseURL:"https://e-site-53120-default-rtdb.firebaseio.com",projectId:"e-site-53120",storageBucket:"e-site-53120.appspot.com",messagingSenderId:"83053626633",appId:"1:83053626633:web:e74c43517790e0cab7ffd8"});var w=function(){return Object(b.jsx)("main",{children:Object(b.jsx)(N,{})})};c(43);a.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9ede1a02.chunk.js.map