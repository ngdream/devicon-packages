import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ModxOriginalIcon',
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
	<path d="M63.864 14.059l-8.29 13.317 43.215 26.5 24.869-39.817z" fill="#00b5de"/>
	<path className="modx-original-st2" d="M99.06 58.089l-27.178 42.806L111.97 125.9V66.106z" fill="#ff5529"/>
	<path className="modx-original-st3" d="M29.483 69.911l69.306-16.035L15.622 2.1v59.794z" fill="#00decc"/>
	<path className="modx-original-st4" d="M64.136 113.67L99.06 58.088 29.21 74.532 4.342 113.669z" fill="#ff9640"/>
</svg>;
  }
});