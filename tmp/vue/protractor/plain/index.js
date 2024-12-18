import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ProtractorPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#d51c2f'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M63.998.002C28.649.002 0 28.652 0 64s28.65 63.998 63.998 63.998c35.347 0 63.993-28.654 63.996-64C127.994 28.65 99.346.002 63.998.002zm-1.455 20.2v9.12h2.91v-9.12A48.288 48.288 0 0 1 97.24 33.364l-6.808 6.817 2.054 2.058 6.815-6.814a48.303 48.303 0 0 1 13.164 31.789h-9.12v2.914h9.155v10.67H15.484V70.125h9.164v-2.91H15.53a48.313 48.313 0 0 1 13.164-31.79l6.815 6.815 2.06-2.058-6.814-6.817a48.298 48.298 0 0 1 31.789-13.164zm-1.152 17.044a31.531 31.531 0 0 0-28.928 31.43h63.063a31.531 31.531 0 0 0-34.135-31.43z"/>
</svg>;
  }
});