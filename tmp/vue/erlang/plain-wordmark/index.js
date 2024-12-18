import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ErlangPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#a90533'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M18.2 8.9L1 9v80h19.7v-.2C11 78.4 5.2 64 5.3 47 5.2 31.8 10 18.8 18.2 8.9zm92.3-.1zm.1.2c6.2 8 9.6 19.3 9.1 32.1.1 1.2.1 1.9 0 4.9H46.3c0 21 7.7 38.2 27.3 38.3 13.5-.1 23.2-10.1 29.9-21l19 9.7c-3.4 6-7.2 11-11.4 16H127V9h-16.4zm.5 79.6zm-46-78c-9 0-16.8 6.4-17.6 16.4H81c-.3-10-6.8-16.4-15.9-16.4zM1 118h10v-3H5v-5h6v-3H5v-5h6v-3H1zm31.8-13.2c-.1-4.2-2.8-5.8-6.6-5.8H21v19h4v-7.4l4.5 7.4h4.7l-5.5-8c2.6-.4 4-2.6 4.1-5.2zm-7.6 3.2H25v-6h.2c2.1 0 3.6.6 3.6 3.1 0 2.3-1.5 2.9-3.6 2.9zM46 99h-4v19h10v-3h-6zm20.3-1l-7.8 20h4l1.7-4H71l1.7 4h4l-7.4-20h-3zm-1 13l2.1-7.4L70 111h-4.7zm31.7 1.1L86.7 98H84v20h4v-12.8L98.3 119h2.7V99h-4zm21-4.1v3h4c-.1 3-2.1 4.6-4.5 4.6-3.8.1-5.6-3.5-5.7-6.9 0-3.3 1.9-7.1 5.7-7.1 2 .1 3.7 1.4 4.5 3.1l3.3-1.7c-1.5-3.1-4.4-4.8-7.8-4.7-5.9 0-9.7 4.8-9.7 10.4.1 5.5 3.6 10.4 9.3 10.4 6.2-.1 8.9-5 8.9-10.7v-.4h-8.2.2z"/>
</svg>;
  }
});