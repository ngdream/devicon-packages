const React = require("react");
module.exports = function NeovimLineIcon({size = "1em", color = "#5fb950", ...props}){
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
	<path d="M88.01 0v70.471l22.91 34.449 5.125-5.565-.182-71.368zM39.51.42l-.425.431-19.603 19.802L88.99 126.426l19.994-19.995Zm-.153 1.553 68.37 104.33-18.58 18.576L20.74 20.778Zm49.633.404 25.89 26.017.183 70.578-4.018 4.365L88.99 70.174Zm-71.425 19.49-.422.427-5.189 5.239v72.04L40.441 128V55.933Zm-.146 1.543 22.04 32.822v69.402L12.935 99.167V27.936Zm-.004.019-.421.427-4.045 4.085v71.222l26.496 26.44V56.236Zm-.145 1.543 21.193 31.562v66.702l-24.533-24.48V28.343Z"/>
</svg>);
}