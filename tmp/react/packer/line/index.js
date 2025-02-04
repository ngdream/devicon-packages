const React = require("react");
module.exports = function PackerLineIcon({size = "1em", color = "#1d94dd", ...props}){
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
	<path d="M41.604 0v18.943L71.853 36.41v53.397l14.487 8.3c4.495 2.595 8.655 3.163 11.753 1.853 3.098-1.31 5.007-4.512 5.007-9.05V51.756c0-9.083-7.279-20.513-16.266-25.703zm.987 1.707L86.34 26.91c8.638 4.989 15.772 16.302 15.772 24.848V90.91c0 4.27-1.695 6.997-4.403 8.142-2.708 1.145-6.557.694-10.876-1.8l-13.995-8.014V35.84L42.591 18.372ZM24.9 15.436v88.35L66.814 128V39.657Zm.986 1.71 39.942 23.081v86.062l-39.942-23.073Z"/>
</svg>);
}