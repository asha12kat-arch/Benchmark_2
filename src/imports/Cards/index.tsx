import svgPaths from "./svg-i436wlpwni";

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
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">My Cards</p>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="app-header">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#8b1a2b] relative rounded-[6px] shrink-0 size-[24px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Benchmark Bank</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">DEBIT</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] uppercase">Cardholder</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">MICHAEL WISEMAN</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] uppercase">Expires</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">09/28</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] h-[220px] relative rounded-[20px] shrink-0 to-[#1e293b] w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <div className="bg-[#ead182] h-[26px] opacity-80 relative rounded-[4px] shrink-0 w-[36px]" data-name="Rectangle" />
        <Frame2 />
        <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">•••• •••• •••• 7834</p>
        <Frame4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_24px_-10px_rgba(139,26,43,0.12),0px_18px_40px_-12px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function ShieldAlert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="shield-alert">
          <path d={svgPaths.p597b500} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <ShieldAlert />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">Freeze Card</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">Temporarily disable card</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 44 24" width="44">
        <g id="Frame">
          <rect fill="#8B1A2B" height="24" rx="12" width="44" />
          <circle cx="32" cy="12" fill="white" id="Ellipse" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex items-center justify-between p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="settings">
          <path d={svgPaths.p1f61bb80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Settings />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Card Settings</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-name="Frame">
      <Frame14 />
      <ChevronRight />
    </div>
  );
}

function Sliders() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="sliders">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="sliders">
          <path d={svgPaths.p3bb95680} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Sliders />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Spending Limits</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-name="Frame">
      <Frame16 />
      <ChevronRight1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame13 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 370 1" width="370">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="370" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shopping-bag">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="shopping-bag">
          <path d={svgPaths.p1ba3600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ShoppingBag />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">Target Stores</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">Aug 23 2026</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame20 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[14px] whitespace-nowrap">-$84.50</p>
    </div>
  );
}

function ShoppingBag1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shopping-bag">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="shopping-bag">
          <path d={svgPaths.p1ba3600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ShoppingBag1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">Starbucks Coffee</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">Aug 19 2026</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame24 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[14px] whitespace-nowrap">-$12.75</p>
    </div>
  );
}

function ShoppingBag2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="shopping-bag">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="shopping-bag">
          <path d={svgPaths.p1ba3600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ShoppingBag2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">Netflix Subscription</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">Aug 12 2026</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#0b1524] content-stretch drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex items-center justify-between p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame28 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[14px] whitespace-nowrap">-$15.49</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <Frame23 />
      <Frame27 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Recent Card Activity</p>
      <Frame18 />
    </div>
  );
}

function CardsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative shrink-0 w-full" data-name="cards-content">
      <AppHeader />
      <Frame1 />
      <Frame7 />
      <Frame12 />
      <Frame17 />
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

function ArrowLeftRight() {
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
      <ArrowLeftRight />
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
            <path d={svgPaths.p14f81ff0} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pf283d00} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p267f4d00} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
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
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[11px] whitespace-nowrap">More</p>
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
    <div className="bg-[#0b1524] content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="bottom-nav-container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <BottomNav />
    </div>
  );
}

export default function Cards() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start overflow-clip relative rounded-[24px] size-full to-[#07111f]" data-name="cards">
      <div className="absolute right-[-120px] size-[320px] top-[-120px]" data-name="bg-glow-1">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#filter0_f_0_12)" id="bg-glow-1" opacity="0.12">
              <circle cx="270" cy="270" fill="#8B1A2B" r="160" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_12" width="540" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_12" stdDeviation="55" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-140px] left-[-80px] size-[260px]" data-name="bg-glow-2">
        <div className="absolute inset-[-34.62%]">
          <svg className="block size-full" fill="none" height="440" preserveAspectRatio="none" viewBox="0 0 440 440" width="440">
            <g filter="url(#filter0_f_0_30)" id="bg-glow-2" opacity="0.04">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_30" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_30" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <CardsContent />
      <BottomNavContainer />
    </div>
  );
}