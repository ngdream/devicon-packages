const React = require("react");
module.exports = function ElixirOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<linearGradient id="elixir-original-a" gradientTransform="matrix(.1297 0 0 .2 -46.03 17.198)" gradientUnits="userSpaceOnUse" x1="835.592" x2="821.211" y1="-36.546" y2="553.414">
		<stop offset="0" stopColor="#d9d8dc"/>
		<stop offset="1" stopColor="#fff" stopOpacity=".385"/>
	</linearGradient>
	<linearGradient id="elixir-original-b" gradientTransform="matrix(.1142 0 0 .2271 -47.053 17.229)" gradientUnits="userSpaceOnUse" x1="942.357" x2="824.692" y1="-40.593" y2="472.243">
		<stop offset="0" stopColor="#8d67af" stopOpacity=".672"/>
		<stop offset="1" stopColor="#9f8daf"/>
	</linearGradient>
	<linearGradient id="elixir-original-c" gradientTransform="matrix(.1227 0 0 .2115 -46.493 17.206)" gradientUnits="userSpaceOnUse" x1="924.646" x2="924.646" y1="120.513" y2="505.851">
		<stop offset="0" stopColor="#26053d" stopOpacity=".762"/>
		<stop offset="1" stopColor="#b7b4b4" stopOpacity=".278"/>
	</linearGradient>
	<linearGradient id="elixir-original-d" gradientTransform="matrix(.1848 0 0 .1404 -42.394 17.138)" gradientUnits="userSpaceOnUse" x1="428.034" x2="607.325" y1="198.448" y2="559.255">
		<stop offset="0" stopColor="#91739f" stopOpacity=".46"/>
		<stop offset="1" stopColor="#32054f" stopOpacity=".54"/>
	</linearGradient>
	<linearGradient id="elixir-original-e" gradientTransform="matrix(.1418 0 0 .1829 -45.23 17.18)" gradientUnits="userSpaceOnUse" x1="907.895" x2="590.242" y1="540.636" y2="201.281">
		<stop offset="0" stopColor="#463d49" stopOpacity=".331"/>
		<stop offset="1" stopColor="#340a50" stopOpacity=".821"/>
	</linearGradient>
	<linearGradient id="elixir-original-f" gradientTransform="matrix(.106 0 0 .2448 -47.595 17.242)" gradientUnits="userSpaceOnUse" x1="1102.297" x2="1008.071" y1="100.542" y2="431.648">
		<stop offset="0" stopColor="#715383" stopOpacity=".145"/>
		<stop offset="1" stopColor="#f4f4f4" stopOpacity=".234"/>
	</linearGradient>
	<linearGradient id="elixir-original-g" gradientTransform="matrix(.09173 0 0 .2828 -48.536 17.28)" gradientUnits="userSpaceOnUse" x1="1354.664" x2="1059.233" y1="140.06" y2="84.466">
		<stop offset="0" stopColor="#a5a1a8" stopOpacity=".356"/>
		<stop offset="1" stopColor="#370c50" stopOpacity=".582"/>
	</linearGradient>
	<path d="M64.4.5C36.7 13.9 1.9 83.4 30.9 113.9c26.8 33.5 85.4 1.3 68.4-40.5-21.5-36-35-37.9-34.9-72.9z" fill="url(#elixir-original-a)" fillRule="evenodd"/>
	<path d="M64.4.2C36.8 13.6 1.9 82.9 31 113.5c10.7 12.4 28 16.5 37.7 9.1 26.4-18.8 7.4-53.1 10.4-78.5C68.1 33.9 64.2 11.3 64.4.2z" fill="url(#elixir-original-b)" fillRule="evenodd"/>
	<path d="M56.7 4.3c-22.3 15.9-28.2 75-24.1 94.2 8.2 48.1 75.2 28.3 69.6-16.5-6-29.2-48.8-39.2-45.5-77.7z" fill="url(#elixir-original-c)" fillRule="evenodd"/>
	<path d="M78.8 49.8c10.4 13.4 12.7 22.6 6.8 27.9-27.7 19.4-61.3 7.4-54-37.3C22.1 63 4.5 96.8 43.3 101.6c20.8 3.6 54 2 58.9-16.1-.2-15.9-10.8-22.9-23.4-35.7z" fill="url(#elixir-original-d)" fillRule="evenodd"/>
	<path d="M38.1 36.4c-2.9 21.2 35.1 77.9 58.3 71-17.7 35.6-56.9-21.2-64-41.7 1.5-11 2.2-16.4 5.7-29.3z" fill="url(#elixir-original-e)" fillRule="evenodd"/>
	<path d="M60.4 49.7c.8 7.9 3.9 20.5 0 28.8S38.7 102 43.6 115.3c11.4 24.8 37.1-4.4 36.9-19 1.1-11.8-6.6-38.7-1.8-52.5L76.5 41l-13.6-4c-2.2 3.2-3 7.5-2.5 12.7z" fill="url(#elixir-original-f)" fillRule="evenodd"/>
	<path d="M65.3 10.8C36 27.4 48 53.4 49.3 81.6l19.1-55.4c-1.4-5.7-2.3-9.5-3.1-15.4z" fill="url(#elixir-original-g)" fillRule="evenodd"/>
	<path d="M68.3 26.1c-14.8 11.7-14.1 31.3-18.6 54 8.1-21.3 4.1-38.2 18.6-54z" fill="#330A4C" fillOpacity=".316" fillRule="evenodd"/>
	<path d="M45.8 119.7c8 1.1 12.1 2.2 12.5 3 .3 4.2-11.1 1.2-12.5-3z" fill="#FFF" fillRule="evenodd"/>
	<path d="M49.8 10.8c-6.9 7.7-14.4 21.8-18.2 29.7-1 6.5-.5 15.7.6 23.5.9-18.2 7.5-39.2 17.6-53.2z" fill="#EDEDED" fillOpacity=".603" fillRule="evenodd"/>
</svg>);
}