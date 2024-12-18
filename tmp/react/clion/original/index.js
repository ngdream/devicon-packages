const React = require("react");
module.exports = function ClionOriginalIcon({size = "1em",  ...props}){
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
		<linearGradient id="a" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="39.01" x2="66.51" y1="23.27" y2="23.27">
			<stop offset="0" stopColor="#ff318c"/>
			<stop offset=".15" stopColor="#fb348c"/>
			<stop offset=".28" stopColor="#f03c8c"/>
			<stop offset=".42" stopColor="#de4a8c"/>
			<stop offset=".54" stopColor="#c45d8b"/>
			<stop offset=".67" stopColor="#a2778b"/>
			<stop offset=".79" stopColor="#79958a"/>
			<stop offset=".91" stopColor="#49b98a"/>
			<stop offset="1" stopColor="#21d789"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="27.99" x2="13.87" y1="16.68" y2="111.42">
			<stop offset=".09" stopColor="#21d789"/>
			<stop offset=".9" stopColor="#009ae5"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="92.05" x2="-4.53" y1="13.4" y2="115.4">
			<stop offset=".09" stopColor="#21d789"/>
			<stop offset=".9" stopColor="#009ae5"/>
		</linearGradient>
		<linearGradient id="d" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="62.84" x2="95.87" y1="77.02" y2="81.72">
			<stop offset=".09" stopColor="#21d789"/>
			<stop offset=".9" stopColor="#009ae5"/>
		</linearGradient>
	</defs>
	<path d="M47.555 51.25 50.09 5.484l26.613 14.75Zm0 0" fill="url(#a)"/>
	<path d="M47.555 51.25 50.09 5.484 16.297 26.781 5.484 91.527Zm0 0" fill="url(#b)"/>
	<path d="m120.188 40.559-15.06-30.61-28.425 10.285L47.555 51.25 5.485 91.527l37.949 27.621 47.703-43.02Zm0 0" fill="url(#c)"/>
	<path d="M100.57 72.582v27.988H54.613l20.2 15.63 29.257 6.316 18.446-41.754Zm0 0" fill="url(#d)"/>
	<path d="M27.43 27.43h73.14v73.14H27.43Zm0 0" fill="#000"/>
	<path d="M36.547 86.746h27.43v4.574h-27.43ZM64.063 36.5h6.093v22.418h12.008V64H64.062ZM34.597 50.434v-.075a14.06 14.06 0 0 1 4.156-10.234 14.06 14.06 0 0 1 10.266-4.078 14.282 14.282 0 0 1 10.898 4.266l-3.84 4.476a10.222 10.222 0 0 0-7.086-3.121c-4.656 0-8.008 3.863-8.008 8.605v.086c0 4.743 3.278 8.692 8.008 8.692 3.172 0 5.098-1.219 7.317-3.242l3.8 3.925a14.138 14.138 0 0 1-11.347 4.875 13.94 13.94 0 0 1-10.082-4.09 13.94 13.94 0 0 1-4.082-10.085" fill="#fff"/>
</svg>);
}