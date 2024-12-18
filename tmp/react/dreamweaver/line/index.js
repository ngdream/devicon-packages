const React = require("react");
module.exports = function DreamweaverLineIcon({size = "1em", color = "#470137", ...props}){
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
	<path d="M29.315 33.705c-2.356 0-4.562.001-6.672.053-2.068.05-3.83.051-5.418.103a55.856 55.856 0 0 0-3.51.102h-.134l-.079.013c-.84.14-1.482.852-1.324 1.791l-.013-.16V88.34c0 .357.032.72.263 1.106.232.385.778.691 1.235.691h-.057c.947.055 2.292.053 4.111.104 1.801.053 3.797.052 5.89.052h5.92c2.8-.007 5.588-.364 8.299-1.062h.005l.003-.002c2.807-.743 5.509-1.858 7.954-3.354l.003-.002.002-.002c2.49-1.544 4.766-3.462 6.668-5.708l.002-.002a25.95 25.95 0 0 0 4.678-8.24l.002-.003v-.002c1.188-3.506 1.727-7.17 1.674-10.875 0-5.278-1.08-9.979-3.254-14.096l-.002-.006-.002-.003a23.746 23.746 0 0 0-9.867-9.713l-.008-.004c-4.371-2.364-9.87-3.514-16.37-3.514zm0 1.947c6.272 0 11.447 1.117 15.449 3.283l.006.002.006.004a21.8 21.8 0 0 1 9.07 8.922c2.01 3.811 3.023 8.17 3.023 13.184v.014c.052 3.5-.456 6.942-1.57 10.23a24.004 24.004 0 0 1-4.326 7.615c-1.76 2.076-3.877 3.864-6.201 5.307h-.002c-.002 0-.003.003-.004.004-2.263 1.384-4.79 2.43-7.424 3.129h-.004l-.004.001a31.65 31.65 0 0 1-7.812.999h-5.914c-2.094 0-4.076-.002-5.834-.053h-.002c-1.667-.047-2.814-.056-3.66-.092V35.899c1.035-.06 2.07-.091 3.107-.092h.035c1.546-.051 3.328-.052 5.436-.103 2.077-.051 4.27-.051 6.625-.051zm-.021 7.889c-1.01 0-1.882.001-2.649.053l-.07.002c-.76.002-1.584.052-2.447.101l-.918.053v36.242h.974c.573 0 1.06.003 1.518.047.548.06 1.072.058 1.465.101l.005.002h.006c.587.058 1.185.057 1.807.057 2.526.053 5.047-.38 7.45-1.238l.005-.002c2.237-.77 4.203-2.043 5.87-3.737l.005-.006.004-.005a16.828 16.828 0 0 0 3.723-6.067l.002-.004.002-.006a25.078 25.078 0 0 0 1.306-8.027c.05-2.59-.378-5.166-1.26-7.601h-.002v-.002c-1.571-4.318-5.136-7.637-9.592-8.944-2.33-.693-4.734-1.072-7.199-1.02zm.021 1.947h.02c2.242-.049 4.442.294 6.61.94h.005c3.87 1.135 6.953 4.012 8.31 7.742a19.193 19.193 0 0 1 1.147 6.908l-.002.01v.01c0 2.52-.4 5.04-1.201 7.404a14.878 14.878 0 0 1-3.284 5.355c-1.473 1.497-3.17 2.592-5.117 3.262l-.011.004c-2.198.787-4.49 1.177-6.772 1.129H29c-.628 0-1.178-.003-1.632-.047l.01.002c-.55-.06-1.073-.06-1.467-.104l-.004-.002H25.9c-.254-.024-.498-.015-.744-.023V45.603c.513-.027 1.062-.062 1.488-.062h.033l.035-.002c.677-.049 1.555-.051 2.602-.051zm77.944.885c-.366 0-.82.144-1.121.441s-.434.65-.51.989v.002c-.734 3.042-1.363 5.877-1.937 8.445v.004c-.575 2.623-1.103 4.95-1.475 7.098-.383 1.917-.75 3.837-1.098 5.761-.246 1.18-.396 2.151-.564 3.16-.08-.476-.163-.819-.234-1.363v-.004c-.216-1.589-.585-3.504-1.004-5.668l-.002-.01-.002-.007c-.47-2.21-.993-4.732-1.569-7.563l-.002-.008-.002-.006a690.44 690.44 0 0 0-2.254-9.902l.016.084c-.042-.291-.13-.622-.397-.924-.266-.302-.72-.476-1.09-.476h-10.26c-.21 0-.405.01-.632.07s-.577.157-.81.62h-.003c-.136.266-.314.574-.314 1.106l.035-.255c-.997 3.664-1.84 6.924-2.424 9.795-.627 2.88-1.15 5.35-1.619 7.505-.405 1.874-.79 3.751-1.156 5.633-.107.543-.171.84-.266 1.31-.231-1.257-.473-2.525-.748-4.261-.372-2.354-.95-5.142-1.63-8.437v-.002c-.685-3.312-1.576-7.23-2.624-11.764l.016.082c-.056-.39-.312-.844-.676-1.077s-.732-.275-1.074-.275h-9.893c-.404 0-.874.024-1.293.463s-.392 1.096-.257 1.494l-.022-.07 10.234 39.912.05.095c.105.204.238.512.55.819l.113.11.14.07c.267.13.73.358 1.354.234l-.19.02h9.788c.412 0 .902-.15 1.238-.48s.483-.74.557-1.14l-.014.065c.784-3.033 1.515-5.86 2.145-8.44l.003-.017c.62-2.364 1.213-4.734 1.782-7.11.521-2.155 1.045-4.323 1.468-6.455l.006-.021c.14-.626.291-1.305.432-1.945.326 1.622.648 3.245.955 4.87.423 2.235.999 4.918 1.68 8.11v.002a480.015 480.015 0 0 0 2.517 10.992l.004.014.004.015c.097.352.263.68.49.965l.038.047.042.041c.389.382.861.625 1.541.459l-.23.027h9.79l.322-2.024c.063-.01-.134-.254-.137.095l-.274 1.903c.26.026.63.026.926-.153.364-.22.605-.711.605-1.104l-.313.856c.31-.306.508-.827.599-1.184l11.307-39.703.006-.025c.084-.372.118-.853-.196-1.305s-.864-.606-1.277-.606zm.248 1.947h8.354l-11.166 39.201-.004.014a.391.391 0 0 1-.053.111l-.03.03h-9.496c-.016-.036-.042-.067-.052-.104l-.002-.004a477.877 477.877 0 0 1-2.498-10.914l-.002-.004c-.681-3.192-1.255-5.865-1.67-8.06a424.481 424.481 0 0 0-1.096-5.596l-.006-.03c-.263-1.545-.52-2.83-.67-3.86l-.12-.833h-1.67l-.176.754c-.526 2.276-.998 4.494-1.467 6.598l-.004.023c-.414 2.085-.934 4.236-1.457 6.399a341.94 341.94 0 0 1-1.776 7.086l-.002.01-.002.007c-.626 2.566-1.357 5.395-2.142 8.434l-.01.033-.006.033c-.008.043.005.005-.002.027h-9.764l-.023.006c-.02-.03-.035-.06-.068-.119L60.39 48.424h9.33c1.019 4.413 1.894 8.266 2.558 11.48.68 3.296 1.255 6.07 1.615 8.35.37 2.335.74 4.252.998 5.685v.002c.261 1.435.47 2.665.627 3.592l.137.813h1.836l.11-.852c.103-.812.204-1.554.353-2.34l.002-.011.002-.01c.21-.985.47-2.267.783-3.858.314-1.595.68-3.441 1.149-5.593.472-2.168.995-4.637 1.623-7.518v-.008l.002-.006c.568-2.793 1.4-6.022 2.394-9.671l.027-.106h9.698a688.495 688.495 0 0 1 2.203 9.69l-.002-.016c.576 2.835 1.1 5.36 1.572 7.578.417 2.153.779 4.047.982 5.543.214 1.631.483 2.945.69 4.018.156.87.302 1.706.35 2.5l.054.916h1.83l.188-.733c.277-1.09.49-2.351.7-3.752a82.99 82.99 0 0 1 .827-4.633l.004-.013.002-.014c.313-1.742.677-3.642 1.096-5.75l.004-.023c.36-2.076.88-4.384 1.457-7.014v.006c.57-2.553 1.194-5.359 1.916-8.355zM23.303 1.6C10.431 1.6 0 12.03 0 24.895v78.21C0 115.972 10.432 126.4 23.303 126.4h81.394c12.872 0 23.303-10.429 23.303-23.295v-78.21C128 12.028 117.568 1.6 104.697 1.6zm0 1.969h81.394c11.81 0 21.334 9.52 21.334 21.326v78.21c0 11.804-9.523 21.326-21.334 21.326H23.303c-11.81 0-21.334-9.52-21.334-21.326v-78.21c0-11.804 9.523-21.326 21.334-21.326z"/>
</svg>);
}