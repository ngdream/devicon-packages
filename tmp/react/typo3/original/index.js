const React = require("react");
module.exports = function Typo3OriginalIcon({size = "1em", color = "#f49700", ...props}){
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
	<path d="M96.074 87.898a17.522 17.522 0 0 1-5.37.77c-16.2 0-39.985-56.606-39.985-75.45 0-6.921 1.644-9.241 3.965-11.226C34.855 4.301 11.07 11.582 3.46 20.88 1.867 23.133.82 26.766.82 31.39c0 29.379 31.39 96.148 53.507 96.148 10.25 0 27.52-16.789 41.723-39.648M85.738 0c20.48 0 40.98 3.305 40.98 14.867 0 23.461-14.874 51.89-22.472 51.89-13.543 0-30.426-37.675-30.426-56.519C73.82 1.648 77.113 0 85.707 0"/>
</svg>);
}