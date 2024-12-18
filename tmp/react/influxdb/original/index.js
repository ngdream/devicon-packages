const React = require("react");
module.exports = function InfluxdbOriginalIcon({size = "1em", color = "#020a47", ...props}){
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
	<path style={{}} d="m94.543 87.625 29.379-6.75a3.35 3.35 0 0 0 1.258-.543 3.358 3.358 0 0 0 1.383-2.305c.058-.46.019-.925-.114-1.37L113.957 22.34a3.499 3.499 0 0 0-1.59-2.14 3.49 3.49 0 0 0-2.633-.391l-29.37 6.75c-.887.23-1.65.8-2.118 1.593a3.452 3.452 0 0 0-.383 2.625L90.32 85.094a3.499 3.499 0 0 0 1.59 2.14c.79.477 1.738.618 2.633.391Zm-10.125 33.566 35.621-33.054c1.344-1.36 1.004-2.196-.844-1.528l-24.484 5.575a6.222 6.222 0 0 0-2.715 1.46 6.221 6.221 0 0 0-1.676 2.586l-7.425 23.954c-.508 1.855.168 2.363 1.523 1.007Zm-64.992-10.789 53.344 16.52c.91.172 1.851.012 2.656-.45a3.947 3.947 0 0 0 1.734-2.07l8.938-28.68a3.48 3.48 0 0 0 .117-1.378 3.492 3.492 0 0 0-.418-1.317 3.473 3.473 0 0 0-.89-1.058 3.562 3.562 0 0 0-1.227-.633L30.336 74.973a3.545 3.545 0 0 0-2.695.304 3.57 3.57 0 0 0-1.696 2.118l-8.879 28.62a3.556 3.556 0 0 0 .278 2.68 3.547 3.547 0 0 0 2.082 1.707ZM2.2 51.7l10.816 47.452c.336 1.856 1.207 1.856 1.68 0l7.425-23.949a6.709 6.709 0 0 0 .031-3.113 6.783 6.783 0 0 0-1.37-2.793L3.721 50.852c-1.183-1.395-2.066-1.008-1.523.847ZM43.906.973 3.046 38.875a3.47 3.47 0 0 0-.168 4.848l20.43 22.144a3.483 3.483 0 0 0 2.415 1.098 3.48 3.48 0 0 0 2.484-.926l40.848-37.965a3.446 3.446 0 0 0 .172-4.847L48.832 1.094A3.48 3.48 0 0 0 47.722.3a3.467 3.467 0 0 0-1.326-.3 3.419 3.419 0 0 0-1.34.238 3.435 3.435 0 0 0-1.149.735Zm39.496 85.804c1.864.508 3.035-.496 2.54-2.422L74.124 33.082c-.508-1.855-2.035-2.363-3.375-1.02L32.258 67.895c-1.352 1.343-1.016 2.859.836 3.367Zm20.09-71.515L56.898.972c-1.851-.511-2.187.169-.675 1.684l17.054 18.387a6.549 6.549 0 0 0 2.7 1.527 6.58 6.58 0 0 0 3.093.11l24.485-5.563c1.8-.508 1.8-1.355-.063-1.855Zm0 0"/>
</svg>);
}