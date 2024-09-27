"use client";

import { createUser } from "@/lib/userActions";
import styles from "./userRegister.module.css";
import { useState, useMemo, useEffect, useTransition } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "./SubmitButton";

export default function UserRegisterForm() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
  };
  const changeHandler = (value) => {
    setValue(value);
  };
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(createUser, {
    message: "",
  });

  useEffect(() => {
    if (state?.message === "User Already Exists.") {
      toast.error(state?.message, {
        position: "bottom-center",
      });
    }
    if (state?.message === "Registration Successful.") {
      startTransition(() => {
        router.refresh();
        router.push("/user-login");
      });
    }
  });

  return (
    <>
      <ToastContainer />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <form className={styles.userForm} action={formAction}>
          <div className={styles.labelDiv}>
            <label htmlFor="user-name" className="form-label fw600 dark-color">
              User Name
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="user-name"
              style={{ width: "100%" }}
              required
            />
          </div>
          <div className={styles.labelDiv}>
            <label htmlFor="email" className="form-label fw600 dark-color">
              Email
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
          <div className={styles.labelDiv}>
            <label htmlFor="country" className="form-label fw600 dark-color">
              Country
            </label>
            <Select
              options={options}
              value={value}
              onChange={changeHandler}
              styles={customStyles}
              inputId="country"
              placeholder="Select Country"
              name="country"
              required
            />
          </div>
          <div className={styles.labelDiv}>
            <input
              type="hidden"
              name="role"
              className="form-control"
              id="role"
              style={{ width: "100%" }}
              value="user"
              required
            />
          </div>
          <div>
            <SubmitButton />
          </div>
          <div>
            <p className="dark-color text-center mb0 mt10">
              Already have an account?{" "}
              <a href="/user-login" className="dark-color fw600">
                Sign In
              </a>
            </p>
          </div>
        </form>
      )}
    </>
  );
}
