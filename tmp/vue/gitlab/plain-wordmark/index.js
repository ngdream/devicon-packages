import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GitlabPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#E24329'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
	<path d="m108.406 36.339-.129-.33L95.775 3.381a3.26 3.26 0 0 0-1.287-1.55 3.348 3.348 0 0 0-3.826.206 3.35 3.35 0 0 0-1.11 1.684L81.11 29.548H46.928L38.487 3.72a3.277 3.277 0 0 0-1.11-1.688 3.348 3.348 0 0 0-3.826-.206c-.58.369-1.03.911-1.287 1.55L19.738 35.99l-.124.33a23.216 23.216 0 0 0 7.7 26.831l.043.033.115.081 19.045 14.262 9.422 7.131 5.739 4.333a3.858 3.858 0 0 0 4.668 0l5.739-4.333 9.422-7.131 19.16-14.348.048-.038a23.224 23.224 0 0 0 7.691-26.802z"/>
	<g>
		<path d="M22.367 105.666h5.785c-.965-6.151-6.291-10.436-13.222-10.436-8.201 0-14.355 6.029-14.355 16.127 0 9.918 5.877 16.069 14.522 16.069 7.759 0 13.313-4.991 13.313-13.069v-3.764H15.695v4.437h7.223c-.091 4.47-3.076 7.299-7.789 7.299-5.247 0-8.843-3.931-8.843-11.033 0-7.055 3.657-10.972 8.721-10.972 3.779.001 6.365 2.02 7.36 5.342zM32.237 126.997h5.539v-23.492h-5.539v23.492zm2.793-27.225c1.76 0 3.198-1.349 3.198-2.999 0-1.651-1.437-3.015-3.198-3.015-1.76 0-3.213 1.346-3.213 3.015s1.427 2.999 3.203 2.999h.01zM54.363 103.505h-4.638v-5.643h-5.539v5.643h-3.335v4.285h3.335v13.069c-.03 4.422 3.185 6.603 7.345 6.474a11.262 11.262 0 0 0 3.261-.551l-.935-4.333a6.758 6.758 0 0 1-1.62.216c-1.394 0-2.512-.49-2.512-2.725v-12.163h4.638v-4.272zM58.65 126.997h19.48v-4.759H64.329V95.657H58.65v31.34zM88.74 127.472c3.688 0 5.89-1.73 6.9-3.703h.183v3.228h5.333v-15.731c0-6.212-5.064-8.079-9.549-8.079-4.942 0-8.737 2.202-9.961 6.486l5.173.737c.549-1.608 2.111-2.984 4.825-2.984 2.573 0 3.98 1.316 3.98 3.627v.091c0 1.59-1.669 1.669-5.816 2.111-4.559.49-8.92 1.851-8.92 7.147-.013 4.622 3.367 7.07 7.852 7.07zm1.821-4.063c-2.311 0-3.965-1.057-3.965-3.091 0-2.128 1.851-3.015 4.318-3.368 1.455-.198 4.363-.566 5.079-1.145v2.768c.015 2.608-2.098 4.828-5.432 4.828v.008zM105.236 126.997h5.448v-3.703h.32c.874 1.714 2.695 4.117 6.735 4.117 5.539 0 9.687-4.394 9.687-12.135 0-7.835-4.269-12.089-9.702-12.089-4.147 0-5.877 2.494-6.72 4.193h-.234V95.657h-5.534v31.34zm5.432-11.751c0-4.572 1.958-7.515 5.524-7.515 3.688 0 5.587 3.137 5.587 7.515s-1.928 7.619-5.587 7.619c-3.535 0-5.524-3.06-5.524-7.619z"/>
	</g>
</svg>;
  }
});