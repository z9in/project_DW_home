//sub_2_0.js

let btnEl = document.querySelectorAll(".pop")[0];
let paperEl = document.getElementById("paper");
let closeEl = document.getElementsByTagName("button")[1];
let imageEl = document.getElementsByClassName("images")[0];

// btnEl.addEventListener('click',translat);

// function translat() {
//     paperEl.style.display='block'
//     paperEl.style = {
//         'height' : '500px'
//     }
// }

let varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

if (screen.width < 768) {
  btnEl.addEventListener("click", () => (paperEl.style.display = "block"));

  closeEl.addEventListener("click", () => (paperEl.style.display = "none"));

  let num = 0;
  imageEl.addEventListener("click", translate);
  function translate() {
    num++;
    let numb = num % 14;
    $("#paper .images img").css({
      display: "none",
    });
    $("#paper .images img").eq(numb).css({
      display: "block",
    });
  }
} else if (screen.width > 768) {
  btnEl.addEventListener("click", () => (paperEl.style.display = "block"));

  closeEl.addEventListener("click", () => (paperEl.style.display = "none"));
}
