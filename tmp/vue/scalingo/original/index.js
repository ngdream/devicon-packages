import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ScalingoOriginalIcon',
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
	<path d="M53.903 7.868c4.239-7.28 13.737-9.995 21.214-6.07 7.478 3.928 10.105 13.012 5.869 20.289L52.294 71.362c-4.239 7.277-13.737 9.996-21.214 6.067-7.478-3.925-10.105-13.01-5.87-20.288Zm0 0" fill="#21cfee"/>
	<path d="M75.706 56.639c4.239-7.28 13.736-9.996 21.214-6.07 7.478 3.928 10.105 13.012 5.869 20.288l-28.692 49.277c-4.239 7.277-13.737 9.995-21.214 6.067-7.478-3.926-10.108-13.01-5.869-20.29zm0 0" fill="#173aee"/>
</svg>;
  }
});