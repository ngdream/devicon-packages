const React = require("react");
module.exports = function AzuresqldatabaseOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<radialGradient id="b" cx="9.36" cy="10.57" fx="9.36" fy="10.57" gradientTransform="matrix(73.03125 0 0 37.1875 29.797 56.535)" r="7.07">
			<stop style={{"stopColor":"#f2f2f2","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#eee","stopOpacity":"1"}} offset=".58"/>
			<stop style={{"stopColor":"#e6e6e6","stopOpacity":"1"}} offset="1"/>
		</radialGradient>
		<linearGradient id="a" gradientTransform="scale(7.11111)" gradientUnits="userSpaceOnUse" x1="2.59" x2="15.41" y1="10.16" y2="10.16">
			<stop style={{"stopColor":"#005ba1","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#0060a9","stopOpacity":"1"}} offset=".07"/>
			<stop style={{"stopColor":"#0071c8","stopOpacity":"1"}} offset=".36"/>
			<stop style={{"stopColor":"#0078d4","stopOpacity":"1"}} offset=".52"/>
			<stop style={{"stopColor":"#0074cd","stopOpacity":"1"}} offset=".64"/>
			<stop style={{"stopColor":"#006abb","stopOpacity":"1"}} offset=".82"/>
			<stop style={{"stopColor":"#005ba1","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
	</defs>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#a)"}} d="M64 36.55c-25.172 0-45.582-7.109-45.582-16.495v87.89c0 9.032 20.055 16.356 44.941 16.5H64c25.172 0 45.582-7.113 45.582-16.5v-87.89c0 9.172-20.41 16.496-45.582 16.496Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#e8e8e8","fillOpacity":"1"}} d="M109.582 20.055c0 9.172-20.41 16.496-45.582 16.496s-45.582-7.11-45.582-16.496c0-9.387 20.41-16.5 45.582-16.5s45.582 7.113 45.582 16.5"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#50e6ff","fillOpacity":"1"}} d="M98.988 18.703c0 5.832-15.718 10.524-34.988 10.524s-34.988-4.692-34.988-10.524C29.012 12.871 44.73 8.25 64 8.25s34.988 4.691 34.988 10.453"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#198ab3","fillOpacity":"1"}} d="M64 21.332a82.193 82.193 0 0 0-27.664 4.055A81.213 81.213 0 0 0 64 29.227a79.334 79.334 0 0 0 27.664-4.125A84.332 84.332 0 0 0 64 21.332Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#b)"}} d="M91.734 81.066V56.891h-6.402v29.367h17.496v-5.192ZM40.961 69.191a13.064 13.064 0 0 1-3.629-2.203 3.13 3.13 0 0 1-.852-2.277 2.418 2.418 0 0 1 1.067-2.133 4.847 4.847 0 0 1 2.988-.855 11.533 11.533 0 0 1 7.11 2.062v-6.113a18.236 18.236 0 0 0-7.11-1.137 11.67 11.67 0 0 0-7.754 2.414 7.68 7.68 0 0 0-2.984 6.332c0 3.625 2.273 6.469 7.11 8.602 1.57.668 3.05 1.527 4.41 2.562a2.982 2.982 0 0 1 1.066 2.274c0 .879-.426 1.699-1.137 2.207a5.786 5.786 0 0 1-3.203.781 11.801 11.801 0 0 1-7.75-2.988v6.613a15.411 15.411 0 0 0 7.61 1.707c2.98.176 5.933-.648 8.39-2.348a7.681 7.681 0 0 0 2.348-6.468 7.458 7.458 0 0 0-1.778-4.977 17.225 17.225 0 0 0-5.902-4.055Zm37.262 11.305a16.634 16.634 0 0 0 2.347-8.957A16.509 16.509 0 0 0 78.223 64a12.87 12.87 0 0 0-4.977-5.332 14.228 14.228 0 0 0-7.113-1.852 15.015 15.015 0 0 0-7.68 1.922A13.217 13.217 0 0 0 53.262 64a17.48 17.48 0 0 0-1.848 8.105 16.06 16.06 0 0 0 1.707 7.114 12.526 12.526 0 0 0 4.906 5.261 14.679 14.679 0 0 0 7.11 2.133l6.117 7.11h8.605l-8.75-7.82a12.736 12.736 0 0 0 7.114-5.407Zm-7.114-1.777a6.673 6.673 0 0 1-5.402 2.488 6.538 6.538 0 0 1-5.406-2.559 10.842 10.842 0 0 1-2.063-7.109 10.903 10.903 0 0 1 2.063-7.113 7.104 7.104 0 0 1 5.547-2.63 6.181 6.181 0 0 1 5.336 2.63 11.533 11.533 0 0 1 1.918 7.113 10.353 10.353 0 0 1-1.993 7.18Zm0 0"/>
</svg>);
}