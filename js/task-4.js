const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const {
    email: { value: email },
    password: { value: password },
  } = event.target.elements;
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  if (!trimmedEmail || !trimmedPassword) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: trimmedEmail,
    password: trimmedPassword,
  };

  console.log(formData);
  loginForm.reset();
});