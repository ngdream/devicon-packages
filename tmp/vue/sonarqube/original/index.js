import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SonarqubeOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#549dd0'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M113.19 125.938h-7.16C106.03 68.293 58.464 21.396 0 21.396v-7.161c62.416 0 113.19 50.106 113.19 111.703Zm4.952-38.441c-8.598-36.151-37.898-66.362-74.623-76.903l1.647-5.735c38.763 11.133 69.702 43.027 78.778 81.257Zm5.504-33.942c-8.854-19.309-23.944-36.146-42.48-47.411l2.482-4.082C102.992 13.819 118.74 31.399 128 51.556Zm0 0"/>
</svg>;
  }
});