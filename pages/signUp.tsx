import { useRef } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAppContext } from "../context/state";

export default function SignUpPage() {
  const { addToast } = useAppContext();

  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (emailRef.current == null || passwordRef.current == null) {
      addToast({ status: 500, message: "Form not yet hydrated" });
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (emailRef.current == null || passwordRef.current == null) {
          addToast({ status: 500, message: "Form not yet hydrated" });
          return;
        }

        emailRef.current.value = "";
        passwordRef.current.value = "";
        addToast({ status: 200, message: "Successfully signed up" });
        router.push("/");
      })
      .catch((error) => {
        addToast({
          status: 500,
          message: `Error ${error.code}: ${error.message}`,
        });
      });
  }

  return (
    <div className="container d-flex vh-100">
      <form className="mx-auto my-auto" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            ref={passwordRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
