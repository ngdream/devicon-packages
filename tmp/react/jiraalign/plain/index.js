const React = require("react");
module.exports = function JiraalignPlainIcon({size = "1em", color = "#2684FF", ...props}){
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
	<path d="M.617.496c0 23.914 19.469 43.418 43.336 43.418h40.094v40.402h43.336V7.696c0-3.716-3.012-6.97-6.719-6.97Zm43.336 43.418H.613v76.625c0 3.715 3.016 6.965 6.723 6.965h119.816c0-23.914-19.468-43.188-43.34-43.188H43.953Zm0 0"/>
</svg>);
}