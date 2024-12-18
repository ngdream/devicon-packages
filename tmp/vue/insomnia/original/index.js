import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'InsomniaOriginalIcon',
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
		<linearGradient id="a" gradientTransform="matrix(4 0 0 4 0 -4)" gradientUnits="userSpaceOnUse" x1="16.181" x2="16.181" y1="28.39" y2="5.61">
			<stop stopColor="#7400E1"/>
			<stop offset="1" stopColor="#4000BF"/>
		</linearGradient>
	</defs>
	<path d="M64 124.746c33.549 0 60.746-27.197 60.746-60.746 0-33.549-27.197-60.746-60.746-60.746C30.45 3.254 3.254 30.451 3.254 64c0 33.55 27.197 60.746 60.746 60.746z" fill="#fff"/>
	<path d="M64 0C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64Zm0 6.509c31.752 0 57.492 25.74 57.492 57.491 0 31.752-25.74 57.492-57.492 57.492S6.508 95.752 6.508 64 32.248 6.509 64 6.509z" fill="#4000bf"/>
	<path d="M64.723 18.44c25.162 0 45.56 20.398 45.56 45.56 0 25.162-20.398 45.56-45.56 45.56-25.161 0-45.559-20.398-45.559-45.56a45.41 45.41 0 0 1 3.427-17.366c3.224 4.391 8.425 7.242 14.29 7.242 9.786 0 17.718-7.932 17.718-17.718 0-5.866-2.85-11.066-7.242-14.29a45.426 45.426 0 0 1 17.366-3.427z" fill="url(#a)"/>
</svg>;
  }
});