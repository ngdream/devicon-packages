import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CapacitorOriginalWordmarkIcon',
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
	<path d="M66.29 59.285c3.468 0 5.5 2.711 5.5 6.082 0 3.38-2.032 6.082-5.5 6.082-1.688 0-2.919-.71-3.54-1.504v5.168h-3.242V59.555H62.5v1.422c.746-1.063 2.102-1.692 3.79-1.692Zm-28.267-3.273c4.485 0 6.758 3.047 7.168 5.695h-3.449C41.332 60.113 39.86 59 37.992 59c-2.476 0-4.258 1.965-4.258 4.758 0 2.762 1.782 4.722 4.258 4.722 1.867 0 3.34-1.109 3.75-2.703h3.45c-.41 2.649-2.684 5.696-7.169 5.696-4.457 0-7.546-3.446-7.546-7.715 0-4.301 3.09-7.746 7.546-7.746Zm13.278 3.273c1.687 0 3.031.617 3.789 1.692v-1.422h2.992V71.18H55.09v-1.418c-.75 1.062-2.102 1.687-3.79 1.687-3.468 0-5.5-2.71-5.5-6.082 0-3.379 2.032-6.082 5.5-6.082Zm26.754 0c1.687 0 3.03.617 3.789 1.692v-1.422h2.992V71.18h-2.992v-1.418c-.75 1.062-2.102 1.687-3.79 1.687-3.468 0-5.5-2.71-5.5-6.082 0-3.379 2.032-6.082 5.5-6.082Zm13.699 0c3.715 0 5.476 2.555 5.703 4.528h-3.332c-.254-.997-1.207-1.727-2.395-1.727-1.738 0-2.738 1.332-2.738 3.281 0 1.953 1 3.285 2.738 3.285 1.188 0 2.141-.73 2.395-1.73h3.332c-.227 1.976-1.988 4.527-5.703 4.527-3.473 0-5.996-2.617-5.996-6.082s2.523-6.082 5.996-6.082Zm22.465 0c3.828 0 6.273 2.778 6.273 6.082 0 3.309-2.445 6.082-6.273 6.082-3.832 0-6.278-2.773-6.278-6.082 0-3.305 2.446-6.082 6.278-6.082Zm13.394.153c.114 0 .387.023.387.023v2.957s-.34-.063-.629-.063c-1.867 0-2.844.91-2.844 3.043v5.797h-3.207V59.547h2.957v1.508c.426-.692 1.332-1.617 3.336-1.617Zm-21.625-2.778v2.887h2.492v2.57h-2.492v9.07h-3.242V56.66Zm-4.691 2.887V71.18H98.05V59.547Zm-49.309 2.516c-1.8 0-2.941 1.417-2.941 3.304 0 1.887 1.14 3.309 2.941 3.309s2.942-1.422 2.942-3.309c.008-1.887-1.133-3.305-2.942-3.305Zm13.614 0c-1.801 0-2.942 1.417-2.942 3.304-.008 1.887 1.133 3.309 2.942 3.309 1.8 0 2.941-1.422 2.941-3.309 0-1.887-1.14-3.305-2.941-3.305Zm13.14 0c-1.8 0-2.941 1.417-2.941 3.304 0 1.887 1.14 3.309 2.941 3.309s2.942-1.422 2.942-3.309c.007-1.887-1.133-3.305-2.942-3.305Zm35.477 0c-1.711 0-3.031 1.218-3.031 3.304s1.32 3.309 3.03 3.309c1.712 0 3.032-1.223 3.032-3.309 0-2.086-1.32-3.305-3.031-3.305Zm-14.547-7.266c1.144 0 1.965.8 1.965 1.91 0 1.113-.82 1.89-1.965 1.89-1.14 0-1.961-.777-1.961-1.89 0-1.11.82-1.91 1.96-1.91Zm0 0"/>
	<path d="M3.797 56.902.03 60.676l5.809 5.828L0 72.359l3.754 3.774 5.851-5.86 5.82 5.817 3.766-3.774Zm0 0" fill="#53b9ff"/>
	<path d="m13.383 66.504-3.778 3.77 5.82 5.816 3.766-3.774Zm0 0" fill="#119eff"/>
	<path d="m13.383 66.504-3.778 3.77 1.454 1.445Zm0 0" fillOpacity=".2"/>
	<path d="m18.531 61.367 5.852-5.855-3.77-3.762-5.847 5.848-5.82-5.817-3.77 3.77 15.398 15.414 3.766-3.77Zm0 0" fill="#53b9ff"/>
	<path d="m10.988 61.367 3.778-3.77-5.82-5.816-3.77 3.77Zm0 0" fill="#119eff"/>
	<path d="m10.988 61.367 3.774-3.77-1.453-1.449Zm0 0" fillOpacity=".2"/>
</svg>;
  }
});