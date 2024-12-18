const React = require("react");
module.exports = function InkscapePlainIcon({size = "1em", color = "#000000", ...props}){
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
	<path d="M102.4 101.5c-5.1 4.6.6 9.3 5.6 6.3 1.1-1.2 0-5.2-5.6-6.3zm-73.8 7.4c4 3.4 10.2-.9 12-5.7-3.9-5.1-18.3.2-12 5.7zm75.9-12.1c0 2.3 16.8 3.8 16.8-.5-2.4-7-14.8-6.6-16.8.5zm15.6-41.1L73.4 7.9c-5.7-5.5-15.2-5.5-20.6 0L7.7 54C-7.5 72.9 18.1 70.7 29 76.1c3.9 4-15.1 7-11.1 11 3.9 4 23.8 7.7 27.7 11.8l-4.1 12.3c3.9 4 13 .2 14.7 9.5 1.2 6.6 16.4 2.8 23.8-2.6 3.9-4-7.5-3.6-3.6-7.7 9.8-10 18.9-3.6 22.2-13.7 1.7-5-14.4-7.6-10.5-11.7 11.4-6.5 50.5-10.8 32-29.3zm-56 31.1c-4.8 1.3-28-8.2-22.2-8.2 1.2.7 19.4 4.4 23.9 5.2 1.6.3.5 1.9-1.7 3zm25.1-51.5l-8.8-7.1-1.7 10.5-7.4-3.9-11.8 7.5-3.9-15.5L49.1 38h-9.7c-4 0-4.4-5.3-.8-8.9 6.3-6.8 13.5-13.8 17.4-17.8 3.9-4 10.8-4 14.7-.1l17.8 18.1c1.7 1.7 1.7 5 .7 6z"/>
</svg>);
}