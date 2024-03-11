import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/deleteContact/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        }
      })

      const data = await response.json();
      toast.success(data.msg);
    } catch (error) {
      toast.error("Message cannot be deleted!!");
    }
  }

  useEffect(() => {
    getAllContacts();
  }, [contacts]);

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
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((currContact, index) => {
                return (
                  <tr key={index}>
                    <td>{currContact.username}</td>
                    <td>{currContact.email}</td>
                    <td>{currContact.message}</td>
                    <td>
                      <button
                        className="admin-buttons"
                        onClick={() => deleteContact(currContact._id)}
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
