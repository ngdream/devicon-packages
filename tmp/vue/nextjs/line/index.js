import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NextjsLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64h.002a63.994 63.994 0 0 0 35.506-10.838l.014-.008.37-.283-.568-.815-52.676-68.054v40.88h-7.552V39.097h9.943l56.229 72.425.64.819.371-.344.014-.012A64.002 64.002 0 0 0 128 64c0-35.34-28.66-64-64-64Zm0 .992c34.804 0 63.008 28.204 63.008 63.008a62.999 62.999 0 0 1-20.983 46.879l-56.5-72.775H38.104v51.771h9.537v-38.97l50.863 65.712A63 63 0 0 1 64 127.007C29.196 127.008.992 98.805.992 64S29.196.992 64 .992Zm17.143 37.112v37.94l9.46 12.423V38.104Zm.992.992h7.476v46.43l-7.476-9.815z"/>
</svg>;
  }
});