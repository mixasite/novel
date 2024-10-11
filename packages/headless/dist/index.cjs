'use client'
var Z=Object.create;var c=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var $=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,oo=Object.prototype.hasOwnProperty;var to=(t,o)=>{for(var e in o)c(t,e,{get:o[e],enumerable:!0})},B=(t,o,e,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of $(o))!oo.call(t,r)&&r!==e&&c(t,r,{get:()=>o[r],enumerable:!(n=_(o,r))||n.enumerable});return t};var eo=(t,o,e)=>(e=t!=null?Z(j(t)):{},B(o||!t||!t.__esModule?c(e,"default",{value:t,enumerable:!0}):e,t)),ro=t=>B(c({},"__esModule",{value:!0}),t);var no={};to(no,{EditorBubble:()=>I,EditorBubbleItem:()=>N,EditorCommand:()=>R,EditorCommandEmpty:()=>U,EditorCommandItem:()=>g,EditorCommandList:()=>L,EditorContent:()=>x,EditorRoot:()=>W,useEditor:()=>G.useCurrentEditor});module.exports=ro(no);var G=require("@tiptap/react"),bo=require("@tiptap/core");var D=require("@tiptap/react"),O=require("jotai"),E=require("react"),k=eo(require("tunnel-rat"),1);var M=require("jotai"),T=(0,M.createStore)();var P=require("jotai"),s=require("react"),f=require("cmdk");var y=require("jotai"),A=(0,y.atom)(""),b=(0,y.atom)(null);var d=require("react/jsx-runtime"),v=(0,s.createContext)({});var R=(0,s.forwardRef)(({children:t,className:o,...e},n)=>{let[r,m]=(0,P.useAtom)(A);return(0,d.jsx)(v.Consumer,{children:p=>(0,d.jsx)(p.In,{children:(0,d.jsxs)(f.Command,{ref:n,onKeyDown:w=>{w.stopPropagation()},id:"slash-command",className:o,...e,children:[(0,d.jsx)(f.Command.Input,{value:r,onValueChange:m,style:{display:"none"}}),t]})})})}),L=f.Command.List;R.displayName="EditorCommand";var u=require("react/jsx-runtime"),W=({children:t})=>{let o=(0,E.useRef)((0,k.default)()).current;return(0,u.jsx)(O.Provider,{store:T,children:(0,u.jsx)(v.Provider,{value:o,children:t})})},x=(0,E.forwardRef)(({className:t,children:o,initialContent:e,...n},r)=>(0,u.jsx)("div",{ref:r,className:t,children:(0,u.jsx)(D.EditorProvider,{...n,content:e,children:o})}));x.displayName="EditorContent";var a=require("@tiptap/react"),i=require("react"),h=require("react/jsx-runtime"),I=(0,i.forwardRef)(({children:t,tippyOptions:o,...e},n)=>{let{editor:r}=(0,a.useCurrentEditor)(),m=(0,i.useRef)(null);(0,i.useEffect)(()=>{!m.current||!o?.placement||(m.current.setProps({placement:o.placement}),m.current.popperInstance?.update())},[o?.placement]);let p=(0,i.useMemo)(()=>({shouldShow:({editor:l,state:X})=>{let{selection:S}=X,{empty:Y}=S;return!(!l.isEditable||l.isActive("image")||Y||(0,a.isNodeSelection)(S))},tippyOptions:{onCreate:l=>{m.current=l},moveTransition:"transform 0.15s ease-out",...o},...e}),[e,o]);return r?(0,h.jsx)("div",{ref:n,children:(0,h.jsx)(a.BubbleMenu,{editor:r,...p,children:t})}):null});I.displayName="EditorBubble";var H=require("react"),K=require("@radix-ui/react-slot"),q=require("@tiptap/react"),F=require("react/jsx-runtime"),N=(0,H.forwardRef)(({children:t,asChild:o,onSelect:e,...n},r)=>{let{editor:m}=(0,q.useCurrentEditor)(),p=o?K.Slot:"div";return m?(0,F.jsx)(p,{ref:r,...n,onClick:()=>e?.(m),children:t}):null});N.displayName="EditorBubbleItem";var J=require("react"),C=require("cmdk"),Q=require("@tiptap/react"),V=require("jotai");var z=require("react/jsx-runtime"),g=(0,J.forwardRef)(({children:t,onCommand:o,...e},n)=>{let{editor:r}=(0,Q.useCurrentEditor)(),m=(0,V.useAtomValue)(b);return!r||!m?null:(0,z.jsx)(C.CommandItem,{ref:n,...e,onSelect:()=>o({editor:r,range:m}),children:t})});g.displayName="EditorCommandItem";var U=C.CommandEmpty;0&&(module.exports={EditorBubble,EditorBubbleItem,EditorCommand,EditorCommandEmpty,EditorCommandItem,EditorCommandList,EditorContent,EditorRoot,useEditor});
