import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'JetpackcomposeLineIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#4285f4'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m63.991 1 .008-.5h-.008V1Zm6.69 1.82-.247.435.246-.435Zm42.621 24.072.247-.435h-.001l-.246.435Zm4.477 3.785.4-.3a1.059 1.059 0 0 0-.012-.015l-.388.315Zm.678.907.41-.287-.01-.013-.4.3Zm.074.107.427-.261a.297.297 0 0 0-.017-.026l-.41.287Zm.736 1.203.439-.241a1.782 1.782 0 0 0-.012-.02l-.427.26Zm1.654 6.138h.5v-.005l-.5.005Zm0 48.935h-.5v.005l.5-.005Zm-1.821 7.06.436.245-.436-.246Zm-5.106 5.203.254.431-.254-.431Zm-42.16 24.876-.253-.431.254.431Zm-5.72 1.877.004.5a.748.748 0 0 0 .047-.002l-.05-.498ZM63.42 127l-.044.498.047.002-.003-.5Zm-5.666-1.763-.246.435.246-.435ZM12.97 99.942l.246-.435-.246.435ZM8 91.512h-.5v.004l.5-.005Zm0-51.825-.5-.007v.007H8Zm.947-5.214-.45-.219a.491.491 0 0 0-.02.045l.47.174Zm1.169-2.404-.427-.262a.498.498 0 0 0-.023.043l.45.22Zm4.322-4.243.254.43-.254-.43Zm42.16-24.87.254.43-.254-.43ZM63.622 1V.5h-.005l.005.5ZM11.308 35.795l.245-.437a.5.5 0 0 0-.722.287l.477.15Zm-.094.3-.477-.15-.002.005.479.144Zm-.547 3.98h.5v-.004l-.5.005Zm0 51.423h-.5v.004l.5-.004Zm3.614 6.12.246-.435-.246.435Zm44.784 25.297-.246.435.246-.435Zm4.303 1.399-.057.497h.007l.05-.497Zm.093.009-.05.498a.499.499 0 0 0 .55-.495l-.5-.003Zm.01-2.176.5.003v-.002l-.5-.001Zm.01-9.124.5.001v-.001h-.5Zm-.014-10.358.5-.001a.5.5 0 0 0-.457-.497l-.043.498Zm-.06-.005-.067.495.023.003.043-.498Zm-2.675-.786-.221.448.008.004.213-.452Zm-.315-.156-.239.439.018.009.221-.448Zm-.278-.151-.246.435.007.004.239-.439Zm-27.13-15.324.245-.435-.246.435Zm-2.384-2.337-.43.254.43-.254Zm-.895-3.228h-.5v.004l.5-.004Zm0-31.148h.5v-.005l-.5.005Zm.37-2.868-.479-.143-.002.008.482.135Zm.088-.29.479.142a.5.5 0 0 0-.235-.58l-.244.437Zm86.789-12.11.444-.229a.503.503 0 0 0-.701-.2l.257.43ZM98.362 45.38l-.256-.429a.5.5 0 0 0-.194.646l.45-.216Zm.041.086.454-.21-.003-.007-.45.217Zm.78 3.125.5-.014-.001-.01-.5.024Zm.008.294h.5v-.014l-.5.015Zm-.001 29.642h-.5v.005l.5-.005Zm-1.17 4.54-.435-.245.435.246Zm-3.284 3.347-.254-.43.254.43Zm-25.54 15.069-.255-.431.254.431Zm-2.842 1.08.09.492.006-.001-.096-.491Zm-.22.04-.089-.492a.5.5 0 0 0-.41.493l.5-.001Zm.005 2.107.5-.001-.5.001Zm.009 12.209.5.001v-.001h-.5Zm-.018 7.17.5.006v-.005l-.5-.001Zm-.002.208-.5-.006a.5.5 0 0 0 .57.501l-.07-.495Zm.398-.057.07.495.01-.001-.08-.494Zm3.645-1.255.24.438.007-.003-.247-.435Zm.308-.175.248.434.007-.004-.254-.43Zm42.16-24.876.254.431-.254-.43Zm4.138-4.218.435.246-.435-.246Zm1.476-5.735h-.5v.005l.5-.005Zm0-48.935h.5v-.005l-.5.005Zm-1.101-4.443.448-.222-.004-.007-.444.23ZM63.647 3.666l.005.5-.005-.5Zm-5.693 1.586.254.43-.254-.43Zm-42.16 24.87.254.43-.254-.43Zm-3.166 2.973-.414-.28-.004.006.418.274Zm-.184.28-.418-.274a.5.5 0 0 0 .174.71l.245-.436ZM31.368 43.97l-.245.436a.5.5 0 0 0 .648-.14l-.404-.296Zm.196-.268-.397-.304-.007.008.404.296Zm2.077-1.906-.262-.426-.007.005.269.421Zm.248-.152-.254-.431-.007.004.261.427ZM59.43 26.576l.254.43-.254-.43Zm4.517-1.259-.005-.5.005.5Zm4.54 1.17-.246.436.246-.435Zm25.821 14.586.246-.435-.246.435Zm2.4 1.891.371-.336-.005-.005-.365.341Zm.175.192-.371.336a.5.5 0 0 0 .627.093l-.256-.429Zm18.577-11.095.256.429a.5.5 0 0 0 .119-.759l-.375.33Zm-.204-.233.376-.33-.006-.005-.37.335Zm-2.963-2.437.258-.428-.005-.003-.253.431Zm-.303-.177.253-.432-.007-.004-.246.436ZM69.369 5.142l-.246.436.246-.436ZM83.414 51.41l-.25.433.25-.433Zm-17.33-10.006.25-.433-.25.433Zm-3.68 0-.25-.433.25.433ZM45.073 51.41l.25.433-.25-.433Zm0 26.385.25-.433-.25.433ZM62.403 87.8l-.25.433.25-.433Zm3.68 0 .25.433-.25-.433Zm17.331-10.006-.25-.433.25.433ZM63.983 1.5c2.263.038 4.48.642 6.451 1.755l.492-.87A14.587 14.587 0 0 0 64 .5l-.017 1Zm6.451 1.755 42.623 24.073.491-.871L70.926 2.385l-.492.87Zm42.622 24.073a15.276 15.276 0 0 1 4.335 3.665l.776-.63a16.259 16.259 0 0 0-4.618-3.906l-.493.87Zm4.322 3.649.678.906.801-.599-.678-.906-.801.599Zm.669.893.075.107.819-.573-.074-.107-.82.573Zm.058.081.736 1.203.853-.521-.736-1.203-.853.521Zm.724 1.183c1.017 1.85 1.571 3.863 1.592 5.903l1-.01c-.023-2.217-.625-4.39-1.715-6.374l-.877.481Zm1.592 5.898v48.935h1V39.032h-1Zm0 48.94a13.606 13.606 0 0 1-1.756 6.809l.871.491a14.603 14.603 0 0 0 1.885-7.31l-1 .01Zm-1.756 6.808a13.594 13.594 0 0 1-4.925 5.02l.508.861a14.6 14.6 0 0 0 5.288-5.389l-.871-.492Zm-4.925 5.02-42.16 24.875.509.861 42.159-24.875-.508-.862Zm-42.16 24.875a13.535 13.535 0 0 1-5.516 1.811l.101.995a14.55 14.55 0 0 0 5.924-1.945l-.508-.861Zm-5.468 1.808-2.696.017.007 1 2.695-.017-.006-1Zm-2.648.019a13.59 13.59 0 0 1-5.465-1.7l-.492.87a14.59 14.59 0 0 0 5.868 1.826l.089-.996Zm-5.465-1.7L13.217 99.506l-.492.871 44.782 25.295.492-.87ZM13.216 99.506a9.274 9.274 0 0 1-4.716-8l-1 .01a10.275 10.275 0 0 0 5.226 8.862l.49-.872ZM8.5 91.511V39.687h-1v51.824h1Zm0-51.817c.024-1.774.334-3.481.915-5.047l-.937-.348c-.624 1.68-.952 3.5-.978 5.381l1 .014Zm.896-5.002 1.17-2.404-.9-.438-1.17 2.404.9.438Zm1.145-2.361a12.044 12.044 0 0 1 4.151-4.075l-.508-.861a13.044 13.044 0 0 0-4.495 4.412l.852.524Zm4.151-4.075 42.16-24.87-.508-.861-42.16 24.87.508.861Zm42.16-24.87A13.57 13.57 0 0 1 63.628 1.5l-.01-1a14.57 14.57 0 0 0-7.273 2.025l.508.86Zm6.77-1.886h.369v-1h-.37v1Zm-52.79 34.145-.095.3.954.3.094-.3-.954-.3Zm-.097.305a13.806 13.806 0 0 0-.568 4.13l1-.01a12.806 12.806 0 0 1 .526-3.83l-.958-.29Zm-.568 4.126v51.422h1V40.076h-1Zm0 51.426a7.6 7.6 0 0 0 1.056 3.795l.861-.508a6.6 6.6 0 0 1-.917-3.296l-1 .01Zm1.056 3.795a7.6 7.6 0 0 0 2.813 2.757l.49-.871a6.6 6.6 0 0 1-2.442-2.394l-.861.508Zm2.812 2.757L58.82 123.35l.492-.871-44.784-25.296-.492.87ZM58.82 123.35a11.923 11.923 0 0 0 4.492 1.461l.114-.994a10.92 10.92 0 0 1-4.114-1.338l-.492.871Zm4.499 1.461.093.01.1-.995-.092-.009-.101.994Zm.643-.485.01-2.176-1-.005-.01 2.176 1 .005Zm.01-2.178.01-9.124-1-.001-.01 9.124 1 .001Zm.01-9.125-.014-10.359-1 .002.014 10.358 1-.001Zm-.471-10.856-.06-.005-.087.996.06.005.087-.996Zm-.038-.003a8.58 8.58 0 0 1-2.527-.743l-.426.905c.892.42 1.844.7 2.821.829l.132-.991Zm-2.518-.738-.315-.156-.443.896.315.156.443-.896Zm-.298-.147-.278-.151-.478.878.278.151.478-.878Zm-.271-.148-27.13-15.323-.492.87 27.13 15.324.492-.871ZM33.254 85.808a5.94 5.94 0 0 1-2.198-2.156l-.861.508a6.94 6.94 0 0 0 2.568 2.519l.491-.871Zm-2.198-2.156a5.963 5.963 0 0 1-.826-2.978l-1 .008a6.964 6.964 0 0 0 .964 3.478l.862-.508Zm-.826-2.974V49.53h-1v31.148h1Zm0-31.153c-.01-.946.11-1.865.352-2.727l-.963-.27a10.741 10.741 0 0 0-.389 3.007l1-.01Zm.35-2.72.087-.291-.959-.286-.086.291.958.286Zm-.148-.87-18.88-10.577-.488.873 18.88 10.576.488-.872Zm86.288-12.102L98.106 44.95l.512.859 18.615-11.117-.513-.859ZM97.912 45.597l.04.085.902-.434-.041-.085-.901.434Zm.037.078c.434.936.686 1.928.734 2.939l.999-.048a8.866 8.866 0 0 0-.825-3.312l-.908.421Zm.734 2.93.008.294 1-.029-.009-.294-1 .028Zm.008.28-.001 29.641h1V48.885h-1Zm0 29.646a8.554 8.554 0 0 1-1.106 4.29l.87.491a9.554 9.554 0 0 0 1.235-4.79l-1 .009Zm-1.106 4.29a8.554 8.554 0 0 1-3.103 3.161l.508.862a9.553 9.553 0 0 0 3.465-3.532l-.87-.491Zm-3.103 3.161-25.54 15.069.508.861 25.54-15.068-.508-.862Zm-25.54 15.069c-.83.49-1.738.836-2.684 1.02l.192.982a9.477 9.477 0 0 0 3-1.141l-.509-.861Zm-2.678 1.019-.219.04.18.984.219-.04-.18-.984Zm-.63.533.005 2.107 1-.002-.004-2.107-1 .002Zm.005 2.106.009 12.21 1-.001-.009-12.21-1 .001Zm.009 12.208-.018 7.17 1 .002.018-7.17-1-.002Zm-.018 7.165-.002.208 1 .012.002-.208-1-.012Zm.568.709.399-.057-.141-.99-.399.057.141.99Zm.409-.058a11.86 11.86 0 0 0 3.805-1.311l-.482-.876a10.853 10.853 0 0 1-3.484 1.2l.16.987Zm3.81-1.314.31-.176-.495-.869-.308.175.494.87Zm.317-.18 42.159-24.875-.508-.861-42.16 24.875.509.861Zm42.159-24.875a11.909 11.909 0 0 0 4.319-4.403l-.871-.492a10.9 10.9 0 0 1-3.956 4.034l.508.861Zm4.319-4.403a11.929 11.929 0 0 0 1.541-5.986l-1 .01a10.938 10.938 0 0 1-1.412 5.485l.871.491Zm1.541-5.98V39.044h-1V87.98h1Zm0-48.94c-.016-1.594-.417-3.179-1.153-4.661l-.896.445c.675 1.357 1.035 2.794 1.049 4.225l1-.01Zm-1.157-4.668-.175-.34-.889.46.176.339.888-.46ZM63.643 3.166c-2.093.02-4.142.591-5.943 1.656l.508.86a10.905 10.905 0 0 1 5.444-1.516l-.01-1ZM57.7 4.822l-42.16 24.87.508.86 42.16-24.87-.508-.86Zm-42.16 24.87a10.362 10.362 0 0 0-3.326 3.122l.828.56a9.365 9.365 0 0 1 3.006-2.821l-.507-.862Zm-3.33 3.129-.184.28.837.548.183-.28-.836-.548Zm-.01.99 18.923 10.595.489-.872-18.923-10.596-.489.873Zm19.57 10.455.197-.268-.806-.591-.197.267.807.592Zm.19-.26c.54-.705 1.2-1.31 1.95-1.788l-.538-.843a8.6 8.6 0 0 0-2.205 2.023l.794.608Zm1.942-1.784.249-.152-.523-.853-.249.153.523.852Zm.241-.148 25.541-15.068-.508-.861-25.54 15.068.507.861Zm25.541-15.068a8.55 8.55 0 0 1 4.268-1.189l-.01-1a9.55 9.55 0 0 0-4.766 1.328l.508.861Zm4.268-1.189a8.55 8.55 0 0 1 4.289 1.106l.492-.87a9.55 9.55 0 0 0-4.791-1.236l.01 1Zm4.29 1.106 25.82 14.585.492-.87-25.821-14.585-.492.87Zm25.82 14.585a9.563 9.563 0 0 1 2.281 1.797l.731-.682a10.56 10.56 0 0 0-2.52-1.985l-.492.87Zm2.276 1.792.174.192.741-.672-.174-.191-.74.67Zm.801.285 18.577-11.095-.513-.859-18.577 11.096.513.858Zm18.696-11.854-.203-.233-.752.66.204.232.751-.66Zm-.209-.238a13.625 13.625 0 0 0-3.075-2.53l-.516.857c1.06.637 2.02 1.427 2.85 2.344l.741-.671Zm-3.08-2.533-.303-.178-.505.863.302.178.506-.863Zm-.31-.182L69.615 4.707l-.492.87 42.622 24.072.491-.87ZM69.615 4.708a11.906 11.906 0 0 0-5.972-1.542l.01 1a10.905 10.905 0 0 1 5.47 1.412l.492-.871Zm14.05 46.269L66.332 40.97l-.5.866 17.331 10.006.5-.866ZM66.332 40.97a4.18 4.18 0 0 0-4.18 0l.5.866a3.18 3.18 0 0 1 3.18 0l.5-.866Zm-4.18 0-17.33 10.006.5.866 17.33-10.006-.5-.866Zm-17.33 10.006a4.18 4.18 0 0 0-2.09 3.62h1a3.18 3.18 0 0 1 1.59-2.754l-.5-.866Zm-2.09 3.62v20.011h1V54.596h-1Zm0 20.011a4.18 4.18 0 0 0 2.09 3.62l.5-.866a3.18 3.18 0 0 1-1.59-2.754h-1Zm2.09 3.62 17.33 10.006.5-.866-17.33-10.006-.5.866Zm17.33 10.006a4.18 4.18 0 0 0 4.18 0l-.5-.866a3.18 3.18 0 0 1-3.18 0l-.5.866Zm4.18 0 17.331-10.006-.5-.866-17.33 10.006.5.866Zm17.331-10.006a4.18 4.18 0 0 0 2.09-3.62h-1a3.18 3.18 0 0 1-1.59 2.754l.5.866Zm2.09-3.62V54.596h-1v20.012h1Zm0-20.012a4.18 4.18 0 0 0-2.09-3.62l-.5.867a3.18 3.18 0 0 1 1.59 2.753h1Z"/>
</svg>;
  }
});