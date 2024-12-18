const React = require("react");
module.exports = function NodejsLineWordmarkIcon({size = "1em", color = "#5fa04e", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M85.92 24.492a1.151 1.151 0 0 0-.568.147.447.447 0 0 0-.008.004c-.36.21-.587.591-.596 1.007a.447.447 0 0 0 0 .01v18.797c0 .013-.02.041-.047.068-.024.007-.05.013-.072 0l-3.033-1.754a.447.447 0 0 0 0-.001 1.927 1.927 0 0 0-1.914 0 .447.447 0 0 0-.002.001l-12.176 7.083-.002.001-.004.002a1.917 1.917 0 0 0-.97 1.653.447.447 0 0 0 0 .004v14.138c0 .682.373 1.319.97 1.66l.004.002.002.002 12.178 7.08a.447.447 0 0 0 .004.002 1.92 1.92 0 0 0 1.908 0 .447.447 0 0 0 .004-.002l12.177-7.08.002-.002c.6-.34.975-.977.975-1.662V30.404c0-.706-.376-1.352-.977-1.691l-7.27-4.074a.447.447 0 0 0-.017-.01 1.277 1.277 0 0 0-.566-.137h-.002zm-.008.893a.447.447 0 0 0 .002 0c.06 0 .12.017.172.043l7.252 4.064c.319.18.521.52.521.912v35.248c0 .355-.202.704-.521.885a.447.447 0 0 0-.006.002l-12.18 7.084a1.03 1.03 0 0 1-1.023 0l-12.182-7.084a.447.447 0 0 0-.006-.002 1.036 1.036 0 0 1-.521-.885V51.518c.003-.367.201-.705.521-.885a.447.447 0 0 0 .006-.004l12.182-7.082a1.024 1.024 0 0 1 1.021 0v-.002l3.045 1.76a.447.447 0 0 0 .01.008.993.993 0 0 0 .941 0 .447.447 0 0 0 .036-.024c.284-.19.46-.504.46-.832V25.67a.303.303 0 0 1 .149-.254.259.259 0 0 1 .121-.031zm-71.875 16.75c-.34 0-.635.117-.88.258a.447.447 0 0 0 0 .002L.972 49.45A1.93 1.93 0 0 0 0 51.137l.03 18.968c0 .412.217.802.6 1.01a1.09 1.09 0 0 0 1.183 0l-.024.016 7.24-4.162.004-.002c.6-.34.969-.978.969-1.66V56.43c0-.356.201-.703.521-.883a.447.447 0 0 0 .006-.004l3.075-1.793a.447.447 0 0 0 .013-.008.93.93 0 0 1 .508-.135c.193 0 .359.049.457.12a.447.447 0 0 0 .037.023l3.074 1.793a.447.447 0 0 0 .006.002c.318.18.522.53.522.885v8.877c0 .683.37 1.318.966 1.658l7.172 4.156c.368.233.836.226 1.207 0 .368-.208.603-.595.6-1.02V51.138c0-.684-.373-1.32-.97-1.66l-.005-.002-12.15-7.08a.447.447 0 0 0-.014-.008 2.199 2.199 0 0 0-.828-.25.447.447 0 0 0-.043-.002h-.119zm99.961.209a1.91 1.91 0 0 0-.95.254.447.447 0 0 0-.003.002l-12.182 7.078h-.002l-.004.002a1.916 1.916 0 0 0-.964 1.66v14.14c0 .684.37 1.323.97 1.663l12.096 6.937a1.87 1.87 0 0 0 1.885-.002h.002l7.316-4.098c.375-.206.606-.602.604-1.029a1.167 1.167 0 0 0-.602-1.025l-12.234-7.08h.004a.307.307 0 0 1-.155-.26v-4.418a.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.266.266 0 0 1 .14-.238.447.447 0 0 0 .01-.004l3.825-2.197a.447.447 0 0 0 .016-.01.25.25 0 0 1 .27 0 .447.447 0 0 0 .015.01l3.818 2.197a.313.313 0 0 1 .154.26v3.459c0 .415.219.806.606 1.013.37.223.834.232 1.199 0l7.227-4.242a1.9 1.9 0 0 0 .94-1.666v-3.433a1.94 1.94 0 0 0-.935-1.655.447.447 0 0 0-.005-.004L114.96 42.6a.447.447 0 0 0-.004 0 1.938 1.938 0 0 0-.953-.256.447.447 0 0 0-.002 0h-.004zm-66.615.049v.002h-.002a1.743 1.743 0 0 0-.291.015 1.41 1.41 0 0 0-.565.207l-.007.006a1.797 1.797 0 0 0-.16.041L34.304 49.65a.447.447 0 0 0-.075.094l-.117.069.016.029a1.558 1.558 0 0 0-.533.607c-.019.033-.029.068-.045.102-.012.027-.024.054-.033.082a1.744 1.744 0 0 0-.155.715V65.42c0 .254.073.487.172.709.043.112.095.22.16.32l-.035.059.055.066a1.672 1.672 0 0 0 .002.002.447.447 0 0 0 .004.047c.154.194.333.341.517.453a.447.447 0 0 0 .01.004l12.156 7.025c.24.14.506.201.776.225.1.015.203.024.304.016l.008.015.088-.013.008-.002a.447.447 0 0 0 .031.015 2.36 2.36 0 0 0 .676-.213.447.447 0 0 0 .023-.013l12.125-7.057a.447.447 0 0 0 .002 0c.25-.146.448-.35.61-.578.123-.166.218-.351.279-.545.001-.004.005-.007.006-.012.005-.017.02-.03.025-.047a.447.447 0 0 0-.023-.318c.005-.053.013-.101.013-.158V51.34c0-.07-.032-.128-.044-.194a1.65 1.65 0 0 0-.362-.982l-.002-.002.01-.017-.049-.065-.004-.004a.447.447 0 0 0-.011-.02 1.35 1.35 0 0 0-.034-.027 1.033 1.033 0 0 0-.267-.218 1.35 1.35 0 0 0-.178-.145l-6.047-3.498-6.049-3.516a.447.447 0 0 0-.005-.004 1.926 1.926 0 0 0-.583-.21l-.005-.006-.016-.002a.447.447 0 0 0-.004-.004 2.26 2.26 0 0 0-.035-.004 2.26 2.26 0 0 0-.002 0c-.027-.004-.055-.004-.082-.008a1.285 1.285 0 0 0-.033-.004 2.26 2.26 0 0 0-.17-.017zm-33.346.632h.082c.17.017.335.068.485.149l12.14 7.074a.447.447 0 0 0 .004.004c.32.181.525.529.525.885v18.968a.447.447 0 0 0 0 .004.272.272 0 0 1-.142.243.447.447 0 0 0-.026.013.25.25 0 0 1-.27 0 .447.447 0 0 0-.013-.008l-7.185-4.164a.447.447 0 0 0-.004-.002 1.033 1.033 0 0 1-.52-.884V56.43c0-.683-.372-1.32-.97-1.66l-.002-.002-3.07-1.79.036.024c-.305-.219-.658-.285-.982-.285a1.83 1.83 0 0 0-.984.27l-3.055 1.779-.004.002-.004.002c-.598.34-.969.977-.969 1.66v8.877c0 .357-.2.702-.517.882a.447.447 0 0 0-.004.002l-7.244 4.164a.447.447 0 0 0-.024.016.204.204 0 0 1-.226 0 .447.447 0 0 0-.045-.027c-.056-.03-.127-.14-.127-.239l-.03-18.968a.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002 1.034 1.034 0 0 1 .524-.906.447.447 0 0 0 .002-.002l12.184-7.059v.002a.957.957 0 0 1 .435-.143zm99.965.21a.447.447 0 0 0 .002 0c.179 0 .354.048.51.138l12.09 7.049c.296.18.503.534.503.889v3.439a.447.447 0 0 0 0 .006c.005.363-.184.7-.498.883a.447.447 0 0 0-.002 0l-7.24 4.25a.447.447 0 0 0-.012.007.252.252 0 0 1-.271 0 .447.447 0 0 0-.04-.023c-.054-.027-.124-.136-.124-.234v-3.471a.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002 1.2 1.2 0 0 0-.598-1.01.447.447 0 0 0-.002-.001l-3.804-2.19a1.15 1.15 0 0 0-1.223 0l-3.81 2.19.01-.004a1.164 1.164 0 0 0-.604 1.033v4.418a.447.447 0 0 0 0 .008 1.2 1.2 0 0 0 .591 1.015.447.447 0 0 0 .004 0l12.243 7.086a.447.447 0 0 0 .007.006.27.27 0 0 1 .143.24.447.447 0 0 0 0 .01.27.27 0 0 1-.143.24.447.447 0 0 0-.004.002l-7.33 4.104a.447.447 0 0 0-.007.004.968.968 0 0 1-.985 0 .447.447 0 0 0-.004-.002l-12.097-6.94a.447.447 0 0 0-.004-.002 1.026 1.026 0 0 1-.518-.88V51.34c0-.36.2-.705.518-.885a.447.447 0 0 0 .006-.004l12.185-7.08c.163-.093.335-.137.508-.137zm-66.57.058c.037.004.073.007.113.014a.447.447 0 0 0 .012.01.99.99 0 0 1 .316.113l.22.129 8.35 14.373-8.297 15.27-.253.148c-.11.056-.267.1-.397.125a.447.447 0 0 0-.021-.01.956.956 0 0 1-.215-.045l-8.387-15.39 8.559-14.737zm-.317.053-8.38 14.427-3.987-7.308a.997.997 0 0 1 .006-.01l.01-.006a.447.447 0 0 0 .076-.074l11.982-6.95a.447.447 0 0 0 .016-.009.901.901 0 0 1 .277-.07zm1.412.463 5.391 3.13a.447.447 0 0 0 .002 0l6.076 3.514a.447.447 0 0 0 .027.018c.063.03.117.074.159.129l-.01-.116a.447.447 0 0 0 .02.162c.046.054.075.12.11.182l-3.72 6.848-8.055-13.867zm-13.922 6.908 3.983 7.306-4.318 7.438a1.062 1.062 0 0 1-.014-.04v-14.08a.447.447 0 0 0 0-.001.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.997.997 0 0 1 .35-.615zm25.817.412c.016.07.04.14.04.213v13.013l-3.733-6.427 3.693-6.8zm20.219 1.773a.87.87 0 0 0-.389.09.447.447 0 0 0-.025.016l-4.145 2.416c-.268.138-.418.446-.418.715v4.857c0 .27.092.556.422.72l4.14 2.417a.447.447 0 0 0 .03.013.878.878 0 0 0 .765 0 .447.447 0 0 0 .03-.013l4.14-2.416c.278-.14.422-.454.422-.72V56.14c0-.268-.099-.555-.422-.717l-4.138-2.416a.447.447 0 0 0-.024-.012.855.855 0 0 0-.388-.094zm0 .899 4.08 2.38v4.778l-4.08 2.38-4.084-2.38v-4.78l4.084-2.378zm33.316 1.068a.703.703 0 0 0-.39.12l-2.305 1.343a.447.447 0 0 0-.01.008.744.744 0 0 0-.354.642v2.715c0 .258.153.51.34.633a.447.447 0 0 0 .024.014l2.308 1.345a.709.709 0 0 0 .78 0l2.306-1.345a.447.447 0 0 0 .012-.008.755.755 0 0 0 .352-.64v-2.717a.748.748 0 0 0-.358-.637.447.447 0 0 0-.008-.006l-2.304-1.35a.703.703 0 0 0-.375-.109.447.447 0 0 0-.018-.008zm.004.926 2.168 1.267v2.555l-2.168 1.266-2.168-1.266V57.06l2.168-1.264zM56.59 58.182l3.873 6.666v.574c0 .055-.007.115-.018.182a.447.447 0 0 0 .018.097c-.094.242-.255.48-.47.608l-11.434 6.654 8.03-14.781zm-17.863.097 8.214 15.075a.956.956 0 0 1-.087-.02.447.447 0 0 0-.004 0l-12.157-7.023.01.003c-.067-.04-.124-.1-.182-.156a.447.447 0 0 0-.06-.125 1.062 1.062 0 0 1-.088-.26l4.354-7.494zM63.22 71.14c-.494 0-.987.116-1.42.359a.447.447 0 0 0-.006.006l-11.469 6.682a2.888 2.888 0 0 0-1.428 2.494v13.33c0 1.026.542 1.982 1.428 2.498a.447.447 0 0 0 .002.002l3.018 1.732a.447.447 0 0 0 .025.016c1.503.74 2.18.765 2.84.765 1.17 0 2.158-.372 2.83-1.091.674-.72 1.01-1.747 1.01-2.971V81.81a.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.447.447 0 0 0 0-.002.806.806 0 0 0-.781-.791.447.447 0 0 0-.01 0h-1.465a.447.447 0 0 0-.008 0 .805.805 0 0 0-.785.79.447.447 0 0 0 0 .007v13.156c0 .35-.188.703-.52.892-.33.188-.837.25-1.586-.132h-.001l-3.065-1.782V80.69l11.365-6.591L74.56 80.69v13.252l-11.366 6.621-2.855-1.72h-.002c-.18-.12-.487-.225-.781-.03l.023-.015c-.8.46-.868.49-1.639.748-.05.016-.124.04-.214.09a.566.566 0 0 0-.297.357c-.062.218.042.446.15.565.105.115.227.196.387.285l.006.004.006.004 3.81 2.279a.447.447 0 0 0 .018.01c.43.232.908.367 1.418.367.51 0 .988-.127 1.377-.29a.447.447 0 0 0 .052-.028l11.469-6.68a.447.447 0 0 0 .002 0 2.896 2.896 0 0 0 1.426-2.502V80.68c0-1.025-.543-1.98-1.428-2.494l-11.469-6.68a.447.447 0 0 0-.01-.008 2.921 2.921 0 0 0-1.42-.36h-.003zm.004.892a.447.447 0 0 0 .004 0c.345-.002.684.084.986.25l11.459 6.676c.607.353.984 1.013.984 1.723v13.33a.447.447 0 0 0 0 .002 1.996 1.996 0 0 1-.986 1.724l-11.426 6.657a2.797 2.797 0 0 1-1.021.222c-.351 0-.676-.092-.993-.263h-.002l-3.59-2.15a7.32 7.32 0 0 0 1.27-.575l2.88 1.734a.447.447 0 0 0 .032.018c.25.125.516.16.795-.027l11.42-6.653c.28-.14.416-.454.416-.719V80.65c0-.265-.146-.577-.416-.716l-11.443-6.635a.447.447 0 0 0-.026-.016c-.25-.125-.516-.158-.795.028l-11.441 6.634.023-.011c-.325.166-.416.452-.416.716v13.332c0 .264.084.551.418.72l3.11 1.808a.447.447 0 0 0 .02.011c.944.483 1.816.47 2.439.116s.967-1.01.967-1.672V81.906h1.265v13.057c0 1.06-.283 1.84-.767 2.357-.484.517-1.193.81-2.178.81-.66 0-1.021.024-2.443-.677h-.004l-2.99-1.719h-.003a2.002 2.002 0 0 1-.984-1.724V80.68c0-.71.374-1.365.986-1.723l11.463-6.678c.285-.16.635-.248.987-.248zm17.904 5.557a2.312 2.312 0 0 0 0 4.621 2.312 2.312 0 0 0 0-4.621zm0 .197a2.114 2.114 0 1 1 0 4.229 2.114 2.114 0 0 1 0-4.229zm.002.15a1.96 1.96 0 0 0-1.95 1.964 1.96 1.96 0 0 0 1.95 1.963c1.078 0 1.95-.879 1.95-1.963a1.958 1.958 0 0 0-1.95-1.964zm0 .198c.968 0 1.752.79 1.752 1.767 0 .977-.784 1.764-1.752 1.764a1.756 1.756 0 0 1-1.75-1.764c0-.978.782-1.767 1.75-1.767zm-.836.422a.1.1 0 0 0-.1.1V81.2a.1.1 0 0 0 .1.1h.49a.1.1 0 0 0 .1-.1v-.91h.334c.075 0 .105.013.119.025.014.01.029.036.04.096v.002l.003.03.01.08.029.24c.022.177.043.377.043.41a.1.1 0 0 0 .098.1h.515a.1.1 0 0 0 .09-.145 1.413 1.413 0 0 1-.059-.27c-.017-.12-.031-.255-.046-.359-.014-.16-.024-.308-.092-.436-.036-.067-.14-.084-.215-.124.06-.028.112-.034.17-.088.114-.105.195-.277.195-.528 0-.362-.175-.579-.383-.674-.207-.096-.437-.091-.58-.091l-.861-.002zm.1.199.761.002c.143 0 .345.001.498.072.153.07.268.19.268.494 0 .21-.06.312-.135.381a.693.693 0 0 1-.258.133.1.1 0 0 0 .024.191c.15.012.201.054.24.13.04.073.057.199.07.357a.1.1 0 0 0 0 .006c.014.098.03.237.047.367.01.073.03.124.045.185h-.305a7.212 7.212 0 0 0-.033-.336l-.03-.238a12.337 12.337 0 0 1-.009-.08c0-.01-.003-.02-.004-.025a.1.1 0 0 0-.002-.022.347.347 0 0 0-.107-.209c-.065-.054-.15-.07-.246-.07h-.434a.1.1 0 0 0-.1.097v.91h-.292l.002-2.345zm.332.207a.1.1 0 0 0-.098.1v.693a.1.1 0 0 0 .098.1h.402a.466.466 0 0 0 .385-.17.459.459 0 0 0 .088-.278c0-.195-.076-.327-.182-.388s-.22-.057-.291-.057h-.402zm.1.197h.302c.073 0 .147.006.191.031.045.027.084.066.084.217a.282.282 0 0 1-.049.158c-.036.05-.091.09-.226.09h-.303v-.496zM66.358 80.61c-1.7 0-3.1.355-4.103 1.07-1.003.715-1.576 1.812-1.576 3.108 0 1.374.597 2.379 1.586 2.97.99.594 2.315.838 3.904 1 1.862.186 2.846.431 3.277.651.215.111.285.196.32.266.037.069.051.156.051.316 0 .531-.139.783-.582 1.02-.443.237-1.249.385-2.422.385-1.486 0-2.33-.2-2.779-.495-.446-.295-.607-.695-.715-1.41l.004.067c0-.416-.392-.735-.76-.735H61.07a.447.447 0 0 0-.004 0 .8.8 0 0 0-.787.793c0 1.062.29 2.28 1.287 3.205.997.926 2.64 1.52 5.223 1.52 1.87 0 3.388-.365 4.47-1.12 1.085-.753 1.694-1.923 1.694-3.318 0-1.343-.513-2.339-1.484-2.945-.971-.605-2.322-.877-4.106-1.111-1.774-.23-2.753-.425-3.19-.61-.218-.092-.279-.16-.308-.209-.029-.047-.05-.124-.05-.3 0-.28.03-.493.316-.715.286-.222.928-.457 2.197-.457 1.146 0 1.882.14 2.324.398.442.26.674.634.832 1.361a.447.447 0 0 0 .002.008c.08.342.382.59.733.604a.447.447 0 0 0 .017 0h1.524c.28 0 .436-.133.547-.242a.447.447 0 0 0 .05-.063.92.92 0 0 0 .166-.51.447.447 0 0 0 0-.045c-.122-1.478-.7-2.647-1.753-3.392-1.054-.744-2.52-1.065-4.41-1.065zm0 .893c1.788 0 3.066.315 3.895.9.8.567 1.225 1.404 1.35 2.631h-1.282c-.196-.814-.567-1.467-1.218-1.85-.68-.397-1.565-.52-2.776-.52-1.373 0-2.212.23-2.744.642-.533.413-.66 1.007-.66 1.422 0 .243.026.512.178.763.152.252.404.434.724.569.64.27 1.63.44 3.422.671 1.748.23 3 .52 3.746.987.746.465 1.067 1.042 1.067 2.185 0 1.15-.439 1.978-1.309 2.584-.871.605-2.213.963-3.963.963-2.447 0-3.835-.563-4.613-1.285-.75-.696-.973-1.576-.99-2.45h1.277c.13.779.406 1.486 1.08 1.93.703.465 1.711.643 3.271.643 1.241 0 2.164-.125 2.842-.488.68-.363 1.055-1.04 1.055-1.809 0-.217-.02-.477-.154-.734-.135-.257-.376-.476-.703-.643-.654-.336-1.694-.554-3.596-.744-1.543-.157-2.762-.417-3.533-.879-.772-.462-1.153-1.06-1.153-2.203 0-1.047.407-1.815 1.201-2.38.794-.566 2.01-.905 3.586-.905z"/>
</svg>);
}