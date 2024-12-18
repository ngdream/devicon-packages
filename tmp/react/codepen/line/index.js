const React = require("react");
module.exports = function CodepenLineIcon({size = "1em", color = "#000", ...props}){
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
	<path d="M64.006 0c-1.124-.001-2.248.324-3.314.98l-.008.007L2.633 39.694C.995 40.786 0 42.701 0 44.646v38.702c0 1.946.995 3.862 2.633 4.954l58.05 38.712.009.004c2.114 1.303 4.483 1.315 6.616.002l.008-.006 58.051-38.712C127.005 87.21 128 85.295 128 83.35V44.646c0-1.946-.995-3.86-2.633-4.952L67.317.986l-.009-.003C66.251.33 65.13 0 64.006 0Zm0 .977c.928 0 1.854.287 2.777.855h.002l58.028 38.695c1.338.892 2.187 2.52 2.187 4.12V83.35c0 1.598-.849 3.227-2.187 4.12l-58.028 38.698h-.002c-1.861 1.145-3.722 1.136-5.566 0h-.002L3.187 87.47C1.85 86.577 1 84.947 1 83.348V44.646c0-1.598.849-3.227 2.187-4.12L61.215 1.832h.002c.93-.572 1.86-.856 2.789-.855zm-4.963 14.24-.777.517-43.359 28.912 19.964 13.361 24.172-16.142Zm10.22.203-.252.506-.054.107v25.832l24.172 16.142 19.962-13.363Zm-11.22 1.664V41.33l-23.17 15.475-18.165-12.156Zm11.914 0 41.333 27.562-18.163 12.158-23.17-15.475ZM64 50.494 43.825 63.997 64 77.5l.277-.186 19.898-13.316zm0 1.204 18.376 12.3L64 76.297l-18.376-12.3Zm-53.087 2.219v20.16l15.078-10.08Zm106.174.002-15.08 10.077 15.08 10.082v-.936Zm-105.174 1.87 12.279 8.207-12.279 8.21Zm104.174.001v16.417l-12.28-8.209zM34.87 69.99 14.907 83.35l44.134 29.428.002-.934V86.13Zm58.258 0L68.957 86.13v26.023l.275.138.262.131 43.599-29.072zm-58.256 1.2 23.17 15.475v24.245L16.708 83.348Zm58.254.003 18.165 12.155-41.335 27.564V86.665Z"/>
</svg>);
}