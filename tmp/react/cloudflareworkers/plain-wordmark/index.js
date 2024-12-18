const React = require("react");
module.exports = function CloudflareworkersPlainWordmarkIcon({size = "1em", color = "#ea9344", ...props}){
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
	<path d="M9.604 112.546 2.536 91.812h4.882l4.292 13.948 4.613-14.001h3.889l4.654 14.001 4.292-13.948h4.761l-7.068 20.734h-3.956l-4.667-13.465-4.667 13.465H9.604zm32.992.268c-4.909 0-8.543-3.634-8.543-8.181v-.067c0-4.56 3.675-8.248 8.61-8.248 4.922 0 8.556 3.634 8.556 8.181v.067c0 4.56-3.675 8.248-8.61 8.248h-.013zm.067-3.889c2.588 0 4.131-1.971 4.131-4.292v-.067c0-2.32-1.69-4.359-4.184-4.359-2.588 0-4.131 1.971-4.131 4.292v.067c-.001 2.32 1.689 4.359 4.184 4.359zm11.775 3.487V96.613h4.479v3.192c.912-2.186 2.387-3.594 5.043-3.487v4.694h-.241c-2.977 0-4.801 1.797-4.801 5.566v5.834h-4.48zm12.338 0V90.954h4.479v11.44l5.23-5.74h5.364l-5.995 6.209 6.209 9.549H76.94l-4.131-6.437-1.556 1.65v4.788h-4.477v-.001zm24.234.402c-4.761 0-8.275-3.353-8.275-8.181v-.067c0-4.52 3.219-8.248 7.832-8.248 5.297 0 7.725 4.104 7.725 8.597 0 .362-.027.778-.054 1.194H87.201c.443 2.039 1.864 3.098 3.876 3.098 1.502 0 2.602-.469 3.849-1.623l2.562 2.28a7.928 7.928 0 0 1-6.478 2.95zm-3.849-9.522h6.706c-.268-2.012-1.435-3.353-3.313-3.353-1.837 0-3.044 1.328-3.393 3.353zm14.484 9.12V96.613h4.479v3.192c.912-2.186 2.387-3.594 5.043-3.487v4.694h-.241c-2.977 0-4.801 1.797-4.801 5.566v5.834h-4.48zm17.81.402a11.137 11.137 0 0 1-6.813-2.387l1.918-2.95a8.99 8.99 0 0 0 5.002 1.878c1.314 0 1.904-.469 1.904-1.18v-.054c0-.979-1.542-1.301-3.286-1.837-2.226-.644-4.734-1.676-4.734-4.748v-.067c0-3.219 2.602-5.016 5.794-5.016 2.012 0 4.211.671 5.928 1.837l-1.717 3.085a9.413 9.413 0 0 0-4.292-1.475c-1.1 0-1.663.483-1.663 1.1v.067c0 .885 1.502 1.287 3.219 1.878 2.226.751 4.801 1.811 4.801 4.694v.067c.001 3.512-2.627 5.108-6.061 5.108zM18.576 84.731h4.828v2.387h-7.618v-9.897h2.79v7.51zm18.521-2.602v.027a5.23 5.23 0 0 1-5.418 5.163c-3.085 0-5.391-2.28-5.391-5.123v-.04a5.232 5.232 0 0 1 5.307-5.153l.111.003c3.098 0 5.391 2.28 5.391 5.123zm-2.83.027c0-1.422-1.033-2.655-2.575-2.655-1.515 0-2.548 1.207-2.548 2.642v.04c0 1.422 1.046 2.655 2.562 2.655 1.542 0 2.562-1.207 2.562-2.642l-.001-.04zm12.741.644c0 1.368-.724 2.025-1.837 2.025s-1.851-.671-1.851-2.106V77.22h-2.816v5.552h-.014c0 3.111 1.797 4.52 4.654 4.52s4.694-1.395 4.694-4.573V77.22h-2.83v5.58zm16.616-.698v.04c0 2.857-2.119 4.976-5.727 4.976h-3.809v-9.897h3.862c3.582 0 5.674 2.025 5.674 4.881zm-2.843.04c0-1.583-1.113-2.508-2.776-2.508h-1.127v5.056h1.127c1.663 0 2.776-.912 2.776-2.508v-.04zm6.88 4.963h2.776v-3.527h4.748v-2.28h-4.748v-1.676h5.244v-2.401h-8.02v9.884zm14.672-9.884h-2.776v9.897h7.644v-2.387h-4.868v-7.51zm14.779-.068 4.292 9.965h-2.991l-.738-1.757h-3.862l-.711 1.757h-2.91l4.251-9.965h2.669zm-.228 6.062-1.1-2.803-1.127 2.816h2.226l.001-.013zm14.914.47 2.401 3.46h-3.219l-2.012-3.004h-1.22v3.004h-2.79v-9.924h4.734c1.542 0 2.588.389 3.272 1.073.59.563.899 1.328.899 2.32v.027c0 1.515-.832 2.521-2.065 3.044zm-.738-2.924c0-.778-.563-1.167-1.502-1.167h-1.824v2.374h1.851c.939 0 1.475-.456 1.475-1.167v-.04zm9.576 4.023v-1.583h4.801v-2.173h-4.801v-1.475h5.297v-2.334h-8.06v9.897H126v-2.334h-5.364v.002zM7.405 79.5c1.14 0 2.012.671 2.374 1.636h2.924a5.217 5.217 0 0 0-5.284-4.117A5.23 5.23 0 0 0 2 82.183v.027c0 2.843 2.28 5.123 5.378 5.123a5.257 5.257 0 0 0 5.257-3.956l-2.924-.013c-.402.858-1.22 1.475-2.293 1.475-1.515 0-2.548-1.247-2.548-2.655v-.04c0-1.437 1.006-2.644 2.535-2.644z"/>
	<path d="M49.036 63.846a6.978 6.978 0 0 1-1.539-1.848L37.033 43.821a7.001 7.001 0 0 1 0-6.976l10.464-18.177c.405-.7.926-1.321 1.538-1.837l7.02 12.673-5.07 9.125a3.486 3.486 0 0 0 0 3.394l5.074 9.156-7.023 12.667zm31.462-45.178 10.464 18.177a6.967 6.967 0 0 1 0 6.976L80.498 61.998a6.976 6.976 0 0 1-6.037 3.488h-8.214L79.26 42.023a3.487 3.487 0 0 0 0-3.381L66.247 15.18h8.214a6.977 6.977 0 0 1 6.037 3.488zm-29.043-3.02a6.964 6.964 0 0 1 2.503-.468h9.564l13.012 23.463a3.487 3.487 0 0 1 0 3.381L63.521 65.486h-9.564c-.928 0-1.856-.19-2.697-.537l12.472-23.136c.402-.724.451-2.132.048-2.856L51.455 15.648z"/>
</svg>);
}