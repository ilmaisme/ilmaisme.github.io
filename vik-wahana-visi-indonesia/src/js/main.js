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

// Detect current path + file
const pathParts = window.location.pathname.split("/");
const currentFile = pathParts.pop() || "index.html";

const basePathEN = "/en/";
const basePathID = "/";
// const basePathEN = "https://ilmaisme.github.io/vik-wahana-visi-indonesia/build/en/";
// const basePathID = "https://ilmaisme.github.io/vik-wahana-visi-indonesia/build/";
const isEnglishPage = pathParts.includes("en");

// --- On load, restore from localStorage ---
const savedLang = localStorage.getItem("lang");
if (savedLang) {
  toggle.checked = savedLang === "en";
  switchTxt.textContent = savedLang.toUpperCase();

  // Redirect if saved language doesn’t match current URL
  if (savedLang === "en" && !isEnglishPage) {
    window.location.replace(basePathEN + currentFile);
  } else if (savedLang === "id" && isEnglishPage) {
    window.location.replace(basePathID + currentFile);
  }
} else {
  // Initialize text based on current page
  switchTxt.textContent = isEnglishPage ? "EN" : "ID";
  toggle.checked = isEnglishPage;
}

// --- Handle toggle changes ---
toggle.addEventListener("change", () => {
  const newLang = toggle.checked ? "en" : "id";
  localStorage.setItem("lang", newLang);
  switchTxt.textContent = newLang.toUpperCase();

  if (newLang === "en" && !isEnglishPage) {
    window.location.href = basePathEN + currentFile;
  } else if (newLang === "id" && isEnglishPage) {
    window.location.href = basePathID + currentFile;
  }
});

// --- Fix next/prev links based on language ---
const savedLangForLinks = localStorage.getItem("lang") || (isEnglishPage ? "en" : "id");

document.querySelectorAll(".buttonNextWrap a").forEach(link => {
  let href = link.getAttribute("href"); // e.g. "/section-2.html" or "index.html"

  if (href) {
    // Remove any leading slash
    href = href.replace(/^\/+/, "");

    if (savedLangForLinks === "en") {
      link.setAttribute("href", basePathEN + href);
    } else {
      link.setAttribute("href", basePathID + href);
    }
  }
});
