const React = require("react");
module.exports = function LogstashPlainIcon({size = "1em", color = "#fec514", ...props}){
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
	<path d="M8 0v80c0 26.508 21.492 48 48 48h4V48C60 21.488 38.508 0 12 0Zm64 80v48h44V80Zm0 0"/>
</svg>);
}