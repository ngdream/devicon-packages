import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AntdesignOriginalWordmarkIcon',
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
		<linearGradient id="a" gradientTransform="matrix(76.74219 0 0 13.48438 50.727 13.668)" gradientUnits="userSpaceOnUse" x1="1.008" x2="-.136" y1=".517" y2=".469">
			<stop style={{"stopColor":"#0d1a26","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#283e52","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="b" gradientTransform="matrix(29.55469 0 0 37.57813 1.25 1.195)" gradientUnits="userSpaceOnUse" x1=".621" x2="1.082" y1="0" y2=".379">
			<stop style={{"stopColor":"#4285eb","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#2ec7ff","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="c" gradientTransform="matrix(29.55469 0 0 37.57813 1.25 1.195)" gradientUnits="userSpaceOnUse" x1=".696" x2=".54" y1="0" y2="1.085">
			<stop style={{"stopColor":"#29cdff","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#148eff","stopOpacity":"1"}} offset=".379"/>
			<stop style={{"stopColor":"#0a60ff","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="d" gradientTransform="matrix(9.35938 0 0 13.9375 31.191 13.082)" gradientUnits="userSpaceOnUse" x1=".697" x2=".167" y1="-.13" y2="1.174">
			<stop style={{"stopColor":"#fa816e","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#f74a5c","stopOpacity":"1"}} offset=".415"/>
			<stop style={{"stopColor":"#f51d2c","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="e" gradientTransform="matrix(9.67578 0 0 9.23828 16.156 15.46)" gradientUnits="userSpaceOnUse" x1=".681" x2=".304" y1="-.357" y2="1.149">
			<stop style={{"stopColor":"#fa8e7d","stopOpacity":"1"}} offset="0"/>
			<stop style={{"stopColor":"#f74a5c","stopOpacity":"1"}} offset=".513"/>
			<stop style={{"stopColor":"#f51d2c","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
	</defs>
	<path style={{"fill":"url(#a)","fillRule":"nonzero","stroke":"none"}} d="M58.348 24.203h2.355l-3.687-10.535H54.41l-3.683 10.535h2.277l.809-2.555h3.726zm-2.7-8.52h.051l1.36 4.313h-2.766zm6.25 8.52h2.149v-4.492c0-1.012.61-1.715 1.57-1.715.965 0 1.45.586 1.45 1.606v4.601h2.144v-5.047c0-1.832-.984-2.926-2.734-2.926-1.211 0-2.043.57-2.461 1.54h-.043v-1.395h-2.07v7.828zm9.543-9.629v1.801h-1.109v1.605h1.11v4.114c0 1.523.722 2.136 2.574 2.136.433 0 .8-.035 1.02-.085v-1.57a3.388 3.388 0 0 1-.52.038c-.633 0-.926-.285-.926-.883v-3.746h1.453V16.38H73.59v-1.805zm8.235-.906v10.535h4.05c3.18 0 5.051-1.965 5.051-5.308 0-3.344-1.87-5.227-5.05-5.227zm2.219 1.816h1.566c1.953 0 3.055 1.215 3.055 3.418 0 2.278-1.07 3.477-3.055 3.477h-1.566zm11.96 2.301c.954 0 1.61.688 1.653 1.688h-3.344c.074-.98.75-1.688 1.691-1.688zm1.68 4.024c-.2.597-.8.984-1.586.984-1.094 0-1.804-.766-1.804-1.887v-.129h5.425v-.652c0-2.379-1.445-3.918-3.738-3.918-2.328 0-3.797 1.621-3.797 4.117 0 2.504 1.453 4.043 3.88 4.043 1.944 0 3.358-1.027 3.593-2.558zm3.309-3.133c0 1.152.761 1.926 2.254 2.262l1.453.324c.707.168.972.386.972.781 0 .508-.492.832-1.308.832-.852 0-1.375-.379-1.477-1.04h-2.093c.117 1.528 1.41 2.536 3.511 2.536 2.078 0 3.504-1.016 3.504-2.555 0-1.168-.64-1.789-2.219-2.14l-1.503-.32c-.692-.165-1.032-.426-1.032-.813 0-.504.485-.84 1.227-.84.797 0 1.3.387 1.347 1.016h1.973c-.027-1.52-1.312-2.512-3.289-2.512-2.02 0-3.32.977-3.32 2.469zm15.726 3.863c-1.066 0-1.726-.836-1.726-2.266 0-1.421.668-2.312 1.726-2.312 1.07 0 1.754.906 1.754 2.312 0 1.418-.683 2.266-1.754 2.266zm-.039 4.613c2.36 0 3.93-1.191 3.93-3.058v-7.719h-2.113v1.367h-.04c-.41-.898-1.3-1.492-2.43-1.492-2 0-3.233 1.527-3.233 4.008 0 2.445 1.27 3.922 3.195 3.922 1.14 0 2.066-.57 2.433-1.403h.043v1.375c0 .903-.617 1.516-1.726 1.516-.817 0-1.43-.371-1.602-.91h-2.101c.172 1.394 1.574 2.394 3.644 2.394zm5.63-2.949v-7.828h2.07v1.395h.042c.422-.973 1.25-1.54 2.461-1.54 1.75 0 2.735 1.094 2.735 2.926v5.047h-2.145v-4.601c0-1.02-.484-1.606-1.449-1.606-.96 0-1.57.703-1.57 1.715v4.492h-2.149zm0 0" transform="translate(0 42)"/>
	<path style={{"fill":"#0f1e2b","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} d="M107.063 24.832h2.148v-7.828h-2.149zm0 0" transform="translate(0 42)"/>
	<path style={{"fill":"#f54254","fillOpacity":"1","fillRule":"nonzero","stroke":"none"}} d="M108.195 15.488c.793 0 1.414-.62 1.414-1.398 0-.785-.62-1.406-1.414-1.406-.785 0-1.406.62-1.406 1.406-.004.37.145.73.41.992.262.262.621.406.996.406zm0 0" transform="translate(0 42)"/>
	<path style={{"fill":"url(#b)","fillRule":"nonzero","stroke":"none"}} d="M19.164 1.219 1.25 18.332a2.281 2.281 0 0 0 0 3.328l17.914 17.113c.961.918 2.52.918 3.48 0l7.512-7.175a2.04 2.04 0 0 0 0-2.985 2.287 2.287 0 0 0-3.12 0l-5.696 5.442a.609.609 0 0 1-.844 0L6.191 20.387a.542.542 0 0 1 0-.805L20.496 5.914a.601.601 0 0 1 .844 0l5.695 5.441c.875.82 2.246.82 3.121 0a2.04 2.04 0 0 0 0-2.984l-7.511-7.176c-.965-.898-2.52-.89-3.48.024Zm0 0" transform="translate(0 42)"/>
	<path style={{"fill":"url(#c)","fillRule":"nonzero","stroke":"none"}} d="M19.164 1.219 1.25 18.332a2.281 2.281 0 0 0 0 3.328l17.914 17.113c.961.918 2.52.918 3.48 0l7.512-7.175a2.04 2.04 0 0 0 0-2.985 2.287 2.287 0 0 0-3.12 0l-5.696 5.442a.609.609 0 0 1-.844 0L6.191 20.387a.542.542 0 0 1 0-.805L20.496 5.914c.598-.492 1.57-1.488 3.004-1.723 1.063-.171 2.223.211 3.484 1.145l-4.34-4.14c-.964-.9-2.519-.891-3.48.023Zm0 0" transform="translate(0 42)"/>
	<path style={{"fill":"url(#d)","fillRule":"nonzero","stroke":"none"}} d="M31.89 27.02a2.279 2.279 0 0 0 3.122 0l5.539-5.293a2.27 2.27 0 0 0 0-3.325l-5.586-5.32c-.863-.824-2.266-.824-3.125.004a2.037 2.037 0 0 0 0 2.98l3.773 3.606a.547.547 0 0 1 0 .808l-3.722 3.555a2.04 2.04 0 0 0 0 2.984zm0 0" transform="translate(0 42)"/>
	<path style={{"fill":"url(#e)","fillRule":"nonzero","stroke":"none"}} d="M16.156 20.082c0-2.562 2.16-4.621 4.836-4.621 2.68 0 4.84 2.059 4.84 4.621 0 2.559-2.16 4.617-4.84 4.617-2.676 0-4.836-2.058-4.836-4.617zm0 0" transform="translate(0 42)"/>
</svg>;
  }
});