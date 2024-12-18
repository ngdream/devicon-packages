const React = require("react");
module.exports = function JasmineOriginalIcon({size = "1em", color = "#8a4182", ...props}){
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
	<path d="M64 0a64 64 0 1 0 64 64A64 64 0 0 0 64 0Zm7.571 13.405a50.615 50.615 0 0 1 42.697 49.992 50.615 50.615 0 0 1-50.615 50.625v-.01A50.615 50.615 0 1 1 71.57 13.405Zm-15.24 9.386v26.3l2.608 3.353h9.653l2.444-3.353v-26.3Zm30.217 5.394L74.82 44.325l3.243 2.356L89.79 30.54zm-45.161.002-3.244 2.355L49.87 46.681l3.243-2.355zM28.09 43.415l-4.552 13.978 25.022 8.13 3.989-1.441 2.985-9.183-2.434-3.363zm71.403 0-25.012 8.12-2.382 3.508 2.985 9.193 3.937 1.288 25.022-8.13zm-14.992 23.88-1.239 3.81 18.973 6.166 1.238-3.81zm-41.57.002-18.973 6.165 1.238 3.81 18.973-6.164zm10.884.527-3.937 1.269-15.47 21.289 11.902 8.64 15.451-21.29-.133-4.234zm19.807.04L65.8 73.54v4.152L81.26 98.97l11.891-8.64-15.46-21.278ZM61.526 83.418v19.95h4.008v-19.95Z"/>
</svg>);
}