const React = require("react");
module.exports = function VercelLineIcon({size = "1em", color = "#000", ...props}){
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
	<path d="m64.002 8.575-.428.74L0 119.425h128Zm0 1.976 62.289 107.887H1.709Z"/>
</svg>);
}