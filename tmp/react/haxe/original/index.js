const React = require("react");
module.exports = function HaxeOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.7 64l48.4-48.4L0 0z" fill="#F6B214"/>
	<path d="M64 15.7l48.4 48.4L128 0z" fill="#F17321"/>
	<path d="M112.3 64l-48.4 48.4L128 128z" fill="#EF5E21"/>
	<path d="M64 112.3L15.6 63.9 0 128z" fill="#F6B214"/>
	<path d="M15.6 63.9L64 15.7 112.3 64 64 112.3z" fill="#EA8220"/>
	<path d="M15.6 63.9L0 32V0zM0 128V96l15.6-32.1z" fill="#F8EF23"/>
	<path d="M0 0h32l32 15.7zM128 0L64 15.7 96 0z" fill="#F8C713"/>
	<path d="M112.3 64L128 0v32zM128 128V96l-15.7-32z" fill="#EC4822"/>
	<path d="M0 128l64-15.7L32 128z" fill="#EF5E21"/>
	<path d="M128 128H96l-32-15.7z" fill="#EA8220"/>
</svg>);
}