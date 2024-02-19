var button = document.getElementById("changeBtn");
var contentParagraph = document.getElementById("content");

button.addEventListener("click", ()=> {
  var image = document.createElement("img");
  image.src = "./assets/task.png";
  contentParagraph.innerHTML = "";
  contentParagraph.appendChild(image);
});

function links() {

  const hamBurger = document.querySelector(".ham-burger");
  const nav = document.querySelector(".navbar");
  const items = document.querySelector(".items");

  hamBurger.addEventListener("click", ()=> {
    items.classList.toggle("nav-active");

    hamBurger.classList.toggle("toggle");
  });
};
links();