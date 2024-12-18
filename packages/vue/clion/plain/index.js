import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"ClionPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#21d789"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M50.09 5.484 16.297 26.781 5.484 91.527l37.95 27.621 16.25-14.654L74.813 116.2l29.257 6.317 18.446-41.754-21.446-7.994v28.302H26.93V26.93h74.14v37.037l19.118-23.408-15.06-30.61-28.425 10.285L50.09 5.484zM27.93 27.93v72.14h72.14V27.93H27.93zm21.09 8.117a14.282 14.282 0 0 1 10.898 4.266l-3.842 4.476a10.222 10.222 0 0 0-7.086-3.121c-4.656 0-8.008 3.863-8.008 8.605v.086c0 4.743 3.278 8.692 8.008 8.692 3.172 0 5.1-1.22 7.319-3.242l3.798 3.925a14.138 14.138 0 0 1-11.345 4.875 13.94 13.94 0 0 1-10.082-4.09 13.94 13.94 0 0 1-4.082-10.085v-.075a14.06 14.06 0 0 1 4.156-10.234 14.06 14.06 0 0 1 10.266-4.078zm15.042.453h6.094v22.418h12.008V64H64.062V36.5zM36.547 86.746h27.43v4.574h-27.43v-4.574z"},null)])}});