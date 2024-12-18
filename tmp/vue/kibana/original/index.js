import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KibanaOriginalIcon',
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
	<path d="M112 0H12v48c17.3 0 33.54 4.453 47.73 12.188Zm0 0" fill="#f04e98"/>
	<path d="M12 48v67.152l47.73-54.96A99.422 99.422 0 0 0 12 48" fill="#343741"/>
	<path d="m70.04 66.621-48.974 56.406L16.738 128h93.258c-5.121-25.21-19.758-46.945-39.957-61.379" fill="#00bfb3"/>
</svg>;
  }
});