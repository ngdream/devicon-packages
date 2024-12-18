import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'RockylinuxOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#10b982'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M 124.4375 85.105469 C 126.746094 78.496094 128 71.394531 128 64 C 128 28.652344 99.347656 0 64 0 C 28.652344 0 0 28.652344 0 64 C 0 81.488281 7.015625 97.339844 18.386719 108.890625 L 83.304688 43.972656 Z M 112.746094 105.46875 L 83.304688 76.027344 L 37.199219 122.132812 C 45.351562 125.898438 54.429688 128 64 128 C 83.523438 128 101.007812 119.257812 112.746094 105.46875 Z M 112.746094 105.46875 "/>
</svg>;
  }
});