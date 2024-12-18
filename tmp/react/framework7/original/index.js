const React = require("react");
module.exports = function Framework7OriginalIcon({size = "1em", color = "#ee350f", ...props}){
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
	<path d="M.453 64c0-15.383 5.39-29.496 14.367-40.535h98.36L43.016 124.43C18.23 115.7.453 91.94.453 64Zm117.942-33.11c5.808 9.66 9.152 20.993 9.152 33.11 0 35.348-28.453 64-63.547 64-4.203 0-8.313-.41-12.29-1.195ZM23.199 14.935C34.24 5.614 48.47 0 64 0c15.531 0 29.762 5.613 40.8 14.934Zm0 0"/>
</svg>);
}