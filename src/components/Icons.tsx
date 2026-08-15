import React from 'react';

// ============================================================
// SVG Icons — Clean, crisp icons matching ZED's visual style
// All icons are inline SVGs for zero dependencies & pixel control
// ============================================================

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const defaultProps: Required<Pick<IconProps, 'size' | 'strokeWidth'>> = {
  size: 16,
  strokeWidth: 1.5,
};

export const StarIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 1.5l2 5 5.5.5-4 4 1 5.5-4.5-2.5-4.5 2.5 1-5.5-4-4 5.5-.5z" />
  </svg>
);

export const ListIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 4h8M5 8h8M5 12h8M3 4v.01M3 8v.01M3 12v.01" />
  </svg>
);


// ── File Type Icons — exact SVGs from ZED Symbols Icon Theme ──
// Source: ~/Library/Application Support/Zed/extensions/installed/symbols/

// tsx → react-ts (teal Node.js-style icon)
export const ReactTsIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.2348 21.7945C11.4696 21.9297 11.7356 22 12.0034 22L12.0027 21.9961C12.2737 21.9968 12.5401 21.9259 12.775 21.7907L20.1019 17.5586C20.5752 17.2834 20.8705 16.7716 20.8705 16.2231V7.76619C20.8704 7.49581 20.7993 7.2302 20.6644 6.99586C20.5296 6.76152 20.3356 6.56666 20.1019 6.4307L12.775 2.19675C12.3146 1.93442 11.6982 1.93442 11.2341 2.19675L3.89804 6.42886C3.42291 6.70036 3.12939 7.21401 3.12939 7.76435V16.2212C3.12958 16.4919 3.20064 16.7577 3.33549 16.9923C3.47035 17.227 3.6643 17.4222 3.89804 17.5586L5.82056 18.6666C6.75247 19.1252 7.08634 19.1252 7.5101 19.1252C8.88779 19.1252 9.68028 18.2905 9.68028 16.8376V8.48713C9.68028 8.36789 9.58488 8.27617 9.46931 8.27617H8.54107C8.42183 8.27617 8.32828 8.36789 8.32828 8.48713V16.834C8.32828 17.4797 7.66236 18.1218 6.57269 17.5769L4.56578 16.4175C4.49607 16.379 4.45205 16.302 4.45205 16.2212V7.76435C4.45205 7.68364 4.49717 7.60475 4.56817 7.5644L11.8925 3.33779C11.9603 3.29743 12.0502 3.29743 12.1181 3.33779L19.4439 7.5644C19.5132 7.60659 19.5572 7.6818 19.5572 7.76619V16.2231C19.5572 16.3038 19.5132 16.3827 19.4453 16.4212L12.1166 20.6515C12.0537 20.6882 11.9574 20.6882 11.8895 20.6515L10.0099 19.5361C9.95398 19.5031 9.88244 19.4921 9.82777 19.5233C9.3077 19.8186 9.20882 19.8572 8.72159 20.0278C8.60106 20.0694 8.42275 20.1417 8.78818 20.346L11.2348 21.7945ZM10.3882 13.4661C10.3882 14.7007 11.0605 16.1726 14.2672 16.1726L14.2565 16.1813C16.5789 16.1813 17.9108 15.2659 17.9108 13.6699C17.9108 12.0867 16.8413 11.6648 14.5886 11.3658C12.3138 11.0649 12.0827 10.909 12.0827 10.3752C12.0827 9.93489 12.279 9.34786 13.9648 9.34786C15.4709 9.34786 16.0249 9.67256 16.2542 10.687C16.2744 10.7824 16.3606 10.8521 16.4597 10.8521H17.4118C17.4413 10.8521 17.4705 10.846 17.4976 10.8341C17.5246 10.8223 17.5489 10.8049 17.5689 10.7832C17.5889 10.7615 17.6042 10.7359 17.6137 10.7079C17.6233 10.68 17.627 10.6504 17.6246 10.621C17.4778 8.8709 16.3148 8.0564 13.9685 8.0564C11.879 8.0564 10.6316 8.93694 10.6316 10.4155C10.6316 12.0207 11.8717 12.4628 13.8786 12.6609C16.2781 12.8957 16.4652 13.2461 16.4652 13.7176C16.4652 14.5367 15.8085 14.8856 14.2638 14.8856C12.3248 14.8856 11.8992 14.3991 11.7561 13.4345C11.7396 13.3312 11.6516 13.2551 11.547 13.2551H10.6004C10.4828 13.2551 10.3882 13.3487 10.3882 13.4661Z" fill="#2DD4BF"/>
  </svg>
);

// ts → TypeScript blue T
export const TypeScriptIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3.23446 9.09304V7.31818H11.5967V9.09304H8.47949V17.5H6.35165V9.09304H3.23446ZM18.4972 10.2464C18.4575 9.84541 18.2868 9.53385 17.9852 9.31179C17.6836 9.08972 17.2742 8.97869 16.7572 8.97869C16.4059 8.97869 16.1092 9.02841 15.8673 9.12784C15.6253 9.22396 15.4397 9.35819 15.3105 9.53054C15.1845 9.70289 15.1215 9.89844 15.1215 10.1172C15.1149 10.2995 15.153 10.4586 15.2359 10.5945C15.3221 10.7304 15.4397 10.848 15.5889 10.9474C15.738 11.0436 15.9104 11.1281 16.1059 11.201C16.3015 11.2706 16.5103 11.3303 16.7323 11.38L17.6471 11.5987C18.0912 11.6982 18.4989 11.8307 18.8701 11.9964C19.2413 12.1622 19.5628 12.366 19.8346 12.608C20.1064 12.8499 20.3169 13.1349 20.466 13.4631C20.6185 13.7912 20.6963 14.1674 20.6997 14.5916C20.6963 15.2147 20.5373 15.755 20.2224 16.2124C19.9108 16.6664 19.4601 17.0194 18.8701 17.2713C18.2835 17.5199 17.5758 17.6442 16.7472 17.6442C15.9253 17.6442 15.2094 17.5182 14.5995 17.2663C13.993 17.0144 13.519 16.6416 13.1776 16.1477C12.8396 15.6506 12.6623 15.0357 12.6457 14.3033H14.7288C14.752 14.6446 14.8498 14.9297 15.0221 15.1584C15.1978 15.3838 15.4314 15.5545 15.7231 15.6705C16.0181 15.7831 16.3512 15.8395 16.7224 15.8395C17.087 15.8395 17.4035 15.7865 17.672 15.6804C17.9437 15.5743 18.1542 15.4268 18.3034 15.2379C18.4525 15.049 18.5271 14.8319 18.5271 14.5866C18.5271 14.358 18.4591 14.1657 18.3232 14.0099C18.1907 13.8542 17.9951 13.7216 17.7366 13.6122C17.4814 13.5028 17.1682 13.4034 16.797 13.3139L15.6883 13.0355C14.8299 12.8267 14.1521 12.5002 13.6549 12.0561C13.1578 11.612 12.9108 11.0137 12.9142 10.2614C12.9108 9.64489 13.0749 9.1063 13.4063 8.6456C13.7411 8.1849 14.2001 7.82528 14.7835 7.56676C15.3668 7.30824 16.0297 7.17898 16.7721 7.17898C17.5278 7.17898 18.1874 7.30824 18.7508 7.56676C19.3176 7.82528 19.7584 8.1849 20.0732 8.6456C20.3881 9.1063 20.5505 9.63991 20.5605 10.2464H18.4972Z" fill="#2563EB"/>
  </svg>
);

// md → Markdown blue M↓
export const MarkdownIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 15.7143V8H5.32258L7.64516 10.8361L9.96774 8H12.2903V15.7143H9.96774V11.2899L7.64516 14.1261L5.32258 11.2899V15.7143H3ZM17.5161 15.7143L14.0323 11.9706H16.3548V8H18.6774V11.9706H21L17.5161 15.7143Z" fill="#60A5FA"/>
  </svg>
);

// json → brackets-yellow
export const JsonIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4.77778 6.66667C4.77778 5.19391 5.97169 4 7.44444 4C7.93536 4 8.33333 4.39797 8.33333 4.88889C8.33333 5.3798 7.93536 5.77778 7.44444 5.77778C6.95353 5.77778 6.55556 6.17575 6.55556 6.66667V10.1675C6.55556 10.8682 6.28251 11.5173 5.82622 12C6.28251 12.4827 6.55556 13.1318 6.55556 13.8325V17.3333C6.55556 17.8243 6.95353 18.2222 7.44444 18.2222C7.93536 18.2222 8.33333 18.6202 8.33333 19.1111C8.33333 19.602 7.93536 20 7.44444 20C5.97169 20 4.77778 18.8061 4.77778 17.3333V13.8325C4.77778 13.4246 4.50018 13.0691 4.10448 12.9701L3.6733 12.8623C3.2776 12.7635 3 12.4079 3 12C3 11.5921 3.2776 11.2365 3.6733 11.1377L4.10448 11.0299C4.50018 10.9309 4.77778 10.5754 4.77778 10.1675V6.66667ZM19 6.66667C19 5.19391 17.8061 4 16.3333 4C15.8424 4 15.4444 4.39797 15.4444 4.88889C15.4444 5.3798 15.8424 5.77778 16.3333 5.77778C16.8243 5.77778 17.2222 6.17575 17.2222 6.66667V10.1675C17.2222 10.8682 17.4953 11.5173 17.9516 12C17.4953 12.4827 17.2222 13.1318 17.2222 13.8325V17.3333C17.2222 17.8243 16.8243 18.2222 16.3333 18.2222C15.8424 18.2222 15.4444 18.6202 15.4444 19.1111C15.4444 19.602 15.8424 20 16.3333 20C17.8061 20 19 18.8061 19 17.3333V13.8325C19 13.4246 19.2776 13.0691 19.6733 12.9701L20.1044 12.8623C20.5002 12.7635 20.7778 12.4079 20.7778 12C20.7778 11.5921 20.5002 11.2365 20.1044 11.1377L19.6733 11.0299C19.2776 10.9309 19 10.5754 19 10.1675V6.66667Z" fill="#F59E0B"/>
  </svg>
);

// .gitignore → git (red)
export const GitIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M20.6613 11.1983L12.8016 3.33948C12.3493 2.88684 11.6153 2.88684 11.1625 3.33948L9.53048 4.97163L11.6006 7.04176C12.0819 6.87927 12.6335 6.98822 13.0169 7.37173C13.4023 7.75763 13.5105 8.31395 13.3439 8.79682L15.3392 10.7921C15.8219 10.6257 16.3788 10.7332 16.7643 11.1193C17.3032 11.658 17.3032 12.531 16.7643 13.0698C16.2253 13.6089 15.3524 13.6089 14.8131 13.0698C14.4079 12.6643 14.3077 12.069 14.5129 11.5697L12.6522 9.70896L12.652 14.6056C12.7834 14.6706 12.9074 14.7574 13.0168 14.8664C13.5556 15.4051 13.5556 16.2779 13.0168 16.8174C12.478 17.3561 11.6046 17.3561 11.0663 16.8174C10.5275 16.2779 10.5275 15.4051 11.0663 14.8664C11.1995 14.7335 11.3535 14.6329 11.5179 14.5655V9.62334C11.3535 9.55619 11.1996 9.45633 11.0662 9.32235C10.6581 8.91455 10.5598 8.31557 10.7691 7.8144L8.72837 5.77335L3.33959 11.162C2.8868 11.615 2.8868 12.349 3.33959 12.8017L11.1989 20.6605C11.6514 21.1132 12.3852 21.1132 12.8383 20.6605L20.6612 12.8388C21.1139 12.386 21.1139 11.6517 20.6612 11.1989" fill="#F87171"/>
  </svg>
);

// package.json → node (teal N)
export const NodeIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.2348 21.7945C11.4696 21.9297 11.7356 22 12.0034 22L12.0027 21.9961C12.2737 21.9968 12.5401 21.9259 12.775 21.7907L20.1019 17.5586C20.5752 17.2834 20.8705 16.7716 20.8705 16.2231V7.76619C20.8704 7.49581 20.7993 7.2302 20.6644 6.99586C20.5296 6.76152 20.3356 6.56666 20.1019 6.4307L12.775 2.19675C12.3146 1.93442 11.6982 1.93442 11.2341 2.19675L3.89804 6.42886C3.42291 6.70036 3.12939 7.21401 3.12939 7.76435V16.2212C3.12958 16.4919 3.20064 16.7577 3.33549 16.9923C3.47035 17.227 3.6643 17.4222 3.89804 17.5586L5.82056 18.6666C6.75247 19.1252 7.08634 19.1252 7.5101 19.1252C8.88779 19.1252 9.68028 18.2905 9.68028 16.8376V8.48713C9.68028 8.36789 9.58488 8.27617 9.46931 8.27617H8.54107C8.42183 8.27617 8.32828 8.36789 8.32828 8.48713V16.834C8.32828 17.4797 7.66236 18.1218 6.57269 17.5769L4.56578 16.4175C4.49607 16.379 4.45205 16.302 4.45205 16.2212V7.76435C4.45205 7.68364 4.49717 7.60475 4.56817 7.5644L11.8925 3.33779C11.9603 3.29743 12.0502 3.29743 12.1181 3.33779L19.4439 7.5644C19.5132 7.60659 19.5572 7.6818 19.5572 7.76619V16.2231C19.5572 16.3038 19.5132 16.3827 19.4453 16.4212L12.1166 20.6515C12.0537 20.6882 11.9574 20.6882 11.8895 20.6515L10.0099 19.5361C9.95398 19.5031 9.88244 19.4921 9.82777 19.5233C9.3077 19.8186 9.20882 19.8572 8.72159 20.0278C8.60106 20.0694 8.42275 20.1417 8.78818 20.346L11.2348 21.7945ZM10.3882 13.4661C10.3882 14.7007 11.0605 16.1726 14.2672 16.1726L14.2565 16.1813C16.5789 16.1813 17.9108 15.2659 17.9108 13.6699C17.9108 12.0867 16.8413 11.6648 14.5886 11.3658C12.3138 11.0649 12.0827 10.909 12.0827 10.3752C12.0827 9.93489 12.279 9.34786 13.9648 9.34786C15.4709 9.34786 16.0249 9.67256 16.2542 10.687C16.2744 10.7824 16.3606 10.8521 16.4597 10.8521H17.4118C17.4413 10.8521 17.4705 10.846 17.4976 10.8341C17.5246 10.8223 17.5489 10.8049 17.5689 10.7832C17.5889 10.7615 17.6042 10.7359 17.6137 10.7079C17.6233 10.68 17.627 10.6504 17.6246 10.621C17.4778 8.8709 16.3148 8.0564 13.9685 8.0564C11.879 8.0564 10.6316 8.93694 10.6316 10.4155C10.6316 12.0207 11.8717 12.4628 13.8786 12.6609C16.2781 12.8957 16.4652 13.2461 16.4652 13.7176C16.4652 14.5367 15.8085 14.8856 14.2638 14.8856C12.3248 14.8856 11.8992 14.3991 11.7561 13.4345C11.7396 13.3312 11.6516 13.2551 11.547 13.2551H10.6004C10.4828 13.2551 10.3882 13.3487 10.3882 13.4661Z" fill="#2DD4BF"/>
  </svg>
);

// eslint.config.mjs → eslint (purple)
export const EslintIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M15.9522 9.39441L12.1537 7.20135C12.1069 7.17433 12.0539 7.16011 11.9999 7.16011C11.946 7.16011 11.8929 7.17433 11.8462 7.20135L8.04774 9.39441C8.00102 9.42135 7.9622 9.46011 7.93519 9.50679C7.90818 9.55347 7.89393 9.60644 7.89386 9.66037V14.0465C7.89386 14.1561 7.95262 14.2576 8.04774 14.3128L11.8462 16.5058C11.9413 16.5606 12.0583 16.5606 12.1537 16.5058L15.9522 14.3128C16.0473 14.2579 16.1057 14.1565 16.1057 14.0465V9.66037C16.1057 9.55041 16.0473 9.44924 15.9522 9.39411V9.39441Z" fill="#A5B4FC"/>
    <path d="M2.12343 11.3921L6.66223 3.49617C6.82701 3.21052 7.13173 3 7.4613 3H16.5386C16.8685 3 17.1729 3.21052 17.338 3.49617L21.8765 11.3748C21.9574 11.5166 22 11.6771 22 11.8404C22 12.0037 21.9574 12.1642 21.8765 12.306L17.338 20.1374C17.1729 20.4227 16.8685 20.5687 16.5386 20.5687H7.4613C7.13173 20.5687 6.82701 20.4273 6.66223 20.1416L2.12373 12.2975C2.04273 12.1603 2 12.004 2 11.8447C2 11.6854 2.04273 11.529 2.12373 11.3918L2.12343 11.3921ZM5.88163 15.1888C5.88163 15.3051 5.9516 15.4123 6.05217 15.4705L11.8335 18.8058C11.9341 18.864 12.0601 18.864 12.1606 18.8058L17.9462 15.4705C18.0468 15.4123 18.117 15.3051 18.117 15.1888V8.5178C18.117 8.40178 18.0477 8.29425 17.9474 8.23609L12.1658 4.90136C12.116 4.87282 12.0597 4.85781 12.0024 4.85781C11.945 4.85781 11.8887 4.87282 11.8389 4.90136L6.05277 8.2364C5.95221 8.29455 5.88132 8.40209 5.88132 8.5181V15.1891L5.88163 15.1888Z" fill="#4F46E5"/>
  </svg>
);

// tsconfig.json → tsconfig (blue gear)
export const TsconfigIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M15.9694 13.5604C16.2655 14.6244 15.6499 15.7305 14.6137 15.9966L14.0642 16.1376C14.0219 16.4184 14 16.7065 14 17C14 17.3072 14.024 17.6083 14.0702 17.9012L14.5776 18.028C15.6241 18.2896 16.2462 19.407 15.9415 20.4781L15.7663 21.0942C16.1794 21.4706 16.6501 21.7762 17.1624 21.9936L17.6264 21.4873C18.3681 20.6781 19.6119 20.6783 20.3535 21.4878L20.8226 22C21.3338 21.785 21.8041 21.4823 22.2174 21.1091L22.0311 20.4397C21.735 19.3756 22.3506 18.2695 23.3868 18.0035L23.9358 17.8625C23.9781 17.5817 24 17.2936 24 17C24 16.6929 23.976 16.3917 23.9298 16.0987L23.4228 15.972C22.3763 15.7105 21.7543 14.5931 22.059 13.5219L22.234 12.9063C21.821 12.5297 21.3502 12.2241 20.8379 12.0066L20.3741 12.5127C19.6324 13.322 18.3885 13.3217 17.647 12.5122L17.1778 12C16.6666 12.2149 16.1962 12.5175 15.783 12.8907L15.9694 13.5604ZM19 18.464C18.2469 18.464 17.6364 17.8085 17.6364 17C17.6364 16.1916 18.2469 15.5361 19 15.5361C19.7531 15.5361 20.3636 16.1916 20.3636 17C20.3636 17.8085 19.7531 18.464 19 18.464Z" fill="#64748B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.23447 7.31818V9.09304H6.35165V17.5H8.4795V9.09304H11.5967V7.31818H3.23447ZM17.9852 9.31179C18.2868 9.53385 18.4575 9.84541 18.4973 10.2464H19.793C20.0296 10.1243 20.2863 10.0475 20.5493 10.0189C20.5068 9.50559 20.3481 9.04781 20.0732 8.6456C19.7584 8.1849 19.3176 7.82528 18.7508 7.56676C18.1874 7.30824 17.5278 7.17898 16.7721 7.17898C16.0297 7.17898 15.3668 7.30824 14.7835 7.56676C14.2001 7.82528 13.7411 8.1849 13.4063 8.6456C13.0749 9.1063 12.9108 9.64489 12.9142 10.2614C12.9108 11.0137 13.1578 11.612 13.6549 12.0561C13.7247 12.1184 13.7979 12.1784 13.8748 12.236C13.9942 11.929 14.1846 11.6479 14.4384 11.4187C14.7182 11.166 15.0185 10.9351 15.337 10.7294C15.2995 10.6866 15.2658 10.6416 15.2359 10.5945C15.153 10.4586 15.1149 10.2995 15.1215 10.1172C15.1215 9.89844 15.1845 9.70289 15.3105 9.53054C15.4397 9.35819 15.6253 9.22396 15.8673 9.12784C16.1092 9.02841 16.4059 8.97869 16.7572 8.97869C17.2742 8.97869 17.6836 9.08973 17.9852 9.31179ZM12.6681 14.6665C12.8044 14.5256 12.96 14.4031 13.1312 14.3033H12.6457C12.6485 14.4277 12.656 14.5488 12.6681 14.6665Z" fill="#2563EB"/>
  </svg>
);

// next.config.ts → next (grey N logo)
export const NextIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fill="url(#ni-a)" d="M15.889 6.4h1.867v8.4h-1.867z"/>
    <path fill="url(#ni-b)" d="M7.333 7.55V6.4h1.471l12.259 15.69-1.471 1.15L7.333 7.55Z"/>
    <path fill="#64748B" d="M6.4 6.4h1.867v11.2H6.4z"/>
    <defs>
      <linearGradient id="ni-a" x1="16.822" x2="16.822" y1="9.5" y2="14.8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#64748B"/>
        <stop offset="1" stopColor="#64748B" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="ni-b" x1="14.567" x2="20.327" y1="15.267" y2="22.665" gradientUnits="userSpaceOnUse">
        <stop stopColor="#64748B"/>
        <stop offset="1" stopColor="#64748B" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

// package-lock.json → lock (grey)
export const LockIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M7 9.99986H17C18.6569 9.99986 20 11.343 20 12.9999V17.9999C20 19.6567 18.6569 20.9999 17 20.9999H7C5.34314 20.9999 4 19.6567 4 17.9999V12.9999C4 11.343 5.34315 9.99986 7 9.99986ZM7 11.9999C6.44772 11.9999 6 12.4476 6 12.9999V17.9999C6 18.5521 6.44772 18.9999 7 18.9999H17C17.5523 18.9999 18 18.5521 18 17.9999V12.9999C18 12.4476 17.5523 11.9999 17 11.9999H7Z" fill="#64748B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.2689 4.93151C15.3544 3.61181 13.6806 3.07502 12.3531 3.0078C10.9524 2.93688 9.15252 3.34359 7.98517 4.84102C7.49028 5.47585 7.2821 6.24826 7.17477 6.82773C7.05797 7.45833 7.01207 8.1481 7.00214 8.81526C6.99154 9.52762 7.02146 10.2772 7.07178 10.9996H9.07693C8.93005 9.00977 8.94468 6.86318 9.5625 6.07066C10.8281 4.44717 13.7812 4.85304 14.625 6.07066C15.0474 6.68022 15.0469 8.91728 14.941 10.9996H16.9435C16.9827 10.2007 17.0069 9.37263 16.9983 8.60987C16.9911 7.97564 16.961 7.33892 16.8867 6.78085C16.8271 6.3334 16.6993 5.55268 16.2689 4.93151Z" fill="#64748B"/>
  </svg>
);

// Folder — closed (grey outline)
export const FolderIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7.78388 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9.875C21 8.77043 20.1046 7.875 19 7.875H12.7161C12.2531 7.875 11.8044 7.71435 11.4466 7.42045L9.05336 5.45455C8.69558 5.16065 8.2469 5 7.78388 5Z" stroke="#64748B" strokeWidth="2"/>
  </svg>
);

// Folder — open (grey filled)
export const FolderOpenIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M7.78388 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9.875C21 8.77043 20.1046 7.875 19 7.875H12.7161C12.2531 7.875 11.8044 7.71435 11.4466 7.42045L9.05336 5.45455C8.69558 5.16065 8.2469 5 7.78388 5Z" fill="#64748B" stroke="#64748B" strokeWidth="2"/>
  </svg>
);

// Helper: map file name/type → exact Symbols icon
export function getFileIconComponent(fileType: string, size: number = 14, fileName?: string): React.ReactNode {
  // Specific filename overrides (highest priority)
  if (fileName) {
    const lower = fileName.toLowerCase();
    if (lower === 'package.json')              return <NodeIcon size={size} />;
    if (lower === 'package-lock.json')         return <LockIcon size={size} />;
    if (lower === 'tsconfig.json' || lower === 'tsconfig.build.json') return <TsconfigIcon size={size} />;
    if (lower.startsWith('next.config'))       return <NextIcon size={size} />;
    if (lower.startsWith('eslint.config') || lower === '.eslintrc' || lower === '.eslintrc.json') return <EslintIcon size={size} />;
    if (lower === '.gitignore')                return <GitIcon size={size} />;
  }

  // Extension-based fallback
  switch (fileType) {
    case 'tsx':    return <ReactTsIcon size={size} />;
    case 'ts':     return <TypeScriptIcon size={size} />;
    case 'mjs':    return <TypeScriptIcon size={size} />;
    case 'json':   return <JsonIcon size={size} />;
    case 'md':     return <MarkdownIcon size={size} />;
    case 'gitignore': return <GitIcon size={size} />;
    case 'env':    return <JsonIcon size={size} />;
    default:       return <TypeScriptIcon size={size} />;
  }
}


// ── Chevron ───────────────────────────────────────────────────

export const ChevronRight: React.FC<IconProps> = ({ size = 12, color = 'var(--text-muted)', className }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
    <path d="M4.5 2.5L8 6L4.5 9.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Status Bar Icons — exact SVGs from github.com/zed-industries/zed/assets/icons ──

// file_tree.svg
export const FileTreeIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M3 2.5V3.5M3 3.5V9M3 3.5C3 5.46875 5.96875 5 5.96875 5M3 9C3 11 5.96875 11 5.96875 11M3 9V12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3H9.5C8.67157 3 8 3.67157 8 4.5V5.5C8 6.32843 8.67157 7 9.5 7H12C12.8284 7 13.5 6.32843 13.5 5.5V4.5C13.5 3.67157 12.8284 3 12 3Z" fill="currentColor"/>
    <path d="M12 9H9.5C8.67157 9 8 9.67157 8 10.5V11.5C8 12.3284 8.67157 13 9.5 13H12C12.8284 13 13.5 12.3284 13.5 11.5V10.5C13.5 9.67157 12.8284 9 12 9Z" fill="currentColor"/>
  </svg>
);

// git_branch.svg
export const GitBranchIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M4.5 13C5.32843 13 6 12.3284 6 11.5C6 10.6716 5.32843 10 4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13Z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M11.5 6C12.3284 6 13 5.3284 13 4.5C13 3.6716 12.3284 3 11.5 3C10.6716 3 10 3.6716 10 4.5C10 5.3284 10.6716 6 11.5 6Z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M4.5 10L4.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M10 4.44133C8.54131 4.44133 7.14236 5.02697 6.11091 6.06943C5.07946 7.11188 4.5 8.52575 4.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// list_tree.svg
export const ListIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M13.5 8H9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 4L6.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 12H9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 3.5V6.33333C3 7.25 3.72 8 4.6 8H7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6V10.5C3 11.325 3.72 12 4.6 12H7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// settings.svg (gear)
export const ExtensionsIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M8.13418 2H7.86581C7.54229 2 7.23202 2.12643 7.00326 2.35148C6.7745 2.57652 6.64597 2.88174 6.64597 3.2V3.308C6.64576 3.51843 6.58929 3.72512 6.48224 3.9073C6.37518 4.08949 6.22132 4.24078 6.03605 4.346L5.77379 4.496C5.58836 4.60132 5.378 4.65677 5.16387 4.65677C4.94974 4.65677 4.73939 4.60132 4.55395 4.496L4.46246 4.44799C4.18255 4.28915 3.85 4.24606 3.53783 4.32819C3.22565 4.4103 2.95935 4.61092 2.79738 4.886L2.6632 5.11399C2.50174 5.38936 2.45793 5.7165 2.5414 6.02359C2.62488 6.33069 2.82881 6.59266 3.10844 6.75199L3.19993 6.81199C3.38429 6.9167 3.53759 7.06704 3.64459 7.24809C3.75159 7.42914 3.80857 7.63457 3.80985 7.84399V8.14999C3.8107 8.36144 3.75475 8.56937 3.64764 8.7527C3.54054 8.93602 3.38609 9.08826 3.19993 9.19399L3.10844 9.24799C2.82881 9.40732 2.62488 9.66929 2.5414 9.97638C2.45793 10.2835 2.50174 10.6106 2.6632 10.886L2.79738 11.114C2.95935 11.3891 3.22565 11.5897 3.53783 11.6718C3.85 11.7539 4.18255 11.7109 4.46246 11.552L4.55395 11.5039C4.73939 11.3986 4.94974 11.3432 5.16387 11.3432C5.378 11.3432 5.58836 11.3986 5.77379 11.5039L6.03605 11.654C6.22132 11.7592 6.37518 11.9105 6.48224 12.0927C6.58929 12.2749 6.64576 12.4815 6.64597 12.6919V12.7999C6.64597 13.1183 6.7745 13.4235 7.00326 13.6486C7.23202 13.8735 7.54229 14 7.86581 14H8.13418C8.4577 14 8.76797 13.8735 8.99674 13.6486C9.22551 13.4235 9.35402 13.1183 9.35402 12.7999V12.6919C9.35424 12.4815 9.4107 12.2749 9.51776 12.0927C9.62481 11.9105 9.77869 11.7592 9.96397 11.654L10.2262 11.5039C10.4116 11.3986 10.622 11.3432 10.8361 11.3432C11.0503 11.3432 11.2606 11.3986 11.4461 11.5039L11.5376 11.552C11.8174 11.7109 12.15 11.7539 12.4621 11.6718C12.7744 11.5897 13.0406 11.3891 13.2026 11.114L13.3368 10.88C13.4982 10.6047 13.5421 10.2775 13.4586 9.97035C13.3751 9.66329 13.1712 9.40131 12.8916 9.24199L12.8001 9.19399C12.6139 9.08826 12.4595 8.93602 12.3524 8.7527C12.2452 8.56937 12.1893 8.36144 12.1901 8.14999V7.84999C12.1893 7.63854 12.2452 7.43062 12.3524 7.24729C12.4595 7.06396 12.6139 6.91172 12.8001 6.80599L12.8916 6.75199C13.1712 6.59266 13.3751 6.33069 13.4586 6.02359C13.5421 5.7165 13.4982 5.38936 13.3368 5.11399L13.2026 4.886C13.0406 4.61092 12.7744 4.4103 12.4621 4.32819C12.15 4.24606 11.8174 4.28915 11.5376 4.44799L11.4461 4.496C11.2606 4.60132 11.0503 4.65677 10.8361 4.65677C10.622 4.65677 10.4116 4.60132 10.2262 4.496L9.96397 4.346C9.77869 4.24078 9.62481 4.08949 9.51776 3.9073C9.4107 3.72512 9.35424 3.51843 9.35402 3.308V3.2C9.35402 2.88174 9.22551 2.57652 8.99674 2.35148C8.76797 2.12643 8.4577 2 8.13418 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="currentColor"/>
  </svg>
);

// magnifying_glass.svg
export const SearchIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path opacity="0.1" d="M3 7.31034C3 4.92981 4.92981 3 7.31034 3C9.6909 3 11.6207 4.92981 11.6207 7.31034C11.6207 9.6909 9.6909 11.6207 7.31034 11.6207C4.92981 11.6207 3 9.6909 3 7.31034Z" fill="currentColor"/>
    <path d="M13 13L10.4138 10.4138M3 7.31034C3 4.92981 4.92981 3 7.31034 3C9.6909 3 11.6207 4.92981 11.6207 7.31034C11.6207 9.6909 9.6909 11.6207 7.31034 11.6207C4.92981 11.6207 3 9.6909 3 7.31034Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// bolt_filled.svg (AI assistant)
export const BoltIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.48836 2.06572C9.62447 2.1282 9.73467 2.23101 9.80181 2.35814C9.86896 2.48527 9.88927 2.62958 9.8596 2.76863L9.10795 6.28572H12.8525C12.9843 6.28571 13.1133 6.32112 13.2242 6.38774C13.335 6.45435 13.4231 6.54936 13.4779 6.66146C13.5326 6.77354 13.5518 6.89799 13.5331 7.01997C13.5143 7.14197 13.4585 7.25635 13.3722 7.34951L7.41396 13.7785C7.31457 13.8856 7.18007 13.959 7.03146 13.9872C6.88284 14.0153 6.72841 13.9968 6.59222 13.9344C6.45604 13.872 6.34575 13.7693 6.27851 13.6421C6.21127 13.515 6.19086 13.3707 6.22048 13.2316L6.97213 9.71452H3.22758C3.0958 9.71453 2.96679 9.67912 2.85591 9.61251C2.74505 9.54589 2.65697 9.45088 2.60221 9.33879C2.54744 9.22671 2.52829 9.10225 2.54702 8.98027C2.56575 8.85827 2.62157 8.7439 2.70784 8.65074L8.66611 2.22173C8.76554 2.1145 8.90011 2.04105 9.04884 2.01284C9.19758 1.98462 9.3521 2.00321 9.48836 2.06572Z" fill="currentColor"/>
  </svg>
);

// check.svg
export const CheckIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M4.625 8.98121L7.03402 10.7714L11.3437 4.75989" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// screen.svg (terminal/bottom panel toggle)
export const TerminalIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M12.8 3H3.2C2.53726 3 2 3.51167 2 4.14286V9.85714C2 10.4883 2.53726 11 3.2 11H12.8C13.4627 11 14 10.4883 14 9.85714V4.14286C14 3.51167 13.4627 3 12.8 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33325 14H10.6666" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 11.3333V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// person.svg (collaborators)
export const CollaboratorsIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12.667 14v-1.333A2.667 2.667 0 0 0 10 10H6a2.667 2.667 0 0 0-2.667 2.667V14M8 7.333A2.667 2.667 0 1 0 8 2a2.667 2.667 0 0 0 0 5.333Z"/>
  </svg>
);

// pin.svg
export const StarIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M8 10V13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.71429 7.088C6.7142 7.26164 6.66963 7.43181 6.58559 7.57938C6.50156 7.72695 6.38138 7.84606 6.23857 7.92333L5.47571 8.34333C5.33291 8.4206 5.21273 8.53972 5.12869 8.68729C5.04465 8.83486 5.00008 9.00503 5 9.17867V9.53333C5 9.6571 5.04515 9.7758 5.12553 9.86332C5.2059 9.95083 5.31491 10 5.42857 10H10.5714C10.6851 10 10.7941 9.95083 10.8745 9.86332C10.9548 9.7758 11 9.6571 11 9.53333V9.17867C10.9999 9.00503 10.9553 8.83486 10.8713 8.68729C10.7873 8.53972 10.6671 8.4206 10.5243 8.34333L9.76143 7.92333C9.61862 7.84606 9.49844 7.72695 9.41441 7.57938C9.33037 7.43181 9.2858 7.26164 9.28571 7.088V5.33333C9.28571 5.20957 9.33087 5.09087 9.41124 5.00335C9.49161 4.91583 9.60062 4.86667 9.71429 4.86667C9.94161 4.86667 10.1596 4.76833 10.3204 4.5933C10.4811 4.41827 10.5714 4.18087 10.5714 3.93333C10.5714 3.6858 10.4811 3.4484 10.3204 3.27337C10.1596 3.09833 9.94161 3 9.71429 3H6.28571C6.05839 3 5.84037 3.09833 5.67962 3.27337C5.51888 3.4484 5.42857 3.6858 5.42857 3.93333C5.42857 4.18087 5.51888 4.41827 5.67962 4.5933C5.84037 4.76833 6.05839 4.86667 6.28571 4.86667C6.39938 4.86667 6.50839 4.91583 6.58876 5.00335C6.66913 5.09087 6.71429 5.20957 6.71429 5.33333V7.088Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// split.svg
export const SplitHorizontalIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path opacity="0.15" d="M14 2H8V14H14V2Z" fill="currentColor"/>
    <path d="M13.4 2H2.6C2.26863 2 2 2.26863 2 2.6V13.4C2 13.7314 2.26863 14 2.6 14H13.4C13.7314 14 14 13.7314 14 13.4V2.6C14 2.26863 13.7314 2 13.4 2Z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M8 2V14" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

// zed_assistant.svg (sparkle star — shown as "Z»" label in status bar)
export const ZedLogoIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M8 2.93652L6.9243 6.20697C6.86924 6.37435 6.77565 6.52646 6.65105 6.65105C6.52646 6.77565 6.37435 6.86924 6.20697 6.9243L2.93652 8L6.20697 9.0757C6.37435 9.13076 6.52646 9.22435 6.65105 9.34895C6.77565 9.47354 6.86924 9.62565 6.9243 9.79306L8 13.0635L9.0757 9.79306C9.13076 9.62565 9.22435 9.47354 9.34895 9.34895C9.47354 9.22435 9.62565 9.13076 9.79306 9.0757L13.0635 8L9.79306 6.9243C9.62565 6.86924 9.47354 6.77565 9.34895 6.65105C9.22435 6.52646 9.13076 6.37435 9.0757 6.20697L8 2.93652Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path opacity="0.6" d="M3.33334 2V4.66666M2 3.33334H4.66666" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path opacity="0.6" d="M12.6665 11.3333V14M11.3333 12.6666H13.9999" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Kept for compatibility — unused but referenced elsewhere
export const PanelBottomIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke={color} strokeWidth="1.2"/>
    <line x1="1.5" y1="10" x2="14.5" y2="10" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const PanelLeftIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke={color} strokeWidth="1.2"/>
    <line x1="5.5" y1="2.5" x2="5.5" y2="13.5" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const PanelRightIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke={color} strokeWidth="1.2"/>
    <line x1="10.5" y1="2.5" x2="10.5" y2="13.5" stroke={color} strokeWidth="1.2"/>
  </svg>
);



// ── Editor Icons ──────────────────────────────────────────────

export const CodeIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M5.5 3.5L2 8l3.5 4.5M10.5 3.5L14 8l-3.5 4.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EyeIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8s-2.5 4.5-6.5 4.5S1.5 8 1.5 8z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="8" cy="8" r="2" stroke={color} strokeWidth="1.2" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 14, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
    <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

// ── Navigation Icons ──────────────────────────────────────────

export const ArrowLeftIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M10 3L5 8l5 5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M6 3l5 5-5 5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HamburgerIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M2.5 4h11M2.5 8h11M2.5 12h11" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

// ── Additional Tech/UI Icons ───────────────────────────────────

export const BuildingIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 14V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10M3 14h10M6 6h4M6 9h4M6 12h4" />
  </svg>
);

export const GraduationIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 2l6 3.5L8 9 2 5.5 8 2zM2 5.5v5c0 1.5 2.5 2.5 6 2.5s6-1 6-2.5v-5M14 5.5v4M12 9.5v2" />
  </svg>
);

export const LeafIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 14v-4M8 10a5 5 0 0 1 5-5c0-1.5-1.5-3-3-3a5 5 0 0 0-5 5v3" />
    <path d="M8 10a5 5 0 0 0-5-5c0-1.5 1.5-3 3-3a5 5 0 0 1 5 5v3" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 2L3 9h4l-1 5 6-7H8l1-5z" fill={color} fillOpacity="0.1" />
  </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-1 2-2.5 2h-1c-.8 0-1.5.7-1.5 1.5S9.7 14 8 14z" />
    <circle cx="5.5" cy="6.5" r=".5" fill={color} />
    <circle cx="8" cy="4.5" r=".5" fill={color} />
    <circle cx="10.5" cy="6.5" r=".5" fill={color} />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="12" height="8" rx="1" />
    <path d="M2 5l6 4 6-4" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 1a7 7 0 0 0-2.2 13.6c.3.1.5-.1.5-.3v-1.2c-2 .4-2.4-.9-2.4-.9-.3-.8-.8-1-1-1-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-1.6-.2-3.2-.8-3.2-3.5 0-.8.3-1.4.7-1.9-.1-.2-.3-.9.1-1.9 0 0 .6-.2 2 .8.5-.1 1.1-.2 1.7-.2.6 0 1.2.1 1.7.2 1.4-1 2-.8 2-.8.4 1 .2 1.7.1 1.9.4.5.7 1.1.7 1.9 0 2.7-1.6 3.3-3.2 3.5.3.3.6.8.6 1.5v2.2c0 .3.2.4.5.3A7 7 0 0 0 8 1z" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="12" height="12" rx="2" />
    <path d="M6 6v5M10 11V8.5c0-1-.5-1.5-1.5-1.5s-1.5.5-1.5 1.5V11" />
    <circle cx="6" cy="4.5" r=".5" fill={color} />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="8" r="6" />
    <path d="M2.5 8h11M8 2c-2.5 0-4.5 2.7-4.5 6s2 6 4.5 6 4.5-2.7 4.5-6-2-6-4.5-6z" />
  </svg>
);

export const LaptopIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="10" height="6" rx="1" />
    <path d="M1 12h14" />
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5.5 13a3.5 3.5 0 0 1-1-6.8 4.5 4.5 0 1 1 8 1.8 3.5 3.5 0 0 1-1.5 6.8H5.5z" />
  </svg>
);

export const BrainIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 14A4 4 0 0 1 4 10a4 4 0 0 1 3-3.9v-2A2 2 0 0 1 9 2.2V4a4 4 0 0 1 3 3.9A4 4 0 0 1 8 14zM8 4V2M5 6L4 5M11 6l1-1M6 9H4M12 9h-2M7 12l-1 1M9 12l1 1" />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.5 3.5a2 2 0 0 0-2.8 0L3 10l3 3 6.7-6.7a2 2 0 0 0 0-2.8z" />
    <path d="M7 9l-4 4M9 7l2-2" />
  </svg>
);

export const BoxIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 1l6 3.5v7L8 15l-6-3.5v-7L8 1z" />
    <path d="M2 4.5L8 8l6-3.5M8 15V8" />
  </svg>
);

export const TagIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 8l-6 6-6-6V2h6l6 6zM4.5 4.5A.5.5 0 1 0 4.5 5.5.5.5 0 0 0 4.5 4.5z" />
  </svg>
);


