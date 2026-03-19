function startGame() {
    const target = Math.floor(Math.random() * 1000001);
    let maxAttempts = 20;
    let attempt = 1;

    while (attempt <= maxAttempts) {
        let input = prompt(`${attempt}. tipped: Írd be a tipped:`);

        if (input === null) {
            alert("Kiléptél a játékból.");
            return;
        }

        let guess = parseInt(input);

        if (isNaN(guess)) {
            alert("Ez nem szám! Próbáld újra.");
            continue;
        }

        if (guess === target) {
            alert(`Gratulálok, ${attempt} lépésből eltaláltad!`);
            return;
        } else if (guess > target) {
            alert(`${attempt}. tipp nem talált: A megoldás kisebb.`);
        } else {
            alert(`${attempt}. tipp nem talált: A megoldás nagyobb.`);
        }

        attempt++;
    }

    alert(`Sajnos ez most nem sikerült! A megoldás: ${target}`);
}
