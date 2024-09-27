"use client";

export default function ExistingAgentsButton() {
  const handleExistingAgentsClick = () => {
    const div1 = document.getElementById("hide-div-2");
    const div2 = document.getElementById("hide-div");
    const div3 = document.getElementById("select-div");
    div1.classList.add("d-block");
    div1.classList.remove("d-none");
    div2.classList.add("d-none");
    div3.classList.remove("d-none");
  };
  return (
    <button
      type="button"
      className="ud-btn btn-thm"
      onClick={handleExistingAgentsClick}
    >
      Existing Agents
    </button>
  );
}
