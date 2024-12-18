const React = require("react");
module.exports = function PycharmOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="38.78" x2="95.91" y1="41.59" y2="41.59">
		<stop offset="0" stopColor="#21d789"/>
		<stop offset="1" stopColor="#07c3f2"/>
	</linearGradient>
	<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-29.18" x2="88.46" y1="85.52" y2="-1.32">
		<stop offset=".01" stopColor="#fcf84a"/>
		<stop offset=".11" stopColor="#a7eb62"/>
		<stop offset=".21" stopColor="#5fe077"/>
		<stop offset=".27" stopColor="#32da84"/>
		<stop offset=".31" stopColor="#21d789"/>
		<stop offset=".58" stopColor="#21d789"/>
		<stop offset=".6" stopColor="#21d789"/>
		<stop offset=".69" stopColor="#20d68c"/>
		<stop offset=".76" stopColor="#1ed497"/>
		<stop offset=".83" stopColor="#19d1a9"/>
		<stop offset=".9" stopColor="#13ccc2"/>
		<stop offset=".97" stopColor="#0bc6e1"/>
		<stop offset="1" stopColor="#07c3f2"/>
	</linearGradient>
	<linearGradient id="c" gradientUnits="userSpaceOnUse" x1="17.3" x2="36.92" y1="110.99" y2="49.42">
		<stop offset="0" stopColor="#21d789"/>
		<stop offset=".16" stopColor="#24d888"/>
		<stop offset=".3" stopColor="#2fd985"/>
		<stop offset=".43" stopColor="#41dc80"/>
		<stop offset=".55" stopColor="#5ae079"/>
		<stop offset=".67" stopColor="#7ae46f"/>
		<stop offset=".79" stopColor="#a1ea64"/>
		<stop offset=".9" stopColor="#cff157"/>
		<stop offset="1" stopColor="#fcf84a"/>
	</linearGradient>
	<linearGradient id="d" gradientUnits="userSpaceOnUse" x1="43.28" x2="85.97" y1="57.46" y2=".06">
		<stop offset="0" stopColor="#21d789"/>
		<stop offset=".09" stopColor="#23d986"/>
		<stop offset=".17" stopColor="#2ade7b"/>
		<stop offset=".25" stopColor="#36e669"/>
		<stop offset=".27" stopColor="#3bea62"/>
		<stop offset=".35" stopColor="#47eb61"/>
		<stop offset=".49" stopColor="#67ed5d"/>
		<stop offset=".69" stopColor="#9af156"/>
		<stop offset=".92" stopColor="#e0f64d"/>
		<stop offset="1" stopColor="#fcf84a"/>
	</linearGradient>
	<linearGradient id="e" gradientUnits="userSpaceOnUse" x1="108.58" x2="22.55" y1="64.77" y2="63.97">
		<stop offset=".39" stopColor="#fcf84a"/>
		<stop offset=".46" stopColor="#ecf74c"/>
		<stop offset=".61" stopColor="#c1f451"/>
		<stop offset=".82" stopColor="#7eef5a"/>
		<stop offset="1" stopColor="#3bea62"/>
	</linearGradient>
	<path d="m87.54 23.954 34.194 28.44-12.312 25.051-20.614-5.717H70.973z" fill="url(#a)"/>
	<path d="m53.09 42.423-6.619 35.023-.634 11.898-16.689 7.229-23.662 2.548 7.18-75.666L55.54 5.486l26.417 17.323z" fill="url(#b)"/>
	<path d="m53.09 42.423 3.218 67.486-10.691 12.605L5.486 99.121l32.951-49.103z" fill="url(#c)"/>
	<path d="M97.243 37.498H56.698L92.526 5.486z" fill="url(#d)"/>
	<path d="M122.514 110.178 86.82 122.295 39.289 108.91 53.09 42.423l5.51-4.925 28.94-2.718-2.621 29.062 23.016-8.923z" fill="url(#e)"/>
	<path d="M27.429 27.429h73.143v73.143H27.429z"/>
	<path d="M36.547 86.747h27.429v4.571H36.547zm.024-50.176h11.215c6.534 0 10.496 3.877 10.496 9.472v.073c0 6.339-4.937 9.63-11.081 9.63h-4.534v8.216h-6.095zm10.801 13.812c3.011 0 4.779-1.792 4.779-4.145v-.073c0-2.706-1.877-4.157-4.876-4.157h-4.608v8.375zm14.178-.024v-.073A13.909 13.909 0 0 1 75.825 36.12a14.129 14.129 0 0 1 10.801 4.218l-3.828 4.425a10.155 10.155 0 0 0-7.01-3.096c-4.62 0-7.948 3.84-7.948 8.533v.085c0 4.693 3.255 8.606 7.948 8.606 3.133 0 5.047-1.219 7.205-3.206l3.828 3.864a13.97 13.97 0 0 1-11.227 4.876 13.836 13.836 0 0 1-14.043-14.068" fill="#fff"/>
</svg>);
}