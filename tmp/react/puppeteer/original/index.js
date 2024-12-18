const React = require("react");
module.exports = function PuppeteerOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M106.01 71.762H21.86v-4.745a5.773 5.773 0 015.773-5.773h72.602a5.773 5.773 0 015.774 5.773z" fill="#dfdedf"/>
	<path d="M100.147 126.796H27.722a5.863 5.863 0 01-5.862-5.862V71.762h84.15v49.172a5.862 5.862 0 01-5.863 5.862z" fill="#fff"/>
	<path d="M91.832 44.428l10.297-4.971v-4.971l-23.79-11.36 23.79-12.25V6.081l-9.942-4.615L64.02 15.49 35.377 1.466l-9.23 4.971v4.26l22.368 12.25-22.369 11.362v5.148l9.587 4.97L64.137 29.87z" fill="#00d8a2"/>
	<path d="M35.671.07a.66.66 0 00-.593.001L24.905 5.243a.66.66 0 00-.36.587v5.31c0 .251.142.48.366.592l7.202 3.559L30.7 30.739l-5.687 2.823a.66.66 0 00-.366.58l-.094 5.22a.66.66 0 00.36.6l4.722 2.389-.28 3.063-6.436 16.688a6.422 6.422 0 00-1.792 4.45v54.99A6.464 6.464 0 0027.583 128h72.834a6.464 6.464 0 006.456-6.458V66.553a6.424 6.424 0 00-1.608-4.25l-6.586-20.12 4.05-1.96a.66.66 0 00.371-.595v-5.455a.657.657 0 00-.368-.592l-5.163-2.537-1.294-16.066 6.463-3.246a.66.66 0 00.362-.59V5.917a.658.658 0 00-.358-.585L92.483.075a.66.66 0 00-.6-.002l-27.568 13.99a.657.657 0 01-.591.002zm-.287 2.345L64.02 17.26 92.178 2.42l7.17 3.673-26.073 13.12c-1.043.525-1.04 2.013.003 2.535l25.804 12.916-6.689 3.467L64.02 23.59 35.147 38.425l-6.595-3.786L55.21 21.388c1.056-.524 1.049-2.033-.014-2.546v.002L28.458 5.934zm65.49 5.404v2.359l-22.64 11.367v-.002c-.033-.02-2.387-1.132-2.387-1.132zm-73.77.14L52.04 20.397l-2.521 1.008-22.415-11.099zm66.103 8.56l1.04 12.895-13.507-6.636zm-58.04.281L47 22.647l-12.956 6.432zm29.966 10.345l25.765 12.73v2.56l-25.765-13.2v-2.088zm-2.227.004v2.087L36.488 42.603v-2.356zm.816 4.273a.658.658 0 01.595.002L91.626 45.31a.66.66 0 00.585.006l3.193-1.547 1.315 16.327H31.205l1.278-13.947.76-1.97 2.233 1.129a.66.66 0 00.595 0zm-36.951 4.765l7.49 4.298v1.713l-7.49-3.79zm74.104.055v2.405L93.123 42.4v-2.14zM99.489 54.88l1.724 5.27a6.33 6.33 0 00-.796-.056h-.51zM28.294 57l-.282 3.094h-.429a6.64 6.64 0 00-.491.024zm-.71 5h72.833a4.55 4.55 0 014.547 4.55v4.258H23.036v-4.256a4.55 4.55 0 014.547-4.551zm.63 3.113a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm4.925 0a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm4.772 0a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm-14.875 7.603h81.928v48.825a4.55 4.55 0 01-4.547 4.55H27.583a4.55 4.55 0 01-4.547-4.55zm4.994 19.144v10.954h1.775v-4.157h2.292c.25 0 .487-.02.71-.06.224-.039.436-.1.633-.177a2.836 2.836 0 001.028-.7 2.992 2.992 0 00.646-1.076c.071-.205.124-.423.16-.656.036-.232.055-.478.055-.737 0-.257-.019-.501-.055-.733a3.677 3.677 0 00-.162-.655 2.94 2.94 0 00-1.133-1.488 2.796 2.796 0 00-.55-.288 3.22 3.22 0 00-.627-.17 4.19 4.19 0 00-.705-.057zm45.23 1.34v2.182h-1.546v1.562h1.547v2.993c0 .242.016.467.047.677.03.21.076.404.139.583.062.18.14.343.235.492.094.148.204.282.33.4.127.12.265.226.415.316.15.09.312.167.486.227.173.06.359.107.556.137.197.03.406.045.626.045.148 0 .298-.011.45-.033.152-.022.306-.054.462-.098.157-.044.315-.101.476-.168.161-.067.325-.145.491-.235l-.55-1.592a3.23 3.23 0 01-.626.26c-.1.03-.198.05-.294.065-.095.015-.19.022-.28.022-.088 0-.17-.007-.248-.02a1.074 1.074 0 01-.216-.058.839.839 0 01-.444-.41 1.175 1.175 0 01-.08-.213 1.678 1.678 0 01-.05-.252 2.418 2.418 0 01-.017-.29v-2.848h2.357v-1.562H75.17V93.2zm-43.455.514h2.292c.03 0 .058 0 .086.002a1.886 1.886 0 01.397.055c.025.006.05.014.073.021.024.008.048.015.07.024a1.17 1.17 0 01.253.133 1.22 1.22 0 01.164.135l.051.05a1.693 1.693 0 01.165.23c.012.02.022.041.033.062.01.021.022.042.031.063a1.61 1.61 0 01.053.135l.022.07c.007.025.015.048.021.073l.016.076a1.827 1.827 0 01.035.321l.002.087c0 .029 0 .057-.002.086 0 .028-.002.056-.004.084l-.008.082a1.747 1.747 0 01-.023.159l-.016.076c-.006.025-.014.048-.021.072a1.662 1.662 0 01-.139.339 1.346 1.346 0 01-.12.176c-.014.019-.03.037-.045.055v.002a1.222 1.222 0 01-.468.317c-.022.009-.046.016-.07.024l-.072.021a1.728 1.728 0 01-.314.051 2.003 2.003 0 01-.17.008h-2.292zm20.078 1.45c-.239 0-.467.018-.685.051-.219.033-.428.081-.627.147a3.288 3.288 0 00-1.072.6v-.58H45.59v10.656h1.909v-4.005c.162.13.334.245.514.343.181.097.371.178.57.242.199.065.406.115.622.147.217.033.443.05.678.05.238 0 .47-.024.693-.07.222-.045.437-.113.644-.203.207-.09.407-.203.599-.339a4.024 4.024 0 001.016-1.05 3.507 3.507 0 00.33-.649c.088-.228.153-.467.196-.718.044-.251.065-.514.065-.789s-.021-.537-.065-.789a3.611 3.611 0 00-.527-1.372 3.829 3.829 0 00-1.017-1.061 3.422 3.422 0 00-.603-.339 3.22 3.22 0 00-.644-.201 3.448 3.448 0 00-.687-.069zm9.282 0c-.238 0-.466.018-.685.051-.219.033-.428.081-.626.147a3.288 3.288 0 00-1.073.6v-.58h-1.909v10.656h1.909v-4.005c.163.13.334.245.515.343.18.097.37.178.57.242.198.065.405.115.622.147.217.033.442.05.677.05.239 0 .469-.024.691-.07.223-.045.437-.113.644-.203.207-.09.407-.203.599-.339a4.05 4.05 0 00.803-.753 3.6 3.6 0 00.395-.613 3.81 3.81 0 00.346-1.051c.044-.251.065-.514.065-.789s-.02-.537-.065-.789a3.844 3.844 0 00-.346-1.055 3.57 3.57 0 00-.18-.317 3.841 3.841 0 00-.464-.587 3.999 3.999 0 00-.556-.474 3.238 3.238 0 00-1.247-.54 3.428 3.428 0 00-.685-.069zm8.14 0c-.264 0-.516.024-.758.069a3.453 3.453 0 00-1.323.536 3.78 3.78 0 00-1.04 1.046 3.533 3.533 0 00-.339.655 3.69 3.69 0 00-.203.728c-.045.255-.069.52-.069.8a4.577 4.577 0 00.153 1.172 3.676 3.676 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.564.466a3.452 3.452 0 001.317.537c.24.045.491.068.752.068.202 0 .397-.012.587-.035.19-.023.373-.059.55-.106a3.73 3.73 0 00.989-.423 3.3 3.3 0 00.798-.696c.115-.139.222-.288.317-.449.096-.16.18-.334.257-.518l-1.707-.36c-.094.159-.202.297-.323.416-.121.12-.256.218-.405.298-.15.08-.312.14-.49.18-.177.04-.367.059-.573.059-.112 0-.222-.01-.325-.03a1.56 1.56 0 01-.576-.233 1.971 1.971 0 01-.67-.73 2.256 2.256 0 01-.14-.323 2.67 2.67 0 01-.096-.36h5.493v-.652a4.735 4.735 0 00-.092-.775 3.858 3.858 0 00-.216-.7 3.517 3.517 0 00-.804-1.185 3.91 3.91 0 00-.56-.446 3.498 3.498 0 00-1.274-.515 3.838 3.838 0 00-.713-.067zm14.702 0c-.263 0-.516.024-.758.069a3.449 3.449 0 00-1.323.536 3.76 3.76 0 00-.818.748 3.528 3.528 0 00-.56.953 3.685 3.685 0 00-.204.728c-.045.255-.068.52-.068.8a4.577 4.577 0 00.153 1.172 3.675 3.675 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.563.466a3.473 3.473 0 001.318.537c.24.045.491.068.751.068.203 0 .398-.012.588-.035a4.14 4.14 0 00.552-.106 3.698 3.698 0 00.986-.423 3.3 3.3 0 00.799-.696c.115-.139.221-.288.317-.449.096-.16.18-.334.256-.518l-1.705-.36c-.094.159-.201.297-.323.416-.12.12-.256.218-.405.298-.149.08-.314.14-.491.18-.177.04-.368.059-.574.059a1.654 1.654 0 01-.624-.118 1.654 1.654 0 01-.532-.344 1.971 1.971 0 01-.414-.53 2.256 2.256 0 01-.14-.324 2.67 2.67 0 01-.096-.36h5.492v-.652a4.743 4.743 0 00-.092-.775 3.856 3.856 0 00-.215-.7 3.51 3.51 0 00-.805-1.185 3.914 3.914 0 00-.56-.446 3.498 3.498 0 00-1.272-.515 3.858 3.858 0 00-.712-.067zm8.574 0c-.264 0-.518.024-.76.069a3.566 3.566 0 00-1.323.536 3.746 3.746 0 00-.817.748 3.529 3.529 0 00-.56.953 3.685 3.685 0 00-.203.728c-.045.255-.068.52-.068.8a4.577 4.577 0 00.152 1.172 3.676 3.676 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.564.466a3.456 3.456 0 001.317.537c.24.045.49.068.75.068.203 0 .4-.012.59-.035a4.11 4.11 0 00.55-.106 3.724 3.724 0 00.986-.423 3.307 3.307 0 001.116-1.145c.095-.16.182-.334.258-.518l-1.707-.36c-.094.159-.201.297-.323.416-.121.12-.256.218-.405.298-.15.08-.312.14-.49.18-.177.04-.369.059-.575.059a1.654 1.654 0 01-.622-.118 1.654 1.654 0 01-.533-.344 1.971 1.971 0 01-.413-.53 2.256 2.256 0 01-.14-.324 2.672 2.672 0 01-.099-.36h5.495v-.652a4.742 4.742 0 00-.094-.775 3.853 3.853 0 00-.213-.7 3.51 3.51 0 00-.807-1.185 3.9 3.9 0 00-.558-.446 3.498 3.498 0 00-1.274-.515 3.836 3.836 0 00-.713-.067zm9.599.118a3.03 3.03 0 00-1.116.2 2.82 2.82 0 00-.943.598 3.512 3.512 0 00-.274.286 4.098 4.098 0 00-.255.331v-1.313h-1.908v7.213h1.908v-2.328c0-.258.015-.5.041-.726.027-.226.066-.437.12-.63.053-.194.12-.37.2-.53.08-.162.174-.306.281-.435a1.96 1.96 0 01.805-.58c.16-.064.334-.112.522-.144a3.6 3.6 0 01.605-.047h.42l.1-1.838a.894.894 0 00-.214-.045 2.874 2.874 0 00-.292-.012zm-63.684.1v4.396c0 .224.016.438.049.64.032.203.082.394.148.576a2.783 2.783 0 001.03 1.339c.154.106.319.195.493.266.175.071.359.125.554.16.196.036.402.055.619.055.234 0 .458-.019.67-.055.21-.036.411-.09.6-.162a2.828 2.828 0 00.998-.65v.65h1.909v-7.215h-1.909v3.196c0 .208-.008.402-.027.584a3.897 3.897 0 01-.082.507 2.6 2.6 0 01-.141.426c-.056.13-.121.245-.196.349a1.396 1.396 0 01-.56.466 1.61 1.61 0 01-.364.115c-.13.026-.273.04-.423.04-.112 0-.217-.01-.317-.03a1.309 1.309 0 01-.526-.233 1.356 1.356 0 01-.212-.2 1.384 1.384 0 01-.178-.248 1.585 1.585 0 01-.127-.29 1.98 1.98 0 01-.074-.329 2.557 2.557 0 01-.024-.362v-3.991zm13.054 1.446a2.487 2.487 0 01.425.037 1.959 1.959 0 01.56.196c.057.03.113.065.168.102.027.018.054.039.08.059.027.02.053.039.078.06l.077.069.074.07a1.87 1.87 0 01.343.498 2.028 2.028 0 01.14.395 2.542 2.542 0 01.073.444 3.164 3.164 0 01-.027.703 2.368 2.368 0 01-.184.603 1.96 1.96 0 01-.211.343 1.863 1.863 0 01-.443.409 1.945 1.945 0 01-.936.327 2.209 2.209 0 01-.415 0 2.133 2.133 0 01-.378-.077 1.932 1.932 0 01-.528-.256 2.37 2.37 0 01-.474-.419 1.85 1.85 0 01-.387-.728 2.206 2.206 0 01-.077-.433 2.895 2.895 0 01.028-.689 2.186 2.186 0 01.201-.6 1.893 1.893 0 01.235-.35 2.109 2.109 0 01.307-.299 2.374 2.374 0 01.337-.227 1.954 1.954 0 01.358-.152 1.879 1.879 0 01.576-.085zm9.282 0a2.479 2.479 0 01.423.037 1.964 1.964 0 01.56.196c.057.03.114.065.168.102.027.018.054.039.08.059l.079.06c.026.022.051.046.076.069l.075.07a1.838 1.838 0 01.342.498 2.044 2.044 0 01.143.395 2.758 2.758 0 01.078.683 2.707 2.707 0 01-.078.677 2.167 2.167 0 01-.239.566 1.995 1.995 0 01-.246.32 2.123 2.123 0 01-.478.357 1.83 1.83 0 01-.558.196 2.3 2.3 0 01-.622.03 2.133 2.133 0 01-.378-.077 1.93 1.93 0 01-.53-.256 2.231 2.231 0 01-.326-.266 1.975 1.975 0 01-.381-.494 1.882 1.882 0 01-.153-.387 2.206 2.206 0 01-.076-.433 2.895 2.895 0 01.027-.689 2.186 2.186 0 01.202-.6 1.893 1.893 0 01.235-.35 2.109 2.109 0 01.307-.299 2.235 2.235 0 01.335-.227 1.954 1.954 0 01.358-.152 1.952 1.952 0 01.577-.085zm8.472 0a1.809 1.809 0 01.245.016 1.809 1.809 0 01.072.01 1.809 1.809 0 01.245.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.484 1.484 0 01.303.292 1.615 1.615 0 01.16.25c.025.046.047.092.067.141l.03.075a2.228 2.228 0 01.053.156l.023.082h-3.484a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.021-.049 1.599 1.599 0 01.136-.243 1.599 1.599 0 01.178-.21 1.599 1.599 0 01.043-.042 1.599 1.599 0 01.213-.172 1.904 1.904 0 01.223-.133 1.904 1.904 0 01.06-.03 1.904 1.904 0 01.24-.096 1.904 1.904 0 01.246-.058 1.904 1.904 0 01.077-.01 1.904 1.904 0 01.252-.02zm14.703 0a1.809 1.809 0 01.244.016 1.809 1.809 0 01.073.01 1.809 1.809 0 01.245.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.44 1.44 0 01.21.184c.017.017.032.035.048.053l.047.055.043.058a1.488 1.488 0 01.115.192 2.065 2.065 0 01.15.374l.023.082h-3.485v-.002a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.022-.049 1.599 1.599 0 01.135-.243 1.599 1.599 0 01.178-.211 1.599 1.599 0 01.043-.041 1.599 1.599 0 01.214-.172 1.904 1.904 0 01.223-.133 1.904 1.904 0 01.06-.03 1.904 1.904 0 01.24-.096 1.904 1.904 0 01.246-.058 1.904 1.904 0 01.076-.01 1.904 1.904 0 01.253-.02zm8.574 0a1.809 1.809 0 01.244.016 1.809 1.809 0 01.073.01 1.809 1.809 0 01.244.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.482 1.482 0 01.464.542c.024.046.046.092.067.141l.03.075a2.271 2.271 0 01.052.156l.023.082h-3.486a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.022-.049 1.599 1.599 0 01.135-.243 1.599 1.599 0 01.176-.207 1.599 1.599 0 01.053-.05 1.599 1.599 0 01.207-.167 1.904 1.904 0 01.225-.135 1.904 1.904 0 01.053-.026 1.904 1.904 0 01.243-.098 1.904 1.904 0 01.249-.058 1.904 1.904 0 01.074-.01 1.904 1.904 0 01.255-.02z"/>
</svg>);
}