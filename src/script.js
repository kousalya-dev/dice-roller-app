function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = `https://upload.wikimedia.org/wikipedia/commons/${diceImagePath(dice1)}`;
    document.getElementById("dice2").src = `https://upload.wikimedia.org/wikipedia/commons/${diceImagePath(dice2)}`;

    const resultText = dice1 > dice2
        ? "Player 1 Wins!"
        : dice2 > dice1
            ? "Player 2 Wins!"
            : "It's a Draw!";
    document.getElementById("resultText").textContent = resultText;
}

function diceImagePath(num) {
    return {
        1: "1/1b/Dice-1-b.svg",
        2: "5/5f/Dice-2-b.svg",
        3: "b/b1/Dice-3-b.svg",
        4: "f/fd/Dice-4-b.svg",
        5: "0/08/Dice-5-b.svg",
        6: "2/26/Dice-6-b.svg"
    }[num];
}
