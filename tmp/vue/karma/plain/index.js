import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KarmaPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#56c5a8'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M77.281 89.582l19.625 37.84h31.02l-35.153-67.14-15.492 29.3m-62.535 20.29l14.367-17.497 22.973 35.047-14.746-70.3-12.45 26.472-10.144 26.277m0 0L37.34 57.117 22.977 74.625 0 39.575l14.746 70.296M124.97.391h-31.02l-19 36.285V.39H46.492v37.632l15.172 72.282 3.535 17.117h9.75V95.664L124.97.391"/>
</svg>;
  }
});