(self.webpackChunksamuraj_ts=self.webpackChunksamuraj_ts||[]).push([[204],{3204:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var s=r(1413),n=r(5671),o=r(3144),i=r(136),a=r(8557),u=r(2791),l=r(885),c="ProfileInfo_descriptionBlockContainer__FHaHk",d="ProfileInfo_descriptionBlock__hOTZu",f="ProfileInfo_profile__+gfm7",p="ProfileInfo_profileAva__V49w-",h="ProfileInfo_changeAvatar__NB3BH",x="ProfileInfo_back__UsoIg",m="ProfileInfo_wallpaper__Lhjwq",j="ProfileInfo_userPhoto__SrikJ",v="ProfileInfo_loading__wJtD2",b="ProfileInfo_contact__R8Aet",g=r(7412),P=r(3504),_=r(4353),k=r(4165),Z=r(5861),y="ProfileDataForm_descriptionBlockContainer__v5uqb",F="ProfileDataForm_descriptionBlock__4E1f9",w="ProfileDataForm_save__897sS",N=r(5705),S=r(184),A=function(e){var t=(0,N.TA)({initialValues:{aboutMe:e.profile.aboutMe,lookingForAJob:e.profile.lookingForAJob,fullName:e.profile.fullName,lookingForAJobDescription:e.profile.lookingForAJobDescription,contacts:{facebook:e.profile.contacts.facebook,website:e.profile.contacts.website,vk:e.profile.contacts.vk,twitter:e.profile.contacts.twitter,instagram:e.profile.contacts.instagram,youtube:e.profile.contacts.youtube,github:e.profile.contacts.github,mainLink:e.profile.contacts.mainLink}},onSubmit:function(){var t=(0,Z.Z)((0,k.Z)().mark((function t(r){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateProfile(r);case 2:e.onChange();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return(0,S.jsx)("div",{className:y,children:(0,S.jsxs)("form",{onSubmit:t.handleSubmit,className:F,children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"fullName",children:"FullName: "}),(0,S.jsx)("input",(0,s.Z)({id:"fullName",type:"text"},t.getFieldProps("fullName")))]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"aboutMe",children:"AboutMe: "}),(0,S.jsx)("input",(0,s.Z)({id:"aboutMe",type:"text"},t.getFieldProps("aboutMe")))]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"lookingForAJob",children:"LookingForAJob: "}),(0,S.jsx)("input",(0,s.Z)({id:"lookingForAJob",type:"checkbox"},t.getFieldProps("lookingForAJob")))]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"My professionals skills: "}),(0,S.jsx)("input",(0,s.Z)({id:"lookingForAJobDescription",type:"text"},t.getFieldProps("lookingForAJobDescription")))]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("b",{children:"Contact: "})," ",Object.keys(e.profile.contacts).map((function(e){return(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{children:(0,S.jsxs)("b",{children:[e,": "]})}),(0,S.jsx)("input",(0,s.Z)({id:e,type:e,placeholder:e},t.getFieldProps("contacts.".concat(e))),e)]},e)}))]}),(0,S.jsx)("button",{type:"submit",className:w,children:"Save"})]})})},I="ProfileStatusWithHooks_main__bIMZu",C="ProfileStatusWithHooks_status__LZ1J6",M=function(e){var t=(0,u.useState)(!1),r=(0,l.Z)(t,2),s=r[0],n=r[1],o=(0,u.useState)(e.status),i=(0,l.Z)(o,2),a=i[0],c=i[1];(0,u.useEffect)((function(){c(e.status)}),[e.status]);var d=function(){n(!1),e.updateStatus(a)};return(0,S.jsxs)("div",{className:I,children:[(0,S.jsx)("span",{children:(0,S.jsx)("b",{children:"Status (change on Double Click):"})}),!s&&(0,S.jsx)("div",{children:(0,S.jsxs)("span",{onDoubleClick:function(){n(!0)},className:C,children:[e.status||"No status"," "]})}),s&&(0,S.jsx)("div",{children:(0,S.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:d,onKeyPress:function(e){"Enter"===e.key&&d()},value:a})})]})},O=function(e){var t=(0,u.useState)(!1),r=(0,l.Z)(t,2),s=r[0],n=r[1];if(!e.profile)return(0,S.jsx)(g.Z,{});return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{children:(0,S.jsx)("img",{src:"https://storge.pic2.me/c/1360x800/323/582b0f346f341.jpg",alt:"background",className:m})}),e.isLoading?(0,S.jsx)("div",{className:v,children:(0,S.jsx)(g.Z,{})}):(0,S.jsxs)("div",{children:[e.isOwner?(0,S.jsx)("div",{className:x,children:(0,S.jsx)("button",{onClick:function(){n(!0)},children:"Edit Profile"})}):(0,S.jsx)(P.OL,{to:"/users",children:(0,S.jsx)("div",{className:x,children:"Back to Users"})}),(0,S.jsxs)("div",{className:f,children:[(0,S.jsxs)("div",{className:p,children:[(0,S.jsx)("img",{src:e.profile.photos.large||_,alt:"Avatar",className:j}),(0,S.jsxs)("div",{className:h,children:[(0,S.jsx)("b",{children:"Change Avatar: "}),e.isOwner&&(0,S.jsx)("input",{type:"file",onChange:function(t){t.currentTarget.files&&t.currentTarget.files.length&&e.savePhoto(t.currentTarget.files[0])}})]})]}),(0,S.jsx)("div",{children:s?(0,S.jsx)(A,{updateProfile:e.updateProfile,onChange:function(){n(!1)},profile:e.profile}):(0,S.jsx)(D,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,isLoading:e.isLoading,error:e.error})})]})]})]})},D=function(e){return(0,S.jsx)("div",{className:c,children:(0,S.jsxs)("div",{className:d,children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("b",{children:"Full name:"})," ",e.profile.fullName]}),(0,S.jsx)(M,{status:e.status,updateStatus:e.updateStatus}),(0,S.jsxs)("div",{children:[(0,S.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("b",{children:"Looking for a job:"})," ",e.profile.lookingForAJob?"Yes":"No"," "]}),e.profile.lookingForAJob&&(0,S.jsxs)("div",{children:[(0,S.jsx)("b",{children:"My professionals skills:"})," ",e.profile.lookingForAJobDescription]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("b",{children:"Contact: "})," ",Object.keys(e.profile.contacts).map((function(t){return(0,S.jsx)(T,{title:t,value:e.profile&&e.profile.contacts[t]},t)}))]}),(0,S.jsx)("div",{style:{color:"red"},children:e.error&&e.error})]})})},T=function(e){var t=e.title,r=e.value;return(0,S.jsxs)("div",{className:b,children:[(0,S.jsxs)("b",{children:[t,": "]})," ",r]})},J=r(81),L="MyPosts_postsBlock__foanX",E="MyPosts_posts__N-3qo",B="Post_item__wqc3I",U=function(e){return(0,S.jsxs)("div",{className:B,children:[(0,S.jsx)("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",alt:"Avatar"}),e.message,(0,S.jsxs)("div",{children:[(0,S.jsx)("span",{children:e.likeCount}),(0,S.jsx)("span",{children:" likes"})]})]})},H=r(5061),q=r(6151),R=r(1686),W=function(e){var t=e.posts.map((function(e){return(0,S.jsx)(U,{message:e.message,likeCount:e.likeCount},e.id)})),r=(0,N.TA)({initialValues:{newPostText:""},validate:function(e){var t={};return e.newPostText||(t.newPostText="Required"),t},onSubmit:function(t){e.addPosts(t.newPostText),r.resetForm()}});return(0,S.jsxs)("div",{className:L,children:[(0,S.jsx)("h3",{children:"My posts"}),(0,S.jsx)("div",{children:(0,S.jsxs)("form",{onSubmit:r.handleSubmit,children:[r.touched.newPostText&&r.errors.newPostText&&(0,S.jsx)("div",{style:{color:"red"},children:r.errors.newPostText}),(0,S.jsx)(H.Z,(0,s.Z)({id:"outlined-basic",label:"Enter your post",variant:"outlined"},r.getFieldProps("newPostText"))),(0,S.jsx)(q.Z,{type:"submit",variant:"outlined",endIcon:(0,S.jsx)(R.Z,{}),style:{maxWidth:"100px",maxHeight:"50px",minWidth:"131px",minHeight:"56px"},children:"Add Post"})]})}),(0,S.jsx)("div",{className:E,children:t})]})},z=r(364),V=(0,z.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPosts:function(t){e((0,J.Pi)(t))}}}))(W),G=function(e){return(0,S.jsxs)("div",{children:[(0,S.jsx)(O,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,isLoading:e.isLoading,updateProfile:e.updateProfile,error:e.error}),(0,S.jsx)(V,{})]})},$=r(6024),Y=r(7781),K=r(6871);var X=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userID;e||(e=this.props.authorizedUserId)||(e=this.props.history.push("/login")),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,r){this.props.router.params.userID!==e.router.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,S.jsx)(G,(0,s.Z)((0,s.Z)({},this.props),{},{isOwner:!this.props.router.params.userID,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,isLoading:this.props.isLoading,updateProfile:this.props.updateProfile,error:this.props.error}))}}]),r}(u.Component),Q=(0,Y.qC)((0,z.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.data.id,isAuth:e.auth.isAuth,isLoading:e.profilePage.isLoading,error:e.app.error}}),{getUserProfile:J.et,getStatus:J.lR,updateStatus:J.Nf,savePhoto:J.Ju,updateProfile:J.ck}),(function(e){return function(t){var r=(0,K.TH)(),n=(0,K.s0)(),o=(0,K.UO)();return(0,S.jsx)(e,(0,s.Z)((0,s.Z)({},t),{},{router:{location:r,navigate:n,params:o}}))}}),$.e)(X)},6024:function(e,t,r){"use strict";r.d(t,{e:function(){return c}});var s=r(1413),n=r(3366);r(2791);var o=r(6871),i=r(364),a=r(184),u=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,i.$j)(l)((function(t){var r=t.isAuth,i=function(e,t){if(null==e)return{};var r,s,o=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,u);return r?(0,a.jsx)(e,(0,s.Z)({},i)):(0,a.jsx)(o.Fg,{to:"/login"})}))}},1686:function(e,t,r){"use strict";var s=r(4836);t.Z=void 0;var n=s(r(5649)),o=r(184),i=(0,n.default)((0,o.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=i},5649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.createSvgIcon}});var s=r(4454)},4454:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return n.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return P},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return x},unsupportedProp:function(){return m},useControlled:function(){return j.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return g.Z}});var s=r(5902),n=r(4036),o=r(8949).Z,i=r(9201),a=r(3199);var u=function(e,t){return function(){return null}},l=r(9103),c=r(8301),d=r(7602);r(7462);var f=function(e,t){return function(){return null}},p=r(2971).Z,h=r(162),x=r(6248).Z;var m=function(e,t,r,s,n){return null},j=r(8744),v=r(9683),b=r(2071),g=r(3031),P={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),s.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=204.99100e68.chunk.js.map