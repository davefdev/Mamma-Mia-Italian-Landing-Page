const btn = document.querySelectorAll(".btn");
const mainImg = document.querySelector(".main-img");

btn[0].onclick = function () {
  mainImg.src = "img/dish.jpg";
};
btn[1].onclick = function () {
  mainImg.src = "img/dish-2.jpg";
};
btn[2].onclick = function () {
  mainImg.src = "img/dish-3.jpg";
};
btn[3].onclick = function () {
  mainImg.src = "img/dish-4.jpg";
};
btn[4].onclick = function () {
  mainImg.src = "img/dish-5.jpg";
};
btn[5].onclick = function () {
  mainImg.src = "img/dish-6.jpg";
};
btn[6].onclick = function () {
  mainImg.src = "img/dish-7.jpg";
};
btn[7].onclick = function () {
  mainImg.src = "img/dish-8.jpg";
};

function animation() {
  mainImg.classList.add("zoom");
  setTimeout(function () {
    mainImg.classList.remove("zoom");
  }, 600);
  for (b of btn) {
    b.classList.remove("active");
  }
}
