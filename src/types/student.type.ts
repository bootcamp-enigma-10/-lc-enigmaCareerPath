export interface Student {
  id: string;
  name: string;
  email: string;
  major: string;
  academicYear: string;
  gpa: number;
  status: "Active" | "Inactive" | "Graduated";
  campus: string;
}
