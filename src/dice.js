window.addEventListener(
	"DOMContentLoaded",
	function () {
		const buttonRoolDice = document.querySelector(".dice-roll");

		function resetDice() {
			const diceSide1 = document.getElementById("dice-side");
			diceSide1.innerHTML = "0";
		}

		function rollDice() {
			const diceSide1 = document.getElementById("dice-side");

			const side1 = Math.floor(Math.random() * 6) + 1;
			const diceTotal = side1;

			diceSide1.innerHTML = side1;

			// Устанавливаем таймер для сброса значения кубика через 7 секунд
			setTimeout(resetDice, 6000);
		}

		buttonRoolDice.addEventListener("click", rollDice, false);
	},
	false,
);
