(this["webpackJsonpa-weber-assessment"]=this["webpackJsonpa-weber-assessment"]||[]).push([[0],{100:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),c=s(9),i=s.n(c),l=s(75),n=s(135),o=s(136),d=s(30),j=s(66),b=s(42),m=s(17),u=s(34),h={anchorOrigin:{horizontal:"center",vertical:"top"},message:null,autoHideDuration:5e3,alertSeverity:"success",refreshToken:-1},x=Object(b.c)({name:"snackbar",initialState:h,reducers:{alert:function(e,t){var s=t.payload;return Object(u.a)(Object(u.a)(Object(u.a)({},h),s),{},{refreshToken:Math.random()})}}}),O=x.reducer,f=x.actions.alert,g=Object(m.b)({snackbar:O}),p=s(59),w=s(67),v=s.n(w),y=Object(p.a)({key:"vlad-boiler",storage:v.a,blacklist:["snackbar"]},g),N=Object(b.b)({ignoredPaths:[]}),S=Object(b.a)({reducer:y,middleware:function(e){return e().concat([N])},devTools:!0}),k=Object(p.b)(S);var C=s(32),P=s(145),R=s(143),A=s(68),q=s(2),W=function(){var e=Object(d.c)((function(e){return e.snackbar})),t=Object(a.useState)(!1),s=Object(C.a)(t,2),r=s[0],c=s[1];return Object(a.useEffect)((function(){c(!!e.message);var t=setTimeout((function(){return c(!1)}),e.autoHideDuration||5e3);return function(){return clearTimeout(t)}}),[e.message,e.refreshToken]),Object(q.jsx)("div",{children:Object(q.jsx)(P.a,Object(u.a)(Object(u.a)({},Object(A.omit)(e,"message","alert")),{},{open:r,children:null===e.alertSeverity?Object(q.jsx)(q.Fragment,{children:e.message}):Object(q.jsx)(R.a,{severity:e.alertSeverity,children:e.message})}))})},M=Object(l.a)(),T=function(e){var t=e.children;return Object(q.jsxs)(r.a.StrictMode,{children:[Object(q.jsx)(n.a,{}),Object(q.jsx)(d.a,{store:S,children:Object(q.jsx)(o.a,{theme:M,children:Object(q.jsxs)(j.a,{loading:null,persistor:k,children:[Object(q.jsx)(W,{}),t]})})})]})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,148)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),r(e),c(e),i(e)}))},V=s(29),B=s(12),H=s(137),D=s(142),F=s(138),I=s(4),U=Object(H.a)({background:{backgroundImage:'url("https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80")',height:"100vh",width:"100vw"},textShadow:{textShadow:"#0f0f0fb5 2px 4px 8px"}}),G=function(){var e=U();return Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{className:Object(I.a)("bg-cover filter blur-sm contrast-125",e.background)}),Object(q.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-3",children:[Object(q.jsx)(D.a,{className:Object(I.a)("text-7xl text-white font-medium",e.textShadow),children:"404 - Page Not Found"}),Object(q.jsx)(D.a,{className:Object(I.a)("text-3xl text-white",e.textShadow),children:"The page you're looking for doesn't exist."}),Object(q.jsx)(V.b,{to:"/AWeberAssessment/",children:Object(q.jsx)(F.a,{variant:"outlined",color:"primary",size:"large",classes:{root:"text-white",outlinedPrimary:"border-white"},children:"Take me back home"})})]})]})},z=s(141),E=s(146),$=function(e){var t,s;return Object(q.jsxs)("div",{className:Object(I.a)("flex gap-2 items-center",null===(t=e.classes)||void 0===t?void 0:t.wrapper),children:[Object(q.jsx)(D.a,{className:Object(I.a)("text-xl text-yellow-700 transition-colors duration-500 ease-in-out",e.toggled&&"text-green-600",null===(s=e.classes)||void 0===s?void 0:s.icon),children:e.toggled?"\u2714":"\u2718"}),Object(q.jsx)(D.a,{className:Object(I.a)("text-base"),children:e.label})]})},_=s(73),J=function e(t){var s=this;Object(_.a)(this,e),this.password=void 0,this.updatePassword=function(e){s.password=e},this.meetsLengthRequirements=function(){return s.password.length>=6},this.meetsUpperCaseRequirements=function(){return/[A-Z]/.test(s.password)},this.meetsLowerCaseRequirements=function(){return/[a-z]/.test(s.password)},this.meetsNumericRequirements=function(){return/\d/.test(s.password)},this.meetsSpecialCharacterRequirements=function(){return/[@!#$%^&*()_\-+={[}\]\|:;"'<,>.]/.test(s.password)},this.isValidPassword=function(){return s.meetsLengthRequirements()&&s.meetsUpperCaseRequirements()&&s.meetsLowerCaseRequirements()&&s.meetsNumericRequirements()&&s.meetsSpecialCharacterRequirements()},this.password=t},Y=s(140),K=Object(H.a)((function(){return{background:{backgroundImage:'url("https://images.unsplash.com/photo-1557683304-673a23048d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=843&q=80")'}}})),Z=function(e){var t=K();return Object(q.jsxs)("div",{className:Object(I.a)("bg-blue-500 flex-2 bg-cover justify-center px-10 flex flex-col text-white",t.background),children:[Object(q.jsx)(D.a,{className:"text-5xl font-medium",children:"Vladyslav Kochetkov"}),Object(q.jsx)(D.a,{className:"text-2xl",children:"Technical assessment for AWeber"}),e.children,Object(q.jsx)("div",{className:"border-t border-white my-4 opacity-50"}),Object(q.jsx)(D.a,{className:"text-2xl",children:"Technologies Used"}),Object(q.jsx)(D.a,{className:"text-lg",children:Object(q.jsxs)("ul",{className:"list-disc list-inside",children:[Object(q.jsx)("li",{children:"React - Create React App"}),Object(q.jsx)("li",{children:"TypeScript"}),Object(q.jsx)("li",{children:"React Router DOM"}),Object(q.jsx)("li",{children:"Redux"}),Object(q.jsx)("li",{children:"TailwindCSS"}),Object(q.jsx)("li",{children:"clsx - className formatting"}),Object(q.jsx)("li",{children:"Material UI"}),Object(q.jsx)("li",{children:"Lodash - Single instance"}),Object(q.jsx)("li",{children:"Prettier"}),Object(q.jsx)("li",{children:"ESLint"}),Object(q.jsx)("li",{children:"Husky - Git hooks"})]})})]})},Q=Object(H.a)((function(){return{submitButton:{background:"linear-gradient(45deg, #3e6695, #311c62)",color:"white !important",transition:"150ms ease-in all","&.Mui-disabled":{background:"gray",opacity:.7}}}})),X=function(){var e=Object(d.b)(),t=Q(),s=a.useState(""),r=Object(C.a)(s,2),c=r[0],i=r[1],l=a.useState(""),n=Object(C.a)(l,2),o=n[0],j=n[1],b=a.useRef(new J(c)).current;return Object(q.jsxs)("div",{className:"w-full flex",children:[Object(q.jsxs)(Z,{children:[Object(q.jsx)(D.a,{className:"text-lg mt-4",children:"This submission deviates from the assignment slightly. Instead of validating the inputs after the user clicks submit, the submit button is disabled until all of the mandatory criteria are met."}),Object(q.jsx)("div",{className:"mt-2",children:Object(q.jsx)(V.b,{to:"/AWeberAssessment/strictlyCompliant",children:Object(q.jsx)(F.a,{variant:"outlined",color:"primary",classes:{root:"text-white",outlinedPrimary:"border-white"},children:"View Strictly Compliant Version"})})})]}),Object(q.jsxs)("div",{className:"flex-3 flex items-center justify-center flex-col",children:[Object(q.jsxs)("div",{className:"flex items-center gap-2",children:[Object(q.jsx)("img",{src:"/AWeberAssessment/logo192.png",height:50,width:50}),Object(q.jsxs)("div",{className:"mt-2",children:[Object(q.jsx)(D.a,{className:"font-medium text-3xl leading-4",children:"AWeber"}),Object(q.jsx)(D.a,{className:"text-xl",children:"Assessment"})]})]}),Object(q.jsx)(D.a,{className:"text-2xl my-5",children:"Password Validation System"}),Object(q.jsxs)("div",{className:"flex w-full flex-col gap-2 max-w-xs",children:[Object(q.jsx)(z.a,{variant:"outlined",label:"Password",fullWidth:!0,onChange:function(e){var t=e.target.value;i(t),b.updatePassword(t)},type:"password"}),Object(q.jsx)(z.a,{variant:"outlined",label:"Password Confirmation",fullWidth:!0,type:"password",onChange:function(e){j(e.target.value)}})]}),Object(q.jsx)("div",{className:"flex w-full flex-col gap-2 max-w-sm mt-2 items-center",children:Object(q.jsxs)("div",{children:[Object(q.jsx)($,{toggled:c===o&&""!==c,label:"Passwords must match"}),Object(q.jsx)($,{toggled:b.meetsLengthRequirements(),label:"Must be at least 6 characters long"}),Object(q.jsx)($,{toggled:b.meetsUpperCaseRequirements(),label:"Must have at least 1 uppercase character"}),Object(q.jsx)($,{toggled:b.meetsLowerCaseRequirements(),label:"Must have at least 1 lowercase character"}),Object(q.jsx)($,{toggled:b.meetsNumericRequirements(),label:"Must have at least 1 number"}),Object(q.jsxs)("div",{className:"flex items-center",children:[Object(q.jsx)($,{toggled:b.meetsSpecialCharacterRequirements(),label:"Must have at least 1 special character"}),Object(q.jsx)("div",{className:"ml-2",children:Object(q.jsx)(E.a,{title:Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(D.a,{className:"text-base",children:"Allowed Special Characters:"}),Object(q.jsx)(D.a,{className:"text-base",children:"!@#$%^&*()_-+={[}]|:;\"'<,>"})]}),arrow:!0,children:Object(q.jsx)(Y.a,{className:"opacity-75"})})})]})]})})," ",Object(q.jsx)("div",{className:"flex w-full max-w-xs",children:Object(q.jsx)(F.a,{variant:"contained",color:"primary",fullWidth:!0,className:"mt-2",disabled:!b.isValidPassword()||c!==o,classes:{root:t.submitButton},onClick:function(){e(f({message:"Password is valid!"}))},children:"Submit"})})]})]})},ee=Object(H.a)((function(){return{submitButton:{background:"linear-gradient(45deg, #3e6695, #311c62)",color:"white !important",transition:"150ms ease-in all","&.Mui-disabled":{background:"gray",opacity:.7}}}})),te=function(){var e=Object(d.b)(),t=ee(),s=a.useState(""),r=Object(C.a)(s,2),c=r[0],i=r[1],l=a.useState(""),n=Object(C.a)(l,2),o=n[0],j=n[1],b=a.useRef(new J(c)).current;return Object(q.jsxs)("div",{className:"w-full flex",children:[Object(q.jsxs)(Z,{children:[Object(q.jsx)(D.a,{className:"text-lg mt-4",children:"This version of the submission tries to be strictly compliant with the assignment. There is an alternative version that uses live validation and displays what is incorrect, only allowing a submission once all fields are valid."}),Object(q.jsx)("div",{className:"mt-2",children:Object(q.jsx)(V.b,{to:"/AWeberAssessment/",children:Object(q.jsx)(F.a,{variant:"outlined",color:"primary",classes:{root:"text-white",outlinedPrimary:"border-white"},children:"View Live Validation Version"})})})]}),Object(q.jsxs)("div",{className:"flex-3 flex items-center justify-center flex-col",children:[Object(q.jsxs)("div",{className:"flex items-center gap-2",children:[Object(q.jsx)("img",{src:"/AWeberAssessment/logo192.png",height:50,width:50}),Object(q.jsxs)("div",{className:"mt-2",children:[Object(q.jsx)(D.a,{className:"font-medium text-3xl leading-4",children:"AWeber"}),Object(q.jsx)(D.a,{className:"text-xl",children:"Assessment"})]})]}),Object(q.jsx)(D.a,{className:"text-2xl my-5",children:"Password Validation System"}),Object(q.jsxs)("div",{className:"flex w-full flex-col gap-2 max-w-xs",children:[Object(q.jsx)(z.a,{variant:"outlined",label:"Password",fullWidth:!0,onChange:function(e){var t=e.target.value;i(t),b.updatePassword(t)},type:"password"}),Object(q.jsx)(z.a,{variant:"outlined",label:"Password Confirmation",fullWidth:!0,type:"password",onChange:function(e){j(e.target.value)}})]}),Object(q.jsx)("div",{className:"flex w-full max-w-xs",children:Object(q.jsx)(F.a,{variant:"contained",color:"primary",fullWidth:!0,className:"mt-2",classes:{root:t.submitButton},onClick:function(){return b.meetsLengthRequirements()?b.meetsLowerCaseRequirements()?b.meetsUpperCaseRequirements()?b.meetsNumericRequirements()?b.meetsSpecialCharacterRequirements()?c!==o?e(f({message:"Passwords do not match",alertSeverity:"error"})):void e(f({message:"Password is valid!"})):e(f({message:"Password must contain at least 1 special character - Allowed special characters !@#$%^&*()_-+={[}]|:;\"'<,>.",alertSeverity:"error"})):e(f({message:"Password must contain at least 1 number",alertSeverity:"error"})):e(f({message:"Password must contain at least 1 uppercase character",alertSeverity:"error"})):e(f({message:"Password must contain at least 1 lowercase character",alertSeverity:"error"})):e(f({message:"Password must be at least 6 characters long",alertSeverity:"error"}))},children:"Submit"})})]})]})},se=function(){return Object(q.jsx)(V.a,{children:Object(q.jsxs)(B.c,{children:[Object(q.jsx)(B.a,{path:"/AWeberAssessment/",exact:!0,children:Object(q.jsx)(X,{})}),Object(q.jsx)(B.a,{path:"/AWeberAssessment/strictlyCompliant",children:Object(q.jsx)(te,{})}),Object(q.jsx)(B.a,{path:"*",children:Object(q.jsx)(G,{})})]})})};s(99);i.a.render(Object(q.jsx)(T,{children:Object(q.jsx)(se,{})}),document.getElementById("root")),L()},99:function(e,t,s){}},[[100,1,2]]]);
//# sourceMappingURL=main.33dbd8c6.chunk.js.map