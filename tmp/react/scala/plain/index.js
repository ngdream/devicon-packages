const React = require("react");
module.exports = function ScalaPlainIcon({size = "1em", color = "#de3423", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} version="1.0" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="M25.411 110.572V95.077l11.842-.474c12.315-.473 21.45-1.488 34.847-3.789 15.225-2.639 30.246-7.375 31.803-10.082.406-.677.676 4.534.676 14.616v15.698l-1.76 1.353c-1.894 1.489-9.202 3.993-17.524 6.09C72.303 121.737 40.568 126 29.742 126h-4.33zM25.411 71.327V55.83l11.842-.406c13.127-.541 23.344-1.691 36.877-4.195 15.157-2.842 28.96-7.443 29.976-9.947.203-.473.406 6.09.406 14.616.067 13.533-.068 15.698-1.083 16.78-2.368 2.64-20.638 7.376-39.449 10.286-11.435 1.76-30.381 3.79-35.66 3.79h-2.909zM25.411 32.352V17.195l2.098-.406c1.15-.203 3.992-.406 6.293-.406 11.367 0 38.366-3.722 51.628-7.105 9.27-2.436 15.698-4.872 17.931-6.902 1.15-1.015 1.218-.406 1.218 14.48 0 14.548-.067 15.63-1.285 16.714-1.827 1.691-14.345 5.548-24.09 7.51-15.765 3.113-41.951 6.429-50.883 6.429h-2.91z"/>
	</g>
</svg>);
}