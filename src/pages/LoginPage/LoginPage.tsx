import LoginForm from "../../components/organisms/LoginForm/LoginForm";

interface LoginPageProps {
  onLogin: () => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <section className="w-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h1 className="text-center text-3xl font-bold text-slate-900">Sign in</h1>
      <LoginForm onLogin={onLogin} />
    </section>
  );
}
export default LoginPage;
