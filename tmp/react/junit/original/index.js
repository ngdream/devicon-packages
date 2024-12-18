const React = require("react");
module.exports = function JunitOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64.293.43C48.553.13 33.537 4.285 20.69 16.163c-26.885 24.866-27.686 67.44-1.718 93.224 4.674 4.641 10.237 8.935 16.345 11.55 1.595-5.365 1.285-11.841.78-18.207-.122-.126-.247-.25-.34-.39-1.706-2.543-.44-9.184-.44-12.205 10.735 1.903 19.478 7.808 30.97 4.378 11.246-3.356 15.933-19.575 6.018-27.252-5.987-4.64-14.87-4.007-21.932-3.156-4.24.512-9.536 2.078-12.464-2.433-1.728-2.655.056-9.171.346-12.175.072-.757.151-1.528.226-2.288.752-9.328 2-18.756 2-28.09h45.593V3.295C78.754 1.623 71.449.57 64.294.43Z" fill="#dc514a"/>
	<path d="M85.705 3.266V31.12H52.53l-1.724 21.423c7.362-.577 14.187-1.876 21.544-.147 5.043 1.188 9.777 3.57 13.28 7.434 9.774 10.772 7.85 30.992-3.372 40.077-3.158 2.557-6.766 4.237-10.576 5.317-3.518 1.125-7.052 1.6-10.599 1.634a72.97 72.97 0 0 1-3.814.107c-5.524 0-11.049-.718-16.373-2.208-1.354-.38-3.448-.907-4.764-1.893-.28-.06-.559-.124-.838-.185l-.429 17.998c34.192 18.13 77.75-1.268 90.013-36.85 10.368-30.07-5.688-72.67-39.172-80.562z" fill="#23a161"/>
</svg>);
}