import svgPaths from "./svg-lxah5ql3gn";
import imgFrame from "./ccf0919f2122002d6579a7eb307cdcd9c28951a6.png";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron-left">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackBtn() {
  return (
    <a className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer drop-shadow-[0px_10px_12px_rgba(0,0,0,0.12)] flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0" data-name="back-btn">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ChevronLeft />
    </a>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <BackBtn />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">{`Benchmark's Profile`}</p>
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

function Frame2() {
  return (
    <div className="pointer-events-none relative rounded-[40px] shrink-0 size-[80px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[40px] size-full" src={imgFrame} />
      <div aria-hidden className="absolute border-2 border-[#8b1a2b] border-solid inset-0 rounded-[40px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(139,26,43,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[12px] uppercase whitespace-nowrap">Premium Member</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center p-[16px] relative shrink-0 w-full" data-name="Frame">
      <Frame2 />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">Michael Wiseman</p>
      <Frame3 />
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

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Profile Info</p>
      <ChevronDown />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">Full Name</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">Farre Morgan</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">Account Type</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">Premium Checking</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">Customer ID</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">BM-7829451</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Status</p>
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_18px_40px_0px_rgba(0,0,0,0.2)]" />
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 326 1" width="326">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function ChevronDown1() {
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

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Personal Info</p>
      <ChevronDown1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">DOB</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">••/••/1990</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">Phone</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">•••-•••-4523</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">Email</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">w•••@gmail.com</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_18px_40px_0px_rgba(0,0,0,0.2)]" />
      <Frame14 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 326 1" width="326">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function ChevronDown2() {
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

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Address</p>
      <ChevronDown2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">Street</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">{`265 Leon road `}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">City/State</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">East helena montana</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8]">Country</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-white">USA</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="Frame">
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_18px_40px_0px_rgba(0,0,0,0.2)]" />
      <Frame20 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 326 1" width="326">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame21 />
    </div>
  );
}

function ChevronDown3() {
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

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Security Settings</p>
      <ChevronDown3 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[13px] whitespace-nowrap">Configured</p>
      <ChevronRight />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">{`Password & 2FA`}</p>
      <Frame29 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[13px] whitespace-nowrap">Enabled</p>
      <ChevronRight1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Biometric Login</p>
      <Frame31 />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[13px] whitespace-nowrap">2 Active</p>
      <ChevronRight2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Trusted Devices</p>
      <Frame33 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_18px_40px_0px_rgba(0,0,0,0.2)]" />
      <Frame26 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 326 1" width="326">
            <line id="Line" stroke="white" strokeOpacity="0.121569" x2="326" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <Frame13 />
      <Frame19 />
      <Frame25 />
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[780px] items-start p-[16px] relative shrink-0 w-[390px]" data-name="profile-content">
      <AppHeader />
      <Frame1 />
      <Frame4 />
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
          <path d={svgPaths.p19c2490} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemProfile() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Profile">
      <User />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[11px] whitespace-nowrap">Profile</p>
    </div>
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

export default function Profile() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start justify-between overflow-clip relative rounded-[24px] size-full to-[#07111f]" data-name="profile">
      <div className="absolute right-[-120px] size-[320px] top-[-120px]" data-name="bg-glow-1">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#filter0_f_0_22)" id="bg-glow-1" opacity="0.12">
              <circle cx="270" cy="270" fill="#8B1A2B" r="160" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_22" width="540" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_22" stdDeviation="55" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-140px] left-[-80px] size-[260px]" data-name="bg-glow-2">
        <div className="absolute inset-[-34.62%]">
          <svg className="block size-full" fill="none" height="440" preserveAspectRatio="none" viewBox="0 0 440 440" width="440">
            <g filter="url(#filter0_f_0_21)" id="bg-glow-2" opacity="0.04">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_21" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_21" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ProfileContent />
      <BottomNavContainer />
    </div>
  );
}