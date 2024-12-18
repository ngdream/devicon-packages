import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SonarqubePlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#549dd0'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m118.277 48.488-.54.893c4.068 2.47 7.38 6.165 9.316 10.4l.947-.425c-2.026-4.432-5.478-8.294-9.723-10.868zm-8.443.604-.353 1.26c8.053 2.312 14.48 8.939 16.367 16.877l1.27-.3c-1.99-8.395-8.776-15.395-17.284-17.837zm-9.895 2.06v1.567c12.824 0 23.253 10.289 23.253 22.94h1.572c-.001-13.515-11.142-24.507-24.824-24.507zm-13.744 6.455v14.834c0 1.093-.046 2.336-.097 3.17l1.93.004.097-2.027h.078c.911 1.62 2.328 2.307 4.102 2.307 2.731 0 5.494-2.186 5.494-6.57.029-3.728-2.128-6.262-5.164-6.262-1.98 0-3.4.887-4.184 2.26h-.05v-7.716h-2.206zM65.258 62.65a6.617 6.617 0 0 0-3.928 1.147 6.625 6.625 0 0 0-1.752 9.2 6.61 6.61 0 0 0 8.111 2.349l2.565 4.166 2.031-1.387-2.564-4.162a6.625 6.625 0 0 0 .808-8.416 6.617 6.617 0 0 0-5.271-2.897zm-22.23.274c-2.252 0-3.952.607-4.815 1.094l.715 2.482c.813-.51 2.157-.94 3.418-.94 1.896 0 2.256.947 2.256 1.604v.178c-4.382-.029-7.272 1.522-7.272 4.744 0 1.976 1.491 3.8 4.004 3.8 1.46 0 2.73-.526 3.539-1.517h.07l.229 1.242v-.013h3.482c-.13-.688-.181-1.821-.181-3.012V68.27c0-2.914-1.313-5.346-5.446-5.346zm-11.4.014c-2.054 0-3.319 1.19-3.823 1.976h-.08l-.178-1.695h-3.344c.047 1.092.098 2.408.098 3.949h.013v8.434h3.846v-7.145c0-.359.058-.738.156-.967.253-.705.885-1.437 1.95-1.437 1.391 0 1.947 1.083 1.947 2.685v6.873h3.851v-7.353c0-3.648-1.904-5.32-4.435-5.32zm-26.286.01C2.284 62.947.309 64.692.309 67c-.03 1.47.952 2.862 3.515 3.727 1.448.486 1.826.794 1.826 1.42 0 .63-.481 1.036-1.648 1.036-1.145 0-2.61-.509-3.32-.943L0 75.01c.943.509 2.38.863 4.002.863 3.553 0 5.375-1.7 5.375-4.002-.023-1.83-1.016-3.017-3.371-3.83-1.517-.537-2.004-.835-2.004-1.42 0-.635.537-1.012 1.47-1.012 1.066 0 2.124.397 2.68.705l.688-2.662c-.765-.377-2.054-.705-3.498-.705zm11.256 0c-3.984 0-6.62 2.554-6.62 6.56 0 4.002 2.785 6.389 6.409 6.389 3.32 0 6.537-2.088 6.537-6.618 0-3.73-2.525-6.341-6.326-6.332zm40.695 0c-1.19 0-2.713.751-3.348 2.554h-.097l-.131-2.28h-3.315A78.184 78.184 0 0 1 50.5 67.3l.008 8.328h3.853V69.34c0-.29.024-.579.07-.863.258-1.191 1.22-1.957 2.64-1.957a5.91 5.91 0 0 1 1.035.101v-3.627a4.316 4.316 0 0 0-.813-.047zm47.162.11c-3.573 0-5.75 2.919-5.75 6.618 0 3.699 2.257 6.183 6.03 6.183 1.953 0 3.297-.399 4.081-.757l-.379-1.596c-.835.354-1.796.635-3.392.635-2.228 0-4.158-1.242-4.21-4.254l8.618-.01a8.5 8.5 0 0 0 .068-1.031c0-2.26-1.064-5.787-5.066-5.787zm-31.289.286v7.168c0 4.315 2.308 5.375 4.232 5.375 2.18 0 3.469-1.298 4.053-2.283h.053l.125 2.007h1.978a47.515 47.515 0 0 1-.101-3.347h-.014v-8.92H81.27v7.527c0 .387-.065.776-.202 1.14-.405.987-1.449 2.026-2.943 2.026-2.026 0-2.73-1.572-2.73-3.902v-6.791h-2.229zm31.121 1.312c2.508 0 3.115 2.209 3.086 3.63h-6.514c.188-1.551 1.173-3.63 3.428-3.63zm-38.367.057a4.633 4.633 0 0 1 2.965 1.951 4.656 4.656 0 0 1-1.223 6.45 4.633 4.633 0 0 1-3.478.718 4.642 4.642 0 0 1 1.736-9.119zm26.002.125c2.381 0 3.64 2.1 3.64 4.563 0 2.81-1.385 4.712-3.72 4.712-1.62 0-2.91-1.065-3.34-2.607a5.017 5.017 0 0 1-.101-.816h-.006v-2.204c0-.36.079-.659.127-.916.458-1.7 1.877-2.732 3.4-2.732zm-75.428.83c1.752 0 2.457 1.883 2.457 3.732 0 2.228-.958 3.727-2.457 3.727-1.648 0-2.531-1.602-2.531-3.726 0-1.823.687-3.733 2.531-3.733zm28.229 4.088V71.1c-.005.22-.027.439-.078.654a2.096 2.096 0 0 1-2 1.42c-.865 0-1.518-.477-1.518-1.47 0-1.491 1.57-1.975 3.596-1.948z"/>
</svg>;
  }
});