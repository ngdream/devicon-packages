const React = require("react");
module.exports = function ProtractorOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M97.231 72.752c-.63 0-.946.36-.946 1.083v.163l-.525.161v.201h.525v2.594h.445V74.36h.748v-.345h-.748v-.19c0-.248.04-.427.12-.538.081-.112.206-.168.373-.168.122 0 .268.028.44.083l.115-.357a1.944 1.944 0 0 0-.547-.093zm-39.662.029v1.196l.01.207.019.211h-.035c-.213-.29-.518-.435-.917-.435-.382 0-.681.135-.896.403-.214.268-.321.645-.321 1.13 0 .483.107.857.32 1.12.214.263.513.394.897.394.41 0 .717-.149.923-.448h.024l.058.395h.363v-4.173zm17.543 0v1.196l.01.207.02.211h-.036c-.212-.29-.518-.435-.917-.435-.383 0-.681.135-.895.403-.215.268-.323.645-.323 1.13 0 .483.108.857.321 1.12.214.263.513.394.897.394.41 0 .717-.149.923-.448h.024l.059.395h.362v-4.173zm42.676 0v4.173h.445v-4.173zm-30.385.142a.266.266 0 0 0-.189.071c-.05.048-.075.122-.075.224 0 .1.025.175.075.224.05.05.114.073.19.073a.257.257 0 0 0 .184-.073c.052-.05.077-.124.077-.224s-.025-.174-.077-.223a.261.261 0 0 0-.185-.072zm39.423.054c-.374 0-.675.089-.902.268a.873.873 0 0 0-.34.722c0 .287.079.52.235.7.156.178.416.333.781.463.26.093.456.177.584.25a.767.767 0 0 1 .273.24.615.615 0 0 1 .082.334.568.568 0 0 1-.23.48c-.154.116-.383.174-.687.174a2.75 2.75 0 0 1-.564-.06 2.823 2.823 0 0 1-.525-.16v.44c.25.12.607.18 1.073.18.428 0 .768-.097 1.019-.29.25-.193.375-.463.375-.808 0-.268-.077-.485-.231-.653-.155-.169-.438-.326-.85-.472a3.186 3.186 0 0 1-.545-.24.708.708 0 0 1-.254-.24.662.662 0 0 1-.075-.333c0-.184.068-.329.204-.432.136-.104.324-.156.566-.156.306 0 .62.068.944.204l.142-.397a2.653 2.653 0 0 0-1.075-.214zm-20.967.04-1.55 3.937h.46l.484-1.247h1.572l.487 1.247h.472l-1.542-3.937zm18.487.016v3.921c0 .202-.046.356-.138.463-.092.108-.226.16-.403.16-.138 0-.27-.016-.398-.052v.39c.097.047.23.071.398.071.322 0 .568-.094.74-.28.171-.187.257-.45.257-.79v-3.883Zm-63.852.3-.187.627-.421.185v.215h.421v1.75c0 .598.284.897.852.897.076 0 .16-.007.254-.022a.814.814 0 0 0 .214-.058v-.34a1.526 1.526 0 0 1-.175.035 1.38 1.38 0 0 1-.228.018.44.44 0 0 1-.346-.142c-.084-.095-.126-.23-.126-.408v-1.73h.853v-.345h-.853v-.682Zm17.543 0-.187.627-.42.185v.215h.42v1.75c0 .598.284.897.853.897.075 0 .16-.007.253-.022a.799.799 0 0 0 .213-.058v-.34a1.536 1.536 0 0 1-.402.053.441.441 0 0 1-.346-.142c-.084-.095-.125-.23-.125-.408v-1.73h.852v-.345h-.852v-.682Zm7.476 0-.187.627-.422.185v.215h.422v1.75c0 .598.284.897.853.897.074 0 .16-.007.252-.022a.809.809 0 0 0 .214-.058v-.34a1.511 1.511 0 0 1-.174.035c-.073.012-.15.018-.228.018a.441.441 0 0 1-.346-.142c-.084-.095-.127-.23-.127-.408v-1.73h.854v-.345h-.854v-.682Zm20.531.182c.063.224.123.413.183.567l.455 1.215h-1.268l.461-1.215c.074-.206.13-.395.17-.567zm-55.668.445c-.393 0-.707.14-.94.42-.233.278-.35.654-.35 1.128 0 .47.126.837.377 1.102.25.265.594.397 1.028.397.199 0 .368-.015.508-.044.14-.03.29-.078.447-.146v-.397c-.309.132-.622.2-.938.2-.3 0-.534-.091-.7-.27-.164-.179-.251-.44-.26-.785h2.024v-.282c0-.397-.107-.717-.322-.959-.214-.242-.506-.364-.874-.364zm3.29 0c-.203 0-.386.04-.55.12a.913.913 0 0 0-.384.337h-.021l-.073-.402h-.362v2.94h.445v-1.543c0-.383.072-.657.215-.824.143-.166.368-.249.675-.249.233 0 .404.06.514.178.108.117.162.296.162.535v1.902h.445v-1.918c0-.376-.089-.649-.267-.819-.18-.17-.446-.257-.8-.257zm9.686 0c-.426 0-.758.135-.997.402-.24.267-.36.64-.36 1.12 0 .309.055.579.166.809.11.231.268.408.472.531.204.124.437.185.7.185.426 0 .759-.134 1-.403.242-.269.362-.643.362-1.122 0-.467-.12-.837-.363-1.111-.242-.273-.569-.41-.98-.41zm4.568 0c-.394 0-.708.14-.94.42-.234.278-.35.654-.35 1.128 0 .47.125.837.376 1.102.251.265.594.397 1.029.397.198 0 .367-.015.508-.044.14-.03.289-.078.446-.146v-.397c-.309.132-.622.2-.939.2-.3 0-.533-.091-.698-.27-.165-.179-.253-.44-.262-.785h2.025v-.282c0-.397-.107-.717-.321-.959-.215-.242-.506-.364-.874-.364zm3.289 0c-.202 0-.387.04-.55.12a.911.911 0 0 0-.384.337h-.021l-.073-.402h-.361v2.94h.445v-1.543c0-.383.071-.657.214-.824.143-.166.369-.249.676-.249.233 0 .403.06.512.178.109.117.163.296.163.535v1.902h.446v-1.918c0-.376-.09-.649-.268-.819-.18-.17-.445-.257-.8-.257zm9.62 0c-.394 0-.708.14-.941.42-.233.278-.35.654-.35 1.128 0 .47.126.837.378 1.102.25.265.593.397 1.028.397.198 0 .367-.015.507-.044.141-.03.29-.078.447-.146v-.397c-.31.132-.622.2-.939.2-.3 0-.533-.091-.698-.27-.165-.179-.252-.44-.262-.785h2.025v-.282c0-.397-.107-.717-.322-.959-.214-.242-.506-.364-.874-.364zm2.806 0c-.34 0-.607.07-.802.21a.658.658 0 0 0-.292.565c0 .135.028.25.084.347a.794.794 0 0 0 .257.258c.116.076.31.166.584.267.288.111.481.207.58.288.1.082.15.18.15.295a.368.368 0 0 1-.189.34c-.125.073-.303.11-.536.11a2.188 2.188 0 0 1-.922-.231v.413c.218.124.521.185.911.185.369 0 .655-.074.858-.222.204-.149.306-.36.306-.633a.677.677 0 0 0-.184-.485c-.122-.129-.357-.257-.706-.384a4.173 4.173 0 0 1-.515-.218.593.593 0 0 1-.195-.158.332.332 0 0 1-.06-.2c0-.116.053-.208.161-.274.107-.066.267-.099.477-.099.24 0 .507.061.802.183l.158-.363a2.345 2.345 0 0 0-.927-.194zm6.266 0c-.202 0-.386.04-.55.12a.914.914 0 0 0-.383.337h-.022l-.072-.402h-.363v2.94h.445v-1.543c0-.383.072-.657.215-.824.143-.166.368-.249.676-.249.232 0 .403.06.512.178.109.117.164.296.164.535v1.902h.445v-1.918c0-.376-.09-.649-.268-.819-.18-.17-.445-.257-.8-.257zm2.9 0c-.354 0-.627.088-.82.262-.194.174-.29.423-.29.745a.94.94 0 0 0 .143.515c.096.15.22.256.372.318a.897.897 0 0 0-.27.234.47.47 0 0 0-.087.281.42.42 0 0 0 .076.25.467.467 0 0 0 .19.158.877.877 0 0 0-.483.265.684.684 0 0 0-.172.464c0 .262.105.464.313.607.208.142.504.214.888.214.501 0 .882-.086 1.144-.256a.835.835 0 0 0 .39-.744c0-.256-.085-.45-.255-.585-.171-.134-.415-.2-.734-.2h-.52c-.16 0-.275-.02-.34-.059a.19.19 0 0 1-.1-.178c0-.152.095-.278.285-.378.077.015.159.021.246.021.343 0 .613-.086.81-.257.197-.171.295-.401.295-.69a.95.95 0 0 0-.193-.587l.544-.065v-.28h-1.016a1.493 1.493 0 0 0-.416-.055zm6.352 0c-.425 0-.758.135-.997.402-.24.267-.36.64-.36 1.12 0 .309.056.579.167.809.11.231.268.408.472.531.204.124.437.185.699.185.426 0 .76-.134 1.001-.403.241-.269.361-.643.361-1.122 0-.467-.12-.837-.363-1.111-.242-.273-.569-.41-.98-.41zm3.41 0a.892.892 0 0 0-.507.157 1.292 1.292 0 0 0-.394.442h-.021l-.05-.544h-.369v2.94h.445v-1.578c0-.288.085-.528.254-.722a.783.783 0 0 1 .61-.289c.093 0 .2.013.322.04l.061-.413a1.715 1.715 0 0 0-.35-.033zm7.027 0c-.201 0-.385.04-.549.12a.913.913 0 0 0-.384.337h-.022l-.072-.402h-.361v2.94h.445v-1.543c0-.383.072-.657.215-.824.142-.166.368-.249.675-.249.233 0 .403.06.512.178.11.117.164.296.164.535v1.902h.445v-1.918c0-.376-.089-.649-.268-.819-.179-.17-.446-.257-.8-.257zm2.9 0c-.353 0-.626.088-.819.262-.194.174-.29.423-.29.745a.94.94 0 0 0 .143.515c.096.15.22.256.372.318a.906.906 0 0 0-.271.234.47.47 0 0 0-.086.281c0 .095.026.178.076.25a.465.465 0 0 0 .19.158.882.882 0 0 0-.483.265.686.686 0 0 0-.172.464c0 .262.105.464.313.607.208.142.505.214.889.214.5 0 .882-.086 1.142-.256a.835.835 0 0 0 .391-.744c0-.256-.085-.45-.256-.585-.17-.134-.414-.2-.732-.2h-.52c-.162 0-.275-.02-.342-.059a.192.192 0 0 1-.099-.178c0-.152.094-.278.284-.378.077.015.16.021.247.021.344 0 .613-.086.81-.257.197-.171.295-.401.295-.69a.942.942 0 0 0-.193-.587l.545-.065v-.28h-1.017a1.488 1.488 0 0 0-.417-.055zm10.972 0a.89.89 0 0 0-.506.157 1.298 1.298 0 0 0-.395.442h-.022l-.05-.544h-.368v2.94h.446v-1.578c0-.288.084-.528.253-.722a.785.785 0 0 1 .61-.289c.093 0 .2.013.322.04l.062-.413a1.743 1.743 0 0 0-.352-.033zm-3.235.007a2.099 2.099 0 0 0-.995.251l.137.341c.309-.15.586-.225.83-.225.22 0 .378.055.477.164.1.11.15.28.15.512v.182l-.5.016c-.95.029-1.424.34-1.424.933 0 .277.083.49.248.641.165.15.393.225.685.225.218 0 .4-.032.546-.097.146-.066.291-.191.438-.375h.022l.088.42h.33v-2.007c0-.343-.084-.592-.253-.748-.17-.156-.428-.233-.78-.233zm-33.05.048v2.94h.445v-2.94zm27.263 0v1.922c0 .374.088.646.267.815.177.17.445.255.802.255.208 0 .392-.038.555-.115a.883.883 0 0 0 .378-.333h.025l.064.395h.368v-2.94h-.445v1.545c0 .38-.071.656-.214.824-.142.168-.367.252-.674.252-.232 0-.403-.06-.512-.177-.11-.118-.164-.297-.164-.536v-1.907zm-21.658.27c.44 0 .66.221.66.663 0 .421-.217.632-.652.632-.207 0-.369-.052-.485-.158-.116-.105-.174-.26-.174-.466 0-.222.056-.389.168-.502.113-.113.274-.169.483-.169zm19.69 0c.44 0 .66.221.66.663 0 .421-.217.632-.652.632-.207 0-.369-.052-.485-.158-.116-.105-.174-.26-.174-.466 0-.222.056-.389.169-.502.112-.113.273-.169.483-.169zm-62.101.05c.233 0 .411.073.536.222.125.15.188.365.188.646h-1.537c.025-.272.107-.485.248-.639a.73.73 0 0 1 .565-.23zm6.326 0c.304 0 .525.087.664.265.139.178.208.476.208.892v.094c0 .368-.068.635-.206.8-.137.166-.357.249-.66.249-.266 0-.469-.096-.607-.287-.137-.191-.206-.475-.206-.85 0-.37.07-.658.208-.86a.681.681 0 0 1 .6-.304zm11.217 0c.232 0 .411.073.536.222.125.15.188.365.188.646h-1.536c.024-.272.107-.485.248-.639a.727.727 0 0 1 .564-.23zm6.326 0c.305 0 .526.087.664.265.139.178.208.476.208.892v.094c0 .368-.068.635-.205.8-.137.166-.357.249-.66.249-.268 0-.47-.096-.608-.287-.137-.191-.207-.475-.207-.85 0-.37.07-.658.208-.86a.683.683 0 0 1 .6-.304zm6.583 0c.233 0 .411.073.537.222.125.15.187.365.187.646H80.01c.025-.272.107-.485.249-.639a.727.727 0 0 1 .564-.23zm-17.485.004c.296 0 .519.098.67.291.151.194.226.478.226.852 0 .377-.075.663-.226.859-.151.195-.372.294-.664.294-.292 0-.512-.099-.662-.295-.15-.197-.225-.483-.225-.858 0-.38.074-.665.221-.856.149-.191.37-.287.66-.287zm35.802 0c.294 0 .517.098.669.291.151.194.226.478.226.852 0 .377-.075.663-.226.859-.152.195-.373.294-.664.294-.291 0-.512-.099-.662-.295-.15-.197-.226-.483-.226-.858 0-.38.075-.665.223-.856.148-.191.368-.287.66-.287zm21.674 1.169v.266c0 .273-.079.486-.237.638-.159.152-.376.228-.653.228-.176 0-.312-.042-.41-.126-.097-.084-.145-.206-.145-.367 0-.206.078-.358.234-.455.157-.097.412-.153.766-.165zm-28.283 1.38h.533c.272 0 .457.03.555.092.099.06.147.172.147.33 0 .192-.09.343-.269.455-.18.111-.456.167-.83.167-.25 0-.442-.04-.576-.122a.4.4 0 0 1-.202-.363c0-.18.056-.319.17-.415.111-.097.27-.145.472-.145zm19.69 0h.533c.272 0 .457.03.555.092.099.06.147.172.147.33 0 .192-.09.343-.27.455-.179.111-.455.167-.829.167-.25 0-.442-.04-.577-.122a.4.4 0 0 1-.2-.363c0-.18.056-.319.168-.415.113-.097.27-.145.472-.145zM29.236 55.06v14.734h2.408v-5.513h1.532c1.861 0 3.295-.41 4.303-1.23 1.008-.82 1.512-1.998 1.512-3.536 0-1.465-.458-2.574-1.375-3.326-.918-.753-2.297-1.13-4.137-1.13zm34.23 1.108-.806 2.358-1.632.867v1.048h1.522v6.007c0 2.365 1.122 3.547 3.366 3.547.443 0 .872-.039 1.285-.115a4.786 4.786 0 0 0 1.012-.288v-1.784a5.753 5.753 0 0 1-1.733.272c-.463 0-.838-.135-1.123-.408-.286-.272-.429-.693-.429-1.264V60.44h3.174v-1.793h-3.174v-2.48zm38.12 0-.806 2.358-1.632.867v1.048h1.521v6.007c0 2.365 1.123 3.547 3.367 3.547a7.1 7.1 0 0 0 1.285-.115 4.8 4.8 0 0 0 1.012-.288v-1.784a5.757 5.757 0 0 1-1.733.272c-.464 0-.838-.135-1.123-.408-.286-.272-.429-.693-.429-1.264V60.44h3.174v-1.793h-3.174v-2.48Zm-69.942.908h1.673c1.095 0 1.901.208 2.42.624.516.417.775 1.048.775 1.895 0 .914-.29 1.586-.867 2.016-.578.43-1.485.645-2.72.645h-1.28zm15.259 1.37c-.686 0-1.326.195-1.92.585a4.416 4.416 0 0 0-1.447 1.582h-.121l-.312-1.965H41.25v11.146h2.368v-5.825c0-.988.294-1.791.882-2.409.588-.618 1.355-.927 2.302-.927.363 0 .712.04 1.048.12l.232-2.206a5.674 5.674 0 0 0-1.178-.101zm7.463 0c-1.686 0-2.993.508-3.92 1.522s-1.39 2.425-1.39 4.233c0 1.162.215 2.183.645 3.063.43.88 1.044 1.556 1.844 2.026.8.47 1.72.705 2.76.705 1.667 0 2.967-.51 3.9-1.532.934-1.021 1.401-2.441 1.401-4.262 0-1.76-.47-3.16-1.41-4.198-.941-1.038-2.217-1.557-3.83-1.557zm21.728 0c-.685 0-1.326.195-1.92.585a4.412 4.412 0 0 0-1.446 1.582h-.12l-.313-1.965H70.44v11.146h2.37v-5.825c0-.988.293-1.791.88-2.409.588-.618 1.356-.927 2.304-.927.362 0 .71.04 1.047.12l.232-2.206a5.674 5.674 0 0 0-1.179-.101zm6.97 0a9.12 9.12 0 0 0-2.037.247 8.23 8.23 0 0 0-1.985.72l.766 1.693c.484-.227.988-.426 1.512-.594a5.342 5.342 0 0 1 1.642-.251c.699 0 1.215.175 1.547.528.333.353.498.885.498 1.597v.595l-1.923.06c-1.748.055-3.047.374-3.9.958-.854.584-1.28 1.45-1.28 2.6 0 1.082.307 1.918.922 2.509s1.47.887 2.565.887c.853 0 1.552-.123 2.096-.368s1.085-.706 1.623-1.385h.08l.474 1.552h1.692v-7.508c0-1.324-.36-2.294-1.083-2.913-.721-.618-1.793-.927-3.21-.927zm11.85 0c-1.733 0-3.058.503-3.975 1.511-.917 1.008-1.375 2.45-1.375 4.324 0 1.84.438 3.254 1.315 4.238.877.984 2.158 1.476 3.844 1.476.685 0 1.269-.053 1.749-.161a4.65 4.65 0 0 0 1.355-.534v-2.066a6.056 6.056 0 0 1-2.993.786c-.927 0-1.631-.315-2.111-.942-.48-.629-.721-1.567-.721-2.817 0-2.56.964-3.84 2.893-3.84.651 0 1.477.195 2.478.585l.717-1.905c-.942-.437-2-.655-3.175-.655Zm18.293 0c-1.687 0-2.993.508-3.921 1.522-.927 1.014-1.39 2.425-1.39 4.233 0 1.162.215 2.183.644 3.063.43.88 1.045 1.556 1.845 2.026.8.47 1.72.705 2.761.705 1.666 0 2.965-.51 3.9-1.532.933-1.021 1.4-2.441 1.4-4.262 0-1.76-.47-3.16-1.41-4.198-.94-1.038-2.217-1.557-3.83-1.557zm13.614 0c-.685 0-1.325.195-1.92.585a4.42 4.42 0 0 0-1.446 1.582h-.12l-.313-1.965h-1.855v11.146h2.37v-5.825c0-.988.293-1.791.881-2.409.588-.618 1.355-.927 2.302-.927.364 0 .713.04 1.049.12l.231-2.206a5.674 5.674 0 0 0-1.179-.101zM54.326 60.38c1.895 0 2.842 1.273 2.842 3.82 0 2.573-.94 3.86-2.822 3.86-1.901 0-2.851-1.287-2.851-3.86 0-1.23.222-2.174.669-2.832.447-.659 1.168-.988 2.162-.988zm58.84 0c1.894 0 2.843 1.273 2.843 3.82 0 2.573-.942 3.86-2.823 3.86-1.901 0-2.852-1.287-2.852-3.86 0-1.23.223-2.174.67-2.832.447-.659 1.167-.988 2.162-.988zm-28.178 4.092v.967c0 .866-.26 1.54-.781 2.02-.52.481-1.21.722-2.07.722-.592 0-1.036-.137-1.33-.41-.297-.272-.444-.655-.444-1.153 0-.685.253-1.194.76-1.527.507-.332 1.319-.52 2.434-.56z" fill="#100f0d"/>
	<path d="M25.6 62.527c0 7.07-5.73 12.801-12.8 12.801S0 69.598 0 62.528s5.73-12.8 12.8-12.8 12.8 5.73 12.8 12.8" fill="#ed163a"/>
	<path d="m19.408 56.354-4.354-.04-2.545-2.546-2.988 1.985.516.515-1.21-.01-4.11 6.913h-1.61l1.01 1.012-1.018 1.714 9.429 9.428.273.003c7.063 0 12.79-5.722 12.8-12.782l-6.192-6.193" fill="#d51c2f"/>
	<path d="M6.493 63.463a6.306 6.306 0 1 1 12.613 0zm14.177.29v-.582h1.824a9.661 9.661 0 0 0-2.633-6.358l-1.363 1.363-.411-.412 1.362-1.363a9.658 9.658 0 0 0-6.358-2.633v1.824h-.582v-1.824a9.66 9.66 0 0 0-6.358 2.633l1.363 1.363-.412.412-1.363-1.363a9.663 9.663 0 0 0-2.633 6.358H4.93v.582H3.097v2.135h19.404v-2.134H20.67" fill="#f5f5f5"/>
</svg>);
}