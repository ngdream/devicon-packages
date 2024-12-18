import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TraefikmeshLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#9D0FB0'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M44.097 24.585c-2.962-.09-5.06 1.872-5.71 4.201-.649 2.33.13 5.091 2.71 6.548l9.052 5.103a1.224 1.224 0 0 1-.002 2.16L25.79 56.303a2.986 2.986 0 0 1-2.934 0L8.67 48.301l-.194-.106-.008-.004c-1.63-.822-3.238-.852-4.577-.347-1.34.507-2.41 1.526-3.073 2.758-.663 1.232-.923 2.69-.607 4.086.317 1.397 1.226 2.72 2.812 3.628h.002l7.669 4.323a1.23 1.23 0 0 1 0 2.16h-.002v.002l-7.68 4.322-.182.103-.004.003a5.754 5.754 0 0 0-2.033 7.868 5.75 5.75 0 0 0 7.858 2.04l.002-.002 14.198-7.99a2.982 2.982 0 0 1 2.933 0l24.119 13.596c.39.22.63.633.63 1.08 0 .45-.238.861-.628 1.08l-.003.001-10.206 5.751-.187.117-.004.002c-1.514.978-2.35 2.331-2.602 3.729-.252 1.397.065 2.825.769 4.02.703 1.194 1.803 2.164 3.147 2.62 1.345.458 2.934.38 4.522-.473l.004-.002 16.712-9.424a2.991 2.991 0 0 1 2.933 0l16.563 9.339.194.105.006.002a5.752 5.752 0 0 0 7.654-2.408h-.002a5.752 5.752 0 0 0-2.208-7.716h-.002L77.14 86.898a1.228 1.228 0 0 1 0-2.16l24.34-13.715a2.969 2.969 0 0 1 2.93 0l14.935 8.42.189.1a5.756 5.756 0 0 0 7.783-2.337v-.002a5.752 5.752 0 0 0-2.34-7.782l.01.004-8.421-4.75a1.233 1.233 0 0 1-.63-1.078v-.002a1.224 1.224 0 0 1 .628-1.076l8.378-4.725.192-.109.01-.008c1.512-.98 2.347-2.334 2.597-3.73.25-1.398-.067-2.825-.772-4.02-.703-1.193-1.8-2.162-3.143-2.62-1.344-.456-2.931-.38-4.52.467l-.006.003-14.89 8.397a2.998 2.998 0 0 1-2.933 0h-.003L77.41 42.608a1.225 1.225 0 0 1 0-2.16l8.916-5.025.186-.108.005-.002c1.573-.962 2.45-2.324 2.72-3.739.269-1.415-.048-2.87-.762-4.083-.715-1.214-1.834-2.196-3.202-2.647-1.368-.45-2.983-.345-4.587.565l-15.437 8.686a2.998 2.998 0 0 1-2.936 0h-.002l-15.571-8.78-.649-.352-.059.12c-.623-.25-1.261-.478-1.934-.498Zm-.033 1.015a4.732 4.732 0 0 1 2.013.518l.17.087.005.002 15.563 8.774a4.015 4.015 0 0 0 3.931 0l15.438-8.687.003-.002c1.384-.785 2.662-.847 3.768-.484 1.106.365 2.044 1.178 2.645 2.199.6 1.02.856 2.235.638 3.378-.217 1.142-.89 2.23-2.246 3.058l-.004.005-.167.093-8.911 5.024c-1.507.85-1.507 3.079 0 3.928l24.069 13.567a4.015 4.015 0 0 0 3.93 0l14.874-8.387c1.368-.73 2.627-.772 3.715-.403 1.088.37 2.006 1.173 2.597 2.176.591 1.001.849 2.193.646 3.324-.203 1.13-.846 2.212-2.147 3.057h-.002l-.154.087-8.372 4.722a2.247 2.247 0 0 0-1.147 1.96v.003c0 .812.439 1.563 1.147 1.962l8.428 4.752.004.004a4.723 4.723 0 0 1 1.924 6.408 4.726 4.726 0 0 1-6.408 1.926l-.179-.096-14.925-8.414a3.988 3.988 0 0 0-3.931 0L76.641 83.853h-.002c-1.502.854-1.502 3.076 0 3.928l.002.002 10.054 5.666a4.722 4.722 0 0 1 1.818 6.35v.001a4.723 4.723 0 0 1-6.302 1.983l-.166-.09-16.556-9.334a4.01 4.01 0 0 0-3.93 0l-16.703 9.419h-.004c-1.364.73-2.622.772-3.708.404-1.088-.37-2.006-1.173-2.598-2.175-.592-1.003-.847-2.196-.645-3.326.203-1.13.85-2.21 2.15-3.051l.005-.005.159-.1L50.4 87.788a2.254 2.254 0 0 0 0-3.929L26.28 70.263a3.995 3.995 0 0 0-3.928 0l-14.204 7.99-.003.005a4.722 4.722 0 0 1-6.48-1.677 4.723 4.723 0 0 1 1.672-6.476l.176-.1 7.68-4.32v-.003c1.5-.854 1.5-3.071 0-3.926v-.002l-7.668-4.32-.004-.001c-1.364-.782-2.067-1.84-2.323-2.97-.256-1.129-.046-2.344.511-3.38.558-1.034 1.454-1.88 2.538-2.289 1.082-.409 2.352-.405 3.756.302l.17.093 14.183 7.998h.002a4.003 4.003 0 0 0 3.927 0L50.64 43.482c1.51-.848 1.515-3.079.006-3.93l-9.051-5.103c-2.185-1.233-2.773-3.453-2.233-5.391.54-1.939 2.192-3.533 4.7-3.458zm19.71 21.94c-.08 0-.146.054-.224.059l-.002-.007h-.002l.002.006c-.605.037-1.208.157-1.737.454l-.258.147v.002L37.456 61.762a2.255 2.255 0 0 0-.004 3.93l24.105 13.585a3.99 3.99 0 0 0 3.931 0L89.821 65.56c1.509-.848 1.51-3.076.002-3.926l-24.085-13.58a4.01 4.01 0 0 0-1.963-.515zm0 1.015h.001a3 3 0 0 1 1.464.383L89.324 62.52a1.221 1.221 0 0 1 0 2.156L64.989 78.393v.002a2.969 2.969 0 0 1-2.93 0v-.002l-24.11-13.586a1.235 1.235 0 0 1-.63-1.08v-.002c0-.448.24-.86.632-1.079h.002l24.355-13.708c.001 0 .003 0 .004-.002a2.994 2.994 0 0 1 1.462-.381z"/>
</svg>;
  }
});