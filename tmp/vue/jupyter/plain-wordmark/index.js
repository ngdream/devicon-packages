import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JupyterPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#F37726'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<path d="M5.43 67.059c0 3.882-.387 5.148-1.387 6.078-1.106.8-2.547 1.242-4.043 1.242l.387 2.219c2.316.023 4.562-.633 6.32-1.84.941-.926 1.645-1.988 2.063-3.133a7.19 7.19 0 00.37-3.523V53.418H5.43zm0 0M31.59 64.89c0 1.61 0 3.044.152 4.29h-3.12l-.212-2.555c-.656.906-1.59 1.652-2.71 2.16a8.552 8.552 0 01-3.669.758c-3.047 0-6.672-1.352-6.672-6.86v-9.156h3.52v8.575c0 2.98 1.133 4.972 4.305 4.972a5.902 5.902 0 001.91-.293 5.18 5.18 0 001.617-.879 3.985 3.985 0 001.07-1.32c.25-.492.375-1.02.367-1.559v-9.605h3.516v11.387zm0 0M39.07 58.3c0-2.144 0-3.902-.16-5.487h3.164l.156 2.882c.704-1.047 1.72-1.898 2.934-2.476a8.528 8.528 0 013.965-.805c4.687 0 8.215 3.441 8.215 8.563 0 6.046-4.239 9.046-8.82 9.046a7.627 7.627 0 01-3.387-.64 6.65 6.65 0 01-2.59-2.012v9.227H39.07zm3.477 4.497c.008.422.062.84.156 1.25.3 1.023.98 1.93 1.934 2.578.953.652 2.129 1 3.336 1 3.71 0 5.894-2.656 5.894-6.508 0-3.367-2.05-6.254-5.765-6.254-1.47.106-2.844.676-3.868 1.606-1.02.933-1.625 2.156-1.687 3.445zm0 0M63.344 53.46l4.304 9.384c.45 1.047.934 2.304 1.25 3.242.375-.957.778-2.176 1.258-3.309l3.903-9.316h3.765L72.48 64.78c-2.671 5.438-4.3 8.25-6.757 9.946-1.239.925-2.75 1.566-4.383 1.87l-.88-2.433a10.3 10.3 0 003.126-1.418c1.3-.867 2.336-1.969 3.02-3.223.144-.214.246-.453.292-.695a2.28 2.28 0 00-.242-.762l-7.265-14.648h3.902zm0 0M87.223 48.379v4.652h4.937v2.215h-4.937v8.73c0 1.997.672 3.145 2.57 3.145a8.848 8.848 0 002.008-.203l.152 2.223a9.81 9.81 0 01-3.058.394 5.414 5.414 0 01-2.02-.27 4.844 4.844 0 01-1.707-.968c-1.047-1.211-1.527-2.715-1.34-4.211v-8.863h-2.933v-2.215h2.984v-3.946zm0 0M98.79 61.441c-.075.762.05 1.528.366 2.243.32.718.817 1.37 1.465 1.906.649.543 1.426.96 2.285 1.222a7.405 7.405 0 002.688.31c1.844.034 3.68-.255 5.379-.856l.62 2.246a18.997 18.997 0 01-6.59 1.015 10.936 10.936 0 01-3.87-.48c-1.23-.39-2.348-1-3.274-1.785-.925-.785-1.636-1.73-2.086-2.766a6.475 6.475 0 01-.507-3.234c0-4.946 3.523-8.852 9.28-8.852 6.454 0 8.071 4.715 8.071 7.727.031.465.031.925 0 1.39h-13.91zm10.542-2.246a3.582 3.582 0 00-.148-1.8 4.142 4.142 0 00-1.032-1.579 5.086 5.086 0 00-1.718-1.082 5.956 5.956 0 00-2.102-.394c-1.477.09-2.863.637-3.883 1.535-1.023.898-1.605 2.078-1.633 3.32zm0 0M117.914 58.055c0-1.97 0-3.668-.152-5.23h3.039v3.28h.148c.32-1.011.98-1.91 1.883-2.566a5.96 5.96 0 013.184-1.102c.316-.039.64-.039.96 0v2.868a5.272 5.272 0 00-1.163 0c-1.149.039-2.247.453-3.079 1.172-.836.718-1.351 1.687-1.453 2.722a7.96 7.96 0 00-.156 1.422v8.922h-3.34V58.078zm0 0M109.766 7.281a7.691 7.691 0 01-1.09 4.282 7.583 7.583 0 01-3.262 2.949 7.49 7.49 0 01-4.34.62 7.525 7.525 0 01-3.953-1.913A7.642 7.642 0 0195.137 5a7.606 7.606 0 012.629-3.531 7.509 7.509 0 014.136-1.461 7.51 7.51 0 015.422 1.996 7.627 7.627 0 012.438 5.273zm0 0M65.758 96.79c-20.098 0-37.649-7.364-46.766-18.267a49.95 49.95 0 0018.102 24.254 49.251 49.251 0 0028.676 9.215 49.279 49.279 0 0028.675-9.215 49.917 49.917 0 0018.094-24.254C103.406 89.426 85.855 96.79 65.758 96.79zm0 0M65.75 25.883c20.098 0 37.652 7.367 46.766 18.265a49.95 49.95 0 00-18.102-24.253 49.27 49.27 0 00-28.672-9.22 49.27 49.27 0 00-28.672 9.22A49.909 49.909 0 0018.97 44.148C28.102 33.27 45.652 25.883 65.75 25.883zm0 0M38.164 117.984a9.671 9.671 0 01-1.371 5.399 9.5 9.5 0 01-9.59 4.504 9.405 9.405 0 01-4.98-2.418 9.671 9.671 0 01-2.809-4.797 9.73 9.73 0 01.313-5.567 9.624 9.624 0 013.328-4.453 9.466 9.466 0 0112.043.688 9.63 9.63 0 013.066 6.648zm0 0M21.285 23.418a5.53 5.53 0 01-3.14-.816 5.627 5.627 0 01-2.618-5.672 5.612 5.612 0 011.407-2.95 5.593 5.593 0 012.789-1.664 5.46 5.46 0 013.238.184 5.539 5.539 0 012.586 1.969 5.66 5.66 0 01-.399 7.129 5.557 5.557 0 01-3.867 1.82zm0 0"/>
	</g>
</svg>;
  }
});