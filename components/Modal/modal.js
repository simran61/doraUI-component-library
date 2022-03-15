var modal = document.getElementById("modal");
var btnDemo = document.getElementById("btnDemo");
var closeIcon = document.getElementsByClassName("close")[0];

btnDemo.onclick = function() {
  modal.style.display = "block";
}

closeIcon.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}