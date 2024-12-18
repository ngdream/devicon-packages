const React = require("react");
module.exports = function ContaoOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path style={{"fill":"#f37a00","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M13.852 74.892c3.414 15.793 6.253 30.828 16.199 41.648H11.082c-4.434 0-8.035-3.558-8.062-7.968V18.677c.007-4.422 3.613-8.004 8.062-8.004h13.703a52.21 52.21 0 0 0-8.723 10.25C5.22 37.454 9.677 55.478 13.852 74.892zm102.996-64.219H95.34c5.094 5.063 9.387 11.621 12.629 19.774l-32.7 6.863c-3.582-6.828-9.027-12.508-19.683-10.277-5.879 1.238-9.774 4.515-11.504 8.105-2.121 4.426-3.164 9.39 1.914 32.973C51.074 91.697 54.062 95.81 57.816 99c3.051 2.578 7.973 4.012 13.852 2.774 10.66-2.23 13.289-9.61 13.754-17.29l32.695-6.87c.774 16.824-4.465 29.87-13.707 38.894h12.438c4.437.004 8.043-3.559 8.07-7.973V18.677c-.008-4.426-3.621-8.008-8.07-8.004zm0 0"/>
</svg>);
}