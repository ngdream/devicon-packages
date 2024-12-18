const React = require("react");
module.exports = function RollupOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="51.359" x2="84.819" y1="61.956" y2="54.135">
		<stop style={{"stopColor":"#ff6533"}} offset="0"/>
		<stop style={{"stopColor":"#ff5633"}} offset=".157"/>
		<stop style={{"stopColor":"#ff4333"}} offset=".434"/>
		<stop style={{"stopColor":"#ff3733"}} offset=".714"/>
		<stop style={{"stopColor":"#f33"}} offset="1"/>
	</linearGradient>
	<linearGradient id="b" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="46.123" x2="106.089" y1="73.047" y2="26.551">
		<stop style={{"stopColor":"#bf3338"}} offset="0"/>
		<stop style={{"stopColor":"#f33"}} offset="1"/>
	</linearGradient>
	<linearGradient id="c" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="48.083" x2="56.774" y1="63.893" y2="54.768">
		<stop style={{"stopColor":"#ff6533"}} offset="0"/>
		<stop style={{"stopColor":"#ff5633"}} offset=".157"/>
		<stop style={{"stopColor":"#ff4333"}} offset=".434"/>
		<stop style={{"stopColor":"#ff3733"}} offset=".714"/>
		<stop style={{"stopColor":"#f33"}} offset="1"/>
	</linearGradient>
	<linearGradient id="d" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="63.885" x2="61.278" y1="48.184" y2="85.555">
		<stop style={{"stopColor":"#ff6533"}} offset="0"/>
		<stop style={{"stopColor":"#ff5633"}} offset=".157"/>
		<stop style={{"stopColor":"#ff4333"}} offset=".434"/>
		<stop style={{"stopColor":"#ff3733"}} offset=".714"/>
		<stop style={{"stopColor":"#f33"}} offset="1"/>
	</linearGradient>
	<linearGradient id="e" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="52.589" x2="64.934" y1="64.534" y2="56.139">
		<stop style={{"stopColor":"#fbb040"}} offset="0"/>
		<stop style={{"stopColor":"#fb8840"}} offset="1"/>
	</linearGradient>
	<linearGradient id="f" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="65.237" x2="52.636" y1="111.996" y2="-26.622">
		<stop style={{"stopColor":"#fff"}} offset="0"/>
		<stop style={{"stopColor":"#fff","stopOpacity":"0"}} offset="1"/>
	</linearGradient>
	<path d="M111.442 42.825c0-7.3-1.912-14.144-5.28-20.076-8.93-9.191-28.354-11.32-33.177-.043-4.954 11.559 8.321 24.421 14.123 23.4 7.387-1.304-1.304-18.251-1.304-18.251 11.298 21.292 8.691 14.774-11.733 34.329s-41.281 60.814-44.323 62.552c-.13.087-.261.152-.413.217h80.107c1.412 0 2.325-1.499 1.695-2.759L90.193 80.739a1.898 1.898 0 0 1 .739-2.499c12.254-7.04 20.51-20.25 20.51-35.415z" fill="url(#a)"/>
	<path d="M111.442 42.825c0-7.3-1.912-14.144-5.28-20.076-8.93-9.191-28.354-11.32-33.177-.043-4.954 11.559 8.321 24.421 14.123 23.4 7.387-1.304-1.304-18.251-1.304-18.251 11.298 21.292 8.691 14.774-11.733 34.329s-41.281 60.814-44.323 62.552c-.13.087-.261.152-.413.217h80.107c1.412 0 2.325-1.499 1.695-2.759L90.193 80.739a1.898 1.898 0 0 1 .739-2.499c12.254-7.04 20.51-20.25 20.51-35.415z" fill="url(#b)"/>
	<path d="M29.748 124.736c3.042-1.738 23.9-43.019 44.323-62.574s23.031-13.036 11.733-34.329c0 0-43.237 60.618-58.88 90.602" fill="url(#c)"/>
	<path d="M35.832 70.418c29.201-53.687 33.025-59.097 48.234-59.097 7.996 0 16.056 3.607 21.271 10.016C98.232 9.887 85.652 2.217 71.247 2H21.644c-1.043 0-1.89.847-1.89 1.89v99.988c2.955-7.626 7.974-18.533 16.078-33.46z" fill="url(#d)"/>
	<path d="M74.071 62.162c-20.423 19.554-41.281 60.836-44.323 62.574s-8.148 1.955-10.863-1.086c-2.89-3.237-7.387-8.474 16.947-53.231 29.201-53.687 33.025-59.097 48.234-59.097 7.996 0 16.056 3.607 21.271 10.016.282.456.565.934.847 1.412-8.93-9.191-28.354-11.32-33.177-.043-4.954 11.559 8.321 24.421 14.123 23.4 7.387-1.304-1.304-18.251-1.304-18.251 11.276 21.27 8.669 14.752-11.755 34.306z" fill="url(#e)"/>
	<path d="M38.222 72.808c29.201-53.687 33.025-59.097 48.234-59.097 6.583 0 13.21 2.455 18.251 6.887-5.214-5.953-12.949-9.277-20.641-9.277-15.209 0-19.033 5.41-48.234 59.097-24.334 44.758-19.837 49.994-16.947 53.231.413.456.891.847 1.391 1.173-2.543-3.693-3.672-12.275 17.946-52.014z" fill="url(#f)" opacity=".3"/>
</svg>);
}