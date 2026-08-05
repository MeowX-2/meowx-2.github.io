/**
 * Main Application Bootstrapper
 * Initializes all page modules on DOM ready or immediate if readyState is interactive/complete
 */

function bootApplication() {
  // Theme & Navigation
  if (typeof initializeThemeToggle === "function") initializeThemeToggle();
  if (typeof initializeMobileMenu === "function") initializeMobileMenu();
  if (typeof initializeSmoothScrolling === "function") initializeSmoothScrolling();
  if (typeof initializeScrollSpy === "function") initializeScrollSpy();

  // Dynamic Content Loading
  if (typeof loadDynamicSocialGrid === "function") loadDynamicSocialGrid();
  if (typeof loadDynamicProjectsGrid === "function") loadDynamicProjectsGrid();
  if (typeof loadDynamicBlogGrid === "function") loadDynamicBlogGrid();
  if (typeof loadDynamicResourcesGrid === "function") loadDynamicResourcesGrid();

  // Math rendering (KaTeX)
  if (typeof initializeMathRendering === "function") initializeMathRendering();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootApplication);
} else {
  bootApplication();
}

/**
 * Render mathematical expressions using KaTeX (if loaded)
 */
function initializeMathRendering() {
  const render = () => {
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false
      });
    }
  };

  render();
  window.addEventListener("load", render);
}
