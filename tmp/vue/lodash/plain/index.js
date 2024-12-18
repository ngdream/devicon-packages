import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'LodashPlainIcon',
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
	<path d="M0 6.207v88.828h59.031v-9.754H11.914V6.207zm96.191 21.34v.105c-12.187-.16-24.375 7.582-28.168 19.336-5.414 13.539-2.926 30.551 7.691 40.891 10.293 8.559 25.781 9.211 37.371 3.145 7.965-4.227 13.004-12.621 14.086-21.449 1.41-9.207.707-19.281-3.789-27.621-5.312-8.883-15.707-14.621-26-14.246zm1.082 9.531c8.938 0 16.953 6.824 18.414 15.598 2.711 9.91 1.086 22.043-7.039 29.031-7.582 6.172-19.773 5.309-26-2.328-7.582-8.129-7.582-20.582-3.68-30.328 2.707-7.043 9.906-12.078 17.488-11.918h.977zM0 107.652v13.539h127.816v-13.539zm0 0"/>
</svg>;
  }
});