(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(22),i=a.n(s),r=(a(97),a(10)),l=(a(98),a(35)),o=a(12),j=a(6),d="/api",u={EN:{signUp:{header:"Sign Up",personalDetails:"Personal Details",FirstName:"First Name",LastName:"Last Name",Email:"Email",Password:"Password",RetypePassword:"Retype Password",haveAccount:"Have an account ?"},signIn:{header:"Sign In",Email:"Email",Password:"Password",signIn:"Sign In",forgotPassword:"Forgot password?",signUp:"Sign Up",signUpText:"Dont have an account ?"}},HE:{signUp:{header:"\u05d4\u05e8\u05e9\u05de\u05d4",personalDetails:"\u05e4\u05e8\u05d8\u05d9\u05dd \u05d0\u05d9\u05e9\u05d9\u05d9\u05dd",FirstName:"\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9",LastName:"\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4",Email:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",Password:"\u05e1\u05d9\u05e1\u05de\u05d4",RetypePassword:"\u05d7\u05d6\u05d5\u05e8 \u05e2\u05dc \u05e1\u05d9\u05e1\u05de\u05d4",haveAccount:"\u05d9\u05e9 \u05dc\u05da \u05de\u05e9\u05ea\u05de\u05e9 ?"},signIn:{header:"\u05d4\u05ea\u05d7\u05d1\u05e8\u05d5\u05ea",Email:"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc",Password:"\u05e1\u05d9\u05e1\u05de\u05d4",signIn:"\u05d4\u05ea\u05d7\u05d1\u05e8",forgotPassword:"\u05e9\u05db\u05d7\u05ea \u05e1\u05d9\u05e1\u05de\u05d4 ?",signUp:"\u05d4\u05d9\u05e8\u05e9\u05dd",signUpText:"\u05d0\u05d9\u05df \u05dc\u05da \u05de\u05e9\u05ea\u05de\u05e9 ?"}}},b=a(16),p=a.n(b),h=a(31),O=a.n(h),m=a(54),x=a(89),f=a(25),g=a(64),v=a.p+"static/media/user.0d14c699.png",y=a(63),N=a(14),w=function(e){return{type:"GET_ALL_USERS",payload:e}},S=function(e){return{type:"LANGUAGE_CHANGE",payload:e}},C=(a(83),a(2)),_=a(30),E=a.n(_),U=a(36),F=a(28),P=a(27),T=a(7),L=a(129),I=a(39),k=a(1),A=function(e){var t=Object(n.useRef)(null),a=Object(N.b)(),c=Object(n.useState)(""),s=Object(j.a)(c,2),i=s[0],r=s[1],l=Object(n.useState)(""),o=Object(j.a)(l,2),u=o[0],b=o[1],h=Object(n.useState)(""),O=Object(j.a)(h,2),m=O[0],x=O[1],g=Object(n.useState)(""),y=Object(j.a)(g,2),S=y[0],_=y[1],A=Object(n.useState)(""),D=Object(j.a)(A,2),R=D[0],z=D[1],G=Object(n.useState)(""),H=Object(j.a)(G,2),B=H[0],W=H[1],V=Object(n.useState)(""),X=Object(j.a)(V,2),M=X[0],J=X[1],q=Object(n.useState)(!1),K=Object(j.a)(q,2),Q=K[0],Y=K[1],Z=Object(n.useState)(""),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(!1),ne=Object(j.a)(ae,2),ce=ne[0],se=ne[1],ie=Object(n.useState)(!1),re=Object(j.a)(ie,2),le=re[0],oe=re[1],je=function(e){e.preventDefault();var t={firstName:i,lastName:u,email:m,roll:S,phone:R,address:B,image:M};console.log(t),p.a.post("".concat(d,"/new_user"),t).then((function(e){a(w(e.data)),r(""),b(""),x(""),_(""),z(""),W(""),J(""),se(!0)})).catch((function(e){te(e.message),Y(!0)}))};return Object(n.useEffect)((function(){setTimeout((function(){Y(!1),te("")}),3e3)}),[Q]),Object(n.useEffect)((function(){setTimeout((function(){se(!1)}),3e3)}),[ce]),Object(k.jsxs)(F.a,Object(C.a)(Object(C.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(k.jsxs)(F.a.Header,{children:[Object(k.jsx)(F.a.Title,{id:"contained-modal-title-vcenter",children:"Add User"}),Object(k.jsx)(L.a,{cursor:"pointer",onClick:e.onHide})]}),Object(k.jsxs)(F.a.Body,{children:[Q?Object(k.jsx)(P.a,{className:"alert-fixed",variant:"danger",children:ee}):Object(k.jsx)("div",{}),ce?Object(k.jsx)(P.a,{className:"alert-fixed",variant:"success",children:"User Created Successfully"}):Object(k.jsx)("div",{}),Object(k.jsxs)(T.a,{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:function(e){return function(e){return e.preventDefault(),""!==i&&""!==u&&""!==m||(te("First name, Last name and Email must be filled"),Y(!0),!1)}(e)&&je(e)},children:[Object(k.jsxs)("div",{style:{display:"flex",position:"relative",right:"20px",width:"300px",marginBottom:"30px",justifyContent:"space-between",alignItems:"center"},children:[Object(k.jsx)("img",{style:{width:"50px",height:"50px",borderRadius:"50%",objectFit:"cover"},src:M||v}),Object(k.jsx)("div",{className:"image_label",children:Object(k.jsxs)("label",{children:[Object(k.jsx)(T.a.Control,{id:"fileUpload",type:"file",accept:".jpg",onChange:function(){var e,a=null===(e=t.current)||void 0===e?void 0:e.files[0];oe(!0),p.a.get("".concat(d,"/s3_url")).then(function(){var e=Object(U.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.data.url,{method:"PUT",headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"},body:a}).then((function(e){var t=e.url.split("?")[0];J(t),oe(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ref:t}),"Add profile pic"]})})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom ",children:[Object(k.jsx)(T.a.Label,{style:{fontSize:"14px"},children:"First Name"}),Object(k.jsx)(T.a.Control,{size:"sm",value:i,onChange:function(e){r(e.target.value)},type:"name",placeholder:"First Name"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Last Name"}),Object(k.jsx)(T.a.Control,{size:"sm",value:u,onChange:function(e){b(e.target.value)},type:"name",placeholder:"Last Name"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Email"}),Object(k.jsx)(T.a.Control,{size:"sm",value:m,onChange:function(e){x(e.target.value)},type:"email",placeholder:"Email"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Phone"}),Object(k.jsx)(T.a.Control,{size:"sm",value:R,onChange:function(e){z(e.target.value)},type:"tel",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"Phone"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Address"}),Object(k.jsx)(T.a.Control,{size:"sm",value:B,onChange:function(e){W(e.target.value)},type:"text",placeholder:"Address"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px",display:"flex",flexDirection:"column"},className:"mb-3 ",children:[Object(k.jsx)(T.a.Label,{style:{marginRight:"30px"},children:"Roll"}),Object(k.jsxs)(T.a.Select,{className:"form_select",value:S,onChange:function(e){return _(e.target.value)},children:[Object(k.jsx)("option",{value:"",children:"not selected"}),Object(k.jsx)("option",{value:"HR",children:"HR"}),Object(k.jsx)("option",{value:"UX/UI",children:"UX/UI"}),Object(k.jsx)("option",{value:"Frontend",children:"Frontend"}),Object(k.jsx)("option",{value:"Backend",children:"Backend"}),Object(k.jsx)("option",{value:"Fullstack",children:"Fullstack"}),Object(k.jsx)("option",{value:"Helpdesk",children:"Helpdesk"}),Object(k.jsx)("option",{value:"Product",children:"Product"}),Object(k.jsx)("option",{value:"Devops",children:"Devops"})]})]}),Object(k.jsx)(f.a,{type:"submit",disabled:le,variant:"success",children:le?Object(k.jsx)(I.a,{size:"sm",animation:"border"}):"Add User"})]})]})]}))},D=function(e){var t=e.updatedUser,a=Object(n.useRef)(null),c=Object(N.b)(),s=Object(n.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1],o=Object(n.useState)(""),u=Object(j.a)(o,2),b=u[0],h=u[1],O=Object(n.useState)(""),m=Object(j.a)(O,2),x=m[0],g=m[1],y=Object(n.useState)(""),S=Object(j.a)(y,2),_=S[0],A=S[1],D=Object(n.useState)(""),R=Object(j.a)(D,2),z=R[0],G=R[1],H=Object(n.useState)(""),B=Object(j.a)(H,2),W=B[0],V=B[1],X=Object(n.useState)(""),M=Object(j.a)(X,2),J=M[0],q=M[1],K=Object(n.useState)(!1),Q=Object(j.a)(K,2),Y=Q[0],Z=Q[1],$=Object(n.useState)("test"),ee=Object(j.a)($,2),te=(ee[0],ee[1]),ae=Object(n.useState)(!1),ne=Object(j.a)(ae,2),ce=ne[0],se=ne[1],ie=Object(n.useState)(!1),re=Object(j.a)(ie,2),le=re[0],oe=re[1];Object(n.useEffect)((function(){l(t.firstName),h(t.lastName),g(t.email),A(t.roll),V(t.address),q(t.profile_pic),G(t.phone)}),[t]);return Object(n.useEffect)((function(){setTimeout((function(){Z(!1)}),3e3),te("")}),[Y]),Object(n.useEffect)((function(){setTimeout((function(){se(!1)}),3e3)}),[ce]),Object(k.jsxs)(F.a,Object(C.a)(Object(C.a)({},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(k.jsxs)(F.a.Header,{children:[Object(k.jsx)(F.a.Title,{id:"contained-modal-title-vcenter",children:"Update User"}),Object(k.jsx)(L.a,{cursor:"pointer",onClick:e.onHide})]}),Object(k.jsxs)(F.a.Body,{children:[Y?Object(k.jsx)(P.a,{className:"alert-fixed",variant:"danger",children:"Something went wrong"}):Object(k.jsx)("div",{}),ce?Object(k.jsx)(P.a,{className:"alert-fixed",variant:"success",children:"User Updated Successfully"}):Object(k.jsx)("div",{}),Object(k.jsxs)(T.a,{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:function(e){return function(e){e.preventDefault();var t={firstName:r,lastName:b,email:x,roll:_,phone:z,address:W,image:J};console.log(t),p.a.post("".concat(d,"/update_user"),t).then((function(e){c(w(e.data)),se(!0)})).catch((function(e){te(e.message),Z(!0)}))}(e)},children:[Object(k.jsxs)("div",{style:{display:"flex",position:"relative",right:"20px",width:"300px",marginBottom:"30px",justifyContent:"space-between",alignItems:"center"},children:[Object(k.jsx)("img",{style:{width:"50px",height:"50px",borderRadius:"50%",objectFit:"cover"},src:J||v}),Object(k.jsx)("div",{className:"image_label",children:Object(k.jsxs)("label",{children:[Object(k.jsx)(T.a.Control,{id:"fileUpload",type:"file",accept:".jpg",onChange:function(){var e;oe(!0);var t=null===(e=a.current)||void 0===e?void 0:e.files[0];p.a.get("".concat(d,"/s3_url")).then(function(){var e=Object(U.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.data.url,{method:"PUT",headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"},body:t}).then((function(e){var t=e.url.split("?")[0];q(t),oe(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ref:a}),"Change profile pic"]})})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom ",children:[Object(k.jsx)(T.a.Label,{style:{fontSize:"14px"},children:"First Name"}),Object(k.jsx)(T.a.Control,{size:"sm",value:r,onChange:function(e){l(e.target.value)},type:"name",placeholder:"First Name"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Last Name"}),Object(k.jsx)(T.a.Control,{size:"sm",value:b,onChange:function(e){h(e.target.value)},type:"name",placeholder:"Last Name"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Email"}),Object(k.jsx)(T.a.Control,{size:"sm",value:x,onChange:function(e){g(e.target.value)},type:"email",placeholder:"Email"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Phone"}),Object(k.jsx)(T.a.Control,{size:"sm",value:z,onChange:function(e){G(e.target.value)},type:"tel",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"Phone"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px"},className:"mb-3 border-bottom",children:[Object(k.jsx)(T.a.Label,{children:"Address"}),Object(k.jsx)(T.a.Control,{size:"sm",value:W,onChange:function(e){V(e.target.value)},type:"text",placeholder:"Address"})]}),Object(k.jsxs)(T.a.Group,{style:{minWidth:"300px",display:"flex",flexDirection:"column"},className:"mb-3 ",children:[Object(k.jsx)(T.a.Label,{style:{marginRight:"30px"},children:"Roll"}),Object(k.jsxs)(T.a.Select,{className:"form_select",value:_,onChange:function(e){return A(e.target.value)},children:[Object(k.jsx)("option",{value:"",children:"not selected"}),Object(k.jsx)("option",{value:"HR",children:"HR"}),Object(k.jsx)("option",{value:"UX/UI",children:"UX/UI"}),Object(k.jsx)("option",{value:"Frontend",children:"Frontend"}),Object(k.jsx)("option",{value:"Backend",children:"Backend"}),Object(k.jsx)("option",{value:"Fullstack",children:"Fullstack"}),Object(k.jsx)("option",{value:"Helpdesk",children:"Helpdesk"}),Object(k.jsx)("option",{value:"Product",children:"Product"}),Object(k.jsx)("option",{value:"Devops",children:"Devops"})]})]}),le&&Object(k.jsx)(I.a,{size:"sm",animation:"border"}),Object(k.jsx)(f.a,{type:"submit",disabled:le,variant:"success",children:"Update User"})]})]})]}))},R=a(69),z=a(130),G=Object(o.g)((function(e){var t=e.page,a=void 0===t?"not_dashboard":t,n=e.history,c=O.a.get("jwt")?Object(m.a)(O.a.get("jwt")):null;return Object(k.jsx)(R.a,{expand:"lg",variant:"light",bg:"not_dashboard"===a?"white":"light",children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)(R.a.Brand,{href:"/",children:"LS Technology"}),"dashboard"===a&&Object(k.jsxs)("div",{children:[Object(k.jsx)(g.a,{rounded:!0,style:{width:"40px",height:"40px",objectFit:"cover",margin:"0 7px"},src:""===c.profile_pic?v:c.profile_pic}),Object(k.jsx)(R.a.Text,{href:"#",children:c.firstName}),Object(k.jsx)(z.a,{style:{cursor:"pointer",margin:"0 25px"},size:22,onClick:function(){O.a.remove("jwt"),n.push("/")}})]})]})})})),H=a(131),B=a(132),W=function(e){var t=e.history,a=Object(N.b)(),c=Object(N.c)((function(e){return e.users})),s=Object(n.useState)({firstName:"",lastName:"",email:"",address:"",roll:"",phone:"",profile_pic:""}),i=Object(j.a)(s,2),r=i[0],l=i[1],u=Object(n.useState)(!1),b=Object(j.a)(u,2),h=b[0],S=b[1],C=Object(n.useState)(!1),_=Object(j.a)(C,2),E=_[0],U=_[1],F=O.a.get("jwt")?Object(m.a)(O.a.get("jwt")):null;Object(n.useEffect)((function(){p.a.get("".concat(d,"/all_users")).then((function(e){console.log("~~~~~RES",e),a(w(e.data))}))}),[]);var P=function(){return Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{}),Object(k.jsx)("th",{children:"First Name"}),Object(k.jsx)("th",{children:"Last Name"}),Object(k.jsx)("th",{children:"Phone"}),Object(k.jsx)("th",{children:"Address"}),Object(k.jsx)("th",{children:"Roll"}),Object(k.jsx)("th",{children:"Start Date"}),F.is_admin&&Object(k.jsx)("th",{})]})})},T=function(e){var n=e.user;return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:Object(k.jsx)(g.a,{style:{width:"70px",height:"70px",objectFit:"cover",borderRadius:"50%"},src:""===n.profile_pic?v:n.profile_pic})}),Object(k.jsx)("td",{children:n.firstName}),Object(k.jsx)("td",{children:n.lastName}),Object(k.jsx)("td",{children:n.phone}),Object(k.jsx)("td",{children:n.address}),Object(k.jsx)("td",{children:n.roll}),Object(k.jsx)("td",{children:n.createdAt.split("T")[0]}),F.is_admin&&Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("td",{children:[Object(k.jsx)(H.a,{className:"update_delete_icons",onClick:function(){l(c.find((function(e){return e._id===n._id}))),U(!0)}}),Object(k.jsx)(B.a,{className:"update_delete_icons",onClick:function(){return e=n._id,c=n.email,console.log(c),console.log(F),void p.a.delete("".concat(d,"/delete_user"),{data:{_id:e}}).then((function(e){F.email===c?(O.a.remove("jwt"),t.push("/")):a(w(e.data))}));var e,c}})]})})]},n._id)};return Object(n.useEffect)((function(){console.log("users : ",c)}),[c]),Object(k.jsx)(k.Fragment,{children:O.a.get("jwt")?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(G,{page:"dashboard"}),Object(k.jsxs)(y.a,{children:[Object(k.jsxs)("div",{className:"dashboard_header",children:[Object(k.jsx)("h3",{children:"Managing Employees"}),Object(k.jsx)(f.a,{disabled:!F.is_admin,onClick:function(){return S(!0)},size:"md",children:"+ Add Employee"})]}),Object(k.jsxs)(x.a,{hover:!0,children:[Object(k.jsx)(P,{}),Object(k.jsx)("tbody",{children:c?c.map((function(e){return Object(k.jsx)(T,{user:e})})):null})]})]}),Object(k.jsx)(A,{show:h,onHide:function(){return S(!1)}}),Object(k.jsx)(D,{updatedUser:r,show:E,onHide:function(){return U(!1)}})]}):Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(o.a,{to:{pathname:"/sign_in"}})})})},V=a(42),X=a(90),M=a.n(X),J=(a(124),function(e){var t=e.value,a=e.setValue,n=e.type,c=e.language;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a.Group,{className:"pt-4 border-bottom ",controlId:"formBasicEmail",style:{width:"500px"},children:Object(k.jsx)(T.a.Control,{size:"sm",minlength:"Password"===n?4:0,value:t,onChange:function(e){a(e.target.value)},type:n,placeholder:u[c].signIn[n]})})})}),q=Object(o.g)((function(e){var t=e.history,a=Object(N.c)((function(e){return e.dir})),c=Object(N.b)(),s=Object(n.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1],o=Object(n.useState)(""),b=Object(j.a)(o,2),h=b[0],O=b[1],m=Object(n.useState)(!1),x=Object(j.a)(m,2),g=x[0],y=x[1],w=Object(n.useState)(""),_=Object(j.a)(w,2),E=_[0],U=_[1],F=Object(n.useState)("EN"),L=Object(j.a)(F,2),I=L[0],A=L[1];return Object(n.useEffect)((function(){setTimeout((function(){y(!1),U("")}),4700)}),[g]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(G,{}),Object(k.jsxs)("div",{dir:a,className:"signInContainer",children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)(T.a.Select,{value:I,style:{position:"relative",top:"10rem",left:"19rem",padding:"0.3rem"},"aria-label":"EN",onChange:function(e){return function(e){var t="EN"===e?"ltr":"rtl";A(e),c(S(t))}(e.target.value)},children:[Object(k.jsx)("option",{value:"EN",children:"EN"}),Object(k.jsx)("option",{value:"HE",children:"HE"})]})," "]}),g?Object(k.jsx)(P.a,{className:"alert-fixed",variant:"danger",children:E}):null,Object(k.jsx)("h2",{style:{marginTop:"1rem",marginBottom:"5rem"},children:u[I].signIn.header}),Object(k.jsxs)(V.a,{style:{padding:"1rem 10rem",margin:"2rem",height:"800px"},children:[Object(k.jsx)("img",{src:v,className:"sign_in_pic"}),Object(k.jsx)(V.a.Body,{children:Object(k.jsxs)(T.a,{onSubmit:function(e){return function(e,a){e.preventDefault(),p.a.post("".concat(d,"/sign_in"),a,{withCredentials:!0,"Content-Type":"application/json"}).then((function(e){console.log(e),200===e.status&&t.push("/")})).catch((function(e){y(!0),U(e.message)}))}(e,{email:r,password:h})},style:{width:"300px",display:"flex",flexDirection:"column",alignItems:"center"},children:[[{type:"Email",value:r,setValue:l},{type:"Password",value:h,setValue:O}].map((function(e,t){return Object(k.jsx)(J,Object(C.a)(Object(C.a)({},e),{},{language:I}),t)})),Object(k.jsx)(f.a,{variant:"primary",className:"m-2",type:"submit",children:u[I].signIn.header}),Object(k.jsx)(M.a,{size:"small",appId:"309075364038210",fields:"name,email,picture",callback:function(e){console.log(e);var a={email:e.email,password:e.userID,firstName:e.name.split(" ")[0],lastName:e.name.split(" ")[1],image:e.picture.data.url};p.a.post("".concat(d,"/facebook_sign_in"),a,{withCredentials:!0}).then((function(e){console.log(e),200===e.status&&t.push("/")})).catch((function(e){y(!0),U(e.message)}))}}),Object(k.jsx)("p",{style:{marginTop:"1rem",fontSize:"12px",fontWeight:"bold"},children:u[I].signIn.forgotPassword})]})})]}),Object(k.jsxs)("p",{children:[" ",u[I].signIn.signUpText]}),Object(k.jsx)("a",{style:{cursor:"pointer",color:"blue"},onClick:function(){return t.push("/sign_up")},children:u[I].signIn.signUp})]})]})})),K=(a(125),a(133)),Q=function(e){var t=e.value,a=e.setValue,n=e.type,c=e.language;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a.Group,{className:"pt-4 border-bottom ",controlId:"formBasicEmail",style:{width:"500px"},children:Object(k.jsx)(T.a.Control,{size:"sm",minLength:"4",value:t,onChange:function(e){a(e.target.value)},type:"RetypePassword"===n?"password":n,placeholder:"RetypePassword"===t?u[c].signUp.RetypePassword:u[c].signUp[n]})})})},Y=Object(o.g)((function(e){var t=e.history,a=Object(N.b)(),c=Object(N.c)((function(e){return e.dir})),s=Object(n.useState)(""),i=Object(j.a)(s,2),r=i[0],l=i[1],o=Object(n.useState)(""),b=Object(j.a)(o,2),h=b[0],O=b[1],m=Object(n.useState)(""),x=Object(j.a)(m,2),g=x[0],y=x[1],w=Object(n.useState)(""),_=Object(j.a)(w,2),F=_[0],L=_[1],A=Object(n.useState)(""),D=Object(j.a)(A,2),R=D[0],z=D[1],H=Object(n.useState)(!1),B=Object(j.a)(H,2),W=B[0],X=B[1],M=Object(n.useState)(""),J=Object(j.a)(M,2),q=J[0],Y=J[1],Z=Object(n.useState)(null),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)("EN"),ne=Object(j.a)(ae,2),ce=ne[0],se=ne[1],ie=Object(n.useState)(!1),re=Object(j.a)(ie,2),le=re[0],oe=re[1],je=Object(n.useRef)(null);Object(n.useEffect)((function(){!0===W&&setTimeout((function(){X(!1),Y("")}),2e3)}),[W]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(G,{}),Object(k.jsxs)("div",{dir:c,className:"signUpContainer",children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)(T.a.Select,{value:ce,style:{position:"relative",top:"12rem",left:"19rem",padding:"0.3rem"},"aria-label":"EN",onChange:function(e){return function(e){var t="EN"===e?"ltr":"rtl";se(e),a(S(t))}(e.target.value)},children:[Object(k.jsx)("option",{value:"EN",children:"EN"}),Object(k.jsx)("option",{value:"HE",children:"HE"})]})," "]}),W&&Object(k.jsx)(P.a,{className:"alert-fixed",variant:"danger",children:q}),Object(k.jsxs)("h2",{style:{margin:"3rem 0"},children:[" ",u[ce].signUp.header]}),Object(k.jsxs)(V.a,{style:{padding:"0rem 10rem",marginTop:"4rem"},children:[Object(k.jsx)("img",{className:"sign_up_pic",src:ee||v}),Object(k.jsxs)(V.a.Body,{children:[Object(k.jsxs)("label",{className:"custom-file-upload",children:[Object(k.jsx)(T.a.Control,{id:"fileUpload",type:"file",accept:".jpg",onChange:function(){var e,t=null===(e=je.current)||void 0===e?void 0:e.files[0];oe(!0),p.a.get("".concat(d,"/s3_url")).then(function(){var e=Object(U.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.data.url,{method:"PUT",headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"},body:t}).then((function(e){var t=e.url.split("?")[0];te(t),oe(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ref:je,className:"custom-file-input"}),Object(k.jsx)(K.a,{color:"white",size:33})]}),Object(k.jsxs)(T.a,{style:{marginTop:"-4rem",width:"300px",display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:function(e){(function(e){return e.preventDefault(),""!==r&&""!==h&&""!==g&&""!==F&&""!==R||(X(!0),Y("please fill all fields"),!1)})(e)&&function(e){return e.preventDefault(),F===R||(X(!0),Y("passwords do not match"),!1)}(e)&&function(e,a){e.preventDefault(),p.a.post("".concat(d,"/sign_up"),a,{withCredentials:!0,"Content-Type":"application/json"}).then((function(e){t.push("/sign_in")})).catch((function(e){Y(e.message),X(!0)}))}(e,{firstName:r,lastName:h,email:g,password:F,image:ee})},children:[Object(k.jsxs)("h6",{style:{position:"relative",right:"ltr"===c?"12rem":"-12rem"},children:[" ",u[ce].signUp.personalDetails]}),[{type:"FirstName",value:r,setValue:l},{type:"LastName",value:h,setValue:O},{type:"Email",value:g,setValue:y}].map((function(e,t){return Object(k.jsx)(Q,Object(C.a)(Object(C.a)({},e),{},{language:ce}),t)})),Object(k.jsx)("h6",{style:{position:"relative",right:"ltr"===c?"13.7rem":"-13.7rem",marginTop:"2rem"},children:u[ce].signUp.Password}),[{type:"Password",value:F,setValue:L},{type:"RetypePassword",value:R,setValue:z}].map((function(e,t){return Object(k.jsx)(Q,Object(C.a)(Object(C.a)({},e),{},{language:ce}),t)})),Object(k.jsx)(f.a,{style:{marginTop:"1rem"},type:"submit",disabled:le,variant:"primary",children:le?Object(k.jsx)(I.a,{size:"sm",animation:"border"}):u[ce].signUp.header})]})]})]}),Object(k.jsxs)("div",{className:"bottom_section",children:[Object(k.jsxs)("p",{children:[u[ce].signUp.haveAccount," "]}),Object(k.jsx)("a",{style:{cursor:"pointer",color:"blue"},onClick:function(){return t.push("/sign_in")},children:u[ce].signIn.signIn})]})]})]})})),Z=Y,$=a(67),ee=a(91),te=a(92),ae={users:[]},ne=[te.a],ce=Object($.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_USERS":return Object(C.a)(Object(C.a)({},e),{},{users:t.payload});case"LANGUAGE_CHANGE":return Object(C.a)(Object(C.a)({},e),{},{dir:t.payload});default:return e}}),{users:[],dir:"ltr"},Object(ee.composeWithDevTools)($.applyMiddleware.apply(void 0,ne))),se=ce;var ie=function(){var e,t,a,n=Object(N.c)((function(e){return e.language}));return console.log("lang : ",n),console.log(se),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(o.d,{children:[Object(k.jsx)(o.b,(e={exact:!0,path:"/"},Object(r.a)(e,"exact",!0),Object(r.a)(e,"component",W),e)),Object(k.jsx)(o.b,(t={exact:!0,path:"/sign_in"},Object(r.a)(t,"exact",!0),Object(r.a)(t,"component",q),t)),Object(k.jsx)(o.b,(a={exact:!0,path:"/sign_up"},Object(r.a)(a,"exact",!0),Object(r.a)(a,"component",Z),a))]})})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(126);i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(N.a,{store:se,children:Object(k.jsx)(ie,{})})}),document.getElementById("root")),re()},83:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.8ae8849d.chunk.js.map