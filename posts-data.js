// /blog/posts-data.js — shared blog data for both pages

window.POSTS = [
  {
    title: "Understanding the Photoelectric Effect",
    slug: "2025-10-13-photoelectric-effect",
    date: "2025-10-13",
    tags: ["quantum", "year12", "practicals"],
    excerpt:
      "Threshold frequency, work function, and why intensity alone can’t eject electrons below f₀.",
    content: `
      <p>The photoelectric effect shows light behaves as photons with energy <em>E = hf</em>.
      Electrons are emitted only if photon energy exceeds the metal's work function &phi;.
      We’ll connect this to your simulation and exam-style graph questions.</p>
      <h3>Key ideas</h3>
      <ul>
        <li>Threshold frequency: <code>f₀ = φ / h</code></li>
        <li>Kinetic energy: <code>KE_max = hf − φ</code></li>
        <li>Intensity controls number of emitted electrons (if f ≥ f₀)</li>
      </ul>
    `
  },
  {
    title: "Core Practicals: Reducing Uncertainty Like a Pro",
    slug: "2025-10-20-uncertainty-tips",
    date: "2025-10-20",
    tags: ["practicals", "skills"],
    excerpt:
      "Practical tricks to cut random error and tighten gradient/intercept estimates for top marks.",
    content: `
      <p>Small changes in setup produce big gains in data quality. We'll cover repeat readings,
      range expansion, and linearisation so your gradient carries real punch in the analysis.</p>
      <ol>
        <li>Wider range of the independent variable</li>
        <li>Repeated trials & mean with uncertainty</li>
        <li>Use of appropriate graph scales and best-fit line</li>
      </ol>
    `
  },
  {
    title: "EM Waves: Visualising E and B in Phase",
    slug: "2025-10-27-em-waves-in-phase",
    date: "2025-10-27",
    tags: ["waves", "fields"],
    excerpt:
      "What ‘mutually perpendicular’ really means, and how to sketch fields cleanly for marks.",
    content: `
      <p>Electric and magnetic fields oscillate perpendicular to each other and to the direction
      of propagation. We'll fix the most common sketching mistakes and link to intensity ∝ E².</p>
    `
  }
];

// Helper for the post page
window.getPostBySlug = function (slug) {
  return (window.POSTS || []).find(p => p.slug === slug);
};
