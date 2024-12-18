const React = require("react");
module.exports = function SafariPlainIcon({size = "1em", color = "#1B88CA", ...props}){
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
	<path d="M64 1.5C29.5 1.5 1.5 29.5 1.5 64s28 62.5 62.5 62.5 62.5-28 62.5-62.5S98.5 1.5 64 1.5zm56 57.9l-5 .4-.1-1 5-.4.1 1zm0 3.6v1h-9v-1h9zm-.6-8.4l-9.1 1.6-.2-1 9.1-1.6.2 1zm-1-4.8l-4.9 1.3-.3-1 4.9-1.3.3 1zm-1.4-4.7l-8.6 3.2-.3-.9 8.6-3.2.3.9zm-1.8-4.6l-4.5 2.1-.4-.9 4.5-2.1.4.9zm-2.3-4.3l-8 4.6-.5-.9 8-4.6.5.9zm-3.1-5l.6.8-4.1 2.9-.6-.8 4.1-2.9zm-2.4-3.1l-7.1 5.9-.6-.8 7.1-5.9.6.8zm-6.9-7l-5.9 7.1-.8-.6 5.9-7.1.8.6zm-4.7-3.6l.8.6-2.9 4.1-.8-.6 2.9-4.1zm-3.2-2.1l-4.6 8-.9-.5 4.6-8 .9.5zm-5.3-2.7l.9.4-2.1 4.5-.9-.4 2.1-4.5zm-4.5-1.8l.9.3-3.2 8.6-.9-.3 3.2-8.6zm-4.7-1.5l1 .3-1.3 4.9-1-.3 1.3-4.9zm-4.8-1l1 .2-1.6 9.1-1-.2 1.6-9.1zm-4.9-.6l1 .1-.4 5-1-.1.4-5zM63 8h1v9h-1V8zm-3.4-.2l.4 5-1 .1-.4-5 1-.1zm-4.9.6l1.6 9.1-1 .2-1.6-9.1 1-.2zm-4.8 1l1.3 4.9-1 .3L49 9.7l.9-.3zm-4.7 1.5l3.2 8.6-.9.3-3.2-8.6.9-.3zm-4.5 1.8l2.1 4.5-.9.4-2.1-4.5.9-.4zm-4.4 2.2l4.6 8-.9.5-4.6-8 .9-.5zm-4.1 2.6l2.9 4.1-.8.6-2.9-4.1.8-.6zm-3.9 3l5.9 7.1-.8.6-5.9-7.1.8-.6zm-3.7 3.2l3.5 3.5-.7.8-3.5-3.5.7-.8zm-3.4 3.6l7.1 5.9-.6.8-7.1-5.9.6-.8zm-3 3.9l4.1 2.9-.6.8-4.1-2.9.6-.8zm-2.6 4.1l8 4.6-.6.9-8-4.6.6-.9zm-2.3 4.3l4.5 2.1-.4.9-4.5-2.1.4-.9zm-1.9 4.6l8.6 3.2-.3.9-8.7-3.2.4-.9zm-1.6 4.6l4.9 1.3-.3 1-4.9-1.3.3-1zm-1.1 4.8l9.1 1.6-.2 1-9.1-1.6.2-1zM8 58.5l5 .4-.1 1-5-.4.1-1zm9 4.5v1H8v-1h9zm-9 5.3l5-.4.1 1-5 .4-.1-1zm.6 4.8l9.1-1.6.2 1-9.1 1.6-.2-1zm1 4.8l4.9-1.3.3 1-4.9 1.3-.3-1zm1.4 4.7l8.6-3.2.3.9-8.6 3.2-.3-.9zm1.8 4.6l4.5-2.1.4.9-4.5 2.1-.4-.9zm2.3 4.4l8-4.6.5.9-8 4.6-.5-.9zm3.1 4.9l-.6-.8 4.1-2.9.6.8-4.1 2.9zm9.5-2.8l.6.8-7.1 5.9-.6-.8 7.1-5.9zm-.2 12.9l5.9-7.1.8.6-5.9 7.1-.8-.6zm4.7 3.6l-.8-.6 2.9-4.1.8.6-2.9 4.1zm3.2 2.1l4.6-8 .9.5-4.6 8-.9-.5zm5.3 2.7l-.9-.4 2.1-4.5.9.4-2.1 4.5zm4.5 1.9l-.9-.3 3.2-8.6.9.3-3.2 8.6zm4.7 1.4l-1-.3 1.3-4.9 1 .3-1.3 4.9zm4.8 1l-1-.2 1.6-9.1 1 .2-1.6 9.1zm4.9.6l-1-.1.4-5 1 .1-.4 5zm4.4.1h-1v-9h1v9zm4.4-.1l-.4-5 1-.1.4 5-1 .1zM21 106.7l37.7-48 48-37.7-36.8 48.9L21 106.7zm52.3 12.6l-1.6-9.1 1-.2 1.6 9.1-1 .2zm4.8-1l-1.3-4.9 1-.3L79 118l-.9.3zm4.7-1.4l-3.2-8.6.9-.3 3.2 8.6-.9.3zm4.5-1.9l-2.1-4.5.9-.4 2.1 4.5-.9.4zm4.4-2.2l-4.6-8 .9-.5 4.6 8-.9.5zm4.1-2.6l-2.9-4.1.8-.6 2.9 4.1-.8.6zm3.9-2.9l-5.9-7.1.8-.6 5.9 7.1-.8.6zm3.7-3.3l-3.5-3.5.7-.7 3.5 3.5-.7.7zm3.4-3.6l-7.1-5.9.6-.8 7.1 5.9-.6.8zm3-3.9l-4.1-2.9.6-.8 4.1 2.9-.6.8zm2.6-4.1l-8-4.6.5-.9 8 4.6-.5.9zm2.3-4.3l-4.5-2.1.4-.9 4.5 2.1-.4.9zm1.9-4.5l-8.6-3.2.3-.9 8.6 3.2-.3.9zm1.6-4.7l-4.9-1.3.3-1 4.9 1.3-.3 1zm1.1-4.8l-9.1-1.6.2-1 9.1 1.6-.2 1zm.7-4.8l-5-.4.1-1 5 .4-.1 1z"/>
</svg>);
}