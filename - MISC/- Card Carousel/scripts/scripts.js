// Assign variables
let currentCard = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function showCard(index) {
  // Hide all the cards first
  cards.forEach(card => card.classList.remove('active'));
  // Then show show the current card
  cards[index].classList.add('active');
}
  // Button event to move to next card
function nextCard() {
  currentCard = (currentCard + 1) % totalCards;
  showCard(currentCard);
}
  // Button event to move to previous card
function prevCard() {
  currentCard = (currentCard - 1 + totalCards) % totalCards;
  showCard(currentCard);
}
  // Show first card
showCard(currentCard);