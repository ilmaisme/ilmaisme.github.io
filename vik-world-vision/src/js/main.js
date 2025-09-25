/* s: Get HEIGHT Device */
function setAppHeight() {
  const appHeight = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${appHeight}px`);
}

setAppHeight();

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", setAppHeight);
  window.visualViewport.addEventListener("scroll", setAppHeight);
} else {
  window.addEventListener("resize", setAppHeight);
}
/* e: Get HEIGHT Device */

//-- Language toggle switch --//
const toggle = document.getElementById("langToggle");
const switchTxt = document.querySelector(".switchTxt");

// --- Get current path and file ---
let pathParts = window.location.pathname.split("/");
let currentFile = pathParts.pop() || "index.html"; // if "" (root), use index.html

// --- Check if we're in /en/ directory ---
const isEnglishPage = window.location.pathname.startsWith("/en/");

// --- Load saved lang (default = id) ---
const savedLang = localStorage.getItem("lang") || "id";
toggle.checked = (savedLang === "en");
switchTxt.textContent = savedLang.toUpperCase();

// --- Redirect on first load if needed ---
if (savedLang === "en" && !isEnglishPage) {
  window.location.href = "/en/" + currentFile;
} else if (savedLang === "id" && isEnglishPage) {
  window.location.href = "/" + currentFile;
}

// --- Handle toggle changes ---
toggle.addEventListener("change", () => {
  const newLang = toggle.checked ? "en" : "id";
  localStorage.setItem("lang", newLang);
  switchTxt.textContent = newLang.toUpperCase();

  if (newLang === "en" && !isEnglishPage) {
    window.location.href = "/en/" + currentFile;
  } else if (newLang === "id" && isEnglishPage) {
    window.location.href = "/" + currentFile;
  }
});