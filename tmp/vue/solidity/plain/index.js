import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SolidityPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#383838'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M43.322 0L22.756 36.576l20.566 36.561 20.564-36.561h41.143L84.465 0H43.322zm41.342 54.863L64.1 91.424H22.955L43.519 128h41.145l20.58-36.576-20.58-36.561z"/>
</svg>;
  }
});