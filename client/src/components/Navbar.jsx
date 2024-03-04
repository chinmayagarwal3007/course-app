import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="container">
      <div className="logo">
        <h3>CoursesApp</h3>
      </div>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/service">Services</NavLink>
        {isLoggedIn ? (
          <NavLink to="/logout">Logout</NavLink>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">SignUp</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
