const React = require("react");
module.exports = function DiscordjsOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M30.424 52.634c-1.9 0-3.404.446-4.483 1.338-1.079.915-1.618 2.134-1.618 3.707 0 1.173.327 2.137.96 2.888.635.774 1.669 1.384 3.075 1.877l1.925.634c.682.282 1.15.54 1.408.798.259.258.376.61.376 1.01 0 1.126-.776 1.689-2.349 1.689-.937 0-1.875-.188-2.838-.54-.962-.352-1.806-.799-2.557-1.385v3.66a10.467 10.467 0 0 0 5.843 1.737c1.947 0 3.495-.469 4.622-1.431 1.103-.938 1.667-2.23 1.667-3.848 0-1.221-.353-2.23-1.057-3.028-.704-.776-1.83-1.432-3.402-1.925l-1.691-.54c-.633-.26-1.078-.515-1.36-.773a1.18 1.18 0 0 1-.444-.963c0-.986.773-1.479 2.345-1.479 1.667 0 3.26.54 4.81 1.642v-3.614c-1.643-.963-3.379-1.454-5.232-1.454zm16.58.023c-1.76 0-3.31.375-4.624 1.126a7.716 7.716 0 0 0-3.073 3.122c-.727 1.337-1.08 2.84-1.08 4.53 0 1.595.353 3.051 1.033 4.342.68 1.315 1.691 2.346 3.004 3.097 1.316.774 2.886 1.152 4.693 1.152 1.01 0 1.995-.141 2.91-.4s1.713-.611 2.394-1.058v-3.59a8.051 8.051 0 0 1-2.066 1.01 7.358 7.358 0 0 1-2.346.4c-1.103 0-2.088-.212-2.91-.658-.821-.423-1.455-1.008-1.901-1.784-.446-.774-.682-1.643-.682-2.63 0-.984.236-1.853.682-2.628.446-.774 1.08-1.36 1.901-1.784.822-.42 1.76-.633 2.863-.633 1.595 0 3.05.494 4.387 1.454v-3.729c-1.525-.894-3.237-1.34-5.184-1.34zm15.67 0c-1.643 0-3.121.375-4.411 1.102a8.003 8.003 0 0 0-3.028 3.099c-.728 1.337-1.103 2.84-1.103 4.505 0 1.668.375 3.169 1.103 4.483.726 1.314 1.737 2.348 3.028 3.074 1.29.73 2.768 1.106 4.411 1.106 1.666 0 3.145-.377 4.458-1.105a7.837 7.837 0 0 0 3.05-3.075c.728-1.314 1.08-2.816 1.08-4.482 0-1.667-.352-3.17-1.08-4.505a8.054 8.054 0 0 0-3.05-3.1c-1.313-.727-2.792-1.102-4.458-1.102zM0 53.127v16.428h6.219c1.807 0 3.356-.353 4.624-1.078 1.267-.706 2.227-1.694 2.862-2.96.633-1.243.963-2.698.963-4.316 0-1.62-.306-3.028-.915-4.249a6.813 6.813 0 0 0-2.771-2.817c-1.22-.68-2.698-1.008-4.458-1.008Zm17.417 0v16.428h3.941V53.126h-3.94zm56.534 0v16.428h3.943V62.63l4.858 6.924h4.717l-4.88-6.619c1.431-.164 2.51-.68 3.286-1.525.774-.846 1.149-1.925 1.149-3.215 0-1.572-.516-2.792-1.573-3.709-1.056-.914-2.487-1.36-4.271-1.36h-7.23zm15.851.002v16.416h6.215c1.629 0 2.874-.258 4.033-.843-.003-.04-.002-.08-.002-.122a3.419 3.419 0 0 1 3.578-3.42c.592-1.203.832-2.396.832-3.963 0-1.62-.307-3.026-.916-4.245a6.804 6.804 0 0 0-2.766-2.815c-1.22-.68-2.697-1.008-4.457-1.008zm-27.128 3.26c.915 0 1.69.212 2.37.658a4.236 4.236 0 0 1 1.549 1.784c.353.773.516 1.618.516 2.556 0 .94-.188 1.784-.54 2.512a4.137 4.137 0 0 1-1.525 1.76c-.68.423-1.455.634-2.37.634-.892 0-1.666-.211-2.323-.635a4.04 4.04 0 0 1-1.55-1.76c-.352-.725-.538-1.572-.538-2.51 0-.938.187-1.783.539-2.558a4.236 4.236 0 0 1 1.549-1.784c.657-.444 1.431-.657 2.323-.657zm15.22.047h2.536c.775 0 1.36.188 1.76.54.399.375.61.917.61 1.596 0 .728-.235 1.267-.68 1.666-.447.398-1.103.587-1.972.587h-2.254Zm-73.951.212h2.37c1.384 0 2.44.398 3.144 1.22.703.821 1.057 1.948 1.057 3.403 0 1.479-.377 2.628-1.104 3.472-.728.87-1.808 1.292-3.239 1.292H3.944v-9.388zm89.798 0h2.369c1.382 0 2.438.4 3.141 1.22.704.82 1.054 1.945 1.054 3.4 0 1.477-.375 2.626-1.101 3.47-.727.867-1.804 1.29-3.236 1.29h-2.227v-9.381zm9.73 9.776a2.157 2.157 0 1 0 0 4.312 2.157 2.157 0 0 0 0-4.312z" fill="#5865f2"/>
	<path d="M100.229 70.549c-.282.12-.677.282-.996.383-.675.211-1.215.298-1.77.383.666 2.136 3.279 4.237 6.324 4.038 2.872 0 4.859-1.416 5.916-3.469.317-.892-1.365-1.293-3.155-.5-2.157.956-3.46 1.544-6.319-.835zm23.89.817c-4.16 1.714-8.277.261-9.587-.023-.43-.045-.628-.675-1.512.367l-.43.508a11.03 11.03 0 0 0 7.706 3.148c3.885 0 6.512-1.876 7.384-4.425.32-1.013-2.78.173-3.561.425z" fill="#b75cff"/>
	<path d="M126.014 66.787c-.85.006-1.303.77-2.045 1.574.106.27.164.579.164.938 0 1.672-1.346 2.754-3.74 2.754-2 0-4.066-.983-5.606-2.426l-1.766 2.084c2.392.108 4.813.724 7.235.629 2.65-.105 6.154-.945 7.379-1.44l.066-.027h.002a5.975 5.975 0 0 0 .297-1.87c0-.52-.05-.999-.145-1.44-.803-.558-1.38-.779-1.841-.776zm-16.938.242c-.753.016-1.487.474-2.203 1.313v.238a3.417 3.417 0 0 1-3.412 3.424 3.408 3.408 0 0 1-2.89-1.604l-.342.149c.892 1.123 1.988 1.704 4.162 1.79 1.772.07 3.542-.238 5.314-.454.592-1.148.893-2.495.893-3.906v-.381c-.516-.394-1.023-.579-1.522-.569z" fill="#5865f2"/>
	<path d="M110.598 63.543c-1.21-1.064-2.44-1.28-3.725.345v4.453c1.246-.29 2.49-.585 3.725-.744zm14.418.322c-1.86-.813-7.428.001-8.413.374.413.245.84.454 1.266.631l2.919 1.28c1.569.654 2.761 1.142 3.18 2.212 1.205-.176 2.243-.416 2.935-.575l.952-.225c-.365-1.704-1.4-2.848-2.84-3.696z" fill="#5cff9d"/>
	<path d="M113.546 59.437c.098 2.364 1.467 3.86 3.064 4.805 1.22.241 2.437.45 3.657.45 1.7 0 3.4-.405 4.75-.825a11.411 11.412 0 0 0-1.345-.669l-2.884-1.213c-1.426-.58-2.766-1.099-3.234-2.151-2.875-1.46-.947-2.38-4.008-.397zm-2.948.286c-1.093-.754-2.326-.528-3.725.683v3.485c1.241-.125 2.484-.29 3.725-.348z" fill="#ffdb5c"/>
	<path d="M114.83 55.616a5.487 5.487 0 0 0-1.284 3.82c1.33-.012 2.667.135 4.007.399a2.1 2.1 0 0 1-.176-.867c0-1.575 1.311-2.527 3.344-2.527 1.836 0 3.312.69 4.656 1.837l1.428-1.76c-4.172-1.29-7.9-2.1-11.974-.903zm-4.232.843c-1.538-1.352-2.72-.355-3.725 1.53v2.417c1.241-.192 2.483-.473 3.725-.683z" fill="#f79454"/>
	<path d="M106.873 53.13v4.86c1.241-.42 2.483-1.04 3.725-1.532v-3.329zm13.848 0c-2.524 0-4.626.965-5.89 2.485 1.8.006 3.612.37 5.425.587 2.593.31 5.177.316 6.549.316l.54-.666c-1.673-1.673-4.1-2.723-6.624-2.723z" fill="#ff5c5c"/>
</svg>);
}