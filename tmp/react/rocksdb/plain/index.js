const React = require("react");
module.exports = function RocksdbPlainIcon({size = "1em", color = "#ffbe00", ...props}){
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
	<path d="M104.244 13.14c-.448.03-.9.142-1.338.344l-11.185 5.254c.032.033.031.064.031.096a4.33 4.33 0 0 0 1.621 1.783c-13.65 7.036-19.42 16.569-19.42 16.569L21.82 65.262c-3.047 1.62-6.874.487-8.527-2.56-1.621-3.048-.487-6.875 2.56-8.528L30.64 46.23c3.76-2.01 5.932-5.77 6.224-9.693l-8.851 4.766-14.783 7.943C7.457 52.36 5.285 59.588 8.365 65.36c2.14 3.988 6.257 6.258 10.504 6.258a11.64 11.64 0 0 0 5.61-1.428l6.677-3.597a14.881 14.881 0 0 0 .78 8.105c.356.908.584 1.46.584 1.46 2.366 5.122-.747 9.142-4.833 9.142h-1.296l-4.702 20.426a4.814 4.814 0 0 0-2.367-1.362l-2.334 9.63c2.367.55 4.703-.65 5.643-2.79l10.633-19.062c13.455-1.297 20.523-10.41 20.199-23.248 13.941.843 32.486-7.91 40.754-19.873 6.257 7.943 18.123 6.84 23.375 4.83l1.006-.356c-.39.681-.584 1.49-.584 2.365l9.922-.095c-.033-2.853-2.238-5.027-4.961-4.994h-.065l-17.055-1.46-3.89-10.212V28.27c.778.421 1.622.68 2.562.68 2.821 0 5.122-2.172 5.381-4.895l4.086-2.692-.195-5.478c-.033-.551-.453-1.006-1.004-1.006l-5.09-.065c-.802-1.118-2.116-1.763-3.46-1.673zm.024 2.971c.875 0 1.62.714 1.62 1.621 0 .908-.745 1.622-1.62 1.622-.876 0-1.588-.746-1.588-1.622 0-.907.712-1.62 1.588-1.62zm-74.055 7.764c-.364.03-.726.13-1.067.309-1.361.713-1.879 2.433-1.166 3.795l.68 1.199 4.928-2.658-.649-1.168c-.535-1.022-1.635-1.568-2.726-1.477zm65.592 1.672c.81 0 1.492.777 1.492.777s-.226.293-.615.52a3.028 3.028 0 0 1 1.004.615s-.42.388-1.004.615c.389.227.615.52.615.52s-.682.777-1.492.777c-.81 0-1.49-.777-1.49-.777s.226-.293.615-.52c-.584-.194-1.004-.615-1.004-.615s.42-.388 1.004-.615c-.39-.227-.616-.52-.616-.52s.68-.777 1.49-.777zm-7.782 3.726c.811 0 1.493.78 1.493.78s-.227.258-.616.517c.616.227 1.004.617 1.004.617s-.42.389-1.004.616c.39.227.616.52.616.52s-.65.777-1.493.777c-.81 0-1.49-.778-1.49-.778s.226-.292.615-.52c-.616-.226-1.003-.614-1.003-.614s.42-.39 1.003-.618c-.389-.227-.615-.517-.615-.517s.647-.78 1.49-.78zm-52.78.26-4.929 2.658.26.52a6.43 6.43 0 0 1 .744 2.853l5.221-2.82a10.976 10.976 0 0 0-1.037-2.691l-.26-.52zm59.913 5.059c.81 0 1.492.777 1.492.777s-.226.293-.615.52c.616.227 1.004.615 1.004.615s-.42.39-1.004.617c.39.227.615.518.615.518s-.681.779-1.492.779c-.81 0-1.49-.78-1.49-.78s.226-.29.615-.517c-.616-.227-1.004-.617-1.004-.617s.42-.388 1.004-.615c-.389-.227-.615-.52-.615-.52s.68-.777 1.49-.777zm-15.172 2.107c.81 0 1.49.778 1.49.778s-.226.292-.615.52c.616.258 1.004.614 1.004.614s-.42.39-1.004.618c.39.226.616.517.616.517s-.648.78-1.49.78c-.811 0-1.493-.78-1.493-.78s.228-.29.617-.517c-.616-.227-1.005-.618-1.005-.618s.422-.388 1.005-.615a2.36 2.36 0 0 1-.617-.52s.65-.777 1.492-.777zm43.584.672a5.05 5.05 0 0 0-1.955.3c-.065.033-.161.065-.226.13l.031-.031-14.492 5.218 1.752 4.604c2.69-.681 6.873-3.663 9.79-5.965-.097.81-.064 1.62.227 2.398L128 40.59a4.976 4.976 0 0 0-4.432-3.219zm-35.9 1.662c.81 0 1.49.778 1.49.778s-.226.292-.615.52c.616.258 1.006.614 1.006.614s-.422.39-1.006.617c.389.227.615.518.615.518s-.68.78-1.49.78c-.81 0-1.492-.78-1.492-.78s.228-.29.617-.517c-.616-.227-1.006-.618-1.006-.618s.422-.388 1.006-.615a2.36 2.36 0 0 1-.617-.52s.681-.777 1.492-.777zm9.467 2.983c.81 0 1.492.779 1.492.779s-.228.29-.617.517a2.882 2.882 0 0 1 1.006.618s-.423.388-1.006.615c.389.227.617.52.617.52s-.682.777-1.492.777c-.81 0-1.492-.778-1.492-.778s.228-.292.617-.52c-.616-.226-1.006-.614-1.006-.614s.422-.39 1.006-.617c-.39-.227-.617-.518-.617-.518s.681-.78 1.492-.78zm-20.717 2.043c.81 0 1.49.777 1.49.777s-.226.293-.615.52c.616.226 1.006.615 1.006.615s-.422.39-1.006.617c.389.227.615.517.615.517s-.68.78-1.49.78c-.81 0-1.492-.78-1.492-.78s.228-.29.617-.517a3.04 3.04 0 0 1-1.006-.617s.422-.389 1.006-.616a2.36 2.36 0 0 1-.617-.52s.649-.776 1.492-.776zm-10.182 1.33c.81 0 1.493.777 1.493.777s-.227.293-.616.52a3.028 3.028 0 0 1 1.004.615s-.42.388-1.004.615c.39.227.616.52.616.52s-.682.777-1.493.777c-.81 0-1.49-.777-1.49-.777s.226-.26.615-.52c-.616-.227-1.004-.615-1.004-.615s.42-.389 1.004-.615c-.389-.227-.615-.52-.615-.52s.68-.777 1.49-.777zm19.291 1.847c.81 0 1.493.778 1.493.778s-.229.292-.618.52a3.565 3.565 0 0 1 1.006.614s-.422.39-1.006.618c.39.227.618.517.618.517s-.65.78-1.493.78c-.81 0-1.49-.78-1.49-.78s.226-.29.615-.517a3.036 3.036 0 0 1-1.006-.618s.423-.388 1.006-.615c-.389-.227-.615-.52-.615-.52s.647-.777 1.49-.777zM71.1 51.776c.81 0 1.492.777 1.492.777s-.226.292-.615.52a2.873 2.873 0 0 1 1.003.614s-.42.39-1.003.618c.389.227.615.517.615.517s-.65.78-1.492.78c-.81 0-1.49-.78-1.49-.78s.226-.29.615-.517c-.616-.227-1.004-.617-1.004-.617s.42-.389 1.004-.616c-.39-.227-.616-.52-.616-.52s.648-.777 1.49-.777zm-12.092.097c.81 0 1.49.777 1.49.777s-.226.293-.615.52c.583.227 1.004.615 1.004.615s-.42.388-1.004.615c.389.227.615.52.615.52s-.68.777-1.49.777c-.81 0-1.492-.777-1.492-.777s.226-.293.615-.52c-.616-.227-1.004-.615-1.004-.615s.42-.388 1.004-.615c-.39-.227-.615-.52-.615-.52s.681-.777 1.492-.777zm20.035 1.621c.81 0 1.492.777 1.492.777s-.226.293-.615.52c.584.26 1.004.615 1.004.615s-.42.389-1.004.615c.389.227.615.52.615.52s-.65.777-1.492.777c-.81 0-1.49-.777-1.49-.777s.226-.293.615-.52c-.616-.226-1.004-.615-1.004-.615s.42-.388 1.004-.615c-.39-.227-.615-.52-.615-.52s.647-.777 1.49-.777zm-30.217 1.717c.81 0 1.492.78 1.492.78s-.228.29-.617.517a3.036 3.036 0 0 1 1.006.617s-.422.388-1.006.615c.39.227.617.52.617.52s-.649.777-1.492.777c-.81 0-1.49-.777-1.49-.777s.226-.293.615-.52a3.028 3.028 0 0 1-1.004-.615s.42-.39 1.004-.617a2.34 2.34 0 0 1-.615-.518s.647-.78 1.49-.78zm17.897 4.281c.81 0 1.492.778 1.492.778s-.226.29-.615.517c.616.227 1.004.617 1.004.617s-.42.389-1.004.616c.389.226.615.52.615.52s-.682.776-1.492.776c-.81 0-1.49-.777-1.49-.777s.226-.293.615-.52c-.616-.226-1.004-.615-1.004-.615s.42-.39 1.004-.617c-.39-.227-.616-.517-.616-.517s.68-.778 1.49-.778zm-9.856 1.393c.81 0 1.492.78 1.492.78s-.228.29-.617.517c.616.227 1.006.617 1.006.617s-.422.388-1.006.615c.39.227.617.52.617.52s-.649.777-1.492.777c-.81 0-1.492-.777-1.492-.777s.228-.293.617-.52c-.616-.227-1.006-.615-1.006-.615s.423-.39 1.006-.617c-.389-.227-.617-.518-.617-.518s.65-.78 1.492-.78zm-17.701.455c.81 0 1.49.777 1.49.777s-.226.293-.615.52a3.028 3.028 0 0 1 1.004.615s-.42.388-1.004.615c.39.227.615.52.615.52s-.68.777-1.49.777c-.81 0-1.492-.777-1.492-.777s.226-.293.615-.52c-.584-.26-1.004-.615-1.004-.615s.42-.388 1.004-.615c-.389-.227-.615-.52-.615-.52s.681-.777 1.492-.777zm88.8 2.82-30.443 7.586-11.865 13.52-17.346.421-6.548 15.012-17.022 4.442-10.668 9.726h85.82c4.442 0 8.073-3.63 8.073-8.072V64.16zm-80.275 1.135c.81 0 1.493.777 1.493.777s-.229.293-.618.52a2.893 2.893 0 0 1 1.006.615s-.422.39-1.006.617c.39.227.618.518.618.518s-.65.78-1.493.78c-.81 0-1.49-.78-1.49-.78s.226-.29.615-.518a3.014 3.014 0 0 1-1.004-.617s.42-.388 1.004-.615c-.389-.227-.615-.52-.615-.52s.647-.777 1.49-.777zm-10.115 5.38c.81 0 1.492.78 1.492.78s-.228.29-.617.518a3.036 3.036 0 0 1 1.006.617s-.422.388-1.006.615c.39.227.617.52.617.52s-.714.81-1.492.777c-.81 0-1.49-.777-1.49-.777s.226-.293.615-.52c-.616-.227-1.006-.615-1.006-.615s.423-.39 1.006-.617a2.34 2.34 0 0 1-.615-.518s.647-.78 1.49-.78zm8.43 2.985c.81 0 1.492.778 1.492.778s-.228.292-.617.519c.583.227 1.006.615 1.006.615s-.423.389-1.006.615c.389.227.617.52.617.52s-.65.777-1.492.777c-.81 0-1.49-.777-1.49-.777s.226-.293.615-.52c-.616-.226-1.006-.615-1.006-.615s.422-.388 1.006-.615c-.39-.227-.615-.52-.615-.52s.647-.777 1.49-.777zm-5.803 6.678c.81 0 1.49.78 1.49.78s-.226.29-.615.517c.616.227 1.006.617 1.006.617s-.422.388-1.006.615c.39.227.615.52.615.52s-.647.777-1.49.777c-.81 0-1.492-.777-1.492-.777s.228-.293.617-.52a3.05 3.05 0 0 1-1.006-.615s.423-.39 1.006-.617a2.376 2.376 0 0 1-.617-.518s.65-.78 1.492-.78zM23.117 86.53 8.69 98.916a5.192 5.192 0 0 0-1.103-2.53L0 102.774c1.621 1.913 4.312 2.27 6.387 1.006l14.103-6.386 2.627-10.862z"/>
</svg>);
}