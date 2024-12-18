const React = require("react");
module.exports = function CodepenLineWordmarkIcon({size = "1em", color = "#000", ...props}){
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
	<path d="M30.378 51.92c-.286 0-.568.089-.818.244l-.008.005-10.602 7.067-.002.002a1.508 1.508 0 0 0-.655 1.233v7.066c0 .496.241.96.66 1.24l10.601 7.07.008.004a1.568 1.568 0 0 0 1.632 0l.007-.004 10.605-7.072.002-.002a1.511 1.511 0 0 0 .655-1.232v-7.066c0-.496-.241-.959-.659-1.239v-.002L31.207 52.17l-.004-.002a1.554 1.554 0 0 0-.817-.248h-.004zm-.004.994a.56.56 0 0 1 .29.088l10.588 7.058a.544.544 0 0 1 .219.415v7.058a.517.517 0 0 1-.225.422l-10.574 7.05c-.229.142-.36.14-.589 0h-.002l-10.577-7.054a.548.548 0 0 1-.22-.414v-7.058a.514.514 0 0 1 .222-.421l.002-.002 10.577-7.05c.112-.07.2-.09.29-.091zm-.496 1.433-.771.513-8.419 5.613 4.372 2.926 4.818-3.217zm1 0v5.837l4.816 3.215 4.372-2.926zm86.18 1.308-1.28.06c-.002 0-.002.002-.003.002-.12.006-.21.11-.325.143-.642.184-1.208.679-1.21 1.454v13.461c.015.48.22.897.527 1.163.307.266.694.39 1.074.39.38 0 .765-.124 1.072-.39.306-.266.513-.683.527-1.163v-8.833l7.702 9.806a1.606 1.606 0 0 0 1.78.523A1.606 1.606 0 0 0 128 70.76V57.3a1.597 1.597 0 0 0-.527-1.162 1.632 1.632 0 0 0-1.074-.39c-.38 0-.765.123-1.071.39a1.597 1.597 0 0 0-.528 1.162v8.832l-7.697-9.8c-.117-.153-.334-.13-.493-.23zm-68.42.06c-.878 0-1.6.722-1.601 1.599V70.76c0 .877.723 1.6 1.6 1.6h4.801c4.65 0 8.32-3.67 8.32-8.32v-.005c0-4.65-3.669-8.32-8.32-8.32zm-40.318.004C3.67 55.719 0 59.39 0 64.04s3.669 8.32 8.32 8.32c2.345 0 4.378-.957 5.878-2.339v-.002c.372-.332.563-.775.558-1.194a1.633 1.633 0 0 0-.446-1.085 1.633 1.633 0 0 0-1.046-.531 1.598 1.598 0 0 0-1.237.461l.006-.006c-1 .924-2.216 1.495-3.713 1.495-3.053 0-5.12-2.067-5.12-5.12 0-3.054 2.067-5.12 5.12-5.12 1.554 0 2.706.489 3.669 1.453l.003.004.004.004c.35.331.794.483 1.2.455a1.626 1.626 0 0 0 1.035-.485c.269-.269.455-.63.482-1.036a1.593 1.593 0 0 0-.453-1.196l-.006-.006-.004-.004c-1.48-1.481-3.483-2.275-5.674-2.339l-.05-.05zm58.558 0c-.878 0-1.6.723-1.6 1.6v13.446c0 .878.722 1.6 1.6 1.6h8.653c.48-.015.899-.221 1.165-.528.266-.306.39-.694.39-1.074 0-.38-.124-.765-.39-1.071a1.602 1.602 0 0 0-1.165-.527h-7.054v-3.52h4.145c.504.015.95-.182 1.235-.494.284-.312.412-.714.412-1.107s-.128-.792-.412-1.104a1.595 1.595 0 0 0-1.235-.494h-4.145V58.92h7.04a1.6 1.6 0 0 0 1.2-.511 1.63 1.63 0 0 0 .401-1.09c0-.386-.126-.78-.4-1.089a1.6 1.6 0 0 0-1.2-.511zm16.318 0c-.878 0-1.6.723-1.6 1.6v13.446c0 .493.203.923.513 1.198.309.275.702.403 1.089.403s.78-.128 1.089-.403c.31-.275.512-.705.512-1.198V66.6h4.153c2.985 0 5.44-2.453 5.44-5.438 0-2.987-2.455-5.442-5.44-5.442zm16.325 0c-.877 0-1.598.723-1.598 1.6v6.613l-.05.126.05.108v6.6c0 .877.72 1.598 1.598 1.598h8.646c.48-.014.897-.22 1.163-.527.266-.306.39-.694.39-1.074 0-.38-.124-.765-.39-1.071a1.597 1.597 0 0 0-1.163-.527h-7.047v-3.52h4.167a1.6 1.6 0 0 0 1.163-.529c.266-.306.39-.692.39-1.072 0-.38-.124-.765-.39-1.071a1.598 1.598 0 0 0-1.163-.527h-4.167V58.92h7.04a1.6 1.6 0 0 0 1.2-.511 1.63 1.63 0 0 0 .402-1.09c0-.386-.126-.78-.401-1.089a1.6 1.6 0 0 0-1.2-.511zm-70.635.48v3.454l-3.824 2.554-2.587-1.732zm2.984 0 6.411 4.276-2.587 1.73-3.824-2.552zm16.768.508h4.8c4.134 0 7.328 3.195 7.328 7.328v.006c0 4.133-3.195 7.327-7.328 7.327h-4.8a.602.602 0 0 1-.609-.608V57.316c0-.342.268-.609.609-.609zm67.186 0h.002a.577.577 0 0 1 .488.227l.002.002 9.477 12.066V57.329c.007-.234.081-.353.186-.443a.65.65 0 0 1 .42-.146c.162 0 .318.054.423.145.105.092.179.21.186.444v13.43a.567.567 0 0 1-.41.574.566.566 0 0 1-.675-.197l-9.475-12.064v11.674c-.007.234-.081.351-.186.442a.652.652 0 0 1-.42.147.656.656 0 0 1-.423-.147c-.105-.091-.18-.208-.186-.442v-13.43c0-.393.287-.593.59-.609zm-48.946.004h8.64c.244 0 .364.074.457.178a.66.66 0 0 1 .151.43.66.66 0 0 1-.151.43c-.093.106-.213.18-.457.18h-8.033v5.509h5.166c.254-.008.376.064.471.169a.664.664 0 0 1 .155.438c0 .17-.06.333-.155.437-.095.105-.217.179-.47.171h-5.167v5.504h8.017c.234.007.353.081.444.186a.651.651 0 0 1 .147.42.657.657 0 0 1-.147.423c-.091.105-.21.179-.444.186h-8.624a.6.6 0 0 1-.609-.607V57.32a.603.603 0 0 1 .609-.609zm16.318 0h5.756c2.442 0 4.447 2.007 4.447 4.45 0 2.442-2.005 4.446-4.447 4.446h-5.146v5.158c0 .244-.075.365-.18.458a.656.656 0 0 1-.428.15.66.66 0 0 1-.43-.15c-.105-.093-.179-.213-.179-.458V57.32a.6.6 0 0 1 .607-.609zm16.325 0h8.64c.244 0 .364.074.457.178a.66.66 0 0 1 .151.43.66.66 0 0 1-.15.43c-.094.106-.214.18-.458.18h-8.033v5.509h5.128c.234.007.353.081.444.186a.651.651 0 0 1 .147.42.657.657 0 0 1-.147.423c-.091.105-.21.179-.444.186h-5.128v5.504h8.008c.234.007.353.081.444.186a.651.651 0 0 1 .147.42.657.657 0 0 1-.147.423c-.091.105-.21.179-.444.186H99.52a.599.599 0 0 1-.606-.607V57.32a.6.6 0 0 1 .606-.609zm-91.21.002h.009c2.054 0 3.87.741 5.223 2.093.157.168.191.303.182.44a.656.656 0 0 1-.196.403.656.656 0 0 1-.403.196c-.139.01-.275-.022-.446-.184l.01.01c-1.133-1.134-2.598-1.745-4.37-1.745-3.522 0-6.113 2.591-6.113 6.113 0 3.522 2.591 6.112 6.113 6.112 1.755 0 3.238-.697 4.387-1.758l.004-.004.002-.004c.181-.173.321-.2.462-.188a.66.66 0 0 1 .407.216c.114.124.18.283.182.424.001.141-.038.276-.225.442l-.004.004-.002.004c-1.341 1.238-3.134 2.081-5.213 2.081-4.134 0-7.328-3.194-7.328-7.327 0-4.13 3.191-7.323 7.318-7.328zm40.935 1.21V70.15h4.19c3.523 0 6.113-2.589 6.113-6.11v-.006c0-3.523-2.59-6.113-6.113-6.113zm34.558.007v.496l.002 5.967h5.16c1.01-.027 1.824-.441 2.356-1.052.532-.611.789-1.4.789-2.18 0-.782-.257-1.57-.79-2.18-.531-.612-1.345-1.024-2.356-1.051h-.007zm-33.566.985h3.198c3.054 0 5.12 2.066 5.12 5.12v.006c0 3.053-2.066 5.118-5.12 5.118h-3.198zm34.559.007h4.145c.762.022 1.277.304 1.632.711.356.41.544.965.544 1.528 0 .562-.188 1.12-.544 1.529-.356.409-.871.69-1.636.71h-4.141Zm-54.421 2.134-.275.184-4.136 2.766 4.411 2.95 4.41-2.95zm-10.093.353V66.6l3.886-2.596zm20.188 0-.771.515-3.115 2.082 3.886 2.597zm-10.095.839 2.626 1.758-2.626 1.755-2.626-1.755zm-9.1 1.017 1.106.74-1.107.739zm18.203 0v1.48l-1.107-.74zM25.06 64.612l-.275.184-4.097 2.742 9.188 6.127v-5.836zm10.634 0-.275.184-4.543 3.031v5.836l9.19-6.124zM25.06 65.806l3.824 2.552v3.454l-6.411-4.275zm10.632 0 2.587 1.73-6.41 4.274v-3.452z"/>
</svg>);
}