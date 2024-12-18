import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"JiraOriginalIcon",props:{size:{type:[String,Number],default:"1em"}},render(){const a={width:this.size,height:this.size};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("defs",null,[_createVNode("linearGradient",{id:"jira-original-a",gradientTransform:"scale(4)",gradientUnits:"userSpaceOnUse",x1:"22.034",x2:"17.118",y1:"9.773",y2:"14.842"},[_createVNode("stop",{offset:".176",stopColor:"#0052cc"},null),_createVNode("stop",{offset:"1",stopColor:"#2684ff"},null)]),_createVNode("linearGradient",{id:"jira-original-b",gradientTransform:"scale(4)",gradientUnits:"userSpaceOnUse",x1:"16.641",x2:"10.957",y1:"15.564",y2:"21.094"},[_createVNode("stop",{offset:".176",stopColor:"#0052cc"},null),_createVNode("stop",{offset:"1",stopColor:"#2684ff"},null)])]),_createVNode("path",{d:"M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0",fill:"#2684ff"},null),_createVNode("path",{d:"M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0",fill:"url(#jira-original-a)"},null),_createVNode("path",{d:"M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0",fill:"url(#jira-original-b)"},null)])}});