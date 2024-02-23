const container = document.querySelector(".container");

const star1 = document.querySelector("#star0")
const star2 = document.querySelector("#star1")
const star3 = document.querySelector("#star2")
const star4 = document.querySelector("#star3")
const star5 = document.querySelector("#star4")

const stars =[star1,star2,star3,star4,star5]

container.addEventListener("click",(e)=>{
     let target = e.target.id;
     let indexchar = target.slice(4);
     let index = parseInt(indexchar);
     for(var i=0; i<=index ;i++){
        stars[i].style.filter= "grayscale(0%)"
     }
 } )
