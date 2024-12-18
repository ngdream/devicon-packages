import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NetlifyPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#05BDBA'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zM80.46 82.605h-8.777l-.733-.733V61.326c0-3.656-1.436-6.489-5.844-6.588-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.734h19.753c7.677 0 13.899 6.222 13.899 13.9v21.942Zm-53.107-48.79v-1.208l6.033-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.241 68.236h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"/>
</svg>;
  }
});