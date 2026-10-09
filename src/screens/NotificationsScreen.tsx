interface Props {
  navigate: (screen: string) => void;
}

const NOTIFICATIONS = [
  { id: "1", title: "Transfer Successful", body: "Your transfer of $500 to Sarah Johnson was completed.", time: "2 min ago", type: "success", read: false },
  { id: "2", title: "Security Alert", body: "A new device signed in to your account.", time: "1 hour ago", type: "alert", read: false },
  { id: "3", title: "Statement Ready", body: "Your August 2026 statement is available.", time: "3 hours ago", type: "info", read: true },
  { id: "4", title: "Payment Received", body: "David Chen sent you $250.00.", time: "Yesterday", type: "success", read: true },
  { id: "5", title: "Card Limit", body: "You have reached 80% of your daily card limit.", time: "Yesterday", type: "alert", read: true },
  { id: "6", title: "Deposit Confirmed", body: "Your deposit of $1,200 has been processed.", time: "2 days ago", type: "success", read: true },
];

function NotifIcon({ type }: { type: string }) {
  if (type === "success") return (
    <div className="bg-[rgba(21,128,61,0.1)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]">
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <path d="M4 10L8 14L16 6" stroke="#15803d" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
  if (type === "alert") return (
    <div className="bg-[rgba(234,179,8,0.1)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]">
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <path d="M10 7v4M10 14h.01M9 3L2 17h16L10 3z" stroke="#ca8a04" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
  return (
    <div className="bg-[rgba(139,26,43,0.1)] flex items-center justify-center relative rounded-[14px] shrink-0 size-[44px]">
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <path d="M10 3C7.2 3 5 5.2 5 8v4l-1 2h12l-1-2V8c0-2.8-2.2-5-5-5zM8 16.5a2 2 0 004 0" stroke="#8b1a2b" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function NotificationsScreen({ navigate }: Props) {
  const unread = NOTIFICATIONS.filter(n => !n.read).length;

  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center gap-[12px] relative shrink-0">
              <button onClick={() => navigate("home")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0 border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
                <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white">Notifications</p>
                {unread > 0 && (
                  <div className="bg-[#8b1a2b] flex items-center justify-center relative rounded-full shrink-0 size-[20px]">
                    <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-white text-[11px]">{unread}</p>
                  </div>
                )}
              </div>
            </div>
            <button className="bg-transparent border-0 cursor-pointer p-0">
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[13px]">Mark all read</p>
            </button>
          </div>

          {/* Notification list */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {NOTIFICATIONS.map(n => (
              <div
                key={n.id}
                className="content-stretch flex gap-[12px] items-start p-[14px] relative rounded-[20px] shrink-0 w-full"
                style={{
                  background: n.read ? "rgba(255,255,255,0.02)" : "rgba(139,26,43,0.04)",
                  boxShadow: n.read ? "inset 0 0 0 1px rgba(255,255,255,0.06)" : "inset 0 0 0 1px rgba(139,26,43,0.15)"
                }}
              >
                <NotifIcon type={n.type} />
                <div className="content-stretch flex flex-col gap-[4px] items-start relative flex-1 min-w-0">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full gap-[8px]">
                    <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white flex-1 min-w-0">{n.title}</p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">{n.time}</p>
                  </div>
                  <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#94a3b8] text-[13px]">{n.body}</p>
                </div>
                {!n.read && <div className="bg-[#8b1a2b] relative rounded-full shrink-0 size-[8px] mt-[4px]" />}
              </div>
            ))}
          </div>

          <div className="h-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}
