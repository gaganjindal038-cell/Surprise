const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    startButton.textContent = "Access Granted...";
    startButton.disabled = true;

    setTimeout(() => {
        alert("Level 1 coming soon 🚀");
        startButton.textContent = "Begin Investigation";
        startButton.disabled = false;
    }, 1200);
});
