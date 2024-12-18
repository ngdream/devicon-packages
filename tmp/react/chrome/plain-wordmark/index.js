const React = require("react");
module.exports = function ChromePlainWordmarkIcon({size = "1em", color = "#ce4e4e", ...props}){
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
	<circle cx="64.499" cy="51.614" r="18.557"/>
	<path d="M64 30h45.23C101.077 13 84.111 1.972 64.499 1.972c-15.876 0-30.021 7.292-39.158 18.848l16.913 29.444C43.102 38.865 52 30 64 30zm-6.688 70.987l17.212-29.66a22.008 22.008 0 01-10.025 2.398c-9.569 0-17.718-6.078-20.796-14.584l-20.648-35.31a49.658 49.658 0 00-8.446 27.782c-.001 25.114 18.555 45.889 42.703 49.374zM110.821 33H76.527c6.069 4 10.083 10.809 10.083 18.584 0 3.824-.971 7.435-2.679 10.574l.012.016-22.755 39.214c1.094.071 2.197.114 3.311.114 27.554 0 49.891-22.364 49.891-49.918 0-6.559-1.267-11.584-3.569-18.584zm-87.172 91.822c-.782.374-2.52.953-4.732.953-4.972 0-8.206-3.371-8.206-8.41 0-5.074 3.473-8.786 8.853-8.786 1.771 0 3.337.443 4.154.886l-.681 2.281c-.715-.374-1.839-.784-3.474-.784-3.78 0-5.823 2.828-5.823 6.232 0 3.813 2.452 6.162 5.721 6.162a8.58 8.58 0 003.678-.783l.51 2.249zm3.508-23.597h2.996v10.317h.068a5.647 5.647 0 012.146-2.146 6.137 6.137 0 013.064-.817c2.213 0 5.754 1.362 5.754 7.015v9.806h-2.996v-9.466c0-2.655-.987-4.868-3.814-4.868-1.94 0-3.438 1.361-4.018 2.961-.17.443-.204.886-.204 1.431v9.942h-2.996v-24.175zm18.898 12.837c0-1.941-.034-3.61-.136-5.142h2.622l.136 3.269h.102c.75-2.212 2.589-3.61 4.598-3.61.307 0 .544.035.816.069v2.827c-.307-.068-.612-.068-1.021-.068-2.111 0-3.609 1.566-4.019 3.813-.067.41-.102.919-.102 1.396v8.784h-2.997v-11.338zm25.709 2.962c0 6.094-4.257 8.751-8.207 8.751-4.426 0-7.899-3.269-7.899-8.479 0-5.482 3.644-8.717 8.173-8.717 4.732.001 7.933 3.44 7.933 8.445zm-13.041.171c0 3.608 2.043 6.332 4.971 6.332 2.86 0 5.005-2.689 5.005-6.401 0-2.792-1.396-6.3-4.937-6.3-3.508.002-5.039 3.269-5.039 6.369zm16.82-3.814a82.28 82.28 0 00-.136-4.461h2.621l.137 2.69h.103c.92-1.566 2.452-3.031 5.21-3.031 2.212 0 3.915 1.362 4.63 3.303h.068a6.492 6.492 0 011.873-2.145c.987-.75 2.043-1.159 3.609-1.159 2.213 0 5.447 1.431 5.447 7.151v9.67h-2.927v-9.296c0-3.2-1.193-5.073-3.576-5.073-1.736 0-3.03 1.26-3.575 2.689a5.096 5.096 0 00-.238 1.499V125.4H85.86v-9.875c0-2.622-1.158-4.495-3.438-4.495-1.839 0-3.235 1.498-3.712 2.996-.17.409-.238.954-.238 1.465v9.908h-2.929v-12.018zm30.066 4.324c.068 4.052 2.622 5.721 5.652 5.721 2.146 0 3.473-.375 4.563-.851l.545 2.146c-1.055.476-2.894 1.055-5.516 1.055-5.073 0-8.104-3.371-8.104-8.342 0-4.972 2.928-8.853 7.729-8.853 5.415 0 6.811 4.699 6.811 7.729 0 .614-.034 1.056-.103 1.396h-11.577v-.001zm8.786-2.145c.034-1.872-.783-4.836-4.154-4.836-3.064 0-4.358 2.759-4.597 4.836h8.751z"/>
</svg>);
}