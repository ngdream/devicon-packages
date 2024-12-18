import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PandasPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#130754'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M90.248 0v96.555h13.988V0H90.248zM46.236 7.566v29.05h13.989V7.565H46.236zm-22.472 23.88V128h13.988V31.445H23.764zm44.482.034v29.047h13.988V31.48H68.246zm-22.01 13.612v13.705h13.989V45.092H46.236zm0 22.143V96.28h13.989V67.234H46.236zm22.01 1.777v13.705h13.988V69.012H68.246zm0 22.19v29.046h13.988V91.201H68.246z"/>
</svg>;
  }
});