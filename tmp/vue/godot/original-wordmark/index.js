import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'GodotOriginalWordmarkIcon',
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
	<path d="M38.867 106.246c-1.316 0-2.418.598-3.312 1.797-.89 1.195-1.336 2.875-1.336 5.039 0 2.168.426 3.824 1.277 4.98.848 1.16 1.965 1.739 3.352 1.739 1.382 0 2.507-.586 3.37-1.758.864-1.168 1.298-2.844 1.298-5.02 0-2.18-.446-3.855-1.34-5.023-.887-1.172-1.992-1.754-3.309-1.754m-.02 21.512c-3.855 0-6.995-1.25-9.421-3.754-2.426-2.504-3.64-6.156-3.64-10.961 0-4.805 1.226-8.445 3.683-10.922 2.453-2.476 5.62-3.715 9.5-3.715 3.883 0 7.015 1.215 9.398 3.656 2.39 2.434 3.582 6.126 3.582 11.063 0 4.938-1.219 8.613-3.664 11.023-2.441 2.407-5.586 3.61-9.437 3.61m24.629-21.23v12.21c0 .57.043.93.125 1.082.082.149.328.227.738.227 1.512 0 2.656-.563 3.437-1.676.782-1.117 1.172-2.973 1.172-5.574 0-2.598-.406-4.293-1.21-5.082-.813-.79-2.094-1.188-3.848-1.188zm-7.895 18.945V100.98c0-.683.168-1.218.512-1.617.343-.394.789-.593 1.34-.593H64.3c4.36 0 7.672 1.093 9.933 3.27 2.262 2.179 3.395 5.605 3.395 10.288 0 10.016-4.305 15.024-12.918 15.024h-7.03c-1.399 0-2.098-.625-2.098-1.88m37.84-19.226c-1.317 0-2.422.598-3.313 1.797-.89 1.195-1.336 2.875-1.336 5.039 0 2.168.426 3.824 1.278 4.98.847 1.16 1.965 1.739 3.351 1.739 1.383 0 2.508-.586 3.371-1.758.868-1.168 1.297-2.844 1.297-5.02 0-2.18-.445-3.855-1.336-5.023-.89-1.172-1.996-1.754-3.312-1.754m-.02 21.512c-3.855 0-6.992-1.25-9.418-3.754-2.43-2.504-3.644-6.156-3.644-10.961 0-4.805 1.23-8.445 3.683-10.922 2.454-2.476 5.622-3.715 9.504-3.715 3.88 0 7.012 1.215 9.399 3.656 2.386 2.434 3.578 6.126 3.578 11.063 0 4.938-1.219 8.613-3.66 11.023-2.442 2.407-5.59 3.61-9.442 3.61m28.434-1.055c0 .54-1.356.813-4.074.813-2.711 0-4.07-.274-4.07-.813v-20.5h-4.938c-.465 0-.797-.625-.988-1.879a13.758 13.758 0 01-.121-1.836c0-.625.039-1.238.12-1.836.192-1.25.524-1.882.989-1.882h17.894c.465 0 .793.632.989 1.882.082.598.12 1.211.12 1.836 0 .63-.038 1.239-.12 1.836-.196 1.254-.524 1.88-.989 1.88h-4.812zM18.512 112.191c-2.215-.03-4.75.426-4.75.426v4.29h2.55l-.027 1.913c0 .707-.707 1.063-2.12 1.063-1.411 0-2.661-.594-3.743-1.778-1.086-1.187-1.625-2.918-1.625-5.203 0-2.289.527-3.976 1.582-5.066 1.055-1.086 2.437-1.633 4.137-1.633.71 0 1.449.113 2.218.348.77.23 1.282.449 1.543.652.262.207.508.305.743.305.234 0 .609-.27 1.128-.813.524-.547.989-1.37 1.403-2.468.41-1.106.613-1.954.613-2.555 0-.598-.012-1.008-.039-1.227-.574-.625-1.637-1.12-3.188-1.488-1.55-.367-3.285-.55-5.203-.55-4.226 0-7.527 1.32-9.914 3.96-2.386 2.64-3.578 6.067-3.578 10.29 0 4.952 1.219 8.706 3.656 11.265 2.446 2.558 5.653 3.836 9.63 3.836 2.14 0 4.038-.18 5.695-.551 1.66-.363 2.765-.742 3.312-1.121l.164-12.777c0-.743-1.972-1.079-4.187-1.118" fill="#414042" fillRule="evenodd"/>
	<path d="M99.727 51.973s-.122-.73-.188-.723l-13.215 1.281a2.15 2.15 0 00-1.941 2.004l-.363 5.227-10.22.734-.695-4.738a2.173 2.173 0 00-2.132-1.852H57.03a2.176 2.176 0 00-2.133 1.852l-.695 4.738-10.219-.734-.363-5.227a2.158 2.158 0 00-1.941-2.008L28.46 51.25c-.065-.008-.116.723-.187.723l-.015 2.875 11.191 1.816.367 5.273a2.167 2.167 0 001.996 2.008l14.079 1.012a2.169 2.169 0 002.285-1.844l.715-4.875h10.226l.715 4.875a2.166 2.166 0 002.129 1.848c.05 0 .102 0 .152-.004l14.078-1.012a2.167 2.167 0 001.996-2.008l.368-5.273 11.187-1.824zm0 0" fill="#fff" fillRule="evenodd"/>
	<path d="M28.383 30.523v21.403c.043 0 .082 0 .12.004l13.173 1.265a1.42 1.42 0 011.281 1.309l.406 5.793 11.492.816.793-5.347c.102-.692.7-1.207 1.403-1.207h13.898a1.427 1.427 0 011.406 1.207l.79 5.347 11.492-.816.406-5.793a1.42 1.42 0 011.281-1.309l13.168-1.265c.04-.004.078-.004.117-.004v-1.707l.008-.004V30.523c1.856-2.324 3.61-4.89 4.957-7.05-2.058-3.485-4.578-6.602-7.273-9.489a70.654 70.654 0 00-7.215 4.18c-1.148-1.137-2.438-2.062-3.707-3.035-1.246-.996-2.652-1.727-3.984-2.582.394-2.942.593-5.836.671-8.86C79.63 1.966 75.961.82 72.25 0c-1.48 2.477-2.832 5.164-4.012 7.785-1.398-.23-2.804-.316-4.21-.336h-.055c-1.407.02-2.813.106-4.211.336C58.582 5.16 57.23 2.477 55.746 0c-3.707.82-7.371 1.965-10.812 3.688.082 3.023.277 5.917.675 8.859-1.336.855-2.738 1.586-3.988 2.582-1.266.969-2.559 1.898-3.707 3.035a70.295 70.295 0 00-7.219-4.18c-2.691 2.887-5.21 6-7.27 9.489 1.618 2.527 3.352 5.07 4.958 7.05zm0 0" fill="#478cbf" fillRule="evenodd"/>
	<path d="M87.867 55.992l-.41 5.813a1.42 1.42 0 01-1.32 1.308l-14.075.996a1.426 1.426 0 01-1.511-1.203l-.805-5.426H58.262l-.809 5.426a1.422 1.422 0 01-1.508 1.203l-14.078-.996a1.415 1.415 0 01-1.316-1.308l-.41-5.813-11.883-1.137c.004 1.266.02 2.653.02 2.93 0 12.438 15.921 18.418 35.699 18.485h.05c19.778-.067 35.692-6.047 35.692-18.485 0-.281.02-1.66.023-2.93zm0 0" fill="#478cbf" fillRule="evenodd"/>
	<path d="M53.133 39.336c0 4.32-3.516 7.82-7.852 7.82-4.332 0-7.847-3.5-7.847-7.82 0-4.316 3.515-7.816 7.847-7.816 4.336 0 7.852 3.5 7.852 7.816" fill="#fff" fillRule="evenodd"/>
	<path d="M51.441 39.82c0 2.856-2.379 5.172-5.312 5.172-2.934 0-5.313-2.316-5.313-5.172 0-2.855 2.38-5.172 5.313-5.172 2.934 0 5.312 2.317 5.312 5.172" fill="#414042" fillRule="evenodd"/>
	<path d="M63.902 47.879c-1.414 0-2.558-1.024-2.558-2.29v-7.202c0-1.266 1.144-2.29 2.558-2.29s2.563 1.024 2.563 2.29v7.203c0 1.265-1.149 2.289-2.563 2.289m10.758-8.54c0 4.325 3.559 7.829 7.953 7.829 4.39 0 7.953-3.504 7.953-7.828 0-4.32-3.562-7.82-7.953-7.82-4.394 0-7.953 3.5-7.953 7.82" fill="#fff" fillRule="evenodd"/>
	<path d="M76.559 39.82c0 2.856 2.379 5.172 5.312 5.172 2.938 0 5.313-2.316 5.313-5.172 0-2.855-2.375-5.172-5.313-5.172-2.933 0-5.312 2.317-5.312 5.172" fill="#414042" fillRule="evenodd"/>
</svg>;
  }
});