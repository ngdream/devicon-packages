import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VercelLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m64.002 8.575-.428.74L0 119.425h128Zm0 1.976 62.289 107.887H1.709Z"/>
</svg>;
  }
});