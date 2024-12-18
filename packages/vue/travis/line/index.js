import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"TravisLineIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#2d3136"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M68.873.5c-10.9 0-21.367 3.573-30.262 10.322-8.577 6.51-15.096 15.837-18.907 26.35a50.16 50.16 0 0 0-3.943 1.635h-.002v.002c-1.613.773-3.208 1.647-4.692 2.812l-.323.253-.12.442.002-.002c-.144.52-.24.963-.335 1.432v.002a25.77 25.77 0 0 0-.232 1.398 33.25 33.25 0 0 0-.27 2.798v.002a35.083 35.083 0 0 0 .167 5.607c.196 1.86.544 3.702 1.04 5.527h.001v.002c.257.909.553 1.808.903 2.701.174.447.363.89.574 1.335.105.223.22.44.335.662l.002.004.187.333.002.002c.067.113.117.21.228.377l.223.345.353.18c.317.165.58.288.864.42h.002l.833.378h.004l.114.047c-3.698 3.456-7.686 7.874-11.155 13.352L0 86.261l.374.321 6.27-5.503h.002c.03-.026 1.381-1.2 3.799-2.99 2.34-1.732 5.784-4.087 9.968-6.567l.052.44a68.1 68.1 0 0 0-1.837.992c-.867.487-1.756 1.011-2.205 1.385-.725.605-1.114 1.4-1.26 2.427-.147 1.028-.068 2.296.114 3.935.187 1.7.819 4.95 1.668 7.94.731 2.576 1.364 4.1 1.954 5.031.589.93 1.168 1.272 1.69 1.392.453.106 1.016.151 1.642.151 1.635 0 3.645-.321 5.075-.726a51.629 51.629 0 0 0 6.601 13.374l-.013.004c-1.77-.82-7.615-3.528-9.612-4.427l-4.965-2.23 2.937 4.579.002.002c.169.26 4.465 6.966 7.98 11.486 3.29 4.228 7.868 8.598 16.41 8.598a29.03 29.03 0 0 0 3.208-.19c2.505-.284 4.379-.507 5.819-.692 8.911 3.258 18.74 3.454 28.063-.078a41.044 41.044 0 0 0 6.974-3.446 2.88 2.88 0 0 0 .107-.024c3.455-.83 7.37-1.763 9.318-2.312.307-.083.69-.172 1.096-.268 2.698-.62 7.319-1.7 9.771-6.605h.003a490.13 490.13 0 0 1 4.094-7.968 822.963 822.963 0 0 1 1.637-3.106l.49-.926.136-.255.049-.093.002-.002 2.18-4.099-4.255 1.847c-.077.035-1.283.56-2.744 1.224-1.352.614-2.885 1.34-4.061 1.944 1.655-3.498 2.574-6.294 2.921-7.504 1.368.284 3.19.275 4.56.275a8.42 8.42 0 0 0 1.98-.251c.505-.13 1.02-.419 1.511-1.305.491-.885 1.013-2.374 1.7-5.028.795-3.089 1.367-6.436 1.525-8.182.152-1.681.208-2.982.044-4.03-.164-1.048-.563-1.855-1.296-2.46h-.002c-.372-.307-1.04-.712-1.755-1.121a57.867 57.867 0 0 0-1.555-.847l.267.067.239.06.952-3.616c.292-.123.594-.248.94-.383.56-.218 1.119-.443 1.677-.681l.002-.002.833-.376h.002c.286-.133.547-.256.864-.42l.352-.183.224-.345c.105-.161.164-.26.232-.381l.18-.327a11.553 11.553 0 0 0 .341-.668v-.002c.207-.443.397-.889.574-1.335.35-.893.646-1.79.903-2.699v-.002l.002-.002a35.61 35.61 0 0 0 1.038-5.525v-.002c.209-1.863.26-3.736.167-5.607a30.94 30.94 0 0 0-.268-2.796v-.002a21.21 21.21 0 0 0-.232-1.398h.002c-.093-.47-.19-.914-.337-1.434v-.002l-.12-.436-.321-.253c-1.483-1.165-3.08-2.04-4.693-2.814v-.002a49.749 49.749 0 0 0-3.946-1.637c-3.809-10.51-10.33-19.839-18.907-26.348C90.238 4.072 79.773.5 68.873.5Zm0 .498c10.79 0 21.147 3.534 29.96 10.221 8.522 6.468 15.014 15.755 18.786 26.228l.039.109.109.04c1.355.5 2.69 1.042 4.005 1.663v-.002c1.595.765 3.157 1.626 4.599 2.76l.192.151.078.278v.002c.142.504.233.932.325 1.398h.002c.092.452.163.91.224 1.368v.002c.128.913.22 1.832.265 2.752a34.214 34.214 0 0 1-.164 5.53v.002a35.127 35.127 0 0 1-1.025 5.45 28.457 28.457 0 0 1-.886 2.648c-.174.438-.36.874-.562 1.308-.101.213-.206.423-.325.638l-.181.327a5.405 5.405 0 0 1-.212.35l-.154.236-.236.12c-.31.16-.56.281-.844.413l-.827.372c-.55.235-1.102.46-1.656.675h-.003c-.39.153-.737.293-1.066.432l-.113.049-.89 3.38c-.12-.03-.213-.055-.581-.144l-.269-.066-.109.814.156.08c.506.264 1.257.666 1.964 1.07.706.403 1.376.82 1.685 1.074.637.527.972 1.182 1.123 2.15.151.969.104 2.24-.047 3.908-.153 1.694-.725 5.044-1.514 8.104-.681 2.638-1.204 4.104-1.652 4.912-.448.808-.765.952-1.199 1.062a8.034 8.034 0 0 1-1.857.236c-1.45 0-3.414.033-4.678-.273l-.233-.056-.065.23c-.337 1.193-1.304 4.321-3.217 8.226l-.317.648.65-.315c.088-.043.185-.083.286-.137 1.175-.617 2.904-1.424 4.361-2.086 1.457-.661 2.623-1.17 2.739-1.222l2.944-1.279-1.508 2.838c-.015.026-.023.04-.053.097l-.136.257-.492.926a892.832 892.832 0 0 0-1.635 3.108 493.16 493.16 0 0 0-4.102 7.977h.002c-2.355 4.709-6.744 5.721-9.441 6.34h-.002c-.406.097-.793.188-1.113.275v.002H100c-1.923.541-5.845 1.477-9.3 2.308h-.003a1.105 1.105 0 0 1-.1.022l-.051.008-.045.027a40.57 40.57 0 0 1-6.942 3.429c-9.233 3.497-18.962 3.302-27.787.059l-.056-.022-.06.008c-1.44.185-3.334.412-5.858.699a28.544 28.544 0 0 1-3.153.185c-8.374 0-12.762-4.224-16.016-8.408-3.49-4.486-7.76-11.147-7.956-11.449l-.002-.002-2.032-3.168 3.435 1.545c2.005.903 7.984 3.67 9.694 4.463l.083.039.09-.025.412-.12.333-.096-.198-.285c-2.828-4.033-5.149-8.633-6.788-13.73l-.076-.233-.234.07c-1.366.412-3.516.74-5.16.74-.601 0-1.136-.048-1.529-.14-.414-.096-.84-.315-1.383-1.172-.544-.858-1.171-2.348-1.896-4.9-.84-2.963-1.47-6.213-1.652-7.859-.18-1.627-.251-2.866-.117-3.811.135-.945.457-1.59 1.088-2.115.37-.31 1.27-.85 2.13-1.333.859-.483 1.69-.918 1.975-1.065l.153-.08-.186-1.557-.33.193A117.913 117.913 0 0 0 10.15 77.69c-2.43 1.799-3.758 2.948-3.834 3.015l-4.967 4.361 3.538-5.581v-.002c3.522-5.561 7.592-10.059 11.337-13.524l.288-.266-.364-.148c-.15-.06-.29-.12-.442-.183l-.827-.372-.002-.002a22.107 22.107 0 0 1-.843-.41h-.002l-.233-.12-.154-.237v-.002c-.1-.15-.143-.229-.214-.35l-.002-.004-.18-.315-.003-.008a17.115 17.115 0 0 1-.32-.636v-.002a19.42 19.42 0 0 1-.562-1.302V61.6a28.296 28.296 0 0 1-.885-2.653A34.65 34.65 0 0 1 10.45 53.5v-.002a34.61 34.61 0 0 1-.163-5.529 32.767 32.767 0 0 1 .266-2.754c.067-.46.134-.917.224-1.368v-.002c.096-.466.188-.895.327-1.399l.076-.28.195-.152c1.441-1.132 3.001-1.991 4.596-2.756l.002-.002a50.031 50.031 0 0 1 4.004-1.658l.109-.039.039-.11C23.9 26.972 30.39 17.685 38.91 11.218 47.724 4.532 58.082.998 68.873.998Zm-.002 1.901c-20.274 0-38.829 13.215-46.584 33.493l-.183.48.49-.153a68.567 68.567 0 0 1 3.264-.94c.58-.148 1.169-.243 1.751-.38-.555.214-1.113.424-1.666.647a92.99 92.99 0 0 0-4.77 2.05c-1.566.717-3.106 1.484-4.58 2.344-1.362.784-2.671 1.647-3.833 2.625l-.07.059-.015.091a25.738 25.738 0 0 0-.137.915v.004c-.05.425-.102.856-.136 1.292a33.612 33.612 0 0 0-.115 2.606 38.335 38.335 0 0 0 .323 5.206v.004c.239 1.724.554 3.442 1.024 5.104.233.832.495 1.652.802 2.447a17.833 17.833 0 0 0 .757 1.732l.002.002.146.28.07.037c.131.068.266.134.393.194l.77.366c.428.198 1.022.479 1.515.699l.138.062.119-.095a1.03 1.03 0 0 0 .097-.09l.101-.1-1.391-5.318c.419-.112 2.9-.752 7.413-1.611l-.002-.49a21.27 21.27 0 0 1-1.117-.238h-.002a23.189 23.189 0 0 1-3.085-.987l-.004-.002a14.293 14.293 0 0 1-1.44-.696h-.002c-.174-.1-.3-.242-.463-.352 2.584.645 6.005.885 10 .794 4.477-.103 9.482-.537 14.192-1.022 8.603-.888 17.221-1.46 25.883-1.481 8.662.02 17.286.592 25.883 1.48 4.713.486 9.72.92 14.197 1.022 3.997.092 7.42-.147 10.003-.793-.163.11-.29.252-.465.352-.458.26-.948.485-1.446.698a23.353 23.353 0 0 1-3.09.987c-.154.035-.309.071-.463.103l.006.489c4.96.919 7.705 1.632 8.146 1.75l-1.428 5.421.474-.212c.273-.122.551-.242.826-.37l.77-.368c.126-.06.263-.124.395-.192l.072-.037.14-.279v-.002c.094-.18.185-.37.273-.56.174-.381.34-.772.494-1.173h.002c.304-.794.565-1.616.794-2.447v-.002c.47-1.661.79-3.38 1.026-5.104v-.002c.222-1.723.338-3.464.321-5.206a33.86 33.86 0 0 0-.113-2.608c-.036-.432-.083-.86-.136-1.288v-.002a19.579 19.579 0 0 0-.138-.92l-.016-.09-.07-.059c-1.161-.978-2.47-1.838-3.832-2.623a51.531 51.531 0 0 0-4.587-2.345h.004c-1.561-.736-3.165-1.404-4.772-2.051-.552-.223-1.11-.435-1.667-.648.583.136 1.174.232 1.753.38a68.45 68.45 0 0 1 3.268.94l.49.155-.183-.481C107.7 16.113 89.14 2.899 68.871 2.899Zm0 .499c19.885 0 38.095 12.878 45.895 32.692a65.209 65.209 0 0 0-2.76-.794c-1.69-.434-3.402-.827-5.132-1.113l-.126.479c.818.298 1.638.593 2.442.905l.002.002h.002a85.45 85.45 0 0 1 2.415.94c1.604.646 3.197 1.31 4.745 2.04h.004a51.165 51.165 0 0 1 4.544 2.325c1.32.76 2.577 1.594 3.692 2.524.044.26.087.534.119.796v.002a33.253 33.253 0 0 1 .245 3.84 37.492 37.492 0 0 1-.317 5.14c-.233 1.707-.549 3.402-1.01 5.034v.002a26.353 26.353 0 0 1-.783 2.401 20.156 20.156 0 0 1-.48 1.147 13.014 13.014 0 0 1-.265.539v.002l-.068.134c-.104.052-.208.105-.31.154v-.002l-.768.366-.34.153 1.291-4.906-.237-.066c-.294-.08-3.372-.802-7.425-1.594.893-.24 1.782-.496 2.643-.842l.002-.002h.002a14.882 14.882 0 0 0 1.499-.726h.002c.482-.277.97-.597 1.358-1.04l.602-.683-.866.283c-2.503.817-6.418 1.053-10.871.951-4.454-.102-9.45-.533-14.156-1.018-8.61-.89-17.251-1.465-25.934-1.485-8.684.02-17.319.596-25.934 1.485-4.704.485-9.698.916-14.15 1.018-4.453.102-8.368-.134-10.871-.951l-.866-.283.6.683c.39.444.88.764 1.361 1.04h.002c.484.274.99.51 1.497.726h.002l.002.002c1.026.414 2.087.742 3.156 1.008h.002c.004 0 .007 0 .01.002-3.479.702-6.284 1.353-6.558 1.428l-.238.064 1.384 5.278c-.394-.18-.812-.375-1.138-.525h-.002l-.767-.366a12.778 12.778 0 0 1-.312-.154l-.07-.134.004.004c-.088-.177-.18-.36-.263-.543a17.398 17.398 0 0 1-.477-1.145v-.002H14.9c-.3-.775-.556-1.583-.786-2.403-.46-1.63-.772-3.327-1.008-5.035v-.004a37.842 37.842 0 0 1-.32-5.135c.01-.861.04-1.72.116-2.57v-.001c.032-.421.082-.845.132-1.27v-.003a26.2 26.2 0 0 1 .117-.794c1.115-.93 2.373-1.766 3.691-2.526a51.577 51.577 0 0 1 4.54-2.324h.003c1.552-.73 3.144-1.393 4.746-2.04.805-.323 1.61-.64 2.415-.94h.002l.002-.001c.81-.313 1.622-.608 2.445-.905l-.125-.479c-1.73.286-3.441.68-5.136 1.113-.923.24-1.84.514-2.755.794C30.776 16.276 48.98 3.398 68.87 3.398ZM53.798 9.024l-.424.74c-.008.013-.012.028-.02.042v.004h-.002c-5.033 8.794-5.362 19.13-5.276 23.297l-.165-.158a21.72 21.72 0 0 1-.16-.155 5.468 5.468 0 0 1-.04-.041l-.006-.006-.012-.014c-.053-.053-.07-.062-.035-.027l-.006-.004-.004-.002c.01.01-.002-.006-.004-.008-.057-.06-.094-.073-.07-.054l-.004-.002c-.05-.036-.096-.061-.132-.082l-.006-.004-.006-.002a.216.216 0 0 0-.056-.033l-.006-.004-.008-.002a1 1 0 0 0-.183-.062h-.002c.024.004-.001-.01-.074-.014a.923.923 0 0 0-.249-.015h-.017a1.27 1.27 0 0 0-.177.025l-.012.002-.012.004a.31.31 0 0 0-.027.008l-11.235 3.191c-.082-2.664.005-12.327 5.13-20.572l-.399-.298a.359.359 0 0 1-.025.033l-.002.004c-.28.317-6.103 7.093-6.554 21.359l-1.692.483a1.104 1.104 0 0 0-.792.885 48.983 48.983 0 0 0-.665 8.49c.024 2.04.179 3.188.206 3.377-.081.024-.159.047-.243.074h-.002c-1.749.573-3.516 1.192-5.132 2.13l-.01.001c-.011.007-.024.01-.035.016l.218.447c.84-.332 1.717-.573 2.6-.791a45.907 45.907 0 0 1 2.668-.583 83.432 83.432 0 0 1 5.402-.844h.004a115.573 115.573 0 0 1 5.438-.586c1.822-.154 3.638-.31 5.459-.416h.002c7.293-.431 14.607-.569 21.927-.573 7.322.008 14.637.122 21.928.57h.002c1.822.107 3.637.262 5.46.415 1.819.154 3.628.35 5.437.586h.004c1.81.22 3.608.507 5.402.845.894.17 1.782.36 2.662.585h.002c.887.219 1.76.46 2.6.792l.218-.447c-.01-.007-.024-.01-.035-.016l-.01-.004c-1.617-.937-3.384-1.552-5.128-2.123h-.002c-.084-.027-.165-.05-.247-.074.045-.333.664-5.052-.46-11.871a1.109 1.109 0 0 0-.79-.886l-1.696-.482c-.448-14.266-6.282-21.055-6.549-21.359l-.002-.004-.025-.033-.4.298c5.124 8.245 5.214 17.909 5.13 20.572l-11.238-3.191-.002-.002h-.002l-.014-.006-.029-.006a1.278 1.278 0 0 0-.181-.025h-.018a.898.898 0 0 0-.234.014c-.032 0 .006 0-.009.001-.032.002-.08.004-.021.004h-.032l-.03.008a1.423 1.423 0 0 0-.184.062l-.017.008-.016.01c-.026.015-.03.014-.008.006l-.029.011-.025.018c-.03.02-.069.042-.117.076a.713.713 0 0 1-.035.025c-.018.013-.002.002-.011.01-.02.017-.05.042-.024.021l-.017.014-.016.017c.053-.064.046-.054-.02.012l-.003.004-.006.006c.027-.031.004-.004-.006.006l-.043.043-.161.155-.164.156c.086-4.17-.247-14.501-5.274-23.293 0-.002 0-.004-.002-.006-.008-.014-.011-.029-.02-.043l-.45.207c.106.309 4.187 12.288 2.802 25.71-.435.343-.877.68-1.312.973a1.122 1.122 0 0 0-.486.897v.006l-.002.048-.006.146c-.007.127-.018.31-.037.541a22.312 22.312 0 0 1-.24 1.876c-.26 1.526-.758 3.5-1.693 5.3-.007.014-.007.026-.013.04a210.14 210.14 0 0 0-14.059-.459 212.22 212.22 0 0 0-14.06.45c-.005-.009-.006-.017-.01-.025l-.002-.004v-.002c-.935-1.8-1.433-3.774-1.694-5.3a22.453 22.453 0 0 1-.239-1.876 16.759 16.759 0 0 1-.037-.54l-.008-.149-.002-.039a1.109 1.109 0 0 0-.48-.909l-.002-.002h-.002a21.39 21.39 0 0 1-1.313-.972c-1.383-13.422 2.703-25.412 2.806-25.71l.016-.045zM55.33 12.6v11.355h8.189v-3.172h1.23V34.94h-2.608v8.693h13.96V34.94h-2.622V20.782h1.236v3.172h8.195V12.601Zm-2.698.122c-1.032 3.491-3.276 11.981-2.105 23.11l.01.105.081.065c.465.372.955.737 1.434 1.06.163.112.265.3.267.495v.02c-.002-.03 0-.006 0 .003l.002.041.008.154a22.992 22.992 0 0 0 .284 2.476c.266 1.558.77 3.576 1.74 5.444a.97.97 0 0 1 .05.13l.057.19.199-.014c4.73-.322 9.474-.452 14.21-.455 4.737.003 9.479.14 14.209.465l.202.013.054-.196a.65.65 0 0 1 .05-.13l.001-.003c.97-1.868 1.474-3.886 1.74-5.445a22.812 22.812 0 0 0 .245-1.917 17.18 17.18 0 0 0 .04-.558l.005-.154.002-.06a.623.623 0 0 1 .268-.497c.481-.324.964-.69 1.433-1.062l.082-.064.01-.105c1.17-11.127-1.07-19.618-2.1-23.109 3.82 8.366 4.163 17.53 4.06 20.948l-.018.6.437-.41c.244-.23.442-.42.582-.556l.164-.157.045-.045c.006-.007.014-.012.02-.017-.02.018.017-.018.02-.018.007-.006.027-.024.004-.008l.012-.008.004-.002.015-.013c-.02.02-.012.012-.003.006.027-.02.061-.04.103-.068l.006-.004.005-.002a.994.994 0 0 1 .115-.041h.002l.004-.002.022-.004a.504.504 0 0 1 .122-.012h.014c-.02 0-.017.004.045.004h-.018a.827.827 0 0 1 .11.014h.001a.094.094 0 0 1 .01.004h.002l11.865 3.372.014-.317c.07-1.775.105-7.875-2.086-14.43 1.407 3.475 2.764 8.25 2.946 14.815l.006.181 2.04.58a.613.613 0 0 1 .436.489c1.127 6.844.476 11.622.45 11.813a.77.77 0 0 1-.02.085l-.066.236.235.07c.152.044.297.087.444.134.467.153.887.396 1.35.559-.47-.104-.938-.221-1.41-.312a83.97 83.97 0 0 0-5.434-.848h-.004a122.126 122.126 0 0 0-5.458-.59c-1.821-.153-3.642-.308-5.472-.414h-.002c-7.306-.45-14.632-.563-21.958-.57-7.326.003-14.652.14-21.958.572-1.829.106-3.651.262-5.472.416-1.826.154-3.649.35-5.461.59-1.82.22-3.632.509-5.434.848-.48.09-.956.208-1.434.314.47-.166.897-.413 1.372-.569.14-.045.29-.086.448-.136l.223-.072-.058-.228c-.01-.042-.017-.066-.021-.087-.011-.07-.184-1.333-.209-3.408a48.482 48.482 0 0 1 .658-8.403.602.602 0 0 1 .434-.489h.002l2.036-.58.006-.18c.183-6.556 1.54-11.327 2.948-14.803-2.186 6.55-2.151 12.643-2.082 14.417l.011.317 11.87-3.372.002-.002.004-.002h.006a.793.793 0 0 1 .105-.014h-.018c.062 0 .07-.004.047-.004h.014a.526.526 0 0 1 .124.012l.025.006h.026c-.095 0-.064-.005-.018.004a.588.588 0 0 1 .092.03c-.001.001.006.008.046.028a.89.89 0 0 1 .078.05l.002.003.004.002c.022.015-.006-.01-.004-.008.004.004.021.023-.01-.012l.006.006.004.006c-.014-.014-.006-.006.03.027.024.023.048.045.025.022l-.022-.028a.906.906 0 0 0 .024.028l.015.015a5.799 5.799 0 0 0 .045.045 42.811 42.811 0 0 0 .75.716l.435.407-.017-.598c-.105-3.417.239-12.583 4.063-20.95Zm3.196.376h26.584v10.357h-7.199v-3.172h-2.232v15.154h2.621v7.697H62.64v-7.697h2.608V20.286h-2.226v3.172h-7.193zm1.808 1.808v6.741h3.57v-3.172h5.857v18.776h-2.616v4.073h9.34v-4.073h-2.614V18.476h5.856v3.172h3.57v-6.741h-9.675zm.498.498H80.1v5.745h-2.573v-3.172h-6.852V37.75h2.613v3.077h-8.343V37.75h2.616V17.978h-6.852v3.172h-2.575zm41.337 3.27a27.12 27.12 0 0 1 1.246 2.668c-.304-.89-.853-1.773-1.246-2.668zm-61.205.01c-.39.888-.936 1.765-1.238 2.648.448-1.085.813-1.86 1.238-2.649zm52.39 14.245h.015l-.047.006c.106 0 .117-.006.032-.006zm-44.419 1.409-.334.095-13.236 3.762-.025.16c-.885 5.757-.472 9.99-.382 10.78l.033.287.28-.076a88.223 88.223 0 0 1 3.26-.817c1.803-.4 3.62-.735 5.444-1.043 1.823-.304 3.655-.537 5.49-.76h.004c.122-.015.247-.025.387-.044l.35-.049-.161-.313a.829.829 0 0 1-.047-.119c-1.244-4.535-1.192-9.314-1.08-11.515zm45.267 0 .018.348c.116 2.2.165 6.984-1.079 11.521a.769.769 0 0 1-.046.125l-.162.32.358.038c.134.014.261.025.378.04h.004c3.67.421 7.325 1.01 10.935 1.803 1.09.253 2.18.523 3.26.815l.278.074.033-.286c.091-.785.507-5.016-.377-10.78l-.026-.159zm-1.189.514-.397.362c-.858.78-2.028 1.783-3.196 2.613l-.097.068-.008.12c-.071 1.19-.41 4.598-1.924 7.772l-.156.327.362.029c1.369.11 2.739.232 4.106.376l.356.039-.09-.349a.605.605 0 0 1-.001-.319v-.002c1.088-3.963 1.144-8.171 1.064-10.497zm-42.888.002-.018.539c-.076 2.329-.022 6.54 1.065 10.497a.59.59 0 0 1-.002.313l-.092.349.358-.04a161.751 161.751 0 0 1 4.103-.379l.362-.029-.156-.327c-1.512-3.171-1.849-6.573-1.919-7.763l-.008-.119-.097-.068c-1.172-.83-2.34-1.831-3.198-2.611zm-1.703.148c-.104 2.301-.113 6.79 1.08 11.219l-.1.012c-1.835.222-3.674.457-5.509.763a110.2 110.2 0 0 0-5.47 1.047h-.002c-1 .23-1.992.482-2.982.747-.105-.985-.42-4.835.383-10.206zm46.294 0 12.603 3.584c.803 5.376.485 9.226.38 10.206a95.528 95.528 0 0 0-2.978-.746h-.004a109.244 109.244 0 0 0-10.982-1.81h-.004l-.091-.01c1.192-4.43 1.183-8.922 1.076-11.225zm-2.193.93c.056 2.361-.03 6.166-1.034 9.824-.024.084.003.16 0 .243a171.662 171.662 0 0 0-3.54-.325c1.402-3.111 1.77-6.28 1.849-7.516 1.003-.72 1.93-1.52 2.725-2.226zm-41.906.002c.794.706 1.72 1.504 2.726 2.224.078 1.236.445 4.398 1.843 7.506a161.59 161.59 0 0 0-3.536.33c-.003-.08.022-.156 0-.236-1.002-3.652-1.087-7.459-1.033-9.824zm20.605 19.124c-2.163.003-4.33.027-6.502.07l-.052.002-4.087 1.935-.006.006-.027.015c-.635.31-5.877 2.96-10.836 7.703l.288.399c4.417-2.322 10.908-5.357 18.544-7.709a91.728 91.728 0 0 1 7.156-1.887l-.048-.493a329.684 329.684 0 0 0-4.426-.04zm-14.356.284-.259.01c-3.699.135-7.399.307-11.095.516-2.148.119-4.286.265-6.424.426-1.07.082-2.136.168-3.201.284a27.604 27.604 0 0 0-.911.103l-.05.008-.045.025c-2.798 1.674-13.498 8.387-20.87 17.202l.332.364c7.114-4.944 19.51-12.376 34.807-16.657h.002a95.47 95.47 0 0 1 7.512-1.777l.202-.039v-.206zm31.356.1.173.37-.38-.273-.01.013-.283.368h.023c-.19.274-.375.546-.738 1.041-1.574 2.13-4.7 6.042-8.697 9.35l-.73.605.934-.168c5.714-1.024 15.616-3.553 24.204-9.545h.002v-.002c.218-.155.43-.313.637-.458l.307-.214-.317-.2c-.03-.018-.052-.047-.154-.047h.018a352.361 352.361 0 0 0-6.269-.414 575.967 575.967 0 0 0-8.72-.426zm-17 .114h.004c.856.002 1.712.015 2.57.024-1.834.445-3.671.896-5.396 1.424h-.001c-6.866 2.114-12.567 4.721-16.92 6.928 4.447-3.876 8.775-6.149 9.302-6.406l.008-.004.008-.004.033-.02.004-.001.002-.002.012-.006 3.937-1.863a350.453 350.453 0 0 1 6.437-.07zm17.113.39c2.86.12 5.72.257 8.58.42 1.87.105 3.734.236 5.599.372l-.082.058c-8.132 5.673-17.405 8.18-23.164 9.279 3.699-3.206 6.648-6.798 8.14-8.818.454-.62.743-1.041.927-1.311zm-2.963.025-.57.058a71.786 71.786 0 0 0-6.188.9c-6.918 1.294-13.302 3.447-18.613 5.65l.107.48c3.75-.182 7.697-.29 11.813-.29 2.49 0 4.908.041 7.263.11l.105.004.076-.074a55.603 55.603 0 0 0 4.992-5.523v-.002c.241-.302.468-.591.67-.856zm-31.414.004c-1.662.371-3.343.72-4.943 1.17-14.244 3.986-25.775 10.61-33.103 15.522C20.39 64.772 29.777 58.742 32.4 57.17c.281-.036.557-.07.838-.098h.004a98.865 98.865 0 0 1 3.186-.28c2.135-.161 4.268-.308 6.413-.426a562.5 562.5 0 0 1 8.419-.391zm30.294.636c-.096.123-.182.236-.285.364v.002a55.65 55.65 0 0 1-4.884 5.402 245.678 245.678 0 0 0-7.162-.109c-3.593 0-6.993.112-10.31.253 5.01-2 10.785-3.923 17.096-5.104 1.81-.344 3.67-.602 5.545-.808zm22.314.615-.082.058c-3.508 2.522-7.35 4.54-11.13 6.152l.074.477c11.594 1.128 20.109 2.807 23.98 3.66l.234.051 2.027-7.68-.253-.056c-2.759-.625-7.837-1.67-14.751-2.648zm.115.524c6.718.954 11.61 1.956 14.372 2.578l-1.773 6.714c-3.844-.842-11.995-2.402-22.968-3.514 3.525-1.552 7.085-3.43 10.369-5.778zm-52.929.655C43.755 60.1 37.04 62.59 31.157 65.297l.142.47a229.85 229.85 0 0 1 13.736-1.79l.087-.008.063-.062a47.156 47.156 0 0 1 6.07-5.054zm-26.821.543c-1.862.36-3.38.685-4.504.94l-.253.059.691 2.61.3-.238a65.952 65.952 0 0 1 3.953-2.92zm25.797.277c-1.644 1.209-3.38 2.546-5.124 4.268-4.533.456-8.307 1.003-11.766 1.535 5.115-2.253 10.768-4.297 16.89-5.803zm-26.815.445a62.458 62.458 0 0 0-2.756 2.036l-.366-1.384c.81-.182 1.951-.416 3.122-.652zm46.008 4.996c-6.471 0-12.517.265-17.996.677l-.046.004-.043.022a102.172 102.172 0 0 0-6.51 3.468 68.32 68.32 0 0 0-2.261 1.376c-.112.071-.154.1-.191.126l.006-.006-4.178 2.785 2.868-4.116a33.232 33.232 0 0 1 1.872-2.442l.401-.477-.619.07a214.647 214.647 0 0 0-14.946 2.185l-.231.043 1.979 16.05 6.848 4.795 21.41-4.76 4.003-13.187v-.002a.645.645 0 0 1 .288-.362l.005-.004.004-.002a.468.468 0 0 1 .13-.058c.08-.022.619-.175 1.462-.366a32.713 32.713 0 0 1 3.182-.563l.055-.005 3.929-2.375a30.481 30.481 0 0 0 3.374-2.386l.536-.432-.687-.011a268.79 268.79 0 0 0-4.644-.047zm0 .498c1.312 0 2.592.02 3.867.04-.876.676-1.764 1.343-2.703 1.91l-3.848 2.326c-1.204.15-2.333.369-3.172.558-.855.194-1.436.359-1.479.37l-.002.002a.966.966 0 0 0-.26.115 1.137 1.137 0 0 0-.513.646v.002l-3.92 12.909-20.912 4.65-6.486-4.542L27.9 68.797c3.606-.66 8.423-1.41 14.082-2.061-.52.64-1.037 1.287-1.52 1.983l-3.621 5.196.342.35 5.278-3.518.002-.002.171-.111c.11-.07.268-.172.473-.3a67.98 67.98 0 0 1 1.771-1.066c1.52-.886 3.72-2.1 6.432-3.428a239.39 239.39 0 0 1 17.912-.675zm18.395.207-.049.017a90.002 90.002 0 0 1-11.282 3.069c-1.478.3-2.7.508-3.577.642a29.02 29.02 0 0 1-1.508.2l-.508.038-.004.498c2.744.236 5.369.984 5.47 1.014.211.063.374.22.439.43l3.991 13.142 21.39 2.43 6.885-4.822 1.958-13.702-.235-.043c-5.39-.981-13.268-2.17-22.918-2.91Zm.05.506c9.496.73 17.232 1.89 22.593 2.86l-1.859 13.008-6.554 4.59-20.876-2.373-3.898-12.831a1.148 1.148 0 0 0-.77-.761h-.001c-.114-.034-2.165-.42-3.912-.726.178-.025.17-.018.395-.052a76.074 76.074 0 0 0 3.6-.646 90.828 90.828 0 0 0 11.282-3.07zm24.406 2.685-.037.259-1.95 13.662a.658.658 0 0 1-.264.432l-7.316 5.116v.002a.645.645 0 0 1-.432.11l-22.047-2.506a.635.635 0 0 1-.54-.445l-4.01-13.207-.136-.035c-1.074-.277-3.812-.92-6.245-.92-2.445 0-5.18.643-6.253.92l-.137.035-4.01 13.207a.635.635 0 0 1-.312.375h-.002l-.004.002a.62.62 0 0 1-.154.055L36.18 90.53a.696.696 0 0 1-.142.015.614.614 0 0 1-.358-.112h-.002l-7.316-5.122a.637.637 0 0 1-.266-.444L26.09 68.614l-.26.05c-.82.16-1.562.312-2.223.45l-.037.008-.033.017c-.469.259-.933.519-1.39.777l-.146.082 2.13 17.217 10.808 7.57 27.063-6.02 4-13.18a.634.634 0 0 1 .507-.448c.994-.16 1.86-.24 2.585-.24.716 0 1.59.08 2.58.24a.624.624 0 0 1 .506.446v.002l4.108 13.521 27.22 3.097 10.504-7.36 2.207-15.435-.228-.049a153 153 0 0 0-3.66-.747zm-23.437.26c-1.474.053-2.675 1.045-3.464 2.535-.788 1.49-1.192 3.491-1.115 5.679.077 2.193.73 3.379 1.752 3.944 1.022.566 2.323.518 3.693.47 1.861-.036 3.304-.339 4.486-.516 1.184-.178 2.085-.23 2.937.183l.486.235-.136-.521a1.613 1.613 0 0 0-.17-.386 2.54 2.54 0 0 0-.536-.656c-.47-.41-1.28-.712-2.417-.652.24-.656.396-1.41.313-2.477-.172-2.189-.892-4.156-1.932-5.578-1.041-1.421-2.42-2.31-3.895-2.26zm23.858.332c1.24.24 2.304.459 3.164.644l-2.11 14.76-10.172 7.126-26.706-3.038-4.013-13.206a1.127 1.127 0 0 0-.905-.794c-1.01-.163-1.905-.247-2.658-.247-.762 0-1.65.084-2.663.247a1.135 1.135 0 0 0-.905.794l-3.917 12.9-26.565 5.91L24.6 86.936l-2.06-16.669c.398-.224.802-.448 1.21-.673.572-.12 1.224-.25 1.914-.386l1.939 15.723c.04.319.213.607.476.79l7.31 5.118h.002l.002.002a1.116 1.116 0 0 0 .891.178h.004l22.048-4.907a1.1 1.1 0 0 0 .28-.103 1.13 1.13 0 0 0 .556-.671l3.93-12.932c1.108-.283 3.7-.876 5.996-.876 2.285 0 4.879.593 5.988.876l3.929 12.932c.132.43.509.745.96.796l22.047 2.504a1.122 1.122 0 0 0 .774-.198l7.314-5.114h.002c.256-.18.424-.461.471-.77zm-23.84.167h.002c1.262-.043 2.499.725 3.474 2.057.975 1.333 1.672 3.217 1.837 5.32.09 1.156-.04 1.976-.31 2.564l-.186.403.441-.053c1.217-.145 1.912.187 2.328.55.143.126.215.246.298.365-.812-.224-1.655-.231-2.624-.086-1.206.182-2.61.477-4.425.51h-.006c-1.367.048-2.584.063-3.433-.407-.849-.47-1.42-1.419-1.495-3.524-.074-2.115.324-4.044 1.06-5.432.733-1.387 1.777-2.221 3.039-2.267zm-39.9.559-.246.002v.076c-1.383.113-2.7.967-3.66 2.35-1.017 1.47-1.652 3.476-1.568 5.68.041 1.037.21 1.764.45 2.37-1.067.317-1.869.782-2.324 1.226-.496.484-.68.884-.718.979l-.255.64.605-.327c1.424-.77 3.076-.663 5.738-.66.289.007.586.005.895-.002.26-.004.523-.008.8-.015 1.361-.014 2.647.064 3.645-.46.499-.262.914-.687 1.185-1.313.27-.627.405-1.45.395-2.548-.021-2.187-.514-4.169-1.368-5.622-.855-1.453-2.099-2.39-3.573-2.376zm.005.498c1.262-.013 2.343.775 3.139 2.129.796 1.354 1.28 3.26 1.3 5.375.01 1.054-.123 1.812-.354 2.347-.232.536-.552.854-.96 1.069-.816.428-2.039.389-3.417.402h-.004c-.277.007-.54.012-.8.016h-.002c-.305.007-.595.009-.874.002h-.006c-2.28-.003-3.844.011-5.256.527.093-.13.062-.144.227-.305.439-.427 1.158-.922 2.31-1.21l.29-.073-.122-.272c-.245-.54-.408-1.317-.452-2.417-.08-2.096.53-4.001 1.481-5.375.952-1.375 2.235-2.204 3.5-2.215zm39.617 1.167a1.648 1.648 0 0 0 .062 3.297h.002a1.648 1.648 0 0 0-.062-3.297zm.01.499h.001a1.14 1.14 0 0 1 1.17 1.128 1.15 1.15 0 0 1-1.127 1.172 1.148 1.148 0 0 1-1.171-1.129 1.143 1.143 0 0 1 1.126-1.171zm28.673.486-.05.354-1.773 12.413v.002a.638.638 0 0 1-.267.43l-2.617 1.831-.02.098c-.201 1.019-.272 1.49-.517 2.477l-.063.245.248.059c1.48.343 3.829.619 5.061.38l.082-.015.055-.06c.321-.349.6-.995.91-1.874.31-.88.626-1.98.921-3.168.59-2.375 1.094-5.098 1.273-7.094v-.002c.146-1.617.159-2.606.087-3.246-.07-.638-.244-.965-.465-1.144-.197-.166-.55-.386-1.006-.652a58.324 58.324 0 0 0-1.543-.862zm-67.923.053a1.651 1.651 0 0 0-1.607 1.689c.024.91.784 1.632 1.693 1.607a1.652 1.652 0 0 0 1.603-1.69 1.651 1.651 0 0 0-1.689-1.606zm.012.498a1.145 1.145 0 0 1 1.18 1.119 1.149 1.149 0 0 1-1.118 1.181 1.147 1.147 0 0 1-1.183-1.12 1.146 1.146 0 0 1 1.121-1.18zm68.305.234c.424.233.857.47 1.212.679.448.262.81.494.94.603l.002.002v.002c.105.085.222.236.286.813.065.577.06 1.545-.086 3.147v.002c-.174 1.953-.676 4.666-1.26 7.02-.293 1.177-.606 2.265-.908 3.122-.286.814-.574 1.379-.768 1.617-1.01.169-3.108-.053-4.513-.35.18-.76.282-1.295.444-2.12l2.454-1.714h.001a1.135 1.135 0 0 0 .474-.771v-.002zm-96.204.938-.32.17c-.596.32-1.239.676-1.78.991-.542.316-.97.58-1.191.765-.215.178-.384.5-.444 1.12-.06.62-.03 1.575.142 3.136.216 1.94.809 4.709 1.48 7.135a38.811 38.811 0 0 0 1.032 3.234c.34.896.635 1.546.97 1.882l.056.057.078.013c1.365.241 4.1-.156 5.51-.57l.243-.072-.076-.241a43.841 43.841 0 0 1-.393-1.333l-.024-.088-3.367-2.355a.629.629 0 0 1-.268-.444v-.002zm-.405.788 1.558 12.675v.002c.042.317.214.603.48.788l3.22 2.254c.092.326.19.65.288.975-1.358.359-3.815.69-4.94.521-.19-.22-.5-.796-.817-1.629a38.258 38.258 0 0 1-1.015-3.19c-.667-2.404-1.257-5.164-1.468-7.056-.17-1.545-.194-2.48-.14-3.036.054-.556.163-.699.265-.782l.002-.002c.146-.122.589-.403 1.123-.715.437-.255.949-.537 1.444-.805zm48.047 1.128-.004.016a13.732 13.732 0 0 0-1.62.127l-.16.021-3.994 13.158a.633.633 0 0 1-.469.432h-.002l-27.69 6.167a.782.782 0 0 1-.147.014.631.631 0 0 1-.366-.115v-.002l-1.008-.699-2.908-2.036v-.007l-1.922-1.343.22.697c.072.229.152.449.231.667l-.004.004.05.146c.24.711 2.58 7.444 7.348 14.051l.103.142.169-.049a556.6 556.6 0 0 0 10.883-3.34l.083-.026.049-.074c1.422-2.192 3.148-4.376 4.867-6.021 1.718-1.645 3.44-2.733 4.768-2.803.495-.023 1.01-.039 1.52-.039 1.404 0 2.75.102 3.995.25l.773.09-.576-.523c-.731-.664-.991-1.332-1.166-1.89.758.54 3.745 2.547 7.99 2.003 4.162-.538 6.565-2.451 7.221-3.005-.094.593-.373 1.654-1.839 2.748l.222.44c3.94-1.191 5.562-1.592 6.617-1.592 1.162 0 1.677.454 2.209.907l.002.004.003.002c.097.077.2.167.321.266l.003.002.001.002c3.03 2.386 6.674 5.28 7.74 6.129l.057.044.07.008c1.236.145 5.15.592 7.623.82l.002.002c1.423.128 2.713.235 3.985.235.413 0 .798-.015 1.162-.039l.14-.01.064-.124c1.64-3.127 3.11-6.667 4.358-10.661l.002-.004.002-.004c.166-.613.33-1.235.476-1.86l.148-.635-1.428 1-2.41 1.692-2.611 1.83a.66.66 0 0 1-.44.112L77.62 90.541l-1.89-.214h-.001a.635.635 0 0 1-.535-.448L71.08 76.334l-.16-.021a13.821 13.821 0 0 0-1.825-.142Zm.205.499c.448 0 1.004.05 1.603.126l4.019 13.228a1.133 1.133 0 0 0 .954.798h.002l1.891.214.177.02-.412.383s-2.864 2.658-7.489 3.256c-4.588.588-8.212-2.236-8.212-2.236l-.627-.49.235.76c.122.395.426 1.347 1.176 2.252-1.12-.119-2.283-.22-3.525-.22a32.888 32.888 0 0 0-1.543.039h-.002c-1.567.082-3.33 1.258-5.087 2.94-1.735 1.66-3.446 3.84-4.875 6.03a570.11 570.11 0 0 1-10.626 3.26c-4.578-6.396-6.844-12.794-7.128-13.631l-.008-.024-.047-.126-.027-.078.48.337v.007l3.122 2.184 1.004.697c.197.14.427.208.654.208.076 0 .157-.005.241-.022l.005-.002L62.75 90.41c.399-.087.72-.384.84-.774l3.9-12.84a13.265 13.265 0 0 1 1.607-.127zm40.597 13.362c-.1.399-.2.798-.307 1.195-1.224 3.912-2.66 7.376-4.258 10.442a16.62 16.62 0 0 1-.987.033c-1.243 0-2.52-.105-3.94-.233h-.003c-2.438-.225-6.269-.663-7.539-.812a2491.31 2491.31 0 0 0-7.683-6.083l-.004-.004c-.11-.09-.21-.176-.315-.26-.533-.455-1.232-1.028-2.532-1.028-1.028 0-2.944.532-5.903 1.407 1.417-1.467 1.526-3.065 1.526-3.065l.004-.567 25.798 2.935c.274.03.551-.042.778-.198l2.612-1.83 2.409-1.691zm-27.57 5.988c-.648 0-1.757.267-3.65.81-1.892.542-4.548 1.366-8.196 2.497l-.368.114-.364-.136-.006-.002-.058-.021c-.04-.015-.099-.033-.173-.059a22.55 22.55 0 0 0-.639-.208c-.55-.17-1.34-.396-2.306-.62-1.933-.45-4.58-.896-7.475-.896a27.39 27.39 0 0 0-1.407.035c-.242.012-.543.13-1.008.39-.465.259-1.063.667-1.77 1.278-1.417 1.221-3.268 3.253-5.341 6.533l-.22.344-.39.125-.001.002-.088.03-.249.079a514.069 514.069 0 0 1-4.206 1.323 490.035 490.035 0 0 1-10.139 3.03l-.399.113-.383-.179-.006-.002c.028.012-.009-.002-.033-.013l-.105-.049-.384-.177-1.333-.617c-1.093-.505-2.531-1.168-3.933-1.812l-.81-.373.5.74c1.53 2.26 3.486 5.077 5.213 7.295 3.02 3.89 6.905 7.541 14.247 7.541.921 0 1.897-.057 2.9-.171 7.386-.835 9.301-1.174 10.324-1.352.348-.06.619-.109.961-.15a15.498 15.498 0 0 0 3.344-.888c1.761-.684 3.762-1.855 4.653-3.853 1.75-3.914 2.104-4.848 2.121-4.893l.627-1.667.004-.024.037-.155c.02.023.033.033.05.056.091.12.158.224.158.224l.008.011 1.027 1.22c.013.017.013.019.03.038l.081.095c.07.082.17.2.3.35a89.794 89.794 0 0 0 4.645 4.988c1.878 1.86 4.17 2.812 6.773 2.812.889 0 1.819-.114 2.757-.34.854-.208 1.784-.428 2.735-.656 3.433-.82 7.32-1.753 9.217-2.285.363-.103.777-.195 1.216-.296 2.51-.58 6.066-1.412 7.938-5.163h-.002a539.073 539.073 0 0 1 4.589-8.897l.342-.65-.667.307a77.499 77.499 0 0 0-3.33 1.614c-1.313.69-3.058 1.033-5.342 1.033-1.358 0-2.698-.115-4.188-.247h-.002a293.678 293.678 0 0 1-5.132-.537 583.622 583.622 0 0 1-2.074-.236c-.264-.03-.476-.056-.625-.074l-.236-.027h-.002l-.317-.035-.253-.204-.004-.002c.031.022-.017-.013-.052-.041l-.152-.12-.56-.447-1.925-1.527a1666.045 1666.045 0 0 0-5.34-4.221l-.004-.004c-.142-.116-.271-.225-.39-.323l.003.004c-.189-.16-.28-.247-.402-.312-.036-.02-.071-.011-.108-.021v-.049zm0 .498c.112 0 .097-.004.126.012.03.016.126.089.314.249l.002.002v.002l.397.327.002.002.002.002a1688.097 1688.097 0 0 1 5.342 4.221l1.922 1.528.563.445.152.123c.036.028.03.024.066.05l.354.285.452.05c.04.006.094.012.243.03l.626.072a563.176 563.176 0 0 0 2.077.235c1.641.183 3.647.4 5.142.537v.002h.002c1.492.133 2.846.25 4.232.25 2.334 0 4.163-.35 5.576-1.093.7-.368 1.686-.833 2.637-1.278a514.785 514.785 0 0 0-4.248 8.244h-.002c-1.774 3.552-5.095 4.318-7.604 4.898-.437.1-.857.195-1.24.304-1.872.524-5.764 1.458-9.197 2.278-.95.228-1.879.45-2.734.658-.903.218-1.794.325-2.641.325-2.482 0-4.628-.89-6.422-2.668a89.278 89.278 0 0 1-3.536-3.73 89.278 89.278 0 0 1-1.082-1.229c-.129-.148-.23-.267-.298-.348l-.08-.093-.023-.03-.004-.003-1.002-1.192-.002-.003a5.375 5.375 0 0 0-.177-.246 2.422 2.422 0 0 0-.279-.298v-.529l-.43.454c-.138.145-.168.297-.206.434a1.884 1.884 0 0 0-.05.22l-.616 1.636c-.01.026-.36.956-2.11 4.865-.806 1.809-2.676 2.931-4.376 3.591-1.7.66-3.242.86-3.227.858-.358.044-.636.096-.98.154h-.003c-1.024.179-2.912.514-10.295 1.349a25.37 25.37 0 0 1-2.845.167c-7.178 0-10.867-3.5-13.854-7.348-1.534-1.971-3.21-4.398-4.651-6.512 1.096.504 2.222 1.023 3.078 1.419l1.335.617.384.176.107.05c.025.01.019.01.052.025l.534.247.578-.164a490.594 490.594 0 0 0 10.15-3.034 520.884 520.884 0 0 0 3.286-1.03c.396-.125.708-.226.924-.295l.25-.08c.053-.017.07-.021.093-.03l.005-.001.551-.177.317-.496V106c2.051-3.245 3.874-5.238 5.245-6.422.686-.591 1.26-.98 1.69-1.22.43-.24.746-.325.791-.327a27.24 27.24 0 0 1 1.38-.035c2.843 0 5.456.44 7.362.884a33 33 0 0 1 2.272.61c.27.084.481.154.626.203l.166.059.06.02.52.196.53-.168c3.65-1.13 6.305-1.953 8.188-2.493 1.883-.54 3.013-.79 3.51-.79zm-9.787 17.797-.154.359c-.3.689-.699 1.596-1.224 2.765l-.158.35h.54c.437 0 .9-.045 1.327-.066h.007a28.7 28.7 0 0 0 2.048-.243l.477-.072-.335-.349a88.129 88.129 0 0 1-2.267-2.452zm.148.905a90.702 90.702 0 0 0 1.685 1.822c-.513.07-1.026.143-1.534.183-.362.018-.72.043-1.062.054.367-.82.668-1.504.91-2.059zm3.106 2.585v.395a27.85 27.85 0 0 1-2.873.412c-.454.017-.872.057-1.323.057h-.002l-.687.006-.397-.01-.076.115c-2.716 4.04-8.862 4.875-9.137 4.91-.264.03-.483.067-.775.12l-.02.485c3.493.957 7.066 1.375 10.59 1.138a42.13 42.13 0 0 0 12.953-2.97l-.076-.48c-2.812-.207-5.36-1.372-7.428-3.417l-.004-.004-.32-.323zm.161.874.23.233.002.002.002.002c1.916 1.897 4.289 2.95 6.85 3.336-4.477 1.699-8.707 2.465-11.98 2.683-3.052.205-6.137-.162-9.188-.881.98-.14 6.132-.992 8.863-4.885l.171.004.693-.006c.48 0 .907-.04 1.343-.056h.012a28.394 28.394 0 0 0 3.002-.432z"},null)])}});