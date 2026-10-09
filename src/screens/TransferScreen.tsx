import { useState } from "react";
import BottomNav from "./BottomNav";

interface Props {
  navigate: (screen: string, data?: unknown) => void;
}

const RECIPIENTS = [
  { id: "1", name: "Sarah Johnson", initials: "SJ", account: "•••• 2341" },
  { id: "2", name: "David Chen", initials: "DC", account: "•••• 8820" },
  { id: "3", name: "Emily Rodriguez", initials: "ER", account: "•••• 5514" },
  { id: "4", name: "Marcus Taylor", initials: "MT", account: "•••• 9901" },
];

const AVAILABLE_BALANCE = 240000;

export default function TransferScreen({ navigate }: Props) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState<(typeof RECIPIENTS)[0] | null>(null);
  const enteredAmount = Number(amount);
  const exceedsAvailableBalance = Number.isFinite(enteredAmount) && enteredAmount > AVAILABLE_BALANCE;

  function handleContinue() {
    if (!selectedRecipient || !amount || exceedsAvailableBalance) return;
    navigate("transfer-review", { recipient: selectedRecipient, amount, memo });
  }

  const canContinue = selectedRecipient !== null && amount.trim() !== "" && enteredAmount > 0 && !exceedsAvailableBalance;

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      {/* bg glow */}
      <div className="absolute right-[-120px] size-[320px] top-[-120px] pointer-events-none">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" viewBox="0 0 540 540" width="540">
            <g filter="url(#tg1)" opacity="0.12"><circle cx="270" cy="270" fill="#8B1A2B" r="160" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="tg1" width="540" x="0" y="0">
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
          <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[#8b1a2b] relative rounded-[10px] shrink-0 size-[32px]" />
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">Benchmark</p>
            </div>
          </div>

          {/* Title */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">Send Money</p>
            <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[14px]">Transfer funds to your recipients</p>
          </div>

          {/* From Account */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] uppercase tracking-[0.24px]">From Account</p>
            <div className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full">
              <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[44px]">
                <div aria-hidden className="absolute border border-[rgba(139,26,43,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <svg className="block size-[20px]" fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <rect height="14" rx="2" stroke="#8B1A2B" strokeWidth="2" width="16" x="2" y="5" />
                  <path d="M2 9h16" stroke="#8B1A2B" strokeWidth="2" />
                </svg>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[15px] text-white">Checking (•••4501)</p>
                <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Available: $240,000.00</p>
              </div>
            </div>
          </div>

          {/* Recipients */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] uppercase tracking-[0.24px]">Select Recipient</p>

            {/* Search */}
            <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex h-[44px] items-center gap-[10px] px-[14px] relative rounded-[14px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <svg className="shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="16">
                <circle cx="7" cy="7" r="5" stroke="#94A3B8" strokeWidth="1.5" />
                <path d="M11 11L14 14" stroke="#94A3B8" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
              <input
                type="text"
                placeholder="Search recipient..."
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none font-['Geist:Regular',sans-serif] text-[14px] text-white placeholder:text-[#94a3b8]"
              />
            </div>

            {/* Recipient list */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {RECIPIENTS.filter(r => r.name.toLowerCase().includes(recipient.toLowerCase())).map(r => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRecipient(r.id === selectedRecipient?.id ? null : r)}
                  className="content-stretch flex items-center gap-[12px] p-[12px] relative rounded-[14px] shrink-0 w-full border-0 cursor-pointer text-left transition-all"
                  style={{
                    background: selectedRecipient?.id === r.id ? "rgba(139,26,43,0.08)" : "rgba(255,255,255,0.02)",
                    boxShadow: selectedRecipient?.id === r.id ? "inset 0 0 0 1px rgba(139,26,43,0.3)" : "inset 0 0 0 1px rgba(255,255,255,0.06)"
                  }}
                >
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center relative rounded-[14px] shrink-0 size-[40px]" style={{boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)"}}>
                    <span className="font-['Geist:SemiBold',sans-serif] text-[13px] text-white">{r.initials}</span>
                  </div>
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative flex-1 min-w-0">
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">{r.name}</p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">{r.account}</p>
                  </div>
                  {selectedRecipient?.id === r.id && (
                    <div className="bg-[#8b1a2b] flex items-center justify-center relative rounded-full shrink-0 size-[20px]">
                      <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                        <path d="M2 6L5 9L10 3" stroke="white" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] uppercase tracking-[0.24px]">Amount</p>
            <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex h-[56px] items-center gap-[8px] px-[16px] relative rounded-[14px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <p className="font-['Young_Serif:Regular',sans-serif] text-[22px] text-[#8b1a2b]">$</p>
              <input
                type="number"
                min="0"
                max={AVAILABLE_BALANCE}
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none font-['Young_Serif:Regular',sans-serif] text-[22px] text-white placeholder:text-[rgba(255,255,255,0.2)]"
              />
            </div>
            {exceedsAvailableBalance && (
              <p role="alert" className="font-['Geist:Medium',sans-serif] text-[13px] text-[#f87171]">
                Insufficient funds. Enter an amount no greater than $240,000.00.
              </p>
            )}
            {/* Memo */}
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] uppercase tracking-[0.24px]">Memo (optional)</p>
            <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex h-[44px] items-center px-[16px] relative rounded-[14px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <input
                type="text"
                placeholder="What is this for?"
                value={memo}
                onChange={e => setMemo(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none font-['Geist:Regular',sans-serif] text-[14px] text-white placeholder:text-[#94a3b8]"
              />
            </div>
          </div>

          {/* Transfer Now Button */}
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className="content-stretch flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-0 cursor-pointer transition-all"
            style={{
              background: canContinue ? "#8b1a2b" : "rgba(139,26,43,0.3)",
              boxShadow: canContinue ? "0px 10px 12px rgba(139,26,43,0.2)" : "none"
            }}
          >
            <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white">Transfer Now</p>
          </button>

          <div className="h-4 shrink-0" />
        </div>
      </div>

      <BottomNav active="transfer" navigate={navigate} />
    </div>
  );
}
