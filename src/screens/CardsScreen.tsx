
import { useState } from "react";
import BottomNav from "./BottomNav";

interface Props {
  navigate: (screen: string) => void;
}

export default function CardsScreen({ navigate }: Props) {
  const [isFrozen, setIsFrozen] = useState(false);
  const [activePanel, setActivePanel] = useState<"limits" | "details" | null>(null);

  const cardDetails = [
    { label: "Card Type", value: "Visa Debit" },
    { label: "Card Number", value: "•••• •••• •••• 7834" },
    { label: "Expiry Date", value: "09/28" },
    { label: "Billing Address", value: "265 Leon Road, MT" },
    { label: "Daily Limit", value: "$5,000.00" },
    { label: "Monthly Spend", value: "$1,234.56" },
  ];

  const transactions = [
    { merchant: "Amazon", date: "Aug 24", amount: "-$67.99", cat: "Shopping" },
    { merchant: "Starbucks", date: "Aug 23", amount: "-$12.50", cat: "Food & Drink" },
    { merchant: "Netflix", date: "Aug 22", amount: "-$15.99", cat: "Entertainment" },
    { merchant: "Shell Gas", date: "Aug 21", amount: "-$48.30", cat: "Transportation" },
  ];

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center gap-[12px] py-[12px] relative shrink-0 w-full">
            <button
              onClick={() => navigate("home")}
              className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0 border-0"
              style={{ boxShadow: "0px 10px 12px rgba(0,0,0,0.12)" }}
            >
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white">
              My Cards
            </p>
          </div>

          <p className="font-['Geist:Regular',sans-serif] text-[#94a3b8] text-[12px]">
            Card details for this bank.
          </p>

          {/* Debit Card */}
          <div
            className="bg-gradient-to-r from-[#0f172a] h-[200px] relative rounded-[20px] shrink-0 to-[#1e293b] w-full"
            style={{ boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.2)" }}
          >
            <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[24px] relative rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="bg-[#ead182] h-[26px] opacity-80 relative rounded-[4px] shrink-0 w-[36px]" />
                <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white uppercase tracking-[1px]">
                  VISA
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 w-full">
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[2px]">
                  •••• •••• •••• 7834
                </p>
                {isFrozen && (
                  <span className="bg-[rgba(248,113,113,0.15)] text-[#f87171] text-[10px] px-[8px] py-[4px] rounded-full">
                    FROZEN
                  </span>
                )}
              </div>

              <div className="content-stretch flex items-end justify-between gap-[8px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[2px] items-start relative min-w-0">
                  <p className="font-['Geist:Regular',sans-serif] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.5)] uppercase">
                    Cardholder
                  </p>
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative text-[13px] text-white">
                    RICK REYNOLDS
                  </p>
                </div>

                <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
                  <p className="font-['Geist:Regular',sans-serif] relative text-[9px] text-[rgba(255,255,255,0.5)] uppercase">
                    Expires
                  </p>
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative text-[13px] text-white">
                    09/28
                  </p>
                </div>

                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                  <p className="font-['Geist:Regular',sans-serif] relative text-[9px] text-[rgba(255,255,255,0.5)] uppercase">
                    Type
                  </p>
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative text-[13px] text-white">
                    DEBIT
                  </p>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>

          {/* Card Actions */}
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            {[
              {
                label: isFrozen ? "Unfreeze" : "Freeze",
                action: () => setIsFrozen((previous) => !previous),
                icon: (
                  <path
                    d="M10 3v14M3 10h14M5 5l10 10M15 5L5 15"
                    stroke="#8B1A2B"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                ),
              },
              {
                label: "Limits",
                action: () => setActivePanel((previous) => previous === "limits" ? null : "limits"),
                icon: (
                  <>
                    <path d="M3 10h14M12 5l5 5-5 5" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" />
                  </>
                ),
              },
              {
                label: "Details",
                action: () => setActivePanel((previous) => previous === "details" ? null : "details"),
                icon: (
                  <>
                    <rect height="14" rx="2" stroke="#8B1A2B" strokeWidth="1.5" width="12" x="4" y="3" />
                    <path d="M7 8h6M7 11h4" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" />
                  </>
                ),
              },
            ].map(({ label, action, icon }) => (
              <button
                key={label}
                onClick={action}
                className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-1 flex-col gap-[8px] items-center min-w-px p-[12px] relative rounded-[16px] border-0"
              >
                <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
                  <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                    {icon}
                  </svg>
                </div>
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">
                  {label}
                </p>
              </button>
            ))}
          </div>

          {/* Frozen Status */}
          {isFrozen && (
            <div
              role="status"
              className="bg-[rgba(248,113,113,0.08)] p-[14px] relative rounded-[14px] shrink-0 w-full"
              style={{ border: "1px solid rgba(248,113,113,0.3)" }}
            >
              <p className="font-['Geist:Medium',sans-serif] text-[13px] text-[#f87171]">
                This card is frozen. Select Unfreeze to change its displayed state.
              </p>
            </div>
          )}

          {/* Limits Panel */}
          {activePanel === "limits" && (
            <div
              className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="font-['Young_Serif:Regular',sans-serif] text-[15px] text-white">
                Card Limits
              </p>
              <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
              <div className="flex items-center justify-between w-full">
                <p className="text-[#94a3b8] text-[13px]">Daily Limit</p>
                <p className="text-white text-[13px]">$5,000.00</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#94a3b8] text-[13px]">Monthly Spend</p>
                <p className="text-white text-[13px]">$1,234.56</p>
              </div>
              <p className="text-[#94a3b8] text-[11px]">
                Displayed limits directly control actual card transactions.
              </p>
            </div>
          )}

          {/* Card Details */}
          {activePanel === "details" && (
            <div
              className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full"
              style={{
                boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)",
              }}
            >
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">
                Card Information
              </p>
              <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
              {cardDetails.map(({ label, value }) => (
                <div key={label} className="content-stretch flex items-center justify-between gap-[12px] relative shrink-0 w-full">
                  <p className="font-['Geist:Regular',sans-serif] text-[#94a3b8] text-[13px]">
                    {label}
                  </p>
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[13px] text-white text-right">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Recent Activity */}
          <div
            className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full"
            style={{
              boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)",
            }}
          >
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">
              Recent Transactions
            </p>
            <p className="font-['Geist:Regular',sans-serif] text-[#94a3b8] text-[11px]">
              Card activity
            </p>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />

            {transactions.map(({ merchant, date, amount, cat }) => (
              <div key={merchant + date} className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full">
                <div
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
                >
                  <span className="font-['Geist:Bold',sans-serif] text-[12px] text-white">
                    {merchant[0]}
                  </span>
                </div>
                <div className="flex-1 content-stretch flex flex-col gap-[2px] items-start relative shrink-0 min-w-0">
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">
                    {merchant}
                  </p>
                  <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">
                    {cat} · {date}
                  </p>
                </div>
                <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-[#f87171]">
                  {amount}
                </p>
              </div>
            ))}
          </div>

          <div className="h-4 shrink-0" />
        </div>
      </div>

      <BottomNav active="more" navigate={navigate} />
    </div>
  );
}
