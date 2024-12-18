const React = require("react");
module.exports = function ArgocdPlainIcon({size = "1em", color = "#ef7b4d", ...props}){
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
	<path d="M66.828 2.133c2.254.191 4.5.515 6.719.965 8.68 1.98 16.129 6.27 22.652 12.222 6.004 5.48 9.91 12.266 12.074 20.07.457 1.657 1.114 2.895 3.028 3.223 1.062.184 1.234 1.266 1.238 2.227.016 3.344.008 6.687.008 10.031 0 2.086-.004 4.172-.008 6.258-.008 1.836-.602 2.473-2.406 2.445-1.094-.015-1.52.621-1.785 1.508a48.731 48.731 0 01-2.852 7.371c-4.226 8.7-10.773 15.188-19.07 20.012-.395.23-.797.453-1.203.676-1.301.71-1.332.754-.801 2.144a5.422 5.422 0 003.433 3.235c1.391.5 2.856.69 4.274 1.085.433.082.851.247 1.226.48-.343.43-.808.353-1.199.43-1.86.376-3.683.95-5.617.876a6.643 6.643 0 01-2.262-.329c-.59-.234-.789-.035-.91.567a27.309 27.309 0 00-.433 4.754c-.079 3.187-.364 6.36-.582 9.535-.215 3.086-.094 3.367 2.886 4.355 1.453.48 2.91.965 4.352 1.477.36.125.777.2.996.602-.207.293-.508.183-.758.183-2.547.012-5.094.024-7.64.004-2.711-.023-4.168-1.457-4.368-4.152-.289-3.942-.62-7.88-.941-11.817a5.738 5.738 0 00-.133-.625c-.41 2.356-.34 4.543-.433 6.72-.126 2.722-.043 5.456-.04 8.187 0 1.394.442 2.003 1.73 2.492 1.86.703 3.68 1.527 5.763 1.355.73-.058 1.425.32 2.082.668.16.086.375.168.355.375-.023.227-.258.246-.433.238-3.403-.105-6.813.332-10.2-.148-1.668-.234-2.757-1.219-3.265-2.852-.489-1.57-.586-3.195-.703-4.808-.239-3.238-.407-6.484-.602-9.723a1.17 1.17 0 00-.313-.883c-.171.305-.23.657-.164.996-.007 4.942-.007 9.88-.003 14.82 0 2.009.632 2.977 2.554 3.661 2.485.89 5.043 1.543 7.598 2.187.57.145 1.164.243 1.254.993h-9.574c-.27-.051-.536-.114-.805-.153-3.629-.52-5.176-1.93-5.91-5.39-.121-.57-.227-1.14-.344-1.707-.39-1.903-.777-3.805-1.168-5.707a6.432 6.432 0 00-.75 1.996c-.43 2.066-.781 4.148-1.254 6.203-.586 2.547-2.297 3.945-4.82 4.433-.567.11-1.137.215-1.703.325h-9.575c.297-.887 1.118-.957 1.84-1.149 2.457-.652 4.961-1.148 7.328-2.105a3.13 3.13 0 002.051-2.7c.301-2.246.008-4.468-.07-6.699a7.761 7.761 0 00-.402-1.629 2.108 2.108 0 00-.368 1.07c-.136 1.528-.254 3.055-.386 4.583-.2 2.234-1.41 3.703-3.512 4.183a8.727 8.727 0 01-1.91.239c-2.883.015-5.766-.008-8.653-.028-.25 0-.562.102-.761-.332a7.316 7.316 0 013.008-.972 29.42 29.42 0 004.855-.996c2.168-.59 2.695-1.286 2.64-3.551-.117-4.813-.464-9.617-.351-14.434.023-.95.004-1.898.004-2.848-.14.657-.227 1.325-.262 1.993-.156 4.53-.508 9.05-.96 13.562-.266 2.653-1.532 3.867-4.153 4.164-2.309.262-4.594.004-6.887-.11-.562-.026-1.21.063-1.754-.331.223-.336.547-.356.828-.445 1.868-.594 3.75-1.16 5.61-1.778 1.273-.422 1.816-1.219 1.84-2.55.007-.4.011-.797-.02-1.196-.289-3.7-.426-7.402-.539-11.11a27.593 27.593 0 00-.184-2.472c-.12-.973-.675-1.488-1.523-1.332-2.613.469-5.121-.031-7.613-.719-.309-.086-.692-.043-.922-.453.465-.23.957-.39 1.469-.469a29.826 29.826 0 003.898-1.074 6.19 6.19 0 003.594-3.367c.457-1.05.285-1.64-.582-2.059-7.328-3.53-12.989-8.941-17.528-15.597a42.204 42.204 0 01-5.812-12.653c-.348-1.273-.805-1.554-1.977-1.347-1.586.281-2.074.031-2.765-1.41V40.059c.742-1.567 1.058-1.766 2.758-1.7 1.214.047 1.277-.027 1.601-1.257 2.047-7.793 5.59-14.79 11.223-20.614C37.453 9.477 45.848 5.395 55.242 3.18c2.36-.555 4.766-.778 7.168-1.047zm41.23 46.265a37.976 37.976 0 00-.25-4.851 44.116 44.116 0 00-.515-3.36c-3.09-15.32-12.117-25.953-26.113-32.406-8.032-3.699-16.598-4.32-25.22-2.64-16.795 3.269-27.9 13.351-33.807 29.222-2.257 6.063-2.558 12.438-1.914 18.867a41.154 41.154 0 003.848 13.93c3.027 6.274 7.469 11.41 12.812 15.813a27.472 27.472 0 005.793 3.722c1.215.567 1.274.535 1.27-.757.031-.829.012-1.66-.05-2.485-.65-5.273-.74-10.574-.872-15.871a2.026 2.026 0 00-.953-1.82c-1.988-1.387-3.688-3.067-4.766-5.27-2.445-5.012-1.922-12.21 4.207-16.62.703-.509 1.125-.99 1.024-1.93a8.967 8.967 0 01.164-2.286c.91-6.136 3.86-11.054 8.898-14.687 3.524-2.54 7.457-3.989 11.82-4.043 2.497-.031 4.93.57 7.313 1.262 8.317 2.417 14.715 10.707 14.707 19.117a3.323 3.323 0 001.387 2.922c2.394 1.914 4.246 4.289 4.875 7.375 1.137 5.566-.426 10.246-5.059 13.617-1.379 1-1.793 2.094-1.726 3.605.011.246.004.492-.008.739-.106 2.476-.211 4.957-.32 7.437-.133 3.027-.707 6.027-.602 9.074.04 1.149.027 1.164 1.035.656a38.675 38.675 0 0012.375-9.835c6.824-8.16 10.723-17.438 10.649-28.497zm-59.14 16.309a10.007 10.007 0 008.766-4.934 10.019 10.019 0 00.043-10.062A10.011 10.011 0 0049 44.699c-5.656-.023-10.098 4.246-10.121 9.723-.024 5.933 4.203 10.262 10.039 10.285zm29.953 0c5.695.012 10.008-4.262 10.004-9.91 0-5.645-4.367-10.078-9.922-10.067-5.504.008-10.031 4.473-10.047 9.899-.015 5.71 4.293 10.07 9.965 10.078zm-7.61 10.016c-1.077.66-2.1 1.43-3.253 1.984-2.774 1.328-5.5 1.328-8.168-.25-.817-.484-1.59-1.039-2.399-1.539-.242-.148-.476-.535-.777-.32-.227.156-.047.511-.004.78.192.927.336 1.868.426 2.813.137 2.918 1.512 5.125 3.84 6.77a5.073 5.073 0 004.086.96c2.922-.609 5.3-3.175 5.812-6.296.223-1.375.024-2.809.563-4.148a.681.681 0 00-.125-.754zm0 0"/>
	<path d="M25.867 49.281c-.066-5.695.738-10.625 2.793-15.308 3.27-7.461 8.492-13.203 15.402-17.446a1.966 1.966 0 012.376.344c.312.313.187.613.054.926a5.629 5.629 0 01-2.48 2.633c-5.582 3.304-9.457 8.12-12.184 13.902a32.572 32.572 0 00-3.203 15.434c.29 6.765 2.273 13.015 6.273 18.55a4.09 4.09 0 01.895 1.887c.055.418.305.871-.156 1.18a1.619 1.619 0 01-1.492.215 2.586 2.586 0 01-1.211-.957c-3.723-5.059-6.168-10.63-6.88-16.926-.19-1.684-.023-3.371-.187-4.434zM48 14.234a1.945 1.945 0 01.559-1.406 1.945 1.945 0 011.398-.574c1.094.008 2.113 1.172 2.148 2.453.016.707-1.597 2.016-2.46 1.988-.973-.023-1.645-1.03-1.645-2.46zM45.594 52.91a3.163 3.163 0 013.035-3.27c1.965-.007 3.469 1.403 3.488 3.278.02 1.836-1.398 3.215-3.304 3.207-1.97-.004-3.211-1.246-3.22-3.215zm33.594 3.215c-1.977-.012-3.235-1.316-3.211-3.336a3.27 3.27 0 013.078-3.172 3.4 3.4 0 013.46 3.328c.005 1.825-1.425 3.192-3.328 3.18zm0 0"/>
</svg>);
}