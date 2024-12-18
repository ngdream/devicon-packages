import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SplunkOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#0C1724'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M41.172 47.891v25.477h4.594V47.891h-4.594m47.063 0v25.477h4.621V64.18c.703.813 1.285 1.766 1.914 2.633l3.156 4.379 1.324 1.84c.121.164.32.594.527.648.109.027.266-.055.367-.09l.824-.293 3.063-1.062-1.457-1.836-2.934-3.645-1.695-2.113-.895-1.07v-.031c.547-.418 1.016-1.051 1.477-1.562l2.629-2.816 1.262-1.348c.176-.199.402-.367.512-.613-.852-.242-1.695-.715-2.512-1.066-.203-.086-.727-.43-.945-.359-.152.051-.297.297-.398.418l-.926 1.07-3.488 4.043-.949 1.102c-.117.133-.258.371-.43.441-.121.047-.293.016-.426.016V47.891h-4.621m20.879 3.813a1.56 1.56 0 0 0-.641.242c-1.309.883-.531 3.105 1.07 2.852.242-.035.473-.113.676-.254 1.301-.898.492-3.09-1.105-2.84m.031.238c1.641-.234 1.988 2.406.367 2.617-1.605.211-1.953-2.387-.367-2.617m-.367 2.195h.277v-.734c.168 0 .352-.012.469.129.227.277.016.605.48.605-.059-.273-.059-.719-.367-.824.094-.062.188-.121.254-.215.391-.578-.687-.973-1.062-.672-.094.074-.051.32-.051.426v1.285m.277-.949c0-.137-.059-.445.031-.559.258-.316.965.422.305.551-.109.02-.227.008-.336.008M6.699 71.805c.996.66 1.918 1.328 3.09 1.648 2.969.813 7.176.34 8.703-2.719a4.38 4.38 0 0 0 .418-1.227c.105-.59.105-1.184.027-1.773-.336-2.473-3.035-3.949-4.832-5.34-.605-.469-1.332-.977-1.73-1.645-.68-1.141.266-2.285 1.426-2.488.809-.145 1.711.051 2.449.387.34.156.645.383.98.543.301-.547.66-1.062.984-1.594.082-.129.336-.418.305-.574-.035-.168-.445-.312-.586-.383-.629-.316-1.273-.582-1.957-.754-2.594-.652-6.059-.328-7.625 2.141a4.35 4.35 0 0 0-.555 1.316 4.85 4.85 0 0 0-.121 1.164c.031 2.602 2.473 4.039 4.32 5.422 1.148.863 2.578 1.797 2.348 3.426-.035.25-.129.492-.262.703-.961 1.547-3.148 1.102-4.445.336-.363-.215-.707-.465-1.039-.727-.09-.07-.27-.27-.395-.254-.152.023-.332.461-.41.586-.359.594-.801 1.176-1.094 1.805m18.859-13.289l-.031-2.508H21.09v26.055h4.438V71.07c.98.98 1.891 1.977 3.246 2.43.871.289 1.816.332 2.727.266a7.84 7.84 0 0 0 2.172-.461c4.152-1.523 5.895-6.207 5.457-10.316-.289-2.668-1.629-5.316-4.109-6.562-.684-.34-1.387-.594-2.145-.719a8.46 8.46 0 0 0-3.43.133c-1.66.43-2.727 1.492-3.887 2.676m47.578-.184h-.027V56.68l-.031-.625-.309-.047h-4.285v17.359h4.625v-7.992c0-1.477-.184-3.105.398-4.5.891-2.156 4.363-3.012 6.027-1.227 1.07 1.152.953 2.895.953 4.348v9.371h4.59v-9.461c0-1.922.117-4.031-.867-5.758-1.77-3.09-6.582-3.215-9.297-1.406-.586.391-1.445.953-1.777 1.59m-24.371-2.355v9.063c0 1.691-.187 3.617.402 5.234.266.738.648 1.473 1.223 2.02 1.832 1.75 5.047 1.898 7.316 1 1.203-.48 2.129-1.32 3.031-2.223v2.297h4.594V56.281l-.051-.273-.348-.031h-4.195v7.961c0 1.5.168 3.152-.453 4.563-.293.656-.77 1.238-1.383 1.617-1.391.859-3.684.809-4.746-.547-.832-1.062-.797-2.457-.797-3.734v-8.941c0-.172.094-.773-.051-.887-.078-.062-.25-.031-.348-.031h-4.195m59.215.215v2.266l.031.836.828.426 2.172 1.059 4.289 2.094 3.43 1.676-3.094 1.523-4.777 2.359-2.051 1.012-.797.414-.031.848v2.172c.375-.066.766-.34 1.105-.512l2.141-1.07 6.922-3.43 2.57-1.285c.313-.156.883-.316 1.113-.578.121-.137.051-.516.051-.687v-1.437c0-.203.047-.473-.012-.668-.062-.211-.656-.395-.848-.488l-2.539-1.27-7.133-3.582-2.238-1.133c-.363-.184-.742-.434-1.133-.543m-78.227 2.152c1.758-.211 3.199.953 3.91 2.469 1.027 2.188.914 5.23.02 7.441-.547 1.352-1.594 2.656-3.133 2.813-2.203.223-3.891-1.066-4.605-3.121-.27-.773-.383-1.602-.418-2.418-.105-2.43.301-5.695 2.816-6.848.453-.207.922-.281 1.41-.336zm0 0"/>
</svg>;
  }
});