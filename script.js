document.addEventListener('DOMContentLoaded', (event) => {
    let simulationInterval;
    let frequencyInput = document.getElementById('frequency');
    let intensityInput = document.getElementById('intensity');
    let metalSelect = document.getElementById('metal');
    let freqValue = document.getElementById('freq-value');
    let intensityValue = document.getElementById('intensity-value');
    let photonEnergySpan = document.getElementById('photon-energy');
    let electronEnergySpan = document.getElementById('electron-energy');
    let thresholdFrequencySpan = document.getElementById('threshold-frequency');

    function updateValues() {
        let frequency = parseFloat(frequencyInput.value);
        let intensity = parseFloat(intensityInput.value);
        let workFunction = parseFloat(metalSelect.value);

        // Photon energy in eV
        let photonEnergy = (6.626e-34 * frequency) / 1.60218e-19;

        // Threshold frequency in Hz (convert eV → J before dividing by Planck's constant)
        let thresholdFrequency = (workFunction * 1.60218e-19) / 6.626e-34;

        let electronEnergy = photonEnergy - workFunction;

        freqValue.textContent = `${(frequency / 1e12).toFixed(2)} x 10^12 Hz`;
        intensityValue.textContent = intensity;
        photonEnergySpan.textContent = photonEnergy.toFixed(2);
        electronEnergySpan.textContent = electronEnergy > 0 ? electronEnergy.toFixed(2) : 0;

        // Display threshold frequency in scientific notation
        let thresholdFrequencyFormatted = thresholdFrequency.toExponential(2);
        thresholdFrequencySpan.textContent = `${thresholdFrequencyFormatted} Hz`;
    }

    frequencyInput.addEventListener('input', updateValues);
    intensityInput.addEventListener('input', updateValues);
    metalSelect.addEventListener('change', updateValues);

    window.startSimulation = function() {
        if (simulationInterval) {
            clearInterval(simulationInterval);
        }
        emitPhotons();
    };

    window.stopSimulation = function() {
        clearInterval(simulationInterval);
    };

    // Always emit photons, regardless of energy
    function emitPhotons() {
        let frequency = parseFloat(frequencyInput.value);
        let intensity = parseFloat(intensityInput.value);
        let workFunction = parseFloat(metalSelect.value);
        let photonEnergy = (6.626e-34 * frequency) / 1.60218e-19; // eV

        // Call emitPhoton unconditionally
        emitPhoton(photonEnergy, workFunction);

        simulationInterval = setTimeout(emitPhotons, 1000 / intensity);
    }

    // Pass photonEnergy and workFunction to decide if electron should be emitted
    function emitPhoton(photonEnergy, workFunction) {
        let svg = document.getElementById('photoelectric-svg');

        // Create a yellow circle to represent the photon
        let photon = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        photon.setAttribute('cx', 100);
        photon.setAttribute('cy', 100);
        photon.setAttribute('r', 5);
        photon.setAttribute('fill', '#FFD700'); // Yellow
        svg.appendChild(photon);

        let distance = 300;
        let duration = 1000;
        let startTime = null;

        function animatePhoton(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let x = Math.min(100 + (progress / duration) * distance, 400);
            photon.setAttribute('cx', x);

            // Continue moving photon until it reaches x=400
            if (x < 400) {
                requestAnimationFrame(animatePhoton);
            } else {
                // Photon hits the metal; decide if electron is emitted
                if (photonEnergy > workFunction) {
                    emitElectron();
                }
                svg.removeChild(photon);
            }
        }

        requestAnimationFrame(animatePhoton);
    }

    function emitElectron() {
        let svg = document.getElementById('photoelectric-svg');
        let electron = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        electron.setAttribute('cx', 400);
        electron.setAttribute('cy', 100);
        electron.setAttribute('r', 5);
        electron.setAttribute('fill', '#0000FF'); // Blue
        svg.appendChild(electron);

        let distance = 100;
        let duration = 1000;
        let startTime = null;

        function animateElectron(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let x = Math.max(400 - (progress / duration) * distance, 300);
            electron.setAttribute('cx', x);

            if (x > 300) {
                requestAnimationFrame(animateElectron);
            } else {
                svg.removeChild(electron);
            }
        }

        requestAnimationFrame(animateElectron);
    }

    // Initialize the displayed values once page loads
    updateValues();
});

// -------------------------------------------
// Additional page navigation functions
// -------------------------------------------
function showHome() {
    document.getElementById('homeContent').style.display = 'block';
    document.getElementById('year12Content').style.display = 'none';
    document.getElementById('photoelectricEffectContent').style.display = 'none';
    toggleMenu();
}

function showYear(year) {
    document.getElementById('homeContent').style.display = 'none';
    if (year === 'year12') {
        document.getElementById('year12Content').style.display = 'block';
    } else if (year === 'year13') {
        document.getElementById('year13Content').style.display = 'block';
    }
    document.getElementById('photoelectricEffectContent').style.display = 'none';
    toggleMenu();
}

function showExperiment(experiment) {
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('year12Content').style.display = 'none';
    document.getElementById('photoelectricEffectContent').style.display = 'block';
    toggleMenu();
}

function toggleMenu() {
    var sideNav = document.getElementById('side-nav');
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
    } else {
        sideNav.style.width = "250px";
    }
}
