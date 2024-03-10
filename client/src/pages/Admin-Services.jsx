import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";

export const AdminServices = () => {
    const [services, setServices] = useState([]);
    const {authorizationToken} = useAuth();

    const getAllServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/services", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });

            const data = await response.json();
            setServices(data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
      
        getAllServices();
    
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
                    <th>Service</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Provider</th>
                    <th>Updatae</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{services.map((currUser, index) => {
                    return <tr key={index}>
                        <td>{currUser.service}</td>
                        <td>{currUser.description}</td>
                        <td>{currUser.price}</td>
                        <td>{currUser.provider}</td>
                        <td>edit</td>
                        <td>delete</td>
                    </tr>
                })}</tbody>
              </table>
            </div>
          </section>
        </>
      );        
}