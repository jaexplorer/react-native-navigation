import React, { useState } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = React.createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          setUser({ username: "bob" });
          AsyncStorage.setItem("user", JSON.stringify({ username: "bob" }));
        },
        logout: () => {
          setUser(false);
          AsyncStorage.removeItem("user");
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
