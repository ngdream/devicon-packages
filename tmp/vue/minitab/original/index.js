import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'MinitabOriginalIcon',
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
	<path d="M0 0h128v128H0z" fill="#8DC63F"/>
	<path d="M41 128l-26.2-21.7 19.8-53.9 19.2 17.9V19.4h7.9l21 23.5 6.1-5.3L113.9 70l2.1-1.5 12 16.1v43.2z" fill="url(#minitab-original-a)"/>
	<path d="M42 19.4h19.7v86.9H42zM69.1 37.6h19.7v68.7H69.1zM96.3 68.5H116v37.8H96.3zM14.8 52.4h19.7v53.9H14.8z" fill="#FFF"/>
	<path d="M14.8 100.3l19.8-7.4v13.4H14.8zM61.7 71.9v34.4H42V89.1zM69.1 71.9l19.7 14.5v19.9H69.1zM96.3 86.2l19.7-7.6v27.7H96.3z" fill="#D1D1D2"/>
	<linearGradient id="minitab-original-a" gradientTransform="translate(0 374)" gradientUnits="userSpaceOnUse" x1="99.32" x2="21.21" y1="-254.43" y2="-332.79">
		<stop offset="0" stopColor="#8DC63F" stopOpacity=".2"/>
		<stop offset="1" stopOpacity=".2"/>
	</linearGradient>
</svg>;
  }
});