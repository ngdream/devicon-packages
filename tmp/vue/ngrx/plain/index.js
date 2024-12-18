import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NgrxPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#412846'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64.1 126.6l-.1-.1-.1.1v-.1L14 99.3 5.6 21.7 63.9 1.5v-.1h.2v.1l58.3 20.2-8.4 77.6-49.9 27.2zm29.1-82.3l-.1-.1.1.1zm0 0q4.9 17.8-12.1 31.1Q87.4 76.5 93 72q-9.8 10-20.8 10.3 4.3 4.9 11.4 4.7-16.3 3.8-29.1-11.4c-.6 2.8 1.2 6.2 5.3 10.2q-12.7-5.9-12.7-19-.2-14.2 14.9-18.5 28.8 11.9 30.2.6Q91 40.3 78.6 33q-8.7-5-17.1-4.5-3.4-3.5-7.8-3.3c-2 0-3.6.6-4.7 1.8-1.7 1.8-4.6 5.7-9.8 6.1q-5.3.4-5.2 5.1.1 4.8-.4 5.4-.5 1.1-3.1 3.3-2.6 2.1-2.6 4.1.2 4 1.5 5.9.6 2.8-.5 4.4c-1 1.5-1.6 2-1.3 3.6.4 1.6.4 2 4.1 5.9q3.4 10.8 12.5 17.9s9.5 8.8 24.3 8.8q22.9-1.1 31.4-21.7-8 6-12.9 6.4 15.3-8.6 13.5-25.1-4.2 8.1-7.4 10.6 4.3-6.8 4.2-12.9-.2-6-4.1-10.5zm-20.6-1.4c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.6 1.7-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.7-1.6 1.7z"/>
</svg>;
  }
});