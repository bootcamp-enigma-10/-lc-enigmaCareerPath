import { useState } from "react";
import AuthLayout from "../../components/templates/AuthLayout/AuthLayout";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import RegisterForm from "../../components/organisms/RegisterForm/RegisterForm";
import type { User } from "../../types/user.type";
import { USERS } from "../../data/users";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [usersDb, setUsersDb] = useState<User[]>(USERS);

  const handleRegisterSuccess = (newUser: User) => {
    setUsersDb([...usersDb, newUser]);
    alert("Registration successful! Please sign in with your new account.");
    setIsRegisterPage(false);
  };

  return (
    <AuthLayout>
      {isRegisterPage ? (
        <RegisterForm
          onRegisterSuccess={handleRegisterSuccess}
          onSwitchToLogin={() => setIsRegisterPage(false)}
        />
      ) : (
        <LoginForm
          onLogin={onLoginSuccess}
          onNavigateRegister={() => setIsRegisterPage(true)}
        />
      )}

      <div className="mt-8 text-center text-[10px] text-slate-400">
        <p>© 2024 Enigma Camp. Hexa Web Student & Career Ecosystem.</p>
        <p className="mt-1 space-x-2">
          <span className="cursor-pointer hover:text-slate-600">
            Privacy Policy
          </span>
          <span>•</span>
          <span className="cursor-pointer hover:text-slate-600">
            Terms of Service
          </span>
          <span>•</span>
          <span className="cursor-pointer hover:text-slate-600">
            SLA & Security
          </span>
        </p>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
