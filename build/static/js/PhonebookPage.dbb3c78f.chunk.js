(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[4],{258:function(t,e,n){"use strict";n.r(e);var r,a,c,o=n(52),i=n(53),s=n(56),l=n(57),p=n(0),u=n(72),d=n.n(u),b=n(73),h=n(5),x=n(87),f=n(88),j=f.a.form(r||(r=Object(x.a)(["\n    width:400px;\n    height: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    border-color: black;\n    padding: 15px;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    margin-bottom: 50px;\n    \ninput {\n    width: 100%;\n  padding: 12px 10px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border: 1px solid #ccc8c8;\n  transition: .3s border-color;\n    &:hover {\n  border: 1px solid #0f55eb;\n}\n}\ninput::placeholder {\n  color: rgba(0, 26, 255, 0.336);\n  font-size: 1em;\n  font-style: italic;\n}\n"]))),m=n(1),O=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[],filter:"",name:"",number:""},t.onHandleSubmit=function(e){e.preventDefault(),t.props.onCheckDuplicateName(t.state.name)?alert("".concat(t.state.name," is already in contacts.")):(t.props.addContact(t.state),t.setState({contacts:[],name:"",filter:"",number:""}))},t.onHandleChange=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(h.a)({},r,a))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(j,{onSubmit:this.onHandleSubmit,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{placeholder:"what's his/her name?",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange,value:this.state.name})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{placeholder:"gimme their number, hun;)",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange,value:this.state.number})]}),Object(m.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(p.Component),v=f.a.div(a||(a=Object(x.a)(["\n    width:400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    border-color: black;\n    padding: 15px;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    margin-top: 50px;\n\n.styled-contact-li{\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n}\n"]))),g=function(t){var e=t.contacts,n=t.deleteContact;return Object(m.jsx)(v,{children:Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsxs)("li",{className:"styled-contact-li",children:[Object(m.jsxs)("p",{children:[t.name,":"]}),Object(m.jsx)("p",{children:t.number}),Object(m.jsx)("button",{type:"button",onClick:n,id:t.id,children:"Delete"})]},t.id)}))})})},y=function(t){var e=t.title,n=t.children,r=t.styles;return Object(m.jsxs)("div",{className:r,children:[Object(m.jsx)("h2",{children:e}),n]})},C=f.a.div(c||(c=Object(x.a)(["\n    width:400px;\n    height: 150px;\n    padding: 15px;\n    border-radius: 2px;\n    &:hover{\n        border: 1px solid #0f55eb;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    background-color: rgba(0, 26, 255, 0.336);\n    }\n\ninput {\n    width: 100%;\n  padding: 12px 10px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border: 1px solid #ccc8c8;\n  transition: .3s border-color;\n  \n   \n}\ninput::placeholder {\n  color: rgba(0, 26, 255, 0.336);\n  font-size: 1em;\n  font-style: italic;\n}\n"]))),k=function(t){var e=t.filter,n=t.setFilter;return Object(m.jsx)(C,{children:Object(m.jsxs)("label",{children:[Object(m.jsx)("h3",{children:"Find contacts by name"}),Object(m.jsx)("input",{className:"filterInput",type:"text",value:e,onChange:n,placeholder:"who is your booty call for tonight? "})]})})},w=n(14),A=n(18),N=n(21),z=function(t){return t.contacts.filter},D=Object(N.a)([function(t){return t.contacts.items},z],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),F=n(16),S=n(86),H=n.n(S),J=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).addContact=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.props.addContactOperation(n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteContact=function(){var e=Object(b.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.target.id,t.props.deleteContactOperation(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onCheckDuplicateName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t.setFilter=function(e){var n=e.target.value;console.log(n),t.props.filterContacts(n)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.getAllContactsOperation();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{title:"Phonebook",children:Object(m.jsx)(O,{addContact:this.addContact,onCheckDuplicateName:this.onCheckDuplicateName})}),Object(m.jsx)(y,{title:"Contacts",styles:"filterContainerStyle",children:Object(m.jsx)(k,{filter:this.props.filter,setFilter:this.setFilter})}),Object(m.jsx)(y,{children:Object(m.jsx)(g,{contacts:this.props.contacts,deleteContact:this.deleteContact})})]})}}]),n}(p.Component),Z={addContactOperation:function(t){return function(){var e=Object(b.a)(d.a.mark((function e(n,r){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.post("https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts.json",t);case 3:a=e.sent,c=a.data,n(Object(A.a)(Object(F.a)(Object(F.a)({},t),{},{id:c.name}))),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},deleteContactOperation:function(t){return function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.delete("https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts/".concat(t,".json"));case 3:n(Object(A.b)(t)),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},getAllContactsOperation:function(t){return function(){var t=Object(b.a)(d.a.mark((function t(e){var n,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.a.get("https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts.json");case 3:n=t.sent,(r=n.data)&&(a=Object.keys(r).map((function(t){return Object(F.a)({id:t},r[t])})),e(Object(A.d)(a))),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},filterContacts:A.c},q=Object(w.b)((function(t){return{contacts:D(t),filter:z(t)}}),Z)(J),L=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)(q,{})}}]),n}(p.Component);e.default=L}}]);
//# sourceMappingURL=PhonebookPage.dbb3c78f.chunk.js.map