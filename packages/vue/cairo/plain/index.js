import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"CairoPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#f39914"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"m64 0.70703c-10.678 0-19.365 8.6889-19.365 19.367 0 10.678 8.6869 19.365 19.365 19.365s19.365-8.6869 19.365-19.365c0-10.678-8.6869-19.367-19.365-19.367zm0 0.63672c10.328 0 18.73 8.4023 18.73 18.73 0 10.328-8.4026 18.73-18.73 18.73-10.328 0-18.73-8.4023-18.73-18.73 0-10.328 8.4023-18.73 18.73-18.73zm-8.7148 10.016v17.143 0.28516h17.145 0.28516v-17.143-0.28516h-17.145-0.28516zm0.28516 0.28516h5.4297v5.4297h-5.4297v-5.4297zm5.7148 0h5.4297v5.4297h-5.4297v-5.4297zm5.7148 0h5.4297v5.4297h-5.4297v-5.4297zm-3 0.71484a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-8.4297 5h5.4297v5.4277h-5.4297v-5.4277zm5.7148 0h5.4297v5.4277h-5.4297v-5.4277zm5.7148 0h5.4297v5.4277h-5.4297v-5.4277zm2.7148 0.71289a2 2 0 0 0-2 2.002 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2.002zm-33.473 2.5566c-2.2415 0.55379-1.1353 2.7652-1.5 3.9766-0.92977 3.0853-5.7811 4.0667-8.207 6.1621-2.3732 2.0483-3.7885 4.4403-5.6211 6.6953-1.546 1.8975-3.4744 3.7589-3.7852 5.9336-0.35246 2.466-0.22488 5.2516 0.89648 7.6113 1.392 2.9229 3.0346 6.6356 5.3633 9.2402 1.7887 2.0004 2.0338 2.6639 5.041 3.7188 0.9533 0.43274 1.1916 0.64564 2.4883 0.91406l0.25586-1.5918 1.1152-1.3125c-1.4993-1.8329-3.7723-2.0014-5.084-3.3379-2.1894-2.2296-2.9031-4.5096-4.2051-7.0625-1.244-2.4463-2.8628-4.3144-2.9961-6.9121-0.0568-1.1126-0.54848-3.1121 0.035156-4.1152 0.38759-0.66605 2.2377-1.5041 2.8652-2.1406 1.9442-1.9712 1.0645-4.4618 3.3145-6.2891 2.0013-1.6262 5.3898-2.8926 7.7617-4.3809 1.6441-1.0311 2.6596-1.4026 3.0137-2.8535 0.38946-1.5986-0.86673-2.7811-0.75195-4.2559zm55.514 0c0.11477 1.4748-1.1392 2.6572-0.75 4.2559 0.35466 1.451 1.3696 1.8225 3.0137 2.8535 2.3716 1.4883 5.7591 2.7546 7.7598 4.3809 2.2484 1.8273 1.368 4.3179 3.3125 6.2891 0.62748 0.63657 2.477 1.4746 2.8652 2.1406 0.58295 1.0032 0.09226 3.0026 0.03516 4.1152-0.13296 2.5977-1.7527 4.4658-2.9961 6.9121-1.302 2.5529-2.0165 4.8329-4.2031 7.0625-1.312 1.3365-3.5825 1.505-5.082 3.3379l1.1152 1.3125 0.25391 1.5918c1.2964-0.26842 1.535-0.48132 2.4883-0.91406 3.0051-1.0549 3.251-1.7184 5.0391-3.7188 2.3293-2.6046 3.9705-6.3173 5.3672-9.2402 1.1207-2.3597 1.2486-5.1453 0.89648-7.6113-0.31107-2.1747-2.2431-4.0361-3.7891-5.9336-1.8323-2.255-3.2475-4.647-5.6191-6.6953-2.4256-2.0954-7.2773-3.0768-8.207-6.1621-0.36407-1.2114 0.74181-3.4228-1.5-3.9766zm-36.186 2.4434h5.4297v5.4297h-5.4297v-5.4297zm5.7148 0h5.4297v5.4297h-5.4297v-5.4297zm5.7148 0h5.4297v5.4297h-5.4297v-5.4297zm-8.7148 0.71484a2 2 0 0 0-2 2 2 2 0 0 0 2 2.002 2 2 0 0 0 2-2.002 2 2 0 0 0-2-2zm5.7148 0a2 2 0 0 0-2 2 2 2 0 0 0 2 2.002 2 2 0 0 0 2-2.002 2 2 0 0 0-2-2zm5.7148 0a2 2 0 0 0-2 2 2 2 0 0 0 2 2.002 2 2 0 0 0 2-2.002 2 2 0 0 0-2-2zm-5.7246 19.871c-9.6342 0-17.441 2.9658-17.441 6.625 0 3.1995 7.8072 2.3047 17.441 2.3047 9.6314 0 17.445 0.72641 17.445-2.3047 0-3.6589-7.8139-6.625-17.445-6.625zm-8.6934 9.709c-9.9547 0-18.639 4.0817-23.393 10.152-0.33052 1.8815-0.57232 3.8031-0.71875 5.7617 1.2424-0.01159 26.317-0.21223 28.555 1.9941 0 0 3.9984 3.9433 4.248 4.1895 0.70932-0.69992 4.248-4.1895 4.248-4.1895 2.2374-2.2064 27.316-2.0054 28.557-1.9941-0.14707-1.9749-0.39267-3.9124-0.72852-5.8086-4.7611-6.0456-13.425-10.105-23.357-10.105h-17.41zm-24.127 16.086c-0.04834 0.67232-0.084566 1.3498-0.10938 2.0312-0.02388 0.69208 3.2598 1.4768 3.2598 2.1074 0 0.7272-3.2788 1.5939-3.248 2.3926 0.93856 23.001 15.218 41.276 32.729 41.408l-2.8301-34.898 0.017578-0.041016 0.001953-0.001953 2.7773-6.6816-4.291-4.2324c-1.7717-1.7476-21.032-1.9564-28.303-1.8887l-0.003906-0.19531zm65.637 0v0.19531c-7.2707-0.06773-26.532 0.13943-28.305 1.8867l-4.293 4.2344 2.7969 6.7227-2.8281 34.898c17.515-0.13078 31.791-18.406 32.729-41.408 0.03008-0.79744-3.248-1.6657-3.248-2.3926 0-0.63062 3.2816-1.4128 3.2578-2.1055-0.02477-0.68174-0.060451-1.358-0.10938-2.0312zm-75.738 4.752c-4.2667 0.15304-3.4973 4.6627-1.9551 8.6641 1.7799 4.6178 2.5827 9.4795 4.498 14.047 0.8796 2.0972 2.1705 4.1439 4.4844 4.7441 0.11669-2.6451-0.28859-3.3391-1.918-5.3047-1.3782-1.6598-1.0412-3.935-1.9023-5.8027-1.1229-2.4472-1.3164-4.9076-2.2832-7.3711-0.42742-1.091-2.6123-4.3782-2.0234-5.5996 0.99813-2.0706 2.8773-0.02694 3.8184 0.65039 1.3227 0.95204 2.029 0.69654 3.6641 0.9082 0.18595 0.02477 1.1163 0.67907 3.291 1.6719l-0.25586-2.3047c-2.9809-1.4359-3.241-3.0634-6.502-3.9082-1.1626-0.30138-2.1259-0.42287-2.916-0.39453zm85.859 0c-0.79057-0.02832-1.7547 0.09315-2.918 0.39453-3.2581 0.84479-3.5188 2.4723-6.5 3.9082l-0.25391 2.3047c2.1741-0.9928 3.1025-1.6471 3.2891-1.6719 1.635-0.21167 2.3378 0.043827 3.6602-0.9082 0.94137-0.67734 2.8219-2.721 3.8203-0.65039 0.58859 1.2214-1.596 4.5087-2.0234 5.5996-0.96615 2.4635-1.1586 4.9239-2.2812 7.3711-0.86142 1.8677-0.52571 4.1429-1.9023 5.8027-1.6291 1.9656-2.0343 2.6596-1.918 5.3047 2.3142-0.60021 3.6031-2.6469 4.4824-4.7441 1.9157-4.5673 2.7182-9.429 4.498-14.047 1.5452-4.0013 2.3159-8.511-1.9531-8.6641zm-42.937 2.0078c-0.60709 1.4597-2.6079 6.2712-2.6367 6.3398 0.0059 0.07464 2.008 24.769 2.6367 32.523 0.62873-7.7546 2.6288-32.448 2.6348-32.523-0.02821-0.06868-2.0305-4.8861-2.6348-6.3398zm-27.252 23.51c-2.0947 2.7997-2.1918 5.0879-3.1523 7.3203-1.6548 3.8455-0.049351 9.0471 3.0898 11.814 1.8978 1.6855 4.9875 3.016 7.25 4.1191 3.1468 1.534 6.3088 3.5395 9.8281 4.2012 0.7783 0.14613 2.7578 0.40701 2.0977-1.1035-0.30574-0.70149-2.5372-1.4404-3.1816-1.7988-2.6065-1.4497-5.1353-3.2999-7.5703-5.0723-2.9784-2.1518-6.5351-3.5079-8.877-6.4863-0.95768-1.2183-1.1131-1.5442-0.88476-2.9453 0.21731-1.3368 0.42184-2.8774 0.70312-4.2148 0.31734-1.5074 0.76206-2.9652 1.5664-4.3184l-0.86914-1.5156zm54.521 0-0.86914 1.5156c0.80371 1.3531 1.2488 2.811 1.5664 4.3184 0.2816 1.3374 0.48682 2.878 0.70508 4.2148 0.22734 1.4011 0.073237 1.727-0.88476 2.9453-2.3415 2.9784-5.8966 4.3345-8.875 6.4863-2.4344 1.7724-4.9697 3.6226-7.5762 5.0723-0.6441 0.35844-2.8756 1.0973-3.1816 1.7988-0.6579 1.5105 1.3197 1.2496 2.0977 1.1035 3.5197-0.66166 6.6855-2.6671 9.832-4.2012 2.2622-1.1032 5.3512-2.4336 7.25-4.1191 3.1383-2.7674 4.7437-7.969 3.0898-11.814-0.96145-2.2324-1.0599-4.5206-3.1543-7.3203z"},null)])}});