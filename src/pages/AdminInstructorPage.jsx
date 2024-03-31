import AdminInstructor from "../components/admin/AdminInstructor";
import AdminNavbar from "../components/admin/AdminNavbar";

const AdminInstructorPage = () => {
  return (
    <div>
      <nav>
        <AdminNavbar />
      </nav>
      <main>
        <AdminInstructor />
      </main>
    </div>
  );
};

export default AdminInstructorPage;
