import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SpssOriginalIcon',
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
	<path d="M125 80c-1.7 0-3.1 1.3-3.1 3s1.3 3 3.1 3c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-.1.5c1.4 0 2.4 1.1 2.4 2.5s-1 2.5-2.3 2.5c-1.4 0-2.4-1.1-2.4-2.5s.9-2.4 2.3-2.5zm-1 .8v3.4h.6v-1.5h.6l.9 1.5h.6l-.9-1.6c.6 0 .8-.4.8-.9 0-.6-.4-.9-1.2-.9h-1.4zm.5 1.5v-1.1h.7c.5 0 .7.2.7.6s-.3.6-.6.6l-.8-.1zm-93 10.4c-1.6-1.2-3.5-2.2-6.1-3-3.3-1.1-8.1-2.2-10-2.9-1.2-.5-1.7-1.2-1.7-2.2 0-1.4 1.7-2.2 3.7-2.3 3.3.1 4.3 2 4.5 3.3h9.6v7.1zm12 8.9h7.1c6.2-.1 11.2-3.2 13.7-7.7.2-.4.4-.7.6-1.1.4.5.7.7 1.1 1.1 1.7 1.5 3.9 2.6 6.2 3.3 3.7 1.3 6.6 2.2 7.6 2.6 1.9.8 3.1 1.4 3.1 3.1 0 2-2.2 2.8-4.5 2.9-3.1-.1-6.2-1.6-6.1-4.7H60c.6 8.1 8.6 14.4 18 14.5 5.7-.1 11-1.7 14.4-5.8 3.4 3.5 7.4 5.7 13 5.8 8.9-.1 18.1-4.5 18.2-13.9 0-3-.8-5.6-2.7-7.8-1.7-2-4.1-3.3-7.4-4.2-3.3-1.1-8.1-2.2-10-2.9-1.2-.5-1.7-1.2-1.7-2.2 0-1.4 1.7-2.2 3.7-2.3 3.3.1 4.3 2 4.5 3.3h11.6c.1-8-6.6-13.3-16.1-13.3-7.1 0-11.9 2.7-14.3 6.6-2.6-4.1-7.8-6.6-14.3-6.6-6.8 0-11.5 2.6-14 6.3-2.8-3.6-7.4-5.9-13-5.9H31.4v6.1c-2.6-4.1-7.8-6.5-14.2-6.5-9.9 0-15.3 5.5-15.8 11.8 0 3.9 1.9 7.4 4.8 9.9 1.7 1.5 3.7 2.6 6 3.3 3.7 1.3 6.6 2.2 7.6 2.6 1.9.8 3.1 1.4 3.1 3.1 0 2-2.3 2.8-4.5 2.9-3.1-.1-6.2-1.6-6.1-4.7H0c.6 8.1 8.6 14.4 18 14.5 5.2-.1 10-1.5 13.2-4.5v3.8h12l.2-13.4zm0-18.9h6.5c2.4 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5h-6.5v-9zm49.1 11.3c-1.7-2-4.1-3.3-7.4-4.2-3.3-1.1-8.1-2.2-9.9-2.9-1.3-.5-1.9-1.2-1.9-2.2 0-1.4 1.7-2.2 3.7-2.3 3.4.1 4.3 2 4.5 3.3h8.2c.5 3.2 2.1 6.1 4.7 8.3 1.7 1.5 3.8 2.6 6.1 3.3 3.7 1.3 6.6 2.2 7.5 2.6 2 .8 3.1 1.4 3.1 3.1 0 2-2.3 2.8-4.5 2.9-3.1-.1-6.2-1.6-6.1-4.7H95c0-2.9-.9-5.3-2.5-7.2z" fill="#CC1E4C"/>
	<path d="M0 10.7v3.5h24.9v-3.5H0zm28.4 0v3.5H64s-3.6-3.5-8.4-3.5H28.4zm42.5 0v3.5h21.5l-1.3-3.5H70.9zm36.9 0l-1.3 3.5h21.3v-3.5h-20zM0 17.5V21h24.9v-3.5H0zm28.4 0V21H68s-.5-2.7-1.3-3.5H28.4zm42.5 0V21h23.8l-1.2-3.5H70.9zm34.3 0L104 21h23.7v-3.5h-22.5zm-98 6.8v3.5H18v-3.5H7.2zm28.4 0v3.5h10.8v-3.5H35.6zm21.3 0v3.5h10.8s.7-1.9.7-3.5H56.9zm21.2 0v3.5h19.1l-1.3-3.5H78.1zm24.8 0l-1.3 3.5h19.2v-3.5h-17.9zM7.2 31.2v3.5H18v-3.5H7.2zm28.4 0v3.5h27.6s2.3-1.8 3-3.5H35.6zm42.5 0v3.5h10.8v-1.9l.7 1.9h19.8l.7-1.9v1.9h10.8v-3.5h-20.3l-1.1 3-1.1-3H78.1zM7.2 38v3.5H18V38H7.2zm28.4 0v3.5h30.6c-.7-1.7-3-3.5-3-3.5H35.6zm42.5 0v3.5h10.8V38H78.1zm12.7 0l1.3 3.5h14.8l1.2-3.5H90.8zm19.3 0v3.5h10.8V38h-10.8zM7.2 44.8v3.5H18v-3.5H7.2zm28.4 0v3.5h10.8v-3.5H35.6zm21.3 0v3.5h11.5c0-1.7-.7-3.5-.7-3.5H56.9zm21.2 0v3.5h10.8v-3.5H78.1zm15.2 0l1.3 3.5h9.9l1.3-3.5H93.3zm16.8 0v3.5h10.8v-3.5h-10.8zM.2 51.6v3.5h24.9v-3.5H.2zm28.2 0v3.5h38.4c.8-.8 1.3-3.5 1.3-3.5H28.4zm42.7 0v3.5h17.8v-3.5H71.1zm24.6 0l1.3 3.5h5.1l1.2-3.5h-7.6zm14.4 0v3.5H128v-3.5h-17.9zM.2 58.4v3.5h24.9v-3.5H.2zm28.2 0v3.5h27.1c4.8 0 8.4-3.5 8.4-3.5H28.4zm42.7 0v3.5h17.8v-3.5H71.1zm27.1 0l1.3 3.5h.2l1.3-3.5h-2.8zm11.9 0v3.5H128v-3.5h-17.9z" fill="#1F70C1"/>
</svg>;
  }
});