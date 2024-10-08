import { Context, createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import ToastList from "../components/toasts/toast-list";

type ToastListType = { status: number; message: string }[];
type ContextType = {
  user: User | null;
  addToast: (toast: { status: number; message: string }) => void;
};

let AppContext: Context<ContextType>;

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [toasts, setToasts] = useState<ToastListType>([]);

  const sharedState = {
    user,
    addToast,
  };

  AppContext = createContext(sharedState);

  useEffect(() => {
    if (toasts.length != 0) {
      const timer = setTimeout(() => {
        removeToast();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }

    function removeToast() {
      setToasts(toasts.slice(1, toasts.length));
    }
  }, [toasts]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  function addToast(toast: { status: number; message: string }) {
    setToasts(toasts.concat([toast]));
  }

  return (
    <>
      {toasts && <ToastList toasts={toasts} />}
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
