import type { LabelHTMLAttributes } from "react";

function Label({ className = "", ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`mb-2 inline-block text-sm font-medium text-slate-900 ${className}`} {...props} />;
}

export default Label;
