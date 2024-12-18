import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CypressioOriginalIcon',
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
		<linearGradient id="b" gradientTransform="translate(-.876 -.754) scale(.13472)" gradientUnits="userSpaceOnUse" x1="323.384" x2="56.936" y1="12.396" y2="577.503">
			<stop offset="0" stopColor="#69d3a7"/>
			<stop offset=".823" stopColor="#2ab586"/>
			<stop offset="1" stopColor="#1cae7f"/>
		</linearGradient>
		<linearGradient id="a" gradientTransform="translate(-.876 -.754) scale(.13472)" gradientUnits="userSpaceOnUse" x1="992.991" x2="568.87" y1="483.702" y2="758.304">
			<stop offset=".081" stopColor="#69d3a7"/>
			<stop offset="1" stopColor="#69d3a7" stopOpacity="0"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="translate(-.876 -.754) scale(.13472)" gradientUnits="userSpaceOnUse" x1="5.828" x2="704.494" y1="697.848" y2="917.116">
			<stop offset=".077" stopColor="#1cae7f"/>
			<stop offset=".164" stopColor="#1ca379"/>
			<stop offset=".316" stopColor="#1c8568"/>
			<stop offset=".516" stopColor="#1b554d"/>
			<stop offset=".719" stopColor="#1b1e2e"/>
		</linearGradient>
	</defs>
	<path className="st0" d="M44.984 50.817c5.173 0 9.377 2.762 11.532 7.558l.162.378 8.676-2.95-.175-.445c-3.355-8.192-11.101-13.27-20.195-13.27-6.4 0-11.6 2.047-15.897 6.264-4.271 4.19-6.427 9.458-6.427 15.655 0 6.157 2.17 11.397 6.427 15.574 4.297 4.217 9.498 6.264 15.897 6.264 9.094 0 16.827-5.092 20.195-13.27l.175-.444-8.69-2.95-.148.39c-1.94 4.729-6.251 7.544-11.532 7.544-3.597 0-6.642-1.253-9.04-3.732-2.439-2.505-3.665-5.671-3.665-9.376 0-3.732 1.2-6.83 3.665-9.458 2.411-2.479 5.443-3.732 9.04-3.732z"/>
	<path d="m82.652 125.13-2.586-8.528c23.334-7.086 39.015-28.224 39.015-52.595 0-6.723-1.199-13.297-3.57-19.522l8.326-3.166A63.468 63.468 0 0 1 128 64.02c-.013 28.305-18.228 52.865-45.348 61.11Z" fill="url(#a)"/>
	<path d="M116.67 47.894C109.543 24.641 88.378 9.026 63.993 9.026a56.039 56.039 0 0 0-9.861.876l-1.577-8.77A64.836 64.836 0 0 1 63.993.108c28.319 0 52.906 18.147 61.191 45.159z" fill="#69d3a7"/>
	<path d="M4.096 86.532C1.374 79.338 0 71.753 0 64.007 0 31 24.776 3.664 57.634.43l.876 8.865C30.232 12.085 8.905 35.607 8.905 64.006a54.82 54.82 0 0 0 3.516 19.387z" fill="url(#b)"/>
	<path className="st0" d="M64.33 42.896 81.79 85.63l-12.718 30.85 8.905 1.779 30.96-75.364h-9.62l-12.353 31.31-12.449-31.31z"/>
	<path d="m70.675 112.601-1.872 4.54c-.431 1.038-1.415 1.752-2.52 1.792-.767.027-1.522.054-2.303.054-24.452 0-46.224-16.369-52.946-39.81l-8.569 2.451c7.814 27.228 33.102 46.25 61.501 46.264h.014c.889 0 1.778-.013 2.667-.054 4.567-.188 8.65-3.058 10.4-7.302l2.534-6.156z" fill="url(#c)"/>
</svg>;
  }
});