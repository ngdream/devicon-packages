const React = require("react");
module.exports = function SupabasePlainIcon({size = "1em", color = "#3ecf8e", ...props}){
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
	<path d="M58.061.007a5.45 5.45 0 0 0-4.563 2.126L4.137 64.283c-5.823 7.332-.597 18.148 8.763 18.148h50.98l.549 39.864c0 3.63 2.588 5.704 5.704 5.704 1.556 0 3.111-.524 4.148-2.08l49.314-62.201c6.223-7.26 1.037-18.148-8.307-18.148H63.74l-.264-40.045c-.047-3.288-2.66-5.403-5.409-5.518zm10.527 50.748h46.706c2.593 0 4.148 1.042 5.186 3.635 1.037 2.074.518 4.667-.52 6.222l-49.297 62.191h-.529s-.519 0-.519-.518L68.584 50.75z"/>
</svg>);
}