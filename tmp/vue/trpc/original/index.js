import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TrpcOriginalIcon',
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
	<path d="M0 38C0 17 17 0 38 0h52c21 0 38 17 38 38v52c0 21-17 38-38 38H38c-21 0-38-17-38-38z" fill="#398ccb"/>
	<path d="M63.9 18.8 81.6 29v5.6l21.5 12.5v21.2l5.8 3.3v20.6l-17.7 10.2-7.9-4.6-19.2 11.1-19.1-11-7.7 4.5-17.8-10.3V71.6l5.6-3.2V47.1l21-12.2V29zM81.7 40v9.6L63.9 59.8 46.2 49.6v-9.3l-16.5 9.5v16l7.6-4.4 17.8 10.3v20.5l-5.4 3.1 14.5 8.3 14.5-8.4-5.3-3V71.7l17.8-10.3 7.4 4.3V49.8zm7.2 55.8V83.2L78.1 77v12.5zM104.3 77l-10.8 6.3v12.5l10.8-6.3zM35 95.8V83.3L24.1 77v12.5zm15.5-18.7-10.8 6.2v12.5l10.8-6.2zm40.7 2.3 10.9-6.3-10.9-6.2-10.8 6.2zM37.3 66.9l-10.8 6.2 10.8 6.3 10.8-6.3zm24.3-13.6V40.8l-10.8-6.2v12.5zm15.5-18.8-10.9 6.3v12.5L77.1 47zm-13.2 2.3 10.9-6.3-10.9-6.2-10.8 6.2z" fill="#fff"/>
</svg>;
  }
});