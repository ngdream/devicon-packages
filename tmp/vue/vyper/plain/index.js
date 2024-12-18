import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VyperPlainIcon',
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
	<path d="m0.95312 9.125 15.047 26.062 15.047-26.062h-30.094zm96 0 15.047 26.062 15.047-26.062h-30.094zm-64.953 0.55078-15.363 26.611 15.363 26.611 15.363-26.611-15.363-26.611zm64 0-15.363 26.611 15.363 26.611 15.363-26.611-15.363-26.611zm-39.682 13.305-7.6836 13.307 15.365 26.613 15.363-26.613-7.6816-13.307h-15.363zm-8.3184 14.408-7.709 13.352-7.6562 13.26 15.365 26.613 15.363-26.613-15.363-26.611zm32 0.001953-15.363 26.609 15.363 26.611 15.363-26.611-15.363-26.609zm-16 27.711-15.363 26.611 15.363 26.611 15.363-26.611-15.363-26.611z"/>
</svg>;
  }
});