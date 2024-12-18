import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'Typo3PlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#f49700'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M25.309 70.219a4.72 4.72 0 0 1-1.43.203c-4.27 0-10.613-15.031-10.613-20.043 0-1.836.437-2.453 1.066-2.977-5.258.606-11.586 2.54-13.602 5a4.909 4.909 0 0 0-.726 2.809c0 7.816 8.344 25.598 14.219 25.598 2.722 0 7.308-4.48 11.086-10.54m-2.743-23.402c5.438 0 10.891.887 10.891 3.957 0 6.23-3.957 13.781-5.973 13.781-3.605 0-8.074-10.003-8.074-15.015 0-2.285.871-2.723 3.2-2.723m29.085 11.04v22.89h-3.199v-22.89h-5.633v-2.782h14.489v2.781Zm16.801 10.988v11.902h-3.305V68.895l-6.52-13.77h3.52l4.844 10.664 4.844-10.664h3.336Zm16.844 2.218h-3.137v9.684h-3.2V55.125s3.2-.258 6.196-.258c5.578 0 7.192 3.446 7.192 7.957.007 5.57-1.899 8.29-7.051 8.29Zm.37-13.61a24.297 24.297 0 0 0-3.452.224v10.668h3.402c2.047 0 3.477-1.356 3.477-5.336 0-3.649-.875-5.555-3.477-5.555Zm18.571 23.552c-6.047 0-7.668-4.407-7.668-13.387 0-8.617 1.621-12.8 7.668-12.8 6.051 0 7.672 4.183 7.672 12.8.05 8.98-1.621 13.387-7.672 13.387Zm0-23.465c-3.304 0-4.402 2.226-4.402 10.3 0 7.883 1.066 10.532 4.402 10.532 3.34 0 4.395-2.649 4.395-10.531 0-8.118-1.098-10.344-4.395-10.344Zm17.528 23.465a28.19 28.19 0 0 1-4.813-.63v-2.753c1.574.332 3.172.527 4.781.59 1.868 0 3.07-1.54 3.07-4.364 0-3.414-.542-5.101-3.199-5.101h-3.007V66.12h2.632c2.977 0 3.125-3.039 3.125-4.512 0-2.89-.914-4.062-2.75-4.062-1.52.055-3.03.262-4.511.617v-2.676a22.956 22.956 0 0 1 4.437-.62c3.778 0 5.942 1.612 5.942 7.073 0 2.496-.77 4.692-2.797 5.332 2.39.332 3.203 2.676 3.203 6.274.082 5.45-2.05 7.508-6.113 7.508Zm0 0"/>
</svg>;
  }
});