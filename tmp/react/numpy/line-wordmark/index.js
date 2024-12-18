const React = require("react");
module.exports = function NumpyLineWordmarkIcon({size = "1em", color = "#4dabcf", ...props}){
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
	<path d="m21.328 41.1-.22.11-8.008 3.996 8.53 4.298 7.976-4.253zm-.002 1.106 6.125 3.071-5.833 3.112-6.31-3.18zm-10.582 4.176-.222.11-9.038 4.509 8.74 4.386 9.029-4.713zm21.224.052-.225.12-7.808 4.114 8.886 4.48 8.257-4.145zM10.74 47.488l6.342 3.201-6.866 3.584-6.52-3.27zm21.237.06 6.89 3.455-6.046 3.034-6.725-3.39zM21.57 51.844l-.227.118-8.785 4.601 8.723 4.375 9.176-4.603zM0 52.413V76.08l6.214 3.326V68.808l2.629 5.056 2.464 4.74.824 1.587.236.456c.056.108.112.219.085.163l.002.006.002.003c.037.074.244.494.544.962.299.467.672.991 1.174 1.325h.002v.002c1.064.704 5.384 3.3 5.384 3.3l.75.452.005-24.084-6.863-3.453v11.358C12.11 67.825 7.14 57.253 6.54 56.014v-.002c-.127-.261-.286-.352-.423-.449a2.957 2.957 0 0 0-.321-.195h-.002a811.897 811.897 0 0 0-5.074-2.59Zm42.582.33-.715.356-7.733 3.843.01 10.862 8.438-4.287zm-21.003.215 6.677 3.373-6.975 3.5-6.55-3.287zM.99 54.028c.813.411 3.24 1.642 4.345 2.218.03.016.13.07.212.128.083.058.143.154.103.071.647 1.338 7.849 16.659 7.849 16.659l.943-.21V60.93l4.882 2.457L19.32 85.1c-.925-.558-3.764-2.268-4.597-2.818l-.002-.002c-.26-.174-.622-.618-.888-1.033a9.523 9.523 0 0 1-.491-.869c-.032-.066-.042-.082-.095-.185l-.238-.459-.822-1.586-2.466-4.742-3.563-6.851-.934.228v10.97L.99 75.49Zm40.602.313v8.568l-6.458 3.282-.01-8.634zm7.512 1.532v18.475h4.561v-9.864c0-.06-.005-.128-.006-.188l7.278 9.181-.013-.019c.209.291.487.528.808.687l.016.007.017.006c.314.127.652.188.99.178h2.594V55.873h-4.566v9.754c0 .113.015.226.017.34l-7.34-9.278-.004-.006a3.993 3.993 0 0 0-.333-.356l-.002-.002a1.533 1.533 0 0 0-.404-.28l-.012-.006-.013-.006a1.636 1.636 0 0 0-.456-.122 3.294 3.294 0 0 0-.503-.039Zm50.619 0v18.463h5.044v-5.84h1.606a10.364 10.364 0 0 0 3.285-.47 6.458 6.458 0 0 0 2.37-1.314l.002-.002.002-.004a5.314 5.314 0 0 0 1.416-2.062l.002-.002v-.002a7.21 7.21 0 0 0 .431-2.48l4.628 10.584-2.644 5.54h3.575l-.039-.003a1.845 1.845 0 0 0 1.054-.236l.037-.019.033-.027a1.838 1.838 0 0 0 .545-.748l-.004.013L128 60.911h-3.746c-.314 0-.612.098-.865.263a1.38 1.38 0 0 0-.578.716l-.002.002-1.85 5.338v.002c-.013.04-.03.08-.044.12-.013-.036-.019-.073-.033-.109l-.002-.003-2.034-5.354v-.002a1.48 1.48 0 0 0-.505-.677l-.002-.002a1.552 1.552 0 0 0-.989-.3h-3.66c-.07-.425-.07-.862-.223-1.267v-.002l-.002-.004a5.229 5.229 0 0 0-1.4-2.003l-.005-.002-.002-.002a6.58 6.58 0 0 0-2.357-1.296h-.002a10.637 10.637 0 0 0-3.33-.457zm-49.629.99h1.639c.12 0 .245.01.363.029l.012.002.013.002a.64.64 0 0 1 .17.046.588.588 0 0 1 .136.09l.006.005.004.004c.087.081.172.174.257.277l9.357 11.827-.18-1.702a17.358 17.358 0 0 1-.098-1.816v-8.764h2.586v16.483h-1.634a1.446 1.446 0 0 1-.567-.1 1.187 1.187 0 0 1-.43-.364l-.007-.01-9.259-11.684.132 1.626c.023.296.042.586.058.875.015.283.023.547.023.795v8.873h-2.58Zm50.62 0h5.68a9.65 9.65 0 0 1 3.017.414 5.58 5.58 0 0 1 1.996 1.095v.002a4.244 4.244 0 0 1 1.136 1.62l.001.002c.25.658.372 1.36.364 2.064v.012a6.212 6.212 0 0 1-.387 2.222v.002a4.328 4.328 0 0 1-1.147 1.67 5.473 5.473 0 0 1-2.007 1.115h-.002v.002c-.96.3-1.962.442-2.973.424h-2.615v5.839h-3.064zm-68.617 1.093-.715.356-8.977 4.462v10.839l9.7-4.822zm71.68.944v6.539h2.605c1.134 0 2.056-.27 2.646-.917.559-.61.823-1.45.824-2.44a3.697 3.697 0 0 0-.203-1.256l-.002-.002v-.004a2.722 2.722 0 0 0-.67-1.035l-.001-.002-.004-.004a3 3 0 0 0-1.109-.657h-.002v-.002a4.595 4.595 0 0 0-1.487-.22zm-72.67.653.008 8.623-7.72 3.84v-8.627zm73.66.337h1.623a3.604 3.604 0 0 1 1.166.174 2 2 0 0 1 .735.437c.189.183.333.407.422.654a2.684 2.684 0 0 1 .149.915v.008c0 .824-.2 1.375-.565 1.775-.334.366-.938.596-1.915.596h-1.615zm-11.135.82a6.194 6.194 0 0 0-1.247.128 5.4 5.4 0 0 0-1.215.41h-.002l-.004.002a4.736 4.736 0 0 0-1.085.737h-.002l-.002.002c-.171.156-.278.361-.42.543-.245-.401-.447-.837-.816-1.133l-.006-.004-.005-.006a3.406 3.406 0 0 0-2.172-.675 4.408 4.408 0 0 0-2.041.476c-.29.144-.565.316-.82.522h-.002c-.04.032-.073.071-.112.104-.093-.26-.236-.502-.462-.663l-.016-.012-.015-.01a1.53 1.53 0 0 0-.859-.224h-2.78v13.431l4.708.004v-9.25c.18-.155.363-.306.579-.417a1.6 1.6 0 0 1 .725-.17c.458 0 .709.106.88.282l.002.002.002.002c.133.134.277.502.277 1.15v8.397h4.705V65.94c0-.538.13-.861.35-1.08l.002-.001a1.21 1.21 0 0 1 .888-.354h.016c.455 0 .697.112.866.31.17.197.294.55.294 1.123v8.394h4.71v-8.388a6.85 6.85 0 0 0-.314-2.155 4.483 4.483 0 0 0-.947-1.675l-.004-.004-.004-.004a4.15 4.15 0 0 0-1.57-1.05h-.003l-.004-.002a5.747 5.747 0 0 0-2.071-.344zm-27.759.197v8.39a6.794 6.794 0 0 0 .298 2.043 4.76 4.76 0 0 0 .913 1.671h.002a4.158 4.158 0 0 0 1.503 1.122l.002.002h.002a4.835 4.835 0 0 0 2.002.395 5.377 5.377 0 0 0 1.197-.126 5.24 5.24 0 0 0 1.96-.876h.001l.002-.002c.07-.052.133-.116.201-.17.186.62.788 1.03 1.434.974l-.043.002h2.795V60.907h-4.71v9.102c-.234.196-.48.383-.75.515a2.183 2.183 0 0 1-.934.207h-.018l-.015.002a1.016 1.016 0 0 1-.826-.337c-.182-.22-.302-.563-.302-1.102v-8.387zm20.785.793h.025a2.416 2.416 0 0 1 1.543.48c.433.35.765.81.958 1.33l.379 1.028.52-.964a3.26 3.26 0 0 1 .661-.855 3.75 3.75 0 0 1 .857-.58 4.393 4.393 0 0 1 .985-.33 5.204 5.204 0 0 1 1.056-.109h.01a4.766 4.766 0 0 1 1.715.286 3.155 3.155 0 0 1 1.188.793c.338.378.59.82.739 1.302v.002h.002a5.874 5.874 0 0 1 .266 1.845v7.414h-2.729v-7.404c0-.715-.151-1.325-.534-1.77-.38-.442-.965-.648-1.609-.65a2.19 2.19 0 0 0-1.609.639c-.444.44-.644 1.07-.644 1.783v7.408h-2.725V65.94c0-.776-.136-1.41-.563-1.843-.391-.4-.957-.582-1.588-.582-.407 0-.81.093-1.178.28h-.002l-.002.002a3.99 3.99 0 0 0-.965.698l-.147.145v8.712l-2.727-.004v-11.45h1.828a.55.55 0 0 1 .286.075c.06.049.11.113.13.184l.001.006.44 1.499.591-.621a6.544 6.544 0 0 1 .602-.56 3.44 3.44 0 0 1 .638-.405h.002l.002-.002a3.425 3.425 0 0 1 1.598-.374zm28.19.196h2.55a.548.548 0 0 1 .353.106.506.506 0 0 1 .166.228v.002l2.04 5.366.003.002c.18.461.329.934.445 1.417l.412 1.714.541-1.677a13.4 13.4 0 0 1 .256-.727 21.171 21.171 0 0 0 .282-.772v-.002l1.847-5.334.002-.002a.39.39 0 0 1 .165-.201l.008-.006.008-.004a.605.605 0 0 1 .328-.105h2.25l-6.352 14.982-.002.008a.848.848 0 0 1-.228.306.843.843 0 0 1-.443.098l-.02-.002h-2.023l2.16-4.53zm-47.984.002h2.733v7.396c0 .69.155 1.294.532 1.744l.005.006.006.006a2.011 2.011 0 0 0 1.633.665c.455-.003.91-.095 1.33-.294l.004-.002.002-.002a4.796 4.796 0 0 0 1.155-.789l.158-.147v-8.583h2.73v11.444h-1.826l-.022.002a.378.378 0 0 1-.4-.27v-.005l-.472-1.497-.576.57a6.375 6.375 0 0 1-.689.587 4.244 4.244 0 0 1-1.584.708h-.002a4.406 4.406 0 0 1-.988.102h-.014a3.848 3.848 0 0 1-1.594-.313h-.002a3.174 3.174 0 0 1-1.14-.853 3.769 3.769 0 0 1-.724-1.323 5.805 5.805 0 0 1-.255-1.748v-.003zm47.034.162v.012l-.002-.006.002-.006zm-71.316 3.797-.717.361-7.721 3.896.005 10.926 8.433-4.205zm-.99 1.609v8.758L35.14 79.44l-.006-8.715zm-9.483 3.646-.718.358-8.986 4.497V86.9l9.712-4.85zm-.99 1.601.007 8.725-7.73 3.86v-8.72z"/>
</svg>);
}