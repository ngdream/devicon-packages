import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PrometheusLineWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#e75225'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64.072 8.755c-22.707 0-41.349 18.18-41.41 40.39 0 22.69 18.31 41.085 40.92 41.106 23.129 0 41.676-18.106 41.696-40.798.041-22.332-18.556-40.698-41.206-40.698Zm0 .996c22.111 0 40.25 17.922 40.21 39.7-.02 22.15-18.09 39.802-40.698 39.804-22.07-.02-39.926-17.956-39.926-40.11.061-21.653 18.239-39.394 40.414-39.394Zm.766 3.253-1.186.636c-.842.451-1.654.901-2.279 1.619-1.712 1.969-2.396 4.298-2.564 6.79a63.614 63.614 0 0 1-.708 6.18v.002a16.37 16.37 0 0 1-1.749 4.773c-.181-1.632-.313-3.277-.753-4.798-.575-1.99-1.609-3.833-3.601-5.247l-1.027-.73.25 1.236c.485 2.382.005 4.623-.738 6.914v.002c-.495 1.542-1.254 3.096-1.699 4.768-.71 2.677-1.534 5.366-1.846 8.137v.002c-.403 3.684 1.035 6.966 3.278 10.151-3.854-.803-7.475-1.558-11.11-2.336l-.635-.136.035.65c.019.362-.016.48.025.727l.008.039.012.039c1.171 3.473 3.274 6.335 5.57 9.06l.005.008.008.01c.419.453 1.014.587 1.568.587 12.158.02 24.296.02 36.454 0 .439 0 1.02-.001 1.47-.451l.004-.004.002-.002c2.672-2.755 4.696-5.928 5.961-9.91l.255-.802-.825.163c-4.114.808-8.018 1.56-11.912 2.312.704-1.282 1.482-2.523 1.951-3.88 1.94-5.611 1.139-11.08-1.663-16.165-2.195-4.003-4.145-7.84-3.088-12.479l.378-1.657-1.212 1.19c-2.426 2.384-3.351 5.4-3.928 8.45-.376 1.948-.608 3.901-.868 5.854-.405-4.247-1.266-8.388-3.035-12.32v-.001h-.002c-1.206-2.656-2.435-5.172-1.292-8.127zm-1.686 2.19c-.546 2.81.547 5.316 1.585 7.603 1.987 4.415 2.952 9.076 3.214 13.934l.002.02.002.02c.038.28.058.615.129.966l-.01-.097a.75.75 0 0 0 .144.424c.06.081.094.115.097.119l.716.955.175-1.181c.45-3.029.757-5.994 1.321-8.918v-.002c.449-2.372 1.29-4.52 2.654-6.434-.273 4.143 1.439 7.748 3.344 11.224v.002c2.697 4.893 3.443 10.013 1.596 15.358-.52 1.503-1.504 2.978-2.356 4.663l-.46.907.998-.193c3.908-.755 7.864-1.52 11.97-2.323-1.225 3.415-2.976 6.24-5.35 8.69-.04.04-.433.16-.767.16h-.002c-12.157.02-24.293.02-36.45 0h-.002c-.3 0-.764-.192-.834-.268-2.233-2.654-4.205-5.38-5.32-8.61 3.774.807 7.483 1.582 11.551 2.43l1.317.275-.82-1.066c-2.607-3.388-4.078-6.706-3.668-10.455.299-2.646 1.103-5.291 1.819-7.99.41-1.545 1.159-3.086 1.683-4.72v-.002c.63-1.94.957-3.966.805-6.08 1.179 1.123 1.977 2.39 2.407 3.877.534 1.848.685 3.947.951 6.123l.156 1.259.743-1.028c1.503-2.074 2.156-4.256 2.59-6.426l.002-.005v-.008c.35-2.077.576-4.19.72-6.28v-.002c.158-2.355.777-4.425 2.323-6.203.244-.28.676-.487 1.025-.718zm-18.7 49.603v7.594h39.097v-7.594h-.518zm.996.997h37.105v5.6H45.448Zm6.54 8.96-.002.497c-.01 2.91 1.488 5.46 3.86 7.206 2.373 1.747 5.617 2.718 9.183 2.56a12.764 12.764 0 0 0 7.827-3.155c2.025-1.799 3.287-4.196 3.055-6.656l-.043-.451zm1.12.997h21.723c.01 1.914-.922 3.845-2.636 5.367-1.85 1.644-4.46 2.786-7.209 2.903-3.358.148-6.384-.774-8.548-2.368-2.014-1.482-3.17-3.557-3.33-5.902zm27.596 25.463v17.807h1.619v-9.025a6.21 6.21 0 0 1 1.654-1.541 3.772 3.772 0 0 1 2.027-.574c.968 0 1.674.281 2.128.844.463.574.699 1.387.699 2.471v7.806h1.638v-7.806c0-.702-.062-1.352-.255-1.937a3.662 3.662 0 0 0-.76-1.5l-.005-.005-.001-.002c-.374-.417-.832-.72-1.321-.955-.519-.248-1.125-.33-1.818-.33-.918 0-1.737.238-2.463.644l-.005.002-.004.004c-.55.34-1.027.813-1.494 1.3v-7.203zM0 101.66V119h1.7v-6.781h2.866c.958 0 1.84-.124 2.586-.38l.006-.002.003-.002c.748-.29 1.407-.629 1.948-1.105a4.831 4.831 0 0 0 1.243-1.671c.3-.665.45-1.394.45-2.14 0-1.662-.54-2.97-1.592-3.893-1.059-.93-2.591-1.366-4.623-1.366Zm81.202.05h.642v7.942l.442-.539a7.184 7.184 0 0 1 1.805-1.57 4.454 4.454 0 0 1 2.218-.58c.652 0 1.185.083 1.603.283.447.213.843.48 1.162.834l.002.002c.302.36.524.768.657 1.3l.002.01.004.01c.17.511.232 1.116.232 1.794v7.307h-.642v-7.307c0-1.156-.254-2.094-.81-2.782-.564-.7-1.447-1.031-2.515-1.031a4.28 4.28 0 0 0-2.29.65 6.693 6.693 0 0 0-1.84 1.713l-.05.065v8.712h-.622Zm-80.704.448h4.09c1.96 0 3.356.42 4.293 1.241.943.828 1.422 1.964 1.422 3.52 0 .68-.134 1.336-.404 1.934a4.305 4.305 0 0 1-1.119 1.504c-.477.42-1.08.734-1.798 1.013H6.98c-.677.231-1.503.35-2.414.35H1.202v6.783H.498Zm72.29.378a.576.576 0 0 0-.381.155c-.1.1-.154.242-.154.358l-.251 4.004-2.03.144v.68a.57.57 0 0 0 .154.379l.018.017.021.014a.632.632 0 0 0 .34.103h1.442v7.856c0 .937.236 1.702.745 2.212.455.454 1.088.604 1.802.654v.09h.25c.548 0 1.037-.128 1.524-.25l.024-.006.02-.01c.478-.218.891-.52 1.22-.87l.127-.138-.402-.671a.526.526 0 0 0-.397-.241c-.172 0-.295.069-.42.194l.021-.02c-.105.085-.216.176-.335.244-.166.084-.338.178-.519.251l-.01.004-.01.004c-.132.066-.39.095-.641.095-.152 0-.356-.05-.553-.109a1.048 1.048 0 0 1-.399-.25 1.428 1.428 0 0 1-.278-.489l-.004-.012-.006-.011c-.074-.163-.099-.416-.099-.732v-7.796h3.706v-1.332h-3.727v-4.522zm-71.317.122-.238.173a.82.82 0 0 0-.01.04c-.002.013 0 .018-.001.023l-.002.027a3.609 3.609 0 0 0-.002.072l-.002.26c-.002.223-.005.539-.006.919a1216.499 1216.499 0 0 0-.006 2.788l-.002 4.052v.25h3.385c.77 0 1.451-.083 2.078-.32l.006-.002a5.388 5.388 0 0 0 1.574-.875l.004-.002.002-.002c.455-.39.768-.838 1.004-1.395l.002-.002a4.42 4.42 0 0 0 .344-1.724c0-1.352-.418-2.42-1.29-3.161v-.002c-.838-.747-2.12-1.119-3.704-1.119zm71.317.374v.002h.3v4.521h3.727v.337H73.11v8.294c0 .332.017.643.142.926a1.963 1.963 0 0 0 .366.64c.165.193.393.325.618.4l.004.003h.004c.208.062.45.132.702.132.276 0 .587-.013.86-.148.216-.088.403-.189.555-.265l.008-.004.005-.002c.167-.095.299-.209.397-.288l.012-.008.01-.01c.025-.025.036-.027.046-.033l.181.3c-.259.248-.548.483-.902.646-.478.12-.915.23-1.374.23-.773 0-1.278-.18-1.698-.6-.387-.386-.6-1.005-.6-1.86v-8.354h-1.94c-.02 0-.024-.007-.032-.01 0-.003-.002.003-.002-.006v-.216l2.002-.142.278-4.46v-.01c0-.007-.014.015.008-.007s-.01-.01.029-.01zm-71.074.124h2.893c1.508 0 2.668.362 3.377.996l.002.002.002.002c.756.643 1.115 1.53 1.115 2.784 0 .578-.115 1.071-.307 1.533a3.07 3.07 0 0 1-.864 1.205 4.89 4.89 0 0 1-1.434.794l-.002.002h-.002c-.552.21-1.17.29-1.907.29H1.7l.002-3.804a1155.87 1155.87 0 0 1 .012-3.702v-.101zm17.8 3.31c-.983 0-1.827.286-2.504.875l-.002.002c-.493.417-.807 1.061-1.14 1.685l-.057-1.741c0-.15-.034-.322-.153-.442-.16-.159-.331-.154-.48-.154h-.86v12.098l.017.24.239-.009s.291-.01.58-.025c.144-.008.287-.017.397-.027.054-.005.099-.01.142-.018.021-.004.038-.005.08-.021a.292.292 0 0 0 .04-.02.37.37 0 0 0 .03-.021l.038-.041a19.493 19.493 0 0 0 .04-.072 9.543 9.543 0 0 0 .01-.091l.003.006v-7.642c.315-.994.78-1.77 1.31-2.279l.001-.002.002-.002c.522-.522 1.174-.762 2.021-.762.214 0 .443.038.637.06.172.055.338.094.46.115a1.889 1.889 0 0 0 .279.105h.004a.694.694 0 0 0 .311.087.52.52 0 0 0 .333-.1.464.464 0 0 0 .157-.29l.175-.95-.16-.086a4.01 4.01 0 0 0-.88-.342c-.345-.114-.697-.136-1.07-.136zm10.264.021c-.883 0-1.691.146-2.381.448l-.002.001h-.002c-.696.317-1.303.726-1.78 1.312a6.173 6.173 0 0 0-1.103 2.015c-.254.782-.378 1.645-.378 2.603 0 .939.124 1.8.378 2.582a6.163 6.163 0 0 0 1.103 2.014 4.37 4.37 0 0 0 1.79 1.315 6.166 6.166 0 0 0 2.375.447c.907 0 1.675-.17 2.372-.445l.006-.002.005-.004c.696-.316 1.303-.726 1.78-1.311a6.164 6.164 0 0 0 1.104-2.012v-.002c.254-.763.377-1.624.377-2.582 0-.958-.124-1.821-.377-2.603a6.175 6.175 0 0 0-1.103-2.015c-.478-.586-1.085-.995-1.78-1.312l-.005-.002-.003-.002c-.725-.298-1.513-.445-2.376-.445zm33.383 0-.004.031a9.854 9.854 0 0 0-2.141.302l-.016.004-.014.006a4.665 4.665 0 0 0-1.786 1.268l-.004.004-.001.004a6.296 6.296 0 0 0-1.102 1.95 7.492 7.492 0 0 0-.38 2.424c0 1.018.123 1.96.4 2.768l.002.002v.002c.291.812.652 1.494 1.165 2.072a4.571 4.571 0 0 0 1.806 1.311l.001.003c.702.296 1.45.445 2.292.445.463 0 .907-.043 1.368-.127l.004-.001h.004a9.275 9.275 0 0 0 1.276-.378l.006-.002.004-.002a6.673 6.673 0 0 0 1.1-.572l.005-.002.006-.004c.308-.226.593-.44.805-.724l.115-.153-.424-.537.017.027c-.116-.194-.334-.243-.457-.243-.124 0-.2.044-.278.087-.078.044-.156.097-.247.158l-.014.008-.013.012a2.866 2.866 0 0 1-.654.41l-.02.008-.015.012c-.221.153-.591.295-1.008.414l-.006.002-.008.002c-.367.129-.849.189-1.443.189-.652 0-1.204-.078-1.712-.304l-.008-.004-.008-.002c-.499-.185-.912-.52-1.28-.945l-.002-.002a4.664 4.664 0 0 1-.825-1.6l-.002-.001v-.004c-.208-.645-.285-1.381-.288-2.22h8.298c.15 0 .32-.054.42-.154.16-.159.156-.341.156-.543 0-.836-.125-1.614-.381-2.28a4.461 4.461 0 0 0-1.012-1.72 4.61 4.61 0 0 0-1.549-1.054l-.004-.002-.004-.002a5.397 5.397 0 0 0-1.922-.343zm35.946 0-.014.021a8.801 8.801 0 0 0-2.18.314l-.012.004-.012.004a4.667 4.667 0 0 0-1.786 1.268l-.004.004-.002.004a6.297 6.297 0 0 0-1.1 1.95 7.492 7.492 0 0 0-.382 2.424c0 1.018.124 1.96.4 2.768v.002l.002.002c.294.818.674 1.497 1.164 2.072a4.577 4.577 0 0 0 1.807 1.311l.002.002a5.77 5.77 0 0 0 2.292.446 7.61 7.61 0 0 0 1.368-.126l.004-.002h.004a9.275 9.275 0 0 0 1.276-.378l.006-.002.004-.002a6.67 6.67 0 0 0 1.101-.572l.004-.002.006-.004c.308-.226.593-.44.806-.724l.114-.153-.424-.537.018.027c-.117-.194-.334-.243-.457-.243-.124 0-.2.044-.279.087-.077.044-.155.097-.247.158l-.013.008-.014.012c-.14.123-.368.277-.654.41l-.02.008-.017.012c-.22.153-.589.295-1.005.414l-.006.002-.008.002c-.368.129-.852.189-1.446.189-.652 0-1.202-.078-1.71-.304l-.008-.004-.008-.002c-.499-.184-.912-.52-1.28-.945l-.002-.002a4.669 4.669 0 0 1-.827-1.6v-.005c-.208-.645-.284-1.381-.288-2.22h8.257a.62.62 0 0 0 .42-.154c.16-.159.156-.341.156-.543 0-.836-.125-1.614-.381-2.28a4.461 4.461 0 0 0-1.012-1.72 4.612 4.612 0 0 0-1.548-1.054l-.004-.002-.004-.002a5.396 5.396 0 0 0-1.923-.343zm-55.319.04c-.376 0-.771.018-1.146.158a5.408 5.408 0 0 0-.998.47l-.004.001-.002.002a5.427 5.427 0 0 0-.877.726c-.134.133-.249.294-.372.442l-.08-1.111-.002-.014a.628.628 0 0 0-.214-.387.63.63 0 0 0-.398-.123h-.88v12.317l1.68.086v-9.11c.422-.643.854-1.12 1.36-1.476l.001-.002.002-.002a2.706 2.706 0 0 1 1.625-.52c.82 0 1.415.252 1.813.793h.002c.408.577.644 1.397.644 2.5v7.825h1.638v-7.804c0-.552.062-1.029.227-1.434.177-.432.362-.764.636-1.038l.004-.002.004-.004c.25-.269.563-.437.926-.62.324-.161.667-.217 1.07-.217.887 0 1.485.25 1.948.805.457.55.694 1.384.694 2.489v7.805h1.64v-7.805c0-.731-.084-1.388-.278-1.971v-.002a4.283 4.283 0 0 0-.8-1.487 3.143 3.143 0 0 0-1.29-.94c-.497-.245-1.078-.33-1.669-.33-.467 0-.874.11-1.252.189-.426.09-.82.29-1.168.549-.36.226-.66.55-.933.927-.2.256-.3.569-.423.868-.215-.658-.451-1.301-.875-1.726-.561-.56-1.331-.826-2.253-.826zm80.276.02c-.63 0-1.187.087-1.706.28-.521.154-.98.413-1.335.746-.34.32-.629.671-.828 1.093-.199.42-.288.848-.288 1.307 0 .517.082.985.295 1.364.206.365.496.653.816.909.339.271.728.44 1.118.605a10.633 10.633 0 0 0 1.226.436l.004.002c.425.141.811.264 1.195.385.377.119.727.257 1.006.424.28.168.514.37.67.593.155.241.226.51.226.862 0 .307-.072.627-.186.932-.106.281-.283.514-.512.743l-.002.002c-.239.219-.51.382-.868.514-.352.13-.748.189-1.237.189-.488 0-.91-.061-1.241-.172h-.004c-.34-.158-.635-.282-.849-.406h-.002v-.002a3.518 3.518 0 0 1-.574-.399c-.182-.157-.342-.243-.548-.243-.165 0-.269.067-.282.072l-.018.006-.015.008a.427.427 0 0 0-.247.288l.03-.062-.386.564.159.146a6.03 6.03 0 0 0 1.698 1.105c.649.28 1.379.406 2.238.406.647 0 1.268-.06 1.84-.28a4.782 4.782 0 0 0 1.374-.815c.4-.334.689-.758.885-1.237a4.053 4.053 0 0 0 .284-1.541c0-.478-.084-.944-.298-1.323-.205-.365-.494-.653-.813-.909l-.01-.006-.008-.006c-.31-.206-.687-.439-1.101-.593l-.008-.002a10.72 10.72 0 0 0-1.212-.432l-.01-.004a77.925 77.925 0 0 0-1.195-.385c-.377-.12-.726-.255-1.005-.422-.29-.174-.53-.363-.683-.568-.141-.188-.214-.459-.214-.788a1.6 1.6 0 0 1 .173-.757l.004-.008.002-.006c.102-.222.282-.442.504-.627.2-.164.48-.332.815-.443.34-.114.699-.171 1.103-.171.468 0 .83.058 1.14.136.305.076.596.194.769.297l.004.002.004.004c.206.113.378.226.53.314.139.092.26.184.466.184.006 0 .009-.009.015-.01v.316l.448-.588.126-.163.095.087.121-.362.008-.03a.663.663 0 0 0 .006-.06l-.006-.05-.031-.076-.045-.046-.002-.002a1.223 1.223 0 0 0-.027-.028s-.025-.01-.05-.02c-.45-.397-.95-.75-1.53-.958h-.002c-.61-.238-1.29-.321-2.02-.321zm-15.593.138-.253.006-1.385.024v7.8c0 .706.06 1.364.257 1.953.19.589.43 1.074.803 1.492.374.417.832.721 1.321.955.518.248 1.125.329 1.817.329.932 0 1.775-.213 2.527-.664l.004-.002c.586-.335 1.075-.834 1.553-1.352l.087 1.257v-.017a.56.56 0 0 0 .174.426.59.59 0 0 0 .4.128h.882v-12.329h-1.638v9.02c-.522.646-1.07 1.165-1.69 1.521l-.003.002-.004.002a3.772 3.772 0 0 1-2.027.574c-.969 0-1.673-.28-2.127-.844-.463-.574-.698-1.387-.698-2.471zm-88.957.279c.357 0 .655.022.92.11l.006.003.007.002c.23.06.421.146.617.239l-.101.556c-.006 0 .006-.002-.004-.002-.006 0-.025-.002-.091-.035l-.026-.011-.025-.008a1.469 1.469 0 0 1-.276-.104l-.033-.017-.037-.006a3.194 3.194 0 0 1-.452-.113l-.023-.008-.027-.004c-.171-.019-.429-.062-.7-.062-.946 0-1.756.29-2.374.908-.358.346-.674.793-.948 1.314.365-.852.81-1.52 1.386-2.006l.002-.002c.585-.51 1.289-.755 2.179-.755zm10.264.021a5.65 5.65 0 0 1 2.181.409c.646.294 1.18.656 1.597 1.169.431.529.78 1.131 1.014 1.854.235.725.354 1.534.354 2.45 0 .915-.118 1.723-.352 2.425h-.002v.002a5.651 5.651 0 0 1-1.014 1.855c-.417.512-.95.875-1.597 1.169a5.794 5.794 0 0 1-2.18.408c-.807 0-1.527-.136-2.188-.408l-.002-.002h-.001A3.856 3.856 0 0 1 26 117.15a5.657 5.657 0 0 1-1.016-1.854c-.235-.726-.354-1.534-.354-2.428 0-.916.12-1.725.354-2.45A5.654 5.654 0 0 1 26 108.564c.418-.513.95-.877 1.597-1.171.613-.269 1.354-.407 2.181-.407zm33.601 0c.64 0 1.24.119 1.738.31.541.232 1 .537 1.381.937.401.42.708.936.9 1.533l.003.006.002.008c.23.595.35 1.32.35 2.11 0 .164-.047.227-.01.19-.022.022.027.008-.068.008h-8.801v.453c0 .89.082 1.688.316 2.415.213.7.532 1.3.92 1.776l.003.002.002.002c.403.467.884.863 1.48 1.085.59.26 1.218.345 1.907.345.625 0 1.156-.06 1.603-.216.431-.124.829-.266 1.134-.475.31-.148.567-.313.745-.469l-.025.02c.092-.061.164-.11.214-.138.05-.028.077-.024.035-.024.04 0 .023-.01.03 0l.009.014.171.218c-.15.161-.319.319-.56.496l-.002.002a6.236 6.236 0 0 1-1.008.521 8.712 8.712 0 0 1-1.19.352h-.003a7.001 7.001 0 0 1-1.276.119 5.244 5.244 0 0 1-2.103-.409l-.002-.002h-.004a4.067 4.067 0 0 1-1.613-1.173V117l-.001-.002c-.463-.52-.794-1.14-1.072-1.914-.252-.739-.374-1.627-.374-2.603 0-.81.12-1.58.354-2.263a5.774 5.774 0 0 1 1.01-1.788l.002-.002a4.178 4.178 0 0 1 1.583-1.126c.697-.178 1.42-.315 2.22-.315zm35.862 0c.64 0 1.24.119 1.738.31.541.232 1 .537 1.38.937.402.42.709.936.902 1.533l.002.006.002.008c.23.595.35 1.32.35 2.11 0 .164-.046.227-.01.19-.022.022.026.008-.068.008h-8.761v.453c0 .891.082 1.691.317 2.418.212.7.532 1.298.92 1.773l.002.002.002.002c.404.467.884.863 1.48 1.085.59.26 1.216.345 1.905.345.626 0 1.159-.06 1.605-.216.432-.124.83-.266 1.135-.475.309-.148.566-.313.745-.469l-.026.02c.092-.061.165-.11.214-.138.05-.028.078-.024.035-.024.04 0 .024-.01.03 0l.01.014.17.218a3.85 3.85 0 0 1-.56.496l-.001.002a6.242 6.242 0 0 1-1.008.521 8.712 8.712 0 0 1-1.19.352h-.003a7.001 7.001 0 0 1-1.276.119 5.244 5.244 0 0 1-2.103-.409l-.002-.002h-.004a4.067 4.067 0 0 1-1.613-1.173c-.447-.524-.797-1.147-1.074-1.918-.252-.738-.373-1.627-.373-2.603 0-.81.12-1.58.354-2.263a5.774 5.774 0 0 1 1.01-1.788l.001-.002a4.179 4.179 0 0 1 1.584-1.126 8.003 8.003 0 0 1 2.179-.315zm-55.453.041c.83 0 1.443.223 1.9.681.472.471.818 1.114.993 1.97l.482.02c.137-.47.306-.842.568-1.179l.004-.004.002-.004c.254-.35.52-.63.806-.81l.01-.005.007-.006a2.51 2.51 0 0 1 .98-.465c.396-.083.764-.18 1.152-.18.547 0 1.06.083 1.456.281l.011.006.014.004c.444.167.792.442 1.097.804.305.361.533.776.708 1.32v.003c.173.516.253 1.121.253 1.815v7.307h-.644v-7.307c0-1.176-.25-2.135-.81-2.808-.557-.667-1.342-.984-2.33-.984-.451 0-.882.066-1.291.27-.369.185-.747.382-1.067.722-.335.336-.554.736-.743 1.199-.2.49-.264 1.034-.264 1.622v7.306h-.642v-7.327c0-1.176-.252-2.107-.738-2.792l-.002-.002c-.498-.68-1.288-.998-2.218-.998-.679 0-1.345.2-1.918.619-.578.407-1.07.943-1.529 1.653l-.039.063v8.75l-.683-.034V107.19h.381c.07 0 .087.011.09.014.003.002.018.018.031.08l.167 2.356.401-.533c.242-.322.479-.619.73-.87.254-.254.525-.486.788-.656l.002-.002.004-.002c.289-.173.574-.305.904-.422l.004-.002h.002c.277-.104.613-.126.97-.126zm80.276.02c.694 0 1.315.08 1.845.287l.003.002.005.002c.453.162.852.458 1.233.775a22.579 22.579 0 0 0-.126.163l.447.152-.473-.113c-.036.073-.002.047-.04.047.042 0-.083-.03-.19-.101l-.005-.004-.008-.006c-.13-.074-.32-.199-.555-.327a3.43 3.43 0 0 0-.893-.35 5.12 5.12 0 0 0-1.262-.15c-.452 0-.868.065-1.261.196a3.097 3.097 0 0 0-.975.533h-.002a2.35 2.35 0 0 0-.632.798c-.162.306-.23.648-.23.982 0 .404.088.787.314 1.088.212.283.504.502.824.695.332.199.716.347 1.113.472.387.122.771.244 1.197.386l.006.002h.006c.416.119.793.258 1.173.418l.004.002.006.002c.352.13.7.341.998.539.288.23.523.47.683.755.153.272.233.662.233 1.08 0 .482-.078.938-.247 1.352-.17.416-.41.765-.743 1.042-.351.293-.731.54-1.233.734-.488.187-1.047.247-1.662.247-.81 0-1.465-.117-2.039-.366-.519-.225-.958-.536-1.381-.897l.144-.208.01-.033.09-.033c-.044 0 .123.035.225.122.15.129.35.284.65.456.268.156.575.277.912.435l.014.006.014.006c.4.134.873.197 1.402.197s.99-.065 1.41-.22c.413-.152.75-.353 1.04-.62l.004-.005.004-.004c.259-.259.488-.552.626-.922.13-.346.22-.721.22-1.107 0-.422-.092-.803-.304-1.132l-.002-.004-.004-.002a2.65 2.65 0 0 0-.828-.745c-.332-.2-.716-.346-1.113-.47a77.313 77.313 0 0 1-1.199-.388l-.004-.002h-.006a10.17 10.17 0 0 1-1.173-.418c-.384-.162-.728-.318-1-.535-.292-.234-.531-.476-.692-.763-.153-.272-.232-.66-.232-1.12 0-.397.071-.741.24-1.096.166-.352.409-.65.72-.942a2.84 2.84 0 0 1 1.141-.636l.008-.002.01-.004c.456-.17.952-.249 1.541-.249zm-109.249.143h.362c.095 0 .165.045.128.008.003.002.008-.005.008.09v.004l.082 2.508.473.083c-.157.32-.302.66-.42 1.035l-.012.037v7.522c-.091.007-.194.015-.31.021-.153.008-.2.01-.31.014zm100.703 0h.641v11.333h-.383c-.068 0-.084-.015-.076-.008.008.007 0 .018 0-.049v-.007l-.167-2.401-.399.502a6.339 6.339 0 0 1-1.823 1.59h-.002l-.002.001c-.672.404-1.418.596-2.276.596-.652 0-1.184-.08-1.603-.28-.447-.215-.845-.483-1.164-.84-.318-.355-.525-.764-.702-1.314v-.002c-.17-.511-.231-1.118-.231-1.796v-7.31l.642-.011v7.301c0 1.157.252 2.096.807 2.784.564.7 1.448 1.03 2.516 1.03a4.29 4.29 0 0 0 2.29-.65h.002c.702-.406 1.313-.978 1.875-1.685l.054-.068zm-52.139.133c-.633 0-1.196.084-1.718.28a3.72 3.72 0 0 0-1.35.871c-.39.39-.676.834-.89 1.391a6.3 6.3 0 0 0-.444 1.756l-.028.274h8.323v-.25c0-.652-.083-1.252-.278-1.795a4.18 4.18 0 0 0-.76-1.342l-.002-.004-.004-.002a3.866 3.866 0 0 0-1.218-.872l-.006-.002-.008-.004a4.405 4.405 0 0 0-1.617-.302zm35.862 0c-.633 0-1.196.084-1.718.28a3.72 3.72 0 0 0-1.35.871c-.39.39-.677.834-.89 1.391a6.3 6.3 0 0 0-.445 1.756l-.027.274h8.282v-.25c0-.652-.083-1.252-.278-1.795a4.183 4.183 0 0 0-.76-1.342l-.003-.004-.004-.002a3.866 3.866 0 0 0-1.218-.872l-.006-.002-.008-.004a4.274 4.274 0 0 0-1.575-.302zm-69.463.04c-.72 0-1.386.128-1.938.392-.59.263-1.032.661-1.412 1.126a4.124 4.124 0 0 0-.819 1.741c-.192.661-.276 1.415-.276 2.205 0 .791.084 1.544.276 2.206.19.656.466 1.232.811 1.706l.004.006.004.006c.382.467.824.865 1.416 1.128.546.261 1.176.39 1.934.39.72 0 1.384-.127 1.936-.391.591-.264 1.031-.661 1.413-1.127.395-.483.653-1.068.822-1.724a8.898 8.898 0 0 0 .273-2.2c0-.791-.082-1.546-.274-2.208-.19-.655-.465-1.25-.812-1.728l-.006-.006-.004-.004c-.381-.466-.821-.867-1.414-1.13-.582-.259-1.212-.387-1.934-.387zm33.601.458a3.9 3.9 0 0 1 1.432.268c.412.189.77.451 1.05.75.26.297.49.697.664 1.18.145.403.19.88.21 1.378h-7.194c.074-.481.178-.94.342-1.35v-.003h.002c.193-.501.435-.874.778-1.217a3.188 3.188 0 0 1 1.173-.757c.457-.171.954-.25 1.543-.25zm35.862 0c.496 0 .95.096 1.391.268.412.189.77.451 1.05.75.26.297.49.697.664 1.18.145.403.19.88.21 1.378h-7.153c.074-.481.178-.94.342-1.35v-.003h.002a3.32 3.32 0 0 1 .778-1.217 3.189 3.189 0 0 1 1.173-.757c.456-.171.954-.25 1.543-.25zm-69.463.04c.663 0 1.214.115 1.732.345.505.225.877.56 1.227.986.303.418.556.96.732 1.565.174.6.255 1.313.255 2.07 0 .752-.1 1.465-.257 2.076-.157.606-.388 1.12-.726 1.533-.351.43-.724.763-1.231.988l-.004.002-.004.002c-.466.224-1.06.342-1.724.342-.705 0-1.255-.116-1.726-.342l-.004-.002-.001-.002c-.505-.224-.878-.556-1.228-.983a5.015 5.015 0 0 1-.733-1.546c-.175-.6-.255-1.312-.255-2.068 0-.757.08-1.47.255-2.07l.003-.008v-.008a3.619 3.619 0 0 1 .724-1.545c.352-.43.727-.765 1.234-.99h.002l.003-.002c.466-.224 1.063-.343 1.726-.343z"/>
</svg>;
  }
});