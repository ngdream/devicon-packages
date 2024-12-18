import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GitterPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M96.8 25.6H107v51.2H96.8zM71.2 25.6h10.2V128H71.2zM45.6 25.6h10.2V128H45.6zM20 0h10.2v76.8H20z"/>
</svg>;
  }
});