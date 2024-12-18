import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"NetworkxLineIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#2c7fb8"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M112.35.008a13.742 13.742 0 0 0-9.672 3.535c-4.635 4.179-5.67 10.82-2.937 16.033l-7.192 6.477a32.601 32.601 0 0 0-18.1-6.398 33.236 33.236 0 0 0-12.859 2.049c-15.943 5.89-24.846 22.692-20.917 38.587l-8.909 3.295a13.175 13.175 0 0 0-10.308-5.696h-.008c-.992-.023-1.977.112-2.95.304l-1.724-4.864c3.138-2.171 4.651-6.109 3.503-9.832l.05-.05-.104-.296c-1.212-3.418-4.395-5.574-7.85-5.725a8.982 8.982 0 0 0-3.485.542C4.29 39.651 1.81 44.701 3.425 49.26v.001c1.35 3.811 5.156 5.986 9.054 5.632l1.721 4.855C8.602 62.934 5.786 69.65 7.994 75.81c2.465 6.872 10.208 10.334 17.152 7.767 5.871-2.17 9.363-7.975 8.831-13.876l8.896-3.287c6.461 13.412 21.593 20.428 36.293 17.092l3.7 10.321a18.893 18.893 0 0 0-8.555 10.163l-4.531-.736c-.331-3.84-3.17-7.138-7.17-7.79-4.805-.786-9.438 2.434-10.354 7.205-.916 4.773 2.308 9.355 7.117 10.14 4.027.656 7.879-1.533 9.577-5.06l4.398.716c-.228 2.522.007 5.118.913 7.644 3.4 9.492 14.093 14.265 23.69 10.719 9.594-3.545 14.728-14.108 11.325-23.6-1.02-2.847-2.735-5.23-4.84-7.131l10.197-17.735c3.839.596 7.8-1.31 9.56-4.97v-.003c2.139-4.373.22-9.714-4.217-11.663l-.095-.042h-.095c-1.025-.432-2.113-.702-3.227-.727h-.006c-2.639-.057-5.152 1.141-6.928 3.14l-5.996-2.88c2.123-6.534 2.257-13.724-.21-20.607-1.383-3.86-3.488-7.244-6.056-10.142l6.764-6.09c4.983 3.223 11.757 2.83 16.409-1.367 5.496-4.956 6.026-13.416 1.081-18.79-2.472-2.685-5.84-4.097-9.267-4.214zm-.035.992c3.178.109 6.288 1.41 8.574 3.893 4.57 4.966 4.088 12.78-1.016 17.382-4.424 3.992-10.931 4.327-15.558 1.115l-.324-.225-7.998 7.204.338.37a30.143 30.143 0 0 1 6.154 10.205c2.442 6.813 2.287 13.94.096 20.388l-.142.417 7.376 3.542.246-.306c1.588-1.967 4.003-3.09 6.473-3.035h.006a7.844 7.844 0 0 1 3.03.684l.019.01c3.913 1.728 5.608 6.437 3.713 10.31v.002l-.002.002c-1.628 3.392-5.65 5.09-9.179 4.354.07-.324.024-.423-.004-.005l-10.924 18.96.31.267a16.648 16.648 0 0 1 4.839 7.03c3.217 8.972-1.634 18.972-10.736 22.335-9.102 3.363-19.197-1.152-22.411-10.123a16.865 16.865 0 0 1-.861-7.674l.056-.471-5.979-.975-.153.359c-1.416 3.334-5.013 5.42-8.726 4.814-4.275-.697-7.116-4.737-6.303-8.973.815-4.243 4.944-7.11 9.221-6.411a7.64 7.64 0 0 1 6.427 7.263l.015.407 6.056.987.132-.403a17.949 17.949 0 0 1 8.615-10.237l.38-.201-4.264-11.892-.432.105c-14.547 3.511-29.632-3.49-35.838-16.876l-.192-.415-10.383 3.835.048.39c.687 5.58-2.63 11.175-8.213 13.24-6.448 2.383-13.595-.82-15.872-7.17-2.09-5.83.64-12.262 6.087-15.127l.38-.201-2.229-6.285-.4.054c-3.597.504-7.167-1.493-8.408-4.99v-.002c-1.43-4.037.766-8.526 4.87-10.027a7.994 7.994 0 0 1 3.1-.481c3.069.134 5.879 2.037 6.954 5.056l.004.01c1.241 3.505-.256 7.346-3.354 9.28l-.338.212 2.245 6.33.432-.101a12.598 12.598 0 0 1 3.145-.324h.004c3.956.16 7.626 2.216 9.773 5.557l.216.335 10.41-3.85-.114-.435c-4.08-15.525 4.603-32.081 20.229-37.855a32.244 32.244 0 0 1 12.475-1.986A31.632 31.632 0 0 1 92.3 27.07l.327.248 8.316-7.488-.196-.347c-2.757-4.858-1.814-11.23 2.593-15.204h.002A12.742 12.742 0 0 1 112.315 1zm-7.33 5.103c-4.144 3.738-4.5 9.935-.852 13.9 3.65 3.964 9.951 4.19 14.095.45 4.143-3.736 4.501-9.933.853-13.897-4.187-4.55-10.737-3.503-14.095-.453Zm7.198-1.673h.01c2.294.079 4.523 1.019 6.16 2.797 3.279 3.562 2.974 9.098-.788 12.49-3.758 3.391-9.425 3.175-12.703-.385-3.28-3.564-2.977-9.1.787-12.493h.002a9.29 9.29 0 0 1 6.533-2.409zm-.147 1.91a7.163 7.163 0 0 0-2.758.443c-3.646 1.347-5.579 5.342-4.296 8.924 1.284 3.583 5.309 5.39 8.955 4.041l.324-.12v-.08c3.408-1.47 5.212-5.263 3.97-8.722-.963-2.688-3.466-4.383-6.195-4.487zm-.039.991c2.345.09 4.477 1.53 5.3 3.828 1.1 3.062-.55 6.491-3.705 7.657l-.01.004c-3.153 1.16-6.569-.385-7.666-3.446-1.097-3.064.55-6.495 3.707-7.66a6.157 6.157 0 0 1 2.374-.382zM74.201 26.347a26.811 26.811 0 0 0-10.278 1.67c-13.659 5.05-20.773 19.87-16.03 33.103C52.62 74.31 67.31 80.979 80.936 76.016h.444v-.19c13.433-5.166 20.409-19.821 15.705-32.944-3.556-9.924-12.75-16.168-22.885-16.535Zm-.035.992c9.752.353 18.569 6.34 21.986 15.877 4.558 12.715-2.269 26.97-15.44 31.837l-.002.002-.011.004c-13.172 4.858-27.317-1.562-31.873-14.274-4.556-12.714 2.27-26.97 15.442-31.837a25.822 25.822 0 0 1 9.898-1.609zm-1.638 5.464c-2.195.023-4.433.42-6.622 1.228C55.897 37.73 50.612 48.67 54.125 58.47c3.512 9.8 14.501 14.738 24.508 11.04 10.01-3.696 15.295-14.639 11.783-24.438-2.743-7.656-10.05-12.35-17.888-12.27Zm.012.992c7.436-.077 14.344 4.36 16.942 11.61 3.326 9.28-1.675 19.66-11.194 23.175-9.517 3.517-19.903-1.162-23.23-10.444-3.326-9.281 1.674-19.657 11.193-23.174a18.682 18.682 0 0 1 6.289-1.167zM12.28 39.65a6.846 6.846 0 0 0-2.625.42c-3.49 1.277-5.325 5.057-4.124 8.444 1.2 3.386 4.974 5.103 8.462 3.826 3.368-1.232 5.129-4.797 4.168-8.09l.058-.058-.104-.296c-.9-2.538-3.246-4.146-5.834-4.246zm-2.625.42.173-.03h-.09zm2.588.572h.002c2.197.085 4.16 1.43 4.928 3.574l.006.015c1.017 2.868-.525 6.08-3.527 7.179-3.006 1.1-6.17-.358-7.186-3.23-1.017-2.866.525-6.074 3.525-7.176L10 41a5.855 5.855 0 0 1 2.242-.358zm9.083 20.674a10.297 10.297 0 0 0-3.94.644c-5.237 1.936-7.966 7.617-6.147 12.688 1.817 5.069 7.475 7.631 12.711 5.696 5.238-1.936 7.965-7.617 6.147-12.688-1.362-3.802-4.883-6.202-8.77-6.34zm-.033.993h.002c3.501.124 6.644 2.264 7.868 5.68 1.632 4.553-.806 9.668-5.558 11.425-4.754 1.757-9.8-.544-11.432-5.1-1.633-4.552.806-9.667 5.558-11.424a9.322 9.322 0 0 1 3.562-.581zm95.202.884a6.877 6.877 0 0 0-6.318 3.878l-.001.005-.002.002v.002l-.002.002c-1.596 3.26-.174 7.2 3.106 8.64l.004.002c.002 0 .002.003.004.004l.006.002c3.318 1.483 7.302.003 8.892-3.312l.002-.006c1.598-3.262.172-7.206-3.115-8.644l-.038-.015-.049-.012.084.027a6.637 6.637 0 0 0-2.568-.575h-.002zm5.69 9.219.006-.01.01-.025zm-5.707-8.227h.004a5.629 5.629 0 0 1 2.178.49l.016.006c2.771 1.215 3.975 4.524 2.618 7.293l-.008.017c-1.361 2.832-4.768 4.09-7.587 2.832h-.004l-.01-.006c-2.773-1.213-3.978-4.523-2.624-7.293l.002-.004.004-.008.002-.004c1.02-2.127 3.197-3.369 5.409-3.323zm-95.379.042a7.157 7.157 0 0 0-2.757.444c-3.648 1.348-5.58 5.343-4.297 8.925 1.285 3.583 5.308 5.387 8.954 4.04 3.647-1.347 5.578-5.342 4.294-8.924-.963-2.686-3.465-4.38-6.194-4.485zm80.305.13-.207.438a32.546 32.546 0 0 1-14.704 15.057l-.39.197 4.462 12.448.391-.045a17.751 17.751 0 0 1 1.87-.11c2.768.112 5.444.885 7.813 2.2l.426.236 10.638-18.49-.357-.264c-2.464-1.823-3.599-5.034-2.825-8.033l.104-.405zm-80.343.863c2.344.09 4.474 1.528 5.298 3.825 1.098 3.065-.548 6.494-3.705 7.661-3.156 1.166-6.576-.378-7.675-3.444-1.098-3.063.55-6.494 3.707-7.66a6.15 6.15 0 0 1 2.374-.382zm80.787.422 5.667 2.533a8.586 8.586 0 0 0 2.92 8.324l-9.771 16.986c-2.395-1.247-5.044-2.025-7.804-2.135h-.022a18.54 18.54 0 0 0-1.597.095l-3.92-10.942a33.483 33.483 0 0 0 14.527-14.86zm-9.167 30.493a14.187 14.187 0 0 0-5.426.885c-7.218 2.666-10.97 10.487-8.467 17.466 2.499 6.974 10.279 10.5 17.496 7.833 7.217-2.667 10.967-10.49 8.465-17.467-1.874-5.232-6.718-8.529-12.068-8.717zm-.035.992c4.965.175 9.433 3.212 11.17 8.058 2.315 6.46-1.146 13.716-7.877 16.204-6.735 2.488-13.902-.776-16.217-7.237-2.316-6.46 1.145-13.716 7.878-16.201a13.193 13.193 0 0 1 5.046-.824zm-31.742.461c-3.104.12-5.85 2.37-6.452 5.502-.687 3.573 1.667 6.924 5.28 7.514 3.617.59 7.108-1.84 7.796-5.42.687-3.572-1.667-6.924-5.277-7.514h-.002l-.037-.006h-.043a6.77 6.77 0 0 0-1.265-.076zm.039.992a5.742 5.742 0 0 1 1.147.07h.004c3.093.507 5.048 3.295 4.461 6.347-.586 3.05-3.576 5.13-6.665 4.626-3.097-.505-5.052-3.293-4.465-6.347.513-2.668 2.87-4.593 5.518-4.696zm31.407 1.756a9.652 9.652 0 0 0-3.717.6c-4.918 1.815-7.523 7.2-5.795 12.024 1.73 4.827 7.148 7.259 12.064 5.442h.002c4.918-1.817 7.523-7.202 5.793-12.027-1.298-3.62-4.668-5.899-8.347-6.039zm2.552 18.066-.172.031h.09zm-2.59-17.073c3.294.125 6.292 2.148 7.45 5.38 1.545 4.304-.773 9.123-5.199 10.761l-.004.002h-.002c-4.426 1.635-9.24-.537-10.785-4.845-1.542-4.306.777-9.126 5.206-10.762a8.643 8.643 0 0 1 3.333-.536z"},null)])}});