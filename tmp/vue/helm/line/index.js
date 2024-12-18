import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HelmLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#0F1689'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M35.9 40.5h-8.3c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4.2-.7 1.8-3 3.6-4.9 1.4-1.5 2.7-2.8 4-4.1 0 0-.1 0-.1-.1-3.4-3.3-5.9-7-7.3-11.2-.4-1.1-.7-2.4-.7-3.8v-.4c.1-1 .4-1.8 1-2.2.6-.5 1.4-.6 2.4-.3.6.1 1.1.4 1.6.7 1.6.8 3 1.9 4.6 3.7 2.3 2.5 4.2 5.5 5.5 8.6 6.1-3.6 13-5.8 19.9-6.3v-.1c-.7-3.3-1-6.6-.7-9.6 0-1.9.4-3.8 1.1-5.9.3-1.1.9-2 1.5-2.7.2-.4.6-.6.9-.8.8-.5 1.8-.5 2.6 0 .6.4 1.2 1 1.7 1.9.7 1.4 1.2 2.7 1.4 3.9.6 2.9.8 5.8.5 8.7-.1 1.6-.4 3.2-.8 4.7 1.6.3 3.2.5 4.9.9 2 .4 3.7.9 5.3 1.6 1.8.6 3.6 1.5 5 2.2 1 .5 2 1.1 2.9 1.6.4.3.9.5 1.3.8 1.7-4.6 4.6-8.9 8.5-12.2.9-.8 2-1.5 3.2-1.9.3-.1.7-.2 1.1-.2.8-.1 1.4.1 2 .5.5.4.9 1.2.9 2.1.1.8 0 1.8-.2 2.8-.6 2.3-1.5 4.4-2.8 6.5-1.8 3-3.8 5.4-6.4 7.5 2.4 2.3 4.6 4.9 6.5 7.7.1.2.1.3 0 .5s-.3.3-.4.3c-.1.1-.3.1-.4.1H93c-.5 0-1-.4-1.2-.5-5.8-6.5-13.6-10.7-22.1-12-2.5-.4-5-.5-7.6-.3-7.5.5-14.9 3.4-20.6 8.1-1.6 1.3-3 2.6-4.2 4-.3.4-.9.7-1.4.7zm-7.5-1h7.5c.2 0 .5-.1.6-.3 1.3-1.5 2.8-2.9 4.4-4.2 5.9-4.9 13.4-7.8 21.2-8.3 2.6-.2 5.3-.1 7.8.3 8.7 1.3 16.8 5.6 22.7 12.2.1.1.3.2.4.2h7.6c-1.9-2.6-4-5-6.3-7.2-.2-.2-.2-.4-.1-.6.1-.2.3-.3.4-.4 2.6-2.1 4.6-4.5 6.3-7.4 1.2-2 2.1-4 2.6-6.2.2-.9.3-1.7.2-2.5 0-.5-.2-1-.6-1.4-.3-.2-.7-.3-1.3-.3-.3 0-.5.1-.8.2-1 .4-2 .9-2.8 1.7-3.7 3.2-6.6 7.3-8.3 11.9-.1.1-.1.2-.1.2 0 .1-.1.2-.2.4-.2.2-.4.2-.6.1-.6-.3-1.2-.7-1.8-1.1-1-.6-1.9-1.1-2.9-1.6-1.4-.7-3.2-1.5-4.9-2.2-1.6-.7-3.2-1.1-5.1-1.6-1.8-.4-3.6-.7-5.4-1-.1 0-.3-.1-.3-.2-.1-.1-.1-.3-.1-.4.5-1.6.8-3.4.9-5 .3-2.8.1-5.6-.5-8.4-.2-1.1-.6-2.3-1.3-3.7-.4-.7-.8-1.2-1.3-1.5-.4-.3-1-.3-1.4 0-.3.2-.5.3-.7.6-.5.7-1 1.5-1.3 2.4-.6 2-1 3.8-1.1 5.5-.3 3 0 6.2.7 9.4v.5c.1.1.1.3 0 .5-.1.1-.2.2-.4.2-7 .5-14.1 2.7-20.3 6.5-.3.2-.7-.1-.8-.2 0 0-.2-.2-.2-.4-1.3-3.1-3.1-6-5.4-8.4-1.5-1.7-2.8-2.8-4.4-3.6-.4-.3-.8-.5-1.3-.6-.7-.2-1.2-.1-1.6.2-.4.3-.6.8-.6 1.5v.4c0 1.3.3 2.5.7 3.5 1.4 4 3.8 7.6 7 10.8.1.1.2.2.3.2l.1.1c.1.1.2.2.3.4 0 .2 0 .3-.1.4-1.5 1.5-2.9 2.9-4.4 4.5-1.3 1.5-2.5 3-3 3.9zm13.4-13.4zM65.8 128.1c-.7 0-1.4-.3-2-1-.5-.5-.8-1.1-1.1-1.6-.9-1.6-1.3-3.4-1.5-4.9-.4-2.2-.5-4.5-.4-7 .1-1.9.3-3.6.7-5-7.1-.5-13.8-2.5-19.9-6.2l-.1.1c-1.9 4.3-4.5 8-7.9 10.9-.9.8-2 1.5-3.2 1.9-.6.2-1.3.3-1.9.2-.8-.1-1.4-.7-1.8-1.5-.5-1-.3-2-.2-2.9.2-1.2.5-2.4 1.1-3.8 1.4-3.5 3.7-6.8 6.8-9.9l.1-.1c-2.8-2.5-5.1-5.1-6.9-7.8-.1-.2-.1-.3 0-.5s.3-.3.4-.3h.2c.1 0 .2-.1.4-.1h8c.5 0 .9.2 1.3.5 2.8 3 6.1 5.4 9.9 7.4 3.8 2 8.1 3.3 12.4 3.7 11.8 1.2 22.1-2.5 30.5-10.9.6-.6 1.3-.8 1.9-.7h8c.1 0 .3.1.4.1l.1.1c.2.2.2.4.1.6-1.7 2.4-3.6 4.6-5.8 6.7h.1c4 3.4 7 7.7 8.8 12.6.4 1.2.6 2.6.6 3.8 0 .3-.1.6-.2.9l-.1.2c-.4 1.2-1.6 1.9-2.7 1.7-.5-.1-1.1-.3-1.8-.5-1-.5-1.8-1-2.4-1.6-3.8-3.2-6.8-7.4-8.5-12.1-1.9 1.3-3.8 2.3-5.9 3.3-2.5 1.1-4.8 2-6.9 2.5-1.9.5-4.2 1-6.7 1.3v.1c.7 2.9 1 6.1.8 9.5-.1 1.9-.5 3.8-1.1 5.9-.2.6-.5 1.2-.8 1.8l-.3.6c-.1.2-.2.3-.4.5-.1.1-.2.2-.3.4-.5.8-1.1 1.1-1.8 1.1zm-24.4-26.9c.1 0 .2 0 .3.1 6.2 3.8 13.1 6 20.4 6.4.1 0 .2.1.3.1.2.2.2.5.2.6 0 .1 0 .2-.1.4v.2c-.3 1.4-.6 3-.7 4.9-.1 2.4 0 4.6.4 6.7.3 1.4.6 3.1 1.4 4.6.3.7.6 1.1.9 1.4.3.3.7.7 1.2.7s1-.4 1.2-.7c.1-.1.2-.2.3-.4.1-.1.2-.2.3-.4l.3-.5c.3-.6.6-1.1.8-1.6.6-2 1-3.8 1.1-5.6.2-3.3-.1-6.5-.8-9.3v-.5c-.1-.1-.1-.3 0-.5s.2-.2.4-.3c2.7-.3 5.1-.9 7.1-1.4 2-.5 4.2-1.3 6.7-2.5 2.2-1 4.3-2.2 6.2-3.5.1-.1.3-.1.4-.1.1 0 .3.1.3.3.1.1.1.2.1.3.1.1.1.1.1.2 1.7 4.6 4.5 8.7 8.3 11.8.6.5 1.4 1 2.2 1.4.5.2 1.1.4 1.6.5.6.1 1.3-.3 1.5-1l.1-.2c.1-.3.1-.5.1-.6 0-1.2-.2-2.4-.6-3.5-1.6-4.7-4.5-8.9-8.4-12.1-.2-.1-.4-.3-.6-.5-.1-.1-.1-.2-.1-.4 0-.1.1-.3.2-.4 2.1-2 3.9-4.1 5.6-6.3h-7.3c-.4-.1-.8.1-1.1.5-8.7 8.6-19.2 12.4-31.3 11.2-4.4-.4-8.8-1.7-12.8-3.8-3.9-2-7.3-4.5-10.1-7.5-.2-.2-.3-.2-.5-.2h-8c1.8 2.5 4 4.9 6.7 7.3.1.1.2.2.2.4s-.1.3-.1.4c0 .1-.1.2-.2.3-.1.1-.2.1-.3.2-3 3-5.2 6.2-6.6 9.6-.6 1.4-.9 2.5-1.1 3.6-.1.8-.2 1.6.2 2.4.2.4.5.8 1 .9.4.1.9 0 1.3-.2 1.1-.4 2-.9 2.9-1.7 3.3-2.8 5.8-6.3 7.7-10.5l.3-.6.3-.3c0-.3 0-.3.1-.3zm-5.6-3.8zM114 78.3c-1.4 0-2.8 0-3.1-.1-.2-.1-.4-.3-.4-.5V64.8c-.9.8-1.8 1.7-2.7 2.5-1.2 1.1-2.3 2.1-3.5 3.2-.2.2-.5.2-.7 0-2-1.9-4.1-3.8-6.3-5.7v13c0 .3-.2.5-.5.5h-7c-.2 0-.4-.1-.5-.3-.3-.8-.2-27.3-.2-27.5 0-.3.2-.5.5-.5h2c1-.1 1.7.3 2.3.8 3.2 2.9 6.4 6 9.7 8.9l.4.3.2-.2c1.1-1 2.2-2 3.3-3.1 2.2-2 4.5-4.1 6.6-6.2.4-.4.8-.5 1.4-.5h2.5c.3 0 .5.2.5.5v27.2c0 .2-.2.4-.4.5-.2 0-2.2.1-4.1.1zm-2.5-1c1.2.1 4.8.1 6 0V51h-2c-.3 0-.6.1-.7.3-2.1 2.1-4.4 4.2-6.6 6.2-1.1 1-2.2 2-3.3 3.1l-.3.3c-.1.1-.2.1-.2.2-.2.2-.5.2-.7 0l-.5-.5c-3.3-3-6.5-6-9.7-8.9-.5-.4-.9-.6-1.5-.6-.5.1-1 0-1.5 0h-.2c-.1 3.8 0 23.2.2 26.3h6V63.9c0-.1.1-.3.1-.3l.1-.1c.2-.2.5-.2.7 0 2.3 2 4.5 4 6.7 6 1-.9 2.1-1.9 3.1-2.9 1.1-1.1 2.3-2.1 3.4-3.2.2-.2.5-.2.7 0l.1.1c.1.1.1.2.1.3v13.5zM13.4 78.2c-1.6 0-3.3-.1-3.6-.2-.2-.1-.3-.3-.3-.5v-27c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v9.2c1.4.1 6.1.1 7.6 0v-9.2c0-.3.2-.5.5-.5h6.9c.2 0 .4.1.5.3.2.6.2 26.8 0 27.5-.1.2-.3.3-.5.3h-6.9c-.3 0-.5-.2-.5-.5-.1-1.1 0-2.3 0-3.5v-6.4h-7.6v9.7c0 .2-.1.4-.3.5-.4.3-2.1.3-3.8.3zm-2.9-1c1.2.1 4.8.1 6 0v-9.8c0-.3.2-.5.5-.5h8.6c.3 0 .5.2.5.5v9.9h6c.1-3 .1-23 0-26.2h-5.9v9.1c0 .2-.2.4-.4.5-.8.2-8.2.2-8.9 0-.2-.1-.3-.3-.3-.5V51h-6v26.2zm15.1-17.1zM57.4 78.2H40.8c-.3 0-.5-.2-.5-.5V50.6c0-.2.2-.4.4-.5.6-.2 16.1-.2 16.8-.1.3 0 .5.2.5.5v5.8c0 .3-.2.5-.5.5h-.3c-.2 0-.3.1-.4.1h-8.4v3.5h8c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5h-8c-.1.9-.1 3 0 4.1h9.1c.3 0 .5.2.5.5v5.8c-.1.2-.4.4-.6.4zm-16.2-1h15.6v-4.8h-8.4c-.1 0-.3 0-.4-.1h-.3c-.3 0-.5-.2-.5-.4-.1-.9-.1-4.6.1-5.3.1-.2.3-.3.5-.3h7.9v-5h-8c-.3 0-.5-.2-.5-.5v-4.5c0-.3.2-.5.5-.5h9.1V51c-2.4-.1-13.3 0-15.6.1v26.1zM82 78.3c-.1 0-.1 0 0 0l-16.6-.1c-.2 0-.5-.2-.5-.4-.1-.7-.1-26.8 0-27.4 0-.2.3-.4.5-.4h6.9c.3 0 .5.2.5.5v19.6c.1 0 .2 0 .4.1H82c.3 0 .5.2.5.5v7.1c0 .1-.1.3-.1.4-.2 0-.3.1-.4.1zm-16.2-1.1 15.6.1v-6.1h-8.6c-.1-.2-.3-.2-.6-.2s-.5-.2-.5-.5V51h-5.9v26.2z"/>
</svg>;
  }
});