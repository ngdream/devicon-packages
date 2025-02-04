import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'MinitabPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#8dc63f'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 0v128h128V0H0zm34.6 106.5H14.8v-54h19.7v54zm27.1 0H42v-87h19.7v87zm27.1 0H69.1V37.6h19.7v68.9zm27.2 0H96.3V68.6H116v37.9z"/>
</svg>;
  }
});