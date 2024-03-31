import { useEffect, useState } from "react";
import axios from "axios";

const AdminInstructor = () => {
  const [instructors, setInstructors] = useState();
  useEffect(() => {
    const getAllInstructors = async () => {
      const res = await axios.get("http://localhost:3000/admin/instructors");
      console.log(res);
      const data = await res.data;
      console.log(data.instructors);
      setInstructors(data.instructors);
    };
    getAllInstructors();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor, index) => (
            <tr key={index}>
              <th>{index}</th>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminInstructor;
