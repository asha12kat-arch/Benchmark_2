interface Props {
  navigate: (screen: string) => void;
}

const TRANSACTIONS = [
  { id: "1", merchant: "Transfer from Laura Bennett", category: "Transfer", date: "May 6, 1987", amount: 320000, icon: "L" },
  { id: "2", merchant: "Transfer from Savings", category: "Transfer", date: "Sept. 19, 1990", amount: 2200000, icon: "S" },
  { id: "3", merchant: "Transfer from George Miller", category: "Transfer", date: "Jan. 14, 1994", amount: 450000, icon: "G" },
  { id: "4", merchant: "Transfer from Checking", category: "Transfer", date: "Aug. 22, 2001", amount: 600000, icon: "C" },
  { id: "5", merchant: "Transfer from William Harris", category: "Transfer", date: "Mar. 11, 2004", amount: 950000, icon: "W" },
];

export default function HistoryScreen({ navigate }: Props) {
  const totalIn = TRANSACTIONS.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const totalOut = TRANSACTIONS.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0);

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center gap-[12px] p-[14px] relative shrink-0 w-full min-w-0">
            <button onClick={() => navigate("home")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0 border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Transaction History</p>
          </div>

          {/* Summary */}
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <div className="bg-[#0b1524] content-stretch flex flex-col gap-[6px] items-start p-[14px] relative rounded-[16px] flex-1 min-w-0" style={{boxShadow: "0px 10px 24px 0px rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.08)"}}>
              <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">Money In</p>
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[#15803d]">+${totalIn.toFixed(2)}</p>
            </div>
            <div className="bg-[#0b1524] content-stretch flex flex-col gap-[6px] items-start p-[14px] relative rounded-[16px] flex-1 min-w-0" style={{boxShadow: "0px 10px 24px 0px rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.08)"}}>
              <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">Money Out</p>
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[#f87171]">-${totalOut.toFixed(2)}</p>
            </div>
          </div>

          {/* Filter */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full overflow-x-hidden">
            {["All", "Income", "Shopping", "Food", "Bills"].map((tab, i) => (
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

          {/* Transaction List */}
          <div className="bg-[#0b1524] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full overflow-hidden" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)"}}>
            {TRANSACTIONS.map((t, i) => (
              <div key={t.id} className="w-full min-w-0">
                <div className="content-stretch flex items-center gap-[12px] p-[14px] relative shrink-0 w-full min-w-0">
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]" style={{border: "1px solid rgba(255,255,255,0.08)"}}>
                    <span className="font-['Geist:Bold',sans-serif] text-[14px] text-white">{t.icon}</span>
                  </div>
                  <div className="content-stretch flex flex-col gap-[3px] items-start relative flex-1 min-w-0">
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white truncate max-w-full">{t.merchant}</p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">{t.category} · {t.date}</p>
                  </div>
                  <p className={`font-['Geist:SemiBold',sans-serif] font-semibold relative shrink w-auto min-w-[75px] text-right text-[14px] ${t.amount > 0 ? "text-[#15803d]" : "text-[#f87171]"}`}>
                    {t.amount > 0 ? "+" : ""}{t.amount < 0 ? "-" : ""}${Math.abs(t.amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                {i < TRANSACTIONS.length - 1 && <div className="h-px mx-[14px] bg-[rgba(255,255,255,0.06)]" />}
              </div>
            ))}
          </div>

          <div className="h-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}
