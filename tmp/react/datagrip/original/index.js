const React = require("react");
module.exports = function DatagripOriginalIcon({size = "1em",  ...props}){
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
		<linearGradient id="a" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="92.39" x2="95.19" y1="40.62" y2="65.06">
			<stop offset=".16" stopColor="#21d789"/>
			<stop offset=".54" stopColor="#419fbc"/>
			<stop offset="1" stopColor="#6b57ff"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="66.85" x2="73.95" y1="30.12" y2="11.96">
			<stop offset="0" stopColor="#6b57ff"/>
			<stop offset=".95" stopColor="#21d789"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="27.62" x2="34.52" y1="52.97" y2="83.01">
			<stop offset="0" stopColor="#6b57ff"/>
			<stop offset=".02" stopColor="#685cfb"/>
			<stop offset=".28" stopColor="#4a91ca"/>
			<stop offset=".51" stopColor="#34b7a7"/>
			<stop offset=".69" stopColor="#26ce91"/>
			<stop offset=".8" stopColor="#21d789"/>
		</linearGradient>
		<linearGradient id="d" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="10.48" x2="94.6" y1="52.51" y2="98.96">
			<stop offset=".08" stopColor="#21d789"/>
			<stop offset=".89" stopColor="#6b57ff"/>
		</linearGradient>
		<linearGradient id="e" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="10.99" x2="95.54" y1="41.31" y2="41.31">
			<stop offset=".31" stopColor="#21d789"/>
			<stop offset=".49" stopColor="#59a3b2"/>
			<stop offset=".77" stopColor="#b74af7"/>
			<stop offset="1" stopColor="#ff45ed"/>
		</linearGradient>
	</defs>
	<path d="m115.055 23.676 7.46 47.906-13.788 8.023Zm0 0" fill="url(#a)"/>
	<path d="M115.055 23.676 73.156 5.484l-11.691 9.704Zm0 0" fill="url(#b)"/>
	<path d="M84.566 122.516 19.555 70.719 6.496 109.984Zm0 0" fill="url(#c)"/>
	<path d="M93.621 89.781 5.484 59.5l79.082 63.016Zm0 0" fill="url(#d)"/>
	<path d="M5.484 6.316V59.5l101.559 34.902 8.012-70.726Zm0 0" fill="url(#e)"/>
	<path d="M27.43 27.281h73.14v73.145H27.43Zm0 0" fill="#000"/>
	<path d="M34.852 36.79h11.812c9.508 0 16.094 6.534 16.094 15.058v.082c0 8.535-6.586 15.14-16.094 15.14H34.852Zm6.656 6.01v18.286h5.156a8.632 8.632 0 0 0 9.121-9.043v-.113a8.698 8.698 0 0 0-9.12-9.13Zm22.43 9.216v-.086a15.549 15.549 0 0 1 15.847-15.664 16.613 16.613 0 0 1 11.899 4.156l-4.192 5.062a11.193 11.193 0 0 0-7.914-3.074c-4.875 0-8.703 4.293-8.703 9.438v.082c0 5.535 3.816 9.61 9.18 9.61a10.646 10.646 0 0 0 6.289-1.806v-4.34H79.64v-5.753h13.152v13.152a19.633 19.633 0 0 1-12.934 4.805c-9.433 0-15.921-6.645-15.921-15.582ZM34.156 86.699h27.43v4.57h-27.43Zm0 0" fill="#fff"/>
</svg>);
}