const React = require("react");
module.exports = function Aarch64PlainIcon({size = "1em", color = "#16358C", ...props}){
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
	<path d="m110.986 10.21-14.24 5.822a.131.131 0 0 0-.039.217c11.87 11.118 18.654 26.46 18.68 42.812.025 16.788-7.396 33.121-20.07 44.035-10.477 9.021-22.75 13.832-36.825 14.431v.002c.775.108 1.557.177 2.344.21 19.392.774 38.297-7.125 51.066-21.64C121.9 84.737 127.266 71.338 128 55.908v-4.793c-.752-15.668-6.35-29.302-16.795-40.904ZM51.96 11.245c-10.652-.19-21.35 2.82-30.457 9.107C10.507 27.945 3.34 38.33.002 51.508a.072.072 0 0 0 .004.049.302.302 0 0 1 .022.049c.018.042.035.042.05-.002C5.38 37.117 17.432 25.636 32.376 21.518c12.605-3.474 26.302-2.043 37.713 4.746a.426.428 49.3 0 0 .379.027l11.654-4.748a.114.114 0 0 0 .024-.199c-8.927-6.518-19.534-9.909-30.186-10.1Zm43.916 5.681-11.594 4.721a.093.093 0 0 0-.023.16A53.353 53.353 0 0 1 97.586 37.38c11.53 20.288 8.46 46.158-7.752 63.008-8.64 8.979-19.245 14.357-31.816 16.138a.089.089 0 0 0-.05.026l-.046.037c-.025.02-.02.03.012.03 33.984-.752 59.998-30.368 56.162-64.249-1.544-13.614-8.04-26.026-17.961-35.394a.246.246 0 0 0-.26-.049zm-12.793 5.21-11.752 4.79a.03.03 0 0 0-.006.053c6.694 4.254 12.034 9.728 16.018 16.424 3.6 6.049 5.769 12.52 6.506 19.414 1.51 14.114-3.346 28.664-13.256 38.755-7.76 7.904-16.952 12.642-27.578 14.217-1.123.167-1.12.233.016.197 22.304-.681 42.007-15.921 48.39-37.29 2.335-7.819 2.927-16.497 1.344-24.582-2.55-13.019-9.057-23.67-19.524-31.955a.159.157 53.2 0 0-.158-.024zM42.01 26.417c-.697.008-1.39.037-2.017.041-.065 0-.096.033-.096.098l-.074 13.264c-.002.125.06.187.187.187h1.668c.07 0 .106-.035.106-.107v-5.653c0-.05.025-.08.076-.09 1.074-.16 1.956.158 2.644.954 1.22 1.41 2.217 3.188 3.182 4.79a.207.21 75.2 0 0 .176.102l2.09.01c.091 0 .112-.036.06-.111a94.195 94.195 0 0 1-2.937-4.6c-.291-.485-.805-1.035-1.543-1.644-.064-.053-.059-.098.017-.133 2.934-1.372 2.635-5.641-.322-6.742-.885-.33-2.056-.378-3.217-.366zm14.772 1.16c-1.808.03-3.567.723-4.944 2.311-2.904 3.351-2.282 8.469 1.738 10.666 1.944 1.063 4.083 1.382 6.418.96a.18.18 0 0 0 .15-.134l.557-1.84a.097.095 89.7 0 0-.119-.12c-2.076.64-4.501.558-6.35-.68-2.739-1.834-2.851-5.329-.755-7.694 2.633-2.97 6.852-1.427 9.166 1.268.07.083.122.073.154-.031l.549-1.795a.185.185 0 0 0-.053-.205c-1.781-1.678-4.187-2.742-6.511-2.705zm-14.916.587 1.572.002a2.117 1.86.1 0 1 2.113 1.865v.44a2.117 1.86.1 0 1-2.121 1.857l-1.574-.004a.049.049 0 0 1-.049-.05l.01-4.066a.049.049 0 0 1 .049-.044zm-12.557.458-1.227.342a.08.08 0 0 0-.058.069l-1.637 14.543a.08.08 0 0 0 .102.085l1.758-.496a.08.08 0 0 0 .058-.066l.47-4.19a.08.08 0 0 1 .057-.068l5.243-1.521a.08.08 0 0 1 .084.025l2.744 3.268a.08.08 0 0 0 .084.025l1.76-.527a.08.08 0 0 0 .039-.127l-9.393-11.336a.08.08 0 0 0-.084-.026zm37.887 1.708a.102.102 0 0 0-.059.052l-5.785 12.084a.102.102 0 0 0 .049.137l1.6.756a.102.102 0 0 0 .136-.05l2.443-5.13a.102.102 0 0 1 .135-.047l6.426 3.063a.102.102 0 0 1 .047.136l-2.455 5.133a.102.102 0 0 0 .048.135l1.594.756a.102.102 0 0 0 .137-.047l5.783-12.082a.102.102 0 0 0-.049-.139l-1.595-.746a.102.102 0 0 0-.137.047l-2.455 5.12a.102.102 0 0 1-.135.046L66.5 36.497a.102.102 0 0 1-.049-.135l2.467-5.127a.102.102 0 0 0-.047-.135l-1.597-.764a.102.102 0 0 0-.078-.006zM29.58 31.877a.064.064 0 0 1 .067.022l3.125 3.808a.064.064 0 0 1-.031.1l-3.653 1.09a.064.064 0 0 1-.082-.068l.53-4.897a.064.064 0 0 1 .044-.055zm-15.449 2.748-1.12.584a.083.083 0 0 0-.046.08l1.504 14.559a.083.083 0 0 0 .12.066l1.603-.85a.083.083 0 0 0 .043-.08l-.428-4.195a.083.083 0 0 1 .041-.082l4.791-2.593a.083.083 0 0 1 .09.006l3.383 2.6a.083.083 0 0 0 .088.005l1.611-.871a.083.083 0 0 0 .012-.139L14.22 34.631a.083.083 0 0 0-.09-.006zm.932 3.131a.066.066 0 0 1 .07.004l3.905 3.049a.066.066 0 0 1-.012.11l-3.338 1.806a.066.066 0 0 1-.096-.049l-.562-4.857a.066.066 0 0 1 .033-.063zm51.44 15.957a.087.087 0 0 0-.065.033L42.12 83.432a.087.087 0 0 0-.02.056l.002 3.112a.087.087 0 0 0 .086.086h20.256a.087.087 0 0 1 .088.088v15.597a.087.087 0 0 0 .086.088h6.76a.087.087 0 0 0 .087-.088V86.774a.087.087 0 0 1 .086-.088h5.014a.087.087 0 0 0 .086-.086l.002-6.125a.087.087 0 0 0-.086-.086H69.55a.087.087 0 0 1-.086-.088v-26.5a.087.087 0 0 0-.088-.088zm-38.032.035c-.024-.004-.049.003-.076.022-11.398 7.367-19.77 19.703-19.223 33.656.074 1.871.456 3.762 1.15 5.672 2.056 5.652 6.66 9.316 12.678 9.894 1.505.146 2.91.098 4.217-.142 6.838-1.251 11.76-7.515 11.717-14.363-.072-11.259-11.231-17.035-20.855-11.993-.118.061-.157.03-.116-.095 2.32-7.213 8.2-13.472 14.602-17.317a.097.097 0 0 0 .025-.142l-4.054-5.147c-.02-.026-.041-.04-.065-.045zM62.49 66.785a.064.064 0 0 1 .043.059v13.48a.064.064 0 0 1-.065.065H51.606a.064.064 0 0 1-.051-.104l10.863-13.482a.064.064 0 0 1 .07-.018zM23.327 81.22c4.311-.185 8.4 2.378 8.603 7.066.167 3.919-1.955 7.198-5.967 8.047a7.702 7.702 0 0 1-3.431-.054c-5.591-1.338-7.36-7.344-6.15-12.344a.285.285 0 0 1 .105-.16c1.798-1.374 3.79-2.2 5.976-2.48.289-.038.576-.063.864-.075z"/>
</svg>);
}