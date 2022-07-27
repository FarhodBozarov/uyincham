let d = (div) => document.createElement(div);
let game = document.getElementById("game");
let restart = document.getElementById("restart");
restart.addEventListener("click", () => document.location.reload(true));
const emojis = [
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🍅",
  "🍋",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🍗",
  "🧅",
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🍅",
  "🍋",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🍗",
  "🧅",
]

h = 0
let massiv = []
let uzunlik = emojis.length - 1;
function creatingCard() {
  let flipCard = d("div");
  flipCard.className = "flip-card";
  let flipCardInner = d("div");
  flipCardInner.className = "flip-card-inner";
  let flipCardFront = d("div");
  flipCardFront.className = "flip-card-front";
  let flipCardBack = d("div");
  flipCardBack.className = "flip-card-back";
  flipCardBack.innerText = emojis[uzunlik];
  uzunlik--;
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCard.appendChild(flipCardInner);
  flipCardInner.style.transform = "rotateY(180deg)"
  setTimeout(() => {
    flipCardInner.style.transform = "rotateY(0deg)"
  }, 5000)
    flipCard.addEventListener("click", () => {
      h ++
      flipCardInner.style.transform = "rotateY(180deg)"
      massiv.push(flipCardInner)
      if (h === 2) {
        if (massiv[0].innerText === massiv[1].innerText) {
          massiv[0].style.transform = "rotateY(180deg)"
          massiv[1].style.transform = "rotateY(180deg)"
        }
        else {
          setTimeout(() => {
            massiv[0].style.transform = "rotateY(0deg)"
            massiv[1].style.transform = "rotateY(0deg)"
          }, 1000)
        }
      }
      if (massiv.length === 3) {
        massiv = []
        massiv.push(flipCardInner)
        h = 1
      }
    });
  game.appendChild(flipCard);
}
function shuffle(array) {
  let currentIndex = emojis.length,
  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
shuffle(emojis)

for (let i = 0; i < 36; i++) {
  creatingCard();
}