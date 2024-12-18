import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ViteOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#006BFF'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M128 3.83 48.72 22.547 36.977 124.17ZM39.464 24.264 0 33.167l35.658 90.604Z"/>
</svg>;
  }
});