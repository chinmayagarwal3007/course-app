import { createContext, useContext, useEffect } from "react";

import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);
  const storeTokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn : ", isLoggedIn);

  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  //JWT AUTHENTICATON - to get loggedin user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // to fetch the services from db

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log("FrontEnd err");
    }
  };

  // -----------------------------------------

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLs, LogoutUser, isLoggedIn, user, services}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
