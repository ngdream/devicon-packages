import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'PodmanOriginalWordmarkIcon',
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
	<path d="m20.701 49.889-12.578.037a.311.311 0 0 0-.242.117l-7.815 9.87a.311.311 0 0 0-.058.26l2.834 12.268a.311.311 0 0 0 .17.211l11.347 5.43a.311.311 0 0 0 .27-.002l11.316-5.496a.311.311 0 0 0 .168-.213l2.764-12.283a.311.311 0 0 0-.06-.262l-7.872-9.822a.311.311 0 0 0-.244-.115zm-.148.623 7.683 9.586L25.54 72.09l-11.045 5.365-11.078-5.299L.648 60.18l7.627-9.633 12.278-.035zm53.785 3.054v6.676c-.862-1.37-2.277-2.144-4.178-2.144-3.316 0-5.592 2.41-5.592 5.947 0 3.58 2.255 6.035 5.637 6.035 1.88 0 3.293-.752 4.133-2.123v2.012h2.543V53.566h-2.543zm-30.74 4.555c-1.835 0-3.25.75-4.112 2.121v-2.031h-2.543V74.26h2.543v-6.323c.862 1.37 2.276 2.12 4.155 2.12 3.36 0 5.57-2.407 5.57-5.922 0-3.581-2.275-6.014-5.613-6.014zm13.3 0c-3.647 0-6.146 2.408-6.146 5.967 0 3.537 2.5 5.969 6.146 5.969 3.626 0 6.123-2.431 6.123-5.97 0-3.557-2.497-5.966-6.123-5.966zm-13.832 2.121c2.1 0 3.582 1.615 3.582 3.803 0 2.255-1.482 3.846-3.582 3.846-2.1 0-3.58-1.57-3.58-3.846 0-2.21 1.48-3.803 3.58-3.803zm27.668.022c2.123 0 3.604 1.592 3.604 3.869 0 2.232-1.48 3.824-3.604 3.824-2.144 0-3.603-1.592-3.625-3.824.023-2.255 1.503-3.87 3.625-3.87zm-13.836.045c2.1 0 3.58 1.548 3.58 3.802 0 2.277-1.48 3.825-3.58 3.825-2.122 0-3.603-1.548-3.603-3.825 0-2.254 1.481-3.802 3.603-3.802z" fill="#892ca0"/>
	<path d="M87.527 58.121c-1.945 0-3.447.707-4.265 2.365V58.21H80.74v11.76h2.522v-5.815c0-2.055 1.238-3.601 3.271-3.668 1.724 0 2.762 1.083 2.762 2.873v6.61h2.543v-5.815c0-2.055 1.215-3.601 3.226-3.668 1.725 0 2.786 1.083 2.786 2.873v6.61h2.543v-7.317c0-2.807-1.614-4.53-4.311-4.53-2.144 0-3.713.86-4.465 2.827-.552-1.79-1.99-2.828-4.09-2.828zm21.043 0c-2.232 0-3.426.508-5.062 1.48l1.039 1.768c1.171-.796 2.343-1.193 3.47-1.193 1.857 0 2.81.884 2.81 2.365v.354h-3.561c-2.83.022-4.444 1.392-4.444 3.537 0 2.078 1.593 3.648 4.135 3.648 1.702 0 3.05-.51 3.89-1.549v1.438h2.499l-.024-7.715c-.022-2.586-1.723-4.133-4.752-4.133zm15.053 0c-1.99 0-3.492.706-4.332 2.342v-2.254h-2.543v11.76h2.543v-6.256c.177-1.835 1.393-3.183 3.338-3.205 1.768 0 2.828 1.083 2.828 2.851v6.61H128v-7.317c0-2.807-1.636-4.53-4.377-4.53zm-15.98 6.631h3.183v1.084c-.132 1.282-1.525 2.232-3.338 2.232-1.414 0-2.277-.687-2.277-1.748 0-1.127.774-1.568 2.432-1.568z" fill="#60605b"/>
	<path d="m-322.522 20.426-.703.188h.753l-.05-.188zm22.006 0-.05.188h.753l-.703-.188z" fill="#a7a9ac"/>
	<path d="M21.029 63.053c.033.21.068.418.109.623h2.02v-.623zm.335 1.556c.041.143.086.286.135.427.117.059.231.124.342.197h2.562v-.624zm-4.16.29zm-9.308 7.8v.624h7.483V72.7zm4.358 1.557v.621h6.16v-.621z" fill="#3c6eb4"/>
	<path d="M13.79 53.227c-1.107 0-2.193.128-2.84.385-1.78.652-3.147 2.432-3.553 4.588-.533 2.524-.502 4.5-1.031 6.359a3.067 3.067 0 0 1 .796-.438c.414-.164 1.108-.246 1.816-.246.709 0 1.433.082 1.903.246 1.031.377 1.845 1.345 2.182 2.546h2.193c.45-.83 1.135-1.472 1.949-1.768.884-.351 2.97-.35 3.975 0 .109.04.215.088.32.14-.692-2.001-.604-4.097-1.184-6.839-.405-2.156-1.773-3.936-3.553-4.588-.734-.256-1.864-.385-2.972-.385z" fill="#ccc"/>
	<path d="M10.217 60.793a.755.795 0 0 0-.754.795.755.795 0 0 0 .754.795.755.795 0 0 0 .754-.795.755.795 0 0 0-.754-.795zm7.625 0a.755.795 0 0 0-.754.795.755.795 0 0 0 .754.795.755.795 0 0 0 .756-.795.755.795 0 0 0-.756-.795z" fill="#e7e8e9"/>
	<path d="m11.487 61-2.804.752.08.3 2.805-.751zm5.308 0-.081.3 2.804.753.081-.301zm-5.027.453-2.82 1.63.155.268 2.82-1.628zm4.748 0-.156.27 2.82 1.628.156-.269zm-4.542.54-1.942 1.946c.132.016.258.037.378.06l1.784-1.786zm4.335 0-.22.22 2.44 2.443a9.49 9.49 0 0 1 .421-.018zm-4.24.709-.894 1.548c.093.046.184.096.272.151l.891-1.544zm4.146 0-.27.155 1.193 2.069c.022-.009.044-.02.067-.027.07-.028.15-.053.234-.076z" fill="#a7a9ac"/>
	<path d="M16.532 61.03a2.423 2.306 0 0 1-2.423 2.306 2.423 2.306 0 0 1-2.423-2.306 2.423 2.306 0 0 1 2.423-2.305 2.423 2.306 0 0 1 2.423 2.305z" fill="#fff"/>
	<path d="M15.143 60.615c-.081-.21-.081-.632-.325-.632-.243 0-.47-.158-.709-.158-.24 0-.465.158-.709.158-.243 0-.243.421-.325.632-.08.21 1.034.895 1.034.895s1.116-.685 1.034-.895z" fill="#808080"/>
	<path d="M12.953 66.322c.074.2.133.409.178.623h1.986c.1-.22.216-.428.346-.623zm9.969 0a4.44 4.44 0 0 1 .345.623h2.499v-.622z" fill="#3c6eb4"/>
	<path d="M8.979 63.875c-.709 0-1.403.082-1.817.246-1.139.416-2.012 1.552-2.271 2.928a19.64 19.64 0 0 0-.28 1.762h8.82a19.609 19.609 0 0 0-.277-1.762c-.259-1.376-1.134-2.512-2.273-2.928-.47-.163-1.194-.246-1.903-.246Z" fill="#ccc"/>
	<path d="M6.693 68.703a.483.507 0 0 0-.283.108h.578a.483.507 0 0 0-.295-.108Zm4.88 0a.483.507 0 0 0-.284.108h.578a.483.507 0 0 0-.295-.108z" fill="#e7e8e9"/>
	<path d="m7.492 68.781-.11.03H7.5zm3.424 0-.008.03h.117z" fill="#a7a9ac"/>
	<path d="M9.184 67.385a1.55 1.471 0 0 0-1.545 1.426h3.087a1.55 1.471 0 0 0-1.542-1.426Z" fill="#fff"/>
	<path d="M9.184 68.086c-.154 0-.297.102-.453.102-.156 0-.157.268-.21.402-.017.047.061.132.166.22h.992c.106-.088.183-.173.165-.22-.052-.134-.051-.402-.207-.402s-.3-.102-.453-.102z" fill="#808080"/>
	<path d="M24.065 71.162c-.136-.93-.203-1.943-.455-3.134-.277-1.47-1.213-2.685-2.43-3.13-1.005-.35-3.091-.35-3.975 0-1.218.445-2.153 1.66-2.43 3.13-.253 1.191-.32 2.203-.456 3.134" fill="#ccc"/>
	<path d="M16.703 69.797a.516.542 0 0 0-.516.543.516.542 0 0 0 .516.543.516.542 0 0 0 .516-.543.516.542 0 0 0-.516-.543zm5.215 0a.516.542 0 0 0-.515.543.516.542 0 0 0 .515.543.516.542 0 0 0 .516-.543.516.542 0 0 0-.516-.543z" fill="#e7e8e9"/>
	<path d="m17.56 69.891-1.919.514.081.3 1.918-.513zm3.654 0-.08.3 1.918.514.08-.3zm-3.475.314-1.928 1.112.155.269 1.928-1.111zm3.296 0-.156.27 1.928 1.11.156-.268z" fill="#a7a9ac"/>
	<path d="M21.022 69.96a1.657 1.573 0 0 1-1.657 1.573 1.657 1.573 0 0 1-1.657-1.573 1.657 1.573 0 0 1 1.657-1.573 1.657 1.573 0 0 1 1.657 1.573z" fill="#fff"/>
	<path d="M20.072 69.676c-.055-.143-.055-.43-.222-.43s-.32-.108-.485-.108c-.164 0-.318.107-.485.107-.166 0-.166.288-.222.431-.056.144.707.61.707.61s.763-.466.707-.61z" fill="#808080"/>
	<path d="M14.11 58.492c-1.459 0-2.657 1.133-2.657 2.54 0 1.405 1.198 2.539 2.657 2.539 1.458 0 2.656-1.134 2.656-2.54 0-1.406-1.199-2.539-2.656-2.539zm0 .467c1.218 0 2.19.932 2.19 2.072 0 1.141-.972 2.072-2.19 2.072s-2.19-.93-2.19-2.072c0-1.14.972-2.072 2.19-2.072zm-4.926 8.192c-.96 0-1.756.735-1.782 1.66h.467c.025-.66.595-1.194 1.315-1.194s1.289.535 1.314 1.194h.467c-.026-.924-.822-1.66-1.781-1.66zm10.181 1.003c-1.034 0-1.89.804-1.89 1.805 0 1.002.856 1.807 1.89 1.807 1.035 0 1.891-.805 1.891-1.807 0-1.001-.856-1.805-1.89-1.805zm0 .467c.796 0 1.424.602 1.424 1.338 0 .736-.628 1.34-1.424 1.34-.795 0-1.423-.604-1.423-1.34 0-.736.628-1.338 1.423-1.338z" fill="#60605b"/>
	<path d="M3.602 68.81v.624h10.936c.027-.203.057-.41.091-.623zm5.54 2.335v.62h16.173v-.62h-1.252l.003.017h-9.747l.002-.017z" fill="#3c6eb4"/>
	<path d="M13.791 52.994c-1.124 0-2.218.123-2.924.402-1.869.687-3.278 2.533-3.697 4.756-.373 1.764-.472 3.255-.67 4.606a13.8 13.8 0 0 1-.338 1.664c-.758.6-1.303 1.527-1.502 2.584a19.78 19.78 0 0 0-.283 1.805h.469c.065-.535.14-1.097.271-1.713l.002-.002v-.004c.246-1.306 1.076-2.368 2.123-2.75l.004-.003.002-.001c.355-.141 1.04-.23 1.73-.23s1.402.087 1.825.234c1.045.382 1.875 1.445 2.12 2.75v.004l.003.002c.13.616.206 1.178.271 1.713h.47a20.106 20.106 0 0 0-.284-1.807c-.273-1.446-1.192-2.652-2.422-3.102h-.002l-.002-.002c-.517-.18-1.252-.257-1.979-.258-.725 0-1.428.075-1.9.262-.117.043-.23.095-.34.15a15.851 15.851 0 0 0 .225-1.228c.202-1.377.296-2.85.662-4.578l.002-.002v-.004c.392-2.085 1.716-3.792 3.404-4.41l.003-.002h.003c.588-.234 1.664-.37 2.754-.369 1.089 0 2.204.132 2.891.37 1.688.618 3.013 2.326 3.404 4.41l.002.005v.002c.365 1.727.463 3.201.665 4.578.09.62.208 1.22.379 1.813-.54-.163-1.265-.237-1.985-.237-.774 0-1.523.082-2.023.28-1.308.478-2.285 1.76-2.577 3.299-.256 1.209-.324 2.229-.459 3.146l.463.069c.139-.944.202-1.947.451-3.12l.002-.002v-.002c.264-1.4 1.157-2.544 2.282-2.955h.001l.005-.002c.383-.152 1.116-.246 1.855-.246.74 0 1.5.092 1.955.25h.003c1.123.412 2.013 1.555 2.277 2.953v.004c.248 1.173.314 2.175.453 3.12l.463-.069c-.135-.917-.203-1.938-.46-3.147-.258-1.367-1.058-2.53-2.15-3.109-.227-.68-.366-1.375-.474-2.113-.198-1.35-.296-2.84-.668-4.602-.419-2.227-1.829-4.078-3.702-4.764h-.004c-.782-.273-1.923-.398-3.049-.398Zm-3.513 2.812a1.56 1.56 0 0 0-1.243.606l-.143.184.372.285.142-.186a1.11 1.11 0 0 1 .81-.422c.294-.012.599.106.807.313l.166.166.33-.332-.166-.164a1.558 1.558 0 0 0-1.076-.45zm7.53 0a1.558 1.558 0 0 0-1.076.45l-.166.164.328.332.167-.166a1.105 1.105 0 0 1 .806-.313c.31.014.623.176.813.422l.143.186.369-.285-.143-.184a1.556 1.556 0 0 0-1.24-.606zm-7.542 2.057A1.167 1.197 0 0 0 9.1 59.06a1.167 1.197 0 0 0 1.166 1.198 1.167 1.197 0 0 0 1.168-1.198 1.167 1.197 0 0 0-1.168-1.197zm7.552 0a1.167 1.197 0 0 0-1.166 1.197 1.167 1.197 0 0 0 1.166 1.198 1.167 1.197 0 0 0 1.167-1.198 1.167 1.197 0 0 0-1.166-1.197zm-3.708 1.729c-.172 0-.312.052-.428.092a.979.979 0 0 1-.282.066.442.442 0 0 0-.322.153.68.68 0 0 0-.125.247c-.05.161-.074.325-.096.382-.05.13-.002.232.038.3.04.068.088.121.142.176.11.11.247.22.387.322.143.105.286.2.392.27l-.005.093c-.053.043-.18.157-.393.229a.648.648 0 0 1-.361.03c-.094-.025-.186-.107-.282-.231l.02-.15a5.25 5.25 0 0 1 .06-.364l-.453-.114c-.027.109-.05.267-.07.413-.02.146-.035.272-.035.272l-.01.083.045.07c.165.259.384.416.61.473.225.058.444.023.627-.038.237-.081.43-.21.537-.292.106.082.298.211.535.292.182.061.399.096.625.038.225-.057.445-.214.61-.473l.044-.07-.01-.083s-.014-.126-.035-.272a4.59 4.59 0 0 0-.07-.413l-.453.114c.012.05.04.222.06.363l.02.149c-.096.125-.188.208-.281.232a.65.65 0 0 1-.362-.03c-.212-.071-.34-.185-.392-.228l-.004-.087c.108-.07.254-.167.402-.276a3.42 3.42 0 0 0 .387-.322.875.875 0 0 0 .142-.176.33.33 0 0 0 .037-.3c-.022-.057-.048-.22-.097-.382a.675.675 0 0 0-.123-.248.442.442 0 0 0-.322-.152.984.984 0 0 1-.282-.066c-.116-.04-.256-.092-.427-.092zm0 .467c.068 0 .16.026.277.066.108.036.244.077.398.084.005.008.02.034.034.08.025.081.05.206.085.326a.468.468 0 0 1-.054.065 3.088 3.088 0 0 1-.332.273c-.2.146-.323.222-.408.275-.085-.053-.212-.128-.411-.275a3.03 3.03 0 0 1-.33-.273c-.03-.03-.043-.05-.054-.065.035-.12.06-.244.085-.326a.35.35 0 0 1 .034-.08 1.44 1.44 0 0 0 .396-.084.99.99 0 0 1 .28-.066zm-7.434 5.378a1.078 1.078 0 0 0-.805.419l-.142.185.369.286.142-.186a.633.633 0 0 1 .457-.237.627.627 0 0 1 .453.176l.167.164.327-.332-.166-.164a1.08 1.08 0 0 0-.802-.31zm4.928 0a1.076 1.076 0 0 0-.801.311l-.166.164.328.332.166-.164a.627.627 0 0 1 .453-.176.632.632 0 0 1 .457.237l.14.186.372-.286-.143-.185a1.08 1.08 0 0 0-.806-.419zm10.29.883a1.139 1.139 0 0 0-.786.329l-.166.164.328.331.165-.163a.684.684 0 0 1 .497-.192c.19.008.384.108.5.258l.142.186.37-.285-.143-.186a1.133 1.133 0 0 0-.848-.44l-.058-.002zm-5.15 0-.058.002a1.137 1.137 0 0 0-.85.44l-.142.186.37.285.143-.186a.685.685 0 0 1 .498-.258.688.688 0 0 1 .498.192l.166.164.329-.332-.167-.164a1.138 1.138 0 0 0-.787-.329zm-10.02.514a.746.764 0 0 0-.746.764.746.764 0 0 0 .746.766.746.764 0 0 0 .746-.766.746.764 0 0 0-.746-.764Zm4.832 0a.746.764 0 0 0-.748.764.746.764 0 0 0 .748.766.746.764 0 0 0 .746-.766.746.764 0 0 0-.746-.764zm5.18.965a.798.817 0 0 0-.797.817.798.817 0 0 0 .797.816.798.817 0 0 0 .799-.816.798.817 0 0 0-.799-.817zm5.166 0a.798.817 0 0 0-.799.817.798.817 0 0 0 .8.816.798.817 0 0 0 .796-.816.798.817 0 0 0-.797-.817zm-12.719.055c-.127 0-.226.038-.3.063a.59.59 0 0 1-.153.037.382.382 0 0 0-.271.129.504.504 0 0 0-.096.187c-.035.114-.051.218-.058.236a.29.29 0 0 0 .029.266c.008.015.018.026.027.039h.713a2.51 2.51 0 0 1-.104-.072c-.08-.06-.16-.122-.203-.166v-.002c.015-.06.031-.13.041-.163l.003-.003c.082-.012.165-.029.22-.047a.6.6 0 0 1 .152-.037c.026 0 .076.011.15.037.056.018.14.035.221.047l.002.003c.01.033.03.103.043.163l-.002.002a1.944 1.944 0 0 1-.203.165 3.496 3.496 0 0 1-.101.073h.713c.009-.013.019-.024.027-.039a.29.29 0 0 0 .03-.266c-.008-.018-.026-.123-.062-.236a.496.496 0 0 0-.095-.187.377.377 0 0 0-.27-.13.582.582 0 0 1-.152-.036c-.074-.025-.173-.063-.3-.063zm10.182 1.05c-.133 0-.237.04-.316.067a.626.626 0 0 1-.168.041.388.388 0 0 0-.278.13.528.528 0 0 0-.1.196c-.036.12-.055.231-.063.254a.293.293 0 0 0 .03.27.71.71 0 0 0 .11.135c.08.08.176.155.273.226.08.059.159.112.225.157-.044.035-.102.082-.21.118a.37.37 0 0 1-.204.018c-.042-.01-.088-.059-.135-.111l.01-.067c.013-.095.033-.214.039-.24l-.453-.113c-.02.083-.035.188-.049.289-.014.1-.023.187-.023.187l-.01.082.045.071c.12.19.288.311.46.355a.821.821 0 0 0 .47-.029 1.377 1.377 0 0 0 .343-.178c.081.057.2.13.344.178a.819.819 0 0 0 .469.03.794.794 0 0 0 .46-.356l.046-.07-.01-.083-.026-.187a2.677 2.677 0 0 0-.048-.289l-.453.113a3.8 3.8 0 0 1 .04.24l.008.067c-.046.052-.091.1-.133.111a.373.373 0 0 1-.205-.018c-.104-.035-.16-.082-.205-.117a6.15 6.15 0 0 0 .229-.158c.097-.071.193-.147.273-.226a.652.652 0 0 0 .11-.135.294.294 0 0 0 .029-.27c-.01-.023-.028-.135-.065-.254a.523.523 0 0 0-.097-.195.388.388 0 0 0-.278-.131.62.62 0 0 1-.167-.04c-.08-.028-.184-.067-.317-.067zm0 .467c.031 0 .086.014.166.042a1.404 1.404 0 0 0 .244.05c.003.006 0 .002.004.014.012.04.032.115.049.184l-.008.007a2.088 2.088 0 0 1-.219.18c-.114.083-.168.115-.236.158-.067-.043-.122-.074-.236-.158a2.088 2.088 0 0 1-.22-.18c-.004-.005-.002-.005-.007-.01.017-.067.035-.142.047-.181.004-.012.003-.008.006-.014a1.364 1.364 0 0 0 .242-.05.647.647 0 0 1 .168-.042z"/>
	<path d="M10.265 57.63a1.373 1.373 0 0 0-.989.422 1.435 1.435 0 0 0-.346.586 1.442 1.442 0 0 0-.06.496 1.444 1.444 0 0 0 .613 1.11 1.402 1.402 0 0 0 .301.159 1.367 1.367 0 0 0 1.027-.025 1.375 1.375 0 0 0 .346-.215 1.42 1.42 0 0 0 .307-.363 1.443 1.443 0 0 0 .186-.956 1.451 1.451 0 0 0-.187-.523 1.443 1.443 0 0 0-.414-.445 1.402 1.402 0 0 0-.302-.158 1.365 1.365 0 0 0-.481-.087zm7.553 0a1.378 1.378 0 0 0-.48.089 1.37 1.37 0 0 0-.357.198 1.416 1.416 0 0 0-.322.347 1.443 1.443 0 0 0-.21 1.083 1.444 1.444 0 0 0 .38.722 1.428 1.428 0 0 0 .322.247 1.386 1.386 0 0 0 .385.145 1.356 1.356 0 0 0 .426.022 1.368 1.368 0 0 0 .747-.321 1.426 1.426 0 0 0 .34-.423 1.44 1.44 0 0 0 .16-.824 1.451 1.451 0 0 0-.194-.593 1.442 1.442 0 0 0-.471-.483 1.395 1.395 0 0 0-.376-.163 1.359 1.359 0 0 0-.35-.045zm-7.553.466a.974.974 0 0 1 .143.01.904.904 0 0 1 .303.105.927.927 0 0 1 .216.165.954.954 0 0 1 .2.306.976.976 0 0 1 .073.328 1.026 1.026 0 0 1-.041.34.976.976 0 0 1-.172.327.954.954 0 0 1-.276.233.918.918 0 0 1-.587.104.915.915 0 0 1-.579-.338.96.96 0 0 1-.171-.327.987.987 0 0 1-.042-.289 1.025 1.025 0 0 1 .042-.288.977.977 0 0 1 .172-.327.952.952 0 0 1 .275-.234.917.917 0 0 1 .396-.114.842.842 0 0 1 .048-.001zm7.553 0a.923.923 0 0 1 .278.043.91.91 0 0 1 .316.176.946.946 0 0 1 .227.283.97.97 0 0 1 .108.363 1.01 1.01 0 0 1-.108.562.966.966 0 0 1-.227.284.936.936 0 0 1-.23.143.91.91 0 0 1-.727 0 .918.918 0 0 1-.296-.205.954.954 0 0 1-.2-.307.976.976 0 0 1-.073-.327 1.025 1.025 0 0 1 .018-.246.987.987 0 0 1 .14-.346.96.96 0 0 1 .253-.26.926.926 0 0 1 .288-.133.91.91 0 0 1 .233-.03zM6.7 66.6a.314.314 0 0 0-.025 0 .992.992 0 0 0-.928.997c0 .545.437.998.979.998.541 0 .98-.453.98-.998a.991.991 0 0 0-.98-.996zm4.832 0a.32.32 0 0 0-.025 0 .994.994 0 0 0-.93.997c0 .545.44.998.98.998a.992.992 0 0 0 .98-.998.99.99 0 0 0-.98-.996zm-4.806.468c.283 0 .513.23.513.529a.52.52 0 0 1-.513.531.518.518 0 0 1-.512-.531c0-.299.229-.53.512-.53zm4.832 0c.283 0 .511.23.511.529a.518.518 0 0 1-.511.531.52.52 0 0 1-.514-.531c0-.299.23-.53.514-.53zm5.18.496c-.57 0-1.032.476-1.032 1.05 0 .575.461 1.051 1.031 1.051.57 0 1.032-.476 1.032-1.05 0-.575-.462-1.051-1.032-1.051zm5.165 0c-.57 0-1.03.476-1.03 1.05 0 .575.46 1.051 1.03 1.051.57 0 1.032-.476 1.032-1.05 0-.575-.462-1.051-1.032-1.051zm-5.18.466h.014a.57.57 0 0 1 .565.584.57.57 0 0 1-.565.584.571.571 0 0 1-.564-.584c0-.317.237-.568.535-.584a.172.172 0 0 1 .015 0zm5.166 0h.015a.57.57 0 0 1 .564.584.57.57 0 0 1-.564.584.571.571 0 0 1-.565-.584c0-.317.237-.568.535-.584a.17.17 0 0 1 .015 0z" fill="#892ca0"/>
	<path d="M9.877 58.127a.574.597 0 0 0-.574.596.574.597 0 0 0 .574.598.574.597 0 0 0 .574-.598.574.597 0 0 0-.574-.596zm7.55 0a.574.597 0 0 0-.575.596.574.597 0 0 0 .574.598.574.597 0 0 0 .574-.598.574.597 0 0 0-.574-.596zm-10.95 8.875a.367.38 0 0 0-.368.38.367.38 0 0 0 .368.382.367.38 0 0 0 .367-.381.367.38 0 0 0-.367-.38zm4.878.055a.367.38 0 0 0-.367.38.367.38 0 0 0 .367.381.367.38 0 0 0 .368-.38.367.38 0 0 0-.368-.381zm5.116.922a.392.407 0 0 0-.393.406.392.407 0 0 0 .393.408.392.407 0 0 0 .393-.408.392.407 0 0 0-.393-.406zm5.246.052a.392.407 0 0 0-.393.409.392.407 0 0 0 .393.406.392.407 0 0 0 .393-.406.392.407 0 0 0-.393-.409z" fill="#fff"/>
</svg>;
  }
});