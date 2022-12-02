import { createContext, useContext, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";

type ContextType = {
  user: User | null;
};

const AppContext = createContext<ContextType>({ user: null });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  let sharedState = {
    user: user,
  };

  onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged executed");
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
