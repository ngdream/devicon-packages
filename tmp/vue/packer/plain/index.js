import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PackerPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#1d94dd'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M41.8 0v18.045L72.46 35.75v54.12l14.434 8.267c8.933 5.158 16.236 2.067 16.236-6.862V51.592c0-8.934-7.304-20.459-16.236-25.617L41.8 0zM24.872 15.646v88.391L66.354 128V39.617L24.87 15.647z"/>
</svg>;
  }
});