const React = require("react");
module.exports = function RosOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path style={{"fill":"#21304c","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M8.691 6.254c0 1.8-1.449 3.258-3.238 3.258a3.25 3.25 0 0 1-3.242-3.258A3.25 3.25 0 0 1 5.453 3a3.246 3.246 0 0 1 3.238 3.254Zm0 11.094c0 1.8-1.449 3.257-3.238 3.257a3.25 3.25 0 0 1-3.242-3.257 3.25 3.25 0 0 1 3.242-3.254 3.246 3.246 0 0 1 3.238 3.254zm0 11.093a3.247 3.247 0 0 1-3.238 3.258 3.25 3.25 0 0 1-3.242-3.258 3.25 3.25 0 0 1 3.242-3.253 3.246 3.246 0 0 1 3.238 3.253zm11.305-11.093a3.25 3.25 0 0 1-3.242 3.257 3.247 3.247 0 0 1-3.238-3.257 3.248 3.248 0 0 1 3.238-3.254 3.25 3.25 0 0 1 3.242 3.254zm0-11.094a3.25 3.25 0 0 1-3.242 3.258 3.247 3.247 0 0 1-3.238-3.258A3.248 3.248 0 0 1 16.754 3a3.25 3.25 0 0 1 3.242 3.254zM31.3 17.348a3.25 3.25 0 0 1-3.241 3.257 3.247 3.247 0 0 1-3.239-3.257 3.246 3.246 0 0 1 3.239-3.254 3.25 3.25 0 0 1 3.242 3.254zm0-11.094a3.25 3.25 0 0 1-3.241 3.258 3.247 3.247 0 0 1-3.239-3.258A3.246 3.246 0 0 1 28.06 3a3.25 3.25 0 0 1 3.24 3.254zm0 22.187a3.25 3.25 0 0 1-3.24 3.259 3.247 3.247 0 0 1-3.239-3.258 3.246 3.246 0 0 1 3.239-3.253 3.25 3.25 0 0 1 3.24 3.251zm-11.304 0a3.25 3.25 0 0 1-3.242 3.258 3.247 3.247 0 0 1-3.238-3.258 3.248 3.248 0 0 1 3.238-3.253 3.25 3.25 0 0 1 3.242 3.253zM56 19.96l5.805 11.665h-4.91l-5.641-11.297H44.84v11.297h-4.184V3.07h12.465c4.95 0 9.133 2.653 9.133 8.528 0 4.566-2.395 7.382-6.254 8.363zM53.121 7.11H44.84v9.18h8.281c2.84 0 4.828-1.47 4.828-4.571 0-2.977-1.949-4.61-4.828-4.61zm26.383 24.964c-7.344 0-12.016-6.078-12.016-14.726 0-8.649 4.672-14.727 12.016-14.727 7.39 0 12.058 6.078 12.058 14.727 0 8.648-4.667 14.726-12.058 14.726zm0-25.168c-4.95 0-7.672 4.04-7.672 10.442 0 6.406 2.723 10.445 7.672 10.445 4.996 0 7.715-4.04 7.715-10.445 0-6.403-2.719-10.442-7.715-10.442Zm26.711 25.168c-4.14 0-7.711-1.793-10.106-4.61l3.043-2.976c1.91 2.082 4.711 3.387 7.391 3.387 3.977 0 5.883-1.387 5.883-4.164 0-2.2-1.664-3.3-6.414-4.73-6.008-1.794-8.887-3.305-8.887-8.403 0-4.937 4.14-7.957 9.375-7.957 3.855 0 6.777 1.43 9.297 3.875l-3.004 3.063c-1.785-1.836-3.816-2.735-6.617-2.735-3.328 0-4.75 1.633-4.75 3.547 0 2 1.3 2.98 6.21 4.45 5.602 1.71 9.094 3.507 9.094 8.605 0 5.14-3.246 8.648-10.515 8.648zm15.91-28.597h-.934v2.66h-.48v-2.66h-.938v-.461h2.352zm3.5 2.66h-.469V4.488c0-.187.004-.46.008-.55-.035.09-.129.312-.207.492l-.777 1.754-.77-1.754c-.078-.18-.172-.403-.207-.492.004.09.008.363.008.55v1.649h-.453V3.016h.496l.719 1.664c.078.175.18.402.219.535.047-.133.14-.356.218-.535l.703-1.664h.512zm0 0" transform="translate(0 47)"/>
</svg>);
}