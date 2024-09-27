"use client";

import userLogin from "@/lib/userActions";
import styles from "./userLogin.module.css";
import { useFormState } from "react-dom";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [state, formAction] = useFormState(userLogin, {
    message: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (state?.message === "Invalid Username or Password") {
      toast.error(state?.message, {
        position: "top-center",
      });
    }
    if (state?.message === "Login Successful") {
      router.refresh();
      router.push("/dashboard-home");
    }
  });

  return (
    <>
      <ToastContainer className={styles.toastPosition} />
      <form className={styles.userForm} action={formAction} id="user-form">
        <div className={styles.labelDiv}>
          <label htmlFor="email" className="form-label fw600 dark-color">
            Username Or Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control email"
            id="email"
            style={{ width: "100%" }}
            required
          />
        </div>
        <div className={styles.labelDiv}>
          <label htmlFor="password" className="form-label fw600 dark-color">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control pass"
            id="password"
            style={{ width: "100%" }}
            required
          />
        </div>
        <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
          <label className="custom_checkbox fz14 ff-heading">
            Remember me
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark" />
          </label>
          <a className="fz14 ff-heading" href="#">
            Lost your password?
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <Button />
        </div>
        <div>
          <p className="dark-color text-center mb0 mt10">
            Do not have an account?{" "}
            <a href="/user-register" className="dark-color fw600">
              SignUp
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
