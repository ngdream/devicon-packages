const React = require("react");
module.exports = function YamlPlainIcon({size = "1em", color = "#cb171e", ...props}){
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
	<path d="m0.5 5.6289 21.754 34.15v21.646h13.959v-21.646l22.775-34.15h-15.02l-13.947 21.988-13.832-21.988h-15.689zm63.994 0.13086-23.66 55.797h11.189l5.1387-12.408h25.266l4.252 12.408h11.957l-22.699-55.797h-11.443zm5.9922 11.773 7.7441 20.475h-16.387l8.6426-20.475zm16.195 50.139v54.451h40.818v-11.635-0.00195h-28.863v-42.814h-11.955zm-64.428 0.011719v54.687h11.734v-37.723l12.279 25.355h9.2344l12.699-26.246v38.602h11.256v-54.676h-15.369l-13.637 24.732-12.986-24.732h-15.211z"/>
</svg>);
}