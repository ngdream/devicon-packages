import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'BowerOriginalIcon',
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
	<path d="M46.101 9.864h7.332c.12.08.229.199.36.234 2.424.639 4.973.98 7.255 1.951 7.659 3.259 12.356 9.269 15.074 16.983.135.383.374.926.679 1.018 1.661.502 3.359.886 5.046 1.311l.159-.17c4.635-9.04 12.091-14.244 21.982-16.054 2.585-.473 5.199-.382 7.849.44-.24.292-.386.483-.548.66-3.333 3.625-5.945 7.624-6.685 12.627a124.667 124.667 0 01-.826 4.807c-.826 4.396-2.32 8.477-5.692 11.619-4.313 4.021-9.632 4.987-15.263 4.909-.317-.005-.746-.415-.918-.743-.465-.889-.819-1.835-1.209-2.739-3.777.782-4.886 1.832-5.263 4.975 1.126.142 2.251.292 3.379.424 9.738 1.141 19.439 2.521 29.006 4.706 4.515 1.03 8.997 2.186 13.158 4.332 2.222 1.146 3.528 2.922 4.087 5.316.123.528.311 1.042.469 1.562v3.422c-.154.396-.346.781-.458 1.188-.479 1.738-1.369 3.213-2.778 4.345-1.741 1.399-3.803 1.953-6.044 2.147.467 2.801-1.018 4.57-3.207 5.775-1.366.752-2.897 1.429-4.42 1.618-2.185.273-4.428.07-6.615.07-1.659 3.07-4.553 3.729-7.632 3.946-3.094.219-5.933-.626-8.458-2.409-1.026 1.567-2.249 2.221-4.288 2.39-3.199.267-6.224-.357-9.1-1.758l-.383-.152.16.347c1.957 3.599 4.017 7.148 5.813 10.825.59 1.205.714 2.747.675 4.125-.073 2.54-1.413 4.173-3.574 4.805-.219 2.064-1.291 3.624-2.999 4.767-2.042 1.364-4.298 1.845-6.73 1.592-.425-.044-1.099-.162-1.252.049-1.242 1.707-3.045 2.424-4.943 3.012h-2.688c-1.657-.427-3.16-2.046-5.066-.602-.288.219-.78.202-1.183.229-2.129.141-5.616-1.191-6.581-4.109-.993-2.997-2.229-5.916-3.381-8.925l-.225.375c-2.691 5.244-8.401 7.127-13.666 4.519a23.427 23.427 0 01-7.37-5.746C5.522 88.066-.151 69.882 3.598 49.206c3.51-19.357 18.501-34.412 37.677-38.426 1.602-.335 3.217-.612 4.826-.916zm23.22 32.264c2.978.206 5.924.25 8.746-1.01 2.612-1.167 5.361-1.271 8.137-.747 1.845.349 3.673.78 5.509 1.174-.833-.911-1.76-1.687-2.733-2.396-4.688-3.413-9.795-5.791-15.667-6.202-.516-.035-1.297.01-1.536.33-1.835 2.465-2.922 5.218-2.78 8.358-.272 2.088.322 3.999 1.086 5.828l9.769-4.403-.091-.956c-1.687.39-3.287.864-4.923 1.109-1.935.291-3.896.372-5.517-1.085zm30.023-19.352l.178.189c-3.875 3.768-6.503 8.372-8.886 13.078l6.398 5.414c1.897-2.502 2.677-5.352 3.339-8.255 1.163-5.104 1.409-10.529 5.312-14.722-7.317-.312-18.214 7.333-20.596 14.37l3.764 2.086c.205-.384.371-.748.582-1.082 1.216-1.921 2.331-3.919 3.692-5.732 1.664-2.215 3.616-4.181 6.217-5.346zm-13.608 41.87c2.256.224 4.512.441 6.767.671l21.305 2.175c1.018.104 2.037.196 3.264.314-.581-1.829-1.342-3.184-2.988-3.746-1.532-.523-3.112-.907-4.672-1.352-6.173-1.232-12.317-2.641-18.527-3.648-6.053-.981-12.171-1.562-18.265-2.283-.376-.045-.904.094-1.163.349-1.156 1.138-2.239 2.349-3.35 3.533-6.162 4.474-13.242 5.656-20.63 5.749 1.862-.662 3.771-1.191 5.615-1.892 5.889-2.235 11.081-5.454 14.823-10.692.564-.79.671-1.383.167-2.286-1.735-3.113-2.602-6.507-2.549-10.062.063-4.262 1.527-8.041 4.438-11.203.503-.546.601-1.032.286-1.737-1.986-4.443-5.002-7.97-9.186-10.477-5.135-3.078-10.739-3.342-16.436-2.495-12.789 1.902-22.662 8.46-29.581 19.308-6.361 9.973-8.408 20.957-6.752 32.622.509 3.582 1.414 7.092 3.083 10.351.368.855.666 1.747 1.113 2.559 7.785 14.139 19.685 21.977 35.819 23.179 9.486.707 17.671-4.715 20.619-13.509.672-2.001 1.359-4.029.318-6.132 2.107 1.849 4.627 2.597 7.365 2.858 2.771.266 5.042-.714 6.24-2.878.323.114.67.21.994.355 2.243 1.009 4.593 1.323 7.029 1.13 3.153-.25 4.634-1.637 4.954-4.616 1.566.145 3.137.449 4.696.404 4.513-.128 6.674-2.652 5.703-6.289 1.774-.086 3.601-.033 5.38-.297 1.844-.273 3.334-1.283 4.547-3.125l-17.228-3.397-17.222-3.3.023-.141h4.001zm-2.859-23.242c.434 1.724.796 3.112 1.13 4.508.177.734.625.921 1.335.862 2.732-.229 5.367-.8 7.814-2.082.334-.175.648-.389 1.301-.784l-6.737-1.802-.887 1.631-.199-.047v-1.766l-3.757-.52z" fill="#543828"/>
	<path d="M11.385 77.845c-1.669-3.259-2.574-6.769-3.083-10.351-1.656-11.665.391-22.649 6.752-32.622 6.919-10.848 16.792-17.405 29.581-19.308 5.696-.847 11.301-.583 16.436 2.495 4.184 2.507 7.199 6.033 9.186 10.477.314.705.217 1.191-.286 1.737-2.91 3.162-4.374 6.941-4.438 11.203-.053 3.555.813 6.948 2.549 10.062.504.903.397 1.496-.167 2.286-3.742 5.238-8.935 8.457-14.823 10.692-1.844.7-3.753 1.229-5.615 1.892 7.388-.093 14.468-1.275 20.63-5.749-1.299 2.195-2.396 4.545-3.932 6.561-7.346 9.644-17.288 14.144-29.805 10.629-1.274-.357-2.367-.515-3.473.43-.47.399-1.163.576-1.784.755-6.049 1.732-11.963 1.376-17.728-1.189zm38.57-50.9c-6.052.009-10.706 4.711-10.698 10.808.008 5.856 4.912 10.729 10.771 10.7 5.923-.03 10.727-4.915 10.717-10.9-.01-5.913-4.794-10.617-10.79-10.608z" fill="#E95927" fillRule="evenodd"/>
	<path d="M11.385 77.845c5.765 2.565 11.679 2.921 17.728 1.188.621-.179 1.314-.355 1.784-.755 1.105-.944 2.198-.787 3.473-.43 12.517 3.515 22.459-.985 29.805-10.629 1.535-2.016 2.633-4.365 3.932-6.561 1.11-1.185 2.193-2.396 3.35-3.533.259-.255.787-.394 1.163-.349 6.094.722 12.212 1.302 18.265 2.283 6.21 1.008 12.354 2.416 18.527 3.647-.232.062-.461.161-.696.18-7.659.591-15.318 1.174-22.979 1.759H81.74l-.023.141c5.74 1.101 11.48 2.2 17.221 3.3-.218.703-.228 1.645-.699 2.061-.946.835-2.073 1.685-3.26 1.971-1.396.337-2.935.083-4.41.085l-.042-.081.064.064c.247 1.488.049 2.885-1.188 3.871-.845.674-1.775 1.31-2.77 1.71-2.583 1.042-5.186 1.062-7.675-.411-.648 2.701-2.735 3.404-4.944 3.8-2.257.403-4.417.021-6.292-1.515l-.229.234 1.763 4.065c1.042 2.103.354 4.131-.317 6.132-2.948 8.794-11.133 14.216-20.619 13.509-16.135-1.202-28.034-9.04-35.819-23.179-.45-.81-.748-1.702-1.116-2.557zm56.113 1.512l-.05.076.075.012-.025-.088z" fill="#FBCD00" fillRule="evenodd"/>
	<path d="M90.566 72.203c1.477-.002 3.016.252 4.411-.085 1.187-.286 2.313-1.136 3.26-1.971.472-.416.481-1.357.699-2.061l17.229 3.397c-1.213 1.842-2.703 2.852-4.547 3.125-1.779.264-3.605.211-5.38.297.971 3.637-1.19 6.161-5.703 6.289-1.56.045-3.13-.26-4.696-.404-.32 2.979-1.801 4.366-4.954 4.616-2.437.193-4.786-.121-7.029-1.13-.324-.146-.671-.241-.994-.355-1.198 2.164-3.47 3.144-6.24 2.878-2.738-.262-5.258-1.01-7.365-2.858l-1.764-4.065.229-.234c1.875 1.536 4.035 1.918 6.292 1.515 2.209-.396 4.296-1.099 4.944-3.8 2.489 1.473 5.092 1.453 7.675.411.994-.4 1.925-1.036 2.77-1.71 1.236-.986 1.435-2.383 1.188-3.871l-.025.016z" fill="#3DAF00" fillRule="evenodd"/>
	<path d="M99.344 22.776c-2.602 1.165-4.554 3.131-6.217 5.347-1.361 1.813-2.477 3.812-3.692 5.732-.211.334-.377.698-.582 1.082l-3.764-2.086c2.382-7.037 13.278-14.682 20.596-14.37-3.902 4.192-4.148 9.618-5.312 14.722-.662 2.903-1.441 5.753-3.339 8.255l-6.398-5.414c2.383-4.706 5.011-9.311 8.886-13.078l.196-.329-.374.139z" fill="#25A7F0" fillRule="evenodd"/>
	<path d="M68.996 41.635c-.142-3.141.945-5.894 2.78-8.358.239-.32 1.021-.365 1.536-.33 5.872.411 10.979 2.789 15.667 6.202.974.71 1.9 1.485 2.733 2.396-1.836-.394-3.664-.825-5.509-1.174-2.775-.524-5.524-.42-8.137.747-2.822 1.26-5.769 1.216-8.746 1.01l-.324-.493z" fill="#CBCBCA" fillRule="evenodd"/>
	<path d="M85.736 64.646c7.66-.585 15.319-1.168 22.979-1.759.235-.019.464-.118.696-.18 1.56.445 3.14.829 4.672 1.353 1.646.563 2.407 1.917 2.988 3.746-1.227-.118-2.246-.211-3.264-.314l-21.305-2.175c-2.254-.229-4.51-.447-6.766-.671z" fill="#3EAE00" fillRule="evenodd"/>
	<path d="M82.877 41.404l3.757.521v1.766l.199.047.887-1.631 6.737 1.802c-.652.396-.967.609-1.301.784-2.447 1.282-5.082 1.854-7.814 2.082-.71.059-1.158-.128-1.335-.862-.334-1.396-.696-2.785-1.13-4.509z" fill="#25A5EC" fillRule="evenodd"/>
	<path d="M68.996 41.635l.325.493c1.621 1.457 3.582 1.376 5.516 1.085 1.636-.245 3.236-.72 4.923-1.109l.091.956-9.769 4.403c-.764-1.829-1.359-3.74-1.086-5.828z" fill="#C9C8C7" fillRule="evenodd"/>
	<path d="M49.955 26.945c5.996-.01 10.78 4.694 10.79 10.607.01 5.985-4.794 10.87-10.717 10.9-5.859.028-10.764-4.844-10.771-10.7-.008-6.096 4.646-10.798 10.698-10.807zm6.45 10.728c.003-3.607-2.813-6.472-6.389-6.501-3.521-.028-6.431 2.876-6.463 6.451a6.387 6.387 0 006.408 6.458c3.614.006 6.441-2.806 6.444-6.408z" fill="#FBCB00" fillRule="evenodd"/>
	<path d="M90.589 72.187l-.064-.064.042.081.022-.017zm-23.091 7.17l.025.088-.075-.011z" fill="#3DAF00" fillRule="evenodd"/>
	<path d="M99.344 22.776l.374-.14-.196.329-.178-.189z" fill="#543828" fillRule="evenodd"/>
	<path d="M56.405 37.673c-.003 3.603-2.83 6.414-6.443 6.408a6.387 6.387 0 01-6.408-6.458c.032-3.575 2.942-6.479 6.463-6.451 3.575.029 6.391 2.893 6.388 6.501zm-6.454-.243c1.059-.417 2.145-.67 3.029-1.237 1.103-.707 1.011-2.047-.024-2.86-1.486-1.167-4.486-1.164-5.944.006-1.027.825-1.11 2.16-.013 2.872.849.551 1.897.798 2.952 1.219z" fill="#553928" fillRule="evenodd"/>
	<path d="M49.951 37.43c-1.055-.421-2.103-.668-2.952-1.22-1.098-.712-1.015-2.047.013-2.872 1.458-1.17 4.458-1.173 5.944-.006 1.035.813 1.127 2.153.024 2.86-.885.568-1.971.821-3.029 1.238z" fill="#fff" fillRule="evenodd"/>
</svg>;
  }
});