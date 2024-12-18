const React = require("react");
module.exports = function DeviconLineWordmarkIcon({size = "1em", color = "#60BE86", ...props}){
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
		<path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M64 27.208H12.154l8.91 76.417 42.892 21.884h.053l42.953-21.884 8.884-76.417zm37.438 48.021c0 .77 0 1.462-.674 1.75L72.097 90.767l-2.118.99-.237-2.758V83.58l.21-1.375.954-.41 20.29-9.087-18.854-8.403-8.036 15.87-4.77 9.217-1.068 1.987-1.795-.788-29.437-13.594a2.118 2.118 0 01-1.27-1.75V70.17c.06-.768.538-1.44 1.243-1.751l29.762-13.77 2.81-1.26v8.456l.21 1.173-1.366.613-20.491 9.06 19.126 8.43 7.046-14.006 5.436-11.073.99-1.996 1.584.796 28.448 13.56c.64.306.666.997.666 1.75z"/>
		<path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M11.663 26.77l8.994 77.138 43.194 22.039h.264l43.254-22.04 8.968-77.137H64zm.983.876h102.708l-8.8 75.696-42.571 21.69-42.51-21.69zm47.572 25.066l-3.428 1.54-29.756 13.767a2.533 2.533 0 00-1.504 2.117v5.13l.001.02a2.557 2.557 0 001.527 2.11l.003.004 29.432 13.59 2.17.952 1.26-2.346 4.773-9.221 7.849-15.5 17.578 7.834-19.392 8.685-1.175.506-.25 1.646v5.47l.29 3.401 2.689-1.255 28.652-13.78c.453-.194.731-.589.84-.98.107-.392.099-.788.099-1.173l-.01-5.076c0-.382 0-.776-.109-1.163a1.543 1.543 0 00-.803-.983h-.002L72.51 54.449l-1.975-.991-1.185 2.39-5.434 11.072-6.86 13.632L39.22 72.69l19.584-8.66 1.679-.752-.264-1.472zm-.875 1.353v7.82l.157.873-1.053.472-21.398 9.461 20.415 8.997 7.234-14.379 5.436-11.075.793-1.598 1.196.6 28.451 13.56c.206.1.277.21.34.433.064.224.078.552.078.924L101 75.23c0 .385-.007.72-.068.939-.06.219-.12.314-.34.408l-.009.004L71.91 90.37l-1.547.723-.182-2.115v-5.366l.168-1.101.735-.317 21.186-9.488-20.13-8.97-8.223 16.238-4.768 9.213-.874 1.627-1.42-.624-29.44-13.593-.004-.002a1.68 1.68 0 01-1.005-1.385V70.2c.05-.606.425-1.135.981-1.38l.004-.002 29.763-13.77z"/>
	</g>
	<g style={{"InkscapeFontSpecification":"'Damion, Normal'"}}>
		<path style={{"InkscapeFontSpecification":"'Damion, Normal'","InkscapeStroke":"none"}} d="M33.527 1.342a14.63 14.63 0 00-3.172.342c-1.02.225-1.983.53-2.89.914-.906.374-1.741.814-2.506 1.32v-.002a12.941 12.941 0 00-1.965 1.564c-.553.543-.993 1.105-1.316 1.688v.002l-.002.002c-.325.577-.508 1.151-.508 1.717 0 .457.147.9.476 1.191.33.291.772.399 1.256.399.52 0 1.008-.131 1.418-.397.372-.24.71-.55 1.016-.918.296-.346.59-.734.883-1.162l.006-.006c.276-.391.591-.784.949-1.18.31-.282.684-.551 1.129-.8h.004c.458-.26.96-.486 1.508-.678a11.497 11.497 0 011.714-.453l.004-.002h.002a9.184 9.184 0 011.78-.178c.613 0 1.124.101 1.544.287.432.191.768.446 1.032.774l.002.002.002.002c.277.334.485.733.62 1.209v.003l.003.004a5.51 5.51 0 01.222 1.602c0 .682-.127 1.424-.39 2.223l-.002.002v.002c-.255.8-.62 1.606-1.1 2.418h-.002v.002c-.469.8-1.04 1.581-1.717 2.341a14.996 14.996 0 01-2.218 2.037 13.14 13.14 0 01-2.58 1.504c-.514.226-1.065.293-1.6.422.177-.258.35-.49.53-.763h-.003a58.14 58.14 0 001.313-2.077l.002-.004c.431-.7.844-1.392 1.238-2.084v-.002c.4-.696.769-1.347 1.104-1.949l.003-.006c.343-.6.643-1.145.903-1.635l.004-.005.634-1.157.002-.006c.18-.307.324-.63.43-.97.109-.348.166-.69.166-1.024a1.99 1.99 0 00-.367-1.181c-.293-.401-.796-.578-1.322-.578-.176 0-.333.035-.526.086-.257.055-.51.167-.777.328l-.004.004-.004.001c-.266.167-.54.387-.834.66l-.004.003-.004.004a6.238 6.238 0 00-.888 1.119l-.016.023-5.898 11.725.037-.06a3.63 3.63 0 00-.43.827c-.115.312-.176.64-.176.977 0 .456.161.893.461 1.22.315.353.783.54 1.272.54 1.796 0 3.475-.216 5.03-.649 1.555-.43 2.974-1.013 4.255-1.752a16.403 16.403 0 003.41-2.568l.002-.002a16.445 16.445 0 002.494-3.084l.002-.002a13.985 13.985 0 001.54-3.322c.356-1.13.538-2.221.538-3.272a8.982 8.982 0 00-.47-2.941 6.405 6.405 0 00-1.442-2.414c-.646-.697-1.46-1.241-2.426-1.627-.979-.392-2.109-.58-3.38-.58zm0 1c1.173 0 2.175.175 3.01.51.848.339 1.529.797 2.067 1.378l.002.002.003.004a5.384 5.384 0 011.22 2.047l.001.002v.002a7.97 7.97 0 01.416 2.617c0 .936-.161 1.924-.492 2.971v.002l-.002.002a12.975 12.975 0 01-1.434 3.09v.002h-.002a15.439 15.439 0 01-2.345 2.9l-.002.002a15.396 15.396 0 01-3.205 2.414h-.002c-1.202.693-2.54 1.245-4.022 1.655h-.002c-1.46.406-3.047.613-4.764.613-.273 0-.402-.064-.527-.205l-.004-.002-.004-.004c-.137-.15-.197-.3-.197-.549 0-.218.038-.425.113-.629.082-.221.186-.422.313-.605l.021-.03 5.885-11.699c.258-.398.508-.711.734-.93a4.74 4.74 0 01.67-.53c.207-.125.374-.19.477-.212l.012-.004.011-.002a1.93 1.93 0 01.287-.056c.333 0 .444.072.514.168.117.16.176.335.176.592 0 .22-.037.463-.12.726a3.6 3.6 0 01-.341.77l-.004.006-.002.005-.644 1.174-.002.004-.002.002a57.912 57.912 0 01-.895 1.62l-.002.001-.002.004c-.333.599-.7 1.246-1.1 1.941v.002a69.08 69.08 0 01-1.224 2.063l-.002.002v.002a57.146 57.146 0 01-1.291 2.045h-.002a43.775 43.775 0 01-1.273 1.842l-.666.906 1.119-.113a10.33 10.33 0 003.129-.829 14.141 14.141 0 002.777-1.617h.002a15.989 15.989 0 002.363-2.174 15.746 15.746 0 001.832-2.5l.002-.002a12.77 12.77 0 001.19-2.615c.29-.882.441-1.728.441-2.535 0-.67-.087-1.298-.264-1.883l-.002-.002a4.28 4.28 0 00-.81-1.568 3.692 3.692 0 00-1.398-1.057c-.573-.253-1.228-.373-1.952-.373-.654 0-1.31.067-1.97.197-.643.12-1.265.282-1.862.49a10.17 10.17 0 00-1.671.753h.003c-.506.283-.95.596-1.326.94l-.017.017-.014.017c-.395.434-.746.87-1.055 1.309l-.002.002-.004.004c-.277.406-.55.767-.824 1.086l-.004.003-.002.004c-.248.3-.511.536-.789.715-.239.155-.516.237-.875.237-.336 0-.512-.075-.593-.147-.082-.072-.14-.175-.14-.443 0-.35.116-.757.382-1.229v-.002l.002-.002c.268-.485.646-.973 1.142-1.46a11.985 11.985 0 011.817-1.444V4.75a13.674 13.674 0 012.338-1.227l.002-.002h.002a15.55 15.55 0 012.718-.86 13.648 13.648 0 012.957-.32zm34.075 5.303a2.43 2.43 0 00-1.096.238l-.004.002-.004.002a2.484 2.484 0 00-1.215 1.39l-.002.006-.002.006a2.63 2.63 0 00-.138.832v.024l.002.023c.04.424.253.822.585 1.088l.006.004.004.004c.397.3.905.375 1.55.375a2.2 2.2 0 001.054-.248c.279-.152.523-.346.713-.586l.004-.006.003-.004c.176-.234.305-.492.39-.764.087-.255.14-.506.14-.756a1.61 1.61 0 00-.483-1.156c-.367-.364-.89-.474-1.507-.474zm0 1c.487 0 .735.112.806.183l.004.004.004.004c.128.122.176.228.176.44 0 .11-.025.257-.088.437l-.002.01-.004.007a1.48 1.48 0 01-.232.458c-.097.12-.224.228-.4.324-.147.079-.33.127-.579.127-.537 0-.854-.108-.937-.17a.496.496 0 01-.204-.381c.004-.151.026-.308.08-.475a1.56 1.56 0 01.282-.486c.117-.138.263-.253.447-.35.167-.083.375-.132.647-.132zm-20.524 2.939c-.802 0-1.569.116-2.29.353h-.003a8.308 8.308 0 00-1.933.932c-.586.384-1.12.83-1.596 1.336-.46.49-.853 1-1.178 1.527a7.48 7.48 0 00-.752 1.594 4.775 4.775 0 00-.267 1.504c0 .585.087 1.15.267 1.69.18.54.446 1.026.791 1.447l.002.004.004.002a4.05 4.05 0 001.29 1.013l.001.002c.524.257 1.117.381 1.754.381.712 0 1.43-.098 2.154-.289a13.996 13.996 0 002.05-.681 18.07 18.07 0 001.855-.899h.002c.278-.157.499-.3.744-.45.031.128.03.272.076.391l.002.004.002.006c.163.403.381.757.66 1.047.276.287.609.506.979.647.362.146.748.224 1.144.224.792 0 1.558-.253 2.258-.73.592-.398 1.154-1.015 1.71-1.694.274.157.556.327.774.413.326.128.67.191 1.016.191.828 0 1.584-.179 2.299-.445.103.615.3 1.168.715 1.547l.006.003.003.004c.556.485 1.302.711 2.16.711.61 0 1.215-.12 1.803-.351a9.233 9.233 0 001.68-.877h.002c.258-.17.505-.372.756-.563.144.28.28.566.5.793l.002.002.004.004c.308.308.683.55 1.11.725h.001l.002.002c.449.18.948.265 1.488.265.69 0 1.389-.108 2.088-.32l.008-.002a12.6 12.6 0 001.973-.758l.004-.002a14.82 14.82 0 001.789-1.006l.002-.002c.043-.028.079-.055.12-.084.04.092.05.2.098.286.248.441.56.815.93 1.107l.006.006.006.004a3.81 3.81 0 001.17.592c.386.114.74.18 1.074.18.747 0 1.455-.098 2.121-.292h.002a7.619 7.619 0 001.865-.78 7.632 7.632 0 001.579-1.21c.356-.356.656-.77.953-1.186.137.073.27.172.412.22h.004l.002.001c.288.092.585.137.882.137.36 0 .708-.138 1.051-.287-.123.293-.254.599-.345.846-.143.386-.23.664-.23.96 0 .409.142.81.415 1.11.289.317.718.48 1.158.48.432 0 .85-.164 1.149-.46a3.51 3.51 0 00.676-.868l.002-.004.002-.002c.179-.328.346-.675.503-1.039l.002-.006c.154-.342.321-.659.5-.955.303-.462.65-.984 1.045-1.568.388-.573.812-1.114 1.274-1.621l.002-.002h.002a7.552 7.552 0 011.437-1.266c.478-.312.95-.453 1.457-.455v.012c0 .032-.031.19-.138.412a13.97 13.97 0 01-.455.857l-.002.002v.002c-.18.32-.38.666-.598 1.035-.223.37-.434.745-.637 1.122l-.004.003-.002.004c-.196.384-.37.76-.52 1.13l-.001.005-.002.004c-.148.39-.237.764-.26 1.121l.002-.031-.027.207-.006.035v.22c0 .582.134 1.104.453 1.503l.006.008.006.005c.352.41.898.59 1.496.59.211 0 .428-.025.652-.068.23-.042.473-.102.733-.182a15.176 15.176 0 001.955-.695l.002-.002h.002a16.56 16.56 0 001.564-.814h.004c.488-.293.962-.606 1.422-.938l.004-.004c.458-.325.958-.681 1.502-1.072l.01-.006.008-.008c.445-.35.789-.744 1.01-1.185.214-.41.341-.812.341-1.213 0-.271-.08-.543-.244-.762a.996.996 0 00-.771-.396c-.138 0-.27.028-.39.074-.141.053-.27.133-.386.234l-.006.006-.004.006c-.262.244-.6.526-1.011.844a21.93 21.93 0 01-1.328.937c-.483.306-.99.598-1.52.877l-.002.002h-.002a12.28 12.28 0 01-1.514.69l-.01.003c.086-.15.191-.33.333-.554l.004-.004c.172-.268.357-.56.556-.873.205-.322.41-.66.613-1.02l.002-.004c.217-.374.408-.755.577-1.14a8.08 8.08 0 00.443-1.192c.116-.412.176-.815.176-1.209 0-.679-.232-1.289-.729-1.636-.429-.315-.963-.467-1.547-.467a5.75 5.75 0 00-1.568.234h-.002a9.883 9.883 0 00-1.535.586c-.493.232-.948.5-1.365.805l-.002.002-.004.002c-.016.011-.022.024-.037.035-.058-.281-.096-.578-.307-.77-.257-.24-.6-.392-.951-.392-.398 0-.784.146-1.133.39-.374.263-.664.646-.883 1.116v.002l-.002.002c-.05.11-.113.238-.176.369-.03.023-.067.03-.093.057l-.012.011-.012.014c-.121.14-.276.316-.465.523h-.002a17.548 17.548 0 01-1.308 1.295c-.245.218-.487.41-.729.58a4.37 4.37 0 01-.68.399h-.003l-.004.002a1.08 1.08 0 01-.444.123c-.06 0-.1-.015-.146-.026.093-.28.194-.564.25-.832v-.004c.081-.396.125-.756.125-1.087 0-.623-.136-1.186-.434-1.653a3.296 3.296 0 00-1.027-1.072 4.074 4.074 0 00-1.318-.555 5.628 5.628 0 00-1.274-.156c-.895 0-1.726.15-2.478.453a6.997 6.997 0 00-1.963 1.15v.003a7.921 7.921 0 00-1.483 1.603l-.002.002a11.223 11.223 0 00-1.002 1.768l-.002.002v.002a10.21 10.21 0 00-.425 1.177l-.032.02a33.88 33.88 0 01-1.199.719c-.435.25-.885.482-1.357.695h-.004c-.456.21-.915.381-1.38.518-.448.132-.86.195-1.234.195-.32 0-.509-.07-.64-.174-.116-.097-.162-.183-.162-.4 0-.145.04-.372.14-.659.113-.294.262-.6.45-.921.199-.335.42-.662.666-.979l.002-.002.002-.002c.243-.325.49-.612.736-.86l.002-.001.004-.004c.253-.244.496-.433.722-.57l.002-.003h.002a.923.923 0 01.399-.152c.004.033.012.041.012.086 0 .144-.005.297-.014.459v.4c0 .196.004.403.186.622l.015.017.016.016c.255.255.485.232.726.232.454 0 .889-.15 1.22-.441.291-.258.526-.577.704-.944a4.49 4.49 0 00.373-1.127v-.004c.072-.387.108-.745.108-1.078 0-.295-.055-.576-.18-.83a1.437 1.437 0 00-.488-.59 1.793 1.793 0 00-.657-.31 2.793 2.793 0 00-.707-.088 5.09 5.09 0 00-2.048.441v.002h-.002a8.88 8.88 0 00-1.852 1.123l-.002.002h-.002c-.58.46-1.12.985-1.617 1.573a13.975 13.975 0 00-1.293 1.783 10.09 10.09 0 00-.719 1.447 5.13 5.13 0 01-.082.078l-.004.004-.002.002c-.24.23-.498.463-.775.694a8.19 8.19 0 01-.817.574c-.272.167-.539.3-.804.402l-.004.002h-.002c-.236.095-.45.137-.647.137a.664.664 0 01-.27-.041c.032.03.026.061.026-.088 0-.177.032-.392.106-.639l.002-.006c.09-.268.194-.542.312-.824.129-.285.26-.558.397-.822l.002-.004.002-.004c.144-.288.274-.551.39-.793v-.002c.095-.2.178-.372.246-.518v-.002l.2-.423.238-.483c.08-.162.189-.366.32-.61l.002-.005c.074-.134.125-.283.143-.44.017-.085.033-.171.043-.257l.004-.028v-.027a1.67 1.67 0 00-.57-1.26 1.853 1.853 0 00-2.146-.254c-.307.167-.552.43-.747.752l-.012.02-.01.021-.486 1.002c-.134.269-.264.533-.389.791l-.002.006-.004.008c-.116.26-.199.453-.254.596-.127.316-.28.653-.464 1.011-.143.27-.274.556-.405.844-.271.16-.543.31-.816.432a6.15 6.15 0 01-1.012.328h-.002a4.095 4.095 0 01-.943.115c.23-.379.465-.771.666-1.062l.002-.002c.308-.444.575-.847.8-1.21l.003-.001.002-.002a6.83 6.83 0 00.554-1.125c.158-.398.233-.83.233-1.284 0-.426-.103-.83-.323-1.17-.26-.41-.752-.619-1.252-.619-.394 0-.75.207-1.029.496a5.35 5.35 0 00-.742.975l-.002.002c-.227.376-.462.803-.705 1.28l-.002.001v.002a49.71 49.71 0 01-.723 1.39l-.002.003-.002.004c-.242.465-.503.92-.783 1.367v.002l-.002.002a6.767 6.767 0 01-.824 1.094l-.02.021-.017.024a7.59 7.59 0 01-.94 1.072c-.16.146-.221.144-.31.18-.012-.05-.025-.1-.034-.149l-.002-.008a1.7 1.7 0 01-.021-.181c0-.385.052-.822.16-1.309.12-.51.266-1.03.434-1.562.17-.538.347-1.07.535-1.596l.002-.006c.202-.548.376-1.057.521-1.523l-.029.074a1.147 1.147 0 00-.069-1.106 1.51 1.51 0 00-.88-.648 1.545 1.545 0 00-.53-.1c-.385 0-.765.128-1.12.346-.391.235-.686.609-.906 1.07l-.013.027-.01.03c-.105.314-.247.739-.428 1.273l-.002.004-.002.004c-.173.54-.352 1.124-.535 1.76a24.59 24.59 0 00-.412 1.683c-.172.1-.342.202-.565.324h-.003l-.002.002c-.366.207-.778.429-1.24.665-.455.222-.925.431-1.409.626h-.002c-.466.192-.942.35-1.428.479a5.301 5.301 0 01-1.275.172c-.344 0-.574-.067-.719-.154 0-.001 0-.002-.002-.002 1.041-.404 2.02-.806 2.764-1.211h.002v-.002c.89-.49 1.61-.967 2.164-1.45l.002-.002.002-.002c.55-.489.958-.984 1.207-1.505.235-.492.365-.986.365-1.475 0-.775-.24-1.462-.738-1.947-.512-.5-1.252-.715-2.125-.715zm0 1c.713 0 1.155.166 1.426.43.286.279.437.65.437 1.232 0 .313-.082.658-.267 1.045-.171.357-.488.762-.969 1.19-.477.414-1.139.859-1.984 1.324-.829.45-1.889.915-3.17 1.386l-.393.143.072.41c.07.406.32.768.665.992l.005.004.006.004c.352.217.777.305 1.25.305a6.3 6.3 0 001.524-.203h.006a12.375 12.375 0 001.55-.522 22.635 22.635 0 001.48-.658l.003-.002.004-.002c.471-.24.895-.468 1.273-.682l.006-.002c.3-.164.55-.308.77-.44l.19-.112.044-.217c.128-.63.277-1.242.447-1.834.18-.625.357-1.203.528-1.733l.412-1.222c.16-.33.335-.528.513-.635l.002-.002.002-.002c.237-.145.43-.197.598-.197.064 0 .125.01.193.037l.022.008.021.006a.609.609 0 01.2.095c.055.04.097.084.13.137.021.032.024.045.024.076 0 .04-.006.05-.006.049l-.018.035-.011.04c-.14.448-.31.94-.508 1.478l-.002.004v.002a46.475 46.475 0 00-.549 1.636c-.175.555-.328 1.1-.455 1.639l-.002.004v.002a7.07 7.07 0 00-.184 1.527c0 .118.014.226.036.354l.002.004v.004c.022.12.05.24.082.357l.002.006.002.008c.038.13.092.257.168.379l.007.011.01.014c.105.147.317.309.565.309.435 0 .81-.224 1.166-.545.332-.302.677-.702 1.045-1.192.335-.358.647-.77.933-1.234l.002-.004c.29-.465.564-.94.817-1.426l.003-.008c.258-.478.503-.948.733-1.408l.002-.004c.233-.456.455-.858.666-1.207l.002-.002c.214-.347.419-.614.6-.795l.003-.004.004-.003c.16-.168.248-.19.31-.19.283 0 .344.049.41.152l.003.004.002.004c.102.157.16.351.16.63 0 .346-.056.648-.164.917l-.002.006-.002.006a5.66 5.66 0 01-.475.959c-.213.342-.47.732-.771 1.164l-.002.002c-.306.443-.635.967-.992 1.576l-.17.29.203.267c.255.335.686.498 1.113.498.385 0 .777-.049 1.174-.143.4-.092.795-.219 1.184-.383l.006-.002.006-.002a9.456 9.456 0 001.044-.552l.135-.082.062-.145c.147-.331.3-.649.457-.949v-.002l.002-.002c.198-.385.366-.753.506-1.104v-.003l.002-.002c.04-.106.121-.294.235-.55.12-.251.246-.509.376-.769l.002-.002v-.002l.47-.965c.127-.208.253-.326.366-.388a.812.812 0 01.405-.112c.254 0 .42.066.592.225l.007.006.006.006c.165.14.22.268.223.5a1.903 1.903 0 01-.027.158l-.006.027-.002.028a.195.195 0 01-.028.07l-.002.002v.004c-.134.25-.247.462-.338.642l-.246.495-.203.435c-.065.14-.147.311-.242.512-.113.235-.24.495-.383.78-.146.283-.286.576-.422.876l-.004.006-.002.006c-.128.306-.243.608-.343.908l-.002.008-.002.006c-.097.323-.15.635-.15.933 0 .338.082.707.4.926l.017.014.02.01c.247.14.516.18.806.18.337 0 .677-.073 1.012-.206l.006-.002a6.01 6.01 0 00.963-.482c.314-.192.623-.408.926-.65l.004-.004.004-.002c.293-.245.565-.49.82-.735l.006-.006c.057-.053.103-.1.142-.136l.082-.077.04-.105c.18-.463.414-.934.706-1.416.339-.558.738-1.11 1.2-1.654.456-.539.946-1.017 1.472-1.434l.004-.002a7.888 7.888 0 011.639-.994 4.057 4.057 0 011.646-.36c.171 0 .322.021.46.057h.005a.785.785 0 01.301.137l.016.012.015.011a.388.388 0 01.149.188l.004.01.006.01a.882.882 0 01.076.394c0 .259-.03.56-.092.898-.059.31-.154.599-.287.873a1.956 1.956 0 01-.467.631c-.132.117-.291.16-.502.172v-.24c.009-.17.014-.333.014-.486 0-.218-.03-.422-.11-.616a.803.803 0 00-.355-.396.971.971 0 00-.465-.106c-.349 0-.678.13-1.004.33a5.205 5.205 0 00-.904.713l-.002.002-.004.004c-.286.287-.566.61-.836.971-.269.349-.511.707-.73 1.076l-.003.002v.002a7.355 7.355 0 00-.521 1.076l-.002.006-.002.006c-.127.36-.201.684-.201.996 0 .449.183.89.523 1.174l.004.002.004.004c.346.277.792.395 1.272.395.485 0 .99-.08 1.515-.235.51-.15 1.016-.338 1.516-.568h-.004a16.62 16.62 0 001.447-.738c.454-.261.866-.509 1.236-.743h.002c.075-.048.114-.076.174-.115l.16-.101.053-.184c.111-.4.258-.812.444-1.234l.002-.002v-.002c.244-.542.547-1.077.912-1.606l.002-.002c.365-.525.794-.99 1.293-1.4l.004-.002.002-.002a5.972 5.972 0 011.693-.99l.002-.003.004-.002c.622-.25 1.318-.378 2.103-.378.32 0 .669.04 1.047.128h.002v.002a3.08 3.08 0 011 .42c.29.188.524.433.717.754l.004.006.004.006c.178.278.28.637.28 1.12 0 .24-.035.54-.106.888-.07.333-.176.69-.32 1.068l-.106.274.187.224c.142.17.325.31.536.391.186.072.384.103.58.103.293 0 .583-.082.869-.218.28-.13.557-.292.836-.489a9.22 9.22 0 00.818-.65 18.56 18.56 0 001.387-1.37h-.002c.174-.191.313-.347.433-.485l.166-.05.096-.198a26.5 26.5 0 00.234-.499c.163-.348.352-.574.55-.712.223-.157.402-.211.558-.211.104 0 .166.02.271.12l.006.005.004.006c.058.051.106.125.106.357a1.52 1.52 0 01-.152.646l.845.522c.169-.215.435-.46.799-.717l.004-.002.002-.002a7.267 7.267 0 011.207-.71l.002-.003h.002a8.876 8.876 0 011.38-.53c.47-.132.9-.194 1.296-.194.423 0 .723.098.96.275l.008.004.006.004c.188.13.301.336.301.82 0 .294-.043.607-.137.94a7.072 7.072 0 01-.388 1.043l-.004.003-.002.006a10.38 10.38 0 01-.533 1.053v.002l-.002.002c-.197.346-.393.673-.588.98-.2.316-.386.608-.557.874l-.002.002-.002.002a14.58 14.58 0 00-.4.668l.049-.073a1.352 1.352 0 00-.297.844c0 .175.063.375.185.522.166.199.42.265.615.265.098 0 .189-.009.284-.02l.027-.001.027-.006c.187-.042.335-.127.49-.235l-.11.059a13.31 13.31 0 001.634-.742 22.76 22.76 0 001.596-.924l.004-.002.002-.002c.505-.33.97-.656 1.392-.98h.002a15.1 15.1 0 001.078-.907l-.01.012a.27.27 0 01.077-.05l.017-.007c.02.027.037.057.037.153 0 .187-.065.442-.23.755l-.002.004-.002.006c-.141.283-.379.565-.733.844 0 .001 0 .003-.002.004-.535.385-1.032.739-1.484 1.058l-.002.002-.002.002c-.436.316-.89.612-1.355.891h.004c-.452.268-.942.523-1.471.764a14.26 14.26 0 01-1.822.646l-.004.002h-.004a5.551 5.551 0 01-.631.158h-.002l-.002.002a2.516 2.516 0 01-.465.05c-.41 0-.603-.1-.728-.24-.137-.175-.233-.441-.233-.866v-.156l.026-.182.002-.016v-.015a2.91 2.91 0 01.197-.827v-.002c.136-.334.297-.679.48-1.037.196-.363.399-.72.612-1.072l.002-.004.002-.002c.22-.373.42-.723.603-1.05l.002-.004c.194-.34.358-.646.488-.916.141-.293.237-.554.237-.846 0-.233-.092-.477-.248-.664a.97.97 0 00-.74-.352c-.71 0-1.396.216-2.02.625h-.002l-.002.002a8.553 8.553 0 00-1.625 1.428l-.002.002-.002.002a15.465 15.465 0 00-1.36 1.726c-.402.595-.755 1.128-1.062 1.598l-.006.008-.004.006c-.201.333-.39.689-.56 1.07v.004l-.002.002c-.148.341-.304.663-.467.963-.149.263-.313.47-.486.629l-.008.008-.008.007c-.12.12-.232.17-.447.17-.228 0-.327-.05-.42-.152-.11-.12-.155-.235-.155-.437 0-.028.043-.274.168-.614.13-.35.297-.762.504-1.232.14-.318.296-.659.46-1.01l-.78-.59-.018.016c-.31.265-.63.488-.962.672a1.715 1.715 0 01-1.418.15l-.006-.002a2.156 2.156 0 01-.56-.303l-.429-.306-.285.443a8.25 8.25 0 01-1.11 1.377 6.604 6.604 0 01-1.37 1.05l-.002.003h-.002a6.603 6.603 0 01-1.625.68l-.006.002h-.004a6.552 6.552 0 01-1.85.253c-.2 0-.468-.041-.789-.136a2.785 2.785 0 01-.855-.436 2.673 2.673 0 01-.67-.805 2.04 2.04 0 01-.223-.66l-.133-.779-.646.455c-.205.144-.416.288-.643.44-.513.339-1.07.653-1.67.939h-.002l-.002.002a11.54 11.54 0 01-1.824.7l-.004.001h-.004a6.165 6.165 0 01-1.802.28c-.433 0-.8-.07-1.116-.196h-.002a2.33 2.33 0 01-.773-.502 2.198 2.198 0 01-.478-.758 2.53 2.53 0 01-.075-.228l-.204-.748-.598.496c-.382.318-.772.609-1.168.87a8.253 8.253 0 01-1.498.784c-.482.19-.957.281-1.436.281-.685 0-1.154-.167-1.496-.463-.306-.281-.492-.727-.496-1.465l-.004-.795-.715.348c-.103.05-.2.099-.29.139h-.003l-.004.002c-.647.275-1.367.414-2.175.414-.227 0-.44-.04-.649-.121a6.705 6.705 0 01-.965-.518l-.386-.242-.276.363c-.606.8-1.206 1.389-1.785 1.778v.002h-.002c-.56.382-1.112.558-1.695.558a2.04 2.04 0 01-.774-.15l-.005-.002-.006-.004a1.612 1.612 0 01-.616-.406 2.271 2.271 0 01-.453-.727 2.799 2.799 0 01-.16-.85l-.043-.87-.73.474c-.383.25-.818.514-1.313.795-.545.305-1.129.587-1.752.848h-.002c-.605.256-1.239.468-1.902.634h-.006a7.448 7.448 0 01-1.906.258c-.509 0-.94-.096-1.313-.28a3.022 3.022 0 01-.965-.755l-.002-.002a3.506 3.506 0 01-.613-1.129 4.295 4.295 0 01-.217-1.373 3.8 3.8 0 01.217-1.19v-.001c.149-.455.367-.916.654-1.383a8.56 8.56 0 011.057-1.367c.422-.449.89-.842 1.412-1.184a7.303 7.303 0 011.701-.818 6.29 6.29 0 011.979-.303zm-.773.96a2.95 2.95 0 00-1.225.26 3.964 3.964 0 00-.998.657 5.153 5.153 0 00-.78.871l-.001.004-.004.004c-.21.31-.397.62-.567.93a8.885 8.885 0 00-.437.873l-.004.007-.002.006c-.108.274-.193.509-.256.707l-.361 1.145 1.066-.549c.348-.179.703-.384 1.067-.61.364-.22.704-.43 1.021-.632.317-.202.593-.383.83-.551l.008-.006c.23-.156.398-.265.47-.308l.003-.004.004-.002c.46-.287.802-.556 1.03-.88l.003-.003.004-.004c.194-.285.33-.568.33-.899a.992.992 0 00-.305-.705 1.078 1.078 0 00-.55-.287 1.061 1.061 0 00-.217-.023zm37.482.575c-.532 0-1.054.139-1.539.402a4.408 4.408 0 00-1.244 1 4.957 4.957 0 00-.844 1.383 4.162 4.162 0 00-.324 1.61c0 .207.016.429.047.666v.004c.035.256.107.503.213.738l.006.014.005.013c.131.248.32.466.551.633.28.202.623.28.98.28.527 0 1.043-.14 1.52-.407l.002-.002c.47-.266.888-.61 1.248-1.023l.002-.002.002-.002c.36-.424.648-.903.858-1.428a4.378 4.378 0 00.273-2.273 1.946 1.946 0 00-.226-.748 1.537 1.537 0 00-.563-.606c-.28-.183-.61-.252-.967-.252zm-37.482.426h.129c-.015 0 0 0 .03.006l.009.002.007.002c.015.002.016.004.024.012a.932.932 0 01-.154.324c-.096.134-.341.357-.733.601-.117.07-.284.182-.525.346l-.004.004-.004.002c-.22.155-.484.332-.795.53-.221.14-.471.292-.717.443l.032-.061.002-.002v-.004c.153-.28.324-.56.513-.84l.004-.004.002-.004a4.16 4.16 0 01.621-.695c.233-.208.481-.37.748-.492.25-.113.514-.17.81-.17zm37.482.574c.232 0 .362.047.424.088l.008.006.01.004a.48.48 0 01.199.21l.006.01.004.01a.93.93 0 01.11.377l.003.014.002.012a3.358 3.358 0 01-.213 1.777c-.172.429-.4.808-.69 1.148v.002a3.755 3.755 0 01-.98.803 2.065 2.065 0 01-1.031.281c-.215 0-.33-.045-.395-.091a.792.792 0 01-.244-.28 1.668 1.668 0 01-.125-.44v-.003c-.026-.2-.04-.38-.04-.533 0-.423.08-.827.247-1.227h.002v-.002a3.94 3.94 0 01.674-1.107c.287-.33.607-.583.963-.774l.002-.002h.002a2.164 2.164 0 011.062-.283z" fontFamily="Damion" fontSize="29.333"/>
	</g>
</svg>);
}