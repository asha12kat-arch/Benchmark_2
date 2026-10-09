import svgPaths from "./svg-7np2h3kik2";

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="arrow-left">
          <path d={svgPaths.p931980} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BackArrow() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="back-arrow">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ArrowLeft />
    </div>
  );
}

function Back() {
  return (
    <a className="content-stretch cursor-pointer flex items-center relative shrink-0" data-name="back">
      <BackArrow />
    </a>
  );
}

function HeaderSpacer() {
  return <div className="opacity-0 relative shrink-0 size-[40px]" data-name="header-spacer" />;
}

function AppHeader() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="app-header">
      <Back />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Notifications</p>
      <HeaderSpacer />
    </div>
  );
}

function PillAllActive() {
  return (
    <div className="bg-[#8b1a2b] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="pill-all-active">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">All</p>
    </div>
  );
}

function PillSecurity() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="pill-security">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Security</p>
    </div>
  );
}

function PillTransactions() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="pill-transactions">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Transactions</p>
    </div>
  );
}

function PillSystem() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[20px] shrink-0" data-name="pill-system">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">System</p>
    </div>
  );
}

function FilterPills() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="filter-pills">
      <PillAllActive />
      <PillSecurity />
      <PillTransactions />
      <PillSystem />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="filters">
      <FilterPills />
    </div>
  );
}

function Shield() {
  return (
    <div className="absolute inset-[12.5%]" data-name="shield">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g clipPath="url(#clip0_0_22)" id="shield">
          <path d={svgPaths.p355ca40} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="13.5" width="13.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <Shield />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[38px]" data-name="icon">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap">New Login Detected</p>
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#8B1A2B" id="Ellipse" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Meta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="meta">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#8B1A2B" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Aug 23, 10:42 AM • Security</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Frame">
      <Frame2 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px] w-full">{` Login detected from a new MacOS device in San Francisco, CA.`}</p>
      <Meta />
    </div>
  );
}

function NotificationCard() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="notification-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Icon />
      <Frame1 />
    </div>
  );
}

function ArrowLeftRight() {
  return (
    <div className="absolute inset-[12.5%]" data-name="arrow-left-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="arrow-left-right">
          <path d={svgPaths.p4fb6d80} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <ArrowLeftRight />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[38px]" data-name="icon">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap">Transfer Confirmed</p>
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#8B1A2B" id="Ellipse" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Meta1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="meta">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#8B1A2B" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Aug 23, 9:15 AM • Transactions</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Frame">
      <Frame5 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px] w-full">Transfer of $250.00 to Alex Johnson confirmed.</p>
      <Meta1 />
    </div>
  );
}

function NotificationCard1() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="notification-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Icon1 />
      <Frame4 />
    </div>
  );
}

function File() {
  return (
    <div className="absolute inset-[12.5%]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g clipPath="url(#clip0_0_10)" id="file">
          <path d={svgPaths.p336c7180} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="13.5" width="13.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <File />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[38px]" data-name="icon">
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap">August Statement Ready</p>
    </div>
  );
}

function Meta2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="meta">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#8B1A2B" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Aug 22, 5:00 PM • Account</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Frame">
      <Frame8 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px] w-full">Your monthly banking summary statement is ready for review.</p>
      <Meta2 />
    </div>
  );
}

function NotificationCard2() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="notification-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Icon2 />
      <Frame7 />
    </div>
  );
}

function Key() {
  return (
    <div className="absolute inset-[12.5%]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g clipPath="url(#clip0_0_24)" id="key">
          <path d={svgPaths.p38f033a0} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="13.5" width="13.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <Key />
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[38px]" data-name="icon">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap">Password Changed Successfully</p>
    </div>
  );
}

function Meta3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="meta">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#8B1A2B" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Aug 20, 2:10 PM • Security</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Frame">
      <Frame11 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px] w-full">Fictional security credential updated successfully.</p>
      <Meta3 />
    </div>
  );
}

function NotificationCard3() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="notification-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Icon3 />
      <Frame10 />
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="absolute inset-[12.5%]" data-name="alert-triangle">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g clipPath="url(#clip0_0_8)" id="alert-triangle">
          <path d={svgPaths.p939f500} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="13.5" width="13.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Frame">
      <AlertTriangle />
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[38px]" data-name="icon">
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap">Scheduled System Maintenance</p>
    </div>
  );
}

function Meta4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="meta">
      <div className="relative shrink-0 size-[6px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#8B1A2B" id="Ellipse" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Aug 18, 9:00 AM • System</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Frame">
      <Frame14 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#94a3b8] text-[12px] w-full">Standard maintenance will occur on August 25.</p>
      <Meta4 />
    </div>
  );
}

function NotificationCard4() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="notification-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Icon4 />
      <Frame13 />
    </div>
  );
}

function NotificationList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="notification-list">
      <NotificationCard />
      <NotificationCard1 />
      <NotificationCard2 />
      <NotificationCard3 />
      <NotificationCard4 />
    </div>
  );
}

function NotificationsContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px p-[16px] relative w-full" data-name="notifications-content">
      <AppHeader />
      <Filters />
      <NotificationList />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Frame">
          <path d={svgPaths.p1bea1700} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemHome() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Home">
      <Frame15 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] text-left whitespace-nowrap">Home</p>
    </a>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Frame">
          <path d={svgPaths.p15eeef80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemProfile() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Profile">
      <Frame16 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] text-left whitespace-nowrap">Profile</p>
    </a>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Frame">
          <path d={svgPaths.p1f3c07a0} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemTransfer() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Transfer">
      <Frame17 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] text-left whitespace-nowrap">Transfer</p>
    </a>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Frame">
          <path d={svgPaths.p347ecb00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavItemLocation() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Location">
      <Frame18 />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Location</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Frame">
          <g id="Vector">
            <path d={svgPaths.p105bb780} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p4ce88f0} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p36585400} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavItemMore() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-More">
      <Frame19 />
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

export default function Notifications() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start overflow-clip relative rounded-[24px] size-full to-[#07111f]" data-name="notifications">
      <div className="absolute right-[-120px] size-[320px] top-[-120px]" data-name="bg-glow-1">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#filter0_f_0_29)" id="bg-glow-1" opacity="0.12">
              <circle cx="270" cy="270" fill="#8B1A2B" r="160" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="filter0_f_0_29" width="540" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_29" stdDeviation="55" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-140px] left-[-80px] size-[260px]" data-name="bg-glow-2">
        <div className="absolute inset-[-34.62%]">
          <svg className="block size-full" fill="none" height="440" preserveAspectRatio="none" viewBox="0 0 440 440" width="440">
            <g filter="url(#filter0_f_0_26)" id="bg-glow-2" opacity="0.04">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_26" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_26" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <NotificationsContent />
      <BottomNavContainer />
    </div>
  );
}