import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HardhatOriginalWordmarkIcon',
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
		<linearGradient id="a" gradientTransform="translate(-.707 47.928) scale(.78049)" gradientUnits="userSpaceOnUse" x1="10.561" x2="10.561" y1="30.514" y2="6.186">
			<stop stopColor="#EDCF00"/>
			<stop offset=".33" stopColor="#F0D500"/>
			<stop offset=".77" stopColor="#F9E500"/>
			<stop offset="1" stopColor="#FFF100"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="translate(-.707 47.928) scale(.78049)" gradientUnits="userSpaceOnUse" x1="46.089" x2="46.089" y1="30.692" y2="13.092">
			<stop stopColor="#EDCF00"/>
			<stop offset=".59" stopColor="#F7E100"/>
			<stop offset="1" stopColor="#FFF100"/>
		</linearGradient>
		<radialGradient id="c" cx="0" cy="0" gradientTransform="matrix(14.47011 0 0 14.37161 2.181 84.717)" gradientUnits="userSpaceOnUse" r="1">
			<stop stopColor="#FFF100"/>
			<stop offset=".23" stopColor="#F9E500"/>
			<stop offset=".67" stopColor="#F0D500"/>
			<stop offset="1" stopColor="#EDCF00"/>
		</radialGradient>
	</defs>
	<path d="M58.256 71.218v-6.074h-6.824v6.074h-2.391V57.432h2.391v5.794h6.824V57.43h2.414v13.787zm14.313.002-.479-1.658c-.522.862-2.066 1.815-4.37 1.815-2.392 0-4.305-1.056-4.305-3.384 0-2.024 1.456-2.952 4.63-3.252l3.502-.345c-.065-1.603-.653-2.531-2.895-2.531-2.066 0-2.63.82-2.63 2.198l-2.266.022c0-2.284.956-4.049 4.87-4.049 4.545 0 5.2 1.94 5.2 4.91v6.27zm-1.023-5.084-3.15.345c-1.934.217-2.587.625-2.587 1.488 0 1.012.87 1.594 2.5 1.594 2.044 0 3.241-1.163 3.241-3.08l-.003-.347zm10.025-4.095c-2.327 0-2.788 1.277-2.788 3.059v6.118h-2.322v-11.03h1.24l.55 1.53c.347-.732 1.412-1.68 3.586-1.68h.37v2.047c-.224 0-.44-.044-.636-.044zm11.177 9.178-.522-1.574c-.392.755-1.63 1.725-4.266 1.725-3.674 0-4.763-2.65-4.763-5.666 0-3.017 1.044-5.666 4.74-5.666 2.197 0 3.306.776 3.784 1.509v-5.56h2.284V71.22Zm-4.11-9.244c-2.543 0-3.065 1.508-3.065 3.727 0 2.218.523 3.77 3.044 3.77 2.588 0 3.13-1.509 3.13-3.77 0-2.131-.454-3.725-3.109-3.725zm16.18 9.244v-6.183c0-2.068-.349-3.059-2.72-3.059-2.347 0-2.849.97-2.849 3.059l-.042 6.183h-2.283V55.988h2.284v5.575c.434-.79 1.412-1.529 3.544-1.529 3.632 0 4.37 2.048 4.37 5.214v5.967zm13.744.001-.479-1.658c-.523.862-2.067 1.815-4.375 1.815-2.393 0-4.306-1.056-4.306-3.384 0-2.024 1.458-2.952 4.633-3.252l3.5-.345c-.061-1.603-.648-2.531-2.895-2.531-2.065 0-2.631.82-2.631 2.198l-2.266.022c0-2.284.957-4.049 4.87-4.049 4.546 0 5.2 1.94 5.2 4.91v6.27zm-1.022-5.084-3.151.345c-1.934.217-2.587.626-2.587 1.488 0 1.012.87 1.594 2.5 1.594 2.044 0 3.241-1.163 3.241-3.08zm7.611-4.095v6.01c0 1.035.435 1.509 2.849 1.402v1.849c-3.675.215-5.218-.647-5.218-3.255v-6.006h-1.59v-1.378l1.588-.474v-2.757h2.305v2.757h2.913v1.849z" fill="#fff"/>
	<path d="M38.927 74.612v-1.89c0-.35-.59-.685-1.651-.987l.026-2.352c0-3.623-1.124-7.158-3.22-10.127a17.815 17.815 0 0 0-8.497-6.47l-.076-.471a1.344 1.344 0 0 0-.318-.68 1.364 1.364 0 0 0-.636-.408 18.067 18.067 0 0 0-10.088 0 1.362 1.362 0 0 0-.639.406 1.35 1.35 0 0 0-.32.68l-.072.44a17.82 17.82 0 0 0-8.556 6.465 17.56 17.56 0 0 0-3.246 10.164v2.362c-1.046.301-1.629.632-1.629.981v1.89a.46.46 0 0 0 .068.318 4.567 4.567 0 0 1 1.754-.792 34.48 34.48 0 0 1 4.92-.816 3.317 3.317 0 0 1 2.58.825 6.985 6.985 0 0 0 4.69 1.804h10.9a6.98 6.98 0 0 0 4.688-1.806 3.32 3.32 0 0 1 2.582-.834c1.657.153 3.302.424 4.919.813a4.105 4.105 0 0 1 1.662.722c.028.027.061.051.085.077a.468.468 0 0 0 .074-.314z" fill="#fff100"/>
	<path d="M9.353 70.636a41.416 41.416 0 0 1-.023-1.306c.005-6.568 1.554-12.46 4.107-16.574A17.82 17.82 0 0 0 4.88 59.22a17.56 17.56 0 0 0-3.247 10.162v2.362a43.63 43.63 0 0 1 7.72-1.108z" fill="url(#a)"/>
	<path d="M37.3 69.382a17.502 17.502 0 0 0-4.07-11.236 36.332 36.332 0 0 1 1.687 11.181c0 .64-.017 1.272-.047 1.9a22.236 22.236 0 0 1 2.4.506l.03-2.35z" fill="url(#b)"/>
	<path d="M37.106 74.134a34.517 34.517 0 0 0-4.92-.816 3.319 3.319 0 0 0-2.581.829 6.98 6.98 0 0 1-4.69 1.805H14.02a6.984 6.984 0 0 1-4.688-1.805 3.316 3.316 0 0 0-2.582-.836 34.608 34.608 0 0 0-4.92.816 4.628 4.628 0 0 0-1.752.792c.827 1.255 9.195 2.572 19.392 2.572s18.561-1.321 19.39-2.571c-.029-.025-.06-.05-.085-.077a4.264 4.264 0 0 0-1.67-.709z" fill="url(#c)"/>
	<path d="m19.465 56.056-4.172 7.042 4.172 2.568v-9.61Z" fill="#0a0a0a"/>
	<path d="M19.467 56.059v9.604l4.171-2.563zm0 11v3.348c.078-.11 4.171-5.916 4.171-5.918l-4.171 2.57z" fill="#4b4d4d"/>
	<path d="m19.467 67.06-4.173-2.567 4.173 5.917v-3.352z" fill="#0a0a0a"/>
</svg>;
  }
});