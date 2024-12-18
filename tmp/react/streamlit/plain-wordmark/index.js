const React = require("react");
module.exports = function StreamlitPlainWordmarkIcon({size = "1em", color = "#7d353b", ...props}){
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
	<path id="path237" style={{"strokeWidth":"0.150224"}} d="M 63.715583,49.36125 55.824236,45.180125 42.126013,37.923316 c -0.0126,-0.01263 -0.03751,-0.01263 -0.05012,-0.01263 -0.500111,-0.238083 -1.012827,0.263201 -0.825266,0.764635 l 6.979803,17.843778 0.0014,0.0038 c 0.0075,0.01745 0.01365,0.03504 0.02116,0.05264 0.286443,0.665521 0.911545,1.076565 1.591864,1.238245 0.05747,0.01248 0.09858,0.02391 0.167604,0.03775 0.06872,0.01534 0.164904,0.03625 0.24743,0.04241 0.0138,0.0014 0.02626,0.0014 0.04006,0.0026 h 0.01005 c 0.0099,0.0012 0.01996,0.0012 0.03001,0.0026 h 0.01365 c 0.0089,0.0012 0.01876,0.0012 0.02761,0.0012 h 0.01621 c 0.01005,0.0012 0.01996,0.0012 0.03001,0.0012 v 0 c 8.839654,0.96602 17.757783,0.96602 26.597437,0 v 0 c 0.106234,0 0.210068,-0.005 0.31,-0.01504 0.03256,-0.0038 0.06377,-0.0075 0.09513,-0.01128 0.0038,-0.0012 0.0087,-0.0012 0.01245,-0.0024 0.02131,-0.0026 0.04246,-0.0063 0.06377,-0.01008 0.03121,-0.0038 0.06257,-0.01008 0.09378,-0.01624 0.06257,-0.01384 0.09093,-0.02391 0.175856,-0.05309 0.08478,-0.02918 0.225673,-0.08031 0.313752,-0.122877 0.08823,-0.04271 0.149298,-0.08347 0.223122,-0.129945 0.09123,-0.0576 0.178107,-0.11656 0.266186,-0.182737 0.03796,-0.02918 0.06392,-0.04783 0.09138,-0.07415 l -0.01501,-0.0087 z"/>
	<path id="path239" style={{"strokeWidth":"0.150224"}} d="m 85.32781,37.923466 h -0.01245 l -13.703324,7.256809 7.61751,11.371607 6.962247,-17.876415 v -0.02512 c 0.175107,-0.5264 -0.362517,-1.002567 -0.863979,-0.726884"/>
	<path id="path241" style={{"strokeWidth":"0.150224"}} d="m 64.445869,34.472835 c -0.350213,-0.512564 -1.112909,-0.512564 -1.450518,0 l -7.171115,10.70729 7.891347,4.181125 14.954878,7.922329 c 0.09393,-0.0922 0.169255,-0.181984 0.24878,-0.276887 0.112537,-0.13912 0.217571,-0.288317 0.310151,-0.45496 l -7.61751,-11.371607 z"/>
	<path id="path243" style={{"strokeWidth":"0.150224"}} d="m 13.8956,75.79348 h 2.759691 C 16.5288,72.232154 13.251742,69.56977 8.698222,69.56977 c -4.5073051,0 -8.04889841,2.627792 -8.04889841,6.592491 0,3.181114 2.29964241,5.071344 5.97913021,6.131665 l 2.8977355,0.829758 c 2.4836017,0.69154 4.6914147,1.56747 4.6914147,3.918676 0,2.58177 -2.483752,4.287458 -5.7492562,4.287458 -2.8057558,0 -5.2893576,-1.244712 -5.5193818,-3.918676 H 0.00531568 c 0.27608913,3.872654 3.40369882,6.500446 8.46303212,6.500446 5.4272522,0 8.5087972,-2.996724 8.5087972,-6.823055 0,-4.425826 -4.185452,-5.854928 -6.623138,-6.500446 L 7.9623845,79.94272 c -1.7477643,-0.461127 -4.55337,-1.38308 -4.55337,-3.918677 0,-2.259011 2.0696181,-3.918677 5.1972278,-3.918677 2.8516707,0 5.0134187,1.360069 5.2893577,3.688114 z m 14.43556,0 h -3.771467 v -4.241285 h -2.713626 v 4.241285 h -2.667712 v 2.305183 h 2.667712 v 11.06434 c 0,3.088919 2.483601,4.564194 4.783394,4.564194 1.011776,0 1.655784,-0.18439 2.023703,-0.322759 l -0.552028,-2.443401 c -0.229874,0.04602 -0.597793,0.138368 -1.195736,0.138368 -1.195886,0 -2.345707,-0.368931 -2.345707,-2.673965 V 78.098663 h 3.771467 z m 3.434459,17.703154 h 2.713626 V 82.293926 c 0,-2.397379 1.885659,-4.14924 4.46139,-4.14924 0.724434,0 1.471825,0.138368 1.655785,0.18439 v -2.766009 c -0.310451,-0.02316 -1.023331,-0.04617 -1.425761,-0.04617 -2.115833,0 -3.955577,1.198689 -4.599434,2.950551 h -0.18396 V 75.79348 h -2.621646 z m 18.267347,0.368781 c 3.587658,0 6.209305,-1.797884 7.037122,-4.471849 l -2.621646,-0.737562 c -0.689923,1.844057 -2.288239,2.76601 -4.415476,2.76601 -3.185078,0 -5.381187,-2.06304 -5.507678,-5.854929 h 12.820739 v -1.152517 c 0,-6.592641 -3.909512,-8.851501 -7.589,-8.851501 -4.783394,0 -7.956919,3.780308 -7.956919,9.220283 0,5.440125 3.12761,9.082065 8.232858,9.082065 z M 44.525288,83.215879 c 0.183959,-2.754579 2.127237,-5.209411 5.231739,-5.209411 2.94365,0 4.829459,2.212838 4.829459,5.209411 z m 21.49849,10.695709 c 3.081545,0 4.691415,-1.659666 5.243293,-2.812183 h 0.138045 v 2.397229 h 2.713626 V 81.832799 c 0,-5.624365 -4.277431,-6.269732 -6.531159,-6.269732 -2.667711,0 -5.703341,0.921953 -7.083036,4.149089 l 2.575581,0.922104 c 0.597943,-1.290885 2.0123,-2.673965 4.599435,-2.673965 2.495155,0 3.725553,1.325477 3.725553,3.595918 v 0.0922 c 0,1.313896 -1.333931,1.19869 -4.55337,1.613644 -3.277208,0.426384 -6.853163,1.152516 -6.853163,5.209411 0,3.4577 2.667561,5.440125 6.025195,5.440125 z m 0.413984,-2.443402 c -2.161748,0 -3.725553,-0.968125 -3.725553,-2.858355 0,-2.07462 1.885809,-2.719987 4.001492,-2.996573 1.149821,-0.138368 4.231516,-0.461127 4.691415,-1.014299 v 2.489574 c 0,2.212838 -1.747765,4.379653 -4.967354,4.379653 z m 11.98632,2.028448 h 2.713626 v -11.06449 c 0,-2.5932 1.885808,-4.425676 4.001491,-4.425676 2.058365,0 3.495679,1.348338 3.495679,3.365354 v 12.124812 h 2.759541 V 81.971167 c 0,-2.282022 1.42591,-3.964699 3.909512,-3.964699 1.931723,0 3.587508,1.025729 3.587508,3.64194 v 11.848226 h 2.713631 V 81.648408 c 0,-4.16067 -2.230625,-6.085341 -5.381192,-6.085341 -2.529667,0 -4.380964,1.163947 -5.289358,2.996573 h -0.183959 c -0.873882,-1.89023 -2.41473,-2.996573 -4.73748,-2.996573 -2.299642,0 -4.001491,1.106343 -4.737329,2.996573 H 81.045728 V 75.79348 H 78.424082 Z M 108.63273,69.892529 h -2.71362 v 23.604105 h 2.71362 z m 4.32275,23.604105 h 2.71363 V 75.79348 h -2.71363 z m 1.37984,-20.653705 c 1.05785,0 1.93173,-0.829758 1.93173,-1.844057 0,-1.014148 -0.87388,-1.844056 -1.93173,-1.844056 -1.05799,0 -1.93187,0.829908 -1.93187,1.844056 0,1.014299 0.87388,1.844057 1.93187,1.844057 z m 13.33736,2.950551 h -3.77147 v -4.241285 h -2.71362 v 4.241285 h -2.66771 v 2.305183 h 2.66771 v 11.06434 c 0,3.088919 2.4836,4.564194 4.78339,4.564194 1.01178,0 1.65579,-0.18439 2.0237,-0.322759 l -0.55187,-2.443401 c -0.23003,0.04602 -0.59795,0.138368 -1.19589,0.138368 -1.19589,0 -2.34571,-0.368931 -2.34571,-2.673965 V 78.098663 h 3.77147 z"/>
</svg>);
}