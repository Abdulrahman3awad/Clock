function s() {
  let arrow = document.querySelector(".s");
  let date = new Date();
  let seconds = date.getSeconds();
  arrow.style.transform = `rotate(${seconds * 6}deg)`;
}
setInterval(s, 1000);
function m() {
  let arrow = document.querySelector(".m");
  let date = new Date();
  let minutes = date.getMinutes();
  arrow.style.transform = `rotate(${minutes * 6}deg)`;
}
setInterval(m, 1000);
function h() {
  let arrow = document.querySelector(".h");
  let date = new Date();
  let hours = date.getHours();
  arrow.style.transform = `rotate(${hours * 30}deg)`;
}
setInterval(h, 1000);
function digit() {
  let digit = document.querySelector(".digit");
  let h = digit.children[0];
  let m = digit.children[1];
  let s = digit.children[2];
  let date = new Date();
  h.textContent = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  m.textContent = date.getMinutes();
  s.textContent = date.getSeconds();
}
setInterval(digit, 1000);
