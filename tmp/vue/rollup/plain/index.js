import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'RollupPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ff3333'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M21.645 2c-1.043 0-1.89.848-1.89 1.89v98.726c-1.426 3.73-2.384 6.788-2.957 9.273-.416 1.916-.78 4.134-.731 6.047.024 1.664.646 3.536 1.441 4.736.864 1.42 1.99 2.264 3.449 2.968 2.917 1.15 6.817.742 9.04-.467.098-.056.185-.142.275-.219h79.17c1.412 0 2.325-1.5 1.695-2.76L90.194 80.738a1.898 1.898 0 0 1 .738-2.498c12.254-7.04 20.51-20.25 20.51-35.416 0-7.12-1.83-13.8-5.044-19.629h.006l-.043-.07c-.07-.124-.128-.254-.198-.377-.016-.017-.036-.032-.052-.049-.28-.495-.57-.99-.883-1.49.036.044.075.085.111.129a40.994 40.994 0 0 0-1.887-2.752l-.017-.026-.006-.005C96.102 8.667 84.446 2.199 71.247 2zm62.422 9.818v.002c1.1-.004 1.88.072 2.941.166.471.053.941.12 1.41.198.094.015.202.038.327.06.382.068.76.14 1.135.223.067.015.145.035.238.057.392.09.781.186 1.164.293.114.031.237.071.373.11.342.1.68.204 1.014.315.118.04.242.086.375.133.357.125.71.253 1.056.39l.223.093c.378.154.752.313 1.12.482l.265.125c.365.173.724.351 1.08.539.068.036.144.08.228.125.33.178.656.36.975.55.136.082.274.169.416.257.286.177.569.357.848.545v.002a26.796 26.796 0 0 1 1.16.824v.002a26.304 26.304 0 0 1 2.195 1.846v.001l.156.15c-4.284-2.847-9.62-4.544-14.689-4.753-6.703-.277-13.016 2.085-15.527 7.957-2.567 5.99-.408 12.289 3.088 16.916.248.327.516.627.776.937 5.309-7.633 8.984-12.82 8.984-12.82l.47-.658.38.715c2.823 5.321 4.773 8.908 5.83 11.652.423 1.1.507 2.111.384 3.258-.73 3.978-4.217 6.583-6.673 8.652-2.936 2.467-6.943 5.737-12.062 10.64C63.45 71.64 53.126 86.871 44.97 99.864c-4.078 6.497-7.612 12.434-10.311 16.85-1.35 2.208-2.493 4.036-3.385 5.356-.446.66-.83 1.194-1.14 1.578-.31.384-.575.62-.634.654-2.157 1.295-5.637 1.407-7.98.518-1.351-.51-2.157-1.324-3.016-2.417-.863-1.323-1.317-2.847-1.432-4.312.045-2.507.265-4.051.743-6.176 1.497-6.371 5.488-16.573 14.228-33.327v-.002a.302.302 0 0 0 .004-.006l.002-.004c1.3-2.491 2.705-5.128 4.223-7.92v-.001l.006-.01v-.002c5.47-10.058 10.054-18.422 13.982-25.37v-.001l.014-.024c2.613-4.62 4.939-8.616 7.046-12.064v-.002l.002-.002v-.002l.006-.007c3.164-5.176 5.84-9.126 8.256-12.12v-.003l.008-.008c1.206-1.494 2.351-2.752 3.457-3.807.74-.705 1.459-1.32 2.174-1.855 1.43-1.072 2.833-1.83 4.285-2.365.726-.268 1.467-.48 2.23-.647 1.91-.416 3.97-.549 6.329-.549zm1.67 16.992c-.232.325-3.705 5.23-8.656 12.346 1.4 1.54 2.927 2.831 4.433 3.776 2.357 1.349 4.451 2.171 6.41 1.408 1.653-.647 2.23-2.005 2.567-3.533.65-5.334-2.69-10.13-4.754-13.996z"/>
</svg>;
  }
});