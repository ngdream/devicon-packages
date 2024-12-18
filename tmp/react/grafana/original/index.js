const React = require("react");
module.exports = function GrafanaOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<linearGradient id="a" gradientTransform="translate(-2.405 27.316) scale(1.4463)" gradientUnits="userSpaceOnUse" x1="45.842" x2="45.842" y1="89.57" y2="8.802">
		<stop offset="0" stopColor="#fcee1f"/>
		<stop offset="1" stopColor="#f15b2a"/>
	</linearGradient>
	<path d="M69.162 0c-9.91 6.4-11.77 14.865-11.77 14.865s.002.206-.101.412c-.62.104-1.033.31-1.549.413-.722.206-1.445.413-2.168.826l-2.168.93c-1.445.722-2.89 1.341-4.336 2.167-1.342.826-2.683 1.548-4.025 2.477a1.266 1.266 0 0 1-.309-.205c-13.316-5.161-25.084 1.031-25.084 1.031-1.032 14.245 5.367 23.02 6.606 24.672-.31.929-.62 1.754-.93 2.58a52.973 52.973 0 0 0-2.166 9.91c-.103.413-.104 1.033-.207 1.445C8.671 67.613 5.06 80.103 5.06 80.103c10.219 11.768 22.193 12.49 22.193 12.49 1.445 2.685 3.302 5.369 5.264 7.743.825 1.032 1.756 1.96 2.582 2.992-3.716 10.632.619 19.613.619 19.613 11.458.413 18.992-4.955 20.54-6.297 1.136.31 2.272.724 3.407 1.034a47.25 47.25 0 0 0 10.633 1.549h4.644C80.31 126.969 89.807 128 89.807 128c6.71-7.123 7.123-14.038 7.123-15.69v-.62c1.342-1.033 2.683-2.064 4.129-3.2 2.684-2.374 4.955-5.264 7.02-8.154.206-.207.309-.62.618-.826 7.639.413 12.903-4.748 12.903-4.748-1.24-7.949-5.78-11.768-6.71-12.49l-.103-.104-.103-.104-.104-.103c0-.413.104-.93.104-1.445.103-.93.103-1.755.103-2.58v-3.407c0-.206 0-.413-.103-.722l-.104-.723-.103-.723c-.104-.929-.31-1.754-.413-2.58-.825-3.406-2.166-6.71-3.818-9.498-1.858-2.993-4.026-5.471-6.504-7.742-2.477-2.168-5.264-4.025-8.154-5.264-2.994-1.342-5.884-2.167-8.98-2.476-1.446-.207-3.098-.207-4.544-.207H79.69c-.825.103-1.546.205-2.27.308-3.096.62-5.883 1.756-8.36 3.201-2.478 1.446-4.646 3.407-6.504 5.575-1.858 2.167-3.2 4.438-4.13 6.916a23.313 23.313 0 0 0-1.548 7.431v2.684c0 .31 0 .62.104.93.103 1.238.31 2.374.722 3.51.723 2.27 1.756 4.334 3.098 6.09a19.973 19.973 0 0 0 4.54 4.335c1.756 1.136 3.408 1.96 5.266 2.477 1.858.516 3.509.826 5.16.722h2.376c.206 0 .412-.101.619-.101.206 0 .31-.104.619-.104.31-.103.825-.207 1.135-.31.722-.207 1.342-.62 2.064-.826.723-.31 1.24-.722 1.756-1.032.103-.103.309-.207.412-.31.62-.413.723-1.238.207-1.858-.413-.413-1.136-.62-1.756-.31-.103.103-.205.104-.412.207-.413.206-1.032.413-1.445.619-.62.103-1.135.31-1.754.414-.31 0-.62.102-.93.102h-2.58c-.103 0-.31.001-.414-.102-1.239-.206-2.58-.62-3.818-1.137-1.239-.619-2.478-1.34-3.51-2.373a15.894 15.894 0 0 1-2.89-3.51c-.826-1.341-1.24-2.89-1.446-4.335-.103-.826-.207-1.55-.103-2.375v-1.239c0-.413.103-.825.207-1.238.619-3.406 2.27-6.71 4.851-9.187.723-.723 1.342-1.238 2.168-1.754.826-.62 1.547-1.032 2.373-1.342.826-.31 1.756-.723 2.582-.93.93-.206 1.858-.414 2.684-.414.413 0 .929-.101 1.342-.101h1.238c1.032.103 2.065.205 2.994.412 1.961.413 3.82 1.135 5.678 2.168 3.613 2.064 6.708 5.16 8.566 8.877.93 1.858 1.548 3.82 1.961 5.988.103.62.104 1.03.207 1.547v2.787c0 .62-.103 1.136-.103 1.756-.104.62-.102 1.134-.205 1.754-.104.619-.208 1.136-.311 1.755-.206 1.136-.722 2.168-1.031 3.303-.826 2.168-1.963 4.232-3.305 5.986-2.684 3.717-6.502 6.815-10.63 8.776-2.169.929-4.337 1.755-6.608 2.064a19.003 19.003 0 0 1-3.407.309h-1.755c-.62 0-1.238.002-1.858-.102-2.477-.206-4.85-.724-7.224-1.343-2.375-.723-4.647-1.548-6.815-2.684-4.335-2.27-8.153-5.573-11.25-9.289-1.445-1.961-2.892-4.027-4.027-6.092-1.136-2.064-1.961-4.438-2.58-6.709-.723-2.27-1.032-4.645-1.135-7.02v-3.613c0-1.135.102-2.372.309-3.61.103-1.24.309-2.376.619-3.614.206-1.239.62-2.375.93-3.614.722-2.374 1.444-4.644 2.476-6.812 2.064-4.335 4.645-8.155 7.742-11.252a24.86 24.86 0 0 1 2.479-2.168c.31-.31 1.135-1.033 2.064-1.549s1.858-1.136 2.89-1.549c.414-.206.93-.413 1.446-.722.206-.103.411-.206.824-.309.207-.103.414-.207.826-.31 1.033-.413 2.066-.825 3.098-1.135.207-.103.62-.104.826-.207.207-.103.618-.102.824-.205.62-.103 1.033-.208 1.55-.414.206-.104.619-.104.825-.207.207 0 .62-.102.827-.102.206 0 .62-.103.826-.103l.412-.104.412-.103c.206 0 .62-.104.826-.104.31 0 .62-.104.93-.104.206 0 .721-.101.928-.101.206 0 .311 0 .62-.104h.723c.31 0 .618 0 .928-.103h4.647c2.064.103 4.128.31 5.986.723 3.82.722 7.638 1.961 10.941 3.613 3.304 1.548 6.4 3.611 8.877 5.78.104.102.311.207.414.413.104.103.31.206.412.412.31.207.62.62.93.826.31.207.62.62.93.827.206.31.618.618.824.927 1.136 1.136 2.169 2.375 3.098 3.51a41.422 41.422 0 0 1 4.44 7.02c.102.103.1.207.204.414.103.103.104.205.207.412.103.206.206.62.412.826.104.206.208.62.31.826.104.207.208.62.311.826.413 1.033.826 2.064 1.135 3.096.62 1.548.929 2.993 1.239 4.13.103.412.62.825 1.033.825.619 0 .927-.414.927-1.033-.31-1.755-.308-3.198-.412-4.953-.206-2.168-.619-4.647-1.238-7.434-.62-2.787-1.86-5.677-3.305-8.877-1.548-3.096-3.509-6.4-6.09-9.394-1.032-1.239-2.167-2.373-3.302-3.612 1.858-7.122-2.168-13.42-2.168-13.42-6.916-.412-11.253 2.168-12.801 3.303-.206-.103-.618-.205-.824-.308-1.136-.413-2.375-.93-3.613-1.342-1.24-.31-2.478-.827-3.717-1.033-1.239-.31-2.58-.62-4.026-.827-.206 0-.413-.103-.722-.103C77.833 4.128 69.162 0 69.162 0z" fill="url(#a)"/>
</svg>);
}