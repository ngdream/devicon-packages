import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JiraalignOriginalIcon',
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
		<linearGradient id="a" gradientTransform="translate(.556 -37.409) scale(6.46335)" gradientUnits="userSpaceOnUse" x1="8.221" x2="9.771" y1="20.546" y2="12.639">
			<stop offset=".15" stopColor="#0052cc"/>
			<stop offset=".503" stopColor="#0e64de"/>
			<stop offset="1" stopColor="#2684ff"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="translate(.556 -37.409) scale(6.46335)" gradientUnits="userSpaceOnUse" x1="11.391" x2="9.84" y1="10.847" y2="18.754">
			<stop offset=".15" stopColor="#0052cc"/>
			<stop offset=".503" stopColor="#0e64de"/>
			<stop offset="1" stopColor="#2684ff"/>
		</linearGradient>
	</defs>
	<path d="M.555 0c0 24.102 19.488 43.758 43.375 43.758h40.14v40.719h43.368V7.254c0-3.75-3.012-7.02-6.723-7.02Zm0 0" fill="url(#a)"/>
	<path d="M127.21 128c0-24.105-19.483-43.523-43.382-43.523H43.93v-40.72H.555v77.223c0 3.743 3.02 7.02 6.722 7.02Zm0 0" fill="url(#b)"/>
</svg>;
  }
});