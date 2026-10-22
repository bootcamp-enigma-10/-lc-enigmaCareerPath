import { useState, useMemo } from "react";
import { Users, Award, Filter, Download } from "lucide-react";
import StatCardStudent from "../../molecules/StatCard/StatCardStudent";
import Badge from "../../atoms/Badge/Badge";
import Button from "../../atoms/Button/Button";
import FilterBarStudent from "../../molecules/FilterBar/FilterBarStudent";
import StudentTable from "./StudentTable";
import { STUDENTS } from "../../../data/students";

function StudentGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("All Departments / Majors");
  const [year, setYear] = useState("All Years");

  const filteredStudents = useMemo(() => {
    return STUDENTS.filter((student) => {
      const matchSearch =
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDept =
        department === "All Departments / Majors" ||
        student.major === department;
      const matchYear = year === "All Years" || student.academicYear === year;

      return matchSearch && matchDept && matchYear;
    });
  }, [searchQuery, department, year]);

  const averageGpa = useMemo(() => {
    if (filteredStudents.length === 0) return "0.00";
    const total = filteredStudents.reduce((acc, curr) => acc + curr.gpa, 0);
    return (total / filteredStudents.length).toFixed(2);
  }, [filteredStudents]);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span>Academic Directory</span>
            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
            <span>Batch 2024 / 2025</span>
          </div>
          <h1 className="mt-1 text-3xl font-bold text-[#0B1B4D]">
            Master Student List
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage, track and view all registered students across departments.
            Review cumulative GPAs, academic standing, and cohort assignments.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#0B1B4D] hover:bg-slate-50">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <Button className="flex items-center gap-2 bg-[#233D90] px-4 py-2 text-sm">
            + Add New Student
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCardStudent
          title="Total Students"
          value={filteredStudents.length.toString()}
          badge={<Badge variant="primary">Active Cohort</Badge>}
          icon={<Users className="h-6 w-6" />}
          footerLeft={
            <>
              ↗ <span className="font-bold text-[#0B1B4D]">+12%</span> from
              previous semester
            </>
          }
          footerRight="4 Faculties"
        />
        <StatCardStudent
          title="Average GPA"
          value={averageGpa}
          badge={<Badge variant="warning">Top Tier Standing</Badge>}
          icon={<Award className="h-6 w-6 text-[#8C3D1C]" />}
          footerLeft={
            <span className="text-[#8C3D1C]">
              ✓ <span className="font-bold">89%</span> above 3.50 target
            </span>
          }
          footerRight="Scale: 4.00"
        />
        <StatCardStudent
          title="Search Results"
          value={filteredStudents.length.toString()}
          badge={<Badge variant="neutral">Active Query</Badge>}
          icon={<Filter className="h-6 w-6" />}
          footerLeft={
            <span className="text-slate-500">
              Filtered from {STUDENTS.length} total directory
            </span>
          }
          footerRight={
            <button
              onClick={() => {
                setSearchQuery("");
                setDepartment("All Departments / Majors");
                setYear("All Years");
              }}
              className="font-bold text-[#233D90] hover:underline"
            >
              Reset All
            </button>
          }
        />
      </div>

      <FilterBarStudent
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        department={department}
        onDepartmentChange={setDepartment}
        year={year}
        onYearChange={setYear}
      />

      <StudentTable
        students={filteredStudents}
        totalStudents={STUDENTS.length}
      />
    </div>
  );
}

export default StudentGrid;
