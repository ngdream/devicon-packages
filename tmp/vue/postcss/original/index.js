import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PostcssOriginalIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#DD3A0A'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M19.344 60.441c-.172.305-.344.563-.516.868l-.258-.133c-.175.992-.78 1.86-1.383 2.031.172.086.344.172.477.129.125-.043.211-.262.3-.39l1.165-1.684.39-.653-.171-.172ZM4.964 79.426c.22 0 .434.043.692.043 0-.172.219-.133.219-.301h.129c0 .215.043.387.043.605H5.14c-.043-.043-.215-.304-.172-.347Zm-.343-1.989c-.129-.132-.344-.257-.344-.39-.043-.168.086-.383.215-.602.086.305.13.563.215.868-.043.039-.086.082-.086.124Zm1.082-2.769c.172.437.344.914.516 1.348-.043 0-.301.129-.344.171-.172-.433-.387-.91-.563-1.34.043-.042.305-.175.391-.175Zm96.129 41.344c.215-.082.473-.13.82-.211-.39.3-.691.515-.949.773-.047-.039-.09-.086-.133-.086.086-.172.172-.3.262-.476ZM48.754 24.64c.254-.176.473-.305.73-.477l.086.086c-.261.344-.476.688-.777 1.121-.043-.297-.043-.473-.09-.687-.043 0 0 0 .047-.043Zm12.652 21.88c.387-.176.778-.344 1.25-.563-.043.258-.043.434-.043.605a1.553 1.553 0 0 0-.433-.085c-.258.043-.735.386-.95.43-.042 0 .172-.344.172-.387Zm32.39 36.667c.087.434.907.649.087 1.083.133.09.258.128.387.218a.323.323 0 0 1-.086.176c-.086.04-.258.125-.344.082-.043 0-.13-.172-.13-.258 0-.39.044-.777.087-1.297Zm0-8.648c.044 0 .087.043.087.043l-.043-.047c0-.043 0-.043-.043 0Zm6.825 42.727c-.476.343-.953.648-1.558.777-.043-.043-.043-.086-.086-.133.476-.3.992-.601 1.468-.906.043.082.13.172.172.258ZM19.648 58.668c.477-.602.954-1.207 1.47-1.813.038.043.382.13.429.172-.477.606-1.125 1.426-1.602 2.075-.086-.086-.215-.387-.3-.434ZM7.383 79.859c-.344-.734-.692-1.511-1.035-2.246.043-.043.343-.175.386-.175.477.69.692 1.511 1.04 2.25 0 0-.344.171-.391.171Zm11.012-20.757c-.258.39-.516.824-.778 1.214-.043-.046-.515.172-.558.13.257-.391.906-1.083 1.164-1.473.043.043.086.09.172.132ZM96 119.039c.043 0 .043-.039.086-.039.3.04.644.082.992.082-.562.39-.91.348-1.082-.043ZM18.477 60.918c.046-.129.132-.258.218-.387.086 0 .215-.047.215-.047.176-.3.176-.515.348-.777-.043-.043-.086-.043-.133-.086-.258.176-.516.395-.773.566.085.086.085.13.085.215-.343-.043-.476.133-.648.606-.043.133-.258.172-.477.344-.042.09-.085.304-.171.52l.043.046a.675.675 0 0 1-.215.133c-.258.258-.563.476-.82.73-.044.133-.087.262-.087.39.305-.3.82-.862 1.211-1.21l.043.043c.172-.258.301-.516.477-.777.039.043.039.086.086.132-.133.344-.262.73-.39 1.078-.09.043-.22.13-.22.086-.171.133-.3.301-.476.434l-.777.516c-.43.39-.864.734-1.336 1.125-.305.476-.606.906-.953 1.472.52-.132.648.086.605.52.605.086.648-.39.82-.738.043-.086.09-.262.172-.305.39-.344.824-.645 1.254-.992.086-.086.086-.262.086-.39 0-.044-.219-.044-.348-.087.391-.433.954-1.164 1.34-1.64.215-.133.43-.305.43-.434-.04-.477.262-.606.61-.781-.176-.13-.22-.258-.22-.297Zm109.175-5.273c-.086-1.688-.129-3.375-.3-5.063-.305-2.289-.606-4.625-1.125-6.875-.387-1.86-1.032-3.633-1.684-5.406-.82-2.074-1.64-4.192-2.676-6.184-1.683-3.199-3.887-6.054-5.918-9.035-1.34-1.906-3.066-3.46-4.363-5.406-.734-1.125-1.813-2.074-2.895-2.938-1.726-1.386-3.539-2.644-5.355-3.851-1.379-.953-2.762-1.86-4.23-2.684-1.168-.648-2.418-1.168-3.63-1.73-1.382-.649-2.718-1.43-4.273-1.73-.39-.083-.734-.216-1.125-.345-.992-.347-1.941-.734-2.937-1.039-1.512-.476-2.977-1.035-4.536-1.425-1.503-.391-3.062-.649-4.617-.868-1.726-.254-3.496-.343-5.226-.511C71.64.422 70.52.293 69.437.25c-1.64-.082-3.324-.082-4.964-.125-.82-.047-1.684-.133-2.504-.09a37.01 37.01 0 0 0-3.758.348c-1.207.129-2.418.344-3.582.52-1.422.171-2.848.257-4.274.433-1.34.172-2.722.434-4.058.648-.477.086-.953.258-1.426.344-1.035.219-2.117.305-3.152.652a86.197 86.197 0 0 0-5.528 1.903c-1.683.691-3.324 1.426-4.921 2.293-1.641.906-3.2 1.984-4.75 3.027a74.594 74.594 0 0 0-4.368 3.152c-1.379 1.086-2.675 2.293-3.93 3.504-.687.692-1.25 1.516-1.898 2.293-1.078 1.254-2.16 2.465-3.195 3.762-.86 1.082-1.64 2.207-2.461 3.332-1.465 1.984-2.719 4.106-3.883 6.227-.476.863-.906 1.73-1.34 2.593-.648 1.293-1.34 2.551-1.941 3.891-.434.91-.781 1.902-1.04 2.898a401.29 401.29 0 0 0-1.769 6.399c-.52 1.906-.648 3.894-.687 5.84-.047 1.73.129 3.418.3 5.144.044.434-.214.953.301 1.297-.171.477-.043.738.215.82-.3.477.13.782-.039 1.215-.047.086.13.258.211.387 0 .133-.039.305 0 .434.047.39.219.777.219 1.21 0 .305.258.649.344.954.043.129 0 .343-.086.433-.258.301-.215.559.172.735.218.558.132.82.09 1.082.085.386-.048.515 0 .605.343.692.476 1.469.515 2.246 0 .176.086.348.176.563.043 0 0 .82 0 .82.21-.125.386-.168.601-.258.133.563.262 1.086.434 1.559.215.347.215.515.129.558.172.778.258 1.516.558 2.25 0-.82-.082-1.64-.21-2.421.601.218 1.12.433 1.468.433.043-.133.086-.305.13-.39-.259-.258-.477-.645-.735-.907.086.344 0 .477 0 .61-.172-.09-.39-.176-.606-.266.172-.21.348-.43.606-.687 0-.391-.215-.739-.82-.696.257-.086.519-.21.82-.3.476-.258-.043-.735-.043-1.34.043-.735-.39-1.47-.52-2.246-.215-1.211-.172-3.028-.3-4.239-.258-.219-.477.344-.52.387a64.8 64.8 0 0 1 .344 3.113c-.258-.863-.43-1.816-.645-2.855-.043.304-.086.433-.086.61-.215.21-.043.476.086.776-.3-.132-.648-.085-.648-.085v1.21c-.43-.433-.559-.777-.778-1.082-.086-.343-.129-.691-.21-1.035.081-.218 0-.347 0-.476-.047-.305-.09-.649-.133-1.04.043-.042-.043-.687-.043-.687.343.04.562.082.777.082-.43-.558-.129-.906.047-1.254.086-.172.387-.215.473-.39.347-.649.91-1.164.91-1.989 0-.39.129-.82.172-1.21.086-.735.171-1.473.21-2.208.09-.949 0-1.902.22-2.808a61.37 61.37 0 0 1 1.253-4.54 48.004 48.004 0 0 1 1.168-3.202c.645-1.684 1.254-3.371 2.074-4.97 1.164-2.339 2.504-4.585 3.801-6.878.82-1.426 1.684-2.766 2.59-4.152.863-1.34 1.723-2.723 2.719-3.977 1.386-1.773 2.894-3.418 4.578-4.887 1.73-1.558 3.371-3.156 5.226-4.586a52.59 52.59 0 0 1 7.684-4.933c2.203-1.164 4.492-2.074 6.781-2.942 1.469-.558 3.067-.82 4.578-1.296 1.727-.563 3.454-.82 5.266-.864 1.168-.043 2.293-.176 3.457-.304a81.45 81.45 0 0 0 3.195-.301c-.129.172-.172.261-.214.347-.473.692-.993 1.383-1.47 2.075-.386.562-.82 1.168-1.206 1.73-.696.91-1.43 1.817-2.074 2.77-.997 1.425-1.903 2.898-2.938 4.324-1.035 1.383-2.16 2.68-3.238 4.02-1.426 1.863-2.766 3.761-4.188 5.62-1.297 1.774-2.676 3.465-3.93 5.239-1.124 1.55-2.117 3.199-3.199 4.793-1.593 2.383-3.191 4.715-4.789 7.093a455.561 455.561 0 0 1-3.8 5.407c-.086.133-.22.172-.344.258-.348.562-.348.863-.477 1.125-.344.648-.691 1.296-1.082 1.902-.215.344-.515.648-.777.992-.043-.52.691-.777.344-1.426-.211.348-.43.649-.645.996l-.52 1.032c.172.132.477.218.172.476-.129.219-.257.477-.386.696.215-.133.343-.258.476-.434 0 .477-.262.863-.476 1.254-.172.344-.606.605-.907.863.043.043.344.172.387.215.39-.129.52-.344.563-.215.132-.172.261-.3.304-.433.168-.43.43-.778.86-.95.175-.086.304-.218.433-.343 1.297-1.344 2.633-2.641 3.801-4.067 1.813-2.207 3.457-4.5 5.184-6.746.734-.953 1.597-1.902 2.375-2.812.129.992.043 1.945 0 2.855-.133 1.598-.22 3.2-.344 4.84-.047.648 0 1.297-.047 1.945 0 .176-.129.305-.129.477 0 .433.129.91.129 1.34-.129 1.601-.305 3.156-.434 4.757-.043.344.13.692.211.996-.21 2.333.266 4.801-.125 7.266.301-.476.387-.777.387-1.082.043-.258 0-.516 0-.82v-.434c.043-.777.215-1.597.129-2.379-.086-.863-.086-1.683.086-2.508.09-.343-.043-.777.176-1.21v.648c-.043 2.46.043 4.93-.301 7.395-.043.214.133.605-.344.562-.39.777.086 1.34-.344 1.773-.09.086.082.473.125.735-.175.52-.175.52.086.562.043.95.13 1.813.172 2.723.688-1.64.344-3.332.649-5.016.043.692.086 1.383.043 2.114 0 1.129-.043 2.21-.086 3.332 0 .218-.043.433-.086.652-.133.605-.172 1.21-.39 1.77-.173.433-.083 1.085-.083 1.601v1.645c.172.738-.047 1.125.082 1.558-.129.434-.172.563-.129.692l.13.648c.866-.086.476.563.82.91-.258.348-.172.473-.172.649 0 .39-.04.738-.082 1.125 0 .996-.043 1.988-.043 2.941 0 .133.043.258.043.387 0 .09-.043 1.215-.043 1.215.086.129 0 .257-.133.386-.043 0-.172-5.492-.172-5.492h-.649c-.082 2.594.133 4.93-.343 7.352-.52.043-.688.129-1.254.129-1.34 0-2.676 0-4.016.043-1.597 0-3.152.043-4.75.043-.777 0-1.597.085-2.375.085-1.035 0-2.117-.128-3.148-.128-1.602 0-3.157.129-4.754.171-1.164.043-2.332.043-3.496.09-.778.04-1.559.082-2.332.168-.348.043-.649.172-1.082.305-.13 0-.43-.043-.688 0-.437.086-.82.344-1.258.43-.644.132-.82.304-.734.953v.433c-.043.082.953-.132.953-.132-.09 0-.133.257-.262.476.348-.133.563-.219.778-.305.648.305 1.21.133 1.726.266 1.684.43 3.41.606 5.137.773 1.125.09 2.203.133 3.328.176 1.594.086 3.195.172 4.79.172 1.34 0 2.636-.133 3.972-.133 1.855 0 3.715.086 5.57.133.39 0 .82-.047 1.254-.047h3.149c2.812-.086 5.617-.129 8.425-.21 1.598-.048 3.239-.133 4.836-.176l4.926-.133c1.898-.043 3.797-.043 5.656-.082 1.426 0 2.805-.047 4.235-.09 1.593-.043 3.234-.172 4.836-.258.863-.043 1.726-.133 2.59-.215 1.038-.086 2.117-.215 3.152-.258 1.554-.09 3.152-.132 4.71-.218 1.942-.13 3.884-.301 5.872-.344 1.812-.086 3.668-.043 5.484-.086 1.598-.047 3.195-.133 4.84-.176l2.723-.129s1.812-.043 2.718-.133c1.555-.085 3.11-.257 4.665-.3.992-.043 1.984 0 2.976-.043 1.598-.043 3.238-.133 4.84-.133.601 0 1.25.09 2.027.133-.344.3-.562.476-.82.691.172.043.344.133.516.215a1.135 1.135 0 0 1-.688.215c-.09.219-.176.305-.262.738h.778c-.301 0-.563.39-.864.649-.343-.09-.648 0-.82.476.3.172.258.3.215.477-.516.168-.906.343-.688.906-.175.082-.39.172-.609.3-.21.344-.602.43-.516.907.172.043.344.133.477.172-.219.086-.434.215-.648.3-.778.477-.43.696-.258.91-.133.087-.262.173-.39.216.085.39.214.476.257.476-.172.13-.39.305-.648.52-.13.39-.305.562-.477.82-.172.258-.258.605-.477.863-.902.996-1.55 2.168-2.718 2.946-.434.3-.82.691-1.207 1.082-.778.734-1.47 1.554-2.29 2.25-1.078.906-2.199 1.726-3.367 2.546-1.425.997-2.847 1.993-4.273 2.942-.777.52-1.64.906-2.461 1.383-.824.476-1.602.91-2.422 1.383-.516.343-.992.82-1.555 1.082-1.425.609-2.937 1.125-4.406 1.687-1.426.61-2.46 1.125-3.539 1.516a24.94 24.94 0 0 1-3.066.82c-.344.086-.735 0-1.125.043-.735.133-1.47.305-2.203.39-1.899.258-3.801.434-5.7.692-1.125.133-2.203.344-3.324.477-.777.043-1.598-.043-2.375-.043-.562 0-1.168.132-1.73.043-.907-.13-1.813-.344-2.72-.516-.214-.043-.519-.133-.69-.043-.344.172-.649-.086-.997 0-.21.043-.43-.133-.644-.133-.176-.039-.39.047-.61 0-.472-.129-.902-.3-1.425-.258-.516.043-1.035-.215-1.594-.343-.777-.176-1.508-.344-2.29-.52-.3-.086-.558-.219-.862-.39-1.121 0-1.86-.044-2.547-.301-.606-.215-1.168-.52-1.817-.434-.168.043-.3-.039-.472-.039-.133-.176-.258-.523-.387-.523-.863.046-1.383-.688-2.117-.907-.387-.132-.692-.562-1.078-.691-.953-.39-1.727-1.211-2.805-1.34-.348-.043-.691-.219-1.082-.344.133.168.215.301.344.43-1.25-.61-2.418-1.297-3.582-1.945-.172-.043-.301-.215-.43-.305l-1.168-.777c-.645.132-.906-.13-1.082-.215-1.164-.82-2.5-1.344-3.625-2.25-.477-.39-1.035-.649-1.379-1.125-.61-.735-1.34-1.254-2.16-1.688-.649-.343-1.254-.734-1.856-1.12-.304-.22-.609-.477-.609-.954 0-.305-.125-.605-.516-.433-.171-.258-.343-.563-.562-.649-.516-.21-.863-.605-1.25-.95-.39-.347-.691-.823-1.164-.995-.867-.344-1.387-1.078-1.902-1.684-1.211-1.43-2.29-2.988-3.415-4.496-.085-.133-.257-.219-.386-.348.172.477.386.864.601 1.297-.43-.172-.73-.476-.988-.777-.047.043 2.977 5.016 2.977 5.016.261.386.476.777.734 1.168a1.34 1.34 0 0 1-1.297-.692c-.387-.691-.82-1.125-1.684-1.035a7.734 7.734 0 0 1-.21-.953c-.176 0-.305 0-.61-.043a89.18 89.18 0 0 1 1.688 2.723c-.22-.13-.344-.215-.438-.258.778.82 1.34 1.86 2.332 2.379.215.992 1.34 1.468 1.598 2.421-.211-.046-.39-.09-.606-.132-.343-.43-.734-.864-1.12-1.34.085.305.21.562.386.777.52.649.996 1.297 1.598 1.86.218.222.52.308.52.699.343.172.476.21.605.21.086.262-.043.653.472.567.348.649.692.649 1.168.434.563.562.864.605 1.254.261 0 .211.04.43.04.602.175-.086.132-.215.132-.43.215.172.344.258.43.344.433.606.82 1.168 1.426 1.645.82.691 1.554 1.425 2.328 2.074 1.515 1.254 3.203 2.293 4.883 3.246 2.074 1.168 4.062 2.422 6.175 3.543 2.547 1.344 5.27 2.25 8.075 2.898 1.039.22 2.03.434 3.07.692.902.261 1.812.652 2.719.867 1.382.3 2.804.562 4.187.82.3.043.61.086.953.13.387.089.86-.087.946.046.218.344.39.168.648.125.3-.086.648-.086.992-.086 1.211.043 2.375.3 3.586.219.262 0 .648-.219.867.21.387-.171.602-.171.774-.21.047.387 0 .387-.082.43-.086.042-.22.085-.391.214 1.555.301 3.023.344 4.316 0 2.25.172 4.192-.086 6.051-.734.172.215.301.52.559.086.086-.129.305-.176.476-.219.387-.086.864-.258 1.207-.129.391.13.524-.215.82-.215a7.86 7.86 0 0 0 1.473-.132c.258-.04.52-.172.82-.258a2.095 2.095 0 0 0-.952-.219c.52-.258.996-.477 1.472-.687-.09.128-.176.3-.347.3h.605c-.133 0-.305.387-.52.649 1.551-.39 2.977-.739 4.36-1.086-.477-.906.516-.602.863-1.121-.43.133-.863.258-1.297.343 1.469-.734 2.98-1.382 4.45-2.027-.215.258-.477.387-.864.606.258.039.434.039.563.082.687.218.52-.43.734-.82.82 0 1.164-.13 1.55-.258.434-.133.864-.262 1.298-.434.691-.3 1.34-.688 2.031-1.035.129-.043.344 0 .516 0 .476-.305.648-.563.777-.52.605.086 1.035-.133 1.207-.691.3-.215.52-.39.734-.52.95-.52 1.856-1.039 2.805-1.554.348 0 .52 0 .606-.047a18.966 18.966 0 0 0 1.601-.864 3.644 3.644 0 0 1-.433-.214c.43-.09.558-.13.82-.22 1.035-1.214 2.46-2.034 3.539-2.984.476-.043.476-.171.476-.257.172-.22.344-.477.559-.653.953-.863 1.984-1.597 2.852-2.507a61.005 61.005 0 0 0 3.582-3.895c1.035-1.211 2.074-2.418 2.937-3.762 1.211-1.86 2.246-3.761 3.324-5.71.778-1.38 1.47-2.766 2.25-4.15.082-.128.258-.3.387-.3 1.164-.133 2.332-.215 3.457-.348.258-.043.559-.21.82-.343-.132-.215-.218-.477-.343-.692-.176-.261-.434-.476-.61-.738-.172-.215-.3-.477-.43-.734-.132-.215-.257-.387-.39-.606-.262-.476-.52-.953-.738-1.469-.043-.132-.13-.343-.082-.476.777-1.684 1.078-3.5 1.812-5.188.735-1.73.95-3.675 1.297-5.535.3-1.773.473-3.547.688-5.316.132-1.254.304-2.465.343-3.719.266-1.988.176-3.852.133-5.71-.043-1.642-.133-3.329-.215-4.974Zm-108.347 53.23c-.305-.344-.563-.734-.864-1.082l.13-.129c.472.52.949 1.04 1.421 1.602-.258-.133-.558-.22-.687-.391Zm.687.39c.133-.042.262-.042.39-.085.134.215.22.472.345.734-.602-.047-.903-.305-.73-.648Zm44.914 17.86v-.133c.82-.086 1.598-.172 2.418-.258v.13c-.82.128-1.597.21-2.418.257ZM75.79 126c-.602.133-1.25.219-1.855.305-.215.043-.477.261-.563-.13-.086.044-.172.044-.258.087.215.648.735.129 1.164.386-.949.133-1.851.22-2.761.348v-.086c.261-.043.562-.086.82-.133v-.129c-.43-.043-.863-.085-1.297-.085-.125 0-.3.175-.43.218a2.168 2.168 0 0 1-.562.086c-.734.043-1.465.043-2.16.086-.043 0-.13-.043-.172-.043v-.133c2.89-.386 5.742-.773 8.637-1.164.043.086.043.172.085.258-.257 0-.43.09-.648.133Zm.648-.43c.997-.132 1.903-.215 2.852-.343-1.984.558-2.633.644-2.848.343ZM38.825 38.258c1.38-1.903 2.805-3.805 4.188-5.75.43-.567.777-1.172 1.207-1.735.133-.171.304-.257.52-.433l-.044-.082c.172-.215.344-.39.434-.563.219-.343.348-.734.52-1.125.042-.082.171-.168.171-.168.61.301.61-.343.82-.562a31.02 31.02 0 0 0 1.126-1.34c.257-.348.515-.648.734-1.04.043-.132-.086-.343-.133-.519h-.129c.133-.086.262-.214.39-.3.044 0 .044 0 .087-.043.258-.391.52-.782.777-1.125.516-.692 1.078-1.383 1.684-1.989a8.492 8.492 0 0 1-.262.606c.047 0 .047.043.086.043.52-.692 1.082-1.34 1.602-2.035-.047-.04-.09-.086-.133-.086-.215.218-.387.433-.606.652-.039-.047-.082-.09-.129-.09.434-.562.868-1.12 1.297-1.77.086.13.172.301.344.65.176-.434.348-.735.477-1.04-.13.133-.301.262-.43.39l-.133-.128.777-1.168c.82-1.168 1.641-2.38 2.461-3.547.305-.43.692-.777.953-1.211.82-1.64 2.118-2.941 3.11-4.453.215-.3.515-.563.777-.82.211-.262.387-.176.563.043 1.164 1.468 2.328 2.98 3.492 4.453.867 1.082 1.73 2.117 2.55 3.242.993 1.387 1.946 2.77 2.938 4.152 1.125 1.598 2.246 3.2 3.324 4.84 1.641 2.426 3.196 4.848 4.836 7.266 1.211 1.773 2.422 3.504 3.586 5.277H80.45c-2.027-.043-4.101-.215-6.129-.129-2.765.133-5.57.434-8.336.652-3.496.301-7.039.344-10.535.344-1.254 0-2.508.176-3.758.262-1.511.086-2.98.172-4.492.215-1.773.086-3.496.129-5.265.176-.996.039-2.032 0-3.114 0Zm49.531 19.89v.391c-.043 0-.085.043-.171.043-.172-.605-.344-1.254-.563-1.86-.43-1.257-.906-2.511-1.683-3.632-.868-1.211-1.641-2.465-2.508-3.719-.215-.305-.52-.562-.778-.82-.91-.996-1.816-2.035-2.98-2.77a35.706 35.706 0 0 0-5.399-2.77c-.52-.214-.996-.476-1.511-.777h1.035l7.383-.132c1.597-.04 3.156-.04 4.75-.125.39 0 .605.128.82.472.39.649.777 1.297 1.21 1.95.044.081.13.21.13.343 0 .953 0 1.946.043 2.899.043.992.133 1.945.172 2.941 0 .992-.086 2.031-.043 3.066.043 1.473.086 2.989.086 4.497Zm-46.468-14.48c2.031-.086 3.972-.215 5.96-.305 1.551-.086 3.153-.129 4.704-.215.648-.043 1.254-.082 1.902 0-.691.348-1.383.696-1.988 1.125-.778.52-1.508 1.211-2.29 1.774-.777.562-1.468 1.254-2.116 1.988-.82.992-1.727 1.86-2.594 2.809-.606.695-1.293 1.34-1.813 2.078-.734.95-1.379 1.984-2.07 3.066.215-4.11.477-8.172.3-12.324ZM70.09 85.27c-1.383.343-2.809.734-4.235.906-1.207.176-2.46.133-3.714.133a41.21 41.21 0 0 1-3.328-.133c-1.25-.13-2.504-.258-3.715-.82-1.035-.477-2.114-.907-3.149-1.426-1.039-.52-2.078-1.125-2.855-2.078-.559-.692-1.336-1.254-2.028-1.86.13.52.43.953.907 1.254-.215.258-.52.133-.953-.562-.125.086-.258.132-.344.171.133-.3.258-.605.39-.863-.171-.344-.39-.734-.562-1.082a37.022 37.022 0 0 1-.992-1.73c-.086-.13-.086-.258-.172-.387a9.023 9.023 0 0 1-.61-.781c-.343-.516-.644-1.078-1.078-1.598 0 .133.047.262.047.434-.047 0-.09.043-.09.043l-.906-2.207c-.043 0-.043 0-.086.043l.774 2.855c-.04 0-.082.043-.13.043-.124-.172-.257-.344-.343-.559-.086-.347-.348-.347-.559-.218-.132.086-.218.39-.175.52.304.734.648 1.468.996 2.202.086.262.172.477.3.739.047.086.176.171.176.3.172.344.301.688.516.996.39.516.82 1.036 1.21 1.555.388.52.731 1.082 1.079 1.598.043.09.172.09.21.133.22.648.954 1.12 1.474.863.128.996 1.207 1.34 1.64 2.293-.52-.219-.906-.39-1.254-.563-.043.043-.043.086-.086.172.516.258 1.035.52 1.508.82.434.262.867.52 1.254.82.52.477 1.125.74 1.855.911-.039-.133-.082-.176-.082-.176 1.208.563 2.461 1.168 3.41 1.64-4.492.09-9.285.177-14.25.263 0-.82-.042-1.602-.042-2.422 0-.344.082-.649.039-.996-.133-1.985-.133-3.977-.387-5.922-.258-2.074-.258-4.11-.215-6.188.04-1.12-.043-2.289-.09-3.414 0-1.512 0-2.984.047-4.496 0-.215.086-.387.176-.605h.129c.043.086 0 .218.082.261.133.133.348.344.434.301.257-.172.648-.344.734-.605a4.23 4.23 0 0 0 .305-1.598c0-.39.171-.648.343-.91.086-.13.13-.258.22-.43-.173-.133-.349-.219-.563-.39.175-.477.132-1.04.78-1.297.083-.043.083-.262.13-.391.043-.348.082-.738.129-1.082.086.133.132.172.214.258a.628.628 0 0 1 .086-.133c0-.168-.043-.516 0-.516.52-.086.301-.648.563-.906.039-.047-.043-.176-.043-.262 0-.086 0-.214.039-.214.605-.133.52-.782.906-1.082.133-.09.172-.215.348-.434.344.605-.262.91-.305 1.34.735-.43.95-1.469.52-1.774.172-.129.343-.3.472-.472.477-.52.993-.996 1.426-1.516.305-.387.477-.863.778-1.25.175-.219.52-.39.777-.523.777-.43 1.512-.903 1.988-1.641.086-.086.215-.172.344-.258.129-.086.39-.086.434-.215.042-.086-.086-.304-.172-.433.168-.086.343-.258.687-.434-.129.262-.172.434-.258.61l.211.21c.39-.3.996-.644 1.387-.906 0-.039-.219-.21-.219-.21-.258.128-.644.343-1.035.515.082-.129.082-.215.133-.258.601-.39 1.207-.777 1.855-1.082a209.636 209.636 0 0 1 4.532-2.031c.261-.13.609-.043.91-.043.129 0 .21 0 .343-.043.688-.215 1.383-.434 2.075-.606a3.56 3.56 0 0 1 .949-.129c1.293.043 2.59.043 3.883.13a6.576 6.576 0 0 1 1.597.343c.649.219 1.34.52 1.946.82a23.03 23.03 0 0 1 2.117 1.301c1.25.82 2.418 1.73 3.668 2.465 1.21.734 2.16 1.73 2.937 2.856.954 1.34 2.032 2.55 2.461 4.191l.649 2.855c.129.52.433 1.04.3 1.641-.214 1.086-.39 2.207-.562 3.29-.082.433-.172.87-.125 1.296.082 1.344-.437 2.512-.953 3.723-.176.386-.434.777-.649 1.21.043.044.301.172.344.172l.39-.777c.044 0 .044 0 .087.047-.215.602-.39 1.254-.606 1.86-.515 1.34-1.035 2.722-1.683 4.019-.344.734-.953 1.34-1.383 2.035-.43.602-.774 1.25-1.207 1.813-.387.476-.777.953-1.297 1.296-1.164.868-2.375 1.73-3.625 2.422-.777.477-1.684.739-2.547.953Zm-23.02-2.297-.043.043c-.09-.043-.218-.086-.304-.172l-1.04-1.559c-.081-.129-.128-.258-.081-.43a35.08 35.08 0 0 0 1.468 2.118Zm26.864 5.922c1.941-.82 3.539-1.985 5.004-3.329.218-.214.433-.43.695-.605 1.812-1.125 3.148-2.68 4.36-4.41 1.382-1.989 2.288-4.239 3.413-6.356.086-.175.172-.343.258-.476-.086 4.93.477 9.773 1.121 14.66-4.879.172-9.844.344-14.851.52Zm43.789-1.297c-.043.09-.133.175-.176.261-.043-.086-.043-.214-.086-.39-.258.691-.82.347-1.207.347-2.332.043-4.707.043-7.043.043-2.242 0-4.531 0-6.777.04-.735 0-1.512.171-2.246.218-1.77.082-3.54.13-5.313.172-.129 0-.258-.215-.473-.387a3.048 3.048 0 0 1-.261.387c-.047-.086-.13-.172-.22-.3a2.5 2.5 0 0 1-.128.343h-.125c-.09-.602-.262-1.164-.262-1.77 0-1.296.133-2.593.172-3.894.047-.602 0-1.164 0-1.73.176.132.305.218.477.347.086-.172.172-.3.261-.43 0 0-.09-.043-.175-.128.082-.043.171-.133.171-.176.043-.13.13-.258.13-.344 0-.305-.087-.562-.13-.82.043 0 .086 0 .13-.047l.257 1.297h.133c-.176-.301.387-.559-.086-.907-.043-.043.043-.3.043-.433-.133-.258-.215-.516-.348-.863.043-.043.176-.086.305-.13-.172-.085-.305-.171-.433-.214.433-.39.433-.606.042-1.04.09-.038.176-.038.176-.081 0-.39 0-.778-.086-1.164-.086-.438.13-.953-.52-1.215.044.133.087.219.173.344 0 0-.13.046-.258.132-.563-.52-.215-1.214-.344-1.992.3.09.516.176.73.266-.085-.309-.3-.653-.43-1.043h-.175V69.44c0 .047.3.047.477.09 0-.043.039-.086.039-.133-.13-.171-.301-.343-.477-.558l.09-.09c-.344-.43-.172-1.031-.172-1.164v-3.027c.434.433-.215.996.434 1.254v-.43h-.047c-.043-.649-.043-1.297-.086-1.95h-.082c-.047.09-.047.133-.09.22h-.086l.258-10.337c.433.563.906 1.086 1.21 1.641.993 1.82 2.29 3.379 3.497 5.02 1.039 1.43 1.988 2.984 2.937 4.453 1.165 1.773 2.29 3.547 3.457 5.316.86 1.344 1.77 2.684 2.672 3.984.82 1.165 1.688 2.29 2.551 3.415.73.996 1.512 1.988 2.242 2.984.868 1.21 1.73 2.422 2.594 3.59.43.601.906 1.207 1.379 1.812.262.348.648.61.91.82-.043 0-.086 0-.172-.042.133.175.215.304.301.39.477.258.52.52.262.91Zm2.199-10.809v-.3c0 .085.043.21 0 .3Zm1.469-19.066c-.043 0-.301-.262-.344-.305-.043.129 0 .258-.086.434-.043-.13-.344-.086-.344-.215-.047.605.258 1.21.211 1.816.133-.09.649-.133.777-.262a.35.35 0 0 0 .176.086c-.863.653-.648 1.297-.258 2.035.082.172.344.516.082.864-.082.086.047.344.09.562h.125v.082l-.39.133c-.082-.133-.602-.387-.602-.61v2.212c.434.129.434.734.606 1.039.09-.133.129-.219.175-.348l.043.043a5.114 5.114 0 0 1-.172.777c-.085.387-.171.735-.214 1.121 0 .043.082.133.082.176-.473 1.082-.215 2.29-.387 3.41-.129.82 0 1.692-.086 2.555-.09.734-.262 1.512-.434 2.25-.043.129-.129.172-.343.258.086-.52.043-.863-.043-1.34-.047 0-.61-.305-.653-.305 0 .61.344 1.43.477 2.118-.133-.043-.649-.344-.692-.344-.09.52-.09 1.21-.128 1.773-.047.434-.434.82-.477 1.297 0 .262.3.434.258.867h.344c0-.863.39-1.644.39-2.55h.13c.042.085.175.171.132.214-.09.477-.266.996-.219 1.473 0 .258.215.516.133.82-.09.262-.133.52-.176.907-.043-.215-.086-.301-.086-.43-.043 0-.433-.043-.476-.043-.043.258.304.516.258.734-.043.043-.086.043-.172.086l-1.426-2.078a407.273 407.273 0 0 1-3.367-4.972 9.938 9.938 0 0 1-.782-1.297 60.425 60.425 0 0 0-4.445-6.618c-1.254-1.597-2.25-3.332-3.414-5.011-1.078-1.602-2.156-3.16-3.238-4.762-.387-.516-.864-.992-1.207-1.555-1.121-1.773-2.117-3.59-3.239-5.36-.949-1.472-1.984-2.901-2.98-4.327-.344-.477-.688-.996-1.035-1.512a.608.608 0 0 1-.086-.3c-.086-.954-.176-1.903-.219-2.813 0-.863.09-1.727.09-2.637v-.777c0-.219.04-.39.04-.61.042-.039.085-.125.128-.168-1.254 0-2.547-.046-3.8 0-.821.04-1.25-.304-1.813-.914-1.64-1.855-2.852-3.976-4.278-5.965-1.336-1.902-2.718-3.765-4.101-5.625-1.125-1.511-2.246-2.98-3.367-4.496-1.254-1.73-2.461-3.457-3.758-5.187-1.559-2.074-3.156-4.152-4.75-6.227-.742-.953-1.563-1.859-2.383-2.855.562.09 1.086.176 1.602.219l2.074.129c1.554.128 3.11.214 4.66.43 1.297.175 2.594.433 3.933.648 2.852.476 5.657 1.254 8.38 2.164 1.597.52 3.148 1.21 4.706 1.86 3.497 1.425 6.825 3.155 10.106 4.972 1.035.562 1.64 1.469 2.414 2.293 1.125 1.168 2.25 2.332 3.328 3.543 1.25 1.425 2.414 2.898 3.625 4.367 1.078 1.297 2.2 2.594 3.285 3.894.344.387.606.864.903 1.297.691 1.04 1.468 2.035 2.074 3.157.43.824.687 1.773.992 2.683.43 1.34.863 2.637 1.297 3.977.3.996.555 2.035.773 3.07.172.691.133 1.426.344 2.117.262.91 0 1.903.262 2.813.043.086.082.218.129.304.172.172.3.344.043.602-.04.043-.04.215 0 .348.09-.086.132-.172.218-.305 0 .09.04.133.04.172 0 .172-.043.347 0 .52 0 .085.085.21.128.3.086-.09.172-.133.344-.262.39 1.473.434 2.942.434 4.453 0 1.43.258 2.856-.344 4.243.129-.477-.172-.914-.043-1.344Zm-97.555-4.285c.176.132.477.214.176.476-.219.3-.477.563-.649.906-.172.305-.304.39-.562.176a22.2 22.2 0 0 1 1.035-1.559Zm86.8 45.32c0 .129.044.215.044.344.09-.172.09-.258.132-.344Zm0 .387v-.043Zm-8.808 16.867-7.516-41.688c-.128-.039-.3-.125-.601-.215.086.176.129.305.172.434.215-.043.3-.043.387-.086 0-.043 0-.086.046-.133l7.516 41.692Zm-7.773-51.07c-.043.128-.043.257-.043.386 0-.129 0-.262.047-.39Zm.043.863c-.043 0-.043 0-.086-.047v.043c.047.043.047.043.09 0Zm-.086.343v-.304c-.125.043-.254.043-.43.09.219.082.434.125.434.21Zm0 0"/>
</svg>;
  }
});