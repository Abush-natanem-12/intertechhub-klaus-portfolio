// ! LOGICS FOR THE HEADER PART
// TODO TOGGLING THE SMALL VIEW HEADER

let openNav = false;
document
  .querySelector(".open-small-nav")
  .addEventListener("click", function () {
    document
      .querySelector(".small-nav-container")
      .classList.remove("remove-nav");
  });

document
  .querySelector(".close-small-nav")
  .addEventListener("click", function () {
    document.querySelector(".small-nav-container").classList.add("remove-nav");
  });

document.querySelectorAll(".ab").forEach((el) => {
  el.addEventListener("click", function (e) {
    document.querySelector(".small-nav-container").classList.add("remove-nav");
  });
});
