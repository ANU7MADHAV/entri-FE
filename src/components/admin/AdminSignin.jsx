import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    username: yup.string().required().email(),
    password: yup.string().required().min(3),
  })
  .required();

const AdminSignin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/admin/signin", data);

      if (res.data.token) {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 rounded-md border p-6"
      >
        <input
          placeholder="email"
          type="email"
          {...register("username", { required: true, maxLength: 20 })}
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

export default AdminSignin;
