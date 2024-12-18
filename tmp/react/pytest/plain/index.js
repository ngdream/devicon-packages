const React = require("react");
module.exports = function PytestPlainIcon({size = "1em", color = "#009fe3", ...props}){
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
	<path d="M31.512 30.398h61.304a3.006 3.006 0 010 6.012H31.512a3.007 3.007 0 01-3.004-3.004 3.008 3.008 0 013.004-3.008zm.535-6.078H44.37v2.844H32.047zm16.121 0h12.324v2.844H48.168zm15.902 0h12.328v2.844H64.07zm15.84 0h12.324v2.844H79.91zm0 15.22h12.324v20.835H79.91zm-15.84 0h12.352v33.847H64.07zm-15.902 0h12.324v50.698H48.168zm-16.121 0H44.37v61.792H32.047zm0 0"/>
</svg>);
}