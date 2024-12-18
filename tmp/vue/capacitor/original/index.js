import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CapacitorOriginalIcon',
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
	<path d="M19.93 27.059.156 46.859l30.496 30.59L0 108.191l19.715 19.813L50.43 97.25l30.547 30.531 19.777-19.8Zm0 0" fill="#53b9ff"/>
	<path d="M70.258 77.45 50.43 97.25l30.547 30.531 19.777-19.8Zm0 0" fill="#119eff"/>
	<path d="M70.258 77.45 50.43 97.25l7.633 7.59Zm0 0" fillOpacity=".2"/>
	<path d="M97.285 50.492 128 19.738 108.215 0 77.512 30.691 46.957.156 27.184 19.957l80.82 80.922 19.777-19.8Zm0 0" fill="#53b9ff"/>
	<path d="m57.68 50.492 19.828-19.8L46.957.155 27.184 19.957Zm0 0" fill="#119eff"/>
	<path d="m57.68 50.492 19.828-19.8-7.633-7.594Zm0 0" fillOpacity=".2"/>
</svg>;
  }
});