import {
  MapPin,
  DollarSign,
  Clock,
  Code2,
  Building2,
  BarChart2,
  PenTool,
  Rocket,
  Server,
  Smartphone,
} from "lucide-react";
import Badge from "../../atoms/Badge/Badge";
import Button from "../../atoms/Button/Button";
import type { Career } from "../../../types/career.type";

interface CareerCardProps {
  career: Career;
}

function CareerCard({ career }: CareerCardProps) {
  const getTypeVariant = (type: string) => {
    switch (type) {
      case "Full-time":
        return "primary";
      case "Internship":
        return "warning";
      case "Contract":
        return "neutral";
      default:
        return "neutral";
    }
  };

  const getDynamicIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("data")) {
      return {
        icon: <BarChart2 className="h-5 w-5" />,
        bg: "bg-[#DCE1FF] text-primary",
      };
    }
    if (titleLower.includes("designer") || titleLower.includes("ui/ux")) {
      return {
        icon: <PenTool className="h-5 w-5" />,
        bg: "bg-[#E6E8EA] text-primary",
      };
    }
    if (titleLower.includes("product")) {
      return {
        icon: <Rocket className="h-5 w-5" />,
        bg: "bg-[#DCE1FF] text-primary",
      };
    }
    if (titleLower.includes("devops")) {
      return {
        icon: <Server className="h-5 w-5" />,
        bg: "bg-[#DCE1FF] text-primary",
      };
    }
    if (titleLower.includes("mobile")) {
      return {
        icon: <Smartphone className="h-5 w-5" />,
        bg: "bg-[#FFDBCD] text-[#772B00]",
      };
    }
    return {
      icon: <Code2 className="h-5 w-5" />,
      bg: "bg-[#F5F7FF] text-[#233D90]",
    };
  };

  const { icon, bg } = getDynamicIcon(career.title);

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg}`}
          >
            {icon}
          </div>
          <Badge variant={getTypeVariant(career.type)}>{career.type}</Badge>
        </div>

        <h4 className="text-lg font-bold text-[#002479]">{career.title}</h4>
        <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#444651]">
          <Building2 className="h-3.5 w-3.5" />
          <span className="text-primary">{career.company}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
          <span>{career.companyType}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-lg bg-[#ECEEF0] p-3 text-xs font-medium text-slate-600 sm:text-sm">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-red-500" />
            <span>
              {career.location}{" "}
              {career.locationType !== "Remote" && (
                <span className="text-slate-400">({career.locationType})</span>
              )}
            </span>
          </div>
          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
          <div className="flex items-center gap-1.5">
            <DollarSign className="h-4 w-4 text-[#8C3D1C]" />
            <span className="text-[#002479]">{career.stipend}</span>
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-sm text-slate-600">
          {career.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {career.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-md bg-[#ECEEF0] px-2 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <Clock className="h-3.5 w-3.5" />
          {career.postedAt}
        </div>
        <Button className="bg-primary px-4 py-1.5 text-xs hover:bg-primary/85">
          Apply / View Details
        </Button>
      </div>
    </div>
  );
}

export default CareerCard;
