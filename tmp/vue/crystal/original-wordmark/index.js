import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'CrystalOriginalWordmarkIcon',
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
	<path d="m17.62 18.317.37 2.9c-1.726.554-3.885.801-6.537.801-3.207 0-5.428-.802-6.723-2.467s-1.973-4.502-1.973-8.511c0-4.009.616-6.908 1.973-8.511C6.025.864 8.246.062 11.453.062c2.344 0 4.379.246 6.106.678l-.37 2.96a83.626 83.626 0 0 0-5.736-.185c-1.789 0-2.96.555-3.639 1.604-.617 1.11-.987 3.084-.987 5.982s.309 4.934.987 5.983c.678 1.11 1.85 1.604 3.639 1.604 2.59-.062 4.687-.185 6.167-.37zm19.613 3.331h-4.132l-1.727-6.6c-.37-1.294-1.234-1.911-2.467-1.911h-3.824v8.511h-3.824V.37C23.11.185 25.7.123 29.03.123c2.714 0 4.626.432 5.736 1.357 1.11.925 1.665 2.529 1.665 4.873 0 1.665-.308 2.898-.925 3.762-.617.863-1.665 1.418-3.084 1.603v.185c.617.124 1.172.494 1.727.987.555.494.925 1.234 1.11 2.159zM25.145 9.991h3.824c1.356 0 2.343-.246 2.837-.74.493-.493.74-1.357.74-2.652 0-1.295-.247-2.158-.74-2.652-.494-.431-1.419-.678-2.837-.678h-3.824Zm23.806 4.503v7.154h-3.885v-7.216L38.096.37h4.071l3.886 8.264c.123.309.431 1.172.863 2.59h.247c.431-1.356.74-2.22.863-2.59L51.912.37h4.009zm17.023-1.234-4.318-1.357c-1.541-.493-2.652-1.233-3.268-2.22-.617-.987-.987-2.282-.987-3.947 0-2.344.555-3.886 1.603-4.626C60.114.37 61.964 0 64.678 0c2.59 0 4.811.247 6.661.74l-.246 2.714c-2.344-.062-4.441-.124-6.353-.124-1.418 0-2.344.124-2.837.432-.493.309-.74.925-.74 2.035 0 .864.185 1.48.493 1.85.309.37.987.68 1.85.987l4.071 1.296c1.604.493 2.775 1.295 3.392 2.282.679.986.987 2.282.987 3.947 0 2.344-.555 3.947-1.665 4.749-1.11.802-3.084 1.233-5.86 1.233-2.343 0-4.625-.246-6.907-.678l.247-2.837c3.577.062 5.859.123 6.722.123 1.419 0 2.344-.185 2.837-.493.494-.309.679-1.049.679-2.097 0-.925-.185-1.542-.494-1.912-.061-.432-.678-.74-1.541-.987zM91.137 3.7h-6.6v17.948h-3.885V3.7h-6.476V.432h16.961zm12.643 11.965h-7.894l-1.727 6.045h-3.947l6.353-20.23c.185-.678.678-1.048 1.418-1.048h3.762c.74 0 1.234.37 1.419 1.048l6.29 20.168h-3.947zm-.925-3.207-2.158-7.339c-.309-1.11-.432-1.727-.494-1.789h-.801l-.494 1.789-2.097 7.34zM115.807.37v16.344c0 .678.123 1.11.432 1.357.246.246.74.37 1.418.37h7.401l.185 2.96c-2.035.185-4.81.247-8.45.247-3.206 0-4.81-1.48-4.81-4.44V.37Zm-8.511 96.707-30.838 30.775c-.123.124-.308.185-.431.124l-42.124-11.287c-.185-.061-.309-.185-.309-.308L22.308 74.318c-.062-.184 0-.308.123-.431L53.268 43.11c.124-.123.309-.185.432-.123l42.124 11.286c.185.062.309.185.309.308l11.286 42.063c0 .123-.061.308-.123.432zM65.912 63.525l-41.384 11.04c-.062 0-.123.124-.062.185l30.283 30.221c.062.062.185.062.185-.062l11.101-41.322c.062 0-.061-.123-.123-.062z"/>
</svg>;
  }
});