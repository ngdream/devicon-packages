import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'XmlOriginalIcon',
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
	<path d="M118.759 49.397c.265-2.273.444-5.109 1.332-7.06.675 2.022.9 4.64 2.28 6.163 1.798-.42 3.785-.317 5.629.08-1.107 1.46-3.51 2.446-4.95 3.387 1.733 1.46 2.574 3.161 3.526 5.184-2.515-.048-4.806-2.234-6.742-3.412-1.67 1.889-2.844 3.725-5.292 4.403.882-1.892 2.948-3.518 3.209-5.477-1.96-.73-4.387-2.293-5.66-3.879 2.023.122 4.649.38 6.668.619" fill="#ae007f"/>
	<path d="M120.845 63.79c.19-1.65.318-3.716.964-5.132.492 1.472.654 3.367 1.657 4.474 1.294-.305 2.749-.234 4.082.055-.802 1.051-2.542 1.781-3.581 2.46 1.261 1.055 1.875 2.292 2.554 3.764-1.825-.036-3.494-1.627-4.899-2.472-1.205 1.365-2.062 2.701-3.843 3.194.643-1.37 2.146-2.56 2.324-3.975-1.42-.532-3.18-1.665-4.105-2.816 1.456.091 3.371.278 4.836.448" fill="#97bd00"/>
	<path d="M114.594 75.154c.132-1.147.222-2.566.666-3.546.337 1.015.453 2.324 1.147 3.086.896-.21 1.896-.159 2.823.04-.558.73-1.76 1.229-2.477 1.701.868.734 1.288 1.583 1.76 2.598-1.262-.024-2.408-1.119-3.387-1.714-.838.949-1.429 1.869-2.658 2.214.445-.948 1.48-1.762 1.606-2.742-.983-.368-2.201-1.149-2.836-1.95 1.016.059 2.337.19 3.344.308" fill="#f07f00"/>
	<path d="M21.148 74.424c-1.04 0-12.811 11.47-13.957 12.824-.96 1.066-1.48 3.026-3.126 3.248-1.75.233-2.15-.449-2.99-1.766-.798-1.249-1.762-3.474-.37-4.378 1.345-.865 18.023-16.163 18.543-16.785.647-.663-.064-2.301-.372-4.768-.397-3.173-.6-6.08-.354-9.218.246-3.225 1.016-7.2 1.852-10.324.512-1.912.215-5.684 2.876-5.798.539.13 4.633 2.962 3.53 6.694-1.594 5.351-3.125 11.367-2.653 17.1.087 1.106.535 2.065 1.237 1.558 7.552-5.406 19.375-11.265 22.398-12.308 1.455-.464 2.947-.83 4.457-1.015 1.084.122 1.904 1.142 2.762 1.864 4.28 3.669-4.034 16.683-4.74 20.645.663 0 1.385-1.007 2.654-2.154a252.59 252.59 0 0 0 5.013-4.673c2.372-1.785 4.446-3.422 7.457-3.807 7.242-.92 5.076 9.51 3.442 13.24.932 0 3.212-2.626 5.041-4.36.917-.868 1.935-1.788 2.863-2.645 1.104-1.015 1.615-1.543 2.447-1.134.56.158 2.98 1.626 3.115 3.867.114 1.817-.631 3.597-.991 5.338-.306 1.46-.23 6.207 1.736 6.216.778-.564 1.793-.802 2.717-.96 1.492-.25 1.42.238 2.65.694 1.927.713.186 3.45-.83 4.462-1.36 1.357-3.308 2.253-5.26 2.22-2.145-.035-3.83-1.356-4.798-3.212-.528-1.015-1.209-4.775-1.472-5.89-.261-1.095-.035-2.408-1.197-1.297-3.28 3.165-6.663 6.105-10 9.222-3.675 3.432-7.186-1.282-6.52-5.132.655-3.764 3.903-8.361 4.487-12.093-1.552 0-4.165 2.708-5.153 3.827-1.607 1.817-3.388 3.828-5.2 5.735-1.825 1.916-3.387 3.68-5.22 5.588-1.32 1.377-2.832 3.336-5.06 3.463-1.1-.174-2.848-2.002-3.145-4.327-.251-1.943.241-4.077.982-5.862 2.151-5.16 8.032-16.06 9.409-21.482-2.824.275-14.79 5.807-22.711 12.407-2.293 1.892-.175 5.351.782 7.655 1.026 2.463 4.056 6.917 4.961 7.674 2.372 1.972.476 3.714-1.876 3.59-1-.706-2.209-1.472-3.145-2.408-1.02-1.018-1.9-2.18-2.698-3.37-1.626-2.407-3.176-5.19-3.597-8.112m85.134-30.74c-.67-2.494-3.789 1.314-5.351 3.33-4.324 5.564-8.265 16.891-8.901 18.978-1.935 6.398-2.685 14.283 1.503 19.914 2.436 3.285 6.728 3.534 10.935 2.325 2.17-.623 4.343-2.182 5.085-3.875.615-1.412.932-4.037-2.166-2.035-1.198.774-3.395 1.627-7.334 1.564-1.32-.025-3.49-1.92-4.072-3.88-1.024-3.193-.587-7.457-.587-7.457.891-5.505 3.446-11.47 5.687-16.476.87-1.932 3.518-6.747 4.51-8.282 0 .004 1.27-1.998.7-4.124zm0 0" fill="#005fad"/>
</svg>;
  }
});