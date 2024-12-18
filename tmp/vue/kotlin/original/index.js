import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KotlinOriginalIcon',
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
		<linearGradient id="a" gradientTransform="translate(15.534 -96.774) scale(.1939)" gradientUnits="userSpaceOnUse" x1="500.003" x2="-.097" y1="579.106" y2="1079.206">
			<stop offset=".003" stopColor="#e44857"/>
			<stop offset=".469" stopColor="#c711e1"/>
			<stop offset="1" stopColor="#7f52ff"/>
		</linearGradient>
	</defs>
	<path d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0" fill="url(#a)"/>
</svg>;
  }
});