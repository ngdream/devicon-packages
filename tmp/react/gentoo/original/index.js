const React = require("react");
module.exports = function GentooOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.876 102.069c.014-5.4 4.604-12.939 11.127-19.788 4.358-4.577 8.785-8.594 18.435-16.822-6.675-3.663-17.057-8.082-22.265-13.87-1.928-2.14-5.421-6.992-4.744-13.473C6.81 24.905 23.116 4.857 46.293.619c7.711-1.41 16.565-.393 23.852 2.883 22.861 10.278 50.819 35.812 54.259 48.28 1.21 4.387.978 11.382-1.11 15.28-2.586 4.833-11.542 14.646-23.795 24.773-19.225 15.889-46.166 32.95-66.282 35.82-6.5.929-13.141-.039-17.801-2.668-7.292-4.115-9.713-9.608-10.563-11.254-2.263-4.378-1.982-9.925-1.977-11.664Zm54.108-60.667c.248-3.061 12.253-.013 11.495 2.411-.8 2.558-11.78 1.101-11.495-2.41z" fill="url(#a)"/>
	<path d="M38.935 60.4c-6.317 5.334-10.518 8.93-15.784 13.744C10.47 85.734 1.852 94.557 6.295 106.618c5.125 13.912 16.358 13.207 29.532 10.621 33.956-6.697 89.772-49.608 86.927-65.458-2.302-12.825-33.486-38.322-51.95-47.395C65.036 1.55 58.39.085 51.721.399 26.333 1.597 6.506 24.712 7.519 37.236c.985 12.184 31.78 22.8 31.416 23.164Zm-3.81-42.535c-7.64 8.5-2.756 24.944 9.913 33.907 14.825 10.488 38.83 12.387 43.608 4.299 8.91-15.087-.819-31.04-15.342-38.156-14.351-7.032-33.417-5.349-38.18-.05Z" fill="url(#b)"/>
	<path d="M61.177 51.415c10.725 1.491 19.97-2.804 21.415-13.395 1.102-8.067-11.245-16.881-18.668-18.914-6.199-1.697-19.656.486-20.564 12.21-.943 12.187 11.564 19.23 17.817 20.1Zm-5.252-20.27c-7.048 10.92 10.234 14.276 12.88 12.285 11.407-8.585-9.774-17.096-12.88-12.285Z" fill="url(#c)"/>
	<path d="M49.675 3.3c-12.468 1.314-14.856 2.918-26.15 11.464-3.786 2.864-10.753 9.833-12.538 18.1-.68 3.148.124 5.867 2.391 7.773 7.261 6.105 19.414 11.057 29.384 15.845 2.92 1.402.987 3.945-3.722 8.021C27.156 74.791 11.09 87.314 9.969 96.856c-.529 4.497 1.01 10.607 6.468 13.734 6.376 3.652 19.61 1.268 28.448-2.023 12.915-4.809 29.879-15.422 43.347-25.855 14.004-10.848 27.026-24.628 27.67-26.875.79-2.76.712-5.309-.814-8.24-2.397-4.602-5.602-8.021-9.043-11.849-9.233-9.734-19.002-18.287-30.69-24.841-8.44-4.733-15.867-8.641-25.68-7.607Zm18.314 21.823c9.007 4.354 18.257 15.793-.08 22.376-4.987 1.79-20.8-4.397-20.317-12.84.706-12.472 9.399-14.854 20.397-9.536z" fill="url(#d)"/>
	<defs>
		<radialGradient id="c" cx="0" cy="0" gradientTransform="matrix(21.5958 0 0 16.55244 54.025 28.43)" gradientUnits="userSpaceOnUse" r="1">
			<stop offset="0%" stopColor="#fff"/>
			<stop offset="34%" stopColor="#fff"/>
			<stop offset="51%" stopColor="#bebbdb"/>
			<stop offset="75%" stopColor="#928bbe"/>
			<stop offset="87%" stopColor="#9f99c7"/>
			<stop offset="100%" stopColor="#524c76"/>
		</radialGradient>
		<radialGradient id="d" cx="0" cy="0" gradientTransform="matrix(-2.96054 187.84913 -160.21079 -2.5225 4.891 33.727)" gradientUnits="userSpaceOnUse" r="1">
			<stop offset="0%" stopColor="#fff"/>
			<stop offset="34%" stopColor="#fff"/>
			<stop offset="51%" stopColor="#bebbdb"/>
			<stop offset="75%" stopColor="#928bbe"/>
			<stop offset="87%" stopColor="#9f99c7"/>
			<stop offset="100%" stopColor="#524c76"/>
		</radialGradient>
		<linearGradient id="a" gradientTransform="rotate(79.19 168.776 -156.268) scale(428.36508)" gradientUnits="userSpaceOnUse" x1="0" x2="1" y1="0" y2="0">
			<stop offset="0%" stopColor="#fff"/>
			<stop offset="34%" stopColor="#fff"/>
			<stop offset="51%" stopColor="#bebdf3"/>
			<stop offset="75%" stopColor="#867fb7"/>
			<stop offset="87%" stopColor="#9f99c7"/>
			<stop offset="100%" stopColor="#524c76"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="rotate(-102.573 79.15 14.225) scale(111.47795)" gradientUnits="userSpaceOnUse" x1="0" x2="1" y1="0" y2="0">
			<stop offset="0%" stopColor="#fff"/>
			<stop offset="34%" stopColor="#fff"/>
			<stop offset="51%" stopColor="#bebbdb"/>
			<stop offset="75%" stopColor="#928bbe"/>
			<stop offset="87%" stopColor="#9f99c7"/>
			<stop offset="100%" stopColor="#524c76"/>
		</linearGradient>
	</defs>
</svg>);
}