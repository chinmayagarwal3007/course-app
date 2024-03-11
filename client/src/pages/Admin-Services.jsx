import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminServices = () => {
  const [services, setServices] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/services", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/services/deleteService/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        }
      })

      const data = await response.json();
      toast.success(data.msg);
    } catch (error) {
      toast.error("Service cannot be deleted!!");
    }
  }

  useEffect(() => {
    getAllServices();
  }, [services]);

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
                <th>Service</th>
                <th>Description</th>
                <th>Price</th>
                <th>Provider</th>
                <th>Updatae</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {services.map((currService, index) => {
                return (
                  <tr key={index}>
                    <td>{currService.service}</td>
                    <td>{currService.description}</td>
                    <td>{currService.price}</td>
                    <td>{currService.provider}</td>
                    <td>
                      <button
                        className="admin-buttons"
                        onClick={() => editService(currService._id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="admin-buttons"
                        onClick={() => deleteService(currService._id)}
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
