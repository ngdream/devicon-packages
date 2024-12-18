import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'OpenapiPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#91d400'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M112.213.3c-4.04 0-8.078 1.535-11.16 4.602-4.92 4.89-5.9 12.208-2.971 18.082L63.695 57.211c-5.905-2.91-13.258-1.934-18.177 2.961-6.165 6.136-6.16 16.085 0 22.223 6.17 6.134 16.165 6.128 22.33 0a15.656 15.656 0 0 0 2.97-18.09l34.387-34.227c5.905 2.918 13.249 1.936 18.17-2.959a15.654 15.654 0 0 0 0-22.217A15.779 15.779 0 0 0 112.213.301zM56.686 14.866c-.385 0-.763.012-1.147.024-.378.006-.76.006-1.139.023a57.624 57.624 0 0 0-7.12.725c-.055.013-.106.02-.16.031-.332.054-.658.119-.987.178l-.56.105c-.197.041-.39.077-.579.125a55.92 55.92 0 0 0-1.135.248 57.334 57.334 0 0 0-13.6 5.043c-.277.148-.557.317-.833.47-.331.18-.66.369-.996.558-.242.14-.493.273-.74.42h-.005a.245.245 0 0 1-.054.029c-.065.04-.13.069-.196.111l.006.006.586.975L44.834 51.7c.325-.2.66-.378.996-.555a22.903 22.903 0 0 1 8.57-2.615c.378-.042.755-.07 1.14-.093.377-.017.762-.036 1.146-.036V14.865zm2.285.047v33.62a23.565 23.565 0 0 1 5.115 1.109l24.861-24.743a62.16 62.16 0 0 0-2.816-1.836 70.192 70.192 0 0 0-1.035-.609c-.177-.101-.347-.2-.526-.295-.177-.1-.348-.193-.525-.295a40.868 40.868 0 0 0-.916-.49c-.047-.024-.094-.047-.14-.076a57.468 57.468 0 0 0-6.077-2.717c-.053-.023-.114-.042-.168-.06a56.732 56.732 0 0 0-12.713-3.178c-.153-.023-.314-.04-.473-.063l-.472-.055a48.005 48.005 0 0 0-1.174-.117 64.546 64.546 0 0 0-1.088-.093c-.14-.006-.283-.02-.424-.026-.308-.023-.626-.04-.933-.058l-.496-.018zm-33.465 9.26a51.984 51.984 0 0 0-2.387 1.635 56.258 56.258 0 0 0-4.865 4.006l23.793 23.68.094.095c.26-.213.526-.414.79-.615l-.058-.1-17.367-28.701zM16.6 31.389c-.272.272-.525.548-.791.82-.26.272-.533.544-.791.82a57.694 57.694 0 0 0-5.02 6.237c-.16.236-.326.471-.484.709-.167.248-.332.496-.49.75-.061.087-.117.182-.176.273a56.085 56.085 0 0 0-8.8 28.008 57.105 57.105 0 0 0-.03 1.14c-.006.38-.018.757-.018 1.134h33.697c0-.378.034-.754.051-1.132.018-.384.026-.763.067-1.141a22.68 22.68 0 0 1 5.077-12.213c.242-.29.516-.566.768-.844.26-.284.497-.573.768-.845L16.6 31.389zm86.695 7.775L78.428 63.916a22.95 22.95 0 0 1 1.111 5.094h33.78l-.02-.5-.053-.905c-.012-.154-.017-.302-.03-.453l-.087-1.064c-.012-.09-.017-.183-.024-.272a80.881 80.881 0 0 0-.13-1.187c-.005-.035-.005-.065-.01-.094 0-.018 0-.03-.006-.049a41.798 41.798 0 0 0-.174-1.273c0-.018.001-.031-.004-.043a55.59 55.59 0 0 0-1.744-7.93 72.458 72.458 0 0 0-.389-1.258c-.016-.053-.036-.107-.046-.16-.126-.366-.243-.725-.373-1.086-.035-.095-.065-.195-.1-.295a59.416 59.416 0 0 0-.514-1.375c-.101-.26-.201-.521-.303-.775-.081-.207-.164-.408-.246-.61-.083-.199-.172-.394-.254-.595l-.337-.762-.196-.43c-.136-.302-.283-.607-.424-.91-.048-.087-.09-.183-.13-.273-.171-.348-.343-.688-.514-1.031-.024-.047-.048-.095-.076-.143-.197-.378-.39-.755-.596-1.127l-.02-.035a55.872 55.872 0 0 0-3.224-5.211zM79.67 71.277c0 .386-.036.765-.055 1.143-.018.378-.023.76-.064 1.139a22.68 22.68 0 0 1-5.08 12.213c-.242.288-.506.566-.766.843-.254.284-.495.575-.767.846l23.828 23.713c.272-.272.525-.548.79-.82.26-.277.532-.55.786-.829a55.883 55.883 0 0 0 4.83-5.95c.06-.084.112-.167.166-.243.177-.254.354-.514.525-.767.155-.23.307-.455.453-.686.073-.112.144-.23.215-.336a56.019 56.019 0 0 0 8.782-27.992c.018-.378.023-.755.035-1.133.005-.378.017-.757.017-1.14H79.67zM.047 73.56l.018.49c.018.317.04.632.058.945a9.15 9.15 0 0 0 .025.408 62.65 62.65 0 0 0 .248 2.551c0 .04.006.075.012.117.053.431.105.869.17 1.301 0 .005.002.01.008.014a55.905 55.905 0 0 0 1.74 7.945c.006.012.012.017.012.03a42.296 42.296 0 0 0 .402 1.298c.006.023.018.048.024.072.118.366.247.732.37 1.104.037.09.066.182.102.277.112.313.224.632.342.951.06.141.112.284.166.432.106.26.205.518.307.785.081.194.166.389.248.59.081.201.17.408.254.613.112.248.224.496.33.744l.201.45c.136.295.278.598.42.892l.14.287c.167.344.337.682.508 1.018.03.053.054.106.079.154a54.944 54.944 0 0 0 .619 1.168c.042.077.09.154.13.225L35.828 81.13l.107-.064a22.723 22.723 0 0 1-2.107-7.506H.047zm2.693 15.1-1.097.314.011.029 1.086-.344zm34.27-5.58L8.125 100.4c.449.733.91 1.445 1.38 2.148.019.024.031.054.048.078l.017.023c.012.023.03.047.041.07.006.007.006.006.006.012a2.467 2.467 0 0 1 .12.166c0 .006 0 .008.005.012v.006a53.095 53.095 0 0 0 1.588 2.215c.012.018.025.03.031.047.236.302.466.609.701.91a1.355 1.355 0 0 1 .096.117c.248.307.496.614.75.922.06.07.117.141.176.219.231.272.462.544.691.808.102.118.207.23.307.342.197.224.397.45.598.674.112.124.23.241.342.365.048.053.1.113.154.166l.441.479.184.181c.266.278.532.55.802.817l23.823-23.71a33.531 33.531 0 0 1-.778-.833 25.364 25.364 0 0 1-1.357-1.666c-.23-.307-.455-.613-.662-.932a24.082 24.082 0 0 1-.62-.957zm34.22 5.9c-.266.205-.524.412-.796.613l.058.1 17.371 28.7a58.264 58.264 0 0 0 2.375-1.63 57.597 57.597 0 0 0 4.877-4.01l-23.789-23.68-.095-.094zm-29.107.011-.076.082-23.793 23.68c.124.112.241.226.365.338.225.2.449.402.674.596.118.1.23.205.348.306.272.23.544.455.816.68.07.065.148.124.219.181a32.759 32.759 0 0 0 1.043.84c.343.265.682.52 1.023.78.018.012.03.017.041.029a55.312 55.312 0 0 0 4.453 2.994c.053.036.106.065.159.102l.875.513c.177.1.36.2.537.307.17.094.335.19.508.283.312.167.62.338.933.496a53.77 53.77 0 0 0 2.758 1.34l.844-2.037 11.97-28.926.041-.105a23.186 23.186 0 0 1-3.738-2.479zm26.408 1.871c-.325.201-.66.378-.998.555-.337.183-.68.347-1.021.514a23.135 23.135 0 0 1-9.862 2.22 23.122 23.122 0 0 1-6.566-.95c-.36-.113-.716-.254-1.076-.38-.36-.128-.725-.236-1.08-.383l-11.96 28.9-.466 1.136-.4.972h-.006l.094.037c.036.018.065.025.101.041h.006c.006 0 .01.006.016.006.284.118.567.219.851.324.36.143.717.279 1.07.409.183.063.359.148.543.207a57.644 57.644 0 0 0 11.563 2.758c.159.018.312.04.465.058l.484.055c.302.035.605.07.91.1l.225.017c.378.035.751.065 1.123.094.124.006.253.011.377.023.331.024.655.043.98.06.201.007.403.012.604.024.26.006.517.017.777.024.372.012.751.011 1.13.017h.265c3.147 0 6.295-.261 9.408-.781l.158-.022c.325-.06.655-.118.986-.177.19-.037.374-.071.561-.114a18.063 18.063 0 0 0 .58-.117c.318-.065.636-.137.955-.213l.178-.035a57.145 57.145 0 0 0 13.594-5.049c.282-.146.555-.314.838-.466.332-.183.663-.372.994-.56.23-.13.466-.25.691-.386l.006-.006h.006l.004-.005c.006 0 .006 0 .006-.006h.005c.006-.006.012-.006.012-.006.012-.012.025-.018.035-.024.077-.045.154-.088.225-.136l-.582-.97-.592-.974-16.217-26.79zm17.399 28.74c-.076.049-.15.092-.227.137.077-.04.155-.082.233-.13l-.006-.006zm-.274.16-.006.007a.027.027 0 0 1 .01-.006h-.004z"/>
</svg>;
  }
});