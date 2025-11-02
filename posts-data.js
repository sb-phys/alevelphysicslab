// blog/posts-data.js — single source of truth for the blog

// One clean array with just your new post
const POSTS = [
  {
    slug: "medical-imaging-xrays-ct-basics",
  title: "Medical Imaging: X-ray Radiography & CT — Physics Explained",
  date: "2025-11-02",
  tags: ["Medical Imaging", "X-rays", "CT", "A-level"],
  excerpt: "What medical imaging is, how X-rays are produced (bremsstrahlung vs characteristic), how CT scans work, and the three key interactions in tissue.",
  content: `
    <h2>Medical Imaging</h2>
    <p>What is one way particle physics has a big impact on the medical world? One very important process that is largely influenced by physics principles is <strong>medical imaging</strong>. But what is medical imaging?</p>
    <p>Medical imaging is the process used to observe the interior of a body for clinical analysis and medical intervention. The aim is to reveal what the doctor cannot see. There are many different types of medical imaging which have specific purposes. This post explains the physics behind some of the more well-known techniques.</p>

    <h3>X-ray Radiography</h3>
    <p>Definitely the most well-known type of medical imaging, an X-ray radiograph uses X-rays to view inside the body and form an image which clinicians can use to detect things like broken bones or tumours.</p>

    <h4>The basics of how X-rays are produced</h4>
    <p>X-rays are formed using an <strong>X-ray tube</strong> which is made up of a glass case, a <em>cathode</em> and an <em>anode</em>. One important thing to note is that the glass tube ensures the setup is in a vacuum state (reason explained shortly). The cathode is set up directly opposite the anode like so:</p>
    <p style="text-align:center"><img src="../../First%20blog/xraytube.png" alt="X-ray tube diagram"></p>

    <p>To begin, the cathode undergoes <strong>thermionic emission</strong>: it is heated to the point that it ejects electrons off the surface with some kinetic energy while a potential difference is applied across the tube. These electrons are accelerated towards the anode; when they hit the anode they decelerate, producing either <strong>bremsstrahlung</strong> (braking radiation) or <strong>characteristic radiation</strong>, both of which result in X-ray photons being emitted.</p>

    <h4>A more in-depth explanation</h4>
    <p>Initially the cathode is heated to a high temperature and electrons are emitted towards the anode by a high voltage. A key fact: voltage <em>V</em> and electric field strength <em>E</em> are proportional, so increasing the applied voltage increases <em>E</em> and thus the electron kinetic energy.</p>
    <p>As electrons approach the anode (often a heavy metal such as tungsten), they encounter the strong electric field of the atomic nuclei. Being negatively charged, the electrons experience a strong attractive force near the positively charged nuclei; this bends their path toward the nucleus, altering their trajectory like so:</p>
    <p style="text-align:center"><img src="../../First%20blog/electrondiffraction.png" alt="Electron deflection near a nucleus"></p>

    <p>This change in direction is a change in velocity; here the forward velocity decreases—i.e., <em>deceleration</em>. A drop in velocity means a drop in kinetic energy. By energy conservation, the lost kinetic energy is emitted as a photon: an <strong>X-ray</strong>. This is <strong>bremsstrahlung radiation</strong>.</p>
    <p>There is also <strong>characteristic radiation</strong>, which occurs when an incoming high-energy electron knocks out an inner-shell electron of the anode atom. The vacancy is filled by an electron from a higher energy level; the difference in energy is emitted as a photon with a specific energy (a discrete spectral line)—a characteristic X-ray.</p>

    <h4>Why the energies are different</h4>
    <p><em>Bremsstrahlung</em> produces a broad range (spectrum) of X-ray energies because electrons pass at varying distances from nuclei and therefore lose varying amounts of energy. Closer passes → stronger force → greater deceleration → higher photon energy.</p>
    <p><em>Characteristic</em> radiation produces specific energies because atomic energy levels are quantised. Every time a given shell transition occurs, it emits the same energy photon.</p>

    <h3>The use of X-rays — CT scans</h3>
    <p>Now that we’ve seen how X-rays are produced, here’s how they are used. In <strong>CT (Computed Tomography)</strong>, X-rays are collimated and shaped by shielding (lead casing blocks X-rays; they can’t penetrate lead). The system selects the spectrum (bremsstrahlung vs characteristic contribution) appropriate for the task. A patient enters the CT scanner, which looks like this:</p>
    <p style="text-align:center"><img src="../../First%20blog/ctscanner.png" alt="CT scanner schematic"></p>

    <p>The patient is aligned with the X-ray source and detectors. The <em>gantry</em> (the circular housing containing the source and detector array) rotates around the patient. As it rotates, X-rays are emitted and detected from many angles. Different tissues attenuate X-rays by different amounts (dense bone absorbs more → appears lighter; less-dense tissue absorbs less → appears darker).</p>
    <p>Detectors convert the received X-rays into electrical signals which are processed and reconstructed by algorithms into cross-sectional images (slices). That’s the CT image you see in practice.</p>

    <h3>The physics of how X-rays interact with tissue</h3>
    <p>In diagnostic imaging there are three key interactions:</p>

    <h4>1) Photoelectric effect</h4>
    <p>When a photon of sufficient energy is incident on an atom, it can transfer <em>all</em> its energy to an electron and eject it (a <strong>photoelectron</strong>). The vacancy left in an inner shell is filled by a higher-level electron; the energy difference is emitted as a characteristic X-ray or transferred to another electron (an <strong>Auger electron</strong>).</p>
    <p style="text-align:center"><img src="../../First%20blog/photoelectriceffect.png" alt="Photoelectric effect diagram"></p>

    <h4>2) Compton scattering</h4>
    <p>An incoming photon collides with a loosely bound or free electron, transferring part of its energy and changing direction with reduced energy. The ejected electron is the <strong>Compton electron</strong>.</p>
    <p style="text-align:center"><img src="../../First%20blog/comptonscattering.png" alt="Compton scattering diagram"></p>
    <p style="text-align:center"><img src="../../First%20blog/cscaterequation.png" alt="Compton scattering equation"></p>

    <h4>3) Pair production</h4>
    <p>When a photon has energy > 1.022 MeV and passes near a strong electric field (e.g., near a nucleus), it can transform into an electron–positron pair. The positron (the electron’s antiparticle) will later encounter an electron and the two will <strong>annihilate</strong>, converting mass to energy (two photons travelling in opposite directions).</p>
    <p style="text-align:center"><img src="../../First%20blog/pairproduction.png" alt="Pair production diagram"></p>
    <p style="text-align:center"><img src="../../First%20blog/annihilation.png" alt="Annihilation to two photons"></p>

    <h3>Which interaction dominates?</h3>
    <p>Compton scattering typically dominates at intermediate diagnostic energies. At lower energies, photoelectric absorption dominates (especially in high-Z materials like bone or iodinated contrast). Pair production dominates only at much higher energies than used in CT; it is more relevant for PET and high-energy therapy beams.</p>

    <p><em>Bottom line:</em> X-ray tube → photons (bremsstrahlung + characteristic) → tissue interactions (photoelectric, Compton, pair production) → detectors → reconstruction. Settings such as kVp shape the spectrum (higher kVp → more penetration, less photoelectric contrast), while mAs sets photon <em>number</em> (dose).</p>
  `
  }
];

// Helpers so BOTH pages can read posts no matter which pattern they use
window.POSTS = POSTS;
window.getAllPosts = () => POSTS.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
window.getPostBySlug = (slug) => POSTS.find(p => p.slug === slug) || null;


