
const button = document.getElementById("button");
const hand = document.getElementById("hand");

button.addEventListener("mousedown",()=>{
    hand.style.top = "180px";

});
button.addEventListener("mouseup",()=>{
    hand.style.top = "0px";

});