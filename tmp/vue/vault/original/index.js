import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VaultOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ffd814'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m0 1.953 63.76 124.094L128 1.953Zm53.841 49.254H43.684V41.06H53.84zm0-15.227H43.684V25.822H53.84ZM69.08 66.444H58.97V56.286h10.108zm0-15.237H58.97V41.06h10.108zm0-15.227H58.97V25.822h10.108Zm15.147 15.227H74.027V41.06h10.159ZM74.027 35.98V25.822h10.159V35.98z"/>
</svg>;
  }
});