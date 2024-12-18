const React = require("react");
module.exports = function SonarqubeLineWordmarkIcon({size = "1em", color = "#549dd0", ...props}){
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
	<path d="m117.547 47.947-.258.422-.79 1.309.42.256c3.945 2.395 7.16 5.984 9.034 10.084l.205.447 1.842-.828-.207-.453c-2.05-4.484-5.532-8.38-9.822-10.98zm-8.54.664-.132.479-.484 1.722.472.135c7.803 2.24 14.041 8.678 15.865 16.354l.116.48 2.22-.521-.115-.483c-2.014-8.5-8.86-15.56-17.46-18.029Zm8.854.729c3.782 2.403 6.872 5.859 8.79 9.818l-.036.016c-1.914-3.956-4.998-7.393-8.777-9.797zm-8.185.562c7.86 2.442 14.098 8.884 16.127 16.637l-.291.068c-2.013-7.67-8.159-14.001-15.918-16.412zm-10.62.867v2.543h.495c12.436 0 22.533 9.966 22.533 22.223v.496h2.549v-.496C124.632 61.88 113.367 50.77 99.55 50.77Zm.99 1.04c12.882.264 23.274 10.52 23.546 23.232h-.567c-.27-12.401-10.417-22.408-22.978-22.672Zm-14.603 5.353V72.35c0 1.068-.045 2.295-.095 3.109l-.032.523 2.91.006.069-1.455c.976 1.07 2.205 1.733 3.695 1.733 2.86 0 5.652-2.326 5.86-6.557.02 1.887.599 3.523 1.705 4.68 1.126 1.178 2.769 1.841 4.746 1.841 2.002 0 3.403-.41 4.248-.796l.369-.168-.603-2.547-.54.228c-.788.334-1.645.59-3.168.59-1.011 0-1.913-.28-2.562-.861-.555-.497-.898-1.295-1.018-2.362l8.385-.01.053-.435c.043-.356.072-.712.072-1.08 0-1.197-.27-2.712-1.103-3.978-.834-1.267-2.283-2.248-4.41-2.248h-.495v.107c-1.665.135-3.094.81-4.06 1.973-.975 1.172-1.473 2.762-1.563 4.492-.012-1.882-.544-3.51-1.513-4.674-.994-1.194-2.435-1.895-4.077-1.895-1.601 0-2.782.686-3.697 1.618v-7.022zm.993.99h1.193v7.643h.832l.142-.25c.695-1.216 1.9-1.988 3.714-1.988 1.365 0 2.497.553 3.316 1.537.819.984 1.316 2.414 1.302 4.164v.004c0 4.135-2.504 6.012-4.945 6.012-1.63 0-2.807-.565-3.63-2.032l-.143-.252h-.838l-.098 2.006-.928-.002c.041-.797.082-1.73.082-2.644zm-21.217 4.006a7.047 7.047 0 0 0-4.184 1.22c-1.175.801-1.912 1.94-2.42 3.165v-3.975l-.42-.064a4.775 4.775 0 0 0-.88-.05l-.002-.003h-.016v.006c-.013 0-.027.011-.04.012l.077.972c.097-.003.194.014.29.018v2.582c-.175-.016-.348-.049-.524-.05h-.006c-1.584 0-2.799.942-3.098 2.327l-.002.012-.002.012a5.786 5.786 0 0 0-.076.935v5.733H51.09l-.008-7.752v-.002a77.868 77.868 0 0 0-.086-3.541h2.308l.131 2.258h.914l.118-.332c.56-1.592 1.878-2.2 2.847-2.2l-.058-.972c-1.036.018-2.106.703-2.928 1.785l-.088-1.53h-4.27l.026.52a76.947 76.947 0 0 1 .096 4.012L50.1 76h4.806v-6.723c0-.253.021-.505.06-.754.212-.968.902-1.541 2.124-1.543.315.004.628.034.937.092l.352.065c-.62 1.985-.468 4.19.789 6.04 1.814 2.676 5.2 3.692 8.205 2.608l2.629 4.268 2.83-1.932-2.621-4.254c2.136-2.397 2.446-5.937.623-8.623v-.002a7.048 7.048 0 0 0-5.615-3.084Zm-22.033.27c-2.319 0-4.066.616-5.01 1.148l-.342.192.998 3.466.557-.35c.703-.44 1.986-.855 3.123-.855.856 0 1.267.208 1.474.41.128.125.127.276.162.42-1.948.057-3.65.39-4.892 1.16-1.377.854-2.207 2.235-2.207 3.979 0 2.206 1.732 4.26 4.46 4.26 1.258 0 2.342-.469 3.22-1.19l.093.51.967-.088-.478.48h4.047l-.112-.587c-.115-.607-.172-1.726-.172-2.89v-4.276c0-1.517-.34-2.968-1.283-4.053-.942-1.085-2.462-1.736-4.605-1.736zm-11.29.013c-1.676 0-2.729.734-3.47 1.479l-.125-1.2h-4.276l.024.516c.046 1.081.096 2.376.096 3.891v.494h.013v8.354h4.799v-7.57c0-.302.069-.656.115-.764l.006-.014.004-.014c.198-.553.638-1.095 1.465-1.095.56 0 .84.171 1.068.513.228.342.366.915.366 1.65v7.303h4.804v-7.777c0-1.892-.498-3.344-1.385-4.322-.886-.978-2.141-1.444-3.503-1.444zm-26.529.01v.074c-1.377.09-2.584.476-3.447 1.19a4.17 4.17 0 0 0-1.537 3.242c-.015.84.272 1.683.902 2.4.632.72 1.589 1.316 2.916 1.764.7.235 1.115.431 1.295.572.18.141.178.154.178.364 0 .186-.027.245-.166.34-.139.093-.452.193-.973.193-.987 0-2.437-.5-3.029-.862l-.578-.353L0 75.147l.338.181c1.035.559 2.52.916 4.197.916 1.839 0 3.285-.439 4.29-1.234 1.003-.796 1.529-1.954 1.529-3.225v-.006c-.013-.994-.305-1.881-.924-2.593s-1.53-1.241-2.744-1.66l-.004-.003c-.737-.26-1.21-.468-1.436-.625-.227-.156-.215-.16-.215-.312 0-.175.037-.24.168-.33.132-.091.398-.178.793-.178.932 0 1.94.373 2.414.637l.56.31.942-3.646-.361-.178c-.854-.421-2.179-.75-3.684-.75zm11.643 0c-2.079 0-3.856.675-5.104 1.904-1.248 1.23-1.947 2.996-1.947 5.088 0 2.097.743 3.827 1.982 5.01 1.24 1.183 2.957 1.815 4.86 1.815 1.748 0 3.488-.55 4.8-1.721 1.314-1.172 2.17-2.968 2.17-5.328 0-1.96-.67-3.669-1.865-4.875-1.194-1.207-2.9-1.898-4.896-1.893zm55.531.393v7.593c0 2.226.604 3.712 1.527 4.62.924.908 2.115 1.2 3.159 1.2 1.757 0 2.85-.81 3.638-1.661l.086 1.388h2.957l-.037-.53c-.067-.936-.1-2.04-.1-3.28v-.496h-.013v-8.834h-3.192v7.95c0 .326-.055.649-.166.948-.336.812-1.205 1.693-2.453 1.693-.875 0-1.34-.286-1.685-.835s-.524-1.432-.524-2.536v-7.22Zm-7.353.304a6.055 6.055 0 0 1 4.826 2.65 6.063 6.063 0 0 1-.74 7.708l-.278.275 2.498 4.055-1.193.814-2.492-4.05-.395.171a6.046 6.046 0 0 1-7.426-2.15 6.06 6.06 0 0 1 1.604-8.424 6.056 6.056 0 0 1 3.596-1.049zm-22.002.27c1.949 0 3.126.553 3.857 1.394.73.842 1.041 2.036 1.041 3.405v4.275c0 .966.065 1.772.152 2.488H45.72l-.223-1.216h-.717l-.148.181c-.694.851-1.793 1.32-3.121 1.32-2.25 0-3.47-1.559-3.47-3.267 0-1.447.598-2.431 1.737-3.137 1.14-.705 2.855-1.08 4.965-1.066l.498.002v-.674c0-.416-.122-.964-.562-1.393-.44-.428-1.145-.69-2.166-.69-1.122 0-2.193.33-3.065.753l-.43-1.492c.841-.41 2.246-.883 4.169-.883zm-11.29.014c1.145 0 2.087.363 2.77 1.117s1.129 1.938 1.129 3.658v6.787h-2.824v-6.312c0-.85-.137-1.609-.53-2.2-.392-.59-1.077-.955-1.894-.955-1.274 0-2.081.9-2.387 1.739-.143.34-.193.735-.193 1.138v6.58h-2.819v-8.353h-.025a88.982 88.982 0 0 0-.072-2.92h2.357l.176 1.68h.797l.146-.229c.42-.653 1.526-1.73 3.37-1.73zm-26.033.01c1.194 0 2.162.287 2.858.57l-.434 1.677c-.636-.28-1.361-.601-2.295-.601-.529 0-.99.1-1.355.353-.366.253-.596.69-.596 1.145 0 .427.253.858.643 1.127.389.268.909.476 1.672.746h.003c1.117.385 1.861.847 2.323 1.377.46.53.67 1.136.681 1.953 0 1.008-.377 1.83-1.154 2.445-.778.617-1.993 1.02-3.674 1.02a8.059 8.059 0 0 1-3.365-.719l.42-1.703c.833.393 1.905.748 2.945.748.635 0 1.139-.102 1.528-.365.388-.264.601-.72.601-1.158 0-.41-.19-.856-.557-1.143-.365-.287-.855-.486-1.59-.732-1.21-.409-2.006-.929-2.488-1.477-.481-.548-.668-1.12-.656-1.734v-.01c0-1.001.414-1.85 1.178-2.483.763-.631 1.892-1.037 3.312-1.037zm11.147 0h.002c1.769-.005 3.194.591 4.191 1.599.997 1.008 1.578 2.442 1.578 4.178 0 2.126-.737 3.604-1.84 4.588-1.102.983-2.6 1.468-4.14 1.468-1.686 0-3.14-.55-4.176-1.539-1.037-.99-1.674-2.426-1.674-4.293 0-1.875.607-3.355 1.65-4.382 1.044-1.028 2.542-1.62 4.409-1.62zm87.013.11c1.837 0 2.898.764 3.582 1.803.685 1.04.942 2.393.942 3.434 0 .173-.022.35-.035.525l-8.576.01.007.504c.028 1.596.571 2.807 1.442 3.586.87.78 2.027 1.113 3.222 1.113 1.377 0 2.2-.275 2.985-.56l.164.687c-.742.29-1.827.586-3.455.586-1.76 0-3.104-.567-4.03-1.535-.925-.968-1.447-2.363-1.447-4.094 0-1.734.512-3.258 1.406-4.334.895-1.075 2.159-1.724 3.793-1.724zm-30.492.282h1.217v6.23c0 1.204.169 2.257.674 3.063s1.394 1.299 2.525 1.299c1.71 0 2.905-1.175 3.373-2.315l.002-.006.004-.007c.158-.421.23-.864.23-1.303v-6.961h1.212v8.834h.029c.007.845.03 1.62.07 2.326h-.984l-.125-1.988h-.799l-.144.242c-.514.865-1.627 2.018-3.588 2.018-.863 0-1.767-.232-2.463-.916-.696-.685-1.233-1.864-1.233-3.913Zm30.326.31c-1.268 0-2.238.613-2.857 1.413-.619.8-.927 1.773-1.03 2.617l-.066.554h7.494l.01-.484c.016-.779-.13-1.76-.662-2.6-.531-.84-1.501-1.5-2.888-1.5zm-37.914.063c-1.606-.278-2.987.117-3.994.902-1.007.786-1.644 1.94-1.877 3.164-.233 1.225-.064 2.53.584 3.631.648 1.101 1.787 1.975 3.383 2.307l.004.002h.002a5.088 5.088 0 0 0 3.818-.789h.002a5.116 5.116 0 0 0 1.34-7.074 5.085 5.085 0 0 0-3.254-2.14h-.004zm25.668.117c-1.732 0-3.338 1.19-3.845 3.072l-.006.02-.004.02c-.042.225-.133.567-.133.996v2.677h.065c.018.138.023.278.05.412l.004.018.004.018c.48 1.717 1.964 2.943 3.785 2.943 1.29 0 2.384-.552 3.102-1.482.718-.93 1.078-2.207 1.078-3.68 0-1.304-.327-2.534-1.014-3.467-.686-.933-1.76-1.547-3.086-1.547zm12.246.81c1.097 0 1.67.434 2.053 1.04.293.462.34 1.034.389 1.564h-5.129c.135-.545.263-1.12.613-1.574.474-.613 1.11-1.03 2.074-1.03zm-86.949.012c-1.084 0-1.908.613-2.369 1.422-.461.81-.633 1.805-.633 2.77 0 1.12.225 2.131.719 2.902.494.771 1.306 1.283 2.283 1.283.908 0 1.693-.485 2.188-1.242.494-.756.74-1.77.74-2.943 0-.979-.176-1.974-.629-2.777-.453-.804-1.254-1.414-2.299-1.414zm48.863.038h.003a4.092 4.092 0 0 1 2.61 1.722 4.11 4.11 0 0 1-1.08 5.701 4.094 4.094 0 0 1-3.068.633c-1.352-.282-2.216-.97-2.726-1.838-.511-.868-.657-1.934-.465-2.943.192-1.01.719-1.949 1.514-2.568.794-.62 1.85-.943 3.213-.707zm25.84.13c1.034 0 1.76.427 2.287 1.143.527.716.823 1.746.823 2.88 0 1.311-.325 2.368-.871 3.075-.546.708-1.297 1.098-2.319 1.098-1.384 0-2.45-.882-2.826-2.215a4.454 4.454 0 0 1-.086-.697l-.006-.16v-2.006c0-.273.062-.516.114-.786.402-1.477 1.603-2.332 2.884-2.332zm-74.703.823c.69 0 1.105.321 1.436.908.33.586.502 1.44.502 2.293 0 1.032-.227 1.865-.578 2.402-.352.538-.783.793-1.36.793-.656 0-1.098-.28-1.449-.828-.351-.548-.563-1.384-.563-2.367 0-.84.17-1.691.504-2.28.336-.587.766-.921 1.508-.921zm27.963 3.058c-1.045-.014-1.993.091-2.75.448-.756.356-1.312 1.064-1.312 1.976 0 .6.216 1.124.595 1.465.38.34.882.486 1.4.486h.003a2.574 2.574 0 0 0 2.449-1.742l.008-.021.006-.024c.06-.256.086-.508.091-.752v-1.83zm-.502 1.065v.761a2.59 2.59 0 0 1-.058.498 1.574 1.574 0 0 1-1.5 1.061h-.004c-.337 0-.585-.09-.743-.232-.158-.142-.265-.345-.265-.729 0-.564.221-.834.744-1.08.412-.194 1.117-.245 1.826-.28z"/>
</svg>);
}