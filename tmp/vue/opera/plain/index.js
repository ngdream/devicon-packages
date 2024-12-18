import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'OperaPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#f7192d'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M42.933 27.941c5.871-6.934 13.457-11.117 21.742-11.117 18.633 0 33.734 21.125 33.734 47.18s-15.102 47.18-33.734 47.18c-8.285 0-15.871-4.18-21.742-11.113 9.18 11.926 22.828 19.484 38.07 19.484 9.375 0 18.145-2.863 25.645-7.836C119.75 100 127.996 82.965 127.996 64.004s-8.246-35.988-21.344-47.707c-7.5-4.977-16.273-7.84-25.648-7.84-15.242 0-28.891 7.562-38.07 19.484M63.996.008C28.652.008 0 28.66 0 64.008c0 34.32 27.02 62.332 60.949 63.922a65.64 65.64 0 003.047.074 63.77 63.77 0 0042.652-16.285c-7.5 4.973-16.273 7.836-25.645 7.836-15.242 0-28.891-7.562-38.07-19.484-7.078-8.352-11.66-20.699-11.973-34.559V62.5c.313-13.859 4.895-26.207 11.973-34.559C52.113 16.016 65.762 8.457 81 8.457c9.375 0 18.148 2.863 25.652 7.84C95.383 6.219 80.531.07 64.238.008zm0 0"/>
</svg>;
  }
});