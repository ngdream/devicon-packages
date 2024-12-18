const React = require("react");
module.exports = function ModxPlainIcon({size = "1em", color = "#00decc", ...props}){
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
	<g>
		<path d="M123.9 13.9H64.6l-6.4 10.5L100.9 51zM99.3 53.4L17.1 2.1v59.3l12.8 8zM74 102.7l36.9 23.2V66.6l-10.3-6.5zM28.7 74.6L4.1 114.1h59.3l34.7-55.5z"/>
	</g>
</svg>);
}