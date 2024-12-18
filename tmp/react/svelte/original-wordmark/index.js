const React = require("react");
module.exports = function SvelteOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M85.105 37.781c-6.156-7.5-18.21-9.668-27.496-4.945L41.906 41.21c-4.297 2.262-7.246 5.937-8.11 10.121-.769 3.473-.1 7.066 1.876 10.191-1.352 1.704-2.258 3.622-2.664 5.645-.899 4.246.273 8.621 3.254 12.144 6.168 7.481 18.191 9.66 27.496 4.989l15.715-8.383c4.273-2.262 7.21-5.938 8.078-10.117.758-3.469.09-7.051-1.883-10.16 4.172-5.496 3.953-12.567-.563-17.86zM56.043 80.04c-5.05 1.102-10.39-.562-13.36-4.164-1.82-2.113-2.488-4.727-1.96-7.316l.308-1.25.282-.774.843.469c1.852 1.176 3.926 2.023 6.137 2.594l.57.164-.062.468c-.055.657.176 1.391.625 1.95.922 1.113 2.52 1.644 4.062 1.297.34-.094.672-.184.953-.332l15.653-8.375c.789-.422 1.293-1.06 1.488-1.81.176-.784-.055-1.581-.559-2.214-.933-1.086-2.52-1.574-4.066-1.25-.336.098-.7.211-.984.356l-5.918 3.152c-5.602 2.797-12.836 1.48-16.551-3.012-1.809-2.117-2.52-4.754-1.973-7.32.547-2.535 2.356-4.762 4.977-6.121l15.617-8.375c.984-.516 2.047-.89 3.2-1.176 5.05-1.105 10.374.563 13.359 4.145 2.101 2.48 2.695 5.652 1.597 8.558l-.285.781-.808-.468a22.627 22.627 0 00-6.168-2.594l-.563-.137.055-.469a2.83 2.83 0 00-.625-1.976c-.918-1.113-2.52-1.582-4.063-1.25-.34.09-.672.183-.953.332l-15.683 8.445c-.79.442-1.293 1.059-1.458 1.828-.164.754.055 1.582.56 2.192.898 1.11 2.53 1.578 4.042 1.246.363-.09.703-.184.977-.328l5.984-3.203c.977-.54 2.07-.938 3.191-1.196 5.086-1.11 10.391.563 13.36 4.164 1.82 2.117 2.52 4.727 2.015 7.29-.527 2.538-2.312 4.761-4.91 6.124L59.301 78.84c-1.02.512-2.117.918-3.258 1.191zm0 0" fill="#ff3e00"/>
	<path d="M37.691 102.574c-1.437 0-2.511-.32-3.222-.965-.711-.644-1.082-1.472-1.117-2.48h1.296c.07.758.383 1.32.946 1.687.562.364 1.246.543 2.039.543.758 0 1.363-.156 1.82-.464.465-.313.695-.735.695-1.266 0-.559-.238-.969-.714-1.223-.477-.254-1.301-.504-2.465-.75-1.164-.25-2-.594-2.508-1.035-.504-.437-.758-1.023-.758-1.758 0-.82.328-1.5.988-2.027.66-.527 1.54-.79 2.63-.79 1.148 0 2.074.266 2.78.798.704.531 1.075 1.285 1.118 2.258h-1.313c-.136-1.23-.976-1.848-2.527-1.848-.75 0-1.332.14-1.746.426-.41.28-.617.656-.617 1.125 0 .425.164.742.492.957.336.21.953.418 1.855.617.907.2 1.63.394 2.16.59.532.195.989.5 1.368.91.379.406.57.957.57 1.644 0 .875-.348 1.602-1.047 2.184-.695.578-1.602.867-2.723.867zM51.586 92.22l-3.957 10.18h-1.39l-3.958-10.18h1.438l3.215 8.73 3.214-8.73zm8.828 10.18h-7.59v-10.18h7.352v1.207h-6.008v3.113h5.621v1.207h-5.621v3.445h6.246zm8.191 0H62.31v-10.18h1.347v8.972h4.95zm8.856-8.973h-3.367v8.972h-1.356v-8.972h-3.34v-1.207h8.063zm9.047 8.972h-7.59v-10.18h7.355v1.208h-6.007v3.113h5.617v1.207h-5.617v3.445h6.242zm0 0" fill="#797878"/>
</svg>);
}