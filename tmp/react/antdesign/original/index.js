const React = require("react");
module.exports = function AntdesignOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="a" gradientTransform="matrix(94.54297 0 0 127.17188 .418 .406)" gradientUnits="userSpaceOnUse" x1=".621" x2="1.082" y1="0" y2=".379">
			<stop style={{"stopColor":"#4285eb","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#2ec7ff","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="matrix(94.54297 0 0 127.17188 .418 .406)" gradientUnits="userSpaceOnUse" x1=".696" x2=".54" y1="0" y2="1.085">
			<stop style={{"stopColor":"#29cdff","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#148eff","stopOpacity":"1"}} offset=".379"/>
			<stop style={{"stopColor":"#0a60ff","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="matrix(31.49219 0 0 49.5586 96.176 39.402)" gradientUnits="userSpaceOnUse" x1=".697" x2=".167" y1="-.13" y2="1.174">
			<stop style={{"stopColor":"#fa816e","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#f74a5c","stopOpacity":"1"}} offset=".415"/>
			<stop style={{"stopColor":"#f51d2c","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="d" gradientTransform="matrix(30.21094 0 0 30.1836 49.227 49.188)" gradientUnits="userSpaceOnUse" x1=".681" x2=".304" y1="-.357" y2="1.149">
			<stop style={{"stopColor":"#fa8e7d","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#f74a5c","stopOpacity":"1"}} offset=".513"/>
			<stop style={{"stopColor":"#f51d2c","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
	</defs>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#a)"}} d="M58.617 2.672 2.676 58.566a7.672 7.672 0 0 0 0 10.868l55.941 55.894a7.684 7.684 0 0 0 10.871 0l23.457-23.437a6.891 6.891 0 0 0 0-9.746 6.9 6.9 0 0 0-9.754 0l-17.78 17.765c-.75.75-1.888.75-2.634 0L18.102 65.277c-.747-.75-.747-1.886 0-2.632l44.675-44.637c.746-.746 1.883-.746 2.633 0l17.781 17.765a6.9 6.9 0 0 0 9.754 0 6.891 6.891 0 0 0 0-9.746L69.492 2.594c-3.02-2.938-7.879-2.914-10.875.078Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#b)"}} d="M58.617 2.672 2.676 58.566a7.672 7.672 0 0 0 0 10.868l55.941 55.894a7.684 7.684 0 0 0 10.871 0l23.457-23.437a6.891 6.891 0 0 0 0-9.746 6.9 6.9 0 0 0-9.754 0l-17.78 17.765c-.75.75-1.888.75-2.634 0L18.102 65.277c-.747-.75-.747-1.886 0-2.632l44.675-44.637c1.864-1.606 4.903-4.86 9.371-5.621 3.317-.567 6.946.68 10.883 3.734-2.633-2.633-7.144-7.14-13.539-13.527-3.02-2.938-7.879-2.914-10.875.078Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#c)"}} d="M98.36 86.945a6.9 6.9 0 0 0 9.753 0l17.301-17.285a7.667 7.667 0 0 0 0-10.863l-17.453-17.379a6.91 6.91 0 0 0-9.762.012 6.884 6.884 0 0 0 0 9.746l11.79 11.777a1.826 1.826 0 0 1 0 2.629l-11.63 11.621a6.88 6.88 0 0 0 0 9.742Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"evenodd","fill":"url(#d)"}} d="M79.438 64.281c0-8.336-6.762-15.094-15.106-15.094-8.34 0-15.105 6.758-15.105 15.094 0 8.332 6.765 15.09 15.105 15.09 8.344 0 15.106-6.758 15.106-15.09Zm0 0"/>
</svg>);
}