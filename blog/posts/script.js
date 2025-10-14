// --- POSTS DATA (temporary local copy for CodePen) ---
window.POSTS = [];
window.getPostBySlug = function (slug) {
  return (window.POSTS || []).find(p => p.slug === slug);
};

// ✅ your Blog13Oct Full Page link here
const BLOG_URL = "https://codepen.io/Selman-YB/full/NPxvaby";

// Wait for posts data to load
document.addEventListener("DOMContentLoaded", () => {
  // Helper: read query parameter (?slug=...)
  function getSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get("slug");
  }

  const slug = getSlug();
  const post = window.getPostBySlug ? window.getPostBySlug(slug) : null;

  const titleEl = document.getElementById("postTitle");
  const metaEl = document.getElementById("postMeta");
  const bodyEl = document.getElementById("postBody");

  // --- Handle missing post ---
  if (!post) {
    titleEl.textContent = "Post Not Found";
    metaEl.textContent = "";
    bodyEl.innerHTML = `
      <p>We couldn’t find the article you’re looking for.</p>
      <p><a class="blog-link" href="${BLOG_URL}" target="_blank">← Back to Blog</a></p>
    `;
    return;
  }

  // --- Fill in post content ---
  titleEl.textContent = post.title;
  metaEl.textContent = `${post.date} • ${post.tags.join(", ")}`;
  bodyEl.innerHTML = post.content;
});

// --- Dynamic tab title + meta description ---
(function () {
  if (!window.POSTS) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const post = (window.getPostBySlug && slug) ? window.getPostBySlug(slug) : null;
  if (!post) return;

  // Update tab title
  document.title = `${post.title} — AlevelPhysicsLab`;

  // Update (or create) meta description for nicer link previews
  const desc = (post.excerpt || "").replace(/\s+/g, " ").trim();
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", desc || "APL weekly physics blog post.");
})();
