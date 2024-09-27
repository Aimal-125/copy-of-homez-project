"use client";

import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={pending ? "ud-btn btn-muted" : "ud-btn btn-thm"}
      id="submit-btn"
      style={{ width: "100%" }}
      disabled={pending}
    >
      {pending ? "Submitting" : "Sign in"}
    </button>
  );
}
