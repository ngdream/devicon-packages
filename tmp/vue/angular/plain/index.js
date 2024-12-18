import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AngularPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#FFFFFF'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<g id="surface1">
		<path style={{"stroke":"none"}} d="M 55.296875 69.324219 L 72.703125 69.324219 L 64 48.382812 Z M 55.296875 69.324219 M 64 15.359375 L 16.332031 32.359375 L 23.601562 95.386719 L 64 117.761719 L 104.398438 95.386719 L 111.667969 32.359375 Z M 93.746094 93.492188 L 82.636719 93.492188 L 76.644531 78.539062 L 51.355469 78.539062 L 45.363281 93.492188 L 34.253906 93.492188 L 64 26.675781 Z M 93.746094 93.492188 "/>
	</g>
</svg>;
  }
});