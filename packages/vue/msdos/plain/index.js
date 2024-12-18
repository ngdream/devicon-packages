import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"MsdosPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#000"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M7.818 0v47.88H3.85V128h40.664v-3.969h7.215V128h28.63v-3.969h3.373V128h24.537v-3.969h8.063v-3.969h3.85v-3.968h3.97V87.82h-3.968v-3.85h-3.852v-3.966h-8.063v-3.73h11.913v-3.85h3.968V60.15h-3.968V55.7h-3.85v-3.85h-8.057v-3.366h3.85v-4.213h4.207V31.76h-4.207v-3.85h-3.85v-3.85h-8.183v-3.73h16.24V8.178h-4.207v-4.21h-8.063V0h-20.33v3.97h-8.058v4.214h-3.852v16.359h3.852v3.85h8.056v3.367H71.823v12.51h3.852v3.61h-7.219V0H51.731v3.97h-3.85v8.18h-3.85v7.7h-4.209v8.058h-3.61V19.85h-3.85v-7.7h-3.97V3.97H24.18V0H7.819zM24.18 36.57h3.728v7.7h3.85v3.61H24.18V36.57zm24.183 0h3.365v11.311H47.88v3.969h-3.365v-7.58h3.85v-7.7zm27.79 11.914h3.73v3.366h-3.73v-3.366zm23.94 19.606h3.489v4.334h4.09v3.365l-7.578-.002V68.09zM24.18 76.27h7.578l.002 19.852h3.968v7.7H24.18V76.271zm40.058 0h3.612l-.002 4.335h3.968v3.85h3.852v3.849h4.213v3.367h-8.063v3.969H67.85v4.093h-3.612V76.271zm32.004 19.852h7.34v3.611h-7.34v-3.611z"},null)])}});