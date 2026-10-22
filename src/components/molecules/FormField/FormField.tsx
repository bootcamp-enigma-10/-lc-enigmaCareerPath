import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  labelRight?: ReactNode;
  error?: string;
}

function FormField({
  label,
  labelRight,
  error,
  id,
  type,
  ...props
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="mb-4 flex flex-col">
      <div className="mb-1 flex items-center justify-between">
        <Label
          htmlFor={id}
          className="mb-0! text-xs font-semibold uppercase tracking-wide text-slate-700"
        >
          {label}
        </Label>
        {labelRight && <div className="text-sm font-medium">{labelRight}</div>}
      </div>

      <div className="relative">
        <Input
          id={id}
          type={inputType}
          {...props}
          className={`${isPasswordType ? "pr-10" : ""} ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
              : ""
          }`}
        />
        {isPasswordType && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-primary focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>

      {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default FormField;
