/**
 * Portfolio Website Scripts Entry Point
 * Loads modular JS utilities
 */

(function loadScripts() {
  const scripts = [
    "js/theme.js",
    "js/navigation.js",
    "js/socials.js",
    "js/projects.js",
    "js/blog.js",
    "js/resources.js",
    "js/main.js"
  ];

  scripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  });
})();
