const React = require("react");
module.exports = function CakephpPlainIcon({size = "1em", color = "#D43D44", ...props}){
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
	<g>
		<path d="M2 73.69V93c0 10.69 27.75 19.35 62 19.35V93C29.75 93 2 84.36 2 73.69zM64 54.34l48.5 12c8.44-3.3 13.51-7.5 13.51-12V35c0-10.68-27.76-19.35-62-19.35S2 24.29 2 35v19.34C2 65 29.75 73.69 64 73.69V54.34zM112.49 85.74L64 73.69V93l48.5 12.05c8.43-3.27 13.5-7.46 13.5-12.05V73.69c0 4.55-5.07 8.74-13.51 12.05z"/>
	</g>
</svg>);
}