import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"CassandraPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#1185b0"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M93.408 30.748s-8.076 9.288-10.096 8.211l3.9-7.908s-3.898 7.907-9.146 6.562c2.42-3.096 3.354-5.935 3.354-5.935s-4.028 6.473-9.008 4.722c-1.17-.41 1.455-3.384 1.455-3.384s-3.341 3.252-5.629 2.847c-2.287-.402.135-4.576.135-4.576s-4.037 6.327-4.846 6.057c-.806-.269.405-4.442.405-4.442s-2.96 4.845-4.575 4.577c-1.615-.27 0-4.979 0-4.979s-1.748 5.248-3.095 4.844c-1.347-.403-1.616-3.498-1.616-3.498s-.364 4.201-2.289 4.574C37.821 41.248 21.804 47.438 1.75 67.492c12.182-6.566 19.66-15.125 32.846-20.771a21.29 21.29 0 0 0-.617 5.047c0 13.01 11.747 23.556 26.238 23.556s26.24-10.546 26.24-23.556c0-3.127-.688-6.107-1.922-8.836 13.016 3.326 19.985 9.363 22.871 9.486C120.06 52.958 128 40.707 128 40.707s-7.94 9.152-13.729 6.932c5.183-3.027 9.153-10.43 9.153-10.43s-10.097 10.43-17.094 8.883c6.325-4.98 9.42-13.592 9.42-13.592s-8.032 12.396-13.055 12.918c5.788-5.114 8.211-12.383 8.211-12.383s-6.597 9.693-11.71 10.367c6.864-6.192 7.134-10.095 7.134-10.095s-9.5 12.276-13.324 10.363c4.573-4.98 7.67-11.307 7.67-11.307s-7.94 10.767-10.094 9.018c-1.48-.27 2.424-5.115 2.424-5.115s-4.845 4.307-6.192 3.23c2.422-1.479 6.594-8.748 6.594-8.748zM67.193 40.791c2.24.008 4.37.112 6.399.291 1.574.54 3.064 1.241 4.312 2.166a18.401 18.401 0 0 1-1.445 4.19 2.143 2.143 0 0 0-.479-.06 2.105 2.105 0 0 0-2.105 2.108c0 .505.184.961.48 1.325-.06.077-.124.152-.185.228l-5.07 1.816-.02-.04 4.025-5.58-5.527 3.673c-.021-.019-.04-.04-.062-.058l1.931-6.485-3.781 5.328-.086-.037-.084-6.726-2.543 6.13-2.119-6.203.102 6.561c-.116.034-.23.075-.342.115l-3.309-5.918 1.885 6.612c-.067.042-.136.082-.201.127l-4.596-3.342a2.302 2.302 0 0 0 .059-1.916c3.852-3.11 9.044-4.648 14.068-3.953-.427-.132-.862-.25-1.307-.352zm-8.976.4a17.042 17.042 0 0 0-5.069 2.65 2.321 2.321 0 0 0-3.03 2.97 16.9 16.9 0 0 0-2.141 3.525 18.63 18.63 0 0 1-3.16-7.008c3.946-.97 8.365-1.705 13.4-2.137zM44.432 43.42a16.866 16.866 0 0 0 2.902 8.568 17.15 17.15 0 0 0-.451 1.635 16.886 16.886 0 0 0-.283 5.773 3.047 3.047 0 0 0-1.723 2.745 3.052 3.052 0 0 0 3.05 3.05c.16 0 .315-.014.468-.039a16.959 16.959 0 0 0 3.09 4.203c-.007.025-.01.047-.016.07-7.41-3.324-12.574-10.762-12.574-19.41 0-2.4.9-4.255 2.316-5.7a68.11 68.11 0 0 1 3.22-.895zm33.834.105c1.903 1.537 3.166 3.631 3.166 6.49 0 3.756-.978 7.284-2.686 10.344a17.028 17.028 0 0 0-8.2-3.685c.165-.107.323-.22.483-.332l5.205-1.242-3.433-.176a16.999 16.999 0 0 0 2.834-3.367c.113.018.228.035.345.035a2.108 2.108 0 0 0 2.108-2.106c0-.62-.273-1.175-.701-1.558.478-1.396.778-2.871.879-4.403zm-24.079 3.809 3.4 4.271c-.073.088-.142.179-.212.27L50.646 49.4c.257-.423.526-.838.82-1.234a2.314 2.314 0 0 0 2.72-.832zm-3.548 2.078 5.744 4.248a1.426 1.426 0 0 0-.012.033l-5.035.155a18.212 18.212 0 0 1-1.973-1.828 15.58 15.58 0 0 1 1.276-2.608zm22.642 2.652a17.987 17.987 0 0 1-3.213 2.721l-.289-.015-.006-.026zm33.043 1.323c-1.354-.091-2.548.412-3.158 2.074-6.26 11.911-19.382 18.572-34.727 20.793-15.342 2.22-26.649-1.006-35.935-3.623C20.29 69.188 10.6 75.315 0 69.998c2.452 1.941 5.249 3.835 13.324 3.86 2.739.009 11.508-.428 13.123.984 1.615 1.414-5.45 8.074-5.45 8.074s11.956-10.108 13.122-6.662c.727 2.144-3.432 7.875-3.432 7.875s4.17-5.658 7.268-6.865c2.127-.83 3.92-.729 5.451 1.414 1.01 1.412-4.844 8.277-4.844 8.277s7.872-7.672 9.286-7.267c1.414.402 0 7.267 0 7.267s2.897-6.956 4.441-7.47c2.12-.707-4.846 16.152-4.846 16.152S55.95 80.04 57.54 79.687c2.725-.605 4.543 10.903 4.543 10.903s-1.327-10.055.102-10.701c9.038-4.091 3.834 17.363 3.834 17.363s5.913-14.559 2.28-17.787c9.589 6.358 8.42 17.787 8.42 17.787s2.521-5.441-4.55-18.822c3.837-.202 9.596 9.94 9.596 9.94s-6.258-11.106-2.018-11.308c8.424-.4 9.287 14.739 9.287 14.739s2.524-2.12-4.24-16.96c4.307-2.758 14.738 13.73 14.738 13.73s-9.624-16.084-8.076-17.16c1.546-1.078 7.203 5.114 7.203 5.114s-4.308-5.922-3.166-6.527c1.144-.607 12.586 11.775 12.586 11.775S97.983 69.661 99.732 68.18c1.036-.877 4.037.744 6.327 2.215-3.21-2.296-7.823-5.888-6.327-6.665 3.097-1.607 11.914 3.844 11.914 3.844s-5.317-4.374-4.443-5.451c.876-1.077 11.305 6.865 11.305 6.865s-9.218-7.27-9.69-9.086c-.47-1.816 7.27.606 7.27.606s-8.548-3.97-8.682-5.113c-.136-1.146 5.653 1.277 5.653 1.277s-3.755-3.085-6.735-3.285zm-.265 17.008c1.566 1.12 2.826 1.957 2.826 1.957s-1.248-.944-2.826-1.957zM48.805 53.848a17.032 17.032 0 0 0 3.55 2.96l-3.402.737 5.55.4c.45.199.91.376 1.38.535l-4.945 3.168a3.052 3.052 0 0 0-2.446-2.505 15.29 15.29 0 0 1 .264-5.102c.015-.063.034-.128.049-.193zm4.033 1.074 3.11.805c-.007.102-.015.204-.016.308l-.711.154a16.612 16.612 0 0 1-2.383-1.267Zm16.832 3.68 1.744.136a18.185 18.185 0 0 1 6.582 2.862c-3.793 5.827-10.36 9.685-17.832 9.685-1.857 0-3.66-.24-5.375-.685-.57-.485-1.112-1-1.62-1.547.938-2.414 2.379-4.61 4.24-6.381l-1.595 5.963 4.303-6.102c.036.016.073.03.11.045l-.604 7.193 2.506-6.697.021.004 2.133 7.037.52-7.092 3.18 6.051-1.83-6.74.107-.06 5.664 4.386-3.758-5.748 6.387 2.488zm-12.986 1.187-4.545 5.754 1.511-1.219a17.046 17.046 0 0 0-1.652 3.342 18.335 18.335 0 0 1-2-3.287 3.047 3.047 0 0 0 .982-2.238c0-.094-.017-.184-.025-.276z"},null)])}});