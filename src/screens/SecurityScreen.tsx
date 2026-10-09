interface Props {
  navigate: (screen: string) => void;
}

function AlertRow({ level, title, body }: { level: "warning" | "info" | "ok"; title: string; body: string }) {
  const colors = { warning: "#ca8a04", info: "#8b1a2b", ok: "#15803d" };
  const bgColors = { warning: "rgba(202,138,4,0.08)", info: "rgba(139,26,43,0.08)", ok: "rgba(21,128,61,0.08)" };
  const color = colors[level];
  const bg = bgColors[level];

  return (
    <div className="content-stretch flex gap-[12px] items-start p-[14px] relative rounded-[16px] shrink-0 w-full" style={{background: bg, border: `1px solid ${color}28`}}>
      <div className="flex items-center justify-center relative rounded-full shrink-0 size-[32px]" style={{background: `${color}18`}}>
        {level === "ok" ? (
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M3 8l3.5 3.5L13 4" stroke={color} strokeLinecap="round" strokeWidth="2" /></svg>
        ) : level === "warning" ? (
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><path d="M8 5v4M8 11h.01M7 2L1 14h14L8 2z" stroke={color} strokeLinecap="round" strokeWidth="1.5" /></svg>
        ) : (
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16"><circle cx="8" cy="8" r="5" stroke={color} strokeWidth="1.5" /><path d="M8 6v3M8 11h.01" stroke={color} strokeLinecap="round" strokeWidth="1.5" /></svg>
        )}
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">{title}</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#94a3b8] text-[12px]">{body}</p>
      </div>
    </div>
  );
}

export default function SecurityScreen({ navigate }: Props) {
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
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Security Center</p>
          </div>

          {/* Security Score */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[16px] items-center p-[24px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)"}}>
            <div className="relative size-[100px]">
              <svg className="block size-full" fill="none" height="100" viewBox="0 0 100 100" width="100">
                <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                <circle cx="50" cy="50" r="42" stroke="#8b1a2b" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42 * 0.78} ${2 * Math.PI * 42}`}
                  strokeDashoffset={2 * Math.PI * 42 * 0.25}
                  transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-['Young_Serif:Regular',sans-serif] text-[24px] text-white">78</p>
                <p className="font-['Geist:Regular',sans-serif] text-[10px] text-[#94a3b8]">/ 100</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
              <p className="font-['Young_Serif:Regular',sans-serif] text-[18px] text-white">Good Security</p>
              <p className="font-['Geist:Regular',sans-serif] text-[13px] text-[#94a3b8]">2 items need attention</p>
            </div>
          </div>

          {/* Alerts */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Active Alerts</p>
            <AlertRow level="warning" title="Unrecognized Device" body="A new sign-in was detected from an unrecognized device on Aug 24, 2026." />
            <AlertRow level="warning" title="Password Age" body="Your password is 190 days old. Consider updating it for better security." />
          </div>

          {/* Security Checklist */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.08)"}}>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Security Checklist</p>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.08)]" />
            {[
              { label: "Two-Factor Authentication", done: true },
              { label: "Biometric Login", done: true },
              { label: "Email Verified", done: true },
              { label: "Strong Password", done: false },
              { label: "Trusted Devices Reviewed", done: false },
            ].map(({ label, done }) => (
              <div key={label} className="content-stretch flex items-center gap-[10px] relative shrink-0 w-full">
                <div className="flex items-center justify-center relative rounded-full shrink-0 size-[20px]" style={{background: done ? "rgba(21,128,61,0.12)" : "rgba(255,255,255,0.04)", border: done ? "1px solid rgba(21,128,61,0.3)" : "1px solid rgba(255,255,255,0.1)"}}>
                  {done && <svg fill="none" height="10" viewBox="0 0 10 10" width="10"><path d="M2 5l2.5 2.5L8 2" stroke="#15803d" strokeLinecap="round" strokeWidth="1.5" /></svg>}
                </div>
                <p className={`font-['Geist:${done ? "Regular" : "SemiBold"}',sans-serif] ${done ? "font-normal" : "font-semibold"} relative shrink-0 text-[13px] ${done ? "text-[#94a3b8]" : "text-white"}`}>{label}</p>
                {!done && (
                  <div className="ml-auto bg-[rgba(202,138,4,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" style={{border: "1px solid rgba(202,138,4,0.2)"}}>
                    <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ca8a04] text-[11px]">Action needed</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trusted Devices */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.08)"}}>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Trusted Devices</p>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.08)]" />
            {[
              { name: "iPhone 15 Pro", last: "Active now", trusted: true },
              { name: "MacBook Pro", last: "Aug 22, 2026", trusted: true },
              { name: "Unknown Device", last: "Aug 24, 2026", trusted: false },
            ].map(({ name, last, trusted }) => (
              <div key={name} className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full">
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" style={{border: "1px solid rgba(255,255,255,0.08)"}}>
                  <svg fill="none" height="18" viewBox="0 0 18 18" width="18"><rect height="12" rx="2" stroke={trusted ? "#94A3B8" : "#ca8a04"} strokeWidth="1.5" width="12" x="3" y="3" /><path d="M6 15h6" stroke={trusted ? "#94A3B8" : "#ca8a04"} strokeLinecap="round" strokeWidth="1.5" /></svg>
                </div>
                <div className="content-stretch flex flex-col gap-[2px] items-start relative flex-1 min-w-0">
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13px] text-white">{name}</p>
                  <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">{last}</p>
                </div>
                {!trusted && (
                  <button className="bg-[rgba(139,26,43,0.08)] border border-[rgba(139,26,43,0.2)] border-solid cursor-pointer px-[10px] py-[5px] relative rounded-[8px] shrink-0">
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#8b1a2b] text-[12px]">Remove</p>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="h-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}
