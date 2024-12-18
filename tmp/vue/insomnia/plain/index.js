import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'InsomniaPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#4000bf'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64 0C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64zm0 6.508c31.752 0 57.492 25.74 57.492 57.492S95.752 121.492 64 121.492 6.508 95.752 6.508 64 32.248 6.508 64 6.508zm.723 11.933a45.42 45.42 0 0 0-17.366 3.426c4.392 3.225 7.243 8.425 7.243 14.291 0 9.785-7.934 17.719-17.72 17.719-5.865 0-11.066-2.851-14.29-7.242A45.417 45.417 0 0 0 19.164 64c0 25.162 20.397 45.56 45.559 45.56s45.56-20.398 45.56-45.56c0-25.162-20.398-45.559-45.56-45.559z"/>
</svg>;
  }
});