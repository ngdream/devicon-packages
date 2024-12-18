const React = require("react");
module.exports = function ArgocdOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="argocd-original-e">
			<path d="M42 41h44v51H42zm0 0"/>
		</clipPath>
		<clipPath id="argocd-original-d">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="argocd-original-c">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<clipPath id="argocd-original-f">
			<path d="M85.695 41.133l-2.55 58.238H44.887l-2.125-58.238"/>
		</clipPath>
		<clipPath id="argocd-original-b">
			<path d="M0 0h128v128H0z"/>
		</clipPath>
		<mask id="argocd-original-l">
			<g>
				<path d="M0 0h128v128H0z" fillOpacity=".251"/>
			</g>
		</mask>
		<mask id="argocd-original-h">
			<g>
				<path d="M0 0h128v128H0z" fillOpacity=".22"/>
			</g>
		</mask>
		<mask id="argocd-original-j">
			<g>
				<path d="M0 0h128v128H0z" fillOpacity=".502"/>
			</g>
		</mask>
		<g id="argocd-original-i" clipPath="url(#argocd-original-b)">
			<path d="M58.488 30.508a2.974 2.974 0 11-5.948-.003 2.974 2.974 0 015.948.003zm0 0" fill="#fbdfc3"/>
		</g>
		<g id="argocd-original-g" clipPath="url(#argocd-original-c)">
			<path d="M84.422 65.363s2.55-22.531-.852-31.031C77.195 19.453 62.316 20.73 62.316 20.73s8.5 3.399 8.926 16.153c.426 8.926 0 22.105 0 22.105zm0 0" fill="#e34e3b"/>
		</g>
		<g id="argocd-original-k" clipPath="url(#argocd-original-d)">
			<path d="M83.145 90.867V87.47c-5.95 3.398-12.329 6.8-19.977 6.8-8.504 0-14.031-3.824-19.555-6.8l.422 3.398s6.38 6.805 19.555 6.805c12.328-.426 19.555-6.805 19.555-6.805zm0 0" fill="#e9654b"/>
		</g>
	</defs>
	<path d="M44.035 89.594s-.847 2.55-2.125 3.824a3.844 3.844 0 01-2.972 1.277 49.946 49.946 0 01-6.38 1.274s2.977.426 6.38.851c1.273 0 1.273 0 2.124.426 2.126 0 2.973-1.277 2.973-1.277zm39.11 0s.851 2.55 2.125 3.824a3.858 3.858 0 002.976 1.277 49.8 49.8 0 006.375 1.274s-2.973.426-6.8.851c-1.274 0-1.274 0-2.126.426-2.55 0-2.976-1.277-2.976-1.277zm0 0" fill="#e9654b"/>
	<path d="M109.926 47.508c0 25.355-20.555 45.91-45.91 45.91-25.356 0-45.91-20.555-45.91-45.91 0-25.352 20.554-45.906 45.91-45.906 25.355 0 45.91 20.554 45.91 45.906zm0 0" fill="#b6cfea"/>
	<path d="M108.227 47.508c0 24.418-19.793 44.21-44.211 44.21-24.414 0-44.207-19.792-44.207-44.21C19.809 23.094 39.602 3.3 64.016 3.3c24.418 0 44.21 19.793 44.21 44.207zm0 0" fill="#e6f5f8"/>
	<path d="M100.148 48.36c0 19.956-16.175 36.132-36.132 36.132-19.954 0-36.133-16.176-36.133-36.133 0-19.953 16.18-36.132 36.133-36.132 19.957 0 36.132 16.18 36.132 36.132zm0 0" fill="#d0e8f0"/>
	<path d="M42.762 65.363s2.976 48.035 2.976 48.887c0 .422.426 1.273-1.703 2.125-2.125.848-8.926 2.55-8.926 2.55h10.203c4.676 0 4.676-3.827 4.676-4.675 0-.852 1.274-19.129 1.274-19.129s.425 21.68.425 22.527c0 .852-.425 2.125-3.398 2.977-2.125.426-8.504 1.7-8.504 1.7h9.778c5.953 0 5.953-3.825 5.953-3.825l1.273-19.129s.426 19.129.426 21.254c0 1.7-1.274 2.977-5.953 3.824-2.973.852-6.801 1.703-6.801 1.703h11.055c5.523-.425 6.375-4.254 6.375-4.254l9.351-47.609zm0 0" fill="#ee794b"/>
	<path d="M85.27 65.363s-2.973 48.035-2.973 48.887c0 .422-.426 1.273 1.7 2.125 2.124.848 8.925 2.55 8.925 2.55H82.719c-4.676 0-4.676-3.827-4.676-4.675 0-.852-1.273-19.129-1.273-19.129s-.426 21.68-.426 22.527c0 .852.426 2.125 3.402 2.977l8.5 1.7H78.47c-5.95 0-5.95-3.825-5.95-3.825l-1.277-19.129s-.426 19.129-.426 21.254c0 1.7 1.278 2.977 5.954 3.824 2.976.852 6.8 1.703 6.8 1.703H72.52c-5.528-.425-6.38-4.254-6.38-4.254L56.79 74.29zm.425-23.379c0 11.903-9.777 21.254-21.254 21.254-11.476 0-21.254-9.777-21.254-21.254 0-11.476 9.778-21.254 21.254-21.254 11.477 0 21.254 9.352 21.254 21.254zm0 0" fill="#ee794b"/>
	<path d="M71.668 73.863c0 7.227-3.402 11.907-7.652 11.907s-7.653-5.528-7.653-12.754c0 0 3.403 6.8 8.078 6.8 4.676 0 7.227-5.953 7.227-5.953zm0 0" fill="#010101"/>
	<path d="M71.668 73.863c0 4.68-3.402 7.227-7.652 7.227s-7.227-3.399-7.227-7.649c0 0 3.402 4.25 8.078 4.25 4.676 0 6.801-3.828 6.801-3.828zm0 0" fill="#fff"/>
	<path d="M92.07 53.887c0 7.277-5.898 13.175-13.175 13.175-7.278 0-13.18-5.898-13.18-13.175 0-7.278 5.902-13.18 13.18-13.18 7.277 0 13.175 5.902 13.175 13.18zm-29.754 0c0 7.277-5.902 13.175-13.18 13.175-7.277 0-13.175-5.898-13.175-13.175 0-7.278 5.898-13.18 13.176-13.18 7.277 0 13.18 5.902 13.18 13.18zm0 0" fill="#e9654b"/>
	<path d="M89.098 53.887c0 5.633-4.57 10.203-10.203 10.203-5.633 0-10.204-4.57-10.204-10.203 0-5.637 4.57-10.203 10.204-10.203 5.632 0 10.203 4.566 10.203 10.203zm-30.61 0c0 5.633-4.566 10.203-10.199 10.203-5.637 0-10.203-4.57-10.203-10.203a10.201 10.201 0 0110.203-10.203c5.633 0 10.2 4.566 10.2 10.203zm0 0" fill="#fff"/>
	<path d="M51.262 52.61a2.975 2.975 0 11-5.95.003 2.975 2.975 0 015.95-.004zm30.609 0a2.976 2.976 0 11-5.951.001 2.976 2.976 0 015.951-.002zm0 0" fill="#010101"/>
	<path d="M17.258 58.988a2.005 2.005 0 01-2.125-2.125V39.86a2.008 2.008 0 01.582-1.543 2.008 2.008 0 011.543-.582 2.005 2.005 0 012.125 2.125v17.004c.035.57-.18 1.133-.586 1.54a2.008 2.008 0 01-1.54.585zm92.668 0a2.003 2.003 0 01-1.54-.586 2.008 2.008 0 01-.585-1.539V39.86a2.011 2.011 0 01.586-1.543 2 2 0 011.539-.582 2 2 0 011.539.582c.41.407.62.97.586 1.543v17.004a1.994 1.994 0 01-.586 1.54 2.003 2.003 0 01-1.54.585zm0 0" fill="#b6cfea"/>
	<path d="M51.688 13.504a2.125 2.125 0 11-4.25 0 2.125 2.125 0 014.25 0zM34.262 70.89a1.559 1.559 0 01-1.278-.425c-5.101-6.375-7.652-14.453-7.652-22.531a37.933 37.933 0 015.102-19.13 41.641 41.641 0 0113.601-13.6 1.873 1.873 0 012.13.425 1.874 1.874 0 01-.427 2.125 34.305 34.305 0 00-17.43 29.754 33.487 33.487 0 007.227 20.832c.426.426.426 1.7-.426 2.125-.425.426-.425.426-.847.426zm0 0" fill="#fff"/>
	<g clipPath="url(#argocd-original-e)">
		<g clipPath="url(#argocd-original-f)">
			<path d="M102.273 53.46c0 20.895-16.937 37.833-37.832 37.833-20.894 0-37.832-16.938-37.832-37.832 0-20.895 16.938-37.832 37.832-37.832 20.895 0 37.832 16.937 37.832 37.832zm0 0" fill="#ee794b"/>
		</g>
	</g>
	<g clipPath="url(#argocd-original-c)" mask="url(#argocd-original-h)">
		<path d="M84.422 65.363s2.55-22.531-.852-31.031C77.195 19.453 62.316 20.73 62.316 20.73s8.5 3.399 8.926 16.153c.426 8.926 0 22.105 0 22.105zm0 0" fill="#e34e3b"/>
	</g>
	<g clipPath="url(#argocd-original-b)" mask="url(#argocd-original-j)">
		<path d="M58.488 30.508a2.974 2.974 0 11-5.948-.003 2.974 2.974 0 015.948.003zm0 0" fill="#fbdfc3"/>
	</g>
	<g clipPath="url(#argocd-original-d)" mask="url(#argocd-original-l)">
		<path d="M83.145 90.867V87.47c-5.95 3.398-12.329 6.8-19.977 6.8-8.504 0-14.031-3.824-19.555-6.8l.422 3.398s6.38 6.805 19.555 6.805c12.328-.426 19.555-6.805 19.555-6.805zm0 0" fill="#e9654b"/>
	</g>
</svg>);
}