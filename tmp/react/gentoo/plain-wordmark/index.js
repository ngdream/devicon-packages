const React = require("react");
module.exports = function GentooPlainWordmarkIcon({size = "1em", color = "#9991d9", ...props}){
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
	<path d="M55.824.049C47.553-.07 38.245 3.324 30.756 9.254c-7.907 6.258-13.408 14.725-14.152 21.781-.246 2.324.24 4.716 1.453 7.158.807 1.63 1.616 2.737 3.053 4.174 2.66 2.66 5.48 4.457 13.494 8.578 2.93 1.507 3.896 2.023 3.896 2.084 0 .013-.511.459-1.137.987-6.335 5.364-11.955 10.587-14.857 13.808-4.208 4.665-7.114 9.59-7.793 13.2-.168.871-.192 4.324-.041 5.695.238 2.19.733 3.885 1.674 5.738 1.15 2.267 2.264 3.787 3.996 5.461 3.556 3.442 7.587 5.2 12.92 5.643.924.077 4.382-.034 5.422-.172 6.114-.82 13.477-3.368 21.699-7.518C76.745 87.616 96 73.111 107.166 60.637c2.169-2.427 4.297-5.28 4.943-6.635.893-1.879 1.319-4.168 1.319-7.152 0-2.69-.344-4.654-1.15-6.528-3.696-8.6-18.499-22.81-33.44-32.1-3.619-2.247-8.526-4.826-11.158-5.857C64.442 1.096 61.247.394 57.465.12a24.245 24.245 0 0 0-1.64-.07zm-.314.234c1.33 0 2.643.053 3.531.164 4.253.516 7.714 1.604 11.684 3.662 9.773 5.075 22.665 14.795 31.195 23.516 5.918 6.057 9.372 11.223 9.732 14.57.364 3.369-2.026 7.993-7.158 13.85-1.371 1.562-5.877 6.041-7.804 7.748-13.886 12.32-31.778 23.344-46.461 28.633a66.8 66.8 0 0 1-15.069 3.543c-1.514.176-4.94.253-6.029.13-2.05-.225-3.519-.63-5.053-1.382-1.977-.979-3.5-2.328-4.781-4.24a19.084 19.084 0 0 1-2.836-6.934c-.237-1.256-.217-3.414.045-4.752.602-3.053 2.18-6.01 5.055-9.469C24.756 65.475 31.66 59.048 42.33 50l1.276-1.084-.351-.18a69.925 69.925 0 0 0-2.207-.97c-9.388-4-15.625-7.665-19.346-11.373-1.673-1.67-2.728-3.263-3.232-4.875-.577-1.858-.22-4.806.933-7.715 2.034-5.137 6.711-10.86 12.319-15.088C37.878 4.078 44.743 1.259 51.9.44c.941-.107 2.284-.158 3.61-.158zm-1.237 2.344a37.995 37.995 0 0 0-3.521.283c-6.38.786-9.439 1.89-14.049 5.078-1.702 1.179-5.803 4.27-6.736 5.08-3.818 3.315-6.942 7.674-8.268 11.541-.835 2.444-.97 4.109-.445 5.664.52 1.547 1.513 2.582 4.402 4.559 3.43 2.353 7.385 4.43 16.707 8.775 4.85 2.26 5.309 2.517 5.514 3.053.245.647-.037 1.433-.908 2.522-.86 1.073-1.943 2.062-6.805 6.228-6.858 5.881-9.379 8.16-12.096 10.944-4.693 4.804-7.138 8.501-7.707 11.67-.466 2.593.216 5.9 1.682 8.18 1.808 2.803 4.49 4.31 8.39 4.698 5.153.516 12.9-.925 19.657-3.656 12.184-4.919 29.213-16.008 41.728-27.174 6.012-5.36 12.692-12.278 13.961-14.45.369-.635.63-2.149.573-3.349-.074-1.56-.454-2.722-1.47-4.482-1.674-2.913-4.075-5.881-8.398-10.379-5.615-5.84-11.843-11.14-17.738-15.094-4.927-3.299-11.397-6.76-15.244-8.152-3.192-1.15-5.93-1.632-9.229-1.539zm5.153 15.549a13.28 13.28 0 0 1 2.443.25c6.402 1.33 12.258 5.697 13.645 10.17.318 1.035.303 2.566-.033 3.511a9.145 9.145 0 0 1-.553 1.203c-.462.786-1.923 2.218-2.95 2.89-1.768 1.157-4.416 2.321-5.689 2.497a8.348 8.348 0 0 1-.975.09c-4.124-.205-9.174-2.386-12.048-5.197-1.92-1.883-2.706-3.627-2.579-5.727.327-5.333 2.611-8.676 6.498-9.52.59-.13 1.398-.184 2.24-.167zm.896 5.98c-1.215.024-2.18.339-2.697.965-.314.385-.958 1.64-1.174 2.295-.549 1.67-.315 3.196.692 4.535.257.344.633.753.834.912l.369.291.283-.236c.396-.331.875-.438 1.988-.434a11.35 11.35 0 0 1 2.781.338c2.133.537 3.713 1.315 4.147 2.047.163.275.206.296.38.201.112-.057.563-.462 1-.9.888-.892 1.404-1.78 1.571-2.72.372-2.044-1.494-4.406-4.678-5.92-1.96-.937-3.937-1.399-5.496-1.374zm8.018 79.31c-.02.005-.02.028-.018.054v19.207c.504.042 1.082.008 1.618.02v-19.28h-1.6zm4.023 0c-.04.647-.005 1.367-.017 2.038h1.785v-2.037h-1.768zm-26.586 2.243c-.504.173-1.076.426-1.595.639v2.965h-.877v1.36h.875v8.993c0 1.015-.015 1.997.336 2.66.385.728 1.432.79 2.492.725v-1.416c-.43.028-.924-.025-1.096-.303-.16-.266-.135-.736-.135-1.211.005-3.131-.012-6.462.02-9.447h1.21v-1.363h-1.23v-3.602zm51.723.184c-.04.09-.008.25-.016.369h.487v4.43c.107.036.285.007.422.015.011-1.473-.026-2.996.015-4.445h.487v-.37H97.5zm1.85 0c-.038 1.571-.005 3.214-.018 4.814h.358c.02-1.481-.046-3.044.033-4.461.204 1.449.332 2.98.504 4.461h.572c.15-1.363.322-2.837.453-4.207.008-.074-.016-.205.07-.254.037 1.449.004 2.968.016 4.445.09.037.25.008.369.016v-4.814h-.709c-.118 1.106-.216 2.24-.334 3.35-.037.363-.058.736-.152 1.08-.144-1.486-.32-2.94-.453-4.43h-.71zm-59.473 3.09a3.18 3.18 0 0 0-.381.01c-.846.07-1.341.589-1.719 1.109a22.692 22.692 0 0 0-.095-.791h-1.5v13.435h1.595v-9.226c0-.954-.092-2.19.309-2.776.348-.515 1.342-.491 1.666.016.385.601.285 1.813.285 2.775v9.211h1.602v-10.018c0-1.907.02-3.679-1.762-3.746zm40.322 0a3.235 3.235 0 0 0-.38.01c-.847.07-1.338.593-1.715 1.109-.029-.27-.057-.538-.102-.791h-1.498v13.437c.532-.013 1.11.02 1.617-.021v-9.561c0-1.003-.077-2.275.537-2.66.503-.315 1.214-.115 1.448.303.363.638.253 1.83.253 2.797v9.14h1.6v-10.033c0-1.918.016-3.665-1.76-3.73zm-57.74.001a2.98 2.98 0 0 0-.404.008c-1.588.128-1.6 1.792-1.6 3.569v6.365c0 1.072.008 2.148.389 2.795.556.949 2.238.925 3.012.168.163-.16.266-.349.421-.541v2.459c0 .978.057 2.03-.336 2.525-.343.434-1.272.423-1.566-.068-.34-.57-.188-1.522-.232-2.407h-1.688c-.024 1.307.036 2.357.438 3.098.42.77 1.288 1.071 2.492 1.043 1.153-.028 1.884-.457 2.207-1.33.31-.834.318-1.96.318-3.217v-14.14h-1.496c-.053.262-.083.544-.137.806-.38-.605-.925-1.085-1.818-1.133zm8.2.008c-1.302.083-1.94.689-2.186 1.883-.221 1.065-.15 2.427-.15 3.875v4.023c0 1.324.04 2.706.568 3.45.458.639 1.35.88 2.34.843.97-.036 1.768-.371 2.125-1.08.515-1.032.385-2.336.418-3.855H32.09c-.094 1.088.222 2.632-.334 3.287-.315.363-1.121.377-1.45 0-.359-.418-.335-1.36-.335-2.14V116.8h3.802v-3.6c0-1.216-.018-2.364-.455-3.166-.43-.794-1.33-1.129-2.66-1.043zm20.923.008a5.28 5.28 0 0 0-.701.008c-.804.062-1.491.34-1.834.926-.39.654-.447 1.776-.492 2.746-.05 1.076 0 2.078 0 3.25 0 1.088-.021 2.057 0 3.228.025 1.096.09 2.116.437 2.813.332.653 1 .994 1.838 1.08.901.09 1.809-.043 2.354-.526.995-.875.843-3.089.843-5v-2.91c0-1.895.155-4.129-.789-5.033-.375-.359-.976-.543-1.656-.582zm7.111.008v.002c-.847.065-1.546.362-1.886 1.025-.348.68-.415 1.79-.44 2.78-.024 1.006 0 2.131 0 3.228 0 1.08-.04 2.079 0 3.217.058 1.629.182 2.941 1.213 3.486 1.081.57 2.82.39 3.52-.338.716-.745.74-2.288.74-3.77v-4.493c0-1.519.041-3.136-.438-4.077-.445-.876-1.514-1.154-2.709-1.06zm13.735.303c-.016.004-.016.024-.016.048.013 4.457-.02 8.96.016 13.387h1.584c.04-4.444.009-8.962.017-13.435h-1.601zm12.008 0c-.021.004-.02.024-.02.048 0 3.218.004 6.672 0 9.987 0 1.825-.014 3.61 1.701 3.687 1.027.041 1.794-.453 2.137-1.095.046.274.073.556.135.81.495-.013 1.037.02 1.5-.021V109.31h-1.635v9.193c0 .962.095 2.157-.285 2.78-.206.334-.733.54-1.244.35-.876-.319-.694-1.992-.694-3.179v-9.144h-1.595zm7.12 0c-.028.008 0 .02 0 .048.516 1.842 1.032 3.726 1.548 5.592.074.258.222.589.222.807-.004.245-.172.576-.254.86-.598 2.065-1.167 4.116-1.752 6.13h1.532c.433-1.854.853-3.717 1.312-5.543.425 1.863.871 3.696 1.313 5.541h1.736c-.586-2.014-1.15-4.06-1.736-6.098-.061-.216-.257-.661-.252-.87.004-.103.08-.249.117-.39.573-2.053 1.118-4.084 1.687-6.077h-1.535c-.372 1.644-.732 3.307-1.125 4.931a614.633 614.633 0 0 0-1.146-4.931h-1.666zm-68.224 1.035a.965.965 0 0 1 .34.074c.626.315.605 1.384.605 2.342v5.877c0 1.006-.024 2.05-.572 2.357-.393.22-1.048.087-1.293-.254-.336-.458-.303-1.435-.303-2.357v-5.32c0-1.122-.098-2.57.893-2.71.08-.012.204-.018.33-.01zm7.596.01c1.228-.11 1.162 1.254 1.162 2.437v2.644c-.7-.008-1.449.027-2.12-.015v-2.678c0-1.092-.017-2.303.958-2.389zm20.222.015c1.27-.16 1.196 1.315 1.196 2.543v5.994c0 .971.044 2.153-.422 2.574-.29.262-1.082.298-1.397-.103-.384-.482-.306-1.598-.306-2.555v-5.69c0-1.186-.118-2.632.93-2.763zm7.809 0c1.265-.16 1.2 1.29 1.2 2.526v5.996c0 .953.053 2.168-.405 2.59-.246.225-.89.295-1.229.07-.536-.356-.492-1.494-.492-2.46v-5.876c0-1.196-.138-2.71.926-2.846z"/>
</svg>);
}