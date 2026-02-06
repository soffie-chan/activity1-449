
const button = document.getElementById("button");
const hand = document.getElementById("hand");
const bark = document.getElementById("bark");

button.addEventListener("mousedown",()=>{
    hand.style.top = "190px";
    bark.style.visibility = "visible";
});
button.addEventListener("mouseup",()=>{
    hand.style.top = "0px";
    bark.style.visibility = "hidden";
});