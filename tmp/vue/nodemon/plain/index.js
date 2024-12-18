import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NodemonPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#76d04b'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M115.53 30.921 66.897 2.84a5.605 5.605 0 0 0-5.901 0L12.464 30.921c-1.832 1.017-2.95 2.95-2.95 5.087V92.07c0 2.137 1.118 4.07 2.95 5.087l48.532 28.081a6.086 6.086 0 0 0 5.901 0l48.633-28.08c1.831-1.018 2.95-2.951 2.95-5.088V36.01c0-2.137-1.119-4.07-2.95-5.088zM97.216 99.496c0 .61-.407 1.22-.916 1.526-.508.305-1.22.305-1.831 0l-17.5-10.073c-1.12-.61-1.831-1.831-1.831-3.052V66.53c0-1.323-.61-2.442-1.73-3.154l-7.427-4.273c-.61-.306-1.221-.51-1.832-.51-.61 0-1.22.204-1.73.51l-7.528 4.273c-1.12.712-1.73 1.831-1.73 3.154v21.366c0 1.22-.712 2.442-1.831 3.052l-17.5 10.073c-.61.305-1.221.305-1.832 0-.509-.305-.814-.915-.814-1.526l-.101-45.785c0-1.22.712-2.442 1.83-3.052l2.138-1.221c-3.358-4.986-5.393-12.311-2.85-23.401 0 0 5.597 15.77 16.89 15.262l13.328-7.631c.508-.305 1.017-.407 1.628-.509h.305c.509.102 1.119.204 1.628.509l13.227 7.63c11.294.51 16.889-15.261 16.889-15.261 2.543 11.09.508 18.416-2.85 23.4l2.24 1.222c1.119.61 1.729 1.831 1.729 3.052z"/>
</svg>;
  }
});