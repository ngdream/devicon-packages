import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ClionPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#21d789'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M76.59 44.016v4.195h4.972v-4.195H76.59zm-27.899.57c-6.683 0-11.343 5.055-11.343 11.242v.059c0 6.25 4.738 11.19 11.156 11.215 4.207 0 6.683-1.497 8.922-3.887l-3.047-3.078c-1.727 1.544-3.234 2.539-5.719 2.539-3.73 0-6.308-3.106-6.308-6.84v-.059c0-3.734 2.64-6.777 6.308-6.777 2.176 0 3.887.93 5.563 2.453l3.047-3.508c-2.02-1.993-4.473-3.36-8.579-3.36zm10.364.363v21.754h15.64v-4.348H63.84V44.95h-4.785zm-50.895.016v21.754h21.754V44.965H8.16zm6.422 2.562a4.25 4.25 0 0 1 3.242 1.27l-1.144 1.328a3.038 3.038 0 0 0-2.102-.93c-1.39 0-2.387 1.153-2.387 2.563v.023c0 1.41.977 2.586 2.387 2.586.938 0 1.516-.363 2.176-.965l1.129 1.168a4.213 4.213 0 0 1-3.38 1.453 4.16 4.16 0 0 1-4.214-4.218v-.024a4.187 4.187 0 0 1 4.293-4.254zm4.477.133h1.812v6.664h3.57v1.516h-5.38l-.002-8.18zm93.757 2.063c-2.39 0-3.794 1.273-4.879 2.675v-2.351h-4.714l.011 16.656h4.715V57.41c0-2.234 1.15-3.387 2.95-3.387 1.804 0 2.863 1.153 2.863 3.387v9.293h4.71V55.91c0-3.824-2.077-6.187-5.656-6.187zm-20.375.011c-5.19 0-9.043 3.883-9.043 8.672v.059c0 4.808 3.8 8.613 8.989 8.613 5.19 0 9.047-3.887 9.047-8.672v-.062c0-4.785-3.797-8.61-8.993-8.61zm-15.726.313v16.656h4.71V50.047h-4.71zm15.668 3.762c2.61 0 4.379 2.14 4.379 4.597v.059h.008c0 2.46-1.614 4.543-4.329 4.543-2.609 0-4.382-2.145-4.382-4.602v-.062c0-2.457 1.618-4.535 4.324-4.535zm-81.512 8.8h8.16v1.36h-8.16v-1.36zm27.26 12.305v8.207h.865v-1.11a2.63 2.63 0 0 0 2.229 1.235c1.402 0 2.771-1.125 2.771-3.027v-.02c0-1.925-1.381-3.015-2.771-3.015a2.615 2.615 0 0 0-2.229 1.296v-3.566h-.865zm52.926.172v.953h.988v-.953h-.988zm-32.504.156v5.281c0 1.246-.65 1.891-1.54 1.891-.832 0-1.329-.398-1.814-1.125l-.635.55h-.002a2.696 2.696 0 0 0 2.434 1.384 2.43 2.43 0 0 0 1.729-.649 2.845 2.845 0 0 0 .724-2.07v-5.262h-.896zm13.726 0-.002 7.86h3.5c1.72 0 2.858-.797 2.858-2.145v-.023c0-1.082-.76-1.618-1.69-1.899a1.89 1.89 0 0 0 1.246-1.816v-.024a1.74 1.74 0 0 0-.502-1.257 2.876 2.876 0 0 0-2.06-.696h-3.35zm-4.13.313v1.754h-.807v.765h.806v3.508h.002c0 1.18.705 1.637 1.64 1.625a2.175 2.175 0 0 0 1.048-.246v-.727a1.818 1.818 0 0 1-.846.2c-.586 0-.974-.258-.974-.965v-3.395h1.84v-.765h-1.84v-1.754h-.87zm5.007.484h2.397c1.125 0 1.742.508 1.742 1.281l.004.024c0 .922-.748 1.402-1.815 1.402h-2.328V76.04zm-9.324 1.145c-1.609 0-2.787 1.351-2.787 3.023v.027a2.918 2.918 0 0 0 .81 2.137 2.905 2.905 0 0 0 2.112.883 2.985 2.985 0 0 0 2.388-1.086l-.556-.484a2.395 2.395 0 0 1-1.828.82 2.025 2.025 0 0 1-2.047-1.969h4.62a3.297 3.297 0 0 0 0-.281c0-1.695-.993-3.07-2.712-3.07zm32.871 0a2.206 2.206 0 0 0-1.99 1.14V77.31h-.863v5.82h.863V79.8a1.706 1.706 0 0 1 .475-1.285 1.714 1.714 0 0 1 1.269-.528c1.023 0 1.606.668 1.606 1.758v3.39h.869v-3.624c0-1.383-.823-2.328-2.229-2.328zm5.742.02c-1.148 0-1.978.663-1.978 1.663v.012c0 1.067 1.01 1.379 1.92 1.637.766.214 1.45.441 1.45 1.023v.027c0 .56-.503.918-1.202.918a3.366 3.366 0 0 1-2.014-.722l-.435.617a3.964 3.964 0 0 0 2.406.855c1.156 0 2.068-.652 2.068-1.738v-.023c0-1.047-.967-1.394-1.865-1.664-.77-.235-1.496-.45-1.496-1v-.024c0-.48.436-.844 1.123-.844a3.296 3.296 0 0 1 1.72.563l.39-.66a3.993 3.993 0 0 0-2.087-.64zm-18.933.003a2.456 2.456 0 0 0-1.44.434c-.426.288-.75.702-.93 1.187v-1.52h-.869v5.813h.87V80.81c0-1.758 1.028-2.668 2.298-2.668h.07v-.934zm3.32.016a4.84 4.84 0 0 0-2.111.484l.26.727a3.997 3.997 0 0 1 1.761-.426c1.094 0 1.737.535 1.737 1.586v.183a6.037 6.037 0 0 0-1.791-.25c-1.472 0-2.485.653-2.485 1.88v.027c0 1.194 1.09 1.812 2.168 1.804a2.557 2.557 0 0 0 2.108-1v.875h.828v-3.55a2.283 2.283 0 0 0-.594-1.7 2.567 2.567 0 0 0-1.881-.64zm-42.254.078 2.645 5.8c-.348.82-.676 1.09-1.196 1.09a1.853 1.853 0 0 1-.91-.214l-.293.683a2.583 2.583 0 0 0 1.239.293c.874 0 1.437-.438 1.937-1.64l2.436-6.004h-.918l-1.873 4.84-2.11-4.848h-.957zm46.535.008v5.8h.866v-5.8h-.866zm-27.3.609c1.156 0 1.761.918 1.851 1.98h-3.74c.113-1.14.878-1.98 1.889-1.98zm-22.75.043c1.101 0 2.046.875 2.046 2.246v.027c0 1.403-.92 2.239-2.047 2.239a2.18 2.18 0 0 1-2.105-2.254v-.02a2.175 2.175 0 0 1 2.105-2.238zm32.093 1.574h2.487v.012c1.375 0 2.089.496 2.078 1.336v.027c0 .875-.747 1.403-1.934 1.403h-2.63v-2.778zm13.615.64a6.014 6.014 0 0 1 1.708.247v.562c0 .926-.868 1.576-1.958 1.579-.774 0-1.455-.434-1.455-1.157v-.027c0-.731.615-1.203 1.705-1.203z"/>
</svg>;
  }
});