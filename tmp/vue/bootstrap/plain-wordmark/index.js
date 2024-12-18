import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'BootstrapPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#712cf9'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M11.398 121.43v-17.738h5.047q2.3 0 3.649 1.126 1.348 1.125 1.348 2.931 0 1.51-.816 2.623-.817 1.113-2.252 1.583v.05q1.794.21 2.87 1.36 1.076 1.138 1.076 2.969 0 2.276-1.632 3.686-1.633 1.41-4.12 1.41zm2.078-15.858v5.727h2.128q1.707 0 2.684-.816.977-.83.977-2.326 0-2.585-3.402-2.585zm0 7.595v6.383h2.82q1.831 0 2.833-.866 1.014-.866 1.014-2.375 0-3.142-4.28-3.142zm17.466 8.563q-2.808 0-4.49-1.769-1.67-1.781-1.67-4.713 0-3.191 1.744-4.985 1.744-1.793 4.713-1.793 2.832 0 4.416 1.744 1.595 1.744 1.595 4.836 0 3.031-1.719 4.862-1.707 1.818-4.589 1.818zm.148-11.553q-1.954 0-3.092 1.336-1.138 1.323-1.138 3.661 0 2.252 1.15 3.55 1.15 1.3 3.08 1.3 1.967 0 3.019-1.275 1.063-1.274 1.063-3.624 0-2.375-1.063-3.662-1.052-1.286-3.019-1.286zm14.696 11.553q-2.808 0-4.49-1.769-1.67-1.781-1.67-4.713 0-3.191 1.744-4.985 1.744-1.793 4.713-1.793 2.832 0 4.416 1.744 1.596 1.744 1.596 4.836 0 3.031-1.72 4.862-1.707 1.818-4.589 1.818zm.148-11.553q-1.954 0-3.092 1.336-1.138 1.323-1.138 3.661 0 2.252 1.15 3.55 1.15 1.3 3.08 1.3 1.967 0 3.019-1.275 1.063-1.274 1.063-3.624 0-2.375-1.063-3.662-1.052-1.286-3.019-1.286zm15.277 11.133q-.717.396-1.893.396-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.191v1.732H58.02v7.137q0 1.274.433 1.819.432.544 1.434.544.767 0 1.324-.42zm1.942-.34v-2.177q1.657 1.224 3.649 1.224 2.672 0 2.672-1.78 0-.508-.235-.854-.223-.359-.619-.631-.383-.272-.915-.482-.52-.223-1.126-.458-.84-.334-1.484-.668-.63-.346-1.064-.767-.42-.433-.643-.977-.21-.544-.21-1.274 0-.89.408-1.571.408-.693 1.088-1.15.68-.47 1.547-.706.878-.235 1.806-.235 1.645 0 2.944.57v2.053q-1.398-.916-3.217-.916-.569 0-1.026.136-.458.124-.792.36-.322.234-.507.568-.173.322-.173.718 0 .494.173.828.185.334.532.594.346.26.841.47.495.21 1.126.458.84.321 1.509.668.668.334 1.138.767.47.42.717.977.26.556.26 1.323 0 .94-.42 1.633-.409.693-1.102 1.15-.692.458-1.595.681-.903.223-1.893.223-1.954 0-3.39-.755zm17.391.34q-.717.396-1.893.396-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.191v1.732h-3.191v7.137q0 1.274.433 1.819.432.544 1.434.544.767 0 1.324-.42zm9.315-10.49q-.532-.408-1.534-.408-1.299 0-2.177 1.224-.866 1.225-.866 3.34v6.457h-2.028v-12.666h2.028v2.61h.05q.433-1.336 1.323-2.078.89-.755 1.992-.755.791 0 1.212.174zm11.271 10.61h-2.029v-1.98h-.05q-1.323 2.277-3.895 2.277-1.893 0-2.97-1.002-1.063-1.002-1.063-2.66 0-3.55 4.18-4.13l3.798-.533q0-3.228-2.61-3.228-2.288 0-4.131 1.558v-2.078q1.868-1.187 4.305-1.187 4.465 0 4.465 4.725zm-2.029-6.407-3.055.42q-1.41.198-2.128.705-.717.495-.717 1.769 0 .928.656 1.522.668.58 1.769.58 1.509 0 2.486-1.05.99-1.064.99-2.685zm7.929 4.577h-.05v7.657h-2.028v-18.493h2.029v2.226h.049q1.497-2.523 4.379-2.523 2.449 0 3.822 1.707 1.373 1.694 1.373 4.552 0 3.179-1.546 5.096-1.546 1.905-4.23 1.905-2.462 0-3.798-2.128zm-.05-5.109v1.77q0 1.57 1.015 2.671 1.027 1.089 2.597 1.089 1.844 0 2.883-1.41 1.05-1.41 1.05-3.922 0-2.115-.976-3.315-.977-1.2-2.647-1.2-1.77 0-2.845 1.237-1.077 1.225-1.077 3.08zM27.235 2.051c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 0 1-.491-.491V25.993a.491.491 0 0 1 .491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 32.262H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24V72.05h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z"/>
</svg>;
  }
});