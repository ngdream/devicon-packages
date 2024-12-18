import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KotlinPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#c711e1'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0"/>
</svg>;
  }
});