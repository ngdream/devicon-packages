import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'OcamlOriginalWordmarkIcon',
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
	<g fillRule="evenodd">
		<path d="M63.156 53.582l.844-.34c-.844-.828-1.277-1.023-.844.34zm0 0" fill="#484444"/>
		<path d="M94.012.992H30.93c-5.856 0-10.614 5.074-10.614 11.336v24.727c1.516-.582 3.707-4.035 4.383-4.875 1.207-1.465 1.422-3.34 2.02-4.52 1.36-2.68 1.593-4.531 4.687-4.531 1.438 0 2.008.36 2.989 1.754.667.965 1.843 2.762 2.39 3.957.633 1.383 1.664 3.258 2.117 3.637.336.277.672.484.977.613.5.203.918-.172 1.25-.453.43-.367.617-1.106 1.012-2.094.574-1.426 1.191-3.133 1.543-3.73.613-1.032.824-2.25 1.488-2.848.976-.871 2.254-.934 2.598-1 1.964-.422 2.851 1 3.82 1.922.633.601 1.492 1.812 2.11 3.441.472 1.266 1.09 2.442 1.34 3.176.245.71.862 1.84 1.214 3.203.336 1.23 1.203 2.176 1.539 2.766 0 0 .512 1.527 3.613 2.914.672.308 2.032.793 2.844 1.11 1.344.523 2.645.456 4.313.245 1.187 0 1.828-1.832 2.363-3.297.32-.867.625-3.351.836-4.058.195-.688-.274-1.211.125-1.813.472-.707.75-.742 1.023-1.656.582-1.957 3.942-2.059 5.824-2.059 1.586 0 1.375 1.63 4.047 1.075 1.531-.32 2.996.21 4.63.664 1.359.394 2.644.832 3.41 1.797.511.62 1.742 3.742.484 3.87.117.16.207.45.433.598-.277 1.184-1.504.34-2.183.192-.914-.203-1.559.027-2.453.453-1.524.726-3.758.637-5.09 1.824-1.133 1.004-1.133 3.242-1.657 4.504 0 0-1.464 4.016-4.664 6.473-.816.632-2.418 2.144-5.898 2.718-1.559.258-3.023.282-4.625.196l-2.313-.094c-.46-.004-2.02-.059-1.933.101l-.176.458c.027.156.082.535.098.628.066.368.086.664.093 1.004.028.707-.05 1.442-.015 2.153.062 1.468.574 2.812.64 4.297.07 1.66.844 3.41 1.586 4.761.278.512.704.567.895 1.203.215.73.008 1.5.121 2.27.414 3 1.219 6.137 2.492 8.848l.024.066c1.57-.281 3.132-.879 5.16-1.2 3.734-.593 8.914-.284 12.238-.62 8.422-.84 12.996 3.687 20.559 1.832V12.328c0-6.262-4.754-11.336-10.625-11.336zM62.543 54.2c-.012-.136 0-.12.016-.035zm0 0" fill="#F29100"/>
		<path d="M39.82 63.672c.594-1.32.926-2.824 1.418-4.168.473-1.297 1.2-3.129 2.446-3.781-.153-.184-2.598-.266-3.254-.328l-2.117-.313-4.079-.86c-.797-.195-3.43-1.152-4-1.421-1.343-.637-2.238-2.36-3.289-2.184-.664.113-1.328.344-1.738 1.04-.344.57-.453 1.538-.691 2.19-.274.758-.743 1.462-1.164 2.184-.75 1.32-2.125 2.52-2.715 3.809a7.727 7.727 0 00-.32.867v14.73l2.21.493c5.946 1.62 7.399 1.765 13.223 1.078l.55-.074c.45-.954.794-4.196 1.079-5.196.226-.773.535-1.383.652-2.168.106-.746-.008-1.46-.074-2.132-.164-1.704 1.207-2.31 1.863-3.766zm0 0" fill="#F29100"/>
		<path d="M13.809 127.004c-2.055 0-3.922-.524-5.618-1.567-1.695-1.05-3.148-2.55-4.363-4.511-1.21-1.961-2.148-4.34-2.82-7.156C.34 110.965 0 107.78 0 104.223c0-3.563.34-6.735 1.008-9.516.676-2.785 1.61-5.121 2.82-7.016 1.215-1.894 2.668-3.34 4.363-4.34 1.696-1.003 3.563-1.507 5.618-1.507 2.05 0 3.921.504 5.617 1.508 1.695 1 3.144 2.453 4.36 4.375 1.21 1.918 2.151 4.265 2.823 7.043.664 2.78 1.004 5.933 1.004 9.453 0 3.558-.332 6.746-1.004 9.547-.672 2.812-1.613 5.195-2.824 7.16-1.215 1.96-2.668 3.457-4.363 4.507-1.688 1.043-3.563 1.567-5.617 1.567zm0-8.48c2.082 0 3.726-1.286 4.941-3.844 1.21-2.559 1.824-6.043 1.824-10.453 0-4.364-.613-7.77-1.824-10.22-1.215-2.445-2.86-3.675-4.945-3.675-2.078 0-3.727 1.23-4.942 3.676-1.21 2.449-1.816 5.855-1.816 10.219 0 4.41.605 7.894 1.816 10.453 1.215 2.558 2.864 3.84 4.946 3.84zM30.03 104.69c0-3.601.39-6.82 1.164-9.648.785-2.828 1.832-5.223 3.149-7.18 1.304-1.945 2.883-3.468 4.625-4.476 1.754-1.024 3.61-1.535 5.57-1.535 1.898 0 3.61.566 5.148 1.707 1.543 1.14 2.825 2.453 3.848 3.972l-3.773 6.086c-.785-1.02-1.567-1.824-2.36-2.406-.789-.574-1.71-.867-2.77-.867-1.062 0-2.046.324-2.96.969-.922.64-1.715 1.566-2.406 2.773-.684 1.2-1.215 2.668-1.602 4.406-.394 1.735-.582 3.7-.582 5.875 0 4.496.668 7.985 2 10.453 1.34 2.473 3.125 3.711 5.367 3.711 1.246 0 2.328-.351 3.262-1.07.934-.715 1.773-1.648 2.52-2.809l3.777 5.95c-1.274 2.132-2.73 3.738-4.36 4.8-1.628 1.063-3.402 1.606-5.293 1.606a11.35 11.35 0 01-5.55-1.438c-1.72-.933-3.278-2.382-4.57-4.242-1.31-1.875-2.337-4.2-3.079-6.98-.746-2.785-1.117-6.004-1.117-9.653zm26.254 12.293c0-3.472 1.02-6.191 3.074-8.148 2.051-1.957 5.368-3.273 9.93-3.941-.059-1.473-.371-2.641-.934-3.508-.558-.867-1.457-1.297-2.703-1.297-.992 0-1.988.262-2.98.8-.992.532-2.055 1.266-3.168 2.2l-2.426-6.473c1.492-1.3 3.055-2.344 4.688-3.144a11.6 11.6 0 015.199-1.203c2.984 0 5.262 1.218 6.828 3.64 1.574 2.426 2.355 6.203 2.355 11.324V126.2h-5.593l-.516-3.402h-.14c-.993 1.246-2.044 2.262-3.145 3.035-1.102.781-2.309 1.176-3.61 1.176-1.062 0-2.007-.258-2.851-.77-.832-.515-1.55-1.222-2.137-2.133a11.178 11.178 0 01-1.379-3.175c-.324-1.2-.492-2.516-.492-3.938zm6.524-.738c0 1.07.242 1.867.726 2.379.48.508 1.125.766 1.934.766.804 0 1.492-.246 2.054-.735.555-.496 1.145-1.176 1.766-2.074v-5.82c-2.45.496-4.148 1.207-5.078 2.14-.938.938-1.398 2.051-1.398 3.34zM80.156 93.07h5.598l.46 4.27h.188c.97-1.375 1.989-2.574 3.082-3.574 1.086-1.004 2.391-1.5 3.914-1.5 1.649 0 2.973.472 3.989 1.437 1.004.969 1.808 2.332 2.398 4.11 1.028-1.512 2.106-2.813 3.238-3.91 1.141-1.09 2.477-1.633 4.036-1.633 2.488 0 4.316 1.195 5.48 3.574 1.164 2.386 1.746 5.644 1.746 9.789v20.566h-6.86v-19.3c0-2.407-.222-4.06-.671-4.942-.453-.887-1.172-1.336-2.164-1.336-1.156 0-2.473 1.067-3.965 3.203V126.2h-6.86v-19.3c0-2.407-.222-4.06-.671-4.942-.45-.887-1.172-1.336-2.164-1.336-1.188 0-2.496 1.067-3.922 3.203V126.2h-6.852zm38.09-13.691h6.86v36.937c0 1.024.128 1.739.398 2.133.258.406.523.606.812.606h.399c.113 0 .262-.043.445-.133l.84 7.277c-.371.223-.848.414-1.426.57-.57.157-1.242.235-2.027.235-1.18 0-2.172-.27-2.98-.805-.801-.527-1.45-1.277-1.93-2.234-.48-.957-.832-2.117-1.051-3.473-.219-1.36-.328-2.879-.328-4.574zm0 0" fill="#484444"/>
		<path d="M64.008 74.574c-.313-.613-.707-1.808-.965-2.336-.246-.492-.996-1.773-1.367-2.187-.817-.895-1.008-.961-1.246-2.094-.418-1.973-1.52-5.547-2.82-8.012-.672-1.273-1.786-2.343-2.805-3.265-.895-.809-2.903-2.172-3.254-2.102-3.281.613-4.301 3.64-5.844 6.04-.855 1.323-1.758 2.452-2.434 3.862-.62 1.297-.566 2.735-1.628 3.848-1.094 1.145-1.805 2.363-2.336 3.84-.106.277-.391 3.227-.707 3.926l4.878-.324c4.547.296 3.235 1.933 10.333 1.574l11.203-.324c-.348-.965-.829-2.082-1.012-2.446zm0 0" fill="#F29100"/>
	</g>
</svg>;
  }
});