import { useState } from "react";

interface TransferData {
  recipient: { id: string; name: string; initials: string; account: string };
  amount: string;
  memo: string;
}

interface Props {
  navigate: (screen: string, data?: unknown) => void;
  data: TransferData;
}

const AVAILABLE_BALANCE = 240000;

export default function TransferReviewScreen({ navigate, data }: Props) {
  const { recipient, amount, memo } = data;
  const [transferUnavailable, setTransferUnavailable] = useState(false);
  const fee = "0.00";
  const transferAmount = Number(amount);
  const total = Number.isFinite(transferAmount) ? transferAmount.toFixed(2) : "0.00";
  const hasSufficientFunds = transferAmount > 0 && transferAmount <= AVAILABLE_BALANCE;

  function handleConfirm() {
    if (hasSufficientFunds) setTransferUnavailable(true);
  }

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      {/* bg glow */}
      <div className="absolute right-[-120px] size-[320px] top-[-120px] pointer-events-none">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" viewBox="0 0 540 540" width="540">
            <g filter="url(#trg1)" opacity="0.12"><circle cx="270" cy="270" fill="#8B1A2B" r="160" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="trg1" width="540" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="55" />
            </filter></defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center gap-[12px] py-[12px] relative shrink-0 w-full">
            <button onClick={() => navigate("transfer")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0 border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Review Transfer</p>
          </div>

          {/* Amount Hero */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[8px] items-center p-[24px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px]">You are sending</p>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[44px] text-white">${total}</p>
            <div className="content-stretch flex items-center gap-[8px] relative shrink-0">
              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" style={{boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)"}}>
                <span className="font-['Geist:SemiBold',sans-serif] text-[11px] text-white">{recipient.initials}</span>
              </div>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">to {recipient.name}</p>
            </div>
          </div>

          {/* Transfer Details */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Transfer Details</p>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />

            {[
              { label: "From", value: "Checking (•••4501)" },
              { label: "To", value: `${recipient.name} (${recipient.account})` },
              { label: "Amount", value: `$${total}` },
              { label: "Fee", value: `$${fee}` },
              { label: "Memo", value: memo || "—" },
            ].map(({ label, value }) => (
              <div key={label} className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px]">{label}</p>
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">{value}</p>
              </div>
            ))}

            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-white text-[14px]">Total Deducted</p>
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[#8b1a2b]">${total}</p>
            </div>
          </div>

          {!hasSufficientFunds && (
            <div role="alert" className="bg-[rgba(248,113,113,0.08)] p-[14px] relative rounded-[14px] shrink-0 w-full" style={{border: "1px solid rgba(248,113,113,0.3)"}}>
              <p className="font-['Geist:Medium',sans-serif] text-[13px] text-[#f87171]">Insufficient funds. This transfer exceeds the $240,000.00 available balance and cannot be completed.</p>
            </div>
          )}

          {transferUnavailable && (
            <div role="alert" className="bg-[rgba(248,113,113,0.08)] p-[14px] relative rounded-[14px] shrink-0 w-full" style={{border: "1px solid rgba(248,113,113,0.3)"}}>
              <p className="font-['Geist:Medium',sans-serif] text-[13px] text-[#f87171]">ERROR! Transactions are on hold. Transfers will be available once the PIN is generated.</p>
            </div>
          )}

          {/* Security Notice */}
          <div className="bg-[rgba(139,26,43,0.06)] content-stretch flex items-center gap-[10px] p-[14px] relative rounded-[14px] shrink-0 w-full">
            <div aria-hidden className="absolute border border-[rgba(139,26,43,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" className="shrink-0">
              <path d="M8 2L13 4.5V8C13 11 10.5 13.5 8 14C5.5 13.5 3 11 3 8V4.5L8 2Z" stroke="#8B1A2B" strokeWidth="1.5" />
              <path d="M6 8L7.5 9.5L10 7" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
            <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relativ min-w-0 flex-1 text-[#94a3b8] text-[12px]">This transfer is protected by Benchmark Bank security protocols.</p>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={!hasSufficientFunds || transferUnavailable}
            className="bg-[#8b1a2b] content-stretch flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
            style={{boxShadow: "0px 10px 12px rgba(139,26,43,0.2)"}}
          >
            <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white">{transferUnavailable ? "Transfer unavailable" : "Confirm Transfer"}</p>
          </button>

          <button
            onClick={() => navigate("transfer")}
            className="bg-transparent content-stretch flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-[1.5px] border-[rgba(255,255,255,0.12)] border-solid cursor-pointer"
          >
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[16px]">Cancel</p>
          </button>

          <div className="h-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}
