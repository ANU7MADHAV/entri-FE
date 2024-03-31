import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="flex justify-between px-12 py-4 shadow">
      <div>
        <h2 className="">Logo</h2>
      </div>
      <div className="flex gap-x-8 font-semibold  text-blue-500">
        <Link to="/admin/instructor">
          <h3 className="cursor-pointer hover:scale-110">Instructors</h3>
        </Link>

        <h3 className="cursor-pointer hover:scale-110">Courses</h3>
      </div>
      <div>
        <h1>Admin</h1>
      </div>
    </div>
  );
};

export default AdminNavbar;
