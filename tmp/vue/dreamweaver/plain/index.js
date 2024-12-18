import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'DreamweaverPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#470137'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M22.668 1.6C10.134 1.6 0 11.735 0 24.268v79.467C0 116.269 10.135 126.4 22.668 126.4h82.664c12.534 0 22.668-10.133 22.668-22.666V24.268C128 11.734 117.865 1.6 105.332 1.6zm5.973 32.107c6.507 0 11.947 1.172 16.213 3.52a23.388 23.388 0 0 1 9.652 9.653c2.134 4.107 3.2 8.8 3.2 14.133.053 3.733-.48 7.412-1.653 10.932a25.98 25.98 0 0 1-4.586 8.213c-1.866 2.24-4.106 4.16-6.56 5.707-2.4 1.493-5.066 2.615-7.84 3.362a32.735 32.736 0 0 1-8.213 1.066h-6.027c-2.134 0-4.16 0-5.973-.055-1.867-.053-3.253-.052-4.16-.105-.373 0-.534-.32-.534-.854V34.668c-.053-.32.214-.64.534-.695h.052a54.999 55 0 0 1 3.575-.105c1.6-.054 3.412-.055 5.546-.108 2.133-.053 4.374-.053 6.774-.053zm0 10.186c-1.067 0-1.975 0-2.721.054-.747 0-1.6.053-2.508.106v35.574c.587 0 1.12 0 1.654.052.48.053 1.015.054 1.495.108.533.053 1.12.053 1.76.053 2.452.053 4.904-.373 7.25-1.227 2.134-.746 4.003-1.974 5.603-3.627a16.47 16.47 0 0 0 3.572-5.92c.854-2.56 1.28-5.28 1.28-8 .054-2.56-.372-5.12-1.225-7.52a13.908 13.908 0 0 0-9.121-8.64c-2.294-.694-4.64-1.067-7.04-1.014zm79.409 2.933h9.335c.48 0 .64.266.533.746l-11.521 41.121c-.053.213-.16.426-.32.586 0 .266-.212.374-.48.32h-9.972c-.214.054-.48-.052-.64-.212a1.802 1.802 0 0 1-.319-.641 503.33 503.34 0 0 1-2.56-11.359c-.694-3.307-1.28-6.079-1.707-8.373a443.51 443.52 0 0 0-1.121-5.814c-.267-1.6-.532-2.933-.692-4.053h-.054c-.533 2.346-1.014 4.64-1.494 6.826-.427 2.187-.96 4.428-1.493 6.668a361.09 361.09 0 0 1-1.814 7.36c-.64 2.666-1.386 5.599-2.186 8.746-.107.587-.373.853-.853.853h-9.974c-.267.054-.534-.053-.748-.16-.16-.16-.266-.373-.373-.586L59.2 47.627c-.16-.48.054-.693.64-.693h10.08c.48 0 .748.159.801.533 1.067 4.693 1.972 8.746 2.666 12.16.693 3.413 1.28 6.293 1.653 8.693s.747 4.373 1.013 5.867c.267 1.493.481 2.773.641 3.733h.16a40.89 40.89 0 0 1 .373-2.508c.213-1.013.481-2.347.801-4 .32-1.653.692-3.573 1.172-5.813.48-2.24 1.014-4.8 1.654-7.787.587-2.933 1.44-6.293 2.453-10.08 0-.213.106-.48.213-.693.053-.107.268-.158.588-.158H94.56c.32 0 .48.213.533.586a724.25 724.27 0 0 1 2.293 10.238c.587 2.934 1.12 5.549 1.6 7.842.427 2.24.8 4.212 1.014 5.812.213 1.653.48 2.987.693 4.107.16.907.32 1.813.373 2.72h.16c.267-1.067.48-2.346.694-3.786.214-1.44.48-3.04.853-4.853.32-1.813.692-3.788 1.12-5.975.372-2.187.907-4.587 1.493-7.307.587-2.666 1.226-5.6 1.973-8.746.106-.48.32-.693.693-.693z"/>
</svg>;
  }
});