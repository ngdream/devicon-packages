const React = require("react");
module.exports = function JaegertracingOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M38.422 113.68c-1.805.414-7.117 3.289-11.711 4.16-4.59.875-8.563 1.336-9.957 1.851-1.39.512-2.473 1.54.258 2.567 2.738 1.027 15.992 1.387 17.18 0 1.187-1.387-.82-1.988-3.715-1.95-2.063.024-1.813-.69-1.805-.773 0 0 .129-.898 3.3-1.336 3.169-.433 17.18-1.742 16.923-3.234-.258-1.488-8.668-1.695-10.473-1.285Zm-6.406 10.41c-.094-.426-1.375-.52-2.856-.195-1.484.324-2.61.93-2.515 1.359.093.43 1.37.52 2.855.2 1.484-.325 2.605-.934 2.516-1.364Zm-6.164-.004c-.036-.422-1.352-.668-2.942-.543-1.59.129-2.851.574-2.82 1 .035.422 1.351.664 2.941.535 1.594-.121 2.856-.566 2.82-.992Zm-6.043-.664c-.047-.328-.942-.48-2-.336-1.063.14-1.883.527-1.836.86.043.327.941.48 2 .335 1.058-.144 1.879-.527 1.836-.86Zm-3.82-.586c-.04-.262-.9-.36-1.923-.211-1.023.145-1.816.48-1.78.746.038.27.902.367 1.921.219 1.02-.149 1.82-.485 1.777-.754Zm-.852-1.05c-.04-.27-.899-.364-1.922-.216-1.024.149-1.82.485-1.781.75.039.266.902.364 1.921.215 1.024-.144 1.82-.484 1.782-.75Zm-.465-1.157c-.035-.23-.781-.317-1.672-.188-.887.133-1.578.422-1.543.657.031.23.777.312 1.668.183.89-.125 1.582-.418 1.547-.652Zm51.297-5.512c-3.145.156-10.266-.203-11.246 1.442-.98 1.64 2.89 2.257 8.976 1.746 6.09-.516 14.703-1.184 15.067-3.032.359-1.847-1.602-1.492-1.809-2.668-.207-1.183 2.168-1.183 2.633-2.93.465-1.745-3.195-1.542-6.45-1.542-3.25 0-8.663.308-9.183 2.004-.516 1.695 2.477 1.695 4.594 2.105 2.113.414 1.496 1.184 1.496 1.184-.106 1.078-.93 1.539-4.078 1.691Zm-5.684 4.512c0-.492-1.222-.887-2.73-.887s-2.727.395-2.727.887c0 .484 1.219.883 2.727.883 1.508 0 2.73-.399 2.73-.883Zm6.113-.195c0-.45-.816-.809-1.82-.809s-1.82.36-1.82.809c0 .445.816.808 1.82.808s1.82-.363 1.82-.808Zm5.84-.579c0-.363-.894-.656-1.992-.656-1.101 0-1.996.293-1.996.656 0 .364.895.657 1.996.657 1.098 0 1.992-.293 1.992-.657Zm3.832-.73c0-.383-.648-.695-1.453-.695-.8 0-1.453.312-1.453.695 0 .383.652.691 1.453.691.805 0 1.453-.308 1.453-.691Zm3.793-.79c0-.374-.66-.675-1.472-.675-.813 0-1.47.3-1.47.676 0 .371.657.672 1.47.672.812 0 1.472-.301 1.472-.672ZM14.238 98.392c0 .879 1.922 1.707 5.328 2.445-.242-1.762-.093-3.531.133-4.91-3.492.742-5.46 1.582-5.46 2.469Zm100.559-2.266a7.604 7.604 0 0 1-1.953 2.98c-1.54 1.454-2.887 2.325-4.094 2.641 6.66-.933 10.613-2.094 10.613-3.351 0-.81-1.636-1.579-4.566-2.27Zm0 0" fill="#231f20"/>
	<path d="M103.406 94.281c-.422-3.09-1.746-4.476-2.918-5.699-1.086-1.14-2.117-2.215-1.785-4.191.309-1.829 1.766-2.95 4.152-3.243-1.449-9.75-3.574-22.046-6.3-32.535-1.364-5.238-3.516-8.875-6.407-11.297-3.308 1.688-7.28 3.54-11.722 5.457a306.52 306.52 0 0 1-9.676 3.973c-2.531 2.707-5.305 5.379-7.004 6.14-1.207.54-2.285.759-3.219.759-2.02 0-3.386-1.012-4.043-1.91-.77.203-1.382.335-1.797.374-.496.055-1.23.118-2.148.184a2.8 2.8 0 0 1-.46 2.805c-.747.89-1.946 1.34-3.645 1.34-2.442 0-5.918-.926-10.57-2.801-.63-.254-1.259-.5-1.891-.739-.356.004-.711.004-1.067.004h-.004c-4.445 0-7.914-.136-10.636-.359-2.985 6.145-1.688 12.96-.598 18.59 1.047 5.398 4.676 14.996 8.043 23.246 1.137 2.789 2.3 5.57 3.488 8.34 9.11.8 20.793 1.281 33.531 1.281 15.16 0 28.81-.684 38.426-1.777-.703-2.868-1.586-6.86-1.742-7.88ZM28.32 68.011c0-5.8 4.727-10.5 10.555-10.5 5.824 0 10.547 4.7 10.547 10.5 0 2.891-1.176 5.509-3.074 7.41a10.682 10.682 0 0 1-2.137 1.65 10.499 10.499 0 0 1-5.336 1.44c-5.828 0-10.555-4.698-10.555-10.5ZM56.5 90.247c-2.223.66-3.023-1.883-3.262-2.988.016-.008.032-.02.047-.031 1.035-.645 2.238-1.383 3.59-1.899.156.422.402 1.14.55 1.899.247 1.28.223 2.68-.925 3.02Zm3.613-.898c-.554-.207-.972-1.121-1.27-2.121a18.719 18.719 0 0 1-.515-2.344c.258-.059.527-.106.797-.145.133-.02.418-.039 1.016-.039.547 0 1.207.02 1.91.04.199.003.406.011.617.011.059.477.121 1.172.2 2.184.01.105.01.199.01.293.032 2.53-2.187 2.34-2.765 2.12Zm9.496-6.387c-1.078.477-2.656.68-5.293.68-.894 0-1.816-.02-2.629-.04a63.082 63.082 0 0 0-1.925-.038c-.508 0-.88.015-1.102.042-2.488.329-4.543 1.61-6.195 2.641-.48.3-.938.582-1.36.817-.687.374-1.523.574-2.43.574-1.671 0-3.241-.653-4.206-1.746-.797-.907-1.133-2.043-.969-3.282.5-3.714 5.836-5.613 6.441-5.816l.977-.332a1.496 1.496 0 0 1-.074-.29c-.29-1.73 1.98-3.546 5.07-4.058l.414-.058c2.559-.317 4.805.398 5.504 1.691l1.191.008c2.711.023 4.954.387 6.653 1.082 1.715.695 2.761 1.707 2.953 2.848.387 2.293-.746 4.265-3.02 5.277Zm1.954-12.016c-5.825 0-10.547-4.703-10.547-10.504 0-5.8 4.722-10.504 10.547-10.504 5.824 0 10.55 4.704 10.55 10.504 0 5.801-4.722 10.504-10.55 10.504Zm0 0" fill="#67cfe3"/>
	<path d="m85.074 25.055-.082-.137-.101-.133c-.098-.156-.485-.394-.516-.398l-.04-.02-.019-.012-.074-.035h-.008l-.015-.008-.106-.035-.215-.074c-.144-.05-.304-.07-.457-.101-.156-.028-.32-.028-.48-.036a4.047 4.047 0 0 0-.488.04 3.526 3.526 0 0 0-1.657.796 5.275 5.275 0 0 0-1.043 1.22 8.6 8.6 0 0 0-1.03 2.417 9.917 9.917 0 0 0-.313 1.79c-.024.218-.024.39-.028.507-.004.117 0 .18 0 .18l.332-.598c.211-.375.504-.906.864-1.523.367-.61.804-1.31 1.332-1.942.265-.316.558-.61.867-.836.308-.219.625-.375.941-.422.078-.011.16-.023.239-.03.082.01.16 0 .242.019.086.02.168.015.254.043l.203.054.062.032-.008-.008h.012c0 .004.004.008.008.011l.004.004.023.008h-.011c-.004 0-.008 0-.012-.004.012.008.02.02.027.043.043.074.078.23.09.399.016.382-.016.761-.09 1.136-.058.375-.136.739-.226 1.106-.16.695-.32 1.285-.422 1.703-.11.418-.168.66-.168.66s.183-.176.457-.516c.375-.476.715-.98 1.008-1.507a8.36 8.36 0 0 0 .523-1.121c.16-.418.309-.88.356-1.438a2.503 2.503 0 0 0-.118-.96 1.407 1.407 0 0 0-.117-.274Zm0 0" fill="#000"/>
	<path d="m83.75 25.816-.012-.003.012.011h.004l-.004-.004Zm0 0" fill="#000"/>
	<path d="M19.648 45.129h.145c-.05-.086-.098-.176-.145-.262Zm1.29-4.074c.25.496.546.968.89 1.406.121.16.227.273.3.355.067.082.11.121.11.121s-.043-.226-.12-.609c-.071-.387-.192-.926-.294-1.558a11.31 11.31 0 0 1-.12-1c-.017-.336-.017-.7.054-.961a.731.731 0 0 1 .137-.29.342.342 0 0 1 .148-.081l.047-.012.082-.016c.023-.004-.008.016-.012.016-.004.004-.015.004-.023.004h-.016l.008.004c.02.007.031.007.047.011.078.028.195.094.32.184.262.187.531.48.79.773.257.309.503.621.737.942.473.64.91 1.261 1.293 1.797.313.437.63.875.957 1.3.122.164.254.329.387.489l-.02-.164c-.015-.102-.035-.262-.074-.457a11.835 11.835 0 0 0-.414-1.586 13.412 13.412 0 0 0-.914-2.141 8.953 8.953 0 0 0-.722-1.145 5.303 5.303 0 0 0-1.055-1.097 2.918 2.918 0 0 0-.844-.43c-.094-.02-.183-.039-.277-.05l-.074-.012h-.094c-.067 0-.125.004-.192.007-.054.008-.144.016-.171.024l-.079.02-.078.023-.105.031-.031.012-.059.027a1.773 1.773 0 0 0-.824.707 2.082 2.082 0 0 0-.29.895c-.05.55.06.996.169 1.398.113.367.254.723.425 1.063Zm0 0" fill="#231f20"/>
	<path d="M25.805 105.574c2.472 0 4.21-1.34 5.437-3.078a362.39 362.39 0 0 1-5.883-14.394c-.593.5-1.273 1.253-2.015 2.39-1.836 2.84-3.352 9.438-1.446 12.926.797 1.45 2.075 2.156 3.907 2.156Zm87.308-16.355c-1.453-3.73-4.535-6.383-7.5-6.446l-.101-.011c-.008 0-.578-.082-1.344-.082-1.613 0-3.594.34-3.867 1.976-.192 1.133.304 1.711 1.36 2.817 1.202 1.261 2.85 2.984 3.347 6.593.566 4.125 1.578 6.223 3.012 6.223.668 0 1.882-.398 3.898-2.3 2.48-2.34 2.242-6.063 1.195-8.77Zm0 0" fill="#dfcaa3"/>
	<path d="M41.246 71.703a3.32 3.32 0 0 1-3.324 3.313 3.32 3.32 0 0 1-3.328-3.313 3.32 3.32 0 0 1 3.328-3.312 3.297 3.297 0 0 1 2.348.968c.625.621.976 1.465.976 2.344Zm32.215-7.762a3.314 3.314 0 0 1-3.324 3.313 3.318 3.318 0 0 1-3.328-3.313c0-1.828 1.492-3.308 3.328-3.308a3.316 3.316 0 0 1 3.324 3.308Zm0 0" fill="#231f20"/>
	<path d="M28.895 34.707c2.597.695 5.53 1.047 8.726 1.047 5.129 0 16.02-.988 31.328-7.633l.344-.152a9.049 9.049 0 0 1 .21-2.512c.337-1.535 1.013-2.84 1.837-3.703-.156-.59-.29-1.02-.383-1.238-1.766-.938-16.324-6.336-23.922-6.336-.762 0-1.422.054-1.969.164-6.73 1.37-16.96 13.023-17.324 14.672-.11.714-.078 2.957.004 5.382Zm-.13 16.543a5.41 5.41 0 0 0-.66-.11 2.822 2.822 0 0 1-2.945-2.304 2.67 2.67 0 0 1-.043-.43 30.14 30.14 0 0 0-2.242 1.39l-1.27.876-.937-1.227a32.58 32.58 0 0 1-2.785-4.418c-2.25 1.059-4.012 2.215-4.442 3.313-.082.207-.046.32.036.441.367.535 2.55 2.172 15.289 2.469Zm26.454-3.59a2.84 2.84 0 0 1 3.468.332c.141-.023.383-.082.735-.242 1.398-.66 6.426-6.008 10.25-10.586.137-.16.285-.305.457-.434-8.734 3.758-20.938 7.864-32.559 7.864-1.867 0-3.64-.106-5.289-.32l.258.746-1.453.554a33.91 33.91 0 0 0-.68.274c1.871.433 4.403 1.289 7.578 2.57 5.809 2.332 8.032 2.422 8.586 2.39a2.85 2.85 0 0 1 2.563-.035 88.955 88.955 0 0 0 3.383-.261c.32-.035.797-.133 1.398-.29a2.802 2.802 0 0 1 1.305-2.562ZM89.05 30.473c-.422 2.511-1.239 5.27-1.774 6.02l-.507.702a118.116 118.116 0 0 0 6.07-3.133c6.035-3.367 6.789-4.84 6.875-5.214.055-.246-.004-.32-.031-.352-.067-.082-.493-.492-2.399-.492-2.082 0-4.996.476-8.039 1.133-.055.449-.121.894-.195 1.336Zm-2.352 6.757-.87-.066a48.844 48.844 0 0 0-3.782-.133c-2.25 0-5.219.137-7.652.711.48.992.335 2.172-.372 3.02a159.513 159.513 0 0 1-2.812 3.277c2.2-.89 4.39-1.805 6.566-2.746a218.13 218.13 0 0 0 8.918-4.063Zm0 0" fill="#648c1a"/>
	<path d="M69.594 29.594c-6.117 2.656-19.52 7.773-31.973 7.773-3.156 0-6.246-.328-9.144-1.11.316.477.617.966.898 1.462 1.078 1.883 1.863 3.746 2.293 4.843 1.508.235 3.473.422 5.902.422 7.153 0 18.336-1.629 33.68-8.504.293-.925.613-1.84.957-2.746-.031 0-.062.008-.094.008-.16 0-.324-.02-.48-.055-.953-.207-1.66-.98-2.04-2.093Zm0 0" fill="#dfcaa3"/>
	<path d="M19.793 45.129a32.127 32.127 0 0 0 2.164 3.344c3.703-2.555 8.55-4.399 8.55-4.399s-.124-.363-.359-.96c-.14-.36-.289-.72-.441-1.075a32.483 32.483 0 0 0-1.39-2.898 23.597 23.597 0 0 0-1.243-2.07c-1.484-2.223-3.37-4.114-5.484-4.114-.664 0-1.356.188-2.059.613-3.879 2.336-1.875 7.684.117 11.297.047.09.098.176.145.262Zm.55-6.535c.028-.278.102-.586.29-.895.191-.316.48-.562.824-.707l.059-.027.027-.012.11-.031.077-.024.079-.02c.027-.007.117-.015.171-.023.067-.003.125-.007.192-.007h.094l.074.011c.09.012.187.032.277.051.344.106.61.266.844.43.45.344.77.715 1.055 1.097.285.376.515.766.722 1.145.367.688.672 1.402.914 2.14.176.52.313 1.051.414 1.59.04.192.059.352.075.454l.02.164s-.15-.176-.388-.489a40.282 40.282 0 0 1-.957-1.3c-.382-.536-.82-1.157-1.293-1.797-.234-.32-.48-.633-.738-.942-.258-.293-.527-.586-.789-.77a1.324 1.324 0 0 0-.32-.187c-.02-.004-.028-.004-.043-.011l-.008-.004h.008c.012 0 .023 0 .027-.004.004 0 .035-.02.012-.016l-.082.02-.047.008a.325.325 0 0 0-.148.082.731.731 0 0 0-.137.289c-.07.261-.07.625-.055.96.024.344.07.684.121.997.102.632.223 1.175.293 1.562.078.383.121.61.121.61s-.043-.04-.11-.122c-.073-.082-.179-.195-.3-.355a8.375 8.375 0 0 1-.89-1.406 6.402 6.402 0 0 1-.422-1.063c-.114-.402-.223-.847-.172-1.398Zm1.247-6.442v.805Zm0 0" fill="#67cfe3"/>
	<path d="M73.574 20.637c.164 0 .324.02.485.05 1.187.266 1.988 1.399 2.257 2.977 2.258-3.16 4.73-4.762 7.364-4.762 1.11 0 2.086.262 2.902.766.773-.934 1.535-1.883 2.277-2.844-1.046.188-3.23.473-3.23.473C93.895 14.27 93.23 6.035 93.23 6.035c0 1.422-4.277 4.828-4.277 4.828.192-1.23-.473-2.84-.473-2.84.188 1.61-4.94 5.774-4.94 5.774.378-.758.089-2.082.089-2.082-.285 1.512-2.563 2.082-2.563 2.082 1.422-1.703 4.086-10.692 2.09-11.262-1.996-.566-4.754 5.863-4.754 5.863-.093-1.511-.949-1.511-.949-1.511.383 4.73-3.418 8.515-3.418 8.515-.285-.945-1.808-1.422-1.808-1.422.492 1.055-.067 5.852-.239 7.207.504-.351 1.043-.55 1.586-.55Zm0 0" fill="#dfcaa3"/>
	<path d="M71.547 29.844v.004c.043.047.086.086.129.12.015.012.031.02.047.032.03.02.062.043.097.059a.641.641 0 0 0 .16.058.864.864 0 0 0 .266.004c.246-.039.52-.191.797-.445a42.51 42.51 0 0 1 .805-1.774c.257-.527.523-1.05.808-1.566.406-2.14-.144-3.898-.945-4.074a.525.525 0 0 0-.137-.012c-.824 0-2.023 1.426-2.492 3.555-.34 1.543-.184 2.914.219 3.68l.004.003c.07.14.148.262.238.356Zm0 0" fill="#000"/>
	<path d="M83.742 25.805h-.012l.008.008.012.003c-.004-.003-.004-.007-.008-.011Zm.035.023-.023-.008-.004-.004v.004l.004.004c.004.004.008.004.012.004Zm0 0" fill="#67cfe3"/>
	<path d="M83.68 20.512c-4.707 0-8.168 7.054-9.98 11.847a56.69 56.69 0 0 0-.884 2.524c-.14.437-.273.879-.402 1.32.227.043.45.125.66.227 2.742-.817 6.297-1.004 8.973-1.004 2.27 0 3.91.133 3.91.133.715-.996 4.852-15.047-2.277-15.047Zm1.629 5.777a5.063 5.063 0 0 1-.356 1.438 8.36 8.36 0 0 1-.523 1.12 11.785 11.785 0 0 1-1.008 1.508c-.274.34-.457.516-.457.516s.058-.242.168-.66c.101-.418.262-1.008.422-1.703.082-.344.168-.719.226-1.106.074-.375.106-.754.09-1.136-.012-.168-.047-.325-.09-.399-.008-.023-.015-.035-.027-.043h-.004a64.74 64.74 0 0 0-.012-.012l-.062-.03-.203-.055c-.086-.028-.168-.024-.254-.043-.082-.02-.16-.008-.242-.02a5.58 5.58 0 0 1-.239.027c-.316.051-.633.207-.941.426a5.32 5.32 0 0 0-.867.836c-.528.633-.965 1.332-1.328 1.942-.364.617-.657 1.148-.868 1.523l-.332.598s-.004-.063 0-.18c.004-.117.004-.29.028-.508.05-.605.152-1.203.312-1.789.195-.73.5-1.574 1.031-2.422a5.437 5.437 0 0 1 1.043-1.215 3.526 3.526 0 0 1 1.657-.797c.16-.023.324-.035.484-.039.164.008.328.008.484.036.153.03.313.05.457.101l.215.074.106.035.015.008h.008l.074.035.02.012.039.02c.031.004.418.242.516.398l.101.133.082.137a1.2 1.2 0 0 1 .117.273c.121.36.133.676.118.961Zm0 0" fill="#67cfe3"/>
	<path d="M58.527 51.941c.774 0 1.618-.207 2.516-.605 1.879-.844 6.453-5.418 11.664-11.66.277-.332.336-.793.152-1.188a1.114 1.114 0 0 0-1.011-.636 1.117 1.117 0 0 0-.864.398c-2.261 2.719-8.632 10-10.824 11.035l-.031.02a4.78 4.78 0 0 1-1.176.367l-.836.133-.61-.582a1.15 1.15 0 0 0-.773-.301c-.214 0-.422.062-.597.176a1.11 1.11 0 0 0-.344 1.535c.086.133.89 1.308 2.734 1.308Zm-10.629.246c-.18 0-.363.043-.523.126l-.332.171-.367.028c-.09.004-.18.004-.27.004-1.043 0-3.61-.325-9.066-2.52-6.016-2.418-8.403-2.781-9.285-2.781a1.66 1.66 0 0 0-.313.02 1.104 1.104 0 0 0-.902 1.293 1.13 1.13 0 0 0 1.094.917c.023 0 .046 0 .07-.004l.125-.007.121.011c.664.055 2.793.422 8.254 2.614 4.414 1.777 7.754 2.675 9.93 2.675 1.144 0 1.925-.246 2.324-.722a1.114 1.114 0 0 0-.145-1.57 1.083 1.083 0 0 0-.715-.255Zm0 0" fill="#000"/>
	<path d="M63.008 75.36s-.313 3.671-5.508 4.437c-.984.14-1.828.207-2.555.207-2.761 0-3.851-.906-4.492-1.695 0 0-4.976 1.671-5.355 4.515-.285 2.121 1.77 3.211 3.578 3.211.61 0 1.191-.125 1.648-.375 1.809-.992 4.512-3.168 8.125-3.644.328-.04.778-.055 1.313-.055 1.234 0 2.922.082 4.554.082 1.856 0 3.645-.106 4.637-.547 2.23-.992 2.23-2.695 2.09-3.547-.16-.941-2.43-2.543-8.035-2.59Zm0 0" fill="#dfcaa3"/>
	<path d="m56.957 78.383.184-.031.203-.043c2.703-.551 4.691-2.106 4.71-3.66a1.86 1.86 0 0 0-.222-.903c-.7-1.293-2.945-2.008-5.504-1.691l-.414.058c-3.09.512-5.363 2.328-5.074 4.059.02.101.043.2.078.293.531 1.55 3.129 2.402 6.039 1.918Zm0 0" fill="#231f20"/>
</svg>);
}