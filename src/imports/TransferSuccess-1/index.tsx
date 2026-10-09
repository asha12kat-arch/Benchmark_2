import svgPaths from "./svg-2wlmt5l22l";

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
  return <div className="h-[24px] relative shrink-0 w-full" data-name="Frame" />;
}

function Check() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="check">
          <path d={svgPaths.p24ddc900} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function SuccessRing() {
  return (
    <div className="bg-[rgba(139,26,43,0.1)] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="success-ring">
      <div aria-hidden className="absolute border-2 border-[rgba(139,26,43,0.2)] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <Check />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[26px] text-white">Transfer Successful!</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px]">Your transaction has been processed</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center py-[24px] relative shrink-0 w-full" data-name="Frame">
      <SuccessRing />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Amount Sent</p>
      <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[20px] text-white">$250.00</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">To Recipient</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">Sarah Jenkins</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#94a3b8]">Reference ID</p>
      <p className="relative shrink-0 text-white">BM-78249021</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(16,185,129,0.08)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#10b981] text-[11px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Status</p>
      <Frame7 />
    </div>
  );
}

function BriefCard() {
  return (
    <div className="bg-[#0b1524] content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[20px] shrink-0 w-full" data-name="brief-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 310 1" width="310">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="310" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 310 1" width="310">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="310" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 310 1" width="310">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="310" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="share">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_8)" id="share">
          <path d={svgPaths.p1b589b00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Frame">
      <Share />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Share Receipt</p>
    </div>
  );
}

function DoneButton() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-center p-[14px] relative rounded-[16px] shrink-0 w-full" data-name="done-button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Done</p>
    </div>
  );
}

function InnerContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px px-[20px] py-[12px] relative w-full" data-name="inner-content">
      <Frame />
      <Frame1 />
      <BriefCard />
      <Frame8 />
      <DoneButton />
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
          <path d={svgPaths.p6a14c00} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemTransfer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Transfer">
      <IconFrame2 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[10px] whitespace-nowrap">Transfer</p>
    </div>
  );
}

function IconFrame3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon-frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="icon-frame">
          <path d={svgPaths.p20c97c00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemLocation() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Location">
      <IconFrame3 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">Location</p>
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

export default function TransferSuccess() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start justify-between relative size-full to-[#07111f]" data-name="transfer-success">
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
            <g filter="url(#filter0_f_0_23)" id="bg-glow-2" opacity="0.06">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_23" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_23" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ScreenContentFlow />
    </div>
  );
}