import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Toast from "../components/toast";

type ToastType = { status: number | null; message: string | null };
type ContextType = {
  user: User | null;
  setToast: Dispatch<SetStateAction<ToastType>> | null;
};

const AppContext = createContext<ContextType>({ user: null, setToast: null });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [toast, setToast] = useState<ToastType>({
    message: null,
    status: null,
  });

  let sharedState = {
    user,
    setToast,
  };

  useEffect(() => {
    if (toast.status) {
      const timer = setTimeout(() => {
        setToast({ message: null, status: null });
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast]);

  onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged executed");
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      {toast.message && (
        <Toast status={toast.status!} message={toast.message} />
      )}
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
