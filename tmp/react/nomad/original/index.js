const React = require("react");
module.exports = function NomadOriginalIcon({size = "1em", color = "#00ca8e", ...props}){
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
	<path d="M64 0 8.569 31.984v64.013L64 128l55.431-32.003V31.984Zm24.697 70.393L73.924 78.9 56.08 69.212v20.424l-16.776 10.615V57.605l13.308-8.146 18.467 9.734V38.4l17.628-10.584Z"/>
</svg>);
}