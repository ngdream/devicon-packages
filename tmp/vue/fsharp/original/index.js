import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'FsharpOriginalIcon',
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
    return <svg {...props} version="1.2" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5z" fill="#378BBA"/>
	<path d="M39.1 64.5l21.7-21.7v43.4L39.1 64.5z" fill="#378BBA"/>
	<path d="M128 64.5L65.1 3.8v30.4l30.4 30.4-30.4 30.3v30.4L128 64.5z" fill="#30B9DB"/>
</svg>;
  }
});