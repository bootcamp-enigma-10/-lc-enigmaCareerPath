import type { ReactNode } from "react";

interface StatCardStudentProps {
  title: string;
  value: string;
  badge: ReactNode;
  icon: ReactNode;
  footerLeft: ReactNode;
  footerRight: ReactNode;
}

function StatCardStudent({
  title,
  value,
  badge,
  icon,
  footerLeft,
  footerRight,
}: StatCardStudentProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div className="flex items-start justify-between p-5 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#4F64A6]">
            {title}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <h3 className="text-4xl font-bold text-[#0B1B4D]">{value}</h3>
            {badge}
          </div>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#0B1B4D]">
          {icon}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between bg-slate-50 px-5 py-3 text-xs font-medium text-[#4F64A6]">
        <div className="flex items-center gap-1.5">{footerLeft}</div>
        <div>{footerRight}</div>
      </div>
    </div>
  );
}

export default StatCardStudent;
