const React = require("react");
module.exports = function InkscapePlainWordmarkIcon({size = "1em", color = "#000000", ...props}){
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
	<path d="M13.4 120.7c1-.1 1.6-.6 1.6-1.4v-10.5c0-1.1 0-1.3-1.6-1.6v-.6H15c2 0 2.5-.1 2.5-.1l.1.1s-.7.8-.7 2.7v10c0 .6-.1 1.1-.1 1.1l2.1.2-.1.6-5.4.1v-.6zm7.3 0c1-.1 1.6-.6 1.6-1.4v-9.9c0-1.5-.4-2-1.8-2.2v-.6h.7c1.1 0 2.2-.1 2.2-.1s.3.5.8 1.1l8 9.2.9 1.2v-9.2c0-1 0-1.5-1.8-1.7v-.6h4.2l.1.3s-1.5.4-1.5 2.2v12.2h-.6l-9.4-11c-.3-.3-.6-.7-.8-1.1v10c0 .7-.1 1.2-.1 1.2l2 .1-.1.6-4.3.1v-.4zm16.8 0c1-.1 1.6-.6 1.6-1.4v-10.5c0-1.1 0-1.3-1.6-1.6v-.6h1.7c2 0 2.5-.1 2.5-.1l.1.1s-.7.8-.7 2.7v3.9h.4s.4-.2.7-.6l4.3-4.3c.4-.4.4-1-.6-1.1v-.6H50l.1.3s-1.2.3-2.8 1.9l-4.2 4.1v.2l5.3 6.1c1 1.1 1.2 1.2 1.9 1.3h.2l-.1.7h-3.2l-.1-.1s-.2-.7-1.7-2.3l-4.1-4.8H41v5.2c0 .6-.1 1.1-.1 1.1l2 .2-.1.6-5.3.1v-.5zm14.5-3.3h.7c0 2.7 1.7 3.4 3.2 3.4 1.4 0 2.8-.6 2.8-2.3 0-3.8-6.9-3.8-6.9-8.2 0-2.2 1.6-3.8 4.9-3.8 1.6 0 3.1.4 3.6.4l-.7 3.4h-.7c.2-1.6-.6-3-2.5-3-1.5 0-2.7.7-2.7 2.3 0 3.9 6.9 3.5 6.9 8.2 0 2.6-2.3 3.9-4.9 3.9-1.9 0-4.2-.7-4.2-2.3-.1-.4 0-.7.5-2zm18.7-11c1.6 0 3.6.4 4.8.5l-.7 3.3H74c0-2.3-1.9-3-3.7-3-3.4 0-5.6 2.7-5.6 6.3 0 4 2.8 6.6 6.4 6.6 2.8 0 4.4-1.6 4.4-1.6l.3.5s-1.7 2.6-5.5 2.6c-3.9 0-7.7-2.7-7.7-7.4 0-4.5 3.3-7.8 8.1-7.8zm5.6 14.3c.9-.1 1.3-.5 1.5-1l5.2-13 .9-.2 4.9 12.5c.6 1.5 1 1.6 1.7 1.7l-.1.6h-.9c-.8 0-3.3.1-3.3.1v-.7c.6 0 1.2-.2.9-.9l-1.3-3.5h-5.3l-.3.2-1.5 4 1.9.3-.1.6h-4.1v-.7zm6.6-11.7l-2.4 6.4h4.8l-1.9-5c-.2-.5-.4-1.1-.5-1.4zm8.5 11.7c1-.1 1.6-.6 1.6-1.4v-10.5c0-1.1-.1-1.3-1.8-1.6v-.6h5.5c2.5 0 5.4.8 5.4 4 0 3.5-3.3 4.7-5.7 4.5v-.6c2.6-.1 3.5-1.7 3.5-3.4 0-2.6-2.1-3.7-4.4-3.7h-.3l-.2.2v11.6c0 .6-.1 1.1-.1 1.1l2.1.2-.1.6-5.4.1v-.5zm12.4 0c1-.1 1.6-.6 1.6-1.4v-10.5c0-1.1-.1-1.3-1.8-1.6v-.6h9.1c.9 0 1.6-.1 1.6-.1l-.7 3.7h-.7c.1-2.3-.6-2.7-2.4-2.7h-2.9l-.2.2v5.7h4.1l.2-1.3.8-.1v3.9h-1v-1.6h-3.8l-.2.2v4.7c0 .7-.1 1.2-.1 1.2h3.5c1.9 0 2.2-.4 3.3-2.7h.7l-.8 3.6H107c-1.1 0-3.2.1-3.2.1v-.7zm-3.5-31.4c.9-.9 0-4.2-4.6-5.2-4.3 3.8.4 7.6 4.6 5.2zm-55.4-3.8c-3.2-4.2-15.1.2-9.9 4.7 3.3 2.8 8.4-.7 9.9-4.7zm66.3-5.7c-2-5.7-12.2-5.3-13.8.4 0 1.9 13.8 3.1 13.8-.4zM84 70.6c9.3-5.4 41.4-9 26.2-24.2L71.9 7.2c-4.7-4.5-12.5-4.6-17 0l-37 37.9C5.4 60.6 26.4 58.8 35.4 63.2l-9.2 9c3.2 3.3 19.5 6.4 22.8 9.7L45.6 92c3.2 3.3 10.7.2 12.1 7.8 1 5.4 13.5 2.3 19.6-2.1l-3-6.3c8-8.2 15.5-3 18.3-11.2 1.4-4.1-11.8-6.3-8.6-9.6zM64.3 72c-3.9 1-23-6.7-18.2-6.7 1 .6 15.9 3.7 19.6 4.3 1.2.2.3 1.5-1.4 2.4zm11.9-39.5l-6.1-3.2-9.7 6.1-3.2-12.7-5.3 9.3h-8c-3.3 0-3.6-4.4-.7-7.3 5.2-5.6 11.1-11.4 14.3-14.7 3.2-3.3 8.9-3.3 12.1-.1l14.6 14.8c1.4 1.4 1.4 4.1.6 4.9l-7.3-5.8-1.3 8.7z"/>
</svg>);
}