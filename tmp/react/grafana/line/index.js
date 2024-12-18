const React = require("react");
module.exports = function GrafanaLineIcon({size = "1em", color = "#f7a525", ...props}){
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
	<path d="m69.11 0-.233.151C58.907 6.59 56.992 15.2 56.992 15.2l-.011.054v.054c-.473.115-.889.26-1.238.33l-.02.004-.018.005c-.717.205-1.482.421-2.26.866l.05-.025-2.163.927-.012.006c-1.416.708-2.86 1.327-4.324 2.163l-.008.004-.006.004c-1.218.75-2.463 1.448-3.72 2.291l-.04-.04-.097-.04c-13.42-5.2-25.282 1.046-25.282 1.046l-.244.13-.02.273c-1.011 13.963 5.054 22.629 6.492 24.565a77.251 77.251 0 0 1-.835 2.318l-.004.012-.003.01a53.013 53.013 0 0 0-2.158 9.878c-.109.45-.127.913-.178 1.232C8.712 67.453 5.11 79.854 5.11 79.854l-.075.259.178.203c9.935 11.44 21.384 12.464 22.096 12.518a48.961 48.961 0 0 0 5.12 7.533c.788.985 1.637 1.854 2.396 2.777-3.572 10.609.712 19.536.712 19.536l.132.27.298.011c11.226.405 18.576-4.617 20.472-6.195 1.03.293 2.08.664 3.16.959h.002a47.33 47.33 0 0 0 10.655 1.553h4.392c5.493 7.669 14.913 8.697 14.913 8.697l.246.025.169-.178c6.755-7.172 7.198-14.177 7.198-15.897v-.374c1.268-.975 2.536-1.95 3.904-3.025l.011-.008.012-.01c2.707-2.394 4.978-5.29 7.034-8.168l-.053.062c.19-.19.268-.376.347-.512a.768.768 0 0 1 .149-.191c7.655.282 12.907-4.82 12.907-4.82l.182-.179-.039-.251c-1.241-7.969-5.765-11.856-6.791-12.66l-.103-.102-.046-.047c.02-.313.079-.711.085-1.187.106-.953.106-1.793.106-2.612v-3.378a2.63 2.63 0 0 0-.127-.873l.019.087-.103-.716-.1-.701-.002-.016c-.108-.953-.31-1.776-.407-2.55l-.004-.027-.006-.027c-.83-3.426-2.177-6.745-3.842-9.555l-.002-.004-.002-.004c-1.869-3.011-4.053-5.506-6.536-7.781l-.004-.004-.004-.004c-2.489-2.178-5.291-4.047-8.216-5.3-2.998-1.343-5.914-2.176-9.03-2.49-1.485-.213-3.141-.211-4.574-.211h-2.386l-.031.003c-.824.103-1.541.206-2.258.308l-.014.002-.013.002c-3.129.626-5.945 1.775-8.443 3.232-2.517 1.468-4.705 3.45-6.575 5.632-1.875 2.188-3.238 4.493-4.18 7a23.582 23.582 0 0 0-1.57 7.528v2.682c0 .305-.003.673.128 1.071v.008c.108 1.21.306 2.35.719 3.485 0 .002 0 .004.002.006.73 2.292 1.778 4.385 3.145 6.172a20.287 20.287 0 0 0 4.614 4.406l.006.004.006.004c1.767 1.143 3.456 1.99 5.357 2.517 1.866.518 3.56.841 5.28.734h2.325c.367 0 .571-.1.613-.1.186 0 .328-.048.405-.07.078-.023.111-.033.21-.033h.08l.076-.025c.24-.08.737-.183 1.104-.303.813-.232 1.427-.642 2.047-.819l.03-.007.03-.014c.784-.336 1.33-.77 1.8-1.052l.053-.033.043-.042c-.007.006.053-.042.13-.093a2.68 2.68 0 0 0 .207-.16c.84-.567.977-1.762.308-2.565l-.016-.017-.015-.016c-.556-.555-1.481-.816-2.313-.4l-.073.036-.056.056c.006-.006.042-.023 0-.006-.043.018-.148.053-.28.119-.332.166-.904.362-1.362.583-.637.115-1.14.306-1.67.395l.082-.006c-.416 0-.724.1-.922.1h-2.558c-.108 0-.195-.09-.06.045l-.113-.112-.157-.027c-1.173-.196-2.465-.593-3.658-1.089-1.204-.603-2.377-1.29-3.338-2.252l-.008-.008-.01-.008a15.232 15.232 0 0 1-2.777-3.373c-.767-1.246-1.164-2.714-1.363-4.102-.103-.824-.196-1.488-.103-2.23l.004-.032v-1.258c0-.327.087-.698.19-1.108l.004-.015.004-.016c.596-3.28 2.189-6.463 4.665-8.84l.004-.004.004-.004c.7-.7 1.275-1.177 2.062-1.67l.018-.01.017-.013c.792-.594 1.457-.973 2.229-1.262.837-.314 1.745-.714 2.496-.903.92-.204 1.815-.399 2.55-.399.491 0 1.003-.1 1.33-.1h1.194c1.019.102 2.02.202 2.895.397h.004l.002.002c1.892.398 3.685 1.094 5.49 2.097h.002c3.5 2.002 6.498 5.005 8.29 8.589.897 1.792 1.496 3.689 1.898 5.798.092.552.102.955.2 1.477v2.738c0 .539-.092 1.044-.1 1.677-.106.65-.107 1.158-.2 1.722-.101.605-.204 1.118-.308 1.741-.187 1.019-.674 2.02-.998 3.184-.802 2.104-1.907 4.108-3.205 5.806l-.004.005-.005.006c-2.607 3.609-6.33 6.634-10.347 8.542a.078.078 0 0 0-.004.002c-2.131.913-4.236 1.707-6.406 2.003l-.01.002-.012.002a18.339 18.339 0 0 1-3.288.298H73.34c-.615 0-1.2 0-1.76-.095l-.02-.002-.021-.002c-2.41-.2-4.73-.707-7.068-1.317-2.334-.71-4.554-1.518-6.662-2.622-4.227-2.214-7.964-5.443-10.998-9.082-1.424-1.933-2.842-3.959-3.946-5.967-1.098-1.995-1.906-4.315-2.514-6.543l-.002-.012-.004-.01c-.698-2.195-1-4.505-1.102-6.83v-3.561c0-1.096.1-2.298.3-3.5l.002-.019.002-.021c.1-1.199.298-2.294.6-3.504l.007-.019.003-.02c.194-1.162.593-2.27.907-3.518.715-2.35 1.424-4.578 2.428-6.687 2.027-4.256 4.556-7.995 7.58-11.019.804-.804 1.5-1.4 2.41-2.109l.026-.019.021-.021a10.114 10.114 0 0 1 1.937-1.453c.946-.525 1.85-1.124 2.81-1.508l.02-.008.017-.01c.37-.185.893-.398 1.433-.716.204-.102.344-.176.716-.27l.052-.011.049-.025c.205-.103.347-.179.718-.271l.033-.008.031-.012c1.023-.409 2.036-.813 3.03-1.111l.042-.012.036-.02c-.015.009.118-.032.271-.057.154-.026.328-.037.548-.148-.016.009.117-.03.27-.056.153-.025.327-.036.548-.147l-.14.047c.633-.106 1.096-.223 1.639-.44l.019-.008.017-.01c-.015.008.118-.032.271-.057.105-.018.24-.061.372-.101.162-.005.306-.028.446-.05.153-.026.308-.045.329-.045.185 0 .338-.032.492-.058.153-.026.308-.045.327-.045h.062l.467-.118.399-.1a4.166 4.166 0 0 0 .381-.045c.154-.026.308-.045.328-.045.417 0 .725-.102.921-.102.184 0 .35-.031.529-.056.179-.026.37-.045.391-.045.164 0 .379-.041.616-.103h.717c.307 0 .676.006 1.076-.127l-.157.025h4.582c2.03.101 4.052.305 5.853.705l.007.002.008.002c3.744.708 7.493 1.924 10.72 3.538l.005.002.005.004c3.23 1.514 6.266 3.537 8.686 5.654l-.023-.023c.219.22.304.254.317.281l.037.074.056.056c.22.219.302.25.316.279l.058.118.11.073c.18.12.488.53.922.82.166.11.467.473.848.755.281.38.643.68.754.846l.027.04.035.036c1.102 1.102 2.113 2.314 3.03 3.435a40.581 40.581 0 0 1 4.35 6.875l.037.073.056.056c-.01-.008-.027-.045-.01-.002.017.044.053.15.12.283l.037.074.056.056c-.007-.007-.023-.043-.006 0 .017.042.052.147.118.279.021.042.078.204.151.38.073.175.16.378.35.569l-.092-.13c.021.044.076.193.127.347.052.153.1.311.18.472.022.044.077.193.128.347.052.153.1.311.18.472l-.017-.037c.41 1.024.813 2.035 1.112 3.03l.006.019.008.02c.594 1.487.896 2.884 1.208 4.03.089.357.308.624.567.832.26.207.568.364.938.364.417 0 .815-.16 1.067-.455.251-.295.348-.676.348-1.065v-.043l-.008-.043c-.299-1.694-.297-3.099-.4-4.855l-.003-.01v-.007c-.207-2.176-.62-4.654-1.237-7.433-.629-2.829-1.874-5.718-3.31-8.896l-.004-.01-.004-.007c-1.546-3.092-3.507-6.403-6.1-9.412l-.006-.006c-.996-1.195-2.075-2.28-3.143-3.437 1.705-7.167-2.238-13.394-2.238-13.394l-.138-.213-.252-.015c-6.782-.405-11.026 2.014-12.744 3.234-.076-.027-.154-.063-.229-.087a4.187 4.187 0 0 1-.344-.126l-.025-.014-.028-.01c-1.11-.403-2.342-.917-3.594-1.334l-.018-.006-.019-.004c-1.165-.29-2.392-.802-3.685-1.024l-.015-.004c-1.23-.307-2.573-.617-4.026-.825l-.035-.006h-.035a3.88 3.88 0 0 1-.362-.052C77.933 4.217 69.359.12 69.359.12Zm.071 1.156c.705.353 8.284 4.296 10.953 13.066l.107.35h.368c.196 0 .346.103.716.103l-.07-.006c1.407.201 2.72.504 3.941.81l.02.006.019.004c1.137.19 2.345.685 3.61 1.005 1.204.401 2.429.911 3.57 1.326l-.052-.023c.162.08.32.13.473.18.153.051.302.104.345.126l.269.135.244-.18c1.445-1.06 5.546-3.473 12.086-3.166.222.358 3.708 6.059 1.983 12.673l-.068.261.182.2c1.135 1.238 2.255 2.358 3.26 3.563l.003.004.002.002c2.522 2.925 4.445 6.164 5.969 9.21l.002.002c1.427 3.16 2.637 5.997 3.236 8.69.61 2.748 1.016 5.185 1.218 7.308.098 1.686.108 3.126.406 4.864 0 .225-.055.357-.11.42-.055.065-.117.11-.314.11-.039 0-.192-.048-.317-.148s-.213-.243-.227-.296v-.006l-.002-.004c-.3-1.099-.613-2.556-1.24-4.129-.314-1.045-.724-2.072-1.13-3.089l-.008-.019-.01-.017a4.247 4.247 0 0 1-.128-.347c-.051-.154-.1-.311-.18-.472a4.183 4.183 0 0 1-.128-.347c-.051-.154-.1-.312-.18-.473l-.037-.073-.056-.056a1.178 1.178 0 0 1-.136-.25c-.054-.132-.099-.278-.18-.44-.036-.073-.053-.122-.087-.207a1.024 1.024 0 0 0-.21-.331l.092.13c-.036-.072-.05-.119-.083-.204a1.021 1.021 0 0 0-.213-.337l.093.13a41.573 41.573 0 0 0-4.454-7.045l-.004-.004-.004-.004c-.924-1.128-1.958-2.37-3.105-3.517l.062.076c-.289-.434-.696-.74-.817-.92l-.054-.083-.083-.054c-.18-.12-.488-.53-.922-.82-.18-.12-.488-.53-.922-.819l.169.192c-.191-.382-.517-.553-.502-.538l.093.13c-.191-.383-.518-.555-.504-.541l-.011-.012-.012-.011c-2.49-2.18-5.591-4.244-8.908-5.8-3.319-1.66-7.137-2.899-10.96-3.623-1.885-.42-3.956-.625-6.02-.729h-4.713l-.076.026c-.213.07-.456.077-.763.077h-.798l-.075.025c-.276.092-.255.078-.459.078-.184 0-.35.03-.529.056-.179.025-.37.044-.39.044-.418 0-.726.103-.923.103-.185 0-.338.032-.492.058a4.464 4.464 0 0 1-.327.045h-.062l-.467.118-.399.1a4.166 4.166 0 0 0-.38.045 4.506 4.506 0 0 1-.328.044c-.184 0-.337.031-.49.057a4.688 4.688 0 0 1-.33.044h-.116l-.104.052c.016-.007-.118.033-.271.058-.154.026-.328.037-.548.148l.036-.018c-.48.192-.837.282-1.433.382l-.073.013-.066.033c.016-.008-.116.031-.27.056-.152.026-.326.037-.547.148.015-.008-.118.032-.271.058-.154.026-.328.037-.548.147l.077-.031c-1.052.316-2.088.73-3.112 1.139l.064-.02a4.11 4.11 0 0 0-.92.345 4.682 4.682 0 0 0-.817.306l-.018.008-.017.01c-.458.274-.931.468-1.361.681-1.087.435-2.026 1.065-2.923 1.563a10.606 10.606 0 0 0-2.157 1.619 25.087 25.087 0 0 0-2.457 2.15c-3.118 3.117-5.706 6.952-7.774 11.293-1.042 2.19-1.765 4.465-2.482 6.823l-.004.013-.002.012c-.296 1.184-.706 2.314-.922 3.583v.003c-.311 1.245-.523 2.4-.628 3.655v.004a22.55 22.55 0 0 0-.307 3.62v3.605c.103 2.375.413 4.767 1.142 7.068l.002.006c.62 2.273 1.448 4.658 2.6 6.755 1.145 2.08 2.591 4.145 4.029 6.096l.008.012.01.011c3.106 3.728 6.937 7.045 11.305 9.332 2.188 1.147 4.471 1.975 6.842 2.696l.01.002.01.004c2.362.617 4.742 1.135 7.236 1.344.657.106 1.29.105 1.894.105h1.74a19.36 19.36 0 0 0 3.46-.314c2.321-.319 4.508-1.155 6.665-2.08l.008-.004.01-.004c4.165-1.978 8.006-5.092 10.72-8.846l.002-.004c1.362-1.78 2.51-3.866 3.345-6.057l.01-.024.005-.023c.29-1.065.811-2.099 1.032-3.315v-.004l.002-.004c.101-.605.204-1.118.308-1.741.11-.659.109-1.17.204-1.74l.006-.04v-.04c0-.56.102-1.072.102-1.741v-2.812l-.01-.049c-.092-.462-.093-.869-.201-1.518l-.002-.006-.002-.006c-.416-2.184-1.043-4.177-1.987-6.065-1.891-3.783-5.03-6.918-8.691-9.01l-.002-.003-.004-.002c-1.877-1.043-3.766-1.779-5.761-2.2h-.002c-.963-.213-2.005-.316-3.027-.418l-.023-.002h-1.253c-.49 0-1.003.1-1.33.1-.903 0-1.85.218-2.77.423l-.006.002-.006.002c-.885.221-1.817.638-2.614.937-.859.322-1.62.761-2.458 1.387-.838.526-1.488 1.065-2.213 1.79-.001 0 0 .002-.002.003-2.635 2.531-4.314 5.892-4.948 9.36-.101.404-.219.845-.219 1.332v1.228l.004-.062c-.112.894.001 1.665.103 2.478v.004l.002.004c.21 1.476.631 3.076 1.5 4.49a16.28 16.28 0 0 0 2.948 3.578c1.08 1.077 2.356 1.816 3.6 2.438l.014.008.017.006c1.259.524 2.617.947 3.894 1.16l-.269-.14c.34.34.664.246.761.246h2.559c.415 0 .723-.1.921-.1h.041l.04-.007c.677-.112 1.188-.318 1.74-.41l.073-.014.066-.033c.35-.175.964-.38 1.433-.614.073-.036.122-.052.207-.087a1.03 1.03 0 0 0 .332-.21l-.13.092c.39-.195.883-.044 1.15.211.324.413.262.834-.11 1.083l-.04.027-.036.035c.007-.007-.053.041-.13.093-.076.051-.17.106-.279.215l.095-.076c-.552.332-1.032.716-1.68.994l.06-.022c-.813.232-1.427.642-2.047.82l-.012.002-.01.003c-.24.08-.738.183-1.105.303-.133.013-.273.03-.345.05-.102.029-.112.033-.132.033-.367 0-.572.1-.614.1h-2.386c-1.555.098-3.133-.193-4.951-.698-1.782-.496-3.37-1.286-5.08-2.392l-.006-.002a19.31 19.31 0 0 1-4.378-4.185c-1.292-1.689-2.29-3.683-2.992-5.887l-.004-.01-.002-.008c-.391-1.076-.59-2.153-.69-3.352l-.004-.06-.019-.056c-.07-.213-.077-.458-.077-.765v-2.64c.1-2.401.601-4.91 1.5-7.21l.002-.001.002-.004c.901-2.403 2.198-4.6 4.005-6.708 1.815-2.117 3.927-4.025 6.323-5.423 2.414-1.408 5.124-2.513 8.136-3.116h.002c.698-.1 1.395-.197 2.186-.296h2.322c1.433 0 3.054.002 4.434.2l.01.002.012.002c3.014.301 5.82 1.102 8.75 2.415h.003l.004.002c2.807 1.203 5.53 3.017 7.953 5.137 2.427 2.226 4.54 4.642 6.354 7.564 1.607 2.714 2.918 5.942 3.724 9.267a.028.028 0 0 0 .002.006c.11.838.303 1.633.4 2.496v.008l.104.724.108.76.014.044c.081.244.077.355.077.56v3.377c0 .818 0 1.614-.099 2.504l-.004.027v.027c0 .445-.102.94-.102 1.433v.205l.248.248.102.103.124.124.025.019c.86.668 5.12 4.285 6.391 11.793-.31.295-5.094 4.796-12.2 4.412l-.165-.008-.137.091c-.26.173-.4.402-.5.573a3.98 3.98 0 0 1-.19.308l-.029.03-.023.032c-2.038 2.853-4.27 5.688-6.886 8.002a499.64 499.64 0 0 1-4.067 3.15l-.194.15v.86c0 1.54-.41 8.135-6.776 15.014-.74-.095-9.17-1.295-14.123-8.44l-.147-.213h-4.849a46.353 46.353 0 0 1-10.428-1.518h-.002c-1.098-.3-2.223-.71-3.375-1.024l-.254-.07-.201.174c-1.414 1.225-8.706 6.383-19.714 6.096-.373-.813-3.908-8.935-.473-18.763l.089-.257-.17-.215c-.842-1.053-1.765-1.972-2.56-2.967l-.002-.002-.004-.004c-1.926-2.331-3.75-4.969-5.165-7.595l-.13-.244-.277-.018s-11.492-.698-21.46-12.012c.229-.752 3.829-12.113 15.41-17.855l.204-.1.055-.223c.13-.522.13-1.137.205-1.433l.008-.03.004-.03a52.013 52.013 0 0 1 2.128-9.733c.304-.812.612-1.63.92-2.555l.08-.246-.154-.209c-1.205-1.607-7.356-10.055-6.456-23.837.71-.361 11.63-5.752 24.19-.889.074.06.11.103.276.186l.261.132.242-.169c1.298-.898 2.613-1.607 3.955-2.432l.006-.002.007-.006c1.39-.792 2.8-1.4 4.236-2.116l.013-.006.012-.006 2.15-.92.025-.016c.654-.374 1.322-.568 2.039-.772.561-.118.951-.307 1.481-.395l.25-.043.112-.226c.162-.325.153-.634.153-.634l-.011.11s1.764-8.026 11.22-14.256z"/>
</svg>);
}