const React = require("react");
module.exports = function FlutterOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<g fill="#3FB6D3">
		<path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
	</g>
	<path d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" fill="#27AACD"/>
	<path d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z" fill="#19599A"/>
	<path d="M61.6 113.1l30.8-8.4-10.8-10.8z" fill="url(#flutter-original-a)"/>
	<linearGradient id="flutter-original-a" gradientUnits="userSpaceOnUse" x1="59.365" x2="86.825" y1="116.36" y2="99.399">
		<stop offset="0" stopColor="#1b4e94"/>
		<stop offset=".63" stopColor="#1a5497"/>
		<stop offset="1" stopColor="#195a9b"/>
	</linearGradient>
</svg>);
}