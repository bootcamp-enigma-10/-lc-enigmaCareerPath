import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Student } from "../../../types/student.type";
import Modal from "../../molecules/Modal/Modal";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/Button/Button";

interface StudentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddStudent: (student: Student) => void;
}

type StudentFormInputs = Omit<Student, "id">;

function StudentFormModal({
  isOpen,
  onClose,
  onAddStudent,
}: StudentFormModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormInputs>({
    defaultValues: {
      status: "Active",
      gpa: 0,
    },
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setFocus("name"), 100);
    } else {
      reset();
    }
  }, [isOpen, setFocus, reset]);

  const onSubmit: SubmitHandler<StudentFormInputs> = async (data) => {
    console.log("📝 Data Form Mentah:", data);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newStudent: Student = {
      ...data,
      id: `ENG-${Math.floor(100 + Math.random() * 900)}`,
      gpa: Number(data.gpa),
      academicYear: `Year ${data.academicYear}`,
    };

    console.log("Data Final (Siap Masuk Tabel):", newStudent);

    onAddStudent(newStudent);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Register New Student">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            id="name"
            label="FULL NAME"
            type="text"
            placeholder="e.g. John Doe"
            error={errors.name?.message}
            {...register("name", { required: "Name is required" })}
          />
          <FormField
            id="email"
            label="EMAIL ADDRESS"
            type="email"
            placeholder="john.doe@enigma.edu"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@enigma\.edu$/,
                message: "Email must end with @enigma.edu",
              },
            })}
          />

          <div>
            <FormField
              id="major"
              label="MAJOR / DEPARTMENT"
              type="text"
              list="major-options"
              placeholder="e.g. Computer Science"
              error={errors.major?.message}
              {...register("major", { required: "Major is required" })}
            />
            <datalist id="major-options">
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
              list="year-options"
              placeholder="e.g. Year 1"
              error={errors.academicYear?.message}
              {...register("academicYear", {
                required: "Academic Year is required",
              })}
            />
            <datalist id="year-options">
              <option value="Year 1" />
              <option value="Year 2" />
              <option value="Year 3" />
              <option value="Year 4" />
            </datalist>
          </div>

          <FormField
            id="gpa"
            label="INITIAL GPA"
            type="number"
            step="0.01"
            placeholder="0.00"
            error={errors.gpa?.message}
            {...register("gpa", {
              required: "GPA is required",
              min: { value: 0, message: "Min 0.00" },
              max: { value: 4, message: "Max 4.00" },
            })}
          />

          <FormField
            id="campus"
            label="CAMPUS LOCATION"
            type="text"
            placeholder="e.g. Jakarta"
            error={errors.campus?.message}
            {...register("campus", { required: "Campus is required" })}
          />
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
            {isSubmitting ? "Saving..." : "Save Student"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default StudentFormModal;
