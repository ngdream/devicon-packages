const React = require("react");
module.exports = function TrelloPlainIcon({size = "1em", color = "#0052cc", ...props}){
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
	<path d="M12.5 0C5.575 0 0 5.575 0 12.5v103c0 6.925 5.575 12.5 12.5 12.5h103c6.925 0 12.5-5.575 12.5-12.5v-103C128 5.575 122.425 0 115.5 0Zm10.14 16.64h27.04c3.324 0 6 2.677 6 6v76c0 3.325-2.676 6-6 6H22.64c-3.323 0-6-2.675-6-6v-76c0-3.323 2.677-6 6-6zm55.68 0h27.04c3.323 0 6 2.677 6 6v44c0 3.325-2.677 6-6 6H78.32c-3.324 0-6-2.675-6-6v-44c0-3.323 2.676-6 6-6z"/>
</svg>);
}