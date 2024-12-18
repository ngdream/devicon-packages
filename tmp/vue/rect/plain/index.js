import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'RectPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#262626'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M127.828.172H.172v127.656h127.656v-23.98h-8.281v17.254h-4.484v-17.254h-8.454v-4.313h21.22zM54.855 99.535h21.567v4.313H59.168v4.312h8.453v4.313h-8.453v4.312h17.254v4.317H54.855zm25.88 0h21.39v4.313H85.047v12.937h17.078v4.317h-21.39zm-51.926 0H50.37v12.938H46.06v4.312h-4.313v-4.312h-8.625v8.629H28.81zm17.25 17.25v4.317h4.312v-4.317zm0-12.937v4.312H33.12v-4.312zm0 0" fillRule="evenodd"/>
</svg>;
  }
});