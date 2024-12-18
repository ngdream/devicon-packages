import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HandlebarsOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#000000'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M59.788 36.427a1.443 1.443 0 0 0-1.148.496 2.107 2.107 0 0 0-.433 1.454v13.851a2.107 2.107 0 0 0 .443 1.434 1.443 1.443 0 0 0 1.138.504 1.517 1.517 0 0 0 1.158-.483 2.107 2.107 0 0 0 .453-1.455V38.365a2.107 2.107 0 0 0-.443-1.453 1.506 1.506 0 0 0-1.168-.485zm-58.201.01a1.454 1.454 0 0 0-1.17.486 2.191 2.191 0 0 0-.41 1.454v13.851c0 1.292.526 1.938 1.58 1.938a1.475 1.475 0 0 0 1.158-.504 2.107 2.107 0 0 0 .432-1.444v-4.214a8.522 8.522 0 0 1 .253-2.539 2.928 2.928 0 0 1 1.053-1.327 2.591 2.591 0 0 1 1.54-.483 1.801 1.801 0 0 1 1.726.82 4.94 4.94 0 0 1 .452 2.36v5.403c0 1.293.527 1.94 1.58 1.94a1.485 1.485 0 0 0 1.16-.495 2.107 2.107 0 0 0 .443-1.455V46.11a10.081 10.081 0 0 0-.117-1.633 3.992 3.992 0 0 0-1.98-2.76 4.435 4.435 0 0 0-2.106-.516 5.372 5.372 0 0 0-1.506.2 4.214 4.214 0 0 0-1.286.61 6.816 6.816 0 0 0-1.191 1.108v-4.74a2.107 2.107 0 0 0-.42-1.445 1.485 1.485 0 0 0-1.191-.496Zm51.954 0a1.338 1.338 0 0 0-1.117.506 2.38 2.38 0 0 0-.389 1.486v4.72a6.5 6.5 0 0 0-1.843-1.455 5.172 5.172 0 0 0-2.33-.473 4.856 4.856 0 0 0-3.845 1.674 6.858 6.858 0 0 0-1.463 4.667 9.028 9.028 0 0 0 .369 2.633 6.32 6.32 0 0 0 1.053 2.107 4.951 4.951 0 0 0 1.685 1.391 4.709 4.709 0 0 0 2.107.486 5.099 5.099 0 0 0 1.6-.243 4.772 4.772 0 0 0 1.36-.706 8.122 8.122 0 0 0 1.264-1.202v.317a1.949 1.949 0 0 0 .527 1.348 1.39 1.39 0 0 0 1.053.473 1.412 1.412 0 0 0 1.053-.452 1.96 1.96 0 0 0 .422-1.369V38.26a2.107 2.107 0 0 0-.389-1.358 1.38 1.38 0 0 0-1.117-.465Zm26.589.012a1.317 1.317 0 0 0-1.054.494 2.339 2.339 0 0 0-.39 1.465v13.894a2.023 2.023 0 0 0 .4 1.36 1.37 1.37 0 0 0 1.054.463 1.443 1.443 0 0 0 1.053-.463 1.928 1.928 0 0 0 .432-1.36v-.315c.344.408.624.712.842.916a4.951 4.951 0 0 0 .78.59 4.035 4.035 0 0 0 1.053.463 5.267 5.267 0 0 0 1.401.223 4.983 4.983 0 0 0 2.202-.486 4.835 4.835 0 0 0 1.707-1.37 6.32 6.32 0 0 0 1.054-2.107 9.091 9.091 0 0 0 .368-2.665 8.048 8.048 0 0 0-.665-3.392 4.951 4.951 0 0 0-1.864-2.191 5.12 5.12 0 0 0-2.792-.758 4.898 4.898 0 0 0-2.316.494 7.374 7.374 0 0 0-1.833 1.434V38.26a2.044 2.044 0 0 0-.295-1.337 1.401 1.401 0 0 0-1.137-.474zm-9.755 4.667a7.132 7.132 0 0 0-2.623.463 5.33 5.33 0 0 0-1.992 1.327 5.794 5.794 0 0 0-1.232 2.107 7.932 7.932 0 0 0-.422 2.623 6.531 6.531 0 0 0 1.739 4.771 6.32 6.32 0 0 0 4.74 1.802 7.374 7.374 0 0 0 2.38-.347 5.804 5.804 0 0 0 1.718-.885 4.014 4.014 0 0 0 1.054-1.107 2.107 2.107 0 0 0 .337-1.053.959.959 0 0 0-.306-.757 1.159 1.159 0 0 0-.79-.276 1.053 1.053 0 0 0-.706.212c-.393.372-.716.667-.97.884a6.953 6.953 0 0 1-.82.611 3.403 3.403 0 0 1-.918.422 3.834 3.834 0 0 1-1.053.136 2.928 2.928 0 0 1-2.697-1.675 4.214 4.214 0 0 1-.443-1.917h6.249a4.298 4.298 0 0 0 1.938-.315c.456-.239.683-.759.683-1.56a5.372 5.372 0 0 0-.706-2.633 5.193 5.193 0 0 0-2-2.043 6.215 6.215 0 0 0-3.16-.79zm-40.208.074a1.38 1.38 0 0 0-1.054.452A2.012 2.012 0 0 0 28.712 43v9.187a2.107 2.107 0 0 0 .442 1.442 1.443 1.443 0 0 0 1.138.506 1.517 1.517 0 0 0 1.158-.483 2.107 2.107 0 0 0 .453-1.455v-4.004a9.986 9.986 0 0 1 .232-2.664 2.928 2.928 0 0 1 1.054-1.37 2.591 2.591 0 0 1 1.506-.515 1.79 1.79 0 0 1 1.749.832 5.32 5.32 0 0 1 .39 2.434v5.328a2.107 2.107 0 0 0 .443 1.445 1.58 1.58 0 0 0 2.296 0 2.107 2.107 0 0 0 .443-1.455v-5.94a13.02 13.02 0 0 0-.095-1.728 3.697 3.697 0 0 0-.412-1.263 3.487 3.487 0 0 0-1.432-1.56 4.582 4.582 0 0 0-2.255-.547 4.909 4.909 0 0 0-2.296.514 5.594 5.594 0 0 0-1.843 1.634v-.389a2.107 2.107 0 0 0-.212-.959 1.422 1.422 0 0 0-.547-.6 1.475 1.475 0 0 0-.757-.2zm68.934 0a8.427 8.427 0 0 0-3.16.514 4.266 4.266 0 0 0-1.864 1.307 2.707 2.707 0 0 0-.6 1.633 1.127 1.127 0 0 0 .388.885 1.359 1.359 0 0 0 .918.401 1.053 1.053 0 0 0 .78-.222c.119-.147.326-.446.62-.895a2.992 2.992 0 0 1 1.054-1.053 3.887 3.887 0 0 1 1.831-.338 2.275 2.275 0 0 1 1.961.547 3.34 3.34 0 0 1 .506 1.854c-.639.19-1.262.356-1.866.496-.604.14-1.306.291-2.107.453l-1.506.317a4.15 4.15 0 0 0-2.275 1.242 3.223 3.223 0 0 0-.831 2.233 3.413 3.413 0 0 0 .506 1.802 3.55 3.55 0 0 0 1.432 1.317 4.593 4.593 0 0 0 2.106.483 6.32 6.32 0 0 0 2.422-.452 9.87 9.87 0 0 0 2.245-1.348 6.805 6.805 0 0 0 1.053 1.348 1.412 1.412 0 0 0 .97.465 1.549 1.549 0 0 0 1.053-.402 1.18 1.18 0 0 0 .463-.895 5.941 5.941 0 0 0-.295-1.255 6.426 6.426 0 0 1-.294-1.874v-3.644a6.879 6.879 0 0 0-.496-2.856 3.086 3.086 0 0 0-1.705-1.57 8.912 8.912 0 0 0-3.309-.493zm23.017 0a6.468 6.468 0 0 0-2.697.504 3.93 3.93 0 0 0-1.685 1.36 3.16 3.16 0 0 0-.568 1.81 2.718 2.718 0 0 0 .621 1.813 4.403 4.403 0 0 0 1.654 1.191 17.34 17.34 0 0 0 2.685.862 7.89 7.89 0 0 1 2.107.739 1.327 1.327 0 0 1 .642 1.232 1.2 1.2 0 0 1-.61.98 2.697 2.697 0 0 1-1.569.432 3.55 3.55 0 0 1-1.866-.422 3.497 3.497 0 0 1-1.179-1.274 2.707 2.707 0 0 0-.516-.695 1.053 1.053 0 0 0-.77-.243 1.285 1.285 0 0 0-.946.369 1.232 1.232 0 0 0-.37.895 2.655 2.655 0 0 0 .58 1.58 4.287 4.287 0 0 0 1.812 1.316 7.458 7.458 0 0 0 2.949.527 8.512 8.512 0 0 0 3.055-.483 3.697 3.697 0 0 0 2.549-3.687 2.634 2.634 0 0 0-.486-1.56 4.035 4.035 0 0 0-1.421-1.189 10.534 10.534 0 0 0-2.422-.864 47.569 47.569 0 0 1-1.96-.517 3.487 3.487 0 0 1-1.138-.526.99.99 0 0 1-.42-.823 1.053 1.053 0 0 1 .568-.916 2.612 2.612 0 0 1 1.444-.368 2.686 2.686 0 0 1 1.337.284 2.897 2.897 0 0 1 .852.749 5.51 5.51 0 0 0 .79.841 1.285 1.285 0 0 0 .834.284 1.454 1.454 0 0 0 1.053-.348 1.19 1.19 0 0 0 .368-.895 1.875 1.875 0 0 0-.347-1.053 3.413 3.413 0 0 0-1.054-.959 5.551 5.551 0 0 0-1.654-.695 8.86 8.86 0 0 0-2.222-.251zm-12.767.041c-1.039 0-1.56.702-1.56 2.107v8.88a2.107 2.107 0 0 0 .443 1.454 1.464 1.464 0 0 0 1.138.494 1.517 1.517 0 0 0 1.158-.483 2.107 2.107 0 0 0 .453-1.455v-2.664c0-.962.035-1.774.105-2.434a7.606 7.606 0 0 1 .337-1.726 2.36 2.36 0 0 1 .696-1.054 1.738 1.738 0 0 1 1.148-.37 3.94 3.94 0 0 1 1.191.222 4.014 4.014 0 0 0 .842.22 1.254 1.254 0 0 0 .874-.378 1.264 1.264 0 0 0 .401-.97 1.506 1.506 0 0 0-.948-1.337 4.108 4.108 0 0 0-1.949-.506 2.423 2.423 0 0 0-1.61.506 5.594 5.594 0 0 0-1.182 1.486 2.76 2.76 0 0 0-.388-1.486 1.296 1.296 0 0 0-1.149-.506zm-89.299.01a8.427 8.427 0 0 0-3.16.517 4.266 4.266 0 0 0-1.864 1.306 2.707 2.707 0 0 0-.6 1.634 1.127 1.127 0 0 0 .39.885 1.359 1.359 0 0 0 .926.347 1.053 1.053 0 0 0 .78-.222c.119-.147.326-.446.62-.895a2.992 2.992 0 0 1 1.054-1.053 3.887 3.887 0 0 1 1.834-.338 2.275 2.275 0 0 1 1.991.547 3.34 3.34 0 0 1 .506 1.854c-.639.19-1.262.356-1.866.496-.604.14-1.306.291-2.107.453l-1.506.317a4.15 4.15 0 0 0-2.275 1.242 3.223 3.223 0 0 0-.831 2.233 3.413 3.413 0 0 0 .506 1.802 3.55 3.55 0 0 0 1.432 1.317 4.593 4.593 0 0 0 2.106.483 6.32 6.32 0 0 0 2.422-.452 9.87 9.87 0 0 0 2.245-1.348 6.805 6.805 0 0 0 .969 1.368 1.412 1.412 0 0 0 .969.465 1.549 1.549 0 0 0 1.053-.401 1.18 1.18 0 0 0 .463-.895 5.941 5.941 0 0 0-.294-1.296 6.426 6.426 0 0 1-.253-1.8V46.16a6.879 6.879 0 0 0-.496-2.854 3.086 3.086 0 0 0-1.706-1.57 8.912 8.912 0 0 0-3.308-.496Zm50.206 2.181a2.644 2.644 0 0 1 2.022.77 3.877 3.877 0 0 1 .885 2.454h-5.794a4.108 4.108 0 0 1 .928-2.403 2.56 2.56 0 0 1 1.959-.82zm-21.531.138a2.686 2.686 0 0 1 1.549.484 3.297 3.297 0 0 1 1.125 1.4 5.267 5.267 0 0 1 .412 2.192 5.436 5.436 0 0 1-.517 2.275 3.013 3.013 0 0 1-1.104 1.348 2.823 2.823 0 0 1-1.54.442 2.728 2.728 0 0 1-1.526-.463 3.076 3.076 0 0 1-1.053-1.37 5.436 5.436 0 0 1-.402-2.212l.044-.02a5.678 5.678 0 0 1 .389-2.16 3.16 3.16 0 0 1 1.053-1.422 2.612 2.612 0 0 1 1.57-.494zm36.12.062a2.528 2.528 0 0 1 1.56.496 3.16 3.16 0 0 1 1.053 1.411 5.878 5.878 0 0 1 .358 2.107 4.572 4.572 0 0 1-.841 3.035 2.623 2.623 0 0 1-2.107 1.053 2.855 2.855 0 0 1-2.286-1.053 4.393 4.393 0 0 1-.874-2.93l.01.01a5.594 5.594 0 0 1 .411-2.222 3.308 3.308 0 0 1 1.095-1.411 2.77 2.77 0 0 1 1.621-.496zM22.445 47.75l.01.442a4.888 4.888 0 0 1-.432 2.38 2.77 2.77 0 0 1-1.18 1.054 3.74 3.74 0 0 1-1.75.412 2.033 2.033 0 0 1-1.442-.506 1.622 1.622 0 0 1-.547-1.233 1.348 1.348 0 0 1 .463-1.053 2.528 2.528 0 0 1 .98-.527c.343-.091.96-.23 1.853-.42a16.117 16.117 0 0 0 2.045-.549zm79.006 0 .01.442a4.888 4.888 0 0 1-.432 2.38 2.77 2.77 0 0 1-1.18 1.054 3.74 3.74 0 0 1-1.75.412 2.033 2.033 0 0 1-1.442-.506 1.622 1.622 0 0 1-.547-1.233 1.348 1.348 0 0 1 .463-1.053 2.528 2.528 0 0 1 .979-.527c.344-.091.962-.23 1.854-.42a16.117 16.117 0 0 0 2.045-.549zm-47.293 21.75a12.862 12.862 0 0 0-2.123.024c-8.88.695-12.41 5.268-14.569 7.228-2.16 1.96-6.173 6.572-8.859 5.76-2.686-.81-3.446-4.127-2.498-5.15.948-1.02 1.696-.842 2.286 0a4.466 4.466 0 0 1 .527 2.202 5.11 5.11 0 0 0 1.654-2.497 2.95 2.95 0 0 0-1.654-3.792c-4.846-2.455-7.975 1.918-8.428 2.94-.453 1.022-1.252 2.633-.746 6.32.505 3.687 2.285 7.09 7.847 8.428a23.565 23.565 0 0 0 15.8-1.844c4.91-2.338 14.118-6.449 16.446-6.86a20.162 20.162 0 0 1 4.487-.567 20.162 20.162 0 0 1 4.488.568c2.328.41 11.534 4.52 16.443 6.86a23.565 23.565 0 0 0 15.8 1.843c5.563-1.338 7.344-4.74 7.85-8.428.506-3.687-.296-5.298-.749-6.32-.453-1.022-3.581-5.395-8.427-2.94a2.95 2.95 0 0 0-1.654 3.792 5.11 5.11 0 0 0 1.654 2.497 4.466 4.466 0 0 1 .527-2.201c.59-.843 1.337-1.022 2.285 0 .948 1.022.19 4.339-2.495 5.15-2.686.81-6.7-3.802-8.86-5.761-2.16-1.96-5.688-6.533-14.568-7.228a12.862 12.862 0 0 0-12.294 6.316 12.862 12.862 0 0 0-10.17-6.34Z"/>
</svg>;
  }
});