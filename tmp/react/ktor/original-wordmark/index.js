const React = require("react");
module.exports = function KtorOriginalWordmarkIcon({size = "1em",  ...props}){
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
		<linearGradient id="a" gradientTransform="translate(0 40) scale(.45714)" gradientUnits="userSpaceOnUse" x1="34.379" x2="64.784" y1="21.379" y2="51.784">
			<stop offset="0" stopColor="#07c3f2"/>
			<stop offset="1" stopColor="#6b57ff"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="translate(0 40) scale(.45714)" gradientUnits="userSpaceOnUse" x1="65.723" x2="94.471" y1="52.723" y2="81.471">
			<stop offset="0" stopColor="#b74af7"/>
			<stop offset=".492" stopColor="#fc801d"/>
			<stop offset="1" stopColor="#fc801d"/>
		</linearGradient>
	</defs>
	<path d="M36.57 56.914 22.855 43.2l-7.238 7.242-6.472 6.473 13.71 13.715Zm0 0" fill="url(#a)"/>
	<path d="m22.855 70.629 6.832 6.828 6.883 6.887 13.715-13.715L36.57 56.914Zm0 0" fill="url(#b)"/>
	<path d="M36.57 56.914H22.855V70.63H36.57Zm39.188-2.266H70.82l-7.367 7.997v-7.997H59.43v18.286h4.023v-5.59l2.117-2.192 5.668 7.782h4.832l-7.785-10.528Zm5.773.625H77.56v3.579h-1.672v3.394h1.672v6.637c0 3.238 1.644 4.207 4.074 4.207a5.859 5.859 0 0 0 3.137-.813v-3.183a4.04 4.04 0 0 1-1.961.496c-.887 0-1.278-.445-1.278-1.36v-5.984h3.29v-3.394h-3.29Zm12.223 3.239c-4.363 0-7.602 3.265-7.602 7.289v.05c0 4.024 3.215 7.239 7.551 7.239 4.363 0 7.602-3.266 7.602-7.29v-.05c0-4.023-3.215-7.238-7.551-7.238Zm3.633 7.34c0 2.066-1.36 3.816-3.633 3.816-2.192 0-3.684-1.805-3.684-3.867v-.051c0-2.066 1.36-3.816 3.633-3.816 2.195 0 3.684 1.804 3.684 3.867Zm10.011-4.098v-2.82h-3.972v14h3.972v-5.172c0-3.344 1.618-4.938 4.258-4.938h.207v-4.152c-2.351-.106-3.656 1.148-4.465 3.082Zm0 0"/>
</svg>);
}