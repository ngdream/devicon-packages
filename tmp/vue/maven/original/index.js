import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'MavenOriginalIcon',
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
		<linearGradient id="i" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7274.8" x2="-7243.872" y1="2082.507" y2="2046.343">
			<stop style={{"stopColor":"#f69923","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#f79a23","stopOpacity":"1"}} offset=".312"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset=".838"/>
		</linearGradient>
		<linearGradient id="n" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7503.689" x2="-7283.036" y1="2086.595" y2="2086.595">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="o" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7477.053" x2="-7345.566" y1="2064.42" y2="2064.42">
			<stop style={{"stopColor":"#282662","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#662e8d","stopOpacity":"1"}} offset=".095"/>
			<stop style={{"stopColor":"#9f2064","stopOpacity":"1"}} offset=".788"/>
			<stop style={{"stopColor":"#cd2032","stopOpacity":"1"}} offset=".949"/>
		</linearGradient>
		<linearGradient id="p" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7491.296" x2="-7270.643" y1="2088.633" y2="2088.633">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="q" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7475.203" x2="-7359.244" y1="2085.61" y2="2085.61">
			<stop style={{"stopColor":"#282662","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#662e8d","stopOpacity":"1"}} offset=".095"/>
			<stop style={{"stopColor":"#9f2064","stopOpacity":"1"}} offset=".788"/>
			<stop style={{"stopColor":"#cd2032","stopOpacity":"1"}} offset=".949"/>
		</linearGradient>
		<linearGradient id="r" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7491.296" x2="-7270.643" y1="2065.799" y2="2065.799">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="s" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7504.984" x2="-7284.331" y1="2066.905" y2="2066.905">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="v" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7491.296" x2="-7270.643" y1="2058.959" y2="2058.959">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="y" gradientTransform="matrix(-.092 -.464 -.464 .092 318.72 -3557.936)" gradientUnits="userSpaceOnUse" x1="-7491.296" x2="-7270.643" y1="2059.762" y2="2059.762">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="z" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8307.632" x2="-8276.704" y1="2040.008" y2="2003.844">
			<stop style={{"stopColor":"#f69923","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#f79a23","stopOpacity":"1"}} offset=".312"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset=".838"/>
		</linearGradient>
		<linearGradient id="E" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8536.521" x2="-8315.868" y1="2044.096" y2="2044.096">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="F" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8509.885" x2="-8378.397" y1="2021.921" y2="2021.921">
			<stop style={{"stopColor":"#282662","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#662e8d","stopOpacity":"1"}} offset=".095"/>
			<stop style={{"stopColor":"#9f2064","stopOpacity":"1"}} offset=".788"/>
			<stop style={{"stopColor":"#cd2032","stopOpacity":"1"}} offset=".949"/>
		</linearGradient>
		<linearGradient id="G" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8524.128" x2="-8303.475" y1="2046.134" y2="2046.134">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="H" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8508.035" x2="-8392.076" y1="2043.111" y2="2043.111">
			<stop style={{"stopColor":"#282662","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#662e8d","stopOpacity":"1"}} offset=".095"/>
			<stop style={{"stopColor":"#9f2064","stopOpacity":"1"}} offset=".788"/>
			<stop style={{"stopColor":"#cd2032","stopOpacity":"1"}} offset=".949"/>
		</linearGradient>
		<linearGradient id="I" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8524.128" x2="-8303.475" y1="2023.3" y2="2023.3">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="J" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8537.816" x2="-8317.163" y1="2024.407" y2="2024.407">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="M" gradientTransform="matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)" gradientUnits="userSpaceOnUse" x1="-8524.128" x2="-8303.475" y1="2016.46" y2="2016.46">
			<stop style={{"stopColor":"#9e2064","stopOpacity":"1"}} offset=".323"/>
			<stop style={{"stopColor":"#c92037","stopOpacity":"1"}} offset=".63"/>
			<stop style={{"stopColor":"#cd2335","stopOpacity":"1"}} offset=".751"/>
			<stop style={{"stopColor":"#e97826","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<clipPath id="b">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="c">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="d">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="e">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="f">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="g">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="h">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<mask id="k">
			<g>
				<path style={{"fill":"#000","fillOpacity":".34902","stroke":"none"}} d="M0 0h128v128H0z"/>
			</g>
		</mask>
		<mask id="m">
			<g>
				<path style={{"fill":"#000","fillOpacity":".34902","stroke":"none"}} d="M0 0h128v128H0z"/>
			</g>
		</mask>
		<mask id="u">
			<g>
				<path style={{"fill":"#000","fillOpacity":".34902","stroke":"none"}} d="M0 0h128v128H0z"/>
			</g>
		</mask>
		<mask id="x">
			<g>
				<path style={{"fill":"#000","fillOpacity":".34902","stroke":"none"}} d="M0 0h128v128H0z"/>
			</g>
		</mask>
		<mask id="B">
			<g>
				<path style={{"fill":"#000","fillOpacity":".34902","stroke":"none"}} d="M0 0h128v128H0z"/>
			</g>
		</mask>
		<mask id="D">
			<g>
				<path style={{"fill":"#000","fillOpacity":".34902","stroke":"none"}} d="M0 0h128v128H0z"/>
			</g>
		</mask>
		<mask id="L">
			<g>
				<path style={{"fill":"#000","fillOpacity":".34902","stroke":"none"}} d="M0 0h128v128H0z"/>
			</g>
		</mask>
		<g id="j" clipPath="url(#b)">
			<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M43.695 53.98c-.265.293-.543.567-.824.844.145-.133.293-.289.43-.433.14-.13.27-.266.394-.41Zm0 0"/>
		</g>
		<g id="l" clipPath="url(#c)">
			<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M41.602 49.426c.046-.04.082-.086.125-.121.18-.18.363-.36.511-.543-.199.218-.425.43-.64.664Zm0 0"/>
		</g>
		<g id="t" clipPath="url(#d)">
			<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M43.309 54.398c-.133.149-.282.278-.43.434a5.68 5.68 0 0 1 .43-.434Zm0 0"/>
		</g>
		<g id="w" clipPath="url(#e)">
			<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M41.602 49.438c.046-.04.082-.086.14-.133-.047.035-.082.082-.14.133Zm0 0"/>
		</g>
		<g id="A" clipPath="url(#f)">
			<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M79.602 62.586c-.45.023-.895.023-1.336.023h.687c.215.004.43-.004.649-.023Zm0 0"/>
		</g>
		<g id="C" clipPath="url(#g)">
			<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M81.535 57.258h.2c.288 0 .578 0 .85-.035-.339 0-.69 0-1.046.023Zm0 0"/>
		</g>
		<g id="K" clipPath="url(#h)">
			<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M78.953 62.621h-.687a6.56 6.56 0 0 1 .687 0Zm0 0"/>
		</g>
	</defs>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#i)"}} d="M23.902 10.133a38.039 38.039 0 0 0-1.597 10.62l5.707 2.763a72.4 72.4 0 0 1 .398-10.164c.024-.23.047-.368.047-.368 0 .125-.035.243-.047.368a64.129 64.129 0 0 0-.012 10.027 110.54 110.54 0 0 0 8.457-8 12.174 12.174 0 0 0-6.37-6.805s-5.055-2.039-6.583 1.559Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M43.695 53.98c-.265.293-.543.567-.824.844.145-.133.293-.289.43-.433.14-.13.27-.266.394-.41Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M41.602 49.426c.046-.04.082-.086.125-.121.18-.18.363-.36.511-.543-.199.218-.425.43-.64.664Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#n)"}} d="M29.52 40.367a231.874 231.874 0 0 1-.72-5.597 112.17 112.17 0 0 1-.523-5.633c0-.114-.02-.227 0-.325a89.502 89.502 0 0 1-.277-5.3l-5.7-2.746c0 .343-.038.699-.054 1.074-.055 1.363-.098 2.8-.11 4.34 0 1.718 0 3.511.032 5.386.039 1.73.113 3.532.203 5.364.094 1.566.195 3.148.324 4.765v.184l7.625 3.86c-.254-1.801-.53-3.594-.8-5.372Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#o)"}} d="M40.8 85.45c.4 1.421.848 2.89 1.313 4.378v.059c.063.218.114.422.196.629.304 1.004.593 1.894 1.226 3.937A7.694 7.694 0 0 1 47.91 95.5a6.244 6.244 0 0 0-4.164-2.266 13.38 13.38 0 0 0 7.309-11.906 15.897 15.897 0 0 0-.188-1.305 5.387 5.387 0 0 1-3.062 4.61 15.057 15.057 0 0 0 2.437-9.492 29.88 29.88 0 0 0-.297-2.477 12.23 12.23 0 0 1-7.09 9.848l-2.312 2.129c.086.265.156.53.258.808Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#p)"}} d="M37.813 78.941c-.485-1.808-.97-3.644-1.461-5.496A361.37 361.37 0 0 1 35 68.06c-.445-1.817-.871-3.645-1.297-5.47-.422-1.827-.84-3.737-1.23-5.6-.395-1.864-.762-3.723-1.13-5.575-.132-.672-.25-1.324-.37-2-.211-1.14-.403-2.293-.61-3.45a.618.618 0 0 0-.039-.187l-7.582-3.87c.02.12.028.241.031.366.153 1.715.297 3.457.504 5.2.203 1.738.422 3.558.688 5.363.223 1.52.465 3.027.715 4.55.05.301.113.618.164.915a109.705 109.705 0 0 0 2.555 10.828c.328 1.101.652 2.168.984 3.176.289.847.601 1.699.902 2.539a73.593 73.593 0 0 0 2.399 5.754l7.66 3.879c-.399-1.41-.801-2.84-1.2-4.293-.113-.418-.214-.825-.331-1.243Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#q)"}} d="M31.79 80.832a59.387 59.387 0 0 0 3.523 6.508c.042.062.085.152.132.215a15.505 15.505 0 0 0-5.84-.45 21.445 21.445 0 0 1 9.41 5.485 9.865 9.865 0 0 1-4.449 2.23 9.838 9.838 0 0 0 4.883-.433 12.014 12.014 0 0 0-2.969 5.789 12.343 12.343 0 0 1 4.82-5.106c2.302 7.625 5.067 15.89 8.138 24.563.476-.617.609-1.43.359-2.164-.567-1.559-4.219-11.871-8.383-25.871-.117-.403-.223-.801-.355-1.203-.036-.114-.063-.215-.098-.336a749.886 749.886 0 0 1-1.305-4.528c-.097-.36-.199-.695-.297-1.058l-7.66-3.88c.024.083.051.16.09.239Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#r)"}} d="M31.223 45.902c.047.258.093.485.136.746.149.758.282 1.528.438 2.301.16.844.336 1.703.504 2.586.082.445.168.89.261 1.344.278 1.36.579 2.754.887 4.187.399 1.766.797 3.579 1.242 5.465.403 1.785.871 3.645 1.344 5.535.461 1.805.926 3.653 1.438 5.567.449 1.691.93 3.43 1.418 5.199 0 .082.058.176.074.262a632.38 632.38 0 0 0 1.543 5.41.305.305 0 0 0 .035.117l2.312-2.129c-.058 0-.101.051-.18.082a22.18 22.18 0 0 0 5.634-12.453 29.749 29.749 0 0 0-.075-6.95 47.27 47.27 0 0 0-1.109-5.944 78.476 78.476 0 0 0-1.7-5.825 11.615 11.615 0 0 1-1.765 2.551l-.398.438c-.133.148-.282.277-.43.433a13.5 13.5 0 0 0 1.664-10.027 12.698 12.698 0 0 1-2.289 3.965c-.152.183-.332.363-.512.543-.047.035-.082.082-.144.133a13.94 13.94 0 0 0 1.484-3.258c.07-.223.13-.45.172-.68.082-.348.137-.7.188-1.05.02-.235.058-.45.078-.684a9.725 9.725 0 0 0 0-1.653c0-.183 0-.347-.043-.52-.047-.257-.078-.495-.125-.73a41.03 41.03 0 0 0-.598-2.8c-.102-.399-.2-.766-.305-1.098-.047-.133-.07-.262-.117-.403-.125-.363-.226-.699-.336-.976a10.217 10.217 0 0 0-.422-.969 2.14 2.14 0 0 1-.168.457 15.014 15.014 0 0 1-2.597 3.739l2.129-1.95-2.145 1.938a.08.08 0 0 0-.035.05 4.49 4.49 0 0 0-.313.348c0-.027.04-.05.043-.074l-7.28 6.66c.058.05.066.09.062.117Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#s)"}} d="M28.398 23.379c.09 1.601.23 3.394.403 5.379.004.101.015.207.035.308.164 1.735.375 3.602.648 5.637.23 1.758.489 3.602.801 5.602.258 1.73.578 3.543.906 5.468l7.282-6.668a11.974 11.974 0 0 0 1.828-6.59c0-.57-.043-1.171-.09-1.788A56.41 56.41 0 0 0 39.578 25a49.186 49.186 0 0 0-1.082-5.148 28.214 28.214 0 0 0-.836-2.614 32.462 32.462 0 0 0-.8-1.812 115.46 115.46 0 0 1-8.462 7.953Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M43.309 54.398c-.133.149-.282.278-.43.434a5.68 5.68 0 0 1 .43-.434Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#v)"}} d="M43.309 54.398c-.133.149-.282.278-.43.434a5.68 5.68 0 0 1 .43-.434Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M41.602 49.438c.046-.04.082-.086.14-.133-.047.035-.082.082-.14.133Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#y)"}} d="M41.602 49.438c.046-.04.082-.086.14-.133-.047.035-.082.082-.14.133Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#z)"}} d="M98.508 11.563a43.16 43.16 0 0 0-9.707 7.289l2.398 6.761a80.326 80.326 0 0 1 8.403-7.86c.203-.167.328-.265.328-.265-.106.098-.227.168-.328.266a71.75 71.75 0 0 0-8 8.05c4.375.325 8.765.423 13.152.29a13.78 13.78 0 0 0 .281-10.559s-2.445-5.656-6.527-3.973Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M79.602 62.586c-.45.023-.895.023-1.336.023h.687c.215.004.43-.004.649-.023Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M81.535 57.258h.2c.288 0 .578 0 .85-.035-.339 0-.69 0-1.046.023Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#E)"}} d="M79.004 40.363a318.718 318.718 0 0 1 3.871-5.086 138.623 138.623 0 0 1 4.055-4.949c.078-.101.164-.195.238-.277a135.156 135.156 0 0 1 4-4.465l-2.398-6.742c-.286.27-.59.535-.899.82a136.81 136.81 0 0 0-3.535 3.402 222.161 222.161 0 0 0-4.258 4.368 220.475 220.475 0 0 0-4.09 4.472 260.517 260.517 0 0 0-3.527 4.098l-.137.156 3.067 9.164c1.222-1.652 2.418-3.324 3.613-4.96Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#F)"}} d="M52.254 85.602c-.8 1.476-1.602 3-2.422 4.566 0 .02-.027.039-.031.059-.121.23-.242.433-.34.66-.555 1.05-1.023 2-2.137 4.144a8.72 8.72 0 0 1 2.692 4.32 7.08 7.08 0 0 0-1.551-5.128c6.23 1.203 11.89.402 15.344-3.778.3-.379.597-.777.882-1.203a6.088 6.088 0 0 1-6.129 1.274 17.043 17.043 0 0 0 9.504-5.715 35.594 35.594 0 0 0 1.727-2.235 13.818 13.818 0 0 1-13.531 2.297l-3.555-.125c-.152.305-.309.575-.453.864Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#G)"}} d="M55.031 78c1.047-1.844 2.117-3.703 3.2-5.602a296.203 296.203 0 0 1 3.203-5.406c1.097-1.808 2.195-3.625 3.3-5.437a282.35 282.35 0 0 1 3.47-5.5c1.175-1.825 2.347-3.598 3.515-5.383a86.9 86.9 0 0 1 1.3-1.914c.739-1.09 1.497-2.18 2.254-3.262.032-.059.082-.121.114-.184l-3.028-9.136a2.994 2.994 0 0 1-.265.316c-1.242 1.504-2.504 3.024-3.739 4.598-1.23 1.57-2.488 3.2-3.707 4.867a265.274 265.274 0 0 0-3.039 4.23c-.199.282-.402.586-.593.868-1.2 1.797-2.364 3.558-3.387 5.25a113.286 113.286 0 0 0-3.156 5.5 134.34 134.34 0 0 0-1.735 3.34c-.441.91-.867 1.843-1.289 2.757a85.328 85.328 0 0 0-2.644 6.535l3.082 9.2c.8-1.461 1.625-2.914 2.445-4.403.219-.394.469-.8.7-1.234Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#H)"}} d="M48.68 74.742a67.607 67.607 0 0 0-2.332 8.043c0 .086-.051.192-.063.278a17.542 17.542 0 0 0-4.344-5.004 24.348 24.348 0 0 1 3.22 11.894 11.167 11.167 0 0 1-5.356-1.742 11.088 11.088 0 0 0 4.27 3.531 13.604 13.604 0 0 0-6.985 2.301 13.928 13.928 0 0 1 7.933-.273c-4.222 7.957-8.543 16.808-12.964 26.23a2.598 2.598 0 0 0 2-1.457c.8-1.703 6.043-12.902 13.812-27.488.219-.399.453-.82.672-1.254l.184-.348c.824-1.52 1.671-3.082 2.55-4.68.207-.37.399-.722.602-1.09v-.019l-3.082-9.2c-.047.09-.086.184-.117.278Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#I)"}} d="M75.977 46.176c-.168.238-.313.465-.48.703-.485.73-.99 1.453-1.477 2.2a208.44 208.44 0 0 1-1.653 2.483c-.281.426-.566.848-.855 1.293-.86 1.317-1.723 2.676-2.617 4.075a347.967 347.967 0 0 0-3.34 5.383 502.867 502.867 0 0 0-3.317 5.523c-1.062 1.816-2.152 3.676-3.261 5.602-.985 1.718-1.977 3.5-3 5.324-.055.078-.094.183-.149.265a529.846 529.846 0 0 0-3.058 5.602.298.298 0 0 0-.067.125l3.555.121c-.063-.031-.13-.04-.215-.074a25.118 25.118 0 0 0 14.43-5.559 33.84 33.84 0 0 0 5.472-5.64 55.376 55.376 0 0 0 3.825-5.668 86.801 86.801 0 0 0 3.257-6.043c-1.113.37-2.27.59-3.441.648l-.676.035h-.687a15.28 15.28 0 0 0 9.304-6.75 14.342 14.342 0 0 1-4.992 1.375c-.27.028-.558.028-.847.031h-.22a15.9 15.9 0 0 0 3.778-1.437c.234-.121.465-.254.684-.402.343-.215.664-.453.984-.696.207-.168.402-.32.606-.488.472-.41.906-.855 1.304-1.34.137-.156.266-.293.375-.457.168-.238.332-.457.477-.683a40.85 40.85 0 0 0 1.758-2.735c.234-.398.445-.777.629-1.129.066-.144.148-.265.218-.398.192-.403.375-.746.508-1.059.16-.36.305-.73.426-1.11a2.336 2.336 0 0 1-.5.235 16.92 16.92 0 0 1-5.059.946l3.266.125-3.266-.125c-.023-.012-.047-.012-.066 0a5.675 5.675 0 0 0-.516 0c.028 0 .07 0 .094-.032l-11.16-.402c.02.074-.008.113-.031.133Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#J)"}} d="M91.602 25.809a161.424 161.424 0 0 0-3.946 4.656c-.082.086-.156.18-.219.277a178.511 178.511 0 0 0-3.957 5.055c-1.199 1.598-2.48 3.297-3.816 5.16-1.168 1.598-2.348 3.316-3.602 5.121l11.16.402a13.554 13.554 0 0 0 6.712-3.847 45.42 45.42 0 0 0 1.351-1.508A66.175 66.175 0 0 0 99.313 36a56.266 56.266 0 0 0 3.199-5.004 29.64 29.64 0 0 0 1.402-2.766c.309-.73.566-1.421.8-2.097-4.374.113-8.75.004-13.112-.324Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M78.953 62.621h-.687a6.56 6.56 0 0 1 .687 0Zm0 0"/>
	<path style={{"stroke":"none","fillRule":"nonzero","fill":"url(#M)"}} d="M78.953 62.621h-.687a6.56 6.56 0 0 1 .687 0Zm0 0"/>
	<g clipPath="url(#b)" mask="url(#k)">
		<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M43.695 53.98c-.265.293-.543.567-.824.844.145-.133.293-.289.43-.433.14-.13.27-.266.394-.41Zm0 0"/>
	</g>
	<g clipPath="url(#c)" mask="url(#m)">
		<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M41.602 49.426c.046-.04.082-.086.125-.121.18-.18.363-.36.511-.543-.199.218-.425.43-.64.664Zm0 0"/>
	</g>
	<g clipPath="url(#d)" mask="url(#u)">
		<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M43.309 54.398c-.133.149-.282.278-.43.434a5.68 5.68 0 0 1 .43-.434Zm0 0"/>
	</g>
	<g clipPath="url(#e)" mask="url(#x)">
		<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M41.602 49.438c.046-.04.082-.086.14-.133-.047.035-.082.082-.14.133Zm0 0"/>
	</g>
	<g clipPath="url(#f)" mask="url(#B)">
		<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M79.602 62.586c-.45.023-.895.023-1.336.023h.687c.215.004.43-.004.649-.023Zm0 0"/>
	</g>
	<g clipPath="url(#g)" mask="url(#D)">
		<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M81.535 57.258h.2c.288 0 .578 0 .85-.035-.339 0-.69 0-1.046.023Zm0 0"/>
	</g>
	<g clipPath="url(#h)" mask="url(#L)">
		<path style={{"stroke":"none","fillRule":"nonzero","fill":"#be202e","fillOpacity":"1"}} d="M78.953 62.621h-.687a6.56 6.56 0 0 1 .687 0Zm0 0"/>
	</g>
</svg>;
  }
});