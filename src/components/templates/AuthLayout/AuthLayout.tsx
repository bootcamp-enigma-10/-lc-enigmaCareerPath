import type { ReactNode } from "react";
interface AuthLayoutProps {
  children: ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">{children}</div>
    </main>
  );
}
export default AuthLayout;
