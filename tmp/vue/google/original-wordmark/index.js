import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GoogleOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M31.85 57.91H17.09v4.38h10.47c-.52 6.14-5.63 8.76-10.45 8.76a11.7 11.7 0 010-23.4A11.36 11.36 0 0125 50.82l3.07-3.18A15.59 15.59 0 0017 43.26a16.09 16.09 0 10.23 32.18c8.61 0 14.92-5.9 14.92-14.63a13.13 13.13 0 00-.27-2.9z" fill="#4885ed"/>
	<path d="M43.94 54.74a10.34 10.34 0 1010.38 10.38 10.22 10.22 0 00-10.38-10.38zM44 58.8a6.29 6.29 0 11-5.92 6.26A5.95 5.95 0 0144 58.8z" fill="#db3236"/>
	<path d="M66.56 54.74a10.34 10.34 0 1010.37 10.38 10.22 10.22 0 00-10.37-10.38zm.06 4.06a6.29 6.29 0 11-5.92 6.26 5.95 5.95 0 015.92-6.26z" fill="#f4c20d"/>
	<path d="M88.73 54.75c-5.56 0-9.93 4.87-9.93 10.33a10.2 10.2 0 009.83 10.35 6.83 6.83 0 005.67-2.51v2c0 3.57-2.17 5.7-5.44 5.7A5.73 5.73 0 0183.58 77l-4 1.66a10 10 0 009.3 6.09c5.53 0 9.74-3.48 9.74-10.78v-18.6h-4.31v1.75a7.32 7.32 0 00-5.58-2.37zm.4 4.05c2.73 0 5.52 2.33 5.52 6.3s-2.79 6.27-5.58 6.27a5.88 5.88 0 01-5.72-6.23c0-4 2.86-6.34 5.78-6.34z" fill="#4885ed"/>
	<path d="M117.93 54.72c-5.24 0-9.65 4.17-9.65 10.33a10 10 0 0010.15 10.38 10.49 10.49 0 008.66-4.54l-3.58-2.38a5.79 5.79 0 01-5.07 2.85 5.32 5.32 0 01-5.07-3.13l13.87-5.75-.72-1.69a9.36 9.36 0 00-8.6-6.06zm.18 4a4.12 4.12 0 013.83 2.21l-9.26 3.87a5.74 5.74 0 015.43-6.08z" fill="#db3236"/>
	<path d="M101.67 74.82h4.56V44.33h-4.56z" fill="#3cba54"/>
</svg>;
  }
});