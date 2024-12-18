import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AngularjsOriginalIcon',
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
	<path d="M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z" fill="#B3B3B3"/>
	<path d="M117.536 25.998L63.672 7.629v112.785l45.141-24.983z" fill="#A6120D"/>
	<path d="M11.201 26.329l8.026 69.434 44.444 24.651V7.627z" fill="#DD1B16"/>
	<path d="M78.499 67.67l-14.827 6.934H48.044l-7.347 18.374-13.663.254 36.638-81.508L78.499 67.67zm-1.434-3.491L63.77 37.858 52.864 63.726h10.807l13.394.453z" fill="#F2F2F2"/>
	<path d="M63.671 11.724l.098 26.134 12.375 25.888H63.698l-.027 10.841 17.209.017 8.042 18.63 13.074.242z" fill="#B3B3B3"/>
</svg>;
  }
});