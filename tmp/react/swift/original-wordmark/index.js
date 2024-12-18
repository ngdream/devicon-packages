const React = require("react");
module.exports = function SwiftOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M37.35 54a11.24 11.24 0 00-.23-2.26 7.42 7.42 0 00-2.16-4A6.83 6.83 0 0033 46.39a8 8 0 00-2.24-.73c-.77-.15-1.62-.15-2.39-.22H9.35a13.37 13.37 0 00-1.77.15 6.41 6.41 0 00-1.7.44c-.15.07-.39.15-.54.22a9.86 9.86 0 00-1.47.95c-.15.15-.31.22-.46.36A6.47 6.47 0 002 49.38a6.77 6.77 0 00-.77 2.19A22.44 22.44 0 001 53.82v17.43a11.24 11.24 0 00.23 2.26 7.42 7.42 0 002.16 4 6.83 6.83 0 001.93 1.31 8 8 0 002.24.73c.77.15 1.62.15 2.39.22h18.46a13.26 13.26 0 002.39-.22 8 8 0 002.2-.72 8.78 8.78 0 002-1.31 6.47 6.47 0 001.39-1.82 6.77 6.77 0 00.77-2.19 22.44 22.44 0 00.23-2.26V54z" fill="#f05138"/>
	<path d="M25.3 72c-3.24 1.77-7.69 1.95-12.16.14a18.77 18.77 0 01-8.57-6.94A14.61 14.61 0 007.74 67c4.62 2 9.25 1.91 12.5 0a64.45 64.45 0 01-11.5-11.28 12.56 12.56 0 01-1.54-2 88.68 88.68 0 0011.18 8 78.59 78.59 0 01-7.87-9.33 77.67 77.67 0 0013 10.06l.5.28a9.38 9.38 0 00.35-1c1.08-3.72-.15-7.95-2.85-11.45 6.25 3.57 9.95 10.28 8.41 15.9 0 .15-.08.3-.13.45l.05.06c3.09 3.65 2.24 7.51 1.85 6.78C30 70.42 26.87 71.36 25.3 72z" fill="#fefefe"/>
	<path d="M119.34 60.31h-8.95v-1.09c0-.87.08-1.75.15-2.62a5.73 5.73 0 01.62-2.19 4.09 4.09 0 011.31-1.46 4.49 4.49 0 012.31-.58 7.49 7.49 0 011.47.15c.39.15.69.22 1 .36l.62-1.46a7.29 7.29 0 00-1.23-.44 6 6 0 00-1.7-.22 6.59 6.59 0 00-3.09.66 6.12 6.12 0 00-2.08 1.82 8.75 8.75 0 00-1.08 2.7 15.55 15.55 0 00-.31 3.35v1.09h-2.93v1.46h2.93v17.65h2V61.77h8.95v12.1a11.64 11.64 0 00.23 2.41 4.69 4.69 0 00.69 1.9 3.2 3.2 0 001.39 1.24 5.41 5.41 0 002.31.44 6.87 6.87 0 002.7-.44l-.21-1.42a8.39 8.39 0 01-.93.22 7 7 0 01-1.31.07 2.51 2.51 0 01-2.24-1 6 6 0 01-.62-2.92V61.84H127v-1.45h-5.63v-4.23l-2 .58zm.08 0zm.08 1.46zm-70 14.8a9.51 9.51 0 002.78 1.24 12.09 12.09 0 003.32.51 7.31 7.31 0 004.94-1.53 5.2 5.2 0 001.77-4A5.39 5.39 0 0061 69.06a11.66 11.66 0 00-4.32-2.62 15.12 15.12 0 01-5.24-2.84 5.78 5.78 0 01-1.93-4.52 6.33 6.33 0 01.62-2.7 6.56 6.56 0 011.7-2.11 7 7 0 012.55-1.39 9.4 9.4 0 013.24-.51 15 15 0 013.39.36 9.8 9.8 0 012.08.8l-.77 1.6a7.23 7.23 0 00-1.85-.8 9.27 9.27 0 00-3-.44 8 8 0 00-2.85.44 5.58 5.58 0 00-1.92 1.17 5.12 5.12 0 00-1 1.6 4.3 4.3 0 00-.31 1.68 4.75 4.75 0 001.39 3.57 14.15 14.15 0 004.4 2.48 18.59 18.59 0 013 1.46A13.23 13.23 0 0162.42 68a5.86 5.86 0 011.31 2 7.25 7.25 0 01.46 2.62 7.44 7.44 0 01-.54 2.84A6.38 6.38 0 0162 77.81a8.49 8.49 0 01-2.78 1.6 12.16 12.16 0 01-3.86.58 15.82 15.82 0 01-1.85-.15 16.6 16.6 0 01-1.85-.36 11.43 11.43 0 01-1.7-.58 6.86 6.86 0 01-1.31-.66zM68 60.39l3.32 10.86c.31 1.09.62 2.19.93 3.14s.54 2 .77 2.84h.15c.23-.87.54-1.82.85-2.84s.69-2 1.08-3.14L79 60.39h1.85l3.78 10.71c.39 1.17.77 2.26 1.08 3.28s.62 2 .85 2.84h.15c.23-.95.46-1.9.77-2.84s.62-2 1-3.21L92 60.39h2l-6.63 19.1h-1.58L82 68.84q-.58-1.75-1.16-3.28c-.31-1-.62-2.11-.85-3.21h-.08a33.72 33.72 0 01-1 3.28q-.58 1.53-1.16 3.28l-3.92 10.58h-1.7L66 60.39zm30.31 0h2v19.1h-2zm-.77-5.83a1.66 1.66 0 011.7-1.68 1.8 1.8 0 011.76 1.67 1.51 1.51 0 01-.54 1.17 1.81 1.81 0 01-1.23.44 2 2 0 01-1.23-.44 1.73 1.73 0 01-.49-1.17z" fill="#221f20"/>
</svg>);
}