import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KerasLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#d00000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} style={{"enableBackground":"new 0 0 128 128"}} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
	<path d="M127 1v126H1V1h126M47.9 56.2V28.9c0-.4-.2-.7-.4-1l-2.2-2.3c-.3-.3-.7-.5-1.1-.5h-7.6c-.4 0-.8.2-1.1.5L33.3 28c-.2.3-.4.7-.4 1v70.4c0 .3.2.7.4.9l2.2 2.2c.3.3.7.4 1 .4H44c.4 0 .8-.2 1-.4l2.2-2.2c.3-.3.4-.7.4-1V75.7l8.6-8.2 23.5 34.8c.2.4.7.6 1.1.6h10.6c.5 0 1-.3 1.2-.7l1.9-3.7c.2-.4.2-1-.1-1.4L66.9 56.9l25.4-25.3c.3-.3.4-.7.4-1v-.5c0-.2-.1-.5-.2-.7L91 26c-.2-.5-.7-.8-1.2-.8H79.4c-.4 0-.8.2-1 .4L47.9 56.2M128 0H0v128h128V0zM46.9 58.6l32.2-32.3c.1-.1.2-.1.3-.1h10.5c.1 0 .2.1.2.2l1.5 3.4c0 .1.1.2.1.3v.5c0 .1-.1.2-.1.3L65.7 56.6c-.1.1-.1.2 0 .3l28.2 40.8c.1.1.1.2 0 .3l-1.9 3.7c0 .1-.2.2-.3.2H81.1c-.1 0-.2-.1-.3-.1L56.7 66.1l-.1-.1h-.1L47 75.2c-.1.1-.1.2-.1.3v23.8c0 .1-.1.2-.1.3l-2.2 2.2c-.1.1-.2.1-.3.1h-7.5c-.1 0-.2-.1-.3-.1l-2.2-2.2c-.1-.1-.1-.2-.1-.3V28.9c0-.1.1-.2.1-.3l2.2-2.4c.1-.1.2-.1.3-.1h7.6c.1 0 .2.1.3.1l2.2 2.3c.1.1.1.2.1.3l-.1 29.8z"/>
</svg>;
  }
});