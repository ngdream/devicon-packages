import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GradleOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#02303a'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M103.93 17.205a20.294 20.294 0 00-11.092 5.268 1.98 1.98 0 00-.62 1.39 2.025 2.025 0 00.578 1.405l2.525 2.613a1.936 1.936 0 002.53.182 11.5 11.5 0 016.964-2.321 11.618 11.618 0 018.245 19.847c-16.11 16.112-37.616-29.024-86.423-5.803a6.637 6.637 0 00-2.956 9.291l8.365 14.476a6.637 6.637 0 008.973 2.467l.203-.114-.16.114 3.71-2.082a85.035 85.035 0 0011.676-8.724 2.055 2.055 0 012.675 0 1.892 1.892 0 01.73 1.478 1.951 1.951 0 01-.641 1.479 87.562 87.562 0 01-12.31 9.135h-.12l-3.712 2.071a10.347 10.347 0 01-5.142 1.338 10.672 10.672 0 01-9.209-5.273l-7.912-13.674C5.613 62.5-3.607 83.18 1.345 109.416a1.951 1.951 0 001.895 1.567h9.015a1.922 1.922 0 001.905-1.686 13.2 13.2 0 0126.193 0 1.936 1.936 0 001.916 1.686h8.786a1.922 1.922 0 001.905-1.686 13.214 13.214 0 0126.209 0 1.922 1.922 0 001.905 1.686h8.672a1.922 1.922 0 001.926-1.89c.207-12.223 3.503-26.267 12.904-33.303 32.562-24.359 24.007-45.24 16.469-52.823a20.294 20.294 0 00-17.115-5.762zM84.692 52.866a3.902 3.902 0 013.138 6.965v-.02l-6.21-3.119a3.902 3.902 0 013.072-3.826z"/>
</svg>;
  }
});