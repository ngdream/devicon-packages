import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TerraformOriginalIcon',
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
	<g fillRule="evenodd">
		<path d="M77.941 44.5v36.836L46.324 62.918V26.082zm0 0" fill="#5c4ee5"/>
		<path d="M81.41 81.336l31.633-18.418V26.082L81.41 44.5zm0 0" fill="#4040b2"/>
		<path d="M11.242 42.36L42.86 60.776V23.941L11.242 5.523zm0 0M77.941 85.375L46.324 66.957v36.82l31.617 18.418zm0 0" fill="#5c4ee5"/>
	</g>
</svg>;
  }
});