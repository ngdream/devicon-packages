const React = require("react");
module.exports = function PackerOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M66.354 39.617V128l-41.482-23.963v-88.39Zm0 0" fill="#1daeff"/>
	<path d="M86.893 25.975 41.801 0v18.044L72.46 35.75v54.119l14.433 8.269c8.934 5.158 16.236 2.066 16.236-6.863V51.592c0-8.933-7.302-20.459-16.235-25.617zm0 0" fill="#1d94dd"/>
</svg>);
}