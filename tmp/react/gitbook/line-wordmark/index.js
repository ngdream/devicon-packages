const React = require("react");
module.exports = function GitbookLineWordmarkIcon({size = "1em", color = "#346ddb", ...props}){
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
	<path d="M22.604 50.076a3.671 3.671 0 0 0-1.673.424L4.24 59.308A4.203 4.203 0 0 0 2 63.022v1.005a5.259 5.259 0 0 0 2.907 4.7l10.078 5.04c-.004.075-.018.147-.018.222a3.942 3.942 0 0 0 3.934 3.934 3.94 3.94 0 0 0 3.932-3.934c0-.104-.019-.203-.027-.306l12.206-6.443c.671.532 1.49.892 2.411.892a3.938 3.938 0 0 0 3.932-3.932c0-2.166-1.765-3.934-3.932-3.934S33.49 62.034 33.49 64.2c0 .11.018.213.027.32L21.32 70.958c-.673-.537-1.495-.9-2.42-.9-.954 0-1.8.387-2.482.956l-9.976-4.988a2.418 2.418 0 0 1-1.34-2.165c0-1.04 1.022-1.7 1.953-1.328h.002l10.163 5.083a3.667 3.667 0 0 0 3.351-.037l16.244-8.573c.901-.475.886-1.834-.025-2.29l-12.507-6.252a3.667 3.667 0 0 0-1.68-.388zm.01.987c.42-.005.842.09 1.23.283L36.35 57.6c.246.122.249.406.006.534l-16.244 8.573a2.682 2.682 0 0 1-2.451.027L7.446 61.625l-.02-.008c-1.553-.624-3.31.538-3.31 2.244 0 1.29.732 2.47 1.886 3.047l10.545 5.273.252-.256a2.931 2.931 0 0 1 2.103-.88c.803 0 1.523.316 2.055.834l.258.25 13.37-7.056-.062-.355a2.94 2.94 0 0 1 2.9-3.465A2.938 2.938 0 0 1 40.37 64.2a2.937 2.937 0 0 1-2.945 2.945 2.931 2.931 0 0 1-2.049-.827l-.256-.248-13.376 7.06.062.352c.028.165.042.334.042.507a2.938 2.938 0 0 1-2.945 2.947 2.94 2.94 0 0 1-2.914-3.39l.054-.355L5.35 67.845a4.267 4.267 0 0 1-2.361-3.818v-1.005a3.21 3.21 0 0 1 1.713-2.84l16.691-8.809a2.68 2.68 0 0 1 1.222-.31zm14.81 11.32c-.998 0-1.818.82-1.818 1.817 0 .998.82 1.816 1.818 1.816s1.815-.818 1.815-1.816c0-.997-.818-1.817-1.815-1.817zm0 .987c.464 0 .828.366.828.83a.82.82 0 0 1-.828.83.822.822 0 0 1-.831-.83c0-.464.367-.83.83-.83zm-18.522 8.804c-.998 0-1.818.818-1.818 1.816 0 .997.82 1.817 1.818 1.817.997 0 1.815-.82 1.815-1.817 0-.998-.818-1.816-1.815-1.816zm0 .987a.82.82 0 0 1 .828.829c0 .464-.364.83-.828.83a.824.824 0 0 1-.831-.83c0-.464.367-.83.83-.83z M66.335 56.979c-1.04 0-1.893.851-1.893 1.89a1.9 1.9 0 0 0 1.893 1.893 1.9 1.9 0 0 0 1.893-1.892c0-1.04-.854-1.891-1.893-1.891zm0 .987c.506 0 .906.398.906.904s-.4.906-.906.906a.899.899 0 0 1-.906-.906c0-.506.4-.904.906-.904z M64.676 60.708v11.246h3.319V60.708zm.987.987h1.345v9.273h-1.345zm4.608-4.25v3.263h-1.864v2.853h1.864v4.988c0 1.049.242 1.926.838 2.532.597.607 1.487.874 2.59.874h2.223v-2.978H74.21c-.346 0-.463-.064-.507-.11-.045-.047-.112-.188-.112-.55v-4.756h2.332v-2.853H73.59v-3.263zm.987.987h1.345v3.263h2.332v.879h-2.332v5.744c0 .476.08.91.386 1.231.306.32.748.415 1.22.415h.726v1.004H73.7c-.95 0-1.53-.216-1.887-.578-.357-.363-.555-.94-.555-1.841v-5.975h-1.864v-.88h1.864zm5.543-2.386v15.909h6.07c1.854 0 3.327-.474 4.348-1.332s1.553-2.095 1.553-3.465c0-1.163-.358-2.068-1.014-2.676-.41-.38-1.04-.495-1.61-.68.468-.243 1.02-.396 1.325-.794.52-.681.773-1.554.773-2.529 0-1.33-.535-2.487-1.513-3.261-.979-.774-2.36-1.172-4.052-1.172zm.987.987h4.894c1.535 0 2.69.366 3.44.96.75.593 1.137 1.407 1.137 2.486 0 .807-.2 1.448-.568 1.93-.369.48-.914.823-1.69.992l.02.97c.927.159 1.624.426 2.067.836.443.41.697.976.697 1.95 0 1.125-.402 2.04-1.2 2.71-.799.671-2.028 1.101-3.715 1.101h-5.082zm1.422 1.025v5.503h3.533c.925 0 1.707-.277 2.255-.782.548-.506.839-1.23.839-2.007 0-.766-.288-1.476-.837-1.966-.548-.49-1.328-.748-2.257-.748zm.987.987h2.546c.748 0 1.268.201 1.6.497.332.297.507.697.507 1.23 0 .543-.183.97-.52 1.282-.338.312-.856.52-1.587.52h-2.546zm-.987 5.395v5.481h3.68c1.041 0 1.895-.245 2.5-.757.604-.512.907-1.279.907-2.132 0-.842-.348-1.565-.97-1.996-.62-.432-1.447-.596-2.437-.596zm.987.987h2.693c.875 0 1.506.162 1.875.418.37.256.546.583.546 1.187 0 .635-.189 1.066-.56 1.38-.37.314-.975.523-1.861.523h-2.693zm15.051-5.652c-1.784 0-3.322.613-4.402 1.694-1.08 1.082-1.687 2.62-1.687 4.397 0 1.787.608 3.325 1.689 4.404 1.08 1.079 2.617 1.684 4.4 1.684 1.783 0 3.32-.605 4.4-1.684 1.08-1.08 1.69-2.617 1.69-4.404 0-1.778-.608-3.315-1.688-4.397-1.08-1.081-2.618-1.694-4.402-1.694zm0 .987c1.56 0 2.82.521 3.703 1.405.882.884 1.4 2.144 1.4 3.699 0 1.566-.517 2.825-1.398 3.706-.882.88-2.143 1.395-3.705 1.395-1.562 0-2.823-.514-3.704-1.395-.882-.88-1.398-2.14-1.398-3.706 0-1.555.517-2.815 1.4-3.7.882-.883 2.141-1.404 3.702-1.404zm0 .979c-1.103 0-2.061.444-2.712 1.191-.65.747-.998 1.778-.998 2.934 0 1.155.347 2.184.998 2.931.65.748 1.609 1.193 2.712 1.193 1.103 0 2.065-.444 2.721-1.19s1.01-1.777 1.01-2.934c0-1.158-.353-2.19-1.01-2.936s-1.618-1.189-2.721-1.189zm0 .987c.848 0 1.505.313 1.98.854s.765 1.326.765 2.284c0 .957-.29 1.741-.765 2.282-.475.54-1.132.855-1.98.855-.848 0-1.498-.314-1.968-.853-.47-.54-.755-1.325-.755-2.284 0-.96.286-1.745.755-2.284s1.12-.854 1.968-.854zm12.592-2.953c-1.784 0-3.322.613-4.402 1.694-1.08 1.082-1.689 2.62-1.689 4.397 0 1.787.608 3.325 1.689 4.404 1.08 1.079 2.62 1.684 4.402 1.684 1.783 0 3.32-.605 4.4-1.684 1.08-1.08 1.689-2.617 1.689-4.404 0-1.778-.609-3.315-1.689-4.397-1.08-1.081-2.616-1.694-4.4-1.694zm0 .987c1.56 0 2.82.521 3.703 1.405.882.884 1.399 2.144 1.399 3.699 0 1.566-.518 2.825-1.4 3.706-.881.88-2.14 1.395-3.702 1.395-1.562 0-2.823-.514-3.704-1.395s-1.4-2.14-1.4-3.706c0-1.555.517-2.815 1.4-3.7.882-.883 2.143-1.404 3.704-1.404zm0 .979c-1.103 0-2.061.444-2.712 1.191-.65.747-.998 1.778-.998 2.934 0 1.155.347 2.184.998 2.931.65.748 1.609 1.193 2.712 1.193s2.065-.444 2.721-1.19c.657-.747 1.01-1.777 1.01-2.934 0-1.158-.353-2.19-1.01-2.936-.656-.746-1.618-1.189-2.721-1.189zm0 .987c.848 0 1.505.313 1.98.854s.765 1.326.765 2.284c0 .957-.29 1.741-.766 2.282s-1.131.855-1.979.855c-.848 0-1.498-.314-1.968-.853-.47-.54-.755-1.325-.755-2.284 0-.96.285-1.745.755-2.284.47-.54 1.12-.854 1.968-.854zm6.5-6.682v15.909h3.252v-3.176l1.24-1.396 3.083 4.572h3.866l-4.653-6.981 4.87-5.198h-3.973l-4.433 4.805v-8.535zm.987.987h1.278v10.075l5.851-6.345h1.265l-3.847 4.109 4.065 6.096h-1.5l-3.496-5.192-.424.474-1.914 2.153v2.565h-1.278zm-58.421-.987c-2.293 0-4.222.8-5.557 2.21-1.334 1.412-2.062 3.41-2.062 5.744 0 2.337.745 4.333 2.06 5.742 1.316 1.41 3.196 2.213 5.37 2.213 1.957 0 3.245-.822 4.163-1.725l.197 1.725h2.72v-9.38h-7.515v2.852h4.26v.252c-.06 1.058-.476 1.819-1.125 2.348-.65.53-1.557.825-2.596.825-1.275 0-2.257-.48-2.958-1.317-.702-.836-1.116-2.055-1.116-3.534 0-1.478.423-2.696 1.133-3.533.71-.838 1.698-1.319 2.962-1.319 1.696 0 2.818.799 3.339 2.223l.117.323h3.406l-.139-.603c-.697-3.047-3.246-5.046-6.659-5.046zm0 .987c2.785 0 4.68 1.416 5.455 3.675h-1.502c-.728-1.533-2.142-2.546-4.017-2.546-1.523 0-2.827.619-3.716 1.668-.888 1.048-1.366 2.504-1.366 4.17 0 1.664.466 3.12 1.347 4.17.881 1.05 2.181 1.669 3.714 1.669 1.225 0 2.362-.346 3.221-1.047.859-.7 1.417-1.763 1.486-3.068V64.44h-4.26v-.88h5.542v7.408h-.852l-.353-3.107-.748 1.102c-.626.922-1.98 2.005-4.14 2.005-1.934 0-3.523-.695-4.649-1.9-1.126-1.206-1.794-2.94-1.794-5.068 0-2.13.654-3.861 1.792-5.065 1.139-1.204 2.773-1.902 4.84-1.902z" fillRule="evenodd"/>
</svg>);
}