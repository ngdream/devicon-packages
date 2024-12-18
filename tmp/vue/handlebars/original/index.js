import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HandlebarsOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M49.444 48.231a18.439 18.439 0 0 0-3.037.03c-12.692 1.004-17.732 7.57-20.826 10.336-3.093 2.766-8.82 9.393-12.672 8.195-3.852-1.199-4.926-5.838-3.564-7.313 1.363-1.475 2.428-1.209 3.257 0a6.392 6.392 0 0 1 .789 3.185 7.314 7.314 0 0 0 2.367-3.565c.47-2.049.368-4.035-2.367-5.428-6.935-3.503-11.412 2.745-12.109 4.21C.586 59.345-.5 61.65.258 66.936c.758 5.286 3.268 10.142 11.268 12.016a33.691 33.691 0 0 0 22.536-2.633c7.007-3.34 20.182-9.22 23.5-9.813a28.836 28.836 0 0 1 6.443-.817 28.836 28.836 0 0 1 6.442.817c3.32.594 16.494 6.474 23.5 9.813a33.691 33.691 0 0 0 22.527 2.633c8-1.874 10.51-6.73 11.268-12.016.758-5.286-.328-7.58-1.024-9.055-.697-1.476-5.174-7.724-12.099-4.21-2.735 1.393-2.838 3.38-2.367 5.428a7.314 7.314 0 0 0 2.367 3.565 6.392 6.392 0 0 1 .799-3.247c.83-1.209 1.894-1.465 3.257 0 1.362 1.465.288 6.166-3.564 7.365-3.851 1.198-9.579-5.43-12.672-8.195-3.094-2.766-8.144-9.302-20.836-10.326a18.439 18.439 0 0 0-17.598 9.07 18.439 18.439 0 0 0-14.561-9.1Z"/>
</svg>;
  }
});