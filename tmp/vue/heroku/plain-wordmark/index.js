import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HerokuPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#6762a6'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M39.3 89h53.3c4.6 0 8.3-3.7 8.3-8.3V10.3c0-4.6-3.7-8.3-8.3-8.3H39.3C34.7 2 31 5.7 31 10.3v70.3c0 4.7 3.7 8.4 8.3 8.4zm38.2-75h10.8s-1.8 5-7.5 12H70.4c3.7-4 7.1-12 7.1-12zM57 13.6v20.7s27-10.8 27 8.2V77h-8.8l-.2.1V42.3s2.3-8.3-27.8 3.4c-.1.1-.1-32.1-.1-32.1H57zM47 57.2l9.9 9.9L47 77V57.2zm-11.7 45.6c-4 0-7.3.5-9.7 1.4-.9 3.2-1.3 6.6-1.3 10.4 0 7 1.2 11.3 9.2 11.3 3.7 0 6.8-1.1 9.3-2.3L42 120c-2.4.9-5.5 1.7-8.2 1.7-3.5 0-4.6-.9-4.8-6.9h15v-2.2c0-6.1-2.2-9.8-8.7-9.8zM29 112c.1-3 .3-3.8.5-4.7 1.9-.4 4.1-.4 5.6-.4 3.3 0 3.9 2.1 3.9 5.1H29zm-15.1-9.2c-2.7 0-4.9.7-7.9 1.5V94H2v31h4v-16.6c3-1 5-1.5 7-1.5 1 0 2 .5 2 1.7v16.9l.4-.4H20v-15.8c0-3.8-1.8-6.5-6.1-6.5zm108.1.2v17.4c-3 1-5.6 1.5-7.7 1.5-1 0-2.3-.5-2.3-1.7V103h-4v16.7c0 3.7 1.3 6.3 5.6 6.3 2.7 0 7.4-.4 12.4-3.5V103h-4zm-18.2 0h-5.4c-1.3 3-3.2 7-5.6 9H91V94h-5v31h5v-10h2.1c2.8 3 4.6 7 6 10h5.6c-2.1-4-4.5-8.4-7.7-12.4 2.6-2.7 5-5.6 6.8-9.6zM48 125h4v-16.6c2-.8 5-1.1 7-1.2v-4c-3 .2-7 .9-11 3.1V125zm23.4-22.2c-6.1 0-10.3 3.2-10.3 11.7 0 8 3.2 11.5 10.3 11.5 6.1 0 10.3-3.2 10.3-11.7 0-8-3.2-11.5-10.3-11.5zm0 19.2c-4 0-5.7-1.4-5.7-7.5 0-5.6 2-7.7 5.7-7.7 4 0 5.7 1.4 5.7 7.5-.1 5.6-2.1 7.7-5.7 7.7z"/>
</svg>;
  }
});