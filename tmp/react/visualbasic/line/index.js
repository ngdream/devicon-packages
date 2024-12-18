const React = require("react");
module.exports = function VisualbasicLineIcon({size = "1em", color = "#004e8c", ...props}){
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
	<path d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64 64-28.66 64-64S99.34 0 64 0Zm0 .992c34.804 0 63.008 28.204 63.008 63.008S98.804 127.008 64 127.008.992 98.804.992 64 29.196.992 64 .992Zm-4.08 37.403-.118.335L45.67 78.42c-.333.922-.488 1.892-.697 2.848-.19-.919-.33-1.848-.625-2.739l-.003-.004L30.337 38.5H22.75l18.498 51.002h7.221l18.798-50.992Zm13.347.105v51.002H88.27a17.645 17.645 0 0 0 11.946-4.085h.002l.002-.002a13.573 13.573 0 0 0 4.777-10.77 12.244 12.244 0 0 0-3.163-8.736l-.006-.006-.006-.006c-1.945-2-4.513-3.17-7.242-3.647 2.171-.887 4.128-2.233 5.537-4.126h.002v-.002a12.664 12.664 0 0 0 2.458-7.67 10.755 10.755 0 0 0-3.995-8.668l-.004-.004-.005-.004A16.058 16.058 0 0 0 87.993 38.5Zm-12.652.897 5.238.084L47.779 88.51h-5.835L24.165 39.492h5.468l13.773 39.35a23.07 23.07 0 0 1 .99 4.332l.056.433h1.009l.058-.43c.204-1.509.567-2.99 1.086-4.421v-.002zm27.404.093a15.06 15.06 0 0 1 9.948 3.072 9.764 9.764 0 0 1 3.62 7.87v.022a11.669 11.669 0 0 1-2.263 7.077 11.929 11.929 0 0 1-6.097 4.288l-.353.106v.963l.457.037a12.224 12.224 0 0 1 7.775 3.66 11.245 11.245 0 0 1 2.901 8.03v.04a12.58 12.58 0 0 1-4.43 10.003 16.65 16.65 0 0 1-11.269 3.85H74.26V39.492h13.745zm-1.659 4.23-7.139.063v17.141h6.426c2.829.133 5.612-.75 7.849-2.486l.01-.007.011-.01a8.573 8.573 0 0 0 2.928-6.936c-.004-2.53-.87-4.538-2.59-5.845-1.725-1.31-4.233-1.92-7.49-1.92h-.003zm.004.992h.006c3.129 0 5.414.602 6.884 1.718 1.471 1.118 2.2 2.749 2.2 5.068v.014l.001.013a7.58 7.58 0 0 1-2.584 6.14 10.893 10.893 0 0 1-7.177 2.267h-5.48V44.765ZM79.22 65.19v18.993h8.434-.028a12.405 12.405 0 0 0 8.27-2.544l.013-.01.012-.01a8.85 8.85 0 0 0 3.003-7.072c-.003-3.057-1.081-5.462-3.217-7.027-2.137-1.568-5.259-2.308-9.34-2.308h-.003zm.992.996 6.152.018c3.961 0 6.875.734 8.758 2.116 1.884 1.381 2.812 3.4 2.812 6.239v.01l.002.014a7.857 7.857 0 0 1-2.66 6.277 11.407 11.407 0 0 1-7.591 2.332h-7.472z"/>
</svg>);
}