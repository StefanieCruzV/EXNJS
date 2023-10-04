var alertcoo= document.querySelector(".alerts");
function accepts(element){
    alertcoo.remove();
}

function displayalert(element){
     //console.log(element);
    alert("Your car is empty");
  }
 
  var imagen= document.querySelector("#change");
  //console.log(imagen);
  function changeimg(element){
//console.log(element.src);
    imagen.src = "succulents-2.jpg";
    imagen.alt = "image2";
//   console.log(imagen.innerText);
  }
  function imgorg(element){
    imagen.src = "succulents-1.jpg";
    imagen.alt = "image1";
  }