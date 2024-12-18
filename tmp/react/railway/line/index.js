const React = require("react");
module.exports = function RailwayLineIcon({size = "1em", color = "#fff", ...props}){
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
	<path d="M63.9428.0107c-23.9296 0-44.7601 13.1423-55.7581 32.5701l-.4205.7421.8526-.0019c8.5273-.0178 25.1373-.027 25.1373-.027h.4999v-.002c18.476.0035 19.919.0852 23.6801.2422l2.3776.0872c8.2495.275 18.2996 1.1725 26.1565 7.117 4.2453 3.2095 10.5336 10.4577 14.2456 15.5847 3.3757 4.6646 4.3236 9.9351 2.0481 15.0285-2.0842 4.6567-6.53 7.4212-11.994 7.4212H1.9608l.1434.6104s.5274 2.24 1.3215 4.7182l.1104.3448h121.0884l.1143-.339A63.794 63.794 0 0 0 128 64.0271C128.0012 28.681 99.3153.0106 63.9428.0106Zm0 .992c34.8366 0 63.0663 28.2148 63.0651 63.0244-.006 6.6015-1.0789 13.153-3.1274 19.427H4.2745c-.588-1.8985-.9295-3.2553-1.0347-3.6893h87.528c5.8031 0 10.6604-3.0007 12.901-8.0083v-.002c2.4228-5.4232 1.3836-11.1288-2.1508-16.0128-3.7625-5.1966-10.012-12.44-14.4511-15.7958-8.1422-6.1604-18.427-7.0382-26.7204-7.3147l-2.3736-.0891.0019.0019c-3.8301-.16-4.5835-.25-24.2169-.25h-.496v.0078c-.6049.0004-15.1496.0088-23.7267.0252C20.4735 13.624 40.6946 1.0027 63.9428 1.0027ZM33.7386 38.669c-9.0136 0-18.8105.023-28.3519.0485l-.345.0019-.12.3216c-1.2354 3.3344-2.4324 6.5753-3.0247 9.2601l-.1337.6027h49.548v5.4448H.6762l-.0601.4263a65.0637 65.0637 0 0 0-.5949 6.4427L0 61.735h97.7841l-.37-.7228c-.3632-.7094-.8359-1.3251-1.2945-1.9086l-.0019-.0039c-8.274-10.6888-14.6868-15.6295-20.6613-17.9408-5.9751-2.3115-11.4412-1.9764-17.7567-2.2457h-.002c-4.2341-.1741-7.1187-.2442-23.9591-.2442Zm0 .9921c16.8377 0 19.6917.0703 23.9185.2442 6.3733.2718 11.6863-.0463 17.4409 2.1798 5.7545 2.2262 12.0227 7.0126 20.2369 17.625v.002l.0019.0018c.2663.3389.4706.6864.7014 1.029H1.0618c.091-1.807.2545-3.6097.498-5.4023h50.7435v-7.429H3.0634c.581-2.3865 1.576-5.2147 2.6818-8.202 9.4274-.025 19.0949-.0485 27.9934-.0485zM.0406 67.1875l.031.525c.1025 1.7292.2647 3.437.498 5.1232l.0582.4263h90.14c4.1867 0 6.672-2.463 7.4445-5.4545l-.4786.3701v-.9901h-.3856zm1.0716.992h95.8852c-.8289 2.3213-2.7376 4.0904-6.2296 4.0904H1.5114c-.1764-1.3471-.3074-2.7113-.3992-4.0904ZM5.3615 89.833l.279.682s15.0455 36.8217 58.2965 37.4744h.0058c25.8804 0 48.1259-15.3726 58.2287-37.455l.3216-.7014zm1.556.992h113.9693c-10.0976 21.3458-31.7382 36.1693-56.9362 36.1723-41.404-.6249-56.1609-34.1156-57.0331-36.1722Z"/>
</svg>);
}