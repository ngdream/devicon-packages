import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ValaPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#a56de2'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m62.959 32.051c-7.551 0-14.777 2.4271-21.676 7.2832-3.0202 2.1912-5.4913 4.7082-7.416 7.5508-1.8951 2.813-2.8438 5.745-2.8438 8.7949 0 1.6581 0.20849 3.0486 0.62305 4.1738 1.214 3.1091 4.2474 4.6641 9.1035 4.6641 0-0.17764-0.072563-0.38417-0.2207-0.62109-0.68102-1.2437-1.0215-3.0951-1.0215-5.5527 1e-6 -5.0633 1.1839-9.2979 3.5527-12.703 2.3984-3.4052 5.7302-5.907 9.9941-7.5059l1.4648 62.137h13.102l25.273-67.777h-6.3516l-19.143 55.697-0.80078-55.963c-1.1844-0.11892-2.3969-0.17774-3.6406-0.17774z"/>
</svg>;
  }
});