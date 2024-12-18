const React = require("react");
module.exports = function CairoOriginalWordmarkIcon({size = "1em",  ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,
    }
  }
  return (<svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
	<path d="m4.6695 54.373c-0.49753 0.12292-0.25212 0.61381-0.33306 0.88269-0.20637 0.68483-1.2829 0.90252-1.8214 1.3676-0.52676 0.45465-0.8408 0.98577-1.2476 1.4863-0.34315 0.42117-0.77143 0.8342-0.84041 1.3169-0.078233 0.54736-0.049877 1.1658 0.19903 1.6895 0.30897 0.64878 0.67346 1.4726 1.1903 2.0507 0.39702 0.444 0.45173 0.59131 1.1192 0.82546 0.2116 0.09605 0.2644 0.14366 0.55221 0.20324l0.056689-0.35332 0.24742-0.29133c-0.33278-0.40684-0.83719-0.44452-1.1283-0.74117-0.48597-0.49488-0.6444-1.0007-0.9334-1.5673-0.27612-0.54298-0.63546-0.95781-0.66504-1.5344-0.012607-0.24696-0.12151-0.69062 0.00804-0.91328 0.086031-0.14784 0.49667-0.3341 0.63595-0.4754 0.43154-0.43753 0.23619-0.99044 0.7356-1.396 0.44421-0.36097 1.1961-0.64167 1.7226-0.97201 0.36493-0.22886 0.5904-0.31131 0.66899-0.63337 0.086446-0.35484-0.19228-0.61747-0.16681-0.94482zm12.322 0c0.02548 0.32735-0.25305 0.58998-0.16667 0.94482 0.07872 0.32206 0.30405 0.40451 0.66899 0.63337 0.52641 0.33034 1.2784 0.61104 1.7224 0.97201 0.49906 0.40558 0.30358 0.95849 0.73519 1.396 0.13928 0.1413 0.54992 0.32756 0.63609 0.4754 0.12939 0.22266 0.02055 0.66632 0.0079 0.91328-0.02951 0.5766-0.38893 0.99143-0.66491 1.5344-0.28899 0.56664-0.44764 1.0724-0.93299 1.5673-0.29122 0.29665-0.7955 0.33434-1.1283 0.74117l0.24756 0.29133 0.05642 0.35332c0.28774-0.05958 0.34075-0.10718 0.55234-0.20324 0.66702-0.23415 0.72181-0.38146 1.1187-0.82546 0.51702-0.57813 0.88127-1.402 1.1913-2.0507 0.24876-0.52377 0.27719-1.1422 0.19902-1.6895-0.06905-0.4827-0.49822-0.89573-0.84136-1.3169-0.40669-0.50052-0.72075-1.0316-1.2472-1.4863-0.53839-0.46509-1.615-0.68278-1.8214-1.3676-0.08081-0.26888 0.16453-0.75977-0.33307-0.88269zm-6.1628 5.1115c-2.1384 0-3.8717 0.65845-3.8717 1.4707 0 0.71017 1.7333 0.51129 3.8717 0.51129 2.1378 0 3.8719 0.1615 3.8719-0.51129 0-0.81214-1.734-1.4707-3.8719-1.4707zm-1.9296 2.1553c-2.2096 0-4.1372 0.90569-5.1923 2.2532-0.073363 0.41762-0.12723 0.84409-0.15973 1.2788 0.27577-0.0026 5.8417-0.04682 6.3383 0.44291 0 0 0.88751 0.87536 0.94291 0.93 0.15744-0.15536 0.94278-0.93 0.94278-0.93 0.49662-0.48973 6.0633-0.44542 6.3386-0.44291-0.03265-0.43836-0.08723-0.86814-0.16178-1.289-1.0568-1.3419-2.9799-2.243-5.1845-2.243zm9.2135 3.5702-2.67e-4 0.0435c-1.6138-0.01503-5.889 0.03088-6.2824 0.41871l-0.95284 0.93992 0.62059 1.4921-0.62766 7.7462c3.8877-0.02903 7.0564-4.0855 7.2645-9.1911 0.0067-0.177-0.72092-0.36966-0.72092-0.531l1.35e-4 1.34e-4c0-0.13997 0.72852-0.31362 0.72323-0.46738-0.0055-0.15132-0.01348-0.30163-0.02434-0.45107zm-14.569 2.67e-4c-0.010721 0.14923-0.018845 0.29954-0.02434 0.45079-0.0053 0.15362 0.72336 0.32754 0.72336 0.46752 0 0.16141-0.72788 0.35386-0.72105 0.53114 0.20833 5.1054 3.378 9.1619 7.2646 9.1911l-0.62793-7.7462 0.0038-0.0091 1.31e-4 -1.34e-4 0.61678-1.4833-0.95257-0.93952c-0.39325-0.3879-4.6685-0.43402-6.2823-0.41898zm-2.2423 1.0547c-0.94704 0.03397-0.77626 1.0349-0.43394 1.9231 0.39507 1.025 0.57337 2.1041 0.99852 3.1179 0.19524 0.46551 0.48151 0.91967 0.99512 1.0529 0.025901-0.58711-0.063845-0.74128-0.42551-1.1776-0.30591-0.36841-0.23139-0.87338-0.42252-1.2879-0.24925-0.54319-0.29208-1.089-0.50667-1.6358-0.094871-0.24215-0.57988-0.97211-0.44916-1.2432 0.22155-0.45959 0.63887-0.0058 0.84775 0.14451 0.29359 0.21132 0.45017 0.15476 0.81309 0.20174 0.041272 0.0055 0.24759 0.15049 0.73029 0.37086l-0.056416-0.5113c-0.66165-0.31872-0.71965-0.68022-1.4435-0.86774-0.25805-0.066896-0.47172-0.093704-0.6471-0.087414zm19.057 0c-0.17548-0.0063-0.38931 0.02052-0.6475 0.08741-0.72318 0.18751-0.78106 0.54902-1.4428 0.86774l-0.05642 0.51129c0.48256-0.22036 0.68888-0.36536 0.7303-0.37086 0.36292-0.04698 0.51889 0.0096 0.81241-0.20174 0.20895-0.15034 0.62627-0.6041 0.84789-0.14451 0.13064 0.27111-0.35429 1.0011-0.44916 1.2432-0.21445 0.54681-0.25735 1.0926-0.50653 1.6358-0.1912 0.41456-0.11668 0.91953-0.42224 1.2879-0.3616 0.43628-0.45133 0.59045-0.42551 1.1776 0.51368-0.13322 0.79954-0.58739 0.99471-1.0529 0.42521-1.0138 0.60358-2.0929 0.99865-3.1179 0.34297-0.88815 0.51377-1.8891-0.4338-1.9231zm-9.5303 0.44576c-0.13475 0.32401-0.57884 1.3918-0.58524 1.407 0.0013 0.01657 0.44569 5.4981 0.58524 7.2192 0.13956-1.7212 0.58365-7.2025 0.58497-7.2192-0.0063-0.01525-0.45084-1.0843-0.58497-1.407zm-6.0487 5.218c-0.46495 0.62142-0.48678 1.1296-0.69998 1.6251-0.3673 0.85355-0.01081 2.0081 0.68598 2.6224 0.42124 0.37412 1.1071 0.6695 1.6093 0.91436 0.69848 0.3405 1.3999 0.78545 2.1811 0.93231 0.17275 0.03244 0.6124 0.09017 0.46588-0.24511-0.067863-0.1557-0.5632-0.31958-0.70624-0.39914-0.57855-0.32178-1.1398-0.7325-1.6803-1.1259-0.6611-0.47762-1.4509-0.77856-1.9707-1.4397-0.21257-0.27041-0.24671-0.34263-0.19603-0.65362 0.048235-0.29672 0.093626-0.63858 0.15606-0.93544 0.070438-0.33458 0.16921-0.65821 0.34775-0.95855zm12.102 0-0.1929 0.33674c0.17839 0.30034 0.27724 0.62396 0.34774 0.95855 0.06251 0.29686 0.10776 0.63872 0.1562 0.93544 0.05046 0.31099 0.01647 0.38321-0.19617 0.65362-0.51973 0.6611-1.309 0.96204-1.9701 1.4397-0.54034 0.3934-1.1028 0.80412-1.6814 1.1259-0.14297 0.07956-0.6383 0.24343-0.70623 0.39914-0.14603 0.33528 0.29306 0.27754 0.46574 0.24511 0.78124-0.14686 1.4838-0.59181 2.1822-0.93231 0.50212-0.24487 1.1876-0.54025 1.609-0.91436 0.6966-0.61426 1.0529-1.7688 0.68584-2.6224-0.21341-0.49551-0.2351-1.0037-0.69998-1.6251z" fill="#f39914"/>
	<path d="m10.831 49.952c-2.3702 0-4.2984 1.9282-4.2984 4.2984 0 2.3702 1.9282 4.2984 4.2984 4.2984 2.3702 0 4.2984-1.9282 4.2984-4.2984 0-2.3702-1.9282-4.2984-4.2984-4.2984zm0 0.14093c2.2924 0 4.1575 1.865 4.1575 4.1575 0 2.2925-1.8651 4.1575-4.1575 4.1575-2.2925 0-4.1575-1.865-4.1575-4.1575 0-2.2925 1.865-4.1575 4.1575-4.1575zm-1.9342 2.2233v3.8685h3.8685v-3.8685h-3.8052zm0.063308 0.06331h1.2051v1.2051h-1.2051zm1.2684 0h1.2051v1.2051h-1.2051zm1.2684 0h1.2051v1.2051h-1.2051zm-0.66585 0.15855a0.44394 0.44394 0 0 0-0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399-0.44399 0.44394 0.44394 0 0 0-0.44399-0.44399zm-1.8709 1.1098h1.2051v1.2051h-1.2051zm1.2684 0h1.2051v1.2051h-1.2051zm1.2684 0h1.2051v1.2051h-1.2051zm0.60254 0.15855a0.44394 0.44394 0 0 0-0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399-0.44399 0.44394 0.44394 0 0 0-0.44399-0.44399zm-3.1393 1.1098h1.2051v1.2051h-1.2051zm1.2684 0h1.2051v1.2051h-1.2051zm1.2684 0h1.2051v1.2051h-1.2051zm-1.9342 0.15855a0.44394 0.44394 0 0 0-0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399-0.44399 0.44394 0.44394 0 0 0-0.44399-0.44399zm1.2684 0a0.44394 0.44394 0 0 0-0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399-0.44399 0.44394 0.44394 0 0 0-0.44399-0.44399zm1.2684 0a0.44394 0.44394 0 0 0-0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399 0.44399 0.44394 0.44394 0 0 0 0.44399-0.44399 0.44394 0.44394 0 0 0-0.44399-0.44399z" fill="#162284"/>
	<path d="m123.33 54.373c0.49753 0.12292 0.25212 0.61381 0.33307 0.88269 0.20637 0.68483 1.2829 0.90252 1.8214 1.3676 0.52676 0.45465 0.8408 0.98577 1.2476 1.4863 0.34314 0.42117 0.77143 0.8342 0.84041 1.3169 0.0782 0.54736 0.0499 1.1658-0.19903 1.6895-0.30897 0.64878-0.67345 1.4726-1.1903 2.0507-0.39702 0.444-0.45173 0.59131-1.1192 0.82546-0.2116 0.09605-0.2644 0.14366-0.55221 0.20324l-0.0567-0.35332-0.24742-0.29133c0.33278-0.40684 0.83719-0.44452 1.1283-0.74117 0.48597-0.49488 0.6444-1.0007 0.9334-1.5673 0.27612-0.54298 0.63546-0.95781 0.66504-1.5344 0.0126-0.24696 0.12151-0.69062-8e-3 -0.91328-0.086-0.14784-0.49667-0.3341-0.63595-0.4754-0.43154-0.43753-0.23619-0.99044-0.7356-1.396-0.44421-0.36097-1.1961-0.64167-1.7226-0.97201-0.36493-0.22886-0.5904-0.31131-0.66899-0.63337-0.0864-0.35484 0.19229-0.61747 0.16681-0.94482zm-12.322 0c-0.0255 0.32735 0.25305 0.58998 0.16667 0.94482-0.0787 0.32206-0.30405 0.40451-0.66898 0.63337-0.52642 0.33034-1.2784 0.61104-1.7224 0.97201-0.49906 0.40558-0.30357 0.95849-0.73519 1.396-0.13928 0.1413-0.54992 0.32756-0.63609 0.4754-0.12939 0.22266-0.0206 0.66632-8e-3 0.91328 0.0295 0.5766 0.38893 0.99143 0.66491 1.5344 0.289 0.56664 0.44764 1.0724 0.93299 1.5673 0.29123 0.29665 0.7955 0.33434 1.1284 0.74117l-0.24756 0.29133-0.0564 0.35332c-0.28774-0.05958-0.34074-0.10718-0.55234-0.20324-0.66702-0.23415-0.72181-0.38146-1.1187-0.82546-0.51702-0.57813-0.88127-1.402-1.1913-2.0507-0.24876-0.52377-0.27719-1.1422-0.19902-1.6895 0.069-0.4827 0.49821-0.89573 0.84136-1.3169 0.40669-0.50052 0.72075-1.0316 1.2472-1.4863 0.53839-0.46509 1.615-0.68278 1.8214-1.3676 0.0808-0.26888-0.16453-0.75977 0.33307-0.88269zm6.1628 5.1115c2.1384 0 3.8717 0.65845 3.8717 1.4707 0 0.71017-1.7333 0.51129-3.8717 0.51129-2.1378 0-3.8718 0.1615-3.8718-0.51129 0-0.81214 1.734-1.4707 3.8718-1.4707zm1.9296 2.1553c2.2096 0 4.1372 0.90569 5.1923 2.2532 0.0734 0.41762 0.12723 0.84409 0.15973 1.2788-0.27576-0.0026-5.8417-0.04682-6.3383 0.44291 0 0-0.88751 0.87536-0.94291 0.93-0.15744-0.15536-0.94278-0.93-0.94278-0.93-0.49662-0.48973-6.0633-0.44542-6.3386-0.44291 0.0326-0.43836 0.0872-0.86814 0.16177-1.289 1.0568-1.3419 2.9799-2.243 5.1845-2.243zm-9.2136 3.5702 2.7e-4 0.0435c1.6138-0.01503 5.889 0.03088 6.2824 0.41871l0.95284 0.93992-0.62059 1.4921 0.62766 7.7462c-3.8877-0.02903-7.0564-4.0855-7.2645-9.1911-7e-3 -0.177 0.72092-0.36966 0.72092-0.531l-1.4e-4 1.34e-4c0-0.13997-0.72851-0.31362-0.72323-0.46738 6e-3 -0.15132 0.0135-0.30163 0.0243-0.45107zm14.569 2.67e-4c0.0107 0.14923 0.0188 0.29954 0.0243 0.45079 5e-3 0.15362-0.72336 0.32754-0.72336 0.46752 0 0.16141 0.72787 0.35386 0.72105 0.53114-0.20833 5.1054-3.378 9.1619-7.2646 9.1911l0.62793-7.7462-4e-3 -0.0091-1.3e-4 -1.34e-4 -0.61679-1.4833 0.95257-0.93952c0.39326-0.3879 4.6685-0.43402 6.2823-0.41898zm2.2423 1.0547c0.94704 0.03397 0.77626 1.0349 0.43393 1.9231-0.39507 1.025-0.57337 2.1041-0.99852 3.1179-0.19523 0.46551-0.48151 0.91967-0.99511 1.0529-0.0259-0.58711 0.0638-0.74128 0.4255-1.1776 0.30591-0.36841 0.23139-0.87338 0.42252-1.2879 0.24925-0.54319 0.29208-1.089 0.50667-1.6358 0.0949-0.24215 0.57988-0.97211 0.44916-1.2432-0.22155-0.45959-0.63887-0.0058-0.84775 0.14451-0.29359 0.21132-0.45017 0.15476-0.81309 0.20174-0.0413 0.0055-0.24759 0.15049-0.73029 0.37086l0.0564-0.5113c0.66165-0.31872 0.71966-0.68022 1.4435-0.86774 0.25805-0.0669 0.47172-0.0937 0.6471-0.08741zm-19.057 0c0.17548-0.0063 0.38931 0.02052 0.64751 0.08741 0.72318 0.18751 0.78106 0.54902 1.4428 0.86774l0.0564 0.51129c-0.48256-0.22036-0.68888-0.36536-0.73029-0.37086-0.36292-0.04698-0.51889 0.0096-0.81241-0.20174-0.20895-0.15034-0.62627-0.6041-0.84789-0.14451-0.13065 0.27111 0.35429 1.0011 0.44916 1.2432 0.21445 0.54681 0.25735 1.0926 0.50653 1.6358 0.19121 0.41456 0.11669 0.91953 0.42225 1.2879 0.36159 0.43628 0.45133 0.59045 0.42551 1.1776-0.51368-0.13322-0.79955-0.58739-0.99472-1.0529-0.42521-1.0138-0.60357-2.0929-0.99865-3.1179-0.34297-0.88815-0.51377-1.8891 0.4338-1.9231zm9.5303 0.44576c0.13475 0.32401 0.57884 1.3918 0.58524 1.407-1e-3 0.01657-0.44569 5.4981-0.58524 7.2192-0.13956-1.7212-0.58365-7.2025-0.58498-7.2192 6e-3 -0.01525 0.45085-1.0843 0.58498-1.407zm6.0487 5.218c0.46495 0.62142 0.48678 1.1296 0.69998 1.6251 0.3673 0.85355 0.0108 2.0081-0.68598 2.6224-0.42124 0.37412-1.1071 0.6695-1.6093 0.91436-0.69848 0.3405-1.3999 0.78545-2.1811 0.93231-0.17276 0.03244-0.6124 0.09017-0.46589-0.24511 0.0679-0.1557 0.5632-0.31958 0.70624-0.39914 0.57854-0.32178 1.1398-0.7325 1.6803-1.1259 0.6611-0.47762 1.4509-0.77856 1.9707-1.4397 0.21257-0.27041 0.2467-0.34263 0.19603-0.65362-0.0482-0.29672-0.0936-0.63858-0.15606-0.93544-0.0704-0.33458-0.16922-0.65821-0.34775-0.95855zm-12.102 0 0.1929 0.33674c-0.17839 0.30034-0.27723 0.62396-0.34774 0.95855-0.0625 0.29686-0.10776 0.63872-0.1562 0.93544-0.0505 0.31099-0.0165 0.38321 0.19617 0.65362 0.51973 0.6611 1.309 0.96204 1.9701 1.4397 0.54034 0.3934 1.1028 0.80412 1.6814 1.1259 0.14297 0.07956 0.6383 0.24343 0.70623 0.39914 0.14603 0.33528-0.29305 0.27754-0.46574 0.24511-0.78124-0.14686-1.4838-0.59181-2.1822-0.93231-0.50213-0.24487-1.1876-0.54025-1.609-0.91436-0.6966-0.61426-1.0529-1.7688-0.68584-2.6224 0.2134-0.49551 0.2351-1.0037 0.69998-1.6251z" fill="#f39914"/>
	<path d="m117.17 49.952c2.3702 0 4.2984 1.9282 4.2984 4.2984 0 2.3702-1.9282 4.2984-4.2984 4.2984s-4.2984-1.9282-4.2984-4.2984c0-2.3702 1.9282-4.2984 4.2984-4.2984zm0 0.14093c-2.2924 0-4.1575 1.865-4.1575 4.1575 0 2.2925 1.8651 4.1575 4.1575 4.1575 2.2925 0 4.1575-1.865 4.1575-4.1575 0-2.2925-1.865-4.1575-4.1575-4.1575zm1.9342 2.2233v3.8685h-3.8684v-3.8685h3.8052zm-0.0633 0.06331h-1.2051v1.2051h1.2051zm-1.2684 0h-1.2051v1.2051h1.2051zm-1.2684 0h-1.2051v1.2051h1.2051zm0.66585 0.15855a0.44394 0.44394 0 0 1 0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399-0.44399 0.44394 0.44394 0 0 1 0.44399-0.44399zm1.8709 1.1098h-1.2051v1.2051h1.2051zm-1.2684 0h-1.2051v1.2051h1.2051zm-1.2684 0h-1.2051v1.2051h1.2051zm-0.60253 0.15855a0.44394 0.44394 0 0 1 0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399-0.44399 0.44394 0.44394 0 0 1 0.44399-0.44399zm3.1393 1.1098h-1.2051v1.2051h1.2051zm-1.2684 0h-1.2051v1.2051h1.2051zm-1.2684 0h-1.2051v1.2051h1.2051zm1.9342 0.15855a0.44394 0.44394 0 0 1 0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399-0.44399 0.44394 0.44394 0 0 1 0.44399-0.44399zm-1.2684 0a0.44394 0.44394 0 0 1 0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399-0.44399 0.44394 0.44394 0 0 1 0.44399-0.44399zm-1.2684 0a0.44394 0.44394 0 0 1 0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399 0.44399 0.44394 0.44394 0 0 1-0.44399-0.44399 0.44394 0.44394 0 0 1 0.44399-0.44399z" fill="#162284"/>
	<path d="m64.008 53.115a1.5066 1.5066 0 0 0-1.5508 1.5059 1.5068 1.5068 0 1 0 3.0137 0 1.5066 1.5066 0 0 0-1.4629-1.5059zm-29.041 5.9961c-4.6084 0-7.6816 3.3079-7.6816 7.8867 0 4.313 3.1323 7.8887 7.6816 7.8887 1.0044 0 2.3323-0.08935 3.4844-0.62109l-0.20703-2.4824c-0.85669 0.56128-2.0371 0.85742-2.9824 0.85742-3.5744 0-5.0215-2.9544-5.0215-5.6426 0-2.8655 1.742-5.6426 4.8438-5.6426 0.88623 0 1.9502 0.20728 3.0137 0.65039l0.23633-2.3047c-0.7976-0.32495-2.2446-0.58984-3.3672-0.58984zm14.699 0c-1.9202 0-3.5745 0.59082-4.9629 1.418l0.14844 2.3633c1.1226-0.94531 2.8054-1.5371 4.3711-1.5371 2.7768 0 3.7227 1.3301 3.7227 3.9297-1.093-0.05908-1.8601-0.05859-2.9531-0.05859-2.8655 0-7.002 1.1817-7.002 4.9629 0 3.279 2.2739 4.6973 5.5234 4.6973 2.5405 0 4.0181-1.3889 4.668-2.3047h0.05859v1.9492h2.5996c-0.05908-0.44312-0.11719-1.2398-0.11719-2.9531v-6.2344c0-4.1062-1.7437-6.2324-6.0566-6.2324zm28.984 0c-1.5952 0-3.1912 1.1218-3.9297 2.6875h-0.05859v-2.334h-2.5996v15.066h2.7773v-6.8535c0-3.7812 1.624-6.1445 4.1055-6.1445 0.47266 0 1.0349 0.05884 1.5371 0.26562v-2.4805c-0.59082-0.11816-1.0049-0.20703-1.832-0.20703zm14.344 0c-4.6084 0-7.6797 3.3079-7.6797 7.8867 0 4.313 3.1304 7.8887 7.6797 7.8887 4.5198 0 7.6523-3.5757 7.6524-7.8887 0-4.5788-3.0735-7.8867-7.6524-7.8867zm-30.42 0.35352v15.066h2.7773v-15.066zm30.42 1.8906c2.9541 0 4.6973 2.7771 4.6973 5.6426 0 2.6882-1.4478 5.6426-4.6973 5.6426-3.279 0-4.7266-2.9544-4.7266-5.6426 0-2.8655 1.7429-5.6426 4.7266-5.6426zm-41.82 5.9375c0.59082 0 1.1807 0.06055 1.7715 0.06055v1.3281c0 2.2451-1.448 3.959-4.1953 3.959-1.2703 0-2.8066-0.85596-2.8066-2.4512 0-2.6587 3.7239-2.8965 5.2305-2.8965z" fill="#162284"/>
</svg>);
}