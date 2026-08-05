/**
 * Markdown Blog Post Renderer
 * Fetches and renders .md post files with KaTeX math support
 */

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  let rawPostName = urlParams.get('file') || urlParams.get('post') || 'math-helper';
  const cleanPostName = rawPostName.replace(/\.md$/i, '');
  const mdFilePath = `posts/${cleanPostName}.md`;
  
  fetch(mdFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      renderMarkdownPost(text);
    })
    .catch(err => {
      const titleEl = document.getElementById('post-title');
      const bodyEl = document.getElementById('post-body');
      if (titleEl) titleEl.textContent = "Post Not Found";
      if (bodyEl) bodyEl.innerHTML = "<p>Sorry, the requested Markdown blog post could not be found.</p><br><a href='index.html#blog' class='cta-button'>Return to Blog</a>";
    });
});

function renderMarkdownPost(rawText) {
  let title = "Blog Post";
  let date = "Recent";
  let tag = "Blog";
  let content = rawText;

  // Extract Frontmatter (--- ... ---)
  const frontmatterMatch = rawText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    content = frontmatterMatch[2];

    frontmatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();
        if (key.trim() === 'title') title = value;
        if (key.trim() === 'date') date = value;
        if (key.trim() === 'tag') tag = value;
      }
    });
  }

  // Calculate Reading Time (words / 200)
  const wordCount = content.trim().split(/\s+/).length;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // Update DOM
  document.title = `${title} — Arifa Alam`;
  const titleEl = document.getElementById('post-title');
  const dateEl = document.getElementById('post-date');
  const readtimeEl = document.getElementById('post-readtime');
  const tagEl = document.getElementById('post-tag');
  const bodyEl = document.getElementById('post-body');

  if (titleEl) titleEl.textContent = title;
  if (dateEl) dateEl.innerHTML = `<i class="fa-regular fa-calendar"></i> ${date}`;
  if (readtimeEl) readtimeEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${readTimeMinutes} min read`;
  if (tagEl) tagEl.textContent = tag;

  if (bodyEl && typeof marked !== 'undefined') {
    bodyEl.innerHTML = marked.parse(content);
  } else if (bodyEl) {
    bodyEl.textContent = content;
  }

  // Render KaTeX Math
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
}
