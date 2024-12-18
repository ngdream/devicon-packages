const React = require("react");
module.exports = function DeviconLineIcon({size = "1em", color = "#60BE86", ...props}){
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
	<g fontFamily="sans-serif">
		<path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M64 7.83H4.77l10.18 87.3 49 25h.06l49.07-25 10.15-87.3zm42.77 54.86c0 .88 0 1.67-.77 2L73.25 80.44l-2.42 1.13-.27-3.15v-6.19l.24-1.57 1.09-.47 23.18-10.38-21.54-9.6-9.18 18.13-5.45 10.53-1.22 2.27-2.05-.9L22 64.71a2.42 2.42 0 01-1.45-2v-5.8a2.39 2.39 0 011.42-2l34-15.73 3.21-1.44v9.66l.24 1.34-1.56.7-23.41 10.35 21.85 9.63 8.05-16 6.21-12.65 1.13-2.28 1.81.91L106 54.89c.73.35.76 1.14.76 2z"/>
		<path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M4.209 7.33l10.275 88.123 49.346 25.178h.3l49.415-25.178L123.79 7.33H4.209zm1.123 1h117.336l-10.053 86.477-48.635 24.779-48.564-24.78L5.332 8.33zM59.68 36.967l-3.916 1.758L21.77 54.453a2.893 2.893 0 00-1.72 2.418v5.861l.003.024a2.92 2.92 0 001.744 2.41c.002 0 .002.003.004.004l33.623 15.525 2.478 1.088 1.44-2.68 5.453-10.535 8.967-17.707 20.082 8.95-22.155 9.921-1.341.579-.287 1.88v6.25l.332 3.885 3.072-1.433 32.732-15.743c.518-.222.836-.673.96-1.12.123-.448.113-.9.113-1.34l-.01-5.8c0-.435 0-.886-.125-1.328a1.765 1.765 0 00-.918-1.123h-.002L73.72 38.951l-2.256-1.133-1.354 2.73-6.209 12.65-7.836 15.573L35.69 59.79l22.373-9.893 1.918-.859-.3-1.682V36.967zm-1 1.545v8.933l.18.998-1.204.54L33.211 59.79l23.322 10.277 8.264-16.425 6.21-12.653.907-1.826 1.365.686 32.504 15.492c.235.113.316.238.389.494.072.256.088.63.088 1.055l.01 5.8c0 .44-.01.823-.079 1.073s-.136.358-.388.466l-.01.004-32.758 15.754-1.767.826-.207-2.416v-6.13l.191-1.258.84-.362 24.203-10.84L73.299 49.56l-9.395 18.55-5.447 10.526-.998 1.86-1.623-.714-33.633-15.53-.004-.001a1.919 1.919 0 01-1.148-1.582v-5.727a1.888 1.888 0 011.12-1.576l.005-.002 34.002-15.73 2.502-1.123z"/>
	</g>
</svg>);
}