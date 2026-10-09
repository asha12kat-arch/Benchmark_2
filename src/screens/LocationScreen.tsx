import BottomNav from "./BottomNav";

interface Props {
  navigate: (screen: string) => void;
}

const ATM_LOCATIONS = [
  { id: "1", name: "Benchmark Bank — Downtown", address: "120 Main St, Helena, MT 59601", distance: "0.3 mi", hours: "24/7", services: ["ATM", "Cash Deposit"] },
  { id: "2", name: "Benchmark Bank — Midtown", address: "442 Broadway Ave, Helena, MT 59602", distance: "1.1 mi", hours: "Mon–Fri 9am–5pm", services: ["ATM", "Teller", "Safe Deposit"] },
  { id: "3", name: "Benchmark Bank — East Side", address: "865 Helena Blvd, Helena, MT 59603", distance: "2.4 mi", hours: "24/7", services: ["ATM"] },
  { id: "4", name: "Partner ATM — ShopMart", address: "3200 Commerce Drive, Helena, MT 59601", distance: "3.0 mi", hours: "Store hours", services: ["ATM"] },
];

export default function LocationScreen({ navigate }: Props) {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[#8b1a2b] relative rounded-[10px] shrink-0 size-[32px]" />
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">Benchmark</p>
            </div>
          </div>

          {/* Title */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">ATM & Branches</p>
            <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px]">Find locations near you</p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[#0b1524] relative rounded-[20px] shrink-0 w-full h-[180px] overflow-hidden" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            {/* Grid map */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute w-full h-px bg-[#94a3b8]" style={{top: `${i * 25 + 12}px`}} />
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute h-full w-px bg-[#94a3b8]" style={{left: `${i * 20 + 5}%`}} />
              ))}
            </div>
            {/* Map pins */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Center pin (you are here) */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{left: "50%", top: "50%"}}>
                  <div className="relative">
                    <div className="bg-white rounded-full size-[12px] border-2 border-[#0a1628]" style={{boxShadow: "0 0 0 4px rgba(255,255,255,0.2)"}}>
                    </div>
                  </div>
                </div>
                {/* ATM pins */}
                {[
                  {x: -60, y: -30},
                  {x: 40, y: -50},
                  {x: -20, y: 40},
                  {x: 70, y: 20},
                ].map((pos, i) => (
                  <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)`}}>
                    <div className="bg-[#8b1a2b] rounded-full size-[24px] flex items-center justify-center" style={{boxShadow: "0 4px 8px rgba(139,26,43,0.4)"}}>
                      <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                        <path d="M6 1C4.3 1 3 2.3 3 4c0 2 3 7 3 7s3-5 3-7c0-1.7-1.3-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2z" fill="white" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Current location label */}
            <div className="absolute bottom-[10px] right-[10px] bg-[rgba(11,21,36,0.8)] px-[8px] py-[4px] rounded-[8px]" style={{backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)"}}>
              <p className="font-['Geist:SemiBold',sans-serif] text-[11px] text-white">Helena, MT</p>
            </div>
          </div>

          {/* Search */}
          <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex h-[44px] items-center gap-[10px] px-[14px] relative rounded-[14px] shrink-0 w-full">
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
            <svg className="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="16">
              <circle cx="7" cy="7" r="5" stroke="#94A3B8" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="#94A3B8" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
            <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px]">Search locations...</p>
          </div>

          {/* Filter tabs */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            {["All", "ATMs", "Branches"].map((tab, i) => (
              <div
                key={tab}
                className="content-stretch flex items-center px-[14px] py-[7px] relative rounded-[99px] shrink-0"
                style={{
                  background: i === 0 ? "#8b1a2b" : "rgba(255,255,255,0.04)",
                  boxShadow: i === 0 ? "0px 4px 8px rgba(139,26,43,0.2)" : undefined,
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <p className={`font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] ${i === 0 ? "text-white" : "text-[#94a3b8]"}`}>{tab}</p>
              </div>
            ))}
          </div>

          {/* Location List */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {ATM_LOCATIONS.map(loc => (
              <div key={loc.id} className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[14px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(0,0,0,0.15)"}}>
                <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <div className="content-stretch flex items-start gap-[12px] relative shrink-0 w-full">
                  <div className="bg-[rgba(139,26,43,0.08)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]">
                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                      <path d="M10 2C7.2 2 5 4.2 5 7c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#8B1A2B" />
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-col gap-[3px] items-start relative flex-1 min-w-0">
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">{loc.name}</p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">{loc.address}</p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">{loc.hours}</p>
                  </div>
                  <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[6px] shrink-0">
                    <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[12px]">{loc.distance}</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                  {loc.services.map(s => (
                    <div key={s} className="bg-[rgba(255,255,255,0.04)] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" style={{border: "1px solid rgba(255,255,255,0.08)"}}>
                      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[11px]">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="h-4 shrink-0" />
        </div>
      </div>
      <BottomNav active="location" navigate={navigate} />
    </div>
  );
}
