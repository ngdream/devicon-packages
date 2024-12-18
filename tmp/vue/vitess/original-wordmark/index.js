import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VitessOriginalWordmarkIcon',
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
    return <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
	<path d="M107.124 135.45h10.268v38.055h-10.268zm0-16.817h10.268v7.701h-10.268zm35.807 47.434a9.972 9.972 0 0 1-1.405.088 3.265 3.265 0 0 1-2.446-.952c-.606-.635-.903-1.687-.903-3.164V142.66h6.44v-7.212h-6.44v-9.323H127.94v9.323h-5.56v7.208h5.56v19.416c0 4.22.952 7.306 2.863 9.25 1.913 1.946 4.64 2.92 8.178 2.92a17.986 17.986 0 0 0 3.184-.264 20.356 20.356 0 0 0 3.009-.793l-.842-7.422c-.452.127-.91.226-1.373.303zm23.814-31.296c-5.417-.021-9.67 1.785-12.766 5.416-3.097 3.636-4.646 8.304-4.646 14v1.411c0 5.483 1.61 9.967 4.817 13.45 3.212 3.482 7.64 5.223 13.301 5.223a27.529 27.529 0 0 0 8.517-1.267c2.6-.838 4.662-1.884 6.188-3.13l-2.777-6.33a23.695 23.695 0 0 1-4.975 2.148 21.303 21.303 0 0 1-5.857.705c-2.788 0-4.894-.81-6.315-2.429-1.416-1.62-2.209-3.73-2.375-6.331l.106-.21h22.69v-5.338c0-5.3-1.369-9.515-4.101-12.645-2.732-3.13-6.644-4.694-11.735-4.694zm5.807 15.868h-12.524l-.065-.176c.231-2.347.908-4.232 2.021-5.648 1.114-1.416 2.7-2.126 4.768-2.126 2.036 0 3.513.64 4.429 1.917.914 1.278 1.37 3.03 1.37 5.261zm43.142 4.453c-2.285-1.82-5.764-3.196-10.43-4.138-3.046-.584-5.07-1.246-6.066-1.984a3.44 3.44 0 0 1-1.498-2.87 3.834 3.834 0 0 1 1.443-3.02c.964-.826 2.263-1.234 3.907-1.234 1.85 0 3.266.48 4.252 1.443a4.978 4.978 0 0 1 1.477 3.73h9.918l.077-.21c.116-3.427-1.272-6.286-4.17-8.583-2.9-2.299-6.75-3.444-11.554-3.444-4.596 0-8.277 1.147-11.043 3.444-2.77 2.302-4.154 5.08-4.154 8.337 0 3.096 1.157 5.547 3.466 7.348 2.309 1.809 5.69 3.159 10.148 4.046 2.96.61 4.982 1.321 6.072 2.127 1.092.81 1.637 1.778 1.637 2.903a3.711 3.711 0 0 1-1.498 3.118c-.992.762-2.44 1.141-4.342 1.141-2.04 0-3.693-.458-4.96-1.372-1.266-.914-1.933-2.39-2.005-4.43h-9.388l-.07.21c-.14 3.283 1.26 6.209 4.202 8.777 2.941 2.567 6.947 3.851 12.01 3.851 4.81 0 8.68-1.09 11.61-3.272 2.926-2.177 4.392-4.982 4.392-8.408 0-3.208-1.147-5.709-3.433-7.51zm37.147 0c-2.285-1.82-5.764-3.196-10.43-4.138-3.046-.584-5.069-1.246-6.066-1.984a3.422 3.422 0 0 1-1.494-2.87 3.813 3.813 0 0 1 1.439-3.02c.965-.826 2.264-1.234 3.907-1.234 1.85 0 3.267.48 4.253 1.443a4.978 4.978 0 0 1 1.476 3.73h9.918l.077-.21c.116-3.427-1.272-6.286-4.17-8.583-2.9-2.299-6.75-3.444-11.555-3.444-4.594 0-8.276 1.147-11.042 3.444-2.772 2.302-4.154 5.08-4.154 8.337 0 3.096 1.157 5.547 3.466 7.348 2.309 1.809 5.691 3.159 10.148 4.046 2.96.61 4.982 1.321 6.073 2.127 1.09.81 1.636 1.778 1.636 2.903a3.711 3.711 0 0 1-1.498 3.118c-.992.762-2.44 1.141-4.342 1.141-2.04 0-3.692-.458-4.959-1.372-1.268-.914-1.934-2.39-2.006-4.43h-9.388l-.066.21c-.144 3.283 1.255 6.209 4.203 8.777 2.942 2.567 6.943 3.851 12.012 3.851 4.804 0 8.672-1.09 11.604-3.272 2.931-2.177 4.397-4.982 4.397-8.408 0-3.208-1.147-5.709-3.433-7.51zm0 0" fill="#f16827"/>
	<path d="m75.833 129.603.011-.07 4.292-25.126zm30.999-25.257-13.924 25.175 13.93-25.17 15.217-27.603Zm.474-49.374-4.469 8.172zM23.429 97.993 40.5 79.639Zm3.631 6.64L45.92 89.65zm0 0-1.262-2.31 1.262 2.31 13.417 24.623zm4.711-8.739 8.733-16.22 15.947 29.35-15.946-29.368-13.504-24.684L40.5 79.662zm39.301 40.062.057.115 2.527 4.65zM88.914 88.46l-8.788 15.908-9.781 18 9.78-17.995zm0 0" fill="#284e64"/>
	<path d="m53.882 153.978 12.69 23.245 6.98-35.9zm0 0" fill="#f16827"/>
	<path d="m73.662 140.75-11.195-20.58-8.585 33.808 19.67-12.655zm0 0" fill="#f48029"/>
	<path d="m40.47 129.256 13.407 24.722 8.59-33.807zm0 0" fill="#f89a2e"/>
	<path d="m40.47 129.256 21.997-9.091-16.545-30.52Zm0 0" fill="#f16827"/>
	<path d="m75.833 129.603 4.302-25.196L67.01 128.54l6.645 12.209zm0 0" fill="#f89921"/>
	<path d="m27.06 104.632 13.411 24.624 5.45-39.6zm0 0" fill="#f89a2e"/>
	<path d="m92.897 129.52 13.935-25.174-30.99 25.185Zm0 0" fill="#f48029"/>
	<path d="M40.504 79.673 27.06 104.631l18.86-14.98Zm35.342 49.858 17.857-49.704-13.565 24.58Zm0 0" fill="#f4ae5c"/>
	<path d="m27.06 104.632 13.444-24.959L23.422 98l2.381 4.324zm0 0" fill="#cd4e27"/>
	<path d="m106.826 104.346-13.13-24.519-17.85 49.704Zm-83.397-6.353L40.5 79.639 26.993 54.946l-3.57 43.024Zm0 0" fill="#f16938"/>
	<path d="m106.826 104.346.485-49.374-13.61 24.855Zm-79.832-49.38H.139l23.29 43.027Zm0 0" fill="#f89a2e"/>
	<path d="m107.311 54.972-.485 49.374 27.234-49.38Zm-31.468 74.56-.01.07-9.262 47.617 26.332-47.693zm0 0" fill="#cd4e27"/>
</svg>;
  }
});