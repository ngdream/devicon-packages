const React = require("react");
module.exports = function EctoOriginalIcon({size = "1em", color = "#77bf43", ...props}){
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
	<path d="M64.898.01c-4.657.085-9.5.778-14.448 2.207-4.657 1.35-13.486 5.693-20.193 12.735-6.707 7.042-14.825 19.015-17.26 34.104-2.425 15.078-2.091 30.746 5.113 46.413 7.205 15.667 17.758 23.957 27.732 28.818 9.975 4.86 23.542 4.19 30.33 2.263 6.789-1.928 10.136-4.192 13.485-6.536 3.348-2.344 3.268-4.444 2.76-5.448-.507-1.005-1.591-1.594-4.27-1.259-2.68.335-5.116.67-8.049.508-2.932-.163-11.395-2.182-18.01-8.625-6.616-6.444-12.064-17.423-13.323-26.474-1.258-9.051-1.34-24.97 4.606-33.18 5.946-8.209 12.32-8.292 16.085-8.13 3.775.173 11.81 2.599 13.992 10.138 2.181 7.539 1.511 12.502-1.421 16.52-2.933 4.008-7.205 5.185-10.888 6.86-3.684 1.674-9.547 4.525-11.14 9.974-1.593 5.45-1.179 11.983 4.443 16.844 5.621 4.86 11.983 5.53 16.671 5.022 4.688-.507 9.306-2.679 14.583-6.95 5.276-4.272 15.504-15.16 18.853-27.986 3.348-12.816 2.426-30.746-5.946-45.327l-.012-.01C101.781 10.652 85.08-.364 64.898.01Zm41.906 104.322c-.674-.015-1.29.133-1.732.441 0 0-5.531 3.349-4.273 6.616 1.258 3.267 3.35 2.933 5.359 2.852 2.009-.081 4.108-2.091 4.86-3.44.75-1.34.506-3.521-.924-5.023-.888-.945-2.167-1.422-3.29-1.446z"/>
</svg>);
}