import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
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
