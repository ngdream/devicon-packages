const React = require("react");
module.exports = function LabviewPlainWordmarkIcon({size = "1em", color = "#fed500", ...props}){
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
	<path style={{"fontFeatureSettings":"normal","fontVariantAlternates":"normal","fontVariantCaps":"normal","fontVariantLigatures":"normal","fontVariantNumeric":"normal","fontVariantPosition":"normal","isolation":"auto","mixBlendMode":"normal","shapePadding":"0","solidColor":"#000","textDecorationColor":"#000","textDecorationLine":"none","textDecorationStyle":"solid","textIndent":"0","textOrientation":"mixed","textTransform":"none","whiteSpace":"normal"}} d="M29.76 9.59c-4.42-.09-8.06 2.99-8.06 6.81v12.53H3.54A3.54 3.54 0 000 32.47v1.35a3.54 3.54 0 003.54 3.53H21.7V65H3.54A3.54 3.54 0 000 68.54v1.34a3.54 3.54 0 003.54 3.54H21.7v12.42c0 5.25 6.56 8.53 11.81 5.91L103 57.03c.89-.44 1.61-1.01 2.2-1.64h19.26a3.54 3.54 0 003.54-3.54v-1.34a3.54 3.54 0 00-3.54-3.54h-19.15c-.6-.68-1.37-1.28-2.31-1.75L33.51 10.5a8.856 8.856 0 00-3.75-.91zm16.68 26.55h6.15v11.99h11.95v6.08H52.59v11.98h-6.15V54.21H34.49v-6.08h11.96zm47.09 66.39c-.88 0-1 1.84-.14 2.16.23.09.52.28.64.43.12.15.81 2.57 1.54 5.39 1.84 7.09 3.22 12.14 3.46 12.68.18.41.31.45 1.42.39l1.22-.06 1.55-5.23c2.77-9.35 3.2-10.68 3.4-10.68.22 0 .25.1 2.72 9.2l1.82 6.71 1.23.06c1.12.05 1.25.02 1.43-.39.22-.5 1.66-5.79 3.57-13.07 1.15-4.39 1.29-4.78 1.89-5.34.51-.47.65-.77.65-1.32 0-.84-.38-1.04-1.58-.84-1.42.24-1.73.98-3.82 9.17-1.63 6.41-2.08 7.86-2.3 7.47-.09-.16-1.11-3.84-2.26-8.17-1.15-4.33-2.19-7.98-2.3-8.12-.12-.14-.6-.25-1.08-.25-.8 0-.9.05-1.14.64-.2.48-3.31 10.91-4.62 15.48-.07.24-.22.45-.32.46-.25.02-.4-.49-2.18-7.41-1.62-6.31-2.17-8.13-2.58-8.6-.3-.34-1.53-.77-2.22-.77zm-20.14.01c-.72-.01-1.68.01-2.95.03-2.55.05-4.8.15-4.98.24-.19.08-.56.61-.83 1.17-.46.95-3.49 9.06-5.14 13.79-.42 1.21-.85 2.12-.99 2.12s-.39-.38-.56-.84c-4.94-13.56-5.77-15.67-6.3-16.01-.66-.42-1.86-.59-2.2-.3-.17.14-.29.57-.29 1 0 .58.09.78.4.88.6.19 1.06 1.25 4.3 9.86 1.64 4.34 3.08 8.17 3.22 8.53.24.63.28.64 1.45.64h1.2l7.07-18.93h4.64v16.96h-.75c-.88 0-1.22.28-1.22.99 0 .91.27.98 3.29.98h2.82v-.98c0-.98 0-.99-.64-.99-.35 0-.74-.07-.86-.15-.15-.1-.25-2.74-.33-8.47l-.12-8.33h.75c.84 0 1.24-.35 1.24-1.08 0-.83-.06-1.06-2.22-1.07zm6.63.02c-1.13.01-1.9.03-2.02.06-.53.13-.79 1.08-.47 1.68.15.28.41.41.87.41h.65l.13 8.78c.13 9.39.17 9.71 1.12 9.97.27.08 2.86.15 5.75.16l5.26.02.41-.52c.33-.42.41-.8.41-1.97v-1.45h-.74c-.94 0-1.11.13-1.35.98-.17.61-.29.7-1.07.85-.86.16-6.85.05-7.04-.13-.05-.05-.14-1.7-.2-3.66l-.11-3.56h7.72l.06-.54c.03-.3.03-.79-.01-1.08l-.07-.54h-7.65v-7.3h3.24c3.5 0 4.25.14 4.25.8 0 .81.36 1.17 1.16 1.17h.75l.12-.97c.17-1.45-.03-2.35-.62-2.74-.44-.29-1.27-.34-6.32-.39-1.6-.02-3.1-.02-4.24-.01zm-43.65 0c-.8.06-1.06.39-1 1.12.05.66.12.73.69.79 1.17.11 1.14-.14 1.22 9.94l.07 9.25 1.02-.06c.99-.06 1.02-.08 1.08-.7.08-.8.5-.84 1.25-.12.3.29 1.01.68 1.59.88 3.07 1.06 6.19-.27 7.79-3.31 1.83-3.47 1.14-8.18-1.54-10.59-2.12-1.91-5.4-2.01-7.86-.23-.54.39-1.03.71-1.07.71-.05 0-.11-1.51-.15-3.35-.07-3.99-.13-4.11-2.07-4.29-.4-.04-.73-.05-.99-.03zm-30.27 0c-.31.02-.56.07-.72.15-.35.19-.43.38-.38.96.05.66.14.75.87.98l.81.26.13 2.51c.07 1.38.13 5.4.13 8.93 0 5.87.03 6.45.35 6.73.19.17.48.35.64.41.16.06 2.6.11 5.41.12 4.99.02 5.12.01 5.57-.41.4-.38.46-.61.46-1.97v-1.54h-.98c-.91 0-.99.04-1.1.54-.22 1.04-.35 1.13-1.98 1.29-1.98.2-5.53.09-5.79-.17-.13-.13-.26-3.5-.35-9.11-.13-7.87-.19-8.95-.47-9.23-.31-.31-1.67-.51-2.59-.44zm115.45.16l.2.79c.22.87.48 1.03.58.36.07-.49.56-.74.56-.29 0 .39.16.48 1.12.63.87.14 1.11-.1.91-.9-.09-.35-.21-.41-.67-.32-.31.06-.61.02-.67-.08-.06-.1-.55-.19-1.07-.19zm-94.23 5.72c-2.12 0-2.64.06-3.33.4-1.21.58-1.52 1.03-1.62 2.28l-.09 1.09.96-.06c.89-.06.99-.12 1.29-.77.42-.9 1.21-1.24 2.83-1.22.91.01 1.46.13 2.09.48.73.4.91.63 1.25 1.61.52 1.52.35 1.77-1.3 1.96-4.18.48-5.48.87-6.86 2.03-1.41 1.19-1.83 3.54-.95 5.23.48.92 1.88 2.01 2.97 2.33.97.28 2.56.24 3.49-.08.47-.17 1.31-.65 1.88-1.08l1.03-.78.24.59c.13.32.43.72.66.88.58.4 2.76.39 3.17-.02.6-.6.21-1.37-.85-1.65l-.75-.21-.14-4.48c-.08-2.46-.23-4.86-.35-5.31-.26-1.02-1.33-2.31-2.35-2.83-.64-.33-1.16-.39-3.27-.39zm16.86 1.97c1.97 0 3.15.78 4.01 2.66.66 1.44.65 4.48-.02 5.97-.54 1.22-1.91 2.51-2.95 2.8-.94.26-1.54.24-2.45-.09-1.3-.46-2.12-1.33-2.7-2.86-.61-1.59-.71-3.31-.3-4.85.67-2.48 2.08-3.64 4.42-3.64zm-13.12 5.65l-.13 1.17c-.26 2.23-1.63 4.16-3.28 4.62-2.08.58-3.86-.27-4.08-1.94-.15-1.1.03-1.65.76-2.36.87-.85 2.09-1.21 4.59-1.35z"/>
</svg>);
}