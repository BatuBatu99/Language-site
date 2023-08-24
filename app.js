const main = document.getElementById("main");
const baslik = document.getElementById("baslik")

let isDarkMode = true;

function switchBackgroundColor () {

    if(isDarkMode === true){
        main.style.backgroundColor = "black";
        main.style.color = "white";
        baslik.style.color = "white";
        
        isDarkMode = false;
    } else {
        main.style.backgroundColor = "white";
        main.style.color = "black";
        baslik.style.color = "black";
        isDarkMode = true;
    }

}