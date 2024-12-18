const React = require("react");
module.exports = function MeteorPlainWordmarkIcon({size = "1em", color = "#df5052", ...props}){
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
	<path d="M10.2 67.8C8.5 65.2 6.9 62 5.3 60H1v19h4V66c1 .8 1.1 1.8 1.7 2.6.6.9 1.2 1.8 1.8 2.6.6.8.9 1.7 1.6 2.6 1.7-2.7 3-5.2 5-8C15 70 15 75 15 79h5V60h-5c-1.6 2-3.2 5.2-4.8 7.8zm112.6 4.1c.6-.4 1.2-.9 1.7-1.3 1.4-.9 2-2.4 2.2-4 .1-.7 0-1.5 0-2.2l-.1-.7c-.2-.8-.6-1.5-1.1-2.2-.5-.8-1.3-1-1.9-1.5-1.1-.3-2.2-.7-3.4-.7-2.7.1-5.5 0-8.3 0h-.8v19.6h5v-6h2.5c1.3 2 2.7 4 3.9 6h4.7c-1.4-1.9-3-4.8-4.4-7zm-.6-5c-.4.7-.9 1.2-1.8 1.3-.6.1-.8.2-1.4.2h-3.1v-5.5h3.8c.5 0 .8.1 1.3.3.7.3 1.1.9 1.4 1.6.5.8.4 1.2-.2 2.1zM25 79h14v-4H29v-4h9v-3h-9v-4h10v-4H25v19zm40 0h14v-4.7H68.8l.2-.1V71h9v-3h-9v-4h10v-4H65v19zM44 63.1h5.7s.3 0 .3.1v14.6h4V63.9h5v-4H44v3.2zm61.6 1.2c.3 0 .5-.2.5-.5 0-.1 0-.2-.1-.3l-6.6-6.1 5.8 6.6c0 .2.2.3.4.3zm1.3 3.4L92.6 54.6l13.1 14.3c.2.1.4.2.6.2.5 0 .8-.4.8-.8 0-.3-.1-.5-.2-.6zm-27-10.3L99 78.2c.2.2.5.4.9.4.6 0 1.2-.5 1.2-1.2 0-.4-.2-.7-.4-.9L79.9 57.4zm-2.4-8l25.3 26.9c.2.2.5.3.8.3.6 0 1.2-.5 1.2-1.2 0-.2-.1-.5-.2-.7-.1.1-27.1-25.3-27.1-25.3zm8.1 2.7l19.1 20.8c.2.2.5.4.9.4.6 0 1.2-.5 1.2-1.2 0-.4-.2-.7-.4-.9L85.6 52.1zm10.7 25L82 64l13.1 14.3c.2.1.4.2.6.2.5 0 .8-.4.8-.8 0-.3-.1-.5-.2-.6zm-11-6.6l5.8 6.6c.1.1.2.3.4.3.3 0 .5-.2.5-.5 0-.1 0-.2-.1-.3-.1-.1-6.6-6.1-6.6-6.1z"/>
</svg>);
}