export {};

const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const primaryNavigation = document.querySelector<HTMLElement>("#primary-navigation");
const desktopViewport = window.matchMedia("(min-width: 761px)");

function setMenuOpen(isOpen: boolean): void {
  if (!menuToggle || !primaryNavigation) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação",
  );
  primaryNavigation.classList.toggle("is-open", isOpen);
}

if (menuToggle && primaryNavigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  primaryNavigation.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  desktopViewport.addEventListener("change", (event: MediaQueryListEvent) => {
    if (event.matches) setMenuOpen(false);
  });
}

const currentYear = document.querySelector<HTMLElement>("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
