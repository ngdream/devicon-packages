const React = require("react");
module.exports = function AmazonwebservicesLineWordmarkIcon({size = "1em", color = "#f90", ...props}){
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
	<path d="M108.586 25.648c-1.889 0-3.708.216-5.445.737-1.733.518-3.225 1.266-4.536 2.267l-.003.002a11.33 11.33 0 0 0-3.164 3.608c-.802 1.428-1.2 3.077-1.2 4.918 0 2.296.758 4.473 2.205 6.404 1.47 2.007 3.846 3.481 6.985 4.47h.002l6.105 1.897c2.023.663 3.396 1.378 4.04 2.057.676.716 1 1.528 1 2.601 0 1.58-.649 2.73-1.964 3.58-1.31.848-3.278 1.311-5.873 1.311-1.652 0-3.258-.165-4.91-.494h-.004a22.608 22.608 0 0 1-4.53-1.444l-.007-.003-.008-.004c-.407-.163-.773-.328-1.072-.426l-.008-.002a2.862 2.862 0 0 0-.912-.154h-.002c-.428 0-.862.176-1.12.52-.26.343-.349.78-.349 1.284v2.15c.002.476.103.947.297 1.382.25.563.788 1.001 1.514 1.41 1.172.672 2.842 1.227 4.97 1.736 2.145.513 4.377.772 6.602.772 2.196 0 4.227-.304 6.17-.905 1.85-.564 3.469-1.347 4.832-2.443l.002-.002c1.364-1.057 2.42-2.379 3.207-3.867l.004-.004.002-.006c.75-1.503 1.147-3.224 1.147-5.106 0-2.284-.67-4.383-2.04-6.195-1.39-1.842-3.675-3.23-6.769-4.219l-5.98-1.894c-2.191-.7-3.7-1.5-4.442-2.203-.747-.71-1.105-1.564-1.105-2.625 0-1.597.56-2.601 1.74-3.319l.002-.002c1.181-.725 2.99-1.105 5.336-1.105 2.927 0 5.547.535 7.879 1.596l-.006-.004c.744.35 1.305.556 1.81.556.439 0 .874-.2 1.127-.55.253-.352.342-.792.342-1.297v-1.98c0-.656-.144-1.228-.474-1.677-.318-.473-.799-.844-1.418-1.197-.473-.283-1.085-.541-1.86-.8h-.002l-.004-.003a32.992 32.992 0 0 0-2.433-.685l-.012-.004-.014-.002c-.886-.168-1.78-.339-2.767-.465a21.856 21.856 0 0 0-2.883-.172zm-86.818.082c-2.35 0-4.58.257-6.688.815l-.004.002c-2.09.512-3.895 1.155-5.41 1.935-.628.317-1.074.64-1.357 1.036v.002c-.332.464-.387 1.049-.387 1.765v2.063c0 .496.071.918.307 1.263.235.346.661.541 1.076.541.253 0 .497-.056.808-.142l.002-.002.004-.002a13.5 13.5 0 0 0 1.516-.56l.015-.007a32.912 32.912 0 0 1 4.463-1.406h.004a18.675 18.675 0 0 1 4.43-.533c3.174 0 5.304.63 6.512 1.795 1.161 1.163 1.832 3.25 1.832 6.377v2.469c-1.462-.323-2.89-.63-4.278-.817-1.573-.212-3.068-.34-4.527-.34-4.424 0-7.97 1.126-10.64 3.407-2.676 2.276-4.008 5.355-4.008 9.05 0 3.472 1.102 6.325 3.263 8.444 2.17 2.12 5.141 3.174 8.772 3.174 4.856 0 8.96-1.888 12.246-5.49a34.62 34.62 0 0 0 1.004 1.911l.006.008.003.008c.46.733.985 1.42 1.573 2.055l.015.015.018.016c.477.43 1.012.719 1.6.719.461 0 .927-.17 1.369-.461v-.002l2.668-1.78.013-.01c.616-.472.996-1.037.996-1.657v-.008a2.36 2.36 0 0 0-.373-1.23l.02.032a21.97 21.97 0 0 1-1.31-2.947v-.004c-.273-.85-.442-2.071-.442-3.593v-.5h-.086V40c0-4.718-1.206-8.325-3.643-10.717v-.002l-.002-.002c-2.486-2.394-6.297-3.549-11.38-3.549Zm86.822.918h.004c.92-.005 1.84.049 2.752.164a44.14 44.14 0 0 1 2.685.452 31.7 31.7 0 0 1 2.362.664h-.006c.739.247 1.301.488 1.672.71l.004.005.006.002c.554.315.909.616 1.091.892l.008.012.01.012c.172.229.28.572.28 1.091v1.98c0 .38-.08.612-.153.714-.073.101-.122.135-.316.135-.166 0-.701-.139-1.385-.461l-.002-.002h-.004c-2.474-1.126-5.244-1.686-8.293-1.686-2.45 0-4.429.376-5.857 1.252-1.439.875-2.221 2.318-2.221 4.174 0 1.299.485 2.466 1.418 3.351.946.897 2.557 1.704 4.826 2.43l5.979 1.895c2.97.949 5.06 2.255 6.277 3.867 1.241 1.642 1.836 3.502 1.836 5.594 0 1.74-.364 3.3-1.041 4.656v.002c-.728 1.374-1.693 2.574-2.934 3.535l-.002.004-.004.002c-1.245 1.002-2.741 1.734-4.504 2.271h-.002v.002c-1.846.571-3.773.86-5.876.86a27.48 27.48 0 0 1-6.368-.744c-2.083-.499-3.692-1.048-4.709-1.631h-.002l-.002-.002c-.623-.35-1.005-.75-1.091-.946v-.002a2.42 2.42 0 0 1-.212-.976v-2.149c0-.377.078-.593.145-.681.066-.088.12-.123.322-.123.203.001.404.035.596.101l.004.002h.004c.197.065.582.233 1.006.403 0 0 .002 0 .003.002l.012.003a23.611 23.611 0 0 0 4.719 1.502h.002c1.713.342 3.39.514 5.11.514 2.71 0 4.866-.468 6.415-1.47 1.552-1.003 2.42-2.548 2.42-4.42 0-1.288-.436-2.404-1.273-3.29-.872-.92-2.365-1.636-4.461-2.322l-.004-.002-6.11-1.896c-3.005-.948-5.176-2.329-6.478-4.11l-.002-.002-.002-.004c-1.333-1.778-2.006-3.726-2.006-5.804 0-1.699.36-3.165 1.072-4.432h.002v-.002a10.326 10.326 0 0 1 2.891-3.293l.004-.002.002-.004c1.212-.927 2.585-1.616 4.219-2.105 1.627-.488 3.348-.694 5.162-.694zm-86.822.082c4.932 0 8.453 1.119 10.687 3.27 2.193 2.156 3.338 5.454 3.338 10v14.14h.148c.038 1.327.147 2.532.426 3.403l.004.01.002.008c.382 1.065.842 2.1 1.377 3.097l.01.016.01.017c.134.21.207.454.213.704-.001.214-.13.495-.602.859l-.002.002-2.625 1.75c-.315.207-.61.295-.816.295-.252 0-.558-.137-.916-.455a12.77 12.77 0 0 1-1.442-1.881 33.668 33.668 0 0 1-1.275-2.434l-.332-.7-.502.59c-3.202 3.78-7.158 5.638-11.998 5.638-3.44 0-6.11-.97-8.073-2.889-1.965-1.927-2.963-4.465-2.963-7.729 0-3.46 1.19-6.193 3.657-8.29h.002c2.462-2.104 5.734-3.167 9.99-3.167 1.4 0 2.852.124 4.395.332 1.535.208 3.12.54 4.798.918l.612.137v-3.7c0-3.27-.683-5.643-2.127-7.087l-.004-.002-.002-.004c-1.494-1.443-3.904-2.078-7.211-2.078-1.573 0-3.14.188-4.668.56-1.57.375-3.11.862-4.611 1.456l-.008.002-.008.004a12.65 12.65 0 0 1-1.414.525c-.274.075-.452.105-.533.105-.176 0-.192-.017-.25-.103-.059-.086-.133-.316-.133-.701v-2.063c0-.635.11-1.058.201-1.185.136-.19.448-.45.996-.727l.002-.002h.002c1.428-.735 3.16-1.356 5.194-1.853l.005-.002.004-.002c2.014-.535 4.162-.784 6.442-.784zm19.58.012c-.432 0-.844.134-1.123.43-.28.296-.39.702-.39 1.121 0 .442.148.975.401 1.83l9.895 32.553.002.002c.263.83.54 1.477 1.055 1.87.468.404 1.103.542 1.906.542h3.62c.814 0 1.511-.106 2.013-.547.479-.415.737-1.054.957-1.937l.002-.004 6-25.09 6.035 25.113c.181.908.498 1.56.96 1.963h.003v.002c.483.419 1.156.543 2.011.543h3.622c.79 0 1.436-.174 1.896-.522v-.002c.506-.377.8-1.01 1.066-1.894v.006l10.139-32.53c.177-.484.268-.853.316-1.138.042-.245.094-.482.094-.76 0-.446-.13-.865-.428-1.152-.297-.288-.706-.399-1.127-.399H86.36c-.83 0-1.482.173-1.945.524l-.012.007-.011.01c-.442.377-.73.993-.995 1.88l-.002.007-6.783 26.262-6.187-26.24.002.013c-.179-.86-.466-1.528-.98-1.92-.485-.419-1.15-.543-1.993-.543h-3.367c-.83 0-1.508.166-1.986.524-.52.388-.764 1.038-.983 1.92l-.002.002-6.101 25.888-6.577-25.906-.003-.014c-.253-.809-.48-1.448-.998-1.853-.464-.446-1.126-.56-1.963-.56h-3.625zm0 1h4.125c.748 0 1.161.147 1.29.278l.026.025.03.021c.13.097.418.614.66 1.383l7.068 27.856.973-.01 6.568-27.875v.006c.197-.798.46-1.248.61-1.36v-.002c.201-.15.703-.322 1.388-.322h3.367c.748 0 1.166.134 1.352.299l.017.014.016.011c.147.11.458.61.61 1.342l.001.006 6.655 28.217.97.012 7.282-28.196c.233-.786.533-1.26.68-1.388.212-.157.648-.317 1.323-.317h3.914c.256 0 .373.059.434.117.061.06.121.165.121.434 0 .142-.035.329-.08.592-.038.222-.11.527-.27.963l-.003.011-10.153 32.565v.002c-.24.795-.533 1.256-.707 1.385h-.002l-.002.002c-.211.16-.657.32-1.295.32h-3.62c-.747 0-1.165-.134-1.356-.299-.218-.19-.485-.633-.639-1.404l-.002-.01-6.53-27.17h-.972l-6.484 27.113c-.2.803-.442 1.255-.64 1.426l-.003.002-.002.002c-.173.152-.65.297-1.353.297h-3.621c-.703 0-1.066-.118-1.268-.297l-.013-.014-.018-.011c-.154-.115-.466-.63-.707-1.387l-.002-.006-9.89-32.537-.003-.004c-.245-.828-.357-1.39-.357-1.541 0-.253.06-.372.117-.434.058-.06.15-.117.395-.117zM21.64 46.996c-2.885 0-5.074.556-6.592 1.797-1.503 1.231-2.244 3.014-2.244 5.227 0 2.058.538 3.691 1.703 4.814 1.124 1.164 2.754 1.709 4.775 1.709 1.448 0 2.937-.265 4.494-.783h.002c1.605-.538 3.026-1.519 4.213-2.836l.006-.006.004-.006c.709-.844 1.261-1.798 1.533-2.895v-.002c.264-1.053.438-2.311.438-3.785v-2.158l-.381-.094a34.955 34.955 0 0 0-3.93-.728 32.304 32.304 0 0 0-4.021-.254Zm0 1c1.303 0 2.603.083 3.896.246 1.156.147 2.3.374 3.436.639v1.35c0 1.395-.165 2.572-.409 3.542v.002c-.228.922-.692 1.735-1.326 2.49l-.002.003c-1.084 1.2-2.353 2.066-3.775 2.543-1.474.49-2.852.732-4.178.732-1.85 0-3.16-.472-4.06-1.406l-.008-.006-.008-.008c-.936-.897-1.402-2.208-1.402-4.103 0-2 .608-3.413 1.879-4.454 1.264-1.032 3.202-1.57 5.957-1.57zm96.351 24.852c-4.5.064-9.82 1.056-13.9 3.923l-.002.002-.004.002c-.708.512-1.115 1.165-.996 1.834.06.335.288.641.597.805.31.164.68.207 1.09.156 2.253-.273 5.85-.703 9.082-.78 1.617-.04 3.143.012 4.342.204 1.2.193 2.04.561 2.33.934v.002l.002.002c.283.356.43 1.254.307 2.46-.124 1.208-.472 2.698-.93 4.255-.916 3.113-2.268 6.493-3.111 8.576v.002h-.002c-.154.384-.206.753-.125 1.094.08.34.319.638.627.78.615.287 1.35.058 2.011-.505l.002-.002c3.819-3.212 6.18-8.103 7.42-12.438.62-2.167.958-4.197 1.045-5.828.044-.815.024-1.53-.06-2.125-.084-.595-.213-1.073-.506-1.44l-.002-.001-.002-.002c-.29-.353-.718-.59-1.274-.817-.555-.226-1.242-.423-2.043-.59-1.6-.332-3.647-.536-5.898-.503zm.016 1c2.181-.032 4.165.167 5.678.482.756.157 1.394.343 1.87.537.475.193.783.412.874.522.086.108.227.448.298.95.072.504.092 1.166.051 1.934-.082 1.537-.406 3.505-1.008 5.606-1.202 4.202-3.515 8.93-7.105 11.95l-.002.001c-.475.405-.855.405-.943.363-.045-.02-.056-.024-.075-.103-.018-.079-.018-.246.08-.492h-.001c.844-2.087 2.208-5.487 3.144-8.668.468-1.59.831-3.125.965-4.436.134-1.31.083-2.423-.518-3.181-.595-.762-1.657-1.099-2.957-1.307-1.301-.209-2.874-.255-4.525-.215-3.303.08-6.925.514-9.18.787h-.002c-.264.033-.425-.01-.496-.047-.07-.037-.073-.048-.082-.097-.017-.099.085-.475.598-.846v-.002c3.832-2.69 8.975-3.676 13.336-3.738zM1.6 75.359l-.03.004.06-.004zm-.03.004h-.002a1.55 1.55 0 0 0-1.322 1.15c-.147.603.086 1.302.68 1.839h.002c16.597 14.982 38.57 24 62.947 24 17.41 0 37.609-5.441 51.578-15.758h.002c.645-.48 1.033-1.06 1.16-1.658a2.132 2.132 0 0 0-.336-1.659c-.643-.93-2.002-1.354-3.35-.744l.012-.006c-15.466 6.542-32.296 9.73-47.593 9.73-22.685 0-44.625-6.249-62.399-16.562-.468-.277-.945-.385-1.379-.332Zm.121.992c.185-.022.436.015.748.2l.002.002h.002c17.932 10.405 40.035 16.7 62.905 16.7 15.436 0 32.383-3.21 47.982-9.808l.006-.004.006-.002c.971-.44 1.76-.108 2.115.405.178.256.25.553.18.879-.07.324-.288.697-.777 1.062h-.002v.002c-13.733 10.142-33.784 15.56-50.983 15.56-24.13 0-45.858-8.92-62.277-23.742-.386-.348-.432-.651-.381-.859.05-.208.2-.36.474-.395Z"/>
</svg>);
}