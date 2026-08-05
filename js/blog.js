/**
 * Automatically load and render blog cards from posts/posts.json
 * and handle tag filtering
 */

function loadDynamicBlogGrid() {
  const blogGrid = document.querySelector("#blog-grid");
  if (!blogGrid) return;

  fetch("posts/posts.json")
    .then((res) => {
      if (!res.ok) throw new Error("Posts catalog unavailable");
      return res.json();
    })
    .then((posts) => {
      if (!Array.isArray(posts) || posts.length === 0) return;

      // Sort posts in descending date order (newest first)
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      blogGrid.innerHTML = "";

      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "card blog-post";
        card.setAttribute("data-tags", post.tag.toLowerCase());

        card.innerHTML = `
          <div class="card-header">
            <h3><a href="post.html?file=${post.file}">${post.title}</a></h3>
            <span class="card-type">${post.tagLabel || post.tag}</span>
          </div>
          <div class="card-body">
            <p>${post.summary}</p>
          </div>
          <div class="card-footer">
            <a href="post.html?file=${post.file}" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></a>
            <span class="date"><i class="fa-regular fa-clock"></i> <span class="calc-readtime" data-file="${post.file}">...</span> &bull; ${post.date}</span>
          </div>
        `;

        blogGrid.appendChild(card);

        // Dynamically compute reading time from markdown
        fetch(`posts/${post.file}.md`)
          .then((r) => (r.ok ? r.text() : ""))
          .then((text) => {
            const wordCount = text.trim().split(/\s+/).length;
            const minutes = Math.max(1, Math.ceil(wordCount / 200));
            const timeEl = card.querySelector(".calc-readtime");
            if (timeEl) timeEl.textContent = `${minutes} min read`;
          })
          .catch(() => {
            const timeEl = card.querySelector(".calc-readtime");
            if (timeEl) timeEl.textContent = "1 min read";
          });
      });

      initializeBlogFiltering();
    })
    .catch((err) => {
      console.warn("Could not load posts.json:", err);
      initializeBlogFiltering();
    });
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
      
      tags.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const selectedTag = this.getAttribute("data-tag");

      blogPosts.forEach((post) => {
        const postTags = post.getAttribute("data-tags") ? post.getAttribute("data-tags").split(" ") : [];
        if (selectedTag === "all" || postTags.includes(selectedTag)) {
          post.style.display = "flex";
          post.style.opacity = '0';
          setTimeout(() => post.style.opacity = '1', 50);
        } else {
          post.style.display = "none";
        }
      });
    });
  });
}
