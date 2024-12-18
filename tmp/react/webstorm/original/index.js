const React = require("react");
module.exports = function WebstormOriginalIcon({size = "1em",  ...props}){
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
		<linearGradient id="a" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="38.88" x2="63.72" y1="6.5" y2="95.94">
			<stop offset=".28" stopColor="#07c3f2"/>
			<stop offset=".94" stopColor="#087cfa"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="46.63" x2="88.66" y1="17.85" y2="79.48">
			<stop offset=".14" stopColor="#fcf84a"/>
			<stop offset=".37" stopColor="#07c3f2"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="88.27" x2="93.79" y1="25.47" y2="45.02">
			<stop offset=".28" stopColor="#07c3f2"/>
			<stop offset=".94" stopColor="#087cfa"/>
		</linearGradient>
	</defs>
	<path d="M21.262 111.25 5.484 17.75 34.656 5.645l18.63 11.07 17.066-9.207 35.558 13.656-19.94 101.352Zm0 0" fill="url(#a)"/>
	<path d="M122.516 45.117 107.41 7.813l-27.402-2.33L37.707 46.13 49.09 98.512l21.262 14.91 52.164-30.953-12.801-24.004Zm0 0" fill="url(#b)"/>
	<path d="m99.07 39.559 10.645 18.906 12.8-13.348-9.398-23.234Zm0 0" fill="url(#c)"/>
	<path d="M27.43 27.43h73.14v73.14H27.43Zm0 0"/>
	<path d="M36.547 86.746h27.43v4.574h-27.43Zm25.965-50.21L58.43 52.538l-4.668-16.004h-4.645L44.434 52.54l-4.07-16.004H33.96l7.84 27.442h5.144L51.43 48.09l4.437 15.887h5.207l7.828-27.442Zm7.535 23.526 3.57-4.277a12.625 12.625 0 0 0 8.219 3.34c2.437 0 3.973-.977 3.973-2.598v-.074c0-1.535-.95-2.316-5.547-3.496-5.547-1.414-9.117-2.953-9.117-8.414v-.086c0-4.984 4.007-8.289 9.628-8.289a15.85 15.85 0 0 1 10.215 3.5l-3.144 4.559a12.877 12.877 0 0 0-7.156-2.707c-2.317 0-3.536 1.062-3.536 2.437v.086c0 1.805 1.22 2.437 5.938 3.66 5.582 1.461 8.73 3.461 8.73 8.262v.074c0 5.461-4.172 8.535-10.11 8.535a17.48 17.48 0 0 1-11.663-4.402" fill="#fff"/>
</svg>);
}