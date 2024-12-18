import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HaxePlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#EA8220'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 0h32.3L64 16 96.3 0H128v32.6L111.8 64 128 95.8V128H95.2L64 112.1 32.6 128H0V94.7L15.7 64 0 31.8z"/>
</svg>;
  }
});