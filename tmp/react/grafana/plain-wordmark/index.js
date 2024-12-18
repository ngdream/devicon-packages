const React = require("react");
module.exports = function GrafanaPlainWordmarkIcon({size = "1em", color = "#f7a525", ...props}){
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
	<path d="M68.078 0c-7.639 4.955-9.187 11.56-9.187 11.56s0 .208-.104.311c-.413.103-.825.309-1.238.309-.516.206-1.136.311-1.652.62-.517.31-1.135.414-1.65.723a49.276 49.276 0 0 0-3.306 1.65c-1.032.62-2.063 1.24-3.095 1.962a1.325 1.325 0 0 1-.31-.205c-10.323-3.923-19.407.824-19.407.824-.826 10.942 4.13 17.859 5.059 19.098-.31.722-.413 1.341-.723 2.064-.826 2.477-1.343 5.058-1.652 7.639-.104.31-.102.825-.205 1.134-9.394 4.646-12.286 14.246-12.286 14.246 7.949 9.188 17.239 9.704 17.239 9.704 1.135 2.064 2.582 4.128 4.027 5.986.62.826 1.342 1.446 2.064 2.272-2.89 8.257.413 15.173.413 15.173 8.877.31 14.657-3.819 15.896-4.851.929.31 1.755.516 2.684.826a38.062 38.062 0 0 0 8.257 1.238h3.51c4.13 5.987 11.563 6.815 11.563 6.815 5.16-5.575 5.574-10.943 5.574-12.182v-.62c1.032-.825 2.064-1.547 3.199-2.476 2.065-1.858 3.82-4.026 5.47-6.297.207-.206.312-.414.415-.62 5.884.309 10.012-3.716 10.012-3.716-.93-6.193-4.438-9.186-5.16-9.703l-.104-.103-.104-.104-.103-.103c0-.31.103-.722.103-1.135.104-.722.104-1.342.104-2.064v-2.582c0-.207 0-.31-.104-.516l-.103-.516-.104-.515c-.103-.723-.308-1.342-.308-2.065a26.114 26.114 0 0 0-2.994-7.433 28.288 28.288 0 0 0-5.059-5.987c-1.961-1.651-4.026-3.096-6.297-4.025a23.95 23.95 0 0 0-6.916-1.961c-1.135-.206-2.374-.207-3.51-.207h-1.754c-.619.103-1.24.205-1.755.309-2.375.413-4.541 1.343-6.502 2.478-1.962 1.136-3.614 2.684-5.059 4.336a16.844 16.844 0 0 0-3.2 5.367 18.713 18.713 0 0 0-1.24 5.678V54.4c0 .31 0 .413.104.723.103.929.311 1.858.518 2.684.516 1.754 1.34 3.303 2.373 4.748 1.032 1.445 2.168 2.477 3.51 3.302 1.341.93 2.683 1.447 4.025 1.963 1.342.516 2.685.62 3.924.516h1.96c.207 0 .31-.104.413-.104.206 0 .31-.103.414-.103l.928-.309 1.548-.62c.516-.31.93-.515 1.342-.825.103-.103.31-.207.31-.31.414-.31.516-.93.206-1.446-.31-.31-.93-.412-1.342-.308 0 .722-.102.72-.309.824-.31.206-.827.31-1.136.414-.413.103-.93.308-1.342.308-.31 0-.413.104-.723.104h-1.754c-.103 0-.31 0-.31-.104-.93-.206-2.063-.411-2.992-.927-.93-.413-1.961-1.034-2.684-1.86-.929-.826-1.549-1.651-2.168-2.683-.62-1.033-.93-2.168-1.137-3.303-.103-.62-.206-1.238-.103-1.857v-.93c0-.31.104-.62.207-.93.413-2.684 1.756-5.16 3.82-7.12a10.395 10.395 0 0 1 1.65-1.345c.62-.413 1.24-.824 1.86-1.03.62-.31 1.342-.517 2.064-.724a7.715 7.715 0 0 1 2.065-.31c.31 0 .721-.102 1.031-.102h.93c.826.104 1.549.206 2.271.309 1.445.31 2.993.93 4.438 1.652 2.787 1.549 5.162 3.922 6.607 6.813.723 1.445 1.239 2.993 1.446 4.644.103.413.101.826.205 1.239v2.478c0 .413-.104.929-.104 1.342-.103.413-.102.929-.205 1.342-.103.413-.207.929-.31 1.342-.207.929-.517 1.65-.827 2.58-.62 1.651-1.444 3.304-2.58 4.646-2.064 2.89-5.058 5.264-8.258 6.813-1.651.722-3.303 1.342-5.058 1.548a11.9 11.9 0 0 1-2.684.309H71.07c-.413 0-.929 0-1.445-.103-1.961-.207-3.818-.516-5.676-1.032s-3.614-1.238-5.265-2.064c-3.304-1.755-6.296-4.336-8.67-7.227-1.136-1.445-2.169-3.096-3.098-4.748-.929-1.652-1.445-3.405-2.064-5.16a24.279 24.279 0 0 1-.93-5.473v-3.095c0-.93.104-1.858.31-2.787.104-.93.31-1.859.413-2.788.103-.929.413-1.858.722-2.787.516-1.858 1.135-3.614 1.961-5.265 1.549-3.304 3.614-6.296 5.988-8.67a15.1 15.1 0 0 1 1.961-1.653c.31-.31.93-.825 1.55-1.238.722-.413 1.445-.929 2.167-1.238.31-.207.722-.31 1.135-.516.206-.103.31-.207.619-.31.207-.104.31-.208.62-.31.825-.31 1.548-.619 2.374-.929.207-.103.413-.103.62-.207.206-.103.412-.103.619-.207l1.238-.308c.206-.104.412-.104.619-.207.206 0 .415-.104.62-.104.207 0 .414-.103.62-.103l.309-.102.31-.103c.207 0 .413-.104.62-.104.31 0 .412-.103.722-.103.207 0 .516-.104.723-.104.206 0 .309 0 .412-.104h1.033c.31 0 .413 0 .723-.103h3.611c1.548.103 3.201.311 4.647.518 2.993.516 5.884 1.445 8.464 2.787 2.581 1.238 4.955 2.786 6.813 4.437.103.103.308.207.308.31.104.104.311.206.311.31.31.206.413.414.723.62.31.207.413.413.722.62.207.31.413.413.62.722.928.93 1.652 1.858 2.374 2.684 1.446 1.858 2.58 3.716 3.407 5.47.103.104.102.206.205.31.103.102.104.206.207.31l.31.619.309.619.31.619c.31.826.619 1.55.928 2.375.413 1.239.724 2.27.93 3.2.103.309.413.618.826.618s.723-.308.723-.824c-.207-.516-.208-1.652-.31-2.994-.207-1.652-.412-3.613-.929-5.678-.516-2.064-1.446-4.438-2.582-6.812-1.238-2.374-2.683-4.956-4.748-7.33-.825-.93-1.65-1.858-2.58-2.787 1.446-5.575-1.652-10.323-1.652-10.323-5.368-.31-8.671 1.653-9.91 2.582l-.62-.31c-.928-.31-1.857-.724-2.786-1.033-.93-.31-1.96-.618-2.89-.825-.928-.31-2.064-.412-3.097-.619-.206 0-.309-.103-.515-.103C74.684 3.2 68.078 0 68.078 0zM14.246 102.193c-7.122 0-12.904 5.782-12.904 12.905C1.342 122.22 6.71 128 13.936 128c6.916 0 12.387-5.47 12.697-12.387v-1.86H12.49v3.099h10.426c-.826 4.438-4.439 7.742-8.98 7.742-5.162 0-9.188-4.129-9.188-9.496 0-5.265 4.337-9.498 9.498-9.498 2.478 0 4.852 1.239 6.916 2.994l2.065-2.58c-2.684-2.374-5.78-3.82-8.98-3.82zm52.852 1.446c-3.51 0-6.196 2.167-6.196 5.986v18.064h3.305v-14.14h5.47v-2.994h-5.47v-.93c0-1.445 1.239-2.684 2.89-2.684h2.684l1.446-3.302h-4.13zm-18.582 6.607c-5.368 0-9.703 4.852-8.67 10.426.516 2.89 2.476 5.366 5.16 6.502 3.613 1.651 7.123.517 9.394-1.65v2.165h2.993v-17.134H54.4v2.168c-1.445-1.549-3.613-2.477-5.884-2.477zm30.658 0c-5.368 0-9.702 4.852-8.67 10.426.516 2.89 2.476 5.366 5.16 6.502 3.613 1.651 7.124.517 9.395-1.65v2.165h2.89l.102-17.134h-2.992v2.168c-1.446-1.549-3.614-2.477-5.885-2.477zm20.025 0A6.765 6.765 0 0 0 94.66 112v-1.445h-2.79v17.238h3.406v-10.219a3.812 3.812 0 0 1 3.82-3.82c2.065 0 3.819 1.756 3.819 3.82v10.219h3.406v-10.115c0-4.13-3.2-7.329-7.123-7.432zm18.582 0c-5.367 0-9.704 4.852-8.672 10.426.517 2.89 2.479 5.366 5.162 6.502 3.613 1.651 7.122.517 9.393-1.65v2.165h2.89l.104-17.134h-2.994v2.168c-1.445-1.549-3.612-2.477-5.883-2.477zm-88.465.205v17.238h3.407v-10.011c0-2.065 1.754-3.82 3.818-3.82h1.963l1.342-3.407h-3.717c-1.652 0-3.096.516-4.025 1.445v-1.445h-2.787zm19.303 3.303c3.407 0 6.092 3.201 5.266 6.71-.516 1.962-2.375 3.717-4.336 4.026-3.407.516-6.297-2.064-6.297-5.367 0-2.89 2.374-5.37 5.367-5.37zm30.555 0c3.406 0 6.091 3.201 5.266 6.71-.517 1.962-2.169 3.717-4.336 4.026-3.407.516-6.297-2.064-6.297-5.367 0-2.89 2.373-5.37 5.367-5.37zm38.607 0c3.407 0 6.09 3.201 5.264 6.71-.516 1.962-2.168 3.717-4.336 4.026-3.406.516-6.297-2.064-6.297-5.367 0-2.89 2.376-5.37 5.37-5.37z"/>
</svg>);
}