import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'FirebaseLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ffa000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M35.377 0a2.425 2.425 0 0 0-.383.035 2.423 2.423 0 0 0-1.989 2.014L18.062 97.667l.928.309 9.836-18.723 24.995-47.591L37.5 1.215l-.057-.054.09.12a2.422 2.422 0 0 0-2.156-1.28Zm.01.992a1.422 1.422 0 0 1 1.272.756l.035.066.001.002L52.7 31.668 27.947 78.792l-8.443 16.07 14.482-92.66a1.415 1.415 0 0 1 1.174-1.188 1.429 1.429 0 0 1 .227-.022zm28.165 17.16c-.898 0-1.725.498-2.143 1.294v.002l-6.98 13.29-.007-.014L20.16 97.95l.79.58 10.67-10.682 34.195-34.255L77.489 41.9 65.697 19.449v-.002a2.422 2.422 0 0 0-2.144-1.293zm0 .993c.535 0 1.018.292 1.266.764L76.27 41.713 65.111 52.89 30.916 87.145l-8.356 8.371 31.897-60.724.007.013 7.823-14.896a1.42 1.42 0 0 1 1.265-.764zm31.431 7.227v.072c-.045.008-.093.003-.137.014a2.418 2.418 0 0 0-1.138.641h-.002L79.001 41.83 66.537 54.317l-49.08 49.163 41.979 23.543h.048a8.27 8.27 0 0 0 7.917-.064v.002l41.54-23.097.975-.487L97.803 28.41v-.004h-.002a2.424 2.424 0 0 0-1.65-1.898 2.437 2.437 0 0 0-.654-.116zm.48 1.012c.126.005.257.026.387.068.515.165.884.593.975 1.124h.002l11.993 74.22-41.901 23.296a7.289 7.289 0 0 1-7.111 0l-.112-.062h-.002l-40.61-22.775L67.24 55.018l12.462-12.487 14.705-14.73a1.423 1.423 0 0 1 .672-.378 1.402 1.402 0 0 1 .382-.039z"/>
</svg>;
  }
});