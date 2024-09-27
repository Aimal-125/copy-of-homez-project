"use client";

import Link from "next/link";
import React from "react";
import { redirect, useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  // const handleClickSubmit = () => {
  //   const emailInput = document.querySelector(".email");
  //   const passInput = document.querySelector(".pass");
  //   if (emailInput.value !== "" || passInput.value !== "") {
  //     router.push("/dashboard-home");
  //   }
  // };
  return (
    <form className="form-style1">
      {/*<div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          className="form-control email"
          placeholder="Enter Email"
          required
        />
      </div>*/}
      {/* End email */}

      {/*<div className="mb15">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="text"
          className="form-control pass"
          placeholder="Enter Password"
          required
        />
      </div>*/}
      {/* End Password */}

      {/*<div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Remember me
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label>
        <a className="fz14 ff-heading" href="#">
          Lost your password?
        </a>
      </div>*/}
      {/* End  Lost your password? */}

      {/*<div className="d-grid mb20">
        <button
          className="ud-btn btn-thm"
          type="submit"
          onClick={handleClickSubmit}
        >
          Sign in <i className="fal fa-arrow-right-long" />
        </button>
      </div>*/}
      {/* End submit */}

      {/*<div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">OR</span>
      </div>*/}

      <div className="d-grid mb10">
        <a href="/user-login" style={{ display: "block", width: "100%" }}>
          <button
            className="ud-btn btn-white"
            type="button"
            style={{ width: "100%" }}
          >
            Continue As User
          </button>
        </a>
      </div>
      <div className="d-grid mb10">
        <a href="/agent-login" style={{ display: "block", width: "100%" }}>
          <button
            className="ud-btn btn-fb"
            type="button"
            style={{ width: "100%" }}
          >
            Continue As Agent
          </button>
        </a>
      </div>
      <div className="d-grid mb20">
        <a href="/agency-login" style={{ display: "block", width: "100%" }}>
          <button
            className="ud-btn btn-apple"
            type="button"
            style={{ width: "100%" }}
          >
            Continue As Agency
          </button>
        </a>
      </div>
      {/*<p className="dark-color text-center mb0 mt10">
        Not signed up?{" "}
        <a className="dark-color fw600" href="/register">
          Create an account.
        </a>
      </p>*/}
    </form>
  );
};

export default SignIn;
