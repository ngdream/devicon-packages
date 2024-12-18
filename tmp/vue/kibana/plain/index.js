import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'KibanaPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#F04E98'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 0v48c2.323 0 4.624.086 6.906.244A99.422 99.422 0 0 0 12 48v67.152l47.73-54.96a99.422 99.422 0 0 0-6.1-3.057 101.03 101.03 0 0 1 6.1 3.053L112 0H12zm7.44 48.287a99.33 99.33 0 0 1 6.466.695 99.422 99.422 0 0 0-6.467-.695zm7.027.777c2.192.322 4.36.712 6.504 1.174a99.422 99.422 0 0 0-6.504-1.174zm6.838 1.245a99.243 99.243 0 0 1 13.232 3.882 99.422 99.422 0 0 0-13.232-3.882zm13.857 4.12c1.983.75 3.935 1.561 5.856 2.43a99.422 99.422 0 0 0-5.856-2.43zM70.04 66.622l-48.973 56.406L16.738 128h93.258c-5.12-25.21-19.758-46.945-39.957-61.379z"/>
</svg>;
  }
});