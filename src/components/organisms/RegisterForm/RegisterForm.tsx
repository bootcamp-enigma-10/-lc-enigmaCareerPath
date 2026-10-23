import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { User } from "../../../types/user.type";
import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";
import CardAuth from "../../atoms/Card/CardAuth";

interface RegisterFormProps {
  onRegisterSuccess: (newUser: User) => void;
  onSwitchToLogin: () => void;
}

interface RegisterInputs extends User {
  confirmPassword?: string;
}

function RegisterForm({
  onRegisterSuccess,
  onSwitchToLogin,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInputs>();

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser: User = {
      id: Date.now(),
      username: data.username,
      password: data.password,
    };

    const existingUsers = JSON.parse(
      localStorage.getItem("mockDB_users") || "[]",
    );
    localStorage.setItem(
      "mockDB_users",
      JSON.stringify([...existingUsers, newUser]),
    );

    onRegisterSuccess(newUser);
  };

  return (
    <CardAuth>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#0B1B4D]">Sign Up</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          Register as a new administrator to manage the ecosystem.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          id="reg-username"
          label={
            <>
              USERNAME <span className="text-red-500">*</span>
            </>
          }
          type="text"
          autoComplete="username"
          placeholder="username"
          error={errors.username?.message}
          {...register("username", { required: "Username is required" })}
        />

        <FormField
          id="reg-password"
          label={
            <>
              PASSWORD <span className="text-red-500">*</span>
            </>
          }
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
        />

        <FormField
          id="confirmPassword"
          label={
            <>
              CONFIRM PASSWORD <span className="text-red-500">*</span>
            </>
          }
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Please confirm password",
            validate: (val) => {
              if (watch("password") != val) return "Passwords do not match";
            },
          })}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`mt-2 w-full py-3 text-[15px] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Creating Account..." : "Register Account →"}
        </Button>
      </form>

      <div className="mt-8 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
        <p>
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Sign In here
          </button>
        </p>
      </div>
    </CardAuth>
  );
}

export default RegisterForm;
