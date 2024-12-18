const React = require("react");
module.exports = function PytorchOriginalIcon({size = "1em", color = "#EE4C2C", ...props}){
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
	<path d="M100.1 38.3l-9.2 9.2c15.1 15.1 15.1 39.4 0 54.3-15.1 15.1-39.4 15.1-54.3 0-15.1-15.1-15.1-39.4 0-54.3l24-24 3.4-3.4V2L27.8 38.2C7.7 58.3 7.7 90.8 27.8 111s52.6 20.1 72.4 0c20.1-20.2 20.1-52.5-.1-72.7z"/>
	<circle cx="82.1" cy="29.4" r="6.7" transform="rotate(-88.939 82.069 29.398) scale(.99997)"/>
</svg>);
}