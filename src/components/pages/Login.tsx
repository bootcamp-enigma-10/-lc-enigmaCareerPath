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
    console.log(`berhasil submit email : ${data.email} dan password : ${data.password}`);
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
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-white text-sm">{errors.email?.message}</p>}
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
          className="border p-2 w-full"
        />
        {errors.password && <p className="text-white text-sm">{errors.password?.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-yellow-300">
        Login
      </button>
    </form>
  );
}

export default Login;
