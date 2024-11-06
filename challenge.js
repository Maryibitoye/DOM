const giftBox = document.getElementById("gift-box");
const clickBtn = document.getElementById("click-btn");

console.log(giftBox);
console.log(clickBtn);

clickBtn.addEventListener("click", () => {
  console.log("clicked");
  giftBox.classList.toggle("hide");
});

