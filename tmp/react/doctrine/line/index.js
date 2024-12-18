const React = require("react");
module.exports = function DoctrineLineIcon({size = "1em", color = "#f56d39", ...props}){
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
	<path d="M110.1 78.5c-.1-2.9-.6-5.9-1.4-9-2-7.3-5.7-14-11.4-20.6-2.8-3.2-5.8-6.5-8.7-9.6-1.3-1.4-2.6-2.8-3.8-4.2l-6.1-6.6L61 9.2c-1.6-1.7-3.3-3.5-5.2-5.1C52.2 1.3 47.9.6 43.3 2c-1.3.4-2.5 1.1-3.6 1.7-.9.5-1.7 1.2-2.3 1.9-2.2 2.6-3 5.9-2.6 10.1.3 2.8 1.5 5.3 3.8 7.8l8.1 8.9 4.1 4.4c-7.3 3.5-13.7 7.9-19.1 13.1-4.5 4.4-7.6 8.4-9.7 12.9-3.4 7.2-4.7 15.2-4.1 24.4.2 3.4 1.1 6.9 2.4 10.4 2 5.2 5 9.9 9.3 14.5 8.4 9 18.8 13.9 31.1 14.6.8 0 1.5.1 2.4.1 1.6 0 3.2-.1 4.7-.2 2.9-.2 6-.6 9.4-1.5 8.8-2.2 16.1-6.9 21.9-13.9 7.8-9.5 11.5-20.4 11-32.7zm-13.2 30.7c-5.3 6.5-12.2 10.9-20.3 12.9-3.2.8-6.1 1.3-8.9 1.4-2.2.1-4.5.2-6.8.1-11.5-.7-21.3-5.2-29.1-13.7-4-4.3-6.9-8.8-8.7-13.6-1.2-3.2-2-6.5-2.2-9.6-.6-8.7.6-16.2 3.8-22.9 1.9-4.1 4.8-7.9 9-12 5.4-5.2 11.6-9.5 19.1-12.9l.8-.4c.3-.1.5-.3.6-.5l.9-1-6.3-6.8-8.1-8.9c-1.8-2-2.8-4-3-6.1-.3-3.2.3-5.7 1.9-7.7.4-.5 1-.9 1.6-1.3.9-.5 1.9-1.1 3-1.4 1.3-.4 2.5-.6 3.6-.6 2.2.1 4.2.8 6.1 2.3 1.8 1.4 3.4 3.1 4.9 4.8l17.7 19.3 6.1 6.6 3.9 4.2c2.9 3.1 5.8 6.3 8.7 9.5 5.4 6.2 9 12.5 10.8 19.4.8 2.9 1.2 5.7 1.3 8.4.3 11.4-3.1 21.7-10.4 30.5zM86 68.9c-2.6-2.7-5.2-5.3-7.9-7.9l-1.6-1.6c-.8-.8-1.6-1.6-2.4-2.5-2.1-2.2-4.4-4.4-6.6-6.6-2.4-2.3-5-3.4-7.9-3.2-3.5.2-6.2 1.7-8 4.6-.8 1.3-1.2 2.7-1.1 4.1.1 2.6 1.2 5 3.3 7.1 1.7 1.8 3.6 3.6 5.3 5.3L62 71l.5.5H42.2c-1.4 0-2.6 0-3.7.1-2.1.1-4 .9-5.4 2.3-2.5 2.5-3.5 5.8-2.8 9.5.7 3.6 3 6 6.4 6.8 1.2.3 2.4.3 3.5.3l9.2.3h.8c1.2 0 2.5 0 3.7-.1h8.5l-.4.5c-1.9 1.8-3.7 3.7-5.6 5.6-2.1 2.2-3.6 4.2-4.6 6.3-1 2.1-1.2 4-.5 5.9 1.2 3.6 4.7 6 8.7 6 1.7 0 3.4-.5 4.7-1.4 1.5-1 2.8-2.3 4.1-3.4 5.9-5.5 11.7-11 17.3-16.3 3.2-3 5.4-6.2 6.7-9.8.3-.9.5-1.9.5-2.8-.1-2-.9-3.8-1.6-5.1-1.8-3.1-3.9-5.5-5.7-7.3zm3.9 14c-1.2 3.2-3.1 6-6 8.7-5.6 5.3-11.4 10.8-17.2 16.3-1.2 1.1-2.4 2.2-3.7 3.2-.8.6-1.9.9-3 .9-2.2 0-4.9-1.3-5.9-4-.4-1.1-.2-2.3.4-3.6.9-1.8 2.2-3.6 4.1-5.5 1.8-1.9 3.7-3.7 5.6-5.5l2.5-2.5.4-.4 2.6-2.7H54.1l-3.7.1h-.8c-3 0-6-.1-9.1-.3-1 0-2-.1-3-.3-2.3-.5-3.6-1.9-4.1-4.4-.5-2.8.1-5 2-6.8 1.1-1.1 2.5-1.4 3.5-1.4 1-.1 2.1-.1 3.5-.1h27.2l-3.3-3.4-2.1-2.2c-1-1-1.9-1.9-2.9-2.8L56 61c-1.5-1.6-2.4-3.4-2.4-5.2 0-.8.2-1.6.6-2.4 1.2-2 3.1-3 5.6-3.2 2.1-.1 3.9.7 5.7 2.4 2.2 2.1 4.4 4.3 6.6 6.5.8.8 1.6 1.6 2.4 2.5l1.6 1.6c2.6 2.6 5.2 5.3 7.9 7.9 1.6 1.6 3.6 3.8 5 6.4.8 1.5 1.2 2.6 1.2 3.7 0 .6-.1 1.2-.3 1.7z"/>
</svg>);
}