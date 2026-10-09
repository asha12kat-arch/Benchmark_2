import BottomNav from "./BottomNav";

interface Props {
  navigate: (screen: string) => void;
}

function MenuItem({ icon, label, sublabel, onClick, badge }: { icon: React.ReactNode; label: string; sublabel?: string; onClick: () => void; badge?: string }) {
  return (
    <button onClick={onClick} className="content-stretch flex items-center gap-[14px] p-[14px] relative rounded-[16px] shrink-0 w-full border-0 bg-transparent cursor-pointer text-left">
      <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[44px]" style={{border: "1px solid rgba(139,26,43,0.2)"}}>
        {icon}
      </div>
      <div className="content-stretch flex flex-col gap-[2px] items-start relative flex-1 min-w-0">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-white">{label}</p>
        {sublabel && <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">{sublabel}</p>}
      </div>
      {badge && (
        <div className="bg-[#8b1a2b] flex items-center justify-center relative rounded-full shrink-0 size-[20px]">
          <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-white text-[11px]">{badge}</p>
        </div>
      )}
      <svg fill="none" height="16" viewBox="0 0 16 16" width="16" className="shrink-0">
        <path d="M6 12L10 8L6 4" stroke="#94A3B8" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    </button>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0b1524] content-stretch flex flex-col items-start relative rounded-[20px] shrink-0 w-full overflow-hidden" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)"}}>
      <div className="content-stretch flex items-center px-[16px] pt-[16px] pb-[8px] relative shrink-0 w-full">
        <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[#94a3b8] uppercase tracking-[1px]">{title}</p>
      </div>
      <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.08)]" />
      {children}
    </div>
  );
}

export default function MoreScreen({ navigate }: Props) {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start relative size-full to-[#07111f] overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[#8b1a2b] relative rounded-[10px] shrink-0 size-[32px]" />
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">More</p>
            </div>
          </div>

          {/* Banking */}
          <SectionCard title="Banking">
            <MenuItem
              onClick={() => navigate("cards")}
              label="My Cards"
              sublabel="Manage debit & credit cards"
              icon={<svg fill="none" height="20" viewBox="0 0 20 20" width="20"><rect height="14" rx="2" stroke="#8B1A2B" strokeWidth="1.5" width="16" x="2" y="4" /><path d="M2 8h16" stroke="#8B1A2B" strokeWidth="1.5" /></svg>}
            />
            <div className="h-px mx-[14px] bg-[rgba(255,255,255,0.06)]" />
            <MenuItem
              onClick={() => navigate("history")}
              label="Transaction History"
              sublabel="View all past transactions"
              icon={<svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d="M4 6h12M4 10h8M4 14h6" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" /></svg>}
            />
            <div className="h-px mx-[14px] bg-[rgba(255,255,255,0.06)]" />
            <MenuItem
              onClick={() => navigate("statements")}
              label="Statements"
              sublabel="Download monthly statements"
              icon={<svg fill="none" height="20" viewBox="0 0 20 20" width="20"><rect height="16" rx="2" stroke="#8B1A2B" strokeWidth="1.5" width="12" x="4" y="2" /><path d="M7 7h6M7 10.5h4M7 14h2" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" /></svg>}
            />
          </SectionCard>

          {/* Security */}
          <SectionCard title="Security">
            <MenuItem
              onClick={() => navigate("security")}
              label="Security Center"
              sublabel="Monitor your account security"
              badge="2"
              icon={<svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d="M10 2L17 5.5V10C17 14 13.5 17 10 18C6.5 17 3 14 3 10V5.5L10 2Z" stroke="#8B1A2B" strokeWidth="1.5" /><path d="M7 10L9 12L13 8" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" /></svg>}
            />
            <div className="h-px mx-[14px] bg-[rgba(255,255,255,0.06)]" />
            <MenuItem
              onClick={() => navigate("notifications")}
              label="Notifications"
              sublabel="Alerts and account updates"
              icon={<svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d="M10 3C7.2 3 5 5.2 5 8v4l-1 2h12l-1-2V8c0-2.8-2.2-5-5-5zM8 17a2 2 0 004 0" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" /></svg>}
            />
          </SectionCard>

          {/* Account */}
          <SectionCard title="Account">
            <MenuItem
              onClick={() => navigate("profile")}
              label="Profile Settings"
              sublabel="Personal info and preferences"
              icon={<svg fill="none" height="20" viewBox="0 0 20 20" width="20"><circle cx="10" cy="7" r="3" stroke="#8B1A2B" strokeWidth="1.5" /><path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="1.5" /></svg>}
            />
            <div className="h-px mx-[14px] bg-[rgba(255,255,255,0.06)]" />
            <MenuItem
              onClick={() => navigate("location")}
              label="Find Locations"
              sublabel="ATMs and branches near you"
              icon={<svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d="M10 2C7.2 2 5 4.2 5 7c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#8B1A2B" /></svg>}
            />
          </SectionCard>

          {/* Sign Out */}
          <button
            onClick={() => navigate("login")}
            className="bg-[rgba(139,26,43,0.06)] content-stretch flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-0 cursor-pointer"
            style={{border: "1px solid rgba(139,26,43,0.2)"}}
          >
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[16px]">Sign Out</p>
          </button>

          <div className="h-4 shrink-0" />
        </div>
      </div>
      <BottomNav active="more" navigate={navigate} />
    </div>
  );
}
