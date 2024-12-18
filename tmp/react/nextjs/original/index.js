const React = require("react");
module.exports = function NextjsOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<circle cx="64" cy="64" r="64"/>
	<path d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z" fill="url(#a)"/>
	<path d="M81.778 38.4h8.533v51.2h-8.533z" fill="url(#b)"/>
	<defs>
		<linearGradient id="a" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
			<stop stopColor="#fff"/>
			<stop offset="1" stopColor="#fff" stopOpacity="0"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
			<stop stopColor="#fff"/>
			<stop offset="1" stopColor="#fff" stopOpacity="0"/>
		</linearGradient>
	</defs>
</svg>);
}