import { useState } from "react";
import svgPaths from "../../imports/svg-lrf4y8tqyk";

interface Props {
  navigate: (screen: string) => void;
}

function Database() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="database">
          <path d={svgPaths.p37d79c40} stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function EyeIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="eye">
          <path d={svgPaths.p197a0df0} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function LoginScreen({ navigate }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const LOGIN_USERNAME = "donaldhighhouse";
  const LOGIN_PASSWORD = "Donald@19";


  
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#07111f] items-start overflow-hidden relative size-full to-[#0a1628]">
      {/* bg glows */}
      <div className="absolute right-[-120px] size-[320px] top-[-120px] pointer-events-none">
        <div className="absolute inset-[-34.38%]">
          <svg className="block size-full" fill="none" height="540" preserveAspectRatio="none" viewBox="0 0 540 540" width="540">
            <g filter="url(#glow1)" opacity="0.18">
              <circle cx="270" cy="270" fill="#8B1A2B" r="160" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="540" id="glow1" width="540" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1" stdDeviation="55" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Login content */}
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[56px] px-[24px] relative shrink-0 w-full">
        {/* Brand */}
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
          <div className="bg-[#8b1a2b] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[56px]">
            <Database />
          </div>
          <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-white">Benchmark Bank</p>
        </div>

        {/* Welcome text */}
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
          <p className="font-['Young_Serif:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white">Welcome Back</p>
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#94a3b8] text-[14px]">Sign in to your account</p>
        </div>

        {/* Form card */}
        <div className="bg-[#0b1524] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[20px] shrink-0 w-full" style={{boxShadow: "0px 18px 20px rgba(0,0,0,0.4)"}}>
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[20px]" />

          {/* Username */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.24px] uppercase">Username</p>
            <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex h-[52px] items-center px-[16px] relative rounded-[14px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <input
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Enter username"
  className="bg-transparent outline-none border-0 w-full font-['Geist:Regular',sans-serif] text-[15px] text-white placeholder:text-[#64748b]"
/>
            </div>
          </div>

          {/* Password */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.24px] uppercase">Password</p>
            <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex h-[52px] items-center justify-between px-[16px] relative rounded-[14px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <input
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter password"
  className="bg-transparent outline-none border-0 w-full font-['Geist:Regular',sans-serif] text-[15px] text-white placeholder:text-[#64748b]"
/>
              <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="bg-transparent border-0 p-0 cursor-pointer"
  aria-label={showPassword ? "Hide password" : "Show password"}
>
  <EyeIcon />
</button>
            </div>
          </div>

          {/* Remember me + Forgot */}
          <div className="content-stretch flex items-center justify-between py-[4px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="bg-[#8b1a2b] border border-[rgba(255,255,255,0.1)] border-solid relative rounded-[5px] shrink-0 size-[18px]" />
              <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[13px]">Remember me</p>
            </div>
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white">Forgot Password?</p>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] relative shrink-0 w-full">
            <button
              onClick={() => {
  setError("");

  if (!username || !password) {
    setError("Please enter your username and password.");
    return;
  }

  if (username !== LOGIN_USERNAME || password !== LOGIN_PASSWORD) {
    setError("Invalid username or password.");
    return;
  }

  setIsLoading(true);

  setTimeout(() => {
    navigate("home");
  }, 1000);
}}
              className="bg-[#8b1a2b] content-stretch cursor-pointer flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-0"
              style={{boxShadow: "0px 10px 12px rgba(139,26,43,0.2)"}}
            >
              {isLoading ? (
  <div className="size-[20px] rounded-full border-2 border-[rgba(255,255,255,0.35)] border-t-white animate-spin" />
) : (
  <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white">
    Sign In
  </p>
)}
            </button>
            {error && (
  <p className="font-['Geist:Regular',sans-serif] text-[13px] text-[#f87171] text-center w-full">
    {error}
  </p>
)}
            <button className="bg-transparent content-stretch cursor-pointer flex h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full border-[1.5px] border-[#8b1a2b] border-solid">
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b1a2b] text-[16px]">Use other Account</p>
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="content-stretch flex flex-col gap-[12px] items-center pb-[24px] pt-[8px] relative shrink-0 w-full mt-auto">
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[14px]">Forgot Username?</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#94a3b8] text-[14px]">Need Help?</p>
      </div>
    </div>
  );
}
