const React = require("react");
module.exports = function ThreedsmaxPlainIcon({size = "1em", color = "#37a5cc", ...props}){
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
	<path d="M23.278 0v89.349h91.608V6.024A6.016 6.016 0 0 0 108.863 0Zm-1.003.386L3.702 11.578v89.18l18.573-11.191Zm46.021 18.187c10.157 0 17.453 5.15 17.453 12.517v2.718c0 4.22-4.006 7.87-8.941 9.014 4.935.858 10.872 4.22 10.872 10.729v3.363c0 8.083-8.08 14.02-19.025 14.02-14.02 0-19.029-7.368-19.816-14.736h11.732c.357 3.004 2.432 5.865 7.439 5.865 4.363 0 7.225-2.074 7.225-6.58V53.98c0-5.436-5.437-6.366-9.013-6.366h-3.863v-8.369h3.863c3.576 0 7.225-1.145 7.225-5.294v-1.716c0-3.29-2.219-4.935-5.867-4.935-4.22 0-6.15 2.647-6.437 5.794H49.412c.357-7.654 7.01-14.521 18.884-14.521zm47.594 1.003v70.777H22.918l-9.051 5.453v25.669A6.525 6.525 0 0 0 20.392 128h103.906V19.576ZM40.96 98.751h5.963l3.823 15.233 4.012-15.178-.028-.055h5.8v18.974h-4.5v-12.25l-3.17 12.223v.027h-4.473l-3.36-12.739v12.74H40.96zm27.425 0H74.7l5.72 18.974h-4.824l-1.167-4.147h-5.692l-1.057 4.147h-4.717zm13.994 0h5.179l3.198 6.045h.027l3.28-6.045h5.014l-5.394 8.54 5.99 10.434h-5.339l-3.658-7.154-3.714 7.154h-5.206l5.99-10.029zm-10.849 3.118-1.925 8.186h3.904z"/>
</svg>);
}