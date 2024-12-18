const React = require("react");
module.exports = function MoodleOriginalIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<radialGradient id="moodle-original-a" cx="532.855" cy="-537.557" gradientTransform="matrix(1 0 0 -1 -297.6 -460.9)" gradientUnits="userSpaceOnUse" r="209.76">
		<stop offset="0" stopColor="#FAAF40"/>
		<stop offset=".043" stopColor="#F9A538"/>
		<stop offset=".112" stopColor="#F89D31"/>
		<stop offset=".227" stopColor="#F89A2F"/>
		<stop offset=".528" stopColor="#F7922D"/>
		<stop offset="1" stopColor="#F37B28"/>
	</radialGradient>
	<path d="M106.259 105.754V66.975c0-8.164-3.397-12.244-10.034-12.244-6.629 0-10.034 4.08-10.034 12.244v38.779H66.294V66.975c0-8.164-3.228-12.244-9.862-12.244-6.633 0-10.036 4.08-10.036 12.244v38.779H26.667V64.768c0-8.504 2.891-14.801 8.844-19.223 5.102-3.91 12.246-5.777 20.92-5.777 9.015 0 15.478 2.207 19.727 6.801 3.57-4.594 10.207-6.801 19.897-6.801 8.844 0 15.819 1.867 20.922 5.777 5.951 4.422 8.843 10.719 8.843 19.223v41.152h-19.563v-.166z" fill="url(#moodle-original-a)"/>
	<path d="M28.539 49.627l-2.041 10.207c18.708 6.291 36.395.166 45.751-16.158-13.778-9.522-26.535.17-43.71 5.951" fill="#58595B"/>
	<path d="M28.539 47.08c-.681 3.91-1.192 7.65-1.872 11.563 17.857 6.125 35.375.85 44.73-15.137-11.909-13.776-25.17-2.383-42.858 3.574" fill="url(#moodle-original-b)"/>
	<path d="M49.799 51.668c-8.164-1.701-17.009 2.555-23.131 6.975-3.912-28.57 13.777-27.893 36.903-20.75-1.529 6.975-4.083 16.33-8.502 21.941-.169-3.744-1.869-6.293-5.27-8.166" fill="url(#moodle-original-c)"/>
	<path d="M2.178 47.08c29.932-18.031 46.77-21.43 81.634-25-40.478 31.969-41.499 25-81.634 25" fill="url(#moodle-original-d)"/>
	<path d="M83.812 22.246L51.667 45.545" fill="none" stroke="#4A4A4C" strokeWidth=".5"/>
	<path d="M45.545 34.66c.34 3.744-.511-3.572 0 0" fill="#231F20" opacity=".23"/>
	<path d="M2.178 47.08l49.489-1.535" fill="none" stroke="#A8ABAD" strokeWidth=".5"/>
	<path d="M42.484 35.002C33.98 37.383 6.09 43.506 5.747 47.08c-.849 6.631-.167 17.176-.167 17.176" fill="none" stroke="#F16922" strokeWidth=".5"/>
	<path d="M8.131 89.596c-3.063-7.652-6.804-16.158-2.384-26.703C8.64 72.756 8.131 80.24 8.131 89.596" fill="#F16922"/>
	<path d="M41.076 33.844c.708-.25 1.384-.17 1.509.184.126.355-.344.846-1.052 1.096-.709.256-1.384.172-1.51-.184-.127-.352.344-.844 1.053-1.096z" fill="#6D6E70"/>
	<linearGradient id="moodle-original-b" gradientTransform="matrix(1 0 0 -1 -297.6 -460.9)" gradientUnits="userSpaceOnUse" x1="324.268" x2="368.932" y1="-509.952" y2="-509.952">
		<stop offset="0" stopColor="#929497"/>
		<stop offset=".124" stopColor="#757578"/>
		<stop offset=".279" stopColor="#575658"/>
		<stop offset=".44" stopColor="#403E3F"/>
		<stop offset=".609" stopColor="#302D2E"/>
		<stop offset=".788" stopColor="#262223"/>
		<stop offset="1" stopColor="#231F20"/>
	</linearGradient>
	<linearGradient id="moodle-original-c" gradientTransform="matrix(1 0 0 -1 -297.6 -460.9)" gradientUnits="userSpaceOnUse" x1="332.834" x2="351.377" y1="-495.051" y2="-521.534">
		<stop offset="0" stopColor="#231F20"/>
		<stop offset="1" stopColor="#231F20" stopOpacity="0"/>
	</linearGradient>
	<linearGradient id="moodle-original-d" gradientTransform="matrix(1 0 0 -1 -297.6 -460.9)" gradientUnits="userSpaceOnUse" x1="299.778" x2="381.412" y1="-495.802" y2="-495.802">
		<stop offset="0" stopColor="#929497"/>
		<stop offset=".124" stopColor="#757578"/>
		<stop offset=".279" stopColor="#575658"/>
		<stop offset=".44" stopColor="#403E3F"/>
		<stop offset=".609" stopColor="#302D2E"/>
		<stop offset=".788" stopColor="#262223"/>
		<stop offset="1" stopColor="#231F20"/>
	</linearGradient>
</svg>);
}