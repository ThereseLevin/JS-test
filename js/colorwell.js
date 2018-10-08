let colorWell;
let defaultColor = "#FFFF0F";

//NÄr fönstret laddas, kör funktionen startup
window.addEventListener("load", startUp, false);

function startUp() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateAll, false);
    colorWell.addEventListener("change", updateFirst, false);
    colorWell.select();
}

function updateFirst(event){
    let p = document.querySelector("p");
    let body = document.querySelector("body");

    if (p){
        p.style.color = event.target.value;
    } 
    
}

function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p){
        p.style.color = event.target.value;
    });
}