import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'FaunadbOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#3A1AB6'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M95.063 26.91c-7.778 2.652-11.52 7.399-14.07 14.8-.657 1.977-2.305 4.165-4.153 5.638l6.375 6.976-20.238-14.46L7.109 0s4.036 26.742 5.43 36.582c.988 6.934 2.676 10.05 8.024 13.203l2.14 1.172 9.215 4.965-5.477-2.902 25.262 14.09-.164.378-27.191-12.87c1.441 5.046 4.234 14.76 5.43 19.05 1.277 4.621 2.718 6.309 7.117 7.945L45 84.641l5.016-2.016-6.375 4.328-31.883 41.332c21.187-20.101 39.12-27.25 52.246-33.094 16.742-7.402 26.82-12.152 33.402-29.226 4.692-11.98 8.352-27.328 13-33.254l9.914-12.953s-20.527 5.55-25.257 7.148Zm0 0"/>
</svg>;
  }
});