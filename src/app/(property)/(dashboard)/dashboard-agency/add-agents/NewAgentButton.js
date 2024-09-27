"use client";

export default function NewAgentButton() {
  const handleNewAgentClick = () => {
    const div1 = document.getElementById("hide-div");
    const div2 = document.getElementById("hide-div-2");
    const div3 = document.getElementById("select-div");
    div1.classList.remove("d-none");
    div1.classList.add("d-block");
    div2.classList.add("d-none");
    div3.classList.add("d-none");
  };
  return (
    <button
      type="button"
      className="ud-btn btn-thm"
      onClick={handleNewAgentClick}
    >
      Add New Agent
    </button>
  );
}
