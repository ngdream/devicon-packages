import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'BeatsOriginalIcon',
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
	<path d="M93.352 54.215A39.83 39.83 0 0 0 96 40C96 17.906 78.094 0 56 0H12v48h60c7.86 0 15.168 2.3 21.352 6.215" fill="#07c"/>
	<path d="M102.809 62.496C94.399 79.922 76.609 92 56 92H12v36h60c22.09 0 40-17.914 40-40a39.828 39.828 0 0 0-9.191-25.512" fill="#00bfb3"/>
	<path d="M93.352 54.215A39.793 39.793 0 0 0 72 48H12v32h44c17.078 0 31.613-10.719 37.352-25.785" fill="#343741"/>
</svg>;
  }
});