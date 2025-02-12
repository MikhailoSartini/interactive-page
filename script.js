const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Evvai x8!! Si parte!";
  gif.src = "https://media2.giphy.com/media/YbXgFxDiLXLPXWruQN/200w.gif?cid=6c09b952vik7bhn7089pmtx029rnby3gl56rkfs91ee2k2la&ep=v1_gifs_search&rid=200w.gif&ct=g";
  yesBtn.remove()
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = 'absolute';

  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
