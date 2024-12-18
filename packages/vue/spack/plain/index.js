import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"SpackPlainIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#0F3A80"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M64 .784a12.96 12.96 0 0 0-9.192 3.82L4.604 54.808a12.972 12.972 0 0 0 0 18.385l50.204 50.204a12.972 12.972 0 0 0 18.384 0l50.204-50.204a12.972 12.972 0 0 0 0-18.385L73.192 4.604A12.96 12.96 0 0 0 64 .784ZM58.5 14a10.207 10.207 0 0 1 2.02.203c.126.025.25.055.374.086C58.207 16.673 56.5 20.139 56.5 24c0 3.731 1.603 7.083 4.134 9.456a13.156 13.156 0 0 0 2.419 1.815L46.568 53.579l2.6 2.341L35.9 62.812l5.466-13.917 2.602 2.342L56.75 37.04v-.171l.14.015 2.65-2.943c-.342.036-.688.06-1.04.06a10.11 10.11 0 0 1-2.861-.419 9.928 9.928 0 0 1-.92-.322c-.068-.027-.136-.054-.202-.083a9.927 9.927 0 0 1-.7-.336l-.145-.076a9.989 9.989 0 0 1-3.288-2.924c-.074-.102-.15-.201-.22-.306a9.962 9.962 0 0 1-.407-.672l-.036-.06c-.048-.087-.087-.179-.132-.267a9.904 9.904 0 0 1-.26-.542c-.05-.115-.094-.234-.14-.351a9.913 9.913 0 0 1-.181-.5 9.94 9.94 0 0 1-.25-.903 9.95 9.95 0 0 1-.078-.367 10.057 10.057 0 0 1-.094-.625c-.012-.096-.028-.192-.037-.29-.03-.315-.049-.634-.049-.958a10.207 10.207 0 0 1 .202-2.02 9.965 9.965 0 0 1 5.024-6.776 9.929 9.929 0 0 1 3.749-1.152A10.21 10.21 0 0 1 58.5 14zm11 0c5.54 0 10 4.46 10 10 0 5.541-4.46 10-10 10a9.969 9.969 0 0 1-6.466-2.366l-.03-.026a10 10 0 0 1-.783-.751c-.051-.054-.1-.11-.15-.165a9.983 9.983 0 0 1-.589-.718c-.049-.066-.1-.13-.147-.198a9.95 9.95 0 0 1-.595-.94c-.002-.005-.006-.01-.009-.014a9.929 9.929 0 0 1-.492-1.04c-.035-.088-.063-.178-.096-.267a9.916 9.916 0 0 1-.359-1.175 9.995 9.995 0 0 1-.156-.807c-.018-.119-.039-.235-.053-.355A10.152 10.152 0 0 1 59.5 24c0-.399.03-.79.075-1.177.014-.119.035-.235.053-.352a9.993 9.993 0 0 1 .247-1.167c.08-.285.171-.563.274-.837.03-.08.057-.163.09-.243.146-.36.309-.71.494-1.048a9.95 9.95 0 0 1 .604-.954c.046-.065.096-.128.143-.192.187-.251.385-.493.594-.725.049-.054.097-.108.147-.161a10 10 0 0 1 .812-.776A9.975 9.975 0 0 1 69.5 14zM48.59 32.39a13.12 13.12 0 0 0 2.597 2.347l-8.333 9.255 2.602 2.341-13.27 6.892 5.466-13.917 2.602 2.342zm30.82 0 8.336 9.26 2.602-2.342 5.465 13.917-13.27-6.892 2.603-2.341-8.334-9.255a13.12 13.12 0 0 0 2.597-2.347zm-11.66 4.48c.574.078 1.155.131 1.75.131s1.176-.053 1.75-.131v40.957h3.5l-5.25 14-5.25-14h3.5zm-7.5 4.1v36.857h3.5l-5.25 14-5.25-14h3.5v-32.97ZM24 54c5.54 0 10 4.46 10 10 0 5.541-4.46 10-10 10s-10-4.459-10-10c0-5.54 4.46-10 10-10zm80 0c5.54 0 10 4.46 10 10 0 5.541-4.46 10-10 10a9.97 9.97 0 0 1-8.204-4.27A9.97 9.97 0 0 1 94 64c0-5.54 4.46-10 10-10zM34.339 71.865 45.266 82.79l2.475-2.474 6.188 13.612-13.613-6.187 2.475-2.476L31.864 74.34a13.13 13.13 0 0 0 2.475-2.474zm59.322 0a13.13 13.13 0 0 0 2.475 2.474L85.209 85.266l2.475 2.476-13.613 6.187 6.188-13.612 2.475 2.474zM64 94c5.54 0 10 4.46 10 10 0 5.541-4.46 10-10 10s-10-4.459-10-10c0-5.54 4.46-10 10-10z"},null)])}});