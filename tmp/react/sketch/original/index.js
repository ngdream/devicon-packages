const React = require("react");
module.exports = function SketchOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M27.93 10.334 64 6.547l36.07 3.788L128 47.517l-64 73.936L0 47.517Z" fill="#fdb300"/>
	<path d="M25.925 47.517 64 121.453 0 47.517Zm76.15 0L64 121.453l64-73.936Z" fill="#ea6c00"/>
	<path d="M25.925 47.517h76.15L64 121.453Z" fill="#fdad00"/>
	<path d="m64 6.547-36.07 3.787-2.005 37.183Zm0 0 36.07 3.787 2.005 37.183z" fill="#fdd231"/>
	<path d="m128 47.517-27.93-37.183 2.005 37.183z" fill="#fdad00"/>
	<path d="m64 6.547-38.075 40.97h76.15z" fill="#feeeb7"/>
	<path d="m0 47.517 27.93-37.183-2.005 37.183Z" fill="#fdad00"/>
</svg>);
}