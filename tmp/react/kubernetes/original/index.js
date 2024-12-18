const React = require("react");
module.exports = function KubernetesOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M63.556 1.912a8.51 8.44 0 0 0-3.26.826L15.795 24a8.51 8.44 0 0 0-4.604 5.725L.214 77.485a8.51 8.44 0 0 0 1.155 6.47 8.51 8.44 0 0 0 .484.672l30.8 38.296a8.51 8.44 0 0 0 6.653 3.176l49.394-.012a8.51 8.44 0 0 0 6.653-3.17l30.789-38.301a8.51 8.44 0 0 0 1.645-7.142l-10.996-47.76a8.51 8.44 0 0 0-4.604-5.726L67.682 2.738a8.51 8.44 0 0 0-4.126-.826z" fill="#326ce5"/>
	<path d="M63.975 18.143v.01c-1.472.014-2.664 1.336-2.664 2.972 0 .028.005.052.005.074-.002.222-.012.49-.005.684.035.946.24 1.668.365 2.535.17 1.42.215 2.547.224 3.687l.036-.164a40.909 40.909 0 0 0-.118-2.394c.139 1.228.24 2.364.186 3.392-.015-.325-.061-.677-.066-.982l-.036.164c.003.347.096.79.069 1.123-.061.29-.291.495-.467.742l-.025.121c.173-.227.354-.444.46-.699-.134.423-.42.796-.707 1.094.08-.124.146-.262.24-.385l.026-.12c-.145.203-.227.457-.385.61l-.006.006-.064 1.12a34.702 34.702 0 0 0-4.797.736 34.279 34.279 0 0 0-17.398 9.935c-.296-.202-.8-.56-.95-.672l-.005-.005-.01.002c-.478.064-.95.207-1.57-.153-1.187-.8-2.271-1.907-3.584-3.24-.601-.637-1.037-1.246-1.754-1.861-.163-.141-.41-.33-.592-.473a3.193 3.193 0 0 0-1.87-.705c-.825-.028-1.62.294-2.14.947-.925 1.16-.628 2.933.658 3.96l.04.026c.174.143.39.326.552.446.762.561 1.457.849 2.21 1.293 1.594.984 2.91 1.798 3.956 2.779.402.427.474 1.19.53 1.525v.008l.847.754c-4.561 6.874-6.675 15.36-5.432 24.006l-1.103.324-.004.006c-.295.381-.712.972-1.135 1.147-1.366.43-2.908.588-4.77.783-.872.073-1.626.031-2.556.207-.205.04-.49.112-.713.164l-.023.006-.04.011c-1.58.383-2.6 1.837-2.27 3.272.327 1.435 1.873 2.306 3.464 1.963l.039-.006h.002c.02-.005.038-.015.05-.018.22-.048.496-.101.69-.154.913-.245 1.574-.603 2.393-.916 1.76-.632 3.218-1.16 4.637-1.365.582-.046 1.204.362 1.517.537l.008.004 1.152-.197c2.674 8.274 8.266 14.96 15.346 19.162l-.48 1.152.003.01c.174.45.364 1.057.237 1.492-.516 1.336-1.4 2.749-2.408 4.326-.488.728-.99 1.295-1.43 2.131-.107.201-.24.507-.342.717-.69 1.475-.184 3.177 1.143 3.816 1.335.643 2.99-.036 3.707-1.513l.007-.008v-.01c.1-.207.242-.478.329-.674.378-.866.505-1.607.77-2.441h-.003c.706-1.773 1.094-3.627 2.059-4.778.26-.31.688-.432 1.136-.552l.01-.004.6-1.084a34.436 34.436 0 0 0 24.556.062c.172.303.478.865.563 1.01l.004.006.008.004c.458.149.948.223 1.35.816.722 1.237 1.218 2.703 1.822 4.475.265.832.397 1.575.775 2.441.087.2.23.475.33.684.715 1.482 2.375 2.163 3.713 1.52 1.326-.64 1.832-2.34 1.143-3.815-.102-.21-.243-.518-.348-.719-.441-.836-.943-1.397-1.43-2.125-1.01-1.577-1.843-2.885-2.36-4.222-.213-.685.036-1.104.206-1.555l.006-.014-.01-.01a.834.834 0 0 1-.09-.168 6.23 6.23 0 0 1-.12-.29c-.08-.21-.16-.442-.224-.596 7.358-4.35 12.786-11.285 15.34-19.295.347.054.93.155 1.12.193l.01.002.009-.004c.402-.265.76-.606 1.475-.549 1.419.205 2.876.734 4.638 1.366.817.312 1.479.677 2.393.921.194.052.47.101.69.149.012.003.029.012.05.017h.002l.04.004c1.59.341 3.137-.528 3.464-1.963.327-1.435-.691-2.888-2.272-3.269-.227-.052-.551-.141-.775-.184-.93-.176-1.683-.132-2.557-.205-1.86-.195-3.402-.353-4.77-.783-.547-.213-.942-.872-1.138-1.148l-.006-.006-1.066-.31a34.42 34.42 0 0 0-.56-12.425 34.497 34.497 0 0 0-4.983-11.525c.278-.252.785-.701.932-.836l.007-.006v-.01c.044-.48.006-.97.495-1.494 1.045-.98 2.364-1.797 3.957-2.779.754-.444 1.454-.731 2.214-1.293.174-.128.408-.328.588-.473 1.286-1.026 1.584-2.798.658-3.959-.925-1.16-2.718-1.267-4.003-.242-.182.145-.43.332-.594.473-.717.618-1.16 1.226-1.76 1.863-1.313 1.335-2.398 2.446-3.586 3.246-.507.294-1.258.193-1.603.172h-.008l-1.004.719c-5.775-6.048-13.63-9.916-22.09-10.672a63.543 63.543 0 0 1-.064-1.174v-.008l-.006-.006c-.35-.333-.76-.61-.864-1.318v-.002c-.115-1.428.077-2.967.3-4.824.125-.867.332-1.59.366-2.535.009-.216-.005-.527-.005-.758 0-1.645-1.203-2.982-2.688-2.982zm-3.514 13.7a34.663 34.663 0 0 0-3.59.552 34.618 34.618 0 0 1 3.59-.551zm-4.781.823a34.262 34.262 0 0 0-3.711 1.133 34.208 34.208 0 0 1 3.71-1.133zm-4.825 1.564a34.262 34.262 0 0 0-3.496 1.666 34.216 34.216 0 0 1 3.496-1.666zM28.8 35.377c.142.02.28.048.418.086a3.168 3.168 0 0 0-.418-.086zm.943.283c.132.064.259.137.38.219a3.168 3.168 0 0 0-.38-.219zm16.549.848a34.262 34.262 0 0 0-3.176 2.14 34.228 34.228 0 0 1 3.176-2.14zm14.346 2.344-.787 13.93-.057.029-.002.013c-.002.05-.014.095-.02.143a2.348 2.348 0 0 1-.263.857c-.038.07-.076.141-.121.207a2.348 2.348 0 0 1-.69.662c-.07.045-.147.08-.222.118a2.348 2.348 0 0 1-.873.226c-.045.003-.088.014-.133.014-.05 0-.094-.022-.143-.026a2.334 2.334 0 0 1-.943-.304c-.045-.026-.094-.041-.137-.069l-.006.022.004-.022c-.044-.027-.102-.016-.144-.047l-.012-.01-.022.014-11.421-8.097c.093-.091.192-.174.287-.264a27.438 27.438 0 0 1 3.23-2.635c.237-.165.473-.332.715-.49a27.438 27.438 0 0 1 3.816-2.078c.24-.107.487-.204.73-.305a27.438 27.438 0 0 1 4.044-1.312c.12-.03.238-.067.36-.094.576-.13 1.162-.206 1.745-.299l.006-.025a28.076 28.076 0 0 1 .004 0l-.006.025c.355-.056.704-.14 1.06-.183zm6.726.002c.197.024.39.068.586.097a27.668 27.668 0 0 1 3.16.656c.412.111.82.23 1.225.36a27.668 27.668 0 0 1 3.033 1.168c.375.17.745.348 1.112.535a27.668 27.668 0 0 1 2.83 1.662c.344.23.68.47 1.015.717a27.668 27.668 0 0 1 2.496 2.074c.144.134.297.257.438.395l-11.346 8.044-.04-.015-.01.008c-.045.032-.094.045-.14.074a2.35 2.35 0 0 1-.882.334c-.077.012-.153.03-.23.033a2.35 2.35 0 0 1-.99-.176 2.34 2.34 0 0 1-.265-.127 2.35 2.35 0 0 1-.746-.65c-.05-.069-.088-.146-.13-.22a2.35 2.35 0 0 1-.288-.887c-.006-.055-.026-.103-.03-.159v-.011l-.011-.006zm-25.238.576a34.262 34.262 0 0 0-2.81 2.576 34.228 34.228 0 0 1 2.81-2.576zm50.916 8.14a34.483 34.483 0 0 1 1.522 2.594 34.478 34.478 0 0 0-1.522-2.594zm1.994 3.508c.488.993.927 2.01 1.317 3.045a34.478 34.478 0 0 0-1.317-3.045zm-54.576.69 10.43 9.328-.012.056.01.008c.94.817 1.07 2.23.293 3.203-.028.035-.068.057-.098.09a2.348 2.348 0 0 1-.986.65c-.043.015-.078.043-.121.055l-.014.002-.012.047-13.367 3.86c-.02-.185-.02-.37-.037-.555a27.432 27.432 0 0 1-.092-3.344c.013-.387.033-.773.063-1.158a27.432 27.432 0 0 1 .457-3.307c.08-.407.173-.812.273-1.215a27.432 27.432 0 0 1 .99-3.162c.14-.37.29-.734.448-1.097a27.432 27.432 0 0 1 1.51-2.987c.09-.156.17-.32.265-.474zm47.002.007c.097.158.176.324.27.483a27.774 27.774 0 0 1 1.53 3.01c.15.346.298.694.434 1.046a27.774 27.774 0 0 1 1.04 3.288c.045.175.104.346.144.523.69 3.002.86 5.999.578 8.896l-13.434-3.87-.011-.057-.014-.004c-.045-.012-.084-.034-.127-.049a2.35 2.35 0 0 1-.79-.455c-.058-.052-.116-.103-.17-.16a2.35 2.35 0 0 1-.491-.824c-.027-.078-.044-.158-.063-.239a2.35 2.35 0 0 1-.03-.892c.009-.049.01-.096.02-.145.01-.045.038-.084.05-.129a2.329 2.329 0 0 1 .599-.996c.034-.033.054-.076.09-.107l.01-.01-.006-.03 10.37-9.279zm9.228 3.305c.332.965.619 1.945.864 2.938a34.478 34.478 0 0 0-.864-2.938zm-34.824 6.752h4.262l2.65 3.314-.95 4.133-3.83 1.84-3.837-1.848-.953-4.132zm13.727 11.395c.18-.01.357.008.533.04l.014.003.023-.03 13.828 2.338c-.064.18-.147.351-.215.53a27.466 27.466 0 0 1-1.36 3.011c-.19.363-.386.721-.593 1.074a27.466 27.466 0 0 1-1.853 2.768c-.243.32-.492.633-.748.941a27.466 27.466 0 0 1-2.29 2.432c-.29.274-.588.54-.892.8a27.466 27.466 0 0 1-2.64 2.012c-.16.107-.31.225-.471.329l-5.365-12.967.015-.022-.004-.011c-.02-.045-.026-.092-.043-.137a2.351 2.351 0 0 1-.135-.889c.004-.081.006-.162.018-.242a2.351 2.351 0 0 1 .334-.89c.045-.072.098-.137.15-.204a2.351 2.351 0 0 1 .68-.578c.043-.024.079-.055.123-.076.289-.139.59-.218.89-.232zm-23.31.056.013.002c.03 0 .06.008.092.01a2.349 2.349 0 0 1 1.226.445c.07.05.133.101.196.158a2.349 2.349 0 0 1 .689 1.106c.008.03.022.059.03.09.11.479.065.98-.13 1.431l-.005.012.04.05-5.31 12.837c-.155-.1-.3-.212-.451-.315a27.58 27.58 0 0 1-2.64-2.011 27.508 27.508 0 0 1-.891-.803 27.58 27.58 0 0 1-2.272-2.408c-.26-.312-.513-.629-.76-.951a27.58 27.58 0 0 1-1.82-2.704 27.294 27.294 0 0 1-.627-1.123 27.58 27.58 0 0 1-1.346-2.947c-.07-.181-.154-.356-.22-.539l13.707-2.326.023.03.014-.005c.147-.027.294-.04.443-.039zm2.304 1.994a2.326 2.326 0 0 1 .02.344 2.286 2.286 0 0 0-.02-.344zm-.008.703a2.326 2.326 0 0 1-.1.4c.046-.13.077-.264.1-.4zm9.334 2.944c.058-.002.114.013.172.015a2.32 2.32 0 0 1 .752.159c.054.021.112.03.164.056v.002a2.31 2.31 0 0 1 1.043.99l.006.012h.053l6.757 12.213c-.276.092-.557.173-.836.256a28.056 28.056 0 0 1-.996.277c-.283.074-.564.15-.85.215-.124.029-.25.046-.376.072a27.542 27.542 0 0 1-4.18.561c-.28.016-.558.035-.838.043a27.542 27.542 0 0 1-4.32-.223c-.28-.036-.56-.085-.838-.13a27.542 27.542 0 0 1-4.055-.975c-.127-.041-.257-.072-.384-.115l6.742-12.188h.01l.007-.012c.026-.048.065-.085.094-.13a2.351 2.351 0 0 1 .606-.647c.083-.06.168-.115.26-.164a2.351 2.351 0 0 1 .85-.262c.054-.005.103-.023.157-.025zM52.297 98.69a34.413 34.413 0 0 0 3.758 1.137 34.352 34.352 0 0 1-3.758-1.137zm23.385.09c-1.07.381-2.156.709-3.258.983a34.56 34.56 0 0 0 3.258-.983zm-4.575 1.281a34.399 34.399 0 0 1-3.718.563 34.413 34.413 0 0 0 3.718-.563zm-13.937.016a34.413 34.413 0 0 0 3.898.572 34.358 34.358 0 0 1-3.898-.572zm8.91.649a34.36 34.36 0 0 1-3.851.005 34.413 34.413 0 0 0 3.85-.005z" fill="#fff"/>
</svg>);
}