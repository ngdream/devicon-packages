import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PolygonPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#7950DD'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64 0C28.652 0 0 28.652 0 64s28.652 64 64 64 64-28.652 64-64S99.348 0 64 0ZM44.096 26.742a5.738 5.738 0 0 1 3.646.602l17.86 10.383a4.963 4.963 0 0 1 2.664 4.52v6.995l-8.329 4.965V46.99a5.423 5.423 0 0 0-2.71-4.521L47.52 37.05a5.738 5.738 0 0 0-5.418 0l-9.707 5.418a4.972 4.972 0 0 0-2.711 4.52v11.275a5.423 5.423 0 0 0 2.71 4.521l9.708 5.649a5.76 5.76 0 0 0 5.418 0l12.214-7.227 8.532-4.742 12.214-7.223a5.76 5.76 0 0 1 5.418 0l18.059 10.377a4.964 4.964 0 0 1 2.711 4.516v21a5.42 5.42 0 0 1-2.688 4.511L85.922 100.03a5.746 5.746 0 0 1-5.422 0L62.441 89.65a4.969 4.969 0 0 1-2.707-4.52v-7.22l8.106-4.738v7.25a5.416 5.416 0 0 0 2.71 4.514l9.708 5.418a5.738 5.738 0 0 0 5.418 0l9.707-5.64A4.967 4.967 0 0 0 98.09 80.2V69.137a5.419 5.419 0 0 0-2.707-4.52L85.676 59.2a5.76 5.76 0 0 0-5.418 0l-12.172 6.977-8.352 4.965-12.214 7a5.76 5.76 0 0 1-5.418 0L24.043 67.734a4.967 4.967 0 0 1-2.711-4.496V42.246a4.608 4.608 0 0 1 2.934-4.52l18.058-10.382a5.738 5.738 0 0 1 1.772-.602z"/>
</svg>;
  }
});