import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'BrowserstackPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#0070f0'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M65.029 30.012a22.364 22.364 0 0 0-22.364 22.364A22.364 22.364 0 0 0 65.029 74.74a22.364 22.364 0 0 0 22.364-22.364 22.364 22.364 0 0 0-22.364-22.364zm10.707 7.575a4.414 7.062 24.166 0 1 1.14.248 4.414 7.062 24.166 0 1 1.136 8.25 4.414 7.062 24.166 0 1-6.918 4.637 4.414 7.062 24.166 0 1-1.135-8.25 4.414 7.062 24.166 0 1 5.776-4.884zM65.618.293a50.022 50.022 0 0 0-50.023 50.023 50.022 50.022 0 0 0 28.11 44.9 50.022 50.022 0 0 1-.58-.239 42.667 42.667 0 0 0 2.764 1.247 42.667 42.667 0 0 1-8.81-7.57 42.667 42.667 0 0 0 29.129 11.685 42.667 42.667 0 0 0 42.665-42.665A42.667 42.667 0 0 0 98.2 29.514a42.667 42.667 0 0 1 13.223 30.71 42.667 42.667 0 0 1-7.394 23.896 45.903 45.903 0 0 0 11.316-29.978 45.903 45.903 0 0 0-45.9-45.903 45.903 45.903 0 0 0-32.019 13.268 45.903 45.903 0 0 1 .245-.262A45.903 45.903 0 0 1 71.995 5.687a45.903 45.903 0 0 1 45.9 45.903 45.903 45.903 0 0 1-3.06 16.154 57.673 57.673 0 0 1-57.162 50.151A57.673 57.673 0 0 1 .609 68.531a63.852 63.852 0 0 0 63.538 59.467 63.852 63.852 0 0 0 63.852-63.852 63.852 63.852 0 0 0-51.165-62.58A50.022 50.022 0 0 0 65.619.294zm-3.14 11.87a30.014 30.014 0 0 1 21.61 9.4 30.014 30.014 0 0 0-19.06-6.851 30.014 30.014 0 0 0-30.011 30.014 30.014 30.014 0 0 0 6.949 18.891 24.401 24.401 0 0 1-2.288-10.292 24.401 24.401 0 0 1 24.398-24.4 24.401 24.401 0 0 1 24.404 24.4 24.401 24.401 0 0 1-24.404 24.402 24.401 24.401 0 0 1-21.77-13.487 30.014 30.014 0 0 1-9.84-22.065A30.014 30.014 0 0 1 62.478 12.16zm8.926 7.943h.002a26.189 26.189 0 0 1 26.187 26.19 26.189 26.189 0 0 1-8.255 18.87 26.189 26.189 0 0 0 5.705-16.32 26.189 26.189 0 0 0-26.189-26.19 26.189 26.189 0 0 0-16.245 5.662 26.189 26.189 0 0 1 18.794-8.212zm-37.97 6.334a35.604 35.604 0 0 0-9.6 24.17 35.604 35.604 0 0 0 35.603 35.604 35.604 35.604 0 0 0 24.397-9.785 35.604 35.604 0 0 1-26.947 12.336 35.604 35.604 0 0 1-31.489-19.172 35.604 35.604 0 0 1-.002 0 35.604 35.604 0 0 1-4.11-16.431 35.604 35.604 0 0 1 10.896-25.518 45.903 45.903 0 0 1 .007-.01 35.604 35.604 0 0 1 1.245-1.193zm55.802 38.828a26.189 26.189 0 0 1-1.076 1.116 26.189 26.189 0 0 1-.4.358 26.189 26.189 0 0 0 1.475-1.474zm-4.998 4.648a26.189 26.189 0 0 1-.763.478 26.189 26.189 0 0 0 .763-.478zm-4.715 2.769a26.189 26.189 0 0 1-1.218.426 26.189 26.189 0 0 0 1.218-.426zM57.672 0A57.673 57.673 0 0 0 0 57.673a57.673 57.673 0 0 0 57.67 57.673 57.673 57.673 0 0 0 55.916-44.498 45.903 45.903 0 0 1-9.762 13.537 42.667 42.667 0 0 1-35.07 18.503 42.667 42.667 0 0 1-18.777-4.43 50.022 50.022 0 0 1-36.937-48.143A50.022 50.022 0 0 1 62.996.297a57.673 57.673 0 0 0-5.324-.295zm6.474.293a63.852 63.852 0 0 0-.488.018 50.022 50.022 0 0 1 1.024.026 50.022 50.022 0 0 1 .614-.028 63.852 63.852 0 0 0-1.15-.016zM47.65 33.678a26.189 26.189 0 0 0-.148.235 26.189 26.189 0 0 1 .148-.235z"/>
</svg>;
  }
});