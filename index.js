document.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && !isLoading) {
    e.preventDefault(); 
    var targetPage = e.target.getAttribute("href"); 
    loadPage(targetPage); 
  }
});

var isLoading = false; 

function loadPage(url) {
  isLoading = true; 

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data; 
      history.pushState({}, "", url); 
      isLoading = false; 
    })
    .catch((error) => {
      console.error("Ошибка при загрузке страницы: " + error);
      isLoading = false;
    });
}
loadPage("/pages/EN/main.html");
