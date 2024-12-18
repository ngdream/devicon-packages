const React = require("react");
module.exports = function FsharpPlainIcon({size = "1em", color = "#378BBA", ...props}){
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
	<path d="M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5zm39.1 0l21.7-21.7v43.4L39.1 64.5zm88.9 0L65.1 3.8v30.4l30.4 30.4-30.4 30.3v30.4L128 64.5z"/>
</svg>);
}