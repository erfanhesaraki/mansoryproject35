let _openMenu = document.getElementById("open-menu");
let _closeMenu = document.getElementById("close-menu");
let _headerMenu = document.getElementById("header-menu");

_openMenu.addEventListener("click", function () {
  _headerMenu.classList.add("menu-header-is-active");
});

_closeMenu.addEventListener("click", function () {
  _headerMenu.classList.remove("menu-header-is-active");
});

function _slide(self) {
  x = self.children;
  x = x[0].getAttribute("src");
  document.querySelector(".window>img").classList.remove("d-none");
  document.querySelector(".window>img").classList.add("d-flex");
  document.querySelector(".window>img").setAttribute("src", x);
}

// develop by erfan hesaraki 09190275164 erfan.hesaraki@gmail.com
