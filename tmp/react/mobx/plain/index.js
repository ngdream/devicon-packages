const React = require("react");
module.exports = function MobxPlainIcon({size = "1em", color = "#e05e11", ...props}){
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
	<path style={{"stroke":"none"}} d="M9.805 0C4.39 0 0 4.39 0 9.805v108.39a9.79 9.79 0 0 0 4.25 8.078A9.741 9.741 0 0 0 9.805 128h108.39c5.414 0 9.805-4.39 9.805-9.805V9.805c0-4.45-2.96-8.2-7.02-9.403A9.778 9.778 0 0 0 118.195 0H9.805zM24 29.988h15.813v67.817H23.93v-5.227h9.734V35.074H24v-5.086zm64.27 0h15.812v5.086h-9.664v57.504h9.734v5.227H88.27V29.988zM47.46 48.516h7.11c2.836 10.691 6.063 20.074 9.66 28.543 4.075-9.528 7.063-18.914 9.59-28.543h6.723c-3.012 11.96-7.934 24.02-13.566 36.464H61.03c-5.41-11.793-10.015-23.918-13.57-36.464z"/>
</svg>);
}