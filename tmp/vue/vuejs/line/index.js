import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VuejsLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#41B883'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 8.934l49.854.158 14.299 24.415 14.3-24.415L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.14-.008l-22.749.168-14.938 25.033L49.215 9.73l-22.794-.168 37.731 64.476z"/>
</svg>;
  }
});