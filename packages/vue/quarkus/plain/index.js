import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"QuarkusPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#4695EB"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M81.98 26.121 64 36.504l17.98 10.379Zm-35.96 0v20.766L64 36.504Zm0 0 M81.98 46.887 64 36.504 46.02 46.883 64 57.27ZM27.059 58.965l17.98 10.379V48.582ZM45.04 90.11l17.983-10.383L45.04 69.344Zm0-41.528v20.762l17.983 10.383V58.965ZM82.96 90.11V69.343L64.978 79.727Zm17.981-31.145-17.98-10.383v20.762Zm0 0 M64.977 79.727 82.96 69.344V48.582L64.977 58.965Zm0 0 M103.023 5.602H24.977c-10.66 0-19.375 8.714-19.375 19.375v78.046c0 10.66 8.714 19.375 19.375 19.375h53.449L64 87.355l-10.469 22.13H24.977c-3.5 0-6.461-2.962-6.461-6.462V24.977c0-3.5 2.96-6.461 6.46-6.461h78.051c3.5 0 6.461 2.96 6.461 6.46v78.047c0 3.5-2.96 6.461-6.46 6.461H86.09l5.316 12.914h11.617c10.66 0 19.375-8.714 19.375-19.375V24.977c0-10.66-8.714-19.375-19.375-19.375Zm0 0"},null)])}});