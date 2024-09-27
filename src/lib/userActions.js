"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function userLogin(prevState, formData) {
  const email = await formData.get("email");
  const password = await formData.get("password");

  const url = "http://192.168.18.4:4646/api/user/login";

  const body = JSON.stringify({
    identifier: email,
    password: password,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      message: "Invalid Username or Password",
    };
  }

  if (response.ok) {
    const setCookieHeader = response.headers.get("Set-Cookie");
    const cookieParts = setCookieHeader.split(";");
    const tokenCookie = cookieParts.find((part) => part.startsWith("token="));
    const token = tokenCookie.substring("token=".length);

    cookies().set("authToken", token, {
      maxAge: 24 * 60 * 60,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });

    return {
      message: "Login Successful",
    };
  }
}

export async function createUser(prevState, formData) {
  const email = await formData.get("email");
  const username = await formData.get("username");
  const password = await formData.get("password");
  const role = await formData.get("role");
  const country = await formData.get("country");

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const countryName = regionNames.of(`${country}`);

  const response = await fetch("http://192.168.18.4:4646/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
      role,
      country: countryName,
    }),
  });

  if (response.statusText === "Bad Request" || response.status === "400") {
    return {
      message: "User Already Exists.",
    };
  }

  if (response.statusText === "Created" || response.status === 201) {
    return {
      message: "Registration Successful.",
    };
  }
}

export async function userLogout() {
  cookies().delete("authToken");
  redirect("/");
}
