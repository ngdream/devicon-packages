import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ShopwareOriginalWordmarkIcon',
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
	<path d="M38.91 63.74c-1.13-.48-2.05-.94-2.05-1.66 0-.5.58-1.01 1.57-1.01.84.01 1.67.2 2.43.56.26.14.59.04.74-.22l.37-.79c.13-.3.03-.66-.24-.84a6.306 6.306 0 00-3.31-.84c-2.74 0-3.88 1.66-3.88 3.08 0 1.84 1.45 2.79 3.18 3.59 1.57.69 2.43 1.2 2.43 1.95 0 .65-.53 1.1-1.47 1.1-1 0-1.98-.29-2.82-.84a.542.542 0 00-.74.14l-.5 1.06c-.09.21-.01.46.19.58 1.1.75 2.4 1.16 3.73 1.16 2.53 0 4.05-1.54 4.05-3.31-.04-2.05-1.61-2.82-3.68-3.71z" fill="#189EFF"/>
	<path d="M105.34 70.67c.32-.02.57-.28.58-.6v-5.75c0-2.94-.37-5.22-4.14-5.22-1.38-.01-2.76.22-4.07.67-.29.07-.47.36-.4.64 0 .02.01.04.02.05l.24.96c.03.3.3.52.6.49.02 0 .04-.01.06-.01 1.07-.33 2.19-.51 3.31-.55 1.49 0 1.95.84 1.9 2.72-.78-.23-1.58-.35-2.38-.37-3.03 0-4.72 1.64-4.72 3.8 0 2.46 1.57 3.31 3.78 3.31 1.81 0 3.68-.03 4.46-.07l.76-.07zm-1.95-2.09c-.37.58-1.64.43-2.74.41-1.23-.02-1.84-.46-1.84-1.52 0-1.23 1.06-1.95 2.43-1.95.73-.01 1.46.13 2.14.41v2.65h.01zM124.65 58.97c.75 0 1.35-.6 1.35-1.35 0-.75-.6-1.35-1.35-1.35-.75 0-1.35.6-1.35 1.35 0 .75.6 1.35 1.35 1.35-.01 0 0 0 0 0zm0-2.48c.64-.01 1.16.5 1.18 1.13.01.64-.5 1.17-1.13 1.18-.64.01-1.16-.49-1.18-1.13v-.02c-.01-.63.49-1.14 1.11-1.16h.02z" fill="#189EFF"/>
	<path d="M124.19 58.32h.12c.03 0 .05-.02.05-.05v-.48h.29l.24.51c0 .02.03.02.05.02h.14c.03 0 .05-.02.03-.05l-.26-.48c.16-.06.27-.2.29-.37a.414.414 0 00-.4-.43h-.55c-.03 0-.05.02-.05.05v1.28c.03-.02.03 0 .05 0zm.17-1.17h.35c.13 0 .24.11.24.24s-.11.24-.24.24h-.34l-.01-.48zM50.08 58.97c-1.19.02-2.34.44-3.27 1.18V55.1a.578.578 0 00-.53-.53h-1.37c-.29.01-.52.24-.53.53v15.17c0 .29.24.53.53.53h1.35c.28.02.53-.18.55-.46V62.95a3.374 3.374 0 012.96-1.64c1.47 0 2.26 1.1 2.26 2.94v5.99c0 .29.24.53.53.53h1.37c.29-.01.52-.24.53-.53v-5.93c0-3.07-1.18-5.34-4.38-5.34zM78.78 64.44c-.15-3.86-1.76-5.47-5.47-5.47-1.43.03-2.85.25-4.21.67-.39.17-.67.37-.67.63v14.42c0 .29.24.53.53.53h1.13c.28.03.54-.17.57-.46v-4.15c1.18.18 2.37.24 3.57.19 2.62-.07 4.38-1.98 4.53-5.2.03-.48.03-.96 0-1.44v.27l.02.01zm-2.36 1.18c-.05 2.21-.67 3.15-2.53 3.25a26.2 26.2 0 01-3.06-.2c-.1-.02-.14-.07-.14-.14v-6.96c0-.06.04-.12.11-.12h.02c.82-.19 1.66-.3 2.5-.31 2.24 0 3.01.34 3.11 3.15l-.01 1.33zM95.01 59.21h-1.04c-.29 0-.74 0-.86.34l-1.81 6.53h-.05l-3.04-6.84a.486.486 0 00-.48-.27h-.17c-.19 0-.37.1-.46.27l-3.06 6.81h-.05l-1.84-6.5a.495.495 0 00-.5-.34h-1.51c-.39 0-.56.29-.39.65l3.31 10.67c.07.19.26.31.46.29h.14c.19.02.37-.09.43-.27l3.49-7.7h.05l3.47 7.68c.1.17.28.27.48.27h.1c.21.02.41-.09.51-.29l3.23-10.67c.19-.34-.03-.63-.41-.63zM113.07 59.12h-.46c-.58 0-1.16.03-1.69.05-1.01.05-1.61.12-2.05.17l-.6.07c-.18.01-.34.1-.46.24a.37.37 0 00-.1.26v10.35c0 .29.24.53.53.53h1.13c.46 0 .79-.05.79-.53v-8.62c0-.07.1-.14.17-.19.26-.17.94-.29 2.29-.29h.3c.32.02.64.09.94.22.25.12.56.02.68-.23.01-.01.01-.02.01-.03l.58-.96c.38-.75-.98-1.04-2.06-1.04zM120.84 58.97c-3.4 0-5.64 2.72-5.64 5.89 0 3.17 2.24 5.92 5.66 5.92 1.52.05 3.01-.44 4.21-1.38.33-.29.24-.51.05-.77l-.67-1.03c-.19-.29-.41-.22-.68-.05-.79.63-1.76.96-2.77.96a3.31 3.31 0 01-3.37-3.08h7.81c.27-.01.49-.22.51-.48.02-.19.05-.58.05-.79.08-2.78-2.1-5.09-4.88-5.18-.09-.01-.18-.01-.28-.01zm-3.11 4.65c.17-1.42 1.25-2.58 3.03-2.58a2.674 2.674 0 012.79 2.56v.02h-5.82zM66.45 62.47c-.24-.69-.6-1.33-1.08-1.88a4.81 4.81 0 00-1.66-1.2c-.73-.29-1.5-.44-2.28-.43-.78-.01-1.56.14-2.28.43-.63.28-1.2.69-1.66 1.2a5.98 5.98 0 00-1.08 1.88 7.847 7.847 0 000 4.84c.24.68.61 1.3 1.08 1.84.46.52 1.02.93 1.66 1.2.72.3 1.5.45 2.28.45.78.01 1.56-.14 2.29-.43.63-.28 1.2-.69 1.66-1.2.47-.54.84-1.17 1.08-1.84.52-1.57.52-3.27 0-4.84l-.01-.02zm-5.08 6.4c-2.05 0-3.08-1.74-3.08-3.88 0-2.14 1.03-3.88 3.08-3.88s3.08 1.74 3.08 3.88c.01 2.14-1.03 3.88-3.08 3.88z" fill="#189EFF"/>
	<g fill="#189EFF">
		<path d="M23.9 73.97c-1.16-.87-2.84-1.52-4.65-2.21-2.14-.82-4.58-1.76-6.38-3.23a7.625 7.625 0 01-3.06-6.33 7.07 7.07 0 012.82-5.8c2.07-1.64 5.2-2.48 9.05-2.48 1.01 0 2.03.06 3.03.19.09.01.17-.04.19-.12.05-.07.02-.17-.05-.22-5.44-4.9-13.81-4.46-18.7.98s-4.45 13.82.99 18.71c2.43 2.19 5.58 3.4 8.85 3.4 2.84.01 5.6-.9 7.87-2.6.04-.04.07-.09.07-.15.03-.04.01-.09-.03-.14z"/>
		<path d="M29.19 62.42c0-.05-.03-.1-.07-.12-2.77-2.29-5.01-3.23-7.73-3.23-1.44 0-2.55.29-3.31.87-.63.47-1 1.21-.99 2 0 2.26 2.8 3.31 6 4.53 1.7.59 3.36 1.31 4.96 2.14.03.02.06.02.1.02.03 0 .05 0 .07-.02.06-.02.1-.07.12-.12.6-1.54.91-3.18.91-4.84 0-.41-.02-.82-.06-1.23z"/>
	</g>
</svg>;
  }
});