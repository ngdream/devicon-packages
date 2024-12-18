import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'DigitaloceanOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#0080FF'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64.1424 102.9593H39.2391V78.5231h24.9033ZM39.2391 122.132H20.3732v-19.1726h18.866Zm-18.8659-19.1726H4.5301v-15.792h15.8431Zm43.3934 24.8132v-24.8132c26.4107 0 46.784-25.9396 36.5973-53.3885-3.7744-10.1506-11.694-18.419-22.2605-22.1813-27.1663-9.7717-53.2 10.5274-53.2 36.468H0C0 22.5037 40.3707-10.206 84.5197 3.3281c19.2427 6.0173 34.3342 21.0547 40.3706 40.2293 13.5812 43.9857-19.2457 84.215-61.1237 84.215Zm0 0"/>
</svg>;
  }
});