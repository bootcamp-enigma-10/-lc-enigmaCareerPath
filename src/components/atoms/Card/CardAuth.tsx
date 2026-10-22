import type { HTMLAttributes } from "react";

function CardAuth({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="w-full max-w-md rounded-xl border border-border bg-surface p-10 shadow-lg shadow-primary/10"
      {...props}
    />
  );
}

export default CardAuth;
