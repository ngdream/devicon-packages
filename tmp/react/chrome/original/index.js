const React = require("react");
module.exports = function ChromeOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<circle cx="64.149" cy="64.236" fill="#fff" r="60.999"/>
	<circle cx="66.922" cy="71.999" fillOpacity=".1" r="21.072"/>
	<circle cx="64.149" cy="64.235" fill="url(#chrome-original-a)" r="22.736"/>
	<path d="M102.966 75.327c0-21.439-17.379-38.819-38.817-38.819s-38.818 17.38-38.818 38.819h11.09c0-15.314 12.415-27.727 27.727-27.727 15.313 0 27.727 12.413 27.727 27.727" fillOpacity=".1"/>
	<path d="M119.602 36.508C104.336 5.792 67.06-6.732 36.343 8.534A62.105 62.105 0 0012.578 29.3l24.955 43.253c-4.597-14.606 3.521-30.174 18.127-34.77a27.676 27.676 0 017.935-1.274" fill="url(#chrome-original-b)"/>
	<path d="M12.578 29.3c-19.1 28.492-11.486 67.071 17.005 86.171a62.133 62.133 0 0029.575 10.319l26.063-44.363c-9.745 11.811-27.22 13.486-39.032 3.74a27.717 27.717 0 01-8.657-12.613" fill="url(#chrome-original-c)"/>
	<path d="M59.158 125.791c34.204 2.585 64.027-23.047 66.613-57.25a62.097 62.097 0 00-6.17-32.031H63.595c15.312.07 27.67 12.541 27.598 27.854a27.725 27.725 0 01-5.972 17.064" fill="url(#chrome-original-d)"/>
	<path d="M12.578 29.3l24.955 43.253a27.725 27.725 0 011.107-18.854L13.686 27.636" fill="url(#chrome-original-e)"/>
	<path d="M59.158 125.791l26.063-44.363a27.731 27.731 0 01-16.082 9.426l-11.091 34.937" fill="url(#chrome-original-f)"/>
	<path d="M119.602 36.508H63.595a27.727 27.727 0 0121.626 10.537l35.491-8.873" fill="url(#chrome-original-g)"/>
	<linearGradient id="chrome-original-a" gradientTransform="matrix(82 0 0 82 -32341.5 -39660.313)" gradientUnits="userSpaceOnUse" x1="395.191" x2="395.191" y1="484.168" y2="484.723">
		<stop offset="0" stopColor="#81B4E0"/>
		<stop offset="1" stopColor="#0C5A94"/>
	</linearGradient>
	<linearGradient id="chrome-original-b" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse" x1="-608.91" x2="-608.91" y1="-597.648" y2="-547.185">
		<stop offset="0" stopColor="#F06B59"/>
		<stop offset="1" stopColor="#DF2227"/>
	</linearGradient>
	<linearGradient id="chrome-original-c" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse" x1="-657.835" x2="-632.327" y1="-491.393" y2="-533.537">
		<stop offset="0" stopColor="#388B41"/>
		<stop offset="1" stopColor="#4CB749"/>
	</linearGradient>
	<linearGradient id="chrome-original-d" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse" x1="-572.385" x2="-599.557" y1="-486.91" y2="-552.345">
		<stop offset="0" stopColor="#E4B022"/>
		<stop offset=".3" stopColor="#FCD209"/>
	</linearGradient>
	<linearGradient id="chrome-original-e" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse" x1="-649.391" x2="-649.391" y1="-528.885" y2="-573.247">
		<stop offset="0" stopOpacity=".15"/>
		<stop offset=".3" stopOpacity=".06"/>
		<stop offset="1" stopOpacity=".03"/>
	</linearGradient>
	<linearGradient id="chrome-original-f" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse" x1="-588.158" x2="-618.657" y1="-514.559" y2="-483.505">
		<stop offset="0" stopOpacity=".15"/>
		<stop offset=".3" stopOpacity=".06"/>
		<stop offset="1" stopOpacity=".03"/>
	</linearGradient>
	<linearGradient id="chrome-original-g" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse" x1="-588.6" x2="-584.163" y1="-505.621" y2="-549.431">
		<stop offset="0" stopOpacity=".15"/>
		<stop offset=".3" stopOpacity=".06"/>
		<stop offset="1" stopOpacity=".03"/>
	</linearGradient>
</svg>);
}