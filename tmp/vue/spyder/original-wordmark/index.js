import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'SpyderOriginalWordmarkIcon',
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
	<path d="M31.493 44.885a5.767 5.767 0 0 0-3.647-1.297H5.796a5.746 5.746 0 0 0-2.7.67 5.847 5.847 0 0 0-2.343 2.27 5.143 5.143 0 0 0-.286.571c-.049.133-.108.262-.153.39a5.342 5.342 0 0 0-.21.813A5.579 5.579 0 0 0 0 49.386v22.05a5.708 5.708 0 0 0 .572 2.511 5.795 5.795 0 0 0 5.23 3.278h11.761a.31.31 0 0 0 .314-.31V75.52a.314.314 0 0 0-.314-.314h-1.527l-4.557-9.247 10.408-13.783a1.165 1.165 0 0 0 .191-.405l9.53 1.458v2.144a.317.317 0 0 0 .314.314h1.415a.314.314 0 0 0 .31-.314v-5.99a5.764 5.764 0 0 0-2.154-4.498zm-12.002.74.492 3.925-7.702-1.178-.35-2.748zm-13.696 0h4.237l.303 2.44-5.617-.844-1.779-.275a3.738 3.738 0 0 1 2.856-1.322zm4.289 4.316-3.93 5.23-3.096-6.311zm-8.048 1.112 2.518 5.101-2.518.31zm0 7.322 3.393-.429 3.515 7.117-6.908.868zm11.908 16.831H6.109a4.083 4.083 0 0 1-4.073-4.1v-3.31l7.78-.976ZM10.55 64.09l-3.487-7.036 5.108-6.765 7.874 1.207zM31.6 51.342l-9.693-1.506-.527-4.222h6.15a4.083 4.083 0 0 1 4.07 4.083z" fill="#8c0000"/>
	<path className="b" d="M33.184 58.382a.516.516 0 0 1 .488.558v1.5a.464.464 0 0 1-.523.523H26.66c-1.607 0-2.549.557-2.549 1.813v.456c0 .977.454 1.814 2.166 2.441l4.637 1.848c3.211 1.22 3.487 3.002 3.487 4.92v.384c0 3.908-2.34 4.675-7.047 4.675-3.037 0-5.792-.244-6.384-.313-.419-.035-.523-.244-.523-.523v-1.538a.464.464 0 0 1 .523-.523h6.454c2.79 0 3.66-.314 3.66-1.813v-.419c0-1.01-.418-1.673-2.021-2.336l-4.955-1.886c-2.685-1.046-3.348-3.069-3.348-4.986v-.736c0-3.835 3.348-4.358 7.082-4.358a44.192 44.192 0 0 1 5.342.313zm20.963 9.383c0 7.78-1.395 9.735-7.989 9.735a38.271 38.271 0 0 1-4.606-.209v6.42a.464.464 0 0 1-.523.522h-2.301a.464.464 0 0 1-.523-.523V59.25c0-.383.21-.522.558-.592a38.92 38.92 0 0 1 7.22-.593c6.769.004 8.164 1.991 8.164 9.7zm-12.595-6.771v13.292a37.741 37.741 0 0 0 4.397.279c4.327 0 4.85-1.325 4.85-6.768s-.488-6.803-4.78-6.803zm32.061-2.751a.464.464 0 0 1 .523.523v16.813c-.035 6.841-1.36 8.829-8.058 8.829a35.063 35.063 0 0 1-5.268-.314.516.516 0 0 1-.488-.558v-1.503a.464.464 0 0 1 .523-.523h5.164c3.905 0 4.78-.941 4.78-4.08v-.209a27.504 27.504 0 0 1-4.606.28c-6.594 0-7.988-1.992-7.988-9.527v-9.208a.464.464 0 0 1 .523-.523h2.266a.464.464 0 0 1 .523.523v9c0 5.442.558 6.802 4.882 6.802a37.623 37.623 0 0 0 4.397-.244V58.766a.464.464 0 0 1 .523-.523zm20.199-7.291a.464.464 0 0 1 .523.523v24.86c0 .384-.209.524-.557.559a39.3 39.3 0 0 1-7.257.592c-6.77 0-8.13-1.92-8.13-9.665 0-7.744 1.36-9.763 7.953-9.763a37.277 37.277 0 0 1 4.64.244v-6.827a.464.464 0 0 1 .524-.523zm-7.26 10.042c-4.323 0-4.81 1.325-4.81 6.803 0 5.373.452 6.768 4.78 6.768a38.822 38.822 0 0 0 4.463-.28v-13.29Zm27.735 6.276v1.011c0 .698-.174.98-1.255.98h-11.095c.104 4.254.91 5.3 4.64 5.3h5.722a.464.464 0 0 1 .523.523v1.538a.516.516 0 0 1-.488.558 43.174 43.174 0 0 1-5.826.313c-6.559 0-7.954-1.92-7.954-9.7 0-7.779 1.395-9.731 7.954-9.731 6.245.007 7.71 1.855 7.779 9.208zm-12.385-.732h9.038c-.07-4.432-.802-5.548-4.432-5.548-3.766.004-4.537 1.123-4.606 5.555zm25.572-8.086c.349.105.523.244.523.593v1.464a.45.45 0 0 1-.558.488h-3.04c-2.406 0-3.034.384-3.034 1.957v13.85a.464.464 0 0 1-.523.522h-2.266a.464.464 0 0 1-.527-.523V62.16c0-3.94 3.487-4.08 5.513-4.08.837-.01 3.215.125 3.912.373z" fill="#303030"/>
</svg>;
  }
});