import React, { useContext, useState } from "react";
import { auth } from "./../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

const value = {
  currentUser,
};

export function AuthProvider(childern) {
  const [currentUser, setCurrentUser] = useState();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
