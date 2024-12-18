import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CouchbasePlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#EA2328'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M14.725 49.275C6.607 49.275 0 55.86 0 64c0 8.118 6.584 14.725 14.725 14.725 8.118 0 14.722-6.584 14.722-14.725 0-8.14-6.604-14.725-14.722-14.725zm65.343 7.053v14.233h2.713v-6.45c.2-.244.957-1.156 1.936-1.156.912 0 1.244.468 1.244 1.424v6.183h2.715v-6.74c0-1.779-.757-3.136-2.893-3.136-1.579 0-2.512.847-3.002 1.38v-5.738h-2.713zm10.809 0v13.7c.49.222 1.824.779 4.025.779 2.936 0 5.16-1.825 5.16-5.139 0-3.336-1.689-4.98-4.091-4.98-1.068 0-1.913.555-2.358 1v-5.36h-2.736zm-46.639.822c-4.47 0-6.828 3.224-6.828 6.805 0 3.603 2.268 6.852 6.783 6.852 1.935 0 3.515-.779 4.182-1.38l-1.18-2.025c-.69.512-1.533 1.002-2.957 1.002-2.513 0-3.76-2.046-3.76-4.515 0-2.402 1.291-4.336 3.715-4.336 1.201 0 2 .289 2.735.756l1.29-2.114c-1.045-.667-2.267-1.045-3.98-1.045zM8.941 58.818c.356 0 .645.267.645.69v4.025l5.16-.111 5.16.111v-4.025c0-.423.289-.69.645-.69.934 0 2.135.09 2.646.178.845.134 1.514.956 1.514 1.846-.045 1.89-.045 3.825-.045 5.738 0 .89-.51 1.668-1.512 1.846-1.735.31-5.382.49-8.43.49-3.046 0-6.694-.18-8.43-.49-1-.178-1.513-.956-1.513-1.846v-5.738c0-.89.691-1.713 1.514-1.846.511-.089 1.712-.178 2.646-.178zm44.883 1.868c-3.38 0-4.85 2.602-4.85 5.093s1.47 5.028 4.85 5.028c3.403 0 4.892-2.649 4.914-5.118 0-2.49-1.533-5.003-4.914-5.003zm21.819 0c-2.959 0-5.118 1.825-5.118 5.072 0 3.024 1.914 5.049 5.028 5.049 1.779 0 2.668-.557 3.113-.846l-.822-1.824c-.29.178-.935.578-2.047.578-1.624 0-2.379-1.267-2.379-3.024 0-1.757.8-2.937 2.312-2.937.957 0 1.58.29 2.002.557l.868-1.868c-.467-.289-1.4-.757-2.957-.757zm38.964.002c-2.201 0-3.646 1.154-3.646 2.978 0 1.468.779 2.203 2.113 2.848 1.38.667 2.469.846 2.469 1.468 0 .534-.556.823-1.557.823-1.067 0-2.003-.534-2.38-.801l-.913 1.89c.6.4 1.713.913 3.448.913 2.38 0 3.848-1.068 3.892-3.137 0-1.601-1.089-2.313-2.601-2.936-1.112-.444-2.002-.6-2.002-1.222 0-.512.4-.825 1.312-.825s1.667.38 2.045.602l.936-1.846c-.445-.244-1.47-.755-3.116-.755zm9.164 0c-2.69 0-4.804 1.934-4.804 5.003 0 3.092 1.846 5.116 5.094 5.116 2.001 0 2.98-.578 3.625-.934l-.868-1.736c-.489.244-1.201.668-2.513.668-1.557 0-2.313-.957-2.424-2.403h6.072c.334-3.603-1.135-5.715-4.182-5.715zm-18.46.021c-2.069 0-3.358.867-3.936 1.4l1.18 1.647c.355-.245 1.2-.889 2.445-.889 1.2 0 1.535.489 1.535 1.29v.532h-.334c-2.558 0-5.138.913-5.138 3.426 0 1.735 1.268 2.713 2.914 2.713 1.356 0 2.268-.756 2.691-1.267.022.289.067.778.156 1.023h2.692c-.134-.623-.268-1.556-.268-2.89v-3.382c0-2.58-1.269-3.603-3.937-3.603zm-45.082.2v6.74c0 1.779.757 3.134 2.892 3.134a3.838 3.838 0 0 0 3.113-1.512c.022.4.11 1.023.2 1.29h2.691c-.133-.578-.266-1.557-.266-2.825v-6.804h-2.714v6.449c-.2.222-.934 1.156-1.913 1.156-.912 0-1.246-.467-1.246-1.424v-6.205H60.23zm63.498 1.736c1.156 0 1.579.866 1.601 1.933h-3.469c.178-1.245.8-1.933 1.868-1.933zm-69.948.066c1.468 0 2.046 1.289 2.069 3.068 0 1.78-.49 2.98-1.957 2.98-1.446 0-2.026-1.267-2.026-3.046 0-1.78.469-3.002 1.914-3.002zm41.412.11c1.38 0 1.98 1.068 1.98 2.847 0 1.98-.867 3.002-2.269 3.002-.711 0-1.11-.133-1.289-.2v-4.937c.156-.2.778-.713 1.578-.713zm11.01 3.515h.334v1.713c-.266.267-.8.8-1.713.8-.6 0-1.156-.288-1.156-.978 0-1.09 1.045-1.535 2.535-1.535z"/>
</svg>;
  }
});