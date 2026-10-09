import svgPaths from "./svg-26p6jp20be";

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
    <a className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex items-start p-[8px] relative rounded-[100px] shrink-0" data-name="back-btn">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <ChevronLeft />
    </a>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <BackBtn />
      <p className="[word-break:break-word] font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Transaction History</p>
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

function Search() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="search">
          <path d={svgPaths.peea8900} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[8px] h-[44px] items-center px-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Search />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#94a3b8] text-[14px]">Search transactions...</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative rounded-[8px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Today</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative rounded-[8px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">This Week</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[8px] relative rounded-[8px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">This Month</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[2px] items-start p-[2px] relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Category</p>
      <ChevronDown />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Account</p>
      <ChevronDown1 />
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Status</p>
      <ChevronDown2 />
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#0b1524] content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[20px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Amount</p>
      <ChevronDown3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shopping-cart">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_19)" id="shopping-cart">
          <path d={svgPaths.p500d600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ShoppingCart />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Today</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Shopping</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Target Stores</p>
      <Frame16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[10px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[15px] whitespace-nowrap">-$84.50</p>
      <Frame18 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame13 />
      <Frame17 />
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trending-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trending-up">
          <path d={svgPaths.p29ffcc00} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <TrendingUp />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Aug 20 2026</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Payroll</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Paycheck Deposit</p>
      <Frame23 />
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

function Frame25() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[10px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[15px] whitespace-nowrap">+$3,450.00</p>
      <Frame25 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame20 />
      <Frame24 />
    </div>
  );
}

function ShoppingCart1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shopping-cart">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_19)" id="shopping-cart">
          <path d={svgPaths.p500d600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ShoppingCart1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Aug 19 2026</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">{`Food & Dining`}</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Starbucks Coffee</p>
      <Frame30 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[10px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[15px] whitespace-nowrap">-$12.75</p>
      <Frame32 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame27 />
      <Frame31 />
    </div>
  );
}

function ShoppingCart2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shopping-cart">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_19)" id="shopping-cart">
          <path d={svgPaths.p500d600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ShoppingCart2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Aug 18 2026</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Bills</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Auto Insurance</p>
      <Frame37 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d97706] text-[10px] whitespace-nowrap">Pending</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[15px] whitespace-nowrap">-$145.00</p>
      <Frame39 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame34 />
      <Frame38 />
    </div>
  );
}

function TrendingUp1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trending-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trending-up">
          <path d={svgPaths.p29ffcc00} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <TrendingUp1 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Aug 15 2026</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Transfer</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Transfer from Savings</p>
      <Frame44 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[10px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[15px] whitespace-nowrap">+$500.00</p>
      <Frame46 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame41 />
      <Frame45 />
    </div>
  );
}

function ShoppingCart3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shopping-cart">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_19)" id="shopping-cart">
          <path d={svgPaths.p500d600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ShoppingCart3 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Aug 12 2026</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Entertainment</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Netflix Subscription</p>
      <Frame51 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[10px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[15px] whitespace-nowrap">-$15.49</p>
      <Frame53 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame48 />
      <Frame52 />
    </div>
  );
}

function ShoppingCart4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shopping-cart">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_19)" id="shopping-cart">
          <path d={svgPaths.p500d600} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ShoppingCart4 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Aug 10 2026</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Groceries</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Whole Foods Market</p>
      <Frame58 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[10px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#b91c1c] text-[15px] whitespace-nowrap">-$120.30</p>
      <Frame60 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame55 />
      <Frame59 />
    </div>
  );
}

function TrendingUp2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trending-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trending-up">
          <path d={svgPaths.p29ffcc00} id="Vector" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <TrendingUp2 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Aug 08 2026</p>
      <div className="relative shrink-0 size-[3px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 3 3" width="3">
          <circle cx="1.5" cy="1.5" fill="#94A3B8" id="Ellipse" r="1.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Income</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Venmo Cashout</p>
      <Frame65 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame63 />
      <Frame64 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[10px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[15px] whitespace-nowrap">+$45.00</p>
      <Frame67 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#0b1524] content-stretch flex items-center justify-between p-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_24px_0px_rgba(139,26,43,0.12),0px_10px_24px_0px_rgba(0,0,0,0.15)]" />
      <Frame62 />
      <Frame66 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame19 />
      <Frame26 />
      <Frame33 />
      <Frame40 />
      <Frame47 />
      <Frame54 />
      <Frame61 />
    </div>
  );
}

function HistoryContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0 w-full" data-name="history-content">
      <AppHeader />
      <Frame1 />
      <Frame2 />
      <Frame6 />
      <Frame11 />
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
    <a className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Home">
      <Home />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[11px] text-left whitespace-nowrap">Home</p>
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
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px]" data-name="nav-item-Transfer">
      <ArrowLeftRight />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">Transfer</p>
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

export default function TransactionHistory() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start overflow-clip relative rounded-[24px] size-full to-[#07111f]" data-name="transaction-history">
      <div className="absolute right-[-120px] size-[320px] top-[-120px]" data-name="bg-glow-1">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#filter0_f_0_26)" id="bg-glow-1" opacity="0.12">
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
            <g filter="url(#filter0_f_0_25)" id="bg-glow-2" opacity="0.04">
              <circle cx="220" cy="220" fill="white" r="130" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="filter0_f_0_25" width="440" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_25" stdDeviation="45" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <HistoryContent />
      <BottomNavContainer />
    </div>
  );
}