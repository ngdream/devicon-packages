import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'HadoopOriginalIcon',
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
	<path d="m47.17 37.19-8.51 1.383-7.767 3.404-6.595 4.15-6.276 7.658-3.546 3.756-3.429 1.263-.906-2.216 1.585-2.288.356-3.228 1.062.043 1.16 1.058-.312-3.287-1.286-.863.039-1.253-3.047 1.724-2.76 3.255-.575 2.91 1.18 2.33 1.1 3.958 2.239 1.06 2.354-.116 2.233-1.297-1.49 7.552 1.49 8.404-1.64 3.88-5.369 5.786.955 3.456 2.543 4.005 4.796 3.375 2.544.348 2.828.096-1.764 7.244 6.49 2.66 8.084 1.064 2.765-1.809.213-4.893L41 96.656l.213-4.043 7.447.532 6.914-.638-6.914 4.149 1.17 5 4.361 6.808 4.255 1.808 3.404-1.383 1.383-2.766 7.128-5.425 1.383 1.17 11.17.426 2.233-1.809.213-3.191-.745-1.383-.532-8.616-3.723-7.447.638-3.298 2.234 1.17 6.277 5.851 3.085.213 3.404-1.383 3.404-2.553 1.702-5.532 10 .638 6.063-2.34 4.893-4.574 3.51-6.596.852-7.765-.745-9.042-1.915-8.085L121.846 34l-2.659-.851-4.68 5.106-4.256 1.49-3.723-6.17-3.723-3.404-2.021-1.277-8.085-6.702-6.49-3.51-6.488-.532-7.553 1.276-6.595 2.447-4.575 3.723-3.616 4.362-3.724 1.063z" fill="#ff0"/>
	<path d="m81.832 18.227-4.256.17-9.195 2.042-7.15 4.426-4.086 5.79c9.52-1.585 10.738-2.373 15.664 2.724-1.995-3.5-2.578-5.162-2.245-8.47.468-4.66 7.21-5.16 11.268-6.682zM56.805 30.484l-3.916 1.022-7.942 7.83 1.643-1.871-9.195 1.191-7.833 3.235-7.15 5.959-4.596 6.81-3.064 7.322-.342 7.66 1.194 7.493 3.234 8.172c-2.02-10.103-3.64-20.416 3.65-28.918 4.723-5.51 8.753-7.002 15.588-9.22l1.54-1.755-4.774 8.566-1.703 5.108 3.576 4.256c.367-2.384.482-4.117 1.709-6.184 2.425-4.083 5.013-8.071 7.32-12.213 3.225-5.789 5.993-9.518 11.06-14.463z" fill="#ffc"/>
	<path d="M86.332 18.59c2.937 2.727 6.542 5.098 8.89 8.431.91 1.29 1.92 1.95-.015 3.772 2.044-.584 2.803-.52 4.44-.322 2.976.36 5.767 4.592 5.945 7.625-.035.283-.828.927-3.13 1.562-.045.089-1.298-.172-1.267-.088.24.655.56.757 1.047 1.063.106.728.174 1.849.67 2.644 1.448-.025 2.863.134 4.281.414.478.792.405 1.583.366 2.375l1.644-.273-.457-3.746 1.463-2.467-2.102-4.75-4.021-3.838-.387-.02-4.52-2.773-7.374-6.033c-1.825-1.192-3.648-2.385-5.473-3.576zm34.537 14.79c1.243 5.592 2.846 10.751 2.697 16.477-.182 7.025-1.551 15.9-8.06 20.137-7.29 4.744-15.846 2.5-23.844.467l9.776 4.02 9.136.457 6.213-1.827 4.842-4.021 3.654-7.674 1.371-8.861-1.097-8.68-2.01-8.588-2.678-1.906zm-37.51.614-1.052.303-1.655.803c-3.267 2.62-3.644 6.204-2.58 9.998-.29-4.381 2.02-8.876 5.287-11.104zm-14.812.104-6.121.732c-1.919.427-3.837.851-5.756 1.277l-2.832 4.112-1.555 3.93c-1.694 4.634-3.172 8.606-5.738 12.802 3.288-3.542 5.281-6.554 7.164-10.558.731-1.556.869-3.38 2.906-2.702.092 1.554.42 3.107.512 4.66 1.1-7.89 4.204-11.191 11.42-14.253zm52.308.498c-.765.353-1.51.522-1.988 1.222-1.03 1.507-1.912 2.775-3.615 3.832-.858.533-1.745.88-2.654 1.163-.755.234-1.208.024-1.85.486l1.143.199h2.52l3.107-1.918 1.826-1.918 1.511-3.066zM91.28 41.102c-.329.135-.882.462-1.21.597l-2.583.842-3.947 2.986-2.232 2.323c-.455.28-.735.394-1.19.39.717.263 1.54.042 2.408-.187.726 1.538 1.11 2.182 2.551 2.98a7.218 7.218 0 0 0-.844 3.446c2.25-4.5 6.464-6.882 10.864-9.25-.95.19-1.913.45-2.864.753l.622-.308c-.437-1.637-1.04-2.411-2.264-3.569.3-.3.534-.732.69-1.003zm-25.017 2.863c-.122.883-.243 1.767-.366 2.65l.184 5.483 1.553 11.601-2.102 8.772-6.486 1.279-8.315 4.842-4.709.926-6.605-3.114c6.897 9.941 12.77 5.008 23.006 1.653 2.571-.843 4.22-1.143 6.879-.971 2.432-4.17 2.362-6.494 1.73-11.328-.973-7.44-3.213-14.47-4.77-21.793zm-53.68 4.142-.494 1.938c-3.31 2.154-4.609 3.1-4.246 7.092l.988 3.586 1.402.949 1.73.576 3.136-.742 1.607-4.988-4.453 2.185h-1.03l-1.156-1.773 1.403-2.06.742-3.917.95.287 1.153.908-.166-2.062c-.26-.44-.522-.879-.783-1.318l-.783-.66zm21.064 12.944c-.127 2.305-.276 3.266.74 5.303 1.293 2.588 2.881 5.02 4.286 7.578l.455-5.116-5.48-7.765zm58.586 5.504c-4.304 1.242-4.271 1.584-5.543 5.855 1.679-2.692 2.922-4.051 5.543-5.855zm-18.318 5.43c.482 2.701 1.321 3.343 2.592 5.958-.846 4.267-2.205 9.34-3.84 13.104-.69 1.587-1.247 2.463-2.463 3.69-2.053 2.072-4.129 3.879-6.457 5.675-1.675 1.292-2.844.644-4.912.352-.88 1.594-1.122 2.478-2.74 3.287-2.49 1.244-4.717-1.437-6.67-3.014l4.23 6.608 2.924 2.742 2.467.365 3.289-2.01 1.736-3.289 3.655-2.742c1.492-1.28 2.984-2.557 4.476-3.836l2.832-4.02.442-.818-1.172 2.553-3.655 4.295 2.375 1.006h5.94c.177-.466 2.65.476 4.45-.319.503-.222.953-1.032 1.286-1.498 1.176-1.643-1.662-4.843-.803-10.793l-2.558-8.314h-.701c.08-.244.163-.487.244-.73l.273-3.747c-1.37-.61-2.74-1.217-4.111-1.826-1.005-.944-2.124-1.736-3.129-2.68zm25.057 1.765-8.588 1.096c-.213.578-.428 1.158-.64 1.736l.183 2.467.822 1.46 1.28.641 1.003.092c1.352.834 1.324 1.438 1.098 2.01l3.197-1.28 2.07-2.78 1.54-3.965-1.965-1.477zm-84.08 4.719-1.186 2.525c1.089 3.667 2.056 5.988 4.129 9.192-.361 1.297-.632 1.866-1.463 2.923-1.824-.28-3.443-.36-5.29-.355l6.12 4.75 3.014-.549 3.015-3.014-4.293-6.67-4.046-8.802Zm43.789 5.513c-1.463 1.585-2.643 3.05-3.838 4.842-4.224 1.937-9.092 2.194-13.703 2.194l-.092 1.279.365.365 3.381.365 10.414-.273 1.371-2.01c.353-2.826.77-4.248 2.102-6.762zm-18.54.594c-.787 4.742-.598 7.92-2.78 12.168-1.63 1.89-3.637 3.608-5.936 4.527.194 1.165.251 1.893.139 2.747-.405 3.071-6.55 1.714-9.077 1.591 4.055 1.044 8.11 2.09 12.164 3.133l2.743-1.097.912-5.3 2.558-4.75.457-2.923-.822-6.852c-.12-1.08-.238-2.162-.357-3.244z" fill="#cc0"/>
	<path d="M64.525 16.049c-6.041 1.48-7.819 2.534-9.826 9.537 2.552-5.13 4.485-7.018 9.826-9.537zm15.536.373c-3.958.078-8.163 1.269-13.018 3.312-2.678 1.127-4.668 2.461-6.4 4.063-1.655 1.53-3.062 3.304-4.606 5.361-.895.064-1.695.19-2.506.514-.895.358-1.797.937-2.877 1.89a65.486 65.486 0 0 0-2.213 2.043v.002a77.012 77.012 0 0 0-1.941 1.956c-5.05.81-9.169 1.705-12.854 3.132-3.769 1.46-7.092 3.47-10.505 6.496a27.637 27.637 0 0 0-3.659 3.926 28.919 28.919 0 0 0-2.695 4.285c-.686.76-1.373 1.527-2.117 2.198-.722.649-1.492 1.197-2.354 1.529-.5.193-.708.305-.73.297-.016-.008-.062-.185-.076-.242 1.228-1.181 1.429-2.906 1.543-4.623a6.2 6.2 0 0 1 .445.623c.163.253.332.512.533.765l.84 1.06.295-1.322c.248-1.108.433-2.585.145-3.865-.187-.827-.58-1.558-1.247-2.082.062-.16.13-.342.188-.488.211-.54.427-1.094.611-1.617l.366-1.035-1.084.187c-1.443.25-4.544 1.955-6.727 4.22-.81.842-1.507 1.77-1.965 2.747-.476 1.015-.69 2.079-.506 3.142.16.927.633 1.834 1.473 2.692.153.618.295 1.172.447 1.656.174.554.362 1.047.596 1.533.635 1.322 1.648 2.13 2.82 2.506.95.305 2.003.317 3.033.088a27.084 27.084 0 0 0-.4 3.686c-.064 1.725-.002 3.63.188 5.841a30.254 30.254 0 0 0 .43 3.063l-.575 1.564-.893 2.426-1.962 1.945-1.833 1.815c-.05.05-.256.248-.443.428-1.237 1.19-1.482 1.428-1.13 3.523a12.794 12.794 0 0 0 1.296 3.84 13.836 13.836 0 0 0 2.469 3.332c1.306 1.309 3.444 2.934 5.683 3.785 1.277.485 2.592.72 3.827.526-.064.192-.114.378-.184.572a21.549 21.549 0 0 1-.652 1.603c-1.52 3.331.041 5.071 2.468 6.178 1.212.552 2.653.929 3.993 1.277.273.071.547.141.892.235 1.587.429 4.327 1.216 6.83 1.375 2.733.173 5.199-.39 5.86-2.844.261-.972.413-1.717.474-2.445.057-.671.03-1.358-.047-2.194.77-1.7 1.116-2.23 1.682-3.058l.287-.424c.61-.906.896-1.548 1-2.272.1-.698.017-1.393-.11-2.457-.01-.095-.036-.278-.06-.459 1.6.206 3.18.33 4.748.34a40.63 40.63 0 0 0 2.375-.066c-.22.114-.371.204-.61.326l-.296.152c-2.11 1.085-2.198 3.141-1.537 5.256.596 1.907 1.821 3.853 2.59 5.037 1.616 2.492 3.16 4.6 5.03 5.746 1.96 1.202 4.2 1.344 7.09-.22 1.472-.796 1.935-1.61 2.56-2.703.197-.346.417-.723.662-1.094.577-.37 2.058-1.584 3.578-2.84.495-.409 1.027-.842 1.584-1.295.392.287.865.487 1.435.623.744.178 1.63.26 2.692.336.794.058 3.387.055 5.06.055.517 0 .945 0 1.203.002 1.728.01 3.124-.08 4.178-.678 1.124-.637 1.789-1.765 1.934-3.787.064-.899.075-1.453-.05-2.02-.115-.524-.35-1.012-.734-1.705l-.07-2.63-.074-2.784c-.03-1.093-.15-1.98-.371-2.853-.22-.869-.535-1.705-.955-2.705-.285-.678-.516-1.3-.742-1.91v-.004c-.361-.974-.723-1.924-1.221-2.938.033-.196.068-.407.1-.633l.964.93 1.42 1.367c1.084 1.044 2.075 1.993 3.239 2.68 1.202.71 2.555 1.122 4.306 1.039 1.835-.087 3.796-.859 5.412-2.05 1.563-1.154 2.818-2.71 3.342-4.433l.453-1.494c.122-.4.246-.802.367-1.203 2.572.437 5.328.586 7.995.307 2.573-.27 5.059-.925 7.203-2.069 3.15-1.681 5.514-4.16 7.213-7.101 1.897-3.287 2.96-7.158 3.363-11.143.324-3.196.147-7.543-.518-11.734-.592-3.736-1.575-7.36-2.937-9.969a3.948 3.948 0 0 0-.73-.951c-.678-.668-1.68-1.298-2.716-1.654-1.097-.378-2.255-.455-3.173.025a2.619 2.619 0 0 0-.657.486c-.595.604-1.097 1.335-1.6 2.069-.559.817-1.12 1.638-1.792 2.213-.785.67-1.769 1.074-2.694 1.445a18.186 18.186 0 0 0-1.375-2.71c-.628-1.004-1.344-1.945-2.132-2.884a11.813 11.813 0 0 0-1.948-1.857c-.68-.518-1.375-.956-2.185-1.463-2.173-1.36-4.022-2.982-5.908-4.637-.858-.752-1.724-1.512-2.57-2.21-4.493-3.705-8.683-5.5-13.165-5.782a20.34 20.34 0 0 0-1.681-.035zm-20.34.062c-3.047.734-3.627 1.298-4.541 4.284 1.458-2.187 2.297-2.898 4.54-4.284zm20.281 2.487c4.734-.208 8.991 1.386 13.762 5.396 2.198 1.848 4.117 3.642 6.345 5.237a8.039 8.039 0 0 0-2.425.576c1.12-.214 2.417-.002 3.58.21.326.212.661.419 1.006.622 1.572.927 2.465 1.437 3.529 2.92a31.597 31.597 0 0 1 2.888 4.857c-.54-.193-.995-.356-1.4-.477a3.018 3.018 0 0 0-2.84.176l-.064.032c-.87.423-2.22.906-3.121 1.052.46.16 1.477.22 1.957.03.064-.026.13-.047.197-.063a3.01 3.01 0 0 0-.4 1.24 3 3 0 0 0 .32 1.674c0 .002.002.002.004.004.081.192.194.369.318.496-.412.152-.832.327-1.265.516 2.011-.307 3.825-.36 5.789-.102.13.62.26 1.274.38 1.942-.243.019-.487.04-.73.058l-.059.004c-.929-.742-1.962-.618-3.377-.295-4.3.98-3.29 3.394-5.269 7.03 2.054-2.512 1.903-5.137 5.25-5.93.78-.185 1.31-.417 1.838-.338-.95.478-1.772 1.271-2.098 2.191-.919 2.595-.348 4.78-1.357 7.203 1.25-2.166 1.325-4.279 2.443-6.558.402-.819 1.892-2.13 2.807-2.15l.754-.016c.22 1.442.353 2.875.267 4.062-.156 2.168-.717 5.383-1.054 6.614 1.132-1.456 1.647-4.539 2.144-6.71.518-2.26.39-4.972-.064-7.4-.623-3.331 2.808-2.79 4.8-4.36 1.465-1.154 2.472-2.998 3.815-4.304 1.332-1.295 3.427.61 3.951 1.875 2.271 5.495 3.307 14.14 2.707 19.678-.673 6.215-3.676 12.998-9.158 16.058-6.988 3.9-15.227 1.52-22.17-.82-1.482-.499-2.514-1.228-3.816-2.049.354 1.597.516 3.288.044 4.883-.749 2.53-1.959 6.672 1.477 7.436 1.308.29 1.902.247 3.748-.705-1.494.337-2.248.256-3.275.066-.931-.171-1.424-.764-1.684-1.46.325.234.856.36 1.762.58 2.547.613 4.974-.611 5.449-2.378.277-1.032.228-1.574.814-2.98.527.162 1.073.31 1.631.445l-.945 3.088c-.819 2.67-4.008 4.823-6.824 4.773-2.604-.046-4.254-1.676-6.051-3.275a1419.44 1419.44 0 0 0-3.611-3.2c-3.24-1.021-5.837-2.216-8.844-4.443 2.14 2.515 3.592 3.907 6.576 5.159-.434 4.427-1.973 7.655-3.285 11.892-.593 1.916-5.281 9.593-6.58 10.342-.926.533-6.727 5.42-7.818 6.064-.813 1.08-1.527 2.571-2.749 3.217-3.723 1.97-6.117-1.802-8.12-4.986-.913-1.45-3.445-5.628-1.237-6.799 2.088-1.106 3.258-1.896 5.389-3.295.313.57.849 1.122 1.199 1.692l-.232-1.87c-.14-1.129-.135-2.047-.045-3.183l.26-3.3c-.321 1.117-.962 2.234-1.282 3.353-.128.447-.234.81-.295 1.144a37.646 37.646 0 0 1-14.308.186 89.26 89.26 0 0 0-.989-4.938c-.094 1.481-.033 5.575-.04 7.867-.007 1.777-.08 2.386-.997 3.897-.857 1.415-1.221 1.735-2.422 4.125.1 1.508.102 2.506-.298 3.937-.667 2.38-7.39.537-9.163.051-2.183-.598-6.697-1.487-5.562-4.398 1-2.562 1.633-5.263 2.121-8.848-4-5.763-7.722-13.662-8.436-20.66-.554-5.434-.222-8.78.954-12.104 1.863-5.266 4.47-9.825 8.652-13.496 5.642-4.95 10.916-6.938 19.174-8.195-1.986 2.223-3.95 4.573-6.092 7.094-2.168 2.552-3.456 5.129-4.832 7.92-1.902 3.854-1.86 5.32.66 8.705 2.172 2.916 3.345 4.23 4.293 7.084-.783 1.614-1.069 2.978-1.332 5.183 2.66 2.907 4.636 4.898 7.219 5.512 2.533.602 4.648.486 6.914-.672 5.033-2.573 9.69-5.896 15.367-6.033 2.627-6.458 2.363-11.854 1.102-18.102-.862-4.267-1.207-8.308-1.475-12.658-1.065 4.48-1.264 8.42-.475 12.883.953 5.378 1.693 11.319-.957 16.045-5.133.393-9.534 3.517-14.162 5.914-1.86.964-3.794 1.057-5.853.492-1.911-.525-3.201-1.79-5.26-4.164-.032-2.384.505-3.484 1.6-5.643 1.758-3.466 3.701-6.693 5.832-10.105-2.61 3.149-5.082 5.78-7.135 8.945-.785-2.236-1.907-3.37-3.766-5.888-1.816-2.46-2.006-3.536-.648-6.381 1.365-2.86 2.524-5.374 4.847-7.883 4.015-4.335 7.692-9.16 12.082-13.43 2.384-2.318 3.352-2.237 6.514-2.717 2.858-.433 5.648-.979 8.563-1.656-2.82.263-5.545.358-8.29.426l-.083.002c2.7-3.448 4.265-5.368 8.65-7.273 4.723-2.052 8.693-3.304 12.375-3.465zm3.756 14.877c-5.874 1.47-6.976 3.936-6.22 7.728.643-2.853 1.788-5.601 6.22-7.728zm-17.403.322c-2.377.269-4.75.515-7.128.74-1.997.19-2.319.157-3.735 1.557-2.153 2.129-4.245 9.433-4.914 12.355 1.053-2.427 3.689-9.217 5.71-10.945.558-.478.947-.771 1.366-.984-1.446 2.425-1.341 3.03-.834 6.279.432-3.303 1.574-4.58 3.45-7.045a49.516 49.516 0 0 0 6.085-1.957zm54.54.277c-1.362 2.758-3.463 5.064-6.317 6.477-1.531.757-2.509.494-4.219.332 1.74.499 2.84 1.126 4.547.517 3.478-1.24 5.155-4.035 5.989-7.326zm-12.157 4.45c.12.252.237.507.352.767-.095.07-.187.145-.272.223a3.065 3.065 0 0 0-.662-.975c.19-.007.383-.011.582-.016zm-17.394 2.132c-1.916.886-4.145.67-5.787 1.78-1.448.977-3.446 4.075-4.916 5.388 1.065-.413 2.09-1.128 3.035-1.883a3.94 3.94 0 0 0 2.119 3.467 8.888 8.888 0 0 0-1.283 2.344c2.8-3.32 6.862-5.825 10.68-6.896-1.068-.016-2.333.184-3.62.607a3.939 3.939 0 0 0-2.574-3.277c.853-.456 1.692-.936 2.346-1.53zM7.043 44.48C1.958 48.064.689 49.691 1.375 56.943c.504-5.706 1.614-8.168 5.668-12.463zm-4.314 2.157C.159 48.43-.174 49.17.064 52.283c.56-2.568 1.081-3.538 2.665-5.646zm9.494 1.039c-.374.802-.638 1.408-.819 2.033-.784 2.71.354 5.13-2.105 7.094 1.156 2.332 1.102 3.261 3.79 2.183 1.038-.415 1.894-.998 2.657-1.687a49.902 49.902 0 0 0-1.172 3.412c-1.923.816-4.452 1.336-5.42-.686-.47-.98-.735-1.943-1.078-3.183-3.167-3.281 1.568-7.613 4.147-9.166zm.656 1.467c.655.381.828 1.074.9 2.007-.39-.39-.703-.657-1.209-.6a7.53 7.53 0 0 1 .309-1.407zm79.3 17.43c-.694.117-1.94.372-2.634.49-1.855.313-2.073.759-2.361 2.585-.136.86-.324 1.927-.46 2.788.364-.973.803-2.104 1.227-3.032.449-.98.7-1.073 1.653-1.591.675-.368 1.9-.873 2.576-1.24zM15.007 79.378c1.458 5.041 3.94 9.994 6.691 14.158v.074c-.172.716-.37 1.413-.789 1.973-1.967 2.632-6.971-1.23-8.42-2.709-1.583-1.617-2.644-3.533-2.896-5.328-.184-1.31-.006-1.341.908-2.268l3.695-3.74.81-2.16zm66.166 3.295c.301.977.538 1.946.976 2.984.732 1.734 1.089 2.807 1.141 4.668l.168 5.889c.628 1.1.727 1.334.615 2.59-.227 2.564-1.083 2.734-3.336 2.695-1.023-.018-5.097-.038-6.13-.127-1.461-.126-2.28-.255-2.727-.588 2.295-1.685 6.195-8.64 6.955-11.035.803-2.53 1.683-4.738 2.338-7.076z"/>
	<path d="M104.414 40.664a1.223 1.223 0 0 0-1.2 1.123c-.037.392.176.894.444 1.168.642-.236 1.264-.42 1.887-.525a1.244 1.244 0 0 0-1.13-1.766zm-18.09 5.873a1.652 1.652 0 0 0-1.498 2.363 1.8 1.8 0 0 0 .969.883 10.448 10.448 0 0 1 2.11-2.066 1.644 1.644 0 0 0-.09-.238 1.66 1.66 0 0 0-1.49-.942z" fill="#ffc"/>
</svg>;
  }
});