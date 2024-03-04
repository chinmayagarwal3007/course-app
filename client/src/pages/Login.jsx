import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const {storeTokenInLs} = useAuth();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,

      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Login successfull");

        const res_data = await response.json();
        storeTokenInLs(res_data.token);

        setUser({ email: "", password: "" });

        navigate("/");
      } else {
        alert("Invalid credential");
      }
    } catch (error) {
      console.log("Login err: ", error);
    }
  };

  return (
    <div>
      <div>
        <p>some image</p>
      </div>

      <div>
        <h1>Login Form</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              id="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleChange}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
