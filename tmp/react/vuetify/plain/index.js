const React = require("react");
module.exports = function VuetifyPlainIcon({size = "1em", color = "#1697F6", ...props}){
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
	<path d="M2.668 10.668 33.34 63.797l1.605 2.793 22.883-39.65 9.399-16.273Zm76.336 0L65.297 34.414 40.84 76.79 64 116.922l30.672-53.125 30.66-53.129Zm0 0"/>
</svg>);
}