import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'MayaOriginalWordmarkIcon',
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
		<linearGradient id="maya-original-wordmark-a" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="94.252" x2="82.572" y1="60.301" y2="55.395">
			<stop offset=".09" stopColor="#1A5964"/>
			<stop offset=".3" stopColor="#137078"/>
			<stop offset=".5" stopColor="#0E8085"/>
			<stop offset=".66" stopColor="#0C858A"/>
			<stop offset="1" stopColor="#0A8B8F"/>
		</linearGradient>
		<linearGradient id="maya-original-wordmark-b" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="93.27" x2="118.425" y1="84.129" y2="68.173">
			<stop offset="0" stopColor="#079EA0"/>
			<stop offset=".43" stopColor="#14878E"/>
			<stop offset="1" stopColor="#256A77"/>
		</linearGradient>
		<linearGradient id="maya-original-wordmark-c" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="103.484" x2="103.484" y1="116.443" y2="31.181">
			<stop offset="0" stopColor="#B4B4B4"/>
			<stop offset=".8" stopColor="#03ABAB"/>
			<stop offset="1" stopColor="#137980"/>
		</linearGradient>
		<linearGradient id="maya-original-wordmark-d" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="60.175" x2="122.803" y1="83.059" y2="95.268">
			<stop offset="0" stopColor="#0F5D64"/>
			<stop offset=".1" stopColor="#097A7E"/>
			<stop offset=".23" stopColor="#049395"/>
			<stop offset=".34" stopColor="#01A3A3"/>
			<stop offset=".43" stopColor="#00A8A8"/>
			<stop offset="1" stopColor="#4EBCC1"/>
		</linearGradient>
		<linearGradient id="maya-original-wordmark-e" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="3.122" x2="33.369" y1="71.054" y2="88.561">
			<stop offset="0" stopColor="#00A9A9"/>
			<stop offset=".65" stopColor="#049496"/>
			<stop offset="1" stopColor="#088286"/>
		</linearGradient>
		<linearGradient id="maya-original-wordmark-f" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="13.047" x2="37.687" y1="54.95" y2="56.314">
			<stop offset="0" stopColor="#20626E"/>
			<stop offset="1" stopColor="#069D9F"/>
		</linearGradient>
		<linearGradient id="maya-original-wordmark-g" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse" x1="45.099" x2="41.233" y1="125.96" y2="46.743">
			<stop offset="0" stopColor="#99CBD2"/>
			<stop offset=".9" stopColor="#498F93"/>
			<stop offset="1" stopColor="#2E7B7D"/>
		</linearGradient>
	</defs>
	<path d="M92 99.2h2.5V40l-4.9 7.4v46.1l2.4 5.7z" fill="url(#maya-original-wordmark-a)"/>
	<path d="M92 99.2V41.7l18.9-36.2h4.1v44.4L96.9 99.2H92" fill="url(#maya-original-wordmark-b)"/>
	<path d="M115 99.2H92c2.4-4.7 11.6-24 15.6-39.5 7-27.2 7.4-47.7 7.4-47.7v87.2z" fill="url(#maya-original-wordmark-c)"/>
	<path d="M115 5.5H84.6l-21.4 51 9 24.7h.8c.3 0 .8-.2 1.6-1.6C78.1 73.2 115 5.5 115 5.5z" fill="url(#maya-original-wordmark-d)"/>
	<path d="M13 99.8l2.5-.6 22.2-40.3V45.8L15.5 7.1 13 5.8v94z" fill="url(#maya-original-wordmark-e)"/>
	<path d="M37.7 48.3c-1.9 5.7-6.5 19.4-11.2 28.2C18.1 92.7 13 99.8 13 99.8s19.5 1.6 24.7-4.7v-46-.8z" fill="url(#maya-original-wordmark-f)"/>
	<path d="M54.1 79.5c.8 1.5 1.3 1.6 1.6 1.6H73c.2-.2.3-.3.3-.6-.1-.3-.2-.7-.3-1.1L42.6 3 13 5.8s37.6 67.3 41.1 73.7z" fill="url(#maya-original-wordmark-g)"/>
	<path d="M61 106l-5 14-5-14h-4v19h3v-14l5 14h2l5-14v14h3v-19h-4zm38.5 0L93 117v8h-3v-8l-6.4-11H87l4.5 8 4.5-8h3.5zm10.4 14l1.5 5h3.6l-6-19h-5l-6 19h3.5l1.5-5h6.9zm-6-2.7l2.7-8.9 2.6 8.9h-5.3zm-24 2.7l1.5 5H85l-6-19h-5l-6 19h3.5l1.5-5h6.9zm-6-2.7l2.7-8.9 2.6 8.9h-5.3z" fill="#149B9A"/>
</svg>;
  }
});