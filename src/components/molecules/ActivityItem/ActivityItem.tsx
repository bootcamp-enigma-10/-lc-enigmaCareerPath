import type { ReactNode } from "react";

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  icon: ReactNode;
  bgClass: string;
}

function ActivityItem({
  title,
  description,
  time,
  icon,
  bgClass,
}: ActivityItemProps) {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-solid border-border bg-[#F7F9FB] p-3.5 opacity-100 transition-all">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bgClass}`}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary">{title}</h4>
          <p className="mt-0.5 text-xs text-text-muted line-clamp-1 sm:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
      <span className="shrink-0 self-start text-xs font-medium text-[#94A3B8] sm:self-center">
        {time}
      </span>
    </div>
  );
}

export default ActivityItem;
