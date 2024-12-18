const React = require("react");
module.exports = function NhibernateLineIcon({size = "1em", color = "#903a36", ...props}){
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
	<path d="M65.2 3.71c-17.99 0-34.2 8.067-45.24 20.778 1.639.11 3.254.395 4.83.848.01 0 .034-.012.05 0C35.035 14.609 49.35 7.863 65.2 7.863h.175c30.71 0 55.852 25.153 55.852 56.024 0 30.875-25.141 56.015-55.852 56.015h-.176c-30.699 0-55.84-25.14-55.84-56.015 0-4.4.543-8.66 1.504-12.774-.55-3.703-1.238-6.437-2.039-7.761A59.96 59.96 0 0 0 5.2 63.887c0 33.136 27.04 60.05 60 60.05h.178c32.96 0 60.064-26.914 60.064-60.05 0-33.137-27.103-60.176-60.064-60.176H65.2zm2.405 9.661c-5.573.176-11.16 1.103-15.554 2.516h-.002c-6.928 2.243-7.39 2.29-13.797 6.105h-.002c-1.043.595-2.722.672-4.393.826-1.671.155-3.405.408-4.425 1.74-.522.676-.646 1.478-.532 2.239.114.762.436 1.51.803 2.254.734 1.487 1.636 2.986 1.711 4.168v-.032c0 .076 0 .157.05.278.05.12.217.299.409.334a.546.546 0 0 0 .393-.07.844.844 0 0 0 .173-.13c.191-.176.354-.406.565-.714.422-.616.963-1.512 1.506-2.412.198-.33.35-.563.54-.877-.28.972-.379 1.698-.81 2.873-.803 2.19-1.686 4.548-1.963 6.552-.535 3.763-.13 10.895.61 18.022.739 7.128 1.819 14.193 2.703 17.727l.004.017.006.016c.084.257.282.465.496.578.213.112.438.155.668.172.459.033.961-.044 1.474-.158 1.027-.229 2.081-.625 2.533-.805l-.123.031c.603-.076.995-.522 1.366-1.031.37-.51.721-1.143 1.09-1.805.736-1.323 1.57-2.74 2.439-3.318l.006-.004.008-.004c4.56-3.242 8.048-6.952 11.302-9.992 3.254-3.04 6.256-5.388 9.828-6.055 6.521-1.176 14.532 2.771 17.344 8.072 1.544 2.909 2.719 6.198 2.719 8.09 0 .414-.078.56-.137.822-.963-2.69-1.929-5.16-2.884-7.093-1.033-2.09-2.036-3.651-3.1-4.526l-.002-.002c-2.267-1.829-3.976-3.052-5.994-3.627-2.019-.574-4.283-.474-7.612.227h-.003l-.006.002c-3.596.83-8.428 4.343-12.963 8.336-4.534 3.991-8.704 8.457-10.748 11.29-1.28 1.74-2.12 4.06-2.434 6.304-.314 2.244-.122 4.42.854 5.894l.002.006.004.004c2.718 3.934 5.21 6.478 8.25 8.11 3.04 1.63 6.588 2.33 11.388 2.677l.02.002c-.122-.001-.047-.006.03.031.083.042.204.11.339.194.27.167.6.397.871.619.006.005.005.006.012.011-5.65-.067-9.965-.854-13.754-3.125-3.956-2.37-7.465-6.334-11.52-12.72-.37-.596-1.088-2.266-1.736-3.926a109.69 109.69 0 0 1-1.516-4.12l-.004-.007-.002-.006c-3.216-8.655-2.386-23.402-4.132-35.289h-.002c-.513-3.476-1.187-7.51-3.035-10.096-.829-1.238-2.514-1.96-4.577-2.41-2.064-.45-4.537-.595-7.002-.474-2.464.12-4.917.508-6.935 1.152-1.968.628-3.547 1.475-4.295 2.715-.68.517-1.2.997-1.436 1.582-.122.304-.15.663-.027.984.123.322.368.579.684.79 4.513 3.41 6.73 6.943 7.894 10.558 1.166 3.621 1.258 7.346 1.434 11.084.351 9.7.355 16.9 3.844 26 6.996 19.057 22.753 31.697 40.47 34.146 21.497 3.15 37.163-5.463 48.864-20.308v-.002c10.552-13.36 12.274-33.962 6.667-49.735v-.002l-.117-.334h-.023c-4.63-12.848-15.578-23.91-29.299-28.945-4.343-1.595-9.903-2.172-15.477-1.996zm.036 1.025c5.487-.17 10.944.383 15.097 1.909 13.557 4.974 24.391 15.987 28.84 28.674l.002.001.006.02c5.485 15.45 3.753 35.762-6.518 48.764-11.55 14.654-26.761 23.042-47.933 19.941l-.002-.002h-.002c-17.337-2.395-32.795-14.763-39.674-33.5V80.2l-.002-.004c-3.43-8.94-3.429-15.965-3.781-25.69V54.5c-.175-3.722-.257-7.547-1.479-11.344-1.222-3.796-3.599-7.546-8.27-11.068l-.01-.008-.013-.008c-.202-.135-.278-.245-.304-.314-.027-.069-.033-.125.02-.254.104-.26.517-.72 1.18-1.217l.087-.064.05-.092c.49-.876 1.887-1.736 3.792-2.344 1.904-.607 4.288-.99 6.68-1.107 2.39-.117 4.794.031 6.74.455 1.945.423 3.401 1.15 3.96 1.99l.004.008.006.006c1.625 2.265 2.355 6.21 2.865 9.67 1.721 11.715.824 26.427 4.182 35.476l.002.006.002.008c.27.798.875 2.477 1.527 4.148.655 1.677 1.326 3.3 1.819 4.092l.002.002v.002c4.095 6.451 7.697 10.556 11.851 13.045 4.154 2.49 8.824 3.326 14.946 3.326.217 0 .477-.012.68-.281a.67.67 0 0 0 .12-.445.79.79 0 0 0-.097-.307c-.175-.33-.444-.554-.758-.81a9.524 9.524 0 0 0-.977-.698 5.072 5.072 0 0 0-.427-.24c-.13-.064-.179-.133-.452-.133l.035.002c-4.738-.342-8.128-1.028-10.988-2.563-2.857-1.532-5.226-3.928-7.894-7.789v-.002c-.747-1.128-.99-3.11-.698-5.203.293-2.092 1.099-4.286 2.248-5.847l.002-.002.002-.002c1.957-2.713 6.115-7.183 10.6-11.131 4.484-3.948 9.36-7.38 12.527-8.111h.002c3.251-.684 5.323-.754 7.121-.243 1.8.512 3.393 1.633 5.635 3.442.839.688 1.834 2.163 2.838 4.195 1.004 2.032 2.038 4.62 3.07 7.557l.006.011.004.012c.115.283.27.58.668.645a.725.725 0 0 0 .527-.137.995.995 0 0 0 .27-.318c.265-.46.373-1.105.373-1.942 0-2.28-1.248-5.567-2.836-8.558-3.077-5.801-11.37-9.855-18.404-8.586h-.004c-3.889.725-7.04 3.233-10.33 6.306-3.287 3.071-6.73 6.728-11.188 9.899-1.21.807-2.02 2.34-2.758 3.664-.368.662-.713 1.274-1.025 1.703-.312.43-.59.615-.682.627l-.062.008-.06.023c-.423.168-1.454.552-2.38.758-.462.103-.903.157-1.185.137a.801.801 0 0 1-.273-.059c-.027-.014-.015-.007-.01-.004-.853-3.423-1.938-10.474-2.672-17.553-.736-7.095-1.113-14.268-.613-17.779v-.002c.25-1.82 1.106-4.15 1.91-6.344.804-2.192 1.572-4.212 1.572-5.7 0-.077.005-.169-.076-.315-.082-.147-.358-.291-.53-.272-.343.04-.36.167-.445.256-.169.18-.334.418-.543.735-.418.633-.96 1.54-1.502 2.439-.541.9-1.083 1.791-1.474 2.363l-.008.01c-.317-1.294-.996-2.554-1.572-3.723-.35-.709-.625-1.382-.711-1.959-.087-.576-.014-1.03.334-1.478l.002-.002v-.002c.713-.932 2.102-1.203 3.726-1.354 1.625-.15 3.413-.162 4.797-.953l.004-.002.004-.002c6.402-3.812 6.661-3.769 13.6-6.015 4.278-1.376 9.797-2.273 15.285-2.444zM53.527 25.465a5.574 5.574 0 0 0-.972.164c-1.275.331-2.462 1.07-3.463 1.973l-.012.01-.01.01c-.682.691-.992 1.827-1.238 2.985-.246 1.16-.378 2.344-.465 3.03l.98.185c.66-2.617 2.457-4.367 4.327-4.838l.017-.004.018-.005c.355-.118.93-.13 1.426-.133.011.03.023.047.035.117.038.22.038.594.027 1.002-.01.407-.029.853.004 1.28.033.426.1.85.385 1.208l.004.004.002.004c.607.732 1.559.83 2.304.979.373.074.705.156.918.257.202.096.27.174.313.305.21 1.55-.327 2.546-1.252 3.393-.937.857-2.285 1.5-3.514 2.111l.282.943c1.547-.181 3.344-.716 4.84-1.681 1.495-.966 2.704-2.404 2.89-4.319v-.011l.002-.012c.092-1.9-.276-3.494-1.113-4.844-.836-1.348-2.121-2.436-3.807-3.416a4.758 4.758 0 0 0-1.937-.678 5.073 5.073 0 0 0-.99-.02zm.077.994a3.757 3.757 0 0 1 2.334.557l.005.004.004.001c1.601.93 2.743 1.92 3.465 3.084.72 1.161 1.042 2.513.961 4.252-.153 1.547-1.107 2.71-2.432 3.565-.11.072-.249.105-.365.172 1.083-1.005 1.82-2.417 1.543-4.291l-.004-.035-.01-.034c-.133-.46-.495-.77-.863-.945-.367-.174-.762-.257-1.148-.334-.771-.154-1.463-.318-1.729-.635-.059-.076-.14-.32-.166-.658-.026-.342-.012-.76-.002-1.176.011-.415.022-.822-.043-1.197a1.431 1.431 0 0 0-.195-.553.93.93 0 0 0-.572-.398l-.05-.01h-.048c-.523 0-1.238-.013-1.879.195-1.312.336-2.501 1.2-3.445 2.397.23-.888.513-1.778.812-2.086.906-.814 1.967-1.46 3.03-1.736a4.74 4.74 0 0 1 .797-.139zm-2.458 17.494c-.03.034-.028.051-.058.084l-.004-.002-.014.028c-1.164 1.276-1.788 2.319-2.26 3.257-.486.97-.856 1.83-1.685 2.916l-.006.008-.006.01c-1.14 1.626-2.757 3.247-3.554 4.385l-.184.091v1.944l.87-1.287c2.701-1.394 3.72-2.857 4.495-3.631l.008-.008.008-.008c1.022-1.117 1.328-2.161 1.611-3.252.284-1.09.563-2.262 1.572-3.937l-.793-.598zm-1.783 4.402c-.264 1.01-.495 1.78-1.343 2.708-.002 0-.001.002-.002.003-.485.487-.965 1.067-1.655 1.696.596-.697 1.026-1.166 1.563-1.93l.006-.006c.716-.943 1.055-1.705 1.431-2.47z"/>
</svg>);
}