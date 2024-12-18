const React = require("react");
module.exports = function VsphereOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M60.168.104H18.641S2.278.932 0 18.744v89.373s1.14 17.915 19.78 19.78h36.35l5.488-5.49H20.401s-13.048-1.656-14.705-14.705V19.883S5.178 6.628 20.194 5.385h35.107z" fill="#00c1d5"/>
	<path d="M67.832 127.896h41.527s16.363-.828 18.641-18.64V19.883S126.86 1.968 108.22.103H71.974l-5.489 5.49H107.6s13.048 1.656 14.705 14.705v87.819s.518 13.255-14.498 14.498H72.803Z" fill="#78bd20"/>
	<g fill="#0091da">
		<path d="M101.385 111.534s-.103 0 0 0H47.016c-6.731 0-9.113-6.006-9.424-9.217v-56.13c0-7.56 6.524-9.837 9.942-9.941h.103l54.576.207c6.835 0 9.321 6.214 9.632 9.424v55.094c0 3.107-.932 5.696-2.9 7.56-2.9 2.9-6.939 3.003-7.56 3.003zm-59.65-9.631c.103.828.932 5.489 5.281 5.489h54.37c.103 0 2.899 0 4.763-1.76 1.035-1.036 1.553-2.59 1.553-4.558V46.291c-.103-.932-1.035-5.695-5.592-5.695l-54.472-.208c-.725 0-5.903.518-5.903 5.8z"/>
		<path d="M32.104 86.162h-7.25c-4.039 0-4.763-4.246-4.97-5.075V25.372c0-4.97 4.66-5.385 5.488-5.489l54.576.208c4.143 0 4.971 4.453 5.178 5.281v5.696h4.971v-6.11c-.414-3.417-3.003-9.838-10.045-9.838l-54.68-.207c-3.52.103-10.252 2.485-10.252 10.356v56.129c.31 3.314 2.9 9.631 9.838 9.631h7.25v-4.867z"/>
	</g>
</svg>);
}