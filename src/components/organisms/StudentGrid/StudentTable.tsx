import { Eye, Pencil, Trash, Star, ArrowDownIcon } from "lucide-react";
import Badge from "../../atoms/Badge/Badge";
import type { Student } from "../../../types/student.type";

interface StudentTableProps {
  students: Student[];
  totalStudents: number;
  onViewDetail: (student: Student) => void;
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}

function StudentTable({
  students,
  totalStudents,
  onViewDetail,
  onEdit,
  onDelete,
}: StudentTableProps) {
  const getInitial = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const getInitialBg = (index: number) => {
    const colors = [
      "bg-[#233D90] text-white",
      "bg-[#A6B4F4] text-[#233D90]",
      "bg-slate-200 text-slate-700",
      "bg-[#F4D2C3] text-[#8C3D1C]",
      "bg-slate-200 text-slate-700",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-[#0B1B4D]">Enrolled Candidates</h3>
          <Badge variant="primary">{students.length} Listed</Badge>
        </div>
        <span className="cursor-pointer text-xs font-medium text-slate-500 hover:text-[#0B1B4D]">
          Sort: <span className="text-[#0B1B4D]">ID Ascending</span>
          <ArrowDownIcon className="ml-1 inline-block h-3.5 w-3.5 fill-[#0B1B4D] text-[#0B1B4D]" />
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-[#4F64A6]">
            <tr>
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">Student Name</th>
              <th className="px-6 py-4 font-medium">Major / Department</th>
              <th className="px-6 py-4 font-medium">Academic Year</th>
              <th className="px-6 py-4 font-medium">GPA Rating</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-10 text-center text-slate-500">
                  No students found matching your criteria.
                </td>
              </tr>
            ) : (
              students.map((student, index) => {
                const displayId = student.id.replace("ENG-", "");
                const isTopGpa = student.gpa >= 4.0;

                return (
                  <tr
                    key={student.id}
                    className="transition-colors hover:bg-slate-50"
                  >
                    <td className="px-6 py-4 font-medium text-[#4F64A6]">
                      {displayId}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${getInitialBg(index)}`}
                        >
                          {getInitial(student.name)}
                        </div>
                        <div>
                          <p className="font-semibold text-[#0B1B4D]">
                            {student.name}{" "}
                            {isTopGpa && (
                              <Star className="ml-1 inline-block h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                            )}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {student.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#233D90]"></span>
                        {student.major}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="neutral">{student.academicYear}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${isTopGpa ? "bg-[#F4D2C3] text-[#8C3D1C]" : "bg-slate-100 text-[#0B1B4D]"}`}
                      >
                        {isTopGpa ? (
                          <Star className="h-3 w-3 fill-[#8C3D1C]" />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#233D90]"></span>
                        )}
                        {student.gpa.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="primary">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#233D90]"></span>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3 text-slate-400">
                        <button
                          onClick={() => onViewDetail(student)}
                          className="transition-colors hover:text-[#233D90]"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => onEdit(student)}
                          className="transition-colors hover:text-orange-500"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => onDelete(student)}
                          className="transition-colors hover:text-red-600"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 p-5">
        <p className="text-xs text-slate-500">
          Showing{" "}
          <span className="font-semibold text-[#0B1B4D]">
            {students.length > 0 ? 1 : 0}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-[#0B1B4D]">
            {students.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-[#0B1B4D]">{totalStudents}</span>{" "}
          entries
        </p>
        <div className="flex items-center gap-1 text-sm">
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100">
            &lt;
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-[#233D90] font-medium text-white">
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
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100">
            32
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
