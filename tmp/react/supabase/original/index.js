const React = require("react");
module.exports = function SupabaseOriginalIcon({size = "1em",  ...props}){
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
		<linearGradient id="a" gradientTransform="translate(29.387 60.096) scale(1.1436)" gradientUnits="userSpaceOnUse" x1="53.974" x2="94.163" y1="54.974" y2="71.829">
			<stop offset="0" stopColor="#249361"/>
			<stop offset="1" stopColor="#3ecf8e"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="translate(29.387 60.096) scale(1.1436)" gradientUnits="userSpaceOnUse" x1="36.156" x2="54.484" y1="30.578" y2="65.081">
			<stop offset="0"/>
			<stop offset="1" stopOpacity="0"/>
		</linearGradient>
	</defs>
	<path d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" fill="url(#a)" transform="translate(-27.722 -60.338)"/>
	<path d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" fill="url(#b)" fillOpacity=".2" transform="translate(-27.722 -60.338)"/>
	<path d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z" fill="#3ecf8e"/>
</svg>);
}