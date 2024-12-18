const React = require("react");
module.exports = function YiiPlainIcon({size = "1em", color = "#40b3d8", ...props}){
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
	<path d="M89.023 81.366c-.864-11.402-4.54-18.792-6.331-22.98-1.79-4.189-4.542-8.109-4.544-8.103-.005.018-2.478 13.342-6.923 22.983-.743 1.61-1.728 3.62-2.723 5.238-3.069 5.42-7.521 10.603-10.176 15.857-2.632 5.208-3.12 10.365-2.875 16.229.247 5.896 1.609 11.678 2.916 17.41 4.93-1.063 9.22-2.883 12.932-5.21 9.768-6.124 15.67-15.918 17.348-26.47 0 0 .082-.43.118-.952.757-8.155.506-10.729.258-14.002Zm0 0c-.864-11.402-4.54-18.792-6.331-22.98-1.79-4.189-4.542-8.109-4.544-8.103v.003-.004l-.657-.976c-14.405-20.221-42.03-30.317-65.371-20.96-1.124 14.174 5.447 38.56 29.42 45.363 9.691 2.981 17.452 2.208 26.963 4.794v.001s9.667 3.37 15.291 8.422c2.53 2.273 5.064 5.263 4.937 8.82.801-8.465.544-11.055.293-14.38ZM78.555 38.417c-3.406-9.965-1.962-16.643 4.269-25.935C85.796 8.048 90.928 2.905 95.425 0c18.145 11.37 24.855 32.55 18.182 52.22-4.857 14.312-9.414 20.313-20.935 35.038 1.343-15.77-4.207-26.704-9.657-38.853-1.387-3.09-3.305-6.61-4.46-9.988Zm10.176 57.329c.127-3.557-2.406-6.547-4.936-8.82-5.625-5.052-15.292-8.422-15.292-8.422.995-1.618 1.98-3.629 2.722-5.239 4.446-9.64 6.918-22.964 6.923-22.982.002-.006 2.754 3.914 4.544 8.102 1.79 4.189 5.468 11.579 6.332 22.98.251 3.326.508 5.916-.293 14.38Z"/>
</svg>);
}