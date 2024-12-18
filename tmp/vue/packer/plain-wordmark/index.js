import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PackerPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#1d94dd'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M49.022 0v12.18l20.697 11.953v36.533l9.742 5.582c6.03 3.482 10.96 1.394 10.96-4.63V34.825c0-6.03-4.93-13.808-10.96-17.29L49.02 0zm-11.43 10.56v59.672l28.004 16.176V26.744L37.592 10.56zm-5.373 83.338v5.75h1.117v-2.835a3.058 3.058 0 0 1 1.117-.35c.247 0 .35.102.35.326v2.86l1.056.001v-2.97c0-.728-.256-1.205-.96-1.205a3.886 3.886 0 0 0-1.563.39v-1.808l-1.117-.159zm-12.947.079v5.66h1.117v-2.358h2.144v2.37h1.115v-5.672h-1.117v2.377H20.39v-2.377h-1.117zm17.492 0v1.001h1.117v-1.001h-1.117zm3.996 0c-1.45 0-2.076.59-2.076 1.617l-.012 2.48c0 1.026.627 1.617 2.076 1.617a6.737 6.737 0 0 0 1.586-.191l-.121-.912a9.263 9.263 0 0 1-1.43.144c-.759 0-1.004-.258-1.004-.85v-2.155c0-.592.245-.846 1.004-.846a8.928 8.928 0 0 1 1.442.201l.12-.918a6.92 6.92 0 0 0-1.585-.187zm8.654 1.484a4.657 4.657 0 0 0-1.117.537v-.447h-.97v4.13h1.114V97.05a8.003 8.003 0 0 1 1.118-.592l-.145-.996zm-23.443.012a5.7 5.7 0 0 0-1.496.199l.132.785a6.037 6.037 0 0 1 1.184-.125c.682 0 .815.155.815.613v.424H25.58c-.858 0-1.238.415-1.238 1.117 0 .705.332 1.217 1.115 1.217a2.441 2.441 0 0 0 1.275-.355l.078.3h.87l.02-2.703c0-1.015-.39-1.472-1.73-1.472zm26.51 0a2.322 2.322 0 0 0-1.352.423l-.098-.345h-.85v5.826l1.118-.156v-1.674a5.939 5.939 0 0 0 1.115.12 1.259 1.259 0 0 0 1.406-1.435l-.023-1.341c0-.928-.454-1.418-1.317-1.418zm-22.346.011c-1.219 0-1.598.389-1.598 1.184 0 .791.08 1.038 1.117 1.281.748.157.748.224.748.537 0 .314-.078.414-.548.414a4.937 4.937 0 0 1-1.27-.18l-.144.78a5.058 5.058 0 0 0 1.472.234v-.011c1.28 0 1.64-.422 1.64-1.26 0-.835-.111-.992-1.306-1.293-.604-.134-.603-.237-.603-.49 0-.26.078-.362.548-.362a7.608 7.608 0 0 1 1.116.127l.097-.816a5.57 5.57 0 0 0-1.27-.145zm14.566.02c-1.462 0-1.853.773-1.853 1.611v1.014c0 .838.392 1.607 1.853 1.607l-.011-.011c1.465 0 1.852-.77 1.863-1.573v-1.037c0-.838-.39-1.611-1.852-1.611zm-7.937.047v4.097l1.117-.011V95.55h-1.117zm7.926.79c.572 0 .794.25.802.75v1.116c0 .46-.223.701-.79.701-.57 0-.794-.243-.794-.701v-1.115c0-.46.225-.705.793-.705l-.011-.045zm7.544 0c.393 0 .524.194.524.526v1.383c0 .368-.155.549-.531.549a4.91 4.91 0 0 1-.954-.114l.012-1.974a1.542 1.542 0 0 1 .95-.37zm-26.408 1.764h.737l.043.604a1.695 1.695 0 0 1-.803.211c-.325 0-.424-.097-.424-.41 0-.314.1-.405.447-.405zm46.078 4.803-4.287.6v24.1l4.287.001v-24.7zm-52.63 1.305v23.394h4.464v-7.588h4.455c5.39 0 7.623-2.213 7.623-6.287v-3.187c0-4.098-1.998-6.332-7.412-6.332h-9.13zm4.464 3.894h4.465c2.386 0 3.193.851 3.237 2.782v2.353c0 1.932-.737 2.848-3.237 2.848h-4.465v-7.983zm36.994 2.034c-5.383 0-7.38 1.973-7.38 6.572v4.678h-.002c0 4.598 2.01 6.574 7.38 6.574a14.036 14.036 0 0 0 4.186-.635l-.525-3.518a14.273 14.273 0 0 1-3.551.457c-2.456 0-3.192-.735-3.192-2.843v-4.744c0-2.112.736-2.848 3.192-2.848a15.464 15.464 0 0 1 3.55.459l.524-3.518a14.692 14.692 0 0 0-4.182-.634zm-16.902.011a22.292 22.292 0 0 0-5.86.834l.526 3.272a24.17 24.17 0 0 1 4.744-.526c2.746 0 3.27.67 3.27 2.57v1.8h-4.108c-3.483 0-4.992 1.327-4.992 4.81 0 2.946 1.341 5.088 4.467 5.088a9.365 9.365 0 0 0 5.092-1.508l.31 1.115h3.518l-.012-11.273c0-4.286-1.575-6.182-6.955-6.182zm46.736.012c-5.48 0-7.097 3.078-7.097 6.693v4.534c0 4.11 1.852 6.609 7.23 6.609A18.369 18.369 0 0 0 97 126.885l-.67-3.237a17.994 17.994 0 0 1-5.238.803c-2.614 0-3.338-.804-3.338-2.869v-.885h9.512v-3.646c0-3.695-1.219-6.887-6.7-6.887zm17.704.006a19.335 19.335 0 0 0-4.461 2.234l-.284-1.894H99.91v17.097h4.285V116.58a33.576 33.576 0 0 1 4.534-2.498l-.46-3.912zm-30.873.338-4.89 8.474 5.167 8.637h4.713l-5.239-8.637 5.028-8.472-4.78-.002zm13.193 3.15c2.108 0 2.601 1.125 2.601 2.742v.85h-5.449v-.85c0-1.628.737-2.742 2.848-2.742zm-47.252 7.486h3.172l-.01 2.524a6.708 6.708 0 0 1-3.236.885c-1.332 0-1.721-.427-1.721-1.721 0-1.297.389-1.687 1.795-1.687z"/>
</svg>;
  }
});