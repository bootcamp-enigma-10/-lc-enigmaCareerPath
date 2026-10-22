import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "warning" | "neutral";
}

function Badge({ children, variant = "neutral" }: BadgeProps) {
  const variants = {
    primary: "bg-[#ABBBFF]/50 text-[#394985]",
    warning: "bg-[#FFDBCD] text-[#7C2D00]",
    neutral: "bg-[#E6E8EA] text-[#444651]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
