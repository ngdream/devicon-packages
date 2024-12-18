const React = require("react");
module.exports = function YarnLineIcon({size = "1em", color = "#2c8ebb", ...props}){
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
	<path d="M64 0C38.116 0 14.777 15.594 4.872 39.508-5.033 63.42.445 90.949 18.748 109.252c18.303 18.303 45.831 23.78 69.744 13.876C112.406 113.223 128 89.884 128 64c0-35.34-28.66-64-64-64Zm0 .992c34.804 0 63.008 28.204 63.008 63.008 0 25.486-15.35 48.459-38.896 58.211-23.545 9.753-50.641 4.36-68.662-13.66C1.429 90.528-3.964 63.432 5.789 39.887 15.54 16.342 38.514.992 64 .992Zm4.704 20.789a5.498 5.498 0 0 0-2.535.312c-2.221.773-4.035 2.861-5.7 6.4-.212.407-.391.842-.562 1.26-4.652.378-9.002 2.468-12.169 5.908l.045-.043a6.504 6.504 0 0 1-2.388 1.273l-.013.004-.014.006c-1.172.411-2.06 1.128-2.771 2.128-.712 1-1.266 2.274-1.87 3.88l-.002.002c-1.686 4.51-.063 8.868 1.606 11.787-2.869 2.54-5.214 5.617-6.835 9.093l-.006.011-.006.012a29.737 29.737 0 0 0-2.13 11.979c-1.759 1.879-4.36 5.239-4.672 9.174v.002c-.368 3.7.466 7.421 2.382 10.609l.006.007.004.006c.215.334.47.638.736.932-.09.672-.116 1.352 0 2.02l.002.006.002.006a6.181 6.181 0 0 0 3.335 4.337c3.31 1.745 7.79 2.472 11.427.8 1.393 1.352 3.746 2.564 7.734 2.564h.246c.32 0 1.324-.045 2.791-.128 1.467-.082 3.364-.201 5.35-.35 3.971-.299 8.258-.704 10.31-1.204l.005-.002a9.41 9.41 0 0 0 3.827-1.845c5.623-1.77 11-4.251 15.992-7.386l.002-.002.004-.002c4.59-2.977 6.076-3.574 9.479-4.397a7.005 7.005 0 0 0 5.388-7.748v-.004a7.283 7.283 0 0 0-7.688-6.265c-5.802.08-10.613 3.066-13.743 5l-.003.002-.004.002c-.79.507-1.624.943-2.46 1.372.139-3.397-.299-6.795-1.443-10.002v.006c-1.23-3.556-3.22-6.79-5.787-9.537 2.879-4.04 4.905-8.628 5.876-13.496 1.129-5.677.825-14.34-1.807-19.394l-.002-.002a4.397 4.397 0 0 0-2.757-2.238c-.917-.257-1.874-.213-2.79.03-1.11-2.257-1.942-3.747-2.534-4.569-.635-.882-1.11-1.217-1.446-1.44l-.002-.002a5.494 5.494 0 0 0-2.409-.874zm-.11.986a4.5 4.5 0 0 1 1.974.717c.33.219.612.393 1.188 1.192.576.8 1.4 2.209 2.634 4.756l.193.401.42-.15a4.309 4.309 0 0 1 2.62-.092h.001l.002.002c.925.252 1.701.88 2.138 1.735v.004c2.427 4.656 2.798 13.297 1.715 18.744a34.122 34.122 0 0 1-5.896 13.438l-.246.337.29.3a25.852 25.852 0 0 1 5.798 9.475l.002.002v.004a25.54 25.54 0 0 1 1.418 10.46l-.064.852.772-.37a29.906 29.906 0 0 0 3.242-1.806c3.133-1.936 7.78-4.786 13.256-4.855h.025a6.278 6.278 0 0 1 6.645 5.41 6.003 6.003 0 0 1-4.626 6.65h-.002l-.004.002c-3.454.835-5.167 1.53-9.792 4.531a68.122 68.122 0 0 1-15.816 7.297l-.091.029-.076.062a8.42 8.42 0 0 1-3.521 1.71l-.004.003-.006.002c-1.852.452-6.202.88-10.161 1.178a287.2 287.2 0 0 1-5.331.349 94.827 94.827 0 0 1-2.735.128h-.246c-3.995 0-6.16-1.224-7.308-2.446l-.254-.27-.33.168c-3.28 1.64-7.652.965-10.813-.704l-.008-.004-.006-.004a5.184 5.184 0 0 1-2.802-3.64 5.648 5.648 0 0 1 0-1.932l.042-.248-.174-.182a6.332 6.332 0 0 1-.746-.944 16.278 16.278 0 0 1-2.242-9.992v-.006l.002-.004c.281-3.616 2.843-6.969 4.525-8.74l.143-.151-.006-.21A28.75 28.75 0 0 1 36.401 64.2a26.967 26.967 0 0 1 6.853-9.041l.316-.271-.213-.359c-1.651-2.782-3.293-7.008-1.702-11.27v-.001c.594-1.578 1.13-2.782 1.75-3.653.62-.872 1.304-1.421 2.293-1.768l-.027.008a7.5 7.5 0 0 0 2.752-1.47l.025-.019.021-.023a17.581 17.581 0 0 1 11.814-5.64l.314-.019.116-.292c.192-.484.411-1.005.644-1.45l.006-.01.003-.007c1.612-3.425 3.279-5.245 5.132-5.888l.006-.002.004-.002a4.506 4.506 0 0 1 2.085-.256zm-.515 2.679c-.912.03-1.665.668-2.329 1.475-.664.806-1.255 1.834-1.762 2.852-.93 1.871-1.443 3.43-1.54 3.72-4.525-.326-8.961 1.399-12.027 4.76l.02-.022a9.377 9.377 0 0 1-3.743 2.209l-.006.002-.008.002c-.145.05-.616.191-1.015.711-.4.52-.85 1.403-1.493 3.14-1.045 2.791-.153 5.697.952 7.88.978 1.931 1.923 2.973 2.18 3.27-.608.436-6.123 4.433-8.409 9.86l-.002.001v.002c-1.551 3.782-2.155 7.878-1.82 11.95-.142.126-1.07.927-2.172 2.33-1.182 1.505-2.431 3.532-2.587 5.7v.003a13.674 13.674 0 0 0 1.868 8.275c.425.894 1.327 1.229 2.258 1.227-.27.372-.47.537-.729 1.223-.218.578-.36 1.237-.219 1.903.14.665.598 1.302 1.395 1.723l.002.002a11.841 11.841 0 0 0 4.836 1.294c1.75.07 3.532-.326 4.788-1.577v-.002c.939-.938 1.433-2.331 1.803-3.665.299-1.077.498-1.947.71-2.655.146.19.277.382.476.568l.006.006.006.004c.28.246.596.447.9.662-.382.207-.747.319-1.348 1.016-.878 1.018-1.53 2.69-.645 4.808.337.809 1.086 1.42 2.116 1.82 1.03.399 2.362.603 3.988.593 1.388 0 13.954-.7 17.622-1.58 1.089-.175 2.069-.729 2.816-1.534a65.022 65.022 0 0 0 15.897-7.192l.004-.002.004-.002c4.836-3.154 6.716-3.97 10.607-4.894 1.857-.44 2.783-2.15 2.566-3.72-.218-1.57-1.618-3.01-3.956-2.972h-.002c-4.611.055-8.584 2.415-11.88 4.467-3.036 1.878-5.294 2.746-6.779 3.146-1.278.344-1.682.297-1.84.29-.007-.044.005.006.013-.098.017-.22.065-.538.126-.93.122-.785.3-1.866.407-3.16.214-2.586.142-6.037-1.227-9.79-1.468-4.075-3.38-6.63-4.878-8.23-.748-.801-1.395-1.367-1.808-1.75a4.346 4.346 0 0 1-.341-.348c1.557-2.556 5.433-6.85 6.998-14.686.956-4.87.751-12.686-1.469-16.998-.138-.268-.43-.399-.657-.428a1.889 1.889 0 0 0-.66.05c-.446.098-.934.29-1.41.504-.703.315-1.056.527-1.356.696-.172-.38-.713-1.591-1.527-3.248a53.728 53.728 0 0 0-1.403-2.696c-.222-.39-.43-.73-.62-1.004-.19-.273-.325-.473-.576-.636-.33-.22-.72-.335-1.116-.325h-.002zm.03.992h.002a.937.937 0 0 1 .54.159l.004.002.006.004c-.026-.017.138.134.3.368.163.234.358.557.57.93a52.89 52.89 0 0 1 1.378 2.644c.923 1.878 1.735 3.688 1.735 3.688l.224.503.477-.277s.857-.497 1.744-.895c.444-.199.898-.37 1.215-.44.129-.028.204-.03.26-.029 1.958 3.912 2.244 11.644 1.341 16.244-1.542 7.72-5.36 11.784-6.996 14.55a.713.713 0 0 0-.066.522.96.96 0 0 0 .176.333c.138.183.309.345.526.547.434.403 1.046.939 1.76 1.701 1.426 1.526 3.25 3.947 4.67 7.89v.002c1.305 3.58 1.377 6.874 1.17 9.37-.103 1.248-.275 2.295-.399 3.087-.062.396-.111.726-.133 1.004-.023.278-.081.488.112.804l.232.39.256.02s.885.059 2.473-.369c1.589-.428 3.937-1.338 7.045-3.26h.002c3.28-2.043 7.09-4.268 11.368-4.318h.002c1.952-.032 2.805 1.003 2.96 2.115.153 1.112-.433 2.293-1.813 2.62-3.95.938-6.049 1.85-10.913 5.021a64.031 64.031 0 0 1-15.744 7.115l-.14.042-.094.11a3.938 3.938 0 0 1-2.376 1.326l-.02.004-.019.004c-3.231.78-16.448 1.555-17.419 1.555h-.002c-1.538.01-2.759-.19-3.624-.526-.864-.335-1.355-.786-1.56-1.277-.754-1.805-.226-2.956.483-3.779a5.096 5.096 0 0 1 1.61-1.219l.88-.378-.816-.5a9.758 9.758 0 0 1-1.312-.963l-.004-.004c-.17-.16-.409-.488-.628-.756-.11-.134-.196-.256-.387-.374a.599.599 0 0 0-.477-.083.635.635 0 0 0-.409.366v.002c-.343.85-.562 2.118-.916 3.396-.355 1.277-.846 2.528-1.547 3.228-.997.992-2.472 1.352-4.046 1.289-1.575-.063-3.218-.558-4.415-1.182-.59-.312-.804-.655-.888-1.05-.083-.396 0-.877.177-1.347.355-.941 1.05-1.766 1.05-1.766l-.599-.765a1.484 1.484 0 0 1-2.021-.7l-.01-.023-.013-.022a12.687 12.687 0 0 1-1.745-7.719v-.006l.002-.006c.13-1.825 1.257-3.73 2.378-5.159 1.121-1.428 2.202-2.366 2.202-2.366l.194-.167-.024-.253a24.889 24.889 0 0 1 1.754-11.727l.002-.002v-.002c2.24-5.313 8.432-9.739 8.432-9.739l.456-.321-.372-.415s-1.275-1.427-2.316-3.483c-1.041-2.055-1.807-4.683-.907-7.085v-.002c.627-1.695 1.068-2.517 1.347-2.88.279-.363.274-.282.55-.376l-.014.004a10.367 10.367 0 0 0 4.14-2.444l.012-.01.011-.01a13.841 13.841 0 0 1 11.58-4.45l.395.038.124-.378s.65-1.96 1.624-3.918c.487-.98 1.056-1.957 1.64-2.665.583-.708 1.164-1.098 1.593-1.112z"/>
</svg>);
}