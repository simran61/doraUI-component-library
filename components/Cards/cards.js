const dismiss1 = document.querySelector(".dismiss1");
const dismissCard1 = document.querySelector(".dismiss_card1");

const dismiss2 = document.querySelector(".dismiss2");
const dismissCard2 = document.querySelector(".dismiss_card2");

const dismiss3 = document.querySelector(".dismiss3");
const dismissCard3 = document.querySelector(".dismiss_card3");

dismiss1.addEventListener("click", () => {
  dismissCard1.style.display = "none";
});

dismiss2.addEventListener("click", () => {
  dismissCard2.style.display = "none";
});

dismiss3.addEventListener("click", () => {
  dismissCard3.style.display = "none";
});
