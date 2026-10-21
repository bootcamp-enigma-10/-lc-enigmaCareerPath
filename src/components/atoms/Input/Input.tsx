import type { InputHTMLAttributes } from "react";

function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${className}`} {...props} />;
}

export default Input;
