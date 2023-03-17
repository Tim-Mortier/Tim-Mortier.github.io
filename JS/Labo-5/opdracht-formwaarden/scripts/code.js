const setup = () => {
    document.getElementById("submit").addEventListener("click", result);
}
const result = () => {
    if(document.getElementById("cheRoker").checked){
        console.log("is een roker");
    } else{
        console.log("is geen roker")
    }
    if(document.getElementById("radNederlands").checked){
        console.log("spreekt nederlands")
    }
    if(document.getElementById("radFrans").checked){
        console.log("spreekt frans")
    }
    if(document.getElementById("radEngels").checked){
        console.log("spreekt engels")
    }
    let resultaat = "Bestelling bestaat uit "
    let options = document.getElementById("selBestelling").options
    for(let i = 0; i < options.length; i++){
        if(options[i].selected){
            resultaat += options[i].textContent + ", ";
        }
    }
    console.log(resultaat)
}
window.addEventListener("load", setup);