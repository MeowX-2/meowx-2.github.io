/**
 * Portfolio website scripts
 * Handles blog filtering, math rendering, smooth scrolling, and mobile menu
 */

document.addEventListener("DOMContentLoaded", function () {
  initializeBlogFiltering();
  initializeSmoothScrolling();
  initializeScrollSpy();
  initializeMathRendering();
  initializeMobileMenu();
  initializeThemeToggle();
});

/**
 * Handle Theme Toggle (Dark/Light Mode)
 */
function initializeThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update icon
      if (themeIcon) {
        if (newTheme === 'dark') {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
      }
    });
  }
}

/**
 * Handle Sidebar Toggle (Desktop & Mobile)
 */
function initializeMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isMobile = window.innerWidth <= 900;
      const icon = toggleBtn.querySelector('i');

      if (isMobile) {
        // Mobile: Toggle 'active' for overlay effect
        sidebar.classList.toggle('active');
        
        if (sidebar.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      } else {
        // Desktop: Toggle 'collapsed' for layout shift
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        
        // No icon change needed for desktop collapse, or optional
      }
    });

    // Close sidebar when clicking a link (Mobile only)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          sidebar.classList.remove('active');
          const icon = toggleBtn.querySelector('i');
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });

    // Close sidebar when clicking outside (Mobile only)
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 900 && 
          sidebar.classList.contains('active') && 
          !sidebar.contains(e.target) && 
          !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }
}

/**
 * Filter blog posts by tag
 */
function initializeBlogFiltering() {
  const tags = document.querySelectorAll(".tag");
  const blogPosts = document.querySelectorAll(".blog-post");

  tags.forEach((tag) => {
    tag.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Update active tag style
      tags.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const selectedTag = this.getAttribute("data-tag");

      // Show/hide blog posts based on selected tag
      blogPosts.forEach((post) => {
        const postTags = post.getAttribute("data-tags") ? post.getAttribute("data-tags").split(" ") : [];
        if (selectedTag === "all" || postTags.includes(selectedTag)) {
          post.style.display = "flex"; // Restore flex display for grid
          // animate fade in
          post.style.opacity = '0';
          setTimeout(() => post.style.opacity = '1', 50);
        } else {
          post.style.display = "none";
        }
      });
    });
  });
}

/**
 * Update active sidebar link based on scroll position
 */
function initializeScrollSpy() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", // Trigger when section is near top
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add active class to corresponding link
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

/**
 * Enable smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

/**
 * Render mathematical expressions using KaTeX (if available)
 */
function initializeMathRendering() {
  if (typeof renderMathInElement !== 'undefined') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
    });
  }
}
