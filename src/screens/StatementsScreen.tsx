interface Props {
  navigate: (screen: string) => void;
}

const STATEMENTS = [
  { month: "August 2026", period: "Aug 1 – Aug 24", size: "1.2 MB", status: "Current" },
  { month: "July 2026", period: "Jul 1 – Jul 31", size: "3.4 MB", status: "Available" },
  { month: "June 2026", period: "Jun 1 – Jun 30", size: "2.9 MB", status: "Available" },
  { month: "May 2026", period: "May 1 – May 31", size: "3.1 MB", status: "Available" },
  { month: "April 2026", period: "Apr 1 – Apr 30", size: "2.7 MB", status: "Available" },
  { month: "March 2026", period: "Mar 1 – Mar 31", size: "3.0 MB", status: "Available" },
];

export default function StatementsScreen({ navigate }: Props) {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center gap-[12px] py-[12px] relative shrink-0 w-full">
            <button onClick={() => navigate("more")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0 border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Statements</p>
          </div>

          {/* Info Card */}
          <div className="bg-[rgba(139,26,43,0.06)] content-stretch flex items-center gap-[12px] p-[14px] relative rounded-[16px] shrink-0 w-full" style={{border: "1px solid rgba(139,26,43,0.15)"}}>
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" className="shrink-0">
              <circle cx="10" cy="10" r="7" stroke="#8b1a2b" strokeWidth="1.5" />
              <path d="M10 9v5M10 7h.01" stroke="#8b1a2b" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
            <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#94a3b8] text-[12px] flex-1">Statements are available for the past 24 months. Download PDFs for your records.</p>
          </div>

          {/* Year Filter */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            {["2026", "2025", "2024"].map((y, i) => (
              <div
                key={y}
                className="content-stretch flex items-center px-[14px] py-[7px] relative rounded-[99px] shrink-0"
                style={{
                  background: i === 0 ? "#8b1a2b" : "rgba(255,255,255,0.04)",
                  border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <p className={`font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] ${i === 0 ? "text-white" : "text-[#94a3b8]"}`}>{y}</p>
              </div>
            ))}
          </div>

          {/* Statement List */}
          <div className="bg-[#0b1524] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full overflow-hidden" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)"}}>
            {STATEMENTS.map((s, i) => (
              <div key={s.month}>
                <div className="content-stretch flex items-center gap-[12px] p-[14px] relative shrink-0 w-full">
                  <div className="bg-[rgba(139,26,43,0.08)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" style={{border: "1px solid rgba(139,26,43,0.2)"}}>
                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                      <rect height="16" rx="2" stroke="#8B1A2B" strokeWidth="1.5" width="12" x="4" y="2" />
                      <path d="M7 7h6M7 10.5h4M7 14h2" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-col gap-[3px] items-start relative flex-1 min-w-0">
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">{s.month}</p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">{s.period} · {s.size}</p>
                  </div>
                  {s.status === "Current" ? (
                    <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-start px-[8px] py-[3px] relative rounded-[6px] shrink-0" style={{border: "1px solid rgba(139,26,43,0.2)"}}>
                      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[11px]">Current</p>
                    </div>
                  ) : (
                    <button className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid cursor-pointer flex items-center justify-center relative rounded-[10px] shrink-0 size-[36px]">
                      <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                        <path d="M8 3v8M5 9l3 3 3-3M3 13h10" stroke="#94A3B8" strokeLinecap="round" strokeWidth="1.5" />
                      </svg>
                    </button>
                  )}
                </div>
                {i < STATEMENTS.length - 1 && <div className="h-px mx-[14px] bg-[rgba(255,255,255,0.06)]" />}
              </div>
            ))}
          </div>

          <div className="h-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}
