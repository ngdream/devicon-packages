import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VuetifyOriginalIcon',
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
	<path d="M65.3 34.414 40.84 76.79 64 116.926l30.672-53.13 30.66-53.128H79Zm0 0" fill="#1697f6"/>
	<path d="m33.34 63.797 1.605 2.793 22.88-39.649 9.402-16.273H2.668Zm0 0" fill="#aeddff"/>
	<path d="M79 10.668C90.594 48.82 64 116.926 64 116.926L40.84 76.789Zm0 0" fill="#1867c0"/>
	<path d="M67.227 10.668c-48.844 0-32.282 55.922-32.282 55.922Zm0 0" fill="#7bc6ff"/>
</svg>;
  }
});