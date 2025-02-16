let min_interval;
let max_interval;
let number_attempts;
let random_number;

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function begin() {
    let difficulty = document.getElementById("difficulty").value;

    if (difficulty === "facile") {
        min_interval = 1;
        max_interval = 25;
        number_attempts = 5;
    } else if (difficulty === "intermediaire") {
        min_interval = 1;
        max_interval = 50;
        number_attempts = 7;
    } else if (difficulty === "difficile") {
        min_interval = 1;
        max_interval = 100;
        number_attempts = 10;
    }

    random_number = generateRandom(min_interval, max_interval);

    alert(`Devinez le nombre entre ${min_interval} et ${max_interval}. Vous avez ${number_attempts} tentatives.`);

    // Activer les éléments pour le jeu
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("resetBtn").style.display = "none";
}

function checkGuess() {
    let user_guess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(user_guess) || user_guess < min_interval || user_guess > max_interval) {
        alert(`Veuillez entrer un nombre valide entre ${min_interval} et ${max_interval}.`);
        return;
    }

    if (user_guess === random_number) {
        alert("🎉 Bravo, vous avez trouvé le nombre !");
        endGame();
    } else {
        number_attempts--;
        if (number_attempts > 0) {
            let hint = user_guess < random_number ? "Le nombre est plus grand." : "Le nombre est plus petit.";
            alert(`${hint}\nIl vous reste ${number_attempts} tentatives.`);
        } else {
            alert(`Vous avez perdu ! Le nombre était ${random_number}.`);
            endGame();
        }
    }
}

function endGame() {
    // Désactiver les éléments du jeu
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("resetBtn").style.display = "block";
}

function resetGame() {
    // Réinitialiser les éléments du jeu pour recommencer
    document.getElementById("guessInput").value = "";
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("resetBtn").style.display = "none";
}
