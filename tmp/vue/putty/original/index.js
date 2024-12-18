import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PuttyOriginalIcon',
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
	<path d="M69.531 19.84h31.281v20.25H69.531zm0 0" fill="#0403ff"/>
	<path d="M69.531 18.918v22.094h-1.895l.051-22.094zm0 0" fill="#0808bd"/>
	<path d="M69.531 19.84h31.281v-1.844H67.688v1.844zm0 0" fill="#000373"/>
	<path d="M66.766 17.074h34.969v23.91H78.746v-.922h22.094V17.996H67.688v22.988l-.922.922zm0 0" fill="#000473"/>
	<path d="M23.527 77.797h31.281v20.25H23.527zm0 0" fill="#0403ff"/>
	<path d="M23.527 76.875v22.094h-1.895l.051-22.094zm0 0" fill="#0808bd"/>
	<path d="M23.527 77.797h31.281v-1.84H21.684v1.84zm0 0" fill="#000373"/>
	<path d="M54.809 98.047v-22.09H21.684v22.988h-.922v-23.91H55.73v23.91h-.922" fill="#000473"/>
	<path d="M23.527 98.047h31.281v.922H23.527zm0 0" fill="#0001DF"/>
	<path d="M6.965 117.352v-9.191h56.113l7.375-7.371h4.605L64 111.848H10.648v5.527H6.965zm0 0" fill="#fffffd"/>
	<path d="M6.965 108.16l8.266-8.27v8.27zm0 0" fill="#bfbfc0"/>
	<path d="M6.965 117.352h3.684v3.684H6.965zm0 0" fill="#bcbfb1"/>
	<path d="M63.078 108.16l7.375-7.371h-2.766l-7.375 7.371zm0 0" fill="#c2c2c2"/>
	<path d="M75.035 100.813v12.879l-7.375 7.371H10.648v-3.687H64v-5.527zm0 0" fill="#7e7e7e"/>
	<path d="M41.934 114.609v2.766H10.648v-5.527H64v5.527h-3.687v-2.766zm0 0" fill="silver"/>
	<path d="M41.934 114.609H60.34v2.766H41.934zm0 0" fill="#010101"/>
	<path d="M52.965 59.391v-9.187h56.117l7.371-7.375h4.609l-11.035 11.035H56.652v5.527zm0 0" fill="#fffffd"/>
	<path d="M52.965 50.203l8.27-8.27v8.27zm0 0" fill="#bfbfc0"/>
	<path d="M52.965 59.391h3.688v3.688h-3.687zm0 0" fill="#bcbfb1"/>
	<path d="M109.082 50.203l7.371-7.375h-2.762l-7.375 7.375zm0 0" fill="#c2c2c2"/>
	<path d="M121.035 42.828v12.879l-7.371 7.371H56.652v-3.687h53.352v-5.527zm0 0" fill="#7e7e7e"/>
	<path d="M87.91 56.652v2.738H56.652v-5.527h53.352v5.527h-3.687v-2.762H87.91zm0 0" fill="silver"/>
	<path d="M87.91 56.652h18.406v2.738H87.91zm0 0" fill="#010101"/>
	<path d="M66.766 46.516h36.813V15.23l9.191-8.266v34.969l-6.453 6.449H64.922" fill="gray"/>
	<path d="M63.078 13.391l40.473 1.84-1.844 1.844 4.609-3.684 6.453-6.453H69.531zm0 0" fill="#bfc1bb"/>
	<path d="M66.766 42.828h36.813v3.688H66.766zm0 0" fill="#c6bcbf"/>
	<path d="M64.922 41.934h.922l.922-.922V17.074h34.969l1.844-1.844H64.922zm0 0" fill="#817f87"/>
	<path d="M65.844 41.934l.922-.922h34.969V17.074l1.844-1.844v27.598H65.844zm0 0" fill="#fefffa"/>
	<path d="M63.078 13.391h41.395l-.922 1.84H64.922v28.52l-1.844.922zm0 0" fill="#fff"/>
	<path d="M64.922 41.934h.922v.922l-.922.922zm0 0" fill="#bebebe"/>
	<path d="M18.918 104.473h38.629V73.191l9.191-8.27V99.89l-6.449 6.453H17.074" fill="gray"/>
	<path d="M17.074 71.371l40.473 1.844-1.84 1.844 4.605-3.687 6.453-6.449H23.527zm0 0" fill="#bfc1bb"/>
	<path d="M57.547 100.813v3.688H18.918v-4.609h.922v.922zm0 0" fill="#c6bcbf"/>
	<path d="M18.918 99.891h.922l.922-.922v-23.91H55.73l1.844-1.844H18.918zm0 0" fill="#817f87"/>
	<path d="M19.84 99.891l.922-.922H55.73v-23.91l1.844-1.844v27.598H19.84zm0 0" fill="#fefffa"/>
	<path d="M17.074 71.371h41.395l-.922 1.844H18.918V104.5l-1.844 1.844zm0 0" fill="#fff"/>
	<path d="M18.918 99.891h.922v.922h-.922zm0 0" fill="#bebebe"/>
	<path d="M5.121 108.16l9.188-9.191h.922v1.844h-.922l-7.371 7.375v12.875H67.66l7.375-7.371v-12.879h-8.27l1.844-1.844h8.266v14.723l-9.187 9.188H5.121zm0 0"/>
	<path d="M17.074 71.371v34.973l-1.844 1.844V71.371l8.27-8.266h45.109v36.813l-8.27 8.27H15.23l1.844-1.844h43.238l6.453-6.453V64.922H23.527zm0 0"/>
	<path d="M51.125 50.203l9.188-9.191h.922v1.844h-.922l-7.371 7.371v12.879h60.723l7.371-7.375V42.855h-8.266l1.84-1.844h8.27V55.73l-9.187 9.191H51.125zm0 0"/>
	<path d="M63.078 13.391V48.36l-1.844 1.844V13.391l8.297-8.27h45.078v36.813l-8.266 8.27H61.234l1.844-1.844h43.238l6.453-6.453V6.965H69.531zm0 0"/>
	<path d="M46.516 60.313h15.641L37.324 85.145v1.844h2.766l40.473-32.203v-1.844H65.844l23.91-24.832v-1.844H87.91L46.516 58.469zm0 0" fill="#FFFF01"/>
	<path d="M40.398 87.91h-3.996v-3.148l23.555-23.551H45.621v-3.203l41.98-32.637h3.074v3.121L67.992 52.043h13.469v3.203zm-2.152-1.816h1.512l39.883-31.719v-.488H63.668L88.832 27.75v-.562h-.613L47.438 58.93v.461h16.945l-26.137 26.14zm0 0"/>
</svg>;
  }
});