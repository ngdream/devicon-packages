const React = require("react");
module.exports = function VyperOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<polygon opacity=".8" points="1280 1330.2 1024 886.81 768 1330.2 1024 1773.6" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
	<polygon opacity=".6" points="1536 886.81 1280 443.41 1024 886.81 1280 1330.2" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
	<polygon opacity=".6" points="1024 886.81 768 443.41 512 886.81 768 1330.2" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
	<polygon opacity=".45" points="1792 443.41 1536 0 1280 443.41 1536 886.81" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
	<polygon opacity=".45" points="768 443.41 1024 886.81 1280 443.41 1152 221.7 896 221.7" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
	<polygon opacity=".45" points="768 443.41 512 0 256 443.41 512 886.81" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
	<polygon opacity=".3" points="2048 0 1536 0 1792 443.4" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
	<polygon opacity=".3" points="512 0 0 0 256 443.4" transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)"/>
</svg>);
}