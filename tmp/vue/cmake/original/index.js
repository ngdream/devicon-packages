import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CmakeOriginalIcon',
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
	<path d="M62.8.4L.3 123.8l68.1-57.9z" fill="#064F8C"/>
	<path d="M123.8 127.7l-84-33.9L0 127.7z" fill="#249847"/>
	<path d="M128 126.6L65.6 2.5l9.2 102.6z" fill="#BE2128"/>
	<path d="M71.9 104l-3.1-34.9L42 92z" fill="#CDCDCE"/>
</svg>;
  }
});