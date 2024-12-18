const React = require("react");
module.exports = function MatlabOriginalIcon({size = "1em",  ...props}){
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
		<linearGradient id="matlab-original-a" gradientTransform="matrix(4 0 0 -4 0 128)" gradientUnits="userSpaceOnUse" x1="16.803" x2="15.013" y1="16.631" y2="22.411">
			<stop offset="0" stopColor="#512"/>
			<stop offset=".23" stopColor="#523"/>
			<stop offset=".36" stopColor="#534"/>
			<stop offset=".51" stopColor="#645"/>
			<stop offset=".66" stopColor="#568"/>
			<stop offset=".84" stopColor="#29d"/>
		</linearGradient>
		<linearGradient id="matlab-original-b" gradientTransform="scale(4)" gradientUnits="userSpaceOnUse" x1="29.71" x2="11.71" y1="18.983" y2="14.563">
			<stop offset=".081" stopColor="#c33"/>
			<stop offset=".189" stopColor="#de5239"/>
			<stop offset=".313" stopColor="#f06e3e"/>
			<stop offset=".421" stopColor="#fa8042"/>
			<stop offset=".5" stopColor="#fe8643"/>
			<stop offset=".58" stopColor="#fa7f42"/>
			<stop offset=".696" stopColor="#ef6c3e"/>
			<stop offset=".833" stopColor="#dc4c37"/>
			<stop offset=".916" stopColor="#cf3633"/>
		</linearGradient>
	</defs>
	<path d="M8 70.2l31.879-12.88a82.62 82.62 0 0110.883-11.8c2.636-1.399 7.597-.641 16.68-11.918 8.796-11 11.597-20.403 15.718-20.403 6.52 0 11.32 14.082 18.602 35.403A461.75 461.75 0 00120 96.48c-7.602-7.082-14.078-14.718-21.48-14.52-6.88.161-14.52 8.321-22.88 18.802C69 109.16 60.2 114.922 56.763 114.8c0 0-8.883-25.121-16.32-29.2a10.563 10.563 0 00-9.563.797L8 70.16zm0 0" fill="#49d"/>
	<path d="M79.2 16.078c-2.68 3.602-5.92 10.203-11.76 17.524-9.082 11.277-14 10.52-16.68 11.918a78.673 78.673 0 00-10.882 11.8l13.2 9.64C64.28 51.68 70.28 35.122 74.96 24.399a54.649 54.649 0 014.238-8.32zm0 0" fill="url(#matlab-original-a)"/>
	<path d="M83.2 13.2c-8.72 0-14.68 45.921-46.88 71.562 9.04-1.48 16.88 20.957 20.48 30.039 16-2.723 28.802-33.32 41.72-32.84 7.402.277 13.878 7.437 21.48 14.52C102.64 60 94.52 13.198 83.2 13.198zm0 0" fill="url(#matlab-original-b)"/>
</svg>);
}