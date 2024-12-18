const React = require("react");
module.exports = function DigitaloceanOriginalWordmarkIcon({size = "1em", color = "#0080FF", ...props}){
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
	<path d="M63.3494 60.3565H53.384v-9.9264h9.9655zm-9.9655 7.789h-7.546v-7.789h7.55v7.789zm-7.55-7.789h-6.3371v-6.4124h6.3371zm-34.794 29.473c-1.5763-1.1064-3.6516-1.7028-5.9768-1.7028H0v16.5738h5.063c2.3253 0 4.3172-.5964 5.9768-1.784.9136-.6828 1.5763-1.5302 2.0742-2.6356.499-1.1063.75-2.4627.75-3.9105 0-1.4427-.251-2.8041-.749-3.8231-.499-1.2751-1.1616-2.1225-2.0752-2.7178zm-8.052 1.1013H4.564c1.747 0 3.2399.3414 4.4015 1.1064 1.243.765 1.8272 2.2088 1.8272 4.3332 0 2.1255-.6666 3.6545-1.8272 4.5029-1.0793.6827-2.4899 1.1054-4.3182 1.1054H2.989Zm14.4443-3.0591c-.498 0-.9136.1727-1.247.51-.4156.3414-.5803.765-.5803 1.275 0 .5101.1647.9368.498 1.2751.3333.3414.749.513 1.247.513.498 0 .9136-.1726 1.2439-.514.3333-.3373.498-.764.498-1.275 0-.509-.1647-.9327-.498-1.27-.248-.3414-.6626-.5141-1.1616-.5141zm-1.494 5.0992h2.9066v11.6473h-2.9065zM29.221 93.99c-.8313-.765-1.8273-1.275-2.9056-1.275-1.5762 0-2.9065.5964-3.9024 1.7028-.996 1.1024-1.5763 2.4628-1.5763 4.1605 0 1.6164.498 3.0591 1.494 4.1655.9959 1.1064 2.3262 1.6164 3.9024 1.6164 1.0783 0 2.0742-.3413 2.8192-.9337v.255c0 .9338-.247 1.6968-.745 2.2078-.498.51-1.1606.764-2.0742.764-1.3293 0-2.1606-.509-3.1525-1.9567l-1.993 1.9577.0824.0853c.4157.5924 1.0783 1.1888 1.9096 1.7851.8283.5924 1.9066.8474 3.1525.8474 1.742 0 3.0722-.51 4.0682-1.6164.996-1.1024 1.5762-2.4628 1.5762-4.2469V92.971h-2.8242v1.019zm-.749 6.8834c-.498.5954-1.1606.8504-1.992.8504-.8272 0-1.4938-.255-1.9918-.8504-.498-.5924-.746-1.3574-.746-2.2941 0-.9337.248-1.6987.746-2.2951.498-.5924 1.1646-.8464 1.9919-.8464.8313 0 1.494.255 1.9919.8464.498.5964.749 1.3614.749 2.294 0 .9378-.251 1.7028-.749 2.2952zm6.06-7.9024h2.9056v11.6473H34.532zm1.4117-5.0992c-.498 0-.9137.1727-1.244.51-.3333.3414-.498.765-.498 1.275 0 .5101.1647.9338.498 1.2751.3303.3414.746.509 1.244.509s.9136-.1686 1.2469-.51c.3293-.3413.498-.764.498-1.275 0-.509-.1687-.9327-.498-1.274a1.6716 1.6716 0 0 0-1.247-.5101zm7.7216 1.9538h-2.8232v3.1454h-1.6636v2.6355h1.6636v4.8432c0 1.529.3333 2.6355.9136 3.2318.5803.5924 1.6586.9338 3.0702.9338.499 0 .9136 0 1.4126-.0875h.1647v-2.6354l-.996.0863c-.6626 0-1.1616-.0863-1.3303-.3414-.247-.255-.3293-.764-.3293-1.529v-4.4155h2.6556v-2.6365h-2.6596v-3.2298h-.0823zm16.104-1.6988h2.9054v16.5698h-2.9075zm31.8714 12.4093a9.7732 9.7732 0 0 1-1.4076 1.3563c-.4518.2791-.9688.4277-1.494.4277-.8312 0-1.4948-.3413-2.0752-.9377-.5803-.6777-.8313-1.4427-.8313-2.4628 0-1.019.251-1.784.8313-2.4627.5773-.6827 1.244-.9367 2.0753-.9367.9136 0 1.9096.5953 2.7368 1.6154l1.9106-1.8705c-1.248-1.6124-2.8242-2.3764-4.7297-2.3764-1.5813 0-2.9066.5924-4.0712 1.784-1.0783 1.1878-1.6586 2.6315-1.6586 4.3293 0 1.7027.5803 3.2328 1.6586 4.3372 1.0823 1.1887 2.4899 1.785 4.0712 1.785 2.0742 0 3.7328-.9377 4.8944-2.6354l-1.9106-1.9578zm11.7065-5.8633c-.4157-.5964-.996-1.02-1.6626-1.3614-.6627-.3414-1.494-.509-2.4036-.509-1.5762 0-2.9065.5953-3.9025 1.784-.9136 1.1888-1.4116 2.6355-1.4116 4.3332 0 1.7851.498 3.2329 1.5763 4.3342 1.0783 1.1054 2.4075 1.7018 4.1535 1.7018 1.9055 0 3.4858-.769 4.7287-2.3805l.0833-.0862-1.9105-1.8675c-.1647.251-.4157.4247-.6627.6787-.251.255-.5803.51-.8313.5924-.4156.259-.9136.3413-1.4076.3413-.8313 0-1.4116-.255-1.9929-.6786-.498-.4267-.749-1.0191-.8313-1.7841h7.6363v-1.1064c0-.764-.0823-1.529-.3293-2.2078-.0863-.5964-.4156-1.275-.8323-1.788zm-6.2278 2.7178c.1687-.5964.4157-1.02.749-1.3614.4167-.4227.9136-.5924 1.495-.5924.6626 0 1.2429.1697 1.5762.5924.3333.3413.498.8514.5803 1.3614zm17.2686-3.4869c-.8323-.761-2.0753-1.1013-3.5692-1.1013-.9136 0-1.8272.255-2.6595.5953-.745.4237-1.49 1.02-1.9056 1.8674l1.8232 1.7881c.75-1.278 1.5763-1.7017 2.741-1.7017.5812 0 1.0792.1727 1.4959.509.4146.3414.5792.765.5792 1.275v.5964a6.2217 6.2217 0 0 0-2.0742-.3413c-1.4116 0-2.5732.3413-3.4868 1.02-.9136.6827-1.3293 1.6968-1.3293 2.8895 0 1.1064.3333 1.9538 1.0783 2.6355.749.6786 1.6626.9337 2.7409.9337 1.0792 0 2.0752-.4277 3.0722-1.1877v.9337h2.8232v-7.4797c0-1.3604-.4157-2.4628-1.3293-3.2319zm-5.0631 6.291c.3293-.255.745-.3413 1.3252-.3413.6667 0 1.4117.1726 2.1606.4276v1.1014c-.6666.5964-1.494.9377-2.4899.9377-.498 0-.9136-.0863-1.1646-.3413-.247-.255-.4116-.51-.4116-.8504.0823-.4237.247-.6787.5803-.9337zm17.4322-6.1183c-.8313-.9337-1.9096-1.3604-3.3222-1.3604-1.1606 0-2.0743.3414-2.7369 1.019v-.6776h-2.8242v11.6392h2.9065V98.241c0-.8504.1647-1.6155.5804-2.1255.4156-.509.9959-.764 1.6585-.764.6667 0 1.1646.255 1.495.6777.3333.4277.5803 1.1064.5803 1.8714v6.797H128v-6.797c-.0823-1.6164-.498-2.8915-1.243-3.8242zM56.2 93.9036c-.8324-.761-2.0753-1.1013-3.5692-1.1013-.9136 0-1.8273.255-2.6596.5953-.745.4237-1.494 1.02-1.9055 1.8674l1.8232 1.7881c.746-1.278 1.5763-1.7017 2.7409-1.7017.5813 0 1.0793.1727 1.496.509.4115.3414.5752.765.5752 1.275v.5964a6.2147 6.2147 0 0 0-2.0702-.3413c-1.4116 0-2.5773.3413-3.4909 1.02-.9096.6827-1.3252 1.6968-1.3252 2.8895 0 1.1064.3333 1.9538 1.0782 2.6355.745.6787 1.6626.9337 2.738.9337 1.0822 0 2.0782-.4277 3.07-1.1877v.9337h2.8243v-7.4797c0-1.3604-.498-2.4628-1.3253-3.2319zm-5.1505 6.291c.3343-.255.75-.3413 1.3303-.3413.6626 0 1.4116.1726 2.1565.4277v1.1013c-.6626.5964-1.4939.9377-2.4898.9377-.498 0-.9137-.0863-1.1606-.3413-.251-.255-.4157-.51-.4157-.8504.1647-.4237.3333-.6787.5803-.9337zm21.9973 4.7609c-4.5641 0-8.298-3.8272-8.298-8.4987 0-4.6746 3.7339-8.4988 8.299-8.4988 4.5651 0 8.303 3.8242 8.303 8.4988 0 4.6715-3.7379 8.4987-8.303 8.4987zm0-14.111c-2.9879 0-5.3954 2.4668-5.3954 5.526 0 3.059 2.4075 5.5219 5.3964 5.5219 2.9879 0 5.3964-2.4628 5.3964-5.522 0-3.0591-2.4085-5.5259-5.3964-5.5259zm-9.846-20.409v-10.079c10.5699 0 18.7232-10.5378 14.644-21.683-1.51-4.1264-4.6785-7.4838-8.9053-9.0128-10.8731-3.9688-21.2925 4.275-21.2925 14.8128h-9.9615c0-16.7967 16.154-30.0844 33.8182-24.5856 7.7026 2.4427 13.7415 8.554 16.1581 16.3418 5.4356 17.868-7.7026 34.2058-24.461 34.2058zm0 0"/>
</svg>);
}