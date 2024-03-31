import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    username: yup.string().required().email(),
    password: yup.string().required().min(3),
  })
  .required();

const Signup = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 rounded-md border p-6"
      >
        <input
          placeholder="first name"
          type="text"
          {...register("firstName", { required: true, maxLength: 20 })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <input
          placeholder="last name"
          type="text"
          {...register("lastName", { required: true, maxLength: 20 })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <input
          placeholder="email"
          type="email"
          {...register("email", { required: true, maxLength: 20 })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <input
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <input type="submit" className="rounded-md bg-blue-500 py-1" />
      </form>
    </div>
  );
};

export default Signup;
