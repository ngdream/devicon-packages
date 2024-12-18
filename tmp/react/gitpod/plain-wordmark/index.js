const React = require("react");
module.exports = function GitpodPlainWordmarkIcon({size = "1em", color = "#FFA132", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="a">
			<path d="M106 88h21.531v31H106Zm0 0"/>
		</clipPath>
		<clipPath id="b">
			<path d="M26.59 0h73.176v72.637H26.59Zm0 0"/>
		</clipPath>
	</defs>
	<path style={{"stroke":"none"}} d="M15.266 117.91c-8.758 0-15.02-6.387-15.02-14.805s6.305-14.804 14.89-14.804c4.231 0 7.532 1.648 10.278 4.058l-1.734 3.598c-2.114-2.117-4.82-3.852-8.711-3.852-6.348 0-10.914 4.446-10.914 11 0 6.555 4.527 10.997 10.957 10.997 5.539 0 9.472-3.34 10.11-8.415H13.823v-3.808h15.61v.168c0 9.308-5.247 15.863-14.168 15.863Zm18.14-21.148h3.637v21.148h-3.637Zm20.867 20.851v-3.215c-1.144.211-2.074.34-3.425.34-1.778 0-2.414-.93-2.414-2.539V99.934h5.796v-3.172h-5.796v-5.668h-3.637v5.668h-4.188v3.172h4.188v12.054c0 4.485 1.988 6.133 5.84 6.133 1.351 0 2.535-.21 3.636-.508Zm0 0"/>
	<path style={{"stroke":"none"}} d="M61.688 126.371h-3.641v-29.61h3.64v3.044c1.735-2.325 4.313-3.551 7.446-3.551 6.004 0 10.191 4.566 10.191 11.082 0 6.512-4.187 11.082-10.191 11.082-3.004 0-5.457-1.184-7.445-3.598Zm-.254-19.035c0 4.695 2.789 7.7 7.062 7.7 4.274 0 7.067-3.048 7.067-7.7s-2.793-7.7-7.067-7.7c-4.273 0-7.062 3.005-7.062 7.7Zm20.156 0c0 6.344 4.738 11.082 11.082 11.082 6.348 0 11.082-4.738 11.082-11.082 0-6.348-4.734-11.082-11.082-11.082-6.344 0-11.082 4.734-11.082 11.082Zm18.402 0c0 4.398-2.922 7.57-7.32 7.57-4.399 0-7.317-3.172-7.317-7.57s2.918-7.574 7.317-7.574c4.398 0 7.32 3.175 7.32 7.574Zm0 0"/>
	<path style={{"stroke":"none"}} d="M35.23 93.98a2.6 2.6 0 0 0 2.606-2.593 2.602 2.602 0 0 0-2.606-2.594 2.599 2.599 0 0 0-2.601 2.594 2.597 2.597 0 0 0 2.601 2.593Zm0 0"/>
	<g clipPath="url(#a)">
		<path style={{"stroke":"none"}} d="M123.676 88.3h3.64v29.61h-3.64v-3.047c-1.735 2.328-4.313 3.555-7.442 3.555-6.007 0-10.195-4.57-10.195-11.082 0-6.516 4.188-11.082 10.195-11.082 3 0 5.454 1.183 7.442 3.594Zm.254 19.036c0-4.695-2.79-7.7-7.063-7.7s-7.062 3.048-7.062 7.7 2.789 7.7 7.062 7.7c4.274 0 7.063-3.005 7.063-7.7Zm0 0"/>
	</g>
	<g clipPath="url(#b)">
		<path style={{"stroke":"none"}} d="M69.922 3.918c2.168 3.394.851 7.723-2.942 9.664L43.41 25.656c-.625.317-1.008.91-1.008 1.555v18.953c0 .645.383 1.238 1.008 1.559l18.649 9.55a2.226 2.226 0 0 0 2 0l18.648-9.55c.625-.32 1.012-.914 1.012-1.559V34.38l-16.774 8.48c-3.804 1.922-8.625.72-10.773-2.687-2.145-3.41-.8-7.73 3-9.656l24-12.133c7.312-3.7 16.36 1.035 16.36 8.558v20.66c0 4.84-2.895 9.31-7.583 11.712L70.523 70.28c-4.625 2.371-10.304 2.371-14.93 0l-21.42-10.968c-4.692-2.402-7.582-6.87-7.582-11.71V25.773c0-4.84 2.89-9.308 7.582-11.707L59.137 1.281C62.926-.66 67.757.52 69.922 3.918Zm0 0"/>
	</g>
</svg>);
}