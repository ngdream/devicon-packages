import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'LogstashOriginalIcon',
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
	<path d="M72 128h44V80H72Zm0 0" fill="#00bfb3"/>
	<path d="M12 0H8v80h52V48C60 21.488 38.508 0 12 0" fill="#fec514"/>
	<path d="M8 80c0 26.508 21.492 48 48 48h4V80Zm0 0" fill="#343741"/>
</svg>;
  }
});