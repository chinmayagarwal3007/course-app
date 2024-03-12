import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";


export const AdminLayout = () => {

  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  if(isLoading){
    return <h1>Loading.....</h1>
  }

  if (!user.isAdmin) {
    navigate("/error");
    return null;
  }

  return (
    <>
    <header>
        <div className="admin-nav-container">
            <nav className="admin-nav-links">
                <ul>
                    <li className="admin-nav-link">
                        <NavLink to="/admin/users"> Users </NavLink>
                    </li>
                    <li className="admin-nav-link">
                        <NavLink to="/admin/contacts">Contacts</NavLink>
                    </li>
                    <li className="admin-nav-link">
                    <NavLink to="/admin/services">Services</NavLink>
                    </li>
                    <li className="admin-nav-link">
                    <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
      <Outlet />
    </>
  );
};
