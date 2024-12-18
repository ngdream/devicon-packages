const React = require("react");
module.exports = function StackoverflowPlainIcon({size = "1em", color = "#F58025", ...props}){
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
	<path d="m83.873 0-9.166 6.81 34.08 45.801 9.164-6.81L83.873 0zM62.852 18.227l-7.309 8.771 43.885 36.531 7.308-8.775-43.884-36.527zM46.04 42.033l-4.82 10.35 51.763 24.1 4.825-10.35-51.768-24.1zm-9.863 25.924-2.352 11.174 55.881 11.736 2.348-11.166-55.877-11.744zm-26.13 14.555V128H112.45V82.512h-11.377l-.002 34.115H21.428V82.512h-11.38zM32.806 93.88v11.373h56.888V93.88H32.805z"/>
</svg>);
}