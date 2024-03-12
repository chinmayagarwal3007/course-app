import { useEffect, useState} from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"
import { useParams } from "react-router-dom";

export const AdminUserUpdate = () => {

    const params = useParams();

    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
    } 
    );

    const { authorizationToken } = useAuth();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                }
            });

            const data = await response.json();
            setUser(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getSingleUserData();
    }, [params.id])
    


    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,

            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,
            {
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json",
                    Authorization:authorizationToken,
                },   
                body: JSON.stringify(user),             
            });
            if(response.ok) {
                toast.success("Updated Successfully!!");
            }
            else{
                toast.error("Updation Failed!!");
            }
        } catch (error) {
            console.log(error);
        }
    }
    
      return (
        <>
          <section className="section-contact">
            <div className="contact-content container">
              <h1 className="main-heading">Update User Data</h1>
            </div>
            {/* contact page main  */}
            <div className="container grid grid-two-cols">
    
              {/* contact form content actual  */}
              <section className="section-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
    
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
    

                  <div>
                    <label htmlFor="phone">Mobile no.</label>
                    <input
                      type="text"
                      placeholder="mobile no."
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

    
                  <div>
                    <button type="submit">Update</button>
                  </div>
                </form>
              </section>
            </div>
    
          </section>
        </>
      );
}
