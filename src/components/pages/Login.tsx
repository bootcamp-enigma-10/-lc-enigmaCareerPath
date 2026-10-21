import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email("the email format is wrong"),
  password: z.string().min(8, "the minimum password length is 8"),
});

type FormValues = z.infer<typeof loginSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(`berhasil submit email : ${data.email} dan password : ${data.password}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-amber-700 flex-col w-3xl m-auto">
      {/* email */}
      <div>
        <input type="text" {...register("email")} placeholder="email" className="border p-2 w-full" />
        {errors.email && <p className="text-white text-sm">{errors.email?.message}</p>}
      </div>
      {/* password */}
      <div>
        <input type="text" {...register("password")} placeholder="password" className="border p-2 w-full" />
        {errors.password && <p className="text-white text-sm">{errors.password?.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-yellow-300">
        Login
      </button>
    </form>
  );
}

export default Login;
