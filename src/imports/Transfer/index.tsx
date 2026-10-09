import svgPaths from "./svg-95p60b1234";

function Component({ className }: { className?: string }) {
  return (
    <div className={className || "h-[68px] relative w-[150px]"} data-name="250.00">
      <p className="[word-break:break-word] absolute font-['Young_Serif:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[48px] text-white whitespace-nowrap">250.00</p>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-left">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackBtn() {
  return (
    <a className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer drop-shadow-[0px_10px_12px_rgba(0,0,0,0.15)] flex items-start p-[8px] relative rounded-[100px] shrink-0" data-name="back-btn">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ChevronLeft />
    </a>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <BackBtn />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Transfer Funds</p>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative shrink-0 w-full" data-name="app-header">
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white">Premium Checking (•••4501)</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#94a3b8] text-[12px]">
        <span className="leading-[normal]">{`Balance: `}</span>
        <span className="font-['Geist:Bold',sans-serif] font-bold leading-[normal]">$5,000,856.73</span>
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex h-[52px] items-center justify-between px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame5 />
      <ChevronDown />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">From Account</p>
      <Frame4 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="user">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="user">
          <path d={svgPaths.p61d9400} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex gap-[8px] h-[52px] items-center px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <User />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Alex Johnson (alex.j@gmail.com)</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">To Recipient</p>
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline py-[12px] relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-white whitespace-nowrap">$</p>
      <Component className="h-[68px] relative shrink-0 w-[150px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Amount</p>
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex h-[48px] items-center px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Dinner reimbursement</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">{` Reference (Optional)`}</p>
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame6 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <a className="bg-[#8b1a2b] content-stretch cursor-pointer flex h-[52px] items-center justify-center relative rounded-[12px] shadow-[0px_10px_24px_0px_rgba(0,0,0,0.15),0px_10px_24px_0px_rgba(139,26,43,0.25)] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">Continue</p>
    </a>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative shrink-0 w-full" data-name="Frame">
      <Frame2 />
      <Frame12 />
    </div>
  );
}

function TransferEntryContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="transfer-entry-content">
      <AppHeader />
      <Frame1 />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="home">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="home">
          <path d={svgPaths.p1e6ad500} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemHome() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Home">
      <Home />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] text-left whitespace-nowrap">Home</p>
    </a>
  );
}

function User1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="user">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="user">
          <path d={svgPaths.p19c2490} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemProfile() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Profile">
      <User1 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] text-left whitespace-nowrap">Profile</p>
    </a>
  );
}

function ArrowLeftRight() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="arrow-left-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="arrow-left-right">
          <path d={svgPaths.p341daa00} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemTransfer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Transfer">
      <ArrowLeftRight />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[11px] whitespace-nowrap">Transfer</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="map-pin">
          <path d={svgPaths.p1d906b80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemLocation() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Location">
      <MapPin />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Location</p>
    </div>
  );
}

function MoreHorizontal() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="more-horizontal">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="more-horizontal">
          <g id="Vector">
            <path d={svgPaths.p14f81ff0} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pf283d00} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p267f4d00} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavItemMore() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-More">
      <MoreHorizontal />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">More</p>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="bg-[#0b1524] content-stretch flex h-[72px] items-center justify-between px-[16px] relative shrink-0 w-full" data-name="bottom-nav">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <NavItemHome />
      <NavItemProfile />
      <NavItemTransfer />
      <NavItemLocation />
      <NavItemMore />
    </div>
  );
}

function BottomNavContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="bottom-nav-container">
      <BottomNav />
    </div>
  );
}

export default function Transfer() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start justify-between overflow-clip relative rounded-[24px] size-full to-[#07111f]" data-name="transfer">
      <div className="absolute right-[-120px] size-[320px] top-[-120px]" data-name="bg-glow-1">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#filter0_f_0_21)" id="bg-glow-1" opacity="0.18">
              <circle cx="270" cy="270" fill="#8B1A2B" r="160" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_21" width="540" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_21" stdDeviation="55" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-140px] left-[-80px] size-[260px]" data-name="bg-glow-2">
        <div className="absolute inset-[-34.62%]">
          <svg className="block size-full" fill="none" height="440" preserveAspectRatio="none" viewBox="0 0 440 440" width="440">
            <g filter="url(#filter0_f_0_18)" id="bg-glow-2" opacity="0.06">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_18" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_18" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <TransferEntryContent />
      <BottomNavContainer />
    </div>
  );
}