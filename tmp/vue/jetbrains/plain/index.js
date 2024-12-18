import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JetbrainsPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#FDCC21'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M48.6 61.4c0-.5-.3-.8-1.1-.8h-1.4v1.5h1.4c.7 0 1.1-.2 1.1-.7zm13-.7h1.8l-.9-2.2zm-13.3-2.4c0-.5-.3-.7-1-.7h-1.1V59h1.1c.6.1 1-.2 1-.7zm6.7-.5h-1.2v1.9H55c.7 0 1.2-.4 1.2-1s-.5-.9-1.2-.9z"/>
	<path d="M125.9 65.5L60.7 2.7C59 1.1 56.7 0 54.1 0H54c-.4 0-.7 0-1 .1h-.3c-1.4.2-2.6.7-3.7 1.5L6.7 27.2c-1.2.6-2.3 1.5-3.2 2.5l-.2.2c-.3.3-.5.6-.8.9-.1.1-.2.2-.2.3-.2.4-.5.7-.7 1.1 0 .1-.1.1-.1.1-.2.4-.4.9-.6 1.3 0 .1-.1.2-.1.3-.1.3-.2.7-.3 1.1 0 .2-.1.3-.1.5-.1.3-.1.7-.2 1 0 .2-.1.3-.1.5-.1.5-.1 1-.1 1.5 0 .4 0 .8.1 1.2v.4c0 .3.1.5.1.8 0 .1.1.3.1.4.1.2.1.5.2.7 0 .1.1.3.1.4.1.2.2.5.3.7.1.3.2.6.4.9.1.1.1.3.2.4.1.2.2.4.4.7 0 .1.1.2.1.2.2.2.3.5.5.7 1.7 2.3 4.1 4 7 4.8l28.9 8.8v29.9h29.5l-29 14.2c-4.3 2.2-7 6.6-7 11.4 0 7.1 5.7 12.8 12.8 12.8 2.8 0 5.3-.9 7.4-2.4l73.1-50.1c1.6-1.1 2.7-3 2.7-5.2 0-1.9-.8-3.5-2-4.7zM38.4 43.4l-5.6-4.7L54 21.4l20.1 17H38.4v5zm21.1 3.3h-2.4v-1.9h7v1.9h-2.4v6h-2.2v-6zM44 55.9h3.8c1 0 1.7.3 2.2.7.3.3.5.8.5 1.3 0 .9-.5 1.5-1.2 1.8 1 .3 1.6.9 1.6 1.9 0 1.4-1.1 2.2-3 2.2H44v-7.9zm5.9-3.2v-8h6.4v1.9h-4.2v1.2h3.8v1.8h-3.8v1.3h4.3v1.9h-6.5zm-6.8-1.1l1.4-1.3c.4.5.8.7 1.3.7s.9-.4.9-1.1v-5h2.2V50c0 1-.3 1.7-.8 2.3-.5.5-1.3.8-2.2.8-1.4-.2-2.2-.8-2.8-1.5zm20 31.5H43.9v-3.2h19.2v3.2zm-7-19.2l-1.6-2.4h-.7v2.4h-2.2v-8h3.5c1.2 0 2.1.3 2.6.8s.7 1.1.7 1.9c0 1.2-.6 2-1.6 2.5l1.5 2.3c.4-.9 3.2-7.6 3.2-7.6h2.1l3.4 8.1h-2.4l-.6-1.5h-3.1l-.6 1.5m9.2-.1h-2.2v-8h2.2v8zm8 0h-1.9l-3-4.3v4.3h-2.2v-8h2.1l2.9 4.2v-4.2h2.2v8zm7.3-2.4c0 1.6-1.3 2.6-3.2 2.6-1.3 0-2.7-.4-3.7-1.3l1.2-1.5c.8.6 1.7 1 2.6 1 .6 0 .9-.2.9-.5s-.3-.5-1.4-.8c-1.7-.4-3-.9-3-2.5 0-1.5 1.2-2.6 3.1-2.6 1.4 0 2.4.4 3.3 1.1l-1.1 1.6c-.7-.5-1.5-.8-2.3-.8-.5 0-.8.2-.8.5 0 .4.3.5 1.4.8 1.9.2 3 .8 3 2.4zm4.7 17.5V51.3l20.8 17.5-20.8 10.1z"/>
</svg>;
  }
});