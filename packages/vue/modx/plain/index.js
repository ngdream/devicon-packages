import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"ModxPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#00decc"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("g",null,[_createVNode("path",{d:"M123.9 13.9H64.6l-6.4 10.5L100.9 51zM99.3 53.4L17.1 2.1v59.3l12.8 8zM74 102.7l36.9 23.2V66.6l-10.3-6.5zM28.7 74.6L4.1 114.1h59.3l34.7-55.5z"},null)])])}});