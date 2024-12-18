import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KtorPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#fc801d'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M47.543 14.629 14.629 47.543l32.414 32.414V47.043h32.914L47.543 14.629zm.5 33.414v31.914h31.914V48.043H48.043zm32.914 0v32.914H48.043l32.414 32.414 32.914-32.914-32.414-32.414z"/>
</svg>;
  }
});