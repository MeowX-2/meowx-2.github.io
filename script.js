/**
 * Portfolio website scripts
 * Handles blog filtering, math rendering, and smooth scrolling
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize tag filtering for blog posts
  initializeBlogFiltering();
  
  // Initialize KaTeX math rendering
  initializeMathRendering();
  
  // Initialize smooth scrolling
  initializeSmoothScrolling();
});

/**
 * Set up click handlers for blog post tag filtering
 */
function initializeBlogFiltering() {
  const tags = document.querySelectorAll(".tag");
  const blogPosts = document.querySelectorAll(".blog-post");

  tags.forEach((tag) => {
    tag.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedTag = this.getAttribute("data-tag");

      // Show/hide blog posts based on selected tag
      blogPosts.forEach((post) => {
        const postTags = post.getAttribute("data-tags").split(" ");
        if (postTags.includes(selectedTag) || selectedTag === "all") {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
}

/**
 * Render mathematical expressions using KaTeX
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
        });
      }
    });
  });
}
