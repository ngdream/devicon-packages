import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PypiOriginalWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m28.687 69.503-9.528 3.47 9.485 3.45.158-.06-.115-.04zm9.485 3.38v.074l.1-.036zM9.735 76.129.108 79.634l9.485 3.454 3.21-1.17 6.318 2.298.038-.015v-4.303l3.673-1.336-3.573-1.301-3.206 1.167z" fill="#f7f7f4"/>
	<path d="M19.16 72.972v6.926l9.484-3.45v-.026z" fill="#efeeea"/>
	<path d="m19.16 84.227-9.524 3.465 9.485 3.454.155-.056-.117-.043zm9.484 3.377v.073l.1-.037zM9.636 92.022.108 95.487l9.485 3.454.157-.059-.114-.04zm9.485 3.376v.073l.099-.036z" fill="#f7f7f4"/>
	<path d="M.108 79.634v11.15l9.485 3.449V83.088Zm9.528 8.058v11.15l9.485 3.453V91.146ZM.108 95.487v11.149l9.485 3.45V98.94Zm9.528 3.462v11.15l9.485 3.453v-11.149Zm9.523 3.467v11.145l9.485 3.454v-11.149z" fill="#efeeea"/>
	<path d="m19.22 79.582-9.627 3.506.043 4.604 9.523-3.465z" fill="#fff"/>
	<path d="m66.85 69.453-9.627 3.506v11.15l9.628-3.507zm0 11.262-9.527 3.465v-.002l-9.524 3.464v-.002l-9.627 3.506v11.15l9.528-3.47v.002l9.523-3.465v.002l9.628-3.505zm-9.527 14.72-9.524 3.469v-.002l-9.627 3.501v11.15l9.528-3.47v.002l9.623-3.502z" fill="#ffd242"/>
	<path d="m57.366 66.004-.043.015v6.79l-.257.092.157.058 9.628-3.506z" fill="#ffc91d"/>
	<path d="m57.323 61.66-9.524 3.468v-.002l-9.627 3.502v11.149l9.528-3.47v.007l9.623-3.506zm0 11.26-9.524 3.465v-.004l-9.528 3.467v-.002l-9.627 3.506V94.5l9.528-3.47v.003l9.528-3.465v.002l9.623-3.506zM38.27 91.108l-9.627 3.502v11.149l9.627-3.506z" fill="#3775a9"/>
	<path d="m47.838 58.21-9.521 3.464-.007-.002-9.623 3.506v11.145l9.485 3.454v-11.15l9.524-3.464.004.002 9.623-3.506zM28.787 76.395l-9.628 3.502v11.149l9.485 3.454V83.35l9.627-3.505zM19.159 91.16v11.145l9.485 3.454v-11.15Z" fill="#2f6491"/>
	<path d="M42.313 70.802a1.78 1.78 0 0 0-.549.113c-1.02.372-1.85 1.55-1.85 2.641 0 1.085.83 1.664 1.85 1.293 1.02-.373 1.85-1.553 1.85-2.642 0-.881-.548-1.43-1.3-1.405zm24.538 21.17-9.628 3.502v11.149l9.628-3.502zm-12.572 8.278a1.786 1.786 0 0 0-.549.113c-1.02.373-1.85 1.557-1.85 2.641 0 1.086.83 1.665 1.85 1.293 1.02-.372 1.848-1.548 1.85-2.637v-.004c-.001-.883-.549-1.43-1.3-1.405zm-16.008 2.114-9.627 3.502v11.149l9.627-3.502z" fill="#fff"/>
	<path d="m47.801 58.108-19.15 6.968a.108.108 0 0 0-.072.102v4.25l-9.45 3.44-.006.003-.002.004a.108.108 0 0 0-.07.097v4.25l-3 1.091-6.279-2.286a.11.11 0 0 0-.073 0L.07 79.533a.099.099 0 0 0-.006.01.108.108 0 0 0-.065.091v11.15c0 .045.029.085.071.1l6.187 2.25-6.187 2.25a.099.099 0 0 0-.006.012.108.108 0 0 0-.065.09v11.15l.071.101 28.534 10.38c.024.009.05.009.074 0h.002l38.209-13.894.07-.102V69.453l-.01-.015a.109.109 0 0 0-.063-.086l-.004-.002h-.002l-9.45-3.437v-4.254a.109.109 0 0 0-.041-.078.106.106 0 0 0-.015-.013.118.118 0 0 0-.015-.01l-9.485-3.45a.11.11 0 0 0-.074 0zm.037.218 9.17 3.333-9.209 3.353-9.167-3.338zm9.377 3.487v10.919l-.186.067-.002.003-9.12 3.322v-10.92l.398-.145zm-18.998.013 9.163 3.337-9.208 3.35-9.17-3.335zm9.375 3.49v10.916l-9.312 3.391v-10.92l.244-.088zm-18.797.016 9.269 3.371v10.92l-9.269-3.376v-6.772zm28.636.84 9.102 3.281-9.102 3.316zm9.312 3.437v10.918l-9.312 3.391v-10.92Zm-38.164.048v6.627l-9.104-3.312Zm28.536 3.454v10.913l-9.208 3.355V76.46Zm-37.847.015 9.095 3.31-9.095 3.308zm-9.533 3.117 6.282 2.287 2.887 1.052-9.311 3.392-9.17-3.34zm19.052.268 9.169 3.335-9.312 3.39-9.026-3.286-.143-.052 9.206-3.348zm18.805.06v10.922l-9.213 3.35v-10.92Zm-28.54.88v1.956l-2.683-.979zm0 2.308v4.393L9.7 87.554v-4.39zm-18.836.029 9.269 3.376v10.915l-2.873-1.046H6.61L.216 90.707Zm37.848.248v10.92l-9.312 3.391v-10.92Zm-18.796.015 9.266 3.377v10.917l-9.221-3.357-.045-.017v-6.744zm47.475.82v10.913l-9.312 3.391v-10.92Zm-9.628 3.497v10.92l-9.208 3.35v-10.92Zm-38.064.013v6.625l-9.1-3.314zm28.54 3.45v10.92l-9.212 3.354v-10.92Zm-37.847.015 8.873 3.231.395.145v10.919l-9.225-3.36-.043-.015v-6.744zm28.32 3.452v10.915l-9.312 3.39V94.684Zm-18.796.015 9.266 3.372v10.917l-9.266-3.374v-6.703a.108.108 0 0 0 0-.181zm47.475.815v10.917l-9.312 3.387v-10.92Zm-60.17 1.121h.002l2.953 1.075v4.478L.424 95.487Zm50.542 2.376v10.92l-9.208 3.35V98.979ZM.216 95.64l9.269 3.376v10.916L.216 106.56Zm47.376 3.454v10.913l-9.213 3.355v-10.92zm-37.848.009 9.268 3.376v10.92l-9.268-3.376zm28.32 3.452v10.92l-9.312 3.386v-10.92zm-18.796.015 9.266 3.372v10.917l-9.266-3.374z" fill="#ccc"/>
	<path d="m70.365 10.877-3.596 1.137v33.192h3.596V28.565c2.477-1.744 4.54-2.614 6.19-2.614 1.353 0 2.408.576 3.17 1.727.656 1.016.985 2.23.985 3.645v13.883h3.597V30.188c0-1.906-.588-3.502-1.773-4.781-1.18-1.28-2.724-1.92-4.63-1.92-2.727 0-5.24.839-7.539 2.512zm-11.884 5.469-3.592 1.28v6.008h-2.466V25.9h2.466v14.17c0 1.712.566 3.055 1.695 4.03 1.132.97 2.719 1.456 4.755 1.456.363 0 .756-.018 1.184-.052l-.002-1.874c-1.344-.065-2.334-.328-2.957-.791-.721-.558-1.083-1.515-1.083-2.868V25.899h4.04v-2.265h-4.04zm-40.636 6.748c-3.06.03-5.662.674-7.803 1.92-.925.527-1.682 1.15-2.274 1.875v28.316l1.66.592v1.777a1.304 1.304 0 0 0-.983 1.297l-.002 1.988a1.304 1.304 0 0 0 .985 1.22v2.33a1.304 1.304 0 0 0-.985 1.296v1.993a1.304 1.304 0 0 0 .985 1.22V70.2a1.696 1.696 0 0 0-1.379 1.665c0 .108.013.217.035.324L.921 80.96l4.664 5.711-2.36-5.71 6.087-7.458c.142.039.29.06.436.06.146 0 .294-.021.437-.06l3.238 3.969 3.277 1.193-5.287-6.476a1.694 1.694 0 0 0-1.35-1.986v-1.287a1.304 1.304 0 0 0 .987-1.219v-1.993a1.304 1.304 0 0 0-.986-1.296v-2.33a1.304 1.304 0 0 0 .986-1.22V58.87a1.304 1.304 0 0 0-.986-1.297v-1.55l1.305.465V43.732c2.223 1.379 4.383 2.035 6.48 1.967 2.785-.061 4.963-1.21 6.533-3.446 1.41-1.972 2.11-4.448 2.11-7.435 0-3.351-.71-6.091-2.123-8.227-1.514-2.334-3.67-3.484-6.472-3.445zm16.147 0-3.597 1.232V39.3c0 1.867.756 3.411 2.27 4.63 1.343 1.115 2.91 1.673 4.677 1.673a18.587 18.587 0 0 0 7.738-1.673v.933c0 2.793-.259 4.677-.787 5.668-.66 1.21-1.854 2.113-3.6 2.706-.888.293-2.412.592-4.583.886l.596 2.265c2.132-.065 4.12-.458 5.958-1.184 2.27-.916 3.804-2.15 4.612-3.692.804-1.543 1.202-4.319 1.202-8.326V23.634h-3.597V41.22c-1.876 1.25-3.644 1.886-5.295 1.92-1.648.035-2.992-.385-4.034-1.254-1.037-.87-1.56-2.11-1.56-3.722zm86.667 0c-1.25 0-2.697.211-4.34.64-1.738.462-3.646 1.444-5.715 2.952v18.52h3.596V27.13c1.543-1.08 3.169-1.643 4.881-1.673 1.608-.034 2.9.402 3.87 1.302.967.907 1.452 2.161 1.452 3.774v14.672h3.596V28.709c0-1.379-.493-2.563-1.478-3.545-.887-.89-2.037-1.495-3.45-1.824a11.308 11.308 0 0 0-2.412-.246zm-23.19.002c-2.992 0-5.407 1.102-7.244 3.298-1.739 2.071-2.611 4.614-2.611 7.635 0 3.216.804 5.896 2.417 8.032 1.771 2.395 4.23 3.592 7.385 3.592 3.188 0 5.687-1.197 7.494-3.592 1.638-2.136 2.462-4.816 2.462-8.032h.002c0-3.021-.876-5.565-2.613-7.635-1.876-2.196-4.305-3.298-7.293-3.298zm-80.147 2.41c3.356.164 5.032 3.187 5.032 9.065 0 5.486-1.76 8.34-5.274 8.568-1.66.1-3.566-.527-5.71-1.871V27.23c.355-.363 1.037-.722 2.049-1.085a9.478 9.478 0 0 1 3.903-.64zm80.099.054c2.131.1 3.71 1.046 4.727 2.845.855 1.478 1.284 3.341 1.284 5.602 0 6.224-1.98 9.351-5.94 9.381-2.11.034-3.692-1.012-4.747-3.134-.825-1.665-1.238-3.74-1.238-6.225 0-5.413 1.967-8.24 5.914-8.469zm.166 24.673v11.089h1.777v-1.963l1.21-1.383 1.976 3.346h1.967l-2.91-4.57 2.642-3.142h-1.98l-2.858 3.549h-.047v-6.926Zm-24.049.818v10.27h1.825v-3.769h1.634c2.213 0 3.908-1.05 3.908-3.328 0-2.386-1.665-3.173-3.908-3.173zm1.825 1.46h1.491c1.492 0 2.261.424 2.261 1.713 0 1.258-.74 1.867-2.26 1.867h-1.492zm18.316.909c-2.057 0-3.865 1.478-3.865 4.054 0 2.56 1.616 4.038 3.722 4.038.881 0 1.807-.346 2.53-.99l-.753-1.145c-.424.346-.959.657-1.586.657-1.21 0-2.058-1.02-2.058-2.56 0-1.556.865-2.576 2.105-2.576.485 0 .895.203 1.301.566l.865-1.145a3.167 3.167 0 0 0-2.26-.9zm22.95 0c-1.62 0-3.047.994-3.047 2.766 0 .913.484 1.652 1.003 2.04v.066c-.436.315-.847.834-.847 1.43 0 .627.299 1.033.691 1.289v.06c-.708.442-1.098 1.006-1.098 1.652 0 1.348 1.367 2.01 3.204 2.01 2.512 0 4.115-1.193 4.115-2.72 0-1.335-.973-1.902-2.827-1.902h-1.366c-.942 0-1.258-.264-1.258-.704 0-.347.143-.537.376-.74.336.133.692.204 1.055.204 1.633 0 2.918-.908 2.918-2.62 0-.536-.187-1.007-.437-1.305h1.414V53.61h-2.767a3.454 3.454 0 0 0-1.128-.19zm-31.393.004c-1.224 0-2.308.47-3.155 1.003l.657 1.21c.678-.41 1.4-.752 2.17-.752 1.038 0 1.383.688 1.396 1.504-3.155.347-4.539 1.211-4.539 2.862 0 1.35.942 2.261 2.295 2.261.908 0 1.695-.453 2.387-1.037h.047l.139.847h1.478v-4.57c0-2.152-.942-3.328-2.875-3.328zm23.53 0c-1.223 0-2.309.47-3.155 1.003l.657 1.21c.68-.41 1.4-.752 2.17-.752 1.038 0 1.383.688 1.396 1.504-3.155.347-4.539 1.211-4.539 2.862 0 1.35.942 2.261 2.296 2.261.911 0 1.694-.453 2.386-1.037h.047l.143.847h1.474v-4.57c0-2.152-.942-3.328-2.875-3.328zm16.043 0c-1.803 0-3.55 1.538-3.55 4.05 0 2.547 1.665 4.038 3.805 4.038.973 0 1.898-.346 2.637-.834l-.614-1.129c-.566.36-1.129.562-1.79.562-1.24 0-2.122-.783-2.278-2.178h4.903a3.907 3.907 0 0 0 .077-.852c0-2.152-1.097-3.657-3.19-3.657zm-8.18 1.24c.753 0 1.332.563 1.332 1.522 0 .99-.597 1.556-1.331 1.556-.756 0-1.353-.565-1.353-1.556 0-.973.597-1.521 1.353-1.521zm8.228.156c1.054 0 1.573.74 1.573 1.963h-3.424c.156-1.288.943-1.963 1.85-1.963zm-38.553 2.702v1.73c-.565.53-1.05.847-1.682.847-.643 0-1.098-.299-1.098-.99 0-.77.693-1.318 2.78-1.587zm23.53 0v1.73c-.562.53-1.05.847-1.677.847-.644 0-1.103-.299-1.103-.99 0-.77.692-1.318 2.78-1.587zm-99.77.72c.23.115.389.35.389.624v1.993a.705.705 0 0 1-.39.571v-.125a.319.319 0 1 0-.635 0v.123a.705.705 0 0 1-.384-.569v-1.993c0-.273.157-.506.384-.622v.16a.319.319 0 1 0 .636 0zm105.373 3.192c.299.078.626.108 1.05.108h1.05c.883 0 1.371.173 1.371.77 0 .66-.853 1.24-2.092 1.24-1.224 0-1.98-.406-1.98-1.097 0-.363.189-.71.6-1.02zm-105.373 3.7a.705.705 0 0 1 .389.571v1.993a.704.704 0 0 1-.39.62v-.179a.319.319 0 0 0-.635 0v.178a.704.704 0 0 1-.384-.619v-1.993a.705.705 0 0 1 .384-.568v.128a.315.315 0 0 0 .32.315.316.316 0 0 0 .316-.315zm81.304 1.12v2.797l.059 1.241c-.597-.518-1.146-.845-2.028-.845-1.676 0-3.263 1.536-3.263 4.048 0 2.546 1.24 4.038 3.173 4.038.83 0 1.618-.452 2.185-1.018h.06l.126.83h1.489v-11.09Zm-17.83.818v10.273h1.827V67.072Zm8.476 2.373c-1.056 0-1.839.547-2.532 1.221h-.062l-.128-1.035h-1.489v7.714h1.807v-5.39c.644-.627 1.08-.96 1.76-.96.846 0 1.206.471 1.206 1.746v4.602h1.804v-4.837c0-1.946-.72-3.061-2.366-3.061zm16.507.002c-1.806 0-3.551 1.536-3.551 4.049 0 2.545 1.663 4.037 3.804 4.037.973 0 1.898-.344 2.637-.832l-.616-1.13c-.562.358-1.127.568-1.788.568-1.24 0-2.12-.789-2.28-2.185h4.902a3.9 3.9 0 0 0 .078-.852c0-2.152-1.098-3.655-3.186-3.655zm8.89.184-.735 1.46c-.19.425-.41.885-.6 1.309h-.061a42.42 42.42 0 0 1-.71-1.308l-.86-1.46h-1.951l2.29 3.693-2.444 4.02h1.885l.815-1.522c.216-.471.455-.93.677-1.368h.062c.264.437.531.914.783 1.368l.944 1.522h1.948l-2.451-3.82 2.28-3.894zm-8.847 1.212c1.056 0 1.574.738 1.574 1.96h-3.422c.155-1.287.94-1.96 1.848-1.96zm-8.77.095c.519 0 1.038.173 1.574.645v3.596c-.52.597-1.024.863-1.62.863-1.116 0-1.743-.895-1.743-2.564 0-1.616.8-2.54 1.79-2.54z" fill="#646464"/>
</svg>;
  }
});