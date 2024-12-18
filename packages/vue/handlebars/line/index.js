import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"HandlebarsLineIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#000000"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M49.591 47.857a18.793 18.793 0 0 0-3.095.03l.006-.001c-12.754 1.009-17.979 7.72-20.958 10.383-1.568 1.402-3.741 3.716-5.985 5.523-1.121.904-2.26 1.678-3.314 2.142-1.054.464-2 .61-2.799.363-1.75-.545-2.863-1.868-3.392-3.231-.529-1.364-.382-2.722.074-3.216.623-.673 1.09-.861 1.419-.84.323.019.662.259 1.02.77.48.886.731 1.878.715 2.886l-.018 1.072.83-.68a7.751 7.751 0 0 0 2.508-3.78l.006-.015.003-.016c.243-1.058.354-2.155.004-3.205-.35-1.05-1.173-2.002-2.612-2.735-3.586-1.811-6.654-1.101-8.819.264-2.165 1.365-3.465 3.291-3.87 4.143-.692 1.455-1.823 3.94-1.059 9.27.384 2.678 1.219 5.29 3.002 7.474 1.784 2.184 4.507 3.914 8.557 4.863h.002a33.925 33.925 0 0 0 22.689-2.65l.006-.001c3.47-1.654 8.47-3.938 13.009-5.88 2.27-.972 4.425-1.858 6.212-2.536 1.787-.678 3.228-1.147 3.967-1.28l.016-.001.013-.004c2.055-.5 4.161-.768 6.276-.797 2.115.029 4.22.296 6.276.797l.015.004.016.002c.74.132 2.18.601 3.967 1.28 1.787.677 3.942 1.565 6.212 2.536a382.269 382.269 0 0 1 13.015 5.88 33.929 33.929 0 0 0 22.679 2.65h.002c4.05-.949 6.773-2.679 8.557-4.863 1.783-2.184 2.618-4.796 3.002-7.473.764-5.332-.368-7.806-1.058-9.269-.406-.859-1.705-2.788-3.869-4.153-2.164-1.365-5.23-2.073-8.81-.256-1.44.733-2.264 1.684-2.614 2.735-.35 1.05-.237 2.147.006 3.205l.002.016.006.015a7.751 7.751 0 0 0 2.508 3.78l.838.686-.025-1.082a5.842 5.842 0 0 1 .724-2.944c.358-.51.696-.746 1.02-.765.33-.02.798.168 1.42.837.452.486.602 1.859.072 3.237-.53 1.378-1.643 2.716-3.391 3.26-.799.248-1.745.1-2.8-.365-1.053-.464-2.19-1.236-3.312-2.14-2.243-1.807-4.419-4.121-5.987-5.523-2.98-2.665-8.214-9.344-20.967-10.373l.006.002c-7.028-.64-13.737 2.771-17.5 8.693-3.175-5.006-8.485-8.282-14.423-8.724Zm-.073.99h.002a17.798 17.798 0 0 1 14.055 8.784l.429.737.43-.737a17.798 17.798 0 0 1 16.99-8.755h.004c12.437 1.004 17.226 7.297 20.386 10.121 1.501 1.343 3.704 3.69 6.026 5.56 1.16.934 2.352 1.754 3.535 2.275 1.182.52 2.38.749 3.492.403 2.075-.646 3.403-2.236 4.024-3.851.621-1.616.629-3.302-.271-4.27-.73-.785-1.466-1.195-2.208-1.151-.742.043-1.338.541-1.797 1.209l-.013.02-.012.019c-.416.751-.493 1.614-.604 2.46-.723-.764-1.313-1.64-1.619-2.654-.222-.971-.295-1.874-.033-2.661.263-.79.848-1.514 2.123-2.163 3.291-1.67 5.881-1.02 7.83.21 1.948 1.228 3.216 3.13 3.502 3.736.691 1.464 1.713 3.545.973 8.704-.368 2.568-1.154 4.988-2.789 6.99-1.634 2-4.126 3.61-8.014 4.521a32.938 32.938 0 0 1-22.022-2.574l-.002-.002-.004-.002a382.95 382.95 0 0 0-13.05-5.898 167.963 167.963 0 0 0-6.252-2.55c-1.803-.684-3.225-1.162-4.132-1.326a29.101 29.101 0 0 0-6.486-.822H63.998a29.11 29.11 0 0 0-6.483.822c-.908.163-2.331.64-4.135 1.324a167.914 167.914 0 0 0-6.252 2.55 381.77 381.77 0 0 0-13.05 5.9l-.004.002-.004.002a32.935 32.935 0 0 1-22.029 2.574h-.002c-3.887-.91-6.378-2.52-8.012-4.522-1.635-2.001-2.421-4.421-2.79-6.989-.74-5.16.284-7.251.974-8.702.286-.602 1.552-2.502 3.502-3.731 1.95-1.23 4.544-1.881 7.84-.217 1.274.649 1.86 1.374 2.122 2.163.262.785.19 1.686-.03 2.655-.306 1.016-.897 1.895-1.621 2.66-.114-.824-.19-1.663-.593-2.396l-.012-.022-.015-.021c-.458-.668-1.052-1.168-1.795-1.213-.743-.046-1.48.369-2.21 1.159-.895.97-.893 2.644-.271 4.246.622 1.602 1.951 3.175 4.024 3.82 1.112.347 2.312.118 3.494-.403 1.183-.52 2.375-1.34 3.535-2.275 2.322-1.87 4.523-4.216 6.024-5.559v.002c3.162-2.826 7.94-9.149 20.376-10.133h.006c.974-.09 1.955-.1 2.93-.029z"},null)])}});