import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'DenojsOriginalWordmarkIcon',
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
	<path d="M64 1.47c-27.617 0-50 22.384-50 50 0 27.618 22.383 50 50 50s50-22.382 50-50c0-27.616-22.383-50-50-50zM89.879 17.7l.018-.058.645-2.422.293.215a43.079 43.079 0 0 1 3.847 3.223l-.078.254-.018.058a2.444 2.444 0 0 1-2.812 1.621 2.436 2.436 0 0 1-1.895-2.89zm-11.172 4.61.018-.058c.371-1.25 1.7-1.993 2.989-1.66a2.457 2.457 0 0 1 1.718 2.949v.059l-2.617 9.668-.214-.176a26.033 26.033 0 0 0-4.122-2.5zm-8.672-10.762.018-.058 1.172-4.356.352.059c1.484.254 2.969.586 4.414.977l-1.23 4.59-.019.058a2.444 2.444 0 0 1-2.812 1.621 2.436 2.436 0 0 1-1.895-2.89zM51.91 18.97l.018-.058 3.086-11.465.332-.059a46.726 46.726 0 0 1 4.649-.664 2.32 2.32 0 0 1-.018 1.094l-.019.059-3.32 12.305-.018.058a2.444 2.444 0 0 1-2.813 1.621 2.436 2.436 0 0 1-1.894-2.89zM23.551 45.337c-.371 1.25-1.7 1.992-2.969 1.66a2.312 2.312 0 0 1-1.21-.742 44.77 44.77 0 0 1 5.214-16.367c.196 0 .39.018.586.078a2.453 2.453 0 0 1 1.739 2.95l-.019.058-3.32 12.305zm10 6.719v.059l-3.32 12.305-.018.058c-.372 1.23-1.641 1.953-2.91 1.66-1.31-.312-2.11-1.64-1.797-2.949v-.059l3.32-12.305.018-.058c.371-1.25 1.7-1.992 2.988-1.66a2.457 2.457 0 0 1 1.72 2.949zm.957-16.758c-1.308-.313-2.11-1.64-1.797-2.95l.019-.058 3.32-12.305.018-.059c.371-1.25 1.7-1.992 2.969-1.66a2.442 2.442 0 0 1 1.738 2.93l-.018.078-3.32 12.305-.019.058c-.37 1.23-1.64 1.954-2.91 1.66zm6.445 42.012-.018.058c-.37 1.23-1.64 1.953-2.91 1.66-1.309-.312-2.11-1.64-1.797-2.949l.018-.058 3.32-12.305.019-.079.156-.37a21.945 21.945 0 0 0 4.219 2.87zm10.06 7.52-.019.058-2.363 8.809-.332-.137a41.899 41.899 0 0 1-4.2-1.816l2.188-8.125.018-.059a2.428 2.428 0 0 1 2.97-1.66c1.288.332 2.05 1.64 1.737 2.93zm13.651-6.231-.058.273v.059l-3.32 12.305-.019.059a2.444 2.444 0 0 1-2.813 1.62 2.446 2.446 0 0 1-1.894-2.89v-.059l3.32-12.305.018-.058a2.44 2.44 0 0 1 2.989-1.66c.664.175 1.21.625 1.523 1.23l.078.352.117.566.078.41zm32.48 3.183c-6.953 7.598-16.484 12.794-27.207 14.22l-.097-.645-.176-1.29-.156-.937-.176-1.23-.234-1.504L69 89.81l-.214-1.426-.137-.84-.176-1.093-.176-1.055-.176-1.016-.175-.996-.157-.976-.176-.938-.156-.898-.117-.664-.137-.645-.078-.41-.156-.82-.117-.586-.137-.723-.117-.508-.098-.488-.097-.469-.059-.312-.136-.586-.098-.43-.097-.43-.079-.273-.097-.39-.078-.372-.098-.37-.097-.352-.059-.215-.098-.332-.078-.313-.058-.214-.079-.196-.058-.176-.078-.273-.059-.195-.039-.117a7.35 7.35 0 0 0-.351-.918l-.059-.117.45-1.172-1.778.058-.488.019c-16.134.332-26.544-6.524-26.544-17.266 0-11.387 11.328-20.547 25.859-20.547 6.992 0 12.988 1.933 17.715 5.625 4.023 3.144 6.972 7.48 8.496 12.383l.039.117.039.137.078.253.117.469.312 1.094.332 1.25.567 2.07.898 3.281 1.445 5.39 1.64 6.134 2.638 9.863.996 3.71zm2.461-48.866-.018.058-3.32 12.305-.019.059c-.37 1.23-1.64 1.953-2.91 1.66-1.308-.312-2.11-1.64-1.797-2.95l.019-.058 3.32-12.305v-.058a2.482 2.482 0 0 1 2.988-1.66 2.47 2.47 0 0 1 1.739 2.949zm8.399 16.406-3.34 12.304v.06a2.447 2.447 0 0 1-3.008 1.718 2.447 2.447 0 0 1-1.719-3.008l.019-.058 3.32-12.305.018-.06c.371-1.25 1.7-1.991 2.97-1.66a2.442 2.442 0 0 1 1.737 2.93zm-39.707-8.204a3.125 3.125 0 0 1-3.125 3.125 3.125 3.125 0 0 1-3.125-3.125 3.125 3.125 0 0 1 3.125-3.125 3.125 3.125 0 0 1 3.125 3.125zm43.568 85.866c-2.913 0-5.425-.455-7.536-1.374-2.112-.92-3.74-2.284-4.888-4.114-1.137-1.83-1.71-4.141-1.71-6.935 0-2.795.573-5.097 1.71-6.936 1.138-1.83 2.767-3.194 4.888-4.095 2.111-.901 4.623-1.347 7.536-1.347 2.912 0 5.424.446 7.536 1.347 2.111.9 3.741 2.266 4.887 4.095 1.138 1.83 1.712 4.141 1.712 6.936 0 2.794-.574 5.096-1.712 6.935-1.137 1.83-2.766 3.204-4.887 4.114-2.112.92-4.633 1.374-7.536 1.374zm0-5.488c1.383 0 2.53-.255 3.44-.764a4.704 4.704 0 0 0 2.03-2.157c.437-.929.655-2.04.655-3.332v-1.301c0-1.293-.218-2.412-.655-3.35a4.536 4.536 0 0 0-2.03-2.157c-.919-.491-2.066-.746-3.44-.746s-2.567.246-3.468.746a4.566 4.566 0 0 0-2.002 2.158c-.437.946-.656 2.066-.656 3.349v1.301c0 1.293.219 2.403.656 3.332a4.737 4.737 0 0 0 2.002 2.157c.901.51 2.057.764 3.468.764zm-43.005 4.951v-23.719h6.389l.537 3.65h.364a10.053 10.053 0 0 1 2.494-2.366 10.698 10.698 0 0 1 3.085-1.375c1.11-.3 2.248-.446 3.423-.446 2.01 0 3.695.337 5.06 1.01a6.779 6.779 0 0 1 3.104 3.059c.7 1.365 1.055 3.094 1.055 5.197v14.99H86.5V112.54c0-.72-.1-1.356-.292-1.912a3.633 3.633 0 0 0-.828-1.374c-.364-.364-.82-.628-1.374-.81-.556-.182-1.174-.273-1.866-.273-1.02 0-1.939.227-2.767.673a5.167 5.167 0 0 0-1.957 1.82c-.482.765-.719 1.639-.719 2.631v13.143H68.87zm-17.448.537c-2.967 0-5.525-.446-7.673-1.329-2.148-.882-3.795-2.238-4.951-4.077-1.156-1.83-1.73-4.169-1.73-7.017s.574-5.097 1.712-6.936c1.137-1.83 2.757-3.194 4.86-4.095 2.102-.901 4.587-1.347 7.472-1.347s5.443.436 7.518 1.301c2.066.874 3.65 2.203 4.724 4.005 1.083 1.802 1.62 4.095 1.62 6.89v1.756h-19.85c.064 1.256.319 2.312.792 3.15.464.837 1.165 1.474 2.093 1.892.928.42 2.084.628 3.468.628.783 0 1.502-.09 2.157-.273a6.411 6.411 0 0 0 1.757-.764c.51-.328.91-.72 1.192-1.174.282-.446.446-.974.473-1.575h7.827c0 1.411-.318 2.667-.946 3.777-.628 1.11-1.538 2.048-2.722 2.813-1.183.764-2.603 1.347-4.25 1.756-1.647.4-3.495.61-5.534.61zm-6.253-15.08h11.568c0-.747-.127-1.402-.382-1.957a3.893 3.893 0 0 0-1.102-1.42 4.759 4.759 0 0 0-1.71-.874 7.771 7.771 0 0 0-2.158-.291c-1.256 0-2.33.182-3.194.537-.874.364-1.557.874-2.048 1.556-.492.674-.82 1.493-.965 2.448zm-43.16 14.543V95.53h15.118c3.568 0 6.626.574 9.156 1.711 2.54 1.138 4.478 2.858 5.825 5.152 1.347 2.294 2.03 5.151 2.03 8.574s-.674 6.28-2.03 8.573-3.295 4.023-5.825 5.179c-2.54 1.156-5.588 1.73-9.156 1.73zm8.592-6.57h6.207c1.32 0 2.503-.183 3.559-.538 1.047-.364 1.938-.883 2.676-1.575.737-.691 1.292-1.547 1.665-2.566.373-1.02.565-2.175.565-3.468v-1.484c0-1.32-.192-2.484-.565-3.485a6.813 6.813 0 0 0-1.665-2.567c-.738-.7-1.63-1.238-2.676-1.602-1.047-.364-2.239-.537-3.559-.537h-6.207z"/>
</svg>;
  }
});