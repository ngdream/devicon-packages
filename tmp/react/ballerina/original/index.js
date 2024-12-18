const React = require("react");
module.exports = function BallerinaOriginalIcon({size = "1em", color = "#46C0BC", ...props}){
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
	<path d="M29 35.9255V0H59.0817V47.4297L29 35.9255ZM29 62.9204L49.5892 55.0465L29 47.1725V62.9204ZM29 74.1674V128H44.4579L59.0817 80.0637V62.6632L29 74.1674ZM99.5874 35.9255V0H69.5057V47.4297L99.5874 35.9255ZM99.5874 47.1725L78.9982 55.0465L99.5874 62.9204V47.1725ZM69.5057 62.6632V80.0637L84.1295 128H99.5874V74.1674L69.5057 62.6632Z"/>
</svg>);
}