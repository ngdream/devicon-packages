import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'ClarityPlainWordmarkIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#13171a'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m11.467 46.045c-6.3334 0-11.467 5.1454-11.467 11.492v12.926c0 6.3467 5.1334 11.492 11.467 11.492h12.898c6.3335 0 11.467-5.1455 11.467-11.492v-12.926c0-6.3468-5.1333-11.492-11.467-11.492h-12.898zm50.457 3.9648-0.037109 17.717c-0.096909 1.3059 0.31258 2.6001 1.1426 3.6113 0.42528 0.39088 0.9245 0.69072 1.4688 0.88281 0.54425 0.19187 1.1217 0.27027 1.6973 0.23242 0.70216-0.001514 1.403-0.075778 2.0898-0.22266v-2.373c-0.49406 0.087177-0.99272 0.14003-1.4941 0.1582-0.33334 0.034826-0.6705-0.011683-0.98242-0.13477-0.31193-0.12308-0.59034-0.31896-0.81055-0.57226-0.40797-0.75689-0.57609-1.6196-0.48242-2.4746v-16.824h-2.5918zm37.877 0c-0.25568-0.005343-0.50966 0.042955-0.74609 0.14062-0.23644 0.097688-0.4511 0.24337-0.62891 0.42773-0.18279 0.17701-0.32822 0.38971-0.42578 0.625-0.09734 0.23529-0.14472 0.48748-0.14062 0.74219-0.005408 0.25625 0.043065 0.51107 0.14062 0.74805 0.097342 0.237 0.24191 0.45081 0.42578 0.62891 0.17781 0.18434 0.39247 0.33006 0.62891 0.42773 0.23643 0.097661 0.49041 0.14592 0.74609 0.14062 0.25331 0.006749 0.50466-0.040832 0.73828-0.13867 0.23384-0.09784 0.44414-0.24446 0.61719-0.42969 0.18062-0.17969 0.32172-0.39395 0.41602-0.63086 0.09409-0.23691 0.13885-0.49118 0.13085-0.74609 0.00649-0.25337-0.03871-0.50503-0.13281-0.74023-0.09431-0.23522-0.23452-0.44836-0.41406-0.62695-0.17305-0.18525-0.38335-0.33185-0.61719-0.42969-0.23362-0.097845-0.48497-0.14547-0.73828-0.13867zm6.3867 2.7168v2.7266c0.03591 0.54693-0.11735 1.0892-0.43555 1.5352-0.22107 0.20245-0.48421 0.35572-0.76953 0.44727-0.28511 0.09159-0.58559 0.12006-0.88281 0.083984h-0.66016v2.3438h2.5078v7.5664c-0.12503 1.3644 0.27246 2.7242 1.1133 3.8047 0.45773 0.4216 0.99777 0.74371 1.5859 0.94531 0.58816 0.20182 1.2127 0.27869 1.832 0.22656 0.73115-0.005408 1.4602-0.067006 2.1816-0.18555v-2.4102c-0.56848 0.089987-1.1414 0.14306-1.7168 0.1582-0.34134 0.033529-0.68615-0.009716-1.0078-0.12891-0.32167-0.11919-0.61231-0.31048-0.84961-0.55859-0.42203-0.7424-0.6067-1.5964-0.5293-2.4473v-6.9707h3.6211v-2.3438h-3.6211v-4.793h-2.3691zm-86.27 0.91992c0.16904-0.008074 0.33928-0.00681 0.50976 0.001954v1.7031c-0.44516-0.024509-0.89054 0.044703-1.3066 0.20508-0.41613 0.1604-0.7934 0.40747-1.1074 0.72461-0.5982 0.84757-0.88452 1.8768-0.80859 2.9121v9.5762c-0.07593 1.0353 0.21039 2.0646 0.80859 2.9121 0.31056 0.33983 0.69189 0.60603 1.1172 0.78125 0.4253 0.17543 0.88442 0.25492 1.3438 0.23242v1.666c-0.68362 0.03959-1.368-0.056727-2.0137-0.28516-0.64568-0.22864-1.2409-0.58374-1.748-1.0449-0.49223-0.55572-0.8646-1.2067-1.0977-1.9121-0.23308-0.70562-0.3218-1.451-0.25781-2.1914v-9.8555c-0.06344-0.74038 0.024751-1.486 0.25781-2.1914 0.23304-0.70543 0.60589-1.3559 1.0977-1.9121 0.88765-0.8017 2.0218-1.2657 3.2051-1.3223zm-5.4414 0.001954v1.7031c-0.44375-0.02438-0.88814 0.044662-1.3027 0.20508-0.41459 0.16042-0.79124 0.40771-1.1035 0.72461-0.60146 0.84634-0.88965 1.8757-0.81641 2.9121v9.5762c-0.07325 1.0364 0.21494 2.0657 0.81641 2.9121 0.30976 0.34091 0.6917 0.60777 1.1172 0.7832 0.42551 0.17522 0.88427 0.25427 1.3438 0.23047v1.666c-0.67607 0.0344-1.3509-0.064543-1.9883-0.29297-0.63744-0.22843-1.2236-0.5809-1.7246-1.0371-0.49389-0.55507-0.87077-1.2067-1.1055-1.9121-0.23468-0.70562-0.3225-1.4503-0.25977-2.1914v-9.8555c-0.069156-0.73714 0.011338-1.4803 0.23633-2.1855 0.22501-0.70519 0.58921-1.3578 1.0723-1.918 0.50174-0.45452 1.0892-0.80449 1.7266-1.0312 0.6374-0.22674 1.3129-0.3248 1.9883-0.28906zm11.412 0c0.16901-0.008169 0.33931-0.008638 0.50977 0v1.7031c-0.44669-0.025239-0.89284 0.044686-1.3105 0.20508-0.4177 0.1604-0.79789 0.40673-1.1133 0.72461-0.59032 0.86375-0.85992 1.907-0.76172 2.9492v9.5391c-0.07593 1.0353 0.21048 2.0646 0.80859 2.9121 0.31106 0.3394 0.69213 0.60604 1.1172 0.78125 0.42528 0.17522 0.88451 0.25427 1.3438 0.23242v1.666c-1.3647 0.06554-2.7008-0.41225-3.7148-1.3301-0.50034-0.55247-0.88251-1.2028-1.125-1.9082-0.24264-0.7054-0.33947-1.4512-0.28516-2.1953v-9.8555c-0.06502-0.73831 0.017972-1.4805 0.24609-2.1855 0.22817-0.70504 0.5951-1.3584 1.0801-1.918 0.88808-0.80092 2.022-1.2631 3.2051-1.3203zm51.115 3.4609c-1.2901-0.013217-2.5558 0.34564-3.6484 1.0332-1.095 0.69466-1.9837 1.6711-2.5723 2.8281-0.62688 1.1891-0.94547 2.5166-0.92773 3.8613-0.010167 1.3202 0.30842 2.6218 0.92773 3.7871 0.59682 1.1612 1.4829 2.1497 2.5723 2.8672 1.1017 0.72574 2.3966 1.1026 3.7148 1.0801 0.96325 0.013412 1.9087-0.24794 2.7305-0.75195 0.82157-0.50402 1.486-1.23 1.9121-2.0957v2.502h2.5625v-14.701h-2.5625v2.4844c-0.4242-0.8846-1.0947-1.6294-1.9297-2.1426-0.83476-0.51321-1.8-0.77378-2.7793-0.75195zm-24.107 0.097656c-0.21788-0.005893-0.43696-0.002122-0.65625 0.013672-1.2596-0.006555-2.4914 0.36649-3.5371 1.0703-1.0718 0.69487-1.9457 1.6563-2.5352 2.791-0.61715 1.1828-0.93709 2.4993-0.92969 3.834 0.002596 1.2979 0.32249 2.5761 0.92969 3.7227 0.59617 1.1588 1.4781 2.1447 2.5625 2.8652 1.0385 0.70497 2.2649 1.0818 3.5195 1.0801 1.1302 0.020117 2.2503-0.21594 3.2773-0.68945 0.91047-0.42246 1.7044-1.0597 2.3125-1.8594 0.58016-0.78198 0.95683-1.6976 1.0957-2.6621h-2.5918c-0.1962 0.82386-0.68343 1.5476-1.373 2.0371-0.74824 0.49342-1.632 0.74406-2.5273 0.7168-0.65046 0.036341-1.2999-0.084412-1.8945-0.35156-0.59444-0.26715-1.1159-0.67266-1.5215-1.1836-0.82503-1.0608-1.252-2.3786-1.207-3.7227-0.005622-0.88984 0.17454-1.7701 0.5293-2.5859 0.3301-0.77008 0.85808-1.4382 1.5312-1.9355 0.69978-0.50187 1.5462-0.75934 2.4062-0.73438 1.0243-0.073028 2.0409 0.22039 2.8691 0.82812 0.67231 0.591 1.0849 1.4226 1.1504 2.3164h2.6094c-0.10989-1.4976-0.77217-2.9-1.8574-3.9355-1.1654-1.0074-2.637-1.574-4.1621-1.6152zm42.057 0.087891c-1.0098-0.046746-2.0113 0.20645-2.8789 0.72656-0.77744 0.53473-1.3987 1.2665-1.8008 2.1211v-2.623h-2.5918v14.701l2.5918-0.027344v-6.5137c0-3.8523 1.5216-5.7871 4.5859-5.7871 0.41944 0.002769 0.83725 0.055885 1.2441 0.1582v-2.5684c-0.37163-0.12241-0.75908-0.18661-1.1504-0.1875zm3.5371 0.1875v14.738h2.5918v-14.738h-2.5918zm15.312 0 5.8125 14.738-2.8691 7.5h2.6191l8.6719-22.238h-2.6836l-4.4668 11.51-4.4277-11.51h-2.6562zm-36.248 2.1562c0.48474 0.027369 0.96369 0.13938 1.4121 0.33203 0.59811 0.25685 1.1272 0.65005 1.5469 1.1484 0.83692 1.0826 1.263 2.4289 1.1992 3.7969 0.06165 1.3448-0.36532 2.6672-1.1992 3.7227l-0.027344-0.009766c-0.44842 0.45794-0.98433 0.8198-1.5762 1.0645-0.59184 0.24487-1.2269 0.36718-1.8672 0.35938-0.64029-0.007787-1.2736-0.14515-1.8594-0.4043-0.58578-0.25915-1.1136-0.63454-1.5508-1.1035-0.84947-1.0499-1.2928-2.3696-1.252-3.7207-0.055593-1.3565 0.39757-2.6852 1.2715-3.7227 0.42268-0.48617 0.94939-0.87004 1.541-1.123 0.59184-0.253 1.2343-0.36865 1.877-0.33789 0.16235-0.009804 0.3228-0.011076 0.48438-0.001953z"/>
</svg>;
  }
});