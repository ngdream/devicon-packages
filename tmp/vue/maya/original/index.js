import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'MayaOriginalIcon',
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
		<linearGradient id="maya-original-a" gradientUnits="userSpaceOnUse" x1="100.777" x2="86.576" y1="85.094" y2="91.058">
			<stop offset=".09" stopColor="#1A5964"/>
			<stop offset=".3" stopColor="#137078"/>
			<stop offset=".5" stopColor="#0E8085"/>
			<stop offset=".66" stopColor="#0C858A"/>
			<stop offset="1" stopColor="#0A8B8F"/>
		</linearGradient>
		<linearGradient id="maya-original-b" gradientUnits="userSpaceOnUse" x1="99.581" x2="130.166" y1="56.123" y2="75.523">
			<stop offset="0" stopColor="#079EA0"/>
			<stop offset=".43" stopColor="#14878E"/>
			<stop offset="1" stopColor="#256A77"/>
		</linearGradient>
		<linearGradient id="maya-original-c" gradientUnits="userSpaceOnUse" x1="112" x2="112" y1="16.835" y2="120.497">
			<stop offset="0" stopColor="#B4B4B4"/>
			<stop offset=".8" stopColor="#03ABAB"/>
			<stop offset="1" stopColor="#137980"/>
		</linearGradient>
		<linearGradient id="maya-original-d" gradientUnits="userSpaceOnUse" x1="59.349" x2="135.485" y1="57.417" y2="42.575">
			<stop offset="0" stopColor="#0F5D64"/>
			<stop offset=".1" stopColor="#097A7E"/>
			<stop offset=".23" stopColor="#049395"/>
			<stop offset=".34" stopColor="#01A3A3"/>
			<stop offset=".43" stopColor="#00A8A8"/>
			<stop offset="1" stopColor="#4EBCC1"/>
		</linearGradient>
		<linearGradient id="maya-original-e" gradientUnits="userSpaceOnUse" x1="-10.003" x2="26.772" y1="72.033" y2="50.748">
			<stop offset="0" stopColor="#00A9A9"/>
			<stop offset=".65" stopColor="#049496"/>
			<stop offset="1" stopColor="#088286"/>
		</linearGradient>
		<linearGradient id="maya-original-f" gradientUnits="userSpaceOnUse" x1="2.06" x2="32.014" y1="91.643" y2="89.985">
			<stop offset="0" stopColor="#20626E"/>
			<stop offset="1" stopColor="#069D9F"/>
		</linearGradient>
		<linearGradient id="maya-original-g" gradientUnits="userSpaceOnUse" x1="41.036" x2="36.336" y1="5.266" y2="101.578">
			<stop offset="0" stopColor="#99CBD2"/>
			<stop offset=".9" stopColor="#498F93"/>
			<stop offset="1" stopColor="#2E7B7D"/>
		</linearGradient>
	</defs>
	<path d="M98 121h3V49l-6 9v56l3 7z" fill="url(#maya-original-a)"/>
	<path d="M98 121V51l23-44h5v54l-22 60h-6" fill="url(#maya-original-b)"/>
	<path d="M126 121H98c2.9-5.7 14.1-29.2 19-48 8.5-33.1 9-58 9-58v106z" fill="url(#maya-original-c)"/>
	<path d="M126 7H89L63 69l11 30h1c.4 0 1-.3 2-2 4.1-7.6 49-90 49-90z" fill="url(#maya-original-d)"/>
	<path d="M2 121.7l3-.7 27-49V56L5 9 2 7.4v114.3z" fill="url(#maya-original-e)"/>
	<path d="M32 59.1c-2.3 6.9-7.9 23.6-13.6 34.3C8.2 113 2 121.7 2 121.7s23.7 2 30-5.7V60v-.9z" fill="url(#maya-original-f)"/>
	<path d="M52 97c1 1.8 1.6 2 2 2h21c.2-.2.4-.4.4-.7-.1-.4-.2-.9-.4-1.3L38 4 2 7.4S47.7 89.2 52 97z" fill="url(#maya-original-g)"/>
</svg>;
  }
});