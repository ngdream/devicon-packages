import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SpringOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#5FB832'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M1.008 98.82C.402 98.52 0 97.813 0 97.008c0-1.211.906-2.117 2.117-2.117.403 0 .805.101 1.11.304 2.214 1.512 4.636 2.215 6.75 2.215 2.32 0 3.628-1.008 3.628-2.52v-.1c0-1.813-2.52-2.419-5.238-3.224-3.43-1.007-7.258-2.421-7.258-6.855v-.102c0-4.433 3.63-7.054 8.266-7.054 2.52 0 5.04.707 7.355 1.918.707.402 1.31 1.105 1.31 2.015 0 1.207-1.009 2.114-2.216 2.114-.402 0-.707-.098-1.11-.301-1.913-1.008-3.827-1.614-5.44-1.614-2.118 0-3.227 1.008-3.227 2.32v.098c0 1.715 2.52 2.422 5.242 3.329 3.426 1.007 7.254 2.62 7.254 6.754v.097c0 4.942-3.828 7.36-8.664 7.36-2.926 0-6.149-.907-8.871-2.825m38.398-9.168c0-4.539-3.023-7.46-6.648-7.46-3.63 0-6.754 3.023-6.754 7.46v.098c0 4.438 3.125 7.46 6.754 7.46 3.625-.202 6.648-3.022 6.648-7.558m-18.543-9.375c0-1.511 1.11-2.722 2.621-2.722a2.71 2.71 0 0 1 2.72 2.722v1.614c1.714-2.418 4.132-4.336 7.862-4.336 5.442 0 10.786 4.336 10.786 11.996v.101c0 7.657-5.243 11.993-10.786 11.993-3.832 0-6.25-1.915-7.863-4.032v8.164c0 1.512-1.207 2.621-2.719 2.621a2.604 2.604 0 0 1-2.62-2.62v-25.5m26.202-.102c0-1.512 1.11-2.719 2.621-2.719a2.71 2.71 0 0 1 2.723 2.719v1.312c.3-2.015 3.528-3.933 5.844-3.933 1.715 0 2.621 1.11 2.621 2.62 0 1.41-.906 2.321-2.117 2.52-3.828.707-6.45 3.93-6.45 8.567v7.66c0 1.41-1.21 2.621-2.722 2.621a2.6 2.6 0 0 1-2.617-2.621V80.176m16.324 0a2.71 2.71 0 0 1 2.723-2.719 2.71 2.71 0 0 1 2.722 2.719v18.746c0 1.512-1.21 2.621-2.722 2.621s-2.723-1.11-2.723-2.621V80.176m7.762.101a2.712 2.712 0 0 1 2.722-2.722c1.512 0 2.82 1.21 2.82 2.722v1.11c1.512-2.117 3.833-3.832 7.56-3.832 5.445 0 8.566 3.527 8.566 8.87v12.497c0 1.512-1.207 2.621-2.72 2.621-1.51 0-2.823-1.11-2.823-2.621V88.039c0-3.629-1.914-5.644-5.14-5.644-3.224 0-5.442 2.117-5.442 5.742v10.785c0 1.512-1.207 2.621-2.82 2.621-1.512 0-2.723-1.11-2.723-2.621V80.277m35.578 16.832c-3.73 0-6.852-2.824-6.852-7.457v-.101c0-4.535 3.121-7.461 6.852-7.461 3.73 0 6.953 3.023 6.953 7.46v.102c0 4.434-3.223 7.457-6.953 7.457m9.574-19.453a2.71 2.71 0 0 0-2.719 2.723v1.613c-1.816-2.422-4.234-4.336-8.164-4.336-5.644 0-11.09 4.336-11.09 12.094v.102c0 7.66 5.446 12.093 11.09 12.093 3.93 0 6.45-1.914 8.164-4.03-.304 4.233-2.925 6.35-7.562 6.35-2.719 0-5.137-.706-7.356-1.816-.3-.101-.605-.199-1.007-.199-1.31 0-2.32 1.008-2.32 2.215 0 1.008.605 1.715 1.515 2.117 2.922 1.41 5.844 2.117 9.27 2.117 4.335 0 7.66-1.008 9.878-3.125 2.016-1.914 3.125-4.836 3.125-8.77V80.278c-.101-1.511-1.312-2.62-2.824-2.62m-47.469-6.552c0 1.41-1.21 2.622-2.722 2.622s-2.723-1.211-2.723-2.622c0-1.41 1.21-2.62 2.723-2.62 1.511 0 2.722 1.21 2.722 2.62m14.11-17.437c-5.946 7.863-18.746 5.242-27.012 5.543 0 0-1.41.102-2.922.305 0 0 .606-.203 1.207-.504 5.746-1.914 8.469-2.32 11.996-4.133 6.551-3.324 13.102-10.48 14.41-17.941-2.52 7.156-10.078 13.304-17.03 15.824-4.74 1.715-13.306 3.328-13.306 3.328l-.3-.203c-5.848-2.723-6.047-15.117 4.636-19.051 4.637-1.711 9.07-.805 14.11-1.914 5.34-1.207 11.59-5.14 14.11-10.281 2.823 8.367 6.25 21.168.1 29.027Zm.101-31.445a21.565 21.565 0 0 1-2.62 4.437c-4.434-4.437-10.583-7.156-17.438-7.156-13.403 0-24.29 10.683-24.29 23.683 0 6.852 3.024 13 7.762 17.336l.504.504c-.906-.707-1.008-2.015-.304-2.824.707-.906 2.015-1.008 2.925-.3.907.706 1.008 2.015.301 2.82-.707.91-2.016 1.007-2.922.304l.403.301a24.776 24.776 0 0 0 15.62 5.543c12.801 0 23.282-9.773 24.192-21.969.805-5.949-1.008-13.609-4.133-22.68m42.43 57.048h-.906v1.21h.906c.305 0 .605-.203.605-.605 0-.402-.3-.605-.605-.605Zm.504 3.023-.906-1.41h-.606v1.41h-.504v-3.426h1.41c.606 0 1.11.403 1.11 1.008a.975.975 0 0 1-.907 1.008l.907 1.41Zm-.805-4.332c-1.41 0-2.621 1.105-2.621 2.52 0 1.41 1.211 2.519 2.621 2.519s2.621-1.11 2.621-2.52c0-1.312-1.21-2.52-2.62-2.52Zm0 5.64c-1.715 0-3.125-1.308-3.125-3.023 0-1.71 1.41-3.023 3.125-3.023 1.711 0 3.125 1.312 3.125 3.023 0 1.613-1.414 3.024-3.125 3.024"/>
</svg>;
  }
});