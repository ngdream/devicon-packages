import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CodeigniterPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ee4323'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M16.399 120.213c-2.156 0-2.783-1.255-2.783-3.136 0-.627.079-1.334.176-2.079.472-3.253 1.625-5.114 4.408-5.114 1.882 0 2.8.842 2.8 2.371V113h1.867c.021 0 .021-.686.021-.842 0-2.234-1.353-4.353-4.685-4.353-4.528 0-6.39 2.46-7.076 7.282a12.392 12.392 0 00-.157 1.896c0 2.842 1.118 5.427 5.116 5.427 3.038 0 4.842-1.481 5.9-3.304l-1.784-1.201c-1.156 1.823-2.411 2.308-3.803 2.308zm12.251-8.977c-3.627 0-5.194 1.861-5.723 5.565-.06.433-.099.883-.099 1.294 0 2.391 1.117 4.293 4.213 4.293 3.627 0 5.215-1.941 5.744-5.587.059-.47.098-.901.098-1.332.001-2.43-1.155-4.233-4.233-4.233zm1.509 5.566c-.392 2.686-1.234 3.509-2.823 3.509-1.273 0-1.9-.529-1.9-2.117 0-.392.04-.862.118-1.392.392-2.665 1.176-3.488 2.783-3.488 1.294 0 1.94.529 1.94 2.136 0 .392-.04.843-.118 1.352zM42 108l-.607 3.598c-.039.313-.019.209.099.503-.568-.431-1.588-.716-2.274-.716-3.254 0-5.076 1.473-5.664 5.589-.078.49-.098.903-.098 1.314 0 3 1.764 4.118 4.135 4.118 1.001 0 1.98.021 2.744-.625L40.53 123h1.882l2.195-15H42zm-1.862 11.742a4.496 4.496 0 01-2.272.647c-1.431 0-1.823-.745-1.823-1.94 0-.451.059-.979.138-1.549.45-3.116 1.45-3.666 2.744-3.666.842 0 1.488.138 2.097.472l-.884 6.036zm10.193-8.506c-3.588 0-5.272 1.704-5.841 5.565-.06.471-.099.922-.099 1.353 0 2.646 1.353 4.234 4.331 4.234 2.313 0 4.039-.961 4.96-2.725l-1.98-.804c-.568.862-1.332 1.45-2.685 1.45-1.45 0-2.038-.39-2.038-1.684 0-.255.02-.626.059-.626h7.075c.099-1 .215-1.707.215-2.293 0-1.959-.744-4.47-3.997-4.47zM51.683 116h-4.312c.432-1 1.156-2.548 2.646-2.548 1.156 0 1.725.676 1.725 1.832-.001.196-.019.716-.059.716zm10.188-5l.235-2h-5.528l-.234 2h1.45l-1.567 10h-1.452l-.234 2h5.527l.236-2h-1.451l1.567-10zm11.232 3l.706-2h-1.901l-1.371.283c-.765-.489-1.804-.856-2.783-.856-2.804 0-5.194 1.354-5.194 4.432 0 .863.313 1.56.685 2.031-.587.313-1.097.837-1.097 1.544 0 .313.117.634.353.927-1.177.707-1.9 1.878-1.9 3.249 0 2.647 2.763 3.212 4.88 3.212 2.665 0 5.841-.609 5.841-4 0-1.156-.725-2.059-2.822-2.451l-3.783-.707c-.431-.079-.529-.216-.529-.412 0-.294.178-.45.471-.45l.255.039c.51.117 1.098.177 1.705.177 2.725 0 5.155-1.177 5.155-4.234 0-.432-.078-.724-.274-1.195.333.157.765.412.94.412h.663zm-5.389 8.113c.744.138.998.412.998.902 0 1.588-1.705 1.784-2.939 1.784-1.882 0-2.587-.45-2.587-1.451 0-.882.254-1.293.843-1.921l3.685.686zm-.805-5.134c-1.137 0-1.764-.411-1.764-1.392 0-1.45.843-2.293 2.313-2.293 1.176 0 1.745.49 1.745 1.449 0 1.451-.824 2.236-2.294 2.236zm13.157-5.743c-1.098 0-2.077.539-3.293 1.498l-.176-.734H74.44l-1.509 11h2.607l1.137-8.342c.765-.47 1.705-1.153 2.509-1.153.979 0 1.333.473 1.333 1.374 0 .216-.021.855-.06 1.09L79.498 123h2.607l.959-7.088c.04-.332.079-.878.079-1.191.001-1.864-.882-3.485-3.077-3.485zm8.029 9.008l.02-.269L89.251 112h-4.332l-.273 2h1.9c-.157 0-.255.175-.274.333l-.784 5.311a9.195 9.195 0 00-.058 1.002c0 1.372.744 2.354 2.272 2.354h1.333l.294-2h-.842c-.295 0-.392-.521-.392-.756zM89.78 108h-2.548c-.157 0-.157-.577-.176-.381l-.354 2.818c-.02.177-.02.563.137.563h2.549c.157 0 .157-.685.176-.863l.354-2.175c.02-.196.02.038-.138.038zm5.316 12.311c-.646 0-.96-.275-.96-.862l.02-.04.823-5.409h2.979l.901-2h-3.606l.607-4.401-2.743.877-.491 3.524h-1.587l-.274 2h1.842c-.176 1-.353.351-.372.548l-.706 4.743c-.039.216-.039.373-.039.568 0 1.862 1.372 2.559 3.02 2.559 1.528 0 2.763-.446 3.724-1.251l-1.216-1.496c-.609.372-1.02.64-1.922.64zm9.565-9.075c-3.587 0-5.272 1.704-5.841 5.565-.059.471-.098.922-.098 1.353 0 2.646 1.352 4.234 4.331 4.234 2.313 0 4.039-.961 4.959-2.725l-1.979-.804c-.568.862-1.333 1.45-2.686 1.45-1.449 0-2.038-.39-2.038-1.684 0-.255.021-.626.06-.626h7.075c.098-1 .216-1.707.216-2.293 0-1.959-.745-4.47-3.999-4.47zm1.353 4.764h-4.312c.431-1 1.155-2.548 2.646-2.548 1.156 0 1.725.676 1.725 1.832-.001.196-.02.716-.059.716zm9.859-4.764c-.941 0-1.823.539-2.705 1.38l-.157-.616h-2.155l-1.51 11h2.627l1.156-8.518c.686-.411 1.47-.762 2.215-.762.471 0 .921-.075 1.352-.016l.335-2.273c-.394-.078-.786-.195-1.158-.195zM49.31 100.121c-5.933-2.564-11.485-9.082-11.498-15.751-.016-7.271 4.592-13.444 10.323-17.501-.689 2.603-1.065 4.984.642 7.312a6.913 6.913 0 006.99 2.646c6.132-1.342 6.413-8.083 2.778-12.01-3.594-3.889-7.071-8.282-5.703-13.922.685-2.827 2.421-5.475 4.62-7.368-1.69 4.442 3.113 8.823 6.278 11.005 5.49 3.786 11.513 6.647 16.561 11.085 5.31 4.664 9.231 10.971 8.439 18.285-.858 7.928-7.158 13.442-14.224 16.226 14.932-3.296 30.361-14.885 30.677-31.446.262-13.624-9.084-24.109-20.662-30.112l-.605-.33c.318.771.422 1.427.41 2.014a7.02 7.02 0 00.194-1.337 6.516 6.516 0 01-.212 1.616l.018-.279a6.788 6.788 0 01-.857 2.043l.17-.183c-2.31 3.831-8.563 4.663-11.652.696-4.966-6.381.104-13.261.813-20.018.888-8.469-4.423-16.69-11.008-21.61 3.627 5.867-1.151 13.629-4.974 17.968-3.707 4.207-8.215 7.719-12.307 11.541-4.396 4.105-8.622 8.429-12.235 13.247-7.226 9.643-11.65 21.771-8.399 33.802 3.249 12.022 13.663 19.675 25.423 22.381z"/>
</svg>;
  }
});