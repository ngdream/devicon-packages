const React = require("react");
module.exports = function GitterPlainIcon({size = "1em", color = "#000000", ...props}){
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
	<path d="M96.8 25.6H107v51.2H96.8zM71.2 25.6h10.2V128H71.2zM45.6 25.6h10.2V128H45.6zM20 0h10.2v76.8H20z"/>
</svg>);
}