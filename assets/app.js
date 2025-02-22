const d = document;
const cardShare = d.getElementById("share-card");
const btnShare = d.getElementById("share-btn");

function toggleCard() {
    cardShare.classList.toggle("visible");
}

btnShare.addEventListener('click', toggleCard);
