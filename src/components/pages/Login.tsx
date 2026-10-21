import { useForm, type SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data : " + data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-amber-700 flex-col w-3xl m-auto">
      {/* email */}
      <div>
        <input
          type="text"
          {...register("email", {
            required: "the email field is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "the email format is wrong" },
          })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email?.message}</p>}
      </div>
      {/* password */}
      <div>
        <input
          type="text"
          {...register("password", {
            required: "the password field is required",
            minLength: { value: 8, message: "the minimum password length is 8" },
          })}
          placeholder="password"
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-yellow-300">
        Login
      </button>
    </form>
  );
}

export default Login;
