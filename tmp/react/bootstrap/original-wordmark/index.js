const React = require("react");
module.exports = function BootstrapOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M14.985 15.15c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.563-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94Z" fill="url(#a)"/>
	<path d="M11.398 121.43v-17.738h5.047c1.533 0 2.75.375 3.649 1.126.899.75 1.348 1.727 1.348 2.931 0 1.007-.272 1.881-.816 2.623-.545.742-1.295 1.27-2.252 1.583v.05c1.196.14 2.153.593 2.87 1.36.717.759 1.076 1.748 1.076 2.969 0 1.517-.544 2.746-1.632 3.686-1.089.94-2.462 1.41-4.12 1.41h-5.17Zm2.078-15.858v5.727h2.128c1.138 0 2.033-.272 2.684-.816.651-.553.977-1.329.977-2.326 0-1.723-1.134-2.585-3.402-2.585h-2.387Zm0 7.595v6.383h2.82c1.22 0 2.165-.289 2.833-.866.676-.577 1.014-1.369 1.014-2.375 0-2.095-1.427-3.142-4.28-3.142h-2.387Zm17.466 8.563c-1.872 0-3.369-.59-4.49-1.769-1.113-1.187-1.67-2.758-1.67-4.713 0-2.127.581-3.789 1.744-4.985 1.163-1.195 2.734-1.793 4.713-1.793 1.888 0 3.36.581 4.416 1.744 1.063 1.163 1.595 2.775 1.595 4.836 0 2.021-.573 3.641-1.72 4.862-1.137 1.212-2.667 1.818-4.588 1.818Zm.148-11.553c-1.303 0-2.333.445-3.092 1.336-.759.882-1.138 2.102-1.138 3.661 0 1.501.383 2.685 1.15 3.55.767.867 1.793 1.3 3.08 1.3 1.311 0 2.318-.425 3.019-1.275.709-.849 1.063-2.057 1.063-3.624 0-1.583-.354-2.804-1.063-3.662-.701-.857-1.708-1.286-3.019-1.286Zm14.696 11.553c-1.872 0-3.369-.59-4.49-1.769-1.113-1.187-1.67-2.758-1.67-4.713 0-2.127.581-3.789 1.744-4.985 1.163-1.195 2.734-1.793 4.713-1.793 1.888 0 3.36.581 4.416 1.744 1.064 1.163 1.596 2.775 1.596 4.836 0 2.021-.573 3.641-1.72 4.862-1.138 1.212-2.668 1.818-4.59 1.818Zm.148-11.553c-1.303 0-2.333.445-3.092 1.336-.759.882-1.138 2.102-1.138 3.661 0 1.501.383 2.685 1.15 3.55.767.867 1.793 1.3 3.08 1.3 1.311 0 2.318-.425 3.019-1.275.709-.849 1.063-2.057 1.063-3.624 0-1.583-.354-2.804-1.063-3.662-.701-.857-1.708-1.286-3.02-1.286ZM61.21 121.31c-.478.264-1.109.396-1.893.396-2.218 0-3.327-1.237-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.19v1.732h-3.19v7.137c0 .849.144 1.456.433 1.819.288.363.766.544 1.434.544.511 0 .953-.14 1.324-.42v1.731Zm1.942-.34v-2.177c1.105.816 2.321 1.224 3.649 1.224 1.781 0 2.672-.593 2.672-1.78 0-.339-.078-.623-.235-.854a2.138 2.138 0 0 0-.619-.631 4.326 4.326 0 0 0-.915-.482 34.7 34.7 0 0 0-1.126-.458 16.416 16.416 0 0 1-1.484-.668 4.918 4.918 0 0 1-1.064-.767 3.059 3.059 0 0 1-.643-.977c-.14-.363-.21-.787-.21-1.274 0-.593.136-1.117.408-1.571a3.53 3.53 0 0 1 1.088-1.15 5.01 5.01 0 0 1 1.547-.706 6.94 6.94 0 0 1 1.806-.235c1.097 0 2.078.19 2.944.57v2.053c-.932-.611-2.004-.916-3.217-.916-.38 0-.721.045-1.026.136a2.5 2.5 0 0 0-.792.36 1.735 1.735 0 0 0-.507.568 1.493 1.493 0 0 0-.173.718c0 .329.058.605.173.828.123.223.3.421.532.594.23.173.511.33.841.47.33.14.705.293 1.126.458.56.214 1.063.437 1.509.668a4.9 4.9 0 0 1 1.138.767c.313.28.552.606.717.977.173.371.26.812.26 1.323 0 .627-.14 1.171-.42 1.633-.273.462-.64.845-1.102 1.15a5.078 5.078 0 0 1-1.595.681 7.852 7.852 0 0 1-1.893.223c-1.303 0-2.433-.252-3.39-.755h.001Zm17.39.34c-.477.264-1.108.396-1.892.396-2.218 0-3.327-1.237-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.19v1.732h-3.19v7.137c0 .849.144 1.456.433 1.819.288.363.766.544 1.434.544.511 0 .953-.14 1.324-.42v1.731Zm9.316-10.49c-.355-.272-.866-.408-1.534-.408-.866 0-1.592.408-2.177 1.224-.577.817-.866 1.93-.866 3.34v6.457h-2.028v-12.666h2.028v2.61h.05c.289-.891.73-1.583 1.323-2.078.593-.503 1.257-.755 1.992-.755.527 0 .931.058 1.212.174v2.102Zm11.271 10.61H99.1v-1.98h-.05c-.881 1.518-2.18 2.277-3.894 2.277-1.262 0-2.252-.334-2.97-1.002-.709-.668-1.063-1.555-1.063-2.66 0-2.367 1.393-3.743 4.18-4.13l3.798-.533c0-2.152-.87-3.228-2.61-3.228-1.525 0-2.902.519-4.131 1.558v-2.078c1.245-.791 2.68-1.187 4.305-1.187 2.977 0 4.465 1.575 4.465 4.725v8.238Zm-2.03-6.407-3.054.42c-.94.132-1.65.367-2.128.705-.478.33-.717.92-.717 1.769 0 .619.219 1.126.656 1.522.445.387 1.035.58 1.769.58 1.006 0 1.835-.35 2.486-1.05.66-.709.99-1.604.99-2.685l-.001-1.261Zm7.93 4.577h-.05v7.657h-2.028v-18.493h2.029v2.226h.049c.998-1.682 2.458-2.523 4.379-2.523 1.633 0 2.907.569 3.822 1.707.915 1.129 1.373 2.647 1.373 4.552 0 2.119-.515 3.818-1.546 5.096-1.031 1.27-2.441 1.905-4.23 1.905-1.641 0-2.907-.709-3.798-2.128v.001Zm-.05-5.109v1.77c0 1.047.338 1.937 1.015 2.671.685.726 1.55 1.089 2.597 1.089 1.229 0 2.19-.47 2.883-1.41.7-.94 1.05-2.247 1.05-3.922 0-1.41-.325-2.515-.976-3.315-.651-.8-1.534-1.2-2.647-1.2-1.18 0-2.128.412-2.845 1.237-.718.817-1.077 1.843-1.077 3.08Z" fill="#7952B3"/>
	<g>
		<path d="M67.11 79.174c11.619 0 18.62-5.689 18.62-15.072 0-7.093-4.995-12.228-12.413-13.041v-.296c5.45-.886 9.726-5.947 9.726-11.6 0-8.053-6.358-13.299-16.047-13.299h-21.8v53.308H67.11ZM53.674 32.627h11.279c6.13 0 9.613 2.733 9.613 7.684 0 5.282-4.05 8.238-11.392 8.238h-9.5V32.627Zm0 39.787V54.866h11.203c8.023 0 12.186 2.955 12.186 8.718s-4.049 8.83-11.694 8.83H53.674Z" fill="url(#c)"/>
		<path d="M67.11 79.174c11.619 0 18.62-5.689 18.62-15.072 0-7.093-4.995-12.228-12.413-13.041v-.296c5.45-.886 9.726-5.947 9.726-11.6 0-8.053-6.358-13.299-16.047-13.299h-21.8v53.308H67.11ZM53.674 32.627h11.279c6.13 0 9.613 2.733 9.613 7.684 0 5.282-4.05 8.238-11.392 8.238h-9.5V32.627Zm0 39.787V54.866h11.203c8.023 0 12.186 2.955 12.186 8.718s-4.049 8.83-11.694 8.83H53.674Z" fill="#fff"/>
	</g>
	<defs>
		<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="19.8" x2="129.708" y1="4.704" y2="91.95">
			<stop stopColor="#9013FE"/>
			<stop offset="1" stopColor="#6610F2"/>
		</linearGradient>
		<linearGradient id="c" gradientUnits="userSpaceOnUse" x1="49.032" x2="73.598" y1="29.374" y2="70.922">
			<stop stopColor="#fff"/>
			<stop offset="1" stopColor="#F1E5FC"/>
		</linearGradient>
	</defs>
</svg>);
}