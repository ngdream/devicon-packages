import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SqldeveloperPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#adadad'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M51.395 7.758c-27.396 0-49.604 3.824-49.647 8.54l-.002-.009v27.293c0 4.723 22.227 8.535 49.649 8.535 27.42 0 49.648-3.836 49.648-8.535V16.289l-.002.01c-.043-4.717-22.255-8.541-49.646-8.541zm-17.268 16.57c1.39.09 2.805.169 4.25.236-.574-.026-1.18-.04-1.746-.07-.86-.046-1.665-.112-2.504-.166zm20.453.516c-1.064.012-2.104.037-3.185.037v-.002c-.654 0-1.275-.021-1.922-.025.642.004 1.273.017 1.922.017 1.075 0 2.127-.016 3.185-.027zM1.746 50.562v23.77c0 4.727 22.227 8.535 49.649 8.535 6.502 0 12.672-.228 18.357-.62 4.322-10.913 14.962-18.634 27.412-18.634 1.316 0 2.609.095 3.879.262V50.562c0 4.727-22.228 8.536-49.648 8.536-27.422 0-49.649-3.833-49.649-8.535zM97.164 67.25c-10.278 0-19.151 5.999-23.314 14.686a25.67 25.67 0 0 0-.805 1.884c-.2.522-.392 1.05-.559 1.586v.002a25.753 25.753 0 0 0-.447 1.647c-.03.124-.056.248-.084.373a25.7 25.7 0 0 0-.324 1.676 26.04 26.04 0 0 0-.307 3.986c0 9.287 4.9 17.426 12.254 21.98.485.3.98.584 1.484.852.03.016.062.03.092.047.453.238.917.462 1.385.674.076.034.152.07.229.103 1.001.441 2.036.82 3.1 1.133a25.62 25.62 0 0 0 1.654.426c.092.02.184.044.277.064.536.114 1.08.21 1.629.29l.232.028c.476.065.954.115 1.438.153l.375.03c.56.035 1.122.06 1.691.06a25.78 25.78 0 0 0 14.447-4.412 25.93 25.93 0 0 0 3.825-3.157 25.94 25.94 0 0 0 6.406-10.586 25.654 25.654 0 0 0 1.03-5.043 25.815 25.815 0 0 0 .03-4.877c-.007-.081-.011-.164-.02-.246a25.824 25.824 0 0 0-.347-2.41 25.664 25.664 0 0 0-.447-1.928c-.036-.131-.075-.261-.113-.392a25.648 25.648 0 0 0-.621-1.881c-.035-.091-.073-.18-.108-.271a25.719 25.719 0 0 0-.816-1.89c-.023-.045-.048-.09-.07-.136a25.79 25.79 0 0 0-.989-1.824l-.057-.096a25.85 25.85 0 0 0-1.148-1.736c-.045-.063-.087-.127-.133-.19a25.933 25.933 0 0 0-1.234-1.554c-.077-.09-.156-.179-.235-.268-.43-.49-.879-.966-1.345-1.422-.07-.068-.143-.133-.213-.2a25.986 25.986 0 0 0-1.516-1.347c-.04-.033-.082-.064-.123-.097a25.919 25.919 0 0 0-1.664-1.238c-.027-.019-.053-.039-.08-.057l-.012-.008a25.841 25.841 0 0 0-1.75-1.076c-.074-.042-.147-.087-.222-.129a25.76 25.76 0 0 0-2.094-1.031c-.6-.264-1.213-.507-1.836-.725-.115-.04-.232-.078-.348-.117a25.6 25.6 0 0 0-1.914-.563c-.102-.025-.207-.045-.31-.07a25.664 25.664 0 0 0-2.084-.412l-.01-.002a26.1 26.1 0 0 0-3.879-.289zm-9.102 10.914 24.028 13.871-24.028 13.871V78.164zM1.746 81.316v27.29c0 4.726 22.227 8.535 49.649 8.535 9.98 0 19.136-.536 26.89-1.412-6.478-5.408-10.601-13.541-10.601-22.64a29.6 29.6 0 0 1 .244-3.74 272.19 272.19 0 0 1-16.533.499c-27.422 0-49.649-3.832-49.649-8.532z"/>
</svg>;
  }
});