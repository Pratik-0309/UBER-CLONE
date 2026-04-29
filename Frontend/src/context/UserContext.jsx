import { createContext, useState, useEffect } from "react";
import userApi from "../utils/userApi.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const fetchUser = async () => {
    try {
      const res = await userApi.get("/profile");
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  const registerUser = async(formData) => {
    const res = await userApi.post("/register", formData);
    setUser(res.data.user);
    return res.data;
  }
  
  const loginUser = async (formData) => {
    const res = await userApi.post("/login", formData);
    setUser(res.data.user);
    return res.data;
  };

  
  const logoutUser = async () => {
    await userApi.post("/logout");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        loginUser,
        registerUser,
        logoutUser,
        fetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};