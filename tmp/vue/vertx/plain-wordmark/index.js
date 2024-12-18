import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VertxPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#782a91'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m0 47.63 10.2 28.44h4.788l10.233-28.439h-5.434L12.56 69.879 5.412 47.631H0zm26.176 0v28.44h18.592v-3.947H31.119v-8.746h11.686v-3.906H31.119v-7.852h13.514v-3.988H26.176zm20.379 0v28.44H51.5V51.62h5.213c1.714.03 3.013.455 3.875 1.286.862.831 1.299 2.015 1.299 3.532 0 1.454-.468 2.607-1.403 3.449-.935.841-2.244 1.256-3.906 1.256h-2.814v2.513l8.943 12.414h5.297v-.25l-8.018-11.082c2.587-.571 4.497-2.255 5.463-3.73.852-1.309 1.381-2.877 1.381-4.777 0-2.784-.893-4.925-2.68-6.39-1.776-1.474-4.31-2.21-7.591-2.21H46.555zm19.736 0v3.99h8.787v24.45h4.227c.01-1.028.26-1.995.685-2.857V51.619h8.871v-3.988h-22.57zm23.557 0 8.861 14.106-6.97 10.979a6.62 6.62 0 0 1 .954 3.365h5.205l18.573-28.45h-8.756l-4.945 7.708-4.196-7.707h-8.726zm28.41 0v.716h1.578v4.384h.883v-4.384h1.59v-.715h-4.051zm4.496 0v5.1h.883v-1.683l-.082-2.244 1.506 3.928h.632l1.508-3.938-.084 2.254v1.684H128v-5.1h-1.143l-1.464 3.914-1.475-3.914h-1.164zm-13.451 16.38-4.31 6.513 3.085 5.547h8.838l-7.613-12.06zm-23.309 7.947a4.207 4.207 0 0 0-4.207 4.207 4.207 4.207 0 0 0 4.207 4.205 4.207 4.207 0 0 0 4.207-4.205 4.207 4.207 0 0 0-4.207-4.207z"/>
</svg>;
  }
});