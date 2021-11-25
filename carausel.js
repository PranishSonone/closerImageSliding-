// varible

 //let thumbunails =document.getElementsByClassName("thumbunails");
// let slider = document.getElementById("slider");
let buttonRight =document.getElementById("slide-right");
let buttonLeft =document.getElementById("slide-left")

buttonLeft.addEventListener("click" ,() => {
  slider.scrollLeft -=300;                         //100 px se aage jayega 
})

buttonRight.addEventListener("click" ,() => {
    slider.scrollLeft +=300 ;
  })

