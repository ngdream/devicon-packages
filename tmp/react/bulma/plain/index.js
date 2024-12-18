const React = require("react");
module.exports = function BulmaPlainIcon({size = "1em", color = "#00d1b2", ...props}){
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
	<path d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"/>
</svg>);
}