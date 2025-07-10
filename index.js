document.addEventListener("DOMContentLoaded", function () {
  let switcherLis = document.querySelectorAll(".shuffle li");
  let boxes = document.querySelectorAll(".imgs-container .box"); // Select image boxes

  switcherLis.forEach((li) => {
    li.addEventListener("click", function () {
      removeActive(this);
      manageImgs(this);
    });
  });

  // Remove Active Class From All List Items And Add To The Clicked One
  function removeActive(activeLi) {
    switcherLis.forEach((li) => li.classList.remove("active"));
    activeLi.classList.add("active");
  }

  // Manage Image Filtering
  function manageImgs(activeLi) {
    let category = activeLi.dataset.cat.replace(".", ""); // Get category without the "."

    boxes.forEach((box) => {
      let img = box.querySelector("img"); // Get the image inside the box
      if (category === "all" || img.classList.contains(category)) {
        box.style.display = "block"; // Show matching boxes
      } else {
        box.style.display = "none"; // Hide non-matching boxes
      }
    });
  }
});
