const React = require("react");
module.exports = function HibernatePlainIcon({size = "1em", color = "#bcae79", ...props}){
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
	<path d="m29.246 3.766 23.168 40.129-23.18 40.19-23.156-40.19Zm69.508 120.468L75.586 84.105l23.18-40.19 23.156 40.19ZM75.594 3.766H29.258L52.43 43.898h46.35ZM52.406 124.23H98.75L75.594 84.102H29.219Zm0 0"/>
</svg>);
}