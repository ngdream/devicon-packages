import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'NotionPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#fff'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M 76.25 0.25 C 76.047 0.418 75.848812 0.71546875 75.632812 0.73046875 L 66.761719 1.2539062 L 56.203125 2.0039062 L 49.828125 2.5039062 L 38.328125 3.4960938 L 34.515625 3.7460938 L 25.644531 4.2578125 C 22.288531 4.4798125 18.925938 4.6484375 15.585938 5.0234375 C 9.1519375 5.7464375 3.742 9.645125 2.5 16.953125 C 2.382 17.633125 2.2617188 18.323812 2.2617188 19.007812 A 72122.4 72122.4 0 0 0 2.2539062 90.21875 A 15.47 15.47 0 0 0 5.0429688 99.09375 C 8.1369687 103.54675 11.495531 107.81163 14.769531 112.14062 C 17.433531 115.66362 20.065938 119.21134 22.835938 122.65234 C 24.835937 125.14134 27.437062 126.85491 30.539062 127.75391 C 30.758063 127.81591 30.945406 127.97297 31.191406 128.16797 C 36.324406 128.24997 41.41 128.25 46.5 128.25 C 46.703 128.082 46.902187 127.78053 47.117188 127.76953 L 53.804688 127.49609 L 66.746094 126.74609 L 74.625 126.25391 L 87.441406 125.5 L 95.445312 125 C 99.676313 124.746 103.91372 124.57366 108.13672 124.22266 C 110.84372 123.99966 113.60094 123.78475 116.21094 123.09375 C 121.15994 121.78075 124.30466 118.41791 125.72266 113.50391 C 126.03466 112.42591 126.22747 111.27334 126.23047 110.15234 L 126.23438 29.78125 C 126.22937 27.22725 125.36731 24.832531 123.44531 23.144531 C 120.85931 20.871531 118.09406 18.780438 115.28906 16.773438 C 109.25406 12.444437 103.21525 8.1139063 97.03125 4.0039062 C 94.89825 2.5819063 92.331844 1.8160938 89.964844 0.74609375 C 89.753844 0.65209375 89.554594 0.5269375 89.308594 0.3359375 L 76.25 0.25 z M 84.09375 7.7128906 C 87.780248 7.7479453 91.048312 8.9512813 94.148438 11.207031 L 116.17188 26.726562 C 117.99987 28.003562 118.78916 29.601719 118.78516 31.886719 L 118.75 107.75 L 118.75 108.75 C 118.66 113.383 116.4305 115.879 111.8125 116.25 L 96.230469 117.25391 L 64.933594 119.14453 L 37.125 120.80078 C 33.02 121.07378 29.789156 119.79263 27.535156 116.26562 C 27.070156 115.53063 26.477313 114.87459 25.945312 114.18359 L 13.59375 98.257812 C 10.99575 94.937812 9.6684063 91.328281 9.6914062 86.988281 L 9.7578125 20.746094 A 13.868 13.868 0 0 1 9.9648438 18.265625 C 10.550844 15.057625 12.577656 13.057813 15.847656 12.757812 L 32.035156 11.496094 L 57.824219 9.59375 L 82.488281 7.7695312 C 83.032781 7.7265312 83.567107 7.7078828 84.09375 7.7128906 z M 83.195312 14.105469 L 73.105469 14.808594 L 25.154297 18.292969 C 23.705297 18.397969 22.248359 18.503719 20.818359 18.761719 C 20.342359 18.847719 19.733937 19.332531 19.585938 19.769531 C 19.475937 20.079531 19.959453 20.699063 20.314453 21.039062 C 20.971453 21.668063 21.728359 22.194719 22.443359 22.761719 C 24.143359 24.101719 25.952719 25.324687 27.511719 26.804688 C 30.468719 29.612688 33.909562 30.261563 37.851562 29.976562 L 68.886719 28.03125 L 102.29688 26.027344 L 103.57617 25.792969 C 102.96317 25.155969 102.60853 24.668219 102.14453 24.324219 A 233.798 233.798 0 0 0 97.185547 20.761719 A 1122.8 1122.8 0 0 0 89.550781 15.441406 C 87.507781 14.335406 85.382312 13.985469 83.195312 14.105469 z M 107.40234 33.523438 L 84.332031 34.851562 L 51.914062 36.75 L 35.707031 37.722656 C 33.641031 37.855656 32.706531 38.745625 32.394531 40.765625 C 32.312531 41.296625 32.296875 41.842813 32.296875 42.382812 L 32.292969 68 L 32.292969 101.61328 L 32.300781 107.86328 C 32.354781 110.66028 33.726344 112.05484 36.527344 112.21484 L 38.648438 112.1875 L 62.089844 110.80469 L 106.85547 108.24609 C 109.64547 108.09009 110.93431 106.86656 111.19531 104.10156 L 111.23047 102.60156 L 111.23438 38.125 C 111.23438 37.75 111.24666 37.375 111.22266 37 C 111.05566 34.437 109.95334 33.387437 107.40234 33.523438 z M 100.10547 45.597656 C 100.69947 48.378656 100.04731 49.417406 97.445312 49.941406 C 94.872312 50.460406 94.871094 50.4615 94.871094 53.0625 L 94.902344 97.5625 C 94.906344 98.5745 94.598313 99.11325 93.695312 99.40625 C 91.961312 99.96525 90.262187 100.6845 88.492188 101.0625 C 85.664188 101.6725 83.148406 100.92266 81.441406 98.472656 A 361.224 361.224 0 0 1 74.4375 88.011719 L 58.96875 63.859375 L 58.46875 63.160156 L 58.46875 95.722656 L 65.199219 97.257812 C 64.918219 99.347813 63.793125 100.62866 61.703125 100.97266 L 56.855469 101.37109 L 44.546875 102.07812 C 44.003875 100.34012 44.694594 98.979906 46.308594 98.503906 L 49.949219 97.476562 L 49.949219 54.183594 L 44.605469 53.726562 C 43.918469 51.308563 45.418438 48.977 47.898438 48.75 L 57.988281 48.011719 L 63.472656 47.640625 C 64.300656 47.550625 64.742406 47.776938 65.191406 48.460938 L 78.058594 68.066406 L 78.058594 68.070312 A 7434.52 7434.52 0 0 1 87.019531 81.707031 L 87.019531 51.527344 L 82.3125 51.007812 C 81.3635 50.952812 81.198219 50.515656 81.324219 49.722656 C 81.581219 48.077656 82.862688 46.663969 84.554688 46.542969 L 100.10547 45.597656 z "/>
</svg>;
  }
});