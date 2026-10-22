import type { ReactNode } from "react";
import { User, Briefcase, ShieldCheck } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="hidden w-full flex-col justify-center bg-primary p-12 text-white lg:flex lg:w-1/2 xl:p-24">
        <div className="mx-auto w-full max-w-lg">
          <div className="mb-10 flex items-start gap-4">
            <div className="border-[#4F64A666] flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-[#233D90] text-xl font-bold text-white shadow-lg">
              E
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-wide">
                  ENIGMA CAREER
                </h2>
                <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-bold text-white">
                  WEB
                </span>
              </div>
              <p className="mt-1 text-sm text-blue-200">
                Student & Career Ecosystem
              </p>
            </div>
          </div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            Official Student & Career Management Portal
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
            <span className="block">Welcome to</span>
            <span className="block text-[#FFDCA8]">Student Management</span>
            <span className="block">System</span>
          </h1>
          <p className="mb-12 text-base leading-relaxed text-blue-100/80">
            Unified platform for tracking academic progress of tech talent and
            accelerating industry career placement.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-5 transition-colors hover:bg-white/10">
              <div className="mt-0.5 shrink-0 text-blue-300">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  Comprehensive Student Data Management
                </h3>
                <p className="text-xs leading-relaxed text-blue-200/70">
                  Real-time cohort monitoring, daily attendance records, and
                  benchmark milestone evaluation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-5 transition-colors hover:bg-white/10">
              <div className="mt-0.5 shrink-0 text-blue-300">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  Integrated Career Opportunities
                </h3>
                <p className="text-xs leading-relaxed text-blue-200/70">
                  Direct recruitment pipeline connecting top talent with vetted
                  enterprise hiring partners.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-5 transition-colors hover:bg-white/10">
              <div className="mt-0.5 shrink-0 text-blue-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  Secure, Authenticated & Reliable
                </h3>
                <p className="text-xs leading-relaxed text-blue-200/70">
                  Encrypted sensitive record storage, granular role-based access
                  control, and complete audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 w-full flex-col items-center justify-center bg-slate-50 p-6 sm:p-12 lg:w-1/2">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
