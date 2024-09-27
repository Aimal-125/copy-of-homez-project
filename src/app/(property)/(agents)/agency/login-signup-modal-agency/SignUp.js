"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

const SignUp = () => {
  const router = useRouter();
  const handleCreateAccountSubmit = () => {
    const createEmailInput = document.querySelector(".create-email");
    const createPassInput = document.querySelector(".create-pass");
    if (createEmailInput.value !== "" || createPassInput.value !== "") {
      router.push("/dashboard-agency");
    }
  };
  return (
    <form className="form-style1">
      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          className="form-control create-email"
          placeholder="Enter Email"
          required
        />
      </div>
      {/* End Email */}

      <div className="mb20">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="text"
          className="form-control create-pass"
          placeholder="Enter Password"
          required
        />
      </div>
      {/* End Password */}

      <div className="d-grid mb20">
        <button
          className="ud-btn btn-thm"
          type="submit"
          onClick={handleCreateAccountSubmit}
        >
          Create account <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">OR</span>
      </div>

      <div className="d-grid mb10">
        <button className="ud-btn btn-white" type="button">
          <i className="fab fa-google" /> Continue Google
        </button>
      </div>
      <div className="d-grid mb10">
        <button className="ud-btn btn-fb" type="button">
          <i className="fab fa-facebook-f" /> Continue Facebook
        </button>
      </div>
      <div className="d-grid mb20">
        <button className="ud-btn btn-apple" type="button">
          <i className="fab fa-apple" /> Continue Apple
        </button>
      </div>
      <p className="dark-color text-center mb0 mt10">
        Already Have an Account?{" "}
        <a className="dark-color fw600" href="/login">
          Login
        </a>
      </p>
    </form>
  );
};

export default SignUp;
