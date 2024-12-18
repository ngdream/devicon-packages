const React = require("react");
module.exports = function JuleOriginalIcon({size = "1em", color = "#5f7389", ...props}){
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
	<path d="m39.952 70.569 19.552 15.817v25.426l-35.292-28.491zm-19.346-15.714 11.283 9.145-11.283 9.1193zm47.889 31.557 19.552-15.817 15.74 12.752-35.292 28.491zm-44.282-41.732 35.266-28.491v25.426l-19.527 15.817zm83.181 10.201v18.29l-11.283-9.145zm-38.899-13.267v-25.426l35.266 28.491-15.74 12.752zm45.931-1.4941-47.915-38.692c-0.82433-0.61825-1.6658-0.92738-2.5245-0.92738s-1.6916 0.30913-2.4988 0.92738l-47.915 38.692c-1.3224 1.0819-1.9836 2.5932-1.9836 4.5339v38.692c0 1.9407 0.6612 3.452 1.9836 4.5339l47.915 38.692c0.8072 0.61825 1.6401 0.92738 2.4988 0.92738s1.7002-0.30913 2.5245-0.92738l47.915-38.692c1.3224-1.0819 1.9836-2.5932 1.9836-4.5339v-38.692c0-1.9407-0.6612-3.452-1.9836-4.5339z"/>
</svg>);
}