import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AlpinejsOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#2d3441'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z" fillRule="evenodd"/>
	<path d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" fillRule="evenodd"/>
</svg>;
  }
});