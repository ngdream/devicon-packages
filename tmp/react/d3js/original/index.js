const React = require("react");
module.exports = function D3jsOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<linearGradient id="d3js-original-a" gradientTransform="matrix(82.4907 0 0 -81.4303 16634.416 30700.326)" gradientUnits="userSpaceOnUse" x1="-201.009" x2="-200.098" y1="376.844" y2="375.873">
		<stop offset="0" stopColor="#f9a03c"/>
		<stop offset="1" stopColor="#f7974e"/>
	</linearGradient>
	<linearGradient id="d3js-original-b" gradientTransform="matrix(40.2105 0 0 -40.4122 8003.203 15127)" gradientUnits="userSpaceOnUse" x1="-199.257" x2="-197.514" y1="373.615" y2="371.916">
		<stop offset="0" stopColor="#f9a03c"/>
		<stop offset="1" stopColor="#f7974e"/>
	</linearGradient>
	<linearGradient id="d3js-original-c" gradientTransform="matrix(41.0403 0 0 -39.9333 8224.5 14997.683)" gradientUnits="userSpaceOnUse" x1="-199.836" x2="-198.286" y1="374.252" y2="372.475">
		<stop offset="0" stopColor="#f9a03c"/>
		<stop offset="1" stopColor="#f7974e"/>
	</linearGradient>
	<linearGradient id="d3js-original-d" gradientTransform="matrix(255.8347 0 0 -242.016 51476.605 91789.102)" gradientUnits="userSpaceOnUse" x1="-201.143" x2="-200.795" y1="379.263" y2="378.804">
		<stop offset="0" stopColor="#f26d58"/>
		<stop offset="1" stopColor="#f9a03c"/>
	</linearGradient>
	<linearGradient id="d3js-original-e" gradientTransform="matrix(160.7307 0 0 -174.8133 32360.78 66184.883)" gradientUnits="userSpaceOnUse" x1="-200.962" x2="-200.452" y1="378.553" y2="378.218">
		<stop offset="0" stopColor="#b84e51"/>
		<stop offset="1" stopColor="#f68e48"/>
	</linearGradient>
	<linearGradient id="d3js-original-f" gradientTransform="matrix(176.7653 0 0 -92.6293 35504.598 35022.56)" gradientUnits="userSpaceOnUse" x1="-200.619" x2="-200.595" y1="377.137" y2="376.532">
		<stop offset="0" stopColor="#f9a03c"/>
		<stop offset="1" stopColor="#f7974e"/>
	</linearGradient>
	<path d="M126.334 90.59a37.18 37.18 0 00.128-1.647C126.5 88.288 87.094 50.9 87.094 50.9h-.942s39.94 42.13 40.182 39.69z" fill="url(#d3js-original-a)"/>
	<path d="M42.26 77.62a26.282 26.282 0 01-.328.702c-1.256 2.62 17.585 21.038 19.1 18.8.07-.098.14-.202.208-.3.077-.118.152-.23.228-.348 1.213-1.84-18.67-20.05-19.207-18.854z" fill="url(#d3js-original-b)"/>
	<path d="M68.886 103.52c-.053.118-.433.76-.78 1.098-.058.117 18.394 18.417 18.394 18.417h1.66c.002 0-17.32-18.74-19.274-19.514z" fill="url(#d3js-original-c)"/>
	<path d="M126.488 88.61c-.863 19.13-16.69 34.425-36.024 34.425H87.85l-19.31-19.022a69.313 69.313 0 004.38-6.98h17.544c5.55 0 10.064-4.514 10.064-10.065 0-5.55-4.515-10.064-10.064-10.064H80.082A69.373 69.373 0 0081.306 64c0-4.48-.44-8.852-1.26-13.1h6.45l39.88 39.295a48.62 48.62 0 00.112-1.585zM11.962 4.772H1.472v26.003h10.49c18.32 0 33.23 14.903 33.23 33.225 0 4.984-1.113 9.716-3.088 13.964L61.24 96.82A58.882 58.882 0 0071.2 64c0-32.658-26.574-59.228-59.236-59.228z" fill="url(#d3js-original-d)"/>
	<path d="M90.464 4.772H47.986a69.81 69.81 0 0124.82 26.003h17.658c5.55 0 10.064 4.513 10.064 10.064 0 5.55-4.515 10.06-10.064 10.06h-3.968l39.88 39.296a36.65 36.65 0 00.152-3.228c0-8.766-3.146-16.807-8.368-23.066 5.223-6.256 8.368-14.3 8.368-23.063 0-19.887-16.177-36.068-36.064-36.068z" fill="url(#d3js-original-e)"/>
	<path d="M87.85 123.035H48.29a69.95 69.95 0 0020.25-19.022l19.31 19.022zM61.24 96.82L42.106 77.965c-5.287 11.362-16.807 19.264-30.143 19.264H1.472v26h10.49c20.53 0 38.648-10.5 49.28-26.407z" fill="url(#d3js-original-f)"/>
</svg>);
}