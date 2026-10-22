import { useMemo } from "react";
import {
  Download,
  Zap,
  TrendingUp,
  Building2,
  CheckCircle2,
  History,
  ArrowRight,
  CheckCheck,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";
import Button from "../../atoms/Button/Button";
import StatCardDashboard from "../../molecules/StatCard/StatCardDashboard";
import ActivityItem from "../../molecules/ActivityItem/ActivityItem";
import { STUDENTS } from "../../../data/students";
import { CAREERS } from "../../../data/career";
import { RECENT_ACTIVITIES } from "../../../data/activity";

function DashboardGrid() {
  const totalStudents = STUDENTS.length;

  const averageGpa = useMemo(() => {
    if (totalStudents === 0) return "0.00";
    const total = STUDENTS.reduce((acc, curr) => acc + curr.gpa, 0);
    return (total / totalStudents).toFixed(2);
  }, [totalStudents]);

  const topTierPercentage = useMemo(() => {
    if (totalStudents === 0) return 0;
    const topStudents = STUDENTS.filter((student) => student.gpa > 3.5).length;
    return Math.round((topStudents / totalStudents) * 100);
  }, [totalStudents]);

  const totalCareers = CAREERS.length;

  const uniqueCompanies = useMemo(() => {
    return new Set(CAREERS.map((c) => c.company)).size;
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Welcome back, admin! <span className="text-2xl">👋</span>
          </h1>
          <p className="mt-1 text-sm text-[#475569]">
            Here's what's happening with your student & career ecosystem today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Download className="h-4 w-4" />
            Download Report
          </button>
          <Button className="flex items-center gap-2 bg-secondary px-4 py-2 text-sm hover:bg-secondary/85">
            <Zap className="h-4 w-4" />
            Quick Action
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCardDashboard
          title="Total Students"
          value={totalStudents}
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          iconBgClass="bg-[#EFF6FF]"
          badgeText="Active Cohort"
          badgeClass="bg-[#DBEAFE] text-[#233D90]"
          footerIcon={<TrendingUp className="h-4 w-4 text-[#059669]" />}
          footerContent={
            <>
              <span className="font-semibold text-[#059669]">+12%</span> from
              previous semester
            </>
          }
        />

        <StatCardDashboard
          title="Total Careers"
          value={totalCareers}
          icon={<Briefcase className="h-5 w-5 text-secondary" />}
          iconBgClass="bg-[#FFF7ED]"
          badgeText={`${totalCareers} Active Postings`}
          badgeClass="bg-[#FFD4BC] text-[#FF6B18]"
          footerIcon={<Building2 className="h-4 w-4 text-[#FF6B18]" />}
          footerContent={
            <>
              <span className="font-semibold text-text-muted">
                {uniqueCompanies}
              </span>{" "}
              Hiring Partners
            </>
          }
        />

        <StatCardDashboard
          title="Average GPA"
          value={averageGpa}
          icon={<Award className="h-5 w-5 text-[#4F64A6]" />}
          iconBgClass="bg-[#EEF2FF]"
          badgeText="Top Tier Standing"
          badgeClass="bg-[#F1F5F9] text-[#334155]"
          footerIcon={<CheckCircle2 className="h-4 w-4 text-[#059669]" />}
          footerContent={
            <>
              <span className="font-semibold text-text-main">
                {topTierPercentage}%
              </span>{" "}
              above 3.50 target
            </>
          }
        />

        <StatCardDashboard
          title="Placement Rate"
          value="94.2%"
          icon={<TrendingUp className="h-5 w-5 text-[#047857]" />}
          iconBgClass="bg-[#ECFDF5]"
          badgeText="+4.5% vs target"
          badgeClass="bg-[#D1FAE5] text-[#065F46]"
          footerIcon={<CheckCheck className="h-4 w-4 text-[#059669]" />}
          footerContent={
            <>
              <span className="font-semibold text-slate-700">147</span>{" "}
              candidates placed
            </>
          }
        />
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between border-b border-slate-50 pb-4">
          <div className="flex items-center gap-2 text-primary">
            <History className="h-5 w-5" />
            <h2 className="text-lg font-bold">
              Recent Activity
            </h2>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-[#0B1B4D]">
            View All History <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          {RECENT_ACTIVITIES.map((activity) => (
            <ActivityItem
              key={activity.id}
              title={activity.title}
              description={activity.description}
              time={activity.time}
              icon={activity.icon}
              bgClass={activity.bgClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardGrid;
