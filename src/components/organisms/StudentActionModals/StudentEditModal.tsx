import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Student } from "../../../types/student.type";
import Modal from "../../molecules/Modal/Modal";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";

interface StudentEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveEdit: (updatedStudent: Student) => void;
  student: Student | null;
}

function StudentEditModal({
  isOpen,
  onClose,
  onSaveEdit,
  student,
}: StudentEditModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Student>({
    defaultValues: student || undefined,
  });

  useEffect(() => {
    if (student && isOpen) {
      reset(student);
    }
  }, [student, isOpen, reset]);

  const onSubmit: SubmitHandler<Student> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const updatedStudent: Student = {
      ...data,
      gpa: Number(data.gpa),
      academicYear: `Year ${data.academicYear}`,
    };

    onSaveEdit(updatedStudent);
    onClose();
  };

  if (!student) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Student Data">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            id="name"
            label="FULL NAME"
            type="text"
            error={errors.name?.message}
            {...register("name", { required: "Name is required" })}
          />
          <FormField
            id="email"
            label="EMAIL ADDRESS"
            type="email"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@enigma\.edu$/,
                message: "Must end with @enigma.edu",
              },
            })}
          />

          <div>
            <FormField
              id="major"
              label="MAJOR / DEPARTMENT"
              type="text"
              list="edit-major-options"
              error={errors.major?.message}
              {...register("major", { required: "Major is required" })}
            />
            <datalist id="edit-major-options">
              <option value="Computer Science" />
              <option value="Electrical Engineering" />
              <option value="Business Administration" />
              <option value="Mathematics" />
            </datalist>
          </div>

          <div>
            <FormField
              id="academicYear"
              label="ACADEMIC YEAR"
              type="text"
              list="edit-year-options"
              error={errors.academicYear?.message}
              {...register("academicYear", {
                required: "Academic Year is required",
              })}
            />
            <datalist id="edit-year-options">
              <option value="Year 1" />
              <option value="Year 2" />
              <option value="Year 3" />
              <option value="Year 4" />
            </datalist>
          </div>

          <FormField
            id="gpa"
            label="CUMULATIVE GPA"
            type="number"
            step="0.01"
            error={errors.gpa?.message}
            {...register("gpa", {
              required: "GPA is required",
              min: { value: 0, message: "Min 0.00" },
              max: { value: 4, message: "Max 4.00" },
            })}
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold tracking-wider text-slate-500">
              STATUS <span className="text-red-500">*</span>
            </label>
            <select
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#233D90] focus:ring-2 focus:ring-[#233D90]/20"
              {...register("status", { required: "Status is required" })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Graduated">Graduated</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
          >
            Cancel
          </button>
          <Button type="submit" disabled={isSubmitting} className="px-6">
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default StudentEditModal;
