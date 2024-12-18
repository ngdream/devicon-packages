import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"VuestorefrontPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#5ecf7b"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M122 113.73v4.2c-.82 1.36-2.06 1.64-3.58 1.64-36.49-.03-72.99-.02-109.48-.03-.27 0-.54.01-.81 0-1.8-.08-2.78-1.07-2.73-2.87.04-1.29.2-2.57.3-3.86.91-11.38 1.8-22.74 2.7-34.11.93-11.69 1.87-23.38 2.81-35.07.73-9.12 1.46-18.23 2.21-27.35.15-1.87 1.05-2.64 2.94-2.67 1.08-.02 2.15-.01 3.23-.02 29.2 0 58.4-.01 87.6-.01 1.18.01 2.37 0 3.55.02 1.74.03 2.69.85 2.89 2.58.09.79-.07 1.61 0 2.4.31 3.16.7 6.31.99 9.47.37 4.07.68 8.14 1.02 12.21l1.92 23.3c1.17 14.2 2.33 28.39 3.53 42.59.21 2.54.6 5.06.91 7.58zM61.49 87.58c3.98-.03 7.84-.96 11.29-3.11 10.46-6.51 14.67-16.42 15.12-28.29.04-1.1-.5-1.83-1.74-1.88-1.38-.06-1.51.85-1.6 1.9-.19 2.16-.26 4.36-.71 6.47-1.45 6.77-4.44 12.71-10.05 17.04-4.86 3.75-10.21 5.59-16.42 4.12-7.83-1.85-12.62-7.11-15.94-14.02-2-4.18-2.87-8.65-2.96-13.28-.03-1.64-.87-2.5-2.05-2.19-1.17.31-1.36 1.24-1.32 2.28.22 6.92 1.98 13.39 5.88 19.16 4.9 7.21 11.46 11.58 20.5 11.8zM86 47.34c2.71 2.72 5.02 5.03 7.31 7.35.81.82 1.7 1.02 2.53.17.76-.78.6-1.69-.15-2.44-2.69-2.71-5.38-5.41-8.1-8.08-.82-.81-1.85-1.01-2.72-.17-2.81 2.73-5.59 5.5-8.31 8.32-.74.77-1 1.83-.02 2.63.9.74 1.77.45 2.54-.38 2.26-2.43 4.53-4.85 6.92-7.4z"},null),_createVNode("path",{d:"M105.85 8.76c1.41 1.34 1.18 3.14 1.34 4.83-29.2 0-58.4.01-87.6.01.38-1.67-.31-3.69 1.62-4.84h84.64z"},null)])}});