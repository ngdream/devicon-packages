import{defineComponent,h,createVNode as _createVNode,mergeProps as _mergeProps}from"vue";export default defineComponent({name:"LaravelOriginalWordmarkIcon",props:{size:{type:[String,Number],default:"1em"},color:{type:String,default:"#f0513f"}},render(){const a={width:this.size,height:this.size,...(this.color?{fill:this.color}:{})};return _createVNode("svg",_mergeProps(a,{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"}),[_createVNode("path",{d:"M7.595 45.354a.584.584 0 0 0-.291.078L.292 49.468c-.024.015-.043.034-.065.05-.019.015-.04.028-.057.044-.02.02-.035.045-.052.068-.013.018-.029.033-.04.052-.016.029-.026.06-.037.091-.006.017-.016.032-.02.05a.586.586 0 0 0-.021.152v24.013c0 .21.112.403.293.507l14.022 8.073c.031.018.064.028.097.04.015.005.03.014.045.018.049.013.1.02.15.02a.578.578 0 0 0 .15-.02c.013-.003.026-.011.04-.016.034-.012.069-.023.101-.042l14.023-8.073a.584.584 0 0 0 .293-.506v-7.667l6.718-3.868a.585.585 0 0 0 .293-.507v-8.005a.59.59 0 0 0-.02-.152c-.006-.017-.015-.032-.021-.049-.012-.03-.021-.062-.038-.09-.01-.02-.027-.035-.04-.052-.017-.023-.031-.048-.052-.068-.016-.017-.038-.03-.057-.044-.021-.017-.04-.036-.064-.05h-.001L28.92 49.4a.584.584 0 0 0-.583 0l-7.011 4.037c-.025.014-.044.033-.065.05-.02.014-.04.027-.057.043-.02.02-.035.045-.052.068-.013.018-.03.034-.04.053-.016.028-.026.059-.038.09-.006.017-.015.032-.02.049a.586.586 0 0 0-.02.152v7.667l-5.843 3.364V49.975a.58.58 0 0 0-.02-.153c-.006-.017-.015-.032-.021-.049-.012-.03-.021-.062-.038-.09-.01-.02-.027-.035-.04-.053-.017-.023-.032-.047-.052-.068-.017-.016-.038-.029-.057-.044-.021-.016-.04-.035-.064-.05h-.001l-7.011-4.036a.584.584 0 0 0-.292-.078Zm0 1.258 5.84 3.363-5.84 3.362-5.84-3.362zm21.034 3.968 5.84 3.363-5.84 3.362-5.84-3.362zm-14.607.405v14.66l-3.389 1.952L8.18 69.01V54.35l3.39-1.952zm-12.854 0 2.453 1.413 3.39 1.951v15.674c0 .022.006.043.009.065.003.029.004.058.011.086v.001c.007.023.02.044.028.066.01.024.017.05.03.073l.002.002c.012.02.029.037.043.056.016.021.03.044.048.062l.002.002c.017.016.038.028.056.042.021.017.04.036.063.05h.003l.002.002 6.715 3.8v6.722l-12.854-7.4zm44.379 2.96v19.714h9.321v-2.901h-6.083V53.945Zm79.384 0v19.714H128V53.945ZM22.2 54.953l2.455 1.413 3.389 1.951v6.656l-2.454-1.412-3.39-1.951Zm12.855 0v6.657l-5.843 3.364v-6.657l3.39-1.951zm27.19 5.243c-.995 0-1.905.184-2.731.55a6.393 6.393 0 0 0-2.127 1.507 7.129 7.129 0 0 0-1.873 4.844c0 .939.165 1.821.493 2.647a7.003 7.003 0 0 0 1.38 2.197c.592.638 1.3 1.14 2.127 1.506.826.366 1.736.55 2.732.55.77 0 1.535-.188 2.295-.564.76-.375 1.347-.891 1.76-1.549v1.775h3.07V60.535h-3.07v1.774c-.413-.657-1-1.173-1.76-1.549-.76-.375-1.525-.563-2.295-.563zm24.954 0c-.996 0-1.906.184-2.733.55a6.395 6.395 0 0 0-2.126 1.507 6.977 6.977 0 0 0-1.38 2.21 7.129 7.129 0 0 0-.493 2.634c0 .939.164 1.821.493 2.647a7.003 7.003 0 0 0 1.38 2.197 6.4 6.4 0 0 0 2.126 1.506c.826.366 1.737.55 2.733.55.77 0 1.534-.188 2.295-.564.76-.375 1.347-.891 1.76-1.549v1.775h3.07V60.535h-3.07v1.774c-.414-.657-1-1.173-1.76-1.549-.76-.375-1.526-.563-2.295-.563zm29.236.001c-3.759 0-6.734 3.09-6.734 6.9 0 4.212 2.88 6.9 7.128 6.9 2.377 0 3.895-.91 5.75-2.89l-2.074-1.604c-.001.002-1.565 2.055-3.9 2.055-2.716 0-3.858-2.188-3.858-3.32h10.183c.535-4.336-2.315-8.04-6.495-8.04zm-44.642.338v13.124h3.07V63.555h5.267v-3.02zm24.012 0 5.038 13.124h3.859l5.038-13.124h-3.11l-3.857 10.05-3.859-10.05zm-74.188 2.087 5.836 3.36-4.282 2.444-8.567 4.89-5.831-3.3 6.124-3.526zm94.794.014c3.279 0 3.677 3.067 3.7 3.32h-7.356c.023-.252.377-3.32 3.656-3.32zm-53.997.293c.582 0 1.113.112 1.592.338.479.225.887.526 1.225.9.338.377.601.818.789 1.324.187.507.281 1.042.281 1.606 0 .563-.094 1.098-.281 1.605a4.07 4.07 0 0 1-.789 1.324 3.807 3.807 0 0 1-1.225.9 3.692 3.692 0 0 1-1.592.339 3.596 3.596 0 0 1-1.577-.338 3.852 3.852 0 0 1-1.21-.901 3.874 3.874 0 0 1-.775-1.324 4.792 4.792 0 0 1-.268-1.605c0-.564.09-1.099.268-1.606.178-.506.437-.947.775-1.323a3.857 3.857 0 0 1 1.21-.901c.47-.226.995-.338 1.578-.338zm24.953 0a3.68 3.68 0 0 1 1.591.338c.48.225.888.526 1.226.9.338.377.6.818.788 1.324a4.58 4.58 0 0 1 .282 1.606 4.59 4.59 0 0 1-.282 1.605 4.07 4.07 0 0 1-.788 1.324 3.808 3.808 0 0 1-1.226.9 3.69 3.69 0 0 1-1.59.339 3.597 3.597 0 0 1-1.578-.338 3.85 3.85 0 0 1-1.211-.901 3.873 3.873 0 0 1-.774-1.324 4.79 4.79 0 0 1-.268-1.605c0-.564.089-1.099.267-1.606.178-.506.437-.947.775-1.323a3.857 3.857 0 0 1 1.21-.901c.47-.226.996-.338 1.578-.338zM28.045 66.99v6.66l-12.854 7.4v-6.723l9.52-5.434z"},null)])}});