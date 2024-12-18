const React = require("react");
module.exports = function FirebaseLineWordmarkIcon({size = "1em", color = "#ffa000", ...props}){
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
	<path d="M43.143 0a1.689 1.689 0 0 0-.266.025A1.675 1.675 0 0 0 41.5 1.419L30.93 69.054l.593.197 6.956-13.243L56.15 22.361 44.591.8l-.074-.036c-.312-.46-.81-.768-1.373-.763Zm.006.632h.001a1.04 1.04 0 0 1 .929.552l.047.09.003.002 11.305 21.088-17.516 33.35-6.069 11.553L42.124 1.515a1.038 1.038 0 0 1 .86-.867h.002a.99.99 0 0 1 .163-.016zM63.07 12.841a1.677 1.677 0 0 0-1.483.895l-4.949 9.423-.005-.009L32.41 69.267l.504.37 7.545-7.558 24.188-24.23 8.238-8.253-8.327-15.86h-.001a1.678 1.678 0 0 0-1.486-.895Zm.001.632h.001a1.042 1.042 0 0 1 .925.557l8.113 15.447-7.91 7.925-24.188 24.23-6.072 6.082 22.68-43.177.006.009 5.523-10.516c.182-.346.533-.557.924-.557zm22.596 5.194a1.654 1.654 0 0 0-.452.047 1.675 1.675 0 0 0-.79.445l-10.403 10.42-8.813 8.83-34.685 34.745L60.17 89.78h.03a5.818 5.818 0 0 0 5.579-.04h.001l29.394-16.345.718.42.404-.225-.18-.591-.29.023-8.559-52.958h-.002a1.675 1.675 0 0 0-1.141-1.315h-.002a1.691 1.691 0 0 0-.453-.08zm-.024.633h.002c.096.004.19.02.282.05h.002c.373.119.648.435.713.822l8.49 52.524-29.661 16.49v.001a5.19 5.19 0 0 1-5.063 0l-.072-.04h-.001L31.56 73.01l34.096-34.155 8.814-8.83 10.403-10.42a1.046 1.046 0 0 1 .492-.277 1.022 1.022 0 0 1 .278-.03zm-48.481 91.86a1.744 1.744 0 0 0-1.003 3.195 1.757 1.757 0 0 0 2.206-.22 1.685 1.685 0 0 0 .51-1.237 1.746 1.746 0 0 0-1.407-1.705 1.751 1.751 0 0 0-.306-.033zm-12.325.176v16.321h2.655v-6.727h6.464v-2.515h-6.464v-4.519h7.164v-2.56zm34.287 0v16.321h2.56v-1.19c.333.366.646.758 1.092.983h.001a4.905 4.905 0 0 0 2.358.548c1.47.005 2.77-.588 3.828-1.735 1.063-1.153 1.6-2.603 1.6-4.29.002-1.688-.535-3.138-1.6-4.29-1.06-1.149-2.362-1.745-3.836-1.746a4.905 4.905 0 0 0-2.355.561c-.428.216-.724.598-1.048.945l.048-.829v-5.278zm-21.974.456a1.109 1.109 0 0 1 1.094 1.11v.007a1.05 1.05 0 0 1-.32.775l-.003.001v.003a1.117 1.117 0 0 1-1.411.141 1.105 1.105 0 0 1-.413-1.348 1.114 1.114 0 0 1 1.053-.688zm-11.68.176h8.554v1.296H26.86v5.783h6.464v1.251H26.86v6.727h-1.39zm34.287 0h1.383v4.626l-.108 1.816h.597l.092-.146a3.407 3.407 0 0 1 1.338-1.202h.002l.003-.002a4.275 4.275 0 0 1 2.056-.49h.005c1.309 0 2.41.5 3.374 1.543.959 1.038 1.433 2.304 1.432 3.86 0 1.556-.474 2.822-1.432 3.86-.962 1.043-2.06 1.54-3.366 1.534h-.007a4.275 4.275 0 0 1-2.059-.478h-.002l-.001-.002a3.409 3.409 0 0 1-1.343-1.205l-.092-.146h-.577v1.49h-1.295zm37.818 3.962a5.132 5.132 0 0 0-4.035 1.797.004.004 0 0 1-.002 0 6.217 6.217 0 0 0-1.558 4.24c.002 1.714.542 3.173 1.614 4.312 1.075 1.142 2.5 1.72 4.196 1.72 1.22 0 2.279-.293 3.143-.89a5.133 5.133 0 0 0 1.85-2.228l.127-.294-2.388-.994-.121.291c-.472 1.129-1.293 1.646-2.654 1.646h-.003a2.988 2.988 0 0 1-2.116-.85l-.003-.002-.001-.003c-.53-.501-.81-1.184-.919-2.022h8.415l.04-.68v-.01c.002-1.796-.502-3.276-1.522-4.378-1.018-1.1-2.4-1.654-4.063-1.656zm-10.749.005a5.403 5.403 0 0 0-3.18.941v.001h-.002c-.906.636-1.396 1.525-1.398 2.566a2.71 2.71 0 0 0 1.04 2.234 5.503 5.503 0 0 0 2.073 1.055h.003l2.178.527c.454.116.77.28.96.462.19.183.271.378.271.655v.002a.957.957 0 0 1-.454.823l-.001.001-.002.001a2.36 2.36 0 0 1-1.363.367h-.012c-1.271 0-2.092-.564-2.628-1.824l-.124-.288-2.385.985.123.292a5.5 5.5 0 0 0 1.82 2.324c.845.63 1.913.939 3.165.939 1.296 0 2.391-.336 3.24-1.021a3.303 3.303 0 0 0 1.327-2.662 3.222 3.222 0 0 0-.808-2.145h-.001c-.54-.637-1.357-1.062-2.41-1.3l-2.132-.505h-.001c-.445-.102-.754-.25-.934-.407a.64.64 0 0 1-.25-.535.815.815 0 0 1 .443-.728l.006-.003.005-.003a2.568 2.568 0 0 1 1.35-.332h.01c1.166 0 1.82.39 2.172 1.23l.12.29 2.337-.953-.112-.29a3.966 3.966 0 0 0-1.744-2.012 5.328 5.328 0 0 0-2.702-.689zm-34.28.004a5.131 5.131 0 0 0-4.034 1.796 6.217 6.217 0 0 0-1.566 4.232c.002 1.715.542 3.173 1.615 4.312 1.075 1.142 2.5 1.72 4.196 1.72 1.22 0 2.28-.29 3.145-.885a5.133 5.133 0 0 0 1.85-2.229l.127-.294-2.39-.988-.121.29c-.472 1.13-1.293 1.646-2.654 1.646h-.003a2.99 2.99 0 0 1-2.117-.852l-.002-.003h-.001c-.53-.502-.81-1.184-.918-2.022h8.417l.041-.68v-.01c.001-1.796-.502-3.275-1.523-4.377-1.018-1.1-2.4-1.655-4.063-1.656zm23.62.003c-1.25 0-2.292.287-3.09.884-.767.573-1.304 1.213-1.58 1.924l-.11.286 2.432 1.04.114-.313a1.834 1.834 0 0 1 .836-.972l.003-.001.002-.001a2.784 2.784 0 0 1 1.432-.374h.013a2.609 2.609 0 0 1 1.779.626c.434.382.659.928.678 1.498-.735-.316-1.572-.51-2.576-.51-1.385 0-2.58.35-3.548 1.058-.98.716-1.493 1.754-1.493 3.005.002 1.156.431 2.133 1.263 2.846.826.708 1.869 1.062 3.074 1.062 1.386 0 2.47-.585 3.31-1.523v1.18h2.574v-6.805c.007-1.53-.484-2.772-1.472-3.634-.975-.85-2.207-1.276-3.642-1.276zm-30.472.084a3.936 3.936 0 0 0-2.009.616c-.34.186-.63.438-.874.73v-1.083h-2.567v11.369H42.9l-.002-6.187c0-.871.252-1.531.757-2.048l.003-.004.006-.005a2.326 2.326 0 0 1 1.712-.764h.01a2.753 2.753 0 0 1 .966.138l.28.093 1.003-2.454-.299-.116a4.179 4.179 0 0 0-1.64-.286zm-9.89.263v11.369h2.656v-11.37zm61.758.273h.009c1.528 0 2.702.481 3.603 1.454.9.972 1.354 2.267 1.354 3.944l-.002.061h-8.541l.017.334c.062 1.141.459 2.089 1.187 2.778a3.618 3.618 0 0 0 2.561 1.03c1.41 0 2.43-.661 3.026-1.78l1.258.524c-.346.667-.826 1.258-1.453 1.68h-.001l-.002.001c-.747.516-1.664.78-2.786.78-1.557 0-2.777-.503-3.737-1.522-.963-1.022-1.44-2.295-1.442-3.882v-.007a5.584 5.584 0 0 1 1.405-3.814v-.003l.003-.003a4.497 4.497 0 0 1 3.542-1.577zm-10.744.005h.012a4.698 4.698 0 0 1 2.387.609c.577.326 1.007.834 1.302 1.42l-1.225.5c-.494-.854-1.347-1.366-2.533-1.367a3.192 3.192 0 0 0-1.67.41 1.45 1.45 0 0 0-.781 1.285c0 .39.17.753.465 1.012.296.259.702.429 1.21.546l2.13.505h.002c.966.219 1.644.591 2.071 1.095l.003.003v.003a2.59 2.59 0 0 1 .654 1.73v.004a2.668 2.668 0 0 1-1.076 2.155l-.005.004-.005.004c-.723.585-1.657.884-2.849.884-1.15 0-2.067-.276-2.788-.814h-.002c-.628-.463-1.107-1.086-1.45-1.781l1.258-.52c.633 1.22 1.646 1.949 3.004 1.951a2.986 2.986 0 0 0 1.72-.464 1.59 1.59 0 0 0 .751-1.364c0-.424-.163-.817-.464-1.108-.301-.29-.722-.488-1.247-.62l-.001-.002-2.171-.525a4.862 4.862 0 0 1-1.837-.933l-.002-.003-.004-.003a2.076 2.076 0 0 1-.8-1.72v-.012c0-.856.352-1.508 1.13-2.053a4.77 4.77 0 0 1 2.81-.83zm-34.286.004h.009c1.528 0 2.702.481 3.603 1.454.9.972 1.354 2.267 1.354 3.944l-.003.061h-8.543l.017.334c.062 1.14.458 2.088 1.186 2.777a3.62 3.62 0 0 0 2.561 1.031c1.409 0 2.428-.662 3.025-1.78l1.26.522c-.346.666-.825 1.255-1.452 1.677h-.001l-.001.001c-.748.514-1.668.776-2.79.776-1.557 0-2.777-.502-3.737-1.522-.963-1.022-1.44-2.295-1.441-3.881v-.007a5.58 5.58 0 0 1 1.406-3.806l.003-.003.002-.003a4.497 4.497 0 0 1 3.542-1.577zm23.633.004c1.313 0 2.37.373 3.227 1.12.843.735 1.261 1.757 1.255 3.156v6.175h-1.31v-1.49h-.574l-.093.142c-.755 1.143-1.805 1.69-3.275 1.69-1.085 0-1.954-.302-2.662-.91-.702-.6-1.041-1.362-1.043-2.368 0-1.086.396-1.88 1.233-2.492.85-.62 1.896-.936 3.175-.936 1.149 0 2.065.213 2.762.615l.474.273v-.841a2.707 2.707 0 0 0-.921-2.144h-.002v-.002a3.243 3.243 0 0 0-2.204-.78 3.413 3.413 0 0 0-1.746.457c-.414.228-.671.63-.894 1.042l-1.277-.547a3.824 3.824 0 0 1 1.163-1.402c.666-.498 1.558-.758 2.712-.758zm-30.453.084c.365-.01.72.085 1.069.185l-.532 1.302c-.29-.068-.582-.137-.88-.126a2.96 2.96 0 0 0-2.17.967c-.622.638-.935 1.488-.935 2.484l.002 5.555h-1.39v-10.105h1.302v1.754h.623l.076-.204a2.44 2.44 0 0 1 1.12-1.282l.01-.005.009-.006a3.307 3.307 0 0 1 1.696-.52zm-9.275.262h1.39v10.105h-1.39zm28.363.85a3.62 3.62 0 0 0-2.656 1.154c-.727.764-1.087 1.799-1.086 3.04.001 1.242.36 2.277 1.086 3.042a3.542 3.542 0 0 0 2.662 1.162l.313-.004v-.07c.887-.077 1.73-.434 2.331-1.1.733-.771 1.097-1.802 1.097-3.03 0-1.23-.365-2.262-1.1-3.033a3.617 3.617 0 0 0-2.647-1.161zm-12.305.012a3.219 3.219 0 0 0-2.152.777l-.002.001a3.897 3.897 0 0 0-1.231 2.05l-.091.39 6.98-.02-.025-.338c-.05-.696-.374-1.352-.931-1.946-.592-.63-1.468-.925-2.548-.914zm45.033 0a3.219 3.219 0 0 0-2.152.777l-.001.001a3.897 3.897 0 0 0-1.232 2.05l-.091.39 6.98-.02-.025-.338c-.05-.696-.373-1.352-.931-1.946-.591-.63-1.468-.925-2.548-.914zm-32.73.62a2.99 2.99 0 0 1 2.19.961v.001l.003.001c.614.646.924 1.49.924 2.598 0 1.108-.31 1.953-.924 2.599l-.004.003-.002.004a2.902 2.902 0 0 1-2.18.958h-.05a2.903 2.903 0 0 1-2.146-.948l-.002-.003-.003-.003c-.604-.637-.912-1.486-.914-2.61 0-1.124.307-1.97.913-2.607l.001-.003h.002a2.985 2.985 0 0 1 2.192-.952zm-12.31.011h.01c.966-.01 1.634.237 2.083.715.38.404.498.811.598 1.222l-5.22.015c.19-.49.398-.98.797-1.328a2.589 2.589 0 0 1 1.733-.624zm45.034 0h.009c.967-.01 1.634.237 2.083.715.38.404.498.811.598 1.222l-5.22.015c.19-.49.399-.98.798-1.328a2.589 2.589 0 0 1 1.732-.624zm-21.068 3.28c-1.024 0-1.842.22-2.418.706a2.22 2.22 0 0 0-.866 1.727v.002a1.75 1.75 0 0 0 .834 1.518 3.04 3.04 0 0 0 1.723.521l.313-.003v-.069c.81-.078 1.58-.383 2.169-.95a3.198 3.198 0 0 0 1.136-2.434v-.15l-.116-.095c-.652-.533-1.587-.775-2.775-.775zm0 .631c1.013 0 1.725.212 2.22.556-.05.69-.344 1.34-.879 1.79l-.008.007-.008.007a2.982 2.982 0 0 1-2.057.842h-.029a2.404 2.404 0 0 1-1.342-.406l-.006-.004-.008-.004a1.116 1.116 0 0 1-.534-.975v-.002a1.59 1.59 0 0 1 .623-1.242l.007-.005.006-.005c.42-.357 1.078-.56 2.015-.56z"/>
</svg>);
}