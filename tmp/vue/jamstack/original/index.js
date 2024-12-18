import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JamstackOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#F0047F'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M61.928 9.176c-30.459 0-55.078 24.61-55.078 55.053 0 30.438 24.62 55.048 55.078 55.048 30.458 0 55.078-24.61 55.078-55.048V9.176zm1.166 14.654h38.635v38.615H63.094zM20.986 65.932h38.621v38.6c-20.905-.887-37.734-17.71-38.62-38.6zm42.108.076h38.615c-.881 20.89-17.715 37.714-38.615 38.596z"/>
</svg>;
  }
});