const React = require("react");
module.exports = function ValaPlainWordmarkIcon({size = "1em", color = "#a56de2", ...props}){
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
	<path d="m23.87 38.304c-5.6438-1e-6 -11.044 1.8153-16.201 5.4452-2.2576 1.6378-4.1058 3.5189-5.5445 5.6438-1.4165 2.1027-2.1244 4.2938-2.1244 6.5736 0 1.2394 0.1547 2.2799 0.46458 3.121 0.90747 2.324 3.176 3.4857 6.8059 3.4857 0-0.13279-0.05473-0.28749-0.16546-0.46458-0.50905-0.92963-0.76371-2.3131-0.76371-4.1501 0-3.7848 0.88516-6.9501 2.6558-9.4954 1.7928-2.5453 4.2831-4.4155 7.4703-5.6107l1.0953 46.446h9.7932l18.891-50.662h-4.7477l-14.309 41.633-0.5976-41.832c-0.8853-0.08889-1.793-0.13366-2.7226-0.13366zm70.652 3.3799-10.06 1.3613-7.2711 34.063c-0.0065 0.03118-0.01043 0.0598-0.01688 0.09084-1.2607 4.2099-3.0885 6.3173-5.4835 6.3173-1.8592 0-2.7888-0.97409-2.7888-2.9218 0-0.68615 0.09997-1.4165 0.29912-2.1912l4.8801-23.108h-9.7938l-0.73061 3.6187v-0.49767c0-0.99602-0.43122-1.8148-1.2945-2.4566-0.86324-0.66398-2.2686-0.996-4.2163-0.996-3.7183 0-6.8946 1.2726-9.5285 3.8179-2.6339 2.5453-4.6594 5.7654-6.0759 9.6608-0.64181 1.7707-1.1176 3.5525-1.4275 5.3453-0.30988 1.7707-0.46458 3.5525-0.46458 5.3453 0 1.7707 0.25466 3.3533 0.7637 4.7477 1.4165 3.8734 4.0944 5.8099 8.0341 5.8099 3.9619 0 7.4256-2.0803 10.391-6.2414 0.44265 4.1611 2.6673 6.2414 6.6735 6.2414 4.2554 0 7.7285-1.9646 10.419-5.8916 0.28371 1.7237 0.92204 3.047 1.92 3.9658 1.4165 1.2837 3.0211 1.9258 4.8139 1.9258 4.8108 0 8.6513-2.0784 11.524-6.229 0.04574 0.1429 0.09195 0.2852 0.14275 0.42436 1.4166 3.8734 4.139 5.8099 8.1672 5.8099 4.028 0 7.4476-2.1021 10.258-6.3069 0.26561 2.0139 0.97416 3.5743 2.125 4.6809 1.151 1.0846 2.6227 1.6267 4.4155 1.6267 1.8149 0 3.3093-0.64208 4.4823-1.9258 0.66409-0.75253 1.4718-2.4016 2.4235-4.9469-0.39843 0.19915-0.89673 0.29912-1.4943 0.29912-1.8592 0-2.7888-0.77492-2.7888-2.3242 0-0.81892 0.1-1.6157 0.29912-2.3904l4.88-23.108h-9.7938l-0.72996 3.6193v-0.49832c0-0.99602-0.43187-1.8148-1.2951-2.4566-0.86325-0.66398-2.2686-0.996-4.2163-0.996-3.7183 0-6.8946 1.2726-9.5285 3.8179-2.6339 2.5453-4.6587 5.7654-6.0752 9.6608-0.64181 1.7707-1.1183 3.5525-1.4281 5.3453-0.30988 1.7707-0.46458 3.5525-0.46458 5.3453 0 0.04536 2e-3 0.0892 0.0025 0.13431-0.42881 0.78665-0.95205 1.4951-1.5761 2.1192-1.1288 1.151-2.3569 1.726-3.6849 1.726-1.8371 0-2.7557-0.76324-2.7557-2.2905 0-0.79686 0.08829-1.6052 0.26538-2.4241zm-34.65 17.496c1.2616 0 2.0803 0.33202 2.4566 0.996 0.39843 0.64192 0.5976 1.1731 0.5976 1.5936l-3.2534 15.338c-0.4206 1.8593-1.1838 3.3317-2.2905 4.4161-1.1066 1.0624-2.3354 1.5936-3.6855 1.5936-0.73047 0-1.339-0.24363-1.8259-0.73061-0.84108-0.79686-1.2614-2.2022-1.2614-4.2163 0-1.0402 0.05473-2.0253 0.16546-2.9549 0.73037-6.0866 2.5348-10.757 5.4121-14.011 1.1952-1.3501 2.4233-2.0251 3.6849-2.0251zm53.919 0.0045c1.2616 0 2.0803 0.33202 2.4566 0.996 0.39844 0.64192 0.59825 1.1731 0.59825 1.5936l-3.254 15.338c-0.4206 1.8593-1.1838 3.331-2.2905 4.4155-1.1066 1.0624-2.3354 1.5942-3.6855 1.5942-0.73047 0-1.339-0.24363-1.8259-0.73061-0.84108-0.79686-1.2614-2.2028-1.2614-4.2169 0-1.0402 0.0554-2.0246 0.16611-2.9542 0.73036-6.0866 2.5341-10.757 5.4115-14.011 1.1952-1.3501 2.4233-2.0251 3.6848-2.0251z"/>
</svg>);
}