const React = require("react");
module.exports = function BunLineIcon({size = "1em", color = "#FBF0DF", ...props}){
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
	<path d="M64 10.308c-5.12 0-10.24 2.288-16.231 5.71a360.541 360.541 0 0 0-6.144 3.605c-3.908 2.32-8.295 4.97-13.415 7.604C10.546 36.427 0 51.78 0 68.237c0 27.27 28.706 49.455 64 49.455s64-22.185 64-49.454c0-16.474-10.549-31.811-28.213-41.01-6.314-3.276-11.11-6.14-15.36-8.674-1.826-1.119-3.533-2.141-5.24-3.079C73.59 12.282 69.12 10.308 64 10.308Zm0 4.115c4.13 0 7.902 1.646 13.073 4.608 1.553.905 3.258 1.925 5.119 3.027 4.079 2.436 9.113 5.53 15.564 8.821 16.265 8.443 25.977 22.415 25.977 37.359 0 24.998-26.794 45.34-59.733 45.34-32.939 0-59.733-20.342-59.733-45.34 0-14.944 9.71-28.917 25.958-37.392 5.12-2.683 9.676-5.364 13.652-7.733 2.116-1.251 4.113-2.454 6.042-3.54 5.546-3.094 9.95-5.15 14.081-5.15zm3.987 2.75c-.534-.001-.811.721-.318 1.067v.066a27.418 27.418 0 0 1 8.023 8.454 26.356 26.356 0 0 1 3.666 10.9.528.528 0 0 0 .109.39.577.577 0 0 0 .767.125.542.542 0 0 0 .235-.333c1.57-5.744.682-15.536-12.238-20.621a.68.68 0 0 0-.243-.048zm-4.508.406c-.409.032-.777.51-.52.942v.064a26.113 26.113 0 0 1 3.889 10.796 25.818 25.818 0 0 1-1.142 11.373c-.205.576.528 1.07.938.592 3.737-4.608 6.997-13.757-2.765-23.631a.536.536 0 0 0-.4-.136zm-3.875.41a.6.6 0 0 0-.52.596 26.19 26.19 0 0 1-2.48 11.273 27.107 27.107 0 0 1-7.129 9.25c-.478.412-.102 1.202.512.971 5.752-2.156 13.517-8.607 10.24-21.625-.068-.37-.354-.506-.623-.464zm-5.04 2.282a.628.628 0 0 0-.533.34 28.014 28.014 0 0 1-7.298 9.241 29.244 29.244 0 0 1-10.57 5.569c-.615.181-.63 1.054.018 1.037 6.144.362 16.025-2.386 18.977-15.552.096-.411-.247-.654-.593-.635zM42.797 55.206a9.7 9.7 0 0 0-3.367.686 9.339 9.339 0 0 0-4.223 3.34 8.84 8.84 0 0 0-1.585 5.039c0 2.402.988 4.706 2.748 6.406 1.76 1.7 4.146 2.658 6.637 2.663a9.656 9.656 0 0 0 5.23-1.521 9.15 9.15 0 0 0 3.47-4.067 8.765 8.765 0 0 0 .544-5.24 8.975 8.975 0 0 0-2.57-4.647 9.513 9.513 0 0 0-4.815-2.486 9.744 9.744 0 0 0-2.07-.173zm42.344 0a9.707 9.707 0 0 0-3.373.681 9.34 9.34 0 0 0-4.232 3.34 8.837 8.837 0 0 0-1.59 5.044c-.004 2.395.976 4.694 2.726 6.394 1.75 1.7 4.127 2.661 6.61 2.675a9.66 9.66 0 0 0 5.244-1.496 9.155 9.155 0 0 0 3.494-4.057 8.766 8.766 0 0 0 .562-5.243 8.971 8.971 0 0 0-2.558-4.66 9.51 9.51 0 0 0-4.813-2.5 9.747 9.747 0 0 0-2.07-.178zM40.3 58.037a3.574 3.574 0 0 1 2.327 1c.494.479.828 1.086.963 1.748a3.298 3.298 0 0 1-.209 1.971 3.437 3.437 0 0 1-1.308 1.525 3.625 3.625 0 0 1-1.967.567 3.6 3.6 0 0 1-2.487-1.004 3.349 3.349 0 0 1-1.03-2.404c0-.675.21-1.334.598-1.894.39-.56.941-.997 1.588-1.254a3.647 3.647 0 0 1 1.525-.255zm42.275 0c.173.009.345.03.517.063a3.58 3.58 0 0 1 1.81.937c.493.479.828 1.086.963 1.748a3.298 3.298 0 0 1-.209 1.971 3.437 3.437 0 0 1-1.308 1.525c-.583.373-1.27.57-1.969.567h-.033a3.598 3.598 0 0 1-2.465-1.017 3.346 3.346 0 0 1-1.016-2.391c0-.675.207-1.334.595-1.894.39-.56.944-.997 1.59-1.254a3.647 3.647 0 0 1 1.525-.255zM53.623 77.996a2.482 2.482 0 0 0-1.065.204c-.334.145-.63.363-.864.635-.197.226-.338.49-.415.775a1.904 1.904 0 0 0-.029.871c.806 3.245 2.667 6.156 5.308 8.31a12.881 12.881 0 0 0 7.594 3.292c2.838-.244 5.51-1.403 7.58-3.291 2.641-2.155 4.5-5.066 5.305-8.31a1.886 1.886 0 0 0-.018-.87 1.937 1.937 0 0 0-.409-.777 2.446 2.446 0 0 0-.864-.629 2.538 2.538 0 0 0-1.063-.21zm0 1.91 21.06.031a.369.369 0 0 1 .342.15 13.448 13.448 0 0 1-2.402 4.898l-.073-.06c-2.171-1.994-5.042-3.129-8.04-3.177-1.602.013-3.18.37-4.623 1.042a10.806 10.806 0 0 0-3.685 2.802 13.47 13.47 0 0 1-2.937-5.538c.017-.033.085-.148.358-.148zm10.973 3.504c2.556.073 4.991 1.065 6.827 2.782l.083.068c-.354.358-.73.699-1.125 1.02a10.885 10.885 0 0 1-6.229 2.845 10.795 10.795 0 0 1-6.23-2.88 13.946 13.946 0 0 1-.482-.412h.006a9.078 9.078 0 0 1 3.166-2.502 9.427 9.427 0 0 1 3.984-.92z"/>
</svg>);
}