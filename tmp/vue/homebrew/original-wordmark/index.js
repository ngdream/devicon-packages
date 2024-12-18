import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HomebrewOriginalWordmarkIcon',
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
	<path d="M44.27 26.747c-3.732 0-6.854 2.549-7.79 5.994-3.296.464-5.855 3.271-5.855 6.69 0 3.326 2.396 6.102 5.548 6.727a.928.928 0 0 0 .014.002c1.168.214 2.324.482 3.466.805a.928.928 0 0 0 .011.003c4.545 1.226 13.386 2.906 23.174 2.66.625 1.276 1.582 2.358 2.792 3.09l-.01-.006c.424.263.767.965.767 1.375a4.416 4.416 0 0 0 4.401 4.403c1.149 0 2.235-.347 3.058-1.043s1.347-1.762 1.347-2.972l-.003-.655a.928.928 0 0 0-.003-.075 7.097 7.097 0 0 1 .814-3.853l.001-.003c.351-.652.573-1.376.716-2.126 1.593-.417 3.178-.882 4.73-1.467a.928.928 0 0 0 .005-.002 7.74 7.74 0 0 1 1.687-.438l.004-.001a6.806 6.806 0 0 0 5.864-6.732c0-3.742-3.054-6.797-6.796-6.797-1.078 0-2.082.288-2.987.736-1.303-2.953-4.239-5.023-7.664-5.023-3.887 0-7.14 2.675-8.09 6.27-1.43-1.668-3.502-2.774-5.866-2.774-2.092 0-3.932.891-5.335 2.239-.536-3.954-3.903-7.027-8-7.027zm0 1.856a6.24 6.24 0 0 1 5.895 8.327.928.928 0 0 0 .725 1.222l.022.004a.928.928 0 0 0 1.002-.614l.001.002.001-.004a.928.928 0 0 0 .029-.017 5.939 5.939 0 0 1 5.66-4.133 5.937 5.937 0 0 1 5.644 4.09.928.928 0 0 0 1.804-.386 6.527 6.527 0 0 1 6.508-7.2c2.933 0 5.4 1.922 6.237 4.566a.928.928 0 0 0 1.119.618l.65-.17a.928.928 0 0 0 .222-.09 4.903 4.903 0 0 1 2.423-.636 4.926 4.926 0 0 1 4.94 4.94 4.933 4.933 0 0 1-4.263 4.895.928.928 0 0 0-.005 0 9.582 9.582 0 0 0-2.097.545 46.054 46.054 0 0 1-5.088 1.577.928.928 0 0 0-.699.807 5.52 5.52 0 0 1-.633 2.067.928.928 0 0 0-.001.003 8.955 8.955 0 0 0-1.03 4.864l-.002-.076.004.67c0 .71-.254 1.188-.69 1.556-.434.368-1.087.605-1.86.605a2.533 2.533 0 0 1-2.547-2.548 3.473 3.473 0 0 0-1.642-2.951.928.928 0 0 0-.009-.006 5.558 5.558 0 0 1-2.303-2.754.928.928 0 0 0-.897-.594c-9.778.33-18.756-1.395-23.231-2.601l-.012-.004a38.963 38.963 0 0 0-3.627-.842l.014.003c-2.303-.457-4.054-2.471-4.054-4.907a4.925 4.925 0 0 1 4.764-4.932.928.928 0 0 0 .88-.761 6.242 6.242 0 0 1 6.147-5.136zM46.264.015a.928.928 0 0 0-.73.658c-1.365 4.776.775 9.306 3.629 12.7a26.159 26.159 0 0 0 2.06 2.173 8.803 8.803 0 0 0-2.88.081c-5.124 1.009-9.487 4.262-11.857 10.955-.972 2.745-1.015 5.6-.702 8.194a4.97 4.97 0 0 1 1.46-.275.928.928 0 0 0 .355-.14c-.259-2.342-.182-4.849.636-7.16 2.201-6.216 5.86-8.847 10.466-9.754 1.587-.312 2.875-.047 4.283.412.704.23 1.43.513 2.21.783l.144.045c.739.252 1.521.49 2.38.655a.928.928 0 0 0 1.09-1.064 10.512 10.512 0 0 1-.002-3.405c.037-.228.071-.457.12-.679.283-1.266.768-2.427 1.339-3.462a16.032 16.032 0 0 1 2.867-3.73c.305.231.611.438.915.779.148.166.14.174.253.314-1.436 1.333-4.628 4.95-4.119 10.614a.928.928 0 0 0 .958.843c2.03-.073 3.386-.747 4.57-1.292 1.184-.546 2.2-.987 4.03-.93 3.786.119 7.088 3.094 8.387 4.909 1.403 2.136 3.13 4.792 2.85 12.073v.03a4.908 4.908 0 0 1 1.236-.159c.21 0 .416.017.62.043.256-7.517-1.754-10.872-3.17-13.028a.928.928 0 0 0-.02-.03c-1.578-2.208-5.164-5.546-9.845-5.692-2.175-.068-3.642.535-4.864 1.098-.942.434-1.822.766-2.897.953.007-5.563 4.086-8.573 4.086-8.573a.928.928 0 0 0 .212-1.285s-.374-.53-.902-1.123c-.528-.592-1.167-1.278-2.034-1.64a.928.928 0 0 0-.974.163 18.649 18.649 0 0 0-3.784 4.767c-.208.376-.39.788-.572 1.2-.4-1.322-.941-2.55-1.651-3.682-1.959-3.123-5.124-5.469-9.644-7.286a.928.928 0 0 0-.509-.053zm.84 2.251c3.677 1.637 6.185 3.592 7.74 6.073 1.135 1.809 1.792 3.948 2.067 6.48.013.123.02.253.03.378v.001c.069.732.112 1.488.12 2.286-.268-.142-.587-.347-.89-.531-.197-.12-.37-.206-.577-.343-1.584-1.042-3.449-2.572-5.012-4.43-2.388-2.842-4.047-6.314-3.478-9.914zm35.732 41.763a9.57 9.57 0 0 0-2.05.536 42.967 42.967 0 0 1-1.564.552c-.049.093-.071.139-.124.242-.027.052-.12.191-.155.254h2.31v2.725a2.49 2.49 0 0 0 2.478 2.476h5.747a6.045 6.045 0 0 1 6.044 6.044l-.001 25.11a6.048 6.048 0 0 1-1.778 4.281 6.047 6.047 0 0 1-3.1 1.65 6.042 6.042 0 0 1-1.188.113.928.928 0 0 0-.005 0c-1.938.005-3.973.001-5.668-.022a2.478 2.478 0 0 0-2.528 2.475c0 2.028 0 5.463-.007 6.938a.928.928 0 0 0 0 .004c0 .18-.082.346-.216.463-.938.7-3.661 2.132-8.916 3.106-1.05.195-2.203.372-3.462.52-2.518.298-5.465.484-8.888.484-13.443 0-19.844-2.254-21.584-3.252a.618.618 0 0 1-.283-.514l-.113-52.6h3.296c-.046-.086-.07-.143-.115-.228-.265-.067-.567-.137-.808-.202l-.01-.003a38.963 38.963 0 0 0-3.628-.842l.014.003a5.039 5.039 0 0 1-.42-.103.928.928 0 0 0-.185.449s.1 46.686.114 53.529a2.48 2.48 0 0 0 1.145 2.084.928.928 0 0 0 .034.02c2.322 1.344 8.854 3.514 22.542 3.514 14.008 0 20.334-2.931 22.413-4.502a.928.928 0 0 0 .032-.026 2.472 2.472 0 0 0 .893-1.9c.008-1.49.008-4.915.008-6.942a.62.62 0 0 1 .185-.443.928.928 0 0 0 .001-.001.62.62 0 0 1 .448-.177.928.928 0 0 0 .006 0c1.712.024 3.755.027 5.699.022a7.9 7.9 0 0 0 7.927-7.898l.001-25.11a7.901 7.901 0 0 0-7.9-7.9H83.73a.607.607 0 0 1-.62-.62v-3.653a.928.928 0 0 0-.273-.657zm1.282 11.136a2.864 2.864 0 0 0-1.096.218 2.864 2.864 0 0 0-.93.62.928.928 0 0 0 0 .001 2.864 2.864 0 0 0-.62.929 2.87 2.87 0 0 0-.218 1.096v22.536a2.864 2.864 0 0 0 .218 1.096 2.863 2.863 0 0 0 .62.93 2.864 2.864 0 0 0 .93.62 2.87 2.87 0 0 0 1.096.218h4.934a2.864 2.864 0 0 0 1.096-.218 2.864 2.864 0 0 0 .929-.62 2.864 2.864 0 0 0 .62-.93 2.87 2.87 0 0 0 .219-1.096V58.03a2.864 2.864 0 0 0-.218-1.096 2.864 2.864 0 0 0-.62-.929.928.928 0 0 0-.001 0 2.863 2.863 0 0 0-.93-.621 2.87 2.87 0 0 0-1.095-.218zm0 1.856h4.934a1.009 1.009 0 0 1 1.008 1.008v22.536a1.008 1.008 0 0 1-1.008 1.009h-4.934a1.008 1.008 0 0 1-.713-.295h-.001a1.007 1.007 0 0 1-.294-.714V58.03a1.009 1.009 0 0 1 .622-.932c.122-.05.252-.076.386-.076z"/>
	<path d="M47.105 2.266c-.569 3.6 1.09 7.073 3.479 9.914 2.083 2.477 4.704 4.37 6.48 5.304-.042-3.735-.706-6.733-2.218-9.144-1.557-2.481-4.064-4.437-7.741-6.073zm16.029 4.736a16.048 16.048 0 0 0-2.868 3.73c-1.142 2.07-1.94 4.648-1.457 7.546a.928.928 0 0 1-1.09 1.064c-1.827-.35-3.326-1.024-4.734-1.483-1.407-.46-2.695-.724-4.283-.411-4.607.906-8.265 3.537-10.466 9.753-.364 1.03-.574 2.1-.682 3.176 1.445-2.184 3.908-3.629 6.718-3.629 4.097 0 7.463 3.074 8 7.027 1.402-1.347 3.243-2.238 5.335-2.238 2.363 0 4.435 1.105 5.866 2.774.95-3.595 4.202-6.27 8.09-6.27 3.425 0 6.36 2.07 7.664 5.022a7.192 7.192 0 0 1 1.762-.6c-.062-5.874-1.587-8.283-2.861-10.223-1.3-1.815-4.601-4.79-8.387-4.91-1.83-.056-2.847.385-4.03.93-1.184.546-2.54 1.22-4.57 1.292a.928.928 0 0 1-.958-.843c-.51-5.664 2.683-9.28 4.118-10.614-.113-.14-.104-.148-.252-.314-.304-.34-.61-.548-.915-.78z" fill="#d1d3d4"/>
	<path d="M41.322 47.387v44.869a1.55 1.55 0 0 0 .775 1.343c1.96.934 7.647 3.164 17.616 3.164 10.036 0 15.553-2.71 17.401-3.827a1.544 1.544 0 0 0 .708-1.297c.004-5.935.004-39.319.004-44.188-.37.104-.738.216-1.11.313a8.772 8.772 0 0 1-.28 1.1c-.116.357-.26.7-.435 1.026l-.002.003a7.104 7.104 0 0 0-.813 3.853.928.928 0 0 1 .003.076l.002.654a3.913 3.913 0 0 1-.365 1.679 3.807 3.807 0 0 1-.424.705 3.713 3.713 0 0 1-.558.588 4.11 4.11 0 0 1-.663.457 4.46 4.46 0 0 1-.744.326 4.902 4.902 0 0 1-.804.195 5.497 5.497 0 0 1-.846.065 4.37 4.37 0 0 1-2.456-.754 4.46 4.46 0 0 1-1.599-1.939 4.36 4.36 0 0 1-.347-1.71c0-.102-.022-.223-.06-.35s-.095-.262-.165-.392a2.12 2.12 0 0 0-.243-.365 1.286 1.286 0 0 0-.299-.268l.01.006a7.046 7.046 0 0 1-.858-.612 7.254 7.254 0 0 1-.757-.729 7.516 7.516 0 0 1-.647-.83 7.78 7.78 0 0 1-.53-.918c-1.223.03-2.432.03-3.619.006a84.374 84.374 0 0 1-3.491-.146 88.576 88.576 0 0 1-3.325-.271 90.509 90.509 0 0 1-5.99-.804 84.409 84.409 0 0 1-2.587-.478 73.406 73.406 0 0 1-2.262-.49l-.24-.061zm5.366 2.848a2.134 2.134 0 0 1 .817.163 2.134 2.134 0 0 1 .692.462 2.134 2.134 0 0 1 .463.692 2.134 2.134 0 0 1 .163.817v37.11a2.134 2.134 0 0 1-.027.334 2.134 2.134 0 0 1-.078.326 2.134 2.134 0 0 1-.127.31 2.134 2.134 0 0 1-.176.285 2.134 2.134 0 0 1-.217.255 2.134 2.134 0 0 1-.255.217 2.134 2.134 0 0 1-.286.176 2.134 2.134 0 0 1-.31.127 2.134 2.134 0 0 1-.326.079 2.134 2.134 0 0 1-.333.026 2.134 2.134 0 0 1-.818-.163 2.134 2.134 0 0 1-.692-.462 2.134 2.134 0 0 1-.462-.693 2.134 2.134 0 0 1-.163-.817V52.37a2.134 2.134 0 0 1 .163-.817 2.134 2.134 0 0 1 .462-.692 2.134 2.134 0 0 1 .693-.462 2.134 2.134 0 0 1 .817-.163z" fill="#fbb040"/>
	<path d="M46.69 50.233a2.134 2.134 0 0 0-2.135 2.134v37.11a2.134 2.134 0 0 0 2.135 2.135 2.134 2.134 0 0 0 2.135-2.135v-37.11a2.134 2.134 0 0 0-2.135-2.134z" fill="#ffdb96"/>
	<path d="M44.27 28.602a6.242 6.242 0 0 0-6.147 5.136.928.928 0 0 1-.88.761 4.925 4.925 0 0 0-4.763 4.932c0 2.435 1.75 4.45 4.054 4.907l-.015-.003a38.89 38.89 0 0 1 3.628.842l.011.004c4.475 1.205 13.454 2.93 23.231 2.6a.928.928 0 0 1 .897.595 5.558 5.558 0 0 0 2.304 2.753.928.928 0 0 1 .008.006 3.473 3.473 0 0 1 1.643 2.952 2.533 2.533 0 0 0 2.547 2.548c.772 0 1.425-.238 1.86-.606.435-.368.69-.846.69-1.555 0-.067-.005-.5-.004-.653a8.954 8.954 0 0 1 1.031-4.805.928.928 0 0 1 .002-.003 5.52 5.52 0 0 0 .632-2.067.928.928 0 0 1 .699-.807c1.723-.43 3.426-.95 5.088-1.577a9.581 9.581 0 0 1 2.097-.544.928.928 0 0 1 .005 0 4.933 4.933 0 0 0 4.263-4.896 4.926 4.926 0 0 0-4.94-4.94c-.883 0-1.704.231-2.423.636a.928.928 0 0 1-.222.09l-.65.17a.928.928 0 0 1-1.12-.618 6.538 6.538 0 0 0-6.236-4.566 6.527 6.527 0 0 0-6.507 7.2.928.928 0 0 1-1.805.386 5.937 5.937 0 0 0-5.643-4.09 5.938 5.938 0 0 0-5.66 4.132.928.928 0 0 1-.03.018v.004l-.002-.003a.928.928 0 0 1-1.002.615l-.021-.004a.928.928 0 0 1-.725-1.222 6.24 6.24 0 0 0-5.895-8.328zm36.984 17.763a36.342 36.342 0 0 1-2.156.727c-.421.129-.846.24-1.27.358 0 4.867 0 38.25-.004 44.188a1.542 1.542 0 0 1-.708 1.297c-.23.14-.519.304-.866.485s-.754.379-1.22.584a25.206 25.206 0 0 1-1.585.632 29.766 29.766 0 0 1-1.958.631 35.691 35.691 0 0 1-3.66.831 41.24 41.24 0 0 1-2.937.406c-.523.054-1.064.1-1.622.139a50.783 50.783 0 0 1-3.552.118 61.186 61.186 0 0 1-3.54-.097 55.6 55.6 0 0 1-1.62-.115 53.614 53.614 0 0 1-2.949-.333 47.94 47.94 0 0 1-1.33-.21 42.662 42.662 0 0 1-2.373-.476 36.587 36.587 0 0 1-1.999-.521 30.918 30.918 0 0 1-1.628-.523A25.169 25.169 0 0 1 43.01 94a19.387 19.387 0 0 1-.91-.404 1.55 1.55 0 0 1-.776-1.343V47.385a59.8 59.8 0 0 1-1.66-.416.928.928 0 0 1-.012-.003 37.197 37.197 0 0 0-1.722-.444c-.048-.011-.096-.018-.144-.03l.111 51.722a.633.633 0 0 0 .283.514c.218.125.508.27.876.426.368.158.813.328 1.34.504a29.16 29.16 0 0 0 1.833.538c.697.18 1.48.36 2.354.532.875.172 1.84.337 2.903.487 1.062.15 2.22.284 3.479.397a85.02 85.02 0 0 0 4.083.269 112.813 112.813 0 0 0 4.716.099 87.836 87.836 0 0 0 4.784-.13c.74-.042 1.451-.094 2.135-.153s1.34-.127 1.97-.201a56.585 56.585 0 0 0 1.81-.243 50.226 50.226 0 0 0 1.652-.278 43.459 43.459 0 0 0 1.853-.384 36.673 36.673 0 0 0 1.625-.413 30.578 30.578 0 0 0 1.405-.429 24.939 24.939 0 0 0 1.194-.429c.364-.142.693-.281.99-.416s.564-.266.799-.39a10.283 10.283 0 0 0 .613-.35 6.31 6.31 0 0 0 .436-.295.633.633 0 0 0 .159-.208.592.592 0 0 0 .057-.254.928.928 0 0 1 0-.004c.008-1.475.008-4.91.008-6.938a2.473 2.473 0 0 1 1.565-2.301 2.477 2.477 0 0 1 .963-.175c1.694.024 3.73.028 5.667.022a.928.928 0 0 1 .006 0 6.042 6.042 0 0 0 1.188-.113 6.053 6.053 0 0 0 4.415-3.612 6.043 6.043 0 0 0 .463-2.318v-25.11a6.046 6.046 0 0 0-1.368-3.83 6.049 6.049 0 0 0-4.676-2.214H83.73a2.445 2.445 0 0 1-1.38-.426 2.523 2.523 0 0 1-.67-.67 2.442 2.442 0 0 1-.426-1.38zm2.864 8.798h4.933a2.864 2.864 0 0 1 1.096.218 2.865 2.865 0 0 1 .93.62 2.864 2.864 0 0 1 .62.93 2.87 2.87 0 0 1 .218 1.096v22.536a2.864 2.864 0 0 1-.217 1.096 2.864 2.864 0 0 1-.62.929.928.928 0 0 0-.002 0 2.864 2.864 0 0 1-.928.62 2.87 2.87 0 0 1-1.096.218h-4.935a2.864 2.864 0 0 1-1.096-.217 2.863 2.863 0 0 1-.929-.62.928.928 0 0 0 0-.001 2.864 2.864 0 0 1-.62-.93 2.87 2.87 0 0 1-.218-1.095V58.027a2.864 2.864 0 0 1 .217-1.096 2.863 2.863 0 0 1 .62-.93.928.928 0 0 0 .001 0 2.864 2.864 0 0 1 .93-.62 2.87 2.87 0 0 1 1.095-.218z" fill="#fff"/>
	<path d="M19.157 127.76h-4.224v-7.359H8.676v7.359H4.427v-17.622h4.249v6.996h6.257v-6.996h4.224zm1.985-6.67q0-1.96.763-3.486.762-1.537 2.19-2.36t3.353-.823q2.94 0 4.635 1.828 1.695 1.815 1.695 4.95v.145q0 3.062-1.707 4.866-1.694 1.79-4.599 1.79-2.796 0-4.49-1.67-1.695-1.683-1.828-4.551zm4.079.254q0 1.816.569 2.663.569.847 1.682.847 2.179 0 2.227-3.352v-.412q0-3.522-2.251-3.522-2.046 0-2.215 3.038zm14.209-6.684.133 1.537q1.392-1.78 3.74-1.78 2.481 0 3.353 1.974 1.331-1.973 3.848-1.973 3.982 0 4.091 4.817v8.52h-4.09v-8.266q0-1.004-.34-1.464-.338-.46-1.234-.46-1.21 0-1.803 1.077l.012.17v8.944h-4.091v-8.243q0-1.028-.327-1.488-.327-.46-1.247-.46-1.174 0-1.79 1.077v9.114h-4.08V114.66zM63.262 128q-3.014 0-4.878-1.791-1.864-1.804-1.864-4.684v-.34q0-2.008.739-3.545.75-1.538 2.178-2.373 1.429-.847 3.39-.847 2.759 0 4.357 1.719 1.597 1.706 1.597 4.768v1.586h-8.11q.219 1.101.957 1.73.738.63 1.912.63 1.937 0 3.026-1.355l1.864 2.202q-.762 1.053-2.166 1.683-1.392.617-3.002.617zm-.46-10.433q-1.791 0-2.13 2.372h4.115v-.314q.024-.98-.496-1.513-.52-.545-1.489-.545zm19.777 3.753q0 3.22-1.331 4.95-1.332 1.731-3.752 1.731-1.997 0-3.22-1.586l-.17 1.344h-3.655v-18.591h4.08v6.548q1.137-1.295 2.94-1.295 2.445 0 3.777 1.755 1.331 1.755 1.331 4.938zm-4.09-.254q0-1.888-.51-2.687-.495-.811-1.536-.811-1.38 0-1.913 1.053v5.204q.52 1.041 1.937 1.041 1.44 0 1.827-1.404.194-.69.194-2.396zm13.809-2.716-1.343-.097q-1.925 0-2.47 1.21v8.291h-4.078v-13.096h3.824l.133 1.683q1.03-1.925 2.869-1.925.653 0 1.138.145zm7.576 9.65q-3.014 0-4.878-1.791-1.864-1.804-1.864-4.684v-.34q0-2.008.739-3.545.75-1.538 2.178-2.373 1.429-.847 3.39-.847 2.759 0 4.357 1.719 1.597 1.706 1.597 4.768v1.586h-8.11q.219 1.101.957 1.73.738.63 1.912.63 1.937 0 3.026-1.355l1.864 2.202q-.762 1.053-2.166 1.683-1.392.617-3.002.617zm-.46-10.433q-1.791 0-2.13 2.372h4.115v-.314q.024-.98-.496-1.513-.52-.545-1.489-.545zm18.926 4.813 1.32-7.722h3.909l-3.087 13.096h-3.449l-2.166-7.77-2.18 7.77h-3.448l-3.087-13.096h3.91l1.295 7.903 2.081-7.903h2.845z" fill="#f9d094"/>
</svg>;
  }
});