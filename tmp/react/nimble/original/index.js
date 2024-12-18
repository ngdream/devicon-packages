const React = require("react");
module.exports = function NimbleOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path style={{"fill":"#000","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M64 45.621 2.262 24.707v61.512L64 110.609Zm0 0" transform="translate(0 5.707)"/>
	<path style={{"fill":"#1c1c1c","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M125.738 24.707 64 45.621v64.988l61.738-24.39zm0 0" transform="translate(0 5.707)"/>
	<path style={{"fill":"#353338","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M125.84 24.707 64.102 4.41 2.367 24.707l61.735 20.914Zm0 0" transform="translate(0 5.707)"/>
	<path style={{"fill":"#c5b514","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M91.781 52.488s1.938-2.254 2.625-2.05c1.785.535 4.285 1.59 5.239.683 1.44-1.367 3.164-2.117 3.164-2.117l-.024-16.492-11.004 3.718zm0 0" transform="translate(0 5.707)"/>
	<path style={{"fill":"#eed714","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="m41.055 11.996 61.742 20.516-10.973 3.718-61.836-20.605Zm0 0" transform="translate(0 5.707)"/>
	<path style={{"fill":"#f5e83f","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M42.777 68.82c-1.074-5.183-6.465-10.64-12.574-11.953-5.894-1.27-10.39 1.645-11.258 5.856l-1.023 1.093-1.43-4.648-1.09-7.43 1.875 1.614c.52-.707.891-1.266 2.23-2.133l1.302-3.856 2.23 3.043c1.527-.254 3.066-.543 4.867-.097l2.297-2.832 2.348 3.695c1.91.246 3.601 1.168 5.328 2.078l2.617-2.371 1.582 4.824c1.68 1.61 2.152 2.422 2.82 3.488l2.473-.886-1.45 7.96-1.855 4.41zm0 0" transform="translate(0 5.707)"/>
	<path style={{"fill":"#f5e83f","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="m44.285 69.621-1.508-.941-2.672 4.093-3.558.497-6.344-6.883-5.992 3.39-3.074-2.246-2.192-4.93-1.195.188-1.258-3.746 2.453 11.469c1.774 6.203 7.43 10.89 11.258 12.175 3.969 1.333 10.402.426 12.574-5.171l3.145-11.391Zm0 0" transform="translate(0 5.707)"/>
</svg>);
}