import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'Aarch64LineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#16358C'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m110.755 10.17-.045.019-14.187 5.8a.387.387 0 0 0-.114.626c11.775 11.03 18.504 26.245 18.529 42.465.025 16.649-7.338 32.853-19.907 43.675-10.396 8.952-22.558 13.72-36.527 14.315l-.24.01v.46l.214.029c.78.108 1.568.177 2.36.21 19.39.774 38.294-7.123 51.065-21.638C121.897 84.78 127.267 71.37 128 55.95v-4.798c-.752-15.659-6.355-29.304-16.794-40.901l-.074-.082zm.095.497h.049c10.323 11.502 15.858 24.99 16.603 40.508v4.751c-.729 15.32-6.049 28.603-15.973 39.883-12.66 14.39-31.4 22.226-50.626 21.471 13.055-1.027 24.59-5.652 34.455-14.148 12.682-10.92 20.103-27.256 20.078-44.052-.026-16.297-6.769-31.588-18.56-42.699Zm-58.84.533c-10.661-.19-21.368 2.823-30.485 9.117-10.999 7.595-18.178 18-21.516 31.18a.338.338 0 0 0 .018.211l.004.008.006.008a.08.08 0 0 1 .004.008l.001.011.006.01c.01.024.02.05.05.086a.272.272 0 0 0 .135.085c.024.007.077.01.078.01a.518.518 0 0 0 .078-.015.267.267 0 0 0 .126-.096.295.295 0 0 0 .045-.085l.002-.002C5.816 37.38 17.76 26 32.564 21.922c12.494-3.443 26.07-2.023 37.374 4.702a.672.672 0 0 0 .597.043v.002l11.609-4.73c.254-.102.297-.473.074-.632-8.934-6.523-19.549-9.916-30.208-10.107Zm-.008.498c10.478.188 20.904 3.515 29.71 9.878l-11.364 4.63v.002a.178.178 0 0 1-.157-.011c-11.429-6.8-25.142-8.23-37.76-4.753-13.34 3.676-24.34 13.224-30.34 25.525C5.818 36.142 12.267 27.315 21.81 20.726c9.028-6.233 19.632-9.217 30.193-9.028Zm43.655 5.18L84.111 21.58c-.235.092-.285.432-.086.587A52.894 52.894 0 0 1 97.24 37.605c11.43 20.113 8.387 45.764-7.685 62.467-8.57 8.907-19.076 14.235-31.548 16.002a.36.36 0 0 0-.193.097l-.021.016c-.017.013-.036.027-.063.064a.235.235 0 0 0-.04.088l-.008.076.02.087.046.072s.034.035.05.045a.25.25 0 0 0 .078.033c.04.01.062.01.082.01h.006c33.994-.752 60.022-30.385 56.185-64.275-1.544-13.622-8.045-26.04-17.967-35.41a.497.497 0 0 0-.524-.1zm.183.464c9.84 9.293 16.283 21.6 17.814 35.1 3.692 32.613-20.516 61.153-52.755 63.5 11.312-2.16 21.044-7.241 29.013-15.524 16.227-16.864 19.298-42.754 7.76-63.058-3.401-5.986-7.798-11.114-13.155-15.409Zm-12.926 4.724-11.698 4.77c-.201.074-.235.38-.055.497 6.637 4.217 11.927 9.64 15.876 16.276 3.569 5.996 5.717 12.407 6.447 19.24 1.496 13.984-3.318 28.406-13.134 38.402-7.695 7.838-16.797 12.528-27.33 14.09-.283.041-.494.078-.643.109a1.66 1.66 0 0 0-.183.046c-.026.01-.05.015-.085.035a.262.262 0 0 0-.115.127s-.022.121-.021.122l.038.119s.022.029.032.039l.027.025c.035.028.06.036.08.043.039.014.064.018.091.021.054.008.111.012.187.014.151.004.367.001.652-.008 22.327-.682 42.045-15.933 48.434-37.323 2.337-7.825 2.93-16.51 1.344-24.607-2.55-13.02-9.07-23.69-19.537-31.977h-.002a.405.405 0 0 0-.405-.058zm.135.485c10.36 8.215 16.793 18.752 19.319 31.65 1.568 8.008.982 16.615-1.333 24.365-6.076 20.342-24.364 34.943-45.383 36.68 9.536-1.929 17.933-6.393 25.052-13.645C90.631 91.492 95.49 76.927 93.98 62.794c-.738-6.903-2.91-13.383-6.514-19.438-3.919-6.585-9.166-11.981-15.702-16.206Zm-40.956 3.764c-.699.008-1.391.037-2.01.041a.352.352 0 0 0-.249.1.354.354 0 0 0-.093.246l-.074 13.21a.442.442 0 0 0 .119.32c.09.09.213.118.317.118h1.661c.077 0 .181-.024.257-.101a.363.363 0 0 0 .097-.255v-5.463c.93-.101 1.667.155 2.273.856 1.19 1.377 2.18 3.135 3.144 4.736a.46.46 0 0 0 .385.223h.002l2.084.01c.04 0 .08-.002.132-.02a.3.3 0 0 0 .17-.136.307.307 0 0 0 .023-.223.376.376 0 0 0-.059-.12l-.002-.003a93.625 93.625 0 0 1-2.916-4.568c-.289-.482-.808-1.007-1.465-1.568 2.873-1.56 2.56-5.884-.502-7.023-.942-.35-2.128-.393-3.294-.38zm.004.498c1.148-.012 2.293.043 3.115.348 2.754 1.026 3.04 4.977.303 6.257-.072.034-.182.102-.202.253-.02.151.07.245.13.296v.002c.723.597 1.217 1.13 1.483 1.574a93.913 93.913 0 0 0 2.755 4.313l-1.732-.008c-.955-1.586-1.947-3.362-3.18-4.788-.734-.847-1.724-1.203-2.86-1.033l-.003.002h-.002a.347.347 0 0 0-.206.113.35.35 0 0 0-.078.222v5.488h-1.455l.074-13.002c.592-.007 1.221-.03 1.858-.037zm14.708.658c-1.862.03-3.692.753-5.109 2.387-2.987 3.446-2.336 8.744 1.802 11.006 1.985 1.085 4.182 1.413 6.556.982a.476.476 0 0 0 .345-.305l.554-1.833v-.002c.073-.248-.18-.507-.432-.428-2.01.621-4.351.535-6.113-.646-2.61-1.746-2.708-5.03-.704-7.292 1.254-1.414 2.848-1.742 4.448-1.406 1.599.336 3.186 1.362 4.305 2.665.029.034.06.067.11.097.051.03.134.059.22.041a.316.316 0 0 0 .188-.122.428.428 0 0 0 .064-.135l.546-1.786v-.002a.483.483 0 0 0-.118-.459c-1.818-1.712-4.268-2.8-6.662-2.762zm.008.498c2.228-.035 4.559.991 6.288 2.61l-.467 1.524c-1.172-1.286-2.732-2.31-4.381-2.656-1.733-.363-3.553.018-4.922 1.563-2.172 2.45-2.047 6.129.801 8.035 1.846 1.236 4.207 1.313 6.276.737l-.476 1.574c-2.265.404-4.32.099-6.197-.928-3.871-2.116-4.46-7.013-1.661-10.243 1.326-1.53 3-2.189 4.74-2.216zm-14.862.085a.302.302 0 0 0-.298.275v.01l-.01 4.06a.3.3 0 0 0 .298.298l1.568.003c1.284.003 2.36-.921 2.362-2.099v-.438c.003-1.176-1.07-2.104-2.354-2.107l-1.564-.002zm-12.578.467-1.218.34a.328.328 0 0 0-.239.28v.001l-1.63 14.486v.002a.334.334 0 0 0 .414.35h.002l1.751-.493a.33.33 0 0 0 .237-.27v-.005l.458-4.064 5.007-1.453 2.662 3.169v.002c.083.099.22.14.344.103l1.755-.527h.002a.336.336 0 0 0 .16-.52l-.002-.002-9.358-11.293v-.002a.33.33 0 0 0-.34-.104zm12.779.032 1.365.002c1.047.002 1.858.738 1.856 1.608v.438c-.001.871-.817 1.604-1.863 1.601l-1.368-.004zm-12.748.476 9.121 11.01-1.399.42-2.661-3.17v-.001a.331.331 0 0 0-.345-.103L28.9 38.7l-.002.002a.328.328 0 0 0-.232.279l-.455 4.058-1.403.395 1.59-14.125zm37.697 1.197a.353.353 0 0 0-.202.183l-5.761 12.033a.353.353 0 0 0 .167.47l1.59.751c.173.085.39.009.47-.167l2.37-4.973 6.133 2.923-2.384 4.98v.002a.354.354 0 0 0 .168.465l1.583.751a.354.354 0 0 0 .471-.161v-.002l5.759-12.03v-.002a.354.354 0 0 0-.166-.474l-1.583-.742a.354.354 0 0 0-.471.162v.002l-2.381 4.965-6.135-2.92 2.393-4.973h.002a.354.354 0 0 0-.161-.465h-.002l-1.588-.759h-.002a.348.348 0 0 0-.266-.02h-.002zm.185.529 1.325.632-2.395 4.975v.002a.354.354 0 0 0 .167.465l6.399 3.047c.17.08.382.007.465-.162v-.002l2.381-4.969 1.327.619-5.632 11.772-1.325-.63 2.381-4.975a.353.353 0 0 0-.161-.469h-.002l-6.401-3.052a.354.354 0 0 0-.465.161v.002l-2.372 4.983-1.328-.629zm1.387.5h.002l-.002.002v-.002zm.068.194.004.002h-.004v-.002zm-39.1.314a.315.315 0 0 0-.22.27l-.526 4.87a.32.32 0 0 0 .402.336l-.002.002 3.639-1.087h.002a.32.32 0 0 0 .153-.49l-.002-.003-3.113-3.793a.314.314 0 0 0-.326-.105h-.002zm.226.76 2.654 3.234-3.103.928zm-15.665 1.998-1.107.578a.333.333 0 0 0-.18.321l.001.004 1.498 14.502c.02.224.276.365.477.265h.004l1.599-.849h.002a.334.334 0 0 0 .171-.322l-.414-4.072 4.58-2.48 3.284 2.526h.004c.102.075.24.086.352.025l1.603-.867a.339.339 0 0 0 .046-.557l-11.556-9.048-.002-.002a.335.335 0 0 0-.362-.024zm.144.489 11.272 8.823-1.29.696-3.282-2.523v-.002a.335.335 0 0 0-.361-.023l-4.77 2.583-.003.002a.333.333 0 0 0-.165.327v.002l.414 4.06-1.278.677-1.461-14.142zm-.936.365.002.006-.002.002zm1.72 2.265a.316.316 0 0 0-.16.3l.003.006.56 4.844v.004c.03.208.273.332.459.233l3.321-1.797a.321.321 0 0 0 .056-.524l-.002-.002-3.895-3.042-.003-.002a.319.319 0 0 0-.339-.02zm.387.69 3.32 2.592-2.841 1.537zM72.8 39.493h.002l-.002.004zm-52.054 2.909.006.004h-.004zM.507 51.568H.51l.002.008c0-.003-.003-.005-.004-.008zm65.973 1.936a.336.336 0 0 0-.247.128L42.011 83.2a.339.339 0 0 0-.075.22l.002 3.095a.34.34 0 0 0 .332.332h20.018v15.372a.34.34 0 0 0 .332.34h6.732a.341.341 0 0 0 .34-.34V86.846h4.833a.34.34 0 0 0 .333-.332l.002-6.105a.34.34 0 0 0-.333-.333h-4.835V53.844a.34.34 0 0 0-.34-.34h-2.866zm-37.83.039a.364.364 0 0 0-.251.058C16.985 60.978 8.586 73.341 9.136 87.344c.074 1.892.462 3.802 1.161 5.726 2.077 5.71 6.756 9.434 12.839 10.018 1.519.146 2.941.1 4.268-.144 6.936-1.27 11.919-7.613 11.876-14.555-.036-5.69-2.886-10.024-6.948-12.278-3.952-2.194-9.04-2.375-13.793-.037 2.365-6.955 8.052-13.021 14.276-16.759l.002-.002h.002a.352.352 0 0 0 .09-.508l-4.038-5.122a.362.362 0 0 0-.221-.14zm37.924.459h2.62v26.232a.34.34 0 0 0 .333.34h4.835l-.002 5.774h-4.833a.34.34 0 0 0-.333.34v15.372h-6.408V86.69a.34.34 0 0 0-.34-.34h-20.01l-.002-2.88zm-38.012.091 3.854 4.895c-6.365 3.864-12.193 10.08-14.512 17.286a.465.465 0 0 0-.027.148c0 .061.017.165.105.238.088.072.189.07.247.058a.487.487 0 0 0 .142-.05v-.003c4.724-2.475 9.809-2.29 13.72-.118 3.912 2.17 6.656 6.32 6.69 11.846.042 6.702-4.779 12.837-11.466 14.06-1.277.235-2.654.283-4.132.14-5.908-.567-10.4-4.143-12.419-9.694-.683-1.88-1.058-3.737-1.13-5.574-.54-13.75 7.69-25.924 18.928-33.232Zm34.014 12.45a.311.311 0 0 0-.339.085l-.004.004L51.41 80.064c-.156.193.001.516.25.51h10.809a.317.317 0 0 0 .317-.317V66.827a.314.314 0 0 0-.21-.284zm-.288.815v12.718H52.04ZM23.474 80.903c-.293.012-.587.038-.88.076-2.22.285-4.252 1.127-6.075 2.52l-.002.001v.002a.546.546 0 0 0-.192.296c-.614 2.54-.477 5.33.535 7.673 1.01 2.343 2.913 4.238 5.774 4.922a7.926 7.926 0 0 0 3.527.057c4.106-.87 6.313-4.27 6.142-8.269v-.002c-.104-2.405-1.215-4.286-2.848-5.525-1.633-1.24-3.78-1.845-5.98-1.751Zm.02.498c2.095-.09 4.132.489 5.66 1.648 1.527 1.159 2.553 2.889 2.651 5.153.162 3.807-1.86 6.939-5.745 7.761a7.417 7.417 0 0 1-3.31-.052c-2.708-.648-4.473-2.412-5.433-4.639-.96-2.226-1.1-4.916-.51-7.357.002-.008.005-.011.016-.02 1.759-1.343 3.697-2.148 5.832-2.422.28-.036.56-.06.839-.072z"/>
</svg>;
  }
});