import BottomNav from "./BottomNav";

interface Props {
  navigate: (screen: string) => void;
}

function BackButton({ navigate }: { navigate: (s: string) => void }) {
  return (
    <button onClick={() => navigate("home")} className="bg-[rgba(255,255,255,0.04)] content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[20px] shrink-0 border-0" style={{boxShadow: "0px 10px 12px rgba(0,0,0,0.12)"}}>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" viewBox="0 0 20 20" width="20">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
    </button>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px]">{label}</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">{value}</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" viewBox="0 0 12 12" width="12">
        <path d="M4.5 9L7.5 6L4.5 3" stroke="#8B1A2B" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function SecurityRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px]">{label}</p>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[13px]">{value}</p>
        <ChevronRight />
      </div>
    </div>
  );
}

export default function ProfileScreen({ navigate }: Props) {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0a1628] items-start justify-between overflow-hidden relative size-full to-[#07111f]">
      {/* bg glows */}
      <div className="absolute right-[-120px] size-[320px] top-[-120px] pointer-events-none">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" viewBox="0 0 540 540" width="540">
            <g filter="url(#pg1)" opacity="0.12"><circle cx="270" cy="270" fill="#8B1A2B" r="160" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="pg1" width="540" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1" stdDeviation="55" />
            </filter></defs>
          </svg>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-0">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">

          {/* Header */}
          <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <BackButton navigate={navigate} />
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white">{`Benchmark's Profile`}</p>
            </div>
          </div>

          {/* Avatar + Name */}
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[16px] relative shrink-0 w-full">
            {/* Avatar placeholder */}
            <div className="relative rounded-[40px] shrink-0 size-[80px]">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
                <span className="font-['Young_Serif:Regular',sans-serif] text-[28px] text-white">DH</span>
              </div>
              <div aria-hidden className="absolute border-2 border-[#8b1a2b] border-solid inset-0 rounded-[40px]" />
            </div>
            <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-white">Donn Haughey / Donald Highouse</p>
            <div className="bg-[rgba(139,26,43,0.08)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[999px] shrink-0">
              <div aria-hidden className="absolute border border-[rgba(139,26,43,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
              <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[12px] uppercase">Premium Member</p>
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Profile Info</p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <InfoRow label="Account Holders" value="Donn Haughey / Donald Highouse" />
              <InfoRow label="Account Type" value="Premium Checking" />
              <InfoRow label="Customer ID" value="BM-7829451" />
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[13px]">Status</p>
                <div className="bg-[rgba(21,128,61,0.07)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                  <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#15803d] text-[12px]">Active</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info Card */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Personal Info</p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <InfoRow label="DOB" value="05/10/1968" />
              <InfoRow label="Phone" value="•••-•••-4523" />
              <InfoRow label="Email" value="donaldhighhouse@outlook.com" />
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Address</p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <InfoRow label="Street" value="1 Radney Est" />
              <InfoRow label="City/State" value="Houston, Texas 77024" />
              <InfoRow label="Country" value="USA" />
            </div>
          </div>

          {/* Security Settings Card */}
          <div className="bg-[#0b1524] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 10px 24px 0px rgba(139,26,43,0.12), 0px 18px 40px 0px rgba(0,0,0,0.2)"}}>
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white">Security Settings</p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="h-px relative shrink-0 w-full bg-[rgba(255,255,255,0.12)]" />
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <SecurityRow label="Password & 2FA" value="Configured" />
              <SecurityRow label="Biometric Login" value="Enabled" />
              <SecurityRow label="Trusted Devices" value="2 Active" />
            </div>
          </div>

          <div className="h-4 shrink-0" />
        </div>
      </div>

      <BottomNav active="profile" navigate={navigate} />
    </div>
  );
}
