import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"VertxLineIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#782a91"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M17.205 0A17.177 17.177 0 0 0 0 17.205v9.365l.445.448H17.34l19.185 43.58.817.004 19.916-43.584h22.69l14.34 20.902h.735l14.301-20.902H128v-9.813C128 7.681 120.32 0 110.795 0h-93.59zm0 .893h93.59a16.268 16.268 0 0 1 16.312 16.312v8.92h-18.02l-.368.193-14.065 20.56-14.103-20.56-.37-.193h-23.28l-.366.701-.105-.15-19.49 42.646-18.9-42.931-.408-.266H.893v-8.92A16.268 16.268 0 0 1 17.205.893zM.855 32.38 0 32.56v78.234C0 120.319 7.68 128 17.205 128h93.59c9.524 0 17.205-7.68 17.205-17.205v-10.73h-20.765L99.138 88.05l10.334-14.824 17.435 24.498H128V33.588h-1.092L102.67 67.814 93.5 80.766l-13.666 19.296h-7.113a17.558 17.558 0 0 0-5.903-12.314l16.86-23.807v-.517l-15.08-21.19-.772.075-19.37 42.394a17.567 17.567 0 0 0-10.845 15.934h-6.703l-3.658-8.31L.855 32.38zm.038 2.303 25.539 58.004 3.775 8.576.41.265h7.412l.448-.48a18.744 18.744 0 0 1-.012-.156 16.713 16.713 0 0 1 10.51-15.467l.24-.23 19.103-41.81 14.448 20.298L65.877 87.53l.076.602a16.713 16.713 0 0 1 5.932 12.387l.445.435h7.734l.366-.187 13.8-19.487 9.17-12.95 23.707-33.48v61.61l-17.275-24.272-.73.004L98.23 87.791l-.003.506 8.398 12.465.37.193h20.112v9.842a16.268 16.268 0 0 1-16.312 16.312h-93.59A16.268 16.268 0 0 1 .893 110.795V34.684zM55.18 89.746c-6.156 0-11.159 5-11.159 11.156 0 6.157 5.002 11.157 11.159 11.157 6.157 0 11.152-5 11.152-11.157 0-6.156-4.996-11.156-11.152-11.156zm0 .893c5.673 0 10.261 4.59 10.261 10.263a10.256 10.256 0 0 1-10.261 10.266 10.259 10.259 0 0 1-10.268-10.266A10.26 10.26 0 0 1 55.18 90.641v-.002z"},null)])}});