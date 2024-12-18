const React = require("react");
module.exports = function KtorOriginalIcon({size = "1em",  ...props}){
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
		<linearGradient id="a" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="24.941" x2="52.306" y1="24.941" y2="52.306">
			<stop offset=".296" stopColor="#00afff"/>
			<stop offset=".694" stopColor="#5282ff"/>
			<stop offset="1" stopColor="#945dff"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="53.151" x2="79.023" y1="53.151" y2="79.023">
			<stop offset=".108" stopColor="#c757bc"/>
			<stop offset=".173" stopColor="#cd5ca9"/>
			<stop offset=".492" stopColor="#e8744f"/>
			<stop offset=".716" stopColor="#f88316"/>
			<stop offset=".823" stopColor="#ff8900"/>
		</linearGradient>
	</defs>
	<path d="M80.457 47.543 47.543 14.629 14.629 47.543l32.914 32.914Zm0 0" fill="url(#a)"/>
	<path d="m47.543 80.457 32.914 32.914 32.914-32.914-32.914-32.914Zm0 0" fill="url(#b)"/>
	<path d="M80.457 47.543H47.543v32.914h32.914Zm0 0"/>
</svg>);
}