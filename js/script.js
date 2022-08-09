const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

const keysArr = [];
for (const key of keys) {
  keysArr.push(Number(key.dataset.key));
}
const audiosArr = [];
for (const audio of audios) {
  audiosArr.push(Number(audio.dataset.key));
}

window.addEventListener("keydown", function (e) {
  try {
    playSound(e.keyCode);
  } catch (error) {}
});

function playSound(dataKey) {
  audios[audiosArr.indexOf(dataKey)].cloneNode(true).play();
  keys[keysArr.indexOf(dataKey)].classList.add("playing");
  setTimeout(function () {
    keys[keysArr.indexOf(dataKey)].classList.remove("playing");
  }, 70);
}
