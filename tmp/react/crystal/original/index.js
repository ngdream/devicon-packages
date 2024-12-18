const React = require("react");
module.exports = function CrystalOriginalIcon({size = "1em", color = "#000", ...props}){
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
	<path d="m127.806 81.328-46.325 45.987c-.185.185-.464.276-.65.185l-63.283-16.863c-.279-.095-.464-.28-.464-.464L.035 47.317c-.09-.275 0-.46.186-.645L46.55.685c.184-.185.463-.276.649-.185l63.28 16.863c.278.095.463.28.463.464L127.9 80.682c.185.275.09.46-.094.645zM65.726 31.28 3.557 47.778c-.095 0-.185.185-.095.28l45.495 45.156c.09.095.28.095.28-.09l16.675-61.748c.095 0-.09-.185-.184-.094zm0 0"/>
</svg>);
}