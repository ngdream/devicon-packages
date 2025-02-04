const React = require("react");
module.exports = function KerasPlainIcon({size = "1em", color = "#d00000", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
	<path d="M128 0H0v128h128V0zM93.9 98l-1.9 3.7c0 .1-.2.2-.3.2H81.1c-.1 0-.2-.1-.3-.1L56.7 66.1c-.1-.1-.2-.1-.2 0L47 75.2c-.1.1-.1.2-.1.3v23.8c0 .1-.1.2-.1.3l-2.2 2.2c-.1.1-.2.1-.3.1h-7.5c-.1 0-.2-.1-.3-.1l-2.2-2.2c-.1-.1-.1-.2-.1-.3V28.9c0-.1.1-.2.1-.3l2.2-2.4c.1-.1.2-.1.3-.1h7.6c.1 0 .2.1.3.1l2.2 2.3c.1.1.1.2.1.3v29.6c0 .1.1.1.1.1l32.2-32.3c.1-.1.2-.1.3-.1h10.5c.1 0 .2.1.2.2l1.5 3.4c0 .1.1.2.1.3v.5c0 .1-.1.2-.1.3L65.7 56.6c-.1.1-.1.2 0 .3l28.2 40.8v.3z"/>
</svg>);
}