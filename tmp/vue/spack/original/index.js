import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SpackOriginalIcon',
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
	<path d="m73.192 4.603 50.205 50.205a12.972 12.972 0 0 1 0 18.384l-50.205 50.205a12.972 12.972 0 0 1-18.384 0L4.603 73.192a12.972 12.972 0 0 1 0-18.384L54.808 4.603a12.972 12.972 0 0 1 18.384 0z" fill="#0f3a80"/>
	<path d="m48.59 32.389-8.336 9.261-2.602-2.343-5.466 13.918 13.27-6.891-2.602-2.344 8.332-9.254a13.126 13.126 0 0 1-2.596-2.347Zm8.16 4.478v.172l.135-.15c-.046-.006-.09-.016-.135-.022zm3.5 4.102-3.5 3.886v32.97h-3.5l5.25 14 5.25-14h-3.5zM58.5 14c-5.54 0-10 4.46-10 10s4.46 10 10 10c.356 0 .704-.03 1.049-.068l.719-.8c.164.167.335.325.507.481-2.62-2.38-4.275-5.807-4.275-9.613 0-3.853 1.692-7.321 4.37-9.705A9.949 9.949 0 0 0 58.5 14ZM24 54c-5.54 0-10 4.46-10 10s4.46 10 10 10 10-4.46 10-10-4.46-10-10-10zm10.33 17.855a13.113 13.113 0 0 1-2.475 2.475l10.936 10.936-2.475 2.474 13.612 6.188-6.188-13.612-2.474 2.475zM64 94c-5.54 0-10 4.46-10 10s4.46 10 10 10 10-4.46 10-10-4.46-10-10-10z" fill="#ffa600"/>
	<path d="M104 54c-5.54 0-10 4.46-10 10s4.46 10 10 10 10-4.46 10-10-4.46-10-10-10zM67.75 36.867v40.957h-3.5l5.25 14 5.25-14h-3.5V36.867A12.96 12.96 0 0 1 69.5 37a12.95 12.95 0 0 1-1.75-.133Zm25.92 34.988L82.734 82.791l-2.474-2.475-6.188 13.612 13.612-6.188-2.475-2.474L96.145 74.33a13.113 13.113 0 0 1-2.475-2.475ZM79.41 32.389a13.127 13.127 0 0 1-2.597 2.35l8.333 9.253-2.601 2.342 13.27 6.89-5.467-13.917-2.602 2.343zm-19.142.744-16.3 18.103-2.6-2.341L35.9 62.81l13.27-6.891-2.602-2.342L63.055 35.27a13.09 13.09 0 0 1-2.787-2.138ZM69.5 14c-5.54 0-10 4.46-10 10s4.46 10 10 10 10-4.46 10-10-4.46-10-10-10z" fill="#fff"/>
</svg>;
  }
});