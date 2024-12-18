import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'EmbeddedcOriginalIcon',
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
	<g fill="#b3b3b3" transform="matrix(1 0 0 .8 0 27.184)">
		<g transform="translate(112)">
			<rect height="10" width="16" ry="2" y="86"/>
			<rect height="10" width="16" ry="2" y="41"/>
			<rect height="10" width="16" ry="2" y="18.5"/>
			<rect height="10" width="16" ry="2" y="-4"/>
			<rect height="10" width="16" ry="2" y="63.5"/>
		</g>
		<g transform="matrix(0 1.25 -.8 0 100.82 106.02)">
			<rect height="10" width="16" ry="2" y="86"/>
			<rect height="10" width="16" ry="2" y="41"/>
			<rect height="10" width="16" ry="2" y="18.5"/>
			<rect height="10" width="16" ry="2" y="-4"/>
			<rect height="10" width="16" ry="2" y="63.5"/>
		</g>
		<g transform="matrix(0 1.25 -.8 0 100.82 -33.979)">
			<rect height="10" width="16" ry="2" y="86"/>
			<rect height="10" width="16" ry="2" y="41"/>
			<rect height="10" width="16" ry="2" y="18.5"/>
			<rect height="10" width="16" ry="2" y="-4"/>
			<rect height="10" width="16" ry="2" y="63.5"/>
		</g>
		<rect height="10" width="16" ry="2" y="86"/>
		<rect height="10" width="16" ry="2" y="41"/>
		<rect height="10" width="16" ry="2" y="18.5"/>
		<rect height="10" width="16" ry="2" y="-4"/>
		<rect height="10" width="16" ry="2" y="63.5"/>
		<rect height="126" width="100" fill="#000" ry="3.8" x="14" y="-17.5"/>
		<path d="M85.3 61.1C81.1 70.4 73.1 76.6 64 76.6c-13.5 0-24.5-13.7-24.5-30.6s11-30.6 24.5-30.6c9.1 0 17.1 6.3 21.3 15.6l13-9.4C91.5 6.7 78.7-3.4 64-3.4 42.2-3.4 24.5 18.7 24.5 46S42.2 95.4 64 95.4c14.6 0 27.4-10 34.2-24.7z" fill="#fff"/>
		<ellipse cx="23" cy="-5.2" fill="#fff" rx="3" ry="3.8"/>
	</g>
</svg>;
  }
});