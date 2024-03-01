import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div>
        <h3>CoursesApp</h3>
      </div>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/service">Services</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">SignUp</NavLink>
      </div>
    </div>
  )
}

export default Navbar;