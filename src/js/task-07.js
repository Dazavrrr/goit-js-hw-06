const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize() {
  const fontSize = fontSizeControl.value + "px";

  textSpan.style.fontSize = fontSize;
}