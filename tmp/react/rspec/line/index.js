const React = require("react");
module.exports = function RspecLineIcon({size = "1em", color = "#6de1fa", ...props}){
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
	<path d="m66.913 0-.312.021-7.93.518c-24.892 1.624-47.216 19.09-55.46 43.37-4.051 11.932-3.987 30.46.165 41.38l1.353 3.556 3.35-4.71c1.103-1.552 1.911-2.463 2.594-2.9.683-.438 1.232-.479 2.124-.262l5.239 1.273c.646.157 1.148.268 1.567.31.42.041.813.036 1.132-.242.32-.279.362-.699.326-1.093-.037-.395-.148-.852-.307-1.438-5.237-19.354-1.58-34.763 11.258-47.6 7.596-7.601 15.308-11.506 25.969-13.166 3.62-.562 5.647-.93 7.175-1.682 1.528-.752 2.463-1.877 3.824-3.77l3.093-4.303L69.49 4.63Zm-.56 1.03 2.27 4.083 2.275 4.083-2.724 3.79c-1.345 1.87-2.132 2.808-3.456 3.46-1.325.652-3.28 1.03-6.89 1.59-10.824 1.686-18.803 5.726-26.518 13.446-13.054 13.053-16.816 28.964-11.513 48.56.154.571.253 1.001.277 1.268.025.267-.023.283.008.256.03-.027-.064.035-.38.004-.316-.032-.798-.133-1.432-.287l-5.239-1.275c-1.04-.253-1.996-.183-2.893.391-.896.575-1.74 1.575-2.867 3.16l-2.273 3.198-.694-1.82C.285 74.366.203 55.857 4.151 44.23c8.115-23.9 30.115-41.103 54.584-42.7Zm6.404.245c-.497.013-.902.038-1.238.374h-.002c-.311.312-.25.602-.221.912.028.31.106.671.222 1.083.234.825.628 1.849 1.134 2.909.886 1.859 1.258 2.736 1.163 3.48-.097.743-.708 1.618-2.066 3.398l-3.205 4.205 7.559 2.044c13.025 3.529 23.603 12.51 30.01 25.53 2.754 5.593 3.342 8.12 3.717 15.918.242 5.118-.111 11.506-.729 13.962-1.064 4.217-.897 5.601 1.19 9.9l2.505 5.155 5.152-.748c1.325-.192 2.56-.39 3.486-.556.463-.083.847-.157 1.134-.22a6.161 6.161 0 0 0 .36-.09c.049-.014.093-.027.14-.044.044-.018.086-.024.185-.105v-.002c.103-.083.113-.121.132-.155a.984.984 0 0 0 .047-.089 2.65 2.65 0 0 0 .071-.182c.05-.138.11-.318.18-.545.142-.454.325-1.087.541-1.86.433-1.544.992-3.641 1.573-5.92 3.8-14.858 2.14-29.76-4.93-44.24-5.406-11.065-17.235-22.814-28.235-28.044-3.354-1.595-7.499-3.125-11.21-4.253-3.713-1.127-6.931-1.861-8.665-1.817Zm.025.99c1.397-.036 4.681.662 8.35 1.777 3.67 1.114 7.786 2.636 11.076 4.2 10.726 5.1 22.492 16.784 27.767 27.584 6.98 14.293 8.605 28.92 4.862 43.556a278.566 278.566 0 0 1-1.568 5.9 72.714 72.714 0 0 1-.533 1.833 11.766 11.766 0 0 1-.16.482 5.422 5.422 0 0 1-.223.055c-.264.058-.64.131-1.095.213-.91.163-2.135.36-3.451.552l-4.435.641-2.19-4.5v-.003c-2.063-4.25-2.167-5.066-1.118-9.223.692-2.748 1.004-9.052.758-14.25v-.002c-.377-7.84-1.037-10.656-3.819-16.309-6.52-13.244-17.335-22.445-30.64-26.05l-6.135-1.659 2.31-3.028c1.36-1.783 2.115-2.744 2.26-3.875.147-1.132-.363-2.17-1.25-4.032-.486-1.016-.864-2.005-1.076-2.754a5.353 5.353 0 0 1-.188-.9c-.019-.21.09-.28-.064-.125-.05.05.163-.073.562-.083zM46.286 36.169l-.146.147-8.794 8.845-9.053 9.095 2.337 4.572c.662 1.3 2.858 4.34 5.958 8.398s7.073 9.064 11.178 14.047c4.101 4.979 7.913 9.5 10.751 12.776a172.257 172.257 0 0 0 3.445 3.883c.426.46.77.819 1.03 1.07.129.125.235.224.333.302.049.04.095.072.155.107.059.035.109.105.34.089h.005c.18-.014.233-.067.292-.105a1.436 1.436 0 0 0 .163-.118c.105-.087.22-.198.358-.337.276-.278.634-.67 1.074-1.169.879-.996 2.073-2.412 3.486-4.123 2.824-3.422 6.518-8.024 10.27-12.776a956.566 956.566 0 0 0 10.617-13.675c3.053-4.022 5.329-7.125 6.093-8.423l2.579-4.38-9.126-9.175-8.998-9.05zm.412.992H80.22l8.708 8.757 8.587 8.63-2.192 3.722c-.673 1.144-2.982 4.312-6.03 8.326A955.982 955.982 0 0 1 78.69 80.258c-3.749 4.748-7.44 9.346-10.257 12.759a175.942 175.942 0 0 1-3.464 4.098c-.433.49-.784.874-1.035 1.127-.065.066-.1.093-.15.14-.037-.035-.056-.049-.102-.093a27.69 27.69 0 0 1-.99-1.029 172.765 172.765 0 0 1-3.424-3.862c-2.83-3.266-6.637-7.781-10.734-12.755-4.097-4.973-8.066-9.972-11.156-14.018-3.09-4.045-5.332-7.205-5.863-8.248l-2.01-3.931 8.545-8.586zM13.037 83.13c-.86-.024-1.562.179-2.172.628-.61.45-1.142 1.098-1.881 2.002-1.593 1.943-2.454 3.51-2.4 5.307.055 1.797.98 3.693 2.7 6.423 9.335 14.833 21.931 24.277 38.027 28.497 9.424 2.47 23.507 2.7 32.173.504 14.665-3.712 29.405-13.81 37.149-25.475 1.484-2.237 2.6-3.927 3.352-5.21.752-1.284 1.178-2.124 1.168-2.893-.005-.384-.193-.778-.504-.994-.31-.216-.675-.289-1.098-.32-.846-.061-1.982.07-3.494.25l-4.809.57-1.81-4.02c-.548-1.215-1.134-2.32-1.646-3.136a8.257 8.257 0 0 0-.711-.995 2.268 2.268 0 0 0-.334-.324c-.118-.09-.25-.19-.494-.19-.398 0-.568.21-.765.415a5.274 5.274 0 0 0-.599.786c-.41.636-.848 1.487-1.236 2.424-.335.811-1.293 2.287-2.536 3.903a57.495 57.495 0 0 1-4.288 4.942c-13.888 14.226-35.453 17.88-53.151 9.008-5.639-2.827-15.322-11.516-18.384-16.47-.839-1.356-1.712-2.337-2.933-3.08-1.221-.743-2.76-1.248-4.959-1.753H17.4c-2.034-.47-3.331-.77-4.363-.799Zm-.03.992c.855.024 2.137.303 4.17.773 2.157.497 3.595.98 4.668 1.634 1.073.653 1.812 1.477 2.604 2.757 3.274 5.294 12.837 13.851 18.785 16.833 18.084 9.066 40.117 5.33 54.304-9.201a58.405 58.405 0 0 0 4.366-5.032c1.268-1.648 2.245-3.112 2.665-4.129.367-.887.787-1.696 1.153-2.263.183-.284.357-.508.483-.64.05-.051-.008-.027.02-.042.034.033.059.053.106.107.163.188.382.492.622.873.478.763 1.049 1.835 1.58 3.013l2.11 4.686 5.53-.656c1.508-.178 2.637-.294 3.304-.245.334.024.536.096.607.145.07.049.077.04.08.192.003.302-.306 1.135-1.034 2.377-.728 1.242-1.839 2.928-3.323 5.164-7.568 11.4-22.166 21.416-36.567 25.062-8.398 2.127-22.476 1.907-31.678-.504-15.867-4.16-28.216-13.41-37.44-28.063-1.691-2.688-2.5-4.456-2.545-5.925-.045-1.47.634-2.772 2.174-4.65.737-.9 1.246-1.497 1.701-1.832.455-.334.844-.454 1.556-.434z"/>
</svg>);
}