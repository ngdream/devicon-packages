import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TerraformPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#5c4ee5'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<path d="M46.324 26.082L77.941 44.5v36.836L46.324 62.918zm0 0M81.41 44.5v36.836l31.633-18.418V26.082zm0 0M11.242 5.523V42.36L42.86 60.777V23.941zm0 0M77.941 85.375L46.324 66.957v36.824L77.941 122.2zm0 0"/>
	</g>
</svg>;
  }
});