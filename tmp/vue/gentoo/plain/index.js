import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GentooPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#9991d9'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M53.902.06C43.687-.08 32.19 4.109 22.94 11.434 13.175 19.165 6.379 29.618 5.46 38.332c-.303 2.872.297 5.823 1.793 8.847.999 2.012 1.997 3.377 3.772 5.154 3.284 3.284 6.77 5.5 16.668 10.595 3.618 1.86 4.813 2.5 4.813 2.57 0 .017-.636.568-1.404 1.22-7.83 6.628-14.772 13.078-18.354 17.055-5.193 5.761-8.78 11.843-9.624 16.303-.204 1.075-.235 5.341-.049 7.036.294 2.704.901 4.795 2.069 7.089 1.417 2.796 2.793 4.674 4.931 6.743 4.391 4.248 9.37 6.418 15.958 6.968 1.14.093 5.416-.044 6.699-.212 7.554-1.012 16.645-4.164 26.802-9.287 20.21-10.196 43.993-28.11 57.78-43.518 2.681-2.997 5.308-6.52 6.104-8.193 1.104-2.318 1.628-5.15 1.628-8.839.005-3.32-.42-5.744-1.42-8.057-4.56-10.622-22.846-28.173-41.3-39.647-4.469-2.78-10.533-5.962-13.782-7.236C64.55 1.356 60.599.487 55.925.15a33.799 33.799 0 0 0-2.023-.088Zm-.387.29c1.638.004 3.263.07 4.36.204 5.25.638 9.53 1.98 14.431 4.523 12.072 6.267 27.995 18.274 38.528 29.047 7.311 7.484 11.577 13.863 12.02 17.99.449 4.169-2.499 9.878-8.837 17.113-1.691 1.932-7.262 7.46-9.641 9.57-17.152 15.211-39.25 28.829-57.381 35.36a82.428 82.428 0 0 1-18.613 4.377c-1.868.221-6.102.315-7.443.163-2.539-.279-4.35-.777-6.246-1.713-2.442-1.202-4.323-2.872-5.903-5.233a23.475 23.475 0 0 1-3.502-8.568c-.298-1.544-.272-4.211.052-5.864.742-3.768 2.694-7.426 6.245-11.7 3.943-4.75 12.474-12.686 25.648-23.863l1.58-1.34-.434-.222c-.24-.12-1.466-.657-2.726-1.194-11.598-4.941-19.3-9.468-23.894-14.05-2.068-2.06-3.374-4.026-3.99-6.02-.715-2.295-.276-5.935 1.15-9.525 2.516-6.348 8.291-13.424 15.215-18.639C31.738 5.036 40.212 1.56 49.054.547c1.164-.133 2.818-.199 4.461-.199zm-1.527 2.897a47.58 47.58 0 0 0-4.35.351c-7.88.968-11.661 2.335-17.352 6.273-2.103 1.454-7.168 5.272-8.318 6.272-4.718 4.091-8.576 9.481-10.213 14.252-1.034 3.019-1.194 5.079-.55 7 .638 1.914 1.872 3.188 5.437 5.629 4.239 2.908 9.121 5.469 20.636 10.84 5.989 2.791 6.557 3.107 6.809 3.769.302.803-.044 1.77-1.123 3.115-1.061 1.328-2.397 2.548-8.403 7.694-8.474 7.26-11.585 10.079-14.94 13.515-5.803 5.935-8.816 10.498-9.518 14.414-.577 3.204.262 7.288 2.078 10.102 2.233 3.467 5.544 5.322 10.36 5.806 6.366.634 15.936-1.14 24.28-4.514 15.048-6.082 36.084-19.78 51.54-33.568 7.422-6.621 15.674-15.162 17.24-17.847.458-.787.777-2.655.705-4.133-.087-1.926-.558-3.36-1.81-5.54-2.068-3.6-5.034-7.261-10.374-12.819-6.932-7.209-14.63-13.761-21.91-18.638-6.081-4.075-14.075-8.35-18.829-10.068-3.943-1.425-7.325-2.02-11.395-1.905Zm6.361 19.203a16.95 16.95 0 0 1 3.018.31c7.91 1.643 15.141 7.037 16.855 12.563.395 1.278.377 3.164-.045 4.331a10.528 10.528 0 0 1-.68 1.489c-.572.972-2.378 2.739-3.643 3.573-2.183 1.428-5.455 2.863-7.026 3.08-.494.07-1.035.12-1.204.11-5.095-.252-11.331-2.943-14.88-6.418-2.374-2.321-3.346-4.479-3.185-7.071.409-6.587 3.222-10.716 8.024-11.759.733-.159 1.728-.226 2.766-.208zm1.105 7.39c-1.5.027-2.69.418-3.33 1.19-.39.476-1.18 2.023-1.446 2.832-.679 2.064-.394 3.95.852 5.606.32.422.782.928 1.03 1.128l.458.36.346-.294c.489-.412 1.083-.54 2.455-.536 1.238 0 2.268.128 3.44.42 2.636.658 4.585 1.62 5.117 2.523.205.341.254.368.475.248.138-.07.689-.573 1.23-1.114 1.097-1.096 1.735-2.197 1.944-3.36.457-2.517-1.846-5.434-5.78-7.311-2.423-1.155-4.86-1.727-6.791-1.691zm0 0"/>
</svg>;
  }
});