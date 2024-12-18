const React = require("react");
module.exports = function RubymineOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="65.05" x2="52.91" y1="60.03" y2="28.18">
		<stop offset="0" stopColor="#fe2857"/>
		<stop offset=".06" stopColor="#fe3052"/>
		<stop offset=".33" stopColor="#fd533b"/>
		<stop offset=".58" stopColor="#fc6c2a"/>
		<stop offset=".81" stopColor="#fc7b20"/>
		<stop offset="1" stopColor="#fc801d"/>
	</linearGradient>
	<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="41.93" x2="60.67" y1="14.45" y2="31.63">
		<stop offset="0" stopColor="#6b57ff"/>
		<stop offset="1" stopColor="#fe2857"/>
	</linearGradient>
	<linearGradient id="c" gradientUnits="userSpaceOnUse" x1="3.92" x2="65.63" y1="19.88" y2="98.32">
		<stop offset="0" stopColor="#6b57ff"/>
		<stop offset=".3" stopColor="#fe2857"/>
		<stop offset=".63" stopColor="#fe2857"/>
		<stop offset=".64" stopColor="#fe3052"/>
		<stop offset=".7" stopColor="#fd533b"/>
		<stop offset=".76" stopColor="#fc6c2a"/>
		<stop offset=".81" stopColor="#fc7b20"/>
		<stop offset=".85" stopColor="#fc801d"/>
	</linearGradient>
	<path d="M101.595 5.486 68.108 17.481 41.716 5.486 33.024 27.38h-5.62v64.634l81.274.707 12.617-64.366z" fill="url(#a)"/>
	<path d="m100.596 47.482-53.48-31.695 53.48 62.683z" fill="url(#b)"/>
	<path d="m52.98 119.467 43.739-5.827-6.79-13.056h10.667V78.47L47.104 15.689 4.267 26.21l.049 61.44 24.625 34.865 23.906-3.035.11-.012z" fill="url(#c)"/>
	<path d="M27.429 27.429h73.143v73.143H27.429z"/>
	<path d="M36.547 86.747h27.429v4.571H36.547zm27.099-50.213h6.522l7.229 11.63 7.229-11.63h6.522v27.49h-6.01V46.08l-7.741 11.739h-.158l-7.656-11.618v17.822h-5.937zm-27.075.037h12.556q5.218 0 7.997 2.779a8.533 8.533 0 0 1 2.353 6.278v.085a8.533 8.533 0 0 1-1.634 5.425 9.435 9.435 0 0 1-4.254 3.084l6.717 9.752h-7.07l-5.693-8.422h-4.986v8.436h-5.986zm12.19 13.3a5.022 5.022 0 0 0 3.377-1.109 3.657 3.657 0 0 0 1.219-2.828v-.073a3.474 3.474 0 0 0-1.219-2.938 5.522 5.522 0 0 0-3.486-.987h-6.071v7.887z" fill="#fff"/>
</svg>);
}