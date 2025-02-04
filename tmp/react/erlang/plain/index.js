const React = require("react");
module.exports = function ErlangPlainIcon({size = "1em", color = "#a90533", ...props}){
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
	<path d="M18.2 24.1L1 24v80h19.7v-.1C11 93.6 5.2 79.2 5.3 62.1 5.2 47 10 33.9 18.2 24.1zm92.9 79.8zM127 24h-16.4c6.2 9 9.6 19.3 9.1 32.1.1 1.2.1 1.9 0 4.9H46.3c0 22 7.7 38.3 27.3 38.4 13.5-.1 23.2-10.1 29.9-20.9l19 9.5c-3.4 6.1-7.2 11-11.4 16H127V24zm-16.5.1zm-45.4 1.5c-9 0-16.8 7.4-17.6 16.4H81c-.3-9-6.8-16.4-15.9-16.4z"/>
</svg>);
}