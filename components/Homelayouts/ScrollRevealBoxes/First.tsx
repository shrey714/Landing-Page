import React, { useEffect, useState } from "react";

export function ProductGrid() {
  // Animation state
  const [animationStarted, setAnimationStarted] = useState(false);
  // Start animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="sticky top-[226px] aspect-square w-[540px] text-[#425466] text-base">
      <div
        className={`absolute top-0 left-0 w-[540px] h-[540px] flex justify-center items-end pointer-events-none transition-opacity duration-1000 ${animationStarted ? "opacity-100" : "opacity-0"}`}
      >
        <figure
          aria-hidden="true"
          className="relative w-[540px] max-w-[540px] m-0"
        >
          <div className="h-[540px] w-[540px] max-w-[540px] pb-[540px]">
            <div className="absolute top-0 left-0 origin-[0_0] will-change-auto transform matrix(0.999971, 0, 0, 0.999971, 0, 0)">
              <div className="justify-start grid justify-items-center relative items-center w-[540px] h-[540px]">
                <div
                  className="relative grid grid-rows-6 grid-cols-6 grid-flow-row gap-3"
                  style={{
                    gridTemplateAreas:
                      '". . Tax . . ." "Billing . . Invoicing Capital ." ". Atlas Payments Climate . Treasury" "Connect . . Radar . ." ". . Terminal Checkout Issuing ." ". Identity . . Sigma Elements"',
                  }}
                >
                  {/* Original connection lines */}
                  <Icon1 className="absolute top-[257px] left-[222px] h-[104px] animate-fade-in" />
                  <Icon2
                    className="absolute top-[257px] left-[81px] w-[135px] h-[53px] animate-fade-in"
                    style={{
                      animationDelay: "200ms",
                    }}
                  />
                  <Icon3
                    className="absolute top-[218px] left-[402px] w-[45px] h-[143px] animate-fade-in"
                    style={{
                      animationDelay: "400ms",
                    }}
                  />
                  <Icon4
                    className="absolute top-[167px] left-[394px] w-[12px] h-[194px] animate-fade-in"
                    style={{
                      animationDelay: "600ms",
                    }}
                  />
                  <Icon5
                    className="absolute top-[347px] left-[38px] w-[143px] h-[53px] animate-fade-in"
                    style={{
                      animationDelay: "800ms",
                    }}
                  />
                  <Icon6
                    className="absolute top-[257px] left-[218px] w-[53px] h-[53px] animate-fade-in"
                    style={{
                      animationDelay: "1000ms",
                    }}
                  />
                  <Icon7
                    className="absolute top-[77px] left-[218px] w-[4px] h-[104px] animate-fade-in"
                    style={{
                      animationDelay: "1200ms",
                    }}
                  />
                  <Icon8
                    className="absolute top-[128px] left-[77px] w-[194px] h-[4px] animate-fade-in"
                    style={{
                      animationDelay: "1400ms",
                    }}
                  />
                  {/* New connection lines */}
                  <Icon41
                    className="absolute top-[380px] left-[300px] w-[120px] h-[70px] animate-fade-in"
                    style={{
                      animationDelay: "1600ms",
                    }}
                  />
                  <Icon42
                    className="absolute top-[218px] left-[140px] w-[120px] h-[10px] animate-fade-in"
                    style={{
                      animationDelay: "1800ms",
                    }}
                  />
                  <Icon43
                    className="absolute top-[80px] left-[120px] w-[90px] h-[90px] animate-fade-in"
                    style={{
                      animationDelay: "2000ms",
                    }}
                  />
                  <Icon44
                    className="absolute top-[440px] left-[380px] w-[100px] h-[60px] animate-fade-in"
                    style={{
                      animationDelay: "2200ms",
                    }}
                  />
                  <Icon45
                    className="absolute top-[130px] left-[260px] w-[100px] h-[150px] animate-fade-in"
                    style={{
                      animationDelay: "2400ms",
                    }}
                  />
                  {/* Atlas */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Atlas",
                      animationDelay: "300ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/atlas"
                      icon={<Icon9 />}
                      activeIcon={<Icon10 />}
                      label="Atlas"
                    />
                  </div>
                  {/* Billing */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Billing",
                      animationDelay: "400ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/billing"
                      icon={<Icon11 />}
                      activeIcon={<Icon12 />}
                      label="Billing"
                    />
                  </div>
                  {/* Capital */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Capital",
                      animationDelay: "500ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/capital"
                      icon={<Icon13 />}
                      activeIcon={<Icon14 />}
                      label="Capital"
                      isActive={true}
                    />
                  </div>
                  {/* Checkout */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Checkout",
                      animationDelay: "600ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/payments/checkout"
                      icon={<Icon15 />}
                      activeIcon={<Icon16 />}
                      label="Checkout"
                    />
                  </div>
                  {/* Climate */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Climate",
                      animationDelay: "700ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/climate"
                      icon={<Icon17 />}
                      activeIcon={<Icon18 />}
                      label="Climate"
                    />
                  </div>
                  {/* Connect */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Connect",
                      animationDelay: "800ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/connect"
                      icon={<Icon19 />}
                      activeIcon={<Icon20 />}
                      label="Connect"
                      isActive={true}
                    />
                  </div>
                  {/* Elements */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Elements",
                      animationDelay: "900ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/payments/elements"
                      icon={<Icon21 />}
                      activeIcon={<Icon22 />}
                      label="Elements"
                    />
                  </div>
                  {/* Identity */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Identity",
                      animationDelay: "1000ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/identity"
                      icon={<Icon23 />}
                      activeIcon={<Icon24 />}
                      label="Identity"
                    />
                  </div>
                  {/* Invoicing */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Invoicing",
                      animationDelay: "1100ms",
                    }}
                  >
                    <ProductIcon
                      href="/invoicing"
                      icon={<Icon25 />}
                      activeIcon={<Icon26 />}
                      label="Invoicing"
                    />
                  </div>
                  {/* Issuing */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Issuing",
                      animationDelay: "1200ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/issuing"
                      icon={<Icon27 />}
                      activeIcon={<Icon28 />}
                      label="Issuing"
                    />
                  </div>
                  {/* Payments */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Payments",
                      animationDelay: "1300ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/payments"
                      icon={<Icon29 />}
                      activeIcon={<Icon30 />}
                      label="Payments"
                    />
                  </div>
                  {/* Radar */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Radar",
                      animationDelay: "1400ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/radar"
                      icon={<Icon31 />}
                      activeIcon={<Icon32 />}
                      label="Radar"
                    />
                  </div>
                  {/* Sigma */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Sigma",
                      animationDelay: "1500ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/sigma"
                      icon={<Icon33 />}
                      activeIcon={<Icon34 />}
                      label="Sigma"
                    />
                  </div>
                  {/* Tax */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Tax",
                      animationDelay: "1600ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/tax"
                      icon={<Icon35 />}
                      activeIcon={<Icon36 />}
                      label="Tax"
                    />
                  </div>
                  {/* Terminal */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Terminal",
                      animationDelay: "1700ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/terminal"
                      icon={<Icon37 />}
                      activeIcon={<Icon38 />}
                      label="Terminal"
                      isActive={true}
                    />
                  </div>
                  {/* Treasury */}
                  <div
                    className="relative w-[78px] h-[78px] origin-[39px_39px] transform-box-fill-box pointer-events-auto animate-fade-in-up"
                    style={{
                      gridArea: "Treasury",
                      animationDelay: "1800ms",
                    }}
                  >
                    <ProductIcon
                      href="/in/treasury"
                      icon={<Icon39 />}
                      activeIcon={<Icon40 />}
                      label="Treasury"
                      isActive={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

interface ProductIconProps {
  href: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  isActive?: boolean;
}
function ProductIcon({
  href,
  icon,
  activeIcon,
  label,
  isActive = false,
}: ProductIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      className="absolute top-0 right-0 bottom-0 left-0 font-medium cursor-pointer text-[#635BFF] transition-all duration-150 ease-in-out outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          flex justify-center items-center absolute top-[-5px] left-[-5px] w-[88px] h-[88px] 
          origin-[44px_44px] transform scale-[0.886364] bg-[#F6F9FC] border border-[#C4CCD8] rounded-lg
          transition-all duration-300
          ${isHovered ? "opacity-0" : "opacity-100"}
        `}
      >
        {icon}
      </div>
      <div
        className={`
          flex justify-center items-center absolute top-[-5px] left-[-5px] w-[88px] h-[88px] 
          origin-[44px_44px] transform scale-[0.886364] bg-white 
          shadow-[0_12.6px_25.2px_-11.6px_rgba(50,50,93,0.25),0_7.6px_15.1px_-7.6px_rgba(0,0,0,0.1)]
          rounded-lg transition-all duration-300
          ${isActive || isHovered ? "opacity-100 scale-[0.95]" : "opacity-0 scale-[0.886364]"}
        `}
      >
        {activeIcon}
        <span
          className={`
            absolute bottom-0 w-[88px] left-0 text-center text-[12px] leading-[15px] 
            font-normal tracking-[0.2px] text-[#2E3A55] transition-all duration-300
            ${isActive || isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"}
          `}
        >
          {label}
        </span>
      </div>
    </a>
  );
}

import {
  Activity,
  Archive,
  BookOpen,
  CreditCard,
  FileText,
  Gauge,
  Leaf,
  Link,
  Mail,
  Map,
  PieChart,
  Puzzle,
  Receipt,
  ShoppingBag,
  Sigma,
  Smartphone,
  Wallet,
} from "lucide-react";
// Styling wrapper for Lucide icons to match the original design
const IconWrapper = ({
  children,
  ...props
}: unknown & {
  children: React.ReactNode;
}) => (
  <div
    className="flex items-center justify-center"
    style={{
      transformOrigin: "20px 0px",
      transformBox: "fill-box",
    }}
    {...props}
  >
    {children}
  </div>
);
// Connection icons with gradients
const Icon1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height="104" {...props}>
    <defs>
      <linearGradient
        id="PaymentsTerminalConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="77.4329037993764"
        x2="22.567096200627894"
        y1="91.80234190968443"
        y2="8.197658090312743"
      >
        <stop offset="0" stopColor="#11EFE3"></stop>
        <stop offset="1" stopColor="#9966FF"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#PaymentsTerminalConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,1 L1,102.99038221625722"
      className="animate-draw-line"
      style={{
        strokeDasharray: "101.99px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="135" height="53" {...props}>
    <defs>
      <linearGradient
        id="PaymentsConnectConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="22.567096200619297"
        x2="77.432903799385"
        y1="91.80234190968162"
        y2="8.197658090321212"
      >
        <stop offset="0" stopColor="#11EFE3"></stop>
        <stop offset="1" stopColor="#0073E6"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#PaymentsConnectConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M133.9939212471115,1 L133.9939212471115,31.995240709364737 Q133.9939212471115,51.99524070936474 113.9939212471115,51.99524070936474 L1,51.99524070936474"
      className="animate-draw-line"
      style={{
        strokeDasharray: "176.454px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
// Continue with other connection icons
const Icon3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="45" height="143" {...props}>
    <defs>
      <linearGradient
        id="IssuingTreasuryConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="1.3210548563413056"
        x2="98.67894514365753"
        y1="38.58245649447014"
        y2="61.417543505534866"
      >
        <stop offset="0" stopColor="#0073e6"></stop>
        <stop offset="1" stopColor="#ff80ff"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#IssuingTreasuryConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,141.99381059820018 L1,21 Q1,1 21,1 L43.9952025545677,1"
      className="animate-draw-line"
      style={{
        strokeDasharray: "176.454px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="12" height="194" {...props}>
    <defs>
      <linearGradient
        id="IssuingCapitalConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="2.134025123396114"
        x2="97.86597487660538"
        y1="64.45158984722184"
        y2="35.54841015278309"
      >
        <stop offset="0" stopColor="#0073e6"></stop>
        <stop offset="1" stopColor="#ff80ff"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#IssuingCapitalConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,192.9890322301664 L1,1"
      className="animate-draw-line"
      style={{
        strokeDasharray: "191.989px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon5 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="143" height="53" {...props}>
    <defs>
      <linearGradient
        id="ConnectTerminalConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="0.004002809872531543"
        x2="99.99599719012753"
        y1="50.63266497039625"
        y2="49.367335029608896"
      >
        <stop offset="0" stopColor="#11efe3"></stop>
        <stop offset="1" stopColor="#9966ff"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#ConnectTerminalConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,1 L1,31.99514150689248 Q1,51.99514150689248 21,51.99514150689248 L141.9938869077942,51.99514150689248"
      className="animate-draw-line"
      style={{
        strokeDasharray: "184.454px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
// The rest of the connection icons
const Icon6 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="53" height="53" {...props}>
    <defs>
      <linearGradient
        id="PaymentsRadarConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="5.233829908272334"
        x2="94.76617009172537"
        y1="27.72916671252493"
        y2="72.27083328747968"
      >
        <stop offset="0" stopColor="#ff5996"></stop>
        <stop offset="1" stopColor="#9966ff"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#PaymentsRadarConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,1 L1,31.995240709364737 Q1,51.99524070936474 21,51.99524070936474 L51.99523307840536,51.99524070936474"
      className="animate-draw-line"
      style={{
        strokeDasharray: "94.455px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon7 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="4" height="104" {...props}>
    <defs>
      <linearGradient
        id="PaymentsTaxConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="5.233829908272334"
        x2="94.76617009172995"
        y1="72.27083328747507"
        y2="27.729166712529533"
      >
        <stop offset="0" stopColor="#ff5996"></stop>
        <stop offset="1" stopColor="#9966ff"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#PaymentsTaxConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,102.99041274009484 L1,1"
      className="animate-draw-line"
      style={{
        strokeDasharray: "101.99px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon8 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="194" height="4" {...props}>
    <defs>
      <linearGradient
        id="BillingInvoicingConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="6.985126156129979"
        x2="93.01487384387265"
        y1="75.48961804727459"
        y2="24.510381952729837"
      >
        <stop offset="0" stopColor="#FFD848"></stop>
        <stop offset="1" stopColor="#00D924"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#BillingInvoicingConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,1 L192.98915432551686,1"
      className="animate-draw-line"
      style={{
        strokeDasharray: "191.989px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
// New connection icons
const Icon41 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="120" height="70" {...props}>
    <defs>
      <linearGradient
        id="CheckoutSigmaConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="10"
        x2="110"
        y1="10"
        y2="60"
      >
        <stop offset="0" stopColor="#96F"></stop>
        <stop offset="1" stopColor="#9A66FF"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#CheckoutSigmaConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,1 L1,35 Q1,55 21,55 L100,55 Q118,55 118,69"
      className="animate-draw-line-delayed"
      style={{
        strokeDasharray: "200px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon42 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="120" height="70" {...props}>
    <defs>
      <linearGradient
        id="AtlasClimateConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="10"
        x2="110"
        y1="10"
        y2="60"
      >
        <stop offset="0" stopColor="#FB0"></stop>
        <stop offset="1" stopColor="#00D924"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#AtlasClimateConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M78,1 L118,1"
      className="animate-draw-line-delayed"
      style={{
        strokeDasharray: "40px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon43 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="90" height="90" {...props}>
    <defs>
      <linearGradient
        id="BillingTaxConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="10"
        x2="80"
        y1="10"
        y2="80"
      >
        <stop offset="0" stopColor="#FFD748"></stop>
        <stop offset="1" stopColor="#96F"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#BillingTaxConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,1 Q1,45 45,45 Q88,45 88,88"
      className="animate-draw-line-delayed"
      style={{
        strokeDasharray: "170px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon44 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="100" height="60" {...props}>
    <defs>
      <linearGradient
        id="ElementsSigmaConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="10"
        x2="90"
        y1="10"
        y2="50"
      >
        <stop offset="0" stopColor="#96F"></stop>
        <stop offset="1" stopColor="#9A66FF"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#ElementsSigmaConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M98,1 L60,1 Q40,1 40,21 L40,40 Q40,58 22,58 L1,58"
      className="animate-draw-line-delayed"
      style={{
        strokeDasharray: "180px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
const Icon45 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="100" height="150" {...props}>
    <defs>
      <linearGradient
        id="CapitalClimateConnectionGradient"
        gradientUnits="userSpaceOnUse"
        x1="10"
        x2="90"
        y1="10"
        y2="140"
      >
        <stop offset="0" stopColor="#00D924"></stop>
        <stop offset="1" stopColor="#00D924"></stop>
      </linearGradient>
    </defs>
    <path
      stroke="url(#CapitalClimateConnectionGradient)"
      strokeWidth="2"
      fill="none"
      d="M1,1 L50,1 Q98,1 98,49 L98,148"
      className="animate-draw-line-delayed"
      style={{
        strokeDasharray: "245px",
        strokeDashoffset: "0px",
      }}
    ></path>
  </svg>
);
// Product icons using Lucide
const Icon9 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Map className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon10 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Map className="h-10 w-10 text-[#FB0] transition-all duration-300" />
  </IconWrapper>
);
const Icon11 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Receipt className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon12 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Receipt className="h-10 w-10 text-[#FFD748] transition-all duration-300" />
  </IconWrapper>
);
const Icon13 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <BookOpen className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon14 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <BookOpen className="h-10 w-10 text-[#00D924] transition-all duration-300" />
  </IconWrapper>
);
const Icon15 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <ShoppingBag className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon16 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <ShoppingBag className="h-10 w-10 text-[#96F] transition-all duration-300" />
  </IconWrapper>
);
const Icon17 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Leaf className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon18 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Leaf className="h-10 w-10 text-[#00D924] transition-all duration-300" />
  </IconWrapper>
);
const Icon19 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Link className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon20 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Link className="h-10 w-10 text-[#0073E6] transition-all duration-300" />
  </IconWrapper>
);
const Icon21 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Puzzle className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon22 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Puzzle className="h-10 w-10 text-[#96F] transition-all duration-300" />
  </IconWrapper>
);
const Icon23 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Archive className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon24 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Archive className="h-10 w-10 text-[#9A66FF] transition-all duration-300" />
  </IconWrapper>
);
const Icon25 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <FileText className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon26 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <FileText className="h-10 w-10 text-[#00D924] transition-all duration-300" />
  </IconWrapper>
);
const Icon27 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <CreditCard className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon28 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <CreditCard className="h-10 w-10 text-[#FF80FF] transition-all duration-300" />
  </IconWrapper>
);
const Icon29 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Activity className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon30 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Activity className="h-10 w-10 text-[#96F] transition-all duration-300" />
  </IconWrapper>
);
const Icon31 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Gauge className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon32 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Gauge className="h-10 w-10 text-[#9A66FF] transition-all duration-300" />
  </IconWrapper>
);
const Icon33 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Mail className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon34 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Sigma className="h-10 w-10 text-[#9A66FF] transition-all duration-300" />
  </IconWrapper>
);
const Icon35 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <PieChart className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon36 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <PieChart className="h-10 w-10 text-[#96F] transition-all duration-300" />
  </IconWrapper>
);
const Icon37 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Smartphone className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon38 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Smartphone className="h-10 w-10 text-[#9B66FF] transition-all duration-300" />
  </IconWrapper>
);
const Icon39 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Wallet className="h-10 w-10 stroke-[#C4CCD8] transition-all duration-300" />
  </IconWrapper>
);
const Icon40 = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <Wallet className="h-10 w-10 text-[#00D924] transition-all duration-300" />
  </IconWrapper>
);
