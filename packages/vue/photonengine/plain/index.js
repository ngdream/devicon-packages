import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"PhotonenginePlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#004480"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M115.14 71.395h3.297V59.777a12.912 12.912 0 0 1 3.239-.363c1.824 0 3.058.598 3.058 2.82v9.16H128v-9.253c0-4.196-2.305-5.844-6.266-5.844-2.214 0-4.972.332-6.593.957ZM109.27 64c0 2.816-.633 4.617-3.567 4.617-2.937 0-3.566-1.8-3.566-4.617 0-2.816.656-4.566 3.566-4.566 2.906 0 3.567 1.765 3.567 4.566Zm-3.567 7.73c4.64 0 6.848-3.054 6.848-7.73 0-4.855-2.035-7.703-6.848-7.703-4.617 0-6.89 3.027-6.89 7.703 0 4.887 2.062 7.73 6.89 7.73ZM88.23 66.129c0 4.223 2.305 5.574 5.512 5.574a9.737 9.737 0 0 0 3.688-.66l-.508-3.117a7.774 7.774 0 0 1-3.2.66c-1.32 0-2.187-.598-2.187-2.426v-6.445h5.336v-3.117h-5.344v-3.895H88.23ZM82.352 64c0 2.816-.625 4.617-3.567 4.617-2.941 0-3.566-1.8-3.566-4.617 0-2.816.664-4.566 3.566-4.566 2.906 0 3.567 1.765 3.567 4.566Zm-3.543 7.73c4.648 0 6.851-3.054 6.851-7.73 0-4.855-2.039-7.703-6.851-7.703-4.614 0-6.891 3.027-6.891 7.703 0 4.887 2.07 7.73 6.89 7.73Zm-22.349-.335h3.298V59.777a12.56 12.56 0 0 1 3.238-.363c1.824 0 3.055.598 3.055 2.82v9.16h3.265v-9.16c0-4.41-2.484-5.937-6.175-5.937a11.92 11.92 0 0 0-3.383.418v-6.293H56.46Zm-15.468 6.363h3.297v-6.445c.797.289 1.64.433 2.488.417 4.528 0 7.102-2.902 7.102-7.94 0-4.852-2.281-7.493-7.43-7.493a16.687 16.687 0 0 0-5.48.914v20.547ZM50.555 64c0 3.059-.809 4.617-3.926 4.617a4.46 4.46 0 0 1-2.34-.48v-8.395a6.922 6.922 0 0 1 2.313-.328c2.964 0 3.953 1.2 3.953 4.566Zm0 0 M10.285 70.598c.082.093.172.183.258.27l.273.265-4.902 5.937a16.916 16.916 0 0 1-.82-.77c-.262-.26-.52-.519-.762-.796l5.938-4.906Zm2.047 1.707L8.68 79.098a17.907 17.907 0 0 1-1.86-1.243l4.883-6.003c.207.148.414.285.629.418Zm-3.195-3.196c.129.211.27.422.422.625l-5.98 4.856a17.3 17.3 0 0 1-1.243-1.856l6.797-3.652Zm4.914 4.032-2.262 7.347a17.169 17.169 0 0 1-2.059-.851l3.618-6.809c.23.106.464.203.699.285ZM8.3 67.367c.086.235.183.469.289.695L1.78 71.684a16.383 16.383 0 0 1-.855-2.063Zm7.59 6.227-.77 7.672a17.52 17.52 0 0 1-2.195-.457l2.226-7.36c.243.059.489.106.739.145Zm-8.07-8.07c.038.25.09.496.148.742L.582 68.484a17.33 17.33 0 0 1-.434-2.187Zm-.114-1.895v.758l-7.672.746a17.768 17.768 0 0 1 0-2.235Zm10.082 10.074.742 7.676c-.746.047-1.488.047-2.234 0l.742-7.676c.25.016.5.016.75 0Zm1.887-.254 2.226 7.383c-.722.2-1.453.352-2.195.457l-.77-7.672c.247-.043.497-.086.739-.144ZM7.969 61.734c-.059.246-.11.493-.149.746l-7.672-.777a17.27 17.27 0 0 1 .434-2.183l7.387 2.218ZM21.48 72.828l3.618 6.809a17.28 17.28 0 0 1-2.067.851l-2.25-7.375a9.4 9.4 0 0 0 .7-.285ZM8.602 59.902c-.106.23-.204.457-.29.7L.946 58.32c.243-.707.532-1.398.864-2.066l6.793 3.656Zm14.52 11.95L28 77.836c-.594.453-1.21.867-1.855 1.242l-3.649-6.773c.211-.13.418-.266.625-.418ZM9.558 58.289a7.3 7.3 0 0 0-.422.625l-6.79-3.656c.376-.64.79-1.262 1.243-1.852Zm20.937 17.215a18.675 18.675 0 0 1-1.582 1.578l-4.902-5.95.273-.265.258-.27ZM5.914 50.922l4.902 5.937-.273.262c-.086.09-.176.18-.258.27l-5.937-4.903c.242-.273.496-.547.761-.812.266-.266.54-.524.817-.762ZM32.492 72.73c-.375.649-.789 1.27-1.242 1.86l-5.977-4.883c.153-.203.293-.414.422-.625l6.797 3.652ZM8.684 48.926l3.656 6.789a13.38 13.38 0 0 0-.633.422l-4.879-5.969c.59-.453 1.211-.871 1.856-1.242ZM33.902 69.62a16.383 16.383 0 0 1-.855 2.063l-6.809-3.621c.106-.227.2-.461.29-.696ZM11.81 47.504l2.246 7.383c-.239.082-.47.18-.7.285l-3.609-6.813a17.633 17.633 0 0 1 2.063-.855Zm22.87 18.793a17.401 17.401 0 0 1-.456 2.187l-7.364-2.218a9.59 9.59 0 0 0 .149-.743ZM15.122 46.734l.77 7.672c-.25.04-.496.09-.739.145l-2.226-7.36a17.52 17.52 0 0 1 2.195-.457Zm19.672 16.153c.05.742.05 1.484 0 2.226l-7.672-.734v-.758ZM18.531 46.62l-.742 7.676h-.75l-.742-7.676a17.768 17.768 0 0 1 2.234 0Zm15.711 12.9c.203.718.356 1.449.457 2.187l-7.672.777a8.11 8.11 0 0 0-.144-.746ZM21.914 47.19l-2.238 7.36a11.732 11.732 0 0 0-.738-.145l.769-7.672c.742.098 1.473.239 2.195.43Zm3.195 1.196-3.629 6.789a7.747 7.747 0 0 0-.699-.29l2.25-7.374a17.28 17.28 0 0 1 2.067.851Zm7.934 7.937c.328.668.613 1.36.855 2.063l-7.37 2.285c-.087-.234-.188-.457-.294-.7Zm-5.055-6.164-4.89 5.973a11.34 11.34 0 0 0-.63-.422l3.653-6.793c.645.371 1.266.785 1.86 1.242Zm3.242 3.23c.454.59.868 1.208 1.243 1.852l-6.785 3.653a8.408 8.408 0 0 0-.422-.63l5.964-4.886Zm-2.316-2.468c.281.242.547.496.816.762.27.265.52.53.766.812l-5.937 4.91a4.373 4.373 0 0 0-.262-.273l-.274-.266 4.907-5.937Zm0 0"},null)])}});