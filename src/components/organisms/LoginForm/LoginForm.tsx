import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { USERS } from "../../../data/users";
import type { User } from "../../../types/user.type";
import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";
import CardAuth from "../../atoms/Card/CardAuth";

interface LoginFormProps {
  onLogin: () => void;
  onNavigateRegister: () => void;
}

function LoginForm({ onLogin, onNavigateRegister }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<User>();

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  const onSubmit: SubmitHandler<User> = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const registeredUsers = JSON.parse(
      localStorage.getItem("mockDB_users") || "[]",
    );

    const allUsers = [...USERS, ...registeredUsers];

    const found = allUsers.find(
      (user) =>
        user.username === value.username && user.password === value.password,
    );

    if (!found) {
      setError("password", { message: "Invalid username or password" });
      setFocus("password");
      return;
    }

    localStorage.setItem("activeUser", found.username);
    onLogin();
  };

  return (
    <CardAuth>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary">Sign In</h2>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          Enter your administrator credentials to access the management portal.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          id="username"
          label={
            <>
              EMAIL OR USERNAME <span className="text-red-500">*</span>
            </>
          }
          type="text"
          autoComplete="username"
          placeholder="admin@enigma.edu or username"
          error={errors.username?.message}
          {...register("username", { required: "Username is required" })}
        />

        <FormField
          id="password"
          label={
            <>
              PASSWORD <span className="text-red-500">*</span>
            </>
          }
          labelRight={
            <span className="text-primary hover:underline cursor-pointer">
              Forgot password?
            </span>
          }
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />

        <div className="flex items-center gap-2 pt-1 pb-2">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
          />
          <label
            htmlFor="remember"
            className="text-sm text-slate-600 cursor-pointer"
          >
            Remember this device for 30 days
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 text-[15px] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Authenticating..." : "Sign In to Dashboard →"}
        </Button>
      </form>

      <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
        <p className="mb-4">
          Having trouble signing in?{" "}
          <span className="font-semibold text-primary cursor-pointer hover:underline">
            Contact Enigma Camp IT Support
          </span>
        </p>
        <p className="text-xs">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onNavigateRegister}
            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Sign Up here
          </button>
        </p>
      </div>
    </CardAuth>
  );
}

export default LoginForm;
