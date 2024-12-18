import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'RiderPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#dd1265'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M61.082 42.922v4.383h5.191v-4.383Zm20.652 0v8.566a6.676 6.676 0 0 0-5.418-2.597c-4.132 0-7.918 3.18-7.918 8.988v.066c0 5.809 3.86 8.989 7.918 8.989 2.563 0 4.22-1.2 5.418-2.825v2.5h4.922V42.922Zm-41.898.973v22.714h5v-7.265h3.926l4.867 7.265h5.828l-5.539-8.113c2.89-1.07 4.867-3.371 4.867-7.043v-.062c0-2.141-.68-3.93-1.945-5.192-1.492-1.492-3.73-2.304-6.621-2.304Zm-31.316.042V66.66h22.722V43.938Zm2.84 2.81h3.898a3.395 3.395 0 0 1 2.492.866c.5.528.762 1.23.734 1.953v.024a2.655 2.655 0 0 1-1.832 2.652l2.086 3.051h-2.195l-1.836-2.734H13.23v2.734h-1.87Zm8.68 0h3.339c2.683 0 4.543 1.843 4.543 4.25v.023c0 2.406-1.856 4.273-4.543 4.273h-3.34Zm24.796 1.66h4.96c2.438 0 3.93 1.1 3.93 3.245v.063c0 1.914-1.398 3.21-3.828 3.21h-5.062Zm-22.902.034v5.153h1.453a2.442 2.442 0 0 0 2.578-2.555v-.02a2.444 2.444 0 0 0-.719-1.859 2.444 2.444 0 0 0-1.86-.719Zm-8.704.016v2.457h1.918c.915 0 1.442-.492 1.442-1.21v-.024c0-.805-.563-1.223-1.48-1.223Zm104.723.43c-2.59.074-4.074 1.582-5.016 3.836v-3.508h-4.925L108 66.62h4.922v-6.437c0-4.153 2.027-6.133 5.305-6.133h.261v-5.16a6.113 6.113 0 0 0-.535-.004Zm-20.574.004c-5.063 0-8.602 4.09-8.602 9.054v.063c0 5.32 3.864 8.992 9.075 8.996 3.148 0 5.484-1.234 7.105-3.246l-2.82-2.5c-1.364 1.265-2.567 1.785-4.219 1.785-2.211 0-3.766-1.172-4.254-3.41h12.117c.035-.453.07-.918.07-1.297 0-4.938-2.663-9.445-8.472-9.445Zm-36.168.324v17.394h4.922V49.215Zm36.168 3.62c2.078 0 3.375 1.517 3.664 3.716l-7.43-.016c.39-2.242 1.688-3.7 3.766-3.7Zm-19.8.243c2.308 0 4.218 1.914 4.218 4.8v.067c0 2.89-1.914 4.801-4.215 4.801-2.305 0-4.25-1.91-4.25-4.8v-.067c0-2.906 1.941-4.8 4.25-4.8Zm-66.227 9.285h8.523v1.422h-8.523ZM39.809 75.18v8.582h.906v-1.164a2.74 2.74 0 0 0 2.324 1.285c1.465 0 2.898-1.176 2.898-3.16v-.024c0-2.008-1.445-3.144-2.898-3.144-.957.007-1.84.52-2.324 1.347V75.18Zm55.273.183v.996h1.035v-.996Zm-33.945.196v5.492c0 1.3-.676 1.972-1.606 1.972-.87 0-1.386-.421-1.894-1.18l-.664.575c.5.934 1.48 1.504 2.535 1.48a2.53 2.53 0 0 0 1.812-.683c.532-.59.805-1.367.758-2.16v-5.496Zm14.336 0v8.214h3.652c1.8 0 2.984-.835 2.984-2.242v-.027c0-1.125-.789-1.692-1.761-1.984a1.988 1.988 0 0 0 1.304-1.895v-.023a1.832 1.832 0 0 0-.527-1.313 3.01 3.01 0 0 0-2.152-.73Zm-4.313.296v1.836h-.844v.797h.844v3.664c0 1.235.738 1.715 1.715 1.7.383.003.758-.086 1.094-.262v-.758a1.87 1.87 0 0 1-.88.211.895.895 0 0 1-1.023-1.008v-3.547h1.922v-.797h-1.922v-1.836Zm5.23.54h2.5c1.176 0 1.82.527 1.82 1.335l.005.024c0 .96-.778 1.469-1.895 1.469h-2.43Zm-9.734 1.168c-1.683 0-2.914 1.406-2.914 3.156v.023c-.035.824.27 1.63.844 2.223.57.597 1.36.933 2.187.933a3.14 3.14 0 0 0 2.497-1.136l-.563-.504c-.48.55-1.18.863-1.914.855a2.117 2.117 0 0 1-2.133-2.054h4.824a3.664 3.664 0 0 0 0-.293c0-1.774-1.035-3.204-2.828-3.204Zm34.328 0a2.289 2.289 0 0 0-2.078 1.183v-1.055H98v6.082h.906v-3.476c-.015-.246.02-.496.106-.727a1.79 1.79 0 0 1 1.715-1.168c1.066 0 1.675.692 1.675 1.828v3.551h.907v-3.789c0-1.445-.856-2.43-2.325-2.43Zm5.993.007c-1.2 0-2.067.692-2.067 1.739v.02c0 1.116 1.059 1.444 2.008 1.718.8.223 1.516.457 1.516 1.066v.024c0 .582-.528.96-1.258.96a3.542 3.542 0 0 1-2.102-.757l-.457.644a4.182 4.182 0 0 0 2.512.88c1.21 0 2.164-.688 2.164-1.821v-.023c0-1.09-1.012-1.457-1.95-1.739-.808-.246-1.566-.469-1.566-1.047v-.023c0-.504.457-.883 1.18-.883.64.027 1.262.23 1.793.594l.41-.684a4.123 4.123 0 0 0-2.183-.668Zm-19.77.012a2.599 2.599 0 0 0-2.477 1.691v-1.582h-.906v6.07h.906V81.34c0-1.832 1.079-2.781 2.403-2.781h.074Zm3.469.027a5.07 5.07 0 0 0-2.207.504l.273.758c.57-.285 1.2-.437 1.84-.445 1.14 0 1.809.562 1.809 1.652v.215a6.415 6.415 0 0 0-1.868-.258c-1.535 0-2.593.68-2.593 1.961 0 1.246 1.136 1.895 2.277 1.899a2.655 2.655 0 0 0 2.195-1.047v.918h.856v-3.711a2.386 2.386 0 0 0-.621-1.774 2.653 2.653 0 0 0-1.961-.672Zm-44.13.07 2.759 6.06c-.367.855-.703 1.136-1.242 1.136a1.884 1.884 0 0 1-.954-.223l-.304.72c.398.202.84.304 1.289.3.918 0 1.504-.457 2.023-1.711l2.543-6.27h-.96l-1.95 5.063-2.207-5.074Zm48.599.012v6.059h.902v-6.059Zm-28.512.633c1.207 0 1.84.961 1.933 2.067H64.66c.117-1.188.91-2.067 1.973-2.067Zm-23.762.047c1.152 0 2.14.914 2.14 2.348v.023c0 1.469-.964 2.336-2.14 2.336a2.26 2.26 0 0 1-1.582-.719 2.265 2.265 0 0 1-.613-1.629v-.023a2.273 2.273 0 0 1 2.195-2.336Zm36.113 1.656c1.438 0 2.188.516 2.184 1.426v.024c0 .918-.777 1.468-2.02 1.468h-2.757v-2.898h2.593Zm11.633.657a6.29 6.29 0 0 1 1.785.257v.59c0 .961-.918 1.64-2.047 1.64-.808 0-1.511-.452-1.511-1.21v-.023c0-.758.64-1.254 1.773-1.254Zm0 0"/>
</svg>;
  }
});