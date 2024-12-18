import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'FirefoxOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<ellipse cx="63.861" cy="50.32" fill="#110070" rx="48.925" ry="48.956"/>
	<ellipse cx="63.861" cy="50.32" fill="url(#firefox-original-wordmark-a)" rx="48.001" ry="48.032"/>
	<ellipse cx="62.952" cy="20.551" fill="url(#firefox-original-wordmark-n)" opacity=".5" rx="25.416" ry="16.467"/>
	<radialGradient id="firefox-original-wordmark-a" cx="-407.967" cy="653.678" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" r="85.933">
		<stop offset="0" stopColor="#67C5D5"/>
		<stop offset=".16" stopColor="#66C2D3"/>
		<stop offset=".28" stopColor="#62B9CE"/>
		<stop offset=".385" stopColor="#5CA8C6"/>
		<stop offset=".483" stopColor="#5392BA"/>
		<stop offset=".576" stopColor="#4874AA"/>
		<stop offset=".665" stopColor="#3A5097"/>
		<stop offset=".749" stopColor="#2A2781"/>
		<stop offset=".815" stopColor="#1B006D"/>
		<stop offset="1" stopColor="#596AAD"/>
	</radialGradient>
	<radialGradient id="firefox-original-wordmark-b" cx="-407.981" cy="647.95" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" r="43.068">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".338" stopColor="#0A5F9E"/>
		<stop offset="1" stopColor="#00145A"/>
	</radialGradient>
	<radialGradient id="firefox-original-wordmark-c" cx="-407.981" cy="647.944" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" r="43.063">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".338" stopColor="#0A5F9E"/>
		<stop offset="1" stopColor="#00145A"/>
	</radialGradient>
	<radialGradient id="firefox-original-wordmark-d" cx="-407.984" cy="647.958" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" r="43.076">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".338" stopColor="#0A5F9E"/>
		<stop offset="1" stopColor="#00145A"/>
	</radialGradient>
	<radialGradient id="firefox-original-wordmark-e" cx="-407.277" cy="643.871" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" r="47.313">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".264" stopColor="#0B629B"/>
		<stop offset=".844" stopColor="#031747"/>
		<stop offset="1" stopColor="#00022F"/>
	</radialGradient>
	<radialGradient id="firefox-original-wordmark-f" cx="-407.982" cy="647.95" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" r="43.071">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".338" stopColor="#0A5F9E"/>
		<stop offset="1" stopColor="#00145A"/>
	</radialGradient>
	<radialGradient id="firefox-original-wordmark-g" cx="-407.981" cy="647.95" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" r="43.069">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".338" stopColor="#0A5F9E"/>
		<stop offset="1" stopColor="#00145A"/>
	</radialGradient>
	<path d="M56.977 75.114c-.06-.26-.707-1.017-1.202-1.186-.494-.168-.979.73-1.298-.762-1.043.6-1.494-.165-1.494-.165s-1.125.066-1.343 1.443c-.535.635-1.909 2.941-1.18.542.734-2.414-.774-.188-.915 1.023-.262.539-.705.593-.427-1.829-.967-.334-1.461-2.578-.931-2.622-.616-.859-.132-2.171.381-2.101.513.066 1.393-1.122 1.366-1.397-.027-.274.397-.078.371-1.926-.027-1.852.698-2.311.758-.762.062 1.544.984-.505.89-1.291-.096-.782.092-2.551.654-1.505-.654-2.587-.139-2.688.254-.967.984.077 1.018.601 1.018.601 1.088-.268 1.61.552 1.695 1.013 1.008-1.191 2.027.093 2.027.093s.703-.233.368.99c-.338 1.218 1.46.559 1.031-.317.884-.448 2.198.909 2.612 1.835.414.929-.709 2.245.167 2.563.88.316.495 1.847.495 1.847s1.841 1.021.563 1.899l-.435 1.042s.832.929 1.116.376c.283-.554.384.563.384.563-.106-.197.205 1.15 1.353 1.434 1.152.282 1.882 2.104.602 2.126-1.275.021-1.374-.014-1.719.73-.344.741-1.971.768-2.814-.192-.896.304-2.491-.088-2.022-.805-.773.452-1.503-.759-.899-1.3.605-.539-.34-1.236-.658-.464-.313.771-1.982 1.151-1.865-.161.035-.39.923-.617.935-.292.163.378.229-.027.162-.076z" fill="url(#firefox-original-wordmark-b)"/>
	<path d="M96.667 37.573c.254.253.756.197 1.033.12.28-.08.241-.279.481-.356.237-.079 1.152.356.913 1.306-.555.078-.756.752-.756.752s-.555.237-.836.12c-.279-.12-.279-.081-.676-.042-.398.042-1.355-.512-.319-.512s-.118-.477-.557-.477c-.438 0-.08-.435.438-.316-.359-.595-.16-1.032.279-.595z" fill="url(#firefox-original-wordmark-c)"/>
	<path d="M93.077 39.724c-.277.275.041 1.109.398 1.067.357-.039.916-.197.916-.197s.277.554 0 .713c-.278.159-1.088.088-.039.475 1.075.395 1.352.276 1.432.078.081-.197.438-.87.638-.83.16-.355-.557-.672-.159-.911.396-.238.08-1.107.08-1.107s-.559.039-.797.436c-.239.396-.556-.038-.795-.038-.041.237-.2.434-.2.434l-.158-.358c-.001-.001-1.118-.04-1.316.238z" fill="url(#firefox-original-wordmark-d)"/>
	<path d="M85.638 40.376c-.035-.102.316-.512.222.019-.216.378.872.718 1.177.297 1.023-1.402-.964-2.08-1.827-1.429-.872.658-1.351-.751-.351-.952.997-.201 1.082-2.003-.017-2.01.969-.479-.374-1.912-1.483-2.157-.18-1.541-1.806-2.521-2.661-1.962-.863.561-.938.463-2.203-.305-1.26-.764-1.866 1.59-.939 2.619.933 1.035.256 2.705.294 2.419 0 0-.351.631-.328.868-1.066.361-1.378-1.141-2.041-1.473-.482.63-1.261.965-1.261.965l.059-1.281s-3.312-1.803-4.33-1.299c-1.253.388-1.551 3.291-.412 3.717 1.141.429-1.43 1.498 1.149 4.217 2.649 2.792 3.673 2.873 4.213 2.417a8.14 8.14 0 01.647-.477.903.903 0 00.134.308c.663.997-1.541 1.783-1.849 3.211-.313 1.443-.024 4.128 1.283 4.219.249-1.431 2.696-.925 1.364.372-1.355 1.321-.404 1.555-.404 1.555s.064 2.476 2.137 1.684c-.06.142-.109.323-.138.521-.58-.117-1.996-.294-2.342.694-.437 1.247-2.288-.423-3.583.137-1.288.556-3.169 2.38-2.536 3.664 1.217-.577 2.148 2.024.449 1.492-1.707-.537-1.375.479-1.375.479s-1.776 1.401-.113 2.892c-.639.099-1.773.81-1.391 2.371 0 0-.73.026-.828 1.423-2.381.479-2.235 1.218 1.346.409-1.445.75 1.011 1.104 2.099 1.003 1.09-.099 3.952 1.312 1.802 1.327-2.153.013-1.512 1.066 1.067 1.117 2.576.053 2.305.649 2.687.625.383-.028 2.048 1.286 1.958 2.014-.093.729 1.744 1.485 2.94.65.061.757 3.205.166 3.669-1.201 3.403.521 3.325-.115 2.568-.519-1.705-.26-4.832-2.526-1.44-1.36 3.375 1.164.124-.916-.766-1.714-1.938-.377-2.037-1.992-2.037-1.992s1.071-.608.227-2.132c2.093-.389.829-1.125 1.064-1.827.235-.704 1.298-1.601 1.663-1.673.068-.095.639.019.11.233-.457.005-.132 1.291.414 1.357 1.849.224 1.308-2.189.222-2.674-1.089-.49-.11-1.817.653-.924.764.893 2.468-.109 1.829-1.24 1.016.705 1.564-1.575 1.132-2.882 1.358-1.178 1.314-3.526.264-4.053-.517-.259-.767-.425-.892-.747.624-.295 1.452-.512 1.777-.221.528.478 2-.84 1.906-2.379.619.339 1.606-2.799.768-3.897 1.918-2.682 1.401-2.925.76-2.476-.964 1.338-4.134 2.938-1.678.567 2.384-2.301-.635-.556-1.644-.182-1.189 1.488-2.449.773-2.449.773s.053-1.219-1.481-1.245c.708-1.956-.434-1.25-.833-1.783-.399-.532-.544-1.836-.421-2.169z" fill="url(#firefox-original-wordmark-e)"/>
	<path d="M60.771 20.773c-.297.776.972 2.037 1.609 1.631.64-.409 1.554-1.222 1.554-1.222s.971.779.579 1.335c-.396.554-1.968 1.177.308.925 2.335-.258 2.759-.74 2.749-1.185-.012-.444.116-2.036.52-2.146.012-.816-1.587-.74-1.033-1.557.554-.814-.746-2.149-.746-2.149s-1.013.593-1.14 1.556c-.127.963-1.075.444-1.523.666.115.481-.022.999-.022.999l-.586-.519c0-.001-2.122.962-2.269 1.666z" fill="url(#firefox-original-wordmark-f)"/>
	<path d="M64.567 61.526c-.278.276.041 1.107.397 1.068.358-.04.916-.198.916-.198s.278.554 0 .713c-.28.158-1.088.09-.041.475 1.074.396 1.354.277 1.433.08.079-.198.437-.871.636-.833.161-.354-.557-.671-.159-.908.398-.24.082-1.109.082-1.109s-.558.039-.797.435-.558-.041-.797-.041c-.041.238-.197.437-.197.437l-.159-.356s-1.115-.04-1.314.237z" fill="url(#firefox-original-wordmark-g)"/>
	<path clipPath="url(#firefox-original-wordmark-i)" d="M64.938 2.189c-.751.168.506 2.888.506 2.888s-.045 1.828.265 1.921c.308.093 2.352.604 3.419 1.934 1.073 1.33.515 2.031-.378 1.646-.894-.383-.657.791-.657.791s2.697.876.661.82c-2.041-.054 1.374 1.437 1.148 1.592-.225.158-.353 1.015-.353 1.015s-1.801.15-.275.791c5.162 2.174-.552 1.587-.552 1.587l-.729.896 1.441 1.809 1.11.793s2.335-.779 3.064-.901c.729-.121 2.567-1.498 2.567-1.498s.552.395.14-.409c-.413-.805 1.518-.446 1.999.153l3.409 1.54c.044.118.12.225.241.309.664.465-.601 1.266-.473 2.112.129.838.901 2.229 1.749 2.083-.148-.799 1.527-.896.944-.006-.582.888.063.871.063.871s.538 1.254 1.677.557c-.046.382.188 1.153 1.165 1.203 0 0-.104.418.7.713-.11 1.433.349 1.478.461-.698.203.955.818-.388.94-1.031.125-.646 1.449-2.064 1.091-.811-.355 1.243 3.904 1.698 4.376.213.476-1.496 2.174-2.278 2.225-2.504.052-.232-3.779-.587-3.355-.407.424.18 1.212-.781.919-1.637.475.096.684-1.898-.069-2.413.943-1.983.538-2.045.151-1.65-.47.994-2.409 2.493-1.094.646 1.328-1.866-.538-.234-1.186.172-.568 1.105-1.566.89-1.566.89s-.183-.751-1.25-.5c.125-1.329-.538-.69-.923-.952-.234-.159-.46-.517-.599-.824.919.373 2.154.769 1.941.086-.137-.447 1.741.53 1.807.327l2.349-.327 2.283-1.442C81.698 1.499 64.938 2.189 64.938 2.189z" fill="url(#firefox-original-wordmark-j)"/>
	<path clipPath="url(#firefox-original-wordmark-l)" d="M43.247 6.39c-8.718 3.913-15.296 11.98-15.296 11.98s.773 1.769 1.042 1.639c.273-.128-1.946 4.64-.317 4.908 1.637.27 6.346-2.95 5.472-2.654-.87.293.492-1.742.492-1.742s2.45-1.087 1.001.167c-1.438 1.246 1.911.154 1.859.409-.054.256.432.945.432.945s-1.148 1.232.335.736c5.089-1.712.67 1.467.67 1.467l.087 1.082 2.202.383 1.3-.124s1.139-2.008 1.579-2.554c.441-.546.848-2.708.848-2.708s.663-.07-.175-.386c-.838-.317.801-1.306 1.555-1.183l3.548-1.102a.669.669 0 00.387.068c.813-.095.404 1.321 1.067 1.854.657.532 2.167 1.044 2.707.388-.647-.491.555-1.659.709-.621.154 1.031.632.596.632.596s1.272-2.188 1.679-3.443c.223.311 2.299-2.729 1.67-4.179-.636-1.468.395-2.849.28-3.063-.118-.211-.739.436-.28.281.462-.159-1.31.637-1.545-1.699-.238-2.383-.583.2-.813.964.31 1.243 3.537-5.024 3.537-5.024l4.159-1.696c-.002.004-9.467-.788-20.823 4.311z" fill="url(#firefox-original-wordmark-m)"/>
	<path d="M114.625 36.888l-1.176 7.545s-1.681-13.968-3.741-19.19c-3.158-8.001-4.563-7.937-4.572-7.925 2.115 5.375 1.731 8.262 1.731 8.262s-3.747-10.214-13.656-13.463C81.477 8.271 75.499 9.66 75.542 9.714c.045.053 12.128 2.112 14.272 5.058 0 0-5.133 0-10.241 1.471-.23.066 18.793 2.376 22.683 21.387 0 0-2.085-4.352-4.665-5.091 1.696 5.16 1.261 14.951-.354 19.818-.208.626-.421-2.706-3.603-4.141 1.018 7.303-.061 18.887-5.128 22.077-.395.248 3.176-11.435.718-6.917-14.674 22.499-32.12 9.103-39.196 4.327 5.68 1.392 11.712.39 15.206-1.997 3.525-2.41 5.609-4.17 7.482-3.755 1.872.419 3.118-1.46 1.664-3.126-1.455-1.669-4.989-3.965-9.77-2.713-3.372.882-7.55 4.613-13.928.835-5.441-3.224-5.404-5.842-5.404-7.51 0-1.668 1.484-4.205 4.186-3.789 2.418.375 1.144-1.047 3.748 0 .709.285-.071-3.404-1.08-5.768 1.943-4.056 8.249-5.262 8.719-5.618.853-.644.384-.966.675-1.938.271-.904.446-3.348-6.61-2.673-3.248.311-5.313-3.897-5.99-4.918.22-1.301.571-2.489 1.048-3.577.484-.991 1.012-1.9 1.541-2.587l.438-.581c1.052-1.227 2.343-2.276 3.894-3.148.808-.457-9.044-.028-13.479 5.75-1.189.156-2.822-.188-4.646-.188-2.288 0-4.085.251-5.747.668-.267.067-.696.03-1.222-.094-1.463-1.516-5.604-5.161-5.793-10.104 0 0-6.02 4.627-5.12 17.242-.08 6.978-2.139 4.983-3.199 8.769-.493 1.794.742 3.146.742 3.199-.002.027 1.48-1.604 1.48-1.604s-9.336 16.174 2.722 36.823c10.392 17.801 27.832 25.667 45.928 24.136a56.149 56.149 0 009.536-1.446c42.16-10.193 37.576-61.103 37.576-61.103z" fill="url(#firefox-original-wordmark-o)"/>
	<path d="M48.785 24.128s1.822 4.979 5.909 4.964c7.798-.031 7.954.077 8.004 1.024.155 2.886-1.27 3.832-1.815 4.243-.547.409-7.971 4.714-8.245 5.945-.272 1.23-8.568-11.707-8.568-11.707l4.715-4.469z" fill="url(#firefox-original-wordmark-p)"/>
	<path d="M52.936 29.497s2.533 3.234.618 4.527c-2.34 1.58 3.308 1.924 5.355.776 2.046-1.148 3.302-2.835 3.374-3.087.072-.252.745-2.519-3.527-1.729-2.702.5-3.692.616-5.82-.487z" fill="url(#firefox-original-wordmark-q)"/>
	<path d="M60.883 34.359c.414-.313 1.333-.938 1.684-2.483-.256.104-.28-.19-.582-.063-5.735 5.983-5.955 1.816-9.084 2.655-2.853.781-3.494 1.852-3.614 1.936l.128.182c.822.418 1.609 1.75 2.202 2.939.579.689.967 1.028 1.022.779.273-1.231 7.698-5.536 8.244-5.945z" fill="url(#firefox-original-wordmark-r)"/>
	<path d="M18.038 39.112c-1.17 2.457-8.683 15.153 3.578 36.284 11.999 20.683 32.765 27.437 53.966 22.848 6.051-1.309 13.03-6.045 17.477-9.519-2.857-7.207-1.166-6.937-2.697-5.988-17.079 10.574-30.656.143-41.164-1.189-38.656-4.899-31.023-42.511-31.023-42.511l-.137.075z" fill="url(#firefox-original-wordmark-s)"/>
	<path d="M50.228 68.096c3.643 1.091 11.593.15 15.007-2.39 2.3-1.71 4.039-2.999 5.5-3.539-2.583-1.755-2.625.733-8.058 1.992-11.32 2.625-16.815-3.047-16.815-3.047.802 4.488 3.605 6.674 4.866 7.45a7.089 7.089 0 01-.5-.466z" fill="url(#firefox-original-wordmark-t)"/>
	<path d="M37.953 88.593S28.531 77.961 25.9 66.053c-3.879-3.663-6.631-6.762-8.459-9.002 1.056 8.474 5.375 21.63 20.512 31.542z" fill="url(#firefox-original-wordmark-u)"/>
	<path d="M30.092 78.937s-6.503-9.258-4.065-17.119c2.194-7.067-.466-2.863-2.013-1.353-1.562 1.527-2.365-4.504-2.325-5.2l-.001-.022c-.098-.021-3.096 14.451 8.404 23.694z" fill="url(#firefox-original-wordmark-v)"/>
	<path d="M20.459 70.867s-1.482-18.79 3.203-21.445c7.441-4.219.621-3.232-1.537-2.062-2.181 1.182-1.979-6.596-1.67-7.334.302-.729-7.681 7.353.004 30.841z" fill="url(#firefox-original-wordmark-w)"/>
	<path d="M53.015 15.577s-5.891 5.984-5.847 6.005c.044.021.169 7.679.362 9.851.705.834 2.905 6.256 1.222 5.053-1.72-1.229-.48-1.255-.33-.631v.031c-.115.053-4.276-9.008 4.593-20.309z" fill="#A40000"/>
	<path d="M24.992 10.966s-6.262 4.804-5.066 17.98c4.847-4.351 11.701-7.604 11.701-7.604-1.15-.725-6.426-4.946-6.635-10.376z" fill="url(#firefox-original-wordmark-x)"/>
	<path d="M40.423 25.375l9.405 11.696c-2.714-11.486-.628-18.377 6.052-22.135.988-.559-13.955.2-15.457 10.439z" fill="url(#firefox-original-wordmark-y)"/>
	<path d="M33.797 54.268c1.604-10.105 15.667-8.619 15.667-8.619-.627.466-3.037.745-3.727 2.672-2.277 6.365-.105 20.268 14.081 26.098 1.498.618-28.391-5.217-26.021-20.151z" fill="url(#firefox-original-wordmark-z)"/>
	<path d="M62.486 32.15c-.069-.012-.13-.011-.161.03-.173.231-.841 1.021-2.431 2.317-2.955 2.403-4.2 1.794-6.401 2.287-1.001.224-1.954.896-2.595 1.436.259.42.501.871.718 1.304.579.689.968 1.028 1.022.779.273-1.23 7.699-5.535 8.245-5.945.388-.291 1.211-.869 1.603-2.208z" fill="url(#firefox-original-wordmark-A)"/>
	<path d="M53.419 47.426c.082-2.135-.066-7.322-2.287-9.574-1.696-1.719-2.094-3.689-2.322-5.938-18.439 6.889-21.072 15.891-19.228 15.599 14.748-2.339 18.894-2.624 23.837-.087z" fill="url(#firefox-original-wordmark-B)"/>
	<path d="M14.106 60.046s1.281-16.649 9.615-22.742c6.543-4.786 1.461-3.048-1.064-2.85-2.665.211-4.085 1.831-3.571 1.235l.025-.045c-.087-.103-6.252 5.071-5.005 24.402z" fill="url(#firefox-original-wordmark-C)"/>
	<path d="M13.229 47.255S17.695 33.08 26.72 33.2c5.986.08 1.238-5.058-.573-5.839-1.89-.809-2.341-.777-2.782-.387-.661.586-6.599.359-10.136 20.281z" fill="url(#firefox-original-wordmark-D)"/>
	<path d="M74.11 61.131c.679-.666.206-3.219-4.06-4.767-3.87-1.405-9.911 2.169-11.704 2.874 0 0 6.843-1.282 9.408-.855 3.479.58 4.701 4.371 6.356 2.748z" fill="url(#firefox-original-wordmark-E)"/>
	<path d="M19.821 56.46s-.741-13.937 5.504-19.889c4.904-4.675.882-2.684-1.19-2.247-2.184.464-3.187 1.96-2.824 1.411l.015-.04c-.085-.075-4.633 4.881-1.505 20.765z" fill="url(#firefox-original-wordmark-F)"/>
	<path d="M15.011 52.033s2.64-13.705 10.136-17.976c5.887-3.355 1.503-2.392-.614-2.466-2.232-.077-3.564 1.134-3.082.688l.025-.035c-.063-.094-5.672 3.619-6.465 19.789z" fill="url(#firefox-original-wordmark-G)"/>
	<path d="M23.912 57.658s-1.443-8.307 1.667-12.395c2.481-3.262.302-1.667-.85-1.196-1.203.491-1.658 1.46-1.494 1.104.159-.347-5.35 3.921.677 12.487z" fill="url(#firefox-original-wordmark-H)"/>
	<path d="M25.56 49.825s-1.442-8.306 1.667-12.395c2.482-3.263.303-1.667-.849-1.197-1.202.492-1.658 1.461-1.493 1.104.158-.346-5.35 3.923.675 12.488z" fill="url(#firefox-original-wordmark-I)"/>
	<path d="M16.838 38.47s3.371-6.906 7.851-8.266c3.575-1.083 1.112-1.067.011-1.336-1.151-.279-2.004.193-1.694.017.304-.171-6.044.04-6.168 9.585z" fill="url(#firefox-original-wordmark-J)"/>
	<path d="M16.358 43.935s3.37-6.905 7.85-8.265c3.575-1.084 1.113-1.069.012-1.338-1.15-.279-2.004.193-1.693.018.302-.172-6.046.041-6.169 9.585z" fill="url(#firefox-original-wordmark-K)"/>
	<path d="M18.805 42.427s5.944-12.181 13.847-14.581c6.308-1.913 1.964-1.886.02-2.358-2.03-.492-3.536.341-2.988.032.536-.302-10.662.071-10.879 16.907z" fill="url(#firefox-original-wordmark-L)"/>
	<path d="M22.868 35.866s3.698-7.576 8.613-9.068c3.922-1.19 1.221-1.173.012-1.467-1.263-.306-2.198.212-1.858.02.332-.189-6.632.043-6.767 10.515z" fill="url(#firefox-original-wordmark-M)"/>
	<path d="M24.074 38.543s3.37-6.905 7.849-8.264c3.576-1.085 1.113-1.07.012-1.338-1.151-.279-2.005.193-1.693.019.301-.173-6.045.04-6.168 9.583z" fill="url(#firefox-original-wordmark-N)"/>
	<path d="M62.698 30.116c-.039-.72-.146-.955-3.591-1.013a8.377 8.377 0 011.825 1.153c.99.812 1.15 1.716 1.253 2.652.336-.638.582-1.517.513-2.792z" fill="url(#firefox-original-wordmark-O)"/>
	<path d="M42.463 20.498l-2.989 4.81s-11.952-1.875-22.085 7.928c-.838.809 6.627-17.335 25.074-12.738z" fill="url(#firefox-original-wordmark-P)"/>
	<path d="M31.729 29.106s3.185-5.913 7.315-7.701c-2.134.068-6.928 1.737-7.315 7.701z" fill="url(#firefox-original-wordmark-Q)"/>
	<path d="M19.473 34.878s3.37-6.906 7.85-8.265c3.575-1.085 1.113-1.069.011-1.338-1.151-.279-2.003.193-1.692.018.302-.171-6.046.04-6.169 9.585z" fill="url(#firefox-original-wordmark-R)"/>
	<path d="M26.533 30.012s3.477-5.566 7.614-7.048c-2.083-.069-6.863 1.258-7.614 7.048z" fill="url(#firefox-original-wordmark-S)"/>
	<path d="M32.495 20.504s-2.623 1.146-7.246-.777l4.122 2.073 3.124-1.296z" fill="url(#firefox-original-wordmark-T)"/>
	<path d="M31.227 21.239s-3.494 1.354-10.219-.662l5.752 2.289c.712-.658 4.467-1.627 4.467-1.627z" fill="url(#firefox-original-wordmark-U)"/>
	<path d="M33.777 20.129s-2.319.706-6.604-.951l4.122 2.071c.436-.386 2.482-1.12 2.482-1.12z" fill="url(#firefox-original-wordmark-V)"/>
	<path d="M26.545 22.795s-1.723 1.431-6.138 1.489l3.818.125 2.32-1.614z" fill="url(#firefox-original-wordmark-W)"/>
	<path d="M22.352 30.116s5.898-7.684 10.755-9.422c-2.447-.081-9.874 2.625-10.755 9.422z" fill="url(#firefox-original-wordmark-X)"/>
	<path d="M113.7 43.216s.635 14.254-19.166 34.057c-2.201 2.2-14.149 13.395-13.729 16.752.149 1.187 31.351-4.786 32.895-50.809z" fill="url(#firefox-original-wordmark-Y)"/>
	<path d="M75.31 9.688c23.851 1.833 28.47 18.982 28.471 17.931.061-16.671-22.628-17.937-28.471-17.931z" fill="url(#firefox-original-wordmark-Z)"/>
	<path d="M82.574 16.207s16.534 3.38 21.198 20.905c.618 2.321-1.992-14.237-1.187-12.666.805 1.581-6.654-7.714-20.011-8.239z" fill="url(#firefox-original-wordmark-aa)"/>
	<path d="M89.182 15.778s14.933 3.113 15.082 26.805c.104 16.77 2.589 6.295 5.055 2.527 2.126-3.257.673-7.224.622-7.213-.009.001-1.076-3.087-.356-1.778.032.058-1.003-.853-.995-.854.165-.024-.576-17.028-19.408-19.487z" fill="url(#firefox-original-wordmark-ab)"/>
	<path d="M105.998 18.989s5.363 13.971-.321 20.919c-1.855 2.268-2.063 13.884.204 12.817 2.272-1.068 1.778 6.169 1.481 6.991l-.005.026c.147.091 11.206-17.859-1.359-40.753z" fill="url(#firefox-original-wordmark-ac)"/>
	<path d="M98.541 33.697s3.376 9.886-.159 16.953l2.674 5.973c1.963-4.818 4.46-15.009-2.515-22.926z" fill="url(#firefox-original-wordmark-ad)"/>
	<path d="M104.479 32.521s2.335 15.69-6.09 29.854c.13 3.276-.445 6.242-1.234 8.685.367.482.858.813 1.506.871-.286.264-.571.511-.846.746-.506.224-1.024.459-1.527.703l-.32.726a26.727 26.727 0 001.846-1.428c1.721-.761 3.27-1.351 3.267-1.353l-1.075.393c-.511.185-.957.249-1.346.214 6.507-5.931 15.424-19.191 5.819-39.411zm-9.817 41.713c-.744.437-1.286.846-1.401 1.161-.085.23.422.097 1.299-.395.045-.263.083-.521.102-.766z" fill="url(#firefox-original-wordmark-ae)"/>
	<path d="M94.086 49.239s6.643 18.909-14.588 36.636c-1.252 1.046 8.618.598 9.482.206 2.544-1.156 5.552-8.869 5.196-7.947-.351.924 9.86-13.633-.09-28.895z" fill="url(#firefox-original-wordmark-af)"/>
	<path d="M103.377 61.232S99.371 85.756 71.665 87.73c-10.848.774-26.424-1.766-25.045 2.373.428 1.282 2.467 6.631 7.121 7.873 12.594 3.359 46.103 2.259 49.636-36.744z" fill="url(#firefox-original-wordmark-ag)"/>
	<path d="M80.272 79.792s-16.952 3.874-27.934-5.476c-10.049-8.556-5.064-1.355-3.7 2.197 1.4 3.643-6.476.86-7.66.274-1.179-.578 18.654 11.86 39.294 3.005z" fill="url(#firefox-original-wordmark-ah)"/>
	<path d="M69.348 89.032s-20.222-3.974-26.624-17.677c-5.471-11.706-4.023-3.116-4.27.794-.259 4.021-5.929-1.471-6.687-2.426l-.038-.035c-.112.075 10.429 16.601 37.619 19.344z" fill="url(#firefox-original-wordmark-ai)"/>
	<path d="M47.257 87.259s-9.658-7.48-14.013-17.738c-3.659-1.271-8.524-4.178-8.621-4.676 1.546 7.971 9.686 17.277 22.634 22.414z" fill="url(#firefox-original-wordmark-aj)"/>
	<path d="M28.687 111.18v4.908h5.389v3.121h-5.389v7.337h-4.375v-18.489H35.33l-.454 3.123h-6.189zm13.218-5.59c.471.453.708 1.027.708 1.721s-.236 1.267-.708 1.721c-.471.453-1.071.68-1.8.68-.73 0-1.326-.227-1.787-.68-.463-.454-.694-1.027-.694-1.721s.231-1.268.694-1.721c.461-.454 1.057-.68 1.787-.68.729 0 1.329.226 1.8.68zm-3.881 20.956v-14.167h4.215v14.167h-4.215zm16.621-14.379l-.667 4.082c-.533-.125-.96-.187-1.28-.187-.836 0-1.472.289-1.908.867-.437.578-.778 1.445-1.027 2.602v7.016h-4.215V112.38h3.682l.347 2.748c.32-.977.804-1.747 1.454-2.307.649-.561 1.383-.84 2.201-.84.515-.001.985.061 1.413.186zm13.605 8.536h-8.777c.142 1.192.48 2.027 1.014 2.508s1.271.721 2.214.721c.569 0 1.12-.103 1.654-.307s1.111-.521 1.734-.947l1.734 2.348c-1.654 1.316-3.494 1.974-5.522 1.974-2.294 0-4.055-.675-5.282-2.027-1.227-1.352-1.841-3.166-1.841-5.442 0-1.441.258-2.735.774-3.882.515-1.147 1.271-2.054 2.267-2.721.996-.667 2.188-1 3.575-1 2.045 0 3.646.64 4.802 1.92 1.156 1.28 1.734 3.06 1.734 5.335 0 .587-.026 1.093-.08 1.52zm-4.055-2.721c-.036-2.169-.8-3.255-2.294-3.255-.729 0-1.294.267-1.694.8-.4.534-.646 1.415-.734 2.641h4.722v-.186zm11.738-8.137c-.267.285-.399.766-.399 1.441v1.093h3.334l-.454 2.936h-2.881v11.231h-4.215v-11.231h-2.135v-2.936h2.135v-1.253c0-1.423.466-2.583 1.401-3.482.934-.898 2.271-1.347 4.014-1.347 1.405 0 2.695.303 3.869.907l-1.147 2.748a4.907 4.907 0 00-2.215-.534c-.605 0-1.04.143-1.307.427zm15.287 4.068c1.227 1.326 1.841 3.18 1.841 5.563 0 1.513-.28 2.833-.84 3.962-.561 1.129-1.361 2.005-2.401 2.628-1.041.622-2.272.933-3.695.933-2.152 0-3.846-.662-5.083-1.987-1.236-1.324-1.854-3.179-1.854-5.562 0-1.512.28-2.833.84-3.961.561-1.13 1.361-2.006 2.401-2.628 1.041-.623 2.271-.934 3.695-.934 2.169 0 3.868.662 5.096 1.986zm-7.017 2.188c-.426.721-.64 1.837-.64 3.349 0 1.547.209 2.677.627 3.388.418.711 1.063 1.067 1.935 1.067.854 0 1.494-.359 1.92-1.08.427-.721.64-1.836.64-3.349 0-1.547-.209-2.676-.626-3.388-.418-.711-1.063-1.067-1.934-1.067-.854 0-1.495.36-1.922 1.08zm18.328 10.445l-2.454-5.309-2.401 5.309h-4.589l4.563-7.443-4.108-6.724h4.722l1.974 4.536 1.895-4.536h4.482l-3.869 6.59 4.563 7.577h-4.778z" fill="#383838"/>
	<defs>
		<ellipse id="firefox-original-wordmark-h" cx="63.861" cy="50.32" rx="48.001" ry="48.032"/>
	</defs>
	<defs>
		<ellipse id="firefox-original-wordmark-k" cx="63.861" cy="50.32" rx="48.001" ry="48.032"/>
	</defs>
	<clipPath id="firefox-original-wordmark-i">
		<ellipse cx="63.861" cy="50.32" rx="48.001" ry="48.032"/>
	</clipPath>
	<clipPath id="firefox-original-wordmark-l">
		<ellipse cx="63.861" cy="50.32" rx="48.001" ry="48.032"/>
	</clipPath>
	<linearGradient id="firefox-original-wordmark-j" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-398.235" x2="-384.333" y1="645.955" y2="644.77">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".338" stopColor="#0A5F9E"/>
		<stop offset="1" stopColor="#00145A"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-m" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-429.469" x2="-437.152" y1="643.85" y2="632.566">
		<stop offset="0" stopColor="#0F80BC"/>
		<stop offset=".338" stopColor="#0A5F9E"/>
		<stop offset="1" stopColor="#00145A"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-n" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-409.548" x2="-409.548" y1="631.152" y2="649.829">
		<stop offset=".014" stopOpacity="0"/>
		<stop offset=".65" stopColor="#C4E0E3" stopOpacity=".2"/>
		<stop offset=".822" stopColor="#C4E0E3"/>
		<stop offset=".85" stopColor="#CDE5E8"/>
		<stop offset=".944" stopColor="#E8F4F7"/>
		<stop offset="1" stopColor="#F2FAFC"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-o" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-408.041" x2="-396.507" y1="613.214" y2="619.988">
		<stop offset="0" stopColor="#DF731B"/>
		<stop offset=".545" stopColor="#DF731B"/>
		<stop offset=".701" stopColor="#EC8811"/>
		<stop offset=".859" stopColor="#F4950B"/>
		<stop offset="1" stopColor="#F79A09"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-p" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-426.709" x2="-417.756" y1="629.16" y2="628.393">
		<stop offset=".011" stopColor="#941403"/>
		<stop offset=".897" stopColor="#E85C0A"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-q" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-441.047" x2="-408.731" y1="631.643" y2="627.603">
		<stop offset=".011" stopColor="#941403"/>
		<stop offset=".136" stopColor="#A32104"/>
		<stop offset=".498" stopColor="#C84107"/>
		<stop offset=".789" stopColor="#DF5509"/>
		<stop offset=".972" stopColor="#E85C0A"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-r" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-421.025" x2="-418.449" y1="623.094" y2="624.227">
		<stop offset="0" stopColor="#F2C8A9"/>
		<stop offset="1" stopColor="#ffc"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-s" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-429.241" x2="-385.895" y1="591.544" y2="589.759">
		<stop offset="0" stopColor="#B30000"/>
		<stop offset="1" stopColor="#DF731B"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-t" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-418.926" x2="-396.325" y1="598.271" y2="590.202">
		<stop offset="0" stopColor="#941403"/>
		<stop offset="1" stopColor="#DF731B"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-u" gradientTransform="scale(1 -1) rotate(-2.8 -12633.86 -9647.041)" gradientUnits="userSpaceOnUse" x1="-467.668" x2="-445.635" y1="536.09" y2="536.09">
		<stop offset=".056" stopColor="#B30000"/>
		<stop offset="1" stopColor="#DE5C01"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-v" gradientTransform="matrix(.993 .119 .119 -.993 220.04 770.077)" gradientUnits="userSpaceOnUse" x1="-277.505" x2="-265.517" y1="677.591" y2="640.451">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-w" gradientTransform="matrix(.999 .045 .045 -.999 457.68 633.724)" gradientUnits="userSpaceOnUse" x1="-461.347" x2="-461.347" y1="562.033" y2="520.52">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-x" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-446.078" x2="-450.582" y1="634.203" y2="645.745">
		<stop offset=".011" stopColor="#941403"/>
		<stop offset=".472" stopColor="#E85C0A"/>
		<stop offset="1" stopColor="#F9BD5F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-y" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-426.819" x2="-416.027" y1="631.556" y2="645.741">
		<stop offset=".197" stopColor="#DE7210"/>
		<stop offset=".843" stopColor="#F9BD5F"/>
		<stop offset="1" stopColor="#FFFCCF"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-z" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-432.525" x2="-421.585" y1="612.191" y2="590.311">
		<stop offset=".017" stopColor="#941403"/>
		<stop offset=".5" stopColor="#E35100"/>
		<stop offset="1" stopColor="#DF731B"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-A" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-416" x2="-413.269" y1="625.61" y2="623.135">
		<stop offset="0" stopColor="#EEA272"/>
		<stop offset=".186" stopColor="#EFA777"/>
		<stop offset=".406" stopColor="#F2B585"/>
		<stop offset=".643" stopColor="#F6CD9C"/>
		<stop offset=".89" stopColor="#FCEEBB"/>
		<stop offset="1" stopColor="#ffc"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-B" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-431.935" x2="-419.384" y1="619.762" y2="606.955">
		<stop offset=".197" stopColor="#DF731B"/>
		<stop offset=".843" stopColor="#F9BD5F"/>
		<stop offset="1" stopColor="#FFFCCF"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-C" gradientTransform="scale(1 -1) rotate(-14.72 -5590.445 1996.955)" gradientUnits="userSpaceOnUse" x1="354.63" x2="354.63" y1="1457.727" y2="1410.678">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-D" gradientTransform="matrix(.99 -.08 -.095 -1.173 514.173 774.676)" gradientUnits="userSpaceOnUse" x1="-431.743" x2="-447.649" y1="663.266" y2="637.36">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C06E"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-E" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-394.478" x2="-411.376" y1="603.697" y2="600.47">
		<stop offset=".005" stopColor="#FFFAEE"/>
		<stop offset=".276" stopColor="#F5F89B"/>
		<stop offset=".31" stopColor="#F3ED91"/>
		<stop offset=".467" stopColor="#ECC267"/>
		<stop offset=".618" stopColor="#E6A046"/>
		<stop offset=".761" stopColor="#E2872E"/>
		<stop offset=".892" stopColor="#E07820"/>
		<stop offset="1" stopColor="#DF731B"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-F" gradientTransform="matrix(.992 .126 .126 -.992 901.777 251.637)" gradientUnits="userSpaceOnUse" x1="-898.399" x2="-898.399" y1="104.881" y2="65.558">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C06E"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-G" gradientTransform="scale(1 -1) rotate(-21.23 -112.77 -2552.822)" gradientUnits="userSpaceOnUse" x1="-897.832" x2="-897.832" y1="-152.461" y2="-191.78">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C06E"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-H" gradientTransform="scale(1 -1) rotate(35.88 1858.323 760.77)" gradientUnits="userSpaceOnUse" x1="-102.703" x2="-113.653" y1="1179.761" y2="1163.336">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C072"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-I" gradientTransform="scale(1 -1) rotate(35.88 1858.323 760.77)" gradientUnits="userSpaceOnUse" x1="-96.778" x2="-107.727" y1="1185.141" y2="1168.718">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C072"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-J" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-451.053" x2="-455.844" y1="628.417" y2="619.475">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#EED8A5"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-K" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-451.535" x2="-456.324" y1="622.951" y2="614.011">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#EED8A5"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-L" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-446.107" x2="-450.737" y1="626.746" y2="615.251">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C072"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-M" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-444.346" x2="-455.296" y1="632.342" y2="615.918">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C072"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-N" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-443.609" x2="-453.589" y1="629.025" y2="614.056">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F2C072"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-O" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-411.498" x2="-410.707" y1="631.357" y2="629.948">
		<stop offset="0" stopColor="#8B8B89"/>
		<stop offset="1" stopColor="#120500"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-P" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-442.606" x2="-442.606" y1="636.144" y2="640.47">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-Q" gradientTransform="matrix(.999 .04 .04 -.999 457.406 636.091)" gradientUnits="userSpaceOnUse" x1="-451.273" x2="-442.219" y1="588.951" y2="599.533">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-R" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-448.419" x2="-453.209" y1="632.009" y2="623.067">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#EED8A5"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-S" gradientTransform="scale(1 -1) rotate(-5.97 -5497.41 -4480.916)" gradientUnits="userSpaceOnUse" x1="-468" x2="-459.156" y1="519.769" y2="530.105">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-T" gradientTransform="matrix(.996 .09 .09 -.996 439.675 604.212)" gradientUnits="userSpaceOnUse" x1="-468.3" x2="-457.672" y1="544.95" y2="543.495">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-U" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-455.448" x2="-440.446" y1="640.582" y2="638.528">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-V" gradientTransform="matrix(.996 .09 .09 -.996 439.675 604.212)" gradientUnits="userSpaceOnUse" x1="-466.231" x2="-456.465" y1="545.484" y2="544.147">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-W" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-448.672" x2="-457.478" y1="637.424" y2="638.328">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-X" gradientTransform="scale(1 -1) rotate(-5.97 -5497.41 -4480.916)" gradientUnits="userSpaceOnUse" x1="-472.449" x2="-460.268" y1="518.702" y2="532.938">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-Y" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-388.375" x2="-364.518" y1="562.863" y2="599.659">
		<stop offset="0" stopColor="#DE5C01"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-Z" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-374.502" x2="-390.123" y1="640.89" y2="647.75">
		<stop offset="0" stopColor="#F79A09"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-aa" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-364.008" x2="-385.878" y1="625.231" y2="645.533">
		<stop offset="0" stopColor="#DE5C01"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-ab" gradientTransform="matrix(1 -.028 -.028 -1 589.242 572.679)" gradientUnits="userSpaceOnUse" x1="-471.877" x2="-481.034" y1="551.26" y2="560.73">
		<stop offset="0" stopColor="#F79A09"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-ac" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-367.675" x2="-362.522" y1="613.599" y2="631.327">
		<stop offset="0" stopColor="#F79A09"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-ad" gradientTransform="scale(1 -1) rotate(2.35 13262.46 15386.547)" gradientUnits="userSpaceOnUse" x1="-520.821" x2="-521.009" y1="501.143" y2="514.627">
		<stop offset="0" stopColor="#F79A09"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-ae" gradientTransform="scale(1 -1) rotate(4.07 6466.584 10445.929)" gradientUnits="userSpaceOnUse" x1="-631.671" x2="-622.382" y1="415.278" y2="433.574">
		<stop offset="0" stopColor="#F79A09"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-af" gradientTransform="scale(1 -1) rotate(4.07 10302.395 6569.262)" gradientUnits="userSpaceOnUse" x1="-357.475" x2="-356.226" y1="662.826" y2="683.091">
		<stop offset="0" stopColor="#DE5C01"/>
		<stop offset=".736" stopColor="#FEFD00"/>
		<stop offset=".778" stopColor="#FEFE26"/>
		<stop offset=".837" stopColor="#FFFE54"/>
		<stop offset=".889" stopColor="#FFFF76"/>
		<stop offset=".932" stopColor="#FFFF8B"/>
		<stop offset=".961" stopColor="#FFFF92"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-ag" gradientTransform="matrix(1 0 0 -1 472.5 661)" gradientUnits="userSpaceOnUse" x1="-413.079" x2="-373.909" y1="565.756" y2="589.168">
		<stop offset="0" stopColor="#B9120D"/>
		<stop offset=".078" stopColor="#BB180D"/>
		<stop offset=".182" stopColor="#C0290C"/>
		<stop offset=".301" stopColor="#C8450A"/>
		<stop offset=".431" stopColor="#D36C08"/>
		<stop offset=".571" stopColor="#E29E05"/>
		<stop offset=".715" stopColor="#F4DA02"/>
		<stop offset=".792" stopColor="#FEFD00"/>
		<stop offset=".814" stopColor="#FEFD07"/>
		<stop offset=".846" stopColor="#FEFD1B"/>
		<stop offset=".884" stopColor="#FEFE3C"/>
		<stop offset=".927" stopColor="#FFFE69"/>
		<stop offset=".974" stopColor="#FFFFA3"/>
		<stop offset="1" stopColor="#FFFFC7"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-ah" gradientTransform="matrix(.995 .099 .099 -.995 444.604 595.129)" gradientUnits="userSpaceOnUse" x1="-437.16" x2="-397.033" y1="476.669" y2="471.232">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-ai" gradientTransform="matrix(.99 .145 .145 -.99 432.678 566.234)" gradientUnits="userSpaceOnUse" x1="-455.591" x2="-408.998" y1="430.233" y2="415.59">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
	<linearGradient id="firefox-original-wordmark-aj" gradientTransform="scale(1 -1) rotate(10.37 1165.464 5770.996)" gradientUnits="userSpaceOnUse" x1="-1003.024" x2="-980.869" y1="229.792" y2="187.376">
		<stop offset=".056" stopColor="#DE7210"/>
		<stop offset="1" stopColor="#F6C08F"/>
	</linearGradient>
</svg>;
  }
});