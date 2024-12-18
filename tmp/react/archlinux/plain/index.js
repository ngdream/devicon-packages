const React = require("react");
module.exports = function ArchlinuxPlainIcon({size = "1em", color = "#1791cf", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} id="svg230" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<defs id="defs234"/>
	<g id="surface1" transform="translate(0,-20.973653)">
		<path id="path223" style={{"stroke":"none"}} d="m 61.113281,25.859375 c -5.292969,12.902344 -8.484375,21.34375 -14.375,33.863281 3.613281,3.804688 8.046875,8.242188 15.246094,13.25 C 54.242188,69.804688 48.964844,66.625 45.015625,63.324219 37.476562,78.96875 25.664062,101.25781 1.691406,144.09375 20.535156,133.27734 35.140625,126.60938 48.75,124.0625 c -0.585938,-2.5 -0.917969,-5.20312 -0.894531,-8.02344 l 0.02344,-0.60156 c 0.296875,-12.00391 6.578125,-21.238281 14.015625,-20.609375 7.4375,0.625 13.222657,10.871095 12.921875,22.875005 -0.05469,2.26171 -0.3125,4.43359 -0.761718,6.44921 13.464843,2.6211 27.914059,9.27344 46.499999,19.94141 -3.66406,-6.70703 -6.9336,-12.75781 -10.0586,-18.51953 -4.92187,-3.79297 -10.05468,-8.72656 -20.523431,-14.07422 7.195313,1.86328 12.347651,4.00781 16.363281,6.40625 C 74.578125,59.09375 72.003906,51.28125 61.113281,25.859375 Z m 0,0"/>
		<path id="path225" style={{"stroke":"none"}} d="m 121.14063,133.54297 v -3.24219 h -1.21485 v -0.43359 h 2.92969 v 0.43359 h -1.22266 v 3.24219 h -0.49218"/>
		<path id="path227" style={{"stroke":"none"}} d="m 123.36328,133.54297 v -3.67578 h 0.73438 l 0.875,2.60156 c 0.082,0.24219 0.14062,0.42578 0.17578,0.54297 0.043,-0.13281 0.10937,-0.32813 0.19922,-0.58594 l 0.88281,-2.55859 h 0.66016 v 3.67578 h -0.47266 v -3.07813 l -1.07422,3.07813 h -0.44141 l -1.0664,-3.12891 v 3.12891 h -0.47266"/>
	</g>
</svg>);
}