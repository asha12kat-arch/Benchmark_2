import svgPaths from "./svg-pgniv2apwt";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#8b1a2b] relative rounded-[10px] shrink-0 size-[32px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Benchmark</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame1 />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="bell">
          <path d={svgPaths.p21bb9400} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <a className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer drop-shadow-[0px_10px_12px_rgba(0,0,0,0.15)] flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Bell />
    </a>
  );
}

function AppHeader() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="app-header">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[28px] text-white">Hello, Michael Wiseman</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px]">Welcome back to your bank!</p>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="eye">
          <path d={svgPaths.p197a0df0} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] uppercase whitespace-nowrap">Total Balance</p>
      <Eye />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Checking (•••4501)</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">$12,450.00</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Savings (•••8823)</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">$5,000,856.73</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function TotalBalanceCard() {
  return (
    <div className="bg-[#0b1524] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[20px] shrink-0 w-full" data-name="total-balance-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_18px_40px_0px_rgba(0,0,0,0.2)]" />
      <Frame4 />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-white whitespace-nowrap">$5,013,306.73</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 310 1" width="310">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="310" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function ArrowLeftRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-left-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="arrow-left-right">
          <path d={svgPaths.p3b1e7a00} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ArrowLeftRight />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex flex-[1_0_26px] flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame10 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Transfer</p>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="download">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="download">
          <path d={svgPaths.p1c5af020} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <Download />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex flex-[1_0_26px] flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame12 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Deposit</p>
    </div>
  );
}

function CreditCard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="credit-card">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="credit-card">
          <path d={svgPaths.pe068800} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <CreditCard />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex flex-[1_0_26px] flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame14 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Pay</p>
    </div>
  );
}

function History() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="history">
          <path d={svgPaths.p27e3c480} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <History />
    </div>
  );
}

function Frame15() {
  return (
    <a className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex flex-[1_0_26px] flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame16 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-left text-white whitespace-nowrap">History</p>
    </a>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <Frame11 />
      <Frame13 />
      <Frame15 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#8b1a2b] relative rounded-[6px] shrink-0 size-[24px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Benchmark Bank</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-left text-white whitespace-nowrap">DEBIT</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 text-left whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] uppercase">Cardholder</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">MICHAEL WISEMAN</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end leading-[normal] relative shrink-0 text-left whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] uppercase">Expires</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">09/28</p>
    </div>
  );
}

function DebitCardPreview() {
  return (
    <a className="bg-gradient-to-r cursor-pointer from-[#0f172a] h-[220px] relative rounded-[20px] shrink-0 to-[#1e293b] w-full" data-name="debit-card-preview">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <div className="bg-[#ead182] h-[26px] opacity-80 relative rounded-[4px] shrink-0 w-[36px]" data-name="Rectangle" />
        <Frame18 />
        <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-left text-white whitespace-nowrap">•••• •••• •••• 7834</p>
        <Frame20 />
        <Frame21 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_24px_-10px_rgba(139,26,43,0.12),0px_18px_40px_-12px_rgba(0,0,0,0.2)]" />
    </a>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <DebitCardPreview />
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px p-[16px] relative w-full" data-name="dashboard-content">
      <AppHeader />
      <Frame3 />
      <TotalBalanceCard />
      <Frame8 />
      <Frame17 />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="home">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="home">
          <path d={svgPaths.p1e6ad500} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemHome() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Home">
      <Home />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[11px] whitespace-nowrap">Home</p>
    </div>
  );
}

function User() {
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
      <User />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] text-left whitespace-nowrap">Profile</p>
    </a>
  );
}

function ArrowLeftRight1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="arrow-left-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="arrow-left-right">
          <path d={svgPaths.p341daa00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemTransfer() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Transfer">
      <ArrowLeftRight1 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] text-left whitespace-nowrap">Transfer</p>
    </a>
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
    <div className="bg-[#0b1524] content-stretch flex flex-col h-[72px] items-start shrink-0 sticky top-0 w-full" data-name="bottom-nav-container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <BottomNav />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f]" data-name="dashboard">
      <div className="absolute right-[-120px] size-[320px] top-[-120px]" data-name="bg-glow-1">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#filter0_f_0_26)" id="bg-glow-1" opacity="0.18">
              <circle cx="270" cy="270" fill="#8B1A2B" r="160" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_26" width="540" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_26" stdDeviation="55" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-140px] left-[-80px] size-[260px]" data-name="bg-glow-2">
        <div className="absolute inset-[-34.62%]">
          <svg className="block size-full" fill="none" height="440" preserveAspectRatio="none" viewBox="0 0 440 440" width="440">
            <g filter="url(#filter0_f_0_22)" id="bg-glow-2" opacity="0.06">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_22" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_22" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <DashboardContent />
      <BottomNavContainer />
    </div>
  );
}