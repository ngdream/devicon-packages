import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VuetifyPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#1697F6'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.668 10.668 33.34 63.797l1.605 2.793 22.883-39.65 9.399-16.273Zm76.336 0L65.297 34.414 40.84 76.79 64 116.922l30.672-53.125 30.66-53.129Zm0 0"/>
</svg>;
  }
});