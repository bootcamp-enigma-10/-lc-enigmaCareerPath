import type { ReactNode } from "react";

interface StatCardDashboardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgClass: string;
  badgeText: string;
  badgeClass: string;
  footerIcon: ReactNode;
  footerContent: ReactNode;
}

function StatCardDashboard({
  title,
  value,
  icon,
  iconBgClass,
  badgeText,
  badgeClass,
  footerIcon,
  footerContent,
}: StatCardDashboardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBgClass}`}
        >
          {icon}
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
        >
          {badgeText}
        </span>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
          {title}
        </p>
        <h3 className="mt-1 text-3xl font-bold text-primary">{value}</h3>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-text-muted">
        {footerIcon}
        <div>{footerContent}</div>
      </div>
    </div>
  );
}

export default StatCardDashboard;
