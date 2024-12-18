const React = require("react");
module.exports = function DeviconPlainIcon({size = "1em", color = "#60BE86", ...props}){
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
	<path d="M64 7.83H4.77l10.18 87.3 49 25h.06l49.07-25 10.15-87.3zm42.77 54.86c0 .88 0 1.67-.77 2L73.25 80.44l-2.42 1.13-.27-3.15v-6.19l.24-1.57 1.09-.47 23.18-10.38-21.54-9.6-9.18 18.13-5.45 10.53-1.22 2.27-2.05-.9L22 64.71a2.42 2.42 0 01-1.45-2v-5.8a2.39 2.39 0 011.42-2l34-15.73 3.21-1.44v9.66l.24 1.34-1.56.7-23.41 10.35 21.85 9.63 8.05-16 6.21-12.65 1.13-2.28 1.81.91L106 54.89c.73.35.76 1.14.76 2z"/>
</svg>);
}