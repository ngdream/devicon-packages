const React = require("react");
module.exports = function FirebasePlainWordmarkIcon({size = "1em", color = "#ffa000", ...props}){
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
	<path d="M43.043 0a1.369 1.369 0 0 0-.216.02A1.363 1.363 0 0 0 41.7 1.157L31.08 69.129l6.99-13.308 17.682-33.665L44.263.725 44.26.724A1.365 1.365 0 0 0 43.043 0Zm20.024 12.905c-.509 0-.973.279-1.21.73l-5.262 10.019-.005-.01L32.536 69.44l7.583-7.595 24.307-24.351 8.114-8.129-8.26-15.73a1.367 1.367 0 0 0-1.213-.73zm22.697 5.855a1.345 1.345 0 0 0-.367.038 1.367 1.367 0 0 0-.644.363L74.298 29.632l-8.858 8.875-34.56 34.62L60.234 89.59h.001a5.535 5.535 0 0 0 5.399 0l30.001-16.681-8.567-53.013v.005a1.366 1.366 0 0 0-.933-1.074 1.38 1.38 0 0 0-.371-.066zm10.537 54.598-.424.035.177.103zm-59.278 38.353a1.44 1.44 0 0 0-1.357.887 1.432 1.432 0 0 0 .532 1.742 1.443 1.443 0 0 0 1.818-.182 1.375 1.375 0 0 0 .419-1.014c0-.684-.486-1.273-1.16-1.406a1.446 1.446 0 0 0-.252-.027zm-12.062.178v15.766h2.033v-6.76h6.496v-1.893h-6.496v-5.176h7.2v-1.937zm34.457 0v15.766h1.938v-1.497h.088a3.743 3.743 0 0 0 1.473 1.325 4.613 4.613 0 0 0 2.222.516c1.395.006 2.6-.542 3.616-1.643s1.524-2.466 1.524-4.096c.001-1.63-.507-2.994-1.524-4.095-1.017-1.101-2.225-1.652-3.624-1.652a4.612 4.612 0 0 0-2.219.528 3.743 3.743 0 0 0-1.468 1.32h-.088l.088-1.496v-4.977zm38.32 4.615a4.839 4.839 0 0 0-3.81 1.697 5.93 5.93 0 0 0-1.49 4.05c0 1.66.512 3.034 1.534 4.12 1.023 1.086 2.352 1.628 3.987 1.628 1.178 0 2.17-.28 2.98-.84a4.842 4.842 0 0 0 1.746-2.102l-1.81-.753c-.515 1.233-1.502 1.85-2.96 1.85a3.319 3.319 0 0 1-2.352-.946c-.67-.634-1.035-1.496-1.094-2.582h8.547l.022-.375c.002-1.746-.48-3.14-1.445-4.183-.965-1.043-2.25-1.564-3.855-1.564zm-10.799.005a5.112 5.112 0 0 0-3.014.891c-.847.594-1.271 1.37-1.271 2.323a2.405 2.405 0 0 0 .927 1.992 5.208 5.208 0 0 0 1.966 1l2.185.53c.987.25 1.48.726 1.48 1.43a1.28 1.28 0 0 1-.606 1.101 2.687 2.687 0 0 1-1.552.418c-1.381 0-2.36-.675-2.934-2.026l-1.812.748a5.211 5.211 0 0 0 1.725 2.202c.787.587 1.784.88 2.992.88 1.252 0 2.273-.318 3.063-.958a3 3 0 0 0 1.209-2.423 2.92 2.92 0 0 0-.736-1.951c-.487-.573-1.238-.974-2.254-1.204l-2.142-.507c-.957-.22-1.436-.64-1.436-1.256a1.138 1.138 0 0 1 .617-1.013 2.895 2.895 0 0 1 1.524-.375c1.251 0 2.076.477 2.475 1.431l1.767-.72a3.666 3.666 0 0 0-1.612-1.86 5.038 5.038 0 0 0-2.56-.653zm-34.454.004a4.839 4.839 0 0 0-3.81 1.697 5.928 5.928 0 0 0-1.495 4.042c.001 1.66.513 3.033 1.536 4.119 1.022 1.086 2.351 1.628 3.986 1.628 1.178 0 2.172-.278 2.983-.835a4.842 4.842 0 0 0 1.745-2.103l-1.812-.748c-.515 1.233-1.502 1.85-2.96 1.85a3.32 3.32 0 0 1-2.351-.948c-.671-.634-1.035-1.494-1.094-2.58h8.55l.022-.375c.001-1.746-.48-3.14-1.446-4.183s-2.25-1.564-3.854-1.564zm23.741.004c-1.208 0-2.179.275-2.915.825-.736.55-1.23 1.15-1.48 1.795l1.854.793a2.16 2.16 0 0 1 .984-1.145 3.112 3.112 0 0 1 1.6-.419 2.94 2.94 0 0 1 2.006.708 2.404 2.404 0 0 1 .818 1.904v.307c-.763-.44-1.74-.66-2.934-.66-1.339 0-2.464.334-3.378 1.002-.913.667-1.37 1.588-1.37 2.762.002 1.086.388 1.96 1.16 2.62.77.66 1.73.99 2.88.99 1.562 0 2.748-.613 3.558-1.84h.088v1.497h1.95v-6.522c.008-1.473-.449-2.61-1.37-3.413-.92-.803-2.07-1.204-3.45-1.204zm-30.613.085a3.64 3.64 0 0 0-1.867.572 2.768 2.768 0 0 0-1.27 1.454h-.087v-1.762h-1.944v10.79h2.032l-.003-5.9c0-.94.284-1.7.852-2.28a2.658 2.658 0 0 1 1.955-.873 3.083 3.083 0 0 1 1.083.155l.773-1.892a3.884 3.884 0 0 0-1.524-.265zm-9.63.264v10.79h2.033v-10.79zm28.82 1.489a3.32 3.32 0 0 1 2.433 1.067c.678.712 1.016 1.655 1.016 2.83 0 1.174-.338 2.117-1.016 2.83a3.235 3.235 0 0 1-2.429 1.068v.009a3.241 3.241 0 0 1-2.44-1.066c-.668-.704-1.004-1.652-1.005-2.84-.001-1.19.335-2.136 1.005-2.84a3.318 3.318 0 0 1 2.437-1.058zm-12.366.011c1.03-.011 1.807.262 2.33.82.523.557.808 1.143.851 1.76l-6.272.018a3.597 3.597 0 0 1 1.137-1.893 2.919 2.919 0 0 1 1.955-.705zm45.257 0c1.03-.011 1.806.262 2.33.82.523.557.807 1.143.851 1.76l-6.272.018a3.597 3.597 0 0 1 1.137-1.893 2.919 2.919 0 0 1 1.954-.705zm-21.177 3.93c1.15 0 2.012.237 2.587.707a2.899 2.899 0 0 1-1.035 2.211 3.312 3.312 0 0 1-2.286.936v.009a2.742 2.742 0 0 1-1.559-.472 1.44 1.44 0 0 1-.69-1.256 1.915 1.915 0 0 1 .751-1.496c.5-.426 1.245-.638 2.232-.638z"/>
</svg>);
}