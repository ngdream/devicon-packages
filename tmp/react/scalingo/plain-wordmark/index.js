const React = require("react");
module.exports = function ScalingoPlainWordmarkIcon({size = "1em", color = "#173aee", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M11.08 48.14c-1.372.004-2.715.71-3.441 1.95L.504 62.3c-1.053 1.804-.4 4.056 1.459 5.026 1.86.975 4.222.303 5.275-1.502l7.135-12.21c1.053-1.805.4-4.055-1.459-5.026a3.922 3.922 0 0 0-1.834-.447zm31.57 6.698c-1.002 0-1.904.124-2.734.344-.83.22-1.563.535-2.15.95a4.877 4.877 0 0 0-1.393 1.59c-.34.639-.486 1.37-.486 2.2 0 .833.121 1.565.365 2.152.246.611.587 1.122 1.049 1.537a5.21 5.21 0 0 0 1.738 1.002c.681.27 1.462.49 2.367.639l2.27.416c.903.195 1.538.489 1.883.88.34.392.511.83.511 1.268a2.605 2.605 0 0 1-.17.909c-.098.29-.27.535-.513.73a2.853 2.853 0 0 1-.952.49c-.39.12-.88.168-1.443.168-1.194 0-2.098-.242-2.709-.73-.611-.491-.955-1.274-1.025-2.346h-3.692c.099 2.051.761 3.593 2.03 4.62 1.272 1.024 3.078 1.513 5.468 1.513 1.125 0 2.128-.12 2.985-.39.83-.271 1.537-.635 2.097-1.124a4.97 4.97 0 0 0 1.272-1.687c.292-.635.44-1.343.44-2.125 0-1.566-.44-2.788-1.32-3.621-.882-.83-2.27-1.44-4.153-1.83l-2.39-.467c-.882-.169-1.516-.415-1.884-.756-.363-.318-.537-.806-.537-1.467 0-.242.048-.462.147-.709.097-.22.27-.415.511-.588.247-.172.565-.316.955-.414a6.362 6.362 0 0 1 1.54-.172c1.024 0 1.807.224 2.32.639.513.438.853 1.122 1.049 2.074l3.443-.44a9.208 9.208 0 0 0-.512-1.98c-.246-.634-.635-1.173-1.148-1.658-.54-.49-1.22-.883-2.053-1.176-.854-.293-1.904-.441-3.176-.441zm34.18.441v17.453h3.422V55.28H76.83zm5.461 0v3.08h3.518v-3.08H82.29zM57.05 59.582c-1.025 0-1.906.172-2.686.488a5.751 5.751 0 0 0-1.978 1.393c-.536.588-.95 1.319-1.244 2.148-.294.834-.416 1.762-.416 2.764 0 1.026.12 1.93.363 2.764.246.83.612 1.538 1.101 2.125.49.587 1.147 1.051 1.93 1.369.783.34 1.71.49 2.785.49 1.832 0 3.197-.441 4.125-1.346.928-.904 1.442-2.126 1.59-3.668h-3.467c-.075.736-.294 1.297-.662 1.688-.39.39-.904.586-1.586.586-.54 0-.954-.098-1.295-.317a2.21 2.21 0 0 1-.806-.904 4.064 4.064 0 0 1-.414-1.295c-.098-.489-.121-1.003-.121-1.539 0-.516.023-1.005.12-1.49.075-.49.22-.903.415-1.295a2.41 2.41 0 0 1 .83-.88c.34-.22.759-.347 1.295-.347.708 0 1.223.224 1.515.612.294.39.463.931.56 1.564l3.444-.465c-.097-.633-.244-1.245-.49-1.78a4.158 4.158 0 0 0-1.023-1.42c-.44-.392-1.003-.683-1.637-.905-.634-.22-1.394-.34-2.248-.34zm12.513 0c-1.613 0-2.88.315-3.808.902-.955.587-1.544 1.567-1.762 2.887l3.127.293c.196-1.025.953-1.543 2.322-1.543.587 0 1.072.148 1.514.441.439.294.658.831.658 1.614v.634l-1.637.075c-.83.05-1.635.12-2.418.246a8.916 8.916 0 0 0-2.12.658 4.202 4.202 0 0 0-1.544 1.295c-.386.564-.584 1.272-.584 2.152 0 .685.1 1.246.342 1.735.22.489.513.88.904 1.173.391.317.831.537 1.344.686a5.946 5.946 0 0 0 1.635.219c.979 0 1.785-.174 2.418-.541a6.132 6.132 0 0 0 1.711-1.389v1.613h3.226v-8.066c0-.783-.098-1.47-.294-2.103-.196-.638-.49-1.173-.905-1.612-.415-.442-.955-.76-1.636-1.002-.686-.246-1.515-.367-2.493-.367zm25.541 0c-.755 0-1.486.171-2.172.512-.685.34-1.296.905-1.785 1.636v-1.757h-3.318v12.76h3.416v-7.676c0-.37.075-.708.22-1.03a2.956 2.956 0 0 1 .587-.83 3.387 3.387 0 0 1 .88-.558 3.15 3.15 0 0 1 1.147-.198c.563 0 1.026.17 1.371.487.34.343.512.955.512 1.836v7.968h3.416v-8.435c0-1.613-.363-2.809-1.047-3.568-.708-.756-1.787-1.147-3.227-1.147zm11.303 0c-.877 0-1.658.172-2.344.488a4.87 4.87 0 0 0-1.734 1.32 5.53 5.53 0 0 0-1.1 2.005 8.642 8.642 0 0 0-.363 2.566c0 1.954.438 3.518 1.319 4.668.876 1.17 2.223 1.734 4.027 1.734.834 0 1.566-.144 2.225-.465a4.089 4.089 0 0 0 1.634-1.416v.391c0 .537-.023 1.076-.07 1.565-.05.513-.148.953-.32 1.343-.169.391-.44.709-.78.955-.368.243-.858.34-1.492.34-.415 0-.755 0-1.049-.047-.293-.05-.539-.125-.73-.246a1.257 1.257 0 0 1-.49-.463 2.008 2.008 0 0 1-.27-.78h-3.467c.073.707.242 1.317.488 1.853.244.54.611.978 1.1 1.322.462.34 1.05.61 1.781.78.732.172 1.612.247 2.637.247 1.1 0 2.028-.15 2.81-.443a4.405 4.405 0 0 0 1.88-1.342c.489-.586.83-1.295 1.052-2.125.22-.835.34-1.808.34-2.885V59.973h-3.322v1.44c-.536-.686-1.145-1.17-1.78-1.44a5.459 5.459 0 0 0-1.982-.391zm15.145 0c-.975 0-1.879.171-2.662.465-.802.317-1.487.757-2.051 1.344a5.911 5.911 0 0 0-1.297 2.123c-.29.834-.438 1.786-.438 2.816 0 2.2.564 3.856 1.688 5.031 1.122 1.175 2.709 1.762 4.76 1.762.978 0 1.857-.148 2.664-.465a5.498 5.498 0 0 0 2.027-1.347 5.82 5.82 0 0 0 1.293-2.126 8.537 8.537 0 0 0 .465-2.857c0-1.029-.146-1.979-.44-2.812a5.904 5.904 0 0 0-1.294-2.125c-.564-.587-1.245-1.027-2.028-1.344a7.842 7.842 0 0 0-2.687-.465zm-39.21.39v12.76h3.42v-12.76h-3.42zm-65.841.255c-1.373.003-2.714.708-3.438 1.949l-7.134 12.21c-1.057 1.805-.404 4.055 1.455 5.026 1.863.974 4.224.302 5.277-1.502l7.135-12.21c1.057-1.804.401-4.056-1.457-5.026a3.938 3.938 0 0 0-1.838-.447zm105.05 2.09c.979 0 1.686.345 2.175 1.03.49.682.732 1.686.732 2.981 0 1.32-.242 2.322-.732 3.006-.49.708-1.196 1.049-2.174 1.049-1 0-1.732-.341-2.198-1.026-.488-.685-.706-1.71-.706-3.029 0-1.295.217-2.3.706-2.98.49-.686 1.223-1.032 2.198-1.032zm-14.337.029c.345 0 .685.046 1.025.119.345.098.638.271.928.513.27.244.49.61.662 1.077.172.489.27 1.1.27 1.855v.344c0 .634-.074 1.148-.223 1.59a2.836 2.836 0 0 1-.611 1.049 2.334 2.334 0 0 1-.95.588 3.706 3.706 0 0 1-1.175.171c-.78 0-1.413-.27-1.93-.834-.513-.56-.756-1.515-.756-2.88 0-.639.076-1.175.22-1.641.15-.439.344-.83.587-1.123a2.214 2.214 0 0 1 .88-.633 3.02 3.02 0 0 1 1.073-.195zM71.59 67.037v.658c0 .54-.097.978-.293 1.319a2.786 2.786 0 0 1-.756.857c-.563.415-1.273.611-2.148.611-.541 0-.932-.122-1.221-.369-.294-.243-.443-.56-.443-1.002 0-.266.028-.513.12-.756.076-.22.224-.413.467-.586.243-.172.588-.318 1.026-.439.439-.097 1-.173 1.732-.223l1.516-.07z"/>
</svg>);
}