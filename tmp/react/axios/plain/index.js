const React = require("react");
module.exports = function AxiosPlainIcon({size = "1em", color = "#5a29e4", ...props}){
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
	<path d="m 34,43.977569 27.379067,-22.912155 0.0385,91.494586 -9.3189,7.74007 -0.15403,-76.091455 z"/>
	<path d="M 96.961687,82.322502 69.582627,105.23466 69.544127,13.74007 78.863017,6 l 0.15403,76.091452 z"/>
</svg>);
}