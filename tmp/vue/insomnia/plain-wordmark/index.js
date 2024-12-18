import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'InsomniaPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#4000bf'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M17.033 46.967C7.626 46.967 0 54.593 0 64s7.626 17.033 17.033 17.033S34.064 73.407 34.064 64s-7.624-17.033-17.03-17.033zm0 1.732c8.45 0 15.301 6.85 15.301 15.301 0 8.45-6.85 15.3-15.3 15.3-8.451 0-15.302-6.85-15.302-15.3 0-8.45 6.851-15.3 15.301-15.3zm.192 3.176c-1.637 0-3.197.324-4.621.912a4.716 4.716 0 1 1-6.592 6.592A12.085 12.085 0 0 0 5.1 64c0 6.696 5.428 12.125 12.125 12.125 6.696 0 12.125-5.429 12.125-12.125s-5.43-12.125-12.125-12.125zm98.832 4.018c-.707 0-1.287.552-1.287 1.218 0 .667.58 1.211 1.287 1.211.701 0 1.285-.544 1.285-1.21 0-.667-.584-1.22-1.285-1.22zm-67.686.558v13.936h2.102V56.45H48.37zM58.537 59.8c-1.572 0-2.599.729-3.082 1.838h-.13v-1.701H53.37v10.45h2.035v-6.204c0-1.668 1.02-2.62 2.436-2.62 1.381 0 2.219.905 2.219 2.422v6.403h2.035v-6.649c0-2.585-1.422-3.94-3.559-3.94zm10.166 0c-2.361 0-4.035 1.245-4.035 3.096 0 1.483.898 2.47 2.857 2.906l1.77.388c1.007.225 1.476.673 1.476 1.327 0 .81-.863 1.443-2.197 1.443-1.218 0-2-.525-2.246-1.553l-1.967.301c.34 1.85 1.88 2.89 4.227 2.89 2.524 0 4.271-1.34 4.271-3.232 0-1.476-.938-2.388-2.857-2.83l-1.66-.38c-1.15-.273-1.648-.66-1.64-1.368-.007-.803.864-1.375 2.02-1.375 1.266 0 1.852.702 2.09 1.402l1.844-.328c-.422-1.626-1.694-2.687-3.953-2.687zm10.797 0c-2.946 0-4.873 2.157-4.873 5.41 0 3.232 1.927 5.389 4.873 5.389s4.871-2.157 4.871-5.389c0-3.253-1.925-5.41-4.871-5.41zm12.068 0c-1.381 0-2.408.688-2.843 1.838h-.13v-1.701h-1.952v10.45h2.033v-6.443c0-1.408.987-2.388 2.144-2.388 1.13 0 1.912.748 1.912 1.884v6.948h2.028v-6.662c0-1.26.769-2.17 2.095-2.17 1.076 0 1.96.598 1.96 2.013v6.819h2.035V63.38c0-2.388-1.333-3.58-3.225-3.58-1.504 0-2.633.722-3.137 1.838h-.11c-.455-1.143-1.415-1.838-2.81-1.838zm17.174 0c-1.572 0-2.6.729-3.084 1.838h-.129v-1.701h-1.953v10.45h2.035v-6.204c0-1.668 1.021-2.62 2.436-2.62 1.382 0 2.219.905 2.219 2.422v6.403h2.035v-6.649c0-2.585-1.422-3.94-3.559-3.94zm15.201 0c-1.891 0-3.632.762-4.312 2.668l1.912.435c.3-.741 1.06-1.457 2.428-1.457 1.313 0 1.988.687 1.988 1.871v.05c0 .74-.762.727-2.64.945-1.98.23-4.008.748-4.008 3.123 0 2.054 1.543 3.185 3.53 3.185 1.73 0 2.703-.877 3.09-1.66h.083v1.428H128v-6.94c0-3.041-2.396-3.648-4.057-3.648zm-8.914.137v10.45h2.035v-10.45h-2.035zM79.506 61.5c1.912 0 2.81 1.703 2.81 3.703 0 2.007-.898 3.688-2.81 3.688-1.926 0-2.824-1.68-2.824-3.688 0-2 .898-3.703 2.824-3.703zm46.459 3.77v1.347c0 1.239-.987 2.37-2.682 2.37-1.15 0-1.978-.519-1.978-1.526 0-1.089.965-1.476 2.142-1.633.66-.088 2.225-.266 2.518-.558z"/>
</svg>;
  }
});