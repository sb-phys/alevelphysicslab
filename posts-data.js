// blog/posts-data.js — single source of truth for the blog

// One clean array with just your new post
const POSTS = [
  {
    slug: "medical-imaging-xrays-ct-basics",
    title: "Medical Imaging: X-ray Radiography & CT — Physics Explained",
    date: "2025-11-02",
    tags: ["Medical Imaging", "X-rays", "CT", "A-level"],
    excerpt:
      "From X-ray tube physics (bremsstrahlung vs characteristic) to how CT scanners form images, plus the key interactions in tissue.",
    content: `
      <h2>Medical Imaging</h2>
      <p>Medical imaging lets us observe the interior of the body for diagnosis and clinical decision-making. Here we unpack the physics behind X-ray radiography and CT, and the core interactions X-rays undergo in tissue.</p>

      <h3>X-ray Radiography</h3>
      <p>X-ray radiography uses high-energy photons to create images of internal structures (e.g., bones, tumours). The heart of the system is the X-ray tube: a vacuum glass envelope with a heated <em>cathode</em> and a metal <em>anode</em> placed opposite each other.</p>

      <h3>The basics: how X-rays are produced</h3>
      <p>Heat the cathode → <em>thermionic emission</em> releases electrons → apply a high voltage so electrons accelerate toward the anode. When these high-speed electrons strike the anode target, they decelerate and/or interact with atomic shells, producing X-rays.</p>

      <p style="text-align:center"><img src="../First blog/xraytube.png" alt="X-ray tube diagram"></p>

      <h3>Deeper look</h3>
      <p>The applied tube voltage sets a strong electric field that gives electrons large kinetic energies. As electrons approach the anode’s positively charged nuclei, they are deflected and decelerate. This rapid deceleration emits photons: that’s <strong>bremsstrahlung</strong> (braking radiation). Electrons can also knock out inner-shell electrons in the anode; when higher-level electrons drop down to fill the vacancy, they emit <strong>characteristic X-rays</strong> with discrete energies.</p>

      <p style="text-align:center"><img src="../First blog/electrondiffraction.png" alt="Electron deflection near a nucleus"></p>

      <p>Bremsstrahlung yields a broad spectrum of X-ray energies, while characteristic X-rays appear as sharp lines at specific energies set by the target material.</p>

      <h3>CT scans: using X-rays to make cross-sections</h3>
      <p>In CT (Computed Tomography), an X-ray source and detector array rotate around the patient. Multiple projections are collected at many angles. Algorithms reconstruct these into cross-sectional images, showing how different tissues attenuate X-rays.</p>

      <p style="text-align:center"><img src="../First blog/ctscanner.png" alt="CT scanner schematic"></p>

      <h3>How X-rays interact with tissue</h3>
      <p>In the diagnostic energy range, three interactions matter most:</p>

      <p><strong>1) Photoelectric effect</strong> — a photon transfers all its energy to an atomic electron, ejecting it (a <em>photoelectron</em>). Vacancies in inner shells are later filled, emitting either characteristic X-rays or Auger electrons. Dominant at lower diagnostic energies; increases strongly with atomic number.</p>
      <p style="text-align:center"><img src="../First blog/photoelectriceffect.png" alt="Photoelectric effect diagram"></p>

      <p><strong>2) Compton scattering</strong> — the photon transfers part of its energy to an electron and changes direction with reduced energy. Dominant at intermediate energies and contributes to scatter noise.</p>
      <p style="text-align:center"><img src="../First blog/comptonscattering.png" alt="Compton scatter diagram"></p>

      <p><strong>3) Pair production</strong> — above 1.022 MeV, a photon can convert to an electron–positron pair near a nucleus. Above standard CT energies; relevant to PET and high-energy therapy beams.</p>
      <p style="text-align:center"><img src="../First blog/pairproduction.png" alt="Pair production diagram"></p>

      <h3>Tying it together</h3>
      <p>Photoelectric absorption boosts contrast for high-Z materials (bone, contrast agents). Compton dominates soft-tissue ranges and spreads dose; pair production explains PET annihilation photons.</p>
      <p style="text-align:center"><img src="../First blog/annihilation.png" alt="Annihilation to two photons"></p>

      <p>Rule of thumb: higher kVp hardens the spectrum (more penetration, less photoelectric contrast); mAs controls photon <em>number</em> (dose) without changing photon energy.</p>
    `
  }
];

// Helpers so BOTH pages can read posts no matter which pattern they use
window.POSTS = POSTS;
window.getAllPosts = () => POSTS.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
window.getPostBySlug = (slug) => POSTS.find(p => p.slug === slug) || null;
