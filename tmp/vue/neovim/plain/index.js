import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NeovimPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#5fb950'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M88.963 0v70.438l22.906 34.445 4.658-5.059-.185-72.312zM38.97.008 19.283 19.895l70.26 106.918 19.65-19.65ZM16.615 21.855l-5.142 5.192v72.988L39.496 128V55.93Zm-.152 1.592 22.02 32.791v69.32L12.487 99.616V27.463Z"/>
</svg>;
  }
});