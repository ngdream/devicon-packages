import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CmakePlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#0e8a16'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M62.8.4L.3 123.8l68.1-57.9zm61 127.3l-84-33.9L0 127.7zm4.2-1.1L65.6 2.5l9.2 102.6zM71.9 104l-3.1-34.9L42 92z"/>
</svg>;
  }
});