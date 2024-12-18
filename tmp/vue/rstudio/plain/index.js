import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'RstudioPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#75aadb'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M71.4 38.8c-1.5-.6-3.9-1-6.9-1.1-4.2-.1-9 .4-9.2.5v20c13.3.6 15.5-1.7 15.5-1.7 11.6-5.9 4.3-16.2.6-17.7z"/>
	<path d="M64 0C28.6 0 0 28.6 0 64s28.6 64 64 64 64-28.6 64-64S99.3 0 64 0zm28.6 89.8H82L64.4 63.5h-9V84h9v5.8H41.5v-5.7l7.6-.1-.1-45.9c-.8-.2-7.5-.8-7.5-.8V32c1 1 7.9 1.2 7.9 1.2 1.6.1 3.9.2 5.2-.1 9.3-1.7 16.4-.4 16.4-.4 14 3.2 14.2 15.8 10.3 22.6-3.5 5.8-10.3 7.2-10.3 7.2l14.4 21.8 7.2-.1v5.6z"/>
</svg>;
  }
});