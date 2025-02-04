const React = require("react");
module.exports = function DropwizardPlainIcon({size = "1em", color = "#24265d", ...props}){
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
	<path d="M64.664 4.01c-3.29-.542-6.938 20.41-12.441 41.484-2.253 8.633-20.356 71.397-20.356 71.397s36.41 18.067 64.266-3.407C88.869 93.987 76.113 37.741 68.58 12.9c-1.606-5.296-1.868-5.825-2.525-7.279-.46-1.017-.921-1.534-1.39-1.611zm-5.44 44.02l3.024 5.884-3.46 7.588-2.8-7.887 3.237-5.586zm18.1 22.306l3.026 5.885-3.463 7.59-2.8-7.89 3.237-5.585zm-26.437 21.14l3.025 5.883-3.46 7.59-2.802-7.886 3.237-5.586z"/>
</svg>);
}