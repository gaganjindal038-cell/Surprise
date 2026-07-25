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
const caseScreen = document.getElementById("case-screen");
const evidenceScreen = document.getElementById("evidence-screen");
const keyScreen = document.getElementById("key-screen");

const evidenceTitle = document.getElementById("evidence-title");
const evidenceText = document.getElementById("evidence-text");
const progress = document.getElementById("progress");

const typingSpeed = 38;
const linePause = 350;

const evidence = [
    {
        title: "Evidence 1",
        text: "Placeholder clue. We'll replace this with a real clue later."
    },
    {
        title: "Evidence 2",
        text: "Placeholder clue. We'll replace this with a real clue later."
    },
    {
        title: "Evidence 3",
        text: "Placeholder clue. We'll replace this with a real clue later."
    },
    {
        title: "Memorable Place",
        text: "This will later contain your real memorable location clue."
    }
];

let currentEvidence = 0;
let completed = [false, false, false, false];

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showScreen(screen){

    bootScreen.classList.add("hidden");
    authScreen.classList.add("hidden");
    caseScreen.classList.add("hidden");
    evidenceScreen.classList.add("hidden");
    keyScreen.classList.add("hidden");

    screen.classList.remove("hidden");

}

async function typeLine(text){

    const line=document.createElement("div");
    terminal.appendChild(line);

    for(const char of text){

        line.textContent+=char;

        await sleep(typingSpeed);

    }

    await sleep(linePause);

}

async function startBootSequence(){

    for(const line of bootMessages){

        await typeLine(line);

    }

    await sleep(1000);

    showScreen(authScreen);

}

window.addEventListener("load",startBootSequence);

document.getElementById("startButton").onclick=()=>{

    showScreen(caseScreen);

};

document.querySelectorAll(".evidence-btn").forEach(button=>{

    button.onclick=()=>{

        currentEvidence=Number(button.dataset.id)-1;

        evidenceTitle.textContent=evidence[currentEvidence].title;
        evidenceText.textContent=evidence[currentEvidence].text;

        showScreen(evidenceScreen);

    };

});

document.getElementById("completeEvidence").onclick=()=>{

    completed[currentEvidence]=true;

    let total=completed.filter(Boolean).length;

    progress.textContent=`Progress: ${total} / 4`;

    showScreen(caseScreen);

    if(total===4){

        setTimeout(()=>{

            showScreen(keyScreen);

        },500);

    }

};

document.getElementById("continueButton").onclick=()=>{

    alert("Level 2 begins in the next slice 🚀");

};
