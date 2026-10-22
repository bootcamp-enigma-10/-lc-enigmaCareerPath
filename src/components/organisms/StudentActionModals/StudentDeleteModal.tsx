import type { Student } from "../../../types/student.type";
import Modal from "../../molecules/Modal/Modal";
import { AlertTriangle } from "lucide-react";

interface StudentDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: (id: string) => void;
  student: Student | null;
}

function StudentDeleteModal({
  isOpen,
  onClose,
  onConfirmDelete,
  student,
}: StudentDeleteModalProps) {
  if (!student) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Deletion">
      <div className="flex flex-col items-center p-4 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertTriangle className="h-7 w-7" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-slate-900">
          Delete Student Record?
        </h3>
        <p className="text-sm text-slate-500">
          Are you sure you want to delete{" "}
          <span className="font-bold text-slate-900">{student.name}</span> (
          {student.id})? This action cannot be undone and will permanently
          remove their data from the system.
        </p>

        <div className="mt-8 flex w-full gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg bg-slate-100 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirmDelete(student.id);
              onClose();
            }}
            className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            Yes, Delete Student
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default StudentDeleteModal;
