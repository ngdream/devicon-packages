import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"BulmaPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#00d1b2"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"},null)])}});