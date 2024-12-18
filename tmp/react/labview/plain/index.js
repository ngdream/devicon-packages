const React = require("react");
module.exports = function LabviewPlainIcon({size = "1em", color = "#fed500", ...props}){
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
	<path style={{"fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontFeatureSettings":"normal","textIndent":"0","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000"}} d="M29.76 22.46c-4.42-.09-8.06 2.99-8.06 6.81V41.8H3.54A3.54 3.54 0 000 45.34v1.35a3.54 3.54 0 003.54 3.53H21.7v27.65H3.54A3.54 3.54 0 000 81.41v1.34a3.54 3.54 0 003.54 3.54H21.7v12.42c0 5.25 6.56 8.53 11.81 5.91L103 69.9c.89-.44 1.61-1.01 2.2-1.64h19.26a3.54 3.54 0 003.54-3.54v-1.34a3.54 3.54 0 00-3.54-3.54h-19.15c-.6-.68-1.37-1.28-2.31-1.75L33.51 23.37a8.856 8.856 0 00-3.75-.91zm16.68 26.55h6.15V61h11.95v6.08H52.59v11.98h-6.15V67.08H34.49V61h11.96z"/>
</svg>);
}