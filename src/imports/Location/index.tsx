import svgPaths from "./svg-5lvjjqaqxn";
import imgMapImage from "./1e6b4ac33d67c7a70193f84a7712cf42586c120b.png";

function IosSignal() {
  return (
    <div className="h-[11px] relative shrink-0 w-[17px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 17 11" width="17">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.p2d6ad970} fill="white" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="h-[11px] relative shrink-0 w-[15px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 15 11" width="15">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p190a1500} fill="white" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[12px] relative shrink-0 w-[25px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 25 12" width="25">
        <g id="ios-battery-full">
          <path d={svgPaths.pde03700} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="status-icons">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[12px] px-[24px] relative shrink-0 w-full" data-name="status-bar">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">9:41</p>
      <StatusIcons />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">{`ATM & Branch Locator`}</p>
    </div>
  );
}

function AppMonogram() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="app-monogram">
      <div className="bg-[#8b1a2b] relative rounded-[8px] shrink-0 size-[24px]" data-name="Rectangle" />
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full" data-name="header-bar">
      <Frame />
      <AppMonogram />
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="bg-[#0b1524] h-[220px] relative rounded-[20px] shrink-0 w-full" data-name="map-placeholder">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="map-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapImage} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function DatabaseSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="database-search">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="database-search">
          <path d={svgPaths.p160ff380} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="map-pin">
          <path d={svgPaths.p8b99100} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[14px] shrink-0 w-full" data-name="search-bar">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <DatabaseSearch />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#94a3b8] text-[13px]">Enter city, zip, or address</p>
      <MapPin />
    </div>
  );
}

function MapPin1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="map-pin">
          <path d={svgPaths.p22a7a550} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Frame">
      <MapPin1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[13px] text-ellipsis text-white">Financial District Branch</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#94a3b8] text-[11px] text-ellipsis">55 Wall Street, New York, NY</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px]">Open • Closes 5:00 PM</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function BranchCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-center justify-between p-[14px] relative rounded-[16px] shrink-0 w-full" data-name="branch-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[12px] whitespace-nowrap">0.3 mi</p>
    </div>
  );
}

function MapPin2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="map-pin">
          <path d={svgPaths.p22a7a550} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Frame">
      <MapPin2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[13px] text-ellipsis text-white">Union Square ATM</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#94a3b8] text-[11px] text-ellipsis">200 Park Ave South, New York, NY</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px]">24/7 Access</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function BranchCard1() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-center justify-between p-[14px] relative rounded-[16px] shrink-0 w-full" data-name="branch-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame4 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[12px] whitespace-nowrap">1.2 mi</p>
    </div>
  );
}

function MapPin3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="map-pin">
          <path d={svgPaths.p22a7a550} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Frame">
      <MapPin3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[13px] text-ellipsis text-white">Benchmark Midtown East</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#94a3b8] text-[11px] text-ellipsis">400 Madison Ave, New York, NY</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[10px]">Open • Closes 6:00 PM</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function BranchCard2() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-center justify-between p-[14px] relative rounded-[16px] shrink-0 w-full" data-name="branch-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame7 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[12px] whitespace-nowrap">2.4 mi</p>
    </div>
  );
}

function BranchesList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="branches-list">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] uppercase whitespace-nowrap">{`Nearby Branches & ATMs`}</p>
      <BranchCard />
      <BranchCard1 />
      <BranchCard2 />
    </div>
  );
}

function InnerContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px px-[20px] py-[12px] relative w-full" data-name="inner-content">
      <HeaderBar />
      <MapPlaceholder />
      <SearchBar />
      <BranchesList />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="icon-frame">
          <path d={svgPaths.p23c5080} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemHome() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Home">
      <IconFrame />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">Home</p>
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="icon-frame">
          <path d={svgPaths.p2dbcd800} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemProfile() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Profile">
      <IconFrame1 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">Profile</p>
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="icon-frame">
          <path d={svgPaths.p6a14c00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemTransfer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Transfer">
      <IconFrame2 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">Transfer</p>
    </div>
  );
}

function IconFrame3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="icon-frame">
          <path d={svgPaths.p20c97c00} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemLocation() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Location">
      <IconFrame3 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[10px] whitespace-nowrap">Location</p>
    </div>
  );
}

function IconFrame4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="icon-frame">
          <g id="Vector">
            <path d={svgPaths.p260a9040} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p15f6b300} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p770b1c0} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavItemMore() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-More">
      <IconFrame4 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">More</p>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between px-[12px] relative shrink-0 w-full" data-name="bottom-nav">
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

function ScreenContentFlow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="screen-content-flow">
      <StatusBar />
      <InnerContent />
      <BottomNavContainer />
    </div>
  );
}

export default function Location() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start justify-between relative size-full to-[#07111f]" data-name="location">
      <div className="absolute right-[-120px] size-[320px] top-[-120px]" data-name="bg-glow-1">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#filter0_f_0_27)" id="bg-glow-1" opacity="0.18">
              <circle cx="270" cy="270" fill="#8B1A2B" r="160" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_27" width="540" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_27" stdDeviation="55" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-140px] left-[-80px] size-[260px]" data-name="bg-glow-2">
        <div className="absolute inset-[-34.62%]">
          <svg className="block size-full" fill="none" height="440" preserveAspectRatio="none" viewBox="0 0 440 440" width="440">
            <g filter="url(#filter0_f_0_24)" id="bg-glow-2" opacity="0.06">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_24" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_24" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ScreenContentFlow />
    </div>
  );
}