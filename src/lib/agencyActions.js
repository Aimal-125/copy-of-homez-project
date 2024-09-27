"use server";

import { redirect } from "next/navigation";

export default async function agencyLogin(formData) {
  const email = await formData.get("email");
  const password = await formData.get("password");
  if (email !== "" || password !== "") {
    redirect("/dashboard-agency");
  }
}
