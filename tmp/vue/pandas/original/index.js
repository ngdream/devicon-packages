import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PandasOriginalIcon',
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
	<path d="M46.236 7.567h13.99v29.047h-13.99Zm0 59.668h13.99V96.28h-13.99Z" fill="#130754"/>
	<path d="M46.236 45.092h13.99v13.705h-13.99Z" fill="#ffca00"/>
	<path d="M23.763 31.446h13.989V128h-13.99ZM68.245 91.2h13.99v29.046h-13.99Zm0-59.72h13.99v29.047h-13.99Z" fill="#130754"/>
	<path d="M68.245 69.011h13.99v13.705h-13.99Z" fill="#e70488"/>
	<path d="M90.248 0h13.99v96.554h-13.99Z" fill="#130754"/>
</svg>;
  }
});