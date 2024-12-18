import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JuliaPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#28a745'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<circle cx="29.1" cy="94.2" r="29.1"/>
	<circle cx="98.9" cy="94.2" r="29.1"/>
	<circle cx="64" cy="33.8" r="29.1"/>
</svg>;
  }
});