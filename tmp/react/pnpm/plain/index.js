const React = require("react");
module.exports = function PnpmPlainIcon({size = "1em", color = "#f9ad00", ...props}){
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
	<path d="M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004ZM43.996 44v39.996h40V44Zm44.008 0v39.996H128V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"/>
</svg>);
}