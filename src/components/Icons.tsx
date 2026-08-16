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



// ── File Type Icons — exact SVGs from ZED Symbols Icon Theme ──
// Source: ~/Library/Application Support/Zed/extensions/installed/symbols/

// tsx → react.svg (Cyan React Atom symbol)
export const ReactTsIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 13.6773C12.9263 13.6773 13.6773 12.9263 13.6773 12C13.6773 11.0737 12.9263 10.3227 12 10.3227C11.0737 10.3227 10.3227 11.0737 10.3227 12C10.3227 12.9263 11.0737 13.6773 12 13.6773Z" fill="#38BDF8"/>
    <path d="M12 15.4364C16.9706 15.4364 21 13.8979 21 12C21 10.1022 16.9706 8.56366 12 8.56366C7.02944 8.56366 3 10.1022 3 12C3 13.8979 7.02944 15.4364 12 15.4364Z" stroke="#38BDF8"/>
    <path d="M9.02403 13.7182C11.5093 18.0228 14.8564 20.7432 16.5 19.7942C18.1436 18.8453 17.4613 14.5865 14.976 10.2818C12.4907 5.9772 9.14359 3.25687 7.5 4.20579C5.85642 5.15472 6.53875 9.41357 9.02403 13.7182Z" stroke="#38BDF8"/>
    <path d="M9.02403 10.2818C6.53875 14.5865 5.85642 18.8453 7.5 19.7943C9.14359 20.7432 12.4907 18.0228 14.976 13.7182C17.4613 9.41358 18.1436 5.15472 16.5 4.2058C14.8564 3.25687 11.5093 5.97721 9.02403 10.2818Z" stroke="#38BDF8"/>
  </svg>
);

// package.json → npm.svg (Red npm box icon)
export const NodeIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20.1C3 20.6523 3.44772 21.1 4 21.1H20C20.5523 21.1 21 20.6523 21 20.1V4ZM12 17C12 17.5523 11.5523 18 11 18H7.00001C6.44772 18 6.00001 17.5523 6.00001 17V7.00004C6.00001 6.44775 6.44772 6.00004 7.00001 6.00004H17C17.5523 6.00004 18 6.44775 18 7.00004V17C18 17.5523 17.5523 18 17 18H16C15.4477 18 15 17.5523 15 17V10C15 9.44775 14.5523 9.00004 14 9.00004H13C12.4477 9.00004 12 9.44775 12 10V17Z" fill="#F87171"/>
  </svg>
);

// .env → gear.svg (Grey Gear icon)
export const EnvGearIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5.93871 5.3696C6.53094 7.4206 5.29981 9.55287 3.22737 10.0657L2.1283 10.3376C2.04383 10.8788 2 11.4342 2 12.0001C2 12.5921 2.04797 13.1725 2.14034 13.7373L3.15512 13.9817C5.24827 14.4859 6.49237 16.64 5.88302 18.7047L5.53253 19.8924C6.3588 20.6178 7.30021 21.207 8.32477 21.626L9.25282 20.6501C10.7362 19.0902 13.2239 19.0905 14.7069 20.6511L15.6451 21.6384C16.6676 21.2239 17.6083 20.6404 18.4347 19.921L18.0622 18.6306C17.47 16.5794 18.7011 14.4471 20.7736 13.9344L21.8717 13.6626C21.9562 13.1213 22 12.566 22 12.0001C22 11.408 21.952 10.8275 21.8597 10.2625L20.8456 10.0183C18.7527 9.51431 17.5086 7.36021 18.1179 5.29529L18.468 4.10856C17.6419 3.38275 16.7004 2.79352 15.6758 2.37436L14.7481 3.34982C13.2647 4.90999 10.7771 4.90943 9.29402 3.34888L8.35562 2.36157C7.33313 2.77584 6.39248 3.35923 5.56602 4.07864L5.93871 5.3696ZM12.0001 14.822C10.4937 14.822 9.27276 13.5586 9.27276 12.0001C9.27276 10.4416 10.4937 9.17812 12.0001 9.17812C13.5063 9.17812 14.7272 10.4416 14.7272 12.0001C14.7272 13.5586 13.5063 14.822 12.0001 14.822Z" fill="#64748B"/>
  </svg>
);

// debug.svg (exact ZED status bar bug icon)
export const DebugIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M5.44727 2.19177L6.38617 3.11055" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.64722 3.11055L10.553 2.19177" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.66298 6.07369V5.10997C5.64886 4.80689 5.69884 4.50419 5.80993 4.22016C5.92101 3.93613 6.09088 3.67665 6.3093 3.45738C6.52771 3.23811 6.79013 3.0636 7.08074 2.94437C7.37134 2.82514 7.68409 2.76367 8.00011 2.76367C8.31614 2.76367 8.62889 2.82514 8.91949 2.94437C9.21008 3.0636 9.4725 3.23811 9.69092 3.45738C9.90933 3.67665 10.0792 3.93613 10.1903 4.22016C10.3014 4.50419 10.3514 4.80689 10.3373 5.10997V6.07369" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path opacity="0.1" d="M8.00016 13.1366C6.09923 13.1366 4.54395 11.6686 4.54395 9.87441V8.24333C4.54395 7.66653 4.7867 7.11337 5.21882 6.70552C5.65092 6.29767 6.237 6.06854 6.8481 6.06854H9.15225C9.76335 6.06854 10.3494 6.29767 10.7815 6.70552C11.2136 7.11337 11.4564 7.66653 11.4564 8.24333V9.87441C11.4564 11.6686 9.9011 13.1366 8.00016 13.1366Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.00016 13.1366C6.09923 13.1366 4.54395 11.6686 4.54395 9.87441V8.24333C4.54395 7.66653 4.7867 7.11337 5.21882 6.70552C5.65092 6.29767 6.237 6.06854 6.8481 6.06854H9.15225C9.76335 6.06854 10.3494 6.29767 10.7815 6.70552C11.2136 7.11337 11.4564 7.66653 11.4564 8.24333V9.87441C11.4564 11.6686 9.9011 13.1366 8.00016 13.1366Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.54343 6.22415C3.43167 6.10894 2.51001 5.12967 2.51001 3.91998" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.54367 8.83472H2.2395" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.35449 13.4175C2.35449 12.2078 3.33376 11.1709 4.54345 11.1134" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.1673 3.91998C13.1673 5.12967 12.2455 6.10894 11.1511 6.22415" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.7605 8.83472H11.4563" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.4563 11.1134C12.666 11.1709 13.6453 12.2078 13.6453 13.4175" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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

// Folder — github badge
export const FolderGithubIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.5 11.4202C16.0137 11.4202 14 13.5215 14 16.1158C14 18.1936 15.2881 19.9486 17.0768 20.5708C17.3018 20.6119 17.3862 20.471 17.3862 20.3478C17.3862 20.2363 17.3806 19.8665 17.3806 19.4732C16.25 19.6904 15.9575 19.1856 15.8675 18.9215C15.8168 18.7865 15.5975 18.3697 15.4062 18.2582C15.2487 18.1702 15.0237 17.953 15.4006 17.9471C15.755 17.9413 16.0081 18.2876 16.0925 18.4284C16.4975 19.1386 17.1443 18.9391 17.4031 18.8158C17.4425 18.5106 17.5606 18.3052 17.69 18.1878C16.6887 18.0704 15.6425 17.6654 15.6425 15.8693C15.6425 15.3586 15.8168 14.936 16.1037 14.6073C16.0587 14.4899 15.9012 14.0086 16.1487 13.363C16.1487 13.363 16.5256 13.2397 17.3862 13.8443C17.7462 13.7386 18.1287 13.6858 18.5112 13.6858C18.8937 13.6858 19.2762 13.7386 19.6362 13.8443C20.4968 13.2339 20.8737 13.363 20.8737 13.363C21.1212 14.0086 20.9637 14.4899 20.9187 14.6073C21.2056 14.936 21.38 15.3528 21.38 15.8693C21.38 17.6713 20.3281 18.0704 19.3268 18.1878C19.49 18.3345 19.6306 18.6163 19.6306 19.0565C19.6306 19.6845 19.625 20.1893 19.625 20.3478C19.625 20.471 19.7093 20.6178 19.9343 20.5708C20.8277 20.2561 21.6039 19.657 22.1539 18.8579C22.7038 18.0587 22.9997 17.0997 23 16.1158C23 13.5215 20.9862 11.4202 18.5 11.4202Z" fill="#A1A1AA"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H13V18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6H7.78388C8.01539 6 8.23973 6.08033 8.41862 6.22727L10.8119 8.19318C11.3486 8.63402 12.0216 8.875 12.7161 8.875H19C19.5523 8.875 20 9.32272 20 9.875V10H22V9.875C22 8.21815 20.6569 6.875 19 6.875H12.7161C12.4846 6.875 12.2603 6.79467 12.0814 6.64773L9.6881 4.68182C9.15142 4.24098 8.47841 4 7.78388 4H5Z" fill="#64748B"/>
  </svg>
);

// Folder — src code badge
export const FolderSrcIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H12V18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6H7.78388C8.01539 6 8.23973 6.08033 8.41862 6.22727L10.8119 8.19318C11.3486 8.63402 12.0216 8.875 12.7161 8.875H19C19.5523 8.875 20 9.32272 20 9.875V10H22V9.875C22 8.21815 20.6569 6.875 19 6.875H12.7161C12.4846 6.875 12.2603 6.79467 12.0814 6.64773L9.6881 4.68182C9.15142 4.24098 8.47841 4 7.78388 4H5Z" fill="#64748B"/>
    <path d="M16.0908 13.4666L14.1961 15.3613L16.0908 17.2561" stroke="#EAB308" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.3277 13.4666L23.2224 15.3613L21.3277 17.2561" stroke="#EAB308" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.3408 18.5192L20.0777 12.2034" stroke="#EAB308" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Folder — app/projects grid badge
export const FolderAppIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H13V18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6H7.78388C8.01539 6 8.23973 6.08033 8.41862 6.22727L10.8119 8.19318C11.3486 8.63402 12.0216 8.875 12.7161 8.875H19C19.5523 8.875 20 9.32272 20 9.875V10H22V9.875C22 8.21815 20.6569 6.875 19 6.875H12.7161C12.4846 6.875 12.2603 6.79467 12.0814 6.64773L9.6881 4.68182C9.15142 4.24098 8.47841 4 7.78388 4H5Z" fill="#64748B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 12C15.4477 12 15 12.4477 15 13V14.5556C15 15.1078 15.4477 15.5556 16 15.5556H17.5556C18.1078 15.5556 18.5556 15.1078 18.5556 14.5556V13C18.5556 12.4477 18.1078 12 17.5556 12H16ZM16 16.4444C15.4477 16.4444 15 16.8922 15 17.4444V19C15 19.5523 15.4477 20 16 20H17.5556C18.1078 20 18.5556 19.5523 18.5556 19V17.4444C18.5556 16.8922 18.1078 16.4444 17.5556 16.4444H16ZM19.4444 13C19.4444 12.4477 19.8922 12 20.4444 12H22C22.5523 12 23 12.4477 23 13V14.5556C23 15.1078 22.5523 15.5556 22 15.5556H20.4444C19.8922 15.5556 19.4444 15.1078 19.4444 14.5556V13ZM20.4444 16.4444C19.8922 16.4444 19.4444 16.8922 19.4444 17.4444V19C19.4444 19.5523 19.8922 20 20.4444 20H22C22.5523 20 23 19.5523 23 19V17.4444C23 16.8922 22.5523 16.4444 22 16.4444H20.4444Z" fill="#F87171"/>
  </svg>
);

// Helper: map folder name → specialized Symbols folder icon
export function getFolderIconComponent(folderName: string, isExpanded: boolean, size: number = 15): React.ReactNode {
  const lower = folderName.toLowerCase();
  if (lower === '.github')  return <FolderGithubIcon size={size} />;
  if (lower === 'src')      return <FolderSrcIcon size={size} />;
  if (lower === 'projects') return <FolderAppIcon size={size} />;

  return isExpanded ? <FolderOpenIcon size={size} /> : <FolderIcon size={size} />;
}

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
    if (lower === '.env' || lower.startsWith('.env.')) return <EnvGearIcon size={size} />;
  }

  // Extension-based fallback
  switch (fileType) {
    case 'tsx':    return <ReactTsIcon size={size} />;
    case 'ts':     return <TypeScriptIcon size={size} />;
    case 'mjs':    return <TypeScriptIcon size={size} />;
    case 'json':   return <JsonIcon size={size} />;
    case 'md':     return <MarkdownIcon size={size} />;
    case 'gitignore': return <GitIcon size={size} />;
    case 'env':    return <EnvGearIcon size={size} />;
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

// git_worktree.svg
export const GitWorktreeIcon: React.FC<IconProps> = ({ size = 12, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M7.78314 8.0003L12.3252 3.45825" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.49899 9.71719L12.3237 12.5419" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.25763 8.0003H7.77134" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.7424 6.47908V3.04047H9.3038" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.30225 12.9595H12.7409V9.52094" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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

// terminal_alt.svg (>_ inside rounded rect)
export const TerminalIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path opacity="0.1" d="M12.2782 2.49951H3.72184C3.04677 2.49951 2.49951 3.04677 2.49951 3.72184V12.2782C2.49951 12.9532 3.04677 13.5005 3.72184 13.5005H12.2782C12.9532 13.5005 13.5005 12.9532 13.5005 12.2782V3.72184C13.5005 3.04677 12.9532 2.49951 12.2782 2.49951Z" fill="currentColor"/>
    <path d="M12.2782 2.49951H3.72184C3.04677 2.49951 2.49951 3.04677 2.49951 3.72184V12.2782C2.49951 12.9532 3.04677 13.5005 3.72184 13.5005H12.2782C12.9532 13.5005 13.5005 12.9532 13.5005 12.2782V3.72184C13.5005 3.04677 12.9532 2.49951 12.2782 2.49951Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10.7502H10.7502" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.24976 9.21777L7.08325 7.38428L5.24976 5.55078" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// person.svg (collaborators)
export const CollaboratorsIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12.667 14v-1.333A2.667 2.667 0 0 0 10 10H6a2.667 2.667 0 0 0-2.667 2.667V14M8 7.333A2.667 2.667 0 1 0 8 2a2.667 2.667 0 0 0 0 5.333Z"/>
  </svg>
);




// pin.svg / sparkle.svg (AI Assistant / pin)
export const StarIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6.762 10.1a1.2 1.2 0 0 0-.862-.862l-3.68-.95a.3.3 0 0 1 0-.577l3.68-.95a1.2 1.2 0 0 0 .862-.86l.95-3.682a.3.3 0 0 1 .577 0L9.238 5.9a1.2 1.2 0 0 0 .862.862l3.68.949a.3.3 0 0 1 0 .578l-3.68.949a1.2 1.2 0 0 0-.862.862l-.95 3.68a.3.3 0 0 1-.577 0l-.949-3.68Z"/>
    <path d="M13 3.5v2M12 4.5h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
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

export const FileIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 1v14h10V5l-4-4H3z" />
    <path d="M7 1v4h4" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = defaultProps.size, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M3 15a5 5 0 0 1 10 0" />
    <path d="M11.2 10.8a4 4 0 0 0 0-7.6" />
  </svg>
);


