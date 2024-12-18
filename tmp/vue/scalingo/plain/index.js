import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ScalingoPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#173aee'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M67.736 0c-5.52.015-10.918 2.862-13.832 7.867L25.211 57.141c-4.236 7.279-1.609 16.363 5.87 20.289 7.477 3.928 16.975 1.208 21.214-6.069l28.691-49.275c4.236-7.277 1.609-16.36-5.869-20.287A15.748 15.748 0 0 0 67.737 0zm21.805 48.772c-5.52.015-10.922 2.862-13.836 7.867l-28.691 49.273c-4.24 7.28-1.609 16.364 5.869 20.289 7.478 3.929 16.976 1.209 21.215-6.068l28.691-49.276c4.236-7.276 1.609-16.36-5.869-20.289a15.742 15.742 0 0 0-7.379-1.797z"/>
</svg>;
  }
});