const React = require("react");
module.exports = function ConfluenceOriginalIcon({size = "1em",  ...props}){
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
		<linearGradient id="a" gradientTransform="translate(-21.334 -18.666) scale(5.33331)" gradientUnits="userSpaceOnUse" x1="26.791" x2="11.792" y1="28.467" y2="19.855">
			<stop offset="0" stopColor="#0052cc"/>
			<stop offset=".918" stopColor="#2380fb"/>
			<stop offset="1" stopColor="#2684ff"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="translate(-21.334 -18.666) scale(5.33331)" gradientUnits="userSpaceOnUse" x1="5.209" x2="20.208" y1="2.523" y2="11.136">
			<stop offset="0" stopColor="#0052cc"/>
			<stop offset=".918" stopColor="#2380fb"/>
			<stop offset="1" stopColor="#2684ff"/>
		</linearGradient>
	</defs>
	<path d="M4.655 96.303a332.061 332.061 0 0 0-4.062 6.577c-1.156 1.933-.578 4.448 1.354 5.61l26.484 16.25c1.934 1.16 4.443.577 5.604-1.355a185.798 185.798 0 0 1 3.866-6.579c10.442-17.213 21.071-15.28 40.014-6.186l26.293 12.374c2.124.97 4.447 0 5.41-1.933l12.569-28.43c.963-1.938 0-4.448-1.939-5.418-5.604-2.516-16.618-7.74-26.285-12.573-35.76-17.219-66.114-16.057-89.306 21.663Zm0 0" fill="url(#a)"/>
	<path d="M123.343 31.697a332.061 332.061 0 0 0 4.063-6.577c1.16-1.933.577-4.448-1.355-5.61L99.567 3.26c-1.933-1.16-4.443-.577-5.604 1.355a178.066 178.066 0 0 1-3.865 6.579c-10.443 17.213-21.072 15.28-40.015 6.186L23.79 5.006c-2.124-.97-4.441 0-5.41 1.933L5.816 35.369c-.968 1.938 0 4.454 1.933 5.418 5.604 2.516 16.624 7.74 26.285 12.573 35.767 17.027 66.115 16.056 89.307-21.663zm0 0" fill="url(#b)"/>
</svg>);
}