const React = require("react");
module.exports = function StackoverflowLineWordmarkIcon({size = "1em", color = "#F58025", ...props}){
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
	<path d="m76.5.37-.4.298-7.178 5.365 25.805 34.905 7.572-5.663Zm-.205 1.387L100.92 35.07l-5.988 4.481-24.63-33.313ZM60.783 13.94l-.317.384-5.725 6.912L87.973 49.07l6.038-7.292zm.127 1.397 31.71 26.57-4.775 5.767-31.713-26.566zM48.164 31.712l-.209.45-3.775 8.154 39.2 18.362 3.984-8.602zm.479 1.318 37.411 17.525-3.153 6.805L45.49 39.837zM40.72 51.086l-.102.487-1.838 8.803 42.315 8.946 1.942-9.286zm.767 1.173 40.379 8.542-1.536 7.348-40.38-8.538zm-20.21 9.756V96.88h76.758V62.015H88.63v25.41H30.687v-25.41Zm.989.989h7.43v25.41H89.62v-25.41h7.427v32.888h-74.78Zm15.85 7.481v9.459h43.08v-9.459zm.989.99h41.101v7.48h-41.1Zm-2.644 38.674v17.34H39.1l-.008-4.415 1.413-1.422 3.592 5.837h3.217l-4.945-7.708 4.58-4.594H43.5l-4.41 4.307.007-9.345zm56.18.416c-1.279 0-2.273.475-2.91 1.198-.635.723-.917 1.66-.917 2.575v1.832l-.035-.035c-.861-.867-1.844-1.225-3.047-1.227-.87-.01-1.668.32-2.384.789v-.66h-3.772v12.456h3.84v-7.404c0-1.235.721-1.62 1.348-1.62h.019c.426-.014.833.168 1.105.497l.348.42 2.58-2.59v10.683h3.842v-9.037h2.104v-3.166h-2.104v-.76c0-.248.058-.365.114-.425.057-.06.151-.116.4-.116h1.592v-3.41h-2.12zm2.488 0v13.155c0 .914.273 1.851.908 2.575.634.723 1.63 1.198 2.921 1.198h2.116v-3.304c.22.7.525 1.33 1.043 1.876.786.834 2.072 1.56 3.888 1.56 1.816 0 3.122-.72 3.913-1.558 1.136-1.192 1.433-2.682 1.433-4.815 0-2.108-.298-3.59-1.432-4.78-.706-.754-1.89-1.336-3.418-1.467v-.1h-.494c-1.814 0-3.103.725-3.89 1.563l-.002.002c-1.134 1.191-1.43 2.675-1.43 4.784 0 1.105.096 2.024.33 2.83h-1.531c-.28 0-.37-.056-.414-.104-.044-.047-.1-.164-.1-.437v-.494h-.002v-12.484zm-57.678.574h.657l-.008 10.704 5.802-5.667h.661l-3.459 3.47 4.4 6.854h-.856l-3.963-6.436-2.583 2.604.008 3.832h-.66zm55.19.415h1.135v1.432h-.603c-.431 0-.84.132-1.118.425-.278.293-.385.693-.385 1.105v1.749h2.104v1.188H91.67v9.037h-1.865v-12.152c0-.71.222-1.412.67-1.922.45-.51 1.124-.862 2.169-.862zm3.477 0h1.86v12.484h.167c.054.213.048.45.203.616.28.3.694.42 1.136.42h.6v1.43H98.96c-1.059 0-1.73-.352-2.175-.86-.446-.509-.665-1.21-.665-1.925zm-85.38.178v12.229c0 .933.269 1.814.844 2.471.576.657 1.457 1.057 2.536 1.057h1.661v-2.413h-1.368c-.427 0-.641-.109-.786-.273-.145-.164-.248-.445-.248-.885v-5.949h1.303l2.512-2.516h-3.816v-3.721zm.99.99h.658v3.72h2.421l-.537.538h-1.88v6.938c0 .593.138 1.136.495 1.54.357.404.906.607 1.528.607h.379v.435h-.672c-.846 0-1.406-.279-1.792-.72-.385-.44-.599-1.075-.599-1.82zm41.642 2.186c-1.814 0-3.101.726-3.886 1.56l-.002.002c-1.136 1.191-1.431 2.675-1.431 4.788 0 2.132.294 3.616 1.431 4.807l.002.002c.785.834 2.072 1.557 3.886 1.557 1.819 0 3.121-.72 3.91-1.557 1.141-1.192 1.434-2.676 1.434-4.81 0-2.11-.293-3.595-1.431-4.785-.789-.838-2.093-1.563-3.913-1.563zm20.3 0c-1.599 0-3 .587-3.971 1.693-.97 1.106-1.501 2.697-1.501 4.657 0 2.412.688 4.045 1.793 5.043 1.105.997 2.56 1.323 3.986 1.323 2.161 0 3.485-.734 4.695-1.951l.352-.354-2.439-2.38-.346.346c-.686.685-1.083.933-2.24.933-.691 0-1.165-.22-1.49-.568-.219-.234-.266-.632-.346-1h6.977v-1.767c0-1.667-.477-3.159-1.417-4.243-.94-1.085-2.343-1.732-4.053-1.732zm-16.198.13.245.665 4.329 11.79h2.927l4.55-12.455H65.45l-1.946 5.992-1.965-5.992zm52.718 0 .195.64 3.62 11.815h3.071l2.033-6.12 2.035 6.12h3.068L128 115.038h-4.054l-1.52 5.839-1.933-5.84h-2.797l-1.911 5.828-1.513-5.827h-3.41zm-104.839.027c-1.286 0-2.43.33-3.273.981-.844.653-1.362 1.648-1.362 2.82 0 1.033.347 1.914 1.024 2.513.676.6 1.626.91 2.788 1.007l1.859.164c.587.052.944.2 1.138.375.194.174.288.389.288.786 0 .525-.178.827-.578 1.083-.4.255-1.063.419-1.932.419-1.308 0-2.357-.327-3.142-1.154l-.352-.369L0 125.506l.361.35c1.336 1.293 2.992 1.768 4.966 1.768 1.438 0 2.685-.327 3.602-.997.916-.67 1.47-1.708 1.47-2.939 0-1.161-.402-2.061-1.101-2.633-.7-.572-1.628-.819-2.665-.916h-.002l-1.808-.159H4.82c-.65-.052-1.03-.21-1.229-.386-.199-.176-.286-.386-.286-.775 0-.45.14-.736.444-.968.305-.232.824-.398 1.577-.398 1.09 0 2.005.257 2.7.792l.343.265 1.77-1.772-.423-.346c-1.128-.92-2.681-1.327-4.363-1.327zm14.834 0v.08c-1.598.082-2.863.495-3.836 1.73l-.27.344 1.802 1.817.34-.483c.3-.424.573-.668.93-.831.357-.163.825-.246 1.507-.246.963 0 1.548.197 1.882.495.334.298.504.745.504 1.49v.587h-2.892c-1.343 0-2.441.345-3.212 1.01-.768.664-1.168 1.639-1.17 2.737a3.764 3.764 0 0 0 .971 2.637l.006.006.006.006c.812.84 1.92 1.18 3.538 1.18 1.155 0 1.989-.304 2.757-.8v.665h2.638v-8.165c0-1.327-.426-2.443-1.299-3.18-.873-.738-2.126-1.079-3.708-1.079zm11.46 0c-1.533 0-2.932.534-3.925 1.608-.993 1.073-1.561 2.655-1.561 4.675s.568 3.603 1.561 4.676 2.392 1.606 3.924 1.606c1.644 0 2.846-.511 4.072-1.836l.328-.355-1.837-1.774-.342.38c-.804.89-1.252 1.121-2.22 1.121h-.022a2.542 2.542 0 0 1-2.185-1.076v-.002h-.002c-.454-.631-.64-1.366-.64-2.74 0-1.379.185-2.111.64-2.745l.002-.002a2.542 2.542 0 0 1 2.185-1.077h.022c.976 0 1.418.21 2.214 1.098l.348.386 1.808-1.789-.328-.351c-1.216-1.301-2.41-1.803-4.04-1.803zm74.352.83h.01c1.559 0 2.577.598 3.192 1.255l.002.002.002.002c.921.966 1.16 2.074 1.16 4.098 0 2.05-.239 3.164-1.16 4.131l-.002.002c-.616.654-1.636 1.25-3.196 1.25-1.558 0-2.55-.59-3.169-1.248v-.002c-.922-.972-1.16-2.082-1.16-4.131 0-2.025.235-3.135 1.157-4.102l.002-.002.002-.002c.617-.659 1.609-1.25 3.16-1.252zm-52.627.003c1.563 0 2.578.596 3.194 1.25v.002l.002.002c.925.965 1.16 2.077 1.16 4.106 0 2.05-.235 3.158-1.16 4.125l-.002.002c-.617.655-1.63 1.25-3.194 1.25-1.559 0-2.55-.591-3.167-1.248l-.002-.002-.002-.002c-.924-.967-1.16-2.076-1.16-4.125 0-2.03.237-3.14 1.16-4.106l.002-.002.002-.002c.617-.657 1.608-1.25 3.167-1.25zm20.3 0c1.468 0 2.552.52 3.306 1.389.753.87 1.174 2.117 1.174 3.596v.778h-7.147v.495c0 .839.26 1.61.783 2.17.523.56 1.3.881 2.212.881 1.127 0 1.865-.376 2.537-.933l1.03 1.005c-.954.862-1.866 1.356-3.588 1.356-1.275 0-2.461-.29-3.324-1.069-.862-.778-1.466-2.08-1.466-4.308 0-1.783.478-3.118 1.256-4.004.778-.886 1.863-1.356 3.227-1.356zm12.05 0h.01c.835 0 1.383.216 1.94.647l-1.548 1.554c-.418-.301-.841-.63-1.366-.615-1.121.006-2.329.936-2.329 2.605v6.415h-1.86v-10.477h1.793v1.409l.8-.4.062-.066a3.353 3.353 0 0 1 2.5-1.072zm-26.832.13h1.936l2.684 8.188 2.66-8.189h1.94l-3.827 10.477h-1.544zm52.64 0h1.978l2.166 8.35 2.738-8.35h1.368l2.76 8.339 2.172-8.34h1.954l-3.186 10.477h-1.62l-2.749-8.268-2.748 8.268h-1.626zm-106.177.026h.002c1.283 0 2.366.326 3.227.846l-.358.358c-.84-.515-1.816-.794-2.896-.794-.895 0-1.635.19-2.176.6-.54.412-.834 1.056-.834 1.755 0 .576.187 1.136.618 1.517.43.381 1.036.568 1.809.63l1.796.158c.933.088 1.665.314 2.132.696.467.382.738.917.738 1.868 0 .95-.374 1.634-1.065 2.14-.691.505-1.732.807-3.018.807-1.61 0-2.794-.39-3.84-1.22l.393-.393c.956.786 2.127 1.18 3.424 1.18.987 0 1.827-.167 2.465-.576a2.24 2.24 0 0 0 1.034-1.914c0-.59-.194-1.146-.614-1.523s-1.002-.562-1.714-.624h-.002l-1.857-.164h-.002c-1.032-.086-1.76-.358-2.216-.762-.455-.403-.692-.946-.692-1.773 0-.895.352-1.553.978-2.037s1.552-.774 2.668-.775zm26.293 0h.002c1.274 0 2.034.345 2.935 1.192l-.394.39c-.76-.703-1.54-1.097-2.533-1.099a3.536 3.536 0 0 0-3.024 1.492c-.598.836-.823 1.847-.823 3.32 0 1.467.224 2.479.823 3.313a3.536 3.536 0 0 0 3.024 1.492c1.002-.002 1.78-.414 2.543-1.125l.408.394c-.912.866-1.676 1.218-2.96 1.218-1.309 0-2.406-.433-3.198-1.29-.793-.856-1.299-2.166-1.299-4.003 0-1.836.506-3.148 1.299-4.005.792-.857 1.89-1.289 3.198-1.289zm-10.965.002h.016c1.43.003 2.43.314 3.055.843.627.53.946 1.298.946 2.425v7.176h-.659v-1.782l-.844.847c-.848.85-1.455 1.07-2.902 1.07-1.486 0-2.21-.25-2.817-.873a2.774 2.774 0 0 1-.717-1.944v-.016c0-.872.284-1.525.829-1.996.545-.471 1.392-.77 2.566-.77h3.882v-1.576c0-.908-.243-1.7-.835-2.228-.592-.528-1.446-.745-2.541-.745-.76 0-1.38.089-1.917.334-.36.164-.614.487-.889.778l-.382-.384c.811-.845 1.67-1.16 3.21-1.16zm61.954.137.004.004c-.042.042-.103.057-.143.1zm-8.963 1.092a2.63 2.63 0 0 0-2.354 1.465l-.004.01-.004.01c-.198.45-.301.935-.305 1.426l-.004.498h5.345l-.006-.5a3.614 3.614 0 0 0-.31-1.426l-.003-.01-.006-.008a2.627 2.627 0 0 0-2.35-1.465zm32.339.203a2.25 2.25 0 0 0-1.67.645l-.002.002c-.768.776-.8 1.913-.8 3.119 0 1.207.028 2.362.8 3.145l.002.002.004.004c.443.435 1.047.66 1.666.638.622.02 1.23-.202 1.68-.634l.007-.006.006-.004c.77-.783.798-1.94.798-3.145 0-1.206-.03-2.344-.8-3.119l-.004-.004-.004-.004a2.302 2.302 0 0 0-1.683-.64zm-52.639.006a2.244 2.244 0 0 0-1.662.638l-.002.002c-.775.775-.805 1.918-.805 3.124 0 1.207.027 2.364.805 3.144a2.23 2.23 0 0 0 1.666.64 2.313 2.313 0 0 0 1.683-.635l.004-.004.004-.004c.772-.78.8-1.935.8-3.141 0-1.207-.03-2.347-.8-3.123l-.004-.004-.004-.004a2.307 2.307 0 0 0-1.685-.634zm20.3.78c.616 0 1.179.355 1.456.909.072.163.078.346.114.521H72.1c.035-.174.04-.356.11-.52.276-.555.84-.909 1.46-.91zm32.314.196h.048c.356-.017.704.115.966.367.407.413.512 1.251.512 2.417 0 1.165-.11 2.03-.514 2.444a1.33 1.33 0 0 1-.968.363h-.044a1.27 1.27 0 0 1-.943-.36c-.406-.415-.514-1.28-.514-2.447s.106-2.009.514-2.421v-.002c.25-.248.59-.378.943-.361zm-52.637.004h.046c.361-.017.707.113.968.363.406.412.512 1.254.512 2.421 0 1.165-.11 2.03-.512 2.44-.26.248-.608.38-.968.364h-.048a1.244 1.244 0 0 1-.94-.36c-.408-.41-.515-1.275-.515-2.444 0-1.168.105-2.011.516-2.423v-.002c.25-.246.59-.376.94-.36zm-32.961 2.817c-.916 0-1.664.18-2.207.616-.543.436-.81 1.117-.81 1.874 0 .756.266 1.433.822 1.85.555.416 1.31.571 2.26.571.982 0 2.02-.081 2.862-.894.537-.511.724-1.3.724-2.307l-.005-1.71zm0 .99h2.66l.002.722c0 .875-.181 1.367-.415 1.59h-.002l-.002.002c-.583.565-1.24.618-2.178.618-.836 0-1.376-.154-1.667-.373-.292-.218-.425-.504-.425-1.058 0-.55.145-.868.438-1.104.294-.235.807-.398 1.588-.398z"/>
</svg>);
}