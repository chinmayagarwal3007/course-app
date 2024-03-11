import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const {authorizationToken} = useAuth();

    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });

            const data = await response.json();
            setContacts(data);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      getAllContacts()
    }, [])

    
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
                    <th>Updatae</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{contacts.map((currUser, index) => {
                    return <tr key={index}>
                        <td>{currUser.username}</td>
                        <td>{currUser.email}</td>
                        <td>{currUser.message}</td>
                        <td>edit</td>
                        <td><button></button></td>
                    </tr>
                })}</tbody>
              </table>
            </div>
          </section>
        </>
      );        

}
