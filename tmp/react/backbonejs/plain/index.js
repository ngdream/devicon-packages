const React = require("react");
module.exports = function BackbonejsPlainIcon({size = "1em", color = "#002A41", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64 31.124L15 3.239v121.522l49-27.885 49 27.885V3.239L64 31.124zM40.714 63.999l24.369-13.89 24.368 13.89-24.368 13.892-24.369-13.892zM32 29.934l17.433 9.937L32 49.809V29.934zm0 48.257l16.126 9.191L32 96.575V78.191zm65 18.384l-16.127-9.192L97 78.191v18.384zM79.566 39.87L97 29.934v19.875L79.566 39.87z"/>
</svg>);
}