const React = require("react");
module.exports = function KerasOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} style={{"enableBackground":"new 0 0 128 128"}} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
	<path style={{"fill":"#d00000"}} d="M128 128H0V0h128v128z"/>
	<path style={{"fill":"#fff"}} d="M34.1 99.3c0 .1.1.2.1.3l2.2 2.2c.1.1.2.1.3.1h7.5c.1 0 .2-.1.3-.1l2.2-2.2c.1-.1.1-.2.1-.3V75.5c0-.1.1-.2.1-.3l9.5-9.1c.1-.1.2-.1.2 0l24.1 35.6c.1.1.2.1.3.1h10.6c.1 0 .2-.1.3-.2l1.9-3.7v-.3L65.7 56.9c-.1-.1 0-.2 0-.3l25.9-25.8c.1-.1.1-.2.1-.3V30c0-.1 0-.2-.1-.3l-1.5-3.4c0-.1-.1-.2-.2-.2H79.4c-.1 0-.2.1-.3.1L47 58.5c-.1.1-.1 0-.1-.1V28.9c0-.1-.1-.2-.1-.3l-2.2-2.3c-.1-.1-.2-.1-.3-.1h-7.6c-.1 0-.2.1-.3.1l-2.2 2.4c-.1.1-.1.2-.1.3v70.3z"/>
</svg>);
}