const React = require("react");
module.exports = function WeblatePlainWordmarkIcon({size = "1em", color = "#2eccaa", ...props}){
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
	<path d="M29.2 72.3c-.7 0-1.3-.1-1.9-.4-1.4-.6-2.6-1.7-3.6-3.3.3-.5.5-1 .8-1.5 1-2.3 1.5-4.8 1.5-7.3v-.3c0-1-.1-2-.5-2.9-.4-1.1-1-2.1-2-2.5-.1-.1-.4-.1-.5-.1-1.2-2.3-1.3-4.5 0-6.6h.1c1.5 0 3 .5 4.3 1.3 3.5 2.2 5.2 6.5 5.2 10.7v.1c-.1 4.5-1.1 9-3.4 12.8zm-7.7 7c-3.2 1.3-7 1.2-10.2-.2C7.6 77.4 4.8 74 3 70.3 0 63.8-.1 56 2.8 49.4c2.1.8 4-.5 4-.5s0 2.1 2 3.1c-2 4.8-2 10.6.1 15.3 1 2.3 2.5 4.4 4.6 5.6.8.4 1.6.7 2.4.8 1.6 2.3 3.5 4.2 5.6 5.6z"/>
	<path d="M29.2 72.3c-.7 0-1.3-.1-1.9-.4-1.4-.6-2.6-1.7-3.6-3.3.3-.5.5-1 .8-1.5.3-.7.6-1.4.8-2.1.5-1.7 6.8.5 5.9 3.2-.6 1.4-1.2 2.8-2 4.1zm-7.7 7c-3.2 1.3-7 1.2-10.2-.2-3.7-1.7.1-7.5 2.2-6.3.8.4 1.6.7 2.4.8 1.6 2.4 3.5 4.3 5.6 5.7z" fillRule="evenodd" opacity=".3"/>
	<path d="M13.4 59.5v-.1c0-4.2 1.8-8.5 5.2-10.7 1.3-.8 2.8-1.3 4.3-1.3h.1V54c-.2 0-.4 0-.6.1-1 .4-1.6 1.5-2 2.5-.3.9-.5 1.9-.5 2.9v.3c0 2.5.5 5 1.5 7.3 1.1 2.6 2.8 5 5.3 6 1.9.8 4 .6 5.7-.3 2.1-1.2 3.6-3.3 4.6-5.6 2.1-4.7 2.1-10.4.1-15.3 2-1 2-3.1 2-3.1s1.9 1.4 4 .5c2.8 6.6 2.7 14.4-.2 20.9-1.7 3.8-4.5 7.1-8.2 8.8-3.3 1.5-7.1 1.6-10.4.1-3-1.2-5.4-3.5-7.1-6.2-2.6-3.9-3.8-8.7-3.8-13.4zM51.2 59.8h2.1l1 5.7.3 1.8.3 1.8h.1c.1-.6.3-1.2.4-1.8.1-.6.2-1.2.4-1.8l1.4-5.7H59l1.4 5.7c.1.6.3 1.2.4 1.8s.3 1.2.4 1.8H61l.3-1.8.3-1.8 1-5.7h1.9l-2.2 11.3h-2.5l-1.4-6c-.1-.4-.2-.9-.3-1.3-.1-.4-.2-.9-.2-1.3h-.1c-.1.4-.2.9-.3 1.3-.1.4-.2.9-.3 1.3l-1.4 6h-2.4l-2.2-11.3zm16.3 0h6.8v1.7h-4.8v2.9h4.1v1.7h-4.1v3.3h5v1.7h-7V59.8zm10.6 0h3.6c.6 0 1.1 0 1.6.1s.9.3 1.3.5.6.5.8.9c.2.4.3.8.3 1.3s-.1 1-.4 1.5c-.3.5-.7.8-1.2 1v.1c.6.1 1.1.4 1.6.9.4.4.6 1 .6 1.8 0 .6-.1 1.1-.3 1.5-.2.4-.5.8-.9 1-.4.3-.8.5-1.4.6s-1.1.2-1.7.2h-3.9V59.8zm3.5 4.7c.8 0 1.4-.1 1.7-.4.4-.3.5-.7.5-1.2 0-.6-.2-.9-.6-1.2-.4-.2-.9-.3-1.7-.3H80v3.1h1.6zm.2 5.1c.8 0 1.5-.2 1.9-.5.5-.3.7-.8.7-1.4 0-.6-.2-1-.7-1.3-.4-.3-1.1-.4-1.9-.4h-1.7v3.6h1.7zm8-9.8h2v9.6h4.7v1.7h-6.7V59.8zM105 68h-3.8l-.9 3.1h-2l3.7-11.3h2.4l3.7 11.3H106l-1-3.1zm-.4-1.5l-.4-1.4c-.2-.6-.4-1.2-.5-1.9-.2-.6-.3-1.3-.5-1.9h-.1c-.2.6-.3 1.3-.5 1.9-.2.6-.3 1.2-.5 1.8l-.4 1.4h2.9zm7.3-5h-3.3v-1.7h8.6v1.7h-3.3v9.6h-2v-9.6zm8.5-1.7h6.8v1.7h-4.8v2.9h4.1v1.7h-4.1v3.3h5v1.7h-7V59.8z"/>
</svg>);
}