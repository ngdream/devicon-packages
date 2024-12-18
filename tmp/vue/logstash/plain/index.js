import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'LogstashPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#fec514'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M8 0v80c0 26.508 21.492 48 48 48h4V48C60 21.488 38.508 0 12 0Zm64 80v48h44V80Zm0 0"/>
</svg>;
  }
});