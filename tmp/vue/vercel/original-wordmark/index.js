import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'VercelOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M64.144 56.789c-4.976 0-8.563 3.245-8.563 8.112s4.034 8.113 9.014 8.113c3.006 0 5.656-1.19 7.297-3.195l-3.448-1.992c-.91.996-2.294 1.577-3.849 1.577-2.159 0-3.993-1.127-4.674-2.93H72.55a8.151 8.151 0 0 0 .158-1.577c0-4.863-3.583-8.108-8.564-8.108zm-4.259 6.535c.563-1.798 2.105-2.93 4.26-2.93 2.158 0 3.7 1.132 4.259 2.93zm-1.019-11.493L46.377 73.465 33.884 51.83h4.683l7.806 13.521 7.806-13.521zm-42.212-2.253 16.653 28.845H0Zm74.172 15.324c0 2.704 1.767 4.507 4.507 4.507 1.857 0 3.25-.843 3.966-2.218l3.462 1.997c-1.434 2.388-4.12 3.826-7.428 3.826-4.98 0-8.563-3.245-8.563-8.112 0-4.868 3.587-8.113 8.563-8.113 3.308 0 5.99 1.438 7.428 3.826l-3.462 1.997c-.716-1.375-2.109-2.218-3.966-2.218-2.736 0-4.507 1.803-4.507 4.508zM128 51.83v20.732h-4.056V51.831Zm-15.324 4.958c-4.976 0-8.563 3.245-8.563 8.112s4.038 8.113 9.014 8.113c3.006 0 5.656-1.19 7.297-3.195l-3.448-1.992c-.91.996-2.294 1.577-3.85 1.577-2.158 0-3.992-1.127-4.673-2.93h12.629a8.16 8.16 0 0 0 .157-1.577c0-4.863-3.583-8.108-8.563-8.108zm-4.26 6.535c.564-1.798 2.101-2.93 4.26-2.93s3.7 1.132 4.26 2.93zm-22.999-6.085v4.368a5.157 5.157 0 0 0-1.442-.221c-2.618 0-4.507 1.803-4.507 4.507v6.67h-4.056V57.24h4.056v4.147c0-2.29 2.664-4.147 5.95-4.147z"/>
</svg>;
  }
});