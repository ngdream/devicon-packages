const React = require("react");
module.exports = function FedoraPlainIcon({size = "1em", color = "#294172", ...props}){
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
	<path d="M64.219 1.266C29.605 1.266 1.563 29.434 1.5 64.207h-.012v48.723H1.5c.016 7.886 6.383 14.273 14.242 14.273h48.465c34.621-.023 62.656-28.187 62.656-62.945 0-34.774-28.054-62.942-62.718-62.942zm12.738 25.918c10.527 0 20.465 8.093 20.465 19.261 0 1.035.008 2.07-.164 3.246-.29 2.97-2.992 5.106-5.938 4.688-2.941-.426-4.941-3.23-4.394-6.168.05-.336.066-.863.066-1.766 0-6.332-5.156-8.773-10.031-8.773-4.875 0-9.27 4.117-9.277 8.773.082 5.387 0 10.727 0 16.114l9.05-.07c7.067-.145 7.149 10.538.082 10.488l-9.125.066c-.023 4.336.032 3.55.012 5.734 0 0 .074 5.297-.082 9.313-1.094 11.8-11.094 21.23-23.113 21.23-12.746 0-23.242-10.457-23.242-23.28.382-13.188 10.859-23.567 24.05-23.446l7.36-.055v10.469l-7.36.066h-.035c-7.25.215-13.465 5.16-13.582 12.957a12.765 12.765 0 0012.805 12.797c7.086 0 12.758-5.18 12.758-12.781l-.012-39.649c.004-.738.027-1.324.11-2.132 1.195-9.7 9.831-17.09 19.609-17.09zm0 0"/>
</svg>);
}