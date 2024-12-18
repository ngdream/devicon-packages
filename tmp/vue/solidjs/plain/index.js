import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SolidjsPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#2c4f7c'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M61.832 4.744c-3.205.058-6.37.395-9.45 1.07l-2.402.803c-4.806 1.603-8.813 4.005-11.216 7.21l-1.602 2.404-12.017 20.828.166.031c-4.785 5.823-5.007 14.07-.166 21.6 1.804 2.345 4.073 4.431 6.634 6.234l-15.445 4.982L.311 97.946s42.46 32.044 75.306 24.033l2.403-.801c5.322-1.565 9.292-4.48 11.683-8.068l.334.056 16.022-28.84c3.204-5.608 2.404-12.016-1.602-18.425a36.05 36.05 0 0 0-7.059-6.643l15.872-5.375 14.42-24.033S92.817 4.19 61.831 4.744z"/>
</svg>;
  }
});