import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"JenkinsPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#F0D6B7"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M67.527.006c-3.61.068-7.142.668-10.11 1.76-2.15.791-4.271 1.508-6.224 2.655-2.511 1.474-5.139 2.72-7.362 4.38-2.168 1.618-3.92 3.695-4.733 6.687-1.625.798-2.799 2.144-3.54 3.854-.748 1.726-1.09 3.805-1.182 6.05-1.107.934-2.194 1.898-3.215 2.942-8.394 8.585-13.582 20.45-13.582 33.53 0 13.08 5.188 24.944 13.582 33.528.831.85 1.708 1.642 2.597 2.416.066.95.13 1.899.192 2.859.064 1.005.042 2.063.071 3.03.03.968.091 1.845.423 2.55.368.786 1.145 1.21 1.95 1.553.804.343 1.684.609 2.377.93h.002c4.12 1.905 8.66 4.855 14.27 4.434 1.3 4.393 2.543 9.055 4.128 12.943l.083.203.208.076c5.93 2.132 15.033 1.777 21.06 1.052.97-.117 1.96-.409 2.797-.903.836-.494 1.531-1.208 1.788-2.155l.026-.095-.012-.099c-.114-.864-.196-1.708-.182-2.64.838-.166 1.77-.315 2.635-.68 1.003-.42 1.92-1.158 2.163-2.38.323-1.628-.174-3.439-.603-5.235-.41-1.718-.726-3.395-.44-4.79.45-.142.927-.262 1.345-.601.431-.35.667-.955.698-1.692 1.615-.779 3.53-1.003 5.625-.94.3.505.634 1.006 1.014 1.322l.097.08.124.025c3.293.661 6.511.726 9.313-.188 1.79-.585 2.941-2.546 3.622-4.672.681-2.127.892-4.462.508-6.093-.504-2.144-1.617-5.572-2.597-7.664v-.002c-.55-1.176-1.383-1.928-2.314-2.444 3.968-6.987 6.293-15.074 6.292-23.727.001-13.08-5.188-24.946-13.582-33.53-.36-.369-.729-.703-1.087-1.038-.294-4.903-1.239-9.538-3.039-13.177v-.002c-1.64-3.316-5.993-7.626-8.782-9.736C79.777 1.241 73.543-.106 67.527.007Zm.02.993c5.852-.11 11.91 1.24 15.787 4.174 2.66 2.011 7.016 6.401 8.492 9.385v.002c1.739 3.515 2.687 8.11 2.96 13.003l.012.197.146.136c.408.385.814.751 1.186 1.132 8.218 8.404 13.3 20.018 13.3 32.837a46.94 46.94 0 0 1-6.363 23.64l-.28.484.51.221c.932.402 1.699 1.075 2.247 2.246v.002c.924 1.974 2.048 5.419 2.53 7.472.314 1.33.147 3.588-.486 5.562-.632 1.975-1.73 3.624-2.984 4.033-2.532.826-5.535.782-8.66.172a4.558 4.558 0 0 1-.911-1.201l-.134-.258-.289-.012c-2.354-.09-4.608.12-6.55 1.13l-.298.155.033.336c.075.742-.091 1.008-.38 1.242-.289.234-.791.393-1.347.573l-.261.084-.066.265c-.443 1.757-.003 3.662.428 5.47.431 1.809.85 3.531.595 4.81-.169.848-.732 1.308-1.574 1.661-.841.354-1.918.532-2.871.729l-.374.077-.022.382c-.06 1.143.08 2.088.202 3.01-.18.615-.638 1.133-1.31 1.53-.685.405-1.562.67-2.413.774-5.878.707-14.792.982-20.392-.954-1.548-3.855-2.799-8.528-4.116-12.956l-.116-.396-.411.043c-5.412.578-9.843-2.355-14.177-4.36h-.002c-.79-.366-1.676-.632-2.405-.944-.73-.312-1.255-.667-1.44-1.062-.206-.437-.302-1.227-.33-2.157-.028-.93-.007-2-.075-3.063a568.607 568.607 0 0 0-.206-3.06l-.013-.206-.155-.133a44.425 44.425 0 0 1-2.694-2.508c-8.217-8.404-13.3-20.016-13.3-32.833 0-12.82 5.083-24.433 13.3-32.837 1.039-1.063 2.15-2.056 3.297-3.017l.17-.142.008-.223c.073-2.254.423-4.29 1.124-5.908.701-1.618 1.733-2.81 3.22-3.477l.22-.099.058-.234c.72-2.873 2.345-4.756 4.457-6.333 2.112-1.577 4.713-2.815 7.273-4.318 1.838-1.079 3.896-1.784 6.061-2.58 2.839-1.045 6.277-1.633 9.788-1.698zm.466 2.321c-2.186.022-4.26.404-6.01 1.277-4.523 2.255-10.635 5.986-12.72 10.713 1.948 4.561-.574 8.742-.736 13.373-.085 2.464 1.16 4.615 1.256 7.298-.666 1.099-2.703 1.234-4.112 1.159-.474-2.373-1.304-5.04-3.748-5.308-3.458-.378-5.986 2.484-6.143 5.474-.186 3.517 2.702 9.346 6.794 8.942 1.581-.157 1.97-1.741 3.692-1.725.934 1.863-1.44 2.447-1.684 3.779-.064.344.195 1.689.347 2.32.743 3.07 2.402 7.046 4.033 9.384 2.07 2.966 6.135 3.413 10.51 3.704.782-1.684 3.661-1.545 5.537-1.105-2.248-.89-4.337-3.048-6.07-4.959-1.989-2.192-4.004-4.543-4.106-7.408 3.76 5.215 6.865 9.77 13.701 12.065 5.173 1.735 11.214-.796 15.189-3.587 1.65-1.16 2.634-3 3.806-4.686 4.386-6.31 6.434-15.316 5.984-24.045-.185-3.6-.178-7.188-1.386-9.61-1.262-2.532-5.53-4.798-8.03-2.507-.463-2.463 2.078-3.985 5.064-3.099-2.13-2.747-4.364-6.05-7.39-7.757-3.621-2.044-8.969-3.74-13.778-3.692Zm-12.44 2.328a.458.458 0 0 0-.202.011c-5.076 1.439-11.582 5.128-13.668 9.688 1.615-.235 2.736-1.05 4.33-1.152.601-.039 1.39.254 2.082.082 1.38-.342 2.545-3.435 3.585-4.585 1.015-1.124 2.232-1.604 3.066-2.628.536-.258 1.328-.242 1.359-1.046-.175-.187-.356-.339-.553-.37zm8.671 9.894c.175 0 .347.011.518.037 1.173.177 2.76 1.25 1.872 2.71-4.625-1.078-6.922 1.936-8.324 5.06-1.251-.302-.754-2.006-.438-2.873.777-2.134 3.757-4.931 6.372-4.934zm-16.524.475c-3.47.263-6.324 1.683-8.393 3.961-2.242 2.467-1.771 7.089-1.5 10.377 4.053-2.549 9.43.2 9.38 4.537 1.934-.052.723-2.416.373-3.94-1.143-4.976 1.928-10.384.14-14.935zm41.449 7.538.219.01c1.045 2.171 1.949 4.47 3.267 6.387-.883 2.057-6.686 3.876-6.596.182 1.255-.548 3.421-.11 4.534-.812-.643-1.765-1.572-3.269-1.424-5.767zm-20.167.057c.991 1.817 1.315 3.728 2.724 5.102.635.618 1.87 1.373 1.258 3.093-.143.405-1.19 1.31-1.793 1.488-2.203.65-7.337.133-5.598-2.614 1.822.085 4.271 1.183 5.633-.14-1.046-1.672-2.91-4.98-2.224-6.93zm10.466 1.796c.576.076.658 1.37.777 1.647 1.325 3.101 4.66 7.066 7.095 9.72.597.654 1.58 1.281 1.69 1.713.315 1.257-.82 2.763-.689 3.6-3.317 2.13-7.018 4.45-12.454 3.912-1.162-1.01-1.605-3.258-.477-4.742.588 1.01.22 2.867 1.857 3.147 3.084.528 6.675-1.889 8.894-2.733 1.376-2.32-.12-3.171-1.36-4.664-2.538-3.059-5.941-6.85-5.817-11.43.192-.139.351-.188.484-.17zm-44.393 3.686a41.02 41.02 0 0 0-1.579 1.52c-7.815 7.997-12.652 19.037-12.652 31.25 0 12.212 4.837 23.252 12.652 31.247.129.131.267.252.397.382-.29-2.843-.712-5.696-1.472-8.643-.627-2.427-1.717-4.57-2.479-6.909-.704-2.167-1.935-4.846-2.256-7.007-.475-3.203 2.542-3.38 4.471-4.769 2.982-2.147 5.323-3.334 8.552-5.271.956-.574 3.84-2.027 4.168-2.696.652-1.326-1.12-3.194-1.593-4.234-.749-1.643-1.14-3.04-1.248-4.662-2.709-.428-4.763-2.04-6.003-3.859-2.052-3.008-3.475-8.575-1.7-12.809.14-.333.834-.988.936-1.5.121-.604-.037-1.326-.194-2.04zm60.283 2.434c-.078 5.244-.842 10.578-2.14 15.142-.388 1.358-.95 3.355-1.733 4.986-.547 1.14-2.245 3.418-2.039 4.424.212 1.04 3.872 3.82 4.657 4.576 1.412 1.362 4.096 3.171 4.313 4.89.234 1.83-.806 4.333-1.333 6.1-1.761 5.892-3.48 11.34-5.476 16.593 2.357-1.172 5.884-2.8 8.955-2.95a44.672 44.672 0 0 0 6.598-23.424c0-11.76-4.493-22.423-11.802-30.337zm-54.564 2.447c2.096.032 4.521 2.417 3.804 5.868-1.04-.594-1.287-3.208-2.507-3.283-1.745-.106-1.426 3.393-1.419 5.438-1.201-1.09-1.413-4.446-.531-6.17-1.006-.494-1.456.545-2.013.91.268-1.952 1.409-2.782 2.666-2.763zm49.66 10.28c-1.545 2.94-3.73 6.177-8.261 6.271-.092-.949-.165-2.393.004-2.964 3.464-.333 5.604-2.097 8.257-3.306zM68.74 46.163c2.89 1.52 8.204 1.683 12.133 1.568.211.86.205 1.925.213 2.975-5.05.252-11.022-.998-12.346-4.543Zm-.548 2.834c1.998 5.018 8.868 4.44 14.661 4.302-.255.651-.806 1.423-1.494 1.701-1.856.756-6.978 1.328-9.555-.04-1.635-.87-2.684-2.832-3.58-3.983-.432-.556-2.586-1.977-.032-1.98zm19.283 9.755c-.805 1.188-2.531 1.985-3.19 2.951 4.706-2.281 5.554 8.527 3.71 12.009.285 1.038 1.264 1.436 1.664 2.37-2.625 4.704-5.541 9.095-8.22 13.743 1.993-1.24 4.84-.222 7.185-1.15.858-.34 1.477-2.303 2.126-3.873 1.785-4.319 3.66-9.765 4.494-13.886.188-.94.702-2.986.587-3.822-.205-1.496-2.236-2.605-3.269-3.53-1.903-1.71-3.102-3.214-5.087-4.812zM46.08 61.21c-5.65 2.23-10.93 6.08-15.648 9.723 4.5 9.654 6.315 21.48 6.636 32.88 5.153 2.41 9.681 5.885 16.675 6.247-.81-5.725-1.548-10.833-2.008-16.223-1.757-.741-4.28.032-5.924-.23-.014-1.983 2.513-.868 2.723-2.2.158-1.008-1.39-1.085-.886-2.673 1.286.468 1.96 1.5 3.332 1.888 1.252-2.74-.016-7.59.164-9.881.034-.43.213-2.384 1.177-2.04.852.302-.05 5.193.044 7.361.085 1.997-.24 3.93.57 5.184A193.102 193.102 0 0 1 73.87 89.53c-1.608-.69-3.52-1.342-5.615-2.523-1.136-.64-4.715-1.974-5.043-3.052-.523-1.72 1.372-2.635 1.696-4.109-3.411 1.86-4.077-1.782-4.884-4.364-.73-2.338-1.148-4.085-1.327-5.434-2.938-1.4-6.08-2.82-8.61-4.616-.461-.328-3.582-4.389-4.01-4.22zm38.776 2.605c-2.193-.107-5.296 2.855-6.712 3.36.176.508.465.91.488 1.559.957-.236 2.123-.075 2.953.333-.96.107-2.024.099-2.659.556-.232.673.058 1.59-.097 2.523 2.278.643 4.879.985 7.758 1.07.56-.728.75-2.116.684-3.49-.08-1.657-.515-5.064-1.539-5.66a1.893 1.893 0 0 0-.876-.25zm-5.16.126c-2.781.249-6.283 1.976-9.037.748-.007.146-.195.093-.226.212 1.89 1.477 3.293 1.782 5.866 1.654 1.16-.842 2.189-1.825 3.397-2.614zm-27.134.049c-1.47 1.491 4.12 3.524 5.9 3.633-.01-.944.54-1.834.429-2.511-2.114-.371-4.893-.125-6.33-1.122zm9.697.568c-2.306.047-2.064 4.074-1.952 6.54.095 2.082 1.177 4.285 1.648 5.668.22.646.27 1.331.821 1.46.976.227 4.195-1.06 5.112-1.56 1.94-1.059 3.445-2.739 5.093-3.867.021-.549.044-1.096.066-1.645-.99-.494-2.137-.845-3.59-.909.986-.496 2.437-.489 3.336-1.08.01-.22.017-.438.025-.656-1.64-.126-2.267-.858-3.348-1.45-1.77-.967-4.429-2.019-6.715-2.455a2.396 2.396 0 0 0-.496-.046zm13.189 3.435c-.41.033-.885.204-1.422.562-.113 1.25.178 1.659.43 3.091 3.337 1.044 3.489-3.33 1.38-3.641a1.738 1.738 0 0 0-.388-.012zm1.92 4.977c-1.054-.114-1.948 1.21-3.32.637-.313.347-.598.725-.918 1.064 3.028 3.65 4.404 8.826 6.742 13.114 1.255-4.12 1.111-8.634 1.388-13.13-1.725.11-2.683-1.557-3.892-1.685zm6.955 1.43a4.193 4.193 0 0 0-1.753.417c-.177 4.377-.677 10.119-1.843 13.55 2.783-3.545 5.028-7.67 7.373-11.688-.75-1.204-2.112-2.292-3.777-2.28zm-6.284 1.29h.046a.933.933 0 1 1-.047 0zm-6.385.24c-2.693 1.806-5.658 3.505-6.415 6.783 3.854 2.18 8.347 4.331 12.744 5.657-1.861-4.377-3.55-8.912-6.33-12.44zm7.317 4.088h.048a.933.933 0 1 1-.934.932c0-.5.393-.907.886-.932zm21.962 7.55a2.059 2.059 0 0 0-1.184.327c-2.467 1.58-6.813 2.04-8.612 3.951.902 3.004 1.182 7.128 1.554 10.934 3.082.192 6.874-.848 9.437.256-1.789.58-4.11.583-5.656 1.428 1.263.61 4.222.488 6.15.02 2.65-.644 4.315-3.889 3.574-7.221-.497-2.24-1.383-6.458-2.331-7.891-.526-.795-1.726-1.774-2.932-1.804zm-.21 3.55c-2.626.526-4.472 3.078-7.034 2.914 1.408-1.985 3.876-2.822 7.034-2.914zm-12.443.779c-.671-.029-1.374.08-1.98.09.38 3.783 1.3 7.956 1.624 11.927 1.271.04 1.95-.56 2.996-.762.056-3.485-.304-8.286-1.983-11.172a3.674 3.674 0 0 0-.657-.083zm-19.448.042c-5.525.09-11.329.87-15.88 1.721 1.174 10.804 2.877 19.887 5.999 29.454 6.929 2.104 15.281 2.286 21.406.387-1.125-5.4-.634-11.973-1.291-17.735-.495-4.33-.243-8.687-.922-13.106-2.783-.579-5.997-.774-9.312-.72zm14.708.38c-1.265.012-2.379-.013-3.64.41-.063 4.639.205 9.215.56 13.86 1.78-.267 2.99-.444 4.646-.807-.537-4.473-.47-9.506-1.566-13.463zm14.374 2.28c1.416-.019 2.992.292 3.968.629-2.14.226-4.654.574-6.825.395.482-.736 1.607-1.009 2.857-1.025zm-.359 3.214c1.865-.023 4.094.503 5.07.957-2.406.053-5.397.006-7.684-.186.507-.544 1.495-.757 2.614-.77zM82.95 108.467v.002c-.701.11-1.592.485-2.25.441-.112 2.681.264 6.978.39 9.79 1.782.002 2.546-.388 3.876-.837.15-3.308-1.048-6.371-1.394-9.393-.176-.046-.388-.04-.622-.004z"},null)])}});