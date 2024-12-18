const React = require("react");
module.exports = function FilezillaLineWordmarkIcon({size = "1em", color = "#bb0001", ...props}){
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
	<path d="M1.082 51.303a.25.25 0 0 0-.25.25.597.597 0 0 1-.169.412H.661v.002a.6.6 0 0 1-.412.171.25.25 0 0 0-.249.25v1.098a.25.25 0 0 0 .249.25.58.58 0 0 1 .584.583.58.58 0 0 1-.584.584.25.25 0 0 0-.249.249v1.099a.25.25 0 0 0 .249.249c.324 0 .584.261.584.586a.58.58 0 0 1-.584.583.25.25 0 0 0-.249.25v1.099a.25.25 0 0 0 .249.249.58.58 0 0 1 .584.583c0 .325-.26.586-.584.586a.25.25 0 0 0-.249.249v1.1a.25.25 0 0 0 .249.248.58.58 0 0 1 .584.584c0 .325-.26.585-.584.585a.25.25 0 0 0-.249.25v1.099a.25.25 0 0 0 .249.249.58.58 0 0 1 .584.583.58.58 0 0 1-.584.584.25.25 0 0 0-.249.249v1.1a.25.25 0 0 0 .249.248c.324 0 .584.261.584.586a.58.58 0 0 1-.584.584.25.25 0 0 0-.249.249v1.099a.25.25 0 0 0 .249.249.58.58 0 0 1 .584.583c0 .325-.26.586-.584.586a.25.25 0 0 0-.249.25v1.096a.25.25 0 0 0 .249.25c.324 0 .584.26.584.585a.58.58 0 0 1-.584.584.25.25 0 0 0-.249.249v1.099a.25.25 0 0 0 .249.249c.151 0 .304.065.412.173.107.107.172.26.172.413a.25.25 0 0 0 .249.249H2.18a.25.25 0 0 0 .249-.25.585.585 0 1 1 1.17 0 .25.25 0 0 0 .248.25h1.1a.25.25 0 0 0 .249-.25.585.585 0 1 1 1.17 0 .25.25 0 0 0 .248.25h1.099a.25.25 0 0 0 .25-.25.583.583 0 1 1 1.166 0 .25.25 0 0 0 .25.25h1.099a.25.25 0 0 0 .249-.25.585.585 0 1 1 1.169 0 .25.25 0 0 0 .249.25h1.1a.25.25 0 0 0 .248-.25.585.585 0 1 1 1.17 0 .25.25 0 0 0 .249.25h1.099a.25.25 0 0 0 .249-.25.583.583 0 1 1 1.167 0 .25.25 0 0 0 .25.25h1.098a.25.25 0 0 0 .25-.25.585.585 0 1 1 1.169 0 .25.25 0 0 0 .249.25h1.099a.25.25 0 0 0 .249-.25.585.585 0 1 1 1.17 0 .25.25 0 0 0 .248.25h1.1a.25.25 0 0 0 .249-.25.59.59 0 0 1 .169-.412.25.25 0 0 0 .002-.002.593.593 0 0 1 .412-.171.25.25 0 0 0 .25-.25v-1.098a.25.25 0 0 0-.25-.25.58.58 0 0 1-.583-.583.58.58 0 0 1 .583-.584.25.25 0 0 0 .25-.249V71.75a.25.25 0 0 0-.25-.249.582.582 0 0 1-.583-.586.58.58 0 0 1 .583-.583.25.25 0 0 0 .25-.25v-1.099a.25.25 0 0 0-.25-.249.58.58 0 0 1-.583-.583c0-.325.259-.586.583-.586a.25.25 0 0 0 .25-.249v-1.097a.25.25 0 0 0-.25-.25.582.582 0 0 1-.583-.585.58.58 0 0 1 .583-.583.25.25 0 0 0 .25-.25v-1.099a.25.25 0 0 0-.25-.249.58.58 0 0 1-.583-.583c0-.325.259-.586.583-.586a.25.25 0 0 0 .25-.249v-1.1a.25.25 0 0 0-.25-.248.58.58 0 0 1-.583-.584c0-.325.259-.586.583-.586a.25.25 0 0 0 .25-.249v-1.099a.25.25 0 0 0-.25-.249.58.58 0 0 1-.583-.583.58.58 0 0 1 .583-.584.25.25 0 0 0 .25-.25v-1.098a.25.25 0 0 0-.25-.25.582.582 0 0 1-.583-.585.58.58 0 0 1 .583-.584.25.25 0 0 0 .25-.249v-1.099a.25.25 0 0 0-.25-.249.592.592 0 0 1-.584-.586.25.25 0 0 0-.248-.249h-1.1a.25.25 0 0 0-.249.25.585.585 0 1 1-1.17 0 .25.25 0 0 0-.248-.25h-1.1a.25.25 0 0 0-.248.25.583.583 0 1 1-1.168 0 .25.25 0 0 0-.249-.25H17.68a.25.25 0 0 0-.249.25.585.585 0 1 1-1.17 0 .25.25 0 0 0-.248-.25h-1.1a.25.25 0 0 0-.248.25.585.585 0 1 1-1.17 0 .25.25 0 0 0-.249-.25h-1.099a.25.25 0 0 0-.249.25.583.583 0 1 1-1.167 0 .25.25 0 0 0-.25-.25H9.382a.25.25 0 0 0-.249.25.585.585 0 1 1-1.169 0 .25.25 0 0 0-.249-.25h-1.1a.25.25 0 0 0-.248.25.585.585 0 1 1-1.17 0 .25.25 0 0 0-.249-.25h-1.1a.25.25 0 0 0-.249.25.583.583 0 1 1-1.167 0 .25.25 0 0 0-.25-.25Zm.146.499h.809c.124.46.48.834.979.834.498 0 .854-.374.978-.834h.808c.124.46.482.834.98.834s.854-.374.979-.834h.807c.124.46.48.834.979.834.498 0 .856-.374.98-.834h.808c.124.46.48.834.978.834s.855-.374.979-.834h.807c.125.46.483.834.98.834.499 0 .855-.374.98-.834h.807c.124.46.48.834.978.834.499 0 .856-.374.981-.834h.807c.125.46.48.834.979.834.498 0 .854-.374.979-.834h.807c.125.46.482.834.98.834.499 0 .855-.374.98-.834h.807c.047.184.074.38.212.517.136.137.333.165.517.214v.807c-.46.125-.833.482-.833.979 0 .498.373.856.833.98v.808c-.46.124-.833.481-.833.979 0 .497.373.854.833.978v.808c-.46.124-.833.482-.833.98s.373.854.833.979v.807c-.46.125-.833.483-.833.98 0 .498.373.855.833.98v.807c-.46.124-.833.48-.833.978s.373.856.833.98v.806c-.46.125-.833.483-.833.98 0 .498.373.855.833.98v.807c-.46.124-.833.48-.833.978s.373.856.833.981v.807c-.46.125-.833.481-.833.979s.373.854.833.979v.807c-.184.048-.38.078-.515.214-.138.137-.167.333-.214.518h-.808c-.124-.461-.482-.835-.98-.835-.499 0-.855.374-.979.835h-.807c-.125-.46-.48-.835-.979-.835-.498 0-.856.374-.98.835h-.808c-.124-.46-.48-.835-.979-.835-.498 0-.854.374-.978.835h-.808c-.124-.461-.482-.835-.98-.835s-.854.374-.979.835h-.807c-.124-.46-.48-.835-.979-.835-.498 0-.856.374-.98.835h-.808c-.124-.46-.48-.835-.978-.835s-.855.374-.979.835h-.807c-.125-.461-.483-.835-.98-.835-.499 0-.855.374-.98.835h-.807c-.124-.46-.48-.835-.978-.835-.499 0-.856.374-.981.835h-.807c-.048-.185-.075-.381-.212-.518s-.333-.165-.518-.214v-.807c.46-.125.833-.481.833-.979s-.373-.856-.833-.98v-.806c.46-.125.833-.483.833-.98 0-.498-.373-.855-.833-.98v-.807c.46-.124.833-.48.833-.978s-.373-.856-.833-.98v-.808c.46-.124.833-.481.833-.979 0-.497-.373-.854-.833-.978v-.808c.46-.124.833-.483.833-.98 0-.498-.373-.854-.833-.979v-.807c.46-.125.833-.483.833-.98 0-.499-.373-.855-.833-.98v-.807c.46-.124.833-.48.833-.978s-.373-.856-.833-.981v-.807c.46-.125.833-.481.833-.979 0-.497-.373-.854-.833-.979v-.807c.184-.049.38-.078.516-.214a.25.25 0 0 0 .002-.002c.136-.137.164-.332.212-.515zm50.88.103a.677.677 0 0 0-.672.673v22.358c0 .368.303.672.671.673h2.448a.676.676 0 0 0 .673-.673V52.578a.676.676 0 0 0-.673-.673zm48.974 0a.676.676 0 0 0-.673.673v22.358c0 .369.304.673.673.673h2.448a.677.677 0 0 0 .671-.673V52.578a.677.677 0 0 0-.671-.673zm7.763 0a.676.676 0 0 0-.673.673v22.358c0 .369.304.673.673.673h2.446a.676.676 0 0 0 .673-.673V52.578a.676.676 0 0 0-.673-.673zm-56.738.498h2.448c.1 0 .175.075.175.175v22.358c0 .1-.076.175-.175.175h-2.448a.17.17 0 0 1-.173-.175V52.578c0-.1.074-.175.173-.175zm48.975 0h2.448a.17.17 0 0 1 .173.175v22.358a.17.17 0 0 1-.173.175h-2.448a.171.171 0 0 1-.175-.175V52.578c0-.1.076-.175.175-.175zm7.763 0h2.446c.1 0 .175.075.175.175v22.358c0 .1-.076.175-.175.175h-2.446a.171.171 0 0 1-.175-.175V52.578c0-.1.075-.175.175-.175zm-79.242.648a.677.677 0 0 0-.673.67v2.34a.25.25 0 0 0 .041.137c.02.031.053.051.078.078V74.81c0 .37.304.674.673.674h2.469a.676.676 0 0 0 .673-.674v-8.887h7.455a.676.676 0 0 0 .673-.673v-2.198a.676.676 0 0 0-.673-.674h-7.455v-5.644h8.224a.676.676 0 0 0 .673-.673v-2.338a.677.677 0 0 0-.673-.671zm59.789.033-.308.048h-13.78a.678.678 0 0 0-.671.671v2.226c.001.367.304.67.671.671h9.588L73.629 72.977a.25.25 0 0 0-.002.002.67.67 0 0 0-.117.385l.008 1.667a.25.25 0 0 0 .002.022c.03.312.274.564.586.603l-.152-.078a.666.666 0 0 0 .196.148.25.25 0 0 0 .111.025H89.7a.676.676 0 0 0 .673-.673v-2.39a.676.676 0 0 0-.673-.672H78.886l11.259-16.393a.677.677 0 0 0 .118-.425l-.093-1.494a.677.677 0 0 0-.778-.62zm-43.775.035a2.253 2.253 0 0 0-2.243 2.245 2.252 2.252 0 0 0 2.243 2.243 2.253 2.253 0 0 0 2.245-2.243 2.253 2.253 0 0 0-2.245-2.245zm48.975 0a2.253 2.253 0 0 0-2.245 2.245 2.253 2.253 0 0 0 2.245 2.243 2.253 2.253 0 0 0 2.245-2.243 2.253 2.253 0 0 0-2.245-2.245zm-64.989.43h11.485a.17.17 0 0 1 .175.173v2.338c0 .1-.076.175-.175.175h-8.473a.25.25 0 0 0-.25.25v6.141a.25.25 0 0 0 .25.25h7.704c.1 0 .175.075.175.175v2.198a.17.17 0 0 1-.175.175h-7.704a.25.25 0 0 0-.25.25v9.135a.17.17 0 0 1-.174.176h-2.469a.171.171 0 0 1-.175-.176V56.18a.25.25 0 0 0-.111-.208l-.008-.008v-2.241c0-.1.076-.173.175-.173zm59.866.025a.17.17 0 0 1 .203.161l.093 1.495a.171.171 0 0 1-.029.108.25.25 0 0 0-.002.002L78.207 72.125a.25.25 0 0 0 .206.389h11.286c.1 0 .175.075.175.175v2.389a.17.17 0 0 1-.175.175H74.337c-.006-.005-.013-.008-.017-.014a.25.25 0 0 0-.152-.077.172.172 0 0 1-.152-.154l-.008-1.648a.18.18 0 0 1 .031-.101l11.532-16.666a.25.25 0 0 0-.205-.39H75.304a.17.17 0 0 1-.173-.174v-2.226a.17.17 0 0 1 .173-.173h13.8a.25.25 0 0 0 .039-.004zm-43.852.043c.961 0 1.747.786 1.747 1.747a1.75 1.75 0 0 1-1.747 1.745 1.75 1.75 0 0 1-1.745-1.745 1.75 1.75 0 0 1 1.745-1.747zm48.975 0c.961 0 1.747.786 1.747 1.747a1.75 1.75 0 0 1-1.747 1.745 1.75 1.75 0 0 1-1.747-1.745c0-.961.786-1.748 1.747-1.747zm-87.528 1.35a.25.25 0 0 0-.243.196L3.395 71.325a.25.25 0 0 0 .243.302h3.288a.25.25 0 0 0 .243-.197l1.463-6.866h7.08L9.29 70.922a.25.25 0 0 0-.04.3l1.203 2.13a.25.25 0 0 0 .354.086c.46-.307 1.334-.378 1.946-.378 1.056 0 2.144.372 3.333.372 1.05 0 2.181-.08 3.95-.928a.25.25 0 0 0 .135-.171l.607-2.849a.25.25 0 0 0-.338-.282c-1.153.475-2.885.93-4.354.93-.42 0-.84-.09-1.263-.163l6.272-6.1a.25.25 0 0 0 .069-.12l.533-2.177a.25.25 0 0 0-.242-.307H9.341l.542-2.535h7.37a.25.25 0 0 0 .243-.197l.695-3.265a.25.25 0 0 0-.243-.301zm.203.498H17.64l-.59 2.767H9.682a.25.25 0 0 0-.243.196l-.648 3.033a.25.25 0 0 0 .243.302h12.105l-.441 1.8-6.59 6.408a.25.25 0 0 0 .136.426c.589.09 1.181.233 1.843.233 1.426 0 2.941-.435 4.126-.879l-.498 2.342c-1.629.762-2.625.84-3.628.84-1.08 0-2.166-.37-3.333-.37-.56 0-1.324.105-1.948.402l-1.029-1.823 6.716-6.65a.25.25 0 0 0-.175-.426H8.43a.25.25 0 0 0-.243.197l-1.463 6.865H3.946Zm58.593 2.93c-1.502 0-3.223.433-4.698 1.442-1.477 1.01-2.69 2.624-3.055 4.867-.156.964-.438 3.56.053 5.605.382 1.593 1.536 3.497 3.67 4.656 2.134 1.16 5.212 1.518 9.287.111a.674.674 0 0 0 .448-.695h.002l-.175-1.998a.25.25 0 0 0-.002-.002.677.677 0 0 0-.855-.583.25.25 0 0 0-.002 0c-3.763 1.09-5.884.69-7.085-.191-1.006-.738-1.432-1.92-1.605-3.167h9.885c.357 0 .594-.23.708-.415.1-.162.15-.326.185-.484.073-.325.096-.709.084-1.154a10.574 10.574 0 0 0-.627-3.198c-.419-1.163-1.078-2.35-2.093-3.263-1.017-.915-2.401-1.531-4.125-1.531zm55.676.062c-2.33-.035-4.51.803-5.47 1.385a.675.675 0 0 0-.25.263.25.25 0 0 0-.002.002c-.261.502-.15 1.013-.04 1.442.112.442.288.873.44 1.212a.68.68 0 0 0 .993.282c1.421-.964 3.15-1.417 4.35-1.164.605.128 1.07.399 1.418.872.278.376.43 1.016.493 1.772-1.69.086-3.68.321-5.432 1.111-2.005.905-3.66 2.619-3.634 5.302v.006a.25.25 0 0 0 0 .004c.069 2.677 2.107 4.772 4.727 5.033 1.372.136 3.26-.329 4.907-1.78l.173.735c.03.134.103.256.204.348a.25.25 0 0 0 .002 0c.507.455 1.16.46 1.722.446.29-.007.573-.04.83-.092.25-.05.495-.11.728-.262a.675.675 0 0 0 .218-.895 2.645 2.645 0 0 1-.15-.496 8.754 8.754 0 0 1-.15-.975c-.076-.761-.112-1.72-.128-2.74-.03-2.036.028-4.318.028-5.91a.893.893 0 0 0-.004-.074.25.25 0 0 0 0-.004c-.233-2.146-1.028-3.637-2.148-4.558-1.12-.92-2.502-1.245-3.825-1.265zm-55.676.436c1.606 0 2.857.563 3.79 1.403.936.841 1.562 1.953 1.961 3.06.4 1.108.572 2.21.596 3.047.011.419-.013.766-.072 1.029a.991.991 0 0 1-.123.329c-.047.075-.158.18-.284.18h-10.2a.25.25 0 0 0-.247.275c.149 1.43.634 2.883 1.871 3.792 1.369 1.004 3.678 1.38 7.52.268a.17.17 0 0 1 .221.15l.176 1.998a.25.25 0 0 0 .002 0 .173.173 0 0 1-.117.181c-3.979 1.373-6.89 1.01-8.887-.076-1.999-1.086-3.074-2.878-3.425-4.336-.458-1.908-.193-4.494-.044-5.407.343-2.108 1.465-3.594 2.844-4.537 1.38-.944 3.013-1.356 4.418-1.356zm55.668.062c1.247.019 2.51.323 3.518 1.152 1.006.828 1.746 2.177 1.968 4.228v.015a.25.25 0 0 0 0 .004c0 1.58-.058 3.869-.027 5.922.016 1.027.054 1.996.133 2.782.04.396.095.749.157 1.032.062.282.119.482.204.634a.173.173 0 0 1-.058.233c-.153.1-.319.146-.553.193a4.373 4.373 0 0 1-.745.08c-.544.013-1.03-.008-1.377-.317a.17.17 0 0 1-.053-.09.25.25 0 0 0 0-.002l-.25-1.068a.25.25 0 0 0-.419-.12c-1.603 1.593-3.527 1.983-4.846 1.852-2.384-.238-4.216-2.116-4.28-4.547v-.004a.25.25 0 0 0 0-.002c-.024-2.48 1.454-3.991 3.342-4.843 1.752-.79 3.831-1.029 5.549-1.099a.25.25 0 0 0 .239-.259c-.034-.977-.258-1.74-.654-2.276-.423-.574-1.02-.915-1.718-1.062-1.403-.297-3.217.21-4.731 1.237a.169.169 0 0 1-.257-.072.25.25 0 0 0 0-.002 7.237 7.237 0 0 1-.414-1.132c-.106-.413-.17-.758.002-1.088a.172.172 0 0 1 .062-.066.25.25 0 0 0 .002-.002c.848-.515 3.001-1.346 5.206-1.313zm-77.199.047a.677.677 0 0 0-.671.673V75c0 .368.303.672.671.673h2.578A.676.676 0 0 0 47.58 75V59.675a.676.676 0 0 0-.673-.673zm48.975 0a.676.676 0 0 0-.673.673V75c0 .37.304.674.673.673h2.578a.677.677 0 0 0 .671-.673V59.675a.677.677 0 0 0-.671-.673zM44.33 59.5h2.578c.1 0 .175.075.175.175V75c0 .1-.076.175-.175.175H44.33a.17.17 0 0 1-.173-.175V59.675c0-.1.074-.175.173-.175zm48.975 0h2.578c.1 0 .173.076.173.175V75a.17.17 0 0 1-.173.175h-2.578A.171.171 0 0 1 93.13 75V59.675c0-.1.075-.175.175-.175zm-27.8 1.885c-1.473 0-3.453 1.064-4.064 3.989a.25.25 0 0 0 .243.3h6.96a.25.25 0 0 0 .247-.22c.079-.65-.046-1.565-.54-2.388-.557-.93-1.491-1.68-2.846-1.68zm0 .498c1.176 0 1.923.613 2.419 1.44.381.637.445 1.328.422 1.852h-6.31c.644-2.466 2.285-3.292 3.47-3.292zm56.83 5.475c-1.149.02-2.234.325-3.03.907-.791.578-1.306 1.43-1.329 2.597-.009.436.138.978.52 1.397.374.41.987.715 1.94.655 1.73-.108 2.633-.714 3.128-1.441.497-.73.595-1.611.64-2.315a.25.25 0 0 0 0-.024l-.047-1.35a.25.25 0 0 0-.198-.235c-.528-.11-1.076-.2-1.625-.191zm.007.498c.427-.008.877.069 1.325.156l.04 1.116c-.044.681-.148 1.467-.555 2.065-.415.609-1.117 1.121-2.747 1.223-.842.053-1.256-.182-1.54-.492a1.623 1.623 0 0 1-.39-1.05c.02-1.03.434-1.703 1.126-2.209.687-.502 1.676-.79 2.741-.809z"/>
</svg>);
}