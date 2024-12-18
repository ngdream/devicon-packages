const React = require("react");
module.exports = function NanoPlainWordmarkIcon({size = "1em", color = "#C8F", ...props}){
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
	<path d="M33.101 28.328c-2.954 0-5.478.86-7.618 2.443h16.106c-2.403-1.592-5.32-2.443-8.488-2.443ZM5.695 32.381a9.161 9.161 0 0 0-2.743 2.443h16.394c-.604-1.081-1.285-1.874-2.031-2.443Zm17.995 0a17.316 17.316 0 0 0-1.936 2.443h23.805a13.689 13.689 0 0 0-1.976-2.443zM1.972 36.434a14.47 14.47 0 0 0-.97 2.443h4.216c.575-.505 1.327-.811 2.315-.811.977 0 1.715.313 2.283.81h18.772a4.69 4.69 0 0 1 .794-.078c.362 0 .72.032 1.072.079h16.9a15.563 15.563 0 0 0-.92-2.443H20.8c-.134.248-.28.475-.41.734-.092-.273-.2-.484-.299-.734zm62.791 0c-1.52.619-2.556 1.51-3.258 2.443H77.87c-.691-1.058-1.66-1.885-3.008-2.443zm16.823 0v2.443h8.202l-1.138-2.443zm15.442 0v2.443h5.824v-2.443zm8.09 0v2.443h5.823v-2.443zm15.294 0v2.443h5.823v-2.443ZM.595 40.487a25.689 25.689 0 0 0-.36 2.443h3.308c.11-.869.304-1.702.613-2.443zm10.29 0c.32.764.511 1.603.612 2.443h11.356a11.72 11.72 0 0 1 2.345-2.443zm23.562 0c.966.689 1.766 1.524 2.303 2.443h11.228a19.523 19.523 0 0 0-.255-2.443zm26.168 0c-.326.826-.458 1.581-.458 2.079v.364h6.32c.599-1.063 1.721-2.053 3.283-2.053 1.293 0 2.31.827 2.984 2.053h6.471c-.125-.876-.29-1.708-.554-2.443zm20.971 0v2.443h10.091l-1.138-2.443Zm15.442 0v2.443h5.824v-2.443zm8.09 0v2.443h5.823v-2.443zm15.294 0v2.443h5.823v-2.443ZM.092 44.54C.05 45.248.007 45.957 0 46.666l3.369-.436c0-.511.032-1.11.056-1.69zm11.514 0c.012.43.037.912.037 1.239v1.204h9.329c.215-.866.518-1.685.9-2.443zm25.8 0c.073.323.12.647.12.968v1.475h10.497V44.54Zm22.751 0v2.443h5.824V44.54zm13.223 0a8.86 8.86 0 0 1 .265 2.162h5.823c0-.757-.027-1.47-.07-2.162zm8.206 0v2.443h11.98l-1.138-2.443Zm15.442 0v2.443h5.824V44.54Zm8.09 0v2.443h5.823V44.54Zm15.294 0v2.443h5.823V44.54ZM11.643 48.593v2.443h8.984v-1.327c0-.379.02-.75.057-1.116zm25.883 0v2.443h10.497v-2.443zm22.631 0v2.443h5.824v-2.443zm21.43 0v2.443h5.823v-2.415l1.123 2.415h6.922l-1.139-2.443zm15.441 0v2.443h5.824v-2.443zm8.09 0v2.443h5.823v-2.443zm15.294 0v2.443h5.823v-2.443ZM11.643 52.646v2.443h8.984v-2.443zm25.883 0v2.443h10.497v-2.443zm22.63 0v2.443h5.825v-2.443zm9.85 0v2.17h3.639l-.003.273h5.826v-2.443zm11.58 0v2.443h5.824v-2.443zm7.696 0 1.136 2.443h12.434v-2.443h-5.824v1.767l-.823-1.767zm15.835 0v2.443h5.824v-2.443zm15.295 0v2.443h5.823v-2.443ZM11.643 56.699v2.443h8.984v-2.443zm25.883 0v2.443h10.497v-2.443zm22.63 0v2.204c0 .081.016.158.018.239h5.84c-.009-.08-.033-.16-.033-.24V56.7zm13.467 0c-.015.852-.056 1.682-.19 2.443h6.035v-2.443zm7.963 0v2.443h5.824v-2.443zm9.581 0 1.137 2.443h10.548v-2.443zm13.95 0v2.204c0 .086.015.154.016.239h5.935a12.178 12.178 0 0 1-.127-1.868V56.7zm15.295 0v.575c0 .466-.014 1.145-.127 1.868h5.934c0-.085.016-.153.016-.24V56.7ZM11.643 60.752v2.443h8.984v-2.443zm25.883 0v2.443h10.497v-2.443zm22.799 0c.145.871.386 1.696.72 2.443h18.423v-2.443h-6.555c-.561 1.105-1.537 1.848-3.323 1.848-.988 0-2.178-.819-2.915-1.848zm21.261 0v2.443h5.824v-2.443zm11.467 0 1.136 2.443h8.663v-2.443zm12.187 0c.12.94.344 1.735.628 2.443h19.617a9.844 9.844 0 0 0 .627-2.443h-6.29c-.592 1.237-1.775 2.271-4.146 2.271-2.37 0-3.554-1.034-4.145-2.271zm-93.597 4.053v2.443h8.984v-2.443zm25.883 0v2.443h10.497v-2.443zm24.483 0c1.015 1.319 2.378 2.163 3.972 2.163h13.487v-2.163zm19.577 0v2.163h5.824v-2.163zm13.351 0 1.007 2.163h6.908v-2.163zm11.813 0c1.126 1.495 2.676 2.163 4.19 2.163h9.472c1.515 0 3.065-.668 4.19-2.163zm-95.107 4.053v2.443h8.984v-2.443zm25.883 0v2.443h10.497v-2.443zm-25.883 4.053v2.443h8.984v-2.443zm25.883 0v2.443h10.497v-2.443zm22.623 0v2.443h5.823v-.162c.543 0 .993.064 1.395.162h6.402c-1.279-1.44-2.989-2.112-4.548-2.443Zm19.613 0v2.008h2.368c1.008 0 1.829.154 2.501.435h7.072c-.99-1.415-2.409-2.097-3.963-2.443zm15.649 0v2.443h5.823v-.175c.563 0 1.023.07 1.434.175h6.377c-1.263-1.43-2.95-2.105-4.499-2.443zm21.962 0c-1.917.489-3.284 1.416-4.009 2.443H127.4c-.725-1.027-2.091-1.954-4.008-2.443zm-105.73 4.053v2.165h8.984v-2.165zm25.883 0v2.535h10.497v-2.535zm22.623 0v2.535h5.823v-2.535zm9.222 0c.297.68.393 1.568.435 2.535h5.753a8.56 8.56 0 0 0-.738-2.535zm17.08 0c.411.699.658 1.55.772 2.535h5.838c-.097-.978-.286-1.813-.546-2.535zm8.96 0v2.535h5.823v-2.535zm9.226 0c.295.681.39 1.569.432 2.535h5.755a8.576 8.576 0 0 0-.734-2.535zm8.128 0v2.535h5.823v-.64c0-1.084.831-1.804 1.794-1.804.964 0 1.795.72 1.795 1.803v.641H128v-2.535Zm-75.239 4.145v2.443h10.497V81.11Zm22.623 0v2.443h5.823V81.11Zm9.705 0c0 .017.003.03.003.046v2.397h5.823v-2.397c0-.016-.003-.03-.003-.046zm17.467 0v.032h-4.487c-3.018 0-4.232 1.028-4.737 2.411h8.592c.209-.015.398-.04.632-.04v.04h5.824V81.11zm8.09 0v2.443h5.823V81.11Zm9.705 0v2.443h5.824v-2.411c0-.011-.003-.02-.003-.032zm7.649 0v2.443h5.823V81.11Zm9.412 0v2.443H128V81.11Zm-84.651 4.053v2.443h10.497v-2.443zm22.623 0v2.443h5.823v-2.443zm9.706 0v2.443h5.824v-2.443zm7.927 0c-.034.406-.055.817-.064 1.227-.009.407-.01.814 0 1.216h5.798c-.204-.483-.199-.952-.199-1.216 0-.396.075-.823.262-1.227zm9.54 0v2.443h5.824v-2.443zm8.089 0v2.443h5.823v-2.443zm9.706 0v2.443h5.824v-2.443zm7.648 0v2.368c.003.025.015.05.018.075h15.198c.003-.025.017-.05.019-.075v-2.368h-5.824v.38c0 1.083-.83 1.803-1.794 1.803-.963 0-1.794-.72-1.794-1.803v-.38zm-75.226 4.053c.008.834.03 1.651.08 2.443H48.12a44.676 44.676 0 0 1-.088-2.443zm22.61 0v2.435h5.823v-2.435zm9.706 0v2.435h5.824v-2.435zm8.086 0c.432 1.392 1.634 2.421 4.895 2.421h10.31v-2.42h-5.824v.048c-.261 0-.46-.032-.69-.049zm17.47 0v2.421h5.823v-2.42zm9.706 0v2.421h5.824v-2.42zm8.393 0c.865 1.103 2.475 2.058 4.727 2.443h4.29c2.252-.385 3.862-1.34 4.727-2.443zm-75.758 4.053c.071.797.162 1.64.255 2.443h10.498c-.093-.826-.184-1.627-.255-2.443zm.447 4.053c.096.783.18 1.517.278 2.351h10.497c-.099-.76-.182-1.565-.278-2.35z"/>
</svg>);
}