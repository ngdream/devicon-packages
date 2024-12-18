import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JiraPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#2684ff'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m61.805 16c0 11.52 9.3287 20.848 20.848 20.848h8.5v8.2266c0 11.52 9.3277 20.848 20.848 20.848v-45.945a3.978 3.978 0 0 0-3.9766-3.9766h-46.219zm-22.902 23.039c0 11.519 9.3248 20.848 20.844 20.848h8.5039v8.2266c0 11.52 9.3277 20.848 20.848 20.848v-45.945a3.983 3.983 0 0 0-3.9766-3.9766h-46.219zm-22.902 23.039c0 11.52 9.3238 20.848 20.844 20.848h8.5039v8.2266c0 11.524 9.3287 20.848 20.848 20.848v-45.941a3.984 3.984 0 0 0-3.9766-3.9805h-46.219z"/>
</svg>;
  }
});