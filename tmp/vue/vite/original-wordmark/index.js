import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ViteOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#006BFF'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M70.355 30.928 26.78 41.214l-6.455 55.858Zm-48.663 11.23L0 47.053l19.6 49.801Zm91.678 18.42v19.627H128V79.14h-13.312v-8.615h12.38v-1.008l-6.173-.012-6.177-.017-.017-3.924-.013-3.924h13.132v-1.061zm-57.326.008c-.365 0-.68.01-.68.025 0 .022 1.788 4.394 3.979 9.736 2.195 5.339 3.991 9.75 4.008 9.783.03.068.246.084.797.084h.76l3.999-9.736c2.2-5.355 4.006-9.766 4.016-9.812.016-.063-.108-.08-.625-.08h-.642l-3.723 9.258c-2.043 5.099-3.739 9.25-3.785 9.24-.026-.008-1.726-4.17-3.74-9.257l-3.684-9.241zm24.45 0v19.619h1.322V60.586Zm8.893 0v.533h-.017v.529h7.57v18.574h1.323V61.648h7.57v-1.062z"/>
</svg>;
  }
});