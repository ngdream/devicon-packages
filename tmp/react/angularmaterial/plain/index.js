const React = require("react");
module.exports = function AngularmaterialPlainIcon({size = "1em", color = "#ffa726", ...props}){
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
	<path d="M63.934.656 5.25 21.66l8.863 77.719 49.82 27.77 49.887-27.77 9.059-77.719L63.934.656zm-8.83 30.96 40.738 19.57L72.77 65.27 32.285 45.697l22.819-14.082zm-9.776 21.497 27.496 13.295.233-.14 9.658-5.897 13.123 6.305-23.07 14.017-40.483-19.57 13.043-8.01zm.024 15.438 27.472 13.28.233-.142 9.681-5.882 13.102 6.295-23.072 14.017-40.48-19.506 13.064-8.062z"/>
</svg>);
}