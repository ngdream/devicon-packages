const React = require("react");
module.exports = function VitessPlainIcon({size = "1em", color = "#f16827", ...props}){
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
	<path d="m0 5.788 21.338 39.427 3.278-39.427Zm103.455 0-.352 35.938-.09 9.377L128 5.788ZM25.53 7.008l-3.198 38.53 15.295-16.414Zm76.896.288L90.345 29.361l11.654 21.758.336-34.64zM38.25 30.268 26.847 51.446l6.816-5.416 9.182-7.293Zm51.613.334L73.569 75.96l14.8-12.03 13.473-10.953-5.532-10.332Zm-53.927 1.825-13.61 14.605 2.9 5.284zm51.215 2.73L77.117 53.331l-3.174 18.585 7.661-21.328Zm-44.33 4.896L25.878 53.51l12.047 22.122.507-3.681Zm.965.418L38.843 76.42l18.698-7.721 1.26-.523zm56.992 14.678-26.872 21.84 14.793-.011zm-25.16.94L64.506 76.537l5.627 10.35 1.817-9.327zM58.776 69.283 38.932 77.48l12.097 22.314.451-1.786zm.912.524-7.68 30.243 17.798-11.474.026-.128zm28.45 8.186-15.238.014-1.841 10.781.004.002-6.423 31.767zM69.53 89.983l-17.287 11.122-.372.24 11.389 20.867z"/>
</svg>);
}