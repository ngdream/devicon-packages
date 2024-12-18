import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'QodanaPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ff318c'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M74.625 48.066v6.551c-.895-1.066-2.137-1.984-4.148-1.984-3.153 0-6.059 2.433-6.059 6.875v.05c0 4.442 2.957 6.876 6.066 6.883 1.961 0 3.227-.925 4.145-2.168v1.91h3.77V48.067Zm-36.176.442c-5.36 0-9.261 4.047-9.261 8.984v.055c0 4.941 3.847 8.937 9.21 8.937a9.48 9.48 0 0 0 5.176-1.496l1.914 1.711L47.91 64l-1.793-1.52a8.89 8.89 0 0 0 1.543-4.988v-.043c0-4.949-3.851-8.941-9.21-8.941Zm-31.941.304v17.356h17.355V48.812Zm5.195 2.051c2.008 0 3.442 1.492 3.442 3.336v.02a3.34 3.34 0 0 1-.575 1.863l.668.563-.918 1.011-.718-.652a3.546 3.546 0 0 1-1.926.559c-2.004.007-3.434-1.481-3.434-3.325v-.02c0-1.843 1.457-3.355 3.461-3.355Zm4.54.121h2.448c2.04 0 3.45 1.399 3.45 3.223v.02c0 1.828-1.41 3.253-3.45 3.253h-2.449Zm22.152 1.047c3.082 0 5.265 2.485 5.265 5.461v.043a6.025 6.025 0 0 1-.472 2.387l-2.856-2.578-2.434 2.73 2.832 2.406a5.261 5.261 0 0 1-2.277.473c-3.078 0-5.266-2.484-5.266-5.46v-.052c0-2.976 2.13-5.41 5.208-5.41Zm-26.711.149c-1.153 0-1.954.906-1.954 2.02v.019a1.993 1.993 0 0 0 .899 1.707c.57.379 1.297.437 1.922.156h-.004L11.5 55.18l.906-1.02 1.067.965c.117-.281.18-.582.18-.887v-.02a1.982 1.982 0 0 0-.555-1.437 1.968 1.968 0 0 0-1.414-.601Zm7.007.09-1.02.003v3.903h1.02c1.164 0 1.954-.785 1.954-1.934v-.02a1.862 1.862 0 0 0-.547-1.41 1.856 1.856 0 0 0-1.407-.542Zm37.325.359c-4.149 0-7.227 3.101-7.227 6.922v.058c0 3.82 3.027 6.868 7.176 6.868 4.148 0 7.226-3.102 7.226-6.926v-.047c0-3.824-3.027-6.875-7.175-6.875Zm46.816.004c-1.918 0-3.035 1.02-3.902 2.137v-1.887h-3.778v13.3h3.778v-7.417c0-1.79.922-2.707 2.363-2.707 1.441 0 2.285.918 2.285 2.707v7.418h3.774v-8.61c0-3.05-1.665-4.941-4.52-4.941Zm-16.121.101a11.737 11.737 0 0 0-5.168 1.07l.945 2.883a9.798 9.798 0 0 1 3.676-.722c1.887 0 2.856.87 2.856 2.433v.22a9.322 9.322 0 0 0-3.254-.548c-3.153 0-5.364 1.34-5.364 4.242v.051c0 2.63 2.059 4.07 4.57 4.07 1.837 0 3.106-.667 4.024-1.687v1.438h3.64v-7.72c0-1.784-.433-3.25-1.429-4.241-.945-.942-2.437-1.489-4.496-1.489Zm29.098 0a11.709 11.709 0 0 0-5.164 1.07l.94 2.883a9.801 9.801 0 0 1 3.692-.722c1.887 0 2.856.87 2.856 2.433v.22a9.36 9.36 0 0 0-3.258-.548c-3.152 0-5.36 1.34-5.36 4.242v.051h-.003c0 2.63 2.062 4.07 4.57 4.075 1.836 0 3.102-.672 4.023-1.688v1.438h3.641v-7.72c0-1.784-.45-3.25-1.437-4.245-.95-.942-2.438-1.489-4.5-1.489Zm-44.364 3.102c1.766 0 3.23 1.465 3.23 3.672v.05c0 2.212-1.464 3.672-3.23 3.672-1.761 0-3.254-1.46-3.254-3.671v-.051c0-2.235 1.493-3.672 3.254-3.672Zm-15.48.043c2.086 0 3.5 1.723 3.5 3.672v.058c0 1.957-1.29 3.621-3.45 3.618-2.09 0-3.503-1.723-3.503-3.676v-.047c0-1.961 1.281-3.625 3.453-3.625Zm30.703 4.45a5.805 5.805 0 0 1 2.41.495v.672h-.008c0 1.363-1.191 2.332-2.945 2.332-1.215 0-2.059-.598-2.059-1.613v-.05c0-1.188.989-1.837 2.602-1.837Zm29.117 0a5.8 5.8 0 0 1 2.406.495v.672h-.011c0 1.363-1.196 2.332-2.938 2.332-1.219 0-2.062-.598-2.062-1.613v-.05c0-1.188.988-1.837 2.605-1.837ZM8.68 62.913h6.508V64H8.68Zm22.101 9.73v6.543h.692V78.3a2.098 2.098 0 0 0 1.777.988c1.129 0 2.215-.894 2.215-2.414v-.016c0-1.527-1.106-2.406-2.215-2.406-.852 0-1.398.477-1.777 1.031v-2.84Zm42.223.133v.77h.789v-.77Zm-25.938.137v4.211c0 .992-.52 1.504-1.23 1.504-.652 0-1.047-.317-1.434-.895l-.511.434a2.15 2.15 0 0 0 1.937 1.113 1.933 1.933 0 0 0 1.383-.523c.355-.348.57-.914.57-1.649v-4.195Zm10.957 0v6.277h2.793c1.371 0 2.278-.629 2.278-1.71v-.02c0-.867-.602-1.3-1.344-1.52a1.517 1.517 0 0 0 .992-1.453v-.015a1.38 1.38 0 0 0-.402-1.004c-.36-.352-.922-.555-1.64-.555Zm-3.293.238v1.399h-.648v.61h.648v2.8c0 .941.567 1.309 1.31 1.309a1.73 1.73 0 0 0 .835-.196v-.594c-.207.11-.438.165-.672.16-.465 0-.781-.203-.781-.769v-2.71h1.473v-.61h-1.473v-1.399Zm3.997.395h1.91c.898 0 1.39.406 1.39 1.023v.028c0 .734-.593 1.12-1.445 1.12h-1.855Zm-7.438.906c-1.285 0-2.227 1.078-2.227 2.414v.016c0 1.437 1.055 2.414 2.325 2.406a2.372 2.372 0 0 0 1.91-.867l-.434-.387c-.367.422-.902.66-1.46.653-.825 0-1.536-.563-1.633-1.57h3.687a1.97 1.97 0 0 0 0-.216c0-1.363-.797-2.449-2.168-2.449Zm26.23 0a1.761 1.761 0 0 0-1.585.906v-.808h-.704l.008 4.636h.696v-2.652c0-.87.574-1.453 1.39-1.453.813 0 1.281.531 1.281 1.398v2.707h.688V76.31c0-1.102-.652-1.856-1.773-1.856Zm-10.703.02c-.8.03-1.414.57-1.73 1.289V74.55h-.684l-.007 4.636h.69v-1.843c0-1.403.825-2.13 1.84-2.13h.055v-.741a1.15 1.15 0 0 0-.164 0Zm15.274.007c-.914 0-1.578.532-1.578 1.329v.015c0 .844.804 1.086 1.531 1.305.61.164 1.16.348 1.16.812v.02c0 .45-.406.734-.96.734a2.725 2.725 0 0 1-1.606-.59l-.352.493c.55.43 1.223.668 1.922.675.922 0 1.648-.52 1.648-1.39v-.004c0-.832-.77-1.11-1.488-1.328-.617-.188-1.195-.364-1.195-.797v-.016c0-.386.351-.675.898-.675.493.019.965.175 1.371.449l.317-.52c-.5-.324-1.074-.5-1.668-.512Zm-12.465.012a3.76 3.76 0 0 0-1.684.387l.215.562a3.26 3.26 0 0 1 1.41-.34c.868 0 1.38.43 1.38 1.266v.16a4.874 4.874 0 0 0-1.426-.199c-1.176 0-1.98.52-1.98 1.496v.02c0 .953.87 1.445 1.726 1.441a2.026 2.026 0 0 0 1.675-.8v.703h.66v-2.829a1.83 1.83 0 0 0-.476-1.355c-.34-.34-.848-.512-1.5-.512Zm-33.703.055 2.105 4.621c-.277.648-.535.867-.949.867a1.463 1.463 0 0 1-.726-.168l-.23.547c.304.156.644.234.983.23.7 0 1.149-.343 1.543-1.3l1.954-4.793h-.735l-1.496 3.863-1.687-3.867Zm37.129.004v4.636h.687V74.55Zm-21.778.488c.922 0 1.407.734 1.477 1.578h-2.984c.09-.91.699-1.578 1.507-1.578Zm-18.148.035c.879 0 1.629.7 1.629 1.793v.016c0 1.125-.734 1.789-1.629 1.789a1.737 1.737 0 0 1-1.21-.55 1.732 1.732 0 0 1-.47-1.247v-.016a1.735 1.735 0 0 1 1.68-1.785Zm25.602 1.266h1.98c1.094 0 1.672.394 1.672 1.074v.016c0 .703-.594 1.125-1.547 1.125h-2.105Zm10.867.5c.46 0 .918.066 1.363.195v.45c0 .738-.7 1.269-1.555 1.257-.625 0-1.164-.34-1.164-.926V77.8c0-.586.489-.961 1.356-.961Zm0 0"/>
</svg>;
  }
});