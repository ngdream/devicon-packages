const React = require("react");
module.exports = function PuttyPlainIcon({size = "1em", color = "#0000fc", ...props}){
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
	<path d="M87.91 26.266L46.516 58.469v1.844h15.641L37.324 85.145v1.844h2.766l40.471-32.201.002-.082v-1.764H65.844l23.91-24.832v-1.844H87.91zM14.684 101l-4 3.691L7 108.383V121H67.62l3.689-3.684L75 113.633V101l-3.562.004-3.564.002-3.65 3.623-3.652 3.621H15v-3.625c0-2.752-.076-3.625-.316-3.625zm2.566-12.191V71.368l3.191-3.184L23.632 65h32.24L49.5 71.375l-6.371 6.375H20.75v20.5H55v-20.5h-.79c-.703 0-.056-.583 5.813-5.244l6.603-5.244.064 16.176.064 16.176-3.311 3.318-3.311 3.318H17.25zm55-25.912c0-.057 2.081-1.765 4.625-3.795L81.5 55.41V52H75c-3.575 0-6.5-.091-6.5-.203s.316-.506.701-.875l.701-.672h36.73l3.619-3.625L113.869 43H121v12.632l-3.691 3.684-3.69 3.684H92.934c-11.376 0-20.684-.046-20.684-.103zm-.375-14.716c0-.038 1.73-1.864 3.844-4.059l3.844-3.99 10.656-.004 10.656-.004V19.75H66.75v20.364l.844.037.844.037-2.625 2.029-2.625 2.029-.032-15.403-.032-15.403 3.218-3.22L69.561 7h43.19v34.814l-3.22 3.218-3.22 3.218H89.093c-9.47 0-17.218-.031-17.218-.069zm-18.842 2.95v-.841l3.67-3.667c2.63-2.627 3.784-3.667 4.073-3.667.391 0 .402.043.352 1.45l-.051 1.45-3.889 3.048-4.022 3.057c-.073.005-.133-.369-.133-.831zm0 11.094v-.884h6.616l-.871.884-.871.884h-4.874z"/>
</svg>);
}