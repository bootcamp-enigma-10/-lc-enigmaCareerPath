import { useEffect, useRef, useState } from "react";
import { Search, Building2, GraduationCap, ChevronDown } from "lucide-react";

interface FilterBarStudentProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  department: string;
  onDepartmentChange: (value: string) => void;
  year: string;
  onYearChange: (value: string) => void;
  availableDepartments?: string[];
  availableYears?: string[];
}

function FilterBarStudent({
  searchQuery,
  onSearchChange,
  department,
  onDepartmentChange,
  year,
  onYearChange,
  availableDepartments = [],
  availableYears = [],
}: FilterBarStudentProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, onSearchChange]);

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:flex-row md:items-center">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          ref={searchInputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search by name, student ID, or major..."
          className="w-full rounded-lg bg-slate-50 px-10 py-2.5 text-sm text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-[#233D90]/20"
        />
      </div>

      <div className="flex w-full flex-wrap gap-4 md:w-auto md:flex-nowrap">
        <div className="relative w-full md:w-auto">
          <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <select
            value={department}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="appearance-none w-full rounded-lg bg-slate-50 py-2.5 pl-10 pr-10 text-sm text-slate-700 outline-none cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#233D90]/20"
          >
            <option value="All Departments / Majors">
              All Departments / Majors
            </option>
            {availableDepartments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="relative w-full md:w-auto">
          <GraduationCap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <select
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
            className="appearance-none w-full rounded-lg bg-slate-50 py-2.5 pl-10 pr-10 text-sm text-slate-700 outline-none cursor-pointer focus:bg-white focus:ring-2 focus:ring-[#233D90]/20"
          >
            <option value="All Years">All Years</option>
            {availableYears.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>
    </div>
  );
}

export default FilterBarStudent;
