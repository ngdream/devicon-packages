import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HaskellPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#5E5185'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M0 110.2L30.1 65 0 19.9h22.6L52.7 65l-30.1 45.1H0z"/>
	<path d="M30.1 110.2L60.2 65 30.1 19.9h22.6l60.2 90.3H90.4L71.5 81.9l-18.8 28.2H30.1zM102.9 83.8l-10-15.1H128v15.1h-25.1zM87.8 61.3l-10-15.1H128v15.1H87.8z"/>
</svg>;
  }
});