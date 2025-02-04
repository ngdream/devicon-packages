const React = require("react");
module.exports = function ElixirOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<linearGradient id="elixir-original-wordmark-a" gradientUnits="userSpaceOnUse" x1="24.682" x2="23.615" y1="33.035" y2="100.535">
		<stop offset="0" stopColor="#d9d8dc"/>
		<stop offset="1" stopColor="#fff" stopOpacity=".385"/>
	</linearGradient>
	<linearGradient id="elixir-original-wordmark-b" gradientTransform="matrix(.1142 0 0 .2271 -106.224 33.229)" gradientUnits="userSpaceOnUse" x1="1137.202" x2="1069.889" y1="-5.548" y2="287.831">
		<stop offset="0" stopColor="#8d67af" stopOpacity=".672"/>
		<stop offset="1" stopColor="#9f8daf"/>
	</linearGradient>
	<linearGradient id="elixir-original-wordmark-c" gradientUnits="userSpaceOnUse" x1="27.26" x2="27.26" y1="51.801" y2="98.425">
		<stop offset="0" stopColor="#26053d" stopOpacity=".762"/>
		<stop offset="1" stopColor="#b7b4b4" stopOpacity=".278"/>
	</linearGradient>
	<linearGradient id="elixir-original-wordmark-d" gradientTransform="matrix(.1848 0 0 .1404 -96.85 33.137)" gradientUnits="userSpaceOnUse" x1="578.113" x2="680.68" y1="142.292" y2="348.7">
		<stop offset="0" stopColor="#91739f" stopOpacity=".46"/>
		<stop offset="1" stopColor="#32054f" stopOpacity=".54"/>
	</linearGradient>
	<linearGradient id="elixir-original-wordmark-e" gradientTransform="matrix(.1418 0 0 .1829 -102.558 33.18)" gradientUnits="userSpaceOnUse" x1="982.624" x2="800.904" y1="331.094" y2="136.958">
		<stop offset="0" stopColor="#463d49" stopOpacity=".331"/>
		<stop offset="1" stopColor="#340a50" stopOpacity=".821"/>
	</linearGradient>
	<linearGradient id="elixir-original-wordmark-f" gradientTransform="matrix(.106 0 0 .2448 -107.314 33.242)" gradientUnits="userSpaceOnUse" x1="1281.778" x2="1227.874" y1="73.753" y2="263.17">
		<stop offset="0" stopColor="#715383" stopOpacity=".145"/>
		<stop offset="1" stopColor="#f4f4f4" stopOpacity=".234"/>
	</linearGradient>
	<linearGradient id="elixir-original-wordmark-g" gradientTransform="matrix(.09173 0 0 .2828 -109.209 33.28)" gradientUnits="userSpaceOnUse" x1="1542.574" x2="1373.566" y1="94.466" y2="62.662">
		<stop offset="0" stopColor="#a5a1a8" stopOpacity=".356"/>
		<stop offset="1" stopColor="#370c50" stopOpacity=".582"/>
	</linearGradient>
	<path className="elixir-original-wordmark-M" d="M25.8 27.7C10 35.3-9.9 75.1 6.7 92.5c15.3 19.2 48.9.7 39.1-23.2-12.3-20.5-20-21.6-20-41.6z" fill="url(#elixir-original-wordmark-a)"/>
	<path className="elixir-original-wordmark-M" d="M25.8 27.5C10 35.2-9.9 74.8 6.7 92.3c6.1 7.1 16 9.4 21.6 5.2 15.1-10.8 4.2-30.4 5.9-44.9-6.3-5.8-8.5-18.8-8.4-25.1z" fill="url(#elixir-original-wordmark-b)"/>
	<path className="elixir-original-wordmark-M" d="M21.4 29.8C8.7 38.9 5.3 72.7 7.6 83.7c4.7 27.5 43 16.2 39.8-9.4-3.4-16.7-27.9-22.4-26-44.5z" fill="url(#elixir-original-wordmark-c)"/>
	<path className="elixir-original-wordmark-M" d="M34.1 55.9c5.9 7.7 7.3 12.9 3.9 16-15.9 11-35.1 4.2-30.9-21.4-5.4 12.9-15.5 32.3 6.7 35 11.9 2.1 30.9 1.1 33.7-9.2-.2-9.1-6.2-13.1-13.4-20.4z" fill="url(#elixir-original-wordmark-d)"/>
	<path className="elixir-original-wordmark-M" d="M10.8 48.2C9.1 60.3 30.9 92.8 44.1 88.8 34 109.2 11.6 76.7 7.5 65c.9-6.3 1.3-9.4 3.3-16.8z" fill="url(#elixir-original-wordmark-e)"/>
	<path className="elixir-original-wordmark-M" d="M23.5 55.8c.5 4.5 2.2 11.7 0 16.5-2.2 4.7-12.4 13.4-9.6 21.1 6.5 14.2 21.2-2.5 21.1-10.9.6-6.8-3.8-22.1-1-30l-1.3-1.6-7.7-2.4c-1.3 1.9-1.8 4.3-1.5 7.3z" fill="url(#elixir-original-wordmark-f)"/>
	<path d="M63.7 72c.1 4.1 2.6 5.8 5.7 5.8 2.2 0 3.5-.4 4.6-.9l.5 2.2c-1.1.5-2.9 1.1-5.6 1.1-5.1 0-8.2-3.4-8.2-8.4s3-8.9 7.8-8.9c5.5 0 6.9 4.7 6.9 7.8 0 .6 0 1.1-.1 1.4H63.7zm8.9-2.2c0-1.9-.8-4.9-4.2-4.9-3.1 0-4.4 2.8-4.6 4.9h8.8zm6.6-14.4h3v24.4h-3V55.4zm11.5 3.1c0 1-.7 1.9-1.9 1.9-1.1 0-1.8-.8-1.8-1.9s.8-1.9 1.9-1.9c1 0 1.8.8 1.8 1.9zm-3.4 21.3V63.1h3v16.6h-3zm9.5-16.7l2.4 3.6c.7.9 1.2 1.8 1.7 2.7h.1c.5-1 1.1-1.8 1.7-2.7l2.3-3.5h3.3l-5.7 8 5.8 8.6H105l-2.5-3.7c-.7-1-1.2-1.9-1.8-2.9h-.1c-.5 1-1.1 1.9-1.8 2.9l-2.4 3.7h-3.3l5.9-8.5-5.6-8.1h3.4zm17.8-4.6c0 1-.7 1.9-1.9 1.9-1.1 0-1.8-.8-1.8-1.9s.8-1.9 1.9-1.9 1.8.8 1.8 1.9zm-3.4 21.3V63.1h3v16.6h-3zm8.1-11.5l-.1-5.2h2.6l.1 3.3h.1c.8-2.2 2.6-3.6 4.6-3.6.3 0 .5 0 .8.1v2.8c-.3-.1-.6-.1-1-.1-2.1 0-3.6 1.6-4 3.8-.1.4-.1.9-.1 1.4v8.9h-3V68.3z" fill="#333"/>
	<g className="elixir-original-wordmark-M">
		<path d="M26.3 33.6C9.5 43.1 16.4 58 17.1 74.1L28 42.4c-.7-3.3-1.2-5.5-1.7-8.8z" fill="url(#elixir-original-wordmark-g)"/>
		<path d="M28 42.3c-8.4 6.7-8 17.9-10.6 30.9C22 61 19.8 51.3 28 42.3z" fill="#330a4c" fillOpacity=".316"/>
		<path d="M15.2 95.9c4.6.6 6.9 1.3 7.2 1.7.1 2.4-6.4.7-7.2-1.7z" fill="#fff"/>
		<path d="M17.5 33.6C13.5 38 9.2 46 7.1 50.5c-.6 3.7-.3 9 .3 13.4.5-10.3 4.3-22.3 10.1-30.3z" fill="#ededed" fillOpacity=".603"/>
	</g>
</svg>);
}