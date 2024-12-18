import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SketchLineIcon',
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
	<path d="m64 6.52-35.984 3.775-.178.105L0 47.46l.012.024v.313L63.8 121.48l.383-.012.015.012.01-.012h.002L128 47.785v-.324l-27.816-37.06-.178-.106-.049-.006-.004-.004L64 6.52zm.67.595 35.031 3.672.09 1.68 1.816 34.392-3.455-3.715L64.67 7.115zm-1.34.002L26.393 46.863l1.033-19.558.902-16.518 35.002-3.67zm.664.088 37.36 40.152H26.656l9.81-10.556L63.995 7.205zm36.274 4.195 26.992 35.957H102.2L100.268 11.4zm-72.53.032-1.937 35.924H.742l4.948-6.59 22.048-29.334zM.783 47.88h25.11l36.869 71.592-15.239-17.598L.783 47.881zm25.695 0h75.044L64 120.736 26.478 47.881zm75.64 0h25.099l-46.74 53.994-15.239 17.598 36.88-71.592z"/>
</svg>;
  }
});