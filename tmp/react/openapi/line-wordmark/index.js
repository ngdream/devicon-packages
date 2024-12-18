const React = require("react");
module.exports = function OpenapiLineWordmarkIcon({size = "1em", color = "#91d400", ...props}){
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
	<path d="M30.669 46.379a4.75 4.75 0 0 0-.535.029 4.75 4.75 0 0 0-2.818 1.349c-1.334 1.324-1.628 3.294-.957 5.021l-8.93 8.888c-1.734-.668-3.706-.377-5.043.95a4.718 4.718 0 0 0 0 6.681 4.757 4.757 0 0 0 6.697-.003l.002-.002c1.333-1.324 1.625-3.291.956-5.018l8.93-8.89c1.733.668 3.704.378 5.043-.947a4.712 4.712 0 0 0 0-6.68 4.755 4.755 0 0 0-3.346-1.378zm.002.99a3.762 3.762 0 0 1 2.645 1.093 3.702 3.702 0 0 1 0 5.27 3.764 3.764 0 0 1-4.32.7l-.318-.158-9.748 9.706.161.32a3.704 3.704 0 0 1-.705 4.288l-.002.002a3.75 3.75 0 0 1-5.3.002 3.707 3.707 0 0 1 0-5.271 3.763 3.763 0 0 1 4.32-.702l.317.157 9.75-9.703-.16-.322a3.701 3.701 0 0 1 .703-4.289 3.768 3.768 0 0 1 2.232-1.07 3.768 3.768 0 0 1 .424-.023zm-14.576 2.925a16.65 16.65 0 0 0-.69.005c-.094 0-.193-.001-.306.004-.648.027-1.295.097-1.934.204h-.035l-.037.006c-.114.016-.205.035-.271.046a1.909 1.909 0 0 0-.204.045l-.124.023-.265.056-.004.002c-1.882.385-4.029 1.372-5.802 2.641l-.002.002-.002.002c-.471.346-.923.717-1.353 1.113l-.103.095-.008-.008-.176.176-.095.087.004.004-.083.084c-.081.08-.152.159-.213.22l-.002.003c-.07.07-.144.144-.223.23a15.884 15.884 0 0 0-1.332 1.651l-.002.004-.002.002a3.85 3.85 0 0 1-.048.068c-.057.076-.102.144-.138.196l-.004.006-.137.209-.002.002a15.59 15.59 0 0 0-2.488 7.854v.006c-.003.098-.008.202-.008.322a6.934 6.934 0 0 0-.006.3v.497h.015v.118c0 .034 0 .091.004.166.003.105.01.194.014.25v-.028c0 .071.004.106.004.11v.025l.03.316-.001-.049c0 .01-.003.082.013.163l-.007-.052c.01.12.024.222.033.312 0 .07.003.07.004.031l.003.027a9.023 9.023 0 0 0 .043.328v.008l.006.033v.003c.102.703.262 1.394.46 2.076l.303.963c.026.072.05.145.078.211l.035.1.002.007c.03.08.056.141.068.18l.011.035.016.033c.024.05.038.082.042.095l.01.03.014.028c.016.035.038.092.066.155.034.08.066.147.089.2.015.035.033.08.064.141.036.081.073.158.106.23l.002.005.039.08c.05.103.099.194.141.28l.002.004.022.043c.362.656-.015-.017.46.835l.067.107c.256.44.508.789.794 1.18v.017l.097.12.016.018.116.159h.006c.013.018.03.037.043.056l.029.043.046.042.169.215.019.026.021.02.018.02c.066.081.128.153.184.221.043.053.075.085.087.099.072.084.129.14.16.176.034.042.072.078.11.115a.233.233 0 0 1 .025.033l.013.015.016.016c.025.024.058.063.114.12-.003-.005.011.01.006.004l.015.019.018.018c.085.092.158.162.215.222l.091.095-.004.004.04.039.222.233.017-.018.107.097c.023.021.06.061.118.109.045.038.102.093.178.157.1.088.203.17.307.253l.058.057.013.011c.097.079.196.155.295.23l-.008-.003c.09.071.183.144.283.219l.01.006.004.004.12.089h.015c.344.25.694.487 1.055.71.08.062.099.066.054.034l.021.015.021.012a6.602 6.602 0 0 1 .22.132l.019.012.021.011a1.948 1.948 0 0 1 .116.062l.002.002c.046.026.103.06.167.091.085.049.162.091.229.128l.019.01.056.025a8.78 8.78 0 0 0 1.568.703l.008.004.008.002c.088.034.185.074.29.113h.004l.004.002c.045.015.084.029.122.044l.012.006.01.004c1.04.365 2.115.62 3.209.761h.006c.016.002.058.012.13.02l-.005-.002.128.015c.077.01.167.02.26.026h.002l.027.005.03.004c.118.012.22.016.303.024l.024.002h.021c-.018 0 .015.005.105.005H14.7c.074.004.167.014.288.014.054.003.107.004.126.006l.018.002h.02c.039 0 .104.004.183.005a6.645 6.645 0 0 0 .33.006h.07c.845 0 1.69-.072 2.528-.21l.043-.003h.048l.049-.01c.075-.015.162-.03.26-.05l.015-.004.134-.023a3.717 3.717 0 0 0 .184-.04l-.035.007a3.358 3.358 0 0 0 .334-.074l.007-.002a15.68 15.68 0 0 0 3.754-1.391l.004-.002.035-.02c.2-.106.449-.221.603-.31.154-.088.269-.17.327-.209l.366-.238c.224-.146.442-.298.657-.454h.002c.47-.343.92-.714 1.357-1.114.257-.207.432-.425.66-.657l.018-.018a6.42 6.42 0 0 0 .213-.217l.002-.002a16.203 16.203 0 0 0 1.34-1.653l.003-.004.047-.071a2.87 2.87 0 0 0 .133-.198l.014-.02a3.925 3.925 0 0 0 .126-.185v-.002l.054-.085.002-.002a15.556 15.556 0 0 0 2.438-7.766v-.004c.005-.112.007-.21.012-.304v-.023c0-.087.004-.192.004-.308.004-.356-.017-.672-.035-1.031l-.002-.02a1.704 1.704 0 0 0-.006-.083l-.004-.037a5.887 5.887 0 0 0-.021-.277l-.002-.021v-.024l-.002-.023c-.011-.122-.028-.23-.035-.312l-.002-.023v-.01l-.005-.062-.004-.01c-.013-.098-.028-.191-.04-.273v-.008l-.003-.02-.002-.015a15.579 15.579 0 0 0-.465-2.13v-.017l-.014-.043-.001-.011-.035-.12-.006-.006c-.024-.077-.048-.156-.074-.233l-.002-.004-.004-.013-.007-.023a5.602 5.602 0 0 0-.097-.3l-.004-.007-.03-.08-.001-.003c-.025-.067-.054-.151-.09-.242l-.005-.014c-.006-.018-.024-.06-.039-.097-.03-.092-.062-.162-.085-.223l-.002-.007a2.81 2.81 0 0 0-.076-.182l-.002-.006c-.018-.042-.037-.092-.07-.161v-.002a3.414 3.414 0 0 1-.077-.18l-.01-.025-.011-.024a.688.688 0 0 1-.031-.066l-.006-.015-.006-.014a10.226 10.226 0 0 0-.104-.217c-.036-.09-.041-.099-.024-.044l-.013-.043-.021-.039c-.035-.065-.076-.158-.136-.271l-.016-.031-.013-.02-.153-.294-.031-.062-.016-.016a16.242 16.242 0 0 0-.857-1.383l-.337-.487-.42.419-6.903 6.87.096.293c.14.415.23.837.274 1.263l.037.369v.19c0 .07-.01.166-.016.283v.005a6.136 6.136 0 0 1-.017.28 5.622 5.622 0 0 1-1.254 3.015 8.533 8.533 0 0 1-.184.2l-.01.01-.008.009c-.07.082-.13.153-.176.2l-.124.123-.305.252a3.148 3.148 0 0 1-.186.142l-.354.252-.118.07a5.409 5.409 0 0 1-.247.135l-.002.002h-.003a5.694 5.694 0 0 1-2.69.678 5.71 5.71 0 0 1-1.622-.238l-.004-.002-.004-.002c-.065-.018-.152-.05-.266-.089l-.006-.002c-.096-.033-.187-.064-.257-.093l-.28-.114-.232-.124a5.762 5.762 0 0 1-.924-.613l-.208-.168-.211-.21a4.152 4.152 0 0 1-.186-.197l-.002-.004-.004-.002a4.376 4.376 0 0 1-.182-.215 16.15 16.15 0 0 1-.157-.2l-.004-.006a4.238 4.238 0 0 1-.153-.219l-.002-.001-.002-.004a7.058 7.058 0 0 1-.155-.237l-.124-.201-.141-.297a5.74 5.74 0 0 1-.52-1.847v-.453h-.03v-.119c0-.066.008-.163.013-.279v-.004c.005-.117.005-.201.014-.267v-.006l.001-.006a5.59 5.59 0 0 1 1.254-3.015l.002-.002h.002c.033-.04.103-.114.178-.2l.014-.015c.079-.084.14-.158.186-.204l.188-.191.223-.173c.078-.06.139-.11.19-.143l.432-.289-.006-.006.066-.04a4.58 4.58 0 0 1 .225-.127l.011-.005c.095-.047.175-.089.252-.124h.004l.004-.002a5.628 5.628 0 0 1 2.429-.553h.269l.296.031a5.77 5.77 0 0 1 1.266.274l.29.098 7.317-7.28-.477-.342a12.015 12.015 0 0 0-.768-.504l-.015-.013-.306-.178-.018-.01a1.597 1.597 0 0 1-.097-.056l-.013-.01-.018-.008c-.022-.011-.07-.038-.126-.066-.084-.047-.167-.094-.252-.14l-.033-.017-.034-.011h-.002a15.512 15.512 0 0 0-1.661-.748l-.012-.006-.039-.012-.007-.004-.016-.004c-.105-.04-.224-.087-.35-.131h-.003a16.172 16.172 0 0 0-3.15-.74h-.009l-.01-.003c-.006 0-.044-.007-.114-.015l-.128-.016h-.001a4.793 4.793 0 0 0-.221-.02l-.041-.005-.03-.006-.03-.004c-.12-.012-.217-.015-.289-.023l-.027-.002h-.025l-.068-.004a8.941 8.941 0 0 0-.688-.035zm-.857 1v8.13c-.809.063-1.62.183-2.354.534-.054.025-.102.05-.151.074l-4.171-6.888.072-.04.025-.014c.053-.028.09-.05.13-.074l.073-.038a14.952 14.952 0 0 1 3.576-1.324l.254-.054.172-.035.018-.004a.939.939 0 0 1 .099-.021c.1-.017.18-.035.244-.045h.027l.04-.008a14.577 14.577 0 0 1 1.85-.192h.003l.093-.001zm1.609.033c.094.008.183.013.244.019a.37.37 0 0 1 .039.006l.023.004h.025a3.943 3.943 0 0 1 .217.021l.132.015c.012.002.059.011.12.018a15.173 15.173 0 0 1 2.956.694c.108.038.228.086.35.132l.012.003.047.016a14.521 14.521 0 0 1 1.564.705l.034.018.022.008c.073.039.147.077.219.118l.015.01.016.007c.017.008.06.033.13.068.036.023.076.051.147.085l.16.095c.053.048.06.053.024.016l.052.03c.079.048.152.103.229.152l-6.06 6.033a6.7 6.7 0 0 0-.717-.157Zm-9.65 2.67 2.89 4.773-3.95-3.93c.283-.242.563-.487.863-.707l.004-.004c.064-.046.13-.087.194-.132zm36.328.436c-4.801 0-8.386 3.496-8.386 8.256 0 4.766 3.585 8.256 8.384 8.256 4.776 0 8.36-3.49 8.36-8.256 0-4.76-3.582-8.256-8.358-8.256zm9.058.252v15.99h.496l3.704.002v-5.353h3.345c1.74 0 3.151-.6 4.108-1.577.958-.977 1.454-2.312 1.454-3.73 0-1.43-.49-2.77-1.444-3.75-.955-.981-2.367-1.582-4.118-1.582zm13.558 0v15.99h.497l11.16.002v-3.804h-7.457v-2.425h7.3v-3.804h-7.3V58.49h7.457v-3.804zm12.609 0v15.99h4.2V61.91l6.44 8.765h.252l3.593.003V54.684h-4.202v8.419l-6.24-8.419zm20.986 0-6.191 15.99h4.707l.95-2.54h5.77l.952 2.54h4.812l3.706.002v-5.353h3.345c1.74 0 3.152-.6 4.108-1.577.957-.977 1.452-2.312 1.452-3.73 0-1.429-.49-2.77-1.444-3.75-.954-.981-2.366-1.582-4.116-1.582h-7.547v14.984l-5.802-14.984zm24.064 0v15.99h.496l3.704.002V54.685zm-80.275.74c4.303 0 7.366 2.99 7.366 7.264 0 4.28-3.063 7.263-7.368 7.263-4.33 0-7.391-2.984-7.391-7.263 0-4.274 3.062-7.264 7.393-7.264zm10.05.252h6.553c1.529 0 2.649.503 3.407 1.281.758.779 1.163 1.854 1.163 3.058 0 1.19-.41 2.26-1.17 3.037-.762.777-1.884 1.28-3.4 1.28H55.79v5.352l-2.215-.002zm13.559 0h9.672v1.82H69.35v4.14h7.3v1.82h-7.3v4.408h7.457v1.82l-9.672-.002zm12.608 0h2.55l7.733 10.43v-10.43h2.217v14.008l-2.35-.002-7.935-10.798v10.798h-2.215zm20.675 0h3.34l5.423 14.006h-2.568l-.951-2.54h-7.15l-.949 2.54h-2.57zm10.816 0h6.554c1.528 0 2.65.503 3.407 1.281.757.779 1.16 1.854 1.16 3.058 0 1.19-.407 2.26-1.168 3.037-.76.777-1.883 1.28-3.4 1.28h-4.336v5.352l-2.217-.002zm13.56 0h2.215v14.008l-2.215-.002zm-119.83.262 5.715 5.686c-.037.04-.066.068-.11.122l.004-.002a6.583 6.583 0 0 0-1.477 3.539v.006a1.89 1.89 0 0 0-.012.168h-8.08l.003-.093v-.005a14.597 14.597 0 0 1 2.33-7.35l.123-.19.008-.009c.044-.064.082-.12.113-.16l.003-.007.002-.004c.012-.016.035-.043.064-.085l.004-.006c.38-.54.794-1.055 1.242-1.54l.068-.07zm97.12.988-.465 1.28-2.589 7.114h6.118zm-58.56.343c-1.526 0-2.823.588-3.713 1.57-.89.982-1.372 2.338-1.372 3.849 0 1.5.483 2.857 1.372 3.843.889.986 2.186 1.583 3.713 1.583 1.517 0 2.808-.598 3.694-1.583.886-.985 1.368-2.341 1.368-3.841v-.002c0-1.51-.482-2.867-1.368-3.849-.886-.982-2.178-1.57-3.694-1.57zm12.273.225v5.02h3.884c.734 0 1.412-.223 1.917-.66.505-.436.814-1.092.814-1.84 0-.758-.307-1.42-.812-1.859-.505-.44-1.186-.66-1.919-.66zm57.654 0v5.02h3.89c.73 0 1.409-.223 1.914-.66.277-.239.307-.66.447-1.011l.37.368v-1.197c0-.142-.132-.213-.152-.347l.008-.004-.016-.016c-.094-.574-.249-1.14-.655-1.492-.506-.439-1.186-.66-1.917-.66zm-85.274.618c.178.28.363.555.522.845l.037.068.01.016.143.277c-.005-.006-.004 0 .001.006l.004.007.012.012c.031.062.063.135.112.229l.004.008.012.029.01.023.011.023c.03.058.065.136.107.225l-.012-.03c.022.056.047.111.074.164.025.062.051.125.08.186l.063.149v.002l.002.004a1.811 1.811 0 0 1 .053.126v.004l.002.004c.031.082.055.14.071.188l.014.038.017.035c-.008-.015 0 .002.018.052l.003.01.004.01c.027.067.056.15.091.246l.002.002.024.064c.034.098.062.18.085.261l.004.012.017.054.002.002c.035.103.068.205.099.308.004.014.006.025.012.04.193.658.339 1.328.438 2.007v.002l.003.029c.016.118.035.225.047.32-.001.008 0 .009.004.042.01.125.027.234.035.32l.002.03v.026l.002.027a4.891 4.891 0 0 1 .019.235h-8.159a6.71 6.71 0 0 0-.153-.713zm15.347.15c1.264 0 2.256.467 2.958 1.244.702.777 1.112 1.882 1.112 3.182v.002c0 1.287-.411 2.394-1.114 3.176-.703.782-1.694 1.256-2.956 1.256-1.274 0-2.272-.474-2.977-1.256-.704-.782-1.116-1.89-1.116-3.178 0-1.3.412-2.405 1.116-3.182.705-.777 1.7-1.244 2.977-1.244zm13.266.224h2.891c.534 0 .972.16 1.268.417.295.257.47.606.47 1.11 0 .49-.174.836-.47 1.092-.296.256-.734.416-1.268.416h-2.89Zm57.653 0h2.897c.532 0 .97.16 1.266.417.295.256.471.606.473 1.107v.004c0 .489-.177.834-.473 1.09-.297.257-.735.417-1.266.417h-2.897zm-12.357 1.338 1.644 4.504h-3.283zM22.388 66.45h8.081a8.904 8.904 0 0 1-.004.097v.003a14.563 14.563 0 0 1-2.285 7.275v.002l-.058.091a2.984 2.984 0 0 1-.105.157l-.007.01-.006.01c-.05.078-.087.136-.116.174l-.01.014-.049.07a15.238 15.238 0 0 1-1.257 1.552l-.068.07-5.711-5.688.097-.105.005-.006.008-.008a6.623 6.623 0 0 0 1.475-3.55v-.006c.005-.054.006-.108.01-.163zm-21.357.614h8.186c.078.442.2.873.364 1.29L2.566 72.56c-.039-.076-.077-.147-.105-.205v-.002l-.037-.074-.004-.008-.106-.228-.004-.01-.004-.008-.04-.093v-.002c-.035-.079-.068-.145-.092-.201v-.002l-.002-.004c-.017-.04-.042-.099-.073-.167a1.49 1.49 0 0 0-.043-.1l-.006-.018c-.028-.087-.059-.158-.081-.215l-.004-.014-.04-.112-.005-.01a3.166 3.166 0 0 1-.083-.219l-.004-.015-.03-.076a15.06 15.06 0 0 1-.656-2.68l-.002-.008-.004-.03a7.465 7.465 0 0 1-.04-.305c0-.066-.003-.089-.004-.025l-.002-.022c-.011-.125-.027-.232-.035-.325l-.002-.021v-.026zm9.267 2.736c.032.045.062.09.095.134l.002.004.002.002c.053.068.107.14.169.217.036.045.075.088.112.132l-5.715 5.686-.014-.014c-.033-.04-.007-.007.01.018l-.017-.025v-.002l-.016-.024-.05-.046a.461.461 0 0 1-.05-.056l-.003-.002-.001-.002c-.073-.087-.131-.143-.163-.18a2.94 2.94 0 0 0-.068-.078l-.004-.004-.004-.006c-.454-.512-.817-1.041-1.209-1.606Zm1.59 1.555c.106.075.215.146.325.215l-3.075 7.432-.026.06c-.071-.036-.147-.068-.217-.105l-.015-.007-.01-.004-.008-.004c-.092-.051-.172-.092-.234-.128l-.014-.008L8.6 78.8a2.022 2.022 0 0 1-.107-.058l-.002-.002c-.043-.025-.087-.048-.132-.072l-.015-.01-.025-.013-.17-.1c-.073-.053-.083-.059-.028-.016l-.015-.012-.006-.004-.022-.013c-.4-.245-.787-.503-1.16-.78l-.008-.007-.004-.004h-.002a13.553 13.553 0 0 1-.258-.2l-.003-.001-.005-.002c-.09-.07-.178-.142-.267-.213l-.004-.002-.044-.043-.016-.011c-.06-.049-.119-.101-.178-.152Zm6.833.496 4.138 6.83.05.083-.08.042-.015.008-.015.01c-.074.045-.136.085-.177.104l-.008.004-.006.002a14.715 14.715 0 0 1-3.538 1.314l-.012.002-.01.004a2.37 2.37 0 0 1-.25.056l-.017.002-.018.004c-.039.01-.082.017-.133.027l-.153.03-.008.001c-.068.015-.146.028-.23.045h-.018l-.04.007a14.61 14.61 0 0 1-2.447.202h-.07a5.776 5.776 0 0 1-.282-.006h-.024l-.17-.004-.037-.002-.126-.005-.017-.002h-.02c-.057 0-.13-.008-.234-.014h-.027l-.06-.004c-.115-.01-.213-.015-.297-.023l-.043-.01-.042-.002a2.813 2.813 0 0 1-.206-.02h-.002l-.14-.015-.001-.002-.112-.015a14.843 14.843 0 0 1-3.008-.715l.021.01a2.53 2.53 0 0 0-.16-.062l-.008-.002-.084-.033.039-.097 3.037-7.335c.052.018.096.033.163.052a6.68 6.68 0 0 0 1.9.28h.003c1.045 0 2.062-.282 2.994-.751zm2.665 1.296 3.945 3.925c-.285.244-.567.495-.866.713-.063.045-.128.087-.192.132zM72.93 74.58v5.498h.248l1.132-.001V74.58zm4.097 0v5.496h1.38v-3.063l2.248 3.066h.126l1.099-.002V74.58H80.5v2.962l-2.194-2.962zm7.57 0v5.498h.248l1.13-.001V74.58zm10.59 0v5.498h.249l1.13-.001V74.58zm5.63 0-2.17 5.498h1.54l.367-.965h1.963l.37.965h1.537l-2.172-5.498zm11.685 0v5.498h.248l1.132-.001V74.58zm3.461 0 2.173 5.498h1.432l2.172-5.498h-1.539l-1.348 3.588-1.351-3.588zm7.851 0v5.498h.248l3.69-.001V78.81h-2.562v-.9h2.51v-1.27h-2.508v-.79h2.56v-1.27zm-35.44.004v1.27h1.521v4.224h1.374v-4.224h1.524v-1.27zm17.314 0v1.27h1.521v4.224h1.374v-4.224h1.524v-1.27zm-32.262.493h.388v4.503l-.388.002zm4.097 0h.535l2.938 3.967v-3.967h.388v4.505h-.477L77.911 75.5v4.081h-.388zm7.57 0h.386v4.503l-.386.002zm10.591 0h.386v4.503l-.386.002zm5.471 0h.355l-.206.544-1.03 2.717h2.524l-1.238-3.261h.355l1.779 4.505h-.465l-.37-.965h-2.648l-.366.965h-.469zm11.843 0h.388v4.503l-.388.002zm3.694 0h.467l1.692 4.498 1.694-4.498h.467l-1.781 4.505h-.758zm7.618 0h2.946v.279h-2.56v1.78h2.507v.28h-2.51v1.891h2.563v.273l-2.946.002zm-35.44.003h3.426v.278h-1.523v4.224h-.382v-4.224h-1.52zm17.314 0h3.426v.278h-1.523v4.224h-.382v-4.224h-1.52zm-4.65 1.328.545 1.434h-1.087z"/>
</svg>);
}