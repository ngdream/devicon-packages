const React = require("react");
module.exports = function MinitabPlainIcon({size = "1em", color = "#8dc63f", ...props}){
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
	<path d="M0 0v128h128V0H0zm34.6 106.5H14.8v-54h19.7v54zm27.1 0H42v-87h19.7v87zm27.1 0H69.1V37.6h19.7v68.9zm27.2 0H96.3V68.6H116v37.9z"/>
</svg>);
}