import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TrpcPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#398ccb'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M11.3 45c-6.1 0-11 4.9-11 11v16c0 6.1 4.9 11 11 11h16.2c6.1 0 11-4.9 11-11V56c0-6.1-4.9-11-11-11H11.3zm8.1 5.6 5.3 3v1.7l6.4 3.7v6.3l1.7 1v6.1l-5.3 3-2.4-1.4-5.7 3.3-5.7-3.2-2.3 1.3-5.3-3v-6.1l1.7-1V59l6.3-3.6v-1.8l5.3-3zm96.5.1c-2.266 0-4.334.534-6.2 1.6-1.867 1-3.367 2.5-4.5 4.5-1.067 1.934-1.6 4.333-1.6 7.2s.533 5.3 1.6 7.3c1.066 1.934 2.533 3.434 4.4 4.5 1.866 1 3.967 1.5 6.3 1.5 1.8 0 3.4-.267 4.8-.8s2.566-1.266 3.5-2.2c1-.866 1.767-1.866 2.3-3 .533-1.133.867-2.266 1-3.4h-6.4a4.006 4.006 0 0 1-.6 1.7c-.267.466-.6.867-1 1.2-.467.334-1 .6-1.6.8a7.44 7.44 0 0 1-1.8.2c-1.267 0-2.366-.267-3.3-.8-.866-.6-1.567-1.5-2.1-2.7-.467-1.133-.7-2.567-.7-4.3 0-1.667.233-3.066.7-4.2.533-1.133 1.234-2.034 2.1-2.7.934-.6 2.033-.9 3.3-.9.733 0 1.367.1 1.9.3.6.2 1.133.5 1.6.9.4.334.733.766 1 1.3a5.15 5.15 0 0 1 .5 1.8h6.4c-.133-1.6-.533-3-1.2-4.2-.6-1.2-1.433-2.2-2.5-3-1-.866-2.166-1.5-3.5-1.9-1.333-.466-2.8-.7-4.4-.7zm-56.3.4V77h6.3v-8.9h3.213L73.9 77h6.8l-5.34-9.932c1.436-.664 2.55-1.584 3.34-2.767.8-1.267 1.2-2.802 1.2-4.602 0-1.8-.4-3.333-1.2-4.6-.734-1.266-1.833-2.266-3.3-3-1.4-.666-3.066-1-5-1H59.6zm22.3 0V77h6.3v-8.1h4.3c2 0 3.733-.366 5.2-1.1a8.222 8.222 0 0 0 3.3-3.1c.8-1.334 1.2-2.9 1.2-4.7 0-1.733-.4-3.266-1.2-4.6-.733-1.4-1.834-2.467-3.3-3.2-1.4-.734-3.067-1.1-5-1.1H81.9zm-62.5.9-3.2 1.9 3.2 1.8 3.2-1.8-3.2-1.9zm28.3.9v4.7h-2.6v4.6h2.6v9.4c0 1.333.267 2.434.8 3.3.533.867 1.334 1.5 2.4 1.9 1 .4 2.233.567 3.7.5a57.468 57.468 0 0 0 1.9-.2c.6-.134 1.034-.267 1.3-.4l-.9-4.4c-.133 0-.333.034-.6.1-.266.067-.533.1-.8.1-.333 0-.6-.066-.8-.2a.894.894 0 0 1-.6-.5c-.134-.2-.2-.5-.2-.9v-8.7h3.6v-4.6h-3.6v-4.7h-6.2zm-32.2 2.2v3.7l3.2 1.9V57l-3.2-1.9zm7.8 0-3.2 1.8v3.8l3.2-1.9v-3.7zm42.6 1H69c.933 0 1.734.133 2.4.4.667.267 1.134.666 1.4 1.2.334.533.5 1.2.5 2s-.166 1.466-.5 2c-.266.466-.733.834-1.4 1.1-.666.267-1.467.4-2.4.4h-3.1v-7.1zm22.3 0h3.1c.934 0 1.733.166 2.4.5.666.333 1.166.8 1.5 1.4.333.533.5 1.2.5 2s-.167 1.5-.5 2.1c-.334.6-.834 1.067-1.5 1.4-.6.333-1.4.5-2.4.5h-3.1v-7.9zm-63.6.7v2.9l-5.2 3-5.3-3v-2.8H14l-4.9 2.8v4.8l2.3-1.3 5.3 3v6.1l-1.6.9 4.3 2.5 4.4-2.5-1.6-.9v-6.1l5.3-3 2.2 1.2v-4.7l-5.1-2.9zm-13.1 7.9-3.3 1.9 3.3 1.8 3.2-1.8-3.2-1.9zm16 .1-3.2 1.8 3.2 1.9 3.2-1.9-3.2-1.8zm-20 3v3.7l3.2 1.8v-3.7l-3.2-1.8zm7.9 0-3.3 1.9v3.7l3.3-1.9v-3.7zm8.2 0v3.7l3.3 1.9v-3.7l-3.3-1.9zm7.8 0-3.2 1.8v3.7l3.2-1.8v-3.7z"/>
</svg>;
  }
});