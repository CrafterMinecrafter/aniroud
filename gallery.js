setInterval(f => {
    if (window.location.pathname != "/aniroud/pages/EN/gallery.html") {
      return;
    };
const imageContainer = document.querySelector(".bb");
let ascending = true;

function sortImages() {
  const imageBoxes = Array.from(
    imageContainer.getElementsByClassName("image-box")
  );
  imageBoxes.sort(function (a, b) {
    if (ascending) {
      return b.clientHeight - a.clientHeight; 
    } else {
      return a.clientHeight - b.clientHeight;
    }
  });

  imageBoxes.forEach(function (box) {
    imageContainer.appendChild(box);
  });

  ascending = !ascending;
}

sortImages();
}, 1000, null);