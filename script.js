document.addEventListener("DOMContentLoaded", function () {
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
});

document.addEventListener("DOMContentLoaded", function () {
  renderMathInElement(document.body, {
    // Configure delimiters
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
    ],
    // Optional: Define macros if needed
    // macros: {"\\RR": "\\mathbb{R}"}
  });
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
