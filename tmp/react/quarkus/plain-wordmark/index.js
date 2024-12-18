const React = require("react");
module.exports = function QuarkusPlainWordmarkIcon({size = "1em", color = "#4695EB", ...props}){
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
	<path d="m64.316 55.21 5.829-3.366v-6.73l-5.829 3.363Zm0 0 M76.652 31.176H51.348a6.305 6.305 0 0 0-6.285 6.281v25.309a6.305 6.305 0 0 0 6.285 6.28h17.328L64 57.685l-3.395 7.175h-9.257a2.122 2.122 0 0 1-2.094-2.093v-25.31a2.122 2.122 0 0 1 2.094-2.094h25.304a2.125 2.125 0 0 1 2.094 2.094v25.309a2.125 2.125 0 0 1-2.094 2.093H71.16l1.723 4.188h3.77a6.302 6.302 0 0 0 6.28-6.281V37.457a6.302 6.302 0 0 0-6.28-6.281Zm0 0 M57.852 45.113v6.73l5.828 3.368v-6.734Zm12.293 13.461v-6.73l-5.829 3.367Zm5.832-10.097-5.832-3.364v6.73Zm0 0 M20.168 89.742c0 2.02-.41 3.7-1.227 5.035a6.104 6.104 0 0 1-3.46 2.715l3.773 3.903h-2.676l-3.094-3.56-.593.024c-2.336 0-4.141-.71-5.41-2.129-1.27-1.418-1.903-3.421-1.903-6.007 0-2.567.637-4.555 1.906-5.965 1.274-1.414 3.082-2.121 5.426-2.121 2.277 0 4.059.718 5.336 2.156 1.281 1.437 1.922 3.422 1.922 5.95Zm-12.637 0c0 2.133.457 3.754 1.371 4.856.914 1.105 2.243 1.656 3.989 1.656 1.757 0 3.086-.55 3.98-1.645.899-1.097 1.348-2.718 1.348-4.863 0-2.117-.45-3.726-1.34-4.824-.895-1.094-2.215-1.645-3.965-1.645-1.758 0-3.094.551-4.008 1.657-.918 1.101-1.375 2.703-1.375 4.808Zm30.813-7.855v10.195c0 1.797-.543 3.207-1.637 4.234-1.09 1.028-2.59 1.543-4.5 1.543-1.91 0-3.387-.52-4.434-1.554-1.043-1.035-1.566-2.461-1.566-4.27V81.887h1.844v10.281c0 1.316.363 2.324 1.086 3.027.722.703 1.785 1.059 3.187 1.059 1.34 0 2.371-.356 3.094-1.063.719-.707 1.082-1.722 1.082-3.046V81.887ZM55.18 97.645l-1.977-5.012h-6.355l-1.957 5.012h-1.864l6.27-15.825h1.555l6.234 15.825Zm-2.551-6.66-1.844-4.883a26.27 26.27 0 0 1-.738-2.274c-.184.77-.41 1.531-.684 2.274L47.5 90.984Zm11.148.105v6.555h-1.843V81.887h4.351c1.945 0 3.383.367 4.313 1.11.93.737 1.394 1.85 1.394 3.339 0 2.086-1.062 3.492-3.191 4.227l4.304 7.082h-2.18l-3.84-6.551Zm0-1.574h2.528c1.3 0 2.257-.254 2.863-.77.61-.516.914-1.285.914-2.312 0-1.04-.309-1.793-.926-2.254-.617-.461-1.61-.688-2.976-.688h-2.403Zm26.012 8.129h-2.172l-5.781-7.641-1.66 1.465v6.176h-1.844V81.887h1.844v7.812l7.195-7.812h2.18l-6.38 6.843Zm16.816-15.758v10.195c0 1.797-.546 3.207-1.636 4.234-1.094 1.028-2.594 1.543-4.504 1.543-1.906 0-3.387-.52-4.43-1.554-1.047-1.035-1.566-2.461-1.566-4.27V81.887h1.844v10.281c0 1.316.359 2.324 1.082 3.027.722.703 1.789 1.059 3.19 1.059 1.34 0 2.372-.356 3.09-1.063.723-.707 1.083-1.722 1.087-3.046V81.887Zm15.817 11.562c0 1.387-.504 2.469-1.52 3.246-1.011.778-2.382 1.164-4.12 1.164-1.88 0-3.325-.242-4.337-.722V95.37c.684.281 1.395.5 2.125.645.75.156 1.512.234 2.278.238 1.23 0 2.152-.234 2.777-.695.621-.465.934-1.11.934-1.938 0-.547-.114-.996-.332-1.34-.22-.347-.59-.668-1.106-.965-.52-.293-1.305-.629-2.36-1.007-1.476-.524-2.53-1.145-3.163-1.864-.633-.718-.95-1.656-.95-2.812 0-1.215.461-2.18 1.38-2.899.917-.722 2.132-1.078 3.64-1.074 1.578 0 3.027.285 4.352.863l-.575 1.59c-1.308-.547-2.582-.82-3.816-.82-.977 0-1.738.207-2.285.625-.551.414-.824.996-.824 1.734 0 .551.101.996.304 1.344.203.348.54.668 1.016.961.48.293 1.219.613 2.207.965 1.664.59 2.808 1.223 3.433 1.898.625.676.942 1.551.942 2.63ZM69.828 37.832 64 41.195l5.828 3.367Zm-11.66 0v6.73L64 41.196Zm0 0 M69.828 44.563 64 41.194l-5.832 3.367L64 47.93Zm-17.805 3.914 5.829 3.367v-6.73Zm5.829 10.097 5.828-3.363-5.828-3.367Zm0 0"/>
</svg>);
}