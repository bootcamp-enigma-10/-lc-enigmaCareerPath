import { Search, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface FilterBarCareerProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  availableLocations: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  roleCounts: {
    all: number;
    fullTime: number;
    internship: number;
    contract: number;
  };
}

function FilterBarCareer({
  searchQuery,
  onSearchChange,
  location,
  onLocationChange,
  availableLocations,
  activeTab,
  onTabChange,
  roleCounts,
}: FilterBarCareerProps) {
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
    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            ref={searchInputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search by job title, company, or tech stack..."
            className="w-full rounded-lg bg-slate-50 px-10 py-2 text-sm text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-[#233D90]/20"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative min-w-40">
            <select
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-lg bg-slate-50 py-2 pl-4 pr-10 text-sm font-medium text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-[#233D90]/20"
            >
              <option value="All Locations">All Locations</option>
              {availableLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>

          <div className="relative min-w-35">
            <select className="w-full cursor-pointer appearance-none rounded-lg bg-slate-50 py-2 pl-4 pr-10 text-sm font-medium text-slate-700 outline-none">
              <option>Sort: Newest</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
        {[
          { label: "All Roles", count: roleCounts.all },
          { label: "Full-time", count: roleCounts.fullTime },
          { label: "Internship", count: roleCounts.internship },
          { label: "Contract", count: roleCounts.contract },
        ].map((tab) => (
          <button
            key={tab.label}
            onClick={() => onTabChange(tab.label)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === tab.label
                ? "bg-[#0B1B4D] text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBarCareer;
