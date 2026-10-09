import { useState } from "react";
import svgPaths from "../../imports/svg-pgniv2apwt";
import BottomNav from "./BottomNav";

interface Props {
  navigate: (screen: string) => void;
}

function BgGlows() {
  return (
    <>
      <div className="absolute right-[-120px] size-[320px] top-[-120px] pointer-events-none">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#hg1)" opacity="0.18"><circle cx="270" cy="270" fill="#8B1A2B" r="160" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="hg1" width="540" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="55" />
            </filter></defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-140px] left-[-80px] size-[260px] pointer-events-none">
        <div className="absolute inset-[-34.62%]">
          <svg className="block size-full" fill="none" height="440" preserveAspectRatio="none" viewBox="0 0 440 440" width="440">
            <g filter="url(#hg2)" opacity="0.06"><circle cx="220" cy="220" fill="white" r="130" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="440" id="hg2" width="440" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="45" />
            </filter></defs>
          </svg>
        </div>
      </div>
    </>
  );
}

export default function HomeScreen({ navigate }: Props) {
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      <BgGlows />

      {/* Scrollable content */}
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[#8b1a2b] relative rounded-[10px] shrink-0 size-[32px]" />
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">Benchmark</p>
            </div>
            <button onClick={() => navigate("notifications")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0 border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.15)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d={svgPaths.p21bb9400} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </button>
          </div>

          {/* Greeting */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Young_Serif:Regular',sans-serif] not-italic relative shrink-0 text-[28px] text-white">Hello, Donn Haughey / Donald Highouse</p>
            <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px]">Welcome back to your bank!</p>
          </div>

          {/* Balance Card */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] uppercase">Total Balance</p>
              <button onClick={() => setBalanceVisible(v => !v)} className="bg-transparent border-0 cursor-pointer p-0">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 20 20" width="20">
                    <path d={svgPaths.p197a0df0} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </button>
            </div>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] text-white">
              {balanceVisible ? "$13,140,000.00" : "••••••••"}
            </p>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Checking (•••4501)</p>
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">{balanceVisible ? "$240,000.00" : "••••••"}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
                <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Investments</p>
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">{balanceVisible ? "$12,900,000.00" : "••••••"}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            {/* Transfer */}
            <button onClick={() => navigate("transfer")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-1 flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px] border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 20 20" width="20">
                    <path d={svgPaths.p3b1e7a00} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">Transfer</p>
            </button>

            {/* Deposit */}
            <button className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-1 flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px] border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 20 20" width="20">
                    <path d={svgPaths.p1c5af020} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">Deposit</p>
            </button>

            {/* Pay */}
            <button onClick={() => navigate("cards")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-1 flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px] border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 20 20" width="20">
                    <path d={svgPaths.pe068800} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">Pay</p>
            </button>

            {/* History */}
            <button onClick={() => navigate("history")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-1 flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px] border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 20 20" width="20">
                    <path d={svgPaths.p27e3c480} stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">History</p>
            </button>
          </div>

          {/* Debit Card Preview */}
          <button onClick={() => navigate("cards")} className="bg-gradient-to-r cursor-pointer from-[#0f172a] h-[200px] relative rounded-[20px] shrink-0 to-[#1e293b] w-full border-0 text-left">
            <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[24px] relative rounded-[inherit] size-full">
              <div className="bg-[#ead182] h-[26px] opacity-80 relative rounded-[4px] shrink-0 w-[36px]" />
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[#8b1a2b] relative rounded-[6px] shrink-0 size-[24px]" />
                  <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Benchmark Bank</p>
                </div>
                <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white">DEBIT</p>
              </div>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-white">•••• •••• •••• 7834</p>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                  <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] uppercase">Cardholder</p>
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">DONN HAUGHEY / DONALD HIGHOUSE</p>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
                  <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] uppercase">Expires</p>
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">09/28</p>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" style={{boxShadow: "0px 10px 24px -10px rgba(139,26,43,0.12), 0px 18px 40px -12px rgba(0,0,0,0.2)"}} />
          </button>

          {/* Spacer for bottom nav */}
          <div className="h-4 shrink-0" />
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav active="home" navigate={navigate} />
    </div>
  );
}
