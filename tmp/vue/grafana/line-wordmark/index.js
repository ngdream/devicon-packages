import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GrafanaLineWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#f7a525'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m68.008 0-.235.152C60.055 5.16 58.45 11.92 58.45 11.92l-.002.008c-.33.1-.658.222-.846.222h-.095l-.09.036c-.439.175-1.09.28-1.709.652-.404.242-1.017.345-1.637.717l.051-.028a49.406 49.406 0 0 0-3.31 1.653l-.008.006-.01.006a56.652 56.652 0 0 0-2.809 1.779l-.04-.041-.098-.035c-10.451-3.972-19.65.84-19.65.84l-.245.128-.02.274c-.807 10.7 3.828 17.503 4.964 19.045-.244.641-.38 1.209-.625 1.783l-.008.02-.006.019c-.832 2.496-1.352 5.087-1.662 7.672l.023-.098c-.077.233-.1.456-.125.66-.017.138-.036.222-.055.315-9.326 4.753-12.21 14.293-12.21 14.293l-.08.262.18.204c7.676 8.873 16.463 9.701 17.18 9.756 1.125 2.004 2.5 3.995 3.891 5.784.603.802 1.268 1.397 1.909 2.103-2.73 8.234.49 15.108.49 15.108l.13.271.302.01c8.676.302 14.316-3.521 15.865-4.762.838.27 1.6.471 2.42.744l.013.006.016.004a38.2 38.2 0 0 0 8.299 1.244h3.303c4.272 5.907 11.607 6.754 11.607 6.754l.248.03.172-.184c5.217-5.635 5.658-11.08 5.658-12.418v-.371c.951-.75 1.917-1.435 2.992-2.315l.008-.008.01-.007c2.086-1.878 3.846-4.057 5.494-6.323l-.05.059c.178-.18.25-.341.34-.506 5.893.155 9.993-3.789 9.993-3.789l.184-.178-.04-.25c-.944-6.3-4.481-9.355-5.318-9.953l.063.053-.104-.102-.043-.045c.022-.209.071-.492.08-.865v-.016c.106-.748.11-1.39.11-2.101v-2.56c0-.206-.025-.472-.157-.735l.044.125-.104-.512-.102-.511c-.11-.753-.297-1.336-.297-1.95v-.056l-.011-.055a26.408 26.408 0 0 0-3.026-7.514l-.006-.006-.003-.007a28.558 28.558 0 0 0-5.104-6.04l-.006-.005-.006-.004c-1.965-1.655-4.05-3.119-6.369-4.069a24.25 24.25 0 0 0-6.965-1.976h-.006c-1.186-.215-2.438-.213-3.562-.213h-1.781l-.041.006c-.61.102-1.222.202-1.744.307-2.429.422-4.631 1.37-6.612 2.517-2.01 1.164-3.685 2.74-5.14 4.402a17.233 17.233 0 0 0-3.262 5.47v.001a19.045 19.045 0 0 0-1.264 5.781v2.075c0 .307.014.536.127.875l-.021-.104c.106.958.318 1.899.525 2.727l.002.01.004.01c.53 1.801 1.375 3.389 2.424 4.857 1.053 1.474 2.232 2.546 3.603 3.394l.002.002c1.386.96 2.764 1.489 4.094 2 1.414.544 2.824.65 4.11.543l-.042.002H74.8c.185 0 .342-.053.427-.088.085-.034.095-.015-.02-.015.186 0 .343-.052.429-.086.085-.034.097-.016-.018-.016h.08l1.012-.336 1.586-.636.033-.02c.494-.297.92-.508 1.373-.848l.03-.02.025-.025a3.23 3.23 0 0 0 .15-.117c.045-.036.098-.078.158-.152.037-.045.058-.15.088-.234.439-.502.558-1.23.19-1.844l-.032-.053-.045-.043c-.502-.502-1.203-.585-1.8-.435l-.375.093v.387c0 .296-.03.374-.022.37l-.011.005-.028.014-.025.015c-.158.105-.629.228-.996.35-.458.116-.947.285-1.188.285a1.9 1.9 0 0 0-.478.067c-.103.025-.138.035-.237.035h-1.552v-.004l-.389-.086c-.937-.208-2.014-.414-2.834-.87l-.018-.011-.021-.008c-.877-.39-1.845-.983-2.488-1.719l-.022-.023-.023-.02c-.88-.782-1.456-1.548-2.055-2.546-.568-.948-.863-2.007-1.062-3.102-.103-.614-.189-1.17-.104-1.678l.008-.04v-.964c0-.196.077-.458.18-.765l.013-.04.006-.042c.392-2.547 1.667-4.902 3.64-6.778l.005-.004.004-.003c.489-.49.97-.877 1.562-1.272.614-.409 1.204-.791 1.725-.965l.033-.011.031-.016c.555-.278 1.247-.479 1.963-.684a7.192 7.192 0 0 1 1.91-.289c.416 0 .825-.1 1.024-.1h.89c.791.1 1.488.198 2.186.297 1.365.294 2.861.89 4.263 1.59 2.678 1.49 4.96 3.772 6.344 6.54.696 1.39 1.188 2.87 1.385 4.445l.004.03.008.028c.077.308.091.697.187 1.135v2.432c0 .312-.09.8-.097 1.271-.11.482-.119.97-.194 1.27-.107.427-.209.939-.306 1.33l-.002.008-.002.006c-.193.865-.488 1.56-.8 2.492-.6 1.604-1.4 3.193-2.472 4.46l-.014.016-.011.018c-1.989 2.784-4.894 5.092-7.994 6.594-1.62.707-3.21 1.297-4.868 1.492l-.023.004-.025.006a11.24 11.24 0 0 1-2.553.292H71.01c-.41 0-.887-.001-1.336-.091l-.022-.006-.023-.002c-1.926-.203-3.74-.503-5.55-1.006-1.8-.5-3.508-1.202-5.12-2.008-.002 0-.002-.003-.004-.004-3.203-1.702-6.123-4.215-8.438-7.031l-.003-.006-.002-.002c-1.101-1.402-2.112-3.017-3.024-4.639-.883-1.57-1.388-3.272-2.006-5.023a23.593 23.593 0 0 1-.898-5.293v-3.055c0-.884.098-1.768.295-2.656l.006-.025.004-.028c.098-.885.301-1.806.408-2.763.094-.85.386-1.741.693-2.662l.004-.012.004-.012c.506-1.822 1.11-3.532 1.91-5.133l.004-.006.002-.005c1.512-3.227 3.531-6.149 5.84-8.457a14.441 14.441 0 0 1 1.883-1.586l.033-.024.03-.03c.266-.266.875-.775 1.456-1.163l.004-.002c.736-.423 1.436-.914 2.07-1.186l.041-.017.038-.026c.2-.134.603-.246 1.072-.48.265-.133.305-.2.549-.281l.033-.012.033-.016c.265-.132.305-.2.549-.281l.008-.002.01-.004c.83-.312 1.546-.617 2.353-.92l.025-.008.024-.011c.087-.044.29-.046.613-.207.087-.044.293-.044.615-.205l-.103.039 1.281-.32.049-.024c.075-.038.28-.073.531-.178.23-.028.448-.078.479-.078.37 0 .574-.104.613-.104h.08l.38-.125.311-.103c.212-.03.428-.076.457-.076.21 0 .376-.041.479-.067.102-.025.14-.037.238-.037.185 0 .327-.035.455-.06.128-.026.24-.043.26-.043.103 0 .203.006.342-.022.05-.01.095-.056.148-.08h.944c.307 0 .536-.016.875-.129l-.159.026h3.55c1.514.1 3.143.306 4.57.51 2.918.504 5.732 1.41 8.236 2.712l.008.002.006.004c2.52 1.21 4.84 2.724 6.64 4.324l-.02-.02c.076.076.116.1.16.132v.03l.145.147c.078.078.119.101.164.133v.088l.221.147c.222.147.324.353.717.615.201.134.339.33.646.557.221.295.413.438.545.636l.028.041.035.035c.89.89 1.593 1.791 2.318 2.621 1.41 1.814 2.516 3.625 3.317 5.327l.037.078.062.06c-.007-.007-.017-.027.008.024.025.05.086.173.196.283-.007-.007-.016-.026.01.025.025.052.085.174.195.284l-.094-.13.309.614.306.613.305.612.002.004c.305.809.604 1.516.9 2.306.404 1.212.705 2.218.903 3.108l.004.023.01.025c.165.496.632.953 1.289.953.328 0 .656-.134.879-.378.223-.245.334-.58.334-.936v-.094l-.035-.09c-.056-.14-.123-.532-.16-1.03-.038-.5-.064-1.116-.116-1.792v-.012l-.002-.011c-.204-1.63-.41-3.6-.931-5.69-.525-2.096-1.458-4.474-2.594-6.85l-.004-.007-.004-.008c-1.234-2.364-2.685-4.963-4.774-7.365l-.002-.002-.002-.002a67.394 67.394 0 0 0-2.422-2.617c1.296-5.62-1.73-10.325-1.73-10.325l-.137-.21-.25-.014c-5.22-.301-8.435 1.491-9.851 2.502l-.428-.213-.035-.012c-.89-.296-1.81-.708-2.764-1.025a30.696 30.696 0 0 0-2.863-.817l-.01-.002c-1.003-.332-2.14-.432-3.123-.629l-.047-.01h-.05c-.02 0-.022 0-.098-.025-.016-.005-.063-.009-.084-.015C74.768 3.326 68.26.12 68.26.12Zm.062 1.185c.42.212 6.201 3.175 8.407 10.079l.109.343h.363c.02 0 .021.002.098.028.077.025.227.076.412.076l-.096-.01c1.062.212 2.175.319 3.012.598l.023.01.026.004a29.72 29.72 0 0 1 2.816.804c.868.29 1.769.684 2.698.998l.006.004.882.441.246-.185c1.135-.851 4.213-2.657 9.22-2.45.215.345 2.787 4.524 1.47 9.606l-.072.274.2.2c.909.91 1.72 1.822 2.54 2.743 2 2.302 3.411 4.82 4.633 7.16 1.114 2.332 2.026 4.66 2.525 6.656.501 2.005.703 3.924.908 5.569v.004c.05.645.074 1.249.113 1.767.04.525.078.952.227 1.324l-.035-.185c0 .157-.043.231-.076.267-.033.037-.063.055-.145.055-.162 0-.31-.157-.35-.275-.21-.937-.516-1.955-.921-3.172l-.002-.01-.004-.008c-.312-.83-.618-1.548-.92-2.355l-.01-.024-.319-.638-.306-.614-.344-.685-.057-.057c.007.008.016.026-.01-.025a1.008 1.008 0 0 0-.195-.283c.007.007.017.027-.008-.024-.013-.025-.066-.091-.098-.142-.836-1.777-1.981-3.65-3.435-5.52l-.01-.012-.008-.01c-.703-.803-1.432-1.738-2.38-2.685l.063.076c-.26-.391-.465-.494-.613-.717l-.057-.082-.082-.056c-.222-.149-.325-.352-.716-.614-.191-.127-.342-.317-.618-.529-.01-.015-.013-.052-.023-.064a.87.87 0 0 0-.157-.15 2.923 2.923 0 0 0-.127-.098c-.01-.013-.013-.046-.021-.057-.06-.074-.112-.114-.157-.15a4.767 4.767 0 0 0-.15-.12l-.012-.01-.01-.009c-1.884-1.675-4.272-3.23-6.869-4.477h-.002c-2.607-1.353-5.516-2.287-8.525-2.806l-.006-.002h-.008c-1.44-.206-3.088-.414-4.644-.518h-3.696l-.076.026c-.276.092-.254.076-.56.076h-1.229l-.101.101c-.019.001-.032.002-.104.002-.185 0-.327.035-.455.06s-.24.042-.26.042a1.9 1.9 0 0 0-.48.066c-.103.026-.138.037-.237.037-.37 0-.576.102-.615.102h-.08l-.383.129-.304.1c-.215.028-.43.078-.46.078-.37 0-.578.103-.617.103h-.117l-.103.051c-.088.044-.293.046-.615.207l.101-.039-1.28.32-.048.024c-.087.043-.293.044-.615.205-.088.043-.291.044-.614.205-.804.303-1.507.6-2.29.894-.371.124-.534.262-.678.334l.064-.027c-.37.124-.535.264-.68.336-.348.174-.76.267-1.171.539l-.006.004c-.757.339-1.46.831-2.121 1.209l-.016.008-.014.01a11.54 11.54 0 0 0-1.611 1.29 15.469 15.469 0 0 0-1.945 1.64c-2.398 2.396-4.474 5.405-6.032 8.726a.122.122 0 0 1-.002.004c-.833 1.666-1.453 3.43-1.968 5.283l-.002.008c-.307.919-.629 1.866-.739 2.857-.098.886-.302 1.807-.408 2.764l.01-.053a13.22 13.22 0 0 0-.32 2.871v3.098a24.56 24.56 0 0 0 .941 5.539l.004.013.004.012c.608 1.724 1.127 3.495 2.084 5.195.929 1.652 1.964 3.311 3.113 4.774l.004.004.004.004c2.392 2.912 5.404 5.512 8.748 7.289l.006.004.004.002c1.66.83 3.432 1.56 5.312 2.082 1.868.519 3.73.826 5.686 1.033.565.11 1.104.11 1.508.11h1.537c.948 0 1.803-.109 2.74-.315 1.81-.217 3.488-.848 5.135-1.569l.01-.003.007-.004c3.237-1.566 6.258-3.96 8.362-6.899 1.173-1.39 2.01-3.072 2.634-4.738l.004-.008.002-.01c.299-.895.615-1.63.83-2.593l.002-.006c.107-.427.21-.937.307-1.326.126-.505.125-1.016.203-1.33l.016-.06v-.062c0-.326.101-.837.101-1.33v-2.52l-.013-.058c-.08-.32-.089-.72-.198-1.183-.213-1.696-.743-3.281-1.478-4.752-1.482-2.964-3.907-5.385-6.754-6.967l-.01-.006-.01-.004c-1.458-.73-3.022-1.361-4.517-1.682l-.018-.002-.017-.004a129.56 129.56 0 0 0-2.26-.306l-.031-.004h-.953c-.416 0-.825.102-1.024.102-.67 0-1.425.11-2.183.326-.701.2-1.425.41-2.086.734-.7.238-1.335.665-1.944 1.07a10.91 10.91 0 0 0-1.707 1.39c-2.114 2.01-3.498 4.558-3.927 7.325-.099.294-.217.622-.217 1.014v.922l.008-.082c-.12.72-.001 1.392.101 2.006v.004l.002.002c.21 1.155.53 2.343 1.19 3.441.623 1.039 1.277 1.903 2.224 2.75.781.883 1.836 1.512 2.787 1.938.967.532 2.046.727 2.926.918.008.006.01.027.018.033.112.077.198.093.267.107.139.028.238.024.29.024h1.74a1.9 1.9 0 0 0 .478-.067c.102-.026.138-.037.236-.037.574 0 1.098-.232 1.452-.32l.02-.004.017-.006c.245-.082.79-.165 1.246-.469l-.055.031c.036-.018.096-.04.188-.101a.837.837 0 0 0 .265-.299c.047-.093.03-.224.049-.32.194.024.377.035.48.097.126.287.1.58-.068.705l-.197.149v.072c-.045.032-.086.057-.162.133l.052-.047c-.357.268-.747.466-1.255.77l-1.485.595-.906.301.156-.025c-.217 0-.306.068-.35.086-.043.017-.04.017-.06.017-.217 0-.309.07-.351.086-.043.017-.038.016-.057.016h-1.965l-.021.002c-1.172.097-2.425 0-3.672-.48-1.33-.512-2.613-1.009-3.887-1.891l-.012-.008-.012-.008c-1.28-.788-2.347-1.757-3.336-3.14-.998-1.4-1.787-2.882-2.28-4.561-.202-.805-.4-1.698-.497-2.576l-.006-.051-.017-.05c-.092-.277-.077-.255-.077-.561v-2.03c.1-1.785.5-3.68 1.196-5.468l.002-.004.002-.004a16.183 16.183 0 0 1 3.08-5.168c1.41-1.613 3.012-3.109 4.893-4.198 1.91-1.105 4.002-2.001 6.283-2.398h.006l.005-.002c.49-.098 1.091-.196 1.694-.297h1.691c1.126 0 2.327.004 3.39.197l.015.002.011.002c2.31.302 4.51.902 6.717 1.905l.01.004.008.004c2.18.891 4.185 2.29 6.105 3.906a27.531 27.531 0 0 1 4.916 5.818 25.397 25.397 0 0 1 2.914 7.229l-.013-.112c0 .81.217 1.453.312 2.118l.002.013.105.526.116.576.029.058c.073.147.05.087.05.291v2.561c0 .716 0 1.299-.097 1.976l-.006.036v.035c0 .326-.101.707-.101 1.125v.205l.248.248.101.103.133.131.033.024c.586.418 3.873 3.246 4.84 9.02-.307.288-3.969 3.67-9.338 3.388l-.324-.018-.145.291c-.102.205-.172.34-.318.487l-.027.03-.024.03c-1.628 2.239-3.347 4.358-5.355 6.166-1.103.9-2.117 1.61-3.15 2.438l-.186.15v.852c0 1.102-.41 6.182-5.229 11.52-.416-.053-7.035-.929-10.863-6.48l-.146-.214h-3.723a37.268 37.268 0 0 1-8.078-1.211l.027.01c-.942-.314-1.761-.52-2.662-.82l-.262-.089-.213.178c-1.128.94-6.655 4.844-15.086 4.67-.207-.451-3-6.649-.3-14.361l.095-.274-.191-.216c-.743-.85-1.449-1.459-2.023-2.225l-.002-.004-.002-.002c-1.423-1.829-2.844-3.857-3.952-5.87l-.132-.243-.276-.014s-8.828-.496-16.545-9.25c.24-.746 3.112-9.253 11.826-13.562l.186-.09.064-.198c.078-.232.098-.453.123-.658.026-.204.056-.392.08-.467l.016-.046.008-.051c.304-2.533.81-5.059 1.615-7.477.318-.754.426-1.363.703-2.01l.114-.263-.174-.229c-.889-1.185-5.597-7.816-4.906-18.322.745-.371 8.983-4.304 18.547-.678.072.059.109.104.277.188l.265.133.243-.17c1-.7 2.003-1.306 3.021-1.916l.01-.006.008-.004a48.353 48.353 0 0 1 3.228-1.611l.026-.012.023-.014c.404-.242 1.017-.345 1.637-.717.404-.242.983-.346 1.568-.58l-.183.035c.573 0 1.013-.236 1.347-.32l.133-.033.098-.098a.784.784 0 0 0 .224-.445c.011-.055.009-.065.012-.104.001-.006 1.482-6.164 8.654-10.957zM14.658 101.416c-7.331 0-13.293 5.961-13.293 13.293C1.365 122.022 6.92 128 14.35 128c7.12 0 12.77-5.65 13.088-12.758v-2.361H12.421v4.062h10.135c-.985 3.868-4.159 6.688-8.207 6.688-4.854 0-8.616-3.847-8.616-8.922 0-4.949 4.077-8.924 8.924-8.924 2.292 0 4.545 1.158 6.537 2.851l.389.333 2.662-3.327-.353-.312c-2.729-2.414-5.912-3.914-9.235-3.914zm0 .992c2.879 0 5.68 1.305 8.182 3.404l-1.432 1.79c-2.01-1.614-4.293-2.807-6.75-2.807-5.39 0-9.914 4.42-9.914 9.914 0 5.571 4.223 9.912 9.606 9.912 4.744 0 8.536-3.468 9.394-8.082l.11-.586H13.412v-2.08h13.033v1.332c-.3 6.606-5.501 11.803-12.095 11.803-6.902 0-11.993-5.485-11.993-12.299 0-6.795 5.506-12.3 12.301-12.3zm52.412.442c-1.842 0-3.507.57-4.713 1.677-1.205 1.107-1.925 2.744-1.925 4.754v18.41h4.267V113.67h5.426v-3.961h-5.426v-.428c0-1.15.981-2.164 2.371-2.164h2.987l1.867-4.267zm0 .992h3.336l-.998 2.283H67.07c-1.885 0-3.363 1.44-3.363 3.156v1.418h5.426v1.979h-5.426V126.7h-2.285v-17.42c0-1.777.611-3.109 1.607-4.023.996-.915 2.403-1.416 4.041-1.416zm-18.427 5.56c-5.622 0-10.165 5.103-9.086 10.926.542 3.03 2.592 5.618 5.41 6.81 0 .001 0 .003.002.003 3.375 1.537 6.65.686 9.014-1.123v1.673h3.959V109.71h-3.96v1.711c-1.478-1.208-3.321-2.018-5.34-2.018zm30.404 0c-5.622 0-10.164 5.103-9.086 10.926.542 3.03 2.593 5.62 5.412 6.813 3.374 1.536 6.651.686 9.014-1.123v1.673h3.855l.106-17.982h-3.961v1.713c-1.479-1.209-3.321-2.02-5.34-2.02zm19.857 0c-1.436 0-2.809.537-4.006 1.356v-1.049h-3.755v18.086h4.369v-10.629a3.275 3.275 0 0 1 3.293-3.293c1.766 0 3.29 1.526 3.29 3.293v10.629h4.37v-10.527c0-4.351-3.395-7.756-7.547-7.866h-.006zm18.428 0c-5.622 0-10.164 5.103-9.086 10.926.543 3.03 2.593 5.618 5.41 6.81l.002.003c3.374 1.536 6.65.687 9.012-1.121v1.671h3.855l.11-17.982h-3.965v1.711c-1.478-1.207-3.32-2.018-5.338-2.018zm-88.225.203v18.086h4.37v-10.424c0-1.766 1.524-3.292 3.29-3.292h2.286l1.72-4.37H36.36c-1.354 0-2.52.421-3.496 1.055v-1.055zm19.536.79c2.117 0 4.14.87 5.472 2.296l.86.92V110.7h1.974v16.002h-1.974v-2.812l-.838.8c-2.13 2.033-5.373 3.097-8.768 1.545l-.008-.004-.006-.002c-2.503-1.059-4.34-3.377-4.822-6.078v-.004c-.969-5.233 3.085-9.752 8.11-9.752zm30.404 0c2.117 0 4.14.87 5.472 2.296l.858.92V110.7h1.973l-.094 16.002h-1.88v-2.812l-.837.8c-2.13 2.033-5.373 3.097-8.768 1.545l-.006-.004-.005-.002c-2.503-1.059-4.342-3.377-4.825-6.078v-.004c-.969-5.233 3.087-9.752 8.112-9.752zm19.855 0h.002c3.622.101 6.569 3.038 6.569 6.872v9.536h-2.387v-9.637c0-2.328-1.953-4.285-4.281-4.285-2.418 0-4.285 1.973-4.285 4.285v9.637h-2.387v-16.104h1.773v2.065l.83-.762a6.222 6.222 0 0 1 4.166-1.607zm18.43 0c2.117 0 4.14.87 5.473 2.296l.857.92V110.7h1.975l-.096 16.002h-1.879v-2.812l-.838.8c-2.13 2.034-5.371 3.097-8.765 1.545l-.006-.004-.008-.002c-2.504-1.059-4.342-3.377-4.825-6.078v-.004c-.969-5.233 3.087-9.752 8.112-9.752zm-87.232.203h1.771v2.134l.846-.847c.804-.805 2.108-1.287 3.642-1.287h2.957l-.939 2.384h-1.61c-2.328 0-4.283 1.957-4.283 4.286v9.433H30.1zm18.646 2.283c-3.242 0-5.818 2.682-5.818 5.82a5.886 5.886 0 0 0 6.814 5.813h.002c2.183-.345 4.135-2.198 4.703-4.356l.002-.006v-.008c.89-3.779-2.014-7.264-5.703-7.264zm30.3 0c-3.242 0-5.818 2.682-5.818 5.82a5.886 5.886 0 0 0 6.815 5.813c2.372-.341 4.146-2.23 4.705-4.356l.002-.006v-.008c.89-3.779-2.014-7.264-5.703-7.264zm38.286 0c-3.242 0-5.82 2.682-5.82 5.82a5.886 5.886 0 0 0 6.814 5.813c2.373-.341 4.146-2.23 4.705-4.356l.002-.006.002-.008c.89-3.779-2.014-7.264-5.703-7.264zm-68.586.992a4.89 4.89 0 0 1 4.738 6.04c-.458 1.729-2.189 3.35-3.894 3.62-3.093.466-5.672-1.847-5.672-4.832 0-2.595 2.133-4.828 4.828-4.828zm30.3 0a4.89 4.89 0 0 1 4.74 6.04c-.467 1.76-1.965 3.346-3.888 3.62h-.004c-3.095.47-5.675-1.845-5.675-4.832 0-2.595 2.133-4.828 4.828-4.828zm38.286 0a4.889 4.889 0 0 1 4.738 6.037c-.465 1.762-1.963 3.348-3.886 3.623h-.006c-3.095.47-5.674-1.845-5.674-4.832 0-2.594 2.133-4.828 4.828-4.828z"/>
</svg>;
  }
});