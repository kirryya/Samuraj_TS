(self.webpackChunksamuraj_ts=self.webpackChunksamuraj_ts||[]).push([[3],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},8003:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(8281),s=t(8489),u=(t(2791),"Dialogs_dialogs__Npy93"),i="Dialogs_dialogsItems__HsTB-",a="Dialogs_active__Uf-rp",o="Dialogs_dialog__9gGFI",c="Dialogs_messages__ReD6B",l="Dialogs_message__ufsRR",d=t(184),f=function(e){return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:l,children:e.message})})},m=t(3504),g=function(e){return(0,d.jsx)("div",{className:o+" "+a,children:(0,d.jsx)(m.OL,{to:"/dialogs/"+e.id,children:e.name})})},p=t(5705),x=t(6151),h=t(7159),v=t(1686),j=function(e){var n=e.dialogs.map((function(e){return(0,d.jsx)(g,{id:e.id,name:e.name},e.id)})),t=e.messages.map((function(e){return(0,d.jsx)(f,{message:e.message},e.id)})),r=(0,p.TA)({initialValues:{newMessageText:""},validate:function(e){var n={};return e.newMessageText||(n.newMessageText="Required"),n},onSubmit:function(n){e.sendMessage(n.newMessageText),r.resetForm()}});return(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("div",{className:i,children:n}),(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("div",{children:t}),(0,d.jsx)("div",{children:(0,d.jsxs)("form",{onSubmit:r.handleSubmit,children:[r.touched.newMessageText&&r.errors.newMessageText&&(0,d.jsx)("div",{style:{color:"red"},children:r.errors.newMessageText}),(0,d.jsx)(h.Z,(0,s.Z)({id:"outlined-basic",label:"Enter your message",variant:"outlined"},r.getFieldProps("newMessageText"))),(0,d.jsx)(x.Z,{type:"submit",variant:"outlined",endIcon:(0,d.jsx)(v.Z,{}),style:{maxWidth:"100px",maxHeight:"50px",minWidth:"40px",minHeight:"56px"},children:"Send"})]})})]})]})},_=t(7375),b=t(2789),Z=t(8835),w=(0,b.qC)((0,_.$j)((function(e){return{dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages}}),(function(e){return{sendMessage:function(n){e((0,r.d)(n))}}})),Z.e)(j)},8835:function(e,n,t){"use strict";t.d(n,{e:function(){return l}});var r=t(8489);function s(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}t(2791);var u=t(6871),i=t(7375),a=t(184),o=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function l(e){return(0,i.$j)(c)((function(n){var t=n.isAuth,i=s(n,o);return t?(0,a.jsx)(e,(0,r.Z)({},i)):(0,a.jsx)(u.Fg,{to:"/login"})}))}},1686:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var s=r(t(5649)),u=t(184),i=(0,s.default)((0,u.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");n.Z=i},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return s.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return o},isMuiElement:function(){return c.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return g.Z},unstable_useId:function(){return p},unsupportedProp:function(){return x},useControlled:function(){return h.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return j.Z},useIsFocusVisible:function(){return _.Z}});var r=t(5902),s=t(4036),u=t(8949).Z,i=t(9201),a=t(3199);var o=function(e,n){return function(){return null}},c=t(9103),l=t(8301),d=t(7602);t(7462);var f=function(e,n){return function(){return null}},m=t(2971).Z,g=t(162),p=t(6248).Z;var x=function(e,n,t,r,s){return null},h=t(8744),v=t(9683),j=t(2071),_=t(3031),b={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}}}]);
//# sourceMappingURL=3.6d275d05.chunk.js.map