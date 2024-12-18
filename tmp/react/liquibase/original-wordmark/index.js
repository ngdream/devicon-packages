const React = require("react");
module.exports = function LiquibaseOriginalWordmarkIcon({size = "1em", color = "#FF3C00", ...props}){
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
	<path d="M63.195 23.797c-2.425.101-4.32.367-6.246.863-1.383.356-2.414.727-3.5 1.266-2.355 1.16-3.554 2.605-3.273 3.945.078.379.191.633.437.996.535.774 1.434 1.477 2.762 2.149 2.219 1.125 4.965 1.804 8.484 2.101.926.082 4.184.067 5.137-.015 3.367-.309 6.106-1 8.262-2.094 1.808-.914 2.953-2.031 3.176-3.098.07-.328.07-.496 0-.828-.364-1.754-3.063-3.496-6.903-4.46-1.613-.407-3.187-.642-5.082-.774-.578-.043-2.746-.078-3.254-.051ZM78.11 34.14c-1.359 1.007-3.007 1.746-5.488 2.464-.984.29-2.832.754-5.004 1.266-3.617.856-4.805 1.152-6.34 1.594-5.722 1.644-8.894 3.672-10.32 6.59-.555 1.136-.785 2.199-.828 3.832l-.024.843.317-.253c1.308-1.055 3.297-2.028 5.848-2.872 1.957-.64 3.707-1.09 8.28-2.136 4.927-1.125 7.184-1.746 9.196-2.543.684-.27 1.828-.836 2.317-1.14 1.273-.806 2.039-1.704 2.324-2.727.078-.29.082-.368.097-2.434.004-1.176.008-2.277 0-2.445l-.011-.309Zm.137 9.082c-1.7 1.289-4.121 2.316-7.848 3.34-1.082.296-2.78.71-5.308 1.28-3.738.856-4.91 1.15-6.563 1.618-1.89.543-3.312 1.066-4.59 1.695-1.183.586-1.91 1.09-2.582 1.782-.753.785-1.097 1.492-1.203 2.472-.039.344-.035.442.016.719.176.863.883 1.726 2.062 2.508l.211.14.41-.254c.829-.503 2.126-1.117 3.32-1.562 2.083-.781 4.134-1.348 9.618-2.664 4.508-1.082 7.027-1.879 8.996-2.856 1.156-.574 1.89-1.082 2.543-1.77.57-.589.863-1.093 1.063-1.816.074-.273.078-.386.093-2.292.008-.754.008-1.504 0-2.254l-.011-.258Zm-.176 9.066c-1.332 1.008-3.09 1.856-5.523 2.672-1.652.55-3.41 1.035-6.227 1.715-2.39.578-4.648 1.14-5.382 1.344-2.422.656-4.301 1.3-5.54 1.898l-.273.129.535.176c2.008.652 4.149 1.035 6.707 1.195.778.05 3.098.05 3.875 0 1.766-.11 3.219-.313 4.7-.645 3.734-.847 6.519-2.394 7.312-4.058.23-.492.238-.59.23-2.774l-.011-1.957ZM64.457 82.555v10.312h3.613v-.222c0-.125.008-.227.02-.227.015 0 .25.11.52.242a6.647 6.647 0 0 0 1.726.594c.375.078.527.09 1.328.09.793-.004.95-.012 1.297-.09 1.426-.309 2.582-.953 3.574-2 2.356-2.465 2.508-6.317.352-8.977a8.912 8.912 0 0 0-1.293-1.226c-2.059-1.492-4.723-1.703-7.012-.559-.266.133-.492.242-.5.242-.004 0-.012-1.175-.012-2.617 0-1.691-.02-2.699-.043-2.847a3.685 3.685 0 0 0-.742-1.645c-.656-.824-1.523-1.277-2.61-1.371l-.218-.02Zm7.996.71c1.563.407 2.664 1.895 2.567 3.481a3.43 3.43 0 0 1-2.614 3.145c-.418.101-1.11.109-1.484.02-1.34-.329-2.332-1.329-2.617-2.653-.078-.352-.075-1.059.004-1.39.332-1.395 1.359-2.395 2.746-2.661.363-.066 1.011-.039 1.398.059Zm-66.93.192v9.41h10.989v-3.625l-3.508-.008-3.512-.011-.02-5.953-.019-5.957-.082-.297c-.34-1.153-1.055-2.036-2.078-2.555-.473-.242-1.145-.414-1.586-.414h-.184Zm14.45-9.352c-.606.16-1.16.61-1.442 1.172a2.374 2.374 0 0 0-.12 1.703c.187.567.609 1.06 1.128 1.313.36.176.61.23 1.04.227a2.11 2.11 0 0 0 1.23-.387c.62-.442.949-1.078.949-1.848 0-.652-.192-1.117-.653-1.582-.328-.328-.609-.496-1.023-.601-.277-.07-.836-.067-1.11.003Zm38.62.008c-.402.121-.648.274-.972.594-.453.453-.656.922-.656 1.559 0 .39.055.64.203.976.254.54.734.969 1.324 1.172.348.121.871.145 1.223.059a2.264 2.264 0 0 0 1.68-2.575 2.274 2.274 0 0 0-1.465-1.738c-.332-.12-1.004-.14-1.336-.047Zm43.024 5.625c-.39.04-.949.14-1.265.227-2.122.562-3.344 1.976-3.344 3.855 0 1.707.844 2.848 2.597 3.504.493.184 1.051.328 2.235.574 1.23.258 1.539.368 1.808.641.215.215.282.387.282.707 0 .492-.325.836-.926.996-.258.067-.973.078-1.262.016-.695-.145-1.129-.625-1.187-1.313l-.024-.234h-4.015l.02.195c.206 1.75.944 2.871 2.35 3.586 1.813.914 4.868.953 6.677.074 1.613-.777 2.453-2.273 2.28-4.078-.132-1.441-.878-2.37-2.41-2.992-.581-.238-1.18-.41-2.386-.676-1.387-.312-1.676-.41-1.95-.68-.257-.25-.32-.706-.128-.988.12-.183.355-.347.613-.437.34-.11 1.117-.102 1.426.02.41.16.734.597.734.988 0 .242-.14.226 1.973.226h1.93l-.04-.293a4.386 4.386 0 0 0-.98-2.328c-.258-.312-.793-.723-1.227-.945-.851-.438-1.707-.63-2.894-.649a13.41 13.41 0 0 0-.887.004Zm14 .02a6.714 6.714 0 0 0-5.027 3.133c-.485.777-.817 1.738-.942 2.699-.066.523-.027 1.758.075 2.273.261 1.297.824 2.403 1.683 3.305 1.047 1.098 2.348 1.746 3.946 1.977.437.058 1.664.058 2.125-.008 2.605-.352 4.464-1.785 5.246-4.04l.136-.386h-3.683l-.137.207c-.324.492-.965.945-1.543 1.094-.836.21-1.797.148-2.48-.16-.715-.329-1.27-.934-1.582-1.727-.094-.238-.207-.598-.207-.672 0-.016 2.222-.027 4.93-.027h4.929v-.86c0-1.171-.07-1.714-.328-2.523-.867-2.715-3.297-4.36-6.387-4.324-.25.004-.59.02-.754.039Zm1.73 3.152c.864.242 1.485.746 1.864 1.5.102.207.187.41.187.45 0 .07-.07.07-2.992.07-2.27 0-2.992-.008-2.992-.043 0-.024.07-.184.148-.348.442-.898 1.16-1.457 2.149-1.668.328-.07 1.324-.05 1.637.04Zm-86.242-3.113c-1.171.11-2.3.539-3.32 1.266-.414.296-1.226 1.124-1.535 1.562-.332.473-.742 1.277-.914 1.816a6.91 6.91 0 0 0 .914 6.086c.324.461 1.129 1.27 1.586 1.598.703.5 1.695.93 2.605 1.129.344.078.493.086 1.329.086.843 0 .984-.008 1.335-.086a6.777 6.777 0 0 0 1.57-.535l.462-.219.011 3.008.012 3.015.102.375a3.98 3.98 0 0 0 1.297 2.024c.609.496 1.308.77 2.148.844l.234.023V80.055h-3.574v.36c0 .198-.012.358-.02.358a2.289 2.289 0 0 1-.214-.117c-1.125-.672-2.645-.996-4.028-.86Zm1.665 3.484c.628.18 1.082.446 1.523.89.687.7 1.031 1.575.984 2.536-.039.871-.351 1.61-.945 2.223a3.361 3.361 0 0 1-2.906 1.011 3.395 3.395 0 0 1-2.153-1.214 3.444 3.444 0 0 1-.53-3.407 3.405 3.405 0 0 1 1.964-1.937 3.388 3.388 0 0 1 2.063-.102Zm53.503-3.484a6.8 6.8 0 0 0-3.613 1.492 8.27 8.27 0 0 0-1.308 1.434c-1.2 1.77-1.504 3.949-.84 6.004a8 8 0 0 0 .906 1.8c.324.461 1.133 1.27 1.59 1.598.699.5 1.695.93 2.601 1.129.344.078.496.086 1.332.086.836 0 .98-.008 1.336-.086a7.42 7.42 0 0 0 1.754-.625l.465-.242v.48h3.613V80.055h-3.613v.343c0 .192-.012.336-.023.332-.172-.082-.336-.164-.504-.246a6.681 6.681 0 0 0-3.696-.687Zm1.497 3.473a3.417 3.417 0 0 1 2.238 1.855c.238.5.312.836.312 1.434.004.609-.074.957-.332 1.492-.46.953-1.273 1.597-2.343 1.86-.356.081-1.036.081-1.418-.005-1.579-.363-2.672-1.722-2.672-3.332 0-1.316.715-2.465 1.879-3.047a3.338 3.338 0 0 1 2.336-.257Zm-69.153 3.19v6.407h3.801V80.055h-3.8Zm23.567-1.858c.015 5.03.004 4.796.261 5.62.395 1.231 1.254 2.196 2.371 2.645a5.265 5.265 0 0 0 2.079.328c1.308-.082 2.382-.605 3.156-1.52l.273-.323.012.757.008.758h3.574V80.055h-3.797l-.023 7.918-.09.265c-.27.797-.684 1.235-1.38 1.442-.335.101-1.01.093-1.331-.02-.645-.222-1-.64-1.215-1.422l-.086-.3-.023-7.883h-3.801Zm15.12 1.859v6.406h3.801V80.055h-3.8Zm0 0"/>
</svg>);
}