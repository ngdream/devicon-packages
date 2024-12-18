import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'AntdesignPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#0073bb'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path style={{"stroke":"none"}} d="M108.223 77.523c.797 0 1.414-.62 1.414-1.394 0-.79-.617-1.41-1.414-1.41-.782 0-1.403.62-1.403 1.41-.004.371.145.726.407.988a1.4 1.4 0 0 0 .996.406zm0 0" transform="matrix(1.00058 0 0 .99983 -.094 -20.022)"/>
	<path style={{"stroke":"none"}} d="M58.406 86.242h2.356l-3.688-10.539H54.47l-3.676 10.54h2.273l.809-2.56h3.723zm-2.695-8.523h.05l1.36 4.316h-2.77zm6.246 8.523h2.145V81.75c0-1.016.609-1.715 1.57-1.715.96 0 1.445.582 1.445 1.606v4.601h2.145v-5.047c0-1.832-.985-2.93-2.73-2.93-1.212 0-2.044.57-2.458 1.54h-.047v-1.39h-2.07zm9.54-9.633v1.805h-1.11v1.606h1.11v4.109c0 1.527.718 2.14 2.57 2.14.43 0 .796-.035 1.019-.085v-1.57a3.884 3.884 0 0 1-.523.034c-.63 0-.926-.285-.926-.882V80.02h1.457v-1.606h-1.457V76.61zm8.226-.906v10.54h4.047c3.18 0 5.05-1.966 5.05-5.313 0-3.344-1.87-5.227-5.05-5.227zm2.218 1.82h1.563c1.953 0 3.055 1.211 3.055 3.415 0 2.28-1.07 3.476-3.055 3.476H81.94zm11.954 2.297c.953 0 1.605.688 1.652 1.688h-3.344c.074-.98.75-1.688 1.692-1.688zm1.68 4.024c-.2.597-.802.984-1.587.984-1.093 0-1.804-.766-1.804-1.883v-.132h5.425v-.649c0-2.379-1.449-3.922-3.738-3.922-2.328 0-3.797 1.621-3.797 4.121 0 2.504 1.453 4.043 3.88 4.043 1.944 0 3.355-1.027 3.589-2.562zm3.304-3.133c0 1.152.762 1.93 2.254 2.266l1.453.32c.703.168.969.387.969.781 0 .512-.492.832-1.305.832-.855 0-1.375-.379-1.477-1.035H98.68c.117 1.523 1.41 2.535 3.508 2.535 2.078 0 3.503-1.015 3.503-2.558 0-1.168-.636-1.79-2.214-2.141l-1.508-.32c-.692-.16-1.028-.422-1.028-.809 0-.504.485-.844 1.227-.844.793 0 1.3.39 1.344 1.016h1.976c-.03-1.516-1.316-2.512-3.289-2.512-2.02 0-3.32.98-3.32 2.469zm15.715 3.863c-1.063 0-1.723-.832-1.723-2.261 0-1.426.668-2.317 1.723-2.317 1.074 0 1.758.906 1.758 2.317 0 1.414-.684 2.261-1.758 2.261zm-.035 4.617c2.355 0 3.925-1.191 3.925-3.062v-7.715h-2.113v1.363h-.035c-.414-.898-1.3-1.488-2.434-1.488-1.996 0-3.23 1.523-3.23 4.008 0 2.445 1.27 3.922 3.195 3.922 1.137 0 2.063-.57 2.43-1.403h.047v1.371c0 .907-.617 1.52-1.727 1.52-.816 0-1.433-.371-1.601-.914h-2.098c.168 1.394 1.57 2.398 3.64 2.398zm5.625-2.953v-7.824h2.07v1.39h.043c.418-.968 1.25-1.538 2.457-1.538 1.75 0 2.734 1.097 2.734 2.93v5.046h-2.144v-4.601c0-1.024-.485-1.606-1.45-1.606-.96 0-1.57.7-1.57 1.715v4.492h-2.144zm-13.09.629h2.144v-7.824h-2.144zm0 0" transform="matrix(1.00058 0 0 .99983 -.094 -20.022)"/>
	<path style={{"stroke":"none"}} d="M19.246 63.25 1.344 80.367a2.281 2.281 0 0 0 0 3.328l17.902 17.118c.961.917 2.52.917 3.48 0l7.504-7.176a2.04 2.04 0 0 0 0-2.984 2.274 2.274 0 0 0-3.117 0l-5.691 5.44a.609.609 0 0 1-.844 0L6.281 82.423a.542.542 0 0 1 0-.805L20.578 67.95a.601.601 0 0 1 .844 0l5.691 5.442c.875.82 2.242.82 3.117 0a2.04 2.04 0 0 0 0-2.984l-7.503-7.177c-.965-.902-2.52-.894-3.48.024zm0 0" transform="matrix(1.00058 0 0 .99983 -.094 -20.022)"/>
	<path style={{"stroke":"none"}} d="M19.246 63.25 1.344 80.367a2.281 2.281 0 0 0 0 3.328l17.902 17.118c.961.917 2.52.917 3.48 0l7.504-7.176a2.04 2.04 0 0 0 0-2.984 2.274 2.274 0 0 0-3.117 0l-5.691 5.44a.609.609 0 0 1-.844 0L6.281 82.423a.542.542 0 0 1 0-.805L20.578 67.95c.598-.492 1.57-1.488 3-1.722 1.063-.172 2.223.207 3.485 1.144l-4.336-4.14c-.965-.903-2.52-.895-3.48.023zm0 0" transform="matrix(1.00058 0 0 .99983 -.094 -20.022)"/>
	<path style={{"stroke":"none"}} d="M31.965 89.059a2.279 2.279 0 0 0 3.12 0l5.536-5.293a2.275 2.275 0 0 0 0-3.329l-5.582-5.32c-.867-.824-2.266-.824-3.125.004a2.04 2.04 0 0 0 0 2.984l3.773 3.606a.542.542 0 0 1 0 .805l-3.722 3.558a2.04 2.04 0 0 0 0 2.985zm-15.723-6.942c0-2.558 2.156-4.62 4.832-4.62 2.68 0 4.836 2.062 4.836 4.62 0 2.559-2.156 4.621-4.836 4.621-2.676 0-4.832-2.062-4.832-4.62zm0 0" transform="matrix(1.00058 0 0 .99983 -.094 -20.022)"/>
</svg>;
  }
});