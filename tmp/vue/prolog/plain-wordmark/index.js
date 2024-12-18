import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PrologPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#F46C30'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M106.758 105.521c3.63 0 4.38-3.748 4.38-5.764 0-2.017-.75-5.764-4.38-5.764-3.632 0-4.38 3.747-4.38 5.764 0 2.016.748 5.764 4.38 5.764zm0-13.718c4.812 0 7.004 4.063 7.004 7.954 0 3.89-2.192 7.954-7.004 7.954-4.813 0-7.004-4.063-7.004-7.954 0-3.89 2.19-7.954 7.004-7.954zm14.7 13.747c1.613 0 4.12-1.066 4.12-5.072 0-2.45-.403-6.398-4.064-6.398-3.919 0-4.12 3.718-4.12 5.649 0 3.314 1.296 5.821 4.063 5.821zm6.542.518c0 2.163-.03 7.58-7.005 7.58-1.786 0-5.273-.49-5.764-4.495h2.537c.46 2.392 2.795 2.392 3.4 2.392 4.382 0 4.295-3.517 4.295-5.303v-.634c-.72 1.21-2.046 2.132-4.064 2.132-5.13 0-6.628-4.812-6.628-8.415 0-4.238 2.277-7.522 6.283-7.522 2.737 0 3.919 1.729 4.553 2.65v-2.219H128zM96.007 86.614h2.537v20.694h-2.537V86.615zm-8.214 18.907c3.632 0 4.38-3.748 4.38-5.764 0-2.017-.749-5.764-4.38-5.764-3.632 0-4.381 3.747-4.381 5.764 0 2.016.75 5.764 4.381 5.764zm0-13.718c4.813 0 7.003 4.063 7.003 7.954 0 3.89-2.19 7.954-7.003 7.954-4.814 0-7.005-4.063-7.005-7.954 0-3.89 2.19-7.954 7.005-7.954zm-11.702 15.505h-2.536V92.234h2.392v2.51h.058c1.009-1.76 2.334-2.941 4.237-2.941.317 0 .46.029.662.087v2.622h-.951c-2.363 0-3.862 1.844-3.862 4.035zm-16.4-11.125h5.563c2.507 0 4.207-.922 4.207-3.718 0-2.623-1.787-3.459-4.092-3.459H59.69v7.178zm0 11.125h-2.796V86.615h9.31c3.832 0 6.138 2.477 6.138 5.821 0 2.882-1.642 6.14-6.138 6.14h-6.514v8.732zM44.27 86.615h4.322v20.693H44.27zm-27.44 0h4.611c2.652 11.326 2.912 12.766 3.286 15.13h.058c.374-2.161.692-4.265 2.882-15.13h4.582c2.422 11.355 2.624 12.45 3.084 15.13h.058c.345-1.959.691-3.746 3.372-15.13h4.38l-5.821 20.693h-4.15c-2.133-10.144-2.508-12.163-3.2-16.14h-.057c-.635 3.977-.98 5.476-3.199 16.14h-4.035zM4.15 100.94c.028 1.152.604 3.342 4.38 3.342 2.047 0 4.323-.49 4.323-2.68 0-1.613-1.556-2.046-3.747-2.565l-2.22-.519c-3.341-.777-6.57-1.527-6.57-6.08 0-2.306 1.24-6.369 7.956-6.369 6.34 0 8.04 4.15 8.07 6.685H12.19c-.115-.921-.46-3.112-4.237-3.112-1.642 0-3.602.605-3.602 2.477 0 1.615 1.326 1.962 2.19 2.163l5.044 1.24c2.824.691 5.418 1.844 5.418 5.562 0 6.225-6.34 6.772-8.157 6.772-7.55 0-8.847-4.351-8.847-6.916h4.15zm49.447-65.733a.916.916 0 1 1-1.83 0 .916.916 0 0 1 1.83 0zm.43-4.363a5.388 5.388 0 1 0 0 10.776 5.388 5.388 0 0 0 0-10.776zm.134 8.78a3.26 3.26 0 0 1 0-6.517 3.26 3.26 0 0 1 0 6.518zm23.196-3.5a.914.914 0 0 0 .914-.915.916.916 0 1 0-.914.916zm1.67 5.711a5.388 5.388 0 1 0 0-10.776 5.388 5.388 0 0 0 0 10.776zm-.189-8.673a3.26 3.26 0 0 1 0 6.518 3.26 3.26 0 0 1 0-6.518zm12.459 10.362c0-7.387-2.963-14.081-7.76-18.965-.89-2.72-.788-6.478.342-8.189.394-.597.815-1.175 1.267-1.825-4.012-.684-7.425.466-9.71 3.329-.279.348-.537.554-.806.654a26.986 26.986 0 0 0-10.407-2.077c-3.7 0-7.228.746-10.442 2.092-.285-.096-.554-.304-.845-.67-2.286-2.86-5.698-4.012-9.712-3.33.452.65.873 1.23 1.266 1.827 1.148 1.738 1.236 5.582.304 8.309-4.728 4.874-7.644 11.517-7.644 18.845a27 27 0 0 0 1.823 9.78c.294.83.564 1.672.839 2.51.25.767.492 1.527.715 2.29.654 2.246 1.055 4.566 1.12 6.905a34.289 34.289 0 0 1-.01 1.92l-.02.659 5.483-5.019c.994.918 2.347 1.745 3.976 2.45a6.378 6.378 0 0 0-2.734 5.235c0 1.849.792 3.51 2.048 4.676a4.457 4.457 0 0 1-.188-1.282 4.444 4.444 0 1 1 8.626 1.495 6.37 6.37 0 0 0 2.284-4.891 6.36 6.36 0 0 0-.736-2.975 44.09 44.09 0 0 0 4.567.234 45.084 45.084 0 0 0 3.145-.11 6.34 6.34 0 0 0-.672 2.85c0 1.85.79 3.51 2.047 4.677a4.457 4.457 0 0 1-.189-1.283 4.444 4.444 0 1 1 8.627 1.496 6.37 6.37 0 0 0 2.285-4.891 6.368 6.368 0 0 0-2.266-4.876c1.687-.645 3.123-1.414 4.232-2.274l4.74 4.337a30.936 30.936 0 0 1-.02-.66 34.289 34.289 0 0 1-.01-1.919c.066-2.339.468-4.66 1.12-6.905.222-.762.464-1.525.715-2.292.29-.881.57-1.77.884-2.645a26.987 26.987 0 0 0 1.718-9.499zM40.296 51.6l-1.016-3.04 1.348 1.24 2.091-.737zm.52 2.174 1.348 1.24 2.091-.738-2.423 2.538-1.015-3.039zm3.313-4.525 1.252 1.338 2.138-.58-2.607 2.349zm-1.003 12.857-1.016-3.039 1.348 1.24 2.091-.738zm3.355-4.322-1.016-3.04 1.348 1.24 2.091-.737zm2.296-7.606 1.253 1.339 2.139-.581-2.608 2.35zm15.528 4.447c-.538-.8-.988-1.702-1.406-2.513a622.989 622.989 0 0 0-1.447-2.786c-.928-1.774-2.304-3.578-2.765-5.58a10.671 10.671 0 0 1-6.76 2.399c-5.921 0-10.723-4.8-10.723-10.722 0-5.921 4.802-10.724 10.723-10.724 1.574 0 3.068.341 4.416.951a10.913 10.913 0 0 1 1.744.934 10.653 10.653 0 0 1 4.487 10.312 5.757 5.757 0 0 1 1.73-.266c.696 0 1.36.13 1.98.356a10.67 10.67 0 0 1-.147-1.735c0-.927.124-1.825.347-2.683l.035-.127a11.727 11.727 0 0 1 .354-1.078c.024-.06.046-.12.07-.177 1.596-3.916 5.44-6.675 9.928-6.675 5.92 0 10.722 4.8 10.722 10.721s-4.801 10.723-10.722 10.723a10.66 10.66 0 0 1-6.898-2.514c-.225 1.068-.768 1.976-1.308 2.991a696.431 696.431 0 0 0-2.19 4.175l-2.17 4.017zm20.15-5.014-.783 3.107-2.608-2.349 2.14.579zm-8.037 1.688 2.137.58 1.253-1.338-.784 3.107-2.607-2.35zm5.688 6.848-2.422-2.538 2.09.74 1.348-1.24-1.016 3.039zm3.353 4.323-2.423-2.538 2.091.739 1.348-1.24zm1.293-5.293-2.424-2.537 2.092.738 1.347-1.24zm1.536-5.211-2.423-2.539 2.091.74 1.348-1.241zM64.29 37.703a5.023 5.023 0 0 0-5.022 5.025c0 2.215 1.562 4.131 2.542 6.008l1.26 2.422c.362.706.754 1.49 1.223 2.184l1.885-3.49c.633-1.212 1.264-2.424 1.905-3.63.611-1.152 1.232-2.144 1.232-3.496a5.023 5.023 0 0 0-5.025-5.023z"/>
</svg>;
  }
});