import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"VitessPlainWordmarkIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#f16827"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M0 33.564l11.157 20.614 1.714-20.614zm54.09 0l-.183 18.79-.047 4.903 13.064-23.693zm-40.742.638l-1.672 20.144 7.997-8.58-6.325-11.564zm40.205.15L47.237 45.89l6.092 11.375.176-18.111.048-4.801zM19.999 46.364l-5.962 11.072 3.563-2.832 4.802-3.813zm26.985.174l-8.519 23.715 7.738-6.29 7.044-5.727-2.892-5.401zm-28.195.954l-7.116 7.637 1.516 2.762zm26.778 1.428l-5.247 9.502-1.66 9.717 4.006-11.15zm-23.178 2.56l-8.858 7.035 6.298 11.566.266-1.925 2.293-16.677zm.505.218l-2.585 18.795 9.776-4.037.659-.273-7.85-14.486zm29.797 7.674L38.64 70.791l7.735-.006zm-13.154.492l-5.81 10.69 2.941 5.41.95-4.876 1.919-11.225zm13.926 5.41v3.848h5.132v-3.848zM30.73 66.762l-10.376 4.285 6.325 11.668.236-.934zm.476.275l-4.015 15.812 9.305-6 .014-.066-5.304-9.747zm32.658 1.98v4.659h-2.777v3.603h2.777v9.702c0 2.109.476 3.651 1.431 4.623.956.972 2.319 1.459 4.087 1.459a8.988 8.988 0 001.59-.132 10.172 10.172 0 001.505-.396l-.42-3.709a6.427 6.427 0 01-.687.151h-.014a4.983 4.983 0 01-.703.044 1.632 1.632 0 01-1.221-.475c-.303-.317-.451-.843-.451-1.581V77.28H72.2v-3.605h-3.218v-4.658h-5.117zm-17.783 2.3l-7.966.007-.964 5.637h.002l-3.357 16.61zm37.211 2.01l-.036.011c-2.707-.01-4.832.893-6.379 2.707-1.548 1.817-2.322 4.15-2.322 6.996v.705c0 2.74.805 4.981 2.407 6.721 1.606 1.74 3.818 2.61 6.647 2.61a13.757 13.757 0 004.257-.633c1.3-.419 2.33-.942 3.092-1.564l-1.388-3.163a11.841 11.841 0 01-2.486 1.073 10.646 10.646 0 01-2.927.352c-1.393 0-2.446-.404-3.156-1.213-.707-.81-1.104-1.864-1.187-3.164l.053-.105h11.34v-2.667c0-2.649-.685-4.756-2.05-6.32-1.365-1.564-3.32-2.345-5.865-2.345zm18.108.016c-2.297 0-4.137.574-5.519 1.722-1.384 1.15-2.076 2.538-2.076 4.165 0 1.548.577 2.772 1.731 3.672 1.155.905 2.844 1.58 5.072 2.023 1.48.305 2.49.66 3.034 1.063.546.405.818.888.818 1.45a1.854 1.854 0 01-.748 1.56c-.496.38-1.22.569-2.17.569-1.02 0-1.845-.23-2.479-.686-.632-.457-.966-1.195-1.002-2.214H93.37l-.035.105c-.07 1.64.63 3.104 2.1 4.387 1.47 1.283 3.472 1.924 6.003 1.924 2.403 0 4.337-.545 5.801-1.635 1.462-1.088 2.195-2.49 2.195-4.202 0-1.603-.574-2.853-1.716-3.753-1.142-.91-2.88-1.598-5.212-2.068-1.522-.292-2.534-.622-3.031-.99A1.72 1.72 0 0198.726 79a1.916 1.916 0 01.722-1.51c.481-.412 1.131-.616 1.953-.616.924 0 1.632.24 2.124.72a2.488 2.488 0 01.738 1.865h4.956l.038-.105c.058-1.713-.635-3.14-2.084-4.289-1.449-1.15-3.372-1.722-5.772-1.722zm18.561 0c-2.295 0-4.135.574-5.517 1.722-1.385 1.15-2.076 2.538-2.076 4.165 0 1.548.579 2.772 1.733 3.672 1.153.905 2.843 1.58 5.07 2.023 1.479.305 2.49.66 3.036 1.063.544.405.816.888.816 1.45a1.854 1.854 0 01-.748 1.56c-.496.38-1.22.569-2.17.569-1.02 0-1.845-.23-2.478-.686-.634-.457-.966-1.195-1.002-2.214h-4.691l-.034.105c-.072 1.64.628 3.104 2.101 4.387 1.47 1.283 3.47 1.924 6.002 1.924 2.401 0 4.334-.545 5.8-1.635 1.463-1.088 2.196-2.49 2.196-4.202 0-1.603-.572-2.853-1.715-3.753h-.003c-1.141-.91-2.881-1.598-5.213-2.068-1.522-.292-2.532-.622-3.03-.99a1.71 1.71 0 01-.747-1.435 1.905 1.905 0 01.718-1.51c.483-.412 1.132-.616 1.953-.616.925 0 1.632.24 2.125.72a2.488 2.488 0 01.738 1.865h4.957l.039-.105c.058-1.713-.636-3.14-2.084-4.289-1.45-1.15-3.374-1.722-5.776-1.722zm-66.5.334v19.018h5.133V73.677zm29.799 3.618c1.017 0 1.756.32 2.214.957.457.64.684 1.515.684 2.63v.386H79.9l-.032-.088c.115-1.173.454-2.116 1.01-2.823.557-.708 1.35-1.062 2.383-1.062zm-46.908.29L27.315 83.4l-.194.125 5.954 10.911 3.278-16.85z"},null)])}});