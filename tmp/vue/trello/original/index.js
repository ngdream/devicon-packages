import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TrelloOriginalIcon',
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
	<defs>
		<linearGradient id="a" gradientTransform="scale(.5)" gradientUnits="userSpaceOnUse" x1="128" x2="128" y1="0" y2="256">
			<stop offset="0" stopColor="#2684ff"/>
			<stop offset="1" stopColor="#0052cc"/>
		</linearGradient>
	</defs>
	<path d="M12.5 0h103c6.925 0 12.5 5.575 12.5 12.5v103c0 6.925-5.575 12.5-12.5 12.5h-103C5.575 128 0 122.425 0 115.5v-103C0 5.575 5.575 0 12.5 0Z" fill="url(#a)"/>
	<path d="M78.32 16.64h27.04c3.324 0 6 2.676 6 6v44c0 3.324-2.676 6-6 6H78.32c-3.324 0-6-2.676-6-6v-44c0-3.324 2.676-6 6-6zm-55.68 0h27.04c3.324 0 6 2.676 6 6v76c0 3.324-2.676 6-6 6H22.64c-3.324 0-6-2.676-6-6v-76c0-3.324 2.676-6 6-6z" fill="#fff"/>
</svg>;
  }
});