document.addEventListener("DOMContentLoaded", function () {
	const cells = document.querySelectorAll(".cell");
	const modalOverlay = document.getElementById("modalOverlay");
	const gallery = document.getElementById("gallery");
	const closeBtn = document.getElementById("closeBtn");

	cells.forEach(cell => {
		cell.addEventListener("click", showGallery);
	});

	function showGallery(event) {
		const index = event.currentTarget.dataset.index;
		const images = getImagesByIndex(index);

		gallery.innerHTML = "";
		for (const imgSrc of images) {
			const img = document.createElement("img");
			img.src = imgSrc;
			gallery.appendChild(img);
		}

		modalOverlay.style.display = "block";
	}

	function hideGallery() {
		modalOverlay.style.display = "none";
	}

	closeBtn.addEventListener("click", hideGallery);
});

function getImagesByIndex(index) {
	// Замените на ваш код для получения картинок по индексу ячейки
	return [`./images/${index}a.jpg`, `./images/${index}b.jpg`];
}
