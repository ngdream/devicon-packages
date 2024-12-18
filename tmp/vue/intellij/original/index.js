import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'IntellijOriginalIcon',
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
		<linearGradient id="a" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="11.16" x2="58.94" y1="59.21" y2="56.78">
			<stop offset=".09" stopColor="#fc801d"/>
			<stop offset=".23" stopColor="#b07f61"/>
			<stop offset=".41" stopColor="#577db3"/>
			<stop offset=".53" stopColor="#1e7ce6"/>
			<stop offset=".59" stopColor="#087cfa"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="89.05" x2="73.12" y1="54.12" y2="6.52">
			<stop offset="0" stopColor="#fe2857"/>
			<stop offset=".08" stopColor="#cb3979"/>
			<stop offset=".16" stopColor="#9e4997"/>
			<stop offset=".25" stopColor="#7557b2"/>
			<stop offset=".34" stopColor="#5362c8"/>
			<stop offset=".44" stopColor="#386cda"/>
			<stop offset=".54" stopColor="#2373e8"/>
			<stop offset=".66" stopColor="#1478f2"/>
			<stop offset=".79" stopColor="#0b7bf8"/>
			<stop offset="1" stopColor="#087cfa"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="rotate(.104) scale(1.21905)" gradientUnits="userSpaceOnUse" x1="18.72" x2="78.8" y1="26.61" y2="125.99">
			<stop offset="0" stopColor="#fe2857"/>
			<stop offset=".08" stopColor="#fe295f"/>
			<stop offset=".21" stopColor="#ff2d76"/>
			<stop offset=".3" stopColor="#ff318c"/>
			<stop offset=".38" stopColor="#ea3896"/>
			<stop offset=".55" stopColor="#b248ae"/>
			<stop offset=".79" stopColor="#5a63d6"/>
			<stop offset="1" stopColor="#087cfa"/>
		</linearGradient>
	</defs>
	<path d="M23.492 88.027 6.277 74.434 16.41 55.676l15.223 5.094Zm0 0" fill="url(#a)"/>
	<path d="m121.988 36.68-2.105 67.78L74.8 122.517l-24.55-15.849Zm0 0" fill="#087cfa"/>
	<path d="M121.988 36.68 99.68 58.44 71.035 23.297l14.14-15.899Zm0 0" fill="url(#b)"/>
	<path d="m50.25 106.668-35.852 12.957 7.508-26.293 9.727-32.562L4.96 51.848 21.906 5.484l38.301 4.524L99.68 58.44Zm0 0" fill="url(#c)"/>
	<path d="M27.43 27.43h73.14v73.14H27.43Zm0 0" fill="#000"/>
	<path d="M36.547 86.746h27.43v4.574h-27.43Zm13.691-45.152v-4.996h-13.64v4.996h3.824v17.261h-3.824v5h13.64v-5h-3.816V41.594Zm13.078 22.648a10.802 10.802 0 0 1-5.351-1.219 12.299 12.299 0 0 1-3.559-2.875l3.766-4.207c.687.778 1.484 1.45 2.367 2a4.849 4.849 0 0 0 2.621.73 3.46 3.46 0 0 0 2.668-1.058 5.07 5.07 0 0 0 .977-3.449V36.57h6.093v17.86a12.384 12.384 0 0 1-.668 4.254 7.919 7.919 0 0 1-4.964 4.879 12.097 12.097 0 0 1-4.036.632" fill="#fff"/>
</svg>;
  }
});