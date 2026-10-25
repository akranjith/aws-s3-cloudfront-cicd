document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("deployment-status");

  status.textContent = "Deployment Successful";

  document.getElementById("test-button")
    .addEventListener("click", () => {
      alert("AWS DevOps CI/CD is working!");
    });
});
