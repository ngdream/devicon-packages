import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"VercelOriginalIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#000"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M64.002 8.576 128 119.424H0Zm0 0"},null)])}});