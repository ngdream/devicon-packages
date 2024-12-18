import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NorgOriginalIcon',
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
		<linearGradient id="a" gradientTransform="matrix(.125 0 0 -.125 0 128)" gradientUnits="userSpaceOnUse" x1="205.272" x2="800.726" y1="136.063" y2="855.023">
			<stop style={{"stopColor":"#33aae6","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#4b3892","stopOpacity":"1"}} offset=".992"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="matrix(.125 0 0 -.125 0 128)" gradientUnits="userSpaceOnUse" x1="531.93" x2="693.4" y1="357.426" y2="357.426">
			<stop style={{"stopColor":"#3d85c9","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#4a4198","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="matrix(.125 0 0 -.125 0 128)" gradientUnits="userSpaceOnUse" x1="531.92" x2="944.488" y1="288.905" y2="288.905">
			<stop style={{"stopColor":"#61c67c","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#366794","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="d" gradientTransform="matrix(.125 0 0 -.125 0 128)" gradientUnits="userSpaceOnUse" x1="843.48" x2="969.756" y1="404.53" y2="404.53">
			<stop style={{"stopColor":"#2f6b7f","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#325d87","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="e" gradientTransform="matrix(.125 0 0 -.125 0 128)" gradientUnits="userSpaceOnUse" x1="513.323" x2="900.784" y1="718.004" y2="143.708">
			<stop style={{"stopColor":"#3b7fc4","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#90b1df","stopOpacity":"1"}} offset=".467"/>
			<stop style={{"stopColor":"#7381c0","stopOpacity":"1"}} offset=".764"/>
			<stop style={{"stopColor":"#5f5fab","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
	</defs>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#a)"}} d="M111.113 107.7c46.95-64.388-36.812-96.177-72.226-40.263-4.473-7.449-6.375-17.101-2.438-31.8C20.074 54.687 18 74.488 35.863 95.336c14.25-26.688 32.188-31.125 50.825-31.211l-.012 13.625c-8.438-.852-14.227 5.477-20.188 11.227-9.875 7.347-18.375 18.023-23.937 35.261C-26.961 98.113-4.414-4.176 69.3.512c-7.602 8.113-14.114 16.625-13.727 27.687 56.664-40.097 96.301 37.574 55.95 79.102"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#b)"}} d="M86.648 88.96c-1.375-11.147-12.312-8.136-20.16.017 5.961-5.75 11.739-12.079 20.188-11.227l-.028 11.21"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#c)"}} d="m86.664 88.977-.016 14.835c15.403-7.511 22.454-31.789 21.84-47.976 13.114 17.465 11.399 34.578 3.024 51.465h.011c-11.449 12.16-27.734 20-45.023 20.636l-.012-38.96c7.848-8.153 18.785-11.165 20.176 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#d)"}} d="M111.512 107.3c8.375-16.874 10.074-34-3.024-51.464-.3-3.125-1.152-6.125-3.05-8.273 19.425 13.687 20.273 40.124 6.074 59.738"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#e)"}} d="M111.523 107.3c14.188-19.612 13.34-46.062-6.085-59.737-22.075-13.864-52.825-.012-66.551 19.863 35.527-55.989 119.125-24.028 72.226 40.261"/>
</svg>;
  }
});