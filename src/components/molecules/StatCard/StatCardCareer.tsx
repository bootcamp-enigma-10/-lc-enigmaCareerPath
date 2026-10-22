import type { ReactNode } from "react";

interface StatCardCareerProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

function StatCardCareer({ title, value, icon }: StatCardCareerProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-text-muted">
          {title}
        </p>
        <h3 className="text-3xl font-bold text-primary">{value}</h3>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ECEEF0] text-[#233D90]">
        {icon}
      </div>
    </div>
  );
}

export default StatCardCareer;
