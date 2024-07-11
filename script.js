function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const feedback = document.getElementById("feedback");
    const hint = document.getElementById("hint");
    const museum = document.getElementById("museum");
    
    if (answer === "christophe") {
        feedback.textContent = "Correct !";
        feedback.style.color = "green";
        hint.classList.add("hidden");
        museum.classList.remove("hidden");
    } else {
        feedback.textContent = "Incorrect, essayez encore.";
        feedback.style.color = "red";
        hint.classList.remove("hidden");
        museum.classList.add("hidden");
    }
}