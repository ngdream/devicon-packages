import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ReplitOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#F26207'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M11 8c0-2.122.845-4.157 2.35-5.657A8.037 8.037 0 0 1 19.026 0h37.45a8.04 8.04 0 0 1 5.675 2.343A7.987 7.987 0 0 1 64.5 8v34.667H19.025a8.037 8.037 0 0 1-5.674-2.343A7.987 7.987 0 0 1 11 34.666V8Zm53.5 34.667h45.475a8.04 8.04 0 0 1 5.675 2.343 7.987 7.987 0 0 1 2.35 5.657v26.666a7.987 7.987 0 0 1-2.35 5.657 8.04 8.04 0 0 1-5.675 2.343H64.5V42.667ZM11 93.333c0-2.121.845-4.156 2.35-5.656a8.037 8.037 0 0 1 5.675-2.344H64.5V120a7.987 7.987 0 0 1-2.35 5.657A8.039 8.039 0 0 1 56.475 128h-37.45a8.039 8.039 0 0 1-5.674-2.343A7.987 7.987 0 0 1 11 120V93.333Z"/>
</svg>;
  }
});