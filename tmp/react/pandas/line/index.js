const React = require("react");
module.exports = function PandasLineIcon({size = "1em", color = "#130754", ...props}){
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
	<path d="M89.548 0v96.798h14.872V0Zm.993.992h12.887v94.814H90.541ZM45.878 7.508v29.816H60.75V7.508Zm.992.992h12.888v27.831H46.87ZM23.58 31.202V128h14.872V31.201Zm44.137.034V61.05H82.59V31.236Zm-43.145.958h12.887v94.814H24.572Zm44.137.035h12.888v27.829H68.709ZM45.878 44.742v14.591H60.75v-14.59Zm.992.992h12.888v12.607H46.87Zm-.992 20.98v29.813H60.75V66.713Zm.992.991h12.888v27.83H46.87Zm20.847.772v14.591H82.59V68.477Zm.992.992h12.888v12.607H68.709Zm-.992 21.025v29.814H82.59V90.494Zm.992.992h12.888v27.83H68.709Z"/>
</svg>);
}