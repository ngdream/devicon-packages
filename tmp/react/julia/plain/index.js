const React = require("react");
module.exports = function JuliaPlainIcon({size = "1em", color = "#28a745", ...props}){
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
	<circle cx="29.1" cy="94.2" r="29.1"/>
	<circle cx="98.9" cy="94.2" r="29.1"/>
	<circle cx="64" cy="33.8" r="29.1"/>
</svg>);
}