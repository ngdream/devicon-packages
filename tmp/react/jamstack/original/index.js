const React = require("react");
module.exports = function JamstackOriginalIcon({size = "1em", color = "#F0047F", ...props}){
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
	<path d="M61.928 9.176c-30.459 0-55.078 24.61-55.078 55.053 0 30.438 24.62 55.048 55.078 55.048 30.458 0 55.078-24.61 55.078-55.048V9.176zm1.166 14.654h38.635v38.615H63.094zM20.986 65.932h38.621v38.6c-20.905-.887-37.734-17.71-38.62-38.6zm42.108.076h38.615c-.881 20.89-17.715 37.714-38.615 38.596z"/>
</svg>);
}