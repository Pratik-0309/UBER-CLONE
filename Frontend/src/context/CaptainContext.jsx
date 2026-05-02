import { createContext, useState, useEffect } from "react";
import captainApi from "../utils/captainApi.js";

export const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(false);

 
  const fetchCaptain = async () => {
    try {
      const res = await captainApi.get("/me");
      setCaptain(res.data.captain);
    } catch (err) {
      setCaptain(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaptain();
  }, []);

  
  const loginCaptain = async (formData) => {
    const res = await captainApi.post("/login", formData);
    setCaptain(res.data.captain);
  };

  
  const logoutCaptain = async () => {
    await captainApi.post("/logout");
    setCaptain(null);
  };

  return (
    <CaptainContext.Provider
      value={{
        captain,
        loading,
        isOnline,
        setIsOnline,
        loginCaptain,
        logoutCaptain,
        fetchCaptain,
      }}
    >
      {children}
    </CaptainContext.Provider>
  );
};