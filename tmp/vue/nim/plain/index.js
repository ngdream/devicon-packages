import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NimPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ffe953'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64.508 20.135v.004s-4.905 3.873-9.906 7.726a70.222 70.222 0 0 0-20.696 2.975c-5.028-3.2-9.463-6.715-9.463-6.715s-3.78 6.505-6.158 10.322a52.032 52.032 0 0 0-10.22 6.776C4.393 39.773.136 37.989 0 37.943c4.86 9.806 8.129 19.622 17.016 25.524 14.171-22.35 79.908-20.294 94.35-.13 9.32-4.881 12.977-15.335 16.634-25.026-.402.132-5.398 1.804-8.635 3.039a52.521 52.521 0 0 0-9.08-6.903c-2.455-4.498-6.03-10.574-6.03-10.574s-4.237 3.151-9.142 6.584a97.211 97.211 0 0 0-21.398-2.342c-4.572-3.776-9.207-7.98-9.207-7.98zm59.373 38.468a61.161 61.161 0 0 1-21.028 17.686 55.85 55.85 0 0 1-13.636 3.625L64.232 66.97 39.09 79.654a71.675 71.675 0 0 1-13.637-3.492 64.347 64.347 0 0 1-20.424-17.4l11.674 28.275c20.274 26.743 72.042 28.603 94.63.516 5.338-12.037 12.548-28.95 12.548-28.95z"/>
</svg>;
  }
});