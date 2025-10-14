// --- POSTS DATA (temporary local copy for CodePen) ---
window.POSTS = [];
// Wait until posts.js has loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".featured-experiments");

  // Clear existing hard-coded posts
  container.innerHTML = "<h2>Latest Posts</h2>";

  // If posts loaded correctly, render them
  if (window.POSTS && window.POSTS.length > 0) {
    // Sort newest first
    const sorted = [...window.POSTS].sort((a, b) =>
      b.date.localeCompare(a.date)
    );

    sorted.forEach(post => {
      const card = document.createElement("article");
      card.className = "experiment";
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="https://codepen.io/Selman-YB/full/WbrEZoz?slug=${post.slug}" target="_blank">Read Post</a>

      `;
      container.appendChild(card);
    });
  } else {
    container.innerHTML += "<p>No posts yet. Check back soon!</p>";
  }
});
