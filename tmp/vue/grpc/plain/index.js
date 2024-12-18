import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GrpcPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#00b0ad'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M8.838 38.03 0 46.935l8.938 8.837L12.4 52.27l-3.132.01-5.391-5.351 5.352-5.393 3.128-.012-3.52-3.496zm3.52 3.495.716.711.713-.716-1.43.005zm.716.711-4.033 4.065 8.098-.03-4.065-4.035zm4.065 4.035.601.598-.613.621 11.416-.043-.635-.63.582-.587-11.351.041zm11.351-.04 4.17-.016-2.086-2.07 2.281-.008 2.696 2.675-2.676 2.696-2.248.008L33.131 52l5.183-5.223-5.222-5.183-4.602 4.636zm2.137 3.285-.016-.016-.015.016h.031zm-.016-.016 2.053-2.068-4.121.015 2.068 2.053zm-13.484-2.01-8.08.03 4.062 4.033 4.018-4.063zm-4.018 4.063-.709.718 1.428-.005-.719-.713zm102.381-7.71c-2.515 0-4.847.448-6.996 1.339-2.149.89-4.01 2.125-5.586 3.7-1.576 1.576-2.809 3.446-3.699 5.61-.893 2.165-1.338 4.535-1.338 7.113 0 2.58.444 4.953 1.336 7.118.89 2.164 2.125 4.033 3.701 5.609 1.576 1.576 3.437 2.81 5.586 3.7 2.15.89 4.48 1.337 6.996 1.337 1.4 0 2.729-.16 3.987-.476a16.477 16.477 0 0 0 3.51-1.315 13.433 13.433 0 0 0 2.89-1.98A13.111 13.111 0 0 0 128 73.162l-2.816-2.006c-.637.987-1.33 1.807-2.077 2.46a9.755 9.755 0 0 1-2.388 1.552c-.844.382-1.703.652-2.578.81a14.76 14.76 0 0 1-2.65.24c-2.166 0-4.108-.398-5.827-1.195-1.72-.795-3.173-1.86-4.367-3.199-1.193-1.336-2.11-2.887-2.746-4.654a16.278 16.278 0 0 1-.955-5.565c0-1.94.319-3.794.955-5.56.637-1.767 1.553-3.32 2.746-4.656 1.194-1.337 2.648-2.404 4.367-3.2 1.72-.795 3.66-1.193 5.826-1.193.89 0 1.782.128 2.674.383.89.255 1.728.589 2.508 1.002.78.414 1.471.89 2.076 1.431.605.542 1.083 1.083 1.434 1.624l3.005-2.245c-1.495-1.91-3.293-3.276-5.394-4.105-2.1-.827-4.202-1.24-6.303-1.24v-.002zm-71.525.86V78.51h3.437V62.8h5.73l9.263 15.71h4.203l-9.743-16.043c2.8-.254 4.944-1.186 6.424-2.793 1.48-1.607 2.219-3.59 2.219-5.945 0-3.024-.993-5.285-2.982-6.782-1.99-1.496-4.705-2.244-8.143-2.244H43.965zm28.553 0V78.51h3.437V62.8h6.399c3.437 0 6.151-.757 8.14-2.269 1.99-1.51 2.985-3.778 2.985-6.802 0-3.024-.996-5.285-2.985-6.782-1.99-1.496-4.703-2.244-8.14-2.244h-9.836zm-25.116 3.152h6.112c1.528 0 2.823.152 3.89.454 1.066.303 1.92.724 2.557 1.265.636.542 1.097 1.17 1.383 1.887.287.716.43 1.472.43 2.268 0 .828-.143 1.6-.43 2.316a4.621 4.621 0 0 1-1.383 1.861c-.637.525-1.49.948-2.557 1.266-1.067.318-2.362.476-3.89.476h-6.112V47.855zm28.553 0h5.54c1.527 0 2.823.152 3.89.454 1.066.303 1.917.724 2.554 1.265.636.542 1.098 1.17 1.385 1.887a6.05 6.05 0 0 1 .432 2.268c0 .828-.146 1.6-.432 2.316a4.623 4.623 0 0 1-1.385 1.861c-.637.525-1.488.948-2.554 1.266-1.067.318-2.363.476-3.89.476h-5.54V47.855zM22.67 55.59c-1.655 0-3.177.296-4.56.885a10.66 10.66 0 0 0-3.583 2.459 11.658 11.658 0 0 0-2.363 3.675c-.573 1.401-.86 2.913-.86 4.537 0 1.623.304 3.136.909 4.536a10.872 10.872 0 0 0 2.48 3.605 11.6 11.6 0 0 0 3.702 2.363c1.416.573 2.937.86 4.56.86a11.49 11.49 0 0 0 4.633-.955c1.464-.636 2.704-1.72 3.723-3.246h.095v4.01c0 1.21-.15 2.346-.453 3.413a7.274 7.274 0 0 1-1.48 2.793c-.685.795-1.584 1.425-2.698 1.887-1.115.46-2.466.692-4.058.692-1.814 0-3.464-.375-4.944-1.122-1.48-.748-2.68-1.742-3.603-2.984l-2.342 2.482c1.433 1.528 3.026 2.658 4.777 3.391 1.75.732 3.74 1.098 5.967 1.098 2.514 0 4.554-.38 6.114-1.145 1.56-.764 2.776-1.72 3.652-2.865a9.553 9.553 0 0 0 1.766-3.772c.303-1.37.455-2.659.455-3.869V56.162h-3.153v3.727h-.095c-.637-.86-1.32-1.568-2.053-2.125a10.46 10.46 0 0 0-2.22-1.315 10.06 10.06 0 0 0-2.245-.668 12.746 12.746 0 0 0-2.123-.19v-.001zm.38 2.865c1.306 0 2.484.232 3.534.693 1.05.461 1.942 1.082 2.674 1.862a7.968 7.968 0 0 1 1.672 2.72 9.51 9.51 0 0 1 .574 3.32c.03 1.306-.17 2.482-.6 3.532a7.61 7.61 0 0 1-1.838 2.7 8.665 8.665 0 0 1-2.744 1.741 8.718 8.718 0 0 1-3.271.622c-1.178 0-2.27-.232-3.272-.692a8.542 8.542 0 0 1-2.625-1.861 8.718 8.718 0 0 1-1.767-2.723 8.556 8.556 0 0 1-.645-3.318 8.59 8.59 0 0 1 .645-3.32 8.734 8.734 0 0 1 1.767-2.72 8.566 8.566 0 0 1 2.625-1.863 7.757 7.757 0 0 1 3.272-.693z"/>
</svg>;
  }
});