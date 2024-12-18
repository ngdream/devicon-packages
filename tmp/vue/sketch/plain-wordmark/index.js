import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SketchPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#fdad00'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m15.598 49.438-8.493.878-.472 8.764 8.965-9.642zm1.365.001 8.984 9.667-.474-8.774-8.51-.892zm-.684.04L6.9 59.559h18.75l-.106-.114-9.264-9.966zm-9.77 1.45L0 59.56h6.047l.463-8.63zm19.53 0 .461 8.62h6.008l-6.469-8.62zM59.5 53.106V75.18h2.732v-4.145l2.875-2.804 5.131 6.816.112.143h3.392l-.437-.569-6.258-8.25 5.781-5.748.61-.61h-3.72l-.1.102-7.386 7.436-.01-14.09v-.355H59.5zm55.547.04V75.18h2.795v-8.9a3.779 3.779 0 0 1 3.992-4.135c2.296 0 3.453 1.33 3.453 3.85v9.184H128V65.6c0-3.566-2.205-5.932-5.842-5.932a5.984 5.984 0 0 0-4.316 1.666l-.06-7.834v-.355h-2.735zm-66.102.7c-4.47 0-7.295 2.653-7.295 6.096a4.876 4.876 0 0 0 2.032 4.328 10.697 10.697 0 0 0 4.267 1.464l.315.06.314.06a11.175 11.175 0 0 1 3.607 1.089 2.773 2.773 0 0 1 1.463 2.64c0 2.184-1.839 3.424-5.08 3.424-3.24 0-4.947-1.544-5.16-4.307v-.326h-2.773v.365c.172 4.125 2.945 6.858 7.892 6.858 4.714 0 7.924-2.449 7.924-6.156a5.08 5.08 0 0 0-2.031-4.399 10.707 10.707 0 0 0-4.256-1.605l-.387-.09-.435-.092c-3.668-.772-4.836-1.443-4.836-3.434 0-1.99 1.685-3.373 4.51-3.373a4.216 4.216 0 0 1 4.56 4.317v.345h2.703v-.355c-.101-4.124-2.864-6.908-7.334-6.908zm42.483 2.034v4.123h-2.803v2.418h2.803v8.523c0 2.794 1.453 4.307 4.064 4.307a8.808 8.808 0 0 0 1.21-.07l.425-.082.266-.07v-2.53l-.428.092h-.387a5.994 5.994 0 0 1-.75.07h-.072c-1.168 0-1.635-.548-1.635-1.92v-8.32h3.332v-2.418h-3.332V55.88h-2.693zm-10.676 3.738c-4.368 0-7.467 3.505-7.467 7.924 0 4.419 2.965 7.953 7.496 7.953a7.111 7.111 0 0 0 7.031-5.078l.143-.457H85.16l-.08.232a4.328 4.328 0 0 1-4.217 2.805 4.704 4.704 0 0 1-4.754-4.47l11.631-.03h.336v-1.129c0-4.46-2.956-7.75-7.324-7.75zm24.818.03c-4.388 0-7.498 3.525-7.498 7.954 0 4.43 3.13 7.934 7.508 7.934h.01a6.969 6.969 0 0 0 7.111-5.78l.082-.427h-2.754l-.07.264a4.267 4.267 0 0 1-4.379 3.404c-2.804 0-4.734-2.215-4.734-5.394 0-3.18 1.93-5.414 4.734-5.414a4.267 4.267 0 0 1 4.379 3.402l.07.264h2.733l-.082-.426a6.969 6.969 0 0 0-7.11-5.781zM.082 60.083l14.951 17.27-8.89-17.27H.082zm6.648 0 9.56 18.502 9.526-18.502H6.73zm19.674 0-8.892 17.27 14.951-17.27h-6.059zm54.408 2.113a4.389 4.389 0 0 1 4.522 3.983h-9.143a4.602 4.602 0 0 1 4.621-3.983z"/>
</svg>;
  }
});