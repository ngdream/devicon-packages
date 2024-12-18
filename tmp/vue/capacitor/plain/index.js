import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CapacitorPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#53B9FF'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M108.215 0 77.512 30.691 46.96.156 27.184 19.957l80.82 80.926 19.777-19.805-30.496-30.586L128 19.738ZM19.93 27.059.156 46.859l30.496 30.59L0 108.191l19.715 19.813L50.43 97.246l30.547 30.535 19.777-19.8Zm0 0"/>
</svg>;
  }
});