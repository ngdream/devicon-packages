import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ReactrouterOriginalIcon',
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
	<path d="M99.04 50.315c-3.646-1.148-5.528-.761-9.351-1.18-5.91-.645-8.265-2.959-9.264-8.913-.559-3.324.101-8.191-1.326-11.204-2.729-5.746-9.115-8.323-15.53-6.852-5.417 1.244-9.924 6.666-10.174 12.232-.285 6.355 3.33 11.778 9.537 13.65 2.95.89 6.083 1.338 9.163 1.565 5.649.413 6.083 3.558 7.61 6.147.964 1.632 1.897 3.24 1.897 8.107s-.939 6.474-1.896 8.106c-1.528 2.583-3.413 4.275-9.062 4.693-3.08.228-6.22.676-9.162 1.567-6.208 1.877-9.823 7.293-9.538 13.649.25 5.566 4.757 10.988 10.174 12.232 6.415 1.476 12.801-1.106 15.53-6.852 1.433-3.013 2.218-6.427 2.777-9.75 1.005-5.955 3.36-8.269 9.264-8.915 3.823-.418 7.78 0 11.363-2.038 3.785-2.77 7.168-6.93 7.168-12.692 0-5.764-3.645-11.806-9.18-13.552z" fill="#F44250"/>
	<path d="M38.4 77.373c-7.45 0-13.528-6.098-13.528-13.575 0-7.476 6.077-13.574 13.527-13.574 7.45 0 13.528 6.098 13.528 13.574 0 7.47-6.083 13.575-13.528 13.575zM13.48 104.96C6.04 104.942-.018 98.82 0 91.337c.018-7.47 6.119-13.55 13.575-13.526 7.444.018 13.503 6.14 13.48 13.622-.018 7.464-6.12 13.545-13.575 13.527zm100.512 0c-7.462.041-13.586-6.015-13.629-13.473-.041-7.488 5.994-13.634 13.426-13.676 7.462-.042 13.587 6.014 13.629 13.472.041 7.482-5.994 13.635-13.426 13.677z" fill="#121212"/>
</svg>;
  }
});