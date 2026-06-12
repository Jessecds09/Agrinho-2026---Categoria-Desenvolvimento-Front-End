```javascript
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const expanded =
    menuBtn.getAttribute("aria-expanded") === "true";

  menuBtn.setAttribute(
    "aria-expanded",
    !expanded
  );
});

const themeToggle =
  document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

const form =
  document.getElementById("contact-form");

const formMessage =
  document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent =
    "Mensagem enviada com sucesso!";

  form.reset();
});

const detalhesBtns =
  document.querySelectorAll(".detalhes-btn");

detalhesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Projeto em desenvolvimento.");
  });
});
```

