import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'StackoverflowOriginalIcon',
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
	<path d="M101.072 82.51h11.378V128H10.05V82.51h11.377v34.117h79.644zm0 0" fill="#bbb"/>
	<path d="m33.826 79.13 55.88 11.738 2.348-11.166-55.876-11.745Zm7.394-26.748 51.765 24.1 4.824-10.349-51.768-24.1Zm14.324-25.384L99.428 63.53l7.309-8.775-43.885-36.527ZM83.874 0l-9.167 6.81 34.08 45.802 9.163-6.81Zm-51.07 105.254h56.89V93.881h-56.89Zm0 0" fill="#f58025"/>
</svg>;
  }
});