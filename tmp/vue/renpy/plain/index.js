import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'RenpyPlainIcon',
  props: {
    size: {
      type: [String, Number],
      default: '1em'
    },
    color: {
      type: String,
      default: '#ff7f7f'
    },
  },
  render() {
    const props = {
      width: this.size,
      height: this.size,
      ...(this.color ? { fill: this.color } : {})
    };
    return <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m54.797 0.76172c-0.50513-0.0016845-0.95922 0.11551-1.457 0.36328-13.129 6.5408-18.129 16.323-19.514 24.771-3.9491 2.7998-7.1857 5.6856-10.395 9.0879-0.55729 0.64304-0.60631 1.1148-0.19727 1.4141 1.0373 0.75056 6.1118 1.5512 9.4199 1.8223-0.64551 8.3674-2.1173 16.459-3.7988 24.383l1.4648-1.8613-0.47461 2.2168 4.9863-0.07813c0.45382-0.86908 0.81198-1.7188 0.94922-2.6934 0.27409 1.0013 0.43824 1.9487 0.51562 2.8516l0.75195-0.55469 0.35547 0.71289 1.1719 0.46094c-0.49766 1.1125-0.91501 2.659-1.0938 4.8125l-2.3027 2.7559c-1.0843 0.05237-2.1871 0.48507-3.375 2.6094-0.11002 0.22096 0.07392 0.86628 0.17969 1.0371 0.39747 0.48249 0.78871 0.95705 0.75 1.3066-0.30448 3.0849-1.2994 6.6885-1.9785 10.055-1.3234 1.4017-2.6669 2.787-3.168 4.9082v5.4258c-0.12229 0.80494 0.23496 1.0548 0.80078 1.4648 2.624 1.8996 6.0877 3.884 8.0664 4.2715 0.87098 0.0415 3.8812-1.939 6.9277-3.8398l2.375 0.03906c1.3905 1.6736 3.104 2.7602 4.9922 2.8457 0.11638 1.1479 0.18716 2.2252 0.29102 2.3984l0.0059 4e-3c-0.3753 0.16747-0.74775 0.45269-0.83789 0.88867-0.0996 0.48172 0.42393 0.85886 0.84766 1.0898-1.1567 0.4572-2.3237 1.233-3.3047 2.2207-1.2397 1.2482-2.1852 2.8409-2.3711 4.5723-1.6e-4 9.6e-4 0 3e-3 0 4e-3 -0.12776 1.3552 0.46336 2.8859 1.252 3.9219l2e-3 2e-3c1.9105 2.4696 5.3466 3.3216 9.0586 3.1602 3.4811-0.1514 7.2313-1.1934 10.312-2.709 0.80431 0.42034 2.4408 0.16234 4.6602-0.47461-0.82728 1.0492-1.811 2.6145-2.0312 5.5488-0.21625 2.561 1.4984 4.4432 2.8906 5.1856 0.88211 0.30591 0.78744-0.36212 0.04492-1.2324-0.89345-1.0306-1.3587-1.945-1.3691-2.8281-0.0213-1.7997 2.0382-3.2105 5.6641-3.3867 4.4495-0.25653 11.154 4.2209 16.863 3.7617 0.75015-0.0618 1.4589-0.26106 2.207-0.57812 5.5536-2.1055 9.7163-5.302 10.094-11.188 0.15788-4.8818-3.5278-8.5303-7.2129-12.18-3e-5 -0.0691-0.0074-0.14676-0.02148-0.23438-0.50069-1.5674-1.5041-2.3824-2.6328-3.0078-0.69522-0.2108-1.0471-0.24542-1.584-0.17969-1.2832 0.16622-3.0083 0.6248-3.75 0.7207-0.29777-0.28156-0.58977-0.53919-0.90039-0.69531 2.5967-3.889 4.3951-8.0187 4.6641-12.369 0.28494-3.015-0.66129-8.3487-2.8457-12.867-1.0927-2.2603-2.4975-4.3141-4.2383-5.748-0.75591-0.56875-1.479-1.0516-2.2344-1.3809 1.089-0.98052 1.8797-2.13 3.1797-4.4258-0.13901 2.0161-0.3746 3.855-0.80664 5.5781 0.58878-0.4168 1.2598-0.83434 1.7031-1.5195-0.0271 0.64565 0.08266 1.1076 0.2793 1.4551 2-2.3226 2.7372-4.2585 2.8555-5.7285 0.17034 2.4729 0.16101 4.6933-0.16797 6.2051 2.0653-2.0228 2.5421-3.8686 3.918-9.8555l0.27734 6.9668c0.36956-1.3396 0.49618-2.0815 0.73242-3.6426 1.0339-14.777-0.23447-24.338-2.2168-30.379 2.2143-1.6252 3.7323-2.8278 6.0742-5.3027 0.21745-0.21395 0.26136-0.45891 0.10742-0.6582-2.4246-2.0312-7.3547-4.4958-14.633-6.0312-7.1237-6.9658-13.178-13.428-29.791-15.541-0.36064-0.083049-0.68332-0.12752-0.98633-0.12891zm0.26758 0.75586c0.24468 2e-3 0.49232 0.019545 0.74609 0.046875 8.785 0.94964 18.602 3.665 29.225 15.295 5.1384 1.4864 10.682 2.1929 14.576 5.8906-17.272-3.8129-37.86-2.7926-65.863 9.0254 6e-3 -0.04166 0.01013-0.08335 0.01563-0.125l-0.01758 0.125c-2.7911 1.1779-5.6552 2.461-8.5977 3.8594 2.8478-1.1507 5.6862-2.3135 8.543-3.4531l-0.79883 5.8809c-3.2611-0.58168-9.0897-1.617-8.9453-2.4551-0.01288-0.91285 4.0121-4.7222 10.549-9.3203 1.7704-12.787 11.071-21.398 19.33-24.609 0.42797-0.12234 0.83044-0.16379 1.2383-0.16016zm2.0215 0.8125c6.8435 2.0531 11.739 8.911 15.152 12.854-3.669-5.142-6.6175-10.472-15.152-12.854zm-3.6895 0.3457c-8.3883 6.2647-8.9819 12.522-10.529 18.129 2.1859-7.0723 4.8453-13.438 10.529-18.129zm19.365 13.436c-11.754 0.02024-23.81 2.7728-36.305 9.4492 11.68-5.6842 24.734-10.416 47.021-8.7344-3.5448-0.4714-7.1169-0.72086-10.715-0.71484zm8.9199 5.2402h2e-3c2.1378-0.0013 4.3292 0.06219 6.5781 0.19727 5.2293 7.1948 6.3733 11.438 5.6289 17.17-0.15892-1.862-0.32007-4.4358-1.3438-6.1055 0.18363 1.67-0.03142 3.1204-0.12305 4.6562 0.12191-0.92359 0.30179-2.6389 0.35742-3.5625 0.89966 2.1032 0.84491 5.3429 0.4375 9.877 1.5872-7.5776 2.5614-12.761-4.9473-22.035 0.76774 0.04623 1.5427 0.10091 2.3242 0.16406 6.3232 9.9476 5.9828 26.831 5.2598 36.674-0.14239-2.5018-0.42659-4.5431-0.18555-8.291-0.83124 5.2645-1.4887 10.996-3.8398 14.406 0.17541-2.2811-0.05014-5.5237-0.47461-6.9648 0.0452 2.8773-1.5273 5.7868-2.5039 6.5645-0.15771-0.7557 0.04499-1.5119 0.25195-2.2676-0.75994 1.2281-1.3608 1.7297-2.0488 2.3828 0.62445-2.3326 0.77367-3.9732 0.80859-6.4531-1.051 2.4459-2.3229 4.3812-3.832 5.9023 0 6.52e-4 -0.0029 0.0014-0.0039 2e-3 -1.2428-0.21874-2.5549-0.39671-3.7207-0.27344-1.234 0.10588-2.2754 0.31937-3.1562 0.61328l-0.02344-1.002c1.2967-0.70783 2.6027-1.5224 3.9609-2.4746 0.15828-0.12246 0.47121-0.53719 0.56641-0.75195l4.1992-10.596-4.5078 10.436c-0.13017 0.29002-0.42362 0.77649-0.70703 0.95508-3.561 2.5284-7.1395 4.3204-12.029 5.6309-2.6866 0.34448-9.16-0.3966-10.998-0.875-0.68478-0.65594-1.1456-1.6075-1.6191-2.3496-1.5627-2.1443-2.3004-3.137-3.7285-3.6445-0.34815-0.10229-0.64574-0.23708-0.96289-0.22656-1.2573 0.14902-2.2359 0.94685-3.1855 1.4863-2.2814-11.11-2.4226-16.645-1.5352-21.387 1.3186-2.2529 2.72-3.9726 4.1797-5.3086-0.14417 0.40867-0.22511 0.56452-0.33594 0.83984 0.26701-0.52491 0.70063-1.1546 0.69922-1.5117-1.5173 1.5827-3.0615 3.0741-4.3984 5.2578 0.43171-2.0385 1.0485-3.9746 1.7578-6.2012-1.8392 5.3586-4.4645 10.369-0.61133 28.443-0.37136 0.19167-0.7406 0.33166-1.125 0.36523-1.8495 0.09741-3.5519-0.72475-5.6152-0.26758-0.41367 0.18653-1.4244 0.68256-2.291 2.2969l-1.2363-0.2832c-0.1708-0.58054-0.20437-1.1597-0.27734-1.7402-0.23681 0.70205-0.52874 1.183-0.87109 1.4629-0.11748-1.6574-0.20253-2.623-0.59375-3.7207-0.39583 1.2336-0.79168 2.7992-1.1875 3.5625l-4.2344-0.03906c0.60151-1.3807 0.4737-3.1995 0.59375-4.8691-0.38236 1.1364-0.77904 2.22-1.291 2.8379 2.2884-9.1686 2.7453-18.744 3.9531-28.152 14.295-5.7023 29.07-10.815 47.986-10.83zm10.742 15.918c-0.4493 2.8214-0.68676 4.8494-2.2148 6.4531 0.44913-5.3964-0.57391-7.8727-1.2676-9.5-0.34821 4.0656-0.17731 7.7067-2.7305 13.576-0.0697-0.02171-0.11439-0.33986-0.1582-0.67188-0.0465 0.4905-0.10658 0.9844 0 1.4238 1.7941-3.0243 2.5156-7.2158 3.127-13.457 1.2089 3.3369 1.0563 6.946 0.59375 10.172 1.5392-1.9564 2.4204-4.5288 2.6504-7.9961zm-1.7617-15.551c2.8825 0.23459 5.8601 0.58476 8.9434 1.0664-1.5845 2.2094-3.9582 3.8907-5.7207 5.209-0.97578-2.8427-2.1095-4.8705-3.2227-6.2754zm-24.734 8.3477c-1.7614 4.8291-4.4962 9.6575-3.7051 14.486 0.20871-1.2465 0.0384-2.2713 1.0703-3.998-0.17795 4.1993 0.14761 5.1035 0.51367 7.0078 0.69529-3.0154 1.888-5.8375 3.4043-8.6289-1.233 2.253-2.5051 4.5361-3.4434 7.5996-0.596-2.3324-0.26732-4.7384-0.27734-6.8086-0.44811 0.53299-0.84269 1.1548-1.0684 2.0586 0.16765-3.9056 2.301-7.811 3.5059-11.717zm0 0c-1.8796 2.8408-2.9313 4.4179-4.248 7.3516-0.20146-0.20942-0.40457-0.40765-0.61133-0.59375 0.72215-2.0433 1.6013-3.6462 2.4258-5.4746-1.067 1.7865-1.9393 3.5663-2.5801 5.3398-0.42511-0.36774-0.8621-0.68279-1.3145-0.9375 1.1884-1.5004 2.4775-2.9234 3.8945-4.4023-1.4491 1.4923-2.7623 2.8707-3.9805 4.3535-0.82036-0.44585-1.6898-0.69168-2.627-0.68164 0.15114-0.37584 0.30501-0.75324 0.46289-1.1367-0.16282 0.35971-0.338 0.74008-0.51562 1.1387-0.44906 0.0092-0.91283 0.07708-1.3945 0.20898 0.10995-0.15207 0.21938-0.3055 0.33008-0.45703-0.11376 0.15279-0.22641 0.30609-0.33984 0.45898-1.9516 0.53778-4.1862 2.1316-6.8301 5.168 0.49092-2.0158 1.1407-3.5967 1.8223-5.6621-0.95976 2.2736-1.5275 4.1159-1.9141 5.7676-0.2535 0.29329-0.51038 0.5979-0.77148 0.91797 0.25387-0.28418 0.50292-0.55471 0.74805-0.81641-0.33463 1.4509-0.5311 2.7572-0.73047 4.082 0.42933-0.77389 0.88904-1.5073 1.2129-2.4219-0.0338 1.533 0.13918 2.9622 0.70117 4.1973 1.0452-4.1371 3.129-7.5381 5.4414-10.777 0.5387-0.16971 1.0567-0.26189 1.5566-0.2832-0.95284 2.1803-1.9675 4.934-2.1367 8.4121-2.3092 0.3127-4.5326 1.9936-5.3477 6.582l1.5762 1.4512c-0.02991-0.10521-0.04267-0.20336-0.06836-0.30664-0.0706-0.68719-0.0698-1.3053-0.0293-1.8809 0.10179 0.46288 0.2662 0.95842 0.52734 1.498 0.69827 1.7744 2.5882 3.049 4.5527 2.8906 1.9724-0.15913 5.0871-0.89673 4.9258-7.082l-0.01758-1.043 0.33398 0.15625c-0.6388-0.94675-3.5113-2.5823-6.3008-2.2773 1.4158-3.0835 2.9562-5.5407 4.7188-7.8008 0.4869 0.23409 0.96632 0.53106 1.4453 0.88086-0.77957 2.2165-1.1972 4.4208-1.1855 6.6133 0.45886-2.0239 1.2016-4.0132 2.0742-5.9062 0.17545 0.15024 0.35261 0.30646 0.5293 0.46875-0.1623-0.18962-0.32682-0.37349-0.49219-0.54883 1.2788-2.7592 2.8258-5.3078 4.1562-7.4473zm-8.5781 3.8184c0.323-0.71365 0.60704-1.3574 0.79883-1.9297-0.26966 0.651-0.53753 1.295-0.79883 1.9297zm0.79883-1.9297 0.29297-0.75586-0.54492 0.6582 0.36328-0.39258zm9.0625 6.9785c0.13887-0.16985 0.27168-0.37121 0.43555-0.41602-0.20962 1.9402-0.34451 4.2767-0.17773 6.3555 0.36398-1.8833 0.48666-4.9067 2.0703-8.1172-0.45021 3.1312-0.96319 6.1862-0.20312 9.2383 0.28436 1.1418 0.74845 2.5992 1.459 3.7441 1.9618-1.7664 2.969-4.2251 3.3711-6.123 0.29948 0.55097 0.23957 1.6118 0.35547 2.377 1.6565-2.6668 2.6522-6.7354 2.7422-12.162 0.48487 1.4546 0.90442 3.0948 1.2461 4.7285-0.34917 0.2334-0.69698 0.47212-1.0469 0.69141 0.35181-0.21552 0.70301-0.44285 1.0547-0.66016 0.44399 2.129 0.74408 4.2211 0.89062 5.8984-2.412-0.5545-4.2231 0.85085-6.0859 3.5449 0.38772-0.31764 0.7072-0.56634 1.0762-0.86523-0.74069 1.5684-0.97345 3.9272-0.58008 5.0469 0.20046 0.43613 0.49092 0.78548 0.83203 1.0566 0.0732 0.061 0.15309 0.1135 0.23438 0.16406 0.12312 0.07945 0.25034 0.14881 0.38281 0.20898 0.5007 0.22745 1.0559 0.32549 1.6016 0.27344 2.2003-0.19739 3.8661-2.2189 4.2461-5.0723 0.03767-0.36641 0.06069-0.61436 0.08984-0.90039-0.4164 0.20826-1.0105 0.01629-1.3398-0.33594-0.38204-0.40862-0.51235-1.4397-0.11914-1.8125 0.14948-0.14174 0.33766-0.1877 0.53125-0.19336 1.4241 0.82709 2.2793 2.6496 1.9707 4.9512-0.09038 0.67413-0.494 0.99307-0.78516 1.7617l1.584-1.3809c0.15864-2.7957-0.61119-4.531-1.5703-5.4824 0.66396-2.2469 1.038-4.9298 1.3262-7.7402 0.29084 0.13293 0.58501 0.31815 0.88477 0.56445 0.39409 3.2261 0.52611 7.713-0.04102 11.018 0.86012-0.8694 1.5094-2.0839 1.959-3.625 0.056 0.26316 0.11199 0.34853 0.16797 0.51758-0.0507-0.35512-0.05751-0.75344-0.07031-1.1465-0.32518 1.3773-1.0184 2.7283-1.6934 3.2324 0.16354-3.1625 0.23717-6.3544-0.11914-9.8203 0.84737 0.76978 1.7344 2.0367 2.6758 4.002-0.94616-2.244-1.8476-3.6261-2.7188-4.4141-0.2117-1.8889-0.55497-3.862-1.082-5.957 0.0349 1.6198 0.0097 3.4272-0.09766 5.2246-1.3925-0.49175-2.7192 0.29666-4.041 1.1758-0.45012-2.2538-1.0419-4.6786-1.7578-6.873 0.55654 5.1916-0.48528 11.569-2.2969 13.875 0.0742-1.4381-0.09363-1.8679-0.47461-2.4551-0.23836 2.5509-2.3067 5.8359-3.2715 6.2656-0.518-0.77819-0.95265-2.1972-1.2363-3.0508-0.81335-2.4472-0.6159-5.4666 0.19726-10.555-0.9506 1.8763-1.5853 4.1503-2.1797 6.3828-0.0935-1.093 0.13052-2.771 0.25195-4.2266-0.27184 0.32498-0.45211 0.71067-0.64844 1.0859zm15.854-3.9395c0.21055 0.65167 0.40832 1.6555 0.57031 2.8652-0.2685-0.21471-0.53364-0.37376-0.79688-0.48633 0.0789-0.78768 0.15325-1.5829 0.22656-2.3789zm-26.137 0.4082c0.82794 0.0052 1.612 0.20257 2.377 0.55664-1.6524 2.0467-3.1316 4.3111-4.5391 7.3457-0.15202-2.1022 0.75665-4.8558 1.9668-7.9004 0.065-2e-3 0.13084-2e-3 0.19531-2e-3zm-1.8398 0.29492c-2.334 3.1661-4.514 6.382-5.3086 10.043-0.64075-0.75976-0.59894-2.4469-0.75586-3.8633-0.31289 0.70568-0.5819 1.4562-1.0293 2.0273 0.14359-1.3072 0.34244-2.4008 0.57812-3.3887 2.5734-2.7309 4.6734-4.2314 6.5156-4.8184zm5.918 1.3066c0.21067 0.159 0.42153 0.32954 0.63281 0.50781-0.52138 1.1681-1.0858 2.5513-1.7598 4.3105 0.26656-1.9239 0.66211-3.469 1.127-4.8184zm20.506 0.42969v2e-3c0.0318-3.59e-4 0.0637-3.59e-4 0.0957 0 0.34101 0.0059 0.68752 0.07001 1.0391 0.20898-0.18941 2.8756-0.5965 5.693-1.2988 7.6855-0.52847-0.4728-1.1535-0.71941-1.8047-0.81836-0.13804-1.5172-0.43967-3.642-0.9082-5.9941 0.9425-0.57585 1.8903-1.0702 2.877-1.084zm-22.855 7.7441c0.13966-0.02468 0.29084 6e-3 0.43555 0.06055 0.06591 0.03577 0.13036 0.07264 0.19531 0.10938 0.09602 0.05652 0.19768 0.10884 0.27148 0.17774 0.30384 0.2837 0.55728 0.90737 0.30664 1.2539s-0.90073 0.3985-1.2715 0.10156-0.55294-1.236-0.2207-1.5586c0.08306-0.08065 0.18014-0.12631 0.2832-0.14453zm0.96875 4.3184c0.12715-0.06514 0.0866 0.23588 0.01758 0.75391-0.36688 1.457-1.6223 3.1216-3.4668 3.3164-1.5058 0.15903-2.9018-0.27822-3.7012-1.1191-0.10701-0.04028-0.20574-0.09196-0.27148-0.1582-0.12113-0.12205-0.17318-0.30531-0.16992-0.48242-0.03096-0.06343-0.07239-0.12127-0.09766-0.1875-0.28828-0.83146-7e-3 -0.64778 0.42383-0.32617 0.1164-0.05607 0.24564-0.08971 0.375-0.07031 0.07551 0.01132 0.14893 0.03707 0.21484 0.08203 0.14253 0.09722 0.25002 0.32732 0.28906 0.55859 1.8714 1.0589 3.6948 1.0189 5.9473-1.8223 0.22626-0.33396 0.36316-0.50584 0.43945-0.54492zm20.725 0.41602c0.03248 4e-3 -0.0026 0.16248-0.10352 0.53711-0.50716 1.3583-1.8943 3.1588-3.9746 2.9414-0.75891-0.0793-1.2682-0.35298-1.6113-0.70508-0.07524-0.03632-0.14465-0.0838-0.20312-0.14258-0.09364-0.09413-0.15762-0.25914-0.19336-0.43164-0.17458-0.38745-0.22378-0.79904-0.19531-1.1465 0.14122-0.95433 0.27267-0.46111 0.4707 0.12109 0.04645 0.10144 0.11293 0.18921 0.16797 0.28516 0.02188 6.39e-4 0.04246-7e-3 0.06445-0.0039 0.15193 0.02104 0.30295 0.09729 0.41406 0.20898 0.13471 0.13542 0.21537 0.40669 0.2168 0.65234 1.0599 0.84739 2.7272 0.74573 4.6465-1.9238 0.16832-0.24565 0.2683-0.39658 0.30078-0.39258zm-13.924 8.4844c-0.92542 0.0052-1.8518 0.10434-2.8066 0.27148-0.23988 0.05524-0.3323 0.078-0.35547 0.32422-0.0504 0.69434 0.45429 1.4594 0.72266 2.0078l-0.05859-0.13867c-0.25388-0.65821-0.46295-1.1726-0.45703-1.5605 0.0125-0.31238 0.13172-0.30591 0.32227-0.33789 1.4453-0.2164 2.8844-0.50919 5.1973-0.03516 0.10403 0.03197 0.17235 0.09394 0.17969 0.24024 0.0318 0.6526-0.19662 1.1898-0.43359 1.7734 0.28725-0.56884 0.61902-1.2064 0.71875-1.8535h2e-3c0.02231-0.07755 0.17356-0.26988 0.27148-0.3418-1.2079-0.27252-2.1916-0.31039-3.3027-0.34961zm-15.076 1.0156c0.51178-0.0066 1.0095 0.24287 1.3965 0.51758 1.1828 0.85869 2.574 2.6168 3.9707 4.793 0.35621 0.63587 0.77762 1.2937 1.2285 1.7363 1.0703 1.044 2.5947 2.0552 3.0273 3.1699 0.36056 0.94288-1.6683 4.395-2.959 6.3203 0.32373-0.99227 0.16711-2.0572-0.75391-3.127-0.53501-0.69172-1.3222-1.2187-2.2656-1.5898-1.1686-0.44036-2.5965-0.64517-3.6836-0.67969-0.53526-0.01464-1.0803 0.0013-1.627 0.04492-1.4114-7.9731 0.43974-9.0588 2.459-9.0508 1.1388 0.13496 2.2192 1.0384 2.7344 2.9004 0.51834 1.8735 0.30933 3.1728 0.11719 6.7852 0.30884-2.1597 0.78627-4.5024 0.0059-7.1152-0.81596-2.3239-1.9918-2.7852-3.0957-2.7852-0.30908 2.1e-5 -0.6121 0.03643-0.90039 0.07813-1.8054 0.344-2.799 2.9476-1.3242 9.1875-0.57081 0.04564-1.1417 0.12148-1.7051 0.22852-0.44145 0.08387-0.86494 0.18901-1.2676 0.3125 0.0744-6.2377-1.8652-8.7549-3.6992-8.6152-1.322 0.16003-2.8586 0.50652-3.1445 3.9844-0.0716 2.7294 1.4273 5.7868 2.4922 7.3613-1.929-3.2851-2.2629-5.3046-2.252-7.25 0.0109-1.9319 0.77775-3.2383 1.8418-3.666 1.9485-0.53553 4.3972-0.28092 4.7598 8.1855-0.4123 0.12656-0.80288 0.27339-1.1719 0.4375 0.28885-0.26035 0.32278-0.84423 0.19727-1.2812-0.0913 0.20896-0.29736 0.34362-0.52539 0.34375-0.31698 0-0.57422-0.25724-0.57422-0.57422s0.25724-0.57422 0.57422-0.57422c-0.23124-0.22068-0.49665-0.25356-0.71875-0.16016-0.4891 0.22646-0.47915 1.0443-0.30273 1.5156 0.16792 0.44868 0.5944 0.93498 1.0703 0.85938-0.94747 0.45873-1.737 1.0399-2.3418 1.7031-0.6341 0.69531-1.0654 1.4816-1.2676 2.3164-0.25395 0.84691-0.26207 1.5728-0.08398 2.1914-1.999-1.2929-5.0819-2.586-5.2695-3.8789-0.17508-1.1801 0.79116-2.7656 1.4629-4.1953 0.22674-0.38071 0.21148-0.6278 0.22266-1.0234 0.11212-3.8862 1.6061-6.8539 3.2129-7.6289 0.78535-0.28914 2.8493-0.03022 4.2344 0.16016 2.5452 0.4573 3.561-1.1224 5.4121-1.8379 0.16976-0.06749 0.34307-0.09748 0.51367-0.09961zm25.432 3.7812-0.0625 0.9707c-0.29673 0.12412-0.55708 0.24111-0.83984 0.32813l-1.3379-0.20703c0.74959-0.33183 1.494-0.69501 2.2402-1.0918zm3.7578 0.36133c1.1748-9e-3 2.446 0.2907 3.4922 0.75 0.74014 0.32988 1.4426 0.76344 2.0996 1.3047 1.6465 1.3563 3.015 3.3397 4.082 5.5469 2.134 4.4145 3.0568 9.7367 2.7891 12.559v0.0098c-0.25907 4.212-2.0228 8.252-4.584 12.084-0.30486 0.5743-0.7083 1.2864-1.0371 1.8594-3.1584 4.2699-7.193 8.2509-11.076 11.9-2.4291 2.122-5.2146 3.9905-7.7734 5.4609-0.90145 0.47439-1.9143 0.91082-2.748 1.3223-3.0131 1.4868-6.7198 2.5184-10.113 2.666-3.6048 0.15678-6.8236-0.68278-8.5625-2.9297-0.69896-0.9189-1.239-2.3708-1.1328-3.5039 0.1676-1.5554 1.0341-3.0397 2.2012-4.2148 1.0479-1.0551 2.3374-1.8548 3.5312-2.2402 0.89747-0.24605 2.471-0.48338 3.582-0.58399 2.0629-0.18933 4.2107-0.41709 8.6113-2.6348h2e-3c1.4298-0.76426 4.2083-3.1134 6.4961-5.6094 2.2878-2.496 4.5501-5.3729 5.8672-7.6641 1.71-2.9749 3.1037-5.6844 3.416-8.8145 0.12629-0.876-0.13422-2.5463-0.81059-4.3223-0.61383-1.6118-1.5728-3.305-2.9121-4.5332-0.22693-0.22245-0.44073-0.38144-0.71484-0.50586-0.55346-0.24976-1.1088-0.38178-1.6387-0.50586l-1.0918-0.69141c0.41843-1.5383 0.85716-2.9982 1.6797-3.9629 0.43211-0.49091 0.98215-0.95013 1.6953-1.3418 0.74148-0.35234 1.5664-0.92164 3.8574-1.3477 0.25683-0.03695 0.52188-0.05454 0.79297-0.05664zm-6.0371 0.95898 0.62891 0.20898c-0.55358 0.35764-1.0089 0.75863-1.3848 1.1855-1.1437 1.2993-1.5354 2.8138-1.7695 4.0137l-3.4121-2.166c-0.11935-0.06929-0.18596-0.09888-0.23047-0.0957-0.0445 0.0032-0.06732 0.03936-0.10156 0.10156l-0.052734 0.11328c-9e-3 -0.46517 0.04444-0.92319 0.14062-1.2949 2.195-0.43382 4.1513-1.1922 6.1758-2.0566zm-16.277 1.375 2.0508 0.23633c0.15873 0.56164 0.08714 1.0386 0.05664 1.5293-0.8693-0.55031-1.5964-1.154-2.1074-1.7656zm2.4219 0.13867c2.7132 0.27318 5.1363 0.42172 7.209 0.375-0.0925 0.76421 0.01846 1.3932 0.03906 2.082l-1.5723 3.3691 1.8945-3.5996c0.0668-0.17687 0.11975-0.08928 0.25586-0.0059l5.7109 3.5215c0.16244 0.08016 0.12637 0.09971 0.05078 0.24805l-0.99805 1.959c-0.0535 0.1148-0.04689 0.11976-0.13672 0.03516l-4.5293-4.2656c-0.18008-0.15193-0.21127-0.18422-0.29883-0.07422l-1.9082 2.375c-0.0768 0.0708-0.06836 0.12582-0.06836 0.22461v0.64453l0.04492-0.60156c-6e-3 -0.10022 0.02068-0.13555 0.08398-0.20508l1.7695-1.9453c0.17661-0.20947 0.13504-0.16705 0.32031 0.01367l4 3.9023-3.9297 9.2871-9.1289-9.4844 9.0234 9.7344-0.51758 1.2207c-0.16744 0.32241-0.15126 0.60254-0.14648 0.95312l0.1875 13.748c-1.4554 1.4072-3.2572 2.7394-4.1758 3.2305-4.3849 2.2095-6.5014 2.4289-8.5527 2.6172-1.1455 0.0212-2.2969 0.27581-3.2637 0.32812-0.62286-0.16857-1.3225-0.49127-1.4609-0.9375-0.14763-0.47586 0.34397-1.0182 1.1074-1.207-0.0723 0.0106-0.15414 0.0291-0.24219 0.0527-0.45932-0.55911-0.21889-3.9552-0.95898-5.3809-0.0554-0.106-0.11837-0.24789-0.14648-0.36719-0.0987-0.6274 0.02175-1.0355 0.14648-1.4395 0.0268-0.09979-0.04809-0.20366-0.16016-0.25-0.16513-0.04708-0.31348-0.07972-0.43945-0.21484-0.0497-0.05728-0.22906-0.14949-0.0918-0.37305 0.87736-1.2857 1.5438-2.6324 2.6816-3.8438l-0.46484 0.05469c-0.38496-0.41273 0.27897-2.2058 0.41992-3.1797 0.5612-0.1648 1.1017-0.36859 1.584-0.57422 0.82915-0.36382 1.5571-0.91327 1.9121-1.998 0.0633-0.24752 0.06378-0.47025 0.01758-0.66406 0.0611 0.0069 1.0133 0.11578 1.6152 0.32812 1.0334 0.35095 1.9059 0.32486 2.8652-0.10547 1.5114-0.68209 2.337-2.4716 2.6484-3.8633 0.21622-1.6596-0.52414-3.4319-2.4805-4.8203 2.0973 1.7126 2.5176 3.4436 2.2207 4.8789-0.28657 1.3272-1.1022 2.9441-2.6426 3.5977-0.6468 0.28132-1.3857 0.4053-2.0488 0.18555-0.78837-0.22946-2.2246-0.55032-2.3496-0.57812-0.20501-0.27746-0.54024-0.4216-0.89063-0.37695-1.6095 0.23716-2.7666 0.67168-3.5176 0.83203-0.65569 0.08613-2.2837-0.075-3.2793 0.28516-0.31128 0.09306-0.51816 0.30498-0.59961 0.58789-0.0466 0.20574-0.06549 0.41052-0.05859 0.60742-0.3497-0.0059-0.86444 0.21752-1.4023 0.375-0.96268 0.28115-1.9245 0.36176-2.9883 0.17188-0.51316-0.10588-1.1437-0.31793-1.6465-0.62695-1.3963-0.85974-2.1928-2.0768-2.2422-3.7383-0.15166-2.1328 1.4942-4.2695 2.5898-4.8203 0.48913 1.0842 1.6002 1.7939 2.9258 2.2305 0.18879 0.50114 0.33152 1.0023 0.60352 1.4648l-0.72656 0.10156c-0.0033-0.0033-0.04957-0.31131-0.10352-0.68359-0.10539-0.72728-0.10309-0.71501-0.17383-0.75-0.02933-0.01451-0.08228-0.0086-0.5957 0.06445-0.3658 0.05205-0.57266 0.08439-0.5918 0.0957-0.03544 0.02093-0.06638 0.06993-0.06641 0.10547 0 0.01425 0.04188 0.32644 0.09375 0.69336 0.05188 0.36692 0.0939 0.66782 0.0918 0.66992-0.0021 0.0021-0.30463 0.04715-0.67187 0.09961-0.37152 0.05307-0.68483 0.10398-0.70508 0.11328-0.04386 0.02023-0.06836 0.06356-0.06836 0.12109 0 0.02341 0.03422 0.28117 0.07617 0.57422 0.05308 0.37078 0.08305 0.54124 0.0957 0.56055 0.01 0.01526 0.03513 0.03661 0.05664 0.04687 0.03819 0.01821 0.05444 0.01663 0.71875-0.07812 0.37407-0.05335 0.68505-0.09279 0.68945-0.08789s0.04816 0.29512 0.09766 0.64453c0.04951 0.34941 0.09496 0.65845 0.10156 0.6875 0.01576 0.06945 0.06335 0.10783 0.13281 0.10742 0.02677-1.6e-4 0.28514-0.03433 0.57617-0.07617 0.57287-0.08236 0.57009-0.08135 0.60742-0.15625 0.01852-0.03715 0.01687-0.05178-0.07813-0.7207-0.06387-0.4498-0.09374-0.6852-0.08594-0.6875 0.0065-0.0019 0.29708-0.04413 0.64648-0.09375s0.65427-0.09461 0.67773-0.09961c0.05064-0.0109 0.10398-0.05715 0.11328-0.09961 8e-3 -0.0366-0.14547-1.1202-0.16406-1.1582-0.0191-0.03907-0.06802-0.07179-0.10938-0.07227-0.07078 0.0044-0.12804 0.01006-0.19922 0.01562-0.0207-0.13402-0.03064-0.26556-0.02344-0.39062 0.0197-0.28721 0.11559-0.50918 0.27539-0.67969 1.7388 0.33656 3.609 0.30766 4.8633 0.09375 1.0474-0.17861 2.4016-0.67273 3.6641-1.3867-0.16073 0.4351-0.24998 0.90559-0.25 1.3965-1.8e-5 2.226 1.8052 4.0312 4.0312 4.0312 2.2259-2.7e-5 4.0293-1.8052 4.0293-4.0312-1.9e-5 -2.2259-1.8034-4.0312-4.0293-4.0312-0.26193-6e-6 -0.51762 0.02648-0.76562 0.07422l2e-3 -2e-3c0.22617-0.32687 0.40493-0.6652 0.52539-1.0137 0.0754-0.10906 0.14743-0.21352 0.2207-0.32031 0.0122 0.0059 0.94702 0.45073 1.7578 0.90039-0.74984-0.42923-1.6889-0.94559-1.7168-0.96094 1.0262-1.4977 1.8685-2.8081 2.9805-4.6484l4.6953 1.1016-4.582-1.2988c0.19709-0.41009 0.22939-1.0394 0.12891-1.4766l4.4531 2.7754c-1.5897-1.3621-3.7756-2.3415-5.2812-3.8867 0.0157-0.81108 0.03852-1.5445-0.0039-2.1641zm-9.3906 2.0098c-0.70202 0.08152-0.7839 1.0041-0.73828 1.416 0.0657 0.49897 0.40044 1.1036 0.92383 1.0801 0.49238-0.02209 0.73764-0.72392 0.70898-1.2695-0.13599 0.18305-0.36763 0.26801-0.58984 0.2168-0.30885-0.0714-0.50112-0.37865-0.42969-0.6875 0.0714-0.30882 0.37867-0.50107 0.6875-0.42969-0.1189-0.14586-0.32814-0.31982-0.5625-0.32617zm-13.812 1.0117c-0.26694 0.77224-0.69723 1.5521-0.9668 2.2109-0.32655-0.01412-0.85832-0.03787-0.94336-0.03906zm13.438 1.5195c0.14129-6.53e-4 0.28448 2.33e-4 0.43164 0.0039 1.8721 0.10339 3.822 0.44643 5.2324 1.5547 4.389 4.2117-2.4793 7.9535-5.875 8.5254-3.3528 0.5647-10.966 0.23912-8.5352-6.0527 0.18039-0.47439 0.48598-0.84111 0.79492-1.1797 1.4732-1.4639 3.1131-2.1937 5.0488-2.5742 1.0451-0.15744 1.9134-0.27061 2.9023-0.27734zm23.139 0.64844c0.36402 0.09237 0.73111 0.20286 1.0957 0.36133 0.30385 0.10846 0.54831 0.3305 0.76367 0.5293 1.3001 1.2033 2.2402 2.8647 2.8438 4.4492 0.66932 1.7575 0.92068 3.4267 0.80274 4.2422v0.0039c-0.12902 1.2966-0.44588 2.5217-0.89648 3.7266l-0.10156-0.22461c-0.0286-0.0876-0.07624-0.05464-0.13477-0.0332l-6.957 2.5215c-0.22749 0.05584-0.20348 0.10262-0.20117 0.32031l0.0957 8.9082c-0.34641 0.3974-0.69594 0.78902-1.0469 1.1719-0.71274 0.7776-1.4296 1.5181-2.1191 2.1914l-0.03711-13.521c-7e-3 -0.28495-0.02408-0.60182 0.07422-0.83984l4.4512-10.811 0.50976 0.49805c0.1315 0.14661 0.1249 0.11538 0.20898-0.04492l1.3887-2.6484c0.12316-0.24242 0.09006-0.27149-0.02734-0.34766zm-37.557 0.08398c-0.26073 0.64728-0.4803 1.3131-0.60352 2.0215-0.0913 0.60742-0.19474 0.87303 0.16992 1.3438 0.93889 1.2005 3.5507 2.2011 5.541 3.2754 0.0331 0.11118 0.07235 0.21797 0.11719 0.32227-0.68222 0.16937-2.6227 2.0251-2.9316 4.8418-0.0554 1.6806 0.73477 2.997 2.2637 3.9941 0.93719 0.6094 2.0093 0.6624 3.25 0.77734 0.35822-0.0032 0.65553-0.02895 0.95117-0.0918 0.0138 1.3667 0.09201 3.447-0.30859 4.9492-0.18155 0.76503-1.6908 2.9838-2.5469 4.4766 0.95658-1.4741 2.2781-2.9478 2.7715-4.4219 0.1929-0.57317 0.27658-1.3461 0.28906-2.1543 2e-3 -0.16267 0.05393-0.58781 0.11719-0.7793l0.13672 0.17188c0.20894 0.29186 0.34676 0.63496 0.44336 0.9375 0.53031 1.6622 0.9326 3.2164 0.69336 3.1855-0.1695-0.0187-0.35379-0.2792-0.56055-0.52148 0.18016 0.42125 0.47401 0.83864 0.64453 0.89648 0.8633 0.12333-1.3339-5.54-1.6777-6.7402 0.30139-0.06415 0.60012-0.16654 0.95898-0.32031 0.29924-0.08538 0.67975-0.204 1.2559-0.16602 0.10717 0.5291 0.41796 0.97798 0.9043 1.2344 0.4926 0.26893 1.0426 0.40156 1.5938 0.44336 0.79081 0.04629 1.643-0.10758 2.4512-0.34375-0.32705 1.2003-0.90069 2.4355-0.75586 3.5684-0.96669 1.215-1.6833 2.4719-2.4355 3.7227 0.25494 0.1628 0.53042 0.34923 0.89844 0.4668 0.0741 0.02229 0.10858 0.12275 0.08984 0.22461-0.12263 0.59515-0.12674 1.0429-0.10742 1.5 0.023 0.27645 0.15076 0.45544 0.23242 0.66602 0.19627 0.51329 0.32183 1.4157 0.41797 2.3125-1.8461-0.15463-4.1294-1.6773-4.5898-2.8887l0.8125-0.01758 1.8594-2.0586-2.0586 1.7031-3.4434 0.07813c-2.0365 1.355-5.5781 3.7438-6.9258 3.6816-2.7395-0.56233-5.6014-2.7482-7.5605-4.0293-0.58925-0.29265-0.67553-0.52661-0.68359-1.1055-0.02333-1.6767-0.04503-3.3221-0.06836-5.2754 0.5284-1.8255 1.8493-3.3539 3.2051-4.8691 0.7307-3.358 2.0383-7.4827 2.1777-10.053 0.0209-0.43183-0.2085-0.81613-0.90625-1.5898-0.28859-0.31016-0.16406-0.75391-0.16406-0.75391 0.91762-2.2041 1.9823-2.4087 4.082-2.6152zm29.99 1.8613c-0.065-0.0026-0.13913 0.01193-0.22266 0.05273-0.38185 0.18626-0.19606 1.0963 0.06836 1.5898 0.26438 0.49356 0.89563 1.23 1.0547 2.3594 0.15905 1.1294-0.01193 1.8852 0.13672 2.0781 0.22253 0.30969 0.47883 0.74652 0.84961 1.9043 0.0406-0.66814-0.47034-1.5187-0.70898-1.9922-0.1698-0.27873 0.04986-0.74244-0.08594-1.916-0.13588-1.1736-1.3117-2.6273-1.3223-3.2637-0.0105-0.63639 0.57812-0.58203 0.57812-0.58203s-0.11552-0.22214-0.34766-0.23047zm-13.939 1.2578c-0.59492 0.01386-1.1812 0.40833-1.125 1.2559-0.0498-1.1175 1.3408-1.6938 2.2051-0.68945-0.19338-0.37792-0.63912-0.57669-1.0801-0.56641zm-6.0117 1.0352c-0.59488 0.01386-1.1811 0.40845-1.125 1.2559-0.0496-1.1174 1.3409-1.6938 2.2051-0.68945-0.19338-0.37793-0.63912-0.57669-1.0801-0.56641zm27.035 1.8223c-0.34718-0.0189-0.61213 0.68432-0.28711 0.86133l4.0391 2.0195-3.9395-2.1973c-0.2116-0.11169 0.02272-0.54025 0.25781-0.43555l4.2754 2.3945-4.2363-2.6113c-0.0371-0.01883-0.0734-0.02929-0.10938-0.03125zm-14.672 0.77344c0.23778 2e-3 0.47295 0.10083 0.64453 0.29297 0.32302 0.3617 0.2914 0.91335-0.07031 1.2363l-2.4297 2.1699c-0.36169 0.32302-0.91138 0.29138-1.2344-0.07031-0.32303-0.3617-0.29336-0.9114 0.06836-1.2344 0.16116-0.14347 0.32164-0.28778 0.48242-0.43164 0.04152 0.15822 0.07992 0.32881 0.12109 0.51367-2.21e-4 -1.86e-4 -0.0018 0.0024-2e-3 2e-3 -0.0018-0.0039-0.0094-0.03498-0.01758-0.06836-0.0083-0.03335-0.01966-0.07256-0.02539-0.08789l-0.0098-0.02734-0.04297 2e-3c-0.29942 0.02302-0.56605 0.23148-0.66406 0.51758-0.03114 0.09095-0.03711 0.13126-0.03711 0.24609 0 0.11349 0.0042 0.14332 0.0332 0.23438 0.09079 0.28586 0.34284 0.49251 0.64648 0.5293 0.0562 0.0068 0.16308 2e-3 0.22461-0.0098 0.27432-0.05329 0.4968-0.24726 0.58398-0.50976 0.04136-0.12455 0.05068-0.24463 0.0293-0.37109-0.0512-0.30304-0.28222-0.54865-0.58398-0.61914-0.02254-0.0052-0.04273-0.0098-0.04492-0.0098-0.0036 0-0.0368 0.06637-0.07422 0.14844-5e-3 0.01092-0.0066 0.0095-0.0098 0.01367 0.03444-0.06498 0.06482-0.1342 0.08984-0.20703 0.07105-0.17233 0.09522-0.33014 0.11328-0.58984l1.6191-1.4453c0.16953-0.1514 0.38009-0.22638 0.58984-0.22461zm-2.3516 0.05469c0.18792 1.16 0.146 1.8489-0.05664 2.3516-0.0632-0.46005-0.17372-0.81337-0.32812-1.0703-0.15389-0.2561-0.35189-0.41667-0.58398-0.49805 0.34459-0.24557 0.67084-0.50737 0.96875-0.7832zm3.6387 0.02539h0.13476l0.10938 0.16211 0.10938-0.16211h0.13477l-0.16602 0.24609 0.17188 0.25586h-0.13281l-0.11719-0.17187-0.11719 0.17187h-0.13477l0.17383-0.25586zm-1.2793 0.01563c-0.03963 1.3e-5 -0.07822 0.0013-0.10547 0.0059-0.17109 0.02636-0.31211 0.09764-0.43359 0.21875-0.12114 0.12077-0.19211 0.26132-0.21875 0.43359-0.0084 0.05401-0.0084 0.15739 0 0.21484 0.05079 0.34726 0.32932 0.61711 0.67774 0.65625 0.0488 0.0052 0.15875 0.0027 0.20703-0.0059 0.13191-0.02322 0.25228-0.07744 0.35352-0.1582 0.16261-0.12971 0.26473-0.31975 0.28516-0.5293 0.0079-0.08002-0.0015-0.18926-0.02148-0.26367-0.08345-0.30274-0.32665-0.5194-0.63672-0.56641-0.02755-0.0039-0.0678-0.0059-0.10742-0.0059zm-2.9785 1.0293c0.01656 0.01612 0.03151 0.03406 0.04687 0.05078-0.01604-0.01675-0.02966-0.03462-0.04687-0.05078zm5.4883 0.76953h0.1543l0.18555 0.5h-0.13086l-0.03125-0.08984h-0.20117l-0.03125 0.08984h-0.13086zm0.07813 0.11719-0.07031 0.19922h0.13867zm-1.3027 0.24219c0.23776 2e-3 0.47487 0.10082 0.64648 0.29297 0.32303 0.3617 0.2914 0.91335-0.07031 1.2363l-2.4297 2.1699c-0.36169 0.32302-0.91331 0.29139-1.2363-0.07031-0.32302-0.3617-0.2914-0.91335 0.07031-1.2363l2.4297-2.1699c0.16955-0.15142 0.38005-0.22445 0.58984-0.22266zm-3.7656 0.03711c-0.0014 4.1e-5 -0.0025 0.0019-0.0039 2e-3 0.0015-3.9e-5 0.0021 3.2e-5 0.0039 0zm3.7754 0.05859c-0.12374 1.17e-4 -0.22339 0.02323-0.33594 0.07813-0.37986 0.18528-0.53946 0.64442-0.35352 1.0234 0.04163 0.08484 0.09202 0.15155 0.16211 0.21875 0.11835 0.11349 0.27036 0.186 0.43555 0.20703 0.04985 0.0066 0.1648 0.0039 0.21094-0.0039 0.1661-0.02844 0.30488-0.09789 0.42188-0.21484 0.12647-0.12642 0.20221-0.28286 0.22266-0.46094 0.0067-0.05833 0.0035-0.16365-0.0078-0.22266-0.01886-0.09895-0.06065-0.19908-0.11523-0.28125-0.07817-0.11771-0.17722-0.20392-0.30274-0.26562-0.1122-0.05511-0.21151-0.07824-0.33789-0.07813zm-15.494 0.1582c0.38782 0.12565 0.79355 0.22702 1.207 0.30859-0.15674 0.17492-0.25385 0.4004-0.27344 0.68555-0.0205 0.2991 0.04416 0.66508 0.19727 1.1035-0.41289-0.35842-0.76681-0.9599-1.1309-2.0977zm10.209 1.0957h0.14063l0.11328 0.17773 0.11328-0.17773h0.14258l-0.19141 0.28906v0.21094h-0.12891v-0.21094zm-2.3145 0.51367c-0.04998-2.7e-4 -0.08788 0.0075-0.13281 0.0293-0.06276 0.03041-0.10726 0.07621-0.13672 0.13672-0.02534 0.05204-0.3682 0.98756-0.375 1.0234-0.01161 0.06111 2.5e-4 0.1312 0.03125 0.18945 0.04374 0.08219 0.11945 0.13932 0.21289 0.1582 0.11851 0.02395 0.24922-0.03606 0.3125-0.14258 0.0088-0.01478 0.02994-0.06339 0.04687-0.10938 0.25176-0.68322 0.32758-0.88919 0.33398-0.91211 0.01081-0.03863 0.01106-0.10713 0-0.14844-0.03551-0.13263-0.15654-0.22388-0.29297-0.22461zm5.1602 0.42969v2e-3c-0.01628-5.36e-4 -0.03237-5.17e-4 -0.04883 0-0.24947 0.0089-0.47526 0.13427-0.61524 0.34375-0.04358 0.06525-0.08893 0.17034-0.10742 0.25-0.01834 0.07908-0.02359 0.18968-0.01367 0.26367 0.01819 0.13716 0.06802 0.25804 0.15039 0.36914 0.03286 0.04433 0.10655 0.11979 0.15039 0.15234 0.11814 0.08767 0.2469 0.13627 0.40039 0.15234 0.02805 0.0026 0.13814-5.59e-4 0.17188-0.0059 0.35087-0.05473 0.61357-0.32857 0.65234-0.67969 0.0061-0.05544 0.0017-0.15913-0.0078-0.21094-0.02042-0.10997-0.05719-0.20477-0.11719-0.29492-0.1373-0.2063-0.36974-0.33445-0.61523-0.3418zm-7.6797 0.19531c-0.11016 0-0.20901 0.05706-0.26172 0.15234-0.01338 0.02419-0.35322 0.94379-0.37109 1.0039-0.03121 0.10502-0.0013 0.22022 0.08008 0.29883 0.05068 0.04896 0.10705 0.07368 0.18555 0.08398 0.05032 0.0066 0.13414-0.01367 0.18359-0.04492 0.04432-0.02801 0.09246-0.08283 0.11328-0.12891 0.01691-0.03743 0.35773-0.96882 0.36523-0.99805 0.0251-0.09787-0.0091-0.21733-0.08398-0.28711-0.05903-0.055-0.12917-0.08008-0.21094-0.08008zm6.2812 0.83398h0.19336c0.06947 0 0.12128 0.01025 0.15234 0.03125 0.03127 0.02099 0.04687 0.05534 0.04687 0.10156 0 0.02432-0.0061 0.04335-0.01758 0.06055-0.01145 0.017-0.02717 0.03082-0.04883 0.03906 0.02769 0.0081 0.04732 0.02328 0.0625 0.04492 0.0152 0.02165 0.02344 0.04667 0.02344 0.07813 0 0.04826-0.01625 0.08571-0.04883 0.10938-0.03262 0.02367-0.0819 0.03516-0.14844 0.03516h-0.21484zm0.12891 0.08789v0.10547h0.07227c0.02032 0 0.03637-0.0049 0.04687-0.01367 0.01055-0.0089 0.01563-0.02167 0.01563-0.03906 0-0.01719-5e-3 -0.03018-0.01563-0.03906-0.01055-0.0091-0.02656-0.01367-0.04687-0.01367zm0 0.19336v0.13086h0.07617c0.02591 0 0.04565-0.0044 0.05859-0.01562 0.01324-0.01098 0.01953-0.02868 0.01953-0.05078 0-0.02164-0.0066-0.03811-0.01953-0.04883-0.01288-0.01092-0.03247-0.01563-0.05859-0.01563zm21.879 0.64453c0.039 3.59e-4 0.06373 0.0301 0.08203 0.07813l0.08984 0.20508c-0.52183 1.3261-1.2005 2.6335-1.9629 3.9883l-3.3945 1.2285c-0.16771-1.6702-0.46564-2.4953-0.83008-2.4883-0.0521 0.0013-0.10554 0.01977-0.16016 0.05469 0.47185 0.23702 0.74731 1.306 0.6875 2.5234-6e-3 0.13809 0.02833 0.20236 0.19336 0.14062l3.25-1.0117c-0.0543 0.0952-0.10902 0.19135-0.16406 0.28711-0.67193 1.169-1.5952 2.4968-2.6445 3.8496-0.0443-0.99386-0.19039-1.6846-0.33203-2.2461 0.0779 0.92137 0.21894 1.9135 0.07227 2.5781-0.60117 0.76248-1.2391 1.5299-1.8906 2.2773l0.13281-8.7148c-0.0161-0.16984 0.02535-0.16651 0.17383-0.22266l6.6543-2.5176c0.0166-0.0069 0.02997-0.0098 0.04297-0.0098zm-23.332 0.15625c0.56835-8e-3 0.99686 0.58826 0.82617 1.25-0.10802 0.40704-0.29898 0.78182-0.58398 1.1133-0.50772 0.59045-1.3173 1.0465-2.5078 1.3184-1.1528 0.2977-2.2514 0.47007-3.1406 0.375-1.2105-0.24619-2.1589-0.93548-2.0039-2.1562 0.0527-0.37507 0.26677-0.67923 0.70898-0.83984 0.83445-0.31534 2.2679-0.02524 3.3027-0.28125 0.875-0.21644 1.7432-0.53079 2.6543-0.68945 0.26364-0.03897 0.50296-0.08581 0.74414-0.08984zm4.9316 3.3125c-1.8282 0.0084-3.3801 0.08474-4.2168 0.33594-0.10231 0.01569-0.1329 0.06832-0.17383 0.14844-0.4867 0.95361-0.63621 1.7378-0.50195 2.8613 0.0147 0.18234 0.01566 0.18281 0.18164 0.17969 4.3927-0.0826 7.5134-0.21617 11.266-0.47852 0.17689-0.0076 0.19579 8e-3 0.21484-0.1582 0.0956-0.8369 0.01086-1.7233-0.57617-2.7422-0.0248-0.04453-0.08901-0.07368-0.12891-0.07422-1.7427-0.01432-3.6309-0.06573-5.3418-0.07227-0.24441-6.54e-4 -0.48649-0.0014-0.72266 0zm2.0625 0.18946c2.0876 5.34e-4 3.9168 0.06874 4.0273 0.14062 0.2764 0.62504 0.6344 1.1336 0.50976 2.3379-4e-3 0.11764-0.01771 0.1358-0.12305 0.14062-3.6428 0.16828-5.9027 0.53828-10.957 0.42383-0.19726 0.0092-0.19846-0.01715-0.22852-0.19336-0.16508-0.97675 0.31046-1.826 0.54492-2.3848 0.43233-0.35456 3.5425-0.46565 6.2266-0.46484zm3.8691 3.3457c-0.19508 1.5008-0.32991 4.2789 0.11719 5.7031 0.13114 0.41773 0.20117 0.81032 0.11914 1.2441-0.30339 0.73244-5.9313 0.79456-9.7793 0.63867-0.10751-3e-3 -0.12131 0.02374-0.1582-0.06836-0.25577-0.73459 0.18651-4.3823-0.19531-6.0332 0.18678 2.204-0.287 5.8705-0.0332 6.4102 0.0313 0.0704 0.086 0.06446 0.14844 0.06836 3.2718 0.20319 6.5514 0.38309 10.215-0.53906 0.1015-0.0395 0.16794-0.11198 0.17383-0.20898 0.0347-0.8264-0.36651-1.6718-0.43359-2.2852-0.22686-2.0739-0.08432-3.2222-0.17383-4.9297zm-6.1504 1.4277c-0.0905 1.9388-0.12223 3.6486-0.13867 5.291 0.19422-1.5666 0.38204-3.141 0.13867-5.291zm2.3789 0.22461c-0.13563 1.6994-0.22178 3.4151 0.08398 5.2617 0.19406-1.754 0.09202-3.5077-0.08398-5.2617zm31.717 3.1934c0.37325-0.0039 0.68396 0.03685 0.89062 0.13672 1.1838 0.72726 2.3486 1.483 2.9062 2.8887 0.074 0.21597-0.01487 0.60899-0.24609 0.61915-0.19229 5e-3 -0.35009-0.0342-0.5332-0.12696-1.0424-0.52826-1.3081-1.4968-2.3652-2.4844 0.77762 1.214 1.3139 1.6435 1.3945 3.2422 0 0.0657-0.05627 0.0962-0.125 0.10157-1.2071 7e-3 -2.4776-2.4921-4.0938-2.8438-0.42337-0.10645-0.96891-0.15857-1.5625-0.17578-0.12256-3e-3 -0.24726-0.0039-0.37305-0.0059 0.0398-0.35574 0.11406-0.42901 0.26758-0.50586 1.046-0.42101 2.7201-0.83396 3.8398-0.8457zm-5.3086 0.31445c0.0187-3.6e-4 0.03909-3.6e-4 0.05859 0 0.43786 0.0068 0.89681 0.15233 1.377 0.43359-0.022 0.0092-0.04511 0.01812-0.06641 0.02734-0.12604 0.07962-0.19256 0.36743-0.17188 0.57617-0.10552-6.5e-4 -0.21144-1e-3 -0.31836 0-0.65907 7e-3 -1.3324 0.04419-1.9316 0.08789 0.24078-0.32404 0.47665-0.64912 0.70703-0.97656 0.10043-0.1217 0.21418-0.14597 0.3457-0.14844zm0.9375 1.0762c0.0982-6.6e-4 0.19603-6.6e-4 0.29297 0 0.11577 6.5e-4 0.22887 0.0029 0.3418 0.0059 0.8422 0.0244 1.5906 0.12124 2.0117 0.33789 6e-3 3e-3 0.01178 0.0048 0.01758 0.0078 0.0191 0.0102 0.03699 0.02045 0.05469 0.03125 1.0589 0.61552 2.0092 1.997 3.0801 2.6602 0.52423 0.23291 0.76976 0.0713 0.73047-0.34571-0.0773-0.7951-0.14223-1.0474-0.44922-1.5391 0.5512 0.52688 0.96623 1.0341 1.6875 1.1816 4.2784 3.58 7.3275 7.4454 7.1973 11.686-0.32201 5.7875-5.8324 9.734-10.932 10.949-6.3432 1.0295-13.774-4.5231-18.199-3.4395-1.4004 0.27569-5.114 1.0831-5.4316 3.5586-0.11397 0.90548 0.40301 1.8956 0.63867 2.3066 0.23561 0.411 0.93801 1.0359 0.23828 0.63476-0.96268-0.50525-1.5023-1.3337-1.7656-2.3867-0.32951-2.7189 1.2113-6.611 3.8379-8.1934 0.95162-0.51717 4.2498-2.1476 8.0762-1.5449 2.9703 0.70468 6.0824 1.8812 8.9062 2.0977 1.9552 0.2338 6.1515-1.6612 6.332-4.1152 0.0813-1.4968-3.3447-3.849-6.6094-3.8789-0.99184 0.0433-2.2698 0.0324-2.6562 0.0566-0.0584-0.14587-0.12682-0.28875-0.20508-0.42773l1.9395-1.502c0.1493-0.11018 0.21203-0.19551 0.16797-0.47265-0.24039-1.5151-0.3984-3.5424-0.81445-3.9121-0.71936-0.64236-1.6628-0.7538-2.6074-1.0274 0.73029-0.86591 1.4333-1.7465 2.0977-2.6387 0.62404-0.046 1.3342-0.08484 2.0215-0.08984zm-4.2227 2.8535c0.36805 0.075 1.7445 0.44898 2.0957 0.66797 0.67721 0.35644 0.62527 0.58191 0.70703 0.82227 0.18536 0.73879 0.39158 2.3609 0.54102 3.2344 0.0242 0.17298-0.02089 0.24609-0.10547 0.31641l-3.7051 2.8984c-0.22245 0.15461-0.233 0.11842-0.24023-0.0117-0.047-1.0544-0.08062-2.2086-0.22461-2.8633-9e-3 -0.0647-0.0304-0.12015-0.0625-0.16992-0.23713-0.31681-1.22-0.58469-1.7246-0.77149l0.05664 0.13867c0.49231 0.23823 1.4121 0.44174 1.5391 0.83985 0.20825 0.70161 0.19856 1.783 0.20312 2.8105 5e-3 0.35398 0.15584 0.42662 0.33594 0.29688l1.8242-1.4062c0.25232 0.8494 0.4599 1.796-0.08789 2.5547-1.0239 1.1297-3.7006 2.4116-6.1484 3.207-2.8064-0.0528-5.8289 0.59872-8.1426 2.3066-2.0485 0.63521-3.873 1.1762-4.9102 1.0781-0.91805-0.17254 0.29492-0.78701 0.55078-0.92773 2.7989-1.5402 5.962-3.5995 8.6875-5.9805l2e-3 -2e-3h2e-3c2.9988-2.8184 6.0932-5.8382 8.8066-9.0391zm-2.8262 5.6562c-0.16826 1.5994-0.07988 2.9764-0.08008 4.4316 0.0401-1.453 0.15813-2.7658 0.08008-4.4316zm6.8496 1.6992c2.1551-0.0244 6.6248 2.1891 6.4707 3.8418-0.18248 1.3795-2.8813 3.4962-5.8594 3.5625-1.6712 0.075-5.9118-1.2998-8.8047-2.0957 2.0517-0.73645 4.1701-1.5864 5.5996-2.9902 0.48958-0.42412 0.56508-1.3516 0.27148-2.2422 0.79903-0.0455 1.6002-0.0621 2.3223-0.0762z"/>
</svg>;
  }
});