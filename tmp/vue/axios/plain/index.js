import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AxiosPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#5a29e4'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m 34,43.977569 27.379067,-22.912155 0.0385,91.494586 -9.3189,7.74007 -0.15403,-76.091455 z"/>
	<path d="M 96.961687,82.322502 69.582627,105.23466 69.544127,13.74007 78.863017,6 l 0.15403,76.091452 z"/>
</svg>;
  }
});