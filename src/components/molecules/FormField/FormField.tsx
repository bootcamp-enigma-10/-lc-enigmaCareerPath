import type { InputHTMLAttributes } from "react";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function FormField({ id, label, error, ...inputProps }: FormFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} {...inputProps} />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default FormField;
