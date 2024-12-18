import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'K3sOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ffc519'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M114.434 11.875H13.547C6.074 11.898.023 17.949 0 25.422v77.719c.023 7.472 6.074 13.523 13.547 13.546h100.887c7.472-.023 13.523-6.074 13.546-13.546V25.42c-.023-7.472-6.074-13.523-13.546-13.546zM54.078 88.094l-24.621 14.308a6.592 6.592 0 01-9.008-2.386 6.59 6.59 0 012.387-9.008l24.621-14.309a6.587 6.587 0 019.012 2.383 6.593 6.593 0 01-2.39 9.012zm9.688-21.801h-.032a6.59 6.59 0 01-6.558-6.617l.125-28.364a6.587 6.587 0 016.586-6.562h.031a6.59 6.59 0 016.559 6.617l-.125 28.367a6.588 6.588 0 01-6.586 6.559zm43.562 33.703a6.585 6.585 0 01-9 2.41L73.672 88.172a6.589 6.589 0 116.59-11.41l24.656 14.234a6.586 6.586 0 012.41 9zm0 0"/>
</svg>;
  }
});