import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AngularmaterialOriginalIcon',
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
	<path d="M63.934.656 5.25 21.66l8.863 77.719 49.82 27.77 49.887-27.77 9.059-77.719Zm0 0" fill="#ffa726"/>
	<path d="M63.934.656v126.492l49.886-27.77 9.059-77.718Zm0 0" fill="#fb8c00"/>
	<path d="m72.797 96.688-41.55-20.02 23.827-14.703L96.887 82.05Zm0 0" fill="#ffe0b2"/>
	<path d="m72.797 81.262-41.55-20.086 23.827-14.637 41.813 20.086Zm0 0" fill="#fff3e0"/>
	<path d="m72.797 65.84-41.55-20.09 23.827-14.703 41.813 20.086Zm0 0" fill="#fff"/>
</svg>;
  }
});