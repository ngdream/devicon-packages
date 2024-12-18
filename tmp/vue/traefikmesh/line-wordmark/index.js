import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'TraefikmeshLineWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#9D0FB0'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m104.157 42.117-.237.004h-.004c-1.399.045-2.584.498-3.444 1.365-.949.949-1.356 2.454-1.356 4.442v1.223h-1.805a1.405 1.405 0 0 0-1.084.432 1.422 1.422 0 0 0-.363.965c0 .34.113.69.363.965.251.274.649.447 1.083.431h1.805v12.672l.005.153.001.005c.03.516.229.988.58 1.316l.005.004.006.005c.37.33.855.5 1.361.502a2.034 2.034 0 0 0 1.385-.521l.006-.004.106-.1.008-.011c.337-.36.506-.847.506-1.357V51.944l2.127.004h.01a1.402 1.402 0 0 0 1.013-.467 1.411 1.411 0 0 0 .338-.932c0-.329-.106-.663-.338-.932a1.406 1.406 0 0 0-1.012-.467h-2.138v-.432l.004-.258v-.004c-.003-.578.028-1.156.091-1.731.073-.51.192-.986.237-1.05l.002-.002v-.002c.155-.222.311-.332.408-.36l.006-.003.005-.002c.163-.054.477-.1.9-.1h1.543l.131-.012.015-.002c.845-.117 1.344-.861 1.333-1.555-.01-.692-.534-1.422-1.382-1.514h-.006l-.075-.006h-2.142zm6.046 0c-.624 0-1.2.179-1.635.56l-.002.002-.002.002a2 2 0 0 0-.651 1.494 1.951 1.951 0 0 0 .654 1.51v.002l.005.002c.425.369.993.543 1.616.543.62 0 1.188-.17 1.616-.545l.004-.002.002-.002c.423-.379.654-.925.654-1.502 0-.585-.235-1.13-.658-1.502-.425-.381-.99-.56-1.603-.56zm5.867.002a2.136 2.136 0 0 0-1.387.512l-.006.004-.004.003c-.4.36-.606.893-.606 1.458v20.52l.004.153.002.007c.03.511.221.983.575 1.314l.006.006.006.005a2.021 2.021 0 0 0 1.367.5 2.046 2.046 0 0 0 1.382-.521h.001c.406-.367.625-.903.625-1.472v-5.665l6.735 7.054.1.1.002.002a1.764 1.764 0 0 0 1.242.504c.494.002.965-.203 1.31-.557.35-.342.576-.794.576-1.275 0-.439-.187-.866-.504-1.192l-6.068-6.285 5.505-4.849.11-.116.004-.004a1.61 1.61 0 0 0 .434-1.069c0-.47-.216-.911-.554-1.25a1.748 1.748 0 0 0-1.283-.563h-.002a1.712 1.712 0 0 0-1.095.428l-.005.004-6.507 5.87V44.08l-.01-.15a1.87 1.87 0 0 0-.6-1.286 1.954 1.954 0 0 0-1.356-.525zm-11.904 1.036h2.088l.018.002c.353.04.448.245.452.497.004.253-.083.462-.438.51l-.048.005h-1.498c-.484 0-.878.04-1.216.15-.412.125-.712.42-.949.756h-.002c-.334.471-.35 1.003-.422 1.51l-.002.008v.008a16.26 16.26 0 0 0-.097 1.858l-.004.25v1.48h3.14c.155.005.212.049.263.107a.398.398 0 0 1 .085.253.398.398 0 0 1-.085.255c-.05.058-.108.101-.263.107l-3.14-.007v13.704c0 .301-.076.486-.225.645v.002l-.059.055a.994.994 0 0 1-.679.255h-.006c-.29 0-.483-.076-.668-.238-.149-.14-.235-.307-.252-.609l-.003-.117V50.906h-2.881c-.171.006-.229-.036-.28-.093a.409.409 0 0 1-.09-.265.41.41 0 0 1 .09-.266c.052-.057.109-.1.28-.093h2.88v-2.262c0-1.841.395-3.05 1.052-3.707l.002-.002c.656-.664 1.538-1.02 2.74-1.059l.22-.004zm6.037 0c.425 0 .698.104.914.299l.002.002h.004c.217.19.304.378.304.725 0 .33-.09.53-.308.726-.211.183-.492.287-.932.287-.436 0-.722-.107-.934-.29a.91.91 0 0 1-.307-.707v-.016c0-.33.091-.529.308-.724.223-.194.51-.301.949-.301zm5.87 0h.008a.916.916 0 0 1 .643.248l.003.006.004.004c.16.141.241.3.258.58l.008.119v20.496c0 .332-.089.524-.282.7h-.002v.002a1.007 1.007 0 0 1-.684.255h-.015a.98.98 0 0 1-.66-.239c-.144-.138-.228-.304-.246-.61l-.004-.115V44.096c0-.34.086-.519.26-.677a1.013 1.013 0 0 1 .708-.264zm-60.575 1.303-.513.009v.182c-.257.076-.54.096-.742.27l-.008.008-.007.006c-.364.342-.54.841-.54 1.373l-.2 2.845h-1.64l-.116.006-.016.003a1.404 1.404 0 0 0-1.256 1.388v.024l.01.115v.002a1.399 1.399 0 0 0 1.394 1.256h1.528l.004 8.845v.255c.033 1.857.446 3.28 1.35 4.184h.003v.002c.859.87 2.044 1.321 3.447 1.368h.004l.24.004h2.63v-.198c.596-.256 1.035-.797.984-1.466a1.546 1.546 0 0 0-1.51-1.425h-.002l-1.527-.004h-.168a2.622 2.622 0 0 1-.744-.106c-.095-.029-.242-.138-.408-.357v-.002c-.044-.062-.168-.544-.24-1.053a15.206 15.206 0 0 1-.09-1.731v-.004l-.004-.254v-8.059l2.732.004.116-.01h.002a1.405 1.405 0 0 0 1.257-1.387v-.013l-.007-.116-.002-.014a1.407 1.407 0 0 0-1.387-1.257H57.36v-2.846c0-.524-.2-1.026-.575-1.365h-.002v-.002a1.896 1.896 0 0 0-1.28-.477l-.006-.004zm.006 1.04h.013a.857.857 0 0 1 .576.215c.161.148.23.298.23.592v3.884h3.746a.358.358 0 0 1 .358.326v.034a.353.353 0 0 1-.321.355l-.062.006-3.721-.004v9.106l.004.255c-.003.617.03 1.235.098 1.848v.009l.002.008c.072.508.086 1.043.421 1.515l.004.006.002.004c.24.322.533.616.949.742l.002.003h.004a3.632 3.632 0 0 0 1.04.145h.166l1.512.005a.495.495 0 0 1 .493.464v.002a.501.501 0 0 1-.418.54l-.034.003h-.536v.004h-1.585l-.216-.004c-1.208-.04-2.09-.397-2.746-1.062l-.002-.002c-.625-.624-1.017-1.755-1.049-3.46v-.247l-.004-9.884h-2.573a.347.347 0 0 1-.353-.317l-.003-.042a.354.354 0 0 1 .322-.356l.049-.002h2.584l.27-3.866v-.017c0-.324.073-.477.208-.606a.812.812 0 0 1 .571-.202zm15.105 3.653c-1.307 0-2.353.402-3.29 1.145-.344.273-.606.604-.87.933v-.068l-.004-.044c-.009-.55-.215-1.064-.597-1.42a1.933 1.933 0 0 0-1.363-.544 2.058 2.058 0 0 0-1.402.535v.002h-.002c-.405.374-.6.917-.6 1.492v13.434c.01.567.202 1.09.575 1.452l.004.005.005.003a1.976 1.976 0 0 0 1.376.525 2.009 2.009 0 0 0 1.39-.543c.405-.379.619-.924.619-1.506v-8.234c.016-1.118.388-1.947 1.11-2.602.762-.683 1.647-1.017 3.102-1.017.471 0 .937-.176 1.236-.53l.002-.004.005-.004a1.822 1.822 0 0 0 .404-1.181 1.951 1.951 0 0 0-.44-1.237 1.595 1.595 0 0 0-1.26-.592Zm18.351 0c-2.137-.004-3.968.807-5.194 2.18-.153-.185-.299-.378-.477-.542l-.005-.004-.004-.006c-.809-.706-1.866-1.156-3.186-1.407-.786-.151-1.387-.2-2.259-.205h-.002c-.833 0-1.216.031-1.865.165-1.063.218-2.094.697-2.775 1.349h-.002c-.294.282-.49.677-.49 1.057 0 .214.051.448.131.616.228.477.722.808 1.247.836.111.009.268.014.422-.026.155-.039.293-.097.57-.204.923-.354 1.269-.44 2-.527a11.478 11.478 0 0 1 1.84.016c1.493.194 2.265.658 2.58 1.308.146.302.17.394.208.798v.004c.031.32.011.577-.116 1.498l-.019.12a31.139 31.139 0 0 1-.267-.05h-.004c-1.619-.286-2.719-.392-4-.392-1.804 0-3.005.223-4.164.809-1.552.78-2.485 2.194-2.694 4.043-.19 1.628.31 3.103 1.43 4.187 1.102 1.06 2.607 1.655 4.484 1.819l.017.002h.015a13.543 13.543 0 0 0 1.642-.058l.012-.003h.01c1.09-.151 2.16-.514 2.956-1.042v-.002h.001c.443-.293.811-.675 1.165-1.07.417.499.897.951 1.544 1.277.944.477 1.98.73 3.401.855h.01a13.969 13.969 0 0 0 2.021-.011h.019c1.322-.152 2.464-.59 3.366-1.32l.002-.003c.397-.32.649-.773.654-1.236v-.006c0-.562-.28-1.01-.77-1.269l-.003-.002-.002-.002c-.282-.145-.505-.216-.872-.15l-.027.005-.024.008a7.036 7.036 0 0 0-.634.213c-1.021.377-1.293.448-2.05.53a6.851 6.851 0 0 1-1.023.031h-.012c-1.124-.024-1.791-.17-2.454-.501-.655-.33-.92-.654-1.075-1.26v-.001l-.002-.002c-.055-.206-.052-.18-.047-.664v-.005c0-.47.01-.56.1-1.159v-.004l.026-.176.091.016.211.034.51.097h.007c.637.107 1.277.19 1.922.249h.003c.849.073 2.08.084 2.826.012 1.411-.135 2.542-.484 3.454-1.104 1.135-.772 1.816-1.917 2.08-3.425v-.003c.04-.232.044-.515.044-.975 0-.725-.041-1.036-.207-1.552-.32-1-1.063-1.937-1.998-2.57h-.002c-1.163-.784-2.678-1.196-4.296-1.196Zm21.251.002a2.055 2.055 0 0 0-1.405.535v.002l-.003.004c-.396.373-.599.91-.599 1.488V64.56l.004.161v.009c.031.518.218.997.572 1.338l.006.007.006.004c.372.34.857.522 1.366.523a2.008 2.008 0 0 0 1.395-.54l.002-.003c.404-.379.618-.923.618-1.506V51.166l-.008-.154a1.956 1.956 0 0 0-.591-1.314 1.93 1.93 0 0 0-1.363-.544zM64.482 50.19h.011a.892.892 0 0 1 .638.253l.003.007.006.004c.174.162.262.35.268.68v.015l.004.052v2.045l1.019.14c.255-.915.754-1.657 1.533-2.274.799-.633 1.536-.922 2.645-.922.24 0 .336.05.444.19l.005.008.007.009a.83.83 0 0 1 .208.587v.012a.787.787 0 0 1-.174.507c-.09.107-.18.159-.437.159-1.627 0-2.848.43-3.797 1.282l-.002.002c-.928.842-1.432 2.009-1.451 3.367v8.24c0 .357-.095.566-.29.747v.002a.973.973 0 0 1-.677.264h-.016a.941.941 0 0 1-.654-.249c-.157-.156-.249-.353-.256-.717V51.182c0-.365.088-.563.268-.73a1.015 1.015 0 0 1 .695-.263zm24.476 0h.002c1.44 0 2.763.375 3.716 1.017.743.503 1.361 1.308 1.592 2.027.151.474.157.535.157 1.237 0 .44-.02.755-.028.8-.23 1.312-.726 2.12-1.641 2.743-.736.498-1.674.806-2.97.93-.616.06-1.869.053-2.636-.011h-.004a25.505 25.505 0 0 1-1.83-.238l-.012-.002-.504-.096-.221-.036c-.16-.026-.313-.052-.428-.068l-.144-.021-.052-.009h-.035a.136.136 0 0 0-.04-.003l-.047.002-.134.032-.105.039-.08.079-.09.121-.025.053-.017.047c-.005.02-.006.029-.007.036a.163.163 0 0 0-.006.031l-.01.052-.025.155c-.02.127-.046.3-.072.492v-.002c-.088.605-.11.818-.11 1.307v.005c-.004.488.016.686.08.93.219.852.775 1.505 1.617 1.93.813.404 1.684.584 2.894.61h.002a8 8 0 0 0 1.17-.036c.807-.089 1.253-.203 2.306-.592l.004-.003.004-.002a6.009 6.009 0 0 1 .5-.168c-.059.016.176.04.201.049v.002c.045.025.213.306.215.346-.003.235.017.209-.267.438-.727.589-1.665.961-2.83 1.095a13.167 13.167 0 0 1-1.855.01c-1.338-.119-2.208-.34-3.014-.747-.623-.315-1.069-.688-1.406-1.153l-.533-.735-.43.425a1.667 1.667 0 0 0-.183.218 5.222 5.222 0 0 1-1.2 1.102c-.612.405-1.568.742-2.515.876-.494.047-.99.066-1.486.054-1.705-.152-2.937-.661-3.839-1.528-.905-.876-1.282-1.96-1.123-3.32v-.002c.18-1.587.862-2.596 2.13-3.236 1.005-.506 1.976-.698 3.7-.698 1.222 0 2.23.096 3.812.377a33.302 33.302 0 0 0 .706.121l.058.01c.019.003-.006.007.094.007a.59.59 0 0 0 .389-.168c.072-.077.095-.134.114-.177a.849.849 0 0 0 .058-.2 9.33 9.33 0 0 0 .085-.542V56.2c.13-.934.163-1.32.12-1.746a3.126 3.126 0 0 0-.301-1.142v-.004c-.522-1.077-1.718-1.673-3.39-1.89h-.01l-.01-.002a12.616 12.616 0 0 0-2.038-.018l-.011.002h-.013c-.788.094-1.295.224-2.256.592H74.7a7.563 7.563 0 0 1-.457.168c-.037.01.016.006-.096-.002l-.006-.002h-.005c-.236-.013-.262-.027-.366-.247v-.002l-.002-.003c-.057-.115-.029.008-.029-.166 0-.186-.04-.101.172-.306.473-.451 1.38-.9 2.267-1.082.608-.125.844-.144 1.654-.144.838.004 1.333.043 2.065.184v.002c1.199.228 2.062.614 2.698 1.17h.003c.22.206.418.434.591.68l-.012-.02c.03.05.062.093.1.139a.676.676 0 0 0 .153.137.51.51 0 0 0 .282.083h.198l.146-.13a1.505 1.505 0 0 0 .235-.266l-.013.021c.98-1.27 2.65-2.02 4.681-2.016zm21.247 0h.013a.892.892 0 0 1 .636.253l.004.005.004.004c.162.151.249.327.268.626l.005.121v13.354c0 .357-.094.566-.29.747v.003a.976.976 0 0 1-.677.263h-.006a.899.899 0 0 1-.663-.25c-.145-.143-.233-.327-.253-.644l-.004-.125V51.182c0-.362.092-.562.27-.73a1.018 1.018 0 0 1 .693-.263zm15.44.292h.001a.712.712 0 0 1 .527.231l.008.01.01.011c.193.189.252.338.252.522 0 .128-.036.23-.166.374l-.063.066-6.286 5.538 6.823 7.067c.163.17.21.297.21.471 0 .198-.057.344-.26.54l-.009.005-.008.008a.781.781 0 0 1-.567.241h-.006a.727.727 0 0 1-.513-.209l-.085-.085-7.631-7.992 7.34-6.618c.163-.139.287-.18.423-.18zm-37.23.74a4.538 4.538 0 0 0-.804.06 4.38 4.38 0 0 0-1.74.704h-.001c-.928.647-1.561 1.63-1.901 2.87v.004c-.125.463-.167.684-.283 1.472l-.174 1.242.665.079c.407.049 1.337.163 1.867.235l.117.016.244.03c.195.023.393.045.59.061h.002c.483.042 1.218.04 1.744.01l.01-.001.183-.017c.71-.062 1.223-.192 1.782-.462h.002a2.684 2.684 0 0 0 1.107-.95v-.001h.002c.393-.596.563-1.241.56-2.04 0-.55-.077-.918-.267-1.328l-.002-.003V53.2c-.484-1.033-1.572-1.711-2.901-1.936a4.604 4.604 0 0 0-.801-.042zm.013 1.038c.26-.003.542.014.612.026h.002c1.084.182 1.832.71 2.136 1.354.154.334.17.405.17.895v.002c.005.67-.093 1.015-.389 1.464-.194.291-.327.409-.695.588-.466.224-.784.307-1.422.365h-.003l-.154.014c-.469.026-1.214.026-1.6-.006h-.003a15.8 15.8 0 0 1-.55-.058l-.237-.03-.109-.013h-.002a96.137 96.137 0 0 0-1.496-.189l.027-.193v-.002c.112-.776.137-.906.255-1.345.292-1.065.786-1.798 1.496-2.294A3.295 3.295 0 0 1 87.8 52.3h.004l.005-.002c.072-.015.357-.037.618-.04zm-59.754.394a2.337 2.337 0 0 0-1.41.348L22.1 55.906a.643.643 0 0 1-.644 0l-5.23-2.95-.072-.036-.006-.005a2.286 2.286 0 0 0-3.033.957 2.28 2.28 0 0 0 .876 3.054h.002l3.041 1.719.004.002c.02.01.028.028.028.051a.072.072 0 0 1-.036.062l-8.177 4.598a.635.635 0 0 1-.634.002l-.002-.002-4.774-2.69-.072-.039h-.002c-.623-.309-1.275-.327-1.81-.123a2.325 2.325 0 0 0-1.21 1.084 2.325 2.325 0 0 0-.238 1.608c.125.558.498 1.092 1.1 1.441l.003.002 2.57 1.45c.07.04.07.084 0 .125l-2.576 1.446-.066.039c-.616.363-.99.916-1.102 1.49a2.329 2.329 0 0 0 .296 1.627c.281.478.725.869 1.28 1.049.557.178 1.221.119 1.837-.244l4.76-2.674.002-.002a.643.643 0 0 1 .638 0v.002l8.09 4.556c.068.042.068.086 0 .127l-3.42 1.93-.074.044-.01.006c-.578.376-.922.922-1.022 1.482-.1.56.029 1.119.304 1.585a2.32 2.32 0 0 0 1.242 1.031c.539.184 1.181.145 1.79-.178l.006-.002 5.613-3.166a.648.648 0 0 1 .64 0l5.57 3.144.069.032a2.281 2.281 0 0 0 3.03-.953 2.281 2.281 0 0 0-.872-3.056l-.002-.002-3.369-1.897c-.068-.042-.068-.086 0-.126L34.6 68.91v-.002a.648.648 0 0 1 .64 0v.002l5.006 2.82.066.038.01.004a2.285 2.285 0 0 0 3.08-.927 2.282 2.282 0 0 0-.923-3.084l-2.82-1.594-.002-.002a.052.052 0 0 1-.031-.05v-.004a.058.058 0 0 1 .03-.053h.003l2.817-1.589.075-.045.01-.006c.578-.376.92-.923 1.02-1.484a2.323 2.323 0 0 0-.302-1.584 2.327 2.327 0 0 0-1.242-1.032c-.54-.184-1.183-.145-1.793.178l-.004.004-4.996 2.817a.672.672 0 0 1-.646 0l-8.076-4.548c-.071-.041-.071-.086 0-.125l2.996-1.685.06-.039c.624-.36 1.004-.913 1.12-1.487a2.327 2.327 0 0 0-.296-1.637 2.334 2.334 0 0 0-1.29-1.053 2.024 2.024 0 0 0-.437-.087Zm-.098 1.03c.076.009.15.024.221.047.285.09.544.308.71.59.165.28.23.612.172.906-.059.293-.222.566-.623.797l-.003.004-.061.034-2.986 1.678-.002.002c-.723.415-.723 1.512 0 1.926l.002.002 8.084 4.552.001.002a1.702 1.702 0 0 0 1.654 0h.003l4.986-2.812c.382-.204.69-.207.966-.112a1.3 1.3 0 0 1 .684.576c.16.27.225.587.175.875-.052.287-.203.558-.564.795l-.002.002-.037.02-2.8 1.578a1.1 1.1 0 0 0-.567.97c.001.397.218.768.57.96l2.822 1.595.006.004c.608.326.83 1.068.502 1.675v.002c-.327.608-1.07.83-1.678.505l-.047-.028-5.012-2.824a1.688 1.688 0 0 0-1.665 0h-.002l-8.167 4.603-.006.002c-.712.417-.712 1.501 0 1.918l.005.002 3.379 1.903a1.23 1.23 0 0 1 .472 1.66v.001h-.002a1.226 1.226 0 0 1-1.646.52l-.005-.002-.055-.027-5.536-3.126a1.688 1.688 0 0 0-1.665 0h-.002l-5.591 3.156h-.002c-.382.204-.694.206-.97.113a1.304 1.304 0 0 1-.683-.576 1.304 1.304 0 0 1-.174-.876c.052-.288.202-.558.566-.794l.038-.023 3.422-1.93.002-.001c.712-.417.712-1.501 0-1.918l-.002-.002-8.098-4.562a1.684 1.684 0 0 0-1.662 0h-.002l-4.771 2.68-.004.002c-.393.232-.708.241-.99.15a1.316 1.316 0 0 1-.706-.588 1.31 1.31 0 0 1-.173-.9c.058-.292.22-.565.613-.797l.057-.032L4.3 67.113l.005-.002c.714-.415.714-1.5 0-1.917l-.005-.002-2.57-1.45v-.001c-.378-.22-.545-.484-.61-.77a1.31 1.31 0 0 1 .14-.89 1.297 1.297 0 0 1 .665-.604c.275-.104.585-.114.98.081l.045.024 4.753 2.68a1.68 1.68 0 0 0 1.657 0l8.178-4.598a1.113 1.113 0 0 0 .564-.956v-.002a1.1 1.1 0 0 0-.57-.971l-3.028-1.71a1.23 1.23 0 0 1-.477-1.663 1.235 1.235 0 0 1 1.653-.519l.045.023 5.22 2.945a1.692 1.692 0 0 0 1.659 0l5.189-2.92.006-.003c.296-.179.548-.229.776-.205zm49.472 4.164-.55.032c-1.113.066-1.688.19-2.389.536v.002c-.384.189-.694.422-.93.719v.002l-.003.002a3.342 3.342 0 0 0-.626 1.323l-.002.002c-.062.26-.077.552-.079.864-.003.31-.004.567.07.84a2.693 2.693 0 0 0 .747 1.316c.537.564 1.249.93 2.076 1.108.382.08.494.093 1.137.08.475-.01.697-.02.934-.072a4.473 4.473 0 0 0 2.331-1.339l.002-.003.002-.002c.554-.617.97-1.478 1.202-2.428.075-.295.154-.758.215-1.178.03-.21.055-.406.071-.56a2.8 2.8 0 0 0 .016-.202.832.832 0 0 0-.002-.108c-.002-.024-.002-.052-.016-.105a.48.48 0 0 0-.042-.112 1.362 1.362 0 0 0-.06-.091l-.124-.11-.068-.044-.08-.02a1.915 1.915 0 0 0-.323-.057c-.227-.023-.459-.053-.693-.083h-.002c-1.333-.176-2.161-.245-2.814-.258zm-.28 1.066c.548-.004 1.507.085 2.96.276.151.02.307.036.461.054-.01.088-.017.158-.032.257a14.26 14.26 0 0 1-.193 1.075v.002l-.002.003c-.195.806-.565 1.536-.965 1.982a3.428 3.428 0 0 1-1.787 1.025c-.142.031-.267.04-.732.049-.642.012-.516.023-.897-.06h-.003c-.669-.142-1.17-.41-1.546-.809l-.008-.007-.01-.008a1.661 1.661 0 0 1-.468-.823v-.012l-.005-.012c.001.004-.036-.3-.034-.568.002-.268.034-.568.05-.633l.002-.005v-.004a2.335 2.335 0 0 1 .432-.913l.002-.002c.137-.17.288-.292.574-.434.598-.294.931-.36 1.966-.423l.028-.002a3.394 3.394 0 0 1 .208-.008zm-55.994 1.461c-.286 0-.574.074-.83.219h-.003L12.77 65.19h-.002c-.727.41-.727 1.516 0 1.925l8.09 4.56a1.692 1.692 0 0 0 1.664.002l8.162-4.606c.727-.408.727-1.513 0-1.921l-8.081-4.556a1.677 1.677 0 0 0-.83-.22Zm-.002 1.038c.11 0 .219.029.318.085h.003l8.083 4.556.002.003c.066.037.066.074 0 .11h-.002l-8.164 4.607a.633.633 0 0 1-.64 0l-8.092-4.561c-.069-.039-.069-.08 0-.118l8.172-4.597h.002a.644.644 0 0 1 .318-.085zm75.576 7.66a.467.467 0 0 0-.36.142.522.522 0 0 0-.126.3l-.004.097v15.683a.545.545 0 0 0 .142.39.458.458 0 0 0 .348.151.47.47 0 0 0 .365-.139.492.492 0 0 0 .122-.302l.008-.1V79.11c0-1.236.363-2.225 1.09-2.968.726-.74 1.691-1.114 2.895-1.114 1.078 0 1.862.28 2.343.83.459.524.698 1.334.726 2.442l.004.223v6.773c0 .174.041.309.124.402a.483.483 0 0 0 .365.141.47.47 0 0 0 .366-.14.492.492 0 0 0 .121-.302l.008-.096v-6.896c0-1.422-.35-2.496-1.046-3.223-.694-.728-1.722-1.09-3.081-1.09-.892 0-1.681.195-2.372.584a3.698 3.698 0 0 0-1.454 1.508l-.09.181v-6.753a.57.57 0 0 0-.13-.397.468.468 0 0 0-.365-.142zM58.403 74.09c-.844 0-1.573.196-2.193.585a3.614 3.614 0 0 0-1.314 1.508l-.08.181v-1.69a.612.612 0 0 0-.118-.397c-.077-.093-.195-.142-.353-.142-.3 0-.462.154-.487.455l-.004.085v10.62a.586.586 0 0 0 .13.389.448.448 0 0 0 .361.151.451.451 0 0 0 .365-.151.57.57 0 0 0 .125-.296l.005-.094V79.11c0-1.252.32-2.245.96-2.98.641-.733 1.517-1.102 2.628-1.102.952 0 1.65.28 2.087.83.41.524.628 1.334.654 2.442v6.997a.61.61 0 0 0 .128.389.457.457 0 0 0 .366.153.451.451 0 0 0 .364-.153.533.533 0 0 0 .121-.296l.004-.093V79.11c0-1.252.324-2.245.978-2.98.649-.733 1.52-1.102 2.61-1.102.957 0 1.65.28 2.088.83.41.524.629 1.334.657 2.442v6.997a.586.586 0 0 0 .13.389.451.451 0 0 0 .365.153.448.448 0 0 0 .36-.153.539.539 0 0 0 .126-.296l.004-.09v-6.895c0-2.878-1.249-4.313-3.75-4.313-.876 0-1.65.203-2.322.608a3.636 3.636 0 0 0-1.476 1.665c-.519-1.515-1.692-2.272-3.518-2.272Zm19.483 0c-1.03 0-1.945.247-2.74.738-.8.495-1.415 1.183-1.853 2.076-.439.891-.657 1.92-.657 3.093 0 1.827.488 3.269 1.463 4.317.978 1.047 2.32 1.569 4.022 1.569 1.204 0 2.367-.336 3.494-1.009.296-.187.503-.353.62-.503a.735.735 0 0 0 .18-.458.425.425 0 0 0-.118-.291.379.379 0 0 0-.28-.13c-.097 0-.308.11-.636.328a7.4 7.4 0 0 1-1.44.799c-.495.202-1.114.304-1.865.304-1.378 0-2.445-.414-3.202-1.241-.713-.787-1.098-1.88-1.155-3.292l-.005-.251h8.067c.28 0 .474-.062.584-.187.11-.125.166-.327.166-.612 0-1.625-.415-2.906-1.245-3.842-.825-.94-1.961-1.408-3.397-1.408zm11.586 0c-1.205 0-2.185.304-2.943.913-.759.612-1.135 1.403-1.135 2.371 0 .795.295 1.434.887 1.922.597.483 1.582.884 2.956 1.196.827.186 1.467.376 1.91.576.445.194.765.425.964.689.194.267.29.604.29 1.008 0 .69-.274 1.22-.817 1.594-.552.377-1.33.564-2.347.564-.75 0-1.37-.105-1.865-.317a7.425 7.425 0 0 1-1.419-.81l-.268-.174c-.134-.086-.238-.13-.316-.13a.382.382 0 0 0-.284.13.423.423 0 0 0-.117.29.692.692 0 0 0 .166.459c.11.135.322.3.633.503a6.32 6.32 0 0 0 1.641.742 6.481 6.481 0 0 0 1.829.267c1.28 0 2.31-.284 3.085-.855.774-.571 1.16-1.326 1.16-2.263 0-.591-.122-1.083-.366-1.467-.243-.382-.654-.709-1.228-.985-.58-.272-1.406-.54-2.485-.806-.766-.17-1.358-.353-1.772-.54-.413-.186-.709-.409-.879-.668-.171-.26-.26-.588-.26-.998 0-.668.27-1.215.81-1.629.54-.413 1.246-.62 2.121-.62.673 0 1.232.101 1.679.303a6.703 6.703 0 0 1 1.276.775c.284.234.488.353.612.353a.374.374 0 0 0 .28-.13.421.421 0 0 0 .118-.292.81.81 0 0 0-.198-.507 3.558 3.558 0 0 0-.645-.571 4.784 4.784 0 0 0-1.407-.657 5.8 5.8 0 0 0-1.666-.236zm-11.581.913c1.153 0 2.054.363 2.695 1.09.64.731.977 1.772 1.005 3.13h-7.853c.127-1.326.555-2.364 1.277-3.106.726-.74 1.683-1.114 2.875-1.114z"/>
</svg>;
  }
});