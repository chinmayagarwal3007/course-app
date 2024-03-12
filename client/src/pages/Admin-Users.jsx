import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import {Link} from "react-router-dom"

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();


  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/deleteUser/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      if (data.msg === "User deleted Successfully!!") {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error("User cannot be deleted!!");
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [users]);

  return (
    <>
      <section className="admin-users-section">
        <div className="admin-container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="admin-container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Admin</th>
                <th>Updatae</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currUser, index) => {
                return (
                  <tr key={index}>
                    <td>{currUser.username}</td>
                    <td>{currUser.email}</td>
                    <td>{currUser.phone}</td>
                    <td>{currUser.isAdmin ? "Yes" : "No"}</td>
                    <td >
                      <Link className="admin-buttons" to={`/admin/users/${currUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button
                        className="admin-buttons"
                        onClick={() => deleteUser(currUser._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
