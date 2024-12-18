const React = require("react");
module.exports = function RiderPlainIcon({size = "1em", color = "#dd1265", ...props}){
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
	<path d="M40.473 5.34 5.486 28.904l13.006 80.371 33.549 12.899 14.033-11.399L88.1 122.367l34.414-20.101-13.012-27.81 13.012-23.585-21.442-11.9v62.101H26.93V26.93h60.654L79.506 7.18 66.629 19.857 40.473 5.34zM27.93 27.93v72.142h72.142V27.93H27.93zm8.64 8.545h12.557a10.971 10.971 0 0 1 8.01 2.79 8.631 8.631 0 0 1 2.365 6.292v.072a8.533 8.533 0 0 1-5.9 8.533l6.728 9.826h-7.084l-5.887-8.802h-4.691v8.802h-6.096l-.002-27.513zm27.953 0h10.729c8.643 0 14.629 5.936 14.629 13.677v.084c0 7.741-5.973 13.752-14.629 13.752H64.523V36.475zM75.3 41.924l-4.682.012v16.578H75.3a7.838 7.838 0 0 0 8.29-8.215v-.074a7.912 7.912 0 0 0-8.29-8.301zm-32.631.06v7.899l6.094.002c2.95 0 4.644-1.575 4.644-3.89v-.073c0-2.597-1.804-3.938-4.754-3.938h-5.984zm-6.121 44.762h27.43v4.572h-27.43v-4.572z"/>
</svg>);
}