import type { Student } from "../../../types/student.type";
import Modal from "../../molecules/Modal/Modal";
import Badge from "../../atoms/Badge/Badge";
import {
  BookOpen,
  Calendar,
  MapPin,
  Hash,
  Star,
} from "lucide-react";

interface StudentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
}

function StudentDetailModal({
  isOpen,
  onClose,
  student,
}: StudentDetailModalProps) {
  if (!student) return null;

  const isTopGpa = student.gpa >= 3.5;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Student Profile Details">
      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#233D90] text-xl font-bold text-white">
            {student.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0B1B4D]">{student.name}</h3>
            <p className="text-sm text-slate-500">{student.email}</p>
          </div>
          <div className="ml-auto">
            <Badge variant="primary">{student.status}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                <Hash className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400">
                  STUDENT ID
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {student.id}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400">
                  MAJOR / DEPARTMENT
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {student.major}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400">
                  ACADEMIC YEAR
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {student.academicYear}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                <Star
                  className={`h-4 w-4 ${isTopGpa ? "text-orange-500" : ""}`}
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400">
                  CUMULATIVE GPA
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {student.gpa.toFixed(2)} / 4.00
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400">
                  CAMPUS LOCATION
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {student.campus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-slate-100 pt-6">
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-100 px-6 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default StudentDetailModal;
