import { useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/admin/AdminNavbar";

const AdminInstructorAdd = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <div>
      <nav>
        <AdminNavbar />
      </nav>
      <main className="flex h-screen  flex-col items-center justify-center">
        <div className="rounded-md border p-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <button
            onClick={async () => {
              const res = await axios.post(
                "http://localhost:3000/admin/instructor",
                {
                  name: name,
                  email: email,
                },
              );
              console.log(res);
              alert(res);
            }}
            className="my-3 rounded-md bg-blue-400 px-4 py-2 text-center"
          >
            Add
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminInstructorAdd;
