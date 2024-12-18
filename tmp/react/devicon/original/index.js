const React = require("react");
module.exports = function DeviconOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M4.92 8l10.17 87.05L64 119.95V8H4.92z" fill="#558d6c"/>
	<path d="M64 8v111.95l.05.05 48.93-24.91L123.08 8H64z" fill="#5aa579"/>
	<path d="M18.84 22.11l6.49 65.18L64 105.97V22.11H18.84z" fill="#60be86"/>
	<path d="M64 22.11v83.86l.05.05 38.69-18.76 6.42-65.15H64z" fill="#65d693"/>
	<path d="M105.72 54.9L73.14 39.42l-1.83-.9-1.12 2.28L64 53.41V68.3l9.15-18.08 21.5 9.57-23.09 10.37-.87.47v10.88L73 80.38l32.78-15.69a2 2 0 00.92-2v-5.78a2 2 0 00-.98-2.01z" fill="#5aa579"/>
	<path d="M56 69.39l-21.79-9.6 23.3-10.37 1.76-.7V37.76l-3.4 1.44-33.93 15.69a2.26 2.26 0 00-1.28 2v5.77a2.22 2.22 0 001.24 2l33.44 15.52 2 .9 1.21-2.26L64 68.3V53.41z" fill="#558d6c"/>
</svg>);
}