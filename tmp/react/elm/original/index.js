const React = require("react");
module.exports = function ElmOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64 60.74l25.65-25.65h-51.3L64 60.74z" fill="#efa500"/>
	<path d="M7.91 4.65l25.83 25.84h56.17L64.07 4.65H7.91zM67.263 63.993l28.08-28.08 27.951 27.953-28.08 28.079z" fill="#8dd737"/>
	<path d="M123.35 57.42V4.65H70.58l52.77 52.77z" fill="#60b5cc"/>
	<path d="M60.74 64L4.65 7.91V120.1L60.74 64z" fill="#34495e"/>
	<path d="M98.47 95.21l24.88 24.89V70.33L98.47 95.21z" fill="#efa500"/>
	<path d="M64 67.26L7.91 123.35h112.18L64 67.26z" fill="#60b5cc"/>
</svg>);
}