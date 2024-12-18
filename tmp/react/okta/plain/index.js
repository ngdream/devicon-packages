const React = require("react");
module.exports = function OktaPlainIcon({size = "1em", color = "#0f82c2", ...props}){
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
	<path d="M24.195 111.117c-1.848-.133-3.262-.66-4.543-1.695-.641-.512-1.309-1.199-1.746-1.797-.898-1.215-1.531-2.875-1.801-4.719-.16-1.102-.148-.141-.168-14.371l-.156-14.492c-.184-1.469-.551-2.516-1.355-3.867-1.379-2.312-3.352-4.418-5.09-5.434-.352-.207-.434-.27-.52-.414-.066-.117-.082-.176-.082-.355s.016-.238.086-.355c.086-.148.125-.18.684-.52.723-.441 1.316-.926 2.148-1.762 1.344-1.344 2.539-2.984 3.27-4.484.57-1.172.801-2.09.957-3.855.027-.312.043-3.691.059-13.586l.168-14.371c.27-1.844.898-3.496 1.801-4.719.672-.914 1.73-1.887 2.641-2.43a7.52 7.52 0 0 1 2.621-.937c.816-.137.969-.141 3.977-.141h2.871l.125.066a.76.76 0 0 1 .352.398c.035.094.043.449.043 1.73v1.613l-.078.152c-.098.191-.285.336-.488.379-.105.023-.852.035-2.238.035l-2.418.031c-1.602.156-2.68.645-3.418 1.547-.73.895-1.047 1.789-1.137 3.227-.02.316-.031 5.348-.031 14.34l-.031 14.262c-.148 1.945-.648 3.527-1.633 5.172a13.23 13.23 0 0 1-2.777 3.352c-.551.484-.609.57-.59.895.016.277.082.379.465.707.906.773 1.719 1.676 2.359 2.609 1.199 1.762 1.867 3.441 2.094 5.258l.07.508c.012.066.031 6.629.039 14.582l.059 14.738c.059.426.18.988.266 1.262.188.57.57 1.207 1.027 1.707.613.668 1.516 1.09 2.762 1.289.395.066.551.07 2.781.086 2.648.02 2.52.008 2.723.242s.195.164.195 1.941c0 1.277-.008 1.637-.043 1.727a.76.76 0 0 1-.352.398l-.125.07-2.734.004c-1.504 0-2.891-.008-3.086-.023zm73.746-.012a.69.69 0 0 1-.406-.363l-.082-.164.012-1.656.008-1.656.082-.141a.71.71 0 0 1 .453-.332c.09-.02.914-.031 2.227-.031l2.441-.035c.82-.074 1.621-.281 2.18-.562.664-.336 1.094-.73 1.57-1.445.391-.582.621-1.234.754-2.105.051-.328.055-1.281.074-14.781l.055-14.738c.191-1.656.527-2.832 1.172-4.098.828-1.637 1.973-3.105 3.27-4.207.355-.301.484-.461.535-.645.086-.309-.031-.559-.43-.895a13.31 13.31 0 0 1-2.902-3.445c-.965-1.613-1.426-3.008-1.645-4.949-.031-.266-.043-3.57-.059-14.754l-.07-14.77c-.113-.754-.316-1.383-.594-1.859-.328-.562-.801-1.102-1.219-1.391-.664-.461-1.578-.754-2.672-.863-.203-.02-1.168-.031-2.441-.035-1.328 0-2.156-.012-2.246-.031a.71.71 0 0 1-.453-.332l-.082-.141-.008-1.652-.012-1.652.078-.164c.082-.187.258-.332.457-.387.168-.047 5.762-.02 6.16.031 1.754.211 2.973.695 4.176 1.656.379.297 1.137 1.043 1.449 1.414a9.37 9.37 0 0 1 1.449 2.52c.398 1.043.637 2.168.793 3.73.027.273.043 3.734.055 13.555l.074 13.664c.207 1.859.559 2.938 1.434 4.395 1.355 2.262 3.199 4.25 4.918 5.316.156.094.348.215.422.262.215.133.32.305.332.555.02.352-.094.531-.492.762-1.809 1.035-3.734 3.07-5.18 5.473-.875 1.453-1.227 2.535-1.434 4.395-.051.441-.055 1.48-.074 13.664l-.055 13.555c-.199 2.012-.543 3.344-1.207 4.66-.449.887-.949 1.563-1.734 2.328-.543.527-.801.742-1.324 1.094-.895.605-1.965 1.008-3.141 1.176-.742.105-1.285.125-3.953.121-2.094 0-2.625-.008-2.715-.043zM62.777 95.5c-3.234-.152-6.004-.668-8.922-1.652-5.645-1.906-10.586-5.363-14.461-10.113-3.445-4.219-5.684-9.156-6.555-14.434-.289-1.77-.398-3.141-.398-5.035 0-1.574.063-2.543.246-4.008.77-6.066 3.289-11.902 7.133-16.535a31.63 31.63 0 0 1 4.5-4.406c7.715-6.184 17.938-8.367 27.574-5.895 6.742 1.73 12.719 5.656 17.031 11.191 3.633 4.66 5.879 10.281 6.473 16.184.121 1.203.141 1.648.141 3.176s-.02 1.973-.141 3.18a31.48 31.48 0 0 1-4.645 13.57c-2.027 3.242-4.73 6.18-7.836 8.512a31.41 31.41 0 0 1-19.008 6.281l-1.133-.016zm2.211-15.793a15.75 15.75 0 0 0 13.984-10.773c.941-2.84 1.055-5.863.332-8.781-.934-3.789-3.297-7.133-6.598-9.328-2.539-1.691-5.598-2.613-8.687-2.617a15.76 15.76 0 0 0-14.953 10.746 14.78 14.78 0 0 0-.812 5.02c0 1.457.129 2.516.473 3.883 1.117 4.445 4.18 8.223 8.309 10.258 1.938.953 3.906 1.469 6.141 1.605a20.18 20.18 0 0 0 1.813-.012zm0 0 M62.961 95.441l-2.75-.215c-5.816-.703-11.266-2.988-15.824-6.633-1.715-1.371-3.281-2.91-4.723-4.637-4.059-4.871-6.473-10.66-7.039-16.867-.164-1.809-.164-3.828 0-5.648.566-6.293 3.004-12.383 6.914-17.266a31.48 31.48 0 0 1 10.508-8.434c5.102-2.52 10.816-3.609 16.52-3.148 8.813.715 16.855 5.066 22.313 12.066 2.211 2.836 3.918 6.043 5.039 9.473.84 2.563 1.313 5.008 1.52 7.875.051.73.051 3.199 0 3.93-.207 2.867-.68 5.324-1.52 7.875-1.535 4.684-4.109 8.871-7.605 12.379-3.508 3.512-7.656 6.09-12.312 7.645-2.551.848-5.098 1.352-7.863 1.551-.617.043-2.695.078-3.176.055zm2.547-15.699c.57-.062 1.195-.16 1.703-.266 5.426-1.113 9.891-5.016 11.734-10.25a16.08 16.08 0 0 0 .855-4.082c.039-.512.039-1.832 0-2.34-.242-3.062-1.305-5.902-3.125-8.328-1.051-1.406-2.383-2.668-3.844-3.645-.715-.48-1.121-.715-1.859-1.074-1.695-.828-3.406-1.324-5.324-1.535a21.97 21.97 0 0 0-2.687-.051c-5.691.406-10.633 3.711-13.141 8.785a15.66 15.66 0 0 0-1.645 7.016c0 3.094.902 6.105 2.605 8.707.543.824 1.266 1.715 1.992 2.441 2.703 2.723 6.184 4.328 10.063 4.648.434.035 2.27.016 2.672-.027zm0 0"/>
</svg>);
}