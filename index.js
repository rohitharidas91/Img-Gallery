var thumbs = document.getElementsByClassName("img-thumbnail").length;
for(var i = 0; i < thumbs; i++){
  document.getElementsByClassName("img-thumbnail")[i].addEventListener("click", previewImage);
}

function previewImage(){
  var imageSource = this.getAttribute("src");
  document.getElementById("image-preview").setAttribute("src",imageSource);
}
