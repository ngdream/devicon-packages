const React = require("react");
module.exports = function KotlinPlainIcon({size = "1em", color = "#c711e1", ...props}){
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
	<path d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0"/>
</svg>);
}