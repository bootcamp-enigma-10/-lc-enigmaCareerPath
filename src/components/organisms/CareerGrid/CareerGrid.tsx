import { useState, useMemo } from "react";
import {
  Briefcase,
  Building2,
  Users,
  Banknote,
  Plus,
  Download,
} from "lucide-react";
import StatCardCareer from "../../molecules/StatCard/StatCardCareer";
import CareerCard from "../../molecules/CareerCard/CareerCard";
import Button from "../../atoms/Button/Button";
import { CAREERS } from "../../../data/career";
import FilterBarCareer from "../../molecules/FilterBar/FilterBarCareer";

function CareerGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [activeTab, setActiveTab] = useState("All Roles");

  const availableLocations = useMemo(() => {
    const locs = new Set(CAREERS.map((c) => c.location));
    return Array.from(locs).sort();
  }, []);

  const roleCounts = useMemo(() => {
    return {
      all: CAREERS.length,
      fullTime: CAREERS.filter((c) => c.type === "Full-time").length,
      internship: CAREERS.filter((c) => c.type === "Internship").length,
      contract: CAREERS.filter((c) => c.type === "Contract").length,
    };
  }, []);

  const filteredCareers = useMemo(() => {
    return CAREERS.filter((career) => {
      const matchSearch =
        career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchLocation =
        location === "All Locations" || career.location === location;

      const matchTab = activeTab === "All Roles" || career.type === activeTab;

      return matchSearch && matchLocation && matchTab;
    });
  }, [searchQuery, location, activeTab]);

  const uniqueCompanies = useMemo(
    () => new Set(CAREERS.map((c) => c.company)).size,
    [],
  );

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4B5B98]">
            <span>CAREER HUB</span>
            <span className="h-1 w-1 rounded-full bg-[#757683]"></span>
            <span>Talent Placement Portal</span>
          </div>
          <h1 className="mt-1 text-3xl font-bold text-primary">
            Master Career List
          </h1>
          <p className="mt-2 text-sm text-[#444651]">
            Browse, manage, and connect students to verified career
            opportunities
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#0B1B4D] hover:bg-slate-50">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <Button className="flex items-center gap-2 bg-button px-4 py-2 text-sm hover:bg-button/85">
            <Plus className="h-4 w-4" />
            Post New Career
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCardCareer
          title="ACTIVE VACANCIES"
          value={CAREERS.length}
          icon={<Briefcase className="h-5 w-5" />}
        />
        <StatCardCareer
          title="PARTNER COMPANIES"
          value={uniqueCompanies}
          icon={<Building2 className="h-5 w-5" />}
        />
        <StatCardCareer
          title="STUDENTS PLACED"
          value={142}
          icon={<Users className="h-5 w-5" />}
        />
        <StatCardCareer
          title="AVERAGE STIPEND"
          value="$420 /mo"
          icon={<Banknote className="h-5 w-5" />}
        />
      </div>

      <FilterBarCareer
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        location={location}
        onLocationChange={setLocation}
        availableLocations={availableLocations}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        roleCounts={roleCounts}
      />

      {filteredCareers.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white py-20 text-center shadow-sm">
          <p className="text-slate-500">
            No career opportunities found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-4">
        <p className="text-xs text-slate-500">
          Showing <span className="font-semibold text-[#0B1B4D]">1</span> to{" "}
          <span className="font-semibold text-[#0B1B4D]">
            {filteredCareers.length}
          </span>{" "}
          of <span className="font-semibold text-[#0B1B4D]">24</span> entries
        </p>
        <div className="flex items-center gap-1 text-sm">
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100">
            &lt;
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0B1B4D] font-medium text-white">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100">
            2
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100">
            3
          </button>
          <span className="flex h-8 w-8 items-center justify-center text-slate-400">
            ...
          </span>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CareerGrid;
