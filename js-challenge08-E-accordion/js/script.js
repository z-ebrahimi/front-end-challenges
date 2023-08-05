const headItems = document.querySelectorAll(".accordion-head-item");
const bodyItems = document.querySelectorAll(".accordion-body-item");

headItems.forEach(function (headItem, index, array) {
  headItem.addEventListener("click", function (event) {
    const active_headItem = event.target;

    headItems.forEach(function (headItem) {
      if (headItem === active_headItem) {
        headItem.classList.toggle("active");
      } else {
        headItem.classList.remove("active");
      }
    });

    bodyItems.forEach(function (bodyItem) {
      const headItemTarget = active_headItem.getAttribute("data-target");
      const bodyItemTarget = bodyItem.getAttribute("data-target");
      if (headItemTarget === bodyItemTarget) {
        bodyItem.classList.toggle("active");
      } else {
        bodyItem.classList.remove("active");
      }
    });
  });
});
