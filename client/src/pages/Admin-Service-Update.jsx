import { useEffect, useState} from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"
import { useParams } from "react-router-dom";


export const AdminServiceUpdate = () => {

    const params = useParams();

    const [service, setService] = useState({
        service:"",
        description:"",
        price:"",
        provider:""
    } 
    );

    const { authorizationToken } = useAuth();

    const getSingleServiceData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/services/${params.id}`, {
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                }
            });

            const data = await response.json();
            setService(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getSingleServiceData();
    }, [params.id])
    


    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setService({
            ...service,

            [name]:value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/services/update/${params.id}`,
            {
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json",
                    Authorization:authorizationToken,
                },   
                body: JSON.stringify(service),             
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
              <h1 className="main-heading">Update Service Data</h1>
            </div>
            {/* contact page main  */}
            <div className="container grid grid-two-cols">
    
              {/* contact form content actual  */}
              <section className="section-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="service">Service</label>
                    <input
                      type="text"
                      name="service"
                      placeholder="Service"
                      id="service"
                      autoComplete="off"
                      value={service.service}
                      onChange={handleInput}
                    />
                  </div>
    
                  <div>
                    <label htmlFor="description">description</label>
                    <input
                      type="text"
                      placeholder="description"
                      name="description"
                      id="description"
                      autoComplete="off"
                      value={service.description}
                      onChange={handleInput}
                    />
                  </div>
    

                  <div>
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      placeholder="price"
                      name="price"
                      id="price"
                      autoComplete="off"
                      value={service.price}
                      onChange={handleInput}
                    />
                  </div>


                  <div>
                    <label htmlFor="provider">Provider</label>
                    <input
                      type="text"
                      placeholder="provider"
                      name="provider"
                      id="provider"
                      autoComplete="off"
                      value={service.provider}
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
