import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TrpcPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#398ccb'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 38C0 17 17 0 38 0h52c21 0 38 17 38 38v52c0 21-17 38-38 38H38c-21 0-38-17-38-38zm46.1-9v5.9l-21 12.2v21.3l-5.6 3.2v20.5l17.8 10.3 7.7-4.5 19.1 11 19.2-11.1 7.9 4.6 17.7-10.2V71.6l-5.8-3.3V47.1L81.6 34.6V29L63.9 18.7zm52.4 20.8v15.9l-7.4-4.3-17.8 10.3v20.5l5.3 3-14.6 8.4-14.4-8.3 5.4-3.1V71.7L37.2 61.4l-7.6 4.4v-16L46 40.3h.1v9.3l17.7 10.2 17.8-10.2V40zM78 89.6V77.1l10.8 6.2v12.5zm26.3 0-10.9 6.3V83.4l10.9-6.3zm-80.2 0V77.1L35 83.3v12.6zm26.2 0-10.8 6.2V83.3L50.3 77zm29.9-16.4 10.9-6.3 10.8 6.3-10.8 6.2zm-32.2 0-10.9 6.3-10.8-6.3 10.8-6.3zm2.7-26.1V34.6l10.8 6.2v12.6zm26.2 0-10.8 6.2V40.8l10.8-6.3zM53 30.6l10.8-6.2 10.8 6.2-10.8 6.3z"/>
</svg>;
  }
});