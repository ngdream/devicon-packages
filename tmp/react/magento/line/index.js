const React = require("react");
module.exports = function MagentoLineIcon({size = "1em", color = "#f26322", ...props}){
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
	<path d="M64.044 0 8.586 32.02v63.959l16.67 9.643-.1-63.961 38.789-22.41 38.77 22.41v63.928l16.7-9.608V31.97l-.248-.143zm0 1.146 54.38 31.396v62.866l-14.717 8.466V41.088l-39.762-22.98-39.781 22.98.098 62.813-14.685-8.493V32.592Zm7.285 39.34v63.961l-7.336 4.272-7.382-4.225v-63.98l-16.67 9.642.031 63.96L63.974 128l24.054-13.884V50.127Zm.991 1.717 14.717 8.495v62.847l-23.061 13.309-23.013-13.31-.029-62.817 14.686-8.491v62.833l8.377 4.794 8.323-4.847v-.284z"/>
</svg>);
}