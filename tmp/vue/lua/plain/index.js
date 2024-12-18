import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'LuaPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000080'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M61.7 0c-1.9 0-3.8.2-5.6.4l.2 1.5c1.8-.2 3.6-.4 5.5-.4L61.7 0zm5.6 0-.1 1.5c1.8.1 3.6.3 5.4.5l.3-1.5C71 .3 69.2.1 67.3 0zm45.7.8c-7.9 0-14.4 6.3-14.4 14.3S105 29.4 113 29.4s14.3-6.4 14.3-14.3S120.9.8 113 .8zm-62.4.6c-1.8.4-3.6.9-5.4 1.4l.4 1.4c1.7-.5 3.5-1 5.3-1.4l-.3-1.4zm27.6.3-.3 1.4c1.8.4 3.6.8 5.3 1.4l.4-1.3c-1.8-.6-3.6-1.1-5.4-1.5zm-38.3 3c-1.7.7-3.4 1.5-5.1 2.3l.7 1.3c1.6-.8 3.3-1.6 5-2.3l-.6-1.3zm49 .3-.5 1.4c1.6.7 3.3 1.5 4.9 2.3l.6-1.3c-1.6-.9-3.3-1.7-5-2.4zM30 9.7c-1.6 1-3.1 2.1-4.6 3.2l.9 1.2c1.4-1.1 2.9-2.1 4.5-3.2L30 9.7zm34 5.4c-27 0-49 21.9-49 49s21.9 49 49 49 49-21.9 49-49-22-49-49-49zm-42.9 1.4c-1.4 1.2-2.7 2.5-4 3.9l1.1 1c1.2-1.3 2.5-2.6 3.9-3.8l-1-1.1zm-7.6 8.2c-1.1 1.4-2.2 2.9-3.2 4.5l1.2.8c1-1.5 2-3 3.2-4.4l-1.2-.9zm70.8 4.7c7.9 0 14.3 6.4 14.3 14.3S92.2 58 84.3 58 70 51.6 70 43.7s6.4-14.3 14.3-14.3zM7.4 34.1c-.9 1.6-1.7 3.3-2.4 5l1.4.5c.7-1.6 1.5-3.3 2.3-4.8l-1.3-.7zm113.6.8-1.3.7c.9 1.6 1.6 3.3 2.3 5l1.3-.6c-.7-1.7-1.5-3.4-2.3-5.1zM3.1 44.3c-.6 1.8-1.1 3.6-1.5 5.4L3 50c.4-1.8.9-3.5 1.5-5.2l-1.4-.5zm122.1 1-1.4.4c.6 1.7 1 3.5 1.4 5.3l1.4-.3c-.4-1.8-.9-3.6-1.4-5.4zM.5 55.1C.3 57 .1 58.8 0 60.7l1.5.1c.1-1.8.3-3.6.5-5.4l-1.5-.3zm127.1 1.1-1.5.2c.2 1.8.3 3.6.4 5.4h1.5c0-1.9-.2-3.8-.4-5.6zm-96.9.2h4.1v28.5h15.9v3.6h-20V56.4zm57.7 8.3c5.7 0 8.7 2.2 8.7 6.3v13.6c0 1.1.7 1.8 2 1.8.2 0 .4 0 .8-.1l-.1 2.8c-1.2.3-1.8.4-2.5.4-2.4 0-3.5-1.1-3.8-3.4-2.6 2.4-4.9 3.4-7.8 3.4-4.7 0-7.6-2.6-7.6-6.8 0-3 1.4-5.1 4.1-6.2 1.4-.6 2.2-.7 7.4-1.4 2.9-.4 3.8-1 3.8-2.6v-1c0-2.2-1.9-3.4-5.2-3.4-3.4 0-5.1 1.3-5.4 4.1h-3.7c.1-2.3.5-3.6 1.6-4.8 1.5-1.7 4.3-2.7 7.7-2.7zm-33.8.7h3.7v16.3c0 2.8 1.9 4.5 4.8 4.5 3.8 0 6.3-3.1 6.3-7.8v-13H73v23.1h-3.3v-3.2c-2.2 3-4.3 4.2-7.7 4.2-4.5 0-7.4-2.5-7.4-6.3V65.4zm-53.1.8-1.5.1c.1 1.9.2 3.7.5 5.6l1.4-.3c-.2-1.8-.3-3.6-.4-5.4zm124.9 1.1c-.1 1.8-.3 3.6-.5 5.4l1.5.2c.3-1.8.5-3.7.5-5.5l-1.5-.1zM2.8 77.1l-1.4.3c.4 1.8.9 3.6 1.4 5.4l1.4-.4c-.6-1.8-1-3.5-1.4-5.3zm90.6 0c-1.2.6-2 .7-5.9 1.3-3.9.5-5.6 1.8-5.6 4.2 0 2.3 1.7 3.7 4.5 3.7 2.2 0 4-.7 5.5-2.1 1.1-1 1.5-1.8 1.5-3v-4.1zm31.6.9c-.5 1.8-.9 3.6-1.5 5.3l1.4.5c.6-1.8 1.1-3.6 1.5-5.5L125 78zM6 87.5l-1.3.5c.7 1.7 1.5 3.4 2.3 5.1l1.3-.6c-.9-1.7-1.6-3.3-2.3-5zm115.7 1c-.8 1.6-1.5 3.3-2.4 4.9l1.3.7L123 89l-1.3-.5zM10.9 97.2l-1.2.8c1 1.6 2.1 3.1 3.2 4.6l1.1-.9c-1.1-1.5-2.1-3-3.1-4.5zm105.6.9c-1 1.5-2.1 3-3.2 4.4l1.2.9c1.1-1.4 2.2-3 3.2-4.5l-1.2-.8zm-98.9 7.8-1.1 1c1.2 1.4 2.5 2.7 3.9 4l1-1.1c-1.3-1.2-2.6-2.6-3.8-3.9zm92.2.8c-1.2 1.3-2.6 2.6-3.9 3.8l1 1.1c1.3-1.3 2.7-2.6 4-3.9l-1.1-1zm-84.2 6.6-.9 1.2c1.4 1.1 2.9 2.2 4.5 3.2l.8-1.2c-1.5-1-3-2.1-4.4-3.2zm76.1.7c-1.5 1.1-3 2.1-4.5 3.1l.8 1.2c1.5-1 3.1-2 4.6-3.1l-.9-1.2zm-67 5.3-.7 1.3c1.6.9 3.3 1.7 5 2.4l.6-1.3c-1.6-.8-3.3-1.5-4.9-2.4zm57.7.4c-1.7.9-3.3 1.6-5 2.3l.6 1.4c1.7-.7 3.4-1.5 5.1-2.4l-.7-1.3zm-47.7 3.8-.5 1.4c1.8.6 3.6 1.1 5.4 1.5l.4-1.4c-1.8-.5-3.6-.9-5.3-1.5zm37.6.3c-1.8.6-3.5 1-5.3 1.4l.3 1.4c1.9-.3 3.7-.8 5.4-1.4l-.4-1.4zm-27 2.2-.2 1.5c1.9.2 3.7.4 5.6.5v-1.5c-1.8-.1-3.6-.3-5.4-.5zm16.3.1c-1.8.2-3.6.3-5.4.4l.1 1.5c1.8-.1 3.7-.2 5.5-.4l-.2-1.5z"/>
</svg>;
  }
});