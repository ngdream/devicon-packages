const React = require("react");
module.exports = function MsdosLineIcon({size = "1em", color = "#000", ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
      ...(color ? { fill: color } : {} )
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="M84 124v4h24v-4H84m-4.001-8.002h-3.996v4h3.996v-4m4 8.001v-4h-4v4h4m-7.996-12.002h-4.001v4h4v-4M84 95.999v4h4v-4h-4m12.002 4v-4h-4v4H88V104h16v-4h-7.997M104 95.999v4h4v-4h-4m12.002 24h4.001v-4.001h-4v4m0 4.001v-4H108v4h8m-48 0H52V128h28v-4H68m-24 4v-4H8.002v4H44m12.003-16.003v-4H48v12.002h-4v4h8v-12.002h4.002m-28-68.001h4v-7.997h-4v7.997m7.997 32.002v-8.001h-3.996v4H20V104h24v-4h-4v-4.001h-4.001v4H24V76h8.002v20h3.996V76M48 71.996v20h-4v8.001h4v-4h4V67.996h-4v4m0-15.998v-4h-4v4h4m-8.002 0v4H44v-4.001h-4m0 8.001v-4h-4.001v7.996h4V64M24.002 3.996v8.002h4V3.996h-4m-11.998 0h11.998V0h-16v47.996h-4v76.002h4V51.997h36v-8.002H40v4.001h-4.001v-4h-3.996v4H24V36h4v-8.002h-4v-4h-4v24h-7.998V3.995m20 16.003v-8.001h-4.001v8.001h4M40 27.996h4v-7.997h-4v7.997m8 8.001h-4v7.997h4v-7.997m-12-8.001v8.002h4v-8.002h-4m-3.996-7.997v7.997H36v-7.997h-3.996M48 11.998h-4v8.001h4v-8.001m4 0V3.996h-4v8.002h4m72 75.998h-3.996v28.002H124V87.996M116.002 84v3.996h4.001V84h-4m0-24h4v-4.002h-4v4m4 0v11.998H124V60h-3.996m-12.002 19.999v4h8.001v-4h-8.001m-4-8.002h4v-4h-4v4m4 0v4.001h12.002v-4h-12.002m-35.999 8V60h-4v11.997H64V64H52v3.997h8v32.002h-3.996v7.997H60V104h8v7.997h4.001v-16h-4v4.001h-4.002v-24H68V80h4.001m4 4v-4h-4v4h4M84 67.998h12v28.001h7.997v-4h-4.001v-12h8.002v-4h-8.002v-8.002h4V64H84v3.996m0 8.001v-8.001h-4.001V84h-3.996v3.996h3.996v4h-7.997v4.001H84V75.998m-11.998-24h4v-4h-8V0h-16v3.996h11.997v44h-7.996v-24h-4.001v4.001H48V36h4v11.997h-4v4.001h24m4 4h-4V60h4v-4.001m0 0h3.997v-4.001h-3.996v4m3.996-12.002h-3.996v4.001h3.996v-4M108 51.996v4h8v-4h-8m0-4H79.999v4h28.002v-4m0-4.001v4h4v-4h-4m-4-7.997h-4.002v4H104v-4m0-8.002h4v-4h-8v4h4M96.003 36H100v-4.001h-3.996v4m-12.002 0v-4h-12v11.998h4V36H84m4 0h-4v7.997h15.998V40H88v-4.001m-4-8.002v4.001h12.002v-4H84m-4.001-4.001h-3.996v4H84v-4h-4.001M88.001 20v3.996h11.997V20H88m0-8.002h-4V20h4v-8M76.004 7.998h-4.001v15.998h4V7.997m0-4v4H84V3.996h-7.997m23.996 0H104V0H84v3.996h15.998m0 8.002V7.997H88v4h11.998M112 31.999v-4h-4v4h4m4.001 0h-4v11.998h4V31.998m-4-24v-4h-8.002v4H112m4.001 0h-4V16h-8.002v-4.001h-4V20H116zm0 0"/>
</svg>);
}