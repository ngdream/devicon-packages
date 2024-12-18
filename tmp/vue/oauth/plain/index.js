import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'OauthPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64.6 0a77.632 77.632 0 00-5.19.188C52.012.698 43.6 2.903 38.6 5.117c-4.012 1.773-8.565 4.44-12.321 7.115-9.334 6.664-16.905 16.301-21.354 27.38-.923 2.304-2.093 4.775-2.738 7.118-2.743 9.996-2.515 21.649-.545 30.664 4.914 22.532 18.131 35.526 35.32 44.63 15.427 8.172 38.988 7.939 55.851-.55 10.083-5.077 18.136-12.813 24.365-22.176 6.057-9.112 10.704-21.527 10.677-35.865-.023-13.2-5.3-26.044-10.677-34.497C107.124 13.12 90.013-.033 64.6 0zm.31 3.072c18.993-.022 33.828 8.963 43.235 19.292 2.656 2.92 5.31 5.816 7.116 8.762 3.346 5.45 5.486 11.89 7.121 18.07 6.115 23.117-3.076 45.042-14.514 56.946-8.545 8.897-19.037 14.915-32.854 17.521-15.547 2.937-30.462-.889-41.069-6.844C23.05 110.7 15.331 102.006 9.581 90.81 4.037 80.014 1.457 62.841 5.474 48.645c3.61-12.754 9.772-23.344 19.439-30.935 6.703-5.262 14.41-10.146 24.914-12.867 3.772-.979 7.258-1.39 11.227-1.643a59.322 59.322 0 013.855-.128zm-1.465 2.686a50.183 50.183 0 00-3.763.18C43.397 7.327 31.96 14.632 23.268 23.187 17.18 29.177 12.604 36.515 9.58 45.09c-1.964 5.565-3.002 11.577-3.122 17.657-.006.202 0 .405 0 .607l-.002.001c-.017 1.873.056 3.75.214 5.622l.004.06c.473 5.577 1.705 11.107 3.727 16.299 4.256 10.918 11.223 19.732 21.082 26.554 7.279 5.042 17.055 9.178 28.155 10.115.22.016.44.043.659.057l.002.002a55.556 55.556 0 008.004 0l.002-.002c.214-.014.427-.023.642-.04l-.001.003.045-.002c18.195-1.539 31.51-10.875 40.247-21.632 2.234-2.751 4.456-5.86 5.75-9.582 1.266-2.678 1.885-4.501 2.461-5.473 2.235-5.009 3.494-10.282 3.99-16.044l.03-.396.002-.002c.03-.361.065-.718.089-1.084a66.426 66.426 0 00.101-4.939l-.007-.005c0-.207-.002-.409-.007-.616-.386-16.868-7.398-30.22-16.791-39.613-5.033-5.034-11.223-9.57-18.616-12.322-6.246-2.32-13.17-4.32-21.046-4.518l.004.004c-.206-.004-.41-.013-.62-.013l-.006-.007c-.379-.005-.745-.028-1.128-.024zm-3.574 3.925l2.59.01-.023 5.111c-.002 1.327.664 1.96 1.688 1.965 1.03.005 1.697-.598 1.706-1.886l.018-5.178 2.588.009-.017 5.098c-.013 2.973-1.715 4.269-4.33 4.256-2.615-.009-4.25-1.346-4.242-4.22zm15.93 1.32l7.72 2.354-.651 2.137-2.642-.804-2.031 6.66-2.44-.744 2.031-6.664-2.638-.804zM49.08 11.8l6.559 7.627-2.603.835-1.143-1.361-3.376 1.084-.123 1.767-2.554.818.897-10.017 2.343-.752zm-.268 3.258l-.19 2.808 1.965-.627zm41.6 1.28l2.124 1.41-1.908 2.866 2.725 1.816 1.908-2.867 2.118 1.412-5.094 7.657-2.123-1.41 1.939-2.91-2.726-1.816-1.939 2.914-2.117-1.415zm-54.76 2.381a4.659 4.659 0 014.047 1.935l.018.022c1.556 2.132 1.1 5.116-1.195 6.792-2.291 1.67-5.236 1.204-6.792-.933l-.017-.023c-1.556-2.131-1.1-5.114 1.19-6.79.862-.623 1.812-.954 2.748-1.001zm-.053 2.422a2.31 2.31 0 00-1.359.454c-1.125.821-1.213 2.285-.43 3.357l.013.023c.782 1.072 2.241 1.44 3.367.619 1.134-.83 1.222-2.295.439-3.367l-.013-.017c-.493-.673-1.244-1.069-2.017-1.069zm28.013 2.317c.202 0 .405 0 .607.005l.084.083.083-.083c.202 0 .403-.005.602 0l-.383.382 4.356 4.36 3.72-3.718c.163.039.33.075.492.114l-3.908 3.907 4.356 4.356 4.36-4.354-3.587-3.588c.28.075.56.15.836.233l3.05 3.05 1.447-1.445.422.184-1.564 1.564 4.36 4.356 2.98-2.98c.127.08.24.158.365.237l-3.047 3.047 4.361 4.356 3.248-3.248.299.303-3.249 3.25 4.36 4.354 3.236-3.234.304.304-3.235 3.234 4.356 4.36 2.312-2.316.21.395-2.219 2.22 4.355 4.361.612-.615c.057.15.114.294.167.443l-.475.47.936.937c.088.285.173.571.251.857l-1.49-1.49-4.356 4.36 4.355 4.357 2.42-2.417.07.53-2.186 2.19 2.462 2.462c0 .193-.022.382-.027.58l-2.738-2.743-4.356 4.36 4.355 4.356 2.515-2.514c-.026.233-.062.466-.092.695l-2.119 2.123 1.486 1.486c-.039.168-.07.33-.11.497l-1.679-1.68-4.356 4.356 3.842 3.843c-.06.14-.12.284-.18.422l-3.965-3.961-4.36 4.356 4.36 4.36 3.15-3.156c-.192.382-.368.774-.58 1.148l-.03.07-2.237 2.238.796.799c-.075.128-.14.26-.216.387l-.883-.884-4.36 4.356 1.44 1.446c-.092.106-.184.212-.28.318l-1.46-1.46-4.36 4.36 1.357 1.359c-.109.088-.216.18-.33.272l-1.327-1.331-4.36 4.36.51.51c-.127.07-.263.136-.391.21l-.422-.421-1.35 1.35c-.378.188-.76.368-1.147.545l2.198-2.195-4.36-4.36-4.356 4.36 3.432 3.434c-.148.052-.298.1-.448.154l-3.288-3.288-4.356 4.36.628.63c-.176.025-.351.051-.527.074l-.405-.4-.505.5c-.224.027-.448.057-.676.08l.877-.884-4.354-4.36-4.361 4.36.953.95c-.22-.017-.443-.034-.664-.056l-.588-.594-.47.47c-.176-.023-.344-.059-.518-.084l.685-.686-4.356-4.36-3.424 3.424c-.15-.048-.3-.106-.45-.154l3.57-3.569-4.356-4.361-4.36 4.361 2.645 2.646c-.36-.15-.711-.307-1.063-.461l-1.886-1.886-.65.655c-.132-.071-.264-.137-.396-.206l.748-.749-4.36-4.359-1.693 1.696c-.115-.088-.24-.167-.353-.255l1.746-1.74-4.36-4.36-1.957 1.955c-.096-.101-.198-.203-.294-.307l1.95-1.953-4.36-4.355-1.44 1.44c-.084-.117-.16-.24-.239-.364l1.381-1.38-4.36-4.355-.023.022c-.227-.532-.298-.726-.452-1.1l.475.471 4.36-4.357-4.36-4.36-2.057 2.06c-.032-.175-.068-.337-.093-.513l1.846-1.846-2.307-2.312c-.018-.212-.014-.422-.027-.628l2.638 2.636 4.36-4.355-4.36-4.361-2.74 2.739c0-.207.014-.409.014-.616l2.422-2.426-2.163-2.163c.018-.184.026-.373.048-.553l2.419 2.417 4.36-4.36-4.36-4.357-1.605 1.605c.067-.272.132-.546.207-.81l1.094-1.099-.558-.562c.053-.144.105-.29.163-.44l.698.704 4.361-4.36-2.343-2.343c.071-.132.136-.265.206-.396l2.435 2.435 4.36-4.355-3.318-3.32c.088-.11.185-.22.273-.33l3.345 3.346 4.36-4.356-3.493-3.495c.104-.097.202-.203.307-.295l3.49 3.486 4.355-4.356-2.93-2.932c.123-.079.249-.153.373-.229l2.861 2.859 4.356-4.358-1.432-1.432c.146-.062.28-.124.426-.18l1.31 1.31 2.694-2.7.897-.289-3.292 3.291 4.36 4.356 4.357-4.354-3.781-3.786.47-.132 3.614 3.613 4.356-4.36zm.69.69l-4.355 4.36 4.354 4.356 4.362-4.354zm-13.978 4.659l-4.36 4.361 4.36 4.356 4.356-4.356-4.356-4.36zm9.319 0l-4.356 4.361 4.356 4.356 4.356-4.356-4.355-4.36zm9.318 0l-4.355 4.361 4.355 4.356 4.36-4.356-4.36-4.36zm9.324 0l-4.36 4.361 4.36 4.356 4.355-4.356-4.355-4.36zm-32.62 4.66l-4.361 4.361 4.36 4.355 4.356-4.355-4.355-4.36zm9.319 0l-4.362 4.361 4.362 4.355.058-.059c-.175.336-.33.687-.45 1.058l-3.97 3.965 2.064 2.063-.144.457-2.218-2.217-4.36 4.355 4.36 4.36.244-.242-.279.88-4.325 4.327 2.25 2.246-.145.461-2.407-2.408-4.36 4.36 4.36 4.355.608-.607-.28.884-.026.027.013.014-.143.454-.169-.169-4.361 4.36 2.437 2.437-.145.458-2.595-2.591-4.356 4.356L41 84.128l1.03-1.028a6.932 6.932 0 00-.147.747l-.58.58.533.532c.007.213.005.426.03.635L41 84.73l-4.355 4.356L41 93.446l3.381-3.377c.113.09.237.163.356.244l-3.432 3.433 4.355 4.36 4.36-4.36-2.355-2.352a6.773 6.773 0 00.713.113l1.946 1.94 4.356-4.36-.57-.57a6.766 6.766 0 00.22-.383l.653.653 4.357-4.36-2.693-2.692.143-.46 2.853 2.853 4.356-4.36-1.407-1.407h.608l1.103 1.103 1.102-1.103h.608l-1.407 1.407 4.355 4.36 3.365-3.369.15.457-3.21 3.212 4.355 4.36 1.063-1.064c.065.135.136.266.208.396l-.968.967 4.357 4.36 1.94-1.936c.18.014.357.042.539.042l.024-.002-2.2 2.2 4.356 4.356 4.36-4.36-3.117-3.118c.126-.073.23-.171.35-.252l3.071 3.07 4.355-4.36-4.355-4.356-.124.123c.004-.29.016-.577-.019-.869l.143.143 4.355-4.36-4.355-4.356-2.132 2.126-.15-.452 1.978-1.978-3.947-3.947-.356-1.074 4.3-4.298-4.358-4.36-2.116 2.119-.149-.455 1.967-1.962-3.923-3.924-.37-1.108 4.293-4.293-4.36-4.355-2.106 2.105-.15-.453 1.957-1.955-3.9-3.895-.039-.12a6.433 6.433 0 00-.402-.967l4.34-4.337-4.36-4.36-4.356 4.36 1.404 1.404a6.82 6.82 0 00-1.01-.41l-.698-.696-.443.447a6.648 6.648 0 00-.556-.046l.701-.699-4.36-4.36-4.356 4.36.7.701a6.134 6.134 0 00-.56.044l-.444-.442-.692.692a6.687 6.687 0 00-1.031.424l1.42-1.419zm27.96 0l-4.36 4.361 4.36 4.355 4.356-4.355-4.355-4.36zm-41.94 4.66l-4.359 4.36 4.36 4.356 4.355-4.355-4.354-4.362zm9.32 0l-4.36 4.36 4.36 4.356 4.356-4.355zm27.961.004l-4.36 4.356 4.355 4.36 4.361-4.36-4.356-4.355zm9.318 0l-4.36 4.356 4.361 4.36 4.355-4.36-4.355-4.355zM60.996 39.78h6.639c2.306 0 4.474 1.517 5.195 3.75l13.13 39.54c.936 2.882-.58 5.986-3.464 6.927a5.7 5.7 0 01-1.736.276c-2.304 0-4.44-1.432-5.192-3.74l-3.098-9.456H56.742l-2.888 9.38a5.51 5.51 0 01-5.231 3.807 5.559 5.559 0 01-1.697-.267c-2.883-.867-4.47-3.97-3.605-6.858l12.48-39.535c.72-2.237 2.813-3.824 5.195-3.824zm-24.655 3.012l-4.356 4.355 4.356 4.361 4.36-4.36zm9.323 0l-4.36 4.355 4.36 4.361 4.356-4.36-4.355-4.356zm37.281 0l-4.361 4.355 4.36 4.361 4.356-4.36zm9.318 0l-4.36 4.355 4.36 4.361 4.356-4.36-4.355-4.356zM31.68 47.45l-4.355 4.356 4.355 4.36 4.36-4.36-4.36-4.355zm9.32 0l-4.356 4.356L41 56.166l4.362-4.36L41 47.451zm46.603 0l-4.36 4.356 4.36 4.36 4.355-4.36-4.355-4.355zm9.319 0l-4.361 4.356 4.36 4.36 4.357-4.36-4.356-4.355zm-60.584 4.66l-4.354 4.356 4.355 4.36 4.36-4.36zm9.323 0l-4.36 4.356 4.362 4.36 4.355-4.36zm37.282 0l-4.36 4.36 4.355 4.357 4.359-4.36zm9.318 0L87.9 56.466l4.363 4.36 4.355-4.355-4.358-4.36zM31.68 56.77l-4.355 4.357 4.355 4.36 4.36-4.36-4.36-4.356zm9.321 0l-4.356 4.362L41 65.485l4.362-4.359L41 56.77zm46.603 0l-4.36 4.362 4.36 4.354 4.354-4.354-4.355-4.361zm9.317 0L92.56 61.13l4.36 4.354 4.356-4.354-4.355-4.361zm-60.583 4.66l-4.356 4.361 4.356 4.356 4.36-4.354zm55.921 0L87.9 65.79l4.363 4.356 4.354-4.354zm-60.578 4.66l-4.355 4.361 4.355 4.355 4.36-4.355-4.36-4.36zm9.321 0l-4.356 4.361 4.355 4.355 4.362-4.355-4.36-4.36zm46.603 0l-4.36 4.361 4.36 4.355 4.354-4.355-4.355-4.36zm9.318 0L92.56 70.45l4.36 4.355 4.356-4.355-4.354-4.36zM36.34 70.747l-4.355 4.36 4.356 4.358 4.36-4.357-4.36-4.36zm55.922.005l-4.36 4.356 4.36 4.357 4.356-4.357-4.355-4.355zm-60.58 4.66l-4.356 4.356 4.355 4.36 4.36-4.36zm4.66 4.658l-4.357 4.359 4.356 4.36 4.36-4.36-4.36-4.356zm27.96 0l-4.36 4.358 4.36 4.36 4.355-4.36-4.354-4.356zm27.96 0l-4.36 4.358 4.36 4.36 4.357-4.36-4.355-4.356zm-32.62 4.66l-4.36 4.356 4.36 4.36L64 89.087l-4.355-4.355zm9.32 0l-4.356 4.356 4.355 4.36 4.36-4.36-4.36-4.355zM54.983 89.39l-4.362 4.357 4.362 4.36 4.355-4.36-4.355-4.356zm9.317 0l-4.359 4.357 4.36 4.36 4.355-4.355-4.354-4.36zm9.32 0l-4.356 4.362 4.356 4.356 4.36-4.356-4.36-4.36zm-13.978 4.66l-4.36 4.361 4.36 4.355 4.356-4.355-4.355-4.361zm9.318 0l-4.355 4.361 4.355 4.355 4.36-4.355zm25.412 4.212a4.661 4.661 0 013.534 1.792l.018.023c1.64 2.075 1.297 5.073-.932 6.835-2.229 1.759-5.187 1.402-6.827-.672l-.018-.018c-1.635-2.075-1.29-5.077.938-6.835a5.132 5.132 0 012.703-1.108 5.39 5.39 0 01.585-.017zm-57.06 2.237l2.185 1.314-1.799 2.998 2.81 1.679 1.797-2.998 2.185 1.31-4.73 7.89-2.184-1.31 1.766-2.953-2.804-1.68-1.771 2.955-2.185-1.315zm56.512.21a2.27 2.27 0 00-1.337.498c-1.104.87-1.135 2.338-.313 3.38l.018.017c.821 1.042 2.291 1.358 3.394.484 1.095-.862 1.125-2.325.304-3.367l-.02-.023c-.515-.651-1.279-1.019-2.047-.989zm-9.847 3.874l-.458 10.048-2.307.852-6.889-7.326 2.563-.95 1.2 1.305 3.328-1.231.048-1.767 2.514-.931zm-32.27 2.597l2.462.664-1.815 6.726 2.664.72-.58 2.155-7.79-2.102.58-2.159 2.664.722zm14.181 1.688c2.61-.113 4.312 1.138 4.44 4.014l.225 5.16-2.585.114-.225-5.108c-.061-1.327-.757-1.924-1.78-1.881-1.025.045-1.666.677-1.613 1.966l.228 5.173-2.584.114-.226-5.095c-.13-2.966 1.505-4.343 4.12-4.456zm15.512.536l-1.934.717 1.868 2.097.068-2.814z"/>
</svg>;
  }
});