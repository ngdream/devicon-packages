const React = require("react");
module.exports = function ThealgorithmsOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} id="thealgorithms-original-Layer_1" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
	<path d="M43.9 105.9H7.2l9.5-22.5h25.7L71 17.1H40.3L17.8 69.5h13.8c1 1.6 2.7 2.7 4.7 2.7 3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5c-2.2 0-4.1 1.3-5 3.2h-6.6l18.7-42.3h20.1L39.4 78.3l-25.4.2-14 32.4h47.2l6.2-13.5h20.5l6.8 13.5H128L85.3 17.1l-41.4 88.8zM56 92.1L63.4 76l8 16.1H56zm27.8 14.4l-4.7-9.4h14.6c1 1.8 2.8 3 4.9 3 3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5c-2.2 0-4.2 1.4-5.1 3.3H76.9L65.8 70.6l8.2-18 9.2 18.8h4.3c.9 1.8 2.8 3.2 5 3.2 3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5c-2.3 0-4.3 1.4-5.1 3.5h-1.6l-9.5-19.4 9.1-19.9 35.6 78.7H83.8z" fill="#00BCB4"/>
</svg>);
}