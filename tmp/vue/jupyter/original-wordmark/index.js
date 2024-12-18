import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JupyterOriginalWordmarkIcon',
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
	<path d="M6.648 67.352c0 3.91-.363 5.183-1.296 6.12-1.036.81-2.383 1.255-3.782 1.255l.364 2.234c2.164.023 4.265-.637 5.906-1.856.883-.93 1.539-2 1.93-3.152a7.79 7.79 0 00.347-3.55V53.608H6.648zm0 0M32.531 65.59c0 1.676 0 3.172.153 4.469h-3.082l-.207-2.66c-.645.94-1.567 1.718-2.672 2.25a8.055 8.055 0 01-3.621.788c-3.004 0-6.579-1.406-6.579-7.148v-9.543h3.473v8.938c0 3.105 1.113 5.183 4.246 5.183a5.472 5.472 0 001.883-.308 4.993 4.993 0 001.594-.914 4.197 4.197 0 001.058-1.375 3.638 3.638 0 00.36-1.625V53.633h3.468V65.5zm0 0M39.11 59.063c0-2.079 0-3.778-.157-5.317h3.11l.152 2.793c.695-1.012 1.691-1.84 2.887-2.398A8.493 8.493 0 0149 53.363c4.613 0 8.082 3.332 8.082 8.29 0 5.855-4.168 8.761-8.676 8.761a7.606 7.606 0 01-3.332-.621c-1.027-.45-1.906-1.121-2.547-1.95v8.938H39.11zm3.417 4.355c.008.406.063.812.157 1.207.293.992.96 1.871 1.898 2.5s2.094.965 3.281.965c3.653 0 5.801-2.57 5.801-6.3 0-3.263-2.02-6.056-5.672-6.056-1.445.102-2.797.653-3.804 1.555-1.004.902-1.598 2.086-1.66 3.336zm0 0M63.266 53.73l4.172 9.63a50.836 50.836 0 011.214 3.328c.364-.981.75-2.235 1.22-3.395l3.78-9.563h3.653l-5.18 11.618c-2.59 5.586-4.172 8.468-6.555 10.21-1.199.95-2.664 1.61-4.246 1.922l-.855-2.5a9.76 9.76 0 003.031-1.453c1.262-.89 2.266-2.023 2.926-3.308a2.05 2.05 0 00.285-.715 2.342 2.342 0 00-.234-.781l-7.043-15.04h3.78zm0 0M86.516 49.043v4.691h4.972v2.235h-4.972v8.804c0 2.012.675 3.172 2.59 3.172a8.95 8.95 0 002.019-.203l.156 2.238a9.845 9.845 0 01-3.082.399 5.507 5.507 0 01-2.035-.27 4.921 4.921 0 01-1.719-.98c-1.054-1.219-1.535-2.734-1.347-4.246v-8.938h-2.953v-2.234h3.003v-3.977zm0 0M97.883 62.418c-.07.758.05 1.52.355 2.23a5.218 5.218 0 001.407 1.899c.625.539 1.375.953 2.203 1.215.824.265 1.71.367 2.586.308a14.312 14.312 0 005.18-.851l.597 2.234a17.75 17.75 0 01-6.344 1.008c-1.27.074-2.539-.09-3.726-.477a9.07 9.07 0 01-3.153-1.777c-.89-.781-1.578-1.719-2.008-2.75a6.664 6.664 0 01-.492-3.219c0-4.918 3.395-8.804 8.938-8.804 6.215 0 7.77 4.691 7.77 7.687.03.461.03.922 0 1.383H97.804zm10.152-2.234a3.67 3.67 0 00-.144-1.79 4.075 4.075 0 00-.993-1.57 4.844 4.844 0 00-1.656-1.078 5.534 5.534 0 00-2.023-.39c-1.422.09-2.758.632-3.739 1.527-.984.89-1.543 2.066-1.57 3.3zm0 0M116.46 58.809c0-1.918 0-3.575-.155-5.094h3.11v3.195h.155c.325-.984 1-1.86 1.926-2.5.93-.64 2.067-1.015 3.254-1.074.324-.035.656-.035.984 0v2.793a6.071 6.071 0 00-1.191 0c-1.176.039-2.297.445-3.148 1.144-.856.7-1.383 1.645-1.489 2.653-.097.46-.148.922-.156 1.386v8.692h-3.418V58.832zm0 0" fill="#4e4e4e"/>
	<path d="M109.766 7.281a7.691 7.691 0 01-1.09 4.282 7.583 7.583 0 01-3.262 2.949 7.49 7.49 0 01-4.34.62 7.525 7.525 0 01-3.953-1.913A7.642 7.642 0 0195.137 5a7.606 7.606 0 012.629-3.531 7.509 7.509 0 014.136-1.461 7.51 7.51 0 015.422 1.996 7.627 7.627 0 012.438 5.273zm0 0" fill="#767677"/>
	<path d="M65.758 96.79c-20.098 0-37.649-7.364-46.766-18.267a49.95 49.95 0 0018.102 24.254 49.251 49.251 0 0028.676 9.215 49.279 49.279 0 0028.675-9.215 49.917 49.917 0 0018.094-24.254C103.406 89.426 85.855 96.79 65.758 96.79zm0 0M65.75 25.883c20.098 0 37.652 7.367 46.766 18.265a49.95 49.95 0 00-18.102-24.253 49.27 49.27 0 00-28.672-9.22 49.27 49.27 0 00-28.672 9.22A49.909 49.909 0 0018.97 44.148C28.102 33.27 45.652 25.883 65.75 25.883zm0 0" fill="#f37726"/>
	<path d="M38.164 117.984a9.671 9.671 0 01-1.371 5.399 9.5 9.5 0 01-9.59 4.504 9.405 9.405 0 01-4.98-2.418 9.671 9.671 0 01-2.809-4.797 9.73 9.73 0 01.313-5.567 9.624 9.624 0 013.328-4.453 9.466 9.466 0 0112.043.688 9.63 9.63 0 013.066 6.648zm0 0" fill="#9e9e9e"/>
	<path d="M21.285 23.418a5.53 5.53 0 01-3.14-.816 5.627 5.627 0 01-2.618-5.672 5.612 5.612 0 011.407-2.95 5.593 5.593 0 012.789-1.664 5.46 5.46 0 013.238.184 5.539 5.539 0 012.586 1.969 5.66 5.66 0 01-.399 7.129 5.557 5.557 0 01-3.867 1.82zm0 0" fill="#616262"/>
</svg>;
  }
});