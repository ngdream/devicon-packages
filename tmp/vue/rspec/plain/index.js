import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'RspecPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#6de1fa'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M66.646 0 58.65.523C33.773 2.147 11.433 19.62 3.189 43.903-.843 55.78-.77 74.446 3.349 85.279l1.03 2.709 2.834-3.986c2.249-3.161 3.334-3.857 5.282-3.384l5.282 1.284c2.58.629 2.768.465 2.139-1.866-5.313-19.631-1.574-35.418 11.476-48.467 7.717-7.721 15.626-11.727 26.455-13.412 7.288-1.133 8.03-1.5 10.758-5.294l2.932-4.079-2.448-4.391Zm6.185 1.265c-.451.011-.764.086-.908.23-.316.317.242 2.283 1.242 4.376 1.787 3.751 1.776 3.86-.965 7.452l-2.779 3.646 6.902 1.866c13.27 3.595 24.053 12.76 30.569 25.998 2.79 5.668 3.42 8.361 3.798 16.243.246 5.199-.09 11.597-.75 14.22-1.065 4.22-.929 5.328 1.164 9.638l2.365 4.868 4.833-.7c2.662-.387 4.959-.797 5.104-.918.144-.117 1.223-3.97 2.395-8.56 3.802-14.865 2.145-29.747-4.936-44.25-5.384-11.02-17.275-22.83-28.225-28.037-6.698-3.185-16.653-6.153-19.81-6.072ZM46.343 36.44l-8.865 8.916-8.869 8.912 2.19 4.286c1.202 2.361 8.947 12.5 17.215 22.535C56.278 91.121 63.37 99.308 63.776 99.28c1.047-.078 29.32-35.886 32.22-40.808l2.405-4.083-8.927-8.975-8.924-8.974zM12.604 83.779c-1.584-.044-2.196.65-3.685 2.467-3.158 3.853-3.099 5.782.34 11.242 9.354 14.862 21.927 24.284 38.037 28.508 9.387 2.46 23.58 2.686 32.18.508 14.65-3.709 29.437-13.846 37.155-25.471 5.984-9.017 5.98-9.19-.105-8.467l-5.212.617-1.975-4.388c-1.09-2.412-2.33-4.388-2.756-4.388-.426 0-1.398 1.507-2.159 3.346-.761 1.843-3.903 5.926-6.983 9.076-14.15 14.494-36.124 18.218-54.158 9.177-5.84-2.928-15.54-11.621-18.734-16.785-1.644-2.659-3.252-3.64-7.643-4.65-2.051-.474-3.351-.766-4.302-.792Z"/>
</svg>;
  }
});