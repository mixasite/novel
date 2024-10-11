'use client'
var dt=Object.create;var f=Object.defineProperty;var ct=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames;var pt=Object.getPrototypeOf,ut=Object.prototype.hasOwnProperty;var ft=(t,e)=>{for(var r in e)f(t,r,{get:e[r],enumerable:!0})},C=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of lt(e))!ut.call(t,n)&&n!==r&&f(t,n,{get:()=>e[n],enumerable:!(o=ct(e,n))||o.enumerable});return t};var s=(t,e,r)=>(r=t!=null?dt(pt(t)):{},C(e||!t||!t.__esModule?f(r,"default",{value:t,enumerable:!0}):r,t)),gt=t=>C(f({},"__esModule",{value:!0}),t);var Nt={};ft(Nt,{AIHighlight:()=>wt,CharacterCount:()=>nt.default,CodeBlockLowlight:()=>it.default,Color:()=>G.Color,Command:()=>Ht,CustomKeymap:()=>A,GlobalDragHandle:()=>at.default,HighlightExtension:()=>Ot,HorizontalRule:()=>vt,ImageResizer:()=>I,InputRule:()=>w.InputRule,MarkdownExtension:()=>Lt,Mathematics:()=>v,Placeholder:()=>Mt,StarterKit:()=>rt.default,TaskItem:()=>j.TaskItem,TaskList:()=>J.TaskList,TextStyle:()=>tt.default,TiptapImage:()=>Q.default,TiptapLink:()=>Y.default,TiptapUnderline:()=>et.default,Twitter:()=>O,UpdatedImage:()=>P,Youtube:()=>st.default,addAIHighlight:()=>Et,createSuggestionItems:()=>It,handleCommandNavigation:()=>kt,inputRegex:()=>z,pasteRegex:()=>K,removeAIHighlight:()=>Ct,renderItems:()=>St});module.exports=gt(Nt);var w=require("@tiptap/core"),G=require("@tiptap/extension-color"),F=s(require("@tiptap/extension-highlight"),1),X=s(require("@tiptap/extension-horizontal-rule"),1),Q=s(require("@tiptap/extension-image"),1),Y=s(require("@tiptap/extension-link"),1),Z=s(require("@tiptap/extension-placeholder"),1),j=require("@tiptap/extension-task-item"),J=require("@tiptap/extension-task-list"),tt=s(require("@tiptap/extension-text-style"),1),et=s(require("@tiptap/extension-underline"),1),rt=s(require("@tiptap/starter-kit"),1),ot=require("tiptap-markdown");var E=require("@tiptap/core"),ht=E.Extension.create({name:"CustomKeymap",addCommands(){return{selectTextWithinNodeBoundaries:()=>({editor:t,commands:e})=>{let{state:r}=t,{tr:o}=r,n=o.selection.$from.start(),i=o.selection.$to.end();return e.setTextSelection({from:n,to:i})}}},addKeyboardShortcuts(){return{"Mod-a":({editor:t})=>{let{state:e}=t,{tr:r}=e,o=r.selection.from,n=r.selection.to,i=r.selection.$from.start(),a=r.selection.$to.end();return o>i||n<a?(t.chain().selectTextWithinNodeBoundaries().run(),!0):!1}}}}),A=ht;var H=require("@tiptap/react"),S=s(require("react-moveable"),1),k=require("react/jsx-runtime"),I=()=>{let{editor:t}=(0,H.useCurrentEditor)();if(!t?.isActive("image"))return null;let e=()=>{let r=document.querySelector(".ProseMirror-selectednode");if(r){let o=t.state.selection,n=t.commands.setImage;n({src:r.src,width:Number(r.style.width.replace("px","")),height:Number(r.style.height.replace("px",""))}),t.commands.setNodeSelection(o.from)}};return(0,k.jsx)(S.default,{target:document.querySelector(".ProseMirror-selectednode"),container:null,origin:!1,edge:!1,throttleDrag:0,keepRatio:!0,resizable:!0,throttleResize:0,onResize:({target:r,width:o,height:n,delta:i})=>{i[0]&&(r.style.width=`${o}px`),i[1]&&(r.style.height=`${n}px`)},onResizeEnd:()=>{e()},scalable:!0,throttleScale:0,renderDirections:["w","e"],onScale:({target:r,transform:o})=>{r.style.transform=o}})};var p=require("@tiptap/core"),h=require("@tiptap/react"),M=require("react-tweet"),g=require("react/jsx-runtime"),yt=/(https?:\/\/)?(www\.)?x\.com\/([a-zA-Z0-9_]{1,15})(\/status\/(\d+))?(\/\S*)?/g,xt=/^https?:\/\/(www\.)?x\.com\/([a-zA-Z0-9_]{1,15})(\/status\/(\d+))?(\/\S*)?$/,Tt=t=>t.match(xt),Rt=({node:t})=>{let r=t?.attrs?.src?.split("/").pop();return r?(0,g.jsx)(h.NodeViewWrapper,{children:(0,g.jsx)("div",{"data-twitter":"",children:(0,g.jsx)(M.Tweet,{id:r})})}):null},O=p.Node.create({name:"twitter",addOptions(){return{addPasteHandler:!0,HTMLAttributes:{},inline:!1,origin:""}},addNodeView(){return(0,h.ReactNodeViewRenderer)(Rt,{attrs:this.options.HTMLAttributes})},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null}}},parseHTML(){return[{tag:"div[data-twitter]"}]},addCommands(){return{setTweet:t=>({commands:e})=>Tt(t.src)?e.insertContent({type:this.name,attrs:t}):!1}},addPasteRules(){return this.options.addPasteHandler?[(0,p.nodePasteRule)({find:yt,type:this.type,getAttributes:t=>({src:t.input})})]:[]},renderHTML({HTMLAttributes:t}){return["div",(0,p.mergeAttributes)({"data-twitter":""},t)]}});var Dt=require("katex/dist/katex.min.css"),y=require("@tiptap/core"),Wt=require("@tiptap/pm/state"),L=s(require("katex"),1),v=y.Node.create({name:"math",inline:!0,group:"inline",atom:!0,selectable:!0,marks:"",addAttributes(){return{latex:""}},addOptions(){return{shouldRender:(t,e)=>{let r=t.doc.resolve(e);return r.parent.isTextblock?r.parent.type.name!=="codeBlock":!1},katexOptions:{throwOnError:!1},HTMLAttributes:{}}},addCommands(){return{setLatex:({latex:t})=>({chain:e,state:r})=>{if(!t)return!1;let{from:o,to:n,$anchor:i}=r.selection;return this.options.shouldRender(r,i.pos)?e().insertContentAt({from:o,to:n},{type:"math",attrs:{latex:t}}).setTextSelection({from:o,to:o+1}).run():!1},unsetLatex:()=>({editor:t,state:e,chain:r})=>{let o=t.getAttributes(this.name).latex;if(typeof o!="string")return!1;let{from:n,to:i}=e.selection;return r().command(({tr:a})=>(a.insertText(o,n,i),!0)).setTextSelection({from:n,to:n+o.length}).run()}}},parseHTML(){return[{tag:`span[data-type="${this.name}"]`}]},renderHTML({node:t,HTMLAttributes:e}){let r=t.attrs.latex??"";return["span",(0,y.mergeAttributes)(e,{"data-type":this.name}),r]},renderText({node:t}){return t.attrs.latex??""},addNodeView(){return({node:t,HTMLAttributes:e,getPos:r,editor:o})=>{let n=document.createElement("span"),i=t.attrs.latex??"";return Object.entries(this.options.HTMLAttributes).forEach(([a,m])=>{n.setAttribute(a,m)}),Object.entries(e).forEach(([a,m])=>{n.setAttribute(a,m)}),n.addEventListener("click",a=>{if(o.isEditable&&typeof r=="function"){let m=r(),mt=t.nodeSize;o.commands.setTextSelection({from:m,to:m+mt})}}),n.contentEditable="false",n.innerHTML=L.default.renderToString(i,this.options.katexOptions),{dom:n}}}});var N=s(require("@tiptap/extension-image"),1),bt=N.default.extend({name:"image",addAttributes(){return{...this.parent?.(),width:{default:null},height:{default:null}}}}),P=bt;var nt=s(require("@tiptap/extension-character-count"),1),it=s(require("@tiptap/extension-code-block-lowlight"),1),st=s(require("@tiptap/extension-youtube"),1),at=s(require("tiptap-extension-global-drag-handle"),1);var d=require("@tiptap/core"),z=/(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/,K=/(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g,wt=d.Mark.create({name:"ai-highlight",addOptions(){return{HTMLAttributes:{}}},addAttributes(){return{color:{default:null,parseHTML:t=>t.getAttribute("data-color")||t.style.backgroundColor,renderHTML:t=>t.color?{"data-color":t.color,style:`background-color: ${t.color}; color: inherit`}:{}}}},parseHTML(){return[{tag:"mark"}]},renderHTML({HTMLAttributes:t}){return["mark",(0,d.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setAIHighlight:t=>({commands:e})=>e.setMark(this.name,t),toggleAIHighlight:t=>({commands:e})=>e.toggleMark(this.name,t),unsetAIHighlight:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-h":()=>this.editor.commands.toggleAIHighlight()}},addInputRules(){return[(0,d.markInputRule)({find:z,type:this.type})]},addPasteRules(){return[(0,d.markPasteRule)({find:K,type:this.type})]}}),Ct=t=>{let e=t.state.tr;e.removeMark(0,t.state.doc.nodeSize-2,t.state.schema.marks["ai-highlight"]),t.view.dispatch(e)},Et=(t,e)=>{t.chain().setAIHighlight({color:e??"#c1ecf970"}).run()};var V=require("@tiptap/core"),_=require("@tiptap/react"),q=s(require("@tiptap/suggestion"),1),U=s(require("tippy.js"),1);var u=require("jotai"),c=require("react"),x=require("cmdk");var T=require("jotai"),R=(0,T.atom)(""),$=(0,T.atom)(null);var D=require("jotai"),b=(0,D.createStore)();var l=require("react/jsx-runtime"),W=(0,c.createContext)({}),B=({query:t,range:e})=>{let r=(0,u.useSetAtom)(R,{store:b}),o=(0,u.useSetAtom)($,{store:b});return(0,c.useEffect)(()=>{r(t)},[t,r]),(0,c.useEffect)(()=>{o(e)},[e,o]),(0,c.useEffect)(()=>{let n=["ArrowUp","ArrowDown","Enter"],i=a=>{if(n.includes(a.key)){a.preventDefault();let m=document.querySelector("#slash-command");return m&&m.dispatchEvent(new KeyboardEvent("keydown",{key:a.key,cancelable:!0,bubbles:!0})),!1}};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[]),(0,l.jsx)(W.Consumer,{children:n=>(0,l.jsx)(n.Out,{})})},At=(0,c.forwardRef)(({children:t,className:e,...r},o)=>{let[n,i]=(0,u.useAtom)(R);return(0,l.jsx)(W.Consumer,{children:a=>(0,l.jsx)(a.In,{children:(0,l.jsxs)(x.Command,{ref:o,onKeyDown:m=>{m.stopPropagation()},id:"slash-command",className:e,...r,children:[(0,l.jsx)(x.Command.Input,{value:n,onValueChange:i,style:{display:"none"}}),t]})})})}),Qt=x.Command.List;At.displayName="EditorCommand";var Ht=V.Extension.create({name:"slash-command",addOptions(){return{suggestion:{char:"/",command:({editor:t,range:e,props:r})=>{r.command({editor:t,range:e})}}}},addProseMirrorPlugins(){return[(0,q.default)({editor:this.editor,...this.options.suggestion})]}}),St=t=>{let e=null,r=null;return{onStart:o=>{e=new _.ReactRenderer(B,{props:o,editor:o.editor});let{selection:n}=o.editor.state;if(n.$from.node(n.$from.depth).type.name==="codeBlock")return!1;r=(0,U.default)("body",{getReferenceClientRect:o.clientRect,appendTo:()=>t?t.current:document.body,content:e.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start"})},onUpdate:o=>{e?.updateProps(o),r?.[0]?.setProps({getReferenceClientRect:o.clientRect})},onKeyDown:o=>o.event.key==="Escape"?(r?.[0]?.hide(),!0):e?.ref?.onKeyDown(o),onExit:()=>{r?.[0]?.destroy(),e?.destroy()}}},It=t=>t,kt=t=>{if(["ArrowUp","ArrowDown","Enter"].includes(t.key)&&document.querySelector("#slash-command"))return!0};var Mt=Z.default.configure({placeholder:({node:t})=>t.type.name==="heading"?`Heading ${t.attrs.level}`:"Press '/' for commands",includeChildren:!0}),Ot=F.default.configure({multicolor:!0}),Lt=ot.Markdown.configure({html:!1,transformCopiedText:!0}),vt=X.default.extend({addInputRules(){return[new w.InputRule({find:/^(?:---|—-|___\s|\*\*\*\s)$/u,handler:({state:t,range:e})=>{let r={},{tr:o}=t,n=e.from,i=e.to;o.insert(n-1,this.type.create(r)).delete(o.mapping.map(n),o.mapping.map(i))}})]}});0&&(module.exports={AIHighlight,CharacterCount,CodeBlockLowlight,Color,Command,CustomKeymap,GlobalDragHandle,HighlightExtension,HorizontalRule,ImageResizer,InputRule,MarkdownExtension,Mathematics,Placeholder,StarterKit,TaskItem,TaskList,TextStyle,TiptapImage,TiptapLink,TiptapUnderline,Twitter,UpdatedImage,Youtube,addAIHighlight,createSuggestionItems,handleCommandNavigation,inputRegex,pasteRegex,removeAIHighlight,renderItems});