import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KaggleOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#20BEFF'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M100.402 127.243c-.126.501-.627.752-1.502.752H82.168c-1.007 0-1.876-.438-2.632-1.317L51.91 91.531l-7.706 7.33v27.258c0 1.255-.628 1.881-1.88 1.881h-12.97c-1.254 0-1.88-.626-1.88-1.88V1.876c0-1.25.625-1.877 1.88-1.877h12.97c1.253 0 1.882.628 1.882 1.876v76.501l33.08-33.457c.878-.875 1.755-1.315 2.631-1.315h17.295c.75 0 1.25.315 1.504.937.252.753.19 1.316-.19 1.693L63.561 80.062l36.465 45.3c.499.502.625 1.128.38 1.881"/>
</svg>;
  }
});