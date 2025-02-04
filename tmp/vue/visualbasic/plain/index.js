import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VisualbasicPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#004e8c'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64 0A64 64 0 000 64a64 64 0 0064 64 64 64 0 0064-64A64 64 0 0064 0zm-3.76 38.7l6.34.1L48 89.202h-6.58L23.14 38.8h6.579l14 40a23.74 23.74 0 011.02 4.46h.141a22 22 0 011.119-4.56zm13.6.1h14.34A15.68 15.68 0 0198.54 42a10.34 10.34 0 013.84 8.34 12.26 12.26 0 01-2.38 7.44 12.52 12.52 0 01-6.4 4.501v.139a12.82 12.82 0 018.16 3.84 11.84 11.84 0 013.06 8.461 13.18 13.18 0 01-4.64 10.48 17.28 17.28 0 01-11.7 4H73.84zm12.7 5.26l-6.7.06V60.4h5.999a11.48 11.48 0 007.58-2.4 8.14 8.14 0 002.781-6.6c0-4.893-3.22-7.34-9.66-7.34zm-6.7 21.641v18.14h8a12 12 0 008-2.46 8.42 8.42 0 002.86-6.74c0-5.947-4.053-8.92-12.16-8.92z"/>
</svg>;
  }
});