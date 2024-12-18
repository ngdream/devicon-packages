import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'DropwizardOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="dropwizard-original-b" gradientTransform="matrix(-3070 -1630 -1630 3070 3221.19 2903.28)" gradientUnits="userSpaceOnUse" x2="1">
			<stop offset="0" stopColor="#3871c1"/>
			<stop offset=".515" stopColor="#2c3792"/>
			<stop offset=".865" stopColor="#24265d"/>
			<stop offset="1" stopColor="#252761"/>
		</linearGradient>
		<linearGradient id="dropwizard-original-d" gradientTransform="scale(-1851.53798 1851.53798) rotate(-14.621 3.82 4.204)" gradientUnits="userSpaceOnUse" x2="1">
			<stop offset="0" stopColor="#3871c1"/>
			<stop offset=".515" stopColor="#2c3792"/>
			<stop offset=".865" stopColor="#24265d"/>
			<stop offset="1" stopColor="#252761"/>
		</linearGradient>
		<clipPath id="dropwizard-original-a">
			<path d="M180.895 285.039S1320.7-280.582 2192.75 391.68c-227.41 610.38-626.72 2371.23-862.53 3148.89-50.27 165.81-58.48 182.34-79.05 227.87-115.09 254.71-236.16-494.3-433.061-1248.28-70.507-270.25-637.214-2235.121-637.214-2235.121z"/>
		</clipPath>
		<clipPath id="dropwizard-original-c">
			<path d="M410.777 410.078S1385.91-162.09 2192.75 391.68c-21.6 96.371-76.64 251.09-114.02 395.218-198.64 765.722-558.14 2058.592-733.32 2700.432-189.87 694.95-251.29-117.65-472.781-982.33-67.293-262.93-461.852-2094.922-461.852-2094.922z"/>
		</clipPath>
	</defs>
	<g clipPath="url(#dropwizard-original-a)" transform="matrix(.03194 0 0 -.03194 26.222 125.997)">
		<path d="M180.895 285.039S1320.7-280.582 2192.75 391.68c-227.41 610.38-626.72 2371.23-862.53 3148.89-50.27 165.81-58.48 182.34-79.05 227.87-115.09 254.71-236.16-494.3-433.061-1248.28-70.507-270.25-637.214-2235.121-637.214-2235.121" fill="url(#dropwizard-original-b)"/>
	</g>
	<g clipPath="url(#dropwizard-original-c)" transform="matrix(.03194 0 0 -.03194 26.222 125.997)">
		<path d="M410.777 410.078S1385.91-162.09 2192.75 391.68c-21.6 96.371-76.64 251.09-114.02 395.218-198.64 765.722-558.14 2058.592-733.32 2700.432-189.87 694.95-251.29-117.65-472.781-982.33-67.293-262.93-461.852-2094.922-461.852-2094.922" fill="url(#dropwizard-original-d)"/>
	</g>
	<path d="M47.785 97.062l3.237-5.586 3.025 5.884-3.461 7.59-2.801-7.888m26.436-21.14l3.238-5.586 3.025 5.885-3.463 7.589-2.8-7.888m-18.1-22.307l3.238-5.585 3.024 5.885-3.462 7.587-2.8-7.887" fill="#f9a72b"/>
	<path d="M47.785 97.062l3.242-6.541 3.02 6.84-3.456 5.595-2.806-5.894m26.436-21.14l3.244-6.541 3.019 6.84-3.456 5.595-2.806-5.894m-18.1-22.307l3.242-6.54 3.019 6.84-3.457 5.594-2.804-5.894" fill="#fff200"/>
	<path d="M51.012 112.36s23.19 3.868 38.455-5.904c-1.914 5.904-19.03 12.631-38.455 5.904" fill="#24265d"/>
</svg>;
  }
});