const React = require("react");
module.exports = function PoetryOriginalIcon({size = "1em",  ...props}){
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
		<radialGradient id="a" cx="438.3" cy="639.01" fx="438.3" fy="639.01" gradientTransform="translate(4.213 5.333) scale(.21333)" r="569.94">
			<stop style={{"stopColor":"#6877ec","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#5362cf","stopOpacity":"1"}} offset=".6"/>
			<stop style={{"stopColor":"#4352b9","stopOpacity":"1"}} offset="1"/>
		</radialGradient>
		<radialGradient id="b" cx="65.64" cy="-16.21" fx="65.64" fy="-16.21" gradientTransform="translate(4.213 5.333) scale(.21333)" r="746.46">
			<stop style={{"stopColor":"#00d5ff","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#00b8eb","stopOpacity":"1"}} offset=".38"/>
			<stop style={{"stopColor":"#0080c5","stopOpacity":"1"}} offset="1"/>
		</radialGradient>
		<radialGradient id="f" cx="259.68" cy="-34.71" fx="259.68" fy="-34.71" gradientTransform="translate(4.213 5.333) scale(.21333)" r="431.37">
			<stop style={{"stopColor":"#fff","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#000","stopOpacity":"1"}} offset="1"/>
		</radialGradient>
		<linearGradient id="c" gradientTransform="translate(4.213 5.333) scale(.21333)" gradientUnits="userSpaceOnUse" x1="74.77" x2="277.23" y1="67.3" y2="512.72">
			<stop style={{"stopColor":"#294ca7","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#96a7d4","stopOpacity":"1"}} offset=".48"/>
			<stop style={{"stopColor":"#e1e6f3","stopOpacity":"1"}} offset=".84"/>
			<stop style={{"stopColor":"#fff","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="d" gradientTransform="translate(4.213 5.333) scale(.21333)" gradientUnits="userSpaceOnUse" x1="-228.74" x2="451" y1="-144.29" y2="651.89">
			<stop style={{"stopColor":"#6877ec"}} offset="0"/>
			<stop style={{"stopColor":"#97a1f2"}} offset=".29"/>
			<stop style={{"stopColor":"#e2e4fb"}} offset=".77"/>
			<stop style={{"stopColor":"#fff"}} offset="1"/>
		</linearGradient>
		<linearGradient id="e" gradientTransform="translate(4.213 5.333) scale(.21333)" gradientUnits="userSpaceOnUse" x1="-151.22" x2="450.08" y1="-285.9" y2="430.63">
			<stop style={{"stopColor":"#8397cc"}} offset="0"/>
			<stop style={{"stopColor":"#97a8d4"}} offset=".15"/>
			<stop style={{"stopColor":"#e2e6f3"}} offset=".73"/>
			<stop style={{"stopColor":"#fff"}} offset="1"/>
		</linearGradient>
	</defs>
	<path d="M40.07 124.8a121.72 121.72 0 0 0 62.242-33.366L16.216 5.332v95.61Zm0 0" fill="url(#a)"/>
	<path d="M16.215 100.941c52.805 0 95.61-42.804 95.61-95.609h-95.61Zm0 0" fill="url(#b)"/>
	<path style={{"mixBlendMode":"multiply"}} d="m16.215 100.941 3.68 3.68c25.933-.95 49.363-11.875 66.558-29.062l-2.621-2.618a95.294 95.294 0 0 1-67.617 28Zm0 0" fill="url(#c)"/>
	<path style={{"mixBlendMode":"multiply"}} d="M40.07 124.8a121.72 121.72 0 0 0 62.242-33.366L16.216 5.332v95.61Zm0 0" fill="url(#d)"/>
	<path style={{"mixBlendMode":"multiply"}} d="M102.313 91.434 16.215 5.332l78.27 93.254a122.174 122.174 0 0 0 7.828-7.152Zm0 0" fill="url(#e)"/>
	<path style={{"mixBlendMode":"screen"}} d="m16.215 5.332 67.605 67.61a98.72 98.72 0 0 0 1.782-1.837Zm0 0" fill="url(#f)"/>
</svg>);
}