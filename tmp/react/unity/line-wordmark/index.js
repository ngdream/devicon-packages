const React = require("react");
module.exports = function UnityLineWordmarkIcon({size = "1em", color = "#4d4d4d", ...props}){
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
	<path d="M18.084 41.563.115 51.936a.23.23 0 0 0-.115.2v20.747a.23.23 0 0 0 .012.012.23.23 0 0 0 .185.182.23.23 0 0 0 .006.006.23.23 0 0 0 .027.027.23.23 0 0 0 .028-.027.23.23 0 0 0 .004 0 .23.23 0 0 0 .084 0 .23.23 0 0 0 .004 0l6.89-3.977a.23.23 0 0 0 .115-.2v-8.128a.23.23 0 0 0 0-.002.23.23 0 0 0 0-.002c0-.08.078-.151.159-.158a.126.126 0 0 1 .074.017.23.23 0 0 0 .006.004l8.367 4.832a.555.555 0 0 1 .281.483v9.66a.23.23 0 0 0 0 .004c.001.08-.078.153-.158.16a.134.134 0 0 1-.076-.02.23.23 0 0 0-.004-.003L8.96 71.69a.23.23 0 0 0-.004 0 .23.23 0 0 0-.23 0l-6.891 3.977a.23.23 0 0 0 0 .398l17.969 10.373a.23.23 0 0 0 .004 0 .23.23 0 0 0 .236-.006l17.957-10.367a.23.23 0 0 0 .09-.107.23.23 0 0 0 .012-.043.23.23 0 0 0 0-.1.23.23 0 0 0-.012-.043.23.23 0 0 0-.09-.105l-6.89-3.977a.23.23 0 0 0-.23 0l-7.042 4.063a.23.23 0 0 0-.004.004c-.09.055-.244-.028-.24-.137a.23.23 0 0 0 .002-.008v-9.66a.548.548 0 0 1 .277-.48.23.23 0 0 0 .002-.003l8.367-4.832a.23.23 0 0 0 .006-.002c.093-.056.242.02.238.137a.23.23 0 0 0 0 .006v8.129a.23.23 0 0 0 .116.2l6.888 3.976a.23.23 0 0 0 .141.025.23.23 0 0 0 .039-.012.23.23 0 0 0 .086-.049.23.23 0 0 0 .033-.033.23.23 0 0 0 .047-.13v-20.75a.23.23 0 0 0-.025-.103.23.23 0 0 0-.006-.012.23.23 0 0 0-.084-.084L21.756 41.563a.23.23 0 0 0-.346.2v7.956a.23.23 0 0 0 .115.2l7.041 4.064a.23.23 0 0 0 .002 0 .165.165 0 0 1 .079.139.151.151 0 0 1-.075.14.23.23 0 0 0-.006.002l-8.365 4.834a.23.23 0 0 0-.002 0 .544.544 0 0 1-.555 0l-8.369-4.834a.23.23 0 0 0-.006-.002c-.046-.025-.071-.082-.072-.138a.18.18 0 0 1 .018-.08.125.125 0 0 1 .054-.057.23.23 0 0 0 .006-.004l7.037-4.064a.23.23 0 0 0 .042-.03.23.23 0 0 0 .03-.035.23.23 0 0 0 .005-.006.23.23 0 0 0 .02-.035.23.23 0 0 0 .019-.094v-7.957a.23.23 0 0 0-.344-.199zm-.115.598v7.426l-6.914 3.992c-.428.225-.424.862-.002 1.088l8.36 4.828c.303.179.692.19 1.017.002l8.361-4.83c.42-.23.413-.854.004-1.084l-6.924-3.996V42.16l17.277 9.974-5.408 3.124-13.82 7.978L.693 52.135Zm69.677 9.744a.23.23 0 0 0-.228.23v3.95a.23.23 0 0 0 .228.23h4.875a.23.23 0 0 0 .231-.23v-3.95a.23.23 0 0 0-.23-.23zm.231.46h4.414v3.49h-4.414Zm-87.412.17 19.224 11.1V85.84L2.416 75.866l6.428-3.71 6.918 3.993a.595.595 0 0 0 .322.088h.004a.627.627 0 0 0 .62-.629v-9.656a1.025 1.025 0 0 0-.51-.881l-8.362-4.828a.588.588 0 0 0-.322-.088.63.63 0 0 0-.623.627v7.992L.465 72.481zm38.914 0v19.948l-6.43-3.709v-7.988c.015-.481-.535-.79-.94-.543l-8.36 4.828a1.016 1.016 0 0 0-.512.88v9.653c-.015.48.533.793.94.545l6.921-3.994 6.428 3.71-17.272 9.974V63.633l1.94-1.119zm10.58.595a.23.23 0 0 0-.23.23v12.615c0 2.543.768 4.598 2.318 6.004 1.55 1.406 3.855 2.148 6.887 2.15 3.011 0 5.3-.757 6.837-2.17 1.537-1.412 2.297-3.467 2.297-5.98V53.364a.23.23 0 0 0-.23-.229h-5.291a.23.23 0 0 0-.23.229v12.703c0 1.002-.278 1.834-.827 2.418-.549.584-1.38.938-2.56.938-1.26 0-2.108-.336-2.65-.895-.543-.56-.798-1.367-.798-2.375V53.36a.23.23 0 0 0-.23-.23zm46.39 0a.23.23 0 0 0-.228.23v4.611h-1.807a.23.23 0 0 0-.228.23v3.95a.23.23 0 0 0 .228.229h1.807v7.093c0 1.69.538 2.835 1.463 3.524.925.688 2.196.92 3.64.918 1.33 0 2.257-.115 2.723-.248a.23.23 0 0 0 .166-.223v-3.557a.23.23 0 0 0-.228-.23c-.207 0-.671.033-1.078.033-.5 0-.874-.079-1.104-.254-.23-.175-.369-.455-.369-1.012V62.38h2.55a.23.23 0 0 0 .23-.229v-3.95a.23.23 0 0 0-.23-.23h-2.55V53.36a.23.23 0 0 0-.23-.23zm-46.16.46h4.832v12.563c0 1.086.282 2.029.928 2.695.646.667 1.64 1.035 2.98 1.035 1.274 0 2.249-.395 2.895-1.082.646-.686.951-1.646.951-2.734V53.594h4.834V65.98c0 2.421-.719 4.327-2.148 5.64-1.43 1.315-3.593 2.05-6.527 2.05-2.957-.003-5.138-.724-6.579-2.032-1.44-1.307-2.166-3.21-2.166-5.662zm46.391 0h4.293v4.612a.23.23 0 0 0 .23.23h2.551v3.489h-2.55a.23.23 0 0 0-.23.23v6.273c0 .641.19 1.105.55 1.38.36.273.838.345 1.383.345.338 0 .627-.017.847-.025v3.115c-.413.1-1.21.215-2.43.215a.23.23 0 0 0-.001 0c-1.395.002-2.562-.23-3.364-.826-.801-.597-1.279-1.56-1.279-3.155v-7.322a.23.23 0 0 0-.23-.23h-1.805v-3.489h1.805a.23.23 0 0 0 .23-.23zm-16.756 3.934c-1.998 0-3.456.83-4.586 2.254v-1.576a.23.23 0 0 0-.228-.23h-4.696a.23.23 0 0 0-.23.23v15.303a.23.23 0 0 0 .23.23h4.875a.23.23 0 0 0 .229-.23v-8.46c0-.897.258-1.65.687-2.173.43-.523 1.028-.823 1.772-.823.74 0 1.26.248 1.615.672.356.425.547 1.047.547 1.817v8.97a.23.23 0 0 0 .23.23h4.874a.23.23 0 0 0 .23-.23v-9.955c0-1.747-.507-3.254-1.463-4.328-.956-1.073-2.358-1.7-4.086-1.7zm7.822.447a.23.23 0 0 0-.228.23v15.304a.23.23 0 0 0 .228.23h4.875a.23.23 0 0 0 .231-.23V58.202a.23.23 0 0 0-.23-.23Zm17.495 0a.23.23 0 0 0-.215.313l4.513 11.777a.23.23 0 0 0 .002.002c.625 1.607.909 2.494.909 3.082 0 .484-.12.804-.381 1.026-.261.221-.703.359-1.39.359h-1.678a.23.23 0 0 0-.224.232v3.795a.23.23 0 0 0 .23.23h3.164c1.569 0 2.774-.327 3.727-1.13.953-.803 1.64-2.056 2.26-3.867l5.292-15.514a.23.23 0 0 0-.218-.305h-4.873a.23.23 0 0 0-.221.163l-2.002 6.517c-.383 1.194-.587 2.217-.713 2.803-.141-.583-.38-1.609-.764-2.805h.002l-2.062-6.517a.23.23 0 0 0-.219-.16zm-25.317.014c1.618 0 2.875.57 3.742 1.545.868.974 1.346 2.365 1.346 4.023v9.725H80.5v-8.74c0-.846-.21-1.582-.654-2.114-.445-.53-1.122-.835-1.969-.835-.872 0-1.619.372-2.129.992s-.789 1.48-.789 2.465v8.228h-4.414V58.432h4.234v1.864a.23.23 0 0 0 .23.23h.093a.23.23 0 0 0 .189-.1c1.107-1.599 2.476-2.441 4.533-2.441zm46.225.217c-.272 0-.525.05-.76.152a1.97 1.97 0 0 0-.621.418 1.97 1.97 0 0 0-.418.621 1.899 1.899 0 0 0-.152.76c0 .272.05.525.152.76a1.97 1.97 0 0 0 1.04 1.04c.234.1.487.151.759.151.271 0 .525-.05.76-.152a1.97 1.97 0 0 0 .62-.418 1.92 1.92 0 0 0 .571-1.381c0-.272-.051-.525-.152-.76a1.97 1.97 0 0 0-.418-.62 1.97 1.97 0 0 0-.621-.419 1.899 1.899 0 0 0-.76-.152zm-38.172.23h4.414v14.842h-4.414zm17.598 0h4.638l2.01 6.356a.23.23 0 0 0 .002 0c.474 1.48.951 3.51.951 3.51a.23.23 0 0 0 .225.175h.058a.23.23 0 0 0 .227-.183s.419-2.032.89-3.502a.23.23 0 0 0 0-.002l1.954-6.354h4.38l-5.187 15.21c-.606 1.773-1.263 2.942-2.119 3.663-.856.721-1.924 1.022-3.43 1.022h-2.935V74.99h1.44c.747 0 1.308-.145 1.689-.469.38-.324.543-.81.543-1.377 0-.727-.315-1.634-.942-3.248v-.002zm20.574.239c.271 0 .52.065.746.199.225.133.404.311.537.537.134.225.2.474.2.746s-.066.52-.2.746a1.502 1.502 0 0 1-.537.537c-.226.134-.475.2-.746.2-.272 0-.52-.066-.746-.2a1.507 1.507 0 0 1-.54-.537 1.436 1.436 0 0 1-.197-.746c0-.272.064-.52.198-.746a1.492 1.492 0 0 1 1.285-.737zm-.682.562v1.799h.397v-.611h.39l.319.61h.431l-.373-.698a.677.677 0 0 0 .203-.194.568.568 0 0 0 .098-.336.546.546 0 0 0-.314-.511.548.548 0 0 0-.239-.059zm.397.29h.377a.32.32 0 0 1 .166.06c.064.041.091.114.091.224 0 .106-.032.19-.091.24-.065.056-.12.079-.176.079h-.367z"/>
</svg>);
}