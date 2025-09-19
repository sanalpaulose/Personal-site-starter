// Small enhancements: current year + theme toggle
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  // You could persist preference with localStorage if you like:
  // localStorage.setItem("prefers-dark", isDark ? "1" : "0");
});
