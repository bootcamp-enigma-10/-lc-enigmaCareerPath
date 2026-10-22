import { useEffect, useRef } from "react";
import { Search, Building2, GraduationCap, ChevronDown } from "lucide-react";

interface FilterBarStudentProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  department: string;
  onDepartmentChange: (value: string) => void;
  year: string;
  onYearChange: (value: string) => void;
}

function FilterBarStudent({
  searchQuery,
  onSearchChange,
  department,
  onDepartmentChange,
  year,
  onYearChange,
}: FilterBarStudentProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, student ID, or major..."
          className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2.5 text-sm text-slate-700 outline-none focus:border-[#233D90] focus:ring-1 focus:ring-[#233D90]"
        />
      </div>

      <div className="flex flex-wrap gap-4 md:flex-nowrap">
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <select
            value={department}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-700 outline-none cursor-pointer focus:border-[#233D90] focus:ring-1 focus:ring-[#233D90]"
          >
            <option value="All Departments / Majors">
              All Departments / Majors
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Business Administration">
              Business Administration
            </option>
            <option value="Mathematics">Mathematics</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="relative">
          <GraduationCap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <select
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-700 outline-none cursor-pointer focus:border-[#233D90] focus:ring-1 focus:ring-[#233D90]"
          >
            <option value="All Years">All Years</option>
            <option value="Year 1">Year 1</option>
            <option value="Year 2">Year 2</option>
            <option value="Year 3">Year 3</option>
            <option value="Year 4">Year 4</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
    </div>
  );
}

export default FilterBarStudent;
