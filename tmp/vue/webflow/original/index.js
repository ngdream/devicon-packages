import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'WebflowOriginalIcon',
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
	<path d="M.994.994v126.012h126.012V.994H.994zm71.92 41.715s3.988 30.056 3.988 31.443l5.785-18.12h-.04c2.552-6.86 7.579-13.323 17.152-13.323l-13.563 32.75a18.428 18.318 0 01-17.549 12.809s-3.99-28.153-3.99-28.788l-5.982 15.465c-2.673 6.86-7.857 13.323-17.43 13.323l-7.5-45.518a14.918 14.829 0 0114.479 13.44s.998 16.693.998 18.001l7.06-18.16c2.553-6.86 7.418-13.322 16.592-13.322z" fill="#4353ff"/>
</svg>;
  }
});