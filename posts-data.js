// blog/posts-data.js — single source of truth for the blog

// One clean array with just your new post
const POSTS = [
  {
    {
  slug: "medical-imaging-xrays-ct-basics",
  title: "Medical Imaging: X-ray Radiography & CT — Physics Explained",
  date: "2025-11-02",
  tags: ["Medical Imaging", "X-rays", "CT", "A-level"],
  excerpt: "Full write-up on X-ray production, CT scanning, and the three key X-ray interactions in tissue.",
  content: `
    <h2>Medical Imaging</h2>

    <p>What is one way particle physics has a big impact on the medical world ? One very important process that is largely influenced by Physics principles is medical imaging. But what is medical imaging ?</p>

    <p>Medical imaging is the process used to observe the interior of a body for clinical analysis and medical intervention. The aim is to reveal what the doctor cannot see . There are many different types of medical imaging which have specific purposes . I will explain the physics behind some of the more well known techniques.</p>

    <h3>X-ray Radiography</h3>

    <p>Definitely the most well known type of medical imaging , an X-ray radiography is where physicists use  X-rays to view inside the body and form an image which scientists can use to detect things like broken bones or tumours. </p>

    <h4>The basics of how X-ray's are produced</h4>

    <p>X-Rays are formed using an X-Ray tube which is made up of a glass case , a cathode and an anode. One important thing to note is that the reason the glass tube is used is to make sure the setup is in a vacuum state - I will explain why shortly. The cathode is setup directly opposite the anode like so : </p>

    <p style="text-align:center"><img src="../../First%20blog/xraytube.png" alt="X-ray tube diagram"></p>

    <p>To begin , the cathode goes under a process called thermionic emission which is where it is heated to the point that it ejects electrons off the surface with a certain kinetic energy and simultaneously a potential difference is applied across the cathode. These electrons are accelerated towards the surface of the anode and when they hit the anode the decelerate which causes either breaking radiation or characteristic radiation which both cause an X-Ray photon/beam to be emitted.</p>

    <h4>A more in depth explanation</h4>

    <p>Understanding the basics explanation will help you to understand the more in depth explanation. Initially the cathode is heated to a high temperature and electrons are emitted towards the anode by a high voltage. One key fact you should know is the relationship between voltage ( V ) and electric field strength ( E ) . V and E are proportional so in this context , as you increase the the voltage applied across the cathode , it increases the E of the electron. So now the high voltage has created a strong E which leads to the electrons having high velocities/kinetic energies. Once these electrons approach the anode which is made up of a heavy metal such as tungsten they encounter the strong electric field of the atomic nuclei of the anode material. As the electrons are negatively charged , once they approach the positively charged nucleus in the anode they experience a strong attractive force due to the electric field of the nuclei. The positive nucleus exerts an attractive force on the incoming electron. This causes the electron to bend towards the nucleus and alter is trajectory like so :</p>

    <p style="text-align:center"><img src="../../First%20blog/electrondiffraction.png" alt="Electron bending towards nucleus"></p>

    <p>This change in direction leads to a change of velocity . However in our case this change in velocity is decreasing. The force of the attractive force is technically against the motion of the electron so the electrons forward velocity is reduced which means it decelerates. Now this deceleration / change in velocity changed the kinetic energy. If velocity is decreased this means that kinetic energy is also decreased. However if we recall the basics of thermodynamics , total energy must be conserved. The KE lost by the deceleration must be emitted from to conserve energy. This energy is emitted as an X-Ray photon . The energy lost corresponds to the energy of the photon. Now this is known as Bremsstrahlung radiation / braking radiation. There is one alternative type of radiation that causes X-Rays to be emitted from the anode which is known as characteristic radiation. This type of radiation occurs when an electron in the inner shell of an atom is knocked out of the atom due to one of the electrons ( incoming from the cathode ) hitting it at a high velocity. This electron being ejected from the atom leaves a vacancy causing the atom to be unstable. In order for the atom to regain stability an electron from a higher energy level will fall down into the spot of vacancy . And using knowledge of how electrons behave in atom , when an electron falls down into a lower energy level , the difference between the two energy levels is emitted in the form of a photon and in this case due to the high energy - an X-Ray photon with a specific frequency/energy.</p>

    <h4>Quick note on the why they produce different types of energies</h4>

    <p>Braking causes a broad range of X-Ray energies where characteristic causes specific. But why is that. In braking as stated earlier the electrons hit the anode and consequently cross the nuclei of the atoms which make up the material. When they do so the electrons decelerate and lose energy and the energy lost corresponds to the energy of the emitted X-Ray. However not all electrons will take the same path as each other. Some will take different paths where they are closer or further from the nucleus. As the distance from the nucleus is what depends on the strength of the force different electron paths are going to equal to different energy losses hence different X-Ray energies. The further the electron passes a away from the nucleus the weaker the force and the closer the electron the stronger the force. And a greater force means a greater deceleration. </p>

    <p>Characteristic radiation on the other hand , produces specific energies. This is because electrons in the atom have specific energy states. What this means is that , every time an electron is ejected off it emits a photon with an exact energy . This is because every electron that is ejected comes from the same energy level therefore the change in energy is the same each time . Scientists can use this feature and decide what kind of X-Ray energy they want to use depending on the type of task.</p>

    <h3>The use of X-Rays - CT scans</h3>

    <p>Now that you have understood how X-Rays are produced lets move onto their actual uses. Generally X-Rays are used to take images of the body and see within the skin for CT scans. Firstly what Scientists designed was a certain case for the X-Rays. They made a lead casing around the X-Ray tube and a gap on where they want the release of the X-Rays. As a side note the use of the lead casing is owing to the fact that X-Rays are stopped by lead and cannot penetrate into it. Once the X-Ray machine setup is complete they make sure to determine what kind of radiation they want to use , either braking or characteristic. This all depends on the aim of the X-Ray. As stated earlier , braking radiation produces a range of X-Ray energies whereas characteristic causes a specific X-Ray energy. To begin a patient enters the CT scan machine which looks something like this :</p>

    <p style="text-align:center"><img src="../../First%20blog/ctscanner.png" alt="CT scanner"></p>

    <p>Once the doctors have aligned the patient in line with the X-Ray source and detector , they switch the machine on. The gantry  ( circular disk that contains the X-Ray source and detector ) begins to rotate around the patient . While the gantry is rotating X-Rays are being emitted and detected in all angles which penetrate the target organ. Different tissues absorb X-Rays to different degrees. For example as bones are quite dense they absorb more X-Rays and appear white on the final image whereas less dense areas appear more greyish. The way the detector works is that it measures the amount of X-Rays absorbed and converts it into electrical signals. These electrical signals are sent to a computer that process the data using very complex mathematical algorithms which is further reconstructed into cross sectional images of the body/target organ. This is pretty much a highly simplified explanation of how a CT scan works and going into any more depth would require a deep dive into almost every little fact I stated ! </p>

    <h3>The physics of how X-Rays interact with our tissues in the target organ.</h3>

    <p>When X-Rays images are taken of your body there are 3 main ways that they interact with the matter that they are incident upon. These 3 ways are : The Photoelectric effect , Compton scattering and Pair production. For a brief overview of all of all them :</p>

    <p><strong>Photoelectric effect</strong> - When light of a certain energy / frequency is incident on a material electrons are ejected onto the surface . The photons (a particle of light) transfer their energy to the electrons in the material causing them to overcome the binding energy holding them within the material. </p>

    <p style="text-align:center"><img src="../../First%20blog/photoelectriceffect.png" alt="Photoelectric effect diagram"></p>

    <p><strong>Compton scattering</strong> - The phenomenon where an incoming photon collides with a loosely bound or free electron resulting in a transfer of energy and momentum between the electron and the incident photon . This interaction causes the photon to be deflected from its original path.</p>

    <p style="text-align:center"><img src="../../First%20blog/comptonscattering.png" alt="Compton scattering diagram"></p>

    <p><strong>Pair production</strong> - When a photon of high energy transforms into an electron positron pair ( electron antimatter counterpart ) when it passes near a strong electric field such as an atoms nucleus.</p>

    <p style="text-align:center"><img src="../../First%20blog/pairproduction.png" alt="Pair production diagram"></p>

    <h3>But how do these processes take place in your body ?</h3>

    <h4>The photoelectric effect</h4>

    <p>when the X-Ray with sufficient energy is incident on the atom of a tissue and is in the trajectory of hitting an electron , when they collide the X-Ray will transfer all its energy to the electron causing it to be ejected from the atom and become a photoelectron. Once this happens there is a vacancy in one of the shells and the atom becomes unstable due to this. In order to stabilize the atom an electron from a higher energy level will fall down to that vacancy and in this process a photon will be emitted in the form of a characteristic X-Ray or an Auger electron . Like discussed before a characteristic X-Ray has a specific energy because energy levels are quantized so each drop will have a certain energy. Auger electrons are electrons that are emitted in the case that the energy transferred from the electron transition is just transferred to another electron which gets emitted. Those emitted electrons are called Auger electrons.</p>

    <h4>The Compton Scatter</h4>

    <p>When an X-Ray photon collides with a free electron or an outer shell electron of an atom it partially transfers its energy to the electron which causes the photon to scatter. The electron that has absorbed the energy is ejected from the atom and is referred to as the Compton electron. The photon now with a reduced energy is scattered at angle of theta radians. We can determine the angle it is scattered by with the equation :</p>

    <p style="text-align:center"><img src="../../First%20blog/cscaterequation.png" alt="Compton scatter equation"></p>

    <p>Compton scattering usually only applies at intermediate energies. At low energies photoelectric absorption dominates and at high energies pair production dominates. </p>

    <h4>Pair production</h4>

    <p>When an X-Ray photon has energy greater than 1.022 MeV it can turn into an electron positron pair when it comes close to an electric field of a nucleus of an atom in your body. The positron ( antiparticle of electron ) created after the process of pair production will eventually encounter another electron and annihilate. Annihilation is the process where a particle and its corresponding anti particle collide and convert their mass into energy. This energy is in the form of photons which travel in opposite directions.</p>

    <p style="text-align:center"><img src="../../First%20blog/annihilation.png" alt="Annihilation photons"></p>

    <p>In the context of X-Rays these 2 photons correspond to X-Ray photons. So the positron and electron annihilate producing enough energy for the photons emitted to be in the form of X-Ray photons. These photons will then travel through the body and be detected by imaging equipment. However pair production is very uncommon in CT scans as the X-Rays produced in CT scans have an energy lower than the energy required for pair production and then annihilation to occur so photoelectric absorption and Compton scattering dominates. Pair production mainly takes place in PET scans , which will be another blog !</p>
  `
}

  }
];

// Helpers so BOTH pages can read posts no matter which pattern they use
window.POSTS = POSTS;
window.getAllPosts = () => POSTS.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
window.getPostBySlug = (slug) => POSTS.find(p => p.slug === slug) || null;



