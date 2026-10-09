interface TransferData {
  recipient: { id: string; name: string; initials: string; account: string };
  amount: string;
  memo: string;
}

interface Props {
  navigate: (screen: string) => void;
  data: TransferData;
}

export default function TransferSuccessScreen({ navigate, data }: Props) {
  const { recipient, amount } = data;
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const refNum = "BM" + Math.floor(Math.random() * 9000000 + 1000000);

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-center justify-between relative size-full to-[#07111f] overflow-hidden p-[24px]">
      {/* bg glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="size-[400px]">
          <svg className="block size-full" fill="none" height="400" viewBox="0 0 400 400" width="400">
            <g filter="url(#sg1)" opacity="0.15"><circle cx="200" cy="200" fill="#8B1A2B" r="120" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="400" id="sg1" width="400" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="60" />
            </filter></defs>
          </svg>
        </div>
      </div>

      <div className="flex-1" />

      {/* Success icon */}
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
        <div className="bg-[rgba(139,26,43,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[100px]">
          <div aria-hidden className="absolute border border-[rgba(139,26,43,0.2)] border-solid inset-0 pointer-events-none rounded-[40px]" />
          <svg fill="none" height="48" viewBox="0 0 48 48" width="48">
            <circle cx="24" cy="24" fill="rgba(139,26,43,0.15)" r="24" />
            <path d="M14 24L20 30L34 16" stroke="#8B1A2B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
          <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white">Transfer Sent!</p>
          <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px] text-center">{`Your transfer to ${recipient.name} was successful.`}</p>
        </div>
      </div>

      <div className="flex-1" />

      {/* Receipt Card */}
      <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[20px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />

        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px]">Amount</p>
          <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">${parseFloat(amount).toFixed(2)}</p>
        </div>
        <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.08)]" />
        {[
          { label: "To", value: recipient.name },
          { label: "Account", value: recipient.account },
          { label: "Date", value: dateStr },
          { label: "Time", value: timeStr },
          { label: "Reference", value: refNum },
          { label: "Status", value: "Completed" },
        ].map(({ label, value }) => (
          <div key={label} className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px]">{label}</p>
            <p className={`font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] ${label === "Status" ? "text-[#15803d]" : "text-white"}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      {/* Actions */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <button
          onClick={() => navigate("home")}
          className="bg-[#8b1a2b] content-stretch flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-0 cursor-pointer"
          style={{boxShadow: "0px 10px 12px rgba(139,26,43,0.2)"}}
        >
          <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white">Return to Dashboard</p>
        </button>
        <button
          onClick={() => navigate("transfer")}
          className="bg-transparent content-stretch flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-[1.5px] border-[rgba(255,255,255,0.12)] border-solid cursor-pointer"
        >
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[16px]">New Transfer</p>
        </button>
      </div>
    </div>
  );
}
