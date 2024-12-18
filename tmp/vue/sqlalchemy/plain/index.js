import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SqlalchemyPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#333333'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M9.39 73c-.757-.124-2.697-.606-4.309-1.05l-2.929-.82 1.503-2.758 1.506-2.765-1.214-1.501C2.228 61.984.013 57.324 0 55.822c-.018-3.508 4.536-8.59 10.122-11.322 3.84-1.882 6.888-1.928 10.71-.137l2.884 1.35.837-1.195c.453-.655.834-1.52.834-1.9 0-.377.38-.714.832-.714.456 0 .837.125.837.261 0 .332-3.353 8.802-3.565 9.015-.093.089-1.002-.336-2.033-.943-2.915-1.715-6.574-2.853-9.41-2.928-6.6-.17-8.894 6.281-4.235 11.93l1.64 1.984 4.478-3.624c5.024-4.053 5.6-4.146 9.514-1.445 4.4 3.035 4.475 7.65.227 12.474-3.765 4.298-7.632 5.493-14.281 4.373zm11.261-4.628c2.189-1.715 2.034-4.887-.332-7.406-2.977-3.155-3.903-3.021-9.134 1.35-5.205 4.341-5.236 4.173.983 6.162 4.116 1.333 6.694 1.302 8.482-.106zm42.277 16.722c-1.485-.545-5.493-2.201-8.921-3.686-9.258-4.04-10.561-4.115-13.325-.762-.638.776-1.333 1.262-1.533 1.064-.59-.594 1.17-3.43 3.297-5.294 1.727-1.52 2.302-1.732 4.216-1.52 1.213.137 5.25 1.546 8.97 3.128 8.39 3.566 10.849 4.323 14.051 4.323 3.899 0 5.9-2.733 4.673-6.356-.306-.913-.212-1.213.395-1.213 1.138 0 1.714 4.246.895 6.688-.35 1.049-1.365 2.533-2.26 3.277-1.337 1.126-2.188 1.369-4.69 1.352-1.684 0-4.28-.457-5.768-1.001zM41.307 72.12c-3.447-1.608-6.557-4.675-8.346-8.258-2.87-5.731-1.99-9.409 3.442-14.37 4.567-4.173 8.3-5.794 13.324-5.794 3.629 0 4.4.195 6.752 1.639 5.572 3.442 6.949 10.015 3.596 17.179-3.928 8.403-12.23 12.655-18.768 9.604zm11.53-3.992c2.582-1.276 4.355-7.162 3.628-12.049-.913-6.025-9.058-10.135-15.039-7.587-6.144 2.626-6.237 9.62-.195 15.92 4.217 4.416 7.845 5.581 11.607 3.716zm11.699 5.098c0-.256.957-.713 2.14-1.001l2.138-.53.457-7.708c.5-8.528.136-16.922-.789-18.042-.332-.395-1.35-.883-2.276-1.095-3.761-.833-1.259-1.413 6.042-1.413 7.295 0 9.621.531 6.144 1.413-2.99.744-3.004.788-3.004 12.962 0 6.75.244 11.835.59 12.486.487.908 1.213 1.108 4.009 1.108 5.767 0 7.752-1.365 9.315-6.418.47-1.52 1.683-1.245 1.262.287-.2.714-.518 2.884-.713 4.856l-.367 3.565H77.01c-6.857 0-12.474-.212-12.474-.47zm28.332-.364c0-.456.443-.911 1.17-1.257.97-.456 1.608-1.413 3.916-5.917 3.653-7.137 9.42-19.38 9.97-21.219.42-1.394.515-1.47 2.09-1.652.914-.107 1.671-.169 1.69-.137.012.03 1.27 2.79 2.803 6.147a538.762 538.762 0 0 0 6.787 14.158c3.698 7.45 4.11 8.12 5.354 8.726.758.363 1.352.927 1.352 1.26 0 .53-.655.589-6.269.589-5.629 0-6.267-.06-6.267-.608 0-.363.487-.758 1.258-1.015.713-.226 1.263-.65 1.263-.97 0-.306-.744-2.307-1.657-4.447l-1.652-3.898h-12.537l-1.196 2.64c-2.245 4.943-2.294 6.113-.199 6.675 1.05.288 1.338.515 1.214.988-.137.544-.683.62-4.63.62-4.229.032-4.46 0-4.46-.682zm20.549-12.277c.213-.377-4.509-10.68-4.948-10.787-.318-.093-5.205 9.985-5.205 10.742 0 .381 9.923.426 10.153.045zm0 0"/>
</svg>;
  }
});