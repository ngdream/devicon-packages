import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VuetifyLineIcon',
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
	<path d="m68.094 10.166-66.291.002.431.75 30.672 53.129 2.037 3.545 23.319-40.403zm10.62.002-.144.25-13.707 23.746-24.6 42.625L64 117.922l31.105-53.875 31.092-53.879Zm-75.179 1h62.826l-8.966 15.521-22.45 38.899-1.172-2.041Zm75.758 0h45.172L94.238 63.547 64 115.92 41.418 76.79 65.73 34.663z"/>
</svg>;
  }
});