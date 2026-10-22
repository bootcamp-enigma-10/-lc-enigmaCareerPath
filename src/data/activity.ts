import { createElement } from "react";
import { GraduationCap, Briefcase, Send, CheckCircle2, Star } from "lucide-react";
import type { Activity } from "../types/activity.type";

export const RECENT_ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "New student registered",
    description: "John Doe joined the Computer Science program",
    time: "2 hours ago",
    icon: createElement(GraduationCap, { className: "h-5 w-5 text-[#233D90]" }),
    bgClass: "bg-[#DBEAFE]",
  },
  {
    id: 2,
    title: "New career opportunity posted",
    description: "Software Engineer position at TechCorp",
    time: "5 hours ago",
    icon: createElement(Briefcase, { className: "h-5 w-5 text-[#FF6B18]" }),
    bgClass: "bg-[#FFEDD5]",
  },
  {
    id: 3,
    title: "Candidate application submitted",
    description: "Alice Johnson applied for Data Analyst at DataHub",
    time: "8 hours ago",
    icon: createElement(Send, { className: "h-5 w-5 text-[#4F64A6]" }),
    bgClass: "bg-[#E0E7FF]",
  },
  {
    id: 4,
    title: "System update completed",
    description: "All core services and sync engines running smoothly",
    time: "1 day ago",
    icon: createElement(CheckCircle2, { className: "h-5 w-5 text-[#047857]" }),
    bgClass: "bg-[#D1FAE5]",
  },
  {
    id: 5,
    title: "Academic sprint evaluation finalized",
    description: "Cohort 4 mid-term benchmarks published",
    time: "2 days ago",
    icon: createElement(Star, { className: "h-5 w-5 text-[#B45309]" }),
    bgClass: "bg-[#FEF3C7]",
  },
];