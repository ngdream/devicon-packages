import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SketchPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#fdad00'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M61.417 6.616 27.98 10.07l-1.862 34.508zm5.372.008 35.379 38.06-1.87-34.55zm-2.689.151L27.162 46.468h73.827l-.414-.447zM25.632 12.49 0 46.468h23.81Zm76.893 0 1.815 33.937H128ZM.327 48.536l58.868 68-35.01-68Zm26.173 0 37.639 72.848 37.51-72.848zm77.467 0-35.011 68 58.868-68Z"/>
</svg>;
  }
});