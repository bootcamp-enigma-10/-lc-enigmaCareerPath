import { useForm, type SubmitHandler } from "react-hook-form";
import { USERS } from "../../../data/users";
import type { User } from "../../../types/user.type";
import Button from "../../atoms/Button/Button";
import FormField from "../../molecules/FormField/FormField";

interface LoginFormProps {
  onLogin: () => void;
}

function LoginForm({ onLogin }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (value) => {
    const found = USERS.find((user) => user.username === value.username && user.password === value.password);
    if (!found) {
      setError("password", { message: "Invalid username or password" });
      return;
    }
    onLogin();
  };
  return (
    <form className="mt-10 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField id="username" label="Username" type="text" autoComplete="username" placeholder="admin" error={errors.username?.message} {...register("username", { required: "Username is required" })} />
      <FormField id="password" label="Password" type="password" autoComplete="current-password" placeholder="••••••••" error={errors.password?.message} {...register("password", { required: "Password is required" })} />
      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
