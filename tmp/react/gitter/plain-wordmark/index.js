const React = require("react");
module.exports = function GitterPlainWordmarkIcon({size = "1em", color = "#000000", ...props}){
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
	<path d="M31.1 50.1h4.1v20.7h-4.1zM20.7 50.1h4.1v41.4h-4.1zM10.4 50.1h4.1v41.4h-4.1zM0 39.8h4.1v31.1H0z"/>
	<g>
		<path d="M66 61.5h2.1v12.6H66V61.5zM77.1 63.6h-3.2v-2.1h9.4v2.1h-4.1v10.5h-2.1V63.6zM90.7 63.6h-3.2v-2.1h9.4v2.1h-4.1v10.5h-2.1V63.6zM102.3 61.5h9.4v2.1h-7.3v3.1h6.3v2.1h-6.3V72h7.3v2h-9.4V61.5zM128 74.1l-3.3-4.7c1.4-.7 2.2-2 2.2-3.7 0-2.5-2-4.2-4.5-4.2h-4.9v12.6h2.1v-4.2h2.9l3 4.2h2.5zm-8.4-6.3v-4.2h2.8c1.4 0 2.4.8 2.4 2.1 0 1.4-1.1 2.1-2.4 2.1h-2.8zM55.7 66.9V69h3.1v1.8c-.1.2-.3 1.4-3 1.4H55c-.1 0-.2-.1-.2-.1-.1 0-.1 0-.2-.1h-.1c-1.7-.6-2.8-2.2-2.8-4.2 0-.2 0-.4.1-.6.2-2.2 1.8-4 3.9-4 .7 0 2 .2 2.9 1.2l1.2-1.8s-1-1.5-4-1.5c-3.5.1-6.1 2.7-6.5 5.9v.6c0 3.4 2.5 6.3 6.1 6.5H56.8c.2 0 .2 0 .4-.1 2.2-.1 3.7-1.8 3.7-2.7v-4.5l-5.2.1z"/>
	</g>
</svg>);
}