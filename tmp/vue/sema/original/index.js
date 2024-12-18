import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SemaOriginalIcon',
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
	<path style={{"stroke":"none"}} d="M63.93 0C28.633 0 0 28.664 0 64s28.633 64 63.93 64c35.293 0 63.93-28.664 63.93-64S99.222 0 63.93 0ZM32.469 101.656l22.035-81.922h12.25l-22.031 81.922Zm70.355-30.094-6.691 5.418-10.645-12.085L74.395 76.98l-6.957-5.12 8.8-13.368L61.73 52.81l2.586-9.258 15.313 3.988 1.277-15.21h8.684l1.277 15.21 14.512-3.691 2.973 8.96-14.36 5.684Zm0 0"/>
</svg>;
  }
});