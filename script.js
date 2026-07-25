const bootMessages = [
    "INITIALIZING SECURE TERMINAL...",
    "",
    "Loading encrypted archive...",
    "Checking system integrity...",
    "Scanning nearby device...",
    "Potential user detected.",
    "",
    "Running identity verification...",
    "...",
    "Interesting.",
    "",
    "Identity verification required."
];

const terminal = document.getElementById("terminal-output");
const bootScreen = document.getElementById("boot-screen");
const authScreen = document.getElementById("auth-screen");

const typingSpeed = 38;
const linePause = 350;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLine(text) {

    const line = document.createElement("div");
    terminal.appendChild(line);

    for (const char of text) {
        line.textContent += char;
        await sleep(typingSpeed);
    }

    await sleep(linePause);
}

async function startBootSequence() {

    for (const message of bootMessages) {
        await typeLine(message);
    }

    await sleep(1200);

    bootScreen.style.opacity = "0";

    await sleep(800);

    bootScreen.style.display = "none";

authScreen.classList.remove("hidden");
authScreen.style.display = "flex";
authScreen.style.opacity = "1";
}

window.addEventListener("load", startBootSequence);

document
    .getElementById("startButton")
    .addEventListener("click", () => {

        alert("Level 1 begins here in the next milestone 🚀");

    });
