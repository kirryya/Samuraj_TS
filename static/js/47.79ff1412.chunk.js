(self.webpackChunksamuraj_ts=self.webpackChunksamuraj_ts||[]).push([[47],{5318:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},7047:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return F}});var n=r(8489),s=r(7853),u=r(4531),i=r(8932),o=r(2587),a=r(2791),c="ProfileInfo_descriptionBlock__hOTZu",l="ProfileInfo_wallpaper__Lhjwq",f="ProfileInfo_userPhoto__SrikJ",p=r(7412),d=r(3430),h=r(184),m=function(t){var e=(0,a.useState)(!1),r=(0,d.Z)(e,2),n=r[0],s=r[1],u=(0,a.useState)(t.status),i=(0,d.Z)(u,2),o=i[0],c=i[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,h.jsxs)("div",{children:[!n&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"------"})}),n&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(o)},value:o})})]})},v=r(4353),x=function(t){if(!t.profile)return(0,h.jsx)(p.Z,{});return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"https://storge.pic2.me/c/1360x800/323/582b0f346f341.jpg",alt:"background",className:l})}),(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("img",{src:t.profile.photos.large||v,alt:"Avatar",className:f}),(0,h.jsx)("div",{children:t.isOwner&&(0,h.jsx)("input",{type:"file",onChange:function(e){e.currentTarget.files&&e.currentTarget.files.length&&t.savePhoto(e.currentTarget.files[0])}})}),(0,h.jsx)(m,{status:t.status,updateStatus:t.updateStatus}),(0,h.jsxs)("div",{children:["\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f: ",t.profile.fullName]}),(0,h.jsxs)("div",{children:["\u041f\u0440\u043e \u043c\u0435\u043d\u044f: ",t.profile.aboutMe]}),(0,h.jsxs)("div",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",t.profile.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"," "]}),(0,h.jsxs)("div",{children:["\u041a\u0430\u043a\u0443\u044e \u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",t.profile.lookingForAJobDescription]})]})]})},j=r(81),g="MyPosts_postsBlock__foanX",P="MyPosts_posts__N-3qo",Z="Post_item__wqc3I",b=function(t){return(0,h.jsxs)("div",{className:Z,children:[(0,h.jsx)("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",alt:"Avatar"}),t.message,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:t.likeCount}),(0,h.jsx)("span",{children:" likes"})]})]})},y=r(7159),_=r(6151),k=r(1686),w=r(5705),S=function(t){var e=t.posts.map((function(t){return(0,h.jsx)(b,{message:t.message,likeCount:t.likeCount},t.id)})),r=(0,w.TA)({initialValues:{newPostText:""},validate:function(t){var e={};return t.newPostText||(e.newPostText="Required"),e},onSubmit:function(e){t.addPosts(e.newPostText),r.resetForm()}});return(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)("div",{children:(0,h.jsxs)("form",{onSubmit:r.handleSubmit,children:[r.touched.newPostText&&r.errors.newPostText&&(0,h.jsx)("div",{style:{color:"red"},children:r.errors.newPostText}),(0,h.jsx)(y.Z,(0,n.Z)({id:"outlined-basic",label:"Enter your post",variant:"outlined"},r.getFieldProps("newPostText"))),(0,h.jsx)(_.Z,{type:"submit",variant:"outlined",endIcon:(0,h.jsx)(k.Z,{}),style:{maxWidth:"100px",maxHeight:"50px",minWidth:"131px",minHeight:"56px"},children:"Add Post"})]})}),(0,h.jsx)("div",{className:P,children:e})]})},T=r(7375),I=(0,T.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPosts:function(e){t((0,j.Pi)(e))}}}))(S),C=function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)(x,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner,savePhoto:t.savePhoto}),(0,h.jsx)(I,{})]})},O=r(8835),N=r(2789),A=r(6871);var M=function(t){(0,i.Z)(r,t);var e=(0,o.Z)(r);function r(){return(0,s.Z)(this,r),e.apply(this,arguments)}return(0,u.Z)(r,[{key:"refreshProfile",value:function(){var t=this.props.router.params.userID;t||(t=this.props.authorizedUserId)||(t=this.props.history.push("/login")),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,r){this.props.router.params.userID!=t.router.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(C,(0,n.Z)((0,n.Z)({},this.props),{},{isOwner:!this.props.router.params.userID,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),r}(a.Component),F=(0,N.qC)((0,T.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.data.id,isAuth:t.auth.isAuth}}),{getUserProfile:j.et,getStatus:j.lR,updateStatus:j.Nf,savePhoto:j.Ju}),(function(t){return function(e){var r=(0,A.TH)(),s=(0,A.s0)(),u=(0,A.UO)();return(0,h.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{router:{location:r,navigate:s,params:u}}))}}),O.e)(M)},8835:function(t,e,r){"use strict";r.d(e,{e:function(){return l}});var n=r(8489);function s(t,e){if(null==t)return{};var r,n,s=function(t,e){if(null==t)return{};var r,n,s={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}r(2791);var u=r(6871),i=r(7375),o=r(184),a=["isAuth"],c=function(t){return{isAuth:t.auth.isAuth}};function l(t){return(0,i.$j)(c)((function(e){var r=e.isAuth,i=s(e,a);return r?(0,o.jsx)(t,(0,n.Z)({},i)):(0,o.jsx)(u.Fg,{to:"/login"})}))}},1686:function(t,e,r){"use strict";var n=r(5318);e.Z=void 0;var s=n(r(5649)),u=r(184),i=(0,s.default)((0,u.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");e.Z=i},5649:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(4454)},4454:function(t,e,r){"use strict";r.r(e),r.d(e,{capitalize:function(){return s.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return i.Z},debounce:function(){return o.Z},deprecatedPropType:function(){return a},isMuiElement:function(){return c.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return p},setRef:function(){return d},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m},unsupportedProp:function(){return v},useControlled:function(){return x.Z},useEventCallback:function(){return j.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return P.Z}});var n=r(5902),s=r(4036),u=r(8949).Z,i=r(9201),o=r(3199);var a=function(t,e){return function(){return null}},c=r(9103),l=r(8301),f=r(7602);r(7462);var p=function(t,e){return function(){return null}},d=r(2971).Z,h=r(162),m=r(6248).Z;var v=function(t,e,r,n,s){return null},x=r(8744),j=r(9683),g=r(2071),P=r(3031),Z={configure:function(t){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.Z.configure(t)}}}}]);
//# sourceMappingURL=47.79ff1412.chunk.js.map