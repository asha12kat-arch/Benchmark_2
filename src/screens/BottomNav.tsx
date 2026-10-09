import svgPaths from "../../imports/svg-pgniv2apwt";

type NavTab = "home" | "profile" | "transfer" | "location" | "more";

interface Props {
  active: NavTab;
  navigate: (screen: string) => void;
}

export default function BottomNav({ active, navigate }: Props) {
  const activeColor = "#8b1a2b";
  const inactiveColor = "#94A3B8";

  return (
    <div className="bg-[#0b1524] content-stretch flex h-[72px] items-center justify-between px-[16px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />

      {/* Home */}
      <button onClick={() => navigate("home")} className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px] bg-transparent border-0 cursor-pointer">
        <div className="relative shrink-0 size-[22px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <path d={svgPaths.p1e6ad500} stroke={active === "home" ? activeColor : inactiveColor} strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        <p className={`font-['Geist:${active === "home" ? "Bold" : "Medium"}',sans-serif] ${active === "home" ? "font-bold" : "font-medium"} leading-[normal] relative shrink-0 text-[11px]`} style={{color: active === "home" ? activeColor : inactiveColor}}>Home</p>
      </button>

      {/* Profile */}
      <button onClick={() => navigate("profile")} className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px] bg-transparent border-0 cursor-pointer">
        <div className="relative shrink-0 size-[22px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <path d={svgPaths.p19c2490} stroke={active === "profile" ? activeColor : inactiveColor} strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        <p className={`font-['Geist:${active === "profile" ? "Bold" : "Medium"}',sans-serif] ${active === "profile" ? "font-bold" : "font-medium"} leading-[normal] relative shrink-0 text-[11px]`} style={{color: active === "profile" ? activeColor : inactiveColor}}>Profile</p>
      </button>

      {/* Transfer */}
      <button onClick={() => navigate("transfer")} className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px] bg-transparent border-0 cursor-pointer">
        <div className="relative shrink-0 size-[22px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <path d={svgPaths.p341daa00} stroke={active === "transfer" ? activeColor : inactiveColor} strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        <p className={`font-['Geist:${active === "transfer" ? "Bold" : "Medium"}',sans-serif] ${active === "transfer" ? "font-bold" : "font-medium"} leading-[normal] relative shrink-0 text-[11px]`} style={{color: active === "transfer" ? activeColor : inactiveColor}}>Transfer</p>
      </button>

      {/* Location */}
      <button onClick={() => navigate("location")} className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px] bg-transparent border-0 cursor-pointer">
        <div className="relative shrink-0 size-[22px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <path d={svgPaths.p1d906b80} stroke={active === "location" ? activeColor : inactiveColor} strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        <p className={`font-['Geist:${active === "location" ? "Bold" : "Medium"}',sans-serif] ${active === "location" ? "font-bold" : "font-medium"} leading-[normal] relative shrink-0 text-[11px]`} style={{color: active === "location" ? activeColor : inactiveColor}}>Location</p>
      </button>

      {/* More */}
      <button onClick={() => navigate("more")} className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[64px] bg-transparent border-0 cursor-pointer">
        <div className="relative shrink-0 size-[22px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <g>
              <path d={svgPaths.p14f81ff0} stroke={active === "more" ? activeColor : inactiveColor} strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.pf283d00} stroke={active === "more" ? activeColor : inactiveColor} strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.p267f4d00} stroke={active === "more" ? activeColor : inactiveColor} strokeLinecap="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <p className={`font-['Geist:${active === "more" ? "Bold" : "Medium"}',sans-serif] ${active === "more" ? "font-bold" : "font-medium"} leading-[normal] relative shrink-0 text-[11px]`} style={{color: active === "more" ? activeColor : inactiveColor}}>More</p>
      </button>
    </div>
  );
}
