import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SketchLineWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#fdad00'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m16.376 49.282-9.107.95-.016.01-.025.003-.025.027-.108.062-.001.002-.008-.002L0 59.73l.01.02v.292l16.165 18.676h.386l16.234-18.674v-.314l-7.085-9.396-.17-.101-5.43-.563-3.71-.388-.002.002-.02-.002zm-.676.606-8.626 9.277.454-8.417zm1.355.006 8.185.856.456 8.44zm-.68.015 8.917 9.595.115.125H7.33Zm9.41 1.435 6.211 8.242.024.03h-5.792Zm-18.832.012-.444 8.273H.71Zm52.289 1.575v22.495h3.222V71.15l2.587-2.522 4.943 6.569.19.238h4.005l-.74-.967-6.104-8.045 5.604-5.577 1.033-1.033h-4.407l-.175.173-6.936 6.983-.01-13.437v-.602zm55.353.039v22.456h3.282v-9.14a3.511 3.511 0 0 1 3.714-3.85l.008.002h.008c1.095 0 1.871.307 2.391.892s.8 1.479.8 2.696v9.4H128V65.63c0-1.828-.569-3.376-1.622-4.462-1.052-1.086-2.58-1.7-4.444-1.7-1.496-.042-2.91.526-4.06 1.466l-.057-7.361v-.604zm-54.854.46h2.214v.103l.01 14.645 7.785-7.838.03-.027h2.998l-.18.18-5.914 5.884 6.367 8.394.126.166h-2.754l-.035-.045-5.279-7.016-3.144 3.064v3.987H59.74zm55.353.039h2.224v.107l.066 8.384.417-.402a5.71 5.71 0 0 1 4.121-1.59h.008c1.758 0 3.139.566 4.09 1.548.95.981 1.481 2.39 1.481 4.115v9.296h-2.205v-8.9c0-1.294-.297-2.321-.925-3.028-.627-.705-1.569-1.057-2.757-1.058a4.019 4.019 0 0 0-4.236 4.368v8.618h-2.284zm-66.12.2c-2.275 0-4.155.677-5.467 1.812-1.31 1.132-2.046 2.723-2.049 4.502a5.111 5.111 0 0 0 2.129 4.525l.008.006.007.004a10.907 10.907 0 0 0 4.334 1.49l.314.061.321.06.008.003a10.886 10.886 0 0 1 3.51 1.06h.003a2.513 2.513 0 0 1 1.32 2.39v.017c0 1.019-.408 1.774-1.21 2.314-.8.54-2.019.848-3.602.848-1.575 0-2.741-.374-3.54-1.054-.798-.68-1.25-1.68-1.352-3.008v-.554h-3.264v.626c.089 2.108.85 3.888 2.232 5.13 1.383 1.243 3.373 1.94 5.883 1.94 2.392 0 4.42-.62 5.862-1.733 1.44-1.112 2.28-2.728 2.283-4.643a5.311 5.311 0 0 0-2.125-4.593l-.006-.004-.008-.006a10.909 10.909 0 0 0-4.317-1.63l-.388-.093-.44-.091c-1.82-.383-3-.745-3.689-1.217-.69-.471-.93-1.017-.93-1.96 0-.922.378-1.677 1.094-2.227.716-.55 1.783-.885 3.15-.885h.01l.011-.002a3.948 3.948 0 0 1 4.275 4.047v.603h3.191v-.61c-.052-2.11-.79-3.902-2.1-5.159-1.308-1.256-3.178-1.968-5.457-1.968zm0 .5c2.176 0 3.908.672 5.114 1.83s1.896 2.808 1.945 4.809v.1H53.84v-.096a4.455 4.455 0 0 0-4.805-4.55c-1.443.002-2.62.353-3.444.987a3.23 3.23 0 0 0-1.289 2.621c0 1.041.34 1.822 1.146 2.373.806.55 2.033.906 3.87 1.292l.433.092.391.093.01.002a10.416 10.416 0 0 1 4.135 1.556 4.813 4.813 0 0 1 1.92 4.164v.015c0 1.776-.757 3.226-2.09 4.256-1.333 1.03-3.252 1.63-5.558 1.63-2.418 0-4.275-.666-5.55-1.812-1.274-1.145-1.981-2.78-2.066-4.781v-.106h2.266v.094c.11 1.423.614 2.571 1.526 3.349.912.777 2.21 1.173 3.865 1.173 1.647 0 2.96-.31 3.881-.932.918-.618 1.42-1.564 1.425-2.715a3.015 3.015 0 0 0-1.586-2.865l-.002-.002h-.004a11.376 11.376 0 0 0-3.673-1.11l-.298-.058-.322-.06-.007-.002a10.414 10.414 0 0 1-4.14-1.421 4.607 4.607 0 0 1-1.919-4.084v-.018c0-1.647.669-3.09 1.877-4.134 1.209-1.045 2.965-1.69 5.143-1.69zm42.085 1.524v4.111h-2.794v2.909h2.793v8.243c0 1.435.376 2.579 1.117 3.36.742.783 1.833 1.18 3.182 1.18a9.011 9.011 0 0 0 1.236-.072h.007l.443-.084.456-.127v-3.017l-.7.15h-.378l-.02.002a5.725 5.725 0 0 1-.717.068h-.064c-.543 0-.86-.12-1.062-.357-.203-.237-.318-.65-.318-1.306v-8.04h3.322v-2.909H94.24v-4.111zm.499.499h2.183v4.111h3.321v1.91h-3.321v8.54c0 .712.117 1.254.438 1.63.321.377.82.532 1.44.532h.08c.249-.007.496-.033.741-.07h.412l.148-.031v2.021l-.07.02-.4.074a8.543 8.543 0 0 1-1.171.068h-.002c-1.253 0-2.187-.356-2.819-1.023-.632-.668-.98-1.67-.98-3.018v-8.743h-2.794v-1.91h2.793zm-10.89 3.226c-4.485 0-7.69 3.626-7.69 8.146 0 4.514 3.076 8.174 7.718 8.176h.004a7.337 7.337 0 0 0 7.241-5.236l.244-.78h-3.3l-.138.394a4.06 4.06 0 0 1-3.957 2.633h-.014c-2.294.028-4.167-1.705-4.42-3.955l11.278-.03h.582v-1.373c0-4.554-3.068-7.975-7.547-7.975zm24.722.031-.573.02.084.084c-4.224.276-7.223 3.724-7.223 8.072 0 4.532 3.236 8.156 7.731 8.156h.002a7.194 7.194 0 0 0 7.34-5.967l.138-.717h-3.234l-.127.454-.002.008a4 4 0 0 1-4.105 3.193h-.012c-1.331 0-2.434-.52-3.218-1.416-.785-.896-1.25-2.177-1.25-3.711 0-1.534.465-2.82 1.25-3.721.784-.901 1.888-1.425 3.218-1.425h.012a3.999 3.999 0 0 1 4.105 3.193l.002.007.127.455h3.21l-.134-.718a7.195 7.195 0 0 0-7.331-5.965v-.002h-.01zm-24.721.468c4.228 0 7.048 3.143 7.048 7.476v.873h-.084L75.78 68.3l.013.261a4.938 4.938 0 0 0 4.98 4.689 4.563 4.563 0 0 0 4.441-2.956v-.002l.024-.068h2.269l-.041.135-.002.002a6.832 6.832 0 0 1-6.756 4.88H80.7c-4.385 0-7.222-3.384-7.222-7.676 0-4.286 2.972-7.647 7.19-7.647zm24.73.031h.009a6.693 6.693 0 0 1 6.832 5.554v.002l.025.13h-2.23l-.02-.064a4.503 4.503 0 0 0-4.61-3.59c-1.46 0-2.716.59-3.59 1.594-.875 1.005-1.372 2.416-1.372 4.05s.496 3.042 1.372 4.042c.875.999 2.13 1.583 3.59 1.584a4.503 4.503 0 0 0 4.61-3.59l.02-.064h2.25l-.025.13v.002a6.693 6.693 0 0 1-6.833 5.554h-.018c-4.229 0-7.232-3.36-7.232-7.657 0-4.296 2.983-7.677 7.223-7.677zM.76 60.133H6.6l8.574 16.653Zm6.409 0H25.57l-9.185 17.839zm18.969 0h5.842L17.563 76.786Zm54.596 1.854-.012.002a4.837 4.837 0 0 0-4.844 4.184l-.039.284h9.669l-.026-.273c-.217-2.346-2.175-4.1-4.502-4.154v-.039zm.006.501c2.087-.071 3.835 1.438 4.167 3.47h-8.44c.417-2.013 2.159-3.486 4.242-3.468z"/>
</svg>;
  }
});