import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'StackoverflowLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#F58025'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m83.693 0-.398.296-9.478 7.042 34.354 46.17 9.874-7.337Zm-.205 1.385 33.172 44.58-8.284 6.158-33.173-44.58ZM62.701 18.054l-.316.379-7.56 9.071 44.24 36.825 7.874-9.454zm.127 1.395 42.715 35.553-6.606 7.932-42.715-35.558zm-16.96 22.229-.209.449-4.984 10.702 52.18 24.294 5.2-11.151zm.482 1.316 50.39 23.458-4.364 9.355L41.992 52.35ZM35.955 67.433l-.102.483-2.433 11.556 56.332 11.83 2.53-12.031Zm.764 1.174 54.39 11.428-2.121 10.095-54.393-11.422ZM9.955 81.943V128h102.442V81.943h-12.262l-.002 33.799H22.221V81.943H10.45Zm.99.99H21.23v33.8h79.894l.002-33.8h10.28v44.076H10.946Zm22.052 10.274v.989l-.494-.494v11.763h57.35V93.207h-56.36zm.497.99h55.368v10.277H33.494Z"/>
</svg>;
  }
});