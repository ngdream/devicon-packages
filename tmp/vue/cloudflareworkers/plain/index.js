import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CloudflareworkersPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ea9344'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M30.743 116.257a15.5 15.5 0 0 1-3.42-4.107L4.068 71.752a15.563 15.563 0 0 1 0-15.503L27.323 15.85a15.512 15.512 0 0 1 3.417-4.084l15.601 28.166-11.266 20.282a7.75 7.75 0 0 0 0 7.543l11.277 20.349-15.609 28.151zM100.665 15.85l23.255 40.398a15.485 15.485 0 0 1 0 15.503l-23.255 40.398a15.504 15.504 0 0 1-13.416 7.752H68.994l28.92-52.145a7.75 7.75 0 0 0 0-7.513L68.994 8.099h18.255a15.502 15.502 0 0 1 13.416 7.751zM36.119 9.139a15.505 15.505 0 0 1 5.562-1.041h21.255l28.92 52.145a7.75 7.75 0 0 1 0 7.513l-28.92 52.145H41.682c-2.062 0-4.124-.423-5.993-1.193L63.406 67.29c.894-1.61 1.002-4.738.107-6.348L36.119 9.139z"/>
</svg>;
  }
});