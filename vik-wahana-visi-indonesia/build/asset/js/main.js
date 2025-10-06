/* s: Get HEIGHT Device */
function setAppHeight() {
  const appHeight = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${appHeight}px`);
}

setAppHeight();

// if (window.visualViewport) {
//   window.visualViewport.addEventListener("resize", setAppHeight);
//   window.visualViewport.addEventListener("scroll", setAppHeight);
// } else {
//   window.addEventListener("resize", setAppHeight);
// }
/* e: Get HEIGHT Device */

// ✅ Base paths
const basePathEN = "https://vik.kompas.com/water-sanitation-for-all/";
const basePathID = "https://vik.kompas.com/membangun-tata-kelola-air-dan-sanitasi/";

// ✅ Redirect old EN URL to new EN
if (window.location.href.startsWith("https://vik.kompas.com/membangun-tata-kelola-air-dan-sanitasi/en/")) {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  window.location.replace(basePathEN + currentFile);
}

// ✅ Elements
const langToggle = document.getElementById("langToggle");
const switchTxt = document.querySelector(".switchTxt");

// ✅ Detect current file (fallback = index.html)
function getCurrentFile() {
  const parts = window.location.pathname.split("/");
  return parts.pop() || "index.html";
}

// ✅ Sync toggle with URL
function syncToggleWithURL() {
  if (!langToggle) return;

  if (window.location.href.startsWith(basePathEN)) {
    langToggle.checked = true;
    if (switchTxt) switchTxt.textContent = "EN";
  } else {
    langToggle.checked = false;
    if (switchTxt) switchTxt.textContent = "ID";
  }
}

// ✅ Update Next/Prev links
function updateLinks() {
  const currentLang = window.location.href.startsWith(basePathEN) ? "en" : "id";
  document.querySelectorAll(".buttonNextWrap a").forEach(link => {
    let href = link.getAttribute("href"); // e.g. "section-2.html" or "/index.html"
    if (href) {
      href = href.replace(/^\/+/, ""); // remove leading slash
      if (currentLang === "en") {
        link.setAttribute("href", basePathEN + href);
      } else {
        link.setAttribute("href", basePathID + href);
      }
    }
  });
}

// ✅ Handle toggle switch
if (langToggle) {
  langToggle.addEventListener("change", () => {
    const currentFile = getCurrentFile();
    if (langToggle.checked) {
      // Switch to EN
      window.location.href = basePathEN + currentFile;
    } else {
      // Switch to ID
      window.location.href = basePathID + currentFile;
    }
  });
}

// ✅ On load
syncToggleWithURL();
updateLinks();

// ✅ Handle back/forward navigation
window.addEventListener("popstate", () => {
  syncToggleWithURL();
  updateLinks();
});
