import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authStateFetched, setAuthStateFetched] = useState(false);

  useEffect(() => {
    const fetchAuthState = async () => {
      try {
        const response = await fetch("http://localhost:3000/is-authenticated");
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.error("Error fetching authentication state:", error);
      } finally {
        setAuthStateFetched(true);
      }
    };

    fetchAuthState();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    authStateFetched,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
