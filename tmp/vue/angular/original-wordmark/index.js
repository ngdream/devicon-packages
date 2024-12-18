import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AngularOriginalWordmarkIcon',
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
    return <svg {...props} style={{"enableBackground":"new 0 0 128 128"}} version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
	<path d="M41.4,71.2V57.7h1.7l8.3,10.9V57.7H53v13.5h-1.7l-8.3-11v11H41.4L41.4,71.2z M66.5,70.7&#xA;&#x9;c-1.1,0.4-2.3,0.6-3.5,0.6c-4.9,0-7.3-2.3-7.3-7c0-4.4,2.4-6.7,7.1-6.7c1.4,0,2.6,0.2,3.8,0.6v1.5C65.4,59.2,64.2,59,63,59&#xA;&#x9;c-3.7,0-5.5,1.8-5.5,5.2c0,3.8,1.8,5.6,5.5,5.6c0.6,0,1.2-0.1,1.9-0.2v-4.5h1.7L66.5,70.7L66.5,70.7z M69.3,66v-8.3H71V66&#xA;&#x9;c0,2.6,1.3,3.9,3.9,3.9s3.9-1.3,3.9-3.9v-8.3h1.7V66c0,3.5-1.9,5.3-5.6,5.3S69.3,69.5,69.3,66L69.3,66z M85.4,57.7v12.1h7.1v1.4&#xA;&#x9;h-8.8V57.7H85.4L85.4,57.7z M95,71.2h-1.8l6.7-15.3l6.7,15.3h-1.9L103,67h-4.5l0.5-1.4h3.4l-2.5-6.1L95,71.2L95,71.2z M108.5,71.2&#xA;&#x9;V57.7h5.8c2.6,0,3.9,1.1,3.9,3.2c0,1.8-1.3,3.1-3.8,3.9l4.6,6.4h-2.3l-4.3-6.1V64c2.6-0.4,3.9-1.4,3.9-3c0-1.2-0.7-1.9-2.1-1.9h-3.9&#xA;&#x9;v12.1H108.5L108.5,71.2z" fill="#FFFFFF"/>
	<g id="surface1">
		<path d="M23,49.1L8.9,54l2.1,18.3L23,78.9l11.9-6.5L37,54L23,49.1z" fill="#DD0031"/>
		<path d="M23,49.1v3.3v0v26.5l11.9-6.5L37,54L23,49.1z" fill="#C3002f"/>
		<path d="M23,52.4l-8.8,19.4h3.3l1.8-4.4h7.5l1.8,4.4h3.3L23,52.4z M25.6,64.8h-5.1l2.6-6.1L25.6,64.8z" fill="#FFFFFF"/>
	</g>
</svg>;
  }
});