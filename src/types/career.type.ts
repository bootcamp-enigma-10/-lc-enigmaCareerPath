export interface Career {
  id: string;
  title: string;
  company: string;
  companyType: string;
  location: string;
  locationType: "On-site" | "Hybrid" | "Remote";
  type: "Full-time" | "Internship" | "Contract";
  stipend: string;
  description: string;
  techStack: string[];
  postedAt: string;
  applicantsCount?: number;
}
