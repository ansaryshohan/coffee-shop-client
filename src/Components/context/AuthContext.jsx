import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvide = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const modalState = { user, loading };

  return (
    <AuthContext.Provider value={modalState}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvide;
