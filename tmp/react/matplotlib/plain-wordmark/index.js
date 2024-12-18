const React = require("react");
module.exports = function MatplotlibPlainWordmarkIcon({size = "1em", color = "#11557C", ...props}){
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
	<path d="M22.155 70.824a.447.447 0 0 1-.104.256.73.73 0 0 1-.297.17c-.136.047-.318.08-.547.099a7.433 7.433 0 0 1-.87.043c-.36 0-.652-.014-.877-.043a2.363 2.363 0 0 1-.547-.099.6.6 0 0 1-.271-.17.454.454 0 0 1-.052-.256l.559-7.513c.033-.389.019-.78-.041-1.165a2.298 2.298 0 0 0-.303-.895 1.43 1.43 0 0 0-.582-.582c-.236-.142-.529-.213-.879-.213-.426 0-.869.166-1.329.497-.46.331-.97.814-1.528 1.449l-.626 8.422a.447.447 0 0 1-.104.256.73.73 0 0 1-.311.17c-.136.047-.318.08-.547.099a7.18 7.18 0 0 1-.855.043c-.35 0-.638-.014-.863-.043a2.363 2.363 0 0 1-.547-.099.6.6 0 0 1-.271-.17.394.394 0 0 1-.066-.256l.559-7.513c.033-.389.019-.78-.041-1.165a2.463 2.463 0 0 0-.289-.895 1.43 1.43 0 0 0-.582-.582 1.728 1.728 0 0 0-.879-.213c-.436 0-.883.166-1.344.497-.46.331-.965.814-1.514 1.449l-.627 8.422a.447.447 0 0 1-.104.256.73.73 0 0 1-.311.17c-.136.047-.318.08-.547.099a7.433 7.433 0 0 1-.87.043c-.35 0-.638-.014-.863-.043a2.363 2.363 0 0 1-.547-.099.6.6 0 0 1-.271-.17.394.394 0 0 1-.066-.256l.942-12.669a.421.421 0 0 1 .089-.241.555.555 0 0 1 .269-.185 1.94 1.94 0 0 1 .476-.099c.201-.028.448-.043.742-.043.303 0 .553.014.75.043.197.019.346.052.447.099.11.047.186.109.228.185.042.066.06.147.053.241l-.109 1.463c.757-.757 1.495-1.326 2.215-1.704.729-.379 1.472-.568 2.229-.568.521 0 .985.057 1.393.17.409.104.767.26 1.073.469.317.199.583.44.798.724.216.284.391.601.526.952.409-.407.804-.757 1.186-1.051.391-.294.768-.53 1.132-.71.348-.18.716-.318 1.096-.412a4.37 4.37 0 0 1 1.104-.142c.843 0 1.542.142 2.099.426s.992.672 1.305 1.165c.324.483.537 1.051.64 1.704.104.686.129 1.382.073 2.074l-.602 8.109zm14.327.043a.41.41 0 0 1-.165.312c-.1.076-.256.128-.466.156a5.197 5.197 0 0 1-.899.057c-.426 0-.737-.019-.933-.057-.187-.028-.321-.08-.4-.156-.07-.076-.1-.18-.09-.312l.075-1.008a6.352 6.352 0 0 1-1.887 1.307 5.365 5.365 0 0 1-2.25.469c-.672 0-1.286-.09-1.84-.27a3.856 3.856 0 0 1-1.406-.767 3.26 3.26 0 0 1-.855-1.292c-.189-.511-.258-1.108-.208-1.79.055-.739.244-1.378.569-1.917a3.922 3.922 0 0 1 1.393-1.349c.604-.36 1.339-.625 2.204-.795s1.861-.256 2.987-.256h1.236l.057-.767a3.608 3.608 0 0 0-.051-1.037 1.501 1.501 0 0 0-.342-.753c-.165-.199-.4-.346-.706-.44-.296-.095-.671-.142-1.126-.142-.597 0-1.136.066-1.62.199a9.952 9.952 0 0 0-1.268.44c-.372.161-.686.308-.942.44-.247.133-.446.199-.597.199a.426.426 0 0 1-.277-.099.747.747 0 0 1-.178-.284 2.182 2.182 0 0 1-.08-.454 3.838 3.838 0 0 1 .002-.597c.022-.294.063-.525.123-.696s.161-.322.304-.454c.143-.142.386-.294.73-.454.344-.17.744-.327 1.199-.469.483-.148.975-.262 1.474-.341a9.44 9.44 0 0 1 1.644-.142c.994 0 1.834.099 2.52.298.696.189 1.256.488 1.68.895.425.398.718.914.879 1.548.161.634.209 1.387.145 2.258l-.635 8.52zm-3.104-5.425h-1.363c-.578 0-1.073.043-1.487.128-.413.085-.754.213-1.023.383-.268.17-.473.379-.615.625a2.001 2.001 0 0 0-.232.824c-.039.53.095.947.404 1.25.318.303.776.454 1.372.454.502 0 .971-.128 1.406-.383.445-.256.904-.63 1.376-1.122l.162-2.159zm13.994 4.133c-.031.417-.083.739-.157.966-.064.218-.141.374-.234.469a1.4 1.4 0 0 1-.401.241 3.513 3.513 0 0 1-.595.17c-.241.06-.487.103-.734.128-.26.028-.522.043-.784.043-.71 0-1.319-.09-1.826-.27s-.918-.454-1.231-.824c-.313-.379-.528-.852-.647-1.42s-.149-1.24-.091-2.017l.483-6.491h-1.52c-.18 0-.309-.109-.388-.327-.078-.227-.097-.601-.059-1.122.02-.275.047-.507.08-.696.042-.189.091-.336.146-.44a.609.609 0 0 1 .188-.241.5.5 0 0 1 .261-.071h1.505l.21-2.826a.5.5 0 0 1 .09-.256.669.669 0 0 1 .298-.185c.146-.057.334-.095.562-.114.239-.028.529-.043.87-.043.35 0 .638.014.863.043.235.019.417.057.545.114a.53.53 0 0 1 .27.185.394.394 0 0 1 .066.256l-.21 2.826h2.755c.095 0 .173.024.236.071.081.059.14.144.167.241.04.104.062.251.067.44.014.189.011.421-.009.696-.039.521-.114.895-.225 1.122-.111.218-.256.327-.436.327h-2.77l-.443 5.951c-.051.691.019 1.212.21 1.562.192.341.568.511 1.127.511.189 0 .361-.014.514-.043.154-.038.29-.076.406-.114l.307-.114a.595.595 0 0 1 .231-.057c.057 0 .107.019.152.057.055.028.092.095.113.199.021.095.035.227.041.398.019.172.017.389-.003.655zm15.759-5.27c-.084 1.127-.283 2.145-.596 3.054-.304.899-.711 1.666-1.222 2.301a5.229 5.229 0 0 1-1.842 1.463c-.717.341-1.52.511-2.41.511-.369 0-.707-.038-1.014-.114a3.766 3.766 0 0 1-.872-.312 5.531 5.531 0 0 1-.811-.554 9.338 9.338 0 0 1-.824-.767l-.444 5.965a.447.447 0 0 1-.104.256.657.657 0 0 1-.312.185c-.137.057-.32.099-.549.128s-.519.043-.87.043c-.35 0-.638-.014-.863-.043a2.166 2.166 0 0 1-.544-.128.53.53 0 0 1-.27-.185.394.394 0 0 1-.066-.256l1.316-17.697a.421.421 0 0 1 .089-.241.556.556 0 0 1 .255-.185 1.94 1.94 0 0 1 .476-.099c.201-.028.448-.043.742-.043.284 0 .52.014.707.043.197.019.351.052.461.099.12.047.2.109.242.185.042.066.06.147.053.241l-.111 1.491c.397-.379.782-.71 1.153-.994a6.88 6.88 0 0 1 1.147-.724c.37-.194.763-.342 1.169-.44.405-.095.83-.142 1.275-.142.928 0 1.705.185 2.331.554.627.36 1.12.857 1.48 1.491.369.634.618 1.373.744 2.216.128.843.155 1.742.084 2.698zm-3.74.256c.04-.54.036-1.056-.013-1.548a4.072 4.072 0 0 0-.313-1.335 2.138 2.138 0 0 0-.698-.923c-.295-.237-.679-.355-1.152-.355-.237 0-.476.038-.719.114-.232.066-.477.18-.735.341-.249.161-.51.369-.785.625a9.902 9.902 0 0 0-.88.952l-.31 4.176c.455.634.896 1.127 1.325 1.477.429.341.89.511 1.382.511.464 0 .866-.118 1.205-.355.349-.237.642-.544.878-.923.237-.388.421-.824.552-1.307.139-.484.227-.967.263-1.45zm8.926-.363c0-2.156.632-4.162 1.706-5.862l.46-6.188a.394.394 0 0 0-.066-.256c-.051-.076-.146-.137-.284-.185a1.974 1.974 0 0 0-.53-.128 7.116 7.116 0 0 0-.863-.043c-.35 0-.64.014-.87.043a2.42 2.42 0 0 0-.563.128c-.136.047-.235.109-.298.185s-.097.161-.104.256l-1.389 18.676a.394.394 0 0 0 .066.256.6.6 0 0 0 .271.17c.138.047.321.081.547.099.225.028.513.043.863.043s.64-.014.87-.043c.229-.019.411-.052.547-.099a.73.73 0 0 0 .311-.17.447.447 0 0 0 .104-.256l.163-2.191a10.928 10.928 0 0 1-.941-4.435zm28.358-5.773a1.37 1.37 0 0 0-.067-.44.446.446 0 0 0-.167-.241.384.384 0 0 0-.236-.071H93.45l.21-2.826a.394.394 0 0 0-.066-.256.54.54 0 0 0-.27-.185 1.722 1.722 0 0 0-.545-.114 7.116 7.116 0 0 0-.863-.043 7.433 7.433 0 0 0-.87.043c-.192.011-.381.05-.562.114a.651.651 0 0 0-.298.185.5.5 0 0 0-.09.256l-.21 2.826H88.38c-.06 0-.111.026-.165.045a10.94 10.94 0 0 1 2.128 6.48c0 1.695-.396 3.294-1.083 4.73.008.047.008.104.018.15.119.568.334 1.042.647 1.42.313.369.724.644 1.231.824s1.116.27 1.826.27c.265 0 .527-.014.784-.043.267-.028.512-.071.734-.128.231-.047.429-.104.595-.17a1.4 1.4 0 0 0 .401-.241c.092-.095.17-.251.234-.469.074-.227.126-.549.157-.966.02-.265.022-.483.006-.653a2.306 2.306 0 0 0-.041-.398c-.021-.104-.058-.17-.113-.199a.23.23 0 0 0-.152-.057.595.595 0 0 0-.231.057l-.307.114a5.68 5.68 0 0 1-.406.114c-.17.03-.342.044-.514.043-.559 0-.934-.17-1.127-.511-.192-.35-.262-.871-.21-1.562l.443-5.951h2.77c.18 0 .325-.109.436-.327.112-.227.187-.601.225-1.122.02-.276.023-.508.009-.698zm5.313 12.399a.447.447 0 0 1-.104.256.73.73 0 0 1-.311.17c-.136.047-.318.08-.547.099a7.433 7.433 0 0 1-.87.043c-.35 0-.638-.014-.863-.043a2.363 2.363 0 0 1-.547-.099.6.6 0 0 1-.271-.17.394.394 0 0 1-.066-.256l1.389-18.676c.007-.095.042-.18.104-.256s.162-.137.298-.185c.146-.057.334-.099.563-.128.229-.028.519-.043.87-.043s.638.014.863.043c.225.028.402.071.53.128.139.047.233.109.285.185a.394.394 0 0 1 .066.256l-1.389 18.676zm7.158 0a.447.447 0 0 1-.104.256.73.73 0 0 1-.311.17c-.136.047-.318.08-.547.099a7.433 7.433 0 0 1-.87.043c-.35 0-.638-.014-.863-.043a2.363 2.363 0 0 1-.547-.099.6.6 0 0 1-.271-.17.394.394 0 0 1-.066-.256l.94-12.64a.382.382 0 0 1 .103-.241.669.669 0 0 1 .298-.185c.146-.057.334-.099.563-.128.229-.028.519-.043.87-.043.35 0 .638.014.863.043.225.028.402.071.53.128.139.047.233.109.285.185a.332.332 0 0 1 .067.241l-.94 12.64zm1.531-16.958c-.054.72-.237 1.217-.551 1.491s-.869.412-1.664.412c-.805 0-1.339-.133-1.604-.398-.255-.265-.357-.743-.305-1.434.054-.72.232-1.217.537-1.491.315-.284.874-.426 1.679-.426.795 0 1.325.137 1.588.412.265.265.371.743.32 1.434zm15.286 10.454c-.084 1.127-.282 2.14-.595 3.039s-.725 1.666-1.236 2.301-1.12 1.122-1.827 1.463c-.698.341-1.477.511-2.339.511a5.181 5.181 0 0 1-1.184-.128 3.763 3.763 0 0 1-1.037-.383 5.587 5.587 0 0 1-.943-.682 8.83 8.83 0 0 1-.92-.994l-.102 1.378a.476.476 0 0 1-.105.27.604.604 0 0 1-.268.17c-.117.047-.276.08-.476.099s-.442.028-.726.028c-.294 0-.539-.009-.736-.028a1.742 1.742 0 0 1-.461-.099.496.496 0 0 1-.229-.17.477.477 0 0 1-.051-.27l1.389-18.676a.447.447 0 0 1 .104-.256.669.669 0 0 1 .298-.185c.146-.057.334-.099.563-.128.229-.028.519-.043.87-.043.35 0 .638.014.863.043.225.028.402.071.53.128.139.047.233.109.285.185a.394.394 0 0 1 .066.256l-.521 7.002c.346-.322.688-.597 1.027-.824s.674-.412 1.007-.554c.333-.151.673-.26 1.018-.327.358-.067.722-.1 1.087-.099.937 0 1.719.189 2.344.568a4.023 4.023 0 0 1 1.479 1.505c.369.634.617 1.378.743 2.23.124.842.153 1.732.083 2.67zm-3.726.255c.04-.54.036-1.06-.012-1.562a4.072 4.072 0 0 0-.313-1.335 2.24 2.24 0 0 0-.713-.923c-.295-.237-.684-.355-1.167-.355-.237 0-.471.033-.703.099-.232.066-.477.18-.735.341-.249.161-.51.369-.785.625s-.568.573-.88.952l-.313 4.204c.454.644.895 1.136 1.325 1.477.439.331.91.497 1.412.497.464 0 .866-.118 1.205-.355.34-.237.628-.544.864-.923.246-.379.434-.81.565-1.292.129-.474.213-.96.25-1.45z"/>
	<path d="M79.3 74.538c-2.761 0-5.357-1.075-7.31-3.028s-3.028-4.549-3.028-7.31c0-2.761 1.075-5.357 3.028-7.31s4.549-3.028 7.31-3.028 5.357 1.075 7.31 3.028 3.028 4.549 3.028 7.31-1.075 5.357-3.028 7.31-4.549 3.028-7.31 3.028zm0-20.372c-2.68 0-5.2 1.044-7.095 2.939a9.963 9.963 0 0 0-2.939 7.095c0 2.68 1.044 5.2 2.939 7.095a9.969 9.969 0 0 0 7.095 2.939c2.68 0 5.2-1.044 7.095-2.939a9.969 9.969 0 0 0 2.939-7.095c0-2.68-1.044-5.2-2.939-7.095a9.963 9.963 0 0 0-7.095-2.939z"/>
	<path d="M79.3 72.263c-4.445 0-8.062-3.617-8.062-8.062 0-4.446 3.617-8.063 8.062-8.063s8.062 3.617 8.062 8.063c0 4.445-3.617 8.062-8.062 8.062zm0-16.009c-4.381 0-7.945 3.564-7.945 7.946 0 4.381 3.564 7.945 7.945 7.945s7.945-3.564 7.945-7.945-3.564-7.946-7.945-7.946z"/>
	<path d="M79.3 69.928c-3.158 0-5.728-2.569-5.728-5.728s2.569-5.728 5.728-5.728 5.728 2.57 5.728 5.728-2.57 5.728-5.728 5.728zm0-11.339c-3.094 0-5.61 2.517-5.61 5.611s2.517 5.61 5.61 5.61 5.61-2.517 5.61-5.61-2.516-5.611-5.61-5.611z"/>
	<path d="M79.3 67.594c-1.871 0-3.394-1.522-3.394-3.394s1.522-3.394 3.394-3.394 3.394 1.522 3.394 3.394-1.523 3.394-3.394 3.394zm0-6.67c-1.807 0-3.276 1.47-3.276 3.276s1.47 3.276 3.276 3.276 3.276-1.47 3.276-3.276-1.47-3.276-3.276-3.276z"/>
	<path d="M79.3 65.426c-.676 0-1.226-.55-1.226-1.226s.55-1.226 1.226-1.226 1.226.55 1.226 1.226-.55 1.226-1.226 1.226zm0-2.334a1.11 1.11 0 0 0 0 2.216 1.11 1.11 0 0 0 0-2.216z"/>
	<path d="m86.48 69.676-6.984-5.443h2.063a.068.068 0 0 0 .069-.068c0-.245-.038-.488-.114-.721a.07.07 0 0 0-.087-.044l-1.934.628 4.091-5.13a.069.069 0 0 0-.011-.097 6.834 6.834 0 0 0-1.867-1.059l-.002-.001a.067.067 0 0 0-.087.041l-2.304 6.141-1.964-8.602a.07.07 0 0 0-.083-.052 9.142 9.142 0 0 0-3.817 1.891l-.001.001a.068.068 0 0 0-.008.096l5.599 6.707-6.851-3.299a.07.07 0 0 0-.092.032 8.005 8.005 0 0 0-.663 4.895.069.069 0 0 0 .068.056l.012-.001 7.296-1.324-3.621 1.743a.07.07 0 0 0-.035.039.07.07 0 0 0 .003.053c.104.217.226.425.363.623.01.015.026.026.044.029l.012.001a.074.074 0 0 0 .041-.013l3.572-2.475-1.219 5.342a.07.07 0 0 0 .052.083 5.753 5.753 0 0 0 2.234.062.07.07 0 0 0 .056-.08l-.903-5.315 5.479 6.871a.07.07 0 0 0 .097.012 9.104 9.104 0 0 0 1.508-1.525.07.07 0 0 0-.012-.097z"/>
	<path d="M79.358 74.43h-.117V64.342l-7.133 7.133-.083-.083.042-.041 7.091-7.092H69.07v-.117h10.089l-7.134-7.134.083-.083 7.133 7.133V53.97h.117v10.089l7.134-7.134.083.083-.042.041-7.092 7.093h10.088v.117H79.442l7.133 7.133-.083.083-.041-.042-7.093-7.092z"/>
</svg>);
}