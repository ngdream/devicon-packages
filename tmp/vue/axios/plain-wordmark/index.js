import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AxiosPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#5a29e4'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<g transform="matrix(0.65827504,0,0,0.65827504,2,53.815056)">
		<path d="m 93.295,3.65206 -6.939,5.65289 h 4.5316 V 27.68 l 2.4074,-1.9389 z"/>
		<path d="m 95.295,24.0997 7.061,-5.7947 H 97.6975 V 0.350052 L 95.295,2.02275 Z"/>
		<path d="m 182.695,6.95295 c 0.8,0.416 1.376,0.768 1.728,1.056 l 2.496,-4.752 c -1.248,-0.768 -2.752,-1.456 -4.512,-2.064 -1.728,-0.607995 -3.6,-0.911998 -5.616,-0.911998 -1.92,0 -3.696,0.32 -5.328,0.959998 -1.6,0.64 -2.88,1.584 -3.84,2.832 -0.928,1.248 -1.392,2.8 -1.392,4.656 0,2.08005 0.656,3.68005 1.968,4.80005 1.344,1.088 3.392,1.984 6.144,2.688 2.208,0.576 3.984,1.104 5.328,1.584 1.376,0.448 2.064,1.2 2.064,2.256 0,1.568 -1.472,2.352 -4.416,2.352 -1.472,0 -2.864,-0.176 -4.176,-0.528 -1.312,-0.352 -2.464,-0.784 -3.456,-1.296 -0.96,-0.512 -1.648,-0.976 -2.064,-1.392 l -2.592,5.04 c 1.664,1.056 3.568,1.888 5.712,2.496 2.144,0.608 4.304,0.912 6.48,0.912 1.888,0 3.648,-0.256 5.28,-0.768 1.632,-0.544 2.944,-1.408 3.936,-2.592 1.024,-1.216 1.536,-2.8161 1.536,-4.8001 0,-1.632 -0.384,-2.9439 -1.152,-3.9359 -0.736,-1.024 -1.808,-1.84 -3.216,-2.448 -1.376,-0.608 -3.008,-1.152 -4.896,-1.632 -2.144,-0.512 -3.776,-0.976 -4.896,-1.392 -1.088,-0.41605 -1.632,-1.12005 -1.632,-2.11205 0,-1.696 1.504,-2.544 4.512,-2.544 1.12,0 2.208,0.16 3.264,0.48 1.056,0.288 1.968,0.64 2.736,1.056 z"/>
		<path d="m 132.182,27.497 c -2.112,0 -4.032,-0.368 -5.76,-1.104 -1.728,-0.768 -3.217,-1.792 -4.465,-3.072 -1.248,-1.312 -2.208,-2.784 -2.88,-4.416 -0.671,-1.632 -1.008,-3.312 -1.008,-5.04 0,-1.76 0.352,-3.456 1.056,-5.08805 0.704,-1.632 1.697,-3.07199 2.977,-4.32 1.28,-1.28 2.783,-2.288 4.511,-3.024 1.728,-0.735997 3.616,-1.104001 5.664,-1.104001 2.112,0 4.033,0.400003 5.761,1.200001 1.728,0.768 3.2,1.808 4.416,3.12 1.248,1.28 2.207,2.736 2.879,4.368 0.672,1.63205 1.009,3.29595 1.009,4.99195 0,1.76 -0.352,3.4561 -1.056,5.0881 -0.704,1.6 -1.697,3.04 -2.977,4.32 -1.248,1.248 -2.735,2.24 -4.463,2.976 -1.728,0.736 -3.616,1.104 -5.664,1.104 z m -8.257,-13.584 c 0,1.44 0.337,2.816 1.009,4.128 0.671,1.28 1.615,2.32 2.831,3.12 1.248,0.8 2.736,1.2 4.464,1.2 1.76,0 3.248,-0.416 4.464,-1.248 1.217,-0.864 2.144,-1.936 2.784,-3.2161 0.64,-1.312 0.961,-2.6559 0.961,-4.0319 0,-1.44 -0.336,-2.8001 -1.008,-4.08005 -0.672,-1.28 -1.632,-2.304 -2.881,-3.072 -1.216,-0.8 -2.671,-1.2 -4.367,-1.2 -1.76,0 -3.265,0.416 -4.513,1.248 -1.216,0.832 -2.144,1.88801 -2.784,3.16801 -0.64,1.28004 -0.96,2.60804 -0.96,3.98404 z"/>
		<path d="M 0,27.305 11.712,0.472954 h 4.752 L 28.128,27.305 H 21.984 L 19.296,21.017 H 8.88 L 6.192,27.305 Z M 14.112,7.52895 10.176,15.977 h 7.728 z"/>
		<path d="m 50.8211,0.472954 7.392,9.503996 7.392,-9.503996 h 6.288 L 61.2851,14.057 71.5571,27.305 h -6.288 l -7.056,-9.12 -7.008,9.12 h -6.384 L 55.1411,14.057 44.4851,0.472954 Z"/>
	</g>
</svg>;
  }
});